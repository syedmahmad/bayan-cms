(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("react"));
	else if(typeof define === 'function' && define.amd)
		define("@buffetjs/hooks", ["react"], factory);
	else if(typeof exports === 'object')
		exports["@buffetjs/hooks"] = factory(require("react"));
	else
		root["@buffetjs/hooks"] = factory(root["react"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE_react__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: useActiveKeys, useClickAwayListener, useDebounce, useEventListener, useIsMounted, useShortcutEffect */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _useActiveKeys__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useActiveKeys */ \"./src/useActiveKeys/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useActiveKeys\", function() { return _useActiveKeys__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _useClickAwayListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useClickAwayListener */ \"./src/useClickAwayListener/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useClickAwayListener\", function() { return _useClickAwayListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _useDebounce__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useDebounce */ \"./src/useDebounce/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useDebounce\", function() { return _useDebounce__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useEventListener */ \"./src/useEventListener/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useEventListener\", function() { return _useEventListener__WEBPACK_IMPORTED_MODULE_3__[\"default\"]; });\n\n/* harmony import */ var _useIsMounted__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useIsMounted */ \"./src/useIsMounted/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useIsMounted\", function() { return _useIsMounted__WEBPACK_IMPORTED_MODULE_4__[\"default\"]; });\n\n/* harmony import */ var _useShortcutEffect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./useShortcutEffect */ \"./src/useShortcutEffect/index.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"useShortcutEffect\", function() { return _useShortcutEffect__WEBPACK_IMPORTED_MODULE_5__[\"default\"]; });\n\n\n\n\n\n\n\n\n//# sourceURL=webpack://@buffetjs/hooks/./src/index.js?");

/***/ }),

/***/ "./src/useActiveKeys/index.js":
/*!************************************!*\
  !*** ./src/useActiveKeys/index.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useEventListener__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useEventListener */ \"./src/useEventListener/index.js\");\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && Symbol.iterator in Object(iter)) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\nfunction useActiveKeys() {\n  var isEnabled = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      activeKeys = _useState2[0],\n      setActiveKeys = _useState2[1]; // Add keys to the array on down\n\n\n  Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('keydown', function (e) {\n    if (!activeKeys.includes(e.keyCode)) {\n      setActiveKeys(function (prevKeys) {\n        return [].concat(_toConsumableArray(prevKeys), [e.keyCode]);\n      });\n    }\n  }, isEnabled); // Remove keys on up\n\n  Object(_useEventListener__WEBPACK_IMPORTED_MODULE_1__[\"default\"])('keyup', function (e) {\n    setActiveKeys(function (prevKeys) {\n      return prevKeys.filter(function (key) {\n        return key !== e.keyCode;\n      });\n    });\n  }, isEnabled);\n  return activeKeys;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useActiveKeys);\n\n//# sourceURL=webpack://@buffetjs/hooks/./src/useActiveKeys/index.js?");

/***/ }),

/***/ "./src/useClickAwayListener/index.js":
/*!*******************************************!*\
  !*** ./src/useClickAwayListener/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nvar useClickAwayListener = function useClickAwayListener(ref, callback) {\n  // Call the callback function if clicked on outside of element\n  var handleClickOutside = function handleClickOutside(event) {\n    if (ref.current && !ref.current.contains(event.target)) {\n      callback();\n    }\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    // Bind the event listener\n    document.addEventListener('mousedown', handleClickOutside);\n    return function () {\n      // Unbind the event listener on clean up\n      document.removeEventListener('mousedown', handleClickOutside);\n    };\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useClickAwayListener);\n\n//# sourceURL=webpack://@buffetjs/hooks/./src/useClickAwayListener/index.js?");

/***/ }),

/***/ "./src/useDebounce/index.js":
/*!**********************************!*\
  !*** ./src/useDebounce/index.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n // A simple hook to debounce value.\n\nvar useDebounce = function useDebounce(value, delay) {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])(value),\n      _useState2 = _slicedToArray(_useState, 2),\n      debouncedValue = _useState2[0],\n      setDebouncedValue = _useState2[1];\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var handler = setTimeout(function () {\n      setDebouncedValue(value);\n    }, delay);\n    return function () {\n      clearTimeout(handler);\n    };\n  }, [value, delay]);\n  return debouncedValue;\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useDebounce);\n\n//# sourceURL=webpack://@buffetjs/hooks/./src/useDebounce/index.js?");

/***/ }),

/***/ "./src/useEventListener/index.js":
/*!***************************************!*\
  !*** ./src/useEventListener/index.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n\nfunction useEventListener(event, eventListener) {\n  var isEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var listenerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  listenerRef.current = eventListener;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    function handleEvent(e) {\n      listenerRef.current(e);\n    }\n\n    if (isEnabled) {\n      window.addEventListener(event, handleEvent);\n    } else {\n      window.removeEventListener(event, handleEvent);\n    }\n\n    return function () {\n      window.removeEventListener(event, handleEvent);\n    };\n  }, [event, isEnabled]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useEventListener);\n\n//# sourceURL=webpack://@buffetjs/hooks/./src/useEventListener/index.js?");

/***/ }),

/***/ "./src/useIsMounted/index.js":
/*!***********************************!*\
  !*** ./src/useIsMounted/index.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n // Hook taken from https://github.com/hupe1980/react-is-mounted-hook\n\nfunction useIsMounted() {\n  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])(true);\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    ref.current = true;\n    return function () {\n      ref.current = false;\n    };\n  }, []);\n  return ref.current;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useIsMounted);\n\n//# sourceURL=webpack://@buffetjs/hooks/./src/useIsMounted/index.js?");

/***/ }),

/***/ "./src/useShortcutEffect/index.js":
/*!****************************************!*\
  !*** ./src/useShortcutEffect/index.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _useActiveKeys__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../useActiveKeys */ \"./src/useActiveKeys/index.js\");\n\n\nvar keyCodes = {\n  alt: 18,\n  arrowup: 38,\n  arrowdown: 40,\n  enter: 13,\n  f: 70,\n  tab: 9\n};\n\nfunction getShortcutKeys(keys) {\n  return keys.split('+').map(function (value) {\n    return keyCodes[value.toLowerCase()];\n  });\n}\n\nfunction useShortcutEffect(shortcut, listener) {\n  var isEnabled = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;\n  var activeKeys = Object(_useActiveKeys__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(isEnabled);\n  var listenerRef = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useRef\"])();\n  listenerRef.current = listener;\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    var match = getShortcutKeys(shortcut).every(function (key) {\n      return activeKeys.includes(key);\n    });\n\n    if (match) {\n      listenerRef.current();\n    }\n  }, [activeKeys, shortcut]);\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (useShortcutEffect);\n\n//# sourceURL=webpack://@buffetjs/hooks/./src/useShortcutEffect/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = __WEBPACK_EXTERNAL_MODULE_react__;\n\n//# sourceURL=webpack://@buffetjs/hooks/external_%22react%22?");

/***/ })

/******/ });
});