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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "/jkW":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
}); // Identify /[param]/ in route string


const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

exports.isDynamicRoute = isDynamicRoute;

/***/ }),

/***/ "0Bsm":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = withRouter;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router = __webpack_require__("nOHt");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (false) { var name; }

  return WithRouterWrapper;
}

/***/ }),

/***/ 2:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("RNiq");


/***/ }),

/***/ "5Uuq":
/***/ (function(module, exports, __webpack_require__) {

var _Object$getOwnPropertyDescriptor = __webpack_require__("Jo+v");

var _Object$defineProperty = __webpack_require__("hfKm");

var _typeof = __webpack_require__("iZP3");

var _WeakMap = __webpack_require__("G4HQ");

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

/***/ "5Yp1":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__("HJQg");
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__("cDcd");
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__("xnum");
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__("YFqc");
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);

// CONCATENATED MODULE: ./components/Logo.js


var __jsx = external_react_default.a.createElement;


const Logo = () => __jsx("div", {
  className: "jsx-2840098951" + " " + "logo"
}, __jsx(link_default.a, {
  href: "/"
}, __jsx("a", {
  className: "jsx-2840098951"
}, __jsx("img", {
  src: "/static/portfolio-logo-2.svg",
  className: "jsx-2840098951"
}))), __jsx(style_default.a, {
  id: "2840098951"
}, [".logo.jsx-2840098951 img.jsx-2840098951{display:block;width:220px;margin-left:20px;}", "@media (max-width:480px){.logo.jsx-2840098951{display:inline-block;}.logo.jsx-2840098951 img.jsx-2840098951{margin-left:0px;padding-top:10px;}}"]));

/* harmony default export */ var components_Logo = (Logo);
// CONCATENATED MODULE: ./components/Nav.js


var Nav_jsx = external_react_default.a.createElement;


const Nav = () => Nav_jsx("ul", {
  className: "jsx-3033346441" + " " + "nav"
}, Nav_jsx("li", {
  className: "jsx-3033346441"
}, Nav_jsx(link_default.a, {
  href: "/"
}, Nav_jsx("div", {
  className: "jsx-3033346441" + " " + "icon-container"
}, Nav_jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "32px",
  height: "32px",
  viewBox: "0 0 460.298 460.297",
  className: "jsx-3033346441" + " " + "home"
}, Nav_jsx("g", {
  className: "jsx-3033346441"
}, Nav_jsx("g", {
  className: "jsx-3033346441"
}, Nav_jsx("path", {
  d: "M230.149,120.939L65.986,256.274c0,0.191-0.048,0.472-0.144,0.855c-0.094,0.38-0.144,0.656-0.144,0.852v137.041 c0,4.948,1.809,9.236,5.426,12.847c3.616,3.613,7.898,5.431,12.847,5.431h109.63V303.664h73.097v109.64h109.629 c4.948,0,9.236-1.814,12.847-5.435c3.617-3.607,5.432-7.898,5.432-12.847V257.981c0-0.76-0.104-1.334-0.288-1.707L230.149,120.939 z",
  className: "jsx-3033346441"
}), Nav_jsx("path", {
  d: "M457.122,225.438L394.6,173.476V56.989c0-2.663-0.856-4.853-2.574-6.567c-1.704-1.712-3.894-2.568-6.563-2.568h-54.816 c-2.666,0-4.855,0.856-6.57,2.568c-1.711,1.714-2.566,3.905-2.566,6.567v55.673l-69.662-58.245 c-6.084-4.949-13.318-7.423-21.694-7.423c-8.375,0-15.608,2.474-21.698,7.423L3.172,225.438c-1.903,1.52-2.946,3.566-3.14,6.136 c-0.193,2.568,0.472,4.811,1.997,6.713l17.701,21.128c1.525,1.712,3.521,2.759,5.996,3.142c2.285,0.192,4.57-0.476,6.855-1.998 L230.149,95.817l197.57,164.741c1.526,1.328,3.521,1.991,5.996,1.991h0.858c2.471-0.376,4.463-1.43,5.996-3.138l17.703-21.125 c1.522-1.906,2.189-4.145,1.991-6.716C460.068,229.007,459.021,226.961,457.122,225.438z",
  className: "jsx-3033346441"
}))), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
})), Nav_jsx("a", {
  className: "jsx-3033346441"
}, "Home")))), Nav_jsx("li", {
  className: "jsx-3033346441"
}, Nav_jsx(link_default.a, {
  href: "/projects"
}, Nav_jsx("div", {
  className: "jsx-3033346441" + " " + "icon-container"
}, Nav_jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "30px",
  height: "32px",
  viewBox: "0 0 319.876 319.875",
  className: "jsx-3033346441"
}, Nav_jsx("g", {
  className: "jsx-3033346441"
}, Nav_jsx("g", {
  className: "jsx-3033346441"
}, Nav_jsx("path", {
  d: "M177.958,200.608l130.467-51.227c6.322-2.478,11.451-8.374,11.451-13.163v-8.677V75.762 c0-6.788-5.507-12.298-12.298-12.298c0,0-5.242,0-11.697,0c-6.462,0-11.229-0.85-10.941-1.981 c0.174-0.676,0.265-1.384,0.265-2.102c0-5.672-5.513-10.263-12.298-10.263h-12.719c-6.791,0-12.297,4.591-12.297,10.263 c0,0.724,0.09,1.426,0.264,2.107c0.288,1.144-3.272,2-8.263,2.023c-3.303,0.012-6.461,0.024-9.025,0.03 c-1.976,0.006-4.017,0.012-5.999,0.012c-6.791,0.016-12.081-5.569-13.528-12.198c-6.863-31.36-40.058-29.73-40.058-29.73h-22.626 c-30.564,0-39.193,17.315-41.454,29.694c-1.225,6.683-6.059,12.25-12.844,12.25H89c-1.783,0-3.867-0.006-6.089-0.021 c-3.356-0.012-5.603-0.886-5.299-2.032c0.177-0.685,0.27-1.405,0.27-2.135c0-5.672-5.509-10.263-12.298-10.263H52.863 c-6.788,0-12.298,4.591-12.298,10.263c0,0.705,0.084,1.396,0.252,2.065c0.276,1.126-4.78,1.942-11.568,1.937 c-6.221-0.006-12.106-0.006-16.946-0.012C5.51,63.372,0,68.88,0,75.669v51.872c0,0,0,3.78,0,8.449 c0,4.666,5.17,10.337,11.553,12.661L154.96,200.89C161.34,203.214,171.642,203.094,177.958,200.608z M129.434,51.707 c2.669-5.191,8.02-10.115,18.732-10.115h10.698h1.084h10.697c10.713,0,16.057,4.924,18.729,10.115 c3.099,6.038-2.9,11.886-9.686,11.886h-19.75h-1.08h-19.732C132.331,63.593,126.329,57.745,129.434,51.707z",
  className: "jsx-3033346441"
}), Nav_jsx("path", {
  d: "M166.646,224.183c-1.075,0-2.144-0.187-3.165-0.559L11.56,168.285c-6.383-2.324-11.554,1.291-11.554,8.082v57.826v51.684 c0,6.791,5.504,12.297,12.298,12.297h51.041h13.364h154.164c6.786,0,17.811,0.049,24.596,0.061 c14.31,0.023,37.795,0.03,52.098,0.03c6.792,0.006,12.298-5.507,12.298-12.292v-51.779v-57.184c0-6.792-5.116-10.286-11.445-7.812 l-138.422,54.344C168.927,223.972,167.786,224.183,166.646,224.183z",
  className: "jsx-3033346441"
}))), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
})), Nav_jsx("a", {
  className: "jsx-3033346441"
}, "Projects")))), Nav_jsx("li", {
  className: "jsx-3033346441"
}, Nav_jsx(link_default.a, {
  href: "/about"
}, Nav_jsx("div", {
  className: "jsx-3033346441" + " " + "icon-container"
}, Nav_jsx("svg", {
  version: "1.1",
  id: "Capa_1",
  xmlns: "http://www.w3.org/2000/svg",
  x: "0px",
  y: "0px",
  width: "30px",
  height: "32px",
  viewBox: "0 0 45.958 45.958",
  className: "jsx-3033346441"
}, Nav_jsx("g", {
  className: "jsx-3033346441"
}, Nav_jsx("g", {
  className: "jsx-3033346441"
}, Nav_jsx("path", {
  d: "M39.287,41.955l-1.626-12.76c-0.556-4.375-4.278-7.61-8.688-7.61H16.985c-4.41,0-8.133,3.235-8.688,7.61L6.67,41.979 c-0.112,0.894,0.163,2.018,0.758,2.692c0.596,0.675,1.453,1.287,2.353,1.287h26.395c0.9,0,1.757-0.624,2.354-1.299 C39.125,43.982,39.4,42.85,39.287,41.955z",
  className: "jsx-3033346441"
}), Nav_jsx("circle", {
  cx: "22.978",
  cy: "9.33",
  r: "9.33",
  className: "jsx-3033346441"
}))), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
}), Nav_jsx("g", {
  className: "jsx-3033346441"
})), Nav_jsx("a", {
  className: "jsx-3033346441"
}, "About Me")))), Nav_jsx(style_default.a, {
  id: "3033346441"
}, [".nav.jsx-3033346441{font-family:'Varta';margin:0px 0 0;list-style:none;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;background:#232A34;}", ".icon-container.jsx-3033346441{display:block;text-align:center;padding:15px 40px;line-height:1.2;border-left-style:solid;border-width:1px;border-left-color:#303947;}", "div.jsx-3033346441:hover svg.jsx-3033346441{fill:#f2ab37;}", ".nav.jsx-3033346441 li.jsx-3033346441 div.jsx-3033346441:hover a.jsx-3033346441{color:#f2ab37;}", "svg.jsx-3033346441{display:inline-block;fill:#505765;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}", "svg.jsx-3033346441:hover{fill:#f2ab37;}", ".nav.jsx-3033346441 li.jsx-3033346441 div.jsx-3033346441 a.jsx-3033346441{display:block;height:auto;font-size:16px;color:#505765;font-weight:300;text-align:center;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}", "@media (max-width:480px){.icon-container.jsx-3033346441{display:block;text-align:center;padding:15px 25px;line-height:1.0;border-left-style:none;border-width:0px;border-left-color:#303947;line-height:1.0;}.nav.jsx-3033346441{display:inline-block;width:100%;}.nav.jsx-3033346441 li.jsx-3033346441{display:inline-block;}.nav.jsx-3033346441 li.jsx-3033346441 a.jsx-3033346441{font-size:18px;}.nav.jsx-3033346441 li.jsx-3033346441 div.jsx-3033346441 a.jsx-3033346441{display:block;height:auto;font-size:16px;color:#505765;font-weight:300;text-align:center;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}}"]));

