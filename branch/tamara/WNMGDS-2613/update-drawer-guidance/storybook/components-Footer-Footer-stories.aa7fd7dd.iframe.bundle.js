/*! For license information please see components-Footer-Footer-stories.aa7fd7dd.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[8110],{"./packages/design-system/dist/react-components/esm/analytics/events.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{RW:()=>eventExtensionText,cD:()=>sendLinkEvent});const eventExtensionText="Design system integration",MAX_STRING_LENGTH=100;const MAX_RETRIES=3,TIMEOUT=300;function sendAnalytics(eventType,event){let retry=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;const utag=window.utag;if(utag&&utag[eventType]){!function clipStrings(event){for(const key in event){const value=event[key];"string"==typeof value&&(event[key]=value.substring(0,MAX_STRING_LENGTH))}return event}(event);try{utag[eventType](event)}catch(error){console.warn("Error sending analytics event: ",error)}}else++retry<=MAX_RETRIES&&setTimeout((()=>sendAnalytics(eventType,event,retry)),retry*TIMEOUT)}function sendLinkEvent(event){return sendAnalytics("link",event)}},"./packages/design-system/dist/react-components/esm/config.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{vc:()=>config});var _analytics__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/events.js");const DEFAULTS=Object.freeze({errorPlacementDefault:"top",defaultAnalyticsFunction:_analytics__WEBPACK_IMPORTED_MODULE_0__.cD,alertSendsAnalytics:!1,buttonSendsAnalytics:!1,dialogSendsAnalytics:!1,helpDrawerSendsAnalytics:!1,headerSendsAnalytics:!1,footerSendsAnalytics:!1,thirdPartyExternalLinkSendsAnalytics:!1}),HEALTHCARE_DEFAULTS={...DEFAULTS,errorPlacementDefault:"bottom",headerSendsAnalytics:!0,footerSendsAnalytics:!0,thirdPartyExternalLinkSendsAnalytics:!0},_config={...DEFAULTS};function config(incomingConfig){return Object.assign(_config,incomingConfig),_config}config.DEFAULTS=DEFAULTS,config.HEALTHCARE_DEFAULTS=HEALTHCARE_DEFAULTS;config().defaultAnalyticsFunction},"./packages/ds-healthcare-gov/src/components/Footer/Footer.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{$:()=>Footer,Z:()=>Footer_Footer});var PrivacySettingsLink=__webpack_require__("./packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx");const Footer_languages={zh:{label:"中文",href:"/language-resource/#chinese"},ht:{label:"Kreyòl",href:"/language-resource/#creole"},fr:{label:"Français",href:"/language-resource/#french"},de:{label:"Deutsch",href:"/language-resource/#german"},gu:{label:"ગુજરાતી",href:"/language-resource/#gujarati"},hi:{label:"हिंदी",href:"/language-resource/#hindi"},it:{label:"Italiano",href:"/language-resource/#italian"},ja:{label:"日本語",href:"/language-resource/#japanese"},ko:{label:"한국어",href:"/language-resource/#korean"},pl:{label:"Polski",href:"/language-resource/#polish"},pt:{label:"Português",href:"/language-resource/#portuguese"},ru:{label:"Русский",href:"/language-resource/#russian"},es:{label:"Español",href:"/language-resource/#spanish"},tl:{label:"Tagalog",href:"/language-resource/#tagalog"},vi:{label:"Tiếng Việt",href:"/language-resource/#vietnamese"}};var i18n=__webpack_require__("./packages/ds-healthcare-gov/src/components/i18n.ts"),events=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/events.js"),config=__webpack_require__("./packages/design-system/dist/react-components/esm/config.js");function sendFooterLinkEvent(linkText,linkUrl,heading){(0,config.vc)().footerSendsAnalytics&&(0,config.vc)().defaultAnalyticsFunction({event_name:"navigation_clicked",event_extension:events.RW,navigation_type:"footer",link_text:linkText,...linkUrl?{link_url:linkUrl}:{},...heading?{heading}:{}})}var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const InlineLinkLists=function(props){const{primaryDomain}=props,inlineLinksTop={"footer.contactUs":`${primaryDomain}/contact-us`,"footer.archive":`${primaryDomain}/archive`,"footer.a11y":"http://www.cms.gov/About-CMS/Agency-Information/Aboutwebsite/CMSNondiscriminationNotice.html","footer.privacySettings":(0,jsx_runtime.tZ)(PrivacySettingsLink.Z,{}),"footer.privacyPolicy":`${primaryDomain}/privacy`,"footer.usingThisSite":`${primaryDomain}/using-this-site`};return(0,jsx_runtime.BX)("div",{className:"ds-l-container",children:[(0,jsx_runtime.tZ)("div",{className:"hc-c-footer__site-links-row",children:(0,jsx_runtime.tZ)("ul",{role:"list",className:"hc-c-footer__list",children:Object.getOwnPropertyNames(inlineLinksTop).map((function(key,index){const entry=inlineLinksTop[key],isUrl="string"==typeof entry,linkText=(0,i18n.t)(key),isLastItem=index!==Object.getOwnPropertyNames(inlineLinksTop).length-1;return(0,jsx_runtime.BX)("li",{className:"hc-c-footer__inline-item",children:[isUrl?(0,jsx_runtime.tZ)("a",{href:entry,onClick:()=>sendFooterLinkEvent(linkText,entry),children:linkText}):entry,isLastItem?(0,jsx_runtime.tZ)("span",{"aria-hidden":"true",className:"hc-c-footer__delimiter"}):null]},key)}))})}),(0,jsx_runtime.BX)("div",{className:"hc-c-footer__language-resource-links-row",children:[(0,jsx_runtime.tZ)("p",{id:"hc-c-footer__language-resources",className:"ds-u-visibility--screen-reader",children:"Language resources"}),(0,jsx_runtime.tZ)("ul",{role:"list","aria-labelledby":"hc-c-footer__language-resources",className:"hc-c-footer__list",children:Object.getOwnPropertyNames(Footer_languages).map((function(lang){const linkUrl=primaryDomain+Footer_languages[lang].href,linkText=Footer_languages[lang].label;return(0,jsx_runtime.tZ)("li",{className:"hc-c-footer__inline-item",onClick:()=>sendFooterLinkEvent(linkText,linkUrl,"Language resources"),children:(0,jsx_runtime.tZ)("a",{lang,href:linkUrl,children:linkText})},lang)}))})]})]})};InlineLinkLists.defaultProps={primaryDomain:""};const Footer_InlineLinkLists=InlineLinkLists;try{InlineLinkLists.displayName="InlineLinkLists",InlineLinkLists.__docgenInfo={description:"Inline link lists are always rendered in the footer, no matter\nwhat type of page a user is looking at. It includes required\nlinks, like the Privacy Policy, and other helpful things like\nlinks to a variety of different languages.",displayName:"InlineLinkLists",props:{primaryDomain:{defaultValue:{value:""},description:"",name:"primaryDomain",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/InlineLinkLists.tsx#InlineLinkLists"]={docgenInfo:InlineLinkLists.__docgenInfo,name:"InlineLinkLists",path:"packages/ds-healthcare-gov/src/components/Footer/InlineLinkLists.tsx#InlineLinkLists"})}catch(__react_docgen_typescript_loader_error){}var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),esm_i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");const Logo=props=>{const style={};props.width&&(style.width=props.width);const linkText="es"===(0,esm_i18n.G3)()?"CuidadoDeSalud.gov":"HealthCare.gov";return(0,jsx_runtime.tZ)("a",{className:classnames_default()("hc-c-footer__logo ds-u-display--inline-block",props.className),href:props.href,style,onClick:()=>sendFooterLinkEvent(linkText,props.href),children:props.children})},Footer_Logo=Logo;try{Logo.displayName="Logo",Logo.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/logos/healthcare-logo/).",displayName:"Logo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},href:{defaultValue:null,description:"",name:"href",required:!0,type:{name:"string"}},width:{defaultValue:null,description:"",name:"width",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"packages/ds-healthcare-gov/src/components/Footer/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}var Logo_Logo=__webpack_require__("./packages/ds-healthcare-gov/src/components/Logo/Logo.tsx");const LogosRow=function(props){return(0,jsx_runtime.tZ)("div",{className:"ds-l-container",children:(0,jsx_runtime.BX)("div",{className:"hc-c-footer__logo-row",children:[(0,jsx_runtime.tZ)(Footer_Logo,{href:"es"===(0,esm_i18n.G3)()?"https://www.cuidadodesalud.gov":"https://www.healthcare.gov",children:(0,jsx_runtime.tZ)(Logo_Logo.Z,{titleId:"hc-c-footer__logo-title",className:props.logoClassName??""})}),(0,jsx_runtime.BX)("div",{className:"hc-c-footer__disclaimer",children:["en"===(0,esm_i18n.G3)()&&(0,jsx_runtime.BX)("p",{children:["Health Insurance Marketplace",(0,jsx_runtime.tZ)("sup",{children:"®"})," is a registered trademark of the Department of Health & Human Services."]}),(0,jsx_runtime.tZ)("p",{dangerouslySetInnerHTML:{__html:(0,i18n.t)("footer.disclaimer")}})]})]})})},Footer_LogosRow=LogosRow;try{LogosRow.displayName="LogosRow",LogosRow.__docgenInfo={description:"",displayName:"LogosRow",props:{logoClassName:{defaultValue:null,description:"",name:"logoClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/LogosRow.tsx#LogosRow"]={docgenInfo:LogosRow.__docgenInfo,name:"LogosRow",path:"packages/ds-healthcare-gov/src/components/Footer/LogosRow.tsx#LogosRow"})}catch(__react_docgen_typescript_loader_error){}const Footer=props=>{const classes=classnames_default()("hc-c-footer",props.className);return(0,jsx_runtime.BX)("footer",{className:classes,role:"contentinfo",children:[props.footerTop,(0,jsx_runtime.tZ)(Footer_InlineLinkLists,{primaryDomain:props.primaryDomain}),(0,jsx_runtime.tZ)(Footer_LogosRow,{logoClassName:props.logoClassName})]})},Footer_Footer=Footer;try{Footer.displayName="Footer",Footer.__docgenInfo={description:"For information about how and when to use this component,\n[refer to its full documentation page](https://design.cms.gov/components/footer/healthcare-footer/?theme=healthcare).",displayName:"Footer",props:{className:{defaultValue:null,description:"Additional classes to be added to the root `<footer>` element.",name:"className",required:!1,type:{name:"string"}},primaryDomain:{defaultValue:null,description:"The primary, or root domain where the majority of footer links should be\nhosted.  By default, links render with relative paths, but providing this\nprop will force all links to render with absolute paths based on the\nprovided string. The string should include the protocol (`http://` or\n`https://`) and the domain only, with no trailing slash. For example, if\nthe provided string is `https://test.healthcare.gov`, the topics link will\nrender as `https://test.healthcare.gov/topics` instead of just `/topics`.\nNote that this is only really necessary if your application is hosted on a\nsubdomain, such as `https://localhelp.healthcare.gov`, where relative links\nwould direct the user to the wrong location, e.g. the link to `/topics`\nwould incorrectly direct the user to\n`https://localhelp.healthcare.gov/topics` when it should direct the user to\n`https://healthcare.gov/topics`.",name:"primaryDomain",required:!1,type:{name:"string"}},footerTop:{defaultValue:null,description:"Element to be added to display content for top footer section changes",name:"footerTop",required:!1,type:{name:"ReactNode"}},logoClassName:{defaultValue:null,description:"CSS classes to apply to the logo element",name:"logoClassName",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/Footer.tsx#Footer"]={docgenInfo:Footer.__docgenInfo,name:"Footer",path:"packages/ds-healthcare-gov/src/components/Footer/Footer.tsx#Footer"})}catch(__react_docgen_typescript_loader_error){}},"./packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});var _cmsgov_design_system__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js"),_i18n__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./packages/ds-healthcare-gov/src/components/i18n.ts"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const PrivacySettingsLink=props=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)("button",{className:props.className,onClick:()=>window.utag?.gdpr?.showConsentPreferences((0,_cmsgov_design_system__WEBPACK_IMPORTED_MODULE_2__.G3)()),children:props.children||(0,_i18n__WEBPACK_IMPORTED_MODULE_0__.t)("footer.privacySettings")}),__WEBPACK_DEFAULT_EXPORT__=PrivacySettingsLink;try{PrivacySettingsLink.displayName="PrivacySettingsLink",PrivacySettingsLink.__docgenInfo={description:"",displayName:"PrivacySettingsLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx#PrivacySettingsLink"]={docgenInfo:PrivacySettingsLink.__docgenInfo,name:"PrivacySettingsLink",path:"packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx#PrivacySettingsLink"})}catch(__react_docgen_typescript_loader_error){}},"./packages/ds-healthcare-gov/src/components/Logo/Logo.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Logo_Logo});var classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const LogoEnSvg=_ref=>{let{titleId}=_ref;return(0,jsx_runtime.BX)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"200",height:"25",viewBox:"0 0 253.05 31.65","aria-labelledby":titleId,role:"img",children:[(0,jsx_runtime.tZ)("title",{id:titleId,children:"HealthCare.gov"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M0,.61H4.68V9.75H15.74V.61H20.4V24.85H15.74V14.22H4.67V24.85H0Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M41.41,17.18H27a4.8,4.8,0,0,0,1.67,3,5.25,5.25,0,0,0,3.47,1.13,6,6,0,0,0,4.33-1.76l3.79,1.78a8.92,8.92,0,0,1-3.39,3,10.56,10.56,0,0,1-4.69,1,9.25,9.25,0,0,1-6.87-2.66A9.06,9.06,0,0,1,22.62,16,9.35,9.35,0,0,1,25.26,9.2a8.89,8.89,0,0,1,6.63-2.71A9.21,9.21,0,0,1,38.77,9.2a9.78,9.78,0,0,1,2.65,7.16Zm-4.5-3.54a4.51,4.51,0,0,0-1.76-2.44,5.13,5.13,0,0,0-3-.94,5.41,5.41,0,0,0-3.3,1.05,5.88,5.88,0,0,0-1.65,2.32Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M57.28,6.92h4.5V24.85h-4.5V23a8.66,8.66,0,0,1-2.64,1.8,7.44,7.44,0,0,1-2.87.55,8,8,0,0,1-6-2.69,9.39,9.39,0,0,1-2.53-6.7,9.61,9.61,0,0,1,2.45-6.8,7.81,7.81,0,0,1,6-2.65,7.56,7.56,0,0,1,3,.61,8.26,8.26,0,0,1,2.59,1.78Zm-4.73,3.69a4.55,4.55,0,0,0-3.46,1.47,5.9,5.9,0,0,0,0,7.6,4.54,4.54,0,0,0,3.46,1.5,4.62,4.62,0,0,0,3.51-1.47,5.4,5.4,0,0,0,1.42-3.86,5.26,5.26,0,0,0-1.4-3.79,4.67,4.67,0,0,0-3.52-1.45Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M65,0h4.48V24.85H65Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M80.61,21.21a10.17,10.17,0,0,0,3-.48v2.48a6,6,0,0,1-4,1.71c-3.72,0-5.32-2.19-5.32-4.69V10.78H72V6.91h2.31V2.29h4.5V6.91h4.9v3.87h-4.9v7.63C78.79,20,78.93,21.21,80.61,21.21Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M86.77,0h4.46V8.73A10.28,10.28,0,0,1,93.88,7a6.78,6.78,0,0,1,2.7-.57,6.06,6.06,0,0,1,4.5,1.85A6.47,6.47,0,0,1,102.64,13V24.85H98.21V17a19.9,19.9,0,0,0-.3-4.22,2.93,2.93,0,0,0-1-1.65,2.87,2.87,0,0,0-1.77-.54,3.31,3.31,0,0,0-2.35.91A4.84,4.84,0,0,0,91.43,14a19.82,19.82,0,0,0-.2,3.69v7.2H86.77Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M129.77,4.85l-3.23,3.07a10,10,0,0,0-7.4-3.48,8.11,8.11,0,0,0-8.23,8v.24a8.61,8.61,0,0,0,1,4.3,7.47,7.47,0,0,0,3,3A8.64,8.64,0,0,0,119.24,21a8.77,8.77,0,0,0,3.67-.75,13,13,0,0,0,3.65-2.73l3.13,3.26a17.06,17.06,0,0,1-5.07,3.63,13.73,13.73,0,0,1-5.45,1,12.56,12.56,0,0,1-9.25-3.58,12.38,12.38,0,0,1-3.6-9.18A12.63,12.63,0,0,1,108,6.25a12.18,12.18,0,0,1,4.7-4.53A13.32,13.32,0,0,1,119.24,0,14,14,0,0,1,129.77,4.85Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M145,6.92h4.49V24.85H145V23a8.66,8.66,0,0,1-2.64,1.8,7.44,7.44,0,0,1-2.87.55,8,8,0,0,1-6-2.69,9.39,9.39,0,0,1-2.53-6.7,9.61,9.61,0,0,1,2.45-6.8,7.81,7.81,0,0,1,6-2.65,7.56,7.56,0,0,1,3,.61,8.37,8.37,0,0,1,2.62,1.83Zm-4.73,3.69a4.55,4.55,0,0,0-3.46,1.47,5.33,5.33,0,0,0-1.37,3.77,5.37,5.37,0,0,0,1.4,3.82,4.54,4.54,0,0,0,3.46,1.5,4.65,4.65,0,0,0,3.51-1.47,5.42,5.42,0,0,0,1.39-3.86,5.25,5.25,0,0,0-1.39-3.79,4.69,4.69,0,0,0-3.53-1.44Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M152.7,6.92h3.86v3.79a8.62,8.62,0,0,1,2.91-3.45c2.23-1.32,4.59.47,4.59.47v3.74a5.49,5.49,0,0,0-4.58.38c-1.54,1-2.31,2.71-2.31,5.21v7.79H152.7Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M183.82,17.18H169.38a4.8,4.8,0,0,0,1.67,3,5.21,5.21,0,0,0,3.43,1.17,6,6,0,0,0,4.33-1.76l3.79,1.78a8.92,8.92,0,0,1-3.39,3,10.6,10.6,0,0,1-4.7,1,9.25,9.25,0,0,1-6.87-2.66A9.06,9.06,0,0,1,165,16.05a9.34,9.34,0,0,1,2.65-6.81,8.89,8.89,0,0,1,6.63-2.71,9.21,9.21,0,0,1,6.89,2.71,9.82,9.82,0,0,1,2.65,7.16Zm-4.5-3.54a4.51,4.51,0,0,0-1.76-2.44,5.13,5.13,0,0,0-3-.94,5.41,5.41,0,0,0-3.3,1.05,5.88,5.88,0,0,0-1.65,2.32Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__gov",d:"M189.37,25.08a1.73,1.73,0,0,1-1.29-.54,1.85,1.85,0,0,1,0-2.61,1.82,1.82,0,0,1,2.57,0h0a1.85,1.85,0,0,1,0,2.61,1.73,1.73,0,0,1-1.29.54Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__gov",d:"M204.74,31.64a12.27,12.27,0,0,1-4.08-.64,8.12,8.12,0,0,1-2.92-1.71,10.05,10.05,0,0,1-2-2.87h2.07A6.88,6.88,0,0,0,200.52,29a8.79,8.79,0,0,0,4.1.88,8.6,8.6,0,0,0,4.08-.9,5.58,5.58,0,0,0,2.4-2.29,9.94,9.94,0,0,0,.72-4.38V20.85l-.36.45a8.51,8.51,0,0,1-3.11,2.47,9.26,9.26,0,0,1-8.46-.34,8.51,8.51,0,0,1-3.29-3.23,8.94,8.94,0,0,1-1.16-4.46,9.13,9.13,0,0,1,9.07-9.09,8.39,8.39,0,0,1,3.66.81,10.31,10.31,0,0,1,3.29,2.69l.35.41V7.11h1.91V21.19a17,17,0,0,1-.65,5.45A7,7,0,0,1,210,30.35a10.24,10.24,0,0,1-5.28,1.3Zm.08-23.18a7.52,7.52,0,0,0-3.73,1,7.07,7.07,0,0,0-2.71,2.69,7.45,7.45,0,0,0-1,3.71,6.75,6.75,0,0,0,2,5,8,8,0,0,0,10.51,0,7,7,0,0,0,2-5.16A7.51,7.51,0,0,0,211,12a6.72,6.72,0,0,0-2.59-2.59,7.24,7.24,0,0,0-3.61-1Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__gov",d:"M226.65,25.08a8.66,8.66,0,0,1-6.6-2.74,9.41,9.41,0,0,1-.14-12.75,9.16,9.16,0,0,1,12.94-.51c.18.17.35.33.51.51a9.41,9.41,0,0,1-.14,12.77,8.6,8.6,0,0,1-6.58,2.74Zm0-16.58a6.86,6.86,0,0,0-5.09,2.19A7.34,7.34,0,0,0,219.44,16a7.56,7.56,0,0,0,1,3.72,6.93,6.93,0,0,0,2.62,2.67,7.41,7.41,0,0,0,7.24,0,6.93,6.93,0,0,0,2.62-2.67,7.56,7.56,0,0,0,1-3.72,7.33,7.33,0,0,0-2.13-5.28,6.87,6.87,0,0,0-5.07-2.19Z"}),(0,jsx_runtime.tZ)("polygon",{className:"hc-c-logo__gov",points:"245.03 24.61 244.86 24.61 236.79 7.09 238.8 7.09 244.76 20.04 244.95 20.43 245.13 20.04 251.02 7.09 253.05 7.09 245.03 24.61 245.03 24.61"})]})};LogoEnSvg.defaultProps={titleId:"hc-c-logo__title"};const Logo_LogoEnSvg=LogoEnSvg;try{LogoEnSvg.displayName="LogoEnSvg",LogoEnSvg.__docgenInfo={description:"",displayName:"LogoEnSvg",props:{titleId:{defaultValue:{value:"hc-c-logo__title"},description:"",name:"titleId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Logo/LogoEnSvg.tsx#LogoEnSvg"]={docgenInfo:LogoEnSvg.__docgenInfo,name:"LogoEnSvg",path:"packages/ds-healthcare-gov/src/components/Logo/LogoEnSvg.tsx#LogoEnSvg"})}catch(__react_docgen_typescript_loader_error){}const LogoEsSvg=_ref=>{let{titleId}=_ref;return(0,jsx_runtime.BX)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"237",height:"25",viewBox:"0 0 313.54 31.74","aria-labelledby":titleId,role:"img",children:[(0,jsx_runtime.tZ)("title",{id:titleId,children:"CuidadoDeSalud.gov"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M23,5.21l-3.15,3a9.78,9.78,0,0,0-7.25-3.4,7.94,7.94,0,0,0-8,8,8.44,8.44,0,0,0,1,4.21A7.42,7.42,0,0,0,8.46,20,8.42,8.42,0,0,0,12.64,21a8.6,8.6,0,0,0,3.59-.73,12.84,12.84,0,0,0,3.58-2.67l3.05,3.19a16.68,16.68,0,0,1-5,3.55,13.37,13.37,0,0,1-5.33,1,12.27,12.27,0,0,1-9-3.51,12.12,12.12,0,0,1-3.52-9,12.3,12.3,0,0,1,1.6-6.3A11.83,11.83,0,0,1,6.2,2.13,12.89,12.89,0,0,1,12.63.45a13.39,13.39,0,0,1,5.65,1.24A13.58,13.58,0,0,1,23,5.21Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M24.76,7.22h4.45v8.44a11.57,11.57,0,0,0,.34,3.43,3,3,0,0,0,1.09,1.49,3.13,3.13,0,0,0,1.85.53,3.21,3.21,0,0,0,1.86-.53,3.06,3.06,0,0,0,1.14-1.53,11.92,11.92,0,0,0,.28-3.24V7.22h4.39v7.43a18.33,18.33,0,0,1-.72,6.28,6.85,6.85,0,0,1-2.61,3.17,8,8,0,0,1-4.38,1.1,7.78,7.78,0,0,1-4.67-1.29,6.78,6.78,0,0,1-2.5-3.59,21.45,21.45,0,0,1-.52-5.8Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M44.65,0a2.68,2.68,0,0,1,2,.84,2.78,2.78,0,0,1,.83,2,2.76,2.76,0,0,1-.82,2,2.64,2.64,0,0,1-2,.83,2.7,2.7,0,0,1-2-.84,2.85,2.85,0,0,1-.83-2.06,2.7,2.7,0,0,1,.82-2A2.68,2.68,0,0,1,44.65,0Zm-2.2,7.22h4.39V24.75H42.45Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M62.13.45h4.4v24.3h-4.4V22.9a8.78,8.78,0,0,1-2.58,1.76,7.25,7.25,0,0,1-2.81.54,7.83,7.83,0,0,1-5.88-2.63A9.21,9.21,0,0,1,48.38,16a9.42,9.42,0,0,1,2.4-6.66,7.64,7.64,0,0,1,5.83-2.59,7.52,7.52,0,0,1,3,.59,8.2,8.2,0,0,1,2.56,1.79ZM57.51,10.83a4.45,4.45,0,0,0-3.39,1.44A5.19,5.19,0,0,0,52.77,16a5.29,5.29,0,0,0,1.37,3.74,4.47,4.47,0,0,0,3.38,1.46A4.54,4.54,0,0,0,61,19.73,5.27,5.27,0,0,0,62.32,16,5.1,5.1,0,0,0,61,12.25,4.57,4.57,0,0,0,57.51,10.83Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M82.26,7.22h4.4V24.75h-4.4V22.9a8.66,8.66,0,0,1-2.58,1.76,7.22,7.22,0,0,1-2.81.54A7.81,7.81,0,0,1,71,22.57,9.21,9.21,0,0,1,68.52,16a9.42,9.42,0,0,1,2.4-6.66,7.81,7.81,0,0,1,8.79-2,8.17,8.17,0,0,1,2.55,1.79Zm-4.62,3.61a4.45,4.45,0,0,0-3.39,1.44A5.19,5.19,0,0,0,72.9,16a5.25,5.25,0,0,0,1.38,3.74,4.46,4.46,0,0,0,3.38,1.46,4.52,4.52,0,0,0,3.43-1.44A5.27,5.27,0,0,0,82.46,16a5.11,5.11,0,0,0-1.37-3.7A4.57,4.57,0,0,0,77.64,10.83Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M102.4.45h4.4v24.3h-4.4V22.9a8.78,8.78,0,0,1-2.58,1.76A7.25,7.25,0,0,1,97,25.2a7.83,7.83,0,0,1-5.88-2.63A9.2,9.2,0,0,1,88.66,16a9.42,9.42,0,0,1,2.39-6.66,7.64,7.64,0,0,1,5.83-2.59,7.52,7.52,0,0,1,3,.59,8.2,8.2,0,0,1,2.56,1.79ZM97.78,10.83a4.45,4.45,0,0,0-3.39,1.44A5.19,5.19,0,0,0,93,16a5.29,5.29,0,0,0,1.37,3.74,4.47,4.47,0,0,0,3.38,1.46,4.54,4.54,0,0,0,3.44-1.44A5.27,5.27,0,0,0,102.59,16a5.1,5.1,0,0,0-1.36-3.7A4.57,4.57,0,0,0,97.78,10.83Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__health",d:"M117.83,6.77A9.24,9.24,0,0,1,122.49,8a9.12,9.12,0,0,1,4.64,8,9.23,9.23,0,0,1-1.23,4.64A9,9,0,0,1,122.54,24a9.22,9.22,0,0,1-4.69,1.22,8.74,8.74,0,0,1-6.44-2.68A8.9,8.9,0,0,1,108.74,16a8.88,8.88,0,0,1,3-6.85A8.78,8.78,0,0,1,117.83,6.77Zm.07,4.14a4.53,4.53,0,0,0-3.41,1.42A5.09,5.09,0,0,0,113.12,16a5.15,5.15,0,0,0,1.35,3.71,4.82,4.82,0,0,0,6.85,0A5.08,5.08,0,0,0,122.7,16a5.07,5.07,0,0,0-1.35-3.66A4.57,4.57,0,0,0,117.9,10.91Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M129.57,1.05h5.35c3.44,0,6,.42,7.67,1.28a9.93,9.93,0,0,1,4.14,4.16,13.45,13.45,0,0,1,1.63,6.74,13.44,13.44,0,0,1-.91,5,10.51,10.51,0,0,1-2.51,3.82,9.07,9.07,0,0,1-3.47,2.09,24.57,24.57,0,0,1-6.47.58h-5.43Zm4.48,4.35v15h2.09a10.53,10.53,0,0,0,4.49-.71,5.35,5.35,0,0,0,2.28-2.39,8.73,8.73,0,0,0,.89-4.13,7.88,7.88,0,0,0-2.11-5.85q-1.91-1.87-6.11-1.87Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M168.09,17.26H154a4.73,4.73,0,0,0,1.63,3,5.13,5.13,0,0,0,3.4,1.1,5.84,5.84,0,0,0,4.23-1.72l3.71,1.74a8.74,8.74,0,0,1-3.32,2.91,10.36,10.36,0,0,1-4.59.94,9.1,9.1,0,0,1-6.72-2.6,8.86,8.86,0,0,1-2.59-6.52,9.17,9.17,0,0,1,2.58-6.66,8.69,8.69,0,0,1,6.49-2.65,9,9,0,0,1,6.73,2.65,9.58,9.58,0,0,1,2.6,7Zm-4.4-3.47A4.4,4.4,0,0,0,162,11.41a5,5,0,0,0-3-.92,5.23,5.23,0,0,0-3.22,1,5.84,5.84,0,0,0-1.62,2.27Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M182.92,4.27l-3.34,3Q177.83,4.78,176,4.77a2.15,2.15,0,0,0-1.45.48A1.36,1.36,0,0,0,174,6.32a1.82,1.82,0,0,0,.41,1.12,29,29,0,0,0,3.3,3.05c1.73,1.44,2.77,2.35,3.14,2.72a9.6,9.6,0,0,1,1.94,2.65,6.7,6.7,0,0,1,.57,2.77,6.32,6.32,0,0,1-2,4.81,7.36,7.36,0,0,1-5.26,1.91,7.86,7.86,0,0,1-4.41-1.24,9.76,9.76,0,0,1-3.22-3.9l3.79-2.29q1.71,3.13,3.94,3.14a2.91,2.91,0,0,0,2-.68,2,2,0,0,0,.79-1.56,2.69,2.69,0,0,0-.6-1.61,16.6,16.6,0,0,0-2.63-2.47,26.44,26.44,0,0,1-5-4.87,6.22,6.22,0,0,1-1.13-3.42,5.59,5.59,0,0,1,1.88-4.23A6.51,6.51,0,0,1,176.07.45a7.43,7.43,0,0,1,3.38.82A12.25,12.25,0,0,1,182.92,4.27Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M198.45,7.22h4.4V24.75h-4.4V22.9a8.78,8.78,0,0,1-2.58,1.76,7.25,7.25,0,0,1-2.81.54,7.81,7.81,0,0,1-5.87-2.63A9.17,9.17,0,0,1,184.71,16a9.46,9.46,0,0,1,2.39-6.66,7.65,7.65,0,0,1,5.83-2.59,7.52,7.52,0,0,1,3,.59,8.2,8.2,0,0,1,2.56,1.79Zm-4.62,3.61a4.45,4.45,0,0,0-3.39,1.44,5.19,5.19,0,0,0-1.35,3.7,5.29,5.29,0,0,0,1.37,3.74,4.47,4.47,0,0,0,3.38,1.46,4.54,4.54,0,0,0,3.44-1.44A5.27,5.27,0,0,0,198.64,16a5.1,5.1,0,0,0-1.36-3.7A4.57,4.57,0,0,0,193.83,10.83Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M205.16.45h4.4v24.3h-4.4Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M211.89,7.22h4.45v8.44a11.57,11.57,0,0,0,.34,3.43,3,3,0,0,0,1.09,1.49,3.16,3.16,0,0,0,1.85.53,3.21,3.21,0,0,0,1.86-.53,3,3,0,0,0,1.14-1.53,11.51,11.51,0,0,0,.28-3.24V7.22h4.4v7.43q0,4.59-.73,6.28A6.85,6.85,0,0,1,224,24.1a8,8,0,0,1-4.38,1.1,7.8,7.8,0,0,1-4.67-1.29,6.84,6.84,0,0,1-2.5-3.59,21.45,21.45,0,0,1-.52-5.8Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__care",d:"M243,.45h4.4v24.3H243V22.9a8.78,8.78,0,0,1-2.58,1.76,7.25,7.25,0,0,1-2.81.54,7.85,7.85,0,0,1-5.88-2.63A9.2,9.2,0,0,1,229.26,16a9.46,9.46,0,0,1,2.39-6.66,7.64,7.64,0,0,1,5.83-2.59,7.52,7.52,0,0,1,3,.59A8.2,8.2,0,0,1,243,9.15Zm-4.62,10.38A4.45,4.45,0,0,0,235,12.27a5.19,5.19,0,0,0-1.35,3.7A5.29,5.29,0,0,0,235,19.71a4.47,4.47,0,0,0,3.38,1.46,4.54,4.54,0,0,0,3.44-1.44A5.27,5.27,0,0,0,243.19,16a5.1,5.1,0,0,0-1.36-3.7A4.57,4.57,0,0,0,238.38,10.83Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__gov",d:"M253,21.21a2,2,0,0,1,2,2,2,2,0,0,1-2,2,1.89,1.89,0,0,1-1.4-.59A1.92,1.92,0,0,1,251,23.2a2,2,0,0,1,2-2Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__gov",d:"M273.09,7.22h2.25v14a16.53,16.53,0,0,1-.64,5.4,7,7,0,0,1-3.08,3.72,10.12,10.12,0,0,1-5.27,1.3A12.21,12.21,0,0,1,262.3,31a8.07,8.07,0,0,1-2.92-1.72,9.88,9.88,0,0,1-2.08-3.14h2.45a6.4,6.4,0,0,0,2.58,2.58,8.27,8.27,0,0,0,3.92.84,8.1,8.1,0,0,0,3.89-.86,5.35,5.35,0,0,0,2.27-2.16,9.67,9.67,0,0,0,.68-4.2v-.91A8.6,8.6,0,0,1,270,23.89a9.27,9.27,0,0,1-8.46-.34,8.58,8.58,0,0,1-3.29-3.23,8.86,8.86,0,0,1-1.16-4.46,9.12,9.12,0,0,1,9.07-9.09,8.45,8.45,0,0,1,3.67.81,10.26,10.26,0,0,1,3.28,2.68Zm-6.66,1.72a7.11,7.11,0,0,0-3.56.93,6.82,6.82,0,0,0-2.58,2.56,7,7,0,0,0-.93,3.54,6.38,6.38,0,0,0,1.93,4.77,6.9,6.9,0,0,0,5,1.88,6.8,6.8,0,0,0,5-1.87,6.59,6.59,0,0,0,1.89-4.91,7.14,7.14,0,0,0-.87-3.54,6.37,6.37,0,0,0-2.46-2.45A6.81,6.81,0,0,0,266.43,8.94Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__gov",d:"M286.83,6.77a8.68,8.68,0,0,1,6.71,2.93A9.13,9.13,0,0,1,296,16a9.1,9.1,0,0,1-2.56,6.42,9.26,9.26,0,0,1-13.17,0A9.14,9.14,0,0,1,277.67,16a9.06,9.06,0,0,1,2.43-6.31A8.64,8.64,0,0,1,286.83,6.77Zm0,2.21A6.53,6.53,0,0,0,282,11.05a7,7,0,0,0-2,5,7.2,7.2,0,0,0,.92,3.55,6.58,6.58,0,0,0,2.49,2.53,7,7,0,0,0,6.89,0,6.45,6.45,0,0,0,2.49-2.53,7.09,7.09,0,0,0,.92-3.55,7,7,0,0,0-2-5A6.56,6.56,0,0,0,286.82,9Z"}),(0,jsx_runtime.tZ)("path",{className:"hc-c-logo__gov",d:"M296.83,7.22h2.4L305.11,20l5.82-12.78h2.41l-8,17.53h-.42Z"})]})};LogoEsSvg.defaultProps={titleId:"hc-c-logo__title"};const Logo_LogoEsSvg=LogoEsSvg;try{LogoEsSvg.displayName="LogoEsSvg",LogoEsSvg.__docgenInfo={description:"",displayName:"LogoEsSvg",props:{titleId:{defaultValue:{value:"hc-c-logo__title"},description:"",name:"titleId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Logo/LogoEsSvg.tsx#LogoEsSvg"]={docgenInfo:LogoEsSvg.__docgenInfo,name:"LogoEsSvg",path:"packages/ds-healthcare-gov/src/components/Logo/LogoEsSvg.tsx#LogoEsSvg"})}catch(__react_docgen_typescript_loader_error){}var i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");function Logo(props){return(0,jsx_runtime.tZ)("span",{className:classnames_default()("hc-c-logo",props.className),children:"es"===(0,i18n.G3)()?(0,jsx_runtime.tZ)(Logo_LogoEsSvg,{titleId:props.titleId}):(0,jsx_runtime.tZ)(Logo_LogoEnSvg,{titleId:props.titleId})})}const Logo_Logo=Logo;try{Logo.displayName="Logo",Logo.__docgenInfo={description:"",displayName:"Logo",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},titleId:{defaultValue:null,description:"",name:"titleId",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Logo/Logo.tsx#Logo"]={docgenInfo:Logo.__docgenInfo,name:"Logo",path:"packages/ds-healthcare-gov/src/components/Logo/Logo.tsx#Logo"})}catch(__react_docgen_typescript_loader_error){}},"./packages/ds-healthcare-gov/src/components/i18n.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{jb:()=>i18n.jb,t:()=>i18n.t});const en_namespaceObject=JSON.parse('{"footer":{"contactUs":"Contact us","archive":"Archive","a11y":"Accessibility","privacyPolicy":"Privacy policy","privacySettings":"Privacy settings","usingThisSite":"Using this site","disclaimer":"An official website of the U.S. Centers for Medicare &amp; Medicaid Services."},"header":{"close":"Close","closeMenu":"Close menu","deBrokerNameFallback":"the enrollment partner","deConsumerMessage":"Be sure to finish your application before you return to {{brokerName}}\'s website.","español":"Español","langAriaLabel":"CuidadoDeSalud.gov en Español","login":"Log in","logout":"Log out","menu":"Menu","myApplicationsAndCoverage":"My applications & coverage","myProfile":"My profile","openMenu":"Open menu","skipNav":"Skip to main content"}}'),es_namespaceObject=JSON.parse('{"footer":{"contactUs":"Contáctenos","archive":"Archivo","a11y":"Accesibilidad","privacyPolicy":"Política de privacidad","privacySettings":"Configuración de privacidad","usingThisSite":"Usando este sitio","disclaimer":"Un sitio oficial de los Centros de Servicios de Medicare y Medicaid de EE.UU."},"header":{"close":"Cerca","closeMenu":"Cerrar menú","deBrokerNameFallback":"el socio de inscripción","deConsumerMessage":"Asegúrese de terminar su solicitud antes de regresar a la página web de {{brokerName}}","english":"English","langAriaLabel":"Healthcare.gov in English","login":"Iniciar sesión","logout":"Finalizar sesión","menu":"Menú","myApplicationsAndCoverage":"Mis solicitudes & cobertura","myProfile":"Mi perfil","openMenu":"Abrir menú","skipNav":"Ir al contenido principal"}}');var i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");(0,i18n.hk)("en",en_namespaceObject),(0,i18n.hk)("es",es_namespaceObject)},"./packages/ds-healthcare-gov/src/components/Footer/Footer.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{BasicFooter:()=>BasicFooter,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={title:"Healthcare/Footer",component:__webpack_require__("./packages/ds-healthcare-gov/src/components/Footer/Footer.tsx").Z,args:{className:""},parameters:{theme:"healthcare"}},BasicFooter={};BasicFooter.parameters={...BasicFooter.parameters,docs:{...BasicFooter.parameters?.docs,source:{originalSource:"{}",...BasicFooter.parameters?.docs?.source}}};const __namedExportsOrder=["BasicFooter"]},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);