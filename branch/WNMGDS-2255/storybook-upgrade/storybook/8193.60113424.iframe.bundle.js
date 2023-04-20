"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[8193],{"./packages/design-system/src/components/FormLabel/useFormLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{E:function(){return useFormLabel}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_InlineError_InlineError__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/InlineError/InlineError.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__),_flags__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/flags.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","label","labelClassName","labelComponent","errorMessage","errorMessageClassName","errorPlacement","hint","requirementLabel","inversed","wrapperIsFieldset"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function useFormLabel(props){var _props$id,_props$labelId,_props$errorId,_props$ariaInvalid,generatedId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()("field_")).current,id=null!==(_props$id=props.id)&&void 0!==_props$id?_props$id:generatedId,labelId=null!==(_props$labelId=props.labelId)&&void 0!==_props$labelId?_props$labelId:"".concat(id,"-label"),errorId=null!==(_props$errorId=props.errorId)&&void 0!==_props$errorId?_props$errorId:"".concat(id,"-error"),className=props.className,label=props.label,labelClassName=props.labelClassName,labelComponent=props.labelComponent,errorMessage=props.errorMessage,errorMessageClassName=props.errorMessageClassName,_props$errorPlacement=props.errorPlacement,errorPlacement=void 0===_props$errorPlacement?(0,_flags__WEBPACK_IMPORTED_MODULE_4__.pp)():_props$errorPlacement,hint=props.hint,requirementLabel=props.requirementLabel,inversed=props.inversed,wrapperIsFieldset=props.wrapperIsFieldset,remainingProps=_objectWithoutProperties(props,_excluded),hasBottomError="bottom"===errorPlacement&&errorMessage,bottomError=hasBottomError?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_InlineError_InlineError__WEBPACK_IMPORTED_MODULE_5__.Z,{id:errorId,inversed:inversed,className:errorMessageClassName,children:errorMessage}):void 0,showHiddenError=wrapperIsFieldset&&bottomError,ariaInvalid=null!==(_props$ariaInvalid=props["aria-invalid"])&&void 0!==_props$ariaInvalid?_props$ariaInvalid:!!errorMessage;return{labelProps:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.HY,{children:[label,showHiddenError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{className:"ds-u-visibility--screen-reader",children:errorMessage})]}),className:labelClassName,component:labelComponent,errorMessage:bottomError?void 0:errorMessage,errorMessageClassName:bottomError?void 0:errorMessageClassName,errorId:errorId,fieldId:wrapperIsFieldset?void 0:id,hint:hint,id:labelId,requirementLabel:requirementLabel,inversed:inversed},fieldProps:_objectSpread(_objectSpread({},remainingProps),{},{id:id,errorMessage:errorMessage,inversed:inversed,"aria-describedby":hasBottomError?classnames__WEBPACK_IMPORTED_MODULE_1___default()(props["aria-describedby"],errorId):props["aria-describedby"],"aria-invalid":wrapperIsFieldset?void 0:ariaInvalid}),wrapperProps:{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"ds-c-fieldset":wrapperIsFieldset},className),"aria-invalid":wrapperIsFieldset?ariaInvalid:void 0},bottomError:bottomError,errorId:errorId}}try{useFormLabel.displayName="useFormLabel",useFormLabel.__docgenInfo={description:"This hook contains business logic for how an input field relates to its label\nand wrapping container element. It takes a component's props and generates\nthe specialized set of props for its label, field, wrapper element, and\npossible detached \"bottom error\". While the order and structure of those\nelements are different between components and are specific to their\nimplementation, much of the logic for prop/attribute generation is consistent\nbetween components. The hook will return the relevant information as\nproperties of an object:\n\n  - labelProps:   Props to be applied to a `FormLabel` (where we get the name)\n  - fieldProps:   Props to be applied to the field (a.k.a., the input)\n  - wrapperProps: Props to be applied to the wrapping element\n  - bottomError:  A rendered React element representing a bottom-placed error\n  - errorId:      The id (string) of the error-message element, in case we\n                  need to reference it (currently only necessary to support\n                  the FormControl component, which this hook aims to replace)\n\nNote that while it's helpful now to abstract away this logic behind a shared\nhook, that may not always be the case. The first step in creating this hook\nwas to allow an alternative to `FormControl` that allowed for more freedom in\nhow the component's individual elements were structured at to get rid of the\ndichotomy it imposes on components where their implementation must be split\nbetween an inner and outer component.",displayName:"useFormLabel",props:{labelComponent:{defaultValue:null,description:"The root HTML element used to render the field label",name:"labelComponent",required:!0,type:{name:"enum",value:[{value:'"label"'},{value:'"legend"'}]}},wrapperIsFieldset:{defaultValue:null,description:"",name:"wrapperIsFieldset",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},id:{defaultValue:null,description:"A unique `id` for the field element. Useful for referencing the field from\nother components with `aria-describedby`.",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the field label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field.",name:"errorId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement (ie. "Optional", or "Required").\nIn most cases, this should be used to indicate which fields are optional.\nSee the [form guidelines]({{root}}/guidelines/forms/) for more info.',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},textClassName:{defaultValue:null,description:"Additional classes to be added to the label text.",name:"textClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/FormLabel/useFormLabel.tsx#useFormLabel"]={docgenInfo:useFormLabel.__docgenInfo,name:"useFormLabel",path:"packages/design-system/src/components/FormLabel/useFormLabel.tsx#useFormLabel"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/TextField/TextInput.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["ariaLabel","errorId","errorMessage","errorPlacement","fieldClassName","inversed","multiline","numeric","onCopyCapture","pattern","rows","inputRef","size","type"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var TextInput=function TextInput(props){var ariaLabel=props.ariaLabel,errorId=props.errorId,errorMessage=props.errorMessage,errorPlacement=props.errorPlacement,fieldClassName=props.fieldClassName,inversed=props.inversed,multiline=props.multiline,numeric=props.numeric,onCopyCapture=props.onCopyCapture,pattern=props.pattern,rows=props.rows,inputRef=props.inputRef,size=props.size,type=props.type,inputProps=_objectWithoutProperties(props,_excluded),classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-field",{"ds-c-field--error":errorMessage,"ds-c-field--inverse":inversed},size&&"ds-c-field--".concat(size),fieldClassName),inputType=type;numeric?inputType="text":multiline&&(inputType=void 0);var ComponentType=multiline?"textarea":"input",numberRows="string"==typeof rows?parseInt(rows):rows;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(ComponentType,_objectSpread(_objectSpread({className:classes,ref:inputRef,rows:multiline&&numberRows?numberRows:void 0,inputMode:numeric?"numeric":void 0,pattern:numeric&&!pattern?"[0-9]*":pattern,type:inputType,onCopyCapture:onCopyCapture,"aria-invalid":!!errorMessage},inputProps),{},{"aria-label":ariaLabel||props["aria-label"],"aria-describedby":classnames__WEBPACK_IMPORTED_MODULE_1___default()(props["aria-describedby"],"bottom"===errorPlacement&&errorMessage&&errorId)||void 0}))};TextInput.displayName="TextInput",__webpack_exports__.Z=TextInput;try{TextInput.displayName="TextInput",TextInput.__docgenInfo={description:"`<TextInput>` is an internal component used by `<TextField>`, which wraps it and handles shared form UI like labels, error messages, etc\n`<TextInput>` is also exported for advanced design system use cases, where the internal component can be leveraged to build custom form components\nAs an internal component, it's subject to more breaking changes. Exercise caution using `<TextInput>` outside of those special cases",displayName:"TextInput",props:{ariaLabel:{defaultValue:null,description:"Apply an `aria-label` to the text field to provide additional\ncontext to assistive devices.",name:"ariaLabel",required:!1,type:{name:"string"}},errorId:{defaultValue:null,description:"The ID of the error message applied to the Select field.",name:"errorId",required:!1,type:{name:"string"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},fieldClassName:{defaultValue:null,description:"Additional classes to be added to the field element",name:"fieldClassName",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Applies the "inverse" UI theme',name:"inversed",required:!1,type:{name:"boolean"}},multiline:{defaultValue:null,description:"Whether or not the text field is a multiline text field",name:"multiline",required:!1,type:{name:"boolean"}},numeric:{defaultValue:null,description:'Sets `inputMode`, `type`, and `pattern` to improve accessibility and consistency for number fields. Use this prop instead of `type="number"`, see [here](https://technology.blog.gov.uk/2020/02/24/why-the-gov-uk-design-system-team-changed-the-input-type-for-numbers/) for more information.',name:"numeric",required:!1,type:{name:"boolean"}},rows:{defaultValue:null,description:"Optionally specify the number of visible text lines for the field. Only\napplicable if this is a multiline field.",name:"rows",required:!1,type:{name:"TextInputRows"}},inputRef:{defaultValue:null,description:"",name:"inputRef",required:!1,type:{name:"(...args: any[]) => any"}},size:{defaultValue:null,description:"Set the max-width of the input either to `'small'` or `'medium'`.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/TextInput.tsx#TextInput"]={docgenInfo:TextInput.__docgenInfo,name:"TextInput",path:"packages/design-system/src/components/TextField/TextInput.tsx#TextInput"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/TextField/useLabelMask.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{AJ:function(){return ZIP_MASK},N_:function(){return PHONE_MASK},Nl:function(){return SSN_MASK},kV:function(){return DATE_MASK},vP:function(){return CURRENCY_MASK},yR:function(){return useLabelMask}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var RE_DATE=/^(\d{1,2})[\D]?(\d{1,2})?[\D]?(\d{1,4})?/,makeMask=function makeMask(regex,hint,formatter){return function(){var rawInput=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",valueOnly=arguments.length>1&&void 0!==arguments[1]&&arguments[1],match=regex.exec(rawInput),formattedMatch=match?formatter(match):"";return valueOnly?formattedMatch:formattedMatch+hint.substring(formattedMatch.length)}},DATE_MASK=makeMask(RE_DATE,"MM/DD/YYYY",(function(match){var _match$slice2=_slicedToArray(match.slice(1),3),month=_match$slice2[0],day=_match$slice2[1],year=_match$slice2[2];return[month&&month.padStart(2,"0"),day&&day.padStart(2,"0"),year].filter((function(s){return s})).join("/")})),PHONE_MASK=makeMask(/^\(?(\d{1,3})?\)?[\s.-]?(\d{1,3})?[\s.-]?(\d{1,4})?/,"###-###-####",(function(match){return match.slice(1).filter((function(s){return s})).join("-")})),ZIP_MASK=makeMask(/(\d{1,5})/,"#####",(function(match){return match[1]})),SSN_MASK=makeMask(/([*\d]{1,3})[\s.-]?([*\d]{1,2})?[\s.-]?([\d{1,4}]+)?/,"###-##-####",(function(match){return match.slice(1).filter((function(s){return s})).join("-")})),SSN_MASK_OBFUSCATED=function SSN_MASK_OBFUSCATED(rawInput,valueOnly){var obfuscated,formatted=SSN_MASK(rawInput,!0);return obfuscated=formatted.length<6?"***-**".substring(0,formatted.length):"***-**"+formatted.substring(6),SSN_MASK(obfuscated,valueOnly)},CURRENCY_MASK=makeMask(/\$?[\d,.-]*/,"$",(function(match){var signed=match[0].includes("-"),stripped=match[0].replace(/[^0-9.]/g,""),clipped=stripped.includes(".")?stripped.slice(0,stripped.indexOf(".")+3):stripped,formatted=new Intl.NumberFormat("en-US",{style:"currency",currency:"USD"}).format(Number(clipped)).replace(/\.00/,"");return Number(clipped)>0?signed?"-"+formatted:formatted:""}));function useLabelMask(maskFn,originalInputProps){var _ref,_originalInputProps$v,_originalInputProps$v2,_originalInputProps$d,labelMaskId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()("labelmask_")).current,_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),2),focused=_useState2[0],setFocused=_useState2[1],_onFocus=originalInputProps.onFocus,_onBlur=originalInputProps.onBlur,_onChange=originalInputProps.onChange,value=null!==(_ref=null!==(_originalInputProps$v=null===(_originalInputProps$v2=originalInputProps.value)||void 0===_originalInputProps$v2?void 0:_originalInputProps$v2.toString())&&void 0!==_originalInputProps$v?_originalInputProps$v:null===(_originalInputProps$d=originalInputProps.defaultValue)||void 0===_originalInputProps$d?void 0:_originalInputProps$d.toString())&&void 0!==_ref?_ref:"",_useState4=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(value),2),currentValue=_useState4[0],setCurrentValue=_useState4[1];(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){setCurrentValue(value)}),[value,setCurrentValue]);var inputProps=_objectSpread(_objectSpread({},originalInputProps),{},{defaultValue:void 0,value:currentValue,onChange:function onChange(e){setCurrentValue(e.currentTarget.value),_onChange&&_onChange(e)},onFocus:function onFocus(e){_onFocus&&_onFocus(e),setFocused(!0)},onBlur:function onBlur(e){var maskedValue=maskFn(currentValue,!0);e.currentTarget.value=maskedValue,e.target.value=maskedValue,setCurrentValue(maskedValue),_onChange&&_onChange(e),_onBlur&&_onBlur(e),setFocused(!1)},type:"text",inputMode:"numeric","aria-describedby":classnames__WEBPACK_IMPORTED_MODULE_1___default()(originalInputProps["aria-describedby"],labelMaskId)}),currentMask=maskFn(currentValue);return maskFn!==DATE_MASK||focused||(currentMask=maskFn("")),maskFn!==SSN_MASK||focused||""===currentValue||(currentMask=SSN_MASK_OBFUSCATED(currentValue),inputProps.value=SSN_MASK_OBFUSCATED(currentValue,!0)),{labelMask:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)("div",{className:"ds-c-label-mask",id:labelMaskId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(focused&&"ds-u-visibility--screen-reader"),children:currentMask}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("span",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(!focused&&"ds-u-display--none"),"aria-hidden":"true",children:currentMask})]}),inputProps:inputProps}}__webpack_exports__.ZP=useLabelMask;try{RE_DATE.displayName="RE_DATE",RE_DATE.__docgenInfo={description:"Regular expressions for matching commonly used masks, ensure capture groups are\nset for each set of items that are separated by a delimiter, delimiters are\noptional and so should be shown as well with the `?` optional flag.",displayName:"RE_DATE",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#RE_DATE"]={docgenInfo:RE_DATE.__docgenInfo,name:"RE_DATE",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#RE_DATE"})}catch(__react_docgen_typescript_loader_error){}try{DATE_MASK.displayName="DATE_MASK",DATE_MASK.__docgenInfo={description:"The date mask automatically pads months and days that are one digit",displayName:"DATE_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#DATE_MASK"]={docgenInfo:DATE_MASK.__docgenInfo,name:"DATE_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#DATE_MASK"})}catch(__react_docgen_typescript_loader_error){}try{PHONE_MASK.displayName="PHONE_MASK",PHONE_MASK.__docgenInfo={description:"Formatting for US phone numbers",displayName:"PHONE_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#PHONE_MASK"]={docgenInfo:PHONE_MASK.__docgenInfo,name:"PHONE_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#PHONE_MASK"})}catch(__react_docgen_typescript_loader_error){}try{ZIP_MASK.displayName="ZIP_MASK",ZIP_MASK.__docgenInfo={description:"Formatting for US Postal codes, this could be expanded to allow for 9 digit numbers",displayName:"ZIP_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#ZIP_MASK"]={docgenInfo:ZIP_MASK.__docgenInfo,name:"ZIP_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#ZIP_MASK"})}catch(__react_docgen_typescript_loader_error){}try{SSN_MASK.displayName="SSN_MASK",SSN_MASK.__docgenInfo={description:"Formatting for social security numbers.",displayName:"SSN_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#SSN_MASK"]={docgenInfo:SSN_MASK.__docgenInfo,name:"SSN_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#SSN_MASK"})}catch(__react_docgen_typescript_loader_error){}try{SSN_MASK_OBFUSCATED.displayName="SSN_MASK_OBFUSCATED",SSN_MASK_OBFUSCATED.__docgenInfo={description:"Does the same thing as SSN_MASK except that it obfuscates the first five digits",displayName:"SSN_MASK_OBFUSCATED",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#SSN_MASK_OBFUSCATED"]={docgenInfo:SSN_MASK_OBFUSCATED.__docgenInfo,name:"SSN_MASK_OBFUSCATED",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#SSN_MASK_OBFUSCATED"})}catch(__react_docgen_typescript_loader_error){}try{CURRENCY_MASK.displayName="CURRENCY_MASK",CURRENCY_MASK.__docgenInfo={description:"Currency mask is a little different, we need to modify the incoming content to strip\nout any commas or dollar signs before evaluating it via the Intl.NumberFormat function.",displayName:"CURRENCY_MASK",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/TextField/useLabelMask.tsx#CURRENCY_MASK"]={docgenInfo:CURRENCY_MASK.__docgenInfo,name:"CURRENCY_MASK",path:"packages/design-system/src/components/TextField/useLabelMask.tsx#CURRENCY_MASK"})}catch(__react_docgen_typescript_loader_error){}}}]);