module.exports =
/******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "8875":
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;// addapted from the document.currentScript polyfill by Adam Miller
// MIT license
// source: https://github.com/amiller-gh/currentScript-polyfill

// added support for Firefox https://bugzilla.mozilla.org/show_bug.cgi?id=1620505

(function (root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
}(typeof self !== 'undefined' ? self : this, function () {
  function getCurrentScript () {
    var descriptor = Object.getOwnPropertyDescriptor(document, 'currentScript')
    // for chrome
    if (!descriptor && 'currentScript' in document && document.currentScript) {
      return document.currentScript
    }

    // for other browsers with native support for currentScript
    if (descriptor && descriptor.get !== getCurrentScript && document.currentScript) {
      return document.currentScript
    }
  
    // IE 8-10 support script readyState
    // IE 11+ & Firefox support stack trace
    try {
      throw new Error();
    }
    catch (err) {
      // Find the second match for the "at" string to get file src url from stack.
      var ieStackRegExp = /.*at [^(]*\((.*):(.+):(.+)\)$/ig,
        ffStackRegExp = /@([^@]*):(\d+):(\d+)\s*$/ig,
        stackDetails = ieStackRegExp.exec(err.stack) || ffStackRegExp.exec(err.stack),
        scriptLocation = (stackDetails && stackDetails[1]) || false,
        line = (stackDetails && stackDetails[2]) || false,
        currentLocation = document.location.href.replace(document.location.hash, ''),
        pageSource,
        inlineScriptSourceRegExp,
        inlineScriptSource,
        scripts = document.getElementsByTagName('script'); // Live NodeList collection
  
      if (scriptLocation === currentLocation) {
        pageSource = document.documentElement.outerHTML;
        inlineScriptSourceRegExp = new RegExp('(?:[^\\n]+?\\n){0,' + (line - 2) + '}[^<]*<script>([\\d\\D]*?)<\\/script>[\\d\\D]*', 'i');
        inlineScriptSource = pageSource.replace(inlineScriptSourceRegExp, '$1').trim();
      }
  
      for (var i = 0; i < scripts.length; i++) {
        // If ready state is interactive, return the script tag
        if (scripts[i].readyState === 'interactive') {
          return scripts[i];
        }
  
        // If src matches, return the script tag
        if (scripts[i].src === scriptLocation) {
          return scripts[i];
        }
  
        // If inline source matches, return the script tag
        if (
          scriptLocation === currentLocation &&
          scripts[i].innerHTML &&
          scripts[i].innerHTML.trim() === inlineScriptSource
        ) {
          return scripts[i];
        }
      }
  
      // If no match, return null
      return null;
    }
  };

  return getCurrentScript
}));


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  var currentScript = window.document.currentScript
  if (true) {
    var getCurrentScript = __webpack_require__("8875")
    currentScript = getCurrentScript()

    // for backward compatibility, because previously we directly included the polyfill
    if (!('currentScript' in document)) {
      Object.defineProperty(document, 'currentScript', { get: getCurrentScript })
    }
  }

  var src = currentScript && currentScript.src.match(/(.+\/)[^/]+\.js(\?.*)?$/)
  if (src) {
    __webpack_require__.p = src[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"2ac7c2ca-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/index.vue?vue&type=template&id=69f2c18b&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"pdc_wrapper",staticStyle:{"display":"contents"},on:{"!click":function($event){return _vm.tapClick($event)}}},[_vm._t("default",[_vm._v(" put something here!!!like a button!!! ")],{"release":_vm.release,"status":_vm.status,"customInfo":_vm.customInfo,"sendInfo":_vm.sendInfo,"isEmitter":_vm.isEmitter})],2)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/lib/index.vue?vue&type=template&id=69f2c18b&

// CONCATENATED MODULE: ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/thread-loader/dist/cjs.js!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/lib/index.vue?vue&type=script&lang=js&
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
// counting status
var READY = "READY";
var RUNNING = "RUNING";
var END = "END"; // counting status

var GROUP = {};

var noop = function noop() {};

function log(message) {
  if (false) {}
}

/* harmony default export */ var libvue_type_script_lang_js_ = ({
  props: {
    debounce: {
      type: Number,
      default: 0
    },
    group: {
      type: String
    },
    stopPropagation: {
      type: Boolean,
      default: true
    },
    doNothing: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      status: false,
      counting: READY,
      isEmitter: false,
      timer: undefined,
      customInfo: undefined,
      leaveGroup: noop,
      op: undefined,
      GROUP: GROUP
    };
  },
  watch: {
    group: function group() {
      this.leaveGroup();
      this.jionGroup();
    }
  },
  created: function created() {
    this.jionGroup();
  },
  beforeDestroy: function beforeDestroy() {
    this.leaveGroup();
    this.clearDebounce();
  },
  methods: {
    getGroup: function getGroup(key) {
      if (typeof key == "string" && key.trim() != "") {
        var g = GROUP[key];

        if (g) {
          return g;
        }
      }

      return undefined;
    },
    jionGroup: function jionGroup() {
      var _this = this;

      var groupName = this.group;

      if (typeof groupName == "string" && groupName.trim() != "") {
        var g = GROUP[groupName];

        if (!g) {
          g = GROUP[groupName] = {
            sub: [],
            obs: undefined
          };
        }

        var op = this.op = {
          on: function on() {
            _this.status = false;
          },
          off: function off() {
            _this.status = true;

            _this.clearDebounce(); // 将其他组员的延迟点击清理掉,以触发者为准

          },
          mes: function mes(info) {
            _this.customInfo = info;
          }
        };
        g.sub.push(op);

        if (g.obs) {
          // 新加入的组员需要同步组内状态
          this.status = g.obs.status;
          this.customInfo = g.obs.customInfo;
        }

        this.leaveGroup = function () {
          _this.status = false;
          var idx = g.sub.findIndex(function (item) {
            return item == op;
          });

          if (idx > -1) {
            g.sub.splice(idx, 1);
          }

          if (g.obs == _this) {
            g.obs = undefined; // 如果触发者是自己，需要通知其他取消状态

            if (_this.isEmitter == true) {
              _this.noticeGroup('on');
            }
          }

          _this.leaveGroup = noop;
        };
      }
    },
    sendInfo: function sendInfo(info) {
      this.customInfo = info;
      this.noticeGroup('mes', info);
    },
    noticeGroup: function noticeGroup(type, info) {
      var _this2 = this;

      var g = this.getGroup(this.group);

      if (g) {
        g.obs = this;
        g.sub.forEach(function (op) {
          if (_this2.op == op) {
            return;
          }

          op[type](info);
        });
      }
    },
    tapClick: function tapClick(e) {
      var _this3 = this;

      if (this.doNothing) {
        return;
      }

      if (this.status) {
        this.$emit("invalidClick");
        this.stopPropagation && e.stopPropagation();
        return;
      }

      if (typeof this.debounce == "number" && this.debounce > 0 && [RUNNING, READY].includes(this.counting)) {
        log("It's set timer");
        this.counting = RUNNING;
        clearTimeout(this.timer);
        this.timer = setTimeout(function () {
          _this3.counting = END;

          _this3.fireOriginEvent(e.target);
        }, this.debounce);
        e.stopPropagation();
        return;
      }

      this.trap();
      this.clearDebounce();
    },
    fireOriginEvent: function fireOriginEvent(el) {
      if (el.click) {
        el.click();
      } else {
        try {
          var evt = document.createEvent("Event");
          evt.initEvent("click", true, true);
          el.dispatchEvent(evt);
        } catch (e) {
          console.error(e);
        }
      }
    },
    release: function release() {
      log("it's release now.");
      this.isEmitter = false;
      this.status = false;
      this.$emit("release");
      this.noticeGroup("on");
    },
    trap: function trap() {
      this.isEmitter = true;
      this.status = true;
      this.$emit("trap");
      this.noticeGroup("off");
    },
    clearDebounce: function clearDebounce() {
      clearTimeout(this.timer);
      this.counting = READY;
      this.timer = undefined;
    }
  }
});
// CONCATENATED MODULE: ./src/lib/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_libvue_type_script_lang_js_ = (libvue_type_script_lang_js_); 
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
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

// CONCATENATED MODULE: ./src/lib/index.vue





/* normalize component */

var component = normalizeComponent(
  src_libvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var lib = (component.exports);
// CONCATENATED MODULE: ./src/lib/index.js
 // 定义我们的插件

var myPlugin = {
  // eslint-disable-next-line
  version: "0.1.2",
  // 该插件有一个install方法
  // 方法的第一个参数是传入的Vue，第二个参数可以插件的自定义参数
  // eslint-disable-next-line
  install: function install(Vue, options) {
    // 将其注册为vue的组件，'gantt'是组件名
    Vue.component("v-prevent-dbclick", lib);
  }
}; // 新增

if (typeof window !== "undefined" && window.Vue) {
  window.Vue.use(myPlugin);
} // 最后将插件导出，并在main.js中通过Vue.use()即可使用插件


/* harmony default export */ var src_lib = (myPlugin);
// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (src_lib);



/***/ })

/******/ });
//# sourceMappingURL=v-prevent-dbclick.common.js.map