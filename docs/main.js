/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../img/github.png */ "./src/img/github.png"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "html {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    min-height: 100%;\n    \n    padding: 0px;\n    margin: 0px;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    gap: 10px;\n    height: 60px;\n    width: 100%;\n    margin-top: auto;\n    color: grey;\n}\n\n#footer img {\n    content: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ");\n    \n    height: auto;\n    max-width: 24px;\n    cursor: pointer;\n    transition: transform .2s;\n}\n\n#footer img:hover {\n    transform: rotateZ(360deg);\n}\n\n#content {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    \n    gap: 100px;\n    margin-top: auto;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    \n    border: 1px solid black;\n}\n\n.tile {\n    border: 1px solid black;\n}\n\n#controls {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    height: 60px;\n    width: 100%;\n}", "",{"version":3,"sources":["webpack://./src/css/index.css"],"names":[],"mappings":"AAAA;IACI,WAAW;IACX,YAAY;AAChB;;AAEA;IACI,WAAW;IACX,YAAY;IACZ,gBAAgB;;IAEhB,YAAY;IACZ,WAAW;;IAEX,aAAa;IACb,sBAAsB;IACtB,mBAAmB;AACvB;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,SAAS;IACT,YAAY;IACZ,WAAW;IACX,gBAAgB;IAChB,WAAW;AACf;;AAEA;IACI,gDAAiC;;IAEjC,YAAY;IACZ,eAAe;IACf,eAAe;IACf,yBAAyB;AAC7B;;AAEA;IACI,0BAA0B;AAC9B;;AAEA;IACI,aAAa;IACb,6BAA6B;IAC7B,mBAAmB;;IAEnB,UAAU;IACV,gBAAgB;AACpB;;AAEA;IACI,aAAa;IACb,uCAAuC;IACvC,oCAAoC;;IAEpC,uBAAuB;AAC3B;;AAEA;IACI,uBAAuB;AAC3B;;AAEA;IACI,aAAa;IACb,uBAAuB;IACvB,mBAAmB;;IAEnB,YAAY;IACZ,WAAW;AACf","sourcesContent":["html {\n    width: 100%;\n    height: 100%;\n}\n\nbody {\n    width: 100%;\n    height: 100%;\n    min-height: 100%;\n    \n    padding: 0px;\n    margin: 0px;\n    \n    display: flex;\n    flex-direction: column;\n    align-items: center;\n}\n\n#footer {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    gap: 10px;\n    height: 60px;\n    width: 100%;\n    margin-top: auto;\n    color: grey;\n}\n\n#footer img {\n    content: url('../img/github.png');\n    \n    height: auto;\n    max-width: 24px;\n    cursor: pointer;\n    transition: transform .2s;\n}\n\n#footer img:hover {\n    transform: rotateZ(360deg);\n}\n\n#content {\n    display: flex;\n    justify-content: space-evenly;\n    align-items: center;\n    \n    gap: 100px;\n    margin-top: auto;\n}\n\n.gameboard {\n    display: grid;\n    grid-template-columns: repeat(10, 50px);\n    grid-template-rows: repeat(10, 50px);\n    \n    border: 1px solid black;\n}\n\n.tile {\n    border: 1px solid black;\n}\n\n#controls {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    \n    height: 60px;\n    width: 100%;\n}"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./index.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_index_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/factories/gameboard.js":
/*!***************************************!*\
  !*** ./src/js/factories/gameboard.js ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/js/factories/ship.js");


class Gameboard {
    #boardSize = 10;
    #board;
    
    static shipTypes = {
        carrier: 5,
        battleship: 4,
        destroyer: 3,
        submarine: 3,
        patrolBoat: 2
    }
    
    static tileTypes = {
        empty: 0,
        missed: 1,
        ship: 2,
        hit: 3
    }
    
    static tileColors = ['white', 'grey', 'white', 'red'];
    
    #ships = [];
    
    constructor() {
        this.#board = new Array(this.#boardSize);
        for (let i = 0; i < this.#boardSize; ++i) {
            this.#board[i] = new Array(this.#boardSize);
        }
        
        for (let i = 0; i < this.#boardSize; ++i) {
            for (let j = 0; j < this.#boardSize; ++j) {
                this.#board[i][j] = Gameboard.tileTypes.empty;
            }
        }
    }
    
    get tileColors() {
        return Gameboard.tileColors;
    }
    
    get tileTypes() {
        return Gameboard.tileTypes;
    }
    
    get shipTypes() {
        return Gameboard.shipTypes;
    }
    
    get board() {
        return this.#board;
    }
    
    get boardSize() {
        return this.#boardSize;
    }
    
    #fitsOnBoard(length, direction) {
        if (length <= this.#boardSize - direction && direction >= 0) return true;
        return false;
    }
    
    isPlacementPossible(length, row, column, isVertical) {
        if (isVertical && this.#fitsOnBoard(length, row)) {
            let fits = true;
            
            const j = column;
            for (let i = row; i < length + row; ++i) {
                if (this.#board[i][j] === Gameboard.tileTypes.ship) fits = false;
            }
            return fits;
        } else if (!isVertical && this.#fitsOnBoard(length, column)) {
            let fits = true;
            
            const i = row;
            for (let j = column; j < length + column; ++j) {
                if (this.#board[i][j] === Gameboard.tileTypes.ship) fits = false;
            }
            return fits;
        }
        
        return false;
    }
    
    addShip(length, row, column, isVertical) {
        if (!this.isPlacementPossible(length, row, column, isVertical)) return false;
        
        // Add ship
        this.#ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__["default"](length));
        if (isVertical) {
            const j = column;
            for (let i = row; i < length + row; ++i)
                this.#board[i][j] = Gameboard.tileTypes.ship;
        } else {
            const i = row;
            for (let j = column; j < length + column; ++j)
                this.#board[i][j] = Gameboard.tileTypes.ship;
        }
        
        return true;
    }
    
    allSunk() {
        let sunk = true;
        
        for (let i = 0; i < this.#boardSize; ++i) {
            for (let j = 0; j < this.#boardSize; ++j) {
                if (this.#board[i][j] === Gameboard.tileTypes.ship) sunk = false;
            }
        }
        
        return sunk;
    }
    
    receiveAttack(row, column) {
        if (this.#board[row][column] === Gameboard.tileTypes.ship) {
            this.#board[row][column] = Gameboard.tileTypes.hit;
            return true;
        }
        
        this.#board[row][column] = Gameboard.tileTypes.missed;
        return false;
    }
    
    reset() {
        this.#ships = [];
        
        for (let i = 0; i < this.#boardSize; ++i) {
            for (let j = 0; j < this.#boardSize; ++j) {
                this.#board[i][j] = Gameboard.tileTypes.empty;
            }
        }
    }
    
    print() {
        for (let i = 0; i < this.#boardSize; ++i) {
            let arr = '';
            
            for (let j = 0; j < this.#boardSize; ++j) {
                arr += ([this.#board[i][j]]) + ' ';
            }
            console.log(arr);
        }
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/js/factories/player.js":
/*!************************************!*\
  !*** ./src/js/factories/player.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Player {
    #active = false;
    
    get active() {
        return this.#active;
    }
    
    set active(value) {
        this.#active = value;
    }
    
    attack(gameboard, targetX, targetY) {
        if (this.alreadyAttacked(gameboard, targetX, targetY)) return false;
        
        gameboard.receiveAttack(targetX, targetY);
        return true;
    }
    
    randomAttack(gameboard) {
        let targetX = Math.floor(Math.random() * 10);
        let targetY = Math.floor(Math.random() * 10);
        
        while (this.alreadyAttacked(gameboard, targetX, targetY)) {
            targetX = Math.floor(Math.random() * 10);
            targetY = Math.floor(Math.random() * 10);
        }
        
        gameboard.receiveAttack(targetX, targetY);
    }
    
    alreadyAttacked(gameboard, row, column) {
        if (gameboard.board[row][column] === gameboard.tileTypes.empty ||
            gameboard.board[row][column] === gameboard.tileTypes.ship) return false;
        return true;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/js/factories/render.js":
/*!************************************!*\
  !*** ./src/js/factories/render.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Render {
    #gameboard = {
        left: null,
        right: null
    }
    
    
    
    constructor(gameboardLeft, gameboardRight, cbLeft, cbRight) {
        this.#createGameboard(gameboardLeft, 'left', cbLeft);
        this.#createGameboard(gameboardRight, 'right', cbRight);
    }
    
    #createGameboard(gameboard, side, cb) {
        const gameboardDiv = document.querySelector('#gameboard-' + side);
        const size = gameboard.boardSize;
        
        this.#gameboard[side] = new Array(size);
        for (let i = 0; i < size; ++i)
            this.#gameboard[side][i] = new Array(size);
        
        for (let i = 0; i < size; ++i) {
            for (let j = 0; j < size; ++j) {
                this.#gameboard[side][i][j] = document.createElement('button');
                this.#gameboard[side][i][j].classList.add('tile');
                this.#gameboard[side][i][j].textContent = '';
                this.#gameboard[side][i][j].dataset.i = i;
                this.#gameboard[side][i][j].dataset.j = j;
                this.#gameboard[side][i][j].addEventListener('click', cb);
                
                gameboardDiv.appendChild(this.#gameboard[side][i][j]);
            }
        }
    }
    
    #renderGameboard(gameboard, side) {
        const gameboardDiv = document.querySelector('#gameboard-' + side);
        const size = gameboard.boardSize;
        
        for (let i = 0; i < size; ++i) {
            for (let j = 0; j < size; ++j) {
                this.#gameboard[side][i][j].style.backgroundColor = gameboard.tileColors[gameboard.board[i][j]];
            }
        }
    }
    
    renderGameboards(gameboardLeft, gameboardRight) {
        this.#renderGameboard(gameboardLeft, 'left');
        this.#renderGameboard(gameboardRight, 'right');
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Render);

/***/ }),

