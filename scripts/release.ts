import c from 'chalk';
import { confirm, select } from '@inquirer/prompts';
import { hideBin } from 'yargs/helpers';
import path from 'node:path';
import { sh, shI, verifyGhInstalled } from './utils';
import { readJson, root, updateVersions, writeJson } from './versions';
import yargs from 'yargs';

const REVIEWERS = ['pwolfert', 'zarahzachz', 'kim-cmsds', 'tamara-corbalt', 'jack-ryan-nava-pbc'];

async function verifyNoUnstagedChanges() {
  if (sh('git status -s')) {
    const yesContinue = await confirm({
      message: 'You have unstaged changes that will be lost. Would you like to continue anyway?',
    });
    if (!yesContinue) {
      console.log(c.yellow('Exiting...'));
      process.exit(1);
    }
  }
}

function getCurrentCommit() {
  return sh('git rev-parse HEAD');
}

function getCurrentBranch() {
  return sh('git rev-parse --abbrev-ref HEAD');
}

function readLastPublishCommit() {
  const commitHash = getCurrentCommit();
  const commitMessage = sh('git log -1 --pretty=%B');
  // Only make tags for the actual design system packages
  const tags = commitMessage.match(/@cmsgov\/(?:design-system@|ds-).*$/gm);

  if (!tags) {
    throw Error('The previous commit was not a publish commit. Cannot read tags!');
  }

  return { commitHash, commitMessage, tags };
}

async function undoLastCommit() {
  const { commitHash, tags } = readLastPublishCommit();

  console.log(c.red('The last publish commit will be deleted locally and on origin.'));
  console.log(c.red('The following tags will also be deleted locally and on origin:\n'));
  console.log(tags.join('\n'));
  console.log('\n');

  const yesContinue = await confirm({ message: 'Are you sure you want to continue?' });
  if (!yesContinue) {
    console.log(c.yellow('No action performed. Exiting...'));
    process.exit(1);
  }

  console.log(c.green('Deleting tags and reverting commit...'));

  const tagsOneLine = tags.join(' ');
  sh(`git tag -d ${tagsOneLine}`);
  sh(`git push origin --delete ${tagsOneLine}`);
  console.log(c.green('Tags deleted.'));

  sh(`git reset --hard ${commitHash}~1`);
  sh(`git push --force origin ${getCurrentBranch()}`);
  console.log(c.green('Publish commit deleted.'));
}

const newDesignSystemVersion = (): string => {
  const newDesignSystemVersionJSON = JSON.parse(sh(`npm version -w @cmsgov/design-system --json`));
  return newDesignSystemVersionJSON['@cmsgov/design-system'];
};

const updateDSVersion = (json: JSON | any): JSON => {
  const dsKey = '@cmsgov/design-system';
  json.dependencies[dsKey] = newDesignSystemVersion();
  return json;
};

/*
 * Utilize `npm ls` to get all members of our design system workspace in JSON format.
 * This allows us to dynamically update our child package.json files later on
 *  rather than explicitly enumerating our examples and child design systems.
 * The info we want (member name and package.json file location) are at different levels in the JSON,
 *  so we have to dig a bit.
 * We grab the package names by getting all of the keys in the object associated with the 'dependencies' key.
 * We loop over the names to get the package.json file locations that are in the object associated with the 'resolved' key.
 */
const getPackageNamesAndLocations = (): Array<Array<string>> => {
  const packageJson: any = JSON.parse(sh('npm ls -ws @cmsgov/design-system --json'));
  const deps = packageJson['dependencies'];
  const packageNames = Object.keys(deps);
  return packageNames.map((name: any) => {
    return [name, deps[name]['resolved']];
  });
};

/*
 * Actually does the updateing of the package.json files.
 * Gets the file location, reads said file, bumps the version, writes the file.
 */
const updatePackageJson = (childPackageToUpdate: Array<string>): void => {
  // Get our package name and package.json location via destructuring
  const [packageName, packageLocation] = childPackageToUpdate;
  /*
   * The package location is stored relative to the root directory when returned by `npm ls`,
   * so we have to clean it up a bit so `path` knows where to look.
   */
  const cleanedPackageLocation = packageLocation.split('file:')[1].replaceAll('../', '');
  const jsonFileLocation = path.join(root, cleanedPackageLocation, 'package.json');
  const json = readJson(jsonFileLocation);
  const updatedJson = updateDSVersion(json);
  writeJson(jsonFileLocation, updatedJson);
  console.log(
    c.green(`Bumped ${packageName} to @cmsgov/design-system@${newDesignSystemVersion()}.`)
  );
};

// The thingy, wassit, function, what does the updating of said JSON files, guv'.
const updateChildDSAndExamples = (): void => {
  const allOurPackages = getPackageNamesAndLocations();
  allOurPackages.forEach((childPackage) => {
    updatePackageJson(childPackage);
  });
};

