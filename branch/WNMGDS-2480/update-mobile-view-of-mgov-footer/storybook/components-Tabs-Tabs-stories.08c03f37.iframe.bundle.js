/*! For license information please see components-Tabs-Tabs-stories.08c03f37.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[8620],{"./node_modules/@storybook/addon-actions/dist/index.mjs":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.d(__webpack_exports__,{aD:function(){return chunk_OPEUWD42.aD}});var chunk_OPEUWD42=__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-OPEUWD42.mjs");__webpack_require__("./node_modules/@storybook/addon-actions/dist/chunk-VWCVBQ22.mjs")},"./packages/design-system/src/components/Tabs/Tabs.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Controlled:function(){return Controlled},Default:function(){return Default},Disabled:function(){return Disabled},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Tabs_stories}});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Tab=(0,compat_module.forwardRef)((function(props,ref){var href=props.href||"#".concat(props.panelId),sharedTabProps={role:"tab",className:classnames_default()("ds-c-tabs__item",props.className),id:props.id,ref:ref};return props.disabled?(0,jsx_runtime.tZ)("span",_objectSpread(_objectSpread({"aria-disabled":"true"},sharedTabProps),{},{children:props.children})):(0,jsx_runtime.tZ)("a",_objectSpread(_objectSpread({"aria-selected":props.selected||!1,"aria-controls":props.panelId,href:href,onClick:function handleClick(evt){var onClick=props.onClick,panelId=props.panelId,id=props.id;onClick&&onClick(evt,panelId,id,href)},onKeyDown:function handleKeyDown(evt){var onKeyDown=props.onKeyDown,panelId=props.panelId,id=props.id;onKeyDown&&onKeyDown(evt,panelId,id,href)}},sharedTabProps),{},{children:props.children}))}));Tab.displayName="Tab";var Tabs_Tab=Tab;try{Tab.displayName="Tab",Tab.__docgenInfo={description:"",displayName:"Tab",props:{children:{defaultValue:null,description:"Tab label text or HTML.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root tab element.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A unique `id`, to be used on the rendered tab element.",name:"id",required:!0,type:{name:"string"}},href:{defaultValue:null,description:"Sets the `href` attribute used for the tab. This can be useful if you want\nto use relative links rather than a URL hash (the default).",name:"href",required:!1,type:{name:"string"}},onClick:{defaultValue:null,description:"Called when the tab is clicked, with the following arguments:\n[`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),\n`panelId`, `id`, `href`",name:"onClick",required:!1,type:{name:"(evt: MouseEvent<Element, MouseEvent>, panelId: string, id: string, href: string) => any"}},onKeyDown:{defaultValue:null,description:"Called when the tab is selected and a keydown event is triggered.\nCalled with the following arguments:\n[`SyntheticEvent`](https://facebook.github.io/react/docs/events.html),\n`panelId`, `id`, `href`",name:"onKeyDown",required:!1,type:{name:"(evt: KeyboardEvent<Element>, panelId: string, id: string, href: string) => any"}},panelId:{defaultValue:null,description:"The `id` of the associated `TabPanel`. Used for the `aria-controls` attribute.",name:"panelId",required:!0,type:{name:"string"}},selected:{defaultValue:null,description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Tabs/Tab.tsx#Tab"]={docgenInfo:Tab.__docgenInfo,name:"Tab",path:"packages/design-system/src/components/Tabs/Tab.tsx#Tab"})}catch(__react_docgen_typescript_loader_error){}var TabPanel=function TabPanel(props){var classes=classnames_default()("ds-c-tabs__panel",props.className);return(0,jsx_runtime.tZ)("div",{"aria-labelledby":props.tabId,"aria-hidden":!props.selected,"aria-disabled":props.disabled,className:classes,id:props.id,role:"tabpanel",children:props.children})};TabPanel.displayName="TabPanel",TabPanel.displayName="TabPanel",TabPanel.defaultProps={selected:!1};var Tabs_TabPanel=TabPanel;try{TabPanel.displayName="TabPanel",TabPanel.__docgenInfo={description:"",displayName:"TabPanel",props:{className:{defaultValue:null,description:"Additional classes to be added to the root element.",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A unique `id`, to be used on the rendered panel element.",name:"id",required:!0,type:{name:"string"}},selected:{defaultValue:{value:"false"},description:"",name:"selected",required:!1,type:{name:"boolean"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},tab:{defaultValue:null,description:"The associated tab's label. Only applicable when the panel is a\nchild of `Tabs`.",name:"tab",required:!1,type:{name:"ReactNode"}},tabClassName:{defaultValue:null,description:"Additional classes for the associated tab. Only applicable when the panel\nis a child of `Tabs`.",name:"tabClassName",required:!1,type:{name:"string"}},tabHref:{defaultValue:null,description:"The associated tab's `href`. Only applicable when the panel is a\nchild of `Tabs`.",name:"tabHref",required:!1,type:{name:"string"}},tabId:{defaultValue:null,description:"The `id` of the associated `Tab`. Used for the `aria-labelledby` attribute.",name:"tabId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Tabs/TabPanel.tsx#TabPanel"]={docgenInfo:TabPanel.__docgenInfo,name:"TabPanel",path:"packages/design-system/src/components/Tabs/TabPanel.tsx#TabPanel"})}catch(__react_docgen_typescript_loader_error){}var get=__webpack_require__("./node_modules/lodash/get.js"),get_default=__webpack_require__.n(get);function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var isTabPanel=function isTabPanel(child){var componentName=get_default()(child,"type.displayName")||get_default()(child,"type.name");return child&&(child.type===Tabs_TabPanel||"TabPanel"===componentName)},panelTabId=function panelTabId(panel){return panel.props.tabId||"ds-c-tabs__item--".concat(panel.props.id)},Tabs=function Tabs(props){var initialSelectedId=props.defaultSelectedId||function getDefaultSelectedId(props){var selectedId;return compat_module.default.Children.forEach(props.children,(function(child){isTabPanel(child)&&!selectedId&&(selectedId=child.props.id)})),selectedId}(props),_useState2=_slicedToArray((0,compat_module.useState)(initialSelectedId),2),internalSelectedId=_useState2[0],setSelectedId=_useState2[1],selectedId=void 0!==props.selectedId?props.selectedId:internalSelectedId,listClasses=classnames_default()("ds-c-tabs",props.tablistClassName),tabsRef=(0,compat_module.useRef)({}),panelChildren=function panelChildren(){return compat_module.default.Children.toArray(props.children).filter(isTabPanel)},handleSelectedTabChange=function handleSelectedTabChange(newSelectedId){var onChange=props.onChange;onChange&&onChange(newSelectedId,selectedId),tabsRef.current[newSelectedId].focus(),function replaceState(url){window.history&&window.history.replaceState({},document.title,url)}(tabsRef.current[newSelectedId].href),setSelectedId(newSelectedId)},handleTabClick=function handleTabClick(evt,panelId){evt.preventDefault(),handleSelectedTabChange(panelId)},handleTabKeyDown=function handleTabKeyDown(evt,panelId){var target,tabs=panelChildren(),tabIndex=tabs.findIndex((function(elem){return elem.props.id===panelId}));switch(evt.key){case"ArrowLeft":if(evt.preventDefault(),0===tabIndex)target=tabs[tabs.length-1].props.id;else target=tabs[tabIndex-1].props.id;handleSelectedTabChange(target);break;case"ArrowRight":if(evt.preventDefault(),tabIndex===tabs.length-1)target=tabs[0].props.id;else target=tabs[tabIndex+1].props.id;handleSelectedTabChange(target)}};return(0,jsx_runtime.BX)("div",{children:[(0,jsx_runtime.tZ)("div",{className:listClasses,role:"tablist",children:function renderTabs(){return panelChildren().map((function(panel){return(0,jsx_runtime.tZ)(Tabs_Tab,{className:panel.props.tabClassName,href:panel.props.tabHref,disabled:panel.props.disabled,id:panelTabId(panel),onClick:handleTabClick,onKeyDown:handleTabKeyDown,panelId:panel.props.id,ref:function ref(tab){tabsRef.current[panel.props.id]=tab},selected:selectedId===panel.props.id,children:panel.props.tab},panel.key)}))}()}),function renderChildren(){return compat_module.default.Children.map(props.children,(function(child){return isTabPanel(child)&&compat_module.default.isValidElement(child)?compat_module.default.cloneElement(child,{selected:selectedId===child.props.id,tab:void 0,tabHref:void 0,tabId:panelTabId(child)}):child}))}()]})};Tabs.displayName="Tabs";try{Tabs.displayName="Tabs",Tabs.__docgenInfo={description:"`Tabs` is a container component that manages the state of your tabs for you.\nIn most cases, you'll want to use this component rather than the\npresentational components (`Tab`, `TabPanel`) on their own.\n\nA `TabPanel` is a presentational component which accepts a tab's content as\nits `children`.\n\nFor information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/tabs/).",displayName:"Tabs",props:{children:{defaultValue:null,description:"Must only contain `TabPanel` components",name:"children",required:!0,type:{name:"ReactNode"}},defaultSelectedId:{defaultValue:null,description:"Sets the initial selected state to the specified `TabPanel` id. Use this\nfor an uncontrolled component; otherwise, use the `selectedId` property.\nIf no selected id is specified, the first `TabPanel` will be selected.",name:"defaultSelectedId",required:!1,type:{name:"string"}},selectedId:{defaultValue:null,description:"Sets the initial selected state to the specified `TabPanel` id. Use this\nin combination with `onChange` for a controlled component; otherwise, set\n`defaultSelectedId`.",name:"selectedId",required:!1,type:{name:"string"}},onChange:{defaultValue:null,description:"A callback function that's invoked when the selected tab is changed.\n`(selectedId, prevSelectedId) => void`",name:"onChange",required:!1,type:{name:"(selectedId: string, prevSelectedId: string) => any"}},tablistClassName:{defaultValue:null,description:"Additional classes to be added to the component wrapping the tabs",name:"tablistClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Tabs/Tabs.tsx#Tabs"]={docgenInfo:Tabs.__docgenInfo,name:"Tabs",path:"packages/design-system/src/components/Tabs/Tabs.tsx#Tabs"})}catch(__react_docgen_typescript_loader_error){}var _Default$parameters,_Default$parameters2,_Default$parameters2$,_Disabled$parameters,_Disabled$parameters2,_Disabled$parameters3,_Controlled$parameter,_Controlled$parameter2,_Controlled$parameter3,dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api");function Tabs_stories_typeof(obj){return Tabs_stories_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},Tabs_stories_typeof(obj)}function Tabs_stories_slicedToArray(arr,i){return function Tabs_stories_arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function Tabs_stories_iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function Tabs_stories_unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return Tabs_stories_arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Tabs_stories_arrayLikeToArray(o,minLen)}(arr,i)||function Tabs_stories_nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Tabs_stories_arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}function Tabs_stories_ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function Tabs_stories_objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?Tabs_stories_ownKeys(Object(source),!0).forEach((function(key){Tabs_stories_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):Tabs_stories_ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function Tabs_stories_defineProperty(obj,key,value){return(key=function Tabs_stories_toPropertyKey(arg){var key=function Tabs_stories_toPrimitive(input,hint){if("object"!==Tabs_stories_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==Tabs_stories_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===Tabs_stories_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}var Tabs_stories={title:"Components/Tabs",component:Tabs,subcomponents:{TabPanel:Tabs_TabPanel}},tabPanels=[(0,jsx_runtime.tZ)(Tabs_TabPanel,{id:"summary",tab:"Summary",children:"The Bill of Rights is the first ten amendments to the United States Constitution."},"summary"),(0,jsx_runtime.tZ)(Tabs_TabPanel,{id:"preamble",tab:"Preamble",children:"We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."},"preamble"),(0,jsx_runtime.BX)(Tabs_TabPanel,{id:"amendments",tab:"Amendments",children:[(0,jsx_runtime.tZ)("h2",{className:"ds-h4",children:"Bill of Rights"}),(0,jsx_runtime.BX)("ol",{className:"ds-c-list",children:[(0,jsx_runtime.tZ)("li",{children:"Freedoms, Petitions, Assembly"}),(0,jsx_runtime.tZ)("li",{children:"Right to bear arms"}),(0,jsx_runtime.tZ)("li",{children:"Quartering of soldiers"}),(0,jsx_runtime.tZ)("li",{children:"Search and arrest"}),(0,jsx_runtime.tZ)("li",{children:"Rights in criminal cases"}),(0,jsx_runtime.tZ)("li",{children:"Right to a fair trial"}),(0,jsx_runtime.tZ)("li",{children:"Rights in civil cases"}),(0,jsx_runtime.tZ)("li",{children:"Bail, fines, punishment"}),(0,jsx_runtime.tZ)("li",{children:"Rights retained by the People"}),(0,jsx_runtime.tZ)("li",{children:"States’ rights"})]}),(0,jsx_runtime.tZ)("h2",{className:"ds-h4",children:"Later Amendments"}),(0,jsx_runtime.BX)("ol",{className:"ds-c-list",start:11,children:[(0,jsx_runtime.tZ)("li",{children:"Lawsuits against states"}),(0,jsx_runtime.tZ)("li",{children:"Presidential elections"}),(0,jsx_runtime.tZ)("li",{children:"Abolition of slavery"}),(0,jsx_runtime.tZ)("li",{children:"Civil rights"}),(0,jsx_runtime.tZ)("li",{children:"Black suffrage"}),(0,jsx_runtime.tZ)("li",{children:"Income taxes"}),(0,jsx_runtime.tZ)("li",{children:"Senatorial elections"}),(0,jsx_runtime.tZ)("li",{children:"Prohibition of liquor"}),(0,jsx_runtime.tZ)("li",{children:"Women’s suffrage"}),(0,jsx_runtime.tZ)("li",{children:"Terms of office"}),(0,jsx_runtime.tZ)("li",{children:"Repeal of Prohibition"}),(0,jsx_runtime.tZ)("li",{children:"Term Limits for the Presidency"}),(0,jsx_runtime.tZ)("li",{children:"Washington, D.C., suffrage"}),(0,jsx_runtime.tZ)("li",{children:"Abolition of poll taxes"}),(0,jsx_runtime.tZ)("li",{children:"Presidential succession"}),(0,jsx_runtime.tZ)("li",{children:"18-year-old suffrage"}),(0,jsx_runtime.tZ)("li",{children:"Congressional pay raises"})]})]},"amendments")],Default={render:function Component(args){return(0,jsx_runtime.tZ)(Tabs,Tabs_stories_objectSpread(Tabs_stories_objectSpread({},args),{},{children:tabPanels}))}},Disabled={render:function Component(args){return(0,jsx_runtime.BX)(Tabs,Tabs_stories_objectSpread(Tabs_stories_objectSpread({},args),{},{children:[(0,jsx_runtime.tZ)(Tabs_TabPanel,{id:"summary",tab:"Summary",children:"The Bill of Rights is the first ten amendments to the United States Constitution."}),(0,jsx_runtime.tZ)(Tabs_TabPanel,{id:"preamble",tab:"Preamble",children:"We the People of the United States, in Order to form a more perfect Union, establish Justice, insure domestic Tranquility, provide for the common defence, promote the general Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and establish this Constitution for the United States of America."}),(0,jsx_runtime.tZ)(Tabs_TabPanel,{id:"disabled",tab:"Disabled",disabled:!0,children:"You should not see this."})]}))}},Controlled={render:function Component(args){var _useArgs2=Tabs_stories_slicedToArray((0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)(),2),selectedId=_useArgs2[0].selectedId,updateArgs=_useArgs2[1];return(0,jsx_runtime.tZ)(Tabs,Tabs_stories_objectSpread(Tabs_stories_objectSpread({},args),{},{selectedId:selectedId,onChange:function onChange(selectedId,prevSelectedId){(0,dist.aD)("onChange")(selectedId,prevSelectedId),updateArgs({selectedId:selectedId})},children:tabPanels}))}};Default.parameters=Tabs_stories_objectSpread(Tabs_stories_objectSpread({},Default.parameters),{},{docs:Tabs_stories_objectSpread(Tabs_stories_objectSpread({},null===(_Default$parameters=Default.parameters)||void 0===_Default$parameters?void 0:_Default$parameters.docs),{},{source:Tabs_stories_objectSpread({originalSource:"{\n  render: function Component(args) {\n    return <TabsComponent {...args}>{tabPanels}</TabsComponent>;\n  }\n}"},null===(_Default$parameters2=Default.parameters)||void 0===_Default$parameters2||null===(_Default$parameters2$=_Default$parameters2.docs)||void 0===_Default$parameters2$?void 0:_Default$parameters2$.source)})}),Disabled.parameters=Tabs_stories_objectSpread(Tabs_stories_objectSpread({},Disabled.parameters),{},{docs:Tabs_stories_objectSpread(Tabs_stories_objectSpread({},null===(_Disabled$parameters=Disabled.parameters)||void 0===_Disabled$parameters?void 0:_Disabled$parameters.docs),{},{source:Tabs_stories_objectSpread({originalSource:'{\n  render: function Component(args) {\n    return <TabsComponent {...args}>\n        <TabPanel id="summary" tab="Summary">\n          The Bill of Rights is the first ten amendments to the United States Constitution.\n        </TabPanel>\n        <TabPanel id="preamble" tab="Preamble">\n          We the People of the United States, in Order to form a more perfect Union, establish\n          Justice, insure domestic Tranquility, provide for the common defence, promote the general\n          Welfare, and secure the Blessings of Liberty to ourselves and our Posterity, do ordain and\n          establish this Constitution for the United States of America.\n        </TabPanel>\n        <TabPanel id="disabled" tab="Disabled" disabled>\n          You should not see this.\n        </TabPanel>\n      </TabsComponent>;\n  }\n}'},null===(_Disabled$parameters2=Disabled.parameters)||void 0===_Disabled$parameters2||null===(_Disabled$parameters3=_Disabled$parameters2.docs)||void 0===_Disabled$parameters3?void 0:_Disabled$parameters3.source)})}),Controlled.parameters=Tabs_stories_objectSpread(Tabs_stories_objectSpread({},Controlled.parameters),{},{docs:Tabs_stories_objectSpread(Tabs_stories_objectSpread({},null===(_Controlled$parameter=Controlled.parameters)||void 0===_Controlled$parameter?void 0:_Controlled$parameter.docs),{},{source:Tabs_stories_objectSpread({originalSource:"{\n  render: function Component(args) {\n    const [{\n      selectedId\n    }, updateArgs] = useArgs();\n    const onChange = (selectedId, prevSelectedId) => {\n      action('onChange')(selectedId, prevSelectedId);\n      updateArgs({\n        selectedId\n      });\n    };\n    return <TabsComponent {...args} selectedId={selectedId} onChange={onChange}>\n        {tabPanels}\n      </TabsComponent>;\n  }\n}"},null===(_Controlled$parameter2=Controlled.parameters)||void 0===_Controlled$parameter2||null===(_Controlled$parameter3=_Controlled$parameter2.docs)||void 0===_Controlled$parameter3?void 0:_Controlled$parameter3.source)})});var __namedExportsOrder=["Default","Disabled","Controlled"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);