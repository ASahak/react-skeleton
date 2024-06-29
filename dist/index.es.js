import De, { createContext as dr } from "react";
var G = { exports: {} }, k = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ce;
function vr() {
  if (Ce) return k;
  Ce = 1;
  var n = De, b = Symbol.for("react.element"), F = Symbol.for("react.fragment"), C = Object.prototype.hasOwnProperty, W = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, L = { key: !0, ref: !0, __self: !0, __source: !0 };
  function D(y, d, O) {
    var E, g = {}, _ = null, V = null;
    O !== void 0 && (_ = "" + O), d.key !== void 0 && (_ = "" + d.key), d.ref !== void 0 && (V = d.ref);
    for (E in d) C.call(d, E) && !L.hasOwnProperty(E) && (g[E] = d[E]);
    if (y && y.defaultProps) for (E in d = y.defaultProps, d) g[E] === void 0 && (g[E] = d[E]);
    return { $$typeof: b, type: y, key: _, ref: V, props: g, _owner: W.current };
  }
  return k.Fragment = F, k.jsx = D, k.jsxs = D, k;
}
var S = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oe;
function pr() {
  return Oe || (Oe = 1, process.env.NODE_ENV !== "production" && function() {
    var n = De, b = Symbol.for("react.element"), F = Symbol.for("react.portal"), C = Symbol.for("react.fragment"), W = Symbol.for("react.strict_mode"), L = Symbol.for("react.profiler"), D = Symbol.for("react.provider"), y = Symbol.for("react.context"), d = Symbol.for("react.forward_ref"), O = Symbol.for("react.suspense"), E = Symbol.for("react.suspense_list"), g = Symbol.for("react.memo"), _ = Symbol.for("react.lazy"), V = Symbol.for("react.offscreen"), I = Symbol.iterator, je = "@@iterator";
    function Ae(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = I && e[I] || e[je];
      return typeof r == "function" ? r : null;
    }
    var x = n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function v(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), a = 1; a < r; a++)
          t[a - 1] = arguments[a];
        ke("error", e, t);
      }
    }
    function ke(e, r, t) {
      {
        var a = x.ReactDebugCurrentFrame, u = a.getStackAddendum();
        u !== "" && (r += "%s", t = t.concat([u]));
        var s = t.map(function(i) {
          return String(i);
        });
        s.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Se = !1, We = !1, Le = !1, Ve = !1, $e = !1, ee;
    ee = Symbol.for("react.module.reference");
    function He(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === C || e === L || $e || e === W || e === O || e === E || Ve || e === V || Se || We || Le || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === g || e.$$typeof === D || e.$$typeof === y || e.$$typeof === d || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ee || e.getModuleId !== void 0));
    }
    function Ye(e, r, t) {
      var a = e.displayName;
      if (a)
        return a;
      var u = r.displayName || r.name || "";
      return u !== "" ? t + "(" + u + ")" : t;
    }
    function re(e) {
      return e.displayName || "Context";
    }
    function h(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case C:
          return "Fragment";
        case F:
          return "Portal";
        case L:
          return "Profiler";
        case W:
          return "StrictMode";
        case O:
          return "Suspense";
        case E:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case y:
            var r = e;
            return re(r) + ".Consumer";
          case D:
            var t = e;
            return re(t._context) + ".Provider";
          case d:
            return Ye(e, e.render, "ForwardRef");
          case g:
            var a = e.displayName || null;
            return a !== null ? a : h(e.type) || "Memo";
          case _: {
            var u = e, s = u._payload, i = u._init;
            try {
              return h(i(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var P = Object.assign, j = 0, te, ne, ae, oe, ie, ue, se;
    function fe() {
    }
    fe.__reactDisabledLog = !0;
    function Me() {
      {
        if (j === 0) {
          te = console.log, ne = console.info, ae = console.warn, oe = console.error, ie = console.group, ue = console.groupCollapsed, se = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: fe,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        j++;
      }
    }
    function Be() {
      {
        if (j--, j === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: P({}, e, {
              value: te
            }),
            info: P({}, e, {
              value: ne
            }),
            warn: P({}, e, {
              value: ae
            }),
            error: P({}, e, {
              value: oe
            }),
            group: P({}, e, {
              value: ie
            }),
            groupCollapsed: P({}, e, {
              value: ue
            }),
            groupEnd: P({}, e, {
              value: se
            })
          });
        }
        j < 0 && v("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = x.ReactCurrentDispatcher, U;
    function $(e, r, t) {
      {
        if (U === void 0)
          try {
            throw Error();
          } catch (u) {
            var a = u.stack.trim().match(/\n( *(at )?)/);
            U = a && a[1] || "";
          }
        return `
` + U + e;
      }
    }
    var q = !1, H;
    {
      var Xe = typeof WeakMap == "function" ? WeakMap : Map;
      H = new Xe();
    }
    function le(e, r) {
      if (!e || q)
        return "";
      {
        var t = H.get(e);
        if (t !== void 0)
          return t;
      }
      var a;
      q = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = X.current, X.current = null, Me();
      try {
        if (r) {
          var i = function() {
            throw Error();
          };
          if (Object.defineProperty(i.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(i, []);
            } catch (m) {
              a = m;
            }
            Reflect.construct(e, [], i);
          } else {
            try {
              i.call();
            } catch (m) {
              a = m;
            }
            e.call(i.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (m) {
            a = m;
          }
          e();
        }
      } catch (m) {
        if (m && a && typeof m.stack == "string") {
          for (var o = m.stack.split(`
`), p = a.stack.split(`
`), f = o.length - 1, l = p.length - 1; f >= 1 && l >= 0 && o[f] !== p[l]; )
            l--;
          for (; f >= 1 && l >= 0; f--, l--)
            if (o[f] !== p[l]) {
              if (f !== 1 || l !== 1)
                do
                  if (f--, l--, l < 0 || o[f] !== p[l]) {
                    var R = `
` + o[f].replace(" at new ", " at ");
                    return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), typeof e == "function" && H.set(e, R), R;
                  }
                while (f >= 1 && l >= 0);
              break;
            }
        }
      } finally {
        q = !1, X.current = s, Be(), Error.prepareStackTrace = u;
      }
      var T = e ? e.displayName || e.name : "", Pe = T ? $(T) : "";
      return typeof e == "function" && H.set(e, Pe), Pe;
    }
    function Ue(e, r, t) {
      return le(e, !1);
    }
    function qe(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function Y(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return le(e, qe(e));
      if (typeof e == "string")
        return $(e);
      switch (e) {
        case O:
          return $("Suspense");
        case E:
          return $("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case d:
            return Ue(e.render);
          case g:
            return Y(e.type, r, t);
          case _: {
            var a = e, u = a._payload, s = a._init;
            try {
              return Y(s(u), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var M = Object.prototype.hasOwnProperty, ce = {}, de = x.ReactDebugCurrentFrame;
    function B(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        de.setExtraStackFrame(t);
      } else
        de.setExtraStackFrame(null);
    }
    function ze(e, r, t, a, u) {
      {
        var s = Function.call.bind(M);
        for (var i in e)
          if (s(e, i)) {
            var o = void 0;
            try {
              if (typeof e[i] != "function") {
                var p = Error((a || "React class") + ": " + t + " type `" + i + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[i] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw p.name = "Invariant Violation", p;
              }
              o = e[i](r, i, a, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (f) {
              o = f;
            }
            o && !(o instanceof Error) && (B(u), v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", a || "React class", t, i, typeof o), B(null)), o instanceof Error && !(o.message in ce) && (ce[o.message] = !0, B(u), v("Failed %s type: %s", t, o.message), B(null));
          }
      }
    }
    var Ke = Array.isArray;
    function z(e) {
      return Ke(e);
    }
    function Ne(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function Qe(e) {
      try {
        return ve(e), !1;
      } catch {
        return !0;
      }
    }
    function ve(e) {
      return "" + e;
    }
    function pe(e) {
      if (Qe(e))
        return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(e)), ve(e);
    }
    var A = x.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Ee, Re, K;
    K = {};
    function Ge(e) {
      if (M.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ze(e) {
      if (M.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ie(e, r) {
      if (typeof e.ref == "string" && A.current && r && A.current.stateNode !== r) {
        var t = h(A.current.type);
        K[t] || (v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', h(A.current.type), e.ref), K[t] = !0);
      }
    }
    function er(e, r) {
      {
        var t = function() {
          Ee || (Ee = !0, v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function rr(e, r) {
      {
        var t = function() {
          Re || (Re = !0, v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var tr = function(e, r, t, a, u, s, i) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: b,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: i,
        // Record the component responsible for creating this element.
        _owner: s
      };
      return o._store = {}, Object.defineProperty(o._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(o, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: a
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: u
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function nr(e, r, t, a, u) {
      {
        var s, i = {}, o = null, p = null;
        t !== void 0 && (pe(t), o = "" + t), Ze(r) && (pe(r.key), o = "" + r.key), Ge(r) && (p = r.ref, Ie(r, u));
        for (s in r)
          M.call(r, s) && !Je.hasOwnProperty(s) && (i[s] = r[s]);
        if (e && e.defaultProps) {
          var f = e.defaultProps;
          for (s in f)
            i[s] === void 0 && (i[s] = f[s]);
        }
        if (o || p) {
          var l = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && er(i, l), p && rr(i, l);
        }
        return tr(e, o, p, u, a, A.current, i);
      }
    }
    var N = x.ReactCurrentOwner, ge = x.ReactDebugCurrentFrame;
    function w(e) {
      if (e) {
        var r = e._owner, t = Y(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    var Q;
    Q = !1;
    function J(e) {
      return typeof e == "object" && e !== null && e.$$typeof === b;
    }
    function he() {
      {
        if (N.current) {
          var e = h(N.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function ar(e) {
      return "";
    }
    var me = {};
    function or(e) {
      {
        var r = he();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function be(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = or(r);
        if (me[t])
          return;
        me[t] = !0;
        var a = "";
        e && e._owner && e._owner !== N.current && (a = " It was passed a child from " + h(e._owner.type) + "."), w(e), v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, a), w(null);
      }
    }
    function ye(e, r) {
      {
        if (typeof e != "object")
          return;
        if (z(e))
          for (var t = 0; t < e.length; t++) {
            var a = e[t];
            J(a) && be(a, r);
          }
        else if (J(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var u = Ae(e);
          if (typeof u == "function" && u !== e.entries)
            for (var s = u.call(e), i; !(i = s.next()).done; )
              J(i.value) && be(i.value, r);
        }
      }
    }
    function ir(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === d || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === g))
          t = r.propTypes;
        else
          return;
        if (t) {
          var a = h(r);
          ze(t, e.props, "prop", a, e);
        } else if (r.PropTypes !== void 0 && !Q) {
          Q = !0;
          var u = h(r);
          v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", u || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function ur(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var a = r[t];
          if (a !== "children" && a !== "key") {
            w(e), v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", a), w(null);
            break;
          }
        }
        e.ref !== null && (w(e), v("Invalid attribute `ref` supplied to `React.Fragment`."), w(null));
      }
    }
    function _e(e, r, t, a, u, s) {
      {
        var i = He(e);
        if (!i) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var p = ar();
          p ? o += p : o += he();
          var f;
          e === null ? f = "null" : z(e) ? f = "array" : e !== void 0 && e.$$typeof === b ? (f = "<" + (h(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : f = typeof e, v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", f, o);
        }
        var l = nr(e, r, t, u, s);
        if (l == null)
          return l;
        if (i) {
          var R = r.children;
          if (R !== void 0)
            if (a)
              if (z(R)) {
                for (var T = 0; T < R.length; T++)
                  ye(R[T], e);
                Object.freeze && Object.freeze(R);
              } else
                v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              ye(R, e);
        }
        return e === C ? ur(l) : ir(l), l;
      }
    }
    function sr(e, r, t) {
      return _e(e, r, t, !0);
    }
    function fr(e, r, t) {
      return _e(e, r, t, !1);
    }
    var lr = fr, cr = sr;
    S.Fragment = C, S.jsx = lr, S.jsxs = cr;
  }()), S;
}
process.env.NODE_ENV === "production" ? G.exports = vr() : G.exports = pr();
var Er = G.exports, Z;
(function(n) {
  n.ROW = "row", n.COLUMN = "column";
})(Z || (Z = {}));
var xe;
(function(n) {
  n.TOP = "top", n.RIGHT = "right", n.BOTTOM = "bottom", n.LEFT = "left";
})(xe || (xe = {}));
var we;
(function(n) {
  n.NORMAL = "normal", n.FLEX_START = "flex-start", n.FLEX_END = "flex-end", n.CENTER = "center", n.BASELINE = "baseline", n.STRETCH = "stretch", n.START = "start", n.END = "end", n.SELF_START = "self-start", n.SELF_END = "self-end", n.FIRST_BASELINE = "first baseline", n.LAST_BASELINE = "last baseline", n.SAFE_CENTER = "safe center", n.UNSAFE_CENTER = "unsafe center", n.SAFE_RIGHT = "safe right", n.UNSAFE_RIGHT = "unsafe right", n.SAFE_END = "safe end", n.UNSAFE_END = "unsafe end", n.SAFE_SELF_END = "safe self-end", n.UNSAFE_SELF_END = "unsafe self-end", n.SAFE_FLEX_END = "safe flex-end", n.UNSAFE_FLEX_END = "unsafe flex-end";
})(we || (we = {}));
var Te;
(function(n) {
  n.START = "start", n.END = "end", n.FLEX_START = "flex-start", n.FLEX_END = "flex-end", n.CENTER = "center", n.LEFT = "left", n.RIGHT = "right", n.SPACE_BETWEEN = "space-between", n.SPACE_AROUND = "space-around", n.SPACE_EVENLY = "space-evenly", n.STRETCH = "stretch";
})(Te || (Te = {}));
var c;
(function(n) {
  n.AUTO = "auto", n.PERCENT = "%", n.FN = "fn", n.PX = "px", n.FR = "fr", n.REM = "rem", n.VH = "vh", n.VW = "vw", n.PC = "pc", n.CM = "cm", n.MM = "mm", n.IN = "in", n.PT = "pt", n.CH = "ch", n.EM = "em", n.V_MIN = "vmin", n.V_MAX = "vmax";
})(c || (c = {}));
var Fe;
(function(n) {
  n.DARK = "dark", n.LIGHT = "light";
})(Fe || (Fe = {}));
const Rr = "1", gr = "100%", hr = "100%", mr = "flex-start", br = "flex-start", yr = 0, _r = {
  dark: {
    main: "#282c34",
    gradient: "#2c303a"
  },
  light: {
    main: "#f1f1f1",
    gradient: "#ececec"
  }
};
Z.ROW;
c.FN + "", c.AUTO + "", c.PERCENT + "", c.PX + "", c.FR + "", c.REM + "", c.VH + "", c.VW + "", c.PC + "", c.CM + "", c.MM + "", c.IN + "", c.PT + "", c.CH + "", c.EM + "", c.V_MIN + "", c.V_MAX + "";
const Pr = dr({
  colorTheme: { ..._r },
  breakpoints: {
    // todo
    mobile: "576px",
    tablet: "961px",
    desktop: "962px"
  }
}), Or = ({ children: n, colorTheme: b, breakpoints: F }) => Er.jsx(Pr.Provider, { value: {
  colorTheme: b,
  breakpoints: F
}, children: n });
export {
  Or as ReactSkeletonProvider
};
//# sourceMappingURL=index.es.js.map
