export const id = "defaultVendors-node_modules_react-aria_button_dist_import_mjs-node_modules_react-aria_combobo-cab37a";
export const ids = ["defaultVendors-node_modules_react-aria_button_dist_import_mjs-node_modules_react-aria_combobo-cab37a"];
export const modules = {

/***/ "./node_modules/@react-aria/button/dist/import.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@react-aria/button/dist/import.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useButton": () => (/* binding */ $701a24aa0da5b062$export$ea18c227d4417cc3),
/* harmony export */   "useToggleButton": () => (/* binding */ $55f54f7887471b58$export$51e84d46ca0bc451)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/import.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/import.mjs");




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $701a24aa0da5b062$export$ea18c227d4417cc3(props, ref) {
    let { elementType: elementType = "button" , isDisabled: isDisabled , onPress: onPress , onPressStart: onPressStart , onPressEnd: onPressEnd , onPressChange: onPressChange , preventFocusOnPress: // @ts-ignore - undocumented
    preventFocusOnPress , allowFocusWhenDisabled: // @ts-ignore - undocumented
    allowFocusWhenDisabled , // @ts-ignore
    onClick: deprecatedOnClick , href: href , target: target , rel: rel , type: type = "button"  } = props;
    let additionalProps;
    if (elementType === "button") additionalProps = {
        type: type,
        disabled: isDisabled
    };
    else additionalProps = {
        role: "button",
        tabIndex: isDisabled ? undefined : 0,
        href: elementType === "a" && isDisabled ? undefined : href,
        target: elementType === "a" ? target : undefined,
        type: elementType === "input" ? type : undefined,
        disabled: elementType === "input" ? isDisabled : undefined,
        "aria-disabled": !isDisabled || elementType === "input" ? undefined : isDisabled,
        rel: elementType === "a" ? rel : undefined
    };
    let { pressProps: pressProps , isPressed: isPressed  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_0__.usePress)({
        onPressStart: onPressStart,
        onPressEnd: onPressEnd,
        onPressChange: onPressChange,
        onPress: onPress,
        isDisabled: isDisabled,
        preventFocusOnPress: preventFocusOnPress,
        ref: ref
    });
    let { focusableProps: focusableProps  } = (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_1__.useFocusable)(props, ref);
    if (allowFocusWhenDisabled) focusableProps.tabIndex = isDisabled ? -1 : focusableProps.tabIndex;
    let buttonProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(focusableProps, pressProps, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.filterDOMProps)(props, {
        labelable: true
    }));
    return {
        isPressed: isPressed,
        buttonProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(additionalProps, buttonProps, {
            "aria-haspopup": props["aria-haspopup"],
            "aria-expanded": props["aria-expanded"],
            "aria-controls": props["aria-controls"],
            "aria-pressed": props["aria-pressed"],
            onClick: (e)=>{
                if (deprecatedOnClick) {
                    deprecatedOnClick(e);
                    console.warn("onClick is deprecated, please use onPress");
                }
            }
        })
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $55f54f7887471b58$export$51e84d46ca0bc451(props, state, ref) {
    const { isSelected: isSelected  } = state;
    const { isPressed: isPressed , buttonProps: buttonProps  } = (0, $701a24aa0da5b062$export$ea18c227d4417cc3)({
        ...props,
        onPress: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.chain)(state.toggle, props.onPress)
    }, ref);
    return {
        isPressed: isPressed,
        buttonProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(buttonProps, {
            "aria-pressed": isSelected
        })
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/combobox/dist/import.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@react-aria/combobox/dist/import.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useComboBox": () => (/* binding */ $c350ade66beef0af$export$8c18d1b4f7232bbf)
/* harmony export */ });
/* harmony import */ var _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-aria/live-announcer */ "./node_modules/@react-aria/live-announcer/dist/import.mjs");
/* harmony import */ var _react_aria_overlays__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @react-aria/overlays */ "./node_modules/@react-aria/overlays/dist/import.mjs");
/* harmony import */ var _react_aria_listbox__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/listbox */ "./node_modules/@react-aria/listbox/dist/import.mjs");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/import.mjs");
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/selection */ "./node_modules/@react-aria/selection/dist/import.mjs");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/real-module.mjs");
/* harmony import */ var _react_aria_menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/menu */ "./node_modules/@react-aria/menu/dist/import.mjs");
/* harmony import */ var _react_aria_textfield__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-aria/textfield */ "./node_modules/@react-aria/textfield/dist/import.mjs");











function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 





var $de5926a92e8ebc5b$exports = {};
var $02cb4c75c506befe$exports = {};
$02cb4c75c506befe$exports = {
    "buttonLabel": `عرض المقترحات`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} خيار`,
            other: ()=>`${formatter.number(args.optionCount)} خيارات`
        })} متاحة.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`المجموعة المدخلة ${args.groupTitle}, مع ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} خيار`,
                    other: ()=>`${formatter.number(args.groupCount)} خيارات`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, محدد`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `مقترحات`,
    "selectedAnnouncement": (args)=>`${args.optionText}، محدد`
};


var $568b8163f1e56faf$exports = {};
$568b8163f1e56faf$exports = {
    "buttonLabel": `Покажи предложения`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} опция`,
            other: ()=>`${formatter.number(args.optionCount)} опции`
        })} на разположение.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Въведена група ${args.groupTitle}, с ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} опция`,
                    other: ()=>`${formatter.number(args.groupCount)} опции`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, избрани`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Предложения`,
    "selectedAnnouncement": (args)=>`${args.optionText}, избрани`
};


var $87581c0202d106b8$exports = {};
$87581c0202d106b8$exports = {
    "buttonLabel": `Zobrazit doporučení`,
    "countAnnouncement": (args, formatter)=>`K dispozici ${formatter.plural(args.optionCount, {
            one: ()=>`je ${formatter.number(args.optionCount)} možnost`,
            other: ()=>`jsou/je ${formatter.number(args.optionCount)} možnosti/-í`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadaná skupina „${args.groupTitle}“ ${formatter.plural(args.groupCount, {
                    one: ()=>`s ${formatter.number(args.groupCount)} možností`,
                    other: ()=>`se ${formatter.number(args.groupCount)} možnostmi`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: ` (vybráno)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Návrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybráno`
};


var $a10a0369f5433ed1$exports = {};
$a10a0369f5433ed1$exports = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} mulighed tilgængelig`,
            other: ()=>`${formatter.number(args.optionCount)} muligheder tilgængelige`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angivet gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} mulighed`,
                    other: ()=>`${formatter.number(args.groupCount)} muligheder`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};


var $bfd288727d5cb166$exports = {};
$bfd288727d5cb166$exports = {
    "buttonLabel": `Empfehlungen anzeigen`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} Option`,
            other: ()=>`${formatter.number(args.optionCount)} Optionen`
        })} verfügbar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Eingetretene Gruppe ${args.groupTitle}, mit ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} Option`,
                    other: ()=>`${formatter.number(args.groupCount)} Optionen`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, ausgewählt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Empfehlungen`,
    "selectedAnnouncement": (args)=>`${args.optionText}, ausgewählt`
};


var $ca177778f9a74e3c$exports = {};
$ca177778f9a74e3c$exports = {
    "buttonLabel": `Προβολή προτάσεων`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} επιλογή`,
            other: ()=>`${formatter.number(args.optionCount)} επιλογές `
        })} διαθέσιμες.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Εισαγμένη ομάδα ${args.groupTitle}, με ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} επιλογή`,
                    other: ()=>`${formatter.number(args.groupCount)} επιλογές`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, επιλεγμένο`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Προτάσεις`,
    "selectedAnnouncement": (args)=>`${args.optionText}, επιλέχθηκε`
};


var $9b5aa79ef84beb6c$exports = {};
$9b5aa79ef84beb6c$exports = {
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Entered group ${args.groupTitle}, with ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selected`,
            other: ``
        }, args.isSelected)}`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} available.`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selected`,
    "buttonLabel": `Show suggestions`,
    "listboxLabel": `Suggestions`
};


var $57968e8209de2557$exports = {};
$57968e8209de2557$exports = {
    "buttonLabel": `Mostrar sugerencias`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opción`,
            other: ()=>`${formatter.number(args.optionCount)} opciones`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Se ha unido al grupo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opción`,
                    other: ()=>`${formatter.number(args.groupCount)} opciones`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, seleccionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugerencias`,
    "selectedAnnouncement": (args)=>`${args.optionText}, seleccionado`
};


var $60690790bf4c1c6a$exports = {};
$60690790bf4c1c6a$exports = {
    "buttonLabel": `Kuva soovitused`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} valik`,
            other: ()=>`${formatter.number(args.optionCount)} valikud`
        })} saadaval.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Sisestatud rühm ${args.groupTitle}, valikuga ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} valik`,
                    other: ()=>`${formatter.number(args.groupCount)} valikud`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valitud`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Soovitused`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valitud`
};


var $1101246e8c7d9357$exports = {};
$1101246e8c7d9357$exports = {
    "buttonLabel": `Näytä ehdotukset`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} vaihtoehto`,
            other: ()=>`${formatter.number(args.optionCount)} vaihtoehdot`
        })} saatavilla.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Mentiin ryhmään ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} vaihtoehdon`,
                    other: ()=>`${formatter.number(args.groupCount)} vaihtoehdon`
                })} kanssa.`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valittu`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ehdotukset`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valittu`
};


var $6404b5cb5b241730$exports = {};
$6404b5cb5b241730$exports = {
    "buttonLabel": `Afficher les suggestions`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} option`,
            other: ()=>`${formatter.number(args.optionCount)} options`
        })} disponible(s).`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groupe ${args.groupTitle} saisi, avec ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} option`,
                    other: ()=>`${formatter.number(args.groupCount)} options`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, sélectionné(s)`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggestions`,
    "selectedAnnouncement": (args)=>`${args.optionText}, sélectionné`
};


var $dfeafa702e92e31f$exports = {};
$dfeafa702e92e31f$exports = {
    "buttonLabel": `הצג הצעות`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`אפשרות ${formatter.number(args.optionCount)}`,
            other: ()=>`${formatter.number(args.optionCount)} אפשרויות`
        })} במצב זמין.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`נכנס לקבוצה ${args.groupTitle}, עם ${formatter.plural(args.groupCount, {
                    one: ()=>`אפשרות ${formatter.number(args.groupCount)}`,
                    other: ()=>`${formatter.number(args.groupCount)} אפשרויות`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, נבחר`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `הצעות`,
    "selectedAnnouncement": (args)=>`${args.optionText}, נבחר`
};


var $2d125e0b34676352$exports = {};
$2d125e0b34676352$exports = {
    "buttonLabel": `Prikaži prijedloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno još: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, odabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Prijedlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, odabrano`
};


var $ea029611d7634059$exports = {};
$ea029611d7634059$exports = {
    "buttonLabel": `Javaslatok megjelenítése`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} lehetőség`,
            other: ()=>`${formatter.number(args.optionCount)} lehetőség`
        })} áll rendelkezésre.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Belépett a(z) ${args.groupTitle} csoportba, amely ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} lehetőséget`,
                    other: ()=>`${formatter.number(args.groupCount)} lehetőséget`
                })} tartalmaz. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, kijelölve`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Javaslatok`,
    "selectedAnnouncement": (args)=>`${args.optionText}, kijelölve`
};


var $77f075bb86ad7091$exports = {};
$77f075bb86ad7091$exports = {
    "buttonLabel": `Mostra suggerimenti`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opzione disponibile`,
            other: ()=>`${formatter.number(args.optionCount)} opzioni disponibili`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingresso nel gruppo ${args.groupTitle}, con ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opzione`,
                    other: ()=>`${formatter.number(args.groupCount)} opzioni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selezionato`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggerimenti`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selezionato`
};


var $6e87462e84907983$exports = {};
$6e87462e84907983$exports = {
    "buttonLabel": `候補を表示`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} 個のオプション`,
            other: ()=>`${formatter.number(args.optionCount)} 個のオプション`
        })}を利用できます。`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`入力されたグループ ${args.groupTitle}、${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} 個のオプション`,
                    other: ()=>`${formatter.number(args.groupCount)} 個のオプション`
                })}を含む。`,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `、選択済み`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `候補`,
    "selectedAnnouncement": (args)=>`${args.optionText}、選択済み`
};


var $9246f2c6edc6b232$exports = {};
$9246f2c6edc6b232$exports = {
    "buttonLabel": `제안 사항 표시`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)}개 옵션`,
            other: ()=>`${formatter.number(args.optionCount)}개 옵션`
        })}을 사용할 수 있습니다.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`입력한 그룹 ${args.groupTitle}, ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)}개 옵션`,
                    other: ()=>`${formatter.number(args.groupCount)}개 옵션`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, 선택됨`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `제안`,
    "selectedAnnouncement": (args)=>`${args.optionText}, 선택됨`
};


var $e587accc6c0a434c$exports = {};
$e587accc6c0a434c$exports = {
    "buttonLabel": `Rodyti pasiūlymus`,
    "countAnnouncement": (args, formatter)=>`Yra ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} parinktis`,
            other: ()=>`${formatter.number(args.optionCount)} parinktys (-ių)`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Įvesta grupė ${args.groupTitle}, su ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} parinktimi`,
                    other: ()=>`${formatter.number(args.groupCount)} parinktimis (-ių)`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, pasirinkta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Pasiūlymai`,
    "selectedAnnouncement": (args)=>`${args.optionText}, pasirinkta`
};


var $03a1900e7400b5ab$exports = {};
$03a1900e7400b5ab$exports = {
    "buttonLabel": `Rādīt ieteikumus`,
    "countAnnouncement": (args, formatter)=>`Pieejamo opciju skaits: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcijas`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ievadīta grupa ${args.groupTitle}, ar ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opciju`,
                    other: ()=>`${formatter.number(args.groupCount)} opcijām`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, atlasīta`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Ieteikumi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, atlasīta`
};


var $1387676441be6cf6$exports = {};
$1387676441be6cf6$exports = {
    "buttonLabel": `Vis forslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativer`
        })} finnes.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Angitt gruppe ${args.groupTitle}, med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativer`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valgt`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Forslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valgt`
};


var $17e82ebf0f8ab91f$exports = {};
$17e82ebf0f8ab91f$exports = {
    "buttonLabel": `Suggesties weergeven`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} optie`,
            other: ()=>`${formatter.number(args.optionCount)} opties`
        })} beschikbaar.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Groep ${args.groupTitle} ingevoerd met ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} optie`,
                    other: ()=>`${formatter.number(args.groupCount)} opties`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, geselecteerd`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Suggesties`,
    "selectedAnnouncement": (args)=>`${args.optionText}, geselecteerd`
};


var $2f5377d3471630e5$exports = {};
$2f5377d3471630e5$exports = {
    "buttonLabel": `Wyświetlaj sugestie`,
    "countAnnouncement": (args, formatter)=>`dostępna/dostępne(-nych) ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcja`,
            other: ()=>`${formatter.number(args.optionCount)} opcje(-i)`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Dołączono do grupy ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcją`,
                    other: ()=>`${formatter.number(args.groupCount)} opcjami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, wybrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestie`,
    "selectedAnnouncement": (args)=>`${args.optionText}, wybrano`
};


var $dee9868b6fa95ffe$exports = {};
$dee9868b6fa95ffe$exports = {
    "buttonLabel": `Mostrar sugestões`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opção`,
            other: ()=>`${formatter.number(args.optionCount)} opções`
        })} disponível.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo inserido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opção`,
                    other: ()=>`${formatter.number(args.groupCount)} opções`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestões`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};


var $f8b2e63637cbb5a6$exports = {};
$f8b2e63637cbb5a6$exports = {
    "buttonLabel": `Apresentar sugestões`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opção`,
            other: ()=>`${formatter.number(args.optionCount)} opções`
        })} disponível.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grupo introduzido ${args.groupTitle}, com ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opção`,
                    other: ()=>`${formatter.number(args.groupCount)} opções`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selecionado`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestões`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selecionado`
};


var $46a885db3b44ea95$exports = {};
$46a885db3b44ea95$exports = {
    "buttonLabel": `Afișare sugestii`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opțiune`,
            other: ()=>`${formatter.number(args.optionCount)} opțiuni`
        })} disponibile.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Grup ${args.groupTitle} introdus, cu ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opțiune`,
                    other: ()=>`${formatter.number(args.groupCount)} opțiuni`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, selectat`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Sugestii`,
    "selectedAnnouncement": (args)=>`${args.optionText}, selectat`
};


var $50d8a8f0afa9dee5$exports = {};
$50d8a8f0afa9dee5$exports = {
    "buttonLabel": `Показать предложения`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} параметр`,
            other: ()=>`${formatter.number(args.optionCount)} параметров`
        })} доступно.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Введенная группа ${args.groupTitle}, с ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} параметром`,
                    other: ()=>`${formatter.number(args.groupCount)} параметрами`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, выбранными`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Предложения`,
    "selectedAnnouncement": (args)=>`${args.optionText}, выбрано`
};


var $2867ee6173245507$exports = {};
$2867ee6173245507$exports = {
    "buttonLabel": `Zobraziť návrhy`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} možnosť`,
            other: ()=>`${formatter.number(args.optionCount)} možnosti/-í`
        })} k dispozícii.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Zadaná skupina ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} možnosťou`,
                    other: ()=>`${formatter.number(args.groupCount)} možnosťami`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, vybraté`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Návrhy`,
    "selectedAnnouncement": (args)=>`${args.optionText}, vybraté`
};


var $0631b65beeb09b50$exports = {};
$0631b65beeb09b50$exports = {
    "buttonLabel": `Prikaži predloge`,
    "countAnnouncement": (args, formatter)=>`Na voljo je ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Vnesena skupina ${args.groupTitle}, z ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcija`,
                    other: ()=>`${formatter.number(args.groupCount)} opcije`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izbrano`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlogi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izbrano`
};


var $65fc749265dcd686$exports = {};
$65fc749265dcd686$exports = {
    "buttonLabel": `Prikaži predloge`,
    "countAnnouncement": (args, formatter)=>`Dostupno još: ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} opcija`,
            other: ()=>`${formatter.number(args.optionCount)} opcije/a`
        })}.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Unesena grupa ${args.groupTitle}, s ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} opcijom`,
                    other: ()=>`${formatter.number(args.groupCount)} optione/a`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, izabranih`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Predlozi`,
    "selectedAnnouncement": (args)=>`${args.optionText}, izabrano`
};


var $69ba655c7853c08e$exports = {};
$69ba655c7853c08e$exports = {
    "buttonLabel": `Visa förslag`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} alternativ`,
            other: ()=>`${formatter.number(args.optionCount)} alternativ`
        })} tillgängliga.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Ingick i gruppen ${args.groupTitle} med ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} alternativ`,
                    other: ()=>`${formatter.number(args.groupCount)} alternativ`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, valda`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Förslag`,
    "selectedAnnouncement": (args)=>`${args.optionText}, valda`
};


var $a79794784d61577c$exports = {};
$a79794784d61577c$exports = {
    "buttonLabel": `Önerileri göster`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} seçenek`,
            other: ()=>`${formatter.number(args.optionCount)} seçenekler`
        })} kullanılabilir.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Girilen grup ${args.groupTitle}, ile ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} seçenek`,
                    other: ()=>`${formatter.number(args.groupCount)} seçenekler`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, seçildi`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Öneriler`,
    "selectedAnnouncement": (args)=>`${args.optionText}, seçildi`
};


var $c2845791417ebaf4$exports = {};
$c2845791417ebaf4$exports = {
    "buttonLabel": `Показати пропозиції`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} параметр`,
            other: ()=>`${formatter.number(args.optionCount)} параметри(-ів)`
        })} доступно.`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`Введена група ${args.groupTitle}, з ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} параметр`,
                    other: ()=>`${formatter.number(args.groupCount)} параметри(-ів)`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, вибрано`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `Пропозиції`,
    "selectedAnnouncement": (args)=>`${args.optionText}, вибрано`
};


var $29b642d0025cc7a4$exports = {};
$29b642d0025cc7a4$exports = {
    "buttonLabel": `显示建议`,
    "countAnnouncement": (args, formatter)=>`有 ${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} 个选项`,
            other: ()=>`${formatter.number(args.optionCount)} 个选项`
        })}可用。`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`进入了 ${args.groupTitle} 组，其中有 ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} 个选项`,
                    other: ()=>`${formatter.number(args.groupCount)} 个选项`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, 已选择`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `建议`,
    "selectedAnnouncement": (args)=>`${args.optionText}, 已选择`
};


var $cd36dd33f9d46936$exports = {};
$cd36dd33f9d46936$exports = {
    "buttonLabel": `顯示建議`,
    "countAnnouncement": (args, formatter)=>`${formatter.plural(args.optionCount, {
            one: ()=>`${formatter.number(args.optionCount)} 選項`,
            other: ()=>`${formatter.number(args.optionCount)} 選項`
        })} 可用。`,
    "focusAnnouncement": (args, formatter)=>`${formatter.select({
            true: ()=>`輸入的群組 ${args.groupTitle}, 有 ${formatter.plural(args.groupCount, {
                    one: ()=>`${formatter.number(args.groupCount)} 選項`,
                    other: ()=>`${formatter.number(args.groupCount)} 選項`
                })}. `,
            other: ``
        }, args.isGroupChange)}${args.optionText}${formatter.select({
            true: `, 已選取`,
            other: ``
        }, args.isSelected)}`,
    "listboxLabel": `建議`,
    "selectedAnnouncement": (args)=>`${args.optionText}, 已選取`
};


$de5926a92e8ebc5b$exports = {
    "ar-AE": $02cb4c75c506befe$exports,
    "bg-BG": $568b8163f1e56faf$exports,
    "cs-CZ": $87581c0202d106b8$exports,
    "da-DK": $a10a0369f5433ed1$exports,
    "de-DE": $bfd288727d5cb166$exports,
    "el-GR": $ca177778f9a74e3c$exports,
    "en-US": $9b5aa79ef84beb6c$exports,
    "es-ES": $57968e8209de2557$exports,
    "et-EE": $60690790bf4c1c6a$exports,
    "fi-FI": $1101246e8c7d9357$exports,
    "fr-FR": $6404b5cb5b241730$exports,
    "he-IL": $dfeafa702e92e31f$exports,
    "hr-HR": $2d125e0b34676352$exports,
    "hu-HU": $ea029611d7634059$exports,
    "it-IT": $77f075bb86ad7091$exports,
    "ja-JP": $6e87462e84907983$exports,
    "ko-KR": $9246f2c6edc6b232$exports,
    "lt-LT": $e587accc6c0a434c$exports,
    "lv-LV": $03a1900e7400b5ab$exports,
    "nb-NO": $1387676441be6cf6$exports,
    "nl-NL": $17e82ebf0f8ab91f$exports,
    "pl-PL": $2f5377d3471630e5$exports,
    "pt-BR": $dee9868b6fa95ffe$exports,
    "pt-PT": $f8b2e63637cbb5a6$exports,
    "ro-RO": $46a885db3b44ea95$exports,
    "ru-RU": $50d8a8f0afa9dee5$exports,
    "sk-SK": $2867ee6173245507$exports,
    "sl-SI": $0631b65beeb09b50$exports,
    "sr-SP": $65fc749265dcd686$exports,
    "sv-SE": $69ba655c7853c08e$exports,
    "tr-TR": $a79794784d61577c$exports,
    "uk-UA": $c2845791417ebaf4$exports,
    "zh-CN": $29b642d0025cc7a4$exports,
    "zh-TW": $cd36dd33f9d46936$exports
};






function $c350ade66beef0af$export$8c18d1b4f7232bbf(props, state) {
    let { buttonRef: buttonRef , popoverRef: popoverRef , inputRef: inputRef , listBoxRef: listBoxRef , keyboardDelegate: keyboardDelegate , shouldFocusWrap: // completionMode = 'suggest',
    shouldFocusWrap , isReadOnly: isReadOnly , isDisabled: isDisabled  } = props;
    let stringFormatter = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__.useLocalizedStringFormatter)((0, (/*@__PURE__*/$parcel$interopDefault($de5926a92e8ebc5b$exports))));
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = (0, _react_aria_menu__WEBPACK_IMPORTED_MODULE_2__.useMenuTrigger)({
        type: "listbox",
        isDisabled: isDisabled || isReadOnly
    }, state, buttonRef);
    // Set listbox id so it can be used when calling getItemId later
    (0, _react_aria_listbox__WEBPACK_IMPORTED_MODULE_3__.listData).set(state, {
        id: menuProps.id
    });
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let delegate = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>keyboardDelegate || new (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_4__.ListKeyboardDelegate)(state.collection, state.disabledKeys, listBoxRef), [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        listBoxRef
    ]);
    // Use useSelectableCollection to get the keyboard handlers to apply to the textfield
    let { collectionProps: collectionProps  } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_4__.useSelectableCollection)({
        selectionManager: state.selectionManager,
        keyboardDelegate: delegate,
        disallowTypeAhead: true,
        disallowEmptySelection: true,
        shouldFocusWrap: shouldFocusWrap,
        ref: inputRef,
        // Prevent item scroll behavior from being applied here, should be handled in the user's Popover + ListBox component
        isVirtualized: true
    });
    // For textfield specific keydown operations
    let onKeyDown = (e)=>{
        switch(e.key){
            case "Enter":
            case "Tab":
                // Prevent form submission if menu is open since we may be selecting a option
                if (state.isOpen && e.key === "Enter") e.preventDefault();
                state.commit();
                break;
            case "Escape":
                if (state.selectedKey !== null || state.inputValue === "" || props.allowsCustomValue) e.continuePropagation();
                state.revert();
                break;
            case "ArrowDown":
                state.open("first", "manual");
                break;
            case "ArrowUp":
                state.open("last", "manual");
                break;
            case "ArrowLeft":
            case "ArrowRight":
                state.selectionManager.setFocusedKey(null);
                break;
        }
    };
    let onBlur = (e)=>{
        var _popoverRef_current;
        // Ignore blur if focused moved to the button or into the popover.
        if (e.relatedTarget === (buttonRef === null || buttonRef === void 0 ? void 0 : buttonRef.current) || ((_popoverRef_current = popoverRef.current) === null || _popoverRef_current === void 0 ? void 0 : _popoverRef_current.contains(e.relatedTarget))) return;
        if (props.onBlur) props.onBlur(e);
        state.setFocused(false);
    };
    let onFocus = (e)=>{
        if (state.isFocused) return;
        if (props.onFocus) props.onFocus(e);
        state.setFocused(true);
    };
    let { labelProps: labelProps , inputProps: inputProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = (0, _react_aria_textfield__WEBPACK_IMPORTED_MODULE_5__.useTextField)({
        ...props,
        onChange: state.setInputValue,
        onKeyDown: !isReadOnly && (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.chain)(state.isOpen && collectionProps.onKeyDown, onKeyDown, props.onKeyDown),
        onBlur: onBlur,
        value: state.inputValue,
        onFocus: onFocus,
        autoComplete: "off"
    }, inputRef);
    // Press handlers for the ComboBox button
    let onPress = (e)=>{
        if (e.pointerType === "touch") {
            // Focus the input field in case it isn't focused yet
            inputRef.current.focus();
            state.toggle(null, "manual");
        }
    };
    let onPressStart = (e)=>{
        if (e.pointerType !== "touch") {
            inputRef.current.focus();
            state.toggle(e.pointerType === "keyboard" || e.pointerType === "virtual" ? "first" : null, "manual");
        }
    };
    let triggerLabelProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.useLabels)({
        id: menuTriggerProps.id,
        "aria-label": stringFormatter.format("buttonLabel"),
        "aria-labelledby": props["aria-labelledby"] || labelProps.id
    });
    let listBoxProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.useLabels)({
        id: menuProps.id,
        "aria-label": stringFormatter.format("listboxLabel"),
        "aria-labelledby": props["aria-labelledby"] || labelProps.id
    });
    // If a touch happens on direct center of ComboBox input, might be virtual click from iPad so open ComboBox menu
    let lastEventTime = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    let onTouchEnd = (e)=>{
        if (isDisabled || isReadOnly) return;
        // Sometimes VoiceOver on iOS fires two touchend events in quick succession. Ignore the second one.
        if (e.timeStamp - lastEventTime.current < 500) {
            e.preventDefault();
            inputRef.current.focus();
            return;
        }
        let rect = e.target.getBoundingClientRect();
        let touch = e.changedTouches[0];
        let centerX = Math.ceil(rect.left + .5 * rect.width);
        let centerY = Math.ceil(rect.top + .5 * rect.height);
        if (touch.clientX === centerX && touch.clientY === centerY) {
            e.preventDefault();
            inputRef.current.focus();
            state.toggle(null, "manual");
            lastEventTime.current = e.timeStamp;
        }
    };
    // VoiceOver has issues with announcing aria-activedescendant properly on change
    // (especially on iOS). We use a live region announcer to announce focus changes
    // manually. In addition, section titles are announced when navigating into a new section.
    let focusedItem = state.selectionManager.focusedKey != null && state.isOpen ? state.collection.getItem(state.selectionManager.focusedKey) : undefined;
    var _focusedItem_parentKey;
    let sectionKey = (_focusedItem_parentKey = focusedItem === null || focusedItem === void 0 ? void 0 : focusedItem.parentKey) !== null && _focusedItem_parentKey !== void 0 ? _focusedItem_parentKey : null;
    var _state_selectionManager_focusedKey;
    let itemKey = (_state_selectionManager_focusedKey = state.selectionManager.focusedKey) !== null && _state_selectionManager_focusedKey !== void 0 ? _state_selectionManager_focusedKey : null;
    let lastSection = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(sectionKey);
    let lastItem = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(itemKey);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.isAppleDevice)() && focusedItem != null && itemKey !== lastItem.current) {
            let isSelected = state.selectionManager.isSelected(itemKey);
            let section = sectionKey != null ? state.collection.getItem(sectionKey) : null;
            let sectionTitle = (section === null || section === void 0 ? void 0 : section["aria-label"]) || (typeof (section === null || section === void 0 ? void 0 : section.rendered) === "string" ? section.rendered : "") || "";
            let announcement = stringFormatter.format("focusAnnouncement", {
                isGroupChange: section && sectionKey !== lastSection.current,
                groupTitle: sectionTitle,
                groupCount: section ? [
                    ...(0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_7__.getChildNodes)(section, state.collection)
                ].length : 0,
                optionText: focusedItem["aria-label"] || focusedItem.textValue || "",
                isSelected: isSelected
            });
            (0, _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_8__.announce)(announcement);
        }
        lastSection.current = sectionKey;
        lastItem.current = itemKey;
    });
    // Announce the number of available suggestions when it changes
    let optionCount = (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_7__.getItemCount)(state.collection);
    let lastSize = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(optionCount);
    let lastOpen = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state.isOpen);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Only announce the number of options available when the menu opens if there is no
        // focused item, otherwise screen readers will typically read e.g. "1 of 6".
        // The exception is VoiceOver since this isn't included in the message above.
        let didOpenWithoutFocusedItem = state.isOpen !== lastOpen.current && (state.selectionManager.focusedKey == null || (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.isAppleDevice)());
        if (state.isOpen && (didOpenWithoutFocusedItem || optionCount !== lastSize.current)) {
            let announcement = stringFormatter.format("countAnnouncement", {
                optionCount: optionCount
            });
            (0, _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_8__.announce)(announcement);
        }
        lastSize.current = optionCount;
        lastOpen.current = state.isOpen;
    });
    // Announce when a selection occurs for VoiceOver. Other screen readers typically do this automatically.
    let lastSelectedKey = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(state.selectedKey);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.isAppleDevice)() && state.isFocused && state.selectedItem && state.selectedKey !== lastSelectedKey.current) {
            let optionText = state.selectedItem["aria-label"] || state.selectedItem.textValue || "";
            let announcement = stringFormatter.format("selectedAnnouncement", {
                optionText: optionText
            });
            (0, _react_aria_live_announcer__WEBPACK_IMPORTED_MODULE_8__.announce)(announcement);
        }
        lastSelectedKey.current = state.selectedKey;
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (state.isOpen) return (0, _react_aria_overlays__WEBPACK_IMPORTED_MODULE_9__.ariaHideOutside)([
            inputRef.current,
            popoverRef.current
        ]);
    }, [
        state.isOpen,
        inputRef,
        popoverRef
    ]);
    return {
        labelProps: labelProps,
        buttonProps: {
            ...menuTriggerProps,
            ...triggerLabelProps,
            excludeFromTabOrder: true,
            onPress: onPress,
            onPressStart: onPressStart,
            isDisabled: isDisabled || isReadOnly
        },
        inputProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.mergeProps)(inputProps, {
            role: "combobox",
            "aria-expanded": menuTriggerProps["aria-expanded"],
            "aria-controls": state.isOpen ? menuProps.id : undefined,
            // TODO: readd proper logic for completionMode = complete (aria-autocomplete: both)
            "aria-autocomplete": "list",
            "aria-activedescendant": focusedItem ? (0, _react_aria_listbox__WEBPACK_IMPORTED_MODULE_3__.getItemId)(state, focusedItem.key) : undefined,
            onTouchEnd: onTouchEnd,
            // This disable's iOS's autocorrect suggestions, since the combo box provides its own suggestions.
            autoCorrect: "off",
            // This disable's the macOS Safari spell check auto corrections.
            spellCheck: "false"
        }),
        listBoxProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_6__.mergeProps)(menuProps, listBoxProps, {
            autoFocus: state.focusStrategy,
            shouldUseVirtualFocus: true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/focus/dist/import.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@react-aria/focus/dist/import.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FocusRing": () => (/* binding */ $907718708eab68af$export$1a38b4ad7f578e1d),
/* harmony export */   "FocusScope": () => (/* binding */ $9bf71ea28793e738$export$20e40289641fbbb6),
/* harmony export */   "FocusableProvider": () => (/* binding */ $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5),
/* harmony export */   "createFocusManager": () => (/* binding */ $9bf71ea28793e738$export$c5251b9e124bf29),
/* harmony export */   "focusSafely": () => (/* binding */ $6a99195332edec8b$export$80f3e147d781571c),
/* harmony export */   "getFocusableTreeWalker": () => (/* binding */ $9bf71ea28793e738$export$2d6ec8fc375ceafa),
/* harmony export */   "isElementInChildOfActiveScope": () => (/* binding */ $9bf71ea28793e738$export$1258395f99bf9cbf),
/* harmony export */   "useFocusManager": () => (/* binding */ $9bf71ea28793e738$export$10c5169755ce7bd7),
/* harmony export */   "useFocusRing": () => (/* binding */ $f7dceffc5ad7768b$export$4e328f61c538687f),
/* harmony export */   "useFocusable": () => (/* binding */ $e6afbd83fe6ebbd2$export$4c014de7c8940b4c),
/* harmony export */   "useHasTabbableChild": () => (/* binding */ $83013635b024ae3d$export$eac1895992b9f3d6)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/import.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the 'License');
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $6a99195332edec8b$export$80f3e147d781571c(element) {
    // If the user is interacting with a virtual cursor, e.g. screen reader, then
    // wait until after any animated transitions that are currently occurring on
    // the page before shifting focus. This avoids issues with VoiceOver on iOS
    // causing the page to scroll when moving focus if the element is transitioning
    // from off the screen.
    if ((0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.getInteractionModality)() === "virtual") {
        let lastFocusedElement = document.activeElement;
        (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.runAfterTransition)(()=>{
            // If focus did not move and the element is still in the document, focus it.
            if (document.activeElement === lastFocusedElement && document.contains(element)) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.focusWithoutScrolling)(element);
        });
    } else (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.focusWithoutScrolling)(element);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $645f2e67b85a24c9$var$isStyleVisible(element) {
    if (!(element instanceof HTMLElement) && !(element instanceof SVGElement)) return false;
    let { display: display , visibility: visibility  } = element.style;
    let isVisible = display !== "none" && visibility !== "hidden" && visibility !== "collapse";
    if (isVisible) {
        const { getComputedStyle: getComputedStyle  } = element.ownerDocument.defaultView;
        let { display: computedDisplay , visibility: computedVisibility  } = getComputedStyle(element);
        isVisible = computedDisplay !== "none" && computedVisibility !== "hidden" && computedVisibility !== "collapse";
    }
    return isVisible;
}
function $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) {
    return !element.hasAttribute("hidden") && (element.nodeName === "DETAILS" && childElement && childElement.nodeName !== "SUMMARY" ? element.hasAttribute("open") : true);
}
function $645f2e67b85a24c9$export$e989c0fffaa6b27a(element, childElement) {
    return element.nodeName !== "#comment" && $645f2e67b85a24c9$var$isStyleVisible(element) && $645f2e67b85a24c9$var$isAttributeVisible(element, childElement) && (!element.parentElement || $645f2e67b85a24c9$export$e989c0fffaa6b27a(element.parentElement, element));
}




const $9bf71ea28793e738$var$FocusContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createContext(null);
let $9bf71ea28793e738$var$activeScope = null;
function $9bf71ea28793e738$export$20e40289641fbbb6(props) {
    let { children: children , contain: contain , restoreFocus: restoreFocus , autoFocus: autoFocus  } = props;
    let startRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let endRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let scopeRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)([]);
    let { parentNode: parentNode  } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9bf71ea28793e738$var$FocusContext) || {};
    // Create a tree node here so we can add children to it even before it is added to the tree.
    let node = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        }), [
        scopeRef
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        // If a new scope mounts outside the active scope, (e.g. DialogContainer launched from a menu),
        // use the active scope as the parent instead of the parent from context. Layout effects run bottom
        // up, so if the parent is not yet added to the tree, don't do this. Only the outer-most FocusScope
        // that is being added should get the activeScope as its parent.
        let parent = parentNode || $9bf71ea28793e738$export$d06fae2ee68b101e.root;
        if ($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parent.scopeRef) && $9bf71ea28793e738$var$activeScope && !$9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, parent.scopeRef)) {
            let activeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
            if (activeNode) parent = activeNode;
        }
        // Add the node to the parent, and to the tree.
        parent.addChild(node);
        $9bf71ea28793e738$export$d06fae2ee68b101e.addNode(node);
    }, [
        node,
        parentNode
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        let node = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef);
        node.contain = contain;
    }, [
        contain
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        // Find all rendered nodes between the sentinels and add them to the scope.
        let node = startRef.current.nextSibling;
        let nodes = [];
        while(node && node !== endRef.current){
            nodes.push(node);
            node = node.nextSibling;
        }
        scopeRef.current = nodes;
    }, [
        children
    ]);
    $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain);
    $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain);
    $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus);
    // this layout effect needs to run last so that focusScopeTree cleanup happens at the last moment possible
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (scopeRef) {
            let activeElement = document.activeElement;
            let scope = null;
            // In strict mode, active scope is incorrectly updated since cleanup will run even though scope hasn't unmounted.
            // To fix this, we need to update the actual activeScope here
            if ($9bf71ea28793e738$var$isElementInScope(activeElement, scopeRef.current)) {
                // Since useLayoutEffect runs for children first, we need to traverse the focusScope tree and find the bottom most scope that
                // contains the active element and set that as the activeScope
                for (let node of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse())if ($9bf71ea28793e738$var$isElementInScope(activeElement, node.scopeRef.current)) scope = node;
                if (scope === $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef)) $9bf71ea28793e738$var$activeScope = scope.scopeRef;
            }
            return ()=>{
                // Scope may have been re-parented.
                let parentScope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).parent.scopeRef;
                // Restore the active scope on unmount if this scope or a descendant scope is active.
                // Parent effect cleanups run before children, so we need to check if the
                // parent scope actually still exists before restoring the active scope to it.
                if ((scopeRef === $9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope(scopeRef, $9bf71ea28793e738$var$activeScope)) && (!parentScope || $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(parentScope))) $9bf71ea28793e738$var$activeScope = parentScope;
                $9bf71ea28793e738$export$d06fae2ee68b101e.removeTreeNode(scopeRef);
            };
        }
    }, [
        scopeRef
    ]);
    let focusManager = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$9bf71ea28793e738$var$createFocusManagerForScope(scopeRef), []);
    let value = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            focusManager: focusManager,
            parentNode: node
        }), [
        node,
        focusManager
    ]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($9bf71ea28793e738$var$FocusContext.Provider, {
        value: value
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("span", {
        "data-focus-scope-start": true,
        hidden: true,
        ref: startRef
    }), children, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("span", {
        "data-focus-scope-end": true,
        hidden: true,
        ref: endRef
    }));
}
function $9bf71ea28793e738$export$10c5169755ce7bd7() {
    var _useContext;
    return (_useContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($9bf71ea28793e738$var$FocusContext)) === null || _useContext === void 0 ? void 0 : _useContext.focusManager;
}
function $9bf71ea28793e738$var$createFocusManagerForScope(scopeRef) {
    return {
        focusNext (opts = {}) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap , accept: accept  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[0].previousElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = sentinel;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = {}) {
            let scope = scopeRef.current;
            let { from: from , tabbable: tabbable , wrap: wrap , accept: accept  } = opts;
            let node = from || document.activeElement;
            let sentinel = scope[scope.length - 1].nextElementSibling;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = $9bf71ea28793e738$var$isElementInScope(node, scope) ? node : sentinel;
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = sentinel;
                previousNode = walker.previousNode();
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable , accept: accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[0].previousElementSibling;
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = {}) {
            let scope = scopeRef.current;
            let { tabbable: tabbable , accept: accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: tabbable,
                accept: accept
            }, scope);
            walker.currentNode = scope[scope.length - 1].nextElementSibling;
            let previousNode = walker.previousNode();
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        }
    };
}
const $9bf71ea28793e738$var$focusableElements = [
    "input:not([disabled]):not([type=hidden])",
    "select:not([disabled])",
    "textarea:not([disabled])",
    "button:not([disabled])",
    "a[href]",
    "area[href]",
    "summary",
    "iframe",
    "object",
    "embed",
    "audio[controls]",
    "video[controls]",
    "[contenteditable]"
];
const $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(":not([hidden]),") + ",[tabindex]:not([disabled]):not([hidden])";
$9bf71ea28793e738$var$focusableElements.push('[tabindex]:not([tabindex="-1"]):not([disabled])');
const $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR = $9bf71ea28793e738$var$focusableElements.join(':not([hidden]):not([tabindex="-1"]),');
function $9bf71ea28793e738$var$getScopeRoot(scope) {
    return scope[0].parentElement;
}
function $9bf71ea28793e738$var$shouldContainFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.contain) return false;
        scope = scope.parent;
    }
    return true;
}
function $9bf71ea28793e738$var$useFocusContainment(scopeRef, contain) {
    let focusedNode = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let raf = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        let scope = scopeRef.current;
        if (!contain) {
            // if contain was changed, then we should cancel any ongoing waits to pull focus back into containment
            if (raf.current) {
                cancelAnimationFrame(raf.current);
                raf.current = null;
            }
            return;
        }
        // Handle the Tab key to contain focus within the scope
        let onKeyDown = (e)=>{
            if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef)) return;
            let focusedElement = document.activeElement;
            let scope = scopeRef.current;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scope)) return;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
                tabbable: true
            }, scope);
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!nextElement) {
                walker.currentNode = e.shiftKey ? scope[scope.length - 1].nextElementSibling : scope[0].previousElementSibling;
                nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            }
            e.preventDefault();
            if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
        };
        let onFocus = (e)=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(e.target, scopeRef.current)) {
                $9bf71ea28793e738$var$activeScope = scopeRef;
                focusedNode.current = e.target;
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(e.target, scopeRef)) {
                // If a focus event occurs outside the active scope (e.g. user tabs from browser location bar),
                // restore focus to the previously focused node or the first tabbable element in the active scope.
                if (focusedNode.current) focusedNode.current.focus();
                else if ($9bf71ea28793e738$var$activeScope) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
            } else if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef)) focusedNode.current = e.target;
        };
        let onBlur = (e)=>{
            // Firefox doesn't shift focus back to the Dialog properly without this
            if (raf.current) cancelAnimationFrame(raf.current);
            raf.current = requestAnimationFrame(()=>{
                // Use document.activeElement instead of e.relatedTarget so we can tell if user clicked into iframe
                if ($9bf71ea28793e738$var$shouldContainFocus(scopeRef) && !$9bf71ea28793e738$var$isElementInChildScope(document.activeElement, scopeRef)) {
                    $9bf71ea28793e738$var$activeScope = scopeRef;
                    if (document.body.contains(e.target)) {
                        focusedNode.current = e.target;
                        focusedNode.current.focus();
                    } else if ($9bf71ea28793e738$var$activeScope) $9bf71ea28793e738$var$focusFirstInScope($9bf71ea28793e738$var$activeScope.current);
                }
            });
        };
        document.addEventListener("keydown", onKeyDown, false);
        document.addEventListener("focusin", onFocus, false);
        scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        scope.forEach((element)=>element.addEventListener("focusout", onBlur, false));
        return ()=>{
            document.removeEventListener("keydown", onKeyDown, false);
            document.removeEventListener("focusin", onFocus, false);
            scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
            scope.forEach((element)=>element.removeEventListener("focusout", onBlur, false));
        };
    }, [
        scopeRef,
        contain
    ]);
    // This is a useLayoutEffect so it is guaranteed to run before our async synthetic blur
    // eslint-disable-next-line arrow-body-style
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        return ()=>{
            if (raf.current) cancelAnimationFrame(raf.current);
        };
    }, [
        raf
    ]);
}
function $9bf71ea28793e738$var$isElementInAnyScope(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element);
}
function $9bf71ea28793e738$var$isElementInScope(element, scope) {
    return scope.some((node)=>node.contains(element));
}
function $9bf71ea28793e738$var$isElementInChildScope(element, scope = null) {
    // If the element is within a top layer element (e.g. toasts), always allow moving focus there.
    if (element instanceof Element && element.closest("[data-react-aria-top-layer]")) return true;
    // node.contains in isElementInScope covers child scopes that are also DOM children,
    // but does not cover child scopes in portals.
    for (let { scopeRef: s  } of $9bf71ea28793e738$export$d06fae2ee68b101e.traverse($9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope))){
        if ($9bf71ea28793e738$var$isElementInScope(element, s.current)) return true;
    }
    return false;
}
function $9bf71ea28793e738$export$1258395f99bf9cbf(element) {
    return $9bf71ea28793e738$var$isElementInChildScope(element, $9bf71ea28793e738$var$activeScope);
}
function $9bf71ea28793e738$var$isAncestorScope(ancestor, scope) {
    var _focusScopeTree_getTreeNode;
    let parent = (_focusScopeTree_getTreeNode = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scope)) === null || _focusScopeTree_getTreeNode === void 0 ? void 0 : _focusScopeTree_getTreeNode.parent;
    while(parent){
        if (parent.scopeRef === ancestor) return true;
        parent = parent.parent;
    }
    return false;
}
function $9bf71ea28793e738$var$focusElement(element, scroll = false) {
    if (element != null && !scroll) try {
        (0, $6a99195332edec8b$export$80f3e147d781571c)(element);
    } catch (err) {
    // ignore
    }
    else if (element != null) try {
        element.focus();
    } catch (err) {
    // ignore
    }
}
function $9bf71ea28793e738$var$focusFirstInScope(scope, tabbable = true) {
    let sentinel = scope[0].previousElementSibling;
    let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
        tabbable: tabbable
    }, scope);
    walker.currentNode = sentinel;
    let nextNode = walker.nextNode();
    // If the scope does not contain a tabbable element, use the first focusable element.
    if (tabbable && !nextNode) {
        walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa($9bf71ea28793e738$var$getScopeRoot(scope), {
            tabbable: false
        }, scope);
        walker.currentNode = sentinel;
        nextNode = walker.nextNode();
    }
    $9bf71ea28793e738$var$focusElement(nextNode);
}
function $9bf71ea28793e738$var$useAutoFocus(scopeRef, autoFocus) {
    const autoFocusRef = (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).useRef(autoFocus);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current) {
            $9bf71ea28793e738$var$activeScope = scopeRef;
            if (!$9bf71ea28793e738$var$isElementInScope(document.activeElement, $9bf71ea28793e738$var$activeScope.current)) $9bf71ea28793e738$var$focusFirstInScope(scopeRef.current);
        }
        autoFocusRef.current = false;
    }, [
        scopeRef
    ]);
}
function $9bf71ea28793e738$var$useActiveScopeTracker(scopeRef, restore, contain) {
    // tracks the active scope, in case restore and contain are both false.
    // if either are true, this is tracked in useRestoreFocus or useFocusContainment.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        if (restore || contain) return;
        let scope = scopeRef.current;
        let onFocus = (e)=>{
            let target = e.target;
            if ($9bf71ea28793e738$var$isElementInScope(target, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
            else if (!$9bf71ea28793e738$var$isElementInAnyScope(target)) $9bf71ea28793e738$var$activeScope = null;
        };
        document.addEventListener("focusin", onFocus, false);
        scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        return ()=>{
            document.removeEventListener("focusin", onFocus, false);
            scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
        };
    }, [
        scopeRef,
        restore,
        contain
    ]);
}
function $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef) {
    let scope = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode($9bf71ea28793e738$var$activeScope);
    while(scope && scope.scopeRef !== scopeRef){
        if (scope.nodeToRestore) return false;
        scope = scope.parent;
    }
    return (scope === null || scope === void 0 ? void 0 : scope.scopeRef) === scopeRef;
}
function $9bf71ea28793e738$var$useRestoreFocus(scopeRef, restoreFocus, contain) {
    // create a ref during render instead of useLayoutEffect so the active element is saved before a child with autoFocus=true mounts.
    const nodeToRestoreRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(typeof document !== "undefined" ? document.activeElement : null);
    // restoring scopes should all track if they are active regardless of contain, but contain already tracks it plus logic to contain the focus
    // restoring-non-containing scopes should only care if they become active so they can perform the restore
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        let scope = scopeRef.current;
        if (!restoreFocus || contain) return;
        let onFocus = ()=>{
            // If focusing an element in a child scope of the currently active scope, the child becomes active.
            // Moving out of the active scope to an ancestor is not allowed.
            if ((!$9bf71ea28793e738$var$activeScope || $9bf71ea28793e738$var$isAncestorScope($9bf71ea28793e738$var$activeScope, scopeRef)) && $9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current)) $9bf71ea28793e738$var$activeScope = scopeRef;
        };
        document.addEventListener("focusin", onFocus, false);
        scope.forEach((element)=>element.addEventListener("focusin", onFocus, false));
        return ()=>{
            document.removeEventListener("focusin", onFocus, false);
            scope.forEach((element)=>element.removeEventListener("focusin", onFocus, false));
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        scopeRef,
        contain
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        if (!restoreFocus) return;
        // Handle the Tab key so that tabbing out of the scope goes to the next element
        // after the node that had focus when the scope mounted. This is important when
        // using portals for overlays, so that focus goes to the expected element when
        // tabbing out of the overlay.
        let onKeyDown = (e)=>{
            if (e.key !== "Tab" || e.altKey || e.ctrlKey || e.metaKey || !$9bf71ea28793e738$var$shouldContainFocus(scopeRef)) return;
            let focusedElement = document.activeElement;
            if (!$9bf71ea28793e738$var$isElementInScope(focusedElement, scopeRef.current)) return;
            let nodeToRestore = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).nodeToRestore;
            // Create a DOM tree walker that matches all tabbable elements
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(document.body, {
                tabbable: true
            });
            // Find the next tabbable element after the currently focused element
            walker.currentNode = focusedElement;
            let nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
            if (!document.body.contains(nodeToRestore) || nodeToRestore === document.body) {
                nodeToRestore = null;
                $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).nodeToRestore = null;
            }
            // If there is no next element, or it is outside the current scope, move focus to the
            // next element after the node to restore to instead.
            if ((!nextElement || !$9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current)) && nodeToRestore) {
                walker.currentNode = nodeToRestore;
                // Skip over elements within the scope, in case the scope immediately follows the node to restore.
                do nextElement = e.shiftKey ? walker.previousNode() : walker.nextNode();
                while ($9bf71ea28793e738$var$isElementInScope(nextElement, scopeRef.current));
                e.preventDefault();
                e.stopPropagation();
                if (nextElement) $9bf71ea28793e738$var$focusElement(nextElement, true);
                else // If there is no next element and the nodeToRestore isn't within a FocusScope (i.e. we are leaving the top level focus scope)
                // then move focus to the body.
                // Otherwise restore focus to the nodeToRestore (e.g menu within a popover -> tabbing to close the menu should move focus to menu trigger)
                if (!$9bf71ea28793e738$var$isElementInAnyScope(nodeToRestore)) focusedElement.blur();
                else $9bf71ea28793e738$var$focusElement(nodeToRestore, true);
            }
        };
        if (!contain) document.addEventListener("keydown", onKeyDown, true);
        return ()=>{
            if (!contain) document.removeEventListener("keydown", onKeyDown, true);
        };
    }, [
        scopeRef,
        restoreFocus,
        contain
    ]);
    // useLayoutEffect instead of useEffect so the active element is saved synchronously instead of asynchronously.
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        if (!restoreFocus) return;
        $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).nodeToRestore = nodeToRestoreRef.current;
        return ()=>{
            let nodeToRestore = $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(scopeRef).nodeToRestore;
            // if we already lost focus to the body and this was the active scope, then we should attempt to restore
            if (restoreFocus && nodeToRestore && // eslint-disable-next-line react-hooks/exhaustive-deps
            ($9bf71ea28793e738$var$isElementInScope(document.activeElement, scopeRef.current) || document.activeElement === document.body && $9bf71ea28793e738$var$shouldRestoreFocus(scopeRef))) {
                // freeze the focusScopeTree so it persists after the raf, otherwise during unmount nodes are removed from it
                let clonedTree = $9bf71ea28793e738$export$d06fae2ee68b101e.clone();
                requestAnimationFrame(()=>{
                    // Only restore focus if we've lost focus to the body, the alternative is that focus has been purposefully moved elsewhere
                    if (document.activeElement === document.body) {
                        // look up the tree starting with our scope to find a nodeToRestore still in the DOM
                        let treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.nodeToRestore && document.body.contains(treeNode.nodeToRestore)) {
                                $9bf71ea28793e738$var$focusElement(treeNode.nodeToRestore);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                        // If no nodeToRestore was found, focus the first element in the nearest
                        // ancestor scope that is still in the tree.
                        treeNode = clonedTree.getTreeNode(scopeRef);
                        while(treeNode){
                            if (treeNode.scopeRef && $9bf71ea28793e738$export$d06fae2ee68b101e.getTreeNode(treeNode.scopeRef)) {
                                $9bf71ea28793e738$var$focusFirstInScope(treeNode.scopeRef.current, true);
                                return;
                            }
                            treeNode = treeNode.parent;
                        }
                    }
                });
            }
        };
    }, [
        scopeRef,
        restoreFocus
    ]);
}
function $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, opts, scope) {
    let selector = (opts === null || opts === void 0 ? void 0 : opts.tabbable) ? $9bf71ea28793e738$var$TABBABLE_ELEMENT_SELECTOR : $9bf71ea28793e738$var$FOCUSABLE_ELEMENT_SELECTOR;
    let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
        acceptNode (node) {
            var _opts_from;
            // Skip nodes inside the starting node.
            if (opts === null || opts === void 0 ? void 0 : (_opts_from = opts.from) === null || _opts_from === void 0 ? void 0 : _opts_from.contains(node)) return NodeFilter.FILTER_REJECT;
            if (node.matches(selector) && (0, $645f2e67b85a24c9$export$e989c0fffaa6b27a)(node) && (!scope || $9bf71ea28793e738$var$isElementInScope(node, scope)) && (!(opts === null || opts === void 0 ? void 0 : opts.accept) || opts.accept(node))) return NodeFilter.FILTER_ACCEPT;
            return NodeFilter.FILTER_SKIP;
        }
    });
    if (opts === null || opts === void 0 ? void 0 : opts.from) walker.currentNode = opts.from;
    return walker;
}
function $9bf71ea28793e738$export$c5251b9e124bf29(ref, defaultOptions = {}) {
    return {
        focusNext (opts = {}) {
            let root = ref.current;
            if (!root) return;
            let { from: from , tabbable: tabbable = defaultOptions.tabbable , wrap: wrap = defaultOptions.wrap , accept: accept = defaultOptions.accept  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            let nextNode = walker.nextNode();
            if (!nextNode && wrap) {
                walker.currentNode = root;
                nextNode = walker.nextNode();
            }
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusPrevious (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { from: from , tabbable: tabbable = defaultOptions.tabbable , wrap: wrap = defaultOptions.wrap , accept: accept = defaultOptions.accept  } = opts;
            let node = from || document.activeElement;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            if (root.contains(node)) walker.currentNode = node;
            else {
                let next = $9bf71ea28793e738$var$last(walker);
                if (next) $9bf71ea28793e738$var$focusElement(next, true);
                return next;
            }
            let previousNode = walker.previousNode();
            if (!previousNode && wrap) {
                walker.currentNode = root;
                previousNode = $9bf71ea28793e738$var$last(walker);
            }
            if (previousNode) $9bf71ea28793e738$var$focusElement(previousNode, true);
            return previousNode;
        },
        focusFirst (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { tabbable: tabbable = defaultOptions.tabbable , accept: accept = defaultOptions.accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let nextNode = walker.nextNode();
            if (nextNode) $9bf71ea28793e738$var$focusElement(nextNode, true);
            return nextNode;
        },
        focusLast (opts = defaultOptions) {
            let root = ref.current;
            if (!root) return;
            let { tabbable: tabbable = defaultOptions.tabbable , accept: accept = defaultOptions.accept  } = opts;
            let walker = $9bf71ea28793e738$export$2d6ec8fc375ceafa(root, {
                tabbable: tabbable,
                accept: accept
            });
            let next = $9bf71ea28793e738$var$last(walker);
            if (next) $9bf71ea28793e738$var$focusElement(next, true);
            return next;
        }
    };
}
function $9bf71ea28793e738$var$last(walker) {
    let next;
    let last;
    do {
        last = walker.lastChild();
        if (last) next = last;
    }while (last);
    return next;
}
class $9bf71ea28793e738$var$Tree {
    get size() {
        return this.fastMap.size;
    }
    getTreeNode(data) {
        return this.fastMap.get(data);
    }
    addTreeNode(scopeRef, parent, nodeToRestore) {
        let parentNode = this.fastMap.get(parent !== null && parent !== void 0 ? parent : null);
        let node = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: scopeRef
        });
        parentNode.addChild(node);
        node.parent = parentNode;
        this.fastMap.set(scopeRef, node);
        if (nodeToRestore) node.nodeToRestore = nodeToRestore;
    }
    addNode(node) {
        this.fastMap.set(node.scopeRef, node);
    }
    removeTreeNode(scopeRef) {
        // never remove the root
        if (scopeRef === null) return;
        let node = this.fastMap.get(scopeRef);
        let parentNode = node.parent;
        // when we remove a scope, check if any sibling scopes are trying to restore focus to something inside the scope we're removing
        // if we are, then replace the siblings restore with the restore from the scope we're removing
        for (let current of this.traverse())if (current !== node && node.nodeToRestore && current.nodeToRestore && node.scopeRef.current && $9bf71ea28793e738$var$isElementInScope(current.nodeToRestore, node.scopeRef.current)) current.nodeToRestore = node.nodeToRestore;
        let children = node.children;
        parentNode.removeChild(node);
        if (children.size > 0) children.forEach((child)=>parentNode.addChild(child));
        this.fastMap.delete(node.scopeRef);
    }
    // Pre Order Depth First
    *traverse(node = this.root) {
        if (node.scopeRef != null) yield node;
        if (node.children.size > 0) for (let child of node.children)yield* this.traverse(child);
    }
    clone() {
        let newTree = new $9bf71ea28793e738$var$Tree();
        for (let node of this.traverse())newTree.addTreeNode(node.scopeRef, node.parent.scopeRef, node.nodeToRestore);
        return newTree;
    }
    constructor(){
        this.fastMap = new Map();
        this.root = new $9bf71ea28793e738$var$TreeNode({
            scopeRef: null
        });
        this.fastMap.set(null, this.root);
    }
}
class $9bf71ea28793e738$var$TreeNode {
    addChild(node) {
        this.children.add(node);
        node.parent = this;
    }
    removeChild(node) {
        this.children.delete(node);
        node.parent = undefined;
    }
    constructor(props){
        this.children = new Set();
        this.contain = false;
        this.scopeRef = props.scopeRef;
    }
}
let $9bf71ea28793e738$export$d06fae2ee68b101e = new $9bf71ea28793e738$var$Tree();


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f7dceffc5ad7768b$export$4e328f61c538687f(props = {}) {
    let { autoFocus: autoFocus = false , isTextInput: isTextInput , within: within  } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        isFocusVisible: autoFocus || (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.isFocusVisible)()
    });
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [isFocusVisibleState, setFocusVisible] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>state.current.isFocused && state.current.isFocusVisible);
    let updateState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>setFocusVisible(state.current.isFocused && state.current.isFocusVisible), []);
    let onFocusChange = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((isFocused)=>{
        state.current.isFocused = isFocused;
        setFocused(isFocused);
        updateState();
    }, [
        updateState
    ]);
    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocusVisibleListener)((isFocusVisible)=>{
        state.current.isFocusVisible = isFocusVisible;
        updateState();
    }, [], {
        isTextInput: isTextInput
    });
    let { focusProps: focusProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocus)({
        isDisabled: within,
        onFocusChange: onFocusChange
    });
    let { focusWithinProps: focusWithinProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocusWithin)({
        isDisabled: !within,
        onFocusWithinChange: onFocusChange
    });
    return {
        isFocused: isFocused,
        isFocusVisible: isFocusVisibleState,
        focusProps: within ? focusWithinProps : focusProps
    };
}


function $907718708eab68af$export$1a38b4ad7f578e1d(props) {
    let { children: children , focusClass: focusClass , focusRingClass: focusRingClass  } = props;
    let { isFocused: isFocused , isFocusVisible: isFocusVisible , focusProps: focusProps  } = (0, $f7dceffc5ad7768b$export$4e328f61c538687f)(props);
    let child = (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).Children.only(children);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).cloneElement(child, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)(child.props, {
        ...focusProps,
        className: (0, clsx__WEBPACK_IMPORTED_MODULE_1__["default"])({
            [focusClass || ""]: isFocused,
            [focusRingClass || ""]: isFocusVisible
        })
    }));
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



let $e6afbd83fe6ebbd2$var$FocusableContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createContext(null);
function $e6afbd83fe6ebbd2$var$useFocusableContext(ref) {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($e6afbd83fe6ebbd2$var$FocusableContext) || {};
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useSyncRef)(context, ref);
    // eslint-disable-next-line
    let { ref: _ , ...otherProps } = context;
    return otherProps;
}
/**
 * Provides DOM props to the nearest focusable child.
 */ function $e6afbd83fe6ebbd2$var$FocusableProvider(props, ref) {
    let { children: children , ...otherProps } = props;
    let context = {
        ...otherProps,
        ref: ref
    };
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($e6afbd83fe6ebbd2$var$FocusableContext.Provider, {
        value: context
    }, children);
}
let $e6afbd83fe6ebbd2$export$13f3202a3e5ddd5 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).forwardRef($e6afbd83fe6ebbd2$var$FocusableProvider);
function $e6afbd83fe6ebbd2$export$4c014de7c8940b4c(props, domRef) {
    let { focusProps: focusProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocus)(props);
    let { keyboardProps: keyboardProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useKeyboard)(props);
    let interactions = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)(focusProps, keyboardProps);
    let domProps = $e6afbd83fe6ebbd2$var$useFocusableContext(domRef);
    let interactionProps = props.isDisabled ? {} : domProps;
    let autoFocusRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(props.autoFocus);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current && domRef.current) (0, $6a99195332edec8b$export$80f3e147d781571c)(domRef.current);
        autoFocusRef.current = false;
    }, [
        domRef
    ]);
    return {
        focusableProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)({
            ...interactions,
            tabIndex: props.excludeFromTabOrder && !props.isDisabled ? -1 : undefined
        }, interactionProps)
    };
}




/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $83013635b024ae3d$export$eac1895992b9f3d6(ref, options) {
    let isDisabled = options === null || options === void 0 ? void 0 : options.isDisabled;
    let [hasTabbableChild, setHasTabbableChild] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useLayoutEffect)(()=>{
        if ((ref === null || ref === void 0 ? void 0 : ref.current) && !isDisabled) {
            let update = ()=>{
                if (ref.current) {
                    let walker = (0, $9bf71ea28793e738$export$2d6ec8fc375ceafa)(ref.current, {
                        tabbable: true
                    });
                    setHasTabbableChild(!!walker.nextNode());
                }
            };
            update();
            // Update when new elements are inserted, or the tabIndex/disabled attribute updates.
            let observer = new MutationObserver(update);
            observer.observe(ref.current, {
                subtree: true,
                childList: true,
                attributes: true,
                attributeFilter: [
                    "tabIndex",
                    "disabled"
                ]
            });
            return ()=>{
                // Disconnect mutation observer when a React update occurs on the top-level component
                // so we update synchronously after re-rendering. Otherwise React will emit act warnings
                // in tests since mutation observers fire asynchronously. The mutation observer is necessary
                // so we also update if a child component re-renders and adds/removes something tabbable.
                observer.disconnect();
            };
        }
    });
    return isDisabled ? false : hasTabbableChild;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/i18n/dist/real-module.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@react-aria/i18n/dist/real-module.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I18nProvider": () => (/* binding */ $18f2051aff69b9bf$export$a54013f0d02a8f82),
/* harmony export */   "useCollator": () => (/* binding */ $325a3faab7a68acd$export$a16aca283550c30d),
/* harmony export */   "useDateFormatter": () => (/* binding */ $896ba0a80a8f4d36$export$85fd5fdf27bacc79),
/* harmony export */   "useFilter": () => (/* binding */ $bb77f239b46e8c72$export$3274cf84b703fff),
/* harmony export */   "useListFormatter": () => (/* binding */ $33bf17300c498528$export$a2f47a3d2973640),
/* harmony export */   "useLocale": () => (/* binding */ $18f2051aff69b9bf$export$43bb16f9c6d9e3f7),
/* harmony export */   "useLocalizedStringFormatter": () => (/* binding */ $fca6afa0e843324b$export$f12b703ca79dfbb1),
/* harmony export */   "useNumberFormatter": () => (/* binding */ $a916eb452884faea$export$b7a616150fdb9f44)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/ssr/dist/import.mjs");
/* harmony import */ var _internationalized_string__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @internationalized/string */ "./node_modules/@internationalized/string/dist/import.mjs");
/* harmony import */ var _internationalized_date__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @internationalized/date */ "./node_modules/@internationalized/date/dist/import.mjs");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var _internationalized_number__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @internationalized/number */ "./node_modules/@internationalized/number/dist/import.mjs");







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // https://en.wikipedia.org/wiki/Right-to-left
const $148a7a147e38ea7f$var$RTL_SCRIPTS = new Set([
    "Arab",
    "Syrc",
    "Samr",
    "Mand",
    "Thaa",
    "Mend",
    "Nkoo",
    "Adlm",
    "Rohg",
    "Hebr"
]);
const $148a7a147e38ea7f$var$RTL_LANGS = new Set([
    "ae",
    "ar",
    "arc",
    "bcc",
    "bqi",
    "ckb",
    "dv",
    "fa",
    "glk",
    "he",
    "ku",
    "mzn",
    "nqo",
    "pnb",
    "ps",
    "sd",
    "ug",
    "ur",
    "yi"
]);
function $148a7a147e38ea7f$export$702d680b21cbd764(locale) {
    // If the Intl.Locale API is available, use it to get the script for the locale.
    // This is more accurate than guessing by language, since languages can be written in multiple scripts.
    // @ts-ignore
    if (Intl.Locale) {
        // @ts-ignore
        let script = new Intl.Locale(locale).maximize().script;
        return $148a7a147e38ea7f$var$RTL_SCRIPTS.has(script);
    }
    // If not, just guess by the language (first part of the locale)
    let lang = locale.split("-")[0];
    return $148a7a147e38ea7f$var$RTL_LANGS.has(lang);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $1e5a04cdaf7d1af8$export$f09106e7c6677ec5() {
    // @ts-ignore
    let locale = typeof navigator !== "undefined" && (navigator.language || navigator.userLanguage) || "en-US";
    try {
        // @ts-ignore
        Intl.DateTimeFormat.supportedLocalesOf([
            locale
        ]);
    } catch (_err) {
        locale = "en-US";
    }
    return {
        locale: locale,
        direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? "rtl" : "ltr"
    };
}
let $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
let $1e5a04cdaf7d1af8$var$listeners = new Set();
function $1e5a04cdaf7d1af8$var$updateLocale() {
    $1e5a04cdaf7d1af8$var$currentLocale = $1e5a04cdaf7d1af8$export$f09106e7c6677ec5();
    for (let listener of $1e5a04cdaf7d1af8$var$listeners)listener($1e5a04cdaf7d1af8$var$currentLocale);
}
function $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a() {
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_1__.useIsSSR)();
    let [defaultLocale, setDefaultLocale] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($1e5a04cdaf7d1af8$var$currentLocale);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.addEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
        $1e5a04cdaf7d1af8$var$listeners.add(setDefaultLocale);
        return ()=>{
            $1e5a04cdaf7d1af8$var$listeners.delete(setDefaultLocale);
            if ($1e5a04cdaf7d1af8$var$listeners.size === 0) window.removeEventListener("languagechange", $1e5a04cdaf7d1af8$var$updateLocale);
        };
    }, []);
    // We cannot determine the browser's language on the server, so default to
    // en-US. This will be updated after hydration on the client to the correct value.
    if (isSSR) return {
        locale: "en-US",
        direction: "ltr"
    };
    return defaultLocale;
}



const $18f2051aff69b9bf$var$I18nContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createContext(null);
function $18f2051aff69b9bf$export$a54013f0d02a8f82(props) {
    let { locale: locale , children: children  } = props;
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let value = locale ? {
        locale: locale,
        direction: (0, $148a7a147e38ea7f$export$702d680b21cbd764)(locale) ? "rtl" : "ltr"
    } : defaultLocale;
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($18f2051aff69b9bf$var$I18nContext.Provider, {
        value: value
    }, children);
}
function $18f2051aff69b9bf$export$43bb16f9c6d9e3f7() {
    let defaultLocale = (0, $1e5a04cdaf7d1af8$export$188ec29ebc2bdc3a)();
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($18f2051aff69b9bf$var$I18nContext);
    return context || defaultLocale;
}


var $2aa2084a6c2b6b4f$exports = {};
"use strict";


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $fca6afa0e843324b$var$cache = new WeakMap();
function $fca6afa0e843324b$var$getCachedDictionary(strings) {
    let dictionary = $fca6afa0e843324b$var$cache.get(strings);
    if (!dictionary) {
        dictionary = new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_2__.LocalizedStringDictionary)(strings);
        $fca6afa0e843324b$var$cache.set(strings, dictionary);
    }
    return dictionary;
}
function $fca6afa0e843324b$export$f12b703ca79dfbb1(strings) {
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let dictionary = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$fca6afa0e843324b$var$getCachedDictionary(strings), [
        strings
    ]);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _internationalized_string__WEBPACK_IMPORTED_MODULE_2__.LocalizedStringFormatter)(locale, dictionary), [
        locale,
        dictionary
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $33bf17300c498528$export$a2f47a3d2973640(options = {}) {
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    // @ts-ignore
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new Intl.ListFormat(locale, options), [
        locale,
        options
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $896ba0a80a8f4d36$export$85fd5fdf27bacc79(options) {
    // Reuse last options object if it is shallowly equal, which allows the useMemo result to also be reused.
    options = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useDeepMemo)(options, $896ba0a80a8f4d36$var$isEqual);
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _internationalized_date__WEBPACK_IMPORTED_MODULE_4__.DateFormatter)(locale, options), [
        locale,
        options
    ]);
}
function $896ba0a80a8f4d36$var$isEqual(a, b) {
    if (a === b) return true;
    let aKeys = Object.keys(a);
    let bKeys = Object.keys(b);
    if (aKeys.length !== bKeys.length) return false;
    for (let key of aKeys){
        if (b[key] !== a[key]) return false;
    }
    return true;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $a916eb452884faea$export$b7a616150fdb9f44(options = {}) {
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _internationalized_number__WEBPACK_IMPORTED_MODULE_5__.NumberFormatter)(locale, options), [
        locale,
        options
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
let $325a3faab7a68acd$var$cache = new Map();
function $325a3faab7a68acd$export$a16aca283550c30d(options) {
    let { locale: locale  } = (0, $18f2051aff69b9bf$export$43bb16f9c6d9e3f7)();
    let cacheKey = locale + (options ? Object.entries(options).sort((a, b)=>a[0] < b[0] ? -1 : 1).join() : "");
    if ($325a3faab7a68acd$var$cache.has(cacheKey)) return $325a3faab7a68acd$var$cache.get(cacheKey);
    let formatter = new Intl.Collator(locale, options);
    $325a3faab7a68acd$var$cache.set(cacheKey, formatter);
    return formatter;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $bb77f239b46e8c72$export$3274cf84b703fff(options) {
    let collator = (0, $325a3faab7a68acd$export$a16aca283550c30d)({
        usage: "search",
        ...options
    });
    // TODO(later): these methods don't currently support the ignorePunctuation option.
    let startsWith = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        // Normalize both strings so we can slice safely
        // TODO: take into account the ignorePunctuation option as well...
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        return collator.compare(string.slice(0, substring.length), substring) === 0;
    }, [
        collator
    ]);
    let endsWith = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        return collator.compare(string.slice(-substring.length), substring) === 0;
    }, [
        collator
    ]);
    let contains = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((string, substring)=>{
        if (substring.length === 0) return true;
        string = string.normalize("NFC");
        substring = substring.normalize("NFC");
        let scan = 0;
        let sliceLen = substring.length;
        for(; scan + sliceLen <= string.length; scan++){
            let slice = string.slice(scan, scan + sliceLen);
            if (collator.compare(substring, slice) === 0) return true;
        }
        return false;
    }, [
        collator
    ]);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            startsWith: startsWith,
            endsWith: endsWith,
            contains: contains
        }), [
        startsWith,
        endsWith,
        contains
    ]);
}





//# sourceMappingURL=real-module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/interactions/dist/import.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@react-aria/interactions/dist/import.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "PressResponder": () => (/* binding */ $f1ab8c75478c6f73$export$3351871ee4b288b8),
/* harmony export */   "Pressable": () => (/* binding */ $3b117e43dc0ca95d$export$27c701ed9e449e99),
/* harmony export */   "getInteractionModality": () => (/* binding */ $507fabe10e71c6fb$export$630ff653c5ada6a9),
/* harmony export */   "isFocusVisible": () => (/* binding */ $507fabe10e71c6fb$export$b9b3dfddab17db27),
/* harmony export */   "setInteractionModality": () => (/* binding */ $507fabe10e71c6fb$export$8397ddfc504fdb9a),
/* harmony export */   "useFocus": () => (/* binding */ $a1ea59d68270f0dd$export$f8168d8dd8fd66e6),
/* harmony export */   "useFocusVisible": () => (/* binding */ $507fabe10e71c6fb$export$ffd9e5021c1fb2d6),
/* harmony export */   "useFocusVisibleListener": () => (/* binding */ $507fabe10e71c6fb$export$ec71b4b83ac08ec3),
/* harmony export */   "useFocusWithin": () => (/* binding */ $9ab94262bd0047c7$export$420e68273165f4ec),
/* harmony export */   "useHover": () => (/* binding */ $6179b936705e76d3$export$ae780daf29e6d456),
/* harmony export */   "useInteractOutside": () => (/* binding */ $e0b6e0b68ec7f50f$export$872b660ac5a1ff98),
/* harmony export */   "useInteractionModality": () => (/* binding */ $507fabe10e71c6fb$export$98e20ec92f614cfe),
/* harmony export */   "useKeyboard": () => (/* binding */ $46d819fcbaf35654$export$8f71654801c2f7cd),
/* harmony export */   "useLongPress": () => (/* binding */ $8a26561d2877236e$export$c24ed0104d07eab9),
/* harmony export */   "useMove": () => (/* binding */ $e8a7022cf87cba2a$export$36da96379f79f245),
/* harmony export */   "usePress": () => (/* binding */ $f6c31cce2adf654f$export$45712eceda6fad21),
/* harmony export */   "useScrollWheel": () => (/* binding */ $7d0a636d7a4dcefd$export$2123ff2b87c81ca)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/_/_class_private_field_get */ "./node_modules/@swc/helpers/esm/_class_private_field_get.js");
/* harmony import */ var _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/_/_class_private_field_init */ "./node_modules/@swc/helpers/esm/_class_private_field_init.js");
/* harmony import */ var _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @swc/helpers/_/_class_private_field_set */ "./node_modules/@swc/helpers/esm/_class_private_field_set.js");
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/ssr/dist/import.mjs");







/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// Note that state only matters here for iOS. Non-iOS gets user-select: none applied to the target element
// rather than at the document level so we just need to apply/remove user-select: none for each pressed element individually
let $14c0b72509d70225$var$state = "default";
let $14c0b72509d70225$var$savedUserSelect = "";
let $14c0b72509d70225$var$modifiedElementMap = new WeakMap();
function $14c0b72509d70225$export$16a4697467175487(target) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isIOS)()) {
        if ($14c0b72509d70225$var$state === "default") {
            $14c0b72509d70225$var$savedUserSelect = document.documentElement.style.webkitUserSelect;
            document.documentElement.style.webkitUserSelect = "none";
        }
        $14c0b72509d70225$var$state = "disabled";
    } else if (target instanceof HTMLElement || target instanceof SVGElement) {
        // If not iOS, store the target's original user-select and change to user-select: none
        // Ignore state since it doesn't apply for non iOS
        $14c0b72509d70225$var$modifiedElementMap.set(target, target.style.userSelect);
        target.style.userSelect = "none";
    }
}
function $14c0b72509d70225$export$b0d6fa1ab32e3295(target) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isIOS)()) {
        // If the state is already default, there's nothing to do.
        // If it is restoring, then there's no need to queue a second restore.
        if ($14c0b72509d70225$var$state !== "disabled") return;
        $14c0b72509d70225$var$state = "restoring";
        // There appears to be a delay on iOS where selection still might occur
        // after pointer up, so wait a bit before removing user-select.
        setTimeout(()=>{
            // Wait for any CSS transitions to complete so we don't recompute style
            // for the whole page in the middle of the animation and cause jank.
            (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.runAfterTransition)(()=>{
                // Avoid race conditions
                if ($14c0b72509d70225$var$state === "restoring") {
                    if (document.documentElement.style.webkitUserSelect === "none") document.documentElement.style.webkitUserSelect = $14c0b72509d70225$var$savedUserSelect || "";
                    $14c0b72509d70225$var$savedUserSelect = "";
                    $14c0b72509d70225$var$state = "default";
                }
            });
        }, 300);
    } else if (target instanceof HTMLElement || target instanceof SVGElement) // If not iOS, restore the target's original user-select if any
    // Ignore state since it doesn't apply for non iOS
    {
        if (target && $14c0b72509d70225$var$modifiedElementMap.has(target)) {
            let targetOldUserSelect = $14c0b72509d70225$var$modifiedElementMap.get(target);
            if (target.style.userSelect === "none") target.style.userSelect = targetOldUserSelect;
            if (target.getAttribute("style") === "") target.removeAttribute("style");
            $14c0b72509d70225$var$modifiedElementMap.delete(target);
        }
    }
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $ae1eeba8b9eafd08$export$5165eccb35aaadb5 = (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createContext(null);
$ae1eeba8b9eafd08$export$5165eccb35aaadb5.displayName = "PressResponderContext";



function $f6c31cce2adf654f$var$usePressResponderContext(props) {
    // Consume context from <PressResponder> and merge with props.
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    if (context) {
        let { register: register , ...contextProps } = context;
        props = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(contextProps, props);
        register();
    }
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useSyncRef)(context, props.ref);
    return props;
}
var $f6c31cce2adf654f$var$_shouldStopPropagation = /*#__PURE__*/ new WeakMap();
class $f6c31cce2adf654f$var$PressEvent {
    continuePropagation() {
        (0, _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, false);
    }
    get shouldStopPropagation() {
        return (0, _swc_helpers_class_private_field_get__WEBPACK_IMPORTED_MODULE_3__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation);
    }
    constructor(type, pointerType, originalEvent){
        (0, _swc_helpers_class_private_field_init__WEBPACK_IMPORTED_MODULE_4__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, {
            writable: true,
            value: void 0
        });
        (0, _swc_helpers_class_private_field_set__WEBPACK_IMPORTED_MODULE_2__._)(this, $f6c31cce2adf654f$var$_shouldStopPropagation, true);
        this.type = type;
        this.pointerType = pointerType;
        this.target = originalEvent.currentTarget;
        this.shiftKey = originalEvent.shiftKey;
        this.metaKey = originalEvent.metaKey;
        this.ctrlKey = originalEvent.ctrlKey;
        this.altKey = originalEvent.altKey;
    }
}
function $f6c31cce2adf654f$export$45712eceda6fad21(props) {
    let { onPress: onPress , onPressChange: onPressChange , onPressStart: onPressStart , onPressEnd: onPressEnd , onPressUp: onPressUp , isDisabled: isDisabled , isPressed: isPressedProp , preventFocusOnPress: preventFocusOnPress , shouldCancelOnPointerExit: shouldCancelOnPointerExit , allowTextSelectionOnPress: allowTextSelectionOnPress , // eslint-disable-next-line @typescript-eslint/no-unused-vars
    ref: _ , ...domProps } = $f6c31cce2adf654f$var$usePressResponderContext(props);
    let [isPressed, setPressed] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isPressed: false,
        ignoreEmulatedMouseEvents: false,
        ignoreClickAfterPress: false,
        didFirePressStart: false,
        activePointerId: null,
        target: null,
        isOverTarget: false,
        pointerType: null
    });
    let { addGlobalListener: addGlobalListener , removeAllGlobalListeners: removeAllGlobalListeners  } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useGlobalListeners)();
    let triggerPressStart = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((originalEvent, pointerType)=>{
        let state = ref.current;
        if (isDisabled || state.didFirePressStart) return;
        let shouldStopPropagation = true;
        if (onPressStart) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressstart", pointerType, originalEvent);
            onPressStart(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(true);
        state.didFirePressStart = true;
        setPressed(true);
        return shouldStopPropagation;
    });
    let triggerPressEnd = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((originalEvent, pointerType, wasPressed = true)=>{
        let state = ref.current;
        if (!state.didFirePressStart) return;
        state.ignoreClickAfterPress = true;
        state.didFirePressStart = false;
        let shouldStopPropagation = true;
        if (onPressEnd) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressend", pointerType, originalEvent);
            onPressEnd(event);
            shouldStopPropagation = event.shouldStopPropagation;
        }
        if (onPressChange) onPressChange(false);
        setPressed(false);
        if (onPress && wasPressed && !isDisabled) {
            let event = new $f6c31cce2adf654f$var$PressEvent("press", pointerType, originalEvent);
            onPress(event);
            shouldStopPropagation && (shouldStopPropagation = event.shouldStopPropagation);
        }
        return shouldStopPropagation;
    });
    let triggerPressUp = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((originalEvent, pointerType)=>{
        if (isDisabled) return;
        if (onPressUp) {
            let event = new $f6c31cce2adf654f$var$PressEvent("pressup", pointerType, originalEvent);
            onPressUp(event);
            return event.shouldStopPropagation;
        }
        return true;
    });
    let cancel = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((e)=>{
        let state = ref.current;
        if (state.isPressed) {
            if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
            state.isPressed = false;
            state.isOverTarget = false;
            state.activePointerId = null;
            state.pointerType = null;
            removeAllGlobalListeners();
            if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
        }
    });
    let cancelOnPointerExit = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((e)=>{
        if (shouldCancelOnPointerExit) cancel(e);
    });
    let pressProps = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let state = ref.current;
        let pressProps = {
            onKeyDown (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && e.currentTarget.contains(e.target)) {
                    if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                    // If the event is repeating, it may have started on a different element
                    // after which focus moved to the current element. Ignore these events and
                    // only handle the first key down event.
                    let shouldStopPropagation = true;
                    if (!state.isPressed && !e.repeat) {
                        state.target = e.currentTarget;
                        state.isPressed = true;
                        shouldStopPropagation = triggerPressStart(e, "keyboard");
                        // Focus may move before the key up event, so register the event on the document
                        // instead of the same element where the key down event occurred.
                        addGlobalListener(document, "keyup", onKeyUp, false);
                    }
                    if (shouldStopPropagation) e.stopPropagation();
                } else if (e.key === "Enter" && $f6c31cce2adf654f$var$isHTMLAnchorLink(e.currentTarget)) // If the target is a link, we won't have handled this above because we want the default
                // browser behavior to open the link when pressing Enter. But we still need to prevent
                // default so that elements above do not also handle it (e.g. table row).
                e.stopPropagation();
            },
            onKeyUp (e) {
                if ($f6c31cce2adf654f$var$isValidKeyboardEvent(e.nativeEvent, e.currentTarget) && !e.repeat && e.currentTarget.contains(e.target)) triggerPressUp($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard");
            },
            onClick (e) {
                if (e && !e.currentTarget.contains(e.target)) return;
                if (e && e.button === 0) {
                    let shouldStopPropagation = true;
                    if (isDisabled) e.preventDefault();
                    // If triggered from a screen reader or by using element.click(),
                    // trigger as if it were a keyboard click.
                    if (!state.ignoreClickAfterPress && !state.ignoreEmulatedMouseEvents && (state.pointerType === "virtual" || (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualClick)(e.nativeEvent))) {
                        // Ensure the element receives focus (VoiceOver on iOS does not do this)
                        if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.focusWithoutScrolling)(e.currentTarget);
                        let stopPressStart = triggerPressStart(e, "virtual");
                        let stopPressUp = triggerPressUp(e, "virtual");
                        let stopPressEnd = triggerPressEnd(e, "virtual");
                        shouldStopPropagation = stopPressStart && stopPressUp && stopPressEnd;
                    }
                    state.ignoreEmulatedMouseEvents = false;
                    state.ignoreClickAfterPress = false;
                    if (shouldStopPropagation) e.stopPropagation();
                }
            }
        };
        let onKeyUp = (e)=>{
            if (state.isPressed && $f6c31cce2adf654f$var$isValidKeyboardEvent(e, state.target)) {
                if ($f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(e.target, e.key)) e.preventDefault();
                state.isPressed = false;
                let target = e.target;
                let shouldStopPropagation = triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), "keyboard", state.target.contains(target));
                removeAllGlobalListeners();
                if (shouldStopPropagation) e.stopPropagation();
                // If the target is a link, trigger the click method to open the URL,
                // but defer triggering pressEnd until onClick event handler.
                if (state.target instanceof HTMLElement && state.target.contains(target) && ($f6c31cce2adf654f$var$isHTMLAnchorLink(state.target) || state.target.getAttribute("role") === "link")) state.target.click();
            }
        };
        if (typeof PointerEvent !== "undefined") {
            pressProps.onPointerDown = (e)=>{
                // Only handle left clicks, and ignore events that bubbled through portals.
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // iOS safari fires pointer events from VoiceOver with incorrect coordinates/target.
                // Ignore and let the onClick handler take care of it instead.
                // https://bugs.webkit.org/show_bug.cgi?id=222627
                // https://bugs.webkit.org/show_bug.cgi?id=223202
                if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualPointerEvent)(e.nativeEvent)) {
                    state.pointerType = "virtual";
                    return;
                }
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on pointer down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                state.pointerType = e.pointerType;
                let shouldStopPropagation = true;
                if (!state.isPressed) {
                    state.isPressed = true;
                    state.isOverTarget = true;
                    state.activePointerId = e.pointerId;
                    state.target = e.currentTarget;
                    if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.focusWithoutScrolling)(e.currentTarget);
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    addGlobalListener(document, "pointermove", onPointerMove, false);
                    addGlobalListener(document, "pointerup", onPointerUp, false);
                    addGlobalListener(document, "pointercancel", onPointerCancel, false);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseDown = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (e.button === 0) {
                    // Chrome and Firefox on touch Windows devices require mouse down events
                    // to be canceled in addition to pointer events, or an extra asynchronous
                    // focus event will be fired.
                    if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                    e.stopPropagation();
                }
            };
            pressProps.onPointerUp = (e)=>{
                // iOS fires pointerup with zero width and height, so check the pointerType recorded during pointerdown.
                if (!e.currentTarget.contains(e.target) || state.pointerType === "virtual") return;
                // Only handle left clicks
                // Safari on iOS sometimes fires pointerup events, even
                // when the touch isn't over the target, so double check.
                if (e.button === 0 && $f6c31cce2adf654f$var$isOverTarget(e, e.currentTarget)) triggerPressUp(e, state.pointerType || e.pointerType);
            };
            // Safari on iOS < 13.2 does not implement pointerenter/pointerleave events correctly.
            // Use pointer move events instead to implement our own hit testing.
            // See https://bugs.webkit.org/show_bug.cgi?id=199803
            let onPointerMove = (e)=>{
                if (e.pointerId !== state.activePointerId) return;
                if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        triggerPressStart($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    cancelOnPointerExit(e);
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.activePointerId && state.isPressed && e.button === 0) {
                    if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                    else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                    state.isPressed = false;
                    state.isOverTarget = false;
                    state.activePointerId = null;
                    state.pointerType = null;
                    removeAllGlobalListeners();
                    if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                }
            };
            let onPointerCancel = (e)=>{
                cancel(e);
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                // Safari does not call onPointerCancel when a drag starts, whereas Chrome and Firefox do.
                cancel(e);
            };
        } else {
            pressProps.onMouseDown = (e)=>{
                // Only handle left clicks
                if (e.button !== 0 || !e.currentTarget.contains(e.target)) return;
                // Due to browser inconsistencies, especially on mobile browsers, we prevent
                // default on mouse down and handle focusing the pressable element ourselves.
                if ($f6c31cce2adf654f$var$shouldPreventDefault(e.currentTarget)) e.preventDefault();
                if (state.ignoreEmulatedMouseEvents) {
                    e.stopPropagation();
                    return;
                }
                state.isPressed = true;
                state.isOverTarget = true;
                state.target = e.currentTarget;
                state.pointerType = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualClick)(e.nativeEvent) ? "virtual" : "mouse";
                if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.focusWithoutScrolling)(e.currentTarget);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener(document, "mouseup", onMouseUp, false);
            };
            pressProps.onMouseEnter = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = true;
                    shouldStopPropagation = triggerPressStart(e, state.pointerType);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseLeave = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let shouldStopPropagation = true;
                if (state.isPressed && !state.ignoreEmulatedMouseEvents) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onMouseUp = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.ignoreEmulatedMouseEvents && e.button === 0) triggerPressUp(e, state.pointerType);
            };
            let onMouseUp = (e)=>{
                // Only handle left clicks
                if (e.button !== 0) return;
                state.isPressed = false;
                removeAllGlobalListeners();
                if (state.ignoreEmulatedMouseEvents) {
                    state.ignoreEmulatedMouseEvents = false;
                    return;
                }
                if ($f6c31cce2adf654f$var$isOverTarget(e, state.target)) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType);
                else if (state.isOverTarget) triggerPressEnd($f6c31cce2adf654f$var$createEvent(state.target, e), state.pointerType, false);
                state.isOverTarget = false;
            };
            pressProps.onTouchStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                let touch = $f6c31cce2adf654f$var$getTouchFromEvent(e.nativeEvent);
                if (!touch) return;
                state.activePointerId = touch.identifier;
                state.ignoreEmulatedMouseEvents = true;
                state.isOverTarget = true;
                state.isPressed = true;
                state.target = e.currentTarget;
                state.pointerType = "touch";
                // Due to browser inconsistencies, especially on mobile browsers, we prevent default
                // on the emulated mouse event and handle focusing the pressable element ourselves.
                if (!isDisabled && !preventFocusOnPress) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.focusWithoutScrolling)(e.currentTarget);
                if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$16a4697467175487)(state.target);
                let shouldStopPropagation = triggerPressStart(e, state.pointerType);
                if (shouldStopPropagation) e.stopPropagation();
                addGlobalListener(window, "scroll", onScroll, true);
            };
            pressProps.onTouchMove = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    if (!state.isOverTarget) {
                        state.isOverTarget = true;
                        shouldStopPropagation = triggerPressStart(e, state.pointerType);
                    }
                } else if (state.isOverTarget) {
                    state.isOverTarget = false;
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                    cancelOnPointerExit(e);
                }
                if (shouldStopPropagation) e.stopPropagation();
            };
            pressProps.onTouchEnd = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                if (!state.isPressed) {
                    e.stopPropagation();
                    return;
                }
                let touch = $f6c31cce2adf654f$var$getTouchById(e.nativeEvent, state.activePointerId);
                let shouldStopPropagation = true;
                if (touch && $f6c31cce2adf654f$var$isOverTarget(touch, e.currentTarget)) {
                    triggerPressUp(e, state.pointerType);
                    shouldStopPropagation = triggerPressEnd(e, state.pointerType);
                } else if (state.isOverTarget) shouldStopPropagation = triggerPressEnd(e, state.pointerType, false);
                if (shouldStopPropagation) e.stopPropagation();
                state.isPressed = false;
                state.activePointerId = null;
                state.isOverTarget = false;
                state.ignoreEmulatedMouseEvents = true;
                if (!allowTextSelectionOnPress) (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(state.target);
                removeAllGlobalListeners();
            };
            pressProps.onTouchCancel = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                e.stopPropagation();
                if (state.isPressed) cancel(e);
            };
            let onScroll = (e)=>{
                if (state.isPressed && e.target.contains(state.target)) cancel({
                    currentTarget: state.target,
                    shiftKey: false,
                    ctrlKey: false,
                    metaKey: false,
                    altKey: false
                });
            };
            pressProps.onDragStart = (e)=>{
                if (!e.currentTarget.contains(e.target)) return;
                cancel(e);
            };
        }
        return pressProps;
    }, [
        addGlobalListener,
        isDisabled,
        preventFocusOnPress,
        removeAllGlobalListeners,
        allowTextSelectionOnPress,
        cancel,
        cancelOnPointerExit,
        triggerPressEnd,
        triggerPressStart,
        triggerPressUp
    ]);
    // Remove user-select: none in case component unmounts immediately after pressStart
    // eslint-disable-next-line arrow-body-style
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return ()=>{
            if (!allowTextSelectionOnPress) // eslint-disable-next-line react-hooks/exhaustive-deps
            (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)(ref.current.target);
        };
    }, [
        allowTextSelectionOnPress
    ]);
    return {
        isPressed: isPressedProp || isPressed,
        pressProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(domProps, pressProps)
    };
}
function $f6c31cce2adf654f$var$isHTMLAnchorLink(target) {
    return target.tagName === "A" && target.hasAttribute("href");
}
function $f6c31cce2adf654f$var$isValidKeyboardEvent(event, currentTarget) {
    const { key: key , code: code  } = event;
    const element = currentTarget;
    const role = element.getAttribute("role");
    // Accessibility for keyboards. Space and Enter only.
    // "Spacebar" is for IE 11
    return (key === "Enter" || key === " " || key === "Spacebar" || code === "Space") && !(element instanceof HTMLInputElement && !$f6c31cce2adf654f$var$isValidInputKey(element, key) || element instanceof HTMLTextAreaElement || element.isContentEditable) && // A link with a valid href should be handled natively,
    // unless it also has role='button' and was triggered using Space.
    (!$f6c31cce2adf654f$var$isHTMLAnchorLink(element) || role === "button" && key !== "Enter") && // An element with role='link' should only trigger with Enter key
    !(role === "link" && key !== "Enter");
}
function $f6c31cce2adf654f$var$getTouchFromEvent(event) {
    const { targetTouches: targetTouches  } = event;
    if (targetTouches.length > 0) return targetTouches[0];
    return null;
}
function $f6c31cce2adf654f$var$getTouchById(event, pointerId) {
    const changedTouches = event.changedTouches;
    for(let i = 0; i < changedTouches.length; i++){
        const touch = changedTouches[i];
        if (touch.identifier === pointerId) return touch;
    }
    return null;
}
function $f6c31cce2adf654f$var$createEvent(target, e) {
    return {
        currentTarget: target,
        shiftKey: e.shiftKey,
        ctrlKey: e.ctrlKey,
        metaKey: e.metaKey,
        altKey: e.altKey
    };
}
function $f6c31cce2adf654f$var$getPointClientRect(point) {
    let offsetX = point.width / 2 || point.radiusX || 0;
    let offsetY = point.height / 2 || point.radiusY || 0;
    return {
        top: point.clientY - offsetY,
        right: point.clientX + offsetX,
        bottom: point.clientY + offsetY,
        left: point.clientX - offsetX
    };
}
function $f6c31cce2adf654f$var$areRectanglesOverlapping(a, b) {
    // check if they cannot overlap on x axis
    if (a.left > b.right || b.left > a.right) return false;
    // check if they cannot overlap on y axis
    if (a.top > b.bottom || b.top > a.bottom) return false;
    return true;
}
function $f6c31cce2adf654f$var$isOverTarget(point, target) {
    let rect = target.getBoundingClientRect();
    let pointRect = $f6c31cce2adf654f$var$getPointClientRect(point);
    return $f6c31cce2adf654f$var$areRectanglesOverlapping(rect, pointRect);
}
function $f6c31cce2adf654f$var$shouldPreventDefault(target) {
    // We cannot prevent default if the target is a draggable element.
    return !(target instanceof HTMLElement) || !target.draggable;
}
function $f6c31cce2adf654f$var$shouldPreventDefaultKeyboard(target, key) {
    if (target instanceof HTMLInputElement) return !$f6c31cce2adf654f$var$isValidInputKey(target, key);
    if (target instanceof HTMLButtonElement) return target.type !== "submit" && target.type !== "reset";
    return true;
}
const $f6c31cce2adf654f$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
function $f6c31cce2adf654f$var$isValidInputKey(target, key) {
    // Only space should toggle checkboxes and radios, not enter.
    return target.type === "checkbox" || target.type === "radio" ? key === " " : $f6c31cce2adf654f$var$nonTextInputTypes.has(target.type);
}



const $3b117e43dc0ca95d$export$27c701ed9e449e99 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).forwardRef(({ children: children , ...props }, ref)=>{
    let newRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    ref = ref !== null && ref !== void 0 ? ref : newRef;
    let { pressProps: pressProps  } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        ...props,
        ref: ref
    });
    let child = (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).Children.only(children);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).cloneElement(child, // @ts-ignore
    {
        ref: ref,
        ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(child.props, pressProps)
    });
});


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $f1ab8c75478c6f73$export$3351871ee4b288b8 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).forwardRef(({ children: children , ...props }, ref)=>{
    let isRegistered = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    let prevContext = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5));
    let context = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(prevContext || {}, {
        ...props,
        ref: ref || (prevContext === null || prevContext === void 0 ? void 0 : prevContext.ref),
        register () {
            isRegistered.current = true;
            if (prevContext) prevContext.register();
        }
    });
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useSyncRef)(prevContext, ref);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isRegistered.current) {
            console.warn("A PressResponder was rendered without a pressable child. Either call the usePress hook, or wrap your DOM node with <Pressable> component.");
            isRegistered.current = true; // only warn once in strict mode.
        }
    }, []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement((0, $ae1eeba8b9eafd08$export$5165eccb35aaadb5).Provider, {
        value: context
    }, children);
});


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $8a9cb279dc87e130$export$905e7fc544a71f36 {
    isDefaultPrevented() {
        return this.nativeEvent.defaultPrevented;
    }
    preventDefault() {
        this.defaultPrevented = true;
        this.nativeEvent.preventDefault();
    }
    stopPropagation() {
        this.nativeEvent.stopPropagation();
        this.isPropagationStopped = ()=>true;
    }
    isPropagationStopped() {
        return false;
    }
    persist() {}
    constructor(type, nativeEvent){
        this.nativeEvent = nativeEvent;
        this.target = nativeEvent.target;
        this.currentTarget = nativeEvent.currentTarget;
        this.relatedTarget = nativeEvent.relatedTarget;
        this.bubbles = nativeEvent.bubbles;
        this.cancelable = nativeEvent.cancelable;
        this.defaultPrevented = nativeEvent.defaultPrevented;
        this.eventPhase = nativeEvent.eventPhase;
        this.isTrusted = nativeEvent.isTrusted;
        this.timeStamp = nativeEvent.timeStamp;
        this.type = type;
    }
}
function $8a9cb279dc87e130$export$715c682d09d639cc(onBlur) {
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocused: false,
        observer: null
    });
    // Clean up MutationObserver on unmount. See below.
    // eslint-disable-next-line arrow-body-style
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        const state = stateRef.current;
        return ()=>{
            if (state.observer) {
                state.observer.disconnect();
                state.observer = null;
            }
        };
    }, []);
    let dispatchBlur = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((e)=>{
        onBlur === null || onBlur === void 0 ? void 0 : onBlur(e);
    });
    // This function is called during a React onFocus event.
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // React does not fire onBlur when an element is disabled. https://github.com/facebook/react/issues/9142
        // Most browsers fire a native focusout event in this case, except for Firefox. In that case, we use a
        // MutationObserver to watch for the disabled attribute, and dispatch these events ourselves.
        // For browsers that do, focusout fires before the MutationObserver, so onBlur should not fire twice.
        if (e.target instanceof HTMLButtonElement || e.target instanceof HTMLInputElement || e.target instanceof HTMLTextAreaElement || e.target instanceof HTMLSelectElement) {
            stateRef.current.isFocused = true;
            let target = e.target;
            let onBlurHandler = (e)=>{
                stateRef.current.isFocused = false;
                if (target.disabled) // For backward compatibility, dispatch a (fake) React synthetic event.
                dispatchBlur(new $8a9cb279dc87e130$export$905e7fc544a71f36("blur", e));
                // We no longer need the MutationObserver once the target is blurred.
                if (stateRef.current.observer) {
                    stateRef.current.observer.disconnect();
                    stateRef.current.observer = null;
                }
            };
            target.addEventListener("focusout", onBlurHandler, {
                once: true
            });
            stateRef.current.observer = new MutationObserver(()=>{
                if (stateRef.current.isFocused && target.disabled) {
                    stateRef.current.observer.disconnect();
                    let relatedTargetEl = target === document.activeElement ? null : document.activeElement;
                    target.dispatchEvent(new FocusEvent("blur", {
                        relatedTarget: relatedTargetEl
                    }));
                    target.dispatchEvent(new FocusEvent("focusout", {
                        bubbles: true,
                        relatedTarget: relatedTargetEl
                    }));
                }
            });
            stateRef.current.observer.observe(target, {
                attributes: true,
                attributeFilter: [
                    "disabled"
                ]
            });
        }
    }, [
        dispatchBlur
    ]);
}


function $a1ea59d68270f0dd$export$f8168d8dd8fd66e6(props) {
    let { isDisabled: isDisabled , onFocus: onFocusProp , onBlur: onBlurProp , onFocusChange: onFocusChange  } = props;
    const onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        if (e.target === e.currentTarget) {
            if (onBlurProp) onBlurProp(e);
            if (onFocusChange) onFocusChange(false);
            return true;
        }
    }, [
        onBlurProp,
        onFocusChange
    ]);
    const onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    const onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (e.target === e.currentTarget && document.activeElement === e.target) {
            if (onFocusProp) onFocusProp(e);
            if (onFocusChange) onFocusChange(true);
            onSyntheticFocus(e);
        }
    }, [
        onFocusChange,
        onFocusProp,
        onSyntheticFocus
    ]);
    return {
        focusProps: {
            onFocus: !isDisabled && (onFocusProp || onFocusChange || onBlurProp) ? onFocus : undefined,
            onBlur: !isDisabled && (onBlurProp || onFocusChange) ? onBlur : undefined
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions



let $507fabe10e71c6fb$var$currentModality = null;
let $507fabe10e71c6fb$var$changeHandlers = new Set();
let $507fabe10e71c6fb$var$hasSetupGlobalListeners = false;
let $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
let $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
// Only Tab or Esc keys will make focus visible on text input elements
const $507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS = {
    Tab: true,
    Escape: true
};
function $507fabe10e71c6fb$var$triggerChangeHandlers(modality, e) {
    for (let handler of $507fabe10e71c6fb$var$changeHandlers)handler(modality, e);
}
/**
 * Helper function to determine if a KeyboardEvent is unmodified and could make keyboard focus styles visible.
 */ function $507fabe10e71c6fb$var$isValidKey(e) {
    // Control and Shift keys trigger when navigating back to the tab with keyboard.
    return !(e.metaKey || !(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isMac)() && e.altKey || e.ctrlKey || e.key === "Control" || e.key === "Shift" || e.key === "Meta");
}
function $507fabe10e71c6fb$var$handleKeyboardEvent(e) {
    $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
    if ($507fabe10e71c6fb$var$isValidKey(e)) {
        $507fabe10e71c6fb$var$currentModality = "keyboard";
        $507fabe10e71c6fb$var$triggerChangeHandlers("keyboard", e);
    }
}
function $507fabe10e71c6fb$var$handlePointerEvent(e) {
    $507fabe10e71c6fb$var$currentModality = "pointer";
    if (e.type === "mousedown" || e.type === "pointerdown") {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$triggerChangeHandlers("pointer", e);
    }
}
function $507fabe10e71c6fb$var$handleClickEvent(e) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isVirtualClick)(e)) {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        $507fabe10e71c6fb$var$currentModality = "virtual";
    }
}
function $507fabe10e71c6fb$var$handleFocusEvent(e) {
    // Firefox fires two extra focus events when the user first clicks into an iframe:
    // first on the window, then on the document. We ignore these events so they don't
    // cause keyboard focus rings to appear.
    if (e.target === window || e.target === document) return;
    // If a focus event occurs without a preceding keyboard or pointer event, switch to virtual modality.
    // This occurs, for example, when navigating a form with the next/previous buttons on iOS.
    if (!$507fabe10e71c6fb$var$hasEventBeforeFocus && !$507fabe10e71c6fb$var$hasBlurredWindowRecently) {
        $507fabe10e71c6fb$var$currentModality = "virtual";
        $507fabe10e71c6fb$var$triggerChangeHandlers("virtual", e);
    }
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = false;
}
function $507fabe10e71c6fb$var$handleWindowBlur() {
    // When the window is blurred, reset state. This is necessary when tabbing out of the window,
    // for example, since a subsequent focus event won't be fired.
    $507fabe10e71c6fb$var$hasEventBeforeFocus = false;
    $507fabe10e71c6fb$var$hasBlurredWindowRecently = true;
}
/**
 * Setup global event listeners to control when keyboard focus style should be visible.
 */ function $507fabe10e71c6fb$var$setupGlobalFocusEvents() {
    if (typeof window === "undefined" || $507fabe10e71c6fb$var$hasSetupGlobalListeners) return;
    // Programmatic focus() calls shouldn't affect the current input modality.
    // However, we need to detect other cases when a focus event occurs without
    // a preceding user event (e.g. screen reader focus). Overriding the focus
    // method on HTMLElement.prototype is a bit hacky, but works.
    let focus = HTMLElement.prototype.focus;
    HTMLElement.prototype.focus = function() {
        $507fabe10e71c6fb$var$hasEventBeforeFocus = true;
        focus.apply(this, arguments);
    };
    document.addEventListener("keydown", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener("keyup", $507fabe10e71c6fb$var$handleKeyboardEvent, true);
    document.addEventListener("click", $507fabe10e71c6fb$var$handleClickEvent, true);
    // Register focus events on the window so they are sure to happen
    // before React's event listeners (registered on the document).
    window.addEventListener("focus", $507fabe10e71c6fb$var$handleFocusEvent, true);
    window.addEventListener("blur", $507fabe10e71c6fb$var$handleWindowBlur, false);
    if (typeof PointerEvent !== "undefined") {
        document.addEventListener("pointerdown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("pointermove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("pointerup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    } else {
        document.addEventListener("mousedown", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("mousemove", $507fabe10e71c6fb$var$handlePointerEvent, true);
        document.addEventListener("mouseup", $507fabe10e71c6fb$var$handlePointerEvent, true);
    }
    $507fabe10e71c6fb$var$hasSetupGlobalListeners = true;
}
if (typeof document !== "undefined") {
    if (document.readyState !== "loading") $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    else document.addEventListener("DOMContentLoaded", $507fabe10e71c6fb$var$setupGlobalFocusEvents);
}
function $507fabe10e71c6fb$export$b9b3dfddab17db27() {
    return $507fabe10e71c6fb$var$currentModality !== "pointer";
}
function $507fabe10e71c6fb$export$630ff653c5ada6a9() {
    return $507fabe10e71c6fb$var$currentModality;
}
function $507fabe10e71c6fb$export$8397ddfc504fdb9a(modality) {
    $507fabe10e71c6fb$var$currentModality = modality;
    $507fabe10e71c6fb$var$triggerChangeHandlers(modality, null);
}
function $507fabe10e71c6fb$export$98e20ec92f614cfe() {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    let [modality, setModality] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($507fabe10e71c6fb$var$currentModality);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let handler = ()=>{
            setModality($507fabe10e71c6fb$var$currentModality);
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    }, []);
    return (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_5__.useIsSSR)() ? null : modality;
}
/**
 * If this is attached to text input component, return if the event is a focus event (Tab/Escape keys pressed) so that
 * focus visible style can be properly set.
 */ function $507fabe10e71c6fb$var$isKeyboardFocusEvent(isTextInput, modality, e) {
    return !(isTextInput && modality === "keyboard" && e instanceof KeyboardEvent && !$507fabe10e71c6fb$var$FOCUS_VISIBLE_INPUT_KEYS[e.key]);
}
function $507fabe10e71c6fb$export$ffd9e5021c1fb2d6(props = {}) {
    let { isTextInput: isTextInput , autoFocus: autoFocus  } = props;
    let [isFocusVisibleState, setFocusVisible] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(autoFocus || $507fabe10e71c6fb$export$b9b3dfddab17db27());
    $507fabe10e71c6fb$export$ec71b4b83ac08ec3((isFocusVisible)=>{
        setFocusVisible(isFocusVisible);
    }, [
        isTextInput
    ], {
        isTextInput: isTextInput
    });
    return {
        isFocusVisible: isFocusVisibleState
    };
}
function $507fabe10e71c6fb$export$ec71b4b83ac08ec3(fn, deps, opts) {
    $507fabe10e71c6fb$var$setupGlobalFocusEvents();
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let handler = (modality, e)=>{
            if (!$507fabe10e71c6fb$var$isKeyboardFocusEvent(opts === null || opts === void 0 ? void 0 : opts.isTextInput, modality, e)) return;
            fn($507fabe10e71c6fb$export$b9b3dfddab17db27());
        };
        $507fabe10e71c6fb$var$changeHandlers.add(handler);
        return ()=>{
            $507fabe10e71c6fb$var$changeHandlers.delete(handler);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $9ab94262bd0047c7$export$420e68273165f4ec(props) {
    let { isDisabled: isDisabled , onBlurWithin: onBlurWithin , onFocusWithin: onFocusWithin , onFocusWithinChange: onFocusWithinChange  } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isFocusWithin: false
    });
    let onBlur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // We don't want to trigger onBlurWithin and then immediately onFocusWithin again
        // when moving focus inside the element. Only trigger if the currentTarget doesn't
        // include the relatedTarget (where focus is moving).
        if (state.current.isFocusWithin && !e.currentTarget.contains(e.relatedTarget)) {
            state.current.isFocusWithin = false;
            if (onBlurWithin) onBlurWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(false);
        }
    }, [
        onBlurWithin,
        onFocusWithinChange,
        state
    ]);
    let onSyntheticFocus = (0, $8a9cb279dc87e130$export$715c682d09d639cc)(onBlur);
    let onFocus = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // Double check that document.activeElement actually matches e.target in case a previously chained
        // focus handler already moved focus somewhere else.
        if (!state.current.isFocusWithin && document.activeElement === e.target) {
            if (onFocusWithin) onFocusWithin(e);
            if (onFocusWithinChange) onFocusWithinChange(true);
            state.current.isFocusWithin = true;
            onSyntheticFocus(e);
        }
    }, [
        onFocusWithin,
        onFocusWithinChange,
        onSyntheticFocus
    ]);
    if (isDisabled) return {
        focusWithinProps: {
            onFocus: null,
            onBlur: null
        }
    };
    return {
        focusWithinProps: {
            onFocus: onFocus,
            onBlur: onBlur
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions

// iOS fires onPointerEnter twice: once with pointerType="touch" and again with pointerType="mouse".
// We want to ignore these emulated events so they do not trigger hover behavior.
// See https://bugs.webkit.org/show_bug.cgi?id=214609.
let $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
let $6179b936705e76d3$var$hoverCount = 0;
function $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents() {
    $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = true;
    // Clear globalIgnoreEmulatedMouseEvents after a short timeout. iOS fires onPointerEnter
    // with pointerType="mouse" immediately after onPointerUp and before onFocus. On other
    // devices that don't have this quirk, we don't want to ignore a mouse hover sometime in
    // the distant future because a user previously touched the element.
    setTimeout(()=>{
        $6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents = false;
    }, 50);
}
function $6179b936705e76d3$var$handleGlobalPointerEvent(e) {
    if (e.pointerType === "touch") $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents();
}
function $6179b936705e76d3$var$setupGlobalTouchEvents() {
    if (typeof document === "undefined") return;
    if (typeof PointerEvent !== "undefined") document.addEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
    else document.addEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    $6179b936705e76d3$var$hoverCount++;
    return ()=>{
        $6179b936705e76d3$var$hoverCount--;
        if ($6179b936705e76d3$var$hoverCount > 0) return;
        if (typeof PointerEvent !== "undefined") document.removeEventListener("pointerup", $6179b936705e76d3$var$handleGlobalPointerEvent);
        else document.removeEventListener("touchend", $6179b936705e76d3$var$setGlobalIgnoreEmulatedMouseEvents);
    };
}
function $6179b936705e76d3$export$ae780daf29e6d456(props) {
    let { onHoverStart: onHoverStart , onHoverChange: onHoverChange , onHoverEnd: onHoverEnd , isDisabled: isDisabled  } = props;
    let [isHovered, setHovered] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isHovered: false,
        ignoreEmulatedMouseEvents: false,
        pointerType: "",
        target: null
    }).current;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)($6179b936705e76d3$var$setupGlobalTouchEvents, []);
    let { hoverProps: hoverProps , triggerHoverEnd: triggerHoverEnd  } = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let triggerHoverStart = (event, pointerType)=>{
            state.pointerType = pointerType;
            if (isDisabled || pointerType === "touch" || state.isHovered || !event.currentTarget.contains(event.target)) return;
            state.isHovered = true;
            let target = event.currentTarget;
            state.target = target;
            if (onHoverStart) onHoverStart({
                type: "hoverstart",
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(true);
            setHovered(true);
        };
        let triggerHoverEnd = (event, pointerType)=>{
            state.pointerType = "";
            state.target = null;
            if (pointerType === "touch" || !state.isHovered) return;
            state.isHovered = false;
            let target = event.currentTarget;
            if (onHoverEnd) onHoverEnd({
                type: "hoverend",
                target: target,
                pointerType: pointerType
            });
            if (onHoverChange) onHoverChange(false);
            setHovered(false);
        };
        let hoverProps = {};
        if (typeof PointerEvent !== "undefined") {
            hoverProps.onPointerEnter = (e)=>{
                if ($6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents && e.pointerType === "mouse") return;
                triggerHoverStart(e, e.pointerType);
            };
            hoverProps.onPointerLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, e.pointerType);
            };
        } else {
            hoverProps.onTouchStart = ()=>{
                state.ignoreEmulatedMouseEvents = true;
            };
            hoverProps.onMouseEnter = (e)=>{
                if (!state.ignoreEmulatedMouseEvents && !$6179b936705e76d3$var$globalIgnoreEmulatedMouseEvents) triggerHoverStart(e, "mouse");
                state.ignoreEmulatedMouseEvents = false;
            };
            hoverProps.onMouseLeave = (e)=>{
                if (!isDisabled && e.currentTarget.contains(e.target)) triggerHoverEnd(e, "mouse");
            };
        }
        return {
            hoverProps: hoverProps,
            triggerHoverEnd: triggerHoverEnd
        };
    }, [
        onHoverStart,
        onHoverChange,
        onHoverEnd,
        isDisabled,
        state
    ]);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Call the triggerHoverEnd as soon as isDisabled changes to true
        // Safe to call triggerHoverEnd, it will early return if we aren't currently hovering
        if (isDisabled) triggerHoverEnd({
            currentTarget: state.target
        }, state.pointerType);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isDisabled
    ]);
    return {
        hoverProps: hoverProps,
        isHovered: isHovered
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Portions of the code in this file are based on code from react.
// Original licensing for the following can be found in the
// NOTICE file in the root directory of this source tree.
// See https://github.com/facebook/react/tree/cc7c1aece46a6b69b41958d731e0fd27c94bfc6c/packages/react-interactions


function $e0b6e0b68ec7f50f$export$872b660ac5a1ff98(props) {
    let { ref: ref , onInteractOutside: onInteractOutside , isDisabled: isDisabled , onInteractOutsideStart: onInteractOutsideStart  } = props;
    let stateRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        isPointerDown: false,
        ignoreEmulatedMouseEvents: false
    });
    let onPointerDown = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((e)=>{
        if (onInteractOutside && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) {
            if (onInteractOutsideStart) onInteractOutsideStart(e);
            stateRef.current.isPointerDown = true;
        }
    });
    let triggerInteractOutside = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((e)=>{
        if (onInteractOutside) onInteractOutside(e);
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let state = stateRef.current;
        if (isDisabled) return;
        // Use pointer events if available. Otherwise, fall back to mouse and touch events.
        if (typeof PointerEvent !== "undefined") {
            let onPointerUp = (e)=>{
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            // changing these to capture phase fixed combobox
            document.addEventListener("pointerdown", onPointerDown, true);
            document.addEventListener("pointerup", onPointerUp, true);
            return ()=>{
                document.removeEventListener("pointerdown", onPointerDown, true);
                document.removeEventListener("pointerup", onPointerUp, true);
            };
        } else {
            let onMouseUp = (e)=>{
                if (state.ignoreEmulatedMouseEvents) state.ignoreEmulatedMouseEvents = false;
                else if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            let onTouchEnd = (e)=>{
                state.ignoreEmulatedMouseEvents = true;
                if (state.isPointerDown && $e0b6e0b68ec7f50f$var$isValidEvent(e, ref)) triggerInteractOutside(e);
                state.isPointerDown = false;
            };
            document.addEventListener("mousedown", onPointerDown, true);
            document.addEventListener("mouseup", onMouseUp, true);
            document.addEventListener("touchstart", onPointerDown, true);
            document.addEventListener("touchend", onTouchEnd, true);
            return ()=>{
                document.removeEventListener("mousedown", onPointerDown, true);
                document.removeEventListener("mouseup", onMouseUp, true);
                document.removeEventListener("touchstart", onPointerDown, true);
                document.removeEventListener("touchend", onTouchEnd, true);
            };
        }
    }, [
        ref,
        isDisabled,
        onPointerDown,
        triggerInteractOutside
    ]);
}
function $e0b6e0b68ec7f50f$var$isValidEvent(event, ref) {
    if (event.button > 0) return false;
    if (event.target) {
        // if the event target is no longer in the document, ignore
        const ownerDocument = event.target.ownerDocument;
        if (!ownerDocument || !ownerDocument.documentElement.contains(event.target)) return false;
        // If the target is within a top layer element (e.g. toasts), ignore.
        if (event.target.closest("[data-react-aria-top-layer]")) return false;
    }
    return ref.current && !ref.current.contains(event.target);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $93925083ecbb358c$export$48d1ea6320830260(handler) {
    if (!handler) return;
    let shouldStopPropagation = true;
    return (e)=>{
        let event = {
            ...e,
            preventDefault () {
                e.preventDefault();
            },
            isDefaultPrevented () {
                return e.isDefaultPrevented();
            },
            stopPropagation () {
                console.error("stopPropagation is now the default behavior for events in React Spectrum. You can use continuePropagation() to revert this behavior.");
            },
            continuePropagation () {
                shouldStopPropagation = false;
            }
        };
        handler(event);
        if (shouldStopPropagation) e.stopPropagation();
    };
}


function $46d819fcbaf35654$export$8f71654801c2f7cd(props) {
    return {
        keyboardProps: props.isDisabled ? {} : {
            onKeyDown: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyDown),
            onKeyUp: (0, $93925083ecbb358c$export$48d1ea6320830260)(props.onKeyUp)
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $e8a7022cf87cba2a$export$36da96379f79f245(props) {
    let { onMoveStart: onMoveStart , onMove: onMove , onMoveEnd: onMoveEnd  } = props;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        didMove: false,
        lastPosition: null,
        id: null
    });
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useGlobalListeners)();
    let move = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((originalEvent, pointerType, deltaX, deltaY)=>{
        if (deltaX === 0 && deltaY === 0) return;
        if (!state.current.didMove) {
            state.current.didMove = true;
            onMoveStart === null || onMoveStart === void 0 ? void 0 : onMoveStart({
                type: "movestart",
                pointerType: pointerType,
                shiftKey: originalEvent.shiftKey,
                metaKey: originalEvent.metaKey,
                ctrlKey: originalEvent.ctrlKey,
                altKey: originalEvent.altKey
            });
        }
        onMove({
            type: "move",
            pointerType: pointerType,
            deltaX: deltaX,
            deltaY: deltaY,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let end = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)((originalEvent, pointerType)=>{
        (0, $14c0b72509d70225$export$b0d6fa1ab32e3295)();
        if (state.current.didMove) onMoveEnd === null || onMoveEnd === void 0 ? void 0 : onMoveEnd({
            type: "moveend",
            pointerType: pointerType,
            shiftKey: originalEvent.shiftKey,
            metaKey: originalEvent.metaKey,
            ctrlKey: originalEvent.ctrlKey,
            altKey: originalEvent.altKey
        });
    });
    let moveProps = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        let moveProps = {};
        let start = ()=>{
            (0, $14c0b72509d70225$export$16a4697467175487)();
            state.current.didMove = false;
        };
        if (typeof PointerEvent === "undefined") {
            let onMouseMove = (e)=>{
                if (e.button === 0) {
                    move(e, "mouse", e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onMouseUp = (e)=>{
                if (e.button === 0) {
                    end(e, "mouse");
                    removeGlobalListener(window, "mousemove", onMouseMove, false);
                    removeGlobalListener(window, "mouseup", onMouseUp, false);
                }
            };
            moveProps.onMouseDown = (e)=>{
                if (e.button === 0) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    addGlobalListener(window, "mousemove", onMouseMove, false);
                    addGlobalListener(window, "mouseup", onMouseUp, false);
                }
            };
            let onTouchMove = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id);
                if (touch >= 0) {
                    let { pageX: pageX , pageY: pageY  } = e.changedTouches[touch];
                    move(e, "touch", pageX - state.current.lastPosition.pageX, pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: pageX,
                        pageY: pageY
                    };
                }
            };
            let onTouchEnd = (e)=>{
                let touch = [
                    ...e.changedTouches
                ].findIndex(({ identifier: identifier  })=>identifier === state.current.id);
                if (touch >= 0) {
                    end(e, "touch");
                    state.current.id = null;
                    removeGlobalListener(window, "touchmove", onTouchMove);
                    removeGlobalListener(window, "touchend", onTouchEnd);
                    removeGlobalListener(window, "touchcancel", onTouchEnd);
                }
            };
            moveProps.onTouchStart = (e)=>{
                if (e.changedTouches.length === 0 || state.current.id != null) return;
                let { pageX: pageX , pageY: pageY , identifier: identifier  } = e.changedTouches[0];
                start();
                e.stopPropagation();
                e.preventDefault();
                state.current.lastPosition = {
                    pageX: pageX,
                    pageY: pageY
                };
                state.current.id = identifier;
                addGlobalListener(window, "touchmove", onTouchMove, false);
                addGlobalListener(window, "touchend", onTouchEnd, false);
                addGlobalListener(window, "touchcancel", onTouchEnd, false);
            };
        } else {
            let onPointerMove = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || "mouse";
                    // Problems with PointerEvent#movementX/movementY:
                    // 1. it is always 0 on macOS Safari.
                    // 2. On Chrome Android, it's scaled by devicePixelRatio, but not on Chrome macOS
                    move(e, pointerType, e.pageX - state.current.lastPosition.pageX, e.pageY - state.current.lastPosition.pageY);
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                }
            };
            let onPointerUp = (e)=>{
                if (e.pointerId === state.current.id) {
                    let pointerType = e.pointerType || "mouse";
                    end(e, pointerType);
                    state.current.id = null;
                    removeGlobalListener(window, "pointermove", onPointerMove, false);
                    removeGlobalListener(window, "pointerup", onPointerUp, false);
                    removeGlobalListener(window, "pointercancel", onPointerUp, false);
                }
            };
            moveProps.onPointerDown = (e)=>{
                if (e.button === 0 && state.current.id == null) {
                    start();
                    e.stopPropagation();
                    e.preventDefault();
                    state.current.lastPosition = {
                        pageX: e.pageX,
                        pageY: e.pageY
                    };
                    state.current.id = e.pointerId;
                    addGlobalListener(window, "pointermove", onPointerMove, false);
                    addGlobalListener(window, "pointerup", onPointerUp, false);
                    addGlobalListener(window, "pointercancel", onPointerUp, false);
                }
            };
        }
        let triggerKeyboardMove = (e, deltaX, deltaY)=>{
            start();
            move(e, "keyboard", deltaX, deltaY);
            end(e, "keyboard");
        };
        moveProps.onKeyDown = (e)=>{
            switch(e.key){
                case "Left":
                case "ArrowLeft":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, -1, 0);
                    break;
                case "Right":
                case "ArrowRight":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 1, 0);
                    break;
                case "Up":
                case "ArrowUp":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, -1);
                    break;
                case "Down":
                case "ArrowDown":
                    e.preventDefault();
                    e.stopPropagation();
                    triggerKeyboardMove(e, 0, 1);
                    break;
            }
        };
        return moveProps;
    }, [
        state,
        addGlobalListener,
        removeGlobalListener,
        move,
        end
    ]);
    return {
        moveProps: moveProps
    };
}



/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $7d0a636d7a4dcefd$export$2123ff2b87c81ca(props, ref) {
    let { onScroll: onScroll , isDisabled: isDisabled  } = props;
    let onScrollHandler = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((e)=>{
        // If the ctrlKey is pressed, this is a zoom event, do nothing.
        if (e.ctrlKey) return;
        // stop scrolling the page
        e.preventDefault();
        e.stopPropagation();
        if (onScroll) onScroll({
            deltaX: e.deltaX,
            deltaY: e.deltaY
        });
    }, [
        onScroll
    ]);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEvent)(ref, "wheel", isDisabled ? null : onScrollHandler);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $8a26561d2877236e$var$DEFAULT_THRESHOLD = 500;
function $8a26561d2877236e$export$c24ed0104d07eab9(props) {
    let { isDisabled: isDisabled , onLongPressStart: onLongPressStart , onLongPressEnd: onLongPressEnd , onLongPress: onLongPress , threshold: threshold = $8a26561d2877236e$var$DEFAULT_THRESHOLD , accessibilityDescription: accessibilityDescription  } = props;
    const timeRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let { addGlobalListener: addGlobalListener , removeGlobalListener: removeGlobalListener  } = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useGlobalListeners)();
    let { pressProps: pressProps  } = (0, $f6c31cce2adf654f$export$45712eceda6fad21)({
        isDisabled: isDisabled,
        onPressStart (e) {
            e.continuePropagation();
            if (e.pointerType === "mouse" || e.pointerType === "touch") {
                if (onLongPressStart) onLongPressStart({
                    ...e,
                    type: "longpressstart"
                });
                timeRef.current = setTimeout(()=>{
                    // Prevent other usePress handlers from also handling this event.
                    e.target.dispatchEvent(new PointerEvent("pointercancel", {
                        bubbles: true
                    }));
                    if (onLongPress) onLongPress({
                        ...e,
                        type: "longpress"
                    });
                    timeRef.current = null;
                }, threshold);
                // Prevent context menu, which may be opened on long press on touch devices
                if (e.pointerType === "touch") {
                    let onContextMenu = (e)=>{
                        e.preventDefault();
                    };
                    addGlobalListener(e.target, "contextmenu", onContextMenu, {
                        once: true
                    });
                    addGlobalListener(window, "pointerup", ()=>{
                        // If no contextmenu event is fired quickly after pointerup, remove the handler
                        // so future context menu events outside a long press are not prevented.
                        setTimeout(()=>{
                            removeGlobalListener(e.target, "contextmenu", onContextMenu);
                        }, 30);
                    }, {
                        once: true
                    });
                }
            }
        },
        onPressEnd (e) {
            if (timeRef.current) clearTimeout(timeRef.current);
            if (onLongPressEnd && (e.pointerType === "mouse" || e.pointerType === "touch")) onLongPressEnd({
                ...e,
                type: "longpressend"
            });
        }
    });
    let descriptionProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useDescription)(onLongPress && !isDisabled ? accessibilityDescription : null);
    return {
        longPressProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(pressProps, descriptionProps)
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/label/dist/import.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@react-aria/label/dist/import.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useField": () => (/* binding */ $2baaea4c71418dea$export$294aa081a6c6f55d),
/* harmony export */   "useLabel": () => (/* binding */ $d191a55c9702f145$export$8467354a121f1b9f)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $d191a55c9702f145$export$8467354a121f1b9f(props) {
    let { id: id , label: label , "aria-labelledby": ariaLabelledby , "aria-label": ariaLabel , labelElementType: labelElementType = "label"  } = props;
    id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useId)(id);
    let labelId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useId)();
    let labelProps = {};
    if (label) {
        ariaLabelledby = ariaLabelledby ? `${labelId} ${ariaLabelledby}` : labelId;
        labelProps = {
            id: labelId,
            htmlFor: labelElementType === "label" ? id : undefined
        };
    } else if (!ariaLabelledby && !ariaLabel) console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility");
    let fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useLabels)({
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledby
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps
    };
}



function $2baaea4c71418dea$export$294aa081a6c6f55d(props) {
    let { description: description , errorMessage: errorMessage , validationState: validationState  } = props;
    let { labelProps: labelProps , fieldProps: fieldProps  } = (0, $d191a55c9702f145$export$8467354a121f1b9f)(props);
    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useSlotId)([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    let errorMessageId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useSlotId)([
        Boolean(description),
        Boolean(errorMessage),
        validationState
    ]);
    fieldProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(fieldProps, {
        "aria-describedby": [
            descriptionId,
            // Use aria-describedby for error message because aria-errormessage is unsupported using VoiceOver or NVDA. See https://github.com/adobe/react-spectrum/issues/1346#issuecomment-740136268
            errorMessageId,
            props["aria-describedby"]
        ].filter(Boolean).join(" ") || undefined
    });
    return {
        labelProps: labelProps,
        fieldProps: fieldProps,
        descriptionProps: {
            id: descriptionId
        },
        errorMessageProps: {
            id: errorMessageId
        }
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/listbox/dist/import.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@react-aria/listbox/dist/import.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getItemId": () => (/* binding */ $b1f0cad8af73213b$export$9145995848b05025),
/* harmony export */   "listData": () => (/* binding */ $b1f0cad8af73213b$export$3585ede4d035bf14),
/* harmony export */   "useListBox": () => (/* binding */ $c132121280ec012d$export$50eacbbf140a3141),
/* harmony export */   "useListBoxSection": () => (/* binding */ $af383d3bef1cfdc9$export$c3f9f39876e4bc7),
/* harmony export */   "useOption": () => (/* binding */ $293f70390ea03370$export$497855f14858aa34)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/import.mjs");
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/label */ "./node_modules/@react-aria/label/dist/import.mjs");
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/selection */ "./node_modules/@react-aria/selection/dist/import.mjs");
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/import.mjs");






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $b1f0cad8af73213b$export$3585ede4d035bf14 = new WeakMap();
function $b1f0cad8af73213b$var$normalizeKey(key) {
    if (typeof key === "string") return key.replace(/\s*/g, "");
    return "" + key;
}
function $b1f0cad8af73213b$export$9145995848b05025(state, itemKey) {
    let data = $b1f0cad8af73213b$export$3585ede4d035bf14.get(state);
    if (!data) throw new Error("Unknown list");
    return `${data.id}-option-${$b1f0cad8af73213b$var$normalizeKey(itemKey)}`;
}





function $c132121280ec012d$export$50eacbbf140a3141(props, state, ref) {
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.filterDOMProps)(props, {
        labelable: true
    });
    let { listProps: listProps  } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_1__.useSelectableList)({
        ...props,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys
    });
    let { focusWithinProps: focusWithinProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useFocusWithin)({
        onFocusWithin: props.onFocus,
        onBlurWithin: props.onBlur,
        onFocusWithinChange: props.onFocusChange
    });
    // Share list id and some props with child options.
    let id = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useId)(props.id);
    (0, $b1f0cad8af73213b$export$3585ede4d035bf14).set(state, {
        id: id,
        shouldUseVirtualFocus: props.shouldUseVirtualFocus,
        shouldSelectOnPressUp: props.shouldSelectOnPressUp,
        shouldFocusOnHover: props.shouldFocusOnHover,
        isVirtualized: props.isVirtualized,
        onAction: props.onAction
    });
    let { labelProps: labelProps , fieldProps: fieldProps  } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_3__.useLabel)({
        ...props,
        id: id,
        // listbox is not an HTML input element so it
        // shouldn't be labeled by a <label> element.
        labelElementType: "span"
    });
    return {
        labelProps: labelProps,
        listBoxProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(domProps, focusWithinProps, state.selectionManager.selectionMode === "multiple" ? {
            "aria-multiselectable": "true"
        } : {}, {
            role: "listbox",
            ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(fieldProps, listProps)
        })
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $293f70390ea03370$export$497855f14858aa34(props, state, ref) {
    let { key: key  } = props;
    let data = (0, $b1f0cad8af73213b$export$3585ede4d035bf14).get(state);
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.disabledKeys.has(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    var _props_shouldSelectOnPressUp;
    let shouldSelectOnPressUp = (_props_shouldSelectOnPressUp = props.shouldSelectOnPressUp) !== null && _props_shouldSelectOnPressUp !== void 0 ? _props_shouldSelectOnPressUp : data === null || data === void 0 ? void 0 : data.shouldSelectOnPressUp;
    var _props_shouldFocusOnHover;
    let shouldFocusOnHover = (_props_shouldFocusOnHover = props.shouldFocusOnHover) !== null && _props_shouldFocusOnHover !== void 0 ? _props_shouldFocusOnHover : data === null || data === void 0 ? void 0 : data.shouldFocusOnHover;
    var _props_shouldUseVirtualFocus;
    let shouldUseVirtualFocus = (_props_shouldUseVirtualFocus = props.shouldUseVirtualFocus) !== null && _props_shouldUseVirtualFocus !== void 0 ? _props_shouldUseVirtualFocus : data === null || data === void 0 ? void 0 : data.shouldUseVirtualFocus;
    var _props_isVirtualized;
    let isVirtualized = (_props_isVirtualized = props.isVirtualized) !== null && _props_isVirtualized !== void 0 ? _props_isVirtualized : data === null || data === void 0 ? void 0 : data.isVirtualized;
    let labelId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useSlotId)();
    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useSlotId)();
    let optionProps = {
        role: "option",
        "aria-disabled": isDisabled || undefined,
        "aria-selected": state.selectionManager.selectionMode !== "none" ? isSelected : undefined
    };
    // Safari with VoiceOver on macOS misreads options with aria-labelledby or aria-label as simply "text".
    // We should not map slots to the label and description on Safari and instead just have VoiceOver read the textContent.
    // https://bugs.webkit.org/show_bug.cgi?id=209279
    if (!((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.isMac)() && (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.isWebKit)())) {
        optionProps["aria-label"] = props["aria-label"];
        optionProps["aria-labelledby"] = labelId;
        optionProps["aria-describedby"] = descriptionId;
    }
    if (isVirtualized) {
        var _state_collection_getItem;
        let index = Number((_state_collection_getItem = state.collection.getItem(key)) === null || _state_collection_getItem === void 0 ? void 0 : _state_collection_getItem.index);
        optionProps["aria-posinset"] = Number.isNaN(index) ? undefined : index + 1;
        optionProps["aria-setsize"] = (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_4__.getItemCount)(state.collection);
    }
    let { itemProps: itemProps , isPressed: isPressed , isFocused: isFocused , hasAction: hasAction , allowsSelection: allowsSelection  } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_1__.useSelectableItem)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: shouldSelectOnPressUp,
        allowsDifferentPressOrigin: shouldSelectOnPressUp && shouldFocusOnHover,
        isVirtualized: isVirtualized,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        isDisabled: isDisabled,
        onAction: (data === null || data === void 0 ? void 0 : data.onAction) ? ()=>{
            var _data_onAction;
            return data === null || data === void 0 ? void 0 : (_data_onAction = data.onAction) === null || _data_onAction === void 0 ? void 0 : _data_onAction.call(data, key);
        } : undefined
    });
    let { hoverProps: hoverProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.useHover)({
        isDisabled: isDisabled || !shouldFocusOnHover,
        onHoverStart () {
            if (!(0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.isFocusVisible)()) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
            }
        }
    });
    return {
        optionProps: {
            ...optionProps,
            ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.mergeProps)(itemProps, hoverProps),
            id: (0, $b1f0cad8af73213b$export$9145995848b05025)(state, key)
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        isFocused: isFocused,
        isFocusVisible: isFocused && (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_2__.isFocusVisible)(),
        isSelected: isSelected,
        isDisabled: isDisabled,
        isPressed: isPressed,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $af383d3bef1cfdc9$export$c3f9f39876e4bc7(props) {
    let { heading: heading , "aria-label": ariaLabel  } = props;
    let headingId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_0__.useId)();
    return {
        itemProps: {
            role: "presentation"
        },
        headingProps: heading ? {
            // Techincally, listbox cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a visual label for the nested group.
            id: headingId,
            role: "presentation"
        } : {},
        groupProps: {
            role: "group",
            "aria-label": ariaLabel,
            "aria-labelledby": heading ? headingId : undefined
        }
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/live-announcer/dist/import.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-aria/live-announcer/dist/import.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "announce": () => (/* binding */ $319e236875307eab$export$a9b970dcc4ae71a9),
/* harmony export */   "clearAnnouncer": () => (/* binding */ $319e236875307eab$export$d10ae4f68404609a),
/* harmony export */   "destroyAnnouncer": () => (/* binding */ $319e236875307eab$export$d8686216b8b81b2f)
/* harmony export */ });
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* Inspired by https://github.com/AlmeroSteyn/react-aria-live */ const $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY = 7000;
let $319e236875307eab$var$liveAnnouncer = null;
function $319e236875307eab$export$a9b970dcc4ae71a9(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
    if (!$319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer = new $319e236875307eab$var$LiveAnnouncer();
    $319e236875307eab$var$liveAnnouncer.announce(message, assertiveness, timeout);
}
function $319e236875307eab$export$d10ae4f68404609a(assertiveness) {
    if ($319e236875307eab$var$liveAnnouncer) $319e236875307eab$var$liveAnnouncer.clear(assertiveness);
}
function $319e236875307eab$export$d8686216b8b81b2f() {
    if ($319e236875307eab$var$liveAnnouncer) {
        $319e236875307eab$var$liveAnnouncer.destroy();
        $319e236875307eab$var$liveAnnouncer = null;
    }
}
// LiveAnnouncer is implemented using vanilla DOM, not React. That's because as of React 18
// ReactDOM.render is deprecated, and the replacement, ReactDOM.createRoot is moved into a
// subpath import `react-dom/client`. That makes it hard for us to support multiple React versions.
// As a global API, we can't use portals without introducing a breaking API change. LiveAnnouncer
// is simple enough to implement without React, so that's what we do here.
// See this discussion for more details: https://github.com/reactwg/react-18/discussions/125#discussioncomment-2382638
class $319e236875307eab$var$LiveAnnouncer {
    createLog(ariaLive) {
        let node = document.createElement("div");
        node.setAttribute("role", "log");
        node.setAttribute("aria-live", ariaLive);
        node.setAttribute("aria-relevant", "additions");
        return node;
    }
    destroy() {
        if (!this.node) return;
        document.body.removeChild(this.node);
        this.node = null;
    }
    announce(message, assertiveness = "assertive", timeout = $319e236875307eab$var$LIVEREGION_TIMEOUT_DELAY) {
        if (!this.node) return;
        let node = document.createElement("div");
        node.textContent = message;
        if (assertiveness === "assertive") this.assertiveLog.appendChild(node);
        else this.politeLog.appendChild(node);
        if (message !== "") setTimeout(()=>{
            node.remove();
        }, timeout);
    }
    clear(assertiveness) {
        if (!this.node) return;
        if (!assertiveness || assertiveness === "assertive") this.assertiveLog.innerHTML = "";
        if (!assertiveness || assertiveness === "polite") this.politeLog.innerHTML = "";
    }
    constructor(){
        this.node = document.createElement("div");
        this.node.dataset.liveAnnouncer = "true";
        // copied from VisuallyHidden
        Object.assign(this.node.style, {
            border: 0,
            clip: "rect(0 0 0 0)",
            clipPath: "inset(50%)",
            height: "1px",
            margin: "-1px",
            overflow: "hidden",
            padding: 0,
            position: "absolute",
            width: "1px",
            whiteSpace: "nowrap"
        });
        this.assertiveLog = this.createLog("assertive");
        this.node.appendChild(this.assertiveLog);
        this.politeLog = this.createLog("polite");
        this.node.appendChild(this.politeLog);
        document.body.prepend(this.node);
    }
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/menu/dist/import.mjs":
/*!*******************************************************!*\
  !*** ./node_modules/@react-aria/menu/dist/import.mjs ***!
  \*******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMenu": () => (/* binding */ $d5336fe17ce95402$export$38eaa17faae8f579),
/* harmony export */   "useMenuItem": () => (/* binding */ $a2e5df62f93c7633$export$9d32628fc2aea7da),
/* harmony export */   "useMenuSection": () => (/* binding */ $3e5eb2498db5b506$export$73f7a44322579622),
/* harmony export */   "useMenuTrigger": () => (/* binding */ $168583247155ddda$export$dc9c12ed27dd1b49)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/real-module.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/import.mjs");
/* harmony import */ var _react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/overlays */ "./node_modules/@react-aria/overlays/dist/import.mjs");
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-aria/selection */ "./node_modules/@react-aria/selection/dist/import.mjs");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/import.mjs");
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");









function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $2cbb7ca666678a14$exports = {};
var $c0398ad35c3639b7$exports = {};
$c0398ad35c3639b7$exports = {
    "longPressMessage": `اضغط مطولاً أو اضغط على Alt + السهم لأسفل لفتح القائمة`
};


var $7af657c4165927c3$exports = {};
$7af657c4165927c3$exports = {
    "longPressMessage": `Натиснете продължително или натиснете Alt+ стрелка надолу, за да отворите менюто`
};


var $d95d4da6d531ab81$exports = {};
$d95d4da6d531ab81$exports = {
    "longPressMessage": `Dlouhým stiskem nebo stisknutím kláves Alt + šipka dolů otevřete nabídku`
};


var $24ebda9c775dca17$exports = {};
$24ebda9c775dca17$exports = {
    "longPressMessage": `Langt tryk eller tryk på Alt + pil ned for at åbne menuen`
};


var $743e0dfca6cab1e9$exports = {};
$743e0dfca6cab1e9$exports = {
    "longPressMessage": `Drücken Sie lange oder drücken Sie Alt + Nach-unten, um das Menü zu öffnen`
};


var $a2f41026e05f1c84$exports = {};
$a2f41026e05f1c84$exports = {
    "longPressMessage": `Πιέστε παρατεταμένα ή πατήστε Alt + κάτω βέλος για να ανοίξετε το μενού`
};


var $43b800e97c901737$exports = {};
$43b800e97c901737$exports = {
    "longPressMessage": `Long press or press Alt + ArrowDown to open menu`
};


var $442f5f6ac211e29f$exports = {};
$442f5f6ac211e29f$exports = {
    "longPressMessage": `Mantenga pulsado o pulse Alt + flecha abajo para abrir el menú`
};


var $dff280acfeb2d8ac$exports = {};
$dff280acfeb2d8ac$exports = {
    "longPressMessage": `Menüü avamiseks vajutage pikalt või vajutage klahve Alt + allanool`
};


var $51608325613944d7$exports = {};
$51608325613944d7$exports = {
    "longPressMessage": `Avaa valikko painamalla pohjassa tai näppäinyhdistelmällä Alt + Alanuoli`
};


var $c4a1b1eabeaa87be$exports = {};
$c4a1b1eabeaa87be$exports = {
    "longPressMessage": `Appuyez de manière prolongée ou appuyez sur Alt + Flèche vers le bas pour ouvrir le menu.`
};


var $8c74815cdee18d1b$exports = {};
$8c74815cdee18d1b$exports = {
    "longPressMessage": `לחץ לחיצה ארוכה או הקש Alt + ArrowDown כדי לפתוח את התפריט`
};


var $fd0e9ef6a7fe0ec9$exports = {};
$fd0e9ef6a7fe0ec9$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dolje za otvaranje izbornika`
};


var $a89a74a39eba465a$exports = {};
$a89a74a39eba465a$exports = {
    "longPressMessage": `Nyomja meg hosszan, vagy nyomja meg az Alt + lefele nyíl gombot a menü megnyitásához`
};


var $edc7c66594a0ae8a$exports = {};
$edc7c66594a0ae8a$exports = {
    "longPressMessage": `Premere a lungo o premere Alt + Freccia giù per aprire il menu`
};


var $f1ab51510712db52$exports = {};
$f1ab51510712db52$exports = {
    "longPressMessage": `長押しまたは Alt+下矢印キーでメニューを開く`
};


var $f9b672d9b82fa3d6$exports = {};
$f9b672d9b82fa3d6$exports = {
    "longPressMessage": `길게 누르거나 Alt + 아래쪽 화살표를 눌러 메뉴 열기`
};


var $a385f3910feda499$exports = {};
$a385f3910feda499$exports = {
    "longPressMessage": `Norėdami atidaryti meniu, nuspaudę palaikykite arba paspauskite „Alt + ArrowDown“.`
};


var $4f1bde932c441789$exports = {};
$4f1bde932c441789$exports = {
    "longPressMessage": `Lai atvērtu izvēlni, turiet nospiestu vai nospiediet taustiņu kombināciju Alt + lejupvērstā bultiņa`
};


var $914a51a8a594d5be$exports = {};
$914a51a8a594d5be$exports = {
    "longPressMessage": `Langt trykk eller trykk Alt + PilNed for å åpne menyen`
};


var $89aaf803103bb500$exports = {};
$89aaf803103bb500$exports = {
    "longPressMessage": `Druk lang op Alt + pijl-omlaag of druk op Alt om het menu te openen`
};


var $c685891476dbaaca$exports = {};
$c685891476dbaaca$exports = {
    "longPressMessage": `Naciśnij i przytrzymaj lub naciśnij klawisze Alt + Strzałka w dół, aby otworzyć menu`
};


var $885879b9b10c2959$exports = {};
$885879b9b10c2959$exports = {
    "longPressMessage": `Pressione e segure ou pressione Alt + Seta para baixo para abrir o menu`
};


var $6b39616688a51692$exports = {};
$6b39616688a51692$exports = {
    "longPressMessage": `Prima continuamente ou prima Alt + Seta Para Baixo para abrir o menu`
};


var $f26362aed63f47e2$exports = {};
$f26362aed63f47e2$exports = {
    "longPressMessage": `Apăsați lung sau apăsați pe Alt + săgeată în jos pentru a deschide meniul`
};


var $06cbade644558bf0$exports = {};
$06cbade644558bf0$exports = {
    "longPressMessage": `Нажмите и удерживайте или нажмите Alt + Стрелка вниз, чтобы открыть меню`
};


var $0a391ff68f9d59b1$exports = {};
$0a391ff68f9d59b1$exports = {
    "longPressMessage": `Ponuku otvoríte dlhým stlačením alebo stlačením klávesu Alt + klávesu so šípkou nadol`
};


var $8193cf0e649c7928$exports = {};
$8193cf0e649c7928$exports = {
    "longPressMessage": `Za odprtje menija pritisnite in držite gumb ali pritisnite Alt+puščica navzdol`
};


var $f398debcce5a5c55$exports = {};
$f398debcce5a5c55$exports = {
    "longPressMessage": `Dugo pritisnite ili pritisnite Alt + strelicu prema dole da otvorite meni`
};


var $9e9fef000aa4c013$exports = {};
$9e9fef000aa4c013$exports = {
    "longPressMessage": `Håll nedtryckt eller tryck på Alt + pil nedåt för att öppna menyn`
};


var $c016c8183bbe3d68$exports = {};
$c016c8183bbe3d68$exports = {
    "longPressMessage": `Menüyü açmak için uzun basın veya Alt + Aşağı Ok tuşuna basın`
};


var $ca4f6c8462244e62$exports = {};
$ca4f6c8462244e62$exports = {
    "longPressMessage": `Довго або звичайно натисніть комбінацію клавіш Alt і стрілка вниз, щоб відкрити меню`
};


var $2d9960c02ccac927$exports = {};
$2d9960c02ccac927$exports = {
    "longPressMessage": `长按或按 Alt + 向下方向键以打开菜单`
};


var $f1b682a4c8c5631c$exports = {};
$f1b682a4c8c5631c$exports = {
    "longPressMessage": `長按或按 Alt+向下鍵以開啟功能表`
};


$2cbb7ca666678a14$exports = {
    "ar-AE": $c0398ad35c3639b7$exports,
    "bg-BG": $7af657c4165927c3$exports,
    "cs-CZ": $d95d4da6d531ab81$exports,
    "da-DK": $24ebda9c775dca17$exports,
    "de-DE": $743e0dfca6cab1e9$exports,
    "el-GR": $a2f41026e05f1c84$exports,
    "en-US": $43b800e97c901737$exports,
    "es-ES": $442f5f6ac211e29f$exports,
    "et-EE": $dff280acfeb2d8ac$exports,
    "fi-FI": $51608325613944d7$exports,
    "fr-FR": $c4a1b1eabeaa87be$exports,
    "he-IL": $8c74815cdee18d1b$exports,
    "hr-HR": $fd0e9ef6a7fe0ec9$exports,
    "hu-HU": $a89a74a39eba465a$exports,
    "it-IT": $edc7c66594a0ae8a$exports,
    "ja-JP": $f1ab51510712db52$exports,
    "ko-KR": $f9b672d9b82fa3d6$exports,
    "lt-LT": $a385f3910feda499$exports,
    "lv-LV": $4f1bde932c441789$exports,
    "nb-NO": $914a51a8a594d5be$exports,
    "nl-NL": $89aaf803103bb500$exports,
    "pl-PL": $c685891476dbaaca$exports,
    "pt-BR": $885879b9b10c2959$exports,
    "pt-PT": $6b39616688a51692$exports,
    "ro-RO": $f26362aed63f47e2$exports,
    "ru-RU": $06cbade644558bf0$exports,
    "sk-SK": $0a391ff68f9d59b1$exports,
    "sl-SI": $8193cf0e649c7928$exports,
    "sr-SP": $f398debcce5a5c55$exports,
    "sv-SE": $9e9fef000aa4c013$exports,
    "tr-TR": $c016c8183bbe3d68$exports,
    "uk-UA": $ca4f6c8462244e62$exports,
    "zh-CN": $2d9960c02ccac927$exports,
    "zh-TW": $f1b682a4c8c5631c$exports
};






function $168583247155ddda$export$dc9c12ed27dd1b49(props, state, ref) {
    let { type: type = "menu" , isDisabled: isDisabled , trigger: trigger = "press"  } = props;
    let menuTriggerId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useId)();
    let { triggerProps: triggerProps , overlayProps: overlayProps  } = (0, _react_aria_overlays__WEBPACK_IMPORTED_MODULE_2__.useOverlayTrigger)({
        type: type
    }, state, ref);
    let onKeyDown = (e)=>{
        if (isDisabled) return;
        if (trigger === "longPress" && !e.altKey) return;
        if (ref && ref.current) switch(e.key){
            case "Enter":
            case " ":
                if (trigger === "longPress") return;
            // fallthrough
            case "ArrowDown":
                // Stop propagation, unless it would already be handled by useKeyboard.
                if (!("continuePropagation" in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle("first");
                break;
            case "ArrowUp":
                if (!("continuePropagation" in e)) e.stopPropagation();
                e.preventDefault();
                state.toggle("last");
                break;
            default:
                // Allow other keys.
                if ("continuePropagation" in e) e.continuePropagation();
        }
    };
    let stringFormatter = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.useLocalizedStringFormatter)((0, (/*@__PURE__*/$parcel$interopDefault($2cbb7ca666678a14$exports))));
    let { longPressProps: longPressProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.useLongPress)({
        isDisabled: isDisabled || trigger !== "longPress",
        accessibilityDescription: stringFormatter.format("longPressMessage"),
        onLongPressStart () {
            state.close();
        },
        onLongPress () {
            state.open("first");
        }
    });
    let pressProps = {
        onPressStart (e) {
            // For consistency with native, open the menu on mouse/key down, but touch up.
            if (e.pointerType !== "touch" && e.pointerType !== "keyboard" && !isDisabled) // If opened with a screen reader, auto focus the first item.
            // Otherwise, the menu itself will be focused.
            state.toggle(e.pointerType === "virtual" ? "first" : null);
        },
        onPress (e) {
            if (e.pointerType === "touch" && !isDisabled) state.toggle();
        }
    };
    // omit onPress from triggerProps since we override it above.
    delete triggerProps.onPress;
    return {
        menuTriggerProps: {
            ...triggerProps,
            ...trigger === "press" ? pressProps : longPressProps,
            id: menuTriggerId,
            onKeyDown: onKeyDown
        },
        menuProps: {
            ...overlayProps,
            "aria-labelledby": menuTriggerId,
            autoFocus: state.focusStrategy || true,
            onClose: state.close
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

const $d5336fe17ce95402$export$6f49b4016bfc8d56 = new WeakMap();
function $d5336fe17ce95402$export$38eaa17faae8f579(props, state, ref) {
    let { shouldFocusWrap: shouldFocusWrap = true , ...otherProps } = props;
    if (!props["aria-label"] && !props["aria-labelledby"]) console.warn("An aria-label or aria-labelledby prop is required for accessibility.");
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.filterDOMProps)(props, {
        labelable: true
    });
    let { listProps: listProps  } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_5__.useSelectableList)({
        ...otherProps,
        ref: ref,
        selectionManager: state.selectionManager,
        collection: state.collection,
        disabledKeys: state.disabledKeys,
        shouldFocusWrap: shouldFocusWrap
    });
    $d5336fe17ce95402$export$6f49b4016bfc8d56.set(state, {
        onClose: props.onClose,
        onAction: props.onAction
    });
    return {
        menuProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(domProps, {
            role: "menu",
            // this forces AT to move their cursors into any open sub dialogs, the sub dialogs contain hidden close buttons in order to come back to this level of the menu
            "aria-hidden": state.expandedKeys.size > 0 ? true : undefined,
            ...listProps,
            onKeyDown: (e)=>{
                // don't clear the menu selected keys if the user is presses escape since escape closes the menu
                if (e.key !== "Escape") listProps.onKeyDown(e);
            }
        })
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 







function $a2e5df62f93c7633$export$9d32628fc2aea7da(props, state, ref) {
    let { key: key , closeOnSelect: closeOnSelect , isVirtualized: isVirtualized , "aria-haspopup": hasPopup  } = props;
    let { direction: direction  } = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
    let isTrigger = !!hasPopup;
    let isOpen = state.expandedKeys.has(key);
    var _props_isDisabled;
    let isDisabled = (_props_isDisabled = props.isDisabled) !== null && _props_isDisabled !== void 0 ? _props_isDisabled : state.disabledKeys.has(key);
    var _props_isSelected;
    let isSelected = (_props_isSelected = props.isSelected) !== null && _props_isSelected !== void 0 ? _props_isSelected : state.selectionManager.isSelected(key);
    let openTimeout = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    let cancelOpenTimeout = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (openTimeout.current) {
            clearTimeout(openTimeout.current);
            openTimeout.current = undefined;
        }
    }, [
        openTimeout
    ]);
    let onSubmenuOpen = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEffectEvent)(()=>{
        cancelOpenTimeout();
        state.setExpandedKeys(new Set([
            key
        ]));
    });
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useLayoutEffect)(()=>{
        return ()=>cancelOpenTimeout();
    }, [
        cancelOpenTimeout
    ]);
    let data = (0, $d5336fe17ce95402$export$6f49b4016bfc8d56).get(state);
    let onClose = props.onClose || data.onClose;
    let onActionMenuDialogTrigger = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        onSubmenuOpen();
    // will need to disable this lint rule when using useEffectEvent https://react.dev/learn/separating-events-from-effects#logic-inside-effects-is-reactive
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    let onAction = isTrigger ? onActionMenuDialogTrigger : props.onAction || data.onAction;
    let role = "menuitem";
    if (state.selectionManager.selectionMode === "single") role = "menuitemradio";
    else if (state.selectionManager.selectionMode === "multiple") role = "menuitemcheckbox";
    let labelId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useSlotId)();
    let descriptionId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useSlotId)();
    let keyboardId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useSlotId)();
    let ariaProps = {
        "aria-disabled": isDisabled || undefined,
        role: role,
        "aria-label": props["aria-label"],
        "aria-labelledby": labelId,
        "aria-describedby": [
            descriptionId,
            keyboardId
        ].filter(Boolean).join(" ") || undefined
    };
    if (state.selectionManager.selectionMode !== "none") ariaProps["aria-checked"] = isSelected;
    if (isVirtualized) {
        ariaProps["aria-posinset"] = state.collection.getItem(key).index;
        ariaProps["aria-setsize"] = (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_6__.getItemCount)(state.collection);
    }
    if (hasPopup != null) {
        ariaProps["aria-haspopup"] = hasPopup;
        ariaProps["aria-expanded"] = isOpen ? "true" : "false";
    }
    let onPressStart = (e)=>{
        if (e.pointerType === "keyboard" && onAction) onAction(key);
    };
    let onPressUp = (e)=>{
        if (e.pointerType !== "keyboard") {
            if (onAction) onAction(key);
            // Pressing a menu item should close by default in single selection mode but not multiple
            // selection mode, except if overridden by the closeOnSelect prop.
            if (!isTrigger && onClose && (closeOnSelect !== null && closeOnSelect !== void 0 ? closeOnSelect : state.selectionManager.selectionMode !== "multiple")) onClose();
        }
    };
    let { itemProps: itemProps , isFocused: isFocused  } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_5__.useSelectableItem)({
        selectionManager: state.selectionManager,
        key: key,
        ref: ref,
        shouldSelectOnPressUp: true,
        allowsDifferentPressOrigin: true
    });
    let { pressProps: pressProps , isPressed: isPressed  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.usePress)({
        onPressStart: onPressStart,
        onPressUp: onPressUp,
        isDisabled: isDisabled || isTrigger && state.expandedKeys.has(key)
    });
    let { hoverProps: hoverProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.useHover)({
        isDisabled: isDisabled,
        onHoverStart () {
            if (!(0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.isFocusVisible)() && !(isTrigger && state.expandedKeys.has(key))) {
                state.selectionManager.setFocused(true);
                state.selectionManager.setFocusedKey(key);
                // focus immediately so that a focus scope opened on hover has the correct restore node
                let isFocused = key === state.selectionManager.focusedKey;
                if (isFocused && state.selectionManager.isFocused && document.activeElement !== ref.current) (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_7__.focusSafely)(ref.current);
            }
        },
        onHoverChange: (isHovered)=>{
            if (isHovered && isTrigger && !state.expandedKeys.has(key)) {
                if (!openTimeout.current) openTimeout.current = setTimeout(()=>{
                    onSubmenuOpen();
                }, 200);
            } else if (!isHovered) cancelOpenTimeout();
        }
    });
    let { keyboardProps: keyboardProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.useKeyboard)({
        onKeyDown: (e)=>{
            // Ignore repeating events, which may have started on the menu trigger before moving
            // focus to the menu item. We want to wait for a second complete key press sequence.
            if (e.repeat) {
                e.continuePropagation();
                return;
            }
            switch(e.key){
                case " ":
                    if (!isDisabled && state.selectionManager.selectionMode === "none" && !isTrigger && closeOnSelect !== false && onClose) onClose();
                    break;
                case "Enter":
                    // The Enter key should always close on select, except if overridden.
                    if (!isDisabled && closeOnSelect !== false && !isTrigger && onClose) onClose();
                    break;
                case "ArrowRight":
                    if (isTrigger && direction === "ltr") onSubmenuOpen();
                    else e.continuePropagation();
                    break;
                case "ArrowLeft":
                    if (isTrigger && direction === "rtl") onSubmenuOpen();
                    else e.continuePropagation();
                    break;
                default:
                    e.continuePropagation();
                    break;
            }
        }
    });
    return {
        menuItemProps: {
            ...ariaProps,
            ...(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(itemProps, pressProps, hoverProps, keyboardProps)
        },
        labelProps: {
            id: labelId
        },
        descriptionProps: {
            id: descriptionId
        },
        keyboardShortcutProps: {
            id: keyboardId
        },
        isFocused: isFocused,
        isSelected: isSelected,
        isPressed: isPressed,
        isDisabled: isDisabled
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $3e5eb2498db5b506$export$73f7a44322579622(props) {
    let { heading: heading , "aria-label": ariaLabel  } = props;
    let headingId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useId)();
    return {
        itemProps: {
            role: "presentation"
        },
        headingProps: heading ? {
            // Techincally, menus cannot contain headings according to ARIA.
            // We hide the heading from assistive technology, using role="presentation",
            // and only use it as a label for the nested group.
            id: headingId,
            role: "presentation"
        } : {},
        groupProps: {
            role: "group",
            "aria-label": ariaLabel,
            "aria-labelledby": heading ? headingId : undefined
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/overlays/dist/import.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@react-aria/overlays/dist/import.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DismissButton": () => (/* binding */ $86ea4cb521eb2e37$export$2317d149ed6f78c4),
/* harmony export */   "ModalProvider": () => (/* binding */ $f57aed4a881a3485$export$178405afcd8c5eb),
/* harmony export */   "Overlay": () => (/* binding */ $337b884510726a0d$export$c6fdb837b070b4ff),
/* harmony export */   "OverlayContainer": () => (/* binding */ $f57aed4a881a3485$export$b47c3594eab58386),
/* harmony export */   "OverlayProvider": () => (/* binding */ $f57aed4a881a3485$export$bf688221f59024e5),
/* harmony export */   "ariaHideOutside": () => (/* binding */ $5e3802645cc19319$export$1c3ebcada18427bf),
/* harmony export */   "useModal": () => (/* binding */ $f57aed4a881a3485$export$33ffd74ebf07f060),
/* harmony export */   "useModalOverlay": () => (/* binding */ $8ac8429251c45e4b$export$dbc0f175b25fb0fb),
/* harmony export */   "useModalProvider": () => (/* binding */ $f57aed4a881a3485$export$d9aaed4c3ece1bc0),
/* harmony export */   "useOverlay": () => (/* binding */ $a11501f3d1d39e6c$export$ea8f71083e90600f),
/* harmony export */   "useOverlayFocusContain": () => (/* binding */ $337b884510726a0d$export$14c98a7594375490),
/* harmony export */   "useOverlayPosition": () => (/* binding */ $2a41e45df1593e64$export$d39e1813b3bdd0e1),
/* harmony export */   "useOverlayTrigger": () => (/* binding */ $628037886ba31236$export$f9d5c8beee7d008d),
/* harmony export */   "usePopover": () => (/* binding */ $f2f8a6077418541e$export$542a6fd13ac93354),
/* harmony export */   "usePreventScroll": () => (/* binding */ $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-stately/utils/dist/import.mjs");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/real-module.mjs");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/import.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/import.mjs");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "react-dom");
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/ssr/dist/import.mjs");
/* harmony import */ var _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @react-aria/visually-hidden */ "./node_modules/@react-aria/visually-hidden/dist/import.mjs");









function $parcel$interopDefault(a) {
  return a && a.__esModule ? a.default : a;
}
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $edcf132a9284368a$var$AXIS = {
    top: "top",
    bottom: "top",
    left: "left",
    right: "left"
};
const $edcf132a9284368a$var$FLIPPED_DIRECTION = {
    top: "bottom",
    bottom: "top",
    left: "right",
    right: "left"
};
const $edcf132a9284368a$var$CROSS_AXIS = {
    top: "left",
    left: "top"
};
const $edcf132a9284368a$var$AXIS_SIZE = {
    top: "height",
    left: "width"
};
const $edcf132a9284368a$var$TOTAL_SIZE = {
    width: "totalWidth",
    height: "totalHeight"
};
const $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE = {};
// @ts-ignore
let $edcf132a9284368a$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $edcf132a9284368a$var$getContainerDimensions(containerNode) {
    let width = 0, height = 0, totalWidth = 0, totalHeight = 0, top = 0, left = 0;
    let scroll = {};
    if (containerNode.tagName === "BODY") {
        let documentElement = document.documentElement;
        totalWidth = documentElement.clientWidth;
        totalHeight = documentElement.clientHeight;
        var _visualViewport_width;
        width = (_visualViewport_width = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.width) !== null && _visualViewport_width !== void 0 ? _visualViewport_width : totalWidth;
        var _visualViewport_height;
        height = (_visualViewport_height = $edcf132a9284368a$var$visualViewport === null || $edcf132a9284368a$var$visualViewport === void 0 ? void 0 : $edcf132a9284368a$var$visualViewport.height) !== null && _visualViewport_height !== void 0 ? _visualViewport_height : totalHeight;
        scroll.top = documentElement.scrollTop || containerNode.scrollTop;
        scroll.left = documentElement.scrollLeft || containerNode.scrollLeft;
    } else {
        ({ width: width , height: height , top: top , left: left  } = $edcf132a9284368a$var$getOffset(containerNode));
        scroll.top = containerNode.scrollTop;
        scroll.left = containerNode.scrollLeft;
        totalWidth = width;
        totalHeight = height;
    }
    return {
        width: width,
        height: height,
        totalWidth: totalWidth,
        totalHeight: totalHeight,
        scroll: scroll,
        top: top,
        left: left
    };
}
function $edcf132a9284368a$var$getScroll(node) {
    return {
        top: node.scrollTop,
        left: node.scrollLeft,
        width: node.scrollWidth,
        height: node.scrollHeight
    };
}
function $edcf132a9284368a$var$getDelta(axis, offset, size, containerDimensions, padding) {
    let containerScroll = containerDimensions.scroll[axis];
    let containerHeight = containerDimensions[$edcf132a9284368a$var$AXIS_SIZE[axis]];
    let startEdgeOffset = offset - padding - containerScroll;
    let endEdgeOffset = offset + padding - containerScroll + size;
    if (startEdgeOffset < 0) return -startEdgeOffset;
    else if (endEdgeOffset > containerHeight) return Math.max(containerHeight - endEdgeOffset, -startEdgeOffset);
    else return 0;
}
function $edcf132a9284368a$var$getMargins(node) {
    let style = window.getComputedStyle(node);
    return {
        top: parseInt(style.marginTop, 10) || 0,
        bottom: parseInt(style.marginBottom, 10) || 0,
        left: parseInt(style.marginLeft, 10) || 0,
        right: parseInt(style.marginRight, 10) || 0
    };
}
function $edcf132a9284368a$var$parsePlacement(input) {
    if ($edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input]) return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
    let [placement, crossPlacement] = input.split(" ");
    let axis = $edcf132a9284368a$var$AXIS[placement] || "right";
    let crossAxis = $edcf132a9284368a$var$CROSS_AXIS[axis];
    if (!$edcf132a9284368a$var$AXIS[crossPlacement]) crossPlacement = "center";
    let size = $edcf132a9284368a$var$AXIS_SIZE[axis];
    let crossSize = $edcf132a9284368a$var$AXIS_SIZE[crossAxis];
    $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input] = {
        placement: placement,
        crossPlacement: crossPlacement,
        axis: axis,
        crossAxis: crossAxis,
        size: size,
        crossSize: crossSize
    };
    return $edcf132a9284368a$var$PARSED_PLACEMENT_CACHE[input];
}
function $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset) {
    let { placement: placement , crossPlacement: crossPlacement , axis: axis , crossAxis: crossAxis , size: size , crossSize: crossSize  } = placementInfo;
    let position = {};
    // button position
    position[crossAxis] = childOffset[crossAxis];
    if (crossPlacement === "center") //  + (button size / 2) - (overlay size / 2)
    // at this point the overlay center should match the button center
    position[crossAxis] += (childOffset[crossSize] - overlaySize[crossSize]) / 2;
    else if (crossPlacement !== crossAxis) //  + (button size) - (overlay size)
    // at this point the overlay bottom should match the button bottom
    position[crossAxis] += childOffset[crossSize] - overlaySize[crossSize];
     /* else {
    the overlay top should match the button top
  } */ 
    // add the crossOffset from props
    position[crossAxis] += crossOffset;
    // overlay top overlapping arrow with button bottom
    const minPosition = childOffset[crossAxis] - overlaySize[crossSize] + arrowSize + arrowBoundaryOffset;
    // overlay bottom overlapping arrow with button top
    const maxPosition = childOffset[crossAxis] + childOffset[crossSize] - arrowSize - arrowBoundaryOffset;
    position[crossAxis] = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.clamp)(position[crossAxis], minPosition, maxPosition);
    // Floor these so the position isn't placed on a partial pixel, only whole pixels. Shouldn't matter if it was floored or ceiled, so chose one.
    if (placement === axis) {
        // If the container is positioned (non-static), then we use the container's actual
        // height, as `bottom` will be relative to this height.  But if the container is static,
        // then it can only be the `document.body`, and `bottom` will be relative to _its_
        // container, which should be as large as boundaryDimensions.
        const containerHeight = isContainerPositioned ? containerOffsetWithBoundary[size] : boundaryDimensions[$edcf132a9284368a$var$TOTAL_SIZE[size]];
        position[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] = Math.floor(containerHeight - childOffset[axis] + offset);
    } else position[axis] = Math.floor(childOffset[axis] + childOffset[size] + offset);
    return position;
}
function $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding) {
    return position.top != null ? Math.max(0, boundaryDimensions.height + boundaryDimensions.top + boundaryDimensions.scroll.top // this is the bottom of the boundary
     - (containerOffsetWithBoundary.top + position.top // this is the top of the overlay
    ) - (margins.top + margins.bottom + padding // save additional space for margin and padding
    )) : Math.max(0, childOffset.top + containerOffsetWithBoundary.top // this is the top of the trigger
     - (boundaryDimensions.top + boundaryDimensions.scroll.top // this is the top of the boundary
    ) - (margins.top + margins.bottom + padding // save additional space for margin and padding
    ));
}
function $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding, placementInfo) {
    let { placement: placement , axis: axis , size: size  } = placementInfo;
    if (placement === axis) return Math.max(0, childOffset[axis] - boundaryDimensions[axis] - boundaryDimensions.scroll[axis] + containerOffsetWithBoundary[axis] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
    return Math.max(0, boundaryDimensions[size] + boundaryDimensions[axis] + boundaryDimensions.scroll[axis] - containerOffsetWithBoundary[axis] - childOffset[axis] - childOffset[size] - margins[axis] - margins[$edcf132a9284368a$var$FLIPPED_DIRECTION[axis]] - padding);
}
function $edcf132a9284368a$export$6839422d1f33cee9(placementInput, childOffset, overlaySize, scrollSize, margins, padding, flip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, userSetMaxHeight, arrowSize, arrowBoundaryOffset) {
    let placementInfo = $edcf132a9284368a$var$parsePlacement(placementInput);
    let { size: size , crossAxis: crossAxis , crossSize: crossSize , placement: placement , crossPlacement: crossPlacement  } = placementInfo;
    let position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    let normalizedOffset = offset;
    let space = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, placementInfo);
    // Check if the scroll size of the overlay is greater than the available space to determine if we need to flip
    if (flip && scrollSize[size] > space) {
        let flippedPlacementInfo = $edcf132a9284368a$var$parsePlacement(`${$edcf132a9284368a$var$FLIPPED_DIRECTION[placement]} ${crossPlacement}`);
        let flippedPosition = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, flippedPlacementInfo, offset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
        let flippedSpace = $edcf132a9284368a$var$getAvailableSpace(boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding + offset, flippedPlacementInfo);
        // If the available space for the flipped position is greater than the original available space, flip.
        if (flippedSpace > space) {
            placementInfo = flippedPlacementInfo;
            position = flippedPosition;
            normalizedOffset = offset;
        }
    }
    let delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let maxHeight = $edcf132a9284368a$var$getMaxHeight(position, boundaryDimensions, containerOffsetWithBoundary, childOffset, margins, padding);
    if (userSetMaxHeight && userSetMaxHeight < maxHeight) maxHeight = userSetMaxHeight;
    overlaySize.height = Math.min(overlaySize.height, maxHeight);
    position = $edcf132a9284368a$var$computePosition(childOffset, boundaryDimensions, overlaySize, placementInfo, normalizedOffset, crossOffset, containerOffsetWithBoundary, isContainerPositioned, arrowSize, arrowBoundaryOffset);
    delta = $edcf132a9284368a$var$getDelta(crossAxis, position[crossAxis], overlaySize[crossSize], boundaryDimensions, padding);
    position[crossAxis] += delta;
    let arrowPosition = {};
    // All values are transformed so that 0 is at the top/left of the overlay depending on the orientation
    // Prefer the arrow being in the center of the trigger/overlay anchor element
    let preferredArrowPosition = childOffset[crossAxis] + .5 * childOffset[crossSize] - overlaySize[crossAxis];
    // Min/Max position limits for the arrow with respect to the overlay
    const arrowMinPosition = arrowSize / 2 + arrowBoundaryOffset;
    const arrowMaxPosition = overlaySize[crossSize] - arrowSize / 2 - arrowBoundaryOffset;
    // Min/Max position limits for the arrow with respect to the trigger/overlay anchor element
    const arrowOverlappingChildMinEdge = childOffset[crossAxis] - overlaySize[crossAxis] + arrowSize / 2;
    const arrowOverlappingChildMaxEdge = childOffset[crossAxis] + childOffset[crossSize] - overlaySize[crossAxis] - arrowSize / 2;
    // Clamp the arrow positioning so that it always is within the bounds of the anchor and the overlay
    const arrowPositionOverlappingChild = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.clamp)(preferredArrowPosition, arrowOverlappingChildMinEdge, arrowOverlappingChildMaxEdge);
    arrowPosition[crossAxis] = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.clamp)(arrowPositionOverlappingChild, arrowMinPosition, arrowMaxPosition);
    return {
        position: position,
        maxHeight: maxHeight,
        arrowOffsetLeft: arrowPosition.left,
        arrowOffsetTop: arrowPosition.top,
        placement: placementInfo.placement
    };
}
function $edcf132a9284368a$export$b3ceb0cbf1056d98(opts) {
    let { placement: placement , targetNode: targetNode , overlayNode: overlayNode , scrollNode: scrollNode , padding: padding , shouldFlip: shouldFlip , boundaryElement: boundaryElement , offset: offset , crossOffset: crossOffset , maxHeight: maxHeight , arrowSize: arrowSize = 0 , arrowBoundaryOffset: arrowBoundaryOffset = 0  } = opts;
    let container = overlayNode instanceof HTMLElement ? $edcf132a9284368a$var$getContainingBlock(overlayNode) : document.documentElement;
    let isViewportContainer = container === document.documentElement;
    const containerPositionStyle = window.getComputedStyle(container).position;
    let isContainerPositioned = !!containerPositionStyle && containerPositionStyle !== "static";
    let childOffset = isViewportContainer ? $edcf132a9284368a$var$getOffset(targetNode) : $edcf132a9284368a$var$getPosition(targetNode, container);
    if (!isViewportContainer) {
        let { marginTop: marginTop , marginLeft: marginLeft  } = window.getComputedStyle(targetNode);
        childOffset.top += parseInt(marginTop, 10) || 0;
        childOffset.left += parseInt(marginLeft, 10) || 0;
    }
    let overlaySize = $edcf132a9284368a$var$getOffset(overlayNode);
    let margins = $edcf132a9284368a$var$getMargins(overlayNode);
    overlaySize.width += margins.left + margins.right;
    overlaySize.height += margins.top + margins.bottom;
    let scrollSize = $edcf132a9284368a$var$getScroll(scrollNode);
    let boundaryDimensions = $edcf132a9284368a$var$getContainerDimensions(boundaryElement);
    let containerOffsetWithBoundary = boundaryElement.tagName === "BODY" ? $edcf132a9284368a$var$getOffset(container) : $edcf132a9284368a$var$getPosition(container, boundaryElement);
    return $edcf132a9284368a$export$6839422d1f33cee9(placement, childOffset, overlaySize, scrollSize, margins, padding, shouldFlip, boundaryDimensions, containerOffsetWithBoundary, offset, crossOffset, isContainerPositioned, maxHeight, arrowSize, arrowBoundaryOffset);
}
function $edcf132a9284368a$var$getOffset(node) {
    let { top: top , left: left , width: width , height: height  } = node.getBoundingClientRect();
    let { scrollTop: scrollTop , scrollLeft: scrollLeft , clientTop: clientTop , clientLeft: clientLeft  } = document.documentElement;
    return {
        top: top + scrollTop - clientTop,
        left: left + scrollLeft - clientLeft,
        width: width,
        height: height
    };
}
function $edcf132a9284368a$var$getPosition(node, parent) {
    let style = window.getComputedStyle(node);
    let offset;
    if (style.position === "fixed") {
        let { top: top , left: left , width: width , height: height  } = node.getBoundingClientRect();
        offset = {
            top: top,
            left: left,
            width: width,
            height: height
        };
    } else {
        offset = $edcf132a9284368a$var$getOffset(node);
        let parentOffset = $edcf132a9284368a$var$getOffset(parent);
        let parentStyle = window.getComputedStyle(parent);
        parentOffset.top += (parseInt(parentStyle.borderTopWidth, 10) || 0) - parent.scrollTop;
        parentOffset.left += (parseInt(parentStyle.borderLeftWidth, 10) || 0) - parent.scrollLeft;
        offset.top -= parentOffset.top;
        offset.left -= parentOffset.left;
    }
    offset.top -= parseInt(style.marginTop, 10) || 0;
    offset.left -= parseInt(style.marginLeft, 10) || 0;
    return offset;
}
// Returns the containing block of an element, which is the element that
// this element will be positioned relative to.
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block
function $edcf132a9284368a$var$getContainingBlock(node) {
    // The offsetParent of an element in most cases equals the containing block.
    // https://w3c.github.io/csswg-drafts/cssom-view/#dom-htmlelement-offsetparent
    let offsetParent = node.offsetParent;
    // The offsetParent algorithm terminates at the document body,
    // even if the body is not a containing block. Double check that
    // and use the documentElement if so.
    if (offsetParent && offsetParent === document.body && window.getComputedStyle(offsetParent).position === "static" && !$edcf132a9284368a$var$isContainingBlock(offsetParent)) offsetParent = document.documentElement;
    // TODO(later): handle table elements?
    // The offsetParent can be null if the element has position: fixed, or a few other cases.
    // We have to walk up the tree manually in this case because fixed positioned elements
    // are still positioned relative to their containing block, which is not always the viewport.
    if (offsetParent == null) {
        offsetParent = node.parentElement;
        while(offsetParent && !$edcf132a9284368a$var$isContainingBlock(offsetParent))offsetParent = offsetParent.parentElement;
    }
    // Fall back to the viewport.
    return offsetParent || document.documentElement;
}
// https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
function $edcf132a9284368a$var$isContainingBlock(node) {
    let style = window.getComputedStyle(node);
    return style.transform !== "none" || /transform|perspective/.test(style.willChange) || style.filter !== "none" || style.contain === "paint" || // @ts-ignore
    "backdropFilter" in style && style.backdropFilter !== "none" || // @ts-ignore
    "WebkitBackdropFilter" in style && style.WebkitBackdropFilter !== "none";
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $dd149f63282afbbf$export$f6211563215e3b37 = new WeakMap();
function $dd149f63282afbbf$export$18fc8428861184da(opts) {
    let { triggerRef: triggerRef , isOpen: isOpen , onClose: onClose  } = opts;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!isOpen || onClose === null) return;
        let onScroll = (e)=>{
            // Ignore if scrolling an scrollable region outside the trigger's tree.
            let target = e.target;
            // window is not a Node and doesn't have contain, but window contains everything
            if (!triggerRef.current || target instanceof Node && !target.contains(triggerRef.current)) return;
            let onCloseHandler = onClose || $dd149f63282afbbf$export$f6211563215e3b37.get(triggerRef.current);
            if (onCloseHandler) onCloseHandler();
        };
        window.addEventListener("scroll", onScroll, true);
        return ()=>{
            window.removeEventListener("scroll", onScroll, true);
        };
    }, [
        isOpen,
        onClose,
        triggerRef
    ]);
}




// @ts-ignore
let $2a41e45df1593e64$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $2a41e45df1593e64$export$d39e1813b3bdd0e1(props) {
    let { direction: direction  } = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.useLocale)();
    let { arrowSize: arrowSize = 0 , targetRef: targetRef , overlayRef: overlayRef , scrollRef: scrollRef = overlayRef , placement: placement = "bottom" , containerPadding: containerPadding = 12 , shouldFlip: shouldFlip = true , boundaryElement: boundaryElement = typeof document !== "undefined" ? document.body : null , offset: offset = 0 , crossOffset: crossOffset = 0 , shouldUpdatePosition: shouldUpdatePosition = true , isOpen: isOpen = true , onClose: onClose , maxHeight: maxHeight , arrowBoundaryOffset: arrowBoundaryOffset = 0  } = props;
    let [position, setPosition] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)({
        position: {},
        arrowOffsetLeft: undefined,
        arrowOffsetTop: undefined,
        maxHeight: undefined,
        placement: undefined
    });
    let deps = [
        shouldUpdatePosition,
        placement,
        overlayRef.current,
        targetRef.current,
        scrollRef.current,
        containerPadding,
        shouldFlip,
        boundaryElement,
        offset,
        crossOffset,
        isOpen,
        direction,
        maxHeight,
        arrowBoundaryOffset,
        arrowSize
    ];
    let updatePosition = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (shouldUpdatePosition === false || !isOpen || !overlayRef.current || !targetRef.current || !scrollRef.current || !boundaryElement) return;
        let position = (0, $edcf132a9284368a$export$b3ceb0cbf1056d98)({
            placement: $2a41e45df1593e64$var$translateRTL(placement, direction),
            overlayNode: overlayRef.current,
            targetNode: targetRef.current,
            scrollNode: scrollRef.current,
            padding: containerPadding,
            shouldFlip: shouldFlip,
            boundaryElement: boundaryElement,
            offset: offset,
            crossOffset: crossOffset,
            maxHeight: maxHeight,
            arrowSize: arrowSize,
            arrowBoundaryOffset: arrowBoundaryOffset
        });
        // Modify overlay styles directly so positioning happens immediately without the need of a second render
        // This is so we don't have to delay autoFocus scrolling or delay applying preventScroll for popovers
        Object.keys(position.position).forEach((key)=>overlayRef.current.style[key] = position.position[key] + "px");
        overlayRef.current.style.maxHeight = position.maxHeight != null ? position.maxHeight + "px" : undefined;
        // Trigger a set state for a second render anyway for arrow positioning
        setPosition(position);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, deps);
    // Update position when anything changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(updatePosition, deps);
    // Update position on window resize
    $2a41e45df1593e64$var$useResize(updatePosition);
    // Update position when the overlay changes size (might need to flip).
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useResizeObserver)({
        ref: overlayRef,
        onResize: updatePosition
    });
    // Reposition the overlay and do not close on scroll while the visual viewport is resizing.
    // This will ensure that overlays adjust their positioning when the iOS virtual keyboard appears.
    let isResizing = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(()=>{
        let timeout;
        let onResize = ()=>{
            isResizing.current = true;
            clearTimeout(timeout);
            timeout = setTimeout(()=>{
                isResizing.current = false;
            }, 500);
            updatePosition();
        };
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("resize", onResize);
        $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.addEventListener("scroll", onResize);
        return ()=>{
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("resize", onResize);
            $2a41e45df1593e64$var$visualViewport === null || $2a41e45df1593e64$var$visualViewport === void 0 ? void 0 : $2a41e45df1593e64$var$visualViewport.removeEventListener("scroll", onResize);
        };
    }, [
        updatePosition
    ]);
    let close = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (!isResizing.current) onClose();
    }, [
        onClose,
        isResizing
    ]);
    // When scrolling a parent scrollable region of the trigger (other than the body),
    // we hide the popover. Otherwise, its position would be incorrect.
    (0, $dd149f63282afbbf$export$18fc8428861184da)({
        triggerRef: targetRef,
        isOpen: isOpen,
        onClose: onClose && close
    });
    return {
        overlayProps: {
            style: {
                position: "absolute",
                zIndex: 100000,
                ...position.position,
                maxHeight: position.maxHeight
            }
        },
        placement: position.placement,
        arrowProps: {
            "aria-hidden": "true",
            role: "presentation",
            style: {
                left: position.arrowOffsetLeft,
                top: position.arrowOffsetTop
            }
        },
        updatePosition: updatePosition
    };
}
function $2a41e45df1593e64$var$useResize(onResize) {
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(()=>{
        window.addEventListener("resize", onResize, false);
        return ()=>{
            window.removeEventListener("resize", onResize, false);
        };
    }, [
        onResize
    ]);
}
function $2a41e45df1593e64$var$translateRTL(position, direction) {
    if (direction === "rtl") return position.replace("start", "right").replace("end", "left");
    return position.replace("start", "left").replace("end", "right");
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $a11501f3d1d39e6c$var$visibleOverlays = [];
function $a11501f3d1d39e6c$export$ea8f71083e90600f(props, ref) {
    let { onClose: onClose , shouldCloseOnBlur: shouldCloseOnBlur , isOpen: isOpen , isDismissable: isDismissable = false , isKeyboardDismissDisabled: isKeyboardDismissDisabled = false , shouldCloseOnInteractOutside: shouldCloseOnInteractOutside  } = props;
    // Add the overlay ref to the stack of visible overlays on mount, and remove on unmount.
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isOpen) $a11501f3d1d39e6c$var$visibleOverlays.push(ref);
        return ()=>{
            let index = $a11501f3d1d39e6c$var$visibleOverlays.indexOf(ref);
            if (index >= 0) $a11501f3d1d39e6c$var$visibleOverlays.splice(index, 1);
        };
    }, [
        isOpen,
        ref
    ]);
    // Only hide the overlay when it is the topmost visible overlay in the stack.
    let onHide = ()=>{
        if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref && onClose) onClose();
    };
    let onInteractOutsideStart = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
        }
    };
    let onInteractOutside = (e)=>{
        if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.target)) {
            if ($a11501f3d1d39e6c$var$visibleOverlays[$a11501f3d1d39e6c$var$visibleOverlays.length - 1] === ref) {
                e.stopPropagation();
                e.preventDefault();
            }
            onHide();
        }
    };
    // Handle the escape key
    let onKeyDown = (e)=>{
        if (e.key === "Escape" && !isKeyboardDismissDisabled) {
            e.stopPropagation();
            e.preventDefault();
            onHide();
        }
    };
    // Handle clicking outside the overlay to close it
    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_5__.useInteractOutside)({
        ref: ref,
        onInteractOutside: isDismissable ? onInteractOutside : null,
        onInteractOutsideStart: onInteractOutsideStart
    });
    let { focusWithinProps: focusWithinProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_5__.useFocusWithin)({
        isDisabled: !shouldCloseOnBlur,
        onBlurWithin: (e)=>{
            // If focus is moving into a child focus scope (e.g. menu inside a dialog),
            // do not close the outer overlay. At this point, the active scope should
            // still be the outer overlay, since blur events run before focus.
            if (e.relatedTarget && (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_6__.isElementInChildOfActiveScope)(e.relatedTarget)) return;
            if (!shouldCloseOnInteractOutside || shouldCloseOnInteractOutside(e.relatedTarget)) onClose();
        }
    });
    let onPointerDownUnderlay = (e)=>{
        // fixes a firefox issue that starts text selection https://bugzilla.mozilla.org/show_bug.cgi?id=1675846
        if (e.target === e.currentTarget) e.preventDefault();
    };
    return {
        overlayProps: {
            onKeyDown: onKeyDown,
            ...focusWithinProps
        },
        underlayProps: {
            onPointerDown: onPointerDownUnderlay
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $628037886ba31236$export$f9d5c8beee7d008d(props, state, ref) {
    let { type: type  } = props;
    let { isOpen: isOpen  } = state;
    // Backward compatibility. Share state close function with useOverlayPosition so it can close on scroll
    // without forcing users to pass onClose.
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (ref && ref.current) (0, $dd149f63282afbbf$export$f6211563215e3b37).set(ref.current, state.close);
    });
    // Aria 1.1 supports multiple values for aria-haspopup other than just menus.
    // https://www.w3.org/TR/wai-aria-1.1/#aria-haspopup
    // However, we only add it for menus for now because screen readers often
    // announce it as a menu even for other values.
    let ariaHasPopup = undefined;
    if (type === "menu") ariaHasPopup = true;
    else if (type === "listbox") ariaHasPopup = "listbox";
    let overlayId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useId)();
    return {
        triggerProps: {
            "aria-haspopup": ariaHasPopup,
            "aria-expanded": isOpen,
            "aria-controls": isOpen ? overlayId : null,
            onPress: state.toggle
        },
        overlayProps: {
            id: overlayId
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// @ts-ignore
const $49c51c25361d4cd2$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
// HTML input types that do not cause the software keyboard to appear.
const $49c51c25361d4cd2$var$nonTextInputTypes = new Set([
    "checkbox",
    "radio",
    "range",
    "color",
    "file",
    "image",
    "button",
    "submit",
    "reset"
]);
// The number of active usePreventScroll calls. Used to determine whether to revert back to the original page style/scroll position
let $49c51c25361d4cd2$var$preventScrollCount = 0;
let $49c51c25361d4cd2$var$restore;
function $49c51c25361d4cd2$export$ee0f7cc6afcd1c18(options = {}) {
    let { isDisabled: isDisabled  } = options;
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(()=>{
        if (isDisabled) return;
        $49c51c25361d4cd2$var$preventScrollCount++;
        if ($49c51c25361d4cd2$var$preventScrollCount === 1) {
            if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.isIOS)()) $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollMobileSafari();
            else $49c51c25361d4cd2$var$restore = $49c51c25361d4cd2$var$preventScrollStandard();
        }
        return ()=>{
            $49c51c25361d4cd2$var$preventScrollCount--;
            if ($49c51c25361d4cd2$var$preventScrollCount === 0) $49c51c25361d4cd2$var$restore();
        };
    }, [
        isDisabled
    ]);
}
// For most browsers, all we need to do is set `overflow: hidden` on the root element, and
// add some padding to prevent the page from shifting when the scrollbar is hidden.
function $49c51c25361d4cd2$var$preventScrollStandard() {
    return (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.chain)($49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"));
}
// Mobile Safari is a whole different beast. Even with overflow: hidden,
// it still scrolls the page in many situations:
//
// 1. When the bottom toolbar and address bar are collapsed, page scrolling is always allowed.
// 2. When the keyboard is visible, the viewport does not resize. Instead, the keyboard covers part of
//    it, so it becomes scrollable.
// 3. When tapping on an input, the page always scrolls so that the input is centered in the visual viewport.
//    This may cause even fixed position elements to scroll off the screen.
// 4. When using the next/previous buttons in the keyboard to navigate between inputs, the whole page always
//    scrolls, even if the input is inside a nested scrollable element that could be scrolled instead.
//
// In order to work around these cases, and prevent scrolling without jankiness, we do a few things:
//
// 1. Prevent default on `touchmove` events that are not in a scrollable element. This prevents touch scrolling
//    on the window.
// 2. Prevent default on `touchmove` events inside a scrollable element when the scroll position is at the
//    top or bottom. This avoids the whole page scrolling instead, but does prevent overscrolling.
// 3. Prevent default on `touchend` events on input elements and handle focusing the element ourselves.
// 4. When focusing an input, apply a transform to trick Safari into thinking the input is at the top
//    of the page, which prevents it from scrolling the page. After the input is focused, scroll the element
//    into view ourselves, without scrolling the whole page.
// 5. Offset the body by the scroll position using a negative margin and scroll to the top. This should appear the
//    same visually, but makes the actual scroll position always zero. This is required to make all of the
//    above work or Safari will still try to scroll the page when focusing an input.
// 6. As a last resort, handle window scroll events, and scroll back to the top. This can happen when attempting
//    to navigate to an input with the next/previous buttons that's outside a modal.
function $49c51c25361d4cd2$var$preventScrollMobileSafari() {
    let scrollable;
    let lastY = 0;
    let onTouchStart = (e)=>{
        // Store the nearest scrollable parent element from the element that the user touched.
        scrollable = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.getScrollParent)(e.target);
        if (scrollable === document.documentElement && scrollable === document.body) return;
        lastY = e.changedTouches[0].pageY;
    };
    let onTouchMove = (e)=>{
        // Prevent scrolling the window.
        if (!scrollable || scrollable === document.documentElement || scrollable === document.body) {
            e.preventDefault();
            return;
        }
        // Prevent scrolling up when at the top and scrolling down when at the bottom
        // of a nested scrollable area, otherwise mobile Safari will start scrolling
        // the window instead. Unfortunately, this disables bounce scrolling when at
        // the top but it's the best we can do.
        let y = e.changedTouches[0].pageY;
        let scrollTop = scrollable.scrollTop;
        let bottom = scrollable.scrollHeight - scrollable.clientHeight;
        if (bottom === 0) return;
        if (scrollTop <= 0 && y > lastY || scrollTop >= bottom && y < lastY) e.preventDefault();
        lastY = y;
    };
    let onTouchEnd = (e)=>{
        let target = e.target;
        // Apply this change if we're not already focused on the target element
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target) && target !== document.activeElement) {
            e.preventDefault();
            // Apply a transform to trick Safari into thinking the input is at the top of the page
            // so it doesn't try to scroll it into view. When tapping on an input, this needs to
            // be done before the "focus" event, so we have to focus the element ourselves.
            target.style.transform = "translateY(-2000px)";
            target.focus();
            requestAnimationFrame(()=>{
                target.style.transform = "";
            });
        }
    };
    let onFocus = (e)=>{
        let target = e.target;
        if ($49c51c25361d4cd2$var$willOpenKeyboard(target)) {
            // Transform also needs to be applied in the focus event in cases where focus moves
            // other than tapping on an input directly, e.g. the next/previous buttons in the
            // software keyboard. In these cases, it seems applying the transform in the focus event
            // is good enough, whereas when tapping an input, it must be done before the focus event. 🤷‍♂️
            target.style.transform = "translateY(-2000px)";
            requestAnimationFrame(()=>{
                target.style.transform = "";
                // This will have prevented the browser from scrolling the focused element into view,
                // so we need to do this ourselves in a way that doesn't cause the whole page to scroll.
                if ($49c51c25361d4cd2$var$visualViewport) {
                    if ($49c51c25361d4cd2$var$visualViewport.height < window.innerHeight) // If the keyboard is already visible, do this after one additional frame
                    // to wait for the transform to be removed.
                    requestAnimationFrame(()=>{
                        $49c51c25361d4cd2$var$scrollIntoView(target);
                    });
                    else // Otherwise, wait for the visual viewport to resize before scrolling so we can
                    // measure the correct position to scroll to.
                    $49c51c25361d4cd2$var$visualViewport.addEventListener("resize", ()=>$49c51c25361d4cd2$var$scrollIntoView(target), {
                        once: true
                    });
                }
            });
        }
    };
    let onWindowScroll = ()=>{
        // Last resort. If the window scrolled, scroll it back to the top.
        // It should always be at the top because the body will have a negative margin (see below).
        window.scrollTo(0, 0);
    };
    // Record the original scroll position so we can restore it.
    // Then apply a negative margin to the body to offset it by the scroll position. This will
    // enable us to scroll the window to the top, which is required for the rest of this to work.
    let scrollX = window.pageXOffset;
    let scrollY = window.pageYOffset;
    let restoreStyles = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.chain)($49c51c25361d4cd2$var$setStyle(document.documentElement, "paddingRight", `${window.innerWidth - document.documentElement.clientWidth}px`), $49c51c25361d4cd2$var$setStyle(document.documentElement, "overflow", "hidden"), $49c51c25361d4cd2$var$setStyle(document.body, "marginTop", `-${scrollY}px`));
    // Scroll to the top. The negative margin on the body will make this appear the same.
    window.scrollTo(0, 0);
    let removeEvents = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.chain)($49c51c25361d4cd2$var$addEvent(document, "touchstart", onTouchStart, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "touchmove", onTouchMove, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "touchend", onTouchEnd, {
        passive: false,
        capture: true
    }), $49c51c25361d4cd2$var$addEvent(document, "focus", onFocus, true), $49c51c25361d4cd2$var$addEvent(window, "scroll", onWindowScroll));
    return ()=>{
        // Restore styles and scroll the page back to where it was.
        restoreStyles();
        removeEvents();
        window.scrollTo(scrollX, scrollY);
    };
}
// Sets a CSS property on an element, and returns a function to revert it to the previous value.
function $49c51c25361d4cd2$var$setStyle(element, style, value) {
    let cur = element.style[style];
    element.style[style] = value;
    return ()=>{
        element.style[style] = cur;
    };
}
// Adds an event listener to an element, and returns a function to remove it.
function $49c51c25361d4cd2$var$addEvent(target, event, handler, options) {
    target.addEventListener(event, handler, options);
    return ()=>{
        target.removeEventListener(event, handler, options);
    };
}
function $49c51c25361d4cd2$var$scrollIntoView(target) {
    let root = document.scrollingElement || document.documentElement;
    while(target && target !== root){
        // Find the parent scrollable element and adjust the scroll position if the target is not already in view.
        let scrollable = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.getScrollParent)(target);
        if (scrollable !== document.documentElement && scrollable !== document.body && scrollable !== target) {
            let scrollableTop = scrollable.getBoundingClientRect().top;
            let targetTop = target.getBoundingClientRect().top;
            if (targetTop > scrollableTop + target.clientHeight) scrollable.scrollTop += targetTop - scrollableTop;
        }
        target = scrollable.parentElement;
    }
}
function $49c51c25361d4cd2$var$willOpenKeyboard(target) {
    return target instanceof HTMLInputElement && !$49c51c25361d4cd2$var$nonTextInputTypes.has(target.type) || target instanceof HTMLTextAreaElement || target instanceof HTMLElement && target.isContentEditable;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $f57aed4a881a3485$var$Context = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createContext(null);
function $f57aed4a881a3485$export$178405afcd8c5eb(props) {
    let { children: children  } = props;
    let parent = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    let [modalCount, setModalCount] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(0);
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            parent: parent,
            modalCount: modalCount,
            addModal () {
                setModalCount((count)=>count + 1);
                if (parent) parent.addModal();
            },
            removeModal () {
                setModalCount((count)=>count - 1);
                if (parent) parent.removeModal();
            }
        }), [
        parent,
        modalCount
    ]);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($f57aed4a881a3485$var$Context.Provider, {
        value: context
    }, children);
}
function $f57aed4a881a3485$export$d9aaed4c3ece1bc0() {
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    return {
        modalProviderProps: {
            "aria-hidden": context && context.modalCount > 0 ? true : null
        }
    };
}
/**
 * Creates a root node that will be aria-hidden if there are other modals open.
 */ function $f57aed4a881a3485$var$OverlayContainerDOM(props) {
    let { modalProviderProps: modalProviderProps  } = $f57aed4a881a3485$export$d9aaed4c3ece1bc0();
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("div", {
        "data-overlay-container": true,
        ...props,
        ...modalProviderProps
    });
}
function $f57aed4a881a3485$export$bf688221f59024e5(props) {
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($f57aed4a881a3485$export$178405afcd8c5eb, null, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($f57aed4a881a3485$var$OverlayContainerDOM, props));
}
function $f57aed4a881a3485$export$b47c3594eab58386(props) {
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_7__.useIsSSR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body , ...rest } = props;
    (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).useEffect(()=>{
        if (portalContainer === null || portalContainer === void 0 ? void 0 : portalContainer.closest("[data-overlay-container]")) throw new Error("An OverlayContainer must not be inside another container. Please change the portalContainer prop.");
    }, [
        portalContainer
    ]);
    if (!portalContainer) return null;
    let contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($f57aed4a881a3485$export$bf688221f59024e5, rest);
    return /*#__PURE__*/ (0, react_dom__WEBPACK_IMPORTED_MODULE_1__["default"]).createPortal(contents, portalContainer);
}
function $f57aed4a881a3485$export$33ffd74ebf07f060(options) {
    // Add aria-hidden to all parent providers on mount, and restore on unmount.
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($f57aed4a881a3485$var$Context);
    if (!context) throw new Error("Modal is not contained within a provider");
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if ((options === null || options === void 0 ? void 0 : options.isDisabled) || !context || !context.parent) return;
        // The immediate context is from the provider containing this modal, so we only
        // want to trigger aria-hidden on its parents not on the modal provider itself.
        context.parent.addModal();
        return ()=>{
            if (context && context.parent) context.parent.removeModal();
        };
    }, [
        context,
        context.parent,
        options === null || options === void 0 ? void 0 : options.isDisabled
    ]);
    return {
        modalProps: {
            "data-ismodal": !(options === null || options === void 0 ? void 0 : options.isDisabled)
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ var $a2f21f5f14f60553$exports = {};
var $773d5888b972f1cf$exports = {};
$773d5888b972f1cf$exports = {
    "dismiss": `تجاهل`
};


var $d11f19852b941573$exports = {};
$d11f19852b941573$exports = {
    "dismiss": `Отхвърляне`
};


var $b983974c2ee1efb3$exports = {};
$b983974c2ee1efb3$exports = {
    "dismiss": `Odstranit`
};


var $5809cc9d4e92de73$exports = {};
$5809cc9d4e92de73$exports = {
    "dismiss": `Luk`
};


var $c68c2e4fc74398d1$exports = {};
$c68c2e4fc74398d1$exports = {
    "dismiss": `Schließen`
};


var $0898b4c153db2b77$exports = {};
$0898b4c153db2b77$exports = {
    "dismiss": `Απόρριψη`
};


var $6d74810286a15183$exports = {};
$6d74810286a15183$exports = {
    "dismiss": `Dismiss`
};


var $309d73dc65f78055$exports = {};
$309d73dc65f78055$exports = {
    "dismiss": `Descartar`
};


var $44ad94f7205cf593$exports = {};
$44ad94f7205cf593$exports = {
    "dismiss": `Lõpeta`
};


var $7c28f5687f0779a9$exports = {};
$7c28f5687f0779a9$exports = {
    "dismiss": `Hylkää`
};


var $e6d75df4b68bd73a$exports = {};
$e6d75df4b68bd73a$exports = {
    "dismiss": `Rejeter`
};


var $87505c9dab186d0f$exports = {};
$87505c9dab186d0f$exports = {
    "dismiss": `התעלם`
};


var $553439c3ffb3e492$exports = {};
$553439c3ffb3e492$exports = {
    "dismiss": `Odbaci`
};


var $74cf411061b983a2$exports = {};
$74cf411061b983a2$exports = {
    "dismiss": `Elutasítás`
};


var $e933f298574dc435$exports = {};
$e933f298574dc435$exports = {
    "dismiss": `Ignora`
};


var $ac91fc9fe02f71f6$exports = {};
$ac91fc9fe02f71f6$exports = {
    "dismiss": `閉じる`
};


var $52b96f86422025af$exports = {};
$52b96f86422025af$exports = {
    "dismiss": `무시`
};


var $c0d724c3e51dafa6$exports = {};
$c0d724c3e51dafa6$exports = {
    "dismiss": `Atmesti`
};


var $c92899672a3fe72e$exports = {};
$c92899672a3fe72e$exports = {
    "dismiss": `Nerādīt`
};


var $9f576b39d8e7a9d6$exports = {};
$9f576b39d8e7a9d6$exports = {
    "dismiss": `Lukk`
};


var $9d025808aeec81a7$exports = {};
$9d025808aeec81a7$exports = {
    "dismiss": `Negeren`
};


var $fce709921e2c0fa6$exports = {};
$fce709921e2c0fa6$exports = {
    "dismiss": `Zignoruj`
};


var $2599cf0c4ab37f59$exports = {};
$2599cf0c4ab37f59$exports = {
    "dismiss": `Descartar`
};


var $3c220ae7ef8a35fd$exports = {};
$3c220ae7ef8a35fd$exports = {
    "dismiss": `Dispensar`
};


var $93562b5094072f54$exports = {};
$93562b5094072f54$exports = {
    "dismiss": `Revocare`
};


var $cd9e2abd0d06c7b4$exports = {};
$cd9e2abd0d06c7b4$exports = {
    "dismiss": `Пропустить`
};


var $45375701f409adf1$exports = {};
$45375701f409adf1$exports = {
    "dismiss": `Zrušiť`
};


var $27fab53a576de9dd$exports = {};
$27fab53a576de9dd$exports = {
    "dismiss": `Opusti`
};


var $4438748d9952e7c7$exports = {};
$4438748d9952e7c7$exports = {
    "dismiss": `Odbaci`
};


var $0936d7347ef4da4c$exports = {};
$0936d7347ef4da4c$exports = {
    "dismiss": `Avvisa`
};


var $29700c92185d38f8$exports = {};
$29700c92185d38f8$exports = {
    "dismiss": `Kapat`
};


var $662ccaf2be4c25b3$exports = {};
$662ccaf2be4c25b3$exports = {
    "dismiss": `Скасувати`
};


var $d80a27deda7cdb3c$exports = {};
$d80a27deda7cdb3c$exports = {
    "dismiss": `取消`
};


var $2b2734393847c884$exports = {};
$2b2734393847c884$exports = {
    "dismiss": `關閉`
};


$a2f21f5f14f60553$exports = {
    "ar-AE": $773d5888b972f1cf$exports,
    "bg-BG": $d11f19852b941573$exports,
    "cs-CZ": $b983974c2ee1efb3$exports,
    "da-DK": $5809cc9d4e92de73$exports,
    "de-DE": $c68c2e4fc74398d1$exports,
    "el-GR": $0898b4c153db2b77$exports,
    "en-US": $6d74810286a15183$exports,
    "es-ES": $309d73dc65f78055$exports,
    "et-EE": $44ad94f7205cf593$exports,
    "fi-FI": $7c28f5687f0779a9$exports,
    "fr-FR": $e6d75df4b68bd73a$exports,
    "he-IL": $87505c9dab186d0f$exports,
    "hr-HR": $553439c3ffb3e492$exports,
    "hu-HU": $74cf411061b983a2$exports,
    "it-IT": $e933f298574dc435$exports,
    "ja-JP": $ac91fc9fe02f71f6$exports,
    "ko-KR": $52b96f86422025af$exports,
    "lt-LT": $c0d724c3e51dafa6$exports,
    "lv-LV": $c92899672a3fe72e$exports,
    "nb-NO": $9f576b39d8e7a9d6$exports,
    "nl-NL": $9d025808aeec81a7$exports,
    "pl-PL": $fce709921e2c0fa6$exports,
    "pt-BR": $2599cf0c4ab37f59$exports,
    "pt-PT": $3c220ae7ef8a35fd$exports,
    "ro-RO": $93562b5094072f54$exports,
    "ru-RU": $cd9e2abd0d06c7b4$exports,
    "sk-SK": $45375701f409adf1$exports,
    "sl-SI": $27fab53a576de9dd$exports,
    "sr-SP": $4438748d9952e7c7$exports,
    "sv-SE": $0936d7347ef4da4c$exports,
    "tr-TR": $29700c92185d38f8$exports,
    "uk-UA": $662ccaf2be4c25b3$exports,
    "zh-CN": $d80a27deda7cdb3c$exports,
    "zh-TW": $2b2734393847c884$exports
};






function $86ea4cb521eb2e37$export$2317d149ed6f78c4(props) {
    let { onDismiss: onDismiss , ...otherProps } = props;
    let stringFormatter = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_3__.useLocalizedStringFormatter)((0, (/*@__PURE__*/$parcel$interopDefault($a2f21f5f14f60553$exports))));
    let labels = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useLabels)(otherProps, stringFormatter.format("dismiss"));
    let onClick = ()=>{
        if (onDismiss) onDismiss();
    };
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement((0, _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_8__.VisuallyHidden), null, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("button", {
        ...labels,
        tabIndex: -1,
        onClick: onClick
    }));
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // Keeps a ref count of all hidden elements. Added to when hiding an element, and
// subtracted from when showing it again. When it reaches zero, aria-hidden is removed.
let $5e3802645cc19319$var$refCountMap = new WeakMap();
let $5e3802645cc19319$var$observerStack = [];
function $5e3802645cc19319$export$1c3ebcada18427bf(targets, root = document.body) {
    let visibleNodes = new Set(targets);
    let hiddenNodes = new Set();
    let walk = (root)=>{
        // Keep live announcer and top layer elements (e.g. toasts) visible.
        for (let element of root.querySelectorAll("[data-live-announcer], [data-react-aria-top-layer]"))visibleNodes.add(element);
        let acceptNode = (node)=>{
            // Skip this node and its children if it is one of the target nodes, or a live announcer.
            // Also skip children of already hidden nodes, as aria-hidden is recursive. An exception is
            // made for elements with role="row" since VoiceOver on iOS has issues hiding elements with role="row".
            // For that case we want to hide the cells inside as well (https://bugs.webkit.org/show_bug.cgi?id=222623).
            if (visibleNodes.has(node) || hiddenNodes.has(node.parentElement) && node.parentElement.getAttribute("role") !== "row") return NodeFilter.FILTER_REJECT;
            // Skip this node but continue to children if one of the targets is inside the node.
            for (let target of visibleNodes){
                if (node.contains(target)) return NodeFilter.FILTER_SKIP;
            }
            return NodeFilter.FILTER_ACCEPT;
        };
        let walker = document.createTreeWalker(root, NodeFilter.SHOW_ELEMENT, {
            acceptNode: acceptNode
        });
        // TreeWalker does not include the root.
        let acceptRoot = acceptNode(root);
        if (acceptRoot === NodeFilter.FILTER_ACCEPT) hide(root);
        if (acceptRoot !== NodeFilter.FILTER_REJECT) {
            let node = walker.nextNode();
            while(node != null){
                hide(node);
                node = walker.nextNode();
            }
        }
    };
    let hide = (node)=>{
        var _refCountMap_get;
        let refCount = (_refCountMap_get = $5e3802645cc19319$var$refCountMap.get(node)) !== null && _refCountMap_get !== void 0 ? _refCountMap_get : 0;
        // If already aria-hidden, and the ref count is zero, then this element
        // was already hidden and there's nothing for us to do.
        if (node.getAttribute("aria-hidden") === "true" && refCount === 0) return;
        if (refCount === 0) node.setAttribute("aria-hidden", "true");
        hiddenNodes.add(node);
        $5e3802645cc19319$var$refCountMap.set(node, refCount + 1);
    };
    // If there is already a MutationObserver listening from a previous call,
    // disconnect it so the new on takes over.
    if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].disconnect();
    walk(root);
    let observer = new MutationObserver((changes)=>{
        for (let change of changes){
            if (change.type !== "childList" || change.addedNodes.length === 0) continue;
            // If the parent element of the added nodes is not within one of the targets,
            // and not already inside a hidden node, hide all of the new children.
            if (![
                ...visibleNodes,
                ...hiddenNodes
            ].some((node)=>node.contains(change.target))) {
                for (let node of change.removedNodes)if (node instanceof Element) {
                    visibleNodes.delete(node);
                    hiddenNodes.delete(node);
                }
                for (let node of change.addedNodes){
                    if ((node instanceof HTMLElement || node instanceof SVGElement) && (node.dataset.liveAnnouncer === "true" || node.dataset.reactAriaTopLayer === "true")) visibleNodes.add(node);
                    else if (node instanceof Element) walk(node);
                }
            }
        }
    });
    observer.observe(root, {
        childList: true,
        subtree: true
    });
    let observerWrapper = {
        observe () {
            observer.observe(root, {
                childList: true,
                subtree: true
            });
        },
        disconnect () {
            observer.disconnect();
        }
    };
    $5e3802645cc19319$var$observerStack.push(observerWrapper);
    return ()=>{
        observer.disconnect();
        for (let node of hiddenNodes){
            let count = $5e3802645cc19319$var$refCountMap.get(node);
            if (count === 1) {
                node.removeAttribute("aria-hidden");
                $5e3802645cc19319$var$refCountMap.delete(node);
            } else $5e3802645cc19319$var$refCountMap.set(node, count - 1);
        }
        // Remove this observer from the stack, and start the previous one.
        if (observerWrapper === $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1]) {
            $5e3802645cc19319$var$observerStack.pop();
            if ($5e3802645cc19319$var$observerStack.length) $5e3802645cc19319$var$observerStack[$5e3802645cc19319$var$observerStack.length - 1].observe();
        } else $5e3802645cc19319$var$observerStack.splice($5e3802645cc19319$var$observerStack.indexOf(observerWrapper), 1);
    };
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $f2f8a6077418541e$export$542a6fd13ac93354(props, state) {
    let { triggerRef: triggerRef , popoverRef: popoverRef , isNonModal: isNonModal , isKeyboardDismissDisabled: isKeyboardDismissDisabled , ...otherProps } = props;
    let { overlayProps: overlayProps , underlayProps: underlayProps  } = (0, $a11501f3d1d39e6c$export$ea8f71083e90600f)({
        isOpen: state.isOpen,
        onClose: state.close,
        shouldCloseOnBlur: true,
        isDismissable: !isNonModal,
        isKeyboardDismissDisabled: isKeyboardDismissDisabled
    }, popoverRef);
    let { overlayProps: positionProps , arrowProps: arrowProps , placement: placement  } = (0, $2a41e45df1593e64$export$d39e1813b3bdd0e1)({
        ...otherProps,
        targetRef: triggerRef,
        overlayRef: popoverRef,
        isOpen: state.isOpen,
        onClose: null
    });
    (0, $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)({
        isDisabled: isNonModal
    });
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(()=>{
        if (state.isOpen && !isNonModal && popoverRef.current) return (0, $5e3802645cc19319$export$1c3ebcada18427bf)([
            popoverRef.current
        ]);
    }, [
        isNonModal,
        state.isOpen,
        popoverRef
    ]);
    return {
        popoverProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.mergeProps)(overlayProps, positionProps),
        arrowProps: arrowProps,
        underlayProps: underlayProps,
        placement: placement
    };
}


/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




const $337b884510726a0d$export$a2200b96afd16271 = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createContext(null);
function $337b884510726a0d$export$c6fdb837b070b4ff(props) {
    let isSSR = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_7__.useIsSSR)();
    let { portalContainer: portalContainer = isSSR ? null : document.body , isExiting: isExiting  } = props;
    let [contain, setContain] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let contextValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            contain: contain,
            setContain: setContain
        }), [
        contain,
        setContain
    ]);
    if (!portalContainer) return null;
    let contents;
    if (!props.disableFocusManagement) contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement((0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_6__.FocusScope), {
        restoreFocus: true,
        contain: contain && !isExiting
    }, props.children));
    else contents = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($337b884510726a0d$export$a2200b96afd16271.Provider, {
        value: contextValue
    }, props.children);
    return /*#__PURE__*/ (0, react_dom__WEBPACK_IMPORTED_MODULE_1__["default"]).createPortal(contents, portalContainer);
}
function $337b884510726a0d$export$14c98a7594375490() {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($337b884510726a0d$export$a2200b96afd16271);
    let setContain = ctx === null || ctx === void 0 ? void 0 : ctx.setContain;
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.useLayoutEffect)(()=>{
        setContain === null || setContain === void 0 ? void 0 : setContain(true);
    }, [
        setContain
    ]);
}



function $8ac8429251c45e4b$export$dbc0f175b25fb0fb(props, state, ref) {
    let { overlayProps: overlayProps , underlayProps: underlayProps  } = (0, $a11501f3d1d39e6c$export$ea8f71083e90600f)({
        ...props,
        isOpen: state.isOpen,
        onClose: state.close
    }, ref);
    (0, $49c51c25361d4cd2$export$ee0f7cc6afcd1c18)({
        isDisabled: !state.isOpen
    });
    (0, $337b884510726a0d$export$14c98a7594375490)();
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (state.isOpen) return (0, $5e3802645cc19319$export$1c3ebcada18427bf)([
            ref.current
        ]);
    }, [
        state.isOpen,
        ref
    ]);
    return {
        modalProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_4__.mergeProps)(overlayProps),
        underlayProps: underlayProps
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/select/dist/import.mjs":
/*!*********************************************************!*\
  !*** ./node_modules/@react-aria/select/dist/import.mjs ***!
  \*********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HiddenSelect": () => (/* binding */ $bdd25dc72710631f$export$cbd84cdb2e668835),
/* harmony export */   "useHiddenSelect": () => (/* binding */ $bdd25dc72710631f$export$f809e80f58e251d1),
/* harmony export */   "useSelect": () => (/* binding */ $58aed456727eb0f3$export$e64b2f635402ca43)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_selection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/selection */ "./node_modules/@react-aria/selection/dist/import.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/import.mjs");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/real-module.mjs");
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/label */ "./node_modules/@react-aria/label/dist/import.mjs");
/* harmony import */ var _react_aria_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/menu */ "./node_modules/@react-aria/menu/dist/import.mjs");
/* harmony import */ var _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @react-aria/visually-hidden */ "./node_modules/@react-aria/visually-hidden/dist/import.mjs");









/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 






function $58aed456727eb0f3$export$e64b2f635402ca43(props, state, ref) {
    let { keyboardDelegate: keyboardDelegate , isDisabled: isDisabled  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_1__.useCollator)({
        usage: "search",
        sensitivity: "base"
    });
    let delegate = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>keyboardDelegate || new (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_2__.ListKeyboardDelegate)(state.collection, state.disabledKeys, null, collator), [
        keyboardDelegate,
        state.collection,
        state.disabledKeys,
        collator
    ]);
    let { menuTriggerProps: menuTriggerProps , menuProps: menuProps  } = (0, _react_aria_menu__WEBPACK_IMPORTED_MODULE_3__.useMenuTrigger)({
        isDisabled: isDisabled,
        type: "listbox"
    }, state, ref);
    let onKeyDown = (e)=>{
        switch(e.key){
            case "ArrowLeft":
                {
                    // prevent scrolling containers
                    e.preventDefault();
                    let key = state.selectedKey != null ? delegate.getKeyAbove(state.selectedKey) : delegate.getFirstKey();
                    if (key) state.setSelectedKey(key);
                    break;
                }
            case "ArrowRight":
                {
                    // prevent scrolling containers
                    e.preventDefault();
                    let key = state.selectedKey != null ? delegate.getKeyBelow(state.selectedKey) : delegate.getFirstKey();
                    if (key) state.setSelectedKey(key);
                    break;
                }
        }
    };
    let { typeSelectProps: typeSelectProps  } = (0, _react_aria_selection__WEBPACK_IMPORTED_MODULE_2__.useTypeSelect)({
        keyboardDelegate: delegate,
        selectionManager: state.selectionManager,
        onTypeSelect (key) {
            state.setSelectedKey(key);
        }
    });
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_4__.useField)({
        ...props,
        labelElementType: "span"
    });
    typeSelectProps.onKeyDown = typeSelectProps.onKeyDownCapture;
    delete typeSelectProps.onKeyDownCapture;
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__.filterDOMProps)(props, {
        labelable: true
    });
    let triggerProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__.mergeProps)(typeSelectProps, menuTriggerProps, fieldProps);
    let valueId = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__.useId)();
    return {
        labelProps: {
            ...labelProps,
            onClick: ()=>{
                if (!props.isDisabled) {
                    ref.current.focus();
                    // Show the focus ring so the user knows where focus went
                    (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_6__.setInteractionModality)("keyboard");
                }
            }
        },
        triggerProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__.mergeProps)(domProps, {
            ...triggerProps,
            isDisabled: isDisabled,
            onKeyDown: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__.chain)(triggerProps.onKeyDown, onKeyDown, props.onKeyDown),
            onKeyUp: props.onKeyUp,
            "aria-labelledby": [
                valueId,
                triggerProps["aria-labelledby"],
                triggerProps["aria-label"] && !triggerProps["aria-labelledby"] ? triggerProps.id : null
            ].filter(Boolean).join(" "),
            onFocus (e) {
                if (state.isFocused) return;
                if (props.onFocus) props.onFocus(e);
                if (props.onFocusChange) props.onFocusChange(true);
                state.setFocused(true);
            },
            onBlur (e) {
                if (state.isOpen) return;
                if (props.onBlur) props.onBlur(e);
                if (props.onFocusChange) props.onFocusChange(false);
                state.setFocused(false);
            }
        }),
        valueProps: {
            id: valueId
        },
        menuProps: {
            ...menuProps,
            autoFocus: state.focusStrategy || true,
            shouldSelectOnPressUp: true,
            shouldFocusOnHover: true,
            disallowEmptySelection: true,
            onBlur: (e)=>{
                if (e.currentTarget.contains(e.relatedTarget)) return;
                if (props.onBlur) props.onBlur(e);
                if (props.onFocusChange) props.onFocusChange(false);
                state.setFocused(false);
            },
            "aria-labelledby": [
                fieldProps["aria-labelledby"],
                triggerProps["aria-label"] && !fieldProps["aria-labelledby"] ? triggerProps.id : null
            ].filter(Boolean).join(" ")
        },
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



function $bdd25dc72710631f$export$f809e80f58e251d1(props, state, triggerRef) {
    let { autoComplete: autoComplete , name: name , isDisabled: isDisabled  } = props;
    let modality = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_6__.useInteractionModality)();
    let { visuallyHiddenProps: visuallyHiddenProps  } = (0, _react_aria_visually_hidden__WEBPACK_IMPORTED_MODULE_7__.useVisuallyHidden)();
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_5__.useFormReset)(props.selectRef, state.selectedKey, state.setSelectedKey);
    var _state_selectedKey;
    // In Safari, the <select> cannot have `display: none` or `hidden` for autofill to work.
    // In Firefox, there must be a <label> to identify the <select> whereas other browsers
    // seem to identify it just by surrounding text.
    // The solution is to use <VisuallyHidden> to hide the elements, which clips the elements to a
    // 1px rectangle. In addition, we hide from screen readers with aria-hidden, and make the <select>
    // non tabbable with tabIndex={-1}.
    //
    // In mobile browsers, there are next/previous buttons above the software keyboard for navigating
    // between fields in a form. These only support native form inputs that are tabbable. In order to
    // support those, an additional hidden input is used to marshall focus to the button. It is tabbable
    // except when the button is focused, so that shift tab works properly to go to the actual previous
    // input in the form. Using the <select> for this also works, but Safari on iOS briefly flashes
    // the native menu on focus, so this isn't ideal. A font-size of 16px or greater is required to
    // prevent Safari from zooming in on the input when it is focused.
    //
    // If the current interaction modality is null, then the user hasn't interacted with the page yet.
    // In this case, we set the tabIndex to -1 on the input element so that automated accessibility
    // checkers don't throw false-positives about focusable elements inside an aria-hidden parent.
    return {
        containerProps: {
            ...visuallyHiddenProps,
            "aria-hidden": true,
            ["data-a11y-ignore"]: "aria-hidden-focus"
        },
        inputProps: {
            type: "text",
            tabIndex: modality == null || state.isFocused || state.isOpen ? -1 : 0,
            style: {
                fontSize: 16
            },
            onFocus: ()=>triggerRef.current.focus(),
            disabled: isDisabled
        },
        selectProps: {
            tabIndex: -1,
            autoComplete: autoComplete,
            disabled: isDisabled,
            name: name,
            size: state.collection.size,
            value: (_state_selectedKey = state.selectedKey) !== null && _state_selectedKey !== void 0 ? _state_selectedKey : "",
            onChange: (e)=>state.setSelectedKey(e.target.value)
        }
    };
}
function $bdd25dc72710631f$export$cbd84cdb2e668835(props) {
    let { state: state , triggerRef: triggerRef , label: label , name: name , isDisabled: isDisabled  } = props;
    let selectRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let { containerProps: containerProps , inputProps: inputProps , selectProps: selectProps  } = $bdd25dc72710631f$export$f809e80f58e251d1({
        ...props,
        selectRef: selectRef
    }, state, triggerRef);
    var _state_selectedKey;
    // If used in a <form>, use a hidden input so the value can be submitted to a server.
    // If the collection isn't too big, use a hidden <select> element for this so that browser
    // autofill will work. Otherwise, use an <input type="hidden">.
    if (state.collection.size <= 300) return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("div", {
        ...containerProps,
        "data-testid": "hidden-select-container"
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("input", inputProps), /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("label", null, label, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("select", {
        ...selectProps,
        ref: selectRef
    }, /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("option", null), [
        ...state.collection.getKeys()
    ].map((key)=>{
        let item = state.collection.getItem(key);
        if (item.type === "item") return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("option", {
            key: item.key,
            value: item.key
        }, item.textValue);
    }))));
    else if (name) return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement("input", {
        type: "hidden",
        autoComplete: selectProps.autoComplete,
        name: name,
        disabled: isDisabled,
        value: (_state_selectedKey = state.selectedKey) !== null && _state_selectedKey !== void 0 ? _state_selectedKey : ""
    });
    return null;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/selection/dist/import.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@react-aria/selection/dist/import.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListKeyboardDelegate": () => (/* binding */ $2a25aae57d74318e$export$a05409b8bb224a5a),
/* harmony export */   "useSelectableCollection": () => (/* binding */ $ae20dd8cbca75726$export$d6daf82dcd84e87c),
/* harmony export */   "useSelectableItem": () => (/* binding */ $880e95eb8b93ba9a$export$ecf600387e221c37),
/* harmony export */   "useSelectableList": () => (/* binding */ $982254629710d113$export$b95089534ab7c1fd),
/* harmony export */   "useTypeSelect": () => (/* binding */ $fb3050f43d946246$export$e32c88dfddc6e1d8)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/import.mjs");
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/import.mjs");
/* harmony import */ var _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/i18n */ "./node_modules/@react-aria/i18n/dist/real-module.mjs");






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $feb5ffebff200149$export$d3e3bd3e26688c04(e) {
    // Ctrl + Arrow Up/Arrow Down has a system wide meaning on macOS, so use Alt instead.
    // On Windows and Ubuntu, Alt + Space has a system wide meaning.
    return (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isAppleDevice)() ? e.altKey : e.ctrlKey;
}
function $feb5ffebff200149$export$16792effe837dba3(e) {
    if ((0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isMac)()) return e.metaKey;
    return e.ctrlKey;
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/**
 * Controls how long to wait before clearing the typeahead buffer.
 */ const $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS = 1000; // 1 second
function $fb3050f43d946246$export$e32c88dfddc6e1d8(options) {
    let { keyboardDelegate: keyboardDelegate , selectionManager: selectionManager , onTypeSelect: onTypeSelect  } = options;
    let state = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        search: "",
        timeout: null
    }).current;
    let onKeyDown = (e)=>{
        let character = $fb3050f43d946246$var$getStringForKey(e.key);
        if (!character || e.ctrlKey || e.metaKey || !e.currentTarget.contains(e.target)) return;
        // Do not propagate the Spacebar event if it's meant to be part of the search.
        // When we time out, the search term becomes empty, hence the check on length.
        // Trimming is to account for the case of pressing the Spacebar more than once,
        // which should cycle through the selection/deselection of the focused item.
        if (character === " " && state.search.trim().length > 0) {
            e.preventDefault();
            if (!("continuePropagation" in e)) e.stopPropagation();
        }
        state.search += character;
        // Use the delegate to find a key to focus.
        // Prioritize items after the currently focused item, falling back to searching the whole list.
        let key = keyboardDelegate.getKeyForSearch(state.search, selectionManager.focusedKey);
        // If no key found, search from the top.
        if (key == null) key = keyboardDelegate.getKeyForSearch(state.search);
        if (key != null) {
            selectionManager.setFocusedKey(key);
            if (onTypeSelect) onTypeSelect(key);
        }
        clearTimeout(state.timeout);
        state.timeout = setTimeout(()=>{
            state.search = "";
        }, $fb3050f43d946246$var$TYPEAHEAD_DEBOUNCE_WAIT_MS);
    };
    return {
        typeSelectProps: {
            // Using a capturing listener to catch the keydown event before
            // other hooks in order to handle the Spacebar event.
            onKeyDownCapture: keyboardDelegate.getKeyForSearch ? onKeyDown : null
        }
    };
}
function $fb3050f43d946246$var$getStringForKey(key) {
    // If the key is of length 1, it is an ASCII value.
    // Otherwise, if there are no ASCII characters in the key name,
    // it is a Unicode character.
    // See https://www.w3.org/TR/uievents-key/
    if (key.length === 1 || !/^[A-Z]/i.test(key)) return key;
    return "";
}


function $ae20dd8cbca75726$export$d6daf82dcd84e87c(options) {
    let { selectionManager: manager , keyboardDelegate: delegate , ref: ref , autoFocus: autoFocus = false , shouldFocusWrap: shouldFocusWrap = false , disallowEmptySelection: disallowEmptySelection = false , disallowSelectAll: disallowSelectAll = false , selectOnFocus: selectOnFocus = manager.selectionBehavior === "replace" , disallowTypeAhead: disallowTypeAhead = false , shouldUseVirtualFocus: shouldUseVirtualFocus , allowsTabNavigation: allowsTabNavigation = false , isVirtualized: isVirtualized , scrollRef: // If no scrollRef is provided, assume the collection ref is the scrollable region
    scrollRef = ref  } = options;
    let { direction: direction  } = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__.useLocale)();
    let onKeyDown = (e)=>{
        // Prevent option + tab from doing anything since it doesn't move focus to the cells, only buttons/checkboxes
        if (e.altKey && e.key === "Tab") e.preventDefault();
        // Keyboard events bubble through portals. Don't handle keyboard events
        // for elements outside the collection (e.g. menus).
        if (!ref.current.contains(e.target)) return;
        const navigateToKey = (key, childFocus)=>{
            if (key != null) {
                manager.setFocusedKey(key, childFocus);
                if (e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(key);
                else if (selectOnFocus && !(0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e)) manager.replaceSelection(key);
            }
        };
        switch(e.key){
            case "ArrowDown":
                if (delegate.getKeyBelow) {
                    var _delegate_getFirstKey, _delegate_getFirstKey1;
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyBelow(manager.focusedKey) : (_delegate_getFirstKey = delegate.getFirstKey) === null || _delegate_getFirstKey === void 0 ? void 0 : _delegate_getFirstKey.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getFirstKey1 = delegate.getFirstKey) === null || _delegate_getFirstKey1 === void 0 ? void 0 : _delegate_getFirstKey1.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case "ArrowUp":
                if (delegate.getKeyAbove) {
                    var _delegate_getLastKey, _delegate_getLastKey1;
                    e.preventDefault();
                    let nextKey = manager.focusedKey != null ? delegate.getKeyAbove(manager.focusedKey) : (_delegate_getLastKey = delegate.getLastKey) === null || _delegate_getLastKey === void 0 ? void 0 : _delegate_getLastKey.call(delegate);
                    if (nextKey == null && shouldFocusWrap) nextKey = (_delegate_getLastKey1 = delegate.getLastKey) === null || _delegate_getLastKey1 === void 0 ? void 0 : _delegate_getLastKey1.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case "ArrowLeft":
                if (delegate.getKeyLeftOf) {
                    var _delegate_getFirstKey2, _delegate_getLastKey2;
                    e.preventDefault();
                    let nextKey = delegate.getKeyLeftOf(manager.focusedKey);
                    if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? (_delegate_getFirstKey2 = delegate.getFirstKey) === null || _delegate_getFirstKey2 === void 0 ? void 0 : _delegate_getFirstKey2.call(delegate, manager.focusedKey) : (_delegate_getLastKey2 = delegate.getLastKey) === null || _delegate_getLastKey2 === void 0 ? void 0 : _delegate_getLastKey2.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey, direction === "rtl" ? "first" : "last");
                }
                break;
            case "ArrowRight":
                if (delegate.getKeyRightOf) {
                    var _delegate_getLastKey3, _delegate_getFirstKey3;
                    e.preventDefault();
                    let nextKey = delegate.getKeyRightOf(manager.focusedKey);
                    if (nextKey == null && shouldFocusWrap) nextKey = direction === "rtl" ? (_delegate_getLastKey3 = delegate.getLastKey) === null || _delegate_getLastKey3 === void 0 ? void 0 : _delegate_getLastKey3.call(delegate, manager.focusedKey) : (_delegate_getFirstKey3 = delegate.getFirstKey) === null || _delegate_getFirstKey3 === void 0 ? void 0 : _delegate_getFirstKey3.call(delegate, manager.focusedKey);
                    navigateToKey(nextKey, direction === "rtl" ? "last" : "first");
                }
                break;
            case "Home":
                if (delegate.getFirstKey) {
                    e.preventDefault();
                    let firstKey = delegate.getFirstKey(manager.focusedKey, (0, $feb5ffebff200149$export$16792effe837dba3)(e));
                    manager.setFocusedKey(firstKey);
                    if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(firstKey);
                    else if (selectOnFocus) manager.replaceSelection(firstKey);
                }
                break;
            case "End":
                if (delegate.getLastKey) {
                    e.preventDefault();
                    let lastKey = delegate.getLastKey(manager.focusedKey, (0, $feb5ffebff200149$export$16792effe837dba3)(e));
                    manager.setFocusedKey(lastKey);
                    if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && e.shiftKey && manager.selectionMode === "multiple") manager.extendSelection(lastKey);
                    else if (selectOnFocus) manager.replaceSelection(lastKey);
                }
                break;
            case "PageDown":
                if (delegate.getKeyPageBelow) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageBelow(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case "PageUp":
                if (delegate.getKeyPageAbove) {
                    e.preventDefault();
                    let nextKey = delegate.getKeyPageAbove(manager.focusedKey);
                    navigateToKey(nextKey);
                }
                break;
            case "a":
                if ((0, $feb5ffebff200149$export$16792effe837dba3)(e) && manager.selectionMode === "multiple" && disallowSelectAll !== true) {
                    e.preventDefault();
                    manager.selectAll();
                }
                break;
            case "Escape":
                e.preventDefault();
                if (!disallowEmptySelection) manager.clearSelection();
                break;
            case "Tab":
                if (!allowsTabNavigation) {
                    // There may be elements that are "tabbable" inside a collection (e.g. in a grid cell).
                    // However, collections should be treated as a single tab stop, with arrow key navigation internally.
                    // We don't control the rendering of these, so we can't override the tabIndex to prevent tabbing.
                    // Instead, we handle the Tab key, and move focus manually to the first/last tabbable element
                    // in the collection, so that the browser default behavior will apply starting from that element
                    // rather than the currently focused one.
                    if (e.shiftKey) ref.current.focus();
                    else {
                        let walker = (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_3__.getFocusableTreeWalker)(ref.current, {
                            tabbable: true
                        });
                        let next;
                        let last;
                        do {
                            last = walker.lastChild();
                            if (last) next = last;
                        }while (last);
                        if (next && !next.contains(document.activeElement)) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.focusWithoutScrolling)(next);
                    }
                    break;
                }
        }
    };
    // Store the scroll position so we can restore it later.
    let scrollPos = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        top: 0,
        left: 0
    });
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.useEvent)(scrollRef, "scroll", isVirtualized ? null : ()=>{
        scrollPos.current = {
            top: scrollRef.current.scrollTop,
            left: scrollRef.current.scrollLeft
        };
    });
    let onFocus = (e)=>{
        if (manager.isFocused) {
            // If a focus event bubbled through a portal, reset focus state.
            if (!e.currentTarget.contains(e.target)) manager.setFocused(false);
            return;
        }
        // Focus events can bubble through portals. Ignore these events.
        if (!e.currentTarget.contains(e.target)) return;
        manager.setFocused(true);
        if (manager.focusedKey == null) {
            let navigateToFirstKey = (key)=>{
                if (key != null) {
                    manager.setFocusedKey(key);
                    if (selectOnFocus) manager.replaceSelection(key);
                }
            };
            // If the user hasn't yet interacted with the collection, there will be no focusedKey set.
            // Attempt to detect whether the user is tabbing forward or backward into the collection
            // and either focus the first or last item accordingly.
            let relatedTarget = e.relatedTarget;
            var _manager_lastSelectedKey, _manager_firstSelectedKey;
            if (relatedTarget && e.currentTarget.compareDocumentPosition(relatedTarget) & Node.DOCUMENT_POSITION_FOLLOWING) navigateToFirstKey((_manager_lastSelectedKey = manager.lastSelectedKey) !== null && _manager_lastSelectedKey !== void 0 ? _manager_lastSelectedKey : delegate.getLastKey());
            else navigateToFirstKey((_manager_firstSelectedKey = manager.firstSelectedKey) !== null && _manager_firstSelectedKey !== void 0 ? _manager_firstSelectedKey : delegate.getFirstKey());
        } else if (!isVirtualized) {
            // Restore the scroll position to what it was before.
            scrollRef.current.scrollTop = scrollPos.current.top;
            scrollRef.current.scrollLeft = scrollPos.current.left;
        }
        if (!isVirtualized && manager.focusedKey != null) {
            // Refocus and scroll the focused item into view if it exists within the scrollable region.
            let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
            if (element) {
                // This prevents a flash of focus on the first/last element in the collection, or the collection itself.
                if (!element.contains(document.activeElement)) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.focusWithoutScrolling)(element);
                let modality = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.getInteractionModality)();
                if (modality === "keyboard") (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.scrollIntoViewport)(element, {
                    containingElement: ref.current
                });
            }
        }
    };
    let onBlur = (e)=>{
        // Don't set blurred and then focused again if moving focus within the collection.
        if (!e.currentTarget.contains(e.relatedTarget)) manager.setFocused(false);
    };
    const autoFocusRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(autoFocus);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (autoFocusRef.current) {
            let focusedKey = null;
            // Check focus strategy to determine which item to focus
            if (autoFocus === "first") focusedKey = delegate.getFirstKey();
            if (autoFocus === "last") focusedKey = delegate.getLastKey();
            // If there are any selected keys, make the first one the new focus target
            let selectedKeys = manager.selectedKeys;
            if (selectedKeys.size) focusedKey = selectedKeys.values().next().value;
            manager.setFocused(true);
            manager.setFocusedKey(focusedKey);
            // If no default focus key is selected, focus the collection itself.
            if (focusedKey == null && !shouldUseVirtualFocus) (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_3__.focusSafely)(ref.current);
        }
        autoFocusRef.current = false;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // If not virtualized, scroll the focused element into view when the focusedKey changes.
    // When virtualized, Virtualizer handles this internally.
    let lastFocusedKey = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(manager.focusedKey);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let modality = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.getInteractionModality)();
        if (manager.isFocused && manager.focusedKey != null && (scrollRef === null || scrollRef === void 0 ? void 0 : scrollRef.current)) {
            let element = scrollRef.current.querySelector(`[data-key="${manager.focusedKey}"]`);
            if (element && modality === "keyboard") {
                if (!isVirtualized) (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.scrollIntoView)(scrollRef.current, element);
                (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.scrollIntoViewport)(element, {
                    containingElement: ref.current
                });
            }
        }
        // If the focused key becomes null (e.g. the last item is deleted), focus the whole collection.
        if (manager.isFocused && manager.focusedKey == null && lastFocusedKey.current != null) (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_3__.focusSafely)(ref.current);
        lastFocusedKey.current = manager.focusedKey;
    }, [
        isVirtualized,
        scrollRef,
        manager.focusedKey,
        manager.isFocused,
        ref
    ]);
    let handlers = {
        onKeyDown: onKeyDown,
        onFocus: onFocus,
        onBlur: onBlur,
        onMouseDown (e) {
            // Ignore events that bubbled through portals.
            if (scrollRef.current === e.target) // Prevent focus going to the collection when clicking on the scrollbar.
            e.preventDefault();
        }
    };
    let { typeSelectProps: typeSelectProps  } = (0, $fb3050f43d946246$export$e32c88dfddc6e1d8)({
        keyboardDelegate: delegate,
        selectionManager: manager
    });
    if (!disallowTypeAhead) handlers = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(typeSelectProps, handlers);
    // If nothing is focused within the collection, make the collection itself tabbable.
    // This will be marshalled to either the first or last item depending on where focus came from.
    // If using virtual focus, don't set a tabIndex at all so that VoiceOver on iOS 14 doesn't try
    // to move real DOM focus to the element anyway.
    let tabIndex;
    if (!shouldUseVirtualFocus) tabIndex = manager.focusedKey == null ? 0 : -1;
    return {
        collectionProps: {
            ...handlers,
            tabIndex: tabIndex
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $880e95eb8b93ba9a$export$ecf600387e221c37(options) {
    let { selectionManager: manager , key: key , ref: ref , shouldSelectOnPressUp: shouldSelectOnPressUp , shouldUseVirtualFocus: shouldUseVirtualFocus , focus: focus , isDisabled: isDisabled , onAction: onAction , allowsDifferentPressOrigin: allowsDifferentPressOrigin  } = options;
    let onSelect = (e)=>{
        if (e.pointerType === "keyboard" && (0, $feb5ffebff200149$export$d3e3bd3e26688c04)(e)) manager.toggleSelection(key);
        else {
            if (manager.selectionMode === "none") return;
            if (manager.selectionMode === "single") {
                if (manager.isSelected(key) && !manager.disallowEmptySelection) manager.toggleSelection(key);
                else manager.replaceSelection(key);
            } else if (e && e.shiftKey) manager.extendSelection(key);
            else if (manager.selectionBehavior === "toggle" || e && ((0, $feb5ffebff200149$export$16792effe837dba3)(e) || e.pointerType === "touch" || e.pointerType === "virtual")) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
            manager.toggleSelection(key);
            else manager.replaceSelection(key);
        }
    };
    // Focus the associated DOM node when this item becomes the focusedKey
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let isFocused = key === manager.focusedKey;
        if (isFocused && manager.isFocused && !shouldUseVirtualFocus) {
            if (focus) focus();
            else if (document.activeElement !== ref.current) (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_3__.focusSafely)(ref.current);
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        ref,
        key,
        manager.focusedKey,
        manager.childFocusStrategy,
        manager.isFocused,
        shouldUseVirtualFocus
    ]);
    isDisabled = isDisabled || manager.isDisabled(key);
    // Set tabIndex to 0 if the element is focused, or -1 otherwise so that only the last focused
    // item is tabbable.  If using virtual focus, don't set a tabIndex at all so that VoiceOver
    // on iOS 14 doesn't try to move real DOM focus to the item anyway.
    let itemProps = {};
    if (!shouldUseVirtualFocus && !isDisabled) itemProps = {
        tabIndex: key === manager.focusedKey ? 0 : -1,
        onFocus (e) {
            if (e.target === ref.current) manager.setFocusedKey(key);
        }
    };
    else if (isDisabled) itemProps.onMouseDown = (e)=>{
        // Prevent focus going to the body when clicking on a disabled item.
        e.preventDefault();
    };
    // With checkbox selection, onAction (i.e. navigation) becomes primary, and occurs on a single click of the row.
    // Clicking the checkbox enters selection mode, after which clicking anywhere on any row toggles selection for that row.
    // With highlight selection, onAction is secondary, and occurs on double click. Single click selects the row.
    // With touch, onAction occurs on single tap, and long press enters selection mode.
    let allowsSelection = !isDisabled && manager.canSelectItem(key);
    let allowsActions = onAction && !isDisabled;
    let hasPrimaryAction = allowsActions && (manager.selectionBehavior === "replace" ? !allowsSelection : manager.isEmpty);
    let hasSecondaryAction = allowsActions && allowsSelection && manager.selectionBehavior === "replace";
    let hasAction = hasPrimaryAction || hasSecondaryAction;
    let modality = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let longPressEnabled = hasAction && allowsSelection;
    let longPressEnabledOnPressStart = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    let hadPrimaryActionOnPressStart = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    // By default, selection occurs on pointer down. This can be strange if selecting an
    // item causes the UI to disappear immediately (e.g. menus).
    // If shouldSelectOnPressUp is true, we use onPressUp instead of onPressStart.
    // onPress requires a pointer down event on the same element as pointer up. For menus,
    // we want to be able to have the pointer down on the trigger that opens the menu and
    // the pointer up on the menu item rather than requiring a separate press.
    // For keyboard events, selection still occurs on key down.
    let itemPressProps = {};
    if (shouldSelectOnPressUp) {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            if (e.pointerType === "keyboard" && (!hasAction || $880e95eb8b93ba9a$var$isSelectionKey())) onSelect(e);
        };
        // If allowsDifferentPressOrigin, make selection happen on pressUp (e.g. open menu on press down, selection on menu item happens on press up.)
        // Otherwise, have selection happen onPress (prevents listview row selection when clicking on interactable elements in the row)
        if (!allowsDifferentPressOrigin) itemPressProps.onPress = (e)=>{
            if (hasPrimaryAction || hasSecondaryAction && e.pointerType !== "mouse") {
                if (e.pointerType === "keyboard" && !$880e95eb8b93ba9a$var$isActionKey()) return;
                onAction();
            } else if (e.pointerType !== "keyboard") onSelect(e);
        };
        else {
            itemPressProps.onPressUp = (e)=>{
                if (e.pointerType !== "keyboard") onSelect(e);
            };
            itemPressProps.onPress = hasPrimaryAction ? ()=>onAction() : null;
        }
    } else {
        itemPressProps.onPressStart = (e)=>{
            modality.current = e.pointerType;
            longPressEnabledOnPressStart.current = longPressEnabled;
            hadPrimaryActionOnPressStart.current = hasPrimaryAction;
            // Select on mouse down unless there is a primary action which will occur on mouse up.
            // For keyboard, select on key down. If there is an action, the Space key selects on key down,
            // and the Enter key performs onAction on key up.
            if (e.pointerType === "mouse" && !hasPrimaryAction || e.pointerType === "keyboard" && (!onAction || $880e95eb8b93ba9a$var$isSelectionKey())) onSelect(e);
        };
        itemPressProps.onPress = (e)=>{
            // Selection occurs on touch up. Primary actions always occur on pointer up.
            // Both primary and secondary actions occur on Enter key up. The only exception
            // is secondary actions, which occur on double click with a mouse.
            if (e.pointerType === "touch" || e.pointerType === "pen" || e.pointerType === "virtual" || e.pointerType === "keyboard" && hasAction && $880e95eb8b93ba9a$var$isActionKey() || e.pointerType === "mouse" && hadPrimaryActionOnPressStart.current) {
                if (hasAction) onAction();
                else onSelect(e);
            }
        };
    }
    itemProps["data-key"] = key;
    itemPressProps.preventFocusOnPress = shouldUseVirtualFocus;
    let { pressProps: pressProps , isPressed: isPressed  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.usePress)(itemPressProps);
    // Double clicking with a mouse with selectionBehavior = 'replace' performs an action.
    let onDoubleClick = hasSecondaryAction ? (e)=>{
        if (modality.current === "mouse") {
            e.stopPropagation();
            e.preventDefault();
            onAction();
        }
    } : undefined;
    // Long pressing an item with touch when selectionBehavior = 'replace' switches the selection behavior
    // to 'toggle'. This changes the single tap behavior from performing an action (i.e. navigating) to
    // selecting, and may toggle the appearance of a UI affordance like checkboxes on each item.
    let { longPressProps: longPressProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_4__.useLongPress)({
        isDisabled: !longPressEnabled,
        onLongPress (e) {
            if (e.pointerType === "touch") {
                onSelect(e);
                manager.setSelectionBehavior("toggle");
            }
        }
    });
    // Prevent native drag and drop on long press if we also select on long press.
    // Once the user is in selection mode, they can long press again to drag.
    // Use a capturing listener to ensure this runs before useDrag, regardless of
    // the order the props get merged.
    let onDragStartCapture = (e)=>{
        if (modality.current === "touch" && longPressEnabledOnPressStart.current) e.preventDefault();
    };
    return {
        itemProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.mergeProps)(itemProps, allowsSelection || hasPrimaryAction ? pressProps : {}, longPressEnabled ? longPressProps : {}, {
            onDoubleClick: onDoubleClick,
            onDragStartCapture: onDragStartCapture
        }),
        isPressed: isPressed,
        isSelected: manager.isSelected(key),
        isFocused: manager.isFocused && manager.focusedKey === key,
        isDisabled: isDisabled,
        allowsSelection: allowsSelection,
        hasAction: hasAction
    };
}
function $880e95eb8b93ba9a$var$isActionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === "Enter";
}
function $880e95eb8b93ba9a$var$isSelectionKey() {
    let event = window.event;
    return (event === null || event === void 0 ? void 0 : event.key) === " " || (event === null || event === void 0 ? void 0 : event.code) === "Space";
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
class $2a25aae57d74318e$export$a05409b8bb224a5a {
    getNextKey(key) {
        key = this.collection.getKeyAfter(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === "item" && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
        return null;
    }
    getPreviousKey(key) {
        key = this.collection.getKeyBefore(key);
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === "item" && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
        return null;
    }
    findKey(key, nextKey, shouldSkip) {
        let item = this.getItem(key);
        if (!item) return null;
        // Find the item above or below in the same column.
        let prevRect = item.getBoundingClientRect();
        do {
            key = nextKey(key);
            item = this.getItem(key);
        }while (item && shouldSkip(prevRect, item.getBoundingClientRect()));
        return key;
    }
    isSameRow(prevRect, itemRect) {
        return prevRect.top === itemRect.top || prevRect.left !== itemRect.left;
    }
    isSameColumn(prevRect, itemRect) {
        return prevRect.left === itemRect.left || prevRect.top !== itemRect.top;
    }
    getKeyBelow(key) {
        if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key)=>this.getNextKey(key), this.isSameRow);
        else return this.getNextKey(key);
    }
    getKeyAbove(key) {
        if (this.layout === "grid" && this.orientation === "vertical") return this.findKey(key, (key)=>this.getPreviousKey(key), this.isSameRow);
        else return this.getPreviousKey(key);
    }
    getNextColumn(key, right) {
        return right ? this.getPreviousKey(key) : this.getNextKey(key);
    }
    getKeyRightOf(key) {
        if (this.layout === "grid") {
            if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "rtl");
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === "rtl"), this.isSameColumn);
        } else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "rtl");
        return null;
    }
    getKeyLeftOf(key) {
        if (this.layout === "grid") {
            if (this.orientation === "vertical") return this.getNextColumn(key, this.direction === "ltr");
            else return this.findKey(key, (key)=>this.getNextColumn(key, this.direction === "ltr"), this.isSameColumn);
        } else if (this.orientation === "horizontal") return this.getNextColumn(key, this.direction === "ltr");
        return null;
    }
    getFirstKey() {
        let key = this.collection.getFirstKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === "item" && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyAfter(key);
        }
        return null;
    }
    getLastKey() {
        let key = this.collection.getLastKey();
        while(key != null){
            let item = this.collection.getItem(key);
            if (item.type === "item" && !this.disabledKeys.has(key)) return key;
            key = this.collection.getKeyBefore(key);
        }
        return null;
    }
    getItem(key) {
        return this.ref.current.querySelector(`[data-key="${key}"]`);
    }
    getKeyPageAbove(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        if (!(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isScrollable)(menu)) return this.getFirstKey();
        let containerRect = menu.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        if (this.orientation === "horizontal") {
            let containerX = containerRect.x - menu.scrollLeft;
            let pageX = Math.max(0, itemRect.x - containerX + itemRect.width - containerRect.width);
            while(item && itemRect.x - containerX > pageX){
                key = this.getKeyAbove(key);
                item = key == null ? null : this.getItem(key);
                itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
            }
        } else {
            let containerY = containerRect.y - menu.scrollTop;
            let pageY = Math.max(0, itemRect.y - containerY + itemRect.height - containerRect.height);
            while(item && itemRect.y - containerY > pageY){
                key = this.getKeyAbove(key);
                item = key == null ? null : this.getItem(key);
                itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
            }
        }
        return key !== null && key !== void 0 ? key : this.getFirstKey();
    }
    getKeyPageBelow(key) {
        let menu = this.ref.current;
        let item = this.getItem(key);
        if (!item) return null;
        if (!(0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_1__.isScrollable)(menu)) return this.getLastKey();
        let containerRect = menu.getBoundingClientRect();
        let itemRect = item.getBoundingClientRect();
        if (this.orientation === "horizontal") {
            let containerX = containerRect.x - menu.scrollLeft;
            let pageX = Math.min(menu.scrollWidth, itemRect.x - containerX - itemRect.width + containerRect.width);
            while(item && itemRect.x - containerX < pageX){
                key = this.getKeyBelow(key);
                item = key == null ? null : this.getItem(key);
                itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
            }
        } else {
            let containerY = containerRect.y - menu.scrollTop;
            let pageY = Math.min(menu.scrollHeight, itemRect.y - containerY - itemRect.height + containerRect.height);
            while(item && itemRect.y - containerY < pageY){
                key = this.getKeyBelow(key);
                item = key == null ? null : this.getItem(key);
                itemRect = item === null || item === void 0 ? void 0 : item.getBoundingClientRect();
            }
        }
        return key !== null && key !== void 0 ? key : this.getLastKey();
    }
    getKeyForSearch(search, fromKey) {
        if (!this.collator) return null;
        let collection = this.collection;
        let key = fromKey || this.getFirstKey();
        while(key != null){
            let item = collection.getItem(key);
            let substring = item.textValue.slice(0, search.length);
            if (item.textValue && this.collator.compare(substring, search) === 0) return key;
            key = this.getKeyBelow(key);
        }
        return null;
    }
    constructor(...args){
        if (args.length === 1) {
            let opts = args[0];
            this.collection = opts.collection;
            this.ref = opts.ref;
            this.disabledKeys = opts.disabledKeys || new Set();
            this.orientation = opts.orientation;
            this.direction = opts.direction;
            this.layout = opts.layout || "stack";
        } else {
            this.collection = args[0];
            this.disabledKeys = args[1];
            this.ref = args[2];
            this.collator = args[3];
            this.layout = "stack";
            this.orientation = "vertical";
        }
        // If this is a vertical stack, remove the left/right methods completely
        // so they aren't called by useDroppableCollection.
        if (this.layout === "stack" && this.orientation === "vertical") {
            this.getKeyLeftOf = undefined;
            this.getKeyRightOf = undefined;
        }
    }
}




function $982254629710d113$export$b95089534ab7c1fd(props) {
    let { selectionManager: selectionManager , collection: collection , disabledKeys: disabledKeys , ref: ref , keyboardDelegate: keyboardDelegate , autoFocus: autoFocus , shouldFocusWrap: shouldFocusWrap , isVirtualized: isVirtualized , disallowEmptySelection: disallowEmptySelection , selectOnFocus: selectOnFocus = selectionManager.selectionBehavior === "replace" , disallowTypeAhead: disallowTypeAhead , shouldUseVirtualFocus: shouldUseVirtualFocus , allowsTabNavigation: allowsTabNavigation  } = props;
    // By default, a KeyboardDelegate is provided which uses the DOM to query layout information (e.g. for page up/page down).
    // When virtualized, the layout object will be passed in as a prop and override this.
    let collator = (0, _react_aria_i18n__WEBPACK_IMPORTED_MODULE_2__.useCollator)({
        usage: "search",
        sensitivity: "base"
    });
    let disabledBehavior = selectionManager.disabledBehavior;
    let delegate = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>keyboardDelegate || new (0, $2a25aae57d74318e$export$a05409b8bb224a5a)(collection, disabledBehavior === "selection" ? new Set() : disabledKeys, ref, collator), [
        keyboardDelegate,
        collection,
        disabledKeys,
        ref,
        collator,
        disabledBehavior
    ]);
    let { collectionProps: collectionProps  } = (0, $ae20dd8cbca75726$export$d6daf82dcd84e87c)({
        ref: ref,
        selectionManager: selectionManager,
        keyboardDelegate: delegate,
        autoFocus: autoFocus,
        shouldFocusWrap: shouldFocusWrap,
        disallowEmptySelection: disallowEmptySelection,
        selectOnFocus: selectOnFocus,
        disallowTypeAhead: disallowTypeAhead,
        shouldUseVirtualFocus: shouldUseVirtualFocus,
        allowsTabNavigation: allowsTabNavigation,
        isVirtualized: isVirtualized,
        scrollRef: ref
    });
    return {
        listProps: collectionProps
    };
}







//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/ssr/dist/import.mjs":
/*!******************************************************!*\
  !*** ./node_modules/@react-aria/ssr/dist/import.mjs ***!
  \******************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SSRProvider": () => (/* binding */ $b5e257d569688ac6$export$9f8ac96af4b1b2ae),
/* harmony export */   "useIsSSR": () => (/* binding */ $b5e257d569688ac6$export$535bd6ca7f90a273),
/* harmony export */   "useSSRSafeId": () => (/* binding */ $b5e257d569688ac6$export$619500959fc48b26)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We must avoid a circular dependency with @react-aria/utils, and this useLayoutEffect is
// guarded by a check that it only runs on the client side.
// eslint-disable-next-line rulesdir/useLayoutEffectRule

// Default context value to use in case there is no SSRProvider. This is fine for
// client-only apps. In order to support multiple copies of React Aria potentially
// being on the page at once, the prefix is set to a random number. SSRProvider
// will reset this to zero for consistency between server and client, so in the
// SSR case multiple copies of React Aria is not supported.
const $b5e257d569688ac6$var$defaultContext = {
    prefix: String(Math.round(Math.random() * 10000000000)),
    current: 0,
    isSSR: false
};
const $b5e257d569688ac6$var$SSRContext = /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createContext($b5e257d569688ac6$var$defaultContext);
// This is only used in React < 18.
function $b5e257d569688ac6$var$LegacySSRProvider(props) {
    let cur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    let counter = $b5e257d569688ac6$var$useCounter(cur === $b5e257d569688ac6$var$defaultContext);
    let [isSSR, setIsSSR] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(true);
    let value = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            // If this is the first SSRProvider, start with an empty string prefix, otherwise
            // append and increment the counter.
            prefix: cur === $b5e257d569688ac6$var$defaultContext ? "" : `${cur.prefix}-${counter}`,
            current: 0,
            isSSR: isSSR
        }), [
        cur,
        counter,
        isSSR
    ]);
    // If on the client, and the component was initially server rendered,
    // then schedule a layout effect to update the component after hydration.
    if (typeof document !== "undefined") // This if statement technically breaks the rules of hooks, but is safe
    // because the condition never changes after mounting.
    // eslint-disable-next-line react-hooks/rules-of-hooks
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useLayoutEffect)(()=>{
        setIsSSR(false);
    }, []);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($b5e257d569688ac6$var$SSRContext.Provider, {
        value: value
    }, props.children);
}
let $b5e257d569688ac6$var$warnedAboutSSRProvider = false;
function $b5e257d569688ac6$export$9f8ac96af4b1b2ae(props) {
    if (typeof (0, react__WEBPACK_IMPORTED_MODULE_0__["default"])["useId"] === "function") {
        if ( true && !$b5e257d569688ac6$var$warnedAboutSSRProvider) {
            console.warn("In React 18, SSRProvider is not necessary and is a noop. You can remove it from your app.");
            $b5e257d569688ac6$var$warnedAboutSSRProvider = true;
        }
        return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement((0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).Fragment, null, props.children);
    }
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement($b5e257d569688ac6$var$LegacySSRProvider, props);
}
let $b5e257d569688ac6$var$canUseDOM = Boolean(typeof window !== "undefined" && window.document && window.document.createElement);
let $b5e257d569688ac6$var$componentIds = new WeakMap();
function $b5e257d569688ac6$var$useCounter(isDisabled = false) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    let ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // eslint-disable-next-line rulesdir/pure-render
    if (ref.current === null && !isDisabled) {
        var _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner;
        // In strict mode, React renders components twice, and the ref will be reset to null on the second render.
        // This means our id counter will be incremented twice instead of once. This is a problem because on the
        // server, components are only rendered once and so ids generated on the server won't match the client.
        // In React 18, useId was introduced to solve this, but it is not available in older versions. So to solve this
        // we need to use some React internals to access the underlying Fiber instance, which is stable between renders.
        // This is exposed as ReactCurrentOwner in development, which is all we need since StrictMode only runs in development.
        // To ensure that we only increment the global counter once, we store the starting id for this component in
        // a weak map associated with the Fiber. On the second render, we reset the global counter to this value.
        // Since React runs the second render immediately after the first, this is safe.
        // @ts-ignore
        let currentOwner = (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED === void 0 ? void 0 : (_React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner = _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner) === null || _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner === void 0 ? void 0 : _React___SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED_ReactCurrentOwner.current;
        if (currentOwner) {
            let prevComponentValue = $b5e257d569688ac6$var$componentIds.get(currentOwner);
            if (prevComponentValue == null) // On the first render, and first call to useId, store the id and state in our weak map.
            $b5e257d569688ac6$var$componentIds.set(currentOwner, {
                id: ctx.current,
                state: currentOwner.memoizedState
            });
            else if (currentOwner.memoizedState !== prevComponentValue.state) {
                // On the second render, the memoizedState gets reset by React.
                // Reset the counter, and remove from the weak map so we don't
                // do this for subsequent useId calls.
                ctx.current = prevComponentValue.id;
                $b5e257d569688ac6$var$componentIds.delete(currentOwner);
            }
        }
        // eslint-disable-next-line rulesdir/pure-render
        ref.current = ++ctx.current;
    }
    // eslint-disable-next-line rulesdir/pure-render
    return ref.current;
}
function $b5e257d569688ac6$var$useLegacySSRSafeId(defaultId) {
    let ctx = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    // If we are rendering in a non-DOM environment, and there's no SSRProvider,
    // provide a warning to hint to the developer to add one.
    if (ctx === $b5e257d569688ac6$var$defaultContext && !$b5e257d569688ac6$var$canUseDOM) console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server.");
    let counter = $b5e257d569688ac6$var$useCounter(!!defaultId);
    let prefix = ctx === $b5e257d569688ac6$var$defaultContext && "development" === "test" ? 0 : `react-aria${ctx.prefix}`;
    return defaultId || `${prefix}-${counter}`;
}
function $b5e257d569688ac6$var$useModernSSRSafeId(defaultId) {
    // @ts-ignore
    let id = (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).useId();
    let [didSSR] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)($b5e257d569688ac6$export$535bd6ca7f90a273());
    let prefix = didSSR || "development" === "test" ? "react-aria" : `react-aria${$b5e257d569688ac6$var$defaultContext.prefix}`;
    return defaultId || `${prefix}-${id}`;
}
const $b5e257d569688ac6$export$619500959fc48b26 = typeof (0, react__WEBPACK_IMPORTED_MODULE_0__["default"])["useId"] === "function" ? $b5e257d569688ac6$var$useModernSSRSafeId : $b5e257d569688ac6$var$useLegacySSRSafeId;
function $b5e257d569688ac6$var$getSnapshot() {
    return false;
}
function $b5e257d569688ac6$var$getServerSnapshot() {
    return true;
}
// eslint-disable-next-line @typescript-eslint/no-unused-vars
function $b5e257d569688ac6$var$subscribe(onStoreChange) {
    // noop
    return ()=>{};
}
function $b5e257d569688ac6$export$535bd6ca7f90a273() {
    // In React 18, we can use useSyncExternalStore to detect if we're server rendering or hydrating.
    if (typeof (0, react__WEBPACK_IMPORTED_MODULE_0__["default"])["useSyncExternalStore"] === "function") return (0, react__WEBPACK_IMPORTED_MODULE_0__["default"])["useSyncExternalStore"]($b5e257d569688ac6$var$subscribe, $b5e257d569688ac6$var$getSnapshot, $b5e257d569688ac6$var$getServerSnapshot);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    let cur = (0, react__WEBPACK_IMPORTED_MODULE_0__.useContext)($b5e257d569688ac6$var$SSRContext);
    return cur.isSSR;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/textfield/dist/import.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@react-aria/textfield/dist/import.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useFormattedTextField": () => (/* binding */ $d841c8010a73d545$export$4f384c9210e583c3),
/* harmony export */   "useTextField": () => (/* binding */ $2d73ec29415bd339$export$712718f7aec83d5)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var _react_aria_label__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/label */ "./node_modules/@react-aria/label/dist/import.mjs");
/* harmony import */ var _react_aria_focus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/focus */ "./node_modules/@react-aria/focus/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $2d73ec29415bd339$export$712718f7aec83d5(props, ref) {
    let { inputElementType: inputElementType = "input" , isDisabled: isDisabled = false , isRequired: isRequired = false , isReadOnly: isReadOnly = false , validationState: validationState , type: type = "text" , value: value , defaultValue: defaultValue , onChange: onChange = ()=>{}  } = props;
    let { focusableProps: focusableProps  } = (0, _react_aria_focus__WEBPACK_IMPORTED_MODULE_1__.useFocusable)(props, ref);
    let { labelProps: labelProps , fieldProps: fieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = (0, _react_aria_label__WEBPACK_IMPORTED_MODULE_2__.useField)(props);
    let domProps = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.filterDOMProps)(props, {
        labelable: true
    });
    const inputOnlyProps = {
        type: type,
        pattern: props.pattern
    };
    var _ref;
    (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useFormReset)(ref, (_ref = value !== null && value !== void 0 ? value : defaultValue) !== null && _ref !== void 0 ? _ref : "", onChange);
    return {
        labelProps: labelProps,
        inputProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)(domProps, inputElementType === "input" && inputOnlyProps, {
            disabled: isDisabled,
            readOnly: isReadOnly,
            "aria-required": isRequired || undefined,
            "aria-invalid": validationState === "invalid" || undefined,
            "aria-errormessage": props["aria-errormessage"],
            "aria-activedescendant": props["aria-activedescendant"],
            "aria-autocomplete": props["aria-autocomplete"],
            "aria-haspopup": props["aria-haspopup"],
            value: props.value,
            defaultValue: props.value ? undefined : props.defaultValue,
            onChange: (e)=>onChange(e.target.value),
            autoComplete: props.autoComplete,
            maxLength: props.maxLength,
            minLength: props.minLength,
            name: props.name,
            placeholder: props.placeholder,
            inputMode: props.inputMode,
            // Clipboard events
            onCopy: props.onCopy,
            onCut: props.onCut,
            onPaste: props.onPaste,
            // Composition events
            onCompositionEnd: props.onCompositionEnd,
            onCompositionStart: props.onCompositionStart,
            onCompositionUpdate: props.onCompositionUpdate,
            // Selection events
            onSelect: props.onSelect,
            // Input events
            onBeforeInput: props.onBeforeInput,
            onInput: props.onInput,
            ...focusableProps,
            ...fieldProps
        }),
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $d841c8010a73d545$var$supportsNativeBeforeInputEvent() {
    return typeof window !== "undefined" && window.InputEvent && // @ts-ignore
    typeof InputEvent.prototype.getTargetRanges === "function";
}
function $d841c8010a73d545$export$4f384c9210e583c3(props, state, inputRef) {
    // All browsers implement the 'beforeinput' event natively except Firefox
    // (currently behind a flag as of Firefox 84). React's polyfill does not
    // run in all cases that the native event fires, e.g. when deleting text.
    // Use the native event if available so that we can prevent invalid deletions.
    // We do not attempt to polyfill this in Firefox since it would be very complicated,
    // the benefit of doing so is fairly minor, and it's going to be natively supported soon.
    let onBeforeInputFallback = (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.useEffectEvent)((e)=>{
        let input = inputRef.current;
        // Compute the next value of the input if the event is allowed to proceed.
        // See https://www.w3.org/TR/input-events-2/#interface-InputEvent-Attributes for a full list of input types.
        let nextValue;
        switch(e.inputType){
            case "historyUndo":
            case "historyRedo":
                // Explicitly allow undo/redo. e.data is null in this case, but there's no need to validate,
                // because presumably the input would have already been validated previously.
                return;
            case "deleteContent":
            case "deleteByCut":
            case "deleteByDrag":
                nextValue = input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteContentForward":
                // This is potentially incorrect, since the browser may actually delete more than a single UTF-16
                // character. In reality, a full Unicode grapheme cluster consisting of multiple UTF-16 characters
                // or code points may be deleted. However, in our currently supported locales, there are no such cases.
                // If we support additional locales in the future, this may need to change.
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd + 1) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteContentBackward":
                nextValue = input.selectionEnd === input.selectionStart ? input.value.slice(0, input.selectionStart - 1) + input.value.slice(input.selectionStart) : input.value.slice(0, input.selectionStart) + input.value.slice(input.selectionEnd);
                break;
            case "deleteSoftLineBackward":
            case "deleteHardLineBackward":
                nextValue = input.value.slice(input.selectionStart);
                break;
            default:
                if (e.data != null) nextValue = input.value.slice(0, input.selectionStart) + e.data + input.value.slice(input.selectionEnd);
                break;
        }
        // If we did not compute a value, or the new value is invalid, prevent the event
        // so that the browser does not update the input text, move the selection, or add to
        // the undo/redo stack.
        if (nextValue == null || !state.validate(nextValue)) e.preventDefault();
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (!$d841c8010a73d545$var$supportsNativeBeforeInputEvent()) return;
        let input = inputRef.current;
        input.addEventListener("beforeinput", onBeforeInputFallback, false);
        return ()=>{
            input.removeEventListener("beforeinput", onBeforeInputFallback, false);
        };
    }, [
        inputRef,
        onBeforeInputFallback
    ]);
    let onBeforeInput = !$d841c8010a73d545$var$supportsNativeBeforeInputEvent() ? (e)=>{
        let nextValue = e.target.value.slice(0, e.target.selectionStart) + e.data + e.target.value.slice(e.target.selectionEnd);
        if (!state.validate(nextValue)) e.preventDefault();
    } : null;
    let { labelProps: labelProps , inputProps: textFieldProps , descriptionProps: descriptionProps , errorMessageProps: errorMessageProps  } = (0, $2d73ec29415bd339$export$712718f7aec83d5)(props, inputRef);
    let compositionStartState = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    return {
        inputProps: (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_3__.mergeProps)(textFieldProps, {
            onBeforeInput: onBeforeInput,
            onCompositionStart () {
                // Chrome does not implement Input Events Level 2, which specifies the insertFromComposition
                // and deleteByComposition inputType values for the beforeinput event. These are meant to occur
                // at the end of a composition (e.g. Pinyin IME, Android auto correct, etc.), and crucially, are
                // cancelable. The insertCompositionText and deleteCompositionText input types are not cancelable,
                // nor would we want to cancel them because the input from the user is incomplete at that point.
                // In Safari, insertFromComposition/deleteFromComposition will fire, however, allowing us to cancel
                // the final composition result if it is invalid. As a fallback for Chrome and Firefox, which either
                // don't support Input Events Level 2, or beforeinput at all, we store the state of the input when
                // the compositionstart event fires, and undo the changes in compositionend (below) if it is invalid.
                // Unfortunately, this messes up the undo/redo stack, but until insertFromComposition/deleteByComposition
                // are implemented, there is no other way to prevent composed input.
                // See https://bugs.chromium.org/p/chromium/issues/detail?id=1022204
                let { value: value , selectionStart: selectionStart , selectionEnd: selectionEnd  } = inputRef.current;
                compositionStartState.current = {
                    value: value,
                    selectionStart: selectionStart,
                    selectionEnd: selectionEnd
                };
            },
            onCompositionEnd () {
                if (!state.validate(inputRef.current.value)) {
                    // Restore the input value in the DOM immediately so we can synchronously update the selection position.
                    // But also update the value in React state as well so it is correct for future updates.
                    let { value: value , selectionStart: selectionStart , selectionEnd: selectionEnd  } = compositionStartState.current;
                    inputRef.current.value = value;
                    inputRef.current.setSelectionRange(selectionStart, selectionEnd);
                    state.setInputValue(value);
                }
            }
        }),
        labelProps: labelProps,
        descriptionProps: descriptionProps,
        errorMessageProps: errorMessageProps
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/utils/dist/import.mjs":
/*!********************************************************!*\
  !*** ./node_modules/@react-aria/utils/dist/import.mjs ***!
  \********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "chain": () => (/* binding */ $ff5963eb1fccf552$export$e08e3b67e392101e),
/* harmony export */   "clamp": () => (/* reexport safe */ _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__.clamp),
/* harmony export */   "filterDOMProps": () => (/* binding */ $65484d02dcb7eb3e$export$457c3d6518dd4c6f),
/* harmony export */   "focusWithoutScrolling": () => (/* binding */ $7215afc6de606d6b$export$de79e2c695e052f3),
/* harmony export */   "getOffset": () => (/* binding */ $ab71dadb03a6fb2e$export$622cea445a1c5b7d),
/* harmony export */   "getScrollParent": () => (/* binding */ $62d8ded9296f3872$export$cfa2225e87938781),
/* harmony export */   "isAndroid": () => (/* binding */ $c87311424ea30a05$export$a11b0059900ceec8),
/* harmony export */   "isAppleDevice": () => (/* binding */ $c87311424ea30a05$export$e1865c3bedcd822b),
/* harmony export */   "isChrome": () => (/* binding */ $c87311424ea30a05$export$6446a186d09e379e),
/* harmony export */   "isIOS": () => (/* binding */ $c87311424ea30a05$export$fedb369cb70207f1),
/* harmony export */   "isIPad": () => (/* binding */ $c87311424ea30a05$export$7bef049ce92e4224),
/* harmony export */   "isIPhone": () => (/* binding */ $c87311424ea30a05$export$186c6964ca17d99),
/* harmony export */   "isMac": () => (/* binding */ $c87311424ea30a05$export$9ac100e40613ea10),
/* harmony export */   "isScrollable": () => (/* binding */ $62d8ded9296f3872$export$2bb74740c4e19def),
/* harmony export */   "isVirtualClick": () => (/* binding */ $6a7db85432448f7f$export$60278871457622de),
/* harmony export */   "isVirtualPointerEvent": () => (/* binding */ $6a7db85432448f7f$export$29bf1b5f2c56cf63),
/* harmony export */   "isWebKit": () => (/* binding */ $c87311424ea30a05$export$78551043582a6a98),
/* harmony export */   "mergeIds": () => (/* binding */ $bdb11010cef70236$export$cd8c9cb68f842629),
/* harmony export */   "mergeProps": () => (/* binding */ $3ef42575df84b30b$export$9d1611c77c2fe928),
/* harmony export */   "mergeRefs": () => (/* binding */ $5dc95899b306f630$export$c9058316764c140e),
/* harmony export */   "runAfterTransition": () => (/* binding */ $bbed8b41f857bcc0$export$24490316f764c430),
/* harmony export */   "scrollIntoView": () => (/* binding */ $2f04cbc44ee30ce0$export$53a0910f038337bd),
/* harmony export */   "scrollIntoViewport": () => (/* binding */ $2f04cbc44ee30ce0$export$c826860796309d1b),
/* harmony export */   "snapValueToStep": () => (/* reexport safe */ _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__.snapValueToStep),
/* harmony export */   "useDeepMemo": () => (/* binding */ $5a387cc49350e6db$export$722debc0e56fea39),
/* harmony export */   "useDescription": () => (/* binding */ $ef06256079686ba0$export$f8aeda7b10753fa1),
/* harmony export */   "useDrag1D": () => (/* binding */ $9cc09df9fd7676be$export$7bbed75feba39706),
/* harmony export */   "useEffectEvent": () => (/* binding */ $8ae05eaa5c114e9c$export$7f54fc3180508a52),
/* harmony export */   "useEvent": () => (/* binding */ $e9faafb641e167db$export$90fc3a17d93f704c),
/* harmony export */   "useFormReset": () => (/* binding */ $99facab73266f662$export$5add1d006293d136),
/* harmony export */   "useGlobalListeners": () => (/* binding */ $03deb23ff14920c4$export$4eaf04e54aa8eed6),
/* harmony export */   "useId": () => (/* binding */ $bdb11010cef70236$export$f680877a34711e37),
/* harmony export */   "useLabels": () => (/* binding */ $313b98861ee5dd6c$export$d6875122194c7b44),
/* harmony export */   "useLayoutEffect": () => (/* binding */ $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c),
/* harmony export */   "useObjectRef": () => (/* binding */ $df56164dff5785e2$export$4338b53315abf666),
/* harmony export */   "useResizeObserver": () => (/* binding */ $9daab02d461809db$export$683480f191c0e3ea),
/* harmony export */   "useSlotId": () => (/* binding */ $bdb11010cef70236$export$b4cc09c592e8fdb8),
/* harmony export */   "useSyncRef": () => (/* binding */ $e7801be82b4b2a53$export$4debdb1a3f0fa79e),
/* harmony export */   "useUpdateEffect": () => (/* binding */ $4f58c5f72bcf79f7$export$496315a1608d9602),
/* harmony export */   "useValueEffect": () => (/* binding */ $1dbecbe27a04f9af$export$14d238f342723f25),
/* harmony export */   "useViewportSize": () => (/* binding */ $5df64b3807dc15ee$export$d699905dd57c73ca)
/* harmony export */ });
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/ssr */ "./node_modules/@react-aria/ssr/dist/import.mjs");
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ "./node_modules/clsx/dist/clsx.m.js");





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
const $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c = typeof document !== "undefined" ? (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).useLayoutEffect : ()=>{};



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $1dbecbe27a04f9af$export$14d238f342723f25(defaultValue) {
    let [value, setValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultValue);
    let valueRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value);
    let effect = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    // Must be stable so that `queue` is stable.
    let nextIter = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        // Run the generator to the next yield.
        let newValue = effect.current.next();
        while(!newValue.done && valueRef.current === newValue.value)// If the value is the same as the current value,
        // then continue to the next yield. Otherwise,
        // set the value in state and wait for the next layout effect.
        newValue = effect.current.next();
        // If the generator is done, reset the effect.
        if (newValue.done) {
            effect.current = null;
            return;
        }
        // Always update valueRef when setting the state.
        // This is needed because the function is not regenerated with the new state value since
        // they must be stable across renders. Instead, it gets carried in the ref, but the setState
        // is also needed in order to cause a rerender.
        setValue(newValue.value);
        valueRef.current = newValue.value;
    // this list of dependencies is stable, setState and refs never change after first render.
    }, [
        setValue,
        valueRef,
        effect
    ]);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        // If there is an effect currently running, continue to the next yield.
        if (effect.current) nextIter();
    });
    // queue must be a stable function, much like setState.
    let queue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((fn)=>{
        effect.current = fn(valueRef.current);
        nextIter();
    // this list of dependencies is stable, setState and refs never change after first render.
    // in addition, nextIter is stable as outlined above
    }, [
        nextIter,
        effect,
        valueRef
    ]);
    return [
        value,
        queue
    ];
}


let $bdb11010cef70236$var$idsUpdaterMap = new Map();
function $bdb11010cef70236$export$f680877a34711e37(defaultId) {
    let [value, setValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(defaultId);
    let nextId = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let res = (0, _react_aria_ssr__WEBPACK_IMPORTED_MODULE_2__.useSSRSafeId)(value);
    let updateValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((val)=>{
        nextId.current = val;
    }, []);
    $bdb11010cef70236$var$idsUpdaterMap.set(res, updateValue);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        let r = res;
        return ()=>{
            $bdb11010cef70236$var$idsUpdaterMap.delete(r);
        };
    }, [
        res
    ]);
    // This cannot cause an infinite loop because the ref is updated first.
    // eslint-disable-next-line
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let newId = nextId.current;
        if (newId) {
            nextId.current = null;
            setValue(newId);
        }
    });
    return res;
}
function $bdb11010cef70236$export$cd8c9cb68f842629(idA, idB) {
    if (idA === idB) return idA;
    let setIdA = $bdb11010cef70236$var$idsUpdaterMap.get(idA);
    if (setIdA) {
        setIdA(idB);
        return idB;
    }
    let setIdB = $bdb11010cef70236$var$idsUpdaterMap.get(idB);
    if (setIdB) {
        setIdB(idA);
        return idA;
    }
    return idB;
}
function $bdb11010cef70236$export$b4cc09c592e8fdb8(depArray = []) {
    let id = $bdb11010cef70236$export$f680877a34711e37();
    let [resolvedId, setResolvedId] = (0, $1dbecbe27a04f9af$export$14d238f342723f25)(id);
    let updateId = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setResolvedId(function*() {
            yield id;
            yield document.getElementById(id) ? id : undefined;
        });
    }, [
        id,
        setResolvedId
    ]);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(updateId, [
        id,
        updateId,
        ...depArray
    ]);
    return resolvedId;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Calls all functions in the order they were chained with the same arguments.
 */ function $ff5963eb1fccf552$export$e08e3b67e392101e(...callbacks) {
    return (...args)=>{
        for (let callback of callbacks)if (typeof callback === "function") callback(...args);
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $3ef42575df84b30b$export$9d1611c77c2fe928(...args) {
    // Start with a base clone of the first argument. This is a lot faster than starting
    // with an empty object and adding properties as we go.
    let result = {
        ...args[0]
    };
    for(let i = 1; i < args.length; i++){
        let props = args[i];
        for(let key in props){
            let a = result[key];
            let b = props[key];
            // Chain events
            if (typeof a === "function" && typeof b === "function" && // This is a lot faster than a regex.
            key[0] === "o" && key[1] === "n" && key.charCodeAt(2) >= /* 'A' */ 65 && key.charCodeAt(2) <= /* 'Z' */ 90) result[key] = (0, $ff5963eb1fccf552$export$e08e3b67e392101e)(a, b);
            else if ((key === "className" || key === "UNSAFE_className") && typeof a === "string" && typeof b === "string") result[key] = (0, clsx__WEBPACK_IMPORTED_MODULE_1__["default"])(a, b);
            else if (key === "id" && a && b) result.id = (0, $bdb11010cef70236$export$cd8c9cb68f842629)(a, b);
            else result[key] = b !== undefined ? b : a;
        }
    }
    return result;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $5dc95899b306f630$export$c9058316764c140e(...refs) {
    if (refs.length === 1) return refs[0];
    return (value)=>{
        for (let ref of refs){
            if (typeof ref === "function") ref(value);
            else if (ref != null) ref.current = value;
        }
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ const $65484d02dcb7eb3e$var$DOMPropNames = new Set([
    "id"
]);
const $65484d02dcb7eb3e$var$labelablePropNames = new Set([
    "aria-label",
    "aria-labelledby",
    "aria-describedby",
    "aria-details"
]);
const $65484d02dcb7eb3e$var$propRe = /^(data-.*)$/;
function $65484d02dcb7eb3e$export$457c3d6518dd4c6f(props, opts = {}) {
    let { labelable: labelable , propNames: propNames  } = opts;
    let filteredProps = {};
    for(const prop in props)if (Object.prototype.hasOwnProperty.call(props, prop) && ($65484d02dcb7eb3e$var$DOMPropNames.has(prop) || labelable && $65484d02dcb7eb3e$var$labelablePropNames.has(prop) || (propNames === null || propNames === void 0 ? void 0 : propNames.has(prop)) || $65484d02dcb7eb3e$var$propRe.test(prop))) filteredProps[prop] = props[prop];
    return filteredProps;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $7215afc6de606d6b$export$de79e2c695e052f3(element) {
    if ($7215afc6de606d6b$var$supportsPreventScroll()) element.focus({
        preventScroll: true
    });
    else {
        let scrollableElements = $7215afc6de606d6b$var$getScrollableElements(element);
        element.focus();
        $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements);
    }
}
let $7215afc6de606d6b$var$supportsPreventScrollCached = null;
function $7215afc6de606d6b$var$supportsPreventScroll() {
    if ($7215afc6de606d6b$var$supportsPreventScrollCached == null) {
        $7215afc6de606d6b$var$supportsPreventScrollCached = false;
        try {
            var focusElem = document.createElement("div");
            focusElem.focus({
                get preventScroll () {
                    $7215afc6de606d6b$var$supportsPreventScrollCached = true;
                    return true;
                }
            });
        } catch (e) {
        // Ignore
        }
    }
    return $7215afc6de606d6b$var$supportsPreventScrollCached;
}
function $7215afc6de606d6b$var$getScrollableElements(element) {
    var parent = element.parentNode;
    var scrollableElements = [];
    var rootScrollingElement = document.scrollingElement || document.documentElement;
    while(parent instanceof HTMLElement && parent !== rootScrollingElement){
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) scrollableElements.push({
            element: parent,
            scrollTop: parent.scrollTop,
            scrollLeft: parent.scrollLeft
        });
        parent = parent.parentNode;
    }
    if (rootScrollingElement instanceof HTMLElement) scrollableElements.push({
        element: rootScrollingElement,
        scrollTop: rootScrollingElement.scrollTop,
        scrollLeft: rootScrollingElement.scrollLeft
    });
    return scrollableElements;
}
function $7215afc6de606d6b$var$restoreScrollPosition(scrollableElements) {
    for (let { element: element , scrollTop: scrollTop , scrollLeft: scrollLeft  } of scrollableElements){
        element.scrollTop = scrollTop;
        element.scrollLeft = scrollLeft;
    }
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $ab71dadb03a6fb2e$export$622cea445a1c5b7d(element, reverse, orientation = "horizontal") {
    let rect = element.getBoundingClientRect();
    if (reverse) return orientation === "horizontal" ? rect.right : rect.bottom;
    return orientation === "horizontal" ? rect.left : rect.top;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ // We store a global list of elements that are currently transitioning,
// mapped to a set of CSS properties that are transitioning for that element.
// This is necessary rather than a simple count of transitions because of browser
// bugs, e.g. Chrome sometimes fires both transitionend and transitioncancel rather
// than one or the other. So we need to track what's actually transitioning so that
// we can ignore these duplicate events.
let $bbed8b41f857bcc0$var$transitionsByElement = new Map();
// A list of callbacks to call once there are no transitioning elements.
let $bbed8b41f857bcc0$var$transitionCallbacks = new Set();
function $bbed8b41f857bcc0$var$setupGlobalEvents() {
    if (typeof window === "undefined") return;
    let onTransitionStart = (e)=>{
        // Add the transitioning property to the list for this element.
        let transitions = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!transitions) {
            transitions = new Set();
            $bbed8b41f857bcc0$var$transitionsByElement.set(e.target, transitions);
            // The transitioncancel event must be registered on the element itself, rather than as a global
            // event. This enables us to handle when the node is deleted from the document while it is transitioning.
            // In that case, the cancel event would have nowhere to bubble to so we need to handle it directly.
            e.target.addEventListener("transitioncancel", onTransitionEnd);
        }
        transitions.add(e.propertyName);
    };
    let onTransitionEnd = (e)=>{
        // Remove property from list of transitioning properties.
        let properties = $bbed8b41f857bcc0$var$transitionsByElement.get(e.target);
        if (!properties) return;
        properties.delete(e.propertyName);
        // If empty, remove transitioncancel event, and remove the element from the list of transitioning elements.
        if (properties.size === 0) {
            e.target.removeEventListener("transitioncancel", onTransitionEnd);
            $bbed8b41f857bcc0$var$transitionsByElement.delete(e.target);
        }
        // If no transitioning elements, call all of the queued callbacks.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) {
            for (let cb of $bbed8b41f857bcc0$var$transitionCallbacks)cb();
            $bbed8b41f857bcc0$var$transitionCallbacks.clear();
        }
    };
    document.body.addEventListener("transitionrun", onTransitionStart);
    document.body.addEventListener("transitionend", onTransitionEnd);
}
if (typeof document !== "undefined") {
    if (document.readyState !== "loading") $bbed8b41f857bcc0$var$setupGlobalEvents();
    else document.addEventListener("DOMContentLoaded", $bbed8b41f857bcc0$var$setupGlobalEvents);
}
function $bbed8b41f857bcc0$export$24490316f764c430(fn) {
    // Wait one frame to see if an animation starts, e.g. a transition on mount.
    requestAnimationFrame(()=>{
        // If no transitions are running, call the function immediately.
        // Otherwise, add it to a list of callbacks to run at the end of the animation.
        if ($bbed8b41f857bcc0$var$transitionsByElement.size === 0) fn();
        else $bbed8b41f857bcc0$var$transitionCallbacks.add(fn);
    });
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 

// Keep track of elements that we are currently handling dragging for via useDrag1D.
// If there's an ancestor and a descendant both using useDrag1D(), and the user starts
// dragging the descendant, we don't want useDrag1D events to fire for the ancestor.
const $9cc09df9fd7676be$var$draggingElements = [];
function $9cc09df9fd7676be$export$7bbed75feba39706(props) {
    console.warn("useDrag1D is deprecated, please use `useMove` instead https://react-spectrum.adobe.com/react-aria/useMove.html");
    let { containerRef: containerRef , reverse: reverse , orientation: orientation , onHover: onHover , onDrag: onDrag , onPositionChange: onPositionChange , onIncrement: onIncrement , onDecrement: onDecrement , onIncrementToMax: onIncrementToMax , onDecrementToMin: onDecrementToMin , onCollapseToggle: onCollapseToggle  } = props;
    let getPosition = (e)=>orientation === "horizontal" ? e.clientX : e.clientY;
    let getNextOffset = (e)=>{
        let containerOffset = (0, $ab71dadb03a6fb2e$export$622cea445a1c5b7d)(containerRef.current, reverse, orientation);
        let mouseOffset = getPosition(e);
        let nextOffset = reverse ? containerOffset - mouseOffset : mouseOffset - containerOffset;
        return nextOffset;
    };
    let dragging = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    let prevPosition = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(0);
    // Keep track of the current handlers in a ref so that the events can access them.
    let handlers = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)({
        onPositionChange: onPositionChange,
        onDrag: onDrag
    });
    handlers.current.onDrag = onDrag;
    handlers.current.onPositionChange = onPositionChange;
    let onMouseDragged = (e)=>{
        e.preventDefault();
        let nextOffset = getNextOffset(e);
        if (!dragging.current) {
            dragging.current = true;
            if (handlers.current.onDrag) handlers.current.onDrag(true);
            if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        }
        if (prevPosition.current === nextOffset) return;
        prevPosition.current = nextOffset;
        if (onPositionChange) onPositionChange(nextOffset);
    };
    let onMouseUp = (e)=>{
        const target = e.target;
        dragging.current = false;
        let nextOffset = getNextOffset(e);
        if (handlers.current.onDrag) handlers.current.onDrag(false);
        if (handlers.current.onPositionChange) handlers.current.onPositionChange(nextOffset);
        $9cc09df9fd7676be$var$draggingElements.splice($9cc09df9fd7676be$var$draggingElements.indexOf(target), 1);
        window.removeEventListener("mouseup", onMouseUp, false);
        window.removeEventListener("mousemove", onMouseDragged, false);
    };
    let onMouseDown = (e)=>{
        const target = e.currentTarget;
        // If we're already handling dragging on a descendant with useDrag1D, then
        // we don't want to handle the drag motion on this target as well.
        if ($9cc09df9fd7676be$var$draggingElements.some((elt)=>target.contains(elt))) return;
        $9cc09df9fd7676be$var$draggingElements.push(target);
        window.addEventListener("mousemove", onMouseDragged, false);
        window.addEventListener("mouseup", onMouseUp, false);
    };
    let onMouseEnter = ()=>{
        if (onHover) onHover(true);
    };
    let onMouseOut = ()=>{
        if (onHover) onHover(false);
    };
    let onKeyDown = (e)=>{
        switch(e.key){
            case "Left":
            case "ArrowLeft":
                if (orientation === "horizontal") {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case "Up":
            case "ArrowUp":
                if (orientation === "vertical") {
                    e.preventDefault();
                    if (onDecrement && !reverse) onDecrement();
                    else if (onIncrement && reverse) onIncrement();
                }
                break;
            case "Right":
            case "ArrowRight":
                if (orientation === "horizontal") {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case "Down":
            case "ArrowDown":
                if (orientation === "vertical") {
                    e.preventDefault();
                    if (onIncrement && !reverse) onIncrement();
                    else if (onDecrement && reverse) onDecrement();
                }
                break;
            case "Home":
                e.preventDefault();
                if (onDecrementToMin) onDecrementToMin();
                break;
            case "End":
                e.preventDefault();
                if (onIncrementToMax) onIncrementToMax();
                break;
            case "Enter":
                e.preventDefault();
                if (onCollapseToggle) onCollapseToggle();
                break;
        }
    };
    return {
        onMouseDown: onMouseDown,
        onMouseEnter: onMouseEnter,
        onMouseOut: onMouseOut,
        onKeyDown: onKeyDown
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $03deb23ff14920c4$export$4eaf04e54aa8eed6() {
    let globalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(new Map());
    let addGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        // Make sure we remove the listener after it is called with the `once` option.
        let fn = (options === null || options === void 0 ? void 0 : options.once) ? (...args)=>{
            globalListeners.current.delete(listener);
            listener(...args);
        } : listener;
        globalListeners.current.set(listener, {
            type: type,
            eventTarget: eventTarget,
            fn: fn,
            options: options
        });
        eventTarget.addEventListener(type, listener, options);
    }, []);
    let removeGlobalListener = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((eventTarget, type, listener, options)=>{
        var _globalListeners_current_get;
        let fn = ((_globalListeners_current_get = globalListeners.current.get(listener)) === null || _globalListeners_current_get === void 0 ? void 0 : _globalListeners_current_get.fn) || listener;
        eventTarget.removeEventListener(type, fn, options);
        globalListeners.current.delete(listener);
    }, []);
    let removeAllGlobalListeners = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        globalListeners.current.forEach((value, key)=>{
            removeGlobalListener(value.eventTarget, value.type, key, value.options);
        });
    }, [
        removeGlobalListener
    ]);
    // eslint-disable-next-line arrow-body-style
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        return removeAllGlobalListeners;
    }, [
        removeAllGlobalListeners
    ]);
    return {
        addGlobalListener: addGlobalListener,
        removeGlobalListener: removeGlobalListener,
        removeAllGlobalListeners: removeAllGlobalListeners
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $313b98861ee5dd6c$export$d6875122194c7b44(props, defaultLabel) {
    let { id: id , "aria-label": label , "aria-labelledby": labelledBy  } = props;
    // If there is both an aria-label and aria-labelledby,
    // combine them by pointing to the element itself.
    id = (0, $bdb11010cef70236$export$f680877a34711e37)(id);
    if (labelledBy && label) {
        let ids = new Set([
            id,
            ...labelledBy.trim().split(/\s+/)
        ]);
        labelledBy = [
            ...ids
        ].join(" ");
    } else if (labelledBy) labelledBy = labelledBy.trim().split(/\s+/).join(" ");
    // If no labels are provided, use the default
    if (!label && !labelledBy && defaultLabel) label = defaultLabel;
    return {
        id: id,
        "aria-label": label,
        "aria-labelledby": labelledBy
    };
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $df56164dff5785e2$export$4338b53315abf666(forwardedRef) {
    const objRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)();
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            get current () {
                return objRef.current;
            },
            set current (value){
                objRef.current = value;
                if (typeof forwardedRef === "function") forwardedRef(value);
                else if (forwardedRef) forwardedRef.current = value;
            }
        }), [
        forwardedRef
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $4f58c5f72bcf79f7$export$496315a1608d9602(effect, dependencies) {
    const isInitialMount = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    const lastDeps = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        isInitialMount.current = true;
        return ()=>{
            isInitialMount.current = false;
        };
    }, []);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isInitialMount.current) isInitialMount.current = false;
        else if (!lastDeps.current || dependencies.some((dep, i)=>!Object.is(dep, lastDeps[i]))) effect();
        lastDeps.current = dependencies;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, dependencies);
}




function $9daab02d461809db$var$hasResizeObserver() {
    return typeof window.ResizeObserver !== "undefined";
}
function $9daab02d461809db$export$683480f191c0e3ea(options) {
    const { ref: ref , onResize: onResize  } = options;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let element = ref === null || ref === void 0 ? void 0 : ref.current;
        if (!element) return;
        if (!$9daab02d461809db$var$hasResizeObserver()) {
            window.addEventListener("resize", onResize, false);
            return ()=>{
                window.removeEventListener("resize", onResize, false);
            };
        } else {
            const resizeObserverInstance = new window.ResizeObserver((entries)=>{
                if (!entries.length) return;
                onResize();
            });
            resizeObserverInstance.observe(element);
            return ()=>{
                if (element) resizeObserverInstance.unobserve(element);
            };
        }
    }, [
        onResize,
        ref
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $e7801be82b4b2a53$export$4debdb1a3f0fa79e(context, ref) {
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (context && context.ref && ref) {
            context.ref.current = ref.current;
            return ()=>{
                context.ref.current = null;
            };
        }
    }, [
        context,
        ref
    ]);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $62d8ded9296f3872$export$cfa2225e87938781(node) {
    if ($62d8ded9296f3872$export$2bb74740c4e19def(node)) node = node.parentElement;
    while(node && !$62d8ded9296f3872$export$2bb74740c4e19def(node))node = node.parentElement;
    return node || document.scrollingElement || document.documentElement;
}
function $62d8ded9296f3872$export$2bb74740c4e19def(node) {
    let style = window.getComputedStyle(node);
    return /(auto|scroll)/.test(style.overflow + style.overflowX + style.overflowY);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
// @ts-ignore
let $5df64b3807dc15ee$var$visualViewport = typeof document !== "undefined" && window.visualViewport;
function $5df64b3807dc15ee$export$d699905dd57c73ca() {
    let [size, setSize] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(()=>$5df64b3807dc15ee$var$getViewportSize());
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        // Use visualViewport api to track available height even on iOS virtual keyboard opening
        let onResize = ()=>{
            setSize((size)=>{
                let newSize = $5df64b3807dc15ee$var$getViewportSize();
                if (newSize.width === size.width && newSize.height === size.height) return size;
                return newSize;
            });
        };
        if (!$5df64b3807dc15ee$var$visualViewport) window.addEventListener("resize", onResize);
        else $5df64b3807dc15ee$var$visualViewport.addEventListener("resize", onResize);
        return ()=>{
            if (!$5df64b3807dc15ee$var$visualViewport) window.removeEventListener("resize", onResize);
            else $5df64b3807dc15ee$var$visualViewport.removeEventListener("resize", onResize);
        };
    }, []);
    return size;
}
function $5df64b3807dc15ee$var$getViewportSize() {
    return {
        width: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.width) || window.innerWidth,
        height: ($5df64b3807dc15ee$var$visualViewport === null || $5df64b3807dc15ee$var$visualViewport === void 0 ? void 0 : $5df64b3807dc15ee$var$visualViewport.height) || window.innerHeight
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

let $ef06256079686ba0$var$descriptionId = 0;
const $ef06256079686ba0$var$descriptionNodes = new Map();
function $ef06256079686ba0$export$f8aeda7b10753fa1(description) {
    let [id, setId] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(undefined);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        if (!description) return;
        let desc = $ef06256079686ba0$var$descriptionNodes.get(description);
        if (!desc) {
            let id = `react-aria-description-${$ef06256079686ba0$var$descriptionId++}`;
            setId(id);
            let node = document.createElement("div");
            node.id = id;
            node.style.display = "none";
            node.textContent = description;
            document.body.appendChild(node);
            desc = {
                refCount: 0,
                element: node
            };
            $ef06256079686ba0$var$descriptionNodes.set(description, desc);
        } else setId(desc.element.id);
        desc.refCount++;
        return ()=>{
            if (--desc.refCount === 0) {
                desc.element.remove();
                $ef06256079686ba0$var$descriptionNodes.delete(description);
            }
        };
    }, [
        description
    ]);
    return {
        "aria-describedby": description ? id : undefined
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c87311424ea30a05$var$testUserAgent(re) {
    var _window_navigator_userAgentData;
    if (typeof window === "undefined" || window.navigator == null) return false;
    return ((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.brands.some((brand)=>re.test(brand.brand))) || re.test(window.navigator.userAgent);
}
function $c87311424ea30a05$var$testPlatform(re) {
    var _window_navigator_userAgentData;
    return typeof window !== "undefined" && window.navigator != null ? re.test(((_window_navigator_userAgentData = window.navigator["userAgentData"]) === null || _window_navigator_userAgentData === void 0 ? void 0 : _window_navigator_userAgentData.platform) || window.navigator.platform) : false;
}
function $c87311424ea30a05$export$9ac100e40613ea10() {
    return $c87311424ea30a05$var$testPlatform(/^Mac/i);
}
function $c87311424ea30a05$export$186c6964ca17d99() {
    return $c87311424ea30a05$var$testPlatform(/^iPhone/i);
}
function $c87311424ea30a05$export$7bef049ce92e4224() {
    return $c87311424ea30a05$var$testPlatform(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
    $c87311424ea30a05$export$9ac100e40613ea10() && navigator.maxTouchPoints > 1;
}
function $c87311424ea30a05$export$fedb369cb70207f1() {
    return $c87311424ea30a05$export$186c6964ca17d99() || $c87311424ea30a05$export$7bef049ce92e4224();
}
function $c87311424ea30a05$export$e1865c3bedcd822b() {
    return $c87311424ea30a05$export$9ac100e40613ea10() || $c87311424ea30a05$export$fedb369cb70207f1();
}
function $c87311424ea30a05$export$78551043582a6a98() {
    return $c87311424ea30a05$var$testUserAgent(/AppleWebKit/i) && !$c87311424ea30a05$export$6446a186d09e379e();
}
function $c87311424ea30a05$export$6446a186d09e379e() {
    return $c87311424ea30a05$var$testUserAgent(/Chrome/i);
}
function $c87311424ea30a05$export$a11b0059900ceec8() {
    return $c87311424ea30a05$var$testUserAgent(/Android/i);
}


/*
 * Copyright 2021 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $8ae05eaa5c114e9c$export$7f54fc3180508a52(fn) {
    const ref = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, $f0a04ccd8dbdd83b$export$e5c5a5f917a5871c)(()=>{
        ref.current = fn;
    }, [
        fn
    ]);
    return (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((...args)=>{
        const f = ref.current;
        return f(...args);
    }, []);
}


function $e9faafb641e167db$export$90fc3a17d93f704c(ref, event, handler, options) {
    let handleEvent = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(handler);
    let isDisabled = handler == null;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (isDisabled) return;
        let element = ref.current;
        element.addEventListener(event, handleEvent, options);
        return ()=>{
            element.removeEventListener(event, handleEvent, options);
        };
    }, [
        ref,
        event,
        options,
        isDisabled,
        handleEvent
    ]);
}



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollView, element) {
    let offsetX = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "left");
    let offsetY = $2f04cbc44ee30ce0$var$relativeOffset(scrollView, element, "top");
    let width = element.offsetWidth;
    let height = element.offsetHeight;
    let x = scrollView.scrollLeft;
    let y = scrollView.scrollTop;
    // Account for top/left border offsetting the scroll top/Left
    let { borderTopWidth: borderTopWidth , borderLeftWidth: borderLeftWidth  } = getComputedStyle(scrollView);
    let borderAdjustedX = scrollView.scrollLeft + parseInt(borderLeftWidth, 10);
    let borderAdjustedY = scrollView.scrollTop + parseInt(borderTopWidth, 10);
    // Ignore end/bottom border via clientHeight/Width instead of offsetHeight/Width
    let maxX = borderAdjustedX + scrollView.clientWidth;
    let maxY = borderAdjustedY + scrollView.clientHeight;
    if (offsetX <= x) x = offsetX - parseInt(borderLeftWidth, 10);
    else if (offsetX + width > maxX) x += offsetX + width - maxX;
    if (offsetY <= borderAdjustedY) y = offsetY - parseInt(borderTopWidth, 10);
    else if (offsetY + height > maxY) y += offsetY + height - maxY;
    scrollView.scrollLeft = x;
    scrollView.scrollTop = y;
}
/**
 * Computes the offset left or top from child to ancestor by accumulating
 * offsetLeft or offsetTop through intervening offsetParents.
 */ function $2f04cbc44ee30ce0$var$relativeOffset(ancestor, child, axis) {
    const prop = axis === "left" ? "offsetLeft" : "offsetTop";
    let sum = 0;
    while(child.offsetParent){
        sum += child[prop];
        if (child.offsetParent === ancestor) break;
        else if (child.offsetParent.contains(ancestor)) {
            // If the ancestor is not `position:relative`, then we stop at
            // _its_ offset parent, and we subtract off _its_ offset, so that
            // we end up with the proper offset from child to ancestor.
            sum -= ancestor[prop];
            break;
        }
        child = child.offsetParent;
    }
    return sum;
}
function $2f04cbc44ee30ce0$export$c826860796309d1b(targetElement, opts) {
    if (document.contains(targetElement)) {
        let root = document.scrollingElement || document.documentElement;
        let isScrollPrevented = window.getComputedStyle(root).overflow === "hidden";
        // If scrolling is not currently prevented then we aren’t in a overlay nor is a overlay open, just use element.scrollIntoView to bring the element into view
        if (!isScrollPrevented) {
            var // use scrollIntoView({block: 'nearest'}) instead of .focus to check if the element is fully in view or not since .focus()
            // won't cause a scroll if the element is already focused and doesn't behave consistently when an element is partially out of view horizontally vs vertically
            _targetElement_scrollIntoView;
            let { left: originalLeft , top: originalTop  } = targetElement.getBoundingClientRect();
            targetElement === null || targetElement === void 0 ? void 0 : (_targetElement_scrollIntoView = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView === void 0 ? void 0 : _targetElement_scrollIntoView.call(targetElement, {
                block: "nearest"
            });
            let { left: newLeft , top: newTop  } = targetElement.getBoundingClientRect();
            // Account for sub pixel differences from rounding
            if (Math.abs(originalLeft - newLeft) > 1 || Math.abs(originalTop - newTop) > 1) {
                var _opts_containingElement, _opts_containingElement_scrollIntoView, _targetElement_scrollIntoView1;
                opts === null || opts === void 0 ? void 0 : (_opts_containingElement = opts.containingElement) === null || _opts_containingElement === void 0 ? void 0 : (_opts_containingElement_scrollIntoView = _opts_containingElement.scrollIntoView) === null || _opts_containingElement_scrollIntoView === void 0 ? void 0 : _opts_containingElement_scrollIntoView.call(_opts_containingElement, {
                    block: "center",
                    inline: "center"
                });
                (_targetElement_scrollIntoView1 = targetElement.scrollIntoView) === null || _targetElement_scrollIntoView1 === void 0 ? void 0 : _targetElement_scrollIntoView1.call(targetElement, {
                    block: "nearest"
                });
            }
        } else {
            let scrollParent = (0, $62d8ded9296f3872$export$cfa2225e87938781)(targetElement);
            // If scrolling is prevented, we don't want to scroll the body since it might move the overlay partially offscreen and the user can't scroll it back into view.
            while(targetElement && scrollParent && targetElement !== root && scrollParent !== root){
                $2f04cbc44ee30ce0$export$53a0910f038337bd(scrollParent, targetElement);
                targetElement = scrollParent;
                scrollParent = (0, $62d8ded9296f3872$export$cfa2225e87938781)(targetElement);
            }
        }
    }
}



/*
 * Copyright 2022 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $6a7db85432448f7f$export$60278871457622de(event) {
    // JAWS/NVDA with Firefox.
    if (event.mozInputSource === 0 && event.isTrusted) return true;
    // Android TalkBack's detail value varies depending on the event listener providing the event so we have specific logic here instead
    // If pointerType is defined, event is from a click listener. For events from mousedown listener, detail === 0 is a sufficient check
    // to detect TalkBack virtual clicks.
    if ((0, $c87311424ea30a05$export$a11b0059900ceec8)() && event.pointerType) return event.type === "click" && event.buttons === 1;
    return event.detail === 0 && !event.pointerType;
}
function $6a7db85432448f7f$export$29bf1b5f2c56cf63(event) {
    // If the pointer size is zero, then we assume it's from a screen reader.
    // Android TalkBack double tap will sometimes return a event with width and height of 1
    // and pointerType === 'mouse' so we need to check for a specific combination of event attributes.
    // Cannot use "event.pressure === 0" as the sole check due to Safari pointer events always returning pressure === 0
    // instead of .5, see https://bugs.webkit.org/show_bug.cgi?id=206216. event.pointerType === 'mouse' is to distingush
    // Talkback double tap from Windows Firefox touch screen press
    return event.width === 0 && event.height === 0 || event.width === 1 && event.height === 1 && event.pressure === 0 && event.detail === 0 && event.pointerType === "mouse";
}



/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /* eslint-disable rulesdir/pure-render */ 
function $5a387cc49350e6db$export$722debc0e56fea39(value, isEqual) {
    // Using a ref during render is ok here because it's only an optimization – both values are equivalent.
    // If a render is thrown away, it'll still work the same no matter if the next render is the same or not.
    let lastValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    if (value && lastValue.current && isEqual(value, lastValue.current)) value = lastValue.current;
    lastValue.current = value;
    return value;
}


/*
 * Copyright 2023 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $99facab73266f662$export$5add1d006293d136(ref, initialValue, onReset) {
    let resetValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(initialValue);
    let handleReset = (0, $8ae05eaa5c114e9c$export$7f54fc3180508a52)(()=>{
        if (onReset) onReset(resetValue.current);
    });
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var _ref_current;
        let form = ref === null || ref === void 0 ? void 0 : (_ref_current = ref.current) === null || _ref_current === void 0 ? void 0 : _ref_current.form;
        form === null || form === void 0 ? void 0 : form.addEventListener("reset", handleReset);
        return ()=>{
            form === null || form === void 0 ? void 0 : form.removeEventListener("reset", handleReset);
        };
    }, [
        ref,
        handleReset
    ]);
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-aria/visually-hidden/dist/import.mjs":
/*!******************************************************************!*\
  !*** ./node_modules/@react-aria/visually-hidden/dist/import.mjs ***!
  \******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VisuallyHidden": () => (/* binding */ $5c3e21d68f1c4674$export$439d29a4e110a164),
/* harmony export */   "useVisuallyHidden": () => (/* binding */ $5c3e21d68f1c4674$export$a966af930f325cab)
/* harmony export */ });
/* harmony import */ var _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-aria/utils */ "./node_modules/@react-aria/utils/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-aria/interactions */ "./node_modules/@react-aria/interactions/dist/import.mjs");




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


const $5c3e21d68f1c4674$var$styles = {
    border: 0,
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: 0,
    position: "absolute",
    width: "1px",
    whiteSpace: "nowrap"
};
function $5c3e21d68f1c4674$export$a966af930f325cab(props = {}) {
    let { style: style , isFocusable: isFocusable  } = props;
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let { focusWithinProps: focusWithinProps  } = (0, _react_aria_interactions__WEBPACK_IMPORTED_MODULE_1__.useFocusWithin)({
        isDisabled: !isFocusable,
        onFocusWithinChange: (val)=>setFocused(val)
    });
    // If focused, don't hide the element.
    let combinedStyles = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (isFocused) return style;
        else if (style) return {
            ...$5c3e21d68f1c4674$var$styles,
            ...style
        };
        else return $5c3e21d68f1c4674$var$styles;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [
        isFocused
    ]);
    return {
        visuallyHiddenProps: {
            ...focusWithinProps,
            style: combinedStyles
        }
    };
}
function $5c3e21d68f1c4674$export$439d29a4e110a164(props) {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let { children: children , elementType: Element = "div" , isFocusable: isFocusable , style: style , ...otherProps } = props;
    let { visuallyHiddenProps: visuallyHiddenProps  } = $5c3e21d68f1c4674$export$a966af930f325cab(props);
    return /*#__PURE__*/ (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).createElement(Element, (0, _react_aria_utils__WEBPACK_IMPORTED_MODULE_2__.mergeProps)(otherProps, visuallyHiddenProps), children);
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/collections/dist/import.mjs":
/*!*****************************************************************!*\
  !*** ./node_modules/@react-stately/collections/dist/import.mjs ***!
  \*****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CollectionBuilder": () => (/* binding */ $eb2240fc39a57fa5$export$bf788dd355e3a401),
/* harmony export */   "Item": () => (/* binding */ $c1d7fb2ec91bae71$export$6d08773d2e66f8f2),
/* harmony export */   "Section": () => (/* binding */ $9fc4852771d079eb$export$6e2c8f0811a474ce),
/* harmony export */   "compareNodeOrder": () => (/* binding */ $c5a24bc478652b5f$export$8c434b3a7a4dad6),
/* harmony export */   "getChildNodes": () => (/* binding */ $c5a24bc478652b5f$export$1005530eda016c13),
/* harmony export */   "getFirstItem": () => (/* binding */ $c5a24bc478652b5f$export$fbdeaa6a76694f71),
/* harmony export */   "getItemCount": () => (/* binding */ $453cc9f0df89c0a5$export$77d5aafae4e095b2),
/* harmony export */   "getLastItem": () => (/* binding */ $c5a24bc478652b5f$export$7475b2c64539e4cf),
/* harmony export */   "getNthItem": () => (/* binding */ $c5a24bc478652b5f$export$5f3398f8733f90e2),
/* harmony export */   "useCollection": () => (/* binding */ $7613b1592d41b092$export$6cd28814d92fa9c9)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $c1d7fb2ec91bae71$var$Item(props) {
    return null;
}
$c1d7fb2ec91bae71$var$Item.getCollectionNode = function* getCollectionNode(props, context) {
    let { childItems: childItems , title: title , children: children  } = props;
    let rendered = props.title || props.children;
    let textValue = props.textValue || (typeof rendered === "string" ? rendered : "") || props["aria-label"] || "";
    // suppressTextValueWarning is used in components like Tabs, which don't have type to select support.
    if (!textValue && !(context === null || context === void 0 ? void 0 : context.suppressTextValueWarning)) console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop.");
    yield {
        type: "item",
        props: props,
        rendered: rendered,
        textValue: textValue,
        "aria-label": props["aria-label"],
        hasChildNodes: $c1d7fb2ec91bae71$var$hasChildItems(props),
        *childNodes () {
            if (childItems) for (let child of childItems)yield {
                type: "item",
                value: child
            };
            else if (title) {
                let items = [];
                (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).Children.forEach(children, (child)=>{
                    items.push({
                        type: "item",
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
function $c1d7fb2ec91bae71$var$hasChildItems(props) {
    if (props.hasChildItems != null) return props.hasChildItems;
    if (props.childItems) return true;
    if (props.title && (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).Children.count(props.children) > 0) return true;
    return false;
}
// We don't want getCollectionNode to show up in the type definition
let $c1d7fb2ec91bae71$export$6d08773d2e66f8f2 = $c1d7fb2ec91bae71$var$Item;


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $9fc4852771d079eb$var$Section(props) {
    return null;
}
$9fc4852771d079eb$var$Section.getCollectionNode = function* getCollectionNode(props) {
    let { children: children , title: title , items: items  } = props;
    yield {
        type: "section",
        props: props,
        hasChildNodes: true,
        rendered: title,
        "aria-label": props["aria-label"],
        *childNodes () {
            if (typeof children === "function") {
                if (!items) throw new Error("props.children was a function but props.items is missing");
                for (let item of items)yield {
                    type: "item",
                    value: item,
                    renderer: children
                };
            } else {
                let items = [];
                (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).Children.forEach(children, (child)=>{
                    items.push({
                        type: "item",
                        element: child
                    });
                });
                yield* items;
            }
        }
    };
};
// We don't want getCollectionNode to show up in the type definition
let $9fc4852771d079eb$export$6e2c8f0811a474ce = $9fc4852771d079eb$var$Section;


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
class $eb2240fc39a57fa5$export$bf788dd355e3a401 {
    build(props, context) {
        this.context = context;
        return $eb2240fc39a57fa5$var$iterable(()=>this.iterateCollection(props));
    }
    *iterateCollection(props) {
        let { children: children , items: items  } = props;
        if (typeof children === "function") {
            if (!items) throw new Error("props.children was a function but props.items is missing");
            for (let item of props.items)yield* this.getFullNode({
                value: item
            }, {
                renderer: children
            });
        } else {
            let items = [];
            (0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).Children.forEach(children, (child)=>{
                items.push(child);
            });
            let index = 0;
            for (let item of items){
                let nodes = this.getFullNode({
                    element: item,
                    index: index
                }, {});
                for (let node of nodes){
                    index++;
                    yield node;
                }
            }
        }
    }
    getKey(item, partialNode, state, parentKey) {
        if (item.key != null) return item.key;
        if (partialNode.type === "cell" && partialNode.key != null) return `${parentKey}${partialNode.key}`;
        let v = partialNode.value;
        if (v != null) {
            var _v_key;
            let key = (_v_key = v.key) !== null && _v_key !== void 0 ? _v_key : v.id;
            if (key == null) throw new Error("No key found for item");
            return key;
        }
        return parentKey ? `${parentKey}.${partialNode.index}` : `$.${partialNode.index}`;
    }
    getChildState(state, partialNode) {
        return {
            renderer: partialNode.renderer || state.renderer
        };
    }
    *getFullNode(partialNode, state, parentKey, parentNode) {
        // If there's a value instead of an element on the node, and a parent renderer function is available,
        // use it to render an element for the value.
        let element = partialNode.element;
        if (!element && partialNode.value && state && state.renderer) {
            let cached = this.cache.get(partialNode.value);
            if (cached && (!cached.shouldInvalidate || !cached.shouldInvalidate(this.context))) {
                cached.index = partialNode.index;
                cached.parentKey = parentNode ? parentNode.key : null;
                yield cached;
                return;
            }
            element = state.renderer(partialNode.value);
        }
        // If there's an element with a getCollectionNode function on its type, then it's a supported component.
        // Call this function to get a partial node, and recursively build a full node from there.
        if ((0, react__WEBPACK_IMPORTED_MODULE_0__["default"]).isValidElement(element)) {
            let type = element.type;
            if (typeof type !== "function" && typeof type.getCollectionNode !== "function") {
                let name = typeof element.type === "function" ? element.type.name : element.type;
                throw new Error(`Unknown element <${name}> in collection.`);
            }
            let childNodes = type.getCollectionNode(element.props, this.context);
            let index = partialNode.index;
            let result = childNodes.next();
            while(!result.done && result.value){
                let childNode = result.value;
                partialNode.index = index;
                let nodeKey = childNode.key;
                if (!nodeKey) nodeKey = childNode.element ? null : this.getKey(element, partialNode, state, parentKey);
                let nodes = this.getFullNode({
                    ...childNode,
                    key: nodeKey,
                    index: index,
                    wrapper: $eb2240fc39a57fa5$var$compose(partialNode.wrapper, childNode.wrapper)
                }, this.getChildState(state, childNode), parentKey ? `${parentKey}${element.key}` : element.key, parentNode);
                let children = [
                    ...nodes
                ];
                for (let node of children){
                    // Cache the node based on its value
                    node.value = childNode.value || partialNode.value;
                    if (node.value) this.cache.set(node.value, node);
                    // The partial node may have specified a type for the child in order to specify a constraint.
                    // Verify that the full node that was built recursively matches this type.
                    if (partialNode.type && node.type !== partialNode.type) throw new Error(`Unsupported type <${$eb2240fc39a57fa5$var$capitalize(node.type)}> in <${$eb2240fc39a57fa5$var$capitalize(parentNode.type)}>. Only <${$eb2240fc39a57fa5$var$capitalize(partialNode.type)}> is supported.`);
                    index++;
                    yield node;
                }
                result = childNodes.next(children);
            }
            return;
        }
        // Ignore invalid elements
        if (partialNode.key == null) return;
        // Create full node
        let builder = this;
        let node = {
            type: partialNode.type,
            props: partialNode.props,
            key: partialNode.key,
            parentKey: parentNode ? parentNode.key : null,
            value: partialNode.value,
            level: parentNode ? parentNode.level + 1 : 0,
            index: partialNode.index,
            rendered: partialNode.rendered,
            textValue: partialNode.textValue,
            "aria-label": partialNode["aria-label"],
            wrapper: partialNode.wrapper,
            shouldInvalidate: partialNode.shouldInvalidate,
            hasChildNodes: partialNode.hasChildNodes,
            childNodes: $eb2240fc39a57fa5$var$iterable(function*() {
                if (!partialNode.hasChildNodes) return;
                let index = 0;
                for (let child of partialNode.childNodes()){
                    // Ensure child keys are globally unique by prepending the parent node's key
                    if (child.key != null) // TODO: Remove this line entirely and enforce that users always provide unique keys.
                    // Currently this line will have issues when a parent has a key `a` and a child with key `bc`
                    // but another parent has key `ab` and its child has a key `c`. The combined keys would result in both
                    // children having a key of `abc`.
                    child.key = `${node.key}${child.key}`;
                    child.index = index;
                    let nodes = builder.getFullNode(child, builder.getChildState(state, child), node.key, node);
                    for (let node of nodes){
                        index++;
                        yield node;
                    }
                }
            })
        };
        yield node;
    }
    constructor(){
        this.cache = new WeakMap();
    }
}
// Wraps an iterator function as an iterable object, and caches the results.
function $eb2240fc39a57fa5$var$iterable(iterator) {
    let cache = [];
    let iterable = null;
    return {
        *[Symbol.iterator] () {
            for (let item of cache)yield item;
            if (!iterable) iterable = iterator();
            for (let item of iterable){
                cache.push(item);
                yield item;
            }
        }
    };
}
function $eb2240fc39a57fa5$var$compose(outer, inner) {
    if (outer && inner) return (element)=>outer(inner(element));
    if (outer) return outer;
    if (inner) return inner;
}
function $eb2240fc39a57fa5$var$capitalize(str) {
    return str[0].toUpperCase() + str.slice(1);
}



function $7613b1592d41b092$export$6cd28814d92fa9c9(props, factory, context) {
    let builder = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, $eb2240fc39a57fa5$export$bf788dd355e3a401)(), []);
    let { children: children , items: items , collection: collection  } = props;
    let result = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (collection) return collection;
        let nodes = builder.build({
            children: children,
            items: items
        }, context);
        return factory(nodes);
    }, [
        builder,
        children,
        items,
        collection,
        context,
        factory
    ]);
    return result;
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ function $c5a24bc478652b5f$export$1005530eda016c13(node, collection) {
    // New API: call collection.getChildren with the node key.
    if (typeof collection.getChildren === "function") return collection.getChildren(node.key);
    // Old API: access childNodes directly.
    return node.childNodes;
}
function $c5a24bc478652b5f$export$fbdeaa6a76694f71(iterable) {
    return $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, 0);
}
function $c5a24bc478652b5f$export$5f3398f8733f90e2(iterable, index) {
    if (index < 0) return undefined;
    let i = 0;
    for (let item of iterable){
        if (i === index) return item;
        i++;
    }
}
function $c5a24bc478652b5f$export$7475b2c64539e4cf(iterable) {
    let lastItem = undefined;
    for (let value of iterable)lastItem = value;
    return lastItem;
}
function $c5a24bc478652b5f$export$8c434b3a7a4dad6(collection, a, b) {
    // If the two nodes have the same parent, compare their indices.
    if (a.parentKey === b.parentKey) return a.index - b.index;
    // Otherwise, collect all of the ancestors from each node, and find the first one that doesn't match starting from the root.
    // Include the base nodes in case we are comparing nodes of different levels so that we can compare the higher node to the lower level node's
    // ancestor of the same level
    let aAncestors = [
        ...$c5a24bc478652b5f$var$getAncestors(collection, a),
        a
    ];
    let bAncestors = [
        ...$c5a24bc478652b5f$var$getAncestors(collection, b),
        b
    ];
    let firstNonMatchingAncestor = aAncestors.slice(0, bAncestors.length).findIndex((a, i)=>a !== bAncestors[i]);
    if (firstNonMatchingAncestor !== -1) {
        // Compare the indices of two children within the common ancestor.
        a = aAncestors[firstNonMatchingAncestor];
        b = bAncestors[firstNonMatchingAncestor];
        return a.index - b.index;
    }
    // If there isn't a non matching ancestor, we might be in a case where one of the nodes is the ancestor of the other.
    if (aAncestors.findIndex((node)=>node === b) >= 0) return 1;
    else if (bAncestors.findIndex((node)=>node === a) >= 0) return -1;
    // 🤷
    return -1;
}
function $c5a24bc478652b5f$var$getAncestors(collection, node) {
    let parents = [];
    while((node === null || node === void 0 ? void 0 : node.parentKey) != null){
        node = collection.getItem(node.parentKey);
        parents.unshift(node);
    }
    return parents;
}


const $453cc9f0df89c0a5$var$cache = new WeakMap();
function $453cc9f0df89c0a5$export$77d5aafae4e095b2(collection) {
    let count = $453cc9f0df89c0a5$var$cache.get(collection);
    if (count != null) return count;
    count = 0;
    let countItems = (items)=>{
        for (let item of items)if (item.type === "section") countItems((0, $c5a24bc478652b5f$export$1005530eda016c13)(item, collection));
        else count++;
    };
    countItems(collection);
    $453cc9f0df89c0a5$var$cache.set(collection, count);
    return count;
}







//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/combobox/dist/import.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@react-stately/combobox/dist/import.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useComboBoxState": () => (/* binding */ $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e)
/* harmony export */ });
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/import.mjs");
/* harmony import */ var _react_stately_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-stately/list */ "./node_modules/@react-stately/list/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/import.mjs");
/* harmony import */ var _react_stately_menu__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-stately/menu */ "./node_modules/@react-stately/menu/dist/import.mjs");






/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 




function $a9e7382a7d111cb5$export$b453a3bfd4a5fa9e(props) {
    var _collection_getItem;
    let { defaultFilter: defaultFilter , menuTrigger: menuTrigger = "input" , allowsEmptyCollection: allowsEmptyCollection = false , allowsCustomValue: allowsCustomValue , shouldCloseOnBlur: shouldCloseOnBlur = true  } = props;
    let [showAllItems, setShowAllItems] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let [isFocused, setFocusedState] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    var _props_defaultInputValue;
    let [inputValue, setInputValue] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.useControlledState)(props.inputValue, (_props_defaultInputValue = props.defaultInputValue) !== null && _props_defaultInputValue !== void 0 ? _props_defaultInputValue : "", props.onInputChange);
    let onSelectionChange = (key)=>{
        if (props.onSelectionChange) props.onSelectionChange(key);
        // If key is the same, reset the inputValue and close the menu
        // (scenario: user clicks on already selected option)
        if (key === selectedKey) {
            resetInputValue();
            closeMenu();
        }
    };
    var _props_items;
    let { collection: collection , selectionManager: selectionManager , selectedKey: selectedKey , setSelectedKey: setSelectedKey , selectedItem: selectedItem , disabledKeys: disabledKeys  } = (0, _react_stately_list__WEBPACK_IMPORTED_MODULE_2__.useSingleSelectListState)({
        ...props,
        onSelectionChange: onSelectionChange,
        items: (_props_items = props.items) !== null && _props_items !== void 0 ? _props_items : props.defaultItems
    });
    // Preserve original collection so we can show all items on demand
    let originalCollection = collection;
    let filteredCollection = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>// No default filter if items are controlled.
        props.items != null || !defaultFilter ? collection : $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, defaultFilter), [
        collection,
        inputValue,
        defaultFilter,
        props.items
    ]);
    let [lastCollection, setLastCollection] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(filteredCollection);
    // Track what action is attempting to open the menu
    let menuOpenTrigger = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)("focus");
    let onOpenChange = (open)=>{
        if (props.onOpenChange) props.onOpenChange(open, open ? menuOpenTrigger.current : undefined);
        selectionManager.setFocused(open);
        if (!open) selectionManager.setFocusedKey(null);
    };
    let triggerState = (0, _react_stately_menu__WEBPACK_IMPORTED_MODULE_3__.useMenuTriggerState)({
        ...props,
        onOpenChange: onOpenChange,
        isOpen: undefined,
        defaultOpen: undefined
    });
    let open = (focusStrategy, trigger)=>{
        let displayAllItems = trigger === "manual" || trigger === "focus" && menuTrigger === "focus";
        // Prevent open operations from triggering if there is nothing to display
        // Also prevent open operations from triggering if items are uncontrolled but defaultItems is empty, even if displayAllItems is true.
        // This is to prevent comboboxes with empty defaultItems from opening but allow controlled items comboboxes to open even if the inital list is empty (assumption is user will provide swap the empty list with a base list via onOpenChange returning `menuTrigger` manual)
        if (allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) {
            if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is manually opened. Only care about this if items are undefined
            setShowAllItems(true);
            menuOpenTrigger.current = trigger;
            triggerState.open(focusStrategy);
        }
    };
    let toggle = (focusStrategy, trigger)=>{
        let displayAllItems = trigger === "manual" || trigger === "focus" && menuTrigger === "focus";
        // If the menu is closed and there is nothing to display, early return so toggle isn't called to prevent extraneous onOpenChange
        if (!(allowsEmptyCollection || filteredCollection.size > 0 || displayAllItems && originalCollection.size > 0 || props.items) && !triggerState.isOpen) return;
        if (displayAllItems && !triggerState.isOpen && props.items === undefined) // Show all items if menu is toggled open. Only care about this if items are undefined
        setShowAllItems(true);
        // Only update the menuOpenTrigger if menu is currently closed
        if (!triggerState.isOpen) menuOpenTrigger.current = trigger;
        toggleMenu(focusStrategy);
    };
    // If menu is going to close, save the current collection so we can freeze the displayed collection when the
    // user clicks outside the popover to close the menu. Prevents the menu contents from updating as the menu closes.
    let toggleMenu = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((focusStrategy)=>{
        if (triggerState.isOpen) setLastCollection(filteredCollection);
        triggerState.toggle(focusStrategy);
    }, [
        triggerState,
        filteredCollection
    ]);
    let closeMenu = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        if (triggerState.isOpen) {
            setLastCollection(filteredCollection);
            triggerState.close();
        }
    }, [
        triggerState,
        filteredCollection
    ]);
    let lastValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(inputValue);
    let resetInputValue = ()=>{
        var _collection_getItem;
        var _collection_getItem_textValue;
        let itemText = (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "";
        lastValue.current = itemText;
        setInputValue(itemText);
    };
    let isInitialRender = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(true);
    var _props_selectedKey, _ref;
    let lastSelectedKey = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)((_ref = (_props_selectedKey = props.selectedKey) !== null && _props_selectedKey !== void 0 ? _props_selectedKey : props.defaultSelectedKey) !== null && _ref !== void 0 ? _ref : null);
    var _collection_getItem_textValue;
    let lastSelectedKeyText = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)((_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "");
    // intentional omit dependency array, want this to happen on every render
    // eslint-disable-next-line react-hooks/exhaustive-deps
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        var _collection_getItem;
        // Open and close menu automatically when the input value changes if the input is focused,
        // and there are items in the collection or allowEmptyCollection is true.
        if (isFocused && (filteredCollection.size > 0 || allowsEmptyCollection) && !triggerState.isOpen && inputValue !== lastValue.current && menuTrigger !== "manual") open(null, "input");
        // Close the menu if the collection is empty. Don't close menu if filtered collection size is 0
        // but we are currently showing all items via button press
        if (!showAllItems && !allowsEmptyCollection && triggerState.isOpen && filteredCollection.size === 0) closeMenu();
        // Close when an item is selected.
        if (selectedKey != null && selectedKey !== lastSelectedKey.current) closeMenu();
        // Clear focused key when input value changes and display filtered collection again.
        if (inputValue !== lastValue.current) {
            selectionManager.setFocusedKey(null);
            setShowAllItems(false);
            // Set selectedKey to null when the user clears the input.
            // If controlled, this is the application developer's responsibility.
            if (inputValue === "" && (props.inputValue === undefined || props.selectedKey === undefined)) setSelectedKey(null);
        }
        // If it is the intial render and inputValue isn't controlled nor has an intial value, set input to match current selected key if any
        if (isInitialRender.current && props.inputValue === undefined && props.defaultInputValue === undefined) resetInputValue();
        // If the selectedKey changed, update the input value.
        // Do nothing if both inputValue and selectedKey are controlled.
        // In this case, it's the user's responsibility to update inputValue in onSelectionChange.
        if (selectedKey !== lastSelectedKey.current && (props.inputValue === undefined || props.selectedKey === undefined)) resetInputValue();
        else lastValue.current = inputValue;
        var _collection_getItem_textValue;
        // Update the inputValue if the selected item's text changes from its last tracked value.
        // This is to handle cases where a selectedKey is specified but the items aren't available (async loading) or the selected item's text value updates.
        // Only reset if the user isn't currently within the field so we don't erroneously modify user input.
        // If inputValue is controlled, it is the user's responsibility to update the inputValue when items change.
        let selectedItemText = (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "";
        if (!isFocused && selectedKey != null && props.inputValue === undefined && selectedKey === lastSelectedKey.current) {
            if (lastSelectedKeyText.current !== selectedItemText) {
                lastValue.current = selectedItemText;
                setInputValue(selectedItemText);
            }
        }
        isInitialRender.current = false;
        lastSelectedKey.current = selectedKey;
        lastSelectedKeyText.current = selectedItemText;
    });
    // Revert input value and close menu
    let revert = ()=>{
        if (allowsCustomValue && selectedKey == null) commitCustomValue();
        else commitSelection();
    };
    let commitCustomValue = ()=>{
        lastSelectedKey.current = null;
        setSelectedKey(null);
        closeMenu();
    };
    let commitSelection = ()=>{
        // If multiple things are controlled, call onSelectionChange
        if (props.selectedKey !== undefined && props.inputValue !== undefined) {
            var _collection_getItem;
            props.onSelectionChange(selectedKey);
            var _collection_getItem_textValue;
            // Stop menu from reopening from useEffect
            let itemText = (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "";
            lastValue.current = itemText;
            closeMenu();
        } else {
            // If only a single aspect of combobox is controlled, reset input value and close menu for the user
            resetInputValue();
            closeMenu();
        }
    };
    const commitValue = ()=>{
        if (allowsCustomValue) {
            var _collection_getItem;
            var _collection_getItem_textValue;
            const itemText = (_collection_getItem_textValue = (_collection_getItem = collection.getItem(selectedKey)) === null || _collection_getItem === void 0 ? void 0 : _collection_getItem.textValue) !== null && _collection_getItem_textValue !== void 0 ? _collection_getItem_textValue : "";
            inputValue === itemText ? commitSelection() : commitCustomValue();
        } else // Reset inputValue and close menu
        commitSelection();
    };
    let commit = ()=>{
        if (triggerState.isOpen && selectionManager.focusedKey != null) {
            // Reset inputValue and close menu here if the selected key is already the focused key. Otherwise
            // fire onSelectionChange to allow the application to control the closing.
            if (selectedKey === selectionManager.focusedKey) commitSelection();
            else setSelectedKey(selectionManager.focusedKey);
        } else commitValue();
    };
    let setFocused = (isFocused)=>{
        if (isFocused) {
            if (menuTrigger === "focus") open(null, "focus");
        } else if (shouldCloseOnBlur) commitValue();
        setFocusedState(isFocused);
    };
    let displayedCollection = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>{
        if (triggerState.isOpen) {
            if (showAllItems) return originalCollection;
            else return filteredCollection;
        } else return lastCollection;
    }, [
        triggerState.isOpen,
        originalCollection,
        filteredCollection,
        showAllItems,
        lastCollection
    ]);
    return {
        ...triggerState,
        toggle: toggle,
        open: open,
        close: commitValue,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        disabledKeys: disabledKeys,
        isFocused: isFocused,
        setFocused: setFocused,
        selectedItem: selectedItem,
        collection: displayedCollection,
        inputValue: inputValue,
        setInputValue: setInputValue,
        commit: commit,
        revert: revert
    };
}
function $a9e7382a7d111cb5$var$filterCollection(collection, inputValue, filter) {
    return new (0, _react_stately_list__WEBPACK_IMPORTED_MODULE_2__.ListCollection)($a9e7382a7d111cb5$var$filterNodes(collection, collection, inputValue, filter));
}
function $a9e7382a7d111cb5$var$filterNodes(collection, nodes, inputValue, filter) {
    let filteredNode = [];
    for (let node of nodes){
        if (node.type === "section" && node.hasChildNodes) {
            let filtered = $a9e7382a7d111cb5$var$filterNodes(collection, (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_4__.getChildNodes)(node, collection), inputValue, filter);
            if ([
                ...filtered
            ].some((node)=>node.type === "item")) filteredNode.push({
                ...node,
                childNodes: filtered
            });
        } else if (node.type === "item" && filter(node.textValue, inputValue)) filteredNode.push({
            ...node
        });
        else if (node.type !== "item") filteredNode.push({
            ...node
        });
    }
    return filteredNode;
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/list/dist/import.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@react-stately/list/dist/import.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListCollection": () => (/* binding */ $a02d57049d202695$export$d085fb9e920b5ca7),
/* harmony export */   "useListState": () => (/* binding */ $e72dd72e1c76a225$export$2f645645f7bca764),
/* harmony export */   "useSingleSelectListState": () => (/* binding */ $a0d645289fe9b86b$export$e7f05e985daf4b5f)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/selection */ "./node_modules/@react-stately/selection/dist/import.mjs");
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/import.mjs");
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/import.mjs");





/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $a02d57049d202695$export$d085fb9e920b5ca7 {
    *[Symbol.iterator]() {
        yield* this.iterable;
    }
    get size() {
        return this.keyMap.size;
    }
    getKeys() {
        return this.keyMap.keys();
    }
    getKeyBefore(key) {
        let node = this.keyMap.get(key);
        return node ? node.prevKey : null;
    }
    getKeyAfter(key) {
        let node = this.keyMap.get(key);
        return node ? node.nextKey : null;
    }
    getFirstKey() {
        return this.firstKey;
    }
    getLastKey() {
        return this.lastKey;
    }
    getItem(key) {
        return this.keyMap.get(key);
    }
    at(idx) {
        const keys = [
            ...this.getKeys()
        ];
        return this.getItem(keys[idx]);
    }
    getChildren(key) {
        let node = this.keyMap.get(key);
        return (node === null || node === void 0 ? void 0 : node.childNodes) || [];
    }
    constructor(nodes){
        this.keyMap = new Map();
        this.iterable = nodes;
        let visit = (node)=>{
            this.keyMap.set(node.key, node);
            if (node.childNodes && node.type === "section") for (let child of node.childNodes)visit(child);
        };
        for (let node of nodes)visit(node);
        let last;
        let index = 0;
        for (let [key, node] of this.keyMap){
            if (last) {
                last.nextKey = key;
                node.prevKey = last.key;
            } else {
                this.firstKey = key;
                node.prevKey = undefined;
            }
            if (node.type === "item") node.index = index++;
            last = node;
            // Set nextKey as undefined since this might be the last node
            // If it isn't the last node, last.nextKey will properly set at start of new loop
            last.nextKey = undefined;
        }
        this.lastKey = last === null || last === void 0 ? void 0 : last.key;
    }
}




function $e72dd72e1c76a225$export$2f645645f7bca764(props) {
    let { filter: filter  } = props;
    let selectionState = (0, _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__.useMultipleSelectionState)(props);
    let disabledKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let factory = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((nodes)=>filter ? new (0, $a02d57049d202695$export$d085fb9e920b5ca7)(filter(nodes)) : new (0, $a02d57049d202695$export$d085fb9e920b5ca7)(nodes), [
        filter
    ]);
    let context = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>({
            suppressTextValueWarning: props.suppressTextValueWarning
        }), [
        props.suppressTextValueWarning
    ]);
    let collection = (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__.useCollection)(props, factory, context);
    let selectionManager = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>new (0, _react_stately_selection__WEBPACK_IMPORTED_MODULE_1__.SelectionManager)(collection, selectionState), [
        collection,
        selectionState
    ]);
    // Reset focused key if that item is deleted from the collection.
    const cachedCollection = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (selectionState.focusedKey != null && !collection.getItem(selectionState.focusedKey)) {
            const startItem = cachedCollection.current.getItem(selectionState.focusedKey);
            const cachedItemNodes = [
                ...cachedCollection.current.getKeys()
            ].map((key)=>{
                const itemNode = cachedCollection.current.getItem(key);
                return itemNode.type === "item" ? itemNode : null;
            }).filter((node)=>node !== null);
            const itemNodes = [
                ...collection.getKeys()
            ].map((key)=>{
                const itemNode = collection.getItem(key);
                return itemNode.type === "item" ? itemNode : null;
            }).filter((node)=>node !== null);
            const diff = cachedItemNodes.length - itemNodes.length;
            let index = Math.min(diff > 1 ? Math.max(startItem.index - diff + 1, 0) : startItem.index, itemNodes.length - 1);
            let newNode;
            while(index >= 0){
                if (!selectionManager.isDisabled(itemNodes[index].key)) {
                    newNode = itemNodes[index];
                    break;
                }
                // Find next, not disabled item.
                if (index < itemNodes.length - 1) index++;
                else {
                    if (index > startItem.index) index = startItem.index;
                    index--;
                }
            }
            selectionState.setFocusedKey(newNode ? newNode.key : null);
        }
        cachedCollection.current = collection;
    }, [
        collection,
        selectionManager,
        selectionState,
        selectionState.focusedKey
    ]);
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager
    };
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $a0d645289fe9b86b$export$e7f05e985daf4b5f(props) {
    var _props_defaultSelectedKey;
    let [selectedKey, setSelectedKey] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_3__.useControlledState)(props.selectedKey, (_props_defaultSelectedKey = props.defaultSelectedKey) !== null && _props_defaultSelectedKey !== void 0 ? _props_defaultSelectedKey : null, props.onSelectionChange);
    let selectedKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>selectedKey != null ? [
            selectedKey
        ] : [], [
        selectedKey
    ]);
    let { collection: collection , disabledKeys: disabledKeys , selectionManager: selectionManager  } = (0, $e72dd72e1c76a225$export$2f645645f7bca764)({
        ...props,
        selectionMode: "single",
        disallowEmptySelection: true,
        allowDuplicateSelectionEvents: true,
        selectedKeys: selectedKeys,
        onSelectionChange: (keys)=>{
            let key = keys.values().next().value;
            // Always fire onSelectionChange, even if the key is the same
            // as the current key (useControlledState does not).
            if (key === selectedKey && props.onSelectionChange) props.onSelectionChange(key);
            setSelectedKey(key);
        }
    });
    let selectedItem = selectedKey != null ? collection.getItem(selectedKey) : null;
    return {
        collection: collection,
        disabledKeys: disabledKeys,
        selectionManager: selectionManager,
        selectedKey: selectedKey,
        setSelectedKey: setSelectedKey,
        selectedItem: selectedItem
    };
}






//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/menu/dist/import.mjs":
/*!**********************************************************!*\
  !*** ./node_modules/@react-stately/menu/dist/import.mjs ***!
  \**********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useMenuTriggerState": () => (/* binding */ $a28c903ee9ad8dc5$export$79fefeb1c2091ac3)
/* harmony export */ });
/* harmony import */ var _react_stately_overlays__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/overlays */ "./node_modules/@react-stately/overlays/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $a28c903ee9ad8dc5$export$79fefeb1c2091ac3(props) {
    let overlayTriggerState = (0, _react_stately_overlays__WEBPACK_IMPORTED_MODULE_1__.useOverlayTriggerState)(props);
    let [focusStrategy, setFocusStrategy] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    return {
        focusStrategy: focusStrategy,
        ...overlayTriggerState,
        open (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.open();
        },
        toggle (focusStrategy = null) {
            setFocusStrategy(focusStrategy);
            overlayTriggerState.toggle();
        }
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/overlays/dist/import.mjs":
/*!**************************************************************!*\
  !*** ./node_modules/@react-stately/overlays/dist/import.mjs ***!
  \**************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useOverlayTriggerState": () => (/* binding */ $fc909762b330b746$export$61c6a8c84e605fb6)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/import.mjs");



/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

function $fc909762b330b746$export$61c6a8c84e605fb6(props) {
    let [isOpen, setOpen] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.useControlledState)(props.isOpen, props.defaultOpen || false, props.onOpenChange);
    const open = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(true);
    }, [
        setOpen
    ]);
    const close = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(false);
    }, [
        setOpen
    ]);
    const toggle = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{
        setOpen(!isOpen);
    }, [
        setOpen,
        isOpen
    ]);
    return {
        isOpen: isOpen,
        setOpen: setOpen,
        open: open,
        close: close,
        toggle: toggle
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/select/dist/import.mjs":
/*!************************************************************!*\
  !*** ./node_modules/@react-stately/select/dist/import.mjs ***!
  \************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "useSelectState": () => (/* binding */ $2bc3a590c5373a4e$export$5159ec8b34d4ec12)
/* harmony export */ });
/* harmony import */ var _react_stately_menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/menu */ "./node_modules/@react-stately/menu/dist/import.mjs");
/* harmony import */ var _react_stately_list__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-stately/list */ "./node_modules/@react-stately/list/dist/import.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 


function $2bc3a590c5373a4e$export$5159ec8b34d4ec12(props) {
    let triggerState = (0, _react_stately_menu__WEBPACK_IMPORTED_MODULE_1__.useMenuTriggerState)(props);
    let listState = (0, _react_stately_list__WEBPACK_IMPORTED_MODULE_2__.useSingleSelectListState)({
        ...props,
        onSelectionChange: (key)=>{
            if (props.onSelectionChange != null) props.onSelectionChange(key);
            triggerState.close();
        }
    });
    let [isFocused, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    return {
        ...listState,
        ...triggerState,
        open () {
            // Don't open if the collection is empty.
            if (listState.collection.size !== 0) triggerState.open();
        },
        toggle (focusStrategy) {
            if (listState.collection.size !== 0) triggerState.toggle(focusStrategy);
        },
        isFocused: isFocused,
        setFocused: setFocused
    };
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/selection/dist/import.mjs":
/*!***************************************************************!*\
  !*** ./node_modules/@react-stately/selection/dist/import.mjs ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SelectionManager": () => (/* binding */ $d496c0a20b6e58ec$export$6c8a5aaad13c9852),
/* harmony export */   "useMultipleSelectionState": () => (/* binding */ $7af3f5b51489e0b5$export$253fe78d46329472)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/utils */ "./node_modules/@react-stately/utils/dist/import.mjs");
/* harmony import */ var _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @react-stately/collections */ "./node_modules/@react-stately/collections/dist/import.mjs");




/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ class $e40ea825a81a3709$export$52baac22726c72bf extends Set {
    constructor(keys, anchorKey, currentKey){
        super(keys);
        if (keys instanceof $e40ea825a81a3709$export$52baac22726c72bf) {
            this.anchorKey = anchorKey || keys.anchorKey;
            this.currentKey = currentKey || keys.currentKey;
        } else {
            this.anchorKey = anchorKey;
            this.currentKey = currentKey;
        }
    }
}



function $7af3f5b51489e0b5$var$equalSets(setA, setB) {
    if (setA.size !== setB.size) return false;
    for (let item of setA){
        if (!setB.has(item)) return false;
    }
    return true;
}
function $7af3f5b51489e0b5$export$253fe78d46329472(props) {
    let { selectionMode: selectionMode = "none" , disallowEmptySelection: disallowEmptySelection , allowDuplicateSelectionEvents: allowDuplicateSelectionEvents , selectionBehavior: selectionBehaviorProp = "toggle" , disabledBehavior: disabledBehavior = "all"  } = props;
    // We want synchronous updates to `isFocused` and `focusedKey` after their setters are called.
    // But we also need to trigger a react re-render. So, we have both a ref (sync) and state (async).
    let isFocusedRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(false);
    let [, setFocused] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);
    let focusedKeyRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let childFocusStrategyRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);
    let [, setFocusedKey] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(null);
    let selectedKeysProp = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$7af3f5b51489e0b5$var$convertSelection(props.selectedKeys), [
        props.selectedKeys
    ]);
    let defaultSelectedKeys = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>$7af3f5b51489e0b5$var$convertSelection(props.defaultSelectedKeys, new (0, $e40ea825a81a3709$export$52baac22726c72bf)()), [
        props.defaultSelectedKeys
    ]);
    let [selectedKeys, setSelectedKeys] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.useControlledState)(selectedKeysProp, defaultSelectedKeys, props.onSelectionChange);
    let disabledKeysProp = (0, react__WEBPACK_IMPORTED_MODULE_0__.useMemo)(()=>props.disabledKeys ? new Set(props.disabledKeys) : new Set(), [
        props.disabledKeys
    ]);
    let [selectionBehavior, setSelectionBehavior] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(selectionBehaviorProp);
    // If the selectionBehavior prop is set to replace, but the current state is toggle (e.g. due to long press
    // to enter selection mode on touch), and the selection becomes empty, reset the selection behavior.
    if (selectionBehaviorProp === "replace" && selectionBehavior === "toggle" && typeof selectedKeys === "object" && selectedKeys.size === 0) setSelectionBehavior("replace");
    // If the selectionBehavior prop changes, update the state as well.
    let lastSelectionBehavior = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(selectionBehaviorProp);
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        if (selectionBehaviorProp !== lastSelectionBehavior.current) {
            setSelectionBehavior(selectionBehaviorProp);
            lastSelectionBehavior.current = selectionBehaviorProp;
        }
    }, [
        selectionBehaviorProp
    ]);
    return {
        selectionMode: selectionMode,
        disallowEmptySelection: disallowEmptySelection,
        selectionBehavior: selectionBehavior,
        setSelectionBehavior: setSelectionBehavior,
        get isFocused () {
            return isFocusedRef.current;
        },
        setFocused (f) {
            isFocusedRef.current = f;
            setFocused(f);
        },
        get focusedKey () {
            return focusedKeyRef.current;
        },
        get childFocusStrategy () {
            return childFocusStrategyRef.current;
        },
        setFocusedKey (k, childFocusStrategy = "first") {
            focusedKeyRef.current = k;
            childFocusStrategyRef.current = childFocusStrategy;
            setFocusedKey(k);
        },
        selectedKeys: selectedKeys,
        setSelectedKeys (keys) {
            if (allowDuplicateSelectionEvents || !$7af3f5b51489e0b5$var$equalSets(keys, selectedKeys)) setSelectedKeys(keys);
        },
        disabledKeys: disabledKeysProp,
        disabledBehavior: disabledBehavior
    };
}
function $7af3f5b51489e0b5$var$convertSelection(selection, defaultValue) {
    if (!selection) return defaultValue;
    return selection === "all" ? "all" : new (0, $e40ea825a81a3709$export$52baac22726c72bf)(selection);
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 

class $d496c0a20b6e58ec$export$6c8a5aaad13c9852 {
    /**
   * The type of selection that is allowed in the collection.
   */ get selectionMode() {
        return this.state.selectionMode;
    }
    /**
   * Whether the collection allows empty selection.
   */ get disallowEmptySelection() {
        return this.state.disallowEmptySelection;
    }
    /**
   * The selection behavior for the collection.
   */ get selectionBehavior() {
        return this.state.selectionBehavior;
    }
    /**
   * Sets the selection behavior for the collection.
   */ setSelectionBehavior(selectionBehavior) {
        this.state.setSelectionBehavior(selectionBehavior);
    }
    /**
   * Whether the collection is currently focused.
   */ get isFocused() {
        return this.state.isFocused;
    }
    /**
   * Sets whether the collection is focused.
   */ setFocused(isFocused) {
        this.state.setFocused(isFocused);
    }
    /**
   * The current focused key in the collection.
   */ get focusedKey() {
        return this.state.focusedKey;
    }
    /** Whether the first or last child of the focused key should receive focus. */ get childFocusStrategy() {
        return this.state.childFocusStrategy;
    }
    /**
   * Sets the focused key.
   */ setFocusedKey(key, childFocusStrategy) {
        if (key == null || this.collection.getItem(key)) this.state.setFocusedKey(key, childFocusStrategy);
    }
    /**
   * The currently selected keys in the collection.
   */ get selectedKeys() {
        return this.state.selectedKeys === "all" ? new Set(this.getSelectAllKeys()) : this.state.selectedKeys;
    }
    /**
   * The raw selection value for the collection.
   * Either 'all' for select all, or a set of keys.
   */ get rawSelection() {
        return this.state.selectedKeys;
    }
    /**
   * Returns whether a key is selected.
   */ isSelected(key) {
        if (this.state.selectionMode === "none") return false;
        key = this.getKey(key);
        return this.state.selectedKeys === "all" ? this.canSelectItem(key) : this.state.selectedKeys.has(key);
    }
    /**
   * Whether the selection is empty.
   */ get isEmpty() {
        return this.state.selectedKeys !== "all" && this.state.selectedKeys.size === 0;
    }
    /**
   * Whether all items in the collection are selected.
   */ get isSelectAll() {
        if (this.isEmpty) return false;
        if (this.state.selectedKeys === "all") return true;
        if (this._isSelectAll != null) return this._isSelectAll;
        let allKeys = this.getSelectAllKeys();
        let selectedKeys = this.state.selectedKeys;
        this._isSelectAll = allKeys.every((k)=>selectedKeys.has(k));
        return this._isSelectAll;
    }
    get firstSelectedKey() {
        let first = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!first || item && (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__.compareNodeOrder)(this.collection, item, first) < 0) first = item;
        }
        return first === null || first === void 0 ? void 0 : first.key;
    }
    get lastSelectedKey() {
        let last = null;
        for (let key of this.state.selectedKeys){
            let item = this.collection.getItem(key);
            if (!last || item && (0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__.compareNodeOrder)(this.collection, item, last) > 0) last = item;
        }
        return last === null || last === void 0 ? void 0 : last.key;
    }
    get disabledKeys() {
        return this.state.disabledKeys;
    }
    get disabledBehavior() {
        return this.state.disabledBehavior;
    }
    /**
   * Extends the selection to the given key.
   */ extendSelection(toKey) {
        if (this.selectionMode === "none") return;
        if (this.selectionMode === "single") {
            this.replaceSelection(toKey);
            return;
        }
        toKey = this.getKey(toKey);
        let selection;
        // Only select the one key if coming from a select all.
        if (this.state.selectedKeys === "all") selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)([
            toKey
        ], toKey, toKey);
        else {
            let selectedKeys = this.state.selectedKeys;
            let anchorKey = selectedKeys.anchorKey || toKey;
            selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)(selectedKeys, anchorKey, toKey);
            for (let key of this.getKeyRange(anchorKey, selectedKeys.currentKey || toKey))selection.delete(key);
            for (let key of this.getKeyRange(toKey, anchorKey))if (this.canSelectItem(key)) selection.add(key);
        }
        this.state.setSelectedKeys(selection);
    }
    getKeyRange(from, to) {
        let fromItem = this.collection.getItem(from);
        let toItem = this.collection.getItem(to);
        if (fromItem && toItem) {
            if ((0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__.compareNodeOrder)(this.collection, fromItem, toItem) <= 0) return this.getKeyRangeInternal(from, to);
            return this.getKeyRangeInternal(to, from);
        }
        return [];
    }
    getKeyRangeInternal(from, to) {
        let keys = [];
        let key = from;
        while(key){
            let item = this.collection.getItem(key);
            if (item && item.type === "item" || item.type === "cell" && this.allowsCellSelection) keys.push(key);
            if (key === to) return keys;
            key = this.collection.getKeyAfter(key);
        }
        return [];
    }
    getKey(key) {
        let item = this.collection.getItem(key);
        if (!item) // ¯\_(ツ)_/¯
        return key;
        // If cell selection is allowed, just return the key.
        if (item.type === "cell" && this.allowsCellSelection) return key;
        // Find a parent item to select
        while(item.type !== "item" && item.parentKey != null)item = this.collection.getItem(item.parentKey);
        if (!item || item.type !== "item") return null;
        return item.key;
    }
    /**
   * Toggles whether the given key is selected.
   */ toggleSelection(key) {
        if (this.selectionMode === "none") return;
        if (this.selectionMode === "single" && !this.isSelected(key)) {
            this.replaceSelection(key);
            return;
        }
        key = this.getKey(key);
        if (key == null) return;
        let keys = new (0, $e40ea825a81a3709$export$52baac22726c72bf)(this.state.selectedKeys === "all" ? this.getSelectAllKeys() : this.state.selectedKeys);
        if (keys.has(key)) keys.delete(key);
        else if (this.canSelectItem(key)) {
            keys.add(key);
            keys.anchorKey = key;
            keys.currentKey = key;
        }
        if (this.disallowEmptySelection && keys.size === 0) return;
        this.state.setSelectedKeys(keys);
    }
    /**
   * Replaces the selection with only the given key.
   */ replaceSelection(key) {
        if (this.selectionMode === "none") return;
        key = this.getKey(key);
        if (key == null) return;
        let selection = this.canSelectItem(key) ? new (0, $e40ea825a81a3709$export$52baac22726c72bf)([
            key
        ], key, key) : new (0, $e40ea825a81a3709$export$52baac22726c72bf)();
        this.state.setSelectedKeys(selection);
    }
    /**
   * Replaces the selection with the given keys.
   */ setSelectedKeys(keys) {
        if (this.selectionMode === "none") return;
        let selection = new (0, $e40ea825a81a3709$export$52baac22726c72bf)();
        for (let key of keys){
            key = this.getKey(key);
            if (key != null) {
                selection.add(key);
                if (this.selectionMode === "single") break;
            }
        }
        this.state.setSelectedKeys(selection);
    }
    getSelectAllKeys() {
        let keys = [];
        let addKeys = (key)=>{
            while(key){
                if (this.canSelectItem(key)) {
                    let item = this.collection.getItem(key);
                    if (item.type === "item") keys.push(key);
                    // Add child keys. If cell selection is allowed, then include item children too.
                    if (item.hasChildNodes && (this.allowsCellSelection || item.type !== "item")) addKeys((0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__.getFirstItem)((0, _react_stately_collections__WEBPACK_IMPORTED_MODULE_2__.getChildNodes)(item, this.collection)).key);
                }
                key = this.collection.getKeyAfter(key);
            }
        };
        addKeys(this.collection.getFirstKey());
        return keys;
    }
    /**
   * Selects all items in the collection.
   */ selectAll() {
        if (!this.isSelectAll && this.selectionMode === "multiple") this.state.setSelectedKeys("all");
    }
    /**
   * Removes all keys from the selection.
   */ clearSelection() {
        if (!this.disallowEmptySelection && (this.state.selectedKeys === "all" || this.state.selectedKeys.size > 0)) this.state.setSelectedKeys(new (0, $e40ea825a81a3709$export$52baac22726c72bf)());
    }
    /**
   * Toggles between select all and an empty selection.
   */ toggleSelectAll() {
        if (this.isSelectAll) this.clearSelection();
        else this.selectAll();
    }
    select(key, e) {
        if (this.selectionMode === "none") return;
        if (this.selectionMode === "single") {
            if (this.isSelected(key) && !this.disallowEmptySelection) this.toggleSelection(key);
            else this.replaceSelection(key);
        } else if (this.selectionBehavior === "toggle" || e && (e.pointerType === "touch" || e.pointerType === "virtual")) // if touch or virtual (VO) then we just want to toggle, otherwise it's impossible to multi select because they don't have modifier keys
        this.toggleSelection(key);
        else this.replaceSelection(key);
    }
    /**
   * Returns whether the current selection is equal to the given selection.
   */ isSelectionEqual(selection) {
        if (selection === this.state.selectedKeys) return true;
        // Check if the set of keys match.
        let selectedKeys = this.selectedKeys;
        if (selection.size !== selectedKeys.size) return false;
        for (let key of selection){
            if (!selectedKeys.has(key)) return false;
        }
        for (let key of selectedKeys){
            if (!selection.has(key)) return false;
        }
        return true;
    }
    canSelectItem(key) {
        if (this.state.selectionMode === "none" || this.state.disabledKeys.has(key)) return false;
        let item = this.collection.getItem(key);
        if (!item || item.type === "cell" && !this.allowsCellSelection) return false;
        return true;
    }
    isDisabled(key) {
        return this.state.disabledKeys.has(key) && this.state.disabledBehavior === "all";
    }
    constructor(collection, state, options){
        this.collection = collection;
        this.state = state;
        var _options_allowsCellSelection;
        this.allowsCellSelection = (_options_allowsCellSelection = options === null || options === void 0 ? void 0 : options.allowsCellSelection) !== null && _options_allowsCellSelection !== void 0 ? _options_allowsCellSelection : false;
        this._isSelectAll = null;
    }
}





//# sourceMappingURL=module.js.map


/***/ }),

/***/ "./node_modules/@react-stately/utils/dist/import.mjs":
/*!***********************************************************!*\
  !*** ./node_modules/@react-stately/utils/dist/import.mjs ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "clamp": () => (/* binding */ $9446cca9a3875146$export$7d15b64cf5a3a4c4),
/* harmony export */   "snapValueToStep": () => (/* binding */ $9446cca9a3875146$export$cb6e0bb50bc19463),
/* harmony export */   "toFixedNumber": () => (/* binding */ $9446cca9a3875146$export$b6268554fba451f),
/* harmony export */   "useControlledState": () => (/* binding */ $458b0a5536c1a7cf$export$40bfa8c7b0832715)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ 
function $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {
    let [stateValue, setStateValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || defaultValue);
    let isControlledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value !== undefined);
    let isControlled = value !== undefined;
    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{
        let wasControlled = isControlledRef.current;
        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? "controlled" : "uncontrolled"} to ${isControlled ? "controlled" : "uncontrolled"}.`);
        isControlledRef.current = isControlled;
    }, [
        isControlled
    ]);
    let currentValue = isControlled ? value : stateValue;
    let setValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value, ...args)=>{
        let onChangeCaller = (value, ...onChangeArgs)=>{
            if (onChange) {
                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);
            }
            if (!isControlled) // If uncontrolled, mutate the currentValue local variable so that
            // calling setState multiple times with the same value only emits onChange once.
            // We do not use a ref for this because we specifically _do_ want the value to
            // reset every render, and assigning to a ref in render breaks aborted suspended renders.
            // eslint-disable-next-line react-hooks/exhaustive-deps
            currentValue = value;
        };
        if (typeof value === "function") {
            console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320");
            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates
            // when someone using useControlledState calls setControlledState(myFunc)
            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc
            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning
            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same
            let updateFunction = (oldValue, ...functionArgs)=>{
                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);
                onChangeCaller(interceptedValue, ...args);
                if (!isControlled) return interceptedValue;
                return oldValue;
            };
            setStateValue(updateFunction);
        } else {
            if (!isControlled) setStateValue(value);
            onChangeCaller(value, ...args);
        }
    }, [
        isControlled,
        currentValue,
        onChange
    ]);
    return [
        currentValue,
        setValue
    ];
}


/*
 * Copyright 2020 Adobe. All rights reserved.
 * This file is licensed to you under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License. You may obtain a copy
 * of the License at http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software distributed under
 * the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS
 * OF ANY KIND, either express or implied. See the License for the specific language
 * governing permissions and limitations under the License.
 */ /**
 * Takes a value and forces it to the closest min/max if it's outside. Also forces it to the closest valid step.
 */ function $9446cca9a3875146$export$7d15b64cf5a3a4c4(value, min = -Infinity, max = Infinity) {
    let newValue = Math.min(Math.max(value, min), max);
    return newValue;
}
function $9446cca9a3875146$export$cb6e0bb50bc19463(value, min, max, step) {
    let remainder = (value - (isNaN(min) ? 0 : min)) % step;
    let snappedValue = Math.abs(remainder) * 2 >= step ? value + Math.sign(remainder) * (step - Math.abs(remainder)) : value - remainder;
    if (!isNaN(min)) {
        if (snappedValue < min) snappedValue = min;
        else if (!isNaN(max) && snappedValue > max) snappedValue = min + Math.floor((max - min) / step) * step;
    } else if (!isNaN(max) && snappedValue > max) snappedValue = Math.floor(max / step) * step;
    // correct floating point behavior by rounding to step precision
    let string = step.toString();
    let index = string.indexOf(".");
    let precision = index >= 0 ? string.length - index : 0;
    if (precision > 0) {
        let pow = Math.pow(10, precision);
        snappedValue = Math.round(snappedValue * pow) / pow;
    }
    return snappedValue;
}
function $9446cca9a3875146$export$b6268554fba451f(value, digits, base = 10) {
    const pow = Math.pow(base, digits);
    return Math.round(value * pow) / pow;
}





//# sourceMappingURL=module.js.map


/***/ })

};

//# sourceMappingURL=defaultVendors-node_modules_react-aria_button_dist_import_mjs-node_modules_react-aria_combobo-cab37a.mjs.map