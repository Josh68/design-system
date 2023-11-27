"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[1598],{"./packages/design-system/src/components/Dropdown/Dropdown.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{L:function(){return Dropdown},Z:function(){return Dropdown_Dropdown}});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/src/components/utilities/mergeRefs.ts"),useAutoFocus=__webpack_require__("./packages/design-system/src/components/utilities/useAutoFocus.ts"),useFormLabel=__webpack_require__("./packages/design-system/src/components/FormLabel/useFormLabel.tsx"),Label=__webpack_require__("./packages/design-system/src/components/Label/Label.tsx"),SvgIcon=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["value","children"],_excluded2=["label"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _toConsumableArray(arr){return function _arrayWithoutHoles(arr){if(Array.isArray(arr))return _arrayLikeToArray(arr)}(arr)||function _iterableToArray(iter){if("undefined"!=typeof Symbol&&null!=iter[Symbol.iterator]||null!=iter["@@iterator"])return Array.from(iter)}(arr)||_unsupportedIterableToArray(arr)||function _nonIterableSpread(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _unsupportedIterableToArray(o,minLen){if(o){if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);return"Object"===n&&o.constructor&&(n=o.constructor.name),"Map"===n||"Set"===n?Array.from(o):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(o,minLen):void 0}}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function validateProps(props){}function isOptGroup(optionsOrGroups){return void 0!==optionsOrGroups.options}function getFirstOptionValue(optionsAndGroups){var _step,_iterator=function _createForOfIteratorHelper(o,allowArrayLike){var it="undefined"!=typeof Symbol&&o[Symbol.iterator]||o["@@iterator"];if(!it){if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&"number"==typeof o.length){it&&(o=it);var i=0,F=function F(){};return{s:F,n:function n(){return i>=o.length?{done:!0}:{done:!1,value:o[i++]}},e:function e(_e){throw _e},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var err,normalCompletion=!0,didErr=!1;return{s:function s(){it=it.call(o)},n:function n(){var step=it.next();return normalCompletion=step.done,step},e:function e(_e2){didErr=!0,err=_e2},f:function f(){try{normalCompletion||null==it.return||it.return()}finally{if(didErr)throw err}}}}(optionsAndGroups);try{for(_iterator.s();!(_step=_iterator.n()).done;){var optOrGroup=_step.value;if(!isOptGroup(optOrGroup))return optOrGroup.value;if(optOrGroup.options[0])return optOrGroup.options[0].value}}catch(err){_iterator.e(err)}finally{_iterator.f()}console.warn("Dropdown component could not determine a default selected option")}function findElementsOfType(types,node){var _props;return node&&(compat_module.default.isValidElement(node)||Array.isArray(node))?compat_module.default.isValidElement(node)&&types.includes(node.type)?[node]:Array.isArray(node)?node.reduce((function(acc,child){return[].concat(_toConsumableArray(acc),_toConsumableArray(findElementsOfType(types,child)))}),[]):findElementsOfType(types,null===(_props=node.props)||void 0===_props?void 0:_props.children):[]}function parseOptionElement(option){var _option$props=option.props;return _objectSpread({value:_option$props.value,label:_option$props.children},_objectWithoutProperties(_option$props,_excluded))}function parseChildren(node){var elements=findElementsOfType(["optgroup","option"],node);return elements.length?elements.map((function(element){return"optgroup"===element.type?function parseOptGroupElement(optgroup){var _optgroup$props=optgroup.props,label=_optgroup$props.label,extraProps=_objectWithoutProperties(_optgroup$props,_excluded2);if(!label)throw new Error("Could not find a label on `<optgroup>` element");return _objectSpread({label:label,options:findElementsOfType(["option"],optgroup).map(parseOptionElement)},extraProps)}(element):parseOptionElement(element)})):[]}try{validateProps.displayName="validateProps",validateProps.__docgenInfo={description:"",displayName:"validateProps",props:{defaultValue:{defaultValue:null,description:"Sets the initial selected state. Use this for an uncontrolled component;\notherwise, use the `value` property.",name:"defaultValue",required:!1,type:{name:"DropdownValue"}},disabled:{defaultValue:null,description:"Disables the entire field.",name:"disabled",required:!1,type:{name:"boolean"}},fieldClassName:{defaultValue:null,description:"Additional classes to be added to the dropdown button element",name:"fieldClassName",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Sets the focus on the dropdown when it is first added to the document.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"A unique ID to be used for the `button` element. If one isn't provided, a unique ID will be generated.  /**\nAdditional hint text to display",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `button` element",name:"inputRef",required:!1,type:{name:"(...args: any[]) => any"}},inversed:{defaultValue:null,description:'Applies the "inverse" UI theme',name:"inversed",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The field's `name` attribute",name:"name",required:!0,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(...args: any[]) => any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(change: DropdownChangeObject) => any"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Sets the max-width of the input either to `'small'` or `'medium'`.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},value:{defaultValue:null,description:"Sets the field's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `defaultValue`.",name:"value",required:!1,type:{name:"DropdownValue"}},getA11yStatusMessage:{defaultValue:null,description:"Customize the default status messages announced to screen reader users via\naria-live during certain interactions.\n@deprecated This option is not currently supported.\n@hide-prop [Deprecated]",name:"getA11yStatusMessage",required:!1,type:{name:"any"}},getA11ySelectionMessage:{defaultValue:null,description:"Customize the default status messages announced to screen reader users via\naria-live when a selection is made.\n@deprecated This option is not currently supported.\n@hide-prop [Deprecated]",name:"getA11ySelectionMessage",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field.",name:"errorId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"@deprecated Hints are now their own component called `Hint`.\n@hide-prop [Deprecated]\n\nAdditional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"@deprecated Please render your error message directly with the 'InlineError' component instead of passing to `Label`\n@hide-prop [Deprecated]\n\nThe ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the field label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Used to define custom dropdown options (i.e. option groups). Alternative to `options` prop.",name:"children",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"The list of options to be rendered. Each item must have a `label` and `value`.",name:"options",required:!1,type:{name:"(DropdownOption | DropdownOptGroup)[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Dropdown/utils.tsx#validateProps"]={docgenInfo:validateProps.__docgenInfo,name:"validateProps",path:"packages/design-system/src/components/Dropdown/utils.tsx#validateProps"})}catch(__react_docgen_typescript_loader_error){}try{isOptGroup.displayName="isOptGroup",isOptGroup.__docgenInfo={description:"",displayName:"isOptGroup",props:{label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"DropdownValue"}},options:{defaultValue:null,description:"",name:"options",required:!0,type:{name:"DropdownOption[]"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Dropdown/utils.tsx#isOptGroup"]={docgenInfo:isOptGroup.__docgenInfo,name:"isOptGroup",path:"packages/design-system/src/components/Dropdown/utils.tsx#isOptGroup"})}catch(__react_docgen_typescript_loader_error){}try{getFirstOptionValue.displayName="getFirstOptionValue",getFirstOptionValue.__docgenInfo={description:"",displayName:"getFirstOptionValue",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Dropdown/utils.tsx#getFirstOptionValue"]={docgenInfo:getFirstOptionValue.__docgenInfo,name:"getFirstOptionValue",path:"packages/design-system/src/components/Dropdown/utils.tsx#getFirstOptionValue"})}catch(__react_docgen_typescript_loader_error){}try{parseChildren.displayName="parseChildren",parseChildren.__docgenInfo={description:"",displayName:"parseChildren",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Dropdown/utils.tsx#parseChildren"]={docgenInfo:parseChildren.__docgenInfo,name:"parseChildren",path:"packages/design-system/src/components/Dropdown/utils.tsx#parseChildren"})}catch(__react_docgen_typescript_loader_error){}var react_aria=__webpack_require__("./packages/design-system/src/components/react-aria/index.js"),DropdownMenu=__webpack_require__("./packages/design-system/src/components/Dropdown/DropdownMenu.tsx"),useClickOutsideHandler=__webpack_require__("./packages/design-system/src/components/utilities/useClickOutsideHandler.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),debounce=__webpack_require__("./packages/design-system/src/components/utilities/debounce.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function Dropdown_typeof(obj){return Dropdown_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Dropdown_typeof(obj)}var Dropdown_excluded=["autoFocus","children","className","fieldClassName","onBlur","onChange","options","size","defaultValue","value","inputRef","getA11yStatusMessage","getA11ySelectionMessage"],Dropdown_excluded2=["label","value"],_excluded3=["label","options"];function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function Dropdown_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Dropdown_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Dropdown_arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dropdown_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Dropdown_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Dropdown_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Dropdown_ownKeys(Object(source),!0).forEach((function(key){Dropdown_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Dropdown_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Dropdown_defineProperty(obj,key,value){return(key=function Dropdown_toPropertyKey(arg){var key=function Dropdown_toPrimitive(input,hint){if("object"!==Dropdown_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Dropdown_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Dropdown_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function Dropdown_objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function Dropdown_objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var caretIcon=(0,jsx_runtime.tZ)(SvgIcon.l,{title:"",viewBox:"0 0 448 512",className:"ds-u-font-size--sm",children:(0,jsx_runtime.tZ)("path",{d:"M212.7 148.7c6.2-6.2 16.4-6.2 22.6 0l160 160c6.2 6.2 6.2 16.4 0 22.6s-16.4 6.2-22.6 0L224 182.6 75.3 331.3c-6.2 6.2-16.4 6.2-22.6 0s-6.2-16.4 0-22.6l160-160z"})}),Dropdown=function Dropdown(props){var _props$labelId,id=(0,useId.Z)("dropdown__button--",props.id),labelId=null!==(_props$labelId=props.labelId)&&void 0!==_props$labelId?_props$labelId:"".concat(id,"__label"),buttonContentId="".concat(id,"__button-content"),menuId="".concat(id,"__menu"),children=(props.autoFocus,props.children),className=props.className,fieldClassName=props.fieldClassName,userOnBlur=props.onBlur,onChange=props.onChange,options=props.options,size=props.size,defaultValue=props.defaultValue,value=props.value,inputRef=props.inputRef,extraProps=(props.getA11yStatusMessage,props.getA11ySelectionMessage,Dropdown_objectWithoutProperties(props,Dropdown_excluded)),optionsAndGroups=null!=options?options:parseChildren(children),renderReactStatelyItem=function renderReactStatelyItem(item){var label=item.label,value=item.value,extraAttrs=Dropdown_objectWithoutProperties(item,Dropdown_excluded2);return(0,compat_module.createElement)(react_aria.ck,Dropdown_objectSpread(Dropdown_objectSpread({},extraAttrs),{},{key:value}),label)},reactStatelyItems=optionsAndGroups.map((function(item,index){if(isOptGroup(item)){var label=item.label,_options=item.options,extraAttrs=Dropdown_objectWithoutProperties(item,_excluded3);return(0,compat_module.createElement)(react_aria.$0,Dropdown_objectSpread(Dropdown_objectSpread({},extraAttrs),{},{key:"group-".concat(index),title:label}),_options.map(renderReactStatelyItem))}return renderReactStatelyItem(item)})),isControlled=void 0!==value,fallbackValue=defaultValue;isControlled||void 0!==fallbackValue||(fallbackValue=getFirstOptionValue(optionsAndGroups));var _useState2=_slicedToArray((0,compat_module.useState)(fallbackValue),2),internalValueState=_useState2[0],setInternalValueState=_useState2[1],selectedKey=isControlled?value:internalValueState,state=(0,react_aria.dW)(Dropdown_objectSpread(Dropdown_objectSpread({},props),{},{children:reactStatelyItems,selectedKey:selectedKey,onSelectionChange:function onSelectionChange(value){var _triggerRef$current,_triggerRef$current$f;if(null===(_triggerRef$current=triggerRef.current)||void 0===_triggerRef$current||null===(_triggerRef$current$f=_triggerRef$current.focus)||void 0===_triggerRef$current$f||_triggerRef$current$f.call(_triggerRef$current),onChange){var target={value:value,name:props.name};onChange({target:target,currentTarget:target})}isControlled||setInternalValueState(value)}})),useFormLabelProps=(0,useFormLabel.E)(Dropdown_objectSpread(Dropdown_objectSpread({},extraProps),{},{id:id,labelId:labelId,className:classnames_default()("ds-c-dropdown",className,state.isOpen&&"ds-c-dropdown--open"),labelComponent:"label",wrapperIsFieldset:!1}));delete useFormLabelProps.fieldProps.errorMessage,delete useFormLabelProps.fieldProps.errorId,delete useFormLabelProps.fieldProps.inversed;var onBlur=(0,compat_module.useCallback)((0,debounce.Z)((function(event){var _wrapperRef$current;null!==(_wrapperRef$current=wrapperRef.current)&&void 0!==_wrapperRef$current&&_wrapperRef$current.contains(document.activeElement)||(null==userOnBlur||userOnBlur(event),state.setOpen(!1))}),20),[userOnBlur,state]),triggerRef=(0,compat_module.useRef)(),useSelectProps=(0,react_aria.L7)(Dropdown_objectSpread(Dropdown_objectSpread({},props),{},{onBlur:onBlur,isDisabled:props.disabled}),state,triggerRef),buttonProps=Dropdown_objectSpread(Dropdown_objectSpread(Dropdown_objectSpread({},(0,react_aria.UW)(useSelectProps.triggerProps,triggerRef).buttonProps),useFormLabelProps.fieldProps),{},{name:void 0,className:classnames_default()("ds-c-dropdown__button","ds-c-field",props.errorMessage&&"ds-c-field--error",props.inversed&&"ds-c-field--inverse",size&&"ds-c-field--".concat(size),fieldClassName),ref:(0,mergeRefs.Z)([triggerRef,inputRef,(0,useAutoFocus.Z)(props.autoFocus)]),"aria-controls":menuId,"aria-labelledby":"".concat(buttonContentId," ").concat(labelId)}),labelProps=Dropdown_objectSpread(Dropdown_objectSpread(Dropdown_objectSpread({},useSelectProps.labelProps),useFormLabelProps.labelProps),{},{fieldId:useFormLabelProps.fieldProps.id}),wrapperRef=(0,compat_module.useRef)();return(0,useClickOutsideHandler.Z)([wrapperRef],(function(){return state.setOpen(!1)})),(0,jsx_runtime.BX)("div",Dropdown_objectSpread(Dropdown_objectSpread({},useFormLabelProps.wrapperProps),{},{ref:wrapperRef,children:[(0,jsx_runtime.tZ)(Label._,Dropdown_objectSpread({},labelProps)),(0,jsx_runtime.tZ)(react_aria.MG,{isDisabled:props.disabled,state:state,triggerRef:triggerRef,label:props.label,name:props.name}),(0,jsx_runtime.BX)("button",Dropdown_objectSpread(Dropdown_objectSpread({},buttonProps),{},{children:[(0,jsx_runtime.tZ)("span",{id:buttonContentId,className:"ds-u-truncate",children:state.selectedItem?state.selectedItem.rendered:""}),(0,jsx_runtime.tZ)("span",{className:"ds-c-dropdown__caret",children:caretIcon})]})),state.isOpen&&(0,jsx_runtime.tZ)(DropdownMenu.Z,Dropdown_objectSpread(Dropdown_objectSpread({},useSelectProps.menuProps),{},{componentClass:"ds-c-dropdown",labelId:labelId,menuId:menuId,rootId:id,size:size,state:state,triggerRef:triggerRef})),useFormLabelProps.bottomError]}))};Dropdown.displayName="Dropdown";var Dropdown_Dropdown=Dropdown;try{Dropdown.displayName="Dropdown",Dropdown.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/dropdown/).",displayName:"Dropdown",props:{defaultValue:{defaultValue:null,description:"Sets the initial selected state. Use this for an uncontrolled component;\notherwise, use the `value` property.",name:"defaultValue",required:!1,type:{name:"DropdownValue"}},disabled:{defaultValue:null,description:"Disables the entire field.",name:"disabled",required:!1,type:{name:"boolean"}},fieldClassName:{defaultValue:null,description:"Additional classes to be added to the dropdown button element",name:"fieldClassName",required:!1,type:{name:"string"}},autoFocus:{defaultValue:null,description:"Sets the focus on the dropdown when it is first added to the document.",name:"autoFocus",required:!1,type:{name:"boolean"}},id:{defaultValue:null,description:"A unique ID to be used for the `button` element. If one isn't provided, a unique ID will be generated.  /**\nAdditional hint text to display",name:"id",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `button` element",name:"inputRef",required:!1,type:{name:"(...args: any[]) => any"}},inversed:{defaultValue:null,description:'Applies the "inverse" UI theme',name:"inversed",required:!1,type:{name:"boolean"}},name:{defaultValue:null,description:"The field's `name` attribute",name:"name",required:!0,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(...args: any[]) => any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(change: DropdownChangeObject) => any"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields](https://design.cms.gov/patterns/Forms/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},size:{defaultValue:null,description:"Sets the max-width of the input either to `'small'` or `'medium'`.",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'}]}},value:{defaultValue:null,description:"Sets the field's `value`. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `defaultValue`.",name:"value",required:!1,type:{name:"DropdownValue"}},getA11yStatusMessage:{defaultValue:null,description:"Customize the default status messages announced to screen reader users via\naria-live during certain interactions.\n@deprecated This option is not currently supported.\n@hide-prop [Deprecated]",name:"getA11yStatusMessage",required:!1,type:{name:"any"}},getA11ySelectionMessage:{defaultValue:null,description:"Customize the default status messages announced to screen reader users via\naria-live when a selection is made.\n@deprecated This option is not currently supported.\n@hide-prop [Deprecated]",name:"getA11ySelectionMessage",required:!1,type:{name:"any"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field.",name:"errorId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"@deprecated Hints are now their own component called `Hint`.\n@hide-prop [Deprecated]\n\nAdditional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},hintId:{defaultValue:null,description:"@deprecated Please render your error message directly with the 'InlineError' component instead of passing to `Label`\n@hide-prop [Deprecated]\n\nThe ID of the hint element",name:"hintId",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the field label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"Used to define custom dropdown options (i.e. option groups). Alternative to `options` prop.",name:"children",required:!1,type:{name:"ReactNode"}},options:{defaultValue:null,description:"The list of options to be rendered. Each item must have a `label` and `value`.",name:"options",required:!1,type:{name:"(DropdownOption | DropdownOptGroup)[]"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Dropdown/Dropdown.tsx#Dropdown"]={docgenInfo:Dropdown.__docgenInfo,name:"Dropdown",path:"packages/design-system/src/components/Dropdown/Dropdown.tsx#Dropdown"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/utilities/debounce.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_exports__.Z=function debounce(fn,ms){var timer,_this=this;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout((function(){timer=null,fn.apply(_this,args)}),ms)}}},"./packages/design-system/src/components/utilities/useAutoFocus.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");__webpack_exports__.Z=function useAutofocus(autoFocus){var ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)();return(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){var _ref$current,_ref$current2;autoFocus&&null!==(_ref$current=ref.current)&&void 0!==_ref$current&&_ref$current.focus&&(null===(_ref$current2=ref.current)||void 0===_ref$current2||_ref$current2.focus())}),[ref,autoFocus]),ref}},"./packages/design-system/src/components/utilities/useClickOutsideHandler.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");__webpack_exports__.Z=function useClickOutsideHandler(insideRefs,handler){function handleClickOutside(event){insideRefs.some((function(ref){var _ref$current;return null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.contains(event.target)}))||handler(event)}(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){return document.addEventListener("mousedown",handleClickOutside),document.addEventListener("touchstart",handleClickOutside),function(){document.removeEventListener("mousedown",handleClickOutside),document.removeEventListener("touchstart",handleClickOutside)}}),[handleClickOutside])}}}]);