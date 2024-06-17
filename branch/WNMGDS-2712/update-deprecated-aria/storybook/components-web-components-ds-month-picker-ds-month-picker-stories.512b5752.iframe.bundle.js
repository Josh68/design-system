"use strict";(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[3838],{"./node_modules/@storybook/addon-actions/dist/index.mjs":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{aD:()=>chunk_OPEUWD42.aD});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./packages/design-system/src/components/web-components/ds-month-picker/ds-month-picker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,MonthOverrides:()=>MonthOverrides,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ds_month_picker_stories});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),WebComponentDocTemplate=__webpack_require__("./.storybook/docs/WebComponentDocTemplate.mdx"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),storybook=__webpack_require__("./packages/design-system/src/components/web-components/storybook.tsx"),preactement_define=__webpack_require__("./packages/design-system/src/components/web-components/preactement/define.ts"),MonthPicker=__webpack_require__("./packages/design-system/src/components/MonthPicker/MonthPicker.tsx"),wrapperUtils=__webpack_require__("./packages/design-system/src/components/web-components/wrapperUtils.ts"),shared_attributes_form=__webpack_require__("./packages/design-system/src/components/web-components/shared-attributes/form.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const attributes=["button-variation","class-name","clear-all-text","default-selected-months","disabled-months","inversed","name","root-id","select-all-text",...shared_attributes_form.z],Wrapper=_ref=>{let{children,rootId,defaultSelectedMonths,disabledMonths,selectedMonths,...otherProps}=_ref;return(0,jsx_runtime.tZ)(MonthPicker.l,{...otherProps,id:rootId,inversed:(0,wrapperUtils.M)(otherProps.inversed),defaultSelectedMonths:"string"==typeof defaultSelectedMonths?JSON.parse(defaultSelectedMonths):defaultSelectedMonths,disabledMonths:"string"==typeof disabledMonths?JSON.parse(disabledMonths):disabledMonths,selectedMonths:"string"==typeof selectedMonths?JSON.parse(selectedMonths):selectedMonths,children})};Wrapper.displayName="Wrapper",(0,preactement_define.O)("ds-month-picker",(()=>Wrapper),{attributes,events:["onChange","onSelectAll","onClearAll"]});const ds_month_picker_stories_elements=(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("input",{type:"checkbox",value:"10",defaultChecked:!0}),(0,jsx_runtime.tZ)("input",{type:"checkbox",value:"11",defaultChecked:!0,disabled:!0}),(0,jsx_runtime.tZ)("input",{type:"checkbox",value:"12",disabled:!0})]}),ds_month_picker_stories={title:"Web Components/ds-month-picker",argTypes:{children:{control:!1},"button-variation":{description:"Variation string to be applied to buttons. See [Button component](https://design.cms.gov/storybook/?path=/docs/components-button--docs).",options:[void 0,"solid","ghost"],control:{type:"radio"}},"class-name":{description:"Additional classes to be added to the root element.",control:"text"},"clear-all-text":{description:'The text for the "Clear all" button for internationalization.',control:"text"},"default-selected-months":{description:"Array of month numbers, where `1` is January, and any month included is selected by default. Sets the initial checked state for the 12 month checkboxes. Use this for an uncontrolled component; otherwise, use the `selectedMonths` property. Alternatively, you can apply `checked` to `<input>` element children.",control:"text"},"disabled-months":{description:"Array of month numbers, where `1` is January, and any month included is disabled for selection. Alternatively, you can apply `disabled` to `<input>` element children.",control:"text"},"error-id":{description:"The ID of the error message applied to this field. If none is provided, the id will be derived from the `root-id` attribute.",control:"text"},"error-message-class-name":{description:"Additional classes to be added to the error message.",control:"text"},"error-message":{description:"Enable the error state by providing an error message.",control:"text"},"error-placement":{description:"Location of the error message relative to the field input",options:[void 0,"top","bottom"],control:{type:"radio"}},"hint-id":{description:"The ID of the hint element",control:"text"},hint:{description:"Hint text or HTML",control:"text"},inversed:{description:'Set to "true" to apply the "inverse" scheme',control:"boolean"},"label-class-name":{description:"Additional classes to be added to the field label",control:"text"},"label-id":{description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID will be generated.",control:"text"},label:{description:"Label text or HTML.",control:"text"},name:{description:"The `input` field's `name` attribute.",control:"text"},"requirement-label":{control:"text"},"root-id":{description:"A unique ID for this element. A unique ID will be generated if one isn't provided.",control:"text"},"select-all-text":{description:'The text for the "Select all" button for internationalization.',control:"text"}},args:{label:"Month Picker example","requirement-label":"Required.",hint:"Culpa minim deserunt anim consequat amet sit.",name:"month-picker_field",children:void 0},parameters:{docs:{page:WebComponentDocTemplate.Z,description:{component:"For information about how and when to use this component, [refer to its full documentation page](https://design.cms.gov/components/month-picker/)."},componentEvents:{"ds-change":{description:'A callback function that\'s invoked when a month\'s checked state is changed. Note: This callback is not called when a month is selected or deselected via the "Select all" or "Clear all" buttons – use the `onSelectAll` and `onClearAll` event handlers for those instances.'},"ds-clear-all":{description:'A callback function that\'s invoked when the "Clear all" button is pressed.'},"ds-select-all":{description:'A callback function that\'s invoked when the "Select all" button is pressed.'}},sharedAttrLists:["form"]}},decorators:[storybook.h]},Template=args=>((0,compat_module.useEffect)((()=>{const onChange=event=>{(0,dist.aD)("ds-change")(event)},onClearAll=event=>{(0,dist.aD)("ds-clear-all")(event)},onSelectAll=event=>{(0,dist.aD)("ds-select-all")(event)},monthPicker=document.querySelector("ds-month-picker");return monthPicker.addEventListener("ds-change",onChange),monthPicker.addEventListener("ds-clear-all",onClearAll),monthPicker.addEventListener("ds-select-all",onSelectAll),()=>{monthPicker.removeEventListener("ds-change",onChange),monthPicker.removeEventListener("ds-clear-all",onClearAll),monthPicker.removeEventListener("ds-select-all",onSelectAll)}})),(0,jsx_runtime.tZ)("ds-month-picker",{...args}));Template.displayName="Template";const Default=Template.bind({}),MonthOverrides={render:Template,args:{"requirement-label":void 0,hint:"This example demonstrates how to override the default checked and/or disabled options inside your component.",children:ds_month_picker_stories_elements}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  useEffect(() => {\n    const onChange = event => {\n      action('ds-change')(event);\n    };\n    const onClearAll = event => {\n      action('ds-clear-all')(event);\n    };\n    const onSelectAll = event => {\n      action('ds-select-all')(event);\n    };\n    const monthPicker = document.querySelector('ds-month-picker');\n    monthPicker.addEventListener('ds-change', onChange);\n    monthPicker.addEventListener('ds-clear-all', onClearAll);\n    monthPicker.addEventListener('ds-select-all', onSelectAll);\n    return () => {\n      monthPicker.removeEventListener('ds-change', onChange);\n      monthPicker.removeEventListener('ds-clear-all', onClearAll);\n      monthPicker.removeEventListener('ds-select-all', onSelectAll);\n    };\n  });\n  return <ds-month-picker {...args} />;\n}",...Default.parameters?.docs?.source}}},MonthOverrides.parameters={...MonthOverrides.parameters,docs:{...MonthOverrides.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    'requirement-label': undefined,\n    hint: 'This example demonstrates how to override the default checked and/or disabled options inside your component.',\n    children: elements\n  }\n}",...MonthOverrides.parameters?.docs?.source}}};const __namedExportsOrder=["Default","MonthOverrides"]},"./packages/design-system/src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/src/components/utilities/mergeRefs.ts"),config=__webpack_require__("./packages/design-system/src/components/config.ts"),getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts"),events=__webpack_require__("./packages/design-system/src/components/analytics/events.ts"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Button=props=>{const{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,onAnalyticsEvent,children,className,inputRef,isAlternate,onClick,onDark,size,variation,...otherProps}=props,{contentRef,sendButtonEvent}=function useButtonAnalytics(_ref){let{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,href,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,type,variation}=_ref;const contentRef=(0,compat_module.useRef)();return{contentRef,sendButtonEvent:function sendButtonEvent(){if(!0!==analytics&&(!(0,config.vc)().buttonSendsAnalytics||!1===analytics))return;const buttonText=analyticsLabelOverride??(0,getAnalyticsContentFromRefs.L)([contentRef]),buttonStyle=variation??"default",buttonType=type??"button",buttonParentHeading=analyticsParentHeading??" ",buttonParentType=analyticsParentType??" ";return onAnalyticsEvent({event_name:"button_engagement",event_extension:events.RW,text:buttonText,button_style:buttonStyle,button_type:href?"link":buttonType,parent_component_heading:buttonParentHeading,parent_component_type:buttonParentType,...href?{link_url:href}:{}})}}}(props),ComponentType=props.href?"a":"button",colorSchemeClass=isAlternate&&"ds-c-button--alternate",modeClass=onDark&&"ds-c-button--on-dark",sizeClass=size&&`ds-c-button--${size}`,variationClass=variation&&`ds-c-button--${variation}`,attrs={...otherProps,className:classnames_default()("ds-c-button",colorSchemeClass,modeClass,sizeClass,variationClass,className)};function handleClick(e){props.disabled||(sendButtonEvent(),onClick&&onClick(e))}return"button"!==ComponentType&&(delete attrs.disabled,delete attrs.type,props.disabled&&(attrs.role="link",attrs["aria-disabled"]=!0,delete attrs.href)),(0,jsx_runtime.tZ)(ComponentType,{ref:(0,mergeRefs.Z)([inputRef,contentRef]),onClick:handleClick,onKeyPress:"a"===ComponentType?function handleKeyPress(e){" "===e.key&&handleClick(e)}:void 0,...attrs,children})};Button.displayName="Button",Button.defaultProps={isAlternate:!1,onDark:!1,type:"button"};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/button/).",displayName:"Button",props:{children:{defaultValue:null,description:"Label text or HTML",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root button element.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"When provided, the root component will render as an `<a>` element\nrather than `button`.",name:"href",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `button` or `a` element",name:"inputRef",required:!1,type:{name:"ButtonRef"}},isAlternate:{defaultValue:{value:"false"},description:"Applies the alternate color to a Button. By default, Button\nuses the `main` color.",name:"isAlternate",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).\nNot called when the Button is disabled.",name:"onClick",required:!1,type:{name:"(...args: any[]) => any"}},onDark:{defaultValue:{value:"false"},description:"Defines a color palette best used when Button is placed on a dark\nbackground-color. By default, Button uses a light color palette.",name:"onDark",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'}]}},type:{defaultValue:{value:"'button' as const"},description:"Button [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variation:{defaultValue:null,description:"A string corresponding to Button variation classes.",name:"variation",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"ghost"'}]}},analytics:{defaultValue:null,description:"Analytics events tracking is enabled by default. Set this value to `false` to\ndisable tracking for this component instance.",name:"analytics",required:!1,type:{name:"boolean"}},analyticsLabelOverride:{defaultValue:null,description:"An override for the dynamic content sent to analytics services. By default this\ncontent comes from the heading.\n\nIn cases where this component’s heading may contain **sensitive information**,\nuse this prop to override what is sent to analytics.",name:"analyticsLabelOverride",required:!1,type:{name:"string"}},onAnalyticsEvent:{defaultValue:null,description:"Optional callback that will intercept analytics events for this component.\nIf none is specified, the design system will use the default analytics\nfunction, which can be overwritten globally with the `defaultAnalyticsFunction`\nconfig property.",name:"onAnalyticsEvent",required:!1,type:{name:"(event: AnalyticsEvent) => void"}},analyticsParentHeading:{defaultValue:null,description:"If needed for analytics, pass heading text of parent component of button.",name:"analyticsParentHeading",required:!1,type:{name:"string"}},analyticsParentType:{defaultValue:null,description:"If needed for analytics, pass type of parent component of button.",name:"analyticsParentType",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement> & Ref<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/design-system/src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/InlineError/useInlineError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>useInlineError});var _InlineError__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/InlineError/InlineError.tsx"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_config__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/config.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function useInlineError(props){const errorId=props.errorId??`${props.id}__error`,{errorMessage,errorMessageClassName,errorPlacement=(0,_config__WEBPACK_IMPORTED_MODULE_2__.vc)().errorPlacementDefault,inversed}=props,errorElement=errorMessage?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_InlineError__WEBPACK_IMPORTED_MODULE_3__.Z,{id:errorId,inversed,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(errorMessageClassName,"bottom"===errorPlacement&&"ds-c-inline-error--bottom"),children:errorMessage}):void 0;let topError,bottomError;"top"===errorPlacement?topError=errorElement:bottomError=errorElement;return{errorId:errorMessage?errorId:void 0,invalid:props["aria-invalid"]??!!errorMessage,topError,bottomError}}try{useInlineError.displayName="useInlineError",useInlineError.__docgenInfo={description:"Hook that takes the props for a form field component, extracts the props relevant\nto the error message, and conditionally renders an `InlineError` in the `topError`\nor `bottomError` property based on the `errorPlacement` and the presence of an\n`errorMessage`.",displayName:"useInlineError",props:{errorId:{defaultValue:null,description:"The ID of the error message applied to this field. If none is provided, the id\nwill be derived from the `id` prop for the field.",name:"errorId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A unique `id` for the field element",name:"id",required:!0,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" color scheme',name:"inversed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/InlineError/useInlineError.tsx#useInlineError"]={docgenInfo:useInlineError.__docgenInfo,name:"useInlineError",path:"packages/design-system/src/components/InlineError/useInlineError.tsx#useInlineError"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/MonthPicker/MonthPicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>MonthPicker,Z:()=>MonthPicker_MonthPicker});var Button=__webpack_require__("./packages/design-system/src/components/Button/Button.tsx"),Choice=__webpack_require__("./packages/design-system/src/components/ChoiceList/Choice.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),describeField=__webpack_require__("./packages/design-system/src/components/utilities/describeField.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),Label=__webpack_require__("./packages/design-system/src/components/Label/Label.tsx");function getMonthNames(locale){let short=!(arguments.length>1&&void 0!==arguments[1])||arguments[1];const months=[];for(let i=0;i<12;i++){const date=new Date;date.setMonth(i,1),months.push(date.toLocaleString(locale,{month:short?"short":"long"}))}return months}var i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),useLabelProps=__webpack_require__("./packages/design-system/src/components/Label/useLabelProps.ts"),useHint=__webpack_require__("./packages/design-system/src/components/Hint/useHint.tsx"),useInlineError=__webpack_require__("./packages/design-system/src/components/InlineError/useInlineError.tsx"),findElementsOfType=__webpack_require__("./packages/design-system/src/components/utilities/findElementsOfType.ts");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const monthNumbers=[1,2,3,4,5,6,7,8,9,10,11,12],MonthPicker=props=>{const propsFromHtml=function parseChildren(node){const elements=(0,findElementsOfType.D)(["input"],node);if(elements.length){const selectedMonths=[],disabledMonths=[];for(const element of elements){const attrs=element.props,monthNumber=parseInt(attrs.value);if(monthNumber<1||monthNumber>12)throw new Error("Each month input needs a value from 1 to 12.");void 0!==attrs.checked&&selectedMonths.push(monthNumber),void 0!==attrs.disabled&&disabledMonths.push(monthNumber)}return{selectedMonths,disabledMonths}}}(props.children),defaultSelectedMonths=propsFromHtml?propsFromHtml.selectedMonths:props.defaultSelectedMonths,disabledMonths=(propsFromHtml?propsFromHtml.disabledMonths:props.disabledMonths)??[],id=(0,useId.Z)("month-picker--",props.id),locale=(0,i18n.I7)((0,i18n.G3)(),"US"),months=getMonthNames(locale),monthsLong=getMonthNames(locale,!1),isControlled=void 0!==props.selectedMonths,[selectedMonthsState,setSelectedMonthsState]=(0,compat_module.useState)(defaultSelectedMonths??[]),selectedMonths=isControlled?props.selectedMonths:selectedMonthsState;function handleChange(event){if(props.onChange&&props.onChange(event),!isControlled){const month=parseInt(event.target.value),newSelectedMonths=selectedMonths.slice();newSelectedMonths.includes(month)?newSelectedMonths.splice(newSelectedMonths.indexOf(month),1):newSelectedMonths.push(month),setSelectedMonthsState(newSelectedMonths)}}const selectAllPressed=selectedMonths.length===12-disabledMonths.length,clearAllPressed=0===selectedMonths.length,{errorId,topError,bottomError,invalid}=(0,useInlineError.g)({...props,id}),{hintId,hintElement}=(0,useHint.U)({...props,id}),labelProps=(0,useLabelProps.v)({...props,id});return(0,jsx_runtime.BX)("fieldset",{"aria-invalid":invalid,"aria-describedby":(0,describeField.Z)({...props,hintId,errorId}),className:classnames_default()("ds-c-fieldset","ds-c-month-picker",props.className),children:[(0,jsx_runtime.tZ)(Label._,{component:"legend",...labelProps}),hintElement,topError,(0,jsx_runtime.BX)("div",{className:"ds-c-month-picker__buttons ds-u-clearfix",children:[(0,jsx_runtime.tZ)(Button.Z,{"aria-pressed":selectAllPressed,size:"small",className:"ds-c-month-picker__button",onClick:function handleSelectAll(event){props.onSelectAll&&props.onSelectAll(event),isControlled||setSelectedMonthsState(monthNumbers.filter((m=>!disabledMonths.includes(m)||selectedMonthsState.includes(m))))},onDark:props.inversed,variation:props.buttonVariation,children:props.selectAllText??(0,i18n.t)("monthPicker.selectAllText")}),(0,jsx_runtime.tZ)(Button.Z,{"aria-pressed":clearAllPressed,size:"small",className:"ds-c-month-picker__button",onClick:function handleClearAll(event){props.onClearAll&&props.onClearAll(event),isControlled||setSelectedMonthsState(monthNumbers.filter((m=>!!disabledMonths.includes(m)&&selectedMonthsState.includes(m))))},onDark:props.inversed,variation:props.buttonVariation,children:props.clearAllText??(0,i18n.t)("monthPicker.clearAllText")})]}),(0,jsx_runtime.tZ)("div",{className:"ds-c-month-picker__months",children:(0,jsx_runtime.tZ)("ol",{role:"list",className:"ds-c-list--bare ds-c-month-picker__months-list",children:months.map(((month,i)=>(0,jsx_runtime.tZ)("li",{children:(0,jsx_runtime.tZ)(Choice.Z,{"aria-label":monthsLong[i],checked:selectedMonths.includes(i+1),className:"ds-c-month-picker__month",disabled:disabledMonths.includes(i+1),inversed:props.inversed,onChange:handleChange,name:props.name,type:"checkbox",value:i+1,label:month,id:`${id}__choice--${i+1}`})},month)))})}),bottomError]})};MonthPicker.displayName="MonthPicker";const MonthPicker_MonthPicker=MonthPicker;try{MonthPicker.displayName="MonthPicker",MonthPicker.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/month-picker/).",displayName:"MonthPicker",props:{name:{defaultValue:null,description:"The `input` field's `name` attribute",name:"name",required:!0,type:{name:"string"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},buttonVariation:{defaultValue:null,description:"Variation string to be applied to buttons. See [Button component](https://design.cms.gov/storybook/?path=/docs/components-button--docs)",name:"buttonVariation",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"ghost"'}]}},disabledMonths:{defaultValue:null,description:"Array of month numbers, where `1` is January, and any month included\nis disabled for selection.",name:"disabledMonths",required:!1,type:{name:"number[]"}},selectedMonths:{defaultValue:null,description:"Array of month numbers, where `1` is January, and any month included\nis selected. This will render a read-only field. If the field should\nbe mutable, use `defaultSelectedMonths`.",name:"selectedMonths",required:!1,type:{name:"number[]"}},defaultSelectedMonths:{defaultValue:null,description:"Array of month numbers, where `1` is January, and any month included\nis selected by default. Sets the initial checked state for the 12 month\ncheckboxes. Use this for an uncontrolled component; otherwise, use the\n`selectedMonths` property.",name:"defaultSelectedMonths",required:!1,type:{name:"number[]"}},id:{defaultValue:null,description:"A unique ID for this element. A unique ID will be generated if one isn't provided.",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" color scheme',name:"inversed",required:!1,type:{name:"boolean"}},onChange:{defaultValue:null,description:'A callback function that\'s invoked when a month\'s checked state is changed.\nNote: This callback is not called when a month is selected or deselected\nvia the "Select all" or "Clear all" buttons – use the `onSelectAll` and\n`onClearAll` event handlers for those instances.',name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => any"}},onSelectAll:{defaultValue:null,description:"",name:"onSelectAll",required:!1,type:{name:"(...args: any[]) => any"}},onClearAll:{defaultValue:null,description:"",name:"onClearAll",required:!1,type:{name:"(...args: any[]) => any"}},selectAllText:{defaultValue:null,description:'The text for the "Select all" button for internationalization',name:"selectAllText",required:!1,type:{name:"string"}},clearAllText:{defaultValue:null,description:'The text for the "Clear all" button for internationalization',name:"clearAllText",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"The ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field. If none is provided, the id\nwill be derived from the `id` prop for the field.",name:"errorId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/MonthPicker/MonthPicker.tsx#MonthPicker"]={docgenInfo:MonthPicker.__docgenInfo,name:"MonthPicker",path:"packages/design-system/src/components/MonthPicker/MonthPicker.tsx#MonthPicker"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/utilities/findElementsOfType.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{D:()=>findElementsOfType});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function findElementsOfType(types,node){return node&&((0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(node)||Array.isArray(node))?(0,react__WEBPACK_IMPORTED_MODULE_0__.isValidElement)(node)&&types.includes(node.type)?[node]:Array.isArray(node)?node.reduce(((acc,child)=>[...acc,...findElementsOfType(types,child)]),[]):findElementsOfType(types,node.props?.children):[]}},"./packages/design-system/src/components/web-components/shared-attributes/form.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>formAttrs});const formAttrs=["label","label-class-name","label-id","hint","hint-id","requirement-label","error-id","error-placement","error-message","error-message-class-name"]},"./packages/design-system/src/components/web-components/wrapperUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function parseBooleanAttr(attr){return void 0!==attr&&"false"!==attr}function parseIntegerAttr(attr){if(void 0!==attr)return parseInt(attr)}__webpack_require__.d(__webpack_exports__,{M:()=>parseBooleanAttr,b:()=>parseIntegerAttr})}}]);