import React from 'react';
import useTheme from '../../helpers/useTheme';
import { MdxQuery } from '../../helpers/graphQLTypes';
import { withPrefix } from 'gatsby';

export const Head = ({ data }: MdxQuery) => {
  const baseTitle = 'CMS Design System';
  const pageTitle = data.mdx.frontmatter.title;

  return (
    <>
      <html lang="en" />
      <title>{pageTitle ? `${pageTitle} - ${baseTitle}` : baseTitle}</title>
      <script>{`window.tealiumEnvironment = "prod";`}</script>
      <script src="//tags.tiqcdn.com/utag/cmsgov/cms-design/prod/utag.sync.js"></script>
      <link
        rel="stylesheet"
        type="text/css"
        title="docThemeCss"
        href={withPrefix(`themes/${useTheme()}-theme.css`)}
      />
    </>
  );
};
