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
})({"main.ts":[function(require,module,exports) {
"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e2) { throw _e2; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e3) { didErr = true; err = _e3; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var TodoEntry = function TodoEntry(text, completed) {
  _classCallCheck(this, TodoEntry);

  this.text = text;
  this.completed = completed;
}; //
// Predefined state
//


var initialState = {
  todos: [new TodoEntry('Hi', true), new TodoEntry('Hello', false), new TodoEntry('Hi there!', true)],
  filter: 'all'
}; //
// Class containing state
//

var State = /*#__PURE__*/function () {
  function State(initialTodos, initialFilter) {
    _classCallCheck(this, State);

    this._todos = initialTodos;
    this._filter = initialFilter;
  }

  _createClass(State, [{
    key: "addTodo",
    value: function addTodo(todo) {
      return this._todos.push(todo);
    }
  }, {
    key: "setFilter",
    value: function setFilter(filter) {
      this._filter = filter;
    }
  }, {
    key: "todos",
    get: function get() {
      var _this = this;

      return this._todos.filter(function (todo) {
        if (_this._filter === 'all') {
          return true;
        } else if (_this._filter === 'completed') {
          return todo.completed === true;
        } else if (_this._filter === 'active') {
          return todo.completed === false;
        }
      });
    },
    set: function set(todos) {
      this._todos = todos;
    }
  }, {
    key: "removeTodoByText",
    value: function removeTodoByText(text) {
      this._todos = this._todos.filter(function (todo) {
        return todo.text.trim() !== text.trim();
      });
    }
  }]);

  return State;
}();

var stateC = new State(initialState.todos, initialState.filter);

function createHtmlWithCreateElement(todos, targetEl) {
  targetEl.innerHTML = '';

  var _iterator = _createForOfIteratorHelper(todos),
      _step;

  try {
    for (_iterator.s(); !(_step = _iterator.n()).done;) {
      var todo = _step.value;

      // druhy zpusob
      // zde musi byt let, proroze i++ meni tu promenou
      //for (let i = 0; i < todos.length; i++) {
      //const todo = todos[i];
      // Prepare elements
      var _inputEl = document.createElement('input');

      _inputEl.classList.add('toggle');

      _inputEl.type = 'checkbox';
      _inputEl.checked = todo.completed;
      var labelEl = document.createElement('label');
      labelEl.innerHTML = todo.text;
      var buttonEl = document.createElement('button');
      buttonEl.classList.add('destroy'); // Append these elements to the todo wrapper element

      var todoEl = document.createElement('li');
      todoEl.appendChild(_inputEl);
      todoEl.appendChild(labelEl);
      todoEl.appendChild(buttonEl); // Append todo to the page

      targetEl.appendChild(todoEl);
    }
  } catch (err) {
    _iterator.e(err);
  } finally {
    _iterator.f();
  }

  destroyButtonListeners();
}

function createHtmlWithStrings(todos, targetEl) {
  targetEl.innerHTML = '';
  var todosHtmlArray = todos.map(function (todo) {
    var html = "\n                <li> \n                    <input class=\"toggle\" type=\"checkbox\" ".concat(todo.completed ? 'checked' : '', " >\n                    <label> ").concat(todo.text, " </label>\n                    <button class=\"destroy\"></button>\n                </li>\n                ");
    return html;
  });
  var todosHtml = todosHtmlArray.join('');
  targetEl.innerHTML = todosHtml;
  destroyButtonListeners();
} //
// Append todos html into the page
//


var todoListEl = document.querySelector('.todo-list');
createHtmlWithCreateElement(stateC.todos, todoListEl); //createHtmlWithStrings(state.todos, todoListEl);
//
// Handle main input
//
// two options:
// const inputEl: HTMLInputElement = document.querySelector('.new-todo');
// const inputEl = document.querySelector('.new-todo') as HTMLInputElement;

var inputEl = document.querySelector('.new-todo');
inputEl.addEventListener('keyup', function (event) {
  if (event.key !== "Enter") {
    return;
  } // Update app state


  var newTodo = {
    text: inputEl.value,
    completed: false
  };
  stateC.addTodo(newTodo); // Update html

  inputEl.value = '';
  createHtmlWithCreateElement(stateC.todos, todoListEl);
});

var FilterEntry = function FilterEntry(name, filterEl) {
  _classCallCheck(this, FilterEntry);

  this.name = name;
  this.filterEl = filterEl;
}; //
// Handle filters
//


var filters = {
  'all': document.querySelector('#filter-all'),
  'active': document.querySelector('#filter-active'),
  'completed': document.querySelector('#filter-completed')
}; // Tady muze byt const, protoze to filterName pokuzde deklarujeme nove, neprepisujeme
// object desctructering
//   (misto itrovani pres 'filter of Object.entries(filters)' a pak volani filterEl=filter[1])

var _loop = function _loop() {
  var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
      filterName = _Object$entries$_i[0],
      filterEl = _Object$entries$_i[1];

  // zde staci jen volat zavorkami, bez parametru
  filterEl.addEventListener('click', function () {
    filtersClick(filterName);
  });
};

for (var _i = 0, _Object$entries = Object.entries(filters); _i < _Object$entries.length; _i++) {
  _loop();
}

function filtersClick(newFilterType) {
  // Remove 'selected' class on all filter buttons
  // At the beggining the 'selected' one is 'filter-all' by default
  for (var _i2 = 0, _Object$values = Object.values(filters); _i2 < _Object$values.length; _i2++) {
    var filterEl = _Object$values[_i2];
    //console.log(filterEl.classList)
    filterEl.classList.remove('selected');
  } // Add 'selected' class to clicked filter button


  filters[newFilterType].classList.add('selected'); // Update state

  stateC.setFilter(newFilterType); // Render todos view

  createHtmlWithCreateElement(stateC.todos, todoListEl);
} // Remove todo button


function destroyButtonListeners() {
  var _iterator2 = _createForOfIteratorHelper(todoListEl.children),
      _step2;

  try {
    var _loop2 = function _loop2() {
      var liEl = _step2.value;
      //console.log(liEl);
      var destroyEl = liEl.querySelector('button[class=destroy]'); //console.log(destroyEl)

      var label = liEl.querySelector('label');
      var todoText = label.textContent.trim(); //console.log(todoText)

      destroyEl.addEventListener('click', function () {
        console.log('Destroy todo: ' + todoText);
        stateC.removeTodoByText(todoText);
        createHtmlWithCreateElement(stateC.todos, todoListEl);
      });
    };

    for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
      _loop2();
    }
  } catch (err) {
    _iterator2.e(err);
  } finally {
    _iterator2.f();
  }
} // Clear completed button


var clearCompletedEl = document.querySelector('button[class=clear-completed]');
clearCompletedEl.addEventListener('click', function () {
  stateC.todos = stateC.todos.filter(function (todo) {
    return todo.completed === true;
  }); // Render todos view

  createHtmlWithCreateElement(stateC.todos, todoListEl);
});
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "35827" + '/');

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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","main.ts"], null)
//# sourceMappingURL=/main.c39d6dcf.js.map