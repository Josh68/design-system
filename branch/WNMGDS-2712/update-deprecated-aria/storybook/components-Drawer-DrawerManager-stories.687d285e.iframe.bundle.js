/*! For license information please see components-Drawer-DrawerManager-stories.687d285e.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[7749],{"./packages/design-system/src/components/Drawer/DrawerManager.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DrawerManagerDefault:()=>DrawerManagerDefault,__namedExportsOrder:()=>__namedExportsOrder,default:()=>DrawerManager_stories});var Drawer=__webpack_require__("./packages/design-system/src/components/Drawer/Drawer.tsx"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const DrawerContext=(0,compat_module.createContext)(null),DrawerManager=props=>{const[currentID,setCurrentID]=(0,compat_module.useState)(null);return(0,jsx_runtime.tZ)(DrawerContext.Provider,{value:{currentID,setCurrentID},...props})};DrawerManager.displayName="DrawerManager";try{DrawerManager.displayName="DrawerManager",DrawerManager.__docgenInfo={description:"The `DrawerManager` feature is useful when there are multiple help drawer links on a\npage, as it defines the behavior of what happens when a user already has one open and\ntries to open another. The `DrawerManager` manages the simplest behavior of closing\nall other drawers when a new one opens.\n\nAt the top level of your app or page, you can\ndefine a `<DrawerManager>` [_context provider_](https://react.dev/learn/passing-data-deeply-with-context)\nand then in specific parts of your app that manage individual drawers, you can tap into\nthe management behavior by calling the `useDrawerManager` hook. The hook provides the\nopen/closed status of the drawer as well as functions for opening, closing, or toggling\nthe drawer.\n\nHere is a minimal example of implementation:\n\n```tsx\nimport { Button, DrawerManager, useDrawerManager } from '@cmsgov/design-system';\n\nconst ManagedDrawer = (props) => {\n  const { toggleDrawer, closeDrawer, isDrawerOpen } = useDrawerManager();\n\n  return (\n    <>\n      <Drawer\n        {...props}\n        onCloseClick={closeDrawer}\n        isOpen={isDrawerOpen}\n      >\n      <Button onClick={toggleDrawer}>Click to open drawer</Button>\n    </>\n  );\n}\n\n// Using components that use the `useDrawerManager` hook inside an app that is\n// wrapped in a `DrawerManager` context provider:\n\nfunction App() {\n  return (\n    <DrawerManager>\n      ... any content\n      <ManagedDrawer {...propsForDrawer1} />\n      <ManagedDrawer {...propsForDrawer2} />\n      <ManagedDrawer {...propsForDrawer3} />\n    </DrawerManager>\n  );\n}\n```\n\nHere is a description of the object that the hook returns:\n\n```ts\n{\n  isDrawerOpen: boolean; // whether it's open\n  openDrawer: () => any; // function that opens it\n  closeDrawer: () => any; // function that closes it\n  toggleDrawer: () => any; // function that toggles it\n}\n```\n\n[See also the documentation on the drawer component](https://design.cms.gov/components/drawer/).",displayName:"DrawerManager",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Drawer/DrawerManager.tsx#DrawerManager"]={docgenInfo:DrawerManager.__docgenInfo,name:"DrawerManager",path:"packages/design-system/src/components/Drawer/DrawerManager.tsx#DrawerManager"})}catch(__react_docgen_typescript_loader_error){}var Button=__webpack_require__("./packages/design-system/src/components/Button/Button.tsx");const DrawerManager_stories={title:"Components/DrawerManager",component:DrawerManager},drawerContent1={heading:"Drawer Number One",children:(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("strong",{children:"Yar!"}),(0,jsx_runtime.tZ)("p",{children:"Prow scuttle parrel provost Sail ho shrouds spirits boom mizzenmast yardarm. Pinnace holystone mizzenmast quarter crow's nest nipperkin grog yardarm hempen halter furl. Swab barque interloper chantey doubloon starboard grog black jack gangway rutters."}),(0,jsx_runtime.tZ)("p",{children:"Deadlights jack lad schooner scallywag dance the hempen jig carouser broadside cable strike colors. Bring a spring upon her cable holystone blow the man down spanker Shiver me timbers to go on account lookout wherry doubloon chase. Belay yo-ho-ho keelhaul squiffy black spot yardarm spyglass sheet transom heave to."})]})},drawerContent2={heading:"Drawer Number Two",children:(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("strong",{children:"The Cosmos Awaits"}),(0,jsx_runtime.tZ)("p",{children:"Radio telescope quasar bits of moving fluff Sea of Tranquility Drake Equation rogue? Network of wormholes descended from astronomers cosmic ocean a mote of dust suspended in a sunbeam from which we spring hearts of the stars? Preserve and cherish that pale blue dot stirred by starlight descended from astronomers of brilliant syntheses two ghostly white figures in coveralls and helmets are softly dancing hundreds of thousands? Vastness is bearable only through love invent the universe a still more glorious dawn awaits dream of the mind's eye not a sunrise but a galaxyrise courage of our questions and billions upon billions upon billions upon billions upon billions upon billions upon billions."})]})},drawerContent3={heading:"Drawer Number Three",children:(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("strong",{children:"Space, the final frontier"}),(0,jsx_runtime.tZ)("p",{children:"In the last 24 hours we have seen facilities now being created for the greatest and most complex exploration in man's history. We have felt the ground shake and the air shattered by the testing of a Saturn C-1 booster rocket, many times as powerful as the Atlas which launched John Glenn, generating power equivalent to 10,000 automobiles with their accelerators on the floor. We have seen the site where the F-1 rocket engines, each one as powerful as all eight engines of the Saturn combined, will be clustered together to make the advanced Saturn missile, assembled in a new building to be built at Cape Canaveral as tall as a 48 story structure, as wide as a city block, and as long as two lengths of this field."})]})},SingleDrawerWithToggle=function(){const{heading,children}=arguments.length<=0?void 0:arguments[0],{toggleDrawer,closeDrawer,isDrawerOpen}=(()=>{const{currentID,setCurrentID}=(0,compat_module.useContext)(DrawerContext),id=(0,useId.Z)(),isDrawerOpen=currentID===id,openDrawer=()=>setCurrentID(id),closeDrawer=()=>setCurrentID(null);return{openDrawer,closeDrawer,toggleDrawer:()=>isDrawerOpen?closeDrawer():openDrawer(),isDrawerOpen}})();return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)(Drawer.Z,{onCloseClick:closeDrawer,footerTitle:"Footer Title",footerBody:(0,jsx_runtime.tZ)("p",{className:"ds-text-body--md ds-u-margin--0",children:"Footer content"}),heading,isOpen:isDrawerOpen,children}),(0,jsx_runtime.tZ)(Button.z,{className:"ds-c-drawer__toggle ds-u-margin-bottom--2",variation:"ghost",onClick:toggleDrawer,children:heading})]})},DrawerManagerDefault={render:function Component(){return(0,jsx_runtime.BX)(DrawerManager,{children:[(0,jsx_runtime.tZ)(SingleDrawerWithToggle,{...drawerContent1}),(0,jsx_runtime.tZ)(SingleDrawerWithToggle,{...drawerContent2}),(0,jsx_runtime.tZ)(SingleDrawerWithToggle,{...drawerContent3})]})}};DrawerManagerDefault.parameters={...DrawerManagerDefault.parameters,docs:{...DrawerManagerDefault.parameters?.docs,source:{originalSource:"{\n  render: function Component() {\n    return <DrawerManager>\n        <SingleDrawerWithToggle {...drawerContent1} />\n        <SingleDrawerWithToggle {...drawerContent2} />\n        <SingleDrawerWithToggle {...drawerContent3} />\n      </DrawerManager>;\n  }\n}",...DrawerManagerDefault.parameters?.docs?.source}}};const __namedExportsOrder=["DrawerManagerDefault"]},"./packages/design-system/src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/src/components/utilities/mergeRefs.ts"),config=__webpack_require__("./packages/design-system/src/components/config.ts"),getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts"),events=__webpack_require__("./packages/design-system/src/components/analytics/events.ts"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Button=props=>{const{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,onAnalyticsEvent,children,className,inputRef,isAlternate,onClick,onDark,size,variation,...otherProps}=props,{contentRef,sendButtonEvent}=function useButtonAnalytics(_ref){let{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,href,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,type,variation}=_ref;const contentRef=(0,compat_module.useRef)();return{contentRef,sendButtonEvent:function sendButtonEvent(){if(!0!==analytics&&(!(0,config.vc)().buttonSendsAnalytics||!1===analytics))return;const buttonText=analyticsLabelOverride??(0,getAnalyticsContentFromRefs.L)([contentRef]),buttonStyle=variation??"default",buttonType=type??"button",buttonParentHeading=analyticsParentHeading??" ",buttonParentType=analyticsParentType??" ";return onAnalyticsEvent({event_name:"button_engagement",event_extension:events.RW,text:buttonText,button_style:buttonStyle,button_type:href?"link":buttonType,parent_component_heading:buttonParentHeading,parent_component_type:buttonParentType,...href?{link_url:href}:{}})}}}(props),ComponentType=props.href?"a":"button",colorSchemeClass=isAlternate&&"ds-c-button--alternate",modeClass=onDark&&"ds-c-button--on-dark",sizeClass=size&&`ds-c-button--${size}`,variationClass=variation&&`ds-c-button--${variation}`,attrs={...otherProps,className:classnames_default()("ds-c-button",colorSchemeClass,modeClass,sizeClass,variationClass,className)};function handleClick(e){props.disabled||(sendButtonEvent(),onClick&&onClick(e))}return"button"!==ComponentType&&(delete attrs.disabled,delete attrs.type,props.disabled&&(attrs.role="link",attrs["aria-disabled"]=!0,delete attrs.href)),(0,jsx_runtime.tZ)(ComponentType,{ref:(0,mergeRefs.Z)([inputRef,contentRef]),onClick:handleClick,onKeyPress:"a"===ComponentType?function handleKeyPress(e){" "===e.key&&handleClick(e)}:void 0,...attrs,children})};Button.displayName="Button",Button.defaultProps={isAlternate:!1,onDark:!1,type:"button"};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/button/).",displayName:"Button",props:{children:{defaultValue:null,description:"Label text or HTML",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root button element.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"When provided, the root component will render as an `<a>` element\nrather than `button`.",name:"href",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `button` or `a` element",name:"inputRef",required:!1,type:{name:"ButtonRef"}},isAlternate:{defaultValue:{value:"false"},description:"Applies the alternate color to a Button. By default, Button\nuses the `main` color.",name:"isAlternate",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).\nNot called when the Button is disabled.",name:"onClick",required:!1,type:{name:"(...args: any[]) => any"}},onDark:{defaultValue:{value:"false"},description:"Defines a color palette best used when Button is placed on a dark\nbackground-color. By default, Button uses a light color palette.",name:"onDark",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'}]}},type:{defaultValue:{value:"'button' as const"},description:"Button [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variation:{defaultValue:null,description:"A string corresponding to Button variation classes.",name:"variation",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"ghost"'}]}},analytics:{defaultValue:null,description:"Analytics events tracking is enabled by default. Set this value to `false` to\ndisable tracking for this component instance.",name:"analytics",required:!1,type:{name:"boolean"}},analyticsLabelOverride:{defaultValue:null,description:"An override for the dynamic content sent to analytics services. By default this\ncontent comes from the heading.\n\nIn cases where this component’s heading may contain **sensitive information**,\nuse this prop to override what is sent to analytics.",name:"analyticsLabelOverride",required:!1,type:{name:"string"}},onAnalyticsEvent:{defaultValue:null,description:"Optional callback that will intercept analytics events for this component.\nIf none is specified, the design system will use the default analytics\nfunction, which can be overwritten globally with the `defaultAnalyticsFunction`\nconfig property.",name:"onAnalyticsEvent",required:!1,type:{name:"(event: AnalyticsEvent) => void"}},analyticsParentHeading:{defaultValue:null,description:"If needed for analytics, pass heading text of parent component of button.",name:"analyticsParentHeading",required:!1,type:{name:"string"}},analyticsParentType:{defaultValue:null,description:"If needed for analytics, pass type of parent component of button.",name:"analyticsParentType",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement> & Ref<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/design-system/src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Drawer/Drawer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_Button_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/Button/Button.tsx"),_NativeDialog_NativeDialog__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/NativeDialog/NativeDialog.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_i18n__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_utilities_useId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Drawer=props=>{const{ariaLabel,backdropClickExits,children,className,closeButtonText,closeButtonVariation,footerBody,footerTitle,hasFocusTrap,heading,headingId:userHeadingId,headingLevel,headingRef:userHeadingRef,isFooterSticky,isHeaderSticky,isOpen,onCloseClick,...otherProps}=props,headingRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),headingId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_3__.Z)("drawer--",userHeadingId),Heading=`h${headingLevel}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_NativeDialog_NativeDialog__WEBPACK_IMPORTED_MODULE_4__.Z,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(className,"ds-c-drawer"),exit:onCloseClick,showModal:hasFocusTrap,backdropClickExits,isOpen,"aria-labelledby":headingId,...otherProps,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("div",{className:"ds-c-drawer__window",tabIndex:isFooterSticky&&-1,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("div",{className:"ds-c-drawer__header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(Heading,{id:headingId,className:"ds-c-drawer__header-heading",ref:el=>{headingRef.current=el,userHeadingRef&&(userHeadingRef.current=el)},children:heading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{"aria-label":ariaLabel??(0,_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("drawer.ariaLabel"),className:"ds-c-drawer__close-button",size:"small",onClick:onCloseClick,variation:closeButtonVariation,children:closeButtonText??(0,_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("drawer.closeButtonText")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-drawer__body",{"ds-c-drawer--is-sticky":isHeaderSticky||isFooterSticky}),tabIndex:0,children}),(footerTitle||footerBody)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("div",{className:"ds-c-drawer__footer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("h4",{className:"ds-c-drawer__footer-title",children:footerTitle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("div",{className:"ds-c-drawer__footer-body",children:footerBody})]})]})})};Drawer.displayName="Drawer",Drawer.defaultProps={hasFocusTrap:!1,headingLevel:"3"};const __WEBPACK_DEFAULT_EXPORT__=Drawer;try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/drawer/).",displayName:"Drawer",props:{ariaLabel:{defaultValue:null,description:"Gives more context to screen readers on the Drawer close button.",name:"ariaLabel",required:!1,type:{name:"string"}},backdropClickExits:{defaultValue:null,description:"Pass `true` to have the dialog close when its backdrop pseudo-element is clicked",name:"backdropClickExits",required:!1,type:{name:"boolean"}},closeButtonText:{defaultValue:null,description:"",name:"closeButtonText",required:!1,type:{name:"ReactNode"}},closeButtonVariation:{defaultValue:null,description:"",name:"closeButtonVariation",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"ghost"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},footerBody:{defaultValue:null,description:"",name:"footerBody",required:!1,type:{name:"ReactNode"}},footerTitle:{defaultValue:null,description:"",name:"footerTitle",required:!1,type:{name:"ReactNode"}},hasFocusTrap:{defaultValue:{value:"false"},description:"Enables focus trap functionality within Drawer.",name:"hasFocusTrap",required:!1,type:{name:"boolean"}},heading:{defaultValue:null,description:"Text for the Drawer heading. Required because the `heading` will be focused on mount.",name:"heading",required:!0,type:{name:"ReactNode"}},headingId:{defaultValue:null,description:"A unique `id` to be used on heading element to label multiple instances of Drawer.",name:"headingId",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"3"},description:"Heading type to override default `<h3>`",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'}]}},headingRef:{defaultValue:null,description:"Ref to heading element",name:"headingRef",required:!1,type:{name:"MutableRefObject<any>"}},isHeaderSticky:{defaultValue:null,description:'Enables "sticky" position of Drawer header element.',name:"isHeaderSticky",required:!1,type:{name:"boolean"}},isFooterSticky:{defaultValue:null,description:'Enables "sticky" position of Drawer footer element.',name:"isFooterSticky",required:!1,type:{name:"boolean"}},isOpen:{defaultValue:null,description:"Controls whether the dialog is in an open state",name:"isOpen",required:!0,type:{name:"boolean"}},onCloseClick:{defaultValue:null,description:"Called when the user activates the close button or presses the ESC key if\nfocus trapping is enabled. The parent of this component is responsible for\nshowing or not showing the drawer, so you need to use this callback to\nmake that happen. The dialog does not hide itself.",name:"onCloseClick",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Drawer/Drawer.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"packages/design-system/src/components/Drawer/Drawer.tsx#Drawer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/NativeDialog/NativeDialog.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>NativeDialog_NativeDialog});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function shimDialogElement(element){if(!element.showModal){if("dialog"!==element.localName)throw new Error("Failed to polyfill dialog: The element is not a dialog.");!function addDialogProperties(dialog){function handleKey(event){27===event.keyCode&&(event.preventDefault(),event.stopPropagation(),dialog.close())}function setOpen(open){open?(dialog.hasAttribute("open")||dialog.setAttribute("open",""),document.addEventListener("keydown",handleKey)):(dialog.removeAttribute("open"),document.removeEventListener("keydown",handleKey))}dialog.show=()=>setOpen(!0),dialog.showModal=()=>setOpen(!0),dialog.close=()=>{setOpen(!1);const cancelEvent=new CustomEvent("close",{bubbles:!1,cancelable:!0});dialog.dispatchEvent(cancelEvent)},dialog.hasAttribute("role")||dialog.setAttribute("role","dialog"),"returnValue"in dialog||(dialog.returnValue=""),Object.defineProperty(dialog,"open",{set:setOpen,get:dialog.hasAttribute.bind(dialog,"open")})}(element)}}var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const NativeDialog=_ref=>{let{children,exit,isOpen,showModal,backdropClickExits,boundingBoxRef,...dialogProps}=_ref;const dialogRef=(0,compat_module.useRef)(null);if(void 0===isOpen){const missingPropMessage="The 'isOpen' prop is now used to control the state of Dialogs and Drawers. Please do not conditionally render these components to control their state. All Dialogs and Drawers will become invisible without this prop in the next major release. Using this prop will fix a focus-management issue that affects accessibility.";console.error(missingPropMessage),isOpen=!0}return(0,compat_module.useLayoutEffect)((()=>{shimDialogElement(dialogRef.current)})),(0,compat_module.useEffect)((()=>{const dialogNode=dialogRef.current;let closingBecauseOfProp=!1;isOpen?dialogNode.open||(showModal?dialogNode.showModal():dialogNode.show(),dialogNode.focus()):dialogNode.open&&(dialogNode.close(),closingBecauseOfProp=!0);const handleClose=event=>{event.preventDefault(),closingBecauseOfProp||exit(event)};return dialogNode.addEventListener("close",handleClose),()=>{dialogNode.removeEventListener("close",handleClose)}}),[isOpen,showModal,exit]),(0,compat_module.useEffect)((()=>{if(!backdropClickExits)return;const dialogNode=dialogRef.current,handleClick=event=>{const rect=(boundingBoxRef?.current??dialogRef.current).getBoundingClientRect();rect.top<=event.clientY&&event.clientY<=rect.top+rect.height&&rect.left<=event.clientX&&event.clientX<=rect.left+rect.width||exit()};return dialogNode.addEventListener("click",handleClick),()=>{dialogNode.removeEventListener("click",handleClick)}}),[exit,backdropClickExits]),(0,jsx_runtime.tZ)("dialog",{ref:dialogRef,...dialogProps,tabIndex:-1,children})};NativeDialog.displayName="NativeDialog";const NativeDialog_NativeDialog=NativeDialog;try{NativeDialog.displayName="NativeDialog",NativeDialog.__docgenInfo={description:"This is an internal component and may change without warning. Use at your own risk!",displayName:"NativeDialog",props:{backdropClickExits:{defaultValue:null,description:"Pass `true` to have the dialog close when its backdrop pseudo-element is clicked",name:"backdropClickExits",required:!1,type:{name:"boolean"}},boundingBoxRef:{defaultValue:null,description:"",name:"boundingBoxRef",required:!1,type:{name:"MutableRefObject<any>"}},isOpen:{defaultValue:null,description:"Controls whether the dialog is in an open state",name:"isOpen",required:!0,type:{name:"boolean"}},exit:{defaultValue:null,description:"Function called to close dialog.",name:"exit",required:!0,type:{name:"(...args: any[]) => any"}},id:{defaultValue:null,description:"A custom `id` attribute for the dialog element",name:"id",required:!1,type:{name:"string"}},showModal:{defaultValue:null,description:"Determines which native dialog method is called to open the dialog. If the dialog\nis opened with `showModal`, focus will be trapped inside the dialog, and it will\nneed to be closed before the rest of the page can be interacted with. See the\n[`showModal` MDN documentation](https://developer.mozilla.org/en-US/docs/Web/API/HTMLDialogElement/showModal)\nfor more details.",name:"showModal",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/NativeDialog/NativeDialog.tsx#NativeDialog"]={docgenInfo:NativeDialog.__docgenInfo,name:"NativeDialog",path:"packages/design-system/src/components/NativeDialog/NativeDialog.tsx#NativeDialog"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getAnalyticsContentFromRefs(refs){return refs.map((ref=>ref.current?.textContent)).find((textContent=>textContent))}__webpack_require__.d(__webpack_exports__,{L:()=>getAnalyticsContentFromRefs,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=getAnalyticsContentFromRefs},"./packages/design-system/src/components/utilities/mergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function mergeRefs(refs){return value=>{refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>mergeRefs})},"./packages/design-system/src/components/utilities/useId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(providedId??lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);