/* harmony default export */ var components_Nav = (Nav);
// CONCATENATED MODULE: ./components/Header.js


var Header_jsx = external_react_default.a.createElement;



const Header = () => Header_jsx("div", {
  className: "jsx-3409983924" + " " + "header-wrapper"
}, Header_jsx(components_Logo, null), Header_jsx(components_Nav, null), Header_jsx(style_default.a, {
  id: "3409983924"
}, [".header-wrapper.jsx-3409983924{width:100%;background:#232A34;opacity:95%;padding:0px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;overflow-x:hidden;}", "@media (max-width:600px){.header-wrapper.jsx-3409983924{display:block;text-align:center;}}"]));

/* harmony default export */ var components_Header = (Header);
// CONCATENATED MODULE: ./components/Footer.js


var Footer_jsx = external_react_default.a.createElement;

const Footer = () => Footer_jsx("div", {
  className: "jsx-24943890" + " " + "footer-wrapper"
}, Footer_jsx("div", {
  className: "jsx-24943890" + " " + "copyright"
}, "\xA9 ", new Date().getFullYear(), " Rhuwell Samano"), Footer_jsx(style_default.a, {
  id: "24943890"
}, [".footer-wrapper.jsx-24943890{text-align:center;margin-top:10px;padding:10px 30px;}", ".copyright.jsx-24943890{margin-bottom:10px;}"]));

