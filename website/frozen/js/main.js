// node_modules/delegate-it/delegate.js
var ledger = /* @__PURE__ */ new WeakMap();
function editLedger(wanted, baseElement, callback, setup) {
  if (!wanted && !ledger.has(baseElement)) {
    return false;
  }
  const elementMap = ledger.get(baseElement) ?? /* @__PURE__ */ new WeakMap();
  ledger.set(baseElement, elementMap);
  const setups = elementMap.get(callback) ?? /* @__PURE__ */ new Set();
  elementMap.set(callback, setups);
  const existed = setups.has(setup);
  if (wanted) {
    setups.add(setup);
  } else {
    setups.delete(setup);
  }
  return existed && wanted;
}
function safeClosest(event, selector) {
  let target = event.target;
  if (target instanceof Text) {
    target = target.parentElement;
  }
  if (target instanceof Element && event.currentTarget instanceof Element) {
    const closest = target.closest(selector);
    if (closest && event.currentTarget.contains(closest)) {
      return closest;
    }
  }
}
function delegate(selector, type, callback, options = {}) {
  const { signal, base = document } = options;
  if (signal?.aborted) {
    return;
  }
  const { once, ...nativeListenerOptions } = options;
  const baseElement = base instanceof Document ? base.documentElement : base;
  const capture = Boolean(typeof options === "object" ? options.capture : options);
  const listenerFunction = (event) => {
    const delegateTarget = safeClosest(event, String(selector));
    if (delegateTarget) {
      const delegateEvent = Object.assign(event, { delegateTarget });
      callback.call(baseElement, delegateEvent);
      if (once) {
        baseElement.removeEventListener(type, listenerFunction, nativeListenerOptions);
        editLedger(false, baseElement, callback, setup);
      }
    }
  };
  const setup = JSON.stringify({ selector, type, capture });
  const isAlreadyListening = editLedger(true, baseElement, callback, setup);
  if (!isAlreadyListening) {
    baseElement.addEventListener(type, listenerFunction, nativeListenerOptions);
  }
  signal?.addEventListener("abort", () => {
    editLedger(false, baseElement, callback, setup);
  });
}
var delegate_default = delegate;

