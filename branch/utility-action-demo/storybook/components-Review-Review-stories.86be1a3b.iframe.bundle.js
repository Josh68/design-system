/*! For license information please see components-Review-Review-stories.86be1a3b.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[2900],{"./packages/design-system/src/components/Review/Review.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomActions:()=>CustomActions,DefaultReview:()=>DefaultReview,MultipleReviews:()=>MultipleReviews,SingleReview:()=>SingleReview,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Review_stories});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const getHeading=(heading,headingLevel)=>{const Heading=`h${headingLevel}`||"h3";if(heading)return(0,jsx_runtime.tZ)(Heading,{className:"ds-c-review__heading",children:heading})},Review=props=>{const classes=classnames_default()("ds-c-review",props.className);return(0,jsx_runtime.BX)("div",{className:classes,children:[(0,jsx_runtime.BX)("div",{className:"ds-c-review__content",children:[getHeading(props.heading,props.headingLevel),(0,jsx_runtime.tZ)("div",{className:"ds-c-review__body",children:props.children})]}),props.editContent,!props.editContent&&props.editHref&&(0,jsx_runtime.tZ)("a",{onClick:event=>{props.onEditClick&&props.onEditClick(event,props.editHref)},href:props.editHref,"aria-label":props.editAriaLabel,children:props.editText??(0,i18n.t)("review.editText")})]})};Review.defaultProps={headingLevel:"3"};const Review_Review=Review;try{Review.displayName="Review",Review.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/review/).",displayName:"Review",props:{children:{defaultValue:null,description:"`Review` component's body content.",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},editAriaLabel:{defaultValue:null,description:"Optional label to give screen readers longer, more descriptive text to\nexplain the context of an edit link.",name:"editAriaLabel",required:!1,type:{name:"string"}},editContent:{defaultValue:null,description:"An optional node in place of the edit link. If this defined, no edit link will be shown.",name:"editContent",required:!1,type:{name:"ReactNode"}},editHref:{defaultValue:null,description:"Href for the edit link. If this is undefined, no edit link will be shown.",name:"editHref",required:!1,type:{name:"string"}},editText:{defaultValue:null,description:"",name:"editText",required:!1,type:{name:"ReactNode"}},heading:{defaultValue:null,description:"",name:"heading",required:!1,type:{name:"ReactNode"}},headingLevel:{defaultValue:{value:"3"},description:"Heading type to override default `<h3>`.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},onEditClick:{defaultValue:null,description:"An optional function that is executed on edit link click. The event and\nprops.editHref value are passed to this function.",name:"onEditClick",required:!1,type:{name:"(...args: any[]) => any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Review/Review.tsx#Review"]={docgenInfo:Review.__docgenInfo,name:"Review",path:"packages/design-system/src/components/Review/Review.tsx#Review"})}catch(__react_docgen_typescript_loader_error){}const Review_stories={title:"Components/Review",component:Review_Review,args:{headingLevel:"3"},argTypes:{editText:{table:{defaultValue:{summary:"Edit"}}}}},DefaultReview={args:{children:"This is an example of a default Review component."}},SingleReview={args:{heading:"A single Review component",children:"This is an example of a single Review component.",editHref:"#"}},MultipleReviews={args:{heading:"Multiple Review components",children:"Multiple Review components can be combined together one after another.",editHref:"#"},decorators:[Story=>(0,jsx_runtime.BX)("div",{children:[Story(),Story()]})]},CustomActions={args:{heading:"A Review component with custom actions",children:"You can add custom action links as needed.",editContent:(0,jsx_runtime.BX)("div",{children:[(0,jsx_runtime.tZ)("a",{href:"#",children:"Edit"}),(0,jsx_runtime.tZ)("span",{children:"|"}),(0,jsx_runtime.tZ)("a",{href:"#",children:"Remove"})]})}};DefaultReview.parameters={...DefaultReview.parameters,docs:{...DefaultReview.parameters?.docs,source:{originalSource:"{\n  args: {\n    children: 'This is an example of a default Review component.'\n  }\n}",...DefaultReview.parameters?.docs?.source}}},SingleReview.parameters={...SingleReview.parameters,docs:{...SingleReview.parameters?.docs,source:{originalSource:"{\n  args: {\n    heading: 'A single Review component',\n    children: 'This is an example of a single Review component.',\n    editHref: '#'\n  }\n}",...SingleReview.parameters?.docs?.source}}},MultipleReviews.parameters={...MultipleReviews.parameters,docs:{...MultipleReviews.parameters?.docs,source:{originalSource:"{\n  args: {\n    heading: 'Multiple Review components',\n    children: 'Multiple Review components can be combined together one after another.',\n    editHref: '#'\n  },\n  decorators: [Story => <div>\n        {Story()}\n        {Story()}\n      </div>]\n}",...MultipleReviews.parameters?.docs?.source}}},CustomActions.parameters={...CustomActions.parameters,docs:{...CustomActions.parameters?.docs,source:{originalSource:"{\n  args: {\n    heading: 'A Review component with custom actions',\n    children: 'You can add custom action links as needed.',\n    editContent: <div>\n        <a href=\"#\">Edit</a>\n        <span>|</span>\n        <a href=\"#\">Remove</a>\n      </div>\n  }\n}",...CustomActions.parameters?.docs?.source}}};const __namedExportsOrder=["DefaultReview","SingleReview","MultipleReviews","CustomActions"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);