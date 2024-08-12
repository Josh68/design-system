"use strict";(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[4535],{"./packages/design-system/src/components/DateField/SingleInputDateField.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>DateField_SingleInputDateField});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),ArrowIcon=__webpack_require__("./packages/design-system/src/components/Icons/ArrowIcon.tsx"),index_esm=__webpack_require__("./node_modules/react-day-picker/dist/index.esm.js"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function CustomDayPickerCaption(props){const{classNames,styles,labels:{labelPrevious,labelNext},locale,onMonthChange}=(0,index_esm.kD)(),{previousMonth,nextMonth,goToMonth}=(0,index_esm.HJ)(),previousLabel=labelPrevious(previousMonth,{locale}),nextLabel=labelNext(nextMonth,{locale});return(0,jsx_runtime.BX)("div",{className:classNames.caption,style:styles.caption,children:[(0,jsx_runtime.tZ)("button",{"aria-label":previousLabel,className:"ds-c-single-input-date-field__nav",onClick:()=>{previousMonth&&(goToMonth(previousMonth),onMonthChange?.(previousMonth))},type:"button",disabled:!previousMonth,children:(0,jsx_runtime.tZ)(ArrowIcon.e,{direction:"left"})}),(0,jsx_runtime.tZ)(index_esm.xg,{displayMonth:props.displayMonth,id:props.id}),(0,jsx_runtime.tZ)("button",{"aria-label":nextLabel,className:"ds-c-single-input-date-field__nav",onClick:()=>{nextMonth&&(goToMonth(nextMonth),onMonthChange?.(nextMonth))},type:"button",disabled:!nextMonth,children:(0,jsx_runtime.tZ)(ArrowIcon.e,{direction:"right"})})]})}const DateField_CustomDayPickerCaption=CustomDayPickerCaption;try{CustomDayPickerCaption.displayName="CustomDayPickerCaption",CustomDayPickerCaption.__docgenInfo={description:"Implements custom month/year navigation controls and caption for the DayPicker\ncomponent. Much of this code is copied out of the `react-day-picker` source and\nthen modified to fit our needs.",displayName:"CustomDayPickerCaption",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/DateField/CustomDayPickerCaption.tsx#CustomDayPickerCaption"]={docgenInfo:CustomDayPickerCaption.__docgenInfo,name:"CustomDayPickerCaption",path:"packages/design-system/src/components/DateField/CustomDayPickerCaption.tsx#CustomDayPickerCaption"})}catch(__react_docgen_typescript_loader_error){}var format=__webpack_require__("./node_modules/date-fns/format.mjs"),ArrowsStackedIcon=__webpack_require__("./packages/design-system/src/components/Icons/ArrowsStackedIcon.tsx"),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts");function CustomDayPickerDayContent(props){const{locale,classNames,styles,labels:{labelDay},formatters:{formatDay}}=(0,index_esm.kD)();return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("span",{"aria-hidden":"true",children:formatDay(props.date,{locale})}),(0,jsx_runtime.tZ)("span",{className:classNames.vhidden,style:styles.vhidden,children:labelDay(props.date,props.activeModifiers,{locale})})]})}try{CustomDayPickerDayContent.displayName="CustomDayPickerDayContent",CustomDayPickerDayContent.__docgenInfo={description:"Render the content of the day cell.",displayName:"CustomDayPickerDayContent",props:{date:{defaultValue:null,description:"The date representing the day.",name:"date",required:!0,type:{name:"Date"}},displayMonth:{defaultValue:null,description:"The month where the day is displayed.",name:"displayMonth",required:!0,type:{name:"Date"}},activeModifiers:{defaultValue:null,description:"The active modifiers for the given date.",name:"activeModifiers",required:!0,type:{name:"ActiveModifiers"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/DateField/CustomDayPickerDayContent.tsx#CustomDayPickerDayContent"]={docgenInfo:CustomDayPickerDayContent.__docgenInfo,name:"CustomDayPickerDayContent",path:"packages/design-system/src/components/DateField/CustomDayPickerDayContent.tsx#CustomDayPickerDayContent"})}catch(__react_docgen_typescript_loader_error){}function formatMonthCaption(month,options){return(0,format.WU)(month,"LLL",options)}function CustomDayPicker(props){return(0,jsx_runtime.tZ)(index_esm._W,{mode:"single",footer:(0,jsx_runtime.tZ)("span",{className:"ds-u-visibility--screen-reader",children:(0,i18n.t)("singleInputDateField.arrowKeyInstructions")}),captionLayout:"dropdown",components:{Caption:DateField_CustomDayPickerCaption,IconDropdown:ArrowsStackedIcon.V,DayContent:CustomDayPickerDayContent},formatters:{formatMonthCaption},...props})}const DateField_CustomDayPicker=CustomDayPicker;try{formatMonthCaption.displayName="formatMonthCaption",formatMonthCaption.__docgenInfo={description:"The default formatter for the Month caption.",displayName:"formatMonthCaption",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/DateField/CustomDayPicker.tsx#formatMonthCaption"]={docgenInfo:formatMonthCaption.__docgenInfo,name:"formatMonthCaption",path:"packages/design-system/src/components/DateField/CustomDayPicker.tsx#formatMonthCaption"})}catch(__react_docgen_typescript_loader_error){}try{CustomDayPicker.displayName="CustomDayPicker",CustomDayPicker.__docgenInfo={description:"",displayName:"CustomDayPicker",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/DateField/CustomDayPicker.tsx#CustomDayPicker"]={docgenInfo:CustomDayPicker.__docgenInfo,name:"CustomDayPicker",path:"packages/design-system/src/components/DateField/CustomDayPicker.tsx#CustomDayPicker"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),cleanFieldProps=__webpack_require__("./packages/design-system/src/components/utilities/cleanFieldProps.ts"),describeField=__webpack_require__("./packages/design-system/src/components/utilities/describeField.ts"),isMatch=__webpack_require__("./node_modules/date-fns/isMatch.mjs"),mergeIds=__webpack_require__("./packages/design-system/src/components/utilities/mergeIds.ts"),useLabelMask=__webpack_require__("./packages/design-system/src/components/TextField/useLabelMask.tsx"),useClickOutsideHandler=__webpack_require__("./packages/design-system/src/components/utilities/useClickOutsideHandler.ts"),usePressEscapeHandler=__webpack_require__("./packages/design-system/src/components/utilities/usePressEscapeHandler.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),CalendarIcon=__webpack_require__("./packages/design-system/src/components/Icons/CalendarIcon.tsx"),Label=__webpack_require__("./packages/design-system/src/components/Label/Label.tsx"),TextInput=__webpack_require__("./packages/design-system/src/components/TextField/TextInput.tsx"),useLabelProps=__webpack_require__("./packages/design-system/src/components/Label/useLabelProps.ts"),useHint=__webpack_require__("./packages/design-system/src/components/Hint/useHint.tsx"),useInlineError=__webpack_require__("./packages/design-system/src/components/InlineError/useInlineError.tsx");const SingleInputDateField=props=>{const{className,onChange,defaultMonth,fromDate,fromMonth,fromYear,toDate,toMonth,toYear,...remainingProps}=props,withPicker=(null!=fromDate||null!=fromMonth||Number.isInteger(fromYear))&&(null!=toDate||null!=toMonth||Number.isInteger(toYear)),[pickerVisible,setPickerVisible]=(0,compat_module.useState)(!1),id=(0,useId.Z)("date-field--",props.id),isControlled=void 0!==remainingProps.value,[internalValueState,setInternalValueState]=(0,compat_module.useState)(remainingProps.defaultValue),value=isControlled?remainingProps.value:internalValueState,{errorId,topError,bottomError,invalid}=(0,useInlineError.g)({...props,id}),{hintId,hintElement}=(0,useHint.U)({...props,id}),labelProps=(0,useLabelProps.v)({...props,id}),inputRef=(0,compat_module.useRef)(),{labelMask,inputProps}=(0,useLabelMask.ZP)(useLabelMask.kV,{...(0,cleanFieldProps.Z)(remainingProps),value,id,onChange:event=>{const updatedValue=event.currentTarget.value;onChange&&onChange(updatedValue,(0,useLabelMask.kV)(updatedValue,!0)),isControlled||setInternalValueState(updatedValue)},type:"text",inputRef:el=>{inputRef.current=el},"aria-invalid":invalid,"aria-describedby":(0,describeField.Z)({...props,errorId,hintId})}),dayPickerRef=(0,compat_module.useRef)(),calendarButtonRef=(0,compat_module.useRef)();(0,useClickOutsideHandler.Z)([dayPickerRef,calendarButtonRef],(()=>setPickerVisible(!1))),(0,usePressEscapeHandler.Z)(dayPickerRef,(()=>{setPickerVisible(!1),inputRef.current?.focus()}));const dateString=(0,useLabelMask.kV)(props.value,!0),date=(0,isMatch.B)(dateString,"MM/dd/yyyy")?new Date(dateString):null;return(0,jsx_runtime.BX)("div",{className:classnames_default()("ds-c-single-input-date-field",withPicker&&"ds-c-single-input-date-field--with-picker",className),children:[(0,jsx_runtime.tZ)(Label._,{...labelProps,fieldId:id}),hintElement,topError,labelMask,(0,jsx_runtime.BX)("div",{className:"ds-c-single-input-date-field__field-wrapper",children:[(0,jsx_runtime.tZ)(TextInput.Z,{...inputProps}),withPicker&&(0,jsx_runtime.tZ)("button",{className:"ds-c-single-input-date-field__button",onClick:()=>setPickerVisible(!pickerVisible),type:"button",ref:calendarButtonRef,"aria-describedby":(0,mergeIds.Z)(labelProps.id,hintId),children:(0,jsx_runtime.tZ)(CalendarIcon.Q,{ariaHidden:!1,title:(0,i18n.t)(pickerVisible?"singleInputDateField.close":"singleInputDateField.open"),id:`${id}__icon`})})]}),pickerVisible&&(0,jsx_runtime.tZ)("div",{ref:dayPickerRef,role:"dialog",children:(0,jsx_runtime.tZ)(DateField_CustomDayPicker,{selected:date,onSelect:date=>{const updatedValue=`${date.getMonth()+1}/${date.getDate()}/${date.getFullYear()}`,maskedValue=(0,useLabelMask.kV)(updatedValue);onChange&&onChange(maskedValue,(0,useLabelMask.kV)(updatedValue,!0)),isControlled||setInternalValueState(maskedValue),setPickerVisible(!1),inputRef.current?.focus()},defaultMonth:date??defaultMonth,fromDate,fromMonth,fromYear,toDate,toMonth,toYear})}),bottomError]})},DateField_SingleInputDateField=SingleInputDateField;try{SingleInputDateField.displayName="SingleInputDateField",SingleInputDateField.__docgenInfo={description:"For information about how and when to use this component, refer to the\n[Single Input Date Field](https://design.cms.gov/components/date-field/single-input-date-field/) and\n[Calendar Picker](https://design.cms.gov/components/date-field/date-picker/) documentation pages.",displayName:"SingleInputDateField",props:{name:{defaultValue:null,description:"The `input` field's `name` attribute",name:"name",required:!0,type:{name:"string"}},onBlur:{defaultValue:null,description:"Called anytime any date input is blurred",name:"onBlur",required:!1,type:{name:"(event: FocusEvent<HTMLInputElement, Element>) => any"}},onChange:{defaultValue:null,description:"Called anytime any date input is changed. This function is called with two arguments.\nThe first argument should be used to update whatever state your application uses to\nsupply back to this component's `value` prop in a _controlled component_ pattern.\n@param updatedValue - The input's new value\n@param formattedValue - The input's new value with date formatting applied, included\nfor convenience. Do not use this value as the component's `value` prop. An appropriate\nuse for this value would be to run date-validation checks against it.",name:"onChange",required:!1,type:{name:"(updatedValue: string, formattedValue: string) => any"}},id:{defaultValue:null,description:"A unique ID for this element. A unique ID will be generated if one isn't provided.",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" color scheme',name:"inversed",required:!1,type:{name:"boolean"}},value:{defaultValue:null,description:"Sets the input's `value`. Use in combination with an `onChange` handler to implement\na _controlled component_ pattern. This component expects the `value` to match\nwhatever string the user types (i.e., the first argument provided to your `onChange`\nhandler).",name:"value",required:!1,type:{name:"string"}},defaultValue:{defaultValue:null,description:"Sets the initial value. Use this for an uncontrolled component; otherwise,\nuse the `value` property.",name:"defaultValue",required:!1,type:{name:"string"}},defaultMonth:{defaultValue:null,description:"The initial month to show in the calendar picker. If not provided, defaults to the\nmonth of the currently selected date.",name:"defaultMonth",required:!1,type:{name:"Date"}},fromDate:{defaultValue:null,description:"Earliest day to start month navigation in the calendar picker.\n(This does not restrict dates entered manually.)",name:"fromDate",required:!1,type:{name:"Date"}},fromMonth:{defaultValue:null,description:"Earliest month to start month navigation in the calendar picker.\n(This does not restrict dates entered manually.)",name:"fromMonth",required:!1,type:{name:"Date"}},fromYear:{defaultValue:null,description:"Earliest year to start month navigation in the calendar picker.\n(This does not restrict dates entered manually.)",name:"fromYear",required:!1,type:{name:"number"}},toDate:{defaultValue:null,description:"Latest day to end month navigation in the calendar picker.\n(This does not restrict dates entered manually.)",name:"toDate",required:!1,type:{name:"Date"}},toMonth:{defaultValue:null,description:"Latest month to end month navigation in the calendar picker.\n(This does not restrict dates entered manually.)",name:"toMonth",required:!1,type:{name:"Date"}},toYear:{defaultValue:null,description:"Latest year to end month navigation in the calendar picker.\n(This does not restrict dates entered manually.)",name:"toYear",required:!1,type:{name:"number"}},ariaLabel:{defaultValue:null,description:"Apply an `aria-label` to the text field to provide additional\ncontext to assistive devices.",name:"ariaLabel",required:!1,type:{name:"string"}},numeric:{defaultValue:null,description:'Sets `inputMode`, `type`, and `pattern` to improve accessibility and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.',name:"numeric",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"Set the max-width of the input either to `'small'` or `'medium'`.",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}},fieldClassName:{defaultValue:null,description:"Additional classes to be added to the field element",name:"fieldClassName",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"(...args: any[]) => any"}},multiline:{defaultValue:null,description:"Whether or not the text field is a multiline text field",name:"multiline",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Optionally specify the number of visible text lines for the field. Only\napplicable if this is a multiline field.",name:"rows",required:!1,type:{name:"TextInputRows"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"The ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field. If none is provided, the id\nwill be derived from the `id` prop for the field.",name:"errorId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/DateField/SingleInputDateField.tsx#SingleInputDateField"]={docgenInfo:SingleInputDateField.__docgenInfo,name:"SingleInputDateField",path:"packages/design-system/src/components/DateField/SingleInputDateField.tsx#SingleInputDateField"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/ArrowIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{e:()=>ArrowIcon});var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",direction:"right",viewBox:"0 0 320 512"};function ArrowIcon(props){const direction=props.direction||defaultProps.direction,iconCssClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-icon--arrow",`ds-c-icon--arrow-${direction}`,props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(`icons.${direction}Arrow`),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})}try{ArrowIcon.displayName="ArrowIcon",ArrowIcon.__docgenInfo={description:"",displayName:"ArrowIcon",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"down"'},{value:'"left"'},{value:'"right"'},{value:'"up"'}]}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/ArrowIcon.tsx#ArrowIcon"]={docgenInfo:ArrowIcon.__docgenInfo,name:"ArrowIcon",path:"packages/design-system/src/components/Icons/ArrowIcon.tsx#ArrowIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/ArrowsStackedIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>ArrowsStackedIcon});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"0 0 10 14"};function ArrowsStackedIcon(props){const iconCssClasses=`ds-c-icon--arrows-stacked ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.arrowsStacked"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M.626 6h8.747a.624.624 0 00.443-1.067L5.44.183a.614.614 0 00-.875 0L.184 4.934a.614.614 0 000 .876.604.604 0 00.442.19zm8.747 2H.626a.604.604 0 00-.442.181.614.614 0 000 .876l4.38 4.76a.614.614 0 00.876 0l4.376-4.75A.624.624 0 009.373 8z",fillRule:"evenodd"})})}try{ArrowsStackedIcon.displayName="ArrowsStackedIcon",ArrowsStackedIcon.__docgenInfo={description:"",displayName:"ArrowsStackedIcon",props:{ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/ArrowsStackedIcon.tsx#ArrowsStackedIcon"]={docgenInfo:ArrowsStackedIcon.__docgenInfo,name:"ArrowsStackedIcon",path:"packages/design-system/src/components/Icons/ArrowsStackedIcon.tsx#ArrowsStackedIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/CalendarIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Q:()=>CalendarIcon});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"0 0 448 512"};function CalendarIcon(props){const iconCssClasses=`ds-c-icon--calendar ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.calendar"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M152 64H296V24C296 10.75 306.7 0 320 0C333.3 0 344 10.75 344 24V64H384C419.3 64 448 92.65 448 128V448C448 483.3 419.3 512 384 512H64C28.65 512 0 483.3 0 448V128C0 92.65 28.65 64 64 64H104V24C104 10.75 114.7 0 128 0C141.3 0 152 10.75 152 24V64zM48 448C48 456.8 55.16 464 64 464H384C392.8 464 400 456.8 400 448V192H48V448z"})})}try{CalendarIcon.displayName="CalendarIcon",CalendarIcon.__docgenInfo={description:"",displayName:"CalendarIcon",props:{ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/CalendarIcon.tsx#CalendarIcon"]={docgenInfo:CalendarIcon.__docgenInfo,name:"CalendarIcon",path:"packages/design-system/src/components/Icons/CalendarIcon.tsx#CalendarIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/utilities/useClickOutsideHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");const __WEBPACK_DEFAULT_EXPORT__=function useClickOutsideHandler(insideRefs,handler){function handleClickOutside(event){insideRefs.some((ref=>ref.current?.contains(event.target)))||handler(event)}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>(document.addEventListener("mousedown",handleClickOutside),document.addEventListener("touchstart",handleClickOutside),()=>{document.removeEventListener("mousedown",handleClickOutside),document.removeEventListener("touchstart",handleClickOutside)})),[handleClickOutside])}},"./packages/design-system/src/components/utilities/usePressEscapeHandler.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");const __WEBPACK_DEFAULT_EXPORT__=function usePressEscapeHandler(ref,handler){function handleEscapeKey(event){27!==event.keyCode&&"Escape"!==event.key||handler(event)}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{const node=ref?ref.current:document;if(node)return node.addEventListener("keydown",handleEscapeKey),()=>{node.removeEventListener("keydown",handleEscapeKey)}}),[handleEscapeKey])}},"./packages/design-system/src/components/DateField/SingleInputDateField.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,UncontrolledComponent:()=>UncontrolledComponent,WithError:()=>WithError,WithPicker:()=>WithPicker,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_SingleInputDateField__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/DateField/SingleInputDateField.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/SingleInputDateField",component:_SingleInputDateField__WEBPACK_IMPORTED_MODULE_3__.Z,args:{hint:"If you were born on a leap day, entering the date will either crash our servers or open a portal to an alternate dimension.",label:"Enter your date of birth.",name:"single-input-date-field"},argTypes:{errorMessage:{control:"text"},hint:{control:"text"},requirementLabel:{control:"text"}},parameters:{docs:{underlyingHtmlElements:["input"]}}},UncontrolledTemplate={render:function Component(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_SingleInputDateField__WEBPACK_IMPORTED_MODULE_3__.Z,{...args})}},ControlledTemplate={render:function Component(args){const[dateString,updateDate]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)();return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_SingleInputDateField__WEBPACK_IMPORTED_MODULE_3__.Z,{...args,value:dateString??"",onChange:function(){(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onChange")(...arguments),updateDate(arguments.length<=0?void 0:arguments[0])}})}},Default={...ControlledTemplate},WithPicker={...ControlledTemplate,args:{label:"What day did you move?",hint:"This date should be within the past 60 days in order to qualify.",fromYear:2023,toDate:new Date("2023-02-15T21:56:34.272Z")}},WithError={...ControlledTemplate,args:{errorMessage:"This is an example error message.",...WithPicker.args}},UncontrolledComponent={...WithPicker,...UncontrolledTemplate};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  ...ControlledTemplate\n}",...Default.parameters?.docs?.source}}},WithPicker.parameters={...WithPicker.parameters,docs:{...WithPicker.parameters?.docs,source:{originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    label: 'What day did you move?',\n    hint: 'This date should be within the past 60 days in order to qualify.',\n    fromYear: 2023,\n    // TODO: Due to some unknown issue with this story that causes us to lose args\n    // defined with query parameters, we can't supply a specific date in the\n    // browser interaction tests in order to get consistent screenshots. We want\n    // to set this to an arbitrary date in the past so it always takes a screenshot\n    // of the same calendar view every time. If we can solve the root problem, we\n    // can move this setting of the toDate to the `.test.interaction.ts` file.\n    toDate: new Date('2023-02-15T21:56:34.272Z')\n  }\n}",...WithPicker.parameters?.docs?.source}}},WithError.parameters={...WithError.parameters,docs:{...WithError.parameters?.docs,source:{originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    errorMessage: 'This is an example error message.',\n    ...WithPicker.args\n  }\n}",...WithError.parameters?.docs?.source}}},UncontrolledComponent.parameters={...UncontrolledComponent.parameters,docs:{...UncontrolledComponent.parameters?.docs,source:{originalSource:"{\n  ...WithPicker,\n  ...UncontrolledTemplate\n}",...UncontrolledComponent.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithPicker","WithError","UncontrolledComponent"]}}]);