(globalThis.webpackChunkdesign_system=globalThis.webpackChunkdesign_system||[]).push([[7175],{"./packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Z:()=>Footer_PrivacySettingsLink});var compat_module=__webpack_require__("./node_modules/preact/compat/dist/compat.module.js"),ev_emitter=__webpack_require__("./node_modules/ev-emitter/ev-emitter.js"),ev_emitter_default=__webpack_require__.n(ev_emitter),classnames=__webpack_require__("./node_modules/classnames/index.js"),classnames_default=__webpack_require__.n(classnames),useId=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/useId.js"),i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js"),SvgIcon=__webpack_require__("./packages/design-system/dist/react-components/esm/Icons/SvgIcon.js"),jsx_runtime=__webpack_require__("./node_modules/preact/compat/jsx-runtime.mjs");const defaultProps={className:"",viewBox:"37 2 135 135"};function AlertCircleIcon(props){const iconCssClasses=`ds-c-icon--alert-circle ${props.className||""}`;return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.alertCircle"),...defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.821 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.351 2.798 21.82 8.392 31.408 5.595 9.584 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771C167.773 94.82 170.57 84.35 170.57 73c0-11.351-2.797-21.822-8.39-31.408zm-43.75 70.433c0 .761-.246 1.398-.734 1.914s-1.086.773-1.793.773H100.26c-.706 0-1.331-.271-1.874-.814-.543-.543-.814-1.168-.814-1.873V96.546c0-.706.271-1.331.814-1.874.543-.543 1.168-.814 1.874-.814h15.643c.707 0 1.306.258 1.793.773.488.518.734 1.154.734 1.915v15.479zm-.164-28.026c-.055.543-.339 1.019-.854 1.426-.517.407-1.154.61-1.914.61h-15.073c-.761 0-1.413-.203-1.956-.61-.543-.407-.815-.883-.815-1.426l-1.385-50.595c0-.653.271-1.141.814-1.467.544-.434 1.196-.652 1.956-.652h17.926c.761 0 1.412.217 1.955.652.543.326.813.815.813 1.467l-1.467 50.595z"})})}function InlineError(_ref){let{children,className,id,inversed,...otherProps}=_ref;const classes=classnames_default()("ds-c-inline-error",{"ds-c-inline-error--inverse":inversed},className);return(0,jsx_runtime.BX)("p",{...otherProps,className:classes,id:(0,useId.Z)("inline-error--",id),"aria-live":"assertive","aria-atomic":"true",children:[(0,jsx_runtime.tZ)(AlertCircleIcon,{viewBox:"36 -12 186 186"}),(0,jsx_runtime.tZ)("span",{className:"ds-u-visibility--screen-reader",children:`${(0,i18n.t)("inlineError.prefix")}: `}),children]})}const InlineError_InlineError=InlineError,Hint=_ref=>{let{children,className,id,inversed,requirementLabel,...otherProps}=_ref;const hintClasses=classnames_default()("ds-c-hint",inversed&&"ds-c-hint--inverse",className);let hintPadding;return requirementLabel&&children&&("string"==typeof requirementLabel&&(requirementLabel=requirementLabel.trim().replace(/\.$/,""),requirementLabel+="."),hintPadding=" "),(0,jsx_runtime.BX)("p",{...otherProps,id,className:hintClasses,children:[requirementLabel,hintPadding,children]})},Label=props=>{const{fieldId,id,children,component,hint,hintId,className,inversed,errorMessage,errorId,requirementLabel,...labelProps}=props;let hintElement;(hint||requirementLabel)&&(hintElement=(0,jsx_runtime.tZ)(Hint,{requirementLabel,inversed,id:hintId,children:hint}));let errorElement=errorMessage;"string"==typeof errorMessage&&(errorElement=(0,jsx_runtime.tZ)(InlineError,{id:errorId,children:errorMessage}));let htmlFor=fieldId;"legend"===component&&fieldId&&(console.warn("The `for` attribute is invalid for legends. Omitting `fieldId` from rendered element."),htmlFor=void 0);const ComponentType=component,classes=classnames_default()("ds-c-label",className,inversed&&"ds-c-label--inverse");return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)(ComponentType,{className:classes,htmlFor,id,...labelProps,children}),hintElement,errorElement]})};Label.defaultProps={component:"label"};function useLabelProps(props){const labelId=props.labelId??`${props.id}__label`,{label,labelClassName,inversed}=props;return{children:label,className:labelClassName,id:labelId,inversed}}function useHint(props){const{hint,inversed,requirementLabel}=props;let hintElement,hintId;return(hint||requirementLabel)&&(hintId=props.hintId??`${props.id}__hint`,hintElement=(0,jsx_runtime.tZ)(Hint,{requirementLabel,inversed,id:hintId,children:hint})),{hintId,hintElement}}const utilities_cleanFieldProps=function cleanFieldProps(props){const newProps={...props};return delete newProps.className,delete newProps.errorId,delete newProps.errorMessage,delete newProps.errorMessageClassName,delete newProps.errorPlacement,delete newProps.hint,delete newProps.hintId,delete newProps.requirementLabel,delete newProps.labelId,delete newProps.label,delete newProps.labelClassName,newProps},utilities_mergeIds=classnames_default();const utilities_describeField=function describeField(props){return utilities_mergeIds(props["aria-describedby"],props.errorId,props.hintId)||void 0},dsChoiceEmitter=new(ev_emitter_default()),ChoiceList_Choice=props=>{const initialCheckedState=props.checked??props.defaultChecked,[internalCheckedState,setChecked]=(0,compat_module.useState)(initialCheckedState),isControlled=void 0!==props.checked,checked=isControlled?props.checked:internalCheckedState,radioCheckedEventName=`${props.name}-radio-checked`,id=(0,useId.Z)("choice--",props.id),{hintId,hintElement}=useHint({...props,id}),labelProps=useLabelProps({...props,id});let errorId,errorElement;props.errorMessage&&(errorId=props.errorId??`${props.id}__error`,errorElement=(0,jsx_runtime.tZ)(InlineError,{id:errorId,inversed:props.inversed,className:props.errorMessageClassName,children:props.errorMessage})),(0,compat_module.useEffect)((()=>{if("radio"!==props.type||isControlled)return;const handleRadioChecked=checkedId=>{checkedId!==id&&setChecked(!1)};return dsChoiceEmitter.on(radioCheckedEventName,handleRadioChecked),()=>{dsChoiceEmitter.off(radioCheckedEventName,handleRadioChecked)}}),[setChecked]);const{"aria-live":ariaLive,"aria-relevant":ariaRelevant,"aria-atomic":ariaAtomic,className,inversed,inputClassName,inputRef,size,checkedChildren,uncheckedChildren,...inputProps}=props;return(0,jsx_runtime.BX)("div",{className,"aria-live":ariaLive??(checkedChildren?"polite":null),"aria-relevant":ariaRelevant??(checkedChildren?"additions text":null),"aria-atomic":ariaAtomic??(checkedChildren?"false":null),children:[(0,jsx_runtime.BX)("div",{className:"ds-c-choice-wrapper",children:[(0,jsx_runtime.tZ)("input",{...utilities_cleanFieldProps(inputProps),id,className:classnames_default()(inputClassName,"ds-c-choice",{"ds-c-choice--inverse":inversed,"ds-c-choice--small":"small"===size}),onChange:function handleChange(event){props.onChange&&props.onChange(event),isControlled||(setChecked(event.target.checked),"radio"===props.type&&event.target.checked&&dsChoiceEmitter.emitEvent(radioCheckedEventName,[id]))},ref:inputRef,"aria-describedby":utilities_describeField({...props,errorId,hintId})}),(0,jsx_runtime.tZ)(Label,{...labelProps,fieldId:id}),hintElement,errorElement]}),checked?checkedChildren:uncheckedChildren]})};var config=__webpack_require__("./packages/design-system/dist/react-components/esm/config.js");const ChoiceList_ChoiceList=props=>{const{onBlur,onComponentBlur,choices}=props,id=(0,useId.Z)("choice-list--",props.id);const choiceRefs=[],handleBlur=evt=>{onBlur&&onBlur(evt),onComponentBlur&&handleComponentBlur(evt)},handleComponentBlur=evt=>{setTimeout((()=>{choiceRefs.includes(document.activeElement)||onComponentBlur(evt)}),20)},{errorId,topError,bottomError,invalid}=function useInlineError(props){const errorId=props.errorId??`${props.id}__error`,{errorMessage,errorMessageClassName,errorPlacement=(0,config.vc)().errorPlacementDefault,inversed}=props,errorElement=errorMessage?(0,jsx_runtime.tZ)(InlineError_InlineError,{id:errorId,inversed,className:classnames_default()(errorMessageClassName,"bottom"===errorPlacement&&"ds-c-inline-error--bottom"),children:errorMessage}):void 0;let topError,bottomError;return"top"===errorPlacement?topError=errorElement:bottomError=errorElement,{errorId:errorMessage?errorId:void 0,invalid:props["aria-invalid"]??!!errorMessage,topError,bottomError}}({...props,id}),{hintId,hintElement}=useHint({...props,id}),labelProps=useLabelProps({...props,id}),choiceItems=choices.map(((choiceProps,index)=>{const completeChoiceProps={id:`${id}__choice--${index}`,...choiceProps,inversed:props.inversed,name:props.name,onBlur:handleBlur,onChange:props.onChange,size:props.size,type:props.type,inputClassName:classnames_default()(choiceProps.inputClassName,{"ds-c-choice--error":props.errorMessage}),disabled:choiceProps.disabled||props.disabled,inputRef:ref=>{choiceRefs.push(ref),choiceProps.inputRef&&choiceProps.inputRef(ref)}};return(0,jsx_runtime.tZ)(ChoiceList_Choice,{...completeChoiceProps},choiceProps.value)}));return(0,jsx_runtime.BX)("fieldset",{"aria-invalid":invalid,"aria-describedby":utilities_describeField({...props,hintId,errorId}),className:classnames_default()("ds-c-fieldset",props.className),role:"radio"===props.type?"radiogroup":null,children:[(0,jsx_runtime.tZ)(Label,{component:"legend",...labelProps}),hintElement,topError,choiceItems,bottomError]})},Table_TableRow=_ref=>{let{children,_isTableHeadChild,...tableRowProps}=_ref;return(0,jsx_runtime.tZ)("tr",{role:"row",...tableRowProps,children:_isTableHeadChild?compat_module.Children.map(children,(child=>child&&child.props?(0,compat_module.cloneElement)(child,{_isTableHeadChild}):child)):children})},Table_TableContext=(0,compat_module.createContext)({stackable:!1,warningDisabled:!1}),TableCell=_ref=>{let{align,children,className,component,headers,id,scope,stackedTitle,stackedClassName,_isTableHeadChild,...tableCellProps}=_ref;const{stackable,warningDisabled}=(0,compat_module.useContext)(Table_TableContext);let Component;Component=component||(_isTableHeadChild?"th":"td");let role="cell";_isTableHeadChild?role="columnheader":"th"===component&&(role="rowheader");let defaultScope=scope;!defaultScope&&_isTableHeadChild&&(defaultScope="col");const alignClassName=align?`ds-u-text-align--${align}`:null,classes=classnames_default()(alignClassName,className);return(0,jsx_runtime.tZ)(Component,{className:classes,role,scope:defaultScope,headers,id,"data-title":stackedTitle,...tableCellProps,children})};TableCell.defaultProps={align:"left"};const Table_TableCell=TableCell;var mergeRefs=__webpack_require__("./packages/design-system/dist/react-components/esm/utilities/mergeRefs.js");const useAutoFocus=autoFocus=>{const ref=(0,compat_module.useRef)();return(0,compat_module.useEffect)((()=>{autoFocus&&ref.current?.focus&&ref.current?.focus()}),[ref,autoFocus]),ref};var useAnalyticsContent=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/useAnalyticsContent.js"),events=__webpack_require__("./packages/design-system/dist/react-components/esm/analytics/events.js");const CheckCircleIcon_defaultProps={className:"",viewBox:"38 7 135 135"};function CheckCircleIcon(props){const iconCssClasses=`ds-c-icon--check-circle ${props.className||""}`;return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.checkCircle"),...CheckCircleIcon_defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zm-13.608 21.876l-44.239 44.239c-1.032 1.032-2.281 1.549-3.748 1.549-1.412 0-2.634-.517-3.666-1.549L67.425 78.215c-.977-.979-1.466-2.199-1.466-3.666 0-1.521.488-2.771 1.466-3.749l7.414-7.332c1.033-1.032 2.254-1.548 3.667-1.548s2.635.516 3.667 1.548l18.413 18.413 33.241-33.16c1.032-1.032 2.254-1.548 3.666-1.548 1.411 0 2.635.516 3.666 1.548l7.414 7.333c.979.977 1.467 2.226 1.467 3.747 0 1.467-.488 2.689-1.468 3.667z"})})}const WarningIcon_defaultProps={className:"",viewBox:"27 0 160 135"};function WarningIcon(props){const iconCssClasses=`ds-c-icon--warning ${props.className||""}`;return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.warning"),...WarningIcon_defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("path",{d:"M179.695 125.388L117.126 10.673a10.39 10.39 0 00-3.832-3.992 10.1 10.1 0 00-5.295-1.467c-1.901 0-3.667.49-5.296 1.467s-2.906 2.308-3.829 3.992L36.303 125.388c-1.901 3.423-1.847 6.845.163 10.267a10.24 10.24 0 003.789 3.746 10.188 10.188 0 005.174 1.387H170.57c1.849 0 3.572-.463 5.175-1.387a10.24 10.24 0 003.789-3.746c2.01-3.423 2.064-6.844.161-10.267zm-61.265-8.148c0 .76-.259 1.398-.773 1.914-.516.516-1.127.773-1.834.773H100.18c-.706 0-1.317-.257-1.833-.773-.516-.517-.774-1.154-.774-1.914v-15.48c0-.76.258-1.397.774-1.914.516-.516 1.126-.773 1.833-.773h15.642c.707 0 1.318.257 1.834.773.515.517.773 1.154.773 1.914v15.48zm-.162-30.47c-.056.543-.341.991-.856 1.344-.517.354-1.154.529-1.915.529h-15.073c-.76 0-1.412-.176-1.955-.529-.544-.354-.815-.801-.815-1.346l-1.385-37.231c0-.761.272-1.331.815-1.711.706-.597 1.358-.896 1.956-.896h17.924c.598 0 1.25.298 1.956.896.543.38.813.896.813 1.548l-1.465 37.396z"})})}const InfoCircleIcon_defaultProps={className:"",viewBox:"37 2 135 135"};function InfoCircleIcon(props){const iconCssClasses=`ds-c-icon--info-circle ${props.className||""}`;return(0,jsx_runtime.tZ)(SvgIcon.l,{title:(0,i18n.t)("icons.infoCircle"),...InfoCircleIcon_defaultProps,...props,className:iconCssClasses,children:(0,jsx_runtime.tZ)("path",{d:"M162.18 41.592c-5.595-9.586-13.185-17.176-22.771-22.771-9.588-5.595-20.055-8.392-31.408-8.392-11.352 0-21.822 2.797-31.408 8.392-9.587 5.594-17.177 13.184-22.772 22.771-5.596 9.587-8.393 20.057-8.393 31.408 0 11.352 2.798 21.82 8.392 31.408 5.595 9.585 13.185 17.176 22.772 22.771 9.587 5.595 20.056 8.392 31.408 8.392s21.822-2.797 31.408-8.392c9.586-5.594 17.176-13.185 22.771-22.771 5.594-9.587 8.391-20.057 8.391-31.408 0-11.352-2.797-21.822-8.39-31.408zM97.572 26.071c0-.761.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h15.644c.76 0 1.385.245 1.872.733.488.489.734 1.113.734 1.874v13.036c0 .76-.246 1.385-.734 1.873-.487.489-1.112.733-1.872.733h-15.644c-.76 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V26.071zm31.285 86.036c0 .76-.246 1.385-.733 1.872-.487.489-1.112.733-1.874.733h-36.5c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.873V99.07c0-.762.244-1.385.733-1.874.489-.488 1.114-.733 1.874-.733h7.822V70.392H89.75c-.761 0-1.385-.244-1.874-.733-.489-.488-.733-1.113-.733-1.874V54.75c0-.761.244-1.385.733-1.874.489-.489 1.114-.733 1.874-.733h26.073c.76 0 1.385.244 1.872.733.488.489.734 1.113.734 1.874v41.714h7.82c.761 0 1.386.245 1.874.733.487.488.733 1.113.733 1.874v13.036z"})})}const Alert=props=>{const{headingRef,bodyRef}=function useAlertAnalytics(_ref){let{analytics,analyticsLabelOverride,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction,variation}=_ref;const[headingRef,bodyRef]=(0,useAnalyticsContent.o)({onMount:content=>{if(!0!==analytics&&(!(0,config.vc)().alertSendsAnalytics||!1===analytics))return;if(!variation)return;const eventHeadingText=analyticsLabelOverride??content;eventHeadingText?onAnalyticsEvent({event_name:"alert_impression",event_type:events.tw.UI_INTERACTION,event_action:"alert impression",event_extension:events.RW,event_category:events.Jk.UI_COMPONENTS,event_label:eventHeadingText,heading:eventHeadingText,type:variation}):console.error("No content found for Alert analytics event")}});return{headingRef,bodyRef}}(props),focusRef=useAutoFocus(props.autoFocus),rootId=(0,useId.Z)("alert--",props.id),headingId=props.headingId??`${rootId}__heading`,a11yLabelId=`${rootId}__a11y-label`;const{children,className,autoFocus,heading,headingId:_headingId,headingLevel,hideIcon,alertRef,role,variation,weight,analytics,analyticsLabelOverride,analyticsEventTypeOverride,onAnalyticsEvent,...alertProps}=props;let headingElement;if(heading){const Heading=`h${headingLevel}`;headingElement=(0,jsx_runtime.tZ)(Heading,{className:"ds-c-alert__heading",children:heading})}const classes=classnames_default()("ds-c-alert",hideIcon&&"ds-c-alert--hide-icon",variation&&`ds-c-alert--${variation}`,weight&&`ds-c-alert--${weight}`,className),a11yLabelText=(0,i18n.t)(`alert.${variation??"defaultLabel"}`),a11yLabel=(0,jsx_runtime.tZ)("span",{className:"ds-c-alert__a11y-label ds-u-visibility--screen-reader",id:a11yLabelId,children:`${a11yLabelText}: `});return(0,jsx_runtime.BX)("div",{className:classes,ref:(0,mergeRefs.Z)([alertRef,focusRef]),tabIndex:alertRef||autoFocus?-1:null,role,"aria-labelledby":heading?headingId:a11yLabelId,...alertProps,children:[function getIcon(){const iconClass="ds-c-alert__icon";if(hideIcon)return null;switch(variation){case"error":return(0,jsx_runtime.tZ)(AlertCircleIcon,{className:iconClass});case"success":return(0,jsx_runtime.tZ)(CheckCircleIcon,{className:iconClass});case"warn":return(0,jsx_runtime.tZ)(WarningIcon,{className:iconClass});default:return(0,jsx_runtime.tZ)(InfoCircleIcon,{className:iconClass})}}(),(0,jsx_runtime.BX)("div",{className:"ds-c-alert__body",id:headingId,ref:bodyRef,children:[heading?(0,jsx_runtime.BX)("div",{className:"ds-c-alert__header ds-c-alert__heading",ref:headingRef,children:[a11yLabel,headingElement]}):a11yLabel,children]})]})};Alert.defaultProps={role:"region",headingLevel:"2"};const Alert_Alert=Alert,TableCaption=_ref=>{let{children,className,_id,_scrollActive,_scrollableNotice,...tableCaptionProps}=_ref;const classes=classnames_default()("ds-c-table__caption",className);return(0,jsx_runtime.BX)("caption",{className:classes,id:_id,...tableCaptionProps,children:[children,_scrollActive&&_scrollableNotice]})};TableCaption.displayName="TableCaption";const Table_TableCaption=TableCaption;const utilities_debounce=function debounce(fn,ms){var _this=this;let timer;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++)args[_key]=arguments[_key];clearTimeout(timer),timer=setTimeout((()=>{timer=null,fn.apply(_this,args)}),ms)}};const Table=_ref=>{let{borderless,className,compact,stackable,stackableBreakpoint,striped,scrollable,scrollableNotice,warningDisabled,children,id,...tableProps}=_ref;const[scrollActive,setScrollActive]=(0,compat_module.useState)(!1),captionId=(0,useId.Z)("table-caption--",id);const containerRef=(0,compat_module.useRef)();(0,compat_module.useEffect)((()=>{if(!window||!scrollable)return;const handleResize=()=>{if(containerRef.current){const{scrollWidth,clientWidth}=containerRef.current;setScrollActive(scrollWidth>clientWidth)}};handleResize();const debounceHandleResize=utilities_debounce(handleResize,500);return window.addEventListener("resize",debounceHandleResize),()=>{window.removeEventListener("resize",debounceHandleResize)}}),[setScrollActive,scrollable]);const classes=classnames_default()("ds-c-table",borderless?"ds-c-table--borderless":null,compact?"ds-c-table--compact":null,striped?"ds-c-table--striped":null,stackable?`ds-c-${stackableBreakpoint}-table--stacked`:null,className),attributeScrollable=scrollable&&{className:"ds-c-table__wrapper",role:"region","aria-labelledby":captionId,tabIndex:scrollActive?0:null},contextValue={stackable:!!stackable,warningDisabled:!!warningDisabled},renderedChildren=compat_module.Children.map(children,(child=>function isTableCaption(child){if(!child||!(0,compat_module.isValidElement)(child))return!1;const componentName=child.type?.displayName||child.type?.name;return child.type===Table_TableCaption||"TableCaption"===componentName}(child)&&scrollable?(0,compat_module.cloneElement)(child,{_id:captionId,_scrollActive:scrollActive,_scrollableNotice:scrollableNotice}):child)),table=(0,jsx_runtime.tZ)(Table_TableContext.Provider,{value:contextValue,children:(0,jsx_runtime.tZ)("table",{className:classes,...tableProps,children:renderedChildren})});return scrollable?(0,jsx_runtime.tZ)("div",{ref:containerRef,"aria-live":"polite","aria-relevant":"additions",...attributeScrollable,children:table}):table};Table.defaultProps={scrollableNotice:(0,jsx_runtime.tZ)(Alert_Alert,{className:"ds-c-table__scroll-alert",role:"status",children:(0,jsx_runtime.tZ)("p",{className:"ds-c-alert__text",children:"Scroll using arrow keys to see more"})}),stackableBreakpoint:"sm"};const Table_Table=Table,Table_TableHead=_ref=>{let{children,...tableHeadProps}=_ref;return(0,jsx_runtime.tZ)("thead",{role:"rowgroup",...tableHeadProps,children:compat_module.Children.map(children,(child=>child&&child.props?(0,compat_module.cloneElement)(child,{_isTableHeadChild:!0}):child))})},Table_TableBody=_ref=>{let{children,...tableBodyProps}=_ref;return(0,jsx_runtime.tZ)("tbody",{role:"rowgroup",...tableBodyProps,children})},PrivacySettingsDialog_PrivacySettingsTable=_ref=>{let{domain,privacySettings,setPrivacySetting}=_ref;function renderToggle(settingsKey,value,category,description){const choices=[{label:(0,i18n.t)("privacy.allow"),value:"0",checked:"0"===value},{label:(0,i18n.t)("privacy.dontAllow"),value:"1",checked:"1"===value}],label=(0,jsx_runtime.tZ)("span",{className:"ds-u-visibility--screen-reader",children:category});return(0,jsx_runtime.tZ)(ChoiceList_ChoiceList,{type:"radio",choices,onChange:event=>{setPrivacySetting(settingsKey,event.target.value)},className:"ds-u-margin-top--0",label,"aria-label":description,name:`cookie-${settingsKey}`})}return(0,jsx_runtime.BX)(Table_Table,{className:"ds-c-privacy-settings-table ds-u-margin-top--2 ds-u-lg-margin--0",borderless:!0,stackable:!0,stackableBreakpoint:"md",children:[(0,jsx_runtime.tZ)(Table_TableHead,{children:(0,jsx_runtime.BX)(Table_TableRow,{children:[(0,jsx_runtime.tZ)(Table_TableCell,{id:"privacy-settings-header-category",children:(0,i18n.t)("privacy.category")}),(0,jsx_runtime.tZ)(Table_TableCell,{id:"privacy-settings-header-description",children:(0,i18n.t)("privacy.description")}),(0,jsx_runtime.tZ)(Table_TableCell,{id:"privacy-settings-header-status",children:(0,i18n.t)("privacy.status")})]})}),(0,jsx_runtime.tZ)(Table_TableBody,{children:privacySettings.map((function renderRow(_ref2){let{settingsKey,translationKey,value}=_ref2;const category=(0,i18n.t)(`privacy.${translationKey}.category`),description=(0,i18n.t)(`privacy.${translationKey}.description`,{domain});return(0,jsx_runtime.BX)(Table_TableRow,{children:[(0,jsx_runtime.tZ)(Table_TableCell,{headers:"privacy-settings-header-category",stackedTitle:(0,i18n.t)("privacy.category"),children:category}),(0,jsx_runtime.tZ)(Table_TableCell,{headers:"privacy-settings-header-description",stackedTitle:(0,i18n.t)("privacy.description"),children:description}),(0,jsx_runtime.tZ)(Table_TableCell,{headers:"privacy-settings-header-status",stackedTitle:(0,i18n.t)("privacy.status"),children:renderToggle(settingsKey,value,category,description)})]},settingsKey)}))})]})};var Button=__webpack_require__("./packages/design-system/dist/react-components/esm/Button/Button.js"),CloseIconThin=__webpack_require__("./packages/design-system/dist/react-components/esm/Icons/CloseIconThin.js");const CloseButton_CloseButton=_ref=>{let{className,id:idProp,...buttonAttributes}=_ref;const id=(0,useId.Z)("close-button--",idProp);return(0,jsx_runtime.tZ)("button",{type:"button",...buttonAttributes,className:classnames_default()("ds-c-close-button",className),id,children:(0,jsx_runtime.tZ)(CloseIconThin.g,{ariaHidden:!1,id:`${id}__icon`})})};var NativeDialog=__webpack_require__("./packages/design-system/dist/react-components/esm/NativeDialog/NativeDialog.js");const Dialog_useDialogAnalytics=function useDialogAnalytics(_ref){let{analytics,analyticsLabelOverride,onAnalyticsEvent=(0,config.vc)().defaultAnalyticsFunction}=_ref;function sendDialogEvent(content,eventAttributes){if(!0!==analytics&&(!(0,config.vc)().dialogSendsAnalytics||!1===analytics))return;const eventHeadingText=analyticsLabelOverride??content;eventHeadingText?onAnalyticsEvent({event_type:events.tw.UI_INTERACTION,event_category:events.Jk.UI_COMPONENTS,event_label:eventHeadingText,event_extension:events.RW,heading:eventHeadingText,...eventAttributes}):console.error("No content found for Dialog analytics event")}const[headingRef]=(0,useAnalyticsContent.o)({onMount:content=>{sendDialogEvent(content,{event_name:"modal_impression",event_action:"modal impression"})},onUnmount:content=>{sendDialogEvent(content,{event_name:"modal_closed",event_action:"closed modal"})}});return headingRef},OPEN=_state=>{const y=window.scrollY??0;return document.body.classList.add("ds--dialog-open"),document.body.style.setProperty("--body_top--dialog-open",`-${y}px`),document.documentElement.style.setProperty("scroll-behavior","auto"),{name:"open",bodyScrollY:y}},CLOSE=state=>(document.body.classList.remove("ds--dialog-open"),document.body.style.removeProperty("--body_top--dialog-open"),window.scrollTo({top:state.bodyScrollY,behavior:"auto"}),document.documentElement.style.removeProperty("scroll-behavior"),{name:"closed"}),reducer=(state,transition)=>"open"===state.name&&transition===CLOSE||"closed"===state.name&&transition===OPEN?transition(state):state;const Dialog=props=>{const{actions,actionsClassName,alert,analytics,analyticsLabelOverride,analyticsEventTypeOverride,onAnalyticsEvent,ariaCloseLabel,children,className,headerClassName,heading,id,onEnter,onExit,size,...modalProps}=props,rootId=(0,useId.Z)("dialog--",id),headingRef=Dialog_useDialogAnalytics(props),headingId=`${rootId}__heading`,contentId=`${rootId}__content`,dialogClassNames=classnames_default()("ds-c-dialog",className,size&&`ds-c-dialog--${size}`),headerClassNames=classnames_default()("ds-c-dialog__header",headerClassName),actionsClassNames=classnames_default()("ds-c-dialog__actions",actionsClassName),containerRef=(0,compat_module.useRef)();return(0,compat_module.useEffect)((()=>{onEnter&&onEnter()}),[]),(0,compat_module.useEffect)((()=>{containerRef.current?.focus()}),[containerRef]),function useBodyScrollPrevention(isOpen){const[_state,dispatch]=(0,compat_module.useReducer)(reducer,{name:"closed"});(0,compat_module.useLayoutEffect)((()=>{dispatch(isOpen?OPEN:CLOSE)}),[isOpen])}(modalProps.isOpen??!0),(0,jsx_runtime.tZ)(NativeDialog.Z,{className:dialogClassNames,showModal:!0,exit:onExit,...modalProps,id:rootId,boundingBoxRef:containerRef,"aria-labelledby":headingId,children:(0,jsx_runtime.BX)("div",{className:"ds-c-dialog__window",ref:containerRef,tabIndex:-1,children:[(0,jsx_runtime.BX)("div",{className:headerClassNames,children:[heading&&(0,jsx_runtime.tZ)("h2",{className:"ds-c-dialog__heading",id:headingId,ref:headingRef,children:heading}),(0,jsx_runtime.tZ)(CloseButton_CloseButton,{"aria-label":ariaCloseLabel??(0,i18n.t)("dialog.ariaCloseLabel"),className:"ds-c-dialog__close",id:`${rootId}__close`,onClick:onExit})]}),(0,jsx_runtime.BX)("div",{className:"ds-c-dialog__body",children:[(0,jsx_runtime.tZ)("div",{id:contentId,children}),actions&&(0,jsx_runtime.tZ)("div",{className:actionsClassNames,children:actions})]})]})})},COOKIE_MAX_AGE=1095,COOKIE_DOMAIN=function getCookieDomain(){if(isNonBrowserEnv())return;const parts=window.location.hostname.split("."),tld=parts[parts.length-1],domain=parts[parts.length-2];if(domain&&"gov"===tld)return`${domain}.${tld}`}(),defaultSettings={0:"0",c3:"0",c2:"0",c1:"0",c4:"0"};function isNonBrowserEnv(){return"undefined"==typeof window||"undefined"==typeof document}function getPrivacySettings(){const cookieString=function readCookie(name){if(isNonBrowserEnv())return;const item=document.cookie.split(";").map((item=>item.trim().split("="))).find((_ref=>{let[itemName]=_ref;return itemName===name})),value=item?.[1];return"string"==typeof value?decodeURI(value):void 0}("OPTOUTMULTI");if(!cookieString)return COOKIE_DOMAIN&&console.error("Privacy settings error: OPTOUTMULTI cookie is not set. Check to make sure your app has Tealium enabled."),defaultSettings;return cookieString.split("|").reduce(((obj,pair)=>{const[key,value]=pair.split(":");return obj[key]=value,obj}),{})}function setPrivacySettings(settings){!function writeCookie(name,value){if(isNonBrowserEnv())return;const base=`${name}=${encodeURI(value)}`,age=`; max-age=${COOKIE_MAX_AGE}`,domain=COOKIE_DOMAIN?`; domain=${COOKIE_DOMAIN}`:"";document.cookie=`${base}${age}${domain}; path=/`}("OPTOUTMULTI",Object.keys(settings).map((key=>`${key}:${settings[key]}`)).join("|"))}const privacySettingConfigs=[{settingsKey:"c3",translationKey:"advertising"},{settingsKey:"c4",translationKey:"socialMedia"},{settingsKey:"c2",translationKey:"webAnalytics"}],PrivacySettingsDialog=props=>{const[localPrivacySettings,setLocalPrivacySettings]=(0,compat_module.useState)(getPrivacySettings());const{domain,privacyPolicyUrl,thirdPartyPoliciesUrl,...dialogProps}=props,privacySettingsProperties=privacySettingConfigs.map((config=>({...config,value:localPrivacySettings[config.settingsKey]})));let intro=(0,i18n.t)("privacy.introText",{domain});return intro+=" "+(0,i18n.t)("privacy.privacyPolicy",{url:privacyPolicyUrl}),thirdPartyPoliciesUrl&&(intro+=" "+(0,i18n.t)("privacy.thirdPartyPolicies",{url:thirdPartyPoliciesUrl})),intro+=".",(0,jsx_runtime.BX)(Dialog,{...dialogProps,heading:(0,i18n.t)("privacy.dialogTitle",{domain}),size:"full",actions:(0,jsx_runtime.tZ)(Button.z,{variation:"solid",onClick:function savePrivacySettings(){setPrivacySettings(localPrivacySettings),props.onExit()},children:(0,i18n.t)("privacy.save")}),isOpen:props.isOpen,children:[(0,jsx_runtime.tZ)("p",{className:"ds-u-margin-top--0",dangerouslySetInnerHTML:{__html:intro}}),(0,jsx_runtime.tZ)(PrivacySettingsDialog_PrivacySettingsTable,{domain,privacySettings:privacySettingsProperties,setPrivacySetting:function setPrivacySetting(settingsKey,value){setLocalPrivacySettings({...localPrivacySettings,[settingsKey]:value})}})]})};var components_i18n=__webpack_require__("./packages/ds-healthcare-gov/src/components/i18n.ts");const PrivacySettingsLink=props=>{const[showDialog,setShowDialog]=(0,compat_module.useState)(!1),t=(0,components_i18n.$Z)();return(0,jsx_runtime.BX)(jsx_runtime.HY,{children:[(0,jsx_runtime.tZ)("button",{className:props.className,onClick:()=>setShowDialog(!0),children:props.children||t("footer.privacySettings")}),(0,jsx_runtime.tZ)(PrivacySettingsDialog,{isOpen:showDialog,onExit:()=>setShowDialog(!1),domain:"HealthCare.gov",privacyPolicyUrl:"https://www.healthcare.gov/privacy/",thirdPartyPoliciesUrl:"https://www.healthcare.gov/third-party-privacy-policies/"})]})},Footer_PrivacySettingsLink=PrivacySettingsLink;try{PrivacySettingsLink.displayName="PrivacySettingsLink",PrivacySettingsLink.__docgenInfo={description:"",displayName:"PrivacySettingsLink",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx#PrivacySettingsLink"]={docgenInfo:PrivacySettingsLink.__docgenInfo,name:"PrivacySettingsLink",path:"packages/ds-healthcare-gov/src/components/Footer/PrivacySettingsLink.tsx#PrivacySettingsLink"})}catch(__react_docgen_typescript_loader_error){}},"./packages/ds-healthcare-gov/src/components/i18n.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{jb:()=>i18n.jb,t:()=>i18n.t,$Z:()=>i18n.$Z});const en_namespaceObject=JSON.parse('{"footer":{"contactUs":"Contact us","archive":"Archive","a11y":"Accessibility","privacyPolicy":"Privacy policy","privacySettings":"Privacy settings","usingThisSite":"Using this site","disclaimer":"An official website of the U.S. Centers for Medicare &amp; Medicaid Services."},"header":{"close":"Close","closeMenu":"Close menu","deBrokerNameFallback":"the enrollment partner","deConsumerMessage":"Be sure to finish your application before you return to {{brokerName}}\'s website.","español":"Español","langAriaLabel":"CuidadoDeSalud.gov en Español","login":"Log in","logout":"Log out","menu":"Menu","myApplicationsAndCoverage":"My applications & coverage","myProfile":"My profile","openMenu":"Open menu","skipNav":"Skip to main content"}}'),es_namespaceObject=JSON.parse('{"footer":{"contactUs":"Contáctenos","archive":"Archivo","a11y":"Accesibilidad","privacyPolicy":"Política de privacidad","privacySettings":"Configuración de privacidad","usingThisSite":"Usando este sitio","disclaimer":"Un sitio oficial de los Centros de Servicios de Medicare y Medicaid de EE.UU."},"header":{"close":"Cerca","closeMenu":"Cerrar menú","deBrokerNameFallback":"el socio de inscripción","deConsumerMessage":"Asegúrese de terminar su solicitud antes de regresar a la página web de {{brokerName}}","english":"English","langAriaLabel":"Healthcare.gov in English","login":"Iniciar sesión","logout":"Finalizar sesión","menu":"Menú","myApplicationsAndCoverage":"Mis solicitudes & cobertura","myProfile":"Mi perfil","openMenu":"Abrir menú","skipNav":"Ir al contenido principal"}}');var i18n=__webpack_require__("./packages/design-system/dist/react-components/esm/i18n.js");(0,i18n.hk)("en",en_namespaceObject),(0,i18n.hk)("es",es_namespaceObject)},"./node_modules/ev-emitter/ev-emitter.js":function(module,exports,__webpack_require__){var __WEBPACK_AMD_DEFINE_FACTORY__,__WEBPACK_AMD_DEFINE_RESULT__;"undefined"!=typeof window&&window,void 0===(__WEBPACK_AMD_DEFINE_RESULT__="function"==typeof(__WEBPACK_AMD_DEFINE_FACTORY__=function(){"use strict";function EvEmitter(){}var proto=EvEmitter.prototype;return proto.on=function(eventName,listener){if(eventName&&listener){var events=this._events=this._events||{},listeners=events[eventName]=events[eventName]||[];return-1==listeners.indexOf(listener)&&listeners.push(listener),this}},proto.once=function(eventName,listener){if(eventName&&listener){this.on(eventName,listener);var onceEvents=this._onceEvents=this._onceEvents||{};return(onceEvents[eventName]=onceEvents[eventName]||{})[listener]=!0,this}},proto.off=function(eventName,listener){var listeners=this._events&&this._events[eventName];if(listeners&&listeners.length){var index=listeners.indexOf(listener);return-1!=index&&listeners.splice(index,1),this}},proto.emitEvent=function(eventName,args){var listeners=this._events&&this._events[eventName];if(listeners&&listeners.length){listeners=listeners.slice(0),args=args||[];for(var onceListeners=this._onceEvents&&this._onceEvents[eventName],i=0;i<listeners.length;i++){var listener=listeners[i];onceListeners&&onceListeners[listener]&&(this.off(eventName,listener),delete onceListeners[listener]),listener.apply(this,args)}return this}},proto.allOff=function(){delete this._events,delete this._onceEvents},EvEmitter})?__WEBPACK_AMD_DEFINE_FACTORY__.call(exports,__webpack_require__,exports,module):__WEBPACK_AMD_DEFINE_FACTORY__)||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)}}]);