/***/ "./src/js/factories/ship.js":
/*!**********************************!*\
  !*** ./src/js/factories/ship.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class Ship {
    #hull;
    
    constructor(length) {
        this.#hull = new Array(length);
        for (let i = 0; i < length; ++i) this.#hull[i] = false;
    }
    
    hit(pos) {
        if (!(pos >= 0 && pos <= this.#hull.length)) return;
        this.#hull[pos] = true;
    }
    
    getLength() {
        return this.#hull.length;
    }
    
    getHull() {
        return this.#hull;
    }
    
    isSunk() {
        let isHit = true;
        this.#hull.forEach(hit => {
            if (!hit) isHit = false;
        });
        return isHit;
    }
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/img/github.png":
/*!****************************!*\
  !*** ./src/img/github.png ***!
  \****************************/
/***/ ((module) => {

module.exports = "data:image/png;base64,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";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _factories_ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./factories/ship */ "./src/js/factories/ship.js");
/* harmony import */ var _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./factories/gameboard */ "./src/js/factories/gameboard.js");
/* harmony import */ var _factories_render__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./factories/render */ "./src/js/factories/render.js");
/* harmony import */ var _factories_player__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./factories/player */ "./src/js/factories/player.js");
/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/index.css */ "./src/css/index.css");






class App {
    #gameboardLeft = null;
    #gameboardRight = null;
    #player1 = null;
    #player2 = null;
    #vsAI = true;
    #render = null;
    
