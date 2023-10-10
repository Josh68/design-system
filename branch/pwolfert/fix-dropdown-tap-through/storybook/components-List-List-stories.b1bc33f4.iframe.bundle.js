"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[8101],{"./packages/design-system/src/components/List/List.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{AllLists:function(){return AllLists},AllListsOnDark:function(){return AllListsOnDark},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _AllLists$parameters,_AllLists$parameters2,_AllLists$parameters3,_AllListsOnDark$param,_AllListsOnDark$param2,_AllListsOnDark$param3,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}__webpack_exports__.default={title:"Foundations/Typography/List",parameters:{docs:{source:{type:"dynamic"}}}};var ListItems=function ListItems(_ref){var label=_ref.label;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[label," list item 1"]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)("li",{children:[label," list item 2"]})]})},UnorderedList=function UnorderedList(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{className:"ds-c-list",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ListItems,{label:"Unordered"})})};UnorderedList.displayName="UnorderedList";var OrderedList=function OrderedList(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ol",{className:"ds-c-list",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ListItems,{label:"Ordered"})})};OrderedList.displayName="OrderedList";var BareList=function BareList(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)("ul",{className:"ds-c-list ds-c-list--bare",role:"list",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(ListItems,{label:"Bare"})})};BareList.displayName="BareList";var AllLists={render:function render(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(UnorderedList,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(OrderedList,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx)(BareList,{})]})}},AllListsOnDark=_objectSpread(_objectSpread({},AllLists),{},{parameters:{onDark:!0,layout:"fullscreen"}});AllLists.parameters=_objectSpread(_objectSpread({},AllLists.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AllLists$parameters=AllLists.parameters)||void 0===_AllLists$parameters?void 0:_AllLists$parameters.docs),{},{source:_objectSpread({originalSource:"{\n  render: () => <>\n      <UnorderedList />\n      <OrderedList />\n      <BareList />\n    </>\n}"},null===(_AllLists$parameters2=AllLists.parameters)||void 0===_AllLists$parameters2||null===(_AllLists$parameters3=_AllLists$parameters2.docs)||void 0===_AllLists$parameters3?void 0:_AllLists$parameters3.source)})}),AllListsOnDark.parameters=_objectSpread(_objectSpread({},AllListsOnDark.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_AllListsOnDark$param=AllListsOnDark.parameters)||void 0===_AllListsOnDark$param?void 0:_AllListsOnDark$param.docs),{},{source:_objectSpread({originalSource:"{\n  ...AllLists,\n  parameters: {\n    onDark: true,\n    layout: 'fullscreen'\n  }\n}"},null===(_AllListsOnDark$param2=AllListsOnDark.parameters)||void 0===_AllListsOnDark$param2||null===(_AllListsOnDark$param3=_AllListsOnDark$param2.docs)||void 0===_AllListsOnDark$param3?void 0:_AllListsOnDark$param3.source)})});var __namedExportsOrder=["AllLists","AllListsOnDark"]}}]);