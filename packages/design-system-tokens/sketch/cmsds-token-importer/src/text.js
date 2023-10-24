import sketch from 'sketch';
import { updateSharedStyleReferences } from './updateSharedStyleReferences';

function parseFontSize(tokenValue) {
  if (typeof tokenValue === 'string') {
    if (tokenValue.includes('rem')) {
      return parseFloat(tokenValue) * 16;
    } else {
      return parseInt(tokenValue, 10);
    }
  }

  return tokenValue;
}

function parseLineHeight(tokenValue, fontSizePixels) {
  if (typeof tokenValue === 'number') {
    return tokenValue * fontSizePixels;
  } else {
    return parseInt(tokenValue, 10);
  }
}

function parseFontWeight(tokenValue) {
  switch (tokenValue) {
    case 100: // Thin
      return 0;
    case 200: // Extra-Light
      return 1;
    case 300: // Light
      return 3;
    case 400: // Normal/Regular
      return 6;
    case 500: // Medium
      return 7;
    case 600: // Semi-Bold
      return 9;
    case 700: // Bold
      return 10;
    case 800: // Extra-Bold
      return 11;
    case 900: // Black
      return 12;
    default:
      return 6;
  }
}

function parseFontFamily(tokenValue) {
  // Only return the first one, and remove all quotes
  return tokenValue.split(',')[0].replaceAll('"', '').replaceAll("'", '').trim();
}

/**
 * Creates the equivalent of the CSS reset styles for text to be used in all
 * the places where more specific text styles do not exist. Can be used in
 * whole or in part.
 */
function createBaseStyle(themeTokens) {
  const fontSize = parseFontSize(themeTokens.font['size-base']);
  const lineHeight = parseLineHeight(themeTokens.font['line-height-base'], fontSize);
  const fontWeight = parseFontWeight(themeTokens.font['weight-normal']);
  const fontFamily = parseFontFamily(themeTokens.components.typography['-body__font-family']);

  return new sketch.Style({
    fontFamily,
    fontSize,
    fontWeight,
    textColor: themeTokens.color.base,
    lineHeight,
  });
}

const tokenNamePatterns = {
  textColor: /^(.*)__color(.*)$/,
  fontSize: /^(.*)__font-size(.*)$/,
  fontWeight: /^(.*)__font-weight(.*)$/,
  fontFamily: /^(.*)__font-family(.*)$/,
  lineHeight: /^(.*)__line-height(.*)$/,
};

/**
 * Expects the token keys to be the full names of the tokens
 */
function updateComponentTextStyles(doc, componentName, componentTokens, defaultTextStyle) {
  const rawTextStyles = {};

  for (const tokenName in componentTokens) {
    const fullTokenName = `${componentName}${tokenName}`;

    for (const propertyName in tokenNamePatterns) {
      const matchResults = fullTokenName.match(tokenNamePatterns[propertyName]);
      if (matchResults) {
        // Combine the categories before with the qualifiers after. For example, the text
        // "vertical-nav-label__color--current" --> "vertical-nav-label--current"
        const textStyleName = matchResults.slice(1).join('');

        if (!rawTextStyles[textStyleName]) {
          rawTextStyles[textStyleName] = {};
        }

        rawTextStyles[textStyleName][propertyName] = componentTokens[tokenName];
      }
    }
  }

  const namePrefix = `_test/${componentName}/`;
  for (const textStyleName in rawTextStyles) {
    const rawValues = rawTextStyles[textStyleName];

    const fontFamily = rawValues.fontFamily
      ? parseFontFamily(rawValues.fontFamily)
      : defaultTextStyle.fontFamily;
    const fontSize = rawValues.fontSize
      ? parseFontSize(rawValues.fontSize)
      : defaultTextStyle.fontSize;
    const fontWeight = rawValues.fontWeight
      ? parseFontWeight(rawValues.fontWeight)
      : defaultTextStyle.fontWeight;
    const textColor = rawValues.textColor
      ? parseFontFamily(rawValues.textColor)
      : defaultTextStyle.textColor;
    const lineHeight = rawValues.lineHeight
      ? parseLineHeight(rawValues.lineHeight, fontSize)
      : defaultTextStyle.lineHeight;

    const style = new sketch.Style({
      fontFamily,
      fontSize,
      fontWeight,
      textColor,
      lineHeight,
    });

    updateSharedStyleReferences(doc, `${namePrefix}${textStyleName}`, style);
  }
}

export function updateTextStylesFromTheme(doc, themeTokens) {
  // Default text style is used to fill in missing values in other text styles
  // that come from the tokens
  const defaultTextStyle = createBaseStyle(themeTokens);

  updateSharedStyleReferences(doc, '_test/base', defaultTextStyle);

  for (const [componentName, componentTokens] of Object.entries(themeTokens.components)) {
    updateComponentTextStyles(doc, componentName, componentTokens, defaultTextStyle);
  }
}