// node_modules/swup/dist/Swup.modern.js
function i() {
  return i = Object.assign ? Object.assign.bind() : function(t) {
    for (var e3 = 1; e3 < arguments.length; e3++) {
      var i3 = arguments[e3];
      for (var s3 in i3)
        ({}).hasOwnProperty.call(i3, s3) && (t[s3] = i3[s3]);
    }
    return t;
  }, i.apply(null, arguments);
}
var s = (t, e3) => String(t).toLowerCase().replace(/[\s/_.]+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+|-+$/g, "") || e3 || "";
var n = ({ hash: t } = {}) => window.location.pathname + window.location.search + (t ? window.location.hash : "");
var o = (t, e3 = {}) => {
  const s3 = i({ url: t = t || n({ hash: true }), random: Math.random(), source: "swup" }, e3);
  window.history.pushState(s3, "", t);
};
var r = (t = null, e3 = {}) => {
  t = t || n({ hash: true });
  const s3 = i({}, window.history.state || {}, { url: t, random: Math.random(), source: "swup" }, e3);
  window.history.replaceState(s3, "", t);
};
var a = (e3, s3, n3, o3) => {
  const r4 = new AbortController();
  return o3 = i({}, o3, { signal: r4.signal }), delegate_default(e3, s3, n3, o3), { destroy: () => r4.abort() };
};
var l = class extends URL {
  constructor(t, e3 = document.baseURI) {
    super(t.toString(), e3), Object.setPrototypeOf(this, l.prototype);
  }
  get url() {
    return this.pathname + this.search;
  }
  static fromElement(t) {
    const e3 = t.getAttribute("href") || t.getAttribute("xlink:href") || "";
    return new l(e3);
  }
  static fromUrl(t) {
    return new l(t);
  }
};
var c = class extends Error {
  constructor(t, e3) {
    super(t), this.url = void 0, this.status = void 0, this.aborted = void 0, this.timedOut = void 0, this.name = "FetchError", this.url = e3.url, this.status = e3.status, this.aborted = e3.aborted || false, this.timedOut = e3.timedOut || false;
  }
};
async function u(t, e3 = {}) {
  var s3;
  t = l.fromUrl(t).url;
  const { visit: n3 = this.visit } = e3, o3 = i({}, this.options.requestHeaders, e3.headers), r4 = null != (s3 = e3.timeout) ? s3 : this.options.timeout, a2 = new AbortController(), { signal: h } = a2;
  e3 = i({}, e3, { headers: o3, signal: h });
  let u2, d2 = false, p2 = null;
  r4 && r4 > 0 && (p2 = setTimeout(() => {
    d2 = true, a2.abort("timeout");
  }, r4));
  try {
    u2 = await this.hooks.call("fetch:request", n3, { url: t, options: e3 }, (t2, { url: e4, options: i3 }) => fetch(e4, i3)), p2 && clearTimeout(p2);
  } catch (e4) {
    if (d2)
      throw this.hooks.call("fetch:timeout", n3, { url: t }), new c(`Request timed out: ${t}`, { url: t, timedOut: d2 });
    if ("AbortError" === (null == e4 ? void 0 : e4.name) || h.aborted)
      throw new c(`Request aborted: ${t}`, { url: t, aborted: true });
    throw e4;
  }
  const { status: m2, url: w2 } = u2, f2 = await u2.text();
  if (500 === m2)
    throw this.hooks.call("fetch:error", n3, { status: m2, response: u2, url: w2 }), new c(`Server error: ${w2}`, { status: m2, url: w2 });
  if (!f2)
    throw new c(`Empty response: ${w2}`, { status: m2, url: w2 });
  const { url: g2 } = l.fromUrl(w2), v = { url: g2, html: f2 };
  return !n3.cache.write || e3.method && "GET" !== e3.method || t !== g2 || this.cache.set(v.url, v), v;
}
var d = class {
  constructor(t) {
    this.swup = void 0, this.pages = /* @__PURE__ */ new Map(), this.swup = t;
  }
  get size() {
    return this.pages.size;
  }
  get all() {
    const t = /* @__PURE__ */ new Map();
    return this.pages.forEach((e3, s3) => {
      t.set(s3, i({}, e3));
    }), t;
  }
  has(t) {
    return this.pages.has(this.resolve(t));
  }
  get(t) {
    const e3 = this.pages.get(this.resolve(t));
    return e3 ? i({}, e3) : e3;
  }
  set(t, e3) {
    e3 = i({}, e3, { url: t = this.resolve(t) }), this.pages.set(t, e3), this.swup.hooks.callSync("cache:set", void 0, { page: e3 });
  }
  update(t, e3) {
    t = this.resolve(t);
    const s3 = i({}, this.get(t), e3, { url: t });
    this.pages.set(t, s3);
  }
  delete(t) {
    this.pages.delete(this.resolve(t));
  }
  clear() {
    this.pages.clear(), this.swup.hooks.callSync("cache:clear", void 0, void 0);
  }
  prune(t) {
    this.pages.forEach((e3, i3) => {
      t(i3, e3) && this.delete(i3);
    });
  }
  resolve(t) {
    const { url: e3 } = l.fromUrl(t);
    return this.swup.resolveUrl(e3);
  }
};
var p = (t, e3 = document) => e3.querySelector(t);
var m = (t, e3 = document) => Array.from(e3.querySelectorAll(t));
var w = () => new Promise((t) => {
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      t();
    });
  });
});
function f(t) {
  return !!t && ("object" == typeof t || "function" == typeof t) && "function" == typeof t.then;
}
function g(t, e3 = []) {
  return new Promise((i3, s3) => {
    const n3 = t(...e3);
    f(n3) ? n3.then(i3, s3) : i3(n3);
  });
}
function y(t, e3) {
  const i3 = null == t ? void 0 : t.closest(`[${e3}]`);
  return null != i3 && i3.hasAttribute(e3) ? (null == i3 ? void 0 : i3.getAttribute(e3)) || true : void 0;
}
var k = class {
  constructor(t) {
    this.swup = void 0, this.swupClasses = ["to-", "is-changing", "is-rendering", "is-popstate", "is-animating", "is-leaving"], this.swup = t;
  }
  get selectors() {
    const { scope: t } = this.swup.visit.animation;
    return "containers" === t ? this.swup.visit.containers : "html" === t ? ["html"] : Array.isArray(t) ? t : [];
  }
  get selector() {
    return this.selectors.join(",");
  }
  get targets() {
    return this.selector.trim() ? m(this.selector) : [];
  }
  add(...t) {
    this.targets.forEach((e3) => e3.classList.add(...t));
  }
  remove(...t) {
    this.targets.forEach((e3) => e3.classList.remove(...t));
  }
  clear() {
    this.targets.forEach((t) => {
      const e3 = t.className.split(" ").filter((t2) => this.isSwupClass(t2));
      t.classList.remove(...e3);
    });
  }
  isSwupClass(t) {
    return this.swupClasses.some((e3) => t.startsWith(e3));
  }
};
var b = class {
  constructor(t, e3) {
    this.id = void 0, this.state = void 0, this.from = void 0, this.to = void 0, this.containers = void 0, this.animation = void 0, this.trigger = void 0, this.cache = void 0, this.history = void 0, this.scroll = void 0, this.meta = void 0;
    const { to: i3, from: s3, hash: n3, el: o3, event: r4 } = e3;
    this.id = Math.random(), this.state = 1, this.from = { url: null != s3 ? s3 : t.location.url, hash: t.location.hash }, this.to = { url: i3, hash: n3 }, this.containers = t.options.containers, this.animation = { animate: true, wait: false, name: void 0, native: t.options.native, scope: t.options.animationScope, selector: t.options.animationSelector }, this.trigger = { el: o3, event: r4 }, this.cache = { read: t.options.cache, write: t.options.cache }, this.history = { action: "push", popstate: false, direction: void 0 }, this.scroll = { reset: true, target: void 0 }, this.meta = {};
  }
  advance(t) {
    this.state < t && (this.state = t);
  }
  abort() {
    this.state = 8;
  }
  get done() {
    return this.state >= 7;
  }
};
function S(t) {
  return new b(this, t);
}
var E = class {
  constructor(t) {
    this.swup = void 0, this.registry = /* @__PURE__ */ new Map(), this.hooks = ["animation:out:start", "animation:out:await", "animation:out:end", "animation:in:start", "animation:in:await", "animation:in:end", "animation:skip", "cache:clear", "cache:set", "content:replace", "content:scroll", "enable", "disable", "fetch:request", "fetch:error", "fetch:timeout", "history:popstate", "link:click", "link:self", "link:anchor", "link:newtab", "page:load", "page:view", "scroll:top", "scroll:anchor", "visit:start", "visit:transition", "visit:abort", "visit:end"], this.swup = t, this.init();
  }
  init() {
    this.hooks.forEach((t) => this.create(t));
  }
  create(t) {
    this.registry.has(t) || this.registry.set(t, /* @__PURE__ */ new Map());
  }
  exists(t) {
    return this.registry.has(t);
  }
  get(t) {
    const e3 = this.registry.get(t);
    if (e3)
      return e3;
    console.error(`Unknown hook '${t}'`);
  }
  clear() {
    this.registry.forEach((t) => t.clear());
  }
  on(t, e3, s3 = {}) {
    const n3 = this.get(t);
    if (!n3)
      return console.warn(`Hook '${t}' not found.`), () => {
      };
    const o3 = i({}, s3, { id: n3.size + 1, hook: t, handler: e3 });
    return n3.set(e3, o3), () => this.off(t, e3);
  }
  before(t, e3, s3 = {}) {
    return this.on(t, e3, i({}, s3, { before: true }));
  }
  replace(t, e3, s3 = {}) {
    return this.on(t, e3, i({}, s3, { replace: true }));
  }
  once(t, e3, s3 = {}) {
    return this.on(t, e3, i({}, s3, { once: true }));
  }
  off(t, e3) {
    const i3 = this.get(t);
    i3 && e3 ? i3.delete(e3) || console.warn(`Handler for hook '${t}' not found.`) : i3 && i3.clear();
  }
  async call(t, e3, i3, s3) {
    const [n3, o3, r4] = this.parseCallArgs(t, e3, i3, s3), { before: a2, handler: l2, after: h } = this.getHandlers(t, r4);
    await this.run(a2, n3, o3);
    const [c2] = await this.run(l2, n3, o3, true);
    return await this.run(h, n3, o3), this.dispatchDomEvent(t, n3, o3), c2;
  }
  callSync(t, e3, i3, s3) {
    const [n3, o3, r4] = this.parseCallArgs(t, e3, i3, s3), { before: a2, handler: l2, after: h } = this.getHandlers(t, r4);
    this.runSync(a2, n3, o3);
    const [c2] = this.runSync(l2, n3, o3, true);
    return this.runSync(h, n3, o3), this.dispatchDomEvent(t, n3, o3), c2;
  }
  parseCallArgs(t, e3, i3, s3) {
    return e3 instanceof b || "object" != typeof e3 && "function" != typeof i3 ? [e3, i3, s3] : [void 0, e3, i3];
  }
  async run(t, e3 = this.swup.visit, i3, s3 = false) {
    const n3 = [];
    for (const { hook: o3, handler: r4, defaultHandler: a2, once: l2 } of t)
      if (null == e3 || !e3.done) {
        l2 && this.off(o3, r4);
        try {
          const t2 = await g(r4, [e3, i3, a2]);
          n3.push(t2);
        } catch (t2) {
          if (s3)
            throw t2;
          console.error(`Error in hook '${o3}':`, t2);
        }
      }
    return n3;
  }
  runSync(t, e3 = this.swup.visit, i3, s3 = false) {
    const n3 = [];
    for (const { hook: o3, handler: r4, defaultHandler: a2, once: l2 } of t)
      if (null == e3 || !e3.done) {
        l2 && this.off(o3, r4);
        try {
          const t2 = r4(e3, i3, a2);
          n3.push(t2), f(t2) && console.warn(`Swup will not await Promises in handler for synchronous hook '${o3}'.`);
        } catch (t2) {
          if (s3)
            throw t2;
          console.error(`Error in hook '${o3}':`, t2);
        }
      }
    return n3;
  }
  getHandlers(t, e3) {
    const i3 = this.get(t);
    if (!i3)
      return { found: false, before: [], handler: [], after: [], replaced: false };
    const s3 = Array.from(i3.values()), n3 = this.sortRegistrations, o3 = s3.filter(({ before: t2, replace: e4 }) => t2 && !e4).sort(n3), r4 = s3.filter(({ replace: t2 }) => t2).filter((t2) => true).sort(n3), a2 = s3.filter(({ before: t2, replace: e4 }) => !t2 && !e4).sort(n3), l2 = r4.length > 0;
    let h = [];
    if (e3 && (h = [{ id: 0, hook: t, handler: e3 }], l2)) {
      const i4 = r4.length - 1, { handler: s4, once: n4 } = r4[i4], o4 = (t2) => {
        const i5 = r4[t2 - 1];
        return i5 ? (e4, s5) => i5.handler(e4, s5, o4(t2 - 1)) : e3;
      };
      h = [{ id: 0, hook: t, once: n4, handler: s4, defaultHandler: o4(i4) }];
    }
    return { found: true, before: o3, handler: h, after: a2, replaced: l2 };
  }
  sortRegistrations(t, e3) {
    var i3, s3;
    return (null != (i3 = t.priority) ? i3 : 0) - (null != (s3 = e3.priority) ? s3 : 0) || t.id - e3.id || 0;
  }
  dispatchDomEvent(t, e3, i3) {
    if (null != e3 && e3.done)
      return;
    const s3 = { hook: t, args: i3, visit: e3 || this.swup.visit };
    document.dispatchEvent(new CustomEvent("swup:any", { detail: s3, bubbles: true })), document.dispatchEvent(new CustomEvent(`swup:${t}`, { detail: s3, bubbles: true }));
  }
  parseName(t) {
    const [e3, ...s3] = t.split(".");
    return [e3, s3.reduce((t2, e4) => i({}, t2, { [e4]: true }), {})];
  }
};
var C = (t) => {
  if (t && "#" === t.charAt(0) && (t = t.substring(1)), !t)
    return null;
  const e3 = decodeURIComponent(t);
  let i3 = document.getElementById(t) || document.getElementById(e3) || p(`a[name='${CSS.escape(t)}']`) || p(`a[name='${CSS.escape(e3)}']`);
  return i3 || "top" !== t || (i3 = document.body), i3;
};
var U = "transition";
var P = "animation";
async function $({ selector: t, elements: e3 }) {
  if (false === t && !e3)
    return;
  let i3 = [];
  if (e3)
    i3 = Array.from(e3);
  else if (t && (i3 = m(t, document.body), !i3.length))
    return void console.warn(`[swup] No elements found matching animationSelector \`${t}\``);
  const s3 = i3.map((t2) => function(t3) {
    const { type: e4, timeout: i4, propCount: s4 } = function(t4) {
      const e5 = window.getComputedStyle(t4), i5 = x(e5, `${U}Delay`), s5 = x(e5, `${U}Duration`), n3 = A(i5, s5), o3 = x(e5, `${P}Delay`), r4 = x(e5, `${P}Duration`), a2 = A(o3, r4), l2 = Math.max(n3, a2), h = l2 > 0 ? n3 > a2 ? U : P : null;
      return { type: h, timeout: l2, propCount: h ? h === U ? s5.length : r4.length : 0 };
    }(t3);
    return !(!e4 || !i4) && new Promise((n3) => {
      const o3 = `${e4}end`, r4 = performance.now();
      let a2 = 0;
      const l2 = () => {
        t3.removeEventListener(o3, h), n3();
      }, h = (e5) => {
        e5.target === t3 && ((performance.now() - r4) / 1e3 < e5.elapsedTime || ++a2 >= s4 && l2());
      };
      setTimeout(() => {
        a2 < s4 && l2();
      }, i4 + 1), t3.addEventListener(o3, h);
    });
  }(t2));
  s3.filter(Boolean).length > 0 ? await Promise.all(s3) : t && console.warn(`[swup] No CSS animation duration defined on elements matching \`${t}\``);
}
function x(t, e3) {
  return (t[e3] || "").split(", ");
}
function A(t, e3) {
  for (; t.length < e3.length; )
    t = t.concat(t);
  return Math.max(...e3.map((e4, i3) => H(e4) + H(t[i3])));
}
function H(t) {
  return 1e3 * parseFloat(t);
}
function V(t, e3 = {}, s3 = {}) {
  if ("string" != typeof t)
    throw new Error("swup.navigate() requires a URL parameter");
  if (this.shouldIgnoreVisit(t, { el: s3.el, event: s3.event }))
    return void window.location.assign(t);
  const { url: n3, hash: o3 } = l.fromUrl(t), r4 = this.createVisit(i({}, s3, { to: n3, hash: o3 }));
  this.performNavigation(r4, e3);
}
async function I(t, e3 = {}) {
  if (this.navigating) {
    if (this.visit.state >= 6)
      return t.state = 2, void (this.onVisitEnd = () => this.performNavigation(t, e3));
    await this.hooks.call("visit:abort", this.visit, void 0), delete this.visit.to.document, this.visit.state = 8;
  }
  this.navigating = true, this.visit = t;
  const { el: i3 } = t.trigger;
  e3.referrer = e3.referrer || this.location.url, false === e3.animate && (t.animation.animate = false), t.animation.animate || this.classes.clear();
  const n3 = e3.history || y(i3, "data-swup-history");
  "string" == typeof n3 && ["push", "replace"].includes(n3) && (t.history.action = n3);
  const a2 = e3.animation || y(i3, "data-swup-animation");
  var h, c2;
  "string" == typeof a2 && (t.animation.name = a2), t.meta = e3.meta || {}, "object" == typeof e3.cache ? (t.cache.read = null != (h = e3.cache.read) ? h : t.cache.read, t.cache.write = null != (c2 = e3.cache.write) ? c2 : t.cache.write) : void 0 !== e3.cache && (t.cache = { read: !!e3.cache, write: !!e3.cache }), delete e3.cache;
  try {
    await this.hooks.call("visit:start", t, void 0), t.state = 3;
    const i4 = this.hooks.call("page:load", t, { options: e3 }, async (t2, e4) => {
      let i5;
      return t2.cache.read && (i5 = this.cache.get(t2.to.url)), e4.page = i5 || await this.fetchPage(t2.to.url, e4.options), e4.cache = !!i5, e4.page;
    });
    i4.then(({ html: e4 }) => {
      t.advance(5), t.to.html = e4, t.to.document = new DOMParser().parseFromString(e4, "text/html");
    });
    const n4 = t.to.url + t.to.hash;
    if (t.history.popstate || ("replace" === t.history.action || t.to.url === this.location.url ? r(n4) : (this.currentHistoryIndex++, o(n4, { index: this.currentHistoryIndex }))), this.location = l.fromUrl(n4), t.history.popstate && this.classes.add("is-popstate"), t.animation.name && this.classes.add(`to-${s(t.animation.name)}`), t.animation.wait && await i4, t.done)
      return;
    if (await this.hooks.call("visit:transition", t, void 0, async () => {
      if (!t.animation.animate)
        return await this.hooks.call("animation:skip", void 0), void await this.renderPage(t, await i4);
      t.advance(4), await this.animatePageOut(t), t.animation.native && document.startViewTransition ? await document.startViewTransition(async () => await this.renderPage(t, await i4)).finished : await this.renderPage(t, await i4), await this.animatePageIn(t);
    }), t.done)
      return;
    await this.hooks.call("visit:end", t, void 0, () => this.classes.clear()), t.state = 7, this.navigating = false, this.onVisitEnd && (this.onVisitEnd(), this.onVisitEnd = void 0);
  } catch (e4) {
    if (!e4 || null != e4 && e4.aborted)
      return void (t.state = 8);
    t.state = 9, console.error(e4), this.options.skipPopStateHandling = () => (window.location.assign(t.to.url + t.to.hash), true), window.history.back();
  } finally {
    delete t.to.document;
  }
}
var L = async function(t) {
  await this.hooks.call("animation:out:start", t, void 0, () => {
    this.classes.add("is-changing", "is-animating", "is-leaving");
  }), await this.hooks.call("animation:out:await", t, { skip: false }, (t2, { skip: e3 }) => {
    if (!e3)
      return this.awaitAnimations({ selector: t2.animation.selector });
  }), await this.hooks.call("animation:out:end", t, void 0);
};
var q = function(t) {
  var e3;
  const i3 = t.to.document;
  if (!i3)
    return false;
  const s3 = (null == (e3 = i3.querySelector("title")) ? void 0 : e3.innerText) || "";
  document.title = s3;
  const n3 = m('[data-swup-persist]:not([data-swup-persist=""])'), o3 = t.containers.map((t2) => {
    const e4 = document.querySelector(t2), s4 = i3.querySelector(t2);
    return e4 && s4 ? (e4.replaceWith(s4.cloneNode(true)), true) : (e4 || console.warn(`[swup] Container missing in current document: ${t2}`), s4 || console.warn(`[swup] Container missing in incoming document: ${t2}`), false);
  }).filter(Boolean);
  return n3.forEach((t2) => {
    const e4 = t2.getAttribute("data-swup-persist"), i4 = p(`[data-swup-persist="${e4}"]`);
    i4 && i4 !== t2 && i4.replaceWith(t2);
  }), o3.length === t.containers.length;
};
var R = function(t) {
  const e3 = { behavior: "auto" }, { target: s3, reset: n3 } = t.scroll, o3 = null != s3 ? s3 : t.to.hash;
  let r4 = false;
  return o3 && (r4 = this.hooks.callSync("scroll:anchor", t, { hash: o3, options: e3 }, (t2, { hash: e4, options: i3 }) => {
    const s4 = this.getAnchorElement(e4);
    return s4 && s4.scrollIntoView(i3), !!s4;
  })), n3 && !r4 && (r4 = this.hooks.callSync("scroll:top", t, { options: e3 }, (t2, { options: e4 }) => (window.scrollTo(i({ top: 0, left: 0 }, e4)), true))), r4;
};
var T = async function(t) {
  if (t.done)
    return;
  const e3 = this.hooks.call("animation:in:await", t, { skip: false }, (t2, { skip: e4 }) => {
    if (!e4)
      return this.awaitAnimations({ selector: t2.animation.selector });
  });
  await w(), await this.hooks.call("animation:in:start", t, void 0, () => {
    this.classes.remove("is-animating");
  }), await e3, await this.hooks.call("animation:in:end", t, void 0);
};
var N = async function(t, e3) {
  if (t.done)
    return;
  t.advance(6);
  const { url: i3 } = e3;
  this.isSameResolvedUrl(n(), i3) || (r(i3), this.location = l.fromUrl(i3), t.to.url = this.location.url, t.to.hash = this.location.hash), await this.hooks.call("content:replace", t, { page: e3 }, (t2, {}) => {
    if (this.classes.remove("is-leaving"), t2.animation.animate && this.classes.add("is-rendering"), !this.replaceContent(t2))
      throw new Error("[swup] Container mismatch, aborting");
    t2.animation.animate && (this.classes.add("is-changing", "is-animating", "is-rendering"), t2.animation.name && this.classes.add(`to-${s(t2.animation.name)}`));
  }), await this.hooks.call("content:scroll", t, void 0, () => this.scrollToContent(t)), await this.hooks.call("page:view", t, { url: this.location.url, title: document.title });
};
var O = function(t) {
  var e3;
  if (e3 = t, Boolean(null == e3 ? void 0 : e3.isSwupPlugin)) {
    if (t.swup = this, !t._checkRequirements || t._checkRequirements())
      return t._beforeMount && t._beforeMount(), t.mount(), this.plugins.push(t), this.plugins;
  } else
    console.error("Not a swup plugin instance", t);
};
function D(t) {
  const e3 = this.findPlugin(t);
  if (e3)
    return e3.unmount(), e3._afterUnmount && e3._afterUnmount(), this.plugins = this.plugins.filter((t2) => t2 !== e3), this.plugins;
  console.error("No such plugin", e3);
}
function M(t) {
  return this.plugins.find((e3) => e3 === t || e3.name === t || e3.name === `Swup${String(t)}`);
}
function W(t) {
  if ("function" != typeof this.options.resolveUrl)
    return console.warn("[swup] options.resolveUrl expects a callback function."), t;
  const e3 = this.options.resolveUrl(t);
  return e3 && "string" == typeof e3 ? e3.startsWith("//") || e3.startsWith("http") ? (console.warn("[swup] options.resolveUrl needs to return a relative url"), t) : e3 : (console.warn("[swup] options.resolveUrl needs to return a url"), t);
}
function B(t, e3) {
  return this.resolveUrl(t) === this.resolveUrl(e3);
}
var j = { animateHistoryBrowsing: false, animationSelector: '[class*="transition-"]', animationScope: "html", cache: true, containers: ["#swup"], hooks: {}, ignoreVisit: (t, { el: e3 } = {}) => !(null == e3 || !e3.closest("[data-no-swup]")), linkSelector: "a[href]", linkToSelf: "scroll", native: false, plugins: [], resolveUrl: (t) => t, requestHeaders: { "X-Requested-With": "swup", Accept: "text/html, application/xhtml+xml" }, skipPopStateHandling: (t) => {
  var e3;
  return "swup" !== (null == (e3 = t.state) ? void 0 : e3.source);
}, timeout: 0 };
var _ = class {
  get currentPageUrl() {
    return this.location.url;
  }
  constructor(t = {}) {
    var e3, s3;
    this.version = "4.8.1", this.options = void 0, this.defaults = j, this.plugins = [], this.visit = void 0, this.cache = void 0, this.hooks = void 0, this.classes = void 0, this.location = l.fromUrl(window.location.href), this.currentHistoryIndex = void 0, this.clickDelegate = void 0, this.navigating = false, this.onVisitEnd = void 0, this.use = O, this.unuse = D, this.findPlugin = M, this.log = () => {
    }, this.navigate = V, this.performNavigation = I, this.createVisit = S, this.delegateEvent = a, this.fetchPage = u, this.awaitAnimations = $, this.renderPage = N, this.replaceContent = q, this.animatePageIn = T, this.animatePageOut = L, this.scrollToContent = R, this.getAnchorElement = C, this.getCurrentUrl = n, this.resolveUrl = W, this.isSameResolvedUrl = B, this.options = i({}, this.defaults, t), this.handleLinkClick = this.handleLinkClick.bind(this), this.handlePopState = this.handlePopState.bind(this), this.cache = new d(this), this.classes = new k(this), this.hooks = new E(this), this.visit = this.createVisit({ to: "" }), this.currentHistoryIndex = null != (e3 = null == (s3 = window.history.state) ? void 0 : s3.index) ? e3 : 1, this.enable();
  }
  async enable() {
    var t;
    const { linkSelector: e3 } = this.options;
    this.clickDelegate = this.delegateEvent(e3, "click", this.handleLinkClick), window.addEventListener("popstate", this.handlePopState), this.options.animateHistoryBrowsing && (window.history.scrollRestoration = "manual"), this.options.native = this.options.native && !!document.startViewTransition, this.options.plugins.forEach((t2) => this.use(t2));
    for (const [t2, e4] of Object.entries(this.options.hooks)) {
      const [i3, s3] = this.hooks.parseName(t2);
      this.hooks.on(i3, e4, s3);
    }
    "swup" !== (null == (t = window.history.state) ? void 0 : t.source) && r(null, { index: this.currentHistoryIndex }), await w(), await this.hooks.call("enable", void 0, void 0, () => {
      const t2 = document.documentElement;
      t2.classList.add("swup-enabled"), t2.classList.toggle("swup-native", this.options.native);
    });
  }
  async destroy() {
    this.clickDelegate.destroy(), window.removeEventListener("popstate", this.handlePopState), this.cache.clear(), this.options.plugins.forEach((t) => this.unuse(t)), await this.hooks.call("disable", void 0, void 0, () => {
      const t = document.documentElement;
      t.classList.remove("swup-enabled"), t.classList.remove("swup-native");
    }), this.hooks.clear();
  }
  shouldIgnoreVisit(t, { el: e3, event: i3 } = {}) {
    const { origin: s3, url: n3, hash: o3 } = l.fromUrl(t);
    return s3 !== window.location.origin || !(!e3 || !this.triggerWillOpenNewWindow(e3)) || !!this.options.ignoreVisit(n3 + o3, { el: e3, event: i3 });
  }
  handleLinkClick(t) {
    const e3 = t.delegateTarget, { href: i3, url: s3, hash: n3 } = l.fromElement(e3);
    if (this.shouldIgnoreVisit(i3, { el: e3, event: t }))
      return;
    if (this.navigating && s3 === this.visit.to.url)
      return void t.preventDefault();
    const o3 = this.createVisit({ to: s3, hash: n3, el: e3, event: t });
    t.metaKey || t.ctrlKey || t.shiftKey || t.altKey ? this.hooks.callSync("link:newtab", o3, { href: i3 }) : 0 === t.button && this.hooks.callSync("link:click", o3, { el: e3, event: t }, () => {
      var e4;
      const i4 = null != (e4 = o3.from.url) ? e4 : "";
      t.preventDefault(), s3 && s3 !== i4 ? this.isSameResolvedUrl(s3, i4) || this.performNavigation(o3) : n3 ? this.hooks.callSync("link:anchor", o3, { hash: n3 }, () => {
        r(s3 + n3), this.scrollToContent(o3);
      }) : this.hooks.callSync("link:self", o3, void 0, () => {
        "navigate" === this.options.linkToSelf ? this.performNavigation(o3) : (r(s3), this.scrollToContent(o3));
      });
    });
  }
  handlePopState(t) {
    var e3, i3, s3, o3;
    const r4 = null != (e3 = null == (i3 = t.state) ? void 0 : i3.url) ? e3 : window.location.href;
    if (this.options.skipPopStateHandling(t))
      return;
    if (this.isSameResolvedUrl(n(), this.location.url))
      return;
    const { url: a2, hash: h } = l.fromUrl(r4), c2 = this.createVisit({ to: a2, hash: h, event: t });
    c2.history.popstate = true;
    const u2 = null != (s3 = null == (o3 = t.state) ? void 0 : o3.index) ? s3 : 0;
    u2 && u2 !== this.currentHistoryIndex && (c2.history.direction = u2 - this.currentHistoryIndex > 0 ? "forwards" : "backwards", this.currentHistoryIndex = u2), c2.animation.animate = false, c2.scroll.reset = false, c2.scroll.target = false, this.options.animateHistoryBrowsing && (c2.animation.animate = true, c2.scroll.reset = true), this.hooks.callSync("history:popstate", c2, { event: t }, () => {
      this.performNavigation(c2);
    });
  }
  triggerWillOpenNewWindow(t) {
    return !!t.matches('[download], [target="_blank"]');
  }
};

