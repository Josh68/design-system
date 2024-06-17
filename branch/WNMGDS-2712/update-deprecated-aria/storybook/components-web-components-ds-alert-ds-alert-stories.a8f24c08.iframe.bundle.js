/*! For license information please see components-web-components-ds-alert-ds-alert-stories.a8f24c08.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[544],{"./packages/design-system/src/components/web-components/ds-alert/ds-alert.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _storybook_docs_WebComponentDocTemplate_mdx__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./.storybook/docs/WebComponentDocTemplate.mdx"),_storybook__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/web-components/storybook.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=(__webpack_require__("./packages/design-system/src/components/web-components/ds-alert/ds-alert.tsx"),__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs"));const __WEBPACK_DEFAULT_EXPORT__={title:"Web Components/ds-alert",argTypes:{children:{table:{disable:!0}},heading:{control:"text",description:"Text for the alert heading"},"hide-icon":{description:'Set to "true" to hide the icon',control:"boolean"},role:{description:'ARIA `role`, defaults to "region"',options:[void 0,"alert","alertdialog","region","status"],control:{type:"radio"}},variation:{description:"A string corresponding to the `Alert` variation classes",options:[void 0,"success","warn","error"],control:{type:"radio"}},weight:{description:"A string corresponding to the `Alert` weight classes",options:[void 0,"lightweight"],control:{type:"radio"}},"root-id":{control:"text",description:"A unique ID for this element. A unique ID will be generated if one isn't provided."}},args:{variation:"success",heading:"Yay!"},parameters:{docs:{page:_storybook_docs_WebComponentDocTemplate_mdx__WEBPACK_IMPORTED_MODULE_0__.Z,description:{component:"For information about how and when to use this component, [refer to its full documentation page](https://design.cms.gov/components/alert/)."},sharedAttrLists:["analytics"]}},decorators:[_storybook__WEBPACK_IMPORTED_MODULE_1__.h]},Template=args=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("ds-alert",{...args,children:args.children??(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.HY,{children:"This is an example of a success alert. If you want to see an error alert, click the button below."})});Template.displayName="Template";const Default=Template.bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => <ds-alert {...args}>\n    {args.children ?? <>\n        This is an example of a success alert. If you want to see an error alert, click the button\n        below.\n      </>}\n  </ds-alert>",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./packages/design-system/src/components/Alert/Alert.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{b:()=>Alert,Z:()=>Alert_Alert});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/src/components/utilities/mergeRefs.ts"),useAutoFocus=__webpack_require__("./packages/design-system/src/components/utilities/useAutoFocus.ts"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts");var events=__webpack_require__("./packages/design-system/src/components/analytics/events.ts"),config=__webpack_require__("./packages/design-system/src/components/config.ts");function useAlertAnalytics(_ref){let{analytics,analyticsLabelOverride,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,variation}=_ref;const[headingRef,bodyRef]=function useAnalyticsContent(_ref){let{onMount,onUnmount}=_ref;const refs=[(0,compat_module.useRef)(),(0,compat_module.useRef)(),(0,compat_module.useRef)()];return(0,compat_module.useEffect)((()=>{const content=(0,getAnalyticsContentFromRefs.Z)(refs);return onMount(content),()=>{onUnmount&&onUnmount(content)}}),[]),refs}({onMount:content=>{if(!0!==analytics&&(!(0,config.vc)().alertSendsAnalytics||!1===analytics))return;if(!variation)return;const eventHeadingText=analyticsLabelOverride??content;eventHeadingText?onAnalyticsEvent({event_name:"alert_impression",event_extension:events.RW,heading:eventHeadingText,type:variation}):console.error("No content found for Alert analytics event")}});return{headingRef,bodyRef}}var AlertCircleIcon=__webpack_require__("./packages/design-system/src/components/Icons/AlertCircleIcon.tsx"),CheckCircleIcon=__webpack_require__("./packages/design-system/src/components/Icons/CheckCircleIcon.tsx"),WarningIcon=__webpack_require__("./packages/design-system/src/components/Icons/WarningIcon.tsx"),InfoCircleIcon=__webpack_require__("./packages/design-system/src/components/Icons/InfoCircleIcon.tsx"),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Alert=props=>{const{headingRef,bodyRef}=useAlertAnalytics(props),focusRef=(0,useAutoFocus.Z)(props.autoFocus),rootId=(0,useId.Z)("alert--",props.id),headingId=props.headingId??`${rootId}__heading`,a11yLabelId=`${rootId}__a11y-label`;const{children,className,autoFocus,heading,headingId:_headingId,headingLevel,hideIcon,alertRef,role,variation,weight,analytics,analyticsLabelOverride,onAnalyticsEvent,...alertProps}=props;let headingElement;if(heading){const Heading=`h${headingLevel}`;headingElement=(0,jsx_runtime.tZ)(Heading,{className:"ds-c-alert__heading",children:heading})}const classes=classnames_default()("ds-c-alert",hideIcon&&"ds-c-alert--hide-icon",variation&&`ds-c-alert--${variation}`,weight&&`ds-c-alert--${weight}`,className),a11yLabelText=(0,i18n.t)(`alert.${variation??"defaultLabel"}`),a11yLabel=(0,jsx_runtime.tZ)("span",{className:"ds-c-alert__a11y-label ds-u-visibility--screen-reader",id:a11yLabelId,children:`${a11yLabelText}: `});return(0,jsx_runtime.BX)("div",{className:classes,ref:(0,mergeRefs.Z)([alertRef,focusRef]),tabIndex:alertRef||autoFocus?-1:null,role,"aria-labelledby":heading?headingId:a11yLabelId,...alertProps,children:[function getIcon(){const iconClass="ds-c-alert__icon";if(hideIcon)return null;switch(variation){case"error":return(0,jsx_runtime.tZ)(AlertCircleIcon.g,{className:iconClass});case"success":return(0,jsx_runtime.tZ)(CheckCircleIcon.r,{className:iconClass});case"warn":return(0,jsx_runtime.tZ)(WarningIcon.a,{className:iconClass});default:return(0,jsx_runtime.tZ)(InfoCircleIcon.u,{className:iconClass})}}(),(0,jsx_runtime.BX)("div",{className:"ds-c-alert__body",id:headingId,ref:bodyRef,children:[heading?(0,jsx_runtime.BX)("div",{className:"ds-c-alert__header ds-c-alert__heading",ref:headingRef,children:[a11yLabel,headingElement]}):a11yLabel,children]})]})};Alert.displayName="Alert",Alert.defaultProps={role:"region",headingLevel:"2"};const Alert_Alert=Alert;try{Alert.displayName="Alert",Alert.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/alert/).",displayName:"Alert",props:{alertRef:{defaultValue:null,description:"Access a reference to the `alert` `div` element",name:"alertRef",required:!1,type:{name:"(...args: any[]) => any"}},autoFocus:{defaultValue:null,description:"Sets the focus on Alert during the first mount",name:"autoFocus",required:!1,type:{name:"boolean"}},children:{defaultValue:null,description:"The alert's body content",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},heading:{defaultValue:null,description:"Text for the alert heading",name:"heading",required:!1,type:{name:"ReactNode"}},headingId:{defaultValue:null,description:"Optional id used to link the `aria-labelledby` attribute to the heading. If not provided, a unique id will be automatically generated and used.",name:"headingId",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"2"},description:"Heading type to override default `<h2>`.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},hideIcon:{defaultValue:null,description:"Boolean to hide the `Alert` icon",name:"hideIcon",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"A unique ID for this element. A unique ID will be generated if one isn't provided.",name:"id",required:!1,type:{name:"string"}},role:{defaultValue:{value:"region"},description:"ARIA `role`, defaults to 'region'",name:"role",required:!1,type:{name:"enum",value:[{value:'"alert"'},{value:'"alertdialog"'},{value:'"region"'},{value:'"status"'}]}},weight:{defaultValue:null,description:"A string corresponding to the `Alert` weight classes (`lightweight`)",name:"weight",required:!1,type:{name:'"lightweight"'}},variation:{defaultValue:null,description:"A string corresponding to the `Alert` variation classes (`error`, `warn`, `success`)",name:"variation",required:!1,type:{name:"enum",value:[{value:'"success"'},{value:'"warn"'},{value:'"error"'}]}},analytics:{defaultValue:null,description:"Analytics events tracking is enabled by default. Set this value to `false` to\ndisable tracking for this component instance.",name:"analytics",required:!1,type:{name:"boolean"}},analyticsLabelOverride:{defaultValue:null,description:"An override for the dynamic content sent to analytics services. By default this\ncontent comes from the heading.\n\nIn cases where this component’s heading may contain **sensitive information**,\nuse this prop to override what is sent to analytics.",name:"analyticsLabelOverride",required:!1,type:{name:"string"}},onAnalyticsEvent:{defaultValue:null,description:"Optional callback that will intercept analytics events for this component.\nIf none is specified, the design system will use the default analytics\nfunction, which can be overwritten globally with the `defaultAnalyticsFunction`\nconfig property.",name:"onAnalyticsEvent",required:!1,type:{name:"(event: AnalyticsEvent) => void"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLDivElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Alert/Alert.tsx#Alert"]={docgenInfo:Alert.__docgenInfo,name:"Alert",path:"packages/design-system/src/components/Alert/Alert.tsx#Alert"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/AlertCircleIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{g:()=>AlertCircleIcon});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"37 2 135 135"};function AlertCircleIcon(props){const iconCssClasses=`ds-c-icon--alert-circle ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.alertCircle"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.821 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.351 2.798 21.82 8.392 31.408 5.595 9.584 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771C167.773 94.82 170.57 84.35 170.57 73c0-11.351-2.797-21.822-8.39-31.408zm-43.75 70.433c0 .761-.246 1.398-.734 1.914s-1.086.773-1.793.773H100.26c-.706 0-1.331-.271-1.874-.814-.543-.543-.814-1.168-.814-1.873V96.546c0-.706.271-1.331.814-1.874.543-.543 1.168-.814 1.874-.814h15.643c.707 0 1.306.258 1.793.773.488.518.734 1.154.734 1.915v15.479zm-.164-28.026c-.055.543-.339 1.019-.854 1.426-.517.407-1.154.61-1.914.61h-15.073c-.761 0-1.413-.203-1.956-.61-.543-.407-.815-.883-.815-1.426l-1.385-50.595c0-.653.271-1.141.814-1.467.544-.434 1.196-.652 1.956-.652h17.926c.761 0 1.412.217 1.955.652.543.326.813.815.813 1.467l-1.467 50.595z"})})}AlertCircleIcon.displayName="AlertCircleIcon";try{AlertCircleIcon.displayName="AlertCircleIcon",AlertCircleIcon.__docgenInfo={description:"",displayName:"AlertCircleIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"]={docgenInfo:AlertCircleIcon.__docgenInfo,name:"AlertCircleIcon",path:"packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/CheckCircleIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{r:()=>CheckCircleIcon});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"38 7 135 135"};function CheckCircleIcon(props){const iconCssClasses=`ds-c-icon--check-circle ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.checkCircle"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zm-13.608 21.876l-44.239 44.239c-1.032 1.032-2.281 1.549-3.748 1.549-1.412 0-2.634-.517-3.666-1.549L67.425 78.215c-.977-.979-1.466-2.199-1.466-3.666 0-1.521.488-2.771 1.466-3.749l7.414-7.332c1.033-1.032 2.254-1.548 3.667-1.548s2.635.516 3.667 1.548l18.413 18.413 33.241-33.16c1.032-1.032 2.254-1.548 3.666-1.548 1.411 0 2.635.516 3.666 1.548l7.414 7.333c.979.977 1.467 2.226 1.467 3.747 0 1.467-.488 2.689-1.468 3.667z"})})}CheckCircleIcon.displayName="CheckCircleIcon";try{CheckCircleIcon.displayName="CheckCircleIcon",CheckCircleIcon.__docgenInfo={description:"",displayName:"CheckCircleIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/CheckCircleIcon.tsx#CheckCircleIcon"]={docgenInfo:CheckCircleIcon.__docgenInfo,name:"CheckCircleIcon",path:"packages/design-system/src/components/Icons/CheckCircleIcon.tsx#CheckCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/InfoCircleIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{u:()=>InfoCircleIcon});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"37 2 135 135"};function InfoCircleIcon(props){const iconCssClasses=`ds-c-icon--info-circle ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.infoCircle"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zM97.572 26.071c0-.761.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h15.644c.76 0 1.385.245 1.872.733.488.489.734 1.113.734 1.874v13.036c0 .76-.246 1.385-.734 1.873-.487.489-1.112.733-1.872.733h-15.644c-.76 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V26.071zm31.285 86.036c0 .76-.246 1.385-.733 1.872-.487.489-1.112.733-1.874.733h-36.5c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V99.07c0-.762.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h7.822V70.392H89.75c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.874V54.75c0-.761.244-1.385.733-1.874.489-.489 1.114-.733 1.874-.733h26.073c.76 0 1.385.244 1.872.733.488.489.734 1.113.734 1.874v41.714h7.82c.761 0 1.386.245 1.874.733.487.488.733 1.113.733 1.874v13.036z"})})}InfoCircleIcon.displayName="InfoCircleIcon";try{InfoCircleIcon.displayName="InfoCircleIcon",InfoCircleIcon.__docgenInfo={description:"",displayName:"InfoCircleIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/InfoCircleIcon.tsx#InfoCircleIcon"]={docgenInfo:InfoCircleIcon.__docgenInfo,name:"InfoCircleIcon",path:"packages/design-system/src/components/Icons/InfoCircleIcon.tsx#InfoCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const SvgIcon=_ref=>{let{ariaHidden,className,children,description,id,inversed,title,viewBox,...otherProps}=_ref;const svgClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("icon--",id),titleId=`${rootId}__title`,descriptionId=`${rootId}__desc`,ariaLabelledBy=description?`${titleId} ${descriptionId}`:titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("svg",{"aria-hidden":ariaHidden,className:svgClasses,id:id??isSrVisible?rootId:void 0,viewBox,xmlns:"http://www.w3.org/2000/svg",...screenReaderProps,...otherProps,children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("desc",{id:descriptionId,children:description}),children]})};SvgIcon.displayName="SvgIcon",SvgIcon.defaultProps={ariaHidden:!0,inversed:!1};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true"},description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The elements that make up the SVG",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:{value:"false"},description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/WarningIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{a:()=>WarningIcon});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"27 0 160 135"};function WarningIcon(props){const iconCssClasses=`ds-c-icon--warning ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.warning"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M179.695 125.388L117.126 10.673a10.39 10.39 0 00-3.832-3.992 10.1 10.1 0 00-5.295-1.467c-1.901 0-3.667.49-5.296 1.467s-2.906 2.308-3.829 3.992L36.303 125.388c-1.901 3.423-1.847 6.845.163 10.267a10.24 10.24 0 003.789 3.746 10.188 10.188 0 005.174 1.387H170.57c1.849 0 3.572-.463 5.175-1.387a10.24 10.24 0 003.789-3.746c2.01-3.423 2.064-6.844.161-10.267zm-61.265-8.148c0 .76-.259 1.398-.773 1.914-.516.516-1.127.773-1.834.773H100.18c-.706 0-1.317-.257-1.833-.773-.516-.517-.774-1.154-.774-1.914v-15.48c0-.76.258-1.397.774-1.914.516-.516 1.126-.773 1.833-.773h15.642c.707 0 1.318.257 1.834.773.515.517.773 1.154.773 1.914v15.48zm-.162-30.47c-.056.543-.341.991-.856 1.344-.517.354-1.154.529-1.915.529h-15.073c-.76 0-1.412-.176-1.955-.529-.544-.354-.815-.801-.815-1.346l-1.385-37.231c0-.761.272-1.331.815-1.711.706-.597 1.358-.896 1.956-.896h17.924c.598 0 1.25.298 1.956.896.543.38.813.896.813 1.548l-1.465 37.396z"})})}WarningIcon.displayName="WarningIcon";try{WarningIcon.displayName="WarningIcon",WarningIcon.__docgenInfo={description:"",displayName:"WarningIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/WarningIcon.tsx#WarningIcon"]={docgenInfo:WarningIcon.__docgenInfo,name:"WarningIcon",path:"packages/design-system/src/components/Icons/WarningIcon.tsx#WarningIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getAnalyticsContentFromRefs(refs){return refs.map((ref=>ref.current?.textContent)).find((textContent=>textContent))}__webpack_require__.d(__webpack_exports__,{L:()=>getAnalyticsContentFromRefs,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=getAnalyticsContentFromRefs},"./packages/design-system/src/components/utilities/mergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function mergeRefs(refs){return value=>{refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>mergeRefs})},"./packages/design-system/src/components/utilities/useAutoFocus.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");const __WEBPACK_DEFAULT_EXPORT__=autoFocus=>{const ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{autoFocus&&ref.current?.focus&&ref.current?.focus()}),[ref,autoFocus]),ref}},"./packages/design-system/src/components/utilities/useId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(providedId??lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./packages/design-system/src/components/web-components/ds-alert/ds-alert.tsx":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{"use strict";var _preactement_define__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/design-system/src/components/web-components/preactement/define.ts"),_Alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/Alert/Alert.tsx"),_shared_attributes_analytics__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/web-components/shared-attributes/analytics.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const attributes=["class-name","heading","heading-id","hide-icon","role","weight","variation","root-id",..._shared_attributes_analytics__WEBPACK_IMPORTED_MODULE_1__.E],Wrapper=_ref=>{let{analytics,hideIcon,rootId,...otherProps}=_ref;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_Alert__WEBPACK_IMPORTED_MODULE_3__.b,{...otherProps,analytics:analytics&&Boolean(JSON.parse(analytics)),hideIcon:hideIcon&&Boolean(JSON.parse(hideIcon)),id:rootId})};Wrapper.displayName="Wrapper",(0,_preactement_define__WEBPACK_IMPORTED_MODULE_0__.O)("ds-alert",(()=>Wrapper),{attributes,events:["onAnalyticsEvent"]})},"./packages/design-system/src/components/web-components/shared-attributes/analytics.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>analyticsAttrs});const analyticsAttrs=["analytics","analytics-label-override","analytics-event-type-override","analytics-parent-heading","analytics-parent-type"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);