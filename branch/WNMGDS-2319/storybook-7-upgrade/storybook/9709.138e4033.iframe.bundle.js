/*! For license information please see 9709.138e4033.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[9709],{"./packages/design-system/src/components/Icons/ArrowIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{e:function(){return ArrowIcon}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _SvgIcon__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_i18n__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var defaultProps={className:"",direction:"right",viewBox:"0 0 320 512"};function ArrowIcon(props){var direction=props.direction||defaultProps.direction,iconCssClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-icon--arrow","ds-c-icon--arrow-".concat(direction),props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_3__.l,_objectSpread(_objectSpread(_objectSpread({title:(0,_i18n__WEBPACK_IMPORTED_MODULE_4__.t)("icons.".concat(direction,"Arrow"))},defaultProps),props),{},{className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})}))}ArrowIcon.displayName="ArrowIcon";try{ArrowIcon.displayName="ArrowIcon",ArrowIcon.__docgenInfo={description:"",displayName:"ArrowIcon",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"right"'},{value:'"left"'},{value:'"up"'},{value:'"down"'}]}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/ArrowIcon.tsx#ArrowIcon"]={docgenInfo:ArrowIcon.__docgenInfo,name:"ArrowIcon",path:"packages/design-system/src/components/Icons/ArrowIcon.tsx#ArrowIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/SvgIcon.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{l:function(){return SvgIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["ariaHidden","className","children","description","id","inversed","title","viewBox"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIcon(_ref){var ariaHidden=_ref.ariaHidden,className=_ref.className,children=_ref.children,description=_ref.description,id=_ref.id,inversed=_ref.inversed,title=_ref.title,viewBox=_ref.viewBox,otherProps=_objectWithoutProperties(_ref,_excluded),svgClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),iconId=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(id||lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()("icon-")),1)[0],titleId="".concat(iconId,"__title"),descriptionId="".concat(iconId,"__desc"),ariaLabelledBy=description?"".concat(titleId," ").concat(descriptionId):titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)("svg",_objectSpread(_objectSpread(_objectSpread({"aria-hidden":ariaHidden,className:svgClasses,focusable:!1,id:iconId,viewBox:viewBox,xmlns:"http://www.w3.org/2000/svg"},screenReaderProps),otherProps),{},{children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("desc",{id:descriptionId,children:description}),children]}))}SvgIcon.displayName="SvgIcon",SvgIcon.defaultProps={ariaHidden:!0,inversed:!1};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true"},description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The elements that make up the SVG",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:{value:"false"},description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/VerticalNav/VerticalNav.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_VerticalNavItem__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/VerticalNav/VerticalNavItem.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var VerticalNav=function VerticalNav(props){var classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()({"ds-c-vertical-nav":!props.nested,"ds-c-vertical-nav__subnav":props.nested,"ds-c-vertical-nav--collapsed":props.collapsed},props.className),navProps=props.ariaNavLabel?{"aria-label":props.ariaNavLabel}:{},navList=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("ul",{role:"list",className:classes,id:props.id,children:props.items.map((function(item){var onClick=item.onClick||props.onLinkClick;onClick||(onClick=void 0);var selected=item.selected||props.selectedId&&props.selectedId===item.id;return(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_VerticalNavItem__WEBPACK_IMPORTED_MODULE_3__.Z,_objectSpread(_objectSpread({},item),{},{component:props.component||item.component,_selectedId:props.selectedId,key:item.id+item.url+item.label,onClick:onClick,selected:selected}))}))});return props.nested?navList:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("nav",_objectSpread(_objectSpread({},navProps),{},{children:navList}))};VerticalNav.defaultProps={collapsed:!1},__webpack_exports__.Z=VerticalNav;try{VerticalNav.displayName="VerticalNav",VerticalNav.__docgenInfo={description:"",displayName:"VerticalNav",props:{ariaNavLabel:{defaultValue:null,description:"An optional arial label for the `<nav>` element in this component.\nThis prop is necessary when there is more than one nav element on a page.",name:"ariaNavLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classes to be added to the root element",name:"className",required:!1,type:{name:"string"}},collapsed:{defaultValue:{value:"false"},description:"Whether or not the menu is in a collapsed state",name:"collapsed",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"When provided, this will render the passed in component for all `VerticalNavItem`s. This is useful when\nintegrating with React Router's `<Link>` or using your own custom component.\nIf more specific control is needed, each `VerticalNavItem` object also accepts a `component` prop.",name:"component",required:!1,type:{name:"any"}},selectedId:{defaultValue:null,description:"The `id` of the selected `VerticalNavItem`. This will also set the\n`selected` prop on the item's parents.",name:"selectedId",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"",name:"id",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"An array of [`VerticalNavItem`]({{root}}/components/vertical-nav/#components.vertical-nav.VerticalNavItem) data objects",name:"items",required:!0,type:{name:"VerticalNavItemProps[]"}},nested:{defaultValue:null,description:"Indicates this list is nested within another nav item.",name:"nested",required:!1,type:{name:"boolean"}},onLinkClick:{defaultValue:null,description:"Called when one of the nav links is clicked, with the following arguments:\n[`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),\n`id`, `url`",name:"onLinkClick",required:!1,type:{name:"(evt: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>, id: string, url: string) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/VerticalNav/VerticalNav.tsx#VerticalNav"]={docgenInfo:VerticalNav.__docgenInfo,name:"VerticalNav",path:"packages/design-system/src/components/VerticalNav/VerticalNav.tsx#VerticalNav"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/VerticalNav/VerticalNavItem.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_VerticalNav__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/VerticalNav/VerticalNav.tsx"),_VerticalNavItemLabel__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/VerticalNav/VerticalNavItemLabel.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2__),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var VerticalNavItem=function VerticalNavItem(props){var id=props.id||lodash_uniqueId__WEBPACK_IMPORTED_MODULE_2___default()("VerticalNavItem_"),subnavId="".concat(id,"__subnav"),_useState2=_slicedToArray((0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(props.defaultCollapsed),2),collapsed=_useState2[0],setCollapsed=_useState2[1],hasSubnav=function hasSubnav(){return Boolean(props.items&&props.items.length>0)},childIsSelected=function childIsSelected(children){return!(!children||!children.length)&&children.some((function(child){return child.id===props._selectedId||childIsSelected(child.items)}))},classes=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-vertical-nav__item",props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)("li",{className:classes,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_VerticalNavItemLabel__WEBPACK_IMPORTED_MODULE_4__.Z,{ariaCollapsedStateButtonLabel:props.ariaCollapsedStateButtonLabel,ariaExpandedStateButtonLabel:props.ariaExpandedStateButtonLabel,collapsed:collapsed,component:props.component,label:props.label,hasSubnav:hasSubnav(),onClick:function handleLabelClick(evt){return hasSubnav()?function handleToggleClick(){setCollapsed(!collapsed),props.onSubnavToggle&&props.onSubnavToggle(id,collapsed)}():function handleClick(evt){props.onClick&&props.onClick(evt,id,props.url)}(evt)},selected:function isSelected(){return props.selected?props.selected:!(!props._selectedId||!hasSubnav())&&childIsSelected(props.items)}(),subnavId:subnavId,url:props.url}),hasSubnav()&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_VerticalNav__WEBPACK_IMPORTED_MODULE_5__.Z,{selectedId:props._selectedId,collapsed:collapsed,id:subnavId,items:function subnavItems(){if(props.url){var item=Object.assign({},props);return delete item.items,[item].concat(props.items)}return props.items}(),component:props.component,nested:!0})]})};VerticalNavItem.displayName="VerticalNavItem",VerticalNavItem.defaultProps={ariaCollapsedStateButtonLabel:"Expand sub-navigation",ariaExpandedStateButtonLabel:"Collapse sub-navigation",defaultCollapsed:!1},__webpack_exports__.Z=VerticalNavItem;try{VerticalNavItem.displayName="VerticalNavItem",VerticalNavItem.__docgenInfo={description:"",displayName:"VerticalNavItem",props:{_selectedId:{defaultValue:null,description:"@hide-prop This gets passed through from the parent VerticalNav to a nested VerticalNav",name:"_selectedId",required:!1,type:{name:"string"}},ariaCollapsedStateButtonLabel:{defaultValue:{value:"Expand sub-navigation"},description:"Aria label for the toggle button when the sub-navigation is collapsed",name:"ariaCollapsedStateButtonLabel",required:!1,type:{name:"string"}},ariaExpandedStateButtonLabel:{defaultValue:{value:"Collapse sub-navigation"},description:"Aria label for the toggle button when the sub-navigation is expanded",name:"ariaExpandedStateButtonLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Additional classes to be added to the root element",name:"className",required:!1,type:{name:"string"}},component:{defaultValue:null,description:"When provided, this will render the passed in component. This is useful when\nintegrating with React Router's `<Link>` or using your own custom component.",name:"component",required:!1,type:{name:"any"}},defaultCollapsed:{defaultValue:{value:"false"},description:"Whether or not the item's sub-navigation is in a collapsed state by default",name:"defaultCollapsed",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Called when the link is clicked, with the following arguments:\n[`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),\n`id`, `url`.\nThis takes precedence over the `VerticalNav` `onLinkClick` prop",name:"onClick",required:!1,type:{name:"(evt: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>, id: string, url: string) => any"}},onSubnavToggle:{defaultValue:null,description:"Called when this item's subnav is collapsed or expanded, with the\nfollowing arguments: `id`, `collapsed`",name:"onSubnavToggle",required:!1,type:{name:"(id: string, collapsed: boolean) => any"}},id:{defaultValue:null,description:"Optional identifier. This can be handy if you're passing in an\n`onClick` handler. A unique ID will be generated if one isn't provided.",name:"id",required:!1,type:{name:"string"}},items:{defaultValue:null,description:"An array of nested `VerticalNavItem` data objects to be rendered in a\nsub-navigation list.",name:"items",required:!1,type:{name:"any[]"}},label:{defaultValue:null,description:"Text to render for this nav item",name:"label",required:!0,type:{name:"ReactNode"}},url:{defaultValue:null,description:"A URL to navigate to if this item is a link",name:"url",required:!1,type:{name:"string"}},selected:{defaultValue:null,description:"If this item is currently selected",name:"selected",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/VerticalNav/VerticalNavItem.tsx#VerticalNavItem"]={docgenInfo:VerticalNavItem.__docgenInfo,name:"VerticalNavItem",path:"packages/design-system/src/components/VerticalNav/VerticalNavItem.tsx#VerticalNavItem"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/VerticalNav/VerticalNavItemLabel.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_Icons__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/Icons/ArrowIcon.tsx"),_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var VerticalNavItemLabel=function VerticalNavItemLabel(props){var otherProps,LabelComponent=function componentType(){return props.hasSubnav?"button":props.component?props.component:props.url?"a":"div"}(),commonProps={className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-vertical-nav__label",{"ds-c-vertical-nav__label--current":props.selected,"ds-c-vertical-nav__label--parent":props.hasSubnav}),onClick:props.onClick?function handleClick(evt){return props.onClick(evt)}:void 0};if("button"===LabelComponent){var _props$ariaCollapsedS,_props$ariaExpandedSt,collapsedLabel=null!==(_props$ariaCollapsedS=props.ariaCollapsedStateButtonLabel)&&void 0!==_props$ariaCollapsedS?_props$ariaCollapsedS:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("verticalNav.expand"),expandedLabel=null!==(_props$ariaExpandedSt=props.ariaExpandedStateButtonLabel)&&void 0!==_props$ariaExpandedSt?_props$ariaExpandedSt:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("verticalNav.collapse");otherProps={"aria-controls":props.subnavId,"aria-expanded":!props.collapsed,title:props.collapsed?collapsedLabel:expandedLabel}}else"div"!==LabelComponent&&(otherProps={"aria-current":props.selected,href:props.url});return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)(LabelComponent,_objectSpread(_objectSpread(_objectSpread({},commonProps),otherProps),{},{children:[props.label,props.hasSubnav&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_Icons__WEBPACK_IMPORTED_MODULE_4__.e,{direction:props.collapsed?"down":"up"})]}))};VerticalNavItemLabel.displayName="VerticalNavItemLabel",__webpack_exports__.Z=VerticalNavItemLabel;try{VerticalNavItemLabel.displayName="VerticalNavItemLabel",VerticalNavItemLabel.__docgenInfo={description:"",displayName:"VerticalNavItemLabel",props:{ariaCollapsedStateButtonLabel:{defaultValue:null,description:"",name:"ariaCollapsedStateButtonLabel",required:!1,type:{name:"string"}},ariaExpandedStateButtonLabel:{defaultValue:null,description:"",name:"ariaExpandedStateButtonLabel",required:!1,type:{name:"string"}},collapsed:{defaultValue:null,description:"",name:"collapsed",required:!1,type:{name:"boolean"}},component:{defaultValue:null,description:"",name:"component",required:!1,type:{name:"any"}},hasSubnav:{defaultValue:null,description:"",name:"hasSubnav",required:!1,type:{name:"boolean"}},label:{defaultValue:null,description:"",name:"label",required:!0,type:{name:"ReactNode"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(evt: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => any"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},subnavId:{defaultValue:null,description:"",name:"subnavId",required:!0,type:{name:"string"}},url:{defaultValue:null,description:"",name:"url",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/VerticalNav/VerticalNavItemLabel.tsx#VerticalNavItemLabel"]={docgenInfo:VerticalNavItemLabel.__docgenInfo,name:"VerticalNavItemLabel",path:"packages/design-system/src/components/VerticalNav/VerticalNavItemLabel.tsx#VerticalNavItemLabel"})}catch(__react_docgen_typescript_loader_error){}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":function(module,__unused_webpack_exports,__webpack_require__){var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);