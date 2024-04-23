/* -----------------------------------
 *
 * Component
 *
 * -------------------------------- */

type IComponent = any;

/* -----------------------------------
 *
 * Options
 *
 * -------------------------------- */

interface IOptions<F = any, W = any> {
  attributes?: string[];
  events?: string[];
  formatProps?: (props: any) => F;
  wrapComponent?: (child: any) => W;
}

/* -----------------------------------
 *
 * Errors
 *
 * -------------------------------- */

enum ErrorTypes {
  Promise = 'Error: Promises cannot be used for SSR',
  Missing = 'Error: Cannot find component in provided function',
  Json = 'Error: Invalid JSON string passed to component',
  Tag = 'Error: Invalid tag name for custom element. Must include a `-`',
}

/* -----------------------------------
 *
 * Element
 *
 * -------------------------------- */

interface CustomElement<CF = any, C = any> extends HTMLElement {
  __mounted: boolean;
  __componentFunction: CF;
  __component?: C;
  __properties?: IProps;
  __events?: IProps;
  __options: IOptions;
  __mutationObserver?: MutationObserver;

  renderPreactComponent(): void;
}

/* -----------------------------------
 *
 * IProps
 *
 * -------------------------------- */

interface IProps {
  [index: string]: any;
}

/* -----------------------------------
 *
 * Guards
 *
 * -------------------------------- */

const isPromise = (input: any): input is Promise<any> => {
  return input && typeof input.then === 'function';
};

/* -----------------------------------
 *
 * Self Closing
 *
 * -------------------------------- */

const selfClosingTags = [
  'area',
  'base',
  'br',
  'col',
  'hr',
  'img',
  'input',
  'link',
  'meta',
  'source',
  'embed',
  'param',
  'track',
  'wbr',
];

/* -----------------------------------
 *
 * Export
 *
 * -------------------------------- */

export { IComponent, IOptions, IProps, ErrorTypes, CustomElement, isPromise, selfClosingTags };
