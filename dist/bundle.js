/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n#main {\n  background-color: rgb(219, 231, 245);\n  height: 85vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10em;\n}\n\n#input-container,\n#output-container {\n  background-color: rgb(230, 238, 248);\n  box-shadow: 0 0 20px 1px rgb(148, 174, 206);\n  border-radius: 3em;\n  width: 23em;\n  display: flex;\n  font-family: \"Mukta Malar\", Arial;\n}\n\n#input-container {\n  height: 10em;\n}\n\n#output-container {\n  height: 15em;\n}\n\n.city-field {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#input-span {\n  width: 70%;\n  font-size: 1.2em;\n  color: #485574;\n}\n\n#field-container {\n  width: 70%;\n  display: flex;\n}\n\n#input-field {\n  color: #485574;\n  width: 85%;\n  white-space: nowrap;\n  border: 2px solid #99a3ba;\n  font-size: 1em;\n  border-bottom-left-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n#input-field:focus {\n  outline: none;\n  border: 2px solid #5984e9;\n}\n\n#input-button {\n  width: 15%;\n  padding: 0;\n  margin: 0;\n  border: 2px solid #99a3ba;\n  border-left: none;\n  background-color: #c8d6f5;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n#input-button:hover {\n  border: 2px solid #5984e9;\n  cursor: pointer;\n}\n\n#toggle-container {\n  display: flex;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 24px;\n}\n\n.slider {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #9dbfdb;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: 0.4s;\n  -webkit-transition: 0.4s;\n  border-radius: 34px;\n}\n\ninput:checked + .slider {\n  background-color: #9dbfdb;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #9dbfdb;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translate(12px);\n  -ms-transform: translate(12px);\n  transform: translate(12px);\n}\n\n.toggle-label {\n  margin: 0;\n  padding: 3px;\n}\n\n#output {\n  display: flex;\n  padding: 2em;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  color: #374361;\n}\n\n#left-and-right {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  text-align: center;\n  padding: 20px;\n  margin: 0;\n}\n\n#city-name {\n  font-size: 42px;\n  padding: 0;\n  margin: 0;\n}\n\n#left-output,\n#right-output {\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#min-max-container {\n  display: flex;\n  justify-content: space-between;\n  font-size: 10px;\n  gap: 10px;\n}\n\n#min-temp,\n#max-temp {\n  padding: 0;\n  margin: 0;\n}\n\n#temp {\n  font-size: 42px;\n  margin: 0;\n}\n\n#feels-like {\n  font-size: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n#icon {\n  height: 60px;\n  width: 60px;\n}\n\n#description {\n  font-size: 14px;\n  padding: 0;\n  margin: 0;\n}\n\n#humidity {\n  font-size: 10px;\n  margin: 0;\n}\n\n#title {\n  background-color: rgb(103, 122, 141);\n  height: 15vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 46px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgb(25, 44, 63);\n}\n", "",{"version":3,"sources":["webpack://./src/style.css"],"names":[],"mappings":"AAAA;EACE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;;EAEE,oCAAoC;EACpC,2CAA2C;EAC3C,kBAAkB;EAClB,WAAW;EACX,aAAa;EACb,iCAAiC;AACnC;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,YAAY;AACd;;AAEA;EACE,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;EACnB,SAAS;AACX;;AAEA;EACE,UAAU;EACV,gBAAgB;EAChB,cAAc;AAChB;;AAEA;EACE,UAAU;EACV,aAAa;AACf;;AAEA;EACE,cAAc;EACd,UAAU;EACV,mBAAmB;EACnB,yBAAyB;EACzB,cAAc;EACd,8BAA8B;EAC9B,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,yBAAyB;AAC3B;;AAEA;EACE,UAAU;EACV,UAAU;EACV,SAAS;EACT,yBAAyB;EACzB,iBAAiB;EACjB,yBAAyB;EACzB,4BAA4B;EAC5B,+BAA+B;AACjC;;AAEA;EACE,yBAAyB;EACzB,eAAe;AACjB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;EACV,QAAQ;EACR,SAAS;AACX;;AAEA;EACE,kBAAkB;EAClB,qBAAqB;EACrB,WAAW;EACX,YAAY;AACd;;AAEA;EACE,eAAe;EACf,kBAAkB;EAClB,MAAM;EACN,OAAO;EACP,QAAQ;EACR,SAAS;EACT,yBAAyB;EACzB,wBAAwB;EACxB,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,YAAY;EACZ,WAAW;EACX,SAAS;EACT,WAAW;EACX,uBAAuB;EACvB,gBAAgB;EAChB,wBAAwB;EACxB,mBAAmB;AACrB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE,2BAA2B;AAC7B;;AAEA;EACE,kCAAkC;EAClC,8BAA8B;EAC9B,0BAA0B;AAC5B;;AAEA;EACE,SAAS;EACT,YAAY;AACd;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,WAAW;EACX,sBAAsB;EACtB,mBAAmB;EACnB,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,WAAW;EACX,8BAA8B;EAC9B,kBAAkB;EAClB,aAAa;EACb,SAAS;AACX;;AAEA;EACE,eAAe;EACf,UAAU;EACV,SAAS;AACX;;AAEA;;EAEE,UAAU;EACV,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,8BAA8B;EAC9B,eAAe;EACf,SAAS;AACX;;AAEA;;EAEE,UAAU;EACV,SAAS;AACX;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,eAAe;EACf,UAAU;EACV,SAAS;AACX;;AAEA;EACE,YAAY;EACZ,WAAW;AACb;;AAEA;EACE,eAAe;EACf,UAAU;EACV,SAAS;AACX;;AAEA;EACE,eAAe;EACf,SAAS;AACX;;AAEA;EACE,oCAAoC;EACpC,YAAY;EACZ,WAAW;EACX,aAAa;EACb,uBAAuB;EACvB,mBAAmB;EACnB,eAAe;EACf,yCAAyC;EACzC,sBAAsB;AACxB","sourcesContent":["* {\n  box-sizing: border-box;\n}\n\nbody {\n  margin: 0;\n}\n\n#main {\n  background-color: rgb(219, 231, 245);\n  height: 85vh;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 10em;\n}\n\n#input-container,\n#output-container {\n  background-color: rgb(230, 238, 248);\n  box-shadow: 0 0 20px 1px rgb(148, 174, 206);\n  border-radius: 3em;\n  width: 23em;\n  display: flex;\n  font-family: \"Mukta Malar\", Arial;\n}\n\n#input-container {\n  height: 10em;\n}\n\n#output-container {\n  height: 15em;\n}\n\n.city-field {\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  gap: 20px;\n}\n\n#input-span {\n  width: 70%;\n  font-size: 1.2em;\n  color: #485574;\n}\n\n#field-container {\n  width: 70%;\n  display: flex;\n}\n\n#input-field {\n  color: #485574;\n  width: 85%;\n  white-space: nowrap;\n  border: 2px solid #99a3ba;\n  font-size: 1em;\n  border-bottom-left-radius: 5px;\n  border-top-left-radius: 5px;\n}\n\n#input-field:focus {\n  outline: none;\n  border: 2px solid #5984e9;\n}\n\n#input-button {\n  width: 15%;\n  padding: 0;\n  margin: 0;\n  border: 2px solid #99a3ba;\n  border-left: none;\n  background-color: #c8d6f5;\n  border-top-right-radius: 5px;\n  border-bottom-right-radius: 5px;\n}\n\n#input-button:hover {\n  border: 2px solid #5984e9;\n  cursor: pointer;\n}\n\n#toggle-container {\n  display: flex;\n}\n\n.switch input {\n  opacity: 0;\n  width: 0;\n  height: 0;\n}\n\n.switch {\n  position: relative;\n  display: inline-block;\n  width: 36px;\n  height: 24px;\n}\n\n.slider {\n  cursor: pointer;\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #9dbfdb;\n  -webkit-transition: 0.4s;\n  transition: 0.4s;\n  border-radius: 34px;\n}\n\n.slider:before {\n  position: absolute;\n  content: \"\";\n  height: 20px;\n  width: 20px;\n  left: 2px;\n  bottom: 2px;\n  background-color: white;\n  transition: 0.4s;\n  -webkit-transition: 0.4s;\n  border-radius: 34px;\n}\n\ninput:checked + .slider {\n  background-color: #9dbfdb;\n}\n\ninput:focus + .slider {\n  box-shadow: 0 0 1px #9dbfdb;\n}\n\ninput:checked + .slider:before {\n  -webkit-transform: translate(12px);\n  -ms-transform: translate(12px);\n  transform: translate(12px);\n}\n\n.toggle-label {\n  margin: 0;\n  padding: 3px;\n}\n\n#output {\n  display: flex;\n  padding: 2em;\n  width: 100%;\n  flex-direction: column;\n  align-items: center;\n  color: #374361;\n}\n\n#left-and-right {\n  display: flex;\n  width: 100%;\n  justify-content: space-between;\n  text-align: center;\n  padding: 20px;\n  margin: 0;\n}\n\n#city-name {\n  font-size: 42px;\n  padding: 0;\n  margin: 0;\n}\n\n#left-output,\n#right-output {\n  width: 45%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n#min-max-container {\n  display: flex;\n  justify-content: space-between;\n  font-size: 10px;\n  gap: 10px;\n}\n\n#min-temp,\n#max-temp {\n  padding: 0;\n  margin: 0;\n}\n\n#temp {\n  font-size: 42px;\n  margin: 0;\n}\n\n#feels-like {\n  font-size: 10px;\n  padding: 0;\n  margin: 0;\n}\n\n#icon {\n  height: 60px;\n  width: 60px;\n}\n\n#description {\n  font-size: 14px;\n  padding: 0;\n  margin: 0;\n}\n\n#humidity {\n  font-size: 10px;\n  margin: 0;\n}\n\n#title {\n  background-color: rgb(103, 122, 141);\n  height: 15vh;\n  width: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 46px;\n  font-family: Arial, Helvetica, sans-serif;\n  color: rgb(25, 44, 63);\n}\n"],"sourceRoot":""}]);
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
  var list = []; // return the list of modules as css string

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
  }; // import a list of modules into the list


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
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


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

