/*! For license information please see 1327.b554d8a7.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[1327],{"./packages/design-system/dist/react-components/esm/Button/Button.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{z:function(){return Button},Z:function(){return Button_Button}});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/mergeRefs.js"),flags=__webpack_require__("./packages/design-system/dist/react-components/esm/flags.js"),events=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/events.js"),getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/getAnalyticsContentFromRefs.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function useButtonAnalytics(_ref){var analytics=_ref.analytics,analyticsLabelOverride=_ref.analyticsLabelOverride,analyticsParentHeading=_ref.analyticsParentHeading,analyticsParentType=_ref.analyticsParentType,href=_ref.href,_ref$onAnalyticsEvent=_ref.onAnalyticsEvent,onAnalyticsEvent=void 0===_ref$onAnalyticsEvent?events.Qm:_ref$onAnalyticsEvent,type=_ref.type,variation=_ref.variation,contentRef=(0,compat_module.useRef)();return{contentRef:contentRef,sendButtonEvent:function sendButtonEvent(){if(!0===analytics||(0,flags.rI)()&&!1!==analytics){var buttonText=null!=analyticsLabelOverride?analyticsLabelOverride:(0,getAnalyticsContentFromRefs.L)([contentRef]),buttonStyle=null!=variation?variation:"default",buttonType=null!=type?type:"button",buttonParentHeading=null!=analyticsParentHeading?analyticsParentHeading:" ",buttonParentType=null!=analyticsParentType?analyticsParentType:" ";return onAnalyticsEvent(function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({event_name:"button_engagement",event_type:events.tw.UI_INTERACTION,event_category:events.Jk.UI_INTERACTION,event_action:"engaged ".concat(buttonStyle," button"),event_label:href?"".concat(buttonText,": ").concat(href):buttonText,event_extension:events.RW,text:buttonText,button_style:buttonStyle,button_type:href?"link":buttonType,parent_component_heading:buttonParentHeading,parent_component_type:buttonParentType},href?{link_url:href}:{}))}}}}function Button_typeof(obj){return Button_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Button_typeof(obj)}var _excluded=["analytics","analyticsLabelOverride","analyticsEventTypeOverride","analyticsParentHeading","analyticsParentType","onAnalyticsEvent","children","className","inputRef","isAlternate","onClick","onDark","size","variation"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function Button_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Button_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Button_ownKeys(Object(source),!0).forEach((function(key){Button_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Button_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Button_defineProperty(obj,key,value){return(key=function Button_toPropertyKey(arg){var key=function Button_toPrimitive(input,hint){if("object"!==Button_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Button_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Button_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Button=function Button(props){props.analytics,props.analyticsLabelOverride,props.analyticsEventTypeOverride,props.analyticsParentHeading,props.analyticsParentType,props.onAnalyticsEvent;var children=props.children,className=props.className,inputRef=props.inputRef,isAlternate=props.isAlternate,onClick=props.onClick,onDark=props.onDark,size=props.size,variation=props.variation,otherProps=_objectWithoutProperties(props,_excluded),_useButtonAnalytics=useButtonAnalytics(props),contentRef=_useButtonAnalytics.contentRef,sendButtonEvent=_useButtonAnalytics.sendButtonEvent,ComponentType=props.href?"a":"button",colorSchemeClass=isAlternate&&"ds-c-button--alternate",modeClass=onDark&&"ds-c-button--on-dark",sizeClass=size&&"ds-c-button--".concat(size),variationClass=variation&&"ds-c-button--".concat(variation),allClassNames=classnames_default()("ds-c-button",colorSchemeClass,modeClass,sizeClass,variationClass,className),attrs=Button_objectSpread(Button_objectSpread({},otherProps),{},{className:allClassNames});function handleClick(e){props.disabled||(sendButtonEvent(),onClick&&onClick(e))}return"button"!==ComponentType&&(delete attrs.disabled,delete attrs.type,props.disabled&&(attrs.role="link",attrs["aria-disabled"]=!0,delete attrs.href)),compat_module.default.createElement(ComponentType,_extends({ref:(0,mergeRefs.Z)([inputRef,contentRef]),onClick:handleClick,onKeyPress:"a"===ComponentType?function handleKeyPress(e){" "===e.key&&handleClick(e)}:void 0},attrs),children)};Button.defaultProps={isAlternate:!1,onDark:!1,type:"button"},Button.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/button/).",methods:[],displayName:"Button",props:{isAlternate:{defaultValue:{value:"false",computed:!1},required:!1},onDark:{defaultValue:{value:"false",computed:!1},required:!1},type:{defaultValue:{value:"'button'",computed:!1},required:!1}}};var Button_Button=Button},"./packages/design-system/dist/react-components/esm/Icons/SvgIcon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{l:function(){return SvgIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/useId.js"),_excluded=["ariaHidden","className","children","description","id","inversed","title","viewBox"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SvgIcon=function SvgIcon(_ref){var ariaHidden=_ref.ariaHidden,className=_ref.className,children=_ref.children,description=_ref.description,id=_ref.id,inversed=_ref.inversed,title=_ref.title,viewBox=_ref.viewBox,otherProps=_objectWithoutProperties(_ref,_excluded),svgClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("icon--",id),titleId="".concat(rootId,"__title"),descriptionId="".concat(rootId,"__desc"),ariaLabelledBy=description?"".concat(titleId," ").concat(descriptionId):titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("svg",_extends({"aria-hidden":ariaHidden,className:svgClasses,id:(null!=id?id:isSrVisible)?rootId:void 0,viewBox:viewBox,xmlns:"http://www.w3.org/2000/svg"},screenReaderProps,otherProps),isSrVisible&&react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("title",{id:titleId},title),isSrVisible&&description&&react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("desc",{id:descriptionId},description),children)};SvgIcon.defaultProps={ariaHidden:!0,inversed:!1},SvgIcon.__docgenInfo={description:"",methods:[],displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true",computed:!1},required:!1},inversed:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/design-system/dist/react-components/esm/analytics/events.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_require__.d(__webpack_exports__,{Jk:function(){return EventCategory},Qm:function(){return defaultAnalyticsFunction},RW:function(){return eventExtensionText},tw:function(){return EventType}});var EventCategory=function(EventCategory){return EventCategory.UI_COMPONENTS="ui components",EventCategory.UI_INTERACTION="ui interaction",EventCategory}({}),EventType=function(EventType){return EventType.CONVERSION="conversion",EventType.UI_INTERACTION="ui interaction",EventType}({}),eventExtensionText="Design system integration",MAX_STRING_LENGTH=100;var MAX_RETRIES=3,TIMEOUT=300;function sendAnalytics(eventType,event){var retry=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,utag=window.utag;if(utag&&utag[eventType]){!function clipStrings(event){for(var key in event){var value=event[key];"string"==typeof value&&(event[key]=value.substring(0,MAX_STRING_LENGTH))}return event}(event);try{utag[eventType](function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({ga_eventValue:"",ga_eventAction:event.event_action,ga_eventCategory:event.event_category,ga_eventLabel:event.event_label},event))}catch(error){console.warn("Error sending analytics event: ",error)}}else++retry<=MAX_RETRIES&&setTimeout((function(){return sendAnalytics(eventType,event,retry)}),retry*TIMEOUT)}var defaultAnalyticsFunction=function sendLinkEvent(event){return sendAnalytics("link",event)}},"./packages/design-system/dist/react-components/esm/analytics/getAnalyticsContentFromRefs.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function getAnalyticsContentFromRefs(refs,componentName){return refs.map((function(ref){var _ref$current;return null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.textContent})).find((function(textContent){return textContent}))}__webpack_require__.d(__webpack_exports__,{L:function(){return getAnalyticsContentFromRefs}}),__webpack_exports__.Z=getAnalyticsContentFromRefs},"./packages/design-system/dist/react-components/esm/flags.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{ET:function(){return alertSendsAnalytics},k8:function(){return dialogSendsAnalytics},km:function(){return ErrorPlacement},lp:function(){return helpDrawerSendsAnalytics},on:function(){return setErrorPlacementDefault},pp:function(){return errorPlacementDefault},rI:function(){return buttonSendsAnalytics}});var ErrorPlacement=function(ErrorPlacement){return ErrorPlacement.Top="top",ErrorPlacement.Bottom="bottom",ErrorPlacement}({}),flags={ERROR_PLACEMENT_DEFAULT:ErrorPlacement.Top,ALERT_SENDS_ANALYTICS:!1,BUTTON_SENDS_ANALYTICS:!1,DIALOG_SENDS_ANALYTICS:!1,HELP_DRAWER_SENDS_ANALYTICS:!1};function errorPlacementDefault(){return flags.ERROR_PLACEMENT_DEFAULT}function setErrorPlacementDefault(value){flags.ERROR_PLACEMENT_DEFAULT=value}function alertSendsAnalytics(){return flags.ALERT_SENDS_ANALYTICS}function buttonSendsAnalytics(){return flags.BUTTON_SENDS_ANALYTICS}function dialogSendsAnalytics(){return flags.DIALOG_SENDS_ANALYTICS}function helpDrawerSendsAnalytics(){return flags.HELP_DRAWER_SENDS_ANALYTICS}},"./packages/design-system/dist/react-components/esm/utilities/mergeRefs.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function mergeRefs(refs){return function(value){refs.forEach((function(ref){"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}__webpack_require__.d(__webpack_exports__,{Z:function(){return mergeRefs}})},"./packages/design-system/dist/react-components/esm/utilities/useId.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useId}});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null!=providedId?providedId:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":function(module,__unused_webpack_exports,__webpack_require__){var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);