/* harmony default export */ var components_Footer = (Footer);
// CONCATENATED MODULE: ./components/Layout.js


var Layout_jsx = external_react_default.a.createElement;




const Layout = props => Layout_jsx("div", {
  className: "jsx-247493601" + " " + "site-wrapper"
}, Layout_jsx(head_default.a, null, Layout_jsx("title", {
  className: "jsx-247493601"
}, props.title ? `${props.title} | ` : '', "Rhuwell Samano"), props.description ? Layout_jsx("meta", {
  name: "description",
  content: props.description,
  className: "jsx-247493601"
}) : null), Layout_jsx(components_Header, null), Layout_jsx("div", {
  className: "jsx-247493601" + " " + "content-wrapper"
}, props.children), Layout_jsx(components_Footer, null), Layout_jsx(style_default.a, {
  id: "247493601"
}, ["@font-face{font-family:'devicons';src:url(\"../fonts/devicons.eot?xqxft6\");src:url(\"../fonts/devicons.eot?#iefixxqxft6\") format(\"embedded-opentype\"),url(\"../fonts/devicons.woff?xqxft6\") format(\"woff\"),url(\"../fonts/devicons.ttf?xqxft6\") format(\"truetype\"),url(\"../fonts/devicons.svg?xqxft6#devicons\") format(\"svg\");font-weight:normal;font-style:normal;}", "@font-face{font-family:'Varta';src:url('/fonts/Varta.ttf');font-style:normal;font-display:swap;}", "@font-face{font-family:'HomepageBaukasten-Bold';src:url('/fonts/HomepageBaukasten-Bold.ttf');font-style:semibold;font-display:swap;}", "@font-face{font-family:'Larsseit';src:url('/fonts/Larsseit.ttf');font-style:normal;font-display:swap;}", "@font-face{font-family:'Galano';src:url('/fonts/Galano.otf');font-style:normal;font-display:swap;}", "@font-face{font-family:'Cocogoose';src:url('/fonts/Cocogoose.ttf');font-style:normal;font-display:swap;}", "@font-face{font-family:'CarreNoir';src:url('/fonts/CarreNoir.otf');font-display:swap;}", "*,*::before,*::after{box-sizing:border-box;}", "html{width:100%;height:100%;margin:0px;padding:0px;-webkit-scroll-behavior:smooth;-moz-scroll-behavior:smooth;-ms-scroll-behavior:smooth;scroll-behavior:smooth;overflow-x:hidden;}", "body{margin:0;padding:0;font-size:18px;line-height:1.8;background:#f1f1f1;color:#454545;font-family:'Varta';text-rendering:optimizeLegibility;overflow-x:hidden;}", "a{color:#FF7519;-webkit-text-decoration:none;text-decoration:none;}", "a:hover{color:#FF6600;}", "p{margin:0 0 10px;}", "img{max-width:100%;overflow-x:hidden;}", "ul{margin-left:0px;padding-left:5px;}", "li{text-align:left;}", ".content-wrapper{min-height:600px;text-align:center;}"]));

/* harmony default export */ var components_Layout = __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "G4HQ":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("lhFH");

/***/ }),

/***/ "HJQg":
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ "Jo+v":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Z6Kq");

/***/ }),

/***/ "KI45":
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "LX0d":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("Xql+");

/***/ }),

/***/ "P5f7":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "RNiq":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("HJQg");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("cDcd");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("YFqc");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("5Yp1");


var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;



