/*! For license information please see components-Badge-Badge-stories.16e64498.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[1065],{"./packages/design-system/src/components/Badge/Badge.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Alert:function(){return Alert},Default:function(){return Default},Info:function(){return Info},Success:function(){return Success},Warn:function(){return Warn},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Badge_stories}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","children","size","variation"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Badge=function Badge(props){var _props$className=props.className,className=void 0===_props$className?"":_props$className,children=props.children,size=props.size,variation=props.variation,others=_objectWithoutProperties(props,_excluded),variationClass=variation&&"ds-c-badge--".concat(variation),classes=classnames_default()("ds-c-badge",variationClass,{big:"ds-c-badge--big"}[size],className);return(0,jsx_runtime.BX)("span",_objectSpread(_objectSpread({className:classes},others),{},{children:[variation&&(0,jsx_runtime.BX)("span",{className:"ds-u-visibility--screen-reader",children:[(0,i18n.t)("badge.".concat(variation)),": "]}),children]}))};Badge.displayName="Badge";var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Alert$parameters,_Alert$parameters2,_Alert$parameters2$do,_Warn$parameters,_Warn$parameters2,_Warn$parameters2$doc,_Success$parameters,_Success$parameters2,_Success$parameters2$,_Info$parameters,_Info$parameters2,_Info$parameters2$doc,Badge_Badge=Badge;try{Badge.displayName="Badge",Badge.__docgenInfo={description:"",displayName:"Badge",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLSpanElement>"}},size:{defaultValue:null,description:"Sets the font size of the Badge. Only supports 'big'",name:"size",required:!1,type:{name:'"big"'}},variation:{defaultValue:null,description:"A string corresponding to the badge-component variation classes",name:"variation",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"warn"'},{value:'"success"'},{value:'"info"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Badge/Badge.tsx#Badge"]={docgenInfo:Badge.__docgenInfo,name:"Badge",path:"packages/design-system/src/components/Badge/Badge.tsx#Badge"})}catch(__react_docgen_typescript_loader_error){}function Badge_stories_typeof(obj){return Badge_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Badge_stories_typeof(obj)}function Badge_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Badge_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Badge_stories_ownKeys(Object(source),!0).forEach((function(key){Badge_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Badge_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Badge_stories_defineProperty(obj,key,value){return(key=function Badge_stories_toPropertyKey(arg){var key=function Badge_stories_toPrimitive(input,hint){if("object"!==Badge_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Badge_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Badge_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Badge_stories={title:"Components/Badge",component:Badge_Badge,argTypes:{size:{options:["default","big"],control:{type:"radio"}},variation:{options:["default","info","success","warn","alert"],control:{type:"radio"}},children:{control:"text"}}},Template=function Template(args){var _args$children,_args$children2,_args$children3;return(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:(0,jsx_runtime.BX)("div",{children:[(0,jsx_runtime.tZ)(Badge_Badge,Badge_stories_objectSpread(Badge_stories_objectSpread({},args),{},{children:null!==(_args$children=args.children)&&void 0!==_args$children?_args$children:(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:"1"})})),(0,jsx_runtime.tZ)(Badge_Badge,Badge_stories_objectSpread(Badge_stories_objectSpread({},args),{},{children:null!==(_args$children2=args.children)&&void 0!==_args$children2?_args$children2:(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:"Badge"})})),(0,jsx_runtime.tZ)(Badge_Badge,Badge_stories_objectSpread(Badge_stories_objectSpread({},args),{},{size:"big",children:null!==(_args$children3=args.children)&&void 0!==_args$children3?_args$children3:(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:"Badge with size 'big'"})}))]})})},Default=Template.bind({}),Alert=Template.bind({});Alert.args={variation:"alert"};var Warn=Template.bind({});Warn.args={variation:"warn"};var Success=Template.bind({});Success.args={variation:"success"};var Info=Template.bind({});Info.args={variation:"info"},Default.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Default.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:'args => <>\n    <div>\n      <Badge {...args}>{args.children ?? <>1</>}</Badge>\n      <Badge {...args}>{args.children ?? <>Badge</>}</Badge>\n      <Badge {...args} size="big">\n        {args.children ?? <>Badge with size &apos;big&apos;</>}\n      </Badge>\n    </div>\n  </>'},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Alert.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Alert.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Alert$parameters=Alert.parameters)||void 0===_Alert$parameters?void 0:_Alert$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:'args => <>\n    <div>\n      <Badge {...args}>{args.children ?? <>1</>}</Badge>\n      <Badge {...args}>{args.children ?? <>Badge</>}</Badge>\n      <Badge {...args} size="big">\n        {args.children ?? <>Badge with size &apos;big&apos;</>}\n      </Badge>\n    </div>\n  </>'},null===(_Alert$parameters2=Alert.parameters)||void 0===_Alert$parameters2||null===(_Alert$parameters2$do=_Alert$parameters2.docs)||void 0===_Alert$parameters2$do?void 0:_Alert$parameters2$do.source)})}),Warn.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Warn.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Warn$parameters=Warn.parameters)||void 0===_Warn$parameters?void 0:_Warn$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:'args => <>\n    <div>\n      <Badge {...args}>{args.children ?? <>1</>}</Badge>\n      <Badge {...args}>{args.children ?? <>Badge</>}</Badge>\n      <Badge {...args} size="big">\n        {args.children ?? <>Badge with size &apos;big&apos;</>}\n      </Badge>\n    </div>\n  </>'},null===(_Warn$parameters2=Warn.parameters)||void 0===_Warn$parameters2||null===(_Warn$parameters2$doc=_Warn$parameters2.docs)||void 0===_Warn$parameters2$doc?void 0:_Warn$parameters2$doc.source)})}),Success.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Success.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Success$parameters=Success.parameters)||void 0===_Success$parameters?void 0:_Success$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:'args => <>\n    <div>\n      <Badge {...args}>{args.children ?? <>1</>}</Badge>\n      <Badge {...args}>{args.children ?? <>Badge</>}</Badge>\n      <Badge {...args} size="big">\n        {args.children ?? <>Badge with size &apos;big&apos;</>}\n      </Badge>\n    </div>\n  </>'},null===(_Success$parameters2=Success.parameters)||void 0===_Success$parameters2||null===(_Success$parameters2$=_Success$parameters2.docs)||void 0===_Success$parameters2$?void 0:_Success$parameters2$.source)})}),Info.parameters=Badge_stories_objectSpread(Badge_stories_objectSpread({},Info.parameters),{},{docs:Badge_stories_objectSpread(Badge_stories_objectSpread({},null===(_Info$parameters=Info.parameters)||void 0===_Info$parameters?void 0:_Info$parameters.docs),{},{source:Badge_stories_objectSpread({originalSource:'args => <>\n    <div>\n      <Badge {...args}>{args.children ?? <>1</>}</Badge>\n      <Badge {...args}>{args.children ?? <>Badge</>}</Badge>\n      <Badge {...args} size="big">\n        {args.children ?? <>Badge with size &apos;big&apos;</>}\n      </Badge>\n    </div>\n  </>'},null===(_Info$parameters2=Info.parameters)||void 0===_Info$parameters2||null===(_Info$parameters2$doc=_Info$parameters2.docs)||void 0===_Info$parameters2$doc?void 0:_Info$parameters2$doc.source)})});var __namedExportsOrder=["Default","Alert","Warn","Success","Info"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);