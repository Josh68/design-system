"use strict";(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[9614],{"./packages/design-system/src/components/web-components/ds-badge/ds-badge.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ds_badge_stories});var WebComponentDocTemplate=__webpack_require__("./.storybook/docs/WebComponentDocTemplate.mdx"),storybook=__webpack_require__("./packages/design-system/src/components/web-components/storybook.tsx"),preactement_define=__webpack_require__("./packages/design-system/src/components/web-components/preactement/define.ts"),Badge=__webpack_require__("./packages/design-system/src/components/Badge/Badge.tsx");(0,preactement_define.O)("ds-badge",(()=>Badge.Z),{attributes:["class-name","size","variation"]});var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const ds_badge_stories={title:"Web Components/Badge",argTypes:{children:{table:{disable:!0}},variation:{description:"Sets the variation, or color, of a badge",options:[void 0,"info","success","warn","alert"],control:{type:"radio"}},size:{description:"Sets the size of a badge",options:["default","big"],control:{type:"radio"}}},args:{children:"Expiring soon",size:"big",variation:"warn"},parameters:{docs:{page:WebComponentDocTemplate.Z,description:{component:"For information about how and when to use this component, [refer to its full documentation page](https://design.cms.gov/components/badge/)."},underlyingHtmlElements:["span"]}},decorators:[storybook.h]},Template=args=>(0,jsx_runtime.tZ)("ds-badge",{...args,children:args.children??(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:"Default badge text"})});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ds-badge {...args}>{args.children ?? <>Default badge text</>}</ds-badge>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/design-system/src/components/Badge/Badge.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Badge=props=>{const{className="",children,size,variation,...others}=props,variationClass=variation&&`ds-c-badge--${variation}`,classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-badge",variationClass,{big:"ds-c-badge--big"}[size],className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("span",{className:classes,...others,children:[variation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("span",{className:"ds-u-visibility--screen-reader",children:[(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)(`badge.${variation}`),": "]}),children]})};Badge.displayName="Badge";const __WEBPACK_DEFAULT_EXPORT__=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/badge/).",displayName:"Badge",props:{className:{defaultValue:null,description:"Additional classes to be added to the root badge element.\nUseful for adding utility classes.",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Label text or HTML.",name:"children",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Sets the font size of the Badge. Only supports 'big'",name:"size",required:!1,type:{name:'"big"'}},variation:{defaultValue:null,description:"A string corresponding to the badge-component variation classes",name:"variation",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"info"'},{value:'"success"'},{value:'"warn"'}]}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"packages/design-system/src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}}}]);