const Homepage = () => __jsx(_components_Layout__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"], {
  title: "Homepage"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "cover"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "hello"
}, __jsx("h1", {
  className: "jsx-2990483942"
}, "BRILLIANTLY DESIGNED AND BUILT."), __jsx("div", {
  className: "jsx-2990483942" + " " + "subtitle"
}, "RHUWELL SAMANO \u2022 FULL STACK SOFTWARE ENGINEER"), __jsx("a", {
  href: "#jump-to-top",
  className: "jsx-2990483942" + " " + "button"
}, "LEARN MORE"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container"
}, __jsx("div", {
  id: "jump-to-top",
  className: "jsx-2990483942" + " " + "text-box"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-left"
}, __jsx("h2", {
  className: "jsx-2990483942"
}, "About."), __jsx("h3", {
  className: "jsx-2990483942"
}, "CONNECTED THROUGH CREATION"), __jsx("h4", {
  className: "jsx-2990483942"
}, "\"What you leave behind is not what is engraved in stone monuments, but what is woven into the lives of others.\" -- Pericles"), __jsx("h5", {
  className: "jsx-2990483942"
}, "My name is Rhuwell Samano and I'm a Full Stack Software Engineer. I specialize in React and mainly code in Javascript. I have a particularly rare combination of skills that allow me to have valuable insight into many, if not all, types of digital projects. "), __jsx("h5", {
  className: "jsx-2990483942"
}, "By using Software Engineering, Digital Marketing and Web & App Design, I'm able to understand all of the moving parts of a project and connect them together into a beautiful handcrafted system that fuels and grows powerful brands. "), __jsx("h5", {
  className: "jsx-2990483942"
}, "I'm passionate about creating world-class experiences for various communities using websites, applications, and digital media. The most important person I care about and create for is the end-user. I thoroughly enjoy working with others towards achieving that goal, no matter the project."), __jsx("div", {
  className: "jsx-2990483942" + " " + ""
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about"
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button"
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container-work"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-2"
}), __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-2"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-right"
}, __jsx("h2", {
  className: "jsx-2990483942" + " " + "work-h2"
}, "Work."), __jsx("h3", {
  className: "jsx-2990483942"
}, "RECENT PROJECTS"), __jsx("div", {
  className: "jsx-2990483942" + " " + "projects-row-container"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "projects-row-1"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "project-image-container"
}, __jsx("img", {
  src: "/static/blink-health-mockup.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "project-image-container"
}, __jsx("img", {
  src: "/static/sick-fits-mockup.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
}))), __jsx("div", {
  className: "jsx-2990483942" + " " + "projects-row-1"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "project-image-container"
}, __jsx("img", {
  src: "/static/majin-sushi-mockup.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "project-image-container"
}, __jsx("img", {
  src: "/static/linkedup-mockup.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})))), __jsx("div", {
  className: "jsx-2990483942" + " " + ""
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects"
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button"
}, "View My Projects"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-2-mobile"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-3"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-left"
}, __jsx("h2", {
  className: "jsx-2990483942"
}, "Skills."), __jsx("h3", {
  className: "jsx-2990483942"
}, "THE PERFECT TRIFECTA"), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-image-container"
}, __jsx("img", {
  src: "/static/software-engineer.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-text-container"
}, __jsx("h3", {
  className: "jsx-2990483942"
}, "SOFTWARE ENGINEERING"), __jsx("h5", {
  className: "jsx-2990483942"
}, "From the front-end to the back-end, I'm able to dive into all sorts of projects and work with what's there - or start from scratch."))), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-image-container"
}, __jsx("img", {
  src: "/static/digital-marketing.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-text-container"
}, __jsx("h3", {
  className: "jsx-2990483942"
}, "DIGITAL MARKETING"), __jsx("h5", {
  className: "jsx-2990483942"
}, "By using modern digital tools, ancient human psychology, and classic storytelling - I can grow leads and increase the bottom-line."))), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-image-container"
}, __jsx("img", {
  src: "/static/designer.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "skills-text-container"
}, __jsx("h3", {
  className: "jsx-2990483942"
}, "WEB & APP DESIGN"), __jsx("h5", {
  className: "jsx-2990483942"
}, "From a sketch on a napkin or a whiteboard, I'm able to design and craft ideas into mock-ups using best practices in the industry."))), __jsx("div", {
  className: "jsx-2990483942" + " " + ""
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about"
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button"
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-3"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container-tech"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-4"
}), __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-4"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-right"
}, __jsx("h2", {
  className: "jsx-2990483942"
}, "Tech."), __jsx("h3", {
  className: "jsx-2990483942"
}, "TOOLS OF THE TRADE"), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-rows-container"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-react"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-python"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-django"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-ruby_on_rails"
}))), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-javascript_badge"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-nodejs"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-html5"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-css3"
}))), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-npm"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-swift"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-photoshop"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "tech-image-container"
}, __jsx("span", {
  className: "jsx-2990483942" + " " + "devicons devicons-illustrator"
})))), __jsx("h5", {
  className: "jsx-2990483942"
}, "GitHub Contributions - Updated 1/21/20"), __jsx("img", {
  src: "/static/github-calendar.png",
  alt: "",
  className: "jsx-2990483942"
}), __jsx("div", {
  className: "jsx-2990483942" + " " + ""
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/projects"
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button"
}, "View My Projects"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-4-mobile"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-5"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-left"
}, __jsx("h2", {
  className: "jsx-2990483942"
}, "Education."), __jsx("h3", {
  className: "jsx-2990483942"
}, "KNOWLEDGE IS KEY"), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "education-image-container"
}, __jsx("img", {
  src: "/static/flatironschool.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-text-container"
}, __jsx("h3", {
  className: "jsx-2990483942"
}, "FLATIRON SCHOOL"), __jsx("h4", {
  className: "jsx-2990483942"
}, "Known as the \"Ivy League of coding bootcamps\""), __jsx("h5", {
  className: "jsx-2990483942"
}, "Full Stack Software Engineering | React, Javascript, Ruby on Rails"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "education-image-container"
}, __jsx("img", {
  src: "/static/teamtreehouse.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-text-container"
}, __jsx("h3", {
  className: "jsx-2990483942"
}, "TEAMTREEHOUSE"), __jsx("h4", {
  className: "jsx-2990483942"
}, "A top-tier online school for learning code"), __jsx("h5", {
  className: "jsx-2990483942"
}, "Full Stack Javascript Development & Full Stack Web Development"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-row"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "education-image-container"
}, __jsx("img", {
  src: "/static/csi.png",
  alt: "",
  className: "jsx-2990483942" + " " + "project-image"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "education-text-container"
}, __jsx("h3", {
  className: "jsx-2990483942"
}, "COLLEGE OF STATEN ISLAND"), __jsx("h4", {
  className: "jsx-2990483942"
}, "The single, largest campus in all of New York City"), __jsx("h5", {
  className: "jsx-2990483942"
}, "BS: Business Marketing (2012-2016)"))), __jsx("div", {
  className: "jsx-2990483942" + " " + ""
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
  href: "/about"
}, __jsx("a", {
  className: "jsx-2990483942" + " " + "button"
}, "Read More About Me"))))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-5"
})), __jsx("div", {
  className: "jsx-2990483942" + " " + "section-container-contact"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-6"
}), __jsx("div", {
  className: "jsx-2990483942" + " " + "text-box-6"
}, __jsx("div", {
  className: "jsx-2990483942" + " " + "text-right"
}, __jsx("h2", {
  className: "jsx-2990483942"
}, "Contact."), __jsx("h3", {
  className: "jsx-2990483942"
}, "HOW CAN I HELP YOU?"), __jsx("h5", {
  className: "jsx-2990483942"
}, "I hope you've enjoyed learning more about me! ", __jsx("br", {
  className: "jsx-2990483942"
}), "It's definitely just scratching the surface of my abilities and definitely my personality, too. ", __jsx("br", {
  className: "jsx-2990483942"
}), "The industry has coined a term for someone", __jsx("br", {
  className: "jsx-2990483942"
}), " with my skillset but I refuse to be labeled as a Unicorn. \uD83D\uDE05 ", __jsx("br", {
  className: "jsx-2990483942"
}), "Jokes aside, I'm very well-rounded and I approach", __jsx("br", {
  className: "jsx-2990483942"
}), " challenges head-on with an aura of high-spirits and ", __jsx("br", {
  className: "jsx-2990483942"
}), "unshakeable confidence."), __jsx("h5", {
  className: "jsx-2990483942"
}, "What challenges are you currently facing? ", __jsx("br", {
  className: "jsx-2990483942"
}), "Is there anything you think I can help you with?", __jsx("br", {
  className: "jsx-2990483942"
}), "Do you think I would be a good addition", __jsx("br", {
  className: "jsx-2990483942"
}), " to your engineering team? \uD83E\uDD14"), __jsx("h5", {
  className: "jsx-2990483942"
}, "If so, I'm currently available for new opportunities ", __jsx("br", {
  className: "jsx-2990483942"
}), "as a Full Stack Software Engineer!"), __jsx("h5", {
  className: "jsx-2990483942"
}, "If you would like to get in touch with me, ", __jsx("br", {
  className: "jsx-2990483942"
}), "I'm always checking my e-mails!"), __jsx("h3", {
  className: "jsx-2990483942"
}, "rhuwell.samano@gmail.com"), __jsx("h2", {
  className: "jsx-2990483942" + " " + "contact-h2"
}, "Thank you!"))), __jsx("div", {
  className: "jsx-2990483942" + " " + "pic-box-6-mobile"
})), __jsx(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
  id: "2990483942"
}, [".cover.jsx-2990483942{position:relative;min-height:130vh;background:transparent url(/static/pro-cover.JPG) no-repeat center center;background-size:cover;background-attachment:fixed;background-position:top;background-repeat:no-repeat;background-size:cover;text-align:left;}", ".hello.jsx-2990483942{color:#FFF;line-height:1.4;display:inline-block;position:relative;top:200px;left:50px;padding-left:80px;padding-right:80px;opacity:100%;}", ".hello.jsx-2990483942 h1.jsx-2990483942{line-height:1.0;font-family:'Galano';color:#FFF;font-size:92px;margin:0 0 0px 0;padding:0px;}", ".subtitle.jsx-2990483942{font-family:\"HomepageBaukasten-Bold\";font-size:16px;margin-top:10px;margin-left:5px;}", "a.button.jsx-2990483942{font-family:'Larsseit';display:inline-block;text-transform:uppercase;font-size:16px;background:#F5AD25;margin-left:5px;margin-top:30px;padding:10px 40px;top:25px;color:#FFF;border-radius:5px;}", ".text-left.jsx-2990483942{text-align:left;padding:20px 130px;}", ".text-right.jsx-2990483942{text-align:right;padding:20px 130px;}", "h2.jsx-2990483942{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}", ".work-h2.jsx-2990483942{font-family:'Galano';font-size:120px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}", ".contact-h2.jsx-2990483942{font-family:'Galano';font-size:80px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}", "h3.jsx-2990483942{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;}", ".contact-h5.jsx-2990483942{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;margin-top:0px;}", "h4.jsx-2990483942{font-family:'CarreNoir';font-size:20px;color:#a6b1b9;padding:0px 0;margin-bottom:0px;}", "h5.jsx-2990483942{font-family:'Varta';font-size:16px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;}", "@media (max-width:480px){.hello.jsx-2990483942{font-family:'Galano';font-size:18px;padding:20px;}h1.jsx-2990483942{font-size:28px;}}", ".section-container.jsx-2990483942{height:140vh;display:block;max-width:100%;margin:0 auto;}", ".section-container-work.jsx-2990483942{height:130vh;display:block;max-width:100%;margin:0 auto;}", ".section-container-tech.jsx-2990483942{height:130vh;display:block;max-width:100%;margin:0 auto;}", ".section-container-contact.jsx-2990483942{height:140vh;display:block;max-width:100%;margin:0 auto;}", ".text-box.jsx-2990483942{box-sizing:border-box;background:#FFF;float:left;width:60%;height:100%;}", ".pic-box.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-about-me.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:right;width:40%;height:100%;}", ".text-box-2.jsx-2990483942{box-sizing:border-box;background:#f2efef;float:right;width:60%;height:100%;}", ".text-box-2.jsx-2990483942 h2.jsx-2990483942{color:#FFF;}", ".pic-box-2.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:left;width:40%;height:100%;}", "@media (max-width:480px){.pic-box-2-mobile.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:left;width:100%;height:100%;}}", ".projects-row-1.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".project-image-container.jsx-2990483942{width:100%;}", ".project-image.jsx-2990483942{width:100%;padding:7px;padding-top:0px;}", ".text-box-3.jsx-2990483942{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}", ".pic-box-3.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-skills.JPG) no-repeat center right;background-size:cover;background-position:top right 35%;float:right;width:40%;height:100%;}", ".pic-box-4.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}", ".skills-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}", ".skills-image-container.jsx-2990483942{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}", ".skills-text-container.jsx-2990483942{line-height:1.2;width:75%;display:inline;}", ".skills-text-container.jsx-2990483942 h3.jsx-2990483942{padding-top:0px;margin-top:0px;}", ".skills-text-container.jsx-2990483942 h5.jsx-2990483942{padding-top:0px;margin-top:0px;}", ".text-box-4.jsx-2990483942{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}", ".tech-rows-container.jsx-2990483942{margin-top:30px;}", ".tech-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}", ".tech-image-container.jsx-2990483942{width:30%;padding:5px;}", ".tech-image-container.jsx-2990483942 span.jsx-2990483942{font-size:100px;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}", ".tech-image-container.jsx-2990483942 span.jsx-2990483942:hover{color:#F5AD25;}", ".pic-box-5.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-education.JPG) no-repeat center right;background-size:cover;background-position:bottom right 20%;float:left;width:40%;height:100%;}", ".text-box-5.jsx-2990483942{box-sizing:border-box;background:#1C212A;float:left;width:60%;height:100%;}", ".text-box-5.jsx-2990483942 h2.jsx-2990483942{font-size:85px;}", ".education-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}", ".education-image-container.jsx-2990483942{width:20%;height:20%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}", ".education-text-container.jsx-2990483942{line-height:1.2;width:75%;display:inline;}", ".education-text-container.jsx-2990483942 h3.jsx-2990483942{padding-top:0px;margin-top:0px;}", ".education-text-container.jsx-2990483942 h4.jsx-2990483942{padding-top:0px;margin-top:0px;}", ".education-text-container.jsx-2990483942 h5.jsx-2990483942{padding-top:0px;margin-top:0px;}", ".pic-box-6.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:40%;height:100%;}", ".text-box-6.jsx-2990483942{box-sizing:border-box;background:#FFF;float:right;width:60%;height:100%;}", "@media (max-width:480px){.cover.jsx-2990483942{box-sizing:border-box;background:transparent url(/static/pro-cover.JPG) no-repeat center right;background-size:cover;background-position:top right 24%;text-align:left;height:80vh;}.hello.jsx-2990483942{color:#FFF;line-height:1.4;display:inline-block;position:relative;top:500px;left:10px;padding-left:20px;padding-right:80px;opacity:100%;}.hello.jsx-2990483942 h1.jsx-2990483942{line-height:1.0;font-family:'Galano';color:#FFF;font-size:30px;margin:0 0 0px 0;padding:0px;}.subtitle.jsx-2990483942{font-family:\"HomepageBaukasten-Bold\";font-size:10px;margin-top:10px;margin-left:0px;}a.button.jsx-2990483942{font-family:'Larsseit';display:inline-block;text-transform:uppercase;font-size:10px;background:#F5AD25;margin-left:5px;margin-top:30px;padding:8px 30px;top:25px;color:#FFF;border-radius:5px;}.text-left.jsx-2990483942{text-align:left;padding:5px 40px;}.text-right.jsx-2990483942{text-align:right;padding:5px 40px;}h2.jsx-2990483942{font-family:'Galano';font-size:60px;color:#F2F2F2;padding-top:30px;margin-bottom:10px;line-height:0.3;}.work-h2.jsx-2990483942{font-family:'Galano';font-size:60px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}.contact-h2.jsx-2990483942{font-family:'Galano';font-size:40px;color:#F2F2F2;padding-top:0px;margin-bottom:10px;line-height:0.3;}h3.jsx-2990483942{font-family:'Galano';font-size:12px;color:#343D4F;padding:5px 0;margin-bottom:0px;}.contact-h5.jsx-2990483942{font-family:'Galano';font-size:30px;color:#343D4F;padding:0px 0;margin-bottom:0px;margin-top:0px;}h4.jsx-2990483942{font-family:'CarreNoir';font-size:12px;color:#a6b1b9;padding:0px 0;margin-bottom:0px;line-height:1.0;}h5.jsx-2990483942{font-family:'Varta';font-size:12px;color:#a6b1b9;line-height:2.2;padding:0px 0;margin-bottom:0px;}@media (max-width:480px){.hello.jsx-2990483942{font-family:'Galano';font-size:18px;padding:20px;}h1.jsx-2990483942{font-size:28px;}}.section-container.jsx-2990483942{height:130vh;display:block;max-width:100%;margin:0 0;}.section-container-work.jsx-2990483942{height:90vh;display:block;max-width:100%;margin:0 0;}.section-container-tech.jsx-2990483942{height:100vh;display:block;max-width:100%;margin:0 0;}.section-container-contact.jsx-2990483942{height:180vh;display:block;max-width:100%;margin:0 auto;}.text-box.jsx-2990483942{box-sizing:border-box;background:#FFF;float:left;width:100%;height:100%;}.pic-box.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-about-me.JPG) no-repeat center right;background-size:cover;background-position:top right 28%;float:right;width:100%;height:100vh;}.text-box-2.jsx-2990483942{box-sizing:border-box;background:#f2efef;float:left;width:100%;height:100%;}.text-box-2.jsx-2990483942 h2.jsx-2990483942{color:#FFF;}.pic-box-2.jsx-2990483942{display:none;box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;width:100%;height:100%;}.pic-box-2-mobile.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-work.JPG) no-repeat center right;background-size:cover;background-position:top right 20%;float:right;height:90vh;}.projects-row-1.jsx-2990483942{display:justify;}.project-image-container.jsx-2990483942{width:50%;}.project-image.jsx-2990483942{width:100%;padding:7px;padding-top:0px;}.text-box-3.jsx-2990483942{box-sizing:border-box;background:#1C212A;float:left;width:100%;height:100%;}.pic-box-3.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-skills.JPG) no-repeat center right;background-size:cover;background-position:top right 35%;float:right;width:100%;height:100%;}.pic-box-4.jsx-2990483942{display:none;box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.pic-box-4-mobile.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-tech.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.skills-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.skills-image-container.jsx-2990483942{width:80px;height:60px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5px;}.skills-text-container.jsx-2990483942{line-height:1.2;width:75%;display:inline;}.skills-text-container.jsx-2990483942 h3.jsx-2990483942{padding-top:0px;margin-top:0px;}.skills-text-container.jsx-2990483942 h5.jsx-2990483942{padding-top:0px;margin-top:0px;}.text-box-4.jsx-2990483942{box-sizing:border-box;background:#FFF;float:right;width:100%;height:100%;}.tech-rows-container.jsx-2990483942{margin-top:30px;}.tech-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;}.tech-image-container.jsx-2990483942{width:30%;padding:5px;}.tech-image-container.jsx-2990483942 span.jsx-2990483942{font-size:60px;-o-transition:.3s;-ms-transition:.3s;-moz-transition:.3s;-webkit-transition:.3s;-webkit-transition:.3s;transition:.3s;}.tech-image-container.jsx-2990483942 span.jsx-2990483942:hover{color:#F5AD25;}.pic-box-5.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-education.JPG) no-repeat center right;background-size:cover;background-position:bottom right 20%;float:left;width:100%;height:90vh;}.text-box-5.jsx-2990483942{box-sizing:border-box;background:#1C212A;float:left;width:100%;height:100%;}.text-box-5.jsx-2990483942 h2.jsx-2990483942{font-size:50px;}.education-row.jsx-2990483942{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:100%;padding-top:40px;padding-bottom:20px;}.education-image-container.jsx-2990483942{height:70px;width:80px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-right:5%;}.education-text-container.jsx-2990483942{line-height:1.2;width:75%;display:inline;}.education-text-container.jsx-2990483942 h3.jsx-2990483942{padding-top:0px;margin-top:0px;}.education-text-container.jsx-2990483942 h4.jsx-2990483942{padding-top:0px;margin-top:0px;}.education-text-container.jsx-2990483942 h5.jsx-2990483942{padding-top:0px;margin-top:0px;}.pic-box-6.jsx-2990483942{display:none;box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100%;}.pic-box-6-mobile.jsx-2990483942{box-sizing:border-box;background:url(/static/pro-contact-me.JPG) no-repeat center right;background-size:cover;background-position:top right 25%;float:left;width:100%;height:100vh;}.text-box-6.jsx-2990483942{box-sizing:border-box;background:#FFF;float:right;width:100%;height:100%;}}"]));

/* harmony default export */ __webpack_exports__["default"] = (Homepage);

/***/ }),