// node_modules/@swup/plugin/dist/index.modern.js
function r2() {
  return r2 = Object.assign ? Object.assign.bind() : function(r4) {
    for (var n3 = 1; n3 < arguments.length; n3++) {
      var e3 = arguments[n3];
      for (var t in e3)
        Object.prototype.hasOwnProperty.call(e3, t) && (r4[t] = e3[t]);
    }
    return r4;
  }, r2.apply(this, arguments);
}
var n2 = (r4) => String(r4).split(".").map((r5) => String(parseInt(r5 || "0", 10))).concat(["0", "0"]).slice(0, 3).join(".");
var e = class {
  constructor() {
    this.isSwupPlugin = true, this.swup = void 0, this.version = void 0, this.requires = {}, this.handlersToUnregister = [];
  }
  mount() {
  }
  unmount() {
    this.handlersToUnregister.forEach((r4) => r4()), this.handlersToUnregister = [];
  }
  _beforeMount() {
    if (!this.name)
      throw new Error("You must define a name of plugin when creating a class.");
  }
  _afterUnmount() {
  }
  _checkRequirements() {
    return "object" != typeof this.requires || Object.entries(this.requires).forEach(([r4, e3]) => {
      if (!function(r5, e4, t) {
        const s3 = function(r6, n3) {
          var e5;
          if ("swup" === r6)
            return null != (e5 = n3.version) ? e5 : "";
          {
            var t2;
            const e6 = n3.findPlugin(r6);
            return null != (t2 = null == e6 ? void 0 : e6.version) ? t2 : "";
          }
        }(r5, t);
        return !!s3 && ((r6, e5) => e5.every((e6) => {
          const [, t2, s4] = e6.match(/^([\D]+)?(.*)$/) || [];
          var o3, i3;
          return ((r7, n3) => {
            const e7 = { "": (r8) => 0 === r8, ">": (r8) => r8 > 0, ">=": (r8) => r8 >= 0, "<": (r8) => r8 < 0, "<=": (r8) => r8 <= 0 };
            return (e7[n3] || e7[""])(r7);
          })((i3 = s4, o3 = n2(o3 = r6), i3 = n2(i3), o3.localeCompare(i3, void 0, { numeric: true })), t2 || ">=");
        }))(s3, e4);
      }(r4, e3 = Array.isArray(e3) ? e3 : [e3], this.swup)) {
        const n3 = `${r4} ${e3.join(", ")}`;
        throw new Error(`Plugin version mismatch: ${this.name} requires ${n3}`);
      }
    }), true;
  }
  on(r4, n3, e3 = {}) {
    var t;
    n3 = !(t = n3).name.startsWith("bound ") || t.hasOwnProperty("prototype") ? n3.bind(this) : n3;
    const s3 = this.swup.hooks.on(r4, n3, e3);
    return this.handlersToUnregister.push(s3), s3;
  }
  once(n3, e3, t = {}) {
    return this.on(n3, e3, r2({}, t, { once: true }));
  }
  before(n3, e3, t = {}) {
    return this.on(n3, e3, r2({}, t, { before: true }));
  }
  replace(n3, e3, t = {}) {
    return this.on(n3, e3, r2({}, t, { replace: true }));
  }
  off(r4, n3) {
    return this.swup.hooks.off(r4, n3);
  }
};

