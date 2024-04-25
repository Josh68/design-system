"use strict";(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[1325],{"./packages/design-system/src/components/Tooltip/Tooltip.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{IconTrigger:()=>IconTrigger,InlineTrigger:()=>InlineTrigger,InteractiveContent:()=>InteractiveContent,InversedTrigger:()=>InversedTrigger,TooltipWithCloseButton:()=>TooltipWithCloseButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Tooltip_stories});var CSSTransition=__webpack_require__("./node_modules/react-transition-group/esm/CSSTransition.js"),focus_trap_react=__webpack_require__("./node_modules/focus-trap-react/dist/focus-trap-react.js"),focus_trap_react_default=__webpack_require__.n(focus_trap_react),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),lib_popper=__webpack_require__("./node_modules/@popperjs/core/lib/popper.js"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),Button=__webpack_require__("./packages/design-system/src/components/Button/Button.tsx"),CloseIconThin=__webpack_require__("./packages/design-system/src/components/Icons/CloseIconThin.tsx");const utilities_usePrevious=value=>{const ref=(0,compat_module.useRef)();return(0,compat_module.useEffect)((()=>{ref.current=value})),ref.current};var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Tooltip=props=>{const popper=(0,compat_module.useRef)(null),contentId=(0,useId.Z)("tooltip-trigger--",props.id),triggerElement=(0,compat_module.useRef)(null),tooltipElement=(0,compat_module.useRef)(null),setTriggerElement=elem=>{triggerElement.current=elem},setTooltipElement=elem=>{tooltipElement.current=elem},[active,setActive]=(0,compat_module.useState)(!1),[isHover,setIsHover]=(0,compat_module.useState)(!1),[isMobile,setIsMobile]=(0,compat_module.useState)(!1),prevActiveStateVar=utilities_usePrevious(active),handleEscapeKey=event=>{active&&27===event.keyCode&&setActive(!1)},handleClickOutside=event=>{if(active&&(props.dialog||isMobile)){const clickedTrigger=triggerElement.current?.contains(event.target),clickedTooltip=tooltipElement.current?.contains(event.target);clickedTooltip||clickedTrigger||setActive(!1)}},handleCloseButtonClick=()=>{active&&(props.dialog||isMobile)&&setActive(!1)},handleBlur=event=>{setTimeout((()=>{isHover||event.currentTarget===event.target||setActive(!1)}),10)},handleTouch=()=>{setIsMobile(!0),setActive(!active)};(0,compat_module.useEffect)((()=>{if(triggerElement.current&&tooltipElement.current)return popper.current=(0,lib_popper.fi)(triggerElement.current,tooltipElement.current,{placement:props.placement,modifiers:[{name:"offset",options:{offset:props.offset}}]}),()=>{popper.current&&popper.current.destroy()}}),[]),(0,compat_module.useEffect)((()=>(document.addEventListener("mousedown",handleClickOutside),document.addEventListener("keydown",handleEscapeKey),()=>{document.removeEventListener("mousedown",handleClickOutside),document.removeEventListener("keydown",handleEscapeKey)})),[handleClickOutside,handleEscapeKey]),(0,compat_module.useEffect)((()=>{active?props.onOpen&&props.onOpen():(props.onClose&&props.onClose(),prevActiveStateVar&&(props.dialog||isMobile)&&props.showCloseButton&&triggerElement&&triggerElement.current&&triggerElement.current.focus())}),[active]),(0,compat_module.useLayoutEffect)((()=>{popper.current&&(popper.current.setOptions(props),popper.current.forceUpdate())}));const mainEventHandlers=props.dialog?{}:{onMouseEnter:()=>{isMobile||(setIsHover(!0),setActive(!0))},onMouseLeave:()=>{isMobile||(setIsHover(!1),setActive(!1))}};return(0,jsx_runtime.BX)("div",{className:"ds-c-tooltip__container",...mainEventHandlers,children:[(props=>{const{activeClassName,ariaLabel,children,className,component,dialog,id,offset,onClose,onOpen,inversed,interactiveBorder,placement,maxWidth,title,transitionDuration,zIndex,showCloseButton,closeButtonLabel,contentHeading,...others}=props,TriggerComponent=component,triggerClasses=classnames_default()("ds-c-tooltip__trigger",className,{[activeClassName]:activeClassName&&active,"ds-c-tooltip__trigger--inverse":inversed}),linkTriggerOverrides={tabIndex:"a"===TriggerComponent?0:void 0},eventHandlers=dialog?{onTouchStart:()=>handleTouch(),onClick:()=>{isMobile||setActive(!active)}}:{onTouchStart:()=>handleTouch(),onClick:()=>{isMobile||setActive(!active)},onFocus:()=>setActive(!0),onBlur:event=>handleBlur(event)};return(0,jsx_runtime.tZ)(TriggerComponent,{type:"button"===TriggerComponent?"button":void 0,"aria-label":ariaLabel||void 0,"aria-describedby":dialog?void 0:contentId,className:triggerClasses,ref:setTriggerElement,...others,...linkTriggerOverrides,...eventHandlers,children})})(props),(props=>{const{closeButtonLabel,dialog,contentHeading,inversed,interactiveBorder,placement,maxWidth,showCloseButton,title,transitionDuration,zIndex}=props,tooltipStyle={maxWidth,zIndex},interactiveBorderStyle={left:`-${interactiveBorder}px`,top:`-${interactiveBorder}px`,border:`${interactiveBorder}px solid transparent`,zIndex:-999},eventHandlers=dialog?{}:{onBlur:event=>handleBlur(event)},tooltipContent=(0,jsx_runtime.BX)("div",{id:contentId,tabIndex:dialog?-1:null,ref:setTooltipElement,className:classnames_default()("ds-c-tooltip",{"ds-c-tooltip--inverse":inversed}),style:tooltipStyle,"data-placement":placement,"aria-hidden":!active,role:dialog?"dialog":"tooltip",...eventHandlers,children:[(0,jsx_runtime.tZ)("span",{className:"ds-c-tooltip__arrow","data-popper-arrow":!0}),(0,jsx_runtime.BX)("div",{className:"ds-c-tooltip__content",children:[contentHeading||showCloseButton?(0,jsx_runtime.BX)("div",{className:classnames_default()("ds-c-tooltip__header",{"ds-c-tooltip__header--right":!contentHeading}),children:[contentHeading,showCloseButton&&(0,jsx_runtime.tZ)(Button.z,{variation:"ghost",size:"small",className:"ds-c-tooltip__close-button",onClick:handleCloseButtonClick,"aria-label":closeButtonLabel||"Close",children:(0,jsx_runtime.tZ)(CloseIconThin.g,{})})]}):null,title]}),!dialog&&(0,jsx_runtime.tZ)("span",{className:"ds-c-tooltip__interactive-border",style:interactiveBorderStyle})]});return(0,jsx_runtime.tZ)(CSSTransition.Z,{in:active,classNames:"ds-c-tooltip",timeout:transitionDuration,children:dialog?(0,jsx_runtime.tZ)(focus_trap_react_default(),{active,focusTrapOptions:{fallbackFocus:()=>document.getElementById(`${contentId}`).parentElement,initialFocus:()=>document.getElementById(`${contentId}`),clickOutsideDeactivates:!0},children:tooltipContent}):tooltipContent})})(props)]})};Tooltip.displayName="Tooltip",Tooltip.defaultProps={component:"button",interactiveBorder:15,maxWidth:"300px",offset:[0,5],placement:"top",transitionDuration:250,zIndex:9999};const Tooltip_Tooltip=Tooltip;try{Tooltip.displayName="Tooltip",Tooltip.__docgenInfo={description:"Tooltips provide additional information upon hover, focus or click.\nFor information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/tooltip/).\n\nWhen using the `<TooltipIcon>` as the only child of `<Tooltip>`, be sure to\nprovide an `aria-label` on the `<Tooltip>` to ensure an accessible name for\nthe trigger.",displayName:"Tooltip",props:{activeClassName:{defaultValue:null,description:"Classes applied to the tooltip trigger when the tooltip is active",name:"activeClassName",required:!1,type:{name:"string"}},ariaLabel:{defaultValue:null,description:"Helpful description of the tooltip for screenreaders",name:"ariaLabel",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Tooltip trigger content",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Classes applied to the tooltip trigger",name:"className",required:!1,type:{name:"string"}},closeButtonLabel:{defaultValue:null,description:"Configurable text for the aria-label of the tooltip's close button",name:"closeButtonLabel",required:!1,type:{name:"string"}},component:{defaultValue:{value:"button"},description:"When provided, will render the passed in component for the tooltip trigger. Typically will be a `button`, `a`, or rarely an `input` element.",name:"component",required:!1,type:{name:"any"}},contentHeading:{defaultValue:null,description:"Heading for the tooltip content. This will show above 'title' content and inline with 'closeButton' if closeButton is set",name:"contentHeading",required:!1,type:{name:"ReactNode"}},dialog:{defaultValue:null,description:"Tooltip that behaves like a dialog, i.e. a tooltip that only appears on click, traps focus, and contains interactive content. For more information, see Deque's [tooltip dialog documentation](https://dequeuniversity.com/library/aria/tooltip-dialog)",name:"dialog",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"`id` applied to tooltip body container element. If not provided, a unique id will be automatically generated and used.",name:"id",required:!1,type:{name:"string"}},interactiveBorder:{defaultValue:{value:"15"},description:"Sets the size of the invisible border around interactive tooltips that prevents it from immediately hiding when the cursor leaves the tooltip.",name:"interactiveBorder",required:!1,type:{name:"number"}},inversed:{defaultValue:null,description:"",name:"inversed",required:!1,type:{name:"boolean"}},offset:{defaultValue:{value:"[0, 5]"},description:"Applies `skidding` and `distance` offsets to the tooltip relative to the trigger. See the [`popperjs` docs](https://popper.js.org/docs/v2/modifiers/popper-offsets/) for more info.",name:"offset",required:!1,type:{name:"[number, number]"}},onClose:{defaultValue:null,description:"Called when the tooltip is hidden",name:"onClose",required:!1,type:{name:"() => any"}},onOpen:{defaultValue:null,description:"Called when the tooltip is shown",name:"onOpen",required:!1,type:{name:"() => any"}},placement:{defaultValue:{value:"top"},description:"Placement of the tooltip body relative to the trigger. See the [`popperjs` docs](https://popper.js.org/docs/v2/constructors/#options) for more info.",name:"placement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"auto"'},{value:'"auto-start"'},{value:'"auto-end"'},{value:'"bottom"'},{value:'"right"'},{value:'"left"'},{value:'"top-start"'},{value:'"top-end"'},{value:'"bottom-start"'},{value:'"bottom-end"'},{value:'"right-start"'},{value:'"right-end"'},{value:'"left-start"'},{value:'"left-end"'}]}},maxWidth:{defaultValue:{value:"300px"},description:"`maxWidth` styling applied to the tooltip body",name:"maxWidth",required:!1,type:{name:"string"}},showCloseButton:{defaultValue:null,description:"Determines if close button is shown in tooltip. It is recommended that the close button is only used if `dialog=true`",name:"showCloseButton",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"Content inside the tooltip body or popover. If contains interactive elements use the `dialog` prop.",name:"title",required:!0,type:{name:"ReactNode"}},transitionDuration:{defaultValue:{value:"250"},description:"Duration of the `react-transition-group` CSSTransition. See the [`timeout` option](http://reactcommunity.org/react-transition-group/transition#Transition-prop-timeout) for more info.",name:"transitionDuration",required:!1,type:{name:"number"}},zIndex:{defaultValue:{value:"9999"},description:"`zIndex` styling applied to the tooltip body",name:"zIndex",required:!1,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement> & Ref<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Tooltip/Tooltip.tsx#Tooltip"]={docgenInfo:Tooltip.__docgenInfo,name:"Tooltip",path:"packages/design-system/src/components/Tooltip/Tooltip.tsx#Tooltip"})}catch(__react_docgen_typescript_loader_error){}var InfoCircleIconThin=__webpack_require__("./packages/design-system/src/components/Icons/InfoCircleIconThin.tsx");const TooltipIcon=_ref=>{let{inversed,...iconProps}=_ref;return(0,jsx_runtime.tZ)("span",{className:"ds-c-tooltip-icon__container",children:(0,jsx_runtime.tZ)(InfoCircleIconThin.e,{className:classnames_default()("ds-c-tooltip-icon",{"ds-c-tooltip-icon--inverse":inversed}),...iconProps})})};TooltipIcon.displayName="TooltipIcon";const Tooltip_TooltipIcon=TooltipIcon;try{TooltipIcon.displayName="TooltipIcon",TooltipIcon.__docgenInfo={description:"",displayName:"TooltipIcon",props:{inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Tooltip/TooltipIcon.tsx#TooltipIcon"]={docgenInfo:TooltipIcon.__docgenInfo,name:"TooltipIcon",path:"packages/design-system/src/components/Tooltip/TooltipIcon.tsx#TooltipIcon"})}catch(__react_docgen_typescript_loader_error){}const Tooltip_stories={title:"Components/Tooltip",component:Tooltip_Tooltip,subcomponents:{TooltipIcon:Tooltip_TooltipIcon},decorators:[Story=>(0,jsx_runtime.tZ)("div",{style:{margin:"11rem auto",textAlign:"center"},children:(0,jsx_runtime.tZ)(Story,{})})],argTypes:{placement:{options:["auto","auto-start","auto-end","left","left-start","left-end","right","right-start","right-end","top","top-start","top-end","bottom","bottom-start","bottom-end"],control:"radio"}},parameters:{docs:{underlyingHtmlElements:["a","button"]}}},IconTrigger={render:function Component(args){return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("p",{className:"ds-u-margin--0 ds-u-display--inline",children:"Tooltip with icon trigger"}),(0,jsx_runtime.tZ)(Tooltip_Tooltip,{...args})]})},args:{ariaLabel:"Label describing the subject of the tooltip",className:"ds-c-tooltip__trigger-icon ds-u-display--inline",title:"Tooltip trigger uses <TooltipIcon> for the trigger content",children:(0,jsx_runtime.tZ)(Tooltip_TooltipIcon,{})}},InlineTrigger={render:function Component(args){return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("span",{children:"Tooltip with "}),(0,jsx_runtime.tZ)(Tooltip_Tooltip,{...args})]})},args:{className:"ds-c-tooltip__trigger-link",component:"a",title:"Tooltip trigger uses <a> for the trigger, styled with dotted underline",children:"inline trigger"}},InteractiveContent={args:{dialog:!0,className:"ds-c-button",component:"button",title:(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.BX)("p",{className:"ds-u-margin--0",children:["Tooltip dialogs only activate on click and include a focus trap. Intended for tooltips with complex layout and ",(0,jsx_runtime.tZ)("a",{href:"/#",children:"interactive elements"})]}),(0,jsx_runtime.tZ)(Button.Z,{size:"small",className:"ds-u-margin-top--2",href:"https://dequeuniversity.com/library/aria/tooltip-dialog",children:"More info"})]}),children:"Tooltip with interactive content"}},TooltipWithCloseButton={args:{dialog:!0,title:(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:"Entering your Social Security Number helps the plan confirm with your state that you have Medicaid."}),children:"Tooltip trigger",contentHeading:"Really long Heading for tooltip",showCloseButton:!0,className:"ds-c-button"}},InversedTrigger={render:function Component(args){return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("p",{className:"ds-u-margin--0 ds-u-color--base-inverse ds-u-display--inline",children:"Tooltip with icon trigger"}),(0,jsx_runtime.tZ)(Tooltip_Tooltip,{...args})]})},parameters:{onDark:!0,layout:"fullscreen"},args:{ariaLabel:"Label describing the subject of the tooltip",className:"ds-c-tooltip__trigger-icon ds-u-display--inline",title:"Tooltip trigger uses <TooltipIcon> for the trigger content",children:(0,jsx_runtime.tZ)(Tooltip_TooltipIcon,{inversed:!0}),inversed:!0}};IconTrigger.parameters={...IconTrigger.parameters,docs:{...IconTrigger.parameters?.docs,source:{originalSource:"{\n  render: function Component(args) {\n    return <>\n        <p className=\"ds-u-margin--0 ds-u-display--inline\">Tooltip with icon trigger</p>\n        <Tooltip {...(args as any)} />\n      </>;\n  },\n  args: {\n    ariaLabel: 'Label describing the subject of the tooltip',\n    className: 'ds-c-tooltip__trigger-icon ds-u-display--inline',\n    title: 'Tooltip trigger uses <TooltipIcon> for the trigger content',\n    children: <TooltipIcon />\n  }\n}",...IconTrigger.parameters?.docs?.source}}},InlineTrigger.parameters={...InlineTrigger.parameters,docs:{...InlineTrigger.parameters?.docs,source:{originalSource:"{\n  render: function Component(args) {\n    return <>\n        <span>Tooltip with&nbsp;</span>\n        <Tooltip {...(args as any)} />\n      </>;\n  },\n  args: {\n    className: 'ds-c-tooltip__trigger-link',\n    component: 'a',\n    title: 'Tooltip trigger uses <a> for the trigger, styled with dotted underline',\n    children: 'inline trigger'\n  }\n}",...InlineTrigger.parameters?.docs?.source}}},InteractiveContent.parameters={...InteractiveContent.parameters,docs:{...InteractiveContent.parameters?.docs,source:{originalSource:'{\n  args: {\n    dialog: true,\n    className: \'ds-c-button\',\n    component: \'button\',\n    title: <>\n        <p className="ds-u-margin--0">\n          Tooltip dialogs only activate on click and include a focus trap. Intended for tooltips\n          with complex layout and <a href="/#">interactive elements</a>\n        </p>\n        <Button size="small" className="ds-u-margin-top--2" href="https://dequeuniversity.com/library/aria/tooltip-dialog">\n          More info\n        </Button>\n      </>,\n    children: \'Tooltip with interactive content\'\n  }\n}',...InteractiveContent.parameters?.docs?.source}}},TooltipWithCloseButton.parameters={...TooltipWithCloseButton.parameters,docs:{...TooltipWithCloseButton.parameters?.docs,source:{originalSource:"{\n  args: {\n    dialog: true,\n    title: <>\n        Entering your Social Security Number helps the plan confirm with your state that you have\n        Medicaid.\n      </>,\n    children: 'Tooltip trigger',\n    contentHeading: 'Really long Heading for tooltip',\n    showCloseButton: true,\n    className: 'ds-c-button'\n  }\n}",...TooltipWithCloseButton.parameters?.docs?.source}}},InversedTrigger.parameters={...InversedTrigger.parameters,docs:{...InversedTrigger.parameters?.docs,source:{originalSource:"{\n  render: function Component(args) {\n    return <>\n        <p className=\"ds-u-margin--0 ds-u-color--base-inverse ds-u-display--inline\">\n          Tooltip with icon trigger\n        </p>\n        <Tooltip {...(args as any)} />\n      </>;\n  },\n  parameters: {\n    // Must supply `layout: 'fullscreen'` when we use `onDark: true`\n    onDark: true,\n    layout: 'fullscreen'\n  },\n  args: {\n    ariaLabel: 'Label describing the subject of the tooltip',\n    className: 'ds-c-tooltip__trigger-icon ds-u-display--inline',\n    title: 'Tooltip trigger uses <TooltipIcon> for the trigger content',\n    children: <TooltipIcon inversed />,\n    inversed: true\n  }\n}",...InversedTrigger.parameters?.docs?.source}}};const __namedExportsOrder=["IconTrigger","InlineTrigger","InteractiveContent","TooltipWithCloseButton","InversedTrigger"]},"./packages/design-system/src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/src/components/utilities/mergeRefs.ts"),config=__webpack_require__("./packages/design-system/src/components/config.ts"),getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts"),events=__webpack_require__("./packages/design-system/src/components/analytics/events.ts"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Button=props=>{const{analytics,analyticsLabelOverride,analyticsEventTypeOverride,analyticsParentHeading,analyticsParentType,onAnalyticsEvent,children,className,inputRef,isAlternate,onClick,onDark,size,variation,...otherProps}=props,{contentRef,sendButtonEvent}=function useButtonAnalytics(_ref){let{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,href,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,type,variation}=_ref;const contentRef=(0,compat_module.useRef)();return{contentRef,sendButtonEvent:function sendButtonEvent(){if(!0!==analytics&&(!(0,config.vc)().buttonSendsAnalytics||!1===analytics))return;const buttonText=analyticsLabelOverride??(0,getAnalyticsContentFromRefs.L)([contentRef]),buttonStyle=variation??"default",buttonType=type??"button",buttonParentHeading=analyticsParentHeading??" ",buttonParentType=analyticsParentType??" ";return onAnalyticsEvent({event_name:"button_engagement",event_type:events.tw.UI_INTERACTION,event_category:events.Jk.UI_INTERACTION,event_action:`engaged ${buttonStyle} button`,event_label:href?`${buttonText}: ${href}`:buttonText,event_extension:events.RW,text:buttonText,button_style:buttonStyle,button_type:href?"link":buttonType,parent_component_heading:buttonParentHeading,parent_component_type:buttonParentType,...href?{link_url:href}:{}})}}}(props),ComponentType=props.href?"a":"button",colorSchemeClass=isAlternate&&"ds-c-button--alternate",modeClass=onDark&&"ds-c-button--on-dark",sizeClass=size&&`ds-c-button--${size}`,variationClass=variation&&`ds-c-button--${variation}`,attrs={...otherProps,className:classnames_default()("ds-c-button",colorSchemeClass,modeClass,sizeClass,variationClass,className)};function handleClick(e){props.disabled||(sendButtonEvent(),onClick&&onClick(e))}return"button"!==ComponentType&&(delete attrs.disabled,delete attrs.type,props.disabled&&(attrs.role="link",attrs["aria-disabled"]=!0,delete attrs.href)),(0,jsx_runtime.tZ)(ComponentType,{ref:(0,mergeRefs.Z)([inputRef,contentRef]),onClick:handleClick,onKeyPress:"a"===ComponentType?function handleKeyPress(e){" "===e.key&&handleClick(e)}:void 0,...attrs,children})};Button.displayName="Button",Button.defaultProps={isAlternate:!1,onDark:!1,type:"button"};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/button/).",displayName:"Button",props:{children:{defaultValue:null,description:"Label text or HTML",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root button element.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"When provided, the root component will render as an `<a>` element\nrather than `button`.",name:"href",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `button` or `a` element",name:"inputRef",required:!1,type:{name:"ButtonRef"}},isAlternate:{defaultValue:{value:"false"},description:"Applies the alternate color to a Button. By default, Button\nuses the `main` color.",name:"isAlternate",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).\nNot called when the Button is disabled.",name:"onClick",required:!1,type:{name:"(...args: any[]) => any"}},onDark:{defaultValue:{value:"false"},description:"Defines a color palette best used when Button is placed on a dark\nbackground-color. By default, Button uses a light color palette.",name:"onDark",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'}]}},type:{defaultValue:{value:"'button' as const"},description:"Button [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variation:{defaultValue:null,description:"A string corresponding to Button variation classes.",name:"variation",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"ghost"'}]}},analytics:{defaultValue:null,description:"Analytics events tracking is enabled by default. Set this value to `false` to\ndisable tracking for this component instance.",name:"analytics",required:!1,type:{name:"boolean"}},analyticsLabelOverride:{defaultValue:null,description:"An override for the dynamic content sent to analytics services. By default this\ncontent comes from the heading.\n\nIn cases where this component’s heading may contain **sensitive information**,\nuse this prop to override what is sent to analytics.",name:"analyticsLabelOverride",required:!1,type:{name:"string"}},analyticsEventTypeOverride:{defaultValue:null,description:"If you need the `event_type` to be overridden for your use case, you can provide\nan alternate string here. Suggested values can be found in the EventType enum.",name:"analyticsEventTypeOverride",required:!1,type:{name:"string"}},onAnalyticsEvent:{defaultValue:null,description:"Optional callback that will intercept analytics events for this component.\nIf none is specified, the design system will use the default analytics\nfunction, which can be overwritten globally with the `defaultAnalyticsFunction`\nconfig property.",name:"onAnalyticsEvent",required:!1,type:{name:"(event: AnalyticsEvent) => void"}},analyticsParentHeading:{defaultValue:null,description:"If needed for analytics, pass heading text of parent component of button.",name:"analyticsParentHeading",required:!1,type:{name:"string"}},analyticsParentType:{defaultValue:null,description:"If needed for analytics, pass type of parent component of button.",name:"analyticsParentType",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement> & Ref<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/design-system/src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/CloseIconThin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>CloseIconThin});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"-2 -2 18 18"};function CloseIconThin(props){const iconCssClasses=`ds-c-icon--close ds-c-icon--close-thin ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.close"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeWidth:"2",d:"M0 13.0332964L13.0332964 0M13.0332964 13.0332964L0 0"})})}CloseIconThin.displayName="CloseIconThin";try{CloseIconThin.displayName="CloseIconThin",CloseIconThin.__docgenInfo={description:"",displayName:"CloseIconThin",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/CloseIconThin.tsx#CloseIconThin"]={docgenInfo:CloseIconThin.__docgenInfo,name:"CloseIconThin",path:"packages/design-system/src/components/Icons/CloseIconThin.tsx#CloseIconThin"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/InfoCircleIconThin.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>InfoCircleIconThin});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"0 0 16 16"};function InfoCircleIconThin(props){const iconCssClasses=`ds-c-icon--info-circle-thin ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.infoCircle"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M8 16c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8zm1-3.7V6.4H7v5.9h2zM7 4.9c0 .6.3.9 1 .9s1-.3 1-.9c0-.3-.1-.5-.2-.7-.2-.1-.5-.2-.8-.2-.3 0-.6.1-.8.2-.1.2-.2.4-.2.7z",fillRule:"nonzero"})})}InfoCircleIconThin.displayName="InfoCircleIconThin";try{InfoCircleIconThin.displayName="InfoCircleIconThin",InfoCircleIconThin.__docgenInfo={description:"",displayName:"InfoCircleIconThin",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/InfoCircleIconThin.tsx#InfoCircleIconThin"]={docgenInfo:InfoCircleIconThin.__docgenInfo,name:"InfoCircleIconThin",path:"packages/design-system/src/components/Icons/InfoCircleIconThin.tsx#InfoCircleIconThin"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const SvgIcon=_ref=>{let{ariaHidden,className,children,description,id,inversed,title,viewBox,...otherProps}=_ref;const svgClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("icon--",id),titleId=`${rootId}__title`,descriptionId=`${rootId}__desc`,ariaLabelledBy=description?`${titleId} ${descriptionId}`:titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("svg",{"aria-hidden":ariaHidden,className:svgClasses,id:id??isSrVisible?rootId:void 0,viewBox,xmlns:"http://www.w3.org/2000/svg",...screenReaderProps,...otherProps,children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("desc",{id:descriptionId,children:description}),children]})};SvgIcon.displayName="SvgIcon",SvgIcon.defaultProps={ariaHidden:!0,inversed:!1};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true"},description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The elements that make up the SVG",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:{value:"false"},description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function getAnalyticsContentFromRefs(refs){return refs.map((ref=>ref.current?.textContent)).find((textContent=>textContent))}__webpack_require__.d(__webpack_exports__,{L:()=>getAnalyticsContentFromRefs,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=getAnalyticsContentFromRefs},"./packages/design-system/src/components/utilities/mergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function mergeRefs(refs){return value=>{refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>mergeRefs})},"./packages/design-system/src/components/utilities/useId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(providedId??lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}}}]);