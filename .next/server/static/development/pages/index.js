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
var _jsxFileName = "/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Footer.js";


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
}, ".footer-wrapper.jsx-24943890{text-align:center;margin-top:10px;padding:10px 30px;}.copyright.jsx-24943890{margin-bottom:10px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaHV3ZWxsc2FtYW5vL1BFUlNPTkFMX1BST0pFQ1RTL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFuby9jb21wb25lbnRzL0Zvb3Rlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHa0IsQUFHNkIsQUFLQyxrQkFKSCxDQUtsQixlQUpvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3JodXdlbGxzYW1hbm8vUEVSU09OQUxfUFJPSkVDVFMvcmh1d2VsbHNhbWFuby9yaHV3ZWxsc2FtYW5vL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgRm9vdGVyID0gKCkgPT4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZm9vdGVyLXdyYXBwZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29weXJpZ2h0XCI+wqkge25ldyBEYXRlKCkuZ2V0RnVsbFllYXIoKX0gUmh1d2VsbCBTYW1hbm88L2Rpdj5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmZvb3Rlci13cmFwcGVyIHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICBwYWRkaW5nOiAxMHB4IDMwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvcHlyaWdodCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xuICBcbiAgZXhwb3J0IGRlZmF1bHQgRm9vdGVyOyJdfQ== */\n/*@ sourceURL=/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Footer.js */"));

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
var _jsxFileName = "/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Header.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Header = () => __jsx("div", {
  className: "jsx-4097544197" + " " + "header-wrapper",
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
  id: "4097544197",
  __self: undefined
}, ".header-wrapper.jsx-4097544197{width:100%;background:#232A34;opacity:95%;padding:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;}@media (max-width:600px){.header-wrapper.jsx-4097544197{display:block;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaHV3ZWxsc2FtYW5vL1BFUlNPTkFMX1BST0pFQ1RTL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFuby9jb21wb25lbnRzL0hlYWRlci5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPZ0IsQUFHb0IsQUFVSyxXQVRHLEdBVUMsZ0JBVFIsRUFVWixVQVRZLFlBQ0MsMEVBQ2lCLG1IQUNYLDZGQUNyQiIsImZpbGUiOiIvVXNlcnMvcmh1d2VsbHNhbWFuby9QRVJTT05BTF9QUk9KRUNUUy9yaHV3ZWxsc2FtYW5vL3JodXdlbGxzYW1hbm8vY29tcG9uZW50cy9IZWFkZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgTG9nbyBmcm9tICcuLi9jb21wb25lbnRzL0xvZ28nO1xuaW1wb3J0IE5hdiBmcm9tICcuLi9jb21wb25lbnRzL05hdic7XG5cbmNvbnN0IEhlYWRlciA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJoZWFkZXItd3JhcHBlclwiPlxuICAgIDxMb2dvIC8+XG4gICAgPE5hdiAvPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5oZWFkZXItd3JhcHBlciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjMyQTM0O1xuICAgICAgICBvcGFjaXR5OiA5NSU7XG4gICAgICAgIHBhZGRpbmc6IDBweDtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgfVxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XG4gICAgICAgIC5oZWFkZXItd3JhcHBlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IEhlYWRlcjsiXX0= */\n/*@ sourceURL=/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Header.js */"));

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
var _jsxFileName = "/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Layout.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;




const Layout = props => __jsx("div", {
  className: "jsx-605926425" + " " + "site-wrapper",
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
  className: "jsx-605926425",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, props.title ? `${props.title} | ` : '', "Rhuwell Samano"), props.description ? __jsx("meta", {
  name: "description",
  content: props.description,
  className: "jsx-605926425",
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
  className: "jsx-605926425" + " " + "content-wrapper",
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
  id: "605926425",
  __self: undefined
}, "@font-face{font-family:'devicons';src:url(\"../fonts/devicons.eot?xqxft6\");src:url(\"../fonts/devicons.eot?#iefixxqxft6\") format(\"embedded-opentype\"),url(\"../fonts/devicons.woff?xqxft6\") format(\"woff\"),url(\"../fonts/devicons.ttf?xqxft6\") format(\"truetype\"),url(\"../fonts/devicons.svg?xqxft6#devicons\") format(\"svg\");font-weight:normal;font-style:normal;}@font-face{font-family:'Varta';src:url('/fonts/Varta.ttf');font-style:normal;font-display:swap;}@font-face{font-family:'HomepageBaukasten-Bold';src:url('/fonts/HomepageBaukasten-Bold.ttf');font-style:semibold;font-display:swap;}@font-face{font-family:'Larsseit';src:url('/fonts/Larsseit.ttf');font-style:normal;font-display:swap;}@font-face{font-family:'Galano';src:url('/fonts/Galano.otf');font-style:normal;font-display:swap;}@font-face{font-family:'Cocogoose';src:url('/fonts/Cocogoose.ttf');font-style:normal;font-display:swap;}@font-face{font-family:'CarreNoir';src:url('/fonts/CarreNoir.otf');font-display:swap;}*,*::before,*::after{box-sizing:border-box;}html{width:100%;height:100%;margin:0px;padding:0px;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;overflow-x:hidden;}body{margin:0;font-size:18px;line-height:1.8;background:#f1f1f1;color:#454545;font-family:'Varta';text-rendering:optimizeLegibility;}a{color:#FF7519;-webkit-text-decoration:none;text-decoration:none;}a:hover{color:#FF6600;}p{margin:0 0 10px;}img{max-width:100%;}ul{margin-left:0px;padding-left:5px;}li{text-align:left;}.content-wrapper{min-height:600px;text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaHV3ZWxsc2FtYW5vL1BFUlNPTkFMX1BST0pFQ1RTL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFuby9jb21wb25lbnRzL0xheW91dC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvQnVCLEFBSytCLEFBR0MsQUFPSCxBQU1pQixBQU1kLEFBTUYsQUFNRyxBQU1BLEFBS2IsQUFRRixBQVlLLEFBS0EsQUFHRSxBQUdELEFBR0MsQUFJQSxBQU1DLFNBbkNGLEVBUkgsR0FvQlMsQUFLdkIsQ0FNQSxDQUhBLEFBTW1CLEFBSW5CLENBTW9CLEdBL0VVLENBa0JDLENBNUIvQixDQUcwQyxBQW1CVCxBQXdCcEIsQ0FacUIsQUFNQSxBQWNoQixTQTBCbEIsQ0FqQ2MsQ0EyQ2QsRUExRStDLEdBdUMxQixNQVBJLEVBckNMLEVBa0JBLElBTkEsRUFZQSxBQU1BLEdBZUosSUFwRHFPLENBOERyUCxFQXREb0IsRUFrQkEsSUFOQSxDQWlDRSxDQXJCRixBQU1wQixRQXpCc0IsRUFKdEIsRUFrQkEsSUFOQSxFQVlBLENBcUJvQyxTQXhDaEIsa0JBQ3BCLE9Bd0NBLDRCQVZvQixrQkFDcEIsa0lBN0NxQixtQkFDRCxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL3JodXdlbGxzYW1hbm8vUEVSU09OQUxfUFJPSkVDVFMvcmh1d2VsbHNhbWFuby9yaHV3ZWxsc2FtYW5vL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSAnbmV4dC9oZWFkJztcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9IZWFkZXInO1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9jb21wb25lbnRzL0Zvb3Rlcic7XG5cbmNvbnN0IExheW91dCA9IHByb3BzID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzaXRlLXdyYXBwZXJcIj5cbiAgICAgICAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAge3Byb3BzLnRpdGxlID8gYCR7cHJvcHMudGl0bGV9IHwgYCA6ICcnfVxuICAgICAgICBSaHV3ZWxsIFNhbWFub1xuICAgICAgPC90aXRsZT5cbiAgICAgIHtwcm9wcy5kZXNjcmlwdGlvbiA/IDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e3Byb3BzLmRlc2NyaXB0aW9ufSAvPiA6IG51bGx9XG4gICAgPC9IZWFkPlxuXG4gICAgPEhlYWRlciAvPlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50LXdyYXBwZXJcIj57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG5cbiAgICA8Rm9vdGVyIC8+XG5cbiAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgKixcbiAgICAgICo6OmJlZm9yZSxcbiAgICAgICo6OmFmdGVyIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ2Rldmljb25zJztcbiAgICAgICAgc3JjOiB1cmwoXCIuLi9mb250cy9kZXZpY29ucy5lb3Q/eHF4ZnQ2XCIpO1xuICAgICAgICBzcmM6IHVybChcIi4uL2ZvbnRzL2Rldmljb25zLmVvdD8jaWVmaXh4cXhmdDZcIikgZm9ybWF0KFwiZW1iZWRkZWQtb3BlbnR5cGVcIiksIHVybChcIi4uL2ZvbnRzL2Rldmljb25zLndvZmY/eHF4ZnQ2XCIpIGZvcm1hdChcIndvZmZcIiksIHVybChcIi4uL2ZvbnRzL2Rldmljb25zLnR0Zj94cXhmdDZcIikgZm9ybWF0KFwidHJ1ZXR5cGVcIiksIHVybChcIi4uL2ZvbnRzL2Rldmljb25zLnN2Zz94cXhmdDYjZGV2aWNvbnNcIikgZm9ybWF0KFwic3ZnXCIpO1xuICAgICAgICBmb250LXdlaWdodDogbm9ybWFsO1xuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICB9ICAgICAgXG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdWYXJ0YSc7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvVmFydGEudHRmJyk7IFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0hvbWVwYWdlQmF1a2FzdGVuLUJvbGQnO1xuICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0hvbWVwYWdlQmF1a2FzdGVuLUJvbGQudHRmJyk7IFxuICAgICAgICBmb250LXN0eWxlOiBzZW1pYm9sZDtcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGFyc3NlaXQnO1xuICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0xhcnNzZWl0LnR0ZicpOyBcbiAgICAgICAgZm9udC1zdHlsZTogbm9ybWFsO1xuICAgICAgICBmb250LWRpc3BsYXk6IHN3YXA7XG4gICAgICB9XG4gICAgICBAZm9udC1mYWNlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xuICAgICAgICBzcmM6IHVybCgnL2ZvbnRzL0dhbGFuby5vdGYnKTsgXG4gICAgICAgIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgICAgfVxuICAgICAgQGZvbnQtZmFjZSB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ29jb2dvb3NlJztcbiAgICAgICAgc3JjOiB1cmwoJy9mb250cy9Db2NvZ29vc2UudHRmJyk7IFxuICAgICAgICBmb250LXN0eWxlOiBub3JtYWw7XG4gICAgICAgIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgICAgIH1cbiAgICAgIEBmb250LWZhY2Uge1xuICAgICAgICBmb250LWZhbWlseTogJ0NhcnJlTm9pcic7XG4gICAgICAgIHNyYzogdXJsKCcvZm9udHMvQ2FycmVOb2lyLm90ZicpOyBcbiAgICAgICAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICAgICAgfVxuICAgICAgaHRtbCB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIG1hcmdpbjogMHB4O1xuICAgICAgICBwYWRkaW5nOiAwcHg7XG4gICAgICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xuICAgICAgICBvdmVyZmxvdy14OiBoaWRkZW47IFxuICAgICAgfVxuICAgICAgYm9keSB7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS44O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xuICAgICAgICBjb2xvcjogIzQ1NDU0NTtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdWYXJ0YSc7XG4gICAgICAgIHRleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XG4gICAgICB9XG5cblxuXG4gICAgICBhIHtcbiAgICAgICAgY29sb3I6ICNGRjc1MTk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgYTpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjRkY2NjAwO1xuICAgICAgfVxuICAgICAgcCB7XG4gICAgICAgIG1hcmdpbjogMCAwIDEwcHg7XG4gICAgICB9XG4gICAgICBpbWcge1xuICAgICAgICBtYXgtd2lkdGg6IDEwMCU7XG4gICAgICB9XG4gICAgICB1bCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogNXB4O1xuICAgICAgfVxuICAgICAgbGkge1xuICAgICAgICB0ZXh0LWFsaWduOiBsZWZ0O1xuICAgICAgfVxuXG4gICAgICAvKiBMYXlvdXQgKi9cblxuICAgICAgLmNvbnRlbnQtd3JhcHBlciB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDYwMHB4O1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IExheW91dDsiXX0= */\n/*@ sourceURL=/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Layout.js */"));

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
var _jsxFileName = "/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Logo.js";


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
}, ".logo.jsx-2840098951 img.jsx-2840098951{display:block;width:220px;margin-left:20px;}@media (max-width:480px){.logo.jsx-2840098951{display:inline-block;}.logo.jsx-2840098951 img.jsx-2840098951{margin-left:0px;padding-top:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaHV3ZWxsc2FtYW5vL1BFUlNPTkFMX1BST0pFQ1RTL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFuby9jb21wb25lbnRzL0xvZ28uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBUWdCLEFBR3VCLEFBTVMsQUFHTCxjQVJOLEVBU08sS0FIbkIsS0FMaUIsT0FTakIsVUFSRiIsImZpbGUiOiIvVXNlcnMvcmh1d2VsbHNhbWFuby9QRVJTT05BTF9QUk9KRUNUUy9yaHV3ZWxsc2FtYW5vL3JodXdlbGxzYW1hbm8vY29tcG9uZW50cy9Mb2dvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IExpbmsgZnJvbSAnbmV4dC9saW5rJztcblxuY29uc3QgTG9nbyA9ICgpID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsb2dvXCI+XG4gICAgPExpbmsgaHJlZj1cIi9cIj5cbiAgICA8YT48aW1nIHNyYz1cIi9zdGF0aWMvcG9ydGZvbGlvLWxvZ28tMi5zdmdcIiAvPjwvYT5cbiAgICA8L0xpbms+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubG9nbyBpbWcge1xuICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgd2lkdGg6IDIyMHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIH1cbiAgICAgIEBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5sb2dvIGltZyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDBweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBMb2dvOyJdfQ== */\n/*@ sourceURL=/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Logo.js */"));

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
var _jsxFileName = "/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Nav.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;


