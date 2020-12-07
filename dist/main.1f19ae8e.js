// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"money.js":[function(require,module,exports) {
var define;
function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*!
 * money.js / fx() v0.2
 * Copyright 2014 Open Exchange Rates
 *
 * JavaScript library for realtime currency conversion and exchange rate calculation.
 *
 * Freely distributable under the MIT license.
 * Portions of money.js are inspired by or borrowed from underscore.js
 *
 * For details, examples and documentation:
 * http://openexchangerates.github.io/money.js/
 */
(function (root, undefined) {
  // Create a safe reference to the money.js object for use below.
  var fx = function fx(obj) {
    return new fxWrapper(obj);
  }; // Current version.


  fx.version = '0.2';
  /* --- Setup --- */
  // fxSetup can be defined before loading money.js, to set the exchange rates and the base
  // (and default from/to) currencies - or the rates can be loaded in later if needed.

  var fxSetup = root.fxSetup || {
    rates: {},
    base: ""
  }; // Object containing exchange rates relative to the fx.base currency, eg { "GBP" : "0.64" }

  fx.rates = fxSetup.rates; // Default exchange rate base currency (eg "USD"), which all the exchange rates are relative to

  fx.base = fxSetup.base; // Default from / to currencies for conversion via fx.convert():

  fx.settings = {
    from: fxSetup.from || fx.base,
    to: fxSetup.to || fx.base
  };
  /* --- Conversion --- */
  // The base function of the library: converts a value from one currency to another

  var convert = fx.convert = function (val, opts) {
    // Convert arrays recursively
    if (_typeof(val) === 'object' && val.length) {
      for (var i = 0; i < val.length; i++) {
        val[i] = convert(val[i], opts);
      }

      return val;
    } // Make sure we gots some opts


    opts = opts || {}; // We need to know the `from` and `to` currencies

    if (!opts.from) opts.from = fx.settings.from;
    if (!opts.to) opts.to = fx.settings.to; // Multiple the value by the exchange rate

    return val * getRate(opts.to, opts.from);
  }; // Returns the exchange rate to `target` currency from `base` currency


  var getRate = function getRate(to, from) {
    // Save bytes in minified version
    var rates = fx.rates; // Make sure the base rate is in the rates object:

    rates[fx.base] = 1; // Throw an error if either rate isn't in the rates array

    if (!rates[to] || !rates[from]) throw "fx error"; // If `from` currency === fx.base, return the basic exchange rate for the `to` currency

    if (from === fx.base) {
      return rates[to];
    } // If `to` currency === fx.base, return the basic inverse rate of the `from` currency


    if (to === fx.base) {
      return 1 / rates[from];
    } // Otherwise, return the `to` rate multipled by the inverse of the `from` rate to get the
    // relative exchange rate between the two currencies


    return rates[to] * (1 / rates[from]);
  };
  /* --- OOP wrapper and chaining --- */
  // If fx(val) is called as a function, it returns a wrapped object that can be used OO-style


  var fxWrapper = function fxWrapper(val) {
    // Experimental: parse strings to pull out currency code and value:
    if (typeof val === "string") {
      this._v = parseFloat(val.replace(/[^0-9-.]/g, ""));
      this._fx = val.replace(/([^A-Za-z])/g, "");
    } else {
      this._v = val;
    }
  }; // Expose `wrapper.prototype` as `fx.prototype`


  var fxProto = fx.prototype = fxWrapper.prototype; // fx(val).convert(opts) does the same thing as fx.convert(val, opts)

  fxProto.convert = function () {
    var args = Array.prototype.slice.call(arguments);
    args.unshift(this._v);
    return convert.apply(fx, args);
  }; // fx(val).from(currency) returns a wrapped `fx` where the value has been converted from
  // `currency` to the `fx.base` currency. Should be followed by `.to(otherCurrency)`


  fxProto.from = function (currency) {
    var wrapped = fx(convert(this._v, {
      from: currency,
      to: fx.base
    }));
    wrapped._fx = fx.base;
    return wrapped;
  }; // fx(val).to(currency) returns the value, converted from `fx.base` to `currency`


  fxProto.to = function (currency) {
    return convert(this._v, {
      from: this._fx ? this._fx : fx.settings.from,
      to: currency
    });
  };
  /* --- Module Definition --- */
  // Export the fx object for CommonJS. If being loaded as an AMD module, define it as such.
  // Otherwise, just add `fx` to the global object


  if (typeof exports !== 'undefined') {
    if (typeof module !== 'undefined' && module.exports) {
      exports = module.exports = fx;
    }

    exports.fx = fx;
  } else if (typeof define === 'function' && define.amd) {
    // Return the library as an AMD module:
    define([], function () {
      return fx;
    });
  } else {
    // Use fx.noConflict to restore `fx` back to its original value before money.js loaded.
    // Returns a reference to the library's `fx` object; e.g. `var money = fx.noConflict();`
    fx.noConflict = function (previousFx) {
      return function () {
        // Reset the value of the root's `fx` variable:
        root.fx = previousFx; // Delete the noConflict function:

        fx.noConflict = undefined; // Return reference to the library to re-assign it:

        return fx;
      };
    }(root.fx); // Declare `fx` on the root (global/window) object:


    root['fx'] = fx;
  } // Root will be `window` in browser or `global` on the server:

})(this);
},{}],"main.js":[function(require,module,exports) {
'use strict';

var optionsList = ["Saab", "Volvo", "BMW"];

function custom_select() {
  var customSelectList = document.getElementsByClassName("custom-select"); //get een list of all custom-selects

  for (var index = 0; index < customSelectList.length; index++) {
    var customSelect = customSelectList[index].getElementsByTagName("select")[0]; // get all options.

    console.log("num of options ", customSelect.length, customSelect);
    var newSelectDiv = document.createElement("DIV");
    newSelectDiv.setAttribute("class", "select-styling");

    for (var _index = 0; _index < customSelect.length; _index++) {
      var value = customSelect.options[_index].value;
      var text = customSelect.options[_index].innerHTML;
      console.log(value, text);
      var newOptionDiv = document.createElement("DIV");
      newOptionDiv.innerHTML = text;
      newOptionDiv.setAttribute("class", "options-styling");
      newOptionDiv.setAttribute("value", _index);
      newSelectDiv.setAttribute("class", "options-hide");
      newOptionDiv.addEventListener("click", function (e) {
        console.log(this.innerHTML);
      });
      newSelectDiv.appendChild(newOptionDiv);
    }

    customSelectList[index].appendChild(newSelectDiv); // Append <button> to <body>
  }
}

custom_select();

function testsimple() {
  var newDiv = document.createElement("DIV");
  newDiv.innerHTML = "testdiv";
  newDiv.setAttribute("class", "test-styling");
  document.body.appendChild(newDiv); // Append <button> to <body>
}

testsimple();

var fx = require("./money");

function getExchangeRates() {
  var demo = function demo() {
    var rate = fx(1).from("GBP").to("USD");
    console.log(fx.rates);
    console.log(fx.rates.GBP);
  };

  fetch('https://api.exchangeratesapi.io/latest').then(function (resp) {
    return resp.json();
  }).then(function (data) {
    return fx.rates = data.rates;
  }).then(demo);
} // getExchangeRates()
// var e = document.getElementById("selectElementID");
// var value=e.options[e.selectedIndex].value;// get selected option value
// var text=e.options[e.selectedIndex].text;
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('Land');
//   var instances = M.FormSelect.init(elems, options);
// });
},{"./money":"money.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "50588" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.js"], null)
//# sourceMappingURL=/main.1f19ae8e.js.map