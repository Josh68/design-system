/*! For license information please see layouts-documentation-page-stories.648be0f9.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[8093],{"./packages/docs/content/layouts/documentation-page.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DocumentationPage:function(){return DocumentationPage},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return documentation_page_stories}});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),SkipNav=__webpack_require__("./packages/design-system/dist/react-components/esm/SkipNav/SkipNav.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ArrowIcon=__webpack_require__("./packages/design-system/dist/react-components/esm/Icons/ArrowIcon.js"),i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var VerticalNavItemLabel=function VerticalNavItemLabel(props){var otherProps,LabelComponent=function componentType(){return props.hasSubnav?"button":props.component?props.component:props.url?"a":"div"}(),commonProps={className:classnames_default()("ds-c-vertical-nav__label",{"ds-c-vertical-nav__label--current":props.selected,"ds-c-vertical-nav__label--parent":props.hasSubnav}),onClick:props.onClick?function handleClick(evt){return props.onClick(evt)}:void 0};if("button"===LabelComponent){var _props$ariaCollapsedS,_props$ariaExpandedSt,collapsedLabel=null!==(_props$ariaCollapsedS=props.ariaCollapsedStateButtonLabel)&&void 0!==_props$ariaCollapsedS?_props$ariaCollapsedS:(0,i18n.t)("verticalNav.expand"),expandedLabel=null!==(_props$ariaExpandedSt=props.ariaExpandedStateButtonLabel)&&void 0!==_props$ariaExpandedSt?_props$ariaExpandedSt:(0,i18n.t)("verticalNav.collapse");otherProps={"aria-controls":props.subnavId,"aria-expanded":!props.collapsed,title:props.collapsed?collapsedLabel:expandedLabel}}else"div"!==LabelComponent&&(otherProps={"aria-current":props.selected,href:props.url});return compat_module.default.createElement(LabelComponent,_extends({},commonProps,otherProps),props.label,props.hasSubnav&&compat_module.default.createElement(ArrowIcon.e,{direction:props.collapsed?"down":"up"}))};VerticalNavItemLabel.__docgenInfo={description:"",methods:[],displayName:"VerticalNavItemLabel"};var VerticalNav_VerticalNavItemLabel=VerticalNavItemLabel,useId=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/useId.js");function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var VerticalNavItem=function VerticalNavItem(props){var rootId=(0,useId.Z)("vertical-nav-item--",props.id),subnavId="".concat(rootId,"__subnav"),_useState2=_slicedToArray((0,compat_module.useState)(props.defaultCollapsed),2),collapsed=_useState2[0],setCollapsed=_useState2[1],hasSubnav=function hasSubnav(){return Boolean(props.items&&props.items.length>0)},childIsSelected=function childIsSelected(children){return!(!children||!children.length)&&children.some((function(child){return child.id===props._selectedId||childIsSelected(child.items)}))},classes=classnames_default()("ds-c-vertical-nav__item",props.className);return compat_module.default.createElement("li",{className:classes},compat_module.default.createElement(VerticalNav_VerticalNavItemLabel,{ariaCollapsedStateButtonLabel:props.ariaCollapsedStateButtonLabel,ariaExpandedStateButtonLabel:props.ariaExpandedStateButtonLabel,collapsed:collapsed,component:props.component,label:props.label,hasSubnav:hasSubnav(),onClick:function handleLabelClick(evt){return hasSubnav()?function handleToggleClick(){setCollapsed(!collapsed),props.onSubnavToggle&&props.onSubnavToggle(rootId,collapsed)}():function handleClick(evt){props.onClick&&props.onClick(evt,rootId,props.url)}(evt)},selected:function isSelected(){return props.selected?props.selected:!(!props._selectedId||!hasSubnav())&&childIsSelected(props.items)}(),subnavId:subnavId,url:props.url}),hasSubnav()&&compat_module.default.createElement(VerticalNav_VerticalNav,{selectedId:props._selectedId,collapsed:collapsed,id:subnavId,items:function subnavItems(){if(props.url){var item=Object.assign({},props);return delete item.items,[item].concat(props.items)}return props.items}(),component:props.component,nested:!0}))};VerticalNavItem.defaultProps={ariaCollapsedStateButtonLabel:"Expand sub-navigation",ariaExpandedStateButtonLabel:"Collapse sub-navigation",defaultCollapsed:!1},VerticalNavItem.__docgenInfo={description:"",methods:[],displayName:"VerticalNavItem",props:{ariaCollapsedStateButtonLabel:{defaultValue:{value:"'Expand sub-navigation'",computed:!1},required:!1},ariaExpandedStateButtonLabel:{defaultValue:{value:"'Collapse sub-navigation'",computed:!1},required:!1},defaultCollapsed:{defaultValue:{value:"false",computed:!1},required:!1}}};var VerticalNav_VerticalNavItem=VerticalNavItem;function VerticalNav_extends(){return VerticalNav_extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},VerticalNav_extends.apply(this,arguments)}var VerticalNav=function VerticalNav(props){var classes=classnames_default()({"ds-c-vertical-nav":!props.nested,"ds-c-vertical-nav__subnav":props.nested,"ds-c-vertical-nav--collapsed":props.collapsed},props.className),navProps=props.ariaNavLabel?{"aria-label":props.ariaNavLabel}:{},navList=compat_module.default.createElement("ul",{role:"list",className:classes,id:props.id},props.items.map((function(item){var onClick=item.onClick||props.onLinkClick;onClick||(onClick=void 0);var selected=item.selected||props.selectedId&&props.selectedId===item.id;return compat_module.default.createElement(VerticalNav_VerticalNavItem,VerticalNav_extends({},item,{component:props.component||item.component,_selectedId:props.selectedId,key:item.id+item.url+item.label,onClick:onClick,selected:selected}))})));return props.nested?navList:compat_module.default.createElement("nav",navProps,navList)};VerticalNav.defaultProps={collapsed:!1},VerticalNav.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/vertical-navigation/).",methods:[],displayName:"VerticalNav",props:{collapsed:{defaultValue:{value:"false",computed:!1},required:!1}}};var _DocumentationPage$pa,_DocumentationPage$pa2,_DocumentationPage$pa3,VerticalNav_VerticalNav=VerticalNav,jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var documentation_page_stories={title:"Patterns/Documentation Page"},navItems=[{label:"Page title",url:"#",id:"page-title"},{label:"Page heading (h1)",selected:!0,items:[{id:"section-2",label:"Section Heading (h2)",url:"#section-heading-h2"},{id:"section-3",label:"Section Heading (h3)",url:"#section-heading-h3"},{id:"section-4",label:"Section Heading (h4)",url:"#section-heading-h4"}]},{label:"Page title",url:"#",id:"page-title2"}],DocumentationPage=function DocumentationPage(){return(0,jsx_runtime.BX)("main",{className:"ds-l-container",children:[(0,jsx_runtime.tZ)(SkipNav.Z,{href:"#content"}),(0,jsx_runtime.BX)("div",{className:"ds-l-row",children:[(0,jsx_runtime.tZ)("aside",{className:"ds-u-margin-bottom--4 ds-u-md-margin-bottom--0 ds-l-md-col--4 ds-l-lg-col--3",children:(0,jsx_runtime.tZ)(VerticalNav_VerticalNav,{items:navItems})}),(0,jsx_runtime.BX)("article",{id:"content",className:"ds-l-md-col--8 ds-l-lg-col--9",children:[(0,jsx_runtime.tZ)("h1",{className:"ds-h1",children:"Page heading (h1)"}),(0,jsx_runtime.tZ)("p",{className:"ds-text--lead",children:"The page heading communicates the main focus of the page. Make your page heading descriptive and keep it succinct."}),(0,jsx_runtime.tZ)("h2",{className:"ds-h2",id:"section-heading-h2",children:"Section heading (h2)"}),(0,jsx_runtime.tZ)("p",{className:"ds-text",children:"These headings introduce, respectively, sections and subsections within your body copy. As you create these headings, follow the same guidelines that you use when writing section headings: Be succinct, descriptive, and precise."}),(0,jsx_runtime.tZ)("h3",{className:"ds-h3",id:"section-heading-h3",children:"Subsection heading (h3)"}),(0,jsx_runtime.tZ)("p",{className:"ds-text",children:"The particulars of your body copy will be determined by the topic of your page. Regardless of topic, it’s a good practice to follow the inverted pyramid structure when writing copy: Begin with the information that’s most important to your users and then present information of less importance."}),(0,jsx_runtime.tZ)("p",{className:"ds-text",children:"Keep each section and subsection focused — a good approach is to include one theme (topic) per section."}),(0,jsx_runtime.tZ)("h4",{className:"ds-h4",id:"section-heading-h4",children:"Subsection heading (h4)"}),(0,jsx_runtime.tZ)("p",{className:"ds-text",children:"Use the vertical navigation menu to help your users quickly skip to different sections of your page. The menu is best suited to displaying a hierarchy with one to three levels and, as we mentioned, to display the sub-navigation of a given page."})]})]})]})};DocumentationPage.displayName="DocumentationPage",DocumentationPage.parameters=_objectSpread(_objectSpread({},DocumentationPage.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DocumentationPage$pa=DocumentationPage.parameters)||void 0===_DocumentationPage$pa?void 0:_DocumentationPage$pa.docs),{},{source:_objectSpread({originalSource:'() => {\n  return <main className="ds-l-container">\n      <SkipNav href="#content" />\n      <div className="ds-l-row">\n        <aside className="ds-u-margin-bottom--4 ds-u-md-margin-bottom--0 ds-l-md-col--4 ds-l-lg-col--3">\n          <VerticalNav items={navItems} />\n        </aside>\n        <article id="content" className="ds-l-md-col--8 ds-l-lg-col--9">\n          <h1 className="ds-h1">Page heading (h1)</h1>\n          <p className="ds-text--lead">\n            The page heading communicates the main focus of the page. Make your page heading\n            descriptive and keep it succinct.\n          </p>\n          <h2 className="ds-h2" id="section-heading-h2">\n            Section heading (h2)\n          </h2>\n          <p className="ds-text">\n            These headings introduce, respectively, sections and subsections within your body copy.\n            As you create these headings, follow the same guidelines that you use when writing\n            section headings: Be succinct, descriptive, and precise.\n          </p>\n          <h3 className="ds-h3" id="section-heading-h3">\n            Subsection heading (h3)\n          </h3>\n          <p className="ds-text">\n            The particulars of your body copy will be determined by the topic of your page.\n            Regardless of topic, it’s a good practice to follow the inverted pyramid structure when\n            writing copy: Begin with the information that’s most important to your users and then\n            present information of less importance.\n          </p>\n          <p className="ds-text">\n            Keep each section and subsection focused — a good approach is to include one theme\n            (topic) per section.\n          </p>\n          <h4 className="ds-h4" id="section-heading-h4">\n            Subsection heading (h4)\n          </h4>\n          <p className="ds-text">\n            Use the vertical navigation menu to help your users quickly skip to different sections\n            of your page. The menu is best suited to displaying a hierarchy with one to three levels\n            and, as we mentioned, to display the sub-navigation of a given page.\n          </p>\n        </article>\n      </div>\n    </main>;\n}'},null===(_DocumentationPage$pa2=DocumentationPage.parameters)||void 0===_DocumentationPage$pa2||null===(_DocumentationPage$pa3=_DocumentationPage$pa2.docs)||void 0===_DocumentationPage$pa3?void 0:_DocumentationPage$pa3.source)})});var __namedExportsOrder=["DocumentationPage"]},"./packages/design-system/dist/react-components/esm/Icons/ArrowIcon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{e:function(){return ArrowIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/dist/react-components/esm/Icons/SvgIcon.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}var defaultProps={className:"",direction:"right",viewBox:"0 0 320 512"};function ArrowIcon(props){var direction=props.direction||defaultProps.direction,iconCssClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-icon--arrow","ds-c-icon--arrow-".concat(direction),props.className);return react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,_extends({title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)("icons.".concat(direction,"Arrow"))},defaultProps,props,{className:iconCssClasses}),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"}))}ArrowIcon.__docgenInfo={description:"",methods:[],displayName:"ArrowIcon"}},"./packages/design-system/dist/react-components/esm/Icons/SvgIcon.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{l:function(){return SvgIcon}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/useId.js"),_excluded=["ariaHidden","className","children","description","id","inversed","title","viewBox"];function _extends(){return _extends=Object.assign?Object.assign.bind():function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function SvgIcon(_ref){var ariaHidden=_ref.ariaHidden,className=_ref.className,children=_ref.children,description=_ref.description,id=_ref.id,inversed=_ref.inversed,title=_ref.title,viewBox=_ref.viewBox,otherProps=_objectWithoutProperties(_ref,_excluded),svgClasses=classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("icon--",id),titleId="".concat(rootId,"__title"),descriptionId="".concat(rootId,"__desc"),ariaLabelledBy=description?"".concat(titleId," ").concat(descriptionId):titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("svg",_extends({"aria-hidden":ariaHidden,className:svgClasses,id:(null!=id?id:isSrVisible)?rootId:void 0,viewBox:viewBox,xmlns:"http://www.w3.org/2000/svg"},screenReaderProps,otherProps),isSrVisible&&react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("title",{id:titleId},title),isSrVisible&&description&&react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("desc",{id:descriptionId},description),children)}SvgIcon.defaultProps={ariaHidden:!0,inversed:!1},SvgIcon.__docgenInfo={description:"",methods:[],displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true",computed:!1},required:!1},inversed:{defaultValue:{value:"false",computed:!1},required:!1}}}},"./packages/design-system/dist/react-components/esm/SkipNav/SkipNav.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_i18n__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js"),SkipNav=function SkipNav(_ref){var children=_ref.children,href=_ref.href,onClick=_ref.onClick;return react__WEBPACK_IMPORTED_MODULE_0__.default.createElement("a",{className:"ds-c-skip-nav",href:href,onClick:onClick},null!=children?children:(0,_i18n__WEBPACK_IMPORTED_MODULE_1__.t)("skipNav.default"))};SkipNav.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/skip-nav/).",methods:[],displayName:"SkipNav"},__webpack_exports__.Z=SkipNav},"./packages/design-system/dist/react-components/esm/utilities/useId.js":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useId}});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null!=providedId?providedId:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":function(module,__unused_webpack_exports,__webpack_require__){var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);