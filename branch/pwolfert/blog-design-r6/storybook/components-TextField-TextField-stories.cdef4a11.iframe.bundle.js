/*! For license information please see components-TextField-TextField-stories.cdef4a11.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[8914],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{aD:function(){return chunk_OPEUWD42.aD}});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./packages/design-system/src/components/TextField/TextField.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllMaskedFields:function(){return AllMaskedFields},DisabledField:function(){return DisabledField},ErrorField:function(){return ErrorField},LabelMaskedCurrency:function(){return LabelMaskedCurrency},LabelMaskedPhone:function(){return LabelMaskedPhone},LabelMaskedPostalCode:function(){return LabelMaskedPostalCode},LabelMaskedSSN:function(){return LabelMaskedSSN},MultilineField:function(){return MultilineField},SingleLineField:function(){return SingleLineField},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _SingleLineField$para,_SingleLineField$para2,_SingleLineField$para3,_MultilineField$param,_MultilineField$param2,_MultilineField$param3,_ErrorField$parameter,_ErrorField$parameter2,_ErrorField$parameter3,_DisabledField$parame,_DisabledField$parame2,_DisabledField$parame3,_AllMaskedFields$para,_AllMaskedFields$para2,_AllMaskedFields$para3,_LabelMaskedPhone$par,_LabelMaskedPhone$par2,_LabelMaskedPhone$par3,_LabelMaskedSSN$param,_LabelMaskedSSN$param2,_LabelMaskedSSN$param3,_LabelMaskedPostalCod,_LabelMaskedPostalCod2,_LabelMaskedPostalCod3,_LabelMaskedCurrency$,_LabelMaskedCurrency$2,_LabelMaskedCurrency$3,_TextField__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/TextField/TextField.tsx"),_maskHelpers__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/TextField/maskHelpers.ts"),_useLabelMask__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/TextField/useLabelMask.tsx"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var meta={title:"Components/TextField",component:_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,args:{label:"Text Field Label",onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onChange"),onBlur:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onBlur"),name:"text-field-story"}};function getMaskFunction(value){switch(value){case"PHONE_MASK":return _useLabelMask__WEBPACK_IMPORTED_MODULE_5__.N_;case"ZIP_MASK":return _useLabelMask__WEBPACK_IMPORTED_MODULE_5__.AJ;case"SSN_MASK":return _useLabelMask__WEBPACK_IMPORTED_MODULE_5__.Nl;case"CURRENCY_MASK":return _useLabelMask__WEBPACK_IMPORTED_MODULE_5__.vP}}__webpack_exports__.default=meta;var UncontrolledTemplate={render:function Component(args){return args.labelMask&&(args.labelMask=getMaskFunction(args.labelMask)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,_objectSpread({},args))}},ControlledTemplate={render:function Component(args){var _useArgs2=_slicedToArray((0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)(),2),updateArgs=(_useArgs2[0],_useArgs2[1]);return args.labelMask&&(args.labelMask=getMaskFunction(args.labelMask)),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,_objectSpread(_objectSpread({},args),{},{onChange:function onChange(event){(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_1__.aD)("onChange")(event),updateArgs({value:event.currentTarget.value})}}))}},SingleLineField=_objectSpread({},UncontrolledTemplate),MultilineField=_objectSpread(_objectSpread({},UncontrolledTemplate),{},{args:{multiline:!0,rows:3}}),ErrorField=_objectSpread(_objectSpread({},UncontrolledTemplate),{},{args:{errorMessage:"Example error message",hint:"Helpful hint text"}}),DisabledField=_objectSpread(_objectSpread({},UncontrolledTemplate),{},{args:{disabled:!0}}),AllMaskedFields={render:function Component(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,{ariaLabel:"Enter monthly income amount in dollars.",labelClassName:"ds-u-margin-top--0",label:"Currency",mask:"currency",inputMode:"numeric",type:"text",name:"currency_example",onBlur:function onBlur(evt){return console.log("Unmasked value: ",(0,_maskHelpers__WEBPACK_IMPORTED_MODULE_6__.FF)(evt.target.value,"currency"))},defaultValue:"2,500"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,{label:"Phone number",mask:"phone",name:"phone_example",onBlur:function onBlur(evt){return console.log("Unmasked value: ",(0,_maskHelpers__WEBPACK_IMPORTED_MODULE_6__.FF)(evt.target.value,"phone"))},type:"tel",defaultValue:"1234567890"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,{label:"Social security number (SSN)",mask:"ssn",inputMode:"numeric",type:"text",name:"ssn_example",onBlur:function onBlur(evt){return console.log("Unmasked value: ",(0,_maskHelpers__WEBPACK_IMPORTED_MODULE_6__.FF)(evt.target.value,"ssn"))},defaultValue:"123456789"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_TextField__WEBPACK_IMPORTED_MODULE_4__.Z,{label:"Zip code",mask:"zip",inputMode:"numeric",type:"text",name:"zip_example",onBlur:function onBlur(evt){return console.log("Unmasked value: ",(0,_maskHelpers__WEBPACK_IMPORTED_MODULE_6__.FF)(evt.target.value,"zip"))},defaultValue:"123456789"})]})}},LabelMaskedPhone=_objectSpread(_objectSpread({},ControlledTemplate),{},{args:{name:"labelMask-phone",label:"Enter your phone number",hint:"Only enter an area code + 7 digit phone number where you can be reached.",labelMask:"PHONE_MASK",numeric:!0}}),LabelMaskedSSN=_objectSpread(_objectSpread({},ControlledTemplate),{},{args:{name:"labelMask-ssn",label:"Enter your social security number",hint:"Please enter your SSA administered Social Security Number",labelMask:"SSN_MASK",numeric:!0}}),LabelMaskedPostalCode=_objectSpread(_objectSpread({},ControlledTemplate),{},{args:{name:"labelMask-zipcode",label:"Enter your postal service zip code",hint:"Please enter your Zip Code",labelMask:"ZIP_MASK",numeric:!0}}),LabelMaskedCurrency=_objectSpread(_objectSpread({},ControlledTemplate),{},{args:{name:"labelMask-currency",label:"Enter a dollar amount",hint:"Please enter a dollar amount",labelMask:"CURRENCY_MASK",numeric:!0}});SingleLineField.parameters=_objectSpread(_objectSpread({},SingleLineField.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SingleLineField$para=SingleLineField.parameters)||void 0===_SingleLineField$para?void 0:_SingleLineField$para.docs),{},{source:_objectSpread({originalSource:"{\n  ...UncontrolledTemplate\n}"},null===(_SingleLineField$para2=SingleLineField.parameters)||void 0===_SingleLineField$para2||null===(_SingleLineField$para3=_SingleLineField$para2.docs)||void 0===_SingleLineField$para3?void 0:_SingleLineField$para3.source)})}),MultilineField.parameters=_objectSpread(_objectSpread({},MultilineField.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MultilineField$param=MultilineField.parameters)||void 0===_MultilineField$param?void 0:_MultilineField$param.docs),{},{source:_objectSpread({originalSource:"{\n  ...UncontrolledTemplate,\n  args: {\n    multiline: true,\n    rows: 3\n  }\n}"},null===(_MultilineField$param2=MultilineField.parameters)||void 0===_MultilineField$param2||null===(_MultilineField$param3=_MultilineField$param2.docs)||void 0===_MultilineField$param3?void 0:_MultilineField$param3.source)})}),ErrorField.parameters=_objectSpread(_objectSpread({},ErrorField.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ErrorField$parameter=ErrorField.parameters)||void 0===_ErrorField$parameter?void 0:_ErrorField$parameter.docs),{},{source:_objectSpread({originalSource:"{\n  ...UncontrolledTemplate,\n  args: {\n    errorMessage: 'Example error message',\n    hint: 'Helpful hint text'\n  }\n}"},null===(_ErrorField$parameter2=ErrorField.parameters)||void 0===_ErrorField$parameter2||null===(_ErrorField$parameter3=_ErrorField$parameter2.docs)||void 0===_ErrorField$parameter3?void 0:_ErrorField$parameter3.source)})}),DisabledField.parameters=_objectSpread(_objectSpread({},DisabledField.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DisabledField$parame=DisabledField.parameters)||void 0===_DisabledField$parame?void 0:_DisabledField$parame.docs),{},{source:_objectSpread({originalSource:"{\n  ...UncontrolledTemplate,\n  args: {\n    disabled: true\n  }\n}"},null===(_DisabledField$parame2=DisabledField.parameters)||void 0===_DisabledField$parame2||null===(_DisabledField$parame3=_DisabledField$parame2.docs)||void 0===_DisabledField$parame3?void 0:_DisabledField$parame3.source)})}),AllMaskedFields.parameters=_objectSpread(_objectSpread({},AllMaskedFields.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AllMaskedFields$para=AllMaskedFields.parameters)||void 0===_AllMaskedFields$para?void 0:_AllMaskedFields$para.docs),{},{source:_objectSpread({originalSource:'{\n  render: function Component(args) {\n    return <>\n        <TextField ariaLabel="Enter monthly income amount in dollars." labelClassName="ds-u-margin-top--0" label="Currency" mask="currency" inputMode="numeric" type="text" name="currency_example" onBlur={evt => console.log(\'Unmasked value: \', unmaskValue(evt.target.value, \'currency\'))} defaultValue="2,500" />\n        <TextField label="Phone number" mask="phone" name="phone_example" onBlur={evt => console.log(\'Unmasked value: \', unmaskValue(evt.target.value, \'phone\'))} type="tel" defaultValue="1234567890" />\n        <TextField label="Social security number (SSN)" mask="ssn" inputMode="numeric" type="text" name="ssn_example" onBlur={evt => console.log(\'Unmasked value: \', unmaskValue(evt.target.value, \'ssn\'))} defaultValue="123456789" />\n        <TextField label="Zip code" mask="zip" inputMode="numeric" type="text" name="zip_example" onBlur={evt => console.log(\'Unmasked value: \', unmaskValue(evt.target.value, \'zip\'))} defaultValue="123456789" />\n      </>;\n  }\n}'},null===(_AllMaskedFields$para2=AllMaskedFields.parameters)||void 0===_AllMaskedFields$para2||null===(_AllMaskedFields$para3=_AllMaskedFields$para2.docs)||void 0===_AllMaskedFields$para3?void 0:_AllMaskedFields$para3.source)})}),LabelMaskedPhone.parameters=_objectSpread(_objectSpread({},LabelMaskedPhone.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LabelMaskedPhone$par=LabelMaskedPhone.parameters)||void 0===_LabelMaskedPhone$par?void 0:_LabelMaskedPhone$par.docs),{},{source:_objectSpread({originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    name: 'labelMask-phone',\n    label: 'Enter your phone number',\n    hint: 'Only enter an area code + 7 digit phone number where you can be reached.',\n    labelMask: ('PHONE_MASK' as any),\n    numeric: true\n  }\n}"},null===(_LabelMaskedPhone$par2=LabelMaskedPhone.parameters)||void 0===_LabelMaskedPhone$par2||null===(_LabelMaskedPhone$par3=_LabelMaskedPhone$par2.docs)||void 0===_LabelMaskedPhone$par3?void 0:_LabelMaskedPhone$par3.source)})}),LabelMaskedSSN.parameters=_objectSpread(_objectSpread({},LabelMaskedSSN.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LabelMaskedSSN$param=LabelMaskedSSN.parameters)||void 0===_LabelMaskedSSN$param?void 0:_LabelMaskedSSN$param.docs),{},{source:_objectSpread({originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    name: 'labelMask-ssn',\n    label: 'Enter your social security number',\n    hint: 'Please enter your SSA administered Social Security Number',\n    labelMask: ('SSN_MASK' as any),\n    numeric: true\n  }\n}"},null===(_LabelMaskedSSN$param2=LabelMaskedSSN.parameters)||void 0===_LabelMaskedSSN$param2||null===(_LabelMaskedSSN$param3=_LabelMaskedSSN$param2.docs)||void 0===_LabelMaskedSSN$param3?void 0:_LabelMaskedSSN$param3.source)})}),LabelMaskedPostalCode.parameters=_objectSpread(_objectSpread({},LabelMaskedPostalCode.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LabelMaskedPostalCod=LabelMaskedPostalCode.parameters)||void 0===_LabelMaskedPostalCod?void 0:_LabelMaskedPostalCod.docs),{},{source:_objectSpread({originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    name: 'labelMask-zipcode',\n    label: 'Enter your postal service zip code',\n    hint: 'Please enter your Zip Code',\n    labelMask: ('ZIP_MASK' as any),\n    numeric: true\n  }\n}"},null===(_LabelMaskedPostalCod2=LabelMaskedPostalCode.parameters)||void 0===_LabelMaskedPostalCod2||null===(_LabelMaskedPostalCod3=_LabelMaskedPostalCod2.docs)||void 0===_LabelMaskedPostalCod3?void 0:_LabelMaskedPostalCod3.source)})}),LabelMaskedCurrency.parameters=_objectSpread(_objectSpread({},LabelMaskedCurrency.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LabelMaskedCurrency$=LabelMaskedCurrency.parameters)||void 0===_LabelMaskedCurrency$?void 0:_LabelMaskedCurrency$.docs),{},{source:_objectSpread({originalSource:"{\n  ...ControlledTemplate,\n  args: {\n    name: 'labelMask-currency',\n    label: 'Enter a dollar amount',\n    hint: 'Please enter a dollar amount',\n    labelMask: ('CURRENCY_MASK' as any),\n    numeric: true\n  }\n}"},null===(_LabelMaskedCurrency$2=LabelMaskedCurrency.parameters)||void 0===_LabelMaskedCurrency$2||null===(_LabelMaskedCurrency$3=_LabelMaskedCurrency$2.docs)||void 0===_LabelMaskedCurrency$3?void 0:_LabelMaskedCurrency$3.source)})});var __namedExportsOrder=["SingleLineField","MultilineField","ErrorField","DisabledField","AllMaskedFields","LabelMaskedPhone","LabelMaskedSSN","LabelMaskedPostalCode","LabelMaskedCurrency"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":function(module,__unused_webpack_exports,__webpack_require__){var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);