/*! For license information please see components-Drawer-Drawer-stories.e7cc24c1.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[4905],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{aD:function(){return chunk_OPEUWD42.aD}});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{r:function(){return DocsRenderer}});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/react-dom-shim/dist/react-16.mjs"),_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),defaultComponents={code:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.bD,a:_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Ct,..._storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.lO},ErrorBoundary=class extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(){super(...arguments),this.state={hasError:!1}}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(err){let{showException:showException}=this.props;showException(err)}render(){let{hasError:hasError}=this.state,{children:children}=this.props;return hasError?null:children}},DocsRenderer=class{constructor(){this.render=async(context,docsParameter,element)=>{let components={...defaultComponents,...docsParameter?.components},TDocs=_storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.WI;return new Promise(((resolve,reject)=>{__webpack_require__.e(9506).then(__webpack_require__.bind(__webpack_require__,"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/index.js")).then((({MDXProvider:MDXProvider})=>(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.l)(react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(ErrorBoundary,{showException:reject,key:Math.random()},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(MDXProvider,{components:components},react__WEBPACK_IMPORTED_MODULE_0__.default.createElement(TDocs,{context:context,docsParameter:docsParameter}))),element))).then((()=>resolve()))}))},this.unmount=element=>{(0,_storybook_react_dom_shim__WEBPACK_IMPORTED_MODULE_2__.K)(element)}}}},"./node_modules/@storybook/addon-docs/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{$4:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.$4},Dx:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Dx},QE:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.QE},Uh:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.Uh},dk:function(){return _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__.dk}});__webpack_require__("./node_modules/@storybook/addon-docs/dist/chunk-S4VUQJ4A.mjs");var _storybook_blocks__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs")},"./packages/design-system/src/components/Drawer/Drawer.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{DrawerDefault:function(){return DrawerDefault},DrawerToggleWithDrawer:function(){return DrawerToggleWithDrawer},DrawerWithStickyPositioning:function(){return DrawerWithStickyPositioning},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var _DrawerDefault$parame,_DrawerDefault$parame2,_DrawerDefault$parame3,_DrawerWithStickyPosi,_DrawerWithStickyPosi2,_DrawerWithStickyPosi3,_DrawerToggleWithDraw,_DrawerToggleWithDraw2,_DrawerToggleWithDraw3,_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@storybook/addon-docs/dist/index.mjs"),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),_Drawer__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/Drawer/Drawer.tsx"),_Button__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/Button/Button.tsx"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("@storybook/preview-api"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs"),_excluded=["isDrawerVisible"];function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var meta={title:"Components/Drawer",component:_Drawer__WEBPACK_IMPORTED_MODULE_5__.Z,args:{footerTitle:"Footer Title",footerBody:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("p",{className:"ds-text ds-u-margin--0",children:"Footer content"}),heading:"Drawer Heading"},parameters:{docs:{page:function page(){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Dx,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.QE,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.dk,{}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.$4,{story:_storybook_addon_docs__WEBPACK_IMPORTED_MODULE_1__.Uh})]})}}}};__webpack_exports__.default=meta;var drawerContent=(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.HY,{children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("strong",{children:"An Explanation"}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."})]}),DrawerDefault={render:function Component(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_Drawer__WEBPACK_IMPORTED_MODULE_5__.Z,_objectSpread(_objectSpread({},args),{},{children:drawerContent}))}},DrawerWithStickyPositioning=_objectSpread(_objectSpread({},DrawerDefault),{},{args:{isFooterSticky:!0,isHeaderSticky:!0}}),DrawerToggleWithDrawer={render:function Component(){var _useArgs2=_slicedToArray((0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_3__.useArgs)(),2),_useArgs2$=_useArgs2[0],isDrawerVisible=_useArgs2$.isDrawerVisible,args=_objectWithoutProperties(_useArgs2$,_excluded),updateArgs=_useArgs2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.HY,{children:[isDrawerVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_Drawer__WEBPACK_IMPORTED_MODULE_5__.Z,_objectSpread(_objectSpread({},args),{},{onCloseClick:function hideDrawer(){(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("onCloseClick").apply(void 0,arguments),updateArgs({isDrawerVisible:!1})},footerTitle:"Footer Title",footerBody:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)("p",{className:"ds-text ds-u-margin--0",children:"Footer content"}),heading:"Drawer Heading",children:drawerContent})),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.tZ)(_Button__WEBPACK_IMPORTED_MODULE_6__.z,{className:"ds-c-drawer__toggle",variation:"ghost",onClick:function showDrawer(){return updateArgs({isDrawerVisible:!0})},children:"Drawer Toggle"})]})}};DrawerDefault.parameters=_objectSpread(_objectSpread({},DrawerDefault.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DrawerDefault$parame=DrawerDefault.parameters)||void 0===_DrawerDefault$parame?void 0:_DrawerDefault$parame.docs),{},{source:_objectSpread({originalSource:"{\n  render: function Component(args) {\n    return <Drawer {...args}>{drawerContent}</Drawer>;\n  }\n}"},null===(_DrawerDefault$parame2=DrawerDefault.parameters)||void 0===_DrawerDefault$parame2||null===(_DrawerDefault$parame3=_DrawerDefault$parame2.docs)||void 0===_DrawerDefault$parame3?void 0:_DrawerDefault$parame3.source)})}),DrawerWithStickyPositioning.parameters=_objectSpread(_objectSpread({},DrawerWithStickyPositioning.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DrawerWithStickyPosi=DrawerWithStickyPositioning.parameters)||void 0===_DrawerWithStickyPosi?void 0:_DrawerWithStickyPosi.docs),{},{source:_objectSpread({originalSource:"{\n  ...DrawerDefault,\n  args: {\n    isFooterSticky: true,\n    isHeaderSticky: true\n  }\n}"},null===(_DrawerWithStickyPosi2=DrawerWithStickyPositioning.parameters)||void 0===_DrawerWithStickyPosi2||null===(_DrawerWithStickyPosi3=_DrawerWithStickyPosi2.docs)||void 0===_DrawerWithStickyPosi3?void 0:_DrawerWithStickyPosi3.source)})}),DrawerToggleWithDrawer.parameters=_objectSpread(_objectSpread({},DrawerToggleWithDrawer.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DrawerToggleWithDraw=DrawerToggleWithDrawer.parameters)||void 0===_DrawerToggleWithDraw?void 0:_DrawerToggleWithDraw.docs),{},{source:_objectSpread({originalSource:'{\n  render: function Component() {\n    const [{\n      isDrawerVisible,\n      ...args\n    }, updateArgs] = useArgs();\n    const showDrawer = () => updateArgs({\n      isDrawerVisible: true\n    });\n    const hideDrawer = (...params) => {\n      action(\'onCloseClick\')(...params);\n      updateArgs({\n        isDrawerVisible: false\n      });\n    };\n    return <>\n        {isDrawerVisible && <Drawer {...args} onCloseClick={hideDrawer} footerTitle="Footer Title" footerBody={<p className="ds-text ds-u-margin--0">Footer content</p>} heading="Drawer Heading">\n            {drawerContent}\n          </Drawer>}\n        <Button className="ds-c-drawer__toggle" variation="ghost" onClick={showDrawer}>\n          Drawer Toggle\n        </Button>\n      </>;\n  }\n}'},null===(_DrawerToggleWithDraw2=DrawerToggleWithDrawer.parameters)||void 0===_DrawerToggleWithDraw2||null===(_DrawerToggleWithDraw3=_DrawerToggleWithDraw2.docs)||void 0===_DrawerToggleWithDraw3?void 0:_DrawerToggleWithDraw3.source)})});var __namedExportsOrder=["DrawerDefault","DrawerWithStickyPositioning","DrawerToggleWithDrawer"]},"./packages/design-system/src/components/Drawer/Drawer.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_Button_Button__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/Button/Button.tsx"),_NativeDialog_NativeDialog__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/NativeDialog/NativeDialog.tsx"),classnames__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__),_i18n__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),_utilities_useId__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs"),Drawer=function Drawer(props){var _props$ariaLabel,_props$closeButtonTex,headingRef=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null),headingId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_3__.Z)("drawer--",props.headingId),Heading="h".concat(props.headingLevel);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_NativeDialog_NativeDialog__WEBPACK_IMPORTED_MODULE_4__.Z,{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()(props.className,"ds-c-drawer"),exit:props.onCloseClick,showModal:props.hasFocusTrap,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("div",{className:"ds-c-drawer__window",tabIndex:-1,"aria-labelledby":headingId,children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("div",{className:"ds-c-drawer__header",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(Heading,{id:headingId,className:"ds-c-drawer__header-heading",ref:function ref(el){headingRef.current=el,props.headingRef&&(props.headingRef.current=el)},children:props.heading}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)(_Button_Button__WEBPACK_IMPORTED_MODULE_5__.Z,{"aria-label":null!==(_props$ariaLabel=props.ariaLabel)&&void 0!==_props$ariaLabel?_props$ariaLabel:(0,_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("drawer.ariaLabel"),className:"ds-c-drawer__close-button",size:"small",onClick:props.onCloseClick,variation:props.closeButtonVariation,children:null!==(_props$closeButtonTex=props.closeButtonText)&&void 0!==_props$closeButtonTex?_props$closeButtonTex:(0,_i18n__WEBPACK_IMPORTED_MODULE_6__.t)("drawer.closeButtonText")})]}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("div",{className:classnames__WEBPACK_IMPORTED_MODULE_1___default()("ds-c-drawer__body",{"ds-c-drawer--is-sticky":props.isHeaderSticky||props.isFooterSticky}),tabIndex:0,children:props.children}),(props.footerTitle||props.footerBody)&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.BX)("div",{className:"ds-c-drawer__footer",children:[(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("h4",{className:"ds-c-drawer__footer-title",children:props.footerTitle}),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.tZ)("div",{className:"ds-c-drawer__footer-body",children:props.footerBody})]})]})})};Drawer.displayName="Drawer",Drawer.defaultProps={headingLevel:"3",hasFocusTrap:!1},__webpack_exports__.Z=Drawer;try{Drawer.displayName="Drawer",Drawer.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/drawer/).",displayName:"Drawer",props:{ariaLabel:{defaultValue:null,description:"Gives more context to screen readers on the Drawer close button.",name:"ariaLabel",required:!1,type:{name:"string"}},closeButtonText:{defaultValue:null,description:"",name:"closeButtonText",required:!1,type:{name:"ReactNode"}},closeButtonVariation:{defaultValue:null,description:"",name:"closeButtonVariation",required:!1,type:{name:"enum",value:[{value:'"solid"'},{value:'"ghost"'}]}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},footerBody:{defaultValue:null,description:"",name:"footerBody",required:!1,type:{name:"ReactNode"}},footerTitle:{defaultValue:null,description:"",name:"footerTitle",required:!1,type:{name:"ReactNode"}},hasFocusTrap:{defaultValue:{value:"false"},description:"Enables focus trap functionality within Drawer.",name:"hasFocusTrap",required:!1,type:{name:"boolean"}},heading:{defaultValue:null,description:"Text for the Drawer heading. Required because the `heading` will be focused on mount.",name:"heading",required:!0,type:{name:"ReactNode"}},headingId:{defaultValue:null,description:"A unique `id` to be used on heading element to label multiple instances of Drawer.",name:"headingId",required:!1,type:{name:"string"}},headingLevel:{defaultValue:{value:"3"},description:"Heading type to override default `<h3>`",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"3"'},{value:'"1"'},{value:'"2"'},{value:'"4"'},{value:'"5"'}]}},headingRef:{defaultValue:null,description:"Ref to heading element",name:"headingRef",required:!1,type:{name:"MutableRefObject<any>"}},isHeaderSticky:{defaultValue:null,description:'Enables "sticky" position of Drawer header element.',name:"isHeaderSticky",required:!1,type:{name:"boolean"}},isFooterSticky:{defaultValue:null,description:'Enables "sticky" position of Drawer footer element.',name:"isFooterSticky",required:!1,type:{name:"boolean"}},onCloseClick:{defaultValue:null,description:"Called when the user activates the close button or presses the ESC key if\nfocus trapping is enabled. The parent of this component is responsible for\nshowing or not showing the drawer, so you need to use this callback to\nmake that happen. The dialog does not hide itself.",name:"onCloseClick",required:!0,type:{name:"(event: MouseEvent<Element, MouseEvent> | KeyboardEvent<Element>) => void"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Drawer/Drawer.tsx#Drawer"]={docgenInfo:Drawer.__docgenInfo,name:"Drawer",path:"packages/design-system/src/components/Drawer/Drawer.tsx#Drawer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/utilities/useId.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{Z:function(){return useId}});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null!=providedId?providedId:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":function(module,__unused_webpack_exports,__webpack_require__){var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);