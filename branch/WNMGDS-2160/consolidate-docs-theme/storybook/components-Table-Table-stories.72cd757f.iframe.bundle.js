/*! For license information please see components-Table-Table-stories.72cd757f.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[89],{"./packages/design-system/src/components/Table/Table.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{MultiHeaderTable:function(){return MultiHeaderTable},ScrollableTable:function(){return ScrollableTable},StackableTable:function(){return StackableTable},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _ScrollableTable$para,_ScrollableTable$para2,_ScrollableTable$para3,_StackableTable$param,_StackableTable$param2,_StackableTable$param3,_MultiHeaderTable$par,_MultiHeaderTable$par2,_MultiHeaderTable$par3,_Table__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Table/Table.tsx"),_TableCaption__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/Table/TableCaption.tsx"),_TableHead__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/Table/TableHead.tsx"),_TableRow__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/Table/TableRow.tsx"),_TableCell__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/Table/TableCell.tsx"),_TableBody__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./packages/design-system/src/components/Table/TableBody.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var meta={title:"Components/Table",component:_Table__WEBPACK_IMPORTED_MODULE_2__.Z,subcomponents:{TableCaption:_TableCaption__WEBPACK_IMPORTED_MODULE_3__.Z,TableHead:_TableHead__WEBPACK_IMPORTED_MODULE_4__.Z,TableRow:_TableRow__WEBPACK_IMPORTED_MODULE_5__.Z,TableCell:_TableCell__WEBPACK_IMPORTED_MODULE_6__.Z,TableBody:_TableBody__WEBPACK_IMPORTED_MODULE_7__.Z},parameters:{docs:{underlyingHtmlElements:["table"]}}};__webpack_exports__.default=meta;var tableTemplateData={headings:[{displayName:"Document title",propName:"documentTitle"},{displayName:"Description",propName:"description"},{displayName:"Links",propName:"links"},{displayName:"Year",propName:"year"}],data:[{documentTitle:"Declaration of Independence",description:"Statement adopted by the Continental Congress declaring independence from the British Empire.",links:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("a",{href:"# ",children:[" ","https://billofrightsinstitute.org/founding-documents/declaration-of-independence/"]}),year:"1776"},{documentTitle:"Bill of Rights",description:"The first ten amendments of the U.S. Constitution guaranteeing rights and freedoms.",links:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("a",{href:"# ",children:"https://billofrightsinstitute.org/founding-documents/bill-of-rights/"}),year:"1791"}]},multiHeaderTableData={headings:[{displayName:"Name",propName:"name",bodyComponent:"th"},{displayName:"Street",propName:"street"},{displayName:"ZIP code",propName:"zipcode"},{displayName:"Employer",propName:"employer"},{displayName:"Industry",propName:"industry"}],data:[{name:"John Doe",street:"123 Braavos Ave.",zipcode:"20005",employer:"Acme Co.",industry:"Healthcare"},{name:"John Doe",street:"456 King's Landing",zipcode:"20005",employer:"Acme Co.",industry:"Healthcare"}]},Default={render:function Component(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(_Table__WEBPACK_IMPORTED_MODULE_2__.Z,_objectSpread(_objectSpread({},args),{},{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCaption__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Table"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableHead__WEBPACK_IMPORTED_MODULE_4__.Z,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.Z,{children:tableTemplateData.headings.map((function(_ref){var displayName=_ref.displayName,propName=_ref.propName;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCell__WEBPACK_IMPORTED_MODULE_6__.Z,{id:propName,children:displayName},displayName)}))})}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableBody__WEBPACK_IMPORTED_MODULE_7__.Z,{children:tableTemplateData.data.map((function(dataItem){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.Z,{children:tableTemplateData.headings.map((function(heading){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCell__WEBPACK_IMPORTED_MODULE_6__.Z,{headers:heading.propName,stackedTitle:heading.displayName,children:dataItem[heading.propName]},"".concat(heading.displayName,"-").concat(dataItem[heading.propName]))}))},dataItem.documentTitle)}))})]}))}},ScrollableTable=_objectSpread(_objectSpread({},Default),{},{args:{scrollable:!0}}),StackableTable=_objectSpread(_objectSpread({},Default),{},{args:{stackable:!0,stackableBreakpoint:"md"}}),MultiHeaderTable={render:function Component(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(_Table__WEBPACK_IMPORTED_MODULE_2__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCaption__WEBPACK_IMPORTED_MODULE_3__.Z,{children:"Household members"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("col",{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("colgroup",{span:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("colgroup",{span:2}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(_TableHead__WEBPACK_IMPORTED_MODULE_4__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.Z,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCell__WEBPACK_IMPORTED_MODULE_6__.Z,{component:"td",rowSpan:1}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCell__WEBPACK_IMPORTED_MODULE_6__.Z,{component:"th",colSpan:2,scope:"colgroup",children:"Address"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCell__WEBPACK_IMPORTED_MODULE_6__.Z,{colSpan:2,scope:"colgroup",children:"Employment"})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.Z,{children:multiHeaderTableData.headings.map((function(_ref2){var displayName=_ref2.displayName;return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCell__WEBPACK_IMPORTED_MODULE_6__.Z,{component:"th",scope:"col",children:displayName},displayName)}))})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableBody__WEBPACK_IMPORTED_MODULE_7__.Z,{children:multiHeaderTableData.data.map((function(dataItem,index){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableRow__WEBPACK_IMPORTED_MODULE_5__.Z,{children:multiHeaderTableData.headings.map((function(heading){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_TableCell__WEBPACK_IMPORTED_MODULE_6__.Z,{component:heading.bodyComponent||"td",children:dataItem[heading.propName]},"".concat(heading.displayName,"-").concat(dataItem[heading.displayName]))}))},index)}))})]})}};ScrollableTable.parameters=_objectSpread(_objectSpread({},ScrollableTable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_ScrollableTable$para=ScrollableTable.parameters)||void 0===_ScrollableTable$para?void 0:_ScrollableTable$para.docs),{},{source:_objectSpread({originalSource:"{\n  ...Default,\n  args: {\n    scrollable: true\n  }\n}"},null===(_ScrollableTable$para2=ScrollableTable.parameters)||void 0===_ScrollableTable$para2||null===(_ScrollableTable$para3=_ScrollableTable$para2.docs)||void 0===_ScrollableTable$para3?void 0:_ScrollableTable$para3.source)})}),StackableTable.parameters=_objectSpread(_objectSpread({},StackableTable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_StackableTable$param=StackableTable.parameters)||void 0===_StackableTable$param?void 0:_StackableTable$param.docs),{},{source:_objectSpread({originalSource:"{\n  ...Default,\n  args: {\n    stackable: true,\n    stackableBreakpoint: 'md'\n  }\n}"},null===(_StackableTable$param2=StackableTable.parameters)||void 0===_StackableTable$param2||null===(_StackableTable$param3=_StackableTable$param2.docs)||void 0===_StackableTable$param3?void 0:_StackableTable$param3.source)})}),MultiHeaderTable.parameters=_objectSpread(_objectSpread({},MultiHeaderTable.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MultiHeaderTable$par=MultiHeaderTable.parameters)||void 0===_MultiHeaderTable$par?void 0:_MultiHeaderTable$par.docs),{},{source:_objectSpread({originalSource:'{\n  render: function Component() {\n    return <Table>\n        <TableCaption>Household members</TableCaption>\n        <col />\n        <colgroup span={2} />\n        <colgroup span={2} />\n        <TableHead>\n          <TableRow>\n            <TableCell component="td" rowSpan={1} />\n            <TableCell component="th" colSpan={2} scope="colgroup">\n              Address\n            </TableCell>\n            <TableCell colSpan={2} scope="colgroup">\n              Employment\n            </TableCell>\n          </TableRow>\n          <TableRow>\n            {multiHeaderTableData.headings.map(({\n            displayName\n          }) => <TableCell component="th" scope="col" key={displayName}>\n                {displayName}\n              </TableCell>)}\n          </TableRow>\n        </TableHead>\n        <TableBody>\n          {multiHeaderTableData.data.map((dataItem, index) => <TableRow key={index}>\n              {multiHeaderTableData.headings.map(heading => <TableCell key={`${heading.displayName}-${dataItem[heading.displayName]}`} component={heading.bodyComponent || (\'td\' as any)}>\n                  {dataItem[heading.propName]}\n                </TableCell>)}\n            </TableRow>)}\n        </TableBody>\n      </Table>;\n  }\n}'},null===(_MultiHeaderTable$par2=MultiHeaderTable.parameters)||void 0===_MultiHeaderTable$par2||null===(_MultiHeaderTable$par3=_MultiHeaderTable$par2.docs)||void 0===_MultiHeaderTable$par3?void 0:_MultiHeaderTable$par3.source)})});var __namedExportsOrder=["ScrollableTable","StackableTable","MultiHeaderTable"]},"./packages/design-system/src/components/Icons/AlertCircleIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{g:function(){return AlertCircleIcon}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultProps={className:"",viewBox:"37 2 135 135"};function AlertCircleIcon(props){var iconCssClasses="ds-c-icon--alert-circle ".concat(props.className||"");return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,_objectSpread(_objectSpread(_objectSpread({title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("icons.alertCircle")},defaultProps),props),{},{className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.821 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.351 2.798 21.82 8.392 31.408 5.595 9.584 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771C167.773 94.82 170.57 84.35 170.57 73c0-11.351-2.797-21.822-8.39-31.408zm-43.75 70.433c0 .761-.246 1.398-.734 1.914s-1.086.773-1.793.773H100.26c-.706 0-1.331-.271-1.874-.814-.543-.543-.814-1.168-.814-1.873V96.546c0-.706.271-1.331.814-1.874.543-.543 1.168-.814 1.874-.814h15.643c.707 0 1.306.258 1.793.773.488.518.734 1.154.734 1.915v15.479zm-.164-28.026c-.055.543-.339 1.019-.854 1.426-.517.407-1.154.61-1.914.61h-15.073c-.761 0-1.413-.203-1.956-.61-.543-.407-.815-.883-.815-1.426l-1.385-50.595c0-.653.271-1.141.814-1.467.544-.434 1.196-.652 1.956-.652h17.926c.761 0 1.412.217 1.955.652.543.326.813.815.813 1.467l-1.467 50.595z"})}))}AlertCircleIcon.displayName="AlertCircleIcon";try{AlertCircleIcon.displayName="AlertCircleIcon",AlertCircleIcon.__docgenInfo={description:"",displayName:"AlertCircleIcon",props:{className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"]={docgenInfo:AlertCircleIcon.__docgenInfo,name:"AlertCircleIcon",path:"packages/design-system/src/components/Icons/AlertCircleIcon.tsx#AlertCircleIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/SvgIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{l:function(){return SvgIcon}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_utilities_useId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["ariaHidden","className","children","description","id","inversed","title","viewBox"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var SvgIcon=function SvgIcon(_ref){var ariaHidden=_ref.ariaHidden,className=_ref.className,children=_ref.children,description=_ref.description,id=_ref.id,inversed=_ref.inversed,title=_ref.title,viewBox=_ref.viewBox,otherProps=_objectWithoutProperties(_ref,_excluded),svgClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_3__.Z)("icon--",id),titleId="".concat(rootId,"__title"),descriptionId="".concat(rootId,"__desc"),ariaLabelledBy=description?"".concat(titleId," ").concat(descriptionId):titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("svg",_objectSpread(_objectSpread(_objectSpread({"aria-hidden":ariaHidden,className:svgClasses,id:(null!=id?id:isSrVisible)?rootId:void 0,viewBox:viewBox,xmlns:"http://www.w3.org/2000/svg"},screenReaderProps),otherProps),{},{children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("desc",{id:descriptionId,children:description}),children]}))};SvgIcon.displayName="SvgIcon",SvgIcon.defaultProps={ariaHidden:!0,inversed:!1};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true"},description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The elements that make up the SVG",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:{value:"false"},description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";function getAnalyticsContentFromRefs(refs){return refs.map((function(ref){var _ref$current;return null===(_ref$current=ref.current)||void 0===_ref$current?void 0:_ref$current.textContent})).find((function(textContent){return textContent}))}__webpack_require__.d(__webpack_exports__,{L:function(){return getAnalyticsContentFromRefs}}),__webpack_exports__.Z=getAnalyticsContentFromRefs},"./packages/design-system/src/components/utilities/useId.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useId}});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null!=providedId?providedId:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":function(module,__unused_webpack_exports,__webpack_require__){var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);