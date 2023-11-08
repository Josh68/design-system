/*! For license information please see 1337.a094b8bc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[1337],{"./packages/design-system/src/components/Alert/Alert.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{b:function(){return Alert},Z:function(){return Alert_Alert}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/src/components/utilities/mergeRefs.ts"),useAutoFocus=__webpack_require__("./packages/design-system/src/components/utilities/useAutoFocus.ts"),events=__webpack_require__("./packages/design-system/src/components/analytics/events.ts"),useAnalyticsContent=__webpack_require__("./packages/design-system/src/components/analytics/useAnalyticsContent.ts"),flags=__webpack_require__("./packages/design-system/src/components/flags.ts");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var AlertCircleIcon=__webpack_require__("./packages/design-system/src/components/Icons/AlertCircleIcon.tsx"),CheckCircleIcon=__webpack_require__("./packages/design-system/src/components/Icons/CheckCircleIcon.tsx"),WarningIcon=__webpack_require__("./packages/design-system/src/components/Icons/WarningIcon.tsx"),InfoCircleIcon=__webpack_require__("./packages/design-system/src/components/Icons/InfoCircleIcon.tsx"),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["children","className","autoFocus","heading","headingId","headingLevel","hideIcon","alertRef","role","variation","weight","analytics","analyticsLabelOverride","analyticsEventTypeOverride","onAnalyticsEvent"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Alert=function Alert(props){var _props$headingId,_useAlertAnalytics=function useAlertAnalytics(_ref){var analytics=_ref.analytics,analyticsLabelOverride=_ref.analyticsLabelOverride,_ref$onAnalyticsEvent=_ref.onAnalyticsEvent,onAnalyticsEvent=void 0===_ref$onAnalyticsEvent?events.Qm:_ref$onAnalyticsEvent,variation=_ref.variation,_useAnalyticsContent2=_slicedToArray((0,useAnalyticsContent.o)({componentName:"Alert",onMount:function onMount(content){if((!0===analytics||(0,flags.ET)()&&!1!==analytics)&&variation){var eventHeadingText=null!=analyticsLabelOverride?analyticsLabelOverride:content;eventHeadingText?onAnalyticsEvent({event_name:"alert_impression",event_type:events.tw.UI_INTERACTION,event_action:"alert impression",event_extension:events.RW,event_category:events.Jk.UI_COMPONENTS,event_label:eventHeadingText,heading:eventHeadingText,type:variation}):console.error("No content found for Alert analytics event")}}}),2);return{headingRef:_useAnalyticsContent2[0],bodyRef:_useAnalyticsContent2[1]}}(props),headingRef=_useAlertAnalytics.headingRef,bodyRef=_useAlertAnalytics.bodyRef,focusRef=(0,useAutoFocus.Z)(props.autoFocus),rootId=(0,useId.Z)("alert--",props.id),headingId=null!==(_props$headingId=props.headingId)&&void 0!==_props$headingId?_props$headingId:"".concat(rootId,"__heading"),a11yLabelId="".concat(rootId,"__a11y-label");var headingElement,children=props.children,className=props.className,autoFocus=props.autoFocus,heading=props.heading,headingLevel=(props.headingId,props.headingLevel),hideIcon=props.hideIcon,alertRef=props.alertRef,role=props.role,variation=props.variation,weight=props.weight,alertProps=(props.analytics,props.analyticsLabelOverride,props.analyticsEventTypeOverride,props.onAnalyticsEvent,_objectWithoutProperties(props,_excluded));if(heading){var Heading="h".concat(headingLevel);headingElement=(0,jsx_runtime.tZ)(Heading,{className:"ds-c-alert__heading",children:heading})}var classes=classnames_default()("ds-c-alert",hideIcon&&"ds-c-alert--hide-icon",variation&&"ds-c-alert--".concat(variation),weight&&"ds-c-alert--".concat(weight),className),a11yLabelText=(0,i18n.t)("alert.".concat(null!=variation?variation:"defaultLabel")),a11yLabel=(0,jsx_runtime.tZ)("span",{className:"ds-c-alert__a11y-label ds-u-visibility--screen-reader",id:a11yLabelId,children:"".concat(a11yLabelText,": ")});return(0,jsx_runtime.BX)("div",_objectSpread(_objectSpread({className:classes,ref:(0,mergeRefs.Z)([alertRef,focusRef]),tabIndex:alertRef||autoFocus?-1:null,role:role,"aria-labelledby":heading?headingId:a11yLabelId},alertProps),{},{children:[function getIcon(){var iconClass="ds-c-alert__icon";if(hideIcon)return null;switch(variation){case"error":return(0,jsx_runtime.tZ)(AlertCircleIcon.g,{className:iconClass});case"success":return(0,jsx_runtime.tZ)(CheckCircleIcon.r,{className:iconClass});case"warn":return(0,jsx_runtime.tZ)(WarningIcon.a,{className:iconClass});default:return(0,jsx_runtime.tZ)(InfoCircleIcon.u,{className:iconClass})}}(),(0,jsx_runtime.BX)("div",{className:"ds-c-alert__body",id:headingId,ref:bodyRef,children:[heading?(0,jsx_runtime.BX)("div",{className:"ds-c-alert__header ds-c-alert__heading",ref:headingRef,children:[a11yLabel,headingElement]}):a11yLabel,children]})]}))};Alert.displayName="Alert",Alert.defaultProps={role:"region",headingLevel:"2"};var Alert_Alert=Alert;try{Alert.displayName="Alert",Alert.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/alert/).",displayName:"Alert",props:{alertRef:{defaultValue:null,description:"Access a reference to the `alert` `div` element",name:"alertRef",required:!1,type:{name:"(...args: any[]) => any"}},autoFocus:{defaultValue:null,description:"Sets the focus on Alert during the first mount",name:"autoFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The alert's body content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"Text for the alert heading",name:"heading",required:!1,type:{name:"ReactNode"}},headingId:{defaultValue:null,description:"Optional id used to link the `aria-labelledby` attribute to the heading. If not provided, a unique id will be automatically generated and used.",name:"headingId",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:"Heading type to override default `<h2>`.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},hideIcon:{defaultValue:null,description:"Boolean to hide the `Alert` icon",name:"hideIcon",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"A unique ID for this element. A unique ID will be generated if one isn't provided.",name:"id",required:!1,type:{name:"string"}},role:{defaultValue:{value:"region"},description:"ARIA `role`, defaults to 'region'",name:"role",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"alertdialog"'},{value:'"region"'},{value:'"status"'}]}},weight:{defaultValue:null,description:"A string corresponding to the `Alert` weight classes (`lightweight`)",name:"weight",required:!1,type:{name:'"lightweight"'}},variation:{defaultValue:null,description:"A string corresponding to the `Alert` variation classes (`error`, `warn`, `success`)",name:"variation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warn"'},{value:'"error"'}]}},analytics:{defaultValue:null,description:"Analytics events tracking is enabled by default. Set this value to `false` to\ndisable tracking for this component instance.",name:"analytics",required:!1,type:{name:"boolean"}},analyticsLabelOverride:{defaultValue:null,description:"An override for the dynamic content sent to analytics services. By default this\ncontent comes from the heading.\n\nIn cases where this component’s heading may contain **sensitive information**,\nuse this prop to override what is sent to analytics.",name:"analyticsLabelOverride",required:!1,type:{name:"string"}},analyticsEventTypeOverride:{defaultValue:null,description:"If you need the `event_type` to be overridden for your use case, you can provide\nan alternate string here. Suggested values can be found in the EventType enum.",name:"analyticsEventTypeOverride",required:!1,type:{name:"string"}},onAnalyticsEvent:{defaultValue:null,description:"Optional callback that will intercept analytics events for this component.\nIf none is specified, the design system will use the default analytics\nfunction, which can be overwritten globally with `setDefaultAnalyticsFunction`.",name:"onAnalyticsEvent",required:!1,type:{name:"(event: AnalyticsEvent) => void"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"packages/design-system/src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/CheckCircleIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{r:function(){return CheckCircleIcon}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultProps={className:"",viewBox:"38 7 135 135"};function CheckCircleIcon(props){var iconCssClasses="ds-c-icon--check-circle ".concat(props.className||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,_objectSpread(_objectSpread(_objectSpread({title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("icons.checkCircle")},defaultProps),props),{},{className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zm-13.608 21.876l-44.239 44.239c-1.032 1.032-2.281 1.549-3.748 1.549-1.412 0-2.634-.517-3.666-1.549L67.425 78.215c-.977-.979-1.466-2.199-1.466-3.666 0-1.521.488-2.771 1.466-3.749l7.414-7.332c1.033-1.032 2.254-1.548 3.667-1.548s2.635.516 3.667 1.548l18.413 18.413 33.241-33.16c1.032-1.032 2.254-1.548 3.666-1.548 1.411 0 2.635.516 3.666 1.548l7.414 7.333c.979.977 1.467 2.226 1.467 3.747 0 1.467-.488 2.689-1.468 3.667z"})}))}CheckCircleIcon.displayName="CheckCircleIcon";try{CheckCircleIcon.displayName="CheckCircleIcon",CheckCircleIcon.__docgenInfo={description:"",displayName:"CheckCircleIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/CheckCircleIcon.tsx#CheckCircleIcon"]={docgenInfo:CheckCircleIcon.__docgenInfo,name:"CheckCircleIcon",path:"packages/design-system/src/components/Icons/CheckCircleIcon.tsx#CheckCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/InfoCircleIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{u:function(){return InfoCircleIcon}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultProps={className:"",viewBox:"37 2 135 135"};function InfoCircleIcon(props){var iconCssClasses="ds-c-icon--info-circle ".concat(props.className||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,_objectSpread(_objectSpread(_objectSpread({title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("icons.infoCircle")},defaultProps),props),{},{className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zM97.572 26.071c0-.761.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h15.644c.76 0 1.385.245 1.872.733.488.489.734 1.113.734 1.874v13.036c0 .76-.246 1.385-.734 1.873-.487.489-1.112.733-1.872.733h-15.644c-.76 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V26.071zm31.285 86.036c0 .76-.246 1.385-.733 1.872-.487.489-1.112.733-1.874.733h-36.5c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V99.07c0-.762.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h7.822V70.392H89.75c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.874V54.75c0-.761.244-1.385.733-1.874.489-.489 1.114-.733 1.874-.733h26.073c.76 0 1.385.244 1.872.733.488.489.734 1.113.734 1.874v41.714h7.82c.761 0 1.386.245 1.874.733.487.488.733 1.113.733 1.874v13.036z"})}))}InfoCircleIcon.displayName="InfoCircleIcon";try{InfoCircleIcon.displayName="InfoCircleIcon",InfoCircleIcon.__docgenInfo={description:"",displayName:"InfoCircleIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/InfoCircleIcon.tsx#InfoCircleIcon"]={docgenInfo:InfoCircleIcon.__docgenInfo,name:"InfoCircleIcon",path:"packages/design-system/src/components/Icons/InfoCircleIcon.tsx#InfoCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/WarningIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{a:function(){return WarningIcon}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultProps={className:"",viewBox:"27 0 160 135"};function WarningIcon(props){var iconCssClasses="ds-c-icon--warning ".concat(props.className||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,_objectSpread(_objectSpread(_objectSpread({title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("icons.warning")},defaultProps),props),{},{className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{d:"M179.695 125.388L117.126 10.673a10.39 10.39 0 00-3.832-3.992 10.1 10.1 0 00-5.295-1.467c-1.901 0-3.667.49-5.296 1.467s-2.906 2.308-3.829 3.992L36.303 125.388c-1.901 3.423-1.847 6.845.163 10.267a10.24 10.24 0 003.789 3.746 10.188 10.188 0 005.174 1.387H170.57c1.849 0 3.572-.463 5.175-1.387a10.24 10.24 0 003.789-3.746c2.01-3.423 2.064-6.844.161-10.267zm-61.265-8.148c0 .76-.259 1.398-.773 1.914-.516.516-1.127.773-1.834.773H100.18c-.706 0-1.317-.257-1.833-.773-.516-.517-.774-1.154-.774-1.914v-15.48c0-.76.258-1.397.774-1.914.516-.516 1.126-.773 1.833-.773h15.642c.707 0 1.318.257 1.834.773.515.517.773 1.154.773 1.914v15.48zm-.162-30.47c-.056.543-.341.991-.856 1.344-.517.354-1.154.529-1.915.529h-15.073c-.76 0-1.412-.176-1.955-.529-.544-.354-.815-.801-.815-1.346l-1.385-37.231c0-.761.272-1.331.815-1.711.706-.597 1.358-.896 1.956-.896h17.924c.598 0 1.25.298 1.956.896.543.38.813.896.813 1.548l-1.465 37.396z"})}))}WarningIcon.displayName="WarningIcon";try{WarningIcon.displayName="WarningIcon",WarningIcon.__docgenInfo={description:"",displayName:"WarningIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/WarningIcon.tsx#WarningIcon"]={docgenInfo:WarningIcon.__docgenInfo,name:"WarningIcon",path:"packages/design-system/src/components/Icons/WarningIcon.tsx#WarningIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/analytics/useAnalyticsContent.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{o:function(){return useAnalyticsContent}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_getAnalyticsContentFromRefs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts");function useAnalyticsContent(_ref){var componentName=_ref.componentName,onMount=_ref.onMount,onUnmount=_ref.onUnmount,refs=[(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)()];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var content=(0,_getAnalyticsContentFromRefs__WEBPACK_IMPORTED_MODULE_1__.Z)(refs,componentName);return onMount(content),function(){onUnmount&&onUnmount(content)}}),[]),refs}},"./packages/design-system/src/components/utilities/useAutoFocus.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");__webpack_exports__.Z=function useAutofocus(autoFocus){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _ref$current,_ref$current2;autoFocus&&null!==(_ref$current=ref.current)&&void 0!==_ref$current&&_ref$current.focus&&(null===(_ref$current2=ref.current)||void 0===_ref$current2||_ref$current2.focus())}),[ref,autoFocus]),ref}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":function(module,__unused_webpack_exports,__webpack_require__){var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);