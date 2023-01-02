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
})({"5xoK2":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "910ef4714f779506";
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

},{}],"dij74":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _three = require("three");
// 轨道控制器
var _orbitControls = require("three/examples/jsm/controls/OrbitControls");
var _vertexGlsl = require("../shader/vertex.glsl");
var _vertexGlslDefault = parcelHelpers.interopDefault(_vertexGlsl);
var _fragmentGlsl = require("../shader/fragment.glsl");
var _fragmentGlslDefault = parcelHelpers.interopDefault(_fragmentGlsl);
var _rgbeloader = require("three/examples/jsm/loaders/RGBELoader");
var _gltfloader = require("three/examples/jsm/loaders/GLTFLoader");
var _gsap = require("gsap");
var _gsapDefault = parcelHelpers.interopDefault(_gsap);
var _firework = require("./firework");
var _fireworkDefault = parcelHelpers.interopDefault(_firework);
const scene = new _three.Scene();
const camera = new _three.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.set(0, 0, 20);
scene.add(camera);
const rgbeLoader = new (0, _rgbeloader.RGBELoader)();
rgbeLoader.loadAsync("/assets/imgs/4k.hdr").then((texture)=>{
    // 按圆柱渲染
    texture.mapping = _three.EquirectangularReflectionMapping;
    scene.background = texture;
    scene.environment = texture;
});
// const material = new THREE.MeshBasicMaterial({ color: '#00ff00' })
// 创建着色器
const shaderMaterial = new _three.ShaderMaterial({
    vertexShader: (0, _vertexGlslDefault.default),
    fragmentShader: (0, _fragmentGlslDefault.default),
    // wireframe: true,
    side: _three.DoubleSide,
    uniforms: {
        uTime: {
            value: 0
        }
    }
});
const gltfLoader = new (0, _gltfloader.GLTFLoader)();
let lightBox = null;
gltfLoader.load("/assets/model/flyLight.glb", (gltf)=>{
    lightBox = gltf.scene.children[1];
    lightBox.material = shaderMaterial;
    for(let i = 0; i < 10; i++){
        let flyLight = gltf.scene.clone(true);
        let x = (Math.random() - 0.5) * 300;
        let z = (Math.random() - 0.5) * 300;
        let y = Math.random() * 60 + 25;
        flyLight.position.set(x, y, z);
        (0, _gsapDefault.default).to(flyLight.rotation, {
            y: 2 * Math.PI,
            duration: 10 + Math.random() * 30,
            repeat: -1
        });
        (0, _gsapDefault.default).to(flyLight.position, {
            x: "+=" + Math.random() * 5,
            y: "+=" + Math.random() * 20,
            yoyo: true,
            duration: 5 + Math.random() * 10,
            repeat: -1
        });
        scene.add(flyLight);
    }
});
const renderer = new _three.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);
// 解码方式 对应图片的
renderer.outputEncoding = _three.sRGBEncoding;
// 色调映射 一般都用这个 电影效果
renderer.toneMapping = _three.ACESFilmicToneMapping;
renderer.toneMappingExposure = 0.6;
const controls = new (0, _orbitControls.OrbitControls)(camera, renderer.domElement);
// 开启阻尼 更真实
controls.enableDamping = true;
// 自动旋转
controls.autoRotate = true;
controls.autoRotateSpeed = 0.1;
// 视角角度
// controls.maxPolarAngle = Math.PI / 4 * 3;
// controls.minPolarAngle = Math.PI / 4 * 3;
// 坐标轴
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );
controls.update();
let fireworks = [];
let createFireworks = ()=>{
    let color = `hsl(${Math.floor(Math.random() * 360)}, 100%, 80%)`;
    let position = {
        x: (Math.random() - 0.5) * 40,
        z: (Math.random() - 0.5) * 40,
        y: 7 + Math.random() * 25
    };
    let firework = new (0, _fireworkDefault.default)(color, position);
    firework.addScene(scene, camera);
    fireworks.push(firework);
};
window.addEventListener("click", createFireworks);
const clock = new _three.Clock();
function animate() {
    const elapsedTime = clock.getElapsedTime();
    shaderMaterial.uniforms.uTime.value = elapsedTime;
    controls.update();
    renderer.render(scene, camera);
    fireworks.forEach((item, i)=>{
        const res = item.update();
        if (res === "remove") fireworks.splice(i, 1);
    });
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
});

},{"three":"ktPTu","three/examples/jsm/controls/OrbitControls":"7mqRv","../shader/vertex.glsl":"1PruZ","../shader/fragment.glsl":"6FyAG","three/examples/jsm/loaders/RGBELoader":"cfP3d","three/examples/jsm/loaders/GLTFLoader":"dVRsF","gsap":"fPSuC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","./firework":"bKssG"}],"1PruZ":[function(require,module,exports) {
module.exports = "precision lowp float;\n#define GLSLIFY 1\n\nvarying vec4 vPosition;\nvarying vec4 gPosition;\nvoid main() {\n  vec4 modelPosition = modelMatrix * vec4(position, 1);\n  vPosition = modelPosition;\n  gPosition = vec4(position, 1.0);\n\n  gl_Position = projectionMatrix * viewMatrix * modelPosition;\n}";

},{}],"6FyAG":[function(require,module,exports) {
module.exports = "precision lowp float;\n#define GLSLIFY 1\n\nvarying vec4 vPosition;\nvarying vec4 gPosition;\n\nvoid main() {\n  vec4 redColor = vec4(1,0,0,1);\n  vec4 yellowColor = vec4(1,1,0.5,1);\n  vec4 mixColor = mix(yellowColor, redColor, gPosition.y / 5.0);\n\n  if (gl_FrontFacing) {\n    gl_FragColor = vec4(mixColor.xyz - (vPosition.y - 20.0) / 80.0 - 0.2, 1.0);\n  } else {\n    gl_FragColor = vec4(mixColor.xyz, 1.0);\n  }\n}";

},{}],"bKssG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _three = require("three");
var _vertexGlsl = require("../shader/startPoint/vertex.glsl");
var _vertexGlslDefault = parcelHelpers.interopDefault(_vertexGlsl);
var _fragmentGlsl = require("../shader/startPoint/fragment.glsl");
var _fragmentGlslDefault = parcelHelpers.interopDefault(_fragmentGlsl);
var _vertexGlsl1 = require("../shader/firework/vertex.glsl");
var _vertexGlslDefault1 = parcelHelpers.interopDefault(_vertexGlsl1);
var _fragmentGlsl1 = require("../shader/firework/fragment.glsl");
var _fragmentGlslDefault1 = parcelHelpers.interopDefault(_fragmentGlsl1);
class Firework {
    constructor(color, to, from = {
        x: 0,
        y: 0,
        z: 0
    }){
        this.color = new _three.Color(color);
        this.startGeometry = new _three.BufferGeometry();
        const startPositionArray = new Float32Array(3);
        startPositionArray[0] = from.x;
        startPositionArray[1] = from.y;
        startPositionArray[2] = from.z;
        this.startGeometry.setAttribute("position", new _three.BufferAttribute(startPositionArray, 3));
        const aStepArray = new Float32Array(3);
        aStepArray[0] = to.x - from.x;
        aStepArray[1] = to.y - from.y;
        aStepArray[2] = to.z - from.z;
        this.startGeometry.setAttribute("aStep", new _three.BufferAttribute(aStepArray, 3));
        this.startMaterial = new _three.ShaderMaterial({
            vertexShader: (0, _vertexGlslDefault.default),
            fragmentShader: (0, _fragmentGlslDefault.default),
            transparent: true,
            blending: _three.AdditiveBlending,
            depthWrite: false,
            uniforms: {
                uTime: {
                    value: 0
                },
                uSize: {
                    value: 20
                },
                uColor: {
                    value: this.color
                }
            }
        });
        this.startPoint = new _three.Points(this.startGeometry, this.startMaterial);
        this.clock = new _three.Clock();
        this.fireworkGeometry = new _three.BufferGeometry();
        this.FireworkCount = 180 + Math.floor(Math.random() * 180);
        const positionFireworksArray = new Float32Array(this.FireworkCount * 3);
        const scaleFireArray = new Float32Array(this.FireworkCount);
        const directionArray = new Float32Array(this.FireworkCount * 3);
        for(let i = 0; i < this.FireworkCount; i++){
            positionFireworksArray[i * 3 + 0] = to.x;
            positionFireworksArray[i * 3 + 1] = to.y;
            positionFireworksArray[i * 3 + 2] = to.z;
            scaleFireArray[i] = Math.random();
            let theta = Math.random() * 2 * Math.PI;
            let beta = Math.random() * 2 * Math.PI;
            let r = Math.random();
            directionArray[i * 3 + 0] = r * Math.sin(theta) + r * Math.sin(beta);
            directionArray[i * 3 + 1] = r * Math.cos(theta) + r * Math.cos(beta);
            directionArray[i * 3 + 2] = r * Math.sin(theta) + r * Math.cos(beta);
        }
        this.fireworkGeometry.setAttribute("position", new _three.BufferAttribute(positionFireworksArray, 3));
        this.fireworkGeometry.setAttribute("aScale", new _three.BufferAttribute(scaleFireArray, 1));
        this.fireworkGeometry.setAttribute("aRandom", new _three.BufferAttribute(directionArray, 3));
        this.fireworkMaterial = new _three.ShaderMaterial({
            vertexShader: (0, _vertexGlslDefault1.default),
            fragmentShader: (0, _fragmentGlslDefault1.default),
            transparent: true,
            blending: _three.AdditiveBlending,
            depthWrite: false,
            uniforms: {
                uSize: {
                    value: 0
                },
                uTime: {
                    value: 0
                },
                uColor: {
                    value: this.color
                }
            }
        });
        this.firework = new _three.Points(this.fireworkGeometry, this.fireworkMaterial);
        this.listener = new _three.AudioListener();
        this.listenerSend = new _three.AudioListener();
        this.sound = new _three.Audio(this.listener);
        this.soundSend = new _three.Audio(this.listenerSend);
        const audioLoader = new _three.AudioLoader();
        audioLoader.load("/textures/firework.mp3", (buffer)=>{
            this.sound.setBuffer(buffer);
            this.sound.setLoop(false);
            this.sound.setVolume(1);
        });
        audioLoader.load("/textures/send.mp3", (buffer)=>{
            this.soundSend.setBuffer(buffer);
            this.soundSend.setLoop(false);
            this.soundSend.setVolume(1);
        });
    }
    addScene(scene, camera) {
        scene.add(this.startPoint);
        scene.add(this.firework);
        this.scene = scene;
    }
    update() {
        const elapsedTime = this.clock.getElapsedTime();
        if (elapsedTime < 0.2) return;
        if (elapsedTime < 1) {
            this.startMaterial.uniforms.uTime.value = elapsedTime;
            this.startMaterial.uniforms.uSize.value = 20;
            if (!this.soundSend.isPlaying && !this.playSend) {
                this.soundSend.play();
                this.playSend = true;
            }
        } else {
            const time = elapsedTime - 1;
            this.startMaterial.uniforms.uSize.value = 0;
            this.startPoint.clear();
            this.startGeometry.dispose();
            this.startMaterial.dispose();
            if (!this.sound.isPlaying && !this.play) {
                this.sound.play();
                this.play = true;
            }
            this.fireworkMaterial.uniforms.uSize.value = 20;
            this.fireworkMaterial.uniforms.uTime.value = time;
            if (time > 5) {
                this.fireworkMaterial.uniforms.uSize.value = 0;
                this.firework.clear();
                this.fireworkGeometry.dispose();
                this.fireworkMaterial.dispose();
                this.scene.remove(this.firework);
                this.scene.remove(this.startPoint);
                return "remove";
            }
        }
    }
}
exports.default = Firework;

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../shader/startPoint/vertex.glsl":"6tDGr","../shader/startPoint/fragment.glsl":"8ekQO","../shader/firework/vertex.glsl":"a7cV2","../shader/firework/fragment.glsl":"1t2Uj"}],"6tDGr":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute vec3 aStep;\nuniform float uTime;\nuniform float uSize;\nvoid main() {\n  vec4 modelPosition = modelMatrix * vec4(position, 1);\n  modelPosition.xyz += (aStep*uTime);\n  vec4 viewPosition = viewMatrix * modelPosition;\n\n  gl_Position = projectionMatrix * viewPosition;\n\n  gl_PointSize = uSize;\n}";

},{}],"8ekQO":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform vec3 uColor;\nvoid main() {\n  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n  float strength = pow(1.0 - distanceToCenter * 2.0, 1.5);\n\n  gl_FragColor = vec4(uColor,strength);\n}";

},{}],"a7cV2":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nattribute float aScale;\nattribute vec3 aRandom;\n\nuniform float uTime;\nuniform float uSize;\nvoid main() {\n  vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n  modelPosition.xyz += aRandom * uTime * 10.0;\n\n  vec4 viewPosition = viewMatrix * modelPosition;\n\n  gl_Position = projectionMatrix * viewPosition;\n\n  gl_PointSize = uSize * aScale - (uTime * 20.0);\n}";

},{}],"1t2Uj":[function(require,module,exports) {
module.exports = "#define GLSLIFY 1\nuniform vec3 uColor;\nvoid main() {\n  float distanceToCenter = distance(gl_PointCoord, vec2(0.5));\n  float strength = pow(1.0 - distanceToCenter * 2.0, 1.5);\n\n  gl_FragColor = vec4(uColor,strength);\n}";

},{}]},["5xoK2","dij74"], "dij74", "parcelRequire9b34")

//# sourceMappingURL=index.4f779506.js.map