async function bumpVersions() {
  const preBumpHash = getCurrentCommit();
  const changeLevel = await select({
    message: 'Select a release type',
    choices: ['major', 'minor', 'patch', 'premajor', 'preminor', 'prepatch', 'prerelease'].map(
      (level: any) => ({ name: level, value: level })
    ),
  });
  sh(
    `npm version ${changeLevel} --workspaces=true --preid="beta" --git-tag-version=false --legacy-peer-deps=true`
  );
  // Unstage the design-system-tokens package.json
  sh('git checkout ./packages/design-system-tokens/package.json');
  // Only stage changes to package files
  sh('git add -u **/package.json');
  // And discard all other changes
  sh('git checkout -- .');
  // Verify that there are actually changes staged
  if (!sh('git status -s')) {
    console.log(c.yellow('No version changes made. Exiting...'));
    process.exit(1);
  }
  console.log(c.green('Bumped package versions. Bumping dependencies next...'));

  // Update the dependencies in our child design systems and examples:
  updateChildDSAndExamples();

  // Update versions.json
  const currentVersionsByPackage = updateVersions();
  // Clean up our staged files
  sh('git reset ./packages/docs/package.json');
  sh('git checkout ./packages/docs/package.json');
  sh('git add -u');
  // Delete lingering package-lock.json if it exists:
  try {
    sh(`rm ${root}/package-lock.json`);
  } catch {
    console.log('No package-lock.json at the top level. Moving on...');
  }
  console.log(c.green('Updated versions.json.'));
  process.exit(0);

  // Determine our tag names and create the publish commit
  const tags = Object.keys(currentVersionsByPackage).map(
    (packageName) => `@cmsgov/${packageName}@${currentVersionsByPackage[packageName]}`
  );
  const commitMessage = 'Publish\n\n' + tags.map((tag) => ` - ${tag}`).join('\n');
  sh(`git commit -m "${commitMessage}"`);
  console.log(c.green('Wrote publish commit.'));

  // Tag the publish commit
  try {
    for (const tag of tags) {
      sh(`git tag -a -s -m "Release tag ${tag}" "${tag}"`);
    }
    console.log(c.green('Tagged publish commit.'));
  } catch (error) {
    // Most likely we've failed to sign the commits due to GPG not being configured, so
    // we need to roll back our progress so far.
    console.log(c.yellow('Rolling back publish commit.'));
    sh(`git reset --hard ${preBumpHash}`);
    process.exit(1);
  }

  // Push everything to origin
  console.log(c.green('Pushing to origin...'));
  sh(`git push --set-upstream origin ${getCurrentBranch()}`);
  console.log(c.green('Pushed bump commit to origin.'));
  sh(`git push origin ${tags.join(' ')}`);
  console.log(c.green('Pushed tags to origin.'));
}

/**
 * Assumes that we're on the publish commit when this function is called.
 */
async function bumpMain() {
  const yes = await confirm({
    message: `Would you like to create a pull request to bump versions on ${c.cyan('main')}?`,
  });
  if (!yes) {
    console.log(c.green('Skipping version-bump pull request.'));
    return;
  }
  console.log(c.green(`Creating a version-bump branch to merge into ${c.cyan('main')}...`));

  const d = new Date().getDate();
  const m = new Date().getMonth() + 1;
  const y = new Date().getFullYear();
  const H = new Date().getHours();
  const M = new Date().getMinutes();

  const bumpCommit = getCurrentCommit();
  const originalBranch = getCurrentBranch();
  const tempBranch = `version-bump-${y}-${m}-${d}-${H}-${M}`;
  sh('git checkout main');
  sh(`git checkout -b ${tempBranch}`);
  sh(`git cherry-pick ${bumpCommit} --strategy-option ours`);
  sh(`git push --set-upstream origin ${tempBranch}`);

  console.log(c.green('Created version-bump branch and pushed to origin.'));

  const title = `[RELEASE] ${m}/${d} Version bump main`;
  const body = 'Please review version updates and compare against latest release branch';
  const reviewers = REVIEWERS.map((r) => `--reviewer "${r}"`).join(' ');
  sh(`gh pr create --base main --title "${title}" --body "${body}" ${reviewers}`);
  console.log(c.green('Published a version-bump pull request.'));

  sh(`git checkout ${originalBranch}`);
}

async function draftReleaseNotes() {
  const yes = await confirm({ message: `Would you like to draft some release notes?` });
  if (!yes) {
    console.log(c.green('Skipping release notes.'));
    console.log(`You can come back to this later by running 'yarn release:notes'.`);
    return;
  }

  shI('yarn', ['release:notes']);
}

function printNextSteps() {
  console.log('----------------------\n');
  console.log('The release is ready.\n');
  const tag = readLastPublishCommit().tags[0];
  console.log(
    c.yellow(
      `The next step is to run the ${c.cyan('publish')} jenkins job using the tag '${c.cyan(tag)}'.`
    )
  );
}

(async () => {
  // Get command line args
  const argv = await yargs(hideBin(process.argv))
    .scriptName('yarn release')
    .options({
      undo: {
        alias: 'u',
        boolean: true,
        description:
          'Deletes the last set of release tags locally and on origin and reverts the last commit',
        default: false,
      },
    })
    .help().argv;

  try {
    if (argv.undo) {
      await undoLastCommit();
    } else {
      verifyGhInstalled();
      await verifyNoUnstagedChanges();
      await bumpVersions();
      await bumpMain();
      await draftReleaseNotes();
      printNextSteps();
    }
  } catch (error) {
    if (error instanceof Error) {
      console.error(error.message);
      console.log('-------------------------');
      console.log(
        c.yellow(`You can run ${c.reset('`yarn release --undo`')} to undo changes made so far.`)
      );
    }
    process.exit(1);
  }
})();
