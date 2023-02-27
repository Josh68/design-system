/*
 * CMSgov CMSDS Theme
 */

import { animation, color, font, measure, media, radius, spacer, z } from '../tokens';
import { ThemeTokens, ColorTokens, AnyTokenValues, ShadowTokens } from '../lib/types';

export const themeColors: ColorTokens = {
  //
  'white':                      color['white-solid'],
  'black':                      color['black-solid'],
  'transparent':                color['transparent'],
  'transparent-black-alpha50':  color['black-alpha50'],
  'transparent-black-alpha25':  color['black-alpha25'],
  'transparent-white-alpha50':  color['white-alpha50'],
  'transparent-white-alpha25':  color['white-alpha25'],
  //
  'background':                 color['white-solid'],
  'background-dialog':          color['white-solid'],
  'background-dialog-mask':     color['black-alpha50'],
  'background-inverse':         color['deepsea-800'],
  //
  'base':                       color['granite-900'],
  'base-inverse':               color['white-solid'],
  //
  'border':                     color['granite-100'],
  'border-dark':                color['lapis-800'],
  'border-inverse':             color['white-solid'],
  //
  'error':                      color['rose-500'],
  'error-dark':                 color['rose-600'],
  'error-darker':               color['rose-700'],
  'error-darkest':              color['rose-800'],
  'error-light':                color['rose-200'],
  'error-lighter':              color['rose-100'],
  'error-lightest':             color['rose-50'],
  //
  'focus':                      color['darksky-500'],
  'focus-border-inverse':       color['goldenrod-800'],
  'focus-dark':                 color['orchid-500'],
  'focus-inverse':              color['sky-500'],
  'focus-light':                color['white-solid'],
  'focus-shadow':               color['granite-900'],
  'focus-shadow-inverse':       color['granite-900'],
  'focus-shadow-link':          color['granite-900'],
  'focus-shadow-link-inverse':  color['goldenrod-800'],
  //
  'gray-lightest':	            color['granite-50'],
  'gray-lighter':	              color['granite-100'],
  'gray-light':	                color['granite-300'],
  'gray':	                      color['granite-500'],
  'gray-dark':	                color['granite-700'],
  'gray-darker':	              color['granite-800'],
  'gray-darkest':	              color['granite-900'],
  //
  'muted':                      color['granite-700'],
  'muted-inverse':              color['lapis-50'],
  //
  'primary-lightest':           color['deepsea-50'],
  'primary-lighter':            color['deepsea-100'],
  'primary-light':              color['deepsea-300'],
  'primary':                    color['deepsea-500'],
  'primary-dark':               color['deepsea-600'],
  'primary-darker':             color['deepsea-700'],
  'primary-darkest':            color['deepsea-800'],
  // @TODO: deprecate primary-alt as secondary
  'primary-alt':                color['sky-500'],
  'primary-alt-dark':           color['sky-600'],
  'primary-alt-darkest':        color['sky-800'],
  'primary-alt-light':          color['sky-300'],
  'primary-alt-lightest':       color['sky-50'],
  //
  'secondary':                  color['emerald-500'],
  'secondary-dark':             color['emerald-600'],
  'secondary-darker':           color['emerald-700'],
  'secondary-darkest':          color['emerald-800'],
  'secondary-light':            color['emerald-300'],
  'secondary-lighter':          color['emerald-100'],
  'secondary-lightest':         color['emerald-50'],
  //
  'info':                      color['deepsea-500'],
  'info-dark':                 color['deepsea-600'],
  'info-darker':               color['deepsea-700'],
  'info-darkest':              color['deepsea-800'],
  'info-light':                color['deepsea-300'],
  'info-lighter':              color['deepsea-100'],
  'info-lightest':             color['deepsea-50'],
  //
  'success':                    color['spring-500'],
  'success-dark':               color['spring-600'],
  'success-darker':             color['spring-700'],
  'success-darkest':            color['spring-800'],
  'success-light':              color['spring-400'],
  'success-lighter':            color['spring-200'],
  'success-lightest':           color['spring-50'],
  //
  'warn':                       color['dandelion-500'],
  'warn-dark':                  color['dandelion-600'],
  'warn-darker':                color['dandelion-700'],
  'warn-darkest':               color['dandelion-800'],
  'warn-light':                 color['dandelion-400'],
  'warn-lighter':               color['dandelion-200'],
  'warn-lightest':              color['dandelion-50'],
  //
  'visited':                    color['windsor-500'],
};

export const global: AnyTokenValues = {
  'article-max-width':          '600px',
  'grid-columns':               '12',
  'grid-gutter-width':          spacer[4],
  'grid-form-gutter-width':     spacer[2],
  'lead-max-width':             '77rem',
  'nav-width':                  '951px',
  'site-margins':               '3rem',
  'site-margins-mobile':        '1.5rem',
  'site-max-width':             '1040px',
  'text-max-width':             '53rem',
};

export const shadow: ShadowTokens = {
  'focus':                      `inset 0 0 0 1px ${themeColors['base']}`,
  'focus-inverse':              `inset 0 0 0 1px ${themeColors['base']}`,
  'focus-link':                 `0 3px ${themeColors['base']}`,
  'focus-link-inverse':         `0 3px ${themeColors['focus-border-inverse']}`,
  'base-offset-x':              '2px',
  'base-offset-y':              '2px',
  'base-blur-radius':           '4px',
  'base-color':                 color['black-alpha25'],
  'base':                       '2px 2px 4px',
};

const cmsgovTheme: ThemeTokens = {
  animation,
  color: themeColors,
  font: {
    sans: font['family-open-sans'],
    serif: font['family-bitter'],
    ...font,
  },
  global,
  measure,
  media,
  radius,
  shadow,
  spacer,
  z,
};

export default cmsgovTheme;
