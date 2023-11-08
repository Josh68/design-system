/*! For license information please see components-web-components-ds-badge-stories.0ddc0cf8.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[8775],{"./packages/design-system/src/components/web-components/ds-badge.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:function(){return Default},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return ds_badge_stories}});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),WebComponentDocTemplate=__webpack_require__("./.storybook/docs/WebComponentDocTemplate.mdx"),preactement_define=__webpack_require__("./packages/design-system/src/components/web-components/preactement/define.ts"),Badge=__webpack_require__("./packages/design-system/src/components/Badge/Badge.tsx");(0,preactement_define.O)("ds-badge",(function(){return Badge.Z}),{attributes:["class-name","size","variation"]});var _Default$parameters,_Default$parameters2,_Default$parameters2$,jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var ds_badge_stories={title:"Web Components/Badge",argTypes:{children:{control:"text",description:"Sets the badge's content"},variation:{description:"Sets the variation, or color, of a badge",options:[void 0,"info","success","warn","alert"],control:{type:"radio"}},size:{description:"Sets the size of a badge",options:["default","big"],control:{type:"radio"}}},args:{children:"Expiring soon",size:"big",variation:"warn"},parameters:{docs:{page:WebComponentDocTemplate.Z,description:{component:"For information about how and when to use this component, [refer to its full documentation page](https://design.cms.gov/components/badge/)."}}}},Template=function Template(args){var _args$children;return(0,compat_module.createElement)("ds-badge",_objectSpread(_objectSpread({},args),{},{key:JSON.stringify(args)}),null!==(_args$children=args.children)&&void 0!==_args$children?_args$children:(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:"Default badge text"}))};Template.displayName="Template";var Default=Template.bind({});Default.parameters=_objectSpread(_objectSpread({},Default.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:_objectSpread({originalSource:"args => <ds-badge {...args} key={JSON.stringify(args)}>\n    {args.children ?? <>Default badge text</>}\n  </ds-badge>"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})});var __namedExportsOrder=["Default"]},"./packages/design-system/src/components/Badge/Badge.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","children","size","variation"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Badge=function Badge(props){var _props$className=props.className,className=void 0===_props$className?"":_props$className,children=props.children,size=props.size,variation=props.variation,others=_objectWithoutProperties(props,_excluded),variationClass=variation&&"ds-c-badge--".concat(variation),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-badge",variationClass,{big:"ds-c-badge--big"}[size],className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("span",_objectSpread(_objectSpread({className:classes},others),{},{children:[variation&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("span",{className:"ds-u-visibility--screen-reader",children:[(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("badge.".concat(variation)),": "]}),children]}))};Badge.displayName="Badge",__webpack_exports__.Z=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/badge/).",displayName:"Badge",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},size:{defaultValue:null,description:"Sets the font size of the Badge. Only supports 'big'",name:"size",required:!1,type:{name:'"big"'}},variation:{defaultValue:null,description:"A string corresponding to the badge-component variation classes",name:"variation",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"success"'},{value:'"warn"'},{value:'"info"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"packages/design-system/src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);