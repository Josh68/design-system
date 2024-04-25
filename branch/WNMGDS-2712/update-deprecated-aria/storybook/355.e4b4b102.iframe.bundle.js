/*! For license information please see 355.e4b4b102.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[355],{"./packages/design-system/dist/react-components/esm/Button/Button.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/mergeRefs.js"),config=__webpack_require__("./packages/design-system/dist/react-components/esm/config.js"),getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/getAnalyticsContentFromRefs.js"),events=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/events.js"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Button=props=>{const{analytics,analyticsLabelOverride,analyticsEventTypeOverride,analyticsParentHeading,analyticsParentType,onAnalyticsEvent,children,className,inputRef,isAlternate,onClick,onDark,size,variation,...otherProps}=props,{contentRef,sendButtonEvent}=function useButtonAnalytics(_ref){let{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,href,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,type,variation}=_ref;const contentRef=(0,compat_module.useRef)();return{contentRef,sendButtonEvent:function sendButtonEvent(){if(!0!==analytics&&(!(0,config.vc)().buttonSendsAnalytics||!1===analytics))return;const buttonText=analyticsLabelOverride??(0,getAnalyticsContentFromRefs.L)([contentRef]),buttonStyle=variation??"default",buttonType=type??"button",buttonParentHeading=analyticsParentHeading??" ",buttonParentType=analyticsParentType??" ";return onAnalyticsEvent({event_name:"button_engagement",event_type:events.tw.UI_INTERACTION,event_category:events.Jk.UI_INTERACTION,event_action:`engaged ${buttonStyle} button`,event_label:href?`${buttonText}: ${href}`:buttonText,event_extension:events.RW,text:buttonText,button_style:buttonStyle,button_type:href?"link":buttonType,parent_component_heading:buttonParentHeading,parent_component_type:buttonParentType,...href?{link_url:href}:{}})}}}(props),ComponentType=props.href?"a":"button",colorSchemeClass=isAlternate&&"ds-c-button--alternate",modeClass=onDark&&"ds-c-button--on-dark",sizeClass=size&&`ds-c-button--${size}`,variationClass=variation&&`ds-c-button--${variation}`,attrs={...otherProps,className:classnames_default()("ds-c-button",colorSchemeClass,modeClass,sizeClass,variationClass,className)};function handleClick(e){props.disabled||(sendButtonEvent(),onClick&&onClick(e))}return"button"!==ComponentType&&(delete attrs.disabled,delete attrs.type,props.disabled&&(attrs.role="link",attrs["aria-disabled"]=!0,delete attrs.href)),(0,jsx_runtime.tZ)(ComponentType,{ref:(0,mergeRefs.Z)([inputRef,contentRef]),onClick:handleClick,onKeyPress:"a"===ComponentType?function handleKeyPress(e){" "===e.key&&handleClick(e)}:void 0,...attrs,children})};Button.defaultProps={isAlternate:!1,onDark:!1,type:"button"};const Button_Button=Button},"./packages/design-system/dist/react-components/esm/Icons/CloseIconThin.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>CloseIconThin});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/dist/react-components/esm/Icons/SvgIcon.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"-2 -2 18 18"};function CloseIconThin(props){const iconCssClasses=`ds-c-icon--close ds-c-icon--close-thin ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.close"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",d:"M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0"})})}},"./packages/design-system/dist/react-components/esm/Icons/SvgIcon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/useId.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const SvgIcon=_ref=>{let{ariaHidden,className,children,description,id,inversed,title,viewBox,...otherProps}=_ref;const svgClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("icon--",id),titleId=`${rootId}__title`,descriptionId=`${rootId}__desc`,ariaLabelledBy=description?`${titleId} ${descriptionId}`:titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("svg",{"aria-hidden":ariaHidden,className:svgClasses,id:id??isSrVisible?rootId:void 0,viewBox,xmlns:"http://www.w3.org/2000/svg",...screenReaderProps,...otherProps,children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("desc",{id:descriptionId,children:description}),children]})};SvgIcon.defaultProps={ariaHidden:!0,inversed:!1}},"./packages/design-system/dist/react-components/esm/NativeDialog/NativeDialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>NativeDialog_NativeDialog});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function shimDialogElement(element){if(!element.showModal){if("dialog"!==element.localName)throw new Error("Failed to polyfill dialog: The element is not a dialog.");!function addDialogProperties(dialog){function handleKey(event){27===event.keyCode&&(event.preventDefault(),event.stopPropagation(),dialog.close())}function setOpen(open){open?(dialog.hasAttribute("open")||dialog.setAttribute("open",""),document.addEventListener("keydown",handleKey)):(dialog.removeAttribute("open"),document.removeEventListener("keydown",handleKey))}dialog.show=()=>setOpen(!0),dialog.showModal=()=>setOpen(!0),dialog.close=()=>{setOpen(!1);const cancelEvent=new CustomEvent("close",{bubbles:!1,cancelable:!0});dialog.dispatchEvent(cancelEvent)},dialog.hasAttribute("role")||dialog.setAttribute("role","dialog"),"returnValue"in dialog||(dialog.returnValue=""),Object.defineProperty(dialog,"open",{set:setOpen,get:dialog.hasAttribute.bind(dialog,"open")})}(element)}}var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const NativeDialog_NativeDialog=_ref=>{let{children,exit,isOpen,showModal,backdropClickExits,boundingBoxRef,...dialogProps}=_ref;const dialogRef=(0,compat_module.useRef)(null);return void 0===isOpen&&(isOpen=!0),(0,compat_module.useLayoutEffect)((()=>{shimDialogElement(dialogRef.current)})),(0,compat_module.useEffect)((()=>{const dialogNode=dialogRef.current;let closingBecauseOfProp=!1;isOpen?dialogNode.open||(showModal?dialogNode.showModal():dialogNode.show()):dialogNode.open&&(dialogNode.close(),closingBecauseOfProp=!0);const handleClose=event=>{event.preventDefault(),closingBecauseOfProp||exit(event)};return dialogNode.addEventListener("close",handleClose),()=>{dialogNode.removeEventListener("close",handleClose)}}),[isOpen,showModal,exit]),(0,compat_module.useEffect)((()=>{if(!backdropClickExits)return;const dialogNode=dialogRef.current,handleClick=event=>{const rect=(boundingBoxRef?.current??dialogRef.current).getBoundingClientRect();rect.top<=event.clientY&&event.clientY<=rect.top+rect.height&&rect.left<=event.clientX&&event.clientX<=rect.left+rect.width||exit()};return dialogNode.addEventListener("click",handleClick),()=>{dialogNode.removeEventListener("click",handleClick)}}),[exit,backdropClickExits]),(0,jsx_runtime.tZ)("dialog",{ref:dialogRef,...dialogProps,children})}},"./packages/design-system/dist/react-components/esm/analytics/events.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Jk:()=>EventCategory,RW:()=>eventExtensionText,cD:()=>sendLinkEvent,tw:()=>EventType});let EventCategory=function(EventCategory){return EventCategory.UI_COMPONENTS="ui components",EventCategory.UI_INTERACTION="ui interaction",EventCategory}({}),EventType=function(EventType){return EventType.CONVERSION="conversion",EventType.UI_INTERACTION="ui interaction",EventType}({});const eventExtensionText="Design system integration",MAX_STRING_LENGTH=100;const MAX_RETRIES=3,TIMEOUT=300;function sendAnalytics(eventType,event){let retry=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const utag=window.utag;if(utag&&utag[eventType]){!function clipStrings(event){for(const key in event){const value=event[key];"string"==typeof value&&(event[key]=value.substring(0,MAX_STRING_LENGTH))}return event}(event);try{utag[eventType](event)}catch(error){console.warn("Error sending analytics event: ",error)}}else++retry<=MAX_RETRIES&&setTimeout((()=>sendAnalytics(eventType,event,retry)),retry*TIMEOUT)}function sendLinkEvent(event){return sendAnalytics("link",event)}},"./packages/design-system/dist/react-components/esm/analytics/getAnalyticsContentFromRefs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getAnalyticsContentFromRefs(refs){return refs.map((ref=>ref.current?.textContent)).find((textContent=>textContent))}__webpack_require__.d(__webpack_exports__,{L:()=>getAnalyticsContentFromRefs,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=getAnalyticsContentFromRefs},"./packages/design-system/dist/react-components/esm/analytics/useAnalyticsContent.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>useAnalyticsContent});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_getAnalyticsContentFromRefs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/getAnalyticsContentFromRefs.js");function useAnalyticsContent(_ref){let{onMount,onUnmount}=_ref;const refs=[(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)()];return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const content=(0,_getAnalyticsContentFromRefs__WEBPACK_IMPORTED_MODULE_1__.Z)(refs);return onMount(content),()=>{onUnmount&&onUnmount(content)}}),[]),refs}},"./packages/design-system/dist/react-components/esm/config.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{vc:()=>config});var _analytics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/events.js");const DEFAULTS=Object.freeze({errorPlacementDefault:"top",defaultAnalyticsFunction:_analytics__WEBPACK_IMPORTED_MODULE_0__.cD,alertSendsAnalytics:!1,buttonSendsAnalytics:!1,dialogSendsAnalytics:!1,helpDrawerSendsAnalytics:!1,headerSendsAnalytics:!1}),HEALTHCARE_DEFAULTS={...DEFAULTS,errorPlacementDefault:"bottom",headerSendsAnalytics:!0},_config={...DEFAULTS};function config(incomingConfig){return Object.assign(_config,incomingConfig),_config}config.DEFAULTS=DEFAULTS,config.HEALTHCARE_DEFAULTS=HEALTHCARE_DEFAULTS;config().defaultAnalyticsFunction},"./packages/design-system/dist/react-components/esm/utilities/mergeRefs.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function mergeRefs(refs){return value=>{refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>mergeRefs})},"./packages/design-system/dist/react-components/esm/utilities/useId.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(providedId??lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);