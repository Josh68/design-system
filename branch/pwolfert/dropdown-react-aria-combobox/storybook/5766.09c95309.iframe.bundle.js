"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[5766],{"./packages/design-system/src/components/FormLabel/FormLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var _InlineError_InlineError__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/InlineError/InlineError.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["fieldId","id","children","component","hint","textClassName","className","inversed","errorMessage","errorMessageClassName","errorId","requirementLabel"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var FormLabel=function FormLabel(props){var hintElement,errorMessageElement,inlineErrorId,fieldId=props.fieldId,id=props.id,children=props.children,component=props.component,hint=props.hint,textClassName=props.textClassName,className=props.className,inversed=props.inversed,errorMessage=props.errorMessage,errorMessageClassName=props.errorMessageClassName,errorId=props.errorId,requirementLabel=props.requirementLabel,labelProps=_objectWithoutProperties(props,_excluded);if(hint||requirementLabel){var hintPadding,hintClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-field__hint",inversed&&"ds-c-field__hint--inverse"),requirement=requirementLabel;requirementLabel&&hint&&("string"==typeof requirementLabel&&(requirement=requirementLabel.trim().replace(/\.$/,""),requirement=requirementLabel+"."),hintPadding=" "),hintElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("span",{className:hintClasses,children:[requirement,hintPadding,hint]})}errorMessage&&(errorId?inlineErrorId=errorId:fieldId&&(inlineErrorId="".concat(fieldId,"-error")),errorMessageElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_InlineError_InlineError__WEBPACK_IMPORTED_MODULE_3__.Z,{id:inlineErrorId,inversed:inversed,className:errorMessageClassName,children:errorMessage}));var ComponentType=component,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-label",className,inversed&&"ds-c-label--inverse");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)(ComponentType,_objectSpread(_objectSpread({className:classes,htmlFor:fieldId,id:id},labelProps),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(textClassName),children:children}),hintElement,errorMessageElement]}))};FormLabel.displayName="FormLabel",FormLabel.defaultProps={component:"label"},__webpack_exports__.Z=FormLabel;try{FormLabel.displayName="FormLabel",FormLabel.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/form-label/).",displayName:"FormLabel",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement> & Ref<HTMLLegendElement>"}},component:{defaultValue:{value:"label"},description:"The root HTML element used to render the label",name:"component",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"legend"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field.",name:"errorId",required:!1,type:{name:"string"}},fieldId:{defaultValue:null,description:"The ID of the field this label is for. This is used for the label's `for`\nattribute and any related ARIA attributes, such as for the error message.",name:"fieldId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement (ie. "Optional", or "Required").\nIn most cases, this should be used to indicate which fields are optional.\nSee the [form guidelines]({{root}}/guidelines/forms/) for more info.',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},textClassName:{defaultValue:null,description:"Additional classes to be added to the label text.",name:"textClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/FormLabel/FormLabel.tsx#FormLabel"]={docgenInfo:FormLabel.__docgenInfo,name:"FormLabel",path:"packages/design-system/src/components/FormLabel/FormLabel.tsx#FormLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/FormLabel/useFormLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return useFormLabel}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _InlineError_InlineError__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/InlineError/InlineError.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_flags__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/flags.ts"),_utilities_useId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","label","labelClassName","labelComponent","labelId","errorMessage","errorMessageClassName","errorPlacement","hint","requirementLabel","inversed","wrapperIsFieldset"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function useFormLabel(props){var _props$labelId,_props$errorId,_props$ariaInvalid,id=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_3__.Z)("field--",props.id),labelId=null!==(_props$labelId=props.labelId)&&void 0!==_props$labelId?_props$labelId:"".concat(id,"__label"),errorId=null!==(_props$errorId=props.errorId)&&void 0!==_props$errorId?_props$errorId:"".concat(id,"__error"),className=props.className,label=props.label,labelClassName=props.labelClassName,labelComponent=props.labelComponent,errorMessage=(props.labelId,props.errorMessage),errorMessageClassName=props.errorMessageClassName,_props$errorPlacement=props.errorPlacement,errorPlacement=void 0===_props$errorPlacement?(0,_flags__WEBPACK_IMPORTED_MODULE_4__.pp)():_props$errorPlacement,hint=props.hint,requirementLabel=props.requirementLabel,inversed=props.inversed,wrapperIsFieldset=props.wrapperIsFieldset,remainingProps=_objectWithoutProperties(props,_excluded),hasBottomError="bottom"===errorPlacement&&errorMessage,bottomError=hasBottomError?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_InlineError_InlineError__WEBPACK_IMPORTED_MODULE_5__.Z,{id:errorId,inversed:inversed,className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-field__error-message--bottom",errorMessageClassName),children:errorMessage}):void 0,showHiddenError=wrapperIsFieldset&&bottomError,ariaInvalid=null!==(_props$ariaInvalid=props["aria-invalid"])&&void 0!==_props$ariaInvalid?_props$ariaInvalid:!!errorMessage;return{labelProps:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.HY,{children:[label,showHiddenError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("div",{className:"ds-u-visibility--screen-reader",children:errorMessage})]}),className:labelClassName,component:labelComponent,errorMessage:bottomError?void 0:errorMessage,errorMessageClassName:bottomError?void 0:errorMessageClassName,errorId:errorId,fieldId:wrapperIsFieldset?void 0:id,hint:hint,id:labelId,requirementLabel:requirementLabel,inversed:inversed},fieldProps:_objectSpread(_objectSpread({},remainingProps),{},{id:id,errorMessage:errorMessage,inversed:inversed,"aria-describedby":hasBottomError?classnames__WEBPACK_IMPORTED_MODULE_1___default()(props["aria-describedby"],errorId):props["aria-describedby"],"aria-invalid":wrapperIsFieldset?void 0:ariaInvalid}),wrapperProps:{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"ds-c-fieldset":wrapperIsFieldset},className),"aria-invalid":wrapperIsFieldset?ariaInvalid:void 0},bottomError:bottomError,errorId:errorId}}try{useFormLabel.displayName="useFormLabel",useFormLabel.__docgenInfo={description:"This hook contains business logic for how an input field relates to its label\nand wrapping container element. It takes a component's props and generates\nthe specialized set of props for its label, field, wrapper element, and\npossible detached \"bottom error\". While the order and structure of those\nelements are different between components and are specific to their\nimplementation, much of the logic for prop/attribute generation is consistent\nbetween components. The hook will return the relevant information as\nproperties of an object:\n\n  - labelProps:   Props to be applied to a `FormLabel` (where we get the name)\n  - fieldProps:   Props to be applied to the field (a.k.a., the input)\n  - wrapperProps: Props to be applied to the wrapping element\n  - bottomError:  A rendered React element representing a bottom-placed error\n  - errorId:      The id (string) of the error-message element, in case we\n                  need to reference it (currently only necessary to support\n                  the FormControl component, which this hook aims to replace)\n\nNote that while it's helpful now to abstract away this logic behind a shared\nhook, that may not always be the case. The first step in creating this hook\nwas to allow an alternative to `FormControl` that allowed for more freedom in\nhow the component's individual elements were structured at to get rid of the\ndichotomy it imposes on components where their implementation must be split\nbetween an inner and outer component.",displayName:"useFormLabel",props:{labelComponent:{defaultValue:null,description:"The root HTML element used to render the field label",name:"labelComponent",required:!0,type:{name:"enum",value:[{value:'"label"'},{value:'"legend"'}]}},wrapperIsFieldset:{defaultValue:null,description:"",name:"wrapperIsFieldset",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},id:{defaultValue:null,description:"A unique `id` for the field element. Useful for referencing the field from\nother components with `aria-describedby`.",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the field label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field.",name:"errorId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement (ie. "Optional", or "Required").\nIn most cases, this should be used to indicate which fields are optional.\nSee the [form guidelines]({{root}}/guidelines/forms/) for more info.',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},textClassName:{defaultValue:null,description:"Additional classes to be added to the label text.",name:"textClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/FormLabel/useFormLabel.tsx#useFormLabel"]={docgenInfo:useFormLabel.__docgenInfo,name:"useFormLabel",path:"packages/design-system/src/components/FormLabel/useFormLabel.tsx#useFormLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/AlertCircleIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return AlertCircleIcon}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultProps={className:"",viewBox:"37 2 135 135"};function AlertCircleIcon(props){var iconCssClasses="ds-c-icon--alert-circle ".concat(props.className||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,_objectSpread(_objectSpread(_objectSpread({title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("icons.alertCircle")},defaultProps),props),{},{className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.821 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.351 2.798 21.82 8.392 31.408 5.595 9.584 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771C167.773 94.82 170.57 84.35 170.57 73c0-11.351-2.797-21.822-8.39-31.408zm-43.75 70.433c0 .761-.246 1.398-.734 1.914s-1.086.773-1.793.773H100.26c-.706 0-1.331-.271-1.874-.814-.543-.543-.814-1.168-.814-1.873V96.546c0-.706.271-1.331.814-1.874.543-.543 1.168-.814 1.874-.814h15.643c.707 0 1.306.258 1.793.773.488.518.734 1.154.734 1.915v15.479zm-.164-28.026c-.055.543-.339 1.019-.854 1.426-.517.407-1.154.61-1.914.61h-15.073c-.761 0-1.413-.203-1.956-.61-.543-.407-.815-.883-.815-1.426l-1.385-50.595c0-.653.271-1.141.814-1.467.544-.434 1.196-.652 1.956-.652h17.926c.761 0 1.412.217 1.955.652.543.326.813.815.813 1.467l-1.467 50.595z"})}))}AlertCircleIcon.displayName="AlertCircleIcon";try{AlertCircleIcon.displayName="AlertCircleIcon",AlertCircleIcon.__docgenInfo={description:"",displayName:"AlertCircleIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"]={docgenInfo:AlertCircleIcon.__docgenInfo,name:"AlertCircleIcon",path:"packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/SvgIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{l:function(){return SvgIcon}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_utilities_useId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["ariaHidden","className","children","description","id","inversed","title","viewBox"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIcon(_ref){var ariaHidden=_ref.ariaHidden,className=_ref.className,children=_ref.children,description=_ref.description,id=_ref.id,inversed=_ref.inversed,title=_ref.title,viewBox=_ref.viewBox,otherProps=_objectWithoutProperties(_ref,_excluded),svgClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_3__.Z)("icon--",id),titleId="".concat(rootId,"__title"),descriptionId="".concat(rootId,"__desc"),ariaLabelledBy=description?"".concat(titleId," ").concat(descriptionId):titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("svg",_objectSpread(_objectSpread(_objectSpread({"aria-hidden":ariaHidden,className:svgClasses,focusable:!1,id:(null!=id?id:isSrVisible)?rootId:void 0,viewBox:viewBox,xmlns:"http://www.w3.org/2000/svg"},screenReaderProps),otherProps),{},{children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("desc",{id:descriptionId,children:description}),children]}))}SvgIcon.displayName="SvgIcon",SvgIcon.defaultProps={ariaHidden:!0,inversed:!1};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true"},description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The elements that make up the SVG",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:{value:"false"},description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/InlineError/InlineError.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/Icons/AlertCircleIcon.tsx"),_i18n__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_utilities_useId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function InlineError(_ref){var children=_ref.children,className=_ref.className,id=_ref.id,inversed=_ref.inversed,classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-inline-error","ds-c-field__error-message",{"ds-c-field__error-message--inverse":inversed},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("span",{className:classes,id:(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_3__.Z)("inline-error--",id),"aria-live":"assertive","aria-atomic":"true",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_Icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_4__.g,{viewBox:"36 -12 186 186"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("span",{className:"ds-u-visibility--screen-reader",children:"".concat((0,_i18n__WEBPACK_IMPORTED_MODULE_5__.t)("inlineError.prefix"),": ")}),children]})}InlineError.displayName="InlineError",__webpack_exports__.Z=InlineError;try{InlineError.displayName="InlineError",InlineError.__docgenInfo={description:"",displayName:"InlineError",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"",name:"inversed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/InlineError/InlineError.tsx#InlineError"]={docgenInfo:InlineError.__docgenInfo,name:"InlineError",path:"packages/design-system/src/components/InlineError/InlineError.tsx#InlineError"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/utilities/useId.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{Z:function(){return useId}});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null!=providedId?providedId:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}}}]);