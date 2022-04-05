module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
var _jsxFileName = "C:\\Users\\rhuwe\\Desktop\\Coding Projects\\rhuwellsamano\\components\\Footer.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;

const Footer = () => __jsx("div", {
  className: "jsx-24943890" + " " + "footer-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 2
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-24943890" + " " + "copyright",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 3
  },
  __self: undefined
}, "\xA9 ", new Date().getFullYear(), " Rhuwell Samano"), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "24943890",
  __self: undefined
}, ".footer-wrapper.jsx-24943890{text-align:center;margin-top:10px;padding:10px 30px;}.copyright.jsx-24943890{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xcY29tcG9uZW50c1xcRm9vdGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUdrQixBQUc2QixBQUtDLGtCQUpILENBS2xCLGVBSm9CLGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHJodXdlXFxEZXNrdG9wXFxDb2RpbmcgUHJvamVjdHNcXHJodXdlbGxzYW1hbm9cXGNvbXBvbmVudHNcXEZvb3Rlci5qcyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IEZvb3RlciA9ICgpID0+IChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXBwZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3B5cmlnaHRcIj7CqSB7bmV3IERhdGUoKS5nZXRGdWxsWWVhcigpfSBSaHV3ZWxsIFNhbWFubzwvZGl2PlxyXG4gICAgICA8c3R5bGUganN4PntgXHJcbiAgICAgICAgLmZvb3Rlci13cmFwcGVyIHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb3B5cmlnaHQge1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICB9XHJcbiAgICAgIGB9PC9zdHlsZT5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=C:\\\\Users\\\\rhuwe\\\\Desktop\\\\Coding Projects\\\\rhuwellsamano\\\\components\\\\Footer.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

/***/ "./components/Header.js":
/*!******************************!*\
  !*** ./components/Header.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_Logo__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Logo */ "./components/Logo.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