/***/ "./src/weather.js":
/*!************************!*\
  !*** ./src/weather.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const key = "387ddd18a77c5487de024e38681b0ecc";

async function getWeatherJSON(location) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${key}`
  );

  console.log(response);

  const json = await response.json();
  //   console.log(json);
  const weather = {
    name: json.name,
    main: json.weather[0].main,
    description: json.weather[0].description,
    temp: json.main.temp,
    feelsLike: json.main.feels_like,
    tempMin: json.main.temp_min,
    tempMax: json.main.temp_max,
    pressure: json.main.pressure,
    humidity: json.main.humidity,
    icon: json.weather[0].icon,
  };
  //   console.log(weather);
  return weather;
}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getWeatherJSON);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/style.css");
/* harmony import */ var _weather__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./weather */ "./src/weather.js");



// async function getWeather(loc) {
//   const weather = await getWeatherJSON(loc);
//   console.log(weather);
// }

function convertTemp(kelvin, toCelcius) {
  if (toCelcius) {
    return `${Math.round(kelvin - 273.15)}ºC`;
  }
  return `${Math.round((kelvin - 273.15) * 1.8 + 32)}ºF`;
}

async function updateWeather(loc) {
  const isCelcius = document.getElementById("temp-switch").checked;

  const name = document.getElementById("city-name");
  const temp = document.getElementById("temp");
  const min = document.getElementById("min-temp");
  const max = document.getElementById("max-temp");
  const feels = document.getElementById("feels-like");
  const description = document.getElementById("description");
  const icon = document.getElementById("icon");
  const humidity = document.getElementById("humidity");

  try {
    const weather = await (0,_weather__WEBPACK_IMPORTED_MODULE_1__["default"])(loc);

    console.log(weather);

    name.innerText = weather.name;
    temp.innerText = convertTemp(weather.temp, isCelcius);
    min.innerText = `Min ${convertTemp(weather.tempMin, isCelcius)}`;
    max.innerText = `Max: ${convertTemp(weather.tempMax, isCelcius)}`;
    feels.innerText = `Feels like: ${convertTemp(
      weather.feelsLike,
      isCelcius
    )}`;
    description.innerText = weather.description;
    humidity.innerText = `Humidity: ${weather.humidity}`;
    icon.src = `https://openweathermap.org/img/wn/${weather.icon}@2x.png`;
  } catch (e) {
    alert("Invalid city name");
    throw e;
  }

  // if (weather === undefined) {
  //   alert("Invalid name!");
  //   return;
  // }
}

