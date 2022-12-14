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
})({"81nEJ":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "74f9089e96ef440d";
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
        console.log("[parcel] ??? Error resolved");
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
          ???? ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>???? <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
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

},{}],"dVRsF":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "GLTFLoader", ()=>GLTFLoader);
var _three = require("three");
class GLTFLoader extends (0, _three.Loader) {
    constructor(manager){
        super(manager);
        this.dracoLoader = null;
        this.ktx2Loader = null;
        this.meshoptDecoder = null;
        this.pluginCallbacks = [];
        this.register(function(parser) {
            return new GLTFMaterialsClearcoatExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureBasisUExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFTextureWebPExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsSheenExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsTransmissionExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsVolumeExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsIorExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsEmissiveStrengthExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsSpecularExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMaterialsIridescenceExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFLightsExtension(parser);
        });
        this.register(function(parser) {
            return new GLTFMeshoptCompression(parser);
        });
        this.register(function(parser) {
            return new GLTFMeshGpuInstancing(parser);
        });
    }
    load(url, onLoad, onProgress, onError) {
        const scope = this;
        let resourcePath;
        if (this.resourcePath !== "") resourcePath = this.resourcePath;
        else if (this.path !== "") resourcePath = this.path;
        else resourcePath = (0, _three.LoaderUtils).extractUrlBase(url);
        // Tells the LoadingManager to track an extra item, which resolves after
        // the model is fully loaded. This means the count of items loaded will
        // be incorrect, but ensures manager.onLoad() does not fire early.
        this.manager.itemStart(url);
        const _onError = function(e) {
            if (onError) onError(e);
            else console.error(e);
            scope.manager.itemError(url);
            scope.manager.itemEnd(url);
        };
        const loader = new (0, _three.FileLoader)(this.manager);
        loader.setPath(this.path);
        loader.setResponseType("arraybuffer");
        loader.setRequestHeader(this.requestHeader);
        loader.setWithCredentials(this.withCredentials);
        loader.load(url, function(data) {
            try {
                scope.parse(data, resourcePath, function(gltf) {
                    onLoad(gltf);
                    scope.manager.itemEnd(url);
                }, _onError);
            } catch (e) {
                _onError(e);
            }
        }, onProgress, _onError);
    }
    setDRACOLoader(dracoLoader) {
        this.dracoLoader = dracoLoader;
        return this;
    }
    setDDSLoader() {
        throw new Error('THREE.GLTFLoader: "MSFT_texture_dds" no longer supported. Please update to "KHR_texture_basisu".');
    }
    setKTX2Loader(ktx2Loader) {
        this.ktx2Loader = ktx2Loader;
        return this;
    }
    setMeshoptDecoder(meshoptDecoder) {
        this.meshoptDecoder = meshoptDecoder;
        return this;
    }
    register(callback) {
        if (this.pluginCallbacks.indexOf(callback) === -1) this.pluginCallbacks.push(callback);
        return this;
    }
    unregister(callback) {
        if (this.pluginCallbacks.indexOf(callback) !== -1) this.pluginCallbacks.splice(this.pluginCallbacks.indexOf(callback), 1);
        return this;
    }
    parse(data, path, onLoad, onError) {
        let json;
        const extensions = {};
        const plugins = {};
        if (typeof data === "string") json = JSON.parse(data);
        else if (data instanceof ArrayBuffer) {
            const magic = (0, _three.LoaderUtils).decodeText(new Uint8Array(data, 0, 4));
            if (magic === BINARY_EXTENSION_HEADER_MAGIC) {
                try {
                    extensions[EXTENSIONS.KHR_BINARY_GLTF] = new GLTFBinaryExtension(data);
                } catch (error) {
                    if (onError) onError(error);
                    return;
                }
                json = JSON.parse(extensions[EXTENSIONS.KHR_BINARY_GLTF].content);
            } else json = JSON.parse((0, _three.LoaderUtils).decodeText(new Uint8Array(data)));
        } else json = data;
        if (json.asset === undefined || json.asset.version[0] < 2) {
            if (onError) onError(new Error("THREE.GLTFLoader: Unsupported asset. glTF versions >=2.0 are supported."));
            return;
        }
        const parser = new GLTFParser(json, {
            path: path || this.resourcePath || "",
            crossOrigin: this.crossOrigin,
            requestHeader: this.requestHeader,
            manager: this.manager,
            ktx2Loader: this.ktx2Loader,
            meshoptDecoder: this.meshoptDecoder
        });
        parser.fileLoader.setRequestHeader(this.requestHeader);
        for(let i = 0; i < this.pluginCallbacks.length; i++){
            const plugin = this.pluginCallbacks[i](parser);
            plugins[plugin.name] = plugin;
            // Workaround to avoid determining as unknown extension
            // in addUnknownExtensionsToUserData().
            // Remove this workaround if we move all the existing
            // extension handlers to plugin system
            extensions[plugin.name] = true;
        }
        if (json.extensionsUsed) for(let i1 = 0; i1 < json.extensionsUsed.length; ++i1){
            const extensionName = json.extensionsUsed[i1];
            const extensionsRequired = json.extensionsRequired || [];
            switch(extensionName){
                case EXTENSIONS.KHR_MATERIALS_UNLIT:
                    extensions[extensionName] = new GLTFMaterialsUnlitExtension();
                    break;
                case EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS:
                    extensions[extensionName] = new GLTFMaterialsPbrSpecularGlossinessExtension();
                    break;
                case EXTENSIONS.KHR_DRACO_MESH_COMPRESSION:
                    extensions[extensionName] = new GLTFDracoMeshCompressionExtension(json, this.dracoLoader);
                    break;
                case EXTENSIONS.KHR_TEXTURE_TRANSFORM:
                    extensions[extensionName] = new GLTFTextureTransformExtension();
                    break;
                case EXTENSIONS.KHR_MESH_QUANTIZATION:
                    extensions[extensionName] = new GLTFMeshQuantizationExtension();
                    break;
                default:
                    if (extensionsRequired.indexOf(extensionName) >= 0 && plugins[extensionName] === undefined) console.warn('THREE.GLTFLoader: Unknown extension "' + extensionName + '".');
            }
        }
        parser.setExtensions(extensions);
        parser.setPlugins(plugins);
        parser.parse(onLoad, onError);
    }
    parseAsync(data, path) {
        const scope = this;
        return new Promise(function(resolve, reject) {
            scope.parse(data, path, resolve, reject);
        });
    }
}
/* GLTFREGISTRY */ function GLTFRegistry() {
    let objects = {};
    return {
        get: function(key) {
            return objects[key];
        },
        add: function(key, object) {
            objects[key] = object;
        },
        remove: function(key) {
            delete objects[key];
        },
        removeAll: function() {
            objects = {};
        }
    };
}
/*********************************/ /********** EXTENSIONS ***********/ /*********************************/ const EXTENSIONS = {
    KHR_BINARY_GLTF: "KHR_binary_glTF",
    KHR_DRACO_MESH_COMPRESSION: "KHR_draco_mesh_compression",
    KHR_LIGHTS_PUNCTUAL: "KHR_lights_punctual",
    KHR_MATERIALS_CLEARCOAT: "KHR_materials_clearcoat",
    KHR_MATERIALS_IOR: "KHR_materials_ior",
    KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS: "KHR_materials_pbrSpecularGlossiness",
    KHR_MATERIALS_SHEEN: "KHR_materials_sheen",
    KHR_MATERIALS_SPECULAR: "KHR_materials_specular",
    KHR_MATERIALS_TRANSMISSION: "KHR_materials_transmission",
    KHR_MATERIALS_IRIDESCENCE: "KHR_materials_iridescence",
    KHR_MATERIALS_UNLIT: "KHR_materials_unlit",
    KHR_MATERIALS_VOLUME: "KHR_materials_volume",
    KHR_TEXTURE_BASISU: "KHR_texture_basisu",
    KHR_TEXTURE_TRANSFORM: "KHR_texture_transform",
    KHR_MESH_QUANTIZATION: "KHR_mesh_quantization",
    KHR_MATERIALS_EMISSIVE_STRENGTH: "KHR_materials_emissive_strength",
    EXT_TEXTURE_WEBP: "EXT_texture_webp",
    EXT_MESHOPT_COMPRESSION: "EXT_meshopt_compression",
    EXT_MESH_GPU_INSTANCING: "EXT_mesh_gpu_instancing"
};
/**
 * Punctual Lights Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_lights_punctual
 */ class GLTFLightsExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_LIGHTS_PUNCTUAL;
        // Object3D instance caches
        this.cache = {
            refs: {},
            uses: {}
        };
    }
    _markDefs() {
        const parser = this.parser;
        const nodeDefs = this.parser.json.nodes || [];
        for(let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++){
            const nodeDef = nodeDefs[nodeIndex];
            if (nodeDef.extensions && nodeDef.extensions[this.name] && nodeDef.extensions[this.name].light !== undefined) parser._addNodeRef(this.cache, nodeDef.extensions[this.name].light);
        }
    }
    _loadLight(lightIndex) {
        const parser = this.parser;
        const cacheKey = "light:" + lightIndex;
        let dependency = parser.cache.get(cacheKey);
        if (dependency) return dependency;
        const json = parser.json;
        const extensions = json.extensions && json.extensions[this.name] || {};
        const lightDefs = extensions.lights || [];
        const lightDef = lightDefs[lightIndex];
        let lightNode;
        const color = new (0, _three.Color)(0xffffff);
        if (lightDef.color !== undefined) color.fromArray(lightDef.color);
        const range = lightDef.range !== undefined ? lightDef.range : 0;
        switch(lightDef.type){
            case "directional":
                lightNode = new (0, _three.DirectionalLight)(color);
                lightNode.target.position.set(0, 0, -1);
                lightNode.add(lightNode.target);
                break;
            case "point":
                lightNode = new (0, _three.PointLight)(color);
                lightNode.distance = range;
                break;
            case "spot":
                lightNode = new (0, _three.SpotLight)(color);
                lightNode.distance = range;
                // Handle spotlight properties.
                lightDef.spot = lightDef.spot || {};
                lightDef.spot.innerConeAngle = lightDef.spot.innerConeAngle !== undefined ? lightDef.spot.innerConeAngle : 0;
                lightDef.spot.outerConeAngle = lightDef.spot.outerConeAngle !== undefined ? lightDef.spot.outerConeAngle : Math.PI / 4.0;
                lightNode.angle = lightDef.spot.outerConeAngle;
                lightNode.penumbra = 1.0 - lightDef.spot.innerConeAngle / lightDef.spot.outerConeAngle;
                lightNode.target.position.set(0, 0, -1);
                lightNode.add(lightNode.target);
                break;
            default:
                throw new Error("THREE.GLTFLoader: Unexpected light type: " + lightDef.type);
        }
        // Some lights (e.g. spot) default to a position other than the origin. Reset the position
        // here, because node-level parsing will only override position if explicitly specified.
        lightNode.position.set(0, 0, 0);
        lightNode.decay = 2;
        if (lightDef.intensity !== undefined) lightNode.intensity = lightDef.intensity;
        lightNode.name = parser.createUniqueName(lightDef.name || "light_" + lightIndex);
        dependency = Promise.resolve(lightNode);
        parser.cache.add(cacheKey, dependency);
        return dependency;
    }
    createNodeAttachment(nodeIndex) {
        const self1 = this;
        const parser = this.parser;
        const json = parser.json;
        const nodeDef = json.nodes[nodeIndex];
        const lightDef = nodeDef.extensions && nodeDef.extensions[this.name] || {};
        const lightIndex = lightDef.light;
        if (lightIndex === undefined) return null;
        return this._loadLight(lightIndex).then(function(light) {
            return parser._getNodeRef(self1.cache, lightIndex, light);
        });
    }
}
/**
 * Unlit Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_unlit
 */ class GLTFMaterialsUnlitExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MATERIALS_UNLIT;
    }
    getMaterialType() {
        return 0, _three.MeshBasicMaterial;
    }
    extendParams(materialParams, materialDef, parser) {
        const pending = [];
        materialParams.color = new (0, _three.Color)(1.0, 1.0, 1.0);
        materialParams.opacity = 1.0;
        const metallicRoughness = materialDef.pbrMetallicRoughness;
        if (metallicRoughness) {
            if (Array.isArray(metallicRoughness.baseColorFactor)) {
                const array = metallicRoughness.baseColorFactor;
                materialParams.color.fromArray(array);
                materialParams.opacity = array[3];
            }
            if (metallicRoughness.baseColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, (0, _three.sRGBEncoding)));
        }
        return Promise.all(pending);
    }
}
/**
 * Materials Emissive Strength Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/blob/5768b3ce0ef32bc39cdf1bef10b948586635ead3/extensions/2.0/Khronos/KHR_materials_emissive_strength/README.md
 */ class GLTFMaterialsEmissiveStrengthExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_EMISSIVE_STRENGTH;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const emissiveStrength = materialDef.extensions[this.name].emissiveStrength;
        if (emissiveStrength !== undefined) materialParams.emissiveIntensity = emissiveStrength;
        return Promise.resolve();
    }
}
/**
 * Clearcoat Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_clearcoat
 */ class GLTFMaterialsClearcoatExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_CLEARCOAT;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.clearcoatFactor !== undefined) materialParams.clearcoat = extension.clearcoatFactor;
        if (extension.clearcoatTexture !== undefined) pending.push(parser.assignTexture(materialParams, "clearcoatMap", extension.clearcoatTexture));
        if (extension.clearcoatRoughnessFactor !== undefined) materialParams.clearcoatRoughness = extension.clearcoatRoughnessFactor;
        if (extension.clearcoatRoughnessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "clearcoatRoughnessMap", extension.clearcoatRoughnessTexture));
        if (extension.clearcoatNormalTexture !== undefined) {
            pending.push(parser.assignTexture(materialParams, "clearcoatNormalMap", extension.clearcoatNormalTexture));
            if (extension.clearcoatNormalTexture.scale !== undefined) {
                const scale = extension.clearcoatNormalTexture.scale;
                materialParams.clearcoatNormalScale = new (0, _three.Vector2)(scale, scale);
            }
        }
        return Promise.all(pending);
    }
}
/**
 * Iridescence Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_iridescence
 */ class GLTFMaterialsIridescenceExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_IRIDESCENCE;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.iridescenceFactor !== undefined) materialParams.iridescence = extension.iridescenceFactor;
        if (extension.iridescenceTexture !== undefined) pending.push(parser.assignTexture(materialParams, "iridescenceMap", extension.iridescenceTexture));
        if (extension.iridescenceIor !== undefined) materialParams.iridescenceIOR = extension.iridescenceIor;
        if (materialParams.iridescenceThicknessRange === undefined) materialParams.iridescenceThicknessRange = [
            100,
            400
        ];
        if (extension.iridescenceThicknessMinimum !== undefined) materialParams.iridescenceThicknessRange[0] = extension.iridescenceThicknessMinimum;
        if (extension.iridescenceThicknessMaximum !== undefined) materialParams.iridescenceThicknessRange[1] = extension.iridescenceThicknessMaximum;
        if (extension.iridescenceThicknessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "iridescenceThicknessMap", extension.iridescenceThicknessTexture));
        return Promise.all(pending);
    }
}
/**
 * Sheen Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Khronos/KHR_materials_sheen
 */ class GLTFMaterialsSheenExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_SHEEN;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        materialParams.sheenColor = new (0, _three.Color)(0, 0, 0);
        materialParams.sheenRoughness = 0;
        materialParams.sheen = 1;
        const extension = materialDef.extensions[this.name];
        if (extension.sheenColorFactor !== undefined) materialParams.sheenColor.fromArray(extension.sheenColorFactor);
        if (extension.sheenRoughnessFactor !== undefined) materialParams.sheenRoughness = extension.sheenRoughnessFactor;
        if (extension.sheenColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "sheenColorMap", extension.sheenColorTexture, (0, _three.sRGBEncoding)));
        if (extension.sheenRoughnessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "sheenRoughnessMap", extension.sheenRoughnessTexture));
        return Promise.all(pending);
    }
}
/**
 * Transmission Materials Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_transmission
 * Draft: https://github.com/KhronosGroup/glTF/pull/1698
 */ class GLTFMaterialsTransmissionExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_TRANSMISSION;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        if (extension.transmissionFactor !== undefined) materialParams.transmission = extension.transmissionFactor;
        if (extension.transmissionTexture !== undefined) pending.push(parser.assignTexture(materialParams, "transmissionMap", extension.transmissionTexture));
        return Promise.all(pending);
    }
}
/**
 * Materials Volume Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_volume
 */ class GLTFMaterialsVolumeExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_VOLUME;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.thickness = extension.thicknessFactor !== undefined ? extension.thicknessFactor : 0;
        if (extension.thicknessTexture !== undefined) pending.push(parser.assignTexture(materialParams, "thicknessMap", extension.thicknessTexture));
        materialParams.attenuationDistance = extension.attenuationDistance || Infinity;
        const colorArray = extension.attenuationColor || [
            1,
            1,
            1
        ];
        materialParams.attenuationColor = new (0, _three.Color)(colorArray[0], colorArray[1], colorArray[2]);
        return Promise.all(pending);
    }
}
/**
 * Materials ior Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_ior
 */ class GLTFMaterialsIorExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_IOR;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const extension = materialDef.extensions[this.name];
        materialParams.ior = extension.ior !== undefined ? extension.ior : 1.5;
        return Promise.resolve();
    }
}
/**
 * Materials specular Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_materials_specular
 */ class GLTFMaterialsSpecularExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_MATERIALS_SPECULAR;
    }
    getMaterialType(materialIndex) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return null;
        return 0, _three.MeshPhysicalMaterial;
    }
    extendMaterialParams(materialIndex, materialParams) {
        const parser = this.parser;
        const materialDef = parser.json.materials[materialIndex];
        if (!materialDef.extensions || !materialDef.extensions[this.name]) return Promise.resolve();
        const pending = [];
        const extension = materialDef.extensions[this.name];
        materialParams.specularIntensity = extension.specularFactor !== undefined ? extension.specularFactor : 1.0;
        if (extension.specularTexture !== undefined) pending.push(parser.assignTexture(materialParams, "specularIntensityMap", extension.specularTexture));
        const colorArray = extension.specularColorFactor || [
            1,
            1,
            1
        ];
        materialParams.specularColor = new (0, _three.Color)(colorArray[0], colorArray[1], colorArray[2]);
        if (extension.specularColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "specularColorMap", extension.specularColorTexture, (0, _three.sRGBEncoding)));
        return Promise.all(pending);
    }
}
/**
 * BasisU Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_basisu
 */ class GLTFTextureBasisUExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.KHR_TEXTURE_BASISU;
    }
    loadTexture(textureIndex) {
        const parser = this.parser;
        const json = parser.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[this.name]) return null;
        const extension = textureDef.extensions[this.name];
        const loader = parser.options.ktx2Loader;
        if (!loader) {
            if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setKTX2Loader must be called before loading KTX2 textures");
            else // Assumes that the extension is optional and that a fallback texture is present
            return null;
        }
        return parser.loadTextureImage(textureIndex, extension.source, loader);
    }
}
/**
 * WebP Texture Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_texture_webp
 */ class GLTFTextureWebPExtension {
    constructor(parser){
        this.parser = parser;
        this.name = EXTENSIONS.EXT_TEXTURE_WEBP;
        this.isSupported = null;
    }
    loadTexture(textureIndex) {
        const name = this.name;
        const parser = this.parser;
        const json = parser.json;
        const textureDef = json.textures[textureIndex];
        if (!textureDef.extensions || !textureDef.extensions[name]) return null;
        const extension = textureDef.extensions[name];
        const source = json.images[extension.source];
        let loader = parser.textureLoader;
        if (source.uri) {
            const handler = parser.options.manager.getHandler(source.uri);
            if (handler !== null) loader = handler;
        }
        return this.detectSupport().then(function(isSupported) {
            if (isSupported) return parser.loadTextureImage(textureIndex, extension.source, loader);
            if (json.extensionsRequired && json.extensionsRequired.indexOf(name) >= 0) throw new Error("THREE.GLTFLoader: WebP required by asset but unsupported.");
            // Fall back to PNG or JPEG.
            return parser.loadTexture(textureIndex);
        });
    }
    detectSupport() {
        if (!this.isSupported) this.isSupported = new Promise(function(resolve) {
            const image = new Image();
            // Lossy test image. Support for lossy images doesn't guarantee support for all
            // WebP images, unfortunately.
            image.src = "data:image/webp;base64,UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA";
            image.onload = image.onerror = function() {
                resolve(image.height === 1);
            };
        });
        return this.isSupported;
    }
}
/**
 * meshopt BufferView Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_meshopt_compression
 */ class GLTFMeshoptCompression {
    constructor(parser){
        this.name = EXTENSIONS.EXT_MESHOPT_COMPRESSION;
        this.parser = parser;
    }
    loadBufferView(index) {
        const json = this.parser.json;
        const bufferView = json.bufferViews[index];
        if (bufferView.extensions && bufferView.extensions[this.name]) {
            const extensionDef = bufferView.extensions[this.name];
            const buffer = this.parser.getDependency("buffer", extensionDef.buffer);
            const decoder = this.parser.options.meshoptDecoder;
            if (!decoder || !decoder.supported) {
                if (json.extensionsRequired && json.extensionsRequired.indexOf(this.name) >= 0) throw new Error("THREE.GLTFLoader: setMeshoptDecoder must be called before loading compressed files");
                else // Assumes that the extension is optional and that fallback buffer data is present
                return null;
            }
            return buffer.then(function(res) {
                const byteOffset = extensionDef.byteOffset || 0;
                const byteLength = extensionDef.byteLength || 0;
                const count = extensionDef.count;
                const stride = extensionDef.byteStride;
                const source = new Uint8Array(res, byteOffset, byteLength);
                if (decoder.decodeGltfBufferAsync) return decoder.decodeGltfBufferAsync(count, stride, source, extensionDef.mode, extensionDef.filter).then(function(res) {
                    return res.buffer;
                });
                else // Support for MeshoptDecoder 0.18 or earlier, without decodeGltfBufferAsync
                return decoder.ready.then(function() {
                    const result = new ArrayBuffer(count * stride);
                    decoder.decodeGltfBuffer(new Uint8Array(result), count, stride, source, extensionDef.mode, extensionDef.filter);
                    return result;
                });
            });
        } else return null;
    }
}
/**
 * GPU Instancing Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Vendor/EXT_mesh_gpu_instancing
 *
 */ class GLTFMeshGpuInstancing {
    constructor(parser){
        this.name = EXTENSIONS.EXT_MESH_GPU_INSTANCING;
        this.parser = parser;
    }
    createNodeMesh(nodeIndex) {
        const json = this.parser.json;
        const nodeDef = json.nodes[nodeIndex];
        if (!nodeDef.extensions || !nodeDef.extensions[this.name] || nodeDef.mesh === undefined) return null;
        const meshDef = json.meshes[nodeDef.mesh];
        // No Points or Lines + Instancing support yet
        for (const primitive of meshDef.primitives){
            if (primitive.mode !== WEBGL_CONSTANTS.TRIANGLES && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_STRIP && primitive.mode !== WEBGL_CONSTANTS.TRIANGLE_FAN && primitive.mode !== undefined) return null;
        }
        const extensionDef = nodeDef.extensions[this.name];
        const attributesDef = extensionDef.attributes;
        // @TODO: Can we support InstancedMesh + SkinnedMesh?
        const pending = [];
        const attributes = {};
        for(const key in attributesDef)pending.push(this.parser.getDependency("accessor", attributesDef[key]).then((accessor)=>{
            attributes[key] = accessor;
            return attributes[key];
        }));
        if (pending.length < 1) return null;
        pending.push(this.parser.createNodeMesh(nodeIndex));
        return Promise.all(pending).then((results)=>{
            const nodeObject = results.pop();
            const meshes = nodeObject.isGroup ? nodeObject.children : [
                nodeObject
            ];
            const count = results[0].count; // All attribute counts should be same
            const instancedMeshes = [];
            for (const mesh of meshes){
                // Temporal variables
                const m = new (0, _three.Matrix4)();
                const p = new (0, _three.Vector3)();
                const q = new (0, _three.Quaternion)();
                const s = new (0, _three.Vector3)(1, 1, 1);
                const instancedMesh = new (0, _three.InstancedMesh)(mesh.geometry, mesh.material, count);
                for(let i = 0; i < count; i++){
                    if (attributes.TRANSLATION) p.fromBufferAttribute(attributes.TRANSLATION, i);
                    if (attributes.ROTATION) q.fromBufferAttribute(attributes.ROTATION, i);
                    if (attributes.SCALE) s.fromBufferAttribute(attributes.SCALE, i);
                    instancedMesh.setMatrixAt(i, m.compose(p, q, s));
                }
                // Add instance attributes to the geometry, excluding TRS.
                for(const attributeName in attributes)if (attributeName !== "TRANSLATION" && attributeName !== "ROTATION" && attributeName !== "SCALE") mesh.geometry.setAttribute(attributeName, attributes[attributeName]);
                // Just in case
                (0, _three.Object3D).prototype.copy.call(instancedMesh, mesh);
                // https://github.com/mrdoob/three.js/issues/18334
                instancedMesh.frustumCulled = false;
                this.parser.assignFinalMaterial(instancedMesh);
                instancedMeshes.push(instancedMesh);
            }
            if (nodeObject.isGroup) {
                nodeObject.clear();
                nodeObject.add(...instancedMeshes);
                return nodeObject;
            }
            return instancedMeshes[0];
        });
    }
}
/* BINARY EXTENSION */ const BINARY_EXTENSION_HEADER_MAGIC = "glTF";
const BINARY_EXTENSION_HEADER_LENGTH = 12;
const BINARY_EXTENSION_CHUNK_TYPES = {
    JSON: 0x4E4F534A,
    BIN: 0x004E4942
};
class GLTFBinaryExtension {
    constructor(data){
        this.name = EXTENSIONS.KHR_BINARY_GLTF;
        this.content = null;
        this.body = null;
        const headerView = new DataView(data, 0, BINARY_EXTENSION_HEADER_LENGTH);
        this.header = {
            magic: (0, _three.LoaderUtils).decodeText(new Uint8Array(data.slice(0, 4))),
            version: headerView.getUint32(4, true),
            length: headerView.getUint32(8, true)
        };
        if (this.header.magic !== BINARY_EXTENSION_HEADER_MAGIC) throw new Error("THREE.GLTFLoader: Unsupported glTF-Binary header.");
        else if (this.header.version < 2.0) throw new Error("THREE.GLTFLoader: Legacy binary file detected.");
        const chunkContentsLength = this.header.length - BINARY_EXTENSION_HEADER_LENGTH;
        const chunkView = new DataView(data, BINARY_EXTENSION_HEADER_LENGTH);
        let chunkIndex = 0;
        while(chunkIndex < chunkContentsLength){
            const chunkLength = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;
            const chunkType = chunkView.getUint32(chunkIndex, true);
            chunkIndex += 4;
            if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.JSON) {
                const contentArray = new Uint8Array(data, BINARY_EXTENSION_HEADER_LENGTH + chunkIndex, chunkLength);
                this.content = (0, _three.LoaderUtils).decodeText(contentArray);
            } else if (chunkType === BINARY_EXTENSION_CHUNK_TYPES.BIN) {
                const byteOffset = BINARY_EXTENSION_HEADER_LENGTH + chunkIndex;
                this.body = data.slice(byteOffset, byteOffset + chunkLength);
            }
            // Clients must ignore chunks with unknown types.
            chunkIndex += chunkLength;
        }
        if (this.content === null) throw new Error("THREE.GLTFLoader: JSON content not found.");
    }
}
/**
 * DRACO Mesh Compression Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_draco_mesh_compression
 */ class GLTFDracoMeshCompressionExtension {
    constructor(json, dracoLoader){
        if (!dracoLoader) throw new Error("THREE.GLTFLoader: No DRACOLoader instance provided.");
        this.name = EXTENSIONS.KHR_DRACO_MESH_COMPRESSION;
        this.json = json;
        this.dracoLoader = dracoLoader;
        this.dracoLoader.preload();
    }
    decodePrimitive(primitive, parser) {
        const json = this.json;
        const dracoLoader = this.dracoLoader;
        const bufferViewIndex = primitive.extensions[this.name].bufferView;
        const gltfAttributeMap = primitive.extensions[this.name].attributes;
        const threeAttributeMap = {};
        const attributeNormalizedMap = {};
        const attributeTypeMap = {};
        for(const attributeName in gltfAttributeMap){
            const threeAttributeName = ATTRIBUTES[attributeName] || attributeName.toLowerCase();
            threeAttributeMap[threeAttributeName] = gltfAttributeMap[attributeName];
        }
        for(const attributeName1 in primitive.attributes){
            const threeAttributeName1 = ATTRIBUTES[attributeName1] || attributeName1.toLowerCase();
            if (gltfAttributeMap[attributeName1] !== undefined) {
                const accessorDef = json.accessors[primitive.attributes[attributeName1]];
                const componentType = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
                attributeTypeMap[threeAttributeName1] = componentType.name;
                attributeNormalizedMap[threeAttributeName1] = accessorDef.normalized === true;
            }
        }
        return parser.getDependency("bufferView", bufferViewIndex).then(function(bufferView) {
            return new Promise(function(resolve) {
                dracoLoader.decodeDracoFile(bufferView, function(geometry) {
                    for(const attributeName in geometry.attributes){
                        const attribute = geometry.attributes[attributeName];
                        const normalized = attributeNormalizedMap[attributeName];
                        if (normalized !== undefined) attribute.normalized = normalized;
                    }
                    resolve(geometry);
                }, threeAttributeMap, attributeTypeMap);
            });
        });
    }
}
/**
 * Texture Transform Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_texture_transform
 */ class GLTFTextureTransformExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_TEXTURE_TRANSFORM;
    }
    extendTexture(texture, transform) {
        if (transform.texCoord !== undefined) console.warn('THREE.GLTFLoader: Custom UV sets in "' + this.name + '" extension not yet supported.');
        if (transform.offset === undefined && transform.rotation === undefined && transform.scale === undefined) // See https://github.com/mrdoob/three.js/issues/21819.
        return texture;
        texture = texture.clone();
        if (transform.offset !== undefined) texture.offset.fromArray(transform.offset);
        if (transform.rotation !== undefined) texture.rotation = transform.rotation;
        if (transform.scale !== undefined) texture.repeat.fromArray(transform.scale);
        texture.needsUpdate = true;
        return texture;
    }
}
/**
 * Specular-Glossiness Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/main/extensions/2.0/Archived/KHR_materials_pbrSpecularGlossiness
 */ /**
 * A sub class of StandardMaterial with some of the functionality
 * changed via the `onBeforeCompile` callback
 * @pailhead
 */ class GLTFMeshStandardSGMaterial extends (0, _three.MeshStandardMaterial) {
    constructor(params){
        super();
        this.isGLTFSpecularGlossinessMaterial = true;
        //various chunks that need replacing
        const specularMapParsFragmentChunk = [
            "#ifdef USE_SPECULARMAP",
            "	uniform sampler2D specularMap;",
            "#endif"
        ].join("\n");
        const glossinessMapParsFragmentChunk = [
            "#ifdef USE_GLOSSINESSMAP",
            "	uniform sampler2D glossinessMap;",
            "#endif"
        ].join("\n");
        const specularMapFragmentChunk = [
            "vec3 specularFactor = specular;",
            "#ifdef USE_SPECULARMAP",
            "	vec4 texelSpecular = texture2D( specularMap, vUv );",
            "	// reads channel RGB, compatible with a glTF Specular-Glossiness (RGBA) texture",
            "	specularFactor *= texelSpecular.rgb;",
            "#endif"
        ].join("\n");
        const glossinessMapFragmentChunk = [
            "float glossinessFactor = glossiness;",
            "#ifdef USE_GLOSSINESSMAP",
            "	vec4 texelGlossiness = texture2D( glossinessMap, vUv );",
            "	// reads channel A, compatible with a glTF Specular-Glossiness (RGBA) texture",
            "	glossinessFactor *= texelGlossiness.a;",
            "#endif"
        ].join("\n");
        const lightPhysicalFragmentChunk = [
            "PhysicalMaterial material;",
            "material.diffuseColor = diffuseColor.rgb * ( 1. - max( specularFactor.r, max( specularFactor.g, specularFactor.b ) ) );",
            "vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );",
            "float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );",
            "material.roughness = max( 1.0 - glossinessFactor, 0.0525 ); // 0.0525 corresponds to the base mip of a 256 cubemap.",
            "material.roughness += geometryRoughness;",
            "material.roughness = min( material.roughness, 1.0 );",
            "material.specularColor = specularFactor;"
        ].join("\n");
        const uniforms = {
            specular: {
                value: new (0, _three.Color)().setHex(0xffffff)
            },
            glossiness: {
                value: 1
            },
            specularMap: {
                value: null
            },
            glossinessMap: {
                value: null
            }
        };
        this._extraUniforms = uniforms;
        this.onBeforeCompile = function(shader) {
            for(const uniformName in uniforms)shader.uniforms[uniformName] = uniforms[uniformName];
            shader.fragmentShader = shader.fragmentShader.replace("uniform float roughness;", "uniform vec3 specular;").replace("uniform float metalness;", "uniform float glossiness;").replace("#include <roughnessmap_pars_fragment>", specularMapParsFragmentChunk).replace("#include <metalnessmap_pars_fragment>", glossinessMapParsFragmentChunk).replace("#include <roughnessmap_fragment>", specularMapFragmentChunk).replace("#include <metalnessmap_fragment>", glossinessMapFragmentChunk).replace("#include <lights_physical_fragment>", lightPhysicalFragmentChunk);
        };
        Object.defineProperties(this, {
            specular: {
                get: function() {
                    return uniforms.specular.value;
                },
                set: function(v) {
                    uniforms.specular.value = v;
                }
            },
            specularMap: {
                get: function() {
                    return uniforms.specularMap.value;
                },
                set: function(v) {
                    uniforms.specularMap.value = v;
                    if (v) this.defines.USE_SPECULARMAP = ""; // USE_UV is set by the renderer for specular maps
                    else delete this.defines.USE_SPECULARMAP;
                }
            },
            glossiness: {
                get: function() {
                    return uniforms.glossiness.value;
                },
                set: function(v) {
                    uniforms.glossiness.value = v;
                }
            },
            glossinessMap: {
                get: function() {
                    return uniforms.glossinessMap.value;
                },
                set: function(v) {
                    uniforms.glossinessMap.value = v;
                    if (v) {
                        this.defines.USE_GLOSSINESSMAP = "";
                        this.defines.USE_UV = "";
                    } else {
                        delete this.defines.USE_GLOSSINESSMAP;
                        delete this.defines.USE_UV;
                    }
                }
            }
        });
        delete this.metalness;
        delete this.roughness;
        delete this.metalnessMap;
        delete this.roughnessMap;
        this.setValues(params);
    }
    copy(source) {
        super.copy(source);
        this.specularMap = source.specularMap;
        this.specular.copy(source.specular);
        this.glossinessMap = source.glossinessMap;
        this.glossiness = source.glossiness;
        delete this.metalness;
        delete this.roughness;
        delete this.metalnessMap;
        delete this.roughnessMap;
        return this;
    }
}
class GLTFMaterialsPbrSpecularGlossinessExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS;
        this.specularGlossinessParams = [
            "color",
            "map",
            "lightMap",
            "lightMapIntensity",
            "aoMap",
            "aoMapIntensity",
            "emissive",
            "emissiveIntensity",
            "emissiveMap",
            "bumpMap",
            "bumpScale",
            "normalMap",
            "normalMapType",
            "displacementMap",
            "displacementScale",
            "displacementBias",
            "specularMap",
            "specular",
            "glossinessMap",
            "glossiness",
            "alphaMap",
            "envMap",
            "envMapIntensity"
        ];
    }
    getMaterialType() {
        return GLTFMeshStandardSGMaterial;
    }
    extendParams(materialParams, materialDef, parser) {
        const pbrSpecularGlossiness = materialDef.extensions[this.name];
        materialParams.color = new (0, _three.Color)(1.0, 1.0, 1.0);
        materialParams.opacity = 1.0;
        const pending = [];
        if (Array.isArray(pbrSpecularGlossiness.diffuseFactor)) {
            const array = pbrSpecularGlossiness.diffuseFactor;
            materialParams.color.fromArray(array);
            materialParams.opacity = array[3];
        }
        if (pbrSpecularGlossiness.diffuseTexture !== undefined) pending.push(parser.assignTexture(materialParams, "map", pbrSpecularGlossiness.diffuseTexture, (0, _three.sRGBEncoding)));
        materialParams.emissive = new (0, _three.Color)(0.0, 0.0, 0.0);
        materialParams.glossiness = pbrSpecularGlossiness.glossinessFactor !== undefined ? pbrSpecularGlossiness.glossinessFactor : 1.0;
        materialParams.specular = new (0, _three.Color)(1.0, 1.0, 1.0);
        if (Array.isArray(pbrSpecularGlossiness.specularFactor)) materialParams.specular.fromArray(pbrSpecularGlossiness.specularFactor);
        if (pbrSpecularGlossiness.specularGlossinessTexture !== undefined) {
            const specGlossMapDef = pbrSpecularGlossiness.specularGlossinessTexture;
            pending.push(parser.assignTexture(materialParams, "glossinessMap", specGlossMapDef));
            pending.push(parser.assignTexture(materialParams, "specularMap", specGlossMapDef, (0, _three.sRGBEncoding)));
        }
        return Promise.all(pending);
    }
    createMaterial(materialParams) {
        const material = new GLTFMeshStandardSGMaterial(materialParams);
        material.fog = true;
        material.color = materialParams.color;
        material.map = materialParams.map === undefined ? null : materialParams.map;
        material.lightMap = null;
        material.lightMapIntensity = 1.0;
        material.aoMap = materialParams.aoMap === undefined ? null : materialParams.aoMap;
        material.aoMapIntensity = 1.0;
        material.emissive = materialParams.emissive;
        material.emissiveIntensity = materialParams.emissiveIntensity === undefined ? 1.0 : materialParams.emissiveIntensity;
        material.emissiveMap = materialParams.emissiveMap === undefined ? null : materialParams.emissiveMap;
        material.bumpMap = materialParams.bumpMap === undefined ? null : materialParams.bumpMap;
        material.bumpScale = 1;
        material.normalMap = materialParams.normalMap === undefined ? null : materialParams.normalMap;
        material.normalMapType = (0, _three.TangentSpaceNormalMap);
        if (materialParams.normalScale) material.normalScale = materialParams.normalScale;
        material.displacementMap = null;
        material.displacementScale = 1;
        material.displacementBias = 0;
        material.specularMap = materialParams.specularMap === undefined ? null : materialParams.specularMap;
        material.specular = materialParams.specular;
        material.glossinessMap = materialParams.glossinessMap === undefined ? null : materialParams.glossinessMap;
        material.glossiness = materialParams.glossiness;
        material.alphaMap = null;
        material.envMap = materialParams.envMap === undefined ? null : materialParams.envMap;
        material.envMapIntensity = 1.0;
        return material;
    }
}
/**
 * Mesh Quantization Extension
 *
 * Specification: https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization
 */ class GLTFMeshQuantizationExtension {
    constructor(){
        this.name = EXTENSIONS.KHR_MESH_QUANTIZATION;
    }
}
/*********************************/ /********** INTERPOLATION ********/ /*********************************/ // Spline Interpolation
// Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#appendix-c-spline-interpolation
class GLTFCubicSplineInterpolant extends (0, _three.Interpolant) {
    constructor(parameterPositions, sampleValues, sampleSize, resultBuffer){
        super(parameterPositions, sampleValues, sampleSize, resultBuffer);
    }
    copySampleValue_(index) {
        // Copies a sample value to the result buffer. See description of glTF
        // CUBICSPLINE values layout in interpolate_() function below.
        const result = this.resultBuffer, values = this.sampleValues, valueSize = this.valueSize, offset = index * valueSize * 3 + valueSize;
        for(let i = 0; i !== valueSize; i++)result[i] = values[offset + i];
        return result;
    }
    interpolate_(i1, t0, t, t1) {
        const result = this.resultBuffer;
        const values = this.sampleValues;
        const stride = this.valueSize;
        const stride2 = stride * 2;
        const stride3 = stride * 3;
        const td = t1 - t0;
        const p = (t - t0) / td;
        const pp = p * p;
        const ppp = pp * p;
        const offset1 = i1 * stride3;
        const offset0 = offset1 - stride3;
        const s2 = -2 * ppp + 3 * pp;
        const s3 = ppp - pp;
        const s0 = 1 - s2;
        const s1 = s3 - pp + p;
        // Layout of keyframe output values for CUBICSPLINE animations:
        //   [ inTangent_1, splineVertex_1, outTangent_1, inTangent_2, splineVertex_2, ... ]
        for(let i = 0; i !== stride; i++){
            const p0 = values[offset0 + i + stride]; // splineVertex_k
            const m0 = values[offset0 + i + stride2] * td; // outTangent_k * (t_k+1 - t_k)
            const p1 = values[offset1 + i + stride]; // splineVertex_k+1
            const m1 = values[offset1 + i] * td; // inTangent_k+1 * (t_k+1 - t_k)
            result[i] = s0 * p0 + s1 * m0 + s2 * p1 + s3 * m1;
        }
        return result;
    }
}
const _q = new (0, _three.Quaternion)();
class GLTFCubicSplineQuaternionInterpolant extends GLTFCubicSplineInterpolant {
    interpolate_(i1, t0, t, t1) {
        const result = super.interpolate_(i1, t0, t, t1);
        _q.fromArray(result).normalize().toArray(result);
        return result;
    }
}
/*********************************/ /********** INTERNALS ************/ /*********************************/ /* CONSTANTS */ const WEBGL_CONSTANTS = {
    FLOAT: 5126,
    //FLOAT_MAT2: 35674,
    FLOAT_MAT3: 35675,
    FLOAT_MAT4: 35676,
    FLOAT_VEC2: 35664,
    FLOAT_VEC3: 35665,
    FLOAT_VEC4: 35666,
    LINEAR: 9729,
    REPEAT: 10497,
    SAMPLER_2D: 35678,
    POINTS: 0,
    LINES: 1,
    LINE_LOOP: 2,
    LINE_STRIP: 3,
    TRIANGLES: 4,
    TRIANGLE_STRIP: 5,
    TRIANGLE_FAN: 6,
    UNSIGNED_BYTE: 5121,
    UNSIGNED_SHORT: 5123
};
const WEBGL_COMPONENT_TYPES = {
    5120: Int8Array,
    5121: Uint8Array,
    5122: Int16Array,
    5123: Uint16Array,
    5125: Uint32Array,
    5126: Float32Array
};
const WEBGL_FILTERS = {
    9728: (0, _three.NearestFilter),
    9729: (0, _three.LinearFilter),
    9984: (0, _three.NearestMipmapNearestFilter),
    9985: (0, _three.LinearMipmapNearestFilter),
    9986: (0, _three.NearestMipmapLinearFilter),
    9987: (0, _three.LinearMipmapLinearFilter)
};
const WEBGL_WRAPPINGS = {
    33071: (0, _three.ClampToEdgeWrapping),
    33648: (0, _three.MirroredRepeatWrapping),
    10497: (0, _three.RepeatWrapping)
};
const WEBGL_TYPE_SIZES = {
    "SCALAR": 1,
    "VEC2": 2,
    "VEC3": 3,
    "VEC4": 4,
    "MAT2": 4,
    "MAT3": 9,
    "MAT4": 16
};
const ATTRIBUTES = {
    POSITION: "position",
    NORMAL: "normal",
    TANGENT: "tangent",
    TEXCOORD_0: "uv",
    TEXCOORD_1: "uv2",
    COLOR_0: "color",
    WEIGHTS_0: "skinWeight",
    JOINTS_0: "skinIndex"
};
const PATH_PROPERTIES = {
    scale: "scale",
    translation: "position",
    rotation: "quaternion",
    weights: "morphTargetInfluences"
};
const INTERPOLATION = {
    CUBICSPLINE: undefined,
    // keyframe track will be initialized with a default interpolation type, then modified.
    LINEAR: (0, _three.InterpolateLinear),
    STEP: (0, _three.InterpolateDiscrete)
};
const ALPHA_MODES = {
    OPAQUE: "OPAQUE",
    MASK: "MASK",
    BLEND: "BLEND"
};
/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#default-material
 */ function createDefaultMaterial(cache) {
    if (cache["DefaultMaterial"] === undefined) cache["DefaultMaterial"] = new (0, _three.MeshStandardMaterial)({
        color: 0xFFFFFF,
        emissive: 0x000000,
        metalness: 1,
        roughness: 1,
        transparent: false,
        depthTest: true,
        side: (0, _three.FrontSide)
    });
    return cache["DefaultMaterial"];
}
function addUnknownExtensionsToUserData(knownExtensions, object, objectDef) {
    // Add unknown glTF extensions to an object's userData.
    for(const name in objectDef.extensions)if (knownExtensions[name] === undefined) {
        object.userData.gltfExtensions = object.userData.gltfExtensions || {};
        object.userData.gltfExtensions[name] = objectDef.extensions[name];
    }
}
/**
 * @param {Object3D|Material|BufferGeometry} object
 * @param {GLTF.definition} gltfDef
 */ function assignExtrasToUserData(object, gltfDef) {
    if (gltfDef.extras !== undefined) {
        if (typeof gltfDef.extras === "object") Object.assign(object.userData, gltfDef.extras);
        else console.warn("THREE.GLTFLoader: Ignoring primitive type .extras, " + gltfDef.extras);
    }
}
/**
 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#morph-targets
 *
 * @param {BufferGeometry} geometry
 * @param {Array<GLTF.Target>} targets
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */ function addMorphTargets(geometry, targets, parser) {
    let hasMorphPosition = false;
    let hasMorphNormal = false;
    let hasMorphColor = false;
    for(let i = 0, il = targets.length; i < il; i++){
        const target = targets[i];
        if (target.POSITION !== undefined) hasMorphPosition = true;
        if (target.NORMAL !== undefined) hasMorphNormal = true;
        if (target.COLOR_0 !== undefined) hasMorphColor = true;
        if (hasMorphPosition && hasMorphNormal && hasMorphColor) break;
    }
    if (!hasMorphPosition && !hasMorphNormal && !hasMorphColor) return Promise.resolve(geometry);
    const pendingPositionAccessors = [];
    const pendingNormalAccessors = [];
    const pendingColorAccessors = [];
    for(let i1 = 0, il1 = targets.length; i1 < il1; i1++){
        const target1 = targets[i1];
        if (hasMorphPosition) {
            const pendingAccessor = target1.POSITION !== undefined ? parser.getDependency("accessor", target1.POSITION) : geometry.attributes.position;
            pendingPositionAccessors.push(pendingAccessor);
        }
        if (hasMorphNormal) {
            const pendingAccessor1 = target1.NORMAL !== undefined ? parser.getDependency("accessor", target1.NORMAL) : geometry.attributes.normal;
            pendingNormalAccessors.push(pendingAccessor1);
        }
        if (hasMorphColor) {
            const pendingAccessor2 = target1.COLOR_0 !== undefined ? parser.getDependency("accessor", target1.COLOR_0) : geometry.attributes.color;
            pendingColorAccessors.push(pendingAccessor2);
        }
    }
    return Promise.all([
        Promise.all(pendingPositionAccessors),
        Promise.all(pendingNormalAccessors),
        Promise.all(pendingColorAccessors)
    ]).then(function(accessors) {
        const morphPositions = accessors[0];
        const morphNormals = accessors[1];
        const morphColors = accessors[2];
        if (hasMorphPosition) geometry.morphAttributes.position = morphPositions;
        if (hasMorphNormal) geometry.morphAttributes.normal = morphNormals;
        if (hasMorphColor) geometry.morphAttributes.color = morphColors;
        geometry.morphTargetsRelative = true;
        return geometry;
    });
}
/**
 * @param {Mesh} mesh
 * @param {GLTF.Mesh} meshDef
 */ function updateMorphTargets(mesh, meshDef) {
    mesh.updateMorphTargets();
    if (meshDef.weights !== undefined) for(let i = 0, il = meshDef.weights.length; i < il; i++)mesh.morphTargetInfluences[i] = meshDef.weights[i];
    // .extras has user-defined data, so check that .extras.targetNames is an array.
    if (meshDef.extras && Array.isArray(meshDef.extras.targetNames)) {
        const targetNames = meshDef.extras.targetNames;
        if (mesh.morphTargetInfluences.length === targetNames.length) {
            mesh.morphTargetDictionary = {};
            for(let i1 = 0, il1 = targetNames.length; i1 < il1; i1++)mesh.morphTargetDictionary[targetNames[i1]] = i1;
        } else console.warn("THREE.GLTFLoader: Invalid extras.targetNames length. Ignoring names.");
    }
}
function createPrimitiveKey(primitiveDef) {
    const dracoExtension = primitiveDef.extensions && primitiveDef.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION];
    let geometryKey;
    if (dracoExtension) geometryKey = "draco:" + dracoExtension.bufferView + ":" + dracoExtension.indices + ":" + createAttributesKey(dracoExtension.attributes);
    else geometryKey = primitiveDef.indices + ":" + createAttributesKey(primitiveDef.attributes) + ":" + primitiveDef.mode;
    return geometryKey;
}
function createAttributesKey(attributes) {
    let attributesKey = "";
    const keys = Object.keys(attributes).sort();
    for(let i = 0, il = keys.length; i < il; i++)attributesKey += keys[i] + ":" + attributes[keys[i]] + ";";
    return attributesKey;
}
function getNormalizedComponentScale(constructor) {
    // Reference:
    // https://github.com/KhronosGroup/glTF/tree/master/extensions/2.0/Khronos/KHR_mesh_quantization#encoding-quantized-data
    switch(constructor){
        case Int8Array:
            return 1 / 127;
        case Uint8Array:
            return 1 / 255;
        case Int16Array:
            return 1 / 32767;
        case Uint16Array:
            return 1 / 65535;
        default:
            throw new Error("THREE.GLTFLoader: Unsupported normalized accessor component type.");
    }
}
function getImageURIMimeType(uri) {
    if (uri.search(/\.jpe?g($|\?)/i) > 0 || uri.search(/^data\:image\/jpeg/) === 0) return "image/jpeg";
    if (uri.search(/\.webp($|\?)/i) > 0 || uri.search(/^data\:image\/webp/) === 0) return "image/webp";
    return "image/png";
}
/* GLTF PARSER */ class GLTFParser {
    constructor(json = {}, options = {}){
        this.json = json;
        this.extensions = {};
        this.plugins = {};
        this.options = options;
        // loader object cache
        this.cache = new GLTFRegistry();
        // associations between Three.js objects and glTF elements
        this.associations = new Map();
        // BufferGeometry caching
        this.primitiveCache = {};
        // Object3D instance caches
        this.meshCache = {
            refs: {},
            uses: {}
        };
        this.cameraCache = {
            refs: {},
            uses: {}
        };
        this.lightCache = {
            refs: {},
            uses: {}
        };
        this.sourceCache = {};
        this.textureCache = {};
        // Track node names, to ensure no duplicates
        this.nodeNamesUsed = {};
        // Use an ImageBitmapLoader if imageBitmaps are supported. Moves much of the
        // expensive work of uploading a texture to the GPU off the main thread.
        const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent) === true;
        const isFirefox = navigator.userAgent.indexOf("Firefox") > -1;
        const firefoxVersion = isFirefox ? navigator.userAgent.match(/Firefox\/([0-9]+)\./)[1] : -1;
        if (typeof createImageBitmap === "undefined" || isSafari || isFirefox && firefoxVersion < 98) this.textureLoader = new (0, _three.TextureLoader)(this.options.manager);
        else this.textureLoader = new (0, _three.ImageBitmapLoader)(this.options.manager);
        this.textureLoader.setCrossOrigin(this.options.crossOrigin);
        this.textureLoader.setRequestHeader(this.options.requestHeader);
        this.fileLoader = new (0, _three.FileLoader)(this.options.manager);
        this.fileLoader.setResponseType("arraybuffer");
        if (this.options.crossOrigin === "use-credentials") this.fileLoader.setWithCredentials(true);
    }
    setExtensions(extensions) {
        this.extensions = extensions;
    }
    setPlugins(plugins) {
        this.plugins = plugins;
    }
    parse(onLoad, onError) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        // Clear the loader cache
        this.cache.removeAll();
        // Mark the special nodes/meshes in json for efficient parse
        this._invokeAll(function(ext) {
            return ext._markDefs && ext._markDefs();
        });
        Promise.all(this._invokeAll(function(ext) {
            return ext.beforeRoot && ext.beforeRoot();
        })).then(function() {
            return Promise.all([
                parser.getDependencies("scene"),
                parser.getDependencies("animation"),
                parser.getDependencies("camera")
            ]);
        }).then(function(dependencies) {
            const result = {
                scene: dependencies[0][json.scene || 0],
                scenes: dependencies[0],
                animations: dependencies[1],
                cameras: dependencies[2],
                asset: json.asset,
                parser: parser,
                userData: {}
            };
            addUnknownExtensionsToUserData(extensions, result, json);
            assignExtrasToUserData(result, json);
            Promise.all(parser._invokeAll(function(ext) {
                return ext.afterRoot && ext.afterRoot(result);
            })).then(function() {
                onLoad(result);
            });
        }).catch(onError);
    }
    /**
	 * Marks the special nodes/meshes in json for efficient parse.
	 */ _markDefs() {
        const nodeDefs = this.json.nodes || [];
        const skinDefs = this.json.skins || [];
        const meshDefs = this.json.meshes || [];
        // Nothing in the node definition indicates whether it is a Bone or an
        // Object3D. Use the skins' joint references to mark bones.
        for(let skinIndex = 0, skinLength = skinDefs.length; skinIndex < skinLength; skinIndex++){
            const joints = skinDefs[skinIndex].joints;
            for(let i = 0, il = joints.length; i < il; i++)nodeDefs[joints[i]].isBone = true;
        }
        // Iterate over all nodes, marking references to shared resources,
        // as well as skeleton joints.
        for(let nodeIndex = 0, nodeLength = nodeDefs.length; nodeIndex < nodeLength; nodeIndex++){
            const nodeDef = nodeDefs[nodeIndex];
            if (nodeDef.mesh !== undefined) {
                this._addNodeRef(this.meshCache, nodeDef.mesh);
                // Nothing in the mesh definition indicates whether it is
                // a SkinnedMesh or Mesh. Use the node's mesh reference
                // to mark SkinnedMesh if node has skin.
                if (nodeDef.skin !== undefined) meshDefs[nodeDef.mesh].isSkinnedMesh = true;
            }
            if (nodeDef.camera !== undefined) this._addNodeRef(this.cameraCache, nodeDef.camera);
        }
    }
    /**
	 * Counts references to shared node / Object3D resources. These resources
	 * can be reused, or "instantiated", at multiple nodes in the scene
	 * hierarchy. Mesh, Camera, and Light instances are instantiated and must
	 * be marked. Non-scenegraph resources (like Materials, Geometries, and
	 * Textures) can be reused directly and are not marked here.
	 *
	 * Example: CesiumMilkTruck sample model reuses "Wheel" meshes.
	 */ _addNodeRef(cache, index) {
        if (index === undefined) return;
        if (cache.refs[index] === undefined) cache.refs[index] = cache.uses[index] = 0;
        cache.refs[index]++;
    }
    /** Returns a reference to a shared resource, cloning it if necessary. */ _getNodeRef(cache, index, object) {
        if (cache.refs[index] <= 1) return object;
        const ref = object.clone();
        // Propagates mappings to the cloned object, prevents mappings on the
        // original object from being lost.
        const updateMappings = (original, clone)=>{
            const mappings = this.associations.get(original);
            if (mappings != null) this.associations.set(clone, mappings);
            for (const [i, child] of original.children.entries())updateMappings(child, clone.children[i]);
        };
        updateMappings(object, ref);
        ref.name += "_instance_" + cache.uses[index]++;
        return ref;
    }
    _invokeOne(func) {
        const extensions = Object.values(this.plugins);
        extensions.push(this);
        for(let i = 0; i < extensions.length; i++){
            const result = func(extensions[i]);
            if (result) return result;
        }
        return null;
    }
    _invokeAll(func) {
        const extensions = Object.values(this.plugins);
        extensions.unshift(this);
        const pending = [];
        for(let i = 0; i < extensions.length; i++){
            const result = func(extensions[i]);
            if (result) pending.push(result);
        }
        return pending;
    }
    /**
	 * Requests the specified dependency asynchronously, with caching.
	 * @param {string} type
	 * @param {number} index
	 * @return {Promise<Object3D|Material|THREE.Texture|AnimationClip|ArrayBuffer|Object>}
	 */ getDependency(type, index) {
        const cacheKey = type + ":" + index;
        let dependency = this.cache.get(cacheKey);
        if (!dependency) {
            switch(type){
                case "scene":
                    dependency = this.loadScene(index);
                    break;
                case "node":
                    dependency = this.loadNode(index);
                    break;
                case "mesh":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadMesh && ext.loadMesh(index);
                    });
                    break;
                case "accessor":
                    dependency = this.loadAccessor(index);
                    break;
                case "bufferView":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadBufferView && ext.loadBufferView(index);
                    });
                    break;
                case "buffer":
                    dependency = this.loadBuffer(index);
                    break;
                case "material":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadMaterial && ext.loadMaterial(index);
                    });
                    break;
                case "texture":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadTexture && ext.loadTexture(index);
                    });
                    break;
                case "skin":
                    dependency = this.loadSkin(index);
                    break;
                case "animation":
                    dependency = this._invokeOne(function(ext) {
                        return ext.loadAnimation && ext.loadAnimation(index);
                    });
                    break;
                case "camera":
                    dependency = this.loadCamera(index);
                    break;
                default:
                    throw new Error("Unknown type: " + type);
            }
            this.cache.add(cacheKey, dependency);
        }
        return dependency;
    }
    /**
	 * Requests all dependencies of the specified type asynchronously, with caching.
	 * @param {string} type
	 * @return {Promise<Array<Object>>}
	 */ getDependencies(type) {
        let dependencies = this.cache.get(type);
        if (!dependencies) {
            const parser = this;
            const defs = this.json[type + (type === "mesh" ? "es" : "s")] || [];
            dependencies = Promise.all(defs.map(function(def, index) {
                return parser.getDependency(type, index);
            }));
            this.cache.add(type, dependencies);
        }
        return dependencies;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferIndex
	 * @return {Promise<ArrayBuffer>}
	 */ loadBuffer(bufferIndex) {
        const bufferDef = this.json.buffers[bufferIndex];
        const loader = this.fileLoader;
        if (bufferDef.type && bufferDef.type !== "arraybuffer") throw new Error("THREE.GLTFLoader: " + bufferDef.type + " buffer type is not supported.");
        // If present, GLB container is required to be the first buffer.
        if (bufferDef.uri === undefined && bufferIndex === 0) return Promise.resolve(this.extensions[EXTENSIONS.KHR_BINARY_GLTF].body);
        const options = this.options;
        return new Promise(function(resolve, reject) {
            loader.load((0, _three.LoaderUtils).resolveURL(bufferDef.uri, options.path), resolve, undefined, function() {
                reject(new Error('THREE.GLTFLoader: Failed to load buffer "' + bufferDef.uri + '".'));
            });
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#buffers-and-buffer-views
	 * @param {number} bufferViewIndex
	 * @return {Promise<ArrayBuffer>}
	 */ loadBufferView(bufferViewIndex) {
        const bufferViewDef = this.json.bufferViews[bufferViewIndex];
        return this.getDependency("buffer", bufferViewDef.buffer).then(function(buffer) {
            const byteLength = bufferViewDef.byteLength || 0;
            const byteOffset = bufferViewDef.byteOffset || 0;
            return buffer.slice(byteOffset, byteOffset + byteLength);
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#accessors
	 * @param {number} accessorIndex
	 * @return {Promise<BufferAttribute|InterleavedBufferAttribute>}
	 */ loadAccessor(accessorIndex) {
        const parser = this;
        const json = this.json;
        const accessorDef = this.json.accessors[accessorIndex];
        if (accessorDef.bufferView === undefined && accessorDef.sparse === undefined) // Ignore empty accessors, which may be used to declare runtime
        // information about attributes coming from another source (e.g. Draco
        // compression extension).
        return Promise.resolve(null);
        const pendingBufferViews = [];
        if (accessorDef.bufferView !== undefined) pendingBufferViews.push(this.getDependency("bufferView", accessorDef.bufferView));
        else pendingBufferViews.push(null);
        if (accessorDef.sparse !== undefined) {
            pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.indices.bufferView));
            pendingBufferViews.push(this.getDependency("bufferView", accessorDef.sparse.values.bufferView));
        }
        return Promise.all(pendingBufferViews).then(function(bufferViews) {
            const bufferView = bufferViews[0];
            const itemSize = WEBGL_TYPE_SIZES[accessorDef.type];
            const TypedArray = WEBGL_COMPONENT_TYPES[accessorDef.componentType];
            // For VEC3: itemSize is 3, elementBytes is 4, itemBytes is 12.
            const elementBytes = TypedArray.BYTES_PER_ELEMENT;
            const itemBytes = elementBytes * itemSize;
            const byteOffset = accessorDef.byteOffset || 0;
            const byteStride = accessorDef.bufferView !== undefined ? json.bufferViews[accessorDef.bufferView].byteStride : undefined;
            const normalized = accessorDef.normalized === true;
            let array, bufferAttribute;
            // The buffer is not interleaved if the stride is the item size in bytes.
            if (byteStride && byteStride !== itemBytes) {
                // Each "slice" of the buffer, as defined by 'count' elements of 'byteStride' bytes, gets its own InterleavedBuffer
                // This makes sure that IBA.count reflects accessor.count properly
                const ibSlice = Math.floor(byteOffset / byteStride);
                const ibCacheKey = "InterleavedBuffer:" + accessorDef.bufferView + ":" + accessorDef.componentType + ":" + ibSlice + ":" + accessorDef.count;
                let ib = parser.cache.get(ibCacheKey);
                if (!ib) {
                    array = new TypedArray(bufferView, ibSlice * byteStride, accessorDef.count * byteStride / elementBytes);
                    // Integer parameters to IB/IBA are in array elements, not bytes.
                    ib = new (0, _three.InterleavedBuffer)(array, byteStride / elementBytes);
                    parser.cache.add(ibCacheKey, ib);
                }
                bufferAttribute = new (0, _three.InterleavedBufferAttribute)(ib, itemSize, byteOffset % byteStride / elementBytes, normalized);
            } else {
                if (bufferView === null) array = new TypedArray(accessorDef.count * itemSize);
                else array = new TypedArray(bufferView, byteOffset, accessorDef.count * itemSize);
                bufferAttribute = new (0, _three.BufferAttribute)(array, itemSize, normalized);
            }
            // https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#sparse-accessors
            if (accessorDef.sparse !== undefined) {
                const itemSizeIndices = WEBGL_TYPE_SIZES.SCALAR;
                const TypedArrayIndices = WEBGL_COMPONENT_TYPES[accessorDef.sparse.indices.componentType];
                const byteOffsetIndices = accessorDef.sparse.indices.byteOffset || 0;
                const byteOffsetValues = accessorDef.sparse.values.byteOffset || 0;
                const sparseIndices = new TypedArrayIndices(bufferViews[1], byteOffsetIndices, accessorDef.sparse.count * itemSizeIndices);
                const sparseValues = new TypedArray(bufferViews[2], byteOffsetValues, accessorDef.sparse.count * itemSize);
                if (bufferView !== null) // Avoid modifying the original ArrayBuffer, if the bufferView wasn't initialized with zeroes.
                bufferAttribute = new (0, _three.BufferAttribute)(bufferAttribute.array.slice(), bufferAttribute.itemSize, bufferAttribute.normalized);
                for(let i = 0, il = sparseIndices.length; i < il; i++){
                    const index = sparseIndices[i];
                    bufferAttribute.setX(index, sparseValues[i * itemSize]);
                    if (itemSize >= 2) bufferAttribute.setY(index, sparseValues[i * itemSize + 1]);
                    if (itemSize >= 3) bufferAttribute.setZ(index, sparseValues[i * itemSize + 2]);
                    if (itemSize >= 4) bufferAttribute.setW(index, sparseValues[i * itemSize + 3]);
                    if (itemSize >= 5) throw new Error("THREE.GLTFLoader: Unsupported itemSize in sparse BufferAttribute.");
                }
            }
            return bufferAttribute;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#textures
	 * @param {number} textureIndex
	 * @return {Promise<THREE.Texture>}
	 */ loadTexture(textureIndex) {
        const json = this.json;
        const options = this.options;
        const textureDef = json.textures[textureIndex];
        const sourceIndex = textureDef.source;
        const sourceDef = json.images[sourceIndex];
        let loader = this.textureLoader;
        if (sourceDef.uri) {
            const handler = options.manager.getHandler(sourceDef.uri);
            if (handler !== null) loader = handler;
        }
        return this.loadTextureImage(textureIndex, sourceIndex, loader);
    }
    loadTextureImage(textureIndex, sourceIndex, loader) {
        const parser = this;
        const json = this.json;
        const textureDef = json.textures[textureIndex];
        const sourceDef = json.images[sourceIndex];
        const cacheKey = (sourceDef.uri || sourceDef.bufferView) + ":" + textureDef.sampler;
        if (this.textureCache[cacheKey]) // See https://github.com/mrdoob/three.js/issues/21559.
        return this.textureCache[cacheKey];
        const promise = this.loadImageSource(sourceIndex, loader).then(function(texture) {
            texture.flipY = false;
            texture.name = textureDef.name || sourceDef.name || "";
            const samplers = json.samplers || {};
            const sampler = samplers[textureDef.sampler] || {};
            texture.magFilter = WEBGL_FILTERS[sampler.magFilter] || (0, _three.LinearFilter);
            texture.minFilter = WEBGL_FILTERS[sampler.minFilter] || (0, _three.LinearMipmapLinearFilter);
            texture.wrapS = WEBGL_WRAPPINGS[sampler.wrapS] || (0, _three.RepeatWrapping);
            texture.wrapT = WEBGL_WRAPPINGS[sampler.wrapT] || (0, _three.RepeatWrapping);
            parser.associations.set(texture, {
                textures: textureIndex
            });
            return texture;
        }).catch(function() {
            return null;
        });
        this.textureCache[cacheKey] = promise;
        return promise;
    }
    loadImageSource(sourceIndex, loader) {
        const parser = this;
        const json = this.json;
        const options = this.options;
        if (this.sourceCache[sourceIndex] !== undefined) return this.sourceCache[sourceIndex].then((texture)=>texture.clone());
        const sourceDef = json.images[sourceIndex];
        const URL = self.URL || self.webkitURL;
        let sourceURI = sourceDef.uri || "";
        let isObjectURL = false;
        if (sourceDef.bufferView !== undefined) // Load binary image data from bufferView, if provided.
        sourceURI = parser.getDependency("bufferView", sourceDef.bufferView).then(function(bufferView) {
            isObjectURL = true;
            const blob = new Blob([
                bufferView
            ], {
                type: sourceDef.mimeType
            });
            sourceURI = URL.createObjectURL(blob);
            return sourceURI;
        });
        else if (sourceDef.uri === undefined) throw new Error("THREE.GLTFLoader: Image " + sourceIndex + " is missing URI and bufferView");
        const promise = Promise.resolve(sourceURI).then(function(sourceURI) {
            return new Promise(function(resolve, reject) {
                let onLoad = resolve;
                if (loader.isImageBitmapLoader === true) onLoad = function(imageBitmap) {
                    const texture = new (0, _three.Texture)(imageBitmap);
                    texture.needsUpdate = true;
                    resolve(texture);
                };
                loader.load((0, _three.LoaderUtils).resolveURL(sourceURI, options.path), onLoad, undefined, reject);
            });
        }).then(function(texture) {
            // Clean up resources and configure Texture.
            if (isObjectURL === true) URL.revokeObjectURL(sourceURI);
            texture.userData.mimeType = sourceDef.mimeType || getImageURIMimeType(sourceDef.uri);
            return texture;
        }).catch(function(error) {
            console.error("THREE.GLTFLoader: Couldn't load texture", sourceURI);
            throw error;
        });
        this.sourceCache[sourceIndex] = promise;
        return promise;
    }
    /**
	 * Asynchronously assigns a texture to the given material parameters.
	 * @param {Object} materialParams
	 * @param {string} mapName
	 * @param {Object} mapDef
	 * @return {Promise<Texture>}
	 */ assignTexture(materialParams, mapName, mapDef, encoding) {
        const parser = this;
        return this.getDependency("texture", mapDef.index).then(function(texture) {
            // Materials sample aoMap from UV set 1 and other maps from UV set 0 - this can't be configured
            // However, we will copy UV set 0 to UV set 1 on demand for aoMap
            if (mapDef.texCoord !== undefined && mapDef.texCoord != 0 && !(mapName === "aoMap" && mapDef.texCoord == 1)) console.warn("THREE.GLTFLoader: Custom UV set " + mapDef.texCoord + " for texture " + mapName + " not yet supported.");
            if (parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM]) {
                const transform = mapDef.extensions !== undefined ? mapDef.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM] : undefined;
                if (transform) {
                    const gltfReference = parser.associations.get(texture);
                    texture = parser.extensions[EXTENSIONS.KHR_TEXTURE_TRANSFORM].extendTexture(texture, transform);
                    parser.associations.set(texture, gltfReference);
                }
            }
            if (encoding !== undefined) texture.encoding = encoding;
            materialParams[mapName] = texture;
            return texture;
        });
    }
    /**
	 * Assigns final material to a Mesh, Line, or Points instance. The instance
	 * already has a material (generated from the glTF material options alone)
	 * but reuse of the same glTF material may require multiple threejs materials
	 * to accommodate different primitive types, defines, etc. New materials will
	 * be created if necessary, and reused from a cache.
	 * @param  {Object3D} mesh Mesh, Line, or Points instance.
	 */ assignFinalMaterial(mesh) {
        const geometry = mesh.geometry;
        let material = mesh.material;
        const useDerivativeTangents = geometry.attributes.tangent === undefined;
        const useVertexColors = geometry.attributes.color !== undefined;
        const useFlatShading = geometry.attributes.normal === undefined;
        if (mesh.isPoints) {
            const cacheKey = "PointsMaterial:" + material.uuid;
            let pointsMaterial = this.cache.get(cacheKey);
            if (!pointsMaterial) {
                pointsMaterial = new (0, _three.PointsMaterial)();
                (0, _three.Material).prototype.copy.call(pointsMaterial, material);
                pointsMaterial.color.copy(material.color);
                pointsMaterial.map = material.map;
                pointsMaterial.sizeAttenuation = false; // glTF spec says points should be 1px
                this.cache.add(cacheKey, pointsMaterial);
            }
            material = pointsMaterial;
        } else if (mesh.isLine) {
            const cacheKey1 = "LineBasicMaterial:" + material.uuid;
            let lineMaterial = this.cache.get(cacheKey1);
            if (!lineMaterial) {
                lineMaterial = new (0, _three.LineBasicMaterial)();
                (0, _three.Material).prototype.copy.call(lineMaterial, material);
                lineMaterial.color.copy(material.color);
                this.cache.add(cacheKey1, lineMaterial);
            }
            material = lineMaterial;
        }
        // Clone the material if it will be modified
        if (useDerivativeTangents || useVertexColors || useFlatShading) {
            let cacheKey2 = "ClonedMaterial:" + material.uuid + ":";
            if (material.isGLTFSpecularGlossinessMaterial) cacheKey2 += "specular-glossiness:";
            if (useDerivativeTangents) cacheKey2 += "derivative-tangents:";
            if (useVertexColors) cacheKey2 += "vertex-colors:";
            if (useFlatShading) cacheKey2 += "flat-shading:";
            let cachedMaterial = this.cache.get(cacheKey2);
            if (!cachedMaterial) {
                cachedMaterial = material.clone();
                if (useVertexColors) cachedMaterial.vertexColors = true;
                if (useFlatShading) cachedMaterial.flatShading = true;
                if (useDerivativeTangents) {
                    // https://github.com/mrdoob/three.js/issues/11438#issuecomment-507003995
                    if (cachedMaterial.normalScale) cachedMaterial.normalScale.y *= -1;
                    if (cachedMaterial.clearcoatNormalScale) cachedMaterial.clearcoatNormalScale.y *= -1;
                }
                this.cache.add(cacheKey2, cachedMaterial);
                this.associations.set(cachedMaterial, this.associations.get(material));
            }
            material = cachedMaterial;
        }
        // workarounds for mesh and geometry
        if (material.aoMap && geometry.attributes.uv2 === undefined && geometry.attributes.uv !== undefined) geometry.setAttribute("uv2", geometry.attributes.uv);
        mesh.material = material;
    }
    getMaterialType() {
        return 0, _three.MeshStandardMaterial;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#materials
	 * @param {number} materialIndex
	 * @return {Promise<Material>}
	 */ loadMaterial(materialIndex) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        const materialDef = json.materials[materialIndex];
        let materialType;
        const materialParams = {};
        const materialExtensions = materialDef.extensions || {};
        const pending = [];
        if (materialExtensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS]) {
            const sgExtension = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS];
            materialType = sgExtension.getMaterialType();
            pending.push(sgExtension.extendParams(materialParams, materialDef, parser));
        } else if (materialExtensions[EXTENSIONS.KHR_MATERIALS_UNLIT]) {
            const kmuExtension = extensions[EXTENSIONS.KHR_MATERIALS_UNLIT];
            materialType = kmuExtension.getMaterialType();
            pending.push(kmuExtension.extendParams(materialParams, materialDef, parser));
        } else {
            // Specification:
            // https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#metallic-roughness-material
            const metallicRoughness = materialDef.pbrMetallicRoughness || {};
            materialParams.color = new (0, _three.Color)(1.0, 1.0, 1.0);
            materialParams.opacity = 1.0;
            if (Array.isArray(metallicRoughness.baseColorFactor)) {
                const array = metallicRoughness.baseColorFactor;
                materialParams.color.fromArray(array);
                materialParams.opacity = array[3];
            }
            if (metallicRoughness.baseColorTexture !== undefined) pending.push(parser.assignTexture(materialParams, "map", metallicRoughness.baseColorTexture, (0, _three.sRGBEncoding)));
            materialParams.metalness = metallicRoughness.metallicFactor !== undefined ? metallicRoughness.metallicFactor : 1.0;
            materialParams.roughness = metallicRoughness.roughnessFactor !== undefined ? metallicRoughness.roughnessFactor : 1.0;
            if (metallicRoughness.metallicRoughnessTexture !== undefined) {
                pending.push(parser.assignTexture(materialParams, "metalnessMap", metallicRoughness.metallicRoughnessTexture));
                pending.push(parser.assignTexture(materialParams, "roughnessMap", metallicRoughness.metallicRoughnessTexture));
            }
            materialType = this._invokeOne(function(ext) {
                return ext.getMaterialType && ext.getMaterialType(materialIndex);
            });
            pending.push(Promise.all(this._invokeAll(function(ext) {
                return ext.extendMaterialParams && ext.extendMaterialParams(materialIndex, materialParams);
            })));
        }
        if (materialDef.doubleSided === true) materialParams.side = (0, _three.DoubleSide);
        const alphaMode = materialDef.alphaMode || ALPHA_MODES.OPAQUE;
        if (alphaMode === ALPHA_MODES.BLEND) {
            materialParams.transparent = true;
            // See: https://github.com/mrdoob/three.js/issues/17706
            materialParams.depthWrite = false;
        } else {
            materialParams.transparent = false;
            if (alphaMode === ALPHA_MODES.MASK) materialParams.alphaTest = materialDef.alphaCutoff !== undefined ? materialDef.alphaCutoff : 0.5;
        }
        if (materialDef.normalTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) {
            pending.push(parser.assignTexture(materialParams, "normalMap", materialDef.normalTexture));
            materialParams.normalScale = new (0, _three.Vector2)(1, 1);
            if (materialDef.normalTexture.scale !== undefined) {
                const scale = materialDef.normalTexture.scale;
                materialParams.normalScale.set(scale, scale);
            }
        }
        if (materialDef.occlusionTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) {
            pending.push(parser.assignTexture(materialParams, "aoMap", materialDef.occlusionTexture));
            if (materialDef.occlusionTexture.strength !== undefined) materialParams.aoMapIntensity = materialDef.occlusionTexture.strength;
        }
        if (materialDef.emissiveFactor !== undefined && materialType !== (0, _three.MeshBasicMaterial)) materialParams.emissive = new (0, _three.Color)().fromArray(materialDef.emissiveFactor);
        if (materialDef.emissiveTexture !== undefined && materialType !== (0, _three.MeshBasicMaterial)) pending.push(parser.assignTexture(materialParams, "emissiveMap", materialDef.emissiveTexture, (0, _three.sRGBEncoding)));
        return Promise.all(pending).then(function() {
            let material;
            if (materialType === GLTFMeshStandardSGMaterial) material = extensions[EXTENSIONS.KHR_MATERIALS_PBR_SPECULAR_GLOSSINESS].createMaterial(materialParams);
            else material = new materialType(materialParams);
            if (materialDef.name) material.name = materialDef.name;
            assignExtrasToUserData(material, materialDef);
            parser.associations.set(material, {
                materials: materialIndex
            });
            if (materialDef.extensions) addUnknownExtensionsToUserData(extensions, material, materialDef);
            return material;
        });
    }
    /** When Object3D instances are targeted by animation, they need unique names. */ createUniqueName(originalName) {
        const sanitizedName = (0, _three.PropertyBinding).sanitizeNodeName(originalName || "");
        let name = sanitizedName;
        for(let i = 1; this.nodeNamesUsed[name]; ++i)name = sanitizedName + "_" + i;
        this.nodeNamesUsed[name] = true;
        return name;
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#geometry
	 *
	 * Creates BufferGeometries from primitives.
	 *
	 * @param {Array<GLTF.Primitive>} primitives
	 * @return {Promise<Array<BufferGeometry>>}
	 */ loadGeometries(primitives) {
        const parser = this;
        const extensions = this.extensions;
        const cache = this.primitiveCache;
        function createDracoPrimitive(primitive) {
            return extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION].decodePrimitive(primitive, parser).then(function(geometry) {
                return addPrimitiveAttributes(geometry, primitive, parser);
            });
        }
        const pending = [];
        for(let i = 0, il = primitives.length; i < il; i++){
            const primitive = primitives[i];
            const cacheKey = createPrimitiveKey(primitive);
            // See if we've already created this geometry
            const cached = cache[cacheKey];
            if (cached) // Use the cached geometry if it exists
            pending.push(cached.promise);
            else {
                let geometryPromise;
                if (primitive.extensions && primitive.extensions[EXTENSIONS.KHR_DRACO_MESH_COMPRESSION]) // Use DRACO geometry if available
                geometryPromise = createDracoPrimitive(primitive);
                else // Otherwise create a new geometry
                geometryPromise = addPrimitiveAttributes(new (0, _three.BufferGeometry)(), primitive, parser);
                // Cache this geometry
                cache[cacheKey] = {
                    primitive: primitive,
                    promise: geometryPromise
                };
                pending.push(geometryPromise);
            }
        }
        return Promise.all(pending);
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/blob/master/specification/2.0/README.md#meshes
	 * @param {number} meshIndex
	 * @return {Promise<Group|Mesh|SkinnedMesh>}
	 */ loadMesh(meshIndex) {
        const parser = this;
        const json = this.json;
        const extensions = this.extensions;
        const meshDef = json.meshes[meshIndex];
        const primitives = meshDef.primitives;
        const pending = [];
        for(let i = 0, il = primitives.length; i < il; i++){
            const material = primitives[i].material === undefined ? createDefaultMaterial(this.cache) : this.getDependency("material", primitives[i].material);
            pending.push(material);
        }
        pending.push(parser.loadGeometries(primitives));
        return Promise.all(pending).then(function(results) {
            const materials = results.slice(0, results.length - 1);
            const geometries = results[results.length - 1];
            const meshes = [];
            for(let i = 0, il = geometries.length; i < il; i++){
                const geometry = geometries[i];
                const primitive = primitives[i];
                // 1. create Mesh
                let mesh;
                const material = materials[i];
                if (primitive.mode === WEBGL_CONSTANTS.TRIANGLES || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP || primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN || primitive.mode === undefined) {
                    // .isSkinnedMesh isn't in glTF spec. See ._markDefs()
                    mesh = meshDef.isSkinnedMesh === true ? new (0, _three.SkinnedMesh)(geometry, material) : new (0, _three.Mesh)(geometry, material);
                    if (mesh.isSkinnedMesh === true && !mesh.geometry.attributes.skinWeight.normalized) // we normalize floating point skin weight array to fix malformed assets (see #15319)
                    // it's important to skip this for non-float32 data since normalizeSkinWeights assumes non-normalized inputs
                    mesh.normalizeSkinWeights();
                    if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_STRIP) mesh.geometry = toTrianglesDrawMode(mesh.geometry, (0, _three.TriangleStripDrawMode));
                    else if (primitive.mode === WEBGL_CONSTANTS.TRIANGLE_FAN) mesh.geometry = toTrianglesDrawMode(mesh.geometry, (0, _three.TriangleFanDrawMode));
                } else if (primitive.mode === WEBGL_CONSTANTS.LINES) mesh = new (0, _three.LineSegments)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.LINE_STRIP) mesh = new (0, _three.Line)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.LINE_LOOP) mesh = new (0, _three.LineLoop)(geometry, material);
                else if (primitive.mode === WEBGL_CONSTANTS.POINTS) mesh = new (0, _three.Points)(geometry, material);
                else throw new Error("THREE.GLTFLoader: Primitive mode unsupported: " + primitive.mode);
                if (Object.keys(mesh.geometry.morphAttributes).length > 0) updateMorphTargets(mesh, meshDef);
                mesh.name = parser.createUniqueName(meshDef.name || "mesh_" + meshIndex);
                assignExtrasToUserData(mesh, meshDef);
                if (primitive.extensions) addUnknownExtensionsToUserData(extensions, mesh, primitive);
                parser.assignFinalMaterial(mesh);
                meshes.push(mesh);
            }
            for(let i1 = 0, il1 = meshes.length; i1 < il1; i1++)parser.associations.set(meshes[i1], {
                meshes: meshIndex,
                primitives: i1
            });
            if (meshes.length === 1) return meshes[0];
            const group = new (0, _three.Group)();
            parser.associations.set(group, {
                meshes: meshIndex
            });
            for(let i2 = 0, il2 = meshes.length; i2 < il2; i2++)group.add(meshes[i2]);
            return group;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#cameras
	 * @param {number} cameraIndex
	 * @return {Promise<THREE.Camera>}
	 */ loadCamera(cameraIndex) {
        let camera;
        const cameraDef = this.json.cameras[cameraIndex];
        const params = cameraDef[cameraDef.type];
        if (!params) {
            console.warn("THREE.GLTFLoader: Missing camera parameters.");
            return;
        }
        if (cameraDef.type === "perspective") camera = new (0, _three.PerspectiveCamera)((0, _three.MathUtils).radToDeg(params.yfov), params.aspectRatio || 1, params.znear || 1, params.zfar || 2e6);
        else if (cameraDef.type === "orthographic") camera = new (0, _three.OrthographicCamera)(-params.xmag, params.xmag, params.ymag, -params.ymag, params.znear, params.zfar);
        if (cameraDef.name) camera.name = this.createUniqueName(cameraDef.name);
        assignExtrasToUserData(camera, cameraDef);
        return Promise.resolve(camera);
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#skins
	 * @param {number} skinIndex
	 * @return {Promise<Object>}
	 */ loadSkin(skinIndex) {
        const skinDef = this.json.skins[skinIndex];
        const skinEntry = {
            joints: skinDef.joints
        };
        if (skinDef.inverseBindMatrices === undefined) return Promise.resolve(skinEntry);
        return this.getDependency("accessor", skinDef.inverseBindMatrices).then(function(accessor) {
            skinEntry.inverseBindMatrices = accessor;
            return skinEntry;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#animations
	 * @param {number} animationIndex
	 * @return {Promise<AnimationClip>}
	 */ loadAnimation(animationIndex) {
        const json = this.json;
        const animationDef = json.animations[animationIndex];
        const pendingNodes = [];
        const pendingInputAccessors = [];
        const pendingOutputAccessors = [];
        const pendingSamplers = [];
        const pendingTargets = [];
        for(let i = 0, il = animationDef.channels.length; i < il; i++){
            const channel = animationDef.channels[i];
            const sampler = animationDef.samplers[channel.sampler];
            const target = channel.target;
            const name = target.node;
            const input = animationDef.parameters !== undefined ? animationDef.parameters[sampler.input] : sampler.input;
            const output = animationDef.parameters !== undefined ? animationDef.parameters[sampler.output] : sampler.output;
            pendingNodes.push(this.getDependency("node", name));
            pendingInputAccessors.push(this.getDependency("accessor", input));
            pendingOutputAccessors.push(this.getDependency("accessor", output));
            pendingSamplers.push(sampler);
            pendingTargets.push(target);
        }
        return Promise.all([
            Promise.all(pendingNodes),
            Promise.all(pendingInputAccessors),
            Promise.all(pendingOutputAccessors),
            Promise.all(pendingSamplers),
            Promise.all(pendingTargets)
        ]).then(function(dependencies) {
            const nodes = dependencies[0];
            const inputAccessors = dependencies[1];
            const outputAccessors = dependencies[2];
            const samplers = dependencies[3];
            const targets = dependencies[4];
            const tracks = [];
            for(let i = 0, il = nodes.length; i < il; i++){
                const node = nodes[i];
                const inputAccessor = inputAccessors[i];
                const outputAccessor = outputAccessors[i];
                const sampler = samplers[i];
                const target = targets[i];
                if (node === undefined) continue;
                node.updateMatrix();
                let TypedKeyframeTrack;
                switch(PATH_PROPERTIES[target.path]){
                    case PATH_PROPERTIES.weights:
                        TypedKeyframeTrack = (0, _three.NumberKeyframeTrack);
                        break;
                    case PATH_PROPERTIES.rotation:
                        TypedKeyframeTrack = (0, _three.QuaternionKeyframeTrack);
                        break;
                    case PATH_PROPERTIES.position:
                    case PATH_PROPERTIES.scale:
                    default:
                        TypedKeyframeTrack = (0, _three.VectorKeyframeTrack);
                        break;
                }
                const targetName = node.name ? node.name : node.uuid;
                const interpolation = sampler.interpolation !== undefined ? INTERPOLATION[sampler.interpolation] : (0, _three.InterpolateLinear);
                const targetNames = [];
                if (PATH_PROPERTIES[target.path] === PATH_PROPERTIES.weights) node.traverse(function(object) {
                    if (object.morphTargetInfluences) targetNames.push(object.name ? object.name : object.uuid);
                });
                else targetNames.push(targetName);
                let outputArray = outputAccessor.array;
                if (outputAccessor.normalized) {
                    const scale = getNormalizedComponentScale(outputArray.constructor);
                    const scaled = new Float32Array(outputArray.length);
                    for(let j = 0, jl = outputArray.length; j < jl; j++)scaled[j] = outputArray[j] * scale;
                    outputArray = scaled;
                }
                for(let j1 = 0, jl1 = targetNames.length; j1 < jl1; j1++){
                    const track = new TypedKeyframeTrack(targetNames[j1] + "." + PATH_PROPERTIES[target.path], inputAccessor.array, outputArray, interpolation);
                    // Override interpolation with custom factory method.
                    if (sampler.interpolation === "CUBICSPLINE") {
                        track.createInterpolant = function InterpolantFactoryMethodGLTFCubicSpline(result) {
                            // A CUBICSPLINE keyframe in glTF has three output values for each input value,
                            // representing inTangent, splineVertex, and outTangent. As a result, track.getValueSize()
                            // must be divided by three to get the interpolant's sampleSize argument.
                            const interpolantType = this instanceof (0, _three.QuaternionKeyframeTrack) ? GLTFCubicSplineQuaternionInterpolant : GLTFCubicSplineInterpolant;
                            return new interpolantType(this.times, this.values, this.getValueSize() / 3, result);
                        };
                        // Mark as CUBICSPLINE. `track.getInterpolation()` doesn't support custom interpolants.
                        track.createInterpolant.isInterpolantFactoryMethodGLTFCubicSpline = true;
                    }
                    tracks.push(track);
                }
            }
            const name = animationDef.name ? animationDef.name : "animation_" + animationIndex;
            return new (0, _three.AnimationClip)(name, undefined, tracks);
        });
    }
    createNodeMesh(nodeIndex) {
        const json = this.json;
        const parser = this;
        const nodeDef = json.nodes[nodeIndex];
        if (nodeDef.mesh === undefined) return null;
        return parser.getDependency("mesh", nodeDef.mesh).then(function(mesh) {
            const node = parser._getNodeRef(parser.meshCache, nodeDef.mesh, mesh);
            // if weights are provided on the node, override weights on the mesh.
            if (nodeDef.weights !== undefined) node.traverse(function(o) {
                if (!o.isMesh) return;
                for(let i = 0, il = nodeDef.weights.length; i < il; i++)o.morphTargetInfluences[i] = nodeDef.weights[i];
            });
            return node;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#nodes-and-hierarchy
	 * @param {number} nodeIndex
	 * @return {Promise<Object3D>}
	 */ loadNode(nodeIndex) {
        const json = this.json;
        const extensions = this.extensions;
        const parser = this;
        const nodeDef = json.nodes[nodeIndex];
        // reserve node's name before its dependencies, so the root has the intended name.
        const nodeName = nodeDef.name ? parser.createUniqueName(nodeDef.name) : "";
        return (function() {
            const pending = [];
            const meshPromise = parser._invokeOne(function(ext) {
                return ext.createNodeMesh && ext.createNodeMesh(nodeIndex);
            });
            if (meshPromise) pending.push(meshPromise);
            if (nodeDef.camera !== undefined) pending.push(parser.getDependency("camera", nodeDef.camera).then(function(camera) {
                return parser._getNodeRef(parser.cameraCache, nodeDef.camera, camera);
            }));
            parser._invokeAll(function(ext) {
                return ext.createNodeAttachment && ext.createNodeAttachment(nodeIndex);
            }).forEach(function(promise) {
                pending.push(promise);
            });
            return Promise.all(pending);
        })().then(function(objects) {
            let node;
            // .isBone isn't in glTF spec. See ._markDefs
            if (nodeDef.isBone === true) node = new (0, _three.Bone)();
            else if (objects.length > 1) node = new (0, _three.Group)();
            else if (objects.length === 1) node = objects[0];
            else node = new (0, _three.Object3D)();
            if (node !== objects[0]) for(let i = 0, il = objects.length; i < il; i++)node.add(objects[i]);
            if (nodeDef.name) {
                node.userData.name = nodeDef.name;
                node.name = nodeName;
            }
            assignExtrasToUserData(node, nodeDef);
            if (nodeDef.extensions) addUnknownExtensionsToUserData(extensions, node, nodeDef);
            if (nodeDef.matrix !== undefined) {
                const matrix = new (0, _three.Matrix4)();
                matrix.fromArray(nodeDef.matrix);
                node.applyMatrix4(matrix);
            } else {
                if (nodeDef.translation !== undefined) node.position.fromArray(nodeDef.translation);
                if (nodeDef.rotation !== undefined) node.quaternion.fromArray(nodeDef.rotation);
                if (nodeDef.scale !== undefined) node.scale.fromArray(nodeDef.scale);
            }
            if (!parser.associations.has(node)) parser.associations.set(node, {});
            parser.associations.get(node).nodes = nodeIndex;
            return node;
        });
    }
    /**
	 * Specification: https://github.com/KhronosGroup/glTF/tree/master/specification/2.0#scenes
	 * @param {number} sceneIndex
	 * @return {Promise<Group>}
	 */ loadScene(sceneIndex) {
        const json = this.json;
        const extensions = this.extensions;
        const sceneDef = this.json.scenes[sceneIndex];
        const parser = this;
        // Loader returns Group, not Scene.
        // See: https://github.com/mrdoob/three.js/issues/18342#issuecomment-578981172
        const scene = new (0, _three.Group)();
        if (sceneDef.name) scene.name = parser.createUniqueName(sceneDef.name);
        assignExtrasToUserData(scene, sceneDef);
        if (sceneDef.extensions) addUnknownExtensionsToUserData(extensions, scene, sceneDef);
        const nodeIds = sceneDef.nodes || [];
        const pending = [];
        for(let i = 0, il = nodeIds.length; i < il; i++)pending.push(buildNodeHierarchy(nodeIds[i], scene, json, parser));
        return Promise.all(pending).then(function() {
            // Removes dangling associations, associations that reference a node that
            // didn't make it into the scene.
            const reduceAssociations = (node)=>{
                const reducedAssociations = new Map();
                for (const [key, value] of parser.associations)if (key instanceof (0, _three.Material) || key instanceof (0, _three.Texture)) reducedAssociations.set(key, value);
                node.traverse((node)=>{
                    const mappings = parser.associations.get(node);
                    if (mappings != null) reducedAssociations.set(node, mappings);
                });
                return reducedAssociations;
            };
            parser.associations = reduceAssociations(scene);
            return scene;
        });
    }
}
function buildNodeHierarchy(nodeId, parentObject, json, parser) {
    const nodeDef = json.nodes[nodeId];
    return parser.getDependency("node", nodeId).then(function(node) {
        if (nodeDef.skin === undefined) return node;
        // build skeleton here as well
        let skinEntry;
        return parser.getDependency("skin", nodeDef.skin).then(function(skin) {
            skinEntry = skin;
            const pendingJoints = [];
            for(let i = 0, il = skinEntry.joints.length; i < il; i++)pendingJoints.push(parser.getDependency("node", skinEntry.joints[i]));
            return Promise.all(pendingJoints);
        }).then(function(jointNodes) {
            node.traverse(function(mesh) {
                if (!mesh.isMesh) return;
                const bones = [];
                const boneInverses = [];
                for(let j = 0, jl = jointNodes.length; j < jl; j++){
                    const jointNode = jointNodes[j];
                    if (jointNode) {
                        bones.push(jointNode);
                        const mat = new (0, _three.Matrix4)();
                        if (skinEntry.inverseBindMatrices !== undefined) mat.fromArray(skinEntry.inverseBindMatrices.array, j * 16);
                        boneInverses.push(mat);
                    } else console.warn('THREE.GLTFLoader: Joint "%s" could not be found.', skinEntry.joints[j]);
                }
                mesh.bind(new (0, _three.Skeleton)(bones, boneInverses), mesh.matrixWorld);
            });
            return node;
        });
    }).then(function(node) {
        // build node hierachy
        parentObject.add(node);
        const pending = [];
        if (nodeDef.children) {
            const children = nodeDef.children;
            for(let i = 0, il = children.length; i < il; i++){
                const child = children[i];
                pending.push(buildNodeHierarchy(child, node, json, parser));
            }
        }
        return Promise.all(pending);
    });
}
/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 */ function computeBounds(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const box = new (0, _three.Box3)();
    if (attributes.POSITION !== undefined) {
        const accessor = parser.json.accessors[attributes.POSITION];
        const min = accessor.min;
        const max = accessor.max;
        // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
        if (min !== undefined && max !== undefined) {
            box.set(new (0, _three.Vector3)(min[0], min[1], min[2]), new (0, _three.Vector3)(max[0], max[1], max[2]));
            if (accessor.normalized) {
                const boxScale = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor.componentType]);
                box.min.multiplyScalar(boxScale);
                box.max.multiplyScalar(boxScale);
            }
        } else {
            console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            return;
        }
    } else return;
    const targets = primitiveDef.targets;
    if (targets !== undefined) {
        const maxDisplacement = new (0, _three.Vector3)();
        const vector = new (0, _three.Vector3)();
        for(let i = 0, il = targets.length; i < il; i++){
            const target = targets[i];
            if (target.POSITION !== undefined) {
                const accessor1 = parser.json.accessors[target.POSITION];
                const min1 = accessor1.min;
                const max1 = accessor1.max;
                // glTF requires 'min' and 'max', but VRM (which extends glTF) currently ignores that requirement.
                if (min1 !== undefined && max1 !== undefined) {
                    // we need to get max of absolute components because target weight is [-1,1]
                    vector.setX(Math.max(Math.abs(min1[0]), Math.abs(max1[0])));
                    vector.setY(Math.max(Math.abs(min1[1]), Math.abs(max1[1])));
                    vector.setZ(Math.max(Math.abs(min1[2]), Math.abs(max1[2])));
                    if (accessor1.normalized) {
                        const boxScale1 = getNormalizedComponentScale(WEBGL_COMPONENT_TYPES[accessor1.componentType]);
                        vector.multiplyScalar(boxScale1);
                    }
                    // Note: this assumes that the sum of all weights is at most 1. This isn't quite correct - it's more conservative
                    // to assume that each target can have a max weight of 1. However, for some use cases - notably, when morph targets
                    // are used to implement key-frame animations and as such only two are active at a time - this results in very large
                    // boxes. So for now we make a box that's sometimes a touch too small but is hopefully mostly of reasonable size.
                    maxDisplacement.max(vector);
                } else console.warn("THREE.GLTFLoader: Missing min/max properties for accessor POSITION.");
            }
        }
        // As per comment above this box isn't conservative, but has a reasonable size for a very large number of morph targets.
        box.expandByVector(maxDisplacement);
    }
    geometry.boundingBox = box;
    const sphere = new (0, _three.Sphere)();
    box.getCenter(sphere.center);
    sphere.radius = box.min.distanceTo(box.max) / 2;
    geometry.boundingSphere = sphere;
}
/**
 * @param {BufferGeometry} geometry
 * @param {GLTF.Primitive} primitiveDef
 * @param {GLTFParser} parser
 * @return {Promise<BufferGeometry>}
 */ function addPrimitiveAttributes(geometry, primitiveDef, parser) {
    const attributes = primitiveDef.attributes;
    const pending = [];
    function assignAttributeAccessor(accessorIndex, attributeName) {
        return parser.getDependency("accessor", accessorIndex).then(function(accessor) {
            geometry.setAttribute(attributeName, accessor);
        });
    }
    for(const gltfAttributeName in attributes){
        const threeAttributeName = ATTRIBUTES[gltfAttributeName] || gltfAttributeName.toLowerCase();
        // Skip attributes already provided by e.g. Draco extension.
        if (threeAttributeName in geometry.attributes) continue;
        pending.push(assignAttributeAccessor(attributes[gltfAttributeName], threeAttributeName));
    }
    if (primitiveDef.indices !== undefined && !geometry.index) {
        const accessor = parser.getDependency("accessor", primitiveDef.indices).then(function(accessor) {
            geometry.setIndex(accessor);
        });
        pending.push(accessor);
    }
    assignExtrasToUserData(geometry, primitiveDef);
    computeBounds(geometry, primitiveDef, parser);
    return Promise.all(pending).then(function() {
        return primitiveDef.targets !== undefined ? addMorphTargets(geometry, primitiveDef.targets, parser) : geometry;
    });
}
/**
 * @param {BufferGeometry} geometry
 * @param {Number} drawMode
 * @return {BufferGeometry}
 */ function toTrianglesDrawMode(geometry, drawMode) {
    let index = geometry.getIndex();
    // generate index if not present
    if (index === null) {
        const indices = [];
        const position = geometry.getAttribute("position");
        if (position !== undefined) {
            for(let i = 0; i < position.count; i++)indices.push(i);
            geometry.setIndex(indices);
            index = geometry.getIndex();
        } else {
            console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Undefined position attribute. Processing not possible.");
            return geometry;
        }
    }
    //
    const numberOfTriangles = index.count - 2;
    const newIndices = [];
    if (drawMode === (0, _three.TriangleFanDrawMode)) // gl.TRIANGLE_FAN
    for(let i1 = 1; i1 <= numberOfTriangles; i1++){
        newIndices.push(index.getX(0));
        newIndices.push(index.getX(i1));
        newIndices.push(index.getX(i1 + 1));
    }
    else {
        // gl.TRIANGLE_STRIP
        for(let i2 = 0; i2 < numberOfTriangles; i2++)if (i2 % 2 === 0) {
            newIndices.push(index.getX(i2));
            newIndices.push(index.getX(i2 + 1));
            newIndices.push(index.getX(i2 + 2));
        } else {
            newIndices.push(index.getX(i2 + 2));
            newIndices.push(index.getX(i2 + 1));
            newIndices.push(index.getX(i2));
        }
    }
    if (newIndices.length / 3 !== numberOfTriangles) console.error("THREE.GLTFLoader.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");
    // build final geometry
    const newGeometry = geometry.clone();
    newGeometry.setIndex(newIndices);
    return newGeometry;
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cfP3d":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "RGBELoader", ()=>RGBELoader);
var _three = require("three");
// https://github.com/mrdoob/three.js/issues/5552
// http://en.wikipedia.org/wiki/RGBE_image_format
class RGBELoader extends (0, _three.DataTextureLoader) {
    constructor(manager){
        super(manager);
        this.type = (0, _three.HalfFloatType);
    }
    // adapted from http://www.graphics.cornell.edu/~bjw/rgbe.html
    parse(buffer) {
        const /* return codes for rgbe routines */ //RGBE_RETURN_SUCCESS = 0,
        RGBE_RETURN_FAILURE = -1, /* default error routine.  change this to change error handling */ rgbe_read_error = 1, rgbe_write_error = 2, rgbe_format_error = 3, rgbe_memory_error = 4, rgbe_error = function(rgbe_error_code, msg) {
            switch(rgbe_error_code){
                case rgbe_read_error:
                    console.error("THREE.RGBELoader Read Error: " + (msg || ""));
                    break;
                case rgbe_write_error:
                    console.error("THREE.RGBELoader Write Error: " + (msg || ""));
                    break;
                case rgbe_format_error:
                    console.error("THREE.RGBELoader Bad File Format: " + (msg || ""));
                    break;
                default:
                case rgbe_memory_error:
                    console.error("THREE.RGBELoader: Error: " + (msg || ""));
            }
            return RGBE_RETURN_FAILURE;
        }, /* offsets to red, green, and blue components in a data (float) pixel */ //RGBE_DATA_RED = 0,
        //RGBE_DATA_GREEN = 1,
        //RGBE_DATA_BLUE = 2,
        /* number of floats per pixel, use 4 since stored in rgba image format */ //RGBE_DATA_SIZE = 4,
        /* flags indicating which fields in an rgbe_header_info are valid */ RGBE_VALID_PROGRAMTYPE = 1, RGBE_VALID_FORMAT = 2, RGBE_VALID_DIMENSIONS = 4, NEWLINE = "\n", fgets = function(buffer, lineLimit, consume) {
            const chunkSize = 128;
            lineLimit = !lineLimit ? 1024 : lineLimit;
            let p = buffer.pos, i = -1, len = 0, s = "", chunk = String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));
            while(0 > (i = chunk.indexOf(NEWLINE)) && len < lineLimit && p < buffer.byteLength){
                s += chunk;
                len += chunk.length;
                p += chunkSize;
                chunk += String.fromCharCode.apply(null, new Uint16Array(buffer.subarray(p, p + chunkSize)));
            }
            if (-1 < i) {
                /*for (i=l-1; i>=0; i--) {
						byteCode = m.charCodeAt(i);
						if (byteCode > 0x7f && byteCode <= 0x7ff) byteLen++;
						else if (byteCode > 0x7ff && byteCode <= 0xffff) byteLen += 2;
						if (byteCode >= 0xDC00 && byteCode <= 0xDFFF) i--; //trail surrogate
					}*/ if (false !== consume) buffer.pos += len + i + 1;
                return s + chunk.slice(0, i);
            }
            return false;
        }, /* minimal header reading.  modify if you want to parse more information */ RGBE_ReadHeader = function(buffer) {
            // regexes to parse header info fields
            const magic_token_re = /^#\?(\S+)/, gamma_re = /^\s*GAMMA\s*=\s*(\d+(\.\d+)?)\s*$/, exposure_re = /^\s*EXPOSURE\s*=\s*(\d+(\.\d+)?)\s*$/, format_re = /^\s*FORMAT=(\S+)\s*$/, dimensions_re = /^\s*\-Y\s+(\d+)\s+\+X\s+(\d+)\s*$/, // RGBE format header struct
            header = {
                valid: 0,
                /* indicate which fields are valid */ string: "",
                /* the actual header string */ comments: "",
                /* comments found in header */ programtype: "RGBE",
                /* listed at beginning of file to identify it after "#?". defaults to "RGBE" */ format: "",
                /* RGBE format, default 32-bit_rle_rgbe */ gamma: 1.0,
                /* image has already been gamma corrected with given gamma. defaults to 1.0 (no correction) */ exposure: 1.0,
                /* a value of 1.0 in an image corresponds to <exposure> watts/steradian/m^2. defaults to 1.0 */ width: 0,
                height: 0 /* image dimensions, width/height */ 
            };
            let line, match;
            if (buffer.pos >= buffer.byteLength || !(line = fgets(buffer))) return rgbe_error(rgbe_read_error, "no header found");
            /* if you want to require the magic token then uncomment the next line */ if (!(match = line.match(magic_token_re))) return rgbe_error(rgbe_format_error, "bad initial token");
            header.valid |= RGBE_VALID_PROGRAMTYPE;
            header.programtype = match[1];
            header.string += line + "\n";
            while(true){
                line = fgets(buffer);
                if (false === line) break;
                header.string += line + "\n";
                if ("#" === line.charAt(0)) {
                    header.comments += line + "\n";
                    continue; // comment line
                }
                if (match = line.match(gamma_re)) header.gamma = parseFloat(match[1]);
                if (match = line.match(exposure_re)) header.exposure = parseFloat(match[1]);
                if (match = line.match(format_re)) {
                    header.valid |= RGBE_VALID_FORMAT;
                    header.format = match[1]; //'32-bit_rle_rgbe';
                }
                if (match = line.match(dimensions_re)) {
                    header.valid |= RGBE_VALID_DIMENSIONS;
                    header.height = parseInt(match[1], 10);
                    header.width = parseInt(match[2], 10);
                }
                if (header.valid & RGBE_VALID_FORMAT && header.valid & RGBE_VALID_DIMENSIONS) break;
            }
            if (!(header.valid & RGBE_VALID_FORMAT)) return rgbe_error(rgbe_format_error, "missing format specifier");
            if (!(header.valid & RGBE_VALID_DIMENSIONS)) return rgbe_error(rgbe_format_error, "missing image size specifier");
            return header;
        }, RGBE_ReadPixels_RLE = function(buffer, w, h) {
            const scanline_width = w;
            if (scanline_width < 8 || scanline_width > 0x7fff || // this file is not run length encoded
            2 !== buffer[0] || 2 !== buffer[1] || buffer[2] & 0x80) // return the flat buffer
            return new Uint8Array(buffer);
            if (scanline_width !== (buffer[2] << 8 | buffer[3])) return rgbe_error(rgbe_format_error, "wrong scanline width");
            const data_rgba = new Uint8Array(4 * w * h);
            if (!data_rgba.length) return rgbe_error(rgbe_memory_error, "unable to allocate buffer space");
            let offset = 0, pos = 0;
            const ptr_end = 4 * scanline_width;
            const rgbeStart = new Uint8Array(4);
            const scanline_buffer = new Uint8Array(ptr_end);
            let num_scanlines = h;
            // read in each successive scanline
            while(num_scanlines > 0 && pos < buffer.byteLength){
                if (pos + 4 > buffer.byteLength) return rgbe_error(rgbe_read_error);
                rgbeStart[0] = buffer[pos++];
                rgbeStart[1] = buffer[pos++];
                rgbeStart[2] = buffer[pos++];
                rgbeStart[3] = buffer[pos++];
                if (2 != rgbeStart[0] || 2 != rgbeStart[1] || (rgbeStart[2] << 8 | rgbeStart[3]) != scanline_width) return rgbe_error(rgbe_format_error, "bad rgbe scanline format");
                // read each of the four channels for the scanline into the buffer
                // first red, then green, then blue, then exponent
                let ptr = 0, count;
                while(ptr < ptr_end && pos < buffer.byteLength){
                    count = buffer[pos++];
                    const isEncodedRun = count > 128;
                    if (isEncodedRun) count -= 128;
                    if (0 === count || ptr + count > ptr_end) return rgbe_error(rgbe_format_error, "bad scanline data");
                    if (isEncodedRun) {
                        // a (encoded) run of the same value
                        const byteValue = buffer[pos++];
                        for(let i = 0; i < count; i++)scanline_buffer[ptr++] = byteValue;
                    //ptr += count;
                    } else {
                        // a literal-run
                        scanline_buffer.set(buffer.subarray(pos, pos + count), ptr);
                        ptr += count;
                        pos += count;
                    }
                }
                // now convert data from buffer into rgba
                // first red, then green, then blue, then exponent (alpha)
                const l = scanline_width; //scanline_buffer.byteLength;
                for(let i1 = 0; i1 < l; i1++){
                    let off = 0;
                    data_rgba[offset] = scanline_buffer[i1 + off];
                    off += scanline_width; //1;
                    data_rgba[offset + 1] = scanline_buffer[i1 + off];
                    off += scanline_width; //1;
                    data_rgba[offset + 2] = scanline_buffer[i1 + off];
                    off += scanline_width; //1;
                    data_rgba[offset + 3] = scanline_buffer[i1 + off];
                    offset += 4;
                }
                num_scanlines--;
            }
            return data_rgba;
        };
        const RGBEByteToRGBFloat = function(sourceArray, sourceOffset, destArray, destOffset) {
            const e = sourceArray[sourceOffset + 3];
            const scale = Math.pow(2.0, e - 128.0) / 255.0;
            destArray[destOffset + 0] = sourceArray[sourceOffset + 0] * scale;
            destArray[destOffset + 1] = sourceArray[sourceOffset + 1] * scale;
            destArray[destOffset + 2] = sourceArray[sourceOffset + 2] * scale;
            destArray[destOffset + 3] = 1;
        };
        const RGBEByteToRGBHalf = function(sourceArray, sourceOffset, destArray, destOffset) {
            const e = sourceArray[sourceOffset + 3];
            const scale = Math.pow(2.0, e - 128.0) / 255.0;
            // clamping to 65504, the maximum representable value in float16
            destArray[destOffset + 0] = (0, _three.DataUtils).toHalfFloat(Math.min(sourceArray[sourceOffset + 0] * scale, 65504));
            destArray[destOffset + 1] = (0, _three.DataUtils).toHalfFloat(Math.min(sourceArray[sourceOffset + 1] * scale, 65504));
            destArray[destOffset + 2] = (0, _three.DataUtils).toHalfFloat(Math.min(sourceArray[sourceOffset + 2] * scale, 65504));
            destArray[destOffset + 3] = (0, _three.DataUtils).toHalfFloat(1);
        };
        const byteArray = new Uint8Array(buffer);
        byteArray.pos = 0;
        const rgbe_header_info = RGBE_ReadHeader(byteArray);
        if (RGBE_RETURN_FAILURE !== rgbe_header_info) {
            const w = rgbe_header_info.width, h = rgbe_header_info.height, image_rgba_data = RGBE_ReadPixels_RLE(byteArray.subarray(byteArray.pos), w, h);
            if (RGBE_RETURN_FAILURE !== image_rgba_data) {
                let data, type;
                let numElements;
                switch(this.type){
                    case 0, _three.FloatType:
                        numElements = image_rgba_data.length / 4;
                        const floatArray = new Float32Array(numElements * 4);
                        for(let j = 0; j < numElements; j++)RGBEByteToRGBFloat(image_rgba_data, j * 4, floatArray, j * 4);
                        data = floatArray;
                        type = (0, _three.FloatType);
                        break;
                    case 0, _three.HalfFloatType:
                        numElements = image_rgba_data.length / 4;
                        const halfArray = new Uint16Array(numElements * 4);
                        for(let j1 = 0; j1 < numElements; j1++)RGBEByteToRGBHalf(image_rgba_data, j1 * 4, halfArray, j1 * 4);
                        data = halfArray;
                        type = (0, _three.HalfFloatType);
                        break;
                    default:
                        console.error("THREE.RGBELoader: unsupported type: ", this.type);
                        break;
                }
                return {
                    width: w,
                    height: h,
                    data: data,
                    header: rgbe_header_info.string,
                    gamma: rgbe_header_info.gamma,
                    exposure: rgbe_header_info.exposure,
                    type: type
                };
            }
        }
        return null;
    }
    setDataType(value) {
        this.type = value;
        return this;
    }
    load(url, onLoad, onProgress, onError) {
        function onLoadCallback(texture, texData) {
            switch(texture.type){
                case 0, _three.FloatType:
                case 0, _three.HalfFloatType:
                    texture.encoding = (0, _three.LinearEncoding);
                    texture.minFilter = (0, _three.LinearFilter);
                    texture.magFilter = (0, _three.LinearFilter);
                    texture.generateMipmaps = false;
                    texture.flipY = true;
                    break;
            }
            if (onLoad) onLoad(texture, texData);
        }
        return super.load(url, onLoadCallback, onProgress, onError);
    }
}

},{"three":"ktPTu","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}]},["81nEJ"], null, "parcelRequire9b34")

//# sourceMappingURL=index.96ef440d.js.map