var _jsxFileName = "C:\\Users\\rhuwe\\Desktop\\Coding Projects\\rhuwellsamano\\components\\Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header = () => __jsx("div", {
  className: "jsx-3409983924" + " " + "header-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(_components_Logo__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), __jsx(_components_Nav__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3409983924",
  __self: undefined
}, ".header-wrapper.jsx-3409983924{width:100%;background:#232A34;opacity:95%;padding:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:hidden;}@media (max-width:600px){.header-wrapper.jsx-3409983924{display:block;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQU9nQixBQUdvQixBQVdLLFdBVkcsR0FXQyxnQkFWUixFQVdaLFVBVlksWUFDQywwRUFDaUIsbUhBQ1gsNkZBQ0Qsa0JBQ3BCIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xcY29tcG9uZW50c1xcSGVhZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExvZ28gZnJvbSAnLi4vY29tcG9uZW50cy9Mb2dvJztcclxuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XHJcblxyXG5jb25zdCBIZWFkZXIgPSAoKSA9PiAoXHJcbiAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxyXG4gICAgPExvZ28gLz5cclxuICAgIDxOYXYgLz5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmhlYWRlci13cmFwcGVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjMjMyQTM0O1xyXG4gICAgICAgIG9wYWNpdHk6IDk1JTtcclxuICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xyXG4gICAgICAgIC5oZWFkZXItd3JhcHBlciB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICA8L2Rpdj5cclxuKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\rhuwe\\\\Desktop\\\\Coding Projects\\\\rhuwellsamano\\\\components\\\\Header.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Header);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Header */ "./components/Header.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");
var _jsxFileName = "C:\\Users\\rhuwe\\Desktop\\Coding Projects\\rhuwellsamano\\components\\Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Layout = props => __jsx("div", {
  className: "jsx-247493601" + " " + "site-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("title", {
  className: "jsx-247493601",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.title ? `${props.title} | ` : '', "Rhuwell Samano"), props.description ? __jsx("meta", {
  name: "description",
  content: props.description,
  className: "jsx-247493601",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}) : null), __jsx(_components_Header__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-247493601" + " " + "content-wrapper",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, props.children), __jsx(_components_Footer__WEBPACK_IMPORTED_MODULE_4__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "247493601",
  __self: undefined
}, "@font-face{font-family:'devicons';src:url(\"../fonts/devicons.eot?xqxft6\");src:url(\"../fonts/devicons.eot?#iefixxqxft6\") format(\"embedded-opentype\"),url(\"../fonts/devicons.woff?xqxft6\") format(\"woff\"),url(\"../fonts/devicons.ttf?xqxft6\") format(\"truetype\"),url(\"../fonts/devicons.svg?xqxft6#devicons\") format(\"svg\");font-weight:normal;font-style:normal;}@font-face{font-family:'Varta';src:url('/fonts/Varta.ttf');font-style:normal;font-display:swap;}@font-face{font-family:'HomepageBaukasten-Bold';src:url('/fonts/HomepageBaukasten-Bold.ttf');font-style:semibold;font-display:swap;}@font-face{font-family:'Larsseit';src:url('/fonts/Larsseit.ttf');font-style:normal;font-display:swap;}@font-face{font-family:'Galano';src:url('/fonts/Galano.otf');font-style:normal;font-display:swap;}@font-face{font-family:'Cocogoose';src:url('/fonts/Cocogoose.ttf');font-style:normal;font-display:swap;}@font-face{font-family:'CarreNoir';src:url('/fonts/CarreNoir.otf');font-display:swap;}*,*::before,*::after{box-sizing:border-box;}html{width:100%;height:100%;margin:0px;padding:0px;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;overflow-x:hidden;}body{margin:0;padding:0;font-size:18px;line-height:1.8;background:#f1f1f1;color:#454545;font-family:'Varta';text-rendering:optimizeLegibility;overflow-x:hidden;}a{color:#FF7519;-webkit-text-decoration:none;text-decoration:none;}a:hover{color:#FF6600;}p{margin:0 0 10px;}img{max-width:100%;overflow-x:hidden;}ul{margin-left:0px;padding-left:5px;}li{text-align:left;}.content-wrapper{min-height:600px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xcY29tcG9uZW50c1xcTGF5b3V0LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQW9CdUIsQUFLK0IsQUFHQyxBQU9ILEFBTWlCLEFBTWQsQUFNRixBQU1HLEFBTUEsQUFLYixBQVFGLEFBY0ssQUFLQSxBQUdFLEFBR0QsQUFJQyxBQUlBLEFBTUMsU0F0Q1AsRUFSRSxHQXNCUyxBQUt2QixDQU1vQixDQUhwQixBQU9tQixBQUluQixDQU1vQixFQXRDSCxDQTVDYSxDQWtCQyxDQTVCL0IsQ0FHMEMsQUFtQlQsQUF3QnBCLENBWnFCLEFBTUEsU0F1Q2xDLEFBSUEsQ0FwQ2MsQUFRSSxDQXNDbEIsRUE3RStDLFNBZ0N0QixFQXJDTCxFQWtCQSxBQTJCQyxJQWpDRCxFQVlBLEFBTUEsT0FyQ2lPLENBZ0VyUCxFQXhEb0IsRUFrQkEsQ0EyQkosR0FqQ0ksRUFZQSxBQU1wQixRQXpCc0IsQ0F5Q0EsQ0E3Q3RCLEVBa0JBLElBTkEsRUFZQSxVQW5Cb0IsQ0F5Q2dCLGlCQXhDcEMsaUJBeUNvQixrQkFYQSxBQVlwQixrQkFYQSxrSUE3Q3FCLG1CQUNELGtCQUNwQiIsImZpbGUiOiJDOlxcVXNlcnNcXHJodXdlXFxEZXNrdG9wXFxDb2RpbmcgUHJvamVjdHNcXHJodXdlbGxzYW1hbm9cXGNvbXBvbmVudHNcXExheW91dC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xyXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvRm9vdGVyJztcclxuXHJcbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcclxuICA8ZGl2IGNsYXNzTmFtZT1cInNpdGUtd3JhcHBlclwiPlxyXG4gICAgICAgICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5cclxuICAgICAgICB7cHJvcHMudGl0bGUgPyBgJHtwcm9wcy50aXRsZX0gfCBgIDogJyd9XHJcbiAgICAgICAgUmh1d2VsbCBTYW1hbm9cclxuICAgICAgPC90aXRsZT5cclxuICAgICAge3Byb3BzLmRlc2NyaXB0aW9uID8gPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17cHJvcHMuZGVzY3JpcHRpb259IC8+IDogbnVsbH1cclxuICAgIDwvSGVhZD5cclxuXHJcbiAgICA8SGVhZGVyIC8+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XHJcblxyXG4gICAgPEZvb3RlciAvPlxyXG5cclxuICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXHJcbiAgICAgICosXHJcbiAgICAgICo6OmJlZm9yZSxcclxuICAgICAgKjo6YWZ0ZXIge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgIH1cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdkZXZpY29ucyc7XHJcbiAgICAgICAgc3JjOiB1cmwoXCIuLi9mb250cy9kZXZpY29ucy5lb3Q/eHF4ZnQ2XCIpO1xyXG4gICAgICAgIHNyYzogdXJsKFwiLi4vZm9udHMvZGV2aWNvbnMuZW90PyNpZWZpeHhxeGZ0NlwiKSBmb3JtYXQoXCJlbWJlZGRlZC1vcGVudHlwZVwiKSwgdXJsKFwiLi4vZm9udHMvZGV2aWNvbnMud29mZj94cXhmdDZcIikgZm9ybWF0KFwid29mZlwiKSwgdXJsKFwiLi4vZm9udHMvZGV2aWNvbnMudHRmP3hxeGZ0NlwiKSBmb3JtYXQoXCJ0cnVldHlwZVwiKSwgdXJsKFwiLi4vZm9udHMvZGV2aWNvbnMuc3ZnP3hxeGZ0NiNkZXZpY29uc1wiKSBmb3JtYXQoXCJzdmdcIik7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgIH0gICAgICBcclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdWYXJ0YSc7XHJcbiAgICAgICAgc3JjOiB1cmwoJy9mb250cy9WYXJ0YS50dGYnKTsgXHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgfVxyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuLUJvbGQnO1xyXG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvSG9tZXBhZ2VCYXVrYXN0ZW4tQm9sZC50dGYnKTsgXHJcbiAgICAgICAgZm9udC1zdHlsZTogc2VtaWJvbGQ7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICB9XHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGFyc3NlaXQnO1xyXG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvTGFyc3NlaXQudHRmJyk7IFxyXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcclxuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XHJcbiAgICAgIH1cclxuICAgICAgQGZvbnQtZmFjZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xyXG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvR2FsYW5vLm90ZicpOyBcclxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XHJcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xyXG4gICAgICB9XHJcbiAgICAgIEBmb250LWZhY2Uge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29jb2dvb3NlJztcclxuICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0NvY29nb29zZS50dGYnKTsgXHJcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgfVxyXG4gICAgICBAZm9udC1mYWNlIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0NhcnJlTm9pcic7XHJcbiAgICAgICAgc3JjOiB1cmwoJy9mb250cy9DYXJyZU5vaXIub3RmJyk7IFxyXG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcclxuICAgICAgfVxyXG4gICAgICBodG1sIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXHJcbiAgICAgIH1cclxuICAgICAgYm9keSB7XHJcbiAgICAgICAgbWFyZ2luOiAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YxZjFmMTtcclxuICAgICAgICBjb2xvcjogIzQ1NDU0NTtcclxuICAgICAgICBmb250LWZhbWlseTogJ1ZhcnRhJztcclxuICAgICAgICB0ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgYSB7XHJcbiAgICAgICAgY29sb3I6ICNGRjc1MTk7XHJcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBhOmhvdmVyIHtcclxuICAgICAgICBjb2xvcjogI0ZGNjYwMDtcclxuICAgICAgfVxyXG4gICAgICBwIHtcclxuICAgICAgICBtYXJnaW46IDAgMCAxMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGltZyB7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG92ZXJmbG93LXg6IGhpZGRlbjsgXHJcbiAgICAgIH1cclxuICAgICAgdWwge1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgbGkge1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIExheW91dCAqL1xyXG5cclxuICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XHJcbiAgICAgICAgbWluLWhlaWdodDogNjAwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9kaXY+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\rhuwe\\\\Desktop\\\\Coding Projects\\\\rhuwellsamano\\\\components\\\\Layout.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./components/Logo.js":
/*!****************************!*\
  !*** ./components/Logo.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\rhuwe\\Desktop\\Coding Projects\\rhuwellsamano\\components\\Logo.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Logo = () => __jsx("div", {
  className: "jsx-2840098951" + " " + "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2840098951",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/portfolio-logo-2.svg",
  className: "jsx-2840098951",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2840098951",
  __self: undefined
}, ".logo.jsx-2840098951 img.jsx-2840098951{display:block;width:220px;margin-left:20px;}@media (max-width:480px){.logo.jsx-2840098951{display:inline-block;}.logo.jsx-2840098951 img.jsx-2840098951{margin-left:0px;padding-top:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xcY29tcG9uZW50c1xcTG9nby5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRZ0IsQUFHdUIsQUFNUyxBQUdMLGNBUk4sRUFTTyxLQUhuQixLQUxpQixPQVNqQixVQVJGIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xcY29tcG9uZW50c1xcTG9nby5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcblxyXG5jb25zdCBMb2dvID0gKCkgPT4gKFxyXG4gIDxkaXYgY2xhc3NOYW1lPVwibG9nb1wiPlxyXG4gICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgIDxhPjxpbWcgc3JjPVwiL3N0YXRpYy9wb3J0Zm9saW8tbG9nby0yLnN2Z1wiIC8+PC9hPlxyXG4gICAgPC9MaW5rPlxyXG5cclxuICAgIDxzdHlsZSBqc3g+e2BcclxuICAgICAgLmxvZ28gaW1nIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMjIwcHg7XHJcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgLmxvZ28ge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubG9nbyBpbWcge1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAxMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvZGl2PlxyXG4pO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgTG9nbzsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\rhuwe\\\\Desktop\\\\Coding Projects\\\\rhuwellsamano\\\\components\\\\Logo.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Logo);

/***/ }),

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "C:\\Users\\rhuwe\\Desktop\\Coding Projects\\rhuwellsamano\\components\\Nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = () => __jsx("ul", {
  className: "jsx-3033346441" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3033346441" + " " + "icon-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "32px",
  height: "32px",
  viewBox: "0 0 460.298 460.297",
  className: "jsx-3033346441" + " " + "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("path", {
  d: "M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041\r c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629\r c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939\r z",
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("path", {
  d: "M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816\r c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245\r c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136\r c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998\r L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125\r c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z",
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
})), __jsx("a", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Home")))), __jsx("li", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3033346441" + " " + "icon-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, __jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "30px",
  height: "32px",
  viewBox: "0 0 319.876 319.875",
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("path", {
  d: "M177.958,200.608l130.467-51.227c6.322-2.478,11.451-8.374,11.451-13.163v-8.677V75.762\r c0-6.788-5.507-12.298-12.298-12.298c0,0-5.242,0-11.697,0c-6.462,0-11.229-0.85-10.941-1.981\r c0.174-0.676,0.265-1.384,0.265-2.102c0-5.672-5.513-10.263-12.298-10.263h-12.719c-6.791,0-12.297,4.591-12.297,10.263\r c0,0.724,0.09,1.426,0.264,2.107c0.288,1.144-3.272,2-8.263,2.023c-3.303,0.012-6.461,0.024-9.025,0.03\r c-1.976,0.006-4.017,0.012-5.999,0.012c-6.791,0.016-12.081-5.569-13.528-12.198c-6.863-31.36-40.058-29.73-40.058-29.73h-22.626\r c-30.564,0-39.193,17.315-41.454,29.694c-1.225,6.683-6.059,12.25-12.844,12.25H89c-1.783,0-3.867-0.006-6.089-0.021\r c-3.356-0.012-5.603-0.886-5.299-2.032c0.177-0.685,0.27-1.405,0.27-2.135c0-5.672-5.509-10.263-12.298-10.263H52.863\r c-6.788,0-12.298,4.591-12.298,10.263c0,0.705,0.084,1.396,0.252,2.065c0.276,1.126-4.78,1.942-11.568,1.937\r c-6.221-0.006-12.106-0.006-16.946-0.012C5.51,63.372,0,68.88,0,75.669v51.872c0,0,0,3.78,0,8.449\r c0,4.666,5.17,10.337,11.553,12.661L154.96,200.89C161.34,203.214,171.642,203.094,177.958,200.608z M129.434,51.707\r c2.669-5.191,8.02-10.115,18.732-10.115h10.698h1.084h10.697c10.713,0,16.057,4.924,18.729,10.115\r c3.099,6.038-2.9,11.886-9.686,11.886h-19.75h-1.08h-19.732C132.331,63.593,126.329,57.745,129.434,51.707z",
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}), __jsx("path", {
  d: "M166.646,224.183c-1.075,0-2.144-0.187-3.165-0.559L11.56,168.285c-6.383-2.324-11.554,1.291-11.554,8.082v57.826v51.684\r c0,6.791,5.504,12.297,12.298,12.297h51.041h13.364h154.164c6.786,0,17.811,0.049,24.596,0.061\r c14.31,0.023,37.795,0.03,52.098,0.03c6.792,0.006,12.298-5.507,12.298-12.292v-51.779v-57.184c0-6.792-5.116-10.286-11.445-7.812\r l-138.422,54.344C168.927,223.972,167.786,224.183,166.646,224.183z",
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}))), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
})), __jsx("a", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, "Projects")))), __jsx("li", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3033346441" + " " + "icon-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, __jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "30px",
  height: "32px",
  viewBox: "0 0 45.958 45.958",
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, __jsx("path", {
  d: "M39.287,41.955l-1.626-12.76c-0.556-4.375-4.278-7.61-8.688-7.61H16.985c-4.41,0-8.133,3.235-8.688,7.61L6.67,41.979\r c-0.112,0.894,0.163,2.018,0.758,2.692c0.596,0.675,1.453,1.287,2.353,1.287h26.395c0.9,0,1.757-0.624,2.354-1.299\r C39.125,43.982,39.4,42.85,39.287,41.955z",
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}), __jsx("circle", {
  cx: "22.978",
  cy: "9.33",
  r: "9.33",
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}))), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
})), __jsx("a", {
  className: "jsx-3033346441",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}, "About Me")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3033346441",
  __self: undefined
}, ".nav.jsx-3033346441{font-family:'Varta';margin:0px 0 0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#232A34;}.icon-container.jsx-3033346441{display:block;text-align:center;padding:15px 40px;line-height:1.2;border-left-style:solid;border-width:1px;border-left-color:#303947;}div.jsx-3033346441:hover svg.jsx-3033346441{fill:#f2ab37;}.nav.jsx-3033346441 li.jsx-3033346441 div.jsx-3033346441:hover a.jsx-3033346441{color:#f2ab37;}svg.jsx-3033346441{display:inline-block;fill:#505765;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}svg.jsx-3033346441:hover{fill:#f2ab37;}.nav.jsx-3033346441 li.jsx-3033346441 div.jsx-3033346441 a.jsx-3033346441{display:block;height:auto;font-size:16px;color:#505765;font-weight:300;text-align:center;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}@media (max-width:480px){.icon-container.jsx-3033346441{display:block;text-align:center;padding:15px 25px;line-height:1.0;border-left-style:none;border-width:0px;border-left-color:#303947;line-height:1.0;}.nav.jsx-3033346441{display:inline-block;width:100%;}.nav.jsx-3033346441 li.jsx-3033346441{display:inline-block;}.nav.jsx-3033346441 li.jsx-3033346441 a.jsx-3033346441{font-size:18px;}.nav.jsx-3033346441 li.jsx-3033346441 div.jsx-3033346441 a.jsx-3033346441{display:block;height:auto;font-size:16px;color:#505765;font-weight:300;text-align:center;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xcY29tcG9uZW50c1xcTmF2LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXlLZ0IsQUFHNkIsQUFPTixBQVNELEFBR0MsQUFHTyxBQVNSLEFBR0MsQUFlRSxBQVVPLEFBSUEsQUFHTixBQUdELGFBcERsQixBQWVBLENBeEJvQixBQVlwQixBQWVjLEFBZVEsQUFvQk4sQ0FIZCxLQWxFZSxDQXNCRixBQXFDQSxBQUliLEtBNUJlLEFBbUNFLE1BOURDLEFBMENFLEFBVXBCLEVBckNpQixDQXRCRCxNQW1DRixBQW1DRSxTQTlEQSxBQTBDRSxDQWpETCxDQXNCSyxHQWFGLEFBbUNFLFdBOURNLEFBMENDLEtBM0JOLEFBYUQsQUFtQ0Usa0JBbENILEFBY0UsQUFxQkEsQ0EvREYsQ0FlSyxlQTRCTSxDQTFDRixBQTRCUixBQW1DRSxPQWhETixXQXhCSyxDQXNDQSxBQW1DRSxNQXJCSCxDQTFDcEIsV0FUQSxFQXNDd0IsQUFtQ0UsRUFyQnhCLElBNUJGLGlCQWVnQixBQW1DRSxzQ0FsQ2xCLEFBbUNFIiwiZmlsZSI6IkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xcY29tcG9uZW50c1xcTmF2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcclxuXHJcbmNvbnN0IE5hdiA9ICgpID0+IChcclxuICA8dWwgY2xhc3NOYW1lPVwibmF2XCI+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPlxyXG5cclxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImhvbWVcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxyXG5cdCB3aWR0aD1cIjMycHhcIiBoZWlnaHQ9XCIzMnB4XCIgdmlld0JveD1cIjAgMCA0NjAuMjk4IDQ2MC4yOTdcIiBcclxuXHQgPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNMjMwLjE0OSwxMjAuOTM5TDY1Ljk4NiwyNTYuMjc0YzAsMC4xOTEtMC4wNDgsMC40NzItMC4xNDQsMC44NTVjLTAuMDk0LDAuMzgtMC4xNDQsMC42NTYtMC4xNDQsMC44NTJ2MTM3LjA0MVxyXG4gICAgICAgICAgICAgICAgYzAsNC45NDgsMS44MDksOS4yMzYsNS40MjYsMTIuODQ3YzMuNjE2LDMuNjEzLDcuODk4LDUuNDMxLDEyLjg0Nyw1LjQzMWgxMDkuNjNWMzAzLjY2NGg3My4wOTd2MTA5LjY0aDEwOS42MjlcclxuICAgICAgICAgICAgICAgIGM0Ljk0OCwwLDkuMjM2LTEuODE0LDEyLjg0Ny01LjQzNWMzLjYxNy0zLjYwNyw1LjQzMi03Ljg5OCw1LjQzMi0xMi44NDdWMjU3Ljk4MWMwLTAuNzYtMC4xMDQtMS4zMzQtMC4yODgtMS43MDdMMjMwLjE0OSwxMjAuOTM5XHJcbiAgICAgICAgICAgICAgICB6XCIvPlxyXG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDU3LjEyMiwyMjUuNDM4TDM5NC42LDE3My40NzZWNTYuOTg5YzAtMi42NjMtMC44NTYtNC44NTMtMi41NzQtNi41NjdjLTEuNzA0LTEuNzEyLTMuODk0LTIuNTY4LTYuNTYzLTIuNTY4aC01NC44MTZcclxuICAgICAgICAgICAgICAgIGMtMi42NjYsMC00Ljg1NSwwLjg1Ni02LjU3LDIuNTY4Yy0xLjcxMSwxLjcxNC0yLjU2NiwzLjkwNS0yLjU2Niw2LjU2N3Y1NS42NzNsLTY5LjY2Mi01OC4yNDVcclxuICAgICAgICAgICAgICAgIGMtNi4wODQtNC45NDktMTMuMzE4LTcuNDIzLTIxLjY5NC03LjQyM2MtOC4zNzUsMC0xNS42MDgsMi40NzQtMjEuNjk4LDcuNDIzTDMuMTcyLDIyNS40MzhjLTEuOTAzLDEuNTItMi45NDYsMy41NjYtMy4xNCw2LjEzNlxyXG4gICAgICAgICAgICAgICAgYy0wLjE5MywyLjU2OCwwLjQ3Miw0LjgxMSwxLjk5Nyw2LjcxM2wxNy43MDEsMjEuMTI4YzEuNTI1LDEuNzEyLDMuNTIxLDIuNzU5LDUuOTk2LDMuMTQyYzIuMjg1LDAuMTkyLDQuNTctMC40NzYsNi44NTUtMS45OThcclxuICAgICAgICAgICAgICAgIEwyMzAuMTQ5LDk1LjgxN2wxOTcuNTcsMTY0Ljc0MWMxLjUyNiwxLjMyOCwzLjUyMSwxLjk5MSw1Ljk5NiwxLjk5MWgwLjg1OGMyLjQ3MS0wLjM3Niw0LjQ2My0xLjQzLDUuOTk2LTMuMTM4bDE3LjcwMy0yMS4xMjVcclxuICAgICAgICAgICAgICAgIGMxLjUyMi0xLjkwNiwyLjE4OS00LjE0NSwxLjk5MS02LjcxNkM0NjAuMDY4LDIyOS4wMDcsNDU5LjAyMSwyMjYuOTYxLDQ1Ny4xMjIsMjI1LjQzOHpcIi8+XHJcbiAgICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDxnPlxyXG4gICAgICAgICAgPC9nPlxyXG4gICAgICAgICAgPGc+XHJcbiAgICAgICAgICA8L2c+XHJcbiAgICAgICAgICA8Zz5cclxuICAgICAgICAgIDwvZz5cclxuICAgICAgICAgIDwvc3ZnPlxyXG4gICAgICAgIDxhPkhvbWU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8bGk+XHJcbiAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPlxyXG4gICAgICA8c3ZnIHZlcnNpb249XCIxLjFcIiBpZD1cIkNhcGFfMVwiIHhtbG5zPVwiaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmdcIiAgeD1cIjBweFwiIHk9XCIwcHhcIiB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMnB4XCIgdmlld0JveD1cIjAgMCAzMTkuODc2IDMxOS44NzVcIiBcclxuXHQgPlxyXG48Zz5cclxuXHQ8Zz5cclxuXHRcdDxwYXRoIGQ9XCJNMTc3Ljk1OCwyMDAuNjA4bDEzMC40NjctNTEuMjI3YzYuMzIyLTIuNDc4LDExLjQ1MS04LjM3NCwxMS40NTEtMTMuMTYzdi04LjY3N1Y3NS43NjJcclxuXHRcdFx0YzAtNi43ODgtNS41MDctMTIuMjk4LTEyLjI5OC0xMi4yOThjMCwwLTUuMjQyLDAtMTEuNjk3LDBjLTYuNDYyLDAtMTEuMjI5LTAuODUtMTAuOTQxLTEuOTgxXHJcblx0XHRcdGMwLjE3NC0wLjY3NiwwLjI2NS0xLjM4NCwwLjI2NS0yLjEwMmMwLTUuNjcyLTUuNTEzLTEwLjI2My0xMi4yOTgtMTAuMjYzaC0xMi43MTljLTYuNzkxLDAtMTIuMjk3LDQuNTkxLTEyLjI5NywxMC4yNjNcclxuXHRcdFx0YzAsMC43MjQsMC4wOSwxLjQyNiwwLjI2NCwyLjEwN2MwLjI4OCwxLjE0NC0zLjI3MiwyLTguMjYzLDIuMDIzYy0zLjMwMywwLjAxMi02LjQ2MSwwLjAyNC05LjAyNSwwLjAzXHJcblx0XHRcdGMtMS45NzYsMC4wMDYtNC4wMTcsMC4wMTItNS45OTksMC4wMTJjLTYuNzkxLDAuMDE2LTEyLjA4MS01LjU2OS0xMy41MjgtMTIuMTk4Yy02Ljg2My0zMS4zNi00MC4wNTgtMjkuNzMtNDAuMDU4LTI5LjczaC0yMi42MjZcclxuXHRcdFx0Yy0zMC41NjQsMC0zOS4xOTMsMTcuMzE1LTQxLjQ1NCwyOS42OTRjLTEuMjI1LDYuNjgzLTYuMDU5LDEyLjI1LTEyLjg0NCwxMi4yNUg4OWMtMS43ODMsMC0zLjg2Ny0wLjAwNi02LjA4OS0wLjAyMVxyXG5cdFx0XHRjLTMuMzU2LTAuMDEyLTUuNjAzLTAuODg2LTUuMjk5LTIuMDMyYzAuMTc3LTAuNjg1LDAuMjctMS40MDUsMC4yNy0yLjEzNWMwLTUuNjcyLTUuNTA5LTEwLjI2My0xMi4yOTgtMTAuMjYzSDUyLjg2M1xyXG5cdFx0XHRjLTYuNzg4LDAtMTIuMjk4LDQuNTkxLTEyLjI5OCwxMC4yNjNjMCwwLjcwNSwwLjA4NCwxLjM5NiwwLjI1MiwyLjA2NWMwLjI3NiwxLjEyNi00Ljc4LDEuOTQyLTExLjU2OCwxLjkzN1xyXG5cdFx0XHRjLTYuMjIxLTAuMDA2LTEyLjEwNi0wLjAwNi0xNi45NDYtMC4wMTJDNS41MSw2My4zNzIsMCw2OC44OCwwLDc1LjY2OXY1MS44NzJjMCwwLDAsMy43OCwwLDguNDQ5XHJcblx0XHRcdGMwLDQuNjY2LDUuMTcsMTAuMzM3LDExLjU1MywxMi42NjFMMTU0Ljk2LDIwMC44OUMxNjEuMzQsMjAzLjIxNCwxNzEuNjQyLDIwMy4wOTQsMTc3Ljk1OCwyMDAuNjA4eiBNMTI5LjQzNCw1MS43MDdcclxuXHRcdFx0YzIuNjY5LTUuMTkxLDguMDItMTAuMTE1LDE4LjczMi0xMC4xMTVoMTAuNjk4aDEuMDg0aDEwLjY5N2MxMC43MTMsMCwxNi4wNTcsNC45MjQsMTguNzI5LDEwLjExNVxyXG5cdFx0XHRjMy4wOTksNi4wMzgtMi45LDExLjg4Ni05LjY4NiwxMS44ODZoLTE5Ljc1aC0xLjA4aC0xOS43MzJDMTMyLjMzMSw2My41OTMsMTI2LjMyOSw1Ny43NDUsMTI5LjQzNCw1MS43MDd6XCIvPlxyXG5cdFx0PHBhdGggZD1cIk0xNjYuNjQ2LDIyNC4xODNjLTEuMDc1LDAtMi4xNDQtMC4xODctMy4xNjUtMC41NTlMMTEuNTYsMTY4LjI4NWMtNi4zODMtMi4zMjQtMTEuNTU0LDEuMjkxLTExLjU1NCw4LjA4MnY1Ny44MjZ2NTEuNjg0XHJcblx0XHRcdGMwLDYuNzkxLDUuNTA0LDEyLjI5NywxMi4yOTgsMTIuMjk3aDUxLjA0MWgxMy4zNjRoMTU0LjE2NGM2Ljc4NiwwLDE3LjgxMSwwLjA0OSwyNC41OTYsMC4wNjFcclxuXHRcdFx0YzE0LjMxLDAuMDIzLDM3Ljc5NSwwLjAzLDUyLjA5OCwwLjAzYzYuNzkyLDAuMDA2LDEyLjI5OC01LjUwNywxMi4yOTgtMTIuMjkydi01MS43Nzl2LTU3LjE4NGMwLTYuNzkyLTUuMTE2LTEwLjI4Ni0xMS40NDUtNy44MTJcclxuXHRcdFx0bC0xMzguNDIyLDU0LjM0NEMxNjguOTI3LDIyMy45NzIsMTY3Ljc4NiwyMjQuMTgzLDE2Ni42NDYsMjI0LjE4M3pcIi8+XHJcblx0PC9nPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjxnPlxyXG48L2c+XHJcbjwvc3ZnPlxyXG4gICAgICAgIDxhPlByb2plY3RzPC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L0xpbms+XHJcbiAgICA8L2xpPlxyXG4gICAgPGxpPlxyXG4gICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj5cclxuICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgIHg9XCIwcHhcIiB5PVwiMHB4XCJcclxuXHQgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgNDUuOTU4IDQ1Ljk1OFwiIFxyXG5cdCA+XHJcbjxnPlxyXG5cdDxnPlxyXG5cdFx0PHBhdGggZD1cIk0zOS4yODcsNDEuOTU1bC0xLjYyNi0xMi43NmMtMC41NTYtNC4zNzUtNC4yNzgtNy42MS04LjY4OC03LjYxSDE2Ljk4NWMtNC40MSwwLTguMTMzLDMuMjM1LTguNjg4LDcuNjFMNi42Nyw0MS45NzlcclxuXHRcdFx0Yy0wLjExMiwwLjg5NCwwLjE2MywyLjAxOCwwLjc1OCwyLjY5MmMwLjU5NiwwLjY3NSwxLjQ1MywxLjI4NywyLjM1MywxLjI4N2gyNi4zOTVjMC45LDAsMS43NTctMC42MjQsMi4zNTQtMS4yOTlcclxuXHRcdFx0QzM5LjEyNSw0My45ODIsMzkuNCw0Mi44NSwzOS4yODcsNDEuOTU1elwiLz5cclxuXHRcdDxjaXJjbGUgY3g9XCIyMi45NzhcIiBjeT1cIjkuMzNcIiByPVwiOS4zM1wiLz5cclxuXHQ8L2c+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPGc+XHJcbjwvZz5cclxuPC9zdmc+XHJcbiAgICAgICAgPGE+QWJvdXQgTWU8L2E+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvTGluaz5cclxuICAgIDwvbGk+XHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5uYXYge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnO1xyXG4gICAgICAgIG1hcmdpbjogMHB4IDAgMDtcclxuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzIzMkEzNDtcclxuICAgICAgfVxyXG4gICAgICAuaWNvbi1jb250YWluZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDQwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XHJcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAxcHg7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQtY29sb3I6ICMzMDM5NDc7XHJcbiAgICAgIH1cclxuICAgICAgZGl2OmhvdmVyIHN2ZyB7XHJcbiAgICAgICAgZmlsbDogI2YyYWIzNztcclxuICAgICAgfVxyXG4gICAgICAubmF2IGxpIGRpdjpob3ZlciBhIHtcclxuICAgICAgICBjb2xvcjogI2YyYWIzNztcclxuICAgICAgfVxyXG4gICAgICBzdmcge1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBmaWxsOiAjNTA1NzY1O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOi4zcztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgIH1cclxuICAgICAgc3ZnOmhvdmVyIHtcclxuICAgICAgICBmaWxsOiAjZjJhYjM3O1xyXG4gICAgICB9XHJcbiAgICAgIC5uYXYgbGkgZGl2IGEge1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIGhlaWdodDogYXV0bztcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgY29sb3I6ICM1MDU3NjU7XHJcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOi4zcztcclxuICAgICAgICB0cmFuc2l0aW9uOi4zcztcclxuICAgICAgfVxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgLmljb24tY29udGFpbmVyIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgcGFkZGluZzogMTVweCAyNXB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xyXG4gICAgICAgICAgYm9yZGVyLXdpZHRoOiAwcHg7XHJcbiAgICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzMwMzk0NztcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5uYXYgbGkge1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2IGxpIGEge1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAubmF2IGxpIGRpdiBhIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgaGVpZ2h0OiBhdXRvO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgICAgY29sb3I6ICM1MDU3NjU7XHJcbiAgICAgICAgICBmb250LXdlaWdodDogMzAwO1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgICAtbXMtdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOi4zcztcclxuICAgICAgICAgIHRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgYH08L3N0eWxlPlxyXG4gIDwvdWw+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBOYXY7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\rhuwe\\\\Desktop\\\\Coding Projects\\\\rhuwellsamano\\\\components\\\\Nav.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/map.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/map.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/map */ "core-js/library/fn/map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/assign.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/assign */ "core-js/library/fn/object/assign");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/create.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/create */ "core-js/library/fn/object/create");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/define-property */ "core-js/library/fn/object/define-property");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js":
/*!*******************************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/get-own-property-descriptor */ "core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/object/keys.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/object/keys */ "core-js/library/fn/object/keys");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/promise.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/promise.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/promise */ "core-js/library/fn/promise");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol */ "core-js/library/fn/symbol");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js":
/*!************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/symbol/iterator */ "core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/weak-map.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/weak-map */ "core-js/library/fn/weak-map");

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/extends.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/extends.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__(/*! ../core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

function _extends() {
  module.exports = _extends = _Object$assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js":
/*!******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__(/*! ../core-js/object/get-own-property-descriptor */ "./node_modules/@babel/runtime-corejs2/core-js/object/get-own-property-descriptor.js");

