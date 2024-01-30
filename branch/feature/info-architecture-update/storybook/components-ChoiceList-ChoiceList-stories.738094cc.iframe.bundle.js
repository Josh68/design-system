/*! For license information please see components-ChoiceList-ChoiceList-stories.738094cc.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[1528],{"./packages/design-system/src/components/ChoiceList/ChoiceList.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{ChoiceChildren:function(){return ChoiceChildren},DefaultCheckbox:function(){return DefaultCheckbox},DefaultRadio:function(){return DefaultRadio},DisabledCheckbox:function(){return DisabledCheckbox},DisabledRadio:function(){return DisabledRadio},InverseOption:function(){return InverseOption},SmallOption:function(){return SmallOption},WithError:function(){return WithError},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _DefaultCheckbox$para,_DefaultCheckbox$para2,_DefaultCheckbox$para3,_DefaultRadio$paramet,_DefaultRadio$paramet2,_DefaultRadio$paramet3,_SmallOption$paramete,_SmallOption$paramete2,_SmallOption$paramete3,_WithError$parameters,_WithError$parameters2,_WithError$parameters3,_InverseOption$parame,_InverseOption$parame2,_InverseOption$parame3,_DisabledCheckbox$par,_DisabledCheckbox$par2,_DisabledCheckbox$par3,_DisabledRadio$parame,_DisabledRadio$parame2,_DisabledRadio$parame3,_ChoiceChildren$param,_ChoiceChildren$param2,_ChoiceChildren$param3,_Alert__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/Alert/Alert.tsx"),_ChoiceList__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/ChoiceList/ChoiceList.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var meta={title:"Components/ChoiceList",component:_ChoiceList__WEBPACK_IMPORTED_MODULE_2__.Z,args:{choices:[{label:"Choice 1",value:"A",defaultChecked:!0,inputRef:function inputRef(){console.log("I am a ref callback being called!")}},{label:"Choice 2",requirementLabel:"Choice hint text",value:"B"}]},argTypes:{errorMessage:{control:"text"},hint:{control:"text"},requirementLabel:{control:"text"}}};__webpack_exports__.default=meta;var DefaultCheckbox={args:{label:"Check some boxes.",hint:"This is some helpful hint text.",name:"checkbox-choices",type:"checkbox"}},DefaultRadio={args:{label:"Choose an option.",name:"radio-choices",type:"radio"}},SmallOption={args:{label:"Choose a small option.",name:"size-variants",type:"radio",size:"small"}},WithError={args:{errorMessage:"This is an example error message.",label:"Choose an option.",name:"radio-choices",type:"radio"}},InverseOption={args:{label:"Choose an option.",hint:"This component is on an inversed background.",name:"inverse-choices",type:"checkbox",inversed:!0},parameters:{onDark:!0,layout:"fullscreen"}},DisabledCheckbox={args:{label:"Check some boxes.",hint:"These checkboxes are disabled.",name:"disabled-checkbox-choices",type:"checkbox",choices:[{label:"Disabled choice A",value:"A",disabled:!0},{label:"Disabled choice B",value:"B",disabled:!0,defaultChecked:!0}]}},DisabledRadio={args:{label:"Choose an option.",hint:"These radio buttons are disabled.",name:"disabled-radio-choices",type:"radio",choices:[{label:"Disabled choice A",value:"A",disabled:!0},{label:"Disabled choice B",value:"B",disabled:!0,defaultChecked:!0}]}},ChoiceChildren={args:{name:"radio_choices",type:"radio",label:"Choose an option.",hint:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.HY,{children:["This example shows choices with ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("em",{children:"checked children"}),"."]}),choices:[{label:"Choice 1",value:"A",defaultChecked:!0,checkedChildren:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("div",{className:"ds-c-choice__checkedChild",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_Alert__WEBPACK_IMPORTED_MODULE_3__.b,{heading:"You'll save more with this option",children:"Based on the household information you provided, this option will give you the maximum savings. We are adding some filler text just to show what it looks like when you have a long alert as the checkedChildren of a Choice component."})})},{label:"Choice 2",requirementLabel:"Choice hint text",value:"B",checkedChildren:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("div",{className:"ds-c-choice__checkedChild",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_Alert__WEBPACK_IMPORTED_MODULE_3__.b,{variation:"warn",heading:"Are you sure?",children:"Based on the household information you provided, you can actually save more with the other option. You are free to change this at any point during the application process until you have signed and submitted your final application."})})}]}};DefaultCheckbox.parameters=_objectSpread(_objectSpread({},DefaultCheckbox.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefaultCheckbox$para=DefaultCheckbox.parameters)||void 0===_DefaultCheckbox$para?void 0:_DefaultCheckbox$para.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Check some boxes.',\n    hint: 'This is some helpful hint text.',\n    name: 'checkbox-choices',\n    type: 'checkbox'\n  }\n}"},null===(_DefaultCheckbox$para2=DefaultCheckbox.parameters)||void 0===_DefaultCheckbox$para2||null===(_DefaultCheckbox$para3=_DefaultCheckbox$para2.docs)||void 0===_DefaultCheckbox$para3?void 0:_DefaultCheckbox$para3.source)})}),DefaultRadio.parameters=_objectSpread(_objectSpread({},DefaultRadio.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefaultRadio$paramet=DefaultRadio.parameters)||void 0===_DefaultRadio$paramet?void 0:_DefaultRadio$paramet.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Choose an option.',\n    name: 'radio-choices',\n    type: 'radio'\n  }\n}"},null===(_DefaultRadio$paramet2=DefaultRadio.parameters)||void 0===_DefaultRadio$paramet2||null===(_DefaultRadio$paramet3=_DefaultRadio$paramet2.docs)||void 0===_DefaultRadio$paramet3?void 0:_DefaultRadio$paramet3.source)})}),SmallOption.parameters=_objectSpread(_objectSpread({},SmallOption.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SmallOption$paramete=SmallOption.parameters)||void 0===_SmallOption$paramete?void 0:_SmallOption$paramete.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Choose a small option.',\n    name: 'size-variants',\n    type: 'radio',\n    size: 'small'\n  }\n}"},null===(_SmallOption$paramete2=SmallOption.parameters)||void 0===_SmallOption$paramete2||null===(_SmallOption$paramete3=_SmallOption$paramete2.docs)||void 0===_SmallOption$paramete3?void 0:_SmallOption$paramete3.source)})}),WithError.parameters=_objectSpread(_objectSpread({},WithError.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_WithError$parameters=WithError.parameters)||void 0===_WithError$parameters?void 0:_WithError$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    errorMessage: 'This is an example error message.',\n    label: 'Choose an option.',\n    name: 'radio-choices',\n    type: 'radio'\n  }\n}"},null===(_WithError$parameters2=WithError.parameters)||void 0===_WithError$parameters2||null===(_WithError$parameters3=_WithError$parameters2.docs)||void 0===_WithError$parameters3?void 0:_WithError$parameters3.source)})}),InverseOption.parameters=_objectSpread(_objectSpread({},InverseOption.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_InverseOption$parame=InverseOption.parameters)||void 0===_InverseOption$parame?void 0:_InverseOption$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Choose an option.',\n    hint: 'This component is on an inversed background.',\n    name: 'inverse-choices',\n    type: 'checkbox',\n    inversed: true\n  },\n  parameters: {\n    // Must supply `layout: 'fullscreen'` when we use `onDark: true`\n    onDark: true,\n    layout: 'fullscreen'\n  }\n}"},null===(_InverseOption$parame2=InverseOption.parameters)||void 0===_InverseOption$parame2||null===(_InverseOption$parame3=_InverseOption$parame2.docs)||void 0===_InverseOption$parame3?void 0:_InverseOption$parame3.source)})}),DisabledCheckbox.parameters=_objectSpread(_objectSpread({},DisabledCheckbox.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DisabledCheckbox$par=DisabledCheckbox.parameters)||void 0===_DisabledCheckbox$par?void 0:_DisabledCheckbox$par.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Check some boxes.',\n    hint: 'These checkboxes are disabled.',\n    name: 'disabled-checkbox-choices',\n    type: 'checkbox',\n    choices: [{\n      label: 'Disabled choice A',\n      value: 'A',\n      disabled: true\n    }, {\n      label: 'Disabled choice B',\n      value: 'B',\n      disabled: true,\n      defaultChecked: true\n    }]\n  }\n}"},null===(_DisabledCheckbox$par2=DisabledCheckbox.parameters)||void 0===_DisabledCheckbox$par2||null===(_DisabledCheckbox$par3=_DisabledCheckbox$par2.docs)||void 0===_DisabledCheckbox$par3?void 0:_DisabledCheckbox$par3.source)})}),DisabledRadio.parameters=_objectSpread(_objectSpread({},DisabledRadio.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DisabledRadio$parame=DisabledRadio.parameters)||void 0===_DisabledRadio$parame?void 0:_DisabledRadio$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    label: 'Choose an option.',\n    hint: 'These radio buttons are disabled.',\n    name: 'disabled-radio-choices',\n    type: 'radio',\n    choices: [{\n      label: 'Disabled choice A',\n      value: 'A',\n      disabled: true\n    }, {\n      label: 'Disabled choice B',\n      value: 'B',\n      disabled: true,\n      defaultChecked: true\n    }]\n  }\n}"},null===(_DisabledRadio$parame2=DisabledRadio.parameters)||void 0===_DisabledRadio$parame2||null===(_DisabledRadio$parame3=_DisabledRadio$parame2.docs)||void 0===_DisabledRadio$parame3?void 0:_DisabledRadio$parame3.source)})}),ChoiceChildren.parameters=_objectSpread(_objectSpread({},ChoiceChildren.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ChoiceChildren$param=ChoiceChildren.parameters)||void 0===_ChoiceChildren$param?void 0:_ChoiceChildren$param.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    name: 'radio_choices',\n    type: 'radio',\n    label: 'Choose an option.',\n    hint: <>\n        This example shows choices with <em>checked children</em>.\n      </>,\n    choices: [{\n      label: 'Choice 1',\n      value: 'A',\n      defaultChecked: true,\n      checkedChildren: <div className=\"ds-c-choice__checkedChild\">\n            <Alert heading=\"You'll save more with this option\">\n              Based on the household information you provided, this option will give you the maximum\n              savings. We are adding some filler text just to show what it looks like when you have\n              a long alert as the checkedChildren of a Choice component.\n            </Alert>\n          </div>\n    }, {\n      label: 'Choice 2',\n      requirementLabel: 'Choice hint text',\n      value: 'B',\n      checkedChildren: <div className=\"ds-c-choice__checkedChild\">\n            <Alert variation=\"warn\" heading=\"Are you sure?\">\n              Based on the household information you provided, you can actually save more with the\n              other option. You are free to change this at any point during the application process\n              until you have signed and submitted your final application.\n            </Alert>\n          </div>\n    }]\n  }\n}"},null===(_ChoiceChildren$param2=ChoiceChildren.parameters)||void 0===_ChoiceChildren$param2||null===(_ChoiceChildren$param3=_ChoiceChildren$param2.docs)||void 0===_ChoiceChildren$param3?void 0:_ChoiceChildren$param3.source)})});var __namedExportsOrder=["DefaultCheckbox","DefaultRadio","SmallOption","WithError","InverseOption","DisabledCheckbox","DisabledRadio","ChoiceChildren"]},"./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function getAnalyticsContentFromRefs(refs){return refs.map((function(ref){var _ref$current;return null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.textContent})).find((function(textContent){return textContent}))}__webpack_require__.d(__webpack_exports__,{L:function(){return getAnalyticsContentFromRefs}}),__webpack_exports__.Z=getAnalyticsContentFromRefs},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":function(module,__unused_webpack_exports,__webpack_require__){var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);