/***/ "SqZg":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("o5io");

/***/ }),

/***/ "TUA0":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/define-property");

/***/ }),

/***/ "UXZV":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("dGr4");

/***/ }),

/***/ "XVgq":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("gHn/");

/***/ }),

/***/ "Xql+":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/map");

/***/ }),

/***/ "YFqc":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("cTJO")


/***/ }),

/***/ "YTqd":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "Z6Kq":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/get-own-property-descriptor");

/***/ }),

/***/ "Z7t5":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("vqFK");

/***/ }),

/***/ "aC71":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/promise");

/***/ }),

/***/ "bzos":
/***/ (function(module, exports) {

module.exports = require("url");

/***/ }),

/***/ "cDcd":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "cTJO":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.default = void 0;

var _map = _interopRequireDefault(__webpack_require__("LX0d"));

var _url = __webpack_require__("bzos");

var _react = _interopRequireWildcard(__webpack_require__("cDcd"));

var _propTypes = _interopRequireDefault(__webpack_require__("rf6O"));

var _router = _interopRequireDefault(__webpack_require__("nOHt"));

var _rewriteUrlForExport = __webpack_require__("P5f7");

var _utils = __webpack_require__("g/15");

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

    if (false) {}

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

if (false) { var exact, warn; }

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "dGr4":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/assign");