    constructor() {
        this.#gameboardLeft = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.#gameboardRight = new _factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"]();
        this.#player1 = new _factories_player__WEBPACK_IMPORTED_MODULE_3__["default"]();
        this.#player2 = new _factories_player__WEBPACK_IMPORTED_MODULE_3__["default"];
        
        this.#gameboardLeft.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.carrier, 3, 0, false);
        this.#gameboardLeft.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.submarine, 1, 8, true);
        this.#gameboardLeft.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.destroyer, 7, 8, true);
        this.#gameboardLeft.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.patrolBoat, 7, 1, false);
        this.#gameboardLeft.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.battleship, 5, 5, true);
        
        this.#gameboardRight.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.carrier, 3, 0, false);
        this.#gameboardRight.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.submarine, 1, 8, true);
        this.#gameboardRight.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.destroyer, 7, 8, true);
        this.#gameboardRight.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.patrolBoat, 7, 1, false);
        this.#gameboardRight.addShip(_factories_gameboard__WEBPACK_IMPORTED_MODULE_1__["default"].shipTypes.battleship, 5, 5, true);
        
        this.#render = new _factories_render__WEBPACK_IMPORTED_MODULE_2__["default"](this.#gameboardLeft, this.#gameboardRight, 
            this.eventClickGameboardLeft.bind(this), this.eventClickGameboardRight.bind(this));
        this.render();
        
