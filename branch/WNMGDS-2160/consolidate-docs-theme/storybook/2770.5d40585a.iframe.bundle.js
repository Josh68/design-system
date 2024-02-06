"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[2770],{"./packages/design-system/src/components/Dialog/Dialog.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{V:function(){return Dialog}});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),CloseIconThin=__webpack_require__("./packages/design-system/src/components/Icons/CloseIconThin.tsx"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","id"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var CloseButton=function CloseButton(_ref){var className=_ref.className,idProp=_ref.id,buttonAttributes=_objectWithoutProperties(_ref,_excluded),id=(0,useId.Z)("close-button--",idProp);return(0,jsx_runtime.tZ)("button",_objectSpread(_objectSpread({type:"button"},buttonAttributes),{},{className:classnames_default()("ds-c-close-button",className),id:id,children:(0,jsx_runtime.tZ)(CloseIconThin.g,{ariaHidden:!1,id:"".concat(id,"__icon")})}))};CloseButton.displayName="CloseButton";var CloseButton_CloseButton=CloseButton;try{CloseButton.displayName="CloseButton",CloseButton.__docgenInfo={description:"",displayName:"CloseButton",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}},"aria-label":{defaultValue:null,description:"An aria-label is required since the button content is only an X",name:"aria-label",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Additional classes to be added to the button element.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the dialog element",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/CloseButton/CloseButton.tsx#CloseButton"]={docgenInfo:CloseButton.__docgenInfo,name:"CloseButton",path:"packages/design-system/src/components/CloseButton/CloseButton.tsx#CloseButton"})}catch(__react_docgen_typescript_loader_error){}var NativeDialog=__webpack_require__("./packages/design-system/src/components/NativeDialog/NativeDialog.tsx"),events=__webpack_require__("./packages/design-system/src/components/analytics/events.ts"),useAnalyticsContent=__webpack_require__("./packages/design-system/src/components/analytics/useAnalyticsContent.ts"),config=__webpack_require__("./packages/design-system/src/components/config.ts");function useDialogAnalytics_typeof(obj){return useDialogAnalytics_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},useDialogAnalytics_typeof(obj)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function useDialogAnalytics_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function useDialogAnalytics_defineProperty(obj,key,value){return(key=function useDialogAnalytics_toPropertyKey(arg){var key=function useDialogAnalytics_toPrimitive(input,hint){if("object"!==useDialogAnalytics_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==useDialogAnalytics_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===useDialogAnalytics_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Dialog_useDialogAnalytics=function useDialogAnalytics(_ref){var analytics=_ref.analytics,analyticsLabelOverride=_ref.analyticsLabelOverride,_ref$onAnalyticsEvent=_ref.onAnalyticsEvent,onAnalyticsEvent=void 0===_ref$onAnalyticsEvent?(0,config.vc)().defaultAnalyticsFunction:_ref$onAnalyticsEvent;function sendDialogEvent(content,eventAttributes){if(!0===analytics||(0,config.vc)().dialogSendsAnalytics&&!1!==analytics){var eventHeadingText=null!=analyticsLabelOverride?analyticsLabelOverride:content;eventHeadingText?onAnalyticsEvent(function useDialogAnalytics_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?useDialogAnalytics_ownKeys(Object(source),!0).forEach((function(key){useDialogAnalytics_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):useDialogAnalytics_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}({event_type:events.tw.UI_INTERACTION,event_category:events.Jk.UI_COMPONENTS,event_label:eventHeadingText,event_extension:events.RW,heading:eventHeadingText},eventAttributes)):console.error("No content found for Dialog analytics event")}}return _slicedToArray((0,useAnalyticsContent.o)({onMount:function onMount(content){sendDialogEvent(content,{event_name:"modal_impression",event_action:"modal impression"})},onUnmount:function onUnmount(content){sendDialogEvent(content,{event_name:"modal_closed",event_action:"closed modal"})}}),1)[0]},i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts");function useBodyScrollPrevention_slicedToArray(arr,i){return function useBodyScrollPrevention_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function useBodyScrollPrevention_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function useBodyScrollPrevention_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return useBodyScrollPrevention_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return useBodyScrollPrevention_arrayLikeToArray(o,minLen)}(arr,i)||function useBodyScrollPrevention_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function useBodyScrollPrevention_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var OPEN=function OPEN(_state){var _window$scrollY,y=null!==(_window$scrollY=window.scrollY)&&void 0!==_window$scrollY?_window$scrollY:0;return document.body.classList.add("ds--dialog-open"),document.body.style.setProperty("--body_top--dialog-open","-".concat(y,"px")),document.documentElement.style.setProperty("scroll-behavior","auto"),{name:"open",bodyScrollY:y}},CLOSE=function CLOSE(state){return document.body.classList.remove("ds--dialog-open"),document.body.style.removeProperty("--body_top--dialog-open"),window.scrollTo({top:state.bodyScrollY,behavior:"auto"}),document.documentElement.style.removeProperty("scroll-behavior"),{name:"closed"}},reducer=function reducer(state,transition){return"open"===state.name&&transition===CLOSE||"closed"===state.name&&transition===OPEN?transition(state):state};function Dialog_typeof(obj){return Dialog_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Dialog_typeof(obj)}var Dialog_excluded=["actions","actionsClassName","alert","analytics","analyticsLabelOverride","analyticsEventTypeOverride","onAnalyticsEvent","ariaCloseLabel","children","className","headerClassName","heading","id","onEnter","onExit","size"];function Dialog_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Dialog_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Dialog_ownKeys(Object(source),!0).forEach((function(key){Dialog_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Dialog_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Dialog_defineProperty(obj,key,value){return(key=function Dialog_toPropertyKey(arg){var key=function Dialog_toPrimitive(input,hint){if("object"!==Dialog_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Dialog_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Dialog_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Dialog_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Dialog_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Dialog=function Dialog(props){var _modalProps$isOpen,actions=props.actions,actionsClassName=props.actionsClassName,ariaCloseLabel=(props.alert,props.analytics,props.analyticsLabelOverride,props.analyticsEventTypeOverride,props.onAnalyticsEvent,props.ariaCloseLabel),children=props.children,className=props.className,headerClassName=props.headerClassName,heading=props.heading,id=props.id,onEnter=props.onEnter,onExit=props.onExit,size=props.size,modalProps=Dialog_objectWithoutProperties(props,Dialog_excluded),rootId=(0,useId.Z)("dialog--",id),headingRef=Dialog_useDialogAnalytics(props),headingId="".concat(rootId,"__heading"),dialogClassNames=classnames_default()("ds-c-dialog",className,size&&"ds-c-dialog--".concat(size)),headerClassNames=classnames_default()("ds-c-dialog__header",headerClassName),actionsClassNames=classnames_default()("ds-c-dialog__actions",actionsClassName),containerRef=(0,compat_module.useRef)();return(0,compat_module.useEffect)((function(){onEnter&&onEnter()}),[]),(0,compat_module.useEffect)((function(){var _containerRef$current;null===(_containerRef$current=containerRef.current)||void 0===_containerRef$current||_containerRef$current.focus()}),[containerRef]),function useBodyScrollPrevention(isOpen){var _useReducer2=useBodyScrollPrevention_slicedToArray((0,compat_module.useReducer)(reducer,{name:"closed"}),2),dispatch=(_useReducer2[0],_useReducer2[1]);(0,compat_module.useLayoutEffect)((function(){dispatch(isOpen?OPEN:CLOSE)}),[isOpen])}(null===(_modalProps$isOpen=modalProps.isOpen)||void 0===_modalProps$isOpen||_modalProps$isOpen),(0,jsx_runtime.tZ)(NativeDialog.Z,Dialog_objectSpread(Dialog_objectSpread({className:dialogClassNames,showModal:!0,exit:onExit},modalProps),{},{id:rootId,boundingBoxRef:containerRef,children:(0,jsx_runtime.BX)("div",{className:"ds-c-dialog__window",role:"document",ref:containerRef,tabIndex:-1,"aria-labelledby":headingId,children:[(0,jsx_runtime.BX)("header",{className:headerClassNames,children:[heading&&(0,jsx_runtime.tZ)("h1",{className:"ds-c-dialog__heading",id:headingId,ref:headingRef,children:heading}),(0,jsx_runtime.tZ)(CloseButton_CloseButton,{"aria-label":null!=ariaCloseLabel?ariaCloseLabel:(0,i18n.t)("dialog.ariaCloseLabel"),className:"ds-c-dialog__close",id:"".concat(rootId,"__close"),onClick:onExit})]}),(0,jsx_runtime.BX)("main",{role:"main",className:"ds-c-dialog__body",children:[(0,jsx_runtime.tZ)("div",{id:"dialog-content",children:children}),actions&&(0,jsx_runtime.tZ)("div",{className:actionsClassNames,children:actions})]})]})}))};Dialog.displayName="Dialog";try{Dialog.displayName="Dialog",Dialog.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/modal-dialog/).",displayName:"Dialog",props:{actions:{defaultValue:null,description:'Buttons or other HTML to be rendered in the "actions" bar\nat the bottom of the dialog.',name:"actions",required:!1,type:{name:"ReactNode"}},actionsClassName:{defaultValue:null,description:"Additional classes to be added to the actions container.",name:"actionsClassName",required:!1,type:{name:"string"}},alert:{defaultValue:null,description:"If `true`, the modal will receive a role of `alertdialog`, instead of its\ndefault `dialog`. The `alertdialog` role should only be used when an\nalert, error, or warning occurs.",name:"alert",required:!1,type:{name:"boolean"}},ariaCloseLabel:{defaultValue:null,description:"Aria label for the close button",name:"ariaCloseLabel",required:!1,type:{name:"string"}},backdropClickExits:{defaultValue:null,description:"Pass `true` to have the dialog close when its backdrop pseudo-element is clicked",name:"backdropClickExits",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classes to be added to the root dialog element.",name:"className",required:!1,type:{name:"string"}},headerClassName:{defaultValue:null,description:"Additional classes to be added to the header, which wraps the heading and\nclose button.",name:"headerClassName",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"The Dialog's heading, to be rendered in the header alongside the close button.",name:"heading",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"A custom `id` attribute for the dialog element",name:"id",required:!1,type:{name:"string"}},isOpen:{defaultValue:null,description:"Controls whether the dialog is in an open state",name:"isOpen",required:!1,type:{name:"boolean"}},onEnter:{defaultValue:null,description:"This function is called after the modal opens",name:"onEnter",required:!1,type:{name:"() => void"}},onExit:{defaultValue:null,description:"Called when the user triggers an exit event, like by clicking the close\nbutton or pressing the ESC key. The parent of this component is\nresponsible for showing or not showing the dialog, so you need to use this\ncallback to make that happen. The dialog does not hide or remove itself.",name:"onExit",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}},size:{defaultValue:null,description:"The Dialog's size parameter.",name:"size",required:!1,type:{name:"enum",value:[{value:'"narrow"'},{value:'"wide"'},{value:'"full"'}]}},analytics:{defaultValue:null,description:"Analytics events tracking is enabled by default. Set this value to `false` to\ndisable tracking for this component instance.",name:"analytics",required:!1,type:{name:"boolean"}},analyticsLabelOverride:{defaultValue:null,description:"An override for the dynamic content sent to analytics services. By default this\ncontent comes from the heading.\n\nIn cases where this component’s heading may contain **sensitive information**,\nuse this prop to override what is sent to analytics.",name:"analyticsLabelOverride",required:!1,type:{name:"string"}},analyticsEventTypeOverride:{defaultValue:null,description:"If you need the `event_type` to be overridden for your use case, you can provide\nan alternate string here. Suggested values can be found in the EventType enum.",name:"analyticsEventTypeOverride",required:!1,type:{name:"string"}},onAnalyticsEvent:{defaultValue:null,description:"Optional callback that will intercept analytics events for this component.\nIf none is specified, the design system will use the default analytics\nfunction, which can be overwritten globally with the `defaultAnalyticsFunction`\nconfig property.",name:"onAnalyticsEvent",required:!1,type:{name:"(event: AnalyticsEvent) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Dialog/Dialog.tsx#Dialog"]={docgenInfo:Dialog.__docgenInfo,name:"Dialog",path:"packages/design-system/src/components/Dialog/Dialog.tsx#Dialog"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/CloseIconThin.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{g:function(){return CloseIconThin}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultProps={className:"",viewBox:"-2 -2 18 18"};function CloseIconThin(props){var iconCssClasses="ds-c-icon--close ds-c-icon--close-thin ".concat(props.className||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,_objectSpread(_objectSpread(_objectSpread({title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("icons.close")},defaultProps),props),{},{className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",d:"M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0"})}))}CloseIconThin.displayName="CloseIconThin";try{CloseIconThin.displayName="CloseIconThin",CloseIconThin.__docgenInfo={description:"",displayName:"CloseIconThin",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/CloseIconThin.tsx#CloseIconThin"]={docgenInfo:CloseIconThin.__docgenInfo,name:"CloseIconThin",path:"packages/design-system/src/components/Icons/CloseIconThin.tsx#CloseIconThin"})}catch(__react_docgen_typescript_loader_error){}}}]);