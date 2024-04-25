/*! For license information please see 2626.1ece5f78.iframe.bundle.js.LICENSE.txt */
(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[2626],{"./packages/design-system/src/components/web-components/preactement/define.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{O:()=>define_define});var preact_module=__webpack_require__("./node_modules/preact/dist/preact.module.js"),ErrorTypes=function(ErrorTypes){return ErrorTypes.Promise="Error: Promises cannot be used for SSR",ErrorTypes.Missing="Error: Cannot find component in provided function",ErrorTypes.Json="Error: Invalid JSON string passed to component",ErrorTypes.Tag="Error: Invalid tag name for custom element. Must include a `-`",ErrorTypes}(ErrorTypes||{});const isPromise=input=>input&&"function"==typeof input.then,selfClosingTags=["area","base","br","col","hr","img","input","link","meta","source","embed","param","track","wbr"];function parseJson(value){const{tagName}=this,{formatProps}=this.__options;let result={};try{result=JSON.parse(value)}catch{console.error(ErrorTypes.Json,`: <${tagName.toLowerCase()}>`)}return formatProps&&(result=formatProps(result)),result}function getAttributeObject(attributes){const result={};if(!attributes?.length)return result;for(let i=attributes.length-1;i>=0;i--){const item=attributes[i];result[item.name]=item.value}return result}function getPropKey(value){const sanitised=value.trim().replace(/[\s_]/g,"-");return sanitised.charAt(0).toLowerCase()+sanitised.slice(1).replace(/-([a-z])/g,(_ref=>{let{1:value}=_ref;return value.toUpperCase()}))}function getAsyncComponent(component,tagName){return component.then((response=>function getComponentResult(response,tagName){let result;if("function"==typeof response)return response;"object"==typeof response&&(result=response[function getNameFromTag(value){return(value=value.toLowerCase()).replace(/(^\w|-\w)/g,(item=>item.replace(/-/,"").toUpperCase()))}(tagName)]||void 0);return result}(response,tagName)))}function getElementAttributes(){const{attributes=[]}=this.__options,result={};return this.hasAttributes()?function getAttributeProps(attributes,allowed){const values=getAttributeObject(attributes);let result={};for(const key of Object.keys(values))-1!==allowed?.indexOf(key)&&(result[getPropKey(key)]=values[key]);return result}(this.attributes,attributes):result}function nodeToPreactVNode(node){let slots=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},insideNestedComponent=arguments.length>2&&void 0!==arguments[2]&&arguments[2];if(3===node.nodeType)return{vnode:node.textContent||"",slots};if(1!==node.nodeType)return{vnode:null,slots};const nodeName=String(node.nodeName).toLowerCase();if("template"===nodeName){const templateProps={dangerouslySetInnerHTML:{__html:node.innerHTML}};return{vnode:(0,preact_module.h)(nodeName,templateProps),slots}}nodeName.includes("-")&&(insideNestedComponent=!0);const childNodes=Array.from(node.childNodes),children=[];for(const childNode of childNodes){const{vnode,slots:childSlots}=nodeToPreactVNode(childNode,slots,insideNestedComponent);Object.assign(slots,childSlots),children.push(vnode)}const{slot,...props}=getAttributeObject(node.attributes);return"script"===nodeName?{vnode:null,slots}:"body"===nodeName?{vnode:(0,preact_module.h)(preact_module.HY,{},children),slots}:selfClosingTags.includes(nodeName)?{vnode:(0,preact_module.h)(nodeName,props),slots}:slot?insideNestedComponent?{vnode:(0,preact_module.h)(nodeName,{slot,...props},children),slots}:{vnode:null,slots:{...slots,[getPropKey(slot)]:getSlotChildren(children)}}:{vnode:(0,preact_module.h)(nodeName,props,children),slots}}function getSlotChildren(children){return children.every((item=>"string"==typeof item))?children.join(" "):(0,preact_module.h)(preact_module.HY,{},children)}var kebab=__webpack_require__("./node_modules/case-it/kebab.js");function define_define(tagName,componentFunction){let options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};const elementTag=function getElementTag(tagName){let result=tagName.toLowerCase();if(!result.includes("-"))throw new Error(`${ErrorTypes.Tag} : <${tagName}>\n\nhttps://developer.mozilla.org/en-US/docs/Web/API/CustomElementRegistry/define#valid_custom_element_names\n`);return result}(tagName);if("undefined"==typeof window)return function createServerSideRenderFunction(elementTag,componentFunction){let options=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},component=componentFunction();if(isPromise(component))throw new Error(`${ErrorTypes.Promise} : <${elementTag}>`);const{wrapComponent}=options;wrapComponent&&(component=wrapComponent(component));const attributes={server:!0};return props=>(0,preact_module.h)(elementTag,attributes,[(0,preact_module.h)("script",{type:"application/json",dangerouslySetInnerHTML:{__html:JSON.stringify(props)}}),(0,preact_module.h)(component,props)])}(elementTag,componentFunction,options);customElements.define(elementTag,function createCustomElement(componentFunction){let options=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const{attributes=[]}=options;class TheCustomElement extends HTMLElement{__mounted=!1;__componentFunction=componentFunction;__properties={};__options=options;static observedAttributes=["props",...attributes];connectedCallback(){onConnected.call(this)}attributeChangedCallback(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];onAttributeChange.call(this,...args)}disconnectedCallback(){onDisconnected.call(this)}renderPreactComponent(){renderPreactComponent.call(this)}}return attributes.forEach((name=>{Object.defineProperty(TheCustomElement.prototype,name,{get(){return this.__properties[name]},set(v){this.__mounted&&this.attributeChangedCallback(name,null,v);const type=typeof v;null!=v&&"string"!==type&&"boolean"!==type&&"number"!==type||this.setAttribute(name,v)}})})),TheCustomElement}(componentFunction,options))}function setupMutationObserver(){this.__mutationObserver=new MutationObserver((mutations=>{mutations.find((mutation=>"childList"===mutation.type))&&this.renderPreactComponent()}))}async function onConnected(){const attributes=getElementAttributes.call(this),propsAttribute=this.getAttribute("props"),json=this.querySelector('[type="application/json"]'),data=parseJson.call(this,propsAttribute||json?.innerHTML||"{}"),eventHandlers=function proxyEvents(props,eventNames,CustomElement){const callbacks={};return(eventNames||[]).forEach((name=>{const customName=(0,kebab.N)(name.replace("on","ds"));let existingCallback=()=>null;props&&props[name]&&(existingCallback=props[name].bind({})),callbacks[name]=event=>{const customEvent=new CustomEvent(customName,{...event,composed:!0,bubbles:!0,detail:{target:event.target}});CustomElement.dispatchEvent(customEvent),existingCallback()}})),callbacks}(this.__properties,this.__options.events,this);json?.remove(),this.__properties={...data,...attributes,...eventHandlers};let component=this.__componentFunction();if(isPromise(component)&&(component=await getAsyncComponent(component,this.tagName)),!component)return void console.error(ErrorTypes.Missing,`: <${this.tagName.toLowerCase()}>`);const{wrapComponent}=this.__options;wrapComponent&&(component=wrapComponent(component)),setupMutationObserver.call(this),this.__component=component,this.removeAttribute("server"),this.renderPreactComponent(),this.__mounted=!0}function onAttributeChange(name,_original,updated){if(!this.__mounted)return;updated=null==updated?void 0:updated;let props=this.__properties;"props"===name?props={...props,...parseJson.call(this,updated)}:props[getPropKey(name)]=updated,this.__properties=props,this.renderPreactComponent()}function onDisconnected(){(0,preact_module.sY)(null,this),this.__mutationObserver?.disconnect()}function isTemplate(childNode){return"template"===childNode.nodeName.toLowerCase()}function renderPreactComponent(){if(!this.__component)return void console.error(ErrorTypes.Missing,`: <${this.tagName.toLowerCase()}>`);this.__mutationObserver?.disconnect();let template=[...this.childNodes].find(isTemplate);template||(template=document.createElement("template"),template.innerHTML=function wrapTemplateHtml(html){return`<span>${html}</span>`}(this.innerHTML));const{vnode,slots}=function templateToPreactVNode(template){const slots={},childVNodes=[];for(const childElement of template.content.children){const{vnode,slots:childSlots}=nodeToPreactVNode(childElement,slots);Object.assign(slots,childSlots),childVNodes.push(vnode)}return{vnode:(0,preact_module.h)(preact_module.HY,{},childVNodes),slots}}(template),children=function unwrapTemplateVNode(vnode){return vnode.props.children[0].props.children}(vnode),props={...this.__properties,parent:this,children,...slots};[...this.childNodes].forEach((childNode=>childNode.remove())),(0,preact_module.sY)((0,preact_module.h)(this.__component,props),this),this.appendChild(template),this.__mutationObserver.observe(this,{childList:!0})}},"./packages/design-system/src/components/web-components/storybook.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{h:()=>webComponentDecorator});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");function webComponentDecorator(Story,context){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.tZ)(Story,{})},JSON.stringify({...context.args,...context.globals}))}webComponentDecorator.displayName="webComponentDecorator"},"./.storybook/docs/WebComponentDocTemplate.mdx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>WebComponentDocTemplate});__webpack_require__("./node_modules/preact/compat/dist/compat.module.js");var jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs"),lib=__webpack_require__("./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js"),dist=__webpack_require__("./node_modules/@storybook/blocks/dist/index.mjs"),HtmlElementArgs=__webpack_require__("./.storybook/docs/HtmlElementArgs.tsx");function optToCodeBlock(opt){const formattedOpt=void 0===opt?"undefined":`"${opt}"`;return(0,jsx_runtime.tZ)("code",{children:formattedOpt})}function getTypeLabel(argType){const controlType=argType.control?.type;if(controlType)switch(controlType){case"text":return(0,jsx_runtime.tZ)("code",{children:"string"});case"boolean":return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("code",{children:'"true"'}),(0,jsx_runtime.tZ)("code",{children:'"false"'})]});case"radio":case"inline-radio":case"select":return argType.options?.map(optToCodeBlock);case"object":return"See description"}}optToCodeBlock.displayName="optToCodeBlock";const WebComponentArgsTable=_ref=>{let{of}=_ref;const resolvedOf=(0,dist.co)(of||"story",["story","meta"]),argTypes="story"===resolvedOf.type?resolvedOf.story.argTypes:{};return(0,jsx_runtime.BX)("table",{className:"docblock-argstable",children:[(0,jsx_runtime.tZ)("thead",{className:"docblock-argstable-head",children:(0,jsx_runtime.BX)("tr",{children:[(0,jsx_runtime.tZ)("th",{style:{minWidth:"10rem"},children:(0,jsx_runtime.tZ)("span",{children:"Name"})}),(0,jsx_runtime.tZ)("th",{children:(0,jsx_runtime.tZ)("span",{children:"Description"})}),(0,jsx_runtime.tZ)("th",{children:(0,jsx_runtime.tZ)("span",{children:"Accepted values"})})]})}),(0,jsx_runtime.tZ)("tbody",{className:"docblock-argstable-body",children:Object.entries(argTypes).filter((_ref2=>{let[_key,argType]=_ref2;return!argType.table?.disable&&!argType.controlsOnly})).map((_ref3=>{let[key,argType]=_ref3;return(0,jsx_runtime.BX)("tr",{children:[(0,jsx_runtime.tZ)("td",{children:(0,jsx_runtime.tZ)("strong",{children:key})}),(0,jsx_runtime.tZ)("td",{children:argType.description&&(0,jsx_runtime.tZ)("div",{style:{marginBottom:"4px"},children:(0,jsx_runtime.tZ)("p",{children:argType.description})})}),(0,jsx_runtime.tZ)("td",{children:(0,jsx_runtime.tZ)("p",{children:getTypeLabel(argType)})})]})}))})]})};WebComponentArgsTable.displayName="WebComponentArgsTable";try{WebComponentArgsTable.displayName="WebComponentArgsTable",WebComponentArgsTable.__docgenInfo={description:"A table documenting a web component's supported attributes",displayName:"WebComponentArgsTable",props:{of:{defaultValue:null,description:"",name:"of",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/docs/WebComponentArgsTable.tsx#WebComponentArgsTable"]={docgenInfo:WebComponentArgsTable.__docgenInfo,name:"WebComponentArgsTable",path:".storybook/docs/WebComponentArgsTable.tsx#WebComponentArgsTable"})}catch(__react_docgen_typescript_loader_error){}const WebComponentEventsTable=_ref=>{let{of}=_ref;const resolvedOf=(0,dist.co)(of||"story",["story","meta"]);if("story"!==resolvedOf.type)return null;const componentEvents=resolvedOf.story.parameters?.docs?.componentEvents;if(!componentEvents)return null;const rows=Object.entries(componentEvents).map((_ref2=>{let[eventName,event]=_ref2;return(0,jsx_runtime.BX)("tr",{children:[(0,jsx_runtime.tZ)("td",{children:(0,jsx_runtime.tZ)("strong",{children:eventName})}),(0,jsx_runtime.tZ)("td",{children:(0,jsx_runtime.tZ)("p",{children:event?.description??""})}),(0,jsx_runtime.tZ)("td",{children:(0,jsx_runtime.tZ)("p",{children:event.eventObjectDescription})})]},eventName)}));return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("h2",{id:"events",children:"Custom events"}),(0,jsx_runtime.BX)("table",{className:"docblock-argstable",children:[(0,jsx_runtime.tZ)("thead",{className:"docblock-argstable-head",children:(0,jsx_runtime.BX)("tr",{children:[(0,jsx_runtime.tZ)("th",{style:{minWidth:"10rem"},children:(0,jsx_runtime.tZ)("span",{children:"Name"})}),(0,jsx_runtime.tZ)("th",{children:(0,jsx_runtime.tZ)("span",{children:"Description"})}),(0,jsx_runtime.tZ)("th",{children:(0,jsx_runtime.tZ)("span",{children:"Event object"})})]})}),(0,jsx_runtime.tZ)("tbody",{className:"docblock-argstable-body",children:rows})]})]})};try{WebComponentEventsTable.displayName="WebComponentEventsTable",WebComponentEventsTable.__docgenInfo={description:"A table documenting a web component's custom events",displayName:"WebComponentEventsTable",props:{of:{defaultValue:null,description:"",name:"of",required:!0,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES[".storybook/docs/WebComponentEventsTable.tsx#WebComponentEventsTable"]={docgenInfo:WebComponentEventsTable.__docgenInfo,name:"WebComponentEventsTable",path:".storybook/docs/WebComponentEventsTable.tsx#WebComponentEventsTable"})}catch(__react_docgen_typescript_loader_error){}const WebComponentDocTemplate=function MDXContent(props={}){const{wrapper:MDXLayout}=Object.assign({},(0,lib.ah)(),props.components);return MDXLayout?(0,jsx_runtime.tZ)(MDXLayout,Object.assign({},props,{children:(0,jsx_runtime.tZ)(_createMdxContent,{})})):_createMdxContent();function _createMdxContent(){const _components=Object.assign({h2:"h2",hr:"hr"},(0,lib.ah)(),props.components);return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)(dist.h_,{isTemplate:!0}),"\n",(0,jsx_runtime.tZ)(dist.Dx,{}),"\n",(0,jsx_runtime.tZ)(dist.QE,{}),"\n",(0,jsx_runtime.tZ)(dist.dk,{}),"\n",(0,jsx_runtime.tZ)(dist.sq,{}),"\n",(0,jsx_runtime.tZ)(_components.h2,{id:"attributes",children:"Attributes"}),"\n",(0,jsx_runtime.tZ)(WebComponentArgsTable,{}),"\n",(0,jsx_runtime.tZ)(HtmlElementArgs.f,{attributes:!0}),"\n",(0,jsx_runtime.tZ)(WebComponentEventsTable,{}),"\n",(0,jsx_runtime.tZ)(_components.hr,{}),"\n",(0,jsx_runtime.tZ)(dist.fQ,{})]})}}},"./node_modules/case-it/kebab.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";var space_1=__webpack_require__("./node_modules/case-it/space.js");exports.N=function kebabCaseIt(str){return space_1.spaceCaseIt(str).replace(/\s/g,"-")}},"./node_modules/case-it/no.js":(__unused_webpack_module,exports)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var hasSpace=/\s/,hasSeparator=/(_|-|\.|:)/,hasCamel=/([a-z][A-Z]|[A-Z][a-z])/;exports.noCaseIt=function noCaseIt(str){return hasSpace.test(str)?str.toLowerCase():hasSeparator.test(str)?(function unseparate(str){return str.replace(separatorSplitter,(function(m,next){return next?" "+next:""}))}(str)||str).toLowerCase():hasCamel.test(str)?function uncamelize(str){return str.replace(camelSplitter,(function(m,previous,uppers){return previous+" "+uppers.toLowerCase().split("").join(" ")}))}(str).toLowerCase():str.toLowerCase()};var separatorSplitter=/[\W_]+(.|$)/g;var camelSplitter=/(.)([A-Z]+)/g},"./node_modules/case-it/space.js":(__unused_webpack_module,exports,__webpack_require__)=>{"use strict";Object.defineProperty(exports,"__esModule",{value:!0});var no_1=__webpack_require__("./node_modules/case-it/no.js");exports.spaceCaseIt=function spaceCaseIt(str){return no_1.noCaseIt(str).replace(/[\W_]+(.|$)/g,(function(matches,match){return match?" "+match:""})).trim()}},"./node_modules/classnames/index.js":(module,exports)=>{var __WEBPACK_AMD_DEFINE_RESULT__;!function(){"use strict";var hasOwn={}.hasOwnProperty;function classNames(){for(var classes=[],i=0;i<arguments.length;i++){var arg=arguments[i];if(arg){var argType=typeof arg;if("string"===argType||"number"===argType)classes.push(arg);else if(Array.isArray(arg)){if(arg.length){var inner=classNames.apply(null,arg);inner&&classes.push(inner)}}else if("object"===argType){if(arg.toString!==Object.prototype.toString&&!arg.toString.toString().includes("[native code]")){classes.push(arg.toString());continue}for(var key in arg)hasOwn.call(arg,key)&&arg[key]&&classes.push(key)}}}return classes.join(" ")}module.exports?(classNames.default=classNames,module.exports=classNames):void 0===(__WEBPACK_AMD_DEFINE_RESULT__=function(){return classNames}.apply(exports,[]))||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}()}}]);