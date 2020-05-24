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
})({"src/todolist.js":[function(require,module,exports) {
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var tasks = [{
  _id: "5d2ca9e2e03d40b326596aa7",
  completed: false,
  body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
  title: "Eu ea incididunt sunt consectetur fugiat non."
}, {
  _id: "5d2ca9e29c8a94095c1288e0",
  completed: false,
  body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
  title: "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
}, {
  _id: "5d2ca9e2e03d40b3232496aa7",
  completed: false,
  body: "Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n",
  title: "Eu ea incididunt sunt consectetur fugiat non."
}, {
  _id: "5d2ca9e29c8a94095564788e0",
  completed: false,
  body: "Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n",
  title: "Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum."
}];

(function (arrOfTasks) {
  var objOfTasks = tasks.reduce(function (acc, currentVal) {
    acc[currentVal._id] = currentVal;
    return acc;
  }, {}); // element

  var listContainer = document.querySelector(".tasks-list-section .list-group");
  var form = document.forms["addTask"];
  var inputTitle = form.elements["title"];
  var inputBody = form.elements["body"];
  var unfinishedButton = document.querySelector(".btn-unfinished"); //btn

  var btnAll = document.querySelector(".btn-all-tasks");
  btnAll.classList.add("btn");
  var btnUnfinished = document.querySelector(".btn-unfinished");
  btnUnfinished.classList.add("btn", "unfinished");
  var btnCompleted = document.querySelector(".btn-finished");
  btnCompleted.classList.add("btn", "finished"); //events

  renderAllTasks(objOfTasks);
  form.addEventListener("submit", onFormSubmitHandler);
  listContainer.addEventListener("click", onDeletehandler);
  listContainer.addEventListener("click", highlightsCompletedTasks);
  btnCompleted.addEventListener("click", finishedTasks);
  unfinishedButton.addEventListener("click", unfinishedTasks);
  btnAll.addEventListener("click", allTasks);
  checkEmpty();

  function renderAllTasks(tasksList) {
    if (!tasksList) {
      console.error("Submit task list!");
      return;
    }

    var fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(function (task) {
      var li = listItemTemplate(task);
      fragment.appendChild(li);
    });
    listContainer.appendChild(fragment);
  }

  function renderCompletedTasks(tasksList) {
    var fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(function (task) {
      if (task.completed) {
        var li = listItemTemplate(task);
        fragment.appendChild(li);
      }
    });
    listContainer.appendChild(fragment);
  }

  function renderUnfinishedTasks(tasksList) {
    var fragment = document.createDocumentFragment();
    Object.values(tasksList).forEach(function (task) {
      if (!task.completed) {
        var li = listItemTemplate(task);
        fragment.appendChild(li);
      }
    });
    listContainer.appendChild(fragment);
  }

  function listItemTemplate() {
    var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
        _id = _ref._id,
        title = _ref.title,
        body = _ref.body,
        completed = _ref.completed;

    var li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "align-items-center", "flex-wrap", "mt-2");
    li.setAttribute("data-task-id", _id);
    var span = document.createElement("span");
    span.textContent = title;
    span.classList.add("span-text");
    var deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete task";
    deleteBtn.classList.add("btn", "delete-btn");
    var performedBtn = document.createElement("button");
    performedBtn.textContent = "Task completed";
    performedBtn.classList.add("btn", "btn-warning", "performed-btn");
    var article = document.createElement("p");
    article.textContent = body;
    article.classList.add("mt-2", "w-100", "p-text");
    li.appendChild(span);
    li.appendChild(article);
    li.appendChild(performedBtn);
    li.appendChild(deleteBtn);

    if (completed) {
      li.classList.add("color");
    }

    return li;
  }

  function onFormSubmitHandler(e) {
    checkEmpty();
    e.preventDefault();
    var titleValue = inputTitle.value;
    var bodyValue = inputBody.value;

    if (!titleValue || !bodyValue) {
      alert("Enter the title and body");
      return;
    }

    var task = createNewTask(titleValue, bodyValue);
    var listItem = listItemTemplate(task);
    listContainer.insertAdjacentElement("afterbegin", listItem);
    form.reset();
  }

  function createNewTask(title, body) {
    var newTask = {
      title: title,
      body: body,
      completed: false,
      _id: "task-".concat(Math.random())
    };
    objOfTasks[newTask._id] = newTask;
    return _objectSpread({}, newTask);
  }

  function deleteTask(id) {
    var title = objOfTasks[id].title;
    var isConfirm = confirm("Do you want to delete a task: ".concat(title));
    if (!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  }

  function deleteTaskFromHtml(confirmed, el) {
    if (!confirmed) return;
    el.remove();
  }

  function onDeletehandler(_ref2) {
    var target = _ref2.target;

    if (target.classList.contains("delete-btn")) {
      var parent = target.closest("[data-task-id]");
      var id = parent.dataset.taskId;
      var confirmed = deleteTask(id);
      deleteTaskFromHtml(confirmed, parent);
    }

    checkEmpty();
  }

  function checkEmpty() {
    var ulChildren = document.querySelector("ul").children;
    var classNoti = document.querySelector(".notification");

    if (ulChildren.length == 0) {
      notificationAppears();
    } else if (classNoti) {
      classNoti.remove();
    }
  }

  function notificationAppears() {
    var li = document.createElement("li");
    li.classList.add("list-group-item", "d-flex", "align-items-center", "flex-wrap", "mt-2", "notification");
    var span = document.createElement("span");
    span.textContent = "The task list is empty!";
    span.style.fontWeight = "bold";
    li.appendChild(span);
    var ul = document.querySelector(".list-group");
    ul.appendChild(li);
    return li;
  }

  function highlightsCompletedTasks(_ref3) {
    var target = _ref3.target;

    if (target.classList.contains("performed-btn")) {
      var parent = target.closest("[data-task-id]");
      var id = parent.dataset.taskId;

      if (objOfTasks[id].completed) {
        parent.classList.remove("color");
        objOfTasks[id].completed = false;
      } else {
        parent.classList.add("color");
        objOfTasks[id].completed = true;
      }
    }
  }

  function allTasks() {
    clearTasks();
    renderAllTasks(objOfTasks);
  }

  function clearTasks() {
    var tasks = document.querySelector(".list-group");

    while (tasks.firstChild) {
      tasks.removeChild(tasks.lastChild);
    }
  }

  function finishedTasks() {
    clearTasks();
    renderCompletedTasks(objOfTasks);
  }

  function unfinishedTasks() {
    clearTasks();
    renderUnfinishedTasks(objOfTasks);
  }
})(tasks);
},{}],"../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "55725" + '/');

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
},{}]},{},["../../../../../usr/local/lib/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","src/todolist.js"], null)
//# sourceMappingURL=/todolist.269416a8.js.map