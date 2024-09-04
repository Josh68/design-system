/*! For license information please see components-web-components-ds-pagination-ds-pagination-stories.030b2f5c.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[5600],{"./packages/design-system/src/components/Button/Button.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{z:()=>Button,Z:()=>Button_Button});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),mergeRefs=__webpack_require__("./packages/design-system/src/components/utilities/mergeRefs.ts"),config=__webpack_require__("./packages/design-system/src/components/config.ts"),getAnalyticsContentFromRefs=__webpack_require__("./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts"),events=__webpack_require__("./packages/design-system/src/components/analytics/events.ts"),compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Button=props=>{const{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,onAnalyticsEvent,children,className,inputRef,isAlternate,onClick,onDark,size,variation,...otherProps}=props,{contentRef,sendButtonEvent}=function useButtonAnalytics(_ref){let{analytics,analyticsLabelOverride,analyticsParentHeading,analyticsParentType,href,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,type,variation}=_ref;const contentRef=(0,compat_module.useRef)();return{contentRef,sendButtonEvent:function sendButtonEvent(){if(!0!==analytics&&(!(0,config.vc)().buttonSendsAnalytics||!1===analytics))return;const buttonText=analyticsLabelOverride??(0,getAnalyticsContentFromRefs.L)([contentRef]),buttonStyle=variation??"default",buttonType=type??"button",buttonParentHeading=analyticsParentHeading??" ",buttonParentType=analyticsParentType??" ";return onAnalyticsEvent({event_name:"button_engagement",event_extension:events.RW,text:buttonText,button_style:buttonStyle,button_type:href?"link":buttonType,parent_component_heading:buttonParentHeading,parent_component_type:buttonParentType,...href?{link_url:href}:{}})}}}(props),ComponentType=props.href?"a":"button",colorSchemeClass=isAlternate&&"ds-c-button--alternate",modeClass=onDark&&"ds-c-button--on-dark",sizeClass=size&&`ds-c-button--${size}`,variationClass=variation&&`ds-c-button--${variation}`,attrs={...otherProps,className:classnames_default()("ds-c-button",colorSchemeClass,modeClass,sizeClass,variationClass,className)};function handleClick(e){props.disabled||(sendButtonEvent(),onClick&&onClick(e))}return"button"!==ComponentType&&(delete attrs.disabled,delete attrs.type,props.disabled&&(attrs.role="link",attrs["aria-disabled"]=!0,delete attrs.href)),(0,jsx_runtime.tZ)(ComponentType,{ref:(0,mergeRefs.Z)([inputRef,contentRef]),onClick:handleClick,onKeyPress:"a"===ComponentType?function handleKeyPress(e){" "===e.key&&handleClick(e)}:void 0,...attrs,children})};Button.defaultProps={isAlternate:!1,onDark:!1,type:"button"};const Button_Button=Button;try{Button.displayName="Button",Button.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/button/).",displayName:"Button",props:{children:{defaultValue:null,description:"Label text or HTML",name:"children",required:!0,type:{name:"ReactNode"}},className:{defaultValue:null,description:"Additional classes to be added to the root button element.",name:"className",required:!1,type:{name:"string"}},disabled:{defaultValue:null,description:"",name:"disabled",required:!1,type:{name:"boolean"}},href:{defaultValue:null,description:"When provided, the root component will render as an `<a>` element\nrather than `button`.",name:"href",required:!1,type:{name:"string"}},inputRef:{defaultValue:null,description:"Access a reference to the `button` or `a` element",name:"inputRef",required:!1,type:{name:"ButtonRef"}},isAlternate:{defaultValue:{value:"false"},description:"Applies the alternate color to a Button. By default, Button\nuses the `main` color.",name:"isAlternate",required:!1,type:{name:"boolean"}},onClick:{defaultValue:null,description:"Returns the [`SyntheticEvent`](https://facebook.github.io/react/docs/events.html).\nNot called when the Button is disabled.",name:"onClick",required:!1,type:{name:"(...args: any[]) => any"}},onDark:{defaultValue:{value:"false"},description:"Defines a color palette best used when Button is placed on a dark\nbackground-color. By default, Button uses a light color palette.",name:"onDark",required:!1,type:{name:"boolean"}},size:{defaultValue:null,description:"",name:"size",required:!1,type:{name:"enum",value:[{value:'"big"'},{value:'"small"'}]}},type:{defaultValue:{value:"'button' as const"},description:"Button [`type`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button#attr-type) attribute",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"reset"'},{value:'"submit"'}]}},variation:{defaultValue:null,description:"A string corresponding to Button variation classes.",name:"variation",required:!1,type:{name:"enum",value:[{value:'"ghost"'},{value:'"solid"'}]}},analytics:{defaultValue:null,description:"Analytics events tracking is enabled by default. Set this value to `false` to\ndisable tracking for this component instance.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"analytics",required:!1,type:{name:"boolean"}},analyticsLabelOverride:{defaultValue:null,description:"An override for the dynamic content sent to analytics services. By default this\ncontent comes from the heading.\n\nIn cases where this component’s heading may contain **sensitive information**,\nuse this prop to override what is sent to analytics.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"analyticsLabelOverride",required:!1,type:{name:"string"}},onAnalyticsEvent:{defaultValue:null,description:"Optional callback that will intercept analytics events for this component.\nIf none is specified, the design system will use the default analytics\nfunction, which can be overwritten globally with the `defaultAnalyticsFunction`\nconfig property.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"onAnalyticsEvent",required:!1,type:{name:"(event: AnalyticsEvent) => void"}},analyticsParentHeading:{defaultValue:null,description:"If needed for analytics, pass heading text of parent component of button.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"analyticsParentHeading",required:!1,type:{name:"string"}},analyticsParentType:{defaultValue:null,description:"If needed for analytics, pass type of parent component of button.\n\n[Read more about analytics.](https://design.cms.gov/components/analytics/)",name:"analyticsParentType",required:!1,type:{name:"string"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLButtonElement> & Ref<HTMLAnchorElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Button/Button.tsx#Button"]={docgenInfo:Button.__docgenInfo,name:"Button",path:"packages/design-system/src/components/Button/Button.tsx#Button"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/ArrowIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{e:()=>ArrowIcon});var _SvgIcon__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/Icons/SvgIcon.tsx"),classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_i18n__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./packages/design-system/src/components/i18n.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",direction:"right",viewBox:"0 0 320 512"};function ArrowIcon(props){const direction=props.direction||defaultProps.direction,iconCssClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-icon--arrow",`ds-c-icon--arrow-${direction}`,props.className);return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(_SvgIcon__WEBPACK_IMPORTED_MODULE_2__.l,{title:(0,_i18n__WEBPACK_IMPORTED_MODULE_3__.t)(`icons.${direction}Arrow`),...defaultProps,...props,className:iconCssClasses,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("path",{fill:"currentColor",d:"M285.476 272.971L91.132 467.314c-9.373 9.373-24.569 9.373-33.941 0l-22.667-22.667c-9.357-9.357-9.375-24.522-.04-33.901L188.505 256 34.484 101.255c-9.335-9.379-9.317-24.544.04-33.901l22.667-22.667c9.373-9.373 24.569-9.373 33.941 0L285.475 239.03c9.373 9.372 9.373 24.568.001 33.941z"})})}try{ArrowIcon.displayName="ArrowIcon",ArrowIcon.__docgenInfo={description:"",displayName:"ArrowIcon",props:{direction:{defaultValue:null,description:"",name:"direction",required:!1,type:{name:"enum",value:[{value:'"down"'},{value:'"left"'},{value:'"right"'},{value:'"up"'}]}},ariaHidden:{defaultValue:null,description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!1,type:{name:"string"}},inversed:{defaultValue:null,description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/ArrowIcon.tsx#ArrowIcon"]={docgenInfo:ArrowIcon.__docgenInfo,name:"ArrowIcon",path:"packages/design-system/src/components/Icons/ArrowIcon.tsx#ArrowIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Icons/SvgIcon.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{l:()=>SvgIcon});var classnames__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/classnames/index.js"),classnames__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_0__),_utilities_useId__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const SvgIcon=_ref=>{let{ariaHidden,className,children,description,id,inversed,title,viewBox,...otherProps}=_ref;const svgClasses=classnames__WEBPACK_IMPORTED_MODULE_0___default()("ds-c-icon",{"ds-c-icon--inverse":inversed},className),rootId=(0,_utilities_useId__WEBPACK_IMPORTED_MODULE_2__.Z)("icon--",id),titleId=`${rootId}__title`,descriptionId=`${rootId}__desc`,ariaLabelledBy=description?`${titleId} ${descriptionId}`:titleId,isSrVisible=!ariaHidden,screenReaderProps={};return isSrVisible&&(screenReaderProps["aria-labelledby"]=ariaLabelledBy,screenReaderProps.role="img"),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.BX)("svg",{"aria-hidden":ariaHidden,className:svgClasses,id:id??isSrVisible?rootId:void 0,viewBox,xmlns:"http://www.w3.org/2000/svg",...screenReaderProps,...otherProps,children:[isSrVisible&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("title",{id:titleId,children:title}),isSrVisible&&description&&(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("desc",{id:descriptionId,children:description}),children]})};SvgIcon.defaultProps={ariaHidden:!0,inversed:!1};try{SvgIcon.displayName="SvgIcon",SvgIcon.__docgenInfo={description:"",displayName:"SvgIcon",props:{ariaHidden:{defaultValue:{value:"true"},description:"Describes the value of the `aria-hidden` attribute on the SVG. Defaulted to true with the assumption that most icons are decorative.\nIf the icon does not have any associated label text, set this to `false` and ensure a `title` is provided for improved accessibility.",name:"ariaHidden",required:!1,type:{name:"boolean"}},className:{defaultValue:null,description:"Additional CSS classes to be added to the svg element",name:"className",required:!1,type:{name:"string"}},children:{defaultValue:null,description:"The elements that make up the SVG",name:"children",required:!0,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Long-text description of any SVG. Use for complex icons, otherwise `title` prop will suffice.",name:"description",required:!1,type:{name:"string"}},id:{defaultValue:null,description:"A custom `id` attribute for the SVG",name:"id",required:!1,type:{name:"string"}},inversed:{defaultValue:{value:"false"},description:"If `true` sets inverse fill color.",name:"inversed",required:!1,type:{name:"boolean"}},title:{defaultValue:null,description:"The descriptive name for the SVG icon",name:"title",required:!0,type:{name:"string"}},viewBox:{defaultValue:null,description:"A string describing the viewbox of the SVG.\n\nIt is recommended that the icon is centered and fill up the default viewport size.\nSee [this blog post](https://webdesign.tutsplus.com/tutorials/svg-viewport-and-viewbox-for-beginners--cms-30844) for further explanation on viewBox and how to use it.",name:"viewBox",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"]={docgenInfo:SvgIcon.__docgenInfo,name:"SvgIcon",path:"packages/design-system/src/components/Icons/SvgIcon.tsx#SvgIcon"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/Pagination/Pagination.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{t:()=>Pagination,Z:()=>Pagination_Pagination});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),Button=__webpack_require__("./packages/design-system/src/components/Button/Button.tsx"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Ellipses=()=>(0,jsx_runtime.tZ)("span",{className:"ds-c-pagination__overflow",children:"…"}),Pagination_Ellipses=Ellipses;try{Ellipses.displayName="Ellipses",Ellipses.__docgenInfo={description:"",displayName:"Ellipses",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Pagination/Ellipses.tsx#Ellipses"]={docgenInfo:Ellipses.__docgenInfo,name:"Ellipses",path:"packages/design-system/src/components/Pagination/Ellipses.tsx#Ellipses"})}catch(__react_docgen_typescript_loader_error){}function Page(_ref){let{href,index,isActive,onPageChange}=_ref;return(0,jsx_runtime.tZ)(jsx_runtime.HY,{children:isActive?(0,jsx_runtime.tZ)("span",{className:"ds-c-button ds-c-button--ghost ds-c-pagination__current-page","aria-current":"page",children:index}):(0,jsx_runtime.tZ)(Button.Z,{variation:"ghost",href,onClick:onPageChange,"aria-label":`page ${index}`,children:index})})}try{Page.displayName="Page",Page.__docgenInfo={description:"",displayName:"Page",props:{index:{defaultValue:null,description:"Defines the page number.",name:"index",required:!0,type:{name:"number"}},isActive:{defaultValue:null,description:"Renders current page if true, other links if false.",name:"isActive",required:!0,type:{name:"boolean"}},onPageChange:{defaultValue:null,description:"A callback function used to handle state changes.",name:"onPageChange",required:!1,type:{name:"(evt: MouseEvent<Element, MouseEvent>) => void"}},href:{defaultValue:null,description:"Defines application-specific routing in url for links.",name:"href",required:!0,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Pagination/Page.tsx#Page"]={docgenInfo:Page.__docgenInfo,name:"Page",path:"packages/design-system/src/components/Pagination/Page.tsx#Page"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),ArrowIcon=__webpack_require__("./packages/design-system/src/components/Icons/ArrowIcon.tsx"),i18n=__webpack_require__("./packages/design-system/src/components/i18n.ts"),useId=__webpack_require__("./packages/design-system/src/components/utilities/useId.ts");const overflow=1,maxVisiblePages=7;function Pagination(_ref){let{ariaLabel,className,compact,currentPage,renderHref,onPageChange,headingLevel,isNavigationHidden,startLabelText,startAriaLabel,endLabelText,endAriaLabel,totalPages,...rest}=_ref;const classes=classnames_default()("ds-c-pagination",{"ds-c-pagination--compact":compact},className),pageChange=(0,compat_module.useCallback)((page=>evt=>onPageChange(evt,page)),[onPageChange]),pages=[];if(!compact){const pageRange=function paginationBuilder(page,pages){const paginationRange=[];let start=page-overflow,end=page+overflow;const availableSlots=maxVisiblePages-2;page<availableSlots&&(start=1,end=availableSlots),page===pages-2&&(start-=1,end+=1),end===pages-2&&(end+=1),end>=pages&&(start=pages-(availableSlots-1),end=pages),pages<=maxVisiblePages&&(start=1,end=pages);for(let i=start;i<=end;i++)paginationRange.push(i);return paginationRange}(currentPage,totalPages);pageRange[0]>=2&&(pages.push((0,jsx_runtime.tZ)(Page,{href:renderHref(1),index:1,isActive:1===currentPage,onPageChange:pageChange(1)},"page-1")),2!==pageRange[0]&&pages.push((0,jsx_runtime.tZ)(Pagination_Ellipses,{},"ellipses-1"))),pageRange.forEach((page=>{pages.push((0,jsx_runtime.tZ)(Page,{href:renderHref(page),index:page,isActive:currentPage===page,onPageChange:pageChange(page)},`page-${page}`))})),currentPage<=totalPages-3&&totalPages>maxVisiblePages&&(currentPage<totalPages-3&&pages.push((0,jsx_runtime.tZ)(Pagination_Ellipses,{},"ellipses-2")),pages.push((0,jsx_runtime.tZ)(Page,{href:renderHref(totalPages),index:totalPages,isActive:currentPage===totalPages,onPageChange:pageChange(totalPages)},`page-${totalPages}`)))}const startIcon=(0,jsx_runtime.tZ)(ArrowIcon.e,{direction:"left",className:"ds-c-pagination__nav--image"}),endIcon=(0,jsx_runtime.tZ)(ArrowIcon.e,{direction:"right",className:"ds-c-pagination__nav--image"}),Heading=`h${headingLevel}`,headingId=(0,useId.Z)("pagination-heading--",rest.id&&`${rest.id}__pagination-heading`),headingElement=(0,jsx_runtime.BX)(Heading,{id:headingId,children:[ariaLabel??(0,i18n.t)("pagination.ariaLabel")," -"," ",(0,i18n.t)("pagination.pageXOfY",{number:`${currentPage}`,total:`${totalPages}`})]});return(0,jsx_runtime.BX)("nav",{className:classes,"aria-labelledby":headingId,...rest,children:[(0,jsx_runtime.tZ)("span",{className:"ds-u-visibility--screen-reader",children:headingElement}),(0,jsx_runtime.BX)(Button.Z,{variation:"ghost",href:renderHref(currentPage-1),onClick:pageChange(currentPage-1),"aria-label":startAriaLabel??(0,i18n.t)("pagination.startAriaLabel"),className:"ds-c-pagination__nav",disabled:1===currentPage,style:{visibility:1===currentPage&&isNavigationHidden?"hidden":"visible"},"aria-hidden":1===currentPage&&isNavigationHidden,children:[(0,jsx_runtime.tZ)("span",{className:"ds-c-pagination__nav--img-container ds-c-pagination__nav--img-container-previous",children:startIcon}),startLabelText??(0,i18n.t)("pagination.startLabelText")]}),(0,jsx_runtime.tZ)("span",{className:"ds-c-pagination__page-count",dangerouslySetInnerHTML:{__html:(0,i18n.t)("pagination.pageXOfY",{number:`<strong>${currentPage}</strong>`,total:`<strong>${totalPages}</strong>`})}}),(0,jsx_runtime.tZ)("div",{className:"ds-c-pagination__pages",children:pages}),(0,jsx_runtime.BX)(Button.Z,{variation:"ghost",href:renderHref(currentPage+1),onClick:pageChange(currentPage+1),"aria-label":endAriaLabel??(0,i18n.t)("pagination.endAriaLabel"),className:"ds-c-pagination__nav",disabled:currentPage===totalPages,style:{visibility:currentPage===totalPages&&isNavigationHidden?"hidden":"visible"},"aria-hidden":currentPage===totalPages&&isNavigationHidden,children:[endLabelText??(0,i18n.t)("pagination.endLabelText"),(0,jsx_runtime.tZ)("span",{className:"ds-c-pagination__nav--img-container ds-c-pagination__nav--img-container-next",children:endIcon})]})]})}Pagination.defaultProps={compact:!1,headingLevel:"2",isNavigationHidden:!1};const Pagination_Pagination=Pagination;try{Pagination.displayName="Pagination",Pagination.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/pagination/).",displayName:"Pagination",props:{ariaLabel:{defaultValue:null,description:'Defines `aria-label` on the screen-reader heading for this element, which precedes the page count readout. Since this exists on a `<nav>` element, the word "navigation" should be omitted from this label. Optional.',name:"ariaLabel",required:!1,type:{name:"string"}},className:{defaultValue:null,description:"Class to be applied to parent `<nav>` element of Pagination component. Optional.",name:"className",required:!1,type:{name:"string"}},compact:{defaultValue:{value:"false"},description:"Renders compact layout. Optional.",name:"compact",required:!1,type:{name:"boolean"}},currentPage:{defaultValue:null,description:"An integer representing active page number in the pagination results.",name:"currentPage",required:!0,type:{name:"number"}},headingLevel:{defaultValue:{value:"2"},description:"Heading type to override default `<h2>` used in the screen-reader heading.",name:"headingLevel",required:!1,type:{name:"enum",value:[{value:'"1"'},{value:'"2"'},{value:'"3"'},{value:'"4"'},{value:'"5"'},{value:'"6"'}]}},isNavigationHidden:{defaultValue:{value:"false"},description:"Determines if navigation is hidden when current page is the first or last of Pagination page set. Optional.",name:"isNavigationHidden",required:!1,type:{name:"boolean"}},onPageChange:{defaultValue:null,description:"A callback function this is invoked whenever a page link is clicked, including the previous and next buttons. It is called with both the event object and the page number.",name:"onPageChange",required:!0,type:{name:"(evt: MouseEvent<Element, MouseEvent>, page: number) => void"}},renderHref:{defaultValue:null,description:"Defines application-specific routing in url for links.",name:"renderHref",required:!0,type:{name:"(page: number) => string"}},startLabelText:{defaultValue:null,description:"Sets custom label on start navigation. Added for language support. Optional.",name:"startLabelText",required:!1,type:{name:"string"}},startAriaLabel:{defaultValue:null,description:"Sets custom ARIA label on start navigation. Added for language support. Label structure should be the equivalent of: Previous Page. Optional.",name:"startAriaLabel",required:!1,type:{name:"string"}},endLabelText:{defaultValue:null,description:"Sets custom label on end navigation. Added for language support. Optional.",name:"endLabelText",required:!1,type:{name:"string"}},endAriaLabel:{defaultValue:null,description:"Sets custom ARIA label on end navigation. Added for language support. Label structure should be the equivalent of: Next Page. Optional.",name:"endAriaLabel",required:!1,type:{name:"string"}},totalPages:{defaultValue:null,description:"An integer representing total number of pages in the pagination results.",name:"totalPages",required:!0,type:{name:"number"}},ref:{defaultValue:null,description:"",name:"ref",required:!1,type:{name:"Ref<HTMLElement>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/design-system/src/components/Pagination/Pagination.tsx#Pagination"]={docgenInfo:Pagination.__docgenInfo,name:"Pagination",path:"packages/design-system/src/components/Pagination/Pagination.tsx#Pagination"})}catch(__react_docgen_typescript_loader_error){}},"./packages/design-system/src/components/analytics/getAnalyticsContentFromRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function getAnalyticsContentFromRefs(refs){return refs.map((ref=>ref.current?.textContent)).find((textContent=>textContent))}__webpack_require__.d(__webpack_exports__,{L:()=>getAnalyticsContentFromRefs,Z:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__=getAnalyticsContentFromRefs},"./packages/design-system/src/components/utilities/mergeRefs.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function mergeRefs(refs){return value=>{refs.forEach((ref=>{"function"==typeof ref?ref(value):null!=ref&&(ref.current=value)}))}}__webpack_require__.d(__webpack_exports__,{Z:()=>mergeRefs})},"./packages/design-system/src/components/utilities/useId.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>useId});var lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0__),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");function useId(prefix,providedId){return(0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(providedId??lodash_uniqueId__WEBPACK_IMPORTED_MODULE_0___default()(prefix)).current}},"./packages/design-system/src/components/web-components/wrapperUtils.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";function parseBooleanAttr(attr){return void 0!==attr&&"false"!==attr}function parseDateAttr(attr){return attr?new Date(attr):void 0}function parseIntegerAttr(attr){if(void 0!==attr)return parseInt(attr)}__webpack_require__.d(__webpack_exports__,{Mt:()=>parseBooleanAttr,Py:()=>parseDateAttr,bD:()=>parseIntegerAttr})},"./packages/design-system/src/components/web-components/ds-pagination/ds-pagination.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ds_pagination_stories});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),WebComponentDocTemplate=__webpack_require__("./.storybook/docs/WebComponentDocTemplate.mdx"),dist=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),storybook=__webpack_require__("./packages/design-system/src/components/web-components/storybook.tsx"),external_STORYBOOK_MODULE_PREVIEW_API_=__webpack_require__("@storybook/preview-api"),preactement_define=__webpack_require__("./packages/design-system/src/components/web-components/preactement/define.ts"),Pagination=__webpack_require__("./packages/design-system/src/components/Pagination/Pagination.tsx"),wrapperUtils=__webpack_require__("./packages/design-system/src/components/web-components/wrapperUtils.ts"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const Wrapper=_ref=>{let{compact,currentPage,isNavigationHidden,headingAriaLabel,hrefTemplate,rootId,totalPages,...otherProps}=_ref;return(0,jsx_runtime.tZ)(Pagination.t,{...otherProps,ariaLabel:headingAriaLabel,compact:(0,wrapperUtils.Mt)(compact),currentPage:(0,wrapperUtils.bD)(currentPage)??0,isNavigationHidden:(0,wrapperUtils.Mt)(isNavigationHidden),renderHref:page=>(hrefTemplate??"#page={page}").replace("{page}",""+page),id:rootId,totalPages:(0,wrapperUtils.bD)(totalPages)??0})};(0,preactement_define.O)("ds-pagination",(()=>Wrapper),{attributes:["class-name","compact","current-page","is-navigation-hidden","heading-aria-label","heading-level","href-template","start-label-text","start-aria-label","end-label-text","end-aria-label","root-id","total-pages"],events:[["onPageChange",(event,page)=>({...event,detail:{target:event.target,page},preventDefault:()=>event.preventDefault()})]]});const ds_pagination_stories={title:"Web Components/ds-pagination",argTypes:{"class-name":{description:"Additional classes to be added to the root element. Optional.",control:"text"},compact:{description:'Set to "true" to render a compact layout. Optional.',control:"boolean"},"current-page":{description:"An integer representing active page number in the pagination results.",control:"number"},"heading-aria-label":{description:'Defines `aria-label` on the screen-reader heading for this element, which precedes the page count readout. Since this exists on a `<nav>` element, the word "navigation" should be omitted from this label. Optional.',control:"text"},"heading-level":{description:"Heading type to override default `<h2>` used in the screen-reader heading. Optional.",options:["1","2","3","4","5","6"],control:{type:"select"}},"is-navigation-hidden":{description:'Set to "true" to hide instead of disable navigation buttons. Optional.',control:"boolean"},hrefTemplate:{description:"A string used to generate URLs for each page link. The component will find any instance of `{page}` and replace it with the page number. Defaults to `'#page={page}'`.",control:"text"},"start-label-text":{description:"Sets custom label on start navigation. Added for language support. Optional.",control:"text"},"start-aria-label":{description:"Sets custom ARIA label on start navigation. Added for language support. Label structure should be the equivalent of: Previous Page. Optional.",control:"text"},"end-label-text":{description:"Sets custom label on end navigation. Added for language support. Optional.",control:"text"},"end-aria-label":{description:"Sets custom ARIA label on end navigation. Added for language support. Label structure should be the equivalent of: Next Page. Optional.",control:"text"},"total-pages":{description:"An integer representing total number of pages in the pagination results.",control:"number"}},args:{"current-page":1,"total-pages":15},parameters:{docs:{page:WebComponentDocTemplate.Z,description:{component:"For information about how and when to use this component, [refer to its full documentation page](https://design.cms.gov/components/month-picker/)."},componentEvents:{"ds-page-change":{description:"Dispatched whenever page link is clicked, including the previous and next buttons.",eventObjectDescription:(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.BX)("p",{children:[(0,jsx_runtime.tZ)("code",{children:"event.details.target"})," - The ",(0,jsx_runtime.tZ)("code",{children:"target"})," of the original event"]}),(0,jsx_runtime.BX)("p",{children:[(0,jsx_runtime.tZ)("code",{children:"event.details.page"})," - An integer representing the newly active page number"]})]})}}}},decorators:[storybook.h]},Default=(args=>{const[{"current-page":currentPage},updateArgs]=(0,external_STORYBOOK_MODULE_PREVIEW_API_.useArgs)();return(0,compat_module.useEffect)((()=>{const onChange=event=>{event.preventDefault(),(0,dist.aD)("ds-page-change")(event),updateArgs({"current-page":event.detail.page})},pagination=document.querySelector("ds-pagination");return pagination.addEventListener("ds-page-change",onChange),()=>{pagination.removeEventListener("ds-page-change",onChange)}})),(0,jsx_runtime.tZ)("ds-pagination",{...args,"current-page":currentPage})}).bind({});Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"args => {\n  const [{\n    'current-page': currentPage\n  }, updateArgs] = useArgs();\n  useEffect(() => {\n    const onChange = event => {\n      event.preventDefault();\n      action('ds-page-change')(event);\n      updateArgs({\n        'current-page': event.detail.page\n      });\n    };\n    const pagination = document.querySelector('ds-pagination');\n    pagination.addEventListener('ds-page-change', onChange);\n    return () => {\n      pagination.removeEventListener('ds-page-change', onChange);\n    };\n  });\n  return <ds-pagination {...args} current-page={currentPage} />;\n}",...Default.parameters?.docs?.source}}};const __namedExportsOrder=["Default"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()},"./node_modules/lodash/uniqueId.js":(module,__unused_webpack_exports,__webpack_require__)=>{var toString=__webpack_require__("./node_modules/lodash/toString.js"),idCounter=0;module.exports=function uniqueId(prefix){var id=++idCounter;return toString(prefix)+id}}}]);