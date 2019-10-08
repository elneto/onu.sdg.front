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

/***/ "./components/layout.js":
/*!******************************!*\
  !*** ./components/layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! prop-types */ "prop-types");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _scss_theme_layout_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../scss/theme/layout.scss */ "./scss/theme/layout.scss");
/* harmony import */ var _scss_theme_layout_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_scss_theme_layout_scss__WEBPACK_IMPORTED_MODULE_2__);
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */




const Layout = ({
  children
}) => {
  return __jsx(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, children);
};

Layout.propTypes = {
  children: prop_types__WEBPACK_IMPORTED_MODULE_1___default.a.node.isRequired
};
/* harmony default export */ __webpack_exports__["default"] = (Layout);

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

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  } else {
    var newObj = {};

    if (obj != null) {
      for (var key in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, key)) {
          var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : {};

          if (desc.get || desc.set) {
            _Object$defineProperty(newObj, key, desc);
          } else {
            newObj[key] = obj[key];
          }
        }
      }
    }

    newObj["default"] = obj;
    return newObj;
  }
}

module.exports = _interopRequireWildcard;

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

var _rewriteUrlForExport = __webpack_require__(/*! next-server/dist/lib/router/rewrite-url-for-export */ "next-server/dist/lib/router/rewrite-url-for-export");

var _utils = __webpack_require__(/*! next-server/dist/lib/utils */ "next-server/dist/lib/utils");
/* global __NEXT_DATA__ */


function isLocal(href) {
  const url = (0, _url.parse)(href, false, true);
  const origin = (0, _url.parse)((0, _utils.getLocationOrigin)(), false, true);
  return !url.host || url.protocol === origin.protocol && url.host === origin.host;
}

function memoizedFormatUrl(formatFunc) {
  let lastHref = null;
  let lastAs = null;
  let lastResult = null;
  return (href, as) => {
    if (lastResult && href === lastHref && as === lastAs) {
      return lastResult;
    }

    const result = formatFunc(href, as);
    lastHref = href;
    lastAs = as;
    lastResult = result;
    return result;
  };
}

function formatUrl(url) {
  return url && typeof url === 'object' ? (0, _utils.formatWithValidation)(url) : url;
}