const button = document.getElementById("input-button");
const input = document.getElementById("input-field");
button.addEventListener("click", () => {
  updateWeather(input.value);
});

// console.log(getWeatherJSON("Porto Alegre"));

// getWeather("Porto Alegre");

// const json = getWeatherJSON("Porto Alegre");
// console.log(json.then((x) => console.log(x)));

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7O0FDTnFCO0FBQ2tCOztBQUV2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsY0FBYyw0QkFBNEI7QUFDMUM7QUFDQSxZQUFZLHlDQUF5QztBQUNyRDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsb0RBQWM7O0FBRXhDOztBQUVBO0FBQ0E7QUFDQSwyQkFBMkIsd0NBQXdDO0FBQ25FLDRCQUE0Qix3Q0FBd0M7QUFDcEUscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQSxzQ0FBc0MsaUJBQWlCO0FBQ3ZELG9EQUFvRCxhQUFhO0FBQ2pFLElBQUk7QUFDSjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7O0FBRUE7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL29kaW4td2VhdGhlci8uL3NyYy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvc3R5bGUuY3NzPzcxNjMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL29kaW4td2VhdGhlci8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvLi9zcmMvd2VhdGhlci5qcyIsIndlYnBhY2s6Ly9vZGluLXdlYXRoZXIvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL29kaW4td2VhdGhlci93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vb2Rpbi13ZWF0aGVyLy4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI21haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjMxLCAyNDUpO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBlbTtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lcixcXG4jb3V0cHV0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzgsIDI0OCk7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAxcHggcmdiKDE0OCwgMTc0LCAyMDYpO1xcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xcbiAgd2lkdGg6IDIzZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWt0YSBNYWxhclxcXCIsIEFyaWFsO1xcbn1cXG5cXG4jaW5wdXQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTBlbTtcXG59XFxuXFxuI291dHB1dC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxNWVtO1xcbn1cXG5cXG4uY2l0eS1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaW5wdXQtc3BhbiB7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjNDg1NTc0O1xcbn1cXG5cXG4jZmllbGQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaW5wdXQtZmllbGQge1xcbiAgY29sb3I6ICM0ODU1NzQ7XFxuICB3aWR0aDogODUlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OWEzYmE7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2lucHV0LWZpZWxkOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTk4NGU5O1xcbn1cXG5cXG4jaW5wdXQtYnV0dG9uIHtcXG4gIHdpZHRoOiAxNSU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzk5YTNiYTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZDZmNTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4jaW5wdXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1OTg0ZTk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2dnbGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZGJmZGI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGxlZnQ6IDJweDtcXG4gIGJvdHRvbTogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlkYmZkYjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzlkYmZkYjtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4KTtcXG59XFxuXFxuLnRvZ2dsZS1sYWJlbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbiNvdXRwdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzM3NDM2MTtcXG59XFxuXFxuI2xlZnQtYW5kLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjaXR5LW5hbWUge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2xlZnQtb3V0cHV0LFxcbiNyaWdodC1vdXRwdXQge1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWluLW1heC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI21pbi10ZW1wLFxcbiNtYXgtdGVtcCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jdGVtcCB7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNmZWVscy1saWtlIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNpY29uIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2h1bWlkaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEyMiwgMTQxKTtcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigyNSwgNDQsIDYzKTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLFNBQVM7QUFDWDs7QUFFQTtFQUNFLG9DQUFvQztFQUNwQyxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsU0FBUztBQUNYOztBQUVBOztFQUVFLG9DQUFvQztFQUNwQywyQ0FBMkM7RUFDM0Msa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0VBQ2IsaUNBQWlDO0FBQ25DOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsWUFBWTtBQUNkOztBQUVBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxVQUFVO0VBQ1YsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztFQUNkLFVBQVU7RUFDVixtQkFBbUI7RUFDbkIseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCw4QkFBOEI7RUFDOUIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFLFVBQVU7RUFDVixVQUFVO0VBQ1YsU0FBUztFQUNULHlCQUF5QjtFQUN6QixpQkFBaUI7RUFDakIseUJBQXlCO0VBQ3pCLDRCQUE0QjtFQUM1QiwrQkFBK0I7QUFDakM7O0FBRUE7RUFDRSx5QkFBeUI7RUFDekIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsU0FBUztBQUNYOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLHFCQUFxQjtFQUNyQixXQUFXO0VBQ1gsWUFBWTtBQUNkOztBQUVBO0VBQ0UsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixNQUFNO0VBQ04sT0FBTztFQUNQLFFBQVE7RUFDUixTQUFTO0VBQ1QseUJBQXlCO0VBQ3pCLHdCQUF3QjtFQUN4QixnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7RUFDVCxXQUFXO0VBQ1gsdUJBQXVCO0VBQ3ZCLGdCQUFnQjtFQUNoQix3QkFBd0I7RUFDeEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0UsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLDhCQUE4QjtFQUM5QiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixXQUFXO0VBQ1gsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFdBQVc7RUFDWCw4QkFBOEI7RUFDOUIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFNBQVM7QUFDWDs7QUFFQTs7RUFFRSxVQUFVO0VBQ1YsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBOztFQUVFLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztBQUNiOztBQUVBO0VBQ0UsZUFBZTtFQUNmLFVBQVU7RUFDVixTQUFTO0FBQ1g7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsU0FBUztBQUNYOztBQUVBO0VBQ0Usb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLHlDQUF5QztFQUN6QyxzQkFBc0I7QUFDeEJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5cXG5ib2R5IHtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI21haW4ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDIxOSwgMjMxLCAyNDUpO1xcbiAgaGVpZ2h0OiA4NXZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGdhcDogMTBlbTtcXG59XFxuXFxuI2lucHV0LWNvbnRhaW5lcixcXG4jb3V0cHV0LWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjMwLCAyMzgsIDI0OCk7XFxuICBib3gtc2hhZG93OiAwIDAgMjBweCAxcHggcmdiKDE0OCwgMTc0LCAyMDYpO1xcbiAgYm9yZGVyLXJhZGl1czogM2VtO1xcbiAgd2lkdGg6IDIzZW07XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJNdWt0YSBNYWxhclxcXCIsIEFyaWFsO1xcbn1cXG5cXG4jaW5wdXQtY29udGFpbmVyIHtcXG4gIGhlaWdodDogMTBlbTtcXG59XFxuXFxuI291dHB1dC1jb250YWluZXIge1xcbiAgaGVpZ2h0OiAxNWVtO1xcbn1cXG5cXG4uY2l0eS1maWVsZCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ2FwOiAyMHB4O1xcbn1cXG5cXG4jaW5wdXQtc3BhbiB7XFxuICB3aWR0aDogNzAlO1xcbiAgZm9udC1zaXplOiAxLjJlbTtcXG4gIGNvbG9yOiAjNDg1NTc0O1xcbn1cXG5cXG4jZmllbGQtY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4jaW5wdXQtZmllbGQge1xcbiAgY29sb3I6ICM0ODU1NzQ7XFxuICB3aWR0aDogODUlO1xcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM5OWEzYmE7XFxuICBmb250LXNpemU6IDFlbTtcXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDVweDtcXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IDVweDtcXG59XFxuXFxuI2lucHV0LWZpZWxkOmZvY3VzIHtcXG4gIG91dGxpbmU6IG5vbmU7XFxuICBib3JkZXI6IDJweCBzb2xpZCAjNTk4NGU5O1xcbn1cXG5cXG4jaW5wdXQtYnV0dG9uIHtcXG4gIHdpZHRoOiAxNSU7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgYm9yZGVyOiAycHggc29saWQgIzk5YTNiYTtcXG4gIGJvcmRlci1sZWZ0OiBub25lO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2M4ZDZmNTtcXG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA1cHg7XFxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogNXB4O1xcbn1cXG5cXG4jaW5wdXQtYnV0dG9uOmhvdmVyIHtcXG4gIGJvcmRlcjogMnB4IHNvbGlkICM1OTg0ZTk7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbiN0b2dnbGUtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5zd2l0Y2ggaW5wdXQge1xcbiAgb3BhY2l0eTogMDtcXG4gIHdpZHRoOiAwO1xcbiAgaGVpZ2h0OiAwO1xcbn1cXG5cXG4uc3dpdGNoIHtcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIHdpZHRoOiAzNnB4O1xcbiAgaGVpZ2h0OiAyNHB4O1xcbn1cXG5cXG4uc2xpZGVyIHtcXG4gIGN1cnNvcjogcG9pbnRlcjtcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gIHRvcDogMDtcXG4gIGxlZnQ6IDA7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMDtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM5ZGJmZGI7XFxuICAtd2Via2l0LXRyYW5zaXRpb246IDAuNHM7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuLnNsaWRlcjpiZWZvcmUge1xcbiAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgY29udGVudDogXFxcIlxcXCI7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICB3aWR0aDogMjBweDtcXG4gIGxlZnQ6IDJweDtcXG4gIGJvdHRvbTogMnB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICB0cmFuc2l0aW9uOiAwLjRzO1xcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiAwLjRzO1xcbiAgYm9yZGVyLXJhZGl1czogMzRweDtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzlkYmZkYjtcXG59XFxuXFxuaW5wdXQ6Zm9jdXMgKyAuc2xpZGVyIHtcXG4gIGJveC1zaGFkb3c6IDAgMCAxcHggIzlkYmZkYjtcXG59XFxuXFxuaW5wdXQ6Y2hlY2tlZCArIC5zbGlkZXI6YmVmb3JlIHtcXG4gIC13ZWJraXQtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCk7XFxuICAtbXMtdHJhbnNmb3JtOiB0cmFuc2xhdGUoMTJweCk7XFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgxMnB4KTtcXG59XFxuXFxuLnRvZ2dsZS1sYWJlbCB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAzcHg7XFxufVxcblxcbiNvdXRwdXQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIHBhZGRpbmc6IDJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBjb2xvcjogIzM3NDM2MTtcXG59XFxuXFxuI2xlZnQtYW5kLXJpZ2h0IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICB3aWR0aDogMTAwJTtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHBhZGRpbmc6IDIwcHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNjaXR5LW5hbWUge1xcbiAgZm9udC1zaXplOiA0MnB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2xlZnQtb3V0cHV0LFxcbiNyaWdodC1vdXRwdXQge1xcbiAgd2lkdGg6IDQ1JTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4jbWluLW1heC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIGdhcDogMTBweDtcXG59XFxuXFxuI21pbi10ZW1wLFxcbiNtYXgtdGVtcCB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbn1cXG5cXG4jdGVtcCB7XFxuICBmb250LXNpemU6IDQycHg7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNmZWVscy1saWtlIHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxufVxcblxcbiNpY29uIHtcXG4gIGhlaWdodDogNjBweDtcXG4gIHdpZHRoOiA2MHB4O1xcbn1cXG5cXG4jZGVzY3JpcHRpb24ge1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZzogMDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI2h1bWlkaXR5IHtcXG4gIGZvbnQtc2l6ZTogMTBweDtcXG4gIG1hcmdpbjogMDtcXG59XFxuXFxuI3RpdGxlIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMDMsIDEyMiwgMTQxKTtcXG4gIGhlaWdodDogMTV2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZvbnQtc2l6ZTogNDZweDtcXG4gIGZvbnQtZmFtaWx5OiBBcmlhbCwgSGVsdmV0aWNhLCBzYW5zLXNlcmlmO1xcbiAgY29sb3I6IHJnYigyNSwgNDQsIDYzKTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwiQHN1cHBvcnRzIChcIi5jb25jYXQoaXRlbVs0XSwgXCIpIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuXG4gICAgICBjb250ZW50ICs9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgayA9IDA7IGsgPCB0aGlzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgIHZhciBpZCA9IHRoaXNba11bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfayA9IDA7IF9rIDwgbW9kdWxlcy5sZW5ndGg7IF9rKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2tdKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWEpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoc3VwcG9ydHMpIHtcbiAgICAgICAgaWYgKCFpdGVtWzRdKSB7XG4gICAgICAgICAgaXRlbVs0XSA9IFwiXCIuY29uY2F0KHN1cHBvcnRzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNF0gPSBzdXBwb3J0cztcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXRlbSkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV07XG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJjb25zdCBrZXkgPSBcIjM4N2RkZDE4YTc3YzU0ODdkZTAyNGUzODY4MWIwZWNjXCI7XG5cbmFzeW5jIGZ1bmN0aW9uIGdldFdlYXRoZXJKU09OKGxvY2F0aW9uKSB7XG4gIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goXG4gICAgYGh0dHBzOi8vYXBpLm9wZW53ZWF0aGVybWFwLm9yZy9kYXRhLzIuNS93ZWF0aGVyP3E9JHtsb2NhdGlvbn0mYXBwaWQ9JHtrZXl9YFxuICApO1xuXG4gIGNvbnNvbGUubG9nKHJlc3BvbnNlKTtcblxuICBjb25zdCBqc29uID0gYXdhaXQgcmVzcG9uc2UuanNvbigpO1xuICAvLyAgIGNvbnNvbGUubG9nKGpzb24pO1xuICBjb25zdCB3ZWF0aGVyID0ge1xuICAgIG5hbWU6IGpzb24ubmFtZSxcbiAgICBtYWluOiBqc29uLndlYXRoZXJbMF0ubWFpbixcbiAgICBkZXNjcmlwdGlvbjoganNvbi53ZWF0aGVyWzBdLmRlc2NyaXB0aW9uLFxuICAgIHRlbXA6IGpzb24ubWFpbi50ZW1wLFxuICAgIGZlZWxzTGlrZToganNvbi5tYWluLmZlZWxzX2xpa2UsXG4gICAgdGVtcE1pbjoganNvbi5tYWluLnRlbXBfbWluLFxuICAgIHRlbXBNYXg6IGpzb24ubWFpbi50ZW1wX21heCxcbiAgICBwcmVzc3VyZToganNvbi5tYWluLnByZXNzdXJlLFxuICAgIGh1bWlkaXR5OiBqc29uLm1haW4uaHVtaWRpdHksXG4gICAgaWNvbjoganNvbi53ZWF0aGVyWzBdLmljb24sXG4gIH07XG4gIC8vICAgY29uc29sZS5sb2cod2VhdGhlcik7XG4gIHJldHVybiB3ZWF0aGVyO1xufVxuXG5leHBvcnQgZGVmYXVsdCBnZXRXZWF0aGVySlNPTjtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgXCIuL3N0eWxlLmNzc1wiO1xuaW1wb3J0IGdldFdlYXRoZXJKU09OIGZyb20gXCIuL3dlYXRoZXJcIjtcblxuLy8gYXN5bmMgZnVuY3Rpb24gZ2V0V2VhdGhlcihsb2MpIHtcbi8vICAgY29uc3Qgd2VhdGhlciA9IGF3YWl0IGdldFdlYXRoZXJKU09OKGxvYyk7XG4vLyAgIGNvbnNvbGUubG9nKHdlYXRoZXIpO1xuLy8gfVxuXG5mdW5jdGlvbiBjb252ZXJ0VGVtcChrZWx2aW4sIHRvQ2VsY2l1cykge1xuICBpZiAodG9DZWxjaXVzKSB7XG4gICAgcmV0dXJuIGAke01hdGgucm91bmQoa2VsdmluIC0gMjczLjE1KX3CukNgO1xuICB9XG4gIHJldHVybiBgJHtNYXRoLnJvdW5kKChrZWx2aW4gLSAyNzMuMTUpICogMS44ICsgMzIpfcK6RmA7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVdlYXRoZXIobG9jKSB7XG4gIGNvbnN0IGlzQ2VsY2l1cyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwidGVtcC1zd2l0Y2hcIikuY2hlY2tlZDtcblxuICBjb25zdCBuYW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjaXR5LW5hbWVcIik7XG4gIGNvbnN0IHRlbXAgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInRlbXBcIik7XG4gIGNvbnN0IG1pbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWluLXRlbXBcIik7XG4gIGNvbnN0IG1heCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWF4LXRlbXBcIik7XG4gIGNvbnN0IGZlZWxzID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJmZWVscy1saWtlXCIpO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZGVzY3JpcHRpb25cIik7XG4gIGNvbnN0IGljb24gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImljb25cIik7XG4gIGNvbnN0IGh1bWlkaXR5ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJodW1pZGl0eVwiKTtcblxuICB0cnkge1xuICAgIGNvbnN0IHdlYXRoZXIgPSBhd2FpdCBnZXRXZWF0aGVySlNPTihsb2MpO1xuXG4gICAgY29uc29sZS5sb2cod2VhdGhlcik7XG5cbiAgICBuYW1lLmlubmVyVGV4dCA9IHdlYXRoZXIubmFtZTtcbiAgICB0ZW1wLmlubmVyVGV4dCA9IGNvbnZlcnRUZW1wKHdlYXRoZXIudGVtcCwgaXNDZWxjaXVzKTtcbiAgICBtaW4uaW5uZXJUZXh0ID0gYE1pbiAke2NvbnZlcnRUZW1wKHdlYXRoZXIudGVtcE1pbiwgaXNDZWxjaXVzKX1gO1xuICAgIG1heC5pbm5lclRleHQgPSBgTWF4OiAke2NvbnZlcnRUZW1wKHdlYXRoZXIudGVtcE1heCwgaXNDZWxjaXVzKX1gO1xuICAgIGZlZWxzLmlubmVyVGV4dCA9IGBGZWVscyBsaWtlOiAke2NvbnZlcnRUZW1wKFxuICAgICAgd2VhdGhlci5mZWVsc0xpa2UsXG4gICAgICBpc0NlbGNpdXNcbiAgICApfWA7XG4gICAgZGVzY3JpcHRpb24uaW5uZXJUZXh0ID0gd2VhdGhlci5kZXNjcmlwdGlvbjtcbiAgICBodW1pZGl0eS5pbm5lclRleHQgPSBgSHVtaWRpdHk6ICR7d2VhdGhlci5odW1pZGl0eX1gO1xuICAgIGljb24uc3JjID0gYGh0dHBzOi8vb3BlbndlYXRoZXJtYXAub3JnL2ltZy93bi8ke3dlYXRoZXIuaWNvbn1AMngucG5nYDtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGFsZXJ0KFwiSW52YWxpZCBjaXR5IG5hbWVcIik7XG4gICAgdGhyb3cgZTtcbiAgfVxuXG4gIC8vIGlmICh3ZWF0aGVyID09PSB1bmRlZmluZWQpIHtcbiAgLy8gICBhbGVydChcIkludmFsaWQgbmFtZSFcIik7XG4gIC8vICAgcmV0dXJuO1xuICAvLyB9XG59XG5cbmNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiaW5wdXQtYnV0dG9uXCIpO1xuY29uc3QgaW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImlucHV0LWZpZWxkXCIpO1xuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gIHVwZGF0ZVdlYXRoZXIoaW5wdXQudmFsdWUpO1xufSk7XG5cbi8vIGNvbnNvbGUubG9nKGdldFdlYXRoZXJKU09OKFwiUG9ydG8gQWxlZ3JlXCIpKTtcblxuLy8gZ2V0V2VhdGhlcihcIlBvcnRvIEFsZWdyZVwiKTtcblxuLy8gY29uc3QganNvbiA9IGdldFdlYXRoZXJKU09OKFwiUG9ydG8gQWxlZ3JlXCIpO1xuLy8gY29uc29sZS5sb2coanNvbi50aGVuKCh4KSA9PiBjb25zb2xlLmxvZyh4KSkpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9