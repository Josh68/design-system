"use strict";(self.webpackChunkdesign_system=self.webpackChunkdesign_system||[]).push([[1314],{"./packages/ds-healthcare-gov/src/components/Header/Header.stories.tsx":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{LoggedInControlledHeader:function(){return LoggedInControlledHeader},LoggedInHeader:function(){return LoggedInHeader},LoggedOutHeader:function(){return LoggedOutHeader},MinimalHeader:function(){return MinimalHeader},__namedExportsOrder:function(){return __namedExportsOrder}});__webpack_require__("./node_modules/react/index.js");var _MinimalHeader$parame,_MinimalHeader$parame2,_MinimalHeader$parame3,_LoggedInHeader$param,_LoggedInHeader$param2,_LoggedInHeader$param3,_LoggedOutHeader$para,_LoggedOutHeader$para2,_LoggedOutHeader$para3,_LoggedInControlledHe,_LoggedInControlledHe2,_LoggedInControlledHe3,_Header__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./packages/ds-healthcare-gov/src/components/Header/Header.tsx"),_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("@storybook/preview-api"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/react/jsx-runtime.js");function _typeof(obj){return _typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(obj){return typeof obj}:function(obj){return obj&&"function"==typeof Symbol&&obj.constructor===Symbol&&obj!==Symbol.prototype?"symbol":typeof obj},_typeof(obj)}function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return(key=function _toPropertyKey(arg){var key=function _toPrimitive(input,hint){if("object"!==_typeof(input)||null===input)return input;var prim=input[Symbol.toPrimitive];if(void 0!==prim){var res=prim.call(input,hint||"default");if("object"!==_typeof(res))return res;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===hint?String:Number)(input)}(arg,"string");return"symbol"===_typeof(key)?key:String(key)}(key))in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _slicedToArray(arr,i){return function _arrayWithHoles(arr){if(Array.isArray(arr))return arr}(arr)||function _iterableToArrayLimit(arr,i){var _i=null==arr?null:"undefined"!=typeof Symbol&&arr[Symbol.iterator]||arr["@@iterator"];if(null!=_i){var _s,_e,_x,_r,_arr=[],_n=!0,_d=!1;try{if(_x=(_i=_i.call(arr)).next,0===i){if(Object(_i)!==_i)return;_n=!1}else for(;!(_n=(_s=_x.call(_i)).done)&&(_arr.push(_s.value),_arr.length!==i);_n=!0);}catch(err){_d=!0,_e=err}finally{try{if(!_n&&null!=_i.return&&(_r=_i.return(),Object(_r)!==_r))return}finally{if(_d)throw _e}}return _arr}}(arr,i)||function _unsupportedIterableToArray(o,minLen){if(!o)return;if("string"==typeof o)return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);"Object"===n&&o.constructor&&(n=o.constructor.name);if("Map"===n||"Set"===n)return Array.from(o);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen)}(arr,i)||function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _arrayLikeToArray(arr,len){(null==len||len>arr.length)&&(len=arr.length);for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2}var meta={title:"Healthcare/Header",component:_Header__WEBPACK_IMPORTED_MODULE_1__.ZP,args:{className:"",firstName:"Margaret"},parameters:{theme:"healthcare"}};__webpack_exports__.default=meta;var MinimalHeader={args:{hideLanguageSwitch:!0,hideLoginLink:!0}},LoggedInHeader={args:{loggedIn:!0}},LoggedOutHeader={},LoggedInControlledHeader={args:{loggedIn:!0,isMenuOpen:!1},render:function Component(args){var _useArgs2=_slicedToArray((0,_storybook_preview_api__WEBPACK_IMPORTED_MODULE_2__.useArgs)(),2),isMenuOpen=_useArgs2[0].isMenuOpen,updateArgs=_useArgs2[1];return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.jsx)(_Header__WEBPACK_IMPORTED_MODULE_1__.ZP,_objectSpread(_objectSpread({},args),{},{onMenuToggle:function onMenuToggle(){return updateArgs({isMenuOpen:!isMenuOpen})}}))}};MinimalHeader.parameters=_objectSpread(_objectSpread({},MinimalHeader.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_MinimalHeader$parame=MinimalHeader.parameters)||void 0===_MinimalHeader$parame?void 0:_MinimalHeader$parame.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    hideLanguageSwitch: true,\n    hideLoginLink: true\n  }\n}"},null===(_MinimalHeader$parame2=MinimalHeader.parameters)||void 0===_MinimalHeader$parame2||null===(_MinimalHeader$parame3=_MinimalHeader$parame2.docs)||void 0===_MinimalHeader$parame3?void 0:_MinimalHeader$parame3.source)})}),LoggedInHeader.parameters=_objectSpread(_objectSpread({},LoggedInHeader.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedInHeader$param=LoggedInHeader.parameters)||void 0===_LoggedInHeader$param?void 0:_LoggedInHeader$param.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    loggedIn: true\n  }\n}"},null===(_LoggedInHeader$param2=LoggedInHeader.parameters)||void 0===_LoggedInHeader$param2||null===(_LoggedInHeader$param3=_LoggedInHeader$param2.docs)||void 0===_LoggedInHeader$param3?void 0:_LoggedInHeader$param3.source)})}),LoggedOutHeader.parameters=_objectSpread(_objectSpread({},LoggedOutHeader.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedOutHeader$para=LoggedOutHeader.parameters)||void 0===_LoggedOutHeader$para?void 0:_LoggedOutHeader$para.docs),{},{source:_objectSpread({originalSource:"{}"},null===(_LoggedOutHeader$para2=LoggedOutHeader.parameters)||void 0===_LoggedOutHeader$para2||null===(_LoggedOutHeader$para3=_LoggedOutHeader$para2.docs)||void 0===_LoggedOutHeader$para3?void 0:_LoggedOutHeader$para3.source)})}),LoggedInControlledHeader.parameters=_objectSpread(_objectSpread({},LoggedInControlledHeader.parameters),{},{docs:_objectSpread(_objectSpread({},null===(_LoggedInControlledHe=LoggedInControlledHeader.parameters)||void 0===_LoggedInControlledHe?void 0:_LoggedInControlledHe.docs),{},{source:_objectSpread({originalSource:"{\n  args: {\n    loggedIn: true,\n    isMenuOpen: false\n  },\n  render: function Component(args) {\n    const [{\n      isMenuOpen\n    }, updateArgs] = useArgs();\n    return <Header {...args} onMenuToggle={() => updateArgs({\n      isMenuOpen: !isMenuOpen\n    })} />;\n  }\n}"},null===(_LoggedInControlledHe2=LoggedInControlledHeader.parameters)||void 0===_LoggedInControlledHe2||null===(_LoggedInControlledHe3=_LoggedInControlledHe2.docs)||void 0===_LoggedInControlledHe3?void 0:_LoggedInControlledHe3.source)})});var __namedExportsOrder=["MinimalHeader","LoggedInHeader","LoggedOutHeader","LoggedInControlledHeader"]},"./packages/ds-healthcare-gov/src/components/i18n.ts":function(__unused_webpack_module,__webpack_exports__,__webpack_require__){__webpack_require__.d(__webpack_exports__,{G3:function(){return i18n.G3},jb:function(){return i18n.jb},t:function(){return i18n.t},$Z:function(){return i18n.$Z}});var en_namespaceObject=JSON.parse('{"footer":{"contactUs":"Contact us","archive":"Archive","a11y":"Accessibility","privacyPolicy":"Privacy policy","privacySettings":"Privacy settings","usingThisSite":"Using this site","disclaimer":"An official website of the U.S. Centers for Medicare &amp; Medicaid Services."},"header":{"close":"Close","closeMenu":"Close menu","deBrokerNameFallback":"the enrollment partner","deConsumerMessage":"Be sure to finish your application before you return to {{brokerName}}\'s website.","español":"Español","langAriaLabel":"CuidadoDeSalud.gov en Español","login":"Log in","logout":"Log out","menu":"Menu","myApplicationsAndCoverage":"My applications & coverage","myProfile":"My profile","openMenu":"Open menu","skipNav":"Skip to main content"}}'),es_namespaceObject=JSON.parse('{"footer":{"contactUs":"Contáctenos","archive":"Archivo","a11y":"Accesibilidad","privacyPolicy":"Política de privacidad","privacySettings":"Configuración de privacidad","usingThisSite":"Usando este sitio","disclaimer":"Un sitio oficial de los Centros de Servicios de Medicare y Medicaid de EE.UU."},"header":{"close":"Cerca","closeMenu":"Cerrar menú","deBrokerNameFallback":"el socio de inscripción","deConsumerMessage":"Asegúrese de terminar su solicitud antes de regresar a la página web de {{brokerName}}","english":"English","langAriaLabel":"Healthcare.gov in English","login":"Iniciar sesión","logout":"Finalizar sesión","menu":"Menú","myApplicationsAndCoverage":"Mis solicitudes & cobertura","myProfile":"Mi perfil","openMenu":"Abrir menú","skipNav":"Ir al contenido principal"}}'),i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");(0,i18n.hk)("en",en_namespaceObject),(0,i18n.hk)("es",es_namespaceObject)}}]);