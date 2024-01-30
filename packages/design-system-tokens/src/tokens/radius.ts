/*
 * CMSDS Border Radius Tokens
 */
import { BorderRadiusTokens, to } from '../lib/types';
import fs from 'fs';

export const radius = to<BorderRadiusTokens>()({
  circle: '100%',
  default: '3px',
  large: '8px',
  medium: '4px',
  pill: '9999px',
  small: '2px',
});

function writeJson(filename: string, json: any) {
  fs.writeFileSync(filename, JSON.stringify(json, null, 2))
}

writeJson('./radius.json', {
  radius: {
    $type: 'dimension',
    ...Object.fromEntries(Object.entries(radius).map(([key, $value]) => ([key, { $value }])))
  }
})
