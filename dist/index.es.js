import * as te from "react";
import qr, { createContext as Un, forwardRef as Hn, useContext as Yn, memo as qa } from "react";
var Kr;
(function(e) {
  e.ROW = "row", e.COLUMN = "column";
})(Kr || (Kr = {}));
var He;
(function(e) {
  e.TOP = "top", e.RIGHT = "right", e.BOTTOM = "bottom", e.LEFT = "left";
})(He || (He = {}));
var mn;
(function(e) {
  e.NORMAL = "normal", e.FLEX_START = "flex-start", e.FLEX_END = "flex-end", e.CENTER = "center", e.BASELINE = "baseline", e.STRETCH = "stretch", e.START = "start", e.END = "end", e.SELF_START = "self-start", e.SELF_END = "self-end", e.FIRST_BASELINE = "first baseline", e.LAST_BASELINE = "last baseline", e.SAFE_CENTER = "safe center", e.UNSAFE_CENTER = "unsafe center", e.SAFE_RIGHT = "safe right", e.UNSAFE_RIGHT = "unsafe right", e.SAFE_END = "safe end", e.UNSAFE_END = "unsafe end", e.SAFE_SELF_END = "safe self-end", e.UNSAFE_SELF_END = "unsafe self-end", e.SAFE_FLEX_END = "safe flex-end", e.UNSAFE_FLEX_END = "unsafe flex-end";
})(mn || (mn = {}));
var vn;
(function(e) {
  e.START = "start", e.END = "end", e.FLEX_START = "flex-start", e.FLEX_END = "flex-end", e.CENTER = "center", e.LEFT = "left", e.RIGHT = "right", e.SPACE_BETWEEN = "space-between", e.SPACE_AROUND = "space-around", e.SPACE_EVENLY = "space-evenly", e.STRETCH = "stretch";
})(vn || (vn = {}));
var H;
(function(e) {
  e.AUTO = "auto", e.PERCENT = "%", e.FN = "fn", e.PX = "px", e.FR = "fr", e.REM = "rem", e.VH = "vh", e.VW = "vw", e.PC = "pc", e.CM = "cm", e.MM = "mm", e.IN = "in", e.PT = "pt", e.CH = "ch", e.EM = "em", e.V_MIN = "vmin", e.V_MAX = "vmax";
})(H || (H = {}));
var yn;
(function(e) {
  e.DARK = "dark", e.LIGHT = "light";
})(yn || (yn = {}));
const Es = /(^\{|\}$)/g, Ss = "0px", Ka = "1", ks = "100%", Nt = "1fr", Ot = "1fr", Yt = "100%", Gt = "100%", Rs = "row", Ja = "flex-start", Qa = "flex-start", ws = "1fr / 1fr", Gn = 0, Ts = "gray", Za = 100, Dt = "grid_1", xs = {
  MAX: 20,
  MIN: 0,
  DEFAULT: 10
}, eo = {
  dark: {
    main: "#282c34",
    gradient: "#2c303a"
  },
  light: {
    main: "#f1f1f1",
    gradient: "#ececec"
  }
}, Cs = {
  MAX: 1e3,
  MIN: 0,
  DEFAULT: Gn
}, pr = {
  direction: Kr.ROW,
  gridGap: Ka,
  repeatCount: Gn,
  className: "",
  margin: "0",
  w: Gt,
  h: Yt,
  alignItems: Qa,
  justifyContent: Ja,
  withOpacity: !1,
  styles: "{}"
}, _n = {
  margin: "0",
  w: Gt,
  h: Yt,
  r: "0px",
  skeletonW: Za
}, Os = {
  [H.FN]: "",
  [H.AUTO]: "",
  [H.PERCENT]: "100",
  [H.PX]: "100",
  [H.FR]: "1",
  [H.REM]: "1",
  [H.VH]: "100",
  [H.VW]: "100",
  [H.PC]: "1",
  [H.CM]: "1",
  [H.MM]: "100",
  [H.IN]: "1",
  [H.PT]: "1",
  [H.CH]: "1",
  [H.EM]: "1",
  [H.V_MIN]: "100",
  [H.V_MAX]: "100"
}, ro = (e) => ({
  mobile: { ...e },
  tablet: { ...e }
}), As = (e, r) => r !== "desktop" && r ? {
  ...e.responsive[r],
  ...Object.hasOwn(e, "children") && { children: e.children },
  ...Object.hasOwn(e, "skeletons") && {
    skeletons: e.skeletons
  }
} : e, Ps = () => Object.keys(pr).filter((e) => isNaN(Number(e))).reduce(
  (e, r) => (e[r] = pr[r], e),
  { responsive: ro(pr) }
), Xn = (e) => {
  var r;
  return ((r = e.replace(/\[|\]/g, "")) == null ? void 0 : r.split(",")) || [];
}, Is = (e, r, t) => {
  let [n, o, l, f] = Xn(r);
  switch (e) {
    case He.TOP:
      n = t;
      break;
    case He.RIGHT:
      o = t;
      break;
    case He.BOTTOM:
      l = t;
      break;
    case He.LEFT:
      f = t;
      break;
  }
  return [n, o, l, f];
}, Ns = (e) => {
  try {
    if (typeof e == "function")
      return {
        value: "function...",
        unit: H.FN
      };
    if (e === H.AUTO)
      return {
        value: H.AUTO,
        unit: H.AUTO
      };
    const r = e.match(/^([\d.]+)([a-zA-Z%]+)$/);
    if (r)
      return {
        value: r[1],
        unit: r[2]
      };
    if (Object.values(H).includes(e))
      return {
        value: "",
        unit: e
      };
    throw "not matched";
  } catch {
    return {
      value: "",
      unit: ""
    };
  }
}, to = (e) => !isNaN(parseFloat(String(e))) && isFinite(Number(e)), Ds = (e) => (() => {
  let [t, n, o, l] = Xn(e);
  return t && !n && !o && !l ? (n = t, o = t, l = t) : (t || (t = o || "0"), n || (n = l || "0"), o || (o = t || "0"), l || (l = n || "0")), [t, n, o, l].reduce((f, d) => (f += to(d) ? d + "px " : d + " ", f), "");
})(), no = (e, r) => e.reduce((t, n, o) => {
  if (typeof n.w == "function") {
    const f = n.w();
    t += (Array.isArray(n) ? Nt : f) + " ", r(o, "w", f);
  } else
    t += Array.isArray(n) ? Nt : (n.w === Gt ? "1fr" : n.w) + " ";
  return t;
}, "1fr / "), ao = (e, r, t) => e.reduce((n, o, l) => {
  if (typeof o.h == "function") {
    const d = o.h();
    n += (r === "center" ? Ot : d) + " ", t(l, "h", d);
  } else
    n += (r === "center" || !o.h || o.h === Yt ? Ot : o.h) + " ";
  return n;
}, "") + " / 1fr", $s = (e, r, t) => e > 0 ? {
  path: r,
  ...t > 0 ? {
    isRepeated: !0,
    key: r + "_repeated_" + t
  } : { key: r }
} : { path: r, key: r }, En = (e, r) => r > 0 && e[0] ? [].constructor(r).fill(e[0]) : e, Fs = (e, r, t, n) => (r || t) > 0 && n ? 1 - 1 / (r || t) * e : 1, Bs = (e) => {
  const r = {};
  for (const t in e) {
    const n = t.replace(
      /-([a-z])/g,
      (o) => o[1].toUpperCase()
    );
    r[n] = e[t];
  }
  return r;
}, js = ({
  grid: e,
  hasChildren: r,
  skeletons: t,
  children: n,
  repeatCount: o,
  reservedProps: l,
  keyLevel: f
}) => e.direction === Kr.ROW ? no(
  (r ? n : En(t, o)).map(({ w: d = Nt }) => ({ w: d })),
  (d, h, g) => {
    l[`${f}_${d + 1}`] || (l[`${f}_${d + 1}`] = {}), l[`${f}_${d + 1}`][h] = g;
  }
) : ao(
  r ? n : En(t, o),
  e.alignItems,
  (d, h, g) => {
    l[`${f}_${d + 1}`] || (l[`${f}_${d + 1}`] = {}), l[`${f}_${d + 1}`][h] = g;
  }
), Ls = (e, r) => {
  if (!r.length) return 1;
  const t = r.join("").split(e).filter((o) => o !== "").map((o) => +o), n = Math.max(...t);
  for (let o = 1; o <= n; o++)
    if (!t.includes(o))
      return o;
  return n + 1;
}, oo = (e, r) => !(e != null && e.includes("repeated")) && !(r != null && r.includes("repeated")), Ws = ({
  keyLevel: e,
  highlightedNode: r,
  parent: t,
  isDark: n,
  hasChildren: o
}) => e === r && oo(e, t) ? {
  boxShadow: "0px 0px 1px 1px var(--chakra-colors-brand-500)"
} : t === r ? {
  boxShadow: `0px 0px 1px 1px inset ${n ? "#323441" : "#e6e6e6"}`
} : o ? {} : {
  boxShadow: `0px 0px 0px 1px inset ${n ? "rgba(50,52,65,0.24)" : "rgba(230,230,230,0.27)"}`
}, Ms = (e, r, t) => {
  if (e) {
    const n = e.getAttribute("data-key") || "", o = n.split("_").filter($t);
    if (n === r) {
      if (n === Dt) return;
      t([...o].slice(0, o.length - 1).join("_"));
      return;
    }
    if (r.indexOf(n) > -1) {
      t(n);
      return;
    }
    const l = r.split("_").filter($t), f = (h) => h.length === l.length && [...h].slice(0, h.length - 1).join("_") === [...l].slice(0, l.length - 1).join("_"), d = (h) => [...h].slice(0, h.length - 1).join("_") === [...l].join("_");
    if (d(o) || f(o)) {
      t(n);
      return;
    }
    for (let h = o.length - 1; h > 1; h--) {
      const g = [...o].splice(0, h);
      if (f(g) || d(g)) {
        t(g.join("_"));
        return;
      }
      if (g.join("_") === r) {
        t(g.concat(o[h]).join("_"));
        return;
      }
    }
    t(Dt);
  }
}, zs = (e) => {
  if (e === Dt) return e;
  const r = e.split("_").filter($t);
  return r.pop(), r.join("_");
}, Vs = (e) => {
  let r, t;
  document.createRange ? (r = document.createRange(), r.selectNodeContents(e), t = window.getSelection(), t && (t.removeAllRanges(), t.addRange(r), document.execCommand("copy"), t.removeAllRanges())) : (r = document.body.createTextRange(), r.moveToElementText(e), r.select(), document.execCommand("copy"));
}, Us = (e) => e.indexOf("fr") > -1 ? "auto" : e, Hs = (e, r) => Object.hasOwn(r, e), $t = (e) => e !== "skeleton", Ys = (e) => e.includes("skeleton"), Gs = (e) => {
  let r = e, t = r.hasAttribute("data-key");
  for (; !t; ) {
    if (r === document.body)
      return null;
    r = e.parentElement, t = r.hasAttribute("data-key");
  }
  return r;
}, Xs = (e) => Number(e.split("px")[0]), qs = (e) => e.length > 1 && /^0/.test(e) ? e.replace(/^0/, "") : e, io = (e, r) => Object.keys(e).reduce((t, n) => (Object.keys(e[n]).forEach((o) => {
  e.mobile[o] !== r[o] && (t.mobile || (t.mobile = {}), t.mobile[o] = e.mobile[o]), e.tablet[o] !== r[o] && (t.tablet || (t.tablet = {}), t.tablet[o] = e.tablet[o]);
}), t), {}), so = (e) => Object.keys(e).reduce(
  (r, t) => {
    const n = t;
    return (Object.prototype.hasOwnProperty.call(pr, n) && e[n] !== pr[n] || Object.prototype.hasOwnProperty.call(_n, n) && e[n] !== _n[n]) && (r[n] = e[n]), r;
  },
  {}
), Sn = (e, r, t, n) => ({
  ...so(e),
  ...n && {
    responsive: io(e.responsive, e)
  },
  ...Object.hasOwn(e, "children") && {
    children: e.children.map(
      (o) => Sn(
        r[o],
        r,
        t,
        n
      )
    )
  },
  ...Object.hasOwn(e, "skeletons") && {
    skeletons: e.skeletons.map(
      (o) => Sn(
        t[o],
        r,
        t,
        n
      )
    )
  }
});
var zr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function co(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Ft = { exports: {} }, sr = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var kn;
function lo() {
  if (kn) return sr;
  kn = 1;
  var e = qr, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), n = Object.prototype.hasOwnProperty, o = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, l = { key: !0, ref: !0, __self: !0, __source: !0 };
  function f(d, h, g) {
    var b, S = {}, _ = null, T = null;
    g !== void 0 && (_ = "" + g), h.key !== void 0 && (_ = "" + h.key), h.ref !== void 0 && (T = h.ref);
    for (b in h) n.call(h, b) && !l.hasOwnProperty(b) && (S[b] = h[b]);
    if (d && d.defaultProps) for (b in h = d.defaultProps, h) S[b] === void 0 && (S[b] = h[b]);
    return { $$typeof: r, type: d, key: _, ref: T, props: S, _owner: o.current };
  }
  return sr.Fragment = t, sr.jsx = f, sr.jsxs = f, sr;
}
var cr = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Rn;
function uo() {
  return Rn || (Rn = 1, process.env.NODE_ENV !== "production" && function() {
    var e = qr, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), n = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), l = Symbol.for("react.profiler"), f = Symbol.for("react.provider"), d = Symbol.for("react.context"), h = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), S = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), T = Symbol.for("react.offscreen"), O = Symbol.iterator, y = "@@iterator";
    function w(i) {
      if (i === null || typeof i != "object")
        return null;
      var p = O && i[O] || i[y];
      return typeof p == "function" ? p : null;
    }
    var R = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function E(i) {
      {
        for (var p = arguments.length, m = new Array(p > 1 ? p - 1 : 0), k = 1; k < p; k++)
          m[k - 1] = arguments[k];
        z("error", i, m);
      }
    }
    function z(i, p, m) {
      {
        var k = R.ReactDebugCurrentFrame, C = k.getStackAddendum();
        C !== "" && (p += "%s", m = m.concat([C]));
        var j = m.map(function(A) {
          return String(A);
        });
        j.unshift("Warning: " + p), Function.prototype.apply.call(console[i], console, j);
      }
    }
    var se = !1, q = !1, K = !1, N = !1, Ke = !1, Ee;
    Ee = Symbol.for("react.module.reference");
    function Te(i) {
      return !!(typeof i == "string" || typeof i == "function" || i === n || i === l || Ke || i === o || i === g || i === b || N || i === T || se || q || K || typeof i == "object" && i !== null && (i.$$typeof === _ || i.$$typeof === S || i.$$typeof === f || i.$$typeof === d || i.$$typeof === h || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      i.$$typeof === Ee || i.getModuleId !== void 0));
    }
    function st(i, p, m) {
      var k = i.displayName;
      if (k)
        return k;
      var C = p.displayName || p.name || "";
      return C !== "" ? m + "(" + C + ")" : m;
    }
    function yr(i) {
      return i.displayName || "Context";
    }
    function fe(i) {
      if (i == null)
        return null;
      if (typeof i.tag == "number" && E("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof i == "function")
        return i.displayName || i.name || null;
      if (typeof i == "string")
        return i;
      switch (i) {
        case n:
          return "Fragment";
        case t:
          return "Portal";
        case l:
          return "Profiler";
        case o:
          return "StrictMode";
        case g:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case d:
            var p = i;
            return yr(p) + ".Consumer";
          case f:
            var m = i;
            return yr(m._context) + ".Provider";
          case h:
            return st(i, i.render, "ForwardRef");
          case S:
            var k = i.displayName || null;
            return k !== null ? k : fe(i.type) || "Memo";
          case _: {
            var C = i, j = C._payload, A = C._init;
            try {
              return fe(A(j));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Se = Object.assign, Ie = 0, _r, Er, Sr, kr, Rr, wr, Tr;
    function L() {
    }
    L.__reactDisabledLog = !0;
    function xr() {
      {
        if (Ie === 0) {
          _r = console.log, Er = console.info, Sr = console.warn, kr = console.error, Rr = console.group, wr = console.groupCollapsed, Tr = console.groupEnd;
          var i = {
            configurable: !0,
            enumerable: !0,
            value: L,
            writable: !0
          };
          Object.defineProperties(console, {
            info: i,
            log: i,
            warn: i,
            error: i,
            group: i,
            groupCollapsed: i,
            groupEnd: i
          });
        }
        Ie++;
      }
    }
    function ct() {
      {
        if (Ie--, Ie === 0) {
          var i = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Se({}, i, {
              value: _r
            }),
            info: Se({}, i, {
              value: Er
            }),
            warn: Se({}, i, {
              value: Sr
            }),
            error: Se({}, i, {
              value: kr
            }),
            group: Se({}, i, {
              value: Rr
            }),
            groupCollapsed: Se({}, i, {
              value: wr
            }),
            groupEnd: Se({}, i, {
              value: Tr
            })
          });
        }
        Ie < 0 && E("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ke = R.ReactCurrentDispatcher, Fe;
    function be(i, p, m) {
      {
        if (Fe === void 0)
          try {
            throw Error();
          } catch (C) {
            var k = C.stack.trim().match(/\n( *(at )?)/);
            Fe = k && k[1] || "";
          }
        return `
` + Fe + i;
      }
    }
    var Be = !1, xe;
    {
      var Cr = typeof WeakMap == "function" ? WeakMap : Map;
      xe = new Cr();
    }
    function Je(i, p) {
      if (!i || Be)
        return "";
      {
        var m = xe.get(i);
        if (m !== void 0)
          return m;
      }
      var k;
      Be = !0;
      var C = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var j;
      j = ke.current, ke.current = null, xr();
      try {
        if (p) {
          var A = function() {
            throw Error();
          };
          if (Object.defineProperty(A.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(A, []);
            } catch (ae) {
              k = ae;
            }
            Reflect.construct(i, [], A);
          } else {
            try {
              A.call();
            } catch (ae) {
              k = ae;
            }
            i.call(A.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ae) {
            k = ae;
          }
          i();
        }
      } catch (ae) {
        if (ae && k && typeof ae.stack == "string") {
          for (var x = ae.stack.split(`
`), J = k.stack.split(`
`), Y = x.length - 1, G = J.length - 1; Y >= 1 && G >= 0 && x[Y] !== J[G]; )
            G--;
          for (; Y >= 1 && G >= 0; Y--, G--)
            if (x[Y] !== J[G]) {
              if (Y !== 1 || G !== 1)
                do
                  if (Y--, G--, G < 0 || x[Y] !== J[G]) {
                    var ee = `
` + x[Y].replace(" at new ", " at ");
                    return i.displayName && ee.includes("<anonymous>") && (ee = ee.replace("<anonymous>", i.displayName)), typeof i == "function" && xe.set(i, ee), ee;
                  }
                while (Y >= 1 && G >= 0);
              break;
            }
        }
      } finally {
        Be = !1, ke.current = j, ct(), Error.prepareStackTrace = C;
      }
      var Ae = i ? i.displayName || i.name : "", De = Ae ? be(Ae) : "";
      return typeof i == "function" && xe.set(i, De), De;
    }
    function lt(i, p, m) {
      return Je(i, !1);
    }
    function ut(i) {
      var p = i.prototype;
      return !!(p && p.isReactComponent);
    }
    function je(i, p, m) {
      if (i == null)
        return "";
      if (typeof i == "function")
        return Je(i, ut(i));
      if (typeof i == "string")
        return be(i);
      switch (i) {
        case g:
          return be("Suspense");
        case b:
          return be("SuspenseList");
      }
      if (typeof i == "object")
        switch (i.$$typeof) {
          case h:
            return lt(i.render);
          case S:
            return je(i.type, p, m);
          case _: {
            var k = i, C = k._payload, j = k._init;
            try {
              return je(j(C), p, m);
            } catch {
            }
          }
        }
      return "";
    }
    var Le = Object.prototype.hasOwnProperty, Or = {}, Ar = R.ReactDebugCurrentFrame;
    function We(i) {
      if (i) {
        var p = i._owner, m = je(i.type, i._source, p ? p.type : null);
        Ar.setExtraStackFrame(m);
      } else
        Ar.setExtraStackFrame(null);
    }
    function Me(i, p, m, k, C) {
      {
        var j = Function.call.bind(Le);
        for (var A in i)
          if (j(i, A)) {
            var x = void 0;
            try {
              if (typeof i[A] != "function") {
                var J = Error((k || "React class") + ": " + m + " type `" + A + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[A] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw J.name = "Invariant Violation", J;
              }
              x = i[A](p, A, k, m, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (Y) {
              x = Y;
            }
            x && !(x instanceof Error) && (We(C), E("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", k || "React class", m, A, typeof x), We(null)), x instanceof Error && !(x.message in Or) && (Or[x.message] = !0, We(C), E("Failed %s type: %s", m, x.message), We(null));
          }
      }
    }
    var Qe = Array.isArray;
    function Ce(i) {
      return Qe(i);
    }
    function me(i) {
      {
        var p = typeof Symbol == "function" && Symbol.toStringTag, m = p && i[Symbol.toStringTag] || i.constructor.name || "Object";
        return m;
      }
    }
    function Pr(i) {
      try {
        return Ze(i), !1;
      } catch {
        return !0;
      }
    }
    function Ze(i) {
      return "" + i;
    }
    function Ir(i) {
      if (Pr(i))
        return E("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", me(i)), Ze(i);
    }
    var Ne = R.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, er, rr, Ve;
    Ve = {};
    function Nr(i) {
      if (Le.call(i, "ref")) {
        var p = Object.getOwnPropertyDescriptor(i, "ref").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return i.ref !== void 0;
    }
    function dt(i) {
      if (Le.call(i, "key")) {
        var p = Object.getOwnPropertyDescriptor(i, "key").get;
        if (p && p.isReactWarning)
          return !1;
      }
      return i.key !== void 0;
    }
    function ft(i, p) {
      if (typeof i.ref == "string" && Ne.current && p && Ne.current.stateNode !== p) {
        var m = fe(Ne.current.type);
        Ve[m] || (E('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', fe(Ne.current.type), i.ref), Ve[m] = !0);
      }
    }
    function Re(i, p) {
      {
        var m = function() {
          er || (er = !0, E("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "key", {
          get: m,
          configurable: !0
        });
      }
    }
    function Ue(i, p) {
      {
        var m = function() {
          rr || (rr = !0, E("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", p));
        };
        m.isReactWarning = !0, Object.defineProperty(i, "ref", {
          get: m,
          configurable: !0
        });
      }
    }
    var pt = function(i, p, m, k, C, j, A) {
      var x = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: i,
        key: p,
        ref: m,
        props: A,
        // Record the component responsible for creating this element.
        _owner: j
      };
      return x._store = {}, Object.defineProperty(x._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(x, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: k
      }), Object.defineProperty(x, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: C
      }), Object.freeze && (Object.freeze(x.props), Object.freeze(x)), x;
    };
    function Dr(i, p, m, k, C) {
      {
        var j, A = {}, x = null, J = null;
        m !== void 0 && (Ir(m), x = "" + m), dt(p) && (Ir(p.key), x = "" + p.key), Nr(p) && (J = p.ref, ft(p, C));
        for (j in p)
          Le.call(p, j) && !ze.hasOwnProperty(j) && (A[j] = p[j]);
        if (i && i.defaultProps) {
          var Y = i.defaultProps;
          for (j in Y)
            A[j] === void 0 && (A[j] = Y[j]);
        }
        if (x || J) {
          var G = typeof i == "function" ? i.displayName || i.name || "Unknown" : i;
          x && Re(A, G), J && Ue(A, G);
        }
        return pt(i, x, J, C, k, Ne.current, A);
      }
    }
    var tr = R.ReactCurrentOwner, nr = R.ReactDebugCurrentFrame;
    function ce(i) {
      if (i) {
        var p = i._owner, m = je(i.type, i._source, p ? p.type : null);
        nr.setExtraStackFrame(m);
      } else
        nr.setExtraStackFrame(null);
    }
    var ar;
    ar = !1;
    function pe(i) {
      return typeof i == "object" && i !== null && i.$$typeof === r;
    }
    function $r() {
      {
        if (tr.current) {
          var i = fe(tr.current.type);
          if (i)
            return `

Check the render method of \`` + i + "`.";
        }
        return "";
      }
    }
    function ht(i) {
      return "";
    }
    var Fr = {};
    function gt(i) {
      {
        var p = $r();
        if (!p) {
          var m = typeof i == "string" ? i : i.displayName || i.name;
          m && (p = `

Check the top-level render call using <` + m + ">.");
        }
        return p;
      }
    }
    function Br(i, p) {
      {
        if (!i._store || i._store.validated || i.key != null)
          return;
        i._store.validated = !0;
        var m = gt(p);
        if (Fr[m])
          return;
        Fr[m] = !0;
        var k = "";
        i && i._owner && i._owner !== tr.current && (k = " It was passed a child from " + fe(i._owner.type) + "."), ce(i), E('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', m, k), ce(null);
      }
    }
    function le(i, p) {
      {
        if (typeof i != "object")
          return;
        if (Ce(i))
          for (var m = 0; m < i.length; m++) {
            var k = i[m];
            pe(k) && Br(k, p);
          }
        else if (pe(i))
          i._store && (i._store.validated = !0);
        else if (i) {
          var C = w(i);
          if (typeof C == "function" && C !== i.entries)
            for (var j = C.call(i), A; !(A = j.next()).done; )
              pe(A.value) && Br(A.value, p);
        }
      }
    }
    function bt(i) {
      {
        var p = i.type;
        if (p == null || typeof p == "string")
          return;
        var m;
        if (typeof p == "function")
          m = p.propTypes;
        else if (typeof p == "object" && (p.$$typeof === h || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        p.$$typeof === S))
          m = p.propTypes;
        else
          return;
        if (m) {
          var k = fe(p);
          Me(m, i.props, "prop", k, i);
        } else if (p.PropTypes !== void 0 && !ar) {
          ar = !0;
          var C = fe(p);
          E("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", C || "Unknown");
        }
        typeof p.getDefaultProps == "function" && !p.getDefaultProps.isReactClassApproved && E("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function mt(i) {
      {
        for (var p = Object.keys(i.props), m = 0; m < p.length; m++) {
          var k = p[m];
          if (k !== "children" && k !== "key") {
            ce(i), E("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", k), ce(null);
            break;
          }
        }
        i.ref !== null && (ce(i), E("Invalid attribute `ref` supplied to `React.Fragment`."), ce(null));
      }
    }
    function jr(i, p, m, k, C, j) {
      {
        var A = Te(i);
        if (!A) {
          var x = "";
          (i === void 0 || typeof i == "object" && i !== null && Object.keys(i).length === 0) && (x += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var J = ht();
          J ? x += J : x += $r();
          var Y;
          i === null ? Y = "null" : Ce(i) ? Y = "array" : i !== void 0 && i.$$typeof === r ? (Y = "<" + (fe(i.type) || "Unknown") + " />", x = " Did you accidentally export a JSX literal instead of a component?") : Y = typeof i, E("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", Y, x);
        }
        var G = Dr(i, p, m, C, j);
        if (G == null)
          return G;
        if (A) {
          var ee = p.children;
          if (ee !== void 0)
            if (k)
              if (Ce(ee)) {
                for (var Ae = 0; Ae < ee.length; Ae++)
                  le(ee[Ae], i);
                Object.freeze && Object.freeze(ee);
              } else
                E("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              le(ee, i);
        }
        return i === n ? mt(G) : bt(G), G;
      }
    }
    function vt(i, p, m) {
      return jr(i, p, m, !0);
    }
    function yt(i, p, m) {
      return jr(i, p, m, !1);
    }
    var Oe = yt, _t = vt;
    cr.Fragment = n, cr.jsx = Oe, cr.jsxs = _t;
  }()), cr;
}
process.env.NODE_ENV === "production" ? Ft.exports = lo() : Ft.exports = uo();
var tt = Ft.exports;
const fo = Un({
  colorTheme: { ...eo },
  breakpoints: {
    // todo
    mobile: "576px",
    tablet: "961px",
    desktop: "962px"
  }
}), Ks = ({
  children: e,
  colorTheme: r,
  breakpoints: t
}) => tt.jsx(fo.Provider, {
  value: {
    colorTheme: r,
    breakpoints: t
  },
  children: e
});
function po(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function ho(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var go = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var l;
      n.tags.length === 0 ? n.insertionPoint ? l = n.insertionPoint.nextSibling : n.prepend ? l = n.container.firstChild : l = n.before : l = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, l), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(ho(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var l = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      l && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !l;
    }
    if (this.isSpeedy) {
      var f = po(o);
      try {
        f.insertRule(n, f.cssRules.length);
      } catch (d) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', d);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), re = "-ms-", Jr = "-moz-", F = "-webkit-", Xt = "comm", qt = "rule", Kt = "decl", bo = "@import", qn = "@keyframes", mo = "@layer", vo = Math.abs, nt = String.fromCharCode, yo = Object.assign;
function _o(e, r) {
  return Z(e, 0) ^ 45 ? (((r << 2 ^ Z(e, 0)) << 2 ^ Z(e, 1)) << 2 ^ Z(e, 2)) << 2 ^ Z(e, 3) : 0;
}
function Kn(e) {
  return e.trim();
}
function Eo(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function B(e, r, t) {
  return e.replace(r, t);
}
function Bt(e, r) {
  return e.indexOf(r);
}
function Z(e, r) {
  return e.charCodeAt(r) | 0;
}
function gr(e, r, t) {
  return e.slice(r, t);
}
function ye(e) {
  return e.length;
}
function Jt(e) {
  return e.length;
}
function Vr(e, r) {
  return r.push(e), e;
}
function So(e, r) {
  return e.map(r).join("");
}
var at = 1, Xe = 1, Jn = 0, ne = 0, X = 0, qe = "";
function ot(e, r, t, n, o, l, f) {
  return { value: e, root: r, parent: t, type: n, props: o, children: l, line: at, column: Xe, length: f, return: "" };
}
function lr(e, r) {
  return yo(ot("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function ko() {
  return X;
}
function Ro() {
  return X = ne > 0 ? Z(qe, --ne) : 0, Xe--, X === 10 && (Xe = 1, at--), X;
}
function ie() {
  return X = ne < Jn ? Z(qe, ne++) : 0, Xe++, X === 10 && (Xe = 1, at++), X;
}
function _e() {
  return Z(qe, ne);
}
function Hr() {
  return ne;
}
function vr(e, r) {
  return gr(qe, e, r);
}
function br(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Qn(e) {
  return at = Xe = 1, Jn = ye(qe = e), ne = 0, [];
}
function Zn(e) {
  return qe = "", e;
}
function Yr(e) {
  return Kn(vr(ne - 1, jt(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function wo(e) {
  for (; (X = _e()) && X < 33; )
    ie();
  return br(e) > 2 || br(X) > 3 ? "" : " ";
}
function To(e, r) {
  for (; --r && ie() && !(X < 48 || X > 102 || X > 57 && X < 65 || X > 70 && X < 97); )
    ;
  return vr(e, Hr() + (r < 6 && _e() == 32 && ie() == 32));
}
function jt(e) {
  for (; ie(); )
    switch (X) {
      case e:
        return ne;
      case 34:
      case 39:
        e !== 34 && e !== 39 && jt(X);
        break;
      case 40:
        e === 41 && jt(e);
        break;
      case 92:
        ie();
        break;
    }
  return ne;
}
function xo(e, r) {
  for (; ie() && e + X !== 57; )
    if (e + X === 84 && _e() === 47)
      break;
  return "/*" + vr(r, ne - 1) + "*" + nt(e === 47 ? e : ie());
}
function Co(e) {
  for (; !br(_e()); )
    ie();
  return vr(e, ne);
}
function Oo(e) {
  return Zn(Gr("", null, null, null, [""], e = Qn(e), 0, [0], e));
}
function Gr(e, r, t, n, o, l, f, d, h) {
  for (var g = 0, b = 0, S = f, _ = 0, T = 0, O = 0, y = 1, w = 1, R = 1, E = 0, z = "", se = o, q = l, K = n, N = z; w; )
    switch (O = E, E = ie()) {
      case 40:
        if (O != 108 && Z(N, S - 1) == 58) {
          Bt(N += B(Yr(E), "&", "&\f"), "&\f") != -1 && (R = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        N += Yr(E);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        N += wo(O);
        break;
      case 92:
        N += To(Hr() - 1, 7);
        continue;
      case 47:
        switch (_e()) {
          case 42:
          case 47:
            Vr(Ao(xo(ie(), Hr()), r, t), h);
            break;
          default:
            N += "/";
        }
        break;
      case 123 * y:
        d[g++] = ye(N) * R;
      case 125 * y:
      case 59:
      case 0:
        switch (E) {
          case 0:
          case 125:
            w = 0;
          case 59 + b:
            R == -1 && (N = B(N, /\f/g, "")), T > 0 && ye(N) - S && Vr(T > 32 ? Tn(N + ";", n, t, S - 1) : Tn(B(N, " ", "") + ";", n, t, S - 2), h);
            break;
          case 59:
            N += ";";
          default:
            if (Vr(K = wn(N, r, t, g, b, o, d, z, se = [], q = [], S), l), E === 123)
              if (b === 0)
                Gr(N, r, K, K, se, l, S, d, q);
              else
                switch (_ === 99 && Z(N, 3) === 110 ? 100 : _) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Gr(e, K, K, n && Vr(wn(e, K, K, 0, 0, o, d, z, o, se = [], S), q), o, q, S, d, n ? se : q);
                    break;
                  default:
                    Gr(N, K, K, K, [""], q, 0, d, q);
                }
        }
        g = b = T = 0, y = R = 1, z = N = "", S = f;
        break;
      case 58:
        S = 1 + ye(N), T = O;
      default:
        if (y < 1) {
          if (E == 123)
            --y;
          else if (E == 125 && y++ == 0 && Ro() == 125)
            continue;
        }
        switch (N += nt(E), E * y) {
          case 38:
            R = b > 0 ? 1 : (N += "\f", -1);
            break;
          case 44:
            d[g++] = (ye(N) - 1) * R, R = 1;
            break;
          case 64:
            _e() === 45 && (N += Yr(ie())), _ = _e(), b = S = ye(z = N += Co(Hr())), E++;
            break;
          case 45:
            O === 45 && ye(N) == 2 && (y = 0);
        }
    }
  return l;
}
function wn(e, r, t, n, o, l, f, d, h, g, b) {
  for (var S = o - 1, _ = o === 0 ? l : [""], T = Jt(_), O = 0, y = 0, w = 0; O < n; ++O)
    for (var R = 0, E = gr(e, S + 1, S = vo(y = f[O])), z = e; R < T; ++R)
      (z = Kn(y > 0 ? _[R] + " " + E : B(E, /&\f/g, _[R]))) && (h[w++] = z);
  return ot(e, r, t, o === 0 ? qt : d, h, g, b);
}
function Ao(e, r, t) {
  return ot(e, r, t, Xt, nt(ko()), gr(e, 2, -2), 0);
}
function Tn(e, r, t, n) {
  return ot(e, r, t, Kt, gr(e, 0, n), gr(e, n + 1, -1), n);
}
function Ye(e, r) {
  for (var t = "", n = Jt(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Po(e, r, t, n) {
  switch (e.type) {
    case mo:
      if (e.children.length) break;
    case bo:
    case Kt:
      return e.return = e.return || e.value;
    case Xt:
      return "";
    case qn:
      return e.return = e.value + "{" + Ye(e.children, n) + "}";
    case qt:
      e.value = e.props.join(",");
  }
  return ye(t = Ye(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Io(e) {
  var r = Jt(e);
  return function(t, n, o, l) {
    for (var f = "", d = 0; d < r; d++)
      f += e[d](t, n, o, l) || "";
    return f;
  };
}
function No(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function ea(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Do = function(r, t, n) {
  for (var o = 0, l = 0; o = l, l = _e(), o === 38 && l === 12 && (t[n] = 1), !br(l); )
    ie();
  return vr(r, ne);
}, $o = function(r, t) {
  var n = -1, o = 44;
  do
    switch (br(o)) {
      case 0:
        o === 38 && _e() === 12 && (t[n] = 1), r[n] += Do(ne - 1, t, n);
        break;
      case 2:
        r[n] += Yr(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = _e() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += nt(o);
    }
  while (o = ie());
  return r;
}, Fo = function(r, t) {
  return Zn($o(Qn(r), t));
}, xn = /* @__PURE__ */ new WeakMap(), Bo = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !xn.get(n)) && !o) {
      xn.set(r, !0);
      for (var l = [], f = Fo(t, l), d = n.props, h = 0, g = 0; h < f.length; h++)
        for (var b = 0; b < d.length; b++, g++)
          r.props[g] = l[h] ? f[h].replace(/&\f/g, d[b]) : d[b] + " " + f[h];
    }
  }
}, jo = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Lo = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Wo = function(r) {
  return r.type === "comm" && r.children.indexOf(Lo) > -1;
}, Mo = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var l = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (l) {
        for (var f = !!t.parent, d = f ? t.parent.children : (
          // global rule at the root level
          o
        ), h = d.length - 1; h >= 0; h--) {
          var g = d[h];
          if (g.line < t.line)
            break;
          if (g.column < t.column) {
            if (Wo(g))
              return;
            break;
          }
        }
        l.forEach(function(b) {
          console.error('The pseudo class "' + b + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + b.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ra = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, zo = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!ra(t[n]))
      return !0;
  return !1;
}, Cn = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Vo = function(r, t, n) {
  ra(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Cn(r)) : zo(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Cn(r)));
};
function ta(e, r) {
  switch (_o(e, r)) {
    case 5103:
      return F + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return F + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return F + e + Jr + e + re + e + e;
    case 6828:
    case 4268:
      return F + e + re + e + e;
    case 6165:
      return F + e + re + "flex-" + e + e;
    case 5187:
      return F + e + B(e, /(\w+).+(:[^]+)/, F + "box-$1$2" + re + "flex-$1$2") + e;
    case 5443:
      return F + e + re + "flex-item-" + B(e, /flex-|-self/, "") + e;
    case 4675:
      return F + e + re + "flex-line-pack" + B(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return F + e + re + B(e, "shrink", "negative") + e;
    case 5292:
      return F + e + re + B(e, "basis", "preferred-size") + e;
    case 6060:
      return F + "box-" + B(e, "-grow", "") + F + e + re + B(e, "grow", "positive") + e;
    case 4554:
      return F + B(e, /([^-])(transform)/g, "$1" + F + "$2") + e;
    case 6187:
      return B(B(B(e, /(zoom-|grab)/, F + "$1"), /(image-set)/, F + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return B(e, /(image-set\([^]*)/, F + "$1$`$1");
    case 4968:
      return B(B(e, /(.+:)(flex-)?(.*)/, F + "box-pack:$3" + re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + F + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return B(e, /(.+)-inline(.+)/, F + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ye(e) - 1 - r > 6) switch (Z(e, r + 1)) {
        case 109:
          if (Z(e, r + 4) !== 45) break;
        case 102:
          return B(e, /(.+:)(.+)-([^]+)/, "$1" + F + "$2-$3$1" + Jr + (Z(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Bt(e, "stretch") ? ta(B(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (Z(e, r + 1) !== 115) break;
    case 6444:
      switch (Z(e, ye(e) - 3 - (~Bt(e, "!important") && 10))) {
        case 107:
          return B(e, ":", ":" + F) + e;
        case 101:
          return B(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + F + (Z(e, 14) === 45 ? "inline-" : "") + "box$3$1" + F + "$2$3$1" + re + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (Z(e, r + 11)) {
        case 114:
          return F + e + re + B(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return F + e + re + B(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return F + e + re + B(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return F + e + re + e + e;
  }
  return e;
}
var Uo = function(r, t, n, o) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Kt:
      r.return = ta(r.value, r.length);
      break;
    case qn:
      return Ye([lr(r, {
        value: B(r.value, "@", "@" + F)
      })], o);
    case qt:
      if (r.length) return So(r.props, function(l) {
        switch (Eo(l, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Ye([lr(r, {
              props: [B(l, /:(read-\w+)/, ":" + Jr + "$1")]
            })], o);
          case "::placeholder":
            return Ye([lr(r, {
              props: [B(l, /:(plac\w+)/, ":" + F + "input-$1")]
            }), lr(r, {
              props: [B(l, /:(plac\w+)/, ":" + Jr + "$1")]
            }), lr(r, {
              props: [B(l, /:(plac\w+)/, re + "input-$1")]
            })], o);
        }
        return "";
      });
  }
}, Ho = [Uo], Yo = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(y) {
      var w = y.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(y), y.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || Ho;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var l = {}, f, d = [];
  f = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(y) {
      for (var w = y.getAttribute("data-emotion").split(" "), R = 1; R < w.length; R++)
        l[w[R]] = !0;
      d.push(y);
    }
  );
  var h, g = [Bo, jo];
  process.env.NODE_ENV !== "production" && g.push(Mo({
    get compat() {
      return O.compat;
    }
  }), Vo);
  {
    var b, S = [Po, process.env.NODE_ENV !== "production" ? function(y) {
      y.root || (y.return ? b.insert(y.return) : y.value && y.type !== Xt && b.insert(y.value + "{}"));
    } : No(function(y) {
      b.insert(y);
    })], _ = Io(g.concat(o, S)), T = function(w) {
      return Ye(Oo(w), _);
    };
    h = function(w, R, E, z) {
      b = E, process.env.NODE_ENV !== "production" && R.map !== void 0 && (b = {
        insert: function(q) {
          E.insert(q + R.map);
        }
      }), T(w ? w + "{" + R.styles + "}" : R.styles), z && (O.inserted[R.name] = !0);
    };
  }
  var O = {
    key: t,
    sheet: new go({
      key: t,
      container: f,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: l,
    registered: {},
    insert: h
  };
  return O.sheet.hydrate(d), O;
};
function Lt() {
  return Lt = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, Lt.apply(this, arguments);
}
var Go = !0;
function na(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Qt = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  Go === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, aa = function(r, t, n) {
  Qt(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var l = t;
    do
      r.insert(t === l ? "." + o : "", l, r.sheet, !0), l = l.next;
    while (l !== void 0);
  }
};
function Xo(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var qo = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, On = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Ko = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Jo = /[A-Z]|^ms/g, oa = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Zt = function(r) {
  return r.charCodeAt(1) === 45;
}, An = function(r) {
  return r != null && typeof r != "boolean";
}, At = /* @__PURE__ */ ea(function(e) {
  return Zt(e) ? e : e.replace(Jo, "-$&").toLowerCase();
}), Qr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(oa, function(n, o, l) {
          return ge = {
            name: o,
            styles: l,
            next: ge
          }, o;
        });
  }
  return qo[r] !== 1 && !Zt(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Qo = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Zo = ["normal", "none", "initial", "inherit", "unset"], ei = Qr, ri = /^-ms-/, ti = /-(.)/g, Pn = {};
  Qr = function(r, t) {
    if (r === "content" && (typeof t != "string" || Zo.indexOf(t) === -1 && !Qo.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = ei(r, t);
    return n !== "" && !Zt(r) && r.indexOf("-") !== -1 && Pn[r] === void 0 && (Pn[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(ri, "ms-").replace(ti, function(o, l) {
      return l.toUpperCase();
    }) + "?")), n;
  };
}
var ia = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function mr(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ia);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return ge = {
          name: t.name,
          styles: t.styles,
          next: ge
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            ge = {
              name: n.name,
              styles: n.styles,
              next: ge
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return ni(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var l = ge, f = t(e);
        return ge = l, mr(e, r, f);
      } else process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var d = [], h = t.replace(oa, function(b, S, _) {
          var T = "animation" + d.length;
          return d.push("const " + T + " = keyframes`" + _.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + T + "}";
        });
        d.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(d, ["`" + h + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + h + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var g = r[t];
  return g !== void 0 ? g : t;
}
function ni(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += mr(e, r, t[o]) + ";";
  else
    for (var l in t) {
      var f = t[l];
      if (typeof f != "object")
        r != null && r[f] !== void 0 ? n += l + "{" + r[f] + "}" : An(f) && (n += At(l) + ":" + Qr(l, f) + ";");
      else {
        if (l === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ia);
        if (Array.isArray(f) && typeof f[0] == "string" && (r == null || r[f[0]] === void 0))
          for (var d = 0; d < f.length; d++)
            An(f[d]) && (n += At(l) + ":" + Qr(l, f[d]) + ";");
        else {
          var h = mr(e, r, f);
          switch (l) {
            case "animation":
            case "animationName": {
              n += At(l) + ":" + h + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && l === "undefined" && console.error(Ko), n += l + "{" + h + "}";
          }
        }
      }
    }
  return n;
}
var In = /label:\s*([^\s;\n{]+)\s*(;|$)/g, sa;
process.env.NODE_ENV !== "production" && (sa = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var ge, Wt = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, l = "";
  ge = void 0;
  var f = r[0];
  f == null || f.raw === void 0 ? (o = !1, l += mr(n, t, f)) : (process.env.NODE_ENV !== "production" && f[0] === void 0 && console.error(On), l += f[0]);
  for (var d = 1; d < r.length; d++)
    l += mr(n, t, r[d]), o && (process.env.NODE_ENV !== "production" && f[d] === void 0 && console.error(On), l += f[d]);
  var h;
  process.env.NODE_ENV !== "production" && (l = l.replace(sa, function(_) {
    return h = _, "";
  })), In.lastIndex = 0;
  for (var g = "", b; (b = In.exec(l)) !== null; )
    g += "-" + // $FlowFixMe we know it's not null
    b[1];
  var S = Xo(l) + g;
  return process.env.NODE_ENV !== "production" ? {
    name: S,
    styles: l,
    map: h,
    next: ge,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: S,
    styles: l,
    next: ge
  };
}, ai = function(r) {
  return r();
}, oi = te.useInsertionEffect ? te.useInsertionEffect : !1, ca = oi || ai, ii = {}.hasOwnProperty, en = /* @__PURE__ */ te.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Yo({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (en.displayName = "EmotionCacheContext");
en.Provider;
var la = function(r) {
  return /* @__PURE__ */ Hn(function(t, n) {
    var o = Yn(en);
    return r(t, o, n);
  });
}, rn = /* @__PURE__ */ te.createContext({});
process.env.NODE_ENV !== "production" && (rn.displayName = "EmotionThemeContext");
var Nn = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Dn = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", si = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Qt(t, n, o), ca(function() {
    return aa(t, n, o);
  }), null;
}, ci = /* @__PURE__ */ la(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[Nn], l = [n], f = "";
  typeof e.className == "string" ? f = na(r.registered, l, e.className) : e.className != null && (f = e.className + " ");
  var d = Wt(l, void 0, te.useContext(rn));
  if (process.env.NODE_ENV !== "production" && d.name.indexOf("-") === -1) {
    var h = e[Dn];
    h && (d = Wt([d, "label:" + h + ";"]));
  }
  f += r.key + "-" + d.name;
  var g = {};
  for (var b in e)
    ii.call(e, b) && b !== "css" && b !== Nn && (process.env.NODE_ENV === "production" || b !== Dn) && (g[b] = e[b]);
  return g.ref = t, g.className = f, /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(si, {
    cache: r,
    serialized: d,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ te.createElement(o, g));
});
process.env.NODE_ENV !== "production" && (ci.displayName = "EmotionCssPropInternal");
var ua = Un({});
ua.displayName = "ColorModeContext";
function li() {
  const e = Yn(ua);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function Ge(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function dr(e, ...r) {
  return ui(e) ? e(...r) : e;
}
var ui = (e) => typeof e == "function", Zr = { exports: {} };
Zr.exports;
(function(e, r) {
  var t = 200, n = "__lodash_hash_undefined__", o = 800, l = 16, f = 9007199254740991, d = "[object Arguments]", h = "[object Array]", g = "[object AsyncFunction]", b = "[object Boolean]", S = "[object Date]", _ = "[object Error]", T = "[object Function]", O = "[object GeneratorFunction]", y = "[object Map]", w = "[object Number]", R = "[object Null]", E = "[object Object]", z = "[object Proxy]", se = "[object RegExp]", q = "[object Set]", K = "[object String]", N = "[object Undefined]", Ke = "[object WeakMap]", Ee = "[object ArrayBuffer]", Te = "[object DataView]", st = "[object Float32Array]", yr = "[object Float64Array]", fe = "[object Int8Array]", Se = "[object Int16Array]", Ie = "[object Int32Array]", _r = "[object Uint8Array]", Er = "[object Uint8ClampedArray]", Sr = "[object Uint16Array]", kr = "[object Uint32Array]", Rr = /[\\^$.*+?()[\]{}|]/g, wr = /^\[object .+?Constructor\]$/, Tr = /^(?:0|[1-9]\d*)$/, L = {};
  L[st] = L[yr] = L[fe] = L[Se] = L[Ie] = L[_r] = L[Er] = L[Sr] = L[kr] = !0, L[d] = L[h] = L[Ee] = L[b] = L[Te] = L[S] = L[_] = L[T] = L[y] = L[w] = L[E] = L[se] = L[q] = L[K] = L[Ke] = !1;
  var xr = typeof zr == "object" && zr && zr.Object === Object && zr, ct = typeof self == "object" && self && self.Object === Object && self, ke = xr || ct || Function("return this")(), Fe = r && !r.nodeType && r, be = Fe && !0 && e && !e.nodeType && e, Be = be && be.exports === Fe, xe = Be && xr.process, Cr = function() {
    try {
      var a = be && be.require && be.require("util").types;
      return a || xe && xe.binding && xe.binding("util");
    } catch {
    }
  }(), Je = Cr && Cr.isTypedArray;
  function lt(a, c, u) {
    switch (u.length) {
      case 0:
        return a.call(c);
      case 1:
        return a.call(c, u[0]);
      case 2:
        return a.call(c, u[0], u[1]);
      case 3:
        return a.call(c, u[0], u[1], u[2]);
    }
    return a.apply(c, u);
  }
  function ut(a, c) {
    for (var u = -1, v = Array(a); ++u < a; )
      v[u] = c(u);
    return v;
  }
  function je(a) {
    return function(c) {
      return a(c);
    };
  }
  function Le(a, c) {
    return a == null ? void 0 : a[c];
  }
  function Or(a, c) {
    return function(u) {
      return a(c(u));
    };
  }
  var Ar = Array.prototype, We = Function.prototype, Me = Object.prototype, Qe = ke["__core-js_shared__"], Ce = We.toString, me = Me.hasOwnProperty, Pr = function() {
    var a = /[^.]+$/.exec(Qe && Qe.keys && Qe.keys.IE_PROTO || "");
    return a ? "Symbol(src)_1." + a : "";
  }(), Ze = Me.toString, Ir = Ce.call(Object), Ne = RegExp(
    "^" + Ce.call(me).replace(Rr, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), ze = Be ? ke.Buffer : void 0, er = ke.Symbol, rr = ke.Uint8Array;
  ze && ze.allocUnsafe;
  var Ve = Or(Object.getPrototypeOf, Object), Nr = Object.create, dt = Me.propertyIsEnumerable, ft = Ar.splice, Re = er ? er.toStringTag : void 0, Ue = function() {
    try {
      var a = Et(Object, "defineProperty");
      return a({}, "", {}), a;
    } catch {
    }
  }(), pt = ze ? ze.isBuffer : void 0, Dr = Math.max, tr = Date.now, nr = Et(ke, "Map"), ce = Et(Object, "create"), ar = /* @__PURE__ */ function() {
    function a() {
    }
    return function(c) {
      if (!$e(c))
        return {};
      if (Nr)
        return Nr(c);
      a.prototype = c;
      var u = new a();
      return a.prototype = void 0, u;
    };
  }();
  function pe(a) {
    var c = -1, u = a == null ? 0 : a.length;
    for (this.clear(); ++c < u; ) {
      var v = a[c];
      this.set(v[0], v[1]);
    }
  }
  function $r() {
    this.__data__ = ce ? ce(null) : {}, this.size = 0;
  }
  function ht(a) {
    var c = this.has(a) && delete this.__data__[a];
    return this.size -= c ? 1 : 0, c;
  }
  function Fr(a) {
    var c = this.__data__;
    if (ce) {
      var u = c[a];
      return u === n ? void 0 : u;
    }
    return me.call(c, a) ? c[a] : void 0;
  }
  function gt(a) {
    var c = this.__data__;
    return ce ? c[a] !== void 0 : me.call(c, a);
  }
  function Br(a, c) {
    var u = this.__data__;
    return this.size += this.has(a) ? 0 : 1, u[a] = ce && c === void 0 ? n : c, this;
  }
  pe.prototype.clear = $r, pe.prototype.delete = ht, pe.prototype.get = Fr, pe.prototype.has = gt, pe.prototype.set = Br;
  function le(a) {
    var c = -1, u = a == null ? 0 : a.length;
    for (this.clear(); ++c < u; ) {
      var v = a[c];
      this.set(v[0], v[1]);
    }
  }
  function bt() {
    this.__data__ = [], this.size = 0;
  }
  function mt(a) {
    var c = this.__data__, u = De(c, a);
    if (u < 0)
      return !1;
    var v = c.length - 1;
    return u == v ? c.pop() : ft.call(c, u, 1), --this.size, !0;
  }
  function jr(a) {
    var c = this.__data__, u = De(c, a);
    return u < 0 ? void 0 : c[u][1];
  }
  function vt(a) {
    return De(this.__data__, a) > -1;
  }
  function yt(a, c) {
    var u = this.__data__, v = De(u, a);
    return v < 0 ? (++this.size, u.push([a, c])) : u[v][1] = c, this;
  }
  le.prototype.clear = bt, le.prototype.delete = mt, le.prototype.get = jr, le.prototype.has = vt, le.prototype.set = yt;
  function Oe(a) {
    var c = -1, u = a == null ? 0 : a.length;
    for (this.clear(); ++c < u; ) {
      var v = a[c];
      this.set(v[0], v[1]);
    }
  }
  function _t() {
    this.size = 0, this.__data__ = {
      hash: new pe(),
      map: new (nr || le)(),
      string: new pe()
    };
  }
  function i(a) {
    var c = Wr(this, a).delete(a);
    return this.size -= c ? 1 : 0, c;
  }
  function p(a) {
    return Wr(this, a).get(a);
  }
  function m(a) {
    return Wr(this, a).has(a);
  }
  function k(a, c) {
    var u = Wr(this, a), v = u.size;
    return u.set(a, c), this.size += u.size == v ? 0 : 1, this;
  }
  Oe.prototype.clear = _t, Oe.prototype.delete = i, Oe.prototype.get = p, Oe.prototype.has = m, Oe.prototype.set = k;
  function C(a) {
    var c = this.__data__ = new le(a);
    this.size = c.size;
  }
  function j() {
    this.__data__ = new le(), this.size = 0;
  }
  function A(a) {
    var c = this.__data__, u = c.delete(a);
    return this.size = c.size, u;
  }
  function x(a) {
    return this.__data__.get(a);
  }
  function J(a) {
    return this.__data__.has(a);
  }
  function Y(a, c) {
    var u = this.__data__;
    if (u instanceof le) {
      var v = u.__data__;
      if (!nr || v.length < t - 1)
        return v.push([a, c]), this.size = ++u.size, this;
      u = this.__data__ = new Oe(v);
    }
    return u.set(a, c), this.size = u.size, this;
  }
  C.prototype.clear = j, C.prototype.delete = A, C.prototype.get = x, C.prototype.has = J, C.prototype.set = Y;
  function G(a, c) {
    var u = Rt(a), v = !u && kt(a), I = !u && !v && dn(a), W = !u && !v && !I && pn(a), V = u || v || I || W, D = V ? ut(a.length, String) : [], U = D.length;
    for (var he in a)
      V && // Safari 9 has enumerable `arguments.length` in strict mode.
      (he == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      I && (he == "offset" || he == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      W && (he == "buffer" || he == "byteLength" || he == "byteOffset") || // Skip index properties.
      ln(he, U)) || D.push(he);
    return D;
  }
  function ee(a, c, u) {
    (u !== void 0 && !Mr(a[c], u) || u === void 0 && !(c in a)) && ae(a, c, u);
  }
  function Ae(a, c, u) {
    var v = a[c];
    (!(me.call(a, c) && Mr(v, u)) || u === void 0 && !(c in a)) && ae(a, c, u);
  }
  function De(a, c) {
    for (var u = a.length; u--; )
      if (Mr(a[u][0], c))
        return u;
    return -1;
  }
  function ae(a, c, u) {
    c == "__proto__" && Ue ? Ue(a, c, {
      configurable: !0,
      enumerable: !0,
      value: u,
      writable: !0
    }) : a[c] = u;
  }
  var va = Pa();
  function Lr(a) {
    return a == null ? a === void 0 ? N : R : Re && Re in Object(a) ? Ia(a) : ja(a);
  }
  function sn(a) {
    return or(a) && Lr(a) == d;
  }
  function ya(a) {
    if (!$e(a) || Fa(a))
      return !1;
    var c = Tt(a) ? Ne : wr;
    return c.test(za(a));
  }
  function _a(a) {
    return or(a) && fn(a.length) && !!L[Lr(a)];
  }
  function Ea(a) {
    if (!$e(a))
      return Ba(a);
    var c = un(a), u = [];
    for (var v in a)
      v == "constructor" && (c || !me.call(a, v)) || u.push(v);
    return u;
  }
  function cn(a, c, u, v, I) {
    a !== c && va(c, function(W, V) {
      if (I || (I = new C()), $e(W))
        Sa(a, c, V, u, cn, v, I);
      else {
        var D = v ? v(St(a, V), W, V + "", a, c, I) : void 0;
        D === void 0 && (D = W), ee(a, V, D);
      }
    }, hn);
  }
  function Sa(a, c, u, v, I, W, V) {
    var D = St(a, u), U = St(c, u), he = V.get(U);
    if (he) {
      ee(a, u, he);
      return;
    }
    var oe = W ? W(D, U, u + "", a, c, V) : void 0, ir = oe === void 0;
    if (ir) {
      var xt = Rt(U), Ct = !xt && dn(U), bn = !xt && !Ct && pn(U);
      oe = U, xt || Ct || bn ? Rt(D) ? oe = D : Va(D) ? oe = Ca(D) : Ct ? (ir = !1, oe = wa(U)) : bn ? (ir = !1, oe = xa(U)) : oe = [] : Ua(U) || kt(U) ? (oe = D, kt(D) ? oe = Ha(D) : (!$e(D) || Tt(D)) && (oe = Na(U))) : ir = !1;
    }
    ir && (V.set(U, oe), I(oe, U, v, W, V), V.delete(U)), ee(a, u, oe);
  }
  function ka(a, c) {
    return Wa(La(a, c, gn), a + "");
  }
  var Ra = Ue ? function(a, c) {
    return Ue(a, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Ga(c),
      writable: !0
    });
  } : gn;
  function wa(a, c) {
    return a.slice();
  }
  function Ta(a) {
    var c = new a.constructor(a.byteLength);
    return new rr(c).set(new rr(a)), c;
  }
  function xa(a, c) {
    var u = Ta(a.buffer);
    return new a.constructor(u, a.byteOffset, a.length);
  }
  function Ca(a, c) {
    var u = -1, v = a.length;
    for (c || (c = Array(v)); ++u < v; )
      c[u] = a[u];
    return c;
  }
  function Oa(a, c, u, v) {
    var I = !u;
    u || (u = {});
    for (var W = -1, V = c.length; ++W < V; ) {
      var D = c[W], U = void 0;
      U === void 0 && (U = a[D]), I ? ae(u, D, U) : Ae(u, D, U);
    }
    return u;
  }
  function Aa(a) {
    return ka(function(c, u) {
      var v = -1, I = u.length, W = I > 1 ? u[I - 1] : void 0, V = I > 2 ? u[2] : void 0;
      for (W = a.length > 3 && typeof W == "function" ? (I--, W) : void 0, V && Da(u[0], u[1], V) && (W = I < 3 ? void 0 : W, I = 1), c = Object(c); ++v < I; ) {
        var D = u[v];
        D && a(c, D, v, W);
      }
      return c;
    });
  }
  function Pa(a) {
    return function(c, u, v) {
      for (var I = -1, W = Object(c), V = v(c), D = V.length; D--; ) {
        var U = V[++I];
        if (u(W[U], U, W) === !1)
          break;
      }
      return c;
    };
  }
  function Wr(a, c) {
    var u = a.__data__;
    return $a(c) ? u[typeof c == "string" ? "string" : "hash"] : u.map;
  }
  function Et(a, c) {
    var u = Le(a, c);
    return ya(u) ? u : void 0;
  }
  function Ia(a) {
    var c = me.call(a, Re), u = a[Re];
    try {
      a[Re] = void 0;
      var v = !0;
    } catch {
    }
    var I = Ze.call(a);
    return v && (c ? a[Re] = u : delete a[Re]), I;
  }
  function Na(a) {
    return typeof a.constructor == "function" && !un(a) ? ar(Ve(a)) : {};
  }
  function ln(a, c) {
    var u = typeof a;
    return c = c ?? f, !!c && (u == "number" || u != "symbol" && Tr.test(a)) && a > -1 && a % 1 == 0 && a < c;
  }
  function Da(a, c, u) {
    if (!$e(u))
      return !1;
    var v = typeof c;
    return (v == "number" ? wt(u) && ln(c, u.length) : v == "string" && c in u) ? Mr(u[c], a) : !1;
  }
  function $a(a) {
    var c = typeof a;
    return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? a !== "__proto__" : a === null;
  }
  function Fa(a) {
    return !!Pr && Pr in a;
  }
  function un(a) {
    var c = a && a.constructor, u = typeof c == "function" && c.prototype || Me;
    return a === u;
  }
  function Ba(a) {
    var c = [];
    if (a != null)
      for (var u in Object(a))
        c.push(u);
    return c;
  }
  function ja(a) {
    return Ze.call(a);
  }
  function La(a, c, u) {
    return c = Dr(c === void 0 ? a.length - 1 : c, 0), function() {
      for (var v = arguments, I = -1, W = Dr(v.length - c, 0), V = Array(W); ++I < W; )
        V[I] = v[c + I];
      I = -1;
      for (var D = Array(c + 1); ++I < c; )
        D[I] = v[I];
      return D[c] = u(V), lt(a, this, D);
    };
  }
  function St(a, c) {
    if (!(c === "constructor" && typeof a[c] == "function") && c != "__proto__")
      return a[c];
  }
  var Wa = Ma(Ra);
  function Ma(a) {
    var c = 0, u = 0;
    return function() {
      var v = tr(), I = l - (v - u);
      if (u = v, I > 0) {
        if (++c >= o)
          return arguments[0];
      } else
        c = 0;
      return a.apply(void 0, arguments);
    };
  }
  function za(a) {
    if (a != null) {
      try {
        return Ce.call(a);
      } catch {
      }
      try {
        return a + "";
      } catch {
      }
    }
    return "";
  }
  function Mr(a, c) {
    return a === c || a !== a && c !== c;
  }
  var kt = sn(/* @__PURE__ */ function() {
    return arguments;
  }()) ? sn : function(a) {
    return or(a) && me.call(a, "callee") && !dt.call(a, "callee");
  }, Rt = Array.isArray;
  function wt(a) {
    return a != null && fn(a.length) && !Tt(a);
  }
  function Va(a) {
    return or(a) && wt(a);
  }
  var dn = pt || Xa;
  function Tt(a) {
    if (!$e(a))
      return !1;
    var c = Lr(a);
    return c == T || c == O || c == g || c == z;
  }
  function fn(a) {
    return typeof a == "number" && a > -1 && a % 1 == 0 && a <= f;
  }
  function $e(a) {
    var c = typeof a;
    return a != null && (c == "object" || c == "function");
  }
  function or(a) {
    return a != null && typeof a == "object";
  }
  function Ua(a) {
    if (!or(a) || Lr(a) != E)
      return !1;
    var c = Ve(a);
    if (c === null)
      return !0;
    var u = me.call(c, "constructor") && c.constructor;
    return typeof u == "function" && u instanceof u && Ce.call(u) == Ir;
  }
  var pn = Je ? je(Je) : _a;
  function Ha(a) {
    return Oa(a, hn(a));
  }
  function hn(a) {
    return wt(a) ? G(a) : Ea(a);
  }
  var Ya = Aa(function(a, c, u, v) {
    cn(a, c, u, v);
  });
  function Ga(a) {
    return function() {
      return a;
    };
  }
  function gn(a) {
    return a;
  }
  function Xa() {
    return !1;
  }
  e.exports = Ya;
})(Zr, Zr.exports);
var di = Zr.exports;
const fr = /* @__PURE__ */ co(di);
var fi = (e) => /!(important)?$/.test(e), $n = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, pi = (e, r) => (t) => {
  const n = String(r), o = fi(n), l = $n(n), f = e ? `${e}.${l}` : l;
  let d = Ge(t.__cssMap) && f in t.__cssMap ? t.__cssMap[f].varRef : r;
  return d = $n(d), o ? `${d} !important` : d;
};
function tn(e) {
  const { scale: r, transform: t, compose: n } = e;
  return (l, f) => {
    var d;
    const h = pi(r, l)(f);
    let g = (d = t == null ? void 0 : t(h, f)) != null ? d : h;
    return n && (g = n(g, f)), g;
  };
}
var Ur = (...e) => (r) => e.reduce((t, n) => n(t), r);
function ue(e, r) {
  return (t) => {
    const n = { property: t, scale: e };
    return n.transform = tn({
      scale: e,
      transform: r
    }), n;
  };
}
var hi = ({ rtl: e, ltr: r }) => (t) => t.direction === "rtl" ? e : r;
function gi(e) {
  const { property: r, scale: t, transform: n } = e;
  return {
    scale: t,
    property: hi(r),
    transform: t ? tn({
      scale: t,
      compose: n
    }) : n
  };
}
var da = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function bi() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...da
  ].join(" ");
}
function mi() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...da
  ].join(" ");
}
var vi = {
  "--chakra-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-sepia": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-drop-shadow": "var(--chakra-empty,/*!*/ /*!*/)",
  filter: [
    "var(--chakra-blur)",
    "var(--chakra-brightness)",
    "var(--chakra-contrast)",
    "var(--chakra-grayscale)",
    "var(--chakra-hue-rotate)",
    "var(--chakra-invert)",
    "var(--chakra-saturate)",
    "var(--chakra-sepia)",
    "var(--chakra-drop-shadow)"
  ].join(" ")
}, yi = {
  backdropFilter: [
    "var(--chakra-backdrop-blur)",
    "var(--chakra-backdrop-brightness)",
    "var(--chakra-backdrop-contrast)",
    "var(--chakra-backdrop-grayscale)",
    "var(--chakra-backdrop-hue-rotate)",
    "var(--chakra-backdrop-invert)",
    "var(--chakra-backdrop-opacity)",
    "var(--chakra-backdrop-saturate)",
    "var(--chakra-backdrop-sepia)"
  ].join(" "),
  "--chakra-backdrop-blur": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-brightness": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-contrast": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-grayscale": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-hue-rotate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-invert": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-opacity": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-saturate": "var(--chakra-empty,/*!*/ /*!*/)",
  "--chakra-backdrop-sepia": "var(--chakra-empty,/*!*/ /*!*/)"
};
function _i(e) {
  return {
    "--chakra-ring-offset-shadow": "var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)",
    "--chakra-ring-shadow": "var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)",
    "--chakra-ring-width": e,
    boxShadow: [
      "var(--chakra-ring-offset-shadow)",
      "var(--chakra-ring-shadow)",
      "var(--chakra-shadow, 0 0 #0000)"
    ].join(", ")
  };
}
var Ei = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Mt = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, Si = new Set(Object.values(Mt)), zt = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), ki = (e) => e.trim();
function Ri(e, r) {
  if (e == null || zt.has(e))
    return e;
  if (!(Vt(e) || zt.has(e)))
    return `url('${e}')`;
  const o = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), l = o == null ? void 0 : o[1], f = o == null ? void 0 : o[2];
  if (!l || !f)
    return e;
  const d = l.includes("-gradient") ? l : `${l}-gradient`, [h, ...g] = f.split(",").map(ki).filter(Boolean);
  if ((g == null ? void 0 : g.length) === 0)
    return e;
  const b = h in Mt ? Mt[h] : h;
  g.unshift(b);
  const S = g.map((_) => {
    if (Si.has(_))
      return _;
    const T = _.indexOf(" "), [O, y] = T !== -1 ? [_.substr(0, T), _.substr(T + 1)] : [_], w = Vt(y) ? y : y && y.split(" "), R = `colors.${O}`, E = R in r.__cssMap ? r.__cssMap[R].varRef : O;
    return w ? [
      E,
      ...Array.isArray(w) ? w : [w]
    ].join(" ") : E;
  });
  return `${d}(${S.join(", ")})`;
}
var Vt = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), wi = (e, r) => Ri(e, r ?? {});
function Ti(e) {
  return /^var\(--.+\)$/.test(e);
}
var xi = (e) => {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}, ve = (e) => (r) => `${e}(${r})`, P = {
  filter(e) {
    return e !== "auto" ? e : vi;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : yi;
  },
  ring(e) {
    return _i(P.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? bi() : e === "auto-gpu" ? mi() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = xi(e);
    return r || typeof e == "number" ? `${e}px` : e;
  },
  fraction(e) {
    return typeof e != "number" || e > 1 ? e : `${e * 100}%`;
  },
  float(e, r) {
    const t = { left: "right", right: "left" };
    return r.direction === "rtl" ? t[e] : e;
  },
  degree(e) {
    if (Ti(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: wi,
  blur: ve("blur"),
  opacity: ve("opacity"),
  brightness: ve("brightness"),
  contrast: ve("contrast"),
  dropShadow: ve("drop-shadow"),
  grayscale: ve("grayscale"),
  hueRotate: (e) => ve("hue-rotate")(P.degree(e)),
  invert: ve("invert"),
  saturate: ve("saturate"),
  sepia: ve("sepia"),
  bgImage(e) {
    return e == null || Vt(e) || zt.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: t, divide: n } = (r = Ei[e]) != null ? r : {}, o = { flexDirection: e };
    return t && (o[t] = 1), n && (o[n] = 1), o;
  }
}, s = {
  borderWidths: ue("borderWidths"),
  borderStyles: ue("borderStyles"),
  colors: ue("colors"),
  borders: ue("borders"),
  gradients: ue("gradients", P.gradient),
  radii: ue("radii", P.px),
  space: ue("space", Ur(P.vh, P.px)),
  spaceT: ue("space", Ur(P.vh, P.px)),
  degreeT(e) {
    return { property: e, transform: P.degree };
  },
  prop(e, r, t) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: tn({ scale: r, transform: t })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: ue("sizes", Ur(P.vh, P.px)),
  sizesT: ue("sizes", Ur(P.vh, P.fraction)),
  shadows: ue("shadows"),
  logical: gi,
  blur: ue("blur", P.blur)
}, Xr = {
  background: s.colors("background"),
  backgroundColor: s.colors("backgroundColor"),
  backgroundImage: s.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: P.bgClip },
  bgSize: s.prop("backgroundSize"),
  bgPosition: s.prop("backgroundPosition"),
  bg: s.colors("background"),
  bgColor: s.colors("backgroundColor"),
  bgPos: s.prop("backgroundPosition"),
  bgRepeat: s.prop("backgroundRepeat"),
  bgAttachment: s.prop("backgroundAttachment"),
  bgGradient: s.gradients("backgroundImage"),
  bgClip: { transform: P.bgClip }
};
Object.assign(Xr, {
  bgImage: Xr.backgroundImage,
  bgImg: Xr.backgroundImage
});
var $ = {
  border: s.borders("border"),
  borderWidth: s.borderWidths("borderWidth"),
  borderStyle: s.borderStyles("borderStyle"),
  borderColor: s.colors("borderColor"),
  borderRadius: s.radii("borderRadius"),
  borderTop: s.borders("borderTop"),
  borderBlockStart: s.borders("borderBlockStart"),
  borderTopLeftRadius: s.radii("borderTopLeftRadius"),
  borderStartStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: s.radii("borderTopRightRadius"),
  borderStartEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: s.borders("borderRight"),
  borderInlineEnd: s.borders("borderInlineEnd"),
  borderBottom: s.borders("borderBottom"),
  borderBlockEnd: s.borders("borderBlockEnd"),
  borderBottomLeftRadius: s.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: s.radii("borderBottomRightRadius"),
  borderLeft: s.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: s.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: s.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: s.borders(["borderLeft", "borderRight"]),
  borderInline: s.borders("borderInline"),
  borderY: s.borders(["borderTop", "borderBottom"]),
  borderBlock: s.borders("borderBlock"),
  borderTopWidth: s.borderWidths("borderTopWidth"),
  borderBlockStartWidth: s.borderWidths("borderBlockStartWidth"),
  borderTopColor: s.colors("borderTopColor"),
  borderBlockStartColor: s.colors("borderBlockStartColor"),
  borderTopStyle: s.borderStyles("borderTopStyle"),
  borderBlockStartStyle: s.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: s.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: s.borderWidths("borderBlockEndWidth"),
  borderBottomColor: s.colors("borderBottomColor"),
  borderBlockEndColor: s.colors("borderBlockEndColor"),
  borderBottomStyle: s.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: s.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: s.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: s.borderWidths("borderInlineStartWidth"),
  borderLeftColor: s.colors("borderLeftColor"),
  borderInlineStartColor: s.colors("borderInlineStartColor"),
  borderLeftStyle: s.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: s.borderStyles("borderInlineStartStyle"),
  borderRightWidth: s.borderWidths("borderRightWidth"),
  borderInlineEndWidth: s.borderWidths("borderInlineEndWidth"),
  borderRightColor: s.colors("borderRightColor"),
  borderInlineEndColor: s.colors("borderInlineEndColor"),
  borderRightStyle: s.borderStyles("borderRightStyle"),
  borderInlineEndStyle: s.borderStyles("borderInlineEndStyle"),
  borderTopRadius: s.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: s.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: s.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: s.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign($, {
  rounded: $.borderRadius,
  roundedTop: $.borderTopRadius,
  roundedTopLeft: $.borderTopLeftRadius,
  roundedTopRight: $.borderTopRightRadius,
  roundedTopStart: $.borderStartStartRadius,
  roundedTopEnd: $.borderStartEndRadius,
  roundedBottom: $.borderBottomRadius,
  roundedBottomLeft: $.borderBottomLeftRadius,
  roundedBottomRight: $.borderBottomRightRadius,
  roundedBottomStart: $.borderEndStartRadius,
  roundedBottomEnd: $.borderEndEndRadius,
  roundedLeft: $.borderLeftRadius,
  roundedRight: $.borderRightRadius,
  roundedStart: $.borderInlineStartRadius,
  roundedEnd: $.borderInlineEndRadius,
  borderStart: $.borderInlineStart,
  borderEnd: $.borderInlineEnd,
  borderTopStartRadius: $.borderStartStartRadius,
  borderTopEndRadius: $.borderStartEndRadius,
  borderBottomStartRadius: $.borderEndStartRadius,
  borderBottomEndRadius: $.borderEndEndRadius,
  borderStartRadius: $.borderInlineStartRadius,
  borderEndRadius: $.borderInlineEndRadius,
  borderStartWidth: $.borderInlineStartWidth,
  borderEndWidth: $.borderInlineEndWidth,
  borderStartColor: $.borderInlineStartColor,
  borderEndColor: $.borderInlineEndColor,
  borderStartStyle: $.borderInlineStartStyle,
  borderEndStyle: $.borderInlineEndStyle
});
var Ci = {
  color: s.colors("color"),
  textColor: s.colors("color"),
  fill: s.colors("fill"),
  stroke: s.colors("stroke")
}, Ut = {
  boxShadow: s.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: s.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: s.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Ut, {
  shadow: Ut.boxShadow
});
var Oi = {
  filter: { transform: P.filter },
  blur: s.blur("--chakra-blur"),
  brightness: s.propT("--chakra-brightness", P.brightness),
  contrast: s.propT("--chakra-contrast", P.contrast),
  hueRotate: s.propT("--chakra-hue-rotate", P.hueRotate),
  invert: s.propT("--chakra-invert", P.invert),
  saturate: s.propT("--chakra-saturate", P.saturate),
  dropShadow: s.propT("--chakra-drop-shadow", P.dropShadow),
  backdropFilter: { transform: P.backdropFilter },
  backdropBlur: s.blur("--chakra-backdrop-blur"),
  backdropBrightness: s.propT(
    "--chakra-backdrop-brightness",
    P.brightness
  ),
  backdropContrast: s.propT("--chakra-backdrop-contrast", P.contrast),
  backdropHueRotate: s.propT(
    "--chakra-backdrop-hue-rotate",
    P.hueRotate
  ),
  backdropInvert: s.propT("--chakra-backdrop-invert", P.invert),
  backdropSaturate: s.propT("--chakra-backdrop-saturate", P.saturate)
}, et = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: P.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: s.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: s.space("gap"),
  rowGap: s.space("rowGap"),
  columnGap: s.space("columnGap")
};
Object.assign(et, {
  flexDir: et.flexDirection
});
var fa = {
  gridGap: s.space("gridGap"),
  gridColumnGap: s.space("gridColumnGap"),
  gridRowGap: s.space("gridRowGap"),
  gridColumn: !0,
  gridRow: !0,
  gridAutoFlow: !0,
  gridAutoColumns: !0,
  gridColumnStart: !0,
  gridColumnEnd: !0,
  gridRowStart: !0,
  gridRowEnd: !0,
  gridAutoRows: !0,
  gridTemplate: !0,
  gridTemplateColumns: !0,
  gridTemplateRows: !0,
  gridTemplateAreas: !0,
  gridArea: !0
}, Ai = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: P.outline },
  outlineOffset: !0,
  outlineColor: s.colors("outlineColor")
}, de = {
  width: s.sizesT("width"),
  inlineSize: s.sizesT("inlineSize"),
  height: s.sizes("height"),
  blockSize: s.sizes("blockSize"),
  boxSize: s.sizes(["width", "height"]),
  minWidth: s.sizes("minWidth"),
  minInlineSize: s.sizes("minInlineSize"),
  minHeight: s.sizes("minHeight"),
  minBlockSize: s.sizes("minBlockSize"),
  maxWidth: s.sizes("maxWidth"),
  maxInlineSize: s.sizes("maxInlineSize"),
  maxHeight: s.sizes("maxHeight"),
  maxBlockSize: s.sizes("maxBlockSize"),
  overflow: !0,
  overflowX: !0,
  overflowY: !0,
  overscrollBehavior: !0,
  overscrollBehaviorX: !0,
  overscrollBehaviorY: !0,
  display: !0,
  aspectRatio: !0,
  hideFrom: {
    scale: "breakpoints",
    transform: (e, r) => {
      var t, n, o;
      return { [`@media screen and (min-width: ${(o = (n = (t = r.__breakpoints) == null ? void 0 : t.get(e)) == null ? void 0 : n.minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, r) => {
      var t, n, o;
      return { [`@media screen and (max-width: ${(o = (n = (t = r.__breakpoints) == null ? void 0 : t.get(e)) == null ? void 0 : n._minW) != null ? o : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: s.propT("float", P.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(de, {
  w: de.width,
  h: de.height,
  minW: de.minWidth,
  maxW: de.maxWidth,
  minH: de.minHeight,
  maxH: de.maxHeight,
  overscroll: de.overscrollBehavior,
  overscrollX: de.overscrollBehaviorX,
  overscrollY: de.overscrollBehaviorY
});
var Pi = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: s.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: s.prop("listStyleImage")
};
function Ii(e, r, t, n) {
  const o = typeof r == "string" ? r.split(".") : [r];
  for (n = 0; n < o.length && e; n += 1)
    e = e[o[n]];
  return e === void 0 ? t : e;
}
var Ni = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (n, o, l, f) => {
    if (typeof n > "u")
      return e(n, o, l);
    r.has(n) || r.set(n, /* @__PURE__ */ new Map());
    const d = r.get(n);
    if (d.has(o))
      return d.get(o);
    const h = e(n, o, l, f);
    return d.set(o, h), h;
  };
}, Di = Ni(Ii), $i = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Fi = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Pt = (e, r, t) => {
  const n = {}, o = Di(e, r, {});
  for (const l in o)
    l in t && t[l] != null || (n[l] = o[l]);
  return n;
}, Bi = {
  srOnly: {
    transform(e) {
      return e === !0 ? $i : e === "focusable" ? Fi : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, t) => Pt(r, `layerStyles.${e}`, t)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, t) => Pt(r, `textStyles.${e}`, t)
  },
  apply: {
    processResult: !0,
    transform: (e, r, t) => Pt(r, e, t)
  }
}, hr = {
  position: !0,
  pos: s.prop("position"),
  zIndex: s.prop("zIndex", "zIndices"),
  inset: s.spaceT("inset"),
  insetX: s.spaceT(["left", "right"]),
  insetInline: s.spaceT("insetInline"),
  insetY: s.spaceT(["top", "bottom"]),
  insetBlock: s.spaceT("insetBlock"),
  top: s.spaceT("top"),
  insetBlockStart: s.spaceT("insetBlockStart"),
  bottom: s.spaceT("bottom"),
  insetBlockEnd: s.spaceT("insetBlockEnd"),
  left: s.spaceT("left"),
  insetInlineStart: s.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: s.spaceT("right"),
  insetInlineEnd: s.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(hr, {
  insetStart: hr.insetInlineStart,
  insetEnd: hr.insetInlineEnd
});
var ji = {
  ring: { transform: P.ring },
  ringColor: s.colors("--chakra-ring-color"),
  ringOffset: s.prop("--chakra-ring-offset-width"),
  ringOffsetColor: s.colors("--chakra-ring-offset-color"),
  ringInset: s.prop("--chakra-ring-inset")
}, M = {
  margin: s.spaceT("margin"),
  marginTop: s.spaceT("marginTop"),
  marginBlockStart: s.spaceT("marginBlockStart"),
  marginRight: s.spaceT("marginRight"),
  marginInlineEnd: s.spaceT("marginInlineEnd"),
  marginBottom: s.spaceT("marginBottom"),
  marginBlockEnd: s.spaceT("marginBlockEnd"),
  marginLeft: s.spaceT("marginLeft"),
  marginInlineStart: s.spaceT("marginInlineStart"),
  marginX: s.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: s.spaceT("marginInline"),
  marginY: s.spaceT(["marginTop", "marginBottom"]),
  marginBlock: s.spaceT("marginBlock"),
  padding: s.space("padding"),
  paddingTop: s.space("paddingTop"),
  paddingBlockStart: s.space("paddingBlockStart"),
  paddingRight: s.space("paddingRight"),
  paddingBottom: s.space("paddingBottom"),
  paddingBlockEnd: s.space("paddingBlockEnd"),
  paddingLeft: s.space("paddingLeft"),
  paddingInlineStart: s.space("paddingInlineStart"),
  paddingInlineEnd: s.space("paddingInlineEnd"),
  paddingX: s.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: s.space("paddingInline"),
  paddingY: s.space(["paddingTop", "paddingBottom"]),
  paddingBlock: s.space("paddingBlock")
};
Object.assign(M, {
  m: M.margin,
  mt: M.marginTop,
  mr: M.marginRight,
  me: M.marginInlineEnd,
  marginEnd: M.marginInlineEnd,
  mb: M.marginBottom,
  ml: M.marginLeft,
  ms: M.marginInlineStart,
  marginStart: M.marginInlineStart,
  mx: M.marginX,
  my: M.marginY,
  p: M.padding,
  pt: M.paddingTop,
  py: M.paddingY,
  px: M.paddingX,
  pb: M.paddingBottom,
  pl: M.paddingLeft,
  ps: M.paddingInlineStart,
  paddingStart: M.paddingInlineStart,
  pr: M.paddingRight,
  pe: M.paddingInlineEnd,
  paddingEnd: M.paddingInlineEnd
});
var Li = {
  textDecorationColor: s.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: s.shadows("textShadow")
}, Wi = {
  clipPath: !0,
  transform: s.propT("transform", P.transform),
  transformOrigin: !0,
  translateX: s.spaceT("--chakra-translate-x"),
  translateY: s.spaceT("--chakra-translate-y"),
  skewX: s.degreeT("--chakra-skew-x"),
  skewY: s.degreeT("--chakra-skew-y"),
  scaleX: s.prop("--chakra-scale-x"),
  scaleY: s.prop("--chakra-scale-y"),
  scale: s.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: s.degreeT("--chakra-rotate")
}, Mi = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: s.prop("transitionDuration", "transition.duration"),
  transitionProperty: s.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: s.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, zi = {
  fontFamily: s.prop("fontFamily", "fonts"),
  fontSize: s.prop("fontSize", "fontSizes", P.px),
  fontWeight: s.prop("fontWeight", "fontWeights"),
  lineHeight: s.prop("lineHeight", "lineHeights"),
  letterSpacing: s.prop("letterSpacing", "letterSpacings"),
  textAlign: !0,
  fontStyle: !0,
  textIndent: !0,
  wordBreak: !0,
  overflowWrap: !0,
  textOverflow: !0,
  textTransform: !0,
  whiteSpace: !0,
  isTruncated: {
    transform(e) {
      if (e === !0)
        return {
          overflow: "hidden",
          textOverflow: "ellipsis",
          whiteSpace: "nowrap"
        };
    }
  },
  noOfLines: {
    static: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      display: "-webkit-box",
      WebkitBoxOrient: "vertical",
      //@ts-ignore
      WebkitLineClamp: "var(--chakra-line-clamp)"
    },
    property: "--chakra-line-clamp"
  }
}, Vi = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: s.spaceT("scrollMargin"),
  scrollMarginTop: s.spaceT("scrollMarginTop"),
  scrollMarginBottom: s.spaceT("scrollMarginBottom"),
  scrollMarginLeft: s.spaceT("scrollMarginLeft"),
  scrollMarginRight: s.spaceT("scrollMarginRight"),
  scrollMarginX: s.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: s.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: s.spaceT("scrollPadding"),
  scrollPaddingTop: s.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: s.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: s.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: s.spaceT("scrollPaddingRight"),
  scrollPaddingX: s.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: s.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function pa(e) {
  return Ge(e) && e.reference ? e.reference : String(e);
}
var it = (e, ...r) => r.map(pa).join(` ${e} `).replace(/calc/g, ""), Fn = (...e) => `calc(${it("+", ...e)})`, Bn = (...e) => `calc(${it("-", ...e)})`, Ht = (...e) => `calc(${it("*", ...e)})`, jn = (...e) => `calc(${it("/", ...e)})`, Ln = (e) => {
  const r = pa(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Ht(r, -1);
}, ur = Object.assign(
  (e) => ({
    add: (...r) => ur(Fn(e, ...r)),
    subtract: (...r) => ur(Bn(e, ...r)),
    multiply: (...r) => ur(Ht(e, ...r)),
    divide: (...r) => ur(jn(e, ...r)),
    negate: () => ur(Ln(e)),
    toString: () => e.toString()
  }),
  {
    add: Fn,
    subtract: Bn,
    multiply: Ht,
    divide: jn,
    negate: Ln
  }
), Q = {
  hover: (e, r) => `${e}:hover ${r}, ${e}[data-hover] ${r}`,
  focus: (e, r) => `${e}:focus ${r}, ${e}[data-focus] ${r}`,
  focusVisible: (e, r) => `${e}:focus-visible ${r}`,
  focusWithin: (e, r) => `${e}:focus-within ${r}`,
  active: (e, r) => `${e}:active ${r}, ${e}[data-active] ${r}`,
  disabled: (e, r) => `${e}:disabled ${r}, ${e}[data-disabled] ${r}`,
  invalid: (e, r) => `${e}:invalid ${r}, ${e}[data-invalid] ${r}`,
  checked: (e, r) => `${e}:checked ${r}, ${e}[data-checked] ${r}`,
  indeterminate: (e, r) => `${e}:indeterminate ${r}, ${e}[aria-checked=mixed] ${r}, ${e}[data-indeterminate] ${r}`,
  readOnly: (e, r) => `${e}:read-only ${r}, ${e}[readonly] ${r}, ${e}[data-read-only] ${r}`,
  expanded: (e, r) => `${e}:read-only ${r}, ${e}[aria-expanded=true] ${r}, ${e}[data-expanded] ${r}`,
  placeholderShown: (e, r) => `${e}:placeholder-shown ${r}`
}, Pe = (e) => ha((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), we = (e) => ha((r) => e(r, "~ &"), "[data-peer]", ".peer"), ha = (e, ...r) => r.map(e).join(", "), nn = {
  /**
   * Styles for CSS selector `&:hover`
   */
  _hover: "&:hover, &[data-hover]",
  /**
   * Styles for CSS Selector `&:active`
   */
  _active: "&:active, &[data-active]",
  /**
   * Styles for CSS selector `&:focus`
   *
   */
  _focus: "&:focus, &[data-focus]",
  /**
   * Styles for the highlighted state.
   */
  _highlighted: "&[data-highlighted]",
  /**
   * Styles to apply when a child of this element has received focus
   * - CSS Selector `&:focus-within`
   */
  _focusWithin: "&:focus-within",
  /**
   * Styles to apply when this element has received focus via tabbing
   * - CSS Selector `&:focus-visible`
   */
  _focusVisible: "&:focus-visible, &[data-focus-visible]",
  /**
   * Styles to apply when this element is disabled. The passed styles are applied to these CSS selectors:
   * - `&[aria-disabled=true]`
   * - `&:disabled`
   * - `&[data-disabled]`
   * - `&[disabled]`
   */
  _disabled: "&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",
  /**
   * Styles for CSS Selector `&:readonly`
   */
  _readOnly: "&[aria-readonly=true], &[readonly], &[data-readonly]",
  /**
   * Styles for CSS selector `&::before`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _before={{content:`""` }}/>
   * ```
   */
  _before: "&::before",
  /**
   * Styles for CSS selector `&::after`
   *
   * NOTE:When using this, ensure the `content` is wrapped in a backtick.
   * @example
   * ```jsx
   * <Box _after={{content:`""` }}/>
   * ```
   */
  _after: "&::after",
  /**
   * Styles for CSS selector `&:empty`
   */
  _empty: "&:empty",
  /**
   * Styles to apply when the ARIA attribute `aria-expanded` is `true`
   * - CSS selector `&[aria-expanded=true]`
   */
  _expanded: "&[aria-expanded=true], &[data-expanded]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `true`
   * - CSS selector `&[aria-checked=true]`
   */
  _checked: "&[aria-checked=true], &[data-checked]",
  /**
   * Styles to apply when the ARIA attribute `aria-grabbed` is `true`
   * - CSS selector `&[aria-grabbed=true]`
   */
  _grabbed: "&[aria-grabbed=true], &[data-grabbed]",
  /**
   * Styles for CSS Selector `&[aria-pressed=true]`
   * Typically used to style the current "pressed" state of toggle buttons
   */
  _pressed: "&[aria-pressed=true], &[data-pressed]",
  /**
   * Styles to apply when the ARIA attribute `aria-invalid` is `true`
   * - CSS selector `&[aria-invalid=true]`
   */
  _invalid: "&[aria-invalid=true], &[data-invalid]",
  /**
   * Styles for the valid state
   * - CSS selector `&[data-valid], &[data-state=valid]`
   */
  _valid: "&[data-valid], &[data-state=valid]",
  /**
   * Styles for CSS Selector `&[aria-busy=true]` or `&[data-loading=true]`.
   * Useful for styling loading states
   */
  _loading: "&[data-loading], &[aria-busy=true]",
  /**
   * Styles to apply when the ARIA attribute `aria-selected` is `true`
   *
   * - CSS selector `&[aria-selected=true]`
   */
  _selected: "&[aria-selected=true], &[data-selected]",
  /**
   * Styles for CSS Selector `[hidden=true]`
   */
  _hidden: "&[hidden], &[data-hidden]",
  /**
   * Styles for CSS Selector `&:-webkit-autofill`
   */
  _autofill: "&:-webkit-autofill",
  /**
   * Styles for CSS Selector `&:nth-child(even)`
   */
  _even: "&:nth-of-type(even)",
  /**
   * Styles for CSS Selector `&:nth-child(odd)`
   */
  _odd: "&:nth-of-type(odd)",
  /**
   * Styles for CSS Selector `&:first-of-type`
   */
  _first: "&:first-of-type",
  /**
   * Styles for CSS selector `&::first-letter`
   *
   * NOTE: This selector is only applied for block-level elements and not preceded by an image or table.
   * @example
   * ```jsx
   * <Text _firstLetter={{ textDecoration: 'underline' }}>Once upon a time</Text>
   * ```
   */
  _firstLetter: "&::first-letter",
  /**
   * Styles for CSS Selector `&:last-of-type`
   */
  _last: "&:last-of-type",
  /**
   * Styles for CSS Selector `&:not(:first-of-type)`
   */
  _notFirst: "&:not(:first-of-type)",
  /**
   * Styles for CSS Selector `&:not(:last-of-type)`
   */
  _notLast: "&:not(:last-of-type)",
  /**
   * Styles for CSS Selector `&:visited`
   */
  _visited: "&:visited",
  /**
   * Used to style the active link in a navigation
   * Styles for CSS Selector `&[aria-current=page]`
   */
  _activeLink: "&[aria-current=page]",
  /**
   * Used to style the current step within a process
   * Styles for CSS Selector `&[aria-current=step]`
   */
  _activeStep: "&[aria-current=step]",
  /**
   * Styles to apply when the ARIA attribute `aria-checked` is `mixed`
   * - CSS selector `&[aria-checked=mixed]`
   */
  _indeterminate: "&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is hovered
   */
  _groupHover: Pe(Q.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: we(Q.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Pe(Q.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: we(Q.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Pe(Q.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: we(Q.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Pe(Q.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: we(Q.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Pe(Q.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: we(Q.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Pe(Q.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: we(Q.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Pe(Q.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: we(Q.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Pe(Q.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: we(Q.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: we(Q.placeholderShown),
  /**
   * Styles for CSS Selector `&::placeholder`.
   */
  _placeholder: "&::placeholder",
  /**
   * Styles for CSS Selector `&:placeholder-shown`.
   */
  _placeholderShown: "&:placeholder-shown",
  /**
   * Styles for CSS Selector `&:fullscreen`.
   */
  _fullScreen: "&:fullscreen",
  /**
   * Styles for CSS Selector `&::selection`
   */
  _selection: "&::selection",
  /**
   * Styles for CSS Selector `[dir=rtl] &`
   * It is applied when a parent element or this element has `dir="rtl"`
   */
  _rtl: "[dir=rtl] &, &[dir=rtl]",
  /**
   * Styles for CSS Selector `[dir=ltr] &`
   * It is applied when a parent element or this element has `dir="ltr"`
   */
  _ltr: "[dir=ltr] &, &[dir=ltr]",
  /**
   * Styles for CSS Selector `@media (prefers-color-scheme: dark)`
   * It is used when the user has requested the system use a light or dark color theme.
   */
  _mediaDark: "@media (prefers-color-scheme: dark)",
  /**
   * Styles for CSS Selector `@media (prefers-reduced-motion: reduce)`
   * It is used when the user has requested the system to reduce the amount of animations.
   */
  _mediaReduceMotion: "@media (prefers-reduced-motion: reduce)",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _dark: ".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",
  /**
   * Styles for when `data-theme` is applied to any parent of
   * this component or element.
   */
  _light: ".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]",
  /**
   * Styles for the CSS Selector `&[data-orientation=horizontal]`
   */
  _horizontal: "&[data-orientation=horizontal]",
  /**
   * Styles for the CSS Selector `&[data-orientation=vertical]`
   */
  _vertical: "&[data-orientation=vertical]"
}, Ui = Object.keys(
  nn
), an = fr(
  {},
  Xr,
  $,
  Ci,
  et,
  de,
  Oi,
  ji,
  Ai,
  fa,
  Bi,
  hr,
  Ut,
  M,
  Vi,
  zi,
  Li,
  Wi,
  Pi,
  Mi
);
Object.assign({}, M, de, et, fa, hr);
var Hi = [...Object.keys(an), ...Ui], Yi = { ...an, ...nn }, Gi = (e) => e in Yi, Xi = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: n, media: o } = r.__breakpoints, l = {};
  for (const f in e) {
    let d = dr(e[f], r);
    if (d == null)
      continue;
    if (d = Ge(d) && t(d) ? n(d) : d, !Array.isArray(d)) {
      l[f] = d;
      continue;
    }
    const h = d.slice(0, o.length).length;
    for (let g = 0; g < h; g += 1) {
      const b = o == null ? void 0 : o[g];
      if (!b) {
        l[f] = d[g];
        continue;
      }
      l[b] = l[b] || {}, d[g] != null && (l[b][f] = d[g]);
    }
  }
  return l;
};
function qi(e) {
  const r = [];
  let t = "", n = !1;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    l === "(" ? (n = !0, t += l) : l === ")" ? (n = !1, t += l) : l === "," && !n ? (r.push(t), t = "") : t += l;
  }
  return t = t.trim(), t && r.push(t), r;
}
function Ki(e) {
  return /^var\(--.+\)$/.test(e);
}
var Ji = (e, r) => e.startsWith("--") && typeof r == "string" && !Ki(r), Qi = (e, r) => {
  var t, n;
  if (r == null)
    return r;
  const o = (h) => {
    var g, b;
    return (b = (g = e.__cssMap) == null ? void 0 : g[h]) == null ? void 0 : b.varRef;
  }, l = (h) => {
    var g;
    return (g = o(h)) != null ? g : h;
  }, [f, d] = qi(r);
  return r = (n = (t = o(f)) != null ? t : l(d)) != null ? n : l(r), r;
};
function Zi(e) {
  const { configs: r = {}, pseudos: t = {}, theme: n } = e, o = (l, f = !1) => {
    var d, h, g;
    const b = dr(l, n), S = Xi(b)(n);
    let _ = {};
    for (let T in S) {
      const O = S[T];
      let y = dr(O, n);
      T in t && (T = t[T]), Ji(T, y) && (y = Qi(n, y));
      let w = r[T];
      if (w === !0 && (w = { property: T }), Ge(y)) {
        _[T] = (d = _[T]) != null ? d : {}, _[T] = fr(
          {},
          _[T],
          o(y, !0)
        );
        continue;
      }
      let R = (g = (h = w == null ? void 0 : w.transform) == null ? void 0 : h.call(w, y, n, b)) != null ? g : y;
      R = w != null && w.processResult ? o(R, !0) : R;
      const E = dr(w == null ? void 0 : w.property, n);
      if (!f && (w != null && w.static)) {
        const z = dr(w.static, n);
        _ = fr({}, _, z);
      }
      if (E && Array.isArray(E)) {
        for (const z of E)
          _[z] = R;
        continue;
      }
      if (E) {
        E === "&" && Ge(R) ? _ = fr({}, _, R) : _[E] = R;
        continue;
      }
      if (Ge(R)) {
        _ = fr({}, _, R);
        continue;
      }
      _[T] = R;
    }
    return _;
  };
  return o;
}
var es = (e) => (r) => Zi({
  theme: r,
  pseudos: nn,
  configs: an
})(e);
function ga(e, r) {
  const t = {};
  return Object.keys(e).forEach((n) => {
    const o = e[n];
    r(o, n, e) && (t[n] = o);
  }), t;
}
var rs = (e) => ga(e, (r) => r != null);
function ts(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function ns(e, ...r) {
  return ts(e) ? e(...r) : e;
}
var as = /* @__PURE__ */ new Set([
  ...Hi,
  "textStyle",
  "layerStyle",
  "apply",
  "noOfLines",
  "focusBorderColor",
  "errorBorderColor",
  "as",
  "__css",
  "css",
  "sx"
]), os = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function is(e) {
  return os.has(e) || !as.has(e);
}
function ss(e, ...r) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const t = { ...e };
  for (const n of r)
    if (n != null)
      for (const o in n)
        Object.prototype.hasOwnProperty.call(n, o) && (o in t && delete t[o], t[o] = n[o]);
  return t;
}
var cs = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, ls = /* @__PURE__ */ ea(
  function(e) {
    return cs.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), us = ls, ds = function(r) {
  return r !== "theme";
}, Wn = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? us : ds;
}, Mn = function(r, t, n) {
  var o;
  if (t) {
    var l = t.shouldForwardProp;
    o = r.__emotion_forwardProp && l ? function(f) {
      return r.__emotion_forwardProp(f) && l(f);
    } : l;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, zn = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, fs = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Qt(t, n, o), ca(function() {
    return aa(t, n, o);
  }), null;
}, ps = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, l, f;
  t !== void 0 && (l = t.label, f = t.target);
  var d = Mn(r, t, n), h = d || Wn(o), g = !h("as");
  return function() {
    var b = arguments, S = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (l !== void 0 && S.push("label:" + l + ";"), b[0] == null || b[0].raw === void 0)
      S.push.apply(S, b);
    else {
      process.env.NODE_ENV !== "production" && b[0][0] === void 0 && console.error(zn), S.push(b[0][0]);
      for (var _ = b.length, T = 1; T < _; T++)
        process.env.NODE_ENV !== "production" && b[0][T] === void 0 && console.error(zn), S.push(b[T], b[0][T]);
    }
    var O = la(function(y, w, R) {
      var E = g && y.as || o, z = "", se = [], q = y;
      if (y.theme == null) {
        q = {};
        for (var K in y)
          q[K] = y[K];
        q.theme = te.useContext(rn);
      }
      typeof y.className == "string" ? z = na(w.registered, se, y.className) : y.className != null && (z = y.className + " ");
      var N = Wt(S.concat(se), w.registered, q);
      z += w.key + "-" + N.name, f !== void 0 && (z += " " + f);
      var Ke = g && d === void 0 ? Wn(E) : h, Ee = {};
      for (var Te in y)
        g && Te === "as" || // $FlowFixMe
        Ke(Te) && (Ee[Te] = y[Te]);
      return Ee.className = z, Ee.ref = R, /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(fs, {
        cache: w,
        serialized: N,
        isStringTag: typeof E == "string"
      }), /* @__PURE__ */ te.createElement(E, Ee));
    });
    return O.displayName = l !== void 0 ? l : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", O.defaultProps = r.defaultProps, O.__emotion_real = O, O.__emotion_base = o, O.__emotion_styles = S, O.__emotion_forwardProp = d, Object.defineProperty(O, "toString", {
      value: function() {
        return f === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + f;
      }
    }), O.withComponent = function(y, w) {
      return e(y, Lt({}, t, w, {
        shouldForwardProp: Mn(O, w, !0)
      })).apply(void 0, S);
    }, O;
  };
}, hs = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], rt = ps.bind();
hs.forEach(function(e) {
  rt[e] = rt(e);
});
var Vn, gs = (Vn = rt.default) != null ? Vn : rt, bs = ({ baseStyle: e }) => (r) => {
  const { theme: t, css: n, __css: o, sx: l, ...f } = r, d = ga(f, (S, _) => Gi(_)), h = ns(e, r), g = ss(
    {},
    o,
    h,
    rs(d),
    l
  ), b = es(g)(r.theme);
  return n ? [b, n] : b;
};
function It(e, r) {
  const { baseStyle: t, ...n } = r ?? {};
  n.shouldForwardProp || (n.shouldForwardProp = is);
  const o = bs({ baseStyle: t }), l = gs(
    e,
    n
  )(o);
  return qr.forwardRef(function(h, g) {
    const { colorMode: b, forced: S } = li();
    return qr.createElement(l, {
      ref: g,
      "data-theme": S ? b : void 0,
      ...h
    });
  });
}
function ms() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(It, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(r, t, n) {
      return It(...n);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(r, t) {
      return e.has(t) || e.set(t, It(t)), e.get(t);
    }
  });
}
var vs = ms();
function ba(e) {
  return Hn(e);
}
var on = vs("div");
on.displayName = "Box";
var ma = ba(function(r, t) {
  const { size: n, centerContent: o = !0, ...l } = r, f = o ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ tt.jsx(
    on,
    {
      ref: t,
      boxSize: n,
      __css: {
        ...f,
        flexShrink: 0,
        flexGrow: 0
      },
      ...l
    }
  );
});
ma.displayName = "Square";
var ys = ba(function(r, t) {
  const { size: n, ...o } = r;
  return /* @__PURE__ */ tt.jsx(ma, { size: n, ref: t, borderRadius: "9999px", ...o });
});
ys.displayName = "Circle";
const Js = qa(() => /* @__PURE__ */ tt.jsx(on, { children: "Skeleton" }));
export {
  mn as ALIGN_ITEMS,
  yn as COLOR_MODE,
  pr as CONTAINER_INITIAL_VALUES,
  Qa as DEFAULT_ALIGN_ITEMS_ALIGNMENT,
  eo as DEFAULT_COLOR_THEMES,
  Rs as DEFAULT_DIRECTION_GRID_COLS,
  Ka as DEFAULT_GAP,
  Ot as DEFAULT_GRID_CONTAINER_HEIGHT,
  Nt as DEFAULT_GRID_CONTAINER_WIDTH,
  ws as DEFAULT_GRID_STYLE,
  Yt as DEFAULT_HEIGHT,
  Ja as DEFAULT_JUSTIFY_ALIGNMENT,
  Ss as DEFAULT_RADIUS,
  Gn as DEFAULT_REPEAT_COUNT,
  Za as DEFAULT_SKELETON_GRADIENT_WIDTH,
  ks as DEFAULT_SKELETON_WIDTH,
  Ts as DEFAULT_VARIANT,
  Gt as DEFAULT_WIDTH,
  Kr as DIRECTION,
  vn as JUSTIFY_CONTENT,
  He as MARGIN_SIDES,
  Cs as REPEAT_COUNT_RANGE,
  Dt as ROOT_KEY,
  Ks as ReactSkeletonProvider,
  H as SIZE_UNITS,
  Os as SIZE_UNITS_INITIAL_VALUES,
  _n as SKELETON_INITIAL_VALUES,
  Es as STYLE_PARSING_REGEXP,
  Js as Skeleton,
  xs as TREE_ELEMENTS_SPACING,
  Us as applicableValue,
  Bs as convertCssToReactStyles,
  qs as convertInitialZeroToValueItSelf,
  Xn as convertToArray,
  Vs as copyExecCommand,
  Xs as filterFromPx,
  $t as filterFromSkeleton,
  Ls as findAbsentIndex,
  Ms as findTrap,
  Ws as generateBorders,
  js as generateCSSGridArea,
  Ps as generateDefaultValues,
  no as generateGridArea,
  ao as generateGridAreaAsColDirection,
  Ds as generateMargin,
  As as getAdaptiveData,
  Gs as getDirectParentWithDataKeyAttr,
  Sn as getGridStructure,
  zs as getParent,
  Hs as isClickedOnSkeleton,
  Ys as isSkeletonHighlighted,
  En as itemsWithRepeat,
  $s as mutateWithRepeated,
  Is as overrideSides,
  ro as responsiveInstance,
  Fs as setOpacity,
  Ns as valueWithPrefix
};
