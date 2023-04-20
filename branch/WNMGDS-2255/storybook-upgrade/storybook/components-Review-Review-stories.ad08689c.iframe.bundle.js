/*! For license information please see components-Review-Review-stories.ad08689c.iframe.bundle.js.LICENSE.txt */
(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[2900],{"./packages/design-system/src/components/Review/Review.stories.jsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomActions:function(){return CustomActions},DefaultReview:function(){return DefaultReview},MultipleReviews:function(){return MultipleReviews},SingleReview:function(){return SingleReview},__namedExportsOrder:function(){return __namedExportsOrder},default:function(){return Review_stories}});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs"),ReviewLink=function ReviewLink(props){return(0,jsx_runtime.tZ)("div",{children:(0,jsx_runtime.tZ)("a",{href:props.href,onClick:function handleClick(event){props.onClick&&props.onClick(event,props.href)},className:props.className,"aria-label":props.ariaLabel,children:props.children})})};ReviewLink.displayName="ReviewLink";var Review_ReviewLink=ReviewLink;try{ReviewLink.displayName="ReviewLink",ReviewLink.__docgenInfo={description:"",displayName:"ReviewLink",props:{ariaLabel:{defaultValue:null,description:"Provide this value to give screen readers longer,\nmore descriptive text to explain the context of the link.",name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"",name:"onClick",required:!1,type:{name:"(...args: any[]) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Review/ReviewLink.tsx#ReviewLink"]={docgenInfo:ReviewLink.__docgenInfo,name:"ReviewLink",path:"packages/design-system/src/components/Review/ReviewLink.tsx#ReviewLink"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),getHeading=function getHeading(heading,headingLevel){var Heading="h".concat(headingLevel)||0;if(heading)return(0,jsx_runtime.tZ)(Heading,{className:"ds-c-review__heading",children:heading})},Review=function Review(props){var _props$editText,classes=classnames_default()("ds-c-review",props.className);return(0,jsx_runtime.BX)("div",{className:classes,children:[(0,jsx_runtime.BX)("div",{className:"ds-c-review__content",children:[getHeading(props.heading,props.headingLevel),(0,jsx_runtime.tZ)("div",{className:"ds-c-review__body",children:props.children})]}),props.editContent,!props.editContent&&props.editHref&&(0,jsx_runtime.tZ)(Review_ReviewLink,{onClick:props.onEditClick,href:props.editHref,ariaLabel:props.editAriaLabel,children:null!==(_props$editText=props.editText)&&void 0!==_props$editText?_props$editText:(0,i18n.t)("review.editText")})]})};Review.displayName="Review",Review.defaultProps={headingLevel:"3"};var _DefaultReview$parame,_DefaultReview$parame2,_DefaultReview$parame3,_SingleReview$paramet,_SingleReview$paramet2,_SingleReview$paramet3,_MultipleReviews$para,_MultipleReviews$para2,_MultipleReviews$para3,_CustomActions$parame,_CustomActions$parame2,_CustomActions$parame3,Review_Review=Review;try{Review.displayName="Review",Review.__docgenInfo={description:"",displayName:"Review",props:{children:{defaultValue:null,description:"`Review` component's body content.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},editAriaLabel:{defaultValue:null,description:"Optional label to give screenreaders longer, more descriptive text to\nexplain the context of an edit link.",name:"editAriaLabel",required:!1,type:{name:"string"}},editContent:{defaultValue:null,description:"An optional node in place of the edit link. If this defined, no edit link will be shown.",name:"editContent",required:!1,type:{name:"ReactNode"}},editHref:{defaultValue:null,description:"Href for the edit link. If this is undefined, no edit link will be shown.",name:"editHref",required:!1,type:{name:"string"}},editText:{defaultValue:null,description:"",name:"editText",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"3"},description:"Heading type to override default `<h3>`.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'}]}},onEditClick:{defaultValue:null,description:"An optional function that is executed on edit link click. The event and\nprops.editHref value are passed to this function.",name:"onEditClick",required:!1,type:{name:"(...args: any[]) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Review/Review.tsx#Review"]={docgenInfo:Review.__docgenInfo,name:"Review",path:"packages/design-system/src/components/Review/Review.tsx#Review"})}catch(__react_docgen_typescript_loader_error){}function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}var _excluded=["data"];function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}var Review_stories={title:"Patterns/Review",component:Review_Review,argTypes:{headingLevel:{control:{type:"select"},options:["1","2","3","4","5","6"]},editContent:{control:!1},editText:{control:"text"},heading:{control:"text"}},args:{headingLevel:"3"}},Template=function Template(_ref){_ref.data;var args=_objectWithoutProperties(_ref,_excluded);return(0,jsx_runtime.tZ)(Review_Review,_objectSpread({},args))};Template.displayName="Template";var DefaultReview=Template.bind({});DefaultReview.args={children:"This is an example of a default Review component."};var SingleReview=Template.bind({});SingleReview.args={heading:"A single Review component",children:"This is an example of a single Review component.",editHref:"#"};var MultipleReviews=Template.bind({});MultipleReviews.args={heading:"Multiple Review components",children:"Multiple Review components can be combined together one after another.",editHref:"#"},MultipleReviews.decorators=[function(Story){return(0,jsx_runtime.BX)("div",{children:[Story(),Story()]})}];var CustomActions=Template.bind({});CustomActions.args={heading:"A Review component with custom actions",children:"You can add custom action links as needed.",editContent:(0,jsx_runtime.BX)("div",{children:[(0,jsx_runtime.tZ)("a",{href:"#",children:"Edit"}),(0,jsx_runtime.tZ)("span",{children:"|"}),(0,jsx_runtime.tZ)("a",{href:"#",children:"Remove"})]})},DefaultReview.parameters=_objectSpread(_objectSpread({},DefaultReview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_DefaultReview$parame=DefaultReview.parameters)||void 0===_DefaultReview$parame?void 0:_DefaultReview$parame.docs),{},{source:_objectSpread({originalSource:"({\n  data,\n  ...args\n}) => <Review {...args} />"},null===(_DefaultReview$parame2=DefaultReview.parameters)||void 0===_DefaultReview$parame2||null===(_DefaultReview$parame3=_DefaultReview$parame2.docs)||void 0===_DefaultReview$parame3?void 0:_DefaultReview$parame3.source)})}),SingleReview.parameters=_objectSpread(_objectSpread({},SingleReview.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_SingleReview$paramet=SingleReview.parameters)||void 0===_SingleReview$paramet?void 0:_SingleReview$paramet.docs),{},{source:_objectSpread({originalSource:"({\n  data,\n  ...args\n}) => <Review {...args} />"},null===(_SingleReview$paramet2=SingleReview.parameters)||void 0===_SingleReview$paramet2||null===(_SingleReview$paramet3=_SingleReview$paramet2.docs)||void 0===_SingleReview$paramet3?void 0:_SingleReview$paramet3.source)})}),MultipleReviews.parameters=_objectSpread(_objectSpread({},MultipleReviews.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MultipleReviews$para=MultipleReviews.parameters)||void 0===_MultipleReviews$para?void 0:_MultipleReviews$para.docs),{},{source:_objectSpread({originalSource:"({\n  data,\n  ...args\n}) => <Review {...args} />"},null===(_MultipleReviews$para2=MultipleReviews.parameters)||void 0===_MultipleReviews$para2||null===(_MultipleReviews$para3=_MultipleReviews$para2.docs)||void 0===_MultipleReviews$para3?void 0:_MultipleReviews$para3.source)})}),CustomActions.parameters=_objectSpread(_objectSpread({},CustomActions.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_CustomActions$parame=CustomActions.parameters)||void 0===_CustomActions$parame?void 0:_CustomActions$parame.docs),{},{source:_objectSpread({originalSource:"({\n  data,\n  ...args\n}) => <Review {...args} />"},null===(_CustomActions$parame2=CustomActions.parameters)||void 0===_CustomActions$parame2||null===(_CustomActions$parame3=_CustomActions$parame2.docs)||void 0===_CustomActions$parame3?void 0:_CustomActions$parame3.source)})});var __namedExportsOrder=["DefaultReview","SingleReview","MultipleReviews","CustomActions"]},"./node_modules/classnames/index.js":function(module,exports){var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);