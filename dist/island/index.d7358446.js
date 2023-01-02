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
})({"39wmy":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "07f3831cd7358446";
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

},{}],"jA2ur":[function(require,module,exports) {
var _three = require("three");
// 导入控制器
var _orbitControls = require("three/examples/jsm/controls/OrbitControls");
// 导入水面
var _water2 = require("three/examples/jsm/objects/Water2");
// 导入gltf载入库
var _gltfloader = require("three/examples/jsm/loaders/GLTFLoader");
var _dracoloader = require("three/examples/jsm/loaders/DRACOLoader");
var _rgbeloader = require("three/examples/jsm/loaders/RGBELoader");
// 初始化场景
const scene = new _three.Scene();
// 初始化相机
const camera = new _three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 2000);
// 设置相机位置
camera.position.set(-50, 50, 130);
// 更新摄像头宽高比例
camera.aspect = window.innerWidth / window.innerHeight;
// 更新摄像头投影矩阵
camera.updateProjectionMatrix();
scene.add(camera);
// 初始化渲染器
const renderer = new _three.WebGLRenderer({
    // 设置抗锯齿
    antialias: true,
    //   对数深度缓冲区
    logarithmicDepthBuffer: true
});
renderer.outputEncoding = _three.sRGBEncoding;
// 设置渲染器宽高
renderer.setSize(window.innerWidth, window.innerHeight);
// 监听屏幕的大小改变，修改渲染器的宽高，相机的比例
window.addEventListener("resize", ()=>{
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});
// 将渲染器添加到页面
document.body.appendChild(renderer.domElement);
// 实例化控制器
const controls = new (0, _orbitControls.OrbitControls)(camera, renderer.domElement);
// 添加平面
// const planeGeometry = new THREE.PlaneGeometry(100, 100);
// const planeMaterial = new THREE.MeshBasicMaterial({
//   color: 0xffffff,
// });
// const plane = new THREE.Mesh(planeGeometry, planeMaterial);
// scene.add(plane);
// 创建一个巨大的天空球体
let texture = new _three.TextureLoader().load("/textures/sky.jpg");
const skyGeometry = new _three.SphereGeometry(1000, 60, 60);
const skyMaterial = new _three.MeshBasicMaterial({
    map: texture
});
skyGeometry.scale(1, 1, -1);
const sky = new _three.Mesh(skyGeometry, skyMaterial);
scene.add(sky);
// 视频纹理
const video = document.createElement("video");
video.src = "/textures/sky.mp4";
video.loop = true;
window.addEventListener("click", (e)=>{
    // 当鼠标移动的时候播放视频
    //   判断视频是否处于播放状态
    if (video.paused) {
        video.play();
        let texture = new _three.VideoTexture(video);
        skyMaterial.map = texture;
        skyMaterial.map.needsUpdate = true;
    }
});
// 载入环境纹理hdr
const hdrLoader = new (0, _rgbeloader.RGBELoader)();
hdrLoader.loadAsync("/assets/050.hdr").then((texture)=>{
    texture.mapping = _three.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
});
// 添加平行光
const light = new _three.DirectionalLight(0xffffff, 1);
light.position.set(-100, 100, 10);
scene.add(light);
// 创建水面
const waterGeometry = new _three.CircleGeometry(300, 64);
const water = new (0, _water2.Water)(waterGeometry, {
    textureWidth: 1024,
    textureHeight: 1024,
    color: 0xeeeeff,
    flowDirection: new _three.Vector2(1, 1),
    scale: 1,
    normalMap0: new _three.TextureLoader().load("/textures/water/Water_1_M_Normal.jpg"),
    normalMap1: new _three.TextureLoader().load("/textures/water/Water_2_M_Normal.jpg")
});
water.position.y = 3;
// 水面旋转至水平
water.rotation.x = -Math.PI / 2;
scene.add(water);
// 添加小岛模型
// 实例化gltf载入库
const loader = new (0, _gltfloader.GLTFLoader)();
// 实例化draco载入库
const dracoLoader = new (0, _dracoloader.DRACOLoader)();
// 添加draco载入库
dracoLoader.setDecoderPath("/draco/");
// 添加draco载入库
loader.setDRACOLoader(dracoLoader);
loader.load("/model/island2.glb", (gltf)=>{
    scene.add(gltf.scene);
});
function render() {
    // 渲染场景
    renderer.render(scene, camera);
    // 引擎自动更新渲染器
    requestAnimationFrame(render);
}
render();

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","three/examples/jsm/objects/Water2":"9qYiN","three/examples/jsm/loaders/GLTFLoader":"dVRsF","three/examples/jsm/loaders/DRACOLoader":"lkdU4","three/examples/jsm/loaders/RGBELoader":"cfP3d"}],"9qYiN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Water", ()=>Water);
var _three = require("three");
var _reflectorJs = require("../objects/Reflector.js");
var _refractorJs = require("../objects/Refractor.js");
/**
 * References:
 *	https://alex.vlachos.com/graphics/Vlachos-SIGGRAPH10-WaterFlow.pdf
 *	http://graphicsrunner.blogspot.de/2010/08/water-using-flow-maps.html
 *
 */ class Water extends (0, _three.Mesh) {
    constructor(geometry, options = {}){
        super(geometry);
        this.isWater = true;
        this.type = "Water";
        const scope = this;
        const color = options.color !== undefined ? new (0, _three.Color)(options.color) : new (0, _three.Color)(0xFFFFFF);
        const textureWidth = options.textureWidth || 512;
        const textureHeight = options.textureHeight || 512;
        const clipBias = options.clipBias || 0;
        const flowDirection = options.flowDirection || new (0, _three.Vector2)(1, 0);
        const flowSpeed = options.flowSpeed || 0.03;
        const reflectivity = options.reflectivity || 0.02;
        const scale = options.scale || 1;
        const shader = options.shader || Water.WaterShader;
        const textureLoader = new (0, _three.TextureLoader)();
        const flowMap = options.flowMap || undefined;
        const normalMap0 = options.normalMap0 || textureLoader.load("textures/water/Water_1_M_Normal.jpg");
        const normalMap1 = options.normalMap1 || textureLoader.load("textures/water/Water_2_M_Normal.jpg");
        const cycle = 0.15; // a cycle of a flow map phase
        const halfCycle = cycle * 0.5;
        const textureMatrix = new (0, _three.Matrix4)();
        const clock = new (0, _three.Clock)();
        // internal components
        if ((0, _reflectorJs.Reflector) === undefined) {
            console.error("THREE.Water: Required component Reflector not found.");
            return;
        }
        if ((0, _refractorJs.Refractor) === undefined) {
            console.error("THREE.Water: Required component Refractor not found.");
            return;
        }
        const reflector = new (0, _reflectorJs.Reflector)(geometry, {
            textureWidth: textureWidth,
            textureHeight: textureHeight,
            clipBias: clipBias
        });
        const refractor = new (0, _refractorJs.Refractor)(geometry, {
            textureWidth: textureWidth,
            textureHeight: textureHeight,
            clipBias: clipBias
        });
        reflector.matrixAutoUpdate = false;
        refractor.matrixAutoUpdate = false;
        // material
        this.material = new (0, _three.ShaderMaterial)({
            uniforms: (0, _three.UniformsUtils).merge([
                (0, _three.UniformsLib)["fog"],
                shader.uniforms
            ]),
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader,
            transparent: true,
            fog: true
        });
        if (flowMap !== undefined) {
            this.material.defines.USE_FLOWMAP = "";
            this.material.uniforms["tFlowMap"] = {
                type: "t",
                value: flowMap
            };
        } else this.material.uniforms["flowDirection"] = {
            type: "v2",
            value: flowDirection
        };
        // maps
        normalMap0.wrapS = normalMap0.wrapT = (0, _three.RepeatWrapping);
        normalMap1.wrapS = normalMap1.wrapT = (0, _three.RepeatWrapping);
        this.material.uniforms["tReflectionMap"].value = reflector.getRenderTarget().texture;
        this.material.uniforms["tRefractionMap"].value = refractor.getRenderTarget().texture;
        this.material.uniforms["tNormalMap0"].value = normalMap0;
        this.material.uniforms["tNormalMap1"].value = normalMap1;
        // water
        this.material.uniforms["color"].value = color;
        this.material.uniforms["reflectivity"].value = reflectivity;
        this.material.uniforms["textureMatrix"].value = textureMatrix;
        // inital values
        this.material.uniforms["config"].value.x = 0; // flowMapOffset0
        this.material.uniforms["config"].value.y = halfCycle; // flowMapOffset1
        this.material.uniforms["config"].value.z = halfCycle; // halfCycle
        this.material.uniforms["config"].value.w = scale; // scale
        // functions
        function updateTextureMatrix(camera) {
            textureMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
            textureMatrix.multiply(camera.projectionMatrix);
            textureMatrix.multiply(camera.matrixWorldInverse);
            textureMatrix.multiply(scope.matrixWorld);
        }
        function updateFlow() {
            const delta = clock.getDelta();
            const config = scope.material.uniforms["config"];
            config.value.x += flowSpeed * delta; // flowMapOffset0
            config.value.y = config.value.x + halfCycle; // flowMapOffset1
            // Important: The distance between offsets should be always the value of "halfCycle".
            // Moreover, both offsets should be in the range of [ 0, cycle ].
            // This approach ensures a smooth water flow and avoids "reset" effects.
            if (config.value.x >= cycle) {
                config.value.x = 0;
                config.value.y = halfCycle;
            } else if (config.value.y >= cycle) config.value.y = config.value.y - cycle;
        }
        //
        this.onBeforeRender = function(renderer, scene, camera) {
            updateTextureMatrix(camera);
            updateFlow();
            scope.visible = false;
            reflector.matrixWorld.copy(scope.matrixWorld);
            refractor.matrixWorld.copy(scope.matrixWorld);
            reflector.onBeforeRender(renderer, scene, camera);
            refractor.onBeforeRender(renderer, scene, camera);
            scope.visible = true;
        };
    }
}
Water.WaterShader = {
    uniforms: {
        "color": {
            type: "c",
            value: null
        },
        "reflectivity": {
            type: "f",
            value: 0
        },
        "tReflectionMap": {
            type: "t",
            value: null
        },
        "tRefractionMap": {
            type: "t",
            value: null
        },
        "tNormalMap0": {
            type: "t",
            value: null
        },
        "tNormalMap1": {
            type: "t",
            value: null
        },
        "textureMatrix": {
            type: "m4",
            value: null
        },
        "config": {
            type: "v4",
            value: new (0, _three.Vector4)()
        }
    },
    vertexShader: /* glsl */ `

		#include <common>
		#include <fog_pars_vertex>
		#include <logdepthbuf_pars_vertex>

		uniform mat4 textureMatrix;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			vUv = uv;
			vCoord = textureMatrix * vec4( position, 1.0 );

			vec4 worldPosition = modelMatrix * vec4( position, 1.0 );
			vToEye = cameraPosition - worldPosition.xyz;

			vec4 mvPosition =  viewMatrix * worldPosition; // used in fog_vertex
			gl_Position = projectionMatrix * mvPosition;

			#include <logdepthbuf_vertex>
			#include <fog_vertex>

		}`,
    fragmentShader: /* glsl */ `

		#include <common>
		#include <fog_pars_fragment>
		#include <logdepthbuf_pars_fragment>

		uniform sampler2D tReflectionMap;
		uniform sampler2D tRefractionMap;
		uniform sampler2D tNormalMap0;
		uniform sampler2D tNormalMap1;

		#ifdef USE_FLOWMAP
			uniform sampler2D tFlowMap;
		#else
			uniform vec2 flowDirection;
		#endif

		uniform vec3 color;
		uniform float reflectivity;
		uniform vec4 config;

		varying vec4 vCoord;
		varying vec2 vUv;
		varying vec3 vToEye;

		void main() {

			#include <logdepthbuf_fragment>

			float flowMapOffset0 = config.x;
			float flowMapOffset1 = config.y;
			float halfCycle = config.z;
			float scale = config.w;

			vec3 toEye = normalize( vToEye );

			// determine flow direction
			vec2 flow;
			#ifdef USE_FLOWMAP
				flow = texture2D( tFlowMap, vUv ).rg * 2.0 - 1.0;
			#else
				flow = flowDirection;
			#endif
			flow.x *= - 1.0;

			// sample normal maps (distort uvs with flowdata)
			vec4 normalColor0 = texture2D( tNormalMap0, ( vUv * scale ) + flow * flowMapOffset0 );
			vec4 normalColor1 = texture2D( tNormalMap1, ( vUv * scale ) + flow * flowMapOffset1 );

			// linear interpolate to get the final normal color
			float flowLerp = abs( halfCycle - flowMapOffset0 ) / halfCycle;
			vec4 normalColor = mix( normalColor0, normalColor1, flowLerp );

			// calculate normal vector
			vec3 normal = normalize( vec3( normalColor.r * 2.0 - 1.0, normalColor.b,  normalColor.g * 2.0 - 1.0 ) );

			// calculate the fresnel term to blend reflection and refraction maps
			float theta = max( dot( toEye, normal ), 0.0 );
			float reflectance = reflectivity + ( 1.0 - reflectivity ) * pow( ( 1.0 - theta ), 5.0 );

			// calculate final uv coords
			vec3 coord = vCoord.xyz / vCoord.w;
			vec2 uv = coord.xy + coord.z * normal.xz * 0.05;

			vec4 reflectColor = texture2D( tReflectionMap, vec2( 1.0 - uv.x, uv.y ) );
			vec4 refractColor = texture2D( tRefractionMap, uv );

			// multiply water color with the mix of both textures
			gl_FragColor = vec4( color, 1.0 ) * mix( refractColor, reflectColor, reflectance );

			#include <tonemapping_fragment>
			#include <encodings_fragment>
			#include <fog_fragment>

		}`
};

},{"three":"ktPTu","../objects/Reflector.js":"6npws","../objects/Refractor.js":"hrGR5","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6npws":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Reflector", ()=>Reflector);
var _three = require("three");
class Reflector extends (0, _three.Mesh) {
    constructor(geometry, options = {}){
        super(geometry);
        this.isReflector = true;
        this.type = "Reflector";
        this.camera = new (0, _three.PerspectiveCamera)();
        const scope = this;
        const color = options.color !== undefined ? new (0, _three.Color)(options.color) : new (0, _three.Color)(0x7F7F7F);
        const textureWidth = options.textureWidth || 512;
        const textureHeight = options.textureHeight || 512;
        const clipBias = options.clipBias || 0;
        const shader = options.shader || Reflector.ReflectorShader;
        const multisample = options.multisample !== undefined ? options.multisample : 4;
        //
        const reflectorPlane = new (0, _three.Plane)();
        const normal = new (0, _three.Vector3)();
        const reflectorWorldPosition = new (0, _three.Vector3)();
        const cameraWorldPosition = new (0, _three.Vector3)();
        const rotationMatrix = new (0, _three.Matrix4)();
        const lookAtPosition = new (0, _three.Vector3)(0, 0, -1);
        const clipPlane = new (0, _three.Vector4)();
        const view = new (0, _three.Vector3)();
        const target = new (0, _three.Vector3)();
        const q = new (0, _three.Vector4)();
        const textureMatrix = new (0, _three.Matrix4)();
        const virtualCamera = this.camera;
        const renderTarget = new (0, _three.WebGLRenderTarget)(textureWidth, textureHeight, {
            samples: multisample,
            type: (0, _three.HalfFloatType)
        });
        const material = new (0, _three.ShaderMaterial)({
            uniforms: (0, _three.UniformsUtils).clone(shader.uniforms),
            fragmentShader: shader.fragmentShader,
            vertexShader: shader.vertexShader
        });
        material.uniforms["tDiffuse"].value = renderTarget.texture;
        material.uniforms["color"].value = color;
        material.uniforms["textureMatrix"].value = textureMatrix;
        this.material = material;
        this.onBeforeRender = function(renderer, scene, camera) {
            reflectorWorldPosition.setFromMatrixPosition(scope.matrixWorld);
            cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);
            rotationMatrix.extractRotation(scope.matrixWorld);
            normal.set(0, 0, 1);
            normal.applyMatrix4(rotationMatrix);
            view.subVectors(reflectorWorldPosition, cameraWorldPosition);
            // Avoid rendering when reflector is facing away
            if (view.dot(normal) > 0) return;
            view.reflect(normal).negate();
            view.add(reflectorWorldPosition);
            rotationMatrix.extractRotation(camera.matrixWorld);
            lookAtPosition.set(0, 0, -1);
            lookAtPosition.applyMatrix4(rotationMatrix);
            lookAtPosition.add(cameraWorldPosition);
            target.subVectors(reflectorWorldPosition, lookAtPosition);
            target.reflect(normal).negate();
            target.add(reflectorWorldPosition);
            virtualCamera.position.copy(view);
            virtualCamera.up.set(0, 1, 0);
            virtualCamera.up.applyMatrix4(rotationMatrix);
            virtualCamera.up.reflect(normal);
            virtualCamera.lookAt(target);
            virtualCamera.far = camera.far; // Used in WebGLBackground
            virtualCamera.updateMatrixWorld();
            virtualCamera.projectionMatrix.copy(camera.projectionMatrix);
            // Update the texture matrix
            textureMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
            textureMatrix.multiply(virtualCamera.projectionMatrix);
            textureMatrix.multiply(virtualCamera.matrixWorldInverse);
            textureMatrix.multiply(scope.matrixWorld);
            // Now update projection matrix with new clip plane, implementing code from: http://www.terathon.com/code/oblique.html
            // Paper explaining this technique: http://www.terathon.com/lengyel/Lengyel-Oblique.pdf
            reflectorPlane.setFromNormalAndCoplanarPoint(normal, reflectorWorldPosition);
            reflectorPlane.applyMatrix4(virtualCamera.matrixWorldInverse);
            clipPlane.set(reflectorPlane.normal.x, reflectorPlane.normal.y, reflectorPlane.normal.z, reflectorPlane.constant);
            const projectionMatrix = virtualCamera.projectionMatrix;
            q.x = (Math.sign(clipPlane.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
            q.y = (Math.sign(clipPlane.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
            q.z = -1;
            q.w = (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];
            // Calculate the scaled plane vector
            clipPlane.multiplyScalar(2.0 / clipPlane.dot(q));
            // Replacing the third row of the projection matrix
            projectionMatrix.elements[2] = clipPlane.x;
            projectionMatrix.elements[6] = clipPlane.y;
            projectionMatrix.elements[10] = clipPlane.z + 1.0 - clipBias;
            projectionMatrix.elements[14] = clipPlane.w;
            // Render
            scope.visible = false;
            const currentRenderTarget = renderer.getRenderTarget();
            const currentXrEnabled = renderer.xr.enabled;
            const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;
            const currentOutputEncoding = renderer.outputEncoding;
            const currentToneMapping = renderer.toneMapping;
            renderer.xr.enabled = false; // Avoid camera modification
            renderer.shadowMap.autoUpdate = false; // Avoid re-computing shadows
            renderer.outputEncoding = (0, _three.LinearEncoding);
            renderer.toneMapping = (0, _three.NoToneMapping);
            renderer.setRenderTarget(renderTarget);
            renderer.state.buffers.depth.setMask(true); // make sure the depth buffer is writable so it can be properly cleared, see #18897
            if (renderer.autoClear === false) renderer.clear();
            renderer.render(scene, virtualCamera);
            renderer.xr.enabled = currentXrEnabled;
            renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;
            renderer.outputEncoding = currentOutputEncoding;
            renderer.toneMapping = currentToneMapping;
            renderer.setRenderTarget(currentRenderTarget);
            // Restore viewport
            const viewport = camera.viewport;
            if (viewport !== undefined) renderer.state.viewport(viewport);
            scope.visible = true;
        };
        this.getRenderTarget = function() {
            return renderTarget;
        };
        this.dispose = function() {
            renderTarget.dispose();
            scope.material.dispose();
        };
    }
}
Reflector.ReflectorShader = {
    uniforms: {
        "color": {
            value: null
        },
        "tDiffuse": {
            value: null
        },
        "textureMatrix": {
            value: null
        }
    },
    vertexShader: /* glsl */ `
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,
    fragmentShader: /* glsl */ `
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`
};

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hrGR5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Refractor", ()=>Refractor);
var _three = require("three");
class Refractor extends (0, _three.Mesh) {
    constructor(geometry, options = {}){
        super(geometry);
        this.isRefractor = true;
        this.type = "Refractor";
        this.camera = new (0, _three.PerspectiveCamera)();
        const scope = this;
        const color = options.color !== undefined ? new (0, _three.Color)(options.color) : new (0, _three.Color)(0x7F7F7F);
        const textureWidth = options.textureWidth || 512;
        const textureHeight = options.textureHeight || 512;
        const clipBias = options.clipBias || 0;
        const shader = options.shader || Refractor.RefractorShader;
        const multisample = options.multisample !== undefined ? options.multisample : 4;
        //
        const virtualCamera = this.camera;
        virtualCamera.matrixAutoUpdate = false;
        virtualCamera.userData.refractor = true;
        //
        const refractorPlane = new (0, _three.Plane)();
        const textureMatrix = new (0, _three.Matrix4)();
        // render target
        const renderTarget = new (0, _three.WebGLRenderTarget)(textureWidth, textureHeight, {
            samples: multisample,
            type: (0, _three.HalfFloatType)
        });
        // material
        this.material = new (0, _three.ShaderMaterial)({
            uniforms: (0, _three.UniformsUtils).clone(shader.uniforms),
            vertexShader: shader.vertexShader,
            fragmentShader: shader.fragmentShader,
            transparent: true // ensures, refractors are drawn from farthest to closest
        });
        this.material.uniforms["color"].value = color;
        this.material.uniforms["tDiffuse"].value = renderTarget.texture;
        this.material.uniforms["textureMatrix"].value = textureMatrix;
        // functions
        const visible = function() {
            const refractorWorldPosition = new (0, _three.Vector3)();
            const cameraWorldPosition = new (0, _three.Vector3)();
            const rotationMatrix = new (0, _three.Matrix4)();
            const view = new (0, _three.Vector3)();
            const normal = new (0, _three.Vector3)();
            return function visible(camera) {
                refractorWorldPosition.setFromMatrixPosition(scope.matrixWorld);
                cameraWorldPosition.setFromMatrixPosition(camera.matrixWorld);
                view.subVectors(refractorWorldPosition, cameraWorldPosition);
                rotationMatrix.extractRotation(scope.matrixWorld);
                normal.set(0, 0, 1);
                normal.applyMatrix4(rotationMatrix);
                return view.dot(normal) < 0;
            };
        }();
        const updateRefractorPlane = function() {
            const normal = new (0, _three.Vector3)();
            const position = new (0, _three.Vector3)();
            const quaternion = new (0, _three.Quaternion)();
            const scale = new (0, _three.Vector3)();
            return function updateRefractorPlane() {
                scope.matrixWorld.decompose(position, quaternion, scale);
                normal.set(0, 0, 1).applyQuaternion(quaternion).normalize();
                // flip the normal because we want to cull everything above the plane
                normal.negate();
                refractorPlane.setFromNormalAndCoplanarPoint(normal, position);
            };
        }();
        const updateVirtualCamera = function() {
            const clipPlane = new (0, _three.Plane)();
            const clipVector = new (0, _three.Vector4)();
            const q = new (0, _three.Vector4)();
            return function updateVirtualCamera(camera) {
                virtualCamera.matrixWorld.copy(camera.matrixWorld);
                virtualCamera.matrixWorldInverse.copy(virtualCamera.matrixWorld).invert();
                virtualCamera.projectionMatrix.copy(camera.projectionMatrix);
                virtualCamera.far = camera.far; // used in WebGLBackground
                // The following code creates an oblique view frustum for clipping.
                // see: Lengyel, Eric. “Oblique View Frustum Depth Projection and Clipping”.
                // Journal of Game Development, Vol. 1, No. 2 (2005), Charles River Media, pp. 5–16
                clipPlane.copy(refractorPlane);
                clipPlane.applyMatrix4(virtualCamera.matrixWorldInverse);
                clipVector.set(clipPlane.normal.x, clipPlane.normal.y, clipPlane.normal.z, clipPlane.constant);
                // calculate the clip-space corner point opposite the clipping plane and
                // transform it into camera space by multiplying it by the inverse of the projection matrix
                const projectionMatrix = virtualCamera.projectionMatrix;
                q.x = (Math.sign(clipVector.x) + projectionMatrix.elements[8]) / projectionMatrix.elements[0];
                q.y = (Math.sign(clipVector.y) + projectionMatrix.elements[9]) / projectionMatrix.elements[5];
                q.z = -1;
                q.w = (1.0 + projectionMatrix.elements[10]) / projectionMatrix.elements[14];
                // calculate the scaled plane vector
                clipVector.multiplyScalar(2.0 / clipVector.dot(q));
                // replacing the third row of the projection matrix
                projectionMatrix.elements[2] = clipVector.x;
                projectionMatrix.elements[6] = clipVector.y;
                projectionMatrix.elements[10] = clipVector.z + 1.0 - clipBias;
                projectionMatrix.elements[14] = clipVector.w;
            };
        }();
        // This will update the texture matrix that is used for projective texture mapping in the shader.
        // see: http://developer.download.nvidia.com/assets/gamedev/docs/projective_texture_mapping.pdf
        function updateTextureMatrix(camera) {
            // this matrix does range mapping to [ 0, 1 ]
            textureMatrix.set(0.5, 0.0, 0.0, 0.5, 0.0, 0.5, 0.0, 0.5, 0.0, 0.0, 0.5, 0.5, 0.0, 0.0, 0.0, 1.0);
            // we use "Object Linear Texgen", so we need to multiply the texture matrix T
            // (matrix above) with the projection and view matrix of the virtual camera
            // and the model matrix of the refractor
            textureMatrix.multiply(camera.projectionMatrix);
            textureMatrix.multiply(camera.matrixWorldInverse);
            textureMatrix.multiply(scope.matrixWorld);
        }
        //
        function render(renderer, scene, camera) {
            scope.visible = false;
            const currentRenderTarget = renderer.getRenderTarget();
            const currentXrEnabled = renderer.xr.enabled;
            const currentShadowAutoUpdate = renderer.shadowMap.autoUpdate;
            const currentOutputEncoding = renderer.outputEncoding;
            const currentToneMapping = renderer.toneMapping;
            renderer.xr.enabled = false; // avoid camera modification
            renderer.shadowMap.autoUpdate = false; // avoid re-computing shadows
            renderer.outputEncoding = (0, _three.LinearEncoding);
            renderer.toneMapping = (0, _three.NoToneMapping);
            renderer.setRenderTarget(renderTarget);
            if (renderer.autoClear === false) renderer.clear();
            renderer.render(scene, virtualCamera);
            renderer.xr.enabled = currentXrEnabled;
            renderer.shadowMap.autoUpdate = currentShadowAutoUpdate;
            renderer.outputEncoding = currentOutputEncoding;
            renderer.toneMapping = currentToneMapping;
            renderer.setRenderTarget(currentRenderTarget);
            // restore viewport
            const viewport = camera.viewport;
            if (viewport !== undefined) renderer.state.viewport(viewport);
            scope.visible = true;
        }
        //
        this.onBeforeRender = function(renderer, scene, camera) {
            // ensure refractors are rendered only once per frame
            if (camera.userData.refractor === true) return;
            // avoid rendering when the refractor is viewed from behind
            if (!visible(camera) === true) return;
            // update
            updateRefractorPlane();
            updateTextureMatrix(camera);
            updateVirtualCamera(camera);
            render(renderer, scene, camera);
        };
        this.getRenderTarget = function() {
            return renderTarget;
        };
        this.dispose = function() {
            renderTarget.dispose();
            scope.material.dispose();
        };
    }
}
Refractor.RefractorShader = {
    uniforms: {
        "color": {
            value: null
        },
        "tDiffuse": {
            value: null
        },
        "textureMatrix": {
            value: null
        }
    },
    vertexShader: /* glsl */ `

		uniform mat4 textureMatrix;

		varying vec4 vUv;

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,
    fragmentShader: /* glsl */ `

		uniform vec3 color;
		uniform sampler2D tDiffuse;

		varying vec4 vUv;

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <encodings_fragment>

		}`
};

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lkdU4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "DRACOLoader", ()=>DRACOLoader);
var _three = require("three");
const _taskCache = new WeakMap();
class DRACOLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
        this.decoderPath = "";
        this.decoderConfig = {};
        this.decoderBinary = null;
        this.decoderPending = null;
        this.workerLimit = 4;
        this.workerPool = [];
        this.workerNextTaskID = 1;
        this.workerSourceURL = "";
        this.defaultAttributeIDs = {
            position: "POSITION",
            normal: "NORMAL",
            color: "COLOR",
            uv: "TEX_COORD"
        };
        this.defaultAttributeTypes = {
            position: "Float32Array",
            normal: "Float32Array",
            color: "Float32Array",
            uv: "Float32Array"
        };
    }
    setDecoderPath(path) {
        this.decoderPath = path;
        return this;
    }
    setDecoderConfig(config) {
        this.decoderConfig = config;
        return this;
    }
    setWorkerLimit(workerLimit) {
        this.workerLimit = workerLimit;
        return this;
    }
    load(url, onLoad, onProgress, onError) {
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setResponseType("arraybuffer");
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, (buffer)=>{
            this.decodeDracoFile(buffer, onLoad).catch(onError);
        }, onProgress, onError);
    }
    decodeDracoFile(buffer, callback, attributeIDs, attributeTypes) {
        const taskConfig = {
            attributeIDs: attributeIDs || this.defaultAttributeIDs,
            attributeTypes: attributeTypes || this.defaultAttributeTypes,
            useUniqueIDs: !!attributeIDs
        };
        return this.decodeGeometry(buffer, taskConfig).then(callback);
    }
    decodeGeometry(buffer, taskConfig) {
        const taskKey = JSON.stringify(taskConfig);
        // Check for an existing task using this buffer. A transferred buffer cannot be transferred
        // again from this thread.
        if (_taskCache.has(buffer)) {
            const cachedTask = _taskCache.get(buffer);
            if (cachedTask.key === taskKey) return cachedTask.promise;
            else if (buffer.byteLength === 0) // Technically, it would be possible to wait for the previous task to complete,
            // transfer the buffer back, and decode again with the second configuration. That
            // is complex, and I don't know of any reason to decode a Draco buffer twice in
            // different ways, so this is left unimplemented.
            throw new Error("THREE.DRACOLoader: Unable to re-decode a buffer with different settings. Buffer has already been transferred.");
        }
        //
        let worker;
        const taskID = this.workerNextTaskID++;
        const taskCost = buffer.byteLength;
        // Obtain a worker and assign a task, and construct a geometry instance
        // when the task completes.
        const geometryPending = this._getWorker(taskID, taskCost).then((_worker)=>{
            worker = _worker;
            return new Promise((resolve, reject)=>{
                worker._callbacks[taskID] = {
                    resolve,
                    reject
                };
                worker.postMessage({
                    type: "decode",
                    id: taskID,
                    taskConfig,
                    buffer
                }, [
                    buffer
                ]);
            // this.debug();
            });
        }).then((message)=>this._createGeometry(message.geometry));
        // Remove task from the task list.
        // Note: replaced '.finally()' with '.catch().then()' block - iOS 11 support (#19416)
        geometryPending.catch(()=>true).then(()=>{
            if (worker && taskID) this._releaseTask(worker, taskID);
        });
        // Cache the task result.
        _taskCache.set(buffer, {
            key: taskKey,
            promise: geometryPending
        });
        return geometryPending;
    }
    _createGeometry(geometryData) {
        const geometry = new (0, _three.BufferGeometry)();
        if (geometryData.index) geometry.setIndex(new (0, _three.BufferAttribute)(geometryData.index.array, 1));
        for(let i = 0; i < geometryData.attributes.length; i++){
            const attribute = geometryData.attributes[i];
            const name = attribute.name;
            const array = attribute.array;
            const itemSize = attribute.itemSize;
            geometry.setAttribute(name, new (0, _three.BufferAttribute)(array, itemSize));
        }
        return geometry;
    }
    _loadLibrary(url, responseType) {
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.decoderPath);
        loader.setResponseType(responseType);
        loader.setWithCredentials(this.withCredentials);
        return new Promise((resolve, reject)=>{
            loader.load(url, resolve, undefined, reject);
        });
    }
    preload() {
        this._initDecoder();
        return this;
    }
    _initDecoder() {
        if (this.decoderPending) return this.decoderPending;
        const useJS = typeof WebAssembly !== "object" || this.decoderConfig.type === "js";
        const librariesPending = [];
        if (useJS) librariesPending.push(this._loadLibrary("draco_decoder.js", "text"));
        else {
            librariesPending.push(this._loadLibrary("draco_wasm_wrapper.js", "text"));
            librariesPending.push(this._loadLibrary("draco_decoder.wasm", "arraybuffer"));
        }
        this.decoderPending = Promise.all(librariesPending).then((libraries)=>{
            const jsContent = libraries[0];
            if (!useJS) this.decoderConfig.wasmBinary = libraries[1];
            const fn = DRACOWorker.toString();
            const body = [
                "/* draco decoder */",
                jsContent,
                "",
                "/* worker */",
                fn.substring(fn.indexOf("{") + 1, fn.lastIndexOf("}"))
            ].join("\n");
            this.workerSourceURL = URL.createObjectURL(new Blob([
                body
            ]));
        });
        return this.decoderPending;
    }
    _getWorker(taskID, taskCost) {
        return this._initDecoder().then(()=>{
            if (this.workerPool.length < this.workerLimit) {
                const worker = new Worker(this.workerSourceURL);
                worker._callbacks = {};
                worker._taskCosts = {};
                worker._taskLoad = 0;
                worker.postMessage({
                    type: "init",
                    decoderConfig: this.decoderConfig
                });
                worker.onmessage = function(e) {
                    const message = e.data;
                    switch(message.type){
                        case "decode":
                            worker._callbacks[message.id].resolve(message);
                            break;
                        case "error":
                            worker._callbacks[message.id].reject(message);
                            break;
                        default:
                            console.error('THREE.DRACOLoader: Unexpected message, "' + message.type + '"');
                    }
                };
                this.workerPool.push(worker);
            } else this.workerPool.sort(function(a, b) {
                return a._taskLoad > b._taskLoad ? -1 : 1;
            });
            const worker1 = this.workerPool[this.workerPool.length - 1];
            worker1._taskCosts[taskID] = taskCost;
            worker1._taskLoad += taskCost;
            return worker1;
        });
    }
    _releaseTask(worker, taskID) {
        worker._taskLoad -= worker._taskCosts[taskID];
        delete worker._callbacks[taskID];
        delete worker._taskCosts[taskID];
    }
    debug() {
        console.log("Task load: ", this.workerPool.map((worker)=>worker._taskLoad));
    }
    dispose() {
        for(let i = 0; i < this.workerPool.length; ++i)this.workerPool[i].terminate();
        this.workerPool.length = 0;
        return this;
    }
}
/* WEB WORKER */ function DRACOWorker() {
    let decoderConfig;
    let decoderPending;
    onmessage = function(e) {
        const message = e.data;
        switch(message.type){
            case "init":
                decoderConfig = message.decoderConfig;
                decoderPending = new Promise(function(resolve /*, reject*/ ) {
                    decoderConfig.onModuleLoaded = function(draco) {
                        // Module is Promise-like. Wrap before resolving to avoid loop.
                        resolve({
                            draco: draco
                        });
                    };
                    DracoDecoderModule(decoderConfig); // eslint-disable-line no-undef
                });
                break;
            case "decode":
                const buffer = message.buffer;
                const taskConfig = message.taskConfig;
                decoderPending.then((module)=>{
                    const draco = module.draco;
                    const decoder = new draco.Decoder();
                    const decoderBuffer = new draco.DecoderBuffer();
                    decoderBuffer.Init(new Int8Array(buffer), buffer.byteLength);
                    try {
                        const geometry = decodeGeometry(draco, decoder, decoderBuffer, taskConfig);
                        const buffers = geometry.attributes.map((attr)=>attr.array.buffer);
                        if (geometry.index) buffers.push(geometry.index.array.buffer);
                        self.postMessage({
                            type: "decode",
                            id: message.id,
                            geometry
                        }, buffers);
                    } catch (error) {
                        console.error(error);
                        self.postMessage({
                            type: "error",
                            id: message.id,
                            error: error.message
                        });
                    } finally{
                        draco.destroy(decoderBuffer);
                        draco.destroy(decoder);
                    }
                });
                break;
        }
    };
    function decodeGeometry(draco, decoder, decoderBuffer, taskConfig) {
        const attributeIDs = taskConfig.attributeIDs;
        const attributeTypes = taskConfig.attributeTypes;
        let dracoGeometry;
        let decodingStatus;
        const geometryType = decoder.GetEncodedGeometryType(decoderBuffer);
        if (geometryType === draco.TRIANGULAR_MESH) {
            dracoGeometry = new draco.Mesh();
            decodingStatus = decoder.DecodeBufferToMesh(decoderBuffer, dracoGeometry);
        } else if (geometryType === draco.POINT_CLOUD) {
            dracoGeometry = new draco.PointCloud();
            decodingStatus = decoder.DecodeBufferToPointCloud(decoderBuffer, dracoGeometry);
        } else throw new Error("THREE.DRACOLoader: Unexpected geometry type.");
        if (!decodingStatus.ok() || dracoGeometry.ptr === 0) throw new Error("THREE.DRACOLoader: Decoding failed: " + decodingStatus.error_msg());
        const geometry = {
            index: null,
            attributes: []
        };
        // Gather all vertex attributes.
        for(const attributeName in attributeIDs){
            const attributeType = self[attributeTypes[attributeName]];
            let attribute;
            let attributeID;
            // A Draco file may be created with default vertex attributes, whose attribute IDs
            // are mapped 1:1 from their semantic name (POSITION, NORMAL, ...). Alternatively,
            // a Draco file may contain a custom set of attributes, identified by known unique
            // IDs. glTF files always do the latter, and `.drc` files typically do the former.
            if (taskConfig.useUniqueIDs) {
                attributeID = attributeIDs[attributeName];
                attribute = decoder.GetAttributeByUniqueId(dracoGeometry, attributeID);
            } else {
                attributeID = decoder.GetAttributeId(dracoGeometry, draco[attributeIDs[attributeName]]);
                if (attributeID === -1) continue;
                attribute = decoder.GetAttribute(dracoGeometry, attributeID);
            }
            geometry.attributes.push(decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute));
        }
        // Add index.
        if (geometryType === draco.TRIANGULAR_MESH) geometry.index = decodeIndex(draco, decoder, dracoGeometry);
        draco.destroy(dracoGeometry);
        return geometry;
    }
    function decodeIndex(draco, decoder, dracoGeometry) {
        const numFaces = dracoGeometry.num_faces();
        const numIndices = numFaces * 3;
        const byteLength = numIndices * 4;
        const ptr = draco._malloc(byteLength);
        decoder.GetTrianglesUInt32Array(dracoGeometry, byteLength, ptr);
        const index = new Uint32Array(draco.HEAPF32.buffer, ptr, numIndices).slice();
        draco._free(ptr);
        return {
            array: index,
            itemSize: 1
        };
    }
    function decodeAttribute(draco, decoder, dracoGeometry, attributeName, attributeType, attribute) {
        const numComponents = attribute.num_components();
        const numPoints = dracoGeometry.num_points();
        const numValues = numPoints * numComponents;
        const byteLength = numValues * attributeType.BYTES_PER_ELEMENT;
        const dataType = getDracoDataType(draco, attributeType);
        const ptr = draco._malloc(byteLength);
        decoder.GetAttributeDataArrayForAllPoints(dracoGeometry, attribute, dataType, byteLength, ptr);
        const array = new attributeType(draco.HEAPF32.buffer, ptr, numValues).slice();
        draco._free(ptr);
        return {
            name: attributeName,
            array: array,
            itemSize: numComponents
        };
    }
    function getDracoDataType(draco, attributeType) {
        switch(attributeType){
            case Float32Array:
                return draco.DT_FLOAT32;
            case Int8Array:
                return draco.DT_INT8;
            case Int16Array:
                return draco.DT_INT16;
            case Int32Array:
                return draco.DT_INT32;
            case Uint8Array:
                return draco.DT_UINT8;
            case Uint16Array:
                return draco.DT_UINT16;
            case Uint32Array:
                return draco.DT_UINT32;
        }
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["39wmy","jA2ur"], "jA2ur", "parcelRequire9b34")

//# sourceMappingURL=index.d7358446.js.map