// node_modules/focus-options-polyfill/index.js
(function() {
  if (typeof window === "undefined" || typeof document === "undefined" || typeof HTMLElement === "undefined") {
    return;
  }
  var supportsPreventScrollOption = false;
  try {
    var focusElem = document.createElement("div");
    focusElem.addEventListener(
      "focus",
      function(event) {
        event.preventDefault();
        event.stopPropagation();
      },
      true
    );
    focusElem.focus(
      Object.defineProperty({}, "preventScroll", {
        get: function() {
          if (navigator && typeof navigator.userAgent !== "undefined" && navigator.userAgent && navigator.userAgent.match(/Edge\/1[7-8]/)) {
            return supportsPreventScrollOption = false;
          }
          supportsPreventScrollOption = true;
        }
      })
    );
  } catch (e3) {
  }
  if (HTMLElement.prototype.nativeFocus === void 0 && !supportsPreventScrollOption) {
    HTMLElement.prototype.nativeFocus = HTMLElement.prototype.focus;
    var calcScrollableElements = function(element) {
      var parent = element.parentNode;
      var scrollableElements = [];
      var rootScrollingElement = document.scrollingElement || document.documentElement;
      while (parent && parent !== rootScrollingElement) {
        if (parent.offsetHeight < parent.scrollHeight || parent.offsetWidth < parent.scrollWidth) {
          scrollableElements.push([
            parent,
            parent.scrollTop,
            parent.scrollLeft
          ]);
        }
        parent = parent.parentNode;
      }
      parent = rootScrollingElement;
      scrollableElements.push([parent, parent.scrollTop, parent.scrollLeft]);
      return scrollableElements;
    };
    var restoreScrollPosition = function(scrollableElements) {
      for (var i3 = 0; i3 < scrollableElements.length; i3++) {
        scrollableElements[i3][0].scrollTop = scrollableElements[i3][1];
        scrollableElements[i3][0].scrollLeft = scrollableElements[i3][2];
      }
      scrollableElements = [];
    };
    var patchedFocus = function(args) {
      if (args && args.preventScroll) {
        var evScrollableElements = calcScrollableElements(this);
        if (typeof setTimeout === "function") {
          var thisElem = this;
          setTimeout(function() {
            thisElem.nativeFocus();
            restoreScrollPosition(evScrollableElements);
          }, 0);
        } else {
          this.nativeFocus();
          restoreScrollPosition(evScrollableElements);
        }
      } else {
        this.nativeFocus();
      }
    };
    HTMLElement.prototype.focus = patchedFocus;
  }
})();