/***/ }),

/***/ "dZ6Y":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/*
MIT License

Copyright (c) Jason Miller (https://jasonformat.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

var _Object$create = __webpack_require__("SqZg");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "eVuF":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("aC71");

/***/ }),

/***/ "elyg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Promise = __webpack_require__("eVuF");

var _Object$assign = __webpack_require__("UXZV");

var _Object$defineProperty = __webpack_require__("hfKm");

var __importDefault = this && this.__importDefault || function (mod) {
  return mod && mod.__esModule ? mod : {
    "default": mod
  };
};

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");

const mitt_1 = __importDefault(__webpack_require__("dZ6Y"));

const utils_1 = __webpack_require__("g/15");

const rewrite_url_for_export_1 = __webpack_require__("P5f7");

const is_dynamic_1 = __webpack_require__("/jkW");

const route_matcher_1 = __webpack_require__("gguc");

const route_regex_1 = __webpack_require__("YTqd");

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

      if (false) {}

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
        if (false) {}

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

          if (false) {} else {
            console.error(error);
          }

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

        if (false) {} // @ts-ignore pathname is always defined


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
    if (false) {}

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

      if (false) {}

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
        if (false) {}

        return;
      } // Prefetch is not supported in development mode because it would trigger on-demand-entries


      if (false) {} // @ts-ignore pathname is always defined

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

