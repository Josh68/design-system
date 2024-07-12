"use strict";(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[9067],{"./packages/docs/content/layouts/Healthcare/one-col-page-layout.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{OneColumnPageLayout:()=>OneColumnPageLayout,__namedExportsOrder:()=>__namedExportsOrder,default:()=>one_col_page_layout_stories});__webpack_require__("./packages/ds-healthcare-gov/src/components/Accordion/AccordionItem.tsx");var Footer=__webpack_require__("./packages/ds-healthcare-gov/src/components/Footer/Footer.tsx"),Header=(__webpack_require__("./packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx"),__webpack_require__("./packages/ds-healthcare-gov/src/components/Header/Header.tsx")),compat_module=(__webpack_require__("./packages/ds-healthcare-gov/src/components/Header/defaultMenuLinks.ts"),__webpack_require__("./packages/ds-healthcare-gov/src/components/Logo/index.ts"),__webpack_require__("./node_modules/preact/compat/dist/compat.module.js")),Button=__webpack_require__("./packages/design-system/dist/react-components/esm/Button/Button.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useId=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/useId.js"),CloseIconThin=__webpack_require__("./packages/design-system/dist/react-components/esm/Icons/CloseIconThin.js"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const CloseButton_CloseButton=_ref=>{let{className,id:idProp,ariaHidden=!1,...buttonAttributes}=_ref;const id=(0,useId.Z)("close-button--",idProp);return(0,jsx_runtime.tZ)("button",{type:"button",...buttonAttributes,className:classnames_default()("ds-c-close-button",className),id,children:(0,jsx_runtime.tZ)(CloseIconThin.g,{ariaHidden,id:`${id}__icon`})})};var NativeDialog=__webpack_require__("./packages/design-system/dist/react-components/esm/NativeDialog/NativeDialog.js"),events=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/events.js"),config=__webpack_require__("./packages/design-system/dist/react-components/esm/config.js"),useNativeDialogAnalytics=__webpack_require__("./packages/design-system/dist/react-components/esm/NativeDialog/useNativeDialogAnalytics.js");const Dialog_useDialogAnalytics=function useDialogAnalytics(_ref){let{analytics,analyticsLabelOverride,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,isOpen}=_ref;function sendDialogEvent(content,eventAttributes){if(!0!==analytics&&(!(0,config.vc)().dialogSendsAnalytics||!1===analytics))return;const eventHeadingText=analyticsLabelOverride??content;eventHeadingText?onAnalyticsEvent({event_extension:events.RW,heading:eventHeadingText,...eventAttributes}):console.error("No content found for Dialog analytics event")}return(0,useNativeDialogAnalytics.m)({isOpen,onOpen:content=>{sendDialogEvent(content,{event_name:"modal_impression"})},onClose:content=>{sendDialogEvent(content,{event_name:"modal_closed"})}})};var i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");const CLASS_NAME="ds--dialog-open",PROPERTY_NAME="--body_top--dialog-open";function unfreezeScroll(){if(!document.body.classList.contains(CLASS_NAME))return;document.body.classList.remove(CLASS_NAME);const top=-parseInt(document.body.style.getPropertyValue(PROPERTY_NAME));document.body.style.removeProperty(PROPERTY_NAME),isNaN(top)||window.scrollTo({top,behavior:"auto"}),document.documentElement.style.removeProperty("scroll-behavior")}function useBodyScrollPrevention(isOpen){(0,compat_module.useLayoutEffect)((()=>(isOpen?function freezeScroll(){if(document.body.classList.contains(CLASS_NAME))return;const y=window.scrollY??0;document.body.classList.add(CLASS_NAME),document.body.style.setProperty(PROPERTY_NAME,`-${y}px`),document.documentElement.style.setProperty("scroll-behavior","auto")}():unfreezeScroll(),()=>{unfreezeScroll()})),[isOpen])}const Dialog=props=>{const{actions,actionsClassName,alert,analytics,analyticsLabelOverride,onAnalyticsEvent,ariaCloseLabel,children,className,headerClassName,heading,id,onExit,size,...modalProps}=props,rootId=(0,useId.Z)("dialog--",id),headingRef=Dialog_useDialogAnalytics(props),headingId=`${rootId}__heading`,contentId=`${rootId}__content`,dialogClassNames=classnames_default()("ds-c-dialog",className,size&&`ds-c-dialog--${size}`),headerClassNames=classnames_default()("ds-c-dialog__header",headerClassName),actionsClassNames=classnames_default()("ds-c-dialog__actions",actionsClassName),containerRef=(0,compat_module.useRef)();return(0,compat_module.useEffect)((()=>{containerRef.current?.focus()}),[containerRef]),useBodyScrollPrevention(modalProps.isOpen??!0),(0,jsx_runtime.tZ)(NativeDialog.Z,{className:dialogClassNames,showModal:!0,exit:onExit,...modalProps,id:rootId,boundingBoxRef:containerRef,"aria-labelledby":headingId,children:(0,jsx_runtime.BX)("div",{className:"ds-c-dialog__window",ref:containerRef,children:[(0,jsx_runtime.BX)("div",{className:headerClassNames,children:[heading&&(0,jsx_runtime.tZ)("h2",{className:"ds-c-dialog__heading",id:headingId,ref:headingRef,children:heading}),(0,jsx_runtime.tZ)(CloseButton_CloseButton,{"aria-label":ariaCloseLabel??(0,i18n.t)("dialog.ariaCloseLabel"),ariaHidden:!0,className:"ds-c-dialog__close",id:`${rootId}__close`,onClick:onExit})]}),(0,jsx_runtime.BX)("div",{className:"ds-c-dialog__body",children:[(0,jsx_runtime.tZ)("div",{id:contentId,children}),actions&&(0,jsx_runtime.tZ)("div",{className:actionsClassNames,children:actions})]})]})})};var SvgIcon=__webpack_require__("./packages/design-system/dist/react-components/esm/Icons/SvgIcon.js");const defaultProps={className:"",viewBox:"0 0 512 512",ariaHidden:!1};function ExternalLinkIcon(props){const iconCssClasses=`ds-c-icon--external-link ${props.className||""}`;return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.externalLink"),...defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("path",{d:"M497.6,0,334.4.17A14.4,14.4,0,0,0,320,14.57V47.88a14.4,14.4,0,0,0,14.69,14.4l73.63-2.72,2.06,2.06L131.52,340.49a12,12,0,0,0,0,17l23,23a12,12,0,0,0,17,0L450.38,101.62l2.06,2.06-2.72,73.63A14.4,14.4,0,0,0,464.12,192h33.31a14.4,14.4,0,0,0,14.4-14.4L512,14.4A14.4,14.4,0,0,0,497.6,0ZM432,288H416a16,16,0,0,0-16,16V458a6,6,0,0,1-6,6H54a6,6,0,0,1-6-6V118a6,6,0,0,1,6-6H208a16,16,0,0,0,16-16V80a16,16,0,0,0-16-16H48A48,48,0,0,0,0,112V464a48,48,0,0,0,48,48H400a48,48,0,0,0,48-48V304A16,16,0,0,0,432,288Z"})})}var getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/getAnalyticsContentFromRefs.js");const ThirdPartyExternalLink_useThirdPartyExternalLinkAnalytics=function useThirdPartyExternalLinkAnalytics(_ref){let{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,href}=_ref;const contentRef=(0,compat_module.useRef)();return{contentRef,buttonAnalyticsHandler:function buttonAnalyticsHandler(){if(!0!==analytics&&(!(0,config.vc)().thirdPartyExternalLinkSendsAnalytics||!1===analytics))return;const linkContent=analyticsLabelOverride??(0,getAnalyticsContentFromRefs.L)([contentRef]);if(!linkContent)return void console.error("No content found for Dialog analytics event");const linkParentHeading=analyticsParentHeading??" ",linkParentType=analyticsParentType??" ";onAnalyticsEvent({event_name:"external_link_click",event_extension:events.RW,text:linkContent,link_type:"link_external",link_url:href,parent_component_heading:linkParentHeading,parent_component_type:linkParentType})}}},ThirdPartyExternalLink_ThirdPartyExternalLink=props=>{const{contentRef,buttonAnalyticsHandler}=ThirdPartyExternalLink_useThirdPartyExternalLinkAnalytics(props),{href,children,className,learnMoreUrl,origin}=props,[showDialog,setShowDialog]=(0,compat_module.useState)(!1);function close(){setShowDialog(!1)}return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.BX)("a",{className:classnames_default()("ds-c-external-link",className),onClick:function open(event){event.preventDefault(),setShowDialog(!0)},href,ref:contentRef,children:[children,(0,jsx_runtime.tZ)(ExternalLinkIcon,{className:"ds-c-external-link__icon"})]}),(0,jsx_runtime.BX)(Dialog,{onExit:close,heading:(0,i18n.t)("thirdPartyExternalLink.dialogHeading",{origin}),actions:[(0,jsx_runtime.tZ)(Button.z,{variation:"solid",href,analytics:!0,onAnalyticsEvent:buttonAnalyticsHandler,children:(0,i18n.t)("thirdPartyExternalLink.confirmationButtonText")},"external-link__confirm"),(0,jsx_runtime.tZ)(Button.z,{variation:"ghost",onClick:close,children:(0,i18n.t)("thirdPartyExternalLink.cancelButtonText")},"external-link__cancel")],isOpen:showDialog,children:[(0,jsx_runtime.tZ)("p",{children:(0,i18n.t)("thirdPartyExternalLink.dialogBody")}),(0,jsx_runtime.BX)("p",{children:[(0,jsx_runtime.tZ)("a",{href:learnMoreUrl,children:(0,i18n.t)("thirdPartyExternalLink.learnMoreText")}),"."]})]})]})};ThirdPartyExternalLink_ThirdPartyExternalLink.defaultProps={};const esm_ThirdPartyExternalLink_ThirdPartyExternalLink=ThirdPartyExternalLink_ThirdPartyExternalLink;esm_ThirdPartyExternalLink_ThirdPartyExternalLink.defaultProps={...esm_ThirdPartyExternalLink_ThirdPartyExternalLink.defaultProps,learnMoreUrl:"https://www.healthcare.gov/links-to-other-sites/"};__webpack_require__("./packages/ds-healthcare-gov/src/components/config.ts");const one_col_page_layout_stories={title:"Patterns/One column page layout",parameters:{layout:"fullscreen",theme:"healthcare"}},OneColumnPageLayout=()=>(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)(Header.h4,{}),(0,jsx_runtime.BX)("main",{className:"ds-base ds-l-container example-grid",children:[(0,jsx_runtime.tZ)("div",{className:"ds-l-row",children:(0,jsx_runtime.BX)("div",{className:"ds-l-col--12",children:[(0,jsx_runtime.tZ)("b",{children:"Page header"}),(0,jsx_runtime.tZ)("br",{}),"12 columns ",(0,jsx_runtime.tZ)("br",{})," ",(0,jsx_runtime.tZ)("code",{children:"ds-l-col--12"})]})}),(0,jsx_runtime.tZ)("div",{className:"ds-l-row",children:(0,jsx_runtime.BX)("div",{className:"ds-l-md-col--8 ds-l-sm-col--12",children:[(0,jsx_runtime.tZ)("b",{children:"Page content"}),(0,jsx_runtime.tZ)("br",{}),"8 columns ",(0,jsx_runtime.tZ)("br",{})," ",(0,jsx_runtime.tZ)("code",{children:"ds-l-md-col--8 ds-l-sm-col--12"})]})}),(0,jsx_runtime.tZ)("div",{className:"ds-l-row",children:(0,jsx_runtime.BX)("div",{className:"ds-l-col--12",children:[(0,jsx_runtime.tZ)("b",{children:"Page footer"}),(0,jsx_runtime.tZ)("br",{}),"12 columns ",(0,jsx_runtime.tZ)("br",{})," ",(0,jsx_runtime.tZ)("code",{children:"ds-l-col--12"})]})})]}),(0,jsx_runtime.tZ)(Footer.$,{})]});OneColumnPageLayout.parameters={...OneColumnPageLayout.parameters,docs:{...OneColumnPageLayout.parameters?.docs,source:{originalSource:'() => {\n  return <>\n      <Header />\n      <main className="ds-base ds-l-container example-grid">\n        <div className="ds-l-row">\n          <div className="ds-l-col--12">\n            <b>Page header</b>\n            <br></br>\n            12 columns <br></br> <code>ds-l-col--12</code>\n          </div>\n        </div>\n        <div className="ds-l-row">\n          <div className="ds-l-md-col--8 ds-l-sm-col--12">\n            <b>Page content</b>\n            <br></br>8 columns <br></br> <code>ds-l-md-col--8 ds-l-sm-col--12</code>\n          </div>\n        </div>\n        <div className="ds-l-row">\n          <div className="ds-l-col--12">\n            <b>Page footer</b>\n            <br></br>\n            12 columns <br></br> <code>ds-l-col--12</code>\n          </div>\n        </div>\n      </main>\n      <Footer />\n    </>;\n}',...OneColumnPageLayout.parameters?.docs?.source}}};const __namedExportsOrder=["OneColumnPageLayout"]},"./packages/design-system/dist/react-components/esm/NativeDialog/NativeDialog.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>NativeDialog_NativeDialog});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function shimDialogElement(element){if(!element.showModal){if("dialog"!==element.localName)throw new Error("Failed to polyfill dialog: The element is not a dialog.");!function addDialogProperties(dialog){function handleKey(event){27===event.keyCode&&(event.preventDefault(),event.stopPropagation(),dialog.close())}function setOpen(open){open?(dialog.hasAttribute("open")||dialog.setAttribute("open",""),document.addEventListener("keydown",handleKey)):(dialog.removeAttribute("open"),document.removeEventListener("keydown",handleKey))}dialog.show=()=>setOpen(!0),dialog.showModal=()=>setOpen(!0),dialog.close=()=>{setOpen(!1);const cancelEvent=new CustomEvent("close",{bubbles:!1,cancelable:!0});dialog.dispatchEvent(cancelEvent)},dialog.hasAttribute("role")||dialog.setAttribute("role","dialog"),"returnValue"in dialog||(dialog.returnValue=""),Object.defineProperty(dialog,"open",{set:setOpen,get:dialog.hasAttribute.bind(dialog,"open")})}(element)}}var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const NativeDialog_NativeDialog=_ref=>{let{children,exit,isOpen,showModal,backdropClickExits,boundingBoxRef,...dialogProps}=_ref;const dialogRef=(0,compat_module.useRef)(null);if(void 0===isOpen){const missingPropMessage="The 'isOpen' prop is now used to control the state of Dialogs and Drawers. Please do not conditionally render these components to control their state. All Dialogs and Drawers will become invisible without this prop in the next major release. Using this prop will fix a focus-management issue that affects accessibility.";console.error(missingPropMessage),isOpen=!0}return(0,compat_module.useLayoutEffect)((()=>{shimDialogElement(dialogRef.current)})),(0,compat_module.useEffect)((()=>{const dialogNode=dialogRef.current;let closingBecauseOfProp=!1;isOpen?dialogNode.open||(showModal?dialogNode.showModal():dialogNode.show(),dialogNode.focus()):dialogNode.open&&(dialogNode.close(),closingBecauseOfProp=!0);const handleClose=event=>{event.preventDefault(),closingBecauseOfProp||exit(event)};return dialogNode.addEventListener("close",handleClose),()=>{dialogNode.removeEventListener("close",handleClose)}}),[isOpen,showModal,exit]),(0,compat_module.useEffect)((()=>{if(!backdropClickExits)return;const dialogNode=dialogRef.current,handleClick=event=>{const rect=(boundingBoxRef?.current??dialogRef.current).getBoundingClientRect();rect.top<=event.clientY&&event.clientY<=rect.top+rect.height&&rect.left<=event.clientX&&event.clientX<=rect.left+rect.width||exit()};return dialogNode.addEventListener("click",handleClick),()=>{dialogNode.removeEventListener("click",handleClick)}}),[exit,backdropClickExits]),(0,jsx_runtime.tZ)("dialog",{ref:dialogRef,...dialogProps,tabIndex:-1,children})}},"./packages/design-system/dist/react-components/esm/NativeDialog/useNativeDialogAnalytics.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{m:()=>useNativeDialogAnalytics});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_analytics_getAnalyticsContentFromRefs__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/getAnalyticsContentFromRefs.js"),_utilities_usePrevious__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/usePrevious.js");function useNativeDialogAnalytics(_ref){let{isOpen,onOpen,onClose}=_ref;const headingRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(),prevIsOpen=(0,_utilities_usePrevious__WEBPACK_IMPORTED_MODULE_1__.Z)(isOpen);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const headingContent=(0,_analytics_getAnalyticsContentFromRefs__WEBPACK_IMPORTED_MODULE_2__.Z)([headingRef]);isOpen&&isOpen!==prevIsOpen?onOpen(headingContent):isOpen||!0!==prevIsOpen||onClose(headingContent)}),[isOpen,prevIsOpen]),headingRef}},"./packages/design-system/dist/react-components/esm/utilities/usePrevious.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");const __WEBPACK_DEFAULT_EXPORT__=value=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{ref.current=value})),ref.current}},"./packages/ds-healthcare-gov/src/components/Accordion/AccordionItem.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>components_Accordion_AccordionItem});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js"),SvgIcon=__webpack_require__("./packages/design-system/dist/react-components/esm/Icons/SvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"0 0 24 24"};const AddIcon_defaultProps={className:"",viewBox:"3 3 18 18"};var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useId=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/useId.js");const AccordionItem_AccordionItem=_ref=>{let{buttonClassName,children,contentClassName,defaultOpen,heading,headingLevel,id,isControlledOpen,onChange,closeIconComponent,openIconComponent}=_ref;const contentClasses=classnames_default()("ds-c-accordion__content",contentClassName),buttonClasses=classnames_default()("ds-c-accordion__button",buttonClassName),HeadingTag=`h${headingLevel}`,contentId=(0,useId.Z)("accordion-item--",id),buttonId=`${contentId}__button`,isControlled=void 0!==isControlledOpen,[isOpen,setIsOpen]=(0,compat_module.useState)(isControlled?isControlledOpen:defaultOpen),handleClick=event=>{onChange?.(event),isControlled||setIsOpen(!isOpen)},isItemOpen=isControlled?isControlledOpen:isOpen,CloseIconComponent=closeIconComponent,OpenIconComponent=openIconComponent,closeIcon=(0,jsx_runtime.tZ)(CloseIconComponent,{className:"ds-c-accordion__button-icon",id:`${contentId}__icon`}),openIcon=(0,jsx_runtime.tZ)(OpenIconComponent,{className:"ds-c-accordion__button-icon",id:`${contentId}__icon`});if(heading)return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)(HeadingTag,{className:"ds-c-accordion__heading",children:(0,jsx_runtime.BX)("button",{className:buttonClasses,"aria-expanded":isItemOpen,"aria-controls":contentId,id:buttonId,onClick:handleClick,type:"button",children:[heading,isItemOpen?closeIcon:openIcon]})}),(0,jsx_runtime.tZ)("div",{className:contentClasses,id:contentId,hidden:isControlled?!isControlledOpen:!isOpen,children})]})},MinusCircleIcon_defaultProps={className:"",viewBox:"0 0 20 20"};const PlusCircleIcon_defaultProps={className:"",viewBox:"0 0 20 20"};AccordionItem_AccordionItem.defaultProps={...AccordionItem_AccordionItem.defaultProps={defaultOpen:!1,headingLevel:"2",closeIconComponent:function RemoveIcon(props){const iconCssClasses=`ds-c-icon--remove ${props.className||""}`;return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.remove"),...defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("path",{d:"M19 13H5v-2h14v2z"})})},openIconComponent:function AddIcon(props){const iconCssClasses=`ds-c-icon--add ${props.className||""}`;return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.add"),...AddIcon_defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"})})}},closeIconComponent:function MinusCircleIcon(props){const iconCssClasses=classnames_default()("ds-c-icon--minus-circle",props.className);return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.remove"),...MinusCircleIcon_defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,jsx_runtime.tZ)("g",{transform:"translate(-47.000000, -360.000000)",children:(0,jsx_runtime.BX)("g",{transform:"translate(49.000000, 362.000000)",children:[(0,jsx_runtime.tZ)("circle",{className:"ds-c-icon--minus-circle__circle",stroke:"currentColor",strokeWidth:"2",fill:"#FFFFFF",cx:"8",cy:"8",r:"9"}),(0,jsx_runtime.tZ)("g",{className:"ds-c-icon--minus-circle__group",transform:"translate(2.823529, 7.223529)",fill:"currentColor",children:(0,jsx_runtime.tZ)("path",{d:"M5.17647059,-4.4 C5.60530345,-4.4 5.95294118,-4.05236228 5.95294118,-3.62352941 L5.95294118,5.17647059 C5.95294118,5.60530345 5.60530345,5.95294118 5.17647059,5.95294118 C4.74763772,5.95294118 4.4,5.60530345 4.4,5.17647059 L4.4,0.132872909 L4.4,-3.62352941 C4.4,-4.05236228 4.74763772,-4.4 5.17647059,-4.4 Z",transform:"translate(5.176471, 0.776471) rotate(-270.000000) translate(-5.176471, -0.776471) "})})]})})})})},openIconComponent:function PlusCircleIcon(props){const iconCssClasses=classnames_default()("ds-c-icon--plus-circle",props.className);return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.add"),...PlusCircleIcon_defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",children:(0,jsx_runtime.tZ)("g",{transform:"translate(-47.000000, -360.000000)",children:(0,jsx_runtime.BX)("g",{transform:"translate(49.000000, 362.000000)",children:[(0,jsx_runtime.tZ)("circle",{className:"ds-c-icon--plus-circle__circle",stroke:"currentColor",strokeWidth:"2",fill:"#FFFFFF",cx:"8",cy:"8",r:"9"}),(0,jsx_runtime.BX)("g",{className:"ds-c-icon--plus-circle__group",transform:"translate(2.823529, 2.823529)",fill:"currentColor",children:[(0,jsx_runtime.tZ)("rect",{x:"4.4",y:"0",width:"1.55294118",height:"10.3529412",rx:"0.776470588"}),(0,jsx_runtime.tZ)("path",{d:"M5.17647059,-4.70734562e-14 C5.60530345,-4.71522316e-14 5.95294118,0.347637724 5.95294118,0.776470588 L5.95294118,9.57647059 C5.95294118,10.0053035 5.60530345,10.3529412 5.17647059,10.3529412 C4.74763772,10.3529412 4.4,10.0053035 4.4,9.57647059 L4.4,4.53287291 L4.4,0.776470588 C4.4,0.347637724 4.74763772,-4.69946809e-14 5.17647059,-4.70734562e-14 Z",transform:"translate(5.176471, 5.176471) rotate(-270.000000) translate(-5.176471, -5.176471) "})]})]})})})})}};const components_Accordion_AccordionItem=AccordionItem_AccordionItem;try{AccordionItem.displayName="AccordionItem",AccordionItem.__docgenInfo={description:"",displayName:"AccordionItem",props:{buttonClassName:{defaultValue:null,description:"Class to be applied to the header `<button>` of an accordion item.",name:"buttonClassName",required:!1,type:{name:"string"}},contentClassName:{defaultValue:null,description:"Class to be applied to the content `<div>` tag of an accordion item.",name:"contentClassName",required:!1,type:{name:"string"}},defaultOpen:{defaultValue:null,description:"Boolean to expand the accordion.",name:"defaultOpen",required:!1,type:{name:"boolean"}},heading:{defaultValue:null,description:"Text for the accordion item heading.",name:"heading",required:!0,type:{name:"ReactNode"}},headingLevel:{defaultValue:null,description:"Heading type to override default `<h2>`.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},id:{defaultValue:null,description:"If not provided, a unique id will be automatically generated and used.",name:"id",required:!1,type:{name:"string"}},isControlledOpen:{defaultValue:null,description:"Sets the accordion panel's open state. Use this in combination with `onChange`\nfor a controlled accordion; otherwise, set `defaultOpen`.",name:"isControlledOpen",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:"A callback function that's invoked when a controlled accordion panel is selected or deselected.",name:"onChange",required:!1,type:{name:"(...args: any[]) => any"}},closeIconComponent:{defaultValue:null,description:"Icon to overwrite default close icon",name:"closeIconComponent",required:!1,type:{name:"any"}},openIconComponent:{defaultValue:null,description:"Icon to overwrite default open icon",name:"openIconComponent",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Accordion/AccordionItem.tsx#AccordionItem"]={docgenInfo:AccordionItem.__docgenInfo,name:"AccordionItem",path:"packages/ds-healthcare-gov/src/components/Accordion/AccordionItem.tsx#AccordionItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/ds-healthcare-gov/src/components/Footer/Footer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>Footer,Z:()=>Footer_Footer});var PrivacySettingsLink=__webpack_require__("./packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx");const Footer_languages={zh:{label:"中文",href:"/language-resource/#chinese"},ht:{label:"Kreyòl",href:"/language-resource/#creole"},fr:{label:"Français",href:"/language-resource/#french"},de:{label:"Deutsch",href:"/language-resource/#german"},gu:{label:"ગુજરાતી",href:"/language-resource/#gujarati"},hi:{label:"हिंदी",href:"/language-resource/#hindi"},it:{label:"Italiano",href:"/language-resource/#italian"},ja:{label:"日本語",href:"/language-resource/#japanese"},ko:{label:"한국어",href:"/language-resource/#korean"},pl:{label:"Polski",href:"/language-resource/#polish"},pt:{label:"Português",href:"/language-resource/#portuguese"},ru:{label:"Русский",href:"/language-resource/#russian"},es:{label:"Español",href:"/language-resource/#spanish"},tl:{label:"Tagalog",href:"/language-resource/#tagalog"},vi:{label:"Tiếng Việt",href:"/language-resource/#vietnamese"}};var i18n=__webpack_require__("./packages/ds-healthcare-gov/src/components/i18n.ts"),events=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/events.js"),config=__webpack_require__("./packages/ds-healthcare-gov/src/components/config.ts");function sendFooterLinkEvent(linkText,linkUrl,heading){(0,config.vc)().footerSendsAnalytics&&(0,config.vc)().defaultAnalyticsFunction({event_name:"navigation_clicked",event_extension:events.RW,navigation_type:"footer",link_text:linkText,...linkUrl?{link_url:linkUrl}:{},...heading?{heading}:{}})}var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const InlineLinkLists=function(props){const{primaryDomain}=props,inlineLinksTop={"footer.contactUs":`${primaryDomain}/contact-us`,"footer.archive":`${primaryDomain}/archive`,"footer.a11y":"http://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/CMSNondiscriminationNotice.html","footer.privacySettings":(0,jsx_runtime.tZ)(PrivacySettingsLink.Z,{}),"footer.privacyPolicy":`${primaryDomain}/privacy`,"footer.usingThisSite":`${primaryDomain}/using-this-site`};return(0,jsx_runtime.BX)("div",{className:"ds-l-container",children:[(0,jsx_runtime.tZ)("div",{className:"hc-c-footer__site-links-row",children:(0,jsx_runtime.tZ)("ul",{role:"list",className:"hc-c-footer__list",children:Object.getOwnPropertyNames(inlineLinksTop).map((function(key,index){const entry=inlineLinksTop[key],isUrl="string"==typeof entry,linkText=(0,i18n.t)(key),isLastItem=index!==Object.getOwnPropertyNames(inlineLinksTop).length-1;return(0,jsx_runtime.BX)("li",{className:"hc-c-footer__inline-item",children:[isUrl?(0,jsx_runtime.tZ)("a",{href:entry,onClick:()=>sendFooterLinkEvent(linkText,entry),children:linkText}):entry,isLastItem?(0,jsx_runtime.tZ)("span",{"aria-hidden":"true",className:"hc-c-footer__delimiter"}):null]},key)}))})}),(0,jsx_runtime.BX)("div",{className:"hc-c-footer__language-resource-links-row",children:[(0,jsx_runtime.tZ)("p",{id:"hc-c-footer__language-resources",className:"ds-u-visibility--screen-reader",children:"Language resources"}),(0,jsx_runtime.tZ)("ul",{role:"list","aria-labelledby":"hc-c-footer__language-resources",className:"hc-c-footer__list",children:Object.getOwnPropertyNames(Footer_languages).map((function(lang){const linkUrl=primaryDomain+Footer_languages[lang].href,linkText=Footer_languages[lang].label;return(0,jsx_runtime.tZ)("li",{className:"hc-c-footer__inline-item",onClick:()=>sendFooterLinkEvent(linkText,linkUrl,"Language resources"),children:(0,jsx_runtime.tZ)("a",{lang,href:linkUrl,children:linkText})},lang)}))})]})]})};InlineLinkLists.displayName="InlineLinkLists",InlineLinkLists.defaultProps={primaryDomain:""};const Footer_InlineLinkLists=InlineLinkLists;try{InlineLinkLists.displayName="InlineLinkLists",InlineLinkLists.__docgenInfo={description:"Inline link lists are always rendered in the footer, no matter\nwhat type of page a user is looking at. It includes required\nlinks, like the Privacy Policy, and other helpful things like\nlinks to a variety of different languages.",displayName:"InlineLinkLists",props:{primaryDomain:{defaultValue:{value:""},description:"",name:"primaryDomain",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/InlineLinkLists.tsx#InlineLinkLists"]={docgenInfo:InlineLinkLists.__docgenInfo,name:"InlineLinkLists",path:"packages/ds-healthcare-gov/src/components/Footer/InlineLinkLists.tsx#InlineLinkLists"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm_i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");const Logo=props=>{const style={};props.width&&(style.width=props.width);const linkText="es"===(0,esm_i18n.G3)()?"CuidadoDeSalud.gov":"HealthCare.gov";return(0,jsx_runtime.tZ)("a",{className:classnames_default()("hc-c-footer__logo ds-u-display--inline-block",props.className),href:props.href,style,onClick:()=>sendFooterLinkEvent(linkText,props.href),children:props.children})};Logo.displayName="Logo";const Footer_Logo=Logo;try{Logo.displayName="Logo",Logo.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/logos/healthcare-logo/).",displayName:"Logo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"packages/ds-healthcare-gov/src/components/Footer/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}var components_Logo=__webpack_require__("./packages/ds-healthcare-gov/src/components/Logo/index.ts");const LogosRow=function(props){return(0,jsx_runtime.tZ)("div",{className:"ds-l-container",children:(0,jsx_runtime.BX)("div",{className:"hc-c-footer__logo-row",children:[(0,jsx_runtime.tZ)(Footer_Logo,{href:"es"===(0,esm_i18n.G3)()?"https://www.cuidadodesalud.gov":"https://www.healthcare.gov",children:(0,jsx_runtime.tZ)(components_Logo.T,{titleId:"hc-c-footer__logo-title",className:props.logoClassName??""})}),(0,jsx_runtime.BX)("div",{className:"hc-c-footer__disclaimer",children:["en"===(0,esm_i18n.G3)()&&(0,jsx_runtime.BX)("p",{children:["Health Insurance Marketplace",(0,jsx_runtime.tZ)("sup",{children:"®"})," is a registered trademark of the Department of Health & Human Services."]}),(0,jsx_runtime.tZ)("p",{dangerouslySetInnerHTML:{__html:(0,i18n.t)("footer.disclaimer")}})]})]})})};LogosRow.displayName="LogosRow";const Footer_LogosRow=LogosRow;try{LogosRow.displayName="LogosRow",LogosRow.__docgenInfo={description:"",displayName:"LogosRow",props:{logoClassName:{defaultValue:null,description:"",name:"logoClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/LogosRow.tsx#LogosRow"]={docgenInfo:LogosRow.__docgenInfo,name:"LogosRow",path:"packages/ds-healthcare-gov/src/components/Footer/LogosRow.tsx#LogosRow"})}catch(__react_docgen_typescript_loader_error){}const Footer=props=>{const classes=classnames_default()("hc-c-footer",props.className);return(0,jsx_runtime.BX)("footer",{className:classes,role:"contentinfo",children:[props.footerTop,(0,jsx_runtime.tZ)(Footer_InlineLinkLists,{primaryDomain:props.primaryDomain}),(0,jsx_runtime.tZ)(Footer_LogosRow,{logoClassName:props.logoClassName})]})};Footer.displayName="Footer";const Footer_Footer=Footer;try{Footer.displayName="Footer",Footer.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/footer/healthcare-footer/?theme=healthcare).",displayName:"Footer",props:{className:{defaultValue:null,description:"Additional classes to be added to the root `<footer>` element.",name:"className",required:!1,type:{name:"string"}},primaryDomain:{defaultValue:null,description:"The primary, or root domain where the majority of footer links should be\nhosted.  By default, links render with relative paths, but providing this\nprop will force all links to render with absolute paths based on the\nprovided string. The string should include the protocol (`http://` or\n`https://`) and the domain only, with no trailing slash. For example, if\nthe provided string is `https://test.healthcare.gov`, the topics link will\nrender as `https://test.healthcare.gov/topics` instead of just `/topics`.\nNote that this is only really necessary if your application is hosted on a\nsubdomain, such as `https://localhelp.healthcare.gov`, where relative links\nwould direct the user to the wrong location, e.g. the link to `/topics`\nwould incorrectly direct the user to\n`https://localhelp.healthcare.gov/topics` when it should direct the user to\n`https://healthcare.gov/topics`.",name:"primaryDomain",required:!1,type:{name:"string"}},footerTop:{defaultValue:null,description:"Element to be added to display content for top footer section changes",name:"footerTop",required:!1,type:{name:"ReactNode"}},logoClassName:{defaultValue:null,description:"CSS classes to apply to the logo element",name:"logoClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/Footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"packages/ds-healthcare-gov/src/components/Footer/Footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _cmsgov_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js"),_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/ds-healthcare-gov/src/components/i18n.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const PrivacySettingsLink=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("button",{className:props.className,onClick:()=>window.utag?.gdpr?.showConsentPreferences((0,_cmsgov_design_system__WEBPACK_IMPORTED_MODULE_2__.G3)()),children:props.children||(0,_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("footer.privacySettings")});PrivacySettingsLink.displayName="PrivacySettingsLink";const __WEBPACK_DEFAULT_EXPORT__=PrivacySettingsLink;try{PrivacySettingsLink.displayName="PrivacySettingsLink",PrivacySettingsLink.__docgenInfo={description:"",displayName:"PrivacySettingsLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx#PrivacySettingsLink"]={docgenInfo:PrivacySettingsLink.__docgenInfo,name:"PrivacySettingsLink",path:"packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx#PrivacySettingsLink"})}catch(__react_docgen_typescript_loader_error){}},"./packages/ds-healthcare-gov/src/components/Logo/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{T:()=>_Logo__WEBPACK_IMPORTED_MODULE_0__.Z});var _Logo__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/ds-healthcare-gov/src/components/Logo/Logo.tsx")}}]);