// node_modules/@swup/a11y-plugin/dist/index.modern.js
function e2() {
  return e2 = Object.assign ? Object.assign.bind() : function(t) {
    for (var n3 = 1; n3 < arguments.length; n3++) {
      var e3 = arguments[n3];
      for (var o3 in e3)
        Object.prototype.hasOwnProperty.call(e3, o3) && (t[o3] = e3[o3]);
    }
    return t;
  }, e2.apply(this, arguments);
}
function o2(t, n3) {
  return Object.keys(n3).reduce((t2, e3) => t2.replace(`{${e3}}`, n3[e3] || ""), t || "");
}
var i2 = class {
  constructor() {
    var t;
    this.id = "swup-announcer", this.style = "position:absolute;top:0;left:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;word-wrap:normal;width:1px;height:1px;", this.region = void 0, this.region = null != (t = this.getRegion()) ? t : this.createRegion();
  }
  getRegion() {
    return document.getElementById(this.id);
  }
  createRegion() {
    const t = function(t2) {
      const n3 = document.createElement("template");
      return n3.innerHTML = t2, n3.content.children[0];
    }(`<p aria-live="assertive" aria-atomic="true" id="${this.id}" style="${this.style}"></p>`);
    return document.body.appendChild(t), t;
  }
  announce(t, n3 = 0) {
    return new Promise((e3) => {
      setTimeout(() => {
        this.region.textContent === t && (t = `${t}.`), this.region.textContent = "", this.region.textContent = t, e3();
      }, n3);
    });
  }
};
function s2(t) {
  let n3;
  if (n3 = "string" == typeof t ? document.querySelector(t) : t, !(n3 instanceof HTMLElement))
    return;
  const e3 = n3.getAttribute("tabindex");
  n3.setAttribute("tabindex", "-1"), n3.focus({ preventScroll: true }), null !== e3 && n3.setAttribute("tabindex", e3);
}
var r3 = class extends e {
  constructor(t = {}) {
    super(), this.name = "SwupA11yPlugin", this.requires = { swup: ">=4" }, this.defaults = { headingSelector: "h1", respectReducedMotion: true, autofocus: false, announcements: { visit: "Navigated to: {title}", url: "New page at {url}" } }, this.options = void 0, this.announcer = void 0, this.announcementDelay = 100, this.rootSelector = "body", this.handleAnchorScroll = (t2, { hash: n3 }) => {
      const e3 = this.swup.getAnchorElement(n3);
      e3 instanceof HTMLElement && s2(e3);
    }, this.options = e2({}, this.defaults, t), this.announcer = new i2();
  }
  mount() {
    this.swup.hooks.create("content:announce"), this.swup.hooks.create("content:focus"), this.before("visit:start", this.prepareVisit), this.on("visit:start", this.markAsBusy), this.on("visit:end", this.unmarkAsBusy), this.on("visit:end", this.focusContent), this.on("visit:end", this.announceContent), this.on("scroll:anchor", this.handleAnchorScroll), this.before("visit:start", this.disableAnimations), this.before("link:self", this.disableAnimations), this.before("link:anchor", this.disableAnimations), this.swup.announce = this.announce.bind(this);
  }
  unmount() {
    this.swup.announce = void 0;
  }
  async announce(t) {
    await this.announcer.announce(t);
  }
  markAsBusy() {
    document.documentElement.setAttribute("aria-busy", "true");
  }
  unmarkAsBusy() {
    document.documentElement.removeAttribute("aria-busy");
  }
  prepareVisit(t) {
    t.a11y = { announce: void 0, focus: this.rootSelector };
  }
  announceContent(t) {
    this.swup.hooks.callSync("content:announce", t, void 0, (t2) => {
      void 0 === t2.a11y.announce && (t2.a11y.announce = this.getPageAnnouncement()), t2.a11y.announce && this.announcer.announce(t2.a11y.announce, this.announcementDelay);
    });
  }
  focusContent(t) {
    this.swup.hooks.callSync("content:focus", t, void 0, (t2) => {
      t2.a11y.focus && (this.options.autofocus && true === function() {
        const t3 = function() {
          const t4 = document.querySelector("body [autofocus]");
          if (t4 && !t4.closest('[inert], [aria-disabled], [aria-hidden="true"]'))
            return t4;
        }();
        return !!t3 && (t3 !== document.activeElement && t3.focus(), true);
      }() || s2(t2.a11y.focus));
    });
  }
  getPageAnnouncement() {
    const { headingSelector: t, announcements: e3 } = this.options;
    return function({ headingSelector: t2 = "h1", announcements: e4 = {} }) {
      var i3, s3;
      const r4 = document.documentElement.lang || "*", { href: a2, url: u2, pathname: c2 } = l.fromUrl(window.location.href), l2 = null != (i3 = null != (s3 = e4[r4]) ? s3 : e4["*"]) ? i3 : e4;
      if ("object" != typeof l2)
        return;
      const h = document.querySelector(t2);
      h || console.warn(`SwupA11yPlugin: No main heading (${t2}) found on new page`);
      const d2 = (null == h ? void 0 : h.getAttribute("aria-label")) || (null == h ? void 0 : h.textContent) || document.title || o2(l2.url, { href: a2, url: u2, path: c2 });
      return o2(l2.visit, { title: d2, href: a2, url: u2, path: c2 });
    }({ headingSelector: t, announcements: e3 });
  }
  disableAnimations(t) {
    this.options.respectReducedMotion && window.matchMedia("(prefers-reduced-motion: reduce)").matches && (t.animation.animate = false, t.scroll.animate = false);
  }
};