var _Object$defineProperty = __webpack_require__(/*! ../core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js");

var _WeakMap = __webpack_require__(/*! ../core-js/weak-map */ "./node_modules/@babel/runtime-corejs2/core-js/weak-map.js");

function _getRequireWildcardCache() {
  if (typeof _WeakMap !== "function") return null;
  var cache = new _WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = _Object$defineProperty && _Object$getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime-corejs2/helpers/typeof.js":
/*!***************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/helpers/typeof.js ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__(/*! ../core-js/symbol/iterator */ "./node_modules/@babel/runtime-corejs2/core-js/symbol/iterator.js");

var _Symbol = __webpack_require__(/*! ../core-js/symbol */ "./node_modules/@babel/runtime-corejs2/core-js/symbol.js");

function _typeof2(obj) { if (typeof _Symbol === "function" && typeof _Symbol$iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof _Symbol === "function" && _typeof2(_Symbol$iterator) === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof _Symbol === "function" && obj.constructor === _Symbol && obj !== _Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/map */ "./node_modules/@babel/runtime-corejs2/core-js/map.js"));

var _url = __webpack_require__(/*! url */ "url");

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

var _router = _interopRequireDefault(__webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js"));

var _rewriteUrlForExport = __webpack_require__(/*! ../next-server/lib/router/rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

var _utils = __webpack_require__(/*! ../next-server/lib/utils */ "./node_modules/next/dist/next-server/lib/utils.js");

function isLocal(href) {
  var url = (0, _url.parse)(href, false, true);
  var origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  var lastHref = null;
  var lastAs = null;
  var lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    var result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

var observer;
var listeners = new _map.default();
var IntersectionObserver = false ? undefined : null;

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (observer) {
    return observer;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      var cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        observer.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

var listenToIntersections = (el, cb) => {
  var observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

class Link extends _react.Component {
  constructor(props) {
    super(props);
    this.p = void 0;

    this.cleanUpListeners = () => {};

    this.formatUrls = memoizedFormatUrl((href, asHref) => {
      return {
        href: formatUrl(href),
        as: asHref ? formatUrl(asHref) : asHref
      };
    });

    this.linkClicked = e => {
      // @ts-ignore target exists on currentTarget
      var {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      var {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      var {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      var {
        scroll
      } = this.props;

      if (scroll == null) {
        scroll = as.indexOf('#') < 0;
      } // replace state instead of push if prop is present


      _router.default[this.props.replace ? 'replace' : 'push'](href, as, {
        shallow: this.props.shallow
      }).then(success => {
        if (!success) return;

        if (scroll) {
          window.scrollTo(0, 0);
          document.body.focus();
        }
      });
    };

    if (true) {
      if (props.prefetch) {
        console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/zeit/next.js/prefetch-true-deprecated');
      }
    }

    this.p = props.prefetch !== false;
  }

  componentWillUnmount() {
    this.cleanUpListeners();
  }

  handleRef(ref) {
    if (this.p && IntersectionObserver && ref && ref.tagName) {
      this.cleanUpListeners();
      this.cleanUpListeners = listenToIntersections(ref, () => {
        this.prefetch();
      });
    }
  } // The function is memoized so that no extra lifecycles are needed
  // as per https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html


  prefetch() {
    if (!this.p || true) return; // Prefetch the JSON page if asked (only in the client)

    var {
      pathname
    } = window.location;
    var {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    var href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    var {
      children
    } = this.props;
    var {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    var child = _react.Children.only(children);

    var props = {
      ref: el => {
        this.handleRef(el);

        if (child && typeof child === 'object' && child.ref) {
          if (typeof child.ref === 'function') child.ref(el);else if (typeof child.ref === 'object') {
            child.ref.current = el;
          }
        }
      },
      onMouseEnter: e => {
        if (child.props && typeof child.props.onMouseEnter === 'function') {
          child.props.onMouseEnter(e);
        }

        this.prefetch();
      },
      onClick: e => {
        if (child.props && typeof child.props.onClick === 'function') {
          child.props.onClick(e);
        }

        if (!e.defaultPrevented) {
          this.linkClicked(e);
        }
      }
    }; // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
    // defined, we specify the current 'href', so that repetition is not needed by the user

    if (this.props.passHref || child.type === 'a' && !('href' in child.props)) {
      props.href = as || href;
    } // Add the ending slash to the paths. So, we can serve the
    // "<page>/index.html" directly.


    if (false) {}

    return _react.default.cloneElement(child, props);
  }

}

Link.propTypes = void 0;

if (true) {
  var warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  var exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      var value = props[propName];

      if (typeof value === 'string') {
        warn("Warning: You're using a string directly inside <Link>. This usage has been deprecated. Please add an <a> tag as child of <Link>");
      }

      return null;
    }]).isRequired
  });
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _defineProperty = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "./node_modules/next/dist/next-server/lib/router-context.js");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

var singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

var urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
var routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
var coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

(0, _defineProperty.default)(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  (0, _defineProperty.default)(singletonRouter, field, {
    get() {
      var router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    var router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      var eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      var _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...arguments);
        } catch (err) {
          // tslint:disable-next-line:no-console
          console.error("Error when running the Router event: " + eventField); // tslint:disable-next-line:no-console

          console.error(err.message + "\n" + err.stack);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    var message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


var createRouter = function createRouter() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  var _router = router;
  var instance = {};

  for (var property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = (0, _extends2.default)({}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = function () {
      return _router[field](...arguments);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime-corejs2/helpers/interopRequireDefault */ "./node_modules/@babel/runtime-corejs2/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime-corejs2/helpers/extends */ "./node_modules/@babel/runtime-corejs2/helpers/extends.js"));

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    var name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/create */ "./node_modules/@babel/runtime-corejs2/core-js/object/create.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function mitt() {
  const all = _Object$create(null);

  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        // tslint:disable-next-line:no-bitwise
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

exports.default = mitt;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router-context.js":
/*!******************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router-context.js ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importStar = this && this.__importStar || function (mod) {
  if (mod && mod.__esModule) return mod;
  var result = {};
  if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
  result["default"] = mod;
  return result;
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const React = __importStar(__webpack_require__(/*! react */ "react"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function rewriteUrlForNextExport(url) {
  const [pathname, hash] = url.split('#'); // tslint:disable-next-line

  let [path, qs] = pathname.split('?');
  path = path.replace(/\/$/, ''); // Append a trailing slash if this path does not have an extension

  if (!/\.[^/]+\/?$/.test(path)) path += `/`;
  if (qs) path += '?' + qs;
  if (hash) path += '#' + hash;
  return path;
}

exports.rewriteUrlForNextExport = rewriteUrlForNextExport;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__(/*! @babel/runtime-corejs2/core-js/promise */ "./node_modules/@babel/runtime-corejs2/core-js/promise.js");

var _Object$assign = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/assign */ "./node_modules/@babel/runtime-corejs2/core-js/object/assign.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");

const mitt_1 = __importDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

const utils_1 = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

const rewrite_url_for_export_1 = __webpack_require__(/*! ./rewrite-url-for-export */ "./node_modules/next/dist/next-server/lib/router/rewrite-url-for-export.js");

const is_dynamic_1 = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

const route_matcher_1 = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

const route_regex_1 = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

function toRoute(path) {
  return path.replace(/\/$/, '') || '/';
}

class Router {
  constructor(pathname, query, as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    err,
    subscription
  }) {
    this.onPopState = e => {
      if (!e.state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', utils_1.formatWithValidation({
          pathname,
          query
        }), utils_1.getURL());
        return;
      } // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site


      if (e.state && this.isSsr && e.state.url === this.pathname && e.state.as === this.asPath) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(e.state)) {
        return;
      }

      const {
        url,
        as,
        options
      } = e.state;

      if (true) {
        if (typeof url === 'undefined' || typeof as === 'undefined') {
          console.warn('`popstate` event triggered but `event.state` did not have `url` or `as` https://err.sh/zeit/next.js/popstate-state-empty');
        }
      }

      this.replace(url, as, options);
    }; // represents the current component key


    this.route = toRoute(pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        props: initialProps,
        err
      };
    }

    this.components['/_app'] = {
      Component: App
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented
    // @ts-ignore backwards compatibility

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = pathname;
    this.query = query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    is_dynamic_1.isDynamicRoute(pathname) && __NEXT_DATA__.autoExport ? pathname : as;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;

    if (false) {}
  } // @deprecated backwards compatibility even though it's a private method.


  static _rewriteUrlForNextExport(url) {
    return rewrite_url_for_export_1.rewriteUrlForNextExport(url);
  }

  update(route, mod) {
    const Component = mod.default || mod;
    const data = this.components[route];

    if (!data) {
      throw new Error(`Cannot update unavailable route: ${route}`);
    }

    const newData = _Object$assign({}, data, {
      Component
    });

    this.components[route] = newData; // pages/_app.js updated

    if (route === '/_app') {
      this.notify(this.components[this.route]);
      return;
    }

    if (route === this.route) {
      this.notify(newData);
    }
  }

  reload() {
    window.location.reload();
  }
  /**
   * Go back in history
   */


  back() {
    window.history.back();
  }
  /**
   * Performs a `pushState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  push(url, as = url, options = {}) {
    return this.change('pushState', url, as, options);
  }
  /**
   * Performs a `replaceState` with arguments
   * @param url of the route
   * @param as masks `url` for the browser
   * @param options object you can define `shallow` and other options
   */


  replace(url, as = url, options = {}) {
    return this.change('replaceState', url, as, options);
  }

  change(method, _url, _as, options) {
    return new _Promise((resolve, reject) => {
      if (!options._h) {
        this.isSsr = false;
      } // marking route changes as a navigation start entry


      if (utils_1.SUPPORTS_PERFORMANCE_USER_TIMING) {
        performance.mark('routeChange');
      } // If url and as provided as an object representation,
      // we'll format them into the string version here.


      const url = typeof _url === 'object' ? utils_1.formatWithValidation(_url) : _url;
      let as = typeof _as === 'object' ? utils_1.formatWithValidation(_as) : _as; // Add the ending slash to the paths. So, we can serve the
      // "<page>/index.html" directly for the SSR page.

      if (false) {}

      this.abortComponentLoad(as); // If the url change is only related to a hash change
      // We should not proceed. We should only change the state.
      // WARNING: `_h` is an internal option for handing Next.js client-side
      // hydration. Your app should _never_ use this property. It may change at
      // any time without notice.

      if (!options._h && this.onlyAHashChange(as)) {
        this.asPath = as;
        Router.events.emit('hashChangeStart', as);
        this.changeState(method, url, as);
        this.scrollToHash(as);
        Router.events.emit('hashChangeComplete', as);
        return resolve(true);
      }

      const {
        pathname,
        query,
        protocol
      } = url_1.parse(url, true);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return resolve(false);
      } // If asked to change the current URL we should reload the current page
      // (not location.reload() but reload getInitialProps and other Next.js stuffs)
      // We also need to set the method = replaceState always
      // as this should not go into the history (That's how browsers work)
      // We should compare the new asPath to the current asPath, not the url


      if (!this.urlIsNew(as)) {
        method = 'replaceState';
      } // @ts-ignore pathname is always a string


      const route = toRoute(pathname);
      const {
        shallow = false
      } = options;

      if (is_dynamic_1.isDynamicRoute(route)) {
        const {
          pathname: asPathname
        } = url_1.parse(as);
        const routeMatch = route_matcher_1.getRouteMatcher(route_regex_1.getRouteRegex(route))(asPathname);

        if (!routeMatch) {
          const error = `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). ` + `Read more: https://err.sh/zeit/next.js/incompatible-href-as`;

          if (true) {
            throw new Error(error);
          } else {}

          return resolve(false);
        } // Merge params into `query`, overwriting any specified in search


        _Object$assign(query, routeMatch);
      }

      Router.events.emit('routeChangeStart', as); // If shallow is true and the route exists in the router cache we reuse the previous result
      // @ts-ignore pathname is always a string

      this.getRouteInfo(route, pathname, query, as, shallow).then(routeInfo => {
        const {
          error
        } = routeInfo;

        if (error && error.cancelled) {
          return resolve(false);
        }

        Router.events.emit('beforeHistoryChange', as);
        this.changeState(method, url, as, options);
        const hash = window.location.hash.substring(1);

        if (true) {
          const appComp = this.components['/_app'].Component;
          window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
        } // @ts-ignore pathname is always defined


        this.set(route, pathname, query, as, _Object$assign({}, routeInfo, {
          hash
        }));

        if (error) {
          Router.events.emit('routeChangeError', error, as);
          throw error;
        }

        Router.events.emit('routeChangeComplete', as);
        return resolve(true);
      }, reject);
    });
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      } // @ts-ignore method should always exist on history


      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || utils_1.getURL() !== as) {
      // @ts-ignore method should always exist on history
      window.history[method]({
        url,
        as,
        options
      }, null, as);
    }
  }

  getRouteInfo(route, pathname, query, as, shallow = false) {
    const cachedRouteInfo = this.components[route]; // If there is a shallow route transition possible
    // If the route is already rendered on the screen.

    if (shallow && cachedRouteInfo && this.route === route) {
      return _Promise.resolve(cachedRouteInfo);
    }

    return new _Promise((resolve, reject) => {
      if (cachedRouteInfo) {
        return resolve(cachedRouteInfo);
      }

      this.fetchComponent(route).then(Component => resolve({
        Component
      }), reject);
    }).then(routeInfo => {
      const {
        Component
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      return new _Promise((resolve, reject) => {
        // we provide AppTree later so this needs to be `any`
        this.getInitialProps(Component, {
          pathname,
          query,
          asPath: as
        }).then(props => {
          routeInfo.props = props;
          this.components[route] = routeInfo;
          resolve(routeInfo);
        }, reject);
      });
    }).catch(err => {
      return new _Promise(resolve => {
        if (err.code === 'PAGE_LOAD_ERROR') {
          // If we can't load the page it could be one of following reasons
          //  1. Page doesn't exists
          //  2. Page does exist in a different zone
          //  3. Internal error while loading the page
          // So, doing a hard reload is the proper way to deal with this.
          window.location.href = as; // Changing the URL doesn't block executing the current code path.
          // So, we need to mark it as a cancelled error and stop the routing logic.

          err.cancelled = true; // @ts-ignore TODO: fix the control flow here

          return resolve({
            error: err
          });
        }

        if (err.cancelled) {
          // @ts-ignore TODO: fix the control flow here
          return resolve({
            error: err
          });
        }

        resolve(this.fetchComponent('/_error').then(Component => {
          const routeInfo = {
            Component,
            err
          };
          return new _Promise(resolve => {
            this.getInitialProps(Component, {
              err,
              pathname,
              query
            }).then(props => {
              routeInfo.props = props;
              routeInfo.error = err;
              resolve(routeInfo);
            }, gipErr => {
              console.error('Error in error page `getInitialProps`: ', gipErr);
              routeInfo.error = err;
              routeInfo.props = {};
              resolve(routeInfo);
            });
          });
        }));
      });
    });
  }

  set(route, pathname, query, as, data) {
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    this.notify(data);
  }
  /**
   * Callback to execute before replacing router state
   * @param cb callback to be executed
   */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }
  /**
   * Prefetch `page` code, you may wait for the data during `page` rendering.
   * This feature only works in production!
   * @param url of prefetched `page`
   */


  prefetch(url) {
    return new _Promise((resolve, reject) => {
      const {
        pathname,
        protocol
      } = url_1.parse(url);

      if (!pathname || protocol) {
        if (true) {
          throw new Error(`Invalid href passed to router: ${url} https://err.sh/zeit/next.js/invalid-href-passed`);
        }

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (true) return; // @ts-ignore pathname is always defined

      const route = toRoute(pathname);
      this.pageLoader.prefetch(route).then(resolve, reject);
    });
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const Component = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return Component;
  }

  async getInitialProps(Component, ctx) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    const {
      Component: App
    } = this.components['/_app'];
    let props;

    if (Component.__NEXT_SPR) {
      let status; // pathname should have leading slash

      let {
        pathname
      } = url_1.parse(ctx.asPath || ctx.pathname);
      pathname = !pathname || pathname === '/' ? '/index' : pathname;
      props = await fetch( // @ts-ignore __NEXT_DATA__
      `/_next/data/${__NEXT_DATA__.buildId}${pathname}.json`).then(res => {
        if (!res.ok) {
          status = res.status;
          throw new Error('failed to load prerender data');
        }

        return res.json();
      }).catch(err => {
        console.error(`Failed to load data`, status, err);
        window.location.href = pathname;
        return new _Promise(() => {});
      });
    } else {
      const AppTree = this._wrapApp(App);

      ctx.AppTree = AppTree;
      props = await utils_1.loadGetInitialProps(App, {
        AppTree,
        Component,
        router: this,
        ctx
      });
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    if (cancelled) {
      const err = new Error('Loading initial props cancelled');
      err.cancelled = true;
      throw err;
    }

    return props;
  }

  abortComponentLoad(as) {
    if (this.clc) {
      const e = new Error('Route Cancelled');
      e.cancelled = true;
      Router.events.emit('routeChangeError', e, as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    this.sub(data, this.components['/_app'].Component);
  }

}

Router.events = mitt_1.default();
exports.default = Router;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = decodeURIComponent;
    const params = {};

    _Object$keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });

    return params;
  };
}

