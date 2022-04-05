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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
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

/***/ "./pages/projects.js":
/*!***************************!*\
  !*** ./pages/projects.js ***!
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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
var _jsxFileName = "C:\\Users\\rhuwe\\Desktop\\Coding Projects\\rhuwellsamano\\pages\\projects.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Projects = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "cover",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "hello",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "PROJECTS."), __jsx("div", {
  className: "jsx-3828249848" + " " + "subtitle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "SOFTWARE DEVELOPMENT \u2022 UI/UX \u2022 WEB & APP DESIGN"), __jsx("a", {
  href: "#jump-to-top",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "LEARN MORE"))), __jsx("div", {
  className: "jsx-3828249848" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  id: "jump-to-top",
  className: "jsx-3828249848" + " " + "text-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("h2", {
  id: "blink-health",
  className: "jsx-3828249848" + " " + "blink-h2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "Blink Health."), __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "React \u2022 Redux \u2022 Python \u2022 Flow \u2022 Jest"), __jsx("h4", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, "\"Blink Health is the new way for all Americans to save on their prescriptions. With our proprietary technology, everyone now has access to one, low negotiated price on over 15,000 medications.\""), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "With an exponentially growing customer-base of well over 1 million people, it was vital to innovate and design solutions to maintain the product's stability as it continued to evolve and become a reliable household brand."), __jsx("ul", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "What I Did:"), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Built reusable components in React using object-oriented/functional programming to improve performance on the website")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Collaborated with the UX/front-end development team in an Agile/TDD environment to consistently complete deliverables")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Created A/B test experiments to collect usage data to increase user sign-up conversion and retention rates"))), __jsx("div", {
  className: "jsx-3828249848" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 31
  },
  __self: undefined
}, __jsx("a", {
  href: "http://www.blinkhealth.com",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, "Website")))), __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-3828249848" + " " + "section-container-sickfits",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-3828249848" + " " + "text-box-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, __jsx("h2", {
  id: "sick-fits",
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "Sick Fits."), __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, "React \u2022 Next \u2022 GraphQL \u2022 Prisma \u2022 Jest"), __jsx("h4", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, "An e-commerce app for buying and selling apparel, shoes, and accessories."), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, "In this highly digital age, it's become almost necessary to be able to buy and sell products outside of the classic brick-and-mortar storefront. By using modern technologies like React and GraphQL, it's completely possible to build a fast and reliable e-commerce platform for your brand to grow faster than ever!"), __jsx("ul", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "What I Did:"), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Built with React, Next and Apollo GraphQL to utilize reusable components, have ultrafast page loading speeds, and to make one single call to access data in any component.")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Incorporated Jest and Enzyme to allow for thorough unit testing to ensure app stability.")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "Added Stripe API in order to add a dependable payment method for users")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 59
  },
  __self: undefined
}, "Utilized Cloudinary to handle resizing of uploaded product photos before they are saved to the backend"))), __jsx("div", {
  className: "jsx-3828249848" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/rhuwellsamano/advanced-react/tree/master/sick-fits/frontend",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "Frontend Repo"), __jsx("a", {
  href: "https://github.com/rhuwellsamano/advanced-react/tree/master/sick-fits/backend",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, "Backend Repo"), __jsx("a", {
  href: "https://www.youtube.com/watch?v=ytATWMdlS_w",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
}, "Demo")))), __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box-2-mobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-3828249848" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "text-box-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 78
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, __jsx("h2", {
  id: "portfolio",
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, "Portfolio."), __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 81
  },
  __self: undefined
}, "React \u2022 Next \u2022 JavaScript"), __jsx("h4", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, "Made from scratch, this portfolio project is worth mentioning."), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, "Having a portfolio website can provide more details and context to your story than you can fit on your resume. By using React and Next, I'm able to build fast and focus on the User Interface and User Experience. I also used a consistent style guide to maintain beautiful eye-catching typography and a refreshing cool-toned color theme. "), __jsx("ul", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, "What I Did:"), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, "Built with React and Next to get up-and-running relatively fast")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, "Gathered layout and design inspiration on Dribbble and sketched out a wireframe of the website before I started developing")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}, "Ran a couple of UI/UX user tests along the way to make sure every aspect of the website was received well"))), __jsx("div", {
  className: "jsx-3828249848" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/rhuwellsamano/rhuwellsamano",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}, "GitHub Repo")))), __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-3828249848" + " " + "section-container-linkedup",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-3828249848" + " " + "text-box-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, __jsx("h2", {
  id: "linkedup",
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 111
  },
  __self: undefined
}, "LinkedUP."), __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, "React \u2022 Ruby on Rails \u2022 WebSockets"), __jsx("h4", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}, "A self-destructing chat app that aims to mimic real-life interactions."), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, "Inspired by real-life occurences of meeting new people, I wanted to create a time-based chat app that allowed users to meet other professionals based off their LinkedIn profiles. Perfect for people who want to expand their networks without the hassle! "), __jsx("ul", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, "What I Did:"), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, "Built with React for the front-end, Ruby on Rails for the back-end and PostgreSQL for Database Management")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, "Implemented ActionCable (WebSockets) to provide instant and live chat updates to all users in the Chatroom")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "Added User Authorization/Login functionality by using JSON Web Tokens and Encryption/Decryption algorithms")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "Enabled full CRUD functionality for User Profiles including a \u201CLike\u201D feature as well as updating user details"))), __jsx("div", {
  className: "jsx-3828249848" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/rhuwellsamano/linkedup-frontend",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, "Frontend Repo"), __jsx("a", {
  href: "https://github.com/rhuwellsamano/linkedup-backend",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, "Backend Repo"), __jsx("a", {
  href: "https://www.youtube.com/watch?v=welfAhsiNm4",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, "Demo")))), __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box-4-mobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 134
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-3828249848" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "text-box-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, __jsx("h2", {
  id: "majin-sushi",
  className: "jsx-3828249848" + " " + "majin-h2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}, "Majin Sushi."), __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}, "JavaScript \u2022 Ruby on Rails"), __jsx("h4", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, "An interactive restaurant game where you create and eat sushi."), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, "Still my favorite app to have worked on - it's a JavaScript game with a bunch of adorable sushi characters, animations and sounds. You have in-game currency that you use to purchase sushi to eat as you get hungry.. and you will get hungry. I'm planning on working on a sequel in the near future - Majin Sushi 2 , coming soon!"), __jsx("ul", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 150
  },
  __self: undefined
}, "What I Did:"), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}, "Built with Javascript for the front-end, Ruby on Rails for the back-end and PostgreSQL for Database Management")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, "Used CSS Animations, Music, and Sounds to create an immersive and enjoyable experience for users")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}, "Added a Hunger Meter feature that decreased over time and aggressively alerted the user if it fell below a certain number")), __jsx("li", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, __jsx("h5", {
  className: "jsx-3828249848" + " " + "features-h5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 154
  },
  __self: undefined
}, "Utilized full CRUD functionality to allow users to create, edit, and destroy in-game Sushis"))), __jsx("div", {
  className: "jsx-3828249848" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}, __jsx("a", {
  href: "https://github.com/rhuwellsamano/majin-sushi-frontend",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158
  },
  __self: undefined
}, "Frontend Repo"), __jsx("a", {
  href: "https://github.com/rhuwellsamano/majin-sushi-backend",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, "Backend Repo"), __jsx("a", {
  href: "https://www.youtube.com/watch?v=klHWjDFI4IM",
  className: "jsx-3828249848" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, "Demo")))), __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-3828249848" + " " + "section-container-contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 169
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-3828249848" + " " + "text-box-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-3828249848" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}, "Contact."), __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}, "HOW CAN I HELP YOU?"), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}, "I hope you've enjoyed learning more about me! ", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}), "It's definitely just scratching the surface of my abilities and definitely my personality, too. ", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}), "The industry has coined a term for someone", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}), " with my skillset but I refuse to be labeled as a Unicorn. \uD83D\uDE05 Jokes aside, I'm very well-rounded and I approach challenges head-on with an aura of high-spirits and unshakeable confidence."), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}, "What challenges are you currently facing? ", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}), "Is there anything you think I can help you with?", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
}), "Do you think I would be a good addition", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
}), " to your engineering team? \uD83E\uDD14"), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}, "If so, I'm currently available ", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}), "for new opportunities ", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}), "as a Full Stack Software Engineer!"), __jsx("h5", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, "If you would like to get in touch with me, ", __jsx("br", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}), "I'm always checking my e-mails!"), __jsx("h3", {
  className: "jsx-3828249848",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 187
  },
  __self: undefined
}, "rhuwell.samano@gmail.com"), __jsx("h2", {
  className: "jsx-3828249848" + " " + "contact-h2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188
  },
  __self: undefined
}, "Thank you!"))), __jsx("div", {
  className: "jsx-3828249848" + " " + "pic-box-6-mobile",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "3828249848",
  __self: undefined
}, ".cover.jsx-3828249848{position:relative;min-height:130vh;background:transparent url(/static/pro-about-me.JPG) no-repeat center center;background-size:cover;background-attachment:fixed;background-position:top;background-repeat:no-repeat;background-size:cover;text-align:left;}.hello.jsx-3828249848{color:#FFF;line-height:1.4;display:inline-block;position:relative;top:200px;left:50px;padding-left:80px;padding-right:80px;opacity:100%;}.hello.jsx-3828249848 h1.jsx-3828249848{line-height:1.0;font-family:'Galano';color:#FFF;font-size:92px;margin:0 0 0px 0;padding:0px;}.subtitle.jsx-3828249848{font-family:\"HomepageBaukasten-Bold\";font-size:16px;margin-top:10px;margin-left:5px;}a.button.jsx-3828249848{font-family:'Larsseit';display:inline-block;text-transform:uppercase;font-size:16px;background:#F5AD25;margin-left:5px;margin-top:30px;padding:10px 40px;top:25px;color:#FFF;border-radius:5px;}.text-left.jsx-3828249848{text-align:left;padding:20px 130px;}.text-right.jsx-3828249848{text-align:right;padding:20px 130px;}h2.jsx-3828249848{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.work-h2.jsx-3828249848{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}.blink-h2.jsx-3828249848{font-family:'Galano';font-size:90px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.contact-h2.jsx-3828249848{font-family:'Galano';font-size:80px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}h3.jsx-3828249848{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;}.contact-h5.jsx-3828249848{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;margin-top:0px;}h4.jsx-3828249848{font-family:'CarreNoir';font-size:20px;color:#a6b1b9;padding:0px 0;margin-bottom:0px;}h5.jsx-3828249848{font-family:'Varta';font-size:16px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;}.features-h5.jsx-3828249848{font-family:'Varta';font-size:16px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;margin-top:0px;}@media (max-width:480px){.hello.jsx-3828249848{font-family:'Galano';font-size:18px;padding:20px;}h1.jsx-3828249848{font-size:28px;}}.section-container.jsx-3828249848{height:130vh;display:block;max-width:100%;margin:0 auto;}.section-container-sickfits.jsx-3828249848{height:130vh;display:block;max-width:100%;margin:0 auto;}.section-container-linkedup.jsx-3828249848{height:130vh;display:block;max-width:100%;margin:0 auto;}.section-container-contact.jsx-3828249848{height:150vh;display:block;max-width:100%;margin:0 auto;}.text-box.jsx-3828249848{box-sizing:border-box;background:#FFF;float:left;width:60%;height:100%;}.pic-box.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-cover.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:right;width:40%;height:100%;}.text-box-2.jsx-3828249848{box-sizing:border-box;background:#f2efef;float:right;width:60%;height:100%;}.text-box-2.jsx-3828249848 h2.jsx-3828249848{color:#FFF;}.pic-box-2.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:left;width:40%;height:100%;}@media (max-width:480px){.pic-box-2-mobile.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:left;width:100%;height:100%;}}.projects-row-1.jsx-3828249848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-image-container.jsx-3828249848{width:100%;}.project-image.jsx-3828249848{width:100%;padding:7px;padding-top:0px;}.text-box-3.jsx-3828249848{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}.pic-box-3.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-skills.JPG) no-repeat center right;background-size:cover;background-position:top right 35%;float:right;width:40%;height:100%;}.pic-box-4.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}.skills-row.jsx-3828249848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.skills-image-container.jsx-3828249848{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.skills-text-container.jsx-3828249848{line-height:1.2;width:75%;display:inline;}.skills-text-container.jsx-3828249848 h3.jsx-3828249848{padding-top:0px;margin-top:0px;}.skills-text-container.jsx-3828249848 h5.jsx-3828249848{padding-top:0px;margin-top:0px;}.text-box-4.jsx-3828249848{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}.tech-rows-container.jsx-3828249848{margin-top:30px;}.tech-row.jsx-3828249848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.tech-image-container.jsx-3828249848{width:30%;padding:5px;}.tech-image-container.jsx-3828249848 span.jsx-3828249848{font-size:100px;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}.tech-image-container.jsx-3828249848 span.jsx-3828249848:hover{color:#F5AD25;}.pic-box-5.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-education.JPG) no-repeat center right;background-size:cover;background-position:bottom right 20%;float:left;width:40%;height:100%;}.text-box-5.jsx-3828249848{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}.text-box-5.jsx-3828249848 h2.jsx-3828249848{font-size:85px;}.education-row.jsx-3828249848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.education-image-container.jsx-3828249848{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.education-text-container.jsx-3828249848{line-height:1.2;width:75%;display:inline;}.education-text-container.jsx-3828249848 h3.jsx-3828249848{padding-top:0px;margin-top:0px;}.education-text-container.jsx-3828249848 h4.jsx-3828249848{padding-top:0px;margin-top:0px;}.education-text-container.jsx-3828249848 h5.jsx-3828249848{padding-top:0px;margin-top:0px;}.pic-box-6.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}.text-box-6.jsx-3828249848{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}@media (max-width:480px){.cover.jsx-3828249848{box-sizing:border-box;background:transparent url(/static/pro-about-me.JPG) no-repeat center right;background-size:cover;background-position:top right 28%;text-align:left;height:80vh;}.hello.jsx-3828249848{color:#FFF;line-height:1.4;display:inline-block;position:relative;top:500px;left:10px;padding-left:20px;padding-right:80px;opacity:100%;}.hello.jsx-3828249848 h1.jsx-3828249848{line-height:1.0;font-family:'Galano';color:#FFF;font-size:30px;margin:0 0 0px 0;padding:0px;}.subtitle.jsx-3828249848{font-family:\"HomepageBaukasten-Bold\";font-size:10px;margin-top:10px;margin-left:0px;}a.button.jsx-3828249848{font-family:'Larsseit';display:inline-block;text-transform:uppercase;font-size:10px;background:#F5AD25;margin-left:5px;margin-top:30px;padding:8px 30px;top:25px;color:#FFF;border-radius:5px;}.text-left.jsx-3828249848{text-align:left;padding:5px 40px;}.text-right.jsx-3828249848{text-align:right;padding:5px 40px;}h2.jsx-3828249848{font-family:'Galano';font-size:50px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.blink-h2.jsx-3828249848{font-family:'Galano';font-size:40px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.majin-h2.jsx-3828249848{font-family:'Galano';font-size:40px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.work-h2.jsx-3828249848{font-family:'Galano';font-size:60px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}.contact-h2.jsx-3828249848{font-family:'Galano';font-size:40px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}h3.jsx-3828249848{font-family:'Galano';font-size:12px;color:#343D4F;padding:5px 0;margin-bottom:0px;}.contact-h5.jsx-3828249848{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;margin-top:0px;}h4.jsx-3828249848{font-family:'CarreNoir';font-size:12px;color:#a6b1b9;padding:0px 0;margin-bottom:0px;line-height:1.0;}h5.jsx-3828249848{font-family:'Varta';font-size:12px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;}.features-h5.jsx-3828249848{font-family:'Varta';font-size:12px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;margin-top:0px;}@media (max-width:480px){.hello.jsx-3828249848{font-family:'Galano';font-size:18px;padding:20px;}h1.jsx-3828249848{font-size:28px;}}.section-container.jsx-3828249848{height:150vh;display:block;max-width:100%;margin:0 0;}.section-container-sickfits.jsx-3828249848{height:150vh;display:block;max-width:100%;margin:0 0;}.section-container-linkedup.jsx-3828249848{height:150vh;display:block;max-width:100%;margin:0 0;}.section-container-contact.jsx-3828249848{height:140vh;display:block;max-width:100%;margin:0 auto;}.text-box.jsx-3828249848{box-sizing:border-box;background:#FFF;float:left;width:100%;height:100%;}.pic-box.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-cover.JPG) no-repeat center right;background-size:cover;background-position:top right 28%;float:right;width:100%;height:100vh;}.text-box-2.jsx-3828249848{box-sizing:border-box;background:#f2efef;float:left;width:100%;height:100%;}.text-box-2.jsx-3828249848 h2.jsx-3828249848{color:#FFF;}.pic-box-2.jsx-3828249848{display:none;box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;width:100%;height:100%;}.pic-box-2-mobile.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:right;height:90vh;}.projects-row-1.jsx-3828249848{display:justify;}.project-image-container.jsx-3828249848{width:50%;}.project-image.jsx-3828249848{width:100%;padding:7px;padding-top:0px;}.text-box-3.jsx-3828249848{box-sizing:border-box;background:#1C212A;float:left;width:100%;height:100%;}.pic-box-3.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-skills.JPG) no-repeat center right;background-size:cover;background-position:top right 35%;float:right;width:100%;height:100%;}.pic-box-4.jsx-3828249848{display:none;box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.pic-box-4-mobile.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.skills-row.jsx-3828249848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.skills-image-container.jsx-3828249848{width:80px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5px;}.skills-text-container.jsx-3828249848{line-height:1.2;width:75%;display:inline;}.skills-text-container.jsx-3828249848 h3.jsx-3828249848{padding-top:0px;margin-top:0px;}.skills-text-container.jsx-3828249848 h5.jsx-3828249848{padding-top:0px;margin-top:0px;}.text-box-4.jsx-3828249848{box-sizing:border-box;background:#FFF;float:right;width:100%;height:100%;}.tech-rows-container.jsx-3828249848{margin-top:30px;}.tech-row.jsx-3828249848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.tech-image-container.jsx-3828249848{width:30%;padding:5px;}.tech-image-container.jsx-3828249848 span.jsx-3828249848{font-size:60px;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}.tech-image-container.jsx-3828249848 span.jsx-3828249848:hover{color:#F5AD25;}.pic-box-5.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-education.JPG) no-repeat center right;background-size:cover;background-position:bottom right 20%;float:left;width:100%;height:90vh;}.text-box-5.jsx-3828249848{box-sizing:border-box;background:#1C212A;float:left;width:100%;height:100%;}.text-box-5.jsx-3828249848 h2.jsx-3828249848{font-size:40px;}.education-row.jsx-3828249848{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.education-image-container.jsx-3828249848{height:70px;width:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.education-text-container.jsx-3828249848{line-height:1.2;width:75%;display:inline;}.education-text-container.jsx-3828249848 h3.jsx-3828249848{padding-top:0px;margin-top:0px;}.education-text-container.jsx-3828249848 h4.jsx-3828249848{padding-top:0px;margin-top:0px;}.education-text-container.jsx-3828249848 h5.jsx-3828249848{padding-top:0px;margin-top:0px;}.pic-box-6.jsx-3828249848{display:none;box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.pic-box-6-mobile.jsx-3828249848{box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100vh;}.text-box-6.jsx-3828249848{box-sizing:border-box;background:#FFF;float:right;width:100%;height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xccmh1d2VcXERlc2t0b3BcXENvZGluZyBQcm9qZWN0c1xccmh1d2VsbHNhbWFub1xccGFnZXNcXHByb2plY3RzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXFNZ0IsQUFHMkIsQUFXUCxBQVdLLEFBUXFCLEFBTWQsQUFhUCxBQUlDLEFBSUksQUFRQSxBQVFBLEFBUUEsQUFRQSxBQU9BLEFBUUcsQUFPSixBQVFBLEFBVUcsQUFLTixBQUlKLEFBTUEsQUFNQSxBQU1BLEFBTVMsQUFPQSxBQVNBLEFBT1gsQUFHVyxBQVVFLEFBVVgsQUFHRixBQUdBLEFBS1csQUFPQSxBQVNBLEFBU1QsQUFNSCxBQU1NLEFBS0EsQUFJQSxBQUlNLEFBT04sQUFHSCxBQUdILEFBSU0sQUFRRixBQUdRLEFBU0EsQUFPUCxBQUdGLEFBTUgsQUFNTSxBQUtBLEFBSUEsQUFJQSxBQUlNLEFBU0EsQUFpQkUsQUFRWCxBQVdLLEFBUXFCLEFBTWQsQUFhUCxBQUlDLEFBSUksQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBT0EsQUFRRyxBQVFKLEFBUUEsQUFVRyxBQUtOLEFBSUosQUFNQSxBQU1BLEFBTUEsQUFNUyxBQU9BLEFBU0EsQUFPWCxBQUdFLEFBU1MsQUFRTixBQUdOLEFBR0MsQUFLVyxBQU9BLEFBU1QsQUFVUyxBQVNULEFBTUYsQUFNSyxBQUtBLEFBSUEsQUFJTSxBQU9OLEFBR0gsQUFHSCxBQUlLLEFBUUQsQUFHUSxBQVNBLEFBT1AsQUFHRixBQU1ELEFBTUksQUFLQSxBQUlBLEFBSUEsQUFJSCxBQVVTLEFBU0EsVUFqZmIsQUFnQ0MsQUF3Q0QsQUF1UVgsQUFpRmMsQ0Evb0JFLEFBOEtsQixBQTBCQSxBQUdjLEFBcUtNLEFBdUxsQixBQTBCYyxBQThDQSxDQXdFRCxDQXhqQkMsQUFNQSxBQU1BLEFBTUEsQUF1V0UsQUFNQSxBQU1BLEFBTUEsQUFnQ1EsQUE0Q0EsQUF3SEEsQ0FuYjFCLEFBZ1lFLENBaGlCQSxBQW1MRixBQXNNSSxBQStKaUIsQUEyQm5CLENBbnFCcUIsQUEyQkYsQUErTVQsQUFLSyxBQUlBLEFBV2pCLEFBVW1CLEFBMENQLEFBS0ssQUFJQSxBQUlBLEFBaURRLEFBMkJKLEFBcUtuQixBQTBEWSxBQUtLLEFBSUEsQUFXakIsQUFvRFksQUFLSyxBQUlBLEFBSUEsQ0FocUJFLEFBZ1hBLENBcmFGLEVBK0dGLEFBUUEsQUFpWEUsQUFRQSxDQXZiRCxBQVFBLEFBUUQsQUFRQSxBQVFBLEFBT0EsQUFpQ0UsQUEwSEosQUF3RUEsQUFzR0ksQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBT0EsQUFrQ0UsQ0F4VkgsQUFPNkMsQUFTMUMsQUFVeUMsQUFVRSxBQXFCM0MsQUFPMkMsQUFTRixBQWtDNUMsQUFjbEIsQUFjbUUsQUFTOUMsQUF1QytDLEFBU2xELEFBaUI4RCxBQXdLNUQsQUFPNkMsQUFTMUMsQUFtQnlDLEFBbUJ6QyxBQU8yQyxBQW1CRixBQWtDNUMsQUFjbEIsQUFjbUUsQUFTOUMsQUFpRCtDLEFBU2xELENBeHNCRyxBQW1MTCxBQTZMTyxBQXlMTCxBQThDSCxBQXdFQSxDQTNsQkEsQUF3WEUsRUEvTkYsQUF3RUEsQUF3VEUsQUF3RUEsQ0E3ckJJLEFBK0hOLEFBTUEsQUFNQSxBQU1BLEFBK05RLEFBd0lOLEFBTUEsQUFNQSxBQU1BLElBaFJuQixBQUlBLEFBb0VBLEFBSUEsQUFJQSxBQWdURSxBQUlBLEFBb0VBLEFBSUEsQUFJQSxFQXBUQSxBQTZQb0IsQ0FoWUYsQUF1SWxCLENBcmE2RSxBQWlEL0UsQUE4RGdCLEFBUUEsQUFpWEUsQUFRQSxBQXFFOEMsQUE0Q0EsQUF3SE0sQ0FwcUJ0RSxBQW9CZ0IsQUFRQSxBQVFBLEFBT0EsQUFpQ0MsQUF3U0MsQUFRQSxBQVFBLEFBUUEsQUFRQSxBQVFBLEFBT0EsQUFrQ0MsQ0FwZU4sQUFPSSxBQTRCRCxBQVFBLEFBcVVELEFBT0ksQ0EzT04sQUEyR0MsQUFxRkEsQUF5TEMsQUFrSEMsQUErRkEsQ0Fwb0JBLEFBK0doQixBQXlRa0IsQUE2R2hCLEVBM1pZLEFBeUNELEFBc0NiLEFBaURhLEFBdUJiLEFBa09lLEFBc0NBLEFBZ0RiLEFBaURhLEFBdUJiLENBOWpCYyxBQU1BLEFBTUEsQUFNQSxBQXVXRCxBQU1BLEFBTUEsQUFNRyxFQWxmUyxBQWdYRSxJQXhZVCxBQVdILEFBcVdLLEFBV0gsQ0F2UkQsQUFRQSxBQVVoQixBQWlDVSxBQXNVUSxBQVFBLEFBVWhCLEFBaUNXLENBbGRJLEFBUUQsQUFRRixBQU9BLEFBNktMLEFBcUZBLEFBdUVVLEFBUUEsQUFRQSxBQVFELEFBUUEsQUFRRixBQU9BLEFBcUxKLEFBK0ZBLENBbnJCSyxBQVFELENBcENBLEFBOExOLEFBdUZBLEFBMkZRLEFBOEpOLEFBc0NDLEFBNkVRLEFBb0JSLENBMWtCQyxBQTBFTCxBQTRHVSxBQWtNSCxBQW9DaEIsQUFNQSxBQU1BLEdBcllGLEFBTUEsQUFNQSxBQU1BLEFBeVhFLEdBblhZLENBMkdBLEFBcUZBLEFBeUxFLENBa0hBLEFBK0ZBLENBamhCRixBQXVGQSxDQTVSSyxBQTRKTCxBQW9OTyxBQXFLTCxBQXNDQSxBQWlHQSxDQXpsQkksQUFPQSxBQWlYRSxBQU9BLENBeldOLEFBUUEsQUFpWEUsQUFRQSxDQXJlTixBQXNFUyxBQTBTUCxBQXNFUyxBQVFBLENBeFlGLEFBUUEsQUErQkQsQUFpVUcsQUFRQSxBQVFBLEFBdUNELENBbmNKLEFBNEJHLEFBb1ZELENBMVdILEFBZ1hFLEVBaFBuQixDQTJHQSxBQXFGQSxBQXlMRSxBQWtJd0IsQ0FoWUYsQUFnWHRCLEFBK0ZBLENBaGlCRixBQWVBLEFBcUJhLEFBbUNiLEFBK0JBLEFBTWEsQUF3VEUsQUFtQ2IsQUFxQ2EsQ0F0Z0JmLEFBeVhFLEFBc0NBLEFBaUdBLENBdnFCVSxBQWdYRSxHQTVRTSxBQVFBLEFBaVhFLEFBUUEsQ0ExZFIsQUFnWEUsRUE3U2hCLEFBT2lCLEFBeUZPLEFBVUUsQUFxQ0YsQUF5T3RCLEFBT2lCLEFBbUdPLEFBNkNBLENBbGNGLEFBeVhFLENBbGdCMUIsQUFNcUIsQUE0TEcsQUE4S3RCLEFBTXFCLEFBa01HLENBcGdCUixBQXVCbEIsQUF5SW1CLEFBd0VBLEFBd0lDLEFBUUEsQUF1QkEsQUFpSkMsQUF3RUEsQ0E3cUJELEFBcURGLEFBUUEsQUFtVEksQUE2Q0YsQUFRQSxBQVFBLENBaFlGLEFBNk9NLEFBZ1lFLENBaFZGLEFBMFlFLElBenNCMUIsQUFnWEUsR0EvSWdCLEFBd0VBLEFBbVBRLEFBNENBLEFBK0RSLENBaFlGLENBN0xoQixBQWVBLEFBUWlCLEFBaVdmLEFBZ0JBLEFBUWlCLEFBdUlFLEFBd0VELENBaFZNLEdBOVIxQixBQWdYRSxBQVFBLEFBdUJBLEFBc1B3QixDQXJwQjFCLEFBUUEsQUF3S3NCLEFBd0VBLEFBZ0hwQixBQVFBLEFBUUEsQUF3THNCLEFBd0VBLENBdHBCTixBQXNCbEIsQUEwVm9CLENBdllDLEFBNktlLEFBVUUsQUFxQ0YsQUFvSmIsQUErTGUsQUE2Q0EsQ0FsY0YsQUF5WEUsQ0FoVUYsQUFzWEUsR0EvU0MsQUFnWUUsQ0FoVkwsQUEwWUUsQ0F4ZXRDLEFBd0VBLENBblV3QixBQTJIeEIsQUF5WEUsQ0ErTUEsQ0F4RUEsR0FyRW9DLEFBNENBLEVBM2pCcEIsQUFnWEUsQ0FwQ2tCLEVBOUh0QyxBQXdFQSxBQXdURSxBQXdFQSxDQTdxQmEsQUFnWEUsQUEwVnFCLFVBekRwQyxDQWhxQjRCLEFBZ1M5QixDQXpQb0IsQUFnWEMsQ0F2WXJCLEFBZ1hFLEVBcE1XLEFBVUUsQUFxQ0YsQUFtVkcsQUE2Q0QsQ0FsY0QsQUF5WEUsQ0FoVUYsQUFzWEUsSUEvUEgsQUEwWUUsRUExYkYsQUFnWUUsR0E1ZUgsQUFVRyxBQXFDSCxBQWdZRyxDQTdDQyxDQXJaTCxBQXlYSSxBQW1CQSxBQTRDQSxDQS9YSixBQXFMRSxBQWlNQyxDQWpqQkgsQ0EyVVMsQ0F6QlIsQUEwWUcsRUExYkgsQUFnWUcsQUFnREEsRUE1aEJELEFBK0NBLENBckNFLEFBcWFBLENBbGNGLEFBOE9DLENBeFpXLEFBd0NiLEFBMkxDLEFBZ1VHLEFBbUJELEFBU2QsQUFtQ2EsQ0FUQyxFQS9QRixDQTBZRyxDQTFiSCxDQWdZRSxBQWdERCxFQXZXQyxDQXJMaEIsQUErQ0EsQ0FyQ0UsQUFpTm9CLEFBb05wQixDQXBrQmtCLEFBa0lwQixBQXdiZ0IsQ0EvWGhCLEFBbVZFLENBbkJBLEFBc0RBLEVBL1BGLEVBaERBLEFBZ2JnQixBQVVkLENBMURBLEVBdlRBLEdBZ1BBLENBbm1CNEIsSUF5WjVCLENBaFhGLEFBa3JCRSx1QkExdEJzQixzQkFDTixnQkFDbEIiLCJmaWxlIjoiQzpcXFVzZXJzXFxyaHV3ZVxcRGVza3RvcFxcQ29kaW5nIFByb2plY3RzXFxyaHV3ZWxsc2FtYW5vXFxwYWdlc1xccHJvamVjdHMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcclxuXHJcbmNvbnN0IFByb2plY3RzID0gKCkgPT4gKFxyXG4gIDxMYXlvdXQgdGl0bGU9XCJQcm9qZWN0c1wiPlxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb3ZlclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImhlbGxvXCI+XHJcbiAgICAgICAgPGgxPlBST0pFQ1RTLjwvaDE+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlNPRlRXQVJFIERFVkVMT1BNRU5UIOKAoiBVSS9VWCDigKIgV0VCICYgQVBQIERFU0lHTjwvZGl2PlxyXG4gICAgICAgICAgPGEgaHJlZj1cIiNqdW1wLXRvLXRvcFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkxFQVJOIE1PUkU8L2E+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGlkPVwianVtcC10by10b3BcIiBjbGFzc05hbWU9XCJ0ZXh0LWJveFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XHJcbiAgICAgICAgICA8aDIgaWQ9XCJibGluay1oZWFsdGhcIiBjbGFzc05hbWU9XCJibGluay1oMlwiPkJsaW5rIEhlYWx0aC48L2gyPlxyXG4gICAgICAgICAgPGgzPlJlYWN0IOKAoiBSZWR1eCDigKIgUHl0aG9uIOKAoiBGbG93IOKAoiBKZXN0PC9oMz5cclxuXHJcbiAgICAgICAgICA8aDQ+XCJCbGluayBIZWFsdGggaXMgdGhlIG5ldyB3YXkgZm9yIGFsbCBBbWVyaWNhbnMgdG8gc2F2ZSBvbiB0aGVpciBwcmVzY3JpcHRpb25zLiBXaXRoIG91ciBwcm9wcmlldGFyeSB0ZWNobm9sb2d5LCBldmVyeW9uZSBub3cgaGFzIGFjY2VzcyB0byBvbmUsIGxvdyBuZWdvdGlhdGVkIHByaWNlIG9uIG92ZXIgMTUsMDAwIG1lZGljYXRpb25zLlwiPC9oND5cclxuXHJcbiAgICAgICAgICA8aDU+V2l0aCBhbiBleHBvbmVudGlhbGx5IGdyb3dpbmcgY3VzdG9tZXItYmFzZSBvZiB3ZWxsIG92ZXIgMSBtaWxsaW9uIHBlb3BsZSwgaXQgd2FzIHZpdGFsIHRvIGlubm92YXRlIGFuZCBkZXNpZ24gc29sdXRpb25zIHRvIG1haW50YWluIHRoZSBwcm9kdWN0J3Mgc3RhYmlsaXR5IGFzIGl0IGNvbnRpbnVlZCB0byBldm9sdmUgYW5kIGJlY29tZSBhIHJlbGlhYmxlIGhvdXNlaG9sZCBicmFuZC48L2g1PlxyXG5cclxuICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgPGgzPldoYXQgSSBEaWQ6PC9oMz5cclxuICAgICAgICAgICAgPGxpPjxoNSBjbGFzc05hbWU9XCJmZWF0dXJlcy1oNVwiPkJ1aWx0IHJldXNhYmxlIGNvbXBvbmVudHMgaW4gUmVhY3QgdXNpbmcgb2JqZWN0LW9yaWVudGVkL2Z1bmN0aW9uYWwgcHJvZ3JhbW1pbmcgdG8gaW1wcm92ZSBwZXJmb3JtYW5jZSBvbiB0aGUgd2Vic2l0ZTwvaDU+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGg1IGNsYXNzTmFtZT1cImZlYXR1cmVzLWg1XCI+Q29sbGFib3JhdGVkIHdpdGggdGhlIFVYL2Zyb250LWVuZCBkZXZlbG9wbWVudCB0ZWFtIGluIGFuIEFnaWxlL1RERCBlbnZpcm9ubWVudCB0byBjb25zaXN0ZW50bHkgY29tcGxldGUgZGVsaXZlcmFibGVzPC9oNT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPVwiZmVhdHVyZXMtaDVcIj5DcmVhdGVkIEEvQiB0ZXN0IGV4cGVyaW1lbnRzIHRvIGNvbGxlY3QgdXNhZ2UgZGF0YSB0byBpbmNyZWFzZSB1c2VyIHNpZ24tdXAgY29udmVyc2lvbiBhbmQgcmV0ZW50aW9uIHJhdGVzPC9oNT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cDovL3d3dy5ibGlua2hlYWx0aC5jb21cIiBjbGFzc05hbWU9XCJidXR0b25cIj5XZWJzaXRlPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94XCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lci1zaWNrZml0c1wiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtMlwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYm94LTJcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8aDIgaWQ9XCJzaWNrLWZpdHNcIiA+U2ljayBGaXRzLjwvaDI+XHJcbiAgICAgICAgICA8aDM+UmVhY3Qg4oCiIE5leHQg4oCiIEdyYXBoUUwg4oCiIFByaXNtYSDigKIgSmVzdDwvaDM+XHJcbiAgICAgICAgICA8aDQ+QW4gZS1jb21tZXJjZSBhcHAgZm9yIGJ1eWluZyBhbmQgc2VsbGluZyBhcHBhcmVsLCBzaG9lcywgYW5kIGFjY2Vzc29yaWVzLjwvaDQ+XHJcblxyXG4gICAgICAgICAgPGg1PkluIHRoaXMgaGlnaGx5IGRpZ2l0YWwgYWdlLCBpdCdzIGJlY29tZSBhbG1vc3QgbmVjZXNzYXJ5IHRvIGJlIGFibGUgdG8gYnV5IGFuZCBzZWxsIHByb2R1Y3RzIG91dHNpZGUgb2YgdGhlIGNsYXNzaWMgYnJpY2stYW5kLW1vcnRhciBzdG9yZWZyb250LiBCeSB1c2luZyBtb2Rlcm4gdGVjaG5vbG9naWVzIGxpa2UgUmVhY3QgYW5kIEdyYXBoUUwsIGl0J3MgY29tcGxldGVseSBwb3NzaWJsZSB0byBidWlsZCBhIGZhc3QgYW5kIHJlbGlhYmxlIGUtY29tbWVyY2UgcGxhdGZvcm0gZm9yIHlvdXIgYnJhbmQgdG8gZ3JvdyBmYXN0ZXIgdGhhbiBldmVyITwvaDU+XHJcblxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8aDM+V2hhdCBJIERpZDo8L2gzPlxyXG4gICAgICAgICAgICA8bGk+PGg1IGNsYXNzTmFtZT1cImZlYXR1cmVzLWg1XCI+QnVpbHQgd2l0aCBSZWFjdCwgTmV4dCBhbmQgQXBvbGxvIEdyYXBoUUwgdG8gdXRpbGl6ZSByZXVzYWJsZSBjb21wb25lbnRzLCBoYXZlIHVsdHJhZmFzdCBwYWdlIGxvYWRpbmcgc3BlZWRzLCBhbmQgdG8gbWFrZSBvbmUgc2luZ2xlIGNhbGwgdG8gYWNjZXNzIGRhdGEgaW4gYW55IGNvbXBvbmVudC48L2g1PjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxoNSBjbGFzc05hbWU9XCJmZWF0dXJlcy1oNVwiPkluY29ycG9yYXRlZCBKZXN0IGFuZCBFbnp5bWUgdG8gYWxsb3cgZm9yIHRob3JvdWdoIHVuaXQgdGVzdGluZyB0byBlbnN1cmUgYXBwIHN0YWJpbGl0eS48L2g1PjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxoNSBjbGFzc05hbWU9XCJmZWF0dXJlcy1oNVwiPkFkZGVkIFN0cmlwZSBBUEkgaW4gb3JkZXIgdG8gYWRkIGEgZGVwZW5kYWJsZSBwYXltZW50IG1ldGhvZCBmb3IgdXNlcnM8L2g1PjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxoNSBjbGFzc05hbWU9XCJmZWF0dXJlcy1oNVwiPlV0aWxpemVkIENsb3VkaW5hcnkgdG8gaGFuZGxlIHJlc2l6aW5nIG9mIHVwbG9hZGVkIHByb2R1Y3QgcGhvdG9zIGJlZm9yZSB0aGV5IGFyZSBzYXZlZCB0byB0aGUgYmFja2VuZDwvaDU+PC9saT5cclxuICAgICAgICAgIDwvdWw+XHJcblxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9yaHV3ZWxsc2FtYW5vL2FkdmFuY2VkLXJlYWN0L3RyZWUvbWFzdGVyL3NpY2stZml0cy9mcm9udGVuZFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkZyb250ZW5kIFJlcG88L2E+XHJcbiAgICAgICAgICAgIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcmh1d2VsbHNhbWFuby9hZHZhbmNlZC1yZWFjdC90cmVlL21hc3Rlci9zaWNrLWZpdHMvYmFja2VuZFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkJhY2tlbmQgUmVwbzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9eXRBVFdNZGxTX3dcIiBjbGFzc05hbWU9XCJidXR0b25cIj5EZW1vPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljLWJveC0yLW1vYmlsZVwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYm94LTNcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPGgyIGlkPVwicG9ydGZvbGlvXCIgPlBvcnRmb2xpby48L2gyPlxyXG4gICAgICAgICAgPGgzPlJlYWN0IOKAoiBOZXh0IOKAoiBKYXZhU2NyaXB0PC9oMz5cclxuICAgICAgICAgIDxoND5NYWRlIGZyb20gc2NyYXRjaCwgdGhpcyBwb3J0Zm9saW8gcHJvamVjdCBpcyB3b3J0aCBtZW50aW9uaW5nLjwvaDQ+XHJcblxyXG4gICAgICAgICAgPGg1PkhhdmluZyBhIHBvcnRmb2xpbyB3ZWJzaXRlIGNhbiBwcm92aWRlIG1vcmUgZGV0YWlscyBhbmQgY29udGV4dCB0byB5b3VyIHN0b3J5IHRoYW4geW91IGNhbiBmaXQgb24geW91ciByZXN1bWUuIEJ5IHVzaW5nIFJlYWN0IGFuZCBOZXh0LCBJJ20gYWJsZSB0byBidWlsZCBmYXN0IGFuZCBmb2N1cyBvbiB0aGUgVXNlciBJbnRlcmZhY2UgYW5kIFVzZXIgRXhwZXJpZW5jZS4gSSBhbHNvIHVzZWQgYSBjb25zaXN0ZW50IHN0eWxlIGd1aWRlIHRvIG1haW50YWluIGJlYXV0aWZ1bCBleWUtY2F0Y2hpbmcgdHlwb2dyYXBoeSBhbmQgYSByZWZyZXNoaW5nIGNvb2wtdG9uZWQgY29sb3IgdGhlbWUuIDwvaDU+XHJcblxyXG4gICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICA8aDM+V2hhdCBJIERpZDo8L2gzPlxyXG4gICAgICAgICAgICA8bGk+PGg1IGNsYXNzTmFtZT1cImZlYXR1cmVzLWg1XCI+QnVpbHQgd2l0aCBSZWFjdCBhbmQgTmV4dCB0byBnZXQgdXAtYW5kLXJ1bm5pbmcgcmVsYXRpdmVseSBmYXN0PC9oNT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPVwiZmVhdHVyZXMtaDVcIj5HYXRoZXJlZCBsYXlvdXQgYW5kIGRlc2lnbiBpbnNwaXJhdGlvbiBvbiBEcmliYmJsZSBhbmQgc2tldGNoZWQgb3V0IGEgd2lyZWZyYW1lIG9mIHRoZSB3ZWJzaXRlIGJlZm9yZSBJIHN0YXJ0ZWQgZGV2ZWxvcGluZzwvaDU+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGg1IGNsYXNzTmFtZT1cImZlYXR1cmVzLWg1XCI+UmFuIGEgY291cGxlIG9mIFVJL1VYIHVzZXIgdGVzdHMgYWxvbmcgdGhlIHdheSB0byBtYWtlIHN1cmUgZXZlcnkgYXNwZWN0IG9mIHRoZSB3ZWJzaXRlIHdhcyByZWNlaXZlZCB3ZWxsPC9oNT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFub1wiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkdpdEh1YiBSZXBvPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljLWJveC0zXCI+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lci1saW5rZWR1cFwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtNFwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYm94LTRcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgICA8aDIgaWQ9XCJsaW5rZWR1cFwiID5MaW5rZWRVUC48L2gyPlxyXG4gICAgICAgICAgPGgzPlJlYWN0IOKAoiBSdWJ5IG9uIFJhaWxzIOKAoiBXZWJTb2NrZXRzPC9oMz5cclxuICAgICAgICAgIDxoND5BIHNlbGYtZGVzdHJ1Y3RpbmcgY2hhdCBhcHAgdGhhdCBhaW1zIHRvIG1pbWljIHJlYWwtbGlmZSBpbnRlcmFjdGlvbnMuPC9oND5cclxuXHJcbiAgICAgICAgICA8aDU+SW5zcGlyZWQgYnkgcmVhbC1saWZlIG9jY3VyZW5jZXMgb2YgbWVldGluZyBuZXcgcGVvcGxlLCBJIHdhbnRlZCB0byBjcmVhdGUgYSB0aW1lLWJhc2VkIGNoYXQgYXBwIHRoYXQgYWxsb3dlZCB1c2VycyB0byBtZWV0IG90aGVyIHByb2Zlc3Npb25hbHMgYmFzZWQgb2ZmIHRoZWlyIExpbmtlZEluIHByb2ZpbGVzLiBQZXJmZWN0IGZvciBwZW9wbGUgd2hvIHdhbnQgdG8gZXhwYW5kIHRoZWlyIG5ldHdvcmtzIHdpdGhvdXQgdGhlIGhhc3NsZSEgPC9oNT5cclxuXHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxoMz5XaGF0IEkgRGlkOjwvaDM+XHJcbiAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPVwiZmVhdHVyZXMtaDVcIj5CdWlsdCB3aXRoIFJlYWN0IGZvciB0aGUgZnJvbnQtZW5kLCBSdWJ5IG9uIFJhaWxzIGZvciB0aGUgYmFjay1lbmQgYW5kIFBvc3RncmVTUUwgZm9yIERhdGFiYXNlIE1hbmFnZW1lbnQ8L2g1PjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxoNSBjbGFzc05hbWU9XCJmZWF0dXJlcy1oNVwiPkltcGxlbWVudGVkIEFjdGlvbkNhYmxlIChXZWJTb2NrZXRzKSB0byBwcm92aWRlIGluc3RhbnQgYW5kIGxpdmUgY2hhdCB1cGRhdGVzIHRvIGFsbCB1c2VycyBpbiB0aGUgQ2hhdHJvb208L2g1PjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxoNSBjbGFzc05hbWU9XCJmZWF0dXJlcy1oNVwiPkFkZGVkIFVzZXIgQXV0aG9yaXphdGlvbi9Mb2dpbiBmdW5jdGlvbmFsaXR5IGJ5IHVzaW5nIEpTT04gV2ViIFRva2VucyBhbmQgRW5jcnlwdGlvbi9EZWNyeXB0aW9uIGFsZ29yaXRobXM8L2g1PjwvbGk+XHJcbiAgICAgICAgICAgICAgPGxpPjxoNSBjbGFzc05hbWU9XCJmZWF0dXJlcy1oNVwiPkVuYWJsZWQgZnVsbCBDUlVEIGZ1bmN0aW9uYWxpdHkgZm9yIFVzZXIgUHJvZmlsZXMgaW5jbHVkaW5nIGEg4oCcTGlrZeKAnSBmZWF0dXJlIGFzIHdlbGwgYXMgdXBkYXRpbmcgdXNlciBkZXRhaWxzPC9oNT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JodXdlbGxzYW1hbm8vbGlua2VkdXAtZnJvbnRlbmRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5Gcm9udGVuZCBSZXBvPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JodXdlbGxzYW1hbm8vbGlua2VkdXAtYmFja2VuZFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkJhY2tlbmQgUmVwbzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9d2VsZkFoc2lObTRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5EZW1vPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwicGljLWJveC00LW1vYmlsZVwiPlxyXG5cclxuICAgICAgPC9kaXY+XHJcblxyXG4gICAgPC9kaXY+XHJcblxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lclwiPlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYm94LTVcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtbGVmdFwiPlxyXG4gICAgICAgICAgPGgyIGlkPVwibWFqaW4tc3VzaGlcIiBjbGFzc05hbWU9XCJtYWppbi1oMlwiPk1hamluIFN1c2hpLjwvaDI+XHJcbiAgICAgICAgICA8aDM+SmF2YVNjcmlwdCDigKIgUnVieSBvbiBSYWlsczwvaDM+XHJcbiAgICAgICAgICA8aDQ+QW4gaW50ZXJhY3RpdmUgcmVzdGF1cmFudCBnYW1lIHdoZXJlIHlvdSBjcmVhdGUgYW5kIGVhdCBzdXNoaS48L2g0PlxyXG5cclxuICAgICAgICAgIDxoNT5TdGlsbCBteSBmYXZvcml0ZSBhcHAgdG8gaGF2ZSB3b3JrZWQgb24gLSBpdCdzIGEgSmF2YVNjcmlwdCBnYW1lIHdpdGggYSBidW5jaCBvZiBhZG9yYWJsZSBzdXNoaSBjaGFyYWN0ZXJzLCBhbmltYXRpb25zIGFuZCBzb3VuZHMuIFlvdSBoYXZlIGluLWdhbWUgY3VycmVuY3kgdGhhdCB5b3UgdXNlIHRvIHB1cmNoYXNlIHN1c2hpIHRvIGVhdCBhcyB5b3UgZ2V0IGh1bmdyeS4uIGFuZCB5b3Ugd2lsbCBnZXQgaHVuZ3J5LiBJJ20gcGxhbm5pbmcgb24gd29ya2luZyBvbiBhIHNlcXVlbCBpbiB0aGUgbmVhciBmdXR1cmUgLSBNYWppbiBTdXNoaSAyICwgY29taW5nIHNvb24hPC9oNT5cclxuXHJcbiAgICAgICAgICA8dWw+XHJcbiAgICAgICAgICAgIDxoMz5XaGF0IEkgRGlkOjwvaDM+XHJcbiAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPVwiZmVhdHVyZXMtaDVcIj5CdWlsdCB3aXRoIEphdmFzY3JpcHQgZm9yIHRoZSBmcm9udC1lbmQsIFJ1Ynkgb24gUmFpbHMgZm9yIHRoZSBiYWNrLWVuZCBhbmQgUG9zdGdyZVNRTCBmb3IgRGF0YWJhc2UgTWFuYWdlbWVudDwvaDU+PC9saT5cclxuICAgICAgICAgICAgICA8bGk+PGg1IGNsYXNzTmFtZT1cImZlYXR1cmVzLWg1XCI+VXNlZCBDU1MgQW5pbWF0aW9ucywgTXVzaWMsIGFuZCBTb3VuZHMgdG8gY3JlYXRlIGFuIGltbWVyc2l2ZSBhbmQgZW5qb3lhYmxlIGV4cGVyaWVuY2UgZm9yIHVzZXJzPC9oNT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPVwiZmVhdHVyZXMtaDVcIj5BZGRlZCBhIEh1bmdlciBNZXRlciBmZWF0dXJlIHRoYXQgZGVjcmVhc2VkIG92ZXIgdGltZSBhbmQgYWdncmVzc2l2ZWx5IGFsZXJ0ZWQgdGhlIHVzZXIgaWYgaXQgZmVsbCBiZWxvdyBhIGNlcnRhaW4gbnVtYmVyPC9oNT48L2xpPlxyXG4gICAgICAgICAgICAgIDxsaT48aDUgY2xhc3NOYW1lPVwiZmVhdHVyZXMtaDVcIj5VdGlsaXplZCBmdWxsIENSVUQgZnVuY3Rpb25hbGl0eSB0byBhbGxvdyB1c2VycyB0byBjcmVhdGUsIGVkaXQsIGFuZCBkZXN0cm95IGluLWdhbWUgU3VzaGlzPC9oNT48L2xpPlxyXG4gICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JodXdlbGxzYW1hbm8vbWFqaW4tc3VzaGktZnJvbnRlbmRcIiBjbGFzc05hbWU9XCJidXR0b25cIj5Gcm9udGVuZCBSZXBvPC9hPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3JodXdlbGxzYW1hbm8vbWFqaW4tc3VzaGktYmFja2VuZFwiIGNsYXNzTmFtZT1cImJ1dHRvblwiPkJhY2tlbmQgUmVwbzwvYT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cImh0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9a2xIV2pERkk0SU1cIiBjbGFzc05hbWU9XCJidXR0b25cIj5EZW1vPC9hPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94LTVcIj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyLWNvbnRhY3RcIj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94LTZcIj5cclxuXHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJveC02XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XHJcbiAgICAgICAgPGgyPkNvbnRhY3QuPC9oMj5cclxuICAgICAgICAgIDxoMz5IT1cgQ0FOIEkgSEVMUCBZT1U/PC9oMz5cclxuXHJcbiAgICAgICAgICA8aDU+SSBob3BlIHlvdSd2ZSBlbmpveWVkIGxlYXJuaW5nIG1vcmUgYWJvdXQgbWUhIDxici8+SXQncyBkZWZpbml0ZWx5IGp1c3Qgc2NyYXRjaGluZyB0aGUgc3VyZmFjZSBvZiBteSBhYmlsaXRpZXMgYW5kIGRlZmluaXRlbHkgbXkgcGVyc29uYWxpdHksIHRvby4gPGJyLz5UaGUgaW5kdXN0cnkgaGFzIGNvaW5lZCBhIHRlcm0gZm9yIHNvbWVvbmU8YnIvPiB3aXRoIG15IHNraWxsc2V0IGJ1dCBJIHJlZnVzZSB0byBiZSBsYWJlbGVkIGFzIGEgVW5pY29ybi4g8J+YhSBKb2tlcyBhc2lkZSwgSSdtIHZlcnkgd2VsbC1yb3VuZGVkIGFuZCBJIGFwcHJvYWNoIGNoYWxsZW5nZXMgaGVhZC1vbiB3aXRoIGFuIGF1cmEgb2YgaGlnaC1zcGlyaXRzIGFuZCB1bnNoYWtlYWJsZSBjb25maWRlbmNlLjwvaDU+XHJcblxyXG4gICAgICAgICAgPGg1PldoYXQgY2hhbGxlbmdlcyBhcmUgeW91IGN1cnJlbnRseSBmYWNpbmc/IDxici8+SXMgdGhlcmUgYW55dGhpbmcgeW91IHRoaW5rIEkgY2FuIGhlbHAgeW91IHdpdGg/XHJcbiAgICAgICAgICA8YnIvPkRvIHlvdSB0aGluayBJIHdvdWxkIGJlIGEgZ29vZCBhZGRpdGlvbjxici8+IHRvIHlvdXIgZW5naW5lZXJpbmcgdGVhbT8g8J+klDwvaDU+XHJcblxyXG4gICAgICAgICAgPGg1PklmIHNvLCBJJ20gY3VycmVudGx5IGF2YWlsYWJsZSA8YnIvPmZvciBuZXcgb3Bwb3J0dW5pdGllcyA8YnIvPmFzIGEgRnVsbCBTdGFjayBTb2Z0d2FyZSBFbmdpbmVlciE8L2g1PiBcclxuICAgICAgICAgIDxoNT5JZiB5b3Ugd291bGQgbGlrZSB0byBnZXQgaW4gdG91Y2ggd2l0aCBtZSwgPGJyLz5JJ20gYWx3YXlzIGNoZWNraW5nIG15IGUtbWFpbHMhPC9oNT5cclxuXHJcbiAgICAgICAgICA8aDM+cmh1d2VsbC5zYW1hbm9AZ21haWwuY29tPC9oMz5cclxuICAgICAgICAgIDxoMiBjbGFzc05hbWU9XCJjb250YWN0LWgyXCI+VGhhbmsgeW91ITwvaDI+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94LTYtbW9iaWxlXCI+XHJcblxyXG4gICAgICA8L2Rpdj5cclxuXHJcbiAgICA8L2Rpdj5cclxuXHJcbiAgICA8c3R5bGUganN4PntgXHJcbiAgICAgIC5jb3ZlciB7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIG1pbi1oZWlnaHQ6IDEzMHZoO1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgvc3RhdGljL3Byby1hYm91dC1tZS5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1hdHRhY2htZW50OiBmaXhlZDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3A7XHJcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICAgIH1cclxuICAgICAgLmhlbGxvIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAyMDBweDtcclxuICAgICAgICBsZWZ0OiA1MHB4O1xyXG4gICAgICAgIHBhZGRpbmctbGVmdDogODBweDtcclxuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG4gICAgICAgIG9wYWNpdHk6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLmhlbGxvIGgxIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4wO1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICBmb250LXNpemU6IDkycHg7XHJcbiAgICAgICAgbWFyZ2luOiAwIDAgMHB4IDA7XHJcbiAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5zdWJ0aXRsZSB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSG9tZXBhZ2VCYXVrYXN0ZW4tQm9sZFwiO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgIH1cclxuICAgICAgYS5idXR0b24ge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGFyc3NlaXQnO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRjVBRDI1O1xyXG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICBwYWRkaW5nOiAxMHB4IDQwcHg7XHJcbiAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICAgICAgfVxyXG4gICAgICAudGV4dC1sZWZ0IHtcclxuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtcmlnaHQge1xyXG4gICAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTMwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaDIge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICBmb250LXNpemU6IDEyMHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuMztcclxuICAgICAgfVxyXG4gICAgICAud29yay1oMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XHJcbiAgICAgICAgY29sb3I6ICNGMkYyRjI7XHJcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjM7XHJcbiAgICAgIH1cclxuICAgICAgLmJsaW5rLWgyIHtcclxuICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgZm9udC1zaXplOiA5MHB4O1xyXG4gICAgICAgIGNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuMztcclxuICAgICAgfVxyXG4gICAgICAuY29udGFjdC1oMiB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgICAgICBjb2xvcjogI0YyRjJGMjtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDAuMztcclxuICAgICAgfVxyXG4gICAgICBoMyB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICBjb2xvcjogIzM0M0Q0RjtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgLmNvbnRhY3QtaDUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICBmb250LXNpemU6IDMwcHg7XHJcbiAgICAgICAgY29sb3I6ICMzNDNENEY7XHJcbiAgICAgICAgcGFkZGluZzogMHB4IDA7XHJcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgICBoNCB7XHJcbiAgICAgICAgZm9udC1mYW1pbHk6ICdDYXJyZU5vaXInO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgICAgICBjb2xvcjogI2E2YjFiOTtcclxuICAgICAgICBwYWRkaW5nOiAwcHggMDtcclxuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgaDUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2E2YjFiOTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMi4yO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgfVxyXG4gICAgICAuZmVhdHVyZXMtaDUge1xyXG4gICAgICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgICAgICBjb2xvcjogI2E2YjFiOTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMi4yO1xyXG4gICAgICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgLmhlbGxvIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGgxIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tY29udGFpbmVyIHtcclxuICAgICAgICBoZWlnaHQ6IDEzMHZoO1xyXG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgICAgfVxyXG4gICAgICAuc2VjdGlvbi1jb250YWluZXItc2lja2ZpdHMge1xyXG4gICAgICAgIGhlaWdodDogMTMwdmg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC5zZWN0aW9uLWNvbnRhaW5lci1saW5rZWR1cCB7XHJcbiAgICAgICAgaGVpZ2h0OiAxMzB2aDtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICAgIH1cclxuICAgICAgLnNlY3Rpb24tY29udGFpbmVyLWNvbnRhY3Qge1xyXG4gICAgICAgIGhlaWdodDogMTUwdmg7XHJcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJveCB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5waWMtYm94IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1jb3Zlci5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjAlO1xyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aCA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJveC0yIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNmMmVmZWY7IFxyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aCA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJveC0yIGgyIHtcclxuICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgfVxyXG4gICAgICAucGljLWJveC0yIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby13b3JrLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyMCU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgLnBpYy1ib3gtMi1tb2JpbGUge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby13b3JrLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjAlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuICAgICAgLnByb2plY3RzLXJvdy0xIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICB9XHJcbiAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnByb2plY3QtaW1hZ2Uge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmc6IDdweDtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJveC0zIHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxQzIxMkE7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnBpYy1ib3gtMyB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tc2tpbGxzLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAzNSU7XHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoIDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnBpYy1ib3gtNCB7XHJcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tdGVjaC5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjUlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC5za2lsbHMtcm93IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xyXG4gICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5za2lsbHMtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICB3aWR0aDogMjAlO1xyXG4gICAgICAgIGhlaWdodDogMjAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgfVxyXG4gICAgICAuc2tpbGxzLXRleHQtY29udGFpbmVyIHtcclxuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xyXG4gICAgICB9XHJcbiAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIgaDMge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIgaDUge1xyXG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJveC00IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7IFxyXG4gICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICB3aWR0aCA2MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZWNoLXJvd3MtY29udGFpbmVyIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZWNoLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgfVxyXG4gICAgICAudGVjaC1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgcGFkZGluZzogNXB4O1xyXG4gICAgICB9XHJcbiAgICAgIC50ZWNoLWltYWdlLWNvbnRhaW5lciBzcGFuIHtcclxuICAgICAgICBmb250LXNpemU6IDEwMHB4O1xyXG4gICAgICAgIC1vLXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgIC1tcy10cmFuc2l0aW9uOi4zcztcclxuICAgICAgICAtbW96LXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgIH1cclxuICAgICAgLnRlY2gtaW1hZ2UtY29udGFpbmVyIHNwYW46aG92ZXIge1xyXG4gICAgICAgIGNvbG9yOiAjRjVBRDI1O1xyXG4gICAgICB9XHJcbiAgICAgIC5waWMtYm94LTUge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLWVkdWNhdGlvbi5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XHJcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQgMjAlO1xyXG4gICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgIHdpZHRoOiA0MCU7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICB9XHJcbiAgICAgIC50ZXh0LWJveC01IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6ICMxQzIxMkE7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtYm94LTUgaDIge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogODVweDtcclxuICAgICAgfVxyXG4gICAgICAuZWR1Y2F0aW9uLXJvdyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcclxuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgfVxyXG4gICAgICAuZWR1Y2F0aW9uLWltYWdlLWNvbnRhaW5lciB7XHJcbiAgICAgICAgd2lkdGg6IDIwJTtcclxuICAgICAgICBoZWlnaHQ6IDIwJTtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XHJcbiAgICAgIH1cclxuICAgICAgLmVkdWNhdGlvbi10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICB3aWR0aDogNzUlO1xyXG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgfVxyXG4gICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGgzIHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGg0IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGg1IHtcclxuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgfVxyXG4gICAgICAucGljLWJveC02IHtcclxuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1jb250YWN0LW1lLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyNSU7XHJcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgd2lkdGg6IDQwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuICAgICAgLnRleHQtYm94LTYge1xyXG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXHJcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgIHdpZHRoIDYwJTtcclxuICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgIH1cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAgICAgLmNvdmVyIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB0cmFuc3BhcmVudCB1cmwoL3N0YXRpYy9wcm8tYWJvdXQtbWUuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyOCU7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgICAgICAgaGVpZ2h0OiA4MHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaGVsbG8ge1xyXG4gICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgICAgdG9wOiA1MDBweDtcclxuICAgICAgICAgIGxlZnQ6IDEwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xyXG4gICAgICAgICAgb3BhY2l0eTogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmhlbGxvIGgxIHtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjA7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcclxuICAgICAgICAgIG1hcmdpbjogMCAwIDBweCAwO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc3VidGl0bGUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSG9tZXBhZ2VCYXVrYXN0ZW4tQm9sZFwiO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGEuYnV0dG9uIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGFyc3NlaXQnO1xyXG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGNUFEMjU7XHJcbiAgICAgICAgICBtYXJnaW4tbGVmdDogNXB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgICAgICAgIHBhZGRpbmc6IDhweCAzMHB4O1xyXG4gICAgICAgICAgdG9wOiAyNXB4O1xyXG4gICAgICAgICAgY29sb3I6ICNGRkY7XHJcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWxlZnQge1xyXG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1yaWdodCB7XHJcbiAgICAgICAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgICAgICAgIHBhZGRpbmc6IDVweCA0MHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBoMiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDUwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI0YyRjJGMjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5ibGluay1oMiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI0YyRjJGMjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5tYWppbi1oMiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI0YyRjJGMjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAwLjM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC53b3JrLWgyIHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgIGNvbG9yOiAjRjJGMkYyO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC4zO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuY29udGFjdC1oMiB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XHJcbiAgICAgICAgICBmb250LXNpemU6IDQwcHg7XHJcbiAgICAgICAgICBjb2xvcjogI0YyRjJGMjtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuMztcclxuICAgICAgICB9XHJcbiAgICAgICAgaDMge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICMzNDNENEY7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmNvbnRhY3QtaDUge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xyXG4gICAgICAgICAgY29sb3I6ICMzNDNENEY7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgaDQge1xyXG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDYXJyZU5vaXInO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICNhNmIxYjk7XHJcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMDtcclxuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcclxuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGg1IHtcclxuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnO1xyXG4gICAgICAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgICAgICAgY29sb3I6ICNhNmIxYjk7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi4yO1xyXG4gICAgICAgICAgcGFkZGluZzogMHB4IDA7XHJcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5mZWF0dXJlcy1oNSB7XHJcbiAgICAgICAgICBmb250LWZhbWlseTogJ1ZhcnRhJztcclxuICAgICAgICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgICAgICAgIGNvbG9yOiAjYTZiMWI5O1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDIuMjtcclxuICAgICAgICAgIHBhZGRpbmc6IDBweCAwO1xyXG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgICAgICAgIC5oZWxsbyB7XHJcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcclxuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgaDEge1xyXG4gICAgICAgICAgICBmb250LXNpemU6IDI4cHg7XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWN0aW9uLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBoZWlnaHQ6IDE1MHZoO1xyXG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBtYXJnaW46IDAgMDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNlY3Rpb24tY29udGFpbmVyLXNpY2tmaXRzIHtcclxuICAgICAgICAgIGhlaWdodDogMTUwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuc2VjdGlvbi1jb250YWluZXItbGlua2VkdXAge1xyXG4gICAgICAgICAgaGVpZ2h0OiAxNTB2aDtcclxuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgbWFyZ2luOiAwIDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5zZWN0aW9uLWNvbnRhaW5lci1jb250YWN0IHtcclxuICAgICAgICAgIGhlaWdodDogMTQwdmg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1ib3gge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGljLWJveCB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLWNvdmVyLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjglO1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1ib3gtMiB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI2YyZWZlZjsgXHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoIDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWJveC0yIGgyIHtcclxuICAgICAgICAgIGNvbG9yOiAjRkZGO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGljLWJveC0yIHtcclxuICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLXdvcmsuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyMCU7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpYy1ib3gtMi1tb2JpbGUge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby13b3JrLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjAlO1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucHJvamVjdHMtcm93LTEge1xyXG4gICAgICAgICAgZGlzcGxheToganVzdGlmeTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnByb2plY3QtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiA1MCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5wcm9qZWN0LWltYWdlIHtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZzogN3B4O1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRleHQtYm94LTMge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6ICMxQzIxMkE7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAucGljLWJveC0zIHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tc2tpbGxzLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMzUlO1xyXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgICAgICAgd2lkdGggMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpYy1ib3gtNCB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby10ZWNoLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjUlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpYy1ib3gtNC1tb2JpbGUge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby10ZWNoLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjUlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraWxscy1yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraWxscy1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICBoZWlnaHQ6IDYwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIge1xyXG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcclxuICAgICAgICAgIHdpZHRoOiA3NSU7XHJcbiAgICAgICAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIgaDMge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnNraWxscy10ZXh0LWNvbnRhaW5lciBoNSB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1ib3gtNCB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXHJcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICAgICAgICB3aWR0aCAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVjaC1yb3dzLWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGVjaC1yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlY2gtaW1hZ2UtY29udGFpbmVyIHtcclxuICAgICAgICAgIHdpZHRoOiAzMCU7XHJcbiAgICAgICAgICBwYWRkaW5nOiA1cHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZWNoLWltYWdlLWNvbnRhaW5lciBzcGFuIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNjBweDtcclxuICAgICAgICAgIC1vLXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgICAgLW1zLXRyYW5zaXRpb246LjNzO1xyXG4gICAgICAgICAgLW1vei10cmFuc2l0aW9uOi4zcztcclxuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjouM3M7XHJcbiAgICAgICAgICB0cmFuc2l0aW9uOi4zcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLnRlY2gtaW1hZ2UtY29udGFpbmVyIHNwYW46aG92ZXIge1xyXG4gICAgICAgICAgY29sb3I6ICNGNUFEMjU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5waWMtYm94LTUge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1lZHVjYXRpb24uSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xyXG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IGJvdHRvbSByaWdodCAyMCU7XHJcbiAgICAgICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgaGVpZ2h0OiA5MHZoO1xyXG4gICAgICAgIH1cclxuICAgICAgICAudGV4dC1ib3gtNSB7XHJcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgICAgICAgYmFja2dyb3VuZDogIzFDMjEyQTtcclxuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWJveC01IGgyIHtcclxuICAgICAgICAgIGZvbnQtc2l6ZTogNDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVkdWNhdGlvbi1yb3cge1xyXG4gICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDQwcHg7XHJcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVkdWNhdGlvbi1pbWFnZS1jb250YWluZXIge1xyXG4gICAgICAgICAgaGVpZ2h0OiA3MHB4O1xyXG4gICAgICAgICAgd2lkdGg6IDgwcHg7XHJcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVkdWNhdGlvbi10ZXh0LWNvbnRhaW5lciB7XHJcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xyXG4gICAgICAgICAgd2lkdGg6IDc1JTtcclxuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmVkdWNhdGlvbi10ZXh0LWNvbnRhaW5lciBoMyB7XHJcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGg0IHtcclxuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5lZHVjYXRpb24tdGV4dC1jb250YWluZXIgaDUge1xyXG4gICAgICAgICAgcGFkZGluZy10b3A6IDBweDtcclxuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpYy1ib3gtNiB7XHJcbiAgICAgICAgICBkaXNwbGF5OiBub25lO1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1jb250YWN0LW1lLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjUlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLnBpYy1ib3gtNi1tb2JpbGUge1xyXG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1jb250YWN0LW1lLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcclxuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjUlO1xyXG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC50ZXh0LWJveC02IHtcclxuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGOyBcclxuICAgICAgICAgIGZsb2F0OiByaWdodDtcclxuICAgICAgICAgIHdpZHRoIDEwMCU7XHJcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfSAgXHJcbiAgICAgIH1cclxuICAgIGB9PC9zdHlsZT5cclxuICAgIDwvTGF5b3V0PlxyXG4gICk7XHJcbiAgXHJcbiAgZXhwb3J0IGRlZmF1bHQgUHJvamVjdHM7Il19 */\n/*@ sourceURL=C:\\\\Users\\\\rhuwe\\\\Desktop\\\\Coding Projects\\\\rhuwellsamano\\\\pages\\\\projects.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ 4:
/*!*********************************!*\
  !*** multi ./pages/projects.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\rhuwe\Desktop\Coding Projects\rhuwellsamano\pages\projects.js */"./pages/projects.js");


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
//# sourceMappingURL=projects.js.map