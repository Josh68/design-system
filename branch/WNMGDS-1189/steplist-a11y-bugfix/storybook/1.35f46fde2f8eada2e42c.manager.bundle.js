(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{1637:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"createCopyToClipboardFunction",(function(){return createCopyToClipboardFunction})),__webpack_require__.d(__webpack_exports__,"SyntaxHighlighter",(function(){return syntaxhighlighter_SyntaxHighlighter}));__webpack_require__(98),__webpack_require__(42),__webpack_require__(14),__webpack_require__(99),__webpack_require__(5),__webpack_require__(75),__webpack_require__(4),__webpack_require__(12),__webpack_require__(13),__webpack_require__(10),__webpack_require__(9),__webpack_require__(11),__webpack_require__(18),__webpack_require__(15),__webpack_require__(20),__webpack_require__(50),__webpack_require__(23);var react=__webpack_require__(0),react_default=__webpack_require__.n(react),esm=__webpack_require__(30),dist_esm=__webpack_require__(1),global_window=__webpack_require__(8),window_default=__webpack_require__.n(global_window),memoizerific=__webpack_require__(34),memoizerific_default=__webpack_require__.n(memoizerific),jsx=__webpack_require__(400),prism_jsx=__webpack_require__.n(jsx).a,bash=__webpack_require__(399),prism_bash=__webpack_require__.n(bash).a,css=__webpack_require__(633),prism_css=__webpack_require__.n(css).a,js_extras=__webpack_require__(635),prism_js_extras=__webpack_require__.n(js_extras).a,json=__webpack_require__(293),prism_json=__webpack_require__.n(json).a,graphql=__webpack_require__(634),prism_graphql=__webpack_require__.n(graphql).a,markup=__webpack_require__(632),prism_markup=__webpack_require__.n(markup).a,markdown=__webpack_require__(636),prism_markdown=__webpack_require__.n(markdown).a,yaml=__webpack_require__(401),prism_yaml=__webpack_require__.n(yaml).a,tsx=__webpack_require__(637),prism_tsx=__webpack_require__.n(tsx).a,typescript=__webpack_require__(292),prism_typescript=__webpack_require__.n(typescript).a,objectWithoutProperties=__webpack_require__(574),objectWithoutProperties_default=__webpack_require__.n(objectWithoutProperties),objectSpread=__webpack_require__(115),objectSpread_default=__webpack_require__.n(objectSpread),helpers_extends=__webpack_require__(172),extends_default=__webpack_require__.n(helpers_extends);function createStyleObject(classNames){var elementStyle=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},stylesheet=arguments.length>2?arguments[2]:void 0;return classNames.reduce((function(styleObject,className){return objectSpread_default()({},styleObject,stylesheet[className])}),elementStyle)}function createClassNameString(classNames){return classNames.join(" ")}function createElement(_ref){var node=_ref.node,stylesheet=_ref.stylesheet,_ref$style=_ref.style,style=void 0===_ref$style?{}:_ref$style,useInlineStyles=_ref.useInlineStyles,key=_ref.key,properties=node.properties,type=node.type,TagName=node.tagName,value=node.value;if("text"===type)return value;if(TagName){var childrenCreator=function createChildren(stylesheet,useInlineStyles){var childrenCount=0;return function(children){return childrenCount+=1,children.map((function(child,i){return createElement({node:child,stylesheet:stylesheet,useInlineStyles:useInlineStyles,key:"code-segment-".concat(childrenCount,"-").concat(i)})}))}}(stylesheet,useInlineStyles),nonStylesheetClassNames=useInlineStyles&&properties.className&&properties.className.filter((function(className){return!stylesheet[className]})),className=nonStylesheetClassNames&&nonStylesheetClassNames.length?nonStylesheetClassNames:void 0,props=useInlineStyles?objectSpread_default()({},properties,{className:className&&createClassNameString(className)},{style:createStyleObject(properties.className,Object.assign({},properties.style,style),stylesheet)}):objectSpread_default()({},properties,{className:createClassNameString(properties.className)}),children=childrenCreator(node.children);return react_default.a.createElement(TagName,extends_default()({key:key},props),children)}}var newLineRegex=/\n/g;function AllLineNumbers(_ref2){var codeString=_ref2.codeString,codeStyle=_ref2.codeStyle,_ref2$containerStyle=_ref2.containerStyle,containerStyle=void 0===_ref2$containerStyle?{float:"left",paddingRight:"10px"}:_ref2$containerStyle,_ref2$numberStyle=_ref2.numberStyle,numberStyle=void 0===_ref2$numberStyle?{}:_ref2$numberStyle,startingLineNumber=_ref2.startingLineNumber;return react_default.a.createElement("code",{style:Object.assign({},codeStyle,containerStyle)},function getAllLineNumbers(_ref){var lines=_ref.lines,startingLineNumber=_ref.startingLineNumber,style=_ref.style;return lines.map((function(_,i){var number=i+startingLineNumber;return react_default.a.createElement("span",{key:"line-".concat(i),className:"react-syntax-highlighter-line-number",style:"function"==typeof style?style(number):style},"".concat(number,"\n"))}))}({lines:codeString.replace(/\n$/,"").split("\n"),style:numberStyle,startingLineNumber:startingLineNumber}))}function getInlineLineNumber(lineNumber,inlineLineNumberStyle){return{type:"element",tagName:"span",properties:{key:"line-number--".concat(lineNumber),className:["comment","linenumber","react-syntax-highlighter-line-number"],style:inlineLineNumberStyle},children:[{type:"text",value:lineNumber}]}}function assembleLineNumberStyles(lineNumberStyle,lineNumber,largestLineNumber){var num,len,defaultLineNumberStyle={display:"inline-block",minWidth:(num=largestLineNumber,len=num.toString().length,"".concat(len,"em")),paddingRight:"1em",textAlign:"right",userSelect:"none"},customLineNumberStyle="function"==typeof lineNumberStyle?lineNumberStyle(lineNumber):lineNumberStyle;return objectSpread_default()({},defaultLineNumberStyle,customLineNumberStyle)}function createLineElement(_ref3){var children=_ref3.children,lineNumber=_ref3.lineNumber,lineNumberStyle=_ref3.lineNumberStyle,largestLineNumber=_ref3.largestLineNumber,showInlineLineNumbers=_ref3.showInlineLineNumbers,_ref3$lineProps=_ref3.lineProps,lineProps=void 0===_ref3$lineProps?{}:_ref3$lineProps,_ref3$className=_ref3.className,className=void 0===_ref3$className?[]:_ref3$className,properties="function"==typeof lineProps?lineProps(lineNumber):lineProps;if(properties.className=className,lineNumber&&showInlineLineNumbers){var inlineLineNumberStyle=assembleLineNumberStyles(lineNumberStyle,lineNumber,largestLineNumber);children.unshift(getInlineLineNumber(lineNumber,inlineLineNumberStyle))}return{type:"element",tagName:"span",properties:properties,children:children}}function flattenCodeTree(tree){for(var className=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],newTree=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],i=0;i<tree.length;i++){var node=tree[i];if("text"===node.type)newTree.push(createLineElement({children:[node],className:className}));else if(node.children){var classNames=className.concat(node.properties.className);newTree=newTree.concat(flattenCodeTree(node.children,classNames))}}return newTree}function processLines(codeTree,wrapLines,lineProps,showLineNumbers,showInlineLineNumbers,startingLineNumber,largestLineNumber,lineNumberStyle){var _ref4,tree=flattenCodeTree(codeTree.value),newTree=[],lastLineBreakIndex=-1,index=0;function createWrappedLine(children,lineNumber){var className=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return createLineElement({children:children,lineNumber:lineNumber,lineNumberStyle:lineNumberStyle,largestLineNumber:largestLineNumber,showInlineLineNumbers:showInlineLineNumbers,lineProps:lineProps,className:className})}function createUnwrappedLine(children,lineNumber){if(lineNumber&&showInlineLineNumbers){var inlineLineNumberStyle=assembleLineNumberStyles(lineNumberStyle,lineNumber,largestLineNumber);children.unshift(getInlineLineNumber(lineNumber,inlineLineNumberStyle))}return children}function createLine(children,lineNumber){var className=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];return wrapLines||className.length>0?createWrappedLine(children,lineNumber,className):createUnwrappedLine(children,lineNumber)}for(var _loop=function _loop(){var node=tree[index],value=node.children[0].value;if(function getNewLines(str){return str.match(newLineRegex)}(value)){var splitValue=value.split("\n");splitValue.forEach((function(text,i){var lineNumber=showLineNumbers&&newTree.length+startingLineNumber,newChild={type:"text",value:"".concat(text,"\n")};if(0===i){var _line=createLine(tree.slice(lastLineBreakIndex+1,index).concat(createLineElement({children:[newChild],className:node.properties.className})),lineNumber);newTree.push(_line)}else if(i===splitValue.length-1){if(tree[index+1]&&tree[index+1].children&&tree[index+1].children[0]){var newElem=createLineElement({children:[{type:"text",value:"".concat(text)}],className:node.properties.className});tree.splice(index+1,0,newElem)}else{var _line2=createLine([newChild],lineNumber,node.properties.className);newTree.push(_line2)}}else{var _line3=createLine([newChild],lineNumber,node.properties.className);newTree.push(_line3)}})),lastLineBreakIndex=index}index++};index<tree.length;)_loop();if(lastLineBreakIndex!==tree.length-1){var children=tree.slice(lastLineBreakIndex+1,tree.length);if(children&&children.length){var line=createLine(children,newTree.length+startingLineNumber);newTree.push(line)}}return wrapLines?newTree:(_ref4=[]).concat.apply(_ref4,newTree)}function defaultRenderer(_ref5){var rows=_ref5.rows,stylesheet=_ref5.stylesheet,useInlineStyles=_ref5.useInlineStyles;return rows.map((function(node,i){return createElement({node:node,stylesheet:stylesheet,useInlineStyles:useInlineStyles,key:"code-segement".concat(i)})}))}function isHighlightJs(astGenerator){return astGenerator&&void 0!==astGenerator.highlightAuto}var defaultAstGenerator,defaultStyle,core=__webpack_require__(282),core_default=__webpack_require__.n(core),prism_light_SyntaxHighlighter=(defaultAstGenerator=core_default.a,defaultStyle={},function SyntaxHighlighter(_ref7){var language=_ref7.language,children=_ref7.children,_ref7$style=_ref7.style,style=void 0===_ref7$style?defaultStyle:_ref7$style,_ref7$customStyle=_ref7.customStyle,customStyle=void 0===_ref7$customStyle?{}:_ref7$customStyle,_ref7$codeTagProps=_ref7.codeTagProps,codeTagProps=void 0===_ref7$codeTagProps?{className:language?"language-".concat(language):void 0,style:style['code[class*="language-"]']}:_ref7$codeTagProps,_ref7$useInlineStyles=_ref7.useInlineStyles,useInlineStyles=void 0===_ref7$useInlineStyles||_ref7$useInlineStyles,_ref7$showLineNumbers=_ref7.showLineNumbers,showLineNumbers=void 0!==_ref7$showLineNumbers&&_ref7$showLineNumbers,_ref7$showInlineLineN=_ref7.showInlineLineNumbers,showInlineLineNumbers=void 0!==_ref7$showInlineLineN&&_ref7$showInlineLineN,_ref7$startingLineNum=_ref7.startingLineNumber,startingLineNumber=void 0===_ref7$startingLineNum?1:_ref7$startingLineNum,lineNumberContainerStyle=_ref7.lineNumberContainerStyle,_ref7$lineNumberStyle=_ref7.lineNumberStyle,lineNumberStyle=void 0===_ref7$lineNumberStyle?{}:_ref7$lineNumberStyle,wrapLines=_ref7.wrapLines,_ref7$lineProps=_ref7.lineProps,lineProps=void 0===_ref7$lineProps?{}:_ref7$lineProps,renderer=_ref7.renderer,_ref7$PreTag=_ref7.PreTag,PreTag=void 0===_ref7$PreTag?"pre":_ref7$PreTag,_ref7$CodeTag=_ref7.CodeTag,CodeTag=void 0===_ref7$CodeTag?"code":_ref7$CodeTag,_ref7$code=_ref7.code,code=void 0===_ref7$code?Array.isArray(children)?children[0]:children:_ref7$code,astGenerator=_ref7.astGenerator,rest=objectWithoutProperties_default()(_ref7,["language","children","style","customStyle","codeTagProps","useInlineStyles","showLineNumbers","showInlineLineNumbers","startingLineNumber","lineNumberContainerStyle","lineNumberStyle","wrapLines","lineProps","renderer","PreTag","CodeTag","code","astGenerator"]);astGenerator=astGenerator||defaultAstGenerator;var allLineNumbers=showLineNumbers?react_default.a.createElement(AllLineNumbers,{containerStyle:lineNumberContainerStyle,codeStyle:codeTagProps.style||{},numberStyle:lineNumberStyle,startingLineNumber:startingLineNumber,codeString:code}):null,defaultPreStyle=style.hljs||style['pre[class*="language-"]']||{backgroundColor:"#fff"},generatorClassName=isHighlightJs(astGenerator)?"hljs":"prismjs",preProps=useInlineStyles?Object.assign({},rest,{style:Object.assign({},defaultPreStyle,customStyle)}):Object.assign({},rest,{className:rest.className?"".concat(generatorClassName," ").concat(rest.className):generatorClassName,style:Object.assign({},customStyle)});if(!astGenerator)return react_default.a.createElement(PreTag,preProps,allLineNumbers,react_default.a.createElement(CodeTag,codeTagProps,code));wrapLines=!(!renderer||void 0!==wrapLines)||wrapLines,renderer=renderer||defaultRenderer;var defaultCodeValue=[{type:"text",value:code}],codeTree=function getCodeTree(_ref6){var astGenerator=_ref6.astGenerator,language=_ref6.language,code=_ref6.code,defaultCodeValue=_ref6.defaultCodeValue;if(isHighlightJs(astGenerator)){var hasLanguage=function(astGenerator,language){return-1!==astGenerator.listLanguages().indexOf(language)}(astGenerator,language);return"text"===language?{value:defaultCodeValue,language:"text"}:hasLanguage?astGenerator.highlight(language,code):astGenerator.highlightAuto(code)}try{return language&&"text"!==language?{value:astGenerator.highlight(code,language)}:{value:defaultCodeValue}}catch(e){return{value:defaultCodeValue}}}({astGenerator:astGenerator,language:language,code:code,defaultCodeValue:defaultCodeValue});null===codeTree.language&&(codeTree.value=defaultCodeValue);var rows=processLines(codeTree,wrapLines,lineProps,showLineNumbers,showInlineLineNumbers,startingLineNumber,codeTree.value.length+startingLineNumber,lineNumberStyle);return react_default.a.createElement(PreTag,preProps,react_default.a.createElement(CodeTag,codeTagProps,!showInlineLineNumbers&&allLineNumbers,renderer({rows:rows,stylesheet:style,useInlineStyles:useInlineStyles})))});prism_light_SyntaxHighlighter.registerLanguage=function(_,language){return core_default.a.register(language)};var prism_light=prism_light_SyntaxHighlighter,ActionBar=__webpack_require__(269),ScrollArea=__webpack_require__(266),ts_dedent_esm=__webpack_require__(39),formatter=memoizerific_default()(2)((function(code){return Object(ts_dedent_esm.a)(code)}));function _extends(){return _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target},_extends.apply(this,arguments)}function _objectWithoutProperties(source,excluded){if(null==source)return{};var key,i,target=function _objectWithoutPropertiesLoose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function asyncGeneratorStep(gen,resolve,reject,_next,_throw,key,arg){try{var info=gen[key](arg),value=info.value}catch(error){return void reject(error)}info.done?resolve(value):Promise.resolve(value).then(_next,_throw)}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(arr)))return;var _arr=[],_n=!0,_d=!1,_e=void 0;try{for(var _s,_i=arr[Symbol.iterator]();!(_n=(_s=_i.next()).done)&&(_arr.push(_s.value),!i||_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{_n||null==_i.return||_i.return()}finally{if(_d)throw _e}}return _arr}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var syntaxhighlighter_navigator=window_default.a.navigator,syntaxhighlighter_document=window_default.a.document,globalWindow=window_default.a.window;prism_light.registerLanguage("jsextra",prism_js_extras),prism_light.registerLanguage("jsx",prism_jsx),prism_light.registerLanguage("json",prism_json),prism_light.registerLanguage("yml",prism_yaml),prism_light.registerLanguage("md",prism_markdown),prism_light.registerLanguage("bash",prism_bash),prism_light.registerLanguage("css",prism_css),prism_light.registerLanguage("html",prism_markup),prism_light.registerLanguage("tsx",prism_tsx),prism_light.registerLanguage("typescript",prism_typescript),prism_light.registerLanguage("graphql",prism_graphql);var themedSyntax=memoizerific_default()(2)((function(theme){return Object.entries(theme.code||{}).reduce((function(acc,_ref){var _ref2=_slicedToArray(_ref,2),key=_ref2[0],val=_ref2[1];return Object.assign({},acc,function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}({},"* .".concat(key),val))}),{})})),copyToClipboard=createCopyToClipboardFunction();function createCopyToClipboardFunction(){return null!=syntaxhighlighter_navigator&&syntaxhighlighter_navigator.clipboard?function(text){return syntaxhighlighter_navigator.clipboard.writeText(text)}:function(){var _ref3=function _asyncToGenerator(fn){return function(){var self=this,args=arguments;return new Promise((function(resolve,reject){var gen=fn.apply(self,args);function _next(value){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"next",value)}function _throw(err){asyncGeneratorStep(gen,resolve,reject,_next,_throw,"throw",err)}_next(void 0)}))}}(regeneratorRuntime.mark((function _callee(text){var tmp,focus;return regeneratorRuntime.wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:tmp=syntaxhighlighter_document.createElement("TEXTAREA"),focus=syntaxhighlighter_document.activeElement,tmp.value=text,syntaxhighlighter_document.body.appendChild(tmp),tmp.select(),syntaxhighlighter_document.execCommand("copy"),syntaxhighlighter_document.body.removeChild(tmp),focus.focus();case 8:case"end":return _context.stop()}}),_callee)})));return function(_x){return _ref3.apply(this,arguments)}}()}var Wrapper=dist_esm.styled.div((function(_ref4){return{position:"relative",overflow:"hidden",color:_ref4.theme.color.defaultText}}),(function(_ref5){var theme=_ref5.theme;return _ref5.bordered?{border:"1px solid ".concat(theme.appBorderColor),borderRadius:theme.borderRadius,background:theme.background.content}:{}})),Scroller=Object(dist_esm.styled)((function(_ref6){var children=_ref6.children,className=_ref6.className;return react_default.a.createElement(ScrollArea.a,{horizontal:!0,vertical:!0,className:className},children)}))({position:"relative"},(function(_ref7){return{"& code":{paddingRight:_ref7.theme.layoutMargin}}}),(function(_ref8){var theme=_ref8.theme;return themedSyntax(theme)})),Pre=dist_esm.styled.pre((function(_ref9){var theme=_ref9.theme;return{display:"flex",justifyContent:"flex-start",margin:0,padding:_ref9.padded?theme.layoutMargin:0}})),Code=dist_esm.styled.code({flex:1,paddingRight:0,opacity:1}),syntaxhighlighter_SyntaxHighlighter=function SyntaxHighlighter(_ref10){var children=_ref10.children,_ref10$language=_ref10.language,language=void 0===_ref10$language?"jsx":_ref10$language,_ref10$copyable=_ref10.copyable,copyable=void 0!==_ref10$copyable&&_ref10$copyable,_ref10$bordered=_ref10.bordered,bordered=void 0!==_ref10$bordered&&_ref10$bordered,_ref10$padded=_ref10.padded,padded=void 0!==_ref10$padded&&_ref10$padded,_ref10$format=_ref10.format,format=void 0===_ref10$format||_ref10$format,_ref10$className=_ref10.className,className=void 0===_ref10$className?null:_ref10$className,_ref10$showLineNumber=_ref10.showLineNumbers,showLineNumbers=void 0!==_ref10$showLineNumber&&_ref10$showLineNumber,rest=_objectWithoutProperties(_ref10,["children","language","copyable","bordered","padded","format","className","showLineNumbers"]);if("string"!=typeof children||!children.trim())return null;var highlightableCode=format?formatter(children):children.trim(),_useState2=_slicedToArray(Object(react.useState)(!1),2),copied=_useState2[0],setCopied=_useState2[1],onClick=function onClick(e){e.preventDefault();var selectedText=globalWindow.getSelection().toString(),textToCopy="click"!==e.type&&selectedText?selectedText:highlightableCode;copyToClipboard(textToCopy).then((function(){setCopied(!0),globalWindow.setTimeout((function(){return setCopied(!1)}),1500)})).catch(esm.a.error)};return react_default.a.createElement(Wrapper,{bordered:bordered,padded:padded,className:className,onCopyCapture:onClick},react_default.a.createElement(Scroller,null,react_default.a.createElement(prism_light,_extends({padded:padded||bordered,language:language,showLineNumbers:showLineNumbers,showInlineLineNumbers:showLineNumbers,useInlineStyles:!1,PreTag:Pre,CodeTag:Code,lineNumberContainerStyle:{}},rest),highlightableCode)),copyable?react_default.a.createElement(ActionBar.a,{actionItems:[{title:copied?"Copied":"Copy",onClick:onClick}]}):null)};syntaxhighlighter_SyntaxHighlighter.displayName="SyntaxHighlighter";__webpack_exports__.default=syntaxhighlighter_SyntaxHighlighter}}]);