const Nav = () => __jsx("ul", {
  className: "jsx-810856904" + " " + "nav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 4
  },
  __self: undefined
}, __jsx("li", {
  className: "jsx-810856904",
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
  className: "jsx-810856904" + " " + "icon-container",
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
  className: "jsx-810856904" + " " + "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, __jsx("path", {
  d: "M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041 c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629 c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939 z",
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), __jsx("path", {
  d: "M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816 c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245 c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136 c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998 L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125 c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z",
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}))), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 38
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 44
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
})), __jsx("a", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Home")))), __jsx("li", {
  className: "jsx-810856904",
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
  className: "jsx-810856904" + " " + "icon-container",
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
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 66
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 67
  },
  __self: undefined
}, __jsx("path", {
  d: "M177.958,200.608l130.467-51.227c6.322-2.478,11.451-8.374,11.451-13.163v-8.677V75.762 c0-6.788-5.507-12.298-12.298-12.298c0,0-5.242,0-11.697,0c-6.462,0-11.229-0.85-10.941-1.981 c0.174-0.676,0.265-1.384,0.265-2.102c0-5.672-5.513-10.263-12.298-10.263h-12.719c-6.791,0-12.297,4.591-12.297,10.263 c0,0.724,0.09,1.426,0.264,2.107c0.288,1.144-3.272,2-8.263,2.023c-3.303,0.012-6.461,0.024-9.025,0.03 c-1.976,0.006-4.017,0.012-5.999,0.012c-6.791,0.016-12.081-5.569-13.528-12.198c-6.863-31.36-40.058-29.73-40.058-29.73h-22.626 c-30.564,0-39.193,17.315-41.454,29.694c-1.225,6.683-6.059,12.25-12.844,12.25H89c-1.783,0-3.867-0.006-6.089-0.021 c-3.356-0.012-5.603-0.886-5.299-2.032c0.177-0.685,0.27-1.405,0.27-2.135c0-5.672-5.509-10.263-12.298-10.263H52.863 c-6.788,0-12.298,4.591-12.298,10.263c0,0.705,0.084,1.396,0.252,2.065c0.276,1.126-4.78,1.942-11.568,1.937 c-6.221-0.006-12.106-0.006-16.946-0.012C5.51,63.372,0,68.88,0,75.669v51.872c0,0,0,3.78,0,8.449 c0,4.666,5.17,10.337,11.553,12.661L154.96,200.89C161.34,203.214,171.642,203.094,177.958,200.608z M129.434,51.707 c2.669-5.191,8.02-10.115,18.732-10.115h10.698h1.084h10.697c10.713,0,16.057,4.924,18.729,10.115 c3.099,6.038-2.9,11.886-9.686,11.886h-19.75h-1.08h-19.732C132.331,63.593,126.329,57.745,129.434,51.707z",
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}), __jsx("path", {
  d: "M166.646,224.183c-1.075,0-2.144-0.187-3.165-0.559L11.56,168.285c-6.383-2.324-11.554,1.291-11.554,8.082v57.826v51.684 c0,6.791,5.504,12.297,12.298,12.297h51.041h13.364h154.164c6.786,0,17.811,0.049,24.596,0.061 c14.31,0.023,37.795,0.03,52.098,0.03c6.792,0.006,12.298-5.507,12.298-12.292v-51.779v-57.184c0-6.792-5.116-10.286-11.445-7.812 l-138.422,54.344C168.927,223.972,167.786,224.183,166.646,224.183z",
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}))), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 90
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 94
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 102
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
})), __jsx("a", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, "Projects")))), __jsx("li", {
  className: "jsx-810856904",
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
  className: "jsx-810856904" + " " + "icon-container",
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
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 124
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, __jsx("path", {
  d: "M39.287,41.955l-1.626-12.76c-0.556-4.375-4.278-7.61-8.688-7.61H16.985c-4.41,0-8.133,3.235-8.688,7.61L6.67,41.979 c-0.112,0.894,0.163,2.018,0.758,2.692c0.596,0.675,1.453,1.287,2.353,1.287h26.395c0.9,0,1.757-0.624,2.354-1.299 C39.125,43.982,39.4,42.85,39.287,41.955z",
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}), __jsx("circle", {
  cx: "22.978",
  cy: "9.33",
  r: "9.33",
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 132
  },
  __self: undefined
}))), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 151
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 155
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}), __jsx("g", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 163
  },
  __self: undefined
})), __jsx("a", {
  className: "jsx-810856904",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}, "About Me")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "810856904",
  __self: undefined
}, ".nav.jsx-810856904{font-family:'Varta';margin:0px 0 0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#232A34;}.icon-container.jsx-810856904{display:block;text-align:center;padding:15px 40px;line-height:1.2;border-left-style:solid;border-width:1px;border-left-color:#303947;}div.jsx-810856904:hover svg.jsx-810856904{fill:#f2ab37;}.nav.jsx-810856904 li.jsx-810856904 div.jsx-810856904:hover a.jsx-810856904{color:#f2ab37;}svg.jsx-810856904{display:inline-block;fill:#505765;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}svg.jsx-810856904:hover{fill:#f2ab37;}.nav.jsx-810856904 li.jsx-810856904 div.jsx-810856904 a.jsx-810856904{display:block;height:auto;font-size:16px;color:#505765;font-weight:300;text-align:center;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}@media (max-width:480px){.icon-container.jsx-810856904{display:block;text-align:center;padding:15px 40px;line-height:1.0;border-left-style:none;border-width:0px;border-left-color:#303947;line-height:1.0;}.nav.jsx-810856904{display:block;}.nav.jsx-810856904 li.jsx-810856904{display:inline-block;}.nav.jsx-810856904 li.jsx-810856904 a.jsx-810856904{font-size:18px;}.nav.jsx-810856904 li.jsx-810856904 div.jsx-810856904 a.jsx-810856904{display:block;height:auto;font-size:16px;color:#505765;font-weight:300;text-align:center;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaHV3ZWxsc2FtYW5vL1BFUlNPTkFMX1BST0pFQ1RTL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFuby9jb21wb25lbnRzL05hdi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF5S2dCLEFBRzZCLEFBT04sQUFTRCxBQUdDLEFBR08sQUFTUixBQUdDLEFBZUUsQUFVQSxBQUdPLEFBR04sQUFHRCxhQW5EbEIsQUFlQSxDQXhCb0IsQUFZcEIsQUFlYyxBQWVRLEFBVXBCLEFBU2MsQ0FIZCxLQWpFZSxDQXNCRixBQXdDYixLQTNCZSxBQWtDRSxNQTdEQyxBQTBDRSxFQTNCSCxDQXRCRCxNQW1DRixBQWtDRSxTQTdEQSxBQTBDRSxDQWpETCxDQXNCSyxHQWFGLEFBa0NFLFdBN0RNLEFBMENDLEtBM0JOLEFBYUQsQUFrQ0Usa0JBakNILEFBY0UsQUFvQkEsQ0E5REYsQ0FlSyxlQTRCTSxDQTFDRixBQTRCUixBQWtDRSxPQS9DTixXQXhCSyxDQXNDQSxBQWtDRSxNQXBCSCxDQTFDcEIsV0FUQSxFQXNDd0IsQUFrQ0UsRUFwQnhCLElBNUJGLGlCQWVnQixBQWtDRSxzQ0FqQ2xCLEFBa0NFIiwiZmlsZSI6Ii9Vc2Vycy9yaHV3ZWxsc2FtYW5vL1BFUlNPTkFMX1BST0pFQ1RTL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFuby9jb21wb25lbnRzL05hdi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5cbmNvbnN0IE5hdiA9ICgpID0+IChcbiAgPHVsIGNsYXNzTmFtZT1cIm5hdlwiPlxuICAgIDxsaT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj5cblxuICAgICAgICA8c3ZnIGNsYXNzTmFtZT1cImhvbWVcIiB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgeD1cIjBweFwiIHk9XCIwcHhcIlxuXHQgd2lkdGg9XCIzMnB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgNDYwLjI5OCA0NjAuMjk3XCIgXG5cdCA+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgICA8Zz5cbiAgICAgICAgICAgICAgPHBhdGggZD1cIk0yMzAuMTQ5LDEyMC45MzlMNjUuOTg2LDI1Ni4yNzRjMCwwLjE5MS0wLjA0OCwwLjQ3Mi0wLjE0NCwwLjg1NWMtMC4wOTQsMC4zOC0wLjE0NCwwLjY1Ni0wLjE0NCwwLjg1MnYxMzcuMDQxXG4gICAgICAgICAgICAgICAgYzAsNC45NDgsMS44MDksOS4yMzYsNS40MjYsMTIuODQ3YzMuNjE2LDMuNjEzLDcuODk4LDUuNDMxLDEyLjg0Nyw1LjQzMWgxMDkuNjNWMzAzLjY2NGg3My4wOTd2MTA5LjY0aDEwOS42MjlcbiAgICAgICAgICAgICAgICBjNC45NDgsMCw5LjIzNi0xLjgxNCwxMi44NDctNS40MzVjMy42MTctMy42MDcsNS40MzItNy44OTgsNS40MzItMTIuODQ3VjI1Ny45ODFjMC0wLjc2LTAuMTA0LTEuMzM0LTAuMjg4LTEuNzA3TDIzMC4xNDksMTIwLjkzOVxuICAgICAgICAgICAgICAgIHpcIi8+XG4gICAgICAgICAgICAgIDxwYXRoIGQ9XCJNNDU3LjEyMiwyMjUuNDM4TDM5NC42LDE3My40NzZWNTYuOTg5YzAtMi42NjMtMC44NTYtNC44NTMtMi41NzQtNi41NjdjLTEuNzA0LTEuNzEyLTMuODk0LTIuNTY4LTYuNTYzLTIuNTY4aC01NC44MTZcbiAgICAgICAgICAgICAgICBjLTIuNjY2LDAtNC44NTUsMC44NTYtNi41NywyLjU2OGMtMS43MTEsMS43MTQtMi41NjYsMy45MDUtMi41NjYsNi41Njd2NTUuNjczbC02OS42NjItNTguMjQ1XG4gICAgICAgICAgICAgICAgYy02LjA4NC00Ljk0OS0xMy4zMTgtNy40MjMtMjEuNjk0LTcuNDIzYy04LjM3NSwwLTE1LjYwOCwyLjQ3NC0yMS42OTgsNy40MjNMMy4xNzIsMjI1LjQzOGMtMS45MDMsMS41Mi0yLjk0NiwzLjU2Ni0zLjE0LDYuMTM2XG4gICAgICAgICAgICAgICAgYy0wLjE5MywyLjU2OCwwLjQ3Miw0LjgxMSwxLjk5Nyw2LjcxM2wxNy43MDEsMjEuMTI4YzEuNTI1LDEuNzEyLDMuNTIxLDIuNzU5LDUuOTk2LDMuMTQyYzIuMjg1LDAuMTkyLDQuNTctMC40NzYsNi44NTUtMS45OThcbiAgICAgICAgICAgICAgICBMMjMwLjE0OSw5NS44MTdsMTk3LjU3LDE2NC43NDFjMS41MjYsMS4zMjgsMy41MjEsMS45OTEsNS45OTYsMS45OTFoMC44NThjMi40NzEtMC4zNzYsNC40NjMtMS40Myw1Ljk5Ni0zLjEzOGwxNy43MDMtMjEuMTI1XG4gICAgICAgICAgICAgICAgYzEuNTIyLTEuOTA2LDIuMTg5LTQuMTQ1LDEuOTkxLTYuNzE2QzQ2MC4wNjgsMjI5LjAwNyw0NTkuMDIxLDIyNi45NjEsNDU3LjEyMiwyMjUuNDM4elwiLz5cbiAgICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPGc+XG4gICAgICAgICAgPC9nPlxuICAgICAgICAgIDxnPlxuICAgICAgICAgIDwvZz5cbiAgICAgICAgICA8Zz5cbiAgICAgICAgICA8L2c+XG4gICAgICAgICAgPC9zdmc+XG4gICAgICAgIDxhPkhvbWU8L2E+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9MaW5rPlxuICAgIDwvbGk+XG4gICAgPGxpPlxuICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJpY29uLWNvbnRhaW5lclwiPlxuICAgICAgPHN2ZyB2ZXJzaW9uPVwiMS4xXCIgaWQ9XCJDYXBhXzFcIiB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCIgIHg9XCIwcHhcIiB5PVwiMHB4XCIgd2lkdGg9XCIzMHB4XCIgaGVpZ2h0PVwiMzJweFwiIHZpZXdCb3g9XCIwIDAgMzE5Ljg3NiAzMTkuODc1XCIgXG5cdCA+XG48Zz5cblx0PGc+XG5cdFx0PHBhdGggZD1cIk0xNzcuOTU4LDIwMC42MDhsMTMwLjQ2Ny01MS4yMjdjNi4zMjItMi40NzgsMTEuNDUxLTguMzc0LDExLjQ1MS0xMy4xNjN2LTguNjc3Vjc1Ljc2MlxuXHRcdFx0YzAtNi43ODgtNS41MDctMTIuMjk4LTEyLjI5OC0xMi4yOThjMCwwLTUuMjQyLDAtMTEuNjk3LDBjLTYuNDYyLDAtMTEuMjI5LTAuODUtMTAuOTQxLTEuOTgxXG5cdFx0XHRjMC4xNzQtMC42NzYsMC4yNjUtMS4zODQsMC4yNjUtMi4xMDJjMC01LjY3Mi01LjUxMy0xMC4yNjMtMTIuMjk4LTEwLjI2M2gtMTIuNzE5Yy02Ljc5MSwwLTEyLjI5Nyw0LjU5MS0xMi4yOTcsMTAuMjYzXG5cdFx0XHRjMCwwLjcyNCwwLjA5LDEuNDI2LDAuMjY0LDIuMTA3YzAuMjg4LDEuMTQ0LTMuMjcyLDItOC4yNjMsMi4wMjNjLTMuMzAzLDAuMDEyLTYuNDYxLDAuMDI0LTkuMDI1LDAuMDNcblx0XHRcdGMtMS45NzYsMC4wMDYtNC4wMTcsMC4wMTItNS45OTksMC4wMTJjLTYuNzkxLDAuMDE2LTEyLjA4MS01LjU2OS0xMy41MjgtMTIuMTk4Yy02Ljg2My0zMS4zNi00MC4wNTgtMjkuNzMtNDAuMDU4LTI5LjczaC0yMi42MjZcblx0XHRcdGMtMzAuNTY0LDAtMzkuMTkzLDE3LjMxNS00MS40NTQsMjkuNjk0Yy0xLjIyNSw2LjY4My02LjA1OSwxMi4yNS0xMi44NDQsMTIuMjVIODljLTEuNzgzLDAtMy44NjctMC4wMDYtNi4wODktMC4wMjFcblx0XHRcdGMtMy4zNTYtMC4wMTItNS42MDMtMC44ODYtNS4yOTktMi4wMzJjMC4xNzctMC42ODUsMC4yNy0xLjQwNSwwLjI3LTIuMTM1YzAtNS42NzItNS41MDktMTAuMjYzLTEyLjI5OC0xMC4yNjNINTIuODYzXG5cdFx0XHRjLTYuNzg4LDAtMTIuMjk4LDQuNTkxLTEyLjI5OCwxMC4yNjNjMCwwLjcwNSwwLjA4NCwxLjM5NiwwLjI1MiwyLjA2NWMwLjI3NiwxLjEyNi00Ljc4LDEuOTQyLTExLjU2OCwxLjkzN1xuXHRcdFx0Yy02LjIyMS0wLjAwNi0xMi4xMDYtMC4wMDYtMTYuOTQ2LTAuMDEyQzUuNTEsNjMuMzcyLDAsNjguODgsMCw3NS42Njl2NTEuODcyYzAsMCwwLDMuNzgsMCw4LjQ0OVxuXHRcdFx0YzAsNC42NjYsNS4xNywxMC4zMzcsMTEuNTUzLDEyLjY2MUwxNTQuOTYsMjAwLjg5QzE2MS4zNCwyMDMuMjE0LDE3MS42NDIsMjAzLjA5NCwxNzcuOTU4LDIwMC42MDh6IE0xMjkuNDM0LDUxLjcwN1xuXHRcdFx0YzIuNjY5LTUuMTkxLDguMDItMTAuMTE1LDE4LjczMi0xMC4xMTVoMTAuNjk4aDEuMDg0aDEwLjY5N2MxMC43MTMsMCwxNi4wNTcsNC45MjQsMTguNzI5LDEwLjExNVxuXHRcdFx0YzMuMDk5LDYuMDM4LTIuOSwxMS44ODYtOS42ODYsMTEuODg2aC0xOS43NWgtMS4wOGgtMTkuNzMyQzEzMi4zMzEsNjMuNTkzLDEyNi4zMjksNTcuNzQ1LDEyOS40MzQsNTEuNzA3elwiLz5cblx0XHQ8cGF0aCBkPVwiTTE2Ni42NDYsMjI0LjE4M2MtMS4wNzUsMC0yLjE0NC0wLjE4Ny0zLjE2NS0wLjU1OUwxMS41NiwxNjguMjg1Yy02LjM4My0yLjMyNC0xMS41NTQsMS4yOTEtMTEuNTU0LDguMDgydjU3LjgyNnY1MS42ODRcblx0XHRcdGMwLDYuNzkxLDUuNTA0LDEyLjI5NywxMi4yOTgsMTIuMjk3aDUxLjA0MWgxMy4zNjRoMTU0LjE2NGM2Ljc4NiwwLDE3LjgxMSwwLjA0OSwyNC41OTYsMC4wNjFcblx0XHRcdGMxNC4zMSwwLjAyMywzNy43OTUsMC4wMyw1Mi4wOTgsMC4wM2M2Ljc5MiwwLjAwNiwxMi4yOTgtNS41MDcsMTIuMjk4LTEyLjI5MnYtNTEuNzc5di01Ny4xODRjMC02Ljc5Mi01LjExNi0xMC4yODYtMTEuNDQ1LTcuODEyXG5cdFx0XHRsLTEzOC40MjIsNTQuMzQ0QzE2OC45MjcsMjIzLjk3MiwxNjcuNzg2LDIyNC4xODMsMTY2LjY0NiwyMjQuMTgzelwiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPC9zdmc+XG4gICAgICAgIDxhPlByb2plY3RzPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICAgIDxsaT5cbiAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaWNvbi1jb250YWluZXJcIj5cbiAgICAgIDxzdmcgdmVyc2lvbj1cIjEuMVwiIGlkPVwiQ2FwYV8xXCIgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiICB4PVwiMHB4XCIgeT1cIjBweFwiXG5cdCB3aWR0aD1cIjMwcHhcIiBoZWlnaHQ9XCIzMnB4XCIgdmlld0JveD1cIjAgMCA0NS45NTggNDUuOTU4XCIgXG5cdCA+XG48Zz5cblx0PGc+XG5cdFx0PHBhdGggZD1cIk0zOS4yODcsNDEuOTU1bC0xLjYyNi0xMi43NmMtMC41NTYtNC4zNzUtNC4yNzgtNy42MS04LjY4OC03LjYxSDE2Ljk4NWMtNC40MSwwLTguMTMzLDMuMjM1LTguNjg4LDcuNjFMNi42Nyw0MS45Nzlcblx0XHRcdGMtMC4xMTIsMC44OTQsMC4xNjMsMi4wMTgsMC43NTgsMi42OTJjMC41OTYsMC42NzUsMS40NTMsMS4yODcsMi4zNTMsMS4yODdoMjYuMzk1YzAuOSwwLDEuNzU3LTAuNjI0LDIuMzU0LTEuMjk5XG5cdFx0XHRDMzkuMTI1LDQzLjk4MiwzOS40LDQyLjg1LDM5LjI4Nyw0MS45NTV6XCIvPlxuXHRcdDxjaXJjbGUgY3g9XCIyMi45NzhcIiBjeT1cIjkuMzNcIiByPVwiOS4zM1wiLz5cblx0PC9nPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPGc+XG48L2c+XG48Zz5cbjwvZz5cbjxnPlxuPC9nPlxuPC9zdmc+XG4gICAgICAgIDxhPkFib3V0IE1lPC9hPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvTGluaz5cbiAgICA8L2xpPlxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5uYXYge1xuICAgICAgICBmb250LWZhbWlseTogJ1ZhcnRhJztcbiAgICAgICAgbWFyZ2luOiAwcHggMCAwO1xuICAgICAgICBsaXN0LXN0eWxlOiBub25lO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMjMyQTM0O1xuICAgICAgfVxuICAgICAgLmljb24tY29udGFpbmVyIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTVweCA0MHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICBib3JkZXItbGVmdC1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgICAgICBib3JkZXItbGVmdC1jb2xvcjogIzMwMzk0NztcbiAgICAgIH1cbiAgICAgIGRpdjpob3ZlciBzdmcge1xuICAgICAgICBmaWxsOiAjZjJhYjM3O1xuICAgICAgfVxuICAgICAgLm5hdiBsaSBkaXY6aG92ZXIgYSB7XG4gICAgICAgIGNvbG9yOiAjZjJhYjM3O1xuICAgICAgfVxuICAgICAgc3ZnIHtcbiAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICBmaWxsOiAjNTA1NzY1O1xuICAgICAgICAtby10cmFuc2l0aW9uOi4zcztcbiAgICAgICAgLW1zLXRyYW5zaXRpb246LjNzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246LjNzO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246LjNzO1xuICAgICAgICB0cmFuc2l0aW9uOi4zcztcbiAgICAgIH1cbiAgICAgIHN2Zzpob3ZlciB7XG4gICAgICAgIGZpbGw6ICNmMmFiMzc7XG4gICAgICB9XG4gICAgICAubmF2IGxpIGRpdiBhIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBjb2xvcjogIzUwNTc2NTtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAtby10cmFuc2l0aW9uOi4zcztcbiAgICAgICAgLW1zLXRyYW5zaXRpb246LjNzO1xuICAgICAgICAtbW96LXRyYW5zaXRpb246LjNzO1xuICAgICAgICAtd2Via2l0LXRyYW5zaXRpb246LjNzO1xuICAgICAgICB0cmFuc2l0aW9uOi4zcztcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIC5pY29uLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICAgIHBhZGRpbmc6IDE1cHggNDBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4wO1xuICAgICAgICAgIGJvcmRlci1sZWZ0LXN0eWxlOiBub25lO1xuICAgICAgICAgIGJvcmRlci13aWR0aDogMHB4O1xuICAgICAgICAgIGJvcmRlci1sZWZ0LWNvbG9yOiAjMzAzOTQ3O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjA7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdiB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIH1cbiAgICAgICAgLm5hdiBsaSB7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgICAgICB9XG4gICAgICAgIC5uYXYgbGkgYSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICB9XG4gICAgICAgIC5uYXYgbGkgZGl2IGEge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGhlaWdodDogYXV0bztcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgY29sb3I6ICM1MDU3NjU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDMwMDtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgICAgLW8tdHJhbnNpdGlvbjouM3M7XG4gICAgICAgICAgLW1zLXRyYW5zaXRpb246LjNzO1xuICAgICAgICAgIC1tb3otdHJhbnNpdGlvbjouM3M7XG4gICAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOi4zcztcbiAgICAgICAgICB0cmFuc2l0aW9uOi4zcztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC91bD5cbik7XG5cbmV4cG9ydCBkZWZhdWx0IE5hdjsiXX0= */\n/*@ sourceURL=/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/components/Nav.js */"));

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
var _jsxFileName = "/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/pages/index.js";


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Homepage = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__["default"], {
  title: "Homepage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "cover",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "hello",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("h1", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "BRILLIANTLY DESIGNED AND BUILT."), __jsx("div", {
  className: "jsx-469814692" + " " + "subtitle",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "RHUWELL SAMANO \u2022 FULL STACK SOFTWARE ENGINEER"), __jsx("a", {
  href: "#jump-to-top",
  className: "jsx-469814692" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "LEARN MORE"))), __jsx("div", {
  className: "jsx-469814692" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, __jsx("div", {
  id: "jump-to-top",
  className: "jsx-469814692" + " " + "text-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, "About."), __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "CONNECTED THROUGH CREATION"), __jsx("h4", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "\"What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.\" -- Pericles"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "My name is Rhuwell Samano and I'm a Full Stack Software Engineer. I specialize in React and mainly code in Javascript. I have a particularly rare combination of skills that allow me to have valuable insight into many, if not all, types of digital projects. "), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 22
  },
  __self: undefined
}, "By using Software Engineering, Digital Marketing and Web & App Design, I'm able to understand all of the moving parts of a project and connect them together into a beautiful handcrafted system that fuels and grows powerful brands. "), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, "I'm passionate about creating world-class experiences for various communities using websites, applications, and digital media. The most important person I care about and create for is the end-user. I thoroughly enjoy working with others towards achieving that goal, no matter the project."), __jsx("div", {
  className: "jsx-469814692" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-469814692" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-469814692" + " " + "pic-box",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "pic-box-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 41
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-469814692" + " " + "text-box-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-469814692" + " " + "work-h2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 47
  },
  __self: undefined
}, "Work."), __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 48
  },
  __self: undefined
}, "RECENT PROJECTS"), __jsx("div", {
  className: "jsx-469814692" + " " + "projects-row-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 49
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "projects-row-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 50
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "project-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/blink-health-mockup.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "project-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/sick-fits-mockup.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}))), __jsx("div", {
  className: "jsx-469814692" + " " + "projects-row-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "project-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 64
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/majin-sushi-mockup.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 65
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "project-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/linkedup-mockup.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
})))), __jsx("div", {
  className: "jsx-469814692" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-469814692" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, "View My Projects")))))), __jsx("div", {
  className: "jsx-469814692" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 84
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "text-box-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, "Skills."), __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, "THE PERFECT TRIFECTA"), __jsx("div", {
  className: "jsx-469814692" + " " + "skills-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 91
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "skills-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 92
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/software-engineer.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 93
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "skills-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, "SOFTWARE ENGINEERING"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, "From the front-end to the back-end, I'm able to dive into all sorts of projects and work with what's there - or start from scratch."))), __jsx("div", {
  className: "jsx-469814692" + " " + "skills-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 103
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "skills-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/digital-marketing.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "skills-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 109
  },
  __self: undefined
}, "DIGITAL MARKETING"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 110
  },
  __self: undefined
}, "By using modern digital tools, ancient human psychology, and classic storytelling - I can grow leads and increase the bottom-line."))), __jsx("div", {
  className: "jsx-469814692" + " " + "skills-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "skills-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/designer.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "skills-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, "WEB & APP DESIGN"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "From a sketch on a napkin or a whiteboard, I'm able to design and craft ideas into mock-ups using best practices in the industry."))), __jsx("div", {
  className: "jsx-469814692" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-469814692" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-469814692" + " " + "pic-box-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 133
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "pic-box-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-469814692" + " " + "text-box-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 144
  },
  __self: undefined
}, "Tech."), __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 145
  },
  __self: undefined
}, "TOOLS OF THE TRADE"), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-rows-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "tech-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-react",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 149
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-python",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-django",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-ruby_on_rails",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}))), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-javascript_badge",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-nodejs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-html5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-css3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 179
  },
  __self: undefined
}))), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-npm",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 188
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-swift",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 189
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-photoshop",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "tech-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196
  },
  __self: undefined
}, __jsx("span", {
  className: "jsx-469814692" + " " + "devicons devicons-illustrator",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197
  },
  __self: undefined
})))), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202
  },
  __self: undefined
}, "GitHub Contributions - Updated January 21st, 2020"), __jsx("img", {
  src: "/static/github-calendar.png",
  alt: "",
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-469814692" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 205
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-469814692" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 207
  },
  __self: undefined
}, "View My Projects")))))), __jsx("div", {
  className: "jsx-469814692" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "text-box-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 215
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "text-left",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 216
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}, "Education."), __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218
  },
  __self: undefined
}, "KNOWLEDGE IS KEY"), __jsx("div", {
  className: "jsx-469814692" + " " + "education-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "education-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 221
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/flatironschool.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 222
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "education-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 226
  },
  __self: undefined
}, "FLATIRON SCHOOL"), __jsx("h4", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 227
  },
  __self: undefined
}, "Known as the \"Ivy League of coding bootcamps\""), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
}, "Full Stack Software Engineering | React, Javascript, Ruby on Rails"))), __jsx("div", {
  className: "jsx-469814692" + " " + "education-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 232
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "education-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 233
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/teamtreehouse.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 234
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "education-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 237
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238
  },
  __self: undefined
}, "TEAMTREEHOUSE"), __jsx("h4", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239
  },
  __self: undefined
}, "A top-tier online school for learning code"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240
  },
  __self: undefined
}, "Full Stack Javascript Development & Full Stack Web Development"))), __jsx("div", {
  className: "jsx-469814692" + " " + "education-row",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 244
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "education-image-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 245
  },
  __self: undefined
}, __jsx("img", {
  src: "/static/csi.png",
  alt: "",
  className: "jsx-469814692" + " " + "project-image",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 246
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "education-text-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249
  },
  __self: undefined
}, __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250
  },
  __self: undefined
}, "COLLEGE OF STATEN ISLAND"), __jsx("h4", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 251
  },
  __self: undefined
}, "The single, largest campus in all of New York City"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 252
  },
  __self: undefined
}, "BS: Business Marketing (2012-2016)"))), __jsx("div", {
  className: "jsx-469814692" + " " + "",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 256
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 257
  },
  __self: undefined
}, __jsx("a", {
  className: "jsx-469814692" + " " + "button",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258
  },
  __self: undefined
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-469814692" + " " + "pic-box-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 265
  },
  __self: undefined
})), __jsx("div", {
  className: "jsx-469814692" + " " + "section-container",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 269
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "pic-box-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 270
  },
  __self: undefined
}), __jsx("div", {
  className: "jsx-469814692" + " " + "text-box-6",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274
  },
  __self: undefined
}, __jsx("div", {
  className: "jsx-469814692" + " " + "text-right",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275
  },
  __self: undefined
}, __jsx("h2", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276
  },
  __self: undefined
}, "Contact."), __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 277
  },
  __self: undefined
}, "HOW CAN I HELP YOU?"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 279
  },
  __self: undefined
}, "I hope you've enjoyed learning more about me! It's definitely just scratching the surface of my abilities and definitely my personality, too. The industry has coined a term for someone with my skillset but I refuse to be labeled as a Unicorn. Jokes aside, I'm very well-rounded and I approach challenges head-on with an aura of high-spirits and unshakeable confidence."), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 281
  },
  __self: undefined
}, "What challenges are you currently facing? Is there anything you think I can help you with? Do you think I would be a good addition to your team?"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 284
  },
  __self: undefined
}, "If so, I'm currently available for new opportunities as a Full Stack Software Engineer!"), __jsx("h5", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 285
  },
  __self: undefined
}, "If you would like to get in touch with me, I'm always checking my e-mails!"), __jsx("h3", {
  className: "jsx-469814692",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 287
  },
  __self: undefined
}, "rhuwell.samano@gmail.com"), __jsx("h2", {
  className: "jsx-469814692" + " " + "contact-h2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 288
  },
  __self: undefined
}, "Thank you!")))), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "469814692",
  __self: undefined
}, ".cover.jsx-469814692{position:relative;min-height:130vh;background:transparent url(/static/pro-cover.JPG) no-repeat center center;background-size:cover;background-attachment:fixed;background-position:top;background-repeat:no-repeat;background-size:cover;text-align:left;}.hello.jsx-469814692{color:#FFF;line-height:1.4;display:inline-block;position:relative;top:200px;left:50px;padding-left:80px;padding-right:80px;opacity:100%;}.hello.jsx-469814692 h1.jsx-469814692{line-height:1.0;font-family:'Galano';color:#FFF;font-size:92px;margin:0 0 0px 0;padding:0px;}.subtitle.jsx-469814692{font-family:\"HomepageBaukasten-Bold\";font-size:16px;margin-top:10px;margin-left:5px;}a.button.jsx-469814692{font-family:'Larsseit';display:inline-block;text-transform:uppercase;font-size:16px;background:#F5AD25;margin-left:5px;margin-top:30px;padding:10px 40px;top:25px;color:#FFF;border-radius:5px;}.text-left.jsx-469814692{text-align:left;padding:20px 130px;}.text-right.jsx-469814692{text-align:right;padding:20px 130px;}h2.jsx-469814692{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.work-h2.jsx-469814692{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}.contact-h2.jsx-469814692{font-family:'Galano';font-size:80px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}h3.jsx-469814692{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;}.contact-h5.jsx-469814692{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;margin-top:0px;}h4.jsx-469814692{font-family:'CarreNoir';font-size:20px;color:#a6b1b9;padding:0px 0;margin-bottom:0px;}h5.jsx-469814692{font-family:'Varta';font-size:16px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;}@media (max-width:480px){.hello.jsx-469814692{font-family:'Galano';font-size:18px;padding:20px;}h1.jsx-469814692{font-size:28px;}}.section-container.jsx-469814692{height:130vh;display:block;max-width:100%;margin:0 auto;}.text-box.jsx-469814692{box-sizing:border-box;background:#FFF;float:left;width:60%;height:100%;}.pic-box.jsx-469814692{box-sizing:border-box;background:url(/static/pro-about-me.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:right;width:40%;height:100%;}.text-box-2.jsx-469814692{box-sizing:border-box;background:#f2efef;float:right;width:60%;height:100%;}.text-box-2.jsx-469814692 h2.jsx-469814692{color:#FFF;}.pic-box-2.jsx-469814692{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:left;width:40%;height:100%;}.projects-row-1.jsx-469814692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-image-container.jsx-469814692{width:100%;}.project-image.jsx-469814692{width:100%;padding:7px;padding-top:0px;}.text-box-3.jsx-469814692{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}.pic-box-3.jsx-469814692{box-sizing:border-box;background:url(/static/pro-skills.JPG) no-repeat center right;background-size:cover;background-position:top right 35%;float:right;width:40%;height:100%;}.pic-box-4.jsx-469814692{box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}.skills-row.jsx-469814692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.skills-image-container.jsx-469814692{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.skills-text-container.jsx-469814692{line-height:1.2;width:75%;display:inline;}.skills-text-container.jsx-469814692 h3.jsx-469814692{padding-top:0px;margin-top:0px;}.skills-text-container.jsx-469814692 h5.jsx-469814692{padding-top:0px;margin-top:0px;}.text-box-4.jsx-469814692{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}.tech-rows-container.jsx-469814692{margin-top:30px;}.tech-row.jsx-469814692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.tech-image-container.jsx-469814692{width:30%;padding:5px;}.tech-image-container.jsx-469814692 span.jsx-469814692{font-size:100px;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}.tech-image-container.jsx-469814692 span.jsx-469814692:hover{color:#F5AD25;}.pic-box-5.jsx-469814692{box-sizing:border-box;background:url(/static/pro-education.JPG) no-repeat center right;background-size:cover;background-position:bottom right 20%;float:left;width:40%;height:100%;}.text-box-5.jsx-469814692{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}.text-box-5.jsx-469814692 h2.jsx-469814692{font-size:85px;}.education-row.jsx-469814692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.education-image-container.jsx-469814692{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.education-text-container.jsx-469814692{line-height:1.2;width:75%;display:inline;}.education-text-container.jsx-469814692 h3.jsx-469814692{padding-top:0px;margin-top:0px;}.education-text-container.jsx-469814692 h4.jsx-469814692{padding-top:0px;margin-top:0px;}.education-text-container.jsx-469814692 h5.jsx-469814692{padding-top:0px;margin-top:0px;}.pic-box-6.jsx-469814692{box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}.text-box-6.jsx-469814692{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}@media (max-width:480px){.cover.jsx-469814692{position:relative;min-height:110vh;background:transparent url(/static/pro-cover.JPG) no-repeat center right;background-size:cover;background-attachment:fixed;background-position:top right 24%;background-repeat:no-repeat;background-size:cover;text-align:left;}.hello.jsx-469814692{color:#FFF;line-height:1.4;display:inline-block;position:relative;top:200px;left:10px;padding-left:20px;padding-right:80px;opacity:100%;}.hello.jsx-469814692 h1.jsx-469814692{line-height:1.0;font-family:'Galano';color:#FFF;font-size:30px;margin:0 0 0px 0;padding:0px;}.subtitle.jsx-469814692{font-family:\"HomepageBaukasten-Bold\";font-size:10px;margin-top:10px;margin-left:0px;}a.button.jsx-469814692{font-family:'Larsseit';display:inline-block;text-transform:uppercase;font-size:10px;background:#F5AD25;margin-left:5px;margin-top:30px;padding:8px 30px;top:25px;color:#FFF;border-radius:5px;}.text-left.jsx-469814692{text-align:left;padding:20px 130px;}.text-right.jsx-469814692{text-align:right;padding:20px 130px;}h2.jsx-469814692{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.work-h2.jsx-469814692{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}.contact-h2.jsx-469814692{font-family:'Galano';font-size:80px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}h3.jsx-469814692{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;}.contact-h5.jsx-469814692{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;margin-top:0px;}h4.jsx-469814692{font-family:'CarreNoir';font-size:20px;color:#a6b1b9;padding:0px 0;margin-bottom:0px;}h5.jsx-469814692{font-family:'Varta';font-size:16px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;}@media (max-width:480px){.hello.jsx-469814692{font-family:'Galano';font-size:18px;padding:20px;}h1.jsx-469814692{font-size:28px;}}.section-container.jsx-469814692{height:130vh;display:block;max-width:100%;margin:0 auto;}.text-box.jsx-469814692{box-sizing:border-box;background:#FFF;float:left;width:100%;height:100%;}.pic-box.jsx-469814692{box-sizing:border-box;background:url(/static/pro-about-me.JPG) no-repeat center right;background-size:cover;background-position:top right 28%;float:right;width:100%;height:100%;}.text-box-2.jsx-469814692{box-sizing:border-box;background:#f2efef;float:right;width:60%;height:100%;}.text-box-2.jsx-469814692 h2.jsx-469814692{color:#FFF;}.pic-box-2.jsx-469814692{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:left;width:40%;height:100%;}.projects-row-1.jsx-469814692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.project-image-container.jsx-469814692{width:100%;}.project-image.jsx-469814692{width:100%;padding:7px;padding-top:0px;}.text-box-3.jsx-469814692{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}.pic-box-3.jsx-469814692{box-sizing:border-box;background:url(/static/pro-skills.JPG) no-repeat center right;background-size:cover;background-position:top right 35%;float:right;width:40%;height:100%;}.pic-box-4.jsx-469814692{box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}.skills-row.jsx-469814692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.skills-image-container.jsx-469814692{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.skills-text-container.jsx-469814692{line-height:1.2;width:75%;display:inline;}.skills-text-container.jsx-469814692 h3.jsx-469814692{padding-top:0px;margin-top:0px;}.skills-text-container.jsx-469814692 h5.jsx-469814692{padding-top:0px;margin-top:0px;}.text-box-4.jsx-469814692{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}.tech-rows-container.jsx-469814692{margin-top:30px;}.tech-row.jsx-469814692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.tech-image-container.jsx-469814692{width:30%;padding:5px;}.tech-image-container.jsx-469814692 span.jsx-469814692{font-size:100px;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}.tech-image-container.jsx-469814692 span.jsx-469814692:hover{color:#F5AD25;}.pic-box-5.jsx-469814692{box-sizing:border-box;background:url(/static/pro-education.JPG) no-repeat center right;background-size:cover;background-position:bottom right 20%;float:left;width:40%;height:100%;}.text-box-5.jsx-469814692{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}.text-box-5.jsx-469814692 h2.jsx-469814692{font-size:85px;}.education-row.jsx-469814692{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.education-image-container.jsx-469814692{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.education-text-container.jsx-469814692{line-height:1.2;width:75%;display:inline;}.education-text-container.jsx-469814692 h3.jsx-469814692{padding-top:0px;margin-top:0px;}.education-text-container.jsx-469814692 h4.jsx-469814692{padding-top:0px;margin-top:0px;}.education-text-container.jsx-469814692 h5.jsx-469814692{padding-top:0px;margin-top:0px;}.pic-box-6.jsx-469814692{box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}.text-box-6.jsx-469814692{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9yaHV3ZWxsc2FtYW5vL1BFUlNPTkFMX1BST0pFQ1RTL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFuby9wYWdlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF1U2dCLEFBRzJCLEFBV1AsQUFXSyxBQVFxQixBQU1kLEFBYVAsQUFJQyxBQUlJLEFBUUEsQUFRQSxBQVFBLEFBT0EsQUFRRyxBQU9KLEFBU0csQUFLTixBQUlKLEFBTVMsQUFPQSxBQVNBLEFBT1gsQUFHVyxBQVNULEFBR0YsQUFHQSxBQUtXLEFBT0EsQUFTQSxBQVNULEFBTUgsQUFNTSxBQUtBLEFBSUEsQUFJTSxBQU9OLEFBR0gsQUFHSCxBQUlNLEFBUUYsQUFHUSxBQVNBLEFBT1AsQUFHRixBQU1ILEFBTU0sQUFLQSxBQUlBLEFBSUEsQUFJTSxBQVNBLEFBaUJGLEFBV1AsQUFXSyxBQVFxQixBQU1kLEFBYVAsQUFJQyxBQUlJLEFBUUEsQUFRQSxBQVFBLEFBT0EsQUFRRyxBQU9KLEFBU0csQUFLTixBQUlKLEFBTVMsQUFPQSxBQVNBLEFBT1gsQUFHVyxBQVNULEFBR0YsQUFHQSxBQUtXLEFBT0EsQUFTQSxBQVNULEFBTUgsQUFNTSxBQUtBLEFBSUEsQUFJTSxBQU9OLEFBR0gsQUFHSCxBQUlNLEFBUUYsQUFHUSxBQVNBLEFBT1AsQUFHRixBQU1ILEFBTU0sQUFLQSxBQUlBLEFBSUEsQUFJTSxBQVNBLFVBNWFiLEFBZ0NDLEFBd0NELEFBNlBFLEFBZ0NDLEFBd0NELENBOWtCRyxBQTJJbEIsQUFlQSxBQUdjLEFBd0tNLEFBMklsQixBQWVBLEFBR2MsRUFwWEEsQUFxVUUsQ0F0TWxCLEFBcVVFLENBeGNBLEFBc0pGLEFBK0tJLEFBc0pGLENBMWpCcUIsQUEyQkYsQUFpS1QsQUFLSyxBQUlBLEFBV2pCLEFBVW1CLEFBMENQLEFBS0ssQUFJQSxBQUlBLEFBb0RRLEFBMkJGLEFBaUtULEFBS0ssQUFJQSxBQVdqQixBQVVtQixBQTBDUCxBQUtLLEFBSUEsQUFJQSxDQXZqQkUsQUFxVUUsQ0ExWEosQUFxVUUsRUE5TkosQUFxVUUsQ0FuWEQsQUFRQSxBQVFELEFBUUEsQUFPQSxBQXdCRSxBQTZGSixBQXdFQSxBQXlHSyxBQVFBLEFBUUQsQUFRQSxBQU9BLEFBd0JFLEFBNkZKLEFBd0VBLENBM2RDLEFBT2dELEFBUzdDLEFBVXlDLEFBb0J6QyxBQU8yQyxBQVNGLEFBa0M1QyxBQWNsQixBQWNtRSxBQVM5QyxBQXVDK0MsQUFTbEQsQUFnSkUsQUFPZ0QsQUFTN0MsQUFVeUMsQUFvQnpDLEFBTzJDLEFBU0YsQUFrQzVDLEFBY2xCLEFBY21FLEFBUzlDLEFBdUMrQyxBQVNsRCxDQXJsQkcsQUFxSUwsQUFnTU8sQUFxSUwsQ0E5WUgsQUFxVUUsRUFsTkYsQUF3RUEsQUE2UEUsQUF3RUEsQ0FwbEJJLEFBOEdOLEFBdU5RLEFBOEdOLElBdk9uQixBQUlBLEFBb0VBLEFBSUEsQUFJQSxBQXFQRSxBQUlBLEFBb0VBLEFBSUEsQUFJQSxHQTVYa0IsQUFxVUUsQ0FyakJzRCxBQWlENUUsQUFzRGdCLEFBOE42RCxBQWlEM0UsQUFzRGdCLENBdlhsQixBQW9CZ0IsQUFRQSxBQU9BLEFBd0JDLEFBMFFmLEFBb0JnQixBQVFBLEFBT0EsQUF3QkMsQ0EvWk4sQUFPSSxBQTRCRCxBQVFBLEFBMFJELEFBT0ksQUE0QkQsQUFRQSxDQXZRTCxBQWdHQyxBQXFGQSxBQWdKQyxBQWdHQyxBQXFGQSxDQXpoQkEsQUF5RWhCLEFBNFBrQixBQXlFaEIsRUEvVlksQUE4QkQsQUFzQ2IsQUFpRGEsQUF1QmIsQUF5TGdCLEFBOEJELEFBc0NiLEFBaURhLEFBdUJiLENBdGVjLEFBcVVFLEVBM1pTLEFBcVVFLElBN1ZULEFBV0gsQUEwVEssQUFXSCxDQXBQRCxBQVNoQixBQWVVLEFBNlNRLEFBU2hCLEFBZVcsQ0EzWEcsQUFRRixBQU9BLEFBdUlMLEFBcUZBLEFBMEZTLEFBUUYsQUFPQSxBQXVJTCxBQXFGQSxDQWhrQk0sQUFRRCxBQTZURyxBQVFELENBeldGLEFBZ0pOLEFBdUZBLEFBOEZRLEFBZ0pOLEFBdUZBLENBemVFLEFBK0NMLEFBaUdVLEFBcUxILEFBK0NMLEFBaUdVLEdBM2J2QixBQXFVRSxHQS9UWSxDQWdHQSxBQXFGQSxBQWdKRSxBQWdHQSxBQXFGQSxFQTVjRixBQXVGQSxBQThPRSxBQXVGQSxDQW5qQkcsQUF5SEwsQUE0TU8sQUF5SEwsQ0FuWUksQUFPQSxBQThURSxBQU9BLENBdFROLEFBcVVFLENBamFOLEFBOERTLEFBdVFQLEFBOERTLENBN1VGLEFBK0JELEFBc1NHLEFBK0JELENBeFlKLEFBNEJHLEFBeVNELEFBNEJHLENBM1ZOLEFBcVVFLEVBeE9uQixDQWdHQSxBQXFGQSxBQWdKRSxBQWdHQSxBQXFGQSxDQTFZc0IsQUFxVUUsQ0F0WjFCLEFBZUEsQUFxQmEsQUFtQ2IsQUErQkEsQUFNYSxBQXlOWCxBQWVBLEFBcUJhLEFBbUNiLEFBK0JBLEFBTWEsQ0FoY2YsQUFxVUUsQ0F6Y1UsQUFxVUUsR0F6T00sQUFxVUUsQ0F0WlIsQUFxVUUsRUExUWhCLEFBT2lCLEFBOERPLEFBb0NBLEFBNE50QixBQU9pQixBQThETyxBQW9DQSxFQWxlMUIsQUFNcUIsQUE4SUcsQUFpTHRCLEFBTXFCLEFBOElHLENBN2FSLEFBdUJsQixBQW1HbUIsQUF3RUEsQUFtSUMsQUF1QmxCLEFBbUdtQixBQXdFQSxDQXBrQkQsQUFxREYsQUFrRU0sQUE4TUYsQUFxREYsQUFrRU0sQ0EvWVIsQUErTE0sQUFzSUosQUErTE0sQ0FyUkYsQUFxVUUsSUF0bEIxQixBQXFVRSxHQWxKZ0IsQUF3RUEsQUE2UEUsQUF3RUEsQ0F2V0osQUFxVUUsQ0E1ZGxCLEFBZUEsQUFzVEUsQUFlQSxJQW5XRixBQXFVRSxDQTdVRixBQWtJc0IsQUF3RUEsQUEySHBCLEFBa0lzQixBQXdFQSxDQTdpQk4sQUFzQmxCLEFBK1NvQixBQXNCbEIsQ0FsWG1CLEFBMEllLEFBb0NBLEFBdUpiLEFBMEllLEFBb0NBLEVBOVVGLEFBcVVFLEVBblhGLEFBK0xWLEFBc0lZLENBM2NkLEFBMlBlLEFBcVVFLENBclJMLEFBcVVFLENBbmF0QyxBQXdFQSxBQTZQRSxBQXdFQSxRQW5qQmdCLEFBcVVFLEdBcktwQixBQXdFQSxBQTZQRSxBQXdFQSxDQXBrQmEsQUFxVUUsT0FmZSxDQXJVRixHQWtQOUIsQUFxVUUsQ0FoaEJrQixBQXFVQyxDQTVWckIsQUFxVUUsRUE1TFcsQUFvQ0EsQUFpU0UsQUFvQ0EsRUE5VUQsQUFxVUUsRUFuWEYsQUFxVUUsRUFoS0gsQUFxVUUsRUFyWEYsQUFxVUUsR0F0YUgsQUFvQ0EsQUFpU0UsQUFvQ0EsR0E5VUgsQUF3TEUsQUE2SUEsQ0FsZEYsQ0ErRkEsQUFxVUksQ0FoS0gsQUFxVUUsRUFyWEYsQUFxVUUsQ0EzUHdCLENBclVaLEFBMEpaLEFBb0NBLEFBaVNFLEFBb0NBLEVBdEpELENBclVGLEFBNklDLEFBcVVFLEVBblhGLENBcUtBLEFBZ0tFLEFBcUtBLEVBclhGLEFBcVVFLElBdGFoQixBQW9DQSxBQWlTRSxBQW9DQSxDQXRKb0IsQ0FyVUYsQ0E2SXBCLEFBcVVFLEVBblhGLENBcUtBLEFBZ0tFLEFBcUtBLEVBclhGLEFBcVVFLElBamtCNEIsT0E4VzVCLENBclVGLENBNFJnQyxtQkFwVVIsU0FxVUUsYUFwVVIsU0FxVUUsT0FwVXBCLFNBcVVFIiwiZmlsZSI6Ii9Vc2Vycy9yaHV3ZWxsc2FtYW5vL1BFUlNPTkFMX1BST0pFQ1RTL3JodXdlbGxzYW1hbm8vcmh1d2VsbHNhbWFuby9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluayc7XG5pbXBvcnQgTGF5b3V0IGZyb20gJy4uL2NvbXBvbmVudHMvTGF5b3V0JztcblxuY29uc3QgSG9tZXBhZ2UgPSAoKSA9PiAoXG4gIDxMYXlvdXQgdGl0bGU9XCJIb21lcGFnZVwiPlxuICAgIDxkaXYgY2xhc3NOYW1lPVwiY292ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaGVsbG9cIj5cbiAgICAgICAgPGgxPkJSSUxMSUFOVExZIERFU0lHTkVEIEFORCBCVUlMVC48L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+UkhVV0VMTCBTQU1BTk8g4oCiIEZVTEwgU1RBQ0sgU09GVFdBUkUgRU5HSU5FRVI8L2Rpdj5cbiAgICAgICAgICA8YSBocmVmPVwiI2p1bXAtdG8tdG9wXCIgY2xhc3NOYW1lPVwiYnV0dG9uXCI+TEVBUk4gTU9SRTwvYT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBpZD1cImp1bXAtdG8tdG9wXCIgY2xhc3NOYW1lPVwidGV4dC1ib3hcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8aDI+QWJvdXQuPC9oMj5cbiAgICAgICAgICA8aDM+Q09OTkVDVEVEIFRIUk9VR0ggQ1JFQVRJT048L2gzPlxuICAgICAgICAgIDxoND5cIldoYXQgeW91IGxlYXZlIGJlaGluZCBpcyBub3Qgd2hhdCBpcyBlbmdyYXZlZCBpbiBzdG9uZSBtb251bWVudHMsIGJ1dCB3aGF0IGlzIHdvdmVuIGludG8gdGhlIGxpdmVzIG9mIG90aGVycy5cIiAtLSBQZXJpY2xlczwvaDQ+XG4gICAgICAgICAgXG4gICAgICAgICAgPGg1Pk15IG5hbWUgaXMgUmh1d2VsbCBTYW1hbm8gYW5kIEknbSBhIEZ1bGwgU3RhY2sgU29mdHdhcmUgRW5naW5lZXIuIEkgc3BlY2lhbGl6ZSBpbiBSZWFjdCBhbmQgbWFpbmx5IGNvZGUgaW4gSmF2YXNjcmlwdC4gSSBoYXZlIGEgcGFydGljdWxhcmx5IHJhcmUgY29tYmluYXRpb24gb2Ygc2tpbGxzIHRoYXQgYWxsb3cgbWUgdG8gaGF2ZSB2YWx1YWJsZSBpbnNpZ2h0IGludG8gbWFueSwgaWYgbm90IGFsbCwgdHlwZXMgb2YgZGlnaXRhbCBwcm9qZWN0cy4gPC9oNT5cbiAgICAgICAgICA8aDU+XG4gICAgICAgICAgQnkgdXNpbmcgU29mdHdhcmUgRW5naW5lZXJpbmcsIERpZ2l0YWwgTWFya2V0aW5nIGFuZCBXZWIgJiBBcHAgRGVzaWduLCBJJ20gYWJsZSB0byB1bmRlcnN0YW5kIGFsbCBvZiB0aGUgbW92aW5nIHBhcnRzIG9mIGEgcHJvamVjdCBhbmQgY29ubmVjdCB0aGVtIHRvZ2V0aGVyIGludG8gYSBiZWF1dGlmdWwgaGFuZGNyYWZ0ZWQgc3lzdGVtIHRoYXQgZnVlbHMgYW5kIGdyb3dzIHBvd2VyZnVsIGJyYW5kcy4gPC9oNT5cblxuICAgICAgICAgIDxoNT5JJ20gcGFzc2lvbmF0ZSBhYm91dCBjcmVhdGluZyB3b3JsZC1jbGFzcyBleHBlcmllbmNlcyBmb3IgdmFyaW91cyBjb21tdW5pdGllcyB1c2luZyB3ZWJzaXRlcywgYXBwbGljYXRpb25zLCBhbmQgZGlnaXRhbCBtZWRpYS4gVGhlIG1vc3QgaW1wb3J0YW50IHBlcnNvbiBJIGNhcmUgYWJvdXQgYW5kIGNyZWF0ZSBmb3IgaXMgdGhlIGVuZC11c2VyLiBJIHRob3JvdWdobHkgZW5qb3kgd29ya2luZyB3aXRoIG90aGVycyB0b3dhcmRzIGFjaGlldmluZyB0aGF0IGdvYWwsIG5vIG1hdHRlciB0aGUgcHJvamVjdC48L2g1PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCI+UmVhZCBNb3JlIEFib3V0IE1lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIFxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3hcIj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJwaWMtYm94LTJcIj5cblxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1ib3gtMlwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCI+XG4gICAgICAgICAgPGgyIGNsYXNzTmFtZT1cIndvcmstaDJcIj5Xb3JrLjwvaDI+XG4gICAgICAgICAgPGgzPlJFQ0VOVCBQUk9KRUNUUzwvaDM+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0cy1yb3ctY29udGFpbmVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLXJvdy0xXCI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvYmxpbmstaGVhbHRoLW1vY2t1cC5wbmdcIiBhbHQ9XCJcIj48L2ltZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvc2ljay1maXRzLW1vY2t1cC5wbmdcIiBhbHQ9XCJcIj48L2ltZz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3RzLXJvdy0xXCI+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvbWFqaW4tc3VzaGktbW9ja3VwLnBuZ1wiIGFsdD1cIlwiPjwvaW1nPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiL3N0YXRpYy9saW5rZWR1cC1tb2NrdXAucG5nXCIgYWx0PVwiXCI+PC9pbWc+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL3Byb2plY3RzXCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiPlZpZXcgTXkgUHJvamVjdHM8L2E+XG4gICAgICAgICAgICA8L0xpbms+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtYm94LTNcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWxlZnRcIj5cbiAgICAgICAgICA8aDI+U2tpbGxzLjwvaDI+XG4gICAgICAgICAgPGgzPlRIRSBQRVJGRUNUIFRSSUZFQ1RBPC9oMz5cblxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiL3N0YXRpYy9zb2Z0d2FyZS1lbmdpbmVlci5wbmdcIiBhbHQ9XCJcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDM+U09GVFdBUkUgRU5HSU5FRVJJTkc8L2gzPlxuICAgICAgICAgICAgICA8aDU+RnJvbSB0aGUgZnJvbnQtZW5kIHRvIHRoZSBiYWNrLWVuZCwgSSdtIGFibGUgdG8gZGl2ZSBpbnRvIGFsbCBzb3J0cyBvZiBwcm9qZWN0cyBhbmQgd29yayB3aXRoIHdoYXQncyB0aGVyZSAtIG9yIHN0YXJ0IGZyb20gc2NyYXRjaC5cbiAgICAgICAgICAgICAgPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiL3N0YXRpYy9kaWdpdGFsLW1hcmtldGluZy5wbmdcIiBhbHQ9XCJcIj48L2ltZz5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNraWxscy10ZXh0LWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aDM+RElHSVRBTCBNQVJLRVRJTkc8L2gzPlxuICAgICAgICAgICAgICA8aDU+QnkgdXNpbmcgbW9kZXJuIGRpZ2l0YWwgdG9vbHMsIGFuY2llbnQgaHVtYW4gcHN5Y2hvbG9neSwgYW5kIGNsYXNzaWMgc3Rvcnl0ZWxsaW5nIC0gSSBjYW4gZ3JvdyBsZWFkcyBhbmQgaW5jcmVhc2UgdGhlIGJvdHRvbS1saW5lLjwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2tpbGxzLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvZGVzaWduZXIucG5nXCIgYWx0PVwiXCI+PC9pbWc+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJza2lsbHMtdGV4dC1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGgzPldFQiAmIEFQUCBERVNJR048L2gzPlxuICAgICAgICAgICAgICA8aDU+RnJvbSBhIHNrZXRjaCBvbiBhIG5hcGtpbiBvciBhIHdoaXRlYm9hcmQsIEknbSBhYmxlIHRvIGRlc2lnbiBhbmQgY3JhZnQgaWRlYXMgaW50byBtb2NrLXVwcyB1c2luZyBiZXN0IHByYWN0aWNlcyBpbiB0aGUgaW5kdXN0cnkuPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJcIj5cbiAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwiYnV0dG9uXCI+UmVhZCBNb3JlIEFib3V0IE1lPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtM1wiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtNFwiPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJveC00XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8aDI+VGVjaC48L2gyPlxuICAgICAgICAgIDxoMz5UT09MUyBPRiBUSEUgVFJBREU8L2gzPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1yb3dzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtcmVhY3RcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtcHl0aG9uXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldmljb25zIGRldmljb25zLWRqYW5nb1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXZpY29ucyBkZXZpY29ucy1ydWJ5X29uX3JhaWxzXCIgLz5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLXJvd1wiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtamF2YXNjcmlwdF9iYWRnZVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXZpY29ucyBkZXZpY29ucy1ub2RlanNcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtaHRtbDVcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtY3NzM1wiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1yb3dcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZWNoLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImRldmljb25zIGRldmljb25zLW5wbVwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXZpY29ucyBkZXZpY29ucy1zd2lmdFwiIC8+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGVjaC1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJkZXZpY29ucyBkZXZpY29ucy1waG90b3Nob3BcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRlY2gtaW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwiZGV2aWNvbnMgZGV2aWNvbnMtaWxsdXN0cmF0b3JcIiAvPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGg1PkdpdEh1YiBDb250cmlidXRpb25zIC0gVXBkYXRlZCBKYW51YXJ5IDIxc3QsIDIwMjA8L2g1PlxuICAgICAgICAgIDxpbWcgc3JjPVwiL3N0YXRpYy9naXRodWItY2FsZW5kYXIucG5nXCIgYWx0PVwiXCI+PC9pbWc+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIlwiPlxuICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9wcm9qZWN0c1wiPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJidXR0b25cIj5WaWV3IE15IFByb2plY3RzPC9hPlxuICAgICAgICAgICAgPC9MaW5rPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzc05hbWU9XCJzZWN0aW9uLWNvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJveC01XCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1sZWZ0XCI+XG4gICAgICAgICAgPGgyPkVkdWNhdGlvbi48L2gyPlxuICAgICAgICAgIDxoMz5LTk9XTEVER0UgSVMgS0VZPC9oMz5cbiAgICAgICAgICBcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbi1yb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLWltYWdlLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICA8aW1nIGNsYXNzTmFtZT1cInByb2plY3QtaW1hZ2VcIiBzcmM9XCIvc3RhdGljL2ZsYXRpcm9uc2Nob29sLnBuZ1wiIGFsdD1cIlwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxoMz5GTEFUSVJPTiBTQ0hPT0w8L2gzPlxuICAgICAgICAgICAgICA8aDQ+S25vd24gYXMgdGhlIFwiSXZ5IExlYWd1ZSBvZiBjb2RpbmcgYm9vdGNhbXBzXCI8L2g0PlxuICAgICAgICAgICAgICA8aDU+RnVsbCBTdGFjayBTb2Z0d2FyZSBFbmdpbmVlcmluZyB8IFJlYWN0LCBKYXZhc2NyaXB0LCBSdWJ5IG9uIFJhaWxzPC9oNT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24tcm93XCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImVkdWNhdGlvbi1pbWFnZS1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAgPGltZyBjbGFzc05hbWU9XCJwcm9qZWN0LWltYWdlXCIgc3JjPVwiL3N0YXRpYy90ZWFtdHJlZWhvdXNlLnBuZ1wiIGFsdD1cIlwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxoMz5URUFNVFJFRUhPVVNFPC9oMz5cbiAgICAgICAgICAgICAgPGg0PkEgdG9wLXRpZXIgb25saW5lIHNjaG9vbCBmb3IgbGVhcm5pbmcgY29kZTwvaDQ+XG4gICAgICAgICAgICAgIDxoNT5GdWxsIFN0YWNrIEphdmFzY3JpcHQgRGV2ZWxvcG1lbnQgJiBGdWxsIFN0YWNrIFdlYiBEZXZlbG9wbWVudDwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLXJvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJlZHVjYXRpb24taW1hZ2UtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicHJvamVjdC1pbWFnZVwiIHNyYz1cIi9zdGF0aWMvY3NpLnBuZ1wiIGFsdD1cIlwiPjwvaW1nPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIDxoMz5DT0xMRUdFIE9GIFNUQVRFTiBJU0xBTkQ8L2gzPlxuICAgICAgICAgICAgICA8aDQ+VGhlIHNpbmdsZSwgbGFyZ2VzdCBjYW1wdXMgaW4gYWxsIG9mIE5ldyBZb3JrIENpdHk8L2g0PlxuICAgICAgICAgICAgICA8aDU+QlM6IEJ1c2luZXNzIE1hcmtldGluZyAoMjAxMi0yMDE2KTwvaDU+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiXCI+XG4gICAgICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cImJ1dHRvblwiPlJlYWQgTW9yZSBBYm91dCBNZTwvYT5cbiAgICAgICAgICAgIDwvTGluaz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtNVwiPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzTmFtZT1cInNlY3Rpb24tY29udGFpbmVyXCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInBpYy1ib3gtNlwiPlxuXG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LWJveC02XCI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIj5cbiAgICAgICAgICA8aDI+Q29udGFjdC48L2gyPlxuICAgICAgICAgIDxoMz5IT1cgQ0FOIEkgSEVMUCBZT1U/PC9oMz5cblxuICAgICAgICAgIDxoNT5JIGhvcGUgeW91J3ZlIGVuam95ZWQgbGVhcm5pbmcgbW9yZSBhYm91dCBtZSEgSXQncyBkZWZpbml0ZWx5IGp1c3Qgc2NyYXRjaGluZyB0aGUgc3VyZmFjZSBvZiBteSBhYmlsaXRpZXMgYW5kIGRlZmluaXRlbHkgbXkgcGVyc29uYWxpdHksIHRvby4gVGhlIGluZHVzdHJ5IGhhcyBjb2luZWQgYSB0ZXJtIGZvciBzb21lb25lIHdpdGggbXkgc2tpbGxzZXQgYnV0IEkgcmVmdXNlIHRvIGJlIGxhYmVsZWQgYXMgYSBVbmljb3JuLiBKb2tlcyBhc2lkZSwgSSdtIHZlcnkgd2VsbC1yb3VuZGVkIGFuZCBJIGFwcHJvYWNoIGNoYWxsZW5nZXMgaGVhZC1vbiB3aXRoIGFuIGF1cmEgb2YgaGlnaC1zcGlyaXRzIGFuZCB1bnNoYWtlYWJsZSBjb25maWRlbmNlLjwvaDU+XG5cbiAgICAgICAgICA8aDU+V2hhdCBjaGFsbGVuZ2VzIGFyZSB5b3UgY3VycmVudGx5IGZhY2luZz8gSXMgdGhlcmUgYW55dGhpbmcgeW91IHRoaW5rIEkgY2FuIGhlbHAgeW91IHdpdGg/XG4gICAgICAgICAgRG8geW91IHRoaW5rIEkgd291bGQgYmUgYSBnb29kIGFkZGl0aW9uIHRvIHlvdXIgdGVhbT88L2g1PlxuXG4gICAgICAgICAgPGg1PklmIHNvLCBJJ20gY3VycmVudGx5IGF2YWlsYWJsZSBmb3IgbmV3IG9wcG9ydHVuaXRpZXMgYXMgYSBGdWxsIFN0YWNrIFNvZnR3YXJlIEVuZ2luZWVyITwvaDU+IFxuICAgICAgICAgIDxoNT5JZiB5b3Ugd291bGQgbGlrZSB0byBnZXQgaW4gdG91Y2ggd2l0aCBtZSwgSSdtIGFsd2F5cyBjaGVja2luZyBteSBlLW1haWxzITwvaDU+XG5cbiAgICAgICAgICA8aDM+cmh1d2VsbC5zYW1hbm9AZ21haWwuY29tPC9oMz5cbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwiY29udGFjdC1oMlwiPlRoYW5rIHlvdSE8L2gyPlxuXG5cblxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICBtaW4taGVpZ2h0OiAxMzB2aDtcbiAgICAgICAgYmFja2dyb3VuZDogdHJhbnNwYXJlbnQgdXJsKC9zdGF0aWMvcHJvLWNvdmVyLkpQRykgbm8tcmVwZWF0IGNlbnRlciBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtYXR0YWNobWVudDogZml4ZWQ7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcDtcbiAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIH1cbiAgICAgIC5oZWxsbyB7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgbGVmdDogNTBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4MHB4O1xuICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICBvcGFjaXR5OiAxMDAlO1xuICAgICAgfVxuICAgICAgLmhlbGxvIGgxIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMDtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xuICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgZm9udC1zaXplOiA5MnB4O1xuICAgICAgICBtYXJnaW46IDAgMCAwcHggMDtcbiAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgfVxuICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgZm9udC1mYW1pbHk6IFwiSG9tZXBhZ2VCYXVrYXN0ZW4tQm9sZFwiO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICB9XG4gICAgICBhLmJ1dHRvbiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnTGFyc3NlaXQnO1xuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgYmFja2dyb3VuZDogI0Y1QUQyNTtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDVweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCA0MHB4O1xuICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgIGNvbG9yOiAjRkZGO1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgICB9XG4gICAgICAudGV4dC1sZWZ0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgcGFkZGluZzogMjBweCAxMzBweDtcbiAgICAgIH1cbiAgICAgIC50ZXh0LXJpZ2h0IHtcbiAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgIHBhZGRpbmc6IDIwcHggMTMwcHg7XG4gICAgICB9XG4gICAgICBoMiB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcbiAgICAgICAgZm9udC1zaXplOiAxMjBweDtcbiAgICAgICAgY29sb3I6ICNGMkYyRjI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAzMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMC4zO1xuICAgICAgfVxuICAgICAgLndvcmstaDIge1xuICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgICAgIGNvbG9yOiAjRjJGMkYyO1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMC4zO1xuICAgICAgfVxuICAgICAgLmNvbnRhY3QtaDIge1xuICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XG4gICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgY29sb3I6ICNGMkYyRjI7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAwLjM7XG4gICAgICB9XG4gICAgICBoMyB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcbiAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICBjb2xvcjogIzM0M0Q0RjtcbiAgICAgICAgcGFkZGluZzogMHB4IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICAgIC5jb250YWN0LWg1IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xuICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgIGNvbG9yOiAjMzQzRDRGO1xuICAgICAgICBwYWRkaW5nOiAwcHggMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG4gICAgICBoNCB7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAnQ2FycmVOb2lyJztcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBjb2xvcjogI2E2YjFiOTtcbiAgICAgICAgcGFkZGluZzogMHB4IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgIH1cbiAgICAgIGg1IHtcbiAgICAgICAgZm9udC1mYW1pbHk6ICdWYXJ0YSc7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgY29sb3I6ICNhNmIxYjk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyLjI7XG4gICAgICAgIHBhZGRpbmc6IDBweCAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICB9XG4gICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgLmhlbGxvIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDIwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDEge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLnNlY3Rpb24tY29udGFpbmVyIHtcbiAgICAgICAgaGVpZ2h0OiAxMzB2aDtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgIG1heC13aWR0aDogMTAwJTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICB9XG4gICAgICAudGV4dC1ib3gge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnBpYy1ib3gge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tYWJvdXQtbWUuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjAlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoIDQwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRleHQtYm94LTIge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZjJlZmVmOyBcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICB3aWR0aCA2MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC50ZXh0LWJveC0yIGgyIHtcbiAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICB9XG4gICAgICAucGljLWJveC0yIHtcbiAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLXdvcmsuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnByb2plY3RzLXJvdy0xIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgfVxuICAgICAgLnByb2plY3QtaW1hZ2Uge1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgcGFkZGluZzogN3B4O1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgfVxuICAgICAgLnRleHQtYm94LTMge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyMTJBO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnBpYy1ib3gtMyB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1za2lsbHMuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMzUlO1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoIDQwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnBpYy1ib3gtNCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby10ZWNoLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcbiAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI1JTtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgIH1cbiAgICAgIC5za2lsbHMtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgIH1cbiAgICAgIC5za2lsbHMtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgaGVpZ2h0OiAyMCU7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICB9XG4gICAgICAuc2tpbGxzLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgd2lkdGg6IDc1JTtcbiAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgfVxuICAgICAgLnNraWxscy10ZXh0LWNvbnRhaW5lciBoMyB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIgaDUge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG4gICAgICAudGV4dC1ib3gtNCB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7IFxuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoIDYwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRlY2gtcm93cy1jb250YWluZXIge1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgfVxuICAgICAgLnRlY2gtcm93IHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgIH1cbiAgICAgIC50ZWNoLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgIHBhZGRpbmc6IDVweDtcbiAgICAgIH1cbiAgICAgIC50ZWNoLWltYWdlLWNvbnRhaW5lciBzcGFuIHtcbiAgICAgICAgZm9udC1zaXplOiAxMDBweDtcbiAgICAgICAgLW8tdHJhbnNpdGlvbjouM3M7XG4gICAgICAgIC1tcy10cmFuc2l0aW9uOi4zcztcbiAgICAgICAgLW1vei10cmFuc2l0aW9uOi4zcztcbiAgICAgICAgLXdlYmtpdC10cmFuc2l0aW9uOi4zcztcbiAgICAgICAgdHJhbnNpdGlvbjouM3M7XG4gICAgICB9XG4gICAgICAudGVjaC1pbWFnZS1jb250YWluZXIgc3Bhbjpob3ZlciB7XG4gICAgICAgIGNvbG9yOiAjRjVBRDI1O1xuICAgICAgfVxuICAgICAgLnBpYy1ib3gtNSB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1lZHVjYXRpb24uSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xuICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQgMjAlO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRleHQtYm94LTUge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiAjMUMyMTJBO1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuICAgICAgLnRleHQtYm94LTUgaDIge1xuICAgICAgICBmb250LXNpemU6IDg1cHg7XG4gICAgICB9XG4gICAgICAuZWR1Y2F0aW9uLXJvdyB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgcGFkZGluZy1ib3R0b206IDIwcHg7XG4gICAgICB9XG4gICAgICAuZWR1Y2F0aW9uLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIHdpZHRoOiAyMCU7XG4gICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDUlO1xuICAgICAgfVxuICAgICAgLmVkdWNhdGlvbi10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjI7XG4gICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgIH1cbiAgICAgIC5lZHVjYXRpb24tdGV4dC1jb250YWluZXIgaDMge1xuICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiAwcHg7XG4gICAgICB9XG4gICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGg0IHtcbiAgICAgICAgcGFkZGluZy10b3A6IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgfVxuICAgICAgLmVkdWNhdGlvbi10ZXh0LWNvbnRhaW5lciBoNSB7XG4gICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgIH1cbiAgICAgIC5waWMtYm94LTYge1xuICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tY29udGFjdC1tZS5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyNSU7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICB3aWR0aDogNDAlO1xuICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICB9XG4gICAgICAudGV4dC1ib3gtNiB7XG4gICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIGJhY2tncm91bmQ6ICNGRkY7IFxuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIHdpZHRoIDYwJTtcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgfVxuXG5cblxuXG5cblxuXG5cblxuICAgICAgQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gICAgICAgIC5jb3ZlciB7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIG1pbi1oZWlnaHQ6IDExMHZoO1xuICAgICAgICAgIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50IHVybCgvc3RhdGljL3Byby1jb3Zlci5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLWF0dGFjaG1lbnQ6IGZpeGVkO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyNCU7XG4gICAgICAgICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbGxvIHtcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS40O1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAyMDBweDtcbiAgICAgICAgICBsZWZ0OiAxMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBwYWRkaW5nLXJpZ2h0OiA4MHB4O1xuICAgICAgICAgIG9wYWNpdHk6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLmhlbGxvIGgxIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4wO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luOiAwIDAgMHB4IDA7XG4gICAgICAgICAgcGFkZGluZzogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6IFwiSG9tZXBhZ2VCYXVrYXN0ZW4tQm9sZFwiO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgYS5idXR0b24ge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnTGFyc3NlaXQnO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICAgICAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTBweDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRjVBRDI1O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiA1cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgICBwYWRkaW5nOiA4cHggMzBweDtcbiAgICAgICAgICB0b3A6IDI1cHg7XG4gICAgICAgICAgY29sb3I6ICNGRkY7XG4gICAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWxlZnQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGxlZnQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAxMzBweDtcbiAgICAgICAgfVxuICAgICAgICAudGV4dC1yaWdodCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICAgICAgcGFkZGluZzogMjBweCAxMzBweDtcbiAgICAgICAgfVxuICAgICAgICBoMiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTIwcHg7XG4gICAgICAgICAgY29sb3I6ICNGMkYyRjI7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMC4zO1xuICAgICAgICB9XG4gICAgICAgIC53b3JrLWgyIHtcbiAgICAgICAgICBmb250LWZhbWlseTogJ0dhbGFubyc7XG4gICAgICAgICAgZm9udC1zaXplOiAxMjBweDtcbiAgICAgICAgICBjb2xvcjogI0YyRjJGMjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuMztcbiAgICAgICAgfVxuICAgICAgICAuY29udGFjdC1oMiB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xuICAgICAgICAgIGZvbnQtc2l6ZTogODBweDtcbiAgICAgICAgICBjb2xvcjogI0YyRjJGMjtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDAuMztcbiAgICAgICAgfVxuICAgICAgICBoMyB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBjb2xvcjogIzM0M0Q0RjtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgLmNvbnRhY3QtaDUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnR2FsYW5vJztcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgY29sb3I6ICMzNDNENEY7XG4gICAgICAgICAgcGFkZGluZzogMHB4IDA7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC1mYW1pbHk6ICdDYXJyZU5vaXInO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBjb2xvcjogI2E2YjFiOTtcbiAgICAgICAgICBwYWRkaW5nOiAwcHggMDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwcHg7XG4gICAgICAgIH1cbiAgICAgICAgaDUge1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAnVmFydGEnO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBjb2xvcjogI2E2YjFiOTtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMi4yO1xuICAgICAgICAgIHBhZGRpbmc6IDBweCAwO1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDBweDtcbiAgICAgICAgfVxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgICAgICAgICAuaGVsbG8ge1xuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdHYWxhbm8nO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgcGFkZGluZzogMjBweDtcbiAgICAgICAgICB9XG4gICAgICAgICAgaDEge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyOHB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAuc2VjdGlvbi1jb250YWluZXIge1xuICAgICAgICAgIGhlaWdodDogMTMwdmg7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xuICAgICAgICAgIG1hcmdpbjogMCBhdXRvO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWJveCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjRkZGO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIGhlaWdodDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgICAucGljLWJveCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tYWJvdXQtbWUuSlBHKSBuby1yZXBlYXQgY2VudGVyIHJpZ2h0O1xuICAgICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgICAgICAgYmFja2dyb3VuZC1wb3NpdGlvbjogdG9wIHJpZ2h0IDI4JTtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWJveC0yIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNmMmVmZWY7IFxuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB3aWR0aCA2MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWJveC0yIGgyIHtcbiAgICAgICAgICBjb2xvcjogI0ZGRjtcbiAgICAgICAgfVxuICAgICAgICAucGljLWJveC0yIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby13b3JrLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyMCU7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3RzLXJvdy0xIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB9XG4gICAgICAgIC5wcm9qZWN0LWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnByb2plY3QtaW1hZ2Uge1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmc6IDdweDtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWJveC0zIHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxQzIxMkE7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnBpYy1ib3gtMyB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tc2tpbGxzLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAzNSU7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHdpZHRoIDQwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnBpYy1ib3gtNCB7XG4gICAgICAgICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiB1cmwoL3N0YXRpYy9wcm8tdGVjaC5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiB0b3AgcmlnaHQgMjUlO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbHMtcm93IHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAyMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbHMtaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICB3aWR0aDogMjAlO1xuICAgICAgICAgIGhlaWdodDogMjAlO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiA1JTtcbiAgICAgICAgfVxuICAgICAgICAuc2tpbGxzLXRleHQtY29udGFpbmVyIHtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yO1xuICAgICAgICAgIHdpZHRoOiA3NSU7XG4gICAgICAgICAgZGlzcGxheTogaW5saW5lO1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIgaDMge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC5za2lsbHMtdGV4dC1jb250YWluZXIgaDUge1xuICAgICAgICAgIHBhZGRpbmctdG9wOiAwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWJveC00IHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICNGRkY7IFxuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICB3aWR0aCA2MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50ZWNoLXJvd3MtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZWNoLXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgfVxuICAgICAgICAudGVjaC1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIHdpZHRoOiAzMCU7XG4gICAgICAgICAgcGFkZGluZzogNXB4O1xuICAgICAgICB9XG4gICAgICAgIC50ZWNoLWltYWdlLWNvbnRhaW5lciBzcGFuIHtcbiAgICAgICAgICBmb250LXNpemU6IDEwMHB4O1xuICAgICAgICAgIC1vLXRyYW5zaXRpb246LjNzO1xuICAgICAgICAgIC1tcy10cmFuc2l0aW9uOi4zcztcbiAgICAgICAgICAtbW96LXRyYW5zaXRpb246LjNzO1xuICAgICAgICAgIC13ZWJraXQtdHJhbnNpdGlvbjouM3M7XG4gICAgICAgICAgdHJhbnNpdGlvbjouM3M7XG4gICAgICAgIH1cbiAgICAgICAgLnRlY2gtaW1hZ2UtY29udGFpbmVyIHNwYW46aG92ZXIge1xuICAgICAgICAgIGNvbG9yOiAjRjVBRDI1O1xuICAgICAgICB9XG4gICAgICAgIC5waWMtYm94LTUge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYmFja2dyb3VuZDogdXJsKC9zdGF0aWMvcHJvLWVkdWNhdGlvbi5KUEcpIG5vLXJlcGVhdCBjZW50ZXIgcmlnaHQ7XG4gICAgICAgICAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBib3R0b20gcmlnaHQgMjAlO1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIHdpZHRoOiA0MCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDAlO1xuICAgICAgICB9XG4gICAgICAgIC50ZXh0LWJveC01IHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6ICMxQzIxMkE7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDYwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtYm94LTUgaDIge1xuICAgICAgICAgIGZvbnQtc2l6ZTogODVweDtcbiAgICAgICAgfVxuICAgICAgICAuZWR1Y2F0aW9uLXJvdyB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICAgICAgICBwYWRkaW5nLWJvdHRvbTogMjBweDtcbiAgICAgICAgfVxuICAgICAgICAuZWR1Y2F0aW9uLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgd2lkdGg6IDIwJTtcbiAgICAgICAgICBoZWlnaHQ6IDIwJTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNSU7XG4gICAgICAgIH1cbiAgICAgICAgLmVkdWNhdGlvbi10ZXh0LWNvbnRhaW5lciB7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgICAgICAgICB3aWR0aDogNzUlO1xuICAgICAgICAgIGRpc3BsYXk6IGlubGluZTtcbiAgICAgICAgfVxuICAgICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGgzIHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGg0IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAuZWR1Y2F0aW9uLXRleHQtY29udGFpbmVyIGg1IHtcbiAgICAgICAgICBwYWRkaW5nLXRvcDogMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDBweDtcbiAgICAgICAgfVxuICAgICAgICAucGljLWJveC02IHtcbiAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgICAgICAgIGJhY2tncm91bmQ6IHVybCgvc3RhdGljL3Byby1jb250YWN0LW1lLkpQRykgbm8tcmVwZWF0IGNlbnRlciByaWdodDtcbiAgICAgICAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICAgICAgICAgIGJhY2tncm91bmQtcG9zaXRpb246IHRvcCByaWdodCAyNSU7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgd2lkdGg6IDQwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgICAgLnRleHQtYm94LTYge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgICAgYmFja2dyb3VuZDogI0ZGRjsgXG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIHdpZHRoIDYwJTtcbiAgICAgICAgICBoZWlnaHQ6IDEwMCU7XG4gICAgICAgIH0gIFxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9MYXlvdXQ+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBIb21lcGFnZTsiXX0= */\n/*@ sourceURL=/Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/pages/index.js */"));

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ 4:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/rhuwellsamano/PERSONAL_PROJECTS/rhuwellsamano/rhuwellsamano/pages/index.js */"./pages/index.js");


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