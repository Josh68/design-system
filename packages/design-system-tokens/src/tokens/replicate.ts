import json from './cmsgov-component.json';
import fs from 'fs'
import themeTokens from '../themes/medicare-component';

type FlattenObject = {
  [key: string]: string | number | boolean | null | undefined | FlattenObject;
};

function flattenObject(obj: FlattenObject, parentKey = ''): FlattenObject {
  return Object.keys(obj).reduce((acc: FlattenObject, key: string) => {
    const newKey = parentKey ? `${parentKey}${key}` : key;

    if (typeof obj[key] === 'object' && obj[key] !== null) {
      Object.assign(acc, flattenObject(obj[key] as FlattenObject, newKey));
    } else {
      acc[newKey] = obj[key];
    }

    return acc;
  }, {});
}

const flattenedTokens = flattenObject(themeTokens);

function processObj(obj: {[k: string]: any}, parentKeys: string[]) {
  if (obj.$value) {
    const expectedKey = parentKeys.slice(0, -1).join('-') + '__' + parentKeys.slice(-1);
    if (expectedKey in flattenedTokens) {
      const themeValue = flattenedTokens[expectedKey];
      const tokenRe = /t\.(\w*)\['(.*)'\]/
      if (typeof themeValue === 'string') {
        if (tokenRe.test(themeValue)) {
          const [_match, tokenType, tokenName] = tokenRe.exec(themeValue) as RegExpExecArray;
          if (tokenType === 'color') {
            obj.$value = `{theme.color.${tokenName}}`
          } else {
            obj.$value = `{${tokenType}.${tokenName}}`
          }
          return;
        }
        if (themeValue === 'transparent') {
          obj.$value = '{theme.color.transparent}'
          return;
        }
        if (themeValue === 'currentColor') {
          obj.$value = '#6D0000'
          return;
        }
      }
      console.log(`could not parse value for ${expectedKey}: ${themeValue}`);
      obj.$value = themeValue;
    } else {
      console.log(`no matching key found for ${expectedKey}`);
    }
  } else {
    Object.entries(obj).forEach(([key, value]) => {
      if (typeof value === 'object') {
        processObj(value, [...parentKeys, key]);
      }
    })
  }
}

processObj(json.component, []);

fs.writeFileSync('./component.json', JSON.stringify(json))
