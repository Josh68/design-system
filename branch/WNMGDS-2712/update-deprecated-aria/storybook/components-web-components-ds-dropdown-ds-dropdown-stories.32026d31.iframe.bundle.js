"use strict";(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[3717],{"./packages/design-system/src/components/web-components/ds-dropdown/ds-dropdown.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,HtmlOptionGroups:()=>HtmlOptionGroups,HtmlOptions:()=>HtmlOptions,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ds_dropdown_stories});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),WebComponentDocTemplate=__webpack_require__("./.storybook/docs/WebComponentDocTemplate.mdx"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),preactement_define=__webpack_require__("./packages/design-system/src/components/web-components/preactement/define.ts"),Dropdown=__webpack_require__("./packages/design-system/src/components/Dropdown/Dropdown.tsx"),wrapperUtils=__webpack_require__("./packages/design-system/src/components/web-components/wrapperUtils.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Wrapper=_ref=>{let{children,options,rootId,...otherProps}=_ref;return(0,jsx_runtime.tZ)(Dropdown.L,{...otherProps,autoFocus:(0,wrapperUtils.M)(otherProps.autofocus),disabled:(0,wrapperUtils.M)(otherProps.disabled),"aria-disabled":(0,wrapperUtils.M)(otherProps.ariaDisabled),options:"string"==typeof options?JSON.parse(options):options,id:rootId,inversed:(0,wrapperUtils.M)(otherProps.inversed),children:options?void 0:children})};Wrapper.displayName="Wrapper",(0,preactement_define.O)("ds-dropdown",(()=>Wrapper),{attributes:["autofocus","aria-disabled","class-name","disabled","error-message","error-placement","field-class-name","options","label","label-class-name","label-id","hint","hint-id","inversed","name","requirement-label","root-id","size","value","default-value"],events:["onChange","onBlur"]});var storybook=__webpack_require__("./packages/design-system/src/components/web-components/storybook.tsx");const ds_dropdown_stories={title:"Web Components/Dropdown",argTypes:{autofocus:{description:"Sets the focus on the dropdown when it is first added to the document.",control:"boolean"},children:{control:!1},"class-name":{description:"Additional classes to be added to the root button element.",control:"text"},"default-value":{description:"Sets the initial selected state. Using this attribute instead of `value` means that the select will maintain its own internal selection state.",control:"text"},disabled:{description:"Disables the entire field.",control:"boolean"},"error-message":{description:"Enable the error state by providing an error message",control:"text"},"error-id":{description:"The ID of the error message applied to this field. If none is provided, the id will be derived from the `root-id` attribute.",control:"text"},"error-placement":{description:"Location of the error message relative to the field input",options:[void 0,"top","bottom"],control:{type:"radio"}},"field-class-name":{description:"Additional classes to be added to the dropdown button element",control:"text"},hint:{description:"Hint text or HTML",control:"text"},"hint-id":{description:"The ID of the hint element",control:"text"},inversed:{description:'Set to "true" to apply the "inverse" theme',control:"boolean"},label:{description:"Label text or HTML.",control:"text"},"label-class-name":{description:"Additional classes to be added to the field label",control:"text"},"label-id":{description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID will be generated.",control:"text"},name:{description:"The `name` is applied to a hidden select element that holds the selected value for the purpose of native HTML form support",control:"text"},options:{description:"The list of options to be rendered as an array of objects. If it is defined as an attribute in HTML, it needs to be stringified. Each item must have a `label` and `value`.",control:"object"},"requirement-label":{control:"text"},size:{description:'Sets the max-width of the input either to `"small"` or `"medium"`',options:[void 0,"medium","small"],control:{type:"radio"}},value:{description:"Sets the selected value. Using this attribute instead of `default-value` means the dropdown will not maintain its own internal selection state.",control:"text"}},args:{label:"Dropdown example",name:"dropdown_field",options:JSON.stringify([{label:"Confederated Tribes and Bands of the Yakama Nation",value:"1"},{label:"Cowlitz Indian Tribe",value:"4"},{label:"Lummi Tribe of the Lummi Reservation",value:"7"}])},parameters:{docs:{page:WebComponentDocTemplate.Z,description:{component:"For information about how and when to use this component, [refer to its full documentation page](https://design.cms.gov/components/dropdown/)."},componentEvents:{"ds-change":{description:"Dispatched whenever the selected value changes.",eventObjectDescription:(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("code",{children:"event.details.target.value"})," - The ",(0,jsx_runtime.tZ)("code",{children:"value"})," of the selected option"]})},"ds-blur":{description:"Dispatched whenever the dropdown loses focus."}},underlyingHtmlElements:["button"]}},decorators:[storybook.h]},Template=args=>((0,compat_module.useEffect)((()=>{const onChange=event=>{(0,dist.aD)("ds-change")(event)},onBlur=event=>{(0,dist.aD)("ds-blur")(event)},dropdown=document.querySelector("ds-dropdown");return dropdown.addEventListener("ds-change",onChange),dropdown.addEventListener("ds-blur",onBlur),()=>{dropdown.removeEventListener("ds-change",onChange),dropdown.removeEventListener("ds-blur",onBlur)}})),(0,jsx_runtime.tZ)("ds-dropdown",{...args}));Template.displayName="Template";const Default=Template.bind({}),HtmlOptions={render:Template,args:{options:void 0,label:"Select an option.",hint:"In this example, options defined as HTML.",children:(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("option",{value:"1",children:"Option 1"}),(0,jsx_runtime.tZ)("option",{value:"2",children:"Option 2"}),(0,jsx_runtime.tZ)("option",{value:"3",children:"Option 3"}),(0,jsx_runtime.tZ)("option",{value:"4",children:"Option 4"}),(0,jsx_runtime.tZ)("option",{value:"5",children:"Option 5"}),(0,jsx_runtime.tZ)("option",{value:"6",children:"Option 6"}),(0,jsx_runtime.tZ)("option",{value:"7",children:"Option 7"}),(0,jsx_runtime.tZ)("option",{value:"8","data-extra-attribute":"something",children:"Option 8"})]})}},HtmlOptionGroups={render:Template,args:{options:void 0,label:"Select an option.",hint:"In this example, options and groups are defined as HTML.",children:(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("option",{value:"",children:"- Select an option -"}),(0,jsx_runtime.BX)("optgroup",{label:"Group A",children:[(0,jsx_runtime.tZ)("option",{value:"a-1",children:"Option A-1"}),(0,jsx_runtime.tZ)("option",{value:"a-2",children:"Option A-2"}),(0,jsx_runtime.tZ)("option",{value:"a-3",children:"Option A-3"})]}),(0,jsx_runtime.BX)("optgroup",{label:"Group B","data-extra-attribute":"something",children:[(0,jsx_runtime.tZ)("option",{value:"b-1",children:"Option B-1"}),(0,jsx_runtime.tZ)("option",{value:"b-2",children:"Option B-2"}),(0,jsx_runtime.tZ)("option",{value:"b-3",children:"Option B-3"})]})]})}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  useEffect(() => {\n    const onChange = event => {\n      action('ds-change')(event);\n    };\n    const onBlur = event => {\n      action('ds-blur')(event);\n    };\n    const dropdown = document.querySelector('ds-dropdown');\n    dropdown.addEventListener('ds-change', onChange);\n    dropdown.addEventListener('ds-blur', onBlur);\n    return () => {\n      dropdown.removeEventListener('ds-change', onChange);\n      dropdown.removeEventListener('ds-blur', onBlur);\n    };\n  });\n  return <ds-dropdown {...args} />;\n}",...Default.parameters?.docs?.source}}},HtmlOptions.parameters={...HtmlOptions.parameters,docs:{...HtmlOptions.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    options: undefined,\n    label: 'Select an option.',\n    hint: 'In this example, options defined as HTML.',\n    children: htmlOptions\n  }\n}",...HtmlOptions.parameters?.docs?.source}}},HtmlOptionGroups.parameters={...HtmlOptionGroups.parameters,docs:{...HtmlOptionGroups.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: {\n    options: undefined,\n    label: 'Select an option.',\n    hint: 'In this example, options and groups are defined as HTML.',\n    children: htmlOptGroups\n  }\n}",...HtmlOptionGroups.parameters?.docs?.source}}};const __namedExportsOrder=["Default","HtmlOptions","HtmlOptionGroups"]},"./packages/design-system/src/components/web-components/wrapperUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function parseBooleanAttr(attr){return void 0!==attr&&"false"!==attr}__webpack_require__.d(__webpack_exports__,{M:()=>parseBooleanAttr})}}]);