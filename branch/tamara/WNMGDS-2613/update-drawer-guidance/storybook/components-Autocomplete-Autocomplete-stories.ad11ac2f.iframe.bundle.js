"use strict";(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[4002],{"./packages/design-system/src/components/Autocomplete/Autocomplete.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomMarkup:()=>CustomMarkup,Default:()=>Default,LabeledList:()=>LabeledList,LoadingMessage:()=>LoadingMessage,NoResults:()=>NoResults,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),_Autocomplete__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./packages/design-system/src/components/Autocomplete/Autocomplete.tsx"),_TextField_TextField__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./packages/design-system/src/components/TextField/TextField.tsx"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lodash/uniqueId.js"),lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default=__webpack_require__.n(lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1__),_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@storybook/addon-actions/dist/index.mjs"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Autocomplete",component:_Autocomplete__WEBPACK_IMPORTED_MODULE_4__.Z,args:{ariaClearLabel:"Clear search",clearInputText:"Clear search",clearSearchButton:!0,loadingMessage:"Loading...",noResultsMessage:"No results"},argTypes:{ariaClearLabel:{table:{defaultValue:{summary:"Clear search to try again"}}},clearInputText:{table:{defaultValue:{summary:"Clear Search"}}},loadingMessage:{table:{defaultValue:{summary:"Loading..."}}},noResultsMessage:{table:{defaultValue:{summary:"No results"}}}}},Template=args=>{const{items,textFieldLabel,textFieldHint,...autocompleteArgs}=args,[input,setInput]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)("");let filteredItems=null;return input.length>0&&(filteredItems=items.filter((item=>!item.name||item.name.toLowerCase().includes(input.toLowerCase())))),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_Autocomplete__WEBPACK_IMPORTED_MODULE_4__.Z,{...autocompleteArgs,onChange:(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("onChange"),onInputValueChange:function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];(0,_storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.aD)("onInputValueChange")(args),setInput(args[0])},items:filteredItems,children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)(_TextField_TextField__WEBPACK_IMPORTED_MODULE_5__.Z,{label:textFieldLabel,hint:textFieldHint,name:"autocomplete",value:input})})};function makeItem(name,children){return{id:lodash_uniqueId__WEBPACK_IMPORTED_MODULE_1___default()(),name,children}}const Default={render:Template,args:{textFieldLabel:"Enter and select a drug to see its cost under each plan.",textFieldHint:"Type a letter to see results, then use ARROW keys to change options, ENTER key to make a selection, ESC to dismiss.",items:[makeItem("Acetaminophen"),makeItem("Advil"),makeItem("Benadryl"),makeItem("Claritin"),makeItem("Detrol"),makeItem("Excedrin"),makeItem("Flonase"),makeItem("Gas-X"),makeItem("Hydrocortisone"),makeItem("Ibuprofen"),makeItem("Insulin glargine"),makeItem("Jublia"),makeItem("Ketoprofen"),makeItem("Lidocaine"),makeItem("Lunestra"),makeItem("Melatonin"),makeItem("Meloxicam"),makeItem("Neosporin"),makeItem("Oxycodone"),makeItem("Prednisone"),makeItem("Prilosec"),makeItem("Quinine"),makeItem("Robitussin"),makeItem("Sudafed"),makeItem("Tamiflu"),makeItem("Unisom"),makeItem("Vicodin"),makeItem("Warfarin"),makeItem("Xanax"),makeItem("Yonsa"),makeItem("Zyrtec")]}},LabeledList={render:Template,args:{textFieldLabel:"Search for and select your county.",textFieldHint:'Type "C" then use ARROW keys to change options, ENTER key to make a selection, ESC to dismiss.',label:"Select from the options below:",items:[makeItem("Cook County, IL"),makeItem("Cook County, MD"),makeItem("Cook County, TN"),makeItem("Cook County, AK"),makeItem("Cook County, FL"),makeItem("Cook County, AL"),makeItem("Cook County, WA"),makeItem("Cook County, OR")]}},CustomMarkup={render:Template,args:{textFieldLabel:'Select a snack that starts with "C".',textFieldHint:'Type "C" to start seeing a list of snacks. Clicking the last item should not change the input value to "Search all snacks"',label:"Select from the options below:",items:[makeItem("Carrots (1)",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.HY,{children:["Carrots ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("strong",{children:"(1)"})]})),makeItem("Cookies (3)",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.HY,{children:["Cookies ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("strong",{children:"(3)"})]})),makeItem("Crackers (2)",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.BX)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.HY,{children:["Crackers ",(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("strong",{children:"(2)"})]})),{children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_3__.tZ)("a",{href:"#snacks",onClick:()=>console.log("Searching for all the snacks!"),children:"Search all snacks"}),className:"ds-c-autocomplete__search-all",isResult:!1}]},parameters:{docs:{source:{code:"Disabled for this story. See https://github.com/storybookjs/storybook/issues/11554"}}}},LoadingMessage={render:Template,args:{clearSearchButton:!1,loading:!0,items:[],textFieldLabel:"This will only show a loading message.",textFieldHint:"List should return string Loading to simulate async data call."}},NoResults={render:Template,args:{items:[],clearSearchButton:!1,textFieldLabel:'This will show a "no results" message.',textFieldHint:'Start typing, but you’ll only get a "no results" message.'}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: ({\n    textFieldLabel: 'Enter and select a drug to see its cost under each plan.',\n    textFieldHint: 'Type a letter to see results, then use ARROW keys to change options, ENTER key to make a selection, ESC to dismiss.',\n    items: [makeItem('Acetaminophen'), makeItem('Advil'), makeItem('Benadryl'), makeItem('Claritin'), makeItem('Detrol'), makeItem('Excedrin'), makeItem('Flonase'), makeItem('Gas-X'), makeItem('Hydrocortisone'), makeItem('Ibuprofen'), makeItem('Insulin glargine'), makeItem('Jublia'), makeItem('Ketoprofen'), makeItem('Lidocaine'), makeItem('Lunestra'), makeItem('Melatonin'), makeItem('Meloxicam'), makeItem('Neosporin'), makeItem('Oxycodone'), makeItem('Prednisone'), makeItem('Prilosec'), makeItem('Quinine'), makeItem('Robitussin'), makeItem('Sudafed'), makeItem('Tamiflu'), makeItem('Unisom'), makeItem('Vicodin'), makeItem('Warfarin'), makeItem('Xanax'), makeItem('Yonsa'), makeItem('Zyrtec')]\n  } as any)\n}",...Default.parameters?.docs?.source}}},LabeledList.parameters={...LabeledList.parameters,docs:{...LabeledList.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: ({\n    textFieldLabel: 'Search for and select your county.',\n    textFieldHint: 'Type \"C\" then use ARROW keys to change options, ENTER key to make a selection, ESC to dismiss.',\n    label: 'Select from the options below:',\n    items: [makeItem('Cook County, IL'), makeItem('Cook County, MD'), makeItem('Cook County, TN'), makeItem('Cook County, AK'), makeItem('Cook County, FL'), makeItem('Cook County, AL'), makeItem('Cook County, WA'), makeItem('Cook County, OR')]\n  } as any)\n}",...LabeledList.parameters?.docs?.source}}},CustomMarkup.parameters={...CustomMarkup.parameters,docs:{...CustomMarkup.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: ({\n    textFieldLabel: 'Select a snack that starts with \"C\".',\n    textFieldHint: 'Type \"C\" to start seeing a list of snacks. Clicking the last item should not change the input value to \"Search all snacks\"',\n    label: 'Select from the options below:',\n    items: [makeItem('Carrots (1)', <>\n          Carrots <strong>(1)</strong>\n        </>), makeItem('Cookies (3)', <>\n          Cookies <strong>(3)</strong>\n        </>), makeItem('Crackers (2)', <>\n          Crackers <strong>(2)</strong>\n        </>), {\n      children: <a href=\"#snacks\" onClick={() => console.log('Searching for all the snacks!')}>\n            Search all snacks\n          </a>,\n      className: 'ds-c-autocomplete__search-all',\n      isResult: false\n    }]\n  } as any),\n  parameters: {\n    docs: {\n      source: {\n        code: 'Disabled for this story. See https://github.com/storybookjs/storybook/issues/11554'\n      }\n    }\n  }\n}",...CustomMarkup.parameters?.docs?.source}}},LoadingMessage.parameters={...LoadingMessage.parameters,docs:{...LoadingMessage.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: ({\n    clearSearchButton: false,\n    loading: true,\n    items: [],\n    textFieldLabel: 'This will only show a loading message.',\n    textFieldHint: 'List should return string Loading to simulate async data call.'\n  } as any)\n}",...LoadingMessage.parameters?.docs?.source}}},NoResults.parameters={...NoResults.parameters,docs:{...NoResults.parameters?.docs,source:{originalSource:"{\n  render: Template,\n  args: ({\n    items: [],\n    clearSearchButton: false,\n    textFieldLabel: 'This will show a \"no results\" message.',\n    textFieldHint: 'Start typing, but you’ll only get a \"no results\" message.'\n  } as any)\n}",...NoResults.parameters?.docs?.source}}};const __namedExportsOrder=["Default","LabeledList","CustomMarkup","LoadingMessage","NoResults"]}}]);