/*! For license information please see components-Label-Label-stories.50f62c38.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[1224],{"./packages/design-system/src/components/Hint/Hint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{k:()=>Hint});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Hint=_ref=>{let{children,className,id,inversed,requirementLabel,...otherProps}=_ref;const hintClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-hint",inversed&&"ds-c-hint--inverse",className);let hintPadding;return requirementLabel&&children&&("string"==typeof requirementLabel&&(requirementLabel=requirementLabel.trim().replace(/\.$/,""),requirementLabel+="."),hintPadding=" "),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("p",{...otherProps,id,className:hintClasses,children:[requirementLabel,hintPadding,children]})};try{Hint.displayName="Hint",Hint.__docgenInfo={description:"Hints are used in conjunction with a Label to describe individual form fields\nor fieldsets. They are built in to all form fields in the design system, but\nthey can also be used on their own to create custom fields.\n\nFor information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/hint/).",displayName:"Hint",props:{children:{defaultValue:null,description:"Hint text or HTML",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hint element. This is required in order to link the element\nto a field input via `aria-describedby`",name:"id",required:!0,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement (ie. "Optional", or "Required").\nIn most cases, this should be used to indicate which fields are optional.\nSee the [form guidelines](https://design.cms.gov/patterns/Forms/forms/) for more info.',name:"requirementLabel",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Hint/Hint.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"packages/design-system/src/components/Hint/Hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/AlertCircleIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>AlertCircleIcon});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"37 2 135 135"};function AlertCircleIcon(props){const iconCssClasses=`ds-c-icon--alert-circle ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.alertCircle"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.821 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.351 2.798 21.82 8.392 31.408 5.595 9.584 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771C167.773 94.82 170.57 84.35 170.57 73c0-11.351-2.797-21.822-8.39-31.408zm-43.75 70.433c0 .761-.246 1.398-.734 1.914s-1.086.773-1.793.773H100.26c-.706 0-1.331-.271-1.874-.814-.543-.543-.814-1.168-.814-1.873V96.546c0-.706.271-1.331.814-1.874.543-.543 1.168-.814 1.874-.814h15.643c.707 0 1.306.258 1.793.773.488.518.734 1.154.734 1.915v15.479zm-.164-28.026c-.055.543-.339 1.019-.854 1.426-.517.407-1.154.61-1.914.61h-15.073c-.761 0-1.413-.203-1.956-.61-.543-.407-.815-.883-.815-1.426l-1.385-50.595c0-.653.271-1.141.814-1.467.544-.434 1.196-.652 1.956-.652h17.926c.761 0 1.412.217 1.955.652.543.326.813.815.813 1.467l-1.467 50.595z"})})}try{AlertCircleIcon.displayName="AlertCircleIcon",AlertCircleIcon.__docgenInfo={description:"",displayName:"AlertCircleIcon",props:{ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"]={docgenInfo:AlertCircleIcon.__docgenInfo,name:"AlertCircleIcon",path:"packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const SvgIcon=_ref=>{let{ariaHidden,className,children,description,id,inversed,title,viewBox,...otherProps}=_ref;const svgClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("icon--",id),titleId=`${rootId}__title`,descriptionId=`${rootId}__desc`,ariaLabelledBy=description?`${titleId} ${descriptionId}`:titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("svg",{"aria-hidden":ariaHidden,className:svgClasses,id:id??isSrVisible?rootId:void 0,viewBox,xmlns:"http://www.w3.org/2000/svg",...screenReaderProps,...otherProps,children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("desc",{id:descriptionId,children:description}),children]})};SvgIcon.defaultProps={ariaHidden:!0,inversed:!1};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true"},description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The elements that make up the SVG",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:{value:"false"},description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/InlineError/InlineError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,b:()=>InlineError});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/Icons/AlertCircleIcon.tsx"),_i18n__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function InlineError(_ref){let{children,className,id,inversed,...otherProps}=_ref;const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-inline-error",{"ds-c-inline-error--inverse":inversed},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("p",{...otherProps,className:classes,id:(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("inline-error--",id),"aria-live":"assertive","aria-atomic":"true",children:children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_Icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.g,{viewBox:"36 -12 186 186"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("span",{className:"ds-u-visibility--screen-reader",children:`${(0,_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("inlineError.prefix")}: `}),children]})})}const __WEBPACK_DEFAULT_EXPORT__=InlineError;try{InlineError.displayName="InlineError",InlineError.__docgenInfo={description:"Inline errors are error messages that are paired directly with form fields.\nThey are built in to all form fields in the design system, but they can also\nbe used on their own to create custom fields.\n\nFor information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/inline-error/).",displayName:"InlineError",props:{children:{defaultValue:null,description:"Error text or HTML",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the error element",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/InlineError/InlineError.tsx#InlineError"]={docgenInfo:InlineError.__docgenInfo,name:"InlineError",path:"packages/design-system/src/components/InlineError/InlineError.tsx#InlineError"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,_:()=>Label});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Hint__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Hint/Hint.tsx"),_InlineError__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/InlineError/InlineError.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Label=props=>{const{fieldId,id,children,component,hint,hintId,className,inversed,errorMessage,errorId,requirementLabel,...labelProps}=props;let hintElement;(hint||requirementLabel)&&(hintElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_Hint__WEBPACK_IMPORTED_MODULE_2__.k,{requirementLabel,inversed,id:hintId,children:hint}));let errorElement=errorMessage;"string"==typeof errorMessage&&(errorElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_InlineError__WEBPACK_IMPORTED_MODULE_3__.b,{id:errorId,children:errorMessage}));let htmlFor=fieldId;"legend"===component&&fieldId&&(console.warn("The `for` attribute is invalid for legends. Omitting `fieldId` from rendered element."),htmlFor=void 0);const ComponentType=component,classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-label",className,inversed&&"ds-c-label--inverse");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(ComponentType,{className:classes,htmlFor,id,...labelProps,children}),hintElement,errorElement]})};Label.defaultProps={component:"label"};const __WEBPACK_DEFAULT_EXPORT__=Label;try{Label.displayName="Label",Label.__docgenInfo={description:"The Label component describes individual form fields (as a `<label>`) or fieldsets (as\na `<legend>`). They are built in to all form fields in the design system, but they can\nalso be used on their own to create custom fields.\n\nFor information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/label/).",displayName:"Label",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement> & Ref<HTMLLegendElement>"}},component:{defaultValue:{value:"label"},description:"The root HTML element used to render the label",name:"component",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"legend"'}]}},errorMessage:{defaultValue:null,description:"@deprecated Hints are now their own component called `Hint`.\n@hide-prop [Deprecated]\n\nEnable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorId:{defaultValue:null,description:"@deprecated The Label is no longer responsible for rendering the\nerror element from a string. A InlineError should be passed to it which\nalready has an errorId applied.\n@hide-prop [Deprecated]",name:"errorId",required:!1,type:{name:"string"}},fieldId:{defaultValue:null,description:"The ID of the field this label is for. This is used for the label's `for`\nattribute and any related ARIA attributes, such as for the error message.",name:"fieldId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"@deprecated Hints are now their own component called `Hint`.\n@hide-prop [Deprecated]\n\nAdditional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"@deprecated Please render your error message directly with the 'InlineError' component instead of passing to `Label`\n@hide-prop [Deprecated]\n\nThe ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"packages/design-system/src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/utilities/useId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(providedId??lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./packages/design-system/src/components/Label/Label.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const disabledArg={table:{disable:!0}},__WEBPACK_DEFAULT_EXPORT__={title:"Components/Label",component:__webpack_require__("./packages/design-system/src/components/Label/Label.tsx").Z,argTypes:{errorId:disabledArg,errorMessage:disabledArg,hint:disabledArg,hintId:disabledArg,requirementLabel:disabledArg,ref:disabledArg},args:{children:"Enter your date of birth."},parameters:{docs:{underlyingHtmlElements:["label","legend"]}}},Default={};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);