/***/ "g/15":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

const url_1 = __webpack_require__("bzos");
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
  if (false) {} // when called from _app `ctx` is nested in `ctx`


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

  if (false) {}

  return props;
}

exports.loadGetInitialProps = loadGetInitialProps;
exports.urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];

function formatWithValidation(url, options) {
  if (false) {}

  return url_1.format(url, options);
}

exports.formatWithValidation = formatWithValidation;
exports.SUPPORTS_PERFORMANCE = typeof performance !== 'undefined';
exports.SUPPORTS_PERFORMANCE_USER_TIMING = exports.SUPPORTS_PERFORMANCE && typeof performance.mark === 'function' && typeof performance.measure === 'function';

/***/ }),

/***/ "gHn/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol/iterator");

/***/ }),

/***/ "gguc":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$keys = __webpack_require__("pLtp");

var _Object$defineProperty = __webpack_require__("hfKm");

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

/***/ "hfKm":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("TUA0");

/***/ }),

/***/ "htGi":
/***/ (function(module, exports, __webpack_require__) {

var _Object$assign = __webpack_require__("UXZV");

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

/***/ "iZP3":
/***/ (function(module, exports, __webpack_require__) {

var _Symbol$iterator = __webpack_require__("XVgq");

var _Symbol = __webpack_require__("Z7t5");

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

/***/ "lhFH":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/weak-map");

/***/ }),

/***/ "nOHt":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__("5Uuq");

var _interopRequireDefault = __webpack_require__("KI45");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__("htGi"));

var _defineProperty = _interopRequireDefault(__webpack_require__("hfKm"));

var _react = _interopRequireDefault(__webpack_require__("cDcd"));

var _router2 = _interopRequireWildcard(__webpack_require__("elyg"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__("qOIg");

var _withRouter = _interopRequireDefault(__webpack_require__("0Bsm"));

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

/***/ "o5io":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/create");

/***/ }),

/***/ "pLtp":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("qJj/");

/***/ }),

/***/ "qJj/":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/object/keys");

/***/ }),

/***/ "qOIg":
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _Object$defineProperty = __webpack_require__("hfKm");

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

const React = __importStar(__webpack_require__("cDcd"));

exports.RouterContext = React.createContext(null);

/***/ }),

/***/ "rf6O":
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),

/***/ "vqFK":
/***/ (function(module, exports) {

module.exports = require("core-js/library/fn/symbol");

/***/ }),

/***/ "xnum":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ })

/******/ });