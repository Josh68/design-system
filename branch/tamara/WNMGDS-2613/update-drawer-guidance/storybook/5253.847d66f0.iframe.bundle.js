"use strict";(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[5253],{"./packages/design-system/src/components/Hint/Hint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>Hint});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Hint=_ref=>{let{children,className,id,inversed,requirementLabel,...otherProps}=_ref;const hintClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-hint",inversed&&"ds-c-hint--inverse",className);let hintPadding;return requirementLabel&&children&&("string"==typeof requirementLabel&&(requirementLabel=requirementLabel.trim().replace(/\.$/,""),requirementLabel+="."),hintPadding=" "),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("p",{...otherProps,id,className:hintClasses,children:[requirementLabel,hintPadding,children]})};try{Hint.displayName="Hint",Hint.__docgenInfo={description:"Hints are used in conjunction with a Label to describe individual form fields\nor fieldsets. They are built in to all form fields in the design system, but\nthey can also be used on their own to create custom fields.\n\nFor information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/hint/).",displayName:"Hint",props:{children:{defaultValue:null,description:"Hint text or HTML",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the hint element. This is required in order to link the element\nto a field input via `aria-describedby`",name:"id",required:!0,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement (ie. "Optional", or "Required").\nIn most cases, this should be used to indicate which fields are optional.\nSee the [form guidelines](https://design.cms.gov/patterns/Forms/forms/) for more info.',name:"requirementLabel",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Hint/Hint.tsx#Hint"]={docgenInfo:Hint.__docgenInfo,name:"Hint",path:"packages/design-system/src/components/Hint/Hint.tsx#Hint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Hint/useHint.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>useHint});var _Hint__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Hint/Hint.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function useHint(props){const{hint,inversed,requirementLabel,hintClassName}=props;let hintElement,hintId;return(hint||requirementLabel)&&(hintId=props.hintId??`${props.id}__hint`,hintElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_Hint__WEBPACK_IMPORTED_MODULE_1__.k,{requirementLabel,inversed,id:hintId,className:hintClassName,children:hint})),{hintId,hintElement}}try{useHint.displayName="useHint",useHint.__docgenInfo={description:"Hook that takes the props for a form field component, extracts the props relevant\nto the Hint, and conditionally renders the hint if it is needed.",displayName:"useHint",props:{hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"The ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A unique `id` for the field element",name:"id",required:!0,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" color scheme',name:"inversed",required:!1,type:{name:"boolean"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},hintClassName:{defaultValue:null,description:"Custom CSS class name(s) for the hint element",name:"hintClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Hint/useHint.tsx#useHint"]={docgenInfo:useHint.__docgenInfo,name:"useHint",path:"packages/design-system/src/components/Hint/useHint.tsx#useHint"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/AlertCircleIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>AlertCircleIcon});var _i18n__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"37 2 135 135"};function AlertCircleIcon(props){const iconCssClasses=`ds-c-icon--alert-circle ${props.className||""}`;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_1__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_2__.t)("icons.alertCircle"),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.821 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.351 2.798 21.82 8.392 31.408 5.595 9.584 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771C167.773 94.82 170.57 84.35 170.57 73c0-11.351-2.797-21.822-8.39-31.408zm-43.75 70.433c0 .761-.246 1.398-.734 1.914s-1.086.773-1.793.773H100.26c-.706 0-1.331-.271-1.874-.814-.543-.543-.814-1.168-.814-1.873V96.546c0-.706.271-1.331.814-1.874.543-.543 1.168-.814 1.874-.814h15.643c.707 0 1.306.258 1.793.773.488.518.734 1.154.734 1.915v15.479zm-.164-28.026c-.055.543-.339 1.019-.854 1.426-.517.407-1.154.61-1.914.61h-15.073c-.761 0-1.413-.203-1.956-.61-.543-.407-.815-.883-.815-1.426l-1.385-50.595c0-.653.271-1.141.814-1.467.544-.434 1.196-.652 1.956-.652h17.926c.761 0 1.412.217 1.955.652.543.326.813.815.813 1.467l-1.467 50.595z"})})}try{AlertCircleIcon.displayName="AlertCircleIcon",AlertCircleIcon.__docgenInfo={description:"",displayName:"AlertCircleIcon",props:{ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"]={docgenInfo:AlertCircleIcon.__docgenInfo,name:"AlertCircleIcon",path:"packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const SvgIcon=_ref=>{let{ariaHidden,className,children,description,id,inversed,title,viewBox,...otherProps}=_ref;const svgClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("icon--",id),titleId=`${rootId}__title`,descriptionId=`${rootId}__desc`,ariaLabelledBy=description?`${titleId} ${descriptionId}`:titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("svg",{"aria-hidden":ariaHidden,className:svgClasses,id:id??isSrVisible?rootId:void 0,viewBox,xmlns:"http://www.w3.org/2000/svg",...screenReaderProps,...otherProps,children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("desc",{id:descriptionId,children:description}),children]})};SvgIcon.defaultProps={ariaHidden:!0,inversed:!1};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true"},description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The elements that make up the SVG",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:{value:"false"},description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/InlineError/InlineError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,b:()=>InlineError});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/Icons/AlertCircleIcon.tsx"),_i18n__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function InlineError(_ref){let{children,className,id,inversed,...otherProps}=_ref;const classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-inline-error",{"ds-c-inline-error--inverse":inversed},className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("p",{...otherProps,className:classes,id:(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("inline-error--",id),"aria-live":"assertive","aria-atomic":"true",children:children&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_Icons_AlertCircleIcon__WEBPACK_IMPORTED_MODULE_3__.g,{viewBox:"36 -12 186 186"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("span",{className:"ds-u-visibility--screen-reader",children:`${(0,_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("inlineError.prefix")}: `}),children]})})}const __WEBPACK_DEFAULT_EXPORT__=InlineError;try{InlineError.displayName="InlineError",InlineError.__docgenInfo={description:"Inline errors are error messages that are paired directly with form fields.\nThey are built in to all form fields in the design system, but they can also\nbe used on their own to create custom fields.\n\nFor information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/inline-error/).",displayName:"InlineError",props:{children:{defaultValue:null,description:"Error text or HTML",name:"children",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"The ID of the error element",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/InlineError/InlineError.tsx#InlineError"]={docgenInfo:InlineError.__docgenInfo,name:"InlineError",path:"packages/design-system/src/components/InlineError/InlineError.tsx#InlineError"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/InlineError/useInlineError.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>useInlineError});var _InlineError__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/InlineError/InlineError.tsx"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_config__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/config.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function useInlineError(props){const errorId=props.errorId??`${props.id}__error`,{errorMessage,errorMessageClassName,errorPlacement=(0,_config__WEBPACK_IMPORTED_MODULE_2__.vc)().errorPlacementDefault,inversed}=props,errorElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_InlineError__WEBPACK_IMPORTED_MODULE_3__.Z,{id:errorId,inversed,className:classnames__WEBPACK_IMPORTED_MODULE_0___default()(errorMessageClassName,"bottom"===errorPlacement&&errorMessage&&"ds-c-inline-error--bottom"),children:errorMessage});let topError,bottomError;"top"===errorPlacement?topError=errorElement:bottomError=errorElement;return{errorId:errorMessage?errorId:void 0,invalid:props["aria-invalid"]??!!errorMessage,topError,bottomError}}try{useInlineError.displayName="useInlineError",useInlineError.__docgenInfo={description:"Hook that takes the props for a form field component, extracts the props relevant\nto the error message, and conditionally renders an `InlineError` in the `topError`\nor `bottomError` property based on the `errorPlacement` and the presence of an\n`errorMessage`.",displayName:"useInlineError",props:{errorId:{defaultValue:null,description:"The ID of the error message applied to this field. If none is provided, the id\nwill be derived from the `id` prop for the field.",name:"errorId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"bottom"'},{value:'"top"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A unique `id` for the field element",name:"id",required:!0,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" color scheme',name:"inversed",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/InlineError/useInlineError.tsx#useInlineError"]={docgenInfo:useInlineError.__docgenInfo,name:"useInlineError",path:"packages/design-system/src/components/InlineError/useInlineError.tsx#useInlineError"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Label/Label.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__,_:()=>Label});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_Hint__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Hint/Hint.tsx"),_InlineError__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/InlineError/InlineError.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Label=props=>{const{fieldId,id,children,component,hint,hintId,className,inversed,errorMessage,errorId,requirementLabel,...labelProps}=props;let hintElement;(hint||requirementLabel)&&(hintElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_Hint__WEBPACK_IMPORTED_MODULE_2__.k,{requirementLabel,inversed,id:hintId,children:hint}));let errorElement=errorMessage;"string"==typeof errorMessage&&(errorElement=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_InlineError__WEBPACK_IMPORTED_MODULE_3__.b,{id:errorId,children:errorMessage}));let htmlFor=fieldId;"legend"===component&&fieldId&&(console.warn("The `for` attribute is invalid for legends. Omitting `fieldId` from rendered element."),htmlFor=void 0);const ComponentType=component,classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-label",className,inversed&&"ds-c-label--inverse");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(ComponentType,{className:classes,htmlFor,id,...labelProps,children}),hintElement,errorElement]})};Label.defaultProps={component:"label"};const __WEBPACK_DEFAULT_EXPORT__=Label;try{Label.displayName="Label",Label.__docgenInfo={description:"The Label component describes individual form fields (as a `<label>`) or fieldsets (as\na `<legend>`). They are built in to all form fields in the design system, but they can\nalso be used on their own to create custom fields.\n\nFor information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/label/).",displayName:"Label",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLLabelElement> & Ref<HTMLLegendElement>"}},component:{defaultValue:{value:"label"},description:"The root HTML element used to render the label",name:"component",required:!1,type:{name:"enum",value:[{value:'"label"'},{value:'"legend"'}]}},errorMessage:{defaultValue:null,description:"@deprecated Hints are now their own component called `Hint`.\n@hide-prop [Deprecated]\n\nEnable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorId:{defaultValue:null,description:"@deprecated The Label is no longer responsible for rendering the\nerror element from a string. A InlineError should be passed to it which\nalready has an errorId applied.\n@hide-prop [Deprecated]",name:"errorId",required:!1,type:{name:"string"}},fieldId:{defaultValue:null,description:"The ID of the field this label is for. This is used for the label's `for`\nattribute and any related ARIA attributes, such as for the error message.",name:"fieldId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"@deprecated Hints are now their own component called `Hint`.\n@hide-prop [Deprecated]\n\nAdditional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"@deprecated Please render your error message directly with the 'InlineError' component instead of passing to `Label`\n@hide-prop [Deprecated]\n\nThe ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Label/Label.tsx#Label"]={docgenInfo:Label.__docgenInfo,name:"Label",path:"packages/design-system/src/components/Label/Label.tsx#Label"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Label/useLabelProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function useLabelProps(props){const labelId=props.labelId??`${props.id}__label`,{label,labelClassName,inversed}=props;return{children:label,className:labelClassName,id:labelId,inversed}}__webpack_require__.d(__webpack_exports__,{v:()=>useLabelProps})},"./packages/design-system/src/components/TextField/TextInput.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const TextInput=props=>{const{ariaLabel,fieldClassName,inversed,multiline,numeric,onCopyCapture,pattern,rows,inputRef,size,type,...inputProps}=props,classes=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-field",{"ds-c-field--error":props["aria-invalid"],"ds-c-field--inverse":inversed},size&&`ds-c-field--${size}`,fieldClassName);let inputType=type;numeric?inputType="text":multiline&&(inputType=void 0);const ComponentType=multiline?"textarea":"input",numberRows="string"==typeof rows?parseInt(rows):rows;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(ComponentType,{className:classes,ref:inputRef,rows:multiline&&numberRows?numberRows:void 0,inputMode:numeric?"numeric":void 0,pattern:numeric&&!pattern?"[0-9]*":pattern,type:inputType,onCopyCapture,...inputProps,"aria-label":ariaLabel||props["aria-label"]})},__WEBPACK_DEFAULT_EXPORT__=TextInput;try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"`<TextInput>` is an internal component used by `<TextField>`, which wraps it and handles shared form UI like labels, error messages, etc\n`<TextInput>` is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components\nAs an internal component, it's subject to more breaking changes. Exercise caution using `<TextInput>` outside of those special cases",displayName:"TextInput",props:{ariaLabel:{defaultValue:null,description:"Apply an `aria-label` to the text field to provide additional\ncontext to assistive devices.",name:"ariaLabel",required:!1,type:{name:"string"}},fieldClassName:{defaultValue:null,description:"Additional classes to be added to the field element",name:"fieldClassName",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Applies the "inverse" UI theme',name:"inversed",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"Whether or not the text field is a multiline text field",name:"multiline",required:!1,type:{name:"boolean"}},numeric:{defaultValue:null,description:'Sets `inputMode`, `type`, and `pattern` to improve accessibility and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.',name:"numeric",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Optionally specify the number of visible text lines for the field. Only\napplicable if this is a multiline field.",name:"rows",required:!1,type:{name:"TextInputRows"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"(...args: any[]) => any"}},size:{defaultValue:null,description:"Set the max-width of the input either to `'small'` or `'medium'`.",name:"size",required:!1,type:{name:"enum",value:[{value:'"medium"'},{value:'"small"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"packages/design-system/src/components/TextField/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/TextField/useLabelMask.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{AJ:()=>ZIP_MASK,N_:()=>PHONE_MASK,Nl:()=>SSN_MASK,ZP:()=>__WEBPACK_DEFAULT_EXPORT__,kV:()=>DATE_MASK,vP:()=>CURRENCY_MASK,yR:()=>useLabelMask});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_utilities_mergeIds__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/utilities/mergeIds.ts"),_utilities_useId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const RE_DATE=/^(\d{1,2})[\D]?(\d{1,2})?[\D]?(\d{1,4})?/,makeMask=(regex,hint,formatter)=>function(){let rawInput=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",valueOnly=arguments.length>1&&void 0!==arguments[1]&&arguments[1];const match=regex.exec(rawInput),formattedMatch=match?formatter(match):"";if(valueOnly)return formattedMatch;return formattedMatch+hint.substring(formattedMatch.length)},DATE_MASK=makeMask(RE_DATE,"MM/DD/YYYY",(match=>{const[month,day,year]=match.slice(1);return[month&&month.padStart(2,"0"),day&&day.padStart(2,"0"),year].filter((s=>s)).join("/")})),PHONE_MASK=makeMask(/^\(?(\d{1,3})?\)?[\s.-]?(\d{1,3})?[\s.-]?(\d{1,4})?/,"###-###-####",(match=>match.slice(1).filter((s=>s)).join("-"))),ZIP_MASK=makeMask(/(\d{1,5})/,"#####",(match=>match[1])),SSN_MASK=makeMask(/([*\d]{1,3})[\s.-]?([*\d]{1,2})?[\s.-]?([\d{1,4}]+)?/,"###-##-####",(match=>match.slice(1).filter((s=>s)).join("-"))),SSN_MASK_OBFUSCATED=(rawInput,valueOnly)=>{const formatted=SSN_MASK(rawInput,!0);let obfuscated;return obfuscated=formatted.length<6?"***-**".substring(0,formatted.length):"***-**"+formatted.substring(6),SSN_MASK(obfuscated,valueOnly)},CURRENCY_MASK=makeMask(/\$?[\d,.-]*/,"$",(match=>{const signed=match[0].includes("-"),stripped=match[0].replace(/[^0-9.]/g,""),clipped=stripped.includes(".")?stripped.slice(0,stripped.indexOf(".")+3):stripped,formatted=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Number(clipped)).replace(/\.00/,"");return Number(clipped)>0?signed?"-"+formatted:formatted:""}));function useLabelMask(maskFn,originalInputProps){const generatedId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_3__.Z)("label-mask--"),labelMaskId=originalInputProps.id?`${originalInputProps.id}__label-mask`:generatedId,[focused,setFocused]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),{onFocus,onBlur,onChange}=originalInputProps,value=originalInputProps.value?.toString()??originalInputProps.defaultValue?.toString()??"",[currentValue,setCurrentValue]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value);(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((()=>{setCurrentValue(value)}),[value,setCurrentValue]);const inputProps={...originalInputProps,defaultValue:void 0,value:currentValue,onChange:e=>{setCurrentValue(e.currentTarget.value),onChange&&onChange(e)},onFocus:e=>{onFocus&&onFocus(e),setFocused(!0)},onBlur:e=>{const maskedValue=maskFn(currentValue,!0);e.currentTarget.value=maskedValue,e.target.value=maskedValue,setCurrentValue(maskedValue),onChange&&onChange(e),onBlur&&onBlur(e),setFocused(!1)},type:"text",inputMode:"numeric","aria-describedby":(0,_utilities_mergeIds__WEBPACK_IMPORTED_MODULE_4__.Z)(originalInputProps["aria-describedby"],labelMaskId)};let currentMask=maskFn(currentValue);return maskFn!==DATE_MASK||focused||(currentMask=maskFn("")),maskFn!==SSN_MASK||focused||""===currentValue||(currentMask=SSN_MASK_OBFUSCATED(currentValue),inputProps.value=SSN_MASK_OBFUSCATED(currentValue,!0)),{labelMask:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("div",{className:"ds-c-label-mask",id:labelMaskId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(focused&&"ds-u-visibility--screen-reader"),children:currentMask}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(!focused&&"ds-u-display--none"),"aria-hidden":"true",children:currentMask})]}),inputProps}}const __WEBPACK_DEFAULT_EXPORT__=useLabelMask;try{RE_DATE.displayName="RE_DATE",RE_DATE.__docgenInfo={description:"Regular expressions for matching commonly used masks, ensure capture groups are\nset for each set of items that are separated by a delimiter, delimiters are\noptional and so should be shown as well with the `?` optional flag.",displayName:"RE_DATE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#RE_DATE"]={docgenInfo:RE_DATE.__docgenInfo,name:"RE_DATE",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#RE_DATE"})}catch(__react_docgen_typescript_loader_error){}try{DATE_MASK.displayName="DATE_MASK",DATE_MASK.__docgenInfo={description:"The date mask automatically pads months and days that are one digit",displayName:"DATE_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#DATE_MASK"]={docgenInfo:DATE_MASK.__docgenInfo,name:"DATE_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#DATE_MASK"})}catch(__react_docgen_typescript_loader_error){}try{PHONE_MASK.displayName="PHONE_MASK",PHONE_MASK.__docgenInfo={description:"Formatting for US phone numbers",displayName:"PHONE_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#PHONE_MASK"]={docgenInfo:PHONE_MASK.__docgenInfo,name:"PHONE_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#PHONE_MASK"})}catch(__react_docgen_typescript_loader_error){}try{ZIP_MASK.displayName="ZIP_MASK",ZIP_MASK.__docgenInfo={description:"Formatting for US Postal codes, this could be expanded to allow for 9 digit numbers",displayName:"ZIP_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#ZIP_MASK"]={docgenInfo:ZIP_MASK.__docgenInfo,name:"ZIP_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#ZIP_MASK"})}catch(__react_docgen_typescript_loader_error){}try{SSN_MASK.displayName="SSN_MASK",SSN_MASK.__docgenInfo={description:"Formatting for social security numbers.",displayName:"SSN_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#SSN_MASK"]={docgenInfo:SSN_MASK.__docgenInfo,name:"SSN_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#SSN_MASK"})}catch(__react_docgen_typescript_loader_error){}try{SSN_MASK_OBFUSCATED.displayName="SSN_MASK_OBFUSCATED",SSN_MASK_OBFUSCATED.__docgenInfo={description:"Does the same thing as SSN_MASK except that it obfuscates the first five digits",displayName:"SSN_MASK_OBFUSCATED",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#SSN_MASK_OBFUSCATED"]={docgenInfo:SSN_MASK_OBFUSCATED.__docgenInfo,name:"SSN_MASK_OBFUSCATED",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#SSN_MASK_OBFUSCATED"})}catch(__react_docgen_typescript_loader_error){}try{CURRENCY_MASK.displayName="CURRENCY_MASK",CURRENCY_MASK.__docgenInfo={description:"Currency mask is a little different, we need to modify the incoming content to strip\nout any commas or dollar signs before evaluating it via the Intl.NumberFormat function.",displayName:"CURRENCY_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#CURRENCY_MASK"]={docgenInfo:CURRENCY_MASK.__docgenInfo,name:"CURRENCY_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#CURRENCY_MASK"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/utilities/cleanFieldProps.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=function cleanFieldProps(props){const newProps={...props};return delete newProps.className,delete newProps.errorId,delete newProps.errorMessage,delete newProps.errorMessageClassName,delete newProps.errorPlacement,delete newProps.hint,delete newProps.hintId,delete newProps.requirementLabel,delete newProps.labelId,delete newProps.label,delete newProps.labelClassName,newProps}},"./packages/design-system/src/components/utilities/describeField.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _mergeIds__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/design-system/src/components/utilities/mergeIds.ts");const __WEBPACK_DEFAULT_EXPORT__=function describeField(props){return(0,_mergeIds__WEBPACK_IMPORTED_MODULE_0__.Z)(props["aria-describedby"],props.errorId,props.hintId)||void 0}},"./packages/design-system/src/components/utilities/mergeIds.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js");const __WEBPACK_DEFAULT_EXPORT__=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__)()},"./packages/design-system/src/components/utilities/useId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(providedId??lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}}}]);