        this.#player1.active = true;
    }
    
    eventClickGameboardLeft(e) {
        
    }
    
    eventClickGameboardRight(e) {
        if (!this.#player1.active) return;
        
        this.#player1.attack(this.#gameboardRight, e.target.dataset.i, e.target.dataset.j);
        this.render();
        this.switchActivePlayer();
        
        if (!this.checkWin()) setTimeout(this.delayAIAttack.bind(this), 500);
    }
    
    delayAIAttack() {
        if (this.#vsAI) this.#player2.randomAttack(this.#gameboardLeft);
        this.render();
        this.switchActivePlayer();
        this.checkWin();
    }
    
    switchActivePlayer() {
        if (this.#player1.active) {
            this.#player1.active = false;
            this.#player2.active = true;
        }
        else{
            this.#player1.active = true;
            this.#player2.active = false;
        }
    }
    
    resetGameboards() {
        this.#gameboardLeft.reset();
        this.#gameboardRight.reset();
        document.querySelector('#win').textContent = '';
        this.render();
    }
    
    checkWin() {
        let win = false;
        
        if (this.#gameboardLeft.allSunk()) {
            // Player 2 victory
            document.querySelector('#win').textContent = 'You lost!';
            win = true;
        }
        else if (this.#gameboardRight.allSunk()) {
            // Player 1 victory
            document.querySelector('#win').textContent = 'You win!';
            win = true;
        }
        
        if (win) setTimeout(this.resetGameboards.bind(this), 1000);
        
        return win;
    }
    
    
    
    render() {
        this.#render.renderGameboards(this.#gameboardLeft, this.#gameboardRight);
    }
}

const app = new App();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2Nzcy9pbmRleC5jc3MiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9jc3MvaW5kZXguY3NzP2Y3ZWEiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvZmFjdG9yaWVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvZmFjdG9yaWVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvZmFjdG9yaWVzL3JlbmRlci5qcyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvanMvZmFjdG9yaWVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL25vbmNlIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9qcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiLi4vaW1nL2dpdGh1Yi5wbmdcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJodG1sIHtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG59XFxuXFxuYm9keSB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XFxuICAgIFxcbiAgICBwYWRkaW5nOiAwcHg7XFxuICAgIG1hcmdpbjogMHB4O1xcbiAgICBcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuI2Zvb3RlciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBcXG4gICAgZ2FwOiAxMHB4O1xcbiAgICBoZWlnaHQ6IDYwcHg7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgICBjb2xvcjogZ3JleTtcXG59XFxuXFxuI2Zvb3RlciBpbWcge1xcbiAgICBjb250ZW50OiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fICsgXCIpO1xcbiAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcXG59XFxuXFxuI2Zvb3RlciBpbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGdhcDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9jc3MvaW5kZXguY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLGdCQUFnQjs7SUFFaEIsWUFBWTtJQUNaLFdBQVc7O0lBRVgsYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLG1CQUFtQjs7SUFFbkIsU0FBUztJQUNULFlBQVk7SUFDWixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGdEQUFpQzs7SUFFakMsWUFBWTtJQUNaLGVBQWU7SUFDZixlQUFlO0lBQ2YseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLDZCQUE2QjtJQUM3QixtQkFBbUI7O0lBRW5CLFVBQVU7SUFDVixnQkFBZ0I7QUFDcEI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsdUNBQXVDO0lBQ3ZDLG9DQUFvQzs7SUFFcEMsdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksdUJBQXVCO0FBQzNCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHVCQUF1QjtJQUN2QixtQkFBbUI7O0lBRW5CLFlBQVk7SUFDWixXQUFXO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiaHRtbCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbmJvZHkge1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiAxMDAlO1xcbiAgICBtaW4taGVpZ2h0OiAxMDAlO1xcbiAgICBcXG4gICAgcGFkZGluZzogMHB4O1xcbiAgICBtYXJnaW46IDBweDtcXG4gICAgXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbiNmb290ZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGdhcDogMTBweDtcXG4gICAgaGVpZ2h0OiA2MHB4O1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgbWFyZ2luLXRvcDogYXV0bztcXG4gICAgY29sb3I6IGdyZXk7XFxufVxcblxcbiNmb290ZXIgaW1nIHtcXG4gICAgY29udGVudDogdXJsKCcuLi9pbWcvZ2l0aHViLnBuZycpO1xcbiAgICBcXG4gICAgaGVpZ2h0OiBhdXRvO1xcbiAgICBtYXgtd2lkdGg6IDI0cHg7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIC4ycztcXG59XFxuXFxuI2Zvb3RlciBpbWc6aG92ZXIge1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZVooMzYwZGVnKTtcXG59XFxuXFxuI2NvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWV2ZW5seTtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGdhcDogMTAwcHg7XFxuICAgIG1hcmdpbi10b3A6IGF1dG87XFxufVxcblxcbi5nYW1lYm9hcmQge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgNTBweCk7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCA1MHB4KTtcXG4gICAgXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4udGlsZSB7XFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbn1cXG5cXG4jY29udHJvbHMge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gICAgXFxuICAgIGhlaWdodDogNjBweDtcXG4gICAgd2lkdGg6IDEwMCU7XFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTtcblxuICAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gXCJcIjtcbiAgICAgIHZhciBuZWVkTGF5ZXIgPSB0eXBlb2YgaXRlbVs1XSAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG4gICAgICBpZiAobmVlZExheWVyKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTtcblxuICAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICBsaXN0LmkgPSBmdW5jdGlvbiBpKG1vZHVsZXMsIG1lZGlhLCBkZWR1cGUsIHN1cHBvcnRzLCBsYXllcikge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgdW5kZWZpbmVkXV07XG4gICAgfVxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgaWYgKHR5cGVvZiBsYXllciAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICBpZiAodHlwZW9mIGl0ZW1bNV0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzVdID0gbGF5ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG4gIGlmICghdXJsKSB7XG4gICAgcmV0dXJuIHVybDtcbiAgfVxuICB1cmwgPSBTdHJpbmcodXJsLl9fZXNNb2R1bGUgPyB1cmwuZGVmYXVsdCA6IHVybCk7XG5cbiAgLy8gSWYgdXJsIGlzIGFscmVhZHkgd3JhcHBlZCBpbiBxdW90ZXMsIHJlbW92ZSB0aGVtXG4gIGlmICgvXlsnXCJdLipbJ1wiXSQvLnRlc3QodXJsKSkge1xuICAgIHVybCA9IHVybC5zbGljZSgxLCAtMSk7XG4gIH1cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH1cblxuICAvLyBTaG91bGQgdXJsIGJlIHdyYXBwZWQ/XG4gIC8vIFNlZSBodHRwczovL2RyYWZ0cy5jc3N3Zy5vcmcvY3NzLXZhbHVlcy0zLyN1cmxzXG4gIGlmICgvW1wiJygpIFxcdFxcbl18KCUyMCkvLnRlc3QodXJsKSB8fCBvcHRpb25zLm5lZWRRdW90ZXMpIHtcbiAgICByZXR1cm4gXCJcXFwiXCIuY29uY2F0KHVybC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykucmVwbGFjZSgvXFxuL2csIFwiXFxcXG5cIiksIFwiXFxcIlwiKTtcbiAgfVxuICByZXR1cm4gdXJsO1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9pbmRleC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2luZGV4LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgU2hpcCBmcm9tIFwiLi9zaGlwXCI7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gICAgI2JvYXJkU2l6ZSA9IDEwO1xuICAgICNib2FyZDtcbiAgICBcbiAgICBzdGF0aWMgc2hpcFR5cGVzID0ge1xuICAgICAgICBjYXJyaWVyOiA1LFxuICAgICAgICBiYXR0bGVzaGlwOiA0LFxuICAgICAgICBkZXN0cm95ZXI6IDMsXG4gICAgICAgIHN1Ym1hcmluZTogMyxcbiAgICAgICAgcGF0cm9sQm9hdDogMlxuICAgIH1cbiAgICBcbiAgICBzdGF0aWMgdGlsZVR5cGVzID0ge1xuICAgICAgICBlbXB0eTogMCxcbiAgICAgICAgbWlzc2VkOiAxLFxuICAgICAgICBzaGlwOiAyLFxuICAgICAgICBoaXQ6IDNcbiAgICB9XG4gICAgXG4gICAgc3RhdGljIHRpbGVDb2xvcnMgPSBbJ3doaXRlJywgJ2dyZXknLCAnd2hpdGUnLCAncmVkJ107XG4gICAgXG4gICAgI3NoaXBzID0gW107XG4gICAgXG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuI2JvYXJkID0gbmV3IEFycmF5KHRoaXMuI2JvYXJkU2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jYm9hcmRTaXplOyArK2kpIHtcbiAgICAgICAgICAgIHRoaXMuI2JvYXJkW2ldID0gbmV3IEFycmF5KHRoaXMuI2JvYXJkU2l6ZSk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jYm9hcmRTaXplOyArK2kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jYm9hcmRTaXplOyArK2opIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFtpXVtqXSA9IEdhbWVib2FyZC50aWxlVHlwZXMuZW1wdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgZ2V0IHRpbGVDb2xvcnMoKSB7XG4gICAgICAgIHJldHVybiBHYW1lYm9hcmQudGlsZUNvbG9ycztcbiAgICB9XG4gICAgXG4gICAgZ2V0IHRpbGVUeXBlcygpIHtcbiAgICAgICAgcmV0dXJuIEdhbWVib2FyZC50aWxlVHlwZXM7XG4gICAgfVxuICAgIFxuICAgIGdldCBzaGlwVHlwZXMoKSB7XG4gICAgICAgIHJldHVybiBHYW1lYm9hcmQuc2hpcFR5cGVzO1xuICAgIH1cbiAgICBcbiAgICBnZXQgYm9hcmQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNib2FyZDtcbiAgICB9XG4gICAgXG4gICAgZ2V0IGJvYXJkU2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2JvYXJkU2l6ZTtcbiAgICB9XG4gICAgXG4gICAgI2ZpdHNPbkJvYXJkKGxlbmd0aCwgZGlyZWN0aW9uKSB7XG4gICAgICAgIGlmIChsZW5ndGggPD0gdGhpcy4jYm9hcmRTaXplIC0gZGlyZWN0aW9uICYmIGRpcmVjdGlvbiA+PSAwKSByZXR1cm4gdHJ1ZTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICBpc1BsYWNlbWVudFBvc3NpYmxlKGxlbmd0aCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpIHtcbiAgICAgICAgaWYgKGlzVmVydGljYWwgJiYgdGhpcy4jZml0c09uQm9hcmQobGVuZ3RoLCByb3cpKSB7XG4gICAgICAgICAgICBsZXQgZml0cyA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGogPSBjb2x1bW47XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gcm93OyBpIDwgbGVuZ3RoICsgcm93OyArK2kpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jYm9hcmRbaV1bal0gPT09IEdhbWVib2FyZC50aWxlVHlwZXMuc2hpcCkgZml0cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpdHM7XG4gICAgICAgIH0gZWxzZSBpZiAoIWlzVmVydGljYWwgJiYgdGhpcy4jZml0c09uQm9hcmQobGVuZ3RoLCBjb2x1bW4pKSB7XG4gICAgICAgICAgICBsZXQgZml0cyA9IHRydWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnN0IGkgPSByb3c7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gY29sdW1uOyBqIDwgbGVuZ3RoICsgY29sdW1uOyArK2opIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy4jYm9hcmRbaV1bal0gPT09IEdhbWVib2FyZC50aWxlVHlwZXMuc2hpcCkgZml0cyA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZpdHM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgXG4gICAgYWRkU2hpcChsZW5ndGgsIHJvdywgY29sdW1uLCBpc1ZlcnRpY2FsKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1BsYWNlbWVudFBvc3NpYmxlKGxlbmd0aCwgcm93LCBjb2x1bW4sIGlzVmVydGljYWwpKSByZXR1cm4gZmFsc2U7XG4gICAgICAgIFxuICAgICAgICAvLyBBZGQgc2hpcFxuICAgICAgICB0aGlzLiNzaGlwcy5wdXNoKG5ldyBTaGlwKGxlbmd0aCkpO1xuICAgICAgICBpZiAoaXNWZXJ0aWNhbCkge1xuICAgICAgICAgICAgY29uc3QgaiA9IGNvbHVtbjtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSByb3c7IGkgPCBsZW5ndGggKyByb3c7ICsraSlcbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFtpXVtqXSA9IEdhbWVib2FyZC50aWxlVHlwZXMuc2hpcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGkgPSByb3c7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gY29sdW1uOyBqIDwgbGVuZ3RoICsgY29sdW1uOyArK2opXG4gICAgICAgICAgICAgICAgdGhpcy4jYm9hcmRbaV1bal0gPSBHYW1lYm9hcmQudGlsZVR5cGVzLnNoaXA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBhbGxTdW5rKCkge1xuICAgICAgICBsZXQgc3VuayA9IHRydWU7XG4gICAgICAgIFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuI2JvYXJkU2l6ZTsgKytpKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IHRoaXMuI2JvYXJkU2l6ZTsgKytqKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuI2JvYXJkW2ldW2pdID09PSBHYW1lYm9hcmQudGlsZVR5cGVzLnNoaXApIHN1bmsgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIHN1bms7XG4gICAgfVxuICAgIFxuICAgIHJlY2VpdmVBdHRhY2socm93LCBjb2x1bW4pIHtcbiAgICAgICAgaWYgKHRoaXMuI2JvYXJkW3Jvd11bY29sdW1uXSA9PT0gR2FtZWJvYXJkLnRpbGVUeXBlcy5zaGlwKSB7XG4gICAgICAgICAgICB0aGlzLiNib2FyZFtyb3ddW2NvbHVtbl0gPSBHYW1lYm9hcmQudGlsZVR5cGVzLmhpdDtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICB0aGlzLiNib2FyZFtyb3ddW2NvbHVtbl0gPSBHYW1lYm9hcmQudGlsZVR5cGVzLm1pc3NlZDtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBcbiAgICByZXNldCgpIHtcbiAgICAgICAgdGhpcy4jc2hpcHMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jYm9hcmRTaXplOyArK2kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgdGhpcy4jYm9hcmRTaXplOyArK2opIHtcbiAgICAgICAgICAgICAgICB0aGlzLiNib2FyZFtpXVtqXSA9IEdhbWVib2FyZC50aWxlVHlwZXMuZW1wdHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcHJpbnQoKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy4jYm9hcmRTaXplOyArK2kpIHtcbiAgICAgICAgICAgIGxldCBhcnIgPSAnJztcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCB0aGlzLiNib2FyZFNpemU7ICsraikge1xuICAgICAgICAgICAgICAgIGFyciArPSAoW3RoaXMuI2JvYXJkW2ldW2pdXSkgKyAnICc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhcnIpO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7IiwiY2xhc3MgUGxheWVyIHtcbiAgICAjYWN0aXZlID0gZmFsc2U7XG4gICAgXG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2FjdGl2ZTtcbiAgICB9XG4gICAgXG4gICAgc2V0IGFjdGl2ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLiNhY3RpdmUgPSB2YWx1ZTtcbiAgICB9XG4gICAgXG4gICAgYXR0YWNrKGdhbWVib2FyZCwgdGFyZ2V0WCwgdGFyZ2V0WSkge1xuICAgICAgICBpZiAodGhpcy5hbHJlYWR5QXR0YWNrZWQoZ2FtZWJvYXJkLCB0YXJnZXRYLCB0YXJnZXRZKSkgcmV0dXJuIGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodGFyZ2V0WCwgdGFyZ2V0WSk7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBcbiAgICByYW5kb21BdHRhY2soZ2FtZWJvYXJkKSB7XG4gICAgICAgIGxldCB0YXJnZXRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICBsZXQgdGFyZ2V0WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlICh0aGlzLmFscmVhZHlBdHRhY2tlZChnYW1lYm9hcmQsIHRhcmdldFgsIHRhcmdldFkpKSB7XG4gICAgICAgICAgICB0YXJnZXRYID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTApO1xuICAgICAgICAgICAgdGFyZ2V0WSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgZ2FtZWJvYXJkLnJlY2VpdmVBdHRhY2sodGFyZ2V0WCwgdGFyZ2V0WSk7XG4gICAgfVxuICAgIFxuICAgIGFscmVhZHlBdHRhY2tlZChnYW1lYm9hcmQsIHJvdywgY29sdW1uKSB7XG4gICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dID09PSBnYW1lYm9hcmQudGlsZVR5cGVzLmVtcHR5IHx8XG4gICAgICAgICAgICBnYW1lYm9hcmQuYm9hcmRbcm93XVtjb2x1bW5dID09PSBnYW1lYm9hcmQudGlsZVR5cGVzLnNoaXApIHJldHVybiBmYWxzZTtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7IiwiY2xhc3MgUmVuZGVyIHtcbiAgICAjZ2FtZWJvYXJkID0ge1xuICAgICAgICBsZWZ0OiBudWxsLFxuICAgICAgICByaWdodDogbnVsbFxuICAgIH1cbiAgICBcbiAgICBcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihnYW1lYm9hcmRMZWZ0LCBnYW1lYm9hcmRSaWdodCwgY2JMZWZ0LCBjYlJpZ2h0KSB7XG4gICAgICAgIHRoaXMuI2NyZWF0ZUdhbWVib2FyZChnYW1lYm9hcmRMZWZ0LCAnbGVmdCcsIGNiTGVmdCk7XG4gICAgICAgIHRoaXMuI2NyZWF0ZUdhbWVib2FyZChnYW1lYm9hcmRSaWdodCwgJ3JpZ2h0JywgY2JSaWdodCk7XG4gICAgfVxuICAgIFxuICAgICNjcmVhdGVHYW1lYm9hcmQoZ2FtZWJvYXJkLCBzaWRlLCBjYikge1xuICAgICAgICBjb25zdCBnYW1lYm9hcmREaXYgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZWJvYXJkLScgKyBzaWRlKTtcbiAgICAgICAgY29uc3Qgc2l6ZSA9IGdhbWVib2FyZC5ib2FyZFNpemU7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiNnYW1lYm9hcmRbc2lkZV0gPSBuZXcgQXJyYXkoc2l6ZSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgc2l6ZTsgKytpKVxuICAgICAgICAgICAgdGhpcy4jZ2FtZWJvYXJkW3NpZGVdW2ldID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jZ2FtZWJvYXJkW3NpZGVdW2ldW2pdID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgICAgICAgICAgdGhpcy4jZ2FtZWJvYXJkW3NpZGVdW2ldW2pdLmNsYXNzTGlzdC5hZGQoJ3RpbGUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLiNnYW1lYm9hcmRbc2lkZV1baV1bal0udGV4dENvbnRlbnQgPSAnJztcbiAgICAgICAgICAgICAgICB0aGlzLiNnYW1lYm9hcmRbc2lkZV1baV1bal0uZGF0YXNldC5pID0gaTtcbiAgICAgICAgICAgICAgICB0aGlzLiNnYW1lYm9hcmRbc2lkZV1baV1bal0uZGF0YXNldC5qID0gajtcbiAgICAgICAgICAgICAgICB0aGlzLiNnYW1lYm9hcmRbc2lkZV1baV1bal0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBjYik7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgZ2FtZWJvYXJkRGl2LmFwcGVuZENoaWxkKHRoaXMuI2dhbWVib2FyZFtzaWRlXVtpXVtqXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgI3JlbmRlckdhbWVib2FyZChnYW1lYm9hcmQsIHNpZGUpIHtcbiAgICAgICAgY29uc3QgZ2FtZWJvYXJkRGl2ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2dhbWVib2FyZC0nICsgc2lkZSk7XG4gICAgICAgIGNvbnN0IHNpemUgPSBnYW1lYm9hcmQuYm9hcmRTaXplO1xuICAgICAgICBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzaXplOyArK2kpIHtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgc2l6ZTsgKytqKSB7XG4gICAgICAgICAgICAgICAgdGhpcy4jZ2FtZWJvYXJkW3NpZGVdW2ldW2pdLnN0eWxlLmJhY2tncm91bmRDb2xvciA9IGdhbWVib2FyZC50aWxlQ29sb3JzW2dhbWVib2FyZC5ib2FyZFtpXVtqXV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVuZGVyR2FtZWJvYXJkcyhnYW1lYm9hcmRMZWZ0LCBnYW1lYm9hcmRSaWdodCkge1xuICAgICAgICB0aGlzLiNyZW5kZXJHYW1lYm9hcmQoZ2FtZWJvYXJkTGVmdCwgJ2xlZnQnKTtcbiAgICAgICAgdGhpcy4jcmVuZGVyR2FtZWJvYXJkKGdhbWVib2FyZFJpZ2h0LCAncmlnaHQnKTtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFJlbmRlcjsiLCJjbGFzcyBTaGlwIHtcbiAgICAjaHVsbDtcbiAgICBcbiAgICBjb25zdHJ1Y3RvcihsZW5ndGgpIHtcbiAgICAgICAgdGhpcy4jaHVsbCA9IG5ldyBBcnJheShsZW5ndGgpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgKytpKSB0aGlzLiNodWxsW2ldID0gZmFsc2U7XG4gICAgfVxuICAgIFxuICAgIGhpdChwb3MpIHtcbiAgICAgICAgaWYgKCEocG9zID49IDAgJiYgcG9zIDw9IHRoaXMuI2h1bGwubGVuZ3RoKSkgcmV0dXJuO1xuICAgICAgICB0aGlzLiNodWxsW3Bvc10gPSB0cnVlO1xuICAgIH1cbiAgICBcbiAgICBnZXRMZW5ndGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLiNodWxsLmxlbmd0aDtcbiAgICB9XG4gICAgXG4gICAgZ2V0SHVsbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuI2h1bGw7XG4gICAgfVxuICAgIFxuICAgIGlzU3VuaygpIHtcbiAgICAgICAgbGV0IGlzSGl0ID0gdHJ1ZTtcbiAgICAgICAgdGhpcy4jaHVsbC5mb3JFYWNoKGhpdCA9PiB7XG4gICAgICAgICAgICBpZiAoIWhpdCkgaXNIaXQgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiBpc0hpdDtcbiAgICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsIl9fd2VicGFja19yZXF1aXJlX18ubmMgPSB1bmRlZmluZWQ7IiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9mYWN0b3JpZXMvc2hpcCc7XG5pbXBvcnQgR2FtZWJvYXJkIGZyb20gJy4vZmFjdG9yaWVzL2dhbWVib2FyZCc7XG5pbXBvcnQgUmVuZGVyIGZyb20gJy4vZmFjdG9yaWVzL3JlbmRlcic7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vZmFjdG9yaWVzL3BsYXllcic7XG5pbXBvcnQgJy4uL2Nzcy9pbmRleC5jc3MnO1xuXG5jbGFzcyBBcHAge1xuICAgICNnYW1lYm9hcmRMZWZ0ID0gbnVsbDtcbiAgICAjZ2FtZWJvYXJkUmlnaHQgPSBudWxsO1xuICAgICNwbGF5ZXIxID0gbnVsbDtcbiAgICAjcGxheWVyMiA9IG51bGw7XG4gICAgI3ZzQUkgPSB0cnVlO1xuICAgICNyZW5kZXIgPSBudWxsO1xuICAgIFxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmRMZWZ0ID0gbmV3IEdhbWVib2FyZCgpO1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmRSaWdodCA9IG5ldyBHYW1lYm9hcmQoKTtcbiAgICAgICAgdGhpcy4jcGxheWVyMSA9IG5ldyBQbGF5ZXIoKTtcbiAgICAgICAgdGhpcy4jcGxheWVyMiA9IG5ldyBQbGF5ZXI7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiNnYW1lYm9hcmRMZWZ0LmFkZFNoaXAoR2FtZWJvYXJkLnNoaXBUeXBlcy5jYXJyaWVyLCAzLCAwLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZExlZnQuYWRkU2hpcChHYW1lYm9hcmQuc2hpcFR5cGVzLnN1Ym1hcmluZSwgMSwgOCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZExlZnQuYWRkU2hpcChHYW1lYm9hcmQuc2hpcFR5cGVzLmRlc3Ryb3llciwgNywgOCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZExlZnQuYWRkU2hpcChHYW1lYm9hcmQuc2hpcFR5cGVzLnBhdHJvbEJvYXQsIDcsIDEsIGZhbHNlKTtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkTGVmdC5hZGRTaGlwKEdhbWVib2FyZC5zaGlwVHlwZXMuYmF0dGxlc2hpcCwgNSwgNSwgdHJ1ZSk7XG4gICAgICAgIFxuICAgICAgICB0aGlzLiNnYW1lYm9hcmRSaWdodC5hZGRTaGlwKEdhbWVib2FyZC5zaGlwVHlwZXMuY2FycmllciwgMywgMCwgZmFsc2UpO1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmRSaWdodC5hZGRTaGlwKEdhbWVib2FyZC5zaGlwVHlwZXMuc3VibWFyaW5lLCAxLCA4LCB0cnVlKTtcbiAgICAgICAgdGhpcy4jZ2FtZWJvYXJkUmlnaHQuYWRkU2hpcChHYW1lYm9hcmQuc2hpcFR5cGVzLmRlc3Ryb3llciwgNywgOCwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZFJpZ2h0LmFkZFNoaXAoR2FtZWJvYXJkLnNoaXBUeXBlcy5wYXRyb2xCb2F0LCA3LCAxLCBmYWxzZSk7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZFJpZ2h0LmFkZFNoaXAoR2FtZWJvYXJkLnNoaXBUeXBlcy5iYXR0bGVzaGlwLCA1LCA1LCB0cnVlKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuI3JlbmRlciA9IG5ldyBSZW5kZXIodGhpcy4jZ2FtZWJvYXJkTGVmdCwgdGhpcy4jZ2FtZWJvYXJkUmlnaHQsIFxuICAgICAgICAgICAgdGhpcy5ldmVudENsaWNrR2FtZWJvYXJkTGVmdC5iaW5kKHRoaXMpLCB0aGlzLmV2ZW50Q2xpY2tHYW1lYm9hcmRSaWdodC5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgXG4gICAgICAgIHRoaXMuI3BsYXllcjEuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgXG4gICAgZXZlbnRDbGlja0dhbWVib2FyZExlZnQoZSkge1xuICAgICAgICBcbiAgICB9XG4gICAgXG4gICAgZXZlbnRDbGlja0dhbWVib2FyZFJpZ2h0KGUpIHtcbiAgICAgICAgaWYgKCF0aGlzLiNwbGF5ZXIxLmFjdGl2ZSkgcmV0dXJuO1xuICAgICAgICBcbiAgICAgICAgdGhpcy4jcGxheWVyMS5hdHRhY2sodGhpcy4jZ2FtZWJvYXJkUmlnaHQsIGUudGFyZ2V0LmRhdGFzZXQuaSwgZS50YXJnZXQuZGF0YXNldC5qKTtcbiAgICAgICAgdGhpcy5yZW5kZXIoKTtcbiAgICAgICAgdGhpcy5zd2l0Y2hBY3RpdmVQbGF5ZXIoKTtcbiAgICAgICAgXG4gICAgICAgIGlmICghdGhpcy5jaGVja1dpbigpKSBzZXRUaW1lb3V0KHRoaXMuZGVsYXlBSUF0dGFjay5iaW5kKHRoaXMpLCA1MDApO1xuICAgIH1cbiAgICBcbiAgICBkZWxheUFJQXR0YWNrKCkge1xuICAgICAgICBpZiAodGhpcy4jdnNBSSkgdGhpcy4jcGxheWVyMi5yYW5kb21BdHRhY2sodGhpcy4jZ2FtZWJvYXJkTGVmdCk7XG4gICAgICAgIHRoaXMucmVuZGVyKCk7XG4gICAgICAgIHRoaXMuc3dpdGNoQWN0aXZlUGxheWVyKCk7XG4gICAgICAgIHRoaXMuY2hlY2tXaW4oKTtcbiAgICB9XG4gICAgXG4gICAgc3dpdGNoQWN0aXZlUGxheWVyKCkge1xuICAgICAgICBpZiAodGhpcy4jcGxheWVyMS5hY3RpdmUpIHtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllcjEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLiNwbGF5ZXIyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZXtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllcjEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuI3BsYXllcjIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgcmVzZXRHYW1lYm9hcmRzKCkge1xuICAgICAgICB0aGlzLiNnYW1lYm9hcmRMZWZ0LnJlc2V0KCk7XG4gICAgICAgIHRoaXMuI2dhbWVib2FyZFJpZ2h0LnJlc2V0KCk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN3aW4nKS50ZXh0Q29udGVudCA9ICcnO1xuICAgICAgICB0aGlzLnJlbmRlcigpO1xuICAgIH1cbiAgICBcbiAgICBjaGVja1dpbigpIHtcbiAgICAgICAgbGV0IHdpbiA9IGZhbHNlO1xuICAgICAgICBcbiAgICAgICAgaWYgKHRoaXMuI2dhbWVib2FyZExlZnQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAvLyBQbGF5ZXIgMiB2aWN0b3J5XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luJykudGV4dENvbnRlbnQgPSAnWW91IGxvc3QhJztcbiAgICAgICAgICAgIHdpbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodGhpcy4jZ2FtZWJvYXJkUmlnaHQuYWxsU3VuaygpKSB7XG4gICAgICAgICAgICAvLyBQbGF5ZXIgMSB2aWN0b3J5XG4gICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjd2luJykudGV4dENvbnRlbnQgPSAnWW91IHdpbiEnO1xuICAgICAgICAgICAgd2luID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgaWYgKHdpbikgc2V0VGltZW91dCh0aGlzLnJlc2V0R2FtZWJvYXJkcy5iaW5kKHRoaXMpLCAxMDAwKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiB3aW47XG4gICAgfVxuICAgIFxuICAgIFxuICAgIFxuICAgIHJlbmRlcigpIHtcbiAgICAgICAgdGhpcy4jcmVuZGVyLnJlbmRlckdhbWVib2FyZHModGhpcy4jZ2FtZWJvYXJkTGVmdCwgdGhpcy4jZ2FtZWJvYXJkUmlnaHQpO1xuICAgIH1cbn1cblxuY29uc3QgYXBwID0gbmV3IEFwcCgpOyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==