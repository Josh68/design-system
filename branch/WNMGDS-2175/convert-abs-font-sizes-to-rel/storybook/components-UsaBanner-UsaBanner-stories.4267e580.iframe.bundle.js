"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[9952],{"./packages/design-system/src/components/UsaBanner/UsaBanner.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{EnglishBanner:function(){return EnglishBanner},SpanishBanner:function(){return SpanishBanner},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return UsaBanner_stories}});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),uniqueId=__webpack_require__("./node_modules/lodash/uniqueId.js"),uniqueId_default=__webpack_require__.n(uniqueId),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),UsaFlagIcon=__webpack_require__("./packages/design-system/src/components/Icons/UsaFlagIcon.tsx"),ArrowIcon=__webpack_require__("./packages/design-system/src/components/Icons/ArrowIcon.tsx"),CloseIconThin=__webpack_require__("./packages/design-system/src/components/Icons/CloseIconThin.tsx"),BuildingCircleIcon=__webpack_require__("./packages/design-system/src/components/Icons/BuildingCircleIcon.tsx"),LockCircleIcon=__webpack_require__("./packages/design-system/src/components/Icons/LockCircleIcon.tsx"),LockIcon=__webpack_require__("./packages/design-system/src/components/Icons/LockIcon.tsx"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var UsaBanner=function UsaBanner(props){var _useState2=_slicedToArray((0,compat_module.useState)(!1),2),isBannerOpen=_useState2[0],setBannerOpen=_useState2[1],_useState4=_slicedToArray((0,compat_module.useState)(!1),2),shouldRenderMobileView=_useState4[0],setShouldRenderMobileView=_useState4[1],classes=classnames_default()("ds-c-usa-banner",props.className),id=props.id||uniqueId_default()("gov-banner_");(0,compat_module.useEffect)((function(){var media,onMediaChange=function onMediaChange(evt){setShouldRenderMobileView(evt.matches)};return window&&((media=window.matchMedia("(max-width: 543px)")).addEventListener("change",onMediaChange),setShouldRenderMobileView(media.matches)),function(){window&&media.removeEventListener("change",onMediaChange)}}),[]);var toggleBanner=function toggleBanner(){setBannerOpen(!isBannerOpen)},flagIcon=(0,jsx_runtime.tZ)(UsaFlagIcon.h,{className:"ds-c-usa-banner__header-flag",title:(0,i18n.t)("usaBanner.flagIconTitle"),ariaHidden:!1});return(0,jsx_runtime.BX)("section",{className:classes,"aria-label":(0,i18n.t)("usaBanner.bannerLabel"),children:[(0,jsx_runtime.tZ)("header",{className:classnames_default()("ds-c-usa-banner__header",{"ds-c-usa-banner__header--expanded":isBannerOpen,"ds-c-usa-banner__header--mobile":shouldRenderMobileView}),children:shouldRenderMobileView?function renderMobileHeaderContent(){return(0,jsx_runtime.BX)("button",{onClick:toggleBanner,type:"button",className:"ds-c-usa-banner__button","aria-expanded":isBannerOpen,"aria-controls":id,children:[flagIcon,(0,jsx_runtime.BX)("span",{className:"ds-c-usa-banner__header-text",children:[(0,jsx_runtime.tZ)("span",{children:(0,i18n.t)("usaBanner.bannerText")}),!isBannerOpen&&(0,jsx_runtime.BX)("span",{className:"ds-c-usa-banner__cta-wrapper",children:[(0,jsx_runtime.tZ)("span",{className:"ds-c-usa-banner__button-text",children:(0,i18n.t)("usaBanner.bannerActionText")}),(0,jsx_runtime.tZ)(ArrowIcon.e,{direction:"down",className:"ds-c-usa-banner__action-icon"})]})]}),isBannerOpen&&(0,jsx_runtime.tZ)("span",{className:"ds-c-usa-banner__collapse-banner-container",children:(0,jsx_runtime.tZ)(CloseIconThin.g,{})})]})}():function renderHeaderContent(){return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[flagIcon,(0,jsx_runtime.BX)("p",{className:"ds-c-usa-banner__header-text",children:[(0,jsx_runtime.tZ)("span",{children:(0,i18n.t)("usaBanner.bannerText")}),(0,jsx_runtime.BX)("button",{onClick:toggleBanner,className:"ds-c-usa-banner__button ds-c-usa-banner__button-text","aria-expanded":isBannerOpen,"aria-controls":id,children:[(0,i18n.t)("usaBanner.bannerActionText"),(0,jsx_runtime.tZ)(ArrowIcon.e,{direction:isBannerOpen?"up":"down",className:"ds-c-usa-banner__action-icon ds-u-margin-left--1"})]})]})]})}()}),(0,jsx_runtime.tZ)("div",{className:"ds-c-usa-banner__content",id:id,hidden:!isBannerOpen,children:(0,jsx_runtime.BX)("div",{className:"ds-c-usa-banner__guidance-container",children:[(0,jsx_runtime.BX)("div",{className:"ds-c-usa-banner__guidance",children:[(0,jsx_runtime.tZ)(BuildingCircleIcon._,{className:"ds-c-usa-banner__icon ds-c-icon-color--primary"}),(0,jsx_runtime.BX)("p",{className:"ds-c-usa-banner__media-body",children:[(0,jsx_runtime.tZ)("strong",{children:(0,i18n.t)("usaBanner.domainHeaderText")}),(0,jsx_runtime.tZ)("br",{}),(0,i18n.t)("usaBanner.domainAText"),(0,jsx_runtime.BX)("strong",{children:[" ",(0,i18n.t)("usaBanner.govText")," "]}),(0,i18n.t)("usaBanner.domainText")]})]}),(0,jsx_runtime.BX)("div",{className:"ds-c-usa-banner__guidance",children:[(0,jsx_runtime.tZ)(LockCircleIcon.I,{className:"ds-c-usa-banner__icon"}),(0,jsx_runtime.BX)("p",{className:"ds-c-usa-banner__media-body",children:[(0,jsx_runtime.tZ)("strong",{children:(0,i18n.t)("usaBanner.httpsHeaderText")}),(0,jsx_runtime.tZ)("br",{}),(0,i18n.t)("usaBanner.httpsAText"),(0,jsx_runtime.BX)("strong",{children:[" ",(0,i18n.t)("usaBanner.httpsLockText")," "]})," ",(0,jsx_runtime.tZ)(LockIcon.m,{className:"ds-c-usa-banner__lock-image"})," ",(0,i18n.t)("usaBanner.httpsOrText"),(0,jsx_runtime.BX)("strong",{children:[" ",(0,i18n.t)("usaBanner.httpsText")," "]}),(0,i18n.t)("usaBanner.httpsDetailText")]})]})]})})]})};UsaBanner.displayName="UsaBanner";var _EnglishBanner$parame,_EnglishBanner$parame2,_EnglishBanner$parame3,_SpanishBanner$parame,_SpanishBanner$parame2,_SpanishBanner$parame3,UsaBanner_UsaBanner=UsaBanner;try{UsaBanner.displayName="UsaBanner",UsaBanner.__docgenInfo={description:"",displayName:"UsaBanner",props:{className:{defaultValue:null,description:"Additional classes to be added to the root `section` element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A unique ID to be applied to the banner content. A unique ID will be generated if one isn't provided.",name:"id",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/UsaBanner/UsaBanner.tsx#UsaBanner"]={docgenInfo:UsaBanner.__docgenInfo,name:"UsaBanner",path:"packages/design-system/src/components/UsaBanner/UsaBanner.tsx#UsaBanner"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var UsaBanner_stories={title:"Components/USA Banner",component:UsaBanner_UsaBanner},Template=function Template(args){return(0,jsx_runtime.tZ)(UsaBanner_UsaBanner,_objectSpread({},args))};Template.displayName="Template";var EnglishBanner=Template.bind({}),SpanishBanner=Template.bind({});SpanishBanner.decorators=[function(Story){return(0,i18n.m0)("es"),(0,jsx_runtime.tZ)(Story,{})}],EnglishBanner.parameters=_objectSpread(_objectSpread({},EnglishBanner.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_EnglishBanner$parame=EnglishBanner.parameters)||void 0===_EnglishBanner$parame?void 0:_EnglishBanner$parame.docs),{},{source:_objectSpread({originalSource:"args => <UsaBanner {...args} />"},null===(_EnglishBanner$parame2=EnglishBanner.parameters)||void 0===_EnglishBanner$parame2||null===(_EnglishBanner$parame3=_EnglishBanner$parame2.docs)||void 0===_EnglishBanner$parame3?void 0:_EnglishBanner$parame3.source)})}),SpanishBanner.parameters=_objectSpread(_objectSpread({},SpanishBanner.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SpanishBanner$parame=SpanishBanner.parameters)||void 0===_SpanishBanner$parame?void 0:_SpanishBanner$parame.docs),{},{source:_objectSpread({originalSource:"args => <UsaBanner {...args} />"},null===(_SpanishBanner$parame2=SpanishBanner.parameters)||void 0===_SpanishBanner$parame2||null===(_SpanishBanner$parame3=_SpanishBanner$parame2.docs)||void 0===_SpanishBanner$parame3?void 0:_SpanishBanner$parame3.source)})});var __namedExportsOrder=["EnglishBanner","SpanishBanner"]}}]);