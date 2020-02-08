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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("DbAB");


/***/ }),

/***/ "DbAB":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

__jsx("style", {
  jsx: true
}, `
      .cover {
        position: relative;
        min-height: 130vh;
        background: transparent url(/static/pro-about-me.JPG) no-repeat center center;
        background-size: cover;
        background-attachment: fixed;
        background-position: top;
        background-repeat: no-repeat;
        background-size: cover;
        text-align: left;
      }
      .hello {
        color: #FFF;
        line-height: 1.4;
        display: inline-block;
        position: relative;
        top: 200px;
        left: 50px;
        padding-left: 80px;
        padding-right: 80px;
        opacity: 100%;

      }
      .hello h1 {
        line-height: 1.0;
        font-family: 'Galano';
        color: #FFF;
        font-size: 92px;
        margin: 0 0 0px 0;
        padding: 0px;
      }
      .subtitle {
        font-family: "HomepageBaukasten-Bold";
        font-size: 16px;
        margin-top: 10px;
        margin-left: 5px;
      }
      a.button {
        font-family: 'Larsseit';
        display: inline-block;
        text-transform: uppercase;
        font-size: 16px;
        background: #F5AD25;
        margin-left: 5px;
        margin-top: 30px;
        padding: 10px 40px;
        top: 25px;
        color: #FFF;
        border-radius: 5px;
      }
      .text-left {
        text-align: left;
        padding: 20px 130px;
      }
      .text-right {
        text-align: right;
        padding: 20px 130px;
      }
      h2 {
        font-family: 'Galano';
        font-size: 120px;
        color: #F2F2F2;
        padding-top: 30px;
        margin-bottom: 10px;
        line-height: 0.3;
      }
      .blink-h2 {
        font-family: 'Galano';
        font-size: 90px;
        color: #F2F2F2;
        padding-top: 30px;
        margin-bottom: 10px;
        line-height: 0.3;
      }
      .contact-h2 {
        font-family: 'Galano';
        font-size: 80px;
        color: #F2F2F2;
        padding-top: 0px;
        margin-bottom: 10px;
        line-height: 0.3;
      }
      h3 {
        font-family: 'Galano';
        font-size: 30px;
        color: #343D4F;
        padding: 0px 0;
        margin-bottom: 0px;
      }
      h4 {
        font-family: 'CarreNoir';
        font-size: 20px;
        color: #a6b1b9;
        padding: 0px 0;
        margin-bottom: 0px;
      }
      h5 {
        font-family: 'Varta';
        font-size: 16px;
        color: #a6b1b9;
        line-height: 2.2;
        padding: 0px 0;
        margin-bottom: 0px;
      }
      .features-h5 {
        font-family: 'Varta';
        font-size: 16px;
        color: #a6b1b9;
        line-height: 2.2;
        padding: 0px 0;
        margin-bottom: 0px;
        margin-top: 0px;
      }
      @media (max-width: 480px) {
        .hello {
          font-family: 'Galano';
          font-size: 18px;
          padding: 20px;
        }
        h1 {
          font-size: 28px;
        }
      }
      .section-container {
        height: 130vh;
        display: block;
        max-width: 100%;
        margin: 0 auto;
      }
      .text-box {
        box-sizing: border-box;
        background: #FFF;
        float: left;
        width: 60%;
        height: 100%;
      }
      .pic-box {
        box-sizing: border-box;
        background: url(/static/pro-cover.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 20%;
        float: right;
        width 40%;
        height: 100%;
      }
      .text-box-2 {
        box-sizing: border-box;
        background: #f2efef; 
        float: right;
        width 60%;
        height: 100%;
      }
      .text-box-2 h2 {
        color: #FFF;
      }
      .pic-box-2 {
        box-sizing: border-box;
        background: url(/static/pro-work.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 20%;
        float: left;
        width: 40%;
        height: 100%;
      }
      .projects-row-1 {
        display: flex;
      }
      .project-image-container {
        width: 100%;
      }
      .project-image {
        width: 100%;
        padding: 7px;
        padding-top: 0px;
      }
      .text-box-3 {
        box-sizing: border-box;
        background: #1C212A;
        float: left;
        width: 60%;
        height: 100%;
      }
      .pic-box-3 {
        box-sizing: border-box;
        background: url(/static/pro-skills.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 35%;
        float: right;
        width 40%;
        height: 100%;
      }
      .pic-box-4 {
        box-sizing: border-box;
        background: url(/static/pro-tech.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 25%;
        float: left;
        width: 40%;
        height: 100%;
      }
      .skills-row {
        display: flex;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 20px;
      }
      .skills-image-container {
        width: 20%;
        height: 20%;
        display: flex;
        margin-right: 5%;
      }
      .skills-text-container {
        line-height: 1.2;
        width: 75%;
        display: inline;
      }
      .skills-text-container h3 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .skills-text-container h5 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .text-box-4 {
        box-sizing: border-box;
        background: #FFF; 
        float: right;
        width 60%;
        height: 100%;
      }
      .tech-rows-container {
        margin-top: 30px;
      }
      .tech-row {
        display: flex;
      }
      .tech-image-container {
        width: 30%;
        padding: 5px;
      }
      .tech-image-container span {
        font-size: 100px;
        -o-transition:.3s;
        -ms-transition:.3s;
        -moz-transition:.3s;
        -webkit-transition:.3s;
        transition:.3s;
      }
      .tech-image-container span:hover {
        color: #F5AD25;
      }
      .pic-box-5 {
        box-sizing: border-box;
        background: url(/static/pro-education.JPG) no-repeat center right;
        background-size: cover;
        background-position: bottom right 20%;
        float: left;
        width: 40%;
        height: 100%;
      }
      .text-box-5 {
        box-sizing: border-box;
        background: #1C212A;
        float: left;
        width: 60%;
        height: 100%;
      }
      .text-box-5 h2 {
        font-size: 85px;
      }
      .education-row {
        display: flex;
        width: 100%;
        padding-top: 40px;
        padding-bottom: 20px;
      }
      .education-image-container {
        width: 20%;
        height: 20%;
        display: flex;
        margin-right: 5%;
      }
      .education-text-container {
        line-height: 1.2;
        width: 75%;
        display: inline;
      }
      .education-text-container h3 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .education-text-container h4 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .education-text-container h5 {
        padding-top: 0px;
        margin-top: 0px;
      }
      .pic-box-6 {
        box-sizing: border-box;
        background: url(/static/pro-contact-me.JPG) no-repeat center right;
        background-size: cover;
        background-position: top right 25%;
        float: left;
        width: 40%;
        height: 100%;
      }
      .text-box-6 {
        box-sizing: border-box;
        background: #FFF; 
        float: right;
        width 60%;
        height: 100%;
      }
    `);

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });