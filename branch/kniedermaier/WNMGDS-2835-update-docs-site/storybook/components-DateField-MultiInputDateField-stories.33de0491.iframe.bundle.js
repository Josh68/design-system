/*! For license information please see components-DateField-MultiInputDateField-stories.33de0491.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[4379],{"./packages/design-system/src/components/DateField/MultiInputDateField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:()=>Controlled,Default:()=>Default,Inverted:()=>Inverted,WithError:()=>WithError,__namedExportsOrder:()=>__namedExportsOrder,default:()=>MultiInputDateField_stories});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),TextField=__webpack_require__("./packages/design-system/src/components/TextField/TextField.tsx"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),uniqueId=__webpack_require__("./node_modules/lodash/uniqueId.js"),uniqueId_default=__webpack_require__.n(uniqueId),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");class DateInput extends compat_module.PureComponent{constructor(props){super(props),this.handleBlur=this.handleBlur.bind(this),this.handleChange=this.handleChange.bind(this),this.id=props.id??uniqueId_default()("date-input--")}formatDate(){if(this.props.dateFormatter&&this.monthInput&&this.dayInput&&this.yearInput){const values={month:this.monthInput.value,day:this.dayInput.value,year:this.yearInput.value};return this.props.dateFormatter(values)}}handleBlur(evt){this.props.onBlur&&this.props.onBlur(evt,this.formatDate()),this.props.onComponentBlur&&this.handleComponentBlur(evt)}handleChange(evt){this.props.onChange(evt,this.formatDate())}handleComponentBlur(evt){setTimeout((()=>{document.activeElement!==this.dayInput&&document.activeElement!==this.monthInput&&document.activeElement!==this.yearInput&&this.props.onComponentBlur(evt,this.formatDate())}),20)}renderField(type,maxLength){const sharedTextFieldProps={className:"ds-l-col--auto",labelClassName:"ds-c-datefield__label",disabled:this.props.disabled,inversed:this.props.inversed,onBlur:(this.props.onBlur||this.props.onComponentBlur)&&this.handleBlur,onChange:this.props.onChange&&this.handleChange,numeric:!0};return(0,jsx_runtime.tZ)(TextField.Z,{...sharedTextFieldProps,defaultValue:this.props[`${type}DefaultValue`],value:this.props[`${type}Value`],label:this.props[`${type}Label`]??(0,i18n.t)(`dateField.${type}Label`),name:this.props[`${type}Name`],maxLength,fieldClassName:classnames_default()(`ds-c-field--${type}`,{"ds-c-field--error":this.props[`${type}Invalid`]}),id:`${this.id}__${type}`,inputRef:el=>{this[`${type}Input`]=el;const ref=this.props[`${type}FieldRef`];"function"==typeof ref?ref(el):ref&&(ref.current=el)},autoComplete:this.props.autoComplete&&`bday-${type}`,"aria-invalid":this.props[`${type}Invalid`]})}render(){return(0,jsx_runtime.BX)("div",{className:"ds-c-datefield__container ds-l-form-row",children:[this.renderField("month",2),(0,jsx_runtime.tZ)("span",{className:"ds-c-datefield__separator",children:"/"}),this.renderField("day",2),(0,jsx_runtime.tZ)("span",{className:"ds-c-datefield__separator",children:"/"}),this.renderField("year",4)]})}}DateInput.displayName="DateInput";const DateField_DateInput=DateInput;try{DateInput.displayName="DateInput",DateInput.__docgenInfo={description:"",displayName:"DateInput",props:{autoComplete:{defaultValue:null,description:"Adds `autocomplete` attributes `bday-day`, `bday-month` and `bday-year` to the corresponding `<DateInput>` inputs",name:"autoComplete",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classes to be added to the root fieldset element",name:"className",required:!1,type:{name:"string"}},dateFormatter:{defaultValue:null,description:"Optional method to format the `input` field values. If this\nmethod is provided, the returned value will be passed as a second argument\nto the `onBlur` and `onChange` callbacks. This method receives an object as\nits only argument, in the shape of: `{ day, month, year }`\nBy default `dateFormatter` will be set to the `defaultDateFormatter` function, which prevents days/months more than 2 digits & years more than 4 digits.",name:"dateFormatter",required:!1,type:{name:"(...args: any[]) => any"}},disabled:{defaultValue:null,description:"Disables all three input fields.",name:"disabled",required:!1,type:{name:"boolean"}},inversed:{defaultValue:null,description:'Applies the "inverse" UI theme',name:"inversed",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"A unique ID prefix for all the text fields",name:"id",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Called anytime any date input is blurred",name:"onBlur",required:!1,type:{name:"(...args: any[]) => any"}},onComponentBlur:{defaultValue:null,description:"Called when any date input is blurred and the focus does not land on one\nof the other date inputs inside this component (i.e., when the whole\ncomponent loses focus)",name:"onComponentBlur",required:!1,type:{name:"(...args: any[]) => any"}},onChange:{defaultValue:null,description:"Called anytime any date input is changed",name:"onChange",required:!1,type:{name:"(...args: any[]) => any"}},dayLabel:{defaultValue:null,description:"Label for the day field",name:"dayLabel",required:!1,type:{name:"ReactNode"}},dayName:{defaultValue:null,description:"`name` for the day `input` field",name:"dayName",required:!0,type:{name:"string"}},dayDefaultValue:{defaultValue:null,description:"Initial value for the day `input` field. Use this for an uncontrolled\ncomponent; otherwise, use the `dayValue` property.",name:"dayDefaultValue",required:!1,type:{name:"DateInputDayDefaultValue"}},dayFieldRef:{defaultValue:null,description:"Access a reference to the day `input`",name:"dayFieldRef",required:!1,type:{name:"MutableRefObject<any> | ((...args: any[]) => any)"}},dayInvalid:{defaultValue:null,description:"Apply error styling to the day `input`",name:"dayInvalid",required:!1,type:{name:"boolean"}},dayValue:{defaultValue:null,description:"Sets the day input's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `dayDefaultValue`.",name:"dayValue",required:!1,type:{name:"DateInputDayValue"}},monthLabel:{defaultValue:null,description:"Label for the month field",name:"monthLabel",required:!1,type:{name:"ReactNode"}},monthName:{defaultValue:null,description:"`name` for the month `input` field",name:"monthName",required:!0,type:{name:"string"}},monthDefaultValue:{defaultValue:null,description:"Initial value for the month `input` field. Use this for an uncontrolled\ncomponent; otherwise, use the `monthValue` property.",name:"monthDefaultValue",required:!1,type:{name:"DateInputMonthDefaultValue"}},monthFieldRef:{defaultValue:null,description:"Access a reference to the month `input`",name:"monthFieldRef",required:!1,type:{name:"MutableRefObject<any> | ((...args: any[]) => any)"}},monthInvalid:{defaultValue:null,description:"Apply error styling to the month `input`",name:"monthInvalid",required:!1,type:{name:"boolean"}},monthValue:{defaultValue:null,description:"Sets the month input's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `monthDefaultValue`.",name:"monthValue",required:!1,type:{name:"DateInputMonthValue"}},yearDefaultValue:{defaultValue:null,description:"Initial value for the year `input` field. Use this for an uncontrolled\ncomponent; otherwise, use the `yearValue` property.",name:"yearDefaultValue",required:!1,type:{name:"DateInputYearDefaultValue"}},yearFieldRef:{defaultValue:null,description:"Access a reference to the year `input`",name:"yearFieldRef",required:!1,type:{name:"MutableRefObject<any> | ((...args: any[]) => any)"}},yearInvalid:{defaultValue:null,description:"Apply error styling to the year `input`",name:"yearInvalid",required:!1,type:{name:"boolean"}},yearLabel:{defaultValue:null,description:"Label for the year `input` field",name:"yearLabel",required:!1,type:{name:"ReactNode"}},yearName:{defaultValue:null,description:"`name` for the year field",name:"yearName",required:!0,type:{name:"string"}},yearValue:{defaultValue:null,description:"Sets the year input's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `yearDefaultValue`.",name:"yearValue",required:!1,type:{name:"DateInputYearValue"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/DateField/DateInput.tsx#DateInput"]={docgenInfo:DateInput.__docgenInfo,name:"DateInput",path:"packages/design-system/src/components/DateField/DateInput.tsx#DateInput"})}catch(__react_docgen_typescript_loader_error){}const DateField_defaultDateFormatter=dateObject=>(_ref=>{let{day,month,year}=_ref;return{day:day.length>2?day.substring(0,2):day,month:month.length>2?month.substring(0,2):month,year:year.length>4?year.substring(0,4):year}})(dateObject);var cleanFieldProps=__webpack_require__("./packages/design-system/src/components/utilities/cleanFieldProps.ts"),describeField=__webpack_require__("./packages/design-system/src/components/utilities/describeField.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),Label=__webpack_require__("./packages/design-system/src/components/Label/Label.tsx"),useLabelProps=__webpack_require__("./packages/design-system/src/components/Label/useLabelProps.ts"),useHint=__webpack_require__("./packages/design-system/src/components/Hint/useHint.tsx"),useInlineError=__webpack_require__("./packages/design-system/src/components/InlineError/useInlineError.tsx");function MultiInputDateField(props){const id=(0,useId.Z)("date-field--",props.id),{errorId,topError,bottomError,invalid}=(0,useInlineError.g)({...props,id}),{hintId,hintElement}=(0,useHint.U)({hint:(0,i18n.t)("dateField.hint"),...props,id}),labelProps=(0,useLabelProps.v)({label:(0,i18n.t)("dateField.label"),...props,id}),fieldProps={dayName:"day",monthName:"month",yearName:"year",dateFormatter:DateField_defaultDateFormatter,...(0,cleanFieldProps.Z)(props),id};return(0,jsx_runtime.BX)("fieldset",{"aria-invalid":invalid,"aria-describedby":(0,describeField.Z)({...props,hintId,errorId}),className:classnames_default()("ds-c-fieldset",props.className),children:[(0,jsx_runtime.tZ)(Label._,{component:"legend",...labelProps}),hintElement,topError,(0,jsx_runtime.tZ)(DateField_DateInput,{...fieldProps}),bottomError]})}MultiInputDateField.displayName="MultiInputDateField";const DateField_MultiInputDateField=MultiInputDateField;try{MultiInputDateField.displayName="MultiInputDateField",MultiInputDateField.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/date-field/multi-input-date-field/).",displayName:"MultiInputDateField",props:{autoComplete:{defaultValue:null,description:"Adds `autocomplete` attributes `bday-day`, `bday-month` and `bday-year` to the corresponding `<MultiInputDateField>` inputs",name:"autoComplete",required:!1,type:{name:"boolean"}},dateFormatter:{defaultValue:null,description:"Optional method to format the `input` field values. If this\nmethod is provided, the returned value will be passed as a second argument\nto the `onBlur` and `onChange` callbacks. This method receives an object as\nits only argument, in the shape of: `{ day, month, year }`\n\nBy default `dateFormatter` will be set to the `defaultDateFormatter` function, which prevents days/months more than 2 digits & years more than 4 digits.",name:"dateFormatter",required:!1,type:{name:"(...args: any[]) => any"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},onBlur:{defaultValue:null,description:"Called anytime any date input is blurred",name:"onBlur",required:!1,type:{name:"(...args: any[]) => any"}},onComponentBlur:{defaultValue:null,description:"Called when any date input is blurred and the focus does not land on one\nof the other date inputs inside this component (i.e., when the whole\ncomponent loses focus)",name:"onComponentBlur",required:!1,type:{name:"(...args: any[]) => any"}},onChange:{defaultValue:null,description:"Called anytime any date input is changed",name:"onChange",required:!1,type:{name:"(...args: any[]) => any"}},id:{defaultValue:null,description:"A unique ID prefix for all the text fields",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" color scheme',name:"inversed",required:!1,type:{name:"boolean"}},dayLabel:{defaultValue:null,description:"Label for the day field",name:"dayLabel",required:!1,type:{name:"ReactNode"}},dayName:{defaultValue:null,description:"`name` for the day `input` field",name:"dayName",required:!1,type:{name:"string"}},dayDefaultValue:{defaultValue:null,description:"Initial value for the day `input` field. Use this for an uncontrolled\ncomponent; otherwise, use the `dayValue` property.",name:"dayDefaultValue",required:!1,type:{name:"DateFieldDayDefaultValue"}},dayFieldRef:{defaultValue:null,description:"Access a reference to the day `input`",name:"dayFieldRef",required:!1,type:{name:"(...args: any[]) => any"}},dayInvalid:{defaultValue:null,description:"Apply error styling to the day `input`",name:"dayInvalid",required:!1,type:{name:"boolean"}},dayValue:{defaultValue:null,description:"Sets the day input's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `dayDefaultValue`.",name:"dayValue",required:!1,type:{name:"DateFieldDayValue"}},monthLabel:{defaultValue:null,description:"Label for the month field",name:"monthLabel",required:!1,type:{name:"ReactNode"}},monthName:{defaultValue:null,description:"`name` for the month `input` field",name:"monthName",required:!1,type:{name:"string"}},monthDefaultValue:{defaultValue:null,description:"Initial value for the month `input` field. Use this for an uncontrolled\ncomponent; otherwise, use the `monthValue` property.",name:"monthDefaultValue",required:!1,type:{name:"DateFieldMonthDefaultValue"}},monthFieldRef:{defaultValue:null,description:"Access a reference to the month `input`",name:"monthFieldRef",required:!1,type:{name:"(...args: any[]) => any"}},monthInvalid:{defaultValue:null,description:"Apply error styling to the month `input`",name:"monthInvalid",required:!1,type:{name:"boolean"}},monthValue:{defaultValue:null,description:"Sets the month input's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `monthDefaultValue`.",name:"monthValue",required:!1,type:{name:"DateFieldMonthValue"}},yearDefaultValue:{defaultValue:null,description:"Initial value for the year `input` field. Use this for an uncontrolled\ncomponent; otherwise, use the `yearValue` property.",name:"yearDefaultValue",required:!1,type:{name:"DateFieldYearDefaultValue"}},yearFieldRef:{defaultValue:null,description:"Access a reference to the year `input`",name:"yearFieldRef",required:!1,type:{name:"(...args: any[]) => any"}},yearInvalid:{defaultValue:null,description:"Apply error styling to the year `input`",name:"yearInvalid",required:!1,type:{name:"boolean"}},yearLabel:{defaultValue:null,description:"Label for the year `input` field",name:"yearLabel",required:!1,type:{name:"ReactNode"}},yearName:{defaultValue:null,description:"`name` for the year field",name:"yearName",required:!1,type:{name:"string"}},yearValue:{defaultValue:null,description:"Sets the year input's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `yearDefaultValue`.",name:"yearValue",required:!1,type:{name:"DateFieldYearValue"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"The ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field. If none is provided, the id\nwill be derived from the `id` prop for the field.",name:"errorId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/DateField/MultiInputDateField.tsx#MultiInputDateField"]={docgenInfo:MultiInputDateField.__docgenInfo,name:"MultiInputDateField",path:"packages/design-system/src/components/DateField/MultiInputDateField.tsx#MultiInputDateField"})}catch(__react_docgen_typescript_loader_error){}const MultiInputDateField_stories={title:"Components/MultiInputDateField",component:DateField_MultiInputDateField,argTypes:{errorMessage:{control:"text"},hint:{control:"text"},requirementLabel:{control:"text"}},args:{label:"Enter your date of birth."}},Default={args:{monthDefaultValue:"10",dayDefaultValue:"31",yearDefaultValue:"1965"}},WithError={args:{errorMessage:"Please enter a year in the past",monthDefaultValue:"10",dayDefaultValue:"31",yearDefaultValue:"2050",yearInvalid:!0}},Controlled={args:{hint:"In this example, the month, day, and year values are controlled by the parent component."},render:function Component(args){const[dateState,setDateState]=(0,compat_module.useState)({month:"10",day:"30",year:"1980"});return(0,jsx_runtime.tZ)(DateField_MultiInputDateField,{...args,monthValue:dateState.month,dayValue:dateState.day,yearValue:dateState.year,onChange:(e,dateObject)=>setDateState(dateObject)})}},Inverted={args:{errorMessage:"Please enter a year in the past",monthDefaultValue:"10",dayDefaultValue:"31",yearDefaultValue:"2050",yearInvalid:!0,inversed:!0},parameters:{onDark:!0,layout:"fullscreen"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    monthDefaultValue: '10',\n    dayDefaultValue: '31',\n    yearDefaultValue: '1965'\n  }\n}",...Default.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  args: {\n    errorMessage: 'Please enter a year in the past',\n    monthDefaultValue: '10',\n    dayDefaultValue: '31',\n    yearDefaultValue: '2050',\n    yearInvalid: true\n  }\n}",...WithError.parameters?.docs?.source}}},Controlled.parameters={...Controlled.parameters,docs:{...Controlled.parameters?.docs,source:{originalSource:"{\n  args: {\n    hint: 'In this example, the month, day, and year values are controlled by the parent component.'\n  },\n  render: function Component(args) {\n    const [dateState, setDateState] = useState({\n      month: '10',\n      day: '30',\n      year: '1980'\n    });\n    return <MultiInputDateField {...args} monthValue={dateState.month} dayValue={dateState.day} yearValue={dateState.year} onChange={(e, dateObject) => setDateState(dateObject)} />;\n  }\n}",...Controlled.parameters?.docs?.source}}},Inverted.parameters={...Inverted.parameters,docs:{...Inverted.parameters?.docs,source:{originalSource:"{\n  args: {\n    errorMessage: 'Please enter a year in the past',\n    monthDefaultValue: '10',\n    dayDefaultValue: '31',\n    yearDefaultValue: '2050',\n    yearInvalid: true,\n    inversed: true\n  },\n  parameters: {\n    // Must supply `layout: 'fullscreen'` when we use `onDark: true`\n    onDark: true,\n    layout: 'fullscreen'\n  }\n}",...Inverted.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithError","Controlled","Inverted"]},"./packages/design-system/src/components/TextField/TextField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{n:()=>TextField,Z:()=>TextField_TextField});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),useLabelMask=__webpack_require__("./packages/design-system/src/components/TextField/useLabelMask.tsx"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const LabelMask=props=>{const field=compat_module.Children.only(props.children),{labelMask,inputProps}=(0,useLabelMask.yR)(props.labelMask,field.props),input=(0,compat_module.cloneElement)(field,inputProps);return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[labelMask,input]})},TextField_LabelMask=LabelMask;try{LabelMask.displayName="LabelMask",LabelMask.__docgenInfo={description:"",displayName:"LabelMask",props:{children:{defaultValue:null,description:"Must contain a `TextField` component",name:"children",required:!0,type:{name:"ReactNode"}},labelMask:{defaultValue:null,description:"Providing a function here will turn the text field into a label-masked field, where\nthe user input is formatted in a label as the user types and then the input field\nitself is automatically formatted when the user shifts focus away from the input.\nA custom function can be given, or one of the following built-in functions can be\nimported from the design system and passed to this component: PHONE_MASK, ZIP_MASK,\nSSN_MASK, and CURRENCY_MASK. See\n[Label-masked field](https://design.cms.gov/components/text-field/label-masked-field/)\ndocumentation page for more information.",name:"labelMask",required:!1,type:{name:"MaskFunction"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/LabelMask.tsx#LabelMask"]={docgenInfo:LabelMask.__docgenInfo,name:"LabelMask",path:"packages/design-system/src/components/TextField/LabelMask.tsx#LabelMask"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),maskHelpers=__webpack_require__("./packages/design-system/src/components/TextField/maskHelpers.ts");const maskPattern={phone:"[0-9-]*",ssn:"[0-9-*]*",zip:"[0-9-]*",currency:"[0-9.,-]*"},maskOverlayContent={currency:"$"};class Mask extends compat_module.PureComponent{constructor(props){super(props);const field=this.field(),initialValue=field.props.value||field.props.defaultValue;this.state={value:(0,maskHelpers.in)(initialValue,props.mask)}}componentDidUpdate(prevProps){this.debouncedOnBlurEvent&&(this.field().props.onBlur(this.debouncedOnBlurEvent),this.debouncedOnBlurEvent=null);const fieldProps=this.field().props,prevField=compat_module.Children.only(prevProps.children),prevFieldProps=(0,compat_module.isValidElement)(prevField)?prevField.props:{};if(void 0!==fieldProps.value&&prevFieldProps.value!==fieldProps.value){const{mask}=this.props;if((0,maskHelpers.FF)(fieldProps.value,mask)!==(0,maskHelpers.FF)(this.state.value,mask)){const value=(0,maskHelpers.in)(fieldProps.value||"",mask);this.setState({value})}}}field(){return compat_module.Children.only(this.props.children)}handleBlur(evt,field){const value=(0,maskHelpers.in)(evt.target.value,this.props.mask),debounce=value!==this.state.value&&"function"==typeof field.props.onBlur;debounce&&(evt.persist(),this.debouncedOnBlurEvent=evt),this.setState({value}),debounce||"function"!=typeof field.props.onBlur||field.props.onBlur(evt)}handleChange(evt,field){this.setState({value:evt.target.value}),"function"==typeof field.props.onChange&&field.props.onChange(evt)}render(){const{mask}=this.props,field=this.field(),modifiedTextField=(0,compat_module.cloneElement)(field,{defaultValue:void 0,fieldClassName:classnames_default()(field.props.fieldClassName,`ds-c-field--${mask}`),onBlur:evt=>this.handleBlur(evt,field),onChange:evt=>this.handleChange(evt,field),value:this.state.value,type:"text",inputMode:"numeric",pattern:maskPattern[this.props.mask]}),maskOverlay=maskOverlayContent[mask]?(0,jsx_runtime.tZ)("div",{className:`ds-c-field__before ds-c-field__before--${mask}`,children:maskOverlayContent[mask]}):null;return(0,jsx_runtime.BX)("div",{className:`ds-c-field-mask ds-c-field-mask--${mask}`,children:[maskOverlay,modifiedTextField]})}}Mask.displayName="Mask";const TextField_Mask=Mask;try{maskValue.displayName="maskValue",maskValue.__docgenInfo={description:"Returns the value with additional masking characters, or the same value back if invalid numeric string",displayName:"maskValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/Mask.tsx#maskValue"]={docgenInfo:maskValue.__docgenInfo,name:"maskValue",path:"packages/design-system/src/components/TextField/Mask.tsx#maskValue"})}catch(__react_docgen_typescript_loader_error){}try{unmaskValue.displayName="unmaskValue",unmaskValue.__docgenInfo={description:"Remove mask characters from value, or the same value back if invalid numeric string",displayName:"unmaskValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/Mask.tsx#unmaskValue"]={docgenInfo:unmaskValue.__docgenInfo,name:"unmaskValue",path:"packages/design-system/src/components/TextField/Mask.tsx#unmaskValue"})}catch(__react_docgen_typescript_loader_error){}try{Mask.displayName="Mask",Mask.__docgenInfo={description:"",displayName:"Mask",props:{children:{defaultValue:null,description:"Must contain a `TextField` component",name:"children",required:!0,type:{name:"ReactNode"}},mask:{defaultValue:null,description:"The type of mask",name:"mask",required:!1,type:{name:"enum",value:[{value:'"currency"'},{value:'"phone"'},{value:'"ssn"'},{value:'"zip"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/Mask.tsx#Mask"]={docgenInfo:Mask.__docgenInfo,name:"Mask",path:"packages/design-system/src/components/TextField/Mask.tsx#Mask"})}catch(__react_docgen_typescript_loader_error){}var TextInput=__webpack_require__("./packages/design-system/src/components/TextField/TextInput.tsx"),cleanFieldProps=__webpack_require__("./packages/design-system/src/components/utilities/cleanFieldProps.ts"),describeField=__webpack_require__("./packages/design-system/src/components/utilities/describeField.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),Label=__webpack_require__("./packages/design-system/src/components/Label/Label.tsx"),useLabelProps=__webpack_require__("./packages/design-system/src/components/Label/useLabelProps.ts"),useHint=__webpack_require__("./packages/design-system/src/components/Hint/useHint.tsx"),useInlineError=__webpack_require__("./packages/design-system/src/components/InlineError/useInlineError.tsx");const TextField=props=>{const{id:originalId,mask,labelMask,className,...remainingProps}=props,id=(0,useId.Z)("text-field--",originalId);const{errorId,topError,bottomError,invalid}=(0,useInlineError.g)({...props,id}),{hintId,hintElement}=(0,useHint.U)({...props,id}),labelProps=(0,useLabelProps.v)({...props,id});let input=(0,jsx_runtime.tZ)(TextInput.Z,{type:TextField.defaultProps.type,...(0,cleanFieldProps.Z)(remainingProps),id,"aria-invalid":invalid,"aria-describedby":(0,describeField.Z)({...props,errorId,hintId})});return mask?input=(0,jsx_runtime.tZ)(TextField_Mask,{mask,children:input}):labelMask&&(input=(0,jsx_runtime.tZ)(TextField_LabelMask,{labelMask,children:input})),(0,jsx_runtime.BX)("div",{className:classnames_default()("ds-u-clearfix",className),children:[(0,jsx_runtime.tZ)(Label._,{...labelProps,fieldId:id}),hintElement,topError,input,bottomError]})};TextField.displayName="TextField",TextField.defaultProps={type:"text"};const TextField_TextField=TextField;try{TextField.displayName="TextField",TextField.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/text-field/).",displayName:"TextField",props:{ariaLabel:{defaultValue:null,description:"Apply an `aria-label` to the text field to provide additional\ncontext to assistive devices.",name:"ariaLabel",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"",name:"autoFocus",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Sets the initial value. Use this for an uncontrolled component; otherwise,\nuse the `value` property.",name:"defaultValue",required:!1,type:{name:"TextFieldDefaultValue"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},fieldClassName:{defaultValue:null,description:"",name:"fieldClassName",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A unique `id` to be used on the text field.",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `input` or `textarea` element",name:"inputRef",required:!1,type:{name:"(...args: any[]) => any"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" color scheme',name:"inversed",required:!1,type:{name:"boolean"}},labelMask:{defaultValue:null,description:"Applies date format masking to the input value entered and renders to a text field\nabove the input. Passing `true` to `valueOnly` will return just the formatted value\nentered.",name:"labelMask",required:!1,type:{name:"(rawInput: string, valueOnly?: boolean) => string"}},mask:{defaultValue:null,description:"Apply formatting to the field that's unique to the value you expect to be entered.\nDepending on the mask, the field's appearance and functionality may be affected.",name:"mask",required:!1,type:{name:"enum",value:[{value:'"currency"'},{value:'"phone"'},{value:'"ssn"'},{value:'"zip"'}]}},multiline:{defaultValue:null,description:"Whether or not the text field is a multiline text field",name:"multiline",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"",name:"name",required:!0,type:{name:"string"}},numeric:{defaultValue:null,description:'Sets `inputMode`, `type`, and `pattern` to improve accessibility and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.',name:"numeric",required:!1,type:{name:"boolean"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(...args: any[]) => any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(...args: any[]) => any"}},pattern:{defaultValue:null,description:"@hide-prop HTML `input` [pattern](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#htmlattrdefpattern).",name:"pattern",required:!1,type:{name:"string"}},rows:{defaultValue:null,description:"Optionally specify the number of visible text lines for the field. Only\napplicable if this is a multiline field.",name:"rows",required:!1,type:{name:"TextFieldRows"}},size:{defaultValue:null,description:"Set the max-width of the input either to `'small'` or `'medium'`.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},type:{defaultValue:{value:"text"},description:"HTML `input` [type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#<input>_types) attribute. If you are using `type=number` please use the numeric prop instead.",name:"type",required:!1,type:{name:"string"}},value:{defaultValue:null,description:"Sets the input's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `defaultValue`.",name:"value",required:!1,type:{name:"TextFieldValue"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"The ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field. If none is provided, the id\nwill be derived from the `id` prop for the field.",name:"errorId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/TextField.tsx#TextField"]={docgenInfo:TextField.__docgenInfo,name:"TextField",path:"packages/design-system/src/components/TextField/TextField.tsx#TextField"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/TextField/maskHelpers.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{FF:()=>unmaskValue,in:()=>maskValue});const maskDeliminatedRegex={phone:/(\d{3})(\d{1,3})?(\d+)?/,ssn:/([*\d]{3})([*\d]{1,2})?([*\d]+)?/,zip:/(\d{5})(\d*)/};function toDigitsAndAsterisks(value){return value.replace(/[^\d*]/g,"")}function isValueMaskable(value,mask){if(value&&"string"==typeof value){const hasDigits=value.match(/\d/),hasDigitsAsterisks=value.match(/[\d*]/g);if(hasDigits||hasDigitsAsterisks&&"ssn"===mask)return!0}return!1}function maskValue(){let value=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",mask=arguments.length>1?arguments[1]:void 0;return isValueMaskable(value,mask)&&("currency"===mask?value=function toCurrency(value){const sign=0===value.indexOf("-")?"-":"",firstDecimalPointIndex=(value=value.replace(/[^\d.]/g,"")).indexOf(".");value=(value=value.replace(/[.]/g,((match,index)=>index>firstDecimalPointIndex?"":match))).replace(/^0+/g,"");let[whole,fractional=""]=value.split(".");return whole=""===whole?"0":whole.replace(/\B(?=(?:\d{3})+(?!\d))/g,","),""!==fractional&&(1===fractional.length?fractional=fractional.concat("0"):fractional.length>2&&(fractional=fractional.slice(0,2)),fractional="00"===fractional?"":`.${fractional}`),`${sign}${whole}${fractional}`}(value):maskDeliminatedRegex[mask]&&(value=function deliminateRegexGroups(value,rx){const matches=toDigitsAndAsterisks(value).match(rx);return matches&&matches.length>1&&(value=matches.slice(1).filter((a=>!!a)).join("-")),value}(value,maskDeliminatedRegex[mask]))),value}function unmaskValue(value,mask){if(isValueMaskable(value,mask))if("currency"===mask){const matches=value.match(/^-|[\d.]/g);matches&&(value=matches.join(""))}else maskDeliminatedRegex[mask]&&(value=toDigitsAndAsterisks(value));return value}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);