let observer;
const listeners = new _map.default();
const IntersectionObserver = false ? undefined : null;

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

      const cb = listeners.get(entry.target);

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

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    observer.unobserve(el);
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
      const {
        nodeName,
        target
      } = e.currentTarget;

      if (nodeName === 'A' && (target && target !== '_self' || e.metaKey || e.ctrlKey || e.shiftKey || e.nativeEvent && e.nativeEvent.which === 2)) {
        // ignore click for new tab / new window behavior
        return;
      }

      let {
        href,
        as
      } = this.formatUrls(this.props.href, this.props.as);

      if (!isLocal(href)) {
        // ignore click if it's outside our scope (e.g. https://google.com)
        return;
      }

      const {
        pathname
      } = window.location;
      href = (0, _url.resolve)(pathname, href);
      as = as ? (0, _url.resolve)(pathname, as) : href;
      e.preventDefault(); //  avoid scroll for urls with anchor refs

      let {
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

    const {
      pathname
    } = window.location;
    const {
      href: parsedHref
    } = this.formatUrls(this.props.href, this.props.as);
    const href = (0, _url.resolve)(pathname, parsedHref);

    _router.default.prefetch(href);
  }

  render() {
    let {
      children
    } = this.props;
    const {
      href,
      as
    } = this.formatUrls(this.props.href, this.props.as); // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

    if (typeof children === 'string') {
      children = _react.default.createElement("a", null, children);
    } // This will return the first child, if multiple are provided it will throw an error


    const child = _react.Children.only(children);

    const props = {
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
      } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
      // defined, we specify the current 'href', so that repetition is not needed by the user

    };

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
  const warn = (0, _utils.execOnce)(console.error); // This module gets removed by webpack.IgnorePlugin

  const exact = __webpack_require__(/*! prop-types-exact */ "prop-types-exact");

  Link.propTypes = exact({
    href: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]).isRequired,
    as: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.object]),
    prefetch: _propTypes.default.bool,
    replace: _propTypes.default.bool,
    shallow: _propTypes.default.bool,
    passHref: _propTypes.default.bool,
    scroll: _propTypes.default.bool,
    children: _propTypes.default.oneOfType([_propTypes.default.element, (props, propName) => {
      const value = props[propName];

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

var _router2 = _interopRequireWildcard(__webpack_require__(/*! next-server/dist/lib/router/router */ "next-server/dist/lib/router/router"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! next-server/dist/lib/router-context */ "next-server/dist/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

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
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = function () {
    const router = getRouter();
    return router[field](...arguments);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, function () {
      const eventField = "on" + event.charAt(0).toUpperCase() + event.substring(1);
      const _singletonRouter = singletonRouter;

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
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
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


const createRouter = function createRouter() {
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
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
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

var _propTypes = _interopRequireDefault(__webpack_require__(/*! prop-types */ "prop-types"));

function withRouter(ComposedComponent) {
  class WithRouteWrapper extends _react.default.Component {
    constructor() {
      super(...arguments);
      this.context = void 0;
    }

    render() {
      return _react.default.createElement(ComposedComponent, (0, _extends2.default)({
        router: this.context.router
      }, this.props));
    }

  }

  WithRouteWrapper.displayName = void 0;
  WithRouteWrapper.getInitialProps = void 0;
  WithRouteWrapper.contextTypes = {
    router: _propTypes.default.object
  };
  WithRouteWrapper.getInitialProps = ComposedComponent.getInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouteWrapper.displayName = "withRouter(" + name + ")";
  }

  return WithRouteWrapper;
}

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
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _components_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/layout */ "./components/layout.js");
var _jsxFileName = "/home/pburgos/PycharmProjects/onu.sdg.front/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




const IndexPage = () => __jsx(_components_layout__WEBPACK_IMPORTED_MODULE_2__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex justify-content-around container flex-column flex-sm-row mt-5",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "COMPONENTS"), __jsx("nav", {
  className: "nav flex-column",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-header/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Header")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#navbar",
  "data-toggle": "collapse",
  "data-target": "#navbar",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Navbar"), __jsx("div", {
  className: "collapse",
  id: "navbar",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "header/page-navbar/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Navbar"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "header/page-navbarV2/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "NavbarV2"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "header/page-language-navbar/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "Language Navbar")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-footer/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 34
  },
  __self: undefined
}, "Footer")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-footer-links/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 37
  },
  __self: undefined
}, "Footer Links")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 39
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-button/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 40
  },
  __self: undefined
}, "Button")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-social-icons/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
}, "Social Icons")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#form",
  "data-toggle": "collapse",
  "data-target": "#form",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, "Form"), __jsx("div", {
  className: "collapse",
  id: "form",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "form/page-input/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, "Input"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "form/page-select/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 57
  },
  __self: undefined
}, "Select"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "form/page-checkbox/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 58
  },
  __self: undefined
}, "Checkbox")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#labels",
  "data-toggle": "collapse",
  "data-target": "#labels",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}, "Labels"), __jsx("div", {
  className: "collapse",
  id: "labels",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 71
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 72
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "labels/page-label-points/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 73
  },
  __self: undefined
}, "Label Points"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "labels/page-label-status/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, "Label Status"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "labels/page-label-toast/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, "Label Toast"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "labels/page-label-likes/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, "Label Likes"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "labels/page-label-related-goals/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, "Label Related Goals"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "labels/page-label-numeric-light/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, "Label Numeric Light")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#tabs",
  "data-toggle": "collapse",
  "data-target": "#tabs",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 87
  },
  __self: undefined
}, "Tabs"), __jsx("div", {
  className: "collapse",
  id: "tabs",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 95
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "tabs/page-tabs-01/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
}, "Tabs-01 - Horizontal Tab"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "tabs/page-tabs-02/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 98
  },
  __self: undefined
}, "Tabs-02 - Light Tab"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "tabs/page-tabs-03/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "Tabs-03 - Buttons Tab"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "tabs/page-tabs-04/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, "Tabs-04 - Vertical Tab")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 104
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-stepper/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 105
  },
  __self: undefined
}, "Stepper")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#news",
  "data-toggle": "collapse",
  "data-target": "#news",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 108
  },
  __self: undefined
}, "News"), __jsx("div", {
  className: "collapse",
  id: "news",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "news/page-news-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 118
  },
  __self: undefined
}, "News-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "news/page-news-02/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, "News-02"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "news/page-news-03/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, "News-03"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "news/page-news-04/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 121
  },
  __self: undefined
}, "News-04"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "news/page-news-05/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, "News-05")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#events",
  "data-toggle": "collapse",
  "data-target": "#events",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 127
  },
  __self: undefined
}, "Events"), __jsx("div", {
  className: "collapse",
  id: "events",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 135
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "events/page-events-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
}, "Event-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "events/page-events-02/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 138
  },
  __self: undefined
}, "Event-02"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "events/page-events-03/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}, "Event-03"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "events/page-events-04/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, "Event-04"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "events/page-events-05/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 141
  },
  __self: undefined
}, "Event-05"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "events/page-events-06/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 142
  },
  __self: undefined
}, "Event-06"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "events/page-events-07/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 143
  },
  __self: undefined
}, "Event-07")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#goals",
  "data-toggle": "collapse",
  "data-target": "#goals",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 148
  },
  __self: undefined
}, "Goals"), __jsx("div", {
  className: "collapse",
  id: "goals",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 156
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 157
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "goals/page-goals-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 158
  },
  __self: undefined
}, "Goal-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "goals/page-goals-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, "Goal-02"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "goals/page-goals-03",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, "Goal-03 - Related"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "goals/page-goals-04",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, "Goal-04 - Register"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "goals/page-goals-05",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162
  },
  __self: undefined
}, "Goal-05 - Targets ")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 166
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#featured",
  "data-toggle": "collapse",
  "data-target": "#featured",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}, "Featured"), __jsx("div", {
  className: "collapse",
  id: "featured",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 175
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 176
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "featured/page-featured-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 177
  },
  __self: undefined
}, "Featured-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "featured/page-featured-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 178
  },
  __self: undefined
}, "Featured-02")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#jumbotrons",
  "data-toggle": "collapse",
  "data-target": "#jumbotrons",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 183
  },
  __self: undefined
}, "Jumbotrons"), __jsx("div", {
  className: "collapse",
  id: "jumbotrons",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 193
  },
  __self: undefined
}, "Jumbotron-01 - Home"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 196
  },
  __self: undefined
}, "Jumbotron-02 - Goals"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-03",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 199
  },
  __self: undefined
}, "Jumbotron-03 - Event type 1"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-04",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 202
  },
  __self: undefined
}, "Jumbotron-04 - Event type 2"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-05",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 205
  },
  __self: undefined
}, "Jumbotron-05 - Event type 3"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-06",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  },
  __self: undefined
}, "Jumbotron-06 - Partnerships"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-07",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211
  },
  __self: undefined
}, "Jumbotron-07 - Topics"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-08",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214
  },
  __self: undefined
}, "Jumbotron-08 - Action Networks"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-09",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}, "Jumbotron-09 - Special Event"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-10",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 220
  },
  __self: undefined
}, "Jumbotron-10 - Special Event (about)"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "jumbotrons/page-jumbotron-11",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 223
  },
  __self: undefined
}, "Jumbotron-11 - States")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 229
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#publications",
  "data-toggle": "collapse",
  "data-target": "#publications",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 230
  },
  __self: undefined
}, "Publications"), __jsx("div", {
  className: "collapse",
  id: "publications",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 238
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 239
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "publications/page-publications-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 240
  },
  __self: undefined
}, "Publication-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "publications/page-publications-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 243
  },
  __self: undefined
}, "Publication-02")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 249
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#topics",
  "data-toggle": "collapse",
  "data-target": "#topics",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 250
  },
  __self: undefined
}, "Topics"), __jsx("div", {
  className: "collapse",
  id: "topics",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 258
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 259
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "topics/page-topic-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 260
  },
  __self: undefined
}, "Topic-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "topics/page-topic-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 261
  },
  __self: undefined
}, "Topic-02 - Related")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 265
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#partnerships",
  "data-toggle": "collapse",
  "data-target": "#partnerships",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 266
  },
  __self: undefined
}, "Partnerships"), __jsx("div", {
  className: "collapse",
  id: "partnerships",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 274
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 275
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "partnerships/page-partnership-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 276
  },
  __self: undefined
}, "Partnership-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "partnerships/page-partnership-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 279
  },
  __self: undefined
}, "Partnership-02"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "partnerships/page-partnership-03",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 282
  },
  __self: undefined
}, "Partnership-03"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "partnerships/page-partnership-04",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 285
  },
  __self: undefined
}, "Partnership-04")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 291
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#charts",
  "data-toggle": "collapse",
  "data-target": "#charts",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 292
  },
  __self: undefined
}, "Charts"), __jsx("div", {
  className: "collapse",
  id: "charts",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 300
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 301
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "charts/page-chart-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 302
  },
  __self: undefined
}, "Chart-01 "), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "charts/page-chart-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 303
  },
  __self: undefined
}, "Chart-02 - Partnerships - By years")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 309
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-comment/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 310
  },
  __self: undefined
}, "Comment")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 312
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#documents",
  "data-toggle": "collapse",
  "data-target": "#documents",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 313
  },
  __self: undefined
}, "Documents"), __jsx("div", {
  className: "collapse",
  id: "documents",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 321
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 322
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "documents/page-document-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 323
  },
  __self: undefined
}, "Document-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "documents/page-document-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 324
  },
  __self: undefined
}, "Document-02"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "documents/page-document-03",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 325
  },
  __self: undefined
}, "Document-03")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 329
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#informative-links",
  "data-toggle": "collapse",
  "data-target": "#informative-links",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 330
  },
  __self: undefined
}, "Informative Links"), __jsx("div", {
  className: "collapse",
  id: "informative-links",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 338
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 343
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "infolinks/page-infolink-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 344
  },
  __self: undefined
}, "Informative Link-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "infolinks/page-infolink-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 347
  },
  __self: undefined
}, "Informative Link-02"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "infolinks/page-infolink-03",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 350
  },
  __self: undefined
}, "Informative Link-03")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 356
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-timeline/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 357
  },
  __self: undefined
}, "TimeLine")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 359
  },
  __self: undefined
}, __jsx("a", {
  className: "dropdown-toggle",
  href: "#content-modules",
  "data-toggle": "collapse",
  "data-target": "#content-modules",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 360
  },
  __self: undefined
}, "Content Modules"), __jsx("div", {
  className: "collapse",
  id: "content-modules",
  "aria-expanded": "false",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 368
  },
  __self: undefined
}, __jsx("div", {
  className: "d-flex flex-column pl-4",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 373
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "content-modules/page-content-module-01",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 374
  },
  __self: undefined
}, "Content Module-01"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "content-modules/page-content-module-02",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 377
  },
  __self: undefined
}, "Content Module-02"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "content-modules/page-content-module-03",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 380
  },
  __self: undefined
}, "Content Module-03"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "content-modules/page-content-module-04",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 383
  },
  __self: undefined
}, "Content Module-04")))), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 389
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-states/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 390
  },
  __self: undefined
}, "States")))), __jsx("div", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 394
  },
  __self: undefined
}, __jsx("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 395
  },
  __self: undefined
}, "VIEWS"), __jsx("nav", {
  className: "nav flex-column",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 396
  },
  __self: undefined
}, __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 397
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 398
  },
  __self: undefined
}, "Home")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 400
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-goals",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 401
  },
  __self: undefined
}, "Goals")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 403
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-goal-detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 404
  },
  __self: undefined
}, "Goal Detail")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 406
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-topics",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 407
  },
  __self: undefined
}, "Topics")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 409
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-topic-detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 410
  },
  __self: undefined
}, "Topic Detail")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 412
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-events",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 413
  },
  __self: undefined
}, "Events")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 415
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-event-type-1",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 416
  },
  __self: undefined
}, "Event Type 1")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 418
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-event-type-2",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 419
  },
  __self: undefined
}, "Event Type 2")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 421
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-event-type-3",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 422
  },
  __self: undefined
}, "Event Type 3")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 424
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-register",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 425
  },
  __self: undefined
}, "Register")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 427
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-news",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 428
  },
  __self: undefined
}, "News")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 430
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-news-article",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 431
  },
  __self: undefined
}, "News Article")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 433
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-partnerships ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 434
  },
  __self: undefined
}, "Partnerships")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 436
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-partnerships-general ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 437
  },
  __self: undefined
}, "Partnerships General")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 439
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-partnerships-description ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 440
  },
  __self: undefined
}, "Partnerships Description")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 444
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-states-block ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 445
  },
  __self: undefined
}, "States")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 447
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-state-detail ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 448
  },
  __self: undefined
}, "State Detail")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 450
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-action-networks ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 451
  },
  __self: undefined
}, "Action Networks")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 453
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-action-networks-detail ",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 454
  },
  __self: undefined
}, "Action Networks Detail")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 458
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/404",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 459
  },
  __self: undefined
}, "404")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 461
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-special-event",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 462
  },
  __self: undefined
}, "Special Event")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 464
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-special-event-detail",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 465
  },
  __self: undefined
}, "Special Event Detail")), __jsx("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 467
  },
  __self: undefined
}, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
  href: "/page-technology",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 468
  },
  __self: undefined
}, "Technology"))))));

/* harmony default export */ __webpack_exports__["default"] = (IndexPage);

/***/ }),

/***/ "./scss/theme/layout.scss":
/*!********************************!*\
  !*** ./scss/theme/layout.scss ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/pburgos/PycharmProjects/onu.sdg.front/pages/index.js */"./pages/index.js");


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

/***/ "next-server/dist/lib/router-context":
/*!******************************************************!*\
  !*** external "next-server/dist/lib/router-context" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router-context");

/***/ }),

/***/ "next-server/dist/lib/router/rewrite-url-for-export":
/*!*********************************************************************!*\
  !*** external "next-server/dist/lib/router/rewrite-url-for-export" ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/rewrite-url-for-export");

/***/ }),

/***/ "next-server/dist/lib/router/router":
/*!*****************************************************!*\
  !*** external "next-server/dist/lib/router/router" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/router/router");

/***/ }),

/***/ "next-server/dist/lib/utils":
/*!*********************************************!*\
  !*** external "next-server/dist/lib/utils" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next-server/dist/lib/utils");

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