exports.getRouteMatcher = getRouteMatcher;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

function getRouteRegex(normalizedRoute) {
  // Escape all characters that could be considered RegEx
  const escapedRoute = (normalizedRoute.replace(/\/$/, '') || '/').replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = escapedRoute.replace(/\/\\\[([^/]+?)\\\](?=\/|$)/g, (_, $1) => {
    const isCatchAll = /^(\\\.){3}/.test($1);
    groups[$1 // Un-escape key
    .replace(/\\([|\\{}()[\]^$+*?.-])/g, '$1').replace(/^\.{3}/, '') // eslint-disable-next-line no-sequences
    ] = {
      pos: groupIndex++,
      repeat: isCatchAll
    };
    return isCatchAll ? '/(.+?)' : '/([^/]+?)';
  });
  return {
    re: new RegExp('^' + parameterizedRoute + '(?:/)?$', 'i'),
    groups
  };
}

exports.getRouteRegex = getRouteRegex;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/keys */ "./node_modules/@babel/runtime-corejs2/core-js/object/keys.js");

var _Object$defineProperty = __webpack_require__(/*! @babel/runtime-corejs2/core-js/object/define-property */ "./node_modules/@babel/runtime-corejs2/core-js/object/define-property.js");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__(/*! url */ "url");
/**
 * Utils
 */


