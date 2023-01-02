// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"6l6un":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "3f012b56ca3df910";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, globalThis, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/"); // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome; // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    } // $FlowFixMe
    ws.onmessage = async function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH); // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear(); // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", link.getAttribute("href").split("?")[0] + "?" + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
             // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id]; // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"bdaKC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _three = require("three");
// 轨道控制器
var _orbitControls = require("three/examples/jsm/controls/OrbitControls");
var _datGui = require("dat.gui");
var _moonJpg = require("../assets/imgs/moon.jpg");
var _moonJpgDefault = parcelHelpers.interopDefault(_moonJpg);
var _earthJpg = require("../assets/imgs/earth.jpg");
var _earthJpgDefault = parcelHelpers.interopDefault(_earthJpg);
var _css2DrendererJs = require("three/examples/jsm/renderers/CSS2DRenderer.js");
const gui = new (0, _datGui.GUI)();
const scene = new _three.Scene();
const camera = new _three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 5, -20);
scene.add(camera);
const light = new _three.AmbientLight(0xffffff); // soft white light
scene.add(light);
// 坐标轴
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );
const textureLoader = new _three.TextureLoader();
const earthGeometry = new _three.SphereGeometry(3, 64, 64);
const earthMaterial = new _three.MeshPhongMaterial({
    shininess: 5,
    map: textureLoader.load((0, _earthJpgDefault.default))
});
const earth = new _three.Mesh(earthGeometry, earthMaterial);
scene.add(earth);
const moonGeometry = new _three.SphereGeometry(0.3, 16, 16);
const moonMaterial = new _three.MeshPhongMaterial({
    shininess: 5,
    map: textureLoader.load((0, _moonJpgDefault.default))
});
const moon = new _three.Mesh(moonGeometry, moonMaterial);
scene.add(moon);
const earthDiv = document.createElement("div");
earthDiv.className = "label";
earthDiv.innerHTML = "地球";
earthDiv.style.color = "#ffffff";
const earthLabel = new (0, _css2DrendererJs.CSS2DObject)(earthDiv);
earthLabel.position.set(0, 3.3, 0);
earth.add(earthLabel);
// earth.rotation.y = Math.PI;
const chinaDiv = document.createElement("div");
chinaDiv.className = "label";
chinaDiv.innerHTML = "中国";
chinaDiv.style.color = "#ffffff";
const chinaLabel = new (0, _css2DrendererJs.CSS2DObject)(chinaDiv);
chinaLabel.position.set(-1, 1.4, -3);
earth.add(chinaLabel);
const moonDiv = document.createElement("div");
moonDiv.className = "label";
moonDiv.innerHTML = "月球";
moonDiv.style.color = "#ffffff";
const moonLabel = new (0, _css2DrendererJs.CSS2DObject)(moonDiv);
moonLabel.position.set(0, 0.5, 0);
moon.add(moonLabel);
const labelRenderer = new (0, _css2DrendererJs.CSS2DRenderer)();
labelRenderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(labelRenderer.domElement);
labelRenderer.domElement.style.position = "fixed";
labelRenderer.domElement.style.top = 0;
labelRenderer.domElement.style.left = 0;
labelRenderer.domElement.style.zIndex = 10;
const renderer = new _three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
const controls = new (0, _orbitControls.OrbitControls)(camera, labelRenderer.domElement);
// 开启阻尼 更真实
controls.enableDamping = true;
const raycaster = new _three.Raycaster();
const curve = new _three.CatmullRomCurve3([
    new _three.Vector3(-10, 0, 10),
    new _three.Vector3(-5, 5, 5),
    new _three.Vector3(0, 0, 5),
    new _three.Vector3(5, -5, 5),
    new _three.Vector3(10, 0, 10)
], true);
const points = curve.getPoints(50);
const geometry = new _three.BufferGeometry().setFromPoints(points);
const material = new _three.LineBasicMaterial({
    color: 0xff0000
});
// Create the final object to add to the scene
const curveObject = new _three.Line(geometry, material);
scene.add(curveObject);
const clock = new _three.Clock();
function animate() {
    const time = clock.getElapsedTime();
    controls.update();
    renderer.render(scene, camera);
    labelRenderer.render(scene, camera);
    // 沿曲线运动
    const point = curve.getPoint(time / 10 % 1);
    moon.position.copy(point);
    camera.position.copy(point);
    camera.lookAt(earth.position);
    const chinaPosition = chinaLabel.position.clone();
    const labelDistance = chinaPosition.distanceTo(camera.position);
    chinaPosition.project(camera);
    raycaster.setFromCamera(chinaPosition, camera);
    const intersects = raycaster.intersectObjects(scene.children, true);
    if (intersects.length) {
        if (intersects[0].distance < labelDistance) chinaLabel.element.style.display = "none";
        else chinaLabel.element.style.display = "block";
    } else chinaLabel.element.style.display = "block";
    requestAnimationFrame(animate);
}
animate();
window.addEventListener("resize", ()=>{
    // 更新宽高比
    camera.aspect = window.innerWidth / window.innerHeight;
    // 更新摄像机投影矩阵
    camera.updateProjectionMatrix();
    // 更新渲染器
    renderer.setSize(window.innerWidth, window.innerHeight);
    // 更新像素比
    renderer.setPixelRatio = window.devicePixelRatio;
    // 更新渲染器
    labelRenderer.setSize(window.innerWidth, window.innerHeight);
    // 更新像素比
    labelRenderer.setPixelRatio = window.devicePixelRatio;
});

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","dat.gui":"k3xQk","../assets/imgs/moon.jpg":"37wn8","../assets/imgs/earth.jpg":"jOTkU","three/examples/jsm/renderers/CSS2DRenderer.js":"3tWLO","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"37wn8":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("5pn3k") + "../moon.740659f1.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"lgJ39":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
} // TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"jOTkU":[function(require,module,exports) {
module.exports = require("./helpers/bundle-url").getBundleURL("5pn3k") + "../earth.95966001.jpg" + "?" + Date.now();

},{"./helpers/bundle-url":"lgJ39"}],"3tWLO":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "CSS2DObject", ()=>CSS2DObject);
parcelHelpers.export(exports, "CSS2DRenderer", ()=>CSS2DRenderer);
var _three = require("three");
class CSS2DObject extends (0, _three.Object3D) {
    constructor(element = document.createElement("div")){
        super();
        this.isCSS2DObject = true;
        this.element = element;
        this.element.style.position = "absolute";
        this.element.style.userSelect = "none";
        this.element.setAttribute("draggable", false);
        this.addEventListener("removed", function() {
            this.traverse(function(object) {
                if (object.element instanceof Element && object.element.parentNode !== null) object.element.parentNode.removeChild(object.element);
            });
        });
    }
    copy(source, recursive) {
        super.copy(source, recursive);
        this.element = source.element.cloneNode(true);
        return this;
    }
}
//
const _vector = new (0, _three.Vector3)();
const _viewMatrix = new (0, _three.Matrix4)();
const _viewProjectionMatrix = new (0, _three.Matrix4)();
const _a = new (0, _three.Vector3)();
const _b = new (0, _three.Vector3)();
class CSS2DRenderer {
    constructor(parameters = {}){
        const _this = this;
        let _width, _height;
        let _widthHalf, _heightHalf;
        const cache = {
            objects: new WeakMap()
        };
        const domElement = parameters.element !== undefined ? parameters.element : document.createElement("div");
        domElement.style.overflow = "hidden";
        this.domElement = domElement;
        this.getSize = function() {
            return {
                width: _width,
                height: _height
            };
        };
        this.render = function(scene, camera) {
            if (scene.matrixWorldAutoUpdate === true) scene.updateMatrixWorld();
            if (camera.parent === null && camera.matrixWorldAutoUpdate === true) camera.updateMatrixWorld();
            _viewMatrix.copy(camera.matrixWorldInverse);
            _viewProjectionMatrix.multiplyMatrices(camera.projectionMatrix, _viewMatrix);
            renderObject(scene, scene, camera);
            zOrder(scene);
        };
        this.setSize = function(width, height) {
            _width = width;
            _height = height;
            _widthHalf = _width / 2;
            _heightHalf = _height / 2;
            domElement.style.width = width + "px";
            domElement.style.height = height + "px";
        };
        function renderObject(object, scene, camera) {
            if (object.isCSS2DObject) {
                _vector.setFromMatrixPosition(object.matrixWorld);
                _vector.applyMatrix4(_viewProjectionMatrix);
                const visible = object.visible === true && _vector.z >= -1 && _vector.z <= 1 && object.layers.test(camera.layers) === true;
                object.element.style.display = visible === true ? "" : "none";
                if (visible === true) {
                    object.onBeforeRender(_this, scene, camera);
                    const element = object.element;
                    element.style.transform = "translate(-50%,-50%) translate(" + (_vector.x * _widthHalf + _widthHalf) + "px," + (-_vector.y * _heightHalf + _heightHalf) + "px)";
                    if (element.parentNode !== domElement) domElement.appendChild(element);
                    object.onAfterRender(_this, scene, camera);
                }
                const objectData = {
                    distanceToCameraSquared: getDistanceToSquared(camera, object)
                };
                cache.objects.set(object, objectData);
            }
            for(let i = 0, l = object.children.length; i < l; i++)renderObject(object.children[i], scene, camera);
        }
        function getDistanceToSquared(object1, object2) {
            _a.setFromMatrixPosition(object1.matrixWorld);
            _b.setFromMatrixPosition(object2.matrixWorld);
            return _a.distanceToSquared(_b);
        }
        function filterAndFlatten(scene) {
            const result = [];
            scene.traverse(function(object) {
                if (object.isCSS2DObject) result.push(object);
            });
            return result;
        }
        function zOrder(scene) {
            const sorted = filterAndFlatten(scene).sort(function(a, b) {
                if (a.renderOrder !== b.renderOrder) return b.renderOrder - a.renderOrder;
                const distanceA = cache.objects.get(a).distanceToCameraSquared;
                const distanceB = cache.objects.get(b).distanceToCameraSquared;
                return distanceA - distanceB;
            });
            const zMax = sorted.length;
            for(let i = 0, l = sorted.length; i < l; i++)sorted[i].element.style.zIndex = zMax - i;
        }
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["6l6un","bdaKC"], "bdaKC", "parcelRequire9b34")

//# sourceMappingURL=index.ca3df910.js.map
