/*! For license information please see components-Badge-Badge-stories.09a43a0b.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[1065],{"./packages/design-system/src/components/Badge/Badge.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:function(){return Alert},Big:function(){return Big},Default:function(){return Default},Informational:function(){return Informational},Success:function(){return Success},Warning:function(){return Warning},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Badge_stories}});__webpack_require__("./node_modules/react/index.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","children","size","variation"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Badge=function Badge(props){var _props$className=props.className,className=void 0===_props$className?"":_props$className,children=props.children,size=props.size,variation=props.variation,others=_objectWithoutProperties(props,_excluded),variationClass=variation&&"ds-c-badge--".concat(variation),classes=classnames_default()("ds-c-badge",variationClass,{big:"ds-c-badge--big"}[size],className);return(0,jsx_runtime.jsxs)("span",_objectSpread(_objectSpread({className:classes},others),{},{children:[variation&&(0,jsx_runtime.jsxs)("span",{className:"ds-u-visibility--screen-reader",children:[(0,i18n.t)("badge.".concat(variation)),": "]}),children]}))};Badge.displayName="Badge";var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Informational$parame,_Informational$parame2,_Informational$parame3,_Success$parameters,_Success$parameters2,_Success$parameters2$,_Warning$parameters,_Warning$parameters2,_Warning$parameters2$,_Alert$parameters,_Alert$parameters2,_Alert$parameters2$do,_Big$parameters,_Big$parameters2,_Big$parameters2$docs,Badge_Badge=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/badge/).",displayName:"Badge",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},size:{defaultValue:null,description:"Sets the font size of the Badge. Only supports 'big'",name:"size",required:!1,type:{name:'"big"'}},variation:{defaultValue:null,description:"A string corresponding to the badge-component variation classes",name:"variation",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"success"'},{value:'"warn"'},{value:'"info"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"packages/design-system/src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}function Badge_stories_typeof(obj){return Badge_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Badge_stories_typeof(obj)}function Badge_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Badge_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Badge_stories_ownKeys(Object(source),!0).forEach((function(key){Badge_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Badge_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Badge_stories_defineProperty(obj,key,value){return(key=function Badge_stories_toPropertyKey(arg){var key=function Badge_stories_toPrimitive(input,hint){if("object"!==Badge_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Badge_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Badge_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var Badge_stories={component:Badge_Badge,argTypes:{size:{options:["default","big"],control:{type:"radio"}},variation:{options:["default","info","success","warn","alert"],control:{type:"radio"}},children:{control:"text"}}},BadgeTemplate={render:function render(_ref){var args=_extends({},(function _objectDestructuringEmpty(obj){if(null==obj)throw new TypeError("Cannot destructure "+obj)}(_ref),_ref));return(0,jsx_runtime.jsx)(Badge_Badge,Badge_stories_objectSpread(Badge_stories_objectSpread({},args),{},{children:args.children}))}},Default=Badge_stories_objectSpread(Badge_stories_objectSpread({},BadgeTemplate),{},{args:{children:"6"}}),Informational=Badge_stories_objectSpread(Badge_stories_objectSpread({},BadgeTemplate),{},{args:{variation:"info",children:"29"}}),Success=Badge_stories_objectSpread(Badge_stories_objectSpread({},BadgeTemplate),{},{args:{variation:"success",children:"Best value"}}),Warning=Badge_stories_objectSpread(Badge_stories_objectSpread({},BadgeTemplate),{},{args:{variation:"warn",children:"Expiring soon"}}),Alert=Badge_stories_objectSpread(Badge_stories_objectSpread({},BadgeTemplate),{},{args:{variation:"alert",children:"Out of network"}}),Big=Badge_stories_objectSpread(Badge_stories_objectSpread({},BadgeTemplate),{},{args:{size:"big",children:"Ibuprofen"}});Default.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Default.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:"{\n  ...BadgeTemplate,\n  args: {\n    children: '6'\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Informational.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Informational.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Informational$parame=Informational.parameters)||void 0===_Informational$parame?void 0:_Informational$parame.docs),{},{source:Badge_stories_objectSpread({originalSource:"{\n  ...BadgeTemplate,\n  args: {\n    variation: 'info',\n    children: '29'\n  }\n}"},null===(_Informational$parame2=Informational.parameters)||void 0===_Informational$parame2||null===(_Informational$parame3=_Informational$parame2.docs)||void 0===_Informational$parame3?void 0:_Informational$parame3.source)})}),Success.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Success.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Success$parameters=Success.parameters)||void 0===_Success$parameters?void 0:_Success$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:"{\n  ...BadgeTemplate,\n  args: {\n    variation: 'success',\n    children: 'Best value'\n  }\n}"},null===(_Success$parameters2=Success.parameters)||void 0===_Success$parameters2||null===(_Success$parameters2$=_Success$parameters2.docs)||void 0===_Success$parameters2$?void 0:_Success$parameters2$.source)})}),Warning.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Warning.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Warning$parameters=Warning.parameters)||void 0===_Warning$parameters?void 0:_Warning$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:"{\n  ...BadgeTemplate,\n  args: {\n    variation: 'warn',\n    children: 'Expiring soon'\n  }\n}"},null===(_Warning$parameters2=Warning.parameters)||void 0===_Warning$parameters2||null===(_Warning$parameters2$=_Warning$parameters2.docs)||void 0===_Warning$parameters2$?void 0:_Warning$parameters2$.source)})}),Alert.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Alert.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Alert$parameters=Alert.parameters)||void 0===_Alert$parameters?void 0:_Alert$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:"{\n  ...BadgeTemplate,\n  args: {\n    variation: 'alert',\n    children: 'Out of network'\n  }\n}"},null===(_Alert$parameters2=Alert.parameters)||void 0===_Alert$parameters2||null===(_Alert$parameters2$do=_Alert$parameters2.docs)||void 0===_Alert$parameters2$do?void 0:_Alert$parameters2$do.source)})}),Big.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Big.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Big$parameters=Big.parameters)||void 0===_Big$parameters?void 0:_Big$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:"{\n  ...BadgeTemplate,\n  args: {\n    size: 'big',\n    children: 'Ibuprofen'\n  }\n}"},null===(_Big$parameters2=Big.parameters)||void 0===_Big$parameters2||null===(_Big$parameters2$docs=_Big$parameters2.docs)||void 0===_Big$parameters2$docs?void 0:_Big$parameters2$docs.source)})});var __namedExportsOrder=["Default","Informational","Success","Warning","Alert","Big"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);