(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[403],{"./packages/design-system/src/components/ChoiceList/Choice.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var ev_emitter__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/ev-emitter/ev-emitter.js"),ev_emitter__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(ev_emitter__WEBPACK_IMPORTED_MODULE_0__),_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/FormLabel/FormLabel.tsx"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["aria-live","aria-relevant","aria-atomic","checkedChildren","className","disabled","errorMessage","errorMessageClassName","hint","inversed","inputClassName","label","labelClassName","requirementLabel","size","uncheckedChildren","inputRef"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=_toPropertyKey(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||!1,descriptor.configurable=!0,"value"in descriptor&&(descriptor.writable=!0),Object.defineProperty(target,_toPropertyKey(descriptor.key),descriptor)}}function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}function _setPrototypeOf(o,p){return _setPrototypeOf=Object.setPrototypeOf?Object.setPrototypeOf.bind():function _setPrototypeOf(o,p){return o.__proto__=p,o},_setPrototypeOf(o,p)}function _createSuper(Derived){var hasNativeReflectConstruct=function _isNativeReflectConstruct(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}();return function _createSuperInternal(){var result,Super=_getPrototypeOf(Derived);if(hasNativeReflectConstruct){var NewTarget=_getPrototypeOf(this).constructor;result=Reflect.construct(Super,arguments,NewTarget)}else result=Super.apply(this,arguments);return function _possibleConstructorReturn(self,call){if(call&&("object"===_typeof(call)||"function"==typeof call))return call;if(void 0!==call)throw new TypeError("Derived constructors may only return object or undefined");return _assertThisInitialized(self)}(this,result)}}function _assertThisInitialized(self){if(void 0===self)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return self}function _getPrototypeOf(o){return _getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf.bind():function _getPrototypeOf(o){return o.__proto__||Object.getPrototypeOf(o)},_getPrototypeOf(o)}var dsChoiceEmitter=new(ev_emitter__WEBPACK_IMPORTED_MODULE_0___default()),Choice=function(_React$PureComponent){!function _inherits(subClass,superClass){if("function"!=typeof superClass&&null!==superClass)throw new TypeError("Super expression must either be null or a function");subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,writable:!0,configurable:!0}}),Object.defineProperty(subClass,"prototype",{writable:!1}),superClass&&_setPrototypeOf(subClass,superClass)}(Choice,_React$PureComponent);var _super=_createSuper(Choice);function Choice(props){var _this;return function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor))throw new TypeError("Cannot call a class as a function")}(this,Choice),(_this=_super.call(this,props)).input=null,_this.handleChange=_this.handleChange.bind(_assertThisInitialized(_this)),_this.handleUncheck=_this.handleUncheck.bind(_assertThisInitialized(_this)),_this.id=_this.props.id||lodash_uniqueId__WEBPACK_IMPORTED_MODULE_3___default()("".concat(_this.props.type,"_").concat(_this.props.name,"_")),void 0===_this.props.checked?(_this.isControlled=!1,_this.state={checked:_this.props.defaultChecked}):_this.isControlled=!0,_this}return function _createClass(Constructor,protoProps,staticProps){return protoProps&&_defineProperties(Constructor.prototype,protoProps),staticProps&&_defineProperties(Constructor,staticProps),Object.defineProperty(Constructor,"prototype",{writable:!1}),Constructor}(Choice,[{key:"componentDidMount",value:function componentDidMount(){this.isControlled||"radio"!==this.props.type||(this.uncheckEventName="".concat(this.props.name,"-uncheck"),dsChoiceEmitter.on(this.uncheckEventName,this.handleUncheck))}},{key:"componentWillUnmount",value:function componentWillUnmount(){this.isControlled||"radio"!==this.props.type||dsChoiceEmitter.off(this.uncheckEventName,this.handleUncheck)}},{key:"checked",value:function checked(){return this.isControlled?this.props.checked:this.state.checked}},{key:"handleUncheck",value:function handleUncheck(checkedId){checkedId!==this.id&&this.input.checked!==this.state.checked&&this.setState({checked:this.input.checked})}},{key:"handleChange",value:function handleChange(evt){this.props.onChange&&this.props.onChange(evt),this.isControlled||(this.setState({checked:evt.target.checked}),"radio"===this.props.type&&evt.target.checked&&dsChoiceEmitter.emitEvent(this.uncheckEventName,[this.id]))}},{key:"render",value:function render(){var _this2=this,_this$props=this.props,ariaLive=_this$props["aria-live"],ariaRelevant=_this$props["aria-relevant"],ariaAtomic=_this$props["aria-atomic"],checkedChildren=_this$props.checkedChildren,className=_this$props.className,disabled=_this$props.disabled,errorMessage=_this$props.errorMessage,errorMessageClassName=_this$props.errorMessageClassName,hint=_this$props.hint,inversed=_this$props.inversed,inputClassName=_this$props.inputClassName,label=_this$props.label,labelClassName=_this$props.labelClassName,requirementLabel=_this$props.requirementLabel,size=_this$props.size,uncheckedChildren=_this$props.uncheckedChildren,inputRef=_this$props.inputRef,inputProps=_objectWithoutProperties(_this$props,_excluded),inputClasses=classnames__WEBPACK_IMPORTED_MODULE_2___default()(inputClassName,"ds-c-choice",{"ds-c-choice--inverse":inversed,"ds-c-choice--small":"small"===size});return inputProps.id&&delete inputProps.id,inputProps.onChange&&delete inputProps.onChange,(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.BX)("div",{className:className,"aria-live":null!=ariaLive?ariaLive:checkedChildren?"polite":null,"aria-relevant":null!=ariaRelevant?ariaRelevant:checkedChildren?"additions text":null,"aria-atomic":null!=ariaAtomic?ariaAtomic:checkedChildren?"false":null,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.BX)("div",{className:"ds-c-choice-wrapper",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("input",_objectSpread({className:inputClasses,id:this.id,onChange:this.handleChange,disabled:disabled,ref:function ref(_ref){_this2.input=_ref,inputRef&&inputRef(_ref)}},inputProps)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_FormLabel_FormLabel__WEBPACK_IMPORTED_MODULE_5__.Z,{className:labelClassName,fieldId:this.id,errorMessage:errorMessage,errorMessageClassName:errorMessageClassName,hint:hint,inversed:inversed,requirementLabel:requirementLabel,children:label})]}),this.checked()?checkedChildren:uncheckedChildren]})}}]),Choice}(react__WEBPACK_IMPORTED_MODULE_1__.default.PureComponent);Choice.displayName="Choice",__webpack_exports__.Z=Choice;try{Choice.displayName="Choice",Choice.__docgenInfo={description:"",displayName:"Choice",props:{ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLInputElement>"}},checked:{defaultValue:null,description:"Sets the input's `checked` state. Use this in combination with `onChange`\nfor a controlled component; otherwise, set `defaultChecked`.",name:"checked",required:!1,type:{name:"boolean"}},checkedChildren:{defaultValue:null,description:"Content to be shown when the choice is checked. See\n**Checked children and the expose within pattern** on\nthe Guidance tab for detailed instructions.",name:"checkedChildren",required:!1,type:{name:"ReactNode"}},uncheckedChildren:{defaultValue:null,description:"Content to be shown when the choice is not checked",name:"uncheckedChildren",required:!1,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root `div` element.",name:"className",required:!1,type:{name:"string"}},inputClassName:{defaultValue:null,description:"Additional classes to be added to the `input` element.",name:"inputClassName",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label text or HTML.",name:"label",required:!1,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the `FormLabel`.",name:"labelClassName",required:!1,type:{name:"string"}},defaultChecked:{defaultValue:null,description:"Sets the initial `checked` state. Use this for an uncontrolled component;\notherwise, use the `checked` property.",name:"defaultChecked",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `input` element",name:"inputRef",required:!1,type:{name:"(...args: any[]) => any"}},hint:{defaultValue:null,description:"Additional hint text to display below the choice's label",name:"hint",required:!1,type:{name:"ReactNode"}},id:{defaultValue:null,description:"A unique ID to be used for the input field, as well as the label's\n`for` attribute. A unique ID will be generated if one isn't provided.",name:"id",required:!1,type:{name:"string"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},inversed:{defaultValue:null,description:'Applies the "inverse" UI theme',name:"inversed",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:'"small"'}},name:{defaultValue:null,description:"The `input` field's `name` attribute",name:"name",required:!0,type:{name:"string"}},onBlur:{defaultValue:null,description:"",name:"onBlur",required:!1,type:{name:"(...args: any[]) => any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(event: ChangeEvent<HTMLInputElement>) => any"}},type:{defaultValue:null,description:"Sets the type to render `checkbox` fields or `radio` buttons",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},value:{defaultValue:null,description:"The `input` `value` attribute",name:"value",required:!0,type:{name:"ChoiceValue"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/ChoiceList/Choice.tsx#Choice"]={docgenInfo:Choice.__docgenInfo,name:"Choice",path:"packages/design-system/src/components/ChoiceList/Choice.tsx#Choice"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/ChoiceList/ChoiceList.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var _Choice__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/ChoiceList/Choice.tsx"),_FormLabel__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/FormLabel/useFormLabel.tsx"),_FormLabel__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/FormLabel/FormLabel.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=(__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),__webpack_require__("./node_modules/classnames/index.js")),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["onBlur","onComponentBlur","choices"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var ChoiceList=function ChoiceList(props){var onBlur=props.onBlur,onComponentBlur=props.onComponentBlur,choices=props.choices,listProps=_objectWithoutProperties(props,_excluded);var choiceRefs=[],handleBlur=function handleBlur(evt){onBlur&&onBlur(evt),onComponentBlur&&handleComponentBlur(evt)},handleComponentBlur=function handleComponentBlur(evt){setTimeout((function(){choiceRefs.includes(document.activeElement)||onComponentBlur(evt)}),20)},_useFormLabel=(0,_FormLabel__WEBPACK_IMPORTED_MODULE_3__.E)(_objectSpread(_objectSpread({},listProps),{},{labelComponent:"legend",wrapperIsFieldset:!0})),labelProps=_useFormLabel.labelProps,wrapperProps=(_useFormLabel.fieldProps,_useFormLabel.wrapperProps),bottomError=_useFormLabel.bottomError,choiceItems=choices.map((function(choiceProps){var completeChoiceProps=_objectSpread(_objectSpread({},choiceProps),{},{inversed:props.inversed,name:props.name,onBlur:handleBlur,onChange:props.onChange,size:props.size,type:props.type,inputClassName:classnames__WEBPACK_IMPORTED_MODULE_1___default()(choiceProps.inputClassName,{"ds-c-choice--error":props.errorMessage}),disabled:choiceProps.disabled||props.disabled,inputRef:function inputRef(ref){choiceRefs.push(ref),choiceProps.inputRef&&choiceProps.inputRef(ref)}});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_Choice__WEBPACK_IMPORTED_MODULE_4__.Z,_objectSpread({},completeChoiceProps),choiceProps.value)}));return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("fieldset",_objectSpread(_objectSpread({},wrapperProps),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_FormLabel__WEBPACK_IMPORTED_MODULE_5__.Z,_objectSpread({},labelProps)),choiceItems,bottomError]}))};ChoiceList.displayName="ChoiceList",__webpack_exports__.Z=ChoiceList;try{ChoiceList.displayName="ChoiceList",ChoiceList.__docgenInfo={description:"",displayName:"ChoiceList",props:{choices:{defaultValue:null,description:"Array of [`Choice`]({{root}}/components/choice/#components.choice.react) data objects to be rendered.",name:"choices",required:!0,type:{name:"ChoiceProps[]"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"Disables the entire field.",name:"disabled",required:!1,type:{name:"boolean"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement ("Required", "Optional", etc.). See [Required and Optional Fields]({{root}}/guidelines/forms/#required-and-optional-fields).',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},inversed:{defaultValue:null,description:'Applies the "inverse" UI theme',name:"inversed",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"Label for the field",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the `FormLabel`.",name:"labelClassName",required:!1,type:{name:"string"}},name:{defaultValue:null,description:"The field's `name` attribute",name:"name",required:!0,type:{name:"string"}},onBlur:{defaultValue:null,description:"Called anytime any choice is blurred",name:"onBlur",required:!1,type:{name:"(...args: any[]) => any"}},onComponentBlur:{defaultValue:null,description:"Called when any choice is blurred and the focus does not land on one\nof the other choices inside this component (i.e., when the whole\ncomponent loses focus)",name:"onComponentBlur",required:!1,type:{name:"(...args: any[]) => any"}},onChange:{defaultValue:null,description:"",name:"onChange",required:!1,type:{name:"(...args: any[]) => any"}},size:{defaultValue:null,description:"Sets the size of the checkbox or radio button",name:"size",required:!1,type:{name:'"small"'}},type:{defaultValue:null,description:"Sets the type to render `checkbox` fields or `radio` buttons",name:"type",required:!0,type:{name:"enum",value:[{value:'"checkbox"'},{value:'"radio"'}]}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field.",name:"errorId",required:!1,type:{name:"string"}},textClassName:{defaultValue:null,description:"Additional classes to be added to the label text.",name:"textClassName",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLFieldSetElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/ChoiceList/ChoiceList.tsx#ChoiceList"]={docgenInfo:ChoiceList.__docgenInfo,name:"ChoiceList",path:"packages/design-system/src/components/ChoiceList/ChoiceList.tsx#ChoiceList"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/FormLabel/useFormLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{E:function(){return useFormLabel}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_InlineError_InlineError__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/InlineError/InlineError.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__),_flags__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/flags.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["className","label","labelClassName","labelComponent","errorMessage","errorMessageClassName","errorPlacement","hint","requirementLabel","inversed","wrapperIsFieldset"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function useFormLabel(props){var _props$id,_props$labelId,_props$errorId,_props$ariaInvalid,generatedId=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()("field_")).current,id=null!==(_props$id=props.id)&&void 0!==_props$id?_props$id:generatedId,labelId=null!==(_props$labelId=props.labelId)&&void 0!==_props$labelId?_props$labelId:"".concat(id,"-label"),errorId=null!==(_props$errorId=props.errorId)&&void 0!==_props$errorId?_props$errorId:"".concat(id,"-error"),className=props.className,label=props.label,labelClassName=props.labelClassName,labelComponent=props.labelComponent,errorMessage=props.errorMessage,errorMessageClassName=props.errorMessageClassName,_props$errorPlacement=props.errorPlacement,errorPlacement=void 0===_props$errorPlacement?(0,_flags__WEBPACK_IMPORTED_MODULE_4__.pp)():_props$errorPlacement,hint=props.hint,requirementLabel=props.requirementLabel,inversed=props.inversed,wrapperIsFieldset=props.wrapperIsFieldset,remainingProps=_objectWithoutProperties(props,_excluded),hasBottomError="bottom"===errorPlacement&&errorMessage,bottomError=hasBottomError?(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_InlineError_InlineError__WEBPACK_IMPORTED_MODULE_5__.Z,{id:errorId,inversed:inversed,className:errorMessageClassName,children:errorMessage}):void 0,showHiddenError=wrapperIsFieldset&&bottomError,ariaInvalid=null!==(_props$ariaInvalid=props["aria-invalid"])&&void 0!==_props$ariaInvalid?_props$ariaInvalid:!!errorMessage;return{labelProps:{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.HY,{children:[label,showHiddenError&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("div",{className:"ds-u-visibility--screen-reader",children:errorMessage})]}),className:labelClassName,component:labelComponent,errorMessage:bottomError?void 0:errorMessage,errorMessageClassName:bottomError?void 0:errorMessageClassName,errorId:errorId,fieldId:wrapperIsFieldset?void 0:id,hint:hint,id:labelId,requirementLabel:requirementLabel,inversed:inversed},fieldProps:_objectSpread(_objectSpread({},remainingProps),{},{id:id,errorMessage:errorMessage,inversed:inversed,"aria-describedby":hasBottomError?classnames__WEBPACK_IMPORTED_MODULE_1___default()(props["aria-describedby"],errorId):props["aria-describedby"],"aria-invalid":wrapperIsFieldset?void 0:ariaInvalid}),wrapperProps:{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()({"ds-c-fieldset":wrapperIsFieldset},className),"aria-invalid":wrapperIsFieldset?ariaInvalid:void 0},bottomError:bottomError,errorId:errorId}}try{useFormLabel.displayName="useFormLabel",useFormLabel.__docgenInfo={description:"This hook contains business logic for how an input field relates to its label\nand wrapping container element. It takes a component's props and generates\nthe specialized set of props for its label, field, wrapper element, and\npossible detached \"bottom error\". While the order and structure of those\nelements are different between components and are specific to their\nimplementation, much of the logic for prop/attribute generation is consistent\nbetween components. The hook will return the relevant information as\nproperties of an object:\n\n  - labelProps:   Props to be applied to a `FormLabel` (where we get the name)\n  - fieldProps:   Props to be applied to the field (a.k.a., the input)\n  - wrapperProps: Props to be applied to the wrapping element\n  - bottomError:  A rendered React element representing a bottom-placed error\n  - errorId:      The id (string) of the error-message element, in case we\n                  need to reference it (currently only necessary to support\n                  the FormControl component, which this hook aims to replace)\n\nNote that while it's helpful now to abstract away this logic behind a shared\nhook, that may not always be the case. The first step in creating this hook\nwas to allow an alternative to `FormControl` that allowed for more freedom in\nhow the component's individual elements were structured at to get rid of the\ndichotomy it imposes on components where their implementation must be split\nbetween an inner and outer component.",displayName:"useFormLabel",props:{labelComponent:{defaultValue:null,description:"The root HTML element used to render the field label",name:"labelComponent",required:!0,type:{name:"enum",value:[{value:'"label"'},{value:'"legend"'}]}},wrapperIsFieldset:{defaultValue:null,description:"",name:"wrapperIsFieldset",required:!0,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},errorPlacement:{defaultValue:null,description:"Location of the error message relative to the field input",name:"errorPlacement",required:!1,type:{name:"enum",value:[{value:'"top"'},{value:'"bottom"'}]}},id:{defaultValue:null,description:"A unique `id` for the field element. Useful for referencing the field from\nother components with `aria-describedby`.",name:"id",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Label for the field.",name:"label",required:!0,type:{name:"ReactNode"}},labelClassName:{defaultValue:null,description:"Additional classes to be added to the field label",name:"labelClassName",required:!1,type:{name:"string"}},labelId:{defaultValue:null,description:"A unique `id` to be used on the field label. If one isn't provided, a unique ID\nwill be generated.",name:"labelId",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:'Set to `true` to apply the "inverse" theme',name:"inversed",required:!1,type:{name:"boolean"}},errorMessage:{defaultValue:null,description:"Enable the error state by providing an error message.",name:"errorMessage",required:!1,type:{name:"ReactNode"}},errorMessageClassName:{defaultValue:null,description:"Additional classes to be added to the error message",name:"errorMessageClassName",required:!1,type:{name:"string"}},errorId:{defaultValue:null,description:"The ID of the error message applied to this field.",name:"errorId",required:!1,type:{name:"string"}},hint:{defaultValue:null,description:"Additional hint text to display",name:"hint",required:!1,type:{name:"ReactNode"}},requirementLabel:{defaultValue:null,description:'Text showing the requirement (ie. "Optional", or "Required").\nIn most cases, this should be used to indicate which fields are optional.\nSee the [form guidelines]({{root}}/guidelines/forms/) for more info.',name:"requirementLabel",required:!1,type:{name:"ReactNode"}},textClassName:{defaultValue:null,description:"Additional classes to be added to the label text.",name:"textClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/FormLabel/useFormLabel.tsx#useFormLabel"]={docgenInfo:useFormLabel.__docgenInfo,name:"useFormLabel",path:"packages/design-system/src/components/FormLabel/useFormLabel.tsx#useFormLabel"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/ev-emitter/ev-emitter.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;"undefined"!=typeof window&&window,void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=function(){"use strict";function EvEmitter(){}var proto=EvEmitter.prototype;return proto.on=function(eventName,listener){if(eventName&&listener){var events=this._events=this._events||{},listeners=events[eventName]=events[eventName]||[];return-1==listeners.indexOf(listener)&&listeners.push(listener),this}},proto.once=function(eventName,listener){if(eventName&&listener){this.on(eventName,listener);var onceEvents=this._onceEvents=this._onceEvents||{};return(onceEvents[eventName]=onceEvents[eventName]||{})[listener]=!0,this}},proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(listeners&&listeners.length){var index=listeners.indexOf(listener);return-1!=index&&listeners.splice(index,1),this}},proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(listeners&&listeners.length){listeners=listeners.slice(0),args=args||[];for(var onceListeners=this._onceEvents&&this._onceEvents[eventName],i=0;i<listeners.length;i++){var listener=listeners[i];onceListeners&&onceListeners[listener]&&(this.off(eventName,listener),delete onceListeners[listener]),listener.apply(this,args)}return this}},proto.allOff=function(){delete this._events,delete this._onceEvents},EvEmitter})?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}}]);