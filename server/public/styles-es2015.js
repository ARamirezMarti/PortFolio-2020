(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["styles"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--12-1!./node_modules/postcss-loader/src??embedded!./src/styles.css ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(true);
// Module
exports.push([module.i, "@font-face{\r\n    font-family:'handy';\r\n    src: url('handy.ttf');\r\n}\r\n\r\nbody{\r\n    background-color:rgba(3, 3, 3, 0.622);\r\n    overflow: auto;\r\n}\r\n\r\n.photo{\r\n    margin:0px auto;\r\n    float: left;\r\n    background-color: rgb(53, 135, 243);\r\n    width: 48%;    \r\n    left:0;\r\n    top:0;\r\n    position: fixed;\r\n    height: 100%;\r\n    \r\n}\r\n\r\n/* /////////////////// LOGO ////////////////*/\r\n\r\n.divLogo{\r\n    position: absolute;\r\n    margin: 0px auto;\r\n    margin-top: 4px;\r\n    float: left;\r\n    margin-left: 49%;\r\n}\r\n\r\n.divLogo img{\r\n    width: 100px;\r\n    height: 100px;\r\n\r\n}\r\n\r\n/* /////////////////// Lenguages ////////////////*/\r\n\r\n.lengDiv{\r\n    margin: 0px auto;\r\n    float: right;\r\n    margin-right: 10px;\r\n}\r\n\r\n.lengDiv button{\r\n    margin-left: 10px;\r\n}\r\n\r\n/* /////////////////// MENU ////////////////*/\r\n\r\n.menu{    \r\n    margin:0px auto;\r\n    float: left;  \r\n    margin-left: 50%;  \r\n    margin-top: 1rem;\r\n    width: 49%;\r\n    height: auto;\r\n    color: white;\r\n    text-align: center;\r\n\r\n}\r\n\r\n.menu ul{\r\n    \r\n    display: inline-block;\r\n    width: 100% auto;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.menu li{  \r\n    margin:0px auto;\r\n    float: left;\r\n    display: inline;     \r\n    font-size:17px;\r\n    margin-right: 3rem;      \r\n    transition: background-color 1.5s;\r\n    font-family: finger;border-bottom: 1px dashed white;\r\n    \r\n\r\n}\r\n\r\n.menu li img{\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n\r\n.menuText{\r\n    visibility: hidden;\r\n    width: 80px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 4px 0;\r\n    border-radius: 6px;   \r\n    /* Position the tooltip text - see examples below! */\r\n    position: absolute;\r\n    z-index: 1;  \r\n    \r\n    \r\n    \r\n    \r\n}\r\n\r\n.menu li:hover .menuText{\r\n    visibility: visible;\r\n}\r\n\r\n/* /////////////////// CONTENEDOR ////////////////*/\r\n\r\n.container{\r\n \r\n    margin: 0px auto;\r\n    margin-top: 1%;\r\n    margin-left: 50%;\r\n    background-color:rgba(3, 3, 3, 0.068);\r\n    float: left;\r\n    width: 48%;\r\n    margin-bottom: 50px;    \r\n    padding-bottom: 3%;\r\n    box-shadow: 0px 5px 5px 10px  rgba(0, 0, 0, 0.144);\r\n    color: white;\r\n    \r\n}\r\n\r\n.titulos{\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n    color:rgb(53, 135, 243);\r\n    font-family: bold;\r\n    font-size: 50px;\r\n    \r\n}\r\n\r\n.divContent{\r\n    margin-left: 15px;\r\n    margin-right: 25px;  \r\n    \r\n    font-family: finger;\r\n    font-size: medium;  \r\n}\r\n\r\n.divContent button{\r\n    color: white;\r\n    background-color:rgba(3, 3, 3, 0.068);\r\n}\r\n\r\n/* Experience */\r\n\r\n.accordion {\r\n  margin-top: 20px;  \r\n  color: rgb(17, 17, 17);\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  width: 95%;\r\n  font-size: medium;\r\n  border: none;\r\n  outline: none;\r\n  font-family: cursive;\r\n  transition: 0.4s;\r\n  text-align: center;\r\n}\r\n\r\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\r\n\r\n.accordion:hover {\r\n  background-color:rgba(0, 0, 0, 0.281);\r\n}\r\n\r\n/* Style the accordion panel. Note: hidden by default */\r\n\r\n.panel {\r\n  width: 85%;\r\n  padding: 0 18px;\r\n  background-color:rgba(0, 0, 0, 0.281);\r\n}\r\n\r\n/* Contact me*/\r\n\r\n.form{\r\n    margin-top: 5%;\r\n    margin-left: 3%;\r\n    width: 40%;\r\n      \r\n    padding:2%;\r\n}\r\n\r\n.form input, label,textarea {\r\n    display:block;\r\n    margin-left: 10px;\r\n    margin-right: 15px;\r\n    margin-top: 15px;\r\n    width:75%;\r\n\r\n}\r\n\r\n.form button{\r\n    margin-left: 2%;\r\n    margin-top: 5%;\r\n    font-size: large;\r\n\r\n}\r\n\r\n.photo2{\r\n    \r\n    position: absolute;\r\n    margin:0px auto;\r\n    float: right;\r\n    width: 200px;\r\n    height: 250px;\r\n    \r\n    \r\n   \r\n}\r\n\r\n.pass{\r\n    font-size: 25px;\r\n    color:red;\r\n    font-family: finger;\r\n    margin-left: 2%;\r\n}\r\n\r\n/* SKILLS */\r\n\r\n.list{\r\n    margin:0px auto;\r\n    margin-top: 3%;\r\n    width: 45%;\r\n    float: left;\r\n    margin-left:2%;\r\n    border: 1px solid red;\r\n    \r\n    \r\n}\r\n\r\n.progresBars{\r\n    margin:0px auto;\r\n    margin-top: 3%;\r\n    float: right;\r\n    margin-right: 2%;\r\n    border-left: 5px dashed black;\r\n    width: 45%;\r\n    padding-bottom: 1%;    \r\n    padding-left: 3%;\r\n    border: 1px solid red;\r\n\r\n\r\n\r\n}\r\n\r\n.greyBar{\r\n    background-color: rgb(192, 192, 192); \r\n    width: 80%; \r\n    border-radius: 15px; \r\n    margin-top: 10px;\r\n}\r\n\r\n.percentBar{\r\n    background-color:rgb(53, 135, 243); \r\n    color: white; \r\n    padding: 1%; \r\n    text-align: right; \r\n    font-size: 20px; \r\n    border-radius: 15px; \r\n    margin-top:10px;\r\n\r\n}\r\n\r\n.liCertificates{\r\n    margin-left: 10px;\r\n    font-size: small;\r\n}\r\n\r\n/*  PROJECTS */\r\n\r\n.project{\r\n    width:75%;\r\n    list-style: none;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin-top: 5%;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.divImages{\r\n    width: 40%;\r\n    height: 40%; \r\n    overflow: hidden;\r\n    float: left;\r\n\r\n}\r\n\r\n.description{\r\n    text-align: left;\r\n    margin-left: 2%;\r\n    width: 40%;\r\n    height: 40%;\r\n    float: left;\r\n    \r\n}\r\n\r\n.divImages img{\r\n    float: left;    \r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n", "",{"version":3,"sources":["styles.css"],"names":[],"mappings":"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","file":"styles.css","sourcesContent":["@font-face{\r\n    font-family:'handy';\r\n    src: url('./assets/fonts/handy.ttf');\r\n}\r\n\r\nbody{\r\n    background-color:rgba(3, 3, 3, 0.622);\r\n    overflow: auto;\r\n}\r\n.photo{\r\n    margin:0px auto;\r\n    float: left;\r\n    background-color: rgb(53, 135, 243);\r\n    width: 48%;    \r\n    left:0;\r\n    top:0;\r\n    position: fixed;\r\n    height: 100%;\r\n    \r\n}\r\n\r\n/* /////////////////// LOGO ////////////////*/\r\n.divLogo{\r\n    position: absolute;\r\n    margin: 0px auto;\r\n    margin-top: 4px;\r\n    float: left;\r\n    margin-left: 49%;\r\n}\r\n.divLogo img{\r\n    width: 100px;\r\n    height: 100px;\r\n\r\n}\r\n\r\n/* /////////////////// Lenguages ////////////////*/\r\n.lengDiv{\r\n    margin: 0px auto;\r\n    float: right;\r\n    margin-right: 10px;\r\n}\r\n.lengDiv button{\r\n    margin-left: 10px;\r\n}\r\n\r\n/* /////////////////// MENU ////////////////*/\r\n.menu{    \r\n    margin:0px auto;\r\n    float: left;  \r\n    margin-left: 50%;  \r\n    margin-top: 1rem;\r\n    width: 49%;\r\n    height: auto;\r\n    color: white;\r\n    text-align: center;\r\n\r\n}\r\n.menu ul{\r\n    \r\n    display: inline-block;\r\n    width: 100% auto;\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.menu li{  \r\n    margin:0px auto;\r\n    float: left;\r\n    display: inline;     \r\n    font-size:17px;\r\n    margin-right: 3rem;      \r\n    transition: background-color 1.5s;\r\n    font-family: finger;border-bottom: 1px dashed white;\r\n    \r\n\r\n}\r\n.menu li img{\r\n    width: 40px;\r\n    height: 40px;\r\n}\r\n.menuText{\r\n    visibility: hidden;\r\n    width: 80px;\r\n    background-color: black;\r\n    color: #fff;\r\n    text-align: center;\r\n    padding: 4px 0;\r\n    border-radius: 6px;   \r\n    /* Position the tooltip text - see examples below! */\r\n    position: absolute;\r\n    z-index: 1;  \r\n    \r\n    \r\n    \r\n    \r\n}\r\n.menu li:hover .menuText{\r\n    visibility: visible;\r\n}\r\n\r\n/* /////////////////// CONTENEDOR ////////////////*/\r\n.container{\r\n \r\n    margin: 0px auto;\r\n    margin-top: 1%;\r\n    margin-left: 50%;\r\n    background-color:rgba(3, 3, 3, 0.068);\r\n    float: left;\r\n    width: 48%;\r\n    margin-bottom: 50px;    \r\n    padding-bottom: 3%;\r\n    box-shadow: 0px 5px 5px 10px  rgba(0, 0, 0, 0.144);\r\n    color: white;\r\n    \r\n}\r\n\r\n.titulos{\r\n    margin-left: 20px;\r\n    margin-top: 20px;\r\n    color:rgb(53, 135, 243);\r\n    font-family: bold;\r\n    font-size: 50px;\r\n    \r\n}\r\n.divContent{\r\n    margin-left: 15px;\r\n    margin-right: 25px;  \r\n    \r\n    font-family: finger;\r\n    font-size: medium;  \r\n}\r\n.divContent button{\r\n    color: white;\r\n    background-color:rgba(3, 3, 3, 0.068);\r\n}\r\n\r\n/* Experience */\r\n\r\n.accordion {\r\n  margin-top: 20px;  \r\n  color: rgb(17, 17, 17);\r\n  cursor: pointer;\r\n  padding: 10px;\r\n  width: 95%;\r\n  font-size: medium;\r\n  border: none;\r\n  outline: none;\r\n  font-family: cursive;\r\n  transition: 0.4s;\r\n  text-align: center;\r\n}\r\n\r\n/* Add a background color to the button if it is clicked on (add the .active class with JS), and when you move the mouse over it (hover) */\r\n.accordion:hover {\r\n  background-color:rgba(0, 0, 0, 0.281);\r\n}\r\n\r\n/* Style the accordion panel. Note: hidden by default */\r\n.panel {\r\n  width: 85%;\r\n  padding: 0 18px;\r\n  background-color:rgba(0, 0, 0, 0.281);\r\n}\r\n\r\n\r\n/* Contact me*/\r\n\r\n.form{\r\n    margin-top: 5%;\r\n    margin-left: 3%;\r\n    width: 40%;\r\n      \r\n    padding:2%;\r\n}\r\n\r\n.form input, label,textarea {\r\n    display:block;\r\n    margin-left: 10px;\r\n    margin-right: 15px;\r\n    margin-top: 15px;\r\n    width:75%;\r\n\r\n}\r\n.form button{\r\n    margin-left: 2%;\r\n    margin-top: 5%;\r\n    font-size: large;\r\n\r\n}\r\n.photo2{\r\n    \r\n    position: absolute;\r\n    margin:0px auto;\r\n    float: right;\r\n    width: 200px;\r\n    height: 250px;\r\n    \r\n    \r\n   \r\n}\r\n.pass{\r\n    font-size: 25px;\r\n    color:red;\r\n    font-family: finger;\r\n    margin-left: 2%;\r\n}\r\n\r\n\r\n/* SKILLS */\r\n\r\n.list{\r\n    margin:0px auto;\r\n    margin-top: 3%;\r\n    width: 45%;\r\n    float: left;\r\n    margin-left:2%;\r\n    border: 1px solid red;\r\n    \r\n    \r\n}\r\n\r\n.progresBars{\r\n    margin:0px auto;\r\n    margin-top: 3%;\r\n    float: right;\r\n    margin-right: 2%;\r\n    border-left: 5px dashed black;\r\n    width: 45%;\r\n    padding-bottom: 1%;    \r\n    padding-left: 3%;\r\n    border: 1px solid red;\r\n\r\n\r\n\r\n}\r\n\r\n\r\n.greyBar{\r\n    background-color: rgb(192, 192, 192); \r\n    width: 80%; \r\n    border-radius: 15px; \r\n    margin-top: 10px;\r\n}\r\n.percentBar{\r\n    background-color:rgb(53, 135, 243); \r\n    color: white; \r\n    padding: 1%; \r\n    text-align: right; \r\n    font-size: 20px; \r\n    border-radius: 15px; \r\n    margin-top:10px;\r\n\r\n}\r\n.liCertificates{\r\n    margin-left: 10px;\r\n    font-size: small;\r\n}\r\n\r\n\r\n/*  PROJECTS */\r\n\r\n\r\n.project{\r\n    width:75%;\r\n    list-style: none;\r\n    display: inline-block;\r\n    text-align: center;\r\n    margin-top: 5%;\r\n    margin-left: 15px;\r\n    margin-right: 15px;\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.divImages{\r\n    width: 40%;\r\n    height: 40%; \r\n    overflow: hidden;\r\n    float: left;\r\n\r\n}\r\n\r\n.description{\r\n    text-align: left;\r\n    margin-left: 2%;\r\n    width: 40%;\r\n    height: 40%;\r\n    float: left;\r\n    \r\n}\r\n\r\n.divImages img{\r\n    float: left;    \r\n    width: 100%;\r\n    height: 100%;\r\n}\r\n"]}]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
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
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
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
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--12-1!../node_modules/postcss-loader/src??embedded!./styles.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/styles.css");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);

var exported = content.locals ? content.locals : {};



module.exports = exported;

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./src/styles.css ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Repositorio\html\portfolio2020\PortFolio-2020\src\styles.css */"./src/styles.css");


/***/ })

},[[3,"runtime"]]]);
//# sourceMappingURL=styles-es2015.js.map