/*
 * Core CMSDS Theme
 */

import { animation, color, font, measure, media, radius, spacer } from '../tokens';
import { ThemeTokens, ColorTokens, AnyTokenValues, ShadowTokens, FontTokens } from '../lib/types';

export const themeColors: ColorTokens = {
  //
  'white':                      color.white['solid'].$value,
  'black':                      color.black['solid'].$value,
  'transparent':                color['transparent'],
  'transparent-black-alpha50':  color.black['alpha50'].$value,
  'transparent-black-alpha25':  color.black['alpha25'].$value,
  'transparent-white-alpha50':  color.white['alpha50'].$value,
  'transparent-white-alpha25':  color.white['alpha25'].$value,
  //
  'background':                 color.white['solid'].$value,
  'background-dialog':          color.white['solid'].$value,
  'background-dialog-mask':     color.black['alpha50'].$value,
  'background-inverse':         color.ocean['800'].$value,
  //
  'base':                       color.granite['900'].$value,
  'base-inverse':               color.white['solid'].$value,
  //
  'border':                     color.granite['100'].$value,
  'border-dark':                color.lapis['800'].$value,
  'border-inverse':             color.white['solid'].$value,
  //
  'error-lightest':             color.rose['50'].$value,
  'error-lighter':              color.rose['100'].$value,
  'error-light':                color.rose['300'].$value,
  'error':                      color.rose['500'].$value,
  'error-dark':                 color.rose['600'].$value,
  'error-darker':               color.rose['700'].$value,
  'error-darkest':              color.rose['800'].$value,
  //
  'focus-light':                color.white['solid'].$value,
  'focus-dark':                 color.orchid['500'].$value,
  //
  'gray-lightest':	            color.granite['50'].$value,
  'gray-lighter':	              color.granite['100'].$value,
  'gray-light':	                color.granite['300'].$value,
  'gray':	                      color.granite['500'].$value,
  'gray-dark':	                color.granite['700'].$value,
  'gray-darker':	              color.granite['800'].$value,
  'gray-darkest':	              color.granite['900'].$value,
  //
  'muted':                      color.granite['700'].$value,
  'muted-inverse':              color.lapis['50'].$value,
  //
  'primary-lightest':           color.ocean['50'].$value,
  'primary-lighter':            color.ocean['100'].$value,
  'primary-light':              color.ocean['300'].$value,
  'primary':                    color.ocean['500'].$value,
  'primary-dark':               color.ocean['600'].$value,
  'primary-darker':             color.ocean['700'].$value,
  'primary-darkest':            color.ocean['800'].$value,
  //
  'secondary-lightest':         color.spring['50'].$value,
  'secondary-lighter':          color.spring['100'].$value,
  'secondary-light':            color.spring['300'].$value,
  'secondary':                  color.spring['500'].$value,
  'secondary-dark':             color.spring['600'].$value,
  'secondary-darker':           color.spring['700'].$value,
  'secondary-darkest':          color.spring['800'].$value,
  //
  'accent-primary-lightest':    color.persimmon['50'].$value,
  'accent-primary-lighter':     color.persimmon['100'].$value,
  'accent-primary-light':       color.persimmon['300'].$value,
  'accent-primary':             color.persimmon['500'].$value,
  'accent-primary-dark':        color.persimmon['600'].$value,
  'accent-primary-darker':      color.persimmon['700'].$value,
  'accent-primary-darkest':     color.persimmon['800'].$value,
  //
  'info-lightest':              color.sky['50'].$value,
  'info-lighter':               color.sky['100'].$value,
  'info-light':                 color.sky['300'].$value,
  'info':                       color.sky['500'].$value,
  'info-dark':                  color.sky['600'].$value,
  'info-darker':                color.sky['700'].$value,
  'info-darkest':               color.sky['800'].$value,
  //
  'success-lightest':           color.spring['50'].$value,
  'success-lighter':            color.spring['100'].$value,
  'success-light':              color.spring['300'].$value,
  'success':                    color.spring['500'].$value,
  'success-dark':               color.spring['600'].$value,
  'success-darker':             color.spring['700'].$value,
  'success-darkest':            color.spring['800'].$value,
  //
  'warn-lightest':              color.goldenrod['50'].$value,
  'warn-lighter':               color.goldenrod['100'].$value,
  'warn-light':                 color.goldenrod['300'].$value,
  'warn':                       color.goldenrod['500'].$value,
  'warn-dark':                  color.goldenrod['600'].$value,
  'warn-darker':                color.goldenrod['700'].$value,
  'warn-darkest':               color.goldenrod['800'].$value,
  //
  'visited':                    color.windsor['500'].$value,
};

const themeFont: FontTokens = {
  'sans':                       font.family['family-open-sans'].$value,
  'serif':                      font.family['family-bitter'].$value,
  'size-base':                  font.size['20'].$value,
  'size-sm':                    font.size['10'].$value,
  'size-md':                    font.size['20'].$value,
  'size-lg':                    font.size['30'].$value,
  'size-xl':                    font.size['40'].$value,
  'size-2xl--mobile':           font.size['50'].$value,
  'size-2xl':                   font.size['50'].$value,
  'size-3xl--mobile':           font.size['60'].$value,
  'size-3xl':                   font.size['70'].$value,
  'size-4xl--mobile':           font.size['70'].$value,
  'size-4xl':                   font.size['80'].$value,
  'size-5xl--mobile':           font.size['70'].$value,
  'size-5xl--tablet':           font.size['80'].$value,
  'size-5xl':                   font.size['90'].$value,
  'line-height-reset':          1,
  'line-height-heading':        1.3,
  'line-height-base':           1.5,
  'line-height-lead':           1.7,
  'weight-light':               300,
  'weight-normal':              400,
  'weight-semibold':            600,
  'weight-bold':                700,
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
  'site-max-width':             '1104px',
  'text-max-width':             '53rem',
};

export const shadow: ShadowTokens = {
  'focus':                      `inset 0 0 0 1px ${themeColors['base']}`,
  'focus-inverse':              `inset 0 0 0 1px ${themeColors['base']}`,
  'focus-link':                 `0 3px ${themeColors['base']}`,
  'base-offset-x':              '2px',
  'base-offset-y':              '2px',
  'base-blur-radius':           '4px',
  'base-color':                 color.black['alpha25'].$value,
  'base':                       '2px 2px 4px',
};

const coreTheme: ThemeTokens = {
  animation,
  color: themeColors,
  font: themeFont,
  global,
  measure,
  media,
  radius,
  shadow,
  spacer,
  z,
};

export default coreTheme;