function execOnce(fn) {
  let used = false;
  let result = null;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn.apply(this, args);
    }

    return result;
  };
}

exports.execOnce = execOnce;

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

exports.getLocationOrigin = getLocationOrigin;

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

exports.getURL = getURL;

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

exports.getDisplayName = getDisplayName;

function isResSent(res) {
  return res.finished || res.headersSent;
}

exports.isResSent = isResSent;

async function loadGetInitialProps(App, ctx) {
  if (true) {
    if (App.prototype && App.prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/zeit/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (_Object$keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/zeit/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      _Object$keys(url).forEach(key => {
        if (exports.urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\rhuwe\\Desktop\\Coding Projects\\rhuwellsamano\\pages\\index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Homepage = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Homepage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "cover",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "hello",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "BRILLIANTLY DESIGNED AND BUILT."), __jsx("div", {
  className: "jsx-2990483942" + " " + "subtitle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "RHUWELL SAMANO \u2022 FULL STACK SOFTWARE ENGINEER"), __jsx("a", {
  href: "#jump-to-top",
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "LEARN MORE"), __jsx("a", {
  href: "http://medium.com/@rhuwell",
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, "MEDIUM"), __jsx("a", {
  href: "https://www.linkedin.com/in/rhuwellsamano/",
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "LINKEDIN"), __jsx("a", {
  href: "https://github.com/rhuwellsamano",
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "GITHUB"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, __jsx("div", {
  id: "jump-to-top",
  className: "jsx-2990483942" + " " + "text-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "About."), __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "CONNECTED THROUGH CREATION"), __jsx("h4", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "\"What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.\" -- Pericles"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "My name is Rhuwell Samano and I'm a Full Stack Software Engineer. I specialize in React and mainly code in Javascript. I have a particularly rare combination of skills that allow me to have valuable insight into many, if not all, types of digital projects. "), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "By using Software Engineering, Digital Marketing and Web & App Design, I'm able to understand all of the moving parts of a project and connect them together into a beautiful handcrafted system that fuels and grows powerful brands. "), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "I'm passionate about creating world-class experiences for various communities using websites, applications, and digital media. The most important person I care about and create for is the end-user. I thoroughly enjoy working with others towards achieving that goal, no matter the project."), __jsx("div", {
  className: "jsx-2990483942" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container-work",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2990483942" + " " + "work-h2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "Work."), __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, "RECENT PROJECTS"), __jsx("div", {
  className: "jsx-2990483942" + " " + "projects-row-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "projects-row-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects#blink-health",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "project-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/blink-health-mockup.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects#sick-fits",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 60
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "project-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 61
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/sick-fits-mockup.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
})))), __jsx("div", {
  className: "jsx-2990483942" + " " + "projects-row-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects#majin-sushi",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 70
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "project-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/majin-sushi-mockup.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}))), __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects#linkedup",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "project-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/linkedup-mockup.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, "View My Projects"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-2-mobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 101
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}, "Skills."), __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, "THE PERFECT TRIFECTA"), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/software-engineer.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, "SOFTWARE ENGINEERING"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, "From the front-end to the back-end, I'm able to dive into all sorts of projects and work with what's there - or start from scratch."))), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/digital-marketing.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, "DIGITAL MARKETING"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, "By using modern digital tools, ancient human psychology, and classic storytelling - I can grow leads and increase the bottom-line."))), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 130
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/designer.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 131
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, "WEB & APP DESIGN"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, "From a sketch on a napkin or a whiteboard, I'm able to design and craft ideas into mock-ups using best practices in the industry."))), __jsx("div", {
  className: "jsx-2990483942" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container-tech",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, "Tech."), __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, "TOOLS OF THE TRADE"), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-rows-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-react",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-python",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-django",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 172
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-ruby_on_rails",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}))), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 180
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-javascript_badge",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-nodejs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 186
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-html5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 190
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-css3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 194
  },
  __self: undefined
}))), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-npm",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 200
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-swift",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 204
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-photoshop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-illustrator",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
})))), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}, "GitHub Contributions - Updated 1/21/20"), __jsx("img", {
  src: "/static/github-calendar.png",
  alt: "",
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2990483942" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  },
  __self: undefined
}, "View My Projects"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-4-mobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 233
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 234
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 236
  },
  __self: undefined
}, "Education."), __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237
  },
  __self: undefined
}, "KNOWLEDGE IS KEY"), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "education-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/flatironschool.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 241
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 245
  },
  __self: undefined
}, "FLATIRON SCHOOL"), __jsx("h4", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246
  },
  __self: undefined
}, "Known as the \"Ivy League of coding bootcamps\""), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 247
  },
  __self: undefined
}, "Full Stack Software Engineering | React, Javascript, Ruby on Rails"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "education-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/teamtreehouse.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 253
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 256
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 257
  },
  __self: undefined
}, "TEAMTREEHOUSE"), __jsx("h4", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258
  },
  __self: undefined
}, "A top-tier online school for learning code"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259
  },
  __self: undefined
}, "Full Stack Javascript Development & Full Stack Web Development"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 263
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "education-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 264
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/csi.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 265
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 268
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269
  },
  __self: undefined
}, "COLLEGE OF STATEN ISLAND"), __jsx("h4", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270
  },
  __self: undefined
}, "The single, largest campus in all of New York City"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 271
  },
  __self: undefined
}, "BS: Business Marketing (2012-2016)"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 277
  },
  __self: undefined
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container-contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 288
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 289
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 293
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 294
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 295
  },
  __self: undefined
}, "Contact."), __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 296
  },
  __self: undefined
}, "HOW CAN I HELP YOU?"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 298
  },
  __self: undefined
}, "I hope you've enjoyed learning more about me! ", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 298
  },
  __self: undefined
}), "It's definitely just scratching the surface of my abilities and definitely my personality, too. ", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 298
  },
  __self: undefined
}), "The industry has coined a term for someone", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 298
  },
  __self: undefined
}), " with my skillset but I refuse to be labeled as a Unicorn. \uD83D\uDE05 Jokes aside, I'm very well-rounded and I approach challenges head-on with an aura of high-spirits and unshakeable confidence."), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 300
  },
  __self: undefined
}, "What challenges are you currently facing? ", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 300
  },
  __self: undefined
}), "Is there anything you think I can help you with?", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301
  },
  __self: undefined
}), "Do you think I would be a good addition", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301
  },
  __self: undefined
}), " to your engineering team? \uD83E\uDD14"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303
  },
  __self: undefined
}, "If so, I'm currently available ", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303
  },
  __self: undefined
}), "for new opportunities ", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303
  },
  __self: undefined
}), "as a Full Stack Software Engineer!"), __jsx("h5", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 304
  },
  __self: undefined
}, "If you would like to get in touch with me, ", __jsx("br", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 304
  },
  __self: undefined
}), "I'm always checking my e-mails!"), __jsx("h3", {
  className: "jsx-2990483942",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 306
  },
  __self: undefined
}, "rhuwell.samano@gmail.com"), __jsx("h2", {
  className: "jsx-2990483942" + " " + "contact-h2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 307
  },
  __self: undefined
}, "Thank you!"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-6-mobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 314
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2990483942",
  __self: undefined
}, ".cover.jsx-2990483942{position:relative;min-height:130vh;background:transparent url(/static/pro-cover.JPG) no-repeat center center;background-size:cover;background-attachment:fixed;background-position:top;background-repeat:no-repeat;background-size:cover;text-align:left;}.hello.jsx-2990483942{color:#FFF;line-height:1.4;display:inline-block;position:relative;top:200px;left:50px;padding-left:80px;padding-right:80px;opacity:100%;}.hello.jsx-2990483942 h1.jsx-2990483942{line-height:1.0;font-family:'Galano';color:#FFF;font-size:92px;margin:0 0 0px 0;padding:0px;}.subtitle.jsx-2990483942{font-family:\"HomepageBaukasten-Bold\";font-size:16px;margin-top:10px;margin-left:5px;}a.button.jsx-2990483942{font-family:'Larsseit';display:inline-block;text-transform:uppercase;font-size:16px;background:#F5AD25;margin-left:5px;margin-top:30px;padding:10px 40px;top:25px;color:#FFF;border-radius:5px;}.text-left.jsx-2990483942{text-align:left;padding:20px 130px;}.text-right.jsx-2990483942{text-align:right;padding:20px 130px;}h2.jsx-2990483942{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.work-h2.jsx-2990483942{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}.contact-h2.jsx-2990483942{font-family:'Galano';font-size:80px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}h3.jsx-2990483942{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;}.contact-h5.jsx-2990483942{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;margin-top:0px;}h4.jsx-2990483942{font-family:'CarreNoir';font-size:20px;color:#a6b1b9;padding:0px 0;margin-bottom:0px;}h5.jsx-2990483942{font-family:'Varta';font-size:16px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;}@media (max-width:480px){.hello.jsx-2990483942{font-family:'Galano';font-size:18px;padding:20px;}h1.jsx-2990483942{font-size:28px;}}.section-container.jsx-2990483942{height:140vh;display:block;max-width:100%;margin:0 auto;}.section-container-work.jsx-2990483942{height:130vh;display:block;max-width:100%;margin:0 auto;}.section-container-tech.jsx-2990483942{height:130vh;display:block;max-width:100%;margin:0 auto;}.section-container-contact.jsx-2990483942{height:140vh;display:block;max-width:100%;margin:0 auto;}.text-box.jsx-2990483942{box-sizing:border-box;background:#FFF;float:left;width:60%;height:100%;}.pic-box.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-about-me.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:right;width:40%;height:100%;}.text-box-2.jsx-2990483942{box-sizing:border-box;background:#f2efef;float:right;width:60%;height:100%;}.text-box-2.jsx-2990483942 h2.jsx-2990483942{color:#FFF;}.pic-box-2.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:left;width:40%;height:100%;}@media (max-width:480px){.pic-box-2-mobile.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:left;width:100%;height:100%;}}.projects-row-1.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-image-container.jsx-2990483942{width:100%;}.project-image.jsx-2990483942{width:100%;padding:7px;padding-top:0px;}.text-box-3.jsx-2990483942{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}.pic-box-3.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-skills.JPG) no-repeat center right;background-size:cover;background-position:top right 35%;float:right;width:40%;height:100%;}.pic-box-4.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}.skills-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.skills-image-container.jsx-2990483942{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.skills-text-container.jsx-2990483942{line-height:1.2;width:75%;display:inline;}.skills-text-container.jsx-2990483942 h3.jsx-2990483942{padding-top:0px;margin-top:0px;}.skills-text-container.jsx-2990483942 h5.jsx-2990483942{padding-top:0px;margin-top:0px;}.text-box-4.jsx-2990483942{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}.tech-rows-container.jsx-2990483942{margin-top:30px;}.tech-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.tech-image-container.jsx-2990483942{width:30%;padding:5px;}.tech-image-container.jsx-2990483942 span.jsx-2990483942{font-size:100px;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}.tech-image-container.jsx-2990483942 span.jsx-2990483942:hover{color:#F5AD25;}.pic-box-5.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-education.JPG) no-repeat center right;background-size:cover;background-position:bottom right 20%;float:left;width:40%;height:100%;}.text-box-5.jsx-2990483942{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}.text-box-5.jsx-2990483942 h2.jsx-2990483942{font-size:85px;}.education-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.education-image-container.jsx-2990483942{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.education-text-container.jsx-2990483942{line-height:1.2;width:75%;display:inline;}.education-text-container.jsx-2990483942 h3.jsx-2990483942{padding-top:0px;margin-top:0px;}.education-text-container.jsx-2990483942 h4.jsx-2990483942{padding-top:0px;margin-top:0px;}.education-text-container.jsx-2990483942 h5.jsx-2990483942{padding-top:0px;margin-top:0px;}.pic-box-6.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}.text-box-6.jsx-2990483942{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}@media (max-width:480px){.cover.jsx-2990483942{box-sizing:border-box;background:transparent url(/static/pro-cover.JPG) no-repeat center right;background-size:cover;background-position:top right 24%;text-align:left;height:80vh;}.hello.jsx-2990483942{color:#FFF;line-height:1.4;display:inline-block;position:relative;top:500px;left:10px;padding-left:20px;padding-right:80px;opacity:100%;}.hello.jsx-2990483942 h1.jsx-2990483942{line-height:1.0;font-family:'Galano';color:#FFF;font-size:30px;margin:0 0 0px 0;padding:0px;}.subtitle.jsx-2990483942{font-family:\"HomepageBaukasten-Bold\";font-size:10px;margin-top:10px;margin-left:0px;}a.button.jsx-2990483942{font-family:'Larsseit';display:inline-block;text-transform:uppercase;font-size:10px;background:#F5AD25;margin-left:5px;margin-top:30px;padding:8px 30px;top:25px;color:#FFF;border-radius:5px;}.text-left.jsx-2990483942{text-align:left;padding:5px 40px;}.text-right.jsx-2990483942{text-align:right;padding:5px 40px;}h2.jsx-2990483942{font-family:'Galano';font-size:60px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.work-h2.jsx-2990483942{font-family:'Galano';font-size:60px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}.contact-h2.jsx-2990483942{font-family:'Galano';font-size:40px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}h3.jsx-2990483942{font-family:'Galano';font-size:12px;color:#343D4F;padding:5px 0;margin-bottom:0px;}.contact-h5.jsx-2990483942{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;margin-top:0px;}h4.jsx-2990483942{font-family:'CarreNoir';font-size:12px;color:#a6b1b9;padding:0px 0;margin-bottom:0px;line-height:1.0;}h5.jsx-2990483942{font-family:'Varta';font-size:12px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;}@media (max-width:480px){.hello.jsx-2990483942{font-family:'Galano';font-size:18px;padding:20px;}h1.jsx-2990483942{font-size:28px;}}.section-container.jsx-2990483942{height:130vh;display:block;max-width:100%;margin:0 0;}.section-container-work.jsx-2990483942{height:90vh;display:block;max-width:100%;margin:0 0;}.section-container-tech.jsx-2990483942{height:100vh;display:block;max-width:100%;margin:0 0;}.section-container-contact.jsx-2990483942{height:180vh;display:block;max-width:100%;margin:0 auto;}.text-box.jsx-2990483942{box-sizing:border-box;background:#FFF;float:left;width:100%;height:100%;}.pic-box.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-about-me.JPG) no-repeat center right;background-size:cover;background-position:top right 28%;float:right;width:100%;height:100vh;}.text-box-2.jsx-2990483942{box-sizing:border-box;background:#f2efef;float:left;width:100%;height:100%;}.text-box-2.jsx-2990483942 h2.jsx-2990483942{color:#FFF;}.pic-box-2.jsx-2990483942{display:none;box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;width:100%;height:100%;}.pic-box-2-mobile.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:right;height:90vh;}.projects-row-1.jsx-2990483942{display:justify;}.project-image-container.jsx-2990483942{width:50%;}.project-image.jsx-2990483942{width:100%;padding:7px;padding-top:0px;}.text-box-3.jsx-2990483942{box-sizing:border-box;background:#1C212A;float:left;width:100%;height:100%;}.pic-box-3.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-skills.JPG) no-repeat center right;background-size:cover;background-position:top right 35%;float:right;width:100%;height:100%;}.pic-box-4.jsx-2990483942{display:none;box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.pic-box-4-mobile.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.skills-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.skills-image-container.jsx-2990483942{width:80px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5px;}.skills-text-container.jsx-2990483942{line-height:1.2;width:75%;display:inline;}.skills-text-container.jsx-2990483942 h3.jsx-2990483942{padding-top:0px;margin-top:0px;}.skills-text-container.jsx-2990483942 h5.jsx-2990483942{padding-top:0px;margin-top:0px;}.text-box-4.jsx-2990483942{box-sizing:border-box;background:#FFF;float:right;width:100%;height:100%;}.tech-rows-container.jsx-2990483942{margin-top:30px;}.tech-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.tech-image-container.jsx-2990483942{width:30%;padding:5px;}.tech-image-container.jsx-2990483942 span.jsx-2990483942{font-size:60px;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}.tech-image-container.jsx-2990483942 span.jsx-2990483942:hover{color:#F5AD25;}.pic-box-5.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-education.JPG) no-repeat center right;background-size:cover;background-position:bottom right 20%;float:left;width:100%;height:90vh;}.text-box-5.jsx-2990483942{box-sizing:border-box;background:#1C212A;float:left;width:100%;height:100%;}.text-box-5.jsx-2990483942 h2.jsx-2990483942{font-size:50px;}.education-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.education-image-container.jsx-2990483942{height:70px;width:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.education-text-container.jsx-2990483942{line-height:1.2;width:75%;display:inline;}.education-text-container.jsx-2990483942 h3.jsx-2990483942{padding-top:0px;margin-top:0px;}.education-text-container.jsx-2990483942 h4.jsx-2990483942{padding-top:0px;margin-top:0px;}.education-text-container.jsx-2990483942 h5.jsx-2990483942{padding-top:0px;margin-top:0px;}.pic-box-6.jsx-2990483942{display:none;box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.pic-box-6-mobile.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100vh;}.text-box-6.jsx-2990483942{box-sizing:border-box;background:#FFF;float:right;width:100%;height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xccGFnZXNcXGluZGV4LmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQThUZ0IsQUFHMkIsQUFXUCxBQVdLLEFBUXFCLEFBTWQsQUFhUCxBQUlDLEFBSUksQUFRQSxBQVFBLEFBUUEsQUFPQSxBQVFHLEFBT0osQUFTRyxBQUtOLEFBSUosQUFNQSxBQU1BLEFBTUEsQUFNUyxBQU9BLEFBU0EsQUFPWCxBQUdXLEFBVUUsQUFVWCxBQUdGLEFBR0EsQUFLVyxBQU9BLEFBU0EsQUFTVCxBQU1ILEFBTU0sQUFLQSxBQUlBLEFBSU0sQUFPTixBQUdILEFBR0gsQUFJTSxBQVFGLEFBR1EsQUFTQSxBQU9QLEFBR0YsQUFNSCxBQU1NLEFBS0EsQUFJQSxBQUlBLEFBSU0sQUFTQSxBQWlCRSxBQVFYLEFBV0ssQUFRcUIsQUFNZCxBQWFQLEFBSUMsQUFJSSxBQVFBLEFBUUEsQUFRQSxBQU9BLEFBUUcsQUFRSixBQVNHLEFBS04sQUFJSixBQU1ELEFBTUMsQUFNQSxBQU1TLEFBT0EsQUFTQSxBQU9YLEFBR0UsQUFTUyxBQVFOLEFBR04sQUFHQyxBQUtXLEFBT0EsQUFTVCxBQVVTLEFBU1QsQUFNRixBQU1LLEFBS0EsQUFJQSxBQUlNLEFBT04sQUFHSCxBQUdILEFBSUssQUFRRCxBQUdRLEFBU0EsQUFPUCxBQUdGLEFBTUQsQUFNSSxBQUtBLEFBSUEsQUFJQSxBQUlILEFBVVMsQUFTQSxVQXhkYixBQWdDQyxBQXdDRCxBQThPWCxBQWlGYyxDQXJtQkUsQUE2SmxCLEFBMEJBLEFBR2MsQUFxS00sQUE4SmxCLEFBMEJjLEFBOENBLENBakhFLEFBeUxILENBL2hCQyxBQU1BLEFBTUEsQUFNQSxBQThVRSxBQVlBLEFBTUEsQUFnQ1EsQUE0Q0EsQUF3SEEsQ0ExWjFCLEFBdVdFLENBdmdCQSxBQW1MRixBQTZLSSxBQStKaUIsQUEyQm5CLENBem5CcUIsQUEyQkYsQUE4TFQsQUFLSyxBQUlBLEFBV2pCLEFBVW1CLEFBMENQLEFBS0ssQUFJQSxBQUlBLEFBaURRLEFBMkJKLEFBNEluQixBQTBEWSxBQUtLLEFBSUEsQUFXakIsQUFvRFksQUFLSyxBQUlBLEFBSUEsQ0F0bkJFLEFBK1ZBLENBcFpGLEVBdUdGLEFBZ1dFLENBOVlELEFBUUEsQUFRRCxBQVFBLEFBT0EsQUF3QkUsQUEwSEosQUF3RUEsQUFzR0ksQUFRQSxBQVFBLEFBUUEsQUFPQSxBQXlCRSxDQS9USCxBQU9nRCxBQVM3QyxBQVV5QyxBQVVFLEFBcUIzQyxBQU8yQyxBQVNGLEFBa0M1QyxBQWNsQixBQWNtRSxBQVM5QyxBQXVDK0MsQUFTbEQsQUFpQjJELEFBK0l6RCxBQU9nRCxBQVM3QyxBQW1CeUMsQUFtQnpDLEFBTzJDLEFBbUJGLEFBa0M1QyxBQWNsQixBQWNtRSxBQVM5QyxBQWlEK0MsQUFTbEQsQ0E5cEJHLEFBa0tMLEFBNkxPLEFBZ0tMLEFBOENILEFBd0VBLENBempCQSxBQStWRSxFQS9NRixBQXdFQSxBQXdLRSxBQXVIQSxBQXdFQSxDQW5wQkksQUE4R04sQUFNQSxBQU1BLEFBTUEsQUErTlEsQUErR04sQUFZQSxBQU1BLElBdlBuQixBQUlBLEFBb0VBLEFBSUEsQUFJQSxBQXVSRSxBQUlBLEFBb0VBLEFBSUEsQUFJQSxFQTNSQSxBQW9Pb0IsQ0F2V0YsQUF1SWxCLENBcFowRSxBQWlENUUsQUFzRGdCLEFBZ1dFLEFBb0U4QyxBQTRDQSxBQXdITSxDQTFuQnRFLEFBb0JnQixBQVFBLEFBT0EsQUF3QkMsQUF3U0MsQUFRQSxBQVFBLEFBUUEsQUFPQSxBQXlCQyxDQTFiTixBQU9JLEFBNEJELEFBUUEsQUFvVEQsQUFPSSxDQTNPTixBQTJHQyxBQXFGQSxBQWdLQyxBQWtIQyxBQStGQSxDQWxtQkEsQUFzR2hCLEFBeVBrQixBQW9HaEIsRUFsWVksQUF5Q0QsQUFzQ2IsQUFpRGEsQUF1QmIsQUF3S2UsQUFpQ0EsQUFzQ0EsQUFnRGIsQUFpRGEsQUF1QmIsQ0FyaUJjLEFBTUEsQUFNQSxBQU1BLEFBOFVELEFBWUEsQUFNRyxFQXhjUyxBQStWRSxJQXZYVCxBQVdILEFBb1ZLLEFBV0gsQ0E5UUQsQUFTaEIsQUFpQ1UsQUFzVFEsQUFTaEIsQUFpQ1csQ0F4YUcsQUFRRixBQU9BLEFBb0tMLEFBcUZBLEFBdUVVLEFBUUQsQUFRQSxBQVFGLEFBT0EsQUE0S0osQUErRkEsQ0F6b0JLLEFBUUQsQ0FwQ0EsQUE2S04sQUF1RkEsQUEyRlEsQUFvR2xCLEFBaUNZLEFBc0NDLEFBNkVRLEFBb0JSLENBeGlCQyxBQWlFTCxBQTRHVSxBQWtMSCxBQTJCaEIsQUFZQSxHQTVXRixBQU1BLEFBTUEsQUFNQSxBQWdXRSxHQTFWWSxDQTJHQSxBQXFGQSxBQWdLRSxDQWtIQSxBQStGQSxDQXhmRixBQXVGQSxDQTNRSyxBQTJJTCxBQW9OTyxBQTRJTCxBQXNDQSxBQWlHQSxDQXZqQkksQUFPQSxBQXdWRSxBQU9BLENBaFZOLEFBZ1dFLENBNWJOLEFBOERTLEFBaVNQLEFBc0RTLEFBUUEsQ0F2V0YsQUErQkQsQUF3VEcsQUF1Q0QsQ0FsYUosQUE0QkcsQUFtVUQsQ0F6VkgsQUErVkUsRUFoUG5CLENBMkdBLEFBcUZBLEFBZ0tFLEFBa0l3QixDQXZXRixBQXVWdEIsQUErRkEsQ0F2Z0JGLEFBZUEsQUFxQmEsQUFtQ2IsQUErQkEsQUFNYSxBQStSRSxBQW1DYixBQXFDYSxDQTdlZixBQWdXRSxBQXNDQSxBQWlHQSxDQTduQlUsQUErVkUsR0FuUU0sQUFnV0UsQ0FqYlIsQUErVkUsRUFwU2hCLEFBT2lCLEFBZ0ZPLEFBVUUsQUFxQ0YsQUF5TnRCLEFBT2lCLEFBMEZPLEFBNkNBLEVBamlCMUIsQUFNcUIsQUEyS0csQUE4S3RCLEFBTXFCLEFBeUtHLENBbGVSLEFBdUJsQixBQWdJbUIsQUF3RUEsQUF3SEMsQUFRQSxBQXVCQSxBQXdJQyxBQXdFQSxDQW5vQkQsQUFxREYsQUFvRk0sQUFzTkYsQUE2Q0YsQUE2Rk0sQ0E1YlIsQUE0Tk0sQUF1V0UsQ0F2VEYsQUFpWEUsSUEvcEIxQixBQStWRSxHQS9JZ0IsQUF3RUEsQUFnRFEsQUEwS0EsQUE0Q0EsQUErRFIsQ0F2V0YsQ0FwTGhCLEFBZUEsQUFnVkUsQUFnQkEsQUFzSW1CLEFBd0VELElBNWtCcEIsQUF1VkUsQUFRQSxBQXVCQSxBQTZPd0IsQ0EzbUIxQixBQStKc0IsQUF3RUEsQUFnSHBCLEFBK0tzQixBQXdFQSxDQTVtQk4sQUFzQmxCLEFBeVVvQixDQXRYQyxBQTRKZSxBQVVFLEFBcUNGLEFBb0piLEFBc0tlLEFBNkNBLEVBaFhGLEFBNlZFLEVBdFpGLEFBZ1dFLENBeGZkLEFBd1JlLEFBdVdFLENBdlRMLEFBaVhFLENBL2N0QyxBQXdFQSxFQXVXRSxDQXhFQSxHQS9Pb0MsQUEwS0EsQUE0Q0EsRUFqaEJwQixBQStWRSxHQWxLcEIsQUF3RUEsQUErUkUsQUF3RUEsQ0Fub0JhLEFBK1ZFLEFBaVVxQixRQS9xQlIsRUFzbkI1QixDQXZXRixDQXhPb0IsQUErVkMsQ0F0WHJCLEFBK1ZFLEVBcE1XLEFBVUUsQUFxQ0YsQUEwVEcsQUE2Q0QsRUFoWEQsQUE2VkUsRUF0WkYsQUFnV0UsRUFoTEgsQUFpWEUsRUFqYUYsQUF1V0UsR0FuZEgsQUFVRyxBQXFDSCxBQXVXRyxDQTdDQyxDQW5MSSxBQTBLTCxBQTRDQSxDQXRXSixBQXFMRSxBQXdLQyxDQXZnQkgsQ0FpSEEsQUFnV0ksQ0FoTEgsQUFpWEcsRUFqYUgsQUF1V0csQUFnREEsRUEvcUJXLEFBNEtaLEFBK0NBLENBckNFLEFBNFlBLENBM0xELENBL1ZGLEFBMEtDLEFBMFRFLEFBU2QsQUFtQ2EsQ0FUQyxDQXRaRixDQWdMQSxBQWdMRyxDQWlNQSxDQWphSCxBQXlFRSxDQThSQSxBQWdERCxHQW5nQmYsQUErQ0EsQ0FyQ0UsQUFpTm9CLEFBMkxwQixDQTFoQmtCLEFBZ2hCSixDQXRXaEIsQUEwVEUsQ0FtQ0EsQ0F0WkYsQ0FnTEEsQ0FnTEUsQ0FoT0YsQUF5RUUsQUE4VWMsQUFVZCxDQTFEQSxHQWhvQjRCLEVBeWpCNUIsS0FqTEEsQ0EvVkYsQUF3b0JFLG9CQWhyQnNCLHNCQUNOLGdCQUNsQiIsImZpbGUiOiJDOlxcVXNlcnNcXHJodXdlXFxEZXNrdG9wXFxDb2RpbmcgUHJvamVjdHNcXHJodXdlbGxzYW1hbm9cXHBhZ2VzXFxpbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XHJcbmltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9MYXlvdXQnO1xyXG5cclxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiAoXHJcbiAgPExheW91dCB0aXRsZT1cIkhvbWVwYWdlXCI+XHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG9cIj5cclxuICAgICAgICA8aDE+QlJJTExJQU5UTFkgREVTSUdORUQgQU5EIEJVSUxULjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlJIVVdFTEwgU0FNQU5PIOKAoiBGVUxMIFNUQUNLIFNPRlRXQVJFIEVOR0lORUVSPC9kaXY+XHJcbiAgICAgICAgICA8YSBocmVmPVwiI2p1bXAtdG8tdG9wXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+TEVBUk4gTU9SRTwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwOi8vbWVkaXVtLmNvbS9Acmh1d2VsbFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPk1FRElVTTwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL3d3dy5saW5rZWRpbi5jb20vaW4vcmh1d2VsbHNhbWFuby9cIiBjbGFzc05hbWU9XCJidXR0b25cIj5MSU5LRURJTjwvYT5cclxuICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmh1d2VsbHNhbWFub1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkdJVEhVQjwvYT5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XHJcbiAgICAgIDxkaXYgaWQ9XCJqdW1wLXRvLXRvcFwiIGNsYXNzTmFtZT1cInRleHQtYm94XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxoMj5BYm91dC48L2gyPlxyXG4gICAgICAgICAgPGgzPkNPTk5FQ1RFRCBUSFJPVUdIIENSRUFUSU9OPC9oMz5cclxuICAgICAgICAgIDxoND5cIldoYXQgeW91IGxlYXZlIGJlaGluZCBpcyBub3Qgd2hhdCBpcyBlbmdyYXZlZCBpbiBzdG9uZSBtb251bWVudHMsIGJ1dCB3aGF0IGlzIHdvdmVuIGludG8gdGhlIGxpdmVzIG9mIG90aGVycy5cIiAtLSBQZXJpY2xlczwvaDQ+XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIDxoNT5NeSBuYW1lIGlzIFJodXdlbGwgU2FtYW5vIGFuZCBJJ20gYSBGdWxsIFN0YWNrIFNvZnR3YXJlIEVuZ2luZWVyLiBJIHNwZWNpYWxpemUgaW4gUmVhY3QgYW5kIG1haW5seSBjb2RlIGluIEphdmFzY3JpcHQuIEkgaGF2ZSBhIHBhcnRpY3VsYXJseSByYXJlIGNvbWJpbmF0aW9uIG9mIHNraWxscyB0aGF0IGFsbG93IG1lIHRvIGhhdmUgdmFsdWFibGUgaW5zaWdodCBpbnRvIG1hbnksIGlmIG5vdCBhbGwsIHR5cGVzIG9mIGRpZ2l0YWwgcHJvamVjdHMuIDwvaDU+XHJcbiAgICAgICAgICA8aDU+XHJcbiAgICAgICAgICBCeSB1c2luZyBTb2Z0d2FyZSBFbmdpbmVlcmluZywgRGlnaXRhbCBNYXJrZXRpbmcgYW5kIFdlYiAmIEFwcCBEZXNpZ24sIEknbSBhYmxlIHRvIHVuZGVyc3RhbmQgYWxsIG9mIHRoZSBtb3ZpbmcgcGFydHMgb2YgYSBwcm9qZWN0IGFuZCBjb25uZWN0IHRoZW0gdG9nZXRoZXIgaW50byBhIGJlYXV0aWZ1bCBoYW5kY3JhZnRlZCBzeXN0ZW0gdGhhdCBmdWVscyBhbmQgZ3Jvd3MgcG93ZXJmdWwgYnJhbmRzLiA8L2g1PlxyXG5cclxuICAgICAgICAgIDxoNT5JJ20gcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZyB3b3JsZC1jbGFzcyBleHBlcmllbmNlcyBmb3IgdmFyaW91cyBjb21tdW5pdGllcyB1c2luZyB3ZWJzaXRlcywgYXBwbGljYXRpb25zLCBhbmQgZGlnaXRhbCBtZWRpYS4gVGhlIG1vc3QgaW1wb3J0YW50IHBlcnNvbiBJIGNhcmUgYWJvdXQgYW5kIGNyZWF0ZSBmb3IgaXMgdGhlIGVuZC11c2VyLiBJIHRob3JvdWdobHkgZW5qb3kgd29ya2luZyB3aXRoIG90aGVycyB0b3dhcmRzIGFjaGlldmluZyB0aGF0IGdvYWwsIG5vIG1hdHRlciB0aGUgcHJvamVjdC48L2g1PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b25cIj5SZWFkIE1vcmUgQWJvdXQgTWU8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94XCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lci13b3JrXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljLWJveC0yXCI+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ib3gtMlwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJ3b3JrLWgyXCI+V29yay48L2gyPlxyXG4gICAgICAgICAgPGgzPlJFQ0VOVCBQUk9KRUNUUzwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLXJvdy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1yb3ctMVwiPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cyNibGluay1oZWFsdGhcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2JsaW5rLWhlYWx0aC1tb2NrdXAucG5nXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cyNzaWNrLWZpdHNcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2VcIiBzcmM9XCIvc3RhdGljL3NpY2stZml0cy1tb2NrdXAucG5nXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1yb3ctMVwiPlxyXG5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0cyNtYWppbi1zdXNoaVwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvbWFqaW4tc3VzaGktbW9ja3VwLnBuZ1wiIGFsdD1cIlwiPjwvaW1nPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcblxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzI2xpbmtlZHVwXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiL3N0YXRpYy9saW5rZWR1cC1tb2NrdXAucG5nXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcHJvamVjdHNcIj5cclxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b25cIj5WaWV3IE15IFByb2plY3RzPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94LTItbW9iaWxlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYm94LTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPGgyPlNraWxscy48L2gyPlxyXG4gICAgICAgICAgPGgzPlRIRSBQRVJGRUNUIFRSSUZFQ1RBPC9oMz5cclxuXHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvc29mdHdhcmUtZW5naW5lZXIucG5nXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+U09GVFdBUkUgRU5HSU5FRVJJTkc8L2gzPlxyXG4gICAgICAgICAgICAgIDxoNT5Gcm9tIHRoZSBmcm9udC1lbmQgdG8gdGhlIGJhY2stZW5kLCBJJ20gYWJsZSB0byBkaXZlIGludG8gYWxsIHNvcnRzIG9mIHByb2plY3RzIGFuZCB3b3JrIHdpdGggd2hhdCdzIHRoZXJlIC0gb3Igc3RhcnQgZnJvbSBzY3JhdGNoLlxyXG4gICAgICAgICAgICAgIDwvaDU+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvZGlnaXRhbC1tYXJrZXRpbmcucG5nXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+RElHSVRBTCBNQVJLRVRJTkc8L2gzPlxyXG4gICAgICAgICAgICAgIDxoNT5CeSB1c2luZyBtb2Rlcm4gZGlnaXRhbCB0b29scywgYW5jaWVudCBodW1hbiBwc3ljaG9sb2d5LCBhbmQgY2xhc3NpYyBzdG9yeXRlbGxpbmcgLSBJIGNhbiBncm93IGxlYWRzIGFuZCBpbmNyZWFzZSB0aGUgYm90dG9tLWxpbmUuPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy1yb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiL3N0YXRpYy9kZXNpZ25lci5wbmdcIiBhbHQ9XCJcIj48L2ltZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy10ZXh0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxoMz5XRUIgJiBBUFAgREVTSUdOPC9oMz5cclxuICAgICAgICAgICAgICA8aDU+RnJvbSBhIHNrZXRjaCBvbiBhIG5hcGtpbiBvciBhIHdoaXRlYm9hcmQsIEknbSBhYmxlIHRvIGRlc2lnbiBhbmQgY3JhZnQgaWRlYXMgaW50byBtb2NrLXVwcyB1c2luZyBiZXN0IHByYWN0aWNlcyBpbiB0aGUgaW5kdXN0cnkuPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCI+UmVhZCBNb3JlIEFib3V0IE1lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtM1wiPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXItdGVjaFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtNFwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYm94LTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8aDI+VGVjaC48L2gyPlxyXG4gICAgICAgICAgPGgzPlRPT0xTIE9GIFRIRSBUUkFERTwvaDM+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtcm93cy1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldmljb25zIGRldmljb25zLXJlYWN0XCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtcHl0aG9uXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtZGphbmdvXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtcnVieV9vbl9yYWlsc1wiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLXJvd1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldmljb25zIGRldmljb25zLWphdmFzY3JpcHRfYmFkZ2VcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXZpY29ucyBkZXZpY29ucy1ub2RlanNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXZpY29ucyBkZXZpY29ucy1odG1sNVwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldmljb25zIGRldmljb25zLWNzczNcIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1yb3dcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXZpY29ucyBkZXZpY29ucy1ucG1cIiAvPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXZpY29ucyBkZXZpY29ucy1zd2lmdFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldmljb25zIGRldmljb25zLXBob3Rvc2hvcFwiIC8+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldmljb25zIGRldmljb25zLWlsbHVzdHJhdG9yXCIgLz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8aDU+R2l0SHViIENvbnRyaWJ1dGlvbnMgLSBVcGRhdGVkIDEvMjEvMjA8L2g1PlxyXG4gICAgICAgICAgPGltZyBzcmM9XCIvc3RhdGljL2dpdGh1Yi1jYWxlbmRhci5wbmdcIiBhbHQ9XCJcIj48L2ltZz5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCI+VmlldyBNeSBQcm9qZWN0czwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94LTQtbW9iaWxlXCI+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgIDwvZGl2PlxyXG5cclxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VjdGlvbi1jb250YWluZXJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJveC01XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cclxuICAgICAgICAgIDxoMj5FZHVjYXRpb24uPC9oMj5cclxuICAgICAgICAgIDxoMz5LTk9XTEVER0UgSVMgS0VZPC9oMz5cclxuICAgICAgICAgIFxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24tcm93XCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLWltYWdlLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvZmxhdGlyb25zY2hvb2wucG5nXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24tdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+RkxBVElST04gU0NIT09MPC9oMz5cclxuICAgICAgICAgICAgICA8aDQ+S25vd24gYXMgdGhlIFwiSXZ5IExlYWd1ZSBvZiBjb2RpbmcgYm9vdGNhbXBzXCI8L2g0PlxyXG4gICAgICAgICAgICAgIDxoNT5GdWxsIFN0YWNrIFNvZnR3YXJlIEVuZ2luZWVyaW5nIHwgUmVhY3QsIEphdmFzY3JpcHQsIFJ1Ynkgb24gUmFpbHM8L2g1PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLXJvd1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbi1pbWFnZS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2VcIiBzcmM9XCIvc3RhdGljL3RlYW10cmVlaG91c2UucG5nXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24tdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+VEVBTVRSRUVIT1VTRTwvaDM+XHJcbiAgICAgICAgICAgICAgPGg0PkEgdG9wLXRpZXIgb25saW5lIHNjaG9vbCBmb3IgbGVhcm5pbmcgY29kZTwvaDQ+XHJcbiAgICAgICAgICAgICAgPGg1PkZ1bGwgU3RhY2sgSmF2YXNjcmlwdCBEZXZlbG9wbWVudCAmIEZ1bGwgU3RhY2sgV2ViIERldmVsb3BtZW50PC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbi1yb3dcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24taW1hZ2UtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiL3N0YXRpYy9jc2kucG5nXCIgYWx0PVwiXCI+PC9pbWc+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24tdGV4dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICA8aDM+Q09MTEVHRSBPRiBTVEFURU4gSVNMQU5EPC9oMz5cclxuICAgICAgICAgICAgICA8aDQ+VGhlIHNpbmdsZSwgbGFyZ2VzdCBjYW1wdXMgaW4gYWxsIG9mIE5ldyBZb3JrIENpdHk8L2g0PlxyXG4gICAgICAgICAgICAgIDxoNT5CUzogQnVzaW5lc3MgTWFya2V0aW5nICgyMDEyLTIwMTYpPC9oNT5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XHJcbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCI+UmVhZCBNb3JlIEFib3V0IE1lPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94LTVcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyLWNvbnRhY3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94LTZcIj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJveC02XCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1yaWdodFwiPlxyXG4gICAgICA8aDI+Q29udGFjdC48L2gyPlxyXG4gICAgICAgICAgPGgzPkhPVyBDQU4gSSBIRUxQIFlPVT88L2gzPlxyXG5cclxuICAgICAgICAgIDxoNT5JIGhvcGUgeW91J3ZlIGVuam95ZWQgbGVhcm5pbmcgbW9yZSBhYm91dCBtZSEgPGJyLz5JdCdzIGRlZmluaXRlbHkganVzdCBzY3JhdGNoaW5nIHRoZSBzdXJmYWNlIG9mIG15IGFiaWxpdGllcyBhbmQgZGVmaW5pdGVseSBteSBwZXJzb25hbGl0eSwgdG9vLiA8YnIvPlRoZSBpbmR1c3RyeSBoYXMgY29pbmVkIGEgdGVybSBmb3Igc29tZW9uZTxici8+IHdpdGggbXkgc2tpbGxzZXQgYnV0IEkgcmVmdXNlIHRvIGJlIGxhYmVsZWQgYXMgYSBVbmljb3JuLiDwn5iFIEpva2VzIGFzaWRlLCBJJ20gdmVyeSB3ZWxsLXJvdW5kZWQgYW5kIEkgYXBwcm9hY2ggY2hhbGxlbmdlcyBoZWFkLW9uIHdpdGggYW4gYXVyYSBvZiBoaWdoLXNwaXJpdHMgYW5kIHVuc2hha2VhYmxlIGNvbmZpZGVuY2UuPC9oNT5cclxuXHJcbiAgICAgICAgICA8aDU+V2hhdCBjaGFsbGVuZ2VzIGFyZSB5b3UgY3VycmVudGx5IGZhY2luZz8gPGJyLz5JcyB0aGVyZSBhbnl0aGluZyB5b3UgdGhpbmsgSSBjYW4gaGVscCB5b3Ugd2l0aD9cclxuICAgICAgICAgIDxici8+RG8geW91IHRoaW5rIEkgd291bGQgYmUgYSBnb29kIGFkZGl0aW9uPGJyLz4gdG8geW91ciBlbmdpbmVlcmluZyB0ZWFtPyDwn6SUPC9oNT5cclxuXHJcbiAgICAgICAgICA8aDU+SWYgc28sIEknbSBjdXJyZW50bHkgYXZhaWxhYmxlIDxici8+Zm9yIG5ldyBvcHBvcnR1bml0aWVzIDxici8+YXMgYSBGdWxsIFN0YWNrIFNvZnR3YXJlIEVuZ2luZWVyITwvaDU+IFxyXG4gICAgICAgICAgPGg1PklmIHlvdSB3b3VsZCBsaWtlIHRvIGdldCBpbiB0b3VjaCB3aXRoIG1lLCA8YnIvPkknbSBhbHdheXMgY2hlY2tpbmcgbXkgZS1tYWlscyE8L2g1PlxyXG5cclxuICAgICAgICAgIDxoMz5yaHV3ZWxsLnNhbWFub0BnbWFpbC5jb208L2gzPlxyXG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cImNvbnRhY3QtaDJcIj5UaGFuayB5b3UhPC9oMj5cclxuXHJcblxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtNi1tb2JpbGVcIj5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPHN0eWxlIGpzeD57YFxyXG4gICAgICAuY292ZXIge1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICBtaW4taGVpZ2h0OiAxMzB2aDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoL3N0YXRpYy9wcm8tY292ZXIuSlBHKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wO1xyXG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWxsbyB7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNDtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIHRvcDogMjAwcHg7XHJcbiAgICAgICAgbGVmdDogNTBweDtcclxuICAgICAgICBwYWRkaW5nLWxlZnQ6IDgwcHg7XHJcbiAgICAgICAgcGFkZGluZy1yaWdodDogODBweDtcclxuICAgICAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5oZWxsbyBoMSB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgZm9udC1zaXplOiA5MnB4O1xyXG4gICAgICAgIG1hcmdpbjogMCAwIDBweCAwO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweDtcclxuICAgICAgfVxyXG4gICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiBcIkhvbWVwYWdlQmF1a2FzdGVuLUJvbGRcIjtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIGEuYnV0dG9uIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0xhcnNzZWl0JztcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0Y1QUQyNTtcclxuICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xyXG4gICAgICAgIHRvcDogMjVweDtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtbGVmdCB7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4IDEzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxMjBweDtcclxuICAgICAgICBjb2xvcjogI0YyRjJGMjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMzBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjM7XHJcbiAgICAgIH1cclxuICAgICAgLndvcmstaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMC4zO1xyXG4gICAgICB9XHJcbiAgICAgIC5jb250YWN0LWgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgZm9udC1zaXplOiA4MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICBsaW5lLWhlaWdodDogMC4zO1xyXG4gICAgICB9XHJcbiAgICAgIGgzIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjMzQzRDRGO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgfVxyXG4gICAgICAuY29udGFjdC1oNSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogIzM0M0Q0RjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIGg0IHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0NhcnJlTm9pcic7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjYTZiMWI5O1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgfVxyXG4gICAgICBoNSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdWYXJ0YSc7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgICAgIGNvbG9yOiAjYTZiMWI5O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjI7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgICAgIC5oZWxsbyB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XHJcbiAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMSB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDB2aDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tY29udGFpbmVyLXdvcmsge1xyXG4gICAgICAgIGhlaWdodDogMTMwdmg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLWNvbnRhaW5lci10ZWNoIHtcclxuICAgICAgICBoZWlnaHQ6IDEzMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG4gICAgICAuc2VjdGlvbi1jb250YWluZXItY29udGFjdCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxNDB2aDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtYm94IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnBpYy1ib3gge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLWFib3V0LW1lLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyMCU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoIDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtYm94LTIge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI2YyZWZlZjsgXHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoIDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtYm94LTIgaDIge1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICB9XHJcbiAgICAgIC5waWMtYm94LTIge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLXdvcmsuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDIwJTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAucGljLWJveC0yLW1vYmlsZSB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLXdvcmsuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyMCU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgfVxyXG4gICAgICAucHJvamVjdHMtcm93LTEge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2plY3QtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtYm94LTMge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFDMjEyQTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAucGljLWJveC0zIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1za2lsbHMuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDM1JTtcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGggNDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAucGljLWJveC00IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby10ZWNoLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyNSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnNraWxscy1yb3cge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNraWxscy1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAyMCU7XHJcbiAgICAgICAgaGVpZ2h0OiAyMCU7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xyXG4gICAgICB9XHJcbiAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIge1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgIH1cclxuICAgICAgLnNraWxscy10ZXh0LWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnNraWxscy10ZXh0LWNvbnRhaW5lciBoNSB7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtYm94LTQge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoIDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnRlY2gtcm93cy1jb250YWluZXIge1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRlY2gtcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZWNoLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDMwJTtcclxuICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRlY2gtaW1hZ2UtY29udGFpbmVyIHNwYW4ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTAwcHg7XHJcbiAgICAgICAgLW8tdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgLW1zLXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgIC1tb3otdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOi4zcztcclxuICAgICAgICB0cmFuc2l0aW9uOi4zcztcclxuICAgICAgfVxyXG4gICAgICAudGVjaC1pbWFnZS1jb250YWluZXIgc3Bhbjpob3ZlciB7XHJcbiAgICAgICAgY29sb3I6ICNGNUFEMjU7XHJcbiAgICAgIH1cclxuICAgICAgLnBpYy1ib3gtNSB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tZWR1Y2F0aW9uLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodCAyMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtYm94LTUge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogIzFDMjEyQTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1ib3gtNSBoMiB7XHJcbiAgICAgICAgZm9udC1zaXplOiA4NXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5lZHVjYXRpb24tcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5lZHVjYXRpb24taW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgfVxyXG4gICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICB9XHJcbiAgICAgIC5lZHVjYXRpb24tdGV4dC1jb250YWluZXIgaDMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5lZHVjYXRpb24tdGV4dC1jb250YWluZXIgaDQge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5lZHVjYXRpb24tdGV4dC1jb250YWluZXIgaDUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5waWMtYm94LTYge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLWNvbnRhY3QtbWUuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI1JTtcclxuICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICB3aWR0aDogNDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1ib3gtNiB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGOyBcclxuICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgd2lkdGggNjAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgfVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAuY292ZXIge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgvc3RhdGljL3Byby1jb3Zlci5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI0JTtcclxuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgICAgICBoZWlnaHQ6IDgwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5oZWxsbyB7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjQ7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgICB0b3A6IDUwMHB4O1xyXG4gICAgICAgICAgbGVmdDogMTBweDtcclxuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcclxuICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDgwcHg7XHJcbiAgICAgICAgICBvcGFjaXR5OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVsbG8gaDEge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDAgMHB4IDA7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogXCJIb21lcGFnZUJhdWthc3Rlbi1Cb2xkXCI7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgYS5idXR0b24ge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdMYXJzc2VpdCc7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0Y1QUQyNTtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgICAgcGFkZGluZzogOHB4IDMwcHg7XHJcbiAgICAgICAgICB0b3A6IDI1cHg7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtbGVmdCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LXJpZ2h0IHtcclxuICAgICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4IDQwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgyIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuMztcclxuICAgICAgICB9XHJcbiAgICAgICAgLndvcmstaDIge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xyXG4gICAgICAgICAgZm9udC1zaXplOiA2MHB4O1xyXG4gICAgICAgICAgY29sb3I6ICNGMkYyRjI7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5jb250YWN0LWgyIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICAgIGNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC4zO1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMyB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogIzM0M0Q0RjtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdC1oNSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgICBjb2xvcjogIzM0M0Q0RjtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoNCB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0NhcnJlTm9pcic7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogI2E2YjFiOTtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdWYXJ0YSc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDEycHg7XHJcbiAgICAgICAgICBjb2xvcjogI2E2YjFiOTtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyLjI7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgICAuaGVsbG8ge1xyXG4gICAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIGgxIHtcclxuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VjdGlvbi1jb250YWluZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMzB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWN0aW9uLWNvbnRhaW5lci13b3JrIHtcclxuICAgICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWN0aW9uLWNvbnRhaW5lci10ZWNoIHtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VjdGlvbi1jb250YWluZXItY29udGFjdCB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE4MHZoO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYm94IHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpYy1ib3gge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1hYm91dC1tZS5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI4JTtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYm94LTIge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmVmZWY7IFxyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aCAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1ib3gtMiBoMiB7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpYy1ib3gtMiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby13b3JrLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjAlO1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWMtYm94LTItbW9iaWxlIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8td29yay5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDIwJTtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2plY3RzLXJvdy0xIHtcclxuICAgICAgICAgIGRpc3BsYXk6IGp1c3RpZnk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogNTAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvamVjdC1pbWFnZSB7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWJveC0zIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyMTJBO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpYy1ib3gtMyB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLXNraWxscy5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDM1JTtcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIHdpZHRoIDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWMtYm94LTQge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tdGVjaC5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI1JTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWMtYm94LTQtbW9iaWxlIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tdGVjaC5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI1JTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2lsbHMtcm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2lsbHMtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tpbGxzLXRleHQtY29udGFpbmVyIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XHJcbiAgICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2tpbGxzLXRleHQtY29udGFpbmVyIGgzIHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIgaDUge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYm94LTQge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7IFxyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgd2lkdGggMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlY2gtcm93cy1jb250YWluZXIge1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlY2gtcm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWNoLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICB3aWR0aDogMzAlO1xyXG4gICAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVjaC1pbWFnZS1jb250YWluZXIgc3BhbiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDYwcHg7XHJcbiAgICAgICAgICAtby10cmFuc2l0aW9uOi4zcztcclxuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOi4zcztcclxuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgICAgdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWNoLWltYWdlLWNvbnRhaW5lciBzcGFuOmhvdmVyIHtcclxuICAgICAgICAgIGNvbG9yOiAjRjVBRDI1O1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGljLWJveC01IHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tZWR1Y2F0aW9uLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQgMjAlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogOTB2aDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYm94LTUge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxQzIxMkE7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1ib3gtNSBoMiB7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lZHVjYXRpb24tcm93IHtcclxuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lZHVjYXRpb24taW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgIGhlaWdodDogNzBweDtcclxuICAgICAgICAgIHdpZHRoOiA4MHB4O1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lZHVjYXRpb24tdGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lZHVjYXRpb24tdGV4dC1jb250YWluZXIgaDMge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVkdWNhdGlvbi10ZXh0LWNvbnRhaW5lciBoNCB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGg1IHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWMtYm94LTYge1xyXG4gICAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tY29udGFjdC1tZS5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI1JTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWMtYm94LTYtbW9iaWxlIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tY29udGFjdC1tZS5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI1JTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1ib3gtNiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB3aWR0aCAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH0gIFxyXG4gICAgICB9XHJcbiAgICBgfTwvc3R5bGU+XHJcbiAgPC9MYXlvdXQ+XHJcbik7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiXX0= */\n/*@ sourceURL=C:\\\\Users\\\\rhuwe\\\\Desktop\\\\Coding Projects\\\\rhuwellsamano\\\\pages\\\\index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rhuwe\Desktop\Coding Projects\rhuwellsamano\pages\index.js */"./pages/index.js");