// <stdin>
new _({
  plugins: [new r3()]
});
var toggleMenu = (event) => {
  event.stopImmediatePropagation();
  event.currentTarget.classList.toggle("is-active");
  let menuId = event.currentTarget.getAttribute("aria-controls");
  let hamMenu2 = document.getElementById(menuId);
  if (hamMenu2) {
    let currentState = hamMenu2.getAttribute("aria-expanded");
    let isExpanded = currentState !== "true";
    hamMenu2.setAttribute("aria-expanded", isExpanded.toString());
    event.currentTarget.setAttribute("aria-expanded", isExpanded.toString());
    document.body.style.overflow = isExpanded ? "hidden" : null;
  }
};
var hamMenu = document.getElementById("ham-menu");
hamMenu.addEventListener("click", toggleMenu);
var resetNav = () => {
  let menuEntries2 = document.getElementsByClassName("menu-item active");
  for (let entry of menuEntries2) {
    entry.classList.remove("active");
    entry.ariaCurrent = null;
  }
};
var changeNav = (event) => {
  resetNav();
  const menuItem = event.target.closest(".menu-item");
  menuItem.classList.add("active");
  menuItem.ariaCurrent = "page";
  let ham = document.getElementById("ham");
  if (ham.getAttribute("aria-expanded") === "true") {
    ham.setAttribute("aria-expanded", "false");
    hamMenu.ariaExpanded = "false";
    hamMenu.classList.remove("is-active");
    console.debug(hamMenu);
  }
};
var menuEntries = document.querySelectorAll(".header-nav .menu-item");
menuEntries.forEach((entry) => {
  entry.addEventListener("click", changeNav);
});
