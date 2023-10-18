import React from 'react';
import themes from '../../../../themes.json';
type ThemeName = keyof typeof themes;

export interface ThemeContentProps {
  children: React.ReactElement;
  /**
   * Only show content if the current theme is in this list
   */
  onlyThemes?: ThemeName[];
  /**
   * Never show content if the current theme is in this list
   */
  neverThemes?: ThemeName[];
}

function getTheme(): ThemeName {
  if (typeof window !== 'undefined') {
    const params = location.search
      .substring(1)
      .split('&')
      .reduce((params, param) => {
        const [key, value] = param.split('=');
        params[key] = value;
        return params;
      }, {} as any);

    const key = 'theme';
    if (key in params) {
      return params[key] as ThemeName;
    }
  }

  return 'core';
}

const ThemeContent = (props: ThemeContentProps) => {
  const theme = getTheme();

  const { children, onlyThemes, neverThemes } = props;

  if (
    (onlyThemes && onlyThemes.includes(theme as ThemeName)) ||
    (neverThemes && !neverThemes.includes(theme as ThemeName))
  ) {
    console.log('👍', theme, onlyThemes, neverThemes);
    return <div>{children}</div>;
  } else {
    console.log('🥷', theme, onlyThemes, neverThemes);
    return <div hidden>{children}</div>;
  }
};

export default ThemeContent;
