(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(window, function() {
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

/***/ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/msg.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/vue-loader/lib??vue-loader-options!./src/msg.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      items: [],
      defaults: {
        title: 'Message',
        position: 'top-right',
        timeout: 8000,
        btn: {
          ok: ' OK ',
          cancel: ' Cancel'
        },
        callback: null
      },
      msg: null,
      pool: {
        'top-right': [],
        'top-left': [],
        'top-center': [],
        'bottom-left': [],
        'bottom-right': [],
        'bottom-center': []
      }
    };
  },

  methods: {
    success(message) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.add(message, Object.assign(option, {
        theme: 'v-notify-success'
      }));
    },

    info(message) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.add(message, Object.assign(option, {
        theme: 'v-notify-info'
      }));
    },

    warning(message) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.add(message, Object.assign(option, {
        theme: 'v-notify-warning'
      }));
    },

    error(message) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.add(message, Object.assign(option, {
        theme: 'v-notify-error'
      }));
    },

    alert(message) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.add(message, Object.assign(option, {
        type: 'alert'
      }));
    },

    confirm(message) {
      var option = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
      return this.add(message, Object.assign(option, {
        type: 'confirm'
      }));
    },

    add(message, option) {
      return new Promise((resolve, reject) => {
        if (!this.$parent) {
          this.$mount();
          document.body.appendChild(this.$el);
        }

        var item = Object.assign({}, this.defaults, option, {
          message,
          key: "".concat(Date.now(), "-").concat(Math.random()),
          callback: resolve
        });

        if (item.type == 'alert' || item.type == 'confirm') {
          this.msg = item;
        } else {
          this.pool[item.position].push(item);
          if (item.timeout > 0) setTimeout(() => this.remove(item), item.timeout);
        }
      });
    },

    close(val) {
      if (this.msg.callback) {
        this.msg.callback({
          data: val
        });
      }

      this.msg = null;
    },

    remove(item) {
      var i = this.pool[item.position].indexOf(item);

      if (i >= 0) {
        this.pool[item.position].splice(i, 1);
      }
    }

  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/msg.vue?vue&type=template&id=4341f290&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./src/msg.vue?vue&type=template&id=4341f290& ***!
  \**********************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "v-msg-container" },
    [
      _c(
        "div",
        { staticClass: "v-msg-container v-msg-top-right" },
        [
          _c(
            "transition-group",
            {
              attrs: {
                "enter-active-class": "animated quick fadeInRight",
                "leave-active-class": "animated quick fadeOutRight"
              }
            },
            _vm._l(_vm.pool["top-right"], function(t) {
              var _obj
              return _c(
                "div",
                {
                  key: t.key,
                  staticClass: "v-msg-box",
                  class: ((_obj = {}), (_obj[t.theme] = t.theme), _obj)
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        "aria-label": "Close",
                        "data-dismiss": "alert",
                        type: "button"
                      },
                      on: {
                        click: function($event) {
                          return _vm.remove(t)
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  t.title
                    ? _c("h6", { staticClass: "v-msg-title" }, [
                        _vm._v(_vm._s(t.title))
                      ])
                    : _vm._e(),
                  _vm._v(
                    "\n                " + _vm._s(t.message) + "\n            "
                  )
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "v-msg-container v-msg-top-left" },
        [
          _c(
            "transition-group",
            {
              attrs: {
                "enter-active-class": "animated fadeInLeft",
                "leave-active-class": "animated fadeOutLeft"
              }
            },
            _vm._l(_vm.pool["top-left"], function(t) {
              var _obj
              return _c(
                "div",
                {
                  key: t.key,
                  staticClass: "v-msg-box",
                  class: ((_obj = {}), (_obj[t.theme] = t.theme), _obj)
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        "aria-label": "Close",
                        "data-dismiss": "alert",
                        type: "button"
                      },
                      on: {
                        click: function($event) {
                          return _vm.remove(t)
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  t.title
                    ? _c("h6", { staticClass: "v-msg-title" }, [
                        _vm._v(_vm._s(t.title))
                      ])
                    : _vm._e(),
                  _vm._v(
                    "\n                " + _vm._s(t.message) + "\n            "
                  )
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "v-msg-container v-msg-bottom-left" },
        [
          _c(
            "transition-group",
            {
              attrs: {
                "enter-active-class": "animated fadeInLeft",
                "leave-active-class": "animated fadeOutLeft"
              }
            },
            _vm._l(_vm.pool["bottom-left"], function(t) {
              var _obj
              return _c(
                "div",
                {
                  key: t.key,
                  staticClass: "v-msg-box",
                  class: ((_obj = {}), (_obj[t.theme] = t.theme), _obj)
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        "aria-label": "Close",
                        "data-dismiss": "alert",
                        type: "button"
                      },
                      on: {
                        click: function($event) {
                          return _vm.remove(t)
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  t.title
                    ? _c("h6", { staticClass: "v-msg-title" }, [
                        _vm._v(_vm._s(t.title))
                      ])
                    : _vm._e(),
                  _vm._v(
                    "\n                " + _vm._s(t.message) + "\n            "
                  )
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "v-msg-container v-msg-bottom-right" },
        [
          _c(
            "transition-group",
            {
              attrs: {
                "enter-active-class": "animated fadeInRight",
                "leave-active-class": "animated fadeOutRight"
              }
            },
            _vm._l(_vm.pool["bottom-right"], function(t) {
              var _obj
              return _c(
                "div",
                {
                  key: t.key,
                  staticClass: "v-msg-box",
                  class: ((_obj = {}), (_obj[t.theme] = t.theme), _obj)
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        "aria-label": "Close",
                        "data-dismiss": "alert",
                        type: "button"
                      },
                      on: {
                        click: function($event) {
                          return _vm.remove(t)
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  t.title
                    ? _c("h6", { staticClass: "v-msg-title" }, [
                        _vm._v(_vm._s(t.title))
                      ])
                    : _vm._e(),
                  _vm._v(
                    "\n                " + _vm._s(t.message) + "\n            "
                  )
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "v-msg-container v-msg-top-center" },
        [
          _c(
            "transition-group",
            {
              attrs: {
                "enter-active-class": "animated fadeInUp",
                "leave-active-class": "animated fadeOutDown"
              }
            },
            _vm._l(_vm.pool["top-center"], function(t) {
              var _obj
              return _c(
                "div",
                {
                  key: t.key,
                  staticClass: "v-msg-box",
                  class: ((_obj = {}), (_obj[t.theme] = t.theme), _obj)
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        "aria-label": "Close",
                        "data-dismiss": "alert",
                        type: "button"
                      },
                      on: {
                        click: function($event) {
                          return _vm.remove(t)
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  t.title
                    ? _c("h6", { staticClass: "v-msg-title" }, [
                        _vm._v(_vm._s(t.title))
                      ])
                    : _vm._e(),
                  _vm._v(
                    "\n                " + _vm._s(t.message) + "\n            "
                  )
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "v-msg-container v-msg-bottom-center" },
        [
          _c(
            "transition-group",
            {
              attrs: {
                "enter-active-class": "animated fadeInUp",
                "leave-active-class": "animated fadeOut"
              }
            },
            _vm._l(_vm.pool["bottom-center"], function(t) {
              var _obj
              return _c(
                "div",
                {
                  key: t.key,
                  staticClass: "v-msg-box",
                  class: ((_obj = {}), (_obj[t.theme] = t.theme), _obj)
                },
                [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: {
                        "aria-label": "Close",
                        "data-dismiss": "alert",
                        type: "button"
                      },
                      on: {
                        click: function($event) {
                          return _vm.remove(t)
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  t.title
                    ? _c("h6", { staticClass: "v-msg-title" }, [
                        _vm._v(_vm._s(t.title))
                      ])
                    : _vm._e(),
                  _vm._v(
                    "\n                " + _vm._s(t.message) + "\n            "
                  )
                ]
              )
            }),
            0
          )
        ],
        1
      ),
      _vm._v(" "),
      _vm.msg
        ? _c(
            "transition",
            {
              attrs: {
                "enter-active-class": "animated fadeIn",
                "leave-active-class": "animated fadeOut"
              }
            },
            [_c("div", { staticClass: "v-msg-backdrop" })]
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.msg
        ? _c(
            "transition",
            {
              attrs: {
                "enter-active-class": "animated fadeInDown",
                "leave-active-class": "animated fadeOut"
              }
            },
            [
              _c("div", { staticClass: "v-msg-container v-msg-alert" }, [
                _c("div", { staticClass: "v-msg-box" }, [
                  _c(
                    "button",
                    {
                      staticClass: "close",
                      attrs: { "aria-label": "Close", type: "button" },
                      on: {
                        click: function($event) {
                          return _vm.close(0)
                        }
                      }
                    },
                    [
                      _c("span", { attrs: { "aria-hidden": "true" } }, [
                        _vm._v("×")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _vm.msg.title
                    ? _c("h6", { staticClass: "v-msg-title" }, [
                        _vm._v(_vm._s(_vm.msg.title))
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("p", { staticClass: "v-msg-content" }, [
                    _vm._v(_vm._s(_vm.msg.message))
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "v-msg-bottom" }, [
                    _c(
                      "button",
                      {
                        staticClass: "btn btn-primary",
                        on: {
                          click: function($event) {
                            return _vm.close(1)
                          }
                        }
                      },
                      [_vm._v(_vm._s(_vm.msg.btn.ok))]
                    ),
                    _vm._v(" "),
                    _vm.msg.type == "confirm"
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-light float-right",
                            on: {
                              click: function($event) {
                                return _vm.close(0)
                              }
                            }
                          },
                          [_vm._v(_vm._s(_vm.msg.btn.cancel))]
                        )
                      : _vm._e()
                  ])
                ])
              ])
            ]
          )
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
        injectStyles.call(
          this,
          (options.functional ? this.parent : this).$root.$options.shadowRoot
        )
      }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _msg_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msg.css */ "./src/msg.css");
/* harmony import */ var _msg_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_msg_css__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _msg_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msg.vue */ "./src/msg.vue");
// var Msg = require('./msg.vue');



_msg_vue__WEBPACK_IMPORTED_MODULE_1__["default"].install = function (Vue) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  Vue.prototype.$Msg = new (Vue.extend(_msg_vue__WEBPACK_IMPORTED_MODULE_1__["default"]))({
    propsData: options
  });
};

/* harmony default export */ __webpack_exports__["default"] = (_msg_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

/***/ }),

/***/ "./src/msg.css":
/*!*********************!*\
  !*** ./src/msg.css ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/msg.vue":
/*!*********************!*\
  !*** ./src/msg.vue ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _msg_vue_vue_type_template_id_4341f290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./msg.vue?vue&type=template&id=4341f290& */ "./src/msg.vue?vue&type=template&id=4341f290&");
/* harmony import */ var _msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./msg.vue?vue&type=script&lang=js& */ "./src/msg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _msg_vue_vue_type_template_id_4341f290___WEBPACK_IMPORTED_MODULE_0__["render"],
  _msg_vue_vue_type_template_id_4341f290___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/msg.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/msg.vue?vue&type=script&lang=js&":
/*!**********************************************!*\
  !*** ./src/msg.vue?vue&type=script&lang=js& ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/babel-loader/lib!../node_modules/vue-loader/lib??vue-loader-options!./msg.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js!./node_modules/vue-loader/lib/index.js?!./src/msg.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_node_modules_vue_loader_lib_index_js_vue_loader_options_msg_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/msg.vue?vue&type=template&id=4341f290&":
/*!****************************************************!*\
  !*** ./src/msg.vue?vue&type=template&id=4341f290& ***!
  \****************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_msg_vue_vue_type_template_id_4341f290___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../node_modules/vue-loader/lib??vue-loader-options!./msg.vue?vue&type=template&id=4341f290& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./src/msg.vue?vue&type=template&id=4341f290&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_msg_vue_vue_type_template_id_4341f290___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_msg_vue_vue_type_template_id_4341f290___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

/******/ });
});
//# sourceMappingURL=v-msg.js.map