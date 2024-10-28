/*! For license information please see components-TextField-TextField-stories.a13fdc90.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[8914],{"./packages/design-system/src/components/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>TextField,Z:()=>TextField_TextField});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),useLabelMask=__webpack_require__("./packages/design-system/src/components/TextField/useLabelMask.tsx"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const LabelMask=props=>{const field=compat_module.Children.only(props.children),{labelMask,inputProps}=(0,useLabelMask.yR)(props.labelMask,field.props),input=(0,compat_module.cloneElement)(field,inputProps);return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[labelMask,input]})},TextField_LabelMask=LabelMask;try{LabelMask.displayName="LabelMask",LabelMask.__docgenInfo={description:"",displayName:"LabelMask",props:{children:{defaultValue:null,description:"Must contain a `TextField` component",name:"children",required:!0,type:{name:"ReactNode"}},labelMask:{defaultValue:null,description:"Providing a function here will turn the text field into a label-masked field, where\nthe user input is formatted in a label as the user types and then the input field\nitself is automatically formatted when the user shifts focus away from the input.\nA custom function can be given, or one of the following built-in functions can be\nimported from the design system and passed to this component: PHONE_MASK, ZIP_MASK,\nSSN_MASK, and CURRENCY_MASK. See\n[Label-masked field](https://design.cms.gov/components/text-field/label-masked-field/)\ndocumentation page for more information.",name:"labelMask",required:!1,type:{name:"MaskFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/LabelMask.tsx#LabelMask"]={docgenInfo:LabelMask.__docgenInfo,name:"LabelMask",path:"packages/design-system/src/components/TextField/LabelMask.tsx#LabelMask"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),maskHelpers=__webpack_require__("./packages/design-system/src/components/TextField/maskHelpers.ts");const maskPattern={phone:"[0-9-]*",ssn:"[0-9-*]*",zip:"[0-9-]*",currency:"[0-9.,-]*"},maskOverlayContent={currency:"$"};class Mask extends compat_module.PureComponent{constructor(props){super(props);const field=this.field(),initialValue=field.props.value||field.props.defaultValue;this.state={value:(0,maskHelpers.in)(initialValue,props.mask)}}componentDidUpdate(prevProps){this.debouncedOnBlurEvent&&(this.field().props.onBlur(this.debouncedOnBlurEvent),this.debouncedOnBlurEvent=null);const fieldProps=this.field().props,prevField=compat_module.Children.only(prevProps.children),prevFieldProps=(0,compat_module.isValidElement)(prevField)?prevField.props:{};if(void 0!==fieldProps.value&&prevFieldProps.value!==fieldProps.value){const{mask}=this.props;if((0,maskHelpers.FF)(fieldProps.value,mask)!==(0,maskHelpers.FF)(this.state.value,mask)){const value=(0,maskHelpers.in)(fieldProps.value||"",mask);this.setState({value})}}}field(){return compat_module.Children.only(this.props.children)}handleBlur(evt,field){const value=(0,maskHelpers.in)(evt.target.value,this.props.mask),debounce=value!==this.state.value&&"function"==typeof field.props.onBlur;debounce&&(evt.persist(),this.debouncedOnBlurEvent=evt),this.setState({value}),debounce||"function"!=typeof field.props.onBlur||field.props.onBlur(evt)}handleChange(evt,field){this.setState({value:evt.target.value}),"function"==typeof field.props.onChange&&field.props.onChange(evt)}render(){const{mask}=this.props,field=this.field(),modifiedTextField=(0,compat_module.cloneElement)(field,{defaultValue:void 0,fieldClassName:classnames_default()(field.props.fieldClassName,`ds-c-field--${mask}`),onBlur:evt=>this.handleBlur(evt,field),onChange:evt=>this.handleChange(evt,field),value:this.state.value,type:"text",inputMode:"numeric",pattern:maskPattern[this.props.mask]}),maskOverlay=maskOverlayContent[mask]?(0,jsx_runtime.tZ)("div",{className:`ds-c-field__before ds-c-field__before--${mask}`,children:maskOverlayContent[mask]}):null;return(0,jsx_runtime.BX)("div",{className:`ds-c-field-mask ds-c-field-mask--${mask}`,children:[maskOverlay,modifiedTextField]})}}const TextField_Mask=Mask;try{maskValue.displayName="maskValue",maskValue.__docgenInfo={description:"Returns the value with additional masking characters, or the same value back if invalid numeric string",displayName:"maskValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/Mask.tsx#maskValue"]={docgenInfo:maskValue.__docgenInfo,name:"maskValue",path:"packages/design-system/src/components/TextField/Mask.tsx#maskValue"})}catch(__react_docgen_typescript_loader_error){}try{unmaskValue.displayName="unmaskValue",unmaskValue.__docgenInfo={description:"Remove mask characters from value, or the same value back if invalid numeric string",displayName:"unmaskValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/Mask.tsx#unmaskValue"]={docgenInfo:unmaskValue.__docgenInfo,name:"unmaskValue",path:"packages/design-system/src/components/TextField/Mask.tsx#unmaskValue"})}catch(__react_docgen_typescript_loader_error){}try{Mask.displayName="Mask",Mask.__docgenInfo={description:"",displayName:"Mask",props:{children:{defaultValue:null,description:"Must contain a `TextField` component",name:"children",required:!0,type:{name:"ReactNode"}},mask:{defaultValue:null,description:"The type of mask",name:"mask",required:!1,type:{name:"enum",value:[{value:'"currency"'},{value:'"phone"'},{value:'"ssn"'},{value:'"zip"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/Mask.tsx#Mask"]={docgenInfo:Mask.__docgenInfo,name:"Mask",path:"packages/design-system/src/components/TextField/Mask.tsx#Mask"})}catch(__react_docgen_typescript_loader_error){}var TextInput=__webpack_require__("./packages/design-system/src/components/TextField/TextInput.tsx"),cleanFieldProps=__webpack_require__("./packages/design-system/src/components/utilities/cleanFieldProps.ts"),describeField=__webpack_require__("./packages/design-system/src/components/utilities/describeField.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),Label=__webpack_require__("./packages/design-system/src/components/Label/Label.tsx"),useLabelProps=__webpack_require__("./packages/design-system/src/components/Label/useLabelProps.ts"),useHint=__webpack_require__("./packages/design-system/src/components/Hint/useHint.tsx"),useInlineError=__webpack_require__("./packages/design-system/src/components/InlineError/useInlineError.tsx");const TextField=props=>{const{id:originalId,mask,labelMask,className,...remainingProps}=props,id=(0,useId.Z)("text-field--",originalId);const{errorId,topError,bottomError,invalid}=(0,useInlineError.g)({...props,id}),{hintId,hintElement}=(0,useHint.U)({...props,id}),labelProps=(0,useLabelProps.v)({...props,id});let input=(0,jsx_runtime.tZ)(TextInput.Z,{type:TextField.defaultProps.type,...(0,cleanFieldProps.Z)(remainingProps),id,"aria-invalid":invalid,"aria-describedby":(0,describeField.Z)({...props,errorId,hintId})});return mask?input=(0,jsx_runtime.tZ)(TextField_Mask,{mask,children:input}):labelMask&&(input=(0,jsx_runtime.tZ)(TextField_LabelMask,{labelMask,children:input})),(0,jsx_runtime.BX)("div",{className:classnames_default()("ds-u-clearfix",className),children:[(0,jsx_runtime.tZ)(Label._,{...labelProps,fieldId:id}),hintElement,topError,input,bottomError]})};TextField.defaultProps={type:"text"};const TextField_TextField=TextField;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/text-field/).",displayName:"TextField",props:{ariaLabel:{defaultValue:null,description:"Apply an `aria-label` to the text field to provide additional\ncontext to assistive devices.",name:"ariaLabel",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Sets the initial value. Use this for an uncontrolled component; otherwise,\nuse the `value` property.",name:"defaultValue",required:!1,type:{name:"TextFieldDefaultValue"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},fieldClassName:{defaultValue:null,description:"",name:"fieldClassName",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A unique `id` to be used on the text field.",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `input` or `textarea` element",name:"inputRef",required:!1,type:{name:"(...args: any[]) => any"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" color scheme',name:"inversed",required:!1,type:{name:"boolean"}},labelMask:{defaultValue:null,description:"Applies date format masking to the input value entered and renders to a text field\nabove the input. Passing `true` to `valueOnly` will return just the formatted value\nentered.",name:"labelMask",required:!1,type:{name:"(rawInput: string, valueOnly?: boolean) => string"}},mask:{defaultValue:null,description:"Apply formatting to the field that's unique to the value you expect to be entered.\nDepending on the mask, the field's appearance and functionality may be affected.",name:"mask",required:!1,type:{name:"enum",value:[{value:'"currency"'},{value:'"phone"'},{value:'"ssn"'},{value:'"zip"'}]}},multiline:{defaultValue:null,description:"Whether or not the text field is a multiline text field",name:"multiline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},numeric:{defaultValue:null,description:'Sets `inputMode`, `type`, and `pattern` to improve accessibility and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.',name:"numeric",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(...args: any[]) => any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(...args: any[]) => any"}},pattern:{defaultValue:null,description:"@hide-prop HTML `input` [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"Optionally specify the number of visible text lines for the field. Only\napplicable if this is a multiline field.",name:"rows",required:!1,type:{name:"TextFieldRows"}},size:{defaultValue:null,description:"Set the max-width of the input either to `'small'` or `'medium'`.",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},type:{defaultValue:{value:"text"},description:"HTML `input` [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#<input>_types) attribute. If you are using `type=number` please use the numeric prop instead.",name:"type",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Sets the input's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `defaultValue`.",name:"value",required:!1,type:{name:"TextFieldValue"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"The ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},hintClassName:{defaultValue:null,description:"Custom CSS class name(s) for the hint element",name:"hintClassName",required:!1,type:{name:"string"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field. If none is provided, the id\nwill be derived from the `id` prop for the field.",name:"errorId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"packages/design-system/src/components/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/TextField/maskHelpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{FF:()=>unmaskValue,in:()=>maskValue});const maskDeliminatedRegex={phone:/(\d{3})(\d{1,3})?(\d+)?/,ssn:/([*\d]{3})([*\d]{1,2})?([*\d]+)?/,zip:/(\d{5})(\d*)/};function toDigitsAndAsterisks(value){return value.replace(/[^\d*]/g,"")}function isValueMaskable(value,mask){if(value&&"string"==typeof value){const hasDigits=value.match(/\d/),hasDigitsAsterisks=value.match(/[\d*]/g);if(hasDigits||hasDigitsAsterisks&&"ssn"===mask)return!0}return!1}function maskValue(){let value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",mask=arguments.length>1?arguments[1]:void 0;return isValueMaskable(value,mask)&&("currency"===mask?value=function toCurrency(value){const sign=0===value.indexOf("-")?"-":"",firstDecimalPointIndex=(value=value.replace(/[^\d.]/g,"")).indexOf(".");value=(value=value.replace(/[.]/g,((match,index)=>index>firstDecimalPointIndex?"":match))).replace(/^0+/g,"");let[whole,fractional=""]=value.split(".");return whole=""===whole?"0":whole.replace(/\B(?=(?:\d{3})+(?!\d))/g,","),""!==fractional&&(1===fractional.length?fractional=fractional.concat("0"):fractional.length>2&&(fractional=fractional.slice(0,2)),fractional="00"===fractional?"":`.${fractional}`),`${sign}${whole}${fractional}`}(value):maskDeliminatedRegex[mask]&&(value=function deliminateRegexGroups(value,rx){const matches=toDigitsAndAsterisks(value).match(rx);return matches&&matches.length>1&&(value=matches.slice(1).filter((a=>!!a)).join("-")),value}(value,maskDeliminatedRegex[mask]))),value}function unmaskValue(value,mask){if(isValueMaskable(value,mask))if("currency"===mask){const matches=value.match(/^-|[\d.]/g);matches&&(value=matches.join(""))}else maskDeliminatedRegex[mask]&&(value=toDigitsAndAsterisks(value));return value}},"./packages/design-system/src/components/TextField/TextField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllMaskedFields:()=>AllMaskedFields,DisabledField:()=>DisabledField,ErrorField:()=>ErrorField,LabelMaskedCurrency:()=>LabelMaskedCurrency,LabelMaskedPhone:()=>LabelMaskedPhone,LabelMaskedPostalCode:()=>LabelMaskedPostalCode,LabelMaskedSSN:()=>LabelMaskedSSN,MultilineField:()=>MultilineField,SingleLineField:()=>SingleLineField,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_TextField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/TextField/TextField.tsx"),_maskHelpers__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/TextField/maskHelpers.ts"),_useLabelMask__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/TextField/useLabelMask.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/TextField",component:_TextField__WEBPACK_IMPORTED_MODULE_3__.Z,args:{label:"Enter some text.",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onChange"),onBlur:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onBlur"),name:"text-field-story"},argTypes:{errorMessage:{control:"text"},hint:{control:"text"},requirementLabel:{control:"text"},value:{control:"text"}},parameters:{docs:{underlyingHtmlElements:["input"]}}};function getMaskFunction(value){switch(value){case"PHONE_MASK":return _useLabelMask__WEBPACK_IMPORTED_MODULE_4__.N_;case"ZIP_MASK":return _useLabelMask__WEBPACK_IMPORTED_MODULE_4__.AJ;case"SSN_MASK":return _useLabelMask__WEBPACK_IMPORTED_MODULE_4__.Nl;case"CURRENCY_MASK":return _useLabelMask__WEBPACK_IMPORTED_MODULE_4__.vP}}const UncontrolledTemplate={render:function Component(args){return args.labelMask&&(args.labelMask=getMaskFunction(args.labelMask)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_3__.Z,{...args})}},ControlledTemplate={render:function Component(args){const[localValue,setLocalValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(),value=args.value??localValue??"";let labelMask=args.labelMask;return labelMask&&(labelMask=getMaskFunction(args.labelMask)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_3__.Z,{...args,labelMask,value,onChange:event=>{(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onChange")(event),setLocalValue(event.currentTarget.value)}})}},SingleLineField={...UncontrolledTemplate},MultilineField={...UncontrolledTemplate,args:{multiline:!0,rows:3}},ErrorField={...UncontrolledTemplate,args:{errorMessage:"This is an example error message.",hint:"This is where you put helpful hint text."}},DisabledField={...UncontrolledTemplate,args:{disabled:!0}},disabledArg={table:{disable:!0}},AllMaskedFields={argTypes:{labelMask:disabledArg},render:function Component(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_3__.Z,{ariaLabel:"Enter monthly income amount in dollars.",labelClassName:"ds-u-margin-top--0",label:"Currency",mask:"currency",inputMode:"numeric",type:"text",name:"currency_example",onBlur:evt=>console.log("Unmasked value: ",(0,_maskHelpers__WEBPACK_IMPORTED_MODULE_5__.FF)(evt.target.value,"currency")),defaultValue:"2,500"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_3__.Z,{label:"Phone number",mask:"phone",name:"phone_example",onBlur:evt=>console.log("Unmasked value: ",(0,_maskHelpers__WEBPACK_IMPORTED_MODULE_5__.FF)(evt.target.value,"phone")),type:"tel",defaultValue:"1234567890"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_3__.Z,{label:"Social security number (SSN)",mask:"ssn",inputMode:"numeric",type:"text",name:"ssn_example",onBlur:evt=>console.log("Unmasked value: ",(0,_maskHelpers__WEBPACK_IMPORTED_MODULE_5__.FF)(evt.target.value,"ssn")),defaultValue:"123456789"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_3__.Z,{label:"Zip code",mask:"zip",inputMode:"numeric",type:"text",name:"zip_example",onBlur:evt=>console.log("Unmasked value: ",(0,_maskHelpers__WEBPACK_IMPORTED_MODULE_5__.FF)(evt.target.value,"zip")),defaultValue:"123456789"})]})}},LabelMaskedPhone={...ControlledTemplate,args:{name:"labelMask-phone",label:"Enter your phone number.",hint:"This is a 10-digit phone number where you can be reached.",labelMask:"PHONE_MASK",numeric:!0},argTypes:{mask:disabledArg}},LabelMaskedSSN={...ControlledTemplate,args:{name:"labelMask-ssn",label:"Enter your Social Security Number.",hint:"This number was administered to you by the Social Security Administration.",labelMask:"SSN_MASK",numeric:!0},argTypes:{mask:disabledArg}},LabelMaskedPostalCode={...ControlledTemplate,args:{name:"labelMask-zipcode",label:"Enter your postal service ZIP code.",hint:"This is the five-digit ZIP code where you receive your mail.",labelMask:"ZIP_MASK",numeric:!0},argTypes:{mask:disabledArg}},LabelMaskedCurrency={...ControlledTemplate,args:{name:"labelMask-currency",label:"Enter your estimated yearly income.",hint:"This should be a dollar amount.",labelMask:"CURRENCY_MASK",numeric:!0},argTypes:{mask:disabledArg}};SingleLineField.parameters={...SingleLineField.parameters,docs:{...SingleLineField.parameters?.docs,source:{originalSource:"{\n  ...UncontrolledTemplate\n}",...SingleLineField.parameters?.docs?.source}}},MultilineField.parameters={...MultilineField.parameters,docs:{...MultilineField.parameters?.docs,source:{originalSource:"{\n  ...UncontrolledTemplate,\n  args: {\n    multiline: true,\n    rows: 3\n  }\n}",...MultilineField.parameters?.docs?.source}}},ErrorField.parameters={...ErrorField.parameters,docs:{...ErrorField.parameters?.docs,source:{originalSource:"{\n  ...UncontrolledTemplate,\n  args: {\n    errorMessage: 'This is an example error message.',\n    hint: 'This is where you put helpful hint text.'\n  }\n}",...ErrorField.parameters?.docs?.source}}},DisabledField.parameters={...DisabledField.parameters,docs:{...DisabledField.parameters?.docs,source:{originalSource:"{\n  ...UncontrolledTemplate,\n  args: {\n    disabled: true\n  }\n}",...DisabledField.parameters?.docs?.source}}},AllMaskedFields.parameters={...AllMaskedFields.parameters,docs:{...AllMaskedFields.parameters?.docs,source:{originalSource:'{\n  argTypes: {\n    labelMask: disabledArg\n  },\n  render: function Component() {\n    return <>\n        <TextField ariaLabel="Enter monthly income amount in dollars." labelClassName="ds-u-margin-top--0" label="Currency" mask="currency" inputMode="numeric" type="text" name="currency_example" onBlur={evt => console.log(\'Unmasked value: \', unmaskValue(evt.target.value, \'currency\'))} defaultValue="2,500" />\n        <TextField label="Phone number" mask="phone" name="phone_example" onBlur={evt => console.log(\'Unmasked value: \', unmaskValue(evt.target.value, \'phone\'))} type="tel" defaultValue="1234567890" />\n        <TextField label="Social security number (SSN)" mask="ssn" inputMode="numeric" type="text" name="ssn_example" onBlur={evt => console.log(\'Unmasked value: \', unmaskValue(evt.target.value, \'ssn\'))} defaultValue="123456789" />\n        <TextField label="Zip code" mask="zip" inputMode="numeric" type="text" name="zip_example" onBlur={evt => console.log(\'Unmasked value: \', unmaskValue(evt.target.value, \'zip\'))} defaultValue="123456789" />\n      </>;\n  }\n}',...AllMaskedFields.parameters?.docs?.source}}},LabelMaskedPhone.parameters={...LabelMaskedPhone.parameters,docs:{...LabelMaskedPhone.parameters?.docs,source:{originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    name: 'labelMask-phone',\n    label: 'Enter your phone number.',\n    hint: 'This is a 10-digit phone number where you can be reached.',\n    labelMask: ('PHONE_MASK' as any),\n    numeric: true\n  },\n  argTypes: {\n    mask: disabledArg\n  }\n}",...LabelMaskedPhone.parameters?.docs?.source}}},LabelMaskedSSN.parameters={...LabelMaskedSSN.parameters,docs:{...LabelMaskedSSN.parameters?.docs,source:{originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    name: 'labelMask-ssn',\n    label: 'Enter your Social Security Number.',\n    hint: 'This number was administered to you by the Social Security Administration.',\n    labelMask: ('SSN_MASK' as any),\n    numeric: true\n  },\n  argTypes: {\n    mask: disabledArg\n  }\n}",...LabelMaskedSSN.parameters?.docs?.source}}},LabelMaskedPostalCode.parameters={...LabelMaskedPostalCode.parameters,docs:{...LabelMaskedPostalCode.parameters?.docs,source:{originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    name: 'labelMask-zipcode',\n    label: 'Enter your postal service ZIP code.',\n    hint: 'This is the five-digit ZIP code where you receive your mail.',\n    labelMask: ('ZIP_MASK' as any),\n    numeric: true\n  },\n  argTypes: {\n    mask: disabledArg\n  }\n}",...LabelMaskedPostalCode.parameters?.docs?.source}}},LabelMaskedCurrency.parameters={...LabelMaskedCurrency.parameters,docs:{...LabelMaskedCurrency.parameters?.docs,source:{originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    name: 'labelMask-currency',\n    label: 'Enter your estimated yearly income.',\n    hint: 'This should be a dollar amount.',\n    labelMask: ('CURRENCY_MASK' as any),\n    numeric: true\n  },\n  argTypes: {\n    mask: disabledArg\n  }\n}",...LabelMaskedCurrency.parameters?.docs?.source}}};const __namedExportsOrder=["SingleLineField","MultilineField","ErrorField","DisabledField","AllMaskedFields","LabelMaskedPhone","LabelMaskedSSN","LabelMaskedPostalCode","LabelMaskedCurrency"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);