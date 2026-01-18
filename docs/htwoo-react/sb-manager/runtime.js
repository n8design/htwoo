<<<<<<< HEAD
var uf = Object.create;
var Uo = Object.defineProperty;
var cf = Object.getOwnPropertyDescriptor;
var pf = Object.getOwnPropertyNames;
var df = Object.getPrototypeOf, ff = Object.prototype.hasOwnProperty;
var a = (e, t) => Uo(e, "name", { value: t, configurable: !0 }), mo = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
=======
var Nd = Object.create;
var tn = Object.defineProperty;
var Rd = Object.getOwnPropertyDescriptor;
var Fd = Object.getOwnPropertyNames;
var Hd = Object.getPrototypeOf, Bd = Object.prototype.hasOwnProperty;
var a = (e, t) => tn(e, "name", { value: t, configurable: !0 }), ro = /* @__PURE__ */ ((e) => typeof require < "u" ? require : typeof Proxy <
>>>>>>> main
"u" ? new Proxy(e, {
  get: (t, o) => (typeof require < "u" ? require : t)[o]
}) : e)(function(e) {
  if (typeof require < "u") return require.apply(this, arguments);
  throw Error('Dynamic require of "' + e + '" is not supported');
});
<<<<<<< HEAD
var we = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports), mf = (e, t) => {
  for (var o in t)
    Uo(e, o, { get: t[o], enumerable: !0 });
}, hf = (e, t, o, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let r of pf(t))
      !ff.call(e, r) && r !== o && Uo(e, r, { get: () => t[r], enumerable: !(i = cf(t, r)) || i.enumerable });
  return e;
};
var Ve = (e, t, o) => (o = e != null ? uf(df(e)) : {}, hf(
=======
var Ee = (e, t) => () => (t || e((t = { exports: {} }).exports, t), t.exports);
var zd = (e, t, o, i) => {
  if (t && typeof t == "object" || typeof t == "function")
    for (let n of Fd(t))
      !Bd.call(e, n) && n !== o && tn(e, n, { get: () => t[n], enumerable: !(i = Rd(t, n)) || i.enumerable });
  return e;
};
var ze = (e, t, o) => (o = e != null ? Nd(Hd(e)) : {}, zd(
>>>>>>> main
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
<<<<<<< HEAD
  t || !e || !e.__esModule ? Uo(o, "default", { value: e, enumerable: !0 }) : o,
=======
  t || !e || !e.__esModule ? tn(o, "default", { value: e, enumerable: !0 }) : o,
>>>>>>> main
  e
));

// ../node_modules/prop-types/lib/ReactPropTypesSecret.js
<<<<<<< HEAD
var Ua = we((x_, $a) => {
  "use strict";
  var ay = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  $a.exports = ay;
});

// ../node_modules/prop-types/factoryWithThrowingShims.js
var Qa = we((I_, Ya) => {
  "use strict";
  var ly = Ua();
  function Ga() {
  }
  a(Ga, "emptyFunction");
  function qa() {
  }
  a(qa, "emptyFunctionWithReset");
  qa.resetWarningCache = Ga;
  Ya.exports = function() {
    function e(i, r, n, l, u, c) {
      if (c !== ly) {
        var d = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. \
Read more at http://fb.me/use-check-prop-types"
        );
        throw d.name = "Invariant Violation", d;
=======
var ya = Ee((yw, ga) => {
  "use strict";
  var jd = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  ga.exports = jd;
});

// ../node_modules/prop-types/factoryWithThrowingShims.js
var Sa = Ee((bw, xa) => {
  "use strict";
  var Vd = ya();
  function ba() {
  }
  a(ba, "emptyFunction");
  function va() {
  }
  a(va, "emptyFunctionWithReset");
  va.resetWarningCache = ba;
  xa.exports = function() {
    function e(i, n, r, l, u, c) {
      if (c !== Vd) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. \
Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
>>>>>>> main
      }
    }
    a(e, "shim"), e.isRequired = e;
    function t() {
      return e;
    }
    a(t, "getShim");
    var o = {
      array: e,
      bigint: e,
      bool: e,
      func: e,
      number: e,
      object: e,
      string: e,
      symbol: e,
      any: e,
      arrayOf: t,
      element: e,
      elementType: e,
      instanceOf: t,
      node: e,
      objectOf: t,
      oneOf: t,
      oneOfType: t,
      shape: t,
      exact: t,
<<<<<<< HEAD
      checkPropTypes: qa,
      resetWarningCache: Ga
=======
      checkPropTypes: va,
      resetWarningCache: ba
>>>>>>> main
    };
    return o.PropTypes = o, o;
  };
});

// ../node_modules/prop-types/index.js
<<<<<<< HEAD
var ri = we((T_, Xa) => {
  Xa.exports = Qa()();
  var w_, E_;
});

// ../node_modules/react-fast-compare/index.js
var Ja = we((C_, Za) => {
  var uy = typeof Element < "u", cy = typeof Map == "function", py = typeof Set == "function", dy = typeof ArrayBuffer == "function" && !!ArrayBuffer.
  isView;
  function dr(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return !1;
      var o, i, r;
      if (Array.isArray(e)) {
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (!dr(e[i], t[i])) return !1;
        return !0;
      }
      var n;
      if (cy && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (n = e.entries(); !(i = n.next()).done; )
          if (!t.has(i.value[0])) return !1;
        for (n = e.entries(); !(i = n.next()).done; )
          if (!dr(i.value[1], t.get(i.value[0]))) return !1;
        return !0;
      }
      if (py && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (n = e.entries(); !(i = n.next()).done; )
          if (!t.has(i.value[0])) return !1;
        return !0;
      }
      if (dy && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
=======
var pn = Ee((Iw, Ia) => {
  Ia.exports = Sa()();
  var xw, Sw;
});

// ../node_modules/react-fast-compare/index.js
var _a = Ee((Ew, Ea) => {
  var Kd = typeof Element < "u", $d = typeof Map == "function", Ud = typeof Set == "function", Gd = typeof ArrayBuffer == "function" && !!ArrayBuffer.
  isView;
  function jo(e, t) {
    if (e === t) return !0;
    if (e && t && typeof e == "object" && typeof t == "object") {
      if (e.constructor !== t.constructor) return !1;
      var o, i, n;
      if (Array.isArray(e)) {
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (!jo(e[i], t[i])) return !1;
        return !0;
      }
      var r;
      if ($d && e instanceof Map && t instanceof Map) {
        if (e.size !== t.size) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!t.has(i.value[0])) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!jo(i.value[1], t.get(i.value[0]))) return !1;
        return !0;
      }
      if (Ud && e instanceof Set && t instanceof Set) {
        if (e.size !== t.size) return !1;
        for (r = e.entries(); !(i = r.next()).done; )
          if (!t.has(i.value[0])) return !1;
        return !0;
      }
      if (Gd && ArrayBuffer.isView(e) && ArrayBuffer.isView(t)) {
>>>>>>> main
        if (o = e.length, o != t.length) return !1;
        for (i = o; i-- !== 0; )
          if (e[i] !== t[i]) return !1;
        return !0;
      }
      if (e.constructor === RegExp) return e.source === t.source && e.flags === t.flags;
      if (e.valueOf !== Object.prototype.valueOf && typeof e.valueOf == "function" && typeof t.valueOf == "function") return e.valueOf() ===
      t.valueOf();
      if (e.toString !== Object.prototype.toString && typeof e.toString == "function" && typeof t.toString == "function") return e.toString() ===
      t.toString();
<<<<<<< HEAD
      if (r = Object.keys(e), o = r.length, o !== Object.keys(t).length) return !1;
      for (i = o; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, r[i])) return !1;
      if (uy && e instanceof Element) return !1;
      for (i = o; i-- !== 0; )
        if (!((r[i] === "_owner" || r[i] === "__v" || r[i] === "__o") && e.$$typeof) && !dr(e[r[i]], t[r[i]]))
=======
      if (n = Object.keys(e), o = n.length, o !== Object.keys(t).length) return !1;
      for (i = o; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(t, n[i])) return !1;
      if (Kd && e instanceof Element) return !1;
      for (i = o; i-- !== 0; )
        if (!((n[i] === "_owner" || n[i] === "__v" || n[i] === "__o") && e.$$typeof) && !jo(e[n[i]], t[n[i]]))
>>>>>>> main
          return !1;
      return !0;
    }
    return e !== e && t !== t;
  }
<<<<<<< HEAD
  a(dr, "equal");
  Za.exports = /* @__PURE__ */ a(function(t, o) {
    try {
      return dr(t, o);
=======
  a(jo, "equal");
  Ea.exports = /* @__PURE__ */ a(function(t, o) {
    try {
      return jo(t, o);
>>>>>>> main
    } catch (i) {
      if ((i.message || "").match(/stack|recursion/i))
        return console.warn("react-fast-compare cannot handle circular refs"), !1;
      throw i;
    }
  }, "isEqual");
});

// ../node_modules/invariant/browser.js
<<<<<<< HEAD
var tl = we((k_, el) => {
  "use strict";
  var fy = /* @__PURE__ */ a(function(e, t, o, i, r, n, l, u) {
=======
var Ta = Ee((ww, wa) => {
  "use strict";
  var Yd = /* @__PURE__ */ a(function(e, t, o, i, n, r, l, u) {
>>>>>>> main
    if (!e) {
      var c;
      if (t === void 0)
        c = new Error(
          "Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings."
        );
      else {
<<<<<<< HEAD
        var d = [o, i, r, n, l, u], p = 0;
        c = new Error(
          t.replace(/%s/g, function() {
            return d[p++];
=======
        var p = [o, i, n, r, l, u], d = 0;
        c = new Error(
          t.replace(/%s/g, function() {
            return p[d++];
>>>>>>> main
          })
        ), c.name = "Invariant Violation";
      }
      throw c.framesToPop = 1, c;
    }
  }, "invariant");
<<<<<<< HEAD
  el.exports = fy;
});

// ../node_modules/shallowequal/index.js
var rl = we((P_, ol) => {
  ol.exports = /* @__PURE__ */ a(function(t, o, i, r) {
    var n = i ? i.call(r, t, o) : void 0;
    if (n !== void 0)
      return !!n;
=======
  wa.exports = Yd;
});

// ../node_modules/shallowequal/index.js
var ka = Ee((Cw, Ca) => {
  Ca.exports = /* @__PURE__ */ a(function(t, o, i, n) {
    var r = i ? i.call(n, t, o) : void 0;
    if (r !== void 0)
      return !!r;
>>>>>>> main
    if (t === o)
      return !0;
    if (typeof t != "object" || !t || typeof o != "object" || !o)
      return !1;
    var l = Object.keys(t), u = Object.keys(o);
    if (l.length !== u.length)
      return !1;
<<<<<<< HEAD
    for (var c = Object.prototype.hasOwnProperty.bind(o), d = 0; d < l.length; d++) {
      var p = l[d];
      if (!c(p))
        return !1;
      var m = t[p], h = o[p];
      if (n = i ? i.call(r, m, h, p) : void 0, n === !1 || n === void 0 && m !== h)
=======
    for (var c = Object.prototype.hasOwnProperty.bind(o), p = 0; p < l.length; p++) {
      var d = l[p];
      if (!c(d))
        return !1;
      var g = t[d], h = o[d];
      if (r = i ? i.call(n, g, h, d) : void 0, r === !1 || r === void 0 && g !== h)
>>>>>>> main
        return !1;
    }
    return !0;
  }, "shallowEqual");
});

// ../node_modules/memoizerific/memoizerific.js
<<<<<<< HEAD
var Oi = we((Yl, ki) => {
  (function(e) {
    if (typeof Yl == "object" && typeof ki < "u")
      ki.exports = e();
=======
var zn = Ee((El, Bn) => {
  (function(e) {
    if (typeof El == "object" && typeof Bn < "u")
      Bn.exports = e();
>>>>>>> main
    else if (typeof define == "function" && define.amd)
      define([], e);
    else {
      var t;
      typeof window < "u" ? t = window : typeof global < "u" ? t = global : typeof self < "u" ? t = self : t = this, t.memoizerific = e();
    }
  })(function() {
    var e, t, o;
<<<<<<< HEAD
    return (/* @__PURE__ */ a(function i(r, n, l) {
      function u(p, m) {
        if (!n[p]) {
          if (!r[p]) {
            var h = typeof mo == "function" && mo;
            if (!m && h) return h(p, !0);
            if (c) return c(p, !0);
            var b = new Error("Cannot find module '" + p + "'");
            throw b.code = "MODULE_NOT_FOUND", b;
          }
          var f = n[p] = { exports: {} };
          r[p][0].call(f.exports, function(y) {
            var S = r[p][1][y];
            return u(S || y);
          }, f, f.exports, i, r, n, l);
        }
        return n[p].exports;
      }
      a(u, "s");
      for (var c = typeof mo == "function" && mo, d = 0; d < l.length; d++) u(l[d]);
      return u;
    }, "e"))({ 1: [function(i, r, n) {
      r.exports = function(l) {
=======
    return (/* @__PURE__ */ a(function i(n, r, l) {
      function u(d, g) {
        if (!r[d]) {
          if (!n[d]) {
            var h = typeof ro == "function" && ro;
            if (!g && h) return h(d, !0);
            if (c) return c(d, !0);
            var y = new Error("Cannot find module '" + d + "'");
            throw y.code = "MODULE_NOT_FOUND", y;
          }
          var f = r[d] = { exports: {} };
          n[d][0].call(f.exports, function(b) {
            var I = n[d][1][b];
            return u(I || b);
          }, f, f.exports, i, n, r, l);
        }
        return r[d].exports;
      }
      a(u, "s");
      for (var c = typeof ro == "function" && ro, p = 0; p < l.length; p++) u(l[p]);
      return u;
    }, "e"))({ 1: [function(i, n, r) {
      n.exports = function(l) {
>>>>>>> main
        if (typeof Map != "function" || l) {
          var u = i("./similar");
          return new u();
        } else
          return /* @__PURE__ */ new Map();
      };
<<<<<<< HEAD
    }, { "./similar": 2 }], 2: [function(i, r, n) {
=======
    }, { "./similar": 2 }], 2: [function(i, n, r) {
>>>>>>> main
      function l() {
        return this.list = [], this.lastItem = void 0, this.size = 0, this;
      }
      a(l, "Similar"), l.prototype.get = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u))
          return this.lastItem.val;
        if (c = this.indexOf(u), c >= 0)
          return this.lastItem = this.list[c], this.list[c].val;
      }, l.prototype.set = function(u, c) {
<<<<<<< HEAD
        var d;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (d = this.indexOf(u), d >= 0 ? (this.lastItem =
        this.list[d], this.list[d].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
=======
        var p;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? (this.lastItem.val = c, this) : (p = this.indexOf(u), p >= 0 ? (this.lastItem =
        this.list[p], this.list[p].val = c, this) : (this.lastItem = { key: u, val: c }, this.list.push(this.lastItem), this.size++, this));
>>>>>>> main
      }, l.prototype.delete = function(u) {
        var c;
        if (this.lastItem && this.isEqual(this.lastItem.key, u) && (this.lastItem = void 0), c = this.indexOf(u), c >= 0)
          return this.size--, this.list.splice(c, 1)[0];
      }, l.prototype.has = function(u) {
        var c;
        return this.lastItem && this.isEqual(this.lastItem.key, u) ? !0 : (c = this.indexOf(u), c >= 0 ? (this.lastItem = this.list[c], !0) :
        !1);
      }, l.prototype.forEach = function(u, c) {
<<<<<<< HEAD
        var d;
        for (d = 0; d < this.size; d++)
          u.call(c || this, this.list[d].val, this.list[d].key, this);
=======
        var p;
        for (p = 0; p < this.size; p++)
          u.call(c || this, this.list[p].val, this.list[p].key, this);
>>>>>>> main
      }, l.prototype.indexOf = function(u) {
        var c;
        for (c = 0; c < this.size; c++)
          if (this.isEqual(this.list[c].key, u))
            return c;
        return -1;
      }, l.prototype.isEqual = function(u, c) {
        return u === c || u !== u && c !== c;
<<<<<<< HEAD
      }, r.exports = l;
    }, {}], 3: [function(i, r, n) {
      var l = i("map-or-similar");
      r.exports = function(p) {
        var m = new l(!1), h = [];
        return function(b) {
          var f = /* @__PURE__ */ a(function() {
            var y = m, S, E, g = arguments.length - 1, v = Array(g + 1), I = !0, w;
            if ((f.numArgs || f.numArgs === 0) && f.numArgs !== g + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (w = 0; w < g; w++) {
              if (v[w] = {
                cacheItem: y,
                arg: arguments[w]
              }, y.has(arguments[w])) {
                y = y.get(arguments[w]);
                continue;
              }
              I = !1, S = new l(!1), y.set(arguments[w], S), y = S;
            }
            return I && (y.has(arguments[g]) ? E = y.get(arguments[g]) : I = !1), I || (E = b.apply(null, arguments), y.set(arguments[g], E)),
            p > 0 && (v[g] = {
              cacheItem: y,
              arg: arguments[g]
            }, I ? u(h, v) : h.push(v), h.length > p && c(h.shift())), f.wasMemoized = I, f.numArgs = g + 1, E;
          }, "memoizerific");
          return f.limit = p, f.wasMemoized = !1, f.cache = m, f.lru = h, f;
        };
      };
      function u(p, m) {
        var h = p.length, b = m.length, f, y, S;
        for (y = 0; y < h; y++) {
          for (f = !0, S = 0; S < b; S++)
            if (!d(p[y][S].arg, m[S].arg)) {
=======
      }, n.exports = l;
    }, {}], 3: [function(i, n, r) {
      var l = i("map-or-similar");
      n.exports = function(d) {
        var g = new l(!1), h = [];
        return function(y) {
          var f = /* @__PURE__ */ a(function() {
            var b = g, I, _, m = arguments.length - 1, v = Array(m + 1), S = !0, E;
            if ((f.numArgs || f.numArgs === 0) && f.numArgs !== m + 1)
              throw new Error("Memoizerific functions should always be called with the same number of arguments");
            for (E = 0; E < m; E++) {
              if (v[E] = {
                cacheItem: b,
                arg: arguments[E]
              }, b.has(arguments[E])) {
                b = b.get(arguments[E]);
                continue;
              }
              S = !1, I = new l(!1), b.set(arguments[E], I), b = I;
            }
            return S && (b.has(arguments[m]) ? _ = b.get(arguments[m]) : S = !1), S || (_ = y.apply(null, arguments), b.set(arguments[m], _)),
            d > 0 && (v[m] = {
              cacheItem: b,
              arg: arguments[m]
            }, S ? u(h, v) : h.push(v), h.length > d && c(h.shift())), f.wasMemoized = S, f.numArgs = m + 1, _;
          }, "memoizerific");
          return f.limit = d, f.wasMemoized = !1, f.cache = g, f.lru = h, f;
        };
      };
      function u(d, g) {
        var h = d.length, y = g.length, f, b, I;
        for (b = 0; b < h; b++) {
          for (f = !0, I = 0; I < y; I++)
            if (!p(d[b][I].arg, g[I].arg)) {
>>>>>>> main
              f = !1;
              break;
            }
          if (f)
            break;
        }
<<<<<<< HEAD
        p.push(p.splice(y, 1)[0]);
      }
      a(u, "moveToMostRecentLru");
      function c(p) {
        var m = p.length, h = p[m - 1], b, f;
        for (h.cacheItem.delete(h.arg), f = m - 2; f >= 0 && (h = p[f], b = h.cacheItem.get(h.arg), !b || !b.size); f--)
          h.cacheItem.delete(h.arg);
      }
      a(c, "removeCachedResult");
      function d(p, m) {
        return p === m || p !== p && m !== m;
      }
      a(d, "isEqual");
=======
        d.push(d.splice(b, 1)[0]);
      }
      a(u, "moveToMostRecentLru");
      function c(d) {
        var g = d.length, h = d[g - 1], y, f;
        for (h.cacheItem.delete(h.arg), f = g - 2; f >= 0 && (h = d[f], y = h.cacheItem.get(h.arg), !y || !y.size); f--)
          h.cacheItem.delete(h.arg);
      }
      a(c, "removeCachedResult");
      function p(d, g) {
        return d === g || d !== d && g !== g;
      }
      a(p, "isEqual");
>>>>>>> main
    }, { "map-or-similar": 1 }] }, {}, [3])(3);
  });
});

// ../node_modules/picoquery/lib/string-util.js
<<<<<<< HEAD
var Ai = we((Pi) => {
  "use strict";
  Object.defineProperty(Pi, "__esModule", { value: !0 });
  Pi.encodeString = Xb;
  var nt = Array.from({ length: 256 }, (e, t) => "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()), Qb = new Int8Array([
=======
var jn = Ee((Wn) => {
  "use strict";
  Object.defineProperty(Wn, "__esModule", { value: !0 });
  Wn.encodeString = xm;
  var rt = Array.from({ length: 256 }, (e, t) => "%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase()), vm = new Int8Array([
>>>>>>> main
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    0,
    0,
    1,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    0,
    1,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    0,
    0,
    0,
    1,
    0
  ]);
<<<<<<< HEAD
  function Xb(e) {
    let t = e.length;
    if (t === 0)
      return "";
    let o = "", i = 0, r = 0;
    e: for (; r < t; r++) {
      let n = e.charCodeAt(r);
      for (; n < 128; ) {
        if (Qb[n] !== 1 && (i < r && (o += e.slice(i, r)), i = r + 1, o += nt[n]), ++r === t)
          break e;
        n = e.charCodeAt(r);
      }
      if (i < r && (o += e.slice(i, r)), n < 2048) {
        i = r + 1, o += nt[192 | n >> 6] + nt[128 | n & 63];
        continue;
      }
      if (n < 55296 || n >= 57344) {
        i = r + 1, o += nt[224 | n >> 12] + nt[128 | n >> 6 & 63] + nt[128 | n & 63];
        continue;
      }
      if (++r, r >= t)
        throw new Error("URI malformed");
      let l = e.charCodeAt(r) & 1023;
      i = r + 1, n = 65536 + ((n & 1023) << 10 | l), o += nt[240 | n >> 18] + nt[128 | n >> 12 & 63] + nt[128 | n >> 6 & 63] + nt[128 | n & 63];
    }
    return i === 0 ? e : i < t ? o + e.slice(i) : o;
  }
  a(Xb, "encodeString");
});

// ../node_modules/picoquery/lib/shared.js
var Tr = we((it) => {
  "use strict";
  Object.defineProperty(it, "__esModule", { value: !0 });
  it.defaultOptions = it.defaultShouldSerializeObject = it.defaultValueSerializer = void 0;
  var Di = Ai(), Zb = /* @__PURE__ */ a((e) => {
    switch (typeof e) {
      case "string":
        return (0, Di.encodeString)(e);
=======
  function xm(e) {
    let t = e.length;
    if (t === 0)
      return "";
    let o = "", i = 0, n = 0;
    e: for (; n < t; n++) {
      let r = e.charCodeAt(n);
      for (; r < 128; ) {
        if (vm[r] !== 1 && (i < n && (o += e.slice(i, n)), i = n + 1, o += rt[r]), ++n === t)
          break e;
        r = e.charCodeAt(n);
      }
      if (i < n && (o += e.slice(i, n)), r < 2048) {
        i = n + 1, o += rt[192 | r >> 6] + rt[128 | r & 63];
        continue;
      }
      if (r < 55296 || r >= 57344) {
        i = n + 1, o += rt[224 | r >> 12] + rt[128 | r >> 6 & 63] + rt[128 | r & 63];
        continue;
      }
      if (++n, n >= t)
        throw new Error("URI malformed");
      let l = e.charCodeAt(n) & 1023;
      i = n + 1, r = 65536 + ((r & 1023) << 10 | l), o += rt[240 | r >> 18] + rt[128 | r >> 12 & 63] + rt[128 | r >> 6 & 63] + rt[128 | r & 63];
    }
    return i === 0 ? e : i < t ? o + e.slice(i) : o;
  }
  a(xm, "encodeString");
});

// ../node_modules/picoquery/lib/shared.js
var ur = Ee((nt) => {
  "use strict";
  Object.defineProperty(nt, "__esModule", { value: !0 });
  nt.defaultOptions = nt.defaultShouldSerializeObject = nt.defaultValueSerializer = void 0;
  var Vn = jn(), Sm = /* @__PURE__ */ a((e) => {
    switch (typeof e) {
      case "string":
        return (0, Vn.encodeString)(e);
>>>>>>> main
      case "bigint":
      case "boolean":
        return "" + e;
      case "number":
        if (Number.isFinite(e))
<<<<<<< HEAD
          return e < 1e21 ? "" + e : (0, Di.encodeString)("" + e);
        break;
    }
    return e instanceof Date ? (0, Di.encodeString)(e.toISOString()) : "";
  }, "defaultValueSerializer");
  it.defaultValueSerializer = Zb;
  var Jb = /* @__PURE__ */ a((e) => e instanceof Date, "defaultShouldSerializeObject");
  it.defaultShouldSerializeObject = Jb;
  var Xl = /* @__PURE__ */ a((e) => e, "identityFunc");
  it.defaultOptions = {
=======
          return e < 1e21 ? "" + e : (0, Vn.encodeString)("" + e);
        break;
    }
    return e instanceof Date ? (0, Vn.encodeString)(e.toISOString()) : "";
  }, "defaultValueSerializer");
  nt.defaultValueSerializer = Sm;
  var Im = /* @__PURE__ */ a((e) => e instanceof Date, "defaultShouldSerializeObject");
  nt.defaultShouldSerializeObject = Im;
  var wl = /* @__PURE__ */ a((e) => e, "identityFunc");
  nt.defaultOptions = {
>>>>>>> main
    nesting: !0,
    nestingSyntax: "dot",
    arrayRepeat: !1,
    arrayRepeatSyntax: "repeat",
    delimiter: 38,
<<<<<<< HEAD
    valueDeserializer: Xl,
    valueSerializer: it.defaultValueSerializer,
    keyDeserializer: Xl,
    shouldSerializeObject: it.defaultShouldSerializeObject
=======
    valueDeserializer: wl,
    valueSerializer: nt.defaultValueSerializer,
    keyDeserializer: wl,
    shouldSerializeObject: nt.defaultShouldSerializeObject
>>>>>>> main
  };
});

// ../node_modules/picoquery/lib/object-util.js
<<<<<<< HEAD
var Mi = we((Cr) => {
  "use strict";
  Object.defineProperty(Cr, "__esModule", { value: !0 });
  Cr.getDeepObject = ov;
  Cr.stringifyObject = Zl;
  var Rt = Tr(), ev = Ai();
  function tv(e) {
    return e === "__proto__" || e === "constructor" || e === "prototype";
  }
  a(tv, "isPrototypeKey");
  function ov(e, t, o, i, r) {
    if (tv(t))
      return e;
    let n = e[t];
    return typeof n == "object" && n !== null ? n : !i && (r || typeof o == "number" || typeof o == "string" && o * 0 === 0 && o.indexOf(".") ===
    -1) ? e[t] = [] : e[t] = {};
  }
  a(ov, "getDeepObject");
  var rv = 20, nv = "[]", iv = "[", sv = "]", av = ".";
  function Zl(e, t, o = 0, i, r) {
    let { nestingSyntax: n = Rt.defaultOptions.nestingSyntax, arrayRepeat: l = Rt.defaultOptions.arrayRepeat, arrayRepeatSyntax: u = Rt.defaultOptions.
    arrayRepeatSyntax, nesting: c = Rt.defaultOptions.nesting, delimiter: d = Rt.defaultOptions.delimiter, valueSerializer: p = Rt.defaultOptions.
    valueSerializer, shouldSerializeObject: m = Rt.defaultOptions.shouldSerializeObject } = t, h = typeof d == "number" ? String.fromCharCode(
    d) : d, b = r === !0 && l, f = n === "dot" || n === "js" && !r;
    if (o > rv)
      return "";
    let y = "", S = !0, E = !1;
    for (let g in e) {
      let v = e[g], I;
      i ? (I = i, b ? u === "bracket" && (I += nv) : f ? (I += av, I += g) : (I += iv, I += g, I += sv)) : I = g, S || (y += h), typeof v ==
      "object" && v !== null && !m(v) ? (E = v.pop !== void 0, (c || l && E) && (y += Zl(v, t, o + 1, I, E))) : (y += (0, ev.encodeString)(I),
      y += "=", y += p(v, g)), S && (S = !1);
    }
    return y;
  }
  a(Zl, "stringifyObject");
});

// ../node_modules/fast-decode-uri-component/index.js
var ou = we((hA, tu) => {
  "use strict";
  var Jl = 12, lv = 0, Li = [
=======
var Kn = Ee((cr) => {
  "use strict";
  Object.defineProperty(cr, "__esModule", { value: !0 });
  cr.getDeepObject = wm;
  cr.stringifyObject = Tl;
  var Ot = ur(), Em = jn();
  function _m(e) {
    return e === "__proto__" || e === "constructor" || e === "prototype";
  }
  a(_m, "isPrototypeKey");
  function wm(e, t, o, i, n) {
    if (_m(t))
      return e;
    let r = e[t];
    return typeof r == "object" && r !== null ? r : !i && (n || typeof o == "number" || typeof o == "string" && o * 0 === 0 && o.indexOf(".") ===
    -1) ? e[t] = [] : e[t] = {};
  }
  a(wm, "getDeepObject");
  var Tm = 20, Cm = "[]", km = "[", Om = "]", Pm = ".";
  function Tl(e, t, o = 0, i, n) {
    let { nestingSyntax: r = Ot.defaultOptions.nestingSyntax, arrayRepeat: l = Ot.defaultOptions.arrayRepeat, arrayRepeatSyntax: u = Ot.defaultOptions.
    arrayRepeatSyntax, nesting: c = Ot.defaultOptions.nesting, delimiter: p = Ot.defaultOptions.delimiter, valueSerializer: d = Ot.defaultOptions.
    valueSerializer, shouldSerializeObject: g = Ot.defaultOptions.shouldSerializeObject } = t, h = typeof p == "number" ? String.fromCharCode(
    p) : p, y = n === !0 && l, f = r === "dot" || r === "js" && !n;
    if (o > Tm)
      return "";
    let b = "", I = !0, _ = !1;
    for (let m in e) {
      let v = e[m], S;
      i ? (S = i, y ? u === "bracket" && (S += Cm) : f ? (S += Pm, S += m) : (S += km, S += m, S += Om)) : S = m, I || (b += h), typeof v ==
      "object" && v !== null && !g(v) ? (_ = v.pop !== void 0, (c || l && _) && (b += Tl(v, t, o + 1, S, _))) : (b += (0, Em.encodeString)(S),
      b += "=", b += d(v, m)), I && (I = !1);
    }
    return b;
  }
  a(Tl, "stringifyObject");
});

// ../node_modules/fast-decode-uri-component/index.js
var Pl = Ee((JO, Ol) => {
  "use strict";
  var Cl = 12, Am = 0, $n = [
>>>>>>> main
    // The first part of the table maps bytes to character to a transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    1,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    2,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    3,
    4,
    4,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    5,
    6,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    7,
    8,
    7,
    7,
    10,
    9,
    9,
    9,
    11,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    4,
    // The second part of the table maps a state to a new state when adding a
    // transition.
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    12,
    0,
    0,
    0,
    0,
    24,
    36,
    48,
    60,
    72,
    84,
    96,
    0,
    12,
    12,
    12,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    24,
    24,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    48,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    // The third part maps the current transition to a mask that needs to apply
    // to the byte.
    127,
    63,
    63,
    63,
    0,
    31,
    15,
    15,
    15,
    7,
    7,
    7
  ];
<<<<<<< HEAD
  function uv(e) {
    var t = e.indexOf("%");
    if (t === -1) return e;
    for (var o = e.length, i = "", r = 0, n = 0, l = t, u = Jl; t > -1 && t < o; ) {
      var c = eu(e[t + 1], 4), d = eu(e[t + 2], 0), p = c | d, m = Li[p];
      if (u = Li[256 + u + m], n = n << 6 | p & Li[364 + m], u === Jl)
        i += e.slice(r, l), i += n <= 65535 ? String.fromCharCode(n) : String.fromCharCode(
          55232 + (n >> 10),
          56320 + (n & 1023)
        ), n = 0, r = t + 3, t = l = e.indexOf("%", r);
      else {
        if (u === lv)
=======
  function Dm(e) {
    var t = e.indexOf("%");
    if (t === -1) return e;
    for (var o = e.length, i = "", n = 0, r = 0, l = t, u = Cl; t > -1 && t < o; ) {
      var c = kl(e[t + 1], 4), p = kl(e[t + 2], 0), d = c | p, g = $n[d];
      if (u = $n[256 + u + g], r = r << 6 | d & $n[364 + g], u === Cl)
        i += e.slice(n, l), i += r <= 65535 ? String.fromCharCode(r) : String.fromCharCode(
          55232 + (r >> 10),
          56320 + (r & 1023)
        ), r = 0, n = t + 3, t = l = e.indexOf("%", n);
      else {
        if (u === Am)
>>>>>>> main
          return null;
        if (t += 3, t < o && e.charCodeAt(t) === 37) continue;
        return null;
      }
    }
<<<<<<< HEAD
    return i + e.slice(r);
  }
  a(uv, "decodeURIComponent");
  var cv = {
=======
    return i + e.slice(n);
  }
  a(Dm, "decodeURIComponent");
  var Mm = {
>>>>>>> main
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
    6: 6,
    7: 7,
    8: 8,
    9: 9,
    a: 10,
    A: 10,
    b: 11,
    B: 11,
    c: 12,
    C: 12,
    d: 13,
    D: 13,
    e: 14,
    E: 14,
    f: 15,
    F: 15
  };
<<<<<<< HEAD
  function eu(e, t) {
    var o = cv[e];
    return o === void 0 ? 255 : o << t;
  }
  a(eu, "hexCodeToInt");
  tu.exports = uv;
});

// ../node_modules/picoquery/lib/parse.js
var su = we((dt) => {
  "use strict";
  var pv = dt && dt.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(dt, "__esModule", { value: !0 });
  dt.numberValueDeserializer = dt.numberKeyDeserializer = void 0;
  dt.parse = mv;
  var _r = Mi(), Bt = Tr(), ru = pv(ou()), dv = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberKeyDeserializer");
  dt.numberKeyDeserializer = dv;
  var fv = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberValueDeserializer");
  dt.numberValueDeserializer = fv;
  var nu = /\+/g, iu = /* @__PURE__ */ a(function() {
  }, "Empty");
  iu.prototype = /* @__PURE__ */ Object.create(null);
  function kr(e, t, o, i, r) {
    let n = e.substring(t, o);
    return i && (n = n.replace(nu, " ")), r && (n = (0, ru.default)(n) || n), n;
  }
  a(kr, "computeKeySlice");
  function mv(e, t) {
    let { valueDeserializer: o = Bt.defaultOptions.valueDeserializer, keyDeserializer: i = Bt.defaultOptions.keyDeserializer, arrayRepeatSyntax: r = Bt.
    defaultOptions.arrayRepeatSyntax, nesting: n = Bt.defaultOptions.nesting, arrayRepeat: l = Bt.defaultOptions.arrayRepeat, nestingSyntax: u = Bt.
    defaultOptions.nestingSyntax, delimiter: c = Bt.defaultOptions.delimiter } = t ?? {}, d = typeof c == "string" ? c.charCodeAt(0) : c, p = u ===
    "js", m = new iu();
    if (typeof e != "string")
      return m;
    let h = e.length, b = "", f = -1, y = -1, S = -1, E = m, g, v = "", I = "", w = !1, O = !1, _ = !1, k = !1, T = !1, C = !1, P = !1, D = 0,
    M = -1, F = -1, Z = -1;
    for (let W = 0; W < h + 1; W++) {
      if (D = W !== h ? e.charCodeAt(W) : d, D === d) {
        if (P = y > f, P || (y = W), S !== y - 1 && (I = kr(e, S + 1, M > -1 ? M : y, _, w), v = i(I), g !== void 0 && (E = (0, _r.getDeepObject)(
        E, g, v, p && T, p && C))), P || v !== "") {
          P && (b = e.slice(y + 1, W), k && (b = b.replace(nu, " ")), O && (b = (0, ru.default)(b) || b));
          let Q = o(b, v);
          if (l) {
            let H = E[v];
            H === void 0 ? M > -1 ? E[v] = [Q] : E[v] = Q : H.pop ? H.push(Q) : E[v] = [H, Q];
          } else
            E[v] = Q;
        }
        b = "", f = W, y = W, w = !1, O = !1, _ = !1, k = !1, T = !1, C = !1, M = -1, S = W, E = m, g = void 0, v = "";
      } else D === 93 ? (l && r === "bracket" && Z === 91 && (M = F), n && (u === "index" || p) && y <= f && (S !== F && (I = kr(e, S + 1, W,
      _, w), v = i(I), g !== void 0 && (E = (0, _r.getDeepObject)(E, g, v, void 0, p)), g = v, _ = !1, w = !1), S = W, C = !0, T = !1)) : D ===
      46 ? n && (u === "dot" || p) && y <= f && (S !== F && (I = kr(e, S + 1, W, _, w), v = i(I), g !== void 0 && (E = (0, _r.getDeepObject)(
      E, g, v, p)), g = v, _ = !1, w = !1), T = !0, C = !1, S = W) : D === 91 ? n && (u === "index" || p) && y <= f && (S !== F && (I = kr(e,
      S + 1, W, _, w), v = i(I), p && g !== void 0 && (E = (0, _r.getDeepObject)(E, g, v, p)), g = v, _ = !1, w = !1, T = !1, C = !0), S = W) :
      D === 61 ? y <= f ? y = W : O = !0 : D === 43 ? y > f ? k = !0 : _ = !0 : D === 37 && (y > f ? O = !0 : w = !0);
      F = W, Z = D;
    }
    return m;
  }
  a(mv, "parse");
});

// ../node_modules/picoquery/lib/stringify.js
var au = we((Ni) => {
  "use strict";
  Object.defineProperty(Ni, "__esModule", { value: !0 });
  Ni.stringify = gv;
  var hv = Mi();
  function gv(e, t) {
    if (e === null || typeof e != "object")
      return "";
    let o = t ?? {};
    return (0, hv.stringifyObject)(e, o);
  }
  a(gv, "stringify");
});

// ../node_modules/picoquery/lib/main.js
var lu = we((Xe) => {
  "use strict";
  var yv = Xe && Xe.__createBinding || (Object.create ? function(e, t, o, i) {
    i === void 0 && (i = o);
    var r = Object.getOwnPropertyDescriptor(t, o);
    (!r || ("get" in r ? !t.__esModule : r.writable || r.configurable)) && (r = { enumerable: !0, get: /* @__PURE__ */ a(function() {
      return t[o];
    }, "get") }), Object.defineProperty(e, i, r);
  } : function(e, t, o, i) {
    i === void 0 && (i = o), e[i] = t[o];
  }), bv = Xe && Xe.__exportStar || function(e, t) {
    for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(t, o) && yv(t, e, o);
  };
  Object.defineProperty(Xe, "__esModule", { value: !0 });
  Xe.stringify = Xe.parse = void 0;
  var vv = su();
  Object.defineProperty(Xe, "parse", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return vv.parse;
  }, "get") });
  var xv = au();
  Object.defineProperty(Xe, "stringify", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return xv.stringify;
  }, "get") });
  bv(Tr(), Xe);
});

// ../node_modules/toggle-selection/index.js
var mu = we((HA, fu) => {
  fu.exports = function() {
=======
  function kl(e, t) {
    var o = Mm[e];
    return o === void 0 ? 255 : o << t;
  }
  a(kl, "hexCodeToInt");
  Ol.exports = Dm;
});

// ../node_modules/picoquery/lib/parse.js
var Ll = Ee((ct) => {
  "use strict";
  var Lm = ct && ct.__importDefault || function(e) {
    return e && e.__esModule ? e : { default: e };
  };
  Object.defineProperty(ct, "__esModule", { value: !0 });
  ct.numberValueDeserializer = ct.numberKeyDeserializer = void 0;
  ct.parse = Fm;
  var pr = Kn(), Pt = ur(), Al = Lm(Pl()), Nm = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberKeyDeserializer");
  ct.numberKeyDeserializer = Nm;
  var Rm = /* @__PURE__ */ a((e) => {
    let t = Number(e);
    return Number.isNaN(t) ? e : t;
  }, "numberValueDeserializer");
  ct.numberValueDeserializer = Rm;
  var Dl = /\+/g, Ml = /* @__PURE__ */ a(function() {
  }, "Empty");
  Ml.prototype = /* @__PURE__ */ Object.create(null);
  function dr(e, t, o, i, n) {
    let r = e.substring(t, o);
    return i && (r = r.replace(Dl, " ")), n && (r = (0, Al.default)(r) || r), r;
  }
  a(dr, "computeKeySlice");
  function Fm(e, t) {
    let { valueDeserializer: o = Pt.defaultOptions.valueDeserializer, keyDeserializer: i = Pt.defaultOptions.keyDeserializer, arrayRepeatSyntax: n = Pt.
    defaultOptions.arrayRepeatSyntax, nesting: r = Pt.defaultOptions.nesting, arrayRepeat: l = Pt.defaultOptions.arrayRepeat, nestingSyntax: u = Pt.
    defaultOptions.nestingSyntax, delimiter: c = Pt.defaultOptions.delimiter } = t ?? {}, p = typeof c == "string" ? c.charCodeAt(0) : c, d = u ===
    "js", g = new Ml();
    if (typeof e != "string")
      return g;
    let h = e.length, y = "", f = -1, b = -1, I = -1, _ = g, m, v = "", S = "", E = !1, T = !1, C = !1, k = !1, w = !1, O = !1, P = !1, D = 0,
    M = -1, N = -1, Q = -1;
    for (let V = 0; V < h + 1; V++) {
      if (D = V !== h ? e.charCodeAt(V) : p, D === p) {
        if (P = b > f, P || (b = V), I !== b - 1 && (S = dr(e, I + 1, M > -1 ? M : b, C, E), v = i(S), m !== void 0 && (_ = (0, pr.getDeepObject)(
        _, m, v, d && w, d && O))), P || v !== "") {
          P && (y = e.slice(b + 1, V), k && (y = y.replace(Dl, " ")), T && (y = (0, Al.default)(y) || y));
          let X = o(y, v);
          if (l) {
            let H = _[v];
            H === void 0 ? M > -1 ? _[v] = [X] : _[v] = X : H.pop ? H.push(X) : _[v] = [H, X];
          } else
            _[v] = X;
        }
        y = "", f = V, b = V, E = !1, T = !1, C = !1, k = !1, w = !1, O = !1, M = -1, I = V, _ = g, m = void 0, v = "";
      } else D === 93 ? (l && n === "bracket" && Q === 91 && (M = N), r && (u === "index" || d) && b <= f && (I !== N && (S = dr(e, I + 1, V,
      C, E), v = i(S), m !== void 0 && (_ = (0, pr.getDeepObject)(_, m, v, void 0, d)), m = v, C = !1, E = !1), I = V, O = !0, w = !1)) : D ===
      46 ? r && (u === "dot" || d) && b <= f && (I !== N && (S = dr(e, I + 1, V, C, E), v = i(S), m !== void 0 && (_ = (0, pr.getDeepObject)(
      _, m, v, d)), m = v, C = !1, E = !1), w = !0, O = !1, I = V) : D === 91 ? r && (u === "index" || d) && b <= f && (I !== N && (S = dr(e,
      I + 1, V, C, E), v = i(S), d && m !== void 0 && (_ = (0, pr.getDeepObject)(_, m, v, d)), m = v, C = !1, E = !1, w = !1, O = !0), I = V) :
      D === 61 ? b <= f ? b = V : T = !0 : D === 43 ? b > f ? k = !0 : C = !0 : D === 37 && (b > f ? T = !0 : E = !0);
      N = V, Q = D;
    }
    return g;
  }
  a(Fm, "parse");
});

// ../node_modules/picoquery/lib/stringify.js
var Nl = Ee((Un) => {
  "use strict";
  Object.defineProperty(Un, "__esModule", { value: !0 });
  Un.stringify = Bm;
  var Hm = Kn();
  function Bm(e, t) {
    if (e === null || typeof e != "object")
      return "";
    let o = t ?? {};
    return (0, Hm.stringifyObject)(e, o);
  }
  a(Bm, "stringify");
});

// ../node_modules/picoquery/lib/main.js
var Rl = Ee((Ze) => {
  "use strict";
  var zm = Ze && Ze.__createBinding || (Object.create ? function(e, t, o, i) {
    i === void 0 && (i = o);
    var n = Object.getOwnPropertyDescriptor(t, o);
    (!n || ("get" in n ? !t.__esModule : n.writable || n.configurable)) && (n = { enumerable: !0, get: /* @__PURE__ */ a(function() {
      return t[o];
    }, "get") }), Object.defineProperty(e, i, n);
  } : function(e, t, o, i) {
    i === void 0 && (i = o), e[i] = t[o];
  }), Wm = Ze && Ze.__exportStar || function(e, t) {
    for (var o in e) o !== "default" && !Object.prototype.hasOwnProperty.call(t, o) && zm(t, e, o);
  };
  Object.defineProperty(Ze, "__esModule", { value: !0 });
  Ze.stringify = Ze.parse = void 0;
  var jm = Ll();
  Object.defineProperty(Ze, "parse", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return jm.parse;
  }, "get") });
  var Vm = Nl();
  Object.defineProperty(Ze, "stringify", { enumerable: !0, get: /* @__PURE__ */ a(function() {
    return Vm.stringify;
  }, "get") });
  Wm(ur(), Ze);
});

// ../node_modules/toggle-selection/index.js
var jl = Ee((EP, Wl) => {
  Wl.exports = function() {
>>>>>>> main
    var e = document.getSelection();
    if (!e.rangeCount)
      return function() {
      };
    for (var t = document.activeElement, o = [], i = 0; i < e.rangeCount; i++)
      o.push(e.getRangeAt(i));
    switch (t.tagName.toUpperCase()) {
      // .toUpperCase handles XHTML
      case "INPUT":
      case "TEXTAREA":
        t.blur();
        break;
      default:
        t = null;
        break;
    }
    return e.removeAllRanges(), function() {
<<<<<<< HEAD
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || o.forEach(function(r) {
        e.addRange(r);
=======
      e.type === "Caret" && e.removeAllRanges(), e.rangeCount || o.forEach(function(n) {
        e.addRange(n);
>>>>>>> main
      }), t && t.focus();
    };
  };
});

// ../node_modules/copy-to-clipboard/index.js
<<<<<<< HEAD
var yu = we((zA, gu) => {
  "use strict";
  var Cv = mu(), hu = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, _v = "Copy to clipboard: #{key}, Enter";
  function kv(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t);
  }
  a(kv, "format");
  function Ov(e, t) {
    var o, i, r, n, l, u, c = !1;
    t || (t = {}), o = t.debug || !1;
    try {
      r = Cv(), n = document.createRange(), l = document.getSelection(), u = document.createElement("span"), u.textContent = e, u.ariaHidden =
      "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "p\
re", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener(
      "copy", function(p) {
        if (p.stopPropagation(), t.format)
          if (p.preventDefault(), typeof p.clipboardData > "u") {
            o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var m = hu[t.format] || hu.default;
            window.clipboardData.setData(m, e);
          } else
            p.clipboardData.clearData(), p.clipboardData.setData(t.format, e);
        t.onCopy && (p.preventDefault(), t.onCopy(p.clipboardData));
      }), document.body.appendChild(u), n.selectNodeContents(u), l.addRange(n);
      var d = document.execCommand("copy");
      if (!d)
        throw new Error("copy command was unsuccessful");
      c = !0;
    } catch (p) {
      o && console.error("unable to copy using execCommand: ", p), o && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0;
      } catch (m) {
        o && console.error("unable to copy using clipboardData: ", m), o && console.error("falling back to prompt"), i = kv("message" in t ?
        t.message : _v), window.prompt(i, e);
      }
    } finally {
      l && (typeof l.removeRange == "function" ? l.removeRange(n) : l.removeAllRanges()), u && document.body.removeChild(u), r();
    }
    return c;
  }
  a(Ov, "copy");
  gu.exports = Ov;
});

// ../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
var xp = we((pe) => {
  "use strict";
  var Yi = Symbol.for("react.element"), Qi = Symbol.for("react.portal"), Vr = Symbol.for("react.fragment"), jr = Symbol.for("react.strict_mo\
de"), Kr = Symbol.for("react.profiler"), $r = Symbol.for("react.provider"), Ur = Symbol.for("react.context"), _x = Symbol.for("react.server_\
context"), Gr = Symbol.for("react.forward_ref"), qr = Symbol.for("react.suspense"), Yr = Symbol.for("react.suspense_list"), Qr = Symbol.for(
  "react.memo"), Xr = Symbol.for("react.lazy"), kx = Symbol.for("react.offscreen"), vp;
  vp = Symbol.for("react.module.reference");
  function Ue(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case Yi:
          switch (e = e.type, e) {
            case Vr:
            case Kr:
            case jr:
            case qr:
            case Yr:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case _x:
                case Ur:
                case Gr:
                case Xr:
                case Qr:
                case $r:
=======
var $l = Ee((_P, Kl) => {
  "use strict";
  var qm = jl(), Vl = {
    "text/plain": "Text",
    "text/html": "Url",
    default: "Text"
  }, Qm = "Copy to clipboard: #{key}, Enter";
  function Xm(e) {
    var t = (/mac os x/i.test(navigator.userAgent) ? "\u2318" : "Ctrl") + "+C";
    return e.replace(/#{\s*key\s*}/g, t);
  }
  a(Xm, "format");
  function Zm(e, t) {
    var o, i, n, r, l, u, c = !1;
    t || (t = {}), o = t.debug || !1;
    try {
      n = qm(), r = document.createRange(), l = document.getSelection(), u = document.createElement("span"), u.textContent = e, u.ariaHidden =
      "true", u.style.all = "unset", u.style.position = "fixed", u.style.top = 0, u.style.clip = "rect(0, 0, 0, 0)", u.style.whiteSpace = "p\
re", u.style.webkitUserSelect = "text", u.style.MozUserSelect = "text", u.style.msUserSelect = "text", u.style.userSelect = "text", u.addEventListener(
      "copy", function(d) {
        if (d.stopPropagation(), t.format)
          if (d.preventDefault(), typeof d.clipboardData > "u") {
            o && console.warn("unable to use e.clipboardData"), o && console.warn("trying IE specific stuff"), window.clipboardData.clearData();
            var g = Vl[t.format] || Vl.default;
            window.clipboardData.setData(g, e);
          } else
            d.clipboardData.clearData(), d.clipboardData.setData(t.format, e);
        t.onCopy && (d.preventDefault(), t.onCopy(d.clipboardData));
      }), document.body.appendChild(u), r.selectNodeContents(u), l.addRange(r);
      var p = document.execCommand("copy");
      if (!p)
        throw new Error("copy command was unsuccessful");
      c = !0;
    } catch (d) {
      o && console.error("unable to copy using execCommand: ", d), o && console.warn("trying IE specific stuff");
      try {
        window.clipboardData.setData(t.format || "text", e), t.onCopy && t.onCopy(window.clipboardData), c = !0;
      } catch (g) {
        o && console.error("unable to copy using clipboardData: ", g), o && console.error("falling back to prompt"), i = Xm("message" in t ?
        t.message : Qm), window.prompt(i, e);
      }
    } finally {
      l && (typeof l.removeRange == "function" ? l.removeRange(r) : l.removeAllRanges()), u && document.body.removeChild(u), n();
    }
    return c;
  }
  a(Zm, "copy");
  Kl.exports = Zm;
});

// ../node_modules/downshift/node_modules/react-is/cjs/react-is.production.min.js
var Uc = Ee((pe) => {
  "use strict";
  var ni = Symbol.for("react.element"), ii = Symbol.for("react.portal"), Tr = Symbol.for("react.fragment"), Cr = Symbol.for("react.strict_mo\
de"), kr = Symbol.for("react.profiler"), Or = Symbol.for("react.provider"), Pr = Symbol.for("react.context"), Xg = Symbol.for("react.server_\
context"), Ar = Symbol.for("react.forward_ref"), Dr = Symbol.for("react.suspense"), Mr = Symbol.for("react.suspense_list"), Lr = Symbol.for(
  "react.memo"), Nr = Symbol.for("react.lazy"), Zg = Symbol.for("react.offscreen"), $c;
  $c = Symbol.for("react.module.reference");
  function Ke(e) {
    if (typeof e == "object" && e !== null) {
      var t = e.$$typeof;
      switch (t) {
        case ni:
          switch (e = e.type, e) {
            case Tr:
            case kr:
            case Cr:
            case Dr:
            case Mr:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case Xg:
                case Pr:
                case Ar:
                case Nr:
                case Lr:
                case Or:
>>>>>>> main
                  return e;
                default:
                  return t;
              }
          }
<<<<<<< HEAD
        case Qi:
=======
        case ii:
>>>>>>> main
          return t;
      }
    }
  }
<<<<<<< HEAD
  a(Ue, "v");
  pe.ContextConsumer = Ur;
  pe.ContextProvider = $r;
  pe.Element = Yi;
  pe.ForwardRef = Gr;
  pe.Fragment = Vr;
  pe.Lazy = Xr;
  pe.Memo = Qr;
  pe.Portal = Qi;
  pe.Profiler = Kr;
  pe.StrictMode = jr;
  pe.Suspense = qr;
  pe.SuspenseList = Yr;
=======
  a(Ke, "v");
  pe.ContextConsumer = Pr;
  pe.ContextProvider = Or;
  pe.Element = ni;
  pe.ForwardRef = Ar;
  pe.Fragment = Tr;
  pe.Lazy = Nr;
  pe.Memo = Lr;
  pe.Portal = ii;
  pe.Profiler = kr;
  pe.StrictMode = Cr;
  pe.Suspense = Dr;
  pe.SuspenseList = Mr;
>>>>>>> main
  pe.isAsyncMode = function() {
    return !1;
  };
  pe.isConcurrentMode = function() {
    return !1;
  };
  pe.isContextConsumer = function(e) {
<<<<<<< HEAD
    return Ue(e) === Ur;
  };
  pe.isContextProvider = function(e) {
    return Ue(e) === $r;
  };
  pe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === Yi;
  };
  pe.isForwardRef = function(e) {
    return Ue(e) === Gr;
  };
  pe.isFragment = function(e) {
    return Ue(e) === Vr;
  };
  pe.isLazy = function(e) {
    return Ue(e) === Xr;
  };
  pe.isMemo = function(e) {
    return Ue(e) === Qr;
  };
  pe.isPortal = function(e) {
    return Ue(e) === Qi;
  };
  pe.isProfiler = function(e) {
    return Ue(e) === Kr;
  };
  pe.isStrictMode = function(e) {
    return Ue(e) === jr;
  };
  pe.isSuspense = function(e) {
    return Ue(e) === qr;
  };
  pe.isSuspenseList = function(e) {
    return Ue(e) === Yr;
  };
  pe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Vr || e === Kr || e === jr || e === qr || e === Yr || e === kx || typeof e ==
    "object" && e !== null && (e.$$typeof === Xr || e.$$typeof === Qr || e.$$typeof === $r || e.$$typeof === Ur || e.$$typeof === Gr || e.$$typeof ===
    vp || e.getModuleId !== void 0);
  };
  pe.typeOf = Ue;
});

// ../node_modules/downshift/node_modules/react-is/index.js
var Sp = we((vR, Ip) => {
  "use strict";
  Ip.exports = xp();
});

// ../node_modules/fuse.js/dist/fuse.js
var Pd = we((jo, zs) => {
  (function(e, t) {
    typeof jo == "object" && typeof zs == "object" ? zs.exports = t() : typeof define == "function" && define.amd ? define("Fuse", [], t) : typeof jo ==
    "object" ? jo.Fuse = t() : e.Fuse = t();
  })(jo, function() {
=======
    return Ke(e) === Pr;
  };
  pe.isContextProvider = function(e) {
    return Ke(e) === Or;
  };
  pe.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === ni;
  };
  pe.isForwardRef = function(e) {
    return Ke(e) === Ar;
  };
  pe.isFragment = function(e) {
    return Ke(e) === Tr;
  };
  pe.isLazy = function(e) {
    return Ke(e) === Nr;
  };
  pe.isMemo = function(e) {
    return Ke(e) === Lr;
  };
  pe.isPortal = function(e) {
    return Ke(e) === ii;
  };
  pe.isProfiler = function(e) {
    return Ke(e) === kr;
  };
  pe.isStrictMode = function(e) {
    return Ke(e) === Cr;
  };
  pe.isSuspense = function(e) {
    return Ke(e) === Dr;
  };
  pe.isSuspenseList = function(e) {
    return Ke(e) === Mr;
  };
  pe.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === Tr || e === kr || e === Cr || e === Dr || e === Mr || e === Zg || typeof e ==
    "object" && e !== null && (e.$$typeof === Nr || e.$$typeof === Lr || e.$$typeof === Or || e.$$typeof === Pr || e.$$typeof === Ar || e.$$typeof ===
    $c || e.getModuleId !== void 0);
  };
  pe.typeOf = Ke;
});

// ../node_modules/downshift/node_modules/react-is/index.js
var Yc = Ee((oR, Gc) => {
  "use strict";
  Gc.exports = Uc();
});

// ../node_modules/fuse.js/dist/fuse.js
var od = Ee((wo, Qi) => {
  (function(e, t) {
    typeof wo == "object" && typeof Qi == "object" ? Qi.exports = t() : typeof define == "function" && define.amd ? define("Fuse", [], t) : typeof wo ==
    "object" ? wo.Fuse = t() : e.Fuse = t();
  })(wo, function() {
>>>>>>> main
    return function(e) {
      var t = {};
      function o(i) {
        if (t[i]) return t[i].exports;
<<<<<<< HEAD
        var r = t[i] = { i, l: !1, exports: {} };
        return e[i].call(r.exports, r, r.exports, o), r.l = !0, r.exports;
      }
      return a(o, "r"), o.m = e, o.c = t, o.d = function(i, r, n) {
        o.o(i, r) || Object.defineProperty(i, r, { enumerable: !0, get: n });
      }, o.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(
        i, "__esModule", { value: !0 });
      }, o.t = function(i, r) {
        if (1 & r && (i = o(i)), 8 & r || 4 & r && typeof i == "object" && i && i.__esModule) return i;
        var n = /* @__PURE__ */ Object.create(null);
        if (o.r(n), Object.defineProperty(n, "default", { enumerable: !0, value: i }), 2 & r && typeof i != "string") for (var l in i) o.d(n,
        l, function(u) {
          return i[u];
        }.bind(null, l));
        return n;
      }, o.n = function(i) {
        var r = i && i.__esModule ? function() {
=======
        var n = t[i] = { i, l: !1, exports: {} };
        return e[i].call(n.exports, n, n.exports, o), n.l = !0, n.exports;
      }
      return a(o, "r"), o.m = e, o.c = t, o.d = function(i, n, r) {
        o.o(i, n) || Object.defineProperty(i, n, { enumerable: !0, get: r });
      }, o.r = function(i) {
        typeof Symbol < "u" && Symbol.toStringTag && Object.defineProperty(i, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(
        i, "__esModule", { value: !0 });
      }, o.t = function(i, n) {
        if (1 & n && (i = o(i)), 8 & n || 4 & n && typeof i == "object" && i && i.__esModule) return i;
        var r = /* @__PURE__ */ Object.create(null);
        if (o.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: i }), 2 & n && typeof i != "string") for (var l in i) o.d(r,
        l, (function(u) {
          return i[u];
        }).bind(null, l));
        return r;
      }, o.n = function(i) {
        var n = i && i.__esModule ? function() {
>>>>>>> main
          return i.default;
        } : function() {
          return i;
        };
<<<<<<< HEAD
        return o.d(r, "a", r), r;
      }, o.o = function(i, r) {
        return Object.prototype.hasOwnProperty.call(i, r);
      }, o.p = "", o(o.s = 0);
    }([function(e, t, o) {
      function i(p) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(m) {
          return typeof m;
        } : function(m) {
          return m && typeof Symbol == "function" && m.constructor === Symbol && m !== Symbol.prototype ? "symbol" : typeof m;
        })(p);
      }
      a(i, "n");
      function r(p, m) {
        for (var h = 0; h < m.length; h++) {
          var b = m[h];
          b.enumerable = b.enumerable || !1, b.configurable = !0, "value" in b && (b.writable = !0), Object.defineProperty(p, b.key, b);
        }
      }
      a(r, "o");
      var n = o(1), l = o(7), u = l.get, c = (l.deepValue, l.isArray), d = function() {
        function p(f, y) {
          var S = y.location, E = S === void 0 ? 0 : S, g = y.distance, v = g === void 0 ? 100 : g, I = y.threshold, w = I === void 0 ? 0.6 :
          I, O = y.maxPatternLength, _ = O === void 0 ? 32 : O, k = y.caseSensitive, T = k !== void 0 && k, C = y.tokenSeparator, P = C === void 0 ?
          / +/g : C, D = y.findAllMatches, M = D !== void 0 && D, F = y.minMatchCharLength, Z = F === void 0 ? 1 : F, W = y.id, Q = W === void 0 ?
          null : W, H = y.keys, G = H === void 0 ? [] : H, z = y.shouldSort, re = z === void 0 || z, R = y.getFn, B = R === void 0 ? u : R, L = y.
          sortFn, $ = L === void 0 ? function(fe, Se) {
            return fe.score - Se.score;
          } : L, J = y.tokenize, ie = J !== void 0 && J, te = y.matchAllTokens, de = te !== void 0 && te, ae = y.includeMatches, ce = ae !==
          void 0 && ae, ue = y.includeScore, Ie = ue !== void 0 && ue, ye = y.verbose, Oe = ye !== void 0 && ye;
          (function(fe, Se) {
            if (!(fe instanceof Se)) throw new TypeError("Cannot call a class as a function");
          })(this, p), this.options = { location: E, distance: v, threshold: w, maxPatternLength: _, isCaseSensitive: T, tokenSeparator: P, findAllMatches: M,
          minMatchCharLength: Z, id: Q, keys: G, includeMatches: ce, includeScore: Ie, shouldSort: re, getFn: B, sortFn: $, verbose: Oe, tokenize: ie,
          matchAllTokens: de }, this.setCollection(f), this._processKeys(G);
        }
        a(p, "e");
        var m, h, b;
        return m = p, (h = [{ key: "setCollection", value: /* @__PURE__ */ a(function(f) {
          return this.list = f, f;
        }, "value") }, { key: "_processKeys", value: /* @__PURE__ */ a(function(f) {
          if (this._keyWeights = {}, this._keyNames = [], f.length && typeof f[0] == "string") for (var y = 0, S = f.length; y < S; y += 1) {
            var E = f[y];
            this._keyWeights[E] = 1, this._keyNames.push(E);
          }
          else {
            for (var g = null, v = null, I = 0, w = 0, O = f.length; w < O; w += 1) {
              var _ = f[w];
              if (!_.hasOwnProperty("name")) throw new Error('Missing "name" property in key object');
              var k = _.name;
              if (this._keyNames.push(k), !_.hasOwnProperty("weight")) throw new Error('Missing "weight" property in key object');
              var T = _.weight;
              if (T < 0 || T > 1) throw new Error('"weight" property in key must bein the range of [0, 1)');
              v = v == null ? T : Math.max(v, T), g = g == null ? T : Math.min(g, T), this._keyWeights[k] = T, I += T;
            }
            if (I > 1) throw new Error("Total of weights cannot exceed 1");
          }
        }, "value") }, { key: "search", value: /* @__PURE__ */ a(function(f) {
          var y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { limit: !1 };
          this._log(`---------
Search pattern: "`.concat(f, '"'));
          var S = this._prepareSearchers(f), E = S.tokenSearchers, g = S.fullSearcher, v = this._search(E, g);
          return this._computeScore(v), this.options.shouldSort && this._sort(v), y.limit && typeof y.limit == "number" && (v = v.slice(0, y.
          limit)), this._format(v);
        }, "value") }, { key: "_prepareSearchers", value: /* @__PURE__ */ a(function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", y = [];
          if (this.options.tokenize) for (var S = f.split(this.options.tokenSeparator), E = 0, g = S.length; E < g; E += 1) y.push(new n(S[E],
          this.options));
          return { tokenSearchers: y, fullSearcher: new n(f, this.options) };
        }, "value") }, { key: "_search", value: /* @__PURE__ */ a(function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], y = arguments.length > 1 ? arguments[1] : void 0, S = this.
          list, E = {}, g = [];
          if (typeof S[0] == "string") {
            for (var v = 0, I = S.length; v < I; v += 1) this._analyze({ key: "", value: S[v], record: v, index: v }, { resultMap: E, results: g,
            tokenSearchers: f, fullSearcher: y });
            return g;
          }
          for (var w = 0, O = S.length; w < O; w += 1) for (var _ = S[w], k = 0, T = this._keyNames.length; k < T; k += 1) {
            var C = this._keyNames[k];
            this._analyze({ key: C, value: this.options.getFn(_, C), record: _, index: w }, { resultMap: E, results: g, tokenSearchers: f, fullSearcher: y });
          }
          return g;
        }, "value") }, { key: "_analyze", value: /* @__PURE__ */ a(function(f, y) {
          var S = this, E = f.key, g = f.arrayIndex, v = g === void 0 ? -1 : g, I = f.value, w = f.record, O = f.index, _ = y.tokenSearchers,
          k = _ === void 0 ? [] : _, T = y.fullSearcher, C = y.resultMap, P = C === void 0 ? {} : C, D = y.results, M = D === void 0 ? [] : D;
          (/* @__PURE__ */ a(function F(Z, W, Q, H) {
            if (W != null) {
              if (typeof W == "string") {
                var G = !1, z = -1, re = 0;
                S._log(`
Key: `.concat(E === "" ? "--" : E));
                var R = T.search(W);
                if (S._log('Full text: "'.concat(W, '", score: ').concat(R.score)), S.options.tokenize) {
                  for (var B = W.split(S.options.tokenSeparator), L = B.length, $ = [], J = 0, ie = k.length; J < ie; J += 1) {
                    var te = k[J];
                    S._log(`
Pattern: "`.concat(te.pattern, '"'));
                    for (var de = !1, ae = 0; ae < L; ae += 1) {
                      var ce = B[ae], ue = te.search(ce), Ie = {};
                      ue.isMatch ? (Ie[ce] = ue.score, G = !0, de = !0, $.push(ue.score)) : (Ie[ce] = 1, S.options.matchAllTokens || $.push(
                      1)), S._log('Token: "'.concat(ce, '", score: ').concat(Ie[ce]));
                    }
                    de && (re += 1);
                  }
                  z = $[0];
                  for (var ye = $.length, Oe = 1; Oe < ye; Oe += 1) z += $[Oe];
                  z /= ye, S._log("Token score average:", z);
                }
                var fe = R.score;
                z > -1 && (fe = (fe + z) / 2), S._log("Score average:", fe);
                var Se = !S.options.tokenize || !S.options.matchAllTokens || re >= k.length;
                if (S._log(`
Check Matches: `.concat(Se)), (G || R.isMatch) && Se) {
                  var _e = { key: E, arrayIndex: Z, value: W, score: fe };
                  S.options.includeMatches && (_e.matchedIndices = R.matchedIndices);
                  var Ae = P[H];
                  Ae ? Ae.output.push(_e) : (P[H] = { item: Q, output: [_e] }, M.push(P[H]));
                }
              } else if (c(W)) for (var et = 0, N = W.length; et < N; et += 1) F(et, W[et], Q, H);
            }
          }, "e"))(v, I, w, O);
=======
        return o.d(n, "a", n), n;
      }, o.o = function(i, n) {
        return Object.prototype.hasOwnProperty.call(i, n);
      }, o.p = "", o(o.s = 0);
    }([function(e, t, o) {
      function i(d) {
        return (i = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(g) {
          return typeof g;
        } : function(g) {
          return g && typeof Symbol == "function" && g.constructor === Symbol && g !== Symbol.prototype ? "symbol" : typeof g;
        })(d);
      }
      a(i, "n");
      function n(d, g) {
        for (var h = 0; h < g.length; h++) {
          var y = g[h];
          y.enumerable = y.enumerable || !1, y.configurable = !0, "value" in y && (y.writable = !0), Object.defineProperty(d, y.key, y);
        }
      }
      a(n, "o");
      var r = o(1), l = o(7), u = l.get, c = (l.deepValue, l.isArray), p = function() {
        function d(f, b) {
          var I = b.location, _ = I === void 0 ? 0 : I, m = b.distance, v = m === void 0 ? 100 : m, S = b.threshold, E = S === void 0 ? 0.6 :
          S, T = b.maxPatternLength, C = T === void 0 ? 32 : T, k = b.caseSensitive, w = k !== void 0 && k, O = b.tokenSeparator, P = O === void 0 ?
          / +/g : O, D = b.findAllMatches, M = D !== void 0 && D, N = b.minMatchCharLength, Q = N === void 0 ? 1 : N, V = b.id, X = V === void 0 ?
          null : V, H = b.keys, U = H === void 0 ? [] : H, z = b.shouldSort, re = z === void 0 || z, R = b.getFn, F = R === void 0 ? u : R, L = b.
          sortFn, W = L === void 0 ? function(fe, Ie) {
            return fe.score - Ie.score;
          } : L, J = b.tokenize, ie = J !== void 0 && J, ee = b.matchAllTokens, de = ee !== void 0 && ee, ae = b.includeMatches, ce = ae !==
          void 0 && ae, ue = b.includeScore, Se = ue !== void 0 && ue, ye = b.verbose, Oe = ye !== void 0 && ye;
          (function(fe, Ie) {
            if (!(fe instanceof Ie)) throw new TypeError("Cannot call a class as a function");
          })(this, d), this.options = { location: _, distance: v, threshold: E, maxPatternLength: C, isCaseSensitive: w, tokenSeparator: P, findAllMatches: M,
          minMatchCharLength: Q, id: X, keys: U, includeMatches: ce, includeScore: Se, shouldSort: re, getFn: F, sortFn: W, verbose: Oe, tokenize: ie,
          matchAllTokens: de }, this.setCollection(f), this._processKeys(U);
        }
        a(d, "e");
        var g, h, y;
        return g = d, (h = [{ key: "setCollection", value: /* @__PURE__ */ a(function(f) {
          return this.list = f, f;
        }, "value") }, { key: "_processKeys", value: /* @__PURE__ */ a(function(f) {
          if (this._keyWeights = {}, this._keyNames = [], f.length && typeof f[0] == "string") for (var b = 0, I = f.length; b < I; b += 1) {
            var _ = f[b];
            this._keyWeights[_] = 1, this._keyNames.push(_);
          }
          else {
            for (var m = null, v = null, S = 0, E = 0, T = f.length; E < T; E += 1) {
              var C = f[E];
              if (!C.hasOwnProperty("name")) throw new Error('Missing "name" property in key object');
              var k = C.name;
              if (this._keyNames.push(k), !C.hasOwnProperty("weight")) throw new Error('Missing "weight" property in key object');
              var w = C.weight;
              if (w < 0 || w > 1) throw new Error('"weight" property in key must bein the range of [0, 1)');
              v = v == null ? w : Math.max(v, w), m = m == null ? w : Math.min(m, w), this._keyWeights[k] = w, S += w;
            }
            if (S > 1) throw new Error("Total of weights cannot exceed 1");
          }
        }, "value") }, { key: "search", value: /* @__PURE__ */ a(function(f) {
          var b = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : { limit: !1 };
          this._log(`---------
Search pattern: "`.concat(f, '"'));
          var I = this._prepareSearchers(f), _ = I.tokenSearchers, m = I.fullSearcher, v = this._search(_, m);
          return this._computeScore(v), this.options.shouldSort && this._sort(v), b.limit && typeof b.limit == "number" && (v = v.slice(0, b.
          limit)), this._format(v);
        }, "value") }, { key: "_prepareSearchers", value: /* @__PURE__ */ a(function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "", b = [];
          if (this.options.tokenize) for (var I = f.split(this.options.tokenSeparator), _ = 0, m = I.length; _ < m; _ += 1) b.push(new r(I[_],
          this.options));
          return { tokenSearchers: b, fullSearcher: new r(f, this.options) };
        }, "value") }, { key: "_search", value: /* @__PURE__ */ a(function() {
          var f = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], b = arguments.length > 1 ? arguments[1] : void 0, I = this.
          list, _ = {}, m = [];
          if (typeof I[0] == "string") {
            for (var v = 0, S = I.length; v < S; v += 1) this._analyze({ key: "", value: I[v], record: v, index: v }, { resultMap: _, results: m,
            tokenSearchers: f, fullSearcher: b });
            return m;
          }
          for (var E = 0, T = I.length; E < T; E += 1) for (var C = I[E], k = 0, w = this._keyNames.length; k < w; k += 1) {
            var O = this._keyNames[k];
            this._analyze({ key: O, value: this.options.getFn(C, O), record: C, index: E }, { resultMap: _, results: m, tokenSearchers: f, fullSearcher: b });
          }
          return m;
        }, "value") }, { key: "_analyze", value: /* @__PURE__ */ a(function(f, b) {
          var I = this, _ = f.key, m = f.arrayIndex, v = m === void 0 ? -1 : m, S = f.value, E = f.record, T = f.index, C = b.tokenSearchers,
          k = C === void 0 ? [] : C, w = b.fullSearcher, O = b.resultMap, P = O === void 0 ? {} : O, D = b.results, M = D === void 0 ? [] : D;
          (/* @__PURE__ */ a(function N(Q, V, X, H) {
            if (V != null) {
              if (typeof V == "string") {
                var U = !1, z = -1, re = 0;
                I._log(`
Key: `.concat(_ === "" ? "--" : _));
                var R = w.search(V);
                if (I._log('Full text: "'.concat(V, '", score: ').concat(R.score)), I.options.tokenize) {
                  for (var F = V.split(I.options.tokenSeparator), L = F.length, W = [], J = 0, ie = k.length; J < ie; J += 1) {
                    var ee = k[J];
                    I._log(`
Pattern: "`.concat(ee.pattern, '"'));
                    for (var de = !1, ae = 0; ae < L; ae += 1) {
                      var ce = F[ae], ue = ee.search(ce), Se = {};
                      ue.isMatch ? (Se[ce] = ue.score, U = !0, de = !0, W.push(ue.score)) : (Se[ce] = 1, I.options.matchAllTokens || W.push(
                      1)), I._log('Token: "'.concat(ce, '", score: ').concat(Se[ce]));
                    }
                    de && (re += 1);
                  }
                  z = W[0];
                  for (var ye = W.length, Oe = 1; Oe < ye; Oe += 1) z += W[Oe];
                  z /= ye, I._log("Token score average:", z);
                }
                var fe = R.score;
                z > -1 && (fe = (fe + z) / 2), I._log("Score average:", fe);
                var Ie = !I.options.tokenize || !I.options.matchAllTokens || re >= k.length;
                if (I._log(`
Check Matches: `.concat(Ie)), (U || R.isMatch) && Ie) {
                  var Ce = { key: _, arrayIndex: Q, value: V, score: fe };
                  I.options.includeMatches && (Ce.matchedIndices = R.matchedIndices);
                  var Le = P[H];
                  Le ? Le.output.push(Ce) : (P[H] = { item: X, output: [Ce] }, M.push(P[H]));
                }
              } else if (c(V)) for (var tt = 0, De = V.length; tt < De; tt += 1) N(tt, V[tt], X, H);
            }
          }, "e"))(v, S, E, T);
>>>>>>> main
        }, "value") }, { key: "_computeScore", value: /* @__PURE__ */ a(function(f) {
          this._log(`

Computing score:
`);
<<<<<<< HEAD
          for (var y = this._keyWeights, S = !!Object.keys(y).length, E = 0, g = f.length; E < g; E += 1) {
            for (var v = f[E], I = v.output, w = I.length, O = 1, _ = 0; _ < w; _ += 1) {
              var k = I[_], T = k.key, C = S ? y[T] : 1, P = k.score === 0 && y && y[T] > 0 ? Number.EPSILON : k.score;
              O *= Math.pow(P, C);
            }
            v.score = O, this._log(v);
=======
          for (var b = this._keyWeights, I = !!Object.keys(b).length, _ = 0, m = f.length; _ < m; _ += 1) {
            for (var v = f[_], S = v.output, E = S.length, T = 1, C = 0; C < E; C += 1) {
              var k = S[C], w = k.key, O = I ? b[w] : 1, P = k.score === 0 && b && b[w] > 0 ? Number.EPSILON : k.score;
              T *= Math.pow(P, O);
            }
            v.score = T, this._log(v);
>>>>>>> main
          }
        }, "value") }, { key: "_sort", value: /* @__PURE__ */ a(function(f) {
          this._log(`

Sorting....`), f.sort(this.options.sortFn);
        }, "value") }, { key: "_format", value: /* @__PURE__ */ a(function(f) {
<<<<<<< HEAD
          var y = [];
          if (this.options.verbose) {
            var S = [];
=======
          var b = [];
          if (this.options.verbose) {
            var I = [];
>>>>>>> main
            this._log(`

Output:

<<<<<<< HEAD
`, JSON.stringify(f, function(k, T) {
              if (i(T) === "object" && T !== null) {
                if (S.indexOf(T) !== -1) return;
                S.push(T);
              }
              return T;
            }, 2)), S = null;
          }
          var E = [];
          this.options.includeMatches && E.push(function(k, T) {
            var C = k.output;
            T.matches = [];
            for (var P = 0, D = C.length; P < D; P += 1) {
              var M = C[P];
              if (M.matchedIndices.length !== 0) {
                var F = { indices: M.matchedIndices, value: M.value };
                M.key && (F.key = M.key), M.hasOwnProperty("arrayIndex") && M.arrayIndex > -1 && (F.arrayIndex = M.arrayIndex), T.matches.push(
                F);
              }
            }
          }), this.options.includeScore && E.push(function(k, T) {
            T.score = k.score;
          });
          for (var g = 0, v = f.length; g < v; g += 1) {
            var I = f[g];
            if (this.options.id && (I.item = this.options.getFn(I.item, this.options.id)[0]), E.length) {
              for (var w = { item: I.item }, O = 0, _ = E.length; O < _; O += 1) E[O](I, w);
              y.push(w);
            } else y.push(I.item);
          }
          return y;
        }, "value") }, { key: "_log", value: /* @__PURE__ */ a(function() {
          var f;
          this.options.verbose && (f = console).log.apply(f, arguments);
        }, "value") }]) && r(m.prototype, h), b && r(m, b), p;
      }();
      e.exports = d;
    }, function(e, t, o) {
      function i(c, d) {
        for (var p = 0; p < d.length; p++) {
          var m = d[p];
          m.enumerable = m.enumerable || !1, m.configurable = !0, "value" in m && (m.writable = !0), Object.defineProperty(c, m.key, m);
        }
      }
      a(i, "n");
      var r = o(2), n = o(3), l = o(6), u = function() {
        function c(h, b) {
          var f = b.location, y = f === void 0 ? 0 : f, S = b.distance, E = S === void 0 ? 100 : S, g = b.threshold, v = g === void 0 ? 0.6 :
          g, I = b.maxPatternLength, w = I === void 0 ? 32 : I, O = b.isCaseSensitive, _ = O !== void 0 && O, k = b.tokenSeparator, T = k ===
          void 0 ? / +/g : k, C = b.findAllMatches, P = C !== void 0 && C, D = b.minMatchCharLength, M = D === void 0 ? 1 : D, F = b.includeMatches,
          Z = F !== void 0 && F;
          (function(W, Q) {
            if (!(W instanceof Q)) throw new TypeError("Cannot call a class as a function");
          })(this, c), this.options = { location: y, distance: E, threshold: v, maxPatternLength: w, isCaseSensitive: _, tokenSeparator: T, findAllMatches: P,
          includeMatches: Z, minMatchCharLength: M }, this.pattern = _ ? h : h.toLowerCase(), this.pattern.length <= w && (this.patternAlphabet =
          l(this.pattern));
        }
        a(c, "e");
        var d, p, m;
        return d = c, (p = [{ key: "search", value: /* @__PURE__ */ a(function(h) {
          var b = this.options, f = b.isCaseSensitive, y = b.includeMatches;
          if (f || (h = h.toLowerCase()), this.pattern === h) {
            var S = { isMatch: !0, score: 0 };
            return y && (S.matchedIndices = [[0, h.length - 1]]), S;
          }
          var E = this.options, g = E.maxPatternLength, v = E.tokenSeparator;
          if (this.pattern.length > g) return r(h, this.pattern, v);
          var I = this.options, w = I.location, O = I.distance, _ = I.threshold, k = I.findAllMatches, T = I.minMatchCharLength;
          return n(h, this.pattern, this.patternAlphabet, { location: w, distance: O, threshold: _, findAllMatches: k, minMatchCharLength: T,
          includeMatches: y });
        }, "value") }]) && i(d.prototype, p), m && i(d, m), c;
=======
`, JSON.stringify(f, function(k, w) {
              if (i(w) === "object" && w !== null) {
                if (I.indexOf(w) !== -1) return;
                I.push(w);
              }
              return w;
            }, 2)), I = null;
          }
          var _ = [];
          this.options.includeMatches && _.push(function(k, w) {
            var O = k.output;
            w.matches = [];
            for (var P = 0, D = O.length; P < D; P += 1) {
              var M = O[P];
              if (M.matchedIndices.length !== 0) {
                var N = { indices: M.matchedIndices, value: M.value };
                M.key && (N.key = M.key), M.hasOwnProperty("arrayIndex") && M.arrayIndex > -1 && (N.arrayIndex = M.arrayIndex), w.matches.push(
                N);
              }
            }
          }), this.options.includeScore && _.push(function(k, w) {
            w.score = k.score;
          });
          for (var m = 0, v = f.length; m < v; m += 1) {
            var S = f[m];
            if (this.options.id && (S.item = this.options.getFn(S.item, this.options.id)[0]), _.length) {
              for (var E = { item: S.item }, T = 0, C = _.length; T < C; T += 1) _[T](S, E);
              b.push(E);
            } else b.push(S.item);
          }
          return b;
        }, "value") }, { key: "_log", value: /* @__PURE__ */ a(function() {
          var f;
          this.options.verbose && (f = console).log.apply(f, arguments);
        }, "value") }]) && n(g.prototype, h), y && n(g, y), d;
      }();
      e.exports = p;
    }, function(e, t, o) {
      function i(c, p) {
        for (var d = 0; d < p.length; d++) {
          var g = p[d];
          g.enumerable = g.enumerable || !1, g.configurable = !0, "value" in g && (g.writable = !0), Object.defineProperty(c, g.key, g);
        }
      }
      a(i, "n");
      var n = o(2), r = o(3), l = o(6), u = function() {
        function c(h, y) {
          var f = y.location, b = f === void 0 ? 0 : f, I = y.distance, _ = I === void 0 ? 100 : I, m = y.threshold, v = m === void 0 ? 0.6 :
          m, S = y.maxPatternLength, E = S === void 0 ? 32 : S, T = y.isCaseSensitive, C = T !== void 0 && T, k = y.tokenSeparator, w = k ===
          void 0 ? / +/g : k, O = y.findAllMatches, P = O !== void 0 && O, D = y.minMatchCharLength, M = D === void 0 ? 1 : D, N = y.includeMatches,
          Q = N !== void 0 && N;
          (function(V, X) {
            if (!(V instanceof X)) throw new TypeError("Cannot call a class as a function");
          })(this, c), this.options = { location: b, distance: _, threshold: v, maxPatternLength: E, isCaseSensitive: C, tokenSeparator: w, findAllMatches: P,
          includeMatches: Q, minMatchCharLength: M }, this.pattern = C ? h : h.toLowerCase(), this.pattern.length <= E && (this.patternAlphabet =
          l(this.pattern));
        }
        a(c, "e");
        var p, d, g;
        return p = c, (d = [{ key: "search", value: /* @__PURE__ */ a(function(h) {
          var y = this.options, f = y.isCaseSensitive, b = y.includeMatches;
          if (f || (h = h.toLowerCase()), this.pattern === h) {
            var I = { isMatch: !0, score: 0 };
            return b && (I.matchedIndices = [[0, h.length - 1]]), I;
          }
          var _ = this.options, m = _.maxPatternLength, v = _.tokenSeparator;
          if (this.pattern.length > m) return n(h, this.pattern, v);
          var S = this.options, E = S.location, T = S.distance, C = S.threshold, k = S.findAllMatches, w = S.minMatchCharLength;
          return r(h, this.pattern, this.patternAlphabet, { location: E, distance: T, threshold: C, findAllMatches: k, minMatchCharLength: w,
          includeMatches: b });
        }, "value") }]) && i(p.prototype, d), g && i(p, g), c;
>>>>>>> main
      }();
      e.exports = u;
    }, function(e, t) {
      var o = /[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g;
<<<<<<< HEAD
      e.exports = function(i, r) {
        var n = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : / +/g, l = new RegExp(r.replace(o, "\\$&").replace(n, "|")),
        u = i.match(l), c = !!u, d = [];
        if (c) for (var p = 0, m = u.length; p < m; p += 1) {
          var h = u[p];
          d.push([i.indexOf(h), h.length - 1]);
        }
        return { score: c ? 0.5 : 1, isMatch: c, matchedIndices: d };
      };
    }, function(e, t, o) {
      var i = o(4), r = o(5);
      e.exports = function(n, l, u, c) {
        for (var d = c.location, p = d === void 0 ? 0 : d, m = c.distance, h = m === void 0 ? 100 : m, b = c.threshold, f = b === void 0 ? 0.6 :
        b, y = c.findAllMatches, S = y !== void 0 && y, E = c.minMatchCharLength, g = E === void 0 ? 1 : E, v = c.includeMatches, I = v !== void 0 &&
        v, w = p, O = n.length, _ = f, k = n.indexOf(l, w), T = l.length, C = [], P = 0; P < O; P += 1) C[P] = 0;
        if (k !== -1) {
          var D = i(l, { errors: 0, currentLocation: k, expectedLocation: w, distance: h });
          if (_ = Math.min(D, _), (k = n.lastIndexOf(l, w + T)) !== -1) {
            var M = i(l, { errors: 0, currentLocation: k, expectedLocation: w, distance: h });
            _ = Math.min(M, _);
          }
        }
        k = -1;
        for (var F = [], Z = 1, W = T + O, Q = 1 << (T <= 31 ? T - 1 : 30), H = 0; H < T; H += 1) {
          for (var G = 0, z = W; G < z; )
            i(l, { errors: H, currentLocation: w + z, expectedLocation: w, distance: h }) <= _ ? G = z : W = z, z = Math.floor((W - G) / 2 +
            G);
          W = z;
          var re = Math.max(1, w - z + 1), R = S ? O : Math.min(w + z, O) + T, B = Array(R + 2);
          B[R + 1] = (1 << H) - 1;
          for (var L = R; L >= re; L -= 1) {
            var $ = L - 1, J = u[n.charAt($)];
            if (J && (C[$] = 1), B[L] = (B[L + 1] << 1 | 1) & J, H !== 0 && (B[L] |= (F[L + 1] | F[L]) << 1 | 1 | F[L + 1]), B[L] & Q && (Z =
            i(l, { errors: H, currentLocation: $, expectedLocation: w, distance: h })) <= _) {
              if (_ = Z, (k = $) <= w) break;
              re = Math.max(1, 2 * w - k);
            }
          }
          if (i(l, { errors: H + 1, currentLocation: w, expectedLocation: w, distance: h }) > _) break;
          F = B;
        }
        var ie = { isMatch: k >= 0, score: Z === 0 ? 1e-3 : Z };
        return I && (ie.matchedIndices = r(C, g)), ie;
      };
    }, function(e, t) {
      e.exports = function(o, i) {
        var r = i.errors, n = r === void 0 ? 0 : r, l = i.currentLocation, u = l === void 0 ? 0 : l, c = i.expectedLocation, d = c === void 0 ?
        0 : c, p = i.distance, m = p === void 0 ? 100 : p, h = n / o.length, b = Math.abs(d - u);
        return m ? h + b / m : b ? 1 : h;
=======
      e.exports = function(i, n) {
        var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : / +/g, l = new RegExp(n.replace(o, "\\$&").replace(r, "|")),
        u = i.match(l), c = !!u, p = [];
        if (c) for (var d = 0, g = u.length; d < g; d += 1) {
          var h = u[d];
          p.push([i.indexOf(h), h.length - 1]);
        }
        return { score: c ? 0.5 : 1, isMatch: c, matchedIndices: p };
      };
    }, function(e, t, o) {
      var i = o(4), n = o(5);
      e.exports = function(r, l, u, c) {
        for (var p = c.location, d = p === void 0 ? 0 : p, g = c.distance, h = g === void 0 ? 100 : g, y = c.threshold, f = y === void 0 ? 0.6 :
        y, b = c.findAllMatches, I = b !== void 0 && b, _ = c.minMatchCharLength, m = _ === void 0 ? 1 : _, v = c.includeMatches, S = v !== void 0 &&
        v, E = d, T = r.length, C = f, k = r.indexOf(l, E), w = l.length, O = [], P = 0; P < T; P += 1) O[P] = 0;
        if (k !== -1) {
          var D = i(l, { errors: 0, currentLocation: k, expectedLocation: E, distance: h });
          if (C = Math.min(D, C), (k = r.lastIndexOf(l, E + w)) !== -1) {
            var M = i(l, { errors: 0, currentLocation: k, expectedLocation: E, distance: h });
            C = Math.min(M, C);
          }
        }
        k = -1;
        for (var N = [], Q = 1, V = w + T, X = 1 << (w <= 31 ? w - 1 : 30), H = 0; H < w; H += 1) {
          for (var U = 0, z = V; U < z; )
            i(l, { errors: H, currentLocation: E + z, expectedLocation: E, distance: h }) <= C ? U = z : V = z, z = Math.floor((V - U) / 2 +
            U);
          V = z;
          var re = Math.max(1, E - z + 1), R = I ? T : Math.min(E + z, T) + w, F = Array(R + 2);
          F[R + 1] = (1 << H) - 1;
          for (var L = R; L >= re; L -= 1) {
            var W = L - 1, J = u[r.charAt(W)];
            if (J && (O[W] = 1), F[L] = (F[L + 1] << 1 | 1) & J, H !== 0 && (F[L] |= (N[L + 1] | N[L]) << 1 | 1 | N[L + 1]), F[L] & X && (Q =
            i(l, { errors: H, currentLocation: W, expectedLocation: E, distance: h })) <= C) {
              if (C = Q, (k = W) <= E) break;
              re = Math.max(1, 2 * E - k);
            }
          }
          if (i(l, { errors: H + 1, currentLocation: E, expectedLocation: E, distance: h }) > C) break;
          N = F;
        }
        var ie = { isMatch: k >= 0, score: Q === 0 ? 1e-3 : Q };
        return S && (ie.matchedIndices = n(O, m)), ie;
      };
    }, function(e, t) {
      e.exports = function(o, i) {
        var n = i.errors, r = n === void 0 ? 0 : n, l = i.currentLocation, u = l === void 0 ? 0 : l, c = i.expectedLocation, p = c === void 0 ?
        0 : c, d = i.distance, g = d === void 0 ? 100 : d, h = r / o.length, y = Math.abs(p - u);
        return g ? h + y / g : y ? 1 : h;
>>>>>>> main
      };
    }, function(e, t) {
      e.exports = function() {
        for (var o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], i = arguments.length > 1 && arguments[1] !== void 0 ?
<<<<<<< HEAD
        arguments[1] : 1, r = [], n = -1, l = -1, u = 0, c = o.length; u < c; u += 1) {
          var d = o[u];
          d && n === -1 ? n = u : d || n === -1 || ((l = u - 1) - n + 1 >= i && r.push([n, l]), n = -1);
        }
        return o[u - 1] && u - n >= i && r.push([n, u - 1]), r;
      };
    }, function(e, t) {
      e.exports = function(o) {
        for (var i = {}, r = o.length, n = 0; n < r; n += 1) i[o.charAt(n)] = 0;
        for (var l = 0; l < r; l += 1) i[o.charAt(l)] |= 1 << r - l - 1;
=======
        arguments[1] : 1, n = [], r = -1, l = -1, u = 0, c = o.length; u < c; u += 1) {
          var p = o[u];
          p && r === -1 ? r = u : p || r === -1 || ((l = u - 1) - r + 1 >= i && n.push([r, l]), r = -1);
        }
        return o[u - 1] && u - r >= i && n.push([r, u - 1]), n;
      };
    }, function(e, t) {
      e.exports = function(o) {
        for (var i = {}, n = o.length, r = 0; r < n; r += 1) i[o.charAt(r)] = 0;
        for (var l = 0; l < n; l += 1) i[o.charAt(l)] |= 1 << n - l - 1;
>>>>>>> main
        return i;
      };
    }, function(e, t) {
      var o = /* @__PURE__ */ a(function(l) {
        return Array.isArray ? Array.isArray(l) : Object.prototype.toString.call(l) === "[object Array]";
      }, "r"), i = /* @__PURE__ */ a(function(l) {
        return l == null ? "" : function(u) {
          if (typeof u == "string") return u;
          var c = u + "";
          return c == "0" && 1 / u == -1 / 0 ? "-0" : c;
        }(l);
<<<<<<< HEAD
      }, "n"), r = /* @__PURE__ */ a(function(l) {
        return typeof l == "string";
      }, "o"), n = /* @__PURE__ */ a(function(l) {
=======
      }, "n"), n = /* @__PURE__ */ a(function(l) {
        return typeof l == "string";
      }, "o"), r = /* @__PURE__ */ a(function(l) {
>>>>>>> main
        return typeof l == "number";
      }, "i");
      e.exports = { get: /* @__PURE__ */ a(function(l, u) {
        var c = [];
<<<<<<< HEAD
        return (/* @__PURE__ */ a(function d(p, m) {
          if (m) {
            var h = m.indexOf("."), b = m, f = null;
            h !== -1 && (b = m.slice(0, h), f = m.slice(h + 1));
            var y = p[b];
            if (y != null) if (f || !r(y) && !n(y)) if (o(y)) for (var S = 0, E = y.length; S < E; S += 1) d(y[S], f);
            else f && d(y, f);
            else c.push(i(y));
          } else c.push(p);
        }, "e"))(l, u), c;
      }, "get"), isArray: o, isString: r, isNum: n, toString: i };
=======
        return (/* @__PURE__ */ a(function p(d, g) {
          if (g) {
            var h = g.indexOf("."), y = g, f = null;
            h !== -1 && (y = g.slice(0, h), f = g.slice(h + 1));
            var b = d[y];
            if (b != null) if (f || !n(b) && !r(b)) if (o(b)) for (var I = 0, _ = b.length; I < _; I += 1) p(b[I], f);
            else f && p(b, f);
            else c.push(i(b));
          } else c.push(d);
        }, "e"))(l, u), c;
      }, "get"), isArray: o, isString: n, isNum: r, toString: i };
>>>>>>> main
    }]);
  });
});

// ../node_modules/store2/dist/store2.js
<<<<<<< HEAD
var Wd = we((gn, yn) => {
  (function(e, t) {
    var o = {
      version: "2.14.4",
=======
var md = Ee((Xr, Zr) => {
  (function(e, t) {
    var o = {
      version: "2.14.2",
>>>>>>> main
      areas: {},
      apis: {},
      nsdelim: ".",
      // utilities
<<<<<<< HEAD
      inherit: /* @__PURE__ */ a(function(r, n) {
        for (var l in r)
          n.hasOwnProperty(l) || Object.defineProperty(n, l, Object.getOwnPropertyDescriptor(r, l));
        return n;
      }, "inherit"),
      stringify: /* @__PURE__ */ a(function(r, n) {
        return r === void 0 || typeof r == "function" ? r + "" : JSON.stringify(r, n || o.replace);
      }, "stringify"),
      parse: /* @__PURE__ */ a(function(r, n) {
        try {
          return JSON.parse(r, n || o.revive);
        } catch {
          return r;
        }
      }, "parse"),
      // extension hooks
      fn: /* @__PURE__ */ a(function(r, n) {
        o.storeAPI[r] = n;
        for (var l in o.apis)
          o.apis[l][r] = n;
      }, "fn"),
      get: /* @__PURE__ */ a(function(r, n) {
        return r.getItem(n);
      }, "get"),
      set: /* @__PURE__ */ a(function(r, n, l) {
        r.setItem(n, l);
      }, "set"),
      remove: /* @__PURE__ */ a(function(r, n) {
        r.removeItem(n);
      }, "remove"),
      key: /* @__PURE__ */ a(function(r, n) {
        return r.key(n);
      }, "key"),
      length: /* @__PURE__ */ a(function(r) {
        return r.length;
      }, "length"),
      clear: /* @__PURE__ */ a(function(r) {
        r.clear();
      }, "clear"),
      // core functions
      Store: /* @__PURE__ */ a(function(r, n, l) {
        var u = o.inherit(o.storeAPI, function(d, p, m) {
          return arguments.length === 0 ? u.getAll() : typeof p == "function" ? u.transact(d, p, m) : p !== void 0 ? u.set(d, p, m) : typeof d ==
          "string" || typeof d == "number" ? u.get(d) : typeof d == "function" ? u.each(d) : d ? u.setAll(d, p) : u.clear();
        });
        u._id = r;
        try {
          var c = "__store2_test";
          n.setItem(c, "ok"), u._area = n, n.removeItem(c);
        } catch {
          u._area = o.storage("fake");
        }
        return u._ns = l || "", o.areas[r] || (o.areas[r] = u._area), o.apis[u._ns + u._id] || (o.apis[u._ns + u._id] = u), u;
      }, "Store"),
      storeAPI: {
        // admin functions
        area: /* @__PURE__ */ a(function(r, n) {
          var l = this[r];
          return (!l || !l.area) && (l = o.Store(r, n, this._ns), this[r] || (this[r] = l)), l;
        }, "area"),
        namespace: /* @__PURE__ */ a(function(r, n, l) {
          if (l = l || this._delim || o.nsdelim, !r)
            return this._ns ? this._ns.substring(0, this._ns.length - l.length) : "";
          var u = r, c = this[u];
          if ((!c || !c.namespace) && (c = o.Store(this._id, this._area, this._ns + u + l), c._delim = l, this[u] || (this[u] = c), !n))
            for (var d in o.areas)
              c.area(d, o.areas[d]);
          return c;
        }, "namespace"),
        isFake: /* @__PURE__ */ a(function(r) {
          return r ? (this._real = this._area, this._area = o.storage("fake")) : r === !1 && (this._area = this._real || this._area), this._area.
=======
      inherit: /* @__PURE__ */ a(function(n, r) {
        for (var l in n)
          r.hasOwnProperty(l) || Object.defineProperty(r, l, Object.getOwnPropertyDescriptor(n, l));
        return r;
      }, "inherit"),
      stringify: /* @__PURE__ */ a(function(n, r) {
        return n === void 0 || typeof n == "function" ? n + "" : JSON.stringify(n, r || o.replace);
      }, "stringify"),
      parse: /* @__PURE__ */ a(function(n, r) {
        try {
          return JSON.parse(n, r || o.revive);
        } catch {
          return n;
        }
      }, "parse"),
      // extension hooks
      fn: /* @__PURE__ */ a(function(n, r) {
        o.storeAPI[n] = r;
        for (var l in o.apis)
          o.apis[l][n] = r;
      }, "fn"),
      get: /* @__PURE__ */ a(function(n, r) {
        return n.getItem(r);
      }, "get"),
      set: /* @__PURE__ */ a(function(n, r, l) {
        n.setItem(r, l);
      }, "set"),
      remove: /* @__PURE__ */ a(function(n, r) {
        n.removeItem(r);
      }, "remove"),
      key: /* @__PURE__ */ a(function(n, r) {
        return n.key(r);
      }, "key"),
      length: /* @__PURE__ */ a(function(n) {
        return n.length;
      }, "length"),
      clear: /* @__PURE__ */ a(function(n) {
        n.clear();
      }, "clear"),
      // core functions
      Store: /* @__PURE__ */ a(function(n, r, l) {
        var u = o.inherit(o.storeAPI, function(p, d, g) {
          return arguments.length === 0 ? u.getAll() : typeof d == "function" ? u.transact(p, d, g) : d !== void 0 ? u.set(p, d, g) : typeof p ==
          "string" || typeof p == "number" ? u.get(p) : typeof p == "function" ? u.each(p) : p ? u.setAll(p, d) : u.clear();
        });
        u._id = n;
        try {
          var c = "__store2_test";
          r.setItem(c, "ok"), u._area = r, r.removeItem(c);
        } catch {
          u._area = o.storage("fake");
        }
        return u._ns = l || "", o.areas[n] || (o.areas[n] = u._area), o.apis[u._ns + u._id] || (o.apis[u._ns + u._id] = u), u;
      }, "Store"),
      storeAPI: {
        // admin functions
        area: /* @__PURE__ */ a(function(n, r) {
          var l = this[n];
          return (!l || !l.area) && (l = o.Store(n, r, this._ns), this[n] || (this[n] = l)), l;
        }, "area"),
        namespace: /* @__PURE__ */ a(function(n, r, l) {
          if (l = l || this._delim || o.nsdelim, !n)
            return this._ns ? this._ns.substring(0, this._ns.length - l.length) : "";
          var u = n, c = this[u];
          if ((!c || !c.namespace) && (c = o.Store(this._id, this._area, this._ns + u + l), c._delim = l, this[u] || (this[u] = c), !r))
            for (var p in o.areas)
              c.area(p, o.areas[p]);
          return c;
        }, "namespace"),
        isFake: /* @__PURE__ */ a(function(n) {
          return n ? (this._real = this._area, this._area = o.storage("fake")) : n === !1 && (this._area = this._real || this._area), this._area.
>>>>>>> main
          name === "fake";
        }, "isFake"),
        toString: /* @__PURE__ */ a(function() {
          return "store" + (this._ns ? "." + this.namespace() : "") + "[" + this._id + "]";
        }, "toString"),
        // storage functions
<<<<<<< HEAD
        has: /* @__PURE__ */ a(function(r) {
          return this._area.has ? this._area.has(this._in(r)) : this._in(r) in this._area;
=======
        has: /* @__PURE__ */ a(function(n) {
          return this._area.has ? this._area.has(this._in(n)) : this._in(n) in this._area;
>>>>>>> main
        }, "has"),
        size: /* @__PURE__ */ a(function() {
          return this.keys().length;
        }, "size"),
<<<<<<< HEAD
        each: /* @__PURE__ */ a(function(r, n) {
          for (var l = 0, u = o.length(this._area); l < u; l++) {
            var c = this._out(o.key(this._area, l));
            if (c !== void 0 && r.call(this, c, this.get(c), n) === !1)
              break;
            u > o.length(this._area) && (u--, l--);
          }
          return n || this;
        }, "each"),
        keys: /* @__PURE__ */ a(function(r) {
          return this.each(function(n, l, u) {
            u.push(n);
          }, r || []);
        }, "keys"),
        get: /* @__PURE__ */ a(function(r, n) {
          var l = o.get(this._area, this._in(r)), u;
          return typeof n == "function" && (u = n, n = null), l !== null ? o.parse(l, u) : n ?? l;
        }, "get"),
        getAll: /* @__PURE__ */ a(function(r) {
          return this.each(function(n, l, u) {
            u[n] = l;
          }, r || {});
        }, "getAll"),
        transact: /* @__PURE__ */ a(function(r, n, l) {
          var u = this.get(r, l), c = n(u);
          return this.set(r, c === void 0 ? u : c), this;
        }, "transact"),
        set: /* @__PURE__ */ a(function(r, n, l) {
          var u = this.get(r), c;
          return u != null && l === !1 ? n : (typeof l == "function" && (c = l, l = void 0), o.set(this._area, this._in(r), o.stringify(n, c),
          l) || u);
        }, "set"),
        setAll: /* @__PURE__ */ a(function(r, n) {
          var l, u;
          for (var c in r)
            u = r[c], this.set(c, u, n) !== u && (l = !0);
          return l;
        }, "setAll"),
        add: /* @__PURE__ */ a(function(r, n, l) {
          var u = this.get(r);
          if (u instanceof Array)
            n = u.concat(n);
          else if (u !== null) {
            var c = typeof u;
            if (c === typeof n && c === "object") {
              for (var d in n)
                u[d] = n[d];
              n = u;
            } else
              n = u + n;
          }
          return o.set(this._area, this._in(r), o.stringify(n, l)), n;
        }, "add"),
        remove: /* @__PURE__ */ a(function(r, n) {
          var l = this.get(r, n);
          return o.remove(this._area, this._in(r)), l;
        }, "remove"),
        clear: /* @__PURE__ */ a(function() {
          return this._ns ? this.each(function(r) {
            o.remove(this._area, this._in(r));
          }, 1) : o.clear(this._area), this;
        }, "clear"),
        clearAll: /* @__PURE__ */ a(function() {
          var r = this._area;
          for (var n in o.areas)
            o.areas.hasOwnProperty(n) && (this._area = o.areas[n], this.clear());
          return this._area = r, this;
        }, "clearAll"),
        // internal use functions
        _in: /* @__PURE__ */ a(function(r) {
          return typeof r != "string" && (r = o.stringify(r)), this._ns ? this._ns + r : r;
        }, "_in"),
        _out: /* @__PURE__ */ a(function(r) {
          return this._ns ? r && r.indexOf(this._ns) === 0 ? r.substring(this._ns.length) : void 0 : (
            // so each() knows to skip it
            r
=======
        each: /* @__PURE__ */ a(function(n, r) {
          for (var l = 0, u = o.length(this._area); l < u; l++) {
            var c = this._out(o.key(this._area, l));
            if (c !== void 0 && n.call(this, c, this.get(c), r) === !1)
              break;
            u > o.length(this._area) && (u--, l--);
          }
          return r || this;
        }, "each"),
        keys: /* @__PURE__ */ a(function(n) {
          return this.each(function(r, l, u) {
            u.push(r);
          }, n || []);
        }, "keys"),
        get: /* @__PURE__ */ a(function(n, r) {
          var l = o.get(this._area, this._in(n)), u;
          return typeof r == "function" && (u = r, r = null), l !== null ? o.parse(l, u) : r ?? l;
        }, "get"),
        getAll: /* @__PURE__ */ a(function(n) {
          return this.each(function(r, l, u) {
            u[r] = l;
          }, n || {});
        }, "getAll"),
        transact: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n, l), c = r(u);
          return this.set(n, c === void 0 ? u : c), this;
        }, "transact"),
        set: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n), c;
          return u != null && l === !1 ? r : (typeof l == "function" && (c = l, l = void 0), o.set(this._area, this._in(n), o.stringify(r, c),
          l) || u);
        }, "set"),
        setAll: /* @__PURE__ */ a(function(n, r) {
          var l, u;
          for (var c in n)
            u = n[c], this.set(c, u, r) !== u && (l = !0);
          return l;
        }, "setAll"),
        add: /* @__PURE__ */ a(function(n, r, l) {
          var u = this.get(n);
          if (u instanceof Array)
            r = u.concat(r);
          else if (u !== null) {
            var c = typeof u;
            if (c === typeof r && c === "object") {
              for (var p in r)
                u[p] = r[p];
              r = u;
            } else
              r = u + r;
          }
          return o.set(this._area, this._in(n), o.stringify(r, l)), r;
        }, "add"),
        remove: /* @__PURE__ */ a(function(n, r) {
          var l = this.get(n, r);
          return o.remove(this._area, this._in(n)), l;
        }, "remove"),
        clear: /* @__PURE__ */ a(function() {
          return this._ns ? this.each(function(n) {
            o.remove(this._area, this._in(n));
          }, 1) : o.clear(this._area), this;
        }, "clear"),
        clearAll: /* @__PURE__ */ a(function() {
          var n = this._area;
          for (var r in o.areas)
            o.areas.hasOwnProperty(r) && (this._area = o.areas[r], this.clear());
          return this._area = n, this;
        }, "clearAll"),
        // internal use functions
        _in: /* @__PURE__ */ a(function(n) {
          return typeof n != "string" && (n = o.stringify(n)), this._ns ? this._ns + n : n;
        }, "_in"),
        _out: /* @__PURE__ */ a(function(n) {
          return this._ns ? n && n.indexOf(this._ns) === 0 ? n.substring(this._ns.length) : void 0 : (
            // so each() knows to skip it
            n
>>>>>>> main
          );
        }, "_out")
      },
      // end _.storeAPI
<<<<<<< HEAD
      storage: /* @__PURE__ */ a(function(r) {
        return o.inherit(o.storageAPI, { items: {}, name: r });
      }, "storage"),
      storageAPI: {
        length: 0,
        has: /* @__PURE__ */ a(function(r) {
          return this.items.hasOwnProperty(r);
        }, "has"),
        key: /* @__PURE__ */ a(function(r) {
          var n = 0;
          for (var l in this.items)
            if (this.has(l) && r === n++)
              return l;
        }, "key"),
        setItem: /* @__PURE__ */ a(function(r, n) {
          this.has(r) || this.length++, this.items[r] = n;
        }, "setItem"),
        removeItem: /* @__PURE__ */ a(function(r) {
          this.has(r) && (delete this.items[r], this.length--);
        }, "removeItem"),
        getItem: /* @__PURE__ */ a(function(r) {
          return this.has(r) ? this.items[r] : null;
        }, "getItem"),
        clear: /* @__PURE__ */ a(function() {
          for (var r in this.items)
            this.removeItem(r);
=======
      storage: /* @__PURE__ */ a(function(n) {
        return o.inherit(o.storageAPI, { items: {}, name: n });
      }, "storage"),
      storageAPI: {
        length: 0,
        has: /* @__PURE__ */ a(function(n) {
          return this.items.hasOwnProperty(n);
        }, "has"),
        key: /* @__PURE__ */ a(function(n) {
          var r = 0;
          for (var l in this.items)
            if (this.has(l) && n === r++)
              return l;
        }, "key"),
        setItem: /* @__PURE__ */ a(function(n, r) {
          this.has(n) || this.length++, this.items[n] = r;
        }, "setItem"),
        removeItem: /* @__PURE__ */ a(function(n) {
          this.has(n) && (delete this.items[n], this.length--);
        }, "removeItem"),
        getItem: /* @__PURE__ */ a(function(n) {
          return this.has(n) ? this.items[n] : null;
        }, "getItem"),
        clear: /* @__PURE__ */ a(function() {
          for (var n in this.items)
            this.removeItem(n);
>>>>>>> main
        }, "clear")
      }
      // end _.storageAPI
    }, i = (
      // safely set this up (throws error in IE10/32bit mode for local files)
      o.Store("local", function() {
        try {
          return localStorage;
        } catch {
        }
      }())
    );
    i.local = i, i._ = o, i.area("session", function() {
      try {
        return sessionStorage;
      } catch {
      }
    }()), i.area("page", o.storage("page")), typeof t == "function" && t.amd !== void 0 ? t("store2", [], function() {
      return i;
<<<<<<< HEAD
    }) : typeof yn < "u" && yn.exports ? yn.exports = i : (e.store && (o.conflict = e.store), e.store = i);
  })(gn, gn && gn.define);
});

// global-externals:react
var s = __REACT__, { Children: uw, Component: Le, Fragment: Ee, Profiler: cw, PureComponent: pw, StrictMode: dw, Suspense: fw, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: mw,
act: hw, cloneElement: Zs, createContext: Qt, createElement: gw, createFactory: yw, createRef: bw, forwardRef: Js, isValidElement: vw, lazy: xw,
memo: Tt, startTransition: Iw, unstable_act: Sw, useCallback: A, useContext: Go, useDebugValue: ww, useDeferredValue: ea, useEffect: V, useId: Ew,
useImperativeHandle: Tw, useInsertionEffect: Cw, useLayoutEffect: Xt, useMemo: U, useReducer: Zt, useRef: q, useState: K, useSyncExternalStore: _w,
useTransition: ta, version: kw } = __REACT__;

// global-externals:storybook/internal/channels
var Ow = __STORYBOOK_CHANNELS__, { Channel: Pw, HEARTBEAT_INTERVAL: Aw, HEARTBEAT_MAX_LATENCY: Dw, PostMessageTransport: Mw, WebsocketTransport: Lw,
createBrowserChannel: oa } = __STORYBOOK_CHANNELS__;

// global-externals:storybook/internal/core-events
var Fw = __STORYBOOK_CORE_EVENTS__, { ARGTYPES_INFO_REQUEST: ra, ARGTYPES_INFO_RESPONSE: na, CHANNEL_CREATED: ia, CHANNEL_WS_DISCONNECT: sa,
CONFIG_ERROR: Rw, CREATE_NEW_STORYFILE_REQUEST: aa, CREATE_NEW_STORYFILE_RESPONSE: la, CURRENT_STORY_WAS_SET: Bw, DOCS_PREPARED: Hw, DOCS_RENDERED: zw,
FILE_COMPONENT_SEARCH_REQUEST: ua, FILE_COMPONENT_SEARCH_RESPONSE: qo, FORCE_REMOUNT: xn, FORCE_RE_RENDER: Ww, GLOBALS_UPDATED: Vw, NAVIGATE_URL: jw,
PLAY_FUNCTION_THREW_EXCEPTION: Kw, PRELOAD_ENTRIES: Ct, PREVIEW_BUILDER_PROGRESS: ca, PREVIEW_KEYDOWN: $w, REGISTER_SUBSCRIPTION: Uw, REQUEST_WHATS_NEW_DATA: Gw,
RESET_STORY_ARGS: qw, RESULT_WHATS_NEW_DATA: Yw, SAVE_STORY_REQUEST: pa, SAVE_STORY_RESPONSE: da, SELECT_STORY: Qw, SET_CONFIG: Xw, SET_CURRENT_STORY: fa,
SET_FILTER: Zw, SET_GLOBALS: Jw, SET_INDEX: eE, SET_STORIES: tE, SET_WHATS_NEW_CACHE: oE, SHARED_STATE_CHANGED: rE, SHARED_STATE_SET: nE, STORIES_COLLAPSE_ALL: ho,
STORIES_EXPAND_ALL: In, STORY_ARGS_UPDATED: iE, STORY_CHANGED: sE, STORY_ERRORED: aE, STORY_FINISHED: lE, STORY_HOT_UPDATED: uE, STORY_INDEX_INVALIDATED: cE,
STORY_MISSING: pE, STORY_PREPARED: dE, STORY_RENDERED: fE, STORY_RENDER_PHASE_CHANGED: mE, STORY_SPECIFIED: hE, STORY_THREW_EXCEPTION: gE, STORY_UNCHANGED: yE,
TELEMETRY_ERROR: bE, TOGGLE_WHATS_NEW_NOTIFICATIONS: vE, UNHANDLED_ERRORS_WHILE_PLAYING: xE, UPDATE_GLOBALS: IE, UPDATE_QUERY_PARAMS: SE, UPDATE_STORY_ARGS: wE } = __STORYBOOK_CORE_EVENTS__;
=======
    }) : typeof Zr < "u" && Zr.exports ? Zr.exports = i : (e.store && (o.conflict = e.store), e.store = i);
  })(Xr, Xr && Xr.define);
});

// global-externals:react
var s = __REACT__, { Children: H0, Component: Re, Fragment: _e, Profiler: B0, PureComponent: z0, StrictMode: W0, Suspense: j0, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: V0,
cloneElement: us, createContext: jt, createElement: K0, createFactory: $0, createRef: U0, forwardRef: cs, isValidElement: G0, lazy: Y0, memo: no,
startTransition: q0, unstable_act: Q0, useCallback: A, useContext: ko, useDebugValue: X0, useDeferredValue: ps, useEffect: j, useId: Z0, useImperativeHandle: J0,
useInsertionEffect: ev, useLayoutEffect: ft, useMemo: K, useReducer: Vt, useRef: Y, useState: $, useSyncExternalStore: tv, useTransition: ds,
version: ov } = __REACT__;

// global-externals:@storybook/core/channels
var rv = __STORYBOOK_CHANNELS__, { Channel: nv, HEARTBEAT_INTERVAL: iv, HEARTBEAT_MAX_LATENCY: sv, PostMessageTransport: av, WebsocketTransport: lv,
createBrowserChannel: fs } = __STORYBOOK_CHANNELS__;
>>>>>>> main

// ../node_modules/@storybook/global/dist/index.mjs
var se = (() => {
  let e;
  return typeof window < "u" ? e = window : typeof globalThis < "u" ? e = globalThis : typeof global < "u" ? e = global : typeof self < "u" ?
  e = self : e = {}, e;
})();

// global-externals:@storybook/icons
<<<<<<< HEAD
var Jn = {};
mf(Jn, {
  AccessibilityAltIcon: () => bf,
  AccessibilityIcon: () => vf,
  AccessibilityIgnoredIcon: () => xf,
  AddIcon: () => If,
  AdminIcon: () => Sf,
  AlertAltIcon: () => wf,
  AlertIcon: () => go,
  AlignLeftIcon: () => Ef,
  AlignRightIcon: () => Tf,
  AppleIcon: () => Cf,
  ArrowBottomLeftIcon: () => _f,
  ArrowBottomRightIcon: () => kf,
  ArrowDownIcon: () => Of,
  ArrowLeftIcon: () => Sn,
  ArrowRightIcon: () => Pf,
  ArrowSolidDownIcon: () => Af,
  ArrowSolidLeftIcon: () => Df,
  ArrowSolidRightIcon: () => Mf,
  ArrowSolidUpIcon: () => Lf,
  ArrowTopLeftIcon: () => Nf,
  ArrowTopRightIcon: () => Ff,
  ArrowUpIcon: () => Rf,
  AzureDevOpsIcon: () => Bf,
  BackIcon: () => Hf,
  BasketIcon: () => zf,
  BatchAcceptIcon: () => Wf,
  BatchDenyIcon: () => Vf,
  BeakerIcon: () => jf,
  BellIcon: () => Kf,
  BitbucketIcon: () => $f,
  BoldIcon: () => Uf,
  BookIcon: () => Gf,
  BookmarkHollowIcon: () => qf,
  BookmarkIcon: () => Yf,
  BottomBarIcon: () => yo,
  BottomBarToggleIcon: () => wn,
  BoxIcon: () => Qf,
  BranchIcon: () => Xf,
  BrowserIcon: () => Zf,
  ButtonIcon: () => Jf,
  CPUIcon: () => em,
  CalendarIcon: () => tm,
  CameraIcon: () => om,
  CameraStabilizeIcon: () => rm,
  CategoryIcon: () => nm,
  CertificateIcon: () => im,
  ChangedIcon: () => sm,
  ChatIcon: () => am,
  CheckIcon: () => Be,
  ChevronDownIcon: () => _t,
  ChevronLeftIcon: () => lm,
  ChevronRightIcon: () => En,
  ChevronSmallDownIcon: () => um,
  ChevronSmallLeftIcon: () => cm,
  ChevronSmallRightIcon: () => pm,
  ChevronSmallUpIcon: () => Tn,
  ChevronUpIcon: () => dm,
  ChromaticIcon: () => fm,
  ChromeIcon: () => mm,
  CircleHollowIcon: () => hm,
  CircleIcon: () => Cn,
  ClearIcon: () => gm,
  CloseAltIcon: () => bo,
  CloseIcon: () => je,
  CloudHollowIcon: () => ym,
  CloudIcon: () => bm,
  CogIcon: () => Yo,
  CollapseIcon: () => _n,
  CommandIcon: () => vm,
  CommentAddIcon: () => xm,
  CommentIcon: () => Im,
  CommentsIcon: () => Sm,
  CommitIcon: () => wm,
  CompassIcon: () => Em,
  ComponentDrivenIcon: () => Tm,
  ComponentIcon: () => Qo,
  ContrastIcon: () => Cm,
  ContrastIgnoredIcon: () => _m,
  ControlsIcon: () => km,
  CopyIcon: () => Om,
  CreditIcon: () => Pm,
  CrossIcon: () => Am,
  DashboardIcon: () => Dm,
  DatabaseIcon: () => Mm,
  DeleteIcon: () => Lm,
  DiamondIcon: () => Nm,
  DirectionIcon: () => Fm,
  DiscordIcon: () => Rm,
  DocChartIcon: () => Bm,
  DocListIcon: () => Hm,
  DocumentIcon: () => kt,
  DownloadIcon: () => zm,
  DragIcon: () => Wm,
  EditIcon: () => Vm,
  EllipsisIcon: () => kn,
  EmailIcon: () => jm,
  ExpandAltIcon: () => On,
  ExpandIcon: () => Pn,
  EyeCloseIcon: () => An,
  EyeIcon: () => Dn,
  FaceHappyIcon: () => Km,
  FaceNeutralIcon: () => $m,
  FaceSadIcon: () => Um,
  FacebookIcon: () => Gm,
  FailedIcon: () => Mn,
  FastForwardIcon: () => qm,
  FigmaIcon: () => Ym,
  FilterIcon: () => Ln,
  FlagIcon: () => Qm,
  FolderIcon: () => Xm,
  FormIcon: () => Zm,
  GDriveIcon: () => Jm,
  GithubIcon: () => vo,
  GitlabIcon: () => eh,
  GlobeIcon: () => Xo,
  GoogleIcon: () => th,
  GraphBarIcon: () => oh,
  GraphLineIcon: () => rh,
  GraphqlIcon: () => nh,
  GridAltIcon: () => ih,
  GridIcon: () => sh,
  GrowIcon: () => ah,
  HeartHollowIcon: () => lh,
  HeartIcon: () => Nn,
  HomeIcon: () => uh,
  HourglassIcon: () => ch,
  InfoIcon: () => Fn,
  ItalicIcon: () => ph,
  JumpToIcon: () => dh,
  KeyIcon: () => fh,
  LightningIcon: () => Rn,
  LightningOffIcon: () => mh,
  LinkBrokenIcon: () => hh,
  LinkIcon: () => Bn,
  LinkedinIcon: () => gh,
  LinuxIcon: () => yh,
  ListOrderedIcon: () => bh,
  ListUnorderedIcon: () => vh,
  LocationIcon: () => xh,
  LockIcon: () => xo,
  MarkdownIcon: () => Ih,
  MarkupIcon: () => Hn,
  MediumIcon: () => Sh,
  MemoryIcon: () => wh,
  MenuIcon: () => Io,
  MergeIcon: () => Eh,
  MirrorIcon: () => Th,
  MobileIcon: () => Ch,
  MoonIcon: () => _h,
  NutIcon: () => kh,
  OutboxIcon: () => Oh,
  OutlineIcon: () => Ph,
  PaintBrushIcon: () => Ah,
  PaperClipIcon: () => Dh,
  ParagraphIcon: () => Mh,
  PassedIcon: () => Lh,
  PhoneIcon: () => Nh,
  PhotoDragIcon: () => Fh,
  PhotoIcon: () => Rh,
  PhotoStabilizeIcon: () => Bh,
  PinAltIcon: () => Hh,
  PinIcon: () => zh,
  PlayAllHollowIcon: () => zn,
  PlayBackIcon: () => Wh,
  PlayHollowIcon: () => Vh,
  PlayIcon: () => jh,
  PlayNextIcon: () => Kh,
  PlusIcon: () => Wn,
  PointerDefaultIcon: () => $h,
  PointerHandIcon: () => Uh,
  PowerIcon: () => Gh,
  PrintIcon: () => qh,
  ProceedIcon: () => Yh,
  ProfileIcon: () => Qh,
  PullRequestIcon: () => Xh,
  QuestionIcon: () => Zh,
  RSSIcon: () => Jh,
  RedirectIcon: () => eg,
  ReduxIcon: () => tg,
  RefreshIcon: () => og,
  ReplyIcon: () => rg,
  RepoIcon: () => ng,
  RequestChangeIcon: () => ig,
  RewindIcon: () => sg,
  RulerIcon: () => ag,
  SaveIcon: () => lg,
  SearchIcon: () => So,
  ShareAltIcon: () => tt,
  ShareIcon: () => ug,
  ShieldIcon: () => cg,
  SideBySideIcon: () => pg,
  SidebarAltIcon: () => wo,
  SidebarAltToggleIcon: () => dg,
  SidebarIcon: () => fg,
  SidebarToggleIcon: () => mg,
  SpeakerIcon: () => hg,
  StackedIcon: () => gg,
  StarHollowIcon: () => yg,
  StarIcon: () => bg,
  StatusFailIcon: () => Vn,
  StatusIcon: () => vg,
  StatusPassIcon: () => jn,
  StatusWarnIcon: () => Kn,
  StickerIcon: () => xg,
  StopAltHollowIcon: () => Ig,
  StopAltIcon: () => Sg,
  StopIcon: () => wg,
  StorybookIcon: () => $n,
  StructureIcon: () => Eg,
  SubtractIcon: () => Tg,
  SunIcon: () => Cg,
  SupportIcon: () => _g,
  SweepIcon: () => Un,
  SwitchAltIcon: () => kg,
  SyncIcon: () => ut,
  TabletIcon: () => Og,
  ThumbsUpIcon: () => Pg,
  TimeIcon: () => Gn,
  TimerIcon: () => Ag,
  TransferIcon: () => Dg,
  TrashIcon: () => qn,
  TwitterIcon: () => Mg,
  TypeIcon: () => Lg,
  UbuntuIcon: () => Ng,
  UndoIcon: () => Fg,
  UnfoldIcon: () => Rg,
  UnlockIcon: () => Bg,
  UnpinIcon: () => Hg,
  UploadIcon: () => zg,
  UserAddIcon: () => Wg,
  UserAltIcon: () => Vg,
  UserIcon: () => jg,
  UsersIcon: () => Kg,
  VSCodeIcon: () => $g,
  VerifiedIcon: () => Ug,
  VideoIcon: () => Gg,
  WandIcon: () => Yn,
  WatchIcon: () => qg,
  WindowsIcon: () => Yg,
  WrenchIcon: () => Qg,
  XIcon: () => Xg,
  YoutubeIcon: () => Zg,
  ZoomIcon: () => Qn,
  ZoomOutIcon: () => Xn,
  ZoomResetIcon: () => Zn,
  default: () => yf,
  iconList: () => Jg
});
var yf = __STORYBOOK_ICONS__, { AccessibilityAltIcon: bf, AccessibilityIcon: vf, AccessibilityIgnoredIcon: xf, AddIcon: If, AdminIcon: Sf, AlertAltIcon: wf,
AlertIcon: go, AlignLeftIcon: Ef, AlignRightIcon: Tf, AppleIcon: Cf, ArrowBottomLeftIcon: _f, ArrowBottomRightIcon: kf, ArrowDownIcon: Of, ArrowLeftIcon: Sn,
ArrowRightIcon: Pf, ArrowSolidDownIcon: Af, ArrowSolidLeftIcon: Df, ArrowSolidRightIcon: Mf, ArrowSolidUpIcon: Lf, ArrowTopLeftIcon: Nf, ArrowTopRightIcon: Ff,
ArrowUpIcon: Rf, AzureDevOpsIcon: Bf, BackIcon: Hf, BasketIcon: zf, BatchAcceptIcon: Wf, BatchDenyIcon: Vf, BeakerIcon: jf, BellIcon: Kf, BitbucketIcon: $f,
BoldIcon: Uf, BookIcon: Gf, BookmarkHollowIcon: qf, BookmarkIcon: Yf, BottomBarIcon: yo, BottomBarToggleIcon: wn, BoxIcon: Qf, BranchIcon: Xf,
BrowserIcon: Zf, ButtonIcon: Jf, CPUIcon: em, CalendarIcon: tm, CameraIcon: om, CameraStabilizeIcon: rm, CategoryIcon: nm, CertificateIcon: im,
ChangedIcon: sm, ChatIcon: am, CheckIcon: Be, ChevronDownIcon: _t, ChevronLeftIcon: lm, ChevronRightIcon: En, ChevronSmallDownIcon: um, ChevronSmallLeftIcon: cm,
ChevronSmallRightIcon: pm, ChevronSmallUpIcon: Tn, ChevronUpIcon: dm, ChromaticIcon: fm, ChromeIcon: mm, CircleHollowIcon: hm, CircleIcon: Cn,
ClearIcon: gm, CloseAltIcon: bo, CloseIcon: je, CloudHollowIcon: ym, CloudIcon: bm, CogIcon: Yo, CollapseIcon: _n, CommandIcon: vm, CommentAddIcon: xm,
CommentIcon: Im, CommentsIcon: Sm, CommitIcon: wm, CompassIcon: Em, ComponentDrivenIcon: Tm, ComponentIcon: Qo, ContrastIcon: Cm, ContrastIgnoredIcon: _m,
ControlsIcon: km, CopyIcon: Om, CreditIcon: Pm, CrossIcon: Am, DashboardIcon: Dm, DatabaseIcon: Mm, DeleteIcon: Lm, DiamondIcon: Nm, DirectionIcon: Fm,
DiscordIcon: Rm, DocChartIcon: Bm, DocListIcon: Hm, DocumentIcon: kt, DownloadIcon: zm, DragIcon: Wm, EditIcon: Vm, EllipsisIcon: kn, EmailIcon: jm,
ExpandAltIcon: On, ExpandIcon: Pn, EyeCloseIcon: An, EyeIcon: Dn, FaceHappyIcon: Km, FaceNeutralIcon: $m, FaceSadIcon: Um, FacebookIcon: Gm,
FailedIcon: Mn, FastForwardIcon: qm, FigmaIcon: Ym, FilterIcon: Ln, FlagIcon: Qm, FolderIcon: Xm, FormIcon: Zm, GDriveIcon: Jm, GithubIcon: vo,
GitlabIcon: eh, GlobeIcon: Xo, GoogleIcon: th, GraphBarIcon: oh, GraphLineIcon: rh, GraphqlIcon: nh, GridAltIcon: ih, GridIcon: sh, GrowIcon: ah,
HeartHollowIcon: lh, HeartIcon: Nn, HomeIcon: uh, HourglassIcon: ch, InfoIcon: Fn, ItalicIcon: ph, JumpToIcon: dh, KeyIcon: fh, LightningIcon: Rn,
LightningOffIcon: mh, LinkBrokenIcon: hh, LinkIcon: Bn, LinkedinIcon: gh, LinuxIcon: yh, ListOrderedIcon: bh, ListUnorderedIcon: vh, LocationIcon: xh,
LockIcon: xo, MarkdownIcon: Ih, MarkupIcon: Hn, MediumIcon: Sh, MemoryIcon: wh, MenuIcon: Io, MergeIcon: Eh, MirrorIcon: Th, MobileIcon: Ch,
MoonIcon: _h, NutIcon: kh, OutboxIcon: Oh, OutlineIcon: Ph, PaintBrushIcon: Ah, PaperClipIcon: Dh, ParagraphIcon: Mh, PassedIcon: Lh, PhoneIcon: Nh,
PhotoDragIcon: Fh, PhotoIcon: Rh, PhotoStabilizeIcon: Bh, PinAltIcon: Hh, PinIcon: zh, PlayAllHollowIcon: zn, PlayBackIcon: Wh, PlayHollowIcon: Vh,
PlayIcon: jh, PlayNextIcon: Kh, PlusIcon: Wn, PointerDefaultIcon: $h, PointerHandIcon: Uh, PowerIcon: Gh, PrintIcon: qh, ProceedIcon: Yh, ProfileIcon: Qh,
PullRequestIcon: Xh, QuestionIcon: Zh, RSSIcon: Jh, RedirectIcon: eg, ReduxIcon: tg, RefreshIcon: og, ReplyIcon: rg, RepoIcon: ng, RequestChangeIcon: ig,
RewindIcon: sg, RulerIcon: ag, SaveIcon: lg, SearchIcon: So, ShareAltIcon: tt, ShareIcon: ug, ShieldIcon: cg, SideBySideIcon: pg, SidebarAltIcon: wo,
SidebarAltToggleIcon: dg, SidebarIcon: fg, SidebarToggleIcon: mg, SpeakerIcon: hg, StackedIcon: gg, StarHollowIcon: yg, StarIcon: bg, StatusFailIcon: Vn,
StatusIcon: vg, StatusPassIcon: jn, StatusWarnIcon: Kn, StickerIcon: xg, StopAltHollowIcon: Ig, StopAltIcon: Sg, StopIcon: wg, StorybookIcon: $n,
StructureIcon: Eg, SubtractIcon: Tg, SunIcon: Cg, SupportIcon: _g, SweepIcon: Un, SwitchAltIcon: kg, SyncIcon: ut, TabletIcon: Og, ThumbsUpIcon: Pg,
TimeIcon: Gn, TimerIcon: Ag, TransferIcon: Dg, TrashIcon: qn, TwitterIcon: Mg, TypeIcon: Lg, UbuntuIcon: Ng, UndoIcon: Fg, UnfoldIcon: Rg, UnlockIcon: Bg,
UnpinIcon: Hg, UploadIcon: zg, UserAddIcon: Wg, UserAltIcon: Vg, UserIcon: jg, UsersIcon: Kg, VSCodeIcon: $g, VerifiedIcon: Ug, VideoIcon: Gg,
WandIcon: Yn, WatchIcon: qg, WindowsIcon: Yg, WrenchIcon: Qg, XIcon: Xg, YoutubeIcon: Zg, ZoomIcon: Qn, ZoomOutIcon: Xn, ZoomResetIcon: Zn, iconList: Jg } = __STORYBOOK_ICONS__;

// global-externals:storybook/manager-api
var CE = __STORYBOOK_API__, { ActiveTabs: _E, Consumer: me, ManagerContext: kE, Provider: ma, RequestResponseError: OE, addons: He, combineParameters: PE,
controlOrMetaKey: AE, controlOrMetaSymbol: DE, eventMatchesShortcut: ME, eventToShortcut: ha, experimental_MockUniversalStore: LE, experimental_UniversalStore: NE,
experimental_getStatusStore: ey, experimental_getTestProviderStore: ty, experimental_requestResponse: Zo, experimental_useStatusStore: Eo, experimental_useTestProviderStore: ei,
experimental_useUniversalStore: FE, internal_fullStatusStore: Ot, internal_fullTestProviderStore: Jt, internal_universalStatusStore: RE, internal_universalTestProviderStore: BE,
isMacLike: HE, isShortcutTaken: zE, keyToSymbol: WE, merge: Jo, mockChannel: VE, optionOrAltSymbol: jE, shortcutMatchesShortcut: ga, shortcutToHumanString: Ye,
types: be, useAddonState: KE, useArgTypes: $E, useArgs: UE, useChannel: ya, useGlobalTypes: ba, useGlobals: er, useParameter: GE, useSharedState: qE,
useStoryPrepared: YE, useStorybookApi: oe, useStorybookState: Ne } = __STORYBOOK_API__;

// global-externals:storybook/theming
var XE = __STORYBOOK_THEMING__, { CacheProvider: ZE, ClassNames: JE, Global: eo, ThemeProvider: ti, background: eT, color: va, convert: tT, create: oT,
createCache: rT, createGlobal: xa, createReset: nT, css: iT, darken: sT, ensure: Ia, ignoreSsrWarning: aT, isPropValid: lT, jsx: uT, keyframes: Pt,
lighten: cT, styled: x, themes: pT, typography: dT, useTheme: De, withTheme: Sa } = __STORYBOOK_THEMING__;

// global-externals:storybook/internal/components
var mT = __STORYBOOK_COMPONENTS__, { A: hT, ActionBar: gT, AddonPanel: yT, Badge: tr, Bar: bT, Blockquote: vT, Button: he, Checkbox: xT, ClipboardCode: IT,
Code: ST, DL: wT, Div: ET, DocumentWrapper: TT, EmptyTabContent: wa, ErrorFormatter: Ea, FlexBar: CT, Form: or, H1: _T, H2: kT, H3: OT, H4: PT,
H5: AT, H6: DT, HR: MT, IconButton: ee, Img: LT, LI: NT, Link: Pe, ListItem: oy, Loader: rr, Modal: At, OL: FT, P: RT, Placeholder: BT, Pre: HT,
ProgressSpinner: zT, ResetWrapper: WT, ScrollArea: nr, Separator: ht, Spaced: ct, Span: VT, StorybookIcon: jT, StorybookLogo: ir, SyntaxHighlighter: KT,
TT: $T, TabBar: sr, TabButton: ar, TabWrapper: UT, Table: GT, Tabs: Ta, TabsState: qT, TooltipLinkList: ot, TooltipMessage: YT, TooltipNote: rt,
UL: QT, WithTooltip: ve, WithTooltipPure: XT, Zoom: Ca, codeCommon: ZT, components: JT, createCopyToClipboardFunction: eC, getStoryHref: to,
interleaveSeparators: tC, nameSpaceClassNames: oC, resetComponents: rC, withReset: nC } = __STORYBOOK_COMPONENTS__;

// src/toolbar/utils/normalize-toolbar-arg-type.ts
var ry = {
  type: "item",
  value: ""
}, _a = /* @__PURE__ */ a((e, t) => ({
  ...t,
  name: t.name || e,
  description: t.description || e,
  toolbar: {
    ...t.toolbar,
    items: t.toolbar.items.map((o) => {
      let i = typeof o == "string" ? { value: o, title: o } : o;
      return i.type === "reset" && t.toolbar.icon && (i.icon = t.toolbar.icon, i.hideIcon = !0), { ...ry, ...i };
    })
  }
}), "normalizeArgType");

// src/toolbar/utils/create-cycle-value-array.ts
var ny = ["reset"], ka = /* @__PURE__ */ a((e) => e.filter((o) => !ny.includes(o.type)).map((o) => o.value), "createCycleValueArray");

// src/toolbar/constants.ts
var gt = "toolbar";

// src/toolbar/utils/register-shortcuts.ts
var Oa = /* @__PURE__ */ a(async (e, t, o) => {
  o && o.next && await e.setAddonShortcut(gt, {
    label: o.next.label,
    defaultShortcut: o.next.keys,
    actionName: `${t}:next`,
    action: o.next.action
  }), o && o.previous && await e.setAddonShortcut(gt, {
    label: o.previous.label,
    defaultShortcut: o.previous.keys,
    actionName: `${t}:previous`,
    action: o.previous.action
  }), o && o.reset && await e.setAddonShortcut(gt, {
    label: o.reset.label,
    defaultShortcut: o.reset.keys,
    actionName: `${t}:reset`,
    action: o.reset.action
  });
}, "registerShortcuts");

// src/toolbar/hoc/withKeyboardCycle.tsx
var Pa = /* @__PURE__ */ a((e) => /* @__PURE__ */ a((o) => {
  let {
    id: i,
    toolbar: { items: r, shortcuts: n }
  } = o, l = oe(), [u, c] = er(), d = q([]), p = u[i], m = A(() => {
    c({ [i]: "" });
  }, [c]), h = A(() => {
    let f = d.current, y = f.indexOf(p), E = y === f.length - 1 ? 0 : y + 1, g = d.current[E];
    c({ [i]: g });
  }, [d, p, c]), b = A(() => {
    let f = d.current, y = f.indexOf(p), S = y > -1 ? y : 0, g = S === 0 ? f.length - 1 : S - 1, v = d.current[g];
    c({ [i]: v });
  }, [d, p, c]);
  return V(() => {
    n && Oa(l, i, {
      next: { ...n.next, action: h },
      previous: { ...n.previous, action: b },
      reset: { ...n.reset, action: m }
    });
  }, [l, i, n, h, b, m]), V(() => {
    d.current = ka(r);
  }, []), /* @__PURE__ */ s.createElement(e, { cycleValues: d.current, ...o });
}, "WithKeyboardCycle"), "withKeyboardCycle");

// src/toolbar/utils/get-selected.ts
var Aa = /* @__PURE__ */ a(({ currentValue: e, items: t }) => e != null && t.find((i) => i.value === e && i.type !== "reset"), "getSelectedI\
tem"), Da = /* @__PURE__ */ a(({ currentValue: e, items: t }) => {
  let o = Aa({ currentValue: e, items: t });
  if (o)
    return o.icon;
}, "getSelectedIcon"), Ma = /* @__PURE__ */ a(({ currentValue: e, items: t }) => {
  let o = Aa({ currentValue: e, items: t });
  if (o)
    return o.title;
}, "getSelectedTitle");

// global-externals:storybook/internal/client-logger
var SC = __STORYBOOK_CLIENT_LOGGER__, { deprecate: La, logger: lr, once: Na, pretty: wC } = __STORYBOOK_CLIENT_LOGGER__;

// src/components/components/icon/icon.tsx
var iy = Jn, sy = x.svg`
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
  fill: currentColor;
  path {
    fill: currentColor;
  }
`, ur = /* @__PURE__ */ a(({
  icon: e,
  useSymbol: t,
  __suppressDeprecationWarning: o = !1,
  ...i
}) => {
  o || La(
    `Use of the deprecated Icons ${`(${e})` || ""} component detected. Please use the @storybook/icons component directly. For more informat\
ions, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-is-deprecated`
  );
  let r = oi[e] || null;
  if (!r)
    return lr.warn(
      `Use of an unknown prop ${`(${e})` || ""} in the Icons component. The Icons component is deprecated. Please use the @storybook/icons c\
omponent directly. For more informations, see the migration notes at https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#icons-i\
s-deprecated`
    ), null;
  let n = iy[r];
  return /* @__PURE__ */ s.createElement(n, { ...i });
}, "Icons"), kC = Tt(/* @__PURE__ */ a(function({ icons: t = Object.keys(oi) }) {
  return /* @__PURE__ */ s.createElement(
    sy,
    {
      viewBox: "0 0 14 14",
      style: { position: "absolute", width: 0, height: 0 },
      "data-chromatic": "ignore"
    },
    t.map((o) => /* @__PURE__ */ s.createElement("symbol", { id: `icon--${o}`, key: o }, oi[o]))
  );
}, "Symbols")), oi = {
  user: "UserIcon",
  useralt: "UserAltIcon",
  useradd: "UserAddIcon",
  users: "UsersIcon",
  profile: "ProfileIcon",
  facehappy: "FaceHappyIcon",
  faceneutral: "FaceNeutralIcon",
  facesad: "FaceSadIcon",
  accessibility: "AccessibilityIcon",
  accessibilityalt: "AccessibilityAltIcon",
  arrowup: "ChevronUpIcon",
  arrowdown: "ChevronDownIcon",
  arrowleft: "ChevronLeftIcon",
  arrowright: "ChevronRightIcon",
  arrowupalt: "ArrowUpIcon",
  arrowdownalt: "ArrowDownIcon",
  arrowleftalt: "ArrowLeftIcon",
  arrowrightalt: "ArrowRightIcon",
  expandalt: "ExpandAltIcon",
  collapse: "CollapseIcon",
  expand: "ExpandIcon",
  unfold: "UnfoldIcon",
  transfer: "TransferIcon",
  redirect: "RedirectIcon",
  undo: "UndoIcon",
  reply: "ReplyIcon",
  sync: "SyncIcon",
  upload: "UploadIcon",
  download: "DownloadIcon",
  back: "BackIcon",
  proceed: "ProceedIcon",
  refresh: "RefreshIcon",
  globe: "GlobeIcon",
  compass: "CompassIcon",
  location: "LocationIcon",
  pin: "PinIcon",
  time: "TimeIcon",
  dashboard: "DashboardIcon",
  timer: "TimerIcon",
  home: "HomeIcon",
  admin: "AdminIcon",
  info: "InfoIcon",
  question: "QuestionIcon",
  support: "SupportIcon",
  alert: "AlertIcon",
  email: "EmailIcon",
  phone: "PhoneIcon",
  link: "LinkIcon",
  unlink: "LinkBrokenIcon",
  bell: "BellIcon",
  rss: "RSSIcon",
  sharealt: "ShareAltIcon",
  share: "ShareIcon",
  circle: "CircleIcon",
  circlehollow: "CircleHollowIcon",
  bookmarkhollow: "BookmarkHollowIcon",
  bookmark: "BookmarkIcon",
  hearthollow: "HeartHollowIcon",
  heart: "HeartIcon",
  starhollow: "StarHollowIcon",
  star: "StarIcon",
  certificate: "CertificateIcon",
  verified: "VerifiedIcon",
  thumbsup: "ThumbsUpIcon",
  shield: "ShieldIcon",
  basket: "BasketIcon",
  beaker: "BeakerIcon",
  hourglass: "HourglassIcon",
  flag: "FlagIcon",
  cloudhollow: "CloudHollowIcon",
  edit: "EditIcon",
  cog: "CogIcon",
  nut: "NutIcon",
  wrench: "WrenchIcon",
  ellipsis: "EllipsisIcon",
  check: "CheckIcon",
  form: "FormIcon",
  batchdeny: "BatchDenyIcon",
  batchaccept: "BatchAcceptIcon",
  controls: "ControlsIcon",
  plus: "PlusIcon",
  closeAlt: "CloseAltIcon",
  cross: "CrossIcon",
  trash: "TrashIcon",
  pinalt: "PinAltIcon",
  unpin: "UnpinIcon",
  add: "AddIcon",
  subtract: "SubtractIcon",
  close: "CloseIcon",
  delete: "DeleteIcon",
  passed: "PassedIcon",
  changed: "ChangedIcon",
  failed: "FailedIcon",
  clear: "ClearIcon",
  comment: "CommentIcon",
  commentadd: "CommentAddIcon",
  requestchange: "RequestChangeIcon",
  comments: "CommentsIcon",
  lock: "LockIcon",
  unlock: "UnlockIcon",
  key: "KeyIcon",
  outbox: "OutboxIcon",
  credit: "CreditIcon",
  button: "ButtonIcon",
  type: "TypeIcon",
  pointerdefault: "PointerDefaultIcon",
  pointerhand: "PointerHandIcon",
  browser: "BrowserIcon",
  tablet: "TabletIcon",
  mobile: "MobileIcon",
  watch: "WatchIcon",
  sidebar: "SidebarIcon",
  sidebaralt: "SidebarAltIcon",
  sidebaralttoggle: "SidebarAltToggleIcon",
  sidebartoggle: "SidebarToggleIcon",
  bottombar: "BottomBarIcon",
  bottombartoggle: "BottomBarToggleIcon",
  cpu: "CPUIcon",
  database: "DatabaseIcon",
  memory: "MemoryIcon",
  structure: "StructureIcon",
  box: "BoxIcon",
  power: "PowerIcon",
  photo: "PhotoIcon",
  component: "ComponentIcon",
  grid: "GridIcon",
  outline: "OutlineIcon",
  photodrag: "PhotoDragIcon",
  search: "SearchIcon",
  zoom: "ZoomIcon",
  zoomout: "ZoomOutIcon",
  zoomreset: "ZoomResetIcon",
  eye: "EyeIcon",
  eyeclose: "EyeCloseIcon",
  lightning: "LightningIcon",
  lightningoff: "LightningOffIcon",
  contrast: "ContrastIcon",
  switchalt: "SwitchAltIcon",
  mirror: "MirrorIcon",
  grow: "GrowIcon",
  paintbrush: "PaintBrushIcon",
  ruler: "RulerIcon",
  stop: "StopIcon",
  camera: "CameraIcon",
  video: "VideoIcon",
  speaker: "SpeakerIcon",
  play: "PlayIcon",
  playback: "PlayBackIcon",
  playnext: "PlayNextIcon",
  rewind: "RewindIcon",
  fastforward: "FastForwardIcon",
  stopalt: "StopAltIcon",
  sidebyside: "SideBySideIcon",
  stacked: "StackedIcon",
  sun: "SunIcon",
  moon: "MoonIcon",
  book: "BookIcon",
  document: "DocumentIcon",
  copy: "CopyIcon",
  category: "CategoryIcon",
  folder: "FolderIcon",
  print: "PrintIcon",
  graphline: "GraphLineIcon",
  calendar: "CalendarIcon",
  graphbar: "GraphBarIcon",
  menu: "MenuIcon",
  menualt: "MenuIcon",
  filter: "FilterIcon",
  docchart: "DocChartIcon",
  doclist: "DocListIcon",
  markup: "MarkupIcon",
  bold: "BoldIcon",
  paperclip: "PaperClipIcon",
  listordered: "ListOrderedIcon",
  listunordered: "ListUnorderedIcon",
  paragraph: "ParagraphIcon",
  markdown: "MarkdownIcon",
  repository: "RepoIcon",
  commit: "CommitIcon",
  branch: "BranchIcon",
  pullrequest: "PullRequestIcon",
  merge: "MergeIcon",
  apple: "AppleIcon",
  linux: "LinuxIcon",
  ubuntu: "UbuntuIcon",
  windows: "WindowsIcon",
  storybook: "StorybookIcon",
  azuredevops: "AzureDevOpsIcon",
  bitbucket: "BitbucketIcon",
  chrome: "ChromeIcon",
  chromatic: "ChromaticIcon",
  componentdriven: "ComponentDrivenIcon",
  discord: "DiscordIcon",
  facebook: "FacebookIcon",
  figma: "FigmaIcon",
  gdrive: "GDriveIcon",
  github: "GithubIcon",
  gitlab: "GitlabIcon",
  google: "GoogleIcon",
  graphql: "GraphqlIcon",
  medium: "MediumIcon",
  redux: "ReduxIcon",
  twitter: "TwitterIcon",
  youtube: "YoutubeIcon",
  vscode: "VSCodeIcon"
};

// src/toolbar/components/ToolbarMenuButton.tsx
var Fa = /* @__PURE__ */ a(({
  active: e,
  disabled: t,
  title: o,
  icon: i,
  description: r,
  onClick: n
}) => /* @__PURE__ */ s.createElement(
  ee,
  {
    active: e,
    title: r,
    disabled: t,
    onClick: t ? () => {
    } : n
  },
  i && /* @__PURE__ */ s.createElement(ur, { icon: i, __suppressDeprecationWarning: !0 }),
  o ? `\xA0${o}` : null
), "ToolbarMenuButton");

// src/toolbar/components/ToolbarMenuListItem.tsx
var Ra = /* @__PURE__ */ a(({
  right: e,
  title: t,
  value: o,
  icon: i,
  hideIcon: r,
  onClick: n,
  disabled: l,
  currentValue: u
}) => {
  let c = i && /* @__PURE__ */ s.createElement(ur, { style: { opacity: 1 }, icon: i, __suppressDeprecationWarning: !0 }), d = {
    id: o ?? "_reset",
    active: u === o,
    right: e,
    title: t,
    disabled: l,
    onClick: n
  };
  return i && !r && (d.icon = c), d;
}, "ToolbarMenuListItem");

// src/toolbar/components/ToolbarMenuList.tsx
var Ba = Pa(
  ({
    id: e,
    name: t,
    description: o,
    toolbar: { icon: i, items: r, title: n, preventDynamicIcon: l, dynamicTitle: u }
  }) => {
    let [c, d, p] = er(), [m, h] = K(!1), b = c[e], f = !!b, y = e in p, S = i, E = n;
    l || (S = Da({ currentValue: b, items: r }) || S), u && (E = Ma({ currentValue: b, items: r }) || E), !E && !S && console.warn(`Toolbar \
'${t}' has no title or icon`);
    let g = A(
      (v) => {
        d({ [e]: v });
      },
      [e, d]
    );
    return /* @__PURE__ */ s.createElement(
      ve,
      {
        placement: "top",
        tooltip: ({ onHide: v }) => {
          let I = r.filter(({ type: w }) => {
            let O = !0;
            return w === "reset" && !b && (O = !1), O;
          }).map((w) => Ra({
            ...w,
            currentValue: b,
            disabled: y,
            onClick: /* @__PURE__ */ a(() => {
              g(w.value), v();
            }, "onClick")
          }));
          return /* @__PURE__ */ s.createElement(ot, { links: I });
        },
        closeOnOutsideClick: !0,
        onVisibleChange: h
      },
      /* @__PURE__ */ s.createElement(
        Fa,
        {
          active: m || f,
          disabled: y,
          description: o || "",
          icon: S,
          title: E || ""
        }
      )
    );
  }
);

// src/toolbar/components/ToolbarManager.tsx
var Ha = /* @__PURE__ */ a(() => {
  let e = ba(), t = Object.keys(e).filter((o) => !!e[o].toolbar);
  return t.length ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ht, null), t.map((o) => {
    let i = _a(o, e[o]);
    return /* @__PURE__ */ s.createElement(Ba, { key: o, id: o, ...i });
  })) : null;
}, "ToolbarManager");

// global-externals:react-dom/client
var o_ = __REACT_DOM_CLIENT__, { createRoot: za, hydrateRoot: r_ } = __REACT_DOM_CLIENT__;

// global-externals:storybook/internal/manager-errors
var i_ = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__, { Category: s_, ProviderDoesNotExtendBaseProviderError: Wa, StatusTypeIdMismatchError: a_,
UncaughtManagerError: l_ } = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__;

// global-externals:storybook/internal/router
var c_ = __STORYBOOK_ROUTER__, { BaseLocationProvider: p_, DEEPLY_EQUAL: d_, Link: cr, Location: pr, LocationProvider: Va, Match: ja, Route: To,
buildArgsParam: f_, deepDiff: m_, getMatch: h_, parsePath: g_, queryFromLocation: y_, stringifyQuery: b_, useNavigate: Ka } = __STORYBOOK_ROUTER__;

// ../node_modules/react-helmet-async/lib/index.module.js
var ne = Ve(ri()), cl = Ve(Ja()), li = Ve(tl()), pl = Ve(rl());
=======
var pv = __STORYBOOK_ICONS__, { AccessibilityAltIcon: dv, AccessibilityIcon: fv, AccessibilityIgnoredIcon: mv, AddIcon: hv, AdminIcon: gv, AlertAltIcon: yv,
AlertIcon: Oo, AlignLeftIcon: bv, AlignRightIcon: vv, AppleIcon: xv, ArrowBottomLeftIcon: Sv, ArrowBottomRightIcon: Iv, ArrowDownIcon: Ev, ArrowLeftIcon: ms,
ArrowRightIcon: _v, ArrowSolidDownIcon: wv, ArrowSolidLeftIcon: Tv, ArrowSolidRightIcon: Cv, ArrowSolidUpIcon: kv, ArrowTopLeftIcon: Ov, ArrowTopRightIcon: Pv,
ArrowUpIcon: Av, AzureDevOpsIcon: Dv, BackIcon: Mv, BasketIcon: Lv, BatchAcceptIcon: Nv, BatchDenyIcon: Rv, BeakerIcon: Fv, BellIcon: Hv, BitbucketIcon: Bv,
BoldIcon: zv, BookIcon: Wv, BookmarkHollowIcon: jv, BookmarkIcon: Vv, BottomBarIcon: Po, BottomBarToggleIcon: hs, BoxIcon: Kv, BranchIcon: $v,
BrowserIcon: Uv, ButtonIcon: Gv, CPUIcon: Yv, CalendarIcon: qv, CameraIcon: Qv, CameraStabilizeIcon: Xv, CategoryIcon: Zv, CertificateIcon: Jv,
ChangedIcon: ex, ChatIcon: tx, CheckIcon: We, ChevronDownIcon: Kt, ChevronLeftIcon: ox, ChevronRightIcon: gs, ChevronSmallDownIcon: rx, ChevronSmallLeftIcon: nx,
ChevronSmallRightIcon: ix, ChevronSmallUpIcon: ys, ChevronUpIcon: sx, ChromaticIcon: ax, ChromeIcon: lx, CircleHollowIcon: ux, CircleIcon: bs,
ClearIcon: cx, CloseAltIcon: Ao, CloseIcon: Ge, CloudHollowIcon: px, CloudIcon: dx, CogIcon: on, CollapseIcon: vs, CommandIcon: fx, CommentAddIcon: mx,
CommentIcon: hx, CommentsIcon: gx, CommitIcon: yx, CompassIcon: bx, ComponentDrivenIcon: vx, ComponentIcon: rn, ContrastIcon: xx, ContrastIgnoredIcon: Sx,
ControlsIcon: Ix, CopyIcon: Ex, CreditIcon: _x, CrossIcon: wx, DashboardIcon: Tx, DatabaseIcon: Cx, DeleteIcon: kx, DiamondIcon: Ox, DirectionIcon: Px,
DiscordIcon: Ax, DocChartIcon: Dx, DocListIcon: Mx, DocumentIcon: $t, DownloadIcon: Lx, DragIcon: Nx, EditIcon: Rx, EllipsisIcon: xs, EmailIcon: Fx,
ExpandAltIcon: Ss, ExpandIcon: Is, EyeCloseIcon: Es, EyeIcon: _s, FaceHappyIcon: Hx, FaceNeutralIcon: Bx, FaceSadIcon: zx, FacebookIcon: Wx,
FailedIcon: ws, FastForwardIcon: jx, FigmaIcon: Vx, FilterIcon: Ts, FlagIcon: Kx, FolderIcon: $x, FormIcon: Ux, GDriveIcon: Gx, GithubIcon: Do,
GitlabIcon: Yx, GlobeIcon: nn, GoogleIcon: qx, GraphBarIcon: Qx, GraphLineIcon: Xx, GraphqlIcon: Zx, GridAltIcon: Jx, GridIcon: eS, GrowIcon: tS,
HeartHollowIcon: oS, HeartIcon: Cs, HomeIcon: rS, HourglassIcon: nS, InfoIcon: ks, ItalicIcon: iS, JumpToIcon: sS, KeyIcon: aS, LightningIcon: Os,
LightningOffIcon: lS, LinkBrokenIcon: uS, LinkIcon: Ps, LinkedinIcon: cS, LinuxIcon: pS, ListOrderedIcon: dS, ListUnorderedIcon: fS, LocationIcon: mS,
LockIcon: Mo, MarkdownIcon: hS, MarkupIcon: As, MediumIcon: gS, MemoryIcon: yS, MenuIcon: Lo, MergeIcon: bS, MirrorIcon: vS, MobileIcon: xS,
MoonIcon: SS, NutIcon: IS, OutboxIcon: ES, OutlineIcon: _S, PaintBrushIcon: wS, PaperClipIcon: TS, ParagraphIcon: CS, PassedIcon: kS, PhoneIcon: OS,
PhotoDragIcon: PS, PhotoIcon: AS, PhotoStabilizeIcon: DS, PinAltIcon: MS, PinIcon: LS, PlayAllHollowIcon: Ds, PlayBackIcon: NS, PlayHollowIcon: Ms,
PlayIcon: RS, PlayNextIcon: FS, PlusIcon: Ls, PointerDefaultIcon: HS, PointerHandIcon: BS, PowerIcon: zS, PrintIcon: WS, ProceedIcon: jS, ProfileIcon: VS,
PullRequestIcon: KS, QuestionIcon: $S, RSSIcon: US, RedirectIcon: GS, ReduxIcon: YS, RefreshIcon: qS, ReplyIcon: QS, RepoIcon: XS, RequestChangeIcon: ZS,
RewindIcon: JS, RulerIcon: eI, SaveIcon: tI, SearchIcon: No, ShareAltIcon: at, ShareIcon: oI, ShieldIcon: rI, SideBySideIcon: nI, SidebarAltIcon: Ro,
SidebarAltToggleIcon: iI, SidebarIcon: sI, SidebarToggleIcon: aI, SpeakerIcon: lI, StackedIcon: uI, StarHollowIcon: cI, StarIcon: pI, StatusFailIcon: Ns,
StatusIcon: dI, StatusPassIcon: Rs, StatusWarnIcon: Fs, StickerIcon: fI, StopAltHollowIcon: mI, StopAltIcon: Hs, StopIcon: hI, StorybookIcon: Bs,
StructureIcon: gI, SubtractIcon: yI, SunIcon: bI, SupportIcon: vI, SweepIcon: xI, SwitchAltIcon: SI, SyncIcon: mt, TabletIcon: II, ThumbsUpIcon: EI,
TimeIcon: zs, TimerIcon: _I, TransferIcon: wI, TrashIcon: Ws, TwitterIcon: TI, TypeIcon: CI, UbuntuIcon: kI, UndoIcon: OI, UnfoldIcon: PI, UnlockIcon: AI,
UnpinIcon: DI, UploadIcon: MI, UserAddIcon: LI, UserAltIcon: NI, UserIcon: RI, UsersIcon: FI, VSCodeIcon: HI, VerifiedIcon: BI, VideoIcon: zI,
WandIcon: js, WatchIcon: WI, WindowsIcon: jI, WrenchIcon: VI, XIcon: KI, YoutubeIcon: $I, ZoomIcon: Vs, ZoomOutIcon: Ks, ZoomResetIcon: $s, iconList: UI } = __STORYBOOK_ICONS__;

// global-externals:@storybook/theming
var YI = __STORYBOOK_THEMING__, { CacheProvider: qI, ClassNames: QI, Global: XI, ThemeProvider: ZI, background: JI, color: Us, convert: eE, create: tE,
createCache: oE, createGlobal: rE, createReset: nE, css: iE, darken: sE, ensure: aE, ignoreSsrWarning: lE, isPropValid: uE, jsx: cE, keyframes: pE,
lighten: dE, styled: fE, themes: mE, typography: hE, useTheme: gE, withTheme: yE } = __STORYBOOK_THEMING__;

// global-externals:@storybook/core/core-events
var vE = __STORYBOOK_CORE_EVENTS__, { ARGTYPES_INFO_REQUEST: Gs, ARGTYPES_INFO_RESPONSE: Ys, CHANNEL_CREATED: qs, CHANNEL_WS_DISCONNECT: Qs,
CONFIG_ERROR: xE, CREATE_NEW_STORYFILE_REQUEST: Xs, CREATE_NEW_STORYFILE_RESPONSE: Zs, CURRENT_STORY_WAS_SET: SE, DOCS_PREPARED: IE, DOCS_RENDERED: EE,
FILE_COMPONENT_SEARCH_REQUEST: Js, FILE_COMPONENT_SEARCH_RESPONSE: Fo, FORCE_REMOUNT: sn, FORCE_RE_RENDER: _E, GLOBALS_UPDATED: wE, NAVIGATE_URL: TE,
PLAY_FUNCTION_THREW_EXCEPTION: CE, PRELOAD_ENTRIES: St, PREVIEW_BUILDER_PROGRESS: ea, PREVIEW_KEYDOWN: kE, REGISTER_SUBSCRIPTION: OE, REQUEST_WHATS_NEW_DATA: PE,
RESET_STORY_ARGS: AE, RESULT_WHATS_NEW_DATA: DE, SAVE_STORY_REQUEST: ta, SAVE_STORY_RESPONSE: oa, SELECT_STORY: ME, SET_CONFIG: LE, SET_CURRENT_STORY: ra,
SET_FILTER: NE, SET_GLOBALS: RE, SET_INDEX: FE, SET_STORIES: HE, SET_WHATS_NEW_CACHE: BE, SHARED_STATE_CHANGED: zE, SHARED_STATE_SET: WE, STORIES_COLLAPSE_ALL: io,
STORIES_EXPAND_ALL: an, STORY_ARGS_UPDATED: jE, STORY_CHANGED: VE, STORY_ERRORED: KE, STORY_FINISHED: $E, STORY_INDEX_INVALIDATED: UE, STORY_MISSING: GE,
STORY_PREPARED: YE, STORY_RENDERED: qE, STORY_RENDER_PHASE_CHANGED: QE, STORY_SPECIFIED: XE, STORY_THREW_EXCEPTION: ZE, STORY_UNCHANGED: JE,
TELEMETRY_ERROR: e_, TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: t_, TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: o_, TESTING_MODULE_CRASH_REPORT: ln,
TESTING_MODULE_PROGRESS_REPORT: un, TESTING_MODULE_RUN_ALL_REQUEST: r_, TESTING_MODULE_RUN_REQUEST: n_, TOGGLE_WHATS_NEW_NOTIFICATIONS: i_, UNHANDLED_ERRORS_WHILE_PLAYING: s_,
UPDATE_GLOBALS: a_, UPDATE_QUERY_PARAMS: l_, UPDATE_STORY_ARGS: u_ } = __STORYBOOK_CORE_EVENTS__;

// global-externals:@storybook/core/manager-api
var p_ = __STORYBOOK_API__, { ActiveTabs: d_, Consumer: he, ManagerContext: f_, Provider: na, RequestResponseError: m_, addons: Ye, combineParameters: h_,
controlOrMetaKey: g_, controlOrMetaSymbol: y_, eventMatchesShortcut: b_, eventToShortcut: ia, experimental_MockUniversalStore: v_, experimental_UniversalStore: x_,
experimental_requestResponse: Ho, experimental_useUniversalStore: S_, isMacLike: I_, isShortcutTaken: E_, keyToSymbol: __, merge: Bo, mockChannel: w_,
optionOrAltSymbol: T_, shortcutMatchesShortcut: sa, shortcutToHumanString: qe, types: ve, useAddonState: C_, useArgTypes: k_, useArgs: O_, useChannel: aa,
useGlobalTypes: P_, useGlobals: A_, useParameter: D_, useSharedState: M_, useStoryPrepared: L_, useStorybookApi: oe, useStorybookState: Pe } = __STORYBOOK_API__;

// global-externals:react-dom/client
var R_ = __REACT_DOM_CLIENT__, { createRoot: la, hydrateRoot: F_ } = __REACT_DOM_CLIENT__;

// global-externals:@storybook/core/router
var B_ = __STORYBOOK_ROUTER__, { BaseLocationProvider: z_, DEEPLY_EQUAL: W_, Link: zo, Location: Wo, LocationProvider: ua, Match: ca, Route: so,
buildArgsParam: j_, deepDiff: V_, getMatch: K_, parsePath: $_, queryFromLocation: U_, stringifyQuery: G_, useNavigate: pa } = __STORYBOOK_ROUTER__;

// global-externals:@storybook/core/theming
var q_ = __STORYBOOK_THEMING__, { CacheProvider: Q_, ClassNames: X_, Global: Ut, ThemeProvider: cn, background: Z_, color: J_, convert: ew, create: tw,
createCache: ow, createGlobal: da, createReset: rw, css: nw, darken: iw, ensure: fa, ignoreSsrWarning: sw, isPropValid: aw, jsx: lw, keyframes: It,
lighten: uw, styled: x, themes: cw, typography: pw, useTheme: Ae, withTheme: ma } = __STORYBOOK_THEMING__;

// global-externals:@storybook/core/manager-errors
var fw = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__, { Category: mw, ProviderDoesNotExtendBaseProviderError: ha, UncaughtManagerError: hw } = __STORYBOOK_CORE_EVENTS_MANAGER_ERRORS__;

// ../node_modules/react-helmet-async/lib/index.module.js
var ne = ze(pn()), Na = ze(_a()), gn = ze(Ta()), Ra = ze(ka());
>>>>>>> main
function xe() {
  return xe = Object.assign || function(e) {
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) Object.prototype.hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
  }, xe.apply(this, arguments);
}
a(xe, "a");
<<<<<<< HEAD
function di(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, ui(e, t);
}
a(di, "s");
function ui(e, t) {
  return ui = Object.setPrototypeOf || function(o, i) {
    return o.__proto__ = i, o;
  }, ui(e, t);
}
a(ui, "c");
function nl(e, t) {
  if (e == null) return {};
  var o, i, r = {}, n = Object.keys(e);
  for (i = 0; i < n.length; i++) t.indexOf(o = n[i]) >= 0 || (r[o] = e[o]);
  return r;
}
a(nl, "u");
var X = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "\
style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, my = { rel: ["amphtml", "canonical", "alternate"] }, hy = { type: ["applicatio\
n/ld+json"] }, gy = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "\
og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] },
il = Object.keys(X).map(function(e) {
  return X[e];
}), hr = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "\
http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, yy = Object.keys(hr).reduce(function(e, t) {
  return e[hr[t]] = t, e;
}, {}), ro = /* @__PURE__ */ a(function(e, t) {
=======
function xn(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, yn(e, t);
}
a(xn, "s");
function yn(e, t) {
  return yn = Object.setPrototypeOf || function(o, i) {
    return o.__proto__ = i, o;
  }, yn(e, t);
}
a(yn, "c");
function Oa(e, t) {
  if (e == null) return {};
  var o, i, n = {}, r = Object.keys(e);
  for (i = 0; i < r.length; i++) t.indexOf(o = r[i]) >= 0 || (n[o] = e[o]);
  return n;
}
a(Oa, "u");
var Z = { BASE: "base", BODY: "body", HEAD: "head", HTML: "html", LINK: "link", META: "meta", NOSCRIPT: "noscript", SCRIPT: "script", STYLE: "\
style", TITLE: "title", FRAGMENT: "Symbol(react.fragment)" }, qd = { rel: ["amphtml", "canonical", "alternate"] }, Qd = { type: ["applicatio\
n/ld+json"] }, Xd = { charset: "", name: ["robots", "description"], property: ["og:type", "og:title", "og:url", "og:image", "og:image:alt", "\
og:description", "twitter:url", "twitter:title", "twitter:description", "twitter:image", "twitter:image:alt", "twitter:card", "twitter:site"] },
Pa = Object.keys(Z).map(function(e) {
  return Z[e];
}), $o = { accesskey: "accessKey", charset: "charSet", class: "className", contenteditable: "contentEditable", contextmenu: "contextMenu", "\
http-equiv": "httpEquiv", itemprop: "itemProp", tabindex: "tabIndex" }, Zd = Object.keys($o).reduce(function(e, t) {
  return e[$o[t]] = t, e;
}, {}), Yt = /* @__PURE__ */ a(function(e, t) {
>>>>>>> main
  for (var o = e.length - 1; o >= 0; o -= 1) {
    var i = e[o];
    if (Object.prototype.hasOwnProperty.call(i, t)) return i[t];
  }
  return null;
<<<<<<< HEAD
}, "T"), by = /* @__PURE__ */ a(function(e) {
  var t = ro(e, X.TITLE), o = ro(e, "titleTemplate");
  if (Array.isArray(t) && (t = t.join("")), o && t) return o.replace(/%s/g, function() {
    return t;
  });
  var i = ro(e, "defaultTitle");
  return t || i || void 0;
}, "g"), vy = /* @__PURE__ */ a(function(e) {
  return ro(e, "onChangeClientState") || function() {
  };
}, "b"), ni = /* @__PURE__ */ a(function(e, t) {
=======
}, "T"), Jd = /* @__PURE__ */ a(function(e) {
  var t = Yt(e, Z.TITLE), o = Yt(e, "titleTemplate");
  if (Array.isArray(t) && (t = t.join("")), o && t) return o.replace(/%s/g, function() {
    return t;
  });
  var i = Yt(e, "defaultTitle");
  return t || i || void 0;
}, "g"), ef = /* @__PURE__ */ a(function(e) {
  return Yt(e, "onChangeClientState") || function() {
  };
}, "b"), dn = /* @__PURE__ */ a(function(e, t) {
>>>>>>> main
  return t.filter(function(o) {
    return o[e] !== void 0;
  }).map(function(o) {
    return o[e];
  }).reduce(function(o, i) {
    return xe({}, o, i);
  }, {});
<<<<<<< HEAD
}, "v"), xy = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(o) {
    return o[X.BASE] !== void 0;
  }).map(function(o) {
    return o[X.BASE];
  }).reverse().reduce(function(o, i) {
    if (!o.length) for (var r = Object.keys(i), n = 0; n < r.length; n += 1) {
      var l = r[n].toLowerCase();
=======
}, "v"), tf = /* @__PURE__ */ a(function(e, t) {
  return t.filter(function(o) {
    return o[Z.BASE] !== void 0;
  }).map(function(o) {
    return o[Z.BASE];
  }).reverse().reduce(function(o, i) {
    if (!o.length) for (var n = Object.keys(i), r = 0; r < n.length; r += 1) {
      var l = n[r].toLowerCase();
>>>>>>> main
      if (e.indexOf(l) !== -1 && i[l]) return o.concat(i);
    }
    return o;
  }, []);
<<<<<<< HEAD
}, "A"), Co = /* @__PURE__ */ a(function(e, t, o) {
  var i = {};
  return o.filter(function(r) {
    return !!Array.isArray(r[e]) || (r[e] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + e + ' shou\
ld be of type "Array". Instead found type "' + typeof r[e] + '"'), !1);
  }).map(function(r) {
    return r[e];
  }).reverse().reduce(function(r, n) {
    var l = {};
    n.filter(function(m) {
      for (var h, b = Object.keys(m), f = 0; f < b.length; f += 1) {
        var y = b[f], S = y.toLowerCase();
        t.indexOf(S) === -1 || h === "rel" && m[h].toLowerCase() === "canonical" || S === "rel" && m[S].toLowerCase() === "stylesheet" || (h =
        S), t.indexOf(y) === -1 || y !== "innerHTML" && y !== "cssText" && y !== "itemprop" || (h = y);
      }
      if (!h || !m[h]) return !1;
      var E = m[h].toLowerCase();
      return i[h] || (i[h] = {}), l[h] || (l[h] = {}), !i[h][E] && (l[h][E] = !0, !0);
    }).reverse().forEach(function(m) {
      return r.push(m);
    });
    for (var u = Object.keys(l), c = 0; c < u.length; c += 1) {
      var d = u[c], p = xe({}, i[d], l[d]);
      i[d] = p;
    }
    return r;
  }, []).reverse();
}, "C"), Iy = /* @__PURE__ */ a(function(e, t) {
=======
}, "A"), ao = /* @__PURE__ */ a(function(e, t, o) {
  var i = {};
  return o.filter(function(n) {
    return !!Array.isArray(n[e]) || (n[e] !== void 0 && console && typeof console.warn == "function" && console.warn("Helmet: " + e + ' shou\
ld be of type "Array". Instead found type "' + typeof n[e] + '"'), !1);
  }).map(function(n) {
    return n[e];
  }).reverse().reduce(function(n, r) {
    var l = {};
    r.filter(function(g) {
      for (var h, y = Object.keys(g), f = 0; f < y.length; f += 1) {
        var b = y[f], I = b.toLowerCase();
        t.indexOf(I) === -1 || h === "rel" && g[h].toLowerCase() === "canonical" || I === "rel" && g[I].toLowerCase() === "stylesheet" || (h =
        I), t.indexOf(b) === -1 || b !== "innerHTML" && b !== "cssText" && b !== "itemprop" || (h = b);
      }
      if (!h || !g[h]) return !1;
      var _ = g[h].toLowerCase();
      return i[h] || (i[h] = {}), l[h] || (l[h] = {}), !i[h][_] && (l[h][_] = !0, !0);
    }).reverse().forEach(function(g) {
      return n.push(g);
    });
    for (var u = Object.keys(l), c = 0; c < u.length; c += 1) {
      var p = u[c], d = xe({}, i[p], l[p]);
      i[p] = d;
    }
    return n;
  }, []).reverse();
}, "C"), of = /* @__PURE__ */ a(function(e, t) {
>>>>>>> main
  if (Array.isArray(e) && e.length) {
    for (var o = 0; o < e.length; o += 1) if (e[o][t]) return !0;
  }
  return !1;
<<<<<<< HEAD
}, "O"), dl = /* @__PURE__ */ a(function(e) {
  return Array.isArray(e) ? e.join("") : e;
}, "S"), ii = /* @__PURE__ */ a(function(e, t) {
  return Array.isArray(e) ? e.reduce(function(o, i) {
    return function(r, n) {
      for (var l = Object.keys(r), u = 0; u < l.length; u += 1) if (n[l[u]] && n[l[u]].includes(r[l[u]])) return !0;
      return !1;
    }(i, t) ? o.priority.push(i) : o.default.push(i), o;
  }, { priority: [], default: [] }) : { default: e };
}, "E"), sl = /* @__PURE__ */ a(function(e, t) {
  var o;
  return xe({}, e, ((o = {})[t] = void 0, o));
}, "I"), Sy = [X.NOSCRIPT, X.SCRIPT, X.STYLE], si = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = !0), t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
  /"/g, "&quot;").replace(/'/g, "&#x27;");
}, "w"), al = /* @__PURE__ */ a(function(e) {
=======
}, "O"), Fa = /* @__PURE__ */ a(function(e) {
  return Array.isArray(e) ? e.join("") : e;
}, "S"), fn = /* @__PURE__ */ a(function(e, t) {
  return Array.isArray(e) ? e.reduce(function(o, i) {
    return function(n, r) {
      for (var l = Object.keys(n), u = 0; u < l.length; u += 1) if (r[l[u]] && r[l[u]].includes(n[l[u]])) return !0;
      return !1;
    }(i, t) ? o.priority.push(i) : o.default.push(i), o;
  }, { priority: [], default: [] }) : { default: e };
}, "E"), Aa = /* @__PURE__ */ a(function(e, t) {
  var o;
  return xe({}, e, ((o = {})[t] = void 0, o));
}, "I"), rf = [Z.NOSCRIPT, Z.SCRIPT, Z.STYLE], mn = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = !0), t === !1 ? String(e) : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(
  /"/g, "&quot;").replace(/'/g, "&#x27;");
}, "w"), Da = /* @__PURE__ */ a(function(e) {
>>>>>>> main
  return Object.keys(e).reduce(function(t, o) {
    var i = e[o] !== void 0 ? o + '="' + e[o] + '"' : "" + o;
    return t ? t + " " + i : i;
  }, "");
<<<<<<< HEAD
}, "x"), ll = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = {}), Object.keys(e).reduce(function(o, i) {
    return o[hr[i] || i] = e[i], o;
  }, t);
}, "L"), mr = /* @__PURE__ */ a(function(e, t) {
  return t.map(function(o, i) {
    var r, n = ((r = { key: i })["data-rh"] = !0, r);
    return Object.keys(o).forEach(function(l) {
      var u = hr[l] || l;
      u === "innerHTML" || u === "cssText" ? n.dangerouslySetInnerHTML = { __html: o.innerHTML || o.cssText } : n[u] = o[l];
    }), s.createElement(e, n);
  });
}, "j"), Ke = /* @__PURE__ */ a(function(e, t, o) {
  switch (e) {
    case X.TITLE:
      return { toComponent: /* @__PURE__ */ a(function() {
        return r = t.titleAttributes, (n = { key: i = t.title })["data-rh"] = !0, l = ll(r, n), [s.createElement(X.TITLE, l, i)];
        var i, r, n, l;
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, r, n, l) {
          var u = al(n), c = dl(r);
          return u ? "<" + i + ' data-rh="true" ' + u + ">" + si(c, l) + "</" + i + ">" : "<" + i + ' data-rh="true">' + si(c, l) + "</" + i +
=======
}, "x"), Ma = /* @__PURE__ */ a(function(e, t) {
  return t === void 0 && (t = {}), Object.keys(e).reduce(function(o, i) {
    return o[$o[i] || i] = e[i], o;
  }, t);
}, "L"), Ko = /* @__PURE__ */ a(function(e, t) {
  return t.map(function(o, i) {
    var n, r = ((n = { key: i })["data-rh"] = !0, n);
    return Object.keys(o).forEach(function(l) {
      var u = $o[l] || l;
      u === "innerHTML" || u === "cssText" ? r.dangerouslySetInnerHTML = { __html: o.innerHTML || o.cssText } : r[u] = o[l];
    }), s.createElement(e, r);
  });
}, "j"), je = /* @__PURE__ */ a(function(e, t, o) {
  switch (e) {
    case Z.TITLE:
      return { toComponent: /* @__PURE__ */ a(function() {
        return n = t.titleAttributes, (r = { key: i = t.title })["data-rh"] = !0, l = Ma(n, r), [s.createElement(Z.TITLE, l, i)];
        var i, n, r, l;
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, n, r, l) {
          var u = Da(r), c = Fa(n);
          return u ? "<" + i + ' data-rh="true" ' + u + ">" + mn(c, l) + "</" + i + ">" : "<" + i + ' data-rh="true">' + mn(c, l) + "</" + i +
>>>>>>> main
          ">";
        }(e, t.title, t.titleAttributes, o);
      }, "toString") };
    case "bodyAttributes":
    case "htmlAttributes":
      return { toComponent: /* @__PURE__ */ a(function() {
<<<<<<< HEAD
        return ll(t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return al(t);
      }, "toString") };
    default:
      return { toComponent: /* @__PURE__ */ a(function() {
        return mr(e, t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, r, n) {
          return r.reduce(function(l, u) {
            var c = Object.keys(u).filter(function(m) {
              return !(m === "innerHTML" || m === "cssText");
            }).reduce(function(m, h) {
              var b = u[h] === void 0 ? h : h + '="' + si(u[h], n) + '"';
              return m ? m + " " + b : b;
            }, ""), d = u.innerHTML || u.cssText || "", p = Sy.indexOf(i) === -1;
            return l + "<" + i + ' data-rh="true" ' + c + (p ? "/>" : ">" + d + "</" + i + ">");
=======
        return Ma(t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return Da(t);
      }, "toString") };
    default:
      return { toComponent: /* @__PURE__ */ a(function() {
        return Ko(e, t);
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return function(i, n, r) {
          return n.reduce(function(l, u) {
            var c = Object.keys(u).filter(function(g) {
              return !(g === "innerHTML" || g === "cssText");
            }).reduce(function(g, h) {
              var y = u[h] === void 0 ? h : h + '="' + mn(u[h], r) + '"';
              return g ? g + " " + y : y;
            }, ""), p = u.innerHTML || u.cssText || "", d = rf.indexOf(i) === -1;
            return l + "<" + i + ' data-rh="true" ' + c + (d ? "/>" : ">" + p + "</" + i + ">");
>>>>>>> main
          }, "");
        }(e, t, o);
      }, "toString") };
  }
<<<<<<< HEAD
}, "M"), ci = /* @__PURE__ */ a(function(e) {
  var t = e.baseTag, o = e.bodyAttributes, i = e.encode, r = e.htmlAttributes, n = e.noscriptTags, l = e.styleTags, u = e.title, c = u === void 0 ?
  "" : u, d = e.titleAttributes, p = e.linkTags, m = e.metaTags, h = e.scriptTags, b = { toComponent: /* @__PURE__ */ a(function() {
=======
}, "M"), bn = /* @__PURE__ */ a(function(e) {
  var t = e.baseTag, o = e.bodyAttributes, i = e.encode, n = e.htmlAttributes, r = e.noscriptTags, l = e.styleTags, u = e.title, c = u === void 0 ?
  "" : u, p = e.titleAttributes, d = e.linkTags, g = e.metaTags, h = e.scriptTags, y = { toComponent: /* @__PURE__ */ a(function() {
>>>>>>> main
  }, "toComponent"), toString: /* @__PURE__ */ a(function() {
    return "";
  }, "toString") };
  if (e.prioritizeSeoTags) {
<<<<<<< HEAD
    var f = function(y) {
      var S = y.linkTags, E = y.scriptTags, g = y.encode, v = ii(y.metaTags, gy), I = ii(S, my), w = ii(E, hy);
      return { priorityMethods: { toComponent: /* @__PURE__ */ a(function() {
        return [].concat(mr(X.META, v.priority), mr(X.LINK, I.priority), mr(X.SCRIPT, w.priority));
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return Ke(X.META, v.priority, g) + " " + Ke(X.LINK, I.priority, g) + " " + Ke(X.SCRIPT, w.priority, g);
      }, "toString") }, metaTags: v.default, linkTags: I.default, scriptTags: w.default };
    }(e);
    b = f.priorityMethods, p = f.linkTags, m = f.metaTags, h = f.scriptTags;
  }
  return { priority: b, base: Ke(X.BASE, t, i), bodyAttributes: Ke("bodyAttributes", o, i), htmlAttributes: Ke("htmlAttributes", r, i), link: Ke(
  X.LINK, p, i), meta: Ke(X.META, m, i), noscript: Ke(X.NOSCRIPT, n, i), script: Ke(X.SCRIPT, h, i), style: Ke(X.STYLE, l, i), title: Ke(X.TITLE,
  { title: c, titleAttributes: d }, i) };
}, "k"), fr = [], pi = /* @__PURE__ */ a(function(e, t) {
=======
    var f = function(b) {
      var I = b.linkTags, _ = b.scriptTags, m = b.encode, v = fn(b.metaTags, Xd), S = fn(I, qd), E = fn(_, Qd);
      return { priorityMethods: { toComponent: /* @__PURE__ */ a(function() {
        return [].concat(Ko(Z.META, v.priority), Ko(Z.LINK, S.priority), Ko(Z.SCRIPT, E.priority));
      }, "toComponent"), toString: /* @__PURE__ */ a(function() {
        return je(Z.META, v.priority, m) + " " + je(Z.LINK, S.priority, m) + " " + je(Z.SCRIPT, E.priority, m);
      }, "toString") }, metaTags: v.default, linkTags: S.default, scriptTags: E.default };
    }(e);
    y = f.priorityMethods, d = f.linkTags, g = f.metaTags, h = f.scriptTags;
  }
  return { priority: y, base: je(Z.BASE, t, i), bodyAttributes: je("bodyAttributes", o, i), htmlAttributes: je("htmlAttributes", n, i), link: je(
  Z.LINK, d, i), meta: je(Z.META, g, i), noscript: je(Z.NOSCRIPT, r, i), script: je(Z.SCRIPT, h, i), style: je(Z.STYLE, l, i), title: je(Z.TITLE,
  { title: c, titleAttributes: p }, i) };
}, "k"), Vo = [], vn = /* @__PURE__ */ a(function(e, t) {
>>>>>>> main
  var o = this;
  t === void 0 && (t = typeof document < "u"), this.instances = [], this.value = { setHelmet: /* @__PURE__ */ a(function(i) {
    o.context.helmet = i;
  }, "setHelmet"), helmetInstances: { get: /* @__PURE__ */ a(function() {
<<<<<<< HEAD
    return o.canUseDOM ? fr : o.instances;
  }, "get"), add: /* @__PURE__ */ a(function(i) {
    (o.canUseDOM ? fr : o.instances).push(i);
  }, "add"), remove: /* @__PURE__ */ a(function(i) {
    var r = (o.canUseDOM ? fr : o.instances).indexOf(i);
    (o.canUseDOM ? fr : o.instances).splice(r, 1);
  }, "remove") } }, this.context = e, this.canUseDOM = t, t || (e.helmet = ci({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0,
  htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, "N"), fl = s.createContext({}), wy = ne.default.shape({ setHelmet: ne.default.func, helmetInstances: ne.default.shape({ get: ne.default.func,
add: ne.default.func, remove: ne.default.func }) }), Ey = typeof document < "u", yt = /* @__PURE__ */ function(e) {
  function t(o) {
    var i;
    return (i = e.call(this, o) || this).helmetData = new pi(i.props.context, t.canUseDOM), i;
  }
  return a(t, "r"), di(t, e), t.prototype.render = function() {
    return s.createElement(fl.Provider, { value: this.helmetData.value }, this.props.children);
  }, t;
}(Le);
yt.canUseDOM = Ey, yt.propTypes = { context: ne.default.shape({ helmet: ne.default.shape() }), children: ne.default.node.isRequired }, yt.defaultProps =
{ context: {} }, yt.displayName = "HelmetProvider";
var oo = /* @__PURE__ */ a(function(e, t) {
  var o, i = document.head || document.querySelector(X.HEAD), r = i.querySelectorAll(e + "[data-rh]"), n = [].slice.call(r), l = [];
  return t && t.length && t.forEach(function(u) {
    var c = document.createElement(e);
    for (var d in u) Object.prototype.hasOwnProperty.call(u, d) && (d === "innerHTML" ? c.innerHTML = u.innerHTML : d === "cssText" ? c.styleSheet ?
    c.styleSheet.cssText = u.cssText : c.appendChild(document.createTextNode(u.cssText)) : c.setAttribute(d, u[d] === void 0 ? "" : u[d]));
    c.setAttribute("data-rh", "true"), n.some(function(p, m) {
      return o = m, c.isEqualNode(p);
    }) ? n.splice(o, 1) : l.push(c);
  }), n.forEach(function(u) {
    return u.parentNode.removeChild(u);
  }), l.forEach(function(u) {
    return i.appendChild(u);
  }), { oldTags: n, newTags: l };
}, "Y"), ai = /* @__PURE__ */ a(function(e, t) {
  var o = document.getElementsByTagName(e)[0];
  if (o) {
    for (var i = o.getAttribute("data-rh"), r = i ? i.split(",") : [], n = [].concat(r), l = Object.keys(t), u = 0; u < l.length; u += 1) {
      var c = l[u], d = t[c] || "";
      o.getAttribute(c) !== d && o.setAttribute(c, d), r.indexOf(c) === -1 && r.push(c);
      var p = n.indexOf(c);
      p !== -1 && n.splice(p, 1);
    }
    for (var m = n.length - 1; m >= 0; m -= 1) o.removeAttribute(n[m]);
    r.length === n.length ? o.removeAttribute("data-rh") : o.getAttribute("data-rh") !== l.join(",") && o.setAttribute("data-rh", l.join(","));
  }
}, "B"), ul = /* @__PURE__ */ a(function(e, t) {
  var o = e.baseTag, i = e.htmlAttributes, r = e.linkTags, n = e.metaTags, l = e.noscriptTags, u = e.onChangeClientState, c = e.scriptTags, d = e.
  styleTags, p = e.title, m = e.titleAttributes;
  ai(X.BODY, e.bodyAttributes), ai(X.HTML, i), function(y, S) {
    y !== void 0 && document.title !== y && (document.title = dl(y)), ai(X.TITLE, S);
  }(p, m);
  var h = { baseTag: oo(X.BASE, o), linkTags: oo(X.LINK, r), metaTags: oo(X.META, n), noscriptTags: oo(X.NOSCRIPT, l), scriptTags: oo(X.SCRIPT,
  c), styleTags: oo(X.STYLE, d) }, b = {}, f = {};
  Object.keys(h).forEach(function(y) {
    var S = h[y], E = S.newTags, g = S.oldTags;
    E.length && (b[y] = E), g.length && (f[y] = h[y].oldTags);
  }), t && t(), u(e, b, f);
}, "K"), _o = null, gr = /* @__PURE__ */ function(e) {
  function t() {
    for (var i, r = arguments.length, n = new Array(r), l = 0; l < r; l++) n[l] = arguments[l];
    return (i = e.call.apply(e, [this].concat(n)) || this).rendered = !1, i;
  }
  a(t, "e"), di(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, pl.default)(i, this.props);
=======
    return o.canUseDOM ? Vo : o.instances;
  }, "get"), add: /* @__PURE__ */ a(function(i) {
    (o.canUseDOM ? Vo : o.instances).push(i);
  }, "add"), remove: /* @__PURE__ */ a(function(i) {
    var n = (o.canUseDOM ? Vo : o.instances).indexOf(i);
    (o.canUseDOM ? Vo : o.instances).splice(n, 1);
  }, "remove") } }, this.context = e, this.canUseDOM = t, t || (e.helmet = bn({ baseTag: [], bodyAttributes: {}, encodeSpecialCharacters: !0,
  htmlAttributes: {}, linkTags: [], metaTags: [], noscriptTags: [], scriptTags: [], styleTags: [], title: "", titleAttributes: {} }));
}, "N"), Ha = s.createContext({}), nf = ne.default.shape({ setHelmet: ne.default.func, helmetInstances: ne.default.shape({ get: ne.default.func,
add: ne.default.func, remove: ne.default.func }) }), sf = typeof document < "u", ht = /* @__PURE__ */ function(e) {
  function t(o) {
    var i;
    return (i = e.call(this, o) || this).helmetData = new vn(i.props.context, t.canUseDOM), i;
  }
  return a(t, "r"), xn(t, e), t.prototype.render = function() {
    return s.createElement(Ha.Provider, { value: this.helmetData.value }, this.props.children);
  }, t;
}(Re);
ht.canUseDOM = sf, ht.propTypes = { context: ne.default.shape({ helmet: ne.default.shape() }), children: ne.default.node.isRequired }, ht.defaultProps =
{ context: {} }, ht.displayName = "HelmetProvider";
var Gt = /* @__PURE__ */ a(function(e, t) {
  var o, i = document.head || document.querySelector(Z.HEAD), n = i.querySelectorAll(e + "[data-rh]"), r = [].slice.call(n), l = [];
  return t && t.length && t.forEach(function(u) {
    var c = document.createElement(e);
    for (var p in u) Object.prototype.hasOwnProperty.call(u, p) && (p === "innerHTML" ? c.innerHTML = u.innerHTML : p === "cssText" ? c.styleSheet ?
    c.styleSheet.cssText = u.cssText : c.appendChild(document.createTextNode(u.cssText)) : c.setAttribute(p, u[p] === void 0 ? "" : u[p]));
    c.setAttribute("data-rh", "true"), r.some(function(d, g) {
      return o = g, c.isEqualNode(d);
    }) ? r.splice(o, 1) : l.push(c);
  }), r.forEach(function(u) {
    return u.parentNode.removeChild(u);
  }), l.forEach(function(u) {
    return i.appendChild(u);
  }), { oldTags: r, newTags: l };
}, "Y"), hn = /* @__PURE__ */ a(function(e, t) {
  var o = document.getElementsByTagName(e)[0];
  if (o) {
    for (var i = o.getAttribute("data-rh"), n = i ? i.split(",") : [], r = [].concat(n), l = Object.keys(t), u = 0; u < l.length; u += 1) {
      var c = l[u], p = t[c] || "";
      o.getAttribute(c) !== p && o.setAttribute(c, p), n.indexOf(c) === -1 && n.push(c);
      var d = r.indexOf(c);
      d !== -1 && r.splice(d, 1);
    }
    for (var g = r.length - 1; g >= 0; g -= 1) o.removeAttribute(r[g]);
    n.length === r.length ? o.removeAttribute("data-rh") : o.getAttribute("data-rh") !== l.join(",") && o.setAttribute("data-rh", l.join(","));
  }
}, "B"), La = /* @__PURE__ */ a(function(e, t) {
  var o = e.baseTag, i = e.htmlAttributes, n = e.linkTags, r = e.metaTags, l = e.noscriptTags, u = e.onChangeClientState, c = e.scriptTags, p = e.
  styleTags, d = e.title, g = e.titleAttributes;
  hn(Z.BODY, e.bodyAttributes), hn(Z.HTML, i), function(b, I) {
    b !== void 0 && document.title !== b && (document.title = Fa(b)), hn(Z.TITLE, I);
  }(d, g);
  var h = { baseTag: Gt(Z.BASE, o), linkTags: Gt(Z.LINK, n), metaTags: Gt(Z.META, r), noscriptTags: Gt(Z.NOSCRIPT, l), scriptTags: Gt(Z.SCRIPT,
  c), styleTags: Gt(Z.STYLE, p) }, y = {}, f = {};
  Object.keys(h).forEach(function(b) {
    var I = h[b], _ = I.newTags, m = I.oldTags;
    _.length && (y[b] = _), m.length && (f[b] = h[b].oldTags);
  }), t && t(), u(e, y, f);
}, "K"), lo = null, Uo = /* @__PURE__ */ function(e) {
  function t() {
    for (var i, n = arguments.length, r = new Array(n), l = 0; l < n; l++) r[l] = arguments[l];
    return (i = e.call.apply(e, [this].concat(r)) || this).rendered = !1, i;
  }
  a(t, "e"), xn(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, Ra.default)(i, this.props);
>>>>>>> main
  }, o.componentDidUpdate = function() {
    this.emitChange();
  }, o.componentWillUnmount = function() {
    this.props.context.helmetInstances.remove(this), this.emitChange();
  }, o.emitChange = function() {
<<<<<<< HEAD
    var i, r, n = this.props.context, l = n.setHelmet, u = null, c = (i = n.helmetInstances.get().map(function(d) {
      var p = xe({}, d.props);
      return delete p.context, p;
    }), { baseTag: xy(["href"], i), bodyAttributes: ni("bodyAttributes", i), defer: ro(i, "defer"), encode: ro(i, "encodeSpecialCharacters"),
    htmlAttributes: ni("htmlAttributes", i), linkTags: Co(X.LINK, ["rel", "href"], i), metaTags: Co(X.META, ["name", "charset", "http-equiv",
    "property", "itemprop"], i), noscriptTags: Co(X.NOSCRIPT, ["innerHTML"], i), onChangeClientState: vy(i), scriptTags: Co(X.SCRIPT, ["src",
    "innerHTML"], i), styleTags: Co(X.STYLE, ["cssText"], i), title: by(i), titleAttributes: ni("titleAttributes", i), prioritizeSeoTags: Iy(
    i, "prioritizeSeoTags") });
    yt.canUseDOM ? (r = c, _o && cancelAnimationFrame(_o), r.defer ? _o = requestAnimationFrame(function() {
      ul(r, function() {
        _o = null;
      });
    }) : (ul(r), _o = null)) : ci && (u = ci(c)), l(u);
=======
    var i, n, r = this.props.context, l = r.setHelmet, u = null, c = (i = r.helmetInstances.get().map(function(p) {
      var d = xe({}, p.props);
      return delete d.context, d;
    }), { baseTag: tf(["href"], i), bodyAttributes: dn("bodyAttributes", i), defer: Yt(i, "defer"), encode: Yt(i, "encodeSpecialCharacters"),
    htmlAttributes: dn("htmlAttributes", i), linkTags: ao(Z.LINK, ["rel", "href"], i), metaTags: ao(Z.META, ["name", "charset", "http-equiv",
    "property", "itemprop"], i), noscriptTags: ao(Z.NOSCRIPT, ["innerHTML"], i), onChangeClientState: ef(i), scriptTags: ao(Z.SCRIPT, ["src",
    "innerHTML"], i), styleTags: ao(Z.STYLE, ["cssText"], i), title: Jd(i), titleAttributes: dn("titleAttributes", i), prioritizeSeoTags: of(
    i, "prioritizeSeoTags") });
    ht.canUseDOM ? (n = c, lo && cancelAnimationFrame(lo), n.defer ? lo = requestAnimationFrame(function() {
      La(n, function() {
        lo = null;
      });
    }) : (La(n), lo = null)) : bn && (u = bn(c)), l(u);
>>>>>>> main
  }, o.init = function() {
    this.rendered || (this.rendered = !0, this.props.context.helmetInstances.add(this), this.emitChange());
  }, o.render = function() {
    return this.init(), null;
  }, t;
<<<<<<< HEAD
}(Le);
gr.propTypes = { context: wy.isRequired }, gr.displayName = "HelmetDispatcher";
var Ty = ["children"], Cy = ["children"], ko = /* @__PURE__ */ function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  a(t, "r"), di(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, cl.default)(sl(this.props, "helmetData"), sl(i, "helmetData"));
  }, o.mapNestedChildrenToProps = function(i, r) {
    if (!r) return null;
    switch (i.type) {
      case X.SCRIPT:
      case X.NOSCRIPT:
        return { innerHTML: r };
      case X.STYLE:
        return { cssText: r };
=======
}(Re);
Uo.propTypes = { context: nf.isRequired }, Uo.displayName = "HelmetDispatcher";
var af = ["children"], lf = ["children"], uo = /* @__PURE__ */ function(e) {
  function t() {
    return e.apply(this, arguments) || this;
  }
  a(t, "r"), xn(t, e);
  var o = t.prototype;
  return o.shouldComponentUpdate = function(i) {
    return !(0, Na.default)(Aa(this.props, "helmetData"), Aa(i, "helmetData"));
  }, o.mapNestedChildrenToProps = function(i, n) {
    if (!n) return null;
    switch (i.type) {
      case Z.SCRIPT:
      case Z.NOSCRIPT:
        return { innerHTML: n };
      case Z.STYLE:
        return { cssText: n };
>>>>>>> main
      default:
        throw new Error("<" + i.type + " /> elements are self-closing and can not contain children. Refer to our API for more information.");
    }
  }, o.flattenArrayTypeChildren = function(i) {
<<<<<<< HEAD
    var r, n = i.child, l = i.arrayTypeChildren;
    return xe({}, l, ((r = {})[n.type] = [].concat(l[n.type] || [], [xe({}, i.newChildProps, this.mapNestedChildrenToProps(n, i.nestedChildren))]),
    r));
  }, o.mapObjectTypeChildren = function(i) {
    var r, n, l = i.child, u = i.newProps, c = i.newChildProps, d = i.nestedChildren;
    switch (l.type) {
      case X.TITLE:
        return xe({}, u, ((r = {})[l.type] = d, r.titleAttributes = xe({}, c), r));
      case X.BODY:
        return xe({}, u, { bodyAttributes: xe({}, c) });
      case X.HTML:
        return xe({}, u, { htmlAttributes: xe({}, c) });
      default:
        return xe({}, u, ((n = {})[l.type] = xe({}, c), n));
    }
  }, o.mapArrayTypeChildrenToProps = function(i, r) {
    var n = xe({}, r);
    return Object.keys(i).forEach(function(l) {
      var u;
      n = xe({}, n, ((u = {})[l] = i[l], u));
    }), n;
  }, o.warnOnInvalidChildren = function(i, r) {
    return (0, li.default)(il.some(function(n) {
      return i.type === n;
    }), typeof i.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to o\
ur API for more information." : "Only elements types " + il.join(", ") + " are allowed. Helmet does not support rendering <" + i.type + "> e\
lements. Refer to our API for more information."), (0, li.default)(!r || typeof r == "string" || Array.isArray(r) && !r.some(function(n) {
      return typeof n != "string";
    }), "Helmet expects a string as a child of <" + i.type + ">. Did you forget to wrap your children in braces? ( <" + i.type + ">{``}</" +
    i.type + "> ) Refer to our API for more information."), !0;
  }, o.mapChildrenToProps = function(i, r) {
    var n = this, l = {};
    return s.Children.forEach(i, function(u) {
      if (u && u.props) {
        var c = u.props, d = c.children, p = nl(c, Ty), m = Object.keys(p).reduce(function(b, f) {
          return b[yy[f] || f] = p[f], b;
        }, {}), h = u.type;
        switch (typeof h == "symbol" ? h = h.toString() : n.warnOnInvalidChildren(u, d), h) {
          case X.FRAGMENT:
            r = n.mapChildrenToProps(d, r);
            break;
          case X.LINK:
          case X.META:
          case X.NOSCRIPT:
          case X.SCRIPT:
          case X.STYLE:
            l = n.flattenArrayTypeChildren({ child: u, arrayTypeChildren: l, newChildProps: m, nestedChildren: d });
            break;
          default:
            r = n.mapObjectTypeChildren({ child: u, newProps: r, newChildProps: m, nestedChildren: d });
        }
      }
    }), this.mapArrayTypeChildrenToProps(l, r);
  }, o.render = function() {
    var i = this.props, r = i.children, n = nl(i, Cy), l = xe({}, n), u = n.helmetData;
    return r && (l = this.mapChildrenToProps(r, l)), !u || u instanceof pi || (u = new pi(u.context, u.instances)), u ? /* @__PURE__ */ s.createElement(
    gr, xe({}, l, { context: u.value, helmetData: void 0 })) : /* @__PURE__ */ s.createElement(fl.Consumer, null, function(c) {
      return s.createElement(gr, xe({}, l, { context: c }));
    });
  }, t;
}(Le);
ko.propTypes = { base: ne.default.object, bodyAttributes: ne.default.object, children: ne.default.oneOfType([ne.default.arrayOf(ne.default.node),
=======
    var n, r = i.child, l = i.arrayTypeChildren;
    return xe({}, l, ((n = {})[r.type] = [].concat(l[r.type] || [], [xe({}, i.newChildProps, this.mapNestedChildrenToProps(r, i.nestedChildren))]),
    n));
  }, o.mapObjectTypeChildren = function(i) {
    var n, r, l = i.child, u = i.newProps, c = i.newChildProps, p = i.nestedChildren;
    switch (l.type) {
      case Z.TITLE:
        return xe({}, u, ((n = {})[l.type] = p, n.titleAttributes = xe({}, c), n));
      case Z.BODY:
        return xe({}, u, { bodyAttributes: xe({}, c) });
      case Z.HTML:
        return xe({}, u, { htmlAttributes: xe({}, c) });
      default:
        return xe({}, u, ((r = {})[l.type] = xe({}, c), r));
    }
  }, o.mapArrayTypeChildrenToProps = function(i, n) {
    var r = xe({}, n);
    return Object.keys(i).forEach(function(l) {
      var u;
      r = xe({}, r, ((u = {})[l] = i[l], u));
    }), r;
  }, o.warnOnInvalidChildren = function(i, n) {
    return (0, gn.default)(Pa.some(function(r) {
      return i.type === r;
    }), typeof i.type == "function" ? "You may be attempting to nest <Helmet> components within each other, which is not allowed. Refer to o\
ur API for more information." : "Only elements types " + Pa.join(", ") + " are allowed. Helmet does not support rendering <" + i.type + "> e\
lements. Refer to our API for more information."), (0, gn.default)(!n || typeof n == "string" || Array.isArray(n) && !n.some(function(r) {
      return typeof r != "string";
    }), "Helmet expects a string as a child of <" + i.type + ">. Did you forget to wrap your children in braces? ( <" + i.type + ">{``}</" +
    i.type + "> ) Refer to our API for more information."), !0;
  }, o.mapChildrenToProps = function(i, n) {
    var r = this, l = {};
    return s.Children.forEach(i, function(u) {
      if (u && u.props) {
        var c = u.props, p = c.children, d = Oa(c, af), g = Object.keys(d).reduce(function(y, f) {
          return y[Zd[f] || f] = d[f], y;
        }, {}), h = u.type;
        switch (typeof h == "symbol" ? h = h.toString() : r.warnOnInvalidChildren(u, p), h) {
          case Z.FRAGMENT:
            n = r.mapChildrenToProps(p, n);
            break;
          case Z.LINK:
          case Z.META:
          case Z.NOSCRIPT:
          case Z.SCRIPT:
          case Z.STYLE:
            l = r.flattenArrayTypeChildren({ child: u, arrayTypeChildren: l, newChildProps: g, nestedChildren: p });
            break;
          default:
            n = r.mapObjectTypeChildren({ child: u, newProps: n, newChildProps: g, nestedChildren: p });
        }
      }
    }), this.mapArrayTypeChildrenToProps(l, n);
  }, o.render = function() {
    var i = this.props, n = i.children, r = Oa(i, lf), l = xe({}, r), u = r.helmetData;
    return n && (l = this.mapChildrenToProps(n, l)), !u || u instanceof vn || (u = new vn(u.context, u.instances)), u ? /* @__PURE__ */ s.createElement(
    Uo, xe({}, l, { context: u.value, helmetData: void 0 })) : /* @__PURE__ */ s.createElement(Ha.Consumer, null, function(c) {
      return s.createElement(Uo, xe({}, l, { context: c }));
    });
  }, t;
}(Re);
uo.propTypes = { base: ne.default.object, bodyAttributes: ne.default.object, children: ne.default.oneOfType([ne.default.arrayOf(ne.default.node),
>>>>>>> main
ne.default.node]), defaultTitle: ne.default.string, defer: ne.default.bool, encodeSpecialCharacters: ne.default.bool, htmlAttributes: ne.default.
object, link: ne.default.arrayOf(ne.default.object), meta: ne.default.arrayOf(ne.default.object), noscript: ne.default.arrayOf(ne.default.object),
onChangeClientState: ne.default.func, script: ne.default.arrayOf(ne.default.object), style: ne.default.arrayOf(ne.default.object), title: ne.default.
string, titleAttributes: ne.default.object, titleTemplate: ne.default.string, prioritizeSeoTags: ne.default.bool, helmetData: ne.default.object },
<<<<<<< HEAD
ko.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }, ko.displayName = "Helmet";
=======
uo.defaultProps = { defer: !0, encodeSpecialCharacters: !0, prioritizeSeoTags: !1 }, uo.displayName = "Helmet";
>>>>>>> main

// src/manager/constants.ts
var Qe = "@media (min-width: 600px)";

// src/manager/components/hooks/useMedia.tsx
<<<<<<< HEAD
function ml(e) {
  let t = /* @__PURE__ */ a((n) => typeof window < "u" ? window.matchMedia(n).matches : !1, "getMatches"), [o, i] = K(t(e));
  function r() {
    i(t(e));
  }
  return a(r, "handleChange"), V(() => {
    let n = window.matchMedia(e);
    return r(), n.addEventListener("change", r), () => {
      n.removeEventListener("change", r);
    };
  }, [e]), o;
}
a(ml, "useMediaQuery");

// src/manager/components/layout/LayoutProvider.tsx
var hl = Qt({
=======
function Ba(e) {
  let t = /* @__PURE__ */ a((r) => typeof window < "u" ? window.matchMedia(r).matches : !1, "getMatches"), [o, i] = $(t(e));
  function n() {
    i(t(e));
  }
  return a(n, "handleChange"), j(() => {
    let r = window.matchMedia(e);
    return n(), r.addEventListener("change", n), () => {
      r.removeEventListener("change", n);
    };
  }, [e]), o;
}
a(Ba, "useMediaQuery");

// src/manager/components/layout/LayoutProvider.tsx
var za = jt({
>>>>>>> main
  isMobileMenuOpen: !1,
  setMobileMenuOpen: /* @__PURE__ */ a(() => {
  }, "setMobileMenuOpen"),
  isMobileAboutOpen: !1,
  setMobileAboutOpen: /* @__PURE__ */ a(() => {
  }, "setMobileAboutOpen"),
  isMobilePanelOpen: !1,
  setMobilePanelOpen: /* @__PURE__ */ a(() => {
  }, "setMobilePanelOpen"),
  isDesktop: !1,
  isMobile: !1
<<<<<<< HEAD
}), gl = /* @__PURE__ */ a(({ children: e }) => {
  let [t, o] = K(!1), [i, r] = K(!1), [n, l] = K(!1), u = ml(`(min-width: ${600}px)`), c = !u, d = U(
=======
}), Wa = /* @__PURE__ */ a(({ children: e }) => {
  let [t, o] = $(!1), [i, n] = $(!1), [r, l] = $(!1), u = Ba(`(min-width: ${600}px)`), c = !u, p = K(
>>>>>>> main
    () => ({
      isMobileMenuOpen: t,
      setMobileMenuOpen: o,
      isMobileAboutOpen: i,
<<<<<<< HEAD
      setMobileAboutOpen: r,
      isMobilePanelOpen: n,
=======
      setMobileAboutOpen: n,
      isMobilePanelOpen: r,
>>>>>>> main
      setMobilePanelOpen: l,
      isDesktop: u,
      isMobile: c
    }),
    [
      t,
      o,
      i,
<<<<<<< HEAD
      r,
      n,
=======
      n,
      r,
>>>>>>> main
      l,
      u,
      c
    ]
  );
<<<<<<< HEAD
  return /* @__PURE__ */ s.createElement(hl.Provider, { value: d }, e);
}, "LayoutProvider"), ge = /* @__PURE__ */ a(() => Go(hl), "useLayout");

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function j() {
  return j = Object.assign ? Object.assign.bind() : function(e) {
=======
  return /* @__PURE__ */ s.createElement(za.Provider, { value: p }, e);
}, "LayoutProvider"), ge = /* @__PURE__ */ a(() => ko(za), "useLayout");

// global-externals:@storybook/core/components
var Ww = __STORYBOOK_COMPONENTS__, { A: jw, ActionBar: Vw, AddonPanel: Kw, Badge: Go, Bar: $w, Blockquote: Uw, Button: me, ClipboardCode: Gw,
Code: Yw, DL: qw, Div: Qw, DocumentWrapper: Xw, EmptyTabContent: ja, ErrorFormatter: Va, FlexBar: Zw, Form: Yo, H1: Jw, H2: eT, H3: tT, H4: oT,
H5: rT, H6: nT, HR: iT, IconButton: te, IconButtonSkeleton: sT, Icons: Ka, Img: aT, LI: lT, Link: Me, ListItem: uf, Loader: qo, Modal: Et, OL: uT,
P: cT, Placeholder: pT, Pre: dT, ProgressSpinner: $a, ResetWrapper: fT, ScrollArea: Qo, Separator: qt, Spaced: lt, Span: mT, StorybookIcon: hT,
StorybookLogo: Xo, Symbols: gT, SyntaxHighlighter: yT, TT: bT, TabBar: Zo, TabButton: Jo, TabWrapper: vT, Table: xT, Tabs: Ua, TabsState: ST,
TooltipLinkList: gt, TooltipMessage: IT, TooltipNote: Xe, UL: ET, WithTooltip: be, WithTooltipPure: _T, Zoom: Ga, codeCommon: wT, components: TT,
createCopyToClipboardFunction: CT, getStoryHref: Qt, icons: kT, interleaveSeparators: OT, nameSpaceClassNames: PT, resetComponents: AT, withReset: DT } = __STORYBOOK_COMPONENTS__;

// ../node_modules/@babel/runtime/helpers/esm/extends.js
function G() {
  return G = Object.assign ? Object.assign.bind() : function(e) {
>>>>>>> main
    for (var t = 1; t < arguments.length; t++) {
      var o = arguments[t];
      for (var i in o) ({}).hasOwnProperty.call(o, i) && (e[i] = o[i]);
    }
    return e;
<<<<<<< HEAD
  }, j.apply(null, arguments);
}
a(j, "_extends");

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function yl(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
a(yl, "_assertThisInitialized");

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function bt(e, t) {
  return bt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, bt(e, t);
}
a(bt, "_setPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function no(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, bt(e, t);
}
a(no, "_inheritsLoose");

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function yr(e) {
  return yr = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, yr(e);
}
a(yr, "_getPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function bl(e) {
=======
  }, G.apply(null, arguments);
}
a(G, "_extends");

// ../node_modules/@babel/runtime/helpers/esm/assertThisInitialized.js
function Ya(e) {
  if (e === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
a(Ya, "_assertThisInitialized");

// ../node_modules/@babel/runtime/helpers/esm/setPrototypeOf.js
function yt(e, t) {
  return yt = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, i) {
    return o.__proto__ = i, o;
  }, yt(e, t);
}
a(yt, "_setPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js
function Xt(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, yt(e, t);
}
a(Xt, "_inheritsLoose");

// ../node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js
function er(e) {
  return er = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, er(e);
}
a(er, "_getPrototypeOf");

// ../node_modules/@babel/runtime/helpers/esm/isNativeFunction.js
function qa(e) {
>>>>>>> main
  try {
    return Function.toString.call(e).indexOf("[native code]") !== -1;
  } catch {
    return typeof e == "function";
  }
}
<<<<<<< HEAD
a(bl, "_isNativeFunction");

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function fi() {
=======
a(qa, "_isNativeFunction");

// ../node_modules/@babel/runtime/helpers/esm/isNativeReflectConstruct.js
function Sn() {
>>>>>>> main
  try {
    var e = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
<<<<<<< HEAD
  return (fi = /* @__PURE__ */ a(function() {
    return !!e;
  }, "_isNativeReflectConstruct"))();
}
a(fi, "_isNativeReflectConstruct");

// ../node_modules/@babel/runtime/helpers/esm/construct.js
function vl(e, t, o) {
  if (fi()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, t);
  var r = new (e.bind.apply(e, i))();
  return o && bt(r, o.prototype), r;
}
a(vl, "_construct");

// ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function br(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return br = /* @__PURE__ */ a(function(i) {
    if (i === null || !bl(i)) return i;
    if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(i)) return t.get(i);
      t.set(i, r);
    }
    function r() {
      return vl(i, arguments, yr(this).constructor);
    }
    return a(r, "Wrapper"), r.prototype = Object.create(i.prototype, {
      constructor: {
        value: r,
=======
  return (Sn = /* @__PURE__ */ a(function() {
    return !!e;
  }, "_isNativeReflectConstruct"))();
}
a(Sn, "_isNativeReflectConstruct");

// ../node_modules/@babel/runtime/helpers/esm/construct.js
function Qa(e, t, o) {
  if (Sn()) return Reflect.construct.apply(null, arguments);
  var i = [null];
  i.push.apply(i, t);
  var n = new (e.bind.apply(e, i))();
  return o && yt(n, o.prototype), n;
}
a(Qa, "_construct");

// ../node_modules/@babel/runtime/helpers/esm/wrapNativeSuper.js
function tr(e) {
  var t = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
  return tr = /* @__PURE__ */ a(function(i) {
    if (i === null || !qa(i)) return i;
    if (typeof i != "function") throw new TypeError("Super expression must either be null or a function");
    if (t !== void 0) {
      if (t.has(i)) return t.get(i);
      t.set(i, n);
    }
    function n() {
      return Qa(i, arguments, er(this).constructor);
    }
    return a(n, "Wrapper"), n.prototype = Object.create(i.prototype, {
      constructor: {
        value: n,
>>>>>>> main
        enumerable: !1,
        writable: !0,
        configurable: !0
      }
<<<<<<< HEAD
    }), bt(r, i);
  }, "_wrapNativeSuper"), br(e);
}
a(br, "_wrapNativeSuper");

// ../node_modules/polished/dist/polished.esm.js
var Fe = /* @__PURE__ */ function(e) {
  no(t, e);
=======
    }), yt(n, i);
  }, "_wrapNativeSuper"), tr(e);
}
a(tr, "_wrapNativeSuper");

// ../node_modules/polished/dist/polished.esm.js
var ot = /* @__PURE__ */ function(e) {
  Xt(t, e);
>>>>>>> main
  function t(o) {
    var i;
    if (1)
      i = e.call(this, "An error occurred. See https://github.com/styled-components/polished/blob/main/src/internalHelpers/errors.md#" + o +
      " for more information.") || this;
    else
<<<<<<< HEAD
      for (var r, n, l; l < r; l++)
        ;
    return yl(i);
  }
  return a(t, "PolishedError"), t;
}(/* @__PURE__ */ br(Error));
function xl(e, t) {
  return e.substr(-t.length) === t;
}
a(xl, "endsWith");
var _y = /^([+-]?(?:\d+|\d*\.\d+))([a-z]*|%)$/;
function Il(e) {
  if (typeof e != "string") return e;
  var t = e.match(_y);
  return t ? parseFloat(e) : e;
}
a(Il, "stripUnit");
var ky = /* @__PURE__ */ a(function(t) {
  return function(o, i) {
    i === void 0 && (i = "16px");
    var r = o, n = i;
    if (typeof o == "string") {
      if (!xl(o, "px"))
        throw new Fe(69, t, o);
      r = Il(o);
    }
    if (typeof i == "string") {
      if (!xl(i, "px"))
        throw new Fe(70, t, i);
      n = Il(i);
    }
    if (typeof r == "string")
      throw new Fe(71, o, t);
    if (typeof n == "string")
      throw new Fe(72, i, t);
    return "" + r / n + t;
  };
}, "pxtoFactory"), wl = ky, w1 = wl("em");
var E1 = wl("rem");
function mi(e) {
  return Math.round(e * 255);
}
a(mi, "colorToInt");
function Oy(e, t, o) {
  return mi(e) + "," + mi(t) + "," + mi(o);
}
a(Oy, "convertToInt");
function Oo(e, t, o, i) {
  if (i === void 0 && (i = Oy), t === 0)
    return i(o, o, o);
  var r = (e % 360 + 360) % 360 / 60, n = (1 - Math.abs(2 * o - 1)) * t, l = n * (1 - Math.abs(r % 2 - 1)), u = 0, c = 0, d = 0;
  r >= 0 && r < 1 ? (u = n, c = l) : r >= 1 && r < 2 ? (u = l, c = n) : r >= 2 && r < 3 ? (c = n, d = l) : r >= 3 && r < 4 ? (c = l, d = n) :
  r >= 4 && r < 5 ? (u = l, d = n) : r >= 5 && r < 6 && (u = n, d = l);
  var p = o - n / 2, m = u + p, h = c + p, b = d + p;
  return i(m, h, b);
}
a(Oo, "hslToRgb");
var Sl = {
=======
      for (var n, r, l; l < n; l++)
        ;
    return Ya(i);
  }
  return a(t, "PolishedError"), t;
}(/* @__PURE__ */ tr(Error));
function In(e) {
  return Math.round(e * 255);
}
a(In, "colorToInt");
function cf(e, t, o) {
  return In(e) + "," + In(t) + "," + In(o);
}
a(cf, "convertToInt");
function co(e, t, o, i) {
  if (i === void 0 && (i = cf), t === 0)
    return i(o, o, o);
  var n = (e % 360 + 360) % 360 / 60, r = (1 - Math.abs(2 * o - 1)) * t, l = r * (1 - Math.abs(n % 2 - 1)), u = 0, c = 0, p = 0;
  n >= 0 && n < 1 ? (u = r, c = l) : n >= 1 && n < 2 ? (u = l, c = r) : n >= 2 && n < 3 ? (c = r, p = l) : n >= 3 && n < 4 ? (c = l, p = r) :
  n >= 4 && n < 5 ? (u = l, p = r) : n >= 5 && n < 6 && (u = r, p = l);
  var d = o - r / 2, g = u + d, h = c + d, y = p + d;
  return i(g, h, y);
}
a(co, "hslToRgb");
var Xa = {
>>>>>>> main
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "00ffff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "0000ff",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "00ffff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "ff00ff",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "639",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
<<<<<<< HEAD
function Py(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return Sl[t] ? "#" + Sl[t] : e;
}
a(Py, "nameToHex");
var Ay = /^#[a-fA-F0-9]{6}$/, Dy = /^#[a-fA-F0-9]{8}$/, My = /^#[a-fA-F0-9]{3}$/, Ly = /^#[a-fA-F0-9]{4}$/, hi = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
Ny = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, Fy = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
Ry = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function io(e) {
  if (typeof e != "string")
    throw new Fe(3);
  var t = Py(e);
  if (t.match(Ay))
=======
function pf(e) {
  if (typeof e != "string") return e;
  var t = e.toLowerCase();
  return Xa[t] ? "#" + Xa[t] : e;
}
a(pf, "nameToHex");
var df = /^#[a-fA-F0-9]{6}$/, ff = /^#[a-fA-F0-9]{8}$/, mf = /^#[a-fA-F0-9]{3}$/, hf = /^#[a-fA-F0-9]{4}$/, En = /^rgb\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*\)$/i,
gf = /^rgb(?:a)?\(\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,)?\s*(\d{1,3})\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i, yf = /^hsl\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*\)$/i,
bf = /^hsl(?:a)?\(\s*(\d{0,3}[.]?[0-9]+(?:deg)?)\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,)?\s*(\d{1,3}[.]?[0-9]?)%\s*(?:,|\/)\s*([-+]?\d*[.]?\d+[%]?)\s*\)$/i;
function Cn(e) {
  if (typeof e != "string")
    throw new ot(3);
  var t = pf(e);
  if (t.match(df))
>>>>>>> main
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16)
    };
<<<<<<< HEAD
  if (t.match(Dy)) {
=======
  if (t.match(ff)) {
>>>>>>> main
    var o = parseFloat((parseInt("" + t[7] + t[8], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[2], 16),
      green: parseInt("" + t[3] + t[4], 16),
      blue: parseInt("" + t[5] + t[6], 16),
      alpha: o
    };
  }
<<<<<<< HEAD
  if (t.match(My))
=======
  if (t.match(mf))
>>>>>>> main
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16)
    };
<<<<<<< HEAD
  if (t.match(Ly)) {
=======
  if (t.match(hf)) {
>>>>>>> main
    var i = parseFloat((parseInt("" + t[4] + t[4], 16) / 255).toFixed(2));
    return {
      red: parseInt("" + t[1] + t[1], 16),
      green: parseInt("" + t[2] + t[2], 16),
      blue: parseInt("" + t[3] + t[3], 16),
      alpha: i
    };
  }
<<<<<<< HEAD
  var r = hi.exec(t);
  if (r)
    return {
      red: parseInt("" + r[1], 10),
      green: parseInt("" + r[2], 10),
      blue: parseInt("" + r[3], 10)
    };
  var n = Ny.exec(t.substring(0, 50));
=======
  var n = En.exec(t);
>>>>>>> main
  if (n)
    return {
      red: parseInt("" + n[1], 10),
      green: parseInt("" + n[2], 10),
<<<<<<< HEAD
      blue: parseInt("" + n[3], 10),
      alpha: parseFloat("" + n[4]) > 1 ? parseFloat("" + n[4]) / 100 : parseFloat("" + n[4])
    };
  var l = Fy.exec(t);
  if (l) {
    var u = parseInt("" + l[1], 10), c = parseInt("" + l[2], 10) / 100, d = parseInt("" + l[3], 10) / 100, p = "rgb(" + Oo(u, c, d) + ")", m = hi.
    exec(p);
    if (!m)
      throw new Fe(4, t, p);
    return {
      red: parseInt("" + m[1], 10),
      green: parseInt("" + m[2], 10),
      blue: parseInt("" + m[3], 10)
    };
  }
  var h = Ry.exec(t.substring(0, 50));
  if (h) {
    var b = parseInt("" + h[1], 10), f = parseInt("" + h[2], 10) / 100, y = parseInt("" + h[3], 10) / 100, S = "rgb(" + Oo(b, f, y) + ")", E = hi.
    exec(S);
    if (!E)
      throw new Fe(4, t, S);
    return {
      red: parseInt("" + E[1], 10),
      green: parseInt("" + E[2], 10),
      blue: parseInt("" + E[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4])
    };
  }
  throw new Fe(5);
}
a(io, "parseToRgb");
function By(e) {
  var t = e.red / 255, o = e.green / 255, i = e.blue / 255, r = Math.max(t, o, i), n = Math.min(t, o, i), l = (r + n) / 2;
  if (r === n)
=======
      blue: parseInt("" + n[3], 10)
    };
  var r = gf.exec(t.substring(0, 50));
  if (r)
    return {
      red: parseInt("" + r[1], 10),
      green: parseInt("" + r[2], 10),
      blue: parseInt("" + r[3], 10),
      alpha: parseFloat("" + r[4]) > 1 ? parseFloat("" + r[4]) / 100 : parseFloat("" + r[4])
    };
  var l = yf.exec(t);
  if (l) {
    var u = parseInt("" + l[1], 10), c = parseInt("" + l[2], 10) / 100, p = parseInt("" + l[3], 10) / 100, d = "rgb(" + co(u, c, p) + ")", g = En.
    exec(d);
    if (!g)
      throw new ot(4, t, d);
    return {
      red: parseInt("" + g[1], 10),
      green: parseInt("" + g[2], 10),
      blue: parseInt("" + g[3], 10)
    };
  }
  var h = bf.exec(t.substring(0, 50));
  if (h) {
    var y = parseInt("" + h[1], 10), f = parseInt("" + h[2], 10) / 100, b = parseInt("" + h[3], 10) / 100, I = "rgb(" + co(y, f, b) + ")", _ = En.
    exec(I);
    if (!_)
      throw new ot(4, t, I);
    return {
      red: parseInt("" + _[1], 10),
      green: parseInt("" + _[2], 10),
      blue: parseInt("" + _[3], 10),
      alpha: parseFloat("" + h[4]) > 1 ? parseFloat("" + h[4]) / 100 : parseFloat("" + h[4])
    };
  }
  throw new ot(5);
}
a(Cn, "parseToRgb");
function vf(e) {
  var t = e.red / 255, o = e.green / 255, i = e.blue / 255, n = Math.max(t, o, i), r = Math.min(t, o, i), l = (n + r) / 2;
  if (n === r)
>>>>>>> main
    return e.alpha !== void 0 ? {
      hue: 0,
      saturation: 0,
      lightness: l,
      alpha: e.alpha
    } : {
      hue: 0,
      saturation: 0,
      lightness: l
    };
<<<<<<< HEAD
  var u, c = r - n, d = l > 0.5 ? c / (2 - r - n) : c / (r + n);
  switch (r) {
=======
  var u, c = n - r, p = l > 0.5 ? c / (2 - n - r) : c / (n + r);
  switch (n) {
>>>>>>> main
    case t:
      u = (o - i) / c + (o < i ? 6 : 0);
      break;
    case o:
      u = (i - t) / c + 2;
      break;
    default:
      u = (t - o) / c + 4;
      break;
  }
  return u *= 60, e.alpha !== void 0 ? {
    hue: u,
<<<<<<< HEAD
    saturation: d,
=======
    saturation: p,
>>>>>>> main
    lightness: l,
    alpha: e.alpha
  } : {
    hue: u,
<<<<<<< HEAD
    saturation: d,
    lightness: l
  };
}
a(By, "rgbToHsl");
function vt(e) {
  return By(io(e));
}
a(vt, "parseToHsl");
var Hy = /* @__PURE__ */ a(function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, "reduceHexValue"), yi = Hy;
function Dt(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
a(Dt, "numberToHex");
function gi(e) {
  return Dt(Math.round(e * 255));
}
a(gi, "colorToHex");
function zy(e, t, o) {
  return yi("#" + gi(e) + gi(t) + gi(o));
}
a(zy, "convertToHex");
function vr(e, t, o) {
  return Oo(e, t, o, zy);
}
a(vr, "hslToHex");
function Wy(e, t, o) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number")
    return vr(e, t, o);
  if (typeof e == "object" && t === void 0 && o === void 0)
    return vr(e.hue, e.saturation, e.lightness);
  throw new Fe(1);
}
a(Wy, "hsl");
function Vy(e, t, o, i) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number" && typeof i == "number")
    return i >= 1 ? vr(e, t, o) : "rgba(" + Oo(e, t, o) + "," + i + ")";
  if (typeof e == "object" && t === void 0 && o === void 0 && i === void 0)
    return e.alpha >= 1 ? vr(e.hue, e.saturation, e.lightness) : "rgba(" + Oo(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new Fe(2);
}
a(Vy, "hsla");
function bi(e, t, o) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number")
    return yi("#" + Dt(e) + Dt(t) + Dt(o));
  if (typeof e == "object" && t === void 0 && o === void 0)
    return yi("#" + Dt(e.red) + Dt(e.green) + Dt(e.blue));
  throw new Fe(6);
}
a(bi, "rgb");
function so(e, t, o, i) {
  if (typeof e == "string" && typeof t == "number") {
    var r = io(e);
    return "rgba(" + r.red + "," + r.green + "," + r.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof o == "number" && typeof i == "number")
      return i >= 1 ? bi(e, t, o) : "rgba(" + e + "," + t + "," + o + "," + i + ")";
    if (typeof e == "object" && t === void 0 && o === void 0 && i === void 0)
      return e.alpha >= 1 ? bi(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new Fe(7);
}
a(so, "rgba");
var jy = /* @__PURE__ */ a(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha >
  "u");
}, "isRgb"), Ky = /* @__PURE__ */ a(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, "isRgba"), $y = /* @__PURE__ */ a(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.
  alpha > "u");
}, "isHsl"), Uy = /* @__PURE__ */ a(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
}, "isHsla");
function xt(e) {
  if (typeof e != "object") throw new Fe(8);
  if (Ky(e)) return so(e);
  if (jy(e)) return bi(e);
  if (Uy(e)) return Vy(e);
  if ($y(e)) return Wy(e);
  throw new Fe(8);
}
a(xt, "toColorString");
function El(e, t, o) {
  return /* @__PURE__ */ a(function() {
    var r = o.concat(Array.prototype.slice.call(arguments));
    return r.length >= t ? e.apply(this, r) : El(e, t, r);
  }, "fn");
}
a(El, "curried");
function ze(e) {
  return El(e, e.length, []);
}
a(ze, "curry");
function Gy(e, t) {
  if (t === "transparent") return t;
  var o = vt(t);
  return xt(j({}, o, {
    hue: o.hue + parseFloat(e)
  }));
}
a(Gy, "adjustHue");
var T1 = ze(Gy);
function ao(e, t, o) {
  return Math.max(e, Math.min(t, o));
}
a(ao, "guard");
function qy(e, t) {
  if (t === "transparent") return t;
  var o = vt(t);
  return xt(j({}, o, {
    lightness: ao(0, 1, o.lightness - parseFloat(e))
  }));
}
a(qy, "darken");
var Yy = ze(qy), xr = Yy;
function Qy(e, t) {
  if (t === "transparent") return t;
  var o = vt(t);
  return xt(j({}, o, {
    saturation: ao(0, 1, o.saturation - parseFloat(e))
  }));
}
a(Qy, "desaturate");
var C1 = ze(Qy);
function Xy(e, t) {
  if (t === "transparent") return t;
  var o = vt(t);
  return xt(j({}, o, {
    lightness: ao(0, 1, o.lightness + parseFloat(e))
  }));
}
a(Xy, "lighten");
var Zy = ze(Xy), Po = Zy;
function Jy(e, t, o) {
  if (t === "transparent") return o;
  if (o === "transparent") return t;
  if (e === 0) return o;
  var i = io(t), r = j({}, i, {
    alpha: typeof i.alpha == "number" ? i.alpha : 1
  }), n = io(o), l = j({}, n, {
    alpha: typeof n.alpha == "number" ? n.alpha : 1
  }), u = r.alpha - l.alpha, c = parseFloat(e) * 2 - 1, d = c * u === -1 ? c : c + u, p = 1 + c * u, m = (d / p + 1) / 2, h = 1 - m, b = {
    red: Math.floor(r.red * m + l.red * h),
    green: Math.floor(r.green * m + l.green * h),
    blue: Math.floor(r.blue * m + l.blue * h),
    alpha: r.alpha * parseFloat(e) + l.alpha * (1 - parseFloat(e))
  };
  return so(b);
}
a(Jy, "mix");
var eb = ze(Jy), Tl = eb;
function tb(e, t) {
  if (t === "transparent") return t;
  var o = io(t), i = typeof o.alpha == "number" ? o.alpha : 1, r = j({}, o, {
    alpha: ao(0, 1, (i * 100 + parseFloat(e) * 100) / 100)
  });
  return so(r);
}
a(tb, "opacify");
var _1 = ze(tb);
function ob(e, t) {
  if (t === "transparent") return t;
  var o = vt(t);
  return xt(j({}, o, {
    saturation: ao(0, 1, o.saturation + parseFloat(e))
  }));
}
a(ob, "saturate");
var k1 = ze(ob);
function rb(e, t) {
  return t === "transparent" ? t : xt(j({}, vt(t), {
    hue: parseFloat(e)
  }));
}
a(rb, "setHue");
var O1 = ze(rb);
function nb(e, t) {
  return t === "transparent" ? t : xt(j({}, vt(t), {
    lightness: parseFloat(e)
  }));
}
a(nb, "setLightness");
var P1 = ze(nb);
function ib(e, t) {
  return t === "transparent" ? t : xt(j({}, vt(t), {
    saturation: parseFloat(e)
  }));
}
a(ib, "setSaturation");
var A1 = ze(ib);
function sb(e, t) {
  return t === "transparent" ? t : Tl(parseFloat(e), "rgb(0, 0, 0)", t);
}
a(sb, "shade");
var D1 = ze(sb);
function ab(e, t) {
  return t === "transparent" ? t : Tl(parseFloat(e), "rgb(255, 255, 255)", t);
}
a(ab, "tint");
var M1 = ze(ab);
function lb(e, t) {
  if (t === "transparent") return t;
  var o = io(t), i = typeof o.alpha == "number" ? o.alpha : 1, r = j({}, o, {
    alpha: ao(0, 1, +(i * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return so(r);
}
a(lb, "transparentize");
var ub = ze(lb), Te = ub;

// src/manager/components/notifications/NotificationItem.tsx
var cb = Pt({
=======
    saturation: p,
    lightness: l
  };
}
a(vf, "rgbToHsl");
function Za(e) {
  return vf(Cn(e));
}
a(Za, "parseToHsl");
var xf = /* @__PURE__ */ a(function(t) {
  return t.length === 7 && t[1] === t[2] && t[3] === t[4] && t[5] === t[6] ? "#" + t[1] + t[3] + t[5] : t;
}, "reduceHexValue"), wn = xf;
function _t(e) {
  var t = e.toString(16);
  return t.length === 1 ? "0" + t : t;
}
a(_t, "numberToHex");
function _n(e) {
  return _t(Math.round(e * 255));
}
a(_n, "colorToHex");
function Sf(e, t, o) {
  return wn("#" + _n(e) + _n(t) + _n(o));
}
a(Sf, "convertToHex");
function or(e, t, o) {
  return co(e, t, o, Sf);
}
a(or, "hslToHex");
function If(e, t, o) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number")
    return or(e, t, o);
  if (typeof e == "object" && t === void 0 && o === void 0)
    return or(e.hue, e.saturation, e.lightness);
  throw new ot(1);
}
a(If, "hsl");
function Ef(e, t, o, i) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number" && typeof i == "number")
    return i >= 1 ? or(e, t, o) : "rgba(" + co(e, t, o) + "," + i + ")";
  if (typeof e == "object" && t === void 0 && o === void 0 && i === void 0)
    return e.alpha >= 1 ? or(e.hue, e.saturation, e.lightness) : "rgba(" + co(e.hue, e.saturation, e.lightness) + "," + e.alpha + ")";
  throw new ot(2);
}
a(Ef, "hsla");
function Tn(e, t, o) {
  if (typeof e == "number" && typeof t == "number" && typeof o == "number")
    return wn("#" + _t(e) + _t(t) + _t(o));
  if (typeof e == "object" && t === void 0 && o === void 0)
    return wn("#" + _t(e.red) + _t(e.green) + _t(e.blue));
  throw new ot(6);
}
a(Tn, "rgb");
function rr(e, t, o, i) {
  if (typeof e == "string" && typeof t == "number") {
    var n = Cn(e);
    return "rgba(" + n.red + "," + n.green + "," + n.blue + "," + t + ")";
  } else {
    if (typeof e == "number" && typeof t == "number" && typeof o == "number" && typeof i == "number")
      return i >= 1 ? Tn(e, t, o) : "rgba(" + e + "," + t + "," + o + "," + i + ")";
    if (typeof e == "object" && t === void 0 && o === void 0 && i === void 0)
      return e.alpha >= 1 ? Tn(e.red, e.green, e.blue) : "rgba(" + e.red + "," + e.green + "," + e.blue + "," + e.alpha + ")";
  }
  throw new ot(7);
}
a(rr, "rgba");
var _f = /* @__PURE__ */ a(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && (typeof t.alpha != "number" || typeof t.alpha >
  "u");
}, "isRgb"), wf = /* @__PURE__ */ a(function(t) {
  return typeof t.red == "number" && typeof t.green == "number" && typeof t.blue == "number" && typeof t.alpha == "number";
}, "isRgba"), Tf = /* @__PURE__ */ a(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && (typeof t.alpha != "number" || typeof t.
  alpha > "u");
}, "isHsl"), Cf = /* @__PURE__ */ a(function(t) {
  return typeof t.hue == "number" && typeof t.saturation == "number" && typeof t.lightness == "number" && typeof t.alpha == "number";
}, "isHsla");
function Ja(e) {
  if (typeof e != "object") throw new ot(8);
  if (wf(e)) return rr(e);
  if (_f(e)) return Tn(e);
  if (Cf(e)) return Ef(e);
  if (Tf(e)) return If(e);
  throw new ot(8);
}
a(Ja, "toColorString");
function el(e, t, o) {
  return /* @__PURE__ */ a(function() {
    var n = o.concat(Array.prototype.slice.call(arguments));
    return n.length >= t ? e.apply(this, n) : el(e, t, n);
  }, "fn");
}
a(el, "curried");
function kn(e) {
  return el(e, e.length, []);
}
a(kn, "curry");
function On(e, t, o) {
  return Math.max(e, Math.min(t, o));
}
a(On, "guard");
function kf(e, t) {
  if (t === "transparent") return t;
  var o = Za(t);
  return Ja(G({}, o, {
    lightness: On(0, 1, o.lightness - parseFloat(e))
  }));
}
a(kf, "darken");
var Of = /* @__PURE__ */ kn(kf), nr = Of;
function Pf(e, t) {
  if (t === "transparent") return t;
  var o = Za(t);
  return Ja(G({}, o, {
    lightness: On(0, 1, o.lightness + parseFloat(e))
  }));
}
a(Pf, "lighten");
var Af = /* @__PURE__ */ kn(Pf), po = Af;
function Df(e, t) {
  if (t === "transparent") return t;
  var o = Cn(t), i = typeof o.alpha == "number" ? o.alpha : 1, n = G({}, o, {
    alpha: On(0, 1, +(i * 100 - parseFloat(e) * 100).toFixed(2) / 100)
  });
  return rr(n);
}
a(Df, "transparentize");
var Mf = /* @__PURE__ */ kn(Df), we = Mf;

// src/manager/components/notifications/NotificationItem.tsx
var Lf = It({
>>>>>>> main
  "0%": {
    opacity: 0,
    transform: "translateY(30px)"
  },
  "100%": {
    opacity: 1,
    transform: "translateY(0)"
  }
<<<<<<< HEAD
}), pb = Pt({
=======
}), Nf = It({
>>>>>>> main
  "0%": {
    width: "0%"
  },
  "100%": {
    width: "100%"
  }
<<<<<<< HEAD
}), Cl = x.div(
=======
}), tl = x.div(
>>>>>>> main
  ({ theme: e }) => ({
    position: "relative",
    display: "flex",
    border: `1px solid ${e.appBorderColor}`,
    padding: "12px 6px 12px 12px",
    borderRadius: e.appBorderRadius + 1,
    alignItems: "center",
<<<<<<< HEAD
    animation: `${cb} 500ms`,
=======
    animation: `${Lf} 500ms`,
>>>>>>> main
    background: e.base === "light" ? "hsla(203, 50%, 20%, .97)" : "hsla(203, 30%, 95%, .97)",
    boxShadow: "0 2px 5px 0 rgba(0, 0, 0, 0.05), 0 5px 15px 0 rgba(0, 0, 0, 0.1)",
    color: e.color.inverseText,
    textDecoration: "none",
    overflow: "hidden",
    [Qe]: {
      boxShadow: `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${e.background.app}`
    }
  }),
  ({ duration: e, theme: t }) => e && {
    "&::after": {
      content: '""',
      display: "block",
      position: "absolute",
      bottom: 0,
      left: 0,
      height: 3,
      background: t.color.secondary,
<<<<<<< HEAD
      animation: `${pb} ${e}ms linear forwards reverse`
    }
  }
), _l = x(Cl)({
=======
      animation: `${Nf} ${e}ms linear forwards reverse`
    }
  }
), ol = x(tl)({
>>>>>>> main
  cursor: "pointer",
  border: "none",
  outline: "none",
  textAlign: "left",
  transition: "all 150ms ease-out",
  transform: "translate3d(0, 0, 0)",
  "&:hover": {
    transform: "translate3d(0, -3px, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:active": {
    transform: "translate3d(0, 0, 0)",
    boxShadow: "0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0.1)"
  },
  "&:focus": {
    boxShadow: "rgba(2,156,253,1) 0 0 0 1px inset, 0 1px 3px 0 rgba(30,167,253,0.5), 0 2px 5px 0 rgba(0,0,0,0.05), 0 5px 15px 0 rgba(0,0,0,0\
.1)"
  }
<<<<<<< HEAD
}), db = _l.withComponent("div"), fb = _l.withComponent(cr), mb = x.div({
=======
}), Rf = ol.withComponent("div"), Ff = ol.withComponent(zo), Hf = x.div({
>>>>>>> main
  display: "flex",
  marginRight: 10,
  alignItems: "center",
  svg: {
    width: 16,
    height: 16
  }
<<<<<<< HEAD
}), hb = x.div(({ theme: e }) => ({
=======
}), Bf = x.div(({ theme: e }) => ({
>>>>>>> main
  width: "100%",
  display: "flex",
  flexDirection: "column",
  color: e.base === "dark" ? e.color.mediumdark : e.color.mediumlight
<<<<<<< HEAD
})), gb = x.div(({ theme: e, hasIcon: t }) => ({
=======
})), zf = x.div(({ theme: e, hasIcon: t }) => ({
>>>>>>> main
  height: "100%",
  alignItems: "center",
  whiteSpace: "balance",
  overflow: "hidden",
  textOverflow: "ellipsis",
  fontSize: e.typography.size.s1,
  lineHeight: "16px",
  fontWeight: e.typography.weight.bold
<<<<<<< HEAD
})), yb = x.div(({ theme: e }) => ({
  color: Te(0.25, e.color.inverseText),
=======
})), Wf = x.div(({ theme: e }) => ({
  color: we(0.25, e.color.inverseText),
>>>>>>> main
  fontSize: e.typography.size.s1 - 1,
  lineHeight: "14px",
  marginTop: 2,
  whiteSpace: "balance"
<<<<<<< HEAD
})), vi = /* @__PURE__ */ a(({
  icon: e,
  content: { headline: t, subHeadline: o }
}) => /* @__PURE__ */ s.createElement(s.Fragment, null, !e || /* @__PURE__ */ s.createElement(mb, null, e), /* @__PURE__ */ s.createElement(
hb, null, /* @__PURE__ */ s.createElement(gb, { title: t, hasIcon: !!e }, t), o && /* @__PURE__ */ s.createElement(yb, null, o))), "ItemCont\
ent"), bb = x(ee)(({ theme: e }) => ({
=======
})), Pn = /* @__PURE__ */ a(({
  icon: e,
  content: { headline: t, subHeadline: o }
}) => {
  let i = Ae(), n = i.base === "dark" ? i.color.mediumdark : i.color.mediumlight;
  return /* @__PURE__ */ s.createElement(s.Fragment, null, !e || /* @__PURE__ */ s.createElement(Hf, null, s.isValidElement(e) ? e : typeof e ==
  "object" && "name" in e && /* @__PURE__ */ s.createElement(Ka, { icon: e.name, color: e.color || n })), /* @__PURE__ */ s.createElement(Bf,
  null, /* @__PURE__ */ s.createElement(zf, { title: t, hasIcon: !!e }, t), o && /* @__PURE__ */ s.createElement(Wf, null, o)));
}, "ItemContent"), jf = x(te)(({ theme: e }) => ({
>>>>>>> main
  width: 28,
  alignSelf: "center",
  marginTop: 0,
  color: e.base === "light" ? "rgba(255,255,255,0.7)" : " #999999"
<<<<<<< HEAD
})), xi = /* @__PURE__ */ a(({ onDismiss: e }) => /* @__PURE__ */ s.createElement(
  bb,
=======
})), An = /* @__PURE__ */ a(({ onDismiss: e }) => /* @__PURE__ */ s.createElement(
  jf,
>>>>>>> main
  {
    title: "Dismiss notification",
    onClick: (t) => {
      t.preventDefault(), t.stopPropagation(), e();
    }
  },
<<<<<<< HEAD
  /* @__PURE__ */ s.createElement(bo, { size: 12 })
), "DismissNotificationItem"), j1 = x.div({
  height: 48
}), vb = /* @__PURE__ */ a(({
  notification: { content: e, duration: t, link: o, onClear: i, onClick: r, id: n, icon: l },
  onDismissNotification: u,
  zIndex: c
}) => {
  let d = A(() => {
    u(n), i && i({ dismissed: !1, timeout: !0 });
  }, [n, u, i]), p = q(null);
  V(() => {
    if (t)
      return p.current = setTimeout(d, t), () => clearTimeout(p.current);
  }, [t, d]);
  let m = A(() => {
    clearTimeout(p.current), u(n), i && i({ dismissed: !0, timeout: !1 });
  }, [n, u, i]);
  return o ? /* @__PURE__ */ s.createElement(fb, { to: o, duration: t, style: { zIndex: c } }, /* @__PURE__ */ s.createElement(vi, { icon: l,
  content: e }), /* @__PURE__ */ s.createElement(xi, { onDismiss: m })) : r ? /* @__PURE__ */ s.createElement(
    db,
    {
      duration: t,
      onClick: () => r({ onDismiss: m }),
      style: { zIndex: c }
    },
    /* @__PURE__ */ s.createElement(vi, { icon: l, content: e }),
    /* @__PURE__ */ s.createElement(xi, { onDismiss: m })
  ) : /* @__PURE__ */ s.createElement(Cl, { duration: t, style: { zIndex: c } }, /* @__PURE__ */ s.createElement(vi, { icon: l, content: e }),
  /* @__PURE__ */ s.createElement(xi, { onDismiss: m }));
}, "NotificationItem"), kl = vb;

// src/manager/components/notifications/NotificationList.tsx
var Ir = /* @__PURE__ */ a(({
=======
  /* @__PURE__ */ s.createElement(Ao, { size: 12 })
), "DismissNotificationItem"), IC = x.div({
  height: 48
}), Vf = /* @__PURE__ */ a(({
  notification: { content: e, duration: t, link: o, onClear: i, onClick: n, id: r, icon: l },
  onDismissNotification: u,
  zIndex: c
}) => {
  let p = A(() => {
    u(r), i && i({ dismissed: !1, timeout: !0 });
  }, [r, u, i]), d = Y(null);
  j(() => {
    if (t)
      return d.current = setTimeout(p, t), () => clearTimeout(d.current);
  }, [t, p]);
  let g = A(() => {
    clearTimeout(d.current), u(r), i && i({ dismissed: !0, timeout: !1 });
  }, [r, u, i]);
  return o ? /* @__PURE__ */ s.createElement(Ff, { to: o, duration: t, style: { zIndex: c } }, /* @__PURE__ */ s.createElement(Pn, { icon: l,
  content: e }), /* @__PURE__ */ s.createElement(An, { onDismiss: g })) : n ? /* @__PURE__ */ s.createElement(
    Rf,
    {
      duration: t,
      onClick: () => n({ onDismiss: g }),
      style: { zIndex: c }
    },
    /* @__PURE__ */ s.createElement(Pn, { icon: l, content: e }),
    /* @__PURE__ */ s.createElement(An, { onDismiss: g })
  ) : /* @__PURE__ */ s.createElement(tl, { duration: t, style: { zIndex: c } }, /* @__PURE__ */ s.createElement(Pn, { icon: l, content: e }),
  /* @__PURE__ */ s.createElement(An, { onDismiss: g }));
}, "NotificationItem"), rl = Vf;

// src/manager/components/notifications/NotificationList.tsx
var ir = /* @__PURE__ */ a(({
>>>>>>> main
  notifications: e,
  clearNotification: t
}) => {
  let { isMobile: o } = ge();
<<<<<<< HEAD
  return /* @__PURE__ */ s.createElement(xb, { isMobile: o }, e && e.map((i, r) => /* @__PURE__ */ s.createElement(
    kl,
    {
      key: i.id,
      onDismissNotification: (n) => t(n),
      notification: i,
      zIndex: e.length - r
    }
  )));
}, "NotificationList"), xb = x.div(
=======
  return /* @__PURE__ */ s.createElement(Kf, { isMobile: o }, e && e.map((i, n) => /* @__PURE__ */ s.createElement(
    rl,
    {
      key: i.id,
      onDismissNotification: (r) => t(r),
      notification: i,
      zIndex: e.length - n
    }
  )));
}, "NotificationList"), Kf = x.div(
>>>>>>> main
  {
    zIndex: 200,
    "> * + *": {
      marginTop: 12
    },
    "&:empty": {
      display: "none"
    }
  },
  ({ isMobile: e }) => e && {
    position: "fixed",
    bottom: 40,
    margin: 20
  }
);

// src/manager/container/Notifications.tsx
<<<<<<< HEAD
var Ib = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  notifications: e.notifications,
  clearNotification: t.clearNotification
}), "mapper"), Ol = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(me, { filter: Ib }, (t) => /* @__PURE__ */ s.createElement(Ir, {
...e, ...t })), "Notifications");

// src/manager/components/mobile/navigation/MobileAddonsDrawer.tsx
var Sb = x.div(({ theme: e }) => ({
=======
var $f = /* @__PURE__ */ a(({ state: e, api: t }) => ({
  notifications: e.notifications,
  clearNotification: t.clearNotification
}), "mapper"), nl = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(he, { filter: $f }, (t) => /* @__PURE__ */ s.createElement(ir, {
...e, ...t })), "Notifications");

// src/manager/components/mobile/navigation/MobileAddonsDrawer.tsx
var Uf = x.div(({ theme: e }) => ({
>>>>>>> main
  position: "relative",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "42vh",
  zIndex: 11,
  overflow: "hidden"
<<<<<<< HEAD
})), Pl = /* @__PURE__ */ a(({ children: e }) => /* @__PURE__ */ s.createElement(Sb, null, e), "MobileAddonsDrawer");
=======
})), il = /* @__PURE__ */ a(({ children: e }) => /* @__PURE__ */ s.createElement(Uf, null, e), "MobileAddonsDrawer");
>>>>>>> main

// ../node_modules/@babel/runtime/helpers/esm/objectWithoutPropertiesLoose.js
function ke(e, t) {
  if (e == null) return {};
  var o = {};
  for (var i in e) if ({}.hasOwnProperty.call(e, i)) {
<<<<<<< HEAD
    if (t.indexOf(i) !== -1) continue;
=======
    if (t.indexOf(i) >= 0) continue;
>>>>>>> main
    o[i] = e[i];
  }
  return o;
}
a(ke, "_objectWithoutPropertiesLoose");

// global-externals:react-dom
<<<<<<< HEAD
var Ao = __REACT_DOM__, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: uk, createPortal: ck, createRoot: pk, findDOMNode: dk, flushSync: Do,
hydrate: fk, hydrateRoot: mk, render: hk, unmountComponentAtNode: gk, unstable_batchedUpdates: yk, unstable_renderSubtreeIntoContainer: bk, version: vk } = __REACT_DOM__;

// ../node_modules/react-transition-group/esm/config.js
var Ii = {
=======
var fo = __REACT_DOM__, { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: jC, createPortal: VC, createRoot: KC, findDOMNode: $C, flushSync: mo,
hydrate: UC, hydrateRoot: GC, render: YC, unmountComponentAtNode: qC, unstable_batchedUpdates: QC, unstable_renderSubtreeIntoContainer: XC, version: ZC } = __REACT_DOM__;

// ../node_modules/react-transition-group/esm/config.js
var Dn = {
>>>>>>> main
  disabled: !1
};

// ../node_modules/react-transition-group/esm/TransitionGroupContext.js
<<<<<<< HEAD
var Si = s.createContext(null);

// ../node_modules/react-transition-group/esm/utils/reflow.js
var Al = /* @__PURE__ */ a(function(t) {
=======
var Mn = s.createContext(null);

// ../node_modules/react-transition-group/esm/utils/reflow.js
var sl = /* @__PURE__ */ a(function(t) {
>>>>>>> main
  return t.scrollTop;
}, "forceReflow");

// ../node_modules/react-transition-group/esm/Transition.js
<<<<<<< HEAD
var Mo = "unmounted", Mt = "exited", Lt = "entering", uo = "entered", wi = "exiting", pt = /* @__PURE__ */ function(e) {
  no(t, e);
  function t(i, r) {
    var n;
    n = e.call(this, i, r) || this;
    var l = r, u = l && !l.isMounting ? i.enter : i.appear, c;
    return n.appearStatus = null, i.in ? u ? (c = Mt, n.appearStatus = Lt) : c = uo : i.unmountOnExit || i.mountOnEnter ? c = Mo : c = Mt, n.
    state = {
      status: c
    }, n.nextCallback = null, n;
  }
  a(t, "Transition"), t.getDerivedStateFromProps = /* @__PURE__ */ a(function(r, n) {
    var l = r.in;
    return l && n.status === Mo ? {
      status: Mt
=======
var ho = "unmounted", wt = "exited", Tt = "entering", Jt = "entered", Ln = "exiting", ut = /* @__PURE__ */ function(e) {
  Xt(t, e);
  function t(i, n) {
    var r;
    r = e.call(this, i, n) || this;
    var l = n, u = l && !l.isMounting ? i.enter : i.appear, c;
    return r.appearStatus = null, i.in ? u ? (c = wt, r.appearStatus = Tt) : c = Jt : i.unmountOnExit || i.mountOnEnter ? c = ho : c = wt, r.
    state = {
      status: c
    }, r.nextCallback = null, r;
  }
  a(t, "Transition"), t.getDerivedStateFromProps = /* @__PURE__ */ a(function(n, r) {
    var l = n.in;
    return l && r.status === ho ? {
      status: wt
>>>>>>> main
    } : null;
  }, "getDerivedStateFromProps");
  var o = t.prototype;
  return o.componentDidMount = /* @__PURE__ */ a(function() {
    this.updateStatus(!0, this.appearStatus);
<<<<<<< HEAD
  }, "componentDidMount"), o.componentDidUpdate = /* @__PURE__ */ a(function(r) {
    var n = null;
    if (r !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Lt && l !== uo && (n = Lt) : (l === Lt || l === uo) && (n = wi);
    }
    this.updateStatus(!1, n);
  }, "componentDidUpdate"), o.componentWillUnmount = /* @__PURE__ */ a(function() {
    this.cancelNextCallback();
  }, "componentWillUnmount"), o.getTimeouts = /* @__PURE__ */ a(function() {
    var r = this.props.timeout, n, l, u;
    return n = l = u = r, r != null && typeof r != "number" && (n = r.exit, l = r.enter, u = r.appear !== void 0 ? r.appear : l), {
      exit: n,
      enter: l,
      appear: u
    };
  }, "getTimeouts"), o.updateStatus = /* @__PURE__ */ a(function(r, n) {
    if (r === void 0 && (r = !1), n !== null)
      if (this.cancelNextCallback(), n === Lt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : Ao.findDOMNode(this);
          l && Al(l);
        }
        this.performEnter(r);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Mt && this.setState({
      status: Mo
    });
  }, "updateStatus"), o.performEnter = /* @__PURE__ */ a(function(r) {
    var n = this, l = this.props.enter, u = this.context ? this.context.isMounting : r, c = this.props.nodeRef ? [u] : [Ao.findDOMNode(this),
    u], d = c[0], p = c[1], m = this.getTimeouts(), h = u ? m.appear : m.enter;
    if (!r && !l || Ii.disabled) {
      this.safeSetState({
        status: uo
      }, function() {
        n.props.onEntered(d);
      });
      return;
    }
    this.props.onEnter(d, p), this.safeSetState({
      status: Lt
    }, function() {
      n.props.onEntering(d, p), n.onTransitionEnd(h, function() {
        n.safeSetState({
          status: uo
        }, function() {
          n.props.onEntered(d, p);
=======
  }, "componentDidMount"), o.componentDidUpdate = /* @__PURE__ */ a(function(n) {
    var r = null;
    if (n !== this.props) {
      var l = this.state.status;
      this.props.in ? l !== Tt && l !== Jt && (r = Tt) : (l === Tt || l === Jt) && (r = Ln);
    }
    this.updateStatus(!1, r);
  }, "componentDidUpdate"), o.componentWillUnmount = /* @__PURE__ */ a(function() {
    this.cancelNextCallback();
  }, "componentWillUnmount"), o.getTimeouts = /* @__PURE__ */ a(function() {
    var n = this.props.timeout, r, l, u;
    return r = l = u = n, n != null && typeof n != "number" && (r = n.exit, l = n.enter, u = n.appear !== void 0 ? n.appear : l), {
      exit: r,
      enter: l,
      appear: u
    };
  }, "getTimeouts"), o.updateStatus = /* @__PURE__ */ a(function(n, r) {
    if (n === void 0 && (n = !1), r !== null)
      if (this.cancelNextCallback(), r === Tt) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var l = this.props.nodeRef ? this.props.nodeRef.current : fo.findDOMNode(this);
          l && sl(l);
        }
        this.performEnter(n);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === wt && this.setState({
      status: ho
    });
  }, "updateStatus"), o.performEnter = /* @__PURE__ */ a(function(n) {
    var r = this, l = this.props.enter, u = this.context ? this.context.isMounting : n, c = this.props.nodeRef ? [u] : [fo.findDOMNode(this),
    u], p = c[0], d = c[1], g = this.getTimeouts(), h = u ? g.appear : g.enter;
    if (!n && !l || Dn.disabled) {
      this.safeSetState({
        status: Jt
      }, function() {
        r.props.onEntered(p);
      });
      return;
    }
    this.props.onEnter(p, d), this.safeSetState({
      status: Tt
    }, function() {
      r.props.onEntering(p, d), r.onTransitionEnd(h, function() {
        r.safeSetState({
          status: Jt
        }, function() {
          r.props.onEntered(p, d);
>>>>>>> main
        });
      });
    });
  }, "performEnter"), o.performExit = /* @__PURE__ */ a(function() {
<<<<<<< HEAD
    var r = this, n = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : Ao.findDOMNode(this);
    if (!n || Ii.disabled) {
      this.safeSetState({
        status: Mt
      }, function() {
        r.props.onExited(u);
=======
    var n = this, r = this.props.exit, l = this.getTimeouts(), u = this.props.nodeRef ? void 0 : fo.findDOMNode(this);
    if (!r || Dn.disabled) {
      this.safeSetState({
        status: wt
      }, function() {
        n.props.onExited(u);
>>>>>>> main
      });
      return;
    }
    this.props.onExit(u), this.safeSetState({
<<<<<<< HEAD
      status: wi
    }, function() {
      r.props.onExiting(u), r.onTransitionEnd(l.exit, function() {
        r.safeSetState({
          status: Mt
        }, function() {
          r.props.onExited(u);
=======
      status: Ln
    }, function() {
      n.props.onExiting(u), n.onTransitionEnd(l.exit, function() {
        n.safeSetState({
          status: wt
        }, function() {
          n.props.onExited(u);
>>>>>>> main
        });
      });
    });
  }, "performExit"), o.cancelNextCallback = /* @__PURE__ */ a(function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
<<<<<<< HEAD
  }, "cancelNextCallback"), o.safeSetState = /* @__PURE__ */ a(function(r, n) {
    n = this.setNextCallback(n), this.setState(r, n);
  }, "safeSetState"), o.setNextCallback = /* @__PURE__ */ a(function(r) {
    var n = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, n.nextCallback = null, r(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, "setNextCallback"), o.onTransitionEnd = /* @__PURE__ */ a(function(r, n) {
    this.setNextCallback(n);
    var l = this.props.nodeRef ? this.props.nodeRef.current : Ao.findDOMNode(this), u = r == null && !this.props.addEndListener;
=======
  }, "cancelNextCallback"), o.safeSetState = /* @__PURE__ */ a(function(n, r) {
    r = this.setNextCallback(r), this.setState(n, r);
  }, "safeSetState"), o.setNextCallback = /* @__PURE__ */ a(function(n) {
    var r = this, l = !0;
    return this.nextCallback = function(u) {
      l && (l = !1, r.nextCallback = null, n(u));
    }, this.nextCallback.cancel = function() {
      l = !1;
    }, this.nextCallback;
  }, "setNextCallback"), o.onTransitionEnd = /* @__PURE__ */ a(function(n, r) {
    this.setNextCallback(r);
    var l = this.props.nodeRef ? this.props.nodeRef.current : fo.findDOMNode(this), u = n == null && !this.props.addEndListener;
>>>>>>> main
    if (!l || u) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
<<<<<<< HEAD
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], d = c[0], p = c[1];
      this.props.addEndListener(d, p);
    }
    r != null && setTimeout(this.nextCallback, r);
  }, "onTransitionEnd"), o.render = /* @__PURE__ */ a(function() {
    var r = this.state.status;
    if (r === Mo)
      return null;
    var n = this.props, l = n.children, u = n.in, c = n.mountOnEnter, d = n.unmountOnExit, p = n.appear, m = n.enter, h = n.exit, b = n.timeout,
    f = n.addEndListener, y = n.onEnter, S = n.onEntering, E = n.onEntered, g = n.onExit, v = n.onExiting, I = n.onExited, w = n.nodeRef, O = ke(
    n, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "\
onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ s.createElement(Si.Provider, {
        value: null
      }, typeof l == "function" ? l(r, O) : s.cloneElement(s.Children.only(l), O))
    );
  }, "render"), t;
}(s.Component);
pt.contextType = Si;
pt.propTypes = {};
function lo() {
}
a(lo, "noop");
pt.defaultProps = {
=======
      var c = this.props.nodeRef ? [this.nextCallback] : [l, this.nextCallback], p = c[0], d = c[1];
      this.props.addEndListener(p, d);
    }
    n != null && setTimeout(this.nextCallback, n);
  }, "onTransitionEnd"), o.render = /* @__PURE__ */ a(function() {
    var n = this.state.status;
    if (n === ho)
      return null;
    var r = this.props, l = r.children, u = r.in, c = r.mountOnEnter, p = r.unmountOnExit, d = r.appear, g = r.enter, h = r.exit, y = r.timeout,
    f = r.addEndListener, b = r.onEnter, I = r.onEntering, _ = r.onEntered, m = r.onExit, v = r.onExiting, S = r.onExited, E = r.nodeRef, T = ke(
    r, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "\
onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ s.createElement(Mn.Provider, {
        value: null
      }, typeof l == "function" ? l(n, T) : s.cloneElement(s.Children.only(l), T))
    );
  }, "render"), t;
}(s.Component);
ut.contextType = Mn;
ut.propTypes = {};
function Zt() {
}
a(Zt, "noop");
ut.defaultProps = {
>>>>>>> main
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
<<<<<<< HEAD
  onEnter: lo,
  onEntering: lo,
  onEntered: lo,
  onExit: lo,
  onExiting: lo,
  onExited: lo
};
pt.UNMOUNTED = Mo;
pt.EXITED = Mt;
pt.ENTERING = Lt;
pt.ENTERED = uo;
pt.EXITING = wi;
var Nt = pt;

// src/manager/components/upgrade/UpgradeBlock.tsx
var Sr = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => {
  let t = oe(), [o, i] = K("npm");
  return /* @__PURE__ */ s.createElement(wb, null, /* @__PURE__ */ s.createElement("strong", null, "You are on Storybook ", t.getCurrentVersion().
  version), /* @__PURE__ */ s.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), /* @__PURE__ */ s.
  createElement(Eb, null, /* @__PURE__ */ s.createElement(Ei, { active: o === "npm", onClick: () => i("npm") }, "npm"), /* @__PURE__ */ s.createElement(
  Ei, { active: o === "yarn", onClick: () => i("yarn") }, "yarn"), /* @__PURE__ */ s.createElement(Ei, { active: o === "pnpm", onClick: () => i(
  "pnpm") }, "pnpm")), /* @__PURE__ */ s.createElement(Tb, null, o === "npm" ? "npx storybook@latest upgrade" : `${o} dlx storybook@latest u\
pgrade`), e && /* @__PURE__ */ s.createElement(Pe, { onClick: e }, "See what's new in Storybook"));
}, "UpgradeBlock"), wb = x.div(({ theme: e }) => ({
=======
  onEnter: Zt,
  onEntering: Zt,
  onEntered: Zt,
  onExit: Zt,
  onExiting: Zt,
  onExited: Zt
};
ut.UNMOUNTED = ho;
ut.EXITED = wt;
ut.ENTERING = Tt;
ut.ENTERED = Jt;
ut.EXITING = Ln;
var Ct = ut;

// src/manager/components/upgrade/UpgradeBlock.tsx
var sr = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => {
  let t = oe(), [o, i] = $("npm");
  return /* @__PURE__ */ s.createElement(Gf, null, /* @__PURE__ */ s.createElement("strong", null, "You are on Storybook ", t.getCurrentVersion().
  version), /* @__PURE__ */ s.createElement("p", null, "Run the following script to check for updates and upgrade to the latest version."), /* @__PURE__ */ s.
  createElement(Yf, null, /* @__PURE__ */ s.createElement(Nn, { active: o === "npm", onClick: () => i("npm") }, "npm"), /* @__PURE__ */ s.createElement(
  Nn, { active: o === "yarn", onClick: () => i("yarn") }, "yarn"), /* @__PURE__ */ s.createElement(Nn, { active: o === "pnpm", onClick: () => i(
  "pnpm") }, "pnpm")), /* @__PURE__ */ s.createElement(qf, null, o === "npm" ? "npx storybook@latest upgrade" : `${o} dlx storybook@latest u\
pgrade`), e && // eslint-disable-next-line jsx-a11y/anchor-is-valid
  /* @__PURE__ */ s.createElement(Me, { onClick: e }, "See what's new in Storybook"));
}, "UpgradeBlock"), Gf = x.div(({ theme: e }) => ({
>>>>>>> main
  border: "1px solid",
  borderRadius: 5,
  padding: 20,
  marginTop: 0,
  borderColor: e.appBorderColor,
  fontSize: e.typography.size.s2,
  width: "100%",
  [Qe]: {
    maxWidth: 400
  }
<<<<<<< HEAD
})), Eb = x.div({
  display: "flex",
  gap: 2
}), Tb = x.pre(({ theme: e }) => ({
  background: e.base === "light" ? "rgba(0, 0, 0, 0.05)" : e.appBorderColor,
  fontSize: e.typography.size.s2 - 1,
  margin: "4px 0 16px"
})), Ei = x.button(({ theme: e, active: t }) => ({
=======
})), Yf = x.div({
  display: "flex",
  gap: 2
}), qf = x.pre(({ theme: e }) => ({
  background: e.base === "light" ? "rgba(0, 0, 0, 0.05)" : e.appBorderColor,
  fontSize: e.typography.size.s2 - 1,
  margin: "4px 0 16px"
})), Nn = x.button(({ theme: e, active: t }) => ({
>>>>>>> main
  all: "unset",
  alignItems: "center",
  gap: 10,
  color: e.color.defaultText,
  fontSize: e.typography.size.s2 - 1,
  borderBottom: "2px solid transparent",
  borderBottomColor: t ? e.color.secondary : "none",
  padding: "0 10px 5px",
  marginBottom: "5px",
  cursor: "pointer"
}));

// src/manager/components/mobile/about/MobileAbout.tsx
<<<<<<< HEAD
var Ll = /* @__PURE__ */ a(() => {
  let { isMobileAboutOpen: e, setMobileAboutOpen: t } = ge(), o = q(null);
  return /* @__PURE__ */ s.createElement(
    Nt,
=======
var ul = /* @__PURE__ */ a(() => {
  let { isMobileAboutOpen: e, setMobileAboutOpen: t } = ge(), o = Y(null);
  return /* @__PURE__ */ s.createElement(
    Ct,
>>>>>>> main
    {
      nodeRef: o,
      in: e,
      timeout: 300,
      appear: !0,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
<<<<<<< HEAD
    (i) => /* @__PURE__ */ s.createElement(Cb, { ref: o, state: i, transitionDuration: 300 }, /* @__PURE__ */ s.createElement(Ob, { onClick: () => t(
    !1), title: "Close about section" }, /* @__PURE__ */ s.createElement(Sn, null), "Back"), /* @__PURE__ */ s.createElement(_b, null, /* @__PURE__ */ s.
    createElement(Dl, { href: "https://github.com/storybookjs/storybook", target: "_blank" }, /* @__PURE__ */ s.createElement(Ml, null, /* @__PURE__ */ s.
    createElement(vo, null), /* @__PURE__ */ s.createElement("span", null, "Github")), /* @__PURE__ */ s.createElement(tt, { width: 12 })), /* @__PURE__ */ s.
    createElement(
      Dl,
=======
    (i) => /* @__PURE__ */ s.createElement(Qf, { ref: o, state: i, transitionDuration: 300 }, /* @__PURE__ */ s.createElement(Jf, { onClick: () => t(
    !1), title: "Close about section" }, /* @__PURE__ */ s.createElement(ms, null), "Back"), /* @__PURE__ */ s.createElement(Xf, null, /* @__PURE__ */ s.
    createElement(al, { href: "https://github.com/storybookjs/storybook", target: "_blank" }, /* @__PURE__ */ s.createElement(ll, null, /* @__PURE__ */ s.
    createElement(Do, null), /* @__PURE__ */ s.createElement("span", null, "Github")), /* @__PURE__ */ s.createElement(at, { width: 12 })), /* @__PURE__ */ s.
    createElement(
      al,
>>>>>>> main
      {
        href: "https://storybook.js.org/docs/react/get-started/install/",
        target: "_blank"
      },
<<<<<<< HEAD
      /* @__PURE__ */ s.createElement(Ml, null, /* @__PURE__ */ s.createElement($n, null), /* @__PURE__ */ s.createElement("span", null, "Do\
cumentation")),
      /* @__PURE__ */ s.createElement(tt, { width: 12 })
    )), /* @__PURE__ */ s.createElement(Sr, null), /* @__PURE__ */ s.createElement(kb, null, "Open source software maintained by", " ", /* @__PURE__ */ s.
    createElement(Pe, { href: "https://chromatic.com", target: "_blank" }, "Chromatic"), " ", "and the", " ", /* @__PURE__ */ s.createElement(
    Pe, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))
  );
}, "MobileAbout"), Cb = x.div(
=======
      /* @__PURE__ */ s.createElement(ll, null, /* @__PURE__ */ s.createElement(Bs, null), /* @__PURE__ */ s.createElement("span", null, "Do\
cumentation")),
      /* @__PURE__ */ s.createElement(at, { width: 12 })
    )), /* @__PURE__ */ s.createElement(sr, null), /* @__PURE__ */ s.createElement(Zf, null, "Open source software maintained by", " ", /* @__PURE__ */ s.
    createElement(Me, { href: "https://chromatic.com", target: "_blank" }, "Chromatic"), " ", "and the", " ", /* @__PURE__ */ s.createElement(
    Me, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))
  );
}, "MobileAbout"), Qf = x.div(
>>>>>>> main
  ({ theme: e, state: t, transitionDuration: o }) => ({
    position: "absolute",
    width: "100%",
    height: "100%",
    top: 0,
    left: 0,
    zIndex: 11,
    transition: `all ${o}ms ease-in-out`,
    overflow: "scroll",
    padding: "25px 10px 10px",
    color: e.color.defaultText,
    background: e.background.content,
    opacity: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return 1;
        case "exiting":
        case "exited":
          return 0;
        default:
          return 0;
      }
    })()}`,
    transform: `${(() => {
      switch (t) {
        case "entering":
        case "entered":
          return "translateX(0)";
        case "exiting":
        case "exited":
          return "translateX(20px)";
        default:
          return "translateX(0)";
      }
    })()}`
  })
<<<<<<< HEAD
), _b = x.div({
  marginTop: 20,
  marginBottom: 20
}), Dl = x.a(({ theme: e }) => ({
=======
), Xf = x.div({
  marginTop: 20,
  marginBottom: 20
}), al = x.a(({ theme: e }) => ({
>>>>>>> main
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: e.typography.size.s2 - 1,
  height: 52,
  borderBottom: `1px solid ${e.appBorderColor}`,
  cursor: "pointer",
  padding: "0 10px",
  "&:last-child": {
    borderBottom: "none"
  }
<<<<<<< HEAD
})), Ml = x.div(({ theme: e }) => ({
=======
})), ll = x.div(({ theme: e }) => ({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s2 - 1,
  height: 40,
  gap: 5
<<<<<<< HEAD
})), kb = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2 - 1,
  marginTop: 30
})), Ob = x.button(({ theme: e }) => ({
=======
})), Zf = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2 - 1,
  marginTop: 30
})), Jf = x.button(({ theme: e }) => ({
>>>>>>> main
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "currentColor",
  fontSize: e.typography.size.s2 - 1,
  padding: "0 10px"
}));

// src/manager/components/mobile/navigation/MobileMenuDrawer.tsx
<<<<<<< HEAD
var Nl = /* @__PURE__ */ a(({ children: e }) => {
  let t = q(null), o = q(null), i = q(null), { isMobileMenuOpen: r, setMobileMenuOpen: n, isMobileAboutOpen: l, setMobileAboutOpen: u } = ge();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Nt,
    {
      nodeRef: t,
      in: r,
=======
var cl = /* @__PURE__ */ a(({ children: e }) => {
  let t = Y(null), o = Y(null), i = Y(null), { isMobileMenuOpen: n, setMobileMenuOpen: r, isMobileAboutOpen: l, setMobileAboutOpen: u } = ge();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
    Ct,
    {
      nodeRef: t,
      in: n,
>>>>>>> main
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0,
      onExited: () => u(!1)
    },
<<<<<<< HEAD
    (c) => /* @__PURE__ */ s.createElement(Pb, { ref: t, state: c }, /* @__PURE__ */ s.createElement(
      Nt,
=======
    (c) => /* @__PURE__ */ s.createElement(em, { ref: t, state: c }, /* @__PURE__ */ s.createElement(
      Ct,
>>>>>>> main
      {
        nodeRef: o,
        in: !l,
        timeout: 300
      },
<<<<<<< HEAD
      (d) => /* @__PURE__ */ s.createElement(Ab, { ref: o, state: d }, e)
    ), /* @__PURE__ */ s.createElement(Ll, null))
  ), /* @__PURE__ */ s.createElement(
    Nt,
    {
      nodeRef: i,
      in: r,
=======
      (p) => /* @__PURE__ */ s.createElement(tm, { ref: o, state: p }, e)
    ), /* @__PURE__ */ s.createElement(ul, null))
  ), /* @__PURE__ */ s.createElement(
    Ct,
    {
      nodeRef: i,
      in: n,
>>>>>>> main
      timeout: 300,
      mountOnEnter: !0,
      unmountOnExit: !0
    },
    (c) => /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
      Db,
      {
        ref: i,
        state: c,
        onClick: () => n(!1),
=======
      om,
      {
        ref: i,
        state: c,
        onClick: () => r(!1),
>>>>>>> main
        "aria-label": "Close navigation menu"
      }
    )
  ));
<<<<<<< HEAD
}, "MobileMenuDrawer"), Pb = x.div(({ theme: e, state: t }) => ({
=======
}, "MobileMenuDrawer"), em = x.div(({ theme: e, state: t }) => ({
>>>>>>> main
  position: "fixed",
  boxSizing: "border-box",
  width: "100%",
  background: e.background.content,
  height: "80%",
  bottom: 0,
  left: 0,
  zIndex: 11,
  borderRadius: "10px 10px 0 0",
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  transform: `${t === "entering" || t === "entered" ? "translateY(0)" : t === "exiting" || t === "exited" ? "translateY(100%)" : "translateY\
(0)"}`
<<<<<<< HEAD
})), Ab = x.div(({ theme: e, state: t }) => ({
=======
})), tm = x.div(({ theme: e, state: t }) => ({
>>>>>>> main
  position: "absolute",
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  zIndex: 1,
  transition: `all ${300}ms ease-in-out`,
  overflow: "hidden",
  opacity: `${t === "entered" || t === "entering" ? 1 : t === "exiting" || t === "exited" ? 0 : 1}`,
  transform: `${(() => {
    switch (t) {
      case "entering":
      case "entered":
        return "translateX(0)";
      case "exiting":
      case "exited":
        return "translateX(-20px)";
      default:
        return "translateX(0)";
    }
  })()}`
<<<<<<< HEAD
})), Db = x.div(({ state: e }) => ({
=======
})), om = x.div(({ state: e }) => ({
>>>>>>> main
  position: "fixed",
  boxSizing: "border-box",
  background: "rgba(0, 0, 0, 0.5)",
  top: 0,
  bottom: 0,
  right: 0,
  left: 0,
  zIndex: 10,
  transition: `all ${300}ms ease-in-out`,
  cursor: "pointer",
  opacity: `${(() => {
    switch (e) {
      case "entering":
      case "entered":
        return 1;
      case "exiting":
      case "exited":
        return 0;
      default:
        return 0;
    }
  })()}`,
  "&:hover": {
    background: "rgba(0, 0, 0, 0.6)"
  }
}));

// src/manager/components/mobile/navigation/MobileNavigation.tsx
<<<<<<< HEAD
function Mb(e, t) {
=======
function rm(e, t) {
>>>>>>> main
  let o = { ...e || {} };
  return Object.values(t).forEach((i) => {
    i.index && Object.assign(o, i.index);
  }), o;
}
<<<<<<< HEAD
a(Mb, "combineIndexes");
var Lb = /* @__PURE__ */ a(() => {
  let { index: e, refs: t } = Ne(), o = oe(), i = o.getCurrentStoryData();
  if (!i)
    return "";
  let r = Mb(e, t || {}), n = i.renderLabel?.(i, o) || i.name, l = r[i.id];
  for (; l && "parent" in l && l.parent && r[l.parent] && n.length < 24; )
    l = r[l.parent], n = `${l.renderLabel?.(l, o) || l.name}/${n}`;
  return n;
}, "useFullStoryName"), Fl = /* @__PURE__ */ a(({
  menu: e,
  panel: t,
  showPanel: o,
  ...i
}) => {
  let { isMobileMenuOpen: r, isMobilePanelOpen: n, setMobileMenuOpen: l, setMobilePanelOpen: u } = ge(), c = Lb();
  return /* @__PURE__ */ s.createElement(Nb, { ...i }, /* @__PURE__ */ s.createElement(Nl, null, e), n ? /* @__PURE__ */ s.createElement(Pl,
  null, t) : /* @__PURE__ */ s.createElement(Fb, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(Rb, { onClick: () => l(!r), title: "\
Open navigation menu" }, /* @__PURE__ */ s.createElement(Io, null), /* @__PURE__ */ s.createElement(Bb, null, c)), o && /* @__PURE__ */ s.createElement(
  ee, { onClick: () => u(!0), title: "Open addon panel" }, /* @__PURE__ */ s.createElement(wn, null))));
}, "MobileNavigation"), Nb = x.div(({ theme: e }) => ({
=======
a(rm, "combineIndexes");
var nm = /* @__PURE__ */ a(() => {
  let { index: e, refs: t } = Pe(), o = oe(), i = o.getCurrentStoryData();
  if (!i)
    return "";
  let n = rm(e, t || {}), r = i.renderLabel?.(i, o) || i.name, l = n[i.id];
  for (; l && "parent" in l && l.parent && n[l.parent] && r.length < 24; )
    l = n[l.parent], r = `${l.renderLabel?.(l, o) || l.name}/${r}`;
  return r;
}, "useFullStoryName"), pl = /* @__PURE__ */ a(({ menu: e, panel: t, showPanel: o }) => {
  let { isMobileMenuOpen: i, isMobilePanelOpen: n, setMobileMenuOpen: r, setMobilePanelOpen: l } = ge(), u = nm();
  return /* @__PURE__ */ s.createElement(im, null, /* @__PURE__ */ s.createElement(cl, null, e), n ? /* @__PURE__ */ s.createElement(il, null,
  t) : /* @__PURE__ */ s.createElement(sm, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(am, { onClick: () => r(!i), title: "Open\
 navigation menu" }, /* @__PURE__ */ s.createElement(Lo, null), /* @__PURE__ */ s.createElement(lm, null, u)), o && /* @__PURE__ */ s.createElement(
  te, { onClick: () => l(!0), title: "Open addon panel" }, /* @__PURE__ */ s.createElement(hs, null))));
}, "MobileNavigation"), im = x.div(({ theme: e }) => ({
>>>>>>> main
  bottom: 0,
  left: 0,
  width: "100%",
  zIndex: 10,
  background: e.barBg,
  borderTop: `1px solid ${e.appBorderColor}`
<<<<<<< HEAD
})), Fb = x.div({
=======
})), sm = x.div({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: "100%",
  height: 40,
  padding: "0 6px"
<<<<<<< HEAD
}), Rb = x.button(({ theme: e }) => ({
=======
}), am = x.button(({ theme: e }) => ({
>>>>>>> main
  all: "unset",
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: e.barTextColor,
  fontSize: `${e.typography.size.s2 - 1}px`,
  padding: "0 7px",
  fontWeight: e.typography.weight.bold,
  WebkitLineClamp: 1,
  "> svg": {
    width: 14,
    height: 14,
    flexShrink: 0
  }
<<<<<<< HEAD
})), Bb = x.p({
=======
})), lm = x.p({
>>>>>>> main
  display: "-webkit-box",
  WebkitLineClamp: 1,
  WebkitBoxOrient: "vertical",
  overflow: "hidden"
});

// src/manager/components/layout/useDragging.ts
<<<<<<< HEAD
var Rl = 30, wr = 240, Er = 270, Bl = 0.9;
function Hl(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
a(Hl, "clamp");
function zl(e, t, o) {
  return t + (o - t) * e;
}
a(zl, "interpolate");
function Wl({
=======
var dl = 30, ar = 240, lr = 270, fl = 0.9;
function ml(e, t, o) {
  return Math.min(Math.max(e, t), o);
}
a(ml, "clamp");
function hl(e, t, o) {
  return t + (o - t) * e;
}
a(hl, "interpolate");
function gl({
>>>>>>> main
  setState: e,
  isPanelShown: t,
  isDesktop: o
}) {
<<<<<<< HEAD
  let i = q(null), r = q(null);
  return V(() => {
    let n = i.current, l = r.current, u = document.querySelector("#storybook-preview-wrapper"), c = null, d = /* @__PURE__ */ a((h) => {
      h.preventDefault(), e((b) => ({
        ...b,
        isDragging: !0
      })), h.currentTarget === n ? c = n : h.currentTarget === l && (c = l), window.addEventListener("mousemove", m), window.addEventListener(
      "mouseup", p), u && (u.style.pointerEvents = "none");
    }, "onDragStart"), p = /* @__PURE__ */ a((h) => {
      e((b) => c === l && b.navSize < wr && b.navSize > 0 ? {
        ...b,
        isDragging: !1,
        navSize: wr
      } : c === n && b.panelPosition === "right" && b.rightPanelWidth < Er && b.rightPanelWidth > 0 ? {
        ...b,
        isDragging: !1,
        rightPanelWidth: Er
      } : {
        ...b,
        isDragging: !1
      }), window.removeEventListener("mousemove", m), window.removeEventListener("mouseup", p), u?.removeAttribute("style"), c = null;
    }, "onDragEnd"), m = /* @__PURE__ */ a((h) => {
      if (h.buttons === 0) {
        p(h);
        return;
      }
      e((b) => {
        if (c === l) {
          let f = h.clientX;
          return f === b.navSize ? b : f <= Rl ? {
            ...b,
            navSize: 0
          } : f <= wr ? {
            ...b,
            navSize: zl(Bl, f, wr)
          } : {
            ...b,
            // @ts-expect-error (non strict)
            navSize: Hl(f, 0, h.view.innerWidth)
          };
        }
        if (c === n) {
          let f = b.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth", y = b.panelPosition === "bottom" ? (
=======
  let i = Y(null), n = Y(null);
  return j(() => {
    let r = i.current, l = n.current, u = document.querySelector("#storybook-preview-wrapper"), c = null, p = /* @__PURE__ */ a((h) => {
      h.preventDefault(), e((y) => ({
        ...y,
        isDragging: !0
      })), h.currentTarget === r ? c = r : h.currentTarget === l && (c = l), window.addEventListener("mousemove", g), window.addEventListener(
      "mouseup", d), u && (u.style.pointerEvents = "none");
    }, "onDragStart"), d = /* @__PURE__ */ a((h) => {
      e((y) => c === l && y.navSize < ar && y.navSize > 0 ? {
        ...y,
        isDragging: !1,
        navSize: ar
      } : c === r && y.panelPosition === "right" && y.rightPanelWidth < lr && y.rightPanelWidth > 0 ? {
        ...y,
        isDragging: !1,
        rightPanelWidth: lr
      } : {
        ...y,
        isDragging: !1
      }), window.removeEventListener("mousemove", g), window.removeEventListener("mouseup", d), u?.removeAttribute("style"), c = null;
    }, "onDragEnd"), g = /* @__PURE__ */ a((h) => {
      if (h.buttons === 0) {
        d(h);
        return;
      }
      e((y) => {
        if (c === l) {
          let f = h.clientX;
          return f === y.navSize ? y : f <= dl ? {
            ...y,
            navSize: 0
          } : f <= ar ? {
            ...y,
            navSize: hl(fl, f, ar)
          } : {
            ...y,
            // @ts-expect-error (non strict)
            navSize: ml(f, 0, h.view.innerWidth)
          };
        }
        if (c === r) {
          let f = y.panelPosition === "bottom" ? "bottomPanelHeight" : "rightPanelWidth", b = y.panelPosition === "bottom" ? (
>>>>>>> main
            // @ts-expect-error (non strict)
            h.view.innerHeight - h.clientY
          ) : (
            // @ts-expect-error (non strict)
            h.view.innerWidth - h.clientX
          );
<<<<<<< HEAD
          if (y === b[f])
            return b;
          if (y <= Rl)
            return {
              ...b,
              [f]: 0
            };
          if (b.panelPosition === "right" && y <= Er)
            return {
              ...b,
              [f]: zl(
                Bl,
                y,
                Er
              )
            };
          let S = (
            // @ts-expect-error (non strict)
            b.panelPosition === "bottom" ? h.view.innerHeight : h.view.innerWidth
          );
          return {
            ...b,
            [f]: Hl(y, 0, S)
          };
        }
        return b;
      });
    }, "onDrag");
    return n?.addEventListener("mousedown", d), l?.addEventListener("mousedown", d), () => {
      n?.removeEventListener("mousedown", d), l?.removeEventListener("mousedown", d), u?.removeAttribute("style");
=======
          if (b === y[f])
            return y;
          if (b <= dl)
            return {
              ...y,
              [f]: 0
            };
          if (y.panelPosition === "right" && b <= lr)
            return {
              ...y,
              [f]: hl(
                fl,
                b,
                lr
              )
            };
          let I = (
            // @ts-expect-error (non strict)
            y.panelPosition === "bottom" ? h.view.innerHeight : h.view.innerWidth
          );
          return {
            ...y,
            [f]: ml(b, 0, I)
          };
        }
        return y;
      });
    }, "onDrag");
    return r?.addEventListener("mousedown", p), l?.addEventListener("mousedown", p), () => {
      r?.removeEventListener("mousedown", p), l?.removeEventListener("mousedown", p), u?.removeAttribute("style");
>>>>>>> main
    };
  }, [
    // we need to rerun this effect when the panel is shown/hidden or when changing between mobile/desktop to re-attach the event listeners
    t,
    o,
    e
<<<<<<< HEAD
  ]), { panelResizerRef: i, sidebarResizerRef: r };
}
a(Wl, "useDragging");

// src/manager/components/layout/Layout.tsx
var Hb = 100, Vl = /* @__PURE__ */ a((e, t) => e.navSize === t.navSize && e.bottomPanelHeight === t.bottomPanelHeight && e.rightPanelWidth ===
t.rightPanelWidth && e.panelPosition === t.panelPosition, "layoutStateIsEqual"), zb = /* @__PURE__ */ a(({
  api: e,
  managerLayoutState: t,
  setManagerLayoutState: o,
  isDesktop: i,
  hasTab: r
}) => {
  let n = s.useRef(t), [l, u] = K({
    ...t,
    isDragging: !1
  });
  V(() => {
    l.isDragging || // don't interrupt user's drag
    Vl(t, n.current) || (n.current = t, u((S) => ({ ...S, ...t })));
  }, [l.isDragging, t, u]), Xt(() => {
    if (l.isDragging || // wait with syncing managerLayoutState until user is done dragging
    Vl(t, l))
      return;
    let S = {
      navSize: l.navSize,
      bottomPanelHeight: l.bottomPanelHeight,
      rightPanelWidth: l.rightPanelWidth
    };
    n.current = {
      ...n.current,
      ...S
    }, o(S);
  }, [l, o]);
  let c = t.viewMode !== "story" && t.viewMode !== "docs", d = t.viewMode === "story" && !r, { panelResizerRef: p, sidebarResizerRef: m } = Wl(
  {
    setState: u,
    isPanelShown: d,
    isDesktop: i
  }), { navSize: h, rightPanelWidth: b, bottomPanelHeight: f } = l.isDragging ? l : t;
  return {
    navSize: e.getNavSizeWithCustomisations?.(h) ?? h,
    rightPanelWidth: b,
    bottomPanelHeight: f,
    panelPosition: t.panelPosition,
    panelResizerRef: p,
    sidebarResizerRef: m,
    showPages: c,
    showPanel: d,
    isDragging: l.isDragging
  };
}, "useLayoutSyncingState"), jl = /* @__PURE__ */ a(({ children: e }) => /* @__PURE__ */ s.createElement(ja, { path: /(^\/story|docs|onboarding\/|^\/$)/,
startsWith: !1 }, ({ match: t }) => /* @__PURE__ */ s.createElement(Kb, { shown: !!t }, e)), "MainContentMatcher"), Wb = x(Fl)({
  order: 1
}), $l = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, hasTab: o, ...i }) => {
  let { isDesktop: r, isMobile: n } = ge(), l = oe(), {
    navSize: u,
    rightPanelWidth: c,
    bottomPanelHeight: d,
    panelPosition: p,
    panelResizerRef: m,
    sidebarResizerRef: h,
    showPages: b,
    showPanel: f,
    isDragging: y
  } = zb({ api: l, managerLayoutState: e, setManagerLayoutState: t, isDesktop: r, hasTab: o });
  return /* @__PURE__ */ s.createElement(
    Vb,
    {
      navSize: u,
      rightPanelWidth: c,
      bottomPanelHeight: d,
      panelPosition: e.panelPosition,
      isDragging: y,
      viewMode: e.viewMode,
      showPanel: f
    },
    b && /* @__PURE__ */ s.createElement($b, null, i.slotPages),
    r && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(jb, null, /* @__PURE__ */ s.createElement(Kl, { ref: h }),
    i.slotSidebar), /* @__PURE__ */ s.createElement(jl, null, i.slotMain), f && /* @__PURE__ */ s.createElement(Ub, { position: p }, /* @__PURE__ */ s.
    createElement(
      Kl,
      {
        orientation: p === "bottom" ? "horizontal" : "vertical",
        position: p === "bottom" ? "left" : "right",
        ref: m
      }
    ), i.slotPanel)),
    n && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
      Wb,
      {
        menu: i.slotSidebar,
        panel: i.slotPanel,
        showPanel: f
      }
    ), /* @__PURE__ */ s.createElement(jl, null, i.slotMain), /* @__PURE__ */ s.createElement(Ol, null))
  );
}, "Layout"), Vb = x.div(
  ({ navSize: e, rightPanelWidth: t, bottomPanelHeight: o, viewMode: i, panelPosition: r, showPanel: n }) => ({
=======
  ]), { panelResizerRef: i, sidebarResizerRef: n };
}
a(gl, "useDragging");

// src/manager/components/layout/Layout.tsx
var um = 100, yl = /* @__PURE__ */ a((e, t) => e.navSize === t.navSize && e.bottomPanelHeight === t.bottomPanelHeight && e.rightPanelWidth ===
t.rightPanelWidth && e.panelPosition === t.panelPosition, "layoutStateIsEqual"), cm = /* @__PURE__ */ a(({
  managerLayoutState: e,
  setManagerLayoutState: t,
  isDesktop: o,
  hasTab: i
}) => {
  let n = s.useRef(e), [r, l] = $({
    ...e,
    isDragging: !1
  });
  j(() => {
    r.isDragging || // don't interrupt user's drag
    yl(e, n.current) || (n.current = e, l((f) => ({ ...f, ...e })));
  }, [r.isDragging, e, l]), ft(() => {
    if (r.isDragging || // wait with syncing managerLayoutState until user is done dragging
    yl(e, r))
      return;
    let f = {
      navSize: r.navSize,
      bottomPanelHeight: r.bottomPanelHeight,
      rightPanelWidth: r.rightPanelWidth
    };
    n.current = {
      ...n.current,
      ...f
    }, t(f);
  }, [r, t]);
  let u = e.viewMode !== "story" && e.viewMode !== "docs", c = e.viewMode === "story" && !i, { panelResizerRef: p, sidebarResizerRef: d } = gl(
  {
    setState: l,
    isPanelShown: c,
    isDesktop: o
  }), { navSize: g, rightPanelWidth: h, bottomPanelHeight: y } = r.isDragging ? r : e;
  return {
    navSize: g,
    rightPanelWidth: h,
    bottomPanelHeight: y,
    panelPosition: e.panelPosition,
    panelResizerRef: p,
    sidebarResizerRef: d,
    showPages: u,
    showPanel: c,
    isDragging: r.isDragging
  };
}, "useLayoutSyncingState"), vl = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, hasTab: o, ...i }) => {
  let { isDesktop: n, isMobile: r } = ge(), {
    navSize: l,
    rightPanelWidth: u,
    bottomPanelHeight: c,
    panelPosition: p,
    panelResizerRef: d,
    sidebarResizerRef: g,
    showPages: h,
    showPanel: y,
    isDragging: f
  } = cm({ managerLayoutState: e, setManagerLayoutState: t, isDesktop: n, hasTab: o });
  return /* @__PURE__ */ s.createElement(
    pm,
    {
      navSize: l,
      rightPanelWidth: u,
      bottomPanelHeight: c,
      panelPosition: e.panelPosition,
      isDragging: f,
      viewMode: e.viewMode,
      showPanel: y
    },
    h && /* @__PURE__ */ s.createElement(mm, null, i.slotPages),
    /* @__PURE__ */ s.createElement(ca, { path: /(^\/story|docs|onboarding\/|^\/$)/, startsWith: !1 }, ({ match: b }) => /* @__PURE__ */ s.createElement(
    fm, { shown: !!b }, i.slotMain)),
    n && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(dm, null, /* @__PURE__ */ s.createElement(bl, { ref: g }),
    i.slotSidebar), y && /* @__PURE__ */ s.createElement(hm, { position: p }, /* @__PURE__ */ s.createElement(
      bl,
      {
        orientation: p === "bottom" ? "horizontal" : "vertical",
        position: p === "bottom" ? "left" : "right",
        ref: d
      }
    ), i.slotPanel)),
    r && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(nl, null), /* @__PURE__ */ s.createElement(
      pl,
      {
        menu: i.slotSidebar,
        panel: i.slotPanel,
        showPanel: y
      }
    ))
  );
}, "Layout"), pm = x.div(
  ({ navSize: e, rightPanelWidth: t, bottomPanelHeight: o, viewMode: i, panelPosition: n, showPanel: r }) => ({
>>>>>>> main
    width: "100%",
    height: ["100vh", "100dvh"],
    // This array is a special Emotion syntax to set a fallback if 100dvh is not supported
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    [Qe]: {
      display: "grid",
      gap: 0,
<<<<<<< HEAD
      gridTemplateColumns: `minmax(0, ${e}px) minmax(${Hb}px, 1fr) minmax(0, ${t}px)`,
      gridTemplateRows: `1fr minmax(0, ${o}px)`,
      gridTemplateAreas: i === "docs" || !n ? `"sidebar content content"
                  "sidebar content content"` : r === "right" ? `"sidebar content panel"
=======
      gridTemplateColumns: `minmax(0, ${e}px) minmax(${um}px, 1fr) minmax(0, ${t}px)`,
      gridTemplateRows: `1fr minmax(0, ${o}px)`,
      gridTemplateAreas: i === "docs" || !r ? `"sidebar content content"
                  "sidebar content content"` : n === "right" ? `"sidebar content panel"
>>>>>>> main
                  "sidebar content panel"` : `"sidebar content content"
                "sidebar panel   panel"`
    }
  })
<<<<<<< HEAD
), jb = x.div(({ theme: e }) => ({
=======
), dm = x.div(({ theme: e }) => ({
>>>>>>> main
  backgroundColor: e.background.app,
  gridArea: "sidebar",
  position: "relative",
  borderRight: `1px solid ${e.color.border}`
<<<<<<< HEAD
})), Kb = x.div(({ theme: e, shown: t }) => ({
=======
})), fm = x.div(({ theme: e, shown: t }) => ({
>>>>>>> main
  flex: 1,
  position: "relative",
  backgroundColor: e.background.content,
  display: t ? "grid" : "none",
  // This is needed to make the content container fill the available space
  overflow: "auto",
  [Qe]: {
    flex: "auto",
    gridArea: "content"
  }
<<<<<<< HEAD
})), $b = x.div(({ theme: e }) => ({
=======
})), mm = x.div(({ theme: e }) => ({
>>>>>>> main
  gridRowStart: "sidebar-start",
  gridRowEnd: "-1",
  gridColumnStart: "sidebar-end",
  gridColumnEnd: "-1",
  backgroundColor: e.background.content,
  zIndex: 1
<<<<<<< HEAD
})), Ub = x.div(
=======
})), hm = x.div(
>>>>>>> main
  ({ theme: e, position: t }) => ({
    gridArea: "panel",
    position: "relative",
    backgroundColor: e.background.content,
    borderTop: t === "bottom" ? `1px solid ${e.color.border}` : void 0,
    borderLeft: t === "right" ? `1px solid ${e.color.border}` : void 0
  })
<<<<<<< HEAD
), Kl = x.div(
=======
), bl = x.div(
>>>>>>> main
  ({ theme: e }) => ({
    position: "absolute",
    opacity: 0,
    transition: "opacity 0.2s ease-in-out",
    zIndex: 100,
    "&:after": {
      content: '""',
      display: "block",
      backgroundColor: e.color.secondary
    },
    "&:hover": {
      opacity: 1
    }
  }),
  ({ orientation: e = "vertical", position: t = "left" }) => e === "vertical" ? {
    width: t === "left" ? 10 : 13,
    height: "100%",
    top: 0,
    right: t === "left" ? "-7px" : void 0,
    left: t === "right" ? "-7px" : void 0,
    "&:after": {
      width: 1,
      height: "100%",
      marginLeft: t === "left" ? 3 : 6
    },
    "&:hover": {
      cursor: "col-resize"
    }
  } : {
    width: "100%",
    height: "13px",
    top: "-7px",
    left: 0,
    "&:after": {
      width: "100%",
      height: 1,
      marginTop: 6
    },
    "&:hover": {
      cursor: "row-resize"
    }
  }
);

<<<<<<< HEAD
// global-externals:storybook/internal/types
var PO = __STORYBOOK_TYPES__, { Addon_TypesEnum: Ce } = __STORYBOOK_TYPES__;

// src/core-events/index.ts
var Ul = /* @__PURE__ */ ((N) => (N.CHANNEL_WS_DISCONNECT = "channelWSDisconnect", N.CHANNEL_CREATED = "channelCreated", N.CONFIG_ERROR = "c\
onfigError", N.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", N.STORY_SPECIFIED = "storySpecified", N.SET_CONFIG = "setConfig", N.SET_STORIES =
"setStories", N.SET_INDEX = "setIndex", N.SET_CURRENT_STORY = "setCurrentStory", N.CURRENT_STORY_WAS_SET = "currentStoryWasSet", N.FORCE_RE_RENDER =
"forceReRender", N.FORCE_REMOUNT = "forceRemount", N.PRELOAD_ENTRIES = "preloadStories", N.STORY_PREPARED = "storyPrepared", N.DOCS_PREPARED =
"docsPrepared", N.STORY_CHANGED = "storyChanged", N.STORY_UNCHANGED = "storyUnchanged", N.STORY_RENDERED = "storyRendered", N.STORY_FINISHED =
"storyFinished", N.STORY_MISSING = "storyMissing", N.STORY_ERRORED = "storyErrored", N.STORY_THREW_EXCEPTION = "storyThrewException", N.STORY_RENDER_PHASE_CHANGED =
"storyRenderPhaseChanged", N.STORY_HOT_UPDATED = "storyHotUpdated", N.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", N.UNHANDLED_ERRORS_WHILE_PLAYING =
"unhandledErrorsWhilePlaying", N.UPDATE_STORY_ARGS = "updateStoryArgs", N.STORY_ARGS_UPDATED = "storyArgsUpdated", N.RESET_STORY_ARGS = "res\
etStoryArgs", N.SET_FILTER = "setFilter", N.SET_GLOBALS = "setGlobals", N.UPDATE_GLOBALS = "updateGlobals", N.GLOBALS_UPDATED = "globalsUpda\
ted", N.REGISTER_SUBSCRIPTION = "registerSubscription", N.PREVIEW_KEYDOWN = "previewKeydown", N.PREVIEW_BUILDER_PROGRESS = "preview_builder_\
progress", N.SELECT_STORY = "selectStory", N.STORIES_COLLAPSE_ALL = "storiesCollapseAll", N.STORIES_EXPAND_ALL = "storiesExpandAll", N.DOCS_RENDERED =
"docsRendered", N.SHARED_STATE_CHANGED = "sharedStateChanged", N.SHARED_STATE_SET = "sharedStateSet", N.NAVIGATE_URL = "navigateUrl", N.UPDATE_QUERY_PARAMS =
"updateQueryParams", N.REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", N.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", N.SET_WHATS_NEW_CACHE =
"setWhatsNewCache", N.TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", N.TELEMETRY_ERROR = "telemetryError", N.FILE_COMPONENT_SEARCH_REQUEST =
"fileComponentSearchRequest", N.FILE_COMPONENT_SEARCH_RESPONSE = "fileComponentSearchResponse", N.SAVE_STORY_REQUEST = "saveStoryRequest", N.
SAVE_STORY_RESPONSE = "saveStoryResponse", N.ARGTYPES_INFO_REQUEST = "argtypesInfoRequest", N.ARGTYPES_INFO_RESPONSE = "argtypesInfoResponse",
N.CREATE_NEW_STORYFILE_REQUEST = "createNewStoryfileRequest", N.CREATE_NEW_STORYFILE_RESPONSE = "createNewStoryfileResponse", N))(Ul || {});
var {
  CHANNEL_WS_DISCONNECT: DO,
  CHANNEL_CREATED: MO,
  CONFIG_ERROR: LO,
  CREATE_NEW_STORYFILE_REQUEST: NO,
  CREATE_NEW_STORYFILE_RESPONSE: FO,
  CURRENT_STORY_WAS_SET: RO,
  DOCS_PREPARED: BO,
  DOCS_RENDERED: HO,
  FILE_COMPONENT_SEARCH_REQUEST: zO,
  FILE_COMPONENT_SEARCH_RESPONSE: WO,
  FORCE_RE_RENDER: VO,
  FORCE_REMOUNT: jO,
  GLOBALS_UPDATED: KO,
  NAVIGATE_URL: $O,
  PLAY_FUNCTION_THREW_EXCEPTION: UO,
  UNHANDLED_ERRORS_WHILE_PLAYING: GO,
  PRELOAD_ENTRIES: qO,
  PREVIEW_BUILDER_PROGRESS: YO,
  PREVIEW_KEYDOWN: QO,
  REGISTER_SUBSCRIPTION: XO,
  RESET_STORY_ARGS: ZO,
  SELECT_STORY: JO,
  SET_CONFIG: eP,
  SET_CURRENT_STORY: tP,
  SET_FILTER: oP,
  SET_GLOBALS: rP,
  SET_INDEX: nP,
  SET_STORIES: iP,
  SHARED_STATE_CHANGED: sP,
  SHARED_STATE_SET: aP,
  STORIES_COLLAPSE_ALL: lP,
  STORIES_EXPAND_ALL: uP,
  STORY_ARGS_UPDATED: cP,
  STORY_CHANGED: pP,
  STORY_ERRORED: dP,
  STORY_INDEX_INVALIDATED: fP,
  STORY_MISSING: mP,
  STORY_PREPARED: Gl,
  STORY_RENDER_PHASE_CHANGED: hP,
  STORY_RENDERED: gP,
  STORY_FINISHED: yP,
  STORY_SPECIFIED: bP,
  STORY_THREW_EXCEPTION: vP,
  STORY_UNCHANGED: xP,
  STORY_HOT_UPDATED: IP,
  UPDATE_GLOBALS: SP,
  UPDATE_QUERY_PARAMS: wP,
  UPDATE_STORY_ARGS: EP,
  REQUEST_WHATS_NEW_DATA: TP,
  RESULT_WHATS_NEW_DATA: CP,
  SET_WHATS_NEW_CACHE: _P,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: kP,
  TELEMETRY_ERROR: OP,
  SAVE_STORY_REQUEST: PP,
  SAVE_STORY_RESPONSE: AP,
  ARGTYPES_INFO_REQUEST: DP,
  ARGTYPES_INFO_RESPONSE: MP
} = Ul;

// src/manager/components/panel/Panel.tsx
var _i = class _i extends Le {
=======
// global-externals:@storybook/core/types
var lk = __STORYBOOK_TYPES__, { Addon_TypesEnum: Te } = __STORYBOOK_TYPES__;

// src/core-events/index.ts
var xl = /* @__PURE__ */ ((B) => (B.CHANNEL_WS_DISCONNECT = "channelWSDisconnect", B.CHANNEL_CREATED = "channelCreated", B.CONFIG_ERROR = "c\
onfigError", B.STORY_INDEX_INVALIDATED = "storyIndexInvalidated", B.STORY_SPECIFIED = "storySpecified", B.SET_CONFIG = "setConfig", B.SET_STORIES =
"setStories", B.SET_INDEX = "setIndex", B.SET_CURRENT_STORY = "setCurrentStory", B.CURRENT_STORY_WAS_SET = "currentStoryWasSet", B.FORCE_RE_RENDER =
"forceReRender", B.FORCE_REMOUNT = "forceRemount", B.PRELOAD_ENTRIES = "preloadStories", B.STORY_PREPARED = "storyPrepared", B.DOCS_PREPARED =
"docsPrepared", B.STORY_CHANGED = "storyChanged", B.STORY_UNCHANGED = "storyUnchanged", B.STORY_RENDERED = "storyRendered", B.STORY_FINISHED =
"storyFinished", B.STORY_MISSING = "storyMissing", B.STORY_ERRORED = "storyErrored", B.STORY_THREW_EXCEPTION = "storyThrewException", B.STORY_RENDER_PHASE_CHANGED =
"storyRenderPhaseChanged", B.PLAY_FUNCTION_THREW_EXCEPTION = "playFunctionThrewException", B.UNHANDLED_ERRORS_WHILE_PLAYING = "unhandledErro\
rsWhilePlaying", B.UPDATE_STORY_ARGS = "updateStoryArgs", B.STORY_ARGS_UPDATED = "storyArgsUpdated", B.RESET_STORY_ARGS = "resetStoryArgs", B.
SET_FILTER = "setFilter", B.SET_GLOBALS = "setGlobals", B.UPDATE_GLOBALS = "updateGlobals", B.GLOBALS_UPDATED = "globalsUpdated", B.REGISTER_SUBSCRIPTION =
"registerSubscription", B.PREVIEW_KEYDOWN = "previewKeydown", B.PREVIEW_BUILDER_PROGRESS = "preview_builder_progress", B.SELECT_STORY = "sel\
ectStory", B.STORIES_COLLAPSE_ALL = "storiesCollapseAll", B.STORIES_EXPAND_ALL = "storiesExpandAll", B.DOCS_RENDERED = "docsRendered", B.SHARED_STATE_CHANGED =
"sharedStateChanged", B.SHARED_STATE_SET = "sharedStateSet", B.NAVIGATE_URL = "navigateUrl", B.UPDATE_QUERY_PARAMS = "updateQueryParams", B.
REQUEST_WHATS_NEW_DATA = "requestWhatsNewData", B.RESULT_WHATS_NEW_DATA = "resultWhatsNewData", B.SET_WHATS_NEW_CACHE = "setWhatsNewCache", B.
TOGGLE_WHATS_NEW_NOTIFICATIONS = "toggleWhatsNewNotifications", B.TELEMETRY_ERROR = "telemetryError", B.FILE_COMPONENT_SEARCH_REQUEST = "fil\
eComponentSearchRequest", B.FILE_COMPONENT_SEARCH_RESPONSE = "fileComponentSearchResponse", B.SAVE_STORY_REQUEST = "saveStoryRequest", B.SAVE_STORY_RESPONSE =
"saveStoryResponse", B.ARGTYPES_INFO_REQUEST = "argtypesInfoRequest", B.ARGTYPES_INFO_RESPONSE = "argtypesInfoResponse", B.CREATE_NEW_STORYFILE_REQUEST =
"createNewStoryfileRequest", B.CREATE_NEW_STORYFILE_RESPONSE = "createNewStoryfileResponse", B.TESTING_MODULE_CRASH_REPORT = "testingModuleC\
rashReport", B.TESTING_MODULE_PROGRESS_REPORT = "testingModuleProgressReport", B.TESTING_MODULE_RUN_REQUEST = "testingModuleRunRequest", B.TESTING_MODULE_RUN_ALL_REQUEST =
"testingModuleRunAllRequest", B.TESTING_MODULE_CANCEL_TEST_RUN_REQUEST = "testingModuleCancelTestRunRequest", B.TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE =
"testingModuleCancelTestRunResponse", B))(xl || {});
var {
  CHANNEL_WS_DISCONNECT: ck,
  CHANNEL_CREATED: pk,
  CONFIG_ERROR: dk,
  CREATE_NEW_STORYFILE_REQUEST: fk,
  CREATE_NEW_STORYFILE_RESPONSE: mk,
  CURRENT_STORY_WAS_SET: hk,
  DOCS_PREPARED: gk,
  DOCS_RENDERED: yk,
  FILE_COMPONENT_SEARCH_REQUEST: bk,
  FILE_COMPONENT_SEARCH_RESPONSE: vk,
  FORCE_RE_RENDER: xk,
  FORCE_REMOUNT: Sk,
  GLOBALS_UPDATED: Ik,
  NAVIGATE_URL: Ek,
  PLAY_FUNCTION_THREW_EXCEPTION: _k,
  UNHANDLED_ERRORS_WHILE_PLAYING: wk,
  PRELOAD_ENTRIES: Tk,
  PREVIEW_BUILDER_PROGRESS: Ck,
  PREVIEW_KEYDOWN: kk,
  REGISTER_SUBSCRIPTION: Ok,
  RESET_STORY_ARGS: Pk,
  SELECT_STORY: Ak,
  SET_CONFIG: Dk,
  SET_CURRENT_STORY: Mk,
  SET_FILTER: Lk,
  SET_GLOBALS: Nk,
  SET_INDEX: Rk,
  SET_STORIES: Fk,
  SHARED_STATE_CHANGED: Hk,
  SHARED_STATE_SET: Bk,
  STORIES_COLLAPSE_ALL: zk,
  STORIES_EXPAND_ALL: Wk,
  STORY_ARGS_UPDATED: jk,
  STORY_CHANGED: Vk,
  STORY_ERRORED: Kk,
  STORY_INDEX_INVALIDATED: $k,
  STORY_MISSING: Uk,
  STORY_PREPARED: Sl,
  STORY_RENDER_PHASE_CHANGED: Gk,
  STORY_RENDERED: Yk,
  STORY_FINISHED: qk,
  STORY_SPECIFIED: Qk,
  STORY_THREW_EXCEPTION: Xk,
  STORY_UNCHANGED: Zk,
  UPDATE_GLOBALS: Jk,
  UPDATE_QUERY_PARAMS: eO,
  UPDATE_STORY_ARGS: tO,
  REQUEST_WHATS_NEW_DATA: oO,
  RESULT_WHATS_NEW_DATA: rO,
  SET_WHATS_NEW_CACHE: nO,
  TOGGLE_WHATS_NEW_NOTIFICATIONS: iO,
  TELEMETRY_ERROR: sO,
  SAVE_STORY_REQUEST: aO,
  SAVE_STORY_RESPONSE: lO,
  ARGTYPES_INFO_REQUEST: uO,
  ARGTYPES_INFO_RESPONSE: cO,
  TESTING_MODULE_CRASH_REPORT: pO,
  TESTING_MODULE_PROGRESS_REPORT: dO,
  TESTING_MODULE_RUN_REQUEST: fO,
  TESTING_MODULE_RUN_ALL_REQUEST: mO,
  TESTING_MODULE_CANCEL_TEST_RUN_REQUEST: hO,
  TESTING_MODULE_CANCEL_TEST_RUN_RESPONSE: gO
} = xl;

// src/manager/components/panel/Panel.tsx
var Hn = class Hn extends Re {
>>>>>>> main
  constructor(t) {
    super(t), this.state = { hasError: !1 };
  }
  componentDidCatch(t, o) {
    this.setState({ hasError: !0 }), console.error(t, o);
  }
  // @ts-expect-error (we know this is broken)
  render() {
    let { hasError: t } = this.state, { children: o } = this.props;
    return t ? /* @__PURE__ */ s.createElement("h1", null, "Something went wrong.") : o;
  }
};
<<<<<<< HEAD
a(_i, "SafeTab");
var Ti = _i, Ci = s.memo(
=======
a(Hn, "SafeTab");
var Rn = Hn, Fn = s.memo(
>>>>>>> main
  ({
    panels: e,
    shortcuts: t,
    actions: o,
    selectedPanel: i = null,
<<<<<<< HEAD
    panelPosition: r = "right",
    absolute: n = !0
  }) => {
    let { isDesktop: l, setMobilePanelOpen: u } = ge();
    return /* @__PURE__ */ s.createElement(
      Ta,
      {
        absolute: n,
=======
    panelPosition: n = "right",
    absolute: r = !0
  }) => {
    let { isDesktop: l, setMobilePanelOpen: u } = ge();
    return /* @__PURE__ */ s.createElement(
      Ua,
      {
        absolute: r,
>>>>>>> main
        ...i && e[i] ? { selected: i } : {},
        menuName: "Addons",
        actions: o,
        showToolsWhenEmpty: !0,
        emptyState: /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
          wa,
=======
          ja,
>>>>>>> main
          {
            title: "Storybook add-ons",
            description: /* @__PURE__ */ s.createElement(s.Fragment, null, "Integrate your tools with Storybook to connect workflows and unl\
ock advanced features."),
<<<<<<< HEAD
            footer: /* @__PURE__ */ s.createElement(Pe, { href: "https://storybook.js.org/integrations", target: "_blank", withArrow: !0 }, /* @__PURE__ */ s.
            createElement(kt, null), " Explore integrations catalog")
          }
        ),
        tools: /* @__PURE__ */ s.createElement(Gb, null, l ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
          ee,
          {
            key: "position",
            onClick: o.togglePosition,
            title: `Change addon orientation [${Ye(
              t.panelPosition
            )}]`
          },
          r === "bottom" ? /* @__PURE__ */ s.createElement(wo, null) : /* @__PURE__ */ s.createElement(yo, null)
        ), /* @__PURE__ */ s.createElement(
          ee,
          {
            key: "visibility",
            onClick: o.toggleVisibility,
            title: `Hide addons [${Ye(t.togglePanel)}]`
          },
          /* @__PURE__ */ s.createElement(je, null)
        )) : /* @__PURE__ */ s.createElement(ee, { onClick: () => u(!1), title: "Close addon panel" }, /* @__PURE__ */ s.createElement(je, null))),
        id: "storybook-panel-root"
      },
      Object.entries(e).map(([c, d]) => (
        // @ts-expect-error (we know this is broken)
        /* @__PURE__ */ s.createElement(Ti, { key: c, id: c, title: typeof d.title == "function" ? /* @__PURE__ */ s.createElement(d.title, null) :
        d.title }, d.render)
=======
            footer: /* @__PURE__ */ s.createElement(Me, { href: "https://storybook.js.org/integrations", target: "_blank", withArrow: !0 }, /* @__PURE__ */ s.
            createElement($t, null), " Explore integrations catalog")
          }
        ),
        tools: /* @__PURE__ */ s.createElement(gm, null, l ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
          te,
          {
            key: "position",
            onClick: o.togglePosition,
            title: `Change addon orientation [${qe(
              t.panelPosition
            )}]`
          },
          n === "bottom" ? /* @__PURE__ */ s.createElement(Ro, null) : /* @__PURE__ */ s.createElement(Po, null)
        ), /* @__PURE__ */ s.createElement(
          te,
          {
            key: "visibility",
            onClick: o.toggleVisibility,
            title: `Hide addons [${qe(t.togglePanel)}]`
          },
          /* @__PURE__ */ s.createElement(Ge, null)
        )) : /* @__PURE__ */ s.createElement(te, { onClick: () => u(!1), title: "Close addon panel" }, /* @__PURE__ */ s.createElement(Ge, null))),
        id: "storybook-panel-root"
      },
      Object.entries(e).map(([c, p]) => (
        // @ts-expect-error (we know this is broken)
        /* @__PURE__ */ s.createElement(Rn, { key: c, id: c, title: typeof p.title == "function" ? /* @__PURE__ */ s.createElement(p.title, null) :
        p.title }, p.render)
>>>>>>> main
      ))
    );
  }
);
<<<<<<< HEAD
Ci.displayName = "AddonPanel";
var Gb = x.div({
=======
Fn.displayName = "AddonPanel";
var gm = x.div({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  gap: 6
});

// src/manager/container/Panel.tsx
<<<<<<< HEAD
var qb = /* @__PURE__ */ a((e) => {
  let t = oe(), o = Ne(), [i, r] = K(t.getCurrentStoryData());
  ya(
    {
      [Gl]: () => {
        r(t.getCurrentStoryData());
=======
var ym = /* @__PURE__ */ a((e) => {
  let t = oe(), o = Pe(), [i, n] = $(t.getCurrentStoryData());
  aa(
    {
      [Sl]: () => {
        n(t.getCurrentStoryData());
>>>>>>> main
      }
    },
    []
  );
<<<<<<< HEAD
  let { parameters: n, type: l } = i ?? {}, u = U(
    () => ({
      onSelect: /* @__PURE__ */ a((d) => t.setSelectedPanel(d), "onSelect"),
=======
  let { parameters: r, type: l } = i ?? {}, u = K(
    () => ({
      onSelect: /* @__PURE__ */ a((p) => t.setSelectedPanel(p), "onSelect"),
>>>>>>> main
      toggleVisibility: /* @__PURE__ */ a(() => t.togglePanel(), "toggleVisibility"),
      togglePosition: /* @__PURE__ */ a(() => t.togglePanelPosition(), "togglePosition")
    }),
    [t]
<<<<<<< HEAD
  ), c = U(() => {
    let d = t.getElements(Ce.PANEL);
    if (!d || l !== "story")
      return d;
    let p = {};
    return Object.entries(d).forEach(([m, h]) => {
      let { paramKey: b } = h;
      b && n && n[b] && n[b].disable || h.disabled === !0 || typeof h.disabled == "function" && h.disabled(n) || (p[m] = h);
    }), p;
  }, [t, l, n]);
  return /* @__PURE__ */ s.createElement(
    Ci,
=======
  ), c = K(() => {
    let p = t.getElements(Te.PANEL);
    if (!p || l !== "story")
      return p;
    let d = {};
    return Object.entries(p).forEach(([g, h]) => {
      let { paramKey: y } = h;
      y && r && r[y] && r[y].disable || h.disabled === !0 || typeof h.disabled == "function" && h.disabled(r) || (d[g] = h);
    }), d;
  }, [t, l, r]);
  return /* @__PURE__ */ s.createElement(
    Fn,
>>>>>>> main
    {
      panels: c,
      selectedPanel: t.getSelectedPanel(),
      panelPosition: o.layout.panelPosition,
      actions: u,
      shortcuts: t.getShortcutKeys(),
      ...e
    }
  );
<<<<<<< HEAD
}, "Panel"), ql = qb;

// src/manager/container/Preview.tsx
var No = Ve(Oi(), 1);

// src/manager/components/preview/Iframe.tsx
var Yb = x.iframe(({ theme: e }) => ({
=======
}, "Panel"), Il = ym;

// src/manager/container/Preview.tsx
var yo = ze(zn(), 1);

// src/manager/components/preview/Iframe.tsx
var bm = x.iframe(({ theme: e }) => ({
>>>>>>> main
  backgroundColor: e.background.preview,
  display: "block",
  boxSizing: "content-box",
  height: "100%",
  width: "100%",
  border: "0 none",
  transition: "background-position 0s, visibility 0s",
  backgroundPosition: "-1px -1px, -1px -1px, -1px -1px, -1px -1px",
  margin: "auto",
  boxShadow: "0 0 100px 100vw rgba(0,0,0,0.5)"
}));
<<<<<<< HEAD
function Ql(e) {
  let { active: t, id: o, title: i, src: r, allowFullScreen: n, scale: l, ...u } = e, c = s.useRef(null);
  return /* @__PURE__ */ s.createElement(Ca.IFrame, { scale: l, active: t, iFrameRef: c }, /* @__PURE__ */ s.createElement(
    Yb,
    {
      "data-is-storybook": t ? "true" : "false",
      onLoad: (d) => d.currentTarget.setAttribute("data-is-loaded", "true"),
      id: o,
      title: i,
      src: r,
      allow: "clipboard-write;",
      allowFullScreen: n,
=======
function _l(e) {
  let { active: t, id: o, title: i, src: n, allowFullScreen: r, scale: l, ...u } = e, c = s.useRef(null);
  return /* @__PURE__ */ s.createElement(Ga.IFrame, { scale: l, active: t, iFrameRef: c }, /* @__PURE__ */ s.createElement(
    bm,
    {
      "data-is-storybook": t ? "true" : "false",
      onLoad: (p) => p.currentTarget.setAttribute("data-is-loaded", "true"),
      id: o,
      title: i,
      src: n,
      allow: "clipboard-write;",
      allowFullScreen: r,
>>>>>>> main
      ref: c,
      ...u
    }
  ));
}
<<<<<<< HEAD
a(Ql, "IFrame");

// src/manager/components/preview/utils/stringifyQueryParams.tsx
var uu = Ve(lu(), 1);
var cu = /* @__PURE__ */ a((e) => {
  let t = (0, uu.stringify)(e);
=======
a(_l, "IFrame");

// src/manager/components/preview/utils/stringifyQueryParams.tsx
var Fl = ze(Rl(), 1);
var Hl = /* @__PURE__ */ a((e) => {
  let t = (0, Fl.stringify)(e);
>>>>>>> main
  return t === "" ? "" : `&${t}`;
}, "stringifyQueryParams");

// src/manager/components/preview/FramesRenderer.tsx
<<<<<<< HEAD
var Iv = /* @__PURE__ */ a((e, t) => e && t[e] ? `storybook-ref-${e}` : "storybook-preview-iframe", "getActive"), Sv = x(he)(({ theme: e }) => ({
=======
var Km = /* @__PURE__ */ a((e, t) => e && t[e] ? `storybook-ref-${e}` : "storybook-preview-iframe", "getActive"), $m = x(me)(({ theme: e }) => ({
>>>>>>> main
  display: "none",
  "@media (min-width: 600px)": {
    position: "absolute",
    display: "block",
    top: 10,
    right: 15,
    padding: "10px 15px",
    fontSize: e.typography.size.s1,
    transform: "translateY(-100px)",
    "&:focus": {
      transform: "translateY(0)",
      zIndex: 1
    }
  }
<<<<<<< HEAD
})), wv = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isFullscreen: e.getIsFullscreen(),
  isNavShown: e.getIsNavShown(),
  selectedStoryId: t.storyId
}), "whenSidebarIsVisible"), Ev = {
=======
})), Um = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isFullscreen: e.getIsFullscreen(),
  isNavShown: e.getIsNavShown(),
  selectedStoryId: t.storyId
}), "whenSidebarIsVisible"), Gm = {
>>>>>>> main
  '#root [data-is-storybook="false"]': {
    display: "none"
  },
  '#root [data-is-storybook="true"]': {
    display: "block"
  }
<<<<<<< HEAD
}, pu = /* @__PURE__ */ a(({
=======
}, Bl = /* @__PURE__ */ a(({
>>>>>>> main
  refs: e,
  scale: t,
  viewMode: o = "story",
  refId: i,
<<<<<<< HEAD
  queryParams: r = {},
  baseUrl: n,
  storyId: l = "*"
}) => {
  let u = e[i]?.version, c = cu({
    ...r,
    ...u && { version: u }
  }), d = Iv(i, e), { current: p } = q({}), m = Object.values(e).filter((h) => h.type === "auto-inject" || h.id === i, {});
  return p["storybook-preview-iframe"] || (p["storybook-preview-iframe"] = to(n, l, {
    ...r,
    ...u && { version: u },
    viewMode: o
  })), m.forEach((h) => {
    let b = `storybook-ref-${h.id}`, f = p[b]?.split("/iframe.html")[0];
    if (!f || h.url !== f) {
      let y = `${h.url}/iframe.html?id=${l}&viewMode=${o}&refId=${h.id}${c}`;
      p[b] = y;
    }
  }), /* @__PURE__ */ s.createElement(Ee, null, /* @__PURE__ */ s.createElement(eo, { styles: Ev }), /* @__PURE__ */ s.createElement(me, { filter: wv },
  ({ isFullscreen: h, isNavShown: b, selectedStoryId: f }) => h || !b || !f ? null : /* @__PURE__ */ s.createElement(Sv, { asChild: !0 }, /* @__PURE__ */ s.
  createElement("a", { href: `#${f}`, tabIndex: 0, title: "Skip to sidebar" }, "Skip to sidebar"))), Object.entries(p).map(([h, b]) => /* @__PURE__ */ s.
  createElement(Ee, { key: h }, /* @__PURE__ */ s.createElement(
    Ql,
    {
      active: h === d,
      key: h,
      id: h,
      title: h,
      src: b,
=======
  queryParams: n = {},
  baseUrl: r,
  storyId: l = "*"
}) => {
  let u = e[i]?.version, c = Hl({
    ...n,
    ...u && { version: u }
  }), p = Km(i, e), { current: d } = Y({}), g = Object.values(e).filter((h) => h.type === "auto-inject" || h.id === i, {});
  return d["storybook-preview-iframe"] || (d["storybook-preview-iframe"] = Qt(r, l, {
    ...n,
    ...u && { version: u },
    viewMode: o
  })), g.forEach((h) => {
    let y = `storybook-ref-${h.id}`, f = d[y]?.split("/iframe.html")[0];
    if (!f || h.url !== f) {
      let b = `${h.url}/iframe.html?id=${l}&viewMode=${o}&refId=${h.id}${c}`;
      d[y] = b;
    }
  }), /* @__PURE__ */ s.createElement(_e, null, /* @__PURE__ */ s.createElement(Ut, { styles: Gm }), /* @__PURE__ */ s.createElement(he, { filter: Um },
  ({ isFullscreen: h, isNavShown: y, selectedStoryId: f }) => h || !y || !f ? null : /* @__PURE__ */ s.createElement($m, { asChild: !0 }, /* @__PURE__ */ s.
  createElement("a", { href: `#${f}`, tabIndex: 0, title: "Skip to sidebar" }, "Skip to sidebar"))), Object.entries(d).map(([h, y]) => /* @__PURE__ */ s.
  createElement(_e, { key: h }, /* @__PURE__ */ s.createElement(
    _l,
    {
      active: h === p,
      key: h,
      id: h,
      title: h,
      src: y,
>>>>>>> main
      allowFullScreen: !0,
      scale: t
    }
  ))));
}, "FramesRenderer");

// src/manager/components/preview/tools/addons.tsx
<<<<<<< HEAD
var Tv = /* @__PURE__ */ a(({ api: e, state: t }) => ({
=======
var Ym = /* @__PURE__ */ a(({ api: e, state: t }) => ({
>>>>>>> main
  isVisible: e.getIsPanelShown(),
  singleStory: t.singleStory,
  panelPosition: t.layout.panelPosition,
  toggle: /* @__PURE__ */ a(() => e.togglePanel(), "toggle")
<<<<<<< HEAD
}), "menuMapper"), du = {
  title: "addons",
  id: "addons",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Tv }, ({ isVisible: e, toggle: t, singleStory: o, panelPosition: i }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { "aria-label": "Show addons", key: "addons", onClick: t,
  title: "Show addons" }, i === "bottom" ? /* @__PURE__ */ s.createElement(yo, null) : /* @__PURE__ */ s.createElement(wo, null)))), "render")
};

// src/manager/components/preview/tools/copy.tsx
var bu = Ve(yu(), 1);
var { PREVIEW_URL: Pv, document: Av } = se, Dv = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, { location: r } = Av, n = i[o], l = `${r.origin}${r.pathname}`;
  return l.endsWith("/") || (l += "/"), {
    refId: o,
    baseUrl: n ? `${n.url}/iframe.html` : Pv || `${l}iframe.html`,
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "copyMapper"), vu = {
  title: "copy",
  id: "copy",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Dv }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(
    ee,
    {
      key: "copy",
      onClick: () => (0, bu.default)(to(e, t, o)),
      title: "Copy canvas link"
    },
    /* @__PURE__ */ s.createElement(Bn, null)
=======
}), "menuMapper"), zl = {
  title: "addons",
  id: "addons",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: Ym }, ({ isVisible: e, toggle: t, singleStory: o, panelPosition: i }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(te, { "aria-label": "Show addons", key: "addons", onClick: t,
  title: "Show addons" }, i === "bottom" ? /* @__PURE__ */ s.createElement(Po, null) : /* @__PURE__ */ s.createElement(Ro, null)))), "render")
};

// src/manager/components/preview/tools/copy.tsx
var Ul = ze($l(), 1);
var { PREVIEW_URL: Jm, document: eh } = se, th = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, { location: n } = eh, r = i[o], l = `${n.origin}${n.pathname}`;
  return l.endsWith("/") || (l += "/"), {
    refId: o,
    baseUrl: r ? `${r.url}/iframe.html` : Jm || `${l}iframe.html`,
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "copyMapper"), Gl = {
  title: "copy",
  id: "copy",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: th }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(
    te,
    {
      key: "copy",
      onClick: () => (0, Ul.default)(Qt(e, t, o)),
      title: "Copy canvas link"
    },
    /* @__PURE__ */ s.createElement(Ps, null)
>>>>>>> main
  ) : null), "render")
};

// src/manager/components/preview/tools/eject.tsx
<<<<<<< HEAD
var { PREVIEW_URL: Mv } = se, Lv = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, r = i[o];
  return {
    refId: o,
    baseUrl: r ? `${r.url}/iframe.html` : Mv || "iframe.html",
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "ejectMapper"), xu = {
  title: "eject",
  id: "eject",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Lv }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(ee, { key: "opener", asChild: !0 }, /* @__PURE__ */ s.createElement(
    "a",
    {
      href: to(e, t, o),
=======
var { PREVIEW_URL: oh } = se, rh = /* @__PURE__ */ a(({ state: e }) => {
  let { storyId: t, refId: o, refs: i } = e, n = i[o];
  return {
    refId: o,
    baseUrl: n ? `${n.url}/iframe.html` : oh || "iframe.html",
    storyId: t,
    queryParams: e.customQueryParams
  };
}, "ejectMapper"), Yl = {
  title: "eject",
  id: "eject",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: rh }, ({ baseUrl: e, storyId: t, queryParams: o }) => t ? /* @__PURE__ */ s.
  createElement(te, { key: "opener", asChild: !0 }, /* @__PURE__ */ s.createElement(
    "a",
    {
      href: Qt(e, t, o),
>>>>>>> main
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Open canvas in new tab"
    },
<<<<<<< HEAD
    /* @__PURE__ */ s.createElement(tt, null)
=======
    /* @__PURE__ */ s.createElement(at, null)
>>>>>>> main
  )) : null), "render")
};

// src/manager/components/preview/tools/remount.tsx
<<<<<<< HEAD
var Nv = x(ee)(({ theme: e, animating: t, disabled: o }) => ({
=======
var nh = x(te)(({ theme: e, animating: t, disabled: o }) => ({
>>>>>>> main
  opacity: o ? 0.5 : 1,
  svg: {
    animation: t ? `${e.animation.rotate360} 1000ms ease-out` : void 0
  }
<<<<<<< HEAD
})), Fv = /* @__PURE__ */ a(({ api: e, state: t }) => {
  let { storyId: o } = t;
  return {
    storyId: o,
    remount: /* @__PURE__ */ a(() => e.emit(xn, { storyId: t.storyId }), "remount"),
    api: e
  };
}, "menuMapper"), Iu = {
  title: "remount",
  id: "remount",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: Fv }, ({ remount: e, storyId: t, api: o }) => {
    let [i, r] = K(!1), n = /* @__PURE__ */ a(() => {
      t && e();
    }, "remountComponent");
    return o.on(xn, () => {
      r(!0);
    }), /* @__PURE__ */ s.createElement(
      Nv,
      {
        key: "remount",
        title: "Remount component",
        onClick: n,
        onAnimationEnd: () => r(!1),
        animating: i,
        disabled: !t
      },
      /* @__PURE__ */ s.createElement(ut, null)
=======
})), ih = /* @__PURE__ */ a(({ api: e, state: t }) => {
  let { storyId: o } = t;
  return {
    storyId: o,
    remount: /* @__PURE__ */ a(() => e.emit(sn, { storyId: t.storyId }), "remount"),
    api: e
  };
}, "menuMapper"), ql = {
  title: "remount",
  id: "remount",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: ih }, ({ remount: e, storyId: t, api: o }) => {
    let [i, n] = $(!1), r = /* @__PURE__ */ a(() => {
      t && e();
    }, "remountComponent");
    return o.on(sn, () => {
      n(!0);
    }), /* @__PURE__ */ s.createElement(
      nh,
      {
        key: "remount",
        title: "Remount component",
        onClick: r,
        onAnimationEnd: () => n(!1),
        animating: i,
        disabled: !t
      },
      /* @__PURE__ */ s.createElement(mt, null)
>>>>>>> main
    );
  }), "render")
};

// src/manager/components/preview/tools/zoom.tsx
<<<<<<< HEAD
var Lo = 1, Su = Qt({ value: Lo, set: /* @__PURE__ */ a((e) => {
}, "set") }), Ri = class Ri extends Le {
  constructor() {
    super(...arguments);
    this.state = {
      value: Lo
=======
var go = 1, Ql = jt({ value: go, set: /* @__PURE__ */ a((e) => {
}, "set") }), Yn = class Yn extends Re {
  constructor() {
    super(...arguments);
    this.state = {
      value: go
>>>>>>> main
    };
    this.set = /* @__PURE__ */ a((o) => this.setState({ value: o }), "set");
  }
  render() {
<<<<<<< HEAD
    let { children: o, shouldScale: i } = this.props, { set: r } = this, { value: n } = this.state;
    return /* @__PURE__ */ s.createElement(Su.Provider, { value: { value: i ? n : Lo, set: r } }, o);
  }
};
a(Ri, "ZoomProvider");
var Or = Ri, { Consumer: Fi } = Su, Rv = Tt(/* @__PURE__ */ a(function({ zoomIn: t, zoomOut: o, reset: i }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { key: "zoomin", onClick: t, title: "Zoom in" },
  /* @__PURE__ */ s.createElement(Qn, null)), /* @__PURE__ */ s.createElement(ee, { key: "zoomout", onClick: o, title: "Zoom out" }, /* @__PURE__ */ s.
  createElement(Xn, null)), /* @__PURE__ */ s.createElement(ee, { key: "zoomreset", onClick: i, title: "Reset zoom" }, /* @__PURE__ */ s.createElement(
  Zn, null)));
}, "Zoom"));
var Bv = Tt(/* @__PURE__ */ a(function({
=======
    let { children: o, shouldScale: i } = this.props, { set: n } = this, { value: r } = this.state;
    return /* @__PURE__ */ s.createElement(Ql.Provider, { value: { value: i ? r : go, set: n } }, o);
  }
};
a(Yn, "ZoomProvider");
var fr = Yn, { Consumer: Gn } = Ql, sh = no(/* @__PURE__ */ a(function({ zoomIn: t, zoomOut: o, reset: i }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(te, { key: "zoomin", onClick: t, title: "Zoom in" },
  /* @__PURE__ */ s.createElement(Vs, null)), /* @__PURE__ */ s.createElement(te, { key: "zoomout", onClick: o, title: "Zoom out" }, /* @__PURE__ */ s.
  createElement(Ks, null)), /* @__PURE__ */ s.createElement(te, { key: "zoomreset", onClick: i, title: "Reset zoom" }, /* @__PURE__ */ s.createElement(
  $s, null)));
}, "Zoom"));
var ah = no(/* @__PURE__ */ a(function({
>>>>>>> main
  set: t,
  value: o
}) {
  let i = A(
    (l) => {
      l.preventDefault(), t(0.8 * o);
    },
    [t, o]
<<<<<<< HEAD
  ), r = A(
=======
  ), n = A(
>>>>>>> main
    (l) => {
      l.preventDefault(), t(1.25 * o);
    },
    [t, o]
<<<<<<< HEAD
  ), n = A(
    (l) => {
      l.preventDefault(), t(Lo);
    },
    [t, Lo]
  );
  return /* @__PURE__ */ s.createElement(Rv, { key: "zoom", zoomIn: i, zoomOut: r, reset: n });
}, "ZoomWrapper"));
function Hv() {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Fi, null, ({ set: e, value: t }) => /* @__PURE__ */ s.
  createElement(Bv, { set: e, value: t })), /* @__PURE__ */ s.createElement(ht, null));
}
a(Hv, "ZoomToolRenderer");
var wu = {
  title: "zoom",
  id: "zoom",
  type: be.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: Hv
};

// src/manager/components/preview/Toolbar.tsx
var zv = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  toggle: e.toggleFullscreen,
  isFullscreen: e.getIsFullscreen(),
  shortcut: Ye(e.getShortcutKeys().fullScreen),
  hasPanel: Object.keys(e.getElements(Ce.PANEL)).length > 0,
  singleStory: t.singleStory
}), "fullScreenMapper"), Tu = {
  title: "fullscreen",
  id: "fullscreen",
  type: be.TOOL,
=======
  ), r = A(
    (l) => {
      l.preventDefault(), t(go);
    },
    [t, go]
  );
  return /* @__PURE__ */ s.createElement(sh, { key: "zoom", zoomIn: i, zoomOut: n, reset: r });
}, "ZoomWrapper"));
function lh() {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Gn, null, ({ set: e, value: t }) => /* @__PURE__ */ s.
  createElement(ah, { set: e, value: t })), /* @__PURE__ */ s.createElement(qt, null));
}
a(lh, "ZoomToolRenderer");
var Xl = {
  title: "zoom",
  id: "zoom",
  type: ve.TOOL,
  match: /* @__PURE__ */ a(({ viewMode: e, tabId: t }) => e === "story" && !t, "match"),
  render: lh
};

// src/manager/components/preview/Toolbar.tsx
var uh = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  toggle: e.toggleFullscreen,
  isFullscreen: e.getIsFullscreen(),
  shortcut: qe(e.getShortcutKeys().fullScreen),
  hasPanel: Object.keys(e.getElements(Te.PANEL)).length > 0,
  singleStory: t.singleStory
}), "fullScreenMapper"), Jl = {
  title: "fullscreen",
  id: "fullscreen",
  type: ve.TOOL,
>>>>>>> main
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a((e) => ["story", "docs"].includes(e.viewMode), "match"),
  render: /* @__PURE__ */ a(() => {
    let { isMobile: e } = ge();
<<<<<<< HEAD
    return e ? null : /* @__PURE__ */ s.createElement(me, { filter: zv }, ({ toggle: t, isFullscreen: o, shortcut: i, hasPanel: r, singleStory: n }) => (!n ||
    n && r) && /* @__PURE__ */ s.createElement(
      ee,
=======
    return e ? null : /* @__PURE__ */ s.createElement(he, { filter: uh }, ({ toggle: t, isFullscreen: o, shortcut: i, hasPanel: n, singleStory: r }) => (!r ||
    r && n) && /* @__PURE__ */ s.createElement(
      te,
>>>>>>> main
      {
        key: "full",
        onClick: t,
        title: `${o ? "Exit full screen" : "Go full screen"} [${i}]`,
        "aria-label": o ? "Exit full screen" : "Go full screen"
      },
<<<<<<< HEAD
      o ? /* @__PURE__ */ s.createElement(je, null) : /* @__PURE__ */ s.createElement(Pn, null)
    ));
  }, "render")
};
var Cu = s.memo(/* @__PURE__ */ a(function({
  isShown: t,
  tools: o,
  toolsExtra: i,
  tabs: r,
  tabId: n,
  api: l
}) {
  return r || o || i ? /* @__PURE__ */ s.createElement(Vv, { className: "sb-bar", key: "toolbar", shown: t, "data-test-id": "sb-preview-tool\
bar" }, /* @__PURE__ */ s.createElement(jv, null, /* @__PURE__ */ s.createElement(_u, null, r.length > 1 ? /* @__PURE__ */ s.createElement(Ee,
  null, /* @__PURE__ */ s.createElement(sr, { key: "tabs" }, r.map((u, c) => /* @__PURE__ */ s.createElement(
    ar,
    {
      disabled: !!u.disabled,
      active: u.id === n || u.id === "canvas" && !n,
=======
      o ? /* @__PURE__ */ s.createElement(Ge, null) : /* @__PURE__ */ s.createElement(Is, null)
    ));
  }, "render")
};
var eu = s.memo(/* @__PURE__ */ a(function({
  isShown: t,
  tools: o,
  toolsExtra: i,
  tabs: n,
  tabId: r,
  api: l
}) {
  return n || o || i ? /* @__PURE__ */ s.createElement(ph, { className: "sb-bar", key: "toolbar", shown: t, "data-test-id": "sb-preview-tool\
bar" }, /* @__PURE__ */ s.createElement(dh, null, /* @__PURE__ */ s.createElement(tu, null, n.length > 1 ? /* @__PURE__ */ s.createElement(_e,
  null, /* @__PURE__ */ s.createElement(Zo, { key: "tabs" }, n.map((u, c) => /* @__PURE__ */ s.createElement(
    Jo,
    {
      disabled: !!u.disabled,
      active: u.id === r || u.id === "canvas" && !r,
>>>>>>> main
      onClick: () => {
        l.applyQueryParams({ tab: u.id === "canvas" ? void 0 : u.id });
      },
      key: u.id || `tab-${c}`
    },
    u.title
<<<<<<< HEAD
  ))), /* @__PURE__ */ s.createElement(ht, null)) : null, /* @__PURE__ */ s.createElement(Eu, { key: "left", list: o })), /* @__PURE__ */ s.
  createElement(Kv, null, /* @__PURE__ */ s.createElement(Eu, { key: "right", list: i })))) : null;
}, "ToolbarComp")), Eu = s.memo(/* @__PURE__ */ a(function({ list: t }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, t.filter(Boolean).map(({ render: o, id: i, ...r }, n) => (
    // @ts-expect-error (Converted from ts-ignore)
    /* @__PURE__ */ s.createElement(o, { key: i || r.key || `f-${n}` })
  )));
}, "Tools"));
function Wv(e, t) {
  let o = t?.type === "story" && t?.prepared ? t?.parameters : {}, i = "toolbar" in o ? o.toolbar : void 0, { toolbar: r } = He.getConfig(),
  n = Jo(
    r || {},
    i || {}
  );
  return n ? !!n[e?.id]?.hidden : !1;
}
a(Wv, "toolbarItemHasBeenExcluded");
function Bi(e, t, o, i, r, n) {
=======
  ))), /* @__PURE__ */ s.createElement(qt, null)) : null, /* @__PURE__ */ s.createElement(Zl, { key: "left", list: o })), /* @__PURE__ */ s.
  createElement(fh, null, /* @__PURE__ */ s.createElement(Zl, { key: "right", list: i })))) : null;
}, "ToolbarComp")), Zl = s.memo(/* @__PURE__ */ a(function({ list: t }) {
  return /* @__PURE__ */ s.createElement(s.Fragment, null, t.filter(Boolean).map(({ render: o, id: i, ...n }, r) => (
    // @ts-expect-error (Converted from ts-ignore)
    /* @__PURE__ */ s.createElement(o, { key: i || n.key || `f-${r}` })
  )));
}, "Tools"));
function ch(e, t) {
  let o = t?.type === "story" && t?.prepared ? t?.parameters : {}, i = "toolbar" in o ? o.toolbar : void 0, { toolbar: n } = Ye.getConfig(),
  r = Bo(
    n || {},
    i || {}
  );
  return r ? !!r[e?.id]?.hidden : !1;
}
a(ch, "toolbarItemHasBeenExcluded");
function qn(e, t, o, i, n, r) {
>>>>>>> main
  let l = /* @__PURE__ */ a((u) => u && (!u.match || u.match({
    storyId: t?.id,
    refId: t?.refId,
    viewMode: o,
    location: i,
<<<<<<< HEAD
    path: r,
    tabId: n
  })) && !Wv(u, t), "filter");
  return e.filter(l);
}
a(Bi, "filterToolsSide");
var Vv = x.div(({ theme: e, shown: t }) => ({
=======
    path: n,
    tabId: r
  })) && !ch(u, t), "filter");
  return e.filter(l);
}
a(qn, "filterToolsSide");
var ph = x.div(({ theme: e, shown: t }) => ({
>>>>>>> main
  position: "relative",
  color: e.barTextColor,
  width: "100%",
  height: 40,
  flexShrink: 0,
  overflowX: "auto",
  overflowY: "hidden",
  marginTop: t ? 0 : -40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  zIndex: 4
<<<<<<< HEAD
})), jv = x.div({
=======
})), dh = x.div({
>>>>>>> main
  position: "absolute",
  width: "calc(100% - 20px)",
  display: "flex",
  justifyContent: "space-between",
  flexWrap: "nowrap",
  flexShrink: 0,
  height: 40,
  marginLeft: 10,
  marginRight: 10
<<<<<<< HEAD
}), _u = x.div({
=======
}), tu = x.div({
>>>>>>> main
  display: "flex",
  whiteSpace: "nowrap",
  flexBasis: "auto",
  gap: 6,
  alignItems: "center"
<<<<<<< HEAD
}), Kv = x(_u)({
=======
}), fh = x(tu)({
>>>>>>> main
  marginLeft: 30
});

// src/manager/components/preview/utils/components.ts
<<<<<<< HEAD
var ku = x.main({
=======
var ou = x.main({
>>>>>>> main
  display: "flex",
  flexDirection: "column",
  width: "100%",
  height: "100%",
  overflow: "hidden"
<<<<<<< HEAD
}), Ou = x.div({
=======
}), ru = x.div({
>>>>>>> main
  overflow: "auto",
  width: "100%",
  zIndex: 3,
  background: "transparent",
  flex: 1
<<<<<<< HEAD
}), Pu = x.div(
=======
}), nu = x.div(
>>>>>>> main
  {
    alignContent: "center",
    alignItems: "center",
    justifyContent: "center",
    justifyItems: "center",
    overflow: "auto",
    gridTemplateColumns: "100%",
    gridTemplateRows: "100%",
    position: "relative",
    width: "100%",
    height: "100%"
  },
  ({ show: e }) => ({ display: e ? "grid" : "none" })
<<<<<<< HEAD
), _D = x(cr)({
  color: "inherit",
  textDecoration: "inherit",
  display: "inline-block"
}), kD = x.span({
=======
), pA = x(zo)({
  color: "inherit",
  textDecoration: "inherit",
  display: "inline-block"
}), dA = x.span({
>>>>>>> main
  // Hides full screen icon at mobile breakpoint defined in app.js
  "@media (max-width: 599px)": {
    display: "none"
  }
<<<<<<< HEAD
}), Pr = x.div(({ theme: e }) => ({
=======
}), mr = x.div(({ theme: e }) => ({
>>>>>>> main
  alignContent: "center",
  alignItems: "center",
  justifyContent: "center",
  justifyItems: "center",
  overflow: "auto",
  display: "grid",
  gridTemplateColumns: "100%",
  gridTemplateRows: "100%",
  position: "relative",
  width: "100%",
  height: "100%"
<<<<<<< HEAD
})), Au = x.div(({ theme: e }) => ({
=======
})), iu = x.div(({ theme: e }) => ({
>>>>>>> main
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  right: 0,
  background: e.background.preview,
  zIndex: 1
}));

// src/manager/components/preview/Wrappers.tsx
<<<<<<< HEAD
var Du = /* @__PURE__ */ a(({
=======
var su = /* @__PURE__ */ a(({
>>>>>>> main
  wrappers: e,
  id: t,
  storyId: o,
  children: i
<<<<<<< HEAD
}) => /* @__PURE__ */ s.createElement(Ee, null, e.reduceRight(
  (r, n, l) => /* @__PURE__ */ s.createElement(n.render, { index: l, children: r, id: t, storyId: o }),
  i
)), "ApplyWrappers"), Mu = [
  {
    id: "iframe-wrapper",
    type: Ce.PREVIEW,
    render: /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(Pr, { id: "storybook-preview-wrapper" }, e.children), "render")
=======
}) => /* @__PURE__ */ s.createElement(_e, null, e.reduceRight(
  (n, r, l) => /* @__PURE__ */ s.createElement(r.render, { index: l, children: n, id: t, storyId: o }),
  i
)), "ApplyWrappers"), au = [
  {
    id: "iframe-wrapper",
    type: Te.PREVIEW,
    render: /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(mr, { id: "storybook-preview-wrapper" }, e.children), "render")
>>>>>>> main
  }
];

// src/manager/components/preview/Preview.tsx
<<<<<<< HEAD
var Uv = /* @__PURE__ */ a(({ state: e, api: t }) => ({
=======
var hh = /* @__PURE__ */ a(({ state: e, api: t }) => ({
>>>>>>> main
  storyId: e.storyId,
  refId: e.refId,
  viewMode: e.viewMode,
  customCanvas: t.renderPreview,
  queryParams: e.customQueryParams,
  getElements: t.getElements,
  entry: t.getData(e.storyId, e.refId),
  previewInitialized: e.previewInitialized,
  refs: e.refs
<<<<<<< HEAD
}), "canvasMapper"), Lu = /* @__PURE__ */ a(() => ({
  id: "canvas",
  type: be.TAB,
=======
}), "canvasMapper"), lu = /* @__PURE__ */ a(() => ({
  id: "canvas",
  type: ve.TAB,
>>>>>>> main
  title: "Canvas",
  route: /* @__PURE__ */ a(({ storyId: e, refId: t }) => t ? `/story/${t}_${e}` : `/story/${e}`, "route"),
  match: /* @__PURE__ */ a(({ viewMode: e }) => !!(e && e.match(/^(story|docs)$/)), "match"),
  render: /* @__PURE__ */ a(() => null, "render")
<<<<<<< HEAD
}), "createCanvasTab"), Nu = s.memo(/* @__PURE__ */ a(function(t) {
  let {
    api: o,
    id: i,
    options: r,
    viewMode: n,
    storyId: l,
    entry: u = void 0,
    description: c,
    baseUrl: d,
    withLoader: p = !0,
    tools: m,
    toolsExtra: h,
    tabs: b,
    wrappers: f,
    tabId: y
  } = t, S = b.find((w) => w.id === y)?.render, E = n === "story", { showToolbar: g } = r, v = o.getShowToolbarWithCustomisations(g), I = q(
  l);
  return V(() => {
    if (u && n) {
      if (l === I.current)
        return;
      if (I.current = l, n.match(/docs|story/)) {
        let { refId: w, id: O } = u;
        o.emit(fa, {
          storyId: O,
          viewMode: n,
          options: { target: w }
        });
      }
    }
  }, [u, n, l, o]), /* @__PURE__ */ s.createElement(Ee, null, i === "main" && /* @__PURE__ */ s.createElement(ko, { key: "description" }, /* @__PURE__ */ s.
  createElement("title", null, c)), /* @__PURE__ */ s.createElement(Or, { shouldScale: E }, /* @__PURE__ */ s.createElement(ku, null, /* @__PURE__ */ s.
  createElement(
    Cu,
    {
      key: "tools",
      isShown: v,
      tabId: y,
      tabs: b,
      tools: m,
      toolsExtra: h,
      api: o
    }
  ), /* @__PURE__ */ s.createElement(Ou, { key: "frame" }, S && /* @__PURE__ */ s.createElement(Pr, null, S({ active: !0 })), /* @__PURE__ */ s.
  createElement(Pu, { show: !y }, /* @__PURE__ */ s.createElement(Gv, { withLoader: p, baseUrl: d, wrappers: f }))))));
}, "Preview"));
var Gv = /* @__PURE__ */ a(({ baseUrl: e, withLoader: t, wrappers: o }) => /* @__PURE__ */ s.createElement(me, { filter: Uv }, ({
  entry: i,
  refs: r,
  customCanvas: n,
  storyId: l,
  refId: u,
  viewMode: c,
  queryParams: d,
  previewInitialized: p
}) => {
  let m = "canvas", [h, b] = K(void 0);
  V(() => {
    if (se.CONFIG_TYPE === "DEVELOPMENT")
      try {
        He.getChannel().on(ca, (v) => {
          b(v);
=======
}), "createCanvasTab"), uu = s.memo(/* @__PURE__ */ a(function(t) {
  let {
    api: o,
    id: i,
    options: n,
    viewMode: r,
    storyId: l,
    entry: u = void 0,
    description: c,
    baseUrl: p,
    withLoader: d = !0,
    tools: g,
    toolsExtra: h,
    tabs: y,
    wrappers: f,
    tabId: b
  } = t, I = y.find((S) => S.id === b)?.render, _ = r === "story", { showToolbar: m } = n, v = Y(l);
  return j(() => {
    if (u && r) {
      if (l === v.current)
        return;
      if (v.current = l, r.match(/docs|story/)) {
        let { refId: S, id: E } = u;
        o.emit(ra, {
          storyId: E,
          viewMode: r,
          options: { target: S }
        });
      }
    }
  }, [u, r, l, o]), /* @__PURE__ */ s.createElement(_e, null, i === "main" && /* @__PURE__ */ s.createElement(uo, { key: "description" }, /* @__PURE__ */ s.
  createElement("title", null, c)), /* @__PURE__ */ s.createElement(fr, { shouldScale: _ }, /* @__PURE__ */ s.createElement(ou, null, /* @__PURE__ */ s.
  createElement(
    eu,
    {
      key: "tools",
      isShown: m,
      tabId: b,
      tabs: y,
      tools: g,
      toolsExtra: h,
      api: o
    }
  ), /* @__PURE__ */ s.createElement(ru, { key: "frame" }, I && /* @__PURE__ */ s.createElement(mr, null, I({ active: !0 })), /* @__PURE__ */ s.
  createElement(nu, { show: !b }, /* @__PURE__ */ s.createElement(gh, { withLoader: d, baseUrl: p, wrappers: f }))))));
}, "Preview"));
var gh = /* @__PURE__ */ a(({ baseUrl: e, withLoader: t, wrappers: o }) => /* @__PURE__ */ s.createElement(he, { filter: hh }, ({
  entry: i,
  refs: n,
  customCanvas: r,
  storyId: l,
  refId: u,
  viewMode: c,
  queryParams: p,
  previewInitialized: d
}) => {
  let g = "canvas", [h, y] = $(void 0);
  j(() => {
    if (se.CONFIG_TYPE === "DEVELOPMENT")
      try {
        Ye.getChannel().on(ea, (v) => {
          y(v);
>>>>>>> main
        });
      } catch {
      }
  }, []);
<<<<<<< HEAD
  let f = !!r[u] && !r[u].previewInitialized, y = !(h?.value === 1 || h === void 0), S = !u && (!p || y), E = i && f || S;
  return /* @__PURE__ */ s.createElement(Fi, null, ({ value: g }) => /* @__PURE__ */ s.createElement(s.Fragment, null, t && E && /* @__PURE__ */ s.
  createElement(Au, null, /* @__PURE__ */ s.createElement(rr, { id: "preview-loader", role: "progressbar", progress: h })), /* @__PURE__ */ s.
  createElement(Du, { id: m, storyId: l, viewMode: c, wrappers: o }, n ? n(l, c, m, e, g, d) : /* @__PURE__ */ s.createElement(
    pu,
    {
      baseUrl: e,
      refs: r,
      scale: g,
      entry: i,
      viewMode: c,
      refId: u,
      queryParams: d,
=======
  let f = !!n[u] && !n[u].previewInitialized, b = !(h?.value === 1 || h === void 0), I = !u && (!d || b), _ = i && f || I;
  return /* @__PURE__ */ s.createElement(Gn, null, ({ value: m }) => /* @__PURE__ */ s.createElement(s.Fragment, null, t && _ && /* @__PURE__ */ s.
  createElement(iu, null, /* @__PURE__ */ s.createElement(qo, { id: "preview-loader", role: "progressbar", progress: h })), /* @__PURE__ */ s.
  createElement(su, { id: g, storyId: l, viewMode: c, wrappers: o }, r ? r(l, c, g, e, m, p) : /* @__PURE__ */ s.createElement(
    Bl,
    {
      baseUrl: e,
      refs: n,
      scale: m,
      entry: i,
      viewMode: c,
      refId: u,
      queryParams: p,
>>>>>>> main
      storyId: l
    }
  ))));
}), "Canvas");
<<<<<<< HEAD
function Fu(e, t) {
  let { previewTabs: o } = He.getConfig(), i = t ? t.previewTabs : void 0;
  if (o || i) {
    let r = Jo(o || {}, i || {}), n = Object.keys(r).map((l, u) => ({
      index: u,
      ...typeof r[l] == "string" ? { title: r[l] } : r[l],
      id: l
    }));
    return e.filter((l) => {
      let u = n.find((c) => c.id === l.id);
      return u === void 0 || u.id === "canvas" || !u.hidden;
    }).map((l, u) => ({ ...l, index: u })).sort((l, u) => {
      let c = n.find((h) => h.id === l.id), d = c ? c.index : n.length + l.index, p = n.find((h) => h.id === u.id), m = p ? p.index : n.length +
      u.index;
      return d - m;
    }).map((l) => {
      let u = n.find((c) => c.id === l.id);
=======
function cu(e, t) {
  let { previewTabs: o } = Ye.getConfig(), i = t ? t.previewTabs : void 0;
  if (o || i) {
    let n = Bo(o || {}, i || {}), r = Object.keys(n).map((l, u) => ({
      index: u,
      ...typeof n[l] == "string" ? { title: n[l] } : n[l],
      id: l
    }));
    return e.filter((l) => {
      let u = r.find((c) => c.id === l.id);
      return u === void 0 || u.id === "canvas" || !u.hidden;
    }).map((l, u) => ({ ...l, index: u })).sort((l, u) => {
      let c = r.find((h) => h.id === l.id), p = c ? c.index : r.length + l.index, d = r.find((h) => h.id === u.id), g = d ? d.index : r.length +
      u.index;
      return p - g;
    }).map((l) => {
      let u = r.find((c) => c.id === l.id);
>>>>>>> main
      return u ? {
        ...l,
        title: u.title || l.title,
        disabled: u.disabled,
        hidden: u.hidden
      } : l;
    });
  }
  return e;
}
<<<<<<< HEAD
a(Fu, "filterTabs");

// src/manager/components/preview/tools/menu.tsx
var qv = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsNavShown(),
  singleStory: t.singleStory,
  toggle: /* @__PURE__ */ a(() => e.toggleNav(), "toggle")
}), "menuMapper"), Ru = {
  title: "menu",
  id: "menu",
  type: be.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a(({ viewMode: e }) => ["story", "docs"].includes(e), "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, { filter: qv }, ({ isVisible: e, toggle: t, singleStory: o }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ee, { "aria-label": "Show sidebar", key: "menu", onClick: t,
  title: "Show sidebar" }, /* @__PURE__ */ s.createElement(Io, null)), /* @__PURE__ */ s.createElement(ht, null))), "render")
};

// src/manager/container/Preview.tsx
var Yv = [Lu()], Qv = [Ru, Iu, wu], Xv = [du, Tu, xu, vu], Zv = [], Jv = (0, No.default)(1)(
  (e, t, o, i) => i ? Fu([...Yv, ...Object.values(t)], o) : Zv
), e0 = (0, No.default)(1)(
  (e, t, o) => Bi([...Qv, ...Object.values(t)], ...o)
), t0 = (0, No.default)(1)(
  (e, t, o) => Bi([...Xv, ...Object.values(t)], ...o)
), o0 = (0, No.default)(1)((e, t) => [
  ...Mu,
  ...Object.values(t)
]), { PREVIEW_URL: r0 } = se, n0 = /* @__PURE__ */ a((e) => e.split("/").join(" / ").replace(/\s\s/, " "), "splitTitleAddExtraSpace"), i0 = /* @__PURE__ */ a(
(e) => {
  if (e?.type === "story" || e?.type === "docs") {
    let { title: t, name: o } = e;
    return t && o ? n0(`${t} - ${o} \u22C5 Storybook`) : "Storybook";
  }
  return e?.name ? `${e.name} \u22C5 Storybook` : "Storybook";
}, "getDescription"), s0 = /* @__PURE__ */ a(({
=======
a(cu, "filterTabs");

// src/manager/components/preview/tools/menu.tsx
var yh = /* @__PURE__ */ a(({ api: e, state: t }) => ({
  isVisible: e.getIsNavShown(),
  singleStory: t.singleStory,
  toggle: /* @__PURE__ */ a(() => e.toggleNav(), "toggle")
}), "menuMapper"), pu = {
  title: "menu",
  id: "menu",
  type: ve.TOOL,
  // @ts-expect-error (non strict)
  match: /* @__PURE__ */ a(({ viewMode: e }) => ["story", "docs"].includes(e), "match"),
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, { filter: yh }, ({ isVisible: e, toggle: t, singleStory: o }) => !o &&
  !e && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(te, { "aria-label": "Show sidebar", key: "menu", onClick: t,
  title: "Show sidebar" }, /* @__PURE__ */ s.createElement(Lo, null)), /* @__PURE__ */ s.createElement(qt, null))), "render")
};

// src/manager/container/Preview.tsx
var bh = [lu()], vh = [pu, ql, Xl], xh = [zl, Jl, Yl, Gl], Sh = [], Ih = (0, yo.default)(1)(
  (e, t, o, i) => i ? cu([...bh, ...Object.values(t)], o) : Sh
), Eh = (0, yo.default)(1)(
  (e, t, o) => qn([...vh, ...Object.values(t)], ...o)
), _h = (0, yo.default)(1)(
  (e, t, o) => qn([...xh, ...Object.values(t)], ...o)
), wh = (0, yo.default)(1)((e, t) => [
  ...au,
  ...Object.values(t)
]), { PREVIEW_URL: Th } = se, Ch = /* @__PURE__ */ a((e) => e.split("/").join(" / ").replace(/\s\s/, " "), "splitTitleAddExtraSpace"), kh = /* @__PURE__ */ a(
(e) => {
  if (e?.type === "story" || e?.type === "docs") {
    let { title: t, name: o } = e;
    return t && o ? Ch(`${t} - ${o} \u22C5 Storybook`) : "Storybook";
  }
  return e?.name ? `${e.name} \u22C5 Storybook` : "Storybook";
}, "getDescription"), Oh = /* @__PURE__ */ a(({
>>>>>>> main
  api: e,
  state: t
  // @ts-expect-error (non strict)
}) => {
<<<<<<< HEAD
  let { layout: o, location: i, customQueryParams: r, storyId: n, refs: l, viewMode: u, path: c, refId: d } = t, p = e.getData(n, d), m = Object.
  values(e.getElements(Ce.TAB)), h = Object.values(e.getElements(Ce.PREVIEW)), b = Object.values(e.getElements(Ce.TOOL)), f = Object.values(
  e.getElements(Ce.TOOLEXTRA)), y = e.getQueryParam("tab"), S = e0(b.length, e.getElements(Ce.TOOL), [
    p,
=======
  let { layout: o, location: i, customQueryParams: n, storyId: r, refs: l, viewMode: u, path: c, refId: p } = t, d = e.getData(r, p), g = Object.
  values(e.getElements(Te.TAB)), h = Object.values(e.getElements(Te.PREVIEW)), y = Object.values(e.getElements(Te.TOOL)), f = Object.values(
  e.getElements(Te.TOOLEXTRA)), b = e.getQueryParam("tab"), I = Eh(y.length, e.getElements(Te.TOOL), [
    d,
>>>>>>> main
    u,
    i,
    c,
    // @ts-expect-error (non strict)
<<<<<<< HEAD
    y
  ]), E = t0(
    f.length,
    e.getElements(Ce.TOOLEXTRA),
    // @ts-expect-error (non strict)
    [p, u, i, c, y]
  );
  return {
    api: e,
    entry: p,
    options: o,
    description: i0(p),
    viewMode: u,
    refs: l,
    storyId: n,
    baseUrl: r0 || "iframe.html",
    queryParams: r,
    tools: S,
    toolsExtra: E,
    tabs: Jv(
      m.length,
      e.getElements(Ce.TAB),
      p ? p.parameters : void 0,
      o.showTabs
    ),
    wrappers: o0(
      h.length,
      e.getElements(Ce.PREVIEW)
    ),
    tabId: y
  };
}, "mapper"), a0 = s.memo(/* @__PURE__ */ a(function(t) {
  return /* @__PURE__ */ s.createElement(me, { filter: s0 }, (o) => /* @__PURE__ */ s.createElement(Nu, { ...t, ...o }));
}, "PreviewConnected")), Bu = a0;

// src/manager/hooks/useDebounce.ts
function Hu(e, t) {
  let [o, i] = K(e);
  return V(() => {
    let r = setTimeout(() => {
      i(e);
    }, t);
    return () => {
      clearTimeout(r);
    };
  }, [e, t]), o;
}
a(Hu, "useDebounce");

// src/manager/hooks/useMeasure.tsx
function zu() {
=======
    b
  ]), _ = _h(
    f.length,
    e.getElements(Te.TOOLEXTRA),
    // @ts-expect-error (non strict)
    [d, u, i, c, b]
  );
  return {
    api: e,
    entry: d,
    options: o,
    description: kh(d),
    viewMode: u,
    refs: l,
    storyId: r,
    baseUrl: Th || "iframe.html",
    queryParams: n,
    tools: I,
    toolsExtra: _,
    tabs: Ih(
      g.length,
      e.getElements(Te.TAB),
      d ? d.parameters : void 0,
      o.showTabs
    ),
    wrappers: wh(
      h.length,
      e.getElements(Te.PREVIEW)
    ),
    tabId: b
  };
}, "mapper"), Ph = s.memo(/* @__PURE__ */ a(function(t) {
  return /* @__PURE__ */ s.createElement(he, { filter: Oh }, (o) => /* @__PURE__ */ s.createElement(uu, { ...t, ...o }));
}, "PreviewConnected")), du = Ph;

// src/manager/hooks/useDebounce.ts
function fu(e, t) {
  let [o, i] = $(e);
  return j(() => {
    let n = setTimeout(() => {
      i(e);
    }, t);
    return () => {
      clearTimeout(n);
    };
  }, [e, t]), o;
}
a(fu, "useDebounce");

// src/manager/hooks/useMeasure.tsx
function mu() {
>>>>>>> main
  let [e, t] = s.useState({
    width: null,
    height: null
  }), o = s.useRef(null);
<<<<<<< HEAD
  return [s.useCallback((r) => {
    if (o.current && (o.current.disconnect(), o.current = null), r?.nodeType === Node.ELEMENT_NODE) {
      let n = new ResizeObserver(([l]) => {
=======
  return [s.useCallback((n) => {
    if (o.current && (o.current.disconnect(), o.current = null), n?.nodeType === Node.ELEMENT_NODE) {
      let r = new ResizeObserver(([l]) => {
>>>>>>> main
        if (l && l.borderBoxSize) {
          let { inlineSize: u, blockSize: c } = l.borderBoxSize[0];
          t({ width: u, height: c });
        }
      });
<<<<<<< HEAD
      n.observe(r), o.current = n;
    }
  }, []), e];
}
a(zu, "useMeasure");

// ../node_modules/@tanstack/virtual-core/dist/esm/utils.js
function Ht(e, t, o) {
  let i = o.initialDeps ?? [], r;
  function n() {
    var l, u, c, d;
    let p;
    o.key && ((l = o.debug) != null && l.call(o)) && (p = Date.now());
    let m = e();
    if (!(m.length !== i.length || m.some((f, y) => i[y] !== f)))
      return r;
    i = m;
    let b;
    if (o.key && ((u = o.debug) != null && u.call(o)) && (b = Date.now()), r = t(...m), o.key && ((c = o.debug) != null && c.call(o))) {
      let f = Math.round((Date.now() - p) * 100) / 100, y = Math.round((Date.now() - b) * 100) / 100, S = y / 16, E = /* @__PURE__ */ a((g, v) => {
        for (g = String(g); g.length < v; )
          g = " " + g;
        return g;
      }, "pad");
      console.info(
        `%c\u23F1 ${E(y, 5)} /${E(f, 5)} ms`,
=======
      r.observe(n), o.current = r;
    }
  }, []), e];
}
a(mu, "useMeasure");

// ../node_modules/@tanstack/virtual-core/dist/esm/utils.js
function At(e, t, o) {
  let i = o.initialDeps ?? [], n;
  return () => {
    var r, l, u, c;
    let p;
    o.key && ((r = o.debug) != null && r.call(o)) && (p = Date.now());
    let d = e();
    if (!(d.length !== i.length || d.some((y, f) => i[f] !== y)))
      return n;
    i = d;
    let h;
    if (o.key && ((l = o.debug) != null && l.call(o)) && (h = Date.now()), n = t(...d), o.key && ((u = o.debug) != null && u.call(o))) {
      let y = Math.round((Date.now() - p) * 100) / 100, f = Math.round((Date.now() - h) * 100) / 100, b = f / 16, I = /* @__PURE__ */ a((_, m) => {
        for (_ = String(_); _.length < m; )
          _ = " " + _;
        return _;
      }, "pad");
      console.info(
        `%c\u23F1 ${I(f, 5)} /${I(y, 5)} ms`,
>>>>>>> main
        `
            font-size: .6rem;
            font-weight: bold;
            color: hsl(${Math.max(
          0,
<<<<<<< HEAD
          Math.min(120 - 120 * S, 120)
=======
          Math.min(120 - 120 * b, 120)
>>>>>>> main
        )}deg 100% 31%);`,
        o?.key
      );
    }
<<<<<<< HEAD
    return (d = o?.onChange) == null || d.call(o, r), r;
  }
  return a(n, "memoizedFunction"), n.updateDeps = (l) => {
    i = l;
  }, n;
}
a(Ht, "memo");
function Ar(e, t) {
=======
    return (c = o?.onChange) == null || c.call(o, n), n;
  };
}
a(At, "memo");
function hr(e, t) {
>>>>>>> main
  if (e === void 0)
    throw new Error(`Unexpected undefined${t ? `: ${t}` : ""}`);
  return e;
}
<<<<<<< HEAD
a(Ar, "notUndefined");
var Wu = /* @__PURE__ */ a((e, t) => Math.abs(e - t) < 1, "approxEqual"), Vu = /* @__PURE__ */ a((e, t, o) => {
  let i;
  return function(...r) {
    e.clearTimeout(i), i = e.setTimeout(() => t.apply(this, r), o);
  };
}, "debounce");

// ../node_modules/@tanstack/virtual-core/dist/esm/index.js
var l0 = /* @__PURE__ */ a((e) => e, "defaultKeyExtractor"), u0 = /* @__PURE__ */ a((e) => {
  let t = Math.max(e.startIndex - e.overscan, 0), o = Math.min(e.endIndex + e.overscan, e.count - 1), i = [];
  for (let r = t; r <= o; r++)
    i.push(r);
  return i;
}, "defaultRangeExtractor"), $u = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = e.targetWindow;
  if (!i)
    return;
  let r = /* @__PURE__ */ a((l) => {
    let { width: u, height: c } = l;
    t({ width: Math.round(u), height: Math.round(c) });
  }, "handler");
  if (r(o.getBoundingClientRect()), !i.ResizeObserver)
    return () => {
    };
  let n = new i.ResizeObserver((l) => {
    let u = /* @__PURE__ */ a(() => {
      let c = l[0];
      if (c?.borderBoxSize) {
        let d = c.borderBoxSize[0];
        if (d) {
          r({ width: d.inlineSize, height: d.blockSize });
          return;
        }
      }
      r(o.getBoundingClientRect());
    }, "run");
    e.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(u) : u();
=======
a(hr, "notUndefined");
var hu = /* @__PURE__ */ a((e, t) => Math.abs(e - t) < 1, "approxEqual");

// ../node_modules/@tanstack/virtual-core/dist/esm/index.js
var Ah = /* @__PURE__ */ a((e) => e, "defaultKeyExtractor"), Dh = /* @__PURE__ */ a((e) => {
  let t = Math.max(e.startIndex - e.overscan, 0), o = Math.min(e.endIndex + e.overscan, e.count - 1), i = [];
  for (let n = t; n <= o; n++)
    i.push(n);
  return i;
}, "defaultRangeExtractor"), gu = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = /* @__PURE__ */ a((r) => {
    let { width: l, height: u } = r;
    t({ width: Math.round(l), height: Math.round(u) });
  }, "handler");
  if (i(o.getBoundingClientRect()), typeof ResizeObserver > "u")
    return () => {
    };
  let n = new ResizeObserver((r) => {
    let l = r[0];
    if (l?.borderBoxSize) {
      let u = l.borderBoxSize[0];
      if (u) {
        i({ width: u.inlineSize, height: u.blockSize });
        return;
      }
    }
    i(o.getBoundingClientRect());
>>>>>>> main
  });
  return n.observe(o, { box: "border-box" }), () => {
    n.unobserve(o);
  };
<<<<<<< HEAD
}, "observeElementRect"), ju = {
  passive: !0
};
var Ku = typeof window > "u" ? !0 : "onscrollend" in window, Uu = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = e.targetWindow;
  if (!i)
    return;
  let r = 0, n = e.options.useScrollendEvent && Ku ? () => {
  } : Vu(
    i,
    () => {
      t(r, !1);
    },
    e.options.isScrollingResetDelay
  ), l = /* @__PURE__ */ a((p) => () => {
    let { horizontal: m, isRtl: h } = e.options;
    r = m ? o.scrollLeft * (h && -1 || 1) : o.scrollTop, n(), t(r, p);
  }, "createHandler"), u = l(!0), c = l(!1);
  c(), o.addEventListener("scroll", u, ju);
  let d = e.options.useScrollendEvent && Ku;
  return d && o.addEventListener("scrollend", c, ju), () => {
    o.removeEventListener("scroll", u), d && o.removeEventListener("scrollend", c);
  };
}, "observeElementOffset");
var c0 = /* @__PURE__ */ a((e, t, o) => {
=======
}, "observeElementRect");
var yu = /* @__PURE__ */ a((e, t) => {
  let o = e.scrollElement;
  if (!o)
    return;
  let i = /* @__PURE__ */ a(() => {
    t(o[e.options.horizontal ? "scrollLeft" : "scrollTop"]);
  }, "handler");
  return i(), o.addEventListener("scroll", i, {
    passive: !0
  }), () => {
    o.removeEventListener("scroll", i);
  };
}, "observeElementOffset");
var Mh = /* @__PURE__ */ a((e, t, o) => {
>>>>>>> main
  if (t?.borderBoxSize) {
    let i = t.borderBoxSize[0];
    if (i)
      return Math.round(
        i[o.options.horizontal ? "inlineSize" : "blockSize"]
      );
  }
  return Math.round(
    e.getBoundingClientRect()[o.options.horizontal ? "width" : "height"]
  );
}, "measureElement");
<<<<<<< HEAD
var Gu = /* @__PURE__ */ a((e, {
  adjustments: t = 0,
  behavior: o
}, i) => {
  var r, n;
  let l = e + t;
  (n = (r = i.scrollElement) == null ? void 0 : r.scrollTo) == null || n.call(r, {
    [i.options.horizontal ? "left" : "top"]: l,
    behavior: o
  });
}, "elementScroll"), Hi = class Hi {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.targetWindow = null, this.isScrolling = !1, this.scrollToIndexTimeoutId = null, this.measurementsCache =
    [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollRect = null, this.scrollOffset = null,
    this.scrollDirection = null, this.scrollAdjustments = 0, this.elementsCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let o = null, i = /* @__PURE__ */ a(() => o || (!this.targetWindow || !this.targetWindow.ResizeObserver ? null : o = new this.targetWindow.
      ResizeObserver((r) => {
        r.forEach((n) => {
          let l = /* @__PURE__ */ a(() => {
            this._measureElement(n.target, n);
          }, "run");
          this.options.useAnimationFrameWithResizeObserver ? requestAnimationFrame(l) : l();
        });
      })), "get");
      return {
        disconnect: /* @__PURE__ */ a(() => {
          var r;
          (r = i()) == null || r.disconnect(), o = null;
        }, "disconnect"),
        observe: /* @__PURE__ */ a((r) => {
          var n;
          return (n = i()) == null ? void 0 : n.observe(r, { box: "border-box" });
        }, "observe"),
        unobserve: /* @__PURE__ */ a((r) => {
          var n;
          return (n = i()) == null ? void 0 : n.unobserve(r);
        }, "unobserve")
      };
    })(), this.range = null, this.setOptions = (o) => {
      Object.entries(o).forEach(([i, r]) => {
        typeof r > "u" && delete o[i];
=======
var bu = /* @__PURE__ */ a((e, {
  adjustments: t = 0,
  behavior: o
}, i) => {
  var n, r;
  let l = e + t;
  (r = (n = i.scrollElement) == null ? void 0 : n.scrollTo) == null || r.call(n, {
    [i.options.horizontal ? "left" : "top"]: l,
    behavior: o
  });
}, "elementScroll"), Qn = class Qn {
  constructor(t) {
    this.unsubs = [], this.scrollElement = null, this.isScrolling = !1, this.isScrollingTimeoutId = null, this.scrollToIndexTimeoutId = null,
    this.measurementsCache = [], this.itemSizeCache = /* @__PURE__ */ new Map(), this.pendingMeasuredCacheIndexes = [], this.scrollDirection =
    null, this.scrollAdjustments = 0, this.measureElementCache = /* @__PURE__ */ new Map(), this.observer = /* @__PURE__ */ (() => {
      let o = null, i = /* @__PURE__ */ a(() => o || (typeof ResizeObserver < "u" ? o = new ResizeObserver((n) => {
        n.forEach((r) => {
          this._measureElement(r.target, r);
        });
      }) : null), "get");
      return {
        disconnect: /* @__PURE__ */ a(() => {
          var n;
          return (n = i()) == null ? void 0 : n.disconnect();
        }, "disconnect"),
        observe: /* @__PURE__ */ a((n) => {
          var r;
          return (r = i()) == null ? void 0 : r.observe(n, { box: "border-box" });
        }, "observe"),
        unobserve: /* @__PURE__ */ a((n) => {
          var r;
          return (r = i()) == null ? void 0 : r.unobserve(n);
        }, "unobserve")
      };
    })(), this.range = null, this.setOptions = (o) => {
      Object.entries(o).forEach(([i, n]) => {
        typeof n > "u" && delete o[i];
>>>>>>> main
      }), this.options = {
        debug: !1,
        initialOffset: 0,
        overscan: 1,
        paddingStart: 0,
        paddingEnd: 0,
        scrollPaddingStart: 0,
        scrollPaddingEnd: 0,
        horizontal: !1,
<<<<<<< HEAD
        getItemKey: l0,
        rangeExtractor: u0,
        onChange: /* @__PURE__ */ a(() => {
        }, "onChange"),
        measureElement: c0,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        isScrollingResetDelay: 150,
        enabled: !0,
        isRtl: !1,
        useScrollendEvent: !1,
        useAnimationFrameWithResizeObserver: !1,
        ...o
      };
    }, this.notify = (o) => {
      var i, r;
      (r = (i = this.options).onChange) == null || r.call(i, this, o);
    }, this.maybeNotify = Ht(
=======
        getItemKey: Ah,
        rangeExtractor: Dh,
        onChange: /* @__PURE__ */ a(() => {
        }, "onChange"),
        measureElement: Mh,
        initialRect: { width: 0, height: 0 },
        scrollMargin: 0,
        gap: 0,
        scrollingDelay: 150,
        indexAttribute: "data-index",
        initialMeasurementsCache: [],
        lanes: 1,
        ...o
      };
    }, this.notify = (o) => {
      var i, n;
      (n = (i = this.options).onChange) == null || n.call(i, this, o);
    }, this.maybeNotify = At(
>>>>>>> main
      () => (this.calculateRange(), [
        this.isScrolling,
        this.range ? this.range.startIndex : null,
        this.range ? this.range.endIndex : null
      ]),
      (o) => {
        this.notify(o);
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug"),
        initialDeps: [
          this.isScrolling,
          this.range ? this.range.startIndex : null,
          this.range ? this.range.endIndex : null
        ]
      }
    ), this.cleanup = () => {
<<<<<<< HEAD
      this.unsubs.filter(Boolean).forEach((o) => o()), this.unsubs = [], this.observer.disconnect(), this.scrollElement = null, this.targetWindow =
      null;
    }, this._didMount = () => () => {
      this.cleanup();
    }, this._willUpdate = () => {
      var o;
      let i = this.options.enabled ? this.options.getScrollElement() : null;
      if (this.scrollElement !== i) {
        if (this.cleanup(), !i) {
          this.maybeNotify();
          return;
        }
        this.scrollElement = i, this.scrollElement && "ownerDocument" in this.scrollElement ? this.targetWindow = this.scrollElement.ownerDocument.
        defaultView : this.targetWindow = ((o = this.scrollElement) == null ? void 0 : o.window) ?? null, this.elementsCache.forEach((r) => {
          this.observer.observe(r);
        }), this._scrollToOffset(this.getScrollOffset(), {
          adjustments: void 0,
          behavior: void 0
        }), this.unsubs.push(
          this.options.observeElementRect(this, (r) => {
            this.scrollRect = r, this.maybeNotify();
          })
        ), this.unsubs.push(
          this.options.observeElementOffset(this, (r, n) => {
            this.scrollAdjustments = 0, this.scrollDirection = n ? this.getScrollOffset() < r ? "forward" : "backward" : null, this.scrollOffset =
            r, this.isScrolling = n, this.maybeNotify();
          })
        );
      }
    }, this.getSize = () => this.options.enabled ? (this.scrollRect = this.scrollRect ?? this.options.initialRect, this.scrollRect[this.options.
    horizontal ? "width" : "height"]) : (this.scrollRect = null, 0), this.getScrollOffset = () => this.options.enabled ? (this.scrollOffset =
    this.scrollOffset ?? (typeof this.options.initialOffset == "function" ? this.options.initialOffset() : this.options.initialOffset), this.
    scrollOffset) : (this.scrollOffset = null, 0), this.getFurthestMeasurement = (o, i) => {
      let r = /* @__PURE__ */ new Map(), n = /* @__PURE__ */ new Map();
      for (let l = i - 1; l >= 0; l--) {
        let u = o[l];
        if (r.has(u.lane))
          continue;
        let c = n.get(
          u.lane
        );
        if (c == null || u.end > c.end ? n.set(u.lane, u) : u.end < c.end && r.set(u.lane, !0), r.size === this.options.lanes)
          break;
      }
      return n.size === this.options.lanes ? Array.from(n.values()).sort((l, u) => l.end === u.end ? l.index - u.index : l.end - u.end)[0] :
      void 0;
    }, this.getMeasurementOptions = Ht(
=======
      this.unsubs.filter(Boolean).forEach((o) => o()), this.unsubs = [], this.scrollElement = null;
    }, this._didMount = () => (this.measureElementCache.forEach(this.observer.observe), () => {
      this.observer.disconnect(), this.cleanup();
    }), this._willUpdate = () => {
      let o = this.options.getScrollElement();
      this.scrollElement !== o && (this.cleanup(), this.scrollElement = o, this._scrollToOffset(this.scrollOffset, {
        adjustments: void 0,
        behavior: void 0
      }), this.unsubs.push(
        this.options.observeElementRect(this, (i) => {
          this.scrollRect = i, this.maybeNotify();
        })
      ), this.unsubs.push(
        this.options.observeElementOffset(this, (i) => {
          this.scrollAdjustments = 0, this.scrollOffset !== i && (this.isScrollingTimeoutId !== null && (clearTimeout(this.isScrollingTimeoutId),
          this.isScrollingTimeoutId = null), this.isScrolling = !0, this.scrollDirection = this.scrollOffset < i ? "forward" : "backward", this.
          scrollOffset = i, this.maybeNotify(), this.isScrollingTimeoutId = setTimeout(() => {
            this.isScrollingTimeoutId = null, this.isScrolling = !1, this.scrollDirection = null, this.maybeNotify();
          }, this.options.scrollingDelay));
        })
      ));
    }, this.getSize = () => this.scrollRect[this.options.horizontal ? "width" : "height"], this.memoOptions = At(
>>>>>>> main
      () => [
        this.options.count,
        this.options.paddingStart,
        this.options.scrollMargin,
<<<<<<< HEAD
        this.options.getItemKey,
        this.options.enabled
      ],
      (o, i, r, n, l) => (this.pendingMeasuredCacheIndexes = [], {
        count: o,
        paddingStart: i,
        scrollMargin: r,
        getItemKey: n,
        enabled: l
=======
        this.options.getItemKey
      ],
      (o, i, n, r) => (this.pendingMeasuredCacheIndexes = [], {
        count: o,
        paddingStart: i,
        scrollMargin: n,
        getItemKey: r
>>>>>>> main
      }),
      {
        key: !1
      }
<<<<<<< HEAD
    ), this.getMeasurements = Ht(
      () => [this.getMeasurementOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: i, scrollMargin: r, getItemKey: n, enabled: l }, u) => {
        if (!l)
          return this.measurementsCache = [], this.itemSizeCache.clear(), [];
        this.measurementsCache.length === 0 && (this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.forEach(
        (p) => {
          this.itemSizeCache.set(p.key, p.size);
        }));
        let c = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        let d = this.measurementsCache.slice(0, c);
        for (let p = c; p < o; p++) {
          let m = n(p), h = this.options.lanes === 1 ? d[p - 1] : this.getFurthestMeasurement(d, p), b = h ? h.end + this.options.gap : i + r,
          f = u.get(m), y = typeof f == "number" ? f : this.options.estimateSize(p), S = b + y, E = h ? h.lane : p % this.options.lanes;
          d[p] = {
            index: p,
            start: b,
            size: y,
            end: S,
            key: m,
            lane: E
          };
        }
        return this.measurementsCache = d, d;
=======
    ), this.getFurthestMeasurement = (o, i) => {
      let n = /* @__PURE__ */ new Map(), r = /* @__PURE__ */ new Map();
      for (let l = i - 1; l >= 0; l--) {
        let u = o[l];
        if (n.has(u.lane))
          continue;
        let c = r.get(
          u.lane
        );
        if (c == null || u.end > c.end ? r.set(u.lane, u) : u.end < c.end && n.set(u.lane, !0), n.size === this.options.lanes)
          break;
      }
      return r.size === this.options.lanes ? Array.from(r.values()).sort((l, u) => l.end === u.end ? l.index - u.index : l.end - u.end)[0] :
      void 0;
    }, this.getMeasurements = At(
      () => [this.memoOptions(), this.itemSizeCache],
      ({ count: o, paddingStart: i, scrollMargin: n, getItemKey: r }, l) => {
        let u = this.pendingMeasuredCacheIndexes.length > 0 ? Math.min(...this.pendingMeasuredCacheIndexes) : 0;
        this.pendingMeasuredCacheIndexes = [];
        let c = this.measurementsCache.slice(0, u);
        for (let p = u; p < o; p++) {
          let d = r(p), g = this.options.lanes === 1 ? c[p - 1] : this.getFurthestMeasurement(c, p), h = g ? g.end + this.options.gap : i + n,
          y = l.get(d), f = typeof y == "number" ? y : this.options.estimateSize(p), b = h + f, I = g ? g.lane : p % this.options.lanes;
          c[p] = {
            index: p,
            start: h,
            size: f,
            end: b,
            key: d,
            lane: I
          };
        }
        return this.measurementsCache = c, c;
>>>>>>> main
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
<<<<<<< HEAD
    ), this.calculateRange = Ht(
      () => [
        this.getMeasurements(),
        this.getSize(),
        this.getScrollOffset(),
        this.options.lanes
      ],
      (o, i, r, n) => this.range = o.length > 0 && i > 0 ? p0({
        measurements: o,
        outerSize: i,
        scrollOffset: r,
        lanes: n
=======
    ), this.calculateRange = At(
      () => [this.getMeasurements(), this.getSize(), this.scrollOffset],
      (o, i, n) => this.range = o.length > 0 && i > 0 ? Lh({
        measurements: o,
        outerSize: i,
        scrollOffset: n
>>>>>>> main
      }) : null,
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
<<<<<<< HEAD
    ), this.getVirtualIndexes = Ht(
      () => {
        let o = null, i = null, r = this.calculateRange();
        return r && (o = r.startIndex, i = r.endIndex), this.maybeNotify.updateDeps([this.isScrolling, o, i]), [
          this.options.rangeExtractor,
          this.options.overscan,
          this.options.count,
          o,
          i
        ];
      },
      (o, i, r, n, l) => n === null || l === null ? [] : o({
        startIndex: n,
        endIndex: l,
        overscan: i,
=======
    ), this.getIndexes = At(
      () => [
        this.options.rangeExtractor,
        this.calculateRange(),
        this.options.overscan,
        this.options.count
      ],
      (o, i, n, r) => i === null ? [] : o({
        ...i,
        overscan: n,
>>>>>>> main
        count: r
      }),
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.indexFromElement = (o) => {
<<<<<<< HEAD
      let i = this.options.indexAttribute, r = o.getAttribute(i);
      return r ? parseInt(r, 10) : (console.warn(
        `Missing attribute name '${i}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (o, i) => {
      let r = this.indexFromElement(o), n = this.measurementsCache[r];
      if (!n)
        return;
      let l = n.key, u = this.elementsCache.get(l);
      u !== o && (u && this.observer.unobserve(u), this.observer.observe(o), this.elementsCache.set(l, o)), o.isConnected && this.resizeItem(
      r, this.options.measureElement(o, i, this));
    }, this.resizeItem = (o, i) => {
      let r = this.measurementsCache[o];
      if (!r)
        return;
      let n = this.itemSizeCache.get(r.key) ?? r.size, l = i - n;
      l !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(r, l, this) :
      r.start < this.getScrollOffset() + this.scrollAdjustments) && this._scrollToOffset(this.getScrollOffset(), {
        adjustments: this.scrollAdjustments += l,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(r.index), this.itemSizeCache = new Map(this.itemSizeCache.set(r.key, i)), this.notify(!1));
    }, this.measureElement = (o) => {
      if (!o) {
        this.elementsCache.forEach((i, r) => {
          i.isConnected || (this.observer.unobserve(i), this.elementsCache.delete(r));
        });
        return;
      }
      this._measureElement(o, void 0);
    }, this.getVirtualItems = Ht(
      () => [this.getVirtualIndexes(), this.getMeasurements()],
      (o, i) => {
        let r = [];
        for (let n = 0, l = o.length; n < l; n++) {
          let u = o[n], c = i[u];
          r.push(c);
        }
        return r;
=======
      let i = this.options.indexAttribute, n = o.getAttribute(i);
      return n ? parseInt(n, 10) : (console.warn(
        `Missing attribute name '${i}={index}' on measured element.`
      ), -1);
    }, this._measureElement = (o, i) => {
      let n = this.measurementsCache[this.indexFromElement(o)];
      if (!n || !o.isConnected) {
        this.measureElementCache.forEach((u, c) => {
          u === o && (this.observer.unobserve(o), this.measureElementCache.delete(c));
        });
        return;
      }
      let r = this.measureElementCache.get(n.key);
      r !== o && (r && this.observer.unobserve(r), this.observer.observe(o), this.measureElementCache.set(n.key, o));
      let l = this.options.measureElement(o, i, this);
      this.resizeItem(n, l);
    }, this.resizeItem = (o, i) => {
      let n = this.itemSizeCache.get(o.key) ?? o.size, r = i - n;
      r !== 0 && ((this.shouldAdjustScrollPositionOnItemSizeChange !== void 0 ? this.shouldAdjustScrollPositionOnItemSizeChange(o, r, this) :
      o.start < this.scrollOffset + this.scrollAdjustments) && this._scrollToOffset(this.scrollOffset, {
        adjustments: this.scrollAdjustments += r,
        behavior: void 0
      }), this.pendingMeasuredCacheIndexes.push(o.index), this.itemSizeCache = new Map(this.itemSizeCache.set(o.key, i)), this.notify(!1));
    }, this.measureElement = (o) => {
      o && this._measureElement(o, void 0);
    }, this.getVirtualItems = At(
      () => [this.getIndexes(), this.getMeasurements()],
      (o, i) => {
        let n = [];
        for (let r = 0, l = o.length; r < l; r++) {
          let u = o[r], c = i[u];
          n.push(c);
        }
        return n;
>>>>>>> main
      },
      {
        key: !1,
        debug: /* @__PURE__ */ a(() => this.options.debug, "debug")
      }
    ), this.getVirtualItemForOffset = (o) => {
      let i = this.getMeasurements();
<<<<<<< HEAD
      if (i.length !== 0)
        return Ar(
          i[qu(
            0,
            i.length - 1,
            (r) => Ar(i[r]).start,
            o
          )]
        );
    }, this.getOffsetForAlignment = (o, i, r = 0) => {
      let n = this.getSize(), l = this.getScrollOffset();
      i === "auto" && (i = o >= l + n ? "end" : "start"), i === "center" ? o += (r - n) / 2 : i === "end" && (o -= n);
      let u = this.options.horizontal ? "scrollWidth" : "scrollHeight", d = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.
      document.documentElement[u] : this.scrollElement[u] : 0) - n;
      return Math.max(Math.min(d, o), 0);
    }, this.getOffsetForIndex = (o, i = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      let r = this.measurementsCache[o];
      if (!r)
        return;
      let n = this.getSize(), l = this.getScrollOffset();
      if (i === "auto")
        if (r.end >= l + n - this.options.scrollPaddingEnd)
          i = "end";
        else if (r.start <= l + this.options.scrollPaddingStart)
          i = "start";
        else
          return [l, i];
      let u = i === "end" ? r.end + this.options.scrollPaddingEnd : r.start - this.options.scrollPaddingStart;
      return [
        this.getOffsetForAlignment(u, i, r.size),
        i
      ];
    }, this.isDynamicMode = () => this.elementsCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && this.targetWindow && (this.targetWindow.clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId =
      null);
    }, this.scrollToOffset = (o, { align: i = "start", behavior: r } = {}) => {
      this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(o, i), {
        adjustments: void 0,
        behavior: r
      });
    }, this.scrollToIndex = (o, { align: i = "auto", behavior: r } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1)), this.cancelScrollToIndex(), r === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      let n = this.getOffsetForIndex(o, i);
      if (!n) return;
      let [l, u] = n;
      this._scrollToOffset(l, { adjustments: void 0, behavior: r }), r !== "smooth" && this.isDynamicMode() && this.targetWindow && (this.scrollToIndexTimeoutId =
      this.targetWindow.setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.elementsCache.has(
          this.options.getItemKey(o)
        )) {
          let [d] = Ar(
            this.getOffsetForIndex(o, u)
          );
          Wu(d, this.getScrollOffset()) || this.scrollToIndex(o, { align: u, behavior: r });
        } else
          this.scrollToIndex(o, { align: u, behavior: r });
=======
      return hr(
        i[vu(
          0,
          i.length - 1,
          (n) => hr(i[n]).start,
          o
        )]
      );
    }, this.getOffsetForAlignment = (o, i) => {
      let n = this.getSize();
      i === "auto" && (o <= this.scrollOffset ? i = "start" : o >= this.scrollOffset + n ? i = "end" : i = "start"), i === "start" ? o = o :
      i === "end" ? o = o - n : i === "center" && (o = o - n / 2);
      let r = this.options.horizontal ? "scrollWidth" : "scrollHeight", u = (this.scrollElement ? "document" in this.scrollElement ? this.scrollElement.
      document.documentElement[r] : this.scrollElement[r] : 0) - this.getSize();
      return Math.max(Math.min(u, o), 0);
    }, this.getOffsetForIndex = (o, i = "auto") => {
      o = Math.max(0, Math.min(o, this.options.count - 1));
      let n = hr(this.getMeasurements()[o]);
      if (i === "auto")
        if (n.end >= this.scrollOffset + this.getSize() - this.options.scrollPaddingEnd)
          i = "end";
        else if (n.start <= this.scrollOffset + this.options.scrollPaddingStart)
          i = "start";
        else
          return [this.scrollOffset, i];
      let r = i === "end" ? n.end + this.options.scrollPaddingEnd : n.start - this.options.scrollPaddingStart;
      return [this.getOffsetForAlignment(r, i), i];
    }, this.isDynamicMode = () => this.measureElementCache.size > 0, this.cancelScrollToIndex = () => {
      this.scrollToIndexTimeoutId !== null && (clearTimeout(this.scrollToIndexTimeoutId), this.scrollToIndexTimeoutId = null);
    }, this.scrollToOffset = (o, { align: i = "start", behavior: n } = {}) => {
      this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      ), this._scrollToOffset(this.getOffsetForAlignment(o, i), {
        adjustments: void 0,
        behavior: n
      });
    }, this.scrollToIndex = (o, { align: i = "auto", behavior: n } = {}) => {
      o = Math.max(0, Math.min(o, this.options.count - 1)), this.cancelScrollToIndex(), n === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
      );
      let [r, l] = this.getOffsetForIndex(o, i);
      this._scrollToOffset(r, { adjustments: void 0, behavior: n }), n !== "smooth" && this.isDynamicMode() && (this.scrollToIndexTimeoutId =
      setTimeout(() => {
        if (this.scrollToIndexTimeoutId = null, this.measureElementCache.has(
          this.options.getItemKey(o)
        )) {
          let [c] = this.getOffsetForIndex(o, l);
          hu(c, this.scrollOffset) || this.scrollToIndex(o, { align: l, behavior: n });
        } else
          this.scrollToIndex(o, { align: l, behavior: n });
>>>>>>> main
      }));
    }, this.scrollBy = (o, { behavior: i } = {}) => {
      this.cancelScrollToIndex(), i === "smooth" && this.isDynamicMode() && console.warn(
        "The `smooth` scroll behavior is not fully supported with dynamic size."
<<<<<<< HEAD
      ), this._scrollToOffset(this.getScrollOffset() + o, {
=======
      ), this._scrollToOffset(this.scrollOffset + o, {
>>>>>>> main
        adjustments: void 0,
        behavior: i
      });
    }, this.getTotalSize = () => {
      var o;
<<<<<<< HEAD
      let i = this.getMeasurements(), r;
      if (i.length === 0)
        r = this.options.paddingStart;
      else if (this.options.lanes === 1)
        r = ((o = i[i.length - 1]) == null ? void 0 : o.end) ?? 0;
      else {
        let n = Array(this.options.lanes).fill(null), l = i.length - 1;
        for (; l >= 0 && n.some((u) => u === null); ) {
          let u = i[l];
          n[u.lane] === null && (n[u.lane] = u.end), l--;
        }
        r = Math.max(...n.filter((u) => u !== null));
      }
      return Math.max(
        r - this.options.scrollMargin + this.options.paddingEnd,
        0
      );
    }, this._scrollToOffset = (o, {
      adjustments: i,
      behavior: r
    }) => {
      this.options.scrollToFn(o, { behavior: r, adjustments: i }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t);
  }
};
a(Hi, "Virtualizer");
var Dr = Hi, qu = /* @__PURE__ */ a((e, t, o, i) => {
  for (; e <= t; ) {
    let r = (e + t) / 2 | 0, n = o(r);
    if (n < i)
      e = r + 1;
    else if (n > i)
      t = r - 1;
    else
      return r;
  }
  return e > 0 ? e - 1 : 0;
}, "findNearestBinarySearch");
function p0({
  measurements: e,
  outerSize: t,
  scrollOffset: o,
  lanes: i
}) {
  let r = e.length - 1, n = /* @__PURE__ */ a((c) => e[c].start, "getOffset");
  if (e.length <= i)
    return {
      startIndex: 0,
      endIndex: r
    };
  let l = qu(
    0,
    r,
    n,
    o
  ), u = l;
  if (i === 1)
    for (; u < r && e[u].end < o + t; )
      u++;
  else if (i > 1) {
    let c = Array(i).fill(0);
    for (; u < r && c.some((p) => p < o + t); ) {
      let p = e[u];
      c[p.lane] = p.end, u++;
    }
    let d = Array(i).fill(o + t);
    for (; l >= 0 && d.some((p) => p >= o); ) {
      let p = e[l];
      d[p.lane] = p.start, l--;
    }
    l = Math.max(0, l - l % i), u = Math.min(r, u + (i - 1 - u % i));
  }
  return { startIndex: l, endIndex: u };
}
a(p0, "calculateRange");

// ../node_modules/@tanstack/react-virtual/dist/esm/index.js
var Yu = typeof document < "u" ? Xt : V;
function d0(e) {
  let t = Zt(() => ({}), {})[1], o = {
    ...e,
    onChange: /* @__PURE__ */ a((r, n) => {
      var l;
      n ? Do(t) : t(), (l = e.onChange) == null || l.call(e, r, n);
    }, "onChange")
  }, [i] = K(
    () => new Dr(o)
  );
  return i.setOptions(o), Yu(() => i._didMount(), []), Yu(() => i._willUpdate()), i;
}
a(d0, "useVirtualizerBase");
function Qu(e) {
  return d0({
    observeElementRect: $u,
    observeElementOffset: Uu,
    scrollToFn: Gu,
    ...e
  });
}
a(Qu, "useVirtualizer");

// src/manager/components/sidebar/FIleSearchList.utils.tsx
var Xu = /* @__PURE__ */ a(({
=======
      let i = this.getMeasurements(), n;
      return i.length === 0 ? n = this.options.paddingStart : n = this.options.lanes === 1 ? ((o = i[i.length - 1]) == null ? void 0 : o.end) ??
      0 : Math.max(
        ...i.slice(-this.options.lanes).map((r) => r.end)
      ), n - this.options.scrollMargin + this.options.paddingEnd;
    }, this._scrollToOffset = (o, {
      adjustments: i,
      behavior: n
    }) => {
      this.options.scrollToFn(o, { behavior: n, adjustments: i }, this);
    }, this.measure = () => {
      this.itemSizeCache = /* @__PURE__ */ new Map(), this.notify(!1);
    }, this.setOptions(t), this.scrollRect = this.options.initialRect, this.scrollOffset = typeof this.options.initialOffset == "function" ?
    this.options.initialOffset() : this.options.initialOffset, this.measurementsCache = this.options.initialMeasurementsCache, this.measurementsCache.
    forEach((o) => {
      this.itemSizeCache.set(o.key, o.size);
    }), this.maybeNotify();
  }
};
a(Qn, "Virtualizer");
var gr = Qn, vu = /* @__PURE__ */ a((e, t, o, i) => {
  for (; e <= t; ) {
    let n = (e + t) / 2 | 0, r = o(n);
    if (r < i)
      e = n + 1;
    else if (r > i)
      t = n - 1;
    else
      return n;
  }
  return e > 0 ? e - 1 : 0;
}, "findNearestBinarySearch");
function Lh({
  measurements: e,
  outerSize: t,
  scrollOffset: o
}) {
  let i = e.length - 1, r = vu(0, i, /* @__PURE__ */ a((u) => e[u].start, "getOffset"), o), l = r;
  for (; l < i && e[l].end < o + t; )
    l++;
  return { startIndex: r, endIndex: l };
}
a(Lh, "calculateRange");

// ../node_modules/@tanstack/react-virtual/dist/esm/index.js
var Nh = typeof document < "u" ? ft : j;
function Rh(e) {
  let t = Vt(() => ({}), {})[1], o = {
    ...e,
    onChange: /* @__PURE__ */ a((n, r) => {
      var l;
      r ? mo(t) : t(), (l = e.onChange) == null || l.call(e, n, r);
    }, "onChange")
  }, [i] = $(
    () => new gr(o)
  );
  return i.setOptions(o), j(() => i._didMount(), []), Nh(() => i._willUpdate()), i;
}
a(Rh, "useVirtualizerBase");
function xu(e) {
  return Rh({
    observeElementRect: gu,
    observeElementOffset: yu,
    scrollToFn: bu,
    ...e
  });
}
a(xu, "useVirtualizer");

// src/manager/components/sidebar/FIleSearchList.utils.tsx
var Su = /* @__PURE__ */ a(({
>>>>>>> main
  parentRef: e,
  rowVirtualizer: t,
  selectedItem: o
}) => {
<<<<<<< HEAD
  V(() => {
    let i = /* @__PURE__ */ a((r) => {
      if (!e.current)
        return;
      let n = t.options.count, l = document.activeElement, u = parseInt(l.getAttribute("data-index") || "-1", 10), c = l.tagName === "INPUT",
      d = /* @__PURE__ */ a(() => document.querySelector('[data-index="0"]'), "getFirstElement"), p = /* @__PURE__ */ a(() => document.querySelector(
      `[data-index="${n - 1}"]`), "getLastElement");
      if (r.code === "ArrowDown" && l) {
        if (r.stopPropagation(), c) {
          d()?.focus();
          return;
        }
        if (u === n - 1) {
          Do(() => {
            t.scrollToIndex(0, { align: "start" });
          }), setTimeout(() => {
            d()?.focus();
=======
  j(() => {
    let i = /* @__PURE__ */ a((n) => {
      if (!e.current)
        return;
      let r = t.options.count, l = document.activeElement, u = parseInt(l.getAttribute("data-index") || "-1", 10), c = l.tagName === "INPUT",
      p = /* @__PURE__ */ a(() => document.querySelector('[data-index="0"]'), "getFirstElement"), d = /* @__PURE__ */ a(() => document.querySelector(
      `[data-index="${r - 1}"]`), "getLastElement");
      if (n.code === "ArrowDown" && l) {
        if (n.stopPropagation(), c) {
          p()?.focus();
          return;
        }
        if (u === r - 1) {
          mo(() => {
            t.scrollToIndex(0, { align: "start" });
          }), setTimeout(() => {
            p()?.focus();
>>>>>>> main
          }, 100);
          return;
        }
        if (o === u) {
          document.querySelector(
            `[data-index-position="${o}_first"]`
          )?.focus();
          return;
        }
        if (o !== null && l.getAttribute("data-index-position")?.includes("last")) {
          document.querySelector(
            `[data-index="${o + 1}"]`
          )?.focus();
          return;
        }
        l.nextElementSibling?.focus();
      }
<<<<<<< HEAD
      if (r.code === "ArrowUp" && l) {
        if (c) {
          Do(() => {
            t.scrollToIndex(n - 1, { align: "start" });
          }), setTimeout(() => {
            p()?.focus();
=======
      if (n.code === "ArrowUp" && l) {
        if (c) {
          mo(() => {
            t.scrollToIndex(r - 1, { align: "start" });
          }), setTimeout(() => {
            d()?.focus();
>>>>>>> main
          }, 100);
          return;
        }
        if (o !== null && l.getAttribute("data-index-position")?.includes("first")) {
          document.querySelector(
            `[data-index="${o}"]`
          )?.focus();
          return;
        }
        l.previousElementSibling?.focus();
      }
    }, "handleArrowKeys");
    return document.addEventListener("keydown", i, { capture: !0 }), () => {
      document.removeEventListener("keydown", i, { capture: !0 });
    };
  }, [t, o, e]);
}, "useArrowKeyNavigation");

// src/manager/components/sidebar/FileList.tsx
<<<<<<< HEAD
var Zu = x("div")(({ theme: e }) => ({
=======
var Iu = x("div")(({ theme: e }) => ({
>>>>>>> main
  marginTop: "-16px",
  // after element which fades out the list
  "&::after": {
    content: '""',
    position: "fixed",
    pointerEvents: "none",
    bottom: 0,
    left: 0,
    right: 0,
    height: "80px",
<<<<<<< HEAD
    background: `linear-gradient(${so(e.barBg, 0)} 10%, ${e.barBg} 80%)`
  }
})), Mr = x("div")(({ theme: e }) => ({
=======
    background: `linear-gradient(${rr(e.barBg, 0)} 10%, ${e.barBg} 80%)`
  }
})), yr = x("div")(({ theme: e }) => ({
>>>>>>> main
  height: "280px",
  overflow: "auto",
  msOverflowStyle: "none",
  scrollbarWidth: "none",
  position: "relative",
  "::-webkit-scrollbar": {
    display: "none"
  }
<<<<<<< HEAD
})), Ju = x("li")(({ theme: e }) => ({
=======
})), Eu = x("li")(({ theme: e }) => ({
>>>>>>> main
  ":focus-visible": {
    outline: "none",
    ".file-list-item": {
      borderRadius: "4px",
      background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
      "> svg": {
        display: "flex"
      }
    }
  }
<<<<<<< HEAD
})), Lr = x("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative"
})), ec = x.div(({ theme: e, selected: t, disabled: o, error: i }) => ({
=======
})), br = x("div")(({ theme: e }) => ({
  display: "flex",
  flexDirection: "column",
  position: "relative"
})), _u = x.div(({ theme: e, selected: t, disabled: o, error: i }) => ({
>>>>>>> main
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px",
  cursor: "pointer",
  borderRadius: "4px",
  ...t && {
    borderRadius: "4px",
    background: e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  ...o && {
    cursor: "not-allowed",
    div: {
      color: `${e.color.mediumdark} !important`
    }
  },
  ...i && {
    background: e.base === "light" ? "#00000011" : "#00000033"
  },
  "&:hover": {
    background: i ? "#00000022" : e.base === "dark" ? "rgba(255,255,255,.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  }
<<<<<<< HEAD
})), tc = x("ul")({
=======
})), wu = x("ul")({
>>>>>>> main
  margin: 0,
  padding: "0 0 0 0",
  width: "100%",
  position: "relative"
<<<<<<< HEAD
}), oc = x("div")({
=======
}), Tu = x("div")({
>>>>>>> main
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "calc(100% - 50px)"
<<<<<<< HEAD
}), rc = x("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.color.secondary
})), nc = x("div")(({ theme: e, error: t }) => ({
=======
}), Cu = x("div")(({ theme: e, error: t }) => ({
  color: t ? e.color.negativeText : e.color.secondary
})), ku = x("div")(({ theme: e, error: t }) => ({
>>>>>>> main
  color: t ? e.color.negativeText : e.base === "dark" ? e.color.lighter : e.color.darkest,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
<<<<<<< HEAD
})), ic = x("div")(({ theme: e }) => ({
=======
})), Ou = x("div")(({ theme: e }) => ({
>>>>>>> main
  color: e.color.mediumdark,
  fontSize: "14px",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "100%"
<<<<<<< HEAD
})), sc = x("ul")(({ theme: e }) => ({
  margin: 0,
  padding: 0
})), ac = x("li")(({ theme: e, error: t }) => ({
=======
})), Pu = x("ul")(({ theme: e }) => ({
  margin: 0,
  padding: 0
})), Au = x("li")(({ theme: e, error: t }) => ({
>>>>>>> main
  padding: "8px 16px 8px 16px",
  marginLeft: "30px",
  display: "flex",
  gap: "8px",
  alignItems: "center",
  justifyContent: "space-between",
  fontSize: "14px",
  cursor: "pointer",
  borderRadius: "4px",
  ":focus-visible": {
    outline: "none"
  },
  ...t && {
    background: "#F9ECEC",
    color: e.color.negativeText
  },
  "&:hover,:focus-visible": {
    background: t ? "#F9ECEC" : e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : e.color.mediumlight,
    "> svg": {
      display: "flex"
    }
  },
  "> div > svg": {
    color: t ? e.color.negativeText : e.color.secondary
  }
<<<<<<< HEAD
})), lc = x("div")(({ theme: e }) => ({
=======
})), Du = x("div")(({ theme: e }) => ({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  gap: "8px",
  width: "calc(100% - 20px)"
<<<<<<< HEAD
})), uc = x("span")(({ theme: e }) => ({
=======
})), Mu = x("span")(({ theme: e }) => ({
>>>>>>> main
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  overflow: "hidden",
  maxWidth: "calc(100% - 160px)",
  display: "inline-block"
<<<<<<< HEAD
})), cc = x("span")(({ theme: e }) => ({
=======
})), Lu = x("span")(({ theme: e }) => ({
>>>>>>> main
  display: "inline-block",
  padding: `1px ${e.appBorderRadius}px`,
  borderRadius: "2px",
  fontSize: "10px",
  color: e.base === "dark" ? e.color.lightest : "#727272",
  backgroundColor: e.base === "dark" ? "rgba(255, 255, 255, 0.1)" : "#F2F4F5"
<<<<<<< HEAD
})), pc = x("div")(({ theme: e }) => ({
=======
})), Nu = x("div")(({ theme: e }) => ({
>>>>>>> main
  textAlign: "center",
  maxWidth: "334px",
  margin: "16px auto 50px auto",
  fontSize: "14px",
  color: e.base === "dark" ? e.color.lightest : "#000"
<<<<<<< HEAD
})), dc = x("p")(({ theme: e }) => ({
=======
})), Ru = x("p")(({ theme: e }) => ({
>>>>>>> main
  margin: 0,
  color: e.base === "dark" ? e.color.defaultText : e.color.mediumdark
}));

// src/manager/components/sidebar/FileSearchListSkeleton.tsx
<<<<<<< HEAD
var f0 = x("div")(({ theme: e }) => ({
=======
var Fh = x("div")(({ theme: e }) => ({
>>>>>>> main
  display: "flex",
  alignItems: "flex-start",
  gap: "8px",
  alignSelf: "stretch",
  padding: "8px 16px"
<<<<<<< HEAD
})), m0 = x("div")({
=======
})), Hh = x("div")({
>>>>>>> main
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  width: "100%",
  borderRadius: "3px"
<<<<<<< HEAD
}), h0 = x.div(({ theme: e }) => ({
=======
}), Bh = x.div(({ theme: e }) => ({
>>>>>>> main
  width: "14px",
  height: "14px",
  borderRadius: "3px",
  marginTop: "1px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`
<<<<<<< HEAD
})), fc = x.div(({ theme: e }) => ({
=======
})), Fu = x.div(({ theme: e }) => ({
>>>>>>> main
  height: "16px",
  borderRadius: "3px",
  background: e.base === "dark" ? "rgba(255,255,255,.1)" : "rgba(0,0,0,.1)",
  animation: `${e.animation.glow} 1.5s ease-in-out infinite`,
  width: "100%",
  maxWidth: "100%",
  "+ div": {
    marginTop: "6px"
  }
<<<<<<< HEAD
})), mc = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Mr, null, [1, 2, 3].map((e) => /* @__PURE__ */ s.createElement(Lr, { key: e },
/* @__PURE__ */ s.createElement(f0, null, /* @__PURE__ */ s.createElement(h0, null), /* @__PURE__ */ s.createElement(m0, null, /* @__PURE__ */ s.
createElement(fc, { style: { width: "90px" } }), /* @__PURE__ */ s.createElement(fc, { style: { width: "300px" } })))))), "FileSearchListLoa\
dingSkeleton");

// src/manager/components/sidebar/FileSearchList.tsx
var hc = x(En)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), g0 = x(_t)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), gc = Tt(/* @__PURE__ */ a(function({
  isLoading: t,
  searchResults: o,
  onNewStory: i,
  errorItemId: r
}) {
  let [n, l] = K(null), u = s.useRef(), c = U(() => [...o ?? []].sort((f, y) => {
    let S = f.exportedComponents === null || f.exportedComponents?.length === 0, E = f.storyFileExists, g = y.exportedComponents === null ||
    y.exportedComponents?.length === 0, v = y.storyFileExists;
    return E && !v ? -1 : v && !E || S && !g ? 1 : !S && g ? -1 : 0;
  }), [o]), d = o?.length || 0, p = Qu({
    count: d,
=======
})), Hu = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(yr, null, [1, 2, 3].map((e) => /* @__PURE__ */ s.createElement(br, { key: e },
/* @__PURE__ */ s.createElement(Fh, null, /* @__PURE__ */ s.createElement(Bh, null), /* @__PURE__ */ s.createElement(Hh, null, /* @__PURE__ */ s.
createElement(Fu, { style: { width: "90px" } }), /* @__PURE__ */ s.createElement(Fu, { style: { width: "300px" } })))))), "FileSearchListLoa\
dingSkeleton");

// src/manager/components/sidebar/FileSearchList.tsx
var Bu = x(gs)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), zh = x(Kt)(({ theme: e }) => ({
  display: "none",
  alignSelf: "center",
  color: e.color.mediumdark
})), zu = no(/* @__PURE__ */ a(function({
  isLoading: t,
  searchResults: o,
  onNewStory: i,
  errorItemId: n
}) {
  let [r, l] = $(null), u = s.useRef(), c = K(() => [...o ?? []].sort((f, b) => {
    let I = f.exportedComponents === null || f.exportedComponents?.length === 0, _ = f.storyFileExists, m = b.exportedComponents === null ||
    b.exportedComponents?.length === 0, v = b.storyFileExists;
    return _ && !v ? -1 : v && !_ || I && !m ? 1 : !I && m ? -1 : 0;
  }), [o]), p = o?.length || 0, d = xu({
    count: p,
>>>>>>> main
    // @ts-expect-error (non strict)
    getScrollElement: /* @__PURE__ */ a(() => u.current, "getScrollElement"),
    paddingStart: 16,
    paddingEnd: 40,
    estimateSize: /* @__PURE__ */ a(() => 54, "estimateSize"),
    overscan: 2
  });
<<<<<<< HEAD
  Xu({ rowVirtualizer: p, parentRef: u, selectedItem: n });
  let m = A(
    ({ virtualItem: f, searchResult: y, itemId: S }) => {
      y?.exportedComponents?.length > 1 ? l((E) => E === f.index ? null : f.index) : y?.exportedComponents?.length === 1 && i({
        componentExportName: y.exportedComponents[0].name,
        componentFilePath: y.filepath,
        componentIsDefaultExport: y.exportedComponents[0].default,
        selectedItemId: S,
=======
  Su({ rowVirtualizer: d, parentRef: u, selectedItem: r });
  let g = A(
    ({ virtualItem: f, searchResult: b, itemId: I }) => {
      b?.exportedComponents?.length > 1 ? l((_) => _ === f.index ? null : f.index) : b?.exportedComponents?.length === 1 && i({
        componentExportName: b.exportedComponents[0].name,
        componentFilePath: b.filepath,
        componentIsDefaultExport: b.exportedComponents[0].default,
        selectedItemId: I,
>>>>>>> main
        componentExportCount: 1
      });
    },
    [i]
  ), h = A(
<<<<<<< HEAD
    ({ searchResult: f, component: y, id: S }) => {
      i({
        componentExportName: y.name,
        componentFilePath: f.filepath,
        componentIsDefaultExport: y.default,
        selectedItemId: S,
=======
    ({ searchResult: f, component: b, id: I }) => {
      i({
        componentExportName: b.name,
        componentFilePath: f.filepath,
        componentIsDefaultExport: b.default,
        selectedItemId: I,
>>>>>>> main
        // @ts-expect-error (non strict)
        componentExportCount: f.exportedComponents.length
      });
    },
    [i]
<<<<<<< HEAD
  ), b = A(
    ({ virtualItem: f, selected: y, searchResult: S }) => {
      let E = r === S.filepath, g = y === f.index;
      return /* @__PURE__ */ s.createElement(
        Lr,
        {
          "aria-expanded": g,
=======
  ), y = A(
    ({ virtualItem: f, selected: b, searchResult: I }) => {
      let _ = n === I.filepath, m = b === f.index;
      return /* @__PURE__ */ s.createElement(
        br,
        {
          "aria-expanded": m,
>>>>>>> main
          "aria-controls": `file-list-export-${f.index}`,
          id: `file-list-item-wrapper-${f.index}`
        },
        /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
          ec,
          {
            className: "file-list-item",
            selected: g,
            error: E,
            disabled: S.exportedComponents === null || S.exportedComponents?.length === 0
          },
          /* @__PURE__ */ s.createElement(rc, { error: E }, /* @__PURE__ */ s.createElement(Qo, null)),
          /* @__PURE__ */ s.createElement(oc, null, /* @__PURE__ */ s.createElement(nc, { error: E }, S.filepath.split("/").at(-1)), /* @__PURE__ */ s.
          createElement(ic, null, S.filepath)),
          g ? /* @__PURE__ */ s.createElement(g0, null) : /* @__PURE__ */ s.createElement(hc, null)
        ),
        S?.exportedComponents?.length > 1 && g && /* @__PURE__ */ s.createElement(
          sc,
=======
          _u,
          {
            className: "file-list-item",
            selected: m,
            error: _,
            disabled: I.exportedComponents === null || I.exportedComponents?.length === 0
          },
          /* @__PURE__ */ s.createElement(Cu, { error: _ }, /* @__PURE__ */ s.createElement(rn, null)),
          /* @__PURE__ */ s.createElement(Tu, null, /* @__PURE__ */ s.createElement(ku, { error: _ }, I.filepath.split("/").at(-1)), /* @__PURE__ */ s.
          createElement(Ou, null, I.filepath)),
          m ? /* @__PURE__ */ s.createElement(zh, null) : /* @__PURE__ */ s.createElement(Bu, null)
        ),
        I?.exportedComponents?.length > 1 && m && /* @__PURE__ */ s.createElement(
          Pu,
>>>>>>> main
          {
            role: "region",
            id: `file-list-export-${f.index}`,
            "aria-labelledby": `file-list-item-wrapper-${f.index}`,
            onClick: (v) => {
              v.stopPropagation();
            },
            onKeyUp: (v) => {
              v.key === "Enter" && v.stopPropagation();
            }
          },
<<<<<<< HEAD
          S.exportedComponents?.map((v, I) => {
            let w = r === `${S.filepath}_${I}`, O = I === 0 ? "first" : (
              // @ts-expect-error (non strict)
              I === S.exportedComponents.length - 1 ? "last" : "middle"
            );
            return /* @__PURE__ */ s.createElement(
              ac,
              {
                tabIndex: 0,
                "data-index-position": `${f.index}_${O}`,
                key: v.name,
                error: w,
                onClick: () => {
                  h({
                    searchResult: S,
                    component: v,
                    id: `${S.filepath}_${I}`
                  });
                },
                onKeyUp: (_) => {
                  _.key === "Enter" && h({
                    searchResult: S,
                    component: v,
                    id: `${S.filepath}_${I}`
                  });
                }
              },
              /* @__PURE__ */ s.createElement(lc, null, /* @__PURE__ */ s.createElement(Qo, null), v.default ? /* @__PURE__ */ s.createElement(
              s.Fragment, null, /* @__PURE__ */ s.createElement(uc, null, S.filepath.split("/").at(-1)?.split(".")?.at(0)), /* @__PURE__ */ s.
              createElement(cc, null, "Default export")) : v.name),
              /* @__PURE__ */ s.createElement(hc, null)
=======
          I.exportedComponents?.map((v, S) => {
            let E = n === `${I.filepath}_${S}`, T = S === 0 ? "first" : (
              // @ts-expect-error (non strict)
              S === I.exportedComponents.length - 1 ? "last" : "middle"
            );
            return /* @__PURE__ */ s.createElement(
              Au,
              {
                tabIndex: 0,
                "data-index-position": `${f.index}_${T}`,
                key: v.name,
                error: E,
                onClick: () => {
                  h({
                    searchResult: I,
                    component: v,
                    id: `${I.filepath}_${S}`
                  });
                },
                onKeyUp: (C) => {
                  C.key === "Enter" && h({
                    searchResult: I,
                    component: v,
                    id: `${I.filepath}_${S}`
                  });
                }
              },
              /* @__PURE__ */ s.createElement(Du, null, /* @__PURE__ */ s.createElement(rn, null), v.default ? /* @__PURE__ */ s.createElement(
              s.Fragment, null, /* @__PURE__ */ s.createElement(Mu, null, I.filepath.split("/").at(-1)?.split(".")?.at(0)), /* @__PURE__ */ s.
              createElement(Lu, null, "Default export")) : v.name),
              /* @__PURE__ */ s.createElement(Bu, null)
>>>>>>> main
            );
          })
        )
      );
    },
<<<<<<< HEAD
    [h, r]
  );
  return t && (o === null || o?.length === 0) ? /* @__PURE__ */ s.createElement(mc, null) : o?.length === 0 ? /* @__PURE__ */ s.createElement(
  pc, null, /* @__PURE__ */ s.createElement("p", null, "We could not find any file with that name"), /* @__PURE__ */ s.createElement(dc, null,
  "You may want to try using different keywords, check for typos, and adjust your filters")) : c?.length > 0 ? /* @__PURE__ */ s.createElement(
  Zu, null, /* @__PURE__ */ s.createElement(Mr, { ref: u }, /* @__PURE__ */ s.createElement(
    tc,
    {
      style: {
        height: `${p.getTotalSize()}px`
      }
    },
    p.getVirtualItems().map((f) => {
      let y = c[f.index], S = y.exportedComponents === null || y.exportedComponents?.length === 0, E = {};
      return /* @__PURE__ */ s.createElement(
        Ju,
        {
          key: f.key,
          "data-index": f.index,
          ref: p.measureElement,
          onClick: () => {
            m({
              virtualItem: f,
              itemId: y.filepath,
              searchResult: y
            });
          },
          onKeyUp: (g) => {
            g.key === "Enter" && m({
              virtualItem: f,
              itemId: y.filepath,
              searchResult: y
=======
    [h, n]
  );
  return t && (o === null || o?.length === 0) ? /* @__PURE__ */ s.createElement(Hu, null) : o?.length === 0 ? /* @__PURE__ */ s.createElement(
  Nu, null, /* @__PURE__ */ s.createElement("p", null, "We could not find any file with that name"), /* @__PURE__ */ s.createElement(Ru, null,
  "You may want to try using different keywords, check for typos, and adjust your filters")) : c?.length > 0 ? /* @__PURE__ */ s.createElement(
  Iu, null, /* @__PURE__ */ s.createElement(yr, { ref: u }, /* @__PURE__ */ s.createElement(
    wu,
    {
      style: {
        height: `${d.getTotalSize()}px`
      }
    },
    d.getVirtualItems().map((f) => {
      let b = c[f.index], I = b.exportedComponents === null || b.exportedComponents?.length === 0, _ = {};
      return /* @__PURE__ */ s.createElement(
        Eu,
        {
          key: f.key,
          "data-index": f.index,
          ref: d.measureElement,
          onClick: () => {
            g({
              virtualItem: f,
              itemId: b.filepath,
              searchResult: b
            });
          },
          onKeyUp: (m) => {
            m.key === "Enter" && g({
              virtualItem: f,
              itemId: b.filepath,
              searchResult: b
>>>>>>> main
            });
          },
          style: {
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            transform: `translateY(${f.start}px)`
          },
          tabIndex: 0
        },
<<<<<<< HEAD
        S ? /* @__PURE__ */ s.createElement(
          ve,
          {
            ...E,
=======
        I ? /* @__PURE__ */ s.createElement(
          be,
          {
            ..._,
>>>>>>> main
            style: { width: "100%" },
            hasChrome: !1,
            closeOnOutsideClick: !0,
            tooltip: /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
              rt,
              {
                note: S ? "We can't evaluate exports for this file. You can't create a story for it automatically" : null
=======
              Xe,
              {
                note: I ? "We can't evaluate exports for this file. You can't create a story for it automatically" : null
>>>>>>> main
              }
            )
          },
          /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
            b,
            {
              searchResult: y,
              selected: n,
=======
            y,
            {
              searchResult: b,
              selected: r,
>>>>>>> main
              virtualItem: f
            }
          )
        ) : /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
          b,
          {
            ...E,
            key: f.index,
            searchResult: y,
            selected: n,
=======
          y,
          {
            ..._,
            key: f.index,
            searchResult: b,
            selected: r,
>>>>>>> main
            virtualItem: f
          }
        )
      );
    })
  ))) : null;
}, "FileSearchList"));

// src/manager/components/sidebar/FileSearchModal.tsx
<<<<<<< HEAD
var y0 = 418, b0 = x(At)(() => ({
  boxShadow: "none",
  background: "transparent",
  overflow: "visible"
})), v0 = x.div(({ theme: e, height: t }) => ({
=======
var Wh = 418, jh = x(Et)(() => ({
  boxShadow: "none",
  background: "transparent",
  overflow: "visible"
})), Vh = x.div(({ theme: e, height: t }) => ({
>>>>>>> main
  backgroundColor: e.background.bar,
  borderRadius: 6,
  boxShadow: "rgba(255, 255, 255, 0.05) 0 0 0 1px inset, rgba(14, 18, 22, 0.35) 0px 10px 18px -10px",
  padding: "16px",
  transition: "height 0.3s",
  height: t ? `${t + 32}px` : "auto",
  overflow: "hidden"
<<<<<<< HEAD
})), x0 = x(At.Content)(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.lighter : e.color.mediumdark
})), I0 = x(or.Input)(({ theme: e }) => ({
=======
})), Kh = x(Et.Content)(({ theme: e }) => ({
  margin: 0,
  color: e.base === "dark" ? e.color.lighter : e.color.mediumdark
})), $h = x(Yo.Input)(({ theme: e }) => ({
>>>>>>> main
  paddingLeft: 40,
  paddingRight: 28,
  fontSize: 14,
  height: 40,
  ...e.base === "light" && {
    color: e.color.darkest
  },
  "::placeholder": {
    color: e.color.mediumdark
  },
  "&:invalid:not(:placeholder-shown)": {
    boxShadow: `${e.color.negative} 0 0 0 1px inset`
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
<<<<<<< HEAD
})), S0 = x.div({
=======
})), Uh = x.div({
>>>>>>> main
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  position: "relative"
<<<<<<< HEAD
}), w0 = x.div(({ theme: e }) => ({
=======
}), Gh = x.div(({ theme: e }) => ({
>>>>>>> main
  position: "absolute",
  top: 0,
  left: 16,
  zIndex: 1,
  pointerEvents: "none",
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%"
<<<<<<< HEAD
})), E0 = x.div(({ theme: e }) => ({
=======
})), Yh = x.div(({ theme: e }) => ({
>>>>>>> main
  position: "absolute",
  top: 0,
  right: 16,
  zIndex: 1,
  color: e.darkest,
  display: "flex",
  alignItems: "center",
  height: "100%",
  "@keyframes spin": {
    from: { transform: "rotate(0deg)" },
    to: { transform: "rotate(360deg)" }
  },
  animation: "spin 1s linear infinite"
<<<<<<< HEAD
})), T0 = x(At.Error)({
=======
})), qh = x(Et.Error)({
>>>>>>> main
  position: "absolute",
  padding: "8px 40px 8px 16px",
  bottom: 0,
  maxHeight: "initial",
  width: "100%",
  div: {
    wordBreak: "break-word"
  },
  "> div": {
    padding: 0
  }
<<<<<<< HEAD
}), C0 = x(bo)({
=======
}), Qh = x(Ao)({
>>>>>>> main
  position: "absolute",
  top: 4,
  right: -24,
  cursor: "pointer"
<<<<<<< HEAD
}), yc = /* @__PURE__ */ a(({
=======
}), Wu = /* @__PURE__ */ a(({
>>>>>>> main
  open: e,
  onOpenChange: t,
  fileSearchQuery: o,
  setFileSearchQuery: i,
<<<<<<< HEAD
  isLoading: r,
  error: n,
  searchResults: l,
  onCreateNewStory: u,
  setError: c,
  container: d
}) => {
  let [p, m] = zu(), [h, b] = K(m.height), [, f] = ta(), [y, S] = K(o);
  return V(() => {
    h < m.height && b(m.height);
  }, [m.height, h]), /* @__PURE__ */ s.createElement(
    b0,
    {
      height: y0,
=======
  isLoading: n,
  error: r,
  searchResults: l,
  onCreateNewStory: u,
  setError: c,
  container: p
}) => {
  let [d, g] = mu(), [h, y] = $(g.height), [, f] = ds(), [b, I] = $(o);
  return j(() => {
    h < g.height && y(g.height);
  }, [g.height, h]), /* @__PURE__ */ s.createElement(
    jh,
    {
      height: Wh,
>>>>>>> main
      width: 440,
      open: e,
      onOpenChange: t,
      onEscapeKeyDown: () => {
        t(!1);
      },
      onInteractOutside: () => {
        t(!1);
      },
<<<<<<< HEAD
      container: d
    },
    /* @__PURE__ */ s.createElement(v0, { height: o === "" ? m.height : h }, /* @__PURE__ */ s.createElement(x0, { ref: p }, /* @__PURE__ */ s.
    createElement(At.Header, null, /* @__PURE__ */ s.createElement(At.Title, null, "Add a new story"), /* @__PURE__ */ s.createElement(At.Description,
    null, "We will create a new story for your component")), /* @__PURE__ */ s.createElement(S0, null, /* @__PURE__ */ s.createElement(w0, null,
    /* @__PURE__ */ s.createElement(So, null)), /* @__PURE__ */ s.createElement(
      I0,
=======
      container: p
    },
    /* @__PURE__ */ s.createElement(Vh, { height: o === "" ? g.height : h }, /* @__PURE__ */ s.createElement(Kh, { ref: d }, /* @__PURE__ */ s.
    createElement(Et.Header, null, /* @__PURE__ */ s.createElement(Et.Title, null, "Add a new story"), /* @__PURE__ */ s.createElement(Et.Description,
    null, "We will create a new story for your component")), /* @__PURE__ */ s.createElement(Uh, null, /* @__PURE__ */ s.createElement(Gh, null,
    /* @__PURE__ */ s.createElement(No, null)), /* @__PURE__ */ s.createElement(
      $h,
>>>>>>> main
      {
        placeholder: "./components/**/*.tsx",
        type: "search",
        required: !0,
        autoFocus: !0,
<<<<<<< HEAD
        value: y,
        onChange: (E) => {
          let g = E.target.value;
          S(g), f(() => {
            i(g);
          });
        }
      }
    ), r && /* @__PURE__ */ s.createElement(E0, null, /* @__PURE__ */ s.createElement(ut, null))), /* @__PURE__ */ s.createElement(
      gc,
      {
        errorItemId: n?.selectedItemId,
        isLoading: r,
=======
        value: b,
        onChange: (_) => {
          let m = _.target.value;
          I(m), f(() => {
            i(m);
          });
        }
      }
    ), n && /* @__PURE__ */ s.createElement(Yh, null, /* @__PURE__ */ s.createElement(mt, null))), /* @__PURE__ */ s.createElement(
      zu,
      {
        errorItemId: r?.selectedItemId,
        isLoading: n,
>>>>>>> main
        searchResults: l,
        onNewStory: u
      }
    ))),
<<<<<<< HEAD
    n && o !== "" && /* @__PURE__ */ s.createElement(T0, null, /* @__PURE__ */ s.createElement("div", null, n.error), /* @__PURE__ */ s.createElement(
      C0,
=======
    r && o !== "" && /* @__PURE__ */ s.createElement(qh, null, /* @__PURE__ */ s.createElement("div", null, r.error), /* @__PURE__ */ s.createElement(
      Qh,
>>>>>>> main
      {
        onClick: () => {
          c(null);
        }
      }
    ))
  );
}, "FileSearchModal");

// src/manager/components/sidebar/FileSearchModal.utils.tsx
<<<<<<< HEAD
function bc(e) {
  return Object.keys(e).reduce(
    (o, i) => {
      let r = e[i];
      if (typeof r.control == "object" && "type" in r.control)
        switch (r.control.type) {
=======
function ju(e) {
  return Object.keys(e).reduce(
    (o, i) => {
      let n = e[i];
      if (typeof n.control == "object" && "type" in n.control)
        switch (n.control.type) {
>>>>>>> main
          case "object":
            o[i] = {};
            break;
          case "inline-radio":
          case "radio":
          case "inline-check":
          case "check":
          case "select":
          case "multi-select":
<<<<<<< HEAD
            o[i] = r.control.options?.[0];
=======
            o[i] = n.control.options?.[0];
>>>>>>> main
            break;
          case "color":
            o[i] = "#000000";
            break;
          default:
            break;
        }
<<<<<<< HEAD
      return Nr(r.type, o, i), o;
=======
      return vr(n.type, o, i), o;
>>>>>>> main
    },
    {}
  );
}
<<<<<<< HEAD
a(bc, "extractSeededRequiredArgs");
function Nr(e, t, o) {
=======
a(ju, "extractSeededRequiredArgs");
function vr(e, t, o) {
>>>>>>> main
  if (!(typeof e == "string" || !e.required))
    switch (e.name) {
      case "boolean":
        t[o] = !0;
        break;
      case "number":
        t[o] = 0;
        break;
      case "string":
        t[o] = o;
        break;
      case "array":
        t[o] = [];
        break;
      case "object":
<<<<<<< HEAD
        t[o] = {}, Object.entries(e.value ?? {}).forEach(([i, r]) => {
          Nr(r, t[o], i);
=======
        t[o] = {}, Object.entries(e.value ?? {}).forEach(([i, n]) => {
          vr(n, t[o], i);
>>>>>>> main
        });
        break;
      case "function":
        t[o] = () => {
        };
        break;
      case "intersection":
        e.value?.every((i) => i.name === "object") && (t[o] = {}, e.value?.forEach((i) => {
<<<<<<< HEAD
          i.name === "object" && Object.entries(i.value ?? {}).forEach(([r, n]) => {
            Nr(n, t[o], r);
=======
          i.name === "object" && Object.entries(i.value ?? {}).forEach(([n, r]) => {
            vr(r, t[o], n);
>>>>>>> main
          });
        }));
        break;
      case "union":
<<<<<<< HEAD
        e.value?.[0] !== void 0 && Nr(e.value[0], t, o);
=======
        e.value?.[0] !== void 0 && vr(e.value[0], t, o);
>>>>>>> main
        break;
      case "enum":
        e.value?.[0] !== void 0 && (t[o] = e.value?.[0]);
        break;
      case "other":
        typeof e.value == "string" && e.value === "tuple" && (t[o] = []);
        break;
      default:
        break;
    }
}
<<<<<<< HEAD
a(Nr, "setArgType");
async function Fr(e, t, o = 1) {
=======
a(vr, "setArgType");
async function xr(e, t, o = 1) {
>>>>>>> main
  if (o > 10)
    throw new Error("We could not select the new story. Please try again.");
  try {
    await e(t);
  } catch {
<<<<<<< HEAD
    return await new Promise((r) => setTimeout(r, 500)), Fr(e, t, o + 1);
  }
}
a(Fr, "trySelectNewStory");

// src/manager/components/sidebar/CreateNewStoryFileModal.tsx
var _0 = /* @__PURE__ */ a((e) => JSON.stringify(e, (t, o) => typeof o == "function" ? "__sb_empty_function_arg__" : o), "stringifyArgs"), vc = /* @__PURE__ */ a(
({ open: e, onOpenChange: t }) => {
  let [o, i] = K(!1), [r, n] = K(""), l = Hu(r, 600), u = ea(l), c = q(null), [d, p] = K(
    null
  ), m = oe(), [h, b] = K(null), f = A(
    (g) => {
      m.addNotification({
        id: "create-new-story-file-success",
        content: {
          headline: "Story file created",
          subHeadline: `${g} was created`
        },
        duration: 8e3,
        icon: /* @__PURE__ */ s.createElement(Be, null)
      }), t(!1);
    },
    [m, t]
  ), y = A(() => {
    m.addNotification({
=======
    return await new Promise((n) => setTimeout(n, 500)), xr(e, t, o + 1);
  }
}
a(xr, "trySelectNewStory");

// src/manager/components/sidebar/CreateNewStoryFileModal.tsx
var Xh = /* @__PURE__ */ a((e) => JSON.stringify(e, (t, o) => typeof o == "function" ? "__sb_empty_function_arg__" : o), "stringifyArgs"), Vu = /* @__PURE__ */ a(
({ open: e, onOpenChange: t }) => {
  let [o, i] = $(!1), [n, r] = $(""), l = fu(n, 600), u = ps(l), c = Y(null), [p, d] = $(
    null
  ), g = oe(), [h, y] = $(null), f = A(
    (m) => {
      g.addNotification({
        id: "create-new-story-file-success",
        content: {
          headline: "Story file created",
          subHeadline: `${m} was created`
        },
        duration: 8e3,
        icon: /* @__PURE__ */ s.createElement(We, null)
      }), t(!1);
    },
    [g, t]
  ), b = A(() => {
    g.addNotification({
>>>>>>> main
      id: "create-new-story-file-error",
      content: {
        headline: "Story already exists",
        subHeadline: "Successfully navigated to existing story"
      },
      duration: 8e3,
<<<<<<< HEAD
      icon: /* @__PURE__ */ s.createElement(Be, null)
    }), t(!1);
  }, [m, t]), S = A(() => {
    i(!0);
    let g = He.getChannel(), v = /* @__PURE__ */ a((I) => {
      I.id === u && (I.success ? b(I.payload.files) : p({ error: I.error }), g.off(qo, v), i(!1), c.current = null);
    }, "set");
    return g.on(qo, v), u !== "" && c.current !== u ? (c.current = u, g.emit(ua, {
      id: u,
      payload: {}
    })) : (b(null), i(!1)), () => {
      g.off(qo, v);
    };
  }, [u]), E = A(
    async ({
      componentExportName: g,
      componentFilePath: v,
      componentIsDefaultExport: I,
      componentExportCount: w,
      selectedItemId: O
    }) => {
      try {
        let _ = He.getChannel(), k = await Zo(_, aa, la, {
          componentExportName: g,
          componentFilePath: v,
          componentIsDefaultExport: I,
          componentExportCount: w
        });
        p(null);
        let T = k.storyId;
        await Fr(m.selectStory, T);
        try {
          let P = (await Zo(_, ra, na, {
            storyId: T
          })).argTypes, D = bc(P);
          await Zo(
            _,
            pa,
            da,
            {
              args: _0(D),
              importPath: k.storyFilePath,
              csfId: T
=======
      icon: /* @__PURE__ */ s.createElement(We, null)
    }), t(!1);
  }, [g, t]), I = A(() => {
    i(!0);
    let m = Ye.getChannel(), v = /* @__PURE__ */ a((S) => {
      S.id === u && (S.success ? y(S.payload.files) : d({ error: S.error }), m.off(Fo, v), i(!1), c.current = null);
    }, "set");
    return m.on(Fo, v), u !== "" && c.current !== u ? (c.current = u, m.emit(Js, {
      id: u,
      payload: {}
    })) : (y(null), i(!1)), () => {
      m.off(Fo, v);
    };
  }, [u]), _ = A(
    async ({
      componentExportName: m,
      componentFilePath: v,
      componentIsDefaultExport: S,
      componentExportCount: E,
      selectedItemId: T
    }) => {
      try {
        let C = Ye.getChannel(), k = await Ho(C, Xs, Zs, {
          componentExportName: m,
          componentFilePath: v,
          componentIsDefaultExport: S,
          componentExportCount: E
        });
        d(null);
        let w = k.storyId;
        await xr(g.selectStory, w);
        try {
          let P = (await Ho(C, Gs, Ys, {
            storyId: w
          })).argTypes, D = ju(P);
          await Ho(
            C,
            ta,
            oa,
            {
              args: Xh(D),
              importPath: k.storyFilePath,
              csfId: w
>>>>>>> main
            }
          );
        } catch {
        }
<<<<<<< HEAD
        f(g), S();
      } catch (_) {
        switch (_?.payload?.type) {
          case "STORY_FILE_EXISTS":
            let k = _;
            await Fr(m.selectStory, k.payload.kind), y();
            break;
          default:
            p({ selectedItemId: O, error: _?.message });
=======
        f(m), I();
      } catch (C) {
        switch (C?.payload?.type) {
          case "STORY_FILE_EXISTS":
            let k = C;
            await xr(g.selectStory, k.payload.kind), b();
            break;
          default:
            d({ selectedItemId: T, error: C?.message });
>>>>>>> main
            break;
        }
      }
    },
<<<<<<< HEAD
    [m?.selectStory, f, S, y]
  );
  return V(() => {
    p(null);
  }, [u]), V(() => S(), [S]), /* @__PURE__ */ s.createElement(
    yc,
    {
      error: d,
      fileSearchQuery: r,
      fileSearchQueryDeferred: u,
      onCreateNewStory: E,
=======
    [g?.selectStory, f, I, b]
  );
  return j(() => {
    d(null);
  }, [u]), j(() => I(), [I]), /* @__PURE__ */ s.createElement(
    Wu,
    {
      error: p,
      fileSearchQuery: n,
      fileSearchQueryDeferred: u,
      onCreateNewStory: _,
>>>>>>> main
      isLoading: o,
      onOpenChange: t,
      open: e,
      searchResults: h,
<<<<<<< HEAD
      setError: p,
      setFileSearchQuery: n
=======
      setError: d,
      setFileSearchQuery: r
>>>>>>> main
    }
  );
}, "CreateNewStoryFileModal");

// src/manager/components/sidebar/HighlightStyles.tsx
<<<<<<< HEAD
var xc = /* @__PURE__ */ a(({ refId: e, itemId: t }) => /* @__PURE__ */ s.createElement(
  eo,
  {
    styles: ({ color: o }) => {
      let i = Te(0.85, o.secondary);
=======
var Ku = /* @__PURE__ */ a(({ refId: e, itemId: t }) => /* @__PURE__ */ s.createElement(
  Ut,
  {
    styles: ({ color: o }) => {
      let i = we(0.85, o.secondary);
>>>>>>> main
      return {
        [`[data-ref-id="${e}"][data-item-id="${t}"]:not([data-selected="true"])`]: {
          '&[data-nodetype="component"], &[data-nodetype="group"]': {
            background: i,
            "&:hover, &:focus": { background: i }
          },
          '&[data-nodetype="story"], &[data-nodetype="document"]': {
            color: o.defaultText,
            background: i,
            "&:hover, &:focus": { background: i }
          }
        }
      };
    }
  }
), "HighlightStyles");

// src/manager/utils/tree.ts
<<<<<<< HEAD
var co = Ve(Oi(), 1);
var { document: zi, window: k0 } = se, Rr = /* @__PURE__ */ a((e, t) => !t || t === at ? e : `${t}_${e}`, "createId"), wc = /* @__PURE__ */ a(
(e, t) => `${zi.location.pathname}?path=/${e.type}/${Rr(e.id, t)}`, "getLink");
var Ic = (0, co.default)(1e3)((e, t) => t[e]), O0 = (0, co.default)(1e3)((e, t) => {
  let o = Ic(e, t);
  return o && o.type !== "root" ? Ic(o.parent, t) : void 0;
}), Ec = (0, co.default)(1e3)((e, t) => {
  let o = O0(e, t);
  return o ? [o, ...Ec(o.id, t)] : [];
}), Fo = (0, co.default)(1e3)(
  (e, t) => Ec(t, e).map((o) => o.id)
), st = (0, co.default)(1e3)((e, t, o) => {
  let i = e[t];
  return (i.type === "story" || i.type === "docs" ? [] : i.children).reduce((n, l) => {
    let u = e[l];
    return !u || o && (u.type === "story" || u.type === "docs") || n.push(l, ...st(e, l, o)), n;
  }, []);
});
function Tc(e, t) {
  let o = e.type !== "root" && e.parent ? t.index[e.parent] : null;
  return o ? [...Tc(o, t), o.name] : t.id === at ? [] : [t.title || t.id];
}
a(Tc, "getPath");
var Wi = /* @__PURE__ */ a((e, t) => ({ ...e, refId: t.id, path: Tc(e, t) }), "searchItem");
function Cc(e, t, o) {
  let i = t + o % e.length;
  return i < 0 && (i = e.length + i), i >= e.length && (i -= e.length), i;
}
a(Cc, "cycle");
var zt = /* @__PURE__ */ a((e, t = !1) => {
=======
var eo = ze(zn(), 1);
var { document: Xn, window: Zh } = se, Sr = /* @__PURE__ */ a((e, t) => !t || t === st ? e : `${t}_${e}`, "createId"), Gu = /* @__PURE__ */ a(
(e, t) => `${Xn.location.pathname}?path=/${e.type}/${Sr(e.id, t)}`, "getLink");
var $u = (0, eo.default)(1e3)((e, t) => t[e]), Jh = (0, eo.default)(1e3)((e, t) => {
  let o = $u(e, t);
  return o && o.type !== "root" ? $u(o.parent, t) : void 0;
}), Yu = (0, eo.default)(1e3)((e, t) => {
  let o = Jh(e, t);
  return o ? [o, ...Yu(o.id, t)] : [];
}), bo = (0, eo.default)(1e3)(
  (e, t) => Yu(t, e).map((o) => o.id)
), it = (0, eo.default)(1e3)((e, t, o) => {
  let i = e[t];
  return (i.type === "story" || i.type === "docs" ? [] : i.children).reduce((r, l) => {
    let u = e[l];
    return !u || o && (u.type === "story" || u.type === "docs") || r.push(l, ...it(e, l, o)), r;
  }, []);
});
function qu(e, t) {
  let o = e.type !== "root" && e.parent ? t.index[e.parent] : null;
  return o ? [...qu(o, t), o.name] : t.id === st ? [] : [t.title || t.id];
}
a(qu, "getPath");
var Zn = /* @__PURE__ */ a((e, t) => ({ ...e, refId: t.id, path: qu(e, t) }), "searchItem");
function Qu(e, t, o) {
  let i = t + o % e.length;
  return i < 0 && (i = e.length + i), i >= e.length && (i -= e.length), i;
}
a(Qu, "cycle");
var Dt = /* @__PURE__ */ a((e, t = !1) => {
>>>>>>> main
  if (!e)
    return;
  let { top: o, bottom: i } = e.getBoundingClientRect();
  if (!o || !i)
    return;
<<<<<<< HEAD
  let r = zi?.querySelector("#sidebar-bottom-wrapper")?.getBoundingClientRect().top || k0.innerHeight || zi.documentElement.clientHeight;
  i > r && e.scrollIntoView({ block: t ? "center" : "nearest" });
}, "scrollIntoView"), _c = /* @__PURE__ */ a((e, t, o, i) => {
=======
  let n = Xn?.querySelector("#sidebar-bottom-wrapper")?.getBoundingClientRect().top || Zh.innerHeight || Xn.documentElement.clientHeight;
  i > n && e.scrollIntoView({ block: t ? "center" : "nearest" });
}, "scrollIntoView"), Xu = /* @__PURE__ */ a((e, t, o, i) => {
>>>>>>> main
  switch (!0) {
    case t:
      return "auth";
    case o:
      return "error";
    case e:
      return "loading";
    case i:
      return "empty";
    default:
      return "ready";
  }
<<<<<<< HEAD
}, "getStateType"), Wt = /* @__PURE__ */ a((e, t) => !e || !t ? !1 : e === t ? !0 : Wt(e.parentElement || void 0, t), "isAncestor"), Sc = /* @__PURE__ */ a(
(e) => e.replaceAll(/(\s|-|_)/gi, ""), "removeNoiseFromName"), kc = /* @__PURE__ */ a((e, t) => Sc(e) === Sc(t), "isStoryHoistable");

// src/manager/components/sidebar/Loader.tsx
var Oc = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3], P0 = x.div(
=======
}, "getStateType"), Mt = /* @__PURE__ */ a((e, t) => !e || !t ? !1 : e === t ? !0 : Mt(e.parentElement || void 0, t), "isAncestor"), Uu = /* @__PURE__ */ a(
(e) => e.replaceAll(/(\s|-|_)/gi, ""), "removeNoiseFromName"), Zu = /* @__PURE__ */ a((e, t) => Uu(e) === Uu(t), "isStoryHoistable");

// global-externals:@storybook/core/client-logger
var dM = __STORYBOOK_CLIENT_LOGGER__, { deprecate: fM, logger: Ju, once: mM, pretty: hM } = __STORYBOOK_CLIENT_LOGGER__;

// src/manager/components/sidebar/Loader.tsx
var ec = [0, 0, 1, 1, 2, 3, 3, 3, 1, 1, 1, 2, 2, 2, 3], eg = x.div(
>>>>>>> main
  {
    cursor: "progress",
    fontSize: 13,
    height: "16px",
    marginTop: 4,
    marginBottom: 4,
    alignItems: "center",
    overflow: "hidden"
  },
  ({ depth: e = 0 }) => ({
    marginLeft: e * 15,
    maxWidth: 85 - e * 5
  }),
  ({ theme: e }) => e.animation.inlineGlow,
  ({ theme: e }) => ({
    background: e.appBorderColor
  })
<<<<<<< HEAD
), Ro = x.div({
=======
), vo = x.div({
>>>>>>> main
  display: "flex",
  flexDirection: "column",
  paddingLeft: 20,
  paddingRight: 20
<<<<<<< HEAD
}), Pc = /* @__PURE__ */ a(({ size: e }) => {
  let t = Math.ceil(e / Oc.length), o = Array.from(Array(t)).fill(Oc).flat().slice(0, e);
  return /* @__PURE__ */ s.createElement(Ee, null, o.map((i, r) => /* @__PURE__ */ s.createElement(P0, { depth: i, key: r })));
}, "Loader");

// src/manager/components/sidebar/RefBlocks.tsx
var { window: Ac } = se, A0 = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0
})), Vi = x.div(({ theme: e }) => ({
=======
}), tc = /* @__PURE__ */ a(({ size: e }) => {
  let t = Math.ceil(e / ec.length), o = Array.from(Array(t)).fill(ec).flat().slice(0, e);
  return /* @__PURE__ */ s.createElement(_e, null, o.map((i, n) => /* @__PURE__ */ s.createElement(eg, { depth: i, key: n })));
}, "Loader");

// src/manager/components/sidebar/RefBlocks.tsx
var { window: oc } = se, tg = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0
})), Jn = x.div(({ theme: e }) => ({
>>>>>>> main
  fontSize: e.typography.size.s2,
  lineHeight: "20px",
  margin: 0,
  code: {
    fontSize: e.typography.size.s1
  },
  ul: {
    paddingLeft: 20,
    marginTop: 8,
    marginBottom: 8
  }
<<<<<<< HEAD
})), D0 = x.pre(
=======
})), og = x.pre(
>>>>>>> main
  {
    width: 420,
    boxSizing: "border-box",
    borderRadius: 8,
    overflow: "auto",
    whiteSpace: "pre"
  },
  ({ theme: e }) => ({
    color: e.color.dark
  })
<<<<<<< HEAD
), Dc = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let [o, i] = K(!1), r = A(() => {
    Ac.document.location.reload();
  }, []), n = A((l) => {
    l.preventDefault();
    let u = Ac.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), c = setInterval(() => {
      u ? u.closed && (clearInterval(c), i(!0)) : (lr.error("unable to access loginUrl window"), clearInterval(c));
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(Ro, null, /* @__PURE__ */ s.createElement(ct, null, o ? /* @__PURE__ */ s.createElement(Ee, null, /* @__PURE__ */ s.
  createElement(Vi, null, "Authentication on ", /* @__PURE__ */ s.createElement("strong", null, e), " concluded. Refresh the page to fetch t\
his Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(he, { size: "small", variant: "outline", onClick: r },
  /* @__PURE__ */ s.createElement(ut, null), "Refresh now"))) : /* @__PURE__ */ s.createElement(Ee, null, /* @__PURE__ */ s.createElement(Vi,
  null, "Sign in to browse this Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(he, { size: "smal\
l", variant: "outline", onClick: n }, /* @__PURE__ */ s.createElement(xo, null), "Sign in")))));
}, "AuthBlock"), Mc = /* @__PURE__ */ a(({ error: e }) => /* @__PURE__ */ s.createElement(Ro, null, /* @__PURE__ */ s.createElement(ct, null,
/* @__PURE__ */ s.createElement(A0, null, "Oh no! Something went wrong loading this Storybook.", /* @__PURE__ */ s.createElement("br", null),
/* @__PURE__ */ s.createElement(
  ve,
  {
    tooltip: /* @__PURE__ */ s.createElement(D0, null, /* @__PURE__ */ s.createElement(Ea, { error: e }))
  },
  /* @__PURE__ */ s.createElement(Pe, { isButton: !0 }, "View error ", /* @__PURE__ */ s.createElement(_t, null))
), " ", /* @__PURE__ */ s.createElement(Pe, { withArrow: !0, href: "https://storybook.js.org/docs", cancel: !1, target: "_blank" }, "View do\
cs")))), "ErrorBlock"), M0 = x(ct)({
  display: "flex"
}), L0 = x(ct)({
  flex: 1
}), Lc = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(Ro, null, /* @__PURE__ */ s.createElement(M0, { col: 1 }, /* @__PURE__ */ s.
createElement(L0, null, /* @__PURE__ */ s.createElement(Vi, null, e ? /* @__PURE__ */ s.createElement(s.Fragment, null, "Oh no! Your Storybo\
=======
), rc = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let [o, i] = $(!1), n = A(() => {
    oc.document.location.reload();
  }, []), r = A((l) => {
    l.preventDefault();
    let u = oc.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), c = setInterval(() => {
      u ? u.closed && (clearInterval(c), i(!0)) : (Ju.error("unable to access loginUrl window"), clearInterval(c));
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(vo, null, /* @__PURE__ */ s.createElement(lt, null, o ? /* @__PURE__ */ s.createElement(_e, null, /* @__PURE__ */ s.
  createElement(Jn, null, "Authentication on ", /* @__PURE__ */ s.createElement("strong", null, e), " concluded. Refresh the page to fetch t\
his Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(me, { small: !0, gray: !0, onClick: n }, /* @__PURE__ */ s.
  createElement(mt, null), "Refresh now"))) : /* @__PURE__ */ s.createElement(_e, null, /* @__PURE__ */ s.createElement(Jn, null, "Sign in t\
o browse this Storybook."), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(me, { small: !0, gray: !0, onClick: r },
  /* @__PURE__ */ s.createElement(Mo, null), "Sign in")))));
}, "AuthBlock"), nc = /* @__PURE__ */ a(({ error: e }) => /* @__PURE__ */ s.createElement(vo, null, /* @__PURE__ */ s.createElement(lt, null,
/* @__PURE__ */ s.createElement(tg, null, "Oh no! Something went wrong loading this Storybook.", /* @__PURE__ */ s.createElement("br", null),
/* @__PURE__ */ s.createElement(
  be,
  {
    tooltip: /* @__PURE__ */ s.createElement(og, null, /* @__PURE__ */ s.createElement(Va, { error: e }))
  },
  /* @__PURE__ */ s.createElement(Me, { isButton: !0 }, "View error ", /* @__PURE__ */ s.createElement(Kt, null))
), " ", /* @__PURE__ */ s.createElement(Me, { withArrow: !0, href: "https://storybook.js.org/docs", cancel: !1, target: "_blank" }, "View do\
cs")))), "ErrorBlock"), rg = x(lt)({
  display: "flex"
}), ng = x(lt)({
  flex: 1
}), ic = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(vo, null, /* @__PURE__ */ s.createElement(rg, { col: 1 }, /* @__PURE__ */ s.
createElement(ng, null, /* @__PURE__ */ s.createElement(Jn, null, e ? /* @__PURE__ */ s.createElement(s.Fragment, null, "Oh no! Your Storybo\
>>>>>>> main
ok is empty. Possible reasons why:", /* @__PURE__ */ s.createElement("ul", null, /* @__PURE__ */ s.createElement("li", null, "The glob speci\
fied in ", /* @__PURE__ */ s.createElement("code", null, "main.js"), " isn't correct."), /* @__PURE__ */ s.createElement("li", null, "No sto\
ries are defined in your story files."), /* @__PURE__ */ s.createElement("li", null, "You're using filter-functions, and all stories are fil\
tered away.")), " ") : /* @__PURE__ */ s.createElement(s.Fragment, null, "This composed storybook is empty, maybe you're using filter-functi\
<<<<<<< HEAD
ons, and all stories are filtered away."))))), "EmptyBlock"), Nc = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(Ro, null,
/* @__PURE__ */ s.createElement(Pc, { size: e ? 17 : 5 })), "LoaderBlock");

// src/manager/components/sidebar/RefIndicator.tsx
var { document: N0, window: F0 } = se, R0 = x.aside(({ theme: e }) => ({
=======
ons, and all stories are filtered away."))))), "EmptyBlock"), sc = /* @__PURE__ */ a(({ isMain: e }) => /* @__PURE__ */ s.createElement(vo, null,
/* @__PURE__ */ s.createElement(tc, { size: e ? 17 : 5 })), "LoaderBlock");

// src/manager/components/sidebar/RefIndicator.tsx
var { document: ig, window: sg } = se, ag = x.aside(({ theme: e }) => ({
>>>>>>> main
  height: 16,
  display: "flex",
  alignItems: "center",
  "& > * + *": {
    marginLeft: e.layoutMargin
  }
<<<<<<< HEAD
})), B0 = x.button(({ theme: e }) => ({
=======
})), lg = x.button(({ theme: e }) => ({
>>>>>>> main
  height: 20,
  width: 20,
  padding: 0,
  margin: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background: "transparent",
  outline: "none",
  border: "1px solid transparent",
  borderRadius: "100%",
  cursor: "pointer",
<<<<<<< HEAD
  color: e.base === "light" ? Te(0.3, e.color.defaultText) : Te(0.6, e.color.defaultText),
=======
  color: e.base === "light" ? we(0.3, e.color.defaultText) : we(0.6, e.color.defaultText),
>>>>>>> main
  "&:hover": {
    color: e.barSelectedColor
  },
  "&:focus": {
    color: e.barSelectedColor,
    borderColor: e.color.secondary
  },
  svg: {
    height: 10,
    width: 10,
    transition: "all 150ms ease-out",
    color: "inherit"
  }
<<<<<<< HEAD
})), Vt = x.span(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), jt = x.a(({ theme: e }) => ({
=======
})), Lt = x.span(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), Nt = x.a(({ theme: e }) => ({
>>>>>>> main
  textDecoration: "none",
  lineHeight: "16px",
  padding: 15,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  color: e.color.defaultText,
  "&:not(:last-child)": {
    borderBottom: `1px solid ${e.appBorderColor}`
  },
  "&:hover": {
    background: e.background.hoverable,
    color: e.color.darker
  },
  "&:link": {
    color: e.color.darker
  },
  "&:active": {
    color: e.color.darker
  },
  "&:focus": {
    color: e.color.darker
  },
  "& > *": {
    flex: 1
  },
  "& > svg": {
    marginTop: 3,
    width: 16,
    height: 16,
    marginRight: 10,
    flex: "unset"
  }
<<<<<<< HEAD
})), H0 = x.div({
=======
})), ug = x.div({
>>>>>>> main
  width: 280,
  boxSizing: "border-box",
  borderRadius: 8,
  overflow: "hidden"
<<<<<<< HEAD
}), z0 = x.div(({ theme: e }) => ({
=======
}), cg = x.div(({ theme: e }) => ({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  fontSize: e.typography.size.s1,
  fontWeight: e.typography.weight.regular,
<<<<<<< HEAD
  color: e.base === "light" ? Te(0.3, e.color.defaultText) : Te(0.6, e.color.defaultText),
=======
  color: e.base === "light" ? we(0.3, e.color.defaultText) : we(0.6, e.color.defaultText),
>>>>>>> main
  "& > * + *": {
    marginLeft: 4
  },
  svg: {
    height: 10,
    width: 10
  }
<<<<<<< HEAD
})), W0 = /* @__PURE__ */ a(({ url: e, versions: t }) => {
  let o = U(() => {
    let i = Object.entries(t).find(([r, n]) => n === e);
    return i && i[0] ? i[0] : "current";
  }, [e, t]);
  return /* @__PURE__ */ s.createElement(z0, null, /* @__PURE__ */ s.createElement("span", null, o), /* @__PURE__ */ s.createElement(_t, null));
}, "CurrentVersion"), Fc = s.memo(
  Js(
    ({ state: e, ...t }, o) => {
      let i = oe(), r = U(() => Object.values(t.index || {}), [t.index]), n = U(
        () => r.filter((u) => u.type === "component").length,
        [r]
      ), l = U(
        () => r.filter((u) => u.type === "docs" || u.type === "story").length,
        [r]
      );
      return /* @__PURE__ */ s.createElement(R0, { ref: o }, /* @__PURE__ */ s.createElement(
        ve,
=======
})), pg = /* @__PURE__ */ a(({ url: e, versions: t }) => {
  let o = K(() => {
    let i = Object.entries(t).find(([n, r]) => r === e);
    return i && i[0] ? i[0] : "current";
  }, [e, t]);
  return /* @__PURE__ */ s.createElement(cg, null, /* @__PURE__ */ s.createElement("span", null, o), /* @__PURE__ */ s.createElement(Kt, null));
}, "CurrentVersion"), ac = s.memo(
  cs(
    ({ state: e, ...t }, o) => {
      let i = oe(), n = K(() => Object.values(t.index || {}), [t.index]), r = K(
        () => n.filter((u) => u.type === "component").length,
        [n]
      ), l = K(
        () => n.filter((u) => u.type === "docs" || u.type === "story").length,
        [n]
      );
      return /* @__PURE__ */ s.createElement(ag, { ref: o }, /* @__PURE__ */ s.createElement(
        be,
>>>>>>> main
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
<<<<<<< HEAD
          tooltip: /* @__PURE__ */ s.createElement(H0, null, /* @__PURE__ */ s.createElement(ct, { row: 0 }, e === "loading" && /* @__PURE__ */ s.
          createElement(G0, { url: t.url }), (e === "error" || e === "empty") && /* @__PURE__ */ s.createElement(U0, { url: t.url }), e === "\
ready" && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(V0, { url: t.url, componentCount: n, leafCount: l }),
          t.sourceUrl && /* @__PURE__ */ s.createElement(j0, { url: t.sourceUrl })), e === "auth" && /* @__PURE__ */ s.createElement(K0, { ...t }),
          t.type === "auto-inject" && e !== "error" && /* @__PURE__ */ s.createElement(q0, null), e !== "loading" && /* @__PURE__ */ s.createElement(
          $0, null)))
        },
        /* @__PURE__ */ s.createElement(B0, { "data-action": "toggle-indicator", "aria-label": "toggle indicator" }, /* @__PURE__ */ s.createElement(
        Xo, null))
      ), t.versions && Object.keys(t.versions).length ? /* @__PURE__ */ s.createElement(
        ve,
=======
          tooltip: /* @__PURE__ */ s.createElement(ug, null, /* @__PURE__ */ s.createElement(lt, { row: 0 }, e === "loading" && /* @__PURE__ */ s.
          createElement(yg, { url: t.url }), (e === "error" || e === "empty") && /* @__PURE__ */ s.createElement(gg, { url: t.url }), e === "\
ready" && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(dg, { url: t.url, componentCount: r, leafCount: l }),
          t.sourceUrl && /* @__PURE__ */ s.createElement(fg, { url: t.sourceUrl })), e === "auth" && /* @__PURE__ */ s.createElement(mg, { ...t }),
          t.type === "auto-inject" && e !== "error" && /* @__PURE__ */ s.createElement(bg, null), e !== "loading" && /* @__PURE__ */ s.createElement(
          hg, null)))
        },
        /* @__PURE__ */ s.createElement(lg, { "data-action": "toggle-indicator", "aria-label": "toggle indicator" }, /* @__PURE__ */ s.createElement(
        nn, null))
      ), t.versions && Object.keys(t.versions).length ? /* @__PURE__ */ s.createElement(
        be,
>>>>>>> main
        {
          placement: "bottom-start",
          trigger: "click",
          closeOnOutsideClick: !0,
          tooltip: (u) => /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
            ot,
            {
              links: Object.entries(t.versions).map(([c, d]) => ({
                icon: d === t.url ? /* @__PURE__ */ s.createElement(Be, null) : void 0,
                id: c,
                title: c,
                href: d,
                onClick: /* @__PURE__ */ a((p, m) => {
                  p.preventDefault(), i.changeRefVersion(t.id, m.href), u.onHide();
=======
            gt,
            {
              links: Object.entries(t.versions).map(([c, p]) => ({
                icon: p === t.url ? /* @__PURE__ */ s.createElement(We, null) : void 0,
                id: c,
                title: c,
                href: p,
                onClick: /* @__PURE__ */ a((d, g) => {
                  d.preventDefault(), i.changeRefVersion(t.id, g.href), u.onHide();
>>>>>>> main
                }, "onClick")
              }))
            }
          )
        },
<<<<<<< HEAD
        /* @__PURE__ */ s.createElement(W0, { url: t.url, versions: t.versions })
      ) : null);
    }
  )
), V0 = /* @__PURE__ */ a(({ url: e, componentCount: t, leafCount: o }) => {
  let i = De();
  return /* @__PURE__ */ s.createElement(jt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(Xo,
  { color: i.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Vt, null, "View external Story\
book"), /* @__PURE__ */ s.createElement("div", null, "Explore ", t, " components and ", o, " stories in a new browser tab.")));
}, "ReadyMessage"), j0 = /* @__PURE__ */ a(({ url: e }) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(jt, { href: e, target: "_blank" }, /* @__PURE__ */ s.createElement(Hn, { color: t.color.secondary }),
  /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Vt, null, "View source code")));
}, "SourceCodeMessage"), K0 = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let o = De(), i = A((r) => {
    r.preventDefault();
    let n = F0.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), l = setInterval(() => {
      n ? n.closed && (clearInterval(l), N0.location.reload()) : clearInterval(l);
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(jt, { onClick: i }, /* @__PURE__ */ s.createElement(xo, { color: o.color.gold }), /* @__PURE__ */ s.
  createElement("div", null, /* @__PURE__ */ s.createElement(Vt, null, "Log in required"), /* @__PURE__ */ s.createElement("div", null, "You\
 need to authenticate to view this Storybook's components.")));
}, "LoginRequiredMessage"), $0 = /* @__PURE__ */ a(() => {
  let e = De();
  return /* @__PURE__ */ s.createElement(jt, { href: "https://storybook.js.org/docs/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ s.
  createElement(kt, { color: e.color.green }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Vt, null, "Read \
Composition docs"), /* @__PURE__ */ s.createElement("div", null, "Learn how to combine multiple Storybooks into one.")));
}, "ReadDocsMessage"), U0 = /* @__PURE__ */ a(({ url: e }) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(jt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(go,
  { color: t.color.negative }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Vt, null, "Something went wrong"),
  /* @__PURE__ */ s.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
}, "ErrorOccurredMessage"), G0 = /* @__PURE__ */ a(({ url: e }) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(jt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(Gn,
  { color: t.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Vt, null, "Please wait"), /* @__PURE__ */ s.
  createElement("div", null, "This Storybook is loading.")));
}, "LoadingMessage"), q0 = /* @__PURE__ */ a(() => {
  let e = De();
  return /* @__PURE__ */ s.createElement(jt, { href: "https://storybook.js.org/docs/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ s.
  createElement(Rn, { color: e.color.gold }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Vt, null, "Reduce\
=======
        /* @__PURE__ */ s.createElement(pg, { url: t.url, versions: t.versions })
      ) : null);
    }
  )
), dg = /* @__PURE__ */ a(({ url: e, componentCount: t, leafCount: o }) => {
  let i = Ae();
  return /* @__PURE__ */ s.createElement(Nt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(nn,
  { color: i.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "View external Story\
book"), /* @__PURE__ */ s.createElement("div", null, "Explore ", t, " components and ", o, " stories in a new browser tab.")));
}, "ReadyMessage"), fg = /* @__PURE__ */ a(({ url: e }) => {
  let t = Ae();
  return /* @__PURE__ */ s.createElement(Nt, { href: e, target: "_blank" }, /* @__PURE__ */ s.createElement(As, { color: t.color.secondary }),
  /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "View source code")));
}, "SourceCodeMessage"), mg = /* @__PURE__ */ a(({ loginUrl: e, id: t }) => {
  let o = Ae(), i = A((n) => {
    n.preventDefault();
    let r = sg.open(e, `storybook_auth_${t}`, "resizable,scrollbars"), l = setInterval(() => {
      r ? r.closed && (clearInterval(l), ig.location.reload()) : clearInterval(l);
    }, 1e3);
  }, []);
  return /* @__PURE__ */ s.createElement(Nt, { onClick: i }, /* @__PURE__ */ s.createElement(Mo, { color: o.color.gold }), /* @__PURE__ */ s.
  createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Log in required"), /* @__PURE__ */ s.createElement("div", null, "You\
 need to authenticate to view this Storybook's components.")));
}, "LoginRequiredMessage"), hg = /* @__PURE__ */ a(() => {
  let e = Ae();
  return /* @__PURE__ */ s.createElement(Nt, { href: "https://storybook.js.org/docs/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ s.
  createElement($t, { color: e.color.green }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Read \
Composition docs"), /* @__PURE__ */ s.createElement("div", null, "Learn how to combine multiple Storybooks into one.")));
}, "ReadDocsMessage"), gg = /* @__PURE__ */ a(({ url: e }) => {
  let t = Ae();
  return /* @__PURE__ */ s.createElement(Nt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(Oo,
  { color: t.color.negative }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Something went wrong"),
  /* @__PURE__ */ s.createElement("div", null, "This external Storybook didn't load. Debug it in a new tab now.")));
}, "ErrorOccurredMessage"), yg = /* @__PURE__ */ a(({ url: e }) => {
  let t = Ae();
  return /* @__PURE__ */ s.createElement(Nt, { href: e.replace(/\/?$/, "/index.html"), target: "_blank" }, /* @__PURE__ */ s.createElement(zs,
  { color: t.color.secondary }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Please wait"), /* @__PURE__ */ s.
  createElement("div", null, "This Storybook is loading.")));
}, "LoadingMessage"), bg = /* @__PURE__ */ a(() => {
  let e = Ae();
  return /* @__PURE__ */ s.createElement(Nt, { href: "https://storybook.js.org/docs/sharing/storybook-composition", target: "_blank" }, /* @__PURE__ */ s.
  createElement(Os, { color: e.color.gold }), /* @__PURE__ */ s.createElement("div", null, /* @__PURE__ */ s.createElement(Lt, null, "Reduce\
>>>>>>> main
 lag"), /* @__PURE__ */ s.createElement("div", null, "Learn how to speed up Composition performance.")));
}, "PerformanceDegradedMessage");

// src/manager/components/sidebar/IconSymbols.tsx
<<<<<<< HEAD
var Y0 = x.svg`
=======
var vg = x.svg`
>>>>>>> main
  position: absolute;
  width: 0;
  height: 0;
  display: inline-block;
  shape-rendering: inherit;
  vertical-align: middle;
<<<<<<< HEAD
`, Rc = "icon--group", Bc = "icon--component", Hc = "icon--document", zc = "icon--story", Wc = "icon--success", Vc = "icon--error", jc = "ic\
on--warning", Kc = "icon--dot", $c = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Y0, { "data-chromatic": "ignore" }, /* @__PURE__ */ s.
createElement("symbol", { id: Rc }, /* @__PURE__ */ s.createElement(
=======
`, lc = "icon--group", uc = "icon--component", cc = "icon--document", pc = "icon--story", dc = "icon--success", fc = "icon--error", mc = "ic\
on--warning", hc = "icon--dot", gc = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(vg, { "data-chromatic": "ignore" }, /* @__PURE__ */ s.
createElement("symbol", { id: lc }, /* @__PURE__ */ s.createElement(
>>>>>>> main
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M6.586 3.504l-1.5-1.5H1v9h12v-7.5H6.586zm.414-1L5.793 1.297a1 1 0 00-.707-.293H.5a.5.5 0 00-.5.5v10a.5.5 0 00.5.5h13a.5.5 0 00.5-.5v\
-8.5a.5.5 0 00-.5-.5H7z",
    fill: "currentColor"
  }
<<<<<<< HEAD
)), /* @__PURE__ */ s.createElement("symbol", { id: Bc }, /* @__PURE__ */ s.createElement(
=======
)), /* @__PURE__ */ s.createElement("symbol", { id: uc }, /* @__PURE__ */ s.createElement(
>>>>>>> main
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 1.004a2.5 2.5 0 00-2.5 2.5v7a2.5 2.5 0 002.5 2.5h7a2.5 2.5 0 002.5-2.5v-7a2.5 2.5 0 00-2.5-2.5h-7zm8.5 5.5H7.5v-4.5h3a1.5 1.5 0\
 011.5 1.5v3zm0 1v3a1.5 1.5 0 01-1.5 1.5h-3v-4.5H12zm-5.5 4.5v-4.5H2v3a1.5 1.5 0 001.5 1.5h3zM2 6.504h4.5v-4.5h-3a1.5 1.5 0 00-1.5 1.5v3z",
    fill: "currentColor"
  }
<<<<<<< HEAD
)), /* @__PURE__ */ s.createElement("symbol", { id: Hc }, /* @__PURE__ */ s.createElement(
=======
)), /* @__PURE__ */ s.createElement("symbol", { id: cc }, /* @__PURE__ */ s.createElement(
>>>>>>> main
  "path",
  {
    d: "M4 5.5a.5.5 0 01.5-.5h5a.5.5 0 010 1h-5a.5.5 0 01-.5-.5zM4.5 7.5a.5.5 0 000 1h5a.5.5 0 000-1h-5zM4 10.5a.5.5 0 01.5-.5h5a.5.5 0 010 \
1h-5a.5.5 0 01-.5-.5z",
    fill: "currentColor"
  }
), /* @__PURE__ */ s.createElement(
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M1.5 0a.5.5 0 00-.5.5v13a.5.5 0 00.5.5h11a.5.5 0 00.5-.5V3.207a.5.5 0 00-.146-.353L10.146.146A.5.5 0 009.793 0H1.5zM2 1h7.5v2a.5.5 0\
 00.5.5h2V13H2V1z",
    fill: "currentColor"
  }
<<<<<<< HEAD
)), /* @__PURE__ */ s.createElement("symbol", { id: zc }, /* @__PURE__ */ s.createElement(
=======
)), /* @__PURE__ */ s.createElement("symbol", { id: pc }, /* @__PURE__ */ s.createElement(
>>>>>>> main
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M3.5 0h7a.5.5 0 01.5.5v13a.5.5 0 01-.454.498.462.462 0 01-.371-.118L7 11.159l-3.175 2.72a.46.46 0 01-.379.118A.5.5 0 013 13.5V.5a.5.\
5 0 01.5-.5zM4 12.413l2.664-2.284a.454.454 0 01.377-.128.498.498 0 01.284.12L10 12.412V1H4v11.413z",
    fill: "currentColor"
  }
<<<<<<< HEAD
)), /* @__PURE__ */ s.createElement("symbol", { id: Wc }, /* @__PURE__ */ s.createElement(
=======
)), /* @__PURE__ */ s.createElement("symbol", { id: dc }, /* @__PURE__ */ s.createElement(
>>>>>>> main
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.854 4.146a.5.5 0 010 .708l-5 5a.5.5 0 01-.708 0l-2-2a.5.5 0 11.708-.708L5.5 8.793l4.646-4.647a.5.5 0 01.708 0z",
    fill: "currentColor"
  }
<<<<<<< HEAD
)), /* @__PURE__ */ s.createElement("symbol", { id: Vc }, /* @__PURE__ */ s.createElement(
=======
)), /* @__PURE__ */ s.createElement("symbol", { id: fc }, /* @__PURE__ */ s.createElement(
>>>>>>> main
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7 4a3 3 0 100 6 3 3 0 000-6zM3 7a4 4 0 118 0 4 4 0 01-8 0z",
    fill: "currentColor"
  }
<<<<<<< HEAD
)), /* @__PURE__ */ s.createElement("symbol", { id: jc }, /* @__PURE__ */ s.createElement(
=======
)), /* @__PURE__ */ s.createElement("symbol", { id: mc }, /* @__PURE__ */ s.createElement(
>>>>>>> main
  "path",
  {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M7.206 3.044a.498.498 0 01.23.212l3.492 5.985a.494.494 0 01.006.507.497.497 0 01-.443.252H3.51a.499.499 0 01-.437-.76l3.492-5.984a.4\
97.497 0 01.642-.212zM7 4.492L4.37 9h5.26L7 4.492z",
    fill: "currentColor"
  }
<<<<<<< HEAD
)), /* @__PURE__ */ s.createElement("symbol", { id: Kc }, /* @__PURE__ */ s.createElement("circle", { cx: "3", cy: "3", r: "3", fill: "curre\
ntColor" }))), "IconSymbols"), Me = /* @__PURE__ */ a(({ type: e }) => e === "group" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${Rc}` }) : e === "component" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Bc}` }) : e === "document" ? /* @__PURE__ */ s.createElement(
"use", { xlinkHref: `#${Hc}` }) : e === "story" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${zc}` }) : e === "success" ? /* @__PURE__ */ s.
createElement("use", { xlinkHref: `#${Wc}` }) : e === "error" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${Vc}` }) : e === "war\
ning" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${jc}` }) : e === "dot" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${Kc}` }) : null, "UseSymbol");

// src/manager/utils/status.tsx
var Q0 = x(Cn)({
=======
)), /* @__PURE__ */ s.createElement("symbol", { id: hc }, /* @__PURE__ */ s.createElement("circle", { cx: "3", cy: "3", r: "3", fill: "curre\
ntColor" }))), "IconSymbols"), Ne = /* @__PURE__ */ a(({ type: e }) => e === "group" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${lc}` }) : e === "component" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${uc}` }) : e === "document" ? /* @__PURE__ */ s.createElement(
"use", { xlinkHref: `#${cc}` }) : e === "story" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${pc}` }) : e === "success" ? /* @__PURE__ */ s.
createElement("use", { xlinkHref: `#${dc}` }) : e === "error" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${fc}` }) : e === "war\
ning" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `#${mc}` }) : e === "dot" ? /* @__PURE__ */ s.createElement("use", { xlinkHref: `\
#${hc}` }) : null, "UseSymbol");

// src/manager/utils/status.tsx
var xg = x(bs)({
>>>>>>> main
  // specificity hack
  "&&&": {
    width: 6,
    height: 6
  }
<<<<<<< HEAD
}), X0 = x(Q0)(({ theme: { animation: e, color: t, base: o } }) => ({
  // specificity hack
  animation: `${e.glow} 1.5s ease-in-out infinite`,
  color: o === "light" ? t.mediumdark : t.darker
})), Z0 = [
  "status-value:unknown",
  "status-value:pending",
  "status-value:success",
  "status-value:warning",
  "status-value:error"
], Bo = {
  "status-value:unknown": [null, null],
  "status-value:pending": [/* @__PURE__ */ s.createElement(X0, { key: "icon" }), "currentColor"],
  "status-value:success": [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Me, { type: "success" })),
    "currentColor"
  ],
  "status-value:warning": [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Me, { type: "warning" })),
    "#A15C20"
  ],
  "status-value:error": [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Me, { type: "error" })),
    "brown"
  ]
}, Ho = /* @__PURE__ */ a((e) => Z0.reduce(
  (t, o) => e.includes(o) ? o : t,
  "status-value:unknown"
), "getMostCriticalStatusValue");
function Br(e, t) {
  return Object.values(e).reduce((o, i) => {
    if (i.type === "group" || i.type === "component") {
      let r = st(e, i.id, !1).map((l) => e[l]).filter((l) => l.type === "story"), n = Ho(
        // @ts-expect-error (non strict)
        r.flatMap((l) => Object.values(t[l.id] || {})).map((l) => l.value)
      );
      n && (o[i.id] = n);
=======
}), Sg = x(xg)(({ theme: { animation: e, color: t, base: o } }) => ({
  // specificity hack
  animation: `${e.glow} 1.5s ease-in-out infinite`,
  color: o === "light" ? t.mediumdark : t.darker
})), Ig = ["unknown", "pending", "success", "warn", "error"], xo = {
  unknown: [null, null],
  pending: [/* @__PURE__ */ s.createElement(Sg, { key: "icon" }), "currentColor"],
  success: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Ne, { type: "success" })),
    "currentColor"
  ],
  warn: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Ne, { type: "warning" })),
    "#A15C20"
  ],
  error: [
    /* @__PURE__ */ s.createElement("svg", { key: "icon", viewBox: "0 0 14 14", width: "14", height: "14" }, /* @__PURE__ */ s.createElement(
    Ne, { type: "error" })),
    "brown"
  ]
}, So = /* @__PURE__ */ a((e) => Ig.reduce(
  (t, o) => e.includes(o) ? o : t,
  "unknown"
), "getHighestStatus");
function Ir(e, t) {
  return Object.values(e).reduce((o, i) => {
    if (i.type === "group" || i.type === "component") {
      let n = it(e, i.id, !1).map((l) => e[l]).filter((l) => l.type === "story"), r = So(
        // @ts-expect-error (non strict)
        n.flatMap((l) => Object.values(t?.[l.id] || {})).map((l) => l.status)
      );
      r && (o[i.id] = r);
>>>>>>> main
    }
    return o;
  }, {});
}
<<<<<<< HEAD
a(Br, "getGroupStatus");

// src/manager/components/sidebar/StatusButton.tsx
var Uc = /* @__PURE__ */ a(({ theme: e, status: t }) => {
  let o = e.base === "light" ? Te(0.3, e.color.defaultText) : Te(0.6, e.color.defaultText);
  return {
    color: {
      "status-value:pending": o,
      "status-value:success": e.color.positive,
      "status-value:error": e.color.negative,
      "status-value:warning": e.color.warning,
      "status-value:unknown": o
    }[t]
  };
}, "withStatusColor"), Gc = x.div(Uc, {
  margin: 3
}), zo = x(ee)(
  Uc,
=======
a(Ir, "getGroupStatus");

// src/manager/components/sidebar/StatusButton.tsx
var yc = /* @__PURE__ */ a(({ theme: e, status: t }) => {
  let o = e.base === "light" ? we(0.3, e.color.defaultText) : we(0.6, e.color.defaultText);
  return {
    color: {
      pending: o,
      success: e.color.positive,
      error: e.color.negative,
      warn: e.color.warning,
      unknown: o
    }[t]
  };
}, "withStatusColor"), bc = x.div(yc, {
  margin: 3
}), Io = x(te)(
  yc,
>>>>>>> main
  ({ theme: e, height: t, width: o }) => ({
    transition: "none",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: o || 28,
    height: t || 28,
    "&:hover": {
      color: e.color.secondary,
<<<<<<< HEAD
      background: e.base === "dark" ? xr(0.3, e.color.secondary) : Po(0.4, e.color.secondary)
=======
      background: e.base === "dark" ? nr(0.3, e.color.secondary) : po(0.4, e.color.secondary)
>>>>>>> main
    },
    '[data-selected="true"] &': {
      background: e.color.secondary,
      boxShadow: `0 0 5px 5px ${e.color.secondary}`,
      "&:hover": {
<<<<<<< HEAD
        background: Po(0.1, e.color.secondary)
=======
        background: po(0.1, e.color.secondary)
>>>>>>> main
      }
    },
    "&:focus": {
      color: e.color.secondary,
      borderColor: e.color.secondary,
      "&:not(:focus-visible)": {
        borderColor: "transparent"
      }
    }
  }),
  ({ theme: e, selectedItem: t }) => t && {
    "&:hover": {
      boxShadow: `inset 0 0 0 2px ${e.color.secondary}`,
      background: "rgba(255, 255, 255, 0.2)"
    }
  }
);

// src/manager/components/sidebar/ContextMenu.tsx
<<<<<<< HEAD
var J0 = {
  onMouseEnter: /* @__PURE__ */ a(() => {
  }, "onMouseEnter"),
  node: null
}, ex = x(ve)({
  position: "absolute",
  right: 0,
  zIndex: 1
}), tx = x(zo)({
  background: "var(--tree-node-background-hover)",
  boxShadow: "0 0 5px 5px var(--tree-node-background-hover)"
}), qc = /* @__PURE__ */ a((e, t, o) => {
  let [i, r] = K(0), [n, l] = K(!1), u = U(() => ({
    onMouseEnter: /* @__PURE__ */ a(() => {
      r((p) => p + 1);
    }, "onMouseEnter"),
    onOpen: /* @__PURE__ */ a((p) => {
      p.stopPropagation(), l(!0);
=======
var Eg = {
  onMouseEnter: /* @__PURE__ */ a(() => {
  }, "onMouseEnter"),
  node: null
}, _g = x(be)({
  position: "absolute",
  right: 0,
  zIndex: 1
}), wg = x(Io)({
  background: "var(--tree-node-background-hover)",
  boxShadow: "0 0 5px 5px var(--tree-node-background-hover)"
}), vc = /* @__PURE__ */ a((e, t, o) => {
  let [i, n] = $(0), [r, l] = $(!1), u = K(() => ({
    onMouseEnter: /* @__PURE__ */ a(() => {
      n((d) => d + 1);
    }, "onMouseEnter"),
    onOpen: /* @__PURE__ */ a((d) => {
      d.stopPropagation(), l(!0);
>>>>>>> main
    }, "onOpen"),
    onClose: /* @__PURE__ */ a(() => {
      l(!1);
    }, "onClose")
<<<<<<< HEAD
  }), []), d = U(() => {
    let p = o.getElements(Ce.experimental_TEST_PROVIDER);
    return i ? Yc(p, e) : [];
  }, [o, e, i]).length > 0 || t.length > 0;
  return U(() => globalThis.CONFIG_TYPE !== "DEVELOPMENT" ? J0 : {
    onMouseEnter: u.onMouseEnter,
    node: d ? /* @__PURE__ */ s.createElement(
      ex,
      {
        "data-displayed": n ? "on" : "off",
        closeOnOutsideClick: !0,
        placement: "bottom-end",
        "data-testid": "context-menu",
        onVisibleChange: (p) => {
          p ? l(!0) : u.onClose();
        },
        tooltip: /* @__PURE__ */ s.createElement(ox, { context: e, links: t })
      },
      /* @__PURE__ */ s.createElement(tx, { type: "button", status: "status-value:pending" }, /* @__PURE__ */ s.createElement(kn, null))
    ) : null
  }, [e, u, n, d, t]);
}, "useContextMenu"), ox = /* @__PURE__ */ a(({
=======
  }), []), p = K(() => {
    let d = o.getElements(
      Te.experimental_TEST_PROVIDER
    );
    return i ? xc(d, e) : [];
  }, [o, e, i]).length > 0 || t.length > 0;
  return K(() => globalThis.CONFIG_TYPE !== "DEVELOPMENT" ? Eg : {
    onMouseEnter: u.onMouseEnter,
    node: p ? /* @__PURE__ */ s.createElement(
      _g,
      {
        "data-displayed": r ? "on" : "off",
        closeOnOutsideClick: !0,
        placement: "bottom-end",
        "data-testid": "context-menu",
        onVisibleChange: (d) => {
          d ? l(!0) : u.onClose();
        },
        tooltip: /* @__PURE__ */ s.createElement(Tg, { context: e, links: t })
      },
      /* @__PURE__ */ s.createElement(wg, { type: "button", status: "pending" }, /* @__PURE__ */ s.createElement(xs, null))
    ) : null
  }, [e, u, r, p, t]);
}, "useContextMenu"), Tg = /* @__PURE__ */ a(({
>>>>>>> main
  context: e,
  links: t,
  ...o
}) => {
<<<<<<< HEAD
  let i = oe().getElements(
    Ce.experimental_TEST_PROVIDER
  ), r = Yc(i, e), l = (Array.isArray(t[0]) ? t : [t]).concat([r]);
  return /* @__PURE__ */ s.createElement(ot, { ...o, links: l });
}, "LiveContextMenu");
function Yc(e, t) {
  return Object.entries(e).map(([o, i]) => {
    if (!i)
      return null;
    let r = i.sidebarContextMenu?.({ context: t });
    return r ? {
      id: o,
      content: r
    } : null;
  }).filter(Boolean);
}
a(Yc, "generateTestProviderLinks");

// src/manager/components/sidebar/StatusContext.tsx
var ji = Qt({}), Qc = /* @__PURE__ */ a((e) => {
  let { data: t, allStatuses: o, groupStatus: i } = Go(ji), r = {
    counts: {
      "status-value:pending": 0,
      "status-value:success": 0,
      "status-value:error": 0,
      "status-value:warning": 0,
      "status-value:unknown": 0
    },
    statusesByValue: {
      "status-value:pending": {},
      "status-value:success": {},
      "status-value:error": {},
      "status-value:warning": {},
      "status-value:unknown": {}
    }
  };
  if (t && o && i && ["status-value:pending", "status-value:warning", "status-value:error"].includes(
    i[e.id]
  ))
    for (let n of st(t, e.id, !1))
      for (let l of Object.values(o[n] ?? {}))
        r.counts[l.value]++, r.statusesByValue[l.value][n] ??= [], r.statusesByValue[l.value][n].push(l);
  return r;
}, "useStatusSummary");

// src/manager/components/sidebar/components/CollapseIcon.tsx
var rx = x.div(({ theme: e, isExpanded: t }) => ({
=======
  let { testProviders: i } = Pe(), n = xc(i, e), l = (Array.isArray(t[0]) ? t : [t]).concat([n]);
  return /* @__PURE__ */ s.createElement(gt, { ...o, links: l });
}, "LiveContextMenu");
function xc(e, t) {
  return Object.entries(e).map(([o, i]) => {
    if (!i)
      return null;
    let n = i.sidebarContextMenu?.({ context: t, state: i });
    return n ? {
      id: o,
      content: n
    } : null;
  }).filter(Boolean);
}
a(xc, "generateTestProviderLinks");

// src/manager/components/sidebar/StatusContext.tsx
var ei = jt({}), Sc = /* @__PURE__ */ a((e) => {
  let { data: t, status: o, groupStatus: i } = ko(ei), n = {
    counts: { pending: 0, success: 0, error: 0, warn: 0, unknown: 0 },
    statuses: { pending: {}, success: {}, error: {}, warn: {}, unknown: {} }
  };
  if (t && o && i && ["pending", "warn", "error"].includes(i[e.id]))
    for (let r of it(t, e.id, !1))
      for (let l of Object.values(o[r] || {}))
        n.counts[l.status]++, n.statuses[l.status][r] = n.statuses[l.status][r] || [], n.statuses[l.status][r].push(l);
  return n;
}, "useStatusSummary");

// src/manager/components/sidebar/components/CollapseIcon.tsx
var Cg = x.div(({ theme: e, isExpanded: t }) => ({
>>>>>>> main
  width: 8,
  height: 8,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
<<<<<<< HEAD
  color: Te(0.4, e.textMutedColor),
  transform: t ? "rotateZ(90deg)" : "none",
  transition: "transform .1s ease-out"
})), Kt = /* @__PURE__ */ a(({ isExpanded: e }) => /* @__PURE__ */ s.createElement(rx, { isExpanded: e }, /* @__PURE__ */ s.createElement("s\
=======
  color: we(0.4, e.textMutedColor),
  transform: t ? "rotateZ(90deg)" : "none",
  transition: "transform .1s ease-out"
})), Rt = /* @__PURE__ */ a(({ isExpanded: e }) => /* @__PURE__ */ s.createElement(Cg, { isExpanded: e }, /* @__PURE__ */ s.createElement("s\
>>>>>>> main
vg", { xmlns: "http://www.w3.org/2000/svg", width: "8", height: "8", fill: "none" }, /* @__PURE__ */ s.createElement(
  "path",
  {
    fill: "#73828C",
    fillRule: "evenodd",
    d: "M1.896 7.146a.5.5 0 1 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 1 0-.708.708L5.043 4 1.896 7.146Z",
    clipRule: "evenodd"
  }
))), "CollapseIcon");

// src/manager/components/sidebar/TreeNode.tsx
<<<<<<< HEAD
var It = x.svg(
=======
var bt = x.svg(
>>>>>>> main
  ({ theme: e, type: t }) => ({
    width: 14,
    height: 14,
    flex: "0 0 auto",
    color: t === "group" ? e.base === "dark" ? e.color.primary : e.color.ultraviolet : t === "component" ? e.color.secondary : t === "docume\
nt" ? e.base === "dark" ? e.color.gold : "#ff8300" : t === "story" ? e.color.seafoam : "currentColor"
  })
<<<<<<< HEAD
), Xc = x.button(({ theme: e, depth: t = 0, isExpandable: o = !1 }) => ({
=======
), Ic = x.button(({ theme: e, depth: t = 0, isExpandable: o = !1 }) => ({
>>>>>>> main
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  textAlign: "left",
  paddingLeft: `${(o ? 8 : 22) + t * 18}px`,
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 5,
  paddingBottom: 4
<<<<<<< HEAD
})), Zc = x.a(({ theme: e, depth: t = 0 }) => ({
=======
})), Ec = x.a(({ theme: e, depth: t = 0 }) => ({
>>>>>>> main
  width: "100%",
  cursor: "pointer",
  color: "inherit",
  display: "flex",
  gap: 6,
  flex: 1,
  alignItems: "start",
  paddingLeft: `${22 + t * 18}px`,
  paddingTop: 5,
  paddingBottom: 4,
  fontSize: `${e.typography.size.s2}px`,
  textDecoration: "none",
  overflowWrap: "break-word",
  wordWrap: "break-word",
  wordBreak: "break-word"
<<<<<<< HEAD
})), Jc = x.div(({ theme: e }) => ({
=======
})), _c = x.div(({ theme: e }) => ({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  marginTop: 16,
  marginBottom: 4,
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  lineHeight: "16px",
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor
<<<<<<< HEAD
})), Hr = x.div({
=======
})), Er = x.div({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  gap: 6,
  marginTop: 2
<<<<<<< HEAD
}), ep = s.memo(/* @__PURE__ */ a(function({
  children: t,
  isExpanded: o = !1,
  isExpandable: i = !1,
  ...r
}) {
  return /* @__PURE__ */ s.createElement(Xc, { isExpandable: i, tabIndex: -1, ...r }, /* @__PURE__ */ s.createElement(Hr, null, i && /* @__PURE__ */ s.
  createElement(Kt, { isExpanded: o }), /* @__PURE__ */ s.createElement(It, { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" },
  /* @__PURE__ */ s.createElement(Me, { type: "group" }))), t);
}, "GroupNode")), tp = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, isExpanded: i, isExpandable: r, isSelected: n, ...l }) {
    return /* @__PURE__ */ s.createElement(Xc, { isExpandable: r, tabIndex: -1, ...l }, /* @__PURE__ */ s.createElement(Hr, null, r && /* @__PURE__ */ s.
    createElement(Kt, { isExpanded: i }), /* @__PURE__ */ s.createElement(It, { viewBox: "0 0 14 14", width: "12", height: "12", type: "comp\
onent" }, /* @__PURE__ */ s.createElement(Me, { type: "component" }))), o);
  }, "ComponentNode")
), op = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, docsMode: i, ...r }) {
    return /* @__PURE__ */ s.createElement(Zc, { tabIndex: -1, ...r }, /* @__PURE__ */ s.createElement(Hr, null, /* @__PURE__ */ s.createElement(
    It, { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" }, /* @__PURE__ */ s.createElement(Me, { type: "document" }))), o);
  }, "DocumentNode")
), rp = s.memo(/* @__PURE__ */ a(function({
=======
}), wc = s.memo(/* @__PURE__ */ a(function({
  children: t,
  isExpanded: o = !1,
  isExpandable: i = !1,
  ...n
}) {
  return /* @__PURE__ */ s.createElement(Ic, { isExpandable: i, tabIndex: -1, ...n }, /* @__PURE__ */ s.createElement(Er, null, i && /* @__PURE__ */ s.
  createElement(Rt, { isExpanded: o }), /* @__PURE__ */ s.createElement(bt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "group" },
  /* @__PURE__ */ s.createElement(Ne, { type: "group" }))), t);
}, "GroupNode")), Tc = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, isExpanded: i, isExpandable: n, isSelected: r, ...l }) {
    return /* @__PURE__ */ s.createElement(Ic, { isExpandable: n, tabIndex: -1, ...l }, /* @__PURE__ */ s.createElement(Er, null, n && /* @__PURE__ */ s.
    createElement(Rt, { isExpanded: i }), /* @__PURE__ */ s.createElement(bt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "comp\
onent" }, /* @__PURE__ */ s.createElement(Ne, { type: "component" }))), o);
  }, "ComponentNode")
), Cc = s.memo(
  /* @__PURE__ */ a(function({ theme: t, children: o, docsMode: i, ...n }) {
    return /* @__PURE__ */ s.createElement(Ec, { tabIndex: -1, ...n }, /* @__PURE__ */ s.createElement(Er, null, /* @__PURE__ */ s.createElement(
    bt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "document" }, /* @__PURE__ */ s.createElement(Ne, { type: "document" }))), o);
  }, "DocumentNode")
), kc = s.memo(/* @__PURE__ */ a(function({
>>>>>>> main
  theme: t,
  children: o,
  ...i
}) {
<<<<<<< HEAD
  return /* @__PURE__ */ s.createElement(Zc, { tabIndex: -1, ...i }, /* @__PURE__ */ s.createElement(Hr, null, /* @__PURE__ */ s.createElement(
  It, { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" }, /* @__PURE__ */ s.createElement(Me, { type: "story" }))), o);
}, "StoryNode"));

// ../node_modules/es-toolkit/dist/function/debounce.mjs
function zr(e, t, { signal: o, edges: i } = {}) {
  let r, n = null, l = i != null && i.includes("leading"), u = i == null || i.includes("trailing"), c = /* @__PURE__ */ a(() => {
    n !== null && (e.apply(r, n), r = void 0, n = null);
  }, "invoke"), d = /* @__PURE__ */ a(() => {
    u && c(), b();
  }, "onTimerEnd"), p = null, m = /* @__PURE__ */ a(() => {
    p != null && clearTimeout(p), p = setTimeout(() => {
      p = null, d();
    }, t);
  }, "schedule"), h = /* @__PURE__ */ a(() => {
    p !== null && (clearTimeout(p), p = null);
  }, "cancelTimer"), b = /* @__PURE__ */ a(() => {
    h(), r = void 0, n = null;
  }, "cancel"), f = /* @__PURE__ */ a(() => {
    h(), c();
  }, "flush"), y = /* @__PURE__ */ a(function(...S) {
    if (o?.aborted)
      return;
    r = this, n = S;
    let E = p == null;
    m(), l && E && c();
  }, "debounced");
  return y.schedule = m, y.cancel = b, y.flush = f, o?.addEventListener("abort", b, { once: !0 }), y;
}
a(zr, "debounce");

// ../node_modules/es-toolkit/dist/function/throttle.mjs
function Ki(e, t, { signal: o, edges: i = ["leading", "trailing"] } = {}) {
  let r = null, n = zr(e, t, { signal: o, edges: i }), l = /* @__PURE__ */ a(function(...u) {
    r == null ? r = Date.now() : Date.now() - r >= t && (r = Date.now(), n.cancel()), n(...u);
  }, "throttled");
  return l.cancel = n.cancel, l.flush = n.flush, l;
}
a(Ki, "throttle");

// ../node_modules/es-toolkit/dist/compat/function/debounce.mjs
function $i(e, t = 0, o = {}) {
  typeof o != "object" && (o = {});
  let { signal: i, leading: r = !1, trailing: n = !0, maxWait: l } = o, u = Array(2);
  r && (u[0] = "leading"), n && (u[1] = "trailing");
  let c, d = null, p = zr(function(...b) {
    c = e.apply(this, b), d = null;
  }, t, { signal: i, edges: u }), m = /* @__PURE__ */ a(function(...b) {
    if (l != null) {
      if (d === null)
        d = Date.now();
      else if (Date.now() - d >= l)
        return c = e.apply(this, b), d = Date.now(), p.cancel(), p.schedule(), c;
    }
    return p.apply(this, b), c;
  }, "debounced"), h = /* @__PURE__ */ a(() => (p.flush(), c), "flush");
  return m.cancel = p.cancel, m.flush = h, m;
}
a($i, "debounce");

// src/manager/keybinding.ts
var nx = {
=======
  return /* @__PURE__ */ s.createElement(Ec, { tabIndex: -1, ...i }, /* @__PURE__ */ s.createElement(Er, null, /* @__PURE__ */ s.createElement(
  bt, { viewBox: "0 0 14 14", width: "12", height: "12", type: "story" }, /* @__PURE__ */ s.createElement(Ne, { type: "story" }))), o);
}, "StoryNode"));

// ../node_modules/es-toolkit/dist/function/debounce.mjs
function _r(e, t, { signal: o, edges: i } = {}) {
  let n, r = null, l = i != null && i.includes("leading"), u = i == null || i.includes("trailing"), c = /* @__PURE__ */ a(() => {
    r !== null && (e.apply(n, r), n = void 0, r = null);
  }, "invoke"), p = /* @__PURE__ */ a(() => {
    u && c(), y();
  }, "onTimerEnd"), d = null, g = /* @__PURE__ */ a(() => {
    d != null && clearTimeout(d), d = setTimeout(() => {
      d = null, p();
    }, t);
  }, "schedule"), h = /* @__PURE__ */ a(() => {
    d !== null && (clearTimeout(d), d = null);
  }, "cancelTimer"), y = /* @__PURE__ */ a(() => {
    h(), n = void 0, r = null;
  }, "cancel"), f = /* @__PURE__ */ a(() => {
    h(), c();
  }, "flush"), b = /* @__PURE__ */ a(function(...I) {
    if (o?.aborted)
      return;
    n = this, r = I;
    let _ = d == null;
    g(), l && _ && c();
  }, "debounced");
  return b.schedule = g, b.cancel = y, b.flush = f, o?.addEventListener("abort", y, { once: !0 }), b;
}
a(_r, "debounce");

// ../node_modules/es-toolkit/dist/function/throttle.mjs
function ti(e, t, { signal: o, edges: i = ["leading", "trailing"] } = {}) {
  let n = null, r = _r(e, t, { signal: o, edges: i }), l = /* @__PURE__ */ a(function(...u) {
    n == null ? n = Date.now() : Date.now() - n >= t && (n = Date.now(), r.cancel(), r(...u)), r(...u);
  }, "throttled");
  return l.cancel = r.cancel, l.flush = r.flush, l;
}
a(ti, "throttle");

// src/manager/keybinding.ts
var kg = {
>>>>>>> main
  // event.code => event.key
  Space: " ",
  Slash: "/",
  ArrowLeft: "ArrowLeft",
  ArrowUp: "ArrowUp",
  ArrowRight: "ArrowRight",
  ArrowDown: "ArrowDown",
  Escape: "Escape",
  Enter: "Enter"
<<<<<<< HEAD
}, ix = { alt: !1, ctrl: !1, meta: !1, shift: !1 }, St = /* @__PURE__ */ a((e, t) => {
  let { alt: o, ctrl: i, meta: r, shift: n } = e === !1 ? ix : e;
  return !(typeof o == "boolean" && o !== t.altKey || typeof i == "boolean" && i !== t.ctrlKey || typeof r == "boolean" && r !== t.metaKey ||
  typeof n == "boolean" && n !== t.shiftKey);
}, "matchesModifiers"), $e = /* @__PURE__ */ a((e, t) => t.code ? t.code === e : t.key === nx[e], "matchesKeyCode");

// src/manager/components/sidebar/useExpanded.ts
var { document: Ui } = se, sx = /* @__PURE__ */ a(({
=======
}, Og = { alt: !1, ctrl: !1, meta: !1, shift: !1 }, vt = /* @__PURE__ */ a((e, t) => {
  let { alt: o, ctrl: i, meta: n, shift: r } = e === !1 ? Og : e;
  return !(typeof o == "boolean" && o !== t.altKey || typeof i == "boolean" && i !== t.ctrlKey || typeof n == "boolean" && n !== t.metaKey ||
  typeof r == "boolean" && r !== t.shiftKey);
}, "matchesModifiers"), Ve = /* @__PURE__ */ a((e, t) => t.code ? t.code === e : t.key === kg[e], "matchesKeyCode");

// src/manager/components/sidebar/useExpanded.ts
var { document: oi } = se, Pg = /* @__PURE__ */ a(({
>>>>>>> main
  refId: e,
  data: t,
  initialExpanded: o,
  highlightedRef: i,
<<<<<<< HEAD
  rootIds: r
}) => {
  let n = i.current?.refId === e ? Fo(t, i.current?.itemId) : [];
  return [...r, ...n].reduce(
=======
  rootIds: n
}) => {
  let r = i.current?.refId === e ? bo(t, i.current?.itemId) : [];
  return [...n, ...r].reduce(
>>>>>>> main
    // @ts-expect-error (non strict)
    (l, u) => Object.assign(l, { [u]: u in o ? o[u] : !0 }),
    {}
  );
<<<<<<< HEAD
}, "initializeExpanded"), ax = /* @__PURE__ */ a(() => {
}, "noop"), np = /* @__PURE__ */ a(({
=======
}, "initializeExpanded"), Ag = /* @__PURE__ */ a(() => {
}, "noop"), Oc = /* @__PURE__ */ a(({
>>>>>>> main
  containerRef: e,
  isBrowsing: t,
  refId: o,
  data: i,
<<<<<<< HEAD
  initialExpanded: r,
  rootIds: n,
  highlightedRef: l,
  setHighlightedItemId: u,
  selectedStoryId: c,
  onSelectStoryId: d
}) => {
  let p = oe(), [m, h] = Zt(
    (g, { ids: v, value: I }) => v.reduce((w, O) => Object.assign(w, { [O]: I }), { ...g }),
    // @ts-expect-error (non strict)
    { refId: o, data: i, highlightedRef: l, rootIds: n, initialExpanded: r },
    sx
  ), b = A(
    (g) => e.current?.querySelector(`[data-item-id="${g}"]`),
    [e]
  ), f = A(
    (g) => {
      u(g.getAttribute("data-item-id")), zt(g);
    },
    [u]
  ), y = A(
    ({ ids: g, value: v }) => {
      if (h({ ids: g, value: v }), g.length === 1) {
        let I = e.current?.querySelector(
          `[data-item-id="${g[0]}"][data-ref-id="${o}"]`
        );
        I && f(I);
=======
  initialExpanded: n,
  rootIds: r,
  highlightedRef: l,
  setHighlightedItemId: u,
  selectedStoryId: c,
  onSelectStoryId: p
}) => {
  let d = oe(), [g, h] = Vt(
    (m, { ids: v, value: S }) => v.reduce((E, T) => Object.assign(E, { [T]: S }), { ...m }),
    // @ts-expect-error (non strict)
    { refId: o, data: i, highlightedRef: l, rootIds: r, initialExpanded: n },
    Pg
  ), y = A(
    (m) => e.current?.querySelector(`[data-item-id="${m}"]`),
    [e]
  ), f = A(
    (m) => {
      u(m.getAttribute("data-item-id")), Dt(m);
    },
    [u]
  ), b = A(
    ({ ids: m, value: v }) => {
      if (h({ ids: m, value: v }), m.length === 1) {
        let S = e.current?.querySelector(
          `[data-item-id="${m[0]}"][data-ref-id="${o}"]`
        );
        S && f(S);
>>>>>>> main
      }
    },
    [e, f, o]
  );
<<<<<<< HEAD
  V(() => {
    h({ ids: Fo(i, c), value: !0 });
  }, [i, c]);
  let S = A(() => {
    let g = Object.keys(i).filter((v) => !n.includes(v));
    h({ ids: g, value: !1 });
  }, [i, n]), E = A(() => {
    h({ ids: Object.keys(i), value: !0 });
  }, [i]);
  return V(() => p ? (p.on(ho, S), p.on(In, E), () => {
    p.off(ho, S), p.off(In, E);
  }) : ax, [p, S, E]), V(() => {
    let g = Ui.getElementById("storybook-explorer-menu"), v = Ki((I) => {
      let w = l.current?.refId === o && l.current?.itemId;
      if (!t || !e.current || !w || I.repeat || !St(!1, I))
        return;
      let O = $e("Enter", I), _ = $e("Space", I), k = $e("ArrowLeft", I), T = $e("ArrowRight", I);
      if (!(O || _ || k || T))
        return;
      let C = b(w);
      if (!C || C.getAttribute("data-ref-id") !== o)
        return;
      let P = I.target;
      if (!Wt(g, P) && !Wt(P, g))
        return;
      if (P.hasAttribute("data-action")) {
        if (O || _)
          return;
        P.blur();
      }
      let D = C.getAttribute("data-nodetype");
      (O || _) && ["component", "story", "document"].includes(D) && d(w);
      let M = C.getAttribute("aria-expanded");
      if (k) {
        if (M === "true") {
          h({ ids: [w], value: !1 });
          return;
        }
        let F = C.getAttribute("data-parent-id"), Z = F && b(F);
        if (Z && Z.getAttribute("data-highlightable") === "true") {
          f(Z);
          return;
        }
        h({ ids: st(i, w, !0), value: !1 });
        return;
      }
      T && (M === "false" ? y({ ids: [w], value: !0 }) : M === "true" && y({ ids: st(i, w, !0), value: !0 }));
    }, 60);
    return Ui.addEventListener("keydown", v), () => Ui.removeEventListener("keydown", v);
=======
  j(() => {
    h({ ids: bo(i, c), value: !0 });
  }, [i, c]);
  let I = A(() => {
    let m = Object.keys(i).filter((v) => !r.includes(v));
    h({ ids: m, value: !1 });
  }, [i, r]), _ = A(() => {
    h({ ids: Object.keys(i), value: !0 });
  }, [i]);
  return j(() => d ? (d.on(io, I), d.on(an, _), () => {
    d.off(io, I), d.off(an, _);
  }) : Ag, [d, I, _]), j(() => {
    let m = oi.getElementById("storybook-explorer-menu"), v = ti((S) => {
      let E = l.current?.refId === o && l.current?.itemId;
      if (!t || !e.current || !E || S.repeat || !vt(!1, S))
        return;
      let T = Ve("Enter", S), C = Ve("Space", S), k = Ve("ArrowLeft", S), w = Ve("ArrowRight", S);
      if (!(T || C || k || w))
        return;
      let O = y(E);
      if (!O || O.getAttribute("data-ref-id") !== o)
        return;
      let P = S.target;
      if (!Mt(m, P) && !Mt(P, m))
        return;
      if (P.hasAttribute("data-action")) {
        if (T || C)
          return;
        P.blur();
      }
      let D = O.getAttribute("data-nodetype");
      (T || C) && ["component", "story", "document"].includes(D) && p(E);
      let M = O.getAttribute("aria-expanded");
      if (k) {
        if (M === "true") {
          h({ ids: [E], value: !1 });
          return;
        }
        let N = O.getAttribute("data-parent-id"), Q = N && y(N);
        if (Q && Q.getAttribute("data-highlightable") === "true") {
          f(Q);
          return;
        }
        h({ ids: it(i, E, !0), value: !1 });
        return;
      }
      w && (M === "false" ? b({ ids: [E], value: !0 }) : M === "true" && b({ ids: it(i, E, !0), value: !0 }));
    }, 60);
    return oi.addEventListener("keydown", v), () => oi.removeEventListener("keydown", v);
>>>>>>> main
  }, [
    e,
    t,
    o,
    i,
    l,
    u,
<<<<<<< HEAD
    d
  ]), [m, y];
}, "useExpanded");

// src/manager/components/sidebar/Tree.tsx
var lx = x.div((e) => ({
  marginTop: e.hasOrphans ? 20 : 0,
  marginBottom: 20
})), ux = x.button(({ theme: e }) => ({
=======
    p
  ]), [g, b];
}, "useExpanded");

// src/manager/components/sidebar/Tree.tsx
var Dg = x.div((e) => ({
  marginTop: e.hasOrphans ? 20 : 0,
  marginBottom: 20
})), Mg = x.button(({ theme: e }) => ({
>>>>>>> main
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  borderRadius: 4,
  transition: "color 150ms, box-shadow 150ms",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  height: 28,
  "&:hover, &:focus": {
    outline: "none",
    background: "var(--tree-node-background-hover)"
  }
<<<<<<< HEAD
})), ip = x.div(({ theme: e }) => ({
=======
})), Pc = x.div(({ theme: e }) => ({
>>>>>>> main
  position: "relative",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "flex-start",
  color: e.color.defaultText,
  background: "transparent",
  minHeight: 28,
  borderRadius: 4,
  overflow: "hidden",
  "--tree-node-background-hover": e.background.content,
  [Qe]: {
    "--tree-node-background-hover": e.background.app
  },
  "&:hover, &:focus": {
<<<<<<< HEAD
    "--tree-node-background-hover": e.base === "dark" ? xr(0.35, e.color.secondary) : Po(0.45, e.color.secondary),
=======
    "--tree-node-background-hover": e.base === "dark" ? nr(0.35, e.color.secondary) : po(0.45, e.color.secondary),
>>>>>>> main
    background: "var(--tree-node-background-hover)",
    outline: "none"
  },
  '& [data-displayed="off"]': {
    visibility: "hidden"
  },
  '&:hover [data-displayed="off"]': {
    visibility: "visible"
  },
  '& [data-displayed="on"] + *': {
    visibility: "hidden"
  },
  '&:hover [data-displayed="off"] + *': {
    visibility: "hidden"
  },
  '&[data-selected="true"]': {
    color: e.color.lightest,
    background: e.color.secondary,
    fontWeight: e.typography.weight.bold,
    "&&:hover, &&:focus": {
      "--tree-node-background-hover": e.color.secondary,
      background: "var(--tree-node-background-hover)"
    },
    svg: { color: e.color.lightest }
  },
  a: { color: "currentColor" }
<<<<<<< HEAD
})), cx = x(he)(({ theme: e }) => ({
=======
})), Lg = x(me)(({ theme: e }) => ({
>>>>>>> main
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    fontSize: "10px",
    overflow: "hidden",
    width: 1,
    height: "20px",
    boxSizing: "border-box",
    opacity: 0,
    padding: 0,
    "&:focus": {
      opacity: 1,
      padding: "5px 10px",
      background: "white",
      color: e.color.secondary,
      width: "auto"
    }
  }
<<<<<<< HEAD
})), px = /* @__PURE__ */ a((e) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(jn, { ...e, color: t.color.positive });
}, "SuccessStatusIcon"), dx = /* @__PURE__ */ a((e) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(Vn, { ...e, color: t.color.negative });
}, "ErrorStatusIcon"), fx = /* @__PURE__ */ a((e) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(Kn, { ...e, color: t.color.warning });
}, "WarnStatusIcon"), mx = /* @__PURE__ */ a((e) => {
  let t = De();
  return /* @__PURE__ */ s.createElement(ut, { ...e, size: 12, color: t.color.defaultText });
}, "PendingStatusIcon"), Gi = {
  "status-value:success": /* @__PURE__ */ s.createElement(px, null),
  "status-value:error": /* @__PURE__ */ s.createElement(dx, null),
  "status-value:warning": /* @__PURE__ */ s.createElement(fx, null),
  "status-value:pending": /* @__PURE__ */ s.createElement(mx, null),
  "status-value:unknown": null
};
var sp = [
  "status-value:success",
  "status-value:error",
  "status-value:warning",
  "status-value:pending",
  "status-value:unknown"
], ap = s.memo(/* @__PURE__ */ a(function({
  item: t,
  statuses: o,
  groupStatus: i,
  refId: r,
  docsMode: n,
  isOrphan: l,
  isDisplayed: u,
  isSelected: c,
  isFullyExpanded: d,
  setFullyExpanded: p,
  isExpanded: m,
  setExpanded: h,
  onSelectStoryId: b,
  api: f
}) {
  let { isDesktop: y, isMobile: S, setMobileMenuOpen: E } = ge(), { counts: g, statusesByValue: v } = Qc(t);
  if (!u)
    return null;
  let I = U(() => {
    if (t.type === "story" || t.type === "docs")
      return Object.entries(o).filter(([, _]) => _.sidebarContextMenu !== !1).sort((_, k) => sp.indexOf(_[1].value) - sp.indexOf(k[1].value)).
      map(([_, k]) => ({
        id: _,
        title: k.title,
        description: k.description,
        "aria-label": `Test status for ${k.title}: ${k.value}`,
        icon: Gi[k.value],
        onClick: /* @__PURE__ */ a(() => {
          b(t.id), Ot.selectStatuses([k]);
        }, "onClick")
      }));
    if (t.type === "component" || t.type === "group") {
      let _ = [], k = g["status-value:error"], T = g["status-value:warning"];
      return k && _.push({
        id: "errors",
        icon: Gi["status-value:error"],
        title: `${k} ${k === 1 ? "story" : "stories"} with errors`,
        onClick: /* @__PURE__ */ a(() => {
          let [C] = Object.entries(v["status-value:error"])[0];
          b(C);
          let P = Object.values(v["status-value:error"]).flat();
          Ot.selectStatuses(P);
        }, "onClick")
      }), T && _.push({
        id: "warnings",
        icon: Gi["status-value:warning"],
        title: `${T} ${T === 1 ? "story" : "stories"} with warnings`,
        onClick: /* @__PURE__ */ a(() => {
          let [C] = Object.entries(v["status-value:warning"])[0];
          b(C);
          let P = Object.values(v["status-value:warning"]).flat();
          Ot.selectStatuses(P);
        }, "onClick")
      }), _;
    }
    return [];
  }, [g, t.id, t.type, b, o, v]), w = Rr(t.id, r), O = r === "storybook_internal" ? qc(t, I, f) : { node: null, onMouseEnter: /* @__PURE__ */ a(
  () => {
  }, "onMouseEnter") };
  if (t.type === "story" || t.type === "docs") {
    let _ = t.type === "docs" ? op : rp, k = Ho(
      Object.values(o || {}).map((P) => P.value)
    ), [T, C] = Bo[k];
    return /* @__PURE__ */ s.createElement(
      ip,
      {
        key: w,
        className: "sidebar-item",
        "data-selected": c,
        "data-ref-id": r,
=======
})), Ng = /* @__PURE__ */ a((e) => {
  let t = Ae();
  return /* @__PURE__ */ s.createElement(Rs, { ...e, color: t.color.positive });
}, "SuccessStatusIcon"), Rg = /* @__PURE__ */ a((e) => {
  let t = Ae();
  return /* @__PURE__ */ s.createElement(Ns, { ...e, color: t.color.negative });
}, "ErrorStatusIcon"), Fg = /* @__PURE__ */ a((e) => {
  let t = Ae();
  return /* @__PURE__ */ s.createElement(Fs, { ...e, color: t.color.warning });
}, "WarnStatusIcon"), Hg = /* @__PURE__ */ a((e) => {
  let t = Ae();
  return /* @__PURE__ */ s.createElement(mt, { ...e, size: 12, color: t.color.defaultText });
}, "PendingStatusIcon"), ri = {
  success: /* @__PURE__ */ s.createElement(Ng, null),
  error: /* @__PURE__ */ s.createElement(Rg, null),
  warn: /* @__PURE__ */ s.createElement(Fg, null),
  pending: /* @__PURE__ */ s.createElement(Hg, null),
  unknown: null
};
var Ac = ["success", "error", "warn", "pending", "unknown"], Dc = s.memo(/* @__PURE__ */ a(function({
  item: t,
  status: o,
  groupStatus: i,
  refId: n,
  docsMode: r,
  isOrphan: l,
  isDisplayed: u,
  isSelected: c,
  isFullyExpanded: p,
  setFullyExpanded: d,
  isExpanded: g,
  setExpanded: h,
  onSelectStoryId: y,
  api: f
}) {
  let { isDesktop: b, isMobile: I, setMobileMenuOpen: _ } = ge(), { counts: m, statuses: v } = Sc(t);
  if (!u)
    return null;
  let S = K(() => {
    if (t.type === "story" || t.type === "docs")
      return Object.entries(o || {}).filter(([, C]) => C.sidebarContextMenu !== !1).sort((C, k) => Ac.indexOf(C[1].status) - Ac.indexOf(k[1].
      status)).map(([C, k]) => ({
        id: C,
        title: k.title,
        description: k.description,
        "aria-label": `Test status for ${k.title}: ${k.status}`,
        icon: ri[k.status],
        onClick: /* @__PURE__ */ a(() => {
          y(t.id), k.onClick?.();
        }, "onClick")
      }));
    if (t.type === "component" || t.type === "group") {
      let C = [];
      return m.error && C.push({
        id: "errors",
        icon: ri.error,
        title: `${m.error} ${m.error === 1 ? "story" : "stories"} with errors`,
        onClick: /* @__PURE__ */ a(() => {
          let [k, [w]] = Object.entries(v.error)[0];
          y(k), w.onClick?.();
        }, "onClick")
      }), m.warn && C.push({
        id: "warnings",
        icon: ri.warn,
        title: `${m.warn} ${m.warn === 1 ? "story" : "stories"} with warnings`,
        onClick: /* @__PURE__ */ a(() => {
          let [k, [w]] = Object.entries(v.warn)[0];
          y(k), w.onClick?.();
        }, "onClick")
      }), C;
    }
    return [];
  }, [
    m.error,
    m.warn,
    t.id,
    t.type,
    y,
    o,
    v.error,
    v.warn
  ]), E = Sr(t.id, n), T = n === "storybook_internal" ? vc(t, S, f) : { node: null, onMouseEnter: /* @__PURE__ */ a(() => {
  }, "onMouseEnter") };
  if (t.type === "story" || t.type === "docs") {
    let C = t.type === "docs" ? Cc : kc, k = So(Object.values(o || {}).map((P) => P.status)), [w, O] = xo[k];
    return /* @__PURE__ */ s.createElement(
      Pc,
      {
        key: E,
        className: "sidebar-item",
        "data-selected": c,
        "data-ref-id": n,
>>>>>>> main
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type === "docs" ? "document" : "story",
        "data-highlightable": u,
<<<<<<< HEAD
        onMouseEnter: O.onMouseEnter
      },
      /* @__PURE__ */ s.createElement(
        _,
        {
          style: c ? {} : { color: C },
          href: wc(t, r),
          id: w,
          depth: l ? t.depth : t.depth - 1,
          onClick: (P) => {
            P.preventDefault(), b(t.id), S && E(!1);
          },
          ...t.type === "docs" && { docsMode: n }
        },
        t.renderLabel?.(t, f) || t.name
      ),
      c && /* @__PURE__ */ s.createElement(cx, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "#storybook-preview-wrapper" },
      "Skip to canvas")),
      O.node,
      T ? /* @__PURE__ */ s.createElement(
        zo,
        {
          "aria-label": `Test status: ${k.replace("status-value:", "")}`,
=======
        onMouseEnter: T.onMouseEnter
      },
      /* @__PURE__ */ s.createElement(
        C,
        {
          style: c ? {} : { color: O },
          href: Gu(t, n),
          id: E,
          depth: l ? t.depth : t.depth - 1,
          onClick: (P) => {
            P.preventDefault(), y(t.id), I && _(!1);
          },
          ...t.type === "docs" && { docsMode: r }
        },
        t.renderLabel?.(t, f) || t.name
      ),
      c && /* @__PURE__ */ s.createElement(Lg, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "#storybook-preview-wrapper" },
      "Skip to canvas")),
      T.node,
      w ? /* @__PURE__ */ s.createElement(
        Io,
        {
          "aria-label": `Test status: ${k}`,
>>>>>>> main
          role: "status",
          type: "button",
          status: k,
          selectedItem: c
        },
<<<<<<< HEAD
        T
=======
        w
>>>>>>> main
      ) : null
    );
  }
  if (t.type === "root")
    return /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
      Jc,
      {
        key: w,
        id: w,
        className: "sidebar-subheading",
        "data-ref-id": r,
=======
      _c,
      {
        key: E,
        id: E,
        className: "sidebar-subheading",
        "data-ref-id": n,
>>>>>>> main
        "data-item-id": t.id,
        "data-nodetype": "root"
      },
      /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
        ux,
        {
          type: "button",
          "data-action": "collapse-root",
          onClick: (_) => {
            _.preventDefault(), h({ ids: [t.id], value: !m });
          },
          "aria-expanded": m
        },
        /* @__PURE__ */ s.createElement(Kt, { isExpanded: m }),
        t.renderLabel?.(t, f) || t.name
      ),
      m && /* @__PURE__ */ s.createElement(
        ee,
        {
          className: "sidebar-subheading-action",
          "aria-label": d ? "Expand" : "Collapse",
          "data-action": "expand-all",
          "data-expanded": d,
          onClick: (_) => {
            _.preventDefault(), p();
          }
        },
        d ? /* @__PURE__ */ s.createElement(_n, null) : /* @__PURE__ */ s.createElement(On, null)
      )
    );
  if (t.type === "component" || t.type === "group") {
    let _ = i?.[t.id], k = _ ? Bo[_][1] : null, T = t.type === "component" ? tp : ep;
    return /* @__PURE__ */ s.createElement(
      ip,
      {
        key: w,
        className: "sidebar-item",
        "data-ref-id": r,
=======
        Mg,
        {
          type: "button",
          "data-action": "collapse-root",
          onClick: (C) => {
            C.preventDefault(), h({ ids: [t.id], value: !g });
          },
          "aria-expanded": g
        },
        /* @__PURE__ */ s.createElement(Rt, { isExpanded: g }),
        t.renderLabel?.(t, f) || t.name
      ),
      g && /* @__PURE__ */ s.createElement(
        te,
        {
          className: "sidebar-subheading-action",
          "aria-label": p ? "Expand" : "Collapse",
          "data-action": "expand-all",
          "data-expanded": p,
          onClick: (C) => {
            C.preventDefault(), d();
          }
        },
        p ? /* @__PURE__ */ s.createElement(vs, null) : /* @__PURE__ */ s.createElement(Ss, null)
      )
    );
  if (t.type === "component" || t.type === "group") {
    let C = i?.[t.id], k = C ? xo[C][1] : null, w = t.type === "component" ? Tc : wc;
    return /* @__PURE__ */ s.createElement(
      Pc,
      {
        key: E,
        className: "sidebar-item",
        "data-ref-id": n,
>>>>>>> main
        "data-item-id": t.id,
        "data-parent-id": t.parent,
        "data-nodetype": t.type,
        "data-highlightable": u,
<<<<<<< HEAD
        onMouseEnter: O.onMouseEnter
      },
      /* @__PURE__ */ s.createElement(
        T,
        {
          id: w,
          style: k ? { color: k } : {},
          "aria-controls": t.children && t.children[0],
          "aria-expanded": m,
          depth: l ? t.depth : t.depth - 1,
          isComponent: t.type === "component",
          isExpandable: t.children && t.children.length > 0,
          isExpanded: m,
          onClick: (C) => {
            C.preventDefault(), h({ ids: [t.id], value: !m }), t.type === "component" && !m && y && b(t.id);
          },
          onMouseEnter: () => {
            t.type === "component" && f.emit(Ct, {
              ids: [t.children[0]],
              options: { target: r }
=======
        onMouseEnter: T.onMouseEnter
      },
      /* @__PURE__ */ s.createElement(
        w,
        {
          id: E,
          style: k ? { color: k } : {},
          "aria-controls": t.children && t.children[0],
          "aria-expanded": g,
          depth: l ? t.depth : t.depth - 1,
          isComponent: t.type === "component",
          isExpandable: t.children && t.children.length > 0,
          isExpanded: g,
          onClick: (O) => {
            O.preventDefault(), h({ ids: [t.id], value: !g }), t.type === "component" && !g && b && y(t.id);
          },
          onMouseEnter: () => {
            t.type === "component" && f.emit(St, {
              ids: [t.children[0]],
              options: { target: n }
>>>>>>> main
            });
          }
        },
        t.renderLabel?.(t, f) || t.name
      ),
<<<<<<< HEAD
      O.node,
      ["status-value:error", "status-value:warning"].includes(_) && /* @__PURE__ */ s.createElement(zo, { type: "button", status: _ }, /* @__PURE__ */ s.
      createElement("svg", { key: "icon", viewBox: "0 0 6 6", width: "6", height: "6", type: "dot" }, /* @__PURE__ */ s.createElement(Me, { type: "\
dot" })))
    );
  }
  return null;
}, "Node")), hx = s.memo(/* @__PURE__ */ a(function({
  setExpanded: t,
  isFullyExpanded: o,
  expandableDescendants: i,
  ...r
}) {
  let n = A(
=======
      T.node,
      ["error", "warn"].includes(C) && /* @__PURE__ */ s.createElement(Io, { type: "button", status: C }, /* @__PURE__ */ s.createElement("s\
vg", { key: "icon", viewBox: "0 0 6 6", width: "6", height: "6", type: "dot" }, /* @__PURE__ */ s.createElement(Ne, { type: "dot" })))
    );
  }
  return null;
}, "Node")), Bg = s.memo(/* @__PURE__ */ a(function({
  setExpanded: t,
  isFullyExpanded: o,
  expandableDescendants: i,
  ...n
}) {
  let r = A(
>>>>>>> main
    () => t({ ids: i, value: !o }),
    [t, o, i]
  );
  return /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
    ap,
    {
      ...r,
      setExpanded: t,
      isFullyExpanded: o,
      setFullyExpanded: n
    }
  );
}, "Root")), lp = s.memo(/* @__PURE__ */ a(function({
  isBrowsing: t,
  isMain: o,
  refId: i,
  data: r,
  allStatuses: n,
  docsMode: l,
  highlightedRef: u,
  setHighlightedItemId: c,
  selectedStoryId: d,
  onSelectStoryId: p
}) {
  let m = q(null), h = oe(), [b, f, y] = U(
    () => Object.keys(r).reduce(
      (T, C) => {
        let P = r[C];
        return P.type === "root" ? T[0].push(C) : P.parent || T[1].push(C), P.type === "root" && P.startCollapsed && (T[2][C] = !1), T;
      },
      [[], [], {}]
    ),
    [r]
  ), { expandableDescendants: S } = U(() => [...f, ...b].reduce(
    (T, C) => (T.expandableDescendants[C] = st(r, C, !1).filter(
      (P) => !["story", "docs"].includes(r[P].type)
    ), T),
    { orphansFirst: [], expandableDescendants: {} }
  ), [r, b, f]), E = U(() => Object.keys(r).filter((T) => {
    let C = r[T];
    if (C.type !== "component")
      return !1;
    let { children: P = [], name: D } = C;
    if (P.length !== 1)
      return !1;
    let M = r[P[0]];
    return M.type === "docs" ? !0 : M.type === "story" ? kc(M.name, D) : !1;
  }), [r]), g = U(
    () => Object.keys(r).filter((T) => !E.includes(T)),
    [E]
  ), v = U(() => E.reduce(
    (T, C) => {
      let { children: P, parent: D, name: M } = r[C], [F] = P;
      if (D) {
        let Z = [...r[D].children];
        Z[Z.indexOf(C)] = F, T[D] = { ...r[D], children: Z };
      }
      return T[F] = {
        ...r[F],
        name: M,
        parent: D,
        depth: r[F].depth - 1
      }, T;
    },
    { ...r }
  ), [r]), I = U(() => g.reduce(
    (T, C) => Object.assign(T, { [C]: Fo(v, C) }),
    {}
  ), [g, v]), [w, O] = np({
    // @ts-expect-error (non strict)
    containerRef: m,
    isBrowsing: t,
    refId: i,
    data: v,
    initialExpanded: y,
    rootIds: b,
    highlightedRef: u,
    setHighlightedItemId: c,
    selectedStoryId: d,
    onSelectStoryId: p
  }), _ = U(
    () => Br(v, n ?? {}),
    [v, n]
  ), k = U(() => g.map((T) => {
    let C = v[T], P = Rr(T, i);
    if (C.type === "root") {
      let M = S[C.id], F = M.every((Z) => w[Z]);
      return (
        // @ts-expect-error (TODO)
        /* @__PURE__ */ s.createElement(
          hx,
          {
            api: h,
            key: P,
            item: C,
=======
    Dc,
    {
      ...n,
      setExpanded: t,
      isFullyExpanded: o,
      setFullyExpanded: r
    }
  );
}, "Root")), Mc = s.memo(/* @__PURE__ */ a(function({
  isBrowsing: t,
  isMain: o,
  refId: i,
  data: n,
  status: r,
  docsMode: l,
  highlightedRef: u,
  setHighlightedItemId: c,
  selectedStoryId: p,
  onSelectStoryId: d
}) {
  let g = Y(null), h = oe(), [y, f, b] = K(
    () => Object.keys(n).reduce(
      (w, O) => {
        let P = n[O];
        return P.type === "root" ? w[0].push(O) : P.parent || w[1].push(O), P.type === "root" && P.startCollapsed && (w[2][O] = !1), w;
      },
      [[], [], {}]
    ),
    [n]
  ), { expandableDescendants: I } = K(() => [...f, ...y].reduce(
    (w, O) => (w.expandableDescendants[O] = it(n, O, !1).filter(
      (P) => !["story", "docs"].includes(n[P].type)
    ), w),
    { orphansFirst: [], expandableDescendants: {} }
  ), [n, y, f]), _ = K(() => Object.keys(n).filter((w) => {
    let O = n[w];
    if (O.type !== "component")
      return !1;
    let { children: P = [], name: D } = O;
    if (P.length !== 1)
      return !1;
    let M = n[P[0]];
    return M.type === "docs" ? !0 : M.type === "story" ? Zu(M.name, D) : !1;
  }), [n]), m = K(
    () => Object.keys(n).filter((w) => !_.includes(w)),
    [_]
  ), v = K(() => _.reduce(
    (w, O) => {
      let { children: P, parent: D, name: M } = n[O], [N] = P;
      if (D) {
        let Q = [...n[D].children];
        Q[Q.indexOf(O)] = N, w[D] = { ...n[D], children: Q };
      }
      return w[N] = {
        ...n[N],
        name: M,
        parent: D,
        depth: n[N].depth - 1
      }, w;
    },
    { ...n }
  ), [n]), S = K(() => m.reduce(
    (w, O) => Object.assign(w, { [O]: bo(v, O) }),
    {}
  ), [m, v]), [E, T] = Oc({
    // @ts-expect-error (non strict)
    containerRef: g,
    isBrowsing: t,
    refId: i,
    data: v,
    initialExpanded: b,
    rootIds: y,
    highlightedRef: u,
    setHighlightedItemId: c,
    selectedStoryId: p,
    onSelectStoryId: d
  }), C = K(() => Ir(v, r), [v, r]), k = K(() => m.map((w) => {
    let O = v[w], P = Sr(w, i);
    if (O.type === "root") {
      let M = I[O.id], N = M.every((Q) => E[Q]);
      return (
        // @ts-expect-error (TODO)
        /* @__PURE__ */ s.createElement(
          Bg,
          {
            api: h,
            key: P,
            item: O,
>>>>>>> main
            refId: i,
            collapsedData: v,
            isOrphan: !1,
            isDisplayed: !0,
<<<<<<< HEAD
            isSelected: d === T,
            isExpanded: !!w[T],
            setExpanded: O,
            isFullyExpanded: F,
            expandableDescendants: M,
            onSelectStoryId: p
=======
            isSelected: p === w,
            isExpanded: !!E[w],
            setExpanded: T,
            isFullyExpanded: N,
            expandableDescendants: M,
            onSelectStoryId: d
>>>>>>> main
          }
        )
      );
    }
<<<<<<< HEAD
    let D = !C.parent || I[T].every((M) => w[M]);
    return D === !1 ? null : /* @__PURE__ */ s.createElement(
      ap,
=======
    let D = !O.parent || S[w].every((M) => E[M]);
    return D === !1 ? null : /* @__PURE__ */ s.createElement(
      Dc,
>>>>>>> main
      {
        api: h,
        collapsedData: v,
        key: P,
<<<<<<< HEAD
        item: C,
        statuses: n?.[T] ?? {},
        groupStatus: _,
        refId: i,
        docsMode: l,
        isOrphan: f.some((M) => T === M || T.startsWith(`${M}-`)),
        isDisplayed: D,
        isSelected: d === T,
        isExpanded: !!w[T],
        setExpanded: O,
        onSelectStoryId: p
      }
    );
  }), [
    I,
    h,
    v,
    g,
    l,
    S,
    w,
    _,
    p,
    f,
    i,
    d,
    O,
    n
  ]);
  return /* @__PURE__ */ s.createElement(ji.Provider, { value: { data: r, allStatuses: n, groupStatus: _ } }, /* @__PURE__ */ s.createElement(
  lx, { ref: m, hasOrphans: o && f.length > 0 }, /* @__PURE__ */ s.createElement($c, null), k));
}, "Tree"));

// src/manager/components/sidebar/Refs.tsx
var gx = x.div(({ isMain: e }) => ({
  position: "relative",
  marginTop: e ? void 0 : 0
})), yx = x.div(({ theme: e }) => ({
=======
        item: O,
        status: r?.[w],
        groupStatus: C,
        refId: i,
        docsMode: l,
        isOrphan: f.some((M) => w === M || w.startsWith(`${M}-`)),
        isDisplayed: D,
        isSelected: p === w,
        isExpanded: !!E[w],
        setExpanded: T,
        onSelectStoryId: d
      }
    );
  }), [
    S,
    h,
    v,
    m,
    l,
    I,
    E,
    C,
    d,
    f,
    i,
    p,
    T,
    r
  ]);
  return /* @__PURE__ */ s.createElement(ei.Provider, { value: { data: n, status: r, groupStatus: C } }, /* @__PURE__ */ s.createElement(Dg,
  { ref: g, hasOrphans: o && f.length > 0 }, /* @__PURE__ */ s.createElement(gc, null), k));
}, "Tree"));

// src/manager/components/sidebar/Refs.tsx
var zg = x.div(({ isMain: e }) => ({
  position: "relative",
  marginTop: e ? void 0 : 0
})), Wg = x.div(({ theme: e }) => ({
>>>>>>> main
  fontWeight: e.typography.weight.bold,
  fontSize: e.typography.size.s2,
  // Similar to ListItem.tsx
  textDecoration: "none",
  lineHeight: "16px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  background: "transparent",
  width: "100%",
  marginTop: 20,
  paddingTop: 16,
  paddingBottom: 12,
  borderTop: `1px solid ${e.appBorderColor}`,
<<<<<<< HEAD
  color: e.base === "light" ? e.color.defaultText : Te(0.2, e.color.defaultText)
})), bx = x.div({
=======
  color: e.base === "light" ? e.color.defaultText : we(0.2, e.color.defaultText)
})), jg = x.div({
>>>>>>> main
  textOverflow: "ellipsis",
  whiteSpace: "nowrap",
  flex: 1,
  overflow: "hidden",
  marginLeft: 2
<<<<<<< HEAD
}), vx = x.button(({ theme: e }) => ({
=======
}), Vg = x.button(({ theme: e }) => ({
>>>>>>> main
  all: "unset",
  display: "flex",
  padding: "0px 8px",
  gap: 6,
  alignItems: "center",
  cursor: "pointer",
  overflow: "hidden",
  "&:focus": {
    borderColor: e.color.secondary,
    "span:first-of-type": {
      borderLeftColor: e.color.secondary
    }
  }
<<<<<<< HEAD
})), up = s.memo(/* @__PURE__ */ a(function(t) {
  let { docsOptions: o } = Ne(), i = oe(), {
    filteredIndex: r,
    id: n,
    title: l = n,
    isLoading: u,
    isBrowsing: c,
    selectedStoryId: d,
    highlightedRef: p,
    setHighlighted: m,
    loginUrl: h,
    type: b,
    expanded: f = !0,
    indexError: y,
    previewInitialized: S,
    allStatuses: E
  } = t, g = U(() => r ? Object.keys(r).length : 0, [r]), v = q(null), I = n === at, O = u || (b === "auto-inject" && !S || b === "server-ch\
ecked") || b === "unknown", C = _c(O, !!h && g === 0, !!y, !O && g === 0), [P, D] = K(f);
  V(() => {
    r && d && r[d] && D(!0);
  }, [D, r, d]);
  let M = A(() => D((W) => !W), [D]), F = A(
    (W) => m({ itemId: W, refId: n }),
    [m]
  ), Z = A(
    // @ts-expect-error (non strict)
    (W) => i && i.selectStory(W, void 0, { ref: !I && n }),
    [i, I, n]
  );
  return /* @__PURE__ */ s.createElement(s.Fragment, null, I || /* @__PURE__ */ s.createElement(
    yx,
    {
      "aria-label": `${P ? "Hide" : "Show"} ${l} stories`,
      "aria-expanded": P
    },
    /* @__PURE__ */ s.createElement(vx, { "data-action": "collapse-ref", onClick: M }, /* @__PURE__ */ s.createElement(Kt, { isExpanded: P }),
    /* @__PURE__ */ s.createElement(bx, { title: l }, l)),
    /* @__PURE__ */ s.createElement(Fc, { ...t, state: C, ref: v })
  ), P && /* @__PURE__ */ s.createElement(gx, { "data-title": l, isMain: I }, C === "auth" && /* @__PURE__ */ s.createElement(Dc, { id: n, loginUrl: h }),
  C === "error" && /* @__PURE__ */ s.createElement(Mc, { error: y }), C === "loading" && /* @__PURE__ */ s.createElement(Nc, { isMain: I }),
  C === "empty" && /* @__PURE__ */ s.createElement(Lc, { isMain: I }), C === "ready" && /* @__PURE__ */ s.createElement(
    lp,
    {
      allStatuses: E,
      isBrowsing: c,
      isMain: I,
      refId: n,
      data: r,
      docsMode: o.docsMode,
      selectedStoryId: d,
      onSelectStoryId: Z,
      highlightedRef: p,
      setHighlightedItemId: F
    }
  )));
}, "Ref"));

// src/manager/components/sidebar/useHighlighted.ts
var { document: Wr, window: cp } = se, pp = /* @__PURE__ */ a((e) => e ? { itemId: e.storyId, refId: e.refId } : null, "fromSelection"), dp = /* @__PURE__ */ a(
(e, t = {}, o = 1) => {
  let { containerRef: i, center: r = !1, attempts: n = 3, delay: l = 500 } = t, u = (i ? i.current : Wr)?.querySelector(e);
  u ? zt(u, r) : o <= n && setTimeout(dp, l, e, t, o + 1);
}, "scrollToSelector"), fp = /* @__PURE__ */ a(({
=======
})), Lc = s.memo(
  /* @__PURE__ */ a(function(t) {
    let { docsOptions: o } = Pe(), i = oe(), {
      filteredIndex: n,
      id: r,
      title: l = r,
      isLoading: u,
      isBrowsing: c,
      selectedStoryId: p,
      highlightedRef: d,
      setHighlighted: g,
      loginUrl: h,
      type: y,
      expanded: f = !0,
      indexError: b,
      previewInitialized: I
    } = t, _ = K(() => n ? Object.keys(n).length : 0, [n]), m = Y(null), v = r === st, E = u || (y === "auto-inject" && !I || y === "server-\
checked") || y === "unknown", w = Xu(E, !!h && _ === 0, !!b, !E && _ === 0), [O, P] = $(f);
    j(() => {
      n && p && n[p] && P(!0);
    }, [P, n, p]);
    let D = A(() => P((Q) => !Q), [P]), M = A(
      (Q) => g({ itemId: Q, refId: r }),
      [g]
    ), N = A(
      // @ts-expect-error (non strict)
      (Q) => i && i.selectStory(Q, void 0, { ref: !v && r }),
      [i, v, r]
    );
    return /* @__PURE__ */ s.createElement(s.Fragment, null, v || /* @__PURE__ */ s.createElement(
      Wg,
      {
        "aria-label": `${O ? "Hide" : "Show"} ${l} stories`,
        "aria-expanded": O
      },
      /* @__PURE__ */ s.createElement(Vg, { "data-action": "collapse-ref", onClick: D }, /* @__PURE__ */ s.createElement(Rt, { isExpanded: O }),
      /* @__PURE__ */ s.createElement(jg, { title: l }, l)),
      /* @__PURE__ */ s.createElement(ac, { ...t, state: w, ref: m })
    ), O && /* @__PURE__ */ s.createElement(zg, { "data-title": l, isMain: v }, w === "auth" && /* @__PURE__ */ s.createElement(rc, { id: r,
    loginUrl: h }), w === "error" && /* @__PURE__ */ s.createElement(nc, { error: b }), w === "loading" && /* @__PURE__ */ s.createElement(sc,
    { isMain: v }), w === "empty" && /* @__PURE__ */ s.createElement(ic, { isMain: v }), w === "ready" && /* @__PURE__ */ s.createElement(
      Mc,
      {
        status: t.status,
        isBrowsing: c,
        isMain: v,
        refId: r,
        data: n,
        docsMode: o.docsMode,
        selectedStoryId: p,
        onSelectStoryId: N,
        highlightedRef: d,
        setHighlightedItemId: M
      }
    )));
  }, "Ref")
);

// src/manager/components/sidebar/useHighlighted.ts
var { document: wr, window: Nc } = se, Rc = /* @__PURE__ */ a((e) => e ? { itemId: e.storyId, refId: e.refId } : null, "fromSelection"), Fc = /* @__PURE__ */ a(
(e, t = {}, o = 1) => {
  let { containerRef: i, center: n = !1, attempts: r = 3, delay: l = 500 } = t, u = (i ? i.current : wr)?.querySelector(e);
  u ? Dt(u, n) : o <= r && setTimeout(Fc, l, e, t, o + 1);
}, "scrollToSelector"), Hc = /* @__PURE__ */ a(({
>>>>>>> main
  containerRef: e,
  isLoading: t,
  isBrowsing: o,
  selected: i
}) => {
<<<<<<< HEAD
  let r = pp(i), n = q(r), [l, u] = K(r), c = oe(), d = A(
    (m) => {
      n.current = m, u(m);
    },
    [n]
  ), p = A(
    (m, h = !1) => {
      let b = m.getAttribute("data-item-id"), f = m.getAttribute("data-ref-id");
      !b || !f || (d({ itemId: b, refId: f }), zt(m, h));
    },
    [d]
  );
  return V(() => {
    let m = pp(i);
    d(m), m && dp(`[data-item-id="${m.itemId}"][data-ref-id="${m.refId}"]`, {
      containerRef: e,
      center: !0
    });
  }, [e, i, d]), V(() => {
    let m = Wr.getElementById("storybook-explorer-menu"), h, b = /* @__PURE__ */ a((f) => {
      if (t || !o || !e.current || !St(!1, f))
        return;
      let y = $e("ArrowUp", f), S = $e("ArrowDown", f);
      if (!(y || S))
        return;
      let E = cp.requestAnimationFrame(() => {
        cp.cancelAnimationFrame(h), h = E;
        let g = f.target;
        if (!Wt(m, g) && !Wt(g, m))
          return;
        g.hasAttribute("data-action") && g.blur();
        let v = Array.from(
          e.current?.querySelectorAll("[data-highlightable=true]") || []
        ), I = v.findIndex(
          (_) => _.getAttribute("data-item-id") === n.current?.itemId && _.getAttribute("data-ref-id") === n.current?.refId
        ), w = Cc(v, I, y ? -1 : 1), O = y ? w === v.length - 1 : w === 0;
        if (p(v[w], O), v[w].getAttribute("data-nodetype") === "component") {
          let { itemId: _, refId: k } = n.current, T = c.resolveStory(_, k === "storybook_internal" ? void 0 : k);
          T.type === "component" && c.emit(Ct, {
            // @ts-expect-error (non strict)
            ids: [T.children[0]],
=======
  let n = Rc(i), r = Y(n), [l, u] = $(n), c = oe(), p = A(
    (g) => {
      r.current = g, u(g);
    },
    [r]
  ), d = A(
    (g, h = !1) => {
      let y = g.getAttribute("data-item-id"), f = g.getAttribute("data-ref-id");
      !y || !f || (p({ itemId: y, refId: f }), Dt(g, h));
    },
    [p]
  );
  return j(() => {
    let g = Rc(i);
    p(g), g && Fc(`[data-item-id="${g.itemId}"][data-ref-id="${g.refId}"]`, {
      containerRef: e,
      center: !0
    });
  }, [e, i, p]), j(() => {
    let g = wr.getElementById("storybook-explorer-menu"), h, y = /* @__PURE__ */ a((f) => {
      if (t || !o || !e.current || !vt(!1, f))
        return;
      let b = Ve("ArrowUp", f), I = Ve("ArrowDown", f);
      if (!(b || I))
        return;
      let _ = Nc.requestAnimationFrame(() => {
        Nc.cancelAnimationFrame(h), h = _;
        let m = f.target;
        if (!Mt(g, m) && !Mt(m, g))
          return;
        m.hasAttribute("data-action") && m.blur();
        let v = Array.from(
          e.current?.querySelectorAll("[data-highlightable=true]") || []
        ), S = v.findIndex(
          (C) => C.getAttribute("data-item-id") === r.current?.itemId && C.getAttribute("data-ref-id") === r.current?.refId
        ), E = Qu(v, S, b ? -1 : 1), T = b ? E === v.length - 1 : E === 0;
        if (d(v[E], T), v[E].getAttribute("data-nodetype") === "component") {
          let { itemId: C, refId: k } = r.current, w = c.resolveStory(C, k === "storybook_internal" ? void 0 : k);
          w.type === "component" && c.emit(St, {
            // @ts-expect-error (non strict)
            ids: [w.children[0]],
>>>>>>> main
            options: { target: k }
          });
        }
      });
    }, "navigateTree");
<<<<<<< HEAD
    return Wr.addEventListener("keydown", b), () => Wr.removeEventListener("keydown", b);
  }, [t, o, n, p]), [l, d, n];
}, "useHighlighted");

// src/manager/components/sidebar/Explorer.tsx
var mp = s.memo(/* @__PURE__ */ a(function({
  isLoading: t,
  isBrowsing: o,
  dataset: i,
  selected: r
}) {
  let n = q(null), [l, u, c] = fp({
    containerRef: n,
    isLoading: t,
    isBrowsing: o,
    selected: r
=======
    return wr.addEventListener("keydown", y), () => wr.removeEventListener("keydown", y);
  }, [t, o, r, d]), [l, p, r];
}, "useHighlighted");

// src/manager/components/sidebar/Explorer.tsx
var Bc = s.memo(/* @__PURE__ */ a(function({
  isLoading: t,
  isBrowsing: o,
  dataset: i,
  selected: n
}) {
  let r = Y(null), [l, u, c] = Hc({
    containerRef: r,
    isLoading: t,
    isBrowsing: o,
    selected: n
>>>>>>> main
  });
  return /* @__PURE__ */ s.createElement(
    "div",
    {
<<<<<<< HEAD
      ref: n,
=======
      ref: r,
>>>>>>> main
      id: "storybook-explorer-tree",
      "data-highlighted-ref-id": l?.refId,
      "data-highlighted-item-id": l?.itemId
    },
<<<<<<< HEAD
    l && /* @__PURE__ */ s.createElement(xc, { ...l }),
    i.entries.map(([d, p]) => /* @__PURE__ */ s.createElement(
      up,
      {
        ...p,
        key: d,
        isLoading: t,
        isBrowsing: o,
        selectedStoryId: r?.refId === p.id ? r.storyId : null,
=======
    l && /* @__PURE__ */ s.createElement(Ku, { ...l }),
    i.entries.map(([p, d]) => /* @__PURE__ */ s.createElement(
      Lc,
      {
        ...d,
        key: p,
        isLoading: t,
        isBrowsing: o,
        selectedStoryId: n?.refId === d.id ? n.storyId : null,
>>>>>>> main
        highlightedRef: c,
        setHighlighted: u
      }
    ))
  );
}, "Explorer"));

// src/manager/components/sidebar/Brand.tsx
<<<<<<< HEAD
var xx = x(ir)(({ theme: e }) => ({
=======
var Kg = x(Xo)(({ theme: e }) => ({
>>>>>>> main
  width: "auto",
  height: "22px !important",
  display: "block",
  color: e.base === "light" ? e.color.defaultText : e.color.lightest
<<<<<<< HEAD
})), Ix = x.img({
  display: "block",
  maxWidth: "150px !important",
  maxHeight: "100px"
}), hp = x.a(({ theme: e }) => ({
=======
})), $g = x.img({
  display: "block",
  maxWidth: "150px !important",
  maxHeight: "100px"
}), zc = x.a(({ theme: e }) => ({
>>>>>>> main
  display: "inline-block",
  height: "100%",
  margin: "-3px -4px",
  padding: "2px 3px",
  border: "1px solid transparent",
  borderRadius: 3,
  color: "inherit",
  textDecoration: "none",
  "&:focus": {
    outline: 0,
    borderColor: e.color.secondary
  }
<<<<<<< HEAD
})), gp = Sa(({ theme: e }) => {
  let { title: t = "Storybook", url: o = "./", image: i, target: r } = e.brand, n = r || (o === "./" ? "" : "_blank");
  if (i === null)
    return t === null ? null : o ? /* @__PURE__ */ s.createElement(hp, { href: o, target: n, dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ s.
    createElement("div", { dangerouslySetInnerHTML: { __html: t } });
  let l = i ? /* @__PURE__ */ s.createElement(Ix, { src: i, alt: t }) : /* @__PURE__ */ s.createElement(xx, { alt: t });
  return o ? /* @__PURE__ */ s.createElement(hp, { title: t, href: o, target: n }, l) : /* @__PURE__ */ s.createElement("div", null, l);
});

// src/manager/components/sidebar/Menu.tsx
var qi = x(ee)(({ highlighted: e, theme: t, isMobile: o }) => ({
=======
})), Wc = ma(({ theme: e }) => {
  let { title: t = "Storybook", url: o = "./", image: i, target: n } = e.brand, r = n || (o === "./" ? "" : "_blank");
  if (i === null)
    return t === null ? null : o ? /* @__PURE__ */ s.createElement(zc, { href: o, target: r, dangerouslySetInnerHTML: { __html: t } }) : /* @__PURE__ */ s.
    createElement("div", { dangerouslySetInnerHTML: { __html: t } });
  let l = i ? /* @__PURE__ */ s.createElement($g, { src: i, alt: t }) : /* @__PURE__ */ s.createElement(Kg, { alt: t });
  return o ? /* @__PURE__ */ s.createElement(zc, { title: t, href: o, target: r }, l) : /* @__PURE__ */ s.createElement("div", null, l);
});

// src/manager/components/sidebar/Menu.tsx
var jc = x(te)(({ highlighted: e, theme: t }) => ({
>>>>>>> main
  position: "relative",
  overflow: "visible",
  marginTop: 0,
  zIndex: 1,
<<<<<<< HEAD
  ...o && {
    width: 36,
    height: 36
  },
=======
>>>>>>> main
  ...e && {
    "&:before, &:after": {
      content: '""',
      position: "absolute",
      top: 6,
      right: 6,
      width: 5,
      height: 5,
      zIndex: 2,
      borderRadius: "50%",
      background: t.background.app,
      border: `1px solid ${t.background.app}`,
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:after": {
      background: t.color.positive,
      border: "1px solid rgba(0, 0, 0, 0.1)",
      boxShadow: `0 0 0 2px ${t.background.app}`
    },
    "&:hover:after, &:focus-visible:after": {
<<<<<<< HEAD
      boxShadow: `0 0 0 2px ${Te(0.88, t.color.secondary)}`
    }
  }
})), Sx = x.div({
  display: "flex",
  gap: 6
}), wx = /* @__PURE__ */ a(({ menu: e, onClick: t }) => /* @__PURE__ */ s.createElement(ot, { links: e, onClick: t }), "SidebarMenuList"), yp = /* @__PURE__ */ a(
({ menu: e, isHighlighted: t, onClick: o }) => {
  let [i, r] = K(!1), { isMobile: n, setMobileMenuOpen: l } = ge();
  return n ? /* @__PURE__ */ s.createElement(Sx, null, /* @__PURE__ */ s.createElement(
    qi,
    {
      title: "About Storybook",
      "aria-label": "About Storybook",
      highlighted: !!t,
      active: !1,
      onClick: o,
      isMobile: !0
    },
    /* @__PURE__ */ s.createElement(Yo, null)
  ), /* @__PURE__ */ s.createElement(
    qi,
    {
      title: "Close menu",
      "aria-label": "Close menu",
      highlighted: !1,
      active: !1,
      onClick: () => l(!1),
      isMobile: !0
    },
    /* @__PURE__ */ s.createElement(je, null)
  )) : /* @__PURE__ */ s.createElement(
    ve,
    {
      placement: "top",
      closeOnOutsideClick: !0,
      tooltip: ({ onHide: u }) => /* @__PURE__ */ s.createElement(wx, { onClick: u, menu: e }),
      onVisibleChange: r
    },
    /* @__PURE__ */ s.createElement(
      qi,
      {
        title: "Shortcuts",
        "aria-label": "Shortcuts",
        highlighted: !!t,
        active: i,
        size: "medium",
        isMobile: !1
      },
      /* @__PURE__ */ s.createElement(Yo, null)
=======
      boxShadow: `0 0 0 2px ${we(0.88, t.color.secondary)}`
    }
  }
})), Ug = x.div({
  display: "flex",
  gap: 4
}), Gg = /* @__PURE__ */ a(({ menu: e, onClick: t }) => /* @__PURE__ */ s.createElement(gt, { links: e, onClick: t }), "SidebarMenuList"), Vc = /* @__PURE__ */ a(
({ menu: e, isHighlighted: t, onClick: o }) => {
  let [i, n] = $(!1), { isMobile: r, setMobileMenuOpen: l } = ge();
  return r ? /* @__PURE__ */ s.createElement(Ug, null, /* @__PURE__ */ s.createElement(
    jc,
    {
      title: "About Storybook",
      "aria-label": "About Storybook",
      highlighted: t,
      active: !1,
      onClick: o
    },
    /* @__PURE__ */ s.createElement(on, null)
  ), /* @__PURE__ */ s.createElement(
    te,
    {
      title: "Close menu",
      "aria-label": "Close menu",
      onClick: () => l(!1)
    },
    /* @__PURE__ */ s.createElement(Ge, null)
  )) : /* @__PURE__ */ s.createElement(
    be,
    {
      placement: "top",
      closeOnOutsideClick: !0,
      tooltip: ({ onHide: u }) => /* @__PURE__ */ s.createElement(Gg, { onClick: u, menu: e }),
      onVisibleChange: n
    },
    /* @__PURE__ */ s.createElement(
      jc,
      {
        title: "Shortcuts",
        "aria-label": "Shortcuts",
        highlighted: t,
        active: i
      },
      /* @__PURE__ */ s.createElement(on, null)
>>>>>>> main
    )
  );
}, "SidebarMenu");

// src/manager/components/sidebar/Heading.tsx
<<<<<<< HEAD
var Ex = x.div(({ theme: e }) => ({
=======
var Yg = x.div(({ theme: e }) => ({
>>>>>>> main
  fontSize: e.typography.size.s2,
  fontWeight: e.typography.weight.bold,
  color: e.color.defaultText,
  marginRight: 20,
  display: "flex",
  width: "100%",
  alignItems: "center",
  minHeight: 22,
  "& > * > *": {
    maxWidth: "100%"
  },
  "& > *": {
    maxWidth: "100%",
    height: "auto",
    display: "block",
    flex: "1 1 auto"
  }
<<<<<<< HEAD
})), Tx = x.div({
=======
})), qg = x.div({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  position: "relative",
  minHeight: 42,
  paddingLeft: 8
<<<<<<< HEAD
}), Cx = x(he)(({ theme: e }) => ({
=======
}), Qg = x(me)(({ theme: e }) => ({
>>>>>>> main
  display: "none",
  "@media (min-width: 600px)": {
    display: "block",
    position: "absolute",
    fontSize: e.typography.size.s1,
    zIndex: 3,
    border: 0,
    width: 1,
    height: 1,
    padding: 0,
    margin: -1,
    overflow: "hidden",
    clip: "rect(0, 0, 0, 0)",
    whiteSpace: "nowrap",
    wordWrap: "normal",
    opacity: 0,
    transition: "opacity 150ms ease-out",
    "&:focus": {
      width: "100%",
      height: "inherit",
      padding: "10px 15px",
      margin: 0,
      clip: "unset",
      overflow: "unset",
      opacity: 1
    }
  }
<<<<<<< HEAD
})), bp = /* @__PURE__ */ a(({
  menuHighlighted: e = !1,
  menu: t,
  skipLinkHref: o,
  isLoading: i,
  onMenuClick: r,
  ...n
}) => /* @__PURE__ */ s.createElement(Tx, { ...n }, o && /* @__PURE__ */ s.createElement(Cx, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: o, tabIndex: 0 }, "Skip to canvas")), /* @__PURE__ */ s.createElement(Ex, null, /* @__PURE__ */ s.createElement(gp, null)), /* @__PURE__ */ s.
createElement(yp, { menu: t, isHighlighted: e, onClick: r })), "Heading");

// ../node_modules/downshift/dist/downshift.esm.js
var Y = Ve(ri());
var Px = Ve(Sp());

// ../node_modules/compute-scroll-into-view/dist/index.js
var wp = /* @__PURE__ */ a((e) => typeof e == "object" && e != null && e.nodeType === 1, "t"), Ep = /* @__PURE__ */ a((e, t) => (!t || e !==
"hidden") && e !== "visible" && e !== "clip", "e"), Zr = /* @__PURE__ */ a((e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let o = getComputedStyle(e, null);
    return Ep(o.overflowY, t) || Ep(o.overflowX, t) || ((i) => {
      let r = ((n) => {
        if (!n.ownerDocument || !n.ownerDocument.defaultView) return null;
        try {
          return n.ownerDocument.defaultView.frameElement;
=======
})), Kc = /* @__PURE__ */ a(({
  menuHighlighted: e = !1,
  menu: t,
  skipLinkHref: o,
  extra: i,
  isLoading: n,
  onMenuClick: r,
  ...l
}) => /* @__PURE__ */ s.createElement(qg, { ...l }, o && /* @__PURE__ */ s.createElement(Qg, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: o, tabIndex: 0 }, "Skip to canvas")), /* @__PURE__ */ s.createElement(Yg, null, /* @__PURE__ */ s.createElement(Wc, null)), n ?
null : i.map(({ id: u, render: c }) => /* @__PURE__ */ s.createElement(c, { key: u })), /* @__PURE__ */ s.createElement(Vc, { menu: t, isHighlighted: e,
onClick: r })), "Heading");

// ../node_modules/downshift/dist/downshift.esm.js
var q = ze(pn());
var ey = ze(Yc());

// ../node_modules/compute-scroll-into-view/dist/index.js
var qc = /* @__PURE__ */ a((e) => typeof e == "object" && e != null && e.nodeType === 1, "t"), Qc = /* @__PURE__ */ a((e, t) => (!t || e !==
"hidden") && e !== "visible" && e !== "clip", "e"), si = /* @__PURE__ */ a((e, t) => {
  if (e.clientHeight < e.scrollHeight || e.clientWidth < e.scrollWidth) {
    let o = getComputedStyle(e, null);
    return Qc(o.overflowY, t) || Qc(o.overflowX, t) || ((i) => {
      let n = ((r) => {
        if (!r.ownerDocument || !r.ownerDocument.defaultView) return null;
        try {
          return r.ownerDocument.defaultView.frameElement;
>>>>>>> main
        } catch {
          return null;
        }
      })(i);
<<<<<<< HEAD
      return !!r && (r.clientHeight < i.scrollHeight || r.clientWidth < i.scrollWidth);
    })(e);
  }
  return !1;
}, "n"), Jr = /* @__PURE__ */ a((e, t, o, i, r, n, l, u) => n < e && l > t || n > e && l < t ? 0 : n <= e && u <= o || l >= t && u >= o ? n -
e - i : l > t && u < o || n < e && u > o ? l - t + r : 0, "o"), Ox = /* @__PURE__ */ a((e) => {
  let t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, "l"), Tp = /* @__PURE__ */ a((e, t) => {
  var o, i, r, n;
  if (typeof document > "u") return [];
  let { scrollMode: l, block: u, inline: c, boundary: d, skipOverflowHiddenElements: p } = t, m = typeof d == "function" ? d : (W) => W !== d;
  if (!wp(e)) throw new TypeError("Invalid target");
  let h = document.scrollingElement || document.documentElement, b = [], f = e;
  for (; wp(f) && m(f); ) {
    if (f = Ox(f), f === h) {
      b.push(f);
      break;
    }
    f != null && f === document.body && Zr(f) && !Zr(document.documentElement) || f != null && Zr(f, p) && b.push(f);
  }
  let y = (i = (o = window.visualViewport) == null ? void 0 : o.width) != null ? i : innerWidth, S = (n = (r = window.visualViewport) == null ?
  void 0 : r.height) != null ? n : innerHeight, { scrollX: E, scrollY: g } = window, { height: v, width: I, top: w, right: O, bottom: _, left: k } = e.
  getBoundingClientRect(), { top: T, right: C, bottom: P, left: D } = ((W) => {
    let Q = window.getComputedStyle(W);
    return { top: parseFloat(Q.scrollMarginTop) || 0, right: parseFloat(Q.scrollMarginRight) || 0, bottom: parseFloat(Q.scrollMarginBottom) ||
    0, left: parseFloat(Q.scrollMarginLeft) || 0 };
  })(e), M = u === "start" || u === "nearest" ? w - T : u === "end" ? _ + P : w + v / 2 - T + P, F = c === "center" ? k + I / 2 - D + C : c ===
  "end" ? O + C : k - D, Z = [];
  for (let W = 0; W < b.length; W++) {
    let Q = b[W], { height: H, width: G, top: z, right: re, bottom: R, left: B } = Q.getBoundingClientRect();
    if (l === "if-needed" && w >= 0 && k >= 0 && _ <= S && O <= y && (Q === h && !Zr(Q) || w >= z && _ <= R && k >= B && O <= re)) return Z;
    let L = getComputedStyle(Q), $ = parseInt(L.borderLeftWidth, 10), J = parseInt(L.borderTopWidth, 10), ie = parseInt(L.borderRightWidth, 10),
    te = parseInt(L.borderBottomWidth, 10), de = 0, ae = 0, ce = "offsetWidth" in Q ? Q.offsetWidth - Q.clientWidth - $ - ie : 0, ue = "offs\
etHeight" in Q ? Q.offsetHeight - Q.clientHeight - J - te : 0, Ie = "offsetWidth" in Q ? Q.offsetWidth === 0 ? 0 : G / Q.offsetWidth : 0, ye = "\
offsetHeight" in Q ? Q.offsetHeight === 0 ? 0 : H / Q.offsetHeight : 0;
    if (h === Q) de = u === "start" ? M : u === "end" ? M - S : u === "nearest" ? Jr(g, g + S, S, J, te, g + M, g + M + v, v) : M - S / 2, ae =
    c === "start" ? F : c === "center" ? F - y / 2 : c === "end" ? F - y : Jr(E, E + y, y, $, ie, E + F, E + F + I, I), de = Math.max(0, de +
    g), ae = Math.max(0, ae + E);
    else {
      de = u === "start" ? M - z - J : u === "end" ? M - R + te + ue : u === "nearest" ? Jr(z, R, H, J, te + ue, M, M + v, v) : M - (z + H /
      2) + ue / 2, ae = c === "start" ? F - B - $ : c === "center" ? F - (B + G / 2) + ce / 2 : c === "end" ? F - re + ie + ce : Jr(B, re, G,
      $, ie + ce, F, F + I, I);
      let { scrollLeft: Oe, scrollTop: fe } = Q;
      de = ye === 0 ? 0 : Math.max(0, Math.min(fe + de / ye, Q.scrollHeight - H / ye + ue)), ae = Ie === 0 ? 0 : Math.max(0, Math.min(Oe + ae /
      Ie, Q.scrollWidth - G / Ie + ce)), M += fe - de, F += Oe - ae;
    }
    Z.push({ el: Q, top: de, left: ae });
  }
  return Z;
}, "r");

// ../node_modules/tslib/tslib.es6.mjs
var $t = /* @__PURE__ */ a(function() {
  return $t = Object.assign || /* @__PURE__ */ a(function(t) {
    for (var o, i = 1, r = arguments.length; i < r; i++) {
      o = arguments[i];
      for (var n in o) Object.prototype.hasOwnProperty.call(o, n) && (t[n] = o[n]);
    }
    return t;
  }, "__assign"), $t.apply(this, arguments);
}, "__assign");

// ../node_modules/downshift/dist/downshift.esm.js
var Ax = 0;
function Cp(e) {
  return typeof e == "function" ? e : Re;
}
a(Cp, "cbToCb");
function Re() {
}
a(Re, "noop");
function Mp(e, t) {
  if (e) {
    var o = Tp(e, {
=======
      return !!n && (n.clientHeight < i.scrollHeight || n.clientWidth < i.scrollWidth);
    })(e);
  }
  return !1;
}, "n"), Rr = /* @__PURE__ */ a((e, t, o, i, n, r, l, u) => r < e && l > t || r > e && l < t ? 0 : r <= e && u <= o || l >= t && u >= o ? r -
e - i : l > t && u < o || r < e && u > o ? l - t + n : 0, "o"), Jg = /* @__PURE__ */ a((e) => {
  let t = e.parentElement;
  return t ?? (e.getRootNode().host || null);
}, "l"), Xc = /* @__PURE__ */ a((e, t) => {
  var o, i, n, r;
  if (typeof document > "u") return [];
  let { scrollMode: l, block: u, inline: c, boundary: p, skipOverflowHiddenElements: d } = t, g = typeof p == "function" ? p : (V) => V !== p;
  if (!qc(e)) throw new TypeError("Invalid target");
  let h = document.scrollingElement || document.documentElement, y = [], f = e;
  for (; qc(f) && g(f); ) {
    if (f = Jg(f), f === h) {
      y.push(f);
      break;
    }
    f != null && f === document.body && si(f) && !si(document.documentElement) || f != null && si(f, d) && y.push(f);
  }
  let b = (i = (o = window.visualViewport) == null ? void 0 : o.width) != null ? i : innerWidth, I = (r = (n = window.visualViewport) == null ?
  void 0 : n.height) != null ? r : innerHeight, { scrollX: _, scrollY: m } = window, { height: v, width: S, top: E, right: T, bottom: C, left: k } = e.
  getBoundingClientRect(), { top: w, right: O, bottom: P, left: D } = ((V) => {
    let X = window.getComputedStyle(V);
    return { top: parseFloat(X.scrollMarginTop) || 0, right: parseFloat(X.scrollMarginRight) || 0, bottom: parseFloat(X.scrollMarginBottom) ||
    0, left: parseFloat(X.scrollMarginLeft) || 0 };
  })(e), M = u === "start" || u === "nearest" ? E - w : u === "end" ? C + P : E + v / 2 - w + P, N = c === "center" ? k + S / 2 - D + O : c ===
  "end" ? T + O : k - D, Q = [];
  for (let V = 0; V < y.length; V++) {
    let X = y[V], { height: H, width: U, top: z, right: re, bottom: R, left: F } = X.getBoundingClientRect();
    if (l === "if-needed" && E >= 0 && k >= 0 && C <= I && T <= b && E >= z && C <= R && k >= F && T <= re) return Q;
    let L = getComputedStyle(X), W = parseInt(L.borderLeftWidth, 10), J = parseInt(L.borderTopWidth, 10), ie = parseInt(L.borderRightWidth, 10),
    ee = parseInt(L.borderBottomWidth, 10), de = 0, ae = 0, ce = "offsetWidth" in X ? X.offsetWidth - X.clientWidth - W - ie : 0, ue = "offs\
etHeight" in X ? X.offsetHeight - X.clientHeight - J - ee : 0, Se = "offsetWidth" in X ? X.offsetWidth === 0 ? 0 : U / X.offsetWidth : 0, ye = "\
offsetHeight" in X ? X.offsetHeight === 0 ? 0 : H / X.offsetHeight : 0;
    if (h === X) de = u === "start" ? M : u === "end" ? M - I : u === "nearest" ? Rr(m, m + I, I, J, ee, m + M, m + M + v, v) : M - I / 2, ae =
    c === "start" ? N : c === "center" ? N - b / 2 : c === "end" ? N - b : Rr(_, _ + b, b, W, ie, _ + N, _ + N + S, S), de = Math.max(0, de +
    m), ae = Math.max(0, ae + _);
    else {
      de = u === "start" ? M - z - J : u === "end" ? M - R + ee + ue : u === "nearest" ? Rr(z, R, H, J, ee + ue, M, M + v, v) : M - (z + H /
      2) + ue / 2, ae = c === "start" ? N - F - W : c === "center" ? N - (F + U / 2) + ce / 2 : c === "end" ? N - re + ie + ce : Rr(F, re, U,
      W, ie + ce, N, N + S, S);
      let { scrollLeft: Oe, scrollTop: fe } = X;
      de = ye === 0 ? 0 : Math.max(0, Math.min(fe + de / ye, X.scrollHeight - H / ye + ue)), ae = Se === 0 ? 0 : Math.max(0, Math.min(Oe + ae /
      Se, X.scrollWidth - U / Se + ce)), M += fe - de, N += Oe - ae;
    }
    Q.push({ el: X, top: de, left: ae });
  }
  return Q;
}, "r");

// ../node_modules/tslib/tslib.es6.mjs
var Ft = /* @__PURE__ */ a(function() {
  return Ft = Object.assign || /* @__PURE__ */ a(function(t) {
    for (var o, i = 1, n = arguments.length; i < n; i++) {
      o = arguments[i];
      for (var r in o) Object.prototype.hasOwnProperty.call(o, r) && (t[r] = o[r]);
    }
    return t;
  }, "__assign"), Ft.apply(this, arguments);
}, "__assign");

// ../node_modules/downshift/dist/downshift.esm.js
var ty = 0;
function Zc(e) {
  return typeof e == "function" ? e : Fe;
}
a(Zc, "cbToCb");
function Fe() {
}
a(Fe, "noop");
function ip(e, t) {
  if (e) {
    var o = Xc(e, {
>>>>>>> main
      boundary: t,
      block: "nearest",
      scrollMode: "if-needed"
    });
    o.forEach(function(i) {
<<<<<<< HEAD
      var r = i.el, n = i.top, l = i.left;
      r.scrollTop = n, r.scrollLeft = l;
    });
  }
}
a(Mp, "scrollIntoView");
function _p(e, t, o) {
  var i = e === t || t instanceof o.Node && e.contains && e.contains(t);
  return i;
}
a(_p, "isOrContainsNode");
function fn(e, t) {
=======
      var n = i.el, r = i.top, l = i.left;
      n.scrollTop = r, n.scrollLeft = l;
    });
  }
}
a(ip, "scrollIntoView");
function Jc(e, t, o) {
  var i = e === t || t instanceof o.Node && e.contains && e.contains(t);
  return i;
}
a(Jc, "isOrContainsNode");
function Yr(e, t) {
>>>>>>> main
  var o;
  function i() {
    o && clearTimeout(o);
  }
  a(i, "cancel");
<<<<<<< HEAD
  function r() {
    for (var n = arguments.length, l = new Array(n), u = 0; u < n; u++)
=======
  function n() {
    for (var r = arguments.length, l = new Array(r), u = 0; u < r; u++)
>>>>>>> main
      l[u] = arguments[u];
    i(), o = setTimeout(function() {
      o = null, e.apply(void 0, l);
    }, t);
  }
<<<<<<< HEAD
  return a(r, "wrapper"), r.cancel = i, r;
}
a(fn, "debounce");
=======
  return a(n, "wrapper"), n.cancel = i, n;
}
a(Yr, "debounce");
>>>>>>> main
function le() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
<<<<<<< HEAD
    for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), l = 1; l < r; l++)
      n[l - 1] = arguments[l];
    return t.some(function(u) {
      return u && u.apply(void 0, [i].concat(n)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
=======
    for (var n = arguments.length, r = new Array(n > 1 ? n - 1 : 0), l = 1; l < n; l++)
      r[l - 1] = arguments[l];
    return t.some(function(u) {
      return u && u.apply(void 0, [i].concat(r)), i.preventDownshiftDefault || i.hasOwnProperty("nativeEvent") && i.nativeEvent.preventDownshiftDefault;
>>>>>>> main
    });
  };
}
a(le, "callAllEventHandlers");
<<<<<<< HEAD
function Ze() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
    t.forEach(function(r) {
      typeof r == "function" ? r(i) : r && (r.current = i);
    });
  };
}
a(Ze, "handleRefs");
function Lp() {
  return String(Ax++);
}
a(Lp, "generateId");
function Dx(e) {
=======
function Je() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return function(i) {
    t.forEach(function(n) {
      typeof n == "function" ? n(i) : n && (n.current = i);
    });
  };
}
a(Je, "handleRefs");
function sp() {
  return String(ty++);
}
a(sp, "generateId");
function oy(e) {
>>>>>>> main
  var t = e.isOpen, o = e.resultCount, i = e.previousResultCount;
  return t ? o ? o !== i ? o + " result" + (o === 1 ? " is" : "s are") + " available, use up and down arrow keys to navigate. Press Enter ke\
y to select." : "" : "No results are available." : "";
}
<<<<<<< HEAD
a(Dx, "getA11yStatusMessage");
function kp(e, t) {
=======
a(oy, "getA11yStatusMessage");
function ep(e, t) {
>>>>>>> main
  return e = Array.isArray(e) ? (
    /* istanbul ignore next (preact) */
    e[0]
  ) : e, !e && t ? t : e;
}
<<<<<<< HEAD
a(kp, "unwrapArray");
function Mx(e) {
  return typeof e.type == "string";
}
a(Mx, "isDOMElement");
function Lx(e) {
  return e.props;
}
a(Lx, "getElementProps");
var Nx = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function en(e) {
  e === void 0 && (e = {});
  var t = {};
  return Nx.forEach(function(o) {
    e.hasOwnProperty(o) && (t[o] = e[o]);
  }), t;
}
a(en, "pickState");
function Vo(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(o, i) {
    return o[i] = sn(t, i) ? t[i] : e[i], o;
  }, {});
}
a(Vo, "getState");
function sn(e, t) {
  return e[t] !== void 0;
}
a(sn, "isControlledProp");
function po(e) {
  var t = e.key, o = e.keyCode;
  return o >= 37 && o <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
a(po, "normalizeArrowKey");
function Je(e, t, o, i, r) {
  r === void 0 && (r = !1);
  var n = o.length;
  if (n === 0)
    return -1;
  var l = n - 1;
  (typeof e != "number" || e < 0 || e > l) && (e = t > 0 ? -1 : l + 1);
  var u = e + t;
  u < 0 ? u = r ? l : 0 : u > l && (u = r ? 0 : l);
  var c = wt(u, t < 0, o, i, r);
  return c === -1 ? e >= n ? -1 : e : c;
}
a(Je, "getHighlightedIndex");
function wt(e, t, o, i, r) {
  r === void 0 && (r = !1);
  var n = o.length;
=======
a(ep, "unwrapArray");
function ry(e) {
  return typeof e.type == "string";
}
a(ry, "isDOMElement");
function ny(e) {
  return e.props;
}
a(ny, "getElementProps");
var iy = ["highlightedIndex", "inputValue", "isOpen", "selectedItem", "type"];
function Fr(e) {
  e === void 0 && (e = {});
  var t = {};
  return iy.forEach(function(o) {
    e.hasOwnProperty(o) && (t[o] = e[o]);
  }), t;
}
a(Fr, "pickState");
function _o(e, t) {
  return !e || !t ? e : Object.keys(e).reduce(function(o, i) {
    return o[i] = jr(t, i) ? t[i] : e[i], o;
  }, {});
}
a(_o, "getState");
function jr(e, t) {
  return e[t] !== void 0;
}
a(jr, "isControlledProp");
function to(e) {
  var t = e.key, o = e.keyCode;
  return o >= 37 && o <= 40 && t.indexOf("Arrow") !== 0 ? "Arrow" + t : t;
}
a(to, "normalizeArrowKey");
function et(e, t, o, i, n) {
  n === void 0 && (n = !1);
  var r = o.length;
  if (r === 0)
    return -1;
  var l = r - 1;
  (typeof e != "number" || e < 0 || e > l) && (e = t > 0 ? -1 : l + 1);
  var u = e + t;
  u < 0 ? u = n ? l : 0 : u > l && (u = n ? 0 : l);
  var c = xt(u, t < 0, o, i, n);
  return c === -1 ? e >= r ? -1 : e : c;
}
a(et, "getHighlightedIndex");
function xt(e, t, o, i, n) {
  n === void 0 && (n = !1);
  var r = o.length;
>>>>>>> main
  if (t) {
    for (var l = e; l >= 0; l--)
      if (!i(o[l], l))
        return l;
  } else
<<<<<<< HEAD
    for (var u = e; u < n; u++)
      if (!i(o[u], u))
        return u;
  return r ? wt(t ? n - 1 : 0, t, o, i) : -1;
}
a(wt, "getNonDisabledIndex");
function an(e, t, o, i) {
  return i === void 0 && (i = !0), o && t.some(function(r) {
    return r && (_p(r, e, o) || i && _p(r, o.document.activeElement, o));
  });
}
a(an, "targetWithinDownshift");
var Fx = fn(function(e) {
  Np(e).textContent = "";
}, 500);
function Np(e) {
=======
    for (var u = e; u < r; u++)
      if (!i(o[u], u))
        return u;
  return n ? xt(t ? r - 1 : 0, t, o, i) : -1;
}
a(xt, "getNonDisabledIndex");
function Vr(e, t, o, i) {
  return i === void 0 && (i = !0), o && t.some(function(n) {
    return n && (Jc(n, e, o) || i && Jc(n, o.document.activeElement, o));
  });
}
a(Vr, "targetWithinDownshift");
var sy = Yr(function(e) {
  ap(e).textContent = "";
}, 500);
function ap(e) {
>>>>>>> main
  var t = e.getElementById("a11y-status-message");
  return t || (t = e.createElement("div"), t.setAttribute("id", "a11y-status-message"), t.setAttribute("role", "status"), t.setAttribute("ar\
ia-live", "polite"), t.setAttribute("aria-relevant", "additions text"), Object.assign(t.style, {
    border: "0",
    clip: "rect(0 0 0 0)",
    height: "1px",
    margin: "-1px",
    overflow: "hidden",
    padding: "0",
    position: "absolute",
    width: "1px"
  }), e.body.appendChild(t), t);
}
<<<<<<< HEAD
a(Np, "getStatusDiv");
function Fp(e, t) {
  if (!(!e || !t)) {
    var o = Np(t);
    o.textContent = e, Fx(t);
  }
}
a(Fp, "setStatus");
function Rx(e) {
  var t = e?.getElementById("a11y-status-message");
  t && t.remove();
}
a(Rx, "cleanupStatusDiv");
var Rp = 0, Bp = 1, Hp = 2, tn = 3, on = 4, zp = 5, Wp = 6, Vp = 7, jp = 8, Kp = 9, $p = 10, Up = 11, Gp = 12, qp = 13, Yp = 14, Qp = 15, Xp = 16,
Bx = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  blurButton: Yp,
  blurInput: $p,
  changeInput: Up,
  clickButton: qp,
  clickItem: Kp,
  controlledPropUpdatedSelectedItem: Qp,
  itemMouseEnter: Hp,
  keyDownArrowDown: on,
  keyDownArrowUp: tn,
  keyDownEnd: jp,
  keyDownEnter: Wp,
  keyDownEscape: zp,
  keyDownHome: Vp,
  keyDownSpaceButton: Gp,
  mouseUp: Bp,
  touchEnd: Xp,
  unknown: Rp
}), Hx = ["refKey", "ref"], zx = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], Wx = ["onKeyDown", "onBlur", "onChange", "onInput",
"onChangeText"], Vx = ["refKey", "ref"], jx = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], qt = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function o(r) {
      var n;
      n = t.call(this, r) || this, n.id = n.props.id || "downshift-" + Lp(), n.menuId = n.props.menuId || n.id + "-menu", n.labelId = n.props.
      labelId || n.id + "-label", n.inputId = n.props.inputId || n.id + "-input", n.getItemId = n.props.getItemId || function(g) {
        return n.id + "-item-" + g;
      }, n.items = [], n.itemCount = null, n.previousResultCount = 0, n.timeoutIds = [], n.internalSetTimeout = function(g, v) {
        var I = setTimeout(function() {
          n.timeoutIds = n.timeoutIds.filter(function(w) {
            return w !== I;
          }), g();
        }, v);
        n.timeoutIds.push(I);
      }, n.setItemCount = function(g) {
        n.itemCount = g;
      }, n.unsetItemCount = function() {
        n.itemCount = null;
      }, n.isItemDisabled = function(g, v) {
        var I = n.getItemNodeFromIndex(v);
        return I && I.hasAttribute("disabled");
      }, n.setHighlightedIndex = function(g, v) {
        g === void 0 && (g = n.props.defaultHighlightedIndex), v === void 0 && (v = {}), v = en(v), n.internalSetState(j({
          highlightedIndex: g
        }, v));
      }, n.clearSelection = function(g) {
        n.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: n.props.defaultHighlightedIndex,
          isOpen: n.props.defaultIsOpen
        }, g);
      }, n.selectItem = function(g, v, I) {
        v = en(v), n.internalSetState(j({
          isOpen: n.props.defaultIsOpen,
          highlightedIndex: n.props.defaultHighlightedIndex,
          selectedItem: g,
          inputValue: n.props.itemToString(g)
        }, v), I);
      }, n.selectItemAtIndex = function(g, v, I) {
        var w = n.items[g];
        w != null && n.selectItem(w, v, I);
      }, n.selectHighlightedItem = function(g, v) {
        return n.selectItemAtIndex(n.getState().highlightedIndex, g, v);
      }, n.internalSetState = function(g, v) {
        var I, w, O = {}, _ = typeof g == "function";
        return !_ && g.hasOwnProperty("inputValue") && n.props.onInputValueChange(g.inputValue, j({}, n.getStateAndHelpers(), g)), n.setState(
        function(k) {
          var T;
          k = n.getState(k);
          var C = _ ? g(k) : g;
          C = n.props.stateReducer(k, C), I = C.hasOwnProperty("selectedItem");
          var P = {};
          return I && C.selectedItem !== k.selectedItem && (w = C.selectedItem), (T = C).type || (T.type = Rp), Object.keys(C).forEach(function(D) {
            k[D] !== C[D] && (O[D] = C[D]), D !== "type" && (C[D], sn(n.props, D) || (P[D] = C[D]));
          }), _ && C.hasOwnProperty("inputValue") && n.props.onInputValueChange(C.inputValue, j({}, n.getStateAndHelpers(), C)), P;
        }, function() {
          Cp(v)();
          var k = Object.keys(O).length > 1;
          k && n.props.onStateChange(O, n.getStateAndHelpers()), I && n.props.onSelect(g.selectedItem, n.getStateAndHelpers()), w !== void 0 &&
          n.props.onChange(w, n.getStateAndHelpers()), n.props.onUserAction(O, n.getStateAndHelpers());
        });
      }, n.rootRef = function(g) {
        return n._rootNode = g;
      }, n.getRootProps = function(g, v) {
        var I, w = g === void 0 ? {} : g, O = w.refKey, _ = O === void 0 ? "ref" : O, k = w.ref, T = ke(w, Hx), C = v === void 0 ? {} : v, P = C.
        suppressRefError, D = P === void 0 ? !1 : P;
        n.getRootProps.called = !0, n.getRootProps.refKey = _, n.getRootProps.suppressRefError = D;
        var M = n.getState(), F = M.isOpen;
        return j((I = {}, I[_] = Ze(k, n.rootRef), I.role = "combobox", I["aria-expanded"] = F, I["aria-haspopup"] = "listbox", I["aria-owns"] =
        F ? n.menuId : void 0, I["aria-labelledby"] = n.labelId, I), T);
      }, n.keyDownHandlers = {
        ArrowDown: /* @__PURE__ */ a(function(v) {
          var I = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var w = v.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(w, {
              type: on
=======
a(ap, "getStatusDiv");
function lp(e, t) {
  if (!(!e || !t)) {
    var o = ap(t);
    o.textContent = e, sy(t);
  }
}
a(lp, "setStatus");
function ay(e) {
  var t = e?.getElementById("a11y-status-message");
  t && t.remove();
}
a(ay, "cleanupStatusDiv");
var up = 0, cp = 1, pp = 2, Hr = 3, Br = 4, dp = 5, fp = 6, mp = 7, hp = 8, gp = 9, yp = 10, bp = 11, vp = 12, xp = 13, Sp = 14, Ip = 15, Ep = 16,
ly = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  unknown: up,
  mouseUp: cp,
  itemMouseEnter: pp,
  keyDownArrowUp: Hr,
  keyDownArrowDown: Br,
  keyDownEscape: dp,
  keyDownEnter: fp,
  keyDownHome: mp,
  keyDownEnd: hp,
  clickItem: gp,
  blurInput: yp,
  changeInput: bp,
  keyDownSpaceButton: vp,
  clickButton: xp,
  blurButton: Sp,
  controlledPropUpdatedSelectedItem: Ip,
  touchEnd: Ep
}), uy = ["refKey", "ref"], cy = ["onClick", "onPress", "onKeyDown", "onKeyUp", "onBlur"], py = ["onKeyDown", "onBlur", "onChange", "onInput",
"onChangeText"], dy = ["refKey", "ref"], fy = ["onMouseMove", "onMouseDown", "onClick", "onPress", "index", "item"], my = /* @__PURE__ */ function() {
  var e = /* @__PURE__ */ function(t) {
    function o(n) {
      var r;
      r = t.call(this, n) || this, r.id = r.props.id || "downshift-" + sp(), r.menuId = r.props.menuId || r.id + "-menu", r.labelId = r.props.
      labelId || r.id + "-label", r.inputId = r.props.inputId || r.id + "-input", r.getItemId = r.props.getItemId || function(m) {
        return r.id + "-item-" + m;
      }, r.items = [], r.itemCount = null, r.previousResultCount = 0, r.timeoutIds = [], r.internalSetTimeout = function(m, v) {
        var S = setTimeout(function() {
          r.timeoutIds = r.timeoutIds.filter(function(E) {
            return E !== S;
          }), m();
        }, v);
        r.timeoutIds.push(S);
      }, r.setItemCount = function(m) {
        r.itemCount = m;
      }, r.unsetItemCount = function() {
        r.itemCount = null;
      }, r.isItemDisabled = function(m, v) {
        var S = r.getItemNodeFromIndex(v);
        return S && S.hasAttribute("disabled");
      }, r.setHighlightedIndex = function(m, v) {
        m === void 0 && (m = r.props.defaultHighlightedIndex), v === void 0 && (v = {}), v = Fr(v), r.internalSetState(G({
          highlightedIndex: m
        }, v));
      }, r.clearSelection = function(m) {
        r.internalSetState({
          selectedItem: null,
          inputValue: "",
          highlightedIndex: r.props.defaultHighlightedIndex,
          isOpen: r.props.defaultIsOpen
        }, m);
      }, r.selectItem = function(m, v, S) {
        v = Fr(v), r.internalSetState(G({
          isOpen: r.props.defaultIsOpen,
          highlightedIndex: r.props.defaultHighlightedIndex,
          selectedItem: m,
          inputValue: r.props.itemToString(m)
        }, v), S);
      }, r.selectItemAtIndex = function(m, v, S) {
        var E = r.items[m];
        E != null && r.selectItem(E, v, S);
      }, r.selectHighlightedItem = function(m, v) {
        return r.selectItemAtIndex(r.getState().highlightedIndex, m, v);
      }, r.internalSetState = function(m, v) {
        var S, E, T = {}, C = typeof m == "function";
        return !C && m.hasOwnProperty("inputValue") && r.props.onInputValueChange(m.inputValue, G({}, r.getStateAndHelpers(), m)), r.setState(
        function(k) {
          var w;
          k = r.getState(k);
          var O = C ? m(k) : m;
          O = r.props.stateReducer(k, O), S = O.hasOwnProperty("selectedItem");
          var P = {};
          return S && O.selectedItem !== k.selectedItem && (E = O.selectedItem), (w = O).type || (w.type = up), Object.keys(O).forEach(function(D) {
            k[D] !== O[D] && (T[D] = O[D]), D !== "type" && (O[D], jr(r.props, D) || (P[D] = O[D]));
          }), C && O.hasOwnProperty("inputValue") && r.props.onInputValueChange(O.inputValue, G({}, r.getStateAndHelpers(), O)), P;
        }, function() {
          Zc(v)();
          var k = Object.keys(T).length > 1;
          k && r.props.onStateChange(T, r.getStateAndHelpers()), S && r.props.onSelect(m.selectedItem, r.getStateAndHelpers()), E !== void 0 &&
          r.props.onChange(E, r.getStateAndHelpers()), r.props.onUserAction(T, r.getStateAndHelpers());
        });
      }, r.rootRef = function(m) {
        return r._rootNode = m;
      }, r.getRootProps = function(m, v) {
        var S, E = m === void 0 ? {} : m, T = E.refKey, C = T === void 0 ? "ref" : T, k = E.ref, w = ke(E, uy), O = v === void 0 ? {} : v, P = O.
        suppressRefError, D = P === void 0 ? !1 : P;
        r.getRootProps.called = !0, r.getRootProps.refKey = C, r.getRootProps.suppressRefError = D;
        var M = r.getState(), N = M.isOpen;
        return G((S = {}, S[C] = Je(k, r.rootRef), S.role = "combobox", S["aria-expanded"] = N, S["aria-haspopup"] = "listbox", S["aria-owns"] =
        N ? r.menuId : void 0, S["aria-labelledby"] = r.labelId, S), w);
      }, r.keyDownHandlers = {
        ArrowDown: /* @__PURE__ */ a(function(v) {
          var S = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var E = v.shiftKey ? 5 : 1;
            this.moveHighlightedIndex(E, {
              type: Br
>>>>>>> main
            });
          } else
            this.internalSetState({
              isOpen: !0,
<<<<<<< HEAD
              type: on
            }, function() {
              var O = I.getItemCount();
              if (O > 0) {
                var _ = I.getState(), k = _.highlightedIndex, T = Je(k, 1, {
                  length: O
                }, I.isItemDisabled, !0);
                I.setHighlightedIndex(T, {
                  type: on
=======
              type: Br
            }, function() {
              var T = S.getItemCount();
              if (T > 0) {
                var C = S.getState(), k = C.highlightedIndex, w = et(k, 1, {
                  length: T
                }, S.isItemDisabled, !0);
                S.setHighlightedIndex(w, {
                  type: Br
>>>>>>> main
                });
              }
            });
        }, "ArrowDown"),
        ArrowUp: /* @__PURE__ */ a(function(v) {
<<<<<<< HEAD
          var I = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var w = v.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(w, {
              type: tn
=======
          var S = this;
          if (v.preventDefault(), this.getState().isOpen) {
            var E = v.shiftKey ? -5 : -1;
            this.moveHighlightedIndex(E, {
              type: Hr
>>>>>>> main
            });
          } else
            this.internalSetState({
              isOpen: !0,
<<<<<<< HEAD
              type: tn
            }, function() {
              var O = I.getItemCount();
              if (O > 0) {
                var _ = I.getState(), k = _.highlightedIndex, T = Je(k, -1, {
                  length: O
                }, I.isItemDisabled, !0);
                I.setHighlightedIndex(T, {
                  type: tn
=======
              type: Hr
            }, function() {
              var T = S.getItemCount();
              if (T > 0) {
                var C = S.getState(), k = C.highlightedIndex, w = et(k, -1, {
                  length: T
                }, S.isItemDisabled, !0);
                S.setHighlightedIndex(w, {
                  type: Hr
>>>>>>> main
                });
              }
            });
        }, "ArrowUp"),
        Enter: /* @__PURE__ */ a(function(v) {
          if (v.which !== 229) {
<<<<<<< HEAD
            var I = this.getState(), w = I.isOpen, O = I.highlightedIndex;
            if (w && O != null) {
              v.preventDefault();
              var _ = this.items[O], k = this.getItemNodeFromIndex(O);
              if (_ == null || k && k.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: Wp
=======
            var S = this.getState(), E = S.isOpen, T = S.highlightedIndex;
            if (E && T != null) {
              v.preventDefault();
              var C = this.items[T], k = this.getItemNodeFromIndex(T);
              if (C == null || k && k.hasAttribute("disabled"))
                return;
              this.selectHighlightedItem({
                type: fp
>>>>>>> main
              });
            }
          }
        }, "Enter"),
        Escape: /* @__PURE__ */ a(function(v) {
<<<<<<< HEAD
          v.preventDefault(), this.reset(j({
            type: zp
=======
          v.preventDefault(), this.reset(G({
            type: dp
>>>>>>> main
          }, !this.state.isOpen && {
            selectedItem: null,
            inputValue: ""
          }));
        }, "Escape")
<<<<<<< HEAD
      }, n.buttonKeyDownHandlers = j({}, n.keyDownHandlers, {
        " ": /* @__PURE__ */ a(function(v) {
          v.preventDefault(), this.toggleMenu({
            type: Gp
          });
        }, "_")
      }), n.inputKeyDownHandlers = j({}, n.keyDownHandlers, {
        Home: /* @__PURE__ */ a(function(v) {
          var I = this.getState(), w = I.isOpen;
          if (w) {
            v.preventDefault();
            var O = this.getItemCount();
            if (!(O <= 0 || !w)) {
              var _ = wt(0, !1, {
                length: O
              }, this.isItemDisabled);
              this.setHighlightedIndex(_, {
                type: Vp
=======
      }, r.buttonKeyDownHandlers = G({}, r.keyDownHandlers, {
        " ": /* @__PURE__ */ a(function(v) {
          v.preventDefault(), this.toggleMenu({
            type: vp
          });
        }, "_")
      }), r.inputKeyDownHandlers = G({}, r.keyDownHandlers, {
        Home: /* @__PURE__ */ a(function(v) {
          var S = this.getState(), E = S.isOpen;
          if (E) {
            v.preventDefault();
            var T = this.getItemCount();
            if (!(T <= 0 || !E)) {
              var C = xt(0, !1, {
                length: T
              }, this.isItemDisabled);
              this.setHighlightedIndex(C, {
                type: mp
>>>>>>> main
              });
            }
          }
        }, "Home"),
        End: /* @__PURE__ */ a(function(v) {
<<<<<<< HEAD
          var I = this.getState(), w = I.isOpen;
          if (w) {
            v.preventDefault();
            var O = this.getItemCount();
            if (!(O <= 0 || !w)) {
              var _ = wt(O - 1, !0, {
                length: O
              }, this.isItemDisabled);
              this.setHighlightedIndex(_, {
                type: jp
=======
          var S = this.getState(), E = S.isOpen;
          if (E) {
            v.preventDefault();
            var T = this.getItemCount();
            if (!(T <= 0 || !E)) {
              var C = xt(T - 1, !0, {
                length: T
              }, this.isItemDisabled);
              this.setHighlightedIndex(C, {
                type: hp
>>>>>>> main
              });
            }
          }
        }, "End")
<<<<<<< HEAD
      }), n.getToggleButtonProps = function(g) {
        var v = g === void 0 ? {} : g, I = v.onClick;
        v.onPress;
        var w = v.onKeyDown, O = v.onKeyUp, _ = v.onBlur, k = ke(v, zx), T = n.getState(), C = T.isOpen, P = {
          onClick: le(I, n.buttonHandleClick),
          onKeyDown: le(w, n.buttonHandleKeyDown),
          onKeyUp: le(O, n.buttonHandleKeyUp),
          onBlur: le(_, n.buttonHandleBlur)
        }, D = k.disabled ? {} : P;
        return j({
          type: "button",
          role: "button",
          "aria-label": C ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, D, k);
      }, n.buttonHandleKeyUp = function(g) {
        g.preventDefault();
      }, n.buttonHandleKeyDown = function(g) {
        var v = po(g);
        n.buttonKeyDownHandlers[v] && n.buttonKeyDownHandlers[v].call(n, g);
      }, n.buttonHandleClick = function(g) {
        if (g.preventDefault(), n.props.environment) {
          var v = n.props.environment.document, I = v.body, w = v.activeElement;
          I && I === w && g.target.focus();
        }
        n.internalSetTimeout(function() {
          return n.toggleMenu({
            type: qp
          });
        });
      }, n.buttonHandleBlur = function(g) {
        var v = g.target;
        n.internalSetTimeout(function() {
          if (!(n.isMouseDown || !n.props.environment)) {
            var I = n.props.environment.document.activeElement;
            (I == null || I.id !== n.inputId) && I !== v && n.reset({
              type: Yp
            });
          }
        });
      }, n.getLabelProps = function(g) {
        return j({
          htmlFor: n.inputId,
          id: n.labelId
        }, g);
      }, n.getInputProps = function(g) {
        var v = g === void 0 ? {} : g, I = v.onKeyDown, w = v.onBlur, O = v.onChange, _ = v.onInput;
        v.onChangeText;
        var k = ke(v, Wx), T, C = {};
        T = "onChange";
        var P = n.getState(), D = P.inputValue, M = P.isOpen, F = P.highlightedIndex;
        if (!k.disabled) {
          var Z;
          C = (Z = {}, Z[T] = le(O, _, n.inputHandleChange), Z.onKeyDown = le(I, n.inputHandleKeyDown), Z.onBlur = le(w, n.inputHandleBlur),
          Z);
        }
        return j({
          "aria-autocomplete": "list",
          "aria-activedescendant": M && typeof F == "number" && F >= 0 ? n.getItemId(F) : void 0,
          "aria-controls": M ? n.menuId : void 0,
          "aria-labelledby": k && k["aria-label"] ? void 0 : n.labelId,
=======
      }), r.getToggleButtonProps = function(m) {
        var v = m === void 0 ? {} : m, S = v.onClick;
        v.onPress;
        var E = v.onKeyDown, T = v.onKeyUp, C = v.onBlur, k = ke(v, cy), w = r.getState(), O = w.isOpen, P = {
          onClick: le(S, r.buttonHandleClick),
          onKeyDown: le(E, r.buttonHandleKeyDown),
          onKeyUp: le(T, r.buttonHandleKeyUp),
          onBlur: le(C, r.buttonHandleBlur)
        }, D = k.disabled ? {} : P;
        return G({
          type: "button",
          role: "button",
          "aria-label": O ? "close menu" : "open menu",
          "aria-haspopup": !0,
          "data-toggle": !0
        }, D, k);
      }, r.buttonHandleKeyUp = function(m) {
        m.preventDefault();
      }, r.buttonHandleKeyDown = function(m) {
        var v = to(m);
        r.buttonKeyDownHandlers[v] && r.buttonKeyDownHandlers[v].call(r, m);
      }, r.buttonHandleClick = function(m) {
        if (m.preventDefault(), r.props.environment) {
          var v = r.props.environment.document, S = v.body, E = v.activeElement;
          S && S === E && m.target.focus();
        }
        r.internalSetTimeout(function() {
          return r.toggleMenu({
            type: xp
          });
        });
      }, r.buttonHandleBlur = function(m) {
        var v = m.target;
        r.internalSetTimeout(function() {
          if (!(r.isMouseDown || !r.props.environment)) {
            var S = r.props.environment.document.activeElement;
            (S == null || S.id !== r.inputId) && S !== v && r.reset({
              type: Sp
            });
          }
        });
      }, r.getLabelProps = function(m) {
        return G({
          htmlFor: r.inputId,
          id: r.labelId
        }, m);
      }, r.getInputProps = function(m) {
        var v = m === void 0 ? {} : m, S = v.onKeyDown, E = v.onBlur, T = v.onChange, C = v.onInput;
        v.onChangeText;
        var k = ke(v, py), w, O = {};
        w = "onChange";
        var P = r.getState(), D = P.inputValue, M = P.isOpen, N = P.highlightedIndex;
        if (!k.disabled) {
          var Q;
          O = (Q = {}, Q[w] = le(T, C, r.inputHandleChange), Q.onKeyDown = le(S, r.inputHandleKeyDown), Q.onBlur = le(E, r.inputHandleBlur),
          Q);
        }
        return G({
          "aria-autocomplete": "list",
          "aria-activedescendant": M && typeof N == "number" && N >= 0 ? r.getItemId(N) : void 0,
          "aria-controls": M ? r.menuId : void 0,
          "aria-labelledby": k && k["aria-label"] ? void 0 : r.labelId,
>>>>>>> main
          // https://developer.mozilla.org/en-US/docs/Web/Security/Securing_your_site/Turning_off_form_autocompletion
          // revert back since autocomplete="nope" is ignored on latest Chrome and Opera
          autoComplete: "off",
          value: D,
<<<<<<< HEAD
          id: n.inputId
        }, C, k);
      }, n.inputHandleKeyDown = function(g) {
        var v = po(g);
        v && n.inputKeyDownHandlers[v] && n.inputKeyDownHandlers[v].call(n, g);
      }, n.inputHandleChange = function(g) {
        n.internalSetState({
          type: Up,
          isOpen: !0,
          inputValue: g.target.value,
          highlightedIndex: n.props.defaultHighlightedIndex
        });
      }, n.inputHandleBlur = function() {
        n.internalSetTimeout(function() {
          var g;
          if (!(n.isMouseDown || !n.props.environment)) {
            var v = n.props.environment.document.activeElement, I = (v == null || (g = v.dataset) == null ? void 0 : g.toggle) && n._rootNode &&
            n._rootNode.contains(v);
            I || n.reset({
              type: $p
            });
          }
        });
      }, n.menuRef = function(g) {
        n._menuNode = g;
      }, n.getMenuProps = function(g, v) {
        var I, w = g === void 0 ? {} : g, O = w.refKey, _ = O === void 0 ? "ref" : O, k = w.ref, T = ke(w, Vx), C = v === void 0 ? {} : v, P = C.
        suppressRefError, D = P === void 0 ? !1 : P;
        return n.getMenuProps.called = !0, n.getMenuProps.refKey = _, n.getMenuProps.suppressRefError = D, j((I = {}, I[_] = Ze(k, n.menuRef),
        I.role = "listbox", I["aria-labelledby"] = T && T["aria-label"] ? void 0 : n.labelId, I.id = n.menuId, I), T);
      }, n.getItemProps = function(g) {
        var v, I = g === void 0 ? {} : g, w = I.onMouseMove, O = I.onMouseDown, _ = I.onClick;
        I.onPress;
        var k = I.index, T = I.item, C = T === void 0 ? (
          /* istanbul ignore next */
          void 0
        ) : T, P = ke(I, jx);
        k === void 0 ? (n.items.push(C), k = n.items.indexOf(C)) : n.items[k] = C;
        var D = "onClick", M = _, F = (v = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: le(w, function() {
            k !== n.getState().highlightedIndex && (n.setHighlightedIndex(k, {
              type: Hp
            }), n.avoidScrolling = !0, n.internalSetTimeout(function() {
              return n.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: le(O, function(W) {
            W.preventDefault();
          })
        }, v[D] = le(M, function() {
          n.selectItemAtIndex(k, {
            type: Kp
          });
        }), v), Z = P.disabled ? {
          onMouseDown: F.onMouseDown
        } : F;
        return j({
          id: n.getItemId(k),
          role: "option",
          "aria-selected": n.getState().highlightedIndex === k
        }, Z, P);
      }, n.clearItems = function() {
        n.items = [];
      }, n.reset = function(g, v) {
        g === void 0 && (g = {}), g = en(g), n.internalSetState(function(I) {
          var w = I.selectedItem;
          return j({
            isOpen: n.props.defaultIsOpen,
            highlightedIndex: n.props.defaultHighlightedIndex,
            inputValue: n.props.itemToString(w)
          }, g);
        }, v);
      }, n.toggleMenu = function(g, v) {
        g === void 0 && (g = {}), g = en(g), n.internalSetState(function(I) {
          var w = I.isOpen;
          return j({
            isOpen: !w
          }, w && {
            highlightedIndex: n.props.defaultHighlightedIndex
          }, g);
        }, function() {
          var I = n.getState(), w = I.isOpen, O = I.highlightedIndex;
          w && n.getItemCount() > 0 && typeof O == "number" && n.setHighlightedIndex(O, g), Cp(v)();
        });
      }, n.openMenu = function(g) {
        n.internalSetState({
          isOpen: !0
        }, g);
      }, n.closeMenu = function(g) {
        n.internalSetState({
          isOpen: !1
        }, g);
      }, n.updateStatus = fn(function() {
        var g;
        if ((g = n.props) != null && (g = g.environment) != null && g.document) {
          var v = n.getState(), I = n.items[v.highlightedIndex], w = n.getItemCount(), O = n.props.getA11yStatusMessage(j({
            itemToString: n.props.itemToString,
            previousResultCount: n.previousResultCount,
            resultCount: w,
            highlightedItem: I
          }, v));
          n.previousResultCount = w, Fp(O, n.props.environment.document);
        }
      }, 200);
      var l = n.props, u = l.defaultHighlightedIndex, c = l.initialHighlightedIndex, d = c === void 0 ? u : c, p = l.defaultIsOpen, m = l.initialIsOpen,
      h = m === void 0 ? p : m, b = l.initialInputValue, f = b === void 0 ? "" : b, y = l.initialSelectedItem, S = y === void 0 ? null : y, E = n.
      getState({
        highlightedIndex: d,
        isOpen: h,
        inputValue: f,
        selectedItem: S
      });
      return E.selectedItem != null && n.props.initialInputValue === void 0 && (E.inputValue = n.props.itemToString(E.selectedItem)), n.state =
      E, n;
    }
    a(o, "Downshift"), no(o, t);
    var i = o.prototype;
    return i.internalClearTimeouts = /* @__PURE__ */ a(function() {
      this.timeoutIds.forEach(function(n) {
        clearTimeout(n);
      }), this.timeoutIds = [];
    }, "internalClearTimeouts"), i.getState = /* @__PURE__ */ a(function(n) {
      return n === void 0 && (n = this.state), Vo(n, this.props);
    }, "getState$1"), i.getItemCount = /* @__PURE__ */ a(function() {
      var n = this.items.length;
      return this.itemCount != null ? n = this.itemCount : this.props.itemCount !== void 0 && (n = this.props.itemCount), n;
    }, "getItemCount"), i.getItemNodeFromIndex = /* @__PURE__ */ a(function(n) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(n)) : null;
    }, "getItemNodeFromIndex"), i.scrollHighlightedItemIntoView = /* @__PURE__ */ a(function() {
      {
        var n = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(n, this._menuNode);
      }
    }, "scrollHighlightedItemIntoView"), i.moveHighlightedIndex = /* @__PURE__ */ a(function(n, l) {
      var u = this.getItemCount(), c = this.getState(), d = c.highlightedIndex;
      if (u > 0) {
        var p = Je(d, n, {
          length: u
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(p, l);
      }
    }, "moveHighlightedIndex"), i.getStateAndHelpers = /* @__PURE__ */ a(function() {
      var n = this.getState(), l = n.highlightedIndex, u = n.inputValue, c = n.selectedItem, d = n.isOpen, p = this.props.itemToString, m = this.
      id, h = this.getRootProps, b = this.getToggleButtonProps, f = this.getLabelProps, y = this.getMenuProps, S = this.getInputProps, E = this.
      getItemProps, g = this.openMenu, v = this.closeMenu, I = this.toggleMenu, w = this.selectItem, O = this.selectItemAtIndex, _ = this.selectHighlightedItem,
      k = this.setHighlightedIndex, T = this.clearSelection, C = this.clearItems, P = this.reset, D = this.setItemCount, M = this.unsetItemCount,
      F = this.internalSetState;
      return {
        // prop getters
        getRootProps: h,
        getToggleButtonProps: b,
        getLabelProps: f,
        getMenuProps: y,
        getInputProps: S,
        getItemProps: E,
        // actions
        reset: P,
        openMenu: g,
        closeMenu: v,
        toggleMenu: I,
        selectItem: w,
        selectItemAtIndex: O,
        selectHighlightedItem: _,
        setHighlightedIndex: k,
        clearSelection: T,
        clearItems: C,
        setItemCount: D,
        unsetItemCount: M,
        setState: F,
        // props
        itemToString: p,
        // derived
        id: m,
        // state
        highlightedIndex: l,
        inputValue: u,
        isOpen: d,
        selectedItem: c
      };
    }, "getStateAndHelpers"), i.componentDidMount = /* @__PURE__ */ a(function() {
      var n = this;
      if (!this.props.environment)
        this.cleanup = function() {
          n.internalClearTimeouts();
        };
      else {
        var l = /* @__PURE__ */ a(function() {
          n.isMouseDown = !0;
        }, "onMouseDown"), u = /* @__PURE__ */ a(function(b) {
          n.isMouseDown = !1;
          var f = an(b.target, [n._rootNode, n._menuNode], n.props.environment);
          !f && n.getState().isOpen && n.reset({
            type: Bp
          }, function() {
            return n.props.onOuterClick(n.getStateAndHelpers());
          });
        }, "onMouseUp"), c = /* @__PURE__ */ a(function() {
          n.isTouchMove = !1;
        }, "onTouchStart"), d = /* @__PURE__ */ a(function() {
          n.isTouchMove = !0;
        }, "onTouchMove"), p = /* @__PURE__ */ a(function(b) {
          var f = an(b.target, [n._rootNode, n._menuNode], n.props.environment, !1);
          !n.isTouchMove && !f && n.getState().isOpen && n.reset({
            type: Xp
          }, function() {
            return n.props.onOuterClick(n.getStateAndHelpers());
          });
        }, "onTouchEnd"), m = this.props.environment;
        m.addEventListener("mousedown", l), m.addEventListener("mouseup", u), m.addEventListener("touchstart", c), m.addEventListener("touch\
move", d), m.addEventListener("touchend", p), this.cleanup = function() {
          n.internalClearTimeouts(), n.updateStatus.cancel(), m.removeEventListener("mousedown", l), m.removeEventListener("mouseup", u), m.
          removeEventListener("touchstart", c), m.removeEventListener("touchmove", d), m.removeEventListener("touchend", p);
        };
      }
    }, "componentDidMount"), i.shouldScroll = /* @__PURE__ */ a(function(n, l) {
      var u = this.props.highlightedIndex === void 0 ? this.getState() : this.props, c = u.highlightedIndex, d = l.highlightedIndex === void 0 ?
      n : l, p = d.highlightedIndex, m = c && this.getState().isOpen && !n.isOpen, h = c !== p;
      return m || h;
    }, "shouldScroll"), i.componentDidUpdate = /* @__PURE__ */ a(function(n, l) {
      sn(this.props, "selectedItem") && this.props.selectedItemChanged(n.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: Qp,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(l, n) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, "componentDidUpdate"), i.componentWillUnmount = /* @__PURE__ */ a(function() {
      this.cleanup();
    }, "componentWillUnmount"), i.render = /* @__PURE__ */ a(function() {
      var n = kp(this.props.children, Re);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.
      getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1,
      this.getInputProps.called = !1;
      var l = kp(n(this.getStateAndHelpers()));
=======
          id: r.inputId
        }, O, k);
      }, r.inputHandleKeyDown = function(m) {
        var v = to(m);
        v && r.inputKeyDownHandlers[v] && r.inputKeyDownHandlers[v].call(r, m);
      }, r.inputHandleChange = function(m) {
        r.internalSetState({
          type: bp,
          isOpen: !0,
          inputValue: m.target.value,
          highlightedIndex: r.props.defaultHighlightedIndex
        });
      }, r.inputHandleBlur = function() {
        r.internalSetTimeout(function() {
          var m;
          if (!(r.isMouseDown || !r.props.environment)) {
            var v = r.props.environment.document.activeElement, S = (v == null || (m = v.dataset) == null ? void 0 : m.toggle) && r._rootNode &&
            r._rootNode.contains(v);
            S || r.reset({
              type: yp
            });
          }
        });
      }, r.menuRef = function(m) {
        r._menuNode = m;
      }, r.getMenuProps = function(m, v) {
        var S, E = m === void 0 ? {} : m, T = E.refKey, C = T === void 0 ? "ref" : T, k = E.ref, w = ke(E, dy), O = v === void 0 ? {} : v, P = O.
        suppressRefError, D = P === void 0 ? !1 : P;
        return r.getMenuProps.called = !0, r.getMenuProps.refKey = C, r.getMenuProps.suppressRefError = D, G((S = {}, S[C] = Je(k, r.menuRef),
        S.role = "listbox", S["aria-labelledby"] = w && w["aria-label"] ? void 0 : r.labelId, S.id = r.menuId, S), w);
      }, r.getItemProps = function(m) {
        var v, S = m === void 0 ? {} : m, E = S.onMouseMove, T = S.onMouseDown, C = S.onClick;
        S.onPress;
        var k = S.index, w = S.item, O = w === void 0 ? (
          /* istanbul ignore next */
          void 0
        ) : w, P = ke(S, fy);
        k === void 0 ? (r.items.push(O), k = r.items.indexOf(O)) : r.items[k] = O;
        var D = "onClick", M = C, N = (v = {
          // onMouseMove is used over onMouseEnter here. onMouseMove
          // is only triggered on actual mouse movement while onMouseEnter
          // can fire on DOM changes, interrupting keyboard navigation
          onMouseMove: le(E, function() {
            k !== r.getState().highlightedIndex && (r.setHighlightedIndex(k, {
              type: pp
            }), r.avoidScrolling = !0, r.internalSetTimeout(function() {
              return r.avoidScrolling = !1;
            }, 250));
          }),
          onMouseDown: le(T, function(V) {
            V.preventDefault();
          })
        }, v[D] = le(M, function() {
          r.selectItemAtIndex(k, {
            type: gp
          });
        }), v), Q = P.disabled ? {
          onMouseDown: N.onMouseDown
        } : N;
        return G({
          id: r.getItemId(k),
          role: "option",
          "aria-selected": r.getState().highlightedIndex === k
        }, Q, P);
      }, r.clearItems = function() {
        r.items = [];
      }, r.reset = function(m, v) {
        m === void 0 && (m = {}), m = Fr(m), r.internalSetState(function(S) {
          var E = S.selectedItem;
          return G({
            isOpen: r.props.defaultIsOpen,
            highlightedIndex: r.props.defaultHighlightedIndex,
            inputValue: r.props.itemToString(E)
          }, m);
        }, v);
      }, r.toggleMenu = function(m, v) {
        m === void 0 && (m = {}), m = Fr(m), r.internalSetState(function(S) {
          var E = S.isOpen;
          return G({
            isOpen: !E
          }, E && {
            highlightedIndex: r.props.defaultHighlightedIndex
          }, m);
        }, function() {
          var S = r.getState(), E = S.isOpen, T = S.highlightedIndex;
          E && r.getItemCount() > 0 && typeof T == "number" && r.setHighlightedIndex(T, m), Zc(v)();
        });
      }, r.openMenu = function(m) {
        r.internalSetState({
          isOpen: !0
        }, m);
      }, r.closeMenu = function(m) {
        r.internalSetState({
          isOpen: !1
        }, m);
      }, r.updateStatus = Yr(function() {
        var m;
        if ((m = r.props) != null && (m = m.environment) != null && m.document) {
          var v = r.getState(), S = r.items[v.highlightedIndex], E = r.getItemCount(), T = r.props.getA11yStatusMessage(G({
            itemToString: r.props.itemToString,
            previousResultCount: r.previousResultCount,
            resultCount: E,
            highlightedItem: S
          }, v));
          r.previousResultCount = E, lp(T, r.props.environment.document);
        }
      }, 200);
      var l = r.props, u = l.defaultHighlightedIndex, c = l.initialHighlightedIndex, p = c === void 0 ? u : c, d = l.defaultIsOpen, g = l.initialIsOpen,
      h = g === void 0 ? d : g, y = l.initialInputValue, f = y === void 0 ? "" : y, b = l.initialSelectedItem, I = b === void 0 ? null : b, _ = r.
      getState({
        highlightedIndex: p,
        isOpen: h,
        inputValue: f,
        selectedItem: I
      });
      return _.selectedItem != null && r.props.initialInputValue === void 0 && (_.inputValue = r.props.itemToString(_.selectedItem)), r.state =
      _, r;
    }
    a(o, "Downshift"), Xt(o, t);
    var i = o.prototype;
    return i.internalClearTimeouts = /* @__PURE__ */ a(function() {
      this.timeoutIds.forEach(function(r) {
        clearTimeout(r);
      }), this.timeoutIds = [];
    }, "internalClearTimeouts"), i.getState = /* @__PURE__ */ a(function(r) {
      return r === void 0 && (r = this.state), _o(r, this.props);
    }, "getState$1"), i.getItemCount = /* @__PURE__ */ a(function() {
      var r = this.items.length;
      return this.itemCount != null ? r = this.itemCount : this.props.itemCount !== void 0 && (r = this.props.itemCount), r;
    }, "getItemCount"), i.getItemNodeFromIndex = /* @__PURE__ */ a(function(r) {
      return this.props.environment ? this.props.environment.document.getElementById(this.getItemId(r)) : null;
    }, "getItemNodeFromIndex"), i.scrollHighlightedItemIntoView = /* @__PURE__ */ a(function() {
      {
        var r = this.getItemNodeFromIndex(this.getState().highlightedIndex);
        this.props.scrollIntoView(r, this._menuNode);
      }
    }, "scrollHighlightedItemIntoView"), i.moveHighlightedIndex = /* @__PURE__ */ a(function(r, l) {
      var u = this.getItemCount(), c = this.getState(), p = c.highlightedIndex;
      if (u > 0) {
        var d = et(p, r, {
          length: u
        }, this.isItemDisabled, !0);
        this.setHighlightedIndex(d, l);
      }
    }, "moveHighlightedIndex"), i.getStateAndHelpers = /* @__PURE__ */ a(function() {
      var r = this.getState(), l = r.highlightedIndex, u = r.inputValue, c = r.selectedItem, p = r.isOpen, d = this.props.itemToString, g = this.
      id, h = this.getRootProps, y = this.getToggleButtonProps, f = this.getLabelProps, b = this.getMenuProps, I = this.getInputProps, _ = this.
      getItemProps, m = this.openMenu, v = this.closeMenu, S = this.toggleMenu, E = this.selectItem, T = this.selectItemAtIndex, C = this.selectHighlightedItem,
      k = this.setHighlightedIndex, w = this.clearSelection, O = this.clearItems, P = this.reset, D = this.setItemCount, M = this.unsetItemCount,
      N = this.internalSetState;
      return {
        // prop getters
        getRootProps: h,
        getToggleButtonProps: y,
        getLabelProps: f,
        getMenuProps: b,
        getInputProps: I,
        getItemProps: _,
        // actions
        reset: P,
        openMenu: m,
        closeMenu: v,
        toggleMenu: S,
        selectItem: E,
        selectItemAtIndex: T,
        selectHighlightedItem: C,
        setHighlightedIndex: k,
        clearSelection: w,
        clearItems: O,
        setItemCount: D,
        unsetItemCount: M,
        setState: N,
        // props
        itemToString: d,
        // derived
        id: g,
        // state
        highlightedIndex: l,
        inputValue: u,
        isOpen: p,
        selectedItem: c
      };
    }, "getStateAndHelpers"), i.componentDidMount = /* @__PURE__ */ a(function() {
      var r = this;
      if (!this.props.environment)
        this.cleanup = function() {
          r.internalClearTimeouts();
        };
      else {
        var l = /* @__PURE__ */ a(function() {
          r.isMouseDown = !0;
        }, "onMouseDown"), u = /* @__PURE__ */ a(function(y) {
          r.isMouseDown = !1;
          var f = Vr(y.target, [r._rootNode, r._menuNode], r.props.environment);
          !f && r.getState().isOpen && r.reset({
            type: cp
          }, function() {
            return r.props.onOuterClick(r.getStateAndHelpers());
          });
        }, "onMouseUp"), c = /* @__PURE__ */ a(function() {
          r.isTouchMove = !1;
        }, "onTouchStart"), p = /* @__PURE__ */ a(function() {
          r.isTouchMove = !0;
        }, "onTouchMove"), d = /* @__PURE__ */ a(function(y) {
          var f = Vr(y.target, [r._rootNode, r._menuNode], r.props.environment, !1);
          !r.isTouchMove && !f && r.getState().isOpen && r.reset({
            type: Ep
          }, function() {
            return r.props.onOuterClick(r.getStateAndHelpers());
          });
        }, "onTouchEnd"), g = this.props.environment;
        g.addEventListener("mousedown", l), g.addEventListener("mouseup", u), g.addEventListener("touchstart", c), g.addEventListener("touch\
move", p), g.addEventListener("touchend", d), this.cleanup = function() {
          r.internalClearTimeouts(), r.updateStatus.cancel(), g.removeEventListener("mousedown", l), g.removeEventListener("mouseup", u), g.
          removeEventListener("touchstart", c), g.removeEventListener("touchmove", p), g.removeEventListener("touchend", d);
        };
      }
    }, "componentDidMount"), i.shouldScroll = /* @__PURE__ */ a(function(r, l) {
      var u = this.props.highlightedIndex === void 0 ? this.getState() : this.props, c = u.highlightedIndex, p = l.highlightedIndex === void 0 ?
      r : l, d = p.highlightedIndex, g = c && this.getState().isOpen && !r.isOpen, h = c !== d;
      return g || h;
    }, "shouldScroll"), i.componentDidUpdate = /* @__PURE__ */ a(function(r, l) {
      jr(this.props, "selectedItem") && this.props.selectedItemChanged(r.selectedItem, this.props.selectedItem) && this.internalSetState({
        type: Ip,
        inputValue: this.props.itemToString(this.props.selectedItem)
      }), !this.avoidScrolling && this.shouldScroll(l, r) && this.scrollHighlightedItemIntoView(), this.updateStatus();
    }, "componentDidUpdate"), i.componentWillUnmount = /* @__PURE__ */ a(function() {
      this.cleanup();
    }, "componentWillUnmount"), i.render = /* @__PURE__ */ a(function() {
      var r = ep(this.props.children, Fe);
      this.clearItems(), this.getRootProps.called = !1, this.getRootProps.refKey = void 0, this.getRootProps.suppressRefError = void 0, this.
      getMenuProps.called = !1, this.getMenuProps.refKey = void 0, this.getMenuProps.suppressRefError = void 0, this.getLabelProps.called = !1,
      this.getInputProps.called = !1;
      var l = ep(r(this.getStateAndHelpers()));
>>>>>>> main
      if (!l)
        return null;
      if (this.getRootProps.called || this.props.suppressRefError)
        return l;
<<<<<<< HEAD
      if (Mx(l))
        return /* @__PURE__ */ Zs(l, this.getRootProps(Lx(l)));
    }, "render"), o;
  }(Le);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: Dx,
    itemToString: /* @__PURE__ */ a(function(o) {
      return o == null ? "" : String(o);
    }, "itemToString"),
    onStateChange: Re,
    onInputValueChange: Re,
    onUserAction: Re,
    onChange: Re,
    onSelect: Re,
    onOuterClick: Re,
=======
      if (ry(l))
        return /* @__PURE__ */ us(l, this.getRootProps(ny(l)));
    }, "render"), o;
  }(Re);
  return e.defaultProps = {
    defaultHighlightedIndex: null,
    defaultIsOpen: !1,
    getA11yStatusMessage: oy,
    itemToString: /* @__PURE__ */ a(function(o) {
      return o == null ? "" : String(o);
    }, "itemToString"),
    onStateChange: Fe,
    onInputValueChange: Fe,
    onUserAction: Fe,
    onChange: Fe,
    onSelect: Fe,
    onOuterClick: Fe,
>>>>>>> main
    selectedItemChanged: /* @__PURE__ */ a(function(o, i) {
      return o !== i;
    }, "selectedItemChanged"),
    environment: (
      /* istanbul ignore next (ssr) */
      typeof window > "u" ? void 0 : window
    ),
    stateReducer: /* @__PURE__ */ a(function(o, i) {
      return i;
    }, "stateReducer"),
    suppressRefError: !1,
<<<<<<< HEAD
    scrollIntoView: Mp
  }, e.stateChangeTypes = Bx, e;
}();
var Zp = {
=======
    scrollIntoView: ip
  }, e.stateChangeTypes = ly, e;
}(), zt = my;
var _p = {
>>>>>>> main
  highlightedIndex: -1,
  isOpen: !1,
  selectedItem: null,
  inputValue: ""
};
<<<<<<< HEAD
function Kx(e, t, o) {
  var i = e.props, r = e.type, n = {};
  Object.keys(t).forEach(function(l) {
    $x(l, e, t, o), o[l] !== t[l] && (n[l] = o[l]);
  }), i.onStateChange && Object.keys(n).length && i.onStateChange(j({
    type: r
  }, n));
}
a(Kx, "callOnChangeProps");
function $x(e, t, o, i) {
  var r = t.props, n = t.type, l = "on" + Ji(e) + "Change";
  r[l] && i[e] !== void 0 && i[e] !== o[e] && r[l](j({
    type: n
  }, i));
}
a($x, "invokeOnChangeHandler");
function Ux(e, t) {
  return t.changes;
}
a(Ux, "stateReducer");
var Op = fn(function(e, t) {
  Fp(e, t);
}, 200), Gx = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? Xt : V, Jp = "useId" in s ?
/* @__PURE__ */ a(function(t) {
  var o = t.id, i = t.labelId, r = t.menuId, n = t.getItemId, l = t.toggleButtonId, u = t.inputId, c = "downshift-" + s.useId();
  o || (o = c);
  var d = q({
    labelId: i || o + "-label",
    menuId: r || o + "-menu",
    getItemId: n || function(p) {
      return o + "-item-" + p;
=======
function hy(e, t, o) {
  var i = e.props, n = e.type, r = {};
  Object.keys(t).forEach(function(l) {
    gy(l, e, t, o), o[l] !== t[l] && (r[l] = o[l]);
  }), i.onStateChange && Object.keys(r).length && i.onStateChange(G({
    type: n
  }, r));
}
a(hy, "callOnChangeProps");
function gy(e, t, o, i) {
  var n = t.props, r = t.type, l = "on" + ui(e) + "Change";
  n[l] && i[e] !== void 0 && i[e] !== o[e] && n[l](G({
    type: r
  }, i));
}
a(gy, "invokeOnChangeHandler");
function yy(e, t) {
  return t.changes;
}
a(yy, "stateReducer");
var tp = Yr(function(e, t) {
  lp(e, t);
}, 200), by = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u" ? ft : j, wp = "useId" in s ?
/* @__PURE__ */ a(function(t) {
  var o = t.id, i = t.labelId, n = t.menuId, r = t.getItemId, l = t.toggleButtonId, u = t.inputId, c = "downshift-" + s.useId();
  o || (o = c);
  var p = Y({
    labelId: i || o + "-label",
    menuId: n || o + "-menu",
    getItemId: r || function(d) {
      return o + "-item-" + d;
>>>>>>> main
    },
    toggleButtonId: l || o + "-toggle-button",
    inputId: u || o + "-input"
  });
<<<<<<< HEAD
  return d.current;
}, "useElementIds") : /* @__PURE__ */ a(function(t) {
  var o = t.id, i = o === void 0 ? "downshift-" + Lp() : o, r = t.labelId, n = t.menuId, l = t.getItemId, u = t.toggleButtonId, c = t.inputId,
  d = q({
    labelId: r || i + "-label",
    menuId: n || i + "-menu",
    getItemId: l || function(p) {
      return i + "-item-" + p;
=======
  return p.current;
}, "useElementIds") : /* @__PURE__ */ a(function(t) {
  var o = t.id, i = o === void 0 ? "downshift-" + sp() : o, n = t.labelId, r = t.menuId, l = t.getItemId, u = t.toggleButtonId, c = t.inputId,
  p = Y({
    labelId: n || i + "-label",
    menuId: r || i + "-menu",
    getItemId: l || function(d) {
      return i + "-item-" + d;
>>>>>>> main
    },
    toggleButtonId: u || i + "-toggle-button",
    inputId: c || i + "-input"
  });
<<<<<<< HEAD
  return d.current;
}, "useElementIds");
function Zi(e, t, o, i) {
  var r, n;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    r = o[t], n = t;
  } else
    n = t === void 0 ? o.indexOf(e) : t, r = e;
  return [r, n];
}
a(Zi, "getItemAndIndex");
function qx(e) {
  return /^\S{1}$/.test(e);
}
a(qx, "isAcceptedCharacterKey");
function Ji(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
a(Ji, "capitalizeString");
function mn(e) {
  var t = q(e);
  return t.current = e, t;
}
a(mn, "useLatestRef");
function ed(e, t, o, i) {
  var r = q(), n = q(), l = A(function(b, f) {
    n.current = f, b = Vo(b, f.props);
    var y = e(b, f), S = f.props.stateReducer(b, j({}, f, {
      changes: y
    }));
    return S;
  }, [e]), u = Zt(l, t, o), c = u[0], d = u[1], p = mn(t), m = A(function(b) {
    return d(j({
      props: p.current
    }, b));
  }, [p]), h = n.current;
  return V(function() {
    var b = Vo(r.current, h?.props), f = h && r.current && !i(b, c);
    f && Kx(h, b, c), r.current = c;
  }, [c, h, i]), [c, m];
}
a(ed, "useEnhancedReducer");
function td(e, t, o, i) {
  var r = ed(e, t, o, i), n = r[0], l = r[1];
  return [Vo(n, t), l];
}
a(td, "useControlledReducer$1");
var Wo = {
=======
  return p.current;
}, "useElementIds");
function li(e, t, o, i) {
  var n, r;
  if (e === void 0) {
    if (t === void 0)
      throw new Error(i);
    n = o[t], r = t;
  } else
    r = t === void 0 ? o.indexOf(e) : t, n = e;
  return [n, r];
}
a(li, "getItemAndIndex");
function vy(e) {
  return /^\S{1}$/.test(e);
}
a(vy, "isAcceptedCharacterKey");
function ui(e) {
  return "" + e.slice(0, 1).toUpperCase() + e.slice(1);
}
a(ui, "capitalizeString");
function qr(e) {
  var t = Y(e);
  return t.current = e, t;
}
a(qr, "useLatestRef");
function Tp(e, t, o, i) {
  var n = Y(), r = Y(), l = A(function(y, f) {
    r.current = f, y = _o(y, f.props);
    var b = e(y, f), I = f.props.stateReducer(y, G({}, f, {
      changes: b
    }));
    return I;
  }, [e]), u = Vt(l, t, o), c = u[0], p = u[1], d = qr(t), g = A(function(y) {
    return p(G({
      props: d.current
    }, y));
  }, [d]), h = r.current;
  return j(function() {
    var y = _o(n.current, h?.props), f = h && n.current && !i(y, c);
    f && hy(h, y, c), n.current = c;
  }, [c, h, i]), [c, g];
}
a(Tp, "useEnhancedReducer");
function Cp(e, t, o, i) {
  var n = Tp(e, t, o, i), r = n[0], l = n[1];
  return [_o(r, t), l];
}
a(Cp, "useControlledReducer$1");
var Eo = {
>>>>>>> main
  itemToString: /* @__PURE__ */ a(function(t) {
    return t ? String(t) : "";
  }, "itemToString"),
  itemToKey: /* @__PURE__ */ a(function(t) {
    return t;
  }, "itemToKey"),
<<<<<<< HEAD
  stateReducer: Ux,
  scrollIntoView: Mp,
=======
  stateReducer: yy,
  scrollIntoView: ip,
>>>>>>> main
  environment: (
    /* istanbul ignore next (ssr) */
    typeof window > "u" ? void 0 : window
  )
};
<<<<<<< HEAD
function lt(e, t, o) {
  o === void 0 && (o = Zp);
  var i = e["default" + Ji(t)];
  return i !== void 0 ? i : o[t];
}
a(lt, "getDefaultValue$1");
function Ut(e, t, o) {
  o === void 0 && (o = Zp);
  var i = e[t];
  if (i !== void 0)
    return i;
  var r = e["initial" + Ji(t)];
  return r !== void 0 ? r : lt(e, t, o);
}
a(Ut, "getInitialValue$1");
function od(e) {
  var t = Ut(e, "selectedItem"), o = Ut(e, "isOpen"), i = Yx(e), r = Ut(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && o ? e.items.findIndex(function(n) {
      return e.itemToKey(n) === e.itemToKey(t);
    }) : i,
    isOpen: o,
    selectedItem: t,
    inputValue: r
  };
}
a(od, "getInitialState$2");
function Gt(e, t, o) {
  var i = e.items, r = e.initialHighlightedIndex, n = e.defaultHighlightedIndex, l = e.isItemDisabled, u = e.itemToKey, c = t.selectedItem, d = t.
  highlightedIndex;
  return i.length === 0 ? -1 : r !== void 0 && d === r && !l(i[r], r) ? r : n !== void 0 && !l(i[n], n) ? n : c ? i.findIndex(function(p) {
    return u(c) === u(p);
  }) : o < 0 && !l(i[i.length - 1], i.length - 1) ? i.length - 1 : o > 0 && !l(i[0], 0) ? 0 : -1;
}
a(Gt, "getHighlightedIndexOnOpen");
function rd(e, t, o) {
  var i = q({
=======
function He(e, t, o) {
  o === void 0 && (o = _p);
  var i = e["default" + ui(t)];
  return i !== void 0 ? i : o[t];
}
a(He, "getDefaultValue$1");
function Ht(e, t, o) {
  o === void 0 && (o = _p);
  var i = e[t];
  if (i !== void 0)
    return i;
  var n = e["initial" + ui(t)];
  return n !== void 0 ? n : He(e, t, o);
}
a(Ht, "getInitialValue$1");
function kp(e) {
  var t = Ht(e, "selectedItem"), o = Ht(e, "isOpen"), i = Ht(e, "highlightedIndex"), n = Ht(e, "inputValue");
  return {
    highlightedIndex: i < 0 && t && o ? e.items.findIndex(function(r) {
      return e.itemToKey(r) === e.itemToKey(t);
    }) : i,
    isOpen: o,
    selectedItem: t,
    inputValue: n
  };
}
a(kp, "getInitialState$2");
function Bt(e, t, o) {
  var i = e.items, n = e.initialHighlightedIndex, r = e.defaultHighlightedIndex, l = e.isItemDisabled, u = e.itemToKey, c = t.selectedItem, p = t.
  highlightedIndex;
  return i.length === 0 ? -1 : n !== void 0 && p === n && !l(i[n]) ? n : r !== void 0 && !l(i[r]) ? r : c ? i.findIndex(function(d) {
    return u(c) === u(d);
  }) : o < 0 && !l(i[i.length - 1]) ? i.length - 1 : o > 0 && !l(i[0]) ? 0 : -1;
}
a(Bt, "getHighlightedIndexOnOpen");
function Op(e, t, o) {
  var i = Y({
>>>>>>> main
    isMouseDown: !1,
    isTouchMove: !1,
    isTouchEnd: !1
  });
<<<<<<< HEAD
  return V(function() {
    if (!e)
      return Re;
    var r = o.map(function(p) {
      return p.current;
    });
    function n() {
      i.current.isTouchEnd = !1, i.current.isMouseDown = !0;
    }
    a(n, "onMouseDown");
    function l(p) {
      i.current.isMouseDown = !1, an(p.target, r, e) || t();
=======
  return j(function() {
    if (!e)
      return Fe;
    var n = t.map(function(d) {
      return d.current;
    });
    function r() {
      i.current.isTouchEnd = !1, i.current.isMouseDown = !0;
    }
    a(r, "onMouseDown");
    function l(d) {
      i.current.isMouseDown = !1, Vr(d.target, n, e) || o();
>>>>>>> main
    }
    a(l, "onMouseUp");
    function u() {
      i.current.isTouchEnd = !1, i.current.isTouchMove = !1;
    }
    a(u, "onTouchStart");
    function c() {
      i.current.isTouchMove = !0;
    }
    a(c, "onTouchMove");
<<<<<<< HEAD
    function d(p) {
      i.current.isTouchEnd = !0, !i.current.isTouchMove && !an(p.target, r, e, !1) && t();
    }
    return a(d, "onTouchEnd"), e.addEventListener("mousedown", n), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.
    addEventListener("touchmove", c), e.addEventListener("touchend", d), /* @__PURE__ */ a(function() {
      e.removeEventListener("mousedown", n), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener(
      "touchmove", c), e.removeEventListener("touchend", d);
    }, "cleanup");
  }, [o, e, t]), i.current;
}
a(rd, "useMouseAndTouchTracker");
var es = /* @__PURE__ */ a(function() {
  return Re;
}, "useGetterPropsCalledChecker");
function ts(e, t, o, i) {
  i === void 0 && (i = {});
  var r = i.document, n = hn();
  V(function() {
    if (!(!e || n || !r)) {
      var l = e(t);
      Op(l, r);
    }
  }, o), V(function() {
    return function() {
      Op.cancel(), Rx(r);
    };
  }, [r]);
}
a(ts, "useA11yMessageStatus");
function nd(e) {
  var t = e.highlightedIndex, o = e.isOpen, i = e.itemRefs, r = e.getItemNodeFromIndex, n = e.menuElement, l = e.scrollIntoView, u = q(!0);
  return Gx(function() {
    t < 0 || !o || !Object.keys(i.current).length || (u.current === !1 ? u.current = !0 : l(r(t), n));
  }, [t]), u;
}
a(nd, "useScrollIntoView");
var os = Re;
function ln(e, t, o) {
  var i;
  o === void 0 && (o = !0);
  var r = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return j({
    isOpen: !1,
    highlightedIndex: -1
  }, r && j({
    selectedItem: e.items[t],
    isOpen: lt(e, "isOpen"),
    highlightedIndex: lt(e, "highlightedIndex")
=======
    function p(d) {
      i.current.isTouchEnd = !0, !i.current.isTouchMove && !Vr(d.target, n, e, !1) && o();
    }
    return a(p, "onTouchEnd"), e.addEventListener("mousedown", r), e.addEventListener("mouseup", l), e.addEventListener("touchstart", u), e.
    addEventListener("touchmove", c), e.addEventListener("touchend", p), /* @__PURE__ */ a(function() {
      e.removeEventListener("mousedown", r), e.removeEventListener("mouseup", l), e.removeEventListener("touchstart", u), e.removeEventListener(
      "touchmove", c), e.removeEventListener("touchend", p);
    }, "cleanup");
  }, [e, o]), i.current;
}
a(Op, "useMouseAndTouchTracker");
var ci = /* @__PURE__ */ a(function() {
  return Fe;
}, "useGetterPropsCalledChecker");
function pi(e, t, o, i) {
  i === void 0 && (i = {});
  var n = i.document, r = Qr();
  j(function() {
    if (!(!e || r || !n)) {
      var l = e(t);
      tp(l, n);
    }
  }, o), j(function() {
    return function() {
      tp.cancel(), ay(n);
    };
  }, [n]);
}
a(pi, "useA11yMessageStatus");
function Pp(e) {
  var t = e.highlightedIndex, o = e.isOpen, i = e.itemRefs, n = e.getItemNodeFromIndex, r = e.menuElement, l = e.scrollIntoView, u = Y(!0);
  return by(function() {
    t < 0 || !o || !Object.keys(i.current).length || (u.current === !1 ? u.current = !0 : l(n(t), r));
  }, [t]), u;
}
a(Pp, "useScrollIntoView");
var di = Fe;
function Kr(e, t, o) {
  var i;
  o === void 0 && (o = !0);
  var n = ((i = e.items) == null ? void 0 : i.length) && t >= 0;
  return G({
    isOpen: !1,
    highlightedIndex: -1
  }, n && G({
    selectedItem: e.items[t],
    isOpen: He(e, "isOpen"),
    highlightedIndex: He(e, "highlightedIndex")
>>>>>>> main
  }, o && {
    inputValue: e.itemToString(e.items[t])
  }));
}
<<<<<<< HEAD
a(ln, "getChangesOnSelection");
function id(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
a(id, "isDropdownsStateEqual");
function hn() {
=======
a(Kr, "getChangesOnSelection");
function Ap(e, t) {
  return e.isOpen === t.isOpen && e.inputValue === t.inputValue && e.highlightedIndex === t.highlightedIndex && e.selectedItem === t.selectedItem;
}
a(Ap, "isDropdownsStateEqual");
function Qr() {
>>>>>>> main
  var e = s.useRef(!0);
  return s.useEffect(function() {
    return e.current = !1, function() {
      e.current = !0;
    };
  }, []), e.current;
}
<<<<<<< HEAD
a(hn, "useIsInitialMount");
function un(e) {
  var t = lt(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
a(un, "getDefaultHighlightedIndex");
function Yx(e) {
  var t = Ut(e, "highlightedIndex");
  return t > -1 && e.isItemDisabled(e.items[t], t) ? -1 : t;
}
a(Yx, "getInitialHighlightedIndex");
var rn = {
  environment: Y.default.shape({
    addEventListener: Y.default.func.isRequired,
    removeEventListener: Y.default.func.isRequired,
    document: Y.default.shape({
      createElement: Y.default.func.isRequired,
      getElementById: Y.default.func.isRequired,
      activeElement: Y.default.any.isRequired,
      body: Y.default.any.isRequired
    }).isRequired,
    Node: Y.default.func.isRequired
  }),
  itemToString: Y.default.func,
  itemToKey: Y.default.func,
  stateReducer: Y.default.func
}, sd = j({}, rn, {
  getA11yStatusMessage: Y.default.func,
  highlightedIndex: Y.default.number,
  defaultHighlightedIndex: Y.default.number,
  initialHighlightedIndex: Y.default.number,
  isOpen: Y.default.bool,
  defaultIsOpen: Y.default.bool,
  initialIsOpen: Y.default.bool,
  selectedItem: Y.default.any,
  initialSelectedItem: Y.default.any,
  defaultSelectedItem: Y.default.any,
  id: Y.default.string,
  labelId: Y.default.string,
  menuId: Y.default.string,
  getItemId: Y.default.func,
  toggleButtonId: Y.default.string,
  onSelectedItemChange: Y.default.func,
  onHighlightedIndexChange: Y.default.func,
  onStateChange: Y.default.func,
  onIsOpenChange: Y.default.func,
  scrollIntoView: Y.default.func
});
function ad(e, t, o) {
  var i = t.type, r = t.props, n;
  switch (i) {
    case o.ItemMouseMove:
      n = {
=======
a(Qr, "useIsInitialMount");
var zr = {
  environment: q.default.shape({
    addEventListener: q.default.func.isRequired,
    removeEventListener: q.default.func.isRequired,
    document: q.default.shape({
      createElement: q.default.func.isRequired,
      getElementById: q.default.func.isRequired,
      activeElement: q.default.any.isRequired,
      body: q.default.any.isRequired
    }).isRequired,
    Node: q.default.func.isRequired
  }),
  itemToString: q.default.func,
  itemToKey: q.default.func,
  stateReducer: q.default.func
}, Dp = G({}, zr, {
  getA11yStatusMessage: q.default.func,
  highlightedIndex: q.default.number,
  defaultHighlightedIndex: q.default.number,
  initialHighlightedIndex: q.default.number,
  isOpen: q.default.bool,
  defaultIsOpen: q.default.bool,
  initialIsOpen: q.default.bool,
  selectedItem: q.default.any,
  initialSelectedItem: q.default.any,
  defaultSelectedItem: q.default.any,
  id: q.default.string,
  labelId: q.default.string,
  menuId: q.default.string,
  getItemId: q.default.func,
  toggleButtonId: q.default.string,
  onSelectedItemChange: q.default.func,
  onHighlightedIndexChange: q.default.func,
  onStateChange: q.default.func,
  onIsOpenChange: q.default.func,
  scrollIntoView: q.default.func
});
function Mp(e, t, o) {
  var i = t.type, n = t.props, r;
  switch (i) {
    case o.ItemMouseMove:
      r = {
>>>>>>> main
        highlightedIndex: t.disabled ? -1 : t.index
      };
      break;
    case o.MenuMouseLeave:
<<<<<<< HEAD
      n = {
=======
      r = {
>>>>>>> main
        highlightedIndex: -1
      };
      break;
    case o.ToggleButtonClick:
    case o.FunctionToggleMenu:
<<<<<<< HEAD
      n = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Gt(r, e, 0)
      };
      break;
    case o.FunctionOpenMenu:
      n = {
        isOpen: !0,
        highlightedIndex: Gt(r, e, 0)
      };
      break;
    case o.FunctionCloseMenu:
      n = {
=======
      r = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Bt(n, e, 0)
      };
      break;
    case o.FunctionOpenMenu:
      r = {
        isOpen: !0,
        highlightedIndex: Bt(n, e, 0)
      };
      break;
    case o.FunctionCloseMenu:
      r = {
>>>>>>> main
        isOpen: !1
      };
      break;
    case o.FunctionSetHighlightedIndex:
<<<<<<< HEAD
      n = {
        highlightedIndex: r.isItemDisabled(r.items[t.highlightedIndex], t.highlightedIndex) ? -1 : t.highlightedIndex
      };
      break;
    case o.FunctionSetInputValue:
      n = {
=======
      r = {
        highlightedIndex: t.highlightedIndex
      };
      break;
    case o.FunctionSetInputValue:
      r = {
>>>>>>> main
        inputValue: t.inputValue
      };
      break;
    case o.FunctionReset:
<<<<<<< HEAD
      n = {
        highlightedIndex: un(r),
        isOpen: lt(r, "isOpen"),
        selectedItem: lt(r, "selectedItem"),
        inputValue: lt(r, "inputValue")
=======
      r = {
        highlightedIndex: He(n, "highlightedIndex"),
        isOpen: He(n, "isOpen"),
        selectedItem: He(n, "selectedItem"),
        inputValue: He(n, "inputValue")
>>>>>>> main
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
<<<<<<< HEAD
  return j({}, e, n);
}
a(ad, "downshiftCommonReducer");
function Qx(e) {
  for (var t = e.keysSoFar, o = e.highlightedIndex, i = e.items, r = e.itemToString, n = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < i.
  length; u++) {
    var c = (u + o + (t.length < 2 ? 1 : 0)) % i.length, d = i[c];
    if (d !== void 0 && r(d).toLowerCase().startsWith(l) && !n(d, c))
=======
  return G({}, e, r);
}
a(Mp, "downshiftCommonReducer");
function xy(e) {
  for (var t = e.keysSoFar, o = e.highlightedIndex, i = e.items, n = e.itemToString, r = e.isItemDisabled, l = t.toLowerCase(), u = 0; u < i.
  length; u++) {
    var c = (u + o + (t.length < 2 ? 1 : 0)) % i.length, p = i[c];
    if (p !== void 0 && n(p).toLowerCase().startsWith(l) && !r(p, c))
>>>>>>> main
      return c;
  }
  return o;
}
<<<<<<< HEAD
a(Qx, "getItemIndexByCharacterKey");
var PR = $t($t({}, sd), { items: Y.default.array.isRequired, isItemDisabled: Y.default.func }), Xx = $t($t({}, Wo), { isItemDisabled: /* @__PURE__ */ a(
function() {
  return !1;
}, "isItemDisabled") }), Zx = Re, nn = 0, rs = 1, ns = 2, cn = 3, is = 4, ss = 5, as = 6, ls = 7, us = 8, cs = 9, ps = 10, pn = 11, ld = 12,
ud = 13, ds = 14, cd = 15, pd = 16, dd = 17, fd = 18, fs = 19, Xi = 20, md = 21, hd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  FunctionCloseMenu: dd,
  FunctionOpenMenu: pd,
  FunctionReset: md,
  FunctionSelectItem: fs,
  FunctionSetHighlightedIndex: fd,
  FunctionSetInputValue: Xi,
  FunctionToggleMenu: cd,
  ItemClick: ds,
  ItemMouseMove: ud,
  MenuMouseLeave: ld,
  ToggleButtonBlur: pn,
  ToggleButtonClick: nn,
  ToggleButtonKeyDownArrowDown: rs,
  ToggleButtonKeyDownArrowUp: ns,
  ToggleButtonKeyDownCharacter: cn,
  ToggleButtonKeyDownEnd: as,
  ToggleButtonKeyDownEnter: ls,
  ToggleButtonKeyDownEscape: is,
  ToggleButtonKeyDownHome: ss,
  ToggleButtonKeyDownPageDown: ps,
  ToggleButtonKeyDownPageUp: cs,
  ToggleButtonKeyDownSpaceButton: us
});
function Jx(e, t) {
  var o, i = t.type, r = t.props, n = t.altKey, l;
  switch (i) {
    case ds:
      l = {
        isOpen: lt(r, "isOpen"),
        highlightedIndex: un(r),
        selectedItem: r.items[t.index]
      };
      break;
    case cn:
      {
        var u = t.key, c = "" + e.inputValue + u, d = !e.isOpen && e.selectedItem ? r.items.findIndex(function(b) {
          return r.itemToKey(b) === r.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, p = Qx({
          keysSoFar: c,
          highlightedIndex: d,
          items: r.items,
          itemToString: r.itemToString,
          isItemDisabled: r.isItemDisabled
        });
        l = {
          inputValue: c,
          highlightedIndex: p,
=======
a(xy, "getItemIndexByCharacterKey");
var fR = Ft(Ft({}, Dp), { items: q.default.array.isRequired, isItemDisabled: q.default.func }), Sy = Ft(Ft({}, Eo), { isItemDisabled: /* @__PURE__ */ a(
function() {
  return !1;
}, "isItemDisabled") }), Iy = Fe, Wr = 0, fi = 1, mi = 2, $r = 3, hi = 4, gi = 5, yi = 6, bi = 7, vi = 8, xi = 9, Si = 10, Ur = 11, Lp = 12,
Np = 13, Ii = 14, Rp = 15, Fp = 16, Hp = 17, Bp = 18, Ei = 19, ai = 20, zp = 21, Wp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ToggleButtonClick: Wr,
  ToggleButtonKeyDownArrowDown: fi,
  ToggleButtonKeyDownArrowUp: mi,
  ToggleButtonKeyDownCharacter: $r,
  ToggleButtonKeyDownEscape: hi,
  ToggleButtonKeyDownHome: gi,
  ToggleButtonKeyDownEnd: yi,
  ToggleButtonKeyDownEnter: bi,
  ToggleButtonKeyDownSpaceButton: vi,
  ToggleButtonKeyDownPageUp: xi,
  ToggleButtonKeyDownPageDown: Si,
  ToggleButtonBlur: Ur,
  MenuMouseLeave: Lp,
  ItemMouseMove: Np,
  ItemClick: Ii,
  FunctionToggleMenu: Rp,
  FunctionOpenMenu: Fp,
  FunctionCloseMenu: Hp,
  FunctionSetHighlightedIndex: Bp,
  FunctionSelectItem: Ei,
  FunctionSetInputValue: ai,
  FunctionReset: zp
});
function Ey(e, t) {
  var o, i = t.type, n = t.props, r = t.altKey, l;
  switch (i) {
    case Ii:
      l = {
        isOpen: He(n, "isOpen"),
        highlightedIndex: He(n, "highlightedIndex"),
        selectedItem: n.items[t.index]
      };
      break;
    case $r:
      {
        var u = t.key, c = "" + e.inputValue + u, p = !e.isOpen && e.selectedItem ? n.items.findIndex(function(y) {
          return n.itemToKey(y) === n.itemToKey(e.selectedItem);
        }) : e.highlightedIndex, d = xy({
          keysSoFar: c,
          highlightedIndex: p,
          items: n.items,
          itemToString: n.itemToString,
          isItemDisabled: n.isItemDisabled
        });
        l = {
          inputValue: c,
          highlightedIndex: d,
>>>>>>> main
          isOpen: !0
        };
      }
      break;
<<<<<<< HEAD
    case rs:
      {
        var m = e.isOpen ? Je(e.highlightedIndex, 1, r.items, r.isItemDisabled) : n && e.selectedItem == null ? -1 : Gt(r, e, 1);
        l = {
          highlightedIndex: m,
=======
    case fi:
      {
        var g = e.isOpen ? et(e.highlightedIndex, 1, n.items, n.isItemDisabled) : r && e.selectedItem == null ? -1 : Bt(n, e, 1);
        l = {
          highlightedIndex: g,
>>>>>>> main
          isOpen: !0
        };
      }
      break;
<<<<<<< HEAD
    case ns:
      if (e.isOpen && n)
        l = ln(r, e.highlightedIndex, !1);
      else {
        var h = e.isOpen ? Je(e.highlightedIndex, -1, r.items, r.isItemDisabled) : Gt(r, e, -1);
=======
    case mi:
      if (e.isOpen && r)
        l = Kr(n, e.highlightedIndex, !1);
      else {
        var h = e.isOpen ? et(e.highlightedIndex, -1, n.items, n.isItemDisabled) : Bt(n, e, -1);
>>>>>>> main
        l = {
          highlightedIndex: h,
          isOpen: !0
        };
      }
      break;
    // only triggered when menu is open.
<<<<<<< HEAD
    case ls:
    case us:
      l = ln(r, e.highlightedIndex, !1);
      break;
    case ss:
      l = {
        highlightedIndex: wt(0, !1, r.items, r.isItemDisabled),
        isOpen: !0
      };
      break;
    case as:
      l = {
        highlightedIndex: wt(r.items.length - 1, !0, r.items, r.isItemDisabled),
        isOpen: !0
      };
      break;
    case cs:
      l = {
        highlightedIndex: Je(e.highlightedIndex, -10, r.items, r.isItemDisabled)
      };
      break;
    case ps:
      l = {
        highlightedIndex: Je(e.highlightedIndex, 10, r.items, r.isItemDisabled)
      };
      break;
    case is:
=======
    case bi:
    case vi:
      l = Kr(n, e.highlightedIndex, !1);
      break;
    case gi:
      l = {
        highlightedIndex: xt(0, !1, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case yi:
      l = {
        highlightedIndex: xt(n.items.length - 1, !0, n.items, n.isItemDisabled),
        isOpen: !0
      };
      break;
    case xi:
      l = {
        highlightedIndex: et(e.highlightedIndex, -10, n.items, n.isItemDisabled)
      };
      break;
    case Si:
      l = {
        highlightedIndex: et(e.highlightedIndex, 10, n.items, n.isItemDisabled)
      };
      break;
    case hi:
>>>>>>> main
      l = {
        isOpen: !1,
        highlightedIndex: -1
      };
      break;
<<<<<<< HEAD
    case pn:
      l = j({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = r.items) == null ? void 0 : o.length) && {
        selectedItem: r.items[e.highlightedIndex]
      });
      break;
    case fs:
=======
    case Ur:
      l = G({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = n.items) == null ? void 0 : o.length) && {
        selectedItem: n.items[e.highlightedIndex]
      });
      break;
    case Ei:
>>>>>>> main
      l = {
        selectedItem: t.selectedItem
      };
      break;
    default:
<<<<<<< HEAD
      return ad(e, t, hd);
  }
  return j({}, e, l);
}
a(Jx, "downshiftSelectReducer");
var eI = ["onClick"], tI = ["onMouseLeave", "refKey", "ref"], oI = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], rI = ["it\
em", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
gd.stateChangeTypes = hd;
function gd(e) {
  e === void 0 && (e = {}), Zx(e, gd);
  var t = j({}, Xx, e), o = t.scrollIntoView, i = t.environment, r = t.getA11yStatusMessage, n = td(Jx, t, od, id), l = n[0], u = n[1], c = l.
  isOpen, d = l.highlightedIndex, p = l.selectedItem, m = l.inputValue, h = q(null), b = q(null), f = q({}), y = q(null), S = Jp(t), E = mn(
  {
    state: l,
    props: t
  }), g = A(function(H) {
    return f.current[S.getItemId(H)];
  }, [S]);
  ts(r, l, [c, d, p, m], i);
  var v = nd({
    menuElement: b.current,
    highlightedIndex: d,
    isOpen: c,
    itemRefs: f,
    scrollIntoView: o,
    getItemNodeFromIndex: g
  });
  V(function() {
    return y.current = fn(function(H) {
      H({
        type: Xi,
        inputValue: ""
      });
    }, 500), function() {
      y.current.cancel();
    };
  }, []), V(function() {
    m && y.current(u);
  }, [u, m]), os({
    props: t,
    state: l
  }), V(function() {
    var H = Ut(t, "isOpen");
    H && h.current && h.current.focus();
  }, []);
  var I = rd(i, A(/* @__PURE__ */ a(function() {
    E.current.state.isOpen && u({
      type: pn
    });
  }, "handleBlur"), [u, E]), U(function() {
    return [b, h];
  }, [b.current, h.current])), w = es("getMenuProps", "getToggleButtonProps");
  V(function() {
    c || (f.current = {});
  }, [c]);
  var O = U(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(G) {
        G.preventDefault(), u({
          type: rs,
          altKey: G.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(G) {
        G.preventDefault(), u({
          type: ns,
          altKey: G.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(G) {
        G.preventDefault(), u({
          type: ss
        });
      }, "Home"),
      End: /* @__PURE__ */ a(function(G) {
        G.preventDefault(), u({
          type: as
        });
      }, "End"),
      Escape: /* @__PURE__ */ a(function() {
        E.current.state.isOpen && u({
          type: is
        });
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(G) {
        G.preventDefault(), u({
          type: E.current.state.isOpen ? ls : nn
        });
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(G) {
        E.current.state.isOpen && (G.preventDefault(), u({
          type: cs
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(G) {
        E.current.state.isOpen && (G.preventDefault(), u({
          type: ps
        }));
      }, "PageDown"),
      " ": /* @__PURE__ */ a(function(G) {
        G.preventDefault();
        var z = E.current.state;
        if (!z.isOpen) {
          u({
            type: nn
=======
      return Mp(e, t, Wp);
  }
  return G({}, e, l);
}
a(Ey, "downshiftSelectReducer");
var _y = ["onClick"], wy = ["onMouseLeave", "refKey", "ref"], Ty = ["onBlur", "onClick", "onPress", "onKeyDown", "refKey", "ref"], Cy = ["it\
em", "index", "onMouseMove", "onClick", "onMouseDown", "onPress", "refKey", "disabled", "ref"];
jp.stateChangeTypes = Wp;
function jp(e) {
  e === void 0 && (e = {}), Iy(e, jp);
  var t = G({}, Sy, e), o = t.scrollIntoView, i = t.environment, n = t.getA11yStatusMessage, r = Cp(Ey, t, kp, Ap), l = r[0], u = r[1], c = l.
  isOpen, p = l.highlightedIndex, d = l.selectedItem, g = l.inputValue, h = Y(null), y = Y(null), f = Y({}), b = Y(null), I = wp(t), _ = qr(
  {
    state: l,
    props: t
  }), m = A(function(H) {
    return f.current[I.getItemId(H)];
  }, [I]);
  pi(n, l, [c, p, d, g], i);
  var v = Pp({
    menuElement: y.current,
    highlightedIndex: p,
    isOpen: c,
    itemRefs: f,
    scrollIntoView: o,
    getItemNodeFromIndex: m
  });
  j(function() {
    return b.current = Yr(function(H) {
      H({
        type: ai,
        inputValue: ""
      });
    }, 500), function() {
      b.current.cancel();
    };
  }, []), j(function() {
    g && b.current(u);
  }, [u, g]), di({
    props: t,
    state: l
  }), j(function() {
    var H = Ht(t, "isOpen");
    H && h.current && h.current.focus();
  }, []);
  var S = Op(i, [h, y], A(/* @__PURE__ */ a(function() {
    _.current.state.isOpen && u({
      type: Ur
    });
  }, "handleBlur"), [u, _])), E = ci("getMenuProps", "getToggleButtonProps");
  j(function() {
    c || (f.current = {});
  }, [c]);
  var T = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(U) {
        U.preventDefault(), u({
          type: fi,
          altKey: U.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(U) {
        U.preventDefault(), u({
          type: mi,
          altKey: U.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(U) {
        U.preventDefault(), u({
          type: gi
        });
      }, "Home"),
      End: /* @__PURE__ */ a(function(U) {
        U.preventDefault(), u({
          type: yi
        });
      }, "End"),
      Escape: /* @__PURE__ */ a(function() {
        _.current.state.isOpen && u({
          type: hi
        });
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(U) {
        U.preventDefault(), u({
          type: _.current.state.isOpen ? bi : Wr
        });
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(U) {
        _.current.state.isOpen && (U.preventDefault(), u({
          type: xi
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(U) {
        _.current.state.isOpen && (U.preventDefault(), u({
          type: Si
        }));
      }, "PageDown"),
      " ": /* @__PURE__ */ a(function(U) {
        U.preventDefault();
        var z = _.current.state;
        if (!z.isOpen) {
          u({
            type: Wr
>>>>>>> main
          });
          return;
        }
        z.inputValue ? u({
<<<<<<< HEAD
          type: cn,
          key: " "
        }) : u({
          type: us
        });
      }, "_")
    };
  }, [u, E]), _ = A(function() {
    u({
      type: cd
    });
  }, [u]), k = A(function() {
    u({
      type: dd
    });
  }, [u]), T = A(function() {
    u({
      type: pd
    });
  }, [u]), C = A(function(H) {
    u({
      type: fd,
=======
          type: $r,
          key: " "
        }) : u({
          type: vi
        });
      }, "_")
    };
  }, [u, _]), C = A(function() {
    u({
      type: Rp
    });
  }, [u]), k = A(function() {
    u({
      type: Hp
    });
  }, [u]), w = A(function() {
    u({
      type: Fp
    });
  }, [u]), O = A(function(H) {
    u({
      type: Bp,
>>>>>>> main
      highlightedIndex: H
    });
  }, [u]), P = A(function(H) {
    u({
<<<<<<< HEAD
      type: fs,
=======
      type: Ei,
>>>>>>> main
      selectedItem: H
    });
  }, [u]), D = A(function() {
    u({
<<<<<<< HEAD
      type: md
    });
  }, [u]), M = A(function(H) {
    u({
      type: Xi,
      inputValue: H
    });
  }, [u]), F = A(function(H) {
    var G = H === void 0 ? {} : H, z = G.onClick, re = ke(G, eI), R = /* @__PURE__ */ a(function() {
      var L;
      (L = h.current) == null || L.focus();
    }, "labelHandleClick");
    return j({
      id: S.labelId,
      htmlFor: S.toggleButtonId,
      onClick: le(z, R)
    }, re);
  }, [S]), Z = A(function(H, G) {
    var z, re = H === void 0 ? {} : H, R = re.onMouseLeave, B = re.refKey, L = B === void 0 ? "ref" : B, $ = re.ref, J = ke(re, tI), ie = G ===
    void 0 ? {} : G, te = ie.suppressRefError, de = te === void 0 ? !1 : te, ae = /* @__PURE__ */ a(function() {
      u({
        type: ld
      });
    }, "menuHandleMouseLeave");
    return w("getMenuProps", de, L, b), j((z = {}, z[L] = Ze($, function(ce) {
      b.current = ce;
    }), z.id = S.menuId, z.role = "listbox", z["aria-labelledby"] = J && J["aria-label"] ? void 0 : "" + S.labelId, z.onMouseLeave = le(R, ae),
    z), J);
  }, [u, w, S]), W = A(function(H, G) {
    var z, re = H === void 0 ? {} : H, R = re.onBlur, B = re.onClick;
    re.onPress;
    var L = re.onKeyDown, $ = re.refKey, J = $ === void 0 ? "ref" : $, ie = re.ref, te = ke(re, oI), de = G === void 0 ? {} : G, ae = de.suppressRefError,
    ce = ae === void 0 ? !1 : ae, ue = E.current.state, Ie = /* @__PURE__ */ a(function() {
      u({
        type: nn
      });
    }, "toggleButtonHandleClick"), ye = /* @__PURE__ */ a(function() {
      ue.isOpen && !I.isMouseDown && u({
        type: pn
      });
    }, "toggleButtonHandleBlur"), Oe = /* @__PURE__ */ a(function(_e) {
      var Ae = po(_e);
      Ae && O[Ae] ? O[Ae](_e) : qx(Ae) && u({
        type: cn,
        key: Ae
      });
    }, "toggleButtonHandleKeyDown"), fe = j((z = {}, z[J] = Ze(ie, function(Se) {
      h.current = Se;
    }), z["aria-activedescendant"] = ue.isOpen && ue.highlightedIndex > -1 ? S.getItemId(ue.highlightedIndex) : "", z["aria-controls"] = S.menuId,
    z["aria-expanded"] = E.current.state.isOpen, z["aria-haspopup"] = "listbox", z["aria-labelledby"] = te && te["aria-label"] ? void 0 : "" +
    S.labelId, z.id = S.toggleButtonId, z.role = "combobox", z.tabIndex = 0, z.onBlur = le(R, ye), z), te);
    return te.disabled || (fe.onClick = le(B, Ie), fe.onKeyDown = le(L, Oe)), w("getToggleButtonProps", ce, J, h), fe;
  }, [u, S, E, I, w, O]), Q = A(function(H) {
    var G, z = H === void 0 ? {} : H, re = z.item, R = z.index, B = z.onMouseMove, L = z.onClick, $ = z.onMouseDown;
    z.onPress;
    var J = z.refKey, ie = J === void 0 ? "ref" : J, te = z.disabled, de = z.ref, ae = ke(z, rI);
    te !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useSelect.');
    var ce = E.current, ue = ce.state, Ie = ce.props, ye = Zi(re, R, Ie.items, "Pass either item or index to getItemProps!"), Oe = ye[0], fe = ye[1],
    Se = Ie.isItemDisabled(Oe, fe), _e = /* @__PURE__ */ a(function() {
      I.isTouchEnd || fe === ue.highlightedIndex || (v.current = !1, u({
        type: ud,
        index: fe,
        disabled: Se
      }));
    }, "itemHandleMouseMove"), Ae = /* @__PURE__ */ a(function() {
      u({
        type: ds,
        index: fe
      });
    }, "itemHandleClick"), et = /* @__PURE__ */ a(function(fo) {
      return fo.preventDefault();
    }, "itemHandleMouseDown"), N = j((G = {}, G[ie] = Ze(de, function(Ge) {
      Ge && (f.current[S.getItemId(fe)] = Ge);
    }), G["aria-disabled"] = Se, G["aria-selected"] = Oe === ue.selectedItem, G.id = S.getItemId(fe), G.role = "option", G), ae);
    return Se || (N.onClick = le(L, Ae)), N.onMouseMove = le(B, _e), N.onMouseDown = le($, et), N;
  }, [E, S, I, v, u]);
  return {
    // prop getters.
    getToggleButtonProps: W,
    getLabelProps: F,
    getMenuProps: Z,
    getItemProps: Q,
    // actions.
    toggleMenu: _,
    openMenu: T,
    closeMenu: k,
    setHighlightedIndex: C,
=======
      type: zp
    });
  }, [u]), M = A(function(H) {
    u({
      type: ai,
      inputValue: H
    });
  }, [u]), N = A(function(H) {
    var U = H === void 0 ? {} : H, z = U.onClick, re = ke(U, _y), R = /* @__PURE__ */ a(function() {
      var L;
      (L = h.current) == null || L.focus();
    }, "labelHandleClick");
    return G({
      id: I.labelId,
      htmlFor: I.toggleButtonId,
      onClick: le(z, R)
    }, re);
  }, [I]), Q = A(function(H, U) {
    var z, re = H === void 0 ? {} : H, R = re.onMouseLeave, F = re.refKey, L = F === void 0 ? "ref" : F, W = re.ref, J = ke(re, wy), ie = U ===
    void 0 ? {} : U, ee = ie.suppressRefError, de = ee === void 0 ? !1 : ee, ae = /* @__PURE__ */ a(function() {
      u({
        type: Lp
      });
    }, "menuHandleMouseLeave");
    return E("getMenuProps", de, L, y), G((z = {}, z[L] = Je(W, function(ce) {
      y.current = ce;
    }), z.id = I.menuId, z.role = "listbox", z["aria-labelledby"] = J && J["aria-label"] ? void 0 : "" + I.labelId, z.onMouseLeave = le(R, ae),
    z), J);
  }, [u, E, I]), V = A(function(H, U) {
    var z, re = H === void 0 ? {} : H, R = re.onBlur, F = re.onClick;
    re.onPress;
    var L = re.onKeyDown, W = re.refKey, J = W === void 0 ? "ref" : W, ie = re.ref, ee = ke(re, Ty), de = U === void 0 ? {} : U, ae = de.suppressRefError,
    ce = ae === void 0 ? !1 : ae, ue = _.current.state, Se = /* @__PURE__ */ a(function() {
      u({
        type: Wr
      });
    }, "toggleButtonHandleClick"), ye = /* @__PURE__ */ a(function() {
      ue.isOpen && !S.isMouseDown && u({
        type: Ur
      });
    }, "toggleButtonHandleBlur"), Oe = /* @__PURE__ */ a(function(Ce) {
      var Le = to(Ce);
      Le && T[Le] ? T[Le](Ce) : vy(Le) && u({
        type: $r,
        key: Le
      });
    }, "toggleButtonHandleKeyDown"), fe = G((z = {}, z[J] = Je(ie, function(Ie) {
      h.current = Ie;
    }), z["aria-activedescendant"] = ue.isOpen && ue.highlightedIndex > -1 ? I.getItemId(ue.highlightedIndex) : "", z["aria-controls"] = I.menuId,
    z["aria-expanded"] = _.current.state.isOpen, z["aria-haspopup"] = "listbox", z["aria-labelledby"] = ee && ee["aria-label"] ? void 0 : "" +
    I.labelId, z.id = I.toggleButtonId, z.role = "combobox", z.tabIndex = 0, z.onBlur = le(R, ye), z), ee);
    return ee.disabled || (fe.onClick = le(F, Se), fe.onKeyDown = le(L, Oe)), E("getToggleButtonProps", ce, J, h), fe;
  }, [u, I, _, S, E, T]), X = A(function(H) {
    var U, z = H === void 0 ? {} : H, re = z.item, R = z.index, F = z.onMouseMove, L = z.onClick, W = z.onMouseDown;
    z.onPress;
    var J = z.refKey, ie = J === void 0 ? "ref" : J, ee = z.disabled, de = z.ref, ae = ke(z, Cy);
    ee !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useSelect.');
    var ce = _.current, ue = ce.state, Se = ce.props, ye = li(re, R, Se.items, "Pass either item or index to getItemProps!"), Oe = ye[0], fe = ye[1],
    Ie = Se.isItemDisabled(Oe, fe), Ce = /* @__PURE__ */ a(function() {
      S.isTouchEnd || fe === ue.highlightedIndex || (v.current = !1, u({
        type: Np,
        index: fe,
        disabled: Ie
      }));
    }, "itemHandleMouseMove"), Le = /* @__PURE__ */ a(function() {
      u({
        type: Ii,
        index: fe
      });
    }, "itemHandleClick"), tt = /* @__PURE__ */ a(function(oo) {
      return oo.preventDefault();
    }, "itemHandleMouseDown"), De = G((U = {}, U[ie] = Je(de, function($e) {
      $e && (f.current[I.getItemId(fe)] = $e);
    }), U["aria-disabled"] = Ie, U["aria-selected"] = "" + (Oe === ue.selectedItem), U.id = I.getItemId(fe), U.role = "option", U), ae);
    return Ie || (De.onClick = le(L, Le)), De.onMouseMove = le(F, Ce), De.onMouseDown = le(W, tt), De;
  }, [_, I, S, v, u]);
  return {
    // prop getters.
    getToggleButtonProps: V,
    getLabelProps: N,
    getMenuProps: Q,
    getItemProps: X,
    // actions.
    toggleMenu: C,
    openMenu: w,
    closeMenu: k,
    setHighlightedIndex: O,
>>>>>>> main
    selectItem: P,
    reset: D,
    setInputValue: M,
    // state.
<<<<<<< HEAD
    highlightedIndex: d,
    isOpen: c,
    selectedItem: p,
    inputValue: m
  };
}
a(gd, "useSelect");
var ms = 0, hs = 1, gs = 2, ys = 3, bs = 4, vs = 5, xs = 6, Is = 7, Ss = 8, dn = 9, ws = 10, yd = 11, bd = 12, Es = 13, vd = 14, xd = 15, Id = 16,
Sd = 17, wd = 18, Ts = 19, Ed = 20, Td = 21, Cs = 22, Cd = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  ControlledPropUpdatedSelectedItem: Cs,
  FunctionCloseMenu: Sd,
  FunctionOpenMenu: Id,
  FunctionReset: Td,
  FunctionSelectItem: Ts,
  FunctionSetHighlightedIndex: wd,
  FunctionSetInputValue: Ed,
  FunctionToggleMenu: xd,
  InputBlur: dn,
  InputChange: Ss,
  InputClick: ws,
  InputKeyDownArrowDown: ms,
  InputKeyDownArrowUp: hs,
  InputKeyDownEnd: bs,
  InputKeyDownEnter: Is,
  InputKeyDownEscape: gs,
  InputKeyDownHome: ys,
  InputKeyDownPageDown: xs,
  InputKeyDownPageUp: vs,
  ItemClick: Es,
  ItemMouseMove: bd,
  MenuMouseLeave: yd,
  ToggleButtonClick: vd
});
function nI(e) {
  var t = od(e), o = t.selectedItem, i = t.inputValue;
  return i === "" && o && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(
  o)), j({}, t, {
    inputValue: i
  });
}
a(nI, "getInitialState$1");
var AR = j({}, sd, {
  items: Y.default.array.isRequired,
  isItemDisabled: Y.default.func,
  inputValue: Y.default.string,
  defaultInputValue: Y.default.string,
  initialInputValue: Y.default.string,
  inputId: Y.default.string,
  onInputValueChange: Y.default.func
});
function iI(e, t, o, i) {
  var r = q(), n = ed(e, t, o, i), l = n[0], u = n[1], c = hn();
  return V(function() {
    if (sn(t, "selectedItem")) {
      if (!c) {
        var d = t.itemToKey(t.selectedItem) !== t.itemToKey(r.current);
        d && u({
          type: Cs,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      r.current = l.selectedItem === r.current ? t.selectedItem : l.selectedItem;
    }
  }, [l.selectedItem, t.selectedItem]), [Vo(l, t), u];
}
a(iI, "useControlledReducer");
var sI = Re, aI = j({}, Wo, {
=======
    highlightedIndex: p,
    isOpen: c,
    selectedItem: d,
    inputValue: g
  };
}
a(jp, "useSelect");
var _i = 0, wi = 1, Ti = 2, Ci = 3, ki = 4, Oi = 5, Pi = 6, Ai = 7, Di = 8, Gr = 9, Mi = 10, Vp = 11, Kp = 12, Li = 13, $p = 14, Up = 15, Gp = 16,
Yp = 17, qp = 18, Ni = 19, Qp = 20, Xp = 21, Ri = 22, Zp = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  InputKeyDownArrowDown: _i,
  InputKeyDownArrowUp: wi,
  InputKeyDownEscape: Ti,
  InputKeyDownHome: Ci,
  InputKeyDownEnd: ki,
  InputKeyDownPageUp: Oi,
  InputKeyDownPageDown: Pi,
  InputKeyDownEnter: Ai,
  InputChange: Di,
  InputBlur: Gr,
  InputClick: Mi,
  MenuMouseLeave: Vp,
  ItemMouseMove: Kp,
  ItemClick: Li,
  ToggleButtonClick: $p,
  FunctionToggleMenu: Up,
  FunctionOpenMenu: Gp,
  FunctionCloseMenu: Yp,
  FunctionSetHighlightedIndex: qp,
  FunctionSelectItem: Ni,
  FunctionSetInputValue: Qp,
  FunctionReset: Xp,
  ControlledPropUpdatedSelectedItem: Ri
});
function ky(e) {
  var t = kp(e), o = t.selectedItem, i = t.inputValue;
  return i === "" && o && e.defaultInputValue === void 0 && e.initialInputValue === void 0 && e.inputValue === void 0 && (i = e.itemToString(
  o)), G({}, t, {
    inputValue: i
  });
}
a(ky, "getInitialState$1");
var mR = G({}, Dp, {
  items: q.default.array.isRequired,
  isItemDisabled: q.default.func,
  inputValue: q.default.string,
  defaultInputValue: q.default.string,
  initialInputValue: q.default.string,
  inputId: q.default.string,
  onInputValueChange: q.default.func
});
function Oy(e, t, o, i) {
  var n = Y(), r = Tp(e, t, o, i), l = r[0], u = r[1], c = Qr();
  return j(function() {
    if (jr(t, "selectedItem")) {
      if (!c) {
        var p = t.itemToKey(t.selectedItem) !== t.itemToKey(n.current);
        p && u({
          type: Ri,
          inputValue: t.itemToString(t.selectedItem)
        });
      }
      n.current = l.selectedItem === n.current ? t.selectedItem : l.selectedItem;
    }
  }, [l.selectedItem, t.selectedItem]), [_o(l, t), u];
}
a(Oy, "useControlledReducer");
var Py = Fe, Ay = G({}, Eo, {
>>>>>>> main
  isItemDisabled: /* @__PURE__ */ a(function() {
    return !1;
  }, "isItemDisabled")
});
<<<<<<< HEAD
function lI(e, t) {
  var o, i = t.type, r = t.props, n = t.altKey, l;
  switch (i) {
    case Es:
      l = {
        isOpen: lt(r, "isOpen"),
        highlightedIndex: un(r),
        selectedItem: r.items[t.index],
        inputValue: r.itemToString(r.items[t.index])
      };
      break;
    case ms:
      e.isOpen ? l = {
        highlightedIndex: Je(e.highlightedIndex, 1, r.items, r.isItemDisabled, !0)
      } : l = {
        highlightedIndex: n && e.selectedItem == null ? -1 : Gt(r, e, 1),
        isOpen: r.items.length >= 0
      };
      break;
    case hs:
      e.isOpen ? n ? l = ln(r, e.highlightedIndex) : l = {
        highlightedIndex: Je(e.highlightedIndex, -1, r.items, r.isItemDisabled, !0)
      } : l = {
        highlightedIndex: Gt(r, e, -1),
        isOpen: r.items.length >= 0
      };
      break;
    case Is:
      l = ln(r, e.highlightedIndex);
      break;
    case gs:
      l = j({
=======
function Dy(e, t) {
  var o, i = t.type, n = t.props, r = t.altKey, l;
  switch (i) {
    case Li:
      l = {
        isOpen: He(n, "isOpen"),
        highlightedIndex: He(n, "highlightedIndex"),
        selectedItem: n.items[t.index],
        inputValue: n.itemToString(n.items[t.index])
      };
      break;
    case _i:
      e.isOpen ? l = {
        highlightedIndex: et(e.highlightedIndex, 1, n.items, n.isItemDisabled, !0)
      } : l = {
        highlightedIndex: r && e.selectedItem == null ? -1 : Bt(n, e, 1),
        isOpen: n.items.length >= 0
      };
      break;
    case wi:
      e.isOpen ? r ? l = Kr(n, e.highlightedIndex) : l = {
        highlightedIndex: et(e.highlightedIndex, -1, n.items, n.isItemDisabled, !0)
      } : l = {
        highlightedIndex: Bt(n, e, -1),
        isOpen: n.items.length >= 0
      };
      break;
    case Ai:
      l = Kr(n, e.highlightedIndex);
      break;
    case Ti:
      l = G({
>>>>>>> main
        isOpen: !1,
        highlightedIndex: -1
      }, !e.isOpen && {
        selectedItem: null,
        inputValue: ""
      });
      break;
<<<<<<< HEAD
    case vs:
      l = {
        highlightedIndex: Je(e.highlightedIndex, -10, r.items, r.isItemDisabled, !0)
      };
      break;
    case xs:
      l = {
        highlightedIndex: Je(e.highlightedIndex, 10, r.items, r.isItemDisabled, !0)
      };
      break;
    case ys:
      l = {
        highlightedIndex: wt(0, !1, r.items, r.isItemDisabled)
      };
      break;
    case bs:
      l = {
        highlightedIndex: wt(r.items.length - 1, !0, r.items, r.isItemDisabled)
      };
      break;
    case dn:
      l = j({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = r.items) == null ? void 0 : o.length) && t.selectItem && {
        selectedItem: r.items[e.highlightedIndex],
        inputValue: r.itemToString(r.items[e.highlightedIndex])
      });
      break;
    case Ss:
      l = {
        isOpen: !0,
        highlightedIndex: un(r),
        inputValue: t.inputValue
      };
      break;
    case ws:
      l = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Gt(r, e, 0)
      };
      break;
    case Ts:
      l = {
        selectedItem: t.selectedItem,
        inputValue: r.itemToString(t.selectedItem)
      };
      break;
    case Cs:
=======
    case Oi:
      l = {
        highlightedIndex: et(e.highlightedIndex, -10, n.items, n.isItemDisabled, !0)
      };
      break;
    case Pi:
      l = {
        highlightedIndex: et(e.highlightedIndex, 10, n.items, n.isItemDisabled, !0)
      };
      break;
    case Ci:
      l = {
        highlightedIndex: xt(0, !1, n.items, n.isItemDisabled)
      };
      break;
    case ki:
      l = {
        highlightedIndex: xt(n.items.length - 1, !0, n.items, n.isItemDisabled)
      };
      break;
    case Gr:
      l = G({
        isOpen: !1,
        highlightedIndex: -1
      }, e.highlightedIndex >= 0 && ((o = n.items) == null ? void 0 : o.length) && t.selectItem && {
        selectedItem: n.items[e.highlightedIndex],
        inputValue: n.itemToString(n.items[e.highlightedIndex])
      });
      break;
    case Di:
      l = {
        isOpen: !0,
        highlightedIndex: He(n, "highlightedIndex"),
        inputValue: t.inputValue
      };
      break;
    case Mi:
      l = {
        isOpen: !e.isOpen,
        highlightedIndex: e.isOpen ? -1 : Bt(n, e, 0)
      };
      break;
    case Ni:
      l = {
        selectedItem: t.selectedItem,
        inputValue: n.itemToString(t.selectedItem)
      };
      break;
    case Ri:
>>>>>>> main
      l = {
        inputValue: t.inputValue
      };
      break;
    default:
<<<<<<< HEAD
      return ad(e, t, Cd);
  }
  return j({}, e, l);
}
a(lI, "downshiftUseComboboxReducer");
var uI = ["onMouseLeave", "refKey", "ref"], cI = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "dis\
abled"], pI = ["onClick", "onPress", "refKey", "ref"], dI = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKe\
y", "ref"];
_d.stateChangeTypes = Cd;
function _d(e) {
  e === void 0 && (e = {}), sI(e, _d);
  var t = j({}, aI, e), o = t.items, i = t.scrollIntoView, r = t.environment, n = t.getA11yStatusMessage, l = iI(lI, t, nI, id), u = l[0], c = l[1],
  d = u.isOpen, p = u.highlightedIndex, m = u.selectedItem, h = u.inputValue, b = q(null), f = q({}), y = q(null), S = q(null), E = hn(), g = Jp(
  t), v = q(), I = mn({
    state: u,
    props: t
  }), w = A(function(R) {
    return f.current[g.getItemId(R)];
  }, [g]);
  ts(n, u, [d, p, m, h], r);
  var O = nd({
    menuElement: b.current,
    highlightedIndex: p,
    isOpen: d,
    itemRefs: f,
    scrollIntoView: i,
    getItemNodeFromIndex: w
  });
  os({
    props: t,
    state: u
  }), V(function() {
    var R = Ut(t, "isOpen");
    R && y.current && y.current.focus();
  }, []), V(function() {
    E || (v.current = o.length);
  });
  var _ = rd(r, A(/* @__PURE__ */ a(function() {
    I.current.state.isOpen && c({
      type: dn,
      selectItem: !1
    });
  }, "handleBlur"), [c, I]), U(function() {
    return [b, S, y];
  }, [b.current, S.current, y.current])), k = es("getInputProps", "getMenuProps");
  V(function() {
    d || (f.current = {});
  }, [d]), V(function() {
    var R;
    !d || !(r != null && r.document) || !(y != null && (R = y.current) != null && R.focus) || r.document.activeElement !== y.current && y.current.
    focus();
  }, [d, r]);
  var T = U(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(B) {
        B.preventDefault(), c({
          type: ms,
          altKey: B.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(B) {
        B.preventDefault(), c({
          type: hs,
          altKey: B.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: ys
        }));
      }, "Home"),
      End: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: bs
        }));
      }, "End"),
      Escape: /* @__PURE__ */ a(function(B) {
        var L = I.current.state;
        (L.isOpen || L.inputValue || L.selectedItem || L.highlightedIndex > -1) && (B.preventDefault(), c({
          type: gs
        }));
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(B) {
        var L = I.current.state;
        !L.isOpen || B.which === 229 || (B.preventDefault(), c({
          type: Is
        }));
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: vs
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(B) {
        I.current.state.isOpen && (B.preventDefault(), c({
          type: xs
        }));
      }, "PageDown")
    };
  }, [c, I]), C = A(function(R) {
    return j({
      id: g.labelId,
      htmlFor: g.inputId
    }, R);
  }, [g]), P = A(function(R, B) {
    var L, $ = R === void 0 ? {} : R, J = $.onMouseLeave, ie = $.refKey, te = ie === void 0 ? "ref" : ie, de = $.ref, ae = ke($, uI), ce = B ===
    void 0 ? {} : B, ue = ce.suppressRefError, Ie = ue === void 0 ? !1 : ue;
    return k("getMenuProps", Ie, te, b), j((L = {}, L[te] = Ze(de, function(ye) {
      b.current = ye;
    }), L.id = g.menuId, L.role = "listbox", L["aria-labelledby"] = ae && ae["aria-label"] ? void 0 : "" + g.labelId, L.onMouseLeave = le(J,
    function() {
      c({
        type: yd
      });
    }), L), ae);
  }, [c, k, g]), D = A(function(R) {
    var B, L, $ = R === void 0 ? {} : R, J = $.item, ie = $.index, te = $.refKey, de = te === void 0 ? "ref" : te, ae = $.ref, ce = $.onMouseMove,
    ue = $.onMouseDown, Ie = $.onClick;
    $.onPress;
    var ye = $.disabled, Oe = ke($, cI);
    ye !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useCombobox.');
    var fe = I.current, Se = fe.props, _e = fe.state, Ae = Zi(J, ie, Se.items, "Pass either item or index to getItemProps!"), et = Ae[0], N = Ae[1],
    Ge = Se.isItemDisabled(et, N), fo = "onClick", $o = Ie, ft = /* @__PURE__ */ a(function() {
      _.isTouchEnd || N === _e.highlightedIndex || (O.current = !1, c({
        type: bd,
        index: N,
        disabled: Ge
      }));
    }, "itemHandleMouseMove"), Et = /* @__PURE__ */ a(function() {
      c({
        type: Es,
        index: N
      });
    }, "itemHandleClick"), mt = /* @__PURE__ */ a(function(lf) {
      return lf.preventDefault();
    }, "itemHandleMouseDown");
    return j((B = {}, B[de] = Ze(ae, function(qe) {
      qe && (f.current[g.getItemId(N)] = qe);
    }), B["aria-disabled"] = Ge, B["aria-selected"] = N === _e.highlightedIndex, B.id = g.getItemId(N), B.role = "option", B), !Ge && (L = {},
    L[fo] = le($o, Et), L), {
      onMouseMove: le(ce, ft),
      onMouseDown: le(ue, mt)
    }, Oe);
  }, [c, g, I, _, O]), M = A(function(R) {
    var B, L = R === void 0 ? {} : R, $ = L.onClick;
    L.onPress;
    var J = L.refKey, ie = J === void 0 ? "ref" : J, te = L.ref, de = ke(L, pI), ae = I.current.state, ce = /* @__PURE__ */ a(function() {
      c({
        type: vd
      });
    }, "toggleButtonHandleClick");
    return j((B = {}, B[ie] = Ze(te, function(ue) {
      S.current = ue;
    }), B["aria-controls"] = g.menuId, B["aria-expanded"] = ae.isOpen, B.id = g.toggleButtonId, B.tabIndex = -1, B), !de.disabled && j({}, {
      onClick: le($, ce)
    }), de);
  }, [c, I, g]), F = A(function(R, B) {
    var L, $ = R === void 0 ? {} : R, J = $.onKeyDown, ie = $.onChange, te = $.onInput, de = $.onBlur;
    $.onChangeText;
    var ae = $.onClick, ce = $.refKey, ue = ce === void 0 ? "ref" : ce, Ie = $.ref, ye = ke($, dI), Oe = B === void 0 ? {} : B, fe = Oe.suppressRefError,
    Se = fe === void 0 ? !1 : fe;
    k("getInputProps", Se, ue, y);
    var _e = I.current.state, Ae = /* @__PURE__ */ a(function(mt) {
      var qe = po(mt);
      qe && T[qe] && T[qe](mt);
    }, "inputHandleKeyDown"), et = /* @__PURE__ */ a(function(mt) {
      c({
        type: Ss,
        inputValue: mt.target.value
      });
    }, "inputHandleChange"), N = /* @__PURE__ */ a(function(mt) {
      if (r != null && r.document && _e.isOpen && !_.isMouseDown) {
        var qe = mt.relatedTarget === null && r.document.activeElement !== r.document.body;
        c({
          type: dn,
          selectItem: !qe
        });
      }
    }, "inputHandleBlur"), Ge = /* @__PURE__ */ a(function() {
      c({
        type: ws
      });
    }, "inputHandleClick"), fo = "onChange", $o = {};
    if (!ye.disabled) {
      var ft;
      $o = (ft = {}, ft[fo] = le(ie, te, et), ft.onKeyDown = le(J, Ae), ft.onBlur = le(de, N), ft.onClick = le(ae, Ge), ft);
    }
    return j((L = {}, L[ue] = Ze(Ie, function(Et) {
      y.current = Et;
    }), L["aria-activedescendant"] = _e.isOpen && _e.highlightedIndex > -1 ? g.getItemId(_e.highlightedIndex) : "", L["aria-autocomplete"] =
    "list", L["aria-controls"] = g.menuId, L["aria-expanded"] = _e.isOpen, L["aria-labelledby"] = ye && ye["aria-label"] ? void 0 : g.labelId,
    L.autoComplete = "off", L.id = g.inputId, L.role = "combobox", L.value = _e.inputValue, L), $o, ye);
  }, [c, g, r, T, I, _, k]), Z = A(function() {
    c({
      type: xd
    });
  }, [c]), W = A(function() {
    c({
      type: Sd
    });
  }, [c]), Q = A(function() {
    c({
      type: Id
    });
  }, [c]), H = A(function(R) {
    c({
      type: wd,
      highlightedIndex: R
    });
  }, [c]), G = A(function(R) {
    c({
      type: Ts,
=======
      return Mp(e, t, Zp);
  }
  return G({}, e, l);
}
a(Dy, "downshiftUseComboboxReducer");
var My = ["onMouseLeave", "refKey", "ref"], Ly = ["item", "index", "refKey", "ref", "onMouseMove", "onMouseDown", "onClick", "onPress", "dis\
abled"], Ny = ["onClick", "onPress", "refKey", "ref"], Ry = ["onKeyDown", "onChange", "onInput", "onBlur", "onChangeText", "onClick", "refKe\
y", "ref"];
Jp.stateChangeTypes = Zp;
function Jp(e) {
  e === void 0 && (e = {}), Py(e, Jp);
  var t = G({}, Ay, e), o = t.items, i = t.scrollIntoView, n = t.environment, r = t.getA11yStatusMessage, l = Oy(Dy, t, ky, Ap), u = l[0], c = l[1],
  p = u.isOpen, d = u.highlightedIndex, g = u.selectedItem, h = u.inputValue, y = Y(null), f = Y({}), b = Y(null), I = Y(null), _ = Qr(), m = wp(
  t), v = Y(), S = qr({
    state: u,
    props: t
  }), E = A(function(R) {
    return f.current[m.getItemId(R)];
  }, [m]);
  pi(r, u, [p, d, g, h], n);
  var T = Pp({
    menuElement: y.current,
    highlightedIndex: d,
    isOpen: p,
    itemRefs: f,
    scrollIntoView: i,
    getItemNodeFromIndex: E
  });
  di({
    props: t,
    state: u
  }), j(function() {
    var R = Ht(t, "isOpen");
    R && b.current && b.current.focus();
  }, []), j(function() {
    _ || (v.current = o.length);
  });
  var C = Op(n, [I, y, b], A(/* @__PURE__ */ a(function() {
    S.current.state.isOpen && c({
      type: Gr,
      selectItem: !1
    });
  }, "handleBlur"), [c, S])), k = ci("getInputProps", "getMenuProps");
  j(function() {
    p || (f.current = {});
  }, [p]), j(function() {
    var R;
    !p || !(n != null && n.document) || !(b != null && (R = b.current) != null && R.focus) || n.document.activeElement !== b.current && b.current.
    focus();
  }, [p, n]);
  var w = K(function() {
    return {
      ArrowDown: /* @__PURE__ */ a(function(F) {
        F.preventDefault(), c({
          type: _i,
          altKey: F.altKey
        });
      }, "ArrowDown"),
      ArrowUp: /* @__PURE__ */ a(function(F) {
        F.preventDefault(), c({
          type: wi,
          altKey: F.altKey
        });
      }, "ArrowUp"),
      Home: /* @__PURE__ */ a(function(F) {
        S.current.state.isOpen && (F.preventDefault(), c({
          type: Ci
        }));
      }, "Home"),
      End: /* @__PURE__ */ a(function(F) {
        S.current.state.isOpen && (F.preventDefault(), c({
          type: ki
        }));
      }, "End"),
      Escape: /* @__PURE__ */ a(function(F) {
        var L = S.current.state;
        (L.isOpen || L.inputValue || L.selectedItem || L.highlightedIndex > -1) && (F.preventDefault(), c({
          type: Ti
        }));
      }, "Escape"),
      Enter: /* @__PURE__ */ a(function(F) {
        var L = S.current.state;
        !L.isOpen || F.which === 229 || (F.preventDefault(), c({
          type: Ai
        }));
      }, "Enter"),
      PageUp: /* @__PURE__ */ a(function(F) {
        S.current.state.isOpen && (F.preventDefault(), c({
          type: Oi
        }));
      }, "PageUp"),
      PageDown: /* @__PURE__ */ a(function(F) {
        S.current.state.isOpen && (F.preventDefault(), c({
          type: Pi
        }));
      }, "PageDown")
    };
  }, [c, S]), O = A(function(R) {
    return G({
      id: m.labelId,
      htmlFor: m.inputId
    }, R);
  }, [m]), P = A(function(R, F) {
    var L, W = R === void 0 ? {} : R, J = W.onMouseLeave, ie = W.refKey, ee = ie === void 0 ? "ref" : ie, de = W.ref, ae = ke(W, My), ce = F ===
    void 0 ? {} : F, ue = ce.suppressRefError, Se = ue === void 0 ? !1 : ue;
    return k("getMenuProps", Se, ee, y), G((L = {}, L[ee] = Je(de, function(ye) {
      y.current = ye;
    }), L.id = m.menuId, L.role = "listbox", L["aria-labelledby"] = ae && ae["aria-label"] ? void 0 : "" + m.labelId, L.onMouseLeave = le(J,
    function() {
      c({
        type: Vp
      });
    }), L), ae);
  }, [c, k, m]), D = A(function(R) {
    var F, L, W = R === void 0 ? {} : R, J = W.item, ie = W.index, ee = W.refKey, de = ee === void 0 ? "ref" : ee, ae = W.ref, ce = W.onMouseMove,
    ue = W.onMouseDown, Se = W.onClick;
    W.onPress;
    var ye = W.disabled, Oe = ke(W, Ly);
    ye !== void 0 && console.warn('Passing "disabled" as an argument to getItemProps is not supported anymore. Please use the isItemDisabled\
 prop from useCombobox.');
    var fe = S.current, Ie = fe.props, Ce = fe.state, Le = li(J, ie, Ie.items, "Pass either item or index to getItemProps!"), tt = Le[0], De = Le[1],
    $e = Ie.isItemDisabled(tt, De), oo = "onClick", Co = Se, pt = /* @__PURE__ */ a(function() {
      C.isTouchEnd || De === Ce.highlightedIndex || (T.current = !1, c({
        type: Kp,
        index: De,
        disabled: $e
      }));
    }, "itemHandleMouseMove"), B = /* @__PURE__ */ a(function() {
      c({
        type: Li,
        index: De
      });
    }, "itemHandleClick"), dt = /* @__PURE__ */ a(function(Ld) {
      return Ld.preventDefault();
    }, "itemHandleMouseDown");
    return G((F = {}, F[de] = Je(ae, function(Ue) {
      Ue && (f.current[m.getItemId(De)] = Ue);
    }), F["aria-disabled"] = $e, F["aria-selected"] = "" + (De === Ce.highlightedIndex), F.id = m.getItemId(De), F.role = "option", F), !$e &&
    (L = {}, L[oo] = le(Co, B), L), {
      onMouseMove: le(ce, pt),
      onMouseDown: le(ue, dt)
    }, Oe);
  }, [c, m, S, C, T]), M = A(function(R) {
    var F, L = R === void 0 ? {} : R, W = L.onClick;
    L.onPress;
    var J = L.refKey, ie = J === void 0 ? "ref" : J, ee = L.ref, de = ke(L, Ny), ae = S.current.state, ce = /* @__PURE__ */ a(function() {
      c({
        type: $p
      });
    }, "toggleButtonHandleClick");
    return G((F = {}, F[ie] = Je(ee, function(ue) {
      I.current = ue;
    }), F["aria-controls"] = m.menuId, F["aria-expanded"] = ae.isOpen, F.id = m.toggleButtonId, F.tabIndex = -1, F), !de.disabled && G({}, {
      onClick: le(W, ce)
    }), de);
  }, [c, S, m]), N = A(function(R, F) {
    var L, W = R === void 0 ? {} : R, J = W.onKeyDown, ie = W.onChange, ee = W.onInput, de = W.onBlur;
    W.onChangeText;
    var ae = W.onClick, ce = W.refKey, ue = ce === void 0 ? "ref" : ce, Se = W.ref, ye = ke(W, Ry), Oe = F === void 0 ? {} : F, fe = Oe.suppressRefError,
    Ie = fe === void 0 ? !1 : fe;
    k("getInputProps", Ie, ue, b);
    var Ce = S.current.state, Le = /* @__PURE__ */ a(function(dt) {
      var Ue = to(dt);
      Ue && w[Ue] && w[Ue](dt);
    }, "inputHandleKeyDown"), tt = /* @__PURE__ */ a(function(dt) {
      c({
        type: Di,
        inputValue: dt.target.value
      });
    }, "inputHandleChange"), De = /* @__PURE__ */ a(function(dt) {
      if (n != null && n.document && Ce.isOpen && !C.isMouseDown) {
        var Ue = dt.relatedTarget === null && n.document.activeElement !== n.document.body;
        c({
          type: Gr,
          selectItem: !Ue
        });
      }
    }, "inputHandleBlur"), $e = /* @__PURE__ */ a(function() {
      c({
        type: Mi
      });
    }, "inputHandleClick"), oo = "onChange", Co = {};
    if (!ye.disabled) {
      var pt;
      Co = (pt = {}, pt[oo] = le(ie, ee, tt), pt.onKeyDown = le(J, Le), pt.onBlur = le(de, De), pt.onClick = le(ae, $e), pt);
    }
    return G((L = {}, L[ue] = Je(Se, function(B) {
      b.current = B;
    }), L["aria-activedescendant"] = Ce.isOpen && Ce.highlightedIndex > -1 ? m.getItemId(Ce.highlightedIndex) : "", L["aria-autocomplete"] =
    "list", L["aria-controls"] = m.menuId, L["aria-expanded"] = Ce.isOpen, L["aria-labelledby"] = ye && ye["aria-label"] ? void 0 : m.labelId,
    L.autoComplete = "off", L.id = m.inputId, L.role = "combobox", L.value = Ce.inputValue, L), Co, ye);
  }, [c, m, n, w, S, C, k]), Q = A(function() {
    c({
      type: Up
    });
  }, [c]), V = A(function() {
    c({
      type: Yp
    });
  }, [c]), X = A(function() {
    c({
      type: Gp
    });
  }, [c]), H = A(function(R) {
    c({
      type: qp,
      highlightedIndex: R
    });
  }, [c]), U = A(function(R) {
    c({
      type: Ni,
>>>>>>> main
      selectedItem: R
    });
  }, [c]), z = A(function(R) {
    c({
<<<<<<< HEAD
      type: Ed,
=======
      type: Qp,
>>>>>>> main
      inputValue: R
    });
  }, [c]), re = A(function() {
    c({
<<<<<<< HEAD
      type: Td
=======
      type: Xp
>>>>>>> main
    });
  }, [c]);
  return {
    // prop getters.
    getItemProps: D,
<<<<<<< HEAD
    getLabelProps: C,
    getMenuProps: P,
    getInputProps: F,
    getToggleButtonProps: M,
    // actions.
    toggleMenu: Z,
    openMenu: Q,
    closeMenu: W,
    setHighlightedIndex: H,
    setInputValue: z,
    selectItem: G,
    reset: re,
    // state.
    highlightedIndex: p,
    isOpen: d,
    selectedItem: m,
    inputValue: h
  };
}
a(_d, "useCombobox");
var kd = {
  activeIndex: -1,
  selectedItems: []
};
function Pp(e, t) {
  return Ut(e, t, kd);
}
a(Pp, "getInitialValue");
function Ap(e, t) {
  return lt(e, t, kd);
}
a(Ap, "getDefaultValue");
function fI(e) {
  var t = Pp(e, "activeIndex"), o = Pp(e, "selectedItems");
=======
    getLabelProps: O,
    getMenuProps: P,
    getInputProps: N,
    getToggleButtonProps: M,
    // actions.
    toggleMenu: Q,
    openMenu: X,
    closeMenu: V,
    setHighlightedIndex: H,
    setInputValue: z,
    selectItem: U,
    reset: re,
    // state.
    highlightedIndex: d,
    isOpen: p,
    selectedItem: g,
    inputValue: h
  };
}
a(Jp, "useCombobox");
var ed = {
  activeIndex: -1,
  selectedItems: []
};
function op(e, t) {
  return Ht(e, t, ed);
}
a(op, "getInitialValue");
function rp(e, t) {
  return He(e, t, ed);
}
a(rp, "getDefaultValue");
function Fy(e) {
  var t = op(e, "activeIndex"), o = op(e, "selectedItems");
>>>>>>> main
  return {
    activeIndex: t,
    selectedItems: o
  };
}
<<<<<<< HEAD
a(fI, "getInitialState");
function Dp(e) {
=======
a(Fy, "getInitialState");
function np(e) {
>>>>>>> main
  if (e.shiftKey || e.metaKey || e.ctrlKey || e.altKey)
    return !1;
  var t = e.target;
  return !(t instanceof HTMLInputElement && // if element is a text input
  t.value !== "" && // and we have text in it
  // and cursor is either not at the start or is currently highlighting text.
  (t.selectionStart !== 0 || t.selectionEnd !== 0));
}
<<<<<<< HEAD
a(Dp, "isKeyDownOperationPermitted");
function mI(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
a(mI, "isStateEqual");
var DR = {
  stateReducer: rn.stateReducer,
  itemToKey: rn.itemToKey,
  environment: rn.environment,
  selectedItems: Y.default.array,
  initialSelectedItems: Y.default.array,
  defaultSelectedItems: Y.default.array,
  getA11yStatusMessage: Y.default.func,
  activeIndex: Y.default.number,
  initialActiveIndex: Y.default.number,
  defaultActiveIndex: Y.default.number,
  onActiveIndexChange: Y.default.func,
  onSelectedItemsChange: Y.default.func,
  keyNavigationNext: Y.default.string,
  keyNavigationPrevious: Y.default.string
}, hI = {
  itemToKey: Wo.itemToKey,
  stateReducer: Wo.stateReducer,
  environment: Wo.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, gI = Re, _s = 0, ks = 1, Os = 2, Ps = 3, As = 4, Ds = 5, Ms = 6, Ls = 7, Ns = 8, Fs = 9, Rs = 10, Bs = 11, Hs = 12, yI = /* @__PURE__ */ Object.
freeze({
  __proto__: null,
  DropdownClick: Ls,
  DropdownKeyDownBackspace: Ms,
  DropdownKeyDownNavigationPrevious: Ds,
  FunctionAddSelectedItem: Ns,
  FunctionRemoveSelectedItem: Fs,
  FunctionReset: Hs,
  FunctionSetActiveIndex: Bs,
  FunctionSetSelectedItems: Rs,
  SelectedItemClick: _s,
  SelectedItemKeyDownBackspace: Os,
  SelectedItemKeyDownDelete: ks,
  SelectedItemKeyDownNavigationNext: Ps,
  SelectedItemKeyDownNavigationPrevious: As
});
function bI(e, t) {
  var o = t.type, i = t.index, r = t.props, n = t.selectedItem, l = e.activeIndex, u = e.selectedItems, c;
  switch (o) {
    case _s:
=======
a(np, "isKeyDownOperationPermitted");
function Hy(e, t) {
  return e.selectedItems === t.selectedItems && e.activeIndex === t.activeIndex;
}
a(Hy, "isStateEqual");
var hR = {
  stateReducer: zr.stateReducer,
  itemToKey: zr.itemToKey,
  environment: zr.environment,
  selectedItems: q.default.array,
  initialSelectedItems: q.default.array,
  defaultSelectedItems: q.default.array,
  getA11yStatusMessage: q.default.func,
  activeIndex: q.default.number,
  initialActiveIndex: q.default.number,
  defaultActiveIndex: q.default.number,
  onActiveIndexChange: q.default.func,
  onSelectedItemsChange: q.default.func,
  keyNavigationNext: q.default.string,
  keyNavigationPrevious: q.default.string
}, By = {
  itemToKey: Eo.itemToKey,
  stateReducer: Eo.stateReducer,
  environment: Eo.environment,
  keyNavigationNext: "ArrowRight",
  keyNavigationPrevious: "ArrowLeft"
}, zy = Fe, Fi = 0, Hi = 1, Bi = 2, zi = 3, Wi = 4, ji = 5, Vi = 6, Ki = 7, $i = 8, Ui = 9, Gi = 10, Yi = 11, qi = 12, Wy = /* @__PURE__ */ Object.
freeze({
  __proto__: null,
  SelectedItemClick: Fi,
  SelectedItemKeyDownDelete: Hi,
  SelectedItemKeyDownBackspace: Bi,
  SelectedItemKeyDownNavigationNext: zi,
  SelectedItemKeyDownNavigationPrevious: Wi,
  DropdownKeyDownNavigationPrevious: ji,
  DropdownKeyDownBackspace: Vi,
  DropdownClick: Ki,
  FunctionAddSelectedItem: $i,
  FunctionRemoveSelectedItem: Ui,
  FunctionSetSelectedItems: Gi,
  FunctionSetActiveIndex: Yi,
  FunctionReset: qi
});
function jy(e, t) {
  var o = t.type, i = t.index, n = t.props, r = t.selectedItem, l = e.activeIndex, u = e.selectedItems, c;
  switch (o) {
    case Fi:
>>>>>>> main
      c = {
        activeIndex: i
      };
      break;
<<<<<<< HEAD
    case As:
=======
    case Wi:
>>>>>>> main
      c = {
        activeIndex: l - 1 < 0 ? 0 : l - 1
      };
      break;
<<<<<<< HEAD
    case Ps:
=======
    case zi:
>>>>>>> main
      c = {
        activeIndex: l + 1 >= u.length ? -1 : l + 1
      };
      break;
<<<<<<< HEAD
    case Os:
    case ks: {
      if (l < 0)
        break;
      var d = l;
      u.length === 1 ? d = -1 : l === u.length - 1 && (d = u.length - 2), c = j({
        selectedItems: [].concat(u.slice(0, l), u.slice(l + 1))
      }, {
        activeIndex: d
      });
      break;
    }
    case Ds:
=======
    case Bi:
    case Hi: {
      if (l < 0)
        break;
      var p = l;
      u.length === 1 ? p = -1 : l === u.length - 1 && (p = u.length - 2), c = G({
        selectedItems: [].concat(u.slice(0, l), u.slice(l + 1))
      }, {
        activeIndex: p
      });
      break;
    }
    case ji:
>>>>>>> main
      c = {
        activeIndex: u.length - 1
      };
      break;
<<<<<<< HEAD
    case Ms:
=======
    case Vi:
>>>>>>> main
      c = {
        selectedItems: u.slice(0, u.length - 1)
      };
      break;
<<<<<<< HEAD
    case Ns:
      c = {
        selectedItems: [].concat(u, [n])
      };
      break;
    case Ls:
=======
    case $i:
      c = {
        selectedItems: [].concat(u, [r])
      };
      break;
    case Ki:
>>>>>>> main
      c = {
        activeIndex: -1
      };
      break;
<<<<<<< HEAD
    case Fs: {
      var p = l, m = u.findIndex(function(f) {
        return r.itemToKey(f) === r.itemToKey(n);
      });
      if (m < 0)
        break;
      u.length === 1 ? p = -1 : m === u.length - 1 && (p = u.length - 2), c = {
        selectedItems: [].concat(u.slice(0, m), u.slice(m + 1)),
        activeIndex: p
      };
      break;
    }
    case Rs: {
=======
    case Ui: {
      var d = l, g = u.findIndex(function(f) {
        return n.itemToKey(f) === n.itemToKey(r);
      });
      if (g < 0)
        break;
      u.length === 1 ? d = -1 : g === u.length - 1 && (d = u.length - 2), c = {
        selectedItems: [].concat(u.slice(0, g), u.slice(g + 1)),
        activeIndex: d
      };
      break;
    }
    case Gi: {
>>>>>>> main
      var h = t.selectedItems;
      c = {
        selectedItems: h
      };
      break;
    }
<<<<<<< HEAD
    case Bs: {
      var b = t.activeIndex;
      c = {
        activeIndex: b
      };
      break;
    }
    case Hs:
      c = {
        activeIndex: Ap(r, "activeIndex"),
        selectedItems: Ap(r, "selectedItems")
=======
    case Yi: {
      var y = t.activeIndex;
      c = {
        activeIndex: y
      };
      break;
    }
    case qi:
      c = {
        activeIndex: rp(n, "activeIndex"),
        selectedItems: rp(n, "selectedItems")
>>>>>>> main
      };
      break;
    default:
      throw new Error("Reducer called without proper action type.");
  }
<<<<<<< HEAD
  return j({}, e, c);
}
a(bI, "downshiftMultipleSelectionReducer");
var vI = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], xI = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyActio\
n"];
Od.stateChangeTypes = yI;
function Od(e) {
  e === void 0 && (e = {}), gI(e, Od);
  var t = j({}, hI, e), o = t.getA11yStatusMessage, i = t.environment, r = t.keyNavigationNext, n = t.keyNavigationPrevious, l = td(bI, t, fI,
  mI), u = l[0], c = l[1], d = u.activeIndex, p = u.selectedItems, m = hn(), h = q(null), b = q();
  b.current = [];
  var f = mn({
    state: u,
    props: t
  });
  ts(o, u, [d, p], i), V(function() {
    m || (d === -1 && h.current ? h.current.focus() : b.current[d] && b.current[d].focus());
  }, [d]), os({
    props: t,
    state: u
  });
  var y = es("getDropdownProps"), S = U(function() {
    var T;
    return T = {}, T[n] = function() {
      c({
        type: As
      });
    }, T[r] = function() {
      c({
        type: Ps
      });
    }, T.Delete = /* @__PURE__ */ a(function() {
      c({
        type: ks
      });
    }, "Delete"), T.Backspace = /* @__PURE__ */ a(function() {
      c({
        type: Os
      });
    }, "Backspace"), T;
  }, [c, r, n]), E = U(function() {
    var T;
    return T = {}, T[n] = function(C) {
      Dp(C) && c({
        type: Ds
      });
    }, T.Backspace = /* @__PURE__ */ a(function(P) {
      Dp(P) && c({
        type: Ms
      });
    }, "Backspace"), T;
  }, [c, n]), g = A(function(T) {
    var C, P = T === void 0 ? {} : T, D = P.refKey, M = D === void 0 ? "ref" : D, F = P.ref, Z = P.onClick, W = P.onKeyDown, Q = P.selectedItem,
    H = P.index, G = ke(P, vI), z = f.current.state, re = Zi(Q, H, z.selectedItems, "Pass either item or index to getSelectedItemProps!"), R = re[1],
    B = R > -1 && R === z.activeIndex, L = /* @__PURE__ */ a(function() {
      c({
        type: _s,
        index: R
      });
    }, "selectedItemHandleClick"), $ = /* @__PURE__ */ a(function(ie) {
      var te = po(ie);
      te && S[te] && S[te](ie);
    }, "selectedItemHandleKeyDown");
    return j((C = {}, C[M] = Ze(F, function(J) {
      J && b.current.push(J);
    }), C.tabIndex = B ? 0 : -1, C.onClick = le(Z, L), C.onKeyDown = le(W, $), C), G);
  }, [c, f, S]), v = A(function(T, C) {
    var P, D = T === void 0 ? {} : T, M = D.refKey, F = M === void 0 ? "ref" : M, Z = D.ref, W = D.onKeyDown, Q = D.onClick, H = D.preventKeyAction,
    G = H === void 0 ? !1 : H, z = ke(D, xI), re = C === void 0 ? {} : C, R = re.suppressRefError, B = R === void 0 ? !1 : R;
    y("getDropdownProps", B, F, h);
    var L = /* @__PURE__ */ a(function(ie) {
      var te = po(ie);
      te && E[te] && E[te](ie);
    }, "dropdownHandleKeyDown"), $ = /* @__PURE__ */ a(function() {
      c({
        type: Ls
      });
    }, "dropdownHandleClick");
    return j((P = {}, P[F] = Ze(Z, function(J) {
      J && (h.current = J);
    }), P), !G && {
      onKeyDown: le(W, L),
      onClick: le(Q, $)
    }, z);
  }, [c, E, y]), I = A(function(T) {
    c({
      type: Ns,
      selectedItem: T
    });
  }, [c]), w = A(function(T) {
    c({
      type: Fs,
      selectedItem: T
    });
  }, [c]), O = A(function(T) {
    c({
      type: Rs,
      selectedItems: T
    });
  }, [c]), _ = A(function(T) {
    c({
      type: Bs,
      activeIndex: T
    });
  }, [c]), k = A(function() {
    c({
      type: Hs
    });
  }, [c]);
  return {
    getSelectedItemProps: g,
    getDropdownProps: v,
    addSelectedItem: I,
    removeSelectedItem: w,
    setSelectedItems: O,
    setActiveIndex: _,
    reset: k,
    selectedItems: p,
    activeIndex: d
  };
}
a(Od, "useMultipleSelection");

// src/manager/components/sidebar/Search.tsx
var Ad = Ve(Pd(), 1);

// src/manager/components/sidebar/types.ts
function Ko(e) {
  return !!(e && e.showAll);
}
a(Ko, "isExpandType");
function Ws(e) {
  return !!(e && e.item);
}
a(Ws, "isSearchResult");

// src/manager/components/sidebar/Search.tsx
var { document: II } = se, Vs = 50, SI = {
=======
  return G({}, e, c);
}
a(jy, "downshiftMultipleSelectionReducer");
var Vy = ["refKey", "ref", "onClick", "onKeyDown", "selectedItem", "index"], Ky = ["refKey", "ref", "onKeyDown", "onClick", "preventKeyActio\
n"];
td.stateChangeTypes = Wy;
function td(e) {
  e === void 0 && (e = {}), zy(e, td);
  var t = G({}, By, e), o = t.getA11yStatusMessage, i = t.environment, n = t.keyNavigationNext, r = t.keyNavigationPrevious, l = Cp(jy, t, Fy,
  Hy), u = l[0], c = l[1], p = u.activeIndex, d = u.selectedItems, g = Qr(), h = Y(null), y = Y();
  y.current = [];
  var f = qr({
    state: u,
    props: t
  });
  pi(o, u, [p, d], i), j(function() {
    g || (p === -1 && h.current ? h.current.focus() : y.current[p] && y.current[p].focus());
  }, [p]), di({
    props: t,
    state: u
  });
  var b = ci("getDropdownProps"), I = K(function() {
    var w;
    return w = {}, w[r] = function() {
      c({
        type: Wi
      });
    }, w[n] = function() {
      c({
        type: zi
      });
    }, w.Delete = /* @__PURE__ */ a(function() {
      c({
        type: Hi
      });
    }, "Delete"), w.Backspace = /* @__PURE__ */ a(function() {
      c({
        type: Bi
      });
    }, "Backspace"), w;
  }, [c, n, r]), _ = K(function() {
    var w;
    return w = {}, w[r] = function(O) {
      np(O) && c({
        type: ji
      });
    }, w.Backspace = /* @__PURE__ */ a(function(P) {
      np(P) && c({
        type: Vi
      });
    }, "Backspace"), w;
  }, [c, r]), m = A(function(w) {
    var O, P = w === void 0 ? {} : w, D = P.refKey, M = D === void 0 ? "ref" : D, N = P.ref, Q = P.onClick, V = P.onKeyDown, X = P.selectedItem,
    H = P.index, U = ke(P, Vy), z = f.current.state, re = li(X, H, z.selectedItems, "Pass either item or index to getSelectedItemProps!"), R = re[1],
    F = R > -1 && R === z.activeIndex, L = /* @__PURE__ */ a(function() {
      c({
        type: Fi,
        index: R
      });
    }, "selectedItemHandleClick"), W = /* @__PURE__ */ a(function(ie) {
      var ee = to(ie);
      ee && I[ee] && I[ee](ie);
    }, "selectedItemHandleKeyDown");
    return G((O = {}, O[M] = Je(N, function(J) {
      J && y.current.push(J);
    }), O.tabIndex = F ? 0 : -1, O.onClick = le(Q, L), O.onKeyDown = le(V, W), O), U);
  }, [c, f, I]), v = A(function(w, O) {
    var P, D = w === void 0 ? {} : w, M = D.refKey, N = M === void 0 ? "ref" : M, Q = D.ref, V = D.onKeyDown, X = D.onClick, H = D.preventKeyAction,
    U = H === void 0 ? !1 : H, z = ke(D, Ky), re = O === void 0 ? {} : O, R = re.suppressRefError, F = R === void 0 ? !1 : R;
    b("getDropdownProps", F, N, h);
    var L = /* @__PURE__ */ a(function(ie) {
      var ee = to(ie);
      ee && _[ee] && _[ee](ie);
    }, "dropdownHandleKeyDown"), W = /* @__PURE__ */ a(function() {
      c({
        type: Ki
      });
    }, "dropdownHandleClick");
    return G((P = {}, P[N] = Je(Q, function(J) {
      J && (h.current = J);
    }), P), !U && {
      onKeyDown: le(V, L),
      onClick: le(X, W)
    }, z);
  }, [c, _, b]), S = A(function(w) {
    c({
      type: $i,
      selectedItem: w
    });
  }, [c]), E = A(function(w) {
    c({
      type: Ui,
      selectedItem: w
    });
  }, [c]), T = A(function(w) {
    c({
      type: Gi,
      selectedItems: w
    });
  }, [c]), C = A(function(w) {
    c({
      type: Yi,
      activeIndex: w
    });
  }, [c]), k = A(function() {
    c({
      type: qi
    });
  }, [c]);
  return {
    getSelectedItemProps: m,
    getDropdownProps: v,
    addSelectedItem: S,
    removeSelectedItem: E,
    setSelectedItems: T,
    setActiveIndex: C,
    reset: k,
    selectedItems: d,
    activeIndex: p
  };
}
a(td, "useMultipleSelection");

// src/manager/components/sidebar/Search.tsx
var rd = ze(od(), 1);

// src/manager/components/sidebar/types.ts
function To(e) {
  return !!(e && e.showAll);
}
a(To, "isExpandType");
function Xi(e) {
  return !!(e && e.item);
}
a(Xi, "isSearchResult");

// src/manager/components/sidebar/Search.tsx
var { document: $y } = se, Zi = 50, Uy = {
>>>>>>> main
  shouldSort: !0,
  tokenize: !0,
  findAllMatches: !0,
  includeScore: !0,
  includeMatches: !0,
  threshold: 0.2,
  location: 0,
  distance: 100,
  maxPatternLength: 32,
  minMatchCharLength: 1,
  keys: [
    { name: "name", weight: 0.7 },
    { name: "path", weight: 0.3 }
  ]
<<<<<<< HEAD
}, wI = x.div({
  display: "flex",
  flexDirection: "row",
  columnGap: 6
}), EI = x.label({
=======
}, Gy = x.div({
  display: "flex",
  flexDirection: "row",
  columnGap: 6
}), Yy = x.label({
>>>>>>> main
  position: "absolute",
  left: -1e4,
  top: "auto",
  width: 1,
  height: 1,
  overflow: "hidden"
<<<<<<< HEAD
}), TI = x.div(({ theme: e, isMobile: t }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: t ? 4 : 2,
  flexGrow: 1,
  height: t ? 36 : 32,
=======
}), qy = x.div(({ theme: e }) => ({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  padding: 2,
  flexGrow: 1,
  height: 32,
>>>>>>> main
  width: "100%",
  boxShadow: `${e.button.border} 0 0 0 1px inset`,
  borderRadius: e.appBorderRadius + 2,
  "&:has(input:focus), &:has(input:active)": {
    boxShadow: `${e.color.secondary} 0 0 0 1px inset`,
    background: e.background.app
  }
<<<<<<< HEAD
})), CI = x.div(({ theme: e, onClick: t }) => ({
=======
})), Qy = x.div(({ theme: e, onClick: t }) => ({
>>>>>>> main
  cursor: t ? "pointer" : "default",
  flex: "0 0 28px",
  height: "100%",
  pointerEvents: t ? "auto" : "none",
  color: e.textMutedColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center"
<<<<<<< HEAD
})), _I = x.input(({ theme: e, isMobile: t }) => ({
=======
})), Xy = x.input(({ theme: e }) => ({
>>>>>>> main
  appearance: "none",
  height: 28,
  width: "100%",
  padding: 0,
  border: 0,
  background: "transparent",
<<<<<<< HEAD
  fontSize: t ? "16px" : `${e.typography.size.s1 + 1}px`,
=======
  fontSize: `${e.typography.size.s1 + 1}px`,
>>>>>>> main
  fontFamily: "inherit",
  transition: "all 150ms",
  color: e.color.defaultText,
  outline: 0,
  "&::placeholder": {
    color: e.textMutedColor,
    opacity: 1
  },
  "&:valid ~ code, &:focus ~ code": {
    display: "none"
  },
  "&:invalid ~ svg": {
    display: "none"
  },
  "&:valid ~ svg": {
    display: "block"
  },
  "&::-ms-clear": {
    display: "none"
  },
  "&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration": {
    display: "none"
  }
<<<<<<< HEAD
})), kI = x.code(({ theme: e }) => ({
=======
})), Zy = x.code(({ theme: e }) => ({
>>>>>>> main
  margin: 5,
  marginTop: 6,
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  userSelect: "none",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  gap: 4,
  flexShrink: 0
<<<<<<< HEAD
})), OI = x.span({
  fontSize: "14px"
}), PI = x.div({
  display: "flex",
  alignItems: "center",
  gap: 2
}), AI = x.div({ outline: 0 }), Dd = s.memo(/* @__PURE__ */ a(function({
  children: t,
  dataset: o,
  enableShortcuts: i = !0,
  getLastViewed: r,
  initialQuery: n = "",
  searchBarContent: l,
  searchFieldContent: u
}) {
  let c = oe(), d = q(null), [p, m] = K("Find components"), [h, b] = K(!1), f = c ? Ye(c.getShortcutKeys().search) : "/", y = A(() => {
    let w = o.entries.reduce((O, [_, { index: k, allStatuses: T }]) => {
      let C = Br(k || {}, T ?? {});
      return k && O.push(
        ...Object.values(k).map((P) => {
          let D = T?.[P.id], M = D ? Ho(Object.values(D).map((F) => F.value)) : null;
          return {
            ...Wi(P, o.hash[_]),
            status: M ?? C[P.id] ?? null
          };
        })
      ), O;
    }, []);
    return new Ad.default(w, SI);
  }, [o]), S = A(
    (w) => {
      let O = y();
      if (!w)
        return [];
      let _ = [], k = /* @__PURE__ */ new Set(), T = O.search(w).filter(({ item: C }) => !(C.type === "component" || C.type === "docs" || C.
      type === "story") || // @ts-expect-error (non strict)
      k.has(C.parent) ? !1 : (k.add(C.id), !0));
      return T.length && (_ = T.slice(0, h ? 1e3 : Vs), T.length > Vs && !h && _.push({
        showAll: /* @__PURE__ */ a(() => b(!0), "showAll"),
        totalCount: T.length,
        moreCount: T.length - Vs
      })), _;
    },
    [h, y]
  ), E = A(
    (w) => {
      if (Ws(w)) {
        let { id: O, refId: _ } = w.item;
        c?.selectStory(O, void 0, { ref: _ !== at && _ }), d.current.blur(), b(!1);
        return;
      }
      Ko(w) && w.showAll();
    },
    [c]
  ), g = A((w, O) => {
    b(!1);
  }, []), v = A(
    (w, O) => {
      switch (O.type) {
        case qt.stateChangeTypes.blurInput:
          return {
            ...O,
            // Prevent clearing the input on blur
            inputValue: w.inputValue,
            // Return to the tree view after selecting an item
            isOpen: w.inputValue && !w.selectedItem
          };
        case qt.stateChangeTypes.mouseUp:
          return w;
        case qt.stateChangeTypes.keyDownEscape:
          return w.inputValue ? { ...O, inputValue: "", isOpen: !0, selectedItem: null } : { ...O, isOpen: !1, selectedItem: null };
        case qt.stateChangeTypes.clickItem:
        case qt.stateChangeTypes.keyDownEnter:
          return Ws(O.selectedItem) ? { ...O, inputValue: w.inputValue } : Ko(O.selectedItem) ? w : O;
        default:
          return O;
      }
    },
    []
  ), { isMobile: I } = ge();
  return (
    // @ts-expect-error (non strict)
    /* @__PURE__ */ s.createElement(
      qt,
      {
        initialInputValue: n,
        stateReducer: v,
        itemToString: (w) => w?.item?.name || "",
        scrollIntoView: (w) => zt(w),
        onSelect: E,
        onInputValueChange: g
      },
      ({
        isOpen: w,
        openMenu: O,
        closeMenu: _,
        inputValue: k,
        clearSelection: T,
        getInputProps: C,
        getItemProps: P,
        getLabelProps: D,
        getMenuProps: M,
        getRootProps: F,
        highlightedIndex: Z
      }) => {
        let W = k ? k.trim() : "", Q = W ? S(W) : [], H = !W && r();
        H && H.length && (Q = H.reduce((R, { storyId: B, refId: L }) => {
          let $ = o.hash[L];
          if ($ && $.index && $.index[B]) {
            let J = $.index[B], ie = J.type === "story" ? $.index[J.parent] : J;
            R.some((te) => te.item.refId === L && te.item.id === ie.id) || R.push({ item: Wi(ie, o.hash[L]), matches: [], score: 0 });
          }
          return R;
        }, []));
        let G = "storybook-explorer-searchfield", z = C({
          id: G,
          ref: d,
          required: !0,
          type: "search",
          placeholder: p,
          onFocus: /* @__PURE__ */ a(() => {
            O(), m("Type to find...");
          }, "onFocus"),
          onBlur: /* @__PURE__ */ a(() => m("Find components"), "onBlur"),
          onKeyDown: /* @__PURE__ */ a((R) => {
            R.key === "Escape" && k.length === 0 && d.current.blur();
          }, "onKeyDown")
        }), re = D({
          htmlFor: G
        });
        return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(EI, { ...re }, "Search for components"), /* @__PURE__ */ s.
        createElement(wI, null, /* @__PURE__ */ s.createElement(
          TI,
          {
            ...F({ refKey: "" }, { suppressRefError: !0 }),
            isMobile: I,
            className: "search-field"
          },
          /* @__PURE__ */ s.createElement(CI, null, /* @__PURE__ */ s.createElement(So, null)),
          /* @__PURE__ */ s.createElement(_I, { ...z, isMobile: I }),
          !I && i && !w && /* @__PURE__ */ s.createElement(kI, null, f === "\u2318 K" ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.
          createElement(OI, null, "\u2318"), "K") : f),
          /* @__PURE__ */ s.createElement(PI, null, w && /* @__PURE__ */ s.createElement(ee, { onClick: () => T() }, /* @__PURE__ */ s.createElement(
          je, null)), u)
        ), l), /* @__PURE__ */ s.createElement(AI, { tabIndex: 0, id: "storybook-explorer-menu" }, t({
          query: W,
          results: Q,
          isBrowsing: !w && II.activeElement !== d.current,
          closeMenu: _,
          getMenuProps: M,
          getItemProps: P,
          highlightedIndex: Z
=======
})), Jy = x.span({
  fontSize: "14px"
}), eb = x.div({
  display: "flex",
  alignItems: "center",
  gap: 2
}), tb = x.div({ outline: 0 }), nd = s.memo(/* @__PURE__ */ a(function({
  children: t,
  dataset: o,
  enableShortcuts: i = !0,
  getLastViewed: n,
  initialQuery: r = "",
  searchBarContent: l,
  searchFieldContent: u
}) {
  let c = oe(), p = Y(null), [d, g] = $("Find components"), [h, y] = $(!1), f = c ? qe(c.getShortcutKeys().search) : "/", b = A(() => {
    let E = o.entries.reduce((T, [C, { index: k, status: w }]) => {
      let O = Ir(k || {}, w);
      return k && T.push(
        ...Object.values(k).map((P) => {
          let D = w && w[P.id] ? So(Object.values(w[P.id] || {}).map((M) => M.status)) : null;
          return {
            ...Zn(P, o.hash[C]),
            status: D || O[P.id] || null
          };
        })
      ), T;
    }, []);
    return new rd.default(E, Uy);
  }, [o]), I = A(
    (E) => {
      let T = b();
      if (!E)
        return [];
      let C = [], k = /* @__PURE__ */ new Set(), w = T.search(E).filter(({ item: O }) => !(O.type === "component" || O.type === "docs" || O.
      type === "story") || // @ts-expect-error (non strict)
      k.has(O.parent) ? !1 : (k.add(O.id), !0));
      return w.length && (C = w.slice(0, h ? 1e3 : Zi), w.length > Zi && !h && C.push({
        showAll: /* @__PURE__ */ a(() => y(!0), "showAll"),
        totalCount: w.length,
        moreCount: w.length - Zi
      })), C;
    },
    [h, b]
  ), _ = A(
    (E) => {
      if (Xi(E)) {
        let { id: T, refId: C } = E.item;
        c?.selectStory(T, void 0, { ref: C !== st && C }), p.current.blur(), y(!1);
        return;
      }
      To(E) && E.showAll();
    },
    [c]
  ), m = A((E, T) => {
    y(!1);
  }, []), v = A(
    (E, T) => {
      switch (T.type) {
        case zt.stateChangeTypes.blurInput:
          return {
            ...T,
            // Prevent clearing the input on blur
            inputValue: E.inputValue,
            // Return to the tree view after selecting an item
            isOpen: E.inputValue && !E.selectedItem
          };
        case zt.stateChangeTypes.mouseUp:
          return E;
        case zt.stateChangeTypes.keyDownEscape:
          return E.inputValue ? { ...T, inputValue: "", isOpen: !0, selectedItem: null } : { ...T, isOpen: !1, selectedItem: null };
        case zt.stateChangeTypes.clickItem:
        case zt.stateChangeTypes.keyDownEnter:
          return Xi(T.selectedItem) ? { ...T, inputValue: E.inputValue } : To(T.selectedItem) ? E : T;
        default:
          return T;
      }
    },
    []
  ), { isMobile: S } = ge();
  return (
    // @ts-expect-error (non strict)
    /* @__PURE__ */ s.createElement(
      zt,
      {
        initialInputValue: r,
        stateReducer: v,
        itemToString: (E) => E?.item?.name || "",
        scrollIntoView: (E) => Dt(E),
        onSelect: _,
        onInputValueChange: m
      },
      ({
        isOpen: E,
        openMenu: T,
        closeMenu: C,
        inputValue: k,
        clearSelection: w,
        getInputProps: O,
        getItemProps: P,
        getLabelProps: D,
        getMenuProps: M,
        getRootProps: N,
        highlightedIndex: Q
      }) => {
        let V = k ? k.trim() : "", X = V ? I(V) : [], H = !V && n();
        H && H.length && (X = H.reduce((R, { storyId: F, refId: L }) => {
          let W = o.hash[L];
          if (W && W.index && W.index[F]) {
            let J = W.index[F], ie = J.type === "story" ? W.index[J.parent] : J;
            R.some((ee) => ee.item.refId === L && ee.item.id === ie.id) || R.push({ item: Zn(ie, o.hash[L]), matches: [], score: 0 });
          }
          return R;
        }, []));
        let U = "storybook-explorer-searchfield", z = O({
          id: U,
          ref: p,
          required: !0,
          type: "search",
          placeholder: d,
          onFocus: /* @__PURE__ */ a(() => {
            T(), g("Type to find...");
          }, "onFocus"),
          onBlur: /* @__PURE__ */ a(() => g("Find components"), "onBlur"),
          onKeyDown: /* @__PURE__ */ a((R) => {
            R.key === "Escape" && k.length === 0 && p.current.blur();
          }, "onKeyDown")
        }), re = D({
          htmlFor: U
        });
        return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Yy, { ...re }, "Search for components"), /* @__PURE__ */ s.
        createElement(Gy, null, /* @__PURE__ */ s.createElement(
          qy,
          {
            ...N({ refKey: "" }, { suppressRefError: !0 }),
            className: "search-field"
          },
          /* @__PURE__ */ s.createElement(Qy, null, /* @__PURE__ */ s.createElement(No, null)),
          /* @__PURE__ */ s.createElement(Xy, { ...z }),
          !S && i && !E && /* @__PURE__ */ s.createElement(Zy, null, f === "\u2318 K" ? /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.
          createElement(Jy, null, "\u2318"), "K") : f),
          /* @__PURE__ */ s.createElement(eb, null, E && /* @__PURE__ */ s.createElement(te, { onClick: () => w() }, /* @__PURE__ */ s.createElement(
          Ge, null)), u)
        ), l), /* @__PURE__ */ s.createElement(tb, { tabIndex: 0, id: "storybook-explorer-menu" }, t({
          query: V,
          results: X,
          isBrowsing: !E && $y.activeElement !== p.current,
          closeMenu: C,
          getMenuProps: M,
          getItemProps: P,
          highlightedIndex: Q
>>>>>>> main
        })));
      }
    )
  );
}, "Search"));

// src/manager/components/sidebar/SearchResults.tsx
<<<<<<< HEAD
var { document: Md } = se, DI = x.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
}), MI = x.li(({ theme: e, isHighlighted: t }) => ({
=======
var { document: id } = se, ob = x.ol({
  listStyle: "none",
  margin: 0,
  padding: 0
}), rb = x.li(({ theme: e, isHighlighted: t }) => ({
>>>>>>> main
  width: "100%",
  border: "none",
  cursor: "pointer",
  display: "flex",
  alignItems: "start",
  justifyContent: "space-between",
  textAlign: "left",
  color: "inherit",
  fontSize: `${e.typography.size.s2}px`,
  background: t ? e.background.hoverable : "transparent",
  minHeight: 28,
  borderRadius: 4,
  gap: 6,
  paddingTop: 7,
  paddingBottom: 7,
  paddingLeft: 8,
  paddingRight: 8,
  "&:hover, &:focus": {
<<<<<<< HEAD
    background: Te(0.93, e.color.secondary),
    outline: "none"
  }
})), LI = x.div({
  marginTop: 2
}), NI = x.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
}), FI = x.div(({ theme: e }) => ({
=======
    background: we(0.93, e.color.secondary),
    outline: "none"
  }
})), nb = x.div({
  marginTop: 2
}), ib = x.div({
  flex: 1,
  display: "flex",
  flexDirection: "column"
}), sb = x.div(({ theme: e }) => ({
>>>>>>> main
  marginTop: 20,
  textAlign: "center",
  fontSize: `${e.typography.size.s2}px`,
  lineHeight: "18px",
  color: e.color.defaultText,
  small: {
    color: e.textMutedColor,
    fontSize: `${e.typography.size.s1}px`
  }
<<<<<<< HEAD
})), RI = x.mark(({ theme: e }) => ({
  background: "transparent",
  color: e.color.secondary
})), BI = x.div({
  marginTop: 8
}), HI = x.div(({ theme: e }) => ({
=======
})), ab = x.mark(({ theme: e }) => ({
  background: "transparent",
  color: e.color.secondary
})), lb = x.div({
  marginTop: 8
}), ub = x.div(({ theme: e }) => ({
>>>>>>> main
  display: "flex",
  justifyContent: "space-between",
  fontSize: `${e.typography.size.s1 - 1}px`,
  fontWeight: e.typography.weight.bold,
  minHeight: 28,
  letterSpacing: "0.16em",
  textTransform: "uppercase",
  color: e.textMutedColor,
  marginTop: 16,
  marginBottom: 4,
  alignItems: "center",
  ".search-result-recentlyOpened-clear": {
    visibility: "hidden"
  },
  "&:hover": {
    ".search-result-recentlyOpened-clear": {
      visibility: "visible"
    }
  }
<<<<<<< HEAD
})), Ld = s.memo(/* @__PURE__ */ a(function({
=======
})), sd = s.memo(/* @__PURE__ */ a(function({
>>>>>>> main
  children: t,
  match: o
}) {
  if (!o)
    return t;
<<<<<<< HEAD
  let { value: i, indices: r } = o, { nodes: n } = r.reduce(
    ({ cursor: l, nodes: u }, [c, d], p, { length: m }) => (u.push(/* @__PURE__ */ s.createElement("span", { key: `${p}-1` }, i.slice(l, c))),
    u.push(/* @__PURE__ */ s.createElement(RI, { key: `${p}-2` }, i.slice(c, d + 1))), p === m - 1 && u.push(/* @__PURE__ */ s.createElement(
    "span", { key: `${p}-3` }, i.slice(d + 1))), { cursor: d + 1, nodes: u }),
    { cursor: 0, nodes: [] }
  );
  return /* @__PURE__ */ s.createElement("span", null, n);
}, "Highlight")), zI = x.div(({ theme: e }) => ({
=======
  let { value: i, indices: n } = o, { nodes: r } = n.reduce(
    ({ cursor: l, nodes: u }, [c, p], d, { length: g }) => (u.push(/* @__PURE__ */ s.createElement("span", { key: `${d}-1` }, i.slice(l, c))),
    u.push(/* @__PURE__ */ s.createElement(ab, { key: `${d}-2` }, i.slice(c, p + 1))), d === g - 1 && u.push(/* @__PURE__ */ s.createElement(
    "span", { key: `${d}-3` }, i.slice(p + 1))), { cursor: p + 1, nodes: u }),
    { cursor: 0, nodes: [] }
  );
  return /* @__PURE__ */ s.createElement("span", null, r);
}, "Highlight")), cb = x.div(({ theme: e }) => ({
>>>>>>> main
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  }
<<<<<<< HEAD
})), WI = x.div(({ theme: e }) => ({
=======
})), pb = x.div(({ theme: e }) => ({
>>>>>>> main
  display: "grid",
  justifyContent: "start",
  gridAutoColumns: "auto",
  gridAutoFlow: "column",
  fontSize: `${e.typography.size.s1 - 1}px`,
  "& > span": {
    display: "block",
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis"
  },
  "& > span + span": {
    "&:before": {
      content: "' / '"
    }
  }
<<<<<<< HEAD
})), VI = s.memo(/* @__PURE__ */ a(function({ item: t, matches: o, onClick: i, ...r }) {
  let n = A(
    (p) => {
      p.preventDefault(), i?.(p);
    },
    [i]
  ), l = oe();
  V(() => {
    l && r.isHighlighted && t.type === "component" && l.emit(Ct, { ids: [t.children[0]] }, { options: { target: t.refId } });
  }, [r.isHighlighted, t]);
  let u = o.find((p) => p.key === "name"), c = o.filter((p) => p.key === "path"), [d] = t.status ? Bo[t.status] : [];
  return /* @__PURE__ */ s.createElement(MI, { ...r, onClick: n }, /* @__PURE__ */ s.createElement(LI, null, t.type === "component" && /* @__PURE__ */ s.
  createElement(It, { viewBox: "0 0 14 14", width: "14", height: "14", type: "component" }, /* @__PURE__ */ s.createElement(Me, { type: "com\
ponent" })), t.type === "story" && /* @__PURE__ */ s.createElement(It, { viewBox: "0 0 14 14", width: "14", height: "14", type: "story" }, /* @__PURE__ */ s.
  createElement(Me, { type: "story" })), !(t.type === "component" || t.type === "story") && /* @__PURE__ */ s.createElement(It, { viewBox: "\
0 0 14 14", width: "14", height: "14", type: "document" }, /* @__PURE__ */ s.createElement(Me, { type: "document" }))), /* @__PURE__ */ s.createElement(
  NI, { className: "search-result-item--label" }, /* @__PURE__ */ s.createElement(zI, null, /* @__PURE__ */ s.createElement(Ld, { match: u },
  t.name)), /* @__PURE__ */ s.createElement(WI, null, t.path.map((p, m) => /* @__PURE__ */ s.createElement("span", { key: m }, /* @__PURE__ */ s.
  createElement(Ld, { match: c.find((h) => h.arrayIndex === m) }, p))))), t.status ? /* @__PURE__ */ s.createElement(Gc, { status: t.status },
  d) : null);
}, "Result")), Nd = s.memo(/* @__PURE__ */ a(function({
  query: t,
  results: o,
  closeMenu: i,
  getMenuProps: r,
  getItemProps: n,
  highlightedIndex: l,
  isLoading: u = !1,
  enableShortcuts: c = !0,
  clearLastViewed: d
}) {
  let p = oe();
  V(() => {
    let b = /* @__PURE__ */ a((f) => {
      if (!(!c || u || f.repeat) && St(!1, f) && $e("Escape", f)) {
=======
})), db = s.memo(/* @__PURE__ */ a(function({ item: t, matches: o, onClick: i, ...n }) {
  let r = A(
    (d) => {
      d.preventDefault(), i?.(d);
    },
    [i]
  ), l = oe();
  j(() => {
    l && n.isHighlighted && t.type === "component" && l.emit(St, { ids: [t.children[0]] }, { options: { target: t.refId } });
  }, [n.isHighlighted, t]);
  let u = o.find((d) => d.key === "name"), c = o.filter((d) => d.key === "path"), [p] = t.status ? xo[t.status] : [];
  return /* @__PURE__ */ s.createElement(rb, { ...n, onClick: r }, /* @__PURE__ */ s.createElement(nb, null, t.type === "component" && /* @__PURE__ */ s.
  createElement(bt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "component" }, /* @__PURE__ */ s.createElement(Ne, { type: "com\
ponent" })), t.type === "story" && /* @__PURE__ */ s.createElement(bt, { viewBox: "0 0 14 14", width: "14", height: "14", type: "story" }, /* @__PURE__ */ s.
  createElement(Ne, { type: "story" })), !(t.type === "component" || t.type === "story") && /* @__PURE__ */ s.createElement(bt, { viewBox: "\
0 0 14 14", width: "14", height: "14", type: "document" }, /* @__PURE__ */ s.createElement(Ne, { type: "document" }))), /* @__PURE__ */ s.createElement(
  ib, { className: "search-result-item--label" }, /* @__PURE__ */ s.createElement(cb, null, /* @__PURE__ */ s.createElement(sd, { match: u },
  t.name)), /* @__PURE__ */ s.createElement(pb, null, t.path.map((d, g) => /* @__PURE__ */ s.createElement("span", { key: g }, /* @__PURE__ */ s.
  createElement(sd, { match: c.find((h) => h.arrayIndex === g) }, d))))), t.status ? /* @__PURE__ */ s.createElement(bc, { status: t.status },
  p) : null);
}, "Result")), ad = s.memo(/* @__PURE__ */ a(function({
  query: t,
  results: o,
  closeMenu: i,
  getMenuProps: n,
  getItemProps: r,
  highlightedIndex: l,
  isLoading: u = !1,
  enableShortcuts: c = !0,
  clearLastViewed: p
}) {
  let d = oe();
  j(() => {
    let y = /* @__PURE__ */ a((f) => {
      if (!(!c || u || f.repeat) && vt(!1, f) && Ve("Escape", f)) {
>>>>>>> main
        if (f.target?.id === "storybook-explorer-searchfield")
          return;
        f.preventDefault(), i();
      }
    }, "handleEscape");
<<<<<<< HEAD
    return Md.addEventListener("keydown", b), () => Md.removeEventListener("keydown", b);
  }, [i, c, u]);
  let m = A((b) => {
    if (!p)
      return;
    let f = b.currentTarget, y = f.getAttribute("data-id"), S = f.getAttribute("data-refid"), E = p.resolveStory(y, S === "storybook_interna\
l" ? void 0 : S);
    E?.type === "component" && p.emit(Ct, {
      // @ts-expect-error (TODO)
      ids: [E.isLeaf ? E.id : E.children[0]],
      options: { target: S }
    });
  }, []), h = /* @__PURE__ */ a(() => {
    d(), i();
  }, "handleClearLastViewed");
  return /* @__PURE__ */ s.createElement(DI, { ...r(), key: "results-list" }, o.length > 0 && !t && /* @__PURE__ */ s.createElement(HI, { className: "\
search-result-recentlyOpened" }, "Recently opened", /* @__PURE__ */ s.createElement(
    ee,
=======
    return id.addEventListener("keydown", y), () => id.removeEventListener("keydown", y);
  }, [i, c, u]);
  let g = A((y) => {
    if (!d)
      return;
    let f = y.currentTarget, b = f.getAttribute("data-id"), I = f.getAttribute("data-refid"), _ = d.resolveStory(b, I === "storybook_interna\
l" ? void 0 : I);
    _?.type === "component" && d.emit(St, {
      // @ts-expect-error (TODO)
      ids: [_.isLeaf ? _.id : _.children[0]],
      options: { target: I }
    });
  }, []), h = /* @__PURE__ */ a(() => {
    p(), i();
  }, "handleClearLastViewed");
  return /* @__PURE__ */ s.createElement(ob, { ...n() }, o.length > 0 && !t && /* @__PURE__ */ s.createElement(ub, { className: "search-resu\
lt-recentlyOpened" }, "Recently opened", /* @__PURE__ */ s.createElement(
    te,
>>>>>>> main
    {
      className: "search-result-recentlyOpened-clear",
      onClick: h
    },
<<<<<<< HEAD
    /* @__PURE__ */ s.createElement(qn, null)
  )), o.length === 0 && t && /* @__PURE__ */ s.createElement("li", null, /* @__PURE__ */ s.createElement(FI, null, /* @__PURE__ */ s.createElement(
  "strong", null, "No components found"), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement("small", null, "Find \
components by name or path."))), o.map((b, f) => {
    if (Ko(b)) {
      let E = { ...o, ...n({ key: f, index: f, item: b }) }, { key: g, ...v } = E;
      return /* @__PURE__ */ s.createElement(BI, { key: "search-result-expand" }, /* @__PURE__ */ s.createElement(he, { key: g, ...v, size: "\
small" }, "Show ", b.moreCount, " more results"));
    }
    let { item: y } = b, S = `${y.refId}::${y.id}`;
    return /* @__PURE__ */ s.createElement(
      VI,
      {
        ...b,
        ...n({ key: S, index: f, item: b }),
        isHighlighted: l === f,
        key: S,
        "data-id": b.item.id,
        "data-refid": b.item.refId,
        onMouseOver: m,
=======
    /* @__PURE__ */ s.createElement(Ws, null)
  )), o.length === 0 && t && /* @__PURE__ */ s.createElement("li", null, /* @__PURE__ */ s.createElement(sb, null, /* @__PURE__ */ s.createElement(
  "strong", null, "No components found"), /* @__PURE__ */ s.createElement("br", null), /* @__PURE__ */ s.createElement("small", null, "Find \
components by name or path."))), o.map((y, f) => {
    if (To(y))
      return /* @__PURE__ */ s.createElement(lb, { key: "search-result-expand" }, /* @__PURE__ */ s.createElement(
        me,
        {
          ...y,
          ...r({ key: f, index: f, item: y }),
          size: "small"
        },
        "Show ",
        y.moreCount,
        " more results"
      ));
    let { item: b } = y, I = `${b.refId}::${b.id}`;
    return /* @__PURE__ */ s.createElement(
      db,
      {
        key: b.id,
        ...y,
        ...r({ key: I, index: f, item: y }),
        isHighlighted: l === f,
        "data-id": y.item.id,
        "data-refid": y.item.refId,
        onMouseOver: g,
>>>>>>> main
        className: "search-result-item"
      }
    );
  }));
}, "SearchResults"));

<<<<<<< HEAD
// src/manager/components/sidebar/TestingModule.tsx
var js = 500, jI = Pt({
=======
// src/manager/components/sidebar/LegacyRender.tsx
var fb = x.div({
  display: "flex",
  justifyContent: "space-between",
  padding: "8px 2px"
}), mb = x.div({
  display: "flex",
  flexDirection: "column",
  marginLeft: 6
}), hb = x.div({
  display: "flex",
  gap: 6
}), gb = x.div(({ crashed: e, theme: t }) => ({
  fontSize: t.typography.size.s1,
  fontWeight: e ? "bold" : "normal",
  color: e ? t.color.negativeText : t.color.defaultText
})), yb = x.div(({ theme: e }) => ({
  fontSize: e.typography.size.s1,
  color: e.textMutedColor
})), bb = x($a)({
  margin: 2
}), vb = x(Hs)({
  width: 10
}), ld = /* @__PURE__ */ a(({ ...e }) => {
  let t = e.description, o = e.title, i = oe();
  return /* @__PURE__ */ s.createElement(fb, null, /* @__PURE__ */ s.createElement(mb, null, /* @__PURE__ */ s.createElement(gb, { crashed: e.
  crashed, id: "testing-module-title" }, /* @__PURE__ */ s.createElement(o, { ...e })), /* @__PURE__ */ s.createElement(yb, { id: "testing-m\
odule-description" }, /* @__PURE__ */ s.createElement(t, { ...e }))), /* @__PURE__ */ s.createElement(hb, null, e.runnable && /* @__PURE__ */ s.
  createElement(s.Fragment, null, e.running && e.cancellable ? /* @__PURE__ */ s.createElement(
    be,
    {
      hasChrome: !1,
      trigger: "hover",
      tooltip: /* @__PURE__ */ s.createElement(Xe, { note: `Stop ${e.name}` })
    },
    /* @__PURE__ */ s.createElement(
      me,
      {
        "aria-label": `Stop ${e.name}`,
        variant: "ghost",
        padding: "none",
        onClick: () => i.cancelTestProvider(e.id),
        disabled: e.cancelling
      },
      /* @__PURE__ */ s.createElement(
        bb,
        {
          percentage: e.progress?.percentageCompleted ?? e.details?.buildProgressPercentage
        },
        /* @__PURE__ */ s.createElement(vb, null)
      )
    )
  ) : /* @__PURE__ */ s.createElement(
    be,
    {
      hasChrome: !1,
      trigger: "hover",
      tooltip: /* @__PURE__ */ s.createElement(Xe, { note: `Start ${e.name}` })
    },
    /* @__PURE__ */ s.createElement(
      me,
      {
        "aria-label": `Start ${e.name}`,
        variant: "ghost",
        padding: "small",
        onClick: () => i.runTestProvider(e.id),
        disabled: e.crashed || e.running
      },
      /* @__PURE__ */ s.createElement(Ms, null)
    )
  ))));
}, "LegacyRender");

// src/manager/components/sidebar/TestingModule.tsx
var Ji = 500, xb = It({
>>>>>>> main
  "0%": { transform: "rotate(0deg)" },
  "10%": { transform: "rotate(10deg)" },
  "40%": { transform: "rotate(170deg)" },
  "50%": { transform: "rotate(180deg)" },
  "60%": { transform: "rotate(190deg)" },
  "90%": { transform: "rotate(350deg)" },
  "100%": { transform: "rotate(360deg)" }
<<<<<<< HEAD
}), KI = x.div(({ crashed: e, failed: t, running: o, updated: i, theme: r }) => ({
  position: "relative",
  lineHeight: "16px",
  width: "100%",
  padding: 1,
  overflow: "hidden",
  backgroundColor: `var(--sb-sidebar-bottom-card-background, ${r.background.content})`,
  borderRadius: `var(--sb-sidebar-bottom-card-border-radius, ${r.appBorderRadius + 1}px)`,
  boxShadow: `inset 0 0 0 1px ${e && !o ? r.color.negative : i ? r.color.positive : r.appBorderColor}, var(--sb-sidebar-bottom-card-box-shad\
ow, 0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${r.background.app})`,
=======
}), Sb = x.div(({ crashed: e, failed: t, running: o, theme: i }) => ({
  position: "relative",
  lineHeight: "20px",
  width: "100%",
  padding: 1,
  overflow: "hidden",
  backgroundColor: `var(--sb-sidebar-bottom-card-background, ${i.background.content})`,
  borderRadius: `var(--sb-sidebar-bottom-card-border-radius, ${i.appBorderRadius + 1}px)`,
  boxShadow: `inset 0 0 0 1px ${e && !o ? i.color.negative : i.appBorderColor}, var(--sb-sidebar-bottom-card-box-shadow, 0 1px 2px 0 rgba(0,\
 0, 0, 0.05), 0px -5px 20px 10px ${i.background.app})`,
>>>>>>> main
  transition: "box-shadow 1s",
  "&:after": {
    content: '""',
    display: o ? "block" : "none",
    position: "absolute",
    left: "50%",
    top: "50%",
    marginLeft: "calc(max(100vw, 100vh) * -0.5)",
    marginTop: "calc(max(100vw, 100vh) * -0.5)",
    height: "max(100vw, 100vh)",
    width: "max(100vw, 100vh)",
<<<<<<< HEAD
    animation: `${jI} 3s linear infinite`,
=======
    animation: `${xb} 3s linear infinite`,
>>>>>>> main
    background: t ? (
      // Hardcoded colors to prevent themes from messing with them (orange+gold, secondary+seafoam)
      "conic-gradient(transparent 90deg, #FC521F 150deg, #FFAE00 210deg, transparent 270deg)"
    ) : "conic-gradient(transparent 90deg, #029CFD 150deg, #37D5D3 210deg, transparent 270deg)",
    opacity: 1,
    willChange: "auto"
  }
<<<<<<< HEAD
})), $I = x.div(({ theme: e }) => ({
=======
})), Ib = x.div(({ theme: e }) => ({
>>>>>>> main
  position: "relative",
  zIndex: 1,
  borderRadius: e.appBorderRadius,
  backgroundColor: e.background.content,
  "&:hover #testing-module-collapse-toggle": {
    opacity: 1
  }
<<<<<<< HEAD
})), UI = x.div(({ theme: e }) => ({
  overflow: "hidden",
  willChange: "auto",
  boxShadow: `inset 0 -1px 0 ${e.appBorderColor}`
})), GI = x.div({
  display: "flex",
  flexDirection: "column"
}), qI = x.div(({ onClick: e }) => ({
=======
})), Eb = x.div(({ theme: e }) => ({
  overflow: "hidden",
  willChange: "auto",
  boxShadow: `inset 0 -1px 0 ${e.appBorderColor}`
})), _b = x.div({
  display: "flex",
  flexDirection: "column"
}), wb = x.div(({ onClick: e }) => ({
>>>>>>> main
  display: "flex",
  width: "100%",
  cursor: e ? "pointer" : "default",
  userSelect: "none",
  alignItems: "center",
  justifyContent: "space-between",
  overflow: "hidden",
<<<<<<< HEAD
  padding: 4,
  gap: 4
})), YI = x.div({
  display: "flex",
  flexBasis: "100%",
  containerType: "inline-size"
}), QI = x.div({
  display: "flex",
  justifyContent: "flex-end",
  gap: 4
}), XI = x(he)({
=======
  padding: "6px"
})), Tb = x.div({
  display: "flex",
  flexBasis: "100%",
  justifyContent: "flex-end",
  gap: 6
}), Cb = x(me)({
>>>>>>> main
  opacity: 0,
  transition: "opacity 250ms",
  willChange: "auto",
  "&:focus, &:hover": {
    opacity: 1
  }
<<<<<<< HEAD
}), ZI = x(he)({
  // 90px is the width of the button when the label is visible
  "@container (max-width: 90px)": {
    span: {
      display: "none"
    }
  }
}), Fd = x(he)(
=======
}), ud = x(me)(
>>>>>>> main
  { minWidth: 28 },
  ({ active: e, status: t, theme: o }) => !e && (o.base === "light" ? {
    background: {
      negative: o.background.negative,
      warning: o.background.warning
    }[t],
    color: {
      negative: o.color.negativeText,
      warning: o.color.warningText
    }[t]
  } : {
    background: {
      negative: `${o.color.negative}22`,
      warning: `${o.color.warning}22`
    }[t],
    color: {
      negative: o.color.negative,
      warning: o.color.warning
    }[t]
  })
<<<<<<< HEAD
), JI = x.div(({ theme: e }) => ({
=======
), kb = x.div(({ theme: e }) => ({
>>>>>>> main
  padding: 4,
  "&:not(:last-child)": {
    boxShadow: `inset 0 -1px 0 ${e.appBorderColor}`
  }
<<<<<<< HEAD
})), Rd = /* @__PURE__ */ a(({
  registeredTestProviders: e,
  testProviderStates: t,
  hasStatuses: o,
  clearStatuses: i,
  onRunAll: r,
  errorCount: n,
  errorsActive: l,
  setErrorsActive: u,
  warningCount: c,
  warningsActive: d,
  setWarningsActive: p
}) => {
  let m = q(null), h = q(null), [b, f] = K(js), [y, S] = K(!0), [E, g] = K(!1), [v, I] = K(!1), w = q();
  V(() => {
    let C = Jt.onSettingsChanged(() => {
      I(!0), clearTimeout(w.current), w.current = setTimeout(() => {
        I(!1);
      }, 1e3);
    });
    return () => {
      C(), clearTimeout(w.current);
    };
  }, []), V(() => {
    if (h.current) {
      f(h.current?.getBoundingClientRect().height || js);
      let C = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          if (h.current && !y) {
            let P = h.current?.getBoundingClientRect().height || js;
            f(P);
          }
        });
      });
      return C.observe(h.current), () => C.disconnect();
    }
  }, [y]);
  let O = A((C, P) => {
    C?.stopPropagation(), g(!0), S((D) => P ?? !D), m.current && clearTimeout(m.current), m.current = setTimeout(() => {
      g(!1);
    }, 250);
  }, []), _ = Object.values(t).some(
    (C) => C === "test-provider-state:running"
  ), k = Object.values(t).some(
    (C) => C === "test-provider-state:crashed"
  ), T = Object.values(e).length > 0;
  return V(() => {
    k && y && O(void 0, !1);
  }, [k, y, O]), !T && (!n || !c) ? null : /* @__PURE__ */ s.createElement(
    KI,
    {
      id: "storybook-testing-module",
      running: _,
      crashed: k,
      failed: n > 0,
      updated: v,
      "data-updated": v
    },
    /* @__PURE__ */ s.createElement($I, null, T && /* @__PURE__ */ s.createElement(
      UI,
      {
        "data-testid": "collapse",
        style: {
          transition: E ? "max-height 250ms" : "max-height 0ms",
          display: T ? "block" : "none",
          maxHeight: y ? 0 : b
        }
      },
      /* @__PURE__ */ s.createElement(GI, { ref: h }, Object.values(e).map((C) => {
        let { render: P, id: D } = C;
        return P ? /* @__PURE__ */ s.createElement(JI, { key: D, "data-module-id": D }, /* @__PURE__ */ s.createElement(P, null)) : (Na.warn(
          `No render function found for test provider with id '${D}', skipping...`
        ), null);
      }))
    ), /* @__PURE__ */ s.createElement(qI, { ...T ? { onClick: /* @__PURE__ */ a((C) => O(C), "onClick") } : {} }, /* @__PURE__ */ s.createElement(
    YI, null, T && /* @__PURE__ */ s.createElement(
      ve,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(rt, { note: _ ? "Running tests..." : "Start all tests" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        ZI,
        {
          size: "medium",
          variant: "ghost",
          padding: "small",
          onClick: (C) => {
            C.stopPropagation(), r();
          },
          disabled: _
        },
        /* @__PURE__ */ s.createElement(zn, null),
        /* @__PURE__ */ s.createElement("span", null, _ ? "Running..." : "Run tests")
      )
    )), /* @__PURE__ */ s.createElement(QI, null, T && /* @__PURE__ */ s.createElement(
      ve,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(
          rt,
          {
            note: y ? "Expand testing module" : "Collapse testing module"
=======
})), cd = /* @__PURE__ */ a(({
  testProviders: e,
  errorCount: t,
  errorsActive: o,
  setErrorsActive: i,
  warningCount: n,
  warningsActive: r,
  setWarningsActive: l
}) => {
  let u = oe(), c = Y(null), p = Y(null), [d, g] = $(Ji), [h, y] = $(!0), [f, b] = $(!1);
  j(() => {
    if (p.current) {
      g(p.current?.getBoundingClientRect().height || Ji);
      let E = new ResizeObserver(() => {
        requestAnimationFrame(() => {
          if (p.current && !h) {
            let T = p.current?.getBoundingClientRect().height || Ji;
            g(T);
          }
        });
      });
      return E.observe(p.current), () => E.disconnect();
    }
  }, [h]);
  let I = A((E) => {
    E.stopPropagation(), b(!0), y((T) => !T), c.current && clearTimeout(c.current), c.current = setTimeout(() => {
      b(!1);
    }, 250);
  }, []), _ = e.some((E) => E.running), m = e.some((E) => E.crashed), v = e.some((E) => E.failed), S = e.length > 0;
  return !S && (!t || !n) ? null : /* @__PURE__ */ s.createElement(
    Sb,
    {
      id: "storybook-testing-module",
      running: _,
      crashed: m,
      failed: v || t > 0
    },
    /* @__PURE__ */ s.createElement(Ib, null, S && /* @__PURE__ */ s.createElement(
      Eb,
      {
        "data-testid": "collapse",
        style: {
          transition: f ? "max-height 250ms" : "max-height 0ms",
          display: S ? "block" : "none",
          maxHeight: h ? 0 : d
        }
      },
      /* @__PURE__ */ s.createElement(_b, { ref: p }, e.map((E) => {
        let { render: T } = E;
        return /* @__PURE__ */ s.createElement(kb, { key: E.id, "data-module-id": E.id }, T ? /* @__PURE__ */ s.createElement(T, { ...E }) :
        /* @__PURE__ */ s.createElement(ld, { ...E }));
      }))
    ), /* @__PURE__ */ s.createElement(wb, { ...S ? { onClick: I } : {} }, S && /* @__PURE__ */ s.createElement(
      me,
      {
        variant: "ghost",
        padding: "small",
        onClick: (E) => {
          E.stopPropagation(), e.filter((T) => !T.running && T.runnable).forEach(({ id: T }) => u.runTestProvider(T));
        },
        disabled: _
      },
      /* @__PURE__ */ s.createElement(Ds, null),
      _ ? "Running..." : "Run tests"
    ), /* @__PURE__ */ s.createElement(Tb, null, S && /* @__PURE__ */ s.createElement(
      be,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(
          Xe,
          {
            note: h ? "Expand testing module" : "Collapse testing module"
>>>>>>> main
          }
        ),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
        XI,
        {
          size: "medium",
          variant: "ghost",
          padding: "small",
          onClick: (C) => O(C),
          id: "testing-module-collapse-toggle",
          "aria-label": y ? "Expand testing module" : "Collapse testing module"
        },
        /* @__PURE__ */ s.createElement(
          Tn,
          {
            style: {
              transform: y ? "none" : "rotate(180deg)",
=======
        Cb,
        {
          variant: "ghost",
          padding: "small",
          onClick: I,
          id: "testing-module-collapse-toggle",
          "aria-label": h ? "Expand testing module" : "Collapse testing module"
        },
        /* @__PURE__ */ s.createElement(
          ys,
          {
            style: {
              transform: h ? "none" : "rotate(180deg)",
>>>>>>> main
              transition: "transform 250ms",
              willChange: "auto"
            }
          }
        )
      )
<<<<<<< HEAD
    ), n > 0 && /* @__PURE__ */ s.createElement(
      ve,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(rt, { note: "Toggle errors" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        Fd,
        {
          id: "errors-found-filter",
          size: "medium",
          variant: "ghost",
          padding: n < 10 ? "medium" : "small",
          status: "negative",
          active: l,
          onClick: (C) => {
            C.stopPropagation(), u(!l);
          },
          "aria-label": "Toggle errors"
        },
        n < 1e3 ? n : "999+"
      )
    ), c > 0 && /* @__PURE__ */ s.createElement(
      ve,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(rt, { note: "Toggle warnings" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        Fd,
        {
          id: "warnings-found-filter",
          size: "medium",
          variant: "ghost",
          padding: c < 10 ? "medium" : "small",
          status: "warning",
          active: d,
          onClick: (C) => {
            C.stopPropagation(), p(!d);
          },
          "aria-label": "Toggle warnings"
        },
        c < 1e3 ? c : "999+"
      )
    ), o && /* @__PURE__ */ s.createElement(
      ve,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(
          rt,
          {
            note: _ ? "Can't clear statuses while tests are running" : "Clear all statuses"
          }
        ),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        ee,
        {
          id: "clear-statuses",
          size: "medium",
          onClick: (C) => {
            C.stopPropagation(), i();
          },
          disabled: _,
          "aria-label": _ ? "Can't clear statuses while tests are running" : "Clear all statuses"
        },
        /* @__PURE__ */ s.createElement(Un, null)
=======
    ), t > 0 && /* @__PURE__ */ s.createElement(
      be,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(Xe, { note: "Toggle errors" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        ud,
        {
          id: "errors-found-filter",
          variant: "ghost",
          padding: t < 10 ? "medium" : "small",
          status: "negative",
          active: o,
          onClick: (E) => {
            E.stopPropagation(), i(!o);
          },
          "aria-label": "Toggle errors"
        },
        t < 100 ? t : "99+"
      )
    ), n > 0 && /* @__PURE__ */ s.createElement(
      be,
      {
        hasChrome: !1,
        tooltip: /* @__PURE__ */ s.createElement(Xe, { note: "Toggle warnings" }),
        trigger: "hover"
      },
      /* @__PURE__ */ s.createElement(
        ud,
        {
          id: "warnings-found-filter",
          variant: "ghost",
          padding: n < 10 ? "medium" : "small",
          status: "warning",
          active: r,
          onClick: (E) => {
            E.stopPropagation(), l(!r);
          },
          "aria-label": "Toggle warnings"
        },
        n < 100 ? n : "99+"
>>>>>>> main
      )
    ))))
  );
}, "TestingModule");

// src/manager/components/sidebar/SidebarBottom.tsx
<<<<<<< HEAD
var eS = "sidebar-bottom-spacer", tS = "sidebar-bottom-wrapper", oS = /* @__PURE__ */ a(() => !0, "filterNone"), rS = /* @__PURE__ */ a(({ statuses: e = {} }) => Object.
values(e).some(({ value: t }) => t === "status-value:warning"), "filterWarn"), nS = /* @__PURE__ */ a(({ statuses: e = {} }) => Object.values(
e).some(({ value: t }) => t === "status-value:error"), "filterError"), iS = /* @__PURE__ */ a(({ statuses: e = {} }) => Object.values(e).some(
  ({ value: t }) => ["status-value:warning", "status-value:error"].includes(t)
), "filterBoth"), sS = /* @__PURE__ */ a((e = !1, t = !1) => e && t ? iS : e ? rS : t ? nS : oS, "getFilter"), aS = x.div({
  pointerEvents: "none"
}), lS = x.div(({ theme: e }) => ({
=======
var Ob = "sidebar-bottom-spacer", Pb = "sidebar-bottom-wrapper", Ab = /* @__PURE__ */ a(() => !0, "filterNone"), Db = /* @__PURE__ */ a(({ status: e = {} }) => Object.
values(e).some((t) => t?.status === "warn"), "filterWarn"), Mb = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status ===
"error"), "filterError"), Lb = /* @__PURE__ */ a(({ status: e = {} }) => Object.values(e).some((t) => t?.status === "warn" || t?.status === "\
error"), "filterBoth"), Nb = /* @__PURE__ */ a((e = !1, t = !1) => e && t ? Lb : e ? Db : t ? Mb : Ab, "getFilter"), Rb = x.div({
  pointerEvents: "none"
}), Fb = x.div(({ theme: e }) => ({
>>>>>>> main
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: "12px 0",
  margin: "0 12px",
  display: "flex",
  flexDirection: "column",
  gap: 12,
  color: e.color.defaultText,
  fontSize: e.typography.size.s1,
  overflow: "hidden",
  "&:empty": {
    display: "none"
  },
  // Integrators can use these to style their custom additions
  "--sb-sidebar-bottom-card-background": e.background.content,
  "--sb-sidebar-bottom-card-border": `1px solid ${e.appBorderColor}`,
  "--sb-sidebar-bottom-card-border-radius": `${e.appBorderRadius + 1}px`,
  "--sb-sidebar-bottom-card-box-shadow": `0 1px 2px 0 rgba(0, 0, 0, 0.05), 0px -5px 20px 10px ${e.background.app}`
<<<<<<< HEAD
})), uS = /* @__PURE__ */ a(({
  api: e,
  notifications: t = [],
  errorCount: o,
  warningCount: i,
  hasStatuses: r,
  isDevelopment: n,
  testProviderStates: l,
  registeredTestProviders: u,
  onRunAll: c
}) => {
  let d = q(null), p = q(null), [m, h] = K(!1), [b, f] = K(!1);
  return V(() => {
    if (d.current && p.current) {
      let y = new ResizeObserver(() => {
        d.current && p.current && (d.current.style.height = `${p.current.scrollHeight}px`);
      });
      return y.observe(p.current), () => y.disconnect();
    }
  }, []), V(() => {
    let y = sS(i > 0 && m, o > 0 && b);
    e.experimental_setFilter("sidebar-bottom-filter", y);
  }, [e, i, o, m, b]), !i && !o && Object.values(u).length === 0 && t.length === 0 ? null : /* @__PURE__ */ s.createElement(Ee, null, /* @__PURE__ */ s.
  createElement(aS, { id: eS, ref: d }), /* @__PURE__ */ s.createElement(lS, { id: tS, ref: p }, /* @__PURE__ */ s.createElement(Ir, { notifications: t,
  clearNotification: e.clearNotification }), n && /* @__PURE__ */ s.createElement(
    Rd,
    {
      registeredTestProviders: u,
      testProviderStates: l,
      onRunAll: /* @__PURE__ */ a(() => {
        c(), f(!1), h(!1);
      }, "onRunAll"),
      hasStatuses: r,
      clearStatuses: /* @__PURE__ */ a(() => {
        Ot.unset(), Jt.clearAll(), f(!1), h(!1);
      }, "clearStatuses"),
      errorCount: o,
      errorsActive: b,
      setErrorsActive: f,
      warningCount: i,
      warningsActive: m,
      setWarningsActive: h
    }
  )));
}, "SidebarBottomBase"), Bd = /* @__PURE__ */ a(({ isDevelopment: e }) => {
  let t = oe(), o = t.getElements(Ce.experimental_TEST_PROVIDER), { notifications: i } = Ne(), { hasStatuses: r, errorCount: n, warningCount: l } = Eo(
  (c) => Object.values(c).reduce(
    (d, p) => (Object.values(p).forEach((m) => {
      d.hasStatuses = !0, m.value === "status-value:error" && (d.errorCount += 1), m.value === "status-value:warning" && (d.warningCount += 1);
    }), d),
    { errorCount: 0, warningCount: 0, hasStatuses: !1 }
  )), u = ei();
  return /* @__PURE__ */ s.createElement(
    uS,
    {
      api: t,
      notifications: i,
      hasStatuses: r,
      errorCount: n,
      warningCount: l,
      isDevelopment: e,
      testProviderStates: u,
      registeredTestProviders: o,
      onRunAll: Jt.runAll
=======
})), Hb = /* @__PURE__ */ a(({
  api: e,
  notifications: t = [],
  status: o = {},
  isDevelopment: i
}) => {
  let n = Y(null), r = Y(null), [l, u] = $(!1), [c, p] = $(!1), { testProviders: d } = Pe(), g = Object.values(o).filter(
    (I) => Object.values(I).some((_) => _?.status === "warn")
  ), h = Object.values(o).filter(
    (I) => Object.values(I).some((_) => _?.status === "error")
  ), y = g.length > 0, f = h.length > 0;
  j(() => {
    if (n.current && r.current) {
      let I = new ResizeObserver(() => {
        n.current && r.current && (n.current.style.height = `${r.current.scrollHeight}px`);
      });
      return I.observe(r.current), () => I.disconnect();
    }
  }, []), j(() => {
    let I = Nb(y && l, f && c);
    e.experimental_setFilter("sidebar-bottom-filter", I);
  }, [e, y, f, l, c]), ft(() => {
    let I = /* @__PURE__ */ a(({ providerId: m, ...v }) => {
      e.updateTestProviderState(m, {
        error: { name: "Crashed!", message: v.error.message },
        running: !1,
        crashed: !0
      });
    }, "onCrashReport"), _ = /* @__PURE__ */ a(async ({
      providerId: m,
      ...v
    }) => {
      let S = "status" in v ? v.status : void 0;
      e.updateTestProviderState(
        m,
        S === "failed" ? { ...v, running: !1, failed: !0 } : { ...v, running: S === "pending" }
      );
    }, "onProgressReport");
    return e.on(ln, I), e.on(un, _), () => {
      e.off(ln, I), e.off(un, _);
    };
  }, [e, d]);
  let b = Object.values(d || {});
  return !y && !f && !b.length && !t.length ? null : /* @__PURE__ */ s.createElement(_e, null, /* @__PURE__ */ s.createElement(Rb, { id: Ob,
  ref: n }), /* @__PURE__ */ s.createElement(Fb, { id: Pb, ref: r }, /* @__PURE__ */ s.createElement(ir, { notifications: t, clearNotification: e.
  clearNotification }), i && /* @__PURE__ */ s.createElement(
    cd,
    {
      testProviders: b,
      errorCount: h.length,
      errorsActive: c,
      setErrorsActive: p,
      warningCount: g.length,
      warningsActive: l,
      setWarningsActive: u
    }
  )));
}, "SidebarBottomBase"), pd = /* @__PURE__ */ a(({ isDevelopment: e }) => {
  let t = oe(), { notifications: o, status: i } = Pe();
  return /* @__PURE__ */ s.createElement(
    Hb,
    {
      api: t,
      notifications: o,
      status: i,
      isDevelopment: e
>>>>>>> main
    }
  );
}, "SidebarBottom");

// src/manager/components/sidebar/TagsFilterPanel.tsx
<<<<<<< HEAD
var cS = /* @__PURE__ */ new Set(["play-fn"]), pS = x.div({
  minWidth: 180,
  maxWidth: 220
}), Hd = /* @__PURE__ */ a(({
=======
var Bb = /* @__PURE__ */ new Set(["play-fn"]), zb = x.div({
  minWidth: 180,
  maxWidth: 220
}), dd = /* @__PURE__ */ a(({
>>>>>>> main
  api: e,
  allTags: t,
  selectedTags: o,
  toggleTag: i,
<<<<<<< HEAD
  isDevelopment: r
}) => {
  let n = t.filter((c) => !cS.has(c)), l = e.getDocsUrl({ subpath: "writing-stories/tags#filtering-by-custom-tags" }), u = [
    t.map((c) => {
      let d = o.includes(c), p = `tag-${c}`;
      return {
        id: p,
=======
  isDevelopment: n
}) => {
  let r = t.filter((c) => !Bb.has(c)), l = e.getDocsUrl({ subpath: "writing-stories/tags#filtering-by-custom-tags" }), u = [
    t.map((c) => {
      let p = o.includes(c), d = `tag-${c}`;
      return {
        id: d,
>>>>>>> main
        title: c,
        right: /* @__PURE__ */ s.createElement(
          "input",
          {
            type: "checkbox",
<<<<<<< HEAD
            id: p,
            name: p,
            value: c,
            checked: d,
=======
            id: d,
            name: d,
            value: c,
            checked: p,
>>>>>>> main
            onChange: () => {
            }
          }
        ),
        onClick: /* @__PURE__ */ a(() => i(c), "onClick")
      };
    })
  ];
  return t.length === 0 && u.push([
    {
      id: "no-tags",
      title: "There are no tags. Use tags to organize and filter your Storybook.",
      isIndented: !1
    }
<<<<<<< HEAD
  ]), n.length === 0 && r && u.push([
    {
      id: "tags-docs",
      title: "Learn how to add tags",
      icon: /* @__PURE__ */ s.createElement(tt, null),
      href: l
    }
  ]), /* @__PURE__ */ s.createElement(pS, null, /* @__PURE__ */ s.createElement(ot, { links: u }));
}, "TagsFilterPanel");

// src/manager/components/sidebar/TagsFilter.tsx
var dS = "tags-filter", fS = /* @__PURE__ */ new Set([
=======
  ]), r.length === 0 && n && u.push([
    {
      id: "tags-docs",
      title: "Learn how to add tags",
      icon: /* @__PURE__ */ s.createElement(at, null),
      href: l
    }
  ]), /* @__PURE__ */ s.createElement(zb, null, /* @__PURE__ */ s.createElement(gt, { links: u }));
}, "TagsFilterPanel");

// src/manager/components/sidebar/TagsFilter.tsx
var Wb = "tags-filter", jb = /* @__PURE__ */ new Set([
>>>>>>> main
  "dev",
  "docs-only",
  "test-only",
  "autodocs",
  "test",
  "attached-mdx",
  "unattached-mdx"
<<<<<<< HEAD
]), mS = x.div({
  position: "relative"
}), hS = x(tr)(({ theme: e }) => ({
=======
]), Vb = x.div({
  position: "relative"
}), Kb = x(Go)(({ theme: e }) => ({
>>>>>>> main
  position: "absolute",
  top: 7,
  right: 7,
  transform: "translate(50%, -50%)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: 3,
  height: 6,
  minWidth: 6,
  lineHeight: "px",
  boxShadow: `${e.barSelectedColor} 0 0 0 1px inset`,
  fontSize: e.typography.size.s1 - 1,
  background: e.color.secondary,
  color: e.color.lightest
<<<<<<< HEAD
})), zd = /* @__PURE__ */ a(({
=======
})), fd = /* @__PURE__ */ a(({
>>>>>>> main
  api: e,
  indexJson: t,
  initialSelectedTags: o = [],
  isDevelopment: i
}) => {
<<<<<<< HEAD
  let [r, n] = K(o), [l, u] = K(!1), c = r.length > 0;
  V(() => {
    e.experimental_setFilter(dS, (b) => r.length === 0 ? !0 : r.some((f) => b.tags?.includes(f)));
  }, [e, r]);
  let d = Object.values(t.entries).reduce((b, f) => (f.tags?.forEach((y) => {
    fS.has(y) || b.add(y);
  }), b), /* @__PURE__ */ new Set()), p = A(
    (b) => {
      r.includes(b) ? n(r.filter((f) => f !== b)) : n([...r, b]);
    },
    [r, n]
  ), m = A(
    (b) => {
      b.preventDefault(), u(!l);
    },
    [l, u]
  );
  if (d.size === 0 && !i)
    return null;
  let h = Array.from(d);
  return h.sort(), /* @__PURE__ */ s.createElement(
    ve,
=======
  let [n, r] = $(o), [l, u] = $(!1), c = n.length > 0;
  j(() => {
    e.experimental_setFilter(Wb, (y) => n.length === 0 ? !0 : n.some((f) => y.tags?.includes(f)));
  }, [e, n]);
  let p = Object.values(t.entries).reduce((y, f) => (f.tags?.forEach((b) => {
    jb.has(b) || y.add(b);
  }), y), /* @__PURE__ */ new Set()), d = A(
    (y) => {
      n.includes(y) ? r(n.filter((f) => f !== y)) : r([...n, y]);
    },
    [n, r]
  ), g = A(
    (y) => {
      y.preventDefault(), u(!l);
    },
    [l, u]
  );
  if (p.size === 0 && !i)
    return null;
  let h = Array.from(p);
  return h.sort(), /* @__PURE__ */ s.createElement(
    be,
>>>>>>> main
    {
      placement: "bottom",
      trigger: "click",
      onVisibleChange: u,
      tooltip: () => /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
        Hd,
        {
          api: e,
          allTags: h,
          selectedTags: r,
          toggleTag: p,
=======
        dd,
        {
          api: e,
          allTags: h,
          selectedTags: n,
          toggleTag: d,
>>>>>>> main
          isDevelopment: i
        }
      ),
      closeOnOutsideClick: !0
    },
<<<<<<< HEAD
    /* @__PURE__ */ s.createElement(mS, null, /* @__PURE__ */ s.createElement(ee, { key: "tags", title: "Tag filters", active: c, onClick: m },
    /* @__PURE__ */ s.createElement(Ln, null)), r.length > 0 && /* @__PURE__ */ s.createElement(hS, null))
  );
}, "TagsFilter");

// src/manager/components/sidebar/useLastViewed.ts
var bn = Ve(Wd(), 1);
var Vd = $i((e) => bn.default.set("lastViewedStoryIds", e), 1e3), jd = /* @__PURE__ */ a((e) => {
  let t = U(() => {
    let r = bn.default.get("lastViewedStoryIds");
    return !r || !Array.isArray(r) ? [] : r.some((n) => typeof n == "object" && n.storyId && n.refId) ? r : [];
  }, [bn.default]), o = q(t), i = A(
    (r) => {
      let n = o.current, l = n.findIndex(
        ({ storyId: u, refId: c }) => u === r.storyId && c === r.refId
      );
      l !== 0 && (l === -1 ? o.current = [r, ...n] : o.current = [r, ...n.slice(0, l), ...n.slice(l + 1)], Vd(o.current));
    },
    [o]
  );
  return V(() => {
=======
    /* @__PURE__ */ s.createElement(Vb, null, /* @__PURE__ */ s.createElement(te, { key: "tags", title: "Tag filters", active: c, onClick: g },
    /* @__PURE__ */ s.createElement(Ts, null)), n.length > 0 && /* @__PURE__ */ s.createElement(Kb, null))
  );
}, "TagsFilter");

// ../node_modules/es-toolkit/dist/compat/function/debounce.mjs
function es(e, t = 0, o = {}) {
  typeof o != "object" && (o = {});
  let { signal: i, leading: n = !1, trailing: r = !0, maxWait: l } = o, u = Array(2);
  n && (u[0] = "leading"), r && (u[1] = "trailing");
  let c, p = null, d = _r(function(...y) {
    c = e.apply(this, y), p = null;
  }, t, { signal: i, edges: u }), g = /* @__PURE__ */ a(function(...y) {
    if (l != null) {
      if (p === null)
        p = Date.now();
      else if (Date.now() - p >= l)
        return c = e.apply(this, y), p = Date.now(), d.cancel(), d.schedule(), c;
    }
    return d.apply(this, y), c;
  }, "debounced"), h = /* @__PURE__ */ a(() => (d.flush(), c), "flush");
  return g.cancel = d.cancel, g.flush = h, g;
}
a(es, "debounce");

// src/manager/components/sidebar/useLastViewed.ts
var Jr = ze(md(), 1);
var hd = es((e) => Jr.default.set("lastViewedStoryIds", e), 1e3), gd = /* @__PURE__ */ a((e) => {
  let t = K(() => {
    let n = Jr.default.get("lastViewedStoryIds");
    return !n || !Array.isArray(n) ? [] : n.some((r) => typeof r == "object" && r.storyId && r.refId) ? n : [];
  }, [Jr.default]), o = Y(t), i = A(
    (n) => {
      let r = o.current, l = r.findIndex(
        ({ storyId: u, refId: c }) => u === n.storyId && c === n.refId
      );
      l !== 0 && (l === -1 ? o.current = [n, ...r] : o.current = [n, ...r.slice(0, l), ...r.slice(l + 1)], hd(o.current));
    },
    [o]
  );
  return j(() => {
>>>>>>> main
    e && i(e);
  }, [e]), {
    getLastViewed: A(() => o.current, [o]),
    clearLastViewed: A(() => {
<<<<<<< HEAD
      o.current = o.current.slice(0, 1), Vd(o.current);
=======
      o.current = o.current.slice(0, 1), hd(o.current);
>>>>>>> main
    }, [o])
  };
}, "useLastViewed");

// src/manager/components/sidebar/Sidebar.tsx
<<<<<<< HEAD
var at = "storybook_internal", gS = x.nav(({ theme: e }) => ({
=======
var st = "storybook_internal", $b = x.nav(({ theme: e }) => ({
>>>>>>> main
  position: "absolute",
  zIndex: 1,
  left: 0,
  top: 0,
  bottom: 0,
  right: 0,
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  background: e.background.content,
  [Qe]: {
    background: e.background.app
  }
<<<<<<< HEAD
})), yS = x(ct)({
=======
})), Ub = x(lt)({
>>>>>>> main
  paddingLeft: 12,
  paddingRight: 12,
  paddingBottom: 20,
  paddingTop: 16,
  flex: 1
<<<<<<< HEAD
}), bS = x(rt)({
  margin: 0
}), vS = x(ee)(({ theme: e, isMobile: t }) => ({
  color: e.color.mediumdark,
  width: t ? 36 : 32,
  height: t ? 36 : 32,
  borderRadius: e.appBorderRadius + 2
})), xS = s.memo(/* @__PURE__ */ a(function({
  children: t,
  condition: o
}) {
  let [i, r] = s.Children.toArray(t);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { style: { display: o ? "block" : "none" } },
  i), /* @__PURE__ */ s.createElement("div", { style: { display: o ? "none" : "block" } }, r));
}, "Swap")), IS = /* @__PURE__ */ a((e, t, o, i, r) => {
  let n = U(
    () => ({
      [at]: {
=======
}), Gb = x(Xe)({
  margin: 0
}), Yb = x(te)(({ theme: e }) => ({
  color: e.color.mediumdark,
  width: 32,
  height: 32,
  borderRadius: e.appBorderRadius + 2
})), qb = s.memo(/* @__PURE__ */ a(function({
  children: t,
  condition: o
}) {
  let [i, n] = s.Children.toArray(t);
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement("div", { style: { display: o ? "block" : "none" } },
  i), /* @__PURE__ */ s.createElement("div", { style: { display: o ? "none" : "block" } }, n));
}, "Swap")), Qb = /* @__PURE__ */ a((e, t, o, i, n) => {
  let r = K(
    () => ({
      [st]: {
>>>>>>> main
        index: e,
        filteredIndex: e,
        indexError: t,
        previewInitialized: o,
<<<<<<< HEAD
        allStatuses: i,
        title: null,
        id: at,
        url: "iframe.html"
      },
      ...r
    }),
    [r, e, t, o, i]
  );
  return U(() => ({ hash: n, entries: Object.entries(n) }), [n]);
}, "useCombination"), SS = se.STORYBOOK_RENDERER === "react", Kd = s.memo(/* @__PURE__ */ a(function({
  // @ts-expect-error (non strict)
  storyId: t = null,
  refId: o = at,
  index: i,
  indexJson: r,
  indexError: n,
  allStatuses: l,
  previewInitialized: u,
  menu: c,
  menuHighlighted: d = !1,
  enableShortcuts: p = !0,
  isDevelopment: m = se.CONFIG_TYPE === "DEVELOPMENT",
  refs: h = {},
  onMenuClick: b,
  showCreateStoryButton: f = m && SS
}) {
  let [y, S] = K(!1), E = U(() => t && { storyId: t, refId: o }, [t, o]), g = IS(i, n, u, l, h), v = !i && !n, I = jd(E), { isMobile: w } = ge(),
  O = oe();
  return /* @__PURE__ */ s.createElement(gS, { className: "container sidebar-container", "aria-label": "Global" }, /* @__PURE__ */ s.createElement(
  nr, { vertical: !0, offset: 3, scrollbarSize: 6 }, /* @__PURE__ */ s.createElement(yS, { row: 1.6 }, /* @__PURE__ */ s.createElement(
    bp,
=======
        status: i,
        title: null,
        id: st,
        url: "iframe.html"
      },
      ...n
    }),
    [n, e, t, o, i]
  );
  return K(() => ({ hash: r, entries: Object.entries(r) }), [r]);
}, "useCombination"), Xb = se.STORYBOOK_RENDERER === "react", yd = s.memo(/* @__PURE__ */ a(function({
  // @ts-expect-error (non strict)
  storyId: t = null,
  refId: o = st,
  index: i,
  indexJson: n,
  indexError: r,
  status: l,
  previewInitialized: u,
  menu: c,
  extra: p,
  menuHighlighted: d = !1,
  enableShortcuts: g = !0,
  isDevelopment: h = se.CONFIG_TYPE === "DEVELOPMENT",
  refs: y = {},
  onMenuClick: f,
  showCreateStoryButton: b = h && Xb
}) {
  let [I, _] = $(!1), m = K(() => t && { storyId: t, refId: o }, [t, o]), v = Qb(i, r, u, l, y), S = !i && !r, E = gd(m), { isMobile: T } = ge(),
  C = oe();
  return /* @__PURE__ */ s.createElement($b, { className: "container sidebar-container" }, /* @__PURE__ */ s.createElement(Qo, { vertical: !0,
  offset: 3, scrollbarSize: 6 }, /* @__PURE__ */ s.createElement(Ub, { row: 1.6 }, /* @__PURE__ */ s.createElement(
    Kc,
>>>>>>> main
    {
      className: "sidebar-header",
      menuHighlighted: d,
      menu: c,
<<<<<<< HEAD
      skipLinkHref: "#storybook-preview-wrapper",
      isLoading: v,
      onMenuClick: b
    }
  ), /* @__PURE__ */ s.createElement(
    Dd,
    {
      dataset: g,
      enableShortcuts: p,
      searchBarContent: f && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
        ve,
        {
          trigger: "hover",
          hasChrome: !1,
          tooltip: /* @__PURE__ */ s.createElement(bS, { note: "Create a new story" })
        },
        /* @__PURE__ */ s.createElement(
          vS,
          {
            isMobile: w,
            onClick: () => {
              S(!0);
            },
            variant: "outline"
          },
          /* @__PURE__ */ s.createElement(Wn, null)
        )
      ), /* @__PURE__ */ s.createElement(
        vc,
        {
          open: y,
          onOpenChange: S
        }
      )),
      searchFieldContent: r && /* @__PURE__ */ s.createElement(zd, { api: O, indexJson: r, isDevelopment: m }),
      ...I
    },
    ({
      query: _,
      results: k,
      isBrowsing: T,
      closeMenu: C,
      getMenuProps: P,
      getItemProps: D,
      highlightedIndex: M
    }) => /* @__PURE__ */ s.createElement(xS, { condition: T }, /* @__PURE__ */ s.createElement(
      mp,
      {
        dataset: g,
        selected: E,
        isLoading: v,
        isBrowsing: T
      }
    ), /* @__PURE__ */ s.createElement(
      Nd,
      {
        query: _,
        results: k,
        closeMenu: C,
        getMenuProps: P,
        getItemProps: D,
        highlightedIndex: M,
        enableShortcuts: p,
        isLoading: v,
        clearLastViewed: I.clearLastViewed
      }
    ))
  )), w || v ? null : /* @__PURE__ */ s.createElement(Bd, { isDevelopment: m })));
}, "Sidebar"));

// src/manager/container/Menu.tsx
var wS = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
}, ES = x.span(({ theme: e }) => ({
=======
      extra: p,
      skipLinkHref: "#storybook-preview-wrapper",
      isLoading: S,
      onMenuClick: f
    }
  ), /* @__PURE__ */ s.createElement(
    nd,
    {
      dataset: v,
      enableShortcuts: g,
      searchBarContent: b && /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(
        be,
        {
          trigger: "hover",
          hasChrome: !1,
          tooltip: /* @__PURE__ */ s.createElement(Gb, { note: "Create a new story" })
        },
        /* @__PURE__ */ s.createElement(
          Yb,
          {
            onClick: () => {
              _(!0);
            },
            variant: "outline"
          },
          /* @__PURE__ */ s.createElement(Ls, null)
        )
      ), /* @__PURE__ */ s.createElement(
        Vu,
        {
          open: I,
          onOpenChange: _
        }
      )),
      searchFieldContent: n && /* @__PURE__ */ s.createElement(fd, { api: C, indexJson: n, isDevelopment: h }),
      ...E
    },
    ({
      query: k,
      results: w,
      isBrowsing: O,
      closeMenu: P,
      getMenuProps: D,
      getItemProps: M,
      highlightedIndex: N
    }) => /* @__PURE__ */ s.createElement(qb, { condition: O }, /* @__PURE__ */ s.createElement(
      Bc,
      {
        dataset: v,
        selected: m,
        isLoading: S,
        isBrowsing: O
      }
    ), /* @__PURE__ */ s.createElement(
      ad,
      {
        query: k,
        results: w,
        closeMenu: P,
        getMenuProps: D,
        getItemProps: M,
        highlightedIndex: N,
        enableShortcuts: g,
        isLoading: S,
        clearLastViewed: E.clearLastViewed
      }
    ))
  )), T || S ? null : /* @__PURE__ */ s.createElement(pd, { isDevelopment: h })));
}, "Sidebar"));

// src/manager/container/Menu.tsx
var Zb = {
  storySearchField: "storybook-explorer-searchfield",
  storyListMenu: "storybook-explorer-menu",
  storyPanelRoot: "storybook-panel-root"
}, Jb = x.span(({ theme: e }) => ({
>>>>>>> main
  display: "inline-block",
  height: 16,
  lineHeight: "16px",
  textAlign: "center",
  fontSize: "11px",
  background: e.base === "light" ? "rgba(0,0,0,0.05)" : "rgba(255,255,255,0.05)",
  color: e.base === "light" ? e.color.dark : e.textMutedColor,
  borderRadius: 2,
  userSelect: "none",
  pointerEvents: "none",
  padding: "0 6px"
<<<<<<< HEAD
})), TS = x.code(
=======
})), e0 = x.code(
>>>>>>> main
  ({ theme: e }) => `
  padding: 0;
  vertical-align: middle;

  & + & {
    margin-left: 6px;
  }
`
<<<<<<< HEAD
), We = /* @__PURE__ */ a(({ keys: e }) => /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(ES, null, e.map(
(t, o) => /* @__PURE__ */ s.createElement(TS, { key: t }, Ye([t]))))), "Shortcut"), $d = /* @__PURE__ */ a((e, t, o, i, r, n, l) => {
  let u = t.getShortcutKeys(), c = U(
=======
), Be = /* @__PURE__ */ a(({ keys: e }) => /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Jb, null, e.map(
(t, o) => /* @__PURE__ */ s.createElement(e0, { key: t }, qe([t]))))), "Shortcut"), bd = /* @__PURE__ */ a((e, t, o, i, n, r, l) => {
  let u = t.getShortcutKeys(), c = K(
>>>>>>> main
    () => ({
      id: "about",
      title: "About your Storybook",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("about"), "onClick"),
<<<<<<< HEAD
      icon: /* @__PURE__ */ s.createElement(Fn, null)
    }),
    [t]
  ), d = U(() => ({
    id: "documentation",
    title: "Documentation",
    href: t.getDocsUrl({ versioned: !0, renderer: !0 }),
    icon: /* @__PURE__ */ s.createElement(tt, null)
  }), [t]), p = e.whatsNewData?.status === "SUCCESS" && !e.disableWhatsNewNotifications, m = t.isWhatsNewUnread(), h = U(
=======
      icon: /* @__PURE__ */ s.createElement(ks, null)
    }),
    [t]
  ), p = K(() => ({
    id: "documentation",
    title: "Documentation",
    href: t.getDocsUrl({ versioned: !0, renderer: !0 }),
    icon: /* @__PURE__ */ s.createElement(at, null)
  }), [t]), d = e.whatsNewData?.status === "SUCCESS" && !e.disableWhatsNewNotifications, g = t.isWhatsNewUnread(), h = K(
>>>>>>> main
    () => ({
      id: "whats-new",
      title: "What's new?",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("whats-new"), "onClick"),
<<<<<<< HEAD
      right: p && m && /* @__PURE__ */ s.createElement(tr, { status: "positive" }, "Check it out"),
      icon: /* @__PURE__ */ s.createElement(Yn, null)
    }),
    [t, p, m]
  ), b = U(
=======
      right: d && g && /* @__PURE__ */ s.createElement(Go, { status: "positive" }, "Check it out"),
      icon: /* @__PURE__ */ s.createElement(js, null)
    }),
    [t, d, g]
  ), y = K(
>>>>>>> main
    () => ({
      id: "shortcuts",
      title: "Keyboard shortcuts",
      onClick: /* @__PURE__ */ a(() => t.changeSettingsTab("shortcuts"), "onClick"),
<<<<<<< HEAD
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.shortcutsPage }) : null
    }),
    [t, l, u.shortcutsPage]
  ), f = U(
=======
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.shortcutsPage }) : null
    }),
    [t, l, u.shortcutsPage]
  ), f = K(
>>>>>>> main
    () => ({
      id: "S",
      title: "Show sidebar",
      onClick: /* @__PURE__ */ a(() => t.toggleNav(), "onClick"),
<<<<<<< HEAD
      active: n,
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.toggleNav }) : null,
      icon: n ? /* @__PURE__ */ s.createElement(Be, null) : null
    }),
    [t, l, u, n]
  ), y = U(
=======
      active: r,
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.toggleNav }) : null,
      icon: r ? /* @__PURE__ */ s.createElement(We, null) : null
    }),
    [t, l, u, r]
  ), b = K(
>>>>>>> main
    () => ({
      id: "T",
      title: "Show toolbar",
      onClick: /* @__PURE__ */ a(() => t.toggleToolbar(), "onClick"),
      active: o,
<<<<<<< HEAD
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.toolbar }) : null,
      icon: o ? /* @__PURE__ */ s.createElement(Be, null) : null
    }),
    [t, l, u, o]
  ), S = U(
=======
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.toolbar }) : null,
      icon: o ? /* @__PURE__ */ s.createElement(We, null) : null
    }),
    [t, l, u, o]
  ), I = K(
>>>>>>> main
    () => ({
      id: "A",
      title: "Show addons",
      onClick: /* @__PURE__ */ a(() => t.togglePanel(), "onClick"),
<<<<<<< HEAD
      active: r,
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.togglePanel }) : null,
      icon: r ? /* @__PURE__ */ s.createElement(Be, null) : null
    }),
    [t, l, u, r]
  ), E = U(
=======
      active: n,
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.togglePanel }) : null,
      icon: n ? /* @__PURE__ */ s.createElement(We, null) : null
    }),
    [t, l, u, n]
  ), _ = K(
>>>>>>> main
    () => ({
      id: "D",
      title: "Change addons orientation",
      onClick: /* @__PURE__ */ a(() => t.togglePanelPosition(), "onClick"),
<<<<<<< HEAD
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.panelPosition }) : null
    }),
    [t, l, u]
  ), g = U(
=======
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.panelPosition }) : null
    }),
    [t, l, u]
  ), m = K(
>>>>>>> main
    () => ({
      id: "F",
      title: "Go full screen",
      onClick: /* @__PURE__ */ a(() => t.toggleFullscreen(), "onClick"),
      active: i,
<<<<<<< HEAD
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.fullScreen }) : null,
      icon: i ? /* @__PURE__ */ s.createElement(Be, null) : null
    }),
    [t, l, u, i]
  ), v = U(
    () => ({
      id: "/",
      title: "Search",
      onClick: /* @__PURE__ */ a(() => t.focusOnUIElement(wS.storySearchField), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.search }) : null
    }),
    [t, l, u]
  ), I = U(
=======
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.fullScreen }) : null,
      icon: i ? /* @__PURE__ */ s.createElement(We, null) : null
    }),
    [t, l, u, i]
  ), v = K(
    () => ({
      id: "/",
      title: "Search",
      onClick: /* @__PURE__ */ a(() => t.focusOnUIElement(Zb.storySearchField), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.search }) : null
    }),
    [t, l, u]
  ), S = K(
>>>>>>> main
    () => ({
      id: "up",
      title: "Previous component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(-1), "onClick"),
<<<<<<< HEAD
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.prevComponent }) : null
    }),
    [t, l, u]
  ), w = U(
=======
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.prevComponent }) : null
    }),
    [t, l, u]
  ), E = K(
>>>>>>> main
    () => ({
      id: "down",
      title: "Next component",
      onClick: /* @__PURE__ */ a(() => t.jumpToComponent(1), "onClick"),
<<<<<<< HEAD
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.nextComponent }) : null
    }),
    [t, l, u]
  ), O = U(
=======
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.nextComponent }) : null
    }),
    [t, l, u]
  ), T = K(
>>>>>>> main
    () => ({
      id: "prev",
      title: "Previous story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(-1), "onClick"),
<<<<<<< HEAD
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.prevStory }) : null
    }),
    [t, l, u]
  ), _ = U(
=======
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.prevStory }) : null
    }),
    [t, l, u]
  ), C = K(
>>>>>>> main
    () => ({
      id: "next",
      title: "Next story",
      onClick: /* @__PURE__ */ a(() => t.jumpToStory(1), "onClick"),
<<<<<<< HEAD
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.nextStory }) : null
    }),
    [t, l, u]
  ), k = U(
    () => ({
      id: "collapse",
      title: "Collapse all",
      onClick: /* @__PURE__ */ a(() => t.emit(ho), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: u.collapseAll }) : null
    }),
    [t, l, u]
  ), T = A(() => {
    let C = t.getAddonsShortcuts(), P = u;
    return Object.entries(C).filter(([D, { showInMenu: M }]) => M).map(([D, { label: M, action: F }]) => ({
      id: D,
      title: M,
      onClick: /* @__PURE__ */ a(() => F(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(We, { keys: P[D] }) : null
    }));
  }, [t, l, u]);
  return U(
=======
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.nextStory }) : null
    }),
    [t, l, u]
  ), k = K(
    () => ({
      id: "collapse",
      title: "Collapse all",
      onClick: /* @__PURE__ */ a(() => t.emit(io), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: u.collapseAll }) : null
    }),
    [t, l, u]
  ), w = A(() => {
    let O = t.getAddonsShortcuts(), P = u;
    return Object.entries(O).filter(([D, { showInMenu: M }]) => M).map(([D, { label: M, action: N }]) => ({
      id: D,
      title: M,
      onClick: /* @__PURE__ */ a(() => N(), "onClick"),
      right: l ? /* @__PURE__ */ s.createElement(Be, { keys: P[D] }) : null
    }));
  }, [t, l, u]);
  return K(
>>>>>>> main
    () => [
      [
        c,
        ...e.whatsNewData?.status === "SUCCESS" ? [h] : [],
<<<<<<< HEAD
        d,
        b
      ],
      [
        f,
        y,
        S,
        E,
        g,
        v,
        I,
        w,
        O,
        _,
        k
      ],
      T()
=======
        p,
        y
      ],
      [
        f,
        b,
        I,
        _,
        m,
        v,
        S,
        E,
        T,
        C,
        k
      ],
      w()
>>>>>>> main
    ],
    [
      c,
      e,
      h,
<<<<<<< HEAD
      d,
      b,
      f,
      y,
      S,
      E,
      g,
      v,
      I,
      w,
      O,
      _,
      k,
      T
=======
      p,
      y,
      f,
      b,
      I,
      _,
      m,
      v,
      S,
      E,
      T,
      C,
      k,
      w
>>>>>>> main
    ]
  );
}, "useMenu");

// src/manager/container/Sidebar.tsx
<<<<<<< HEAD
var CS = s.memo(/* @__PURE__ */ a(function({ onMenuClick: t }) {
  return /* @__PURE__ */ s.createElement(me, { filter: /* @__PURE__ */ a(({ state: i, api: r }) => {
    let {
      ui: { name: n, url: l, enableShortcuts: u },
      viewMode: c,
      storyId: d,
      refId: p,
      layout: { showToolbar: m },
      // FIXME: This is the actual `index.json` index where the `index` below
      // is actually the stories hash. We should fix this up and make it consistent.
      internal_index: h,
      filteredIndex: b,
      indexError: f,
      previewInitialized: y,
      refs: S
    } = i, E = $d(
      i,
      r,
      m,
      r.getIsFullscreen(),
      r.getIsPanelShown(),
      r.getIsNavShown(),
      u
    ), g = i.whatsNewData?.status === "SUCCESS" && !i.disableWhatsNewNotifications;
    return {
      title: n,
      url: l,
      indexJson: h,
      index: b,
      indexError: f,
      previewInitialized: y,
      refs: S,
      storyId: d,
      refId: p,
      viewMode: c,
      menu: E,
      menuHighlighted: g && r.isWhatsNewUnread(),
      enableShortcuts: u
    };
  }, "mapper") }, (i) => {
    let r = Eo();
    return /* @__PURE__ */ s.createElement(Kd, { ...i, allStatuses: r, onMenuClick: t });
  });
}, "Sideber")), Ud = CS;

// src/manager/App.tsx
var Gd = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, pages: o, hasTab: i }) => {
  let { setMobileAboutOpen: r } = ge();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(eo, { styles: xa }), /* @__PURE__ */ s.createElement(
    $l,
=======
var t0 = s.memo(/* @__PURE__ */ a(function({ onMenuClick: t }) {
  return /* @__PURE__ */ s.createElement(he, { filter: /* @__PURE__ */ a(({ state: i, api: n }) => {
    let {
      ui: { name: r, url: l, enableShortcuts: u },
      viewMode: c,
      storyId: p,
      refId: d,
      layout: { showToolbar: g },
      // FIXME: This is the actual `index.json` index where the `index` below
      // is actually the stories hash. We should fix this up and make it consistent.
      // eslint-disable-next-line @typescript-eslint/naming-convention
      internal_index: h,
      filteredIndex: y,
      status: f,
      indexError: b,
      previewInitialized: I,
      refs: _
    } = i, m = bd(
      i,
      n,
      g,
      n.getIsFullscreen(),
      n.getIsPanelShown(),
      n.getIsNavShown(),
      u
    ), v = i.whatsNewData?.status === "SUCCESS" && !i.disableWhatsNewNotifications, S = n.getElements(Te.experimental_SIDEBAR_TOP), E = K(() => Object.
    values(S), [Object.keys(S).join("")]);
    return {
      title: r,
      url: l,
      indexJson: h,
      index: y,
      indexError: b,
      status: f,
      previewInitialized: I,
      refs: _,
      storyId: p,
      refId: d,
      viewMode: c,
      menu: m,
      menuHighlighted: v && n.isWhatsNewUnread(),
      enableShortcuts: u,
      extra: E
    };
  }, "mapper") }, (i) => /* @__PURE__ */ s.createElement(yd, { ...i, onMenuClick: t }));
}, "Sideber")), vd = t0;

// src/manager/App.tsx
var xd = /* @__PURE__ */ a(({ managerLayoutState: e, setManagerLayoutState: t, pages: o, hasTab: i }) => {
  let { setMobileAboutOpen: n } = ge();
  return /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(Ut, { styles: da }), /* @__PURE__ */ s.createElement(
    vl,
>>>>>>> main
    {
      hasTab: i,
      managerLayoutState: e,
      setManagerLayoutState: t,
<<<<<<< HEAD
      slotMain: /* @__PURE__ */ s.createElement(Bu, { id: "main", withLoader: !0 }),
      slotSidebar: /* @__PURE__ */ s.createElement(Ud, { onMenuClick: () => r((n) => !n) }),
      slotPanel: /* @__PURE__ */ s.createElement(ql, null),
      slotPages: o.map(({ id: n, render: l }) => /* @__PURE__ */ s.createElement(l, { key: n }))
=======
      slotMain: /* @__PURE__ */ s.createElement(du, { id: "main", withLoader: !0 }),
      slotSidebar: /* @__PURE__ */ s.createElement(vd, { onMenuClick: () => n((r) => !r) }),
      slotPanel: /* @__PURE__ */ s.createElement(Il, null),
      slotPages: o.map(({ id: r, render: l }) => /* @__PURE__ */ s.createElement(l, { key: r }))
>>>>>>> main
    }
  ));
}, "App");

// src/manager/provider.ts
<<<<<<< HEAD
var Ks = class Ks {
=======
var ts = class ts {
>>>>>>> main
  getElements(t) {
    throw new Error("Provider.getElements() is not implemented!");
  }
  handleAPI(t) {
    throw new Error("Provider.handleAPI() is not implemented!");
  }
  getConfig() {
    return console.error("Provider.getConfig() is not implemented!"), {};
  }
};
<<<<<<< HEAD
a(Ks, "Provider");
var Yt = Ks;

// src/manager/settings/About.tsx
var _S = x.div({
=======
a(ts, "Provider");
var Wt = ts;

// src/manager/settings/About.tsx
var o0 = x.div({
>>>>>>> main
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  marginTop: 40
<<<<<<< HEAD
}), kS = x.header({
=======
}), r0 = x.header({
>>>>>>> main
  marginBottom: 32,
  alignItems: "center",
  display: "flex",
  "> svg": {
    height: 48,
    width: "auto",
    marginRight: 8
  }
<<<<<<< HEAD
}), OS = x.div(({ theme: e }) => ({
=======
}), n0 = x.div(({ theme: e }) => ({
>>>>>>> main
  marginBottom: 24,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  color: e.base === "light" ? e.color.dark : e.color.lightest,
  fontWeight: e.typography.weight.regular,
  fontSize: e.typography.size.s2
<<<<<<< HEAD
})), PS = x.div({
=======
})), i0 = x.div({
>>>>>>> main
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  marginBottom: 24,
  marginTop: 24,
  gap: 16
<<<<<<< HEAD
}), qd = x(Pe)(({ theme: e }) => ({
=======
}), Sd = x(Me)(({ theme: e }) => ({
>>>>>>> main
  "&&": {
    fontWeight: e.typography.weight.bold,
    color: e.base === "light" ? e.color.dark : e.color.light
  },
  "&:hover": {
    color: e.base === "light" ? e.color.darkest : e.color.lightest
  }
<<<<<<< HEAD
})), Yd = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => /* @__PURE__ */ s.createElement(_S, null, /* @__PURE__ */ s.createElement(kS, null,
/* @__PURE__ */ s.createElement(ir, { alt: "Storybook" })), /* @__PURE__ */ s.createElement(Sr, { onNavigateToWhatsNew: e }), /* @__PURE__ */ s.
createElement(OS, null, /* @__PURE__ */ s.createElement(PS, null, /* @__PURE__ */ s.createElement(he, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: "https://github.com/storybookjs/storybook" }, /* @__PURE__ */ s.createElement(vo, null), "GitHub")), /* @__PURE__ */ s.createElement(
he, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "https://storybook.js.org/docs" }, /* @__PURE__ */ s.createElement(kt, { style: {
display: "inline", marginRight: 5 } }), "Documentation"))), /* @__PURE__ */ s.createElement("div", null, "Open source software maintained by",
" ", /* @__PURE__ */ s.createElement(qd, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", /* @__PURE__ */ s.createElement(
qd, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))), "AboutScreen");

// src/manager/settings/AboutPage.tsx
var Us = class Us extends Le {
=======
})), Id = /* @__PURE__ */ a(({ onNavigateToWhatsNew: e }) => /* @__PURE__ */ s.createElement(o0, null, /* @__PURE__ */ s.createElement(r0, null,
/* @__PURE__ */ s.createElement(Xo, { alt: "Storybook" })), /* @__PURE__ */ s.createElement(sr, { onNavigateToWhatsNew: e }), /* @__PURE__ */ s.
createElement(n0, null, /* @__PURE__ */ s.createElement(i0, null, /* @__PURE__ */ s.createElement(me, { asChild: !0 }, /* @__PURE__ */ s.createElement(
"a", { href: "https://github.com/storybookjs/storybook" }, /* @__PURE__ */ s.createElement(Do, null), "GitHub")), /* @__PURE__ */ s.createElement(
me, { asChild: !0 }, /* @__PURE__ */ s.createElement("a", { href: "https://storybook.js.org/docs" }, /* @__PURE__ */ s.createElement($t, { style: {
display: "inline", marginRight: 5 } }), "Documentation"))), /* @__PURE__ */ s.createElement("div", null, "Open source software maintained by",
" ", /* @__PURE__ */ s.createElement(Sd, { href: "https://www.chromatic.com/" }, "Chromatic"), " and the", " ", /* @__PURE__ */ s.createElement(
Sd, { href: "https://github.com/storybookjs/storybook/graphs/contributors" }, "Storybook Community")))), "AboutScreen");

// src/manager/settings/AboutPage.tsx
var rs = class rs extends Re {
>>>>>>> main
  componentDidMount() {
    let { api: t, notificationId: o } = this.props;
    t.clearNotification(o);
  }
  render() {
    let { children: t } = this.props;
    return t;
  }
};
<<<<<<< HEAD
a(Us, "NotificationClearer");
var $s = Us, Qd = /* @__PURE__ */ a(() => {
  let e = oe(), t = Ne(), o = A(() => {
    e.changeSettingsTab("whats-new");
  }, [e]);
  return /* @__PURE__ */ s.createElement($s, { api: e, notificationId: "update" }, /* @__PURE__ */ s.createElement(
    Yd,
=======
a(rs, "NotificationClearer");
var os = rs, Ed = /* @__PURE__ */ a(() => {
  let e = oe(), t = Pe(), o = A(() => {
    e.changeSettingsTab("whats-new");
  }, [e]);
  return /* @__PURE__ */ s.createElement(os, { api: e, notificationId: "update" }, /* @__PURE__ */ s.createElement(
    Id,
>>>>>>> main
    {
      onNavigateToWhatsNew: t.whatsNewData?.status === "SUCCESS" ? o : void 0
    }
  ));
}, "AboutPage");

// src/manager/settings/SettingsFooter.tsx
<<<<<<< HEAD
var AS = x.div(({ theme: e }) => ({
=======
var s0 = x.div(({ theme: e }) => ({
>>>>>>> main
  display: "flex",
  paddingTop: 20,
  marginTop: 20,
  borderTop: `1px solid ${e.appBorderColor}`,
  fontWeight: e.typography.weight.bold,
  "& > * + *": {
    marginLeft: 20
  }
<<<<<<< HEAD
})), DS = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(AS, { ...e }, /* @__PURE__ */ s.createElement(Pe, { secondary: !0, href: "\
https://storybook.js.org", cancel: !1, target: "_blank" }, "Docs"), /* @__PURE__ */ s.createElement(Pe, { secondary: !0, href: "https://gith\
ub.com/storybookjs/storybook", cancel: !1, target: "_blank" }, "GitHub"), /* @__PURE__ */ s.createElement(
  Pe,
=======
})), a0 = /* @__PURE__ */ a((e) => /* @__PURE__ */ s.createElement(s0, { ...e }, /* @__PURE__ */ s.createElement(Me, { secondary: !0, href: "\
https://storybook.js.org", cancel: !1, target: "_blank" }, "Docs"), /* @__PURE__ */ s.createElement(Me, { secondary: !0, href: "https://gith\
ub.com/storybookjs/storybook", cancel: !1, target: "_blank" }, "GitHub"), /* @__PURE__ */ s.createElement(
  Me,
>>>>>>> main
  {
    secondary: !0,
    href: "https://storybook.js.org/community#support",
    cancel: !1,
    target: "_blank"
  },
  "Support"
<<<<<<< HEAD
)), "SettingsFooter"), Xd = DS;

// src/manager/settings/shortcuts.tsx
var MS = x.header(({ theme: e }) => ({
=======
)), "SettingsFooter"), _d = a0;

// src/manager/settings/shortcuts.tsx
var l0 = x.header(({ theme: e }) => ({
>>>>>>> main
  marginBottom: 20,
  fontSize: e.typography.size.m3,
  fontWeight: e.typography.weight.bold,
  alignItems: "center",
  display: "flex"
<<<<<<< HEAD
})), Zd = x.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), LS = x.div({
=======
})), wd = x.div(({ theme: e }) => ({
  fontWeight: e.typography.weight.bold
})), u0 = x.div({
>>>>>>> main
  alignSelf: "flex-end",
  display: "grid",
  margin: "10px 0",
  gridTemplateColumns: "1fr 1fr 12px",
  "& > *:last-of-type": {
    gridColumn: "2 / 2",
    justifySelf: "flex-end",
    gridRow: "1"
  }
<<<<<<< HEAD
}), NS = x.div(({ theme: e }) => ({
=======
}), c0 = x.div(({ theme: e }) => ({
>>>>>>> main
  padding: "6px 0",
  borderTop: `1px solid ${e.appBorderColor}`,
  display: "grid",
  gridTemplateColumns: "1fr 1fr 0px"
<<<<<<< HEAD
})), FS = x.div({
=======
})), p0 = x.div({
>>>>>>> main
  display: "grid",
  gridTemplateColumns: "1fr",
  gridAutoRows: "minmax(auto, auto)",
  marginBottom: 20
<<<<<<< HEAD
}), RS = x.div({
  alignSelf: "center"
}), BS = x(or.Input)(
=======
}), d0 = x.div({
  alignSelf: "center"
}), f0 = x(Yo.Input)(
>>>>>>> main
  ({ valid: e, theme: t }) => e === "error" ? {
    animation: `${t.animation.jiggle} 700ms ease-out`
  } : {},
  {
    display: "flex",
    width: 80,
    flexDirection: "column",
    justifySelf: "flex-end",
    paddingLeft: 4,
    paddingRight: 4,
    textAlign: "center"
  }
<<<<<<< HEAD
), HS = Pt`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`, zS = x(Be)(
  ({ valid: e, theme: t }) => e === "valid" ? {
    color: t.color.positive,
    animation: `${HS} 2s ease forwards`
=======
), m0 = It`
0%,100% { opacity: 0; }
  50% { opacity: 1; }
`, h0 = x(We)(
  ({ valid: e, theme: t }) => e === "valid" ? {
    color: t.color.positive,
    animation: `${m0} 2s ease forwards`
>>>>>>> main
  } : {
    opacity: 0
  },
  {
    alignSelf: "center",
    display: "flex",
    marginLeft: 10,
    height: 14,
    width: 14
  }
<<<<<<< HEAD
), WS = x.div(({ theme: e }) => ({
=======
), g0 = x.div(({ theme: e }) => ({
>>>>>>> main
  fontSize: e.typography.size.s2,
  padding: "3rem 20px",
  maxWidth: 600,
  margin: "0 auto"
<<<<<<< HEAD
})), VS = {
=======
})), y0 = {
>>>>>>> main
  fullScreen: "Go full screen",
  togglePanel: "Toggle addons",
  panelPosition: "Toggle addons orientation",
  toggleNav: "Toggle sidebar",
  toolbar: "Toggle canvas toolbar",
  search: "Focus search",
  focusNav: "Focus sidebar",
  focusIframe: "Focus canvas",
  focusPanel: "Focus addons",
  prevComponent: "Previous component",
  nextComponent: "Next component",
  prevStory: "Previous story",
  nextStory: "Next story",
  shortcutsPage: "Go to shortcuts page",
  aboutPage: "Go to about page",
  collapseAll: "Collapse all items on sidebar",
  expandAll: "Expand all items on sidebar",
  remount: "Remount component"
<<<<<<< HEAD
}, jS = ["escape"];
function Gs(e) {
  return Object.entries(e).reduce(
    // @ts-expect-error (non strict)
    (t, [o, i]) => jS.includes(o) ? t : { ...t, [o]: { shortcut: i, error: !1 } },
    {}
  );
}
a(Gs, "toShortcutState");
var qs = class qs extends Le {
  constructor(o) {
    super(o);
    this.onKeyDown = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: r } = this.state;
      if (o.key === "Backspace")
        return this.restoreDefault();
      let n = ha(o);
      if (!n)
        return !1;
      let l = !!Object.entries(r).find(
        ([u, { shortcut: c }]) => u !== i && c && ga(n, c)
      );
      return this.setState({
        shortcutKeys: { ...r, [i]: { shortcut: n, error: l } }
=======
}, b0 = ["escape"];
function ns(e) {
  return Object.entries(e).reduce(
    // @ts-expect-error (non strict)
    (t, [o, i]) => b0.includes(o) ? t : { ...t, [o]: { shortcut: i, error: !1 } },
    {}
  );
}
a(ns, "toShortcutState");
var is = class is extends Re {
  constructor(o) {
    super(o);
    this.onKeyDown = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: n } = this.state;
      if (o.key === "Backspace")
        return this.restoreDefault();
      let r = ia(o);
      if (!r)
        return !1;
      let l = !!Object.entries(n).find(
        ([u, { shortcut: c }]) => u !== i && c && sa(r, c)
      );
      return this.setState({
        shortcutKeys: { ...n, [i]: { shortcut: r, error: l } }
>>>>>>> main
      });
    }, "onKeyDown");
    this.onFocus = /* @__PURE__ */ a((o) => () => {
      let { shortcutKeys: i } = this.state;
      this.setState({
        activeFeature: o,
        shortcutKeys: {
          ...i,
          [o]: { shortcut: null, error: !1 }
        }
      });
    }, "onFocus");
    this.onBlur = /* @__PURE__ */ a(async () => {
      let { shortcutKeys: o, activeFeature: i } = this.state;
      if (o[i]) {
<<<<<<< HEAD
        let { shortcut: r, error: n } = o[i];
        return !r || n ? this.restoreDefault() : this.saveShortcut();
=======
        let { shortcut: n, error: r } = o[i];
        return !n || r ? this.restoreDefault() : this.saveShortcut();
>>>>>>> main
      }
      return !1;
    }, "onBlur");
    this.saveShortcut = /* @__PURE__ */ a(async () => {
<<<<<<< HEAD
      let { activeFeature: o, shortcutKeys: i } = this.state, { setShortcut: r } = this.props;
      await r(o, i[o].shortcut), this.setState({ successField: o });
    }, "saveShortcut");
    this.restoreDefaults = /* @__PURE__ */ a(async () => {
      let { restoreAllDefaultShortcuts: o } = this.props, i = await o();
      return this.setState({ shortcutKeys: Gs(i) });
    }, "restoreDefaults");
    this.restoreDefault = /* @__PURE__ */ a(async () => {
      let { activeFeature: o, shortcutKeys: i } = this.state, { restoreDefaultShortcut: r } = this.props, n = await r(o);
      return this.setState({
        shortcutKeys: {
          ...i,
          ...Gs({ [o]: n })
=======
      let { activeFeature: o, shortcutKeys: i } = this.state, { setShortcut: n } = this.props;
      await n(o, i[o].shortcut), this.setState({ successField: o });
    }, "saveShortcut");
    this.restoreDefaults = /* @__PURE__ */ a(async () => {
      let { restoreAllDefaultShortcuts: o } = this.props, i = await o();
      return this.setState({ shortcutKeys: ns(i) });
    }, "restoreDefaults");
    this.restoreDefault = /* @__PURE__ */ a(async () => {
      let { activeFeature: o, shortcutKeys: i } = this.state, { restoreDefaultShortcut: n } = this.props, r = await n(o);
      return this.setState({
        shortcutKeys: {
          ...i,
          ...ns({ [o]: r })
>>>>>>> main
        }
      });
    }, "restoreDefault");
    this.displaySuccessMessage = /* @__PURE__ */ a((o) => {
<<<<<<< HEAD
      let { successField: i, shortcutKeys: r } = this.state;
      return o === i && r[o].error === !1 ? "valid" : void 0;
    }, "displaySuccessMessage");
    this.displayError = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: r } = this.state;
      return o === i && r[o].error === !0 ? "error" : void 0;
    }, "displayError");
    this.renderKeyInput = /* @__PURE__ */ a(() => {
      let { shortcutKeys: o, addonsShortcutLabels: i } = this.state;
      return Object.entries(o).map(([n, { shortcut: l }]) => /* @__PURE__ */ s.createElement(NS, { key: n }, /* @__PURE__ */ s.createElement(
      RS, null, VS[n] || i[n]), /* @__PURE__ */ s.createElement(
        BS,
        {
          spellCheck: "false",
          valid: this.displayError(n),
          className: "modalInput",
          onBlur: this.onBlur,
          onFocus: this.onFocus(n),
          onKeyDown: this.onKeyDown,
          value: l ? Ye(l) : "",
          placeholder: "Type keys",
          readOnly: !0
        }
      ), /* @__PURE__ */ s.createElement(zS, { valid: this.displaySuccessMessage(n) })));
    }, "renderKeyInput");
    this.renderKeyForm = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(FS, null, /* @__PURE__ */ s.createElement(LS, null, /* @__PURE__ */ s.
    createElement(Zd, null, "Commands"), /* @__PURE__ */ s.createElement(Zd, null, "Shortcut")), this.renderKeyInput()), "renderKeyForm");
=======
      let { successField: i, shortcutKeys: n } = this.state;
      return o === i && n[o].error === !1 ? "valid" : void 0;
    }, "displaySuccessMessage");
    this.displayError = /* @__PURE__ */ a((o) => {
      let { activeFeature: i, shortcutKeys: n } = this.state;
      return o === i && n[o].error === !0 ? "error" : void 0;
    }, "displayError");
    this.renderKeyInput = /* @__PURE__ */ a(() => {
      let { shortcutKeys: o, addonsShortcutLabels: i } = this.state;
      return Object.entries(o).map(([r, { shortcut: l }]) => /* @__PURE__ */ s.createElement(c0, { key: r }, /* @__PURE__ */ s.createElement(
      d0, null, y0[r] || i[r]), /* @__PURE__ */ s.createElement(
        f0,
        {
          spellCheck: "false",
          valid: this.displayError(r),
          className: "modalInput",
          onBlur: this.onBlur,
          onFocus: this.onFocus(r),
          onKeyDown: this.onKeyDown,
          value: l ? qe(l) : "",
          placeholder: "Type keys",
          readOnly: !0
        }
      ), /* @__PURE__ */ s.createElement(h0, { valid: this.displaySuccessMessage(r) })));
    }, "renderKeyInput");
    this.renderKeyForm = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(p0, null, /* @__PURE__ */ s.createElement(u0, null, /* @__PURE__ */ s.
    createElement(wd, null, "Commands"), /* @__PURE__ */ s.createElement(wd, null, "Shortcut")), this.renderKeyInput()), "renderKeyForm");
>>>>>>> main
    this.state = {
      // @ts-expect-error (non strict)
      activeFeature: void 0,
      // @ts-expect-error (non strict)
      successField: void 0,
      // The initial shortcutKeys that come from props are the defaults/what was saved
      // As the user interacts with the page, the state stores the temporary, unsaved shortcuts
      // This object also includes the error attached to each shortcut
      // @ts-expect-error (non strict)
<<<<<<< HEAD
      shortcutKeys: Gs(o.shortcutKeys),
=======
      shortcutKeys: ns(o.shortcutKeys),
>>>>>>> main
      addonsShortcutLabels: o.addonsShortcutLabels
    };
  }
  render() {
    let o = this.renderKeyForm();
<<<<<<< HEAD
    return /* @__PURE__ */ s.createElement(WS, null, /* @__PURE__ */ s.createElement(MS, null, "Keyboard shortcuts"), o, /* @__PURE__ */ s.createElement(
      he,
=======
    return /* @__PURE__ */ s.createElement(g0, null, /* @__PURE__ */ s.createElement(l0, null, "Keyboard shortcuts"), o, /* @__PURE__ */ s.createElement(
      me,
>>>>>>> main
      {
        variant: "outline",
        size: "small",
        id: "restoreDefaultsHotkeys",
        onClick: this.restoreDefaults
      },
      "Restore defaults"
<<<<<<< HEAD
    ), /* @__PURE__ */ s.createElement(Xd, null));
  }
};
a(qs, "ShortcutsScreen");
var vn = qs;

// src/manager/settings/ShortcutsPage.tsx
var Jd = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(me, null, ({
=======
    ), /* @__PURE__ */ s.createElement(_d, null));
  }
};
a(is, "ShortcutsScreen");
var en = is;

// src/manager/settings/ShortcutsPage.tsx
var Td = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(he, null, ({
>>>>>>> main
  api: {
    getShortcutKeys: e,
    getAddonsShortcutLabels: t,
    setShortcut: o,
    restoreDefaultShortcut: i,
<<<<<<< HEAD
    restoreAllDefaultShortcuts: r
  }
}) => /* @__PURE__ */ s.createElement(
  vn,
=======
    restoreAllDefaultShortcuts: n
  }
}) => /* @__PURE__ */ s.createElement(
  en,
>>>>>>> main
  {
    shortcutKeys: e(),
    addonsShortcutLabels: t(),
    setShortcut: o,
    restoreDefaultShortcut: i,
<<<<<<< HEAD
    restoreAllDefaultShortcuts: r
=======
    restoreAllDefaultShortcuts: n
>>>>>>> main
  }
)), "ShortcutsPage");

// src/manager/settings/whats_new.tsx
<<<<<<< HEAD
var ef = x.div({
=======
var Cd = x.div({
>>>>>>> main
  top: "50%",
  position: "absolute",
  transform: "translateY(-50%)",
  width: "100%",
  textAlign: "center"
<<<<<<< HEAD
}), KS = x.div({
  position: "relative",
  height: "32px"
}), tf = x.div(({ theme: e }) => ({
=======
}), v0 = x.div({
  position: "relative",
  height: "32px"
}), kd = x.div(({ theme: e }) => ({
>>>>>>> main
  paddingTop: "12px",
  color: e.textMutedColor,
  maxWidth: "295px",
  margin: "0 auto",
  fontSize: `${e.typography.size.s1}px`,
  lineHeight: "16px"
<<<<<<< HEAD
})), $S = x.div(({ theme: e }) => ({
=======
})), x0 = x.div(({ theme: e }) => ({
>>>>>>> main
  position: "absolute",
  width: "100%",
  bottom: "40px",
  background: e.background.bar,
  fontSize: "13px",
  borderTop: "1px solid",
  borderColor: e.appBorderColor,
  padding: "8px 12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between"
<<<<<<< HEAD
})), US = /* @__PURE__ */ a(({
=======
})), S0 = /* @__PURE__ */ a(({
>>>>>>> main
  isNotificationsEnabled: e,
  onToggleNotifications: t,
  onCopyLink: o
}) => {
<<<<<<< HEAD
  let i = De(), [r, n] = K("Copy Link"), l = /* @__PURE__ */ a(() => {
    o(), n("Copied!"), setTimeout(() => n("Copy Link"), 4e3);
  }, "copyLink");
  return /* @__PURE__ */ s.createElement($S, null, /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
  /* @__PURE__ */ s.createElement(Nn, { color: i.color.mediumdark }), /* @__PURE__ */ s.createElement("div", null, "Share this with your tea\
m."), /* @__PURE__ */ s.createElement(he, { onClick: l, size: "small", variant: "ghost" }, r)), e ? /* @__PURE__ */ s.createElement(he, { size: "\
small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(An, null), "Hide notifications") : /* @__PURE__ */ s.createElement(he,
  { size: "small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(Dn, null), "Show notifications"));
}, "WhatsNewFooter"), GS = x.iframe(
=======
  let i = Ae(), [n, r] = $("Copy Link"), l = /* @__PURE__ */ a(() => {
    o(), r("Copied!"), setTimeout(() => r("Copy Link"), 4e3);
  }, "copyLink");
  return /* @__PURE__ */ s.createElement(x0, null, /* @__PURE__ */ s.createElement("div", { style: { display: "flex", alignItems: "center", gap: 10 } },
  /* @__PURE__ */ s.createElement(Cs, { color: i.color.mediumdark }), /* @__PURE__ */ s.createElement("div", null, "Share this with your tea\
m."), /* @__PURE__ */ s.createElement(me, { onClick: l, size: "small", variant: "ghost" }, n)), e ? /* @__PURE__ */ s.createElement(me, { size: "\
small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(Es, null), "Hide notifications") : /* @__PURE__ */ s.createElement(me,
  { size: "small", variant: "ghost", onClick: t }, /* @__PURE__ */ s.createElement(_s, null), "Show notifications"));
}, "WhatsNewFooter"), I0 = x.iframe(
>>>>>>> main
  {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    border: 0,
    margin: 0,
    padding: 0,
    width: "100%",
    height: "calc(100% - 80px)",
    background: "white"
  },
  ({ isLoaded: e }) => ({ visibility: e ? "visible" : "hidden" })
<<<<<<< HEAD
), qS = x((e) => /* @__PURE__ */ s.createElement(go, { ...e }))(({ theme: e }) => ({
=======
), E0 = x((e) => /* @__PURE__ */ s.createElement(Oo, { ...e }))(({ theme: e }) => ({
>>>>>>> main
  color: e.textMutedColor,
  width: 32,
  height: 32,
  margin: "0 auto"
<<<<<<< HEAD
})), YS = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(ef, null, /* @__PURE__ */ s.createElement(KS, null, /* @__PURE__ */ s.createElement(
rr, null)), /* @__PURE__ */ s.createElement(tf, null, "Loading...")), "WhatsNewLoader"), QS = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(
ef, null, /* @__PURE__ */ s.createElement(qS, null), /* @__PURE__ */ s.createElement(tf, null, "The page couldn't be loaded. Check your inte\
rnet connection and try again.")), "MaxWaitTimeMessaging"), XS = /* @__PURE__ */ a(({
=======
})), _0 = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Cd, null, /* @__PURE__ */ s.createElement(v0, null, /* @__PURE__ */ s.createElement(
qo, null)), /* @__PURE__ */ s.createElement(kd, null, "Loading...")), "WhatsNewLoader"), w0 = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(
Cd, null, /* @__PURE__ */ s.createElement(E0, null), /* @__PURE__ */ s.createElement(kd, null, "The page couldn't be loaded. Check your inte\
rnet connection and try again.")), "MaxWaitTimeMessaging"), T0 = /* @__PURE__ */ a(({
>>>>>>> main
  didHitMaxWaitTime: e,
  isLoaded: t,
  onLoad: o,
  url: i,
<<<<<<< HEAD
  onCopyLink: r,
  onToggleNotifications: n,
  isNotificationsEnabled: l
}) => /* @__PURE__ */ s.createElement(Ee, null, !t && !e && /* @__PURE__ */ s.createElement(YS, null), e ? /* @__PURE__ */ s.createElement(QS,
null) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(GS, { isLoaded: t, onLoad: o, src: i, title: "What\
's new?" }), /* @__PURE__ */ s.createElement(
  US,
  {
    isNotificationsEnabled: l,
    onToggleNotifications: n,
    onCopyLink: r
  }
))), "PureWhatsNewScreen"), ZS = 1e4, of = /* @__PURE__ */ a(() => {
  let e = oe(), t = Ne(), { whatsNewData: o } = t, [i, r] = K(!1), [n, l] = K(!1);
  if (V(() => {
    let c = setTimeout(() => !i && l(!0), ZS);
=======
  onCopyLink: n,
  onToggleNotifications: r,
  isNotificationsEnabled: l
}) => /* @__PURE__ */ s.createElement(_e, null, !t && !e && /* @__PURE__ */ s.createElement(_0, null), e ? /* @__PURE__ */ s.createElement(w0,
null) : /* @__PURE__ */ s.createElement(s.Fragment, null, /* @__PURE__ */ s.createElement(I0, { isLoaded: t, onLoad: o, src: i, title: "What\
's new?" }), /* @__PURE__ */ s.createElement(
  S0,
  {
    isNotificationsEnabled: l,
    onToggleNotifications: r,
    onCopyLink: n
  }
))), "PureWhatsNewScreen"), C0 = 1e4, Od = /* @__PURE__ */ a(() => {
  let e = oe(), t = Pe(), { whatsNewData: o } = t, [i, n] = $(!1), [r, l] = $(!1);
  if (j(() => {
    let c = setTimeout(() => !i && l(!0), C0);
>>>>>>> main
    return () => clearTimeout(c);
  }, [i]), o?.status !== "SUCCESS")
    return null;
  let u = !o.disableWhatsNewNotifications;
  return /* @__PURE__ */ s.createElement(
<<<<<<< HEAD
    XS,
    {
      didHitMaxWaitTime: n,
      isLoaded: i,
      onLoad: () => {
        e.whatsNewHasBeenRead(), r(!0);
=======
    T0,
    {
      didHitMaxWaitTime: r,
      isLoaded: i,
      onLoad: () => {
        e.whatsNewHasBeenRead(), n(!0);
>>>>>>> main
      },
      url: o.url,
      isNotificationsEnabled: u,
      onCopyLink: () => {
        navigator.clipboard?.writeText(o.blogUrl ?? o.url);
      },
      onToggleNotifications: () => {
        u ? se.confirm("All update notifications will no longer be shown. Are you sure?") && e.toggleWhatsNewNotifications() : e.toggleWhatsNewNotifications();
      }
    }
  );
}, "WhatsNewScreen");

// src/manager/settings/whats_new_page.tsx
<<<<<<< HEAD
var rf = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(of, null), "WhatsNewPage");

// src/manager/settings/index.tsx
var { document: nf } = se, JS = x.div(({ theme: e }) => ({
=======
var Pd = /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Od, null), "WhatsNewPage");

// src/manager/settings/index.tsx
var { document: Ad } = se, k0 = x.div(({ theme: e }) => ({
>>>>>>> main
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  height: 40,
  boxShadow: `${e.appBorderColor}  0 -1px 0 0 inset`,
  background: e.barBg,
  paddingRight: 8
<<<<<<< HEAD
})), Ys = s.memo(/* @__PURE__ */ a(function({
=======
})), ss = s.memo(/* @__PURE__ */ a(function({
>>>>>>> main
  changeTab: t,
  id: o,
  title: i
}) {
<<<<<<< HEAD
  return /* @__PURE__ */ s.createElement(pr, null, ({ path: r }) => {
    let n = r.includes(`settings/${o}`);
    return /* @__PURE__ */ s.createElement(
      ar,
      {
        id: `tabbutton-${o}`,
        className: ["tabbutton"].concat(n ? ["tabbutton-active"] : []).join(" "),
        type: "button",
        key: "id",
        active: n,
=======
  return /* @__PURE__ */ s.createElement(Wo, null, ({ path: n }) => {
    let r = n.includes(`settings/${o}`);
    return /* @__PURE__ */ s.createElement(
      Jo,
      {
        id: `tabbutton-${o}`,
        className: ["tabbutton"].concat(r ? ["tabbutton-active"] : []).join(" "),
        type: "button",
        key: "id",
        active: r,
>>>>>>> main
        onClick: () => t(o),
        role: "tab"
      },
      i
    );
  });
<<<<<<< HEAD
}, "TabBarButton")), ew = x(nr)(({ theme: e }) => ({
  background: e.background.content
})), tw = /* @__PURE__ */ a(({ changeTab: e, onClose: t, enableShortcuts: o = !0, enableWhatsNew: i }) => (s.useEffect(() => {
  let r = /* @__PURE__ */ a((n) => {
    !o || n.repeat || St(!1, n) && $e("Escape", n) && (n.preventDefault(), t());
  }, "handleEscape");
  return nf.addEventListener("keydown", r), () => nf.removeEventListener("keydown", r);
}, [o, t]), /* @__PURE__ */ s.createElement(Ee, null, /* @__PURE__ */ s.createElement(JS, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(
sr, { role: "tablist" }, /* @__PURE__ */ s.createElement(Ys, { id: "about", title: "About", changeTab: e }), i && /* @__PURE__ */ s.createElement(
Ys, { id: "whats-new", title: "What's new?", changeTab: e }), /* @__PURE__ */ s.createElement(Ys, { id: "shortcuts", title: "Keyboard shortc\
uts", changeTab: e })), /* @__PURE__ */ s.createElement(
  ee,
  {
    onClick: (r) => (r.preventDefault(), t()),
    title: "Close settings page"
  },
  /* @__PURE__ */ s.createElement(je, null)
)), /* @__PURE__ */ s.createElement(ew, { vertical: !0, horizontal: !1 }, /* @__PURE__ */ s.createElement(To, { path: "about" }, /* @__PURE__ */ s.
createElement(Qd, { key: "about" })), /* @__PURE__ */ s.createElement(To, { path: "whats-new" }, /* @__PURE__ */ s.createElement(rf, { key: "\
whats-new" })), /* @__PURE__ */ s.createElement(To, { path: "shortcuts" }, /* @__PURE__ */ s.createElement(Jd, { key: "shortcuts" }))))), "P\
ages"), ow = /* @__PURE__ */ a(() => {
  let e = oe(), t = Ne(), o = /* @__PURE__ */ a((i) => e.changeSettingsTab(i), "changeTab");
  return /* @__PURE__ */ s.createElement(
    tw,
=======
}, "TabBarButton")), O0 = x(Qo)(({ theme: e }) => ({
  background: e.background.content
})), P0 = /* @__PURE__ */ a(({ changeTab: e, onClose: t, enableShortcuts: o = !0, enableWhatsNew: i }) => (s.useEffect(() => {
  let n = /* @__PURE__ */ a((r) => {
    !o || r.repeat || vt(!1, r) && Ve("Escape", r) && (r.preventDefault(), t());
  }, "handleEscape");
  return Ad.addEventListener("keydown", n), () => Ad.removeEventListener("keydown", n);
}, [o, t]), /* @__PURE__ */ s.createElement(_e, null, /* @__PURE__ */ s.createElement(k0, { className: "sb-bar" }, /* @__PURE__ */ s.createElement(
Zo, { role: "tablist" }, /* @__PURE__ */ s.createElement(ss, { id: "about", title: "About", changeTab: e }), i && /* @__PURE__ */ s.createElement(
ss, { id: "whats-new", title: "What's new?", changeTab: e }), /* @__PURE__ */ s.createElement(ss, { id: "shortcuts", title: "Keyboard shortc\
uts", changeTab: e })), /* @__PURE__ */ s.createElement(
  te,
  {
    onClick: (n) => (n.preventDefault(), t()),
    title: "Close settings page"
  },
  /* @__PURE__ */ s.createElement(Ge, null)
)), /* @__PURE__ */ s.createElement(O0, { vertical: !0, horizontal: !1 }, /* @__PURE__ */ s.createElement(so, { path: "about" }, /* @__PURE__ */ s.
createElement(Ed, { key: "about" })), /* @__PURE__ */ s.createElement(so, { path: "whats-new" }, /* @__PURE__ */ s.createElement(Pd, { key: "\
whats-new" })), /* @__PURE__ */ s.createElement(so, { path: "shortcuts" }, /* @__PURE__ */ s.createElement(Td, { key: "shortcuts" }))))), "P\
ages"), A0 = /* @__PURE__ */ a(() => {
  let e = oe(), t = Pe(), o = /* @__PURE__ */ a((i) => e.changeSettingsTab(i), "changeTab");
  return /* @__PURE__ */ s.createElement(
    P0,
>>>>>>> main
    {
      enableWhatsNew: t.whatsNewData?.status === "SUCCESS",
      enableShortcuts: t.ui.enableShortcuts,
      changeTab: o,
      onClose: e.closeSettings
    }
  );
<<<<<<< HEAD
}, "SettingsPages"), sf = {
  id: "settings",
  url: "/settings/",
  title: "Settings",
  type: be.experimental_PAGE,
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(To, { path: "/settings/", startsWith: !0 }, /* @__PURE__ */ s.createElement(
  ow, null)), "render")
};

// src/manager/index.tsx
ti.displayName = "ThemeProvider";
yt.displayName = "HelmetProvider";
var rw = /* @__PURE__ */ a(({ provider: e }) => /* @__PURE__ */ s.createElement(yt, { key: "helmet.Provider" }, /* @__PURE__ */ s.createElement(
Va, { key: "location.provider" }, /* @__PURE__ */ s.createElement(nw, { provider: e }))), "Root"), nw = /* @__PURE__ */ a(({ provider: e }) => {
  let t = Ka();
  return /* @__PURE__ */ s.createElement(pr, { key: "location.consumer" }, (o) => /* @__PURE__ */ s.createElement(
    ma,
=======
}, "SettingsPages"), Dd = {
  id: "settings",
  url: "/settings/",
  title: "Settings",
  type: ve.experimental_PAGE,
  render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(so, { path: "/settings/", startsWith: !0 }, /* @__PURE__ */ s.createElement(
  A0, null)), "render")
};

// src/manager/index.tsx
cn.displayName = "ThemeProvider";
ht.displayName = "HelmetProvider";
var D0 = /* @__PURE__ */ a(({ provider: e }) => /* @__PURE__ */ s.createElement(ht, { key: "helmet.Provider" }, /* @__PURE__ */ s.createElement(
ua, { key: "location.provider" }, /* @__PURE__ */ s.createElement(M0, { provider: e }))), "Root"), M0 = /* @__PURE__ */ a(({ provider: e }) => {
  let t = pa();
  return /* @__PURE__ */ s.createElement(Wo, { key: "location.consumer" }, (o) => /* @__PURE__ */ s.createElement(
    na,
>>>>>>> main
    {
      key: "manager",
      provider: e,
      ...o,
      navigate: t,
      docsOptions: se?.DOCS_OPTIONS || {}
    },
    (i) => {
<<<<<<< HEAD
      let { state: r, api: n } = i, l = A(
        (c) => {
          n.setSizes(c);
        },
        [n]
      ), u = U(
        () => [sf, ...Object.values(n.getElements(be.experimental_PAGE))],
        [Object.keys(n.getElements(be.experimental_PAGE)).join()]
      );
      return /* @__PURE__ */ s.createElement(ti, { key: "theme.provider", theme: Ia(r.theme) }, /* @__PURE__ */ s.createElement(gl, null, /* @__PURE__ */ s.
      createElement(
        Gd,
=======
      let { state: n, api: r } = i, l = A(
        (c) => {
          r.setSizes(c);
        },
        [r]
      ), u = K(
        () => [Dd, ...Object.values(r.getElements(ve.experimental_PAGE))],
        [Object.keys(r.getElements(ve.experimental_PAGE)).join()]
      );
      return /* @__PURE__ */ s.createElement(cn, { key: "theme.provider", theme: fa(n.theme) }, /* @__PURE__ */ s.createElement(Wa, null, /* @__PURE__ */ s.
      createElement(
        xd,
>>>>>>> main
        {
          key: "app",
          pages: u,
          managerLayoutState: {
<<<<<<< HEAD
            ...r.layout,
            viewMode: r.viewMode
          },
          hasTab: !!n.getQueryParam("tab"),
=======
            ...n.layout,
            viewMode: n.viewMode
          },
          hasTab: !!r.getQueryParam("tab"),
>>>>>>> main
          setManagerLayoutState: l
        }
      )));
    }
  ));
}, "Main");
<<<<<<< HEAD
function af(e, t) {
  if (!(t instanceof Yt))
    throw new Wa();
  za(e).render(/* @__PURE__ */ s.createElement(rw, { key: "root", provider: t }));
}
a(af, "renderStorybookUI");

// src/manager/runtime.tsx
var iw = "CORE/WS_DISCONNECTED";
He.register(
  gt,
  () => He.add(gt, {
    title: gt,
    type: be.TOOL,
    match: /* @__PURE__ */ a(({ tabId: e }) => !e, "match"),
    render: /* @__PURE__ */ a(() => /* @__PURE__ */ s.createElement(Ha, null), "render")
  })
);
var Xs = class Xs extends Yt {
  constructor() {
    super();
    this.wsDisconnected = !1;
    let o = oa({ page: "manager" });
    He.setChannel(o), o.emit(ia), this.addons = He, this.channel = o, se.__STORYBOOK_ADDONS_CHANNEL__ = o;
=======
function Md(e, t) {
  if (!(t instanceof Wt))
    throw new ha();
  la(e).render(/* @__PURE__ */ s.createElement(D0, { key: "root", provider: t }));
}
a(Md, "renderStorybookUI");

// src/manager/runtime.tsx
var L0 = "CORE/WS_DISCONNECTED", ls = class ls extends Wt {
  constructor() {
    super();
    this.wsDisconnected = !1;
    let o = fs({ page: "manager" });
    Ye.setChannel(o), o.emit(qs), this.addons = Ye, this.channel = o, se.__STORYBOOK_ADDONS_CHANNEL__ = o;
>>>>>>> main
  }
  getElements(o) {
    return this.addons.getElements(o);
  }
  getConfig() {
    return this.addons.getConfig();
  }
  handleAPI(o) {
<<<<<<< HEAD
    this.addons.loadAddons(o), this.channel.on(sa, (i) => {
      this.wsDisconnected = !0, o.addNotification({
        id: iw,
=======
    this.addons.loadAddons(o), this.channel.on(Qs, (i) => {
      this.wsDisconnected = !0, o.addNotification({
        id: L0,
>>>>>>> main
        content: {
          headline: i.code === 3008 ? "Server timed out" : "Connection lost",
          subHeadline: "Please restart your Storybook server and reload the page"
        },
<<<<<<< HEAD
        icon: /* @__PURE__ */ s.createElement(Mn, { color: va.negative }),
=======
        icon: /* @__PURE__ */ s.createElement(ws, { color: Us.negative }),
>>>>>>> main
        link: void 0
      });
    });
  }
};
<<<<<<< HEAD
a(Xs, "ReactProvider");
var Qs = Xs, { document: sw } = se, aw = sw.getElementById("root");
setTimeout(() => {
  af(aw, new Qs());
=======
a(ls, "ReactProvider");
var as = ls, { document: N0 } = se, R0 = N0.getElementById("root");
setTimeout(() => {
  Md(R0, new as());
>>>>>>> main
}, 0);