/***/ }),

/***/ "core-js/library/fn/map":
/*!*****************************************!*\
  !*** external "core-js/library/fn/map" ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "core-js/library/fn/object/assign":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/assign" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "core-js/library/fn/object/create":
/*!***************************************************!*\
  !*** external "core-js/library/fn/object/create" ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "core-js/library/fn/object/define-property":
/*!************************************************************!*\
  !*** external "core-js/library/fn/object/define-property" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "core-js/library/fn/object/get-own-property-descriptor":
/*!************************************************************************!*\
  !*** external "core-js/library/fn/object/get-own-property-descriptor" ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "core-js/library/fn/object/keys":
/*!*************************************************!*\
  !*** external "core-js/library/fn/object/keys" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "core-js/library/fn/promise":
/*!*********************************************!*\
  !*** external "core-js/library/fn/promise" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "core-js/library/fn/symbol":
/*!********************************************!*\
  !*** external "core-js/library/fn/symbol" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "core-js/library/fn/symbol/iterator":
/*!*****************************************************!*\
  !*** external "core-js/library/fn/symbol/iterator" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "core-js/library/fn/weak-map":
/*!**********************************************!*\
  !*** external "core-js/library/fn/weak-map" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "prop-types":
/*!*****************************!*\
  !*** external "prop-types" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "prop-types-exact":
/*!***********************************!*\
  !*** external "prop-types-exact" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prop-types-exact");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "url":
/*!**********************!*\
  !*** external "url" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("url");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map