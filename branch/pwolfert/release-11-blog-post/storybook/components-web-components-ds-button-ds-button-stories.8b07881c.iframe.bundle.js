/*! For license information please see components-web-components-ds-button-ds-button-stories.8b07881c.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[1346],{"./packages/design-system/src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/src/components/utilities/mergeRefs.ts"),config=__webpack_require__("./packages/design-system/src/components/config.ts"),getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts"),events=__webpack_require__("./packages/design-system/src/components/analytics/events.ts"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Button=props=>{const{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,onAnalyticsEvent,children,className,inputRef,isAlternate,onClick,onDark,size,variation,...otherProps}=props,{contentRef,sendButtonEvent}=function useButtonAnalytics(_ref){let{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,href,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,type,variation}=_ref;const contentRef=(0,compat_module.useRef)();return{contentRef,sendButtonEvent:function sendButtonEvent(){if(!0!==analytics&&(!(0,config.vc)().buttonSendsAnalytics||!1===analytics))return;const buttonText=analyticsLabelOverride??(0,getAnalyticsContentFromRefs.L)([contentRef]),buttonStyle=variation??"default",buttonType=type??"button",buttonParentHeading=analyticsParentHeading??" ",buttonParentType=analyticsParentType??" ";return onAnalyticsEvent({event_name:"button_engagement",event_extension:events.RW,text:buttonText,button_style:buttonStyle,button_type:href?"link":buttonType,parent_component_heading:buttonParentHeading,parent_component_type:buttonParentType,...href?{link_url:href}:{}})}}}(props),ComponentType=props.href?"a":"button",colorSchemeClass=isAlternate&&"ds-c-button--alternate",modeClass=onDark&&"ds-c-button--on-dark",sizeClass=size&&`ds-c-button--${size}`,variationClass=variation&&`ds-c-button--${variation}`,attrs={...otherProps,className:classnames_default()("ds-c-button",colorSchemeClass,modeClass,sizeClass,variationClass,className)};function handleClick(e){props.disabled||(sendButtonEvent(),onClick&&onClick(e))}return"button"!==ComponentType&&(delete attrs.disabled,delete attrs.type,props.disabled&&(attrs.role="link",attrs["aria-disabled"]=!0,delete attrs.href)),(0,jsx_runtime.tZ)(ComponentType,{ref:(0,mergeRefs.Z)([inputRef,contentRef]),onClick:handleClick,onKeyPress:"a"===ComponentType?function handleKeyPress(e){" "===e.key&&handleClick(e)}:void 0,...attrs,children})};Button.defaultProps={isAlternate:!1,onDark:!1,type:"button"};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/button/).",displayName:"Button",props:{children:{defaultValue:null,description:"Label text or HTML",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root button element.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"When provided, the root component will render as an `<a>` element\nrather than `button`.",name:"href",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `button` or `a` element",name:"inputRef",required:!1,type:{name:"ButtonRef"}},isAlternate:{defaultValue:{value:"false"},description:"Applies the alternate color to a Button. By default, Button\nuses the `main` color.",name:"isAlternate",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).\nNot called when the Button is disabled.",name:"onClick",required:!1,type:{name:"(...args: any[]) => any"}},onDark:{defaultValue:{value:"false"},description:"Defines a color palette best used when Button is placed on a dark\nbackground-color. By default, Button uses a light color palette.",name:"onDark",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'}]}},type:{defaultValue:{value:"'button' as const"},description:"Button [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},variation:{defaultValue:null,description:"A string corresponding to Button variation classes.",name:"variation",required:!1,type:{name:"enum",value:[{value:'"ghost"'},{value:'"solid"'}]}},analytics:{defaultValue:null,description:"Analytics events tracking is enabled by default. Set this value to `false` to\ndisable tracking for this component instance.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"analytics",required:!1,type:{name:"boolean"}},analyticsLabelOverride:{defaultValue:null,description:"An override for the dynamic content sent to analytics services. By default this\ncontent comes from the heading.\n\nIn cases where this component’s heading may contain **sensitive information**,\nuse this prop to override what is sent to analytics.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"analyticsLabelOverride",required:!1,type:{name:"string"}},onAnalyticsEvent:{defaultValue:null,description:"Optional callback that will intercept analytics events for this component.\nIf none is specified, the design system will use the default analytics\nfunction, which can be overwritten globally with the `defaultAnalyticsFunction`\nconfig property.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"onAnalyticsEvent",required:!1,type:{name:"(event: AnalyticsEvent) => void"}},analyticsParentHeading:{defaultValue:null,description:"If needed for analytics, pass heading text of parent component of button.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"analyticsParentHeading",required:!1,type:{name:"string"}},analyticsParentType:{defaultValue:null,description:"If needed for analytics, pass type of parent component of button.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"analyticsParentType",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement> & Ref<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/design-system/src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getAnalyticsContentFromRefs(refs){return refs.map((ref=>ref.current?.textContent)).find((textContent=>textContent))}__webpack_require__.d(__webpack_exports__,{L:()=>getAnalyticsContentFromRefs,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=getAnalyticsContentFromRefs},"./packages/design-system/src/components/utilities/mergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function mergeRefs(refs){return value=>{refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>mergeRefs})},"./packages/design-system/src/components/web-components/shared-attributes/analytics.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{E:()=>analyticsAttrs});const analyticsAttrs=["analytics","analytics-label-override","analytics-event-type-override","analytics-parent-heading","analytics-parent-type"]},"./packages/design-system/src/components/web-components/ds-button/ds-button.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ds_button_stories});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),WebComponentDocTemplate=__webpack_require__("./.storybook/docs/WebComponentDocTemplate.mdx"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),preactement_define=__webpack_require__("./packages/design-system/src/components/web-components/preactement/define.ts"),Button=__webpack_require__("./packages/design-system/src/components/Button/Button.tsx"),analytics=__webpack_require__("./packages/design-system/src/components/web-components/shared-attributes/analytics.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const attributes=["class-name","disabled","href","is-alternate","is-on-dark","size","type","variation","target",...analytics.E],Wrapper=_ref=>{let{isAlternate,isOnDark,analytics,...otherProps}=_ref;return(0,jsx_runtime.tZ)(Button.Z,{...otherProps,isAlternate:isAlternate&&Boolean(JSON.parse(isAlternate)),onDark:isOnDark&&Boolean(JSON.parse(isOnDark)),analytics:analytics&&Boolean(JSON.parse(analytics))})};(0,preactement_define.O)("ds-button",(()=>Wrapper),{attributes,events:["onClick","onAnalyticsEvent"]});var storybook=__webpack_require__("./packages/design-system/src/components/web-components/storybook.tsx");const ds_button_stories={title:"Web Components/ds-button",argTypes:{"class-name":{description:"Additional classes to be added to the root button element.",control:"text"},"is-alternate":{description:"Applies the alternate color to a Button. By default, Button uses the `main` color.",control:"boolean"},size:{description:"A string corresponding to Button size classes.",options:[void 0,"big","small"],control:{type:"radio"}},variation:{description:"A string corresponding to Button variation classes.",options:[void 0,"solid","ghost"],control:{type:"radio"}}},args:{},parameters:{docs:{page:WebComponentDocTemplate.Z,description:{component:"For information about how and when to use this component, [refer to its full documentation page](https://design.cms.gov/components/button/)."},sharedAttrLists:["analytics"]}},decorators:[storybook.h]},Default=(args=>((0,compat_module.useEffect)((()=>{const onClick=event=>{(0,dist.aD)("ds-click")(event)},button=document.querySelector("ds-button");return button.addEventListener("ds-click",onClick),()=>{button.removeEventListener("ds-click",onClick)}})),(0,jsx_runtime.tZ)("ds-button",{...args,children:args.children??(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:"Your button text is here"})}))).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  useEffect(() => {\n    const onClick = event => {\n      action('ds-click')(event);\n    };\n    const button = document.querySelector('ds-button');\n    button.addEventListener('ds-click', onClick);\n    return () => {\n      button.removeEventListener('ds-click', onClick);\n    };\n  });\n  return <ds-button {...args}>{args.children ?? <>Your button text is here</>}</ds-button>;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);