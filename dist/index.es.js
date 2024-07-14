import * as ne from "react";
import za, { forwardRef as Hi, useContext as eo, createContext as Yi, useEffect as Ui, useRef as Gi, useState as pl, useCallback as qi, memo as bl, useMemo as hl } from "react";
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function ml(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Xi = {}, To = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, vl = /\n/g, gl = /^\s*/, yl = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, Sl = /^:\s*/, _l = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, xl = /^[;\s]*/, wl = /^\s+|\s+$/g, kl = `
`, Ro = "/", Ao = "*", yr = "", El = "comment", $l = "declaration", Cl = function(e, r) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  r = r || {};
  var t = 1, a = 1;
  function n(_) {
    var h = _.match(vl);
    h && (t += h.length);
    var x = _.lastIndexOf(kl);
    a = ~x ? _.length - x : a + _.length;
  }
  function i() {
    var _ = { line: t, column: a };
    return function(h) {
      return h.position = new l(_), m(), h;
    };
  }
  function l(_) {
    this.start = _, this.end = { line: t, column: a }, this.source = r.source;
  }
  l.prototype.content = e;
  function u(_) {
    var h = new Error(
      r.source + ":" + t + ":" + a + ": " + _
    );
    if (h.reason = _, h.filename = r.source, h.line = t, h.column = a, h.source = e, !r.silent) throw h;
  }
  function p(_) {
    var h = _.exec(e);
    if (h) {
      var x = h[0];
      return n(x), e = e.slice(x.length), h;
    }
  }
  function m() {
    p(gl);
  }
  function b(_) {
    var h;
    for (_ = _ || []; h = y(); )
      h !== !1 && _.push(h);
    return _;
  }
  function y() {
    var _ = i();
    if (!(Ro != e.charAt(0) || Ao != e.charAt(1))) {
      for (var h = 2; yr != e.charAt(h) && (Ao != e.charAt(h) || Ro != e.charAt(h + 1)); )
        ++h;
      if (h += 2, yr === e.charAt(h - 1))
        return u("End of comment missing");
      var x = e.slice(2, h - 2);
      return a += 2, n(x), e = e.slice(h), a += 2, _({
        type: El,
        comment: x
      });
    }
  }
  function v() {
    var _ = i(), h = p(yl);
    if (h) {
      if (y(), !p(Sl)) return u("property missing ':'");
      var x = p(_l), w = _({
        type: $l,
        property: zo(h[0].replace(To, yr)),
        value: x ? zo(x[0].replace(To, yr)) : yr
      });
      return p(xl), w;
    }
  }
  function E() {
    var _ = [];
    b(_);
    for (var h; h = v(); )
      h !== !1 && (_.push(h), b(_));
    return _;
  }
  return m(), E();
};
function zo(e) {
  return e ? e.replace(wl, yr) : yr;
}
var Tl = Lr && Lr.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Xi, "__esModule", { value: !0 });
var Rl = Tl(Cl);
function Al(e, r) {
  var t = null;
  if (!e || typeof e != "string")
    return t;
  var a = (0, Rl.default)(e), n = typeof r == "function";
  return a.forEach(function(i) {
    if (i.type === "declaration") {
      var l = i.property, u = i.value;
      n ? r(l, u, i) : u && (t = t || {}, t[l] = u);
    }
  }), t;
}
var Po = Xi.default = Al;
const zl = Po.default || Po;
var Dt = /* @__PURE__ */ ((e) => (e.ROW = "row", e.COLUMN = "column", e))(Dt || {}), jn = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(jn || {}), Pl = /* @__PURE__ */ ((e) => (e.TOP = "top", e.RIGHT = "right", e.BOTTOM = "bottom", e.LEFT = "left", e))(Pl || {}), Ol = /* @__PURE__ */ ((e) => (e.NORMAL = "normal", e.FLEX_START = "flex-start", e.FLEX_END = "flex-end", e.CENTER = "center", e.BASELINE = "baseline", e.STRETCH = "stretch", e.START = "start", e.END = "end", e.SELF_START = "self-start", e.SELF_END = "self-end", e.FIRST_BASELINE = "first baseline", e.LAST_BASELINE = "last baseline", e.SAFE_CENTER = "safe center", e.UNSAFE_CENTER = "unsafe center", e.SAFE_RIGHT = "safe right", e.UNSAFE_RIGHT = "unsafe right", e.SAFE_END = "safe end", e.UNSAFE_END = "unsafe end", e.SAFE_SELF_END = "safe self-end", e.UNSAFE_SELF_END = "unsafe self-end", e.SAFE_FLEX_END = "safe flex-end", e.UNSAFE_FLEX_END = "unsafe flex-end", e))(Ol || {}), Fl = /* @__PURE__ */ ((e) => (e.START = "start", e.END = "end", e.FLEX_START = "flex-start", e.FLEX_END = "flex-end", e.CENTER = "center", e.LEFT = "left", e.RIGHT = "right", e.SPACE_BETWEEN = "space-between", e.SPACE_AROUND = "space-around", e.SPACE_EVENLY = "space-evenly", e.STRETCH = "stretch", e))(Fl || {}), ce = /* @__PURE__ */ ((e) => (e.AUTO = "auto", e.PERCENT = "%", e.FN = "fn", e.PX = "px", e.FR = "fr", e.REM = "rem", e.VH = "vh", e.VW = "vw", e.PC = "pc", e.CM = "cm", e.MM = "mm", e.IN = "in", e.PT = "pt", e.CH = "ch", e.EM = "em", e.V_MIN = "vmin", e.V_MAX = "vmax", e))(ce || {}), Dl = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e))(Dl || {}), Bt = /* @__PURE__ */ ((e) => (e.SLIDE = "slide", e.FADE = "fade", e))(Bt || {});
function Bl(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function jl(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Il = /* @__PURE__ */ function() {
  function e(t) {
    var a = this;
    this._insertTag = function(n) {
      var i;
      a.tags.length === 0 ? a.insertionPoint ? i = a.insertionPoint.nextSibling : a.prepend ? i = a.container.firstChild : i = a.before : i = a.tags[a.tags.length - 1].nextSibling, a.container.insertBefore(n, i), a.tags.push(n);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(a) {
    a.forEach(this._insertTag);
  }, r.insert = function(a) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(jl(this));
    var n = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var l = Bl(n);
      try {
        l.insertRule(a, l.cssRules.length);
      } catch (u) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(a) && console.error('There was a problem inserting the following rule: "' + a + '"', u);
      }
    } else
      n.appendChild(document.createTextNode(a));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(a) {
      return a.parentNode && a.parentNode.removeChild(a);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), me = "-ms-", Pa = "-moz-", W = "-webkit-", ro = "comm", to = "rule", ao = "decl", Ml = "@import", Ki = "@keyframes", Nl = "@layer", Ll = Math.abs, La = String.fromCharCode, Wl = Object.assign;
function Vl(e, r) {
  return fe(e, 0) ^ 45 ? (((r << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function Ji(e) {
  return e.trim();
}
function Hl(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function V(e, r, t) {
  return e.replace(r, t);
}
function In(e, r) {
  return e.indexOf(r);
}
function fe(e, r) {
  return e.charCodeAt(r) | 0;
}
function jt(e, r, t) {
  return e.slice(r, t);
}
function Ve(e) {
  return e.length;
}
function no(e) {
  return e.length;
}
function la(e, r) {
  return r.push(e), e;
}
function Yl(e, r) {
  return e.map(r).join("");
}
var Wa = 1, et = 1, Qi = 0, _e = 0, ie = 0, nt = "";
function Va(e, r, t, a, n, i, l) {
  return { value: e, root: r, parent: t, type: a, props: n, children: i, line: Wa, column: et, length: l, return: "" };
}
function ht(e, r) {
  return Wl(Va("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Ul() {
  return ie;
}
function Gl() {
  return ie = _e > 0 ? fe(nt, --_e) : 0, et--, ie === 10 && (et = 1, Wa--), ie;
}
function Ee() {
  return ie = _e < Qi ? fe(nt, _e++) : 0, et++, ie === 10 && (et = 1, Wa++), ie;
}
function He() {
  return fe(nt, _e);
}
function va() {
  return _e;
}
function Ut(e, r) {
  return jt(nt, e, r);
}
function It(e) {
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
function Zi(e) {
  return Wa = et = 1, Qi = Ve(nt = e), _e = 0, [];
}
function es(e) {
  return nt = "", e;
}
function ga(e) {
  return Ji(Ut(_e - 1, Mn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ql(e) {
  for (; (ie = He()) && ie < 33; )
    Ee();
  return It(e) > 2 || It(ie) > 3 ? "" : " ";
}
function Xl(e, r) {
  for (; --r && Ee() && !(ie < 48 || ie > 102 || ie > 57 && ie < 65 || ie > 70 && ie < 97); )
    ;
  return Ut(e, va() + (r < 6 && He() == 32 && Ee() == 32));
}
function Mn(e) {
  for (; Ee(); )
    switch (ie) {
      case e:
        return _e;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Mn(ie);
        break;
      case 40:
        e === 41 && Mn(e);
        break;
      case 92:
        Ee();
        break;
    }
  return _e;
}
function Kl(e, r) {
  for (; Ee() && e + ie !== 57; )
    if (e + ie === 84 && He() === 47)
      break;
  return "/*" + Ut(r, _e - 1) + "*" + La(e === 47 ? e : Ee());
}
function Jl(e) {
  for (; !It(He()); )
    Ee();
  return Ut(e, _e);
}
function Ql(e) {
  return es(ya("", null, null, null, [""], e = Zi(e), 0, [0], e));
}
function ya(e, r, t, a, n, i, l, u, p) {
  for (var m = 0, b = 0, y = l, v = 0, E = 0, _ = 0, h = 1, x = 1, w = 1, C = 0, P = "", M = n, S = i, K = a, F = P; x; )
    switch (_ = C, C = Ee()) {
      case 40:
        if (_ != 108 && fe(F, y - 1) == 58) {
          In(F += V(ga(C), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        F += ga(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        F += ql(_);
        break;
      case 92:
        F += Xl(va() - 1, 7);
        continue;
      case 47:
        switch (He()) {
          case 42:
          case 47:
            la(Zl(Kl(Ee(), va()), r, t), p);
            break;
          default:
            F += "/";
        }
        break;
      case 123 * h:
        u[m++] = Ve(F) * w;
      case 125 * h:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            x = 0;
          case 59 + b:
            w == -1 && (F = V(F, /\f/g, "")), E > 0 && Ve(F) - y && la(E > 32 ? Fo(F + ";", a, t, y - 1) : Fo(V(F, " ", "") + ";", a, t, y - 2), p);
            break;
          case 59:
            F += ";";
          default:
            if (la(K = Oo(F, r, t, m, b, n, u, P, M = [], S = [], y), i), C === 123)
              if (b === 0)
                ya(F, r, K, K, M, i, y, u, S);
              else
                switch (v === 99 && fe(F, 3) === 110 ? 100 : v) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ya(e, K, K, a && la(Oo(e, K, K, 0, 0, n, u, P, n, M = [], y), S), n, S, y, u, a ? M : S);
                    break;
                  default:
                    ya(F, K, K, K, [""], S, 0, u, S);
                }
        }
        m = b = E = 0, h = w = 1, P = F = "", y = l;
        break;
      case 58:
        y = 1 + Ve(F), E = _;
      default:
        if (h < 1) {
          if (C == 123)
            --h;
          else if (C == 125 && h++ == 0 && Gl() == 125)
            continue;
        }
        switch (F += La(C), C * h) {
          case 38:
            w = b > 0 ? 1 : (F += "\f", -1);
            break;
          case 44:
            u[m++] = (Ve(F) - 1) * w, w = 1;
            break;
          case 64:
            He() === 45 && (F += ga(Ee())), v = He(), b = y = Ve(P = F += Jl(va())), C++;
            break;
          case 45:
            _ === 45 && Ve(F) == 2 && (h = 0);
        }
    }
  return i;
}
function Oo(e, r, t, a, n, i, l, u, p, m, b) {
  for (var y = n - 1, v = n === 0 ? i : [""], E = no(v), _ = 0, h = 0, x = 0; _ < a; ++_)
    for (var w = 0, C = jt(e, y + 1, y = Ll(h = l[_])), P = e; w < E; ++w)
      (P = Ji(h > 0 ? v[w] + " " + C : V(C, /&\f/g, v[w]))) && (p[x++] = P);
  return Va(e, r, t, n === 0 ? to : u, p, m, b);
}
function Zl(e, r, t) {
  return Va(e, r, t, ro, La(Ul()), jt(e, 2, -2), 0);
}
function Fo(e, r, t, a) {
  return Va(e, r, t, ao, jt(e, 0, a), jt(e, a + 1, -1), a);
}
function Xr(e, r) {
  for (var t = "", a = no(e), n = 0; n < a; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function ec(e, r, t, a) {
  switch (e.type) {
    case Nl:
      if (e.children.length) break;
    case Ml:
    case ao:
      return e.return = e.return || e.value;
    case ro:
      return "";
    case Ki:
      return e.return = e.value + "{" + Xr(e.children, a) + "}";
    case to:
      e.value = e.props.join(",");
  }
  return Ve(t = Xr(e.children, a)) ? e.return = e.value + "{" + t + "}" : "";
}
function rc(e) {
  var r = no(e);
  return function(t, a, n, i) {
    for (var l = "", u = 0; u < r; u++)
      l += e[u](t, a, n, i) || "";
    return l;
  };
}
function tc(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function rs(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ac = function(r, t, a) {
  for (var n = 0, i = 0; n = i, i = He(), n === 38 && i === 12 && (t[a] = 1), !It(i); )
    Ee();
  return Ut(r, _e);
}, nc = function(r, t) {
  var a = -1, n = 44;
  do
    switch (It(n)) {
      case 0:
        n === 38 && He() === 12 && (t[a] = 1), r[a] += ac(_e - 1, t, a);
        break;
      case 2:
        r[a] += ga(n);
        break;
      case 4:
        if (n === 44) {
          r[++a] = He() === 58 ? "&\f" : "", t[a] = r[a].length;
          break;
        }
      default:
        r[a] += La(n);
    }
  while (n = Ee());
  return r;
}, oc = function(r, t) {
  return es(nc(Zi(r), t));
}, Do = /* @__PURE__ */ new WeakMap(), ic = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, a = r.parent, n = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Do.get(a)) && !n) {
      Do.set(r, !0);
      for (var i = [], l = oc(t, i), u = a.props, p = 0, m = 0; p < l.length; p++)
        for (var b = 0; b < u.length; b++, m++)
          r.props[m] = i[p] ? l[p].replace(/&\f/g, u[b]) : u[b] + " " + l[p];
    }
  }
}, sc = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, lc = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", cc = function(r) {
  return r.type === "comm" && r.children.indexOf(lc) > -1;
}, dc = function(r) {
  return function(t, a, n) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var l = !!t.parent, u = l ? t.parent.children : (
          // global rule at the root level
          n
        ), p = u.length - 1; p >= 0; p--) {
          var m = u[p];
          if (m.line < t.line)
            break;
          if (m.column < t.column) {
            if (cc(m))
              return;
            break;
          }
        }
        i.forEach(function(b) {
          console.error('The pseudo class "' + b + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + b.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, ts = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, uc = function(r, t) {
  for (var a = r - 1; a >= 0; a--)
    if (!ts(t[a]))
      return !0;
  return !1;
}, Bo = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, fc = function(r, t, a) {
  ts(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), Bo(r)) : uc(t, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), Bo(r)));
};
function as(e, r) {
  switch (Vl(e, r)) {
    case 5103:
      return W + "print-" + e + e;
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
      return W + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return W + e + Pa + e + me + e + e;
    case 6828:
    case 4268:
      return W + e + me + e + e;
    case 6165:
      return W + e + me + "flex-" + e + e;
    case 5187:
      return W + e + V(e, /(\w+).+(:[^]+)/, W + "box-$1$2" + me + "flex-$1$2") + e;
    case 5443:
      return W + e + me + "flex-item-" + V(e, /flex-|-self/, "") + e;
    case 4675:
      return W + e + me + "flex-line-pack" + V(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return W + e + me + V(e, "shrink", "negative") + e;
    case 5292:
      return W + e + me + V(e, "basis", "preferred-size") + e;
    case 6060:
      return W + "box-" + V(e, "-grow", "") + W + e + me + V(e, "grow", "positive") + e;
    case 4554:
      return W + V(e, /([^-])(transform)/g, "$1" + W + "$2") + e;
    case 6187:
      return V(V(V(e, /(zoom-|grab)/, W + "$1"), /(image-set)/, W + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return V(e, /(image-set\([^]*)/, W + "$1$`$1");
    case 4968:
      return V(V(e, /(.+:)(flex-)?(.*)/, W + "box-pack:$3" + me + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + W + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return V(e, /(.+)-inline(.+)/, W + "$1$2") + e;
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
      if (Ve(e) - 1 - r > 6) switch (fe(e, r + 1)) {
        case 109:
          if (fe(e, r + 4) !== 45) break;
        case 102:
          return V(e, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Pa + (fe(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~In(e, "stretch") ? as(V(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (fe(e, r + 1) !== 115) break;
    case 6444:
      switch (fe(e, Ve(e) - 3 - (~In(e, "!important") && 10))) {
        case 107:
          return V(e, ":", ":" + W) + e;
        case 101:
          return V(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + W + (fe(e, 14) === 45 ? "inline-" : "") + "box$3$1" + W + "$2$3$1" + me + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (fe(e, r + 11)) {
        case 114:
          return W + e + me + V(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return W + e + me + V(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return W + e + me + V(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return W + e + me + e + e;
  }
  return e;
}
var pc = function(r, t, a, n) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case ao:
      r.return = as(r.value, r.length);
      break;
    case Ki:
      return Xr([ht(r, {
        value: V(r.value, "@", "@" + W)
      })], n);
    case to:
      if (r.length) return Yl(r.props, function(i) {
        switch (Hl(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Xr([ht(r, {
              props: [V(i, /:(read-\w+)/, ":" + Pa + "$1")]
            })], n);
          case "::placeholder":
            return Xr([ht(r, {
              props: [V(i, /:(plac\w+)/, ":" + W + "input-$1")]
            }), ht(r, {
              props: [V(i, /:(plac\w+)/, ":" + Pa + "$1")]
            }), ht(r, {
              props: [V(i, /:(plac\w+)/, me + "input-$1")]
            })], n);
        }
        return "";
      });
  }
}, bc = [pc], hc = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(h) {
      var x = h.getAttribute("data-emotion");
      x.indexOf(" ") !== -1 && (document.head.appendChild(h), h.setAttribute("data-s", ""));
    });
  }
  var n = r.stylisPlugins || bc;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, l, u = [];
  l = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(h) {
      for (var x = h.getAttribute("data-emotion").split(" "), w = 1; w < x.length; w++)
        i[x[w]] = !0;
      u.push(h);
    }
  );
  var p, m = [ic, sc];
  process.env.NODE_ENV !== "production" && m.push(dc({
    get compat() {
      return _.compat;
    }
  }), fc);
  {
    var b, y = [ec, process.env.NODE_ENV !== "production" ? function(h) {
      h.root || (h.return ? b.insert(h.return) : h.value && h.type !== ro && b.insert(h.value + "{}"));
    } : tc(function(h) {
      b.insert(h);
    })], v = rc(m.concat(n, y)), E = function(x) {
      return Xr(Ql(x), v);
    };
    p = function(x, w, C, P) {
      b = C, process.env.NODE_ENV !== "production" && w.map !== void 0 && (b = {
        insert: function(S) {
          C.insert(S + w.map);
        }
      }), E(x ? x + "{" + w.styles + "}" : w.styles), P && (_.inserted[w.name] = !0);
    };
  }
  var _ = {
    key: t,
    sheet: new Il({
      key: t,
      container: l,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: p
  };
  return _.sheet.hydrate(u), _;
};
function Nn() {
  return Nn = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Nn.apply(this, arguments);
}
var Ln = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var jo;
function mc() {
  if (jo) return G;
  jo = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function P(S) {
    if (typeof S == "object" && S !== null) {
      var K = S.$$typeof;
      switch (K) {
        case r:
          switch (S = S.type, S) {
            case p:
            case m:
            case a:
            case i:
            case n:
            case y:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case u:
                case b:
                case _:
                case E:
                case l:
                  return S;
                default:
                  return K;
              }
          }
        case t:
          return K;
      }
    }
  }
  function M(S) {
    return P(S) === m;
  }
  return G.AsyncMode = p, G.ConcurrentMode = m, G.ContextConsumer = u, G.ContextProvider = l, G.Element = r, G.ForwardRef = b, G.Fragment = a, G.Lazy = _, G.Memo = E, G.Portal = t, G.Profiler = i, G.StrictMode = n, G.Suspense = y, G.isAsyncMode = function(S) {
    return M(S) || P(S) === p;
  }, G.isConcurrentMode = M, G.isContextConsumer = function(S) {
    return P(S) === u;
  }, G.isContextProvider = function(S) {
    return P(S) === l;
  }, G.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }, G.isForwardRef = function(S) {
    return P(S) === b;
  }, G.isFragment = function(S) {
    return P(S) === a;
  }, G.isLazy = function(S) {
    return P(S) === _;
  }, G.isMemo = function(S) {
    return P(S) === E;
  }, G.isPortal = function(S) {
    return P(S) === t;
  }, G.isProfiler = function(S) {
    return P(S) === i;
  }, G.isStrictMode = function(S) {
    return P(S) === n;
  }, G.isSuspense = function(S) {
    return P(S) === y;
  }, G.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === m || S === i || S === n || S === y || S === v || typeof S == "object" && S !== null && (S.$$typeof === _ || S.$$typeof === E || S.$$typeof === l || S.$$typeof === u || S.$$typeof === b || S.$$typeof === x || S.$$typeof === w || S.$$typeof === C || S.$$typeof === h);
  }, G.typeOf = P, G;
}
var q = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Io;
function vc() {
  return Io || (Io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, m = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, v = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, _ = e ? Symbol.for("react.lazy") : 60116, h = e ? Symbol.for("react.block") : 60121, x = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function P(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === a || T === m || T === i || T === n || T === y || T === v || typeof T == "object" && T !== null && (T.$$typeof === _ || T.$$typeof === E || T.$$typeof === l || T.$$typeof === u || T.$$typeof === b || T.$$typeof === x || T.$$typeof === w || T.$$typeof === C || T.$$typeof === h);
    }
    function M(T) {
      if (typeof T == "object" && T !== null) {
        var hr = T.$$typeof;
        switch (hr) {
          case r:
            var ar = T.type;
            switch (ar) {
              case p:
              case m:
              case a:
              case i:
              case n:
              case y:
                return ar;
              default:
                var Ge = ar && ar.$$typeof;
                switch (Ge) {
                  case u:
                  case b:
                  case _:
                  case E:
                  case l:
                    return Ge;
                  default:
                    return hr;
                }
            }
          case t:
            return hr;
        }
      }
    }
    var S = p, K = m, F = u, pe = l, xe = r, Ce = b, fr = a, Ue = _, be = E, le = t, ve = i, Cr = n, Tr = y, pr = !1;
    function Rr(T) {
      return pr || (pr = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), br(T) || M(T) === p;
    }
    function br(T) {
      return M(T) === m;
    }
    function Ar(T) {
      return M(T) === u;
    }
    function zr(T) {
      return M(T) === l;
    }
    function U(T) {
      return typeof T == "object" && T !== null && T.$$typeof === r;
    }
    function Pr(T) {
      return M(T) === b;
    }
    function ot(T) {
      return M(T) === a;
    }
    function Oe(T) {
      return M(T) === _;
    }
    function rr(T) {
      return M(T) === E;
    }
    function Te(T) {
      return M(T) === t;
    }
    function tr(T) {
      return M(T) === i;
    }
    function Me(T) {
      return M(T) === n;
    }
    function Or(T) {
      return M(T) === y;
    }
    q.AsyncMode = S, q.ConcurrentMode = K, q.ContextConsumer = F, q.ContextProvider = pe, q.Element = xe, q.ForwardRef = Ce, q.Fragment = fr, q.Lazy = Ue, q.Memo = be, q.Portal = le, q.Profiler = ve, q.StrictMode = Cr, q.Suspense = Tr, q.isAsyncMode = Rr, q.isConcurrentMode = br, q.isContextConsumer = Ar, q.isContextProvider = zr, q.isElement = U, q.isForwardRef = Pr, q.isFragment = ot, q.isLazy = Oe, q.isMemo = rr, q.isPortal = Te, q.isProfiler = tr, q.isStrictMode = Me, q.isSuspense = Or, q.isValidElementType = P, q.typeOf = M;
  }()), q;
}
process.env.NODE_ENV === "production" ? Ln.exports = mc() : Ln.exports = vc();
var gc = Ln.exports, ns = gc, yc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, Sc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, os = {};
os[ns.ForwardRef] = yc;
os[ns.Memo] = Sc;
var _c = !0;
function oo(e, r, t) {
  var a = "";
  return t.split(" ").forEach(function(n) {
    e[n] !== void 0 ? r.push(e[n] + ";") : a += n + " ";
  }), a;
}
var Ha = function(r, t, a) {
  var n = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (a === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  _c === !1) && r.registered[n] === void 0 && (r.registered[n] = t.styles);
}, Ya = function(r, t, a) {
  Ha(r, t, a);
  var n = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + n : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function xc(e) {
  for (var r = 0, t, a = 0, n = e.length; n >= 4; ++a, n -= 4)
    t = e.charCodeAt(a) & 255 | (e.charCodeAt(++a) & 255) << 8 | (e.charCodeAt(++a) & 255) << 16 | (e.charCodeAt(++a) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (n) {
    case 3:
      r ^= (e.charCodeAt(a + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(a + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(a) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var wc = {
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
}, Mo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, kc = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Ec = /[A-Z]|^ms/g, is = /_EMO_([^_]+?)_([^]*?)_EMO_/g, io = function(r) {
  return r.charCodeAt(1) === 45;
}, No = function(r) {
  return r != null && typeof r != "boolean";
}, hn = /* @__PURE__ */ rs(function(e) {
  return io(e) ? e : e.replace(Ec, "-$&").toLowerCase();
}), Oa = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(is, function(a, n, i) {
          return je = {
            name: n,
            styles: i,
            next: je
          }, n;
        });
  }
  return wc[r] !== 1 && !io(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var $c = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Cc = ["normal", "none", "initial", "inherit", "unset"], Tc = Oa, Rc = /^-ms-/, Ac = /-(.)/g, Lo = {};
  Oa = function(r, t) {
    if (r === "content" && (typeof t != "string" || Cc.indexOf(t) === -1 && !$c.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var a = Tc(r, t);
    return a !== "" && !io(r) && r.indexOf("-") !== -1 && Lo[r] === void 0 && (Lo[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Rc, "ms-").replace(Ac, function(n, i) {
      return i.toUpperCase();
    }) + "?")), a;
  };
}
var ss = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Mt(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(ss);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return je = {
          name: t.name,
          styles: t.styles,
          next: je
        }, t.name;
      if (t.styles !== void 0) {
        var a = t.next;
        if (a !== void 0)
          for (; a !== void 0; )
            je = {
              name: a.name,
              styles: a.styles,
              next: je
            }, a = a.next;
        var n = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (n += t.map), n;
      }
      return zc(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = je, l = t(e);
        return je = i, Mt(e, r, l);
      } else process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var u = [], p = t.replace(is, function(b, y, v) {
          var E = "animation" + u.length;
          return u.push("const " + E + " = keyframes`" + v.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + E + "}";
        });
        u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + p + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + p + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var m = r[t];
  return m !== void 0 ? m : t;
}
function zc(e, r, t) {
  var a = "";
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      a += Mt(e, r, t[n]) + ";";
  else
    for (var i in t) {
      var l = t[i];
      if (typeof l != "object")
        r != null && r[l] !== void 0 ? a += i + "{" + r[l] + "}" : No(l) && (a += hn(i) + ":" + Oa(i, l) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(ss);
        if (Array.isArray(l) && typeof l[0] == "string" && (r == null || r[l[0]] === void 0))
          for (var u = 0; u < l.length; u++)
            No(l[u]) && (a += hn(i) + ":" + Oa(i, l[u]) + ";");
        else {
          var p = Mt(e, r, l);
          switch (i) {
            case "animation":
            case "animationName": {
              a += hn(i) + ":" + p + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(kc), a += i + "{" + p + "}";
          }
        }
      }
    }
  return a;
}
var Wo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, ls;
process.env.NODE_ENV !== "production" && (ls = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var je, rt = function(r, t, a) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var n = !0, i = "";
  je = void 0;
  var l = r[0];
  l == null || l.raw === void 0 ? (n = !1, i += Mt(a, t, l)) : (process.env.NODE_ENV !== "production" && l[0] === void 0 && console.error(Mo), i += l[0]);
  for (var u = 1; u < r.length; u++)
    i += Mt(a, t, r[u]), n && (process.env.NODE_ENV !== "production" && l[u] === void 0 && console.error(Mo), i += l[u]);
  var p;
  process.env.NODE_ENV !== "production" && (i = i.replace(ls, function(v) {
    return p = v, "";
  })), Wo.lastIndex = 0;
  for (var m = "", b; (b = Wo.exec(i)) !== null; )
    m += "-" + // $FlowFixMe we know it's not null
    b[1];
  var y = xc(i) + m;
  return process.env.NODE_ENV !== "production" ? {
    name: y,
    styles: i,
    map: p,
    next: je,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: y,
    styles: i,
    next: je
  };
}, Pc = function(r) {
  return r();
}, cs = ne.useInsertionEffect ? ne.useInsertionEffect : !1, so = cs || Pc, Vo = cs || ne.useLayoutEffect, Oc = {}.hasOwnProperty, lo = /* @__PURE__ */ ne.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ hc({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (lo.displayName = "EmotionCacheContext");
lo.Provider;
var Ua = function(r) {
  return /* @__PURE__ */ Hi(function(t, a) {
    var n = eo(lo);
    return r(t, n, a);
  });
}, Gt = /* @__PURE__ */ ne.createContext({});
process.env.NODE_ENV !== "production" && (Gt.displayName = "EmotionThemeContext");
var Ho = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Yo = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", Fc = function(r) {
  var t = r.cache, a = r.serialized, n = r.isStringTag;
  return Ha(t, a, n), so(function() {
    return Ya(t, a, n);
  }), null;
}, Dc = /* @__PURE__ */ Ua(function(e, r, t) {
  var a = e.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var n = e[Ho], i = [a], l = "";
  typeof e.className == "string" ? l = oo(r.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var u = rt(i, void 0, ne.useContext(Gt));
  if (process.env.NODE_ENV !== "production" && u.name.indexOf("-") === -1) {
    var p = e[Yo];
    p && (u = rt([u, "label:" + p + ";"]));
  }
  l += r.key + "-" + u.name;
  var m = {};
  for (var b in e)
    Oc.call(e, b) && b !== "css" && b !== Ho && (process.env.NODE_ENV === "production" || b !== Yo) && (m[b] = e[b]);
  return m.ref = t, m.className = l, /* @__PURE__ */ ne.createElement(ne.Fragment, null, /* @__PURE__ */ ne.createElement(Fc, {
    cache: r,
    serialized: u,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ ne.createElement(n, m));
});
process.env.NODE_ENV !== "production" && (Dc.displayName = "EmotionCssPropInternal");
var Bc = {
  name: "@emotion/react",
  version: "11.11.4",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.3",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.2",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Uo = !1, jc = /* @__PURE__ */ Ua(function(e, r) {
  process.env.NODE_ENV !== "production" && !Uo && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Uo = !0);
  var t = e.styles, a = rt([t], void 0, ne.useContext(Gt)), n = ne.useRef();
  return Vo(function() {
    var i = r.key + "-global", l = new r.sheet.constructor({
      key: i,
      nonce: r.sheet.nonce,
      container: r.sheet.container,
      speedy: r.sheet.isSpeedy
    }), u = !1, p = document.querySelector('style[data-emotion="' + i + " " + a.name + '"]');
    return r.sheet.tags.length && (l.before = r.sheet.tags[0]), p !== null && (u = !0, p.setAttribute("data-emotion", i), l.hydrate([p])), n.current = [l, u], function() {
      l.flush();
    };
  }, [r]), Vo(function() {
    var i = n.current, l = i[0], u = i[1];
    if (u) {
      i[1] = !1;
      return;
    }
    if (a.next !== void 0 && Ya(r, a.next, !0), l.tags.length) {
      var p = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = p, l.flush();
    }
    r.insert("", a, l, !1);
  }, [r, a.name]), null;
});
process.env.NODE_ENV !== "production" && (jc.displayName = "EmotionGlobal");
function Ic() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return rt(r);
}
var Mc = function() {
  var r = Ic.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Nc = function e(r) {
  for (var t = r.length, a = 0, n = ""; a < t; a++) {
    var i = r[a];
    if (i != null) {
      var l = void 0;
      switch (typeof i) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(i))
            l = e(i);
          else {
            process.env.NODE_ENV !== "production" && i.styles !== void 0 && i.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), l = "";
            for (var u in i)
              i[u] && u && (l && (l += " "), l += u);
          }
          break;
        }
        default:
          l = i;
      }
      l && (n && (n += " "), n += l);
    }
  }
  return n;
};
function Lc(e, r, t) {
  var a = [], n = oo(e, a, t);
  return a.length < 2 ? t : n + r(a);
}
var Wc = function(r) {
  var t = r.cache, a = r.serializedArr;
  return so(function() {
    for (var n = 0; n < a.length; n++)
      Ya(t, a[n], !1);
  }), null;
}, Vc = /* @__PURE__ */ Ua(function(e, r) {
  var t = !1, a = [], n = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var m = arguments.length, b = new Array(m), y = 0; y < m; y++)
      b[y] = arguments[y];
    var v = rt(b, r.registered);
    return a.push(v), Ha(r, v, !1), r.key + "-" + v.name;
  }, i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var m = arguments.length, b = new Array(m), y = 0; y < m; y++)
      b[y] = arguments[y];
    return Lc(r.registered, n, Nc(b));
  }, l = {
    css: n,
    cx: i,
    theme: ne.useContext(Gt)
  }, u = e.children(l);
  return t = !0, /* @__PURE__ */ ne.createElement(ne.Fragment, null, /* @__PURE__ */ ne.createElement(Wc, {
    cache: r,
    serializedArr: a
  }), u);
});
process.env.NODE_ENV !== "production" && (Vc.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Go = !0, Hc = typeof jest < "u" || typeof vi < "u";
  if (Go && !Hc) {
    var qo = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Go ? window : global
    ), Xo = "__EMOTION_REACT_" + Bc.version.split(".")[0] + "__";
    qo[Xo] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), qo[Xo] = !0;
  }
}
var Wn = { exports: {} }, mt = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ko;
function Yc() {
  if (Ko) return mt;
  Ko = 1;
  var e = za, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, p, m) {
    var b, y = {}, v = null, E = null;
    m !== void 0 && (v = "" + m), p.key !== void 0 && (v = "" + p.key), p.ref !== void 0 && (E = p.ref);
    for (b in p) a.call(p, b) && !i.hasOwnProperty(b) && (y[b] = p[b]);
    if (u && u.defaultProps) for (b in p = u.defaultProps, p) y[b] === void 0 && (y[b] = p[b]);
    return { $$typeof: r, type: u, key: v, ref: E, props: y, _owner: n.current };
  }
  return mt.Fragment = t, mt.jsx = l, mt.jsxs = l, mt;
}
var vt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Jo;
function Uc() {
  return Jo || (Jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = za, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), v = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), _ = Symbol.iterator, h = "@@iterator";
    function x(s) {
      if (s === null || typeof s != "object")
        return null;
      var g = _ && s[_] || s[h];
      return typeof g == "function" ? g : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(s) {
      {
        for (var g = arguments.length, k = new Array(g > 1 ? g - 1 : 0), z = 1; z < g; z++)
          k[z - 1] = arguments[z];
        P("error", s, k);
      }
    }
    function P(s, g, k) {
      {
        var z = w.ReactDebugCurrentFrame, D = z.getStackAddendum();
        D !== "" && (g += "%s", k = k.concat([D]));
        var X = k.map(function(B) {
          return String(B);
        });
        X.unshift("Warning: " + g), Function.prototype.apply.call(console[s], console, X);
      }
    }
    var M = !1, S = !1, K = !1, F = !1, pe = !1, xe;
    xe = Symbol.for("react.module.reference");
    function Ce(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === a || s === i || pe || s === n || s === m || s === b || F || s === E || M || S || K || typeof s == "object" && s !== null && (s.$$typeof === v || s.$$typeof === y || s.$$typeof === l || s.$$typeof === u || s.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === xe || s.getModuleId !== void 0));
    }
    function fr(s, g, k) {
      var z = s.displayName;
      if (z)
        return z;
      var D = g.displayName || g.name || "";
      return D !== "" ? k + "(" + D + ")" : k;
    }
    function Ue(s) {
      return s.displayName || "Context";
    }
    function be(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && C("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
        return s.displayName || s.name || null;
      if (typeof s == "string")
        return s;
      switch (s) {
        case a:
          return "Fragment";
        case t:
          return "Portal";
        case i:
          return "Profiler";
        case n:
          return "StrictMode";
        case m:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var g = s;
            return Ue(g) + ".Consumer";
          case l:
            var k = s;
            return Ue(k._context) + ".Provider";
          case p:
            return fr(s, s.render, "ForwardRef");
          case y:
            var z = s.displayName || null;
            return z !== null ? z : be(s.type) || "Memo";
          case v: {
            var D = s, X = D._payload, B = D._init;
            try {
              return be(B(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var le = Object.assign, ve = 0, Cr, Tr, pr, Rr, br, Ar, zr;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Pr() {
      {
        if (ve === 0) {
          Cr = console.log, Tr = console.info, pr = console.warn, Rr = console.error, br = console.group, Ar = console.groupCollapsed, zr = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: U,
            writable: !0
          };
          Object.defineProperties(console, {
            info: s,
            log: s,
            warn: s,
            error: s,
            group: s,
            groupCollapsed: s,
            groupEnd: s
          });
        }
        ve++;
      }
    }
    function ot() {
      {
        if (ve--, ve === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: le({}, s, {
              value: Cr
            }),
            info: le({}, s, {
              value: Tr
            }),
            warn: le({}, s, {
              value: pr
            }),
            error: le({}, s, {
              value: Rr
            }),
            group: le({}, s, {
              value: br
            }),
            groupCollapsed: le({}, s, {
              value: Ar
            }),
            groupEnd: le({}, s, {
              value: zr
            })
          });
        }
        ve < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Oe = w.ReactCurrentDispatcher, rr;
    function Te(s, g, k) {
      {
        if (rr === void 0)
          try {
            throw Error();
          } catch (D) {
            var z = D.stack.trim().match(/\n( *(at )?)/);
            rr = z && z[1] || "";
          }
        return `
` + rr + s;
      }
    }
    var tr = !1, Me;
    {
      var Or = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new Or();
    }
    function T(s, g) {
      if (!s || tr)
        return "";
      {
        var k = Me.get(s);
        if (k !== void 0)
          return k;
      }
      var z;
      tr = !0;
      var D = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var X;
      X = Oe.current, Oe.current = null, Pr();
      try {
        if (g) {
          var B = function() {
            throw Error();
          };
          if (Object.defineProperty(B.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(B, []);
            } catch (we) {
              z = we;
            }
            Reflect.construct(s, [], B);
          } else {
            try {
              B.call();
            } catch (we) {
              z = we;
            }
            s.call(B.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (we) {
            z = we;
          }
          s();
        }
      } catch (we) {
        if (we && z && typeof we.stack == "string") {
          for (var O = we.stack.split(`
`), de = z.stack.split(`
`), te = O.length - 1, ae = de.length - 1; te >= 1 && ae >= 0 && O[te] !== de[ae]; )
            ae--;
          for (; te >= 1 && ae >= 0; te--, ae--)
            if (O[te] !== de[ae]) {
              if (te !== 1 || ae !== 1)
                do
                  if (te--, ae--, ae < 0 || O[te] !== de[ae]) {
                    var he = `
` + O[te].replace(" at new ", " at ");
                    return s.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", s.displayName)), typeof s == "function" && Me.set(s, he), he;
                  }
                while (te >= 1 && ae >= 0);
              break;
            }
        }
      } finally {
        tr = !1, Oe.current = X, ot(), Error.prepareStackTrace = D;
      }
      var ir = s ? s.displayName || s.name : "", vr = ir ? Te(ir) : "";
      return typeof s == "function" && Me.set(s, vr), vr;
    }
    function hr(s, g, k) {
      return T(s, !1);
    }
    function ar(s) {
      var g = s.prototype;
      return !!(g && g.isReactComponent);
    }
    function Ge(s, g, k) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return T(s, ar(s));
      if (typeof s == "string")
        return Te(s);
      switch (s) {
        case m:
          return Te("Suspense");
        case b:
          return Te("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case p:
            return hr(s.render);
          case y:
            return Ge(s.type, g, k);
          case v: {
            var z = s, D = z._payload, X = z._init;
            try {
              return Ge(X(D), g, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Fr = Object.prototype.hasOwnProperty, Xt = {}, Kt = w.ReactDebugCurrentFrame;
    function Dr(s) {
      if (s) {
        var g = s._owner, k = Ge(s.type, s._source, g ? g.type : null);
        Kt.setExtraStackFrame(k);
      } else
        Kt.setExtraStackFrame(null);
    }
    function Br(s, g, k, z, D) {
      {
        var X = Function.call.bind(Fr);
        for (var B in s)
          if (X(s, B)) {
            var O = void 0;
            try {
              if (typeof s[B] != "function") {
                var de = Error((z || "React class") + ": " + k + " type `" + B + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[B] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              O = s[B](g, B, z, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              O = te;
            }
            O && !(O instanceof Error) && (Dr(D), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", k, B, typeof O), Dr(null)), O instanceof Error && !(O.message in Xt) && (Xt[O.message] = !0, Dr(D), C("Failed %s type: %s", k, O.message), Dr(null));
          }
      }
    }
    var it = Array.isArray;
    function nr(s) {
      return it(s);
    }
    function Ne(s) {
      {
        var g = typeof Symbol == "function" && Symbol.toStringTag, k = g && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return k;
      }
    }
    function Jt(s) {
      try {
        return st(s), !1;
      } catch {
        return !0;
      }
    }
    function st(s) {
      return "" + s;
    }
    function Qt(s) {
      if (Jt(s))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(s)), st(s);
    }
    var mr = w.ReactCurrentOwner, jr = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, ct, Ir;
    Ir = {};
    function Zt(s) {
      if (Fr.call(s, "ref")) {
        var g = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Ka(s) {
      if (Fr.call(s, "key")) {
        var g = Object.getOwnPropertyDescriptor(s, "key").get;
        if (g && g.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Ja(s, g) {
      if (typeof s.ref == "string" && mr.current && g && mr.current.stateNode !== g) {
        var k = be(mr.current.type);
        Ir[k] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(mr.current.type), s.ref), Ir[k] = !0);
      }
    }
    function qe(s, g) {
      {
        var k = function() {
          lt || (lt = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        k.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function Mr(s, g) {
      {
        var k = function() {
          ct || (ct = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", g));
        };
        k.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var Qa = function(s, g, k, z, D, X, B) {
      var O = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: g,
        ref: k,
        props: B,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return O._store = {}, Object.defineProperty(O._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(O, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(O, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(O.props), Object.freeze(O)), O;
    };
    function ea(s, g, k, z, D) {
      {
        var X, B = {}, O = null, de = null;
        k !== void 0 && (Qt(k), O = "" + k), Ka(g) && (Qt(g.key), O = "" + g.key), Zt(g) && (de = g.ref, Ja(g, D));
        for (X in g)
          Fr.call(g, X) && !jr.hasOwnProperty(X) && (B[X] = g[X]);
        if (s && s.defaultProps) {
          var te = s.defaultProps;
          for (X in te)
            B[X] === void 0 && (B[X] = te[X]);
        }
        if (O || de) {
          var ae = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          O && qe(B, ae), de && Mr(B, ae);
        }
        return Qa(s, O, de, D, z, mr.current, B);
      }
    }
    var dt = w.ReactCurrentOwner, ut = w.ReactDebugCurrentFrame;
    function Re(s) {
      if (s) {
        var g = s._owner, k = Ge(s.type, s._source, g ? g.type : null);
        ut.setExtraStackFrame(k);
      } else
        ut.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function Fe(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function ra() {
      {
        if (dt.current) {
          var s = be(dt.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Za(s) {
      return "";
    }
    var ta = {};
    function en(s) {
      {
        var g = ra();
        if (!g) {
          var k = typeof s == "string" ? s : s.displayName || s.name;
          k && (g = `

Check the top-level render call using <` + k + ">.");
        }
        return g;
      }
    }
    function aa(s, g) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var k = en(g);
        if (ta[k])
          return;
        ta[k] = !0;
        var z = "";
        s && s._owner && s._owner !== dt.current && (z = " It was passed a child from " + be(s._owner.type) + "."), Re(s), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, z), Re(null);
      }
    }
    function Ae(s, g) {
      {
        if (typeof s != "object")
          return;
        if (nr(s))
          for (var k = 0; k < s.length; k++) {
            var z = s[k];
            Fe(z) && aa(z, g);
          }
        else if (Fe(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var D = x(s);
          if (typeof D == "function" && D !== s.entries)
            for (var X = D.call(s), B; !(B = X.next()).done; )
              Fe(B.value) && aa(B.value, g);
        }
      }
    }
    function rn(s) {
      {
        var g = s.type;
        if (g == null || typeof g == "string")
          return;
        var k;
        if (typeof g == "function")
          k = g.propTypes;
        else if (typeof g == "object" && (g.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        g.$$typeof === y))
          k = g.propTypes;
        else
          return;
        if (k) {
          var z = be(g);
          Br(k, s.props, "prop", z, s);
        } else if (g.PropTypes !== void 0 && !ft) {
          ft = !0;
          var D = be(g);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof g.getDefaultProps == "function" && !g.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function tn(s) {
      {
        for (var g = Object.keys(s.props), k = 0; k < g.length; k++) {
          var z = g[k];
          if (z !== "children" && z !== "key") {
            Re(s), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), Re(null);
            break;
          }
        }
        s.ref !== null && (Re(s), C("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    function na(s, g, k, z, D, X) {
      {
        var B = Ce(s);
        if (!B) {
          var O = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (O += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = Za();
          de ? O += de : O += ra();
          var te;
          s === null ? te = "null" : nr(s) ? te = "array" : s !== void 0 && s.$$typeof === r ? (te = "<" + (be(s.type) || "Unknown") + " />", O = " Did you accidentally export a JSX literal instead of a component?") : te = typeof s, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, O);
        }
        var ae = ea(s, g, k, D, X);
        if (ae == null)
          return ae;
        if (B) {
          var he = g.children;
          if (he !== void 0)
            if (z)
              if (nr(he)) {
                for (var ir = 0; ir < he.length; ir++)
                  Ae(he[ir], s);
                Object.freeze && Object.freeze(he);
              } else
                C("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Ae(he, s);
        }
        return s === a ? tn(ae) : rn(ae), ae;
      }
    }
    function an(s, g, k) {
      return na(s, g, k, !0);
    }
    function nn(s, g, k) {
      return na(s, g, k, !1);
    }
    var or = nn, on = an;
    vt.Fragment = a, vt.jsx = or, vt.jsxs = on;
  }()), vt;
}
process.env.NODE_ENV === "production" ? Wn.exports = Yc() : Wn.exports = Uc();
var _r = Wn.exports, ds = Yi({});
ds.displayName = "ColorModeContext";
function Gc() {
  const e = eo(ds);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function ur(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function xt(e, ...r) {
  return qc(e) ? e(...r) : e;
}
var qc = (e) => typeof e == "function", Fa = { exports: {} };
Fa.exports;
(function(e, r) {
  var t = 200, a = "__lodash_hash_undefined__", n = 800, i = 16, l = 9007199254740991, u = "[object Arguments]", p = "[object Array]", m = "[object AsyncFunction]", b = "[object Boolean]", y = "[object Date]", v = "[object Error]", E = "[object Function]", _ = "[object GeneratorFunction]", h = "[object Map]", x = "[object Number]", w = "[object Null]", C = "[object Object]", P = "[object Proxy]", M = "[object RegExp]", S = "[object Set]", K = "[object String]", F = "[object Undefined]", pe = "[object WeakMap]", xe = "[object ArrayBuffer]", Ce = "[object DataView]", fr = "[object Float32Array]", Ue = "[object Float64Array]", be = "[object Int8Array]", le = "[object Int16Array]", ve = "[object Int32Array]", Cr = "[object Uint8Array]", Tr = "[object Uint8ClampedArray]", pr = "[object Uint16Array]", Rr = "[object Uint32Array]", br = /[\\^$.*+?()[\]{}|]/g, Ar = /^\[object .+?Constructor\]$/, zr = /^(?:0|[1-9]\d*)$/, U = {};
  U[fr] = U[Ue] = U[be] = U[le] = U[ve] = U[Cr] = U[Tr] = U[pr] = U[Rr] = !0, U[u] = U[p] = U[xe] = U[b] = U[Ce] = U[y] = U[v] = U[E] = U[h] = U[x] = U[C] = U[M] = U[S] = U[K] = U[pe] = !1;
  var Pr = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, ot = typeof self == "object" && self && self.Object === Object && self, Oe = Pr || ot || Function("return this")(), rr = r && !r.nodeType && r, Te = rr && !0 && e && !e.nodeType && e, tr = Te && Te.exports === rr, Me = tr && Pr.process, Or = function() {
    try {
      var o = Te && Te.require && Te.require("util").types;
      return o || Me && Me.binding && Me.binding("util");
    } catch {
    }
  }(), T = Or && Or.isTypedArray;
  function hr(o, d, f) {
    switch (f.length) {
      case 0:
        return o.call(d);
      case 1:
        return o.call(d, f[0]);
      case 2:
        return o.call(d, f[0], f[1]);
      case 3:
        return o.call(d, f[0], f[1], f[2]);
    }
    return o.apply(d, f);
  }
  function ar(o, d) {
    for (var f = -1, $ = Array(o); ++f < o; )
      $[f] = d(f);
    return $;
  }
  function Ge(o) {
    return function(d) {
      return o(d);
    };
  }
  function Fr(o, d) {
    return o == null ? void 0 : o[d];
  }
  function Xt(o, d) {
    return function(f) {
      return o(d(f));
    };
  }
  var Kt = Array.prototype, Dr = Function.prototype, Br = Object.prototype, it = Oe["__core-js_shared__"], nr = Dr.toString, Ne = Br.hasOwnProperty, Jt = function() {
    var o = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), st = Br.toString, Qt = nr.call(Object), mr = RegExp(
    "^" + nr.call(Ne).replace(br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), jr = tr ? Oe.Buffer : void 0, lt = Oe.Symbol, ct = Oe.Uint8Array;
  jr && jr.allocUnsafe;
  var Ir = Xt(Object.getPrototypeOf, Object), Zt = Object.create, Ka = Br.propertyIsEnumerable, Ja = Kt.splice, qe = lt ? lt.toStringTag : void 0, Mr = function() {
    try {
      var o = sn(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), Qa = jr ? jr.isBuffer : void 0, ea = Math.max, dt = Date.now, ut = sn(Oe, "Map"), Re = sn(Object, "create"), ft = /* @__PURE__ */ function() {
    function o() {
    }
    return function(d) {
      if (!gr(d))
        return {};
      if (Zt)
        return Zt(d);
      o.prototype = d;
      var f = new o();
      return o.prototype = void 0, f;
    };
  }();
  function Fe(o) {
    var d = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++d < f; ) {
      var $ = o[d];
      this.set($[0], $[1]);
    }
  }
  function ra() {
    this.__data__ = Re ? Re(null) : {}, this.size = 0;
  }
  function Za(o) {
    var d = this.has(o) && delete this.__data__[o];
    return this.size -= d ? 1 : 0, d;
  }
  function ta(o) {
    var d = this.__data__;
    if (Re) {
      var f = d[o];
      return f === a ? void 0 : f;
    }
    return Ne.call(d, o) ? d[o] : void 0;
  }
  function en(o) {
    var d = this.__data__;
    return Re ? d[o] !== void 0 : Ne.call(d, o);
  }
  function aa(o, d) {
    var f = this.__data__;
    return this.size += this.has(o) ? 0 : 1, f[o] = Re && d === void 0 ? a : d, this;
  }
  Fe.prototype.clear = ra, Fe.prototype.delete = Za, Fe.prototype.get = ta, Fe.prototype.has = en, Fe.prototype.set = aa;
  function Ae(o) {
    var d = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++d < f; ) {
      var $ = o[d];
      this.set($[0], $[1]);
    }
  }
  function rn() {
    this.__data__ = [], this.size = 0;
  }
  function tn(o) {
    var d = this.__data__, f = vr(d, o);
    if (f < 0)
      return !1;
    var $ = d.length - 1;
    return f == $ ? d.pop() : Ja.call(d, f, 1), --this.size, !0;
  }
  function na(o) {
    var d = this.__data__, f = vr(d, o);
    return f < 0 ? void 0 : d[f][1];
  }
  function an(o) {
    return vr(this.__data__, o) > -1;
  }
  function nn(o, d) {
    var f = this.__data__, $ = vr(f, o);
    return $ < 0 ? (++this.size, f.push([o, d])) : f[$][1] = d, this;
  }
  Ae.prototype.clear = rn, Ae.prototype.delete = tn, Ae.prototype.get = na, Ae.prototype.has = an, Ae.prototype.set = nn;
  function or(o) {
    var d = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++d < f; ) {
      var $ = o[d];
      this.set($[0], $[1]);
    }
  }
  function on() {
    this.size = 0, this.__data__ = {
      hash: new Fe(),
      map: new (ut || Ae)(),
      string: new Fe()
    };
  }
  function s(o) {
    var d = ia(this, o).delete(o);
    return this.size -= d ? 1 : 0, d;
  }
  function g(o) {
    return ia(this, o).get(o);
  }
  function k(o) {
    return ia(this, o).has(o);
  }
  function z(o, d) {
    var f = ia(this, o), $ = f.size;
    return f.set(o, d), this.size += f.size == $ ? 0 : 1, this;
  }
  or.prototype.clear = on, or.prototype.delete = s, or.prototype.get = g, or.prototype.has = k, or.prototype.set = z;
  function D(o) {
    var d = this.__data__ = new Ae(o);
    this.size = d.size;
  }
  function X() {
    this.__data__ = new Ae(), this.size = 0;
  }
  function B(o) {
    var d = this.__data__, f = d.delete(o);
    return this.size = d.size, f;
  }
  function O(o) {
    return this.__data__.get(o);
  }
  function de(o) {
    return this.__data__.has(o);
  }
  function te(o, d) {
    var f = this.__data__;
    if (f instanceof Ae) {
      var $ = f.__data__;
      if (!ut || $.length < t - 1)
        return $.push([o, d]), this.size = ++f.size, this;
      f = this.__data__ = new or($);
    }
    return f.set(o, d), this.size = f.size, this;
  }
  D.prototype.clear = X, D.prototype.delete = B, D.prototype.get = O, D.prototype.has = de, D.prototype.set = te;
  function ae(o, d) {
    var f = dn(o), $ = !f && cn(o), I = !f && !$ && xo(o), J = !f && !$ && !I && ko(o), ee = f || $ || I || J, N = ee ? ar(o.length, String) : [], re = N.length;
    for (var De in o)
      ee && // Safari 9 has enumerable `arguments.length` in strict mode.
      (De == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      I && (De == "offset" || De == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      J && (De == "buffer" || De == "byteLength" || De == "byteOffset") || // Skip index properties.
      So(De, re)) || N.push(De);
    return N;
  }
  function he(o, d, f) {
    (f !== void 0 && !sa(o[d], f) || f === void 0 && !(d in o)) && we(o, d, f);
  }
  function ir(o, d, f) {
    var $ = o[d];
    (!(Ne.call(o, d) && sa($, f)) || f === void 0 && !(d in o)) && we(o, d, f);
  }
  function vr(o, d) {
    for (var f = o.length; f--; )
      if (sa(o[f][0], d))
        return f;
    return -1;
  }
  function we(o, d, f) {
    d == "__proto__" && Mr ? Mr(o, d, {
      configurable: !0,
      enumerable: !0,
      value: f,
      writable: !0
    }) : o[d] = f;
  }
  var Bs = Xs();
  function oa(o) {
    return o == null ? o === void 0 ? F : w : qe && qe in Object(o) ? Ks(o) : tl(o);
  }
  function go(o) {
    return pt(o) && oa(o) == u;
  }
  function js(o) {
    if (!gr(o) || el(o))
      return !1;
    var d = fn(o) ? mr : Ar;
    return d.test(il(o));
  }
  function Is(o) {
    return pt(o) && wo(o.length) && !!U[oa(o)];
  }
  function Ms(o) {
    if (!gr(o))
      return rl(o);
    var d = _o(o), f = [];
    for (var $ in o)
      $ == "constructor" && (d || !Ne.call(o, $)) || f.push($);
    return f;
  }
  function yo(o, d, f, $, I) {
    o !== d && Bs(d, function(J, ee) {
      if (I || (I = new D()), gr(J))
        Ns(o, d, ee, f, yo, $, I);
      else {
        var N = $ ? $(ln(o, ee), J, ee + "", o, d, I) : void 0;
        N === void 0 && (N = J), he(o, ee, N);
      }
    }, Eo);
  }
  function Ns(o, d, f, $, I, J, ee) {
    var N = ln(o, f), re = ln(d, f), De = ee.get(re);
    if (De) {
      he(o, f, De);
      return;
    }
    var ke = J ? J(N, re, f + "", o, d, ee) : void 0, bt = ke === void 0;
    if (bt) {
      var pn = dn(re), bn = !pn && xo(re), Co = !pn && !bn && ko(re);
      ke = re, pn || bn || Co ? dn(N) ? ke = N : sl(N) ? ke = Us(N) : bn ? (bt = !1, ke = Vs(re)) : Co ? (bt = !1, ke = Ys(re)) : ke = [] : ll(re) || cn(re) ? (ke = N, cn(N) ? ke = cl(N) : (!gr(N) || fn(N)) && (ke = Js(re))) : bt = !1;
    }
    bt && (ee.set(re, ke), I(ke, re, $, J, ee), ee.delete(re)), he(o, f, ke);
  }
  function Ls(o, d) {
    return nl(al(o, d, $o), o + "");
  }
  var Ws = Mr ? function(o, d) {
    return Mr(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: ul(d),
      writable: !0
    });
  } : $o;
  function Vs(o, d) {
    return o.slice();
  }
  function Hs(o) {
    var d = new o.constructor(o.byteLength);
    return new ct(d).set(new ct(o)), d;
  }
  function Ys(o, d) {
    var f = Hs(o.buffer);
    return new o.constructor(f, o.byteOffset, o.length);
  }
  function Us(o, d) {
    var f = -1, $ = o.length;
    for (d || (d = Array($)); ++f < $; )
      d[f] = o[f];
    return d;
  }
  function Gs(o, d, f, $) {
    var I = !f;
    f || (f = {});
    for (var J = -1, ee = d.length; ++J < ee; ) {
      var N = d[J], re = void 0;
      re === void 0 && (re = o[N]), I ? we(f, N, re) : ir(f, N, re);
    }
    return f;
  }
  function qs(o) {
    return Ls(function(d, f) {
      var $ = -1, I = f.length, J = I > 1 ? f[I - 1] : void 0, ee = I > 2 ? f[2] : void 0;
      for (J = o.length > 3 && typeof J == "function" ? (I--, J) : void 0, ee && Qs(f[0], f[1], ee) && (J = I < 3 ? void 0 : J, I = 1), d = Object(d); ++$ < I; ) {
        var N = f[$];
        N && o(d, N, $, J);
      }
      return d;
    });
  }
  function Xs(o) {
    return function(d, f, $) {
      for (var I = -1, J = Object(d), ee = $(d), N = ee.length; N--; ) {
        var re = ee[++I];
        if (f(J[re], re, J) === !1)
          break;
      }
      return d;
    };
  }
  function ia(o, d) {
    var f = o.__data__;
    return Zs(d) ? f[typeof d == "string" ? "string" : "hash"] : f.map;
  }
  function sn(o, d) {
    var f = Fr(o, d);
    return js(f) ? f : void 0;
  }
  function Ks(o) {
    var d = Ne.call(o, qe), f = o[qe];
    try {
      o[qe] = void 0;
      var $ = !0;
    } catch {
    }
    var I = st.call(o);
    return $ && (d ? o[qe] = f : delete o[qe]), I;
  }
  function Js(o) {
    return typeof o.constructor == "function" && !_o(o) ? ft(Ir(o)) : {};
  }
  function So(o, d) {
    var f = typeof o;
    return d = d ?? l, !!d && (f == "number" || f != "symbol" && zr.test(o)) && o > -1 && o % 1 == 0 && o < d;
  }
  function Qs(o, d, f) {
    if (!gr(f))
      return !1;
    var $ = typeof d;
    return ($ == "number" ? un(f) && So(d, f.length) : $ == "string" && d in f) ? sa(f[d], o) : !1;
  }
  function Zs(o) {
    var d = typeof o;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? o !== "__proto__" : o === null;
  }
  function el(o) {
    return !!Jt && Jt in o;
  }
  function _o(o) {
    var d = o && o.constructor, f = typeof d == "function" && d.prototype || Br;
    return o === f;
  }
  function rl(o) {
    var d = [];
    if (o != null)
      for (var f in Object(o))
        d.push(f);
    return d;
  }
  function tl(o) {
    return st.call(o);
  }
  function al(o, d, f) {
    return d = ea(d === void 0 ? o.length - 1 : d, 0), function() {
      for (var $ = arguments, I = -1, J = ea($.length - d, 0), ee = Array(J); ++I < J; )
        ee[I] = $[d + I];
      I = -1;
      for (var N = Array(d + 1); ++I < d; )
        N[I] = $[I];
      return N[d] = f(ee), hr(o, this, N);
    };
  }
  function ln(o, d) {
    if (!(d === "constructor" && typeof o[d] == "function") && d != "__proto__")
      return o[d];
  }
  var nl = ol(Ws);
  function ol(o) {
    var d = 0, f = 0;
    return function() {
      var $ = dt(), I = i - ($ - f);
      if (f = $, I > 0) {
        if (++d >= n)
          return arguments[0];
      } else
        d = 0;
      return o.apply(void 0, arguments);
    };
  }
  function il(o) {
    if (o != null) {
      try {
        return nr.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function sa(o, d) {
    return o === d || o !== o && d !== d;
  }
  var cn = go(/* @__PURE__ */ function() {
    return arguments;
  }()) ? go : function(o) {
    return pt(o) && Ne.call(o, "callee") && !Ka.call(o, "callee");
  }, dn = Array.isArray;
  function un(o) {
    return o != null && wo(o.length) && !fn(o);
  }
  function sl(o) {
    return pt(o) && un(o);
  }
  var xo = Qa || fl;
  function fn(o) {
    if (!gr(o))
      return !1;
    var d = oa(o);
    return d == E || d == _ || d == m || d == P;
  }
  function wo(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function gr(o) {
    var d = typeof o;
    return o != null && (d == "object" || d == "function");
  }
  function pt(o) {
    return o != null && typeof o == "object";
  }
  function ll(o) {
    if (!pt(o) || oa(o) != C)
      return !1;
    var d = Ir(o);
    if (d === null)
      return !0;
    var f = Ne.call(d, "constructor") && d.constructor;
    return typeof f == "function" && f instanceof f && nr.call(f) == Qt;
  }
  var ko = T ? Ge(T) : Is;
  function cl(o) {
    return Gs(o, Eo(o));
  }
  function Eo(o) {
    return un(o) ? ae(o) : Ms(o);
  }
  var dl = qs(function(o, d, f, $) {
    yo(o, d, f, $);
  });
  function ul(o) {
    return function() {
      return o;
    };
  }
  function $o(o) {
    return o;
  }
  function fl() {
    return !1;
  }
  e.exports = dl;
})(Fa, Fa.exports);
var Xc = Fa.exports;
const xr = /* @__PURE__ */ ml(Xc);
var Kc = (e) => /!(important)?$/.test(e), Qo = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, Jc = (e, r) => (t) => {
  const a = String(r), n = Kc(a), i = Qo(a), l = e ? `${e}.${i}` : i;
  let u = ur(t.__cssMap) && l in t.__cssMap ? t.__cssMap[l].varRef : r;
  return u = Qo(u), n ? `${u} !important` : u;
};
function co(e) {
  const { scale: r, transform: t, compose: a } = e;
  return (i, l) => {
    var u;
    const p = Jc(r, i)(l);
    let m = (u = t == null ? void 0 : t(p, l)) != null ? u : p;
    return a && (m = a(m, l)), m;
  };
}
var ca = (...e) => (r) => e.reduce((t, a) => a(t), r);
function ze(e, r) {
  return (t) => {
    const a = { property: t, scale: e };
    return a.transform = co({
      scale: e,
      transform: r
    }), a;
  };
}
var Qc = ({ rtl: e, ltr: r }) => (t) => t.direction === "rtl" ? e : r;
function Zc(e) {
  const { property: r, scale: t, transform: a } = e;
  return {
    scale: t,
    property: Qc(r),
    transform: t ? co({
      scale: t,
      compose: a
    }) : a
  };
}
var us = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function ed() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...us
  ].join(" ");
}
function rd() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...us
  ].join(" ");
}
var td = {
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
}, ad = {
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
function nd(e) {
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
var od = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Vn = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, id = new Set(Object.values(Vn)), Hn = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), sd = (e) => e.trim();
function ld(e, r) {
  if (e == null || Hn.has(e))
    return e;
  if (!(Yn(e) || Hn.has(e)))
    return `url('${e}')`;
  const n = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = n == null ? void 0 : n[1], l = n == null ? void 0 : n[2];
  if (!i || !l)
    return e;
  const u = i.includes("-gradient") ? i : `${i}-gradient`, [p, ...m] = l.split(",").map(sd).filter(Boolean);
  if ((m == null ? void 0 : m.length) === 0)
    return e;
  const b = p in Vn ? Vn[p] : p;
  m.unshift(b);
  const y = m.map((v) => {
    if (id.has(v))
      return v;
    const E = v.indexOf(" "), [_, h] = E !== -1 ? [v.substr(0, E), v.substr(E + 1)] : [v], x = Yn(h) ? h : h && h.split(" "), w = `colors.${_}`, C = w in r.__cssMap ? r.__cssMap[w].varRef : _;
    return x ? [
      C,
      ...Array.isArray(x) ? x : [x]
    ].join(" ") : C;
  });
  return `${u}(${y.join(", ")})`;
}
var Yn = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), cd = (e, r) => ld(e, r ?? {});
function dd(e) {
  return /^var\(--.+\)$/.test(e);
}
var ud = (e) => {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}, Le = (e) => (r) => `${e}(${r})`, j = {
  filter(e) {
    return e !== "auto" ? e : td;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : ad;
  },
  ring(e) {
    return nd(j.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? ed() : e === "auto-gpu" ? rd() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = ud(e);
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
    if (dd(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: cd,
  blur: Le("blur"),
  opacity: Le("opacity"),
  brightness: Le("brightness"),
  contrast: Le("contrast"),
  dropShadow: Le("drop-shadow"),
  grayscale: Le("grayscale"),
  hueRotate: (e) => Le("hue-rotate")(j.degree(e)),
  invert: Le("invert"),
  saturate: Le("saturate"),
  sepia: Le("sepia"),
  bgImage(e) {
    return e == null || Yn(e) || Hn.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: t, divide: a } = (r = od[e]) != null ? r : {}, n = { flexDirection: e };
    return t && (n[t] = 1), a && (n[a] = 1), n;
  }
}, c = {
  borderWidths: ze("borderWidths"),
  borderStyles: ze("borderStyles"),
  colors: ze("colors"),
  borders: ze("borders"),
  gradients: ze("gradients", j.gradient),
  radii: ze("radii", j.px),
  space: ze("space", ca(j.vh, j.px)),
  spaceT: ze("space", ca(j.vh, j.px)),
  degreeT(e) {
    return { property: e, transform: j.degree };
  },
  prop(e, r, t) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: co({ scale: r, transform: t })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: ze("sizes", ca(j.vh, j.px)),
  sizesT: ze("sizes", ca(j.vh, j.fraction)),
  shadows: ze("shadows"),
  logical: Zc,
  blur: ze("blur", j.blur)
}, Sa = {
  background: c.colors("background"),
  backgroundColor: c.colors("backgroundColor"),
  backgroundImage: c.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: j.bgClip },
  bgSize: c.prop("backgroundSize"),
  bgPosition: c.prop("backgroundPosition"),
  bg: c.colors("background"),
  bgColor: c.colors("backgroundColor"),
  bgPos: c.prop("backgroundPosition"),
  bgRepeat: c.prop("backgroundRepeat"),
  bgAttachment: c.prop("backgroundAttachment"),
  bgGradient: c.gradients("backgroundImage"),
  bgClip: { transform: j.bgClip }
};
Object.assign(Sa, {
  bgImage: Sa.backgroundImage,
  bgImg: Sa.backgroundImage
});
var L = {
  border: c.borders("border"),
  borderWidth: c.borderWidths("borderWidth"),
  borderStyle: c.borderStyles("borderStyle"),
  borderColor: c.colors("borderColor"),
  borderRadius: c.radii("borderRadius"),
  borderTop: c.borders("borderTop"),
  borderBlockStart: c.borders("borderBlockStart"),
  borderTopLeftRadius: c.radii("borderTopLeftRadius"),
  borderStartStartRadius: c.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: c.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: c.radii("borderTopRightRadius"),
  borderStartEndRadius: c.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: c.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: c.borders("borderRight"),
  borderInlineEnd: c.borders("borderInlineEnd"),
  borderBottom: c.borders("borderBottom"),
  borderBlockEnd: c.borders("borderBlockEnd"),
  borderBottomLeftRadius: c.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: c.radii("borderBottomRightRadius"),
  borderLeft: c.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: c.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: c.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: c.borders(["borderLeft", "borderRight"]),
  borderInline: c.borders("borderInline"),
  borderY: c.borders(["borderTop", "borderBottom"]),
  borderBlock: c.borders("borderBlock"),
  borderTopWidth: c.borderWidths("borderTopWidth"),
  borderBlockStartWidth: c.borderWidths("borderBlockStartWidth"),
  borderTopColor: c.colors("borderTopColor"),
  borderBlockStartColor: c.colors("borderBlockStartColor"),
  borderTopStyle: c.borderStyles("borderTopStyle"),
  borderBlockStartStyle: c.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: c.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: c.borderWidths("borderBlockEndWidth"),
  borderBottomColor: c.colors("borderBottomColor"),
  borderBlockEndColor: c.colors("borderBlockEndColor"),
  borderBottomStyle: c.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: c.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: c.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: c.borderWidths("borderInlineStartWidth"),
  borderLeftColor: c.colors("borderLeftColor"),
  borderInlineStartColor: c.colors("borderInlineStartColor"),
  borderLeftStyle: c.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: c.borderStyles("borderInlineStartStyle"),
  borderRightWidth: c.borderWidths("borderRightWidth"),
  borderInlineEndWidth: c.borderWidths("borderInlineEndWidth"),
  borderRightColor: c.colors("borderRightColor"),
  borderInlineEndColor: c.colors("borderInlineEndColor"),
  borderRightStyle: c.borderStyles("borderRightStyle"),
  borderInlineEndStyle: c.borderStyles("borderInlineEndStyle"),
  borderTopRadius: c.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: c.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: c.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: c.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(L, {
  rounded: L.borderRadius,
  roundedTop: L.borderTopRadius,
  roundedTopLeft: L.borderTopLeftRadius,
  roundedTopRight: L.borderTopRightRadius,
  roundedTopStart: L.borderStartStartRadius,
  roundedTopEnd: L.borderStartEndRadius,
  roundedBottom: L.borderBottomRadius,
  roundedBottomLeft: L.borderBottomLeftRadius,
  roundedBottomRight: L.borderBottomRightRadius,
  roundedBottomStart: L.borderEndStartRadius,
  roundedBottomEnd: L.borderEndEndRadius,
  roundedLeft: L.borderLeftRadius,
  roundedRight: L.borderRightRadius,
  roundedStart: L.borderInlineStartRadius,
  roundedEnd: L.borderInlineEndRadius,
  borderStart: L.borderInlineStart,
  borderEnd: L.borderInlineEnd,
  borderTopStartRadius: L.borderStartStartRadius,
  borderTopEndRadius: L.borderStartEndRadius,
  borderBottomStartRadius: L.borderEndStartRadius,
  borderBottomEndRadius: L.borderEndEndRadius,
  borderStartRadius: L.borderInlineStartRadius,
  borderEndRadius: L.borderInlineEndRadius,
  borderStartWidth: L.borderInlineStartWidth,
  borderEndWidth: L.borderInlineEndWidth,
  borderStartColor: L.borderInlineStartColor,
  borderEndColor: L.borderInlineEndColor,
  borderStartStyle: L.borderInlineStartStyle,
  borderEndStyle: L.borderInlineEndStyle
});
var fd = {
  color: c.colors("color"),
  textColor: c.colors("color"),
  fill: c.colors("fill"),
  stroke: c.colors("stroke")
}, Un = {
  boxShadow: c.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: c.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: c.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Un, {
  shadow: Un.boxShadow
});
var pd = {
  filter: { transform: j.filter },
  blur: c.blur("--chakra-blur"),
  brightness: c.propT("--chakra-brightness", j.brightness),
  contrast: c.propT("--chakra-contrast", j.contrast),
  hueRotate: c.propT("--chakra-hue-rotate", j.hueRotate),
  invert: c.propT("--chakra-invert", j.invert),
  saturate: c.propT("--chakra-saturate", j.saturate),
  dropShadow: c.propT("--chakra-drop-shadow", j.dropShadow),
  backdropFilter: { transform: j.backdropFilter },
  backdropBlur: c.blur("--chakra-backdrop-blur"),
  backdropBrightness: c.propT(
    "--chakra-backdrop-brightness",
    j.brightness
  ),
  backdropContrast: c.propT("--chakra-backdrop-contrast", j.contrast),
  backdropHueRotate: c.propT(
    "--chakra-backdrop-hue-rotate",
    j.hueRotate
  ),
  backdropInvert: c.propT("--chakra-backdrop-invert", j.invert),
  backdropSaturate: c.propT("--chakra-backdrop-saturate", j.saturate)
}, Da = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: j.flexDirection },
  flex: !0,
  flexFlow: !0,
  flexGrow: !0,
  flexShrink: !0,
  flexBasis: c.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: c.space("gap"),
  rowGap: c.space("rowGap"),
  columnGap: c.space("columnGap")
};
Object.assign(Da, {
  flexDir: Da.flexDirection
});
var fs = {
  gridGap: c.space("gridGap"),
  gridColumnGap: c.space("gridColumnGap"),
  gridRowGap: c.space("gridRowGap"),
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
}, bd = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: j.outline },
  outlineOffset: !0,
  outlineColor: c.colors("outlineColor")
}, Pe = {
  width: c.sizesT("width"),
  inlineSize: c.sizesT("inlineSize"),
  height: c.sizes("height"),
  blockSize: c.sizes("blockSize"),
  boxSize: c.sizes(["width", "height"]),
  minWidth: c.sizes("minWidth"),
  minInlineSize: c.sizes("minInlineSize"),
  minHeight: c.sizes("minHeight"),
  minBlockSize: c.sizes("minBlockSize"),
  maxWidth: c.sizes("maxWidth"),
  maxInlineSize: c.sizes("maxInlineSize"),
  maxHeight: c.sizes("maxHeight"),
  maxBlockSize: c.sizes("maxBlockSize"),
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
      var t, a, n;
      return { [`@media screen and (min-width: ${(n = (a = (t = r.__breakpoints) == null ? void 0 : t.get(e)) == null ? void 0 : a.minW) != null ? n : e})`]: { display: "none" } };
    }
  },
  hideBelow: {
    scale: "breakpoints",
    transform: (e, r) => {
      var t, a, n;
      return { [`@media screen and (max-width: ${(n = (a = (t = r.__breakpoints) == null ? void 0 : t.get(e)) == null ? void 0 : a._minW) != null ? n : e})`]: { display: "none" } };
    }
  },
  verticalAlign: !0,
  boxSizing: !0,
  boxDecorationBreak: !0,
  float: c.propT("float", j.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Pe, {
  w: Pe.width,
  h: Pe.height,
  minW: Pe.minWidth,
  maxW: Pe.maxWidth,
  minH: Pe.minHeight,
  maxH: Pe.maxHeight,
  overscroll: Pe.overscrollBehavior,
  overscrollX: Pe.overscrollBehaviorX,
  overscrollY: Pe.overscrollBehaviorY
});
var hd = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: c.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: c.prop("listStyleImage")
};
function md(e, r, t, a) {
  const n = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < n.length && e; a += 1)
    e = e[n[a]];
  return e === void 0 ? t : e;
}
var vd = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (a, n, i, l) => {
    if (typeof a > "u")
      return e(a, n, i);
    r.has(a) || r.set(a, /* @__PURE__ */ new Map());
    const u = r.get(a);
    if (u.has(n))
      return u.get(n);
    const p = e(a, n, i, l);
    return u.set(n, p), p;
  };
}, gd = vd(md), yd = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Sd = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, mn = (e, r, t) => {
  const a = {}, n = gd(e, r, {});
  for (const i in n)
    i in t && t[i] != null || (a[i] = n[i]);
  return a;
}, _d = {
  srOnly: {
    transform(e) {
      return e === !0 ? yd : e === "focusable" ? Sd : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, t) => mn(r, `layerStyles.${e}`, t)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, t) => mn(r, `textStyles.${e}`, t)
  },
  apply: {
    processResult: !0,
    transform: (e, r, t) => mn(r, e, t)
  }
}, Tt = {
  position: !0,
  pos: c.prop("position"),
  zIndex: c.prop("zIndex", "zIndices"),
  inset: c.spaceT("inset"),
  insetX: c.spaceT(["left", "right"]),
  insetInline: c.spaceT("insetInline"),
  insetY: c.spaceT(["top", "bottom"]),
  insetBlock: c.spaceT("insetBlock"),
  top: c.spaceT("top"),
  insetBlockStart: c.spaceT("insetBlockStart"),
  bottom: c.spaceT("bottom"),
  insetBlockEnd: c.spaceT("insetBlockEnd"),
  left: c.spaceT("left"),
  insetInlineStart: c.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: c.spaceT("right"),
  insetInlineEnd: c.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(Tt, {
  insetStart: Tt.insetInlineStart,
  insetEnd: Tt.insetInlineEnd
});
var xd = {
  ring: { transform: j.ring },
  ringColor: c.colors("--chakra-ring-color"),
  ringOffset: c.prop("--chakra-ring-offset-width"),
  ringOffsetColor: c.colors("--chakra-ring-offset-color"),
  ringInset: c.prop("--chakra-ring-inset")
}, Z = {
  margin: c.spaceT("margin"),
  marginTop: c.spaceT("marginTop"),
  marginBlockStart: c.spaceT("marginBlockStart"),
  marginRight: c.spaceT("marginRight"),
  marginInlineEnd: c.spaceT("marginInlineEnd"),
  marginBottom: c.spaceT("marginBottom"),
  marginBlockEnd: c.spaceT("marginBlockEnd"),
  marginLeft: c.spaceT("marginLeft"),
  marginInlineStart: c.spaceT("marginInlineStart"),
  marginX: c.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: c.spaceT("marginInline"),
  marginY: c.spaceT(["marginTop", "marginBottom"]),
  marginBlock: c.spaceT("marginBlock"),
  padding: c.space("padding"),
  paddingTop: c.space("paddingTop"),
  paddingBlockStart: c.space("paddingBlockStart"),
  paddingRight: c.space("paddingRight"),
  paddingBottom: c.space("paddingBottom"),
  paddingBlockEnd: c.space("paddingBlockEnd"),
  paddingLeft: c.space("paddingLeft"),
  paddingInlineStart: c.space("paddingInlineStart"),
  paddingInlineEnd: c.space("paddingInlineEnd"),
  paddingX: c.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: c.space("paddingInline"),
  paddingY: c.space(["paddingTop", "paddingBottom"]),
  paddingBlock: c.space("paddingBlock")
};
Object.assign(Z, {
  m: Z.margin,
  mt: Z.marginTop,
  mr: Z.marginRight,
  me: Z.marginInlineEnd,
  marginEnd: Z.marginInlineEnd,
  mb: Z.marginBottom,
  ml: Z.marginLeft,
  ms: Z.marginInlineStart,
  marginStart: Z.marginInlineStart,
  mx: Z.marginX,
  my: Z.marginY,
  p: Z.padding,
  pt: Z.paddingTop,
  py: Z.paddingY,
  px: Z.paddingX,
  pb: Z.paddingBottom,
  pl: Z.paddingLeft,
  ps: Z.paddingInlineStart,
  paddingStart: Z.paddingInlineStart,
  pr: Z.paddingRight,
  pe: Z.paddingInlineEnd,
  paddingEnd: Z.paddingInlineEnd
});
var wd = {
  textDecorationColor: c.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: c.shadows("textShadow")
}, kd = {
  clipPath: !0,
  transform: c.propT("transform", j.transform),
  transformOrigin: !0,
  translateX: c.spaceT("--chakra-translate-x"),
  translateY: c.spaceT("--chakra-translate-y"),
  skewX: c.degreeT("--chakra-skew-x"),
  skewY: c.degreeT("--chakra-skew-y"),
  scaleX: c.prop("--chakra-scale-x"),
  scaleY: c.prop("--chakra-scale-y"),
  scale: c.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: c.degreeT("--chakra-rotate")
}, Ed = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: c.prop("transitionDuration", "transition.duration"),
  transitionProperty: c.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: c.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, $d = {
  fontFamily: c.prop("fontFamily", "fonts"),
  fontSize: c.prop("fontSize", "fontSizes", j.px),
  fontWeight: c.prop("fontWeight", "fontWeights"),
  lineHeight: c.prop("lineHeight", "lineHeights"),
  letterSpacing: c.prop("letterSpacing", "letterSpacings"),
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
}, Cd = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: c.spaceT("scrollMargin"),
  scrollMarginTop: c.spaceT("scrollMarginTop"),
  scrollMarginBottom: c.spaceT("scrollMarginBottom"),
  scrollMarginLeft: c.spaceT("scrollMarginLeft"),
  scrollMarginRight: c.spaceT("scrollMarginRight"),
  scrollMarginX: c.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: c.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: c.spaceT("scrollPadding"),
  scrollPaddingTop: c.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: c.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: c.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: c.spaceT("scrollPaddingRight"),
  scrollPaddingX: c.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: c.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function ps(e) {
  return ur(e) && e.reference ? e.reference : String(e);
}
var Ga = (e, ...r) => r.map(ps).join(` ${e} `).replace(/calc/g, ""), Zo = (...e) => `calc(${Ga("+", ...e)})`, ei = (...e) => `calc(${Ga("-", ...e)})`, Gn = (...e) => `calc(${Ga("*", ...e)})`, ri = (...e) => `calc(${Ga("/", ...e)})`, ti = (e) => {
  const r = ps(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Gn(r, -1);
}, gt = Object.assign(
  (e) => ({
    add: (...r) => gt(Zo(e, ...r)),
    subtract: (...r) => gt(ei(e, ...r)),
    multiply: (...r) => gt(Gn(e, ...r)),
    divide: (...r) => gt(ri(e, ...r)),
    negate: () => gt(ti(e)),
    toString: () => e.toString()
  }),
  {
    add: Zo,
    subtract: ei,
    multiply: Gn,
    divide: ri,
    negate: ti
  }
);
function Td(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function Rd(e) {
  const r = Td(e.toString());
  return zd(Ad(r));
}
function Ad(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function zd(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Pd(e, r = "") {
  return [r, e].filter(Boolean).join("-");
}
function Od(e, r) {
  return `var(${e}${r ? `, ${r}` : ""})`;
}
function Fd(e, r = "") {
  return Rd(`--${Pd(e, r)}`);
}
function A(e, r, t) {
  const a = Fd(e, t);
  return {
    variable: a,
    reference: Od(a, r)
  };
}
function Dd(e, r) {
  const t = {};
  for (const a of r) {
    if (Array.isArray(a)) {
      const [n, i] = a;
      t[n] = A(`${e}-${n}`, i);
      continue;
    }
    t[a] = A(`${e}-${a}`);
  }
  return t;
}
var ue = {
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
}, sr = (e) => bs((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), Xe = (e) => bs((r) => e(r, "~ &"), "[data-peer]", ".peer"), bs = (e, ...r) => r.map(e).join(", "), uo = {
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
  _groupHover: sr(ue.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Xe(ue.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: sr(ue.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Xe(ue.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: sr(ue.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Xe(ue.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: sr(ue.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Xe(ue.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: sr(ue.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Xe(ue.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: sr(ue.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Xe(ue.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: sr(ue.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Xe(ue.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: sr(ue.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Xe(ue.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Xe(ue.placeholderShown),
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
}, Bd = Object.keys(
  uo
), fo = xr(
  {},
  Sa,
  L,
  fd,
  Da,
  Pe,
  pd,
  xd,
  bd,
  fs,
  _d,
  Tt,
  Un,
  Z,
  Cd,
  $d,
  wd,
  kd,
  hd,
  Ed
);
Object.assign({}, Z, Pe, Da, fs, Tt);
var jd = [...Object.keys(fo), ...Bd], Id = { ...fo, ...uo }, Md = (e) => e in Id, Nd = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: a, media: n } = r.__breakpoints, i = {};
  for (const l in e) {
    let u = xt(e[l], r);
    if (u == null)
      continue;
    if (u = ur(u) && t(u) ? a(u) : u, !Array.isArray(u)) {
      i[l] = u;
      continue;
    }
    const p = u.slice(0, n.length).length;
    for (let m = 0; m < p; m += 1) {
      const b = n == null ? void 0 : n[m];
      if (!b) {
        i[l] = u[m];
        continue;
      }
      i[b] = i[b] || {}, u[m] != null && (i[b][l] = u[m]);
    }
  }
  return i;
};
function Ld(e) {
  const r = [];
  let t = "", a = !1;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    i === "(" ? (a = !0, t += i) : i === ")" ? (a = !1, t += i) : i === "," && !a ? (r.push(t), t = "") : t += i;
  }
  return t = t.trim(), t && r.push(t), r;
}
function Wd(e) {
  return /^var\(--.+\)$/.test(e);
}
var Vd = (e, r) => e.startsWith("--") && typeof r == "string" && !Wd(r), Hd = (e, r) => {
  var t, a;
  if (r == null)
    return r;
  const n = (p) => {
    var m, b;
    return (b = (m = e.__cssMap) == null ? void 0 : m[p]) == null ? void 0 : b.varRef;
  }, i = (p) => {
    var m;
    return (m = n(p)) != null ? m : p;
  }, [l, u] = Ld(r);
  return r = (a = (t = n(l)) != null ? t : i(u)) != null ? a : i(r), r;
};
function Yd(e) {
  const { configs: r = {}, pseudos: t = {}, theme: a } = e, n = (i, l = !1) => {
    var u, p, m;
    const b = xt(i, a), y = Nd(b)(a);
    let v = {};
    for (let E in y) {
      const _ = y[E];
      let h = xt(_, a);
      E in t && (E = t[E]), Vd(E, h) && (h = Hd(a, h));
      let x = r[E];
      if (x === !0 && (x = { property: E }), ur(h)) {
        v[E] = (u = v[E]) != null ? u : {}, v[E] = xr(
          {},
          v[E],
          n(h, !0)
        );
        continue;
      }
      let w = (m = (p = x == null ? void 0 : x.transform) == null ? void 0 : p.call(x, h, a, b)) != null ? m : h;
      w = x != null && x.processResult ? n(w, !0) : w;
      const C = xt(x == null ? void 0 : x.property, a);
      if (!l && (x != null && x.static)) {
        const P = xt(x.static, a);
        v = xr({}, v, P);
      }
      if (C && Array.isArray(C)) {
        for (const P of C)
          v[P] = w;
        continue;
      }
      if (C) {
        C === "&" && ur(w) ? v = xr({}, v, w) : v[C] = w;
        continue;
      }
      if (ur(w)) {
        v = xr({}, v, w);
        continue;
      }
      v[E] = w;
    }
    return v;
  };
  return n;
}
var Ud = (e) => (r) => Yd({
  theme: r,
  pseudos: uo,
  configs: fo
})(e);
function Q(e) {
  return {
    definePartsStyle(r) {
      return r;
    },
    defineMultiStyleConfig(r) {
      return { parts: e, ...r };
    }
  };
}
var Gd = [
  "borders",
  "breakpoints",
  "colors",
  "components",
  "config",
  "direction",
  "fonts",
  "fontSizes",
  "fontWeights",
  "letterSpacings",
  "lineHeights",
  "radii",
  "shadows",
  "sizes",
  "space",
  "styles",
  "transition",
  "zIndices"
];
function qd(e) {
  return ur(e) ? Gd.every(
    (r) => Object.prototype.hasOwnProperty.call(e, r)
  ) : !1;
}
var Xd = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, Kd = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Jd = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, Qd = {
  property: Xd,
  easing: Kd,
  duration: Jd
}, Zd = Qd, eu = {
  hide: -1,
  auto: "auto",
  base: 0,
  docked: 10,
  dropdown: 1e3,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800
}, ru = eu, tu = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, au = tu, nu = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, ou = nu, iu = {
  transparent: "transparent",
  current: "currentColor",
  black: "#000000",
  white: "#FFFFFF",
  whiteAlpha: {
    50: "rgba(255, 255, 255, 0.04)",
    100: "rgba(255, 255, 255, 0.06)",
    200: "rgba(255, 255, 255, 0.08)",
    300: "rgba(255, 255, 255, 0.16)",
    400: "rgba(255, 255, 255, 0.24)",
    500: "rgba(255, 255, 255, 0.36)",
    600: "rgba(255, 255, 255, 0.48)",
    700: "rgba(255, 255, 255, 0.64)",
    800: "rgba(255, 255, 255, 0.80)",
    900: "rgba(255, 255, 255, 0.92)"
  },
  blackAlpha: {
    50: "rgba(0, 0, 0, 0.04)",
    100: "rgba(0, 0, 0, 0.06)",
    200: "rgba(0, 0, 0, 0.08)",
    300: "rgba(0, 0, 0, 0.16)",
    400: "rgba(0, 0, 0, 0.24)",
    500: "rgba(0, 0, 0, 0.36)",
    600: "rgba(0, 0, 0, 0.48)",
    700: "rgba(0, 0, 0, 0.64)",
    800: "rgba(0, 0, 0, 0.80)",
    900: "rgba(0, 0, 0, 0.92)"
  },
  gray: {
    50: "#F7FAFC",
    100: "#EDF2F7",
    200: "#E2E8F0",
    300: "#CBD5E0",
    400: "#A0AEC0",
    500: "#718096",
    600: "#4A5568",
    700: "#2D3748",
    800: "#1A202C",
    900: "#171923"
  },
  red: {
    50: "#FFF5F5",
    100: "#FED7D7",
    200: "#FEB2B2",
    300: "#FC8181",
    400: "#F56565",
    500: "#E53E3E",
    600: "#C53030",
    700: "#9B2C2C",
    800: "#822727",
    900: "#63171B"
  },
  orange: {
    50: "#FFFAF0",
    100: "#FEEBC8",
    200: "#FBD38D",
    300: "#F6AD55",
    400: "#ED8936",
    500: "#DD6B20",
    600: "#C05621",
    700: "#9C4221",
    800: "#7B341E",
    900: "#652B19"
  },
  yellow: {
    50: "#FFFFF0",
    100: "#FEFCBF",
    200: "#FAF089",
    300: "#F6E05E",
    400: "#ECC94B",
    500: "#D69E2E",
    600: "#B7791F",
    700: "#975A16",
    800: "#744210",
    900: "#5F370E"
  },
  green: {
    50: "#F0FFF4",
    100: "#C6F6D5",
    200: "#9AE6B4",
    300: "#68D391",
    400: "#48BB78",
    500: "#38A169",
    600: "#2F855A",
    700: "#276749",
    800: "#22543D",
    900: "#1C4532"
  },
  teal: {
    50: "#E6FFFA",
    100: "#B2F5EA",
    200: "#81E6D9",
    300: "#4FD1C5",
    400: "#38B2AC",
    500: "#319795",
    600: "#2C7A7B",
    700: "#285E61",
    800: "#234E52",
    900: "#1D4044"
  },
  blue: {
    50: "#ebf8ff",
    100: "#bee3f8",
    200: "#90cdf4",
    300: "#63b3ed",
    400: "#4299e1",
    500: "#3182ce",
    600: "#2b6cb0",
    700: "#2c5282",
    800: "#2a4365",
    900: "#1A365D"
  },
  cyan: {
    50: "#EDFDFD",
    100: "#C4F1F9",
    200: "#9DECF9",
    300: "#76E4F7",
    400: "#0BC5EA",
    500: "#00B5D8",
    600: "#00A3C4",
    700: "#0987A0",
    800: "#086F83",
    900: "#065666"
  },
  purple: {
    50: "#FAF5FF",
    100: "#E9D8FD",
    200: "#D6BCFA",
    300: "#B794F4",
    400: "#9F7AEA",
    500: "#805AD5",
    600: "#6B46C1",
    700: "#553C9A",
    800: "#44337A",
    900: "#322659"
  },
  pink: {
    50: "#FFF5F7",
    100: "#FED7E2",
    200: "#FBB6CE",
    300: "#F687B3",
    400: "#ED64A6",
    500: "#D53F8C",
    600: "#B83280",
    700: "#97266D",
    800: "#702459",
    900: "#521B41"
  },
  linkedin: {
    50: "#E8F4F9",
    100: "#CFEDFB",
    200: "#9BDAF3",
    300: "#68C7EC",
    400: "#34B3E4",
    500: "#00A0DC",
    600: "#008CC9",
    700: "#0077B5",
    800: "#005E93",
    900: "#004471"
  },
  facebook: {
    50: "#E8F4F9",
    100: "#D9DEE9",
    200: "#B7C2DA",
    300: "#6482C0",
    400: "#4267B2",
    500: "#385898",
    600: "#314E89",
    700: "#29487D",
    800: "#223B67",
    900: "#1E355B"
  },
  messenger: {
    50: "#D0E6FF",
    100: "#B9DAFF",
    200: "#A2CDFF",
    300: "#7AB8FF",
    400: "#2E90FF",
    500: "#0078FF",
    600: "#0063D1",
    700: "#0052AC",
    800: "#003C7E",
    900: "#002C5C"
  },
  whatsapp: {
    50: "#dffeec",
    100: "#b9f5d0",
    200: "#90edb3",
    300: "#65e495",
    400: "#3cdd78",
    500: "#22c35e",
    600: "#179848",
    700: "#0c6c33",
    800: "#01421c",
    900: "#001803"
  },
  twitter: {
    50: "#E5F4FD",
    100: "#C8E9FB",
    200: "#A8DCFA",
    300: "#83CDF7",
    400: "#57BBF5",
    500: "#1DA1F2",
    600: "#1A94DA",
    700: "#1681BF",
    800: "#136B9E",
    900: "#0D4D71"
  },
  telegram: {
    50: "#E3F2F9",
    100: "#C5E4F3",
    200: "#A2D4EC",
    300: "#7AC1E4",
    400: "#47A9DA",
    500: "#0088CC",
    600: "#007AB8",
    700: "#006BA1",
    800: "#005885",
    900: "#003F5E"
  }
}, su = iu, lu = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, cu = lu, du = {
  xs: "0 0 0 1px rgba(0, 0, 0, 0.05)",
  sm: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
  base: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
  md: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
  lg: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
  xl: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
  "2xl": "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
  outline: "0 0 0 3px rgba(66, 153, 225, 0.6)",
  inner: "inset 0 2px 4px 0 rgba(0,0,0,0.06)",
  none: "none",
  "dark-lg": "rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"
}, uu = du, fu = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, pu = fu, bu = {
  letterSpacings: {
    tighter: "-0.05em",
    tight: "-0.025em",
    normal: "0",
    wide: "0.025em",
    wider: "0.05em",
    widest: "0.1em"
  },
  lineHeights: {
    normal: "normal",
    none: 1,
    shorter: 1.25,
    short: 1.375,
    base: 1.5,
    tall: 1.625,
    taller: "2",
    3: ".75rem",
    4: "1rem",
    5: "1.25rem",
    6: "1.5rem",
    7: "1.75rem",
    8: "2rem",
    9: "2.25rem",
    10: "2.5rem"
  },
  fontWeights: {
    hairline: 100,
    thin: 200,
    light: 300,
    normal: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
    extrabold: 800,
    black: 900
  },
  fonts: {
    heading: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    body: '-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    mono: 'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'
  },
  fontSizes: {
    "3xs": "0.45rem",
    "2xs": "0.625rem",
    xs: "0.75rem",
    sm: "0.875rem",
    md: "1rem",
    lg: "1.125rem",
    xl: "1.25rem",
    "2xl": "1.5rem",
    "3xl": "1.875rem",
    "4xl": "2.25rem",
    "5xl": "3rem",
    "6xl": "3.75rem",
    "7xl": "4.5rem",
    "8xl": "6rem",
    "9xl": "8rem"
  }
}, hs = bu, ms = {
  px: "1px",
  0.5: "0.125rem",
  1: "0.25rem",
  1.5: "0.375rem",
  2: "0.5rem",
  2.5: "0.625rem",
  3: "0.75rem",
  3.5: "0.875rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  9: "2.25rem",
  10: "2.5rem",
  12: "3rem",
  14: "3.5rem",
  16: "4rem",
  20: "5rem",
  24: "6rem",
  28: "7rem",
  32: "8rem",
  36: "9rem",
  40: "10rem",
  44: "11rem",
  48: "12rem",
  52: "13rem",
  56: "14rem",
  60: "15rem",
  64: "16rem",
  72: "18rem",
  80: "20rem",
  96: "24rem"
}, hu = {
  max: "max-content",
  min: "min-content",
  full: "100%",
  "3xs": "14rem",
  "2xs": "16rem",
  xs: "20rem",
  sm: "24rem",
  md: "28rem",
  lg: "32rem",
  xl: "36rem",
  "2xl": "42rem",
  "3xl": "48rem",
  "4xl": "56rem",
  "5xl": "64rem",
  "6xl": "72rem",
  "7xl": "80rem",
  "8xl": "90rem",
  prose: "60ch"
}, mu = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, vu = {
  ...ms,
  ...hu,
  container: mu
}, vs = vu, gu = {
  breakpoints: ou,
  zIndices: ru,
  radii: cu,
  blur: pu,
  colors: su,
  ...hs,
  sizes: vs,
  shadows: uu,
  space: ms,
  borders: au,
  transition: Zd
}, { defineMultiStyleConfig: yu, definePartsStyle: wt } = Q([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Ke = A("stepper-indicator-size"), Wr = A("stepper-icon-size"), Vr = A("stepper-title-font-size"), kt = A("stepper-description-font-size"), yt = A("stepper-accent-color"), Su = wt(({ colorScheme: e }) => ({
  stepper: {
    display: "flex",
    justifyContent: "space-between",
    gap: "4",
    "&[data-orientation=vertical]": {
      flexDirection: "column",
      alignItems: "flex-start"
    },
    "&[data-orientation=horizontal]": {
      flexDirection: "row",
      alignItems: "center"
    },
    [yt.variable]: `colors.${e}.500`,
    _dark: {
      [yt.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Vr.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: kt.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Vr.reference
  },
  step: {
    flexShrink: 0,
    position: "relative",
    display: "flex",
    gap: "2",
    "&[data-orientation=horizontal]": {
      alignItems: "center"
    },
    flex: "1",
    "&:last-of-type:not([data-stretch])": {
      flex: "initial"
    }
  },
  icon: {
    flexShrink: 0,
    width: Wr.reference,
    height: Wr.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Ke.reference,
    height: Ke.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: yt.reference
    },
    "&[data-status=complete]": {
      bg: yt.reference,
      color: "chakra-inverse-text"
    },
    "&[data-status=incomplete]": {
      borderWidth: "2px"
    }
  },
  separator: {
    bg: "chakra-border-color",
    flex: "1",
    "&[data-status=complete]": {
      bg: yt.reference
    },
    "&[data-orientation=horizontal]": {
      width: "100%",
      height: "2px",
      marginStart: "2"
    },
    "&[data-orientation=vertical]": {
      width: "2px",
      position: "absolute",
      height: "100%",
      maxHeight: `calc(100% - ${Ke.reference} - 8px)`,
      top: `calc(${Ke.reference} + 4px)`,
      insetStart: `calc(${Ke.reference} / 2 - 1px)`
    }
  }
})), _u = yu({
  baseStyle: Su,
  sizes: {
    xs: wt({
      stepper: {
        [Ke.variable]: "sizes.4",
        [Wr.variable]: "sizes.3",
        [Vr.variable]: "fontSizes.xs",
        [kt.variable]: "fontSizes.xs"
      }
    }),
    sm: wt({
      stepper: {
        [Ke.variable]: "sizes.6",
        [Wr.variable]: "sizes.4",
        [Vr.variable]: "fontSizes.sm",
        [kt.variable]: "fontSizes.xs"
      }
    }),
    md: wt({
      stepper: {
        [Ke.variable]: "sizes.8",
        [Wr.variable]: "sizes.5",
        [Vr.variable]: "fontSizes.md",
        [kt.variable]: "fontSizes.sm"
      }
    }),
    lg: wt({
      stepper: {
        [Ke.variable]: "sizes.10",
        [Wr.variable]: "sizes.6",
        [Vr.variable]: "fontSizes.lg",
        [kt.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function Y(e, r = {}) {
  let t = !1;
  function a() {
    if (!t) {
      t = !0;
      return;
    }
    throw new Error(
      "[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?"
    );
  }
  function n(...b) {
    a();
    for (const y of b)
      r[y] = p(y);
    return Y(e, r);
  }
  function i(...b) {
    for (const y of b)
      y in r || (r[y] = p(y));
    return Y(e, r);
  }
  function l() {
    return Object.fromEntries(
      Object.entries(r).map(([y, v]) => [y, v.selector])
    );
  }
  function u() {
    return Object.fromEntries(
      Object.entries(r).map(([y, v]) => [y, v.className])
    );
  }
  function p(b) {
    const E = `chakra-${(["container", "root"].includes(b ?? "") ? [e] : [e, b]).filter(Boolean).join("__")}`;
    return {
      className: E,
      selector: `.${E}`,
      toString: () => b
    };
  }
  return {
    parts: n,
    toPart: p,
    extend: i,
    selectors: l,
    classnames: u,
    get keys() {
      return Object.keys(r);
    },
    __type: {}
  };
}
var xu = Y("accordion").parts("root", "container", "button", "panel").extend("icon"), wu = Y("alert").parts("title", "description", "container").extend("icon", "spinner"), ku = Y("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), Eu = Y("breadcrumb").parts("link", "item", "container").extend("separator");
Y("button").parts();
var $u = Y("checkbox").parts("control", "icon", "container").extend("label");
Y("progress").parts("track", "filledTrack").extend("label");
var Cu = Y("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Tu = Y("editable").parts(
  "preview",
  "input",
  "textarea"
), Ru = Y("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), Au = Y("formError").parts("text", "icon"), zu = Y("input").parts(
  "addon",
  "field",
  "element",
  "group"
), Pu = Y("list").parts("container", "item", "icon"), Ou = Y("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), Fu = Y("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Du = Y("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Y("pininput").parts("field");
var Bu = Y("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), ju = Y("progress").parts(
  "label",
  "filledTrack",
  "track"
), Iu = Y("radio").parts(
  "container",
  "control",
  "label"
), Mu = Y("select").parts("field", "icon"), Nu = Y("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), Lu = Y("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), Wu = Y("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), Vu = Y("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), Hu = Y("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), Yu = Y("tag").parts(
  "container",
  "label",
  "closeButton"
), Uu = Y("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
Y("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function wr(e, r, t) {
  return Math.min(Math.max(e, t), r);
}
class Gu extends Error {
  constructor(r) {
    super(`Failed to parse color: "${r}"`);
  }
}
var Et = Gu;
function po(e) {
  if (typeof e != "string") throw new Et(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let r = e.trim();
  r = rf.test(e) ? Ku(e) : e;
  const t = Ju.exec(r);
  if (t) {
    const l = Array.from(t).slice(1);
    return [...l.slice(0, 3).map((u) => parseInt(Nt(u, 2), 16)), parseInt(Nt(l[3] || "f", 2), 16) / 255];
  }
  const a = Qu.exec(r);
  if (a) {
    const l = Array.from(a).slice(1);
    return [...l.slice(0, 3).map((u) => parseInt(u, 16)), parseInt(l[3] || "ff", 16) / 255];
  }
  const n = Zu.exec(r);
  if (n) {
    const l = Array.from(n).slice(1);
    return [...l.slice(0, 3).map((u) => parseInt(u, 10)), parseFloat(l[3] || "1")];
  }
  const i = ef.exec(r);
  if (i) {
    const [l, u, p, m] = Array.from(i).slice(1).map(parseFloat);
    if (wr(0, 100, u) !== u) throw new Et(e);
    if (wr(0, 100, p) !== p) throw new Et(e);
    return [...tf(l, u, p), Number.isNaN(m) ? 1 : m];
  }
  throw new Et(e);
}
function qu(e) {
  let r = 5381, t = e.length;
  for (; t; )
    r = r * 33 ^ e.charCodeAt(--t);
  return (r >>> 0) % 2341;
}
const ai = (e) => parseInt(e.replace(/_/g, ""), 36), Xu = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, r) => {
  const t = ai(r.substring(0, 3)), a = ai(r.substring(3)).toString(16);
  let n = "";
  for (let i = 0; i < 6 - a.length; i++)
    n += "0";
  return e[t] = `${n}${a}`, e;
}, {});
function Ku(e) {
  const r = e.toLowerCase().trim(), t = Xu[qu(r)];
  if (!t) throw new Et(e);
  return `#${t}`;
}
const Nt = (e, r) => Array.from(Array(r)).map(() => e).join(""), Ju = new RegExp(`^#${Nt("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Qu = new RegExp(`^#${Nt("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Zu = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Nt(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), ef = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, rf = /^[a-z]+$/i, ni = (e) => Math.round(e * 255), tf = (e, r, t) => {
  let a = t / 100;
  if (r === 0)
    return [a, a, a].map(ni);
  const n = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * a - 1)) * (r / 100), l = i * (1 - Math.abs(n % 2 - 1));
  let u = 0, p = 0, m = 0;
  n >= 0 && n < 1 ? (u = i, p = l) : n >= 1 && n < 2 ? (u = l, p = i) : n >= 2 && n < 3 ? (p = i, m = l) : n >= 3 && n < 4 ? (p = l, m = i) : n >= 4 && n < 5 ? (u = l, m = i) : n >= 5 && n < 6 && (u = i, m = l);
  const b = a - i / 2, y = u + b, v = p + b, E = m + b;
  return [y, v, E].map(ni);
};
function af(e, r, t, a) {
  return `rgba(${wr(0, 255, e).toFixed()}, ${wr(0, 255, r).toFixed()}, ${wr(0, 255, t).toFixed()}, ${parseFloat(wr(0, 1, a).toFixed(3))})`;
}
function nf(e, r) {
  const [t, a, n, i] = po(e);
  return af(t, a, n, i - r);
}
function of(e) {
  const [r, t, a, n] = po(e);
  let i = (l) => {
    const u = wr(0, 255, l).toString(16);
    return u.length === 1 ? `0${u}` : u;
  };
  return `#${i(r)}${i(t)}${i(a)}${n < 1 ? i(Math.round(n * 255)) : ""}`;
}
function sf(e, r, t, a, n) {
  for (r = r.split ? r.split(".") : r, a = 0; a < r.length; a++)
    e = e ? e[r[a]] : n;
  return e === n ? t : e;
}
var lf = (e) => Object.keys(e).length === 0, ge = (e, r, t) => {
  const a = sf(e, `colors.${r}`, r);
  try {
    return of(a), a;
  } catch {
    return t ?? "#000000";
  }
}, cf = (e) => {
  const [r, t, a] = po(e);
  return (r * 299 + t * 587 + a * 114) / 1e3;
}, df = (e) => (r) => {
  const t = ge(r, e);
  return cf(t) < 128 ? "dark" : "light";
}, uf = (e) => (r) => df(e)(r) === "dark", tt = (e, r) => (t) => {
  const a = ge(t, e);
  return nf(a, 1 - r);
};
function oi(e = "1rem", r = "rgba(255, 255, 255, 0.15)") {
  return {
    backgroundImage: `linear-gradient(
    45deg,
    ${r} 25%,
    transparent 25%,
    transparent 50%,
    ${r} 50%,
    ${r} 75%,
    transparent 75%,
    transparent
  )`,
    backgroundSize: `${e} ${e}`
  };
}
var ff = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function pf(e) {
  const r = ff();
  return !e || lf(e) ? r : e.string && e.colors ? hf(e.string, e.colors) : e.string && !e.colors ? bf(e.string) : e.colors && !e.string ? mf(e.colors) : r;
}
function bf(e) {
  let r = 0;
  if (e.length === 0)
    return r.toString();
  for (let a = 0; a < e.length; a += 1)
    r = e.charCodeAt(a) + ((r << 5) - r), r = r & r;
  let t = "#";
  for (let a = 0; a < 3; a += 1) {
    const n = r >> a * 8 & 255;
    t += `00${n.toString(16)}`.substr(-2);
  }
  return t;
}
function hf(e, r) {
  let t = 0;
  if (e.length === 0)
    return r[0];
  for (let a = 0; a < e.length; a += 1)
    t = e.charCodeAt(a) + ((t << 5) - t), t = t & t;
  return t = (t % r.length + r.length) % r.length, r[t];
}
function mf(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function R(e, r) {
  return (t) => t.colorMode === "dark" ? r : e;
}
function bo(e) {
  const { orientation: r, vertical: t, horizontal: a } = e;
  return r ? r === "vertical" ? t : a : {};
}
function gs(e) {
  return ur(e) && e.reference ? e.reference : String(e);
}
var qa = (e, ...r) => r.map(gs).join(` ${e} `).replace(/calc/g, ""), ii = (...e) => `calc(${qa("+", ...e)})`, si = (...e) => `calc(${qa("-", ...e)})`, qn = (...e) => `calc(${qa("*", ...e)})`, li = (...e) => `calc(${qa("/", ...e)})`, ci = (e) => {
  const r = gs(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : qn(r, -1);
}, Je = Object.assign(
  (e) => ({
    add: (...r) => Je(ii(e, ...r)),
    subtract: (...r) => Je(si(e, ...r)),
    multiply: (...r) => Je(qn(e, ...r)),
    divide: (...r) => Je(li(e, ...r)),
    negate: () => Je(ci(e)),
    toString: () => e.toString()
  }),
  {
    add: ii,
    subtract: si,
    multiply: qn,
    divide: li,
    negate: ci
  }
);
function vf(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function gf(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function ys(e) {
  const r = gf(e.toString());
  return r.includes("\\.") ? e : vf(e) ? r.replace(".", "\\.") : e;
}
function yf(e, r = "") {
  return [r, ys(e)].filter(Boolean).join("-");
}
function Sf(e, r) {
  return `var(${ys(e)}${r ? `, ${r}` : ""})`;
}
function _f(e, r = "") {
  return `--${yf(e, r)}`;
}
function se(e, r) {
  const t = _f(e, void 0);
  return {
    variable: t,
    reference: Sf(t, xf(void 0))
  };
}
function xf(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: wf, definePartsStyle: _a } = Q(Wu.keys), Rt = se("switch-track-width"), kr = se("switch-track-height"), vn = se("switch-track-diff"), kf = Je.subtract(Rt, kr), Xn = se("switch-thumb-x"), St = se("switch-bg"), Ef = (e) => {
  const { colorScheme: r } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [Rt.reference],
    height: [kr.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [St.variable]: "colors.gray.300",
    _dark: {
      [St.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [St.variable]: `colors.${r}.500`,
      _dark: {
        [St.variable]: `colors.${r}.200`
      }
    },
    bg: St.reference
  };
}, $f = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [kr.reference],
  height: [kr.reference],
  _checked: {
    transform: `translateX(${Xn.reference})`
  }
}, Cf = _a((e) => ({
  container: {
    [vn.variable]: kf,
    [Xn.variable]: vn.reference,
    _rtl: {
      [Xn.variable]: Je(vn).negate().toString()
    }
  },
  track: Ef(e),
  thumb: $f
})), Tf = {
  sm: _a({
    container: {
      [Rt.variable]: "1.375rem",
      [kr.variable]: "sizes.3"
    }
  }),
  md: _a({
    container: {
      [Rt.variable]: "1.875rem",
      [kr.variable]: "sizes.4"
    }
  }),
  lg: _a({
    container: {
      [Rt.variable]: "2.875rem",
      [kr.variable]: "sizes.6"
    }
  })
}, Rf = wf({
  baseStyle: Cf,
  sizes: Tf,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Af, definePartsStyle: Kr } = Q(Vu.keys), zf = Kr({
  table: {
    fontVariantNumeric: "lining-nums tabular-nums",
    borderCollapse: "collapse",
    width: "full"
  },
  th: {
    fontFamily: "heading",
    fontWeight: "bold",
    textTransform: "uppercase",
    letterSpacing: "wider",
    textAlign: "start"
  },
  td: {
    textAlign: "start"
  },
  caption: {
    mt: 4,
    fontFamily: "heading",
    textAlign: "center",
    fontWeight: "medium"
  }
}), Ba = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, Pf = Kr((e) => {
  const { colorScheme: r } = e;
  return {
    th: {
      color: R("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: R(`${r}.100`, `${r}.700`)(e),
      ...Ba
    },
    td: {
      borderBottom: "1px",
      borderColor: R(`${r}.100`, `${r}.700`)(e),
      ...Ba
    },
    caption: {
      color: R("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), Of = Kr((e) => {
  const { colorScheme: r } = e;
  return {
    th: {
      color: R("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: R(`${r}.100`, `${r}.700`)(e),
      ...Ba
    },
    td: {
      borderBottom: "1px",
      borderColor: R(`${r}.100`, `${r}.700`)(e),
      ...Ba
    },
    caption: {
      color: R("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: R(`${r}.100`, `${r}.700`)(e)
          },
          td: {
            background: R(`${r}.100`, `${r}.700`)(e)
          }
        }
      }
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), Ff = {
  simple: Pf,
  striped: Of,
  unstyled: {}
}, Df = {
  sm: Kr({
    th: {
      px: "4",
      py: "1",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "4",
      py: "2",
      fontSize: "sm",
      lineHeight: "4"
    },
    caption: {
      px: "4",
      py: "2",
      fontSize: "xs"
    }
  }),
  md: Kr({
    th: {
      px: "6",
      py: "3",
      lineHeight: "4",
      fontSize: "xs"
    },
    td: {
      px: "6",
      py: "4",
      lineHeight: "5"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "sm"
    }
  }),
  lg: Kr({
    th: {
      px: "8",
      py: "4",
      lineHeight: "5",
      fontSize: "sm"
    },
    td: {
      px: "8",
      py: "5",
      lineHeight: "6"
    },
    caption: {
      px: "6",
      py: "2",
      fontSize: "md"
    }
  })
}, Bf = Af({
  baseStyle: zf,
  variants: Ff,
  sizes: Df,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Se = A("tabs-color"), Ie = A("tabs-bg"), da = A("tabs-border-color"), { defineMultiStyleConfig: jf, definePartsStyle: Ye } = Q(Hu.keys), If = (e) => {
  const { orientation: r } = e;
  return {
    display: r === "vertical" ? "flex" : "block"
  };
}, Mf = (e) => {
  const { isFitted: r } = e;
  return {
    flex: r ? 1 : void 0,
    transitionProperty: "common",
    transitionDuration: "normal",
    _focusVisible: {
      zIndex: 1,
      boxShadow: "outline"
    },
    _disabled: {
      cursor: "not-allowed",
      opacity: 0.4
    }
  };
}, Nf = (e) => {
  const { align: r = "start", orientation: t } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[r],
    flexDirection: t === "vertical" ? "column" : "row"
  };
}, Lf = {
  p: 4
}, Wf = Ye((e) => ({
  root: If(e),
  tab: Mf(e),
  tablist: Nf(e),
  tabpanel: Lf
})), Vf = {
  sm: Ye({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Ye({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Ye({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, Hf = Ye((e) => {
  const { colorScheme: r, orientation: t } = e, a = t === "vertical", n = a ? "borderStart" : "borderBottom", i = a ? "marginStart" : "marginBottom";
  return {
    tablist: {
      [n]: "2px solid",
      borderColor: "inherit"
    },
    tab: {
      [n]: "2px solid",
      borderColor: "transparent",
      [i]: "-2px",
      _selected: {
        [Se.variable]: `colors.${r}.600`,
        _dark: {
          [Se.variable]: `colors.${r}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [Ie.variable]: "colors.gray.200",
        _dark: {
          [Ie.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: Se.reference,
      bg: Ie.reference
    }
  };
}), Yf = Ye((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [da.variable]: "transparent",
      _selected: {
        [Se.variable]: `colors.${r}.600`,
        [da.variable]: "colors.white",
        _dark: {
          [Se.variable]: `colors.${r}.300`,
          [da.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: da.reference
      },
      color: Se.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Uf = Ye((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [Ie.variable]: "colors.gray.50",
      _dark: {
        [Ie.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [Ie.variable]: "colors.white",
        [Se.variable]: `colors.${r}.600`,
        _dark: {
          [Ie.variable]: "colors.gray.800",
          [Se.variable]: `colors.${r}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: Se.reference,
      bg: Ie.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), Gf = Ye((e) => {
  const { colorScheme: r, theme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: ge(t, `${r}.700`),
        bg: ge(t, `${r}.100`)
      }
    }
  };
}), qf = Ye((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [Se.variable]: "colors.gray.600",
      _dark: {
        [Se.variable]: "inherit"
      },
      _selected: {
        [Se.variable]: "colors.white",
        [Ie.variable]: `colors.${r}.600`,
        _dark: {
          [Se.variable]: "colors.gray.800",
          [Ie.variable]: `colors.${r}.300`
        }
      },
      color: Se.reference,
      bg: Ie.reference
    }
  };
}), Xf = Ye({}), Kf = {
  line: Hf,
  enclosed: Yf,
  "enclosed-colored": Uf,
  "soft-rounded": Gf,
  "solid-rounded": qf,
  unstyled: Xf
}, Jf = jf({
  baseStyle: Wf,
  sizes: Vf,
  variants: Kf,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), oe = Dd("badge", ["bg", "color", "shadow"]), Qf = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: oe.bg.reference,
  color: oe.color.reference,
  boxShadow: oe.shadow.reference
}, Zf = (e) => {
  const { colorScheme: r, theme: t } = e, a = tt(`${r}.500`, 0.6)(t);
  return {
    [oe.bg.variable]: `colors.${r}.500`,
    [oe.color.variable]: "colors.white",
    _dark: {
      [oe.bg.variable]: a,
      [oe.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, ep = (e) => {
  const { colorScheme: r, theme: t } = e, a = tt(`${r}.200`, 0.16)(t);
  return {
    [oe.bg.variable]: `colors.${r}.100`,
    [oe.color.variable]: `colors.${r}.800`,
    _dark: {
      [oe.bg.variable]: a,
      [oe.color.variable]: `colors.${r}.200`
    }
  };
}, rp = (e) => {
  const { colorScheme: r, theme: t } = e, a = tt(`${r}.200`, 0.8)(t);
  return {
    [oe.color.variable]: `colors.${r}.500`,
    _dark: {
      [oe.color.variable]: a
    },
    [oe.shadow.variable]: `inset 0 0 0px 1px ${oe.color.reference}`
  };
}, tp = {
  solid: Zf,
  subtle: ep,
  outline: rp
}, At = {
  baseStyle: Qf,
  variants: tp,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: ap, definePartsStyle: Er } = Q(Yu.keys), di = A("tag-bg"), ui = A("tag-color"), gn = A("tag-shadow"), xa = A("tag-min-height"), wa = A("tag-min-width"), ka = A("tag-font-size"), Ea = A("tag-padding-inline"), np = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [ui.variable]: oe.color.reference,
  [di.variable]: oe.bg.reference,
  [gn.variable]: oe.shadow.reference,
  color: ui.reference,
  bg: di.reference,
  boxShadow: gn.reference,
  borderRadius: "md",
  minH: xa.reference,
  minW: wa.reference,
  fontSize: ka.reference,
  px: Ea.reference,
  _focusVisible: {
    [gn.variable]: "shadows.outline"
  }
}, op = {
  lineHeight: 1.2,
  overflow: "visible"
}, ip = {
  fontSize: "lg",
  w: "5",
  h: "5",
  transitionProperty: "common",
  transitionDuration: "normal",
  borderRadius: "full",
  marginStart: "1.5",
  marginEnd: "-1",
  opacity: 0.5,
  _disabled: {
    opacity: 0.4
  },
  _focusVisible: {
    boxShadow: "outline",
    bg: "rgba(0, 0, 0, 0.14)"
  },
  _hover: {
    opacity: 0.8
  },
  _active: {
    opacity: 1
  }
}, sp = Er({
  container: np,
  label: op,
  closeButton: ip
}), lp = {
  sm: Er({
    container: {
      [xa.variable]: "sizes.5",
      [wa.variable]: "sizes.5",
      [ka.variable]: "fontSizes.xs",
      [Ea.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Er({
    container: {
      [xa.variable]: "sizes.6",
      [wa.variable]: "sizes.6",
      [ka.variable]: "fontSizes.sm",
      [Ea.variable]: "space.2"
    }
  }),
  lg: Er({
    container: {
      [xa.variable]: "sizes.8",
      [wa.variable]: "sizes.8",
      [ka.variable]: "fontSizes.md",
      [Ea.variable]: "space.3"
    }
  })
}, cp = {
  subtle: Er((e) => {
    var r;
    return {
      container: (r = At.variants) == null ? void 0 : r.subtle(e)
    };
  }),
  solid: Er((e) => {
    var r;
    return {
      container: (r = At.variants) == null ? void 0 : r.solid(e)
    };
  }),
  outline: Er((e) => {
    var r;
    return {
      container: (r = At.variants) == null ? void 0 : r.outline(e)
    };
  })
}, dp = ap({
  variants: cp,
  baseStyle: sp,
  sizes: lp,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Qe, defineMultiStyleConfig: up } = Q(zu.keys), Hr = A("input-height"), Yr = A("input-font-size"), Ur = A("input-padding"), Gr = A("input-border-radius"), fp = Qe({
  addon: {
    height: Hr.reference,
    fontSize: Yr.reference,
    px: Ur.reference,
    borderRadius: Gr.reference
  },
  field: {
    width: "100%",
    height: Hr.reference,
    fontSize: Yr.reference,
    px: Ur.reference,
    borderRadius: Gr.reference,
    minWidth: 0,
    outline: 0,
    position: "relative",
    appearance: "none",
    transitionProperty: "common",
    transitionDuration: "normal",
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    }
  }
}), lr = {
  lg: {
    [Yr.variable]: "fontSizes.lg",
    [Ur.variable]: "space.4",
    [Gr.variable]: "radii.md",
    [Hr.variable]: "sizes.12"
  },
  md: {
    [Yr.variable]: "fontSizes.md",
    [Ur.variable]: "space.4",
    [Gr.variable]: "radii.md",
    [Hr.variable]: "sizes.10"
  },
  sm: {
    [Yr.variable]: "fontSizes.sm",
    [Ur.variable]: "space.3",
    [Gr.variable]: "radii.sm",
    [Hr.variable]: "sizes.8"
  },
  xs: {
    [Yr.variable]: "fontSizes.xs",
    [Ur.variable]: "space.2",
    [Gr.variable]: "radii.sm",
    [Hr.variable]: "sizes.6"
  }
}, pp = {
  lg: Qe({
    field: lr.lg,
    group: lr.lg
  }),
  md: Qe({
    field: lr.md,
    group: lr.md
  }),
  sm: Qe({
    field: lr.sm,
    group: lr.sm
  }),
  xs: Qe({
    field: lr.xs,
    group: lr.xs
  })
};
function ho(e) {
  const { focusBorderColor: r, errorBorderColor: t } = e;
  return {
    focusBorderColor: r || R("blue.500", "blue.300")(e),
    errorBorderColor: t || R("red.500", "red.300")(e)
  };
}
var bp = Qe((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = ho(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: R("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ge(r, a),
        boxShadow: `0 0 0 1px ${ge(r, a)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: ge(r, t),
        boxShadow: `0 0 0 1px ${ge(r, t)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: R("inherit", "whiteAlpha.50")(e),
      bg: R("gray.100", "whiteAlpha.300")(e)
    }
  };
}), hp = Qe((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = ho(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: R("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: R("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ge(r, a)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: ge(r, t)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: R("gray.100", "whiteAlpha.50")(e)
    }
  };
}), mp = Qe((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = ho(e);
  return {
    field: {
      borderBottom: "1px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent",
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ge(r, a),
        boxShadow: `0px 1px 0px 0px ${ge(r, a)}`
      },
      _focusVisible: {
        borderColor: ge(r, t),
        boxShadow: `0px 1px 0px 0px ${ge(r, t)}`
      }
    },
    addon: {
      borderBottom: "2px solid",
      borderColor: "inherit",
      borderRadius: "0",
      px: "0",
      bg: "transparent"
    }
  };
}), vp = Qe({
  field: {
    bg: "transparent",
    px: "0",
    height: "auto"
  },
  addon: {
    bg: "transparent",
    px: "0",
    height: "auto"
  }
}), gp = {
  outline: bp,
  filled: hp,
  flushed: mp,
  unstyled: vp
}, H = up({
  baseStyle: fp,
  sizes: pp,
  variants: gp,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), fi, yp = {
  ...(fi = H.baseStyle) == null ? void 0 : fi.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, pi, bi, Sp = {
  outline: (e) => {
    var r, t;
    return (t = (r = H.variants) == null ? void 0 : r.outline(e).field) != null ? t : {};
  },
  flushed: (e) => {
    var r, t;
    return (t = (r = H.variants) == null ? void 0 : r.flushed(e).field) != null ? t : {};
  },
  filled: (e) => {
    var r, t;
    return (t = (r = H.variants) == null ? void 0 : r.filled(e).field) != null ? t : {};
  },
  unstyled: (bi = (pi = H.variants) == null ? void 0 : pi.unstyled.field) != null ? bi : {}
}, hi, mi, gi, yi, Si, _i, xi, wi, _p = {
  xs: (mi = (hi = H.sizes) == null ? void 0 : hi.xs.field) != null ? mi : {},
  sm: (yi = (gi = H.sizes) == null ? void 0 : gi.sm.field) != null ? yi : {},
  md: (_i = (Si = H.sizes) == null ? void 0 : Si.md.field) != null ? _i : {},
  lg: (wi = (xi = H.sizes) == null ? void 0 : xi.lg.field) != null ? wi : {}
}, xp = {
  baseStyle: yp,
  sizes: _p,
  variants: Sp,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, ua = se("tooltip-bg"), yn = se("tooltip-fg"), wp = se("popper-arrow-bg"), kp = {
  bg: ua.reference,
  color: yn.reference,
  [ua.variable]: "colors.gray.700",
  [yn.variable]: "colors.whiteAlpha.900",
  _dark: {
    [ua.variable]: "colors.gray.300",
    [yn.variable]: "colors.gray.900"
  },
  [wp.variable]: ua.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, Ep = {
  baseStyle: kp
}, { defineMultiStyleConfig: $p, definePartsStyle: $t } = Q(ju.keys), Cp = (e) => {
  const { colorScheme: r, theme: t, isIndeterminate: a, hasStripe: n } = e, i = R(
    oi(),
    oi("1rem", "rgba(0,0,0,0.1)")
  )(e), l = R(`${r}.500`, `${r}.200`)(e), u = `linear-gradient(
    to right,
    transparent 0%,
    ${ge(t, l)} 50%,
    transparent 100%
  )`;
  return {
    ...!a && n && i,
    ...a ? { bgImage: u } : { bgColor: l }
  };
}, Tp = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, Rp = (e) => ({
  bg: R("gray.100", "whiteAlpha.300")(e)
}), Ap = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Cp(e)
}), zp = $t((e) => ({
  label: Tp,
  filledTrack: Ap(e),
  track: Rp(e)
})), Pp = {
  xs: $t({
    track: { h: "1" }
  }),
  sm: $t({
    track: { h: "2" }
  }),
  md: $t({
    track: { h: "3" }
  }),
  lg: $t({
    track: { h: "4" }
  })
}, Op = $p({
  sizes: Pp,
  baseStyle: zp,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Fp = (e) => typeof e == "function";
function ye(e, ...r) {
  return Fp(e) ? e(...r) : e;
}
var { definePartsStyle: $a, defineMultiStyleConfig: Dp } = Q($u.keys), zt = A("checkbox-size"), Bp = (e) => {
  const { colorScheme: r } = e;
  return {
    w: zt.reference,
    h: zt.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: R(`${r}.500`, `${r}.200`)(e),
      borderColor: R(`${r}.500`, `${r}.200`)(e),
      color: R("white", "gray.900")(e),
      _hover: {
        bg: R(`${r}.600`, `${r}.300`)(e),
        borderColor: R(`${r}.600`, `${r}.300`)(e)
      },
      _disabled: {
        borderColor: R("gray.200", "transparent")(e),
        bg: R("gray.200", "whiteAlpha.300")(e),
        color: R("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: R(`${r}.500`, `${r}.200`)(e),
      borderColor: R(`${r}.500`, `${r}.200`)(e),
      color: R("white", "gray.900")(e)
    },
    _disabled: {
      bg: R("gray.100", "whiteAlpha.100")(e),
      borderColor: R("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: R("red.500", "red.300")(e)
    }
  };
}, jp = {
  _disabled: { cursor: "not-allowed" }
}, Ip = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, Mp = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Np = $a((e) => ({
  icon: Mp,
  container: jp,
  control: ye(Bp, e),
  label: Ip
})), Lp = {
  sm: $a({
    control: { [zt.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: $a({
    control: { [zt.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: $a({
    control: { [zt.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, ja = Dp({
  baseStyle: Np,
  sizes: Lp,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Wp, definePartsStyle: Ca } = Q(Iu.keys), Vp = (e) => {
  var r;
  const t = (r = ye(ja.baseStyle, e)) == null ? void 0 : r.control;
  return {
    ...t,
    borderRadius: "full",
    _checked: {
      ...t == null ? void 0 : t._checked,
      _before: {
        content: '""',
        display: "inline-block",
        pos: "relative",
        w: "50%",
        h: "50%",
        borderRadius: "50%",
        bg: "currentColor"
      }
    }
  };
}, Hp = Ca((e) => {
  var r, t, a, n;
  return {
    label: (t = (r = ja).baseStyle) == null ? void 0 : t.call(r, e).label,
    container: (n = (a = ja).baseStyle) == null ? void 0 : n.call(a, e).container,
    control: Vp(e)
  };
}), Yp = {
  md: Ca({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Ca({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Ca({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, Up = Wp({
  baseStyle: Hp,
  sizes: Yp,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Gp, definePartsStyle: qp } = Q(Mu.keys), fa = A("select-bg"), ki, Xp = {
  ...(ki = H.baseStyle) == null ? void 0 : ki.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: fa.reference,
  [fa.variable]: "colors.white",
  _dark: {
    [fa.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: fa.reference
  }
}, Kp = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, Jp = qp({
  field: Xp,
  icon: Kp
}), pa = {
  paddingInlineEnd: "8"
}, Ei, $i, Ci, Ti, Ri, Ai, zi, Pi, Qp = {
  lg: {
    ...(Ei = H.sizes) == null ? void 0 : Ei.lg,
    field: {
      ...($i = H.sizes) == null ? void 0 : $i.lg.field,
      ...pa
    }
  },
  md: {
    ...(Ci = H.sizes) == null ? void 0 : Ci.md,
    field: {
      ...(Ti = H.sizes) == null ? void 0 : Ti.md.field,
      ...pa
    }
  },
  sm: {
    ...(Ri = H.sizes) == null ? void 0 : Ri.sm,
    field: {
      ...(Ai = H.sizes) == null ? void 0 : Ai.sm.field,
      ...pa
    }
  },
  xs: {
    ...(zi = H.sizes) == null ? void 0 : zi.xs,
    field: {
      ...(Pi = H.sizes) == null ? void 0 : Pi.xs.field,
      ...pa
    },
    icon: {
      insetEnd: "1"
    }
  }
}, Zp = Gp({
  baseStyle: Jp,
  sizes: Qp,
  variants: H.variants,
  defaultProps: H.defaultProps
}), Sn = A("skeleton-start-color"), _n = A("skeleton-end-color"), eb = {
  [Sn.variable]: "colors.gray.100",
  [_n.variable]: "colors.gray.400",
  _dark: {
    [Sn.variable]: "colors.gray.800",
    [_n.variable]: "colors.gray.600"
  },
  background: Sn.reference,
  borderColor: _n.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, rb = {
  baseStyle: eb
}, xn = A("skip-link-bg"), tb = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [xn.variable]: "colors.white",
    _dark: {
      [xn.variable]: "colors.gray.700"
    },
    bg: xn.reference
  }
}, ab = {
  baseStyle: tb
}, { defineMultiStyleConfig: nb, definePartsStyle: Xa } = Q(Nu.keys), Lt = A("slider-thumb-size"), Wt = A("slider-track-size"), dr = A("slider-bg"), ob = (e) => {
  const { orientation: r } = e;
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: 0.6,
      cursor: "default",
      pointerEvents: "none"
    },
    ...bo({
      orientation: r,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, ib = (e) => ({
  ...bo({
    orientation: e.orientation,
    horizontal: { h: Wt.reference },
    vertical: { w: Wt.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [dr.variable]: "colors.gray.200",
  _dark: {
    [dr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [dr.variable]: "colors.gray.300",
    _dark: {
      [dr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: dr.reference
}), sb = (e) => {
  const { orientation: r } = e;
  return {
    ...bo({
      orientation: r,
      vertical: {
        left: "50%",
        transform: "translateX(-50%)",
        _active: {
          transform: "translateX(-50%) scale(1.15)"
        }
      },
      horizontal: {
        top: "50%",
        transform: "translateY(-50%)",
        _active: {
          transform: "translateY(-50%) scale(1.15)"
        }
      }
    }),
    w: Lt.reference,
    h: Lt.reference,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    bg: "white",
    boxShadow: "base",
    border: "1px solid",
    borderColor: "transparent",
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      bg: "gray.300"
    }
  };
}, lb = (e) => {
  const { colorScheme: r } = e;
  return {
    width: "inherit",
    height: "inherit",
    [dr.variable]: `colors.${r}.500`,
    _dark: {
      [dr.variable]: `colors.${r}.200`
    },
    bg: dr.reference
  };
}, cb = Xa((e) => ({
  container: ob(e),
  track: ib(e),
  thumb: sb(e),
  filledTrack: lb(e)
})), db = Xa({
  container: {
    [Lt.variable]: "sizes.4",
    [Wt.variable]: "sizes.1"
  }
}), ub = Xa({
  container: {
    [Lt.variable]: "sizes.3.5",
    [Wt.variable]: "sizes.1"
  }
}), fb = Xa({
  container: {
    [Lt.variable]: "sizes.2.5",
    [Wt.variable]: "sizes.0.5"
  }
}), pb = {
  lg: db,
  md: ub,
  sm: fb
}, bb = nb({
  baseStyle: cb,
  sizes: pb,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Sr = se("spinner-size"), hb = {
  width: [Sr.reference],
  height: [Sr.reference]
}, mb = {
  xs: {
    [Sr.variable]: "sizes.3"
  },
  sm: {
    [Sr.variable]: "sizes.4"
  },
  md: {
    [Sr.variable]: "sizes.6"
  },
  lg: {
    [Sr.variable]: "sizes.8"
  },
  xl: {
    [Sr.variable]: "sizes.12"
  }
}, vb = {
  baseStyle: hb,
  sizes: mb,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: gb, definePartsStyle: Ss } = Q(Lu.keys), yb = {
  fontWeight: "medium"
}, Sb = {
  opacity: 0.8,
  marginBottom: "2"
}, _b = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, xb = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, wb = Ss({
  container: {},
  label: yb,
  helpText: Sb,
  number: _b,
  icon: xb
}), kb = {
  md: Ss({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, Eb = gb({
  baseStyle: wb,
  sizes: kb,
  defaultProps: {
    size: "md"
  }
}), wn = A("kbd-bg"), $b = {
  [wn.variable]: "colors.gray.100",
  _dark: {
    [wn.variable]: "colors.whiteAlpha.100"
  },
  bg: wn.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, Cb = {
  baseStyle: $b
}, Tb = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  cursor: "pointer",
  textDecoration: "none",
  outline: "none",
  color: "inherit",
  _hover: {
    textDecoration: "underline"
  },
  _focusVisible: {
    boxShadow: "outline"
  }
}, Rb = {
  baseStyle: Tb
}, { defineMultiStyleConfig: Ab, definePartsStyle: zb } = Q(Pu.keys), Pb = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, Ob = zb({
  icon: Pb
}), Fb = Ab({
  baseStyle: Ob
}), { defineMultiStyleConfig: Db, definePartsStyle: Bb } = Q(Ou.keys), We = A("menu-bg"), kn = A("menu-shadow"), jb = {
  [We.variable]: "#fff",
  [kn.variable]: "shadows.sm",
  _dark: {
    [We.variable]: "colors.gray.700",
    [kn.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: We.reference,
  boxShadow: kn.reference
}, Ib = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [We.variable]: "colors.gray.100",
    _dark: {
      [We.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [We.variable]: "colors.gray.200",
    _dark: {
      [We.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [We.variable]: "colors.gray.100",
    _dark: {
      [We.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: We.reference
}, Mb = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, Nb = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, Lb = {
  opacity: 0.6
}, Wb = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, Vb = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, Hb = Bb({
  button: Vb,
  list: jb,
  item: Ib,
  groupTitle: Mb,
  icon: Nb,
  command: Lb,
  divider: Wb
}), Yb = Db({
  baseStyle: Hb
}), { defineMultiStyleConfig: Ub, definePartsStyle: Kn } = Q(Fu.keys), En = A("modal-bg"), $n = A("modal-shadow"), Gb = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, qb = (e) => {
  const { isCentered: r, scrollBehavior: t } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: r ? "center" : "flex-start",
    overflow: t === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, Xb = (e) => {
  const { isCentered: r, scrollBehavior: t } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: r ? "auto" : "16",
    mx: r ? "auto" : void 0,
    zIndex: "modal",
    maxH: t === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [En.variable]: "colors.white",
    [$n.variable]: "shadows.lg",
    _dark: {
      [En.variable]: "colors.gray.700",
      [$n.variable]: "shadows.dark-lg"
    },
    bg: En.reference,
    boxShadow: $n.reference
  };
}, Kb = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Jb = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Qb = (e) => {
  const { scrollBehavior: r } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: r === "inside" ? "auto" : void 0
  };
}, Zb = {
  px: "6",
  py: "4"
}, eh = Kn((e) => ({
  overlay: Gb,
  dialogContainer: ye(qb, e),
  dialog: ye(Xb, e),
  header: Kb,
  closeButton: Jb,
  body: ye(Qb, e),
  footer: Zb
}));
function Be(e) {
  return Kn(e === "full" ? {
    dialog: {
      maxW: "100vw",
      minH: "$100vh",
      my: "0",
      borderRadius: "0"
    }
  } : {
    dialog: { maxW: e }
  });
}
var rh = {
  xs: Be("xs"),
  sm: Be("sm"),
  md: Be("md"),
  lg: Be("lg"),
  xl: Be("xl"),
  "2xl": Be("2xl"),
  "3xl": Be("3xl"),
  "4xl": Be("4xl"),
  "5xl": Be("5xl"),
  "6xl": Be("6xl"),
  full: Be("full")
}, th = Ub({
  baseStyle: eh,
  sizes: rh,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: ah, definePartsStyle: _s } = Q(Du.keys), mo = se("number-input-stepper-width"), xs = se("number-input-input-padding"), nh = Je(mo).add("0.5rem").toString(), Cn = se("number-input-bg"), Tn = se("number-input-color"), Rn = se("number-input-border-color"), oh = {
  [mo.variable]: "sizes.6",
  [xs.variable]: nh
}, ih = (e) => {
  var r, t;
  return (t = (r = ye(H.baseStyle, e)) == null ? void 0 : r.field) != null ? t : {};
}, sh = {
  width: mo.reference
}, lh = {
  borderStart: "1px solid",
  borderStartColor: Rn.reference,
  color: Tn.reference,
  bg: Cn.reference,
  [Tn.variable]: "colors.chakra-body-text",
  [Rn.variable]: "colors.chakra-border-color",
  _dark: {
    [Tn.variable]: "colors.whiteAlpha.800",
    [Rn.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [Cn.variable]: "colors.gray.200",
    _dark: {
      [Cn.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, ch = _s((e) => {
  var r;
  return {
    root: oh,
    field: (r = ye(ih, e)) != null ? r : {},
    stepperGroup: sh,
    stepper: lh
  };
});
function ba(e) {
  var r, t, a;
  const n = (r = H.sizes) == null ? void 0 : r[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, l = (a = (t = n.field) == null ? void 0 : t.fontSize) != null ? a : "md", u = hs.fontSizes[l];
  return _s({
    field: {
      ...n.field,
      paddingInlineEnd: xs.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: Je(u).multiply(0.75).toString(),
      _first: {
        borderTopEndRadius: i[e]
      },
      _last: {
        borderBottomEndRadius: i[e],
        mt: "-1px",
        borderTopWidth: 1
      }
    }
  });
}
var dh = {
  xs: ba("xs"),
  sm: ba("sm"),
  md: ba("md"),
  lg: ba("lg")
}, uh = ah({
  baseStyle: ch,
  sizes: dh,
  variants: H.variants,
  defaultProps: H.defaultProps
}), Oi, fh = {
  ...(Oi = H.baseStyle) == null ? void 0 : Oi.field,
  textAlign: "center"
}, ph = {
  lg: {
    fontSize: "lg",
    w: 12,
    h: 12,
    borderRadius: "md"
  },
  md: {
    fontSize: "md",
    w: 10,
    h: 10,
    borderRadius: "md"
  },
  sm: {
    fontSize: "sm",
    w: 8,
    h: 8,
    borderRadius: "sm"
  },
  xs: {
    fontSize: "xs",
    w: 6,
    h: 6,
    borderRadius: "sm"
  }
}, Fi, Di, bh = {
  outline: (e) => {
    var r, t, a;
    return (a = (t = ye((r = H.variants) == null ? void 0 : r.outline, e)) == null ? void 0 : t.field) != null ? a : {};
  },
  flushed: (e) => {
    var r, t, a;
    return (a = (t = ye((r = H.variants) == null ? void 0 : r.flushed, e)) == null ? void 0 : t.field) != null ? a : {};
  },
  filled: (e) => {
    var r, t, a;
    return (a = (t = ye((r = H.variants) == null ? void 0 : r.filled, e)) == null ? void 0 : t.field) != null ? a : {};
  },
  unstyled: (Di = (Fi = H.variants) == null ? void 0 : Fi.unstyled.field) != null ? Di : {}
}, hh = {
  baseStyle: fh,
  sizes: ph,
  variants: bh,
  defaultProps: H.defaultProps
}, { defineMultiStyleConfig: mh, definePartsStyle: vh } = Q(Bu.keys), ha = se("popper-bg"), gh = se("popper-arrow-bg"), Bi = se("popper-arrow-shadow-color"), yh = { zIndex: 10 }, Sh = {
  [ha.variable]: "colors.white",
  bg: ha.reference,
  [gh.variable]: ha.reference,
  [Bi.variable]: "colors.gray.200",
  _dark: {
    [ha.variable]: "colors.gray.700",
    [Bi.variable]: "colors.whiteAlpha.300"
  },
  width: "xs",
  border: "1px solid",
  borderColor: "inherit",
  borderRadius: "md",
  boxShadow: "sm",
  zIndex: "inherit",
  _focusVisible: {
    outline: 0,
    boxShadow: "outline"
  }
}, _h = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, xh = {
  px: 3,
  py: 2
}, wh = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, kh = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, Eh = vh({
  popper: yh,
  content: Sh,
  header: _h,
  body: xh,
  footer: wh,
  closeButton: kh
}), $h = mh({
  baseStyle: Eh
}), { definePartsStyle: Jn, defineMultiStyleConfig: Ch } = Q(Cu.keys), An = A("drawer-bg"), zn = A("drawer-box-shadow");
function Nr(e) {
  return Jn(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var Th = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Rh = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, Ah = (e) => {
  const { isFullHeight: r } = e;
  return {
    ...r && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [An.variable]: "colors.white",
    [zn.variable]: "shadows.lg",
    _dark: {
      [An.variable]: "colors.gray.700",
      [zn.variable]: "shadows.dark-lg"
    },
    bg: An.reference,
    boxShadow: zn.reference
  };
}, zh = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Ph = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Oh = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, Fh = {
  px: "6",
  py: "4"
}, Dh = Jn((e) => ({
  overlay: Th,
  dialogContainer: Rh,
  dialog: ye(Ah, e),
  header: zh,
  closeButton: Ph,
  body: Oh,
  footer: Fh
})), Bh = {
  xs: Nr("xs"),
  sm: Nr("md"),
  md: Nr("lg"),
  lg: Nr("2xl"),
  xl: Nr("4xl"),
  full: Nr("full")
}, jh = Ch({
  baseStyle: Dh,
  sizes: Bh,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: Ih, defineMultiStyleConfig: Mh } = Q(Tu.keys), Nh = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, Lh = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Wh = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Vh = Ih({
  preview: Nh,
  input: Lh,
  textarea: Wh
}), Hh = Mh({
  baseStyle: Vh
}), { definePartsStyle: Yh, defineMultiStyleConfig: Uh } = Q(Ru.keys), Jr = A("form-control-color"), Gh = {
  marginStart: "1",
  [Jr.variable]: "colors.red.500",
  _dark: {
    [Jr.variable]: "colors.red.300"
  },
  color: Jr.reference
}, qh = {
  mt: "2",
  [Jr.variable]: "colors.gray.600",
  _dark: {
    [Jr.variable]: "colors.whiteAlpha.600"
  },
  color: Jr.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, Xh = Yh({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: Gh,
  helperText: qh
}), Kh = Uh({
  baseStyle: Xh
}), { definePartsStyle: Jh, defineMultiStyleConfig: Qh } = Q(Au.keys), Qr = A("form-error-color"), Zh = {
  [Qr.variable]: "colors.red.500",
  _dark: {
    [Qr.variable]: "colors.red.300"
  },
  color: Qr.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, em = {
  marginEnd: "0.5em",
  [Qr.variable]: "colors.red.500",
  _dark: {
    [Qr.variable]: "colors.red.300"
  },
  color: Qr.reference
}, rm = Jh({
  text: Zh,
  icon: em
}), tm = Qh({
  baseStyle: rm
}), am = {
  fontSize: "md",
  marginEnd: "3",
  mb: "2",
  fontWeight: "medium",
  transitionProperty: "common",
  transitionDuration: "normal",
  opacity: 1,
  _disabled: {
    opacity: 0.4
  }
}, nm = {
  baseStyle: am
}, om = {
  fontFamily: "heading",
  fontWeight: "bold"
}, im = {
  "4xl": {
    fontSize: ["6xl", null, "7xl"],
    lineHeight: 1
  },
  "3xl": {
    fontSize: ["5xl", null, "6xl"],
    lineHeight: 1
  },
  "2xl": {
    fontSize: ["4xl", null, "5xl"],
    lineHeight: [1.2, null, 1]
  },
  xl: {
    fontSize: ["3xl", null, "4xl"],
    lineHeight: [1.33, null, 1.2]
  },
  lg: {
    fontSize: ["2xl", null, "3xl"],
    lineHeight: [1.33, null, 1.2]
  },
  md: {
    fontSize: "xl",
    lineHeight: 1.2
  },
  sm: {
    fontSize: "md",
    lineHeight: 1.2
  },
  xs: {
    fontSize: "sm",
    lineHeight: 1.2
  }
}, sm = {
  baseStyle: om,
  sizes: im,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: lm, definePartsStyle: cm } = Q(Eu.keys), Pn = A("breadcrumb-link-decor"), dm = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Pn.reference,
  [Pn.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Pn.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, um = cm({
  link: dm
}), fm = lm({
  baseStyle: um
}), pm = {
  lineHeight: "1.2",
  borderRadius: "md",
  fontWeight: "semibold",
  transitionProperty: "common",
  transitionDuration: "normal",
  _focusVisible: {
    boxShadow: "outline"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    _disabled: {
      bg: "initial"
    }
  }
}, ws = (e) => {
  const { colorScheme: r, theme: t } = e;
  if (r === "gray")
    return {
      color: R("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: R("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: R("gray.200", "whiteAlpha.300")(e) }
    };
  const a = tt(`${r}.200`, 0.12)(t), n = tt(`${r}.200`, 0.24)(t);
  return {
    color: R(`${r}.600`, `${r}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: R(`${r}.50`, a)(e)
    },
    _active: {
      bg: R(`${r}.100`, n)(e)
    }
  };
}, bm = (e) => {
  const { colorScheme: r } = e, t = R("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: r === "gray" ? t : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...ye(ws, e)
  };
}, hm = {
  yellow: {
    bg: "yellow.400",
    color: "black",
    hoverBg: "yellow.500",
    activeBg: "yellow.600"
  },
  cyan: {
    bg: "cyan.400",
    color: "black",
    hoverBg: "cyan.500",
    activeBg: "cyan.600"
  }
}, mm = (e) => {
  var r;
  const { colorScheme: t } = e;
  if (t === "gray") {
    const p = R("gray.100", "whiteAlpha.200")(e);
    return {
      bg: p,
      color: R("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: R("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: p
        }
      },
      _active: { bg: R("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: a = `${t}.500`,
    color: n = "white",
    hoverBg: i = `${t}.600`,
    activeBg: l = `${t}.700`
  } = (r = hm[t]) != null ? r : {}, u = R(a, `${t}.200`)(e);
  return {
    bg: u,
    color: R(n, "gray.800")(e),
    _hover: {
      bg: R(i, `${t}.300`)(e),
      _disabled: {
        bg: u
      }
    },
    _active: { bg: R(l, `${t}.400`)(e) }
  };
}, vm = (e) => {
  const { colorScheme: r } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: R(`${r}.500`, `${r}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: R(`${r}.700`, `${r}.500`)(e)
    }
  };
}, gm = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, ym = {
  ghost: ws,
  outline: bm,
  solid: mm,
  link: vm,
  unstyled: gm
}, Sm = {
  lg: {
    h: "12",
    minW: "12",
    fontSize: "lg",
    px: "6"
  },
  md: {
    h: "10",
    minW: "10",
    fontSize: "md",
    px: "4"
  },
  sm: {
    h: "8",
    minW: "8",
    fontSize: "sm",
    px: "3"
  },
  xs: {
    h: "6",
    minW: "6",
    fontSize: "xs",
    px: "2"
  }
}, _m = {
  baseStyle: pm,
  variants: ym,
  sizes: Sm,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: $r, defineMultiStyleConfig: xm } = Q(Uu.keys), Ia = A("card-bg"), Ze = A("card-padding"), ks = A("card-shadow"), Ta = A("card-radius"), Es = A("card-border-width", "0"), $s = A("card-border-color"), wm = $r({
  container: {
    [Ia.variable]: "colors.chakra-body-bg",
    backgroundColor: Ia.reference,
    boxShadow: ks.reference,
    borderRadius: Ta.reference,
    color: "chakra-body-text",
    borderWidth: Es.reference,
    borderColor: $s.reference
  },
  body: {
    padding: Ze.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Ze.reference
  },
  footer: {
    padding: Ze.reference
  }
}), km = {
  sm: $r({
    container: {
      [Ta.variable]: "radii.base",
      [Ze.variable]: "space.3"
    }
  }),
  md: $r({
    container: {
      [Ta.variable]: "radii.md",
      [Ze.variable]: "space.5"
    }
  }),
  lg: $r({
    container: {
      [Ta.variable]: "radii.xl",
      [Ze.variable]: "space.7"
    }
  })
}, Em = {
  elevated: $r({
    container: {
      [ks.variable]: "shadows.base",
      _dark: {
        [Ia.variable]: "colors.gray.700"
      }
    }
  }),
  outline: $r({
    container: {
      [Es.variable]: "1px",
      [$s.variable]: "colors.chakra-border-color"
    }
  }),
  filled: $r({
    container: {
      [Ia.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Ze.variable]: 0
    },
    header: {
      [Ze.variable]: 0
    },
    footer: {
      [Ze.variable]: 0
    }
  }
}, $m = xm({
  baseStyle: wm,
  variants: Em,
  sizes: km,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Pt = se("close-button-size"), _t = se("close-button-bg"), Cm = {
  w: [Pt.reference],
  h: [Pt.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [_t.variable]: "colors.blackAlpha.100",
    _dark: {
      [_t.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [_t.variable]: "colors.blackAlpha.200",
    _dark: {
      [_t.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: _t.reference
}, Tm = {
  lg: {
    [Pt.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [Pt.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [Pt.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, Rm = {
  baseStyle: Cm,
  sizes: Tm,
  defaultProps: {
    size: "md"
  }
}, { variants: Am, defaultProps: zm } = At, Pm = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: oe.bg.reference,
  color: oe.color.reference,
  boxShadow: oe.shadow.reference
}, Om = {
  baseStyle: Pm,
  variants: Am,
  defaultProps: zm
}, Fm = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, Dm = {
  baseStyle: Fm
}, Bm = {
  opacity: 0.6,
  borderColor: "inherit"
}, jm = {
  borderStyle: "solid"
}, Im = {
  borderStyle: "dashed"
}, Mm = {
  solid: jm,
  dashed: Im
}, Nm = {
  baseStyle: Bm,
  variants: Mm,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: Lm, defineMultiStyleConfig: Wm } = Q(xu.keys), Vm = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, Hm = {
  transitionProperty: "common",
  transitionDuration: "normal",
  fontSize: "md",
  _focusVisible: {
    boxShadow: "outline"
  },
  _hover: {
    bg: "blackAlpha.50"
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  px: "4",
  py: "2"
}, Ym = {
  pt: "2",
  px: "4",
  pb: "5"
}, Um = {
  fontSize: "1.25em"
}, Gm = Lm({
  container: Vm,
  button: Hm,
  panel: Ym,
  icon: Um
}), qm = Wm({ baseStyle: Gm }), { definePartsStyle: qt, defineMultiStyleConfig: Xm } = Q(wu.keys), $e = A("alert-fg"), er = A("alert-bg"), Km = qt({
  container: {
    bg: er.reference,
    px: "4",
    py: "3"
  },
  title: {
    fontWeight: "bold",
    lineHeight: "6",
    marginEnd: "2"
  },
  description: {
    lineHeight: "6"
  },
  icon: {
    color: $e.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: $e.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function vo(e) {
  const { theme: r, colorScheme: t } = e, a = tt(`${t}.200`, 0.16)(r);
  return {
    light: `colors.${t}.100`,
    dark: a
  };
}
var Jm = qt((e) => {
  const { colorScheme: r } = e, t = vo(e);
  return {
    container: {
      [$e.variable]: `colors.${r}.600`,
      [er.variable]: t.light,
      _dark: {
        [$e.variable]: `colors.${r}.200`,
        [er.variable]: t.dark
      }
    }
  };
}), Qm = qt((e) => {
  const { colorScheme: r } = e, t = vo(e);
  return {
    container: {
      [$e.variable]: `colors.${r}.600`,
      [er.variable]: t.light,
      _dark: {
        [$e.variable]: `colors.${r}.200`,
        [er.variable]: t.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: $e.reference
    }
  };
}), Zm = qt((e) => {
  const { colorScheme: r } = e, t = vo(e);
  return {
    container: {
      [$e.variable]: `colors.${r}.600`,
      [er.variable]: t.light,
      _dark: {
        [$e.variable]: `colors.${r}.200`,
        [er.variable]: t.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: $e.reference
    }
  };
}), ev = qt((e) => {
  const { colorScheme: r } = e;
  return {
    container: {
      [$e.variable]: "colors.white",
      [er.variable]: `colors.${r}.600`,
      _dark: {
        [$e.variable]: "colors.gray.900",
        [er.variable]: `colors.${r}.200`
      },
      color: $e.reference
    }
  };
}), rv = {
  subtle: Jm,
  "left-accent": Qm,
  "top-accent": Zm,
  solid: ev
}, tv = Xm({
  baseStyle: Km,
  variants: rv,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: Cs, defineMultiStyleConfig: av } = Q(ku.keys), Zr = A("avatar-border-color"), Ot = A("avatar-bg"), Vt = A("avatar-font-size"), at = A("avatar-size"), nv = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Zr.reference,
  [Zr.variable]: "white",
  _dark: {
    [Zr.variable]: "colors.gray.800"
  }
}, ov = {
  bg: Ot.reference,
  fontSize: Vt.reference,
  width: at.reference,
  height: at.reference,
  lineHeight: "1",
  [Ot.variable]: "colors.gray.200",
  _dark: {
    [Ot.variable]: "colors.whiteAlpha.400"
  }
}, iv = (e) => {
  const { name: r, theme: t } = e, a = r ? pf({ string: r }) : "colors.gray.400", n = uf(a)(t);
  let i = "white";
  return n || (i = "gray.800"), {
    bg: Ot.reference,
    fontSize: Vt.reference,
    color: i,
    borderColor: Zr.reference,
    verticalAlign: "top",
    width: at.reference,
    height: at.reference,
    "&:not([data-loaded])": {
      [Ot.variable]: a
    },
    [Zr.variable]: "colors.white",
    _dark: {
      [Zr.variable]: "colors.gray.800"
    }
  };
}, sv = {
  fontSize: Vt.reference,
  lineHeight: "1"
}, lv = Cs((e) => ({
  badge: ye(nv, e),
  excessLabel: ye(ov, e),
  container: ye(iv, e),
  label: sv
}));
function cr(e) {
  const r = e !== "100%" ? vs[e] : void 0;
  return Cs({
    container: {
      [at.variable]: r ?? e,
      [Vt.variable]: `calc(${r ?? e} / 2.5)`
    },
    excessLabel: {
      [at.variable]: r ?? e,
      [Vt.variable]: `calc(${r ?? e} / 2.5)`
    }
  });
}
var cv = {
  "2xs": cr(4),
  xs: cr(6),
  sm: cr(8),
  md: cr(12),
  lg: cr(16),
  xl: cr(24),
  "2xl": cr(32),
  full: cr("100%")
}, dv = av({
  baseStyle: lv,
  sizes: cv,
  defaultProps: {
    size: "md"
  }
}), uv = {
  Accordion: qm,
  Alert: tv,
  Avatar: dv,
  Badge: At,
  Breadcrumb: fm,
  Button: _m,
  Checkbox: ja,
  CloseButton: Rm,
  Code: Om,
  Container: Dm,
  Divider: Nm,
  Drawer: jh,
  Editable: Hh,
  Form: Kh,
  FormError: tm,
  FormLabel: nm,
  Heading: sm,
  Input: H,
  Kbd: Cb,
  Link: Rb,
  List: Fb,
  Menu: Yb,
  Modal: th,
  NumberInput: uh,
  PinInput: hh,
  Popover: $h,
  Progress: Op,
  Radio: Up,
  Select: Zp,
  Skeleton: rb,
  SkipLink: ab,
  Slider: bb,
  Spinner: vb,
  Stat: Eb,
  Switch: Rf,
  Table: Bf,
  Tabs: Jf,
  Tag: dp,
  Textarea: xp,
  Tooltip: Ep,
  Card: $m,
  Stepper: _u
}, fv = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, pv = {
  global: {
    body: {
      fontFamily: "body",
      color: "chakra-body-text",
      bg: "chakra-body-bg",
      transitionProperty: "background-color",
      transitionDuration: "normal",
      lineHeight: "base"
    },
    "*::placeholder": {
      color: "chakra-placeholder-color"
    },
    "*, *::before, &::after": {
      borderColor: "chakra-border-color"
    }
  }
}, bv = "ltr", hv = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, mv = {
  semanticTokens: fv,
  direction: bv,
  ...gu,
  components: uv,
  styles: pv,
  config: hv
};
function Ct(e) {
  return typeof e == "function";
}
function vv(...e) {
  return (r) => e.reduce((t, a) => a(t), r);
}
var gv = (e) => function(...t) {
  let a = [...t], n = t[t.length - 1];
  return qd(n) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  a.length > 1 ? a = a.slice(0, a.length - 1) : n = e, vv(
    ...a.map(
      (i) => (l) => Ct(i) ? i(l) : Sv(l, i)
    )
  )(n);
}, yv = gv(mv);
function Sv(...e) {
  return xr({}, ...e, Ts);
}
function Ts(e, r, t, a) {
  if ((Ct(e) || Ct(r)) && Object.prototype.hasOwnProperty.call(a, t))
    return (...n) => {
      const i = Ct(e) ? e(...n) : e, l = Ct(r) ? r(...n) : r;
      return xr({}, i, l, Ts);
    };
}
function Rs(e, r) {
  const t = {};
  return Object.keys(e).forEach((a) => {
    const n = e[a];
    r(n, a, e) && (t[a] = n);
  }), t;
}
var _v = (e) => Rs(e, (r) => r != null);
function xv(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function wv(e, ...r) {
  return xv(e) ? e(...r) : e;
}
var kv = /* @__PURE__ */ new Set([
  ...jd,
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
]), Ev = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function $v(e) {
  return Ev.has(e) || !kv.has(e);
}
function Cv(e, ...r) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const t = { ...e };
  for (const a of r)
    if (a != null)
      for (const n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (n in t && delete t[n], t[n] = a[n]);
  return t;
}
var Tv = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Rv = /* @__PURE__ */ rs(
  function(e) {
    return Tv.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), Av = Rv, zv = function(r) {
  return r !== "theme";
}, ji = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Av : zv;
}, Ii = function(r, t, a) {
  var n;
  if (t) {
    var i = t.shouldForwardProp;
    n = r.__emotion_forwardProp && i ? function(l) {
      return r.__emotion_forwardProp(l) && i(l);
    } : i;
  }
  return typeof n != "function" && a && (n = r.__emotion_forwardProp), n;
}, Mi = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Pv = function(r) {
  var t = r.cache, a = r.serialized, n = r.isStringTag;
  return Ha(t, a, n), so(function() {
    return Ya(t, a, n);
  }), null;
}, Ov = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var a = r.__emotion_real === r, n = a && r.__emotion_base || r, i, l;
  t !== void 0 && (i = t.label, l = t.target);
  var u = Ii(r, t, a), p = u || ji(n), m = !p("as");
  return function() {
    var b = arguments, y = a && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && y.push("label:" + i + ";"), b[0] == null || b[0].raw === void 0)
      y.push.apply(y, b);
    else {
      process.env.NODE_ENV !== "production" && b[0][0] === void 0 && console.error(Mi), y.push(b[0][0]);
      for (var v = b.length, E = 1; E < v; E++)
        process.env.NODE_ENV !== "production" && b[0][E] === void 0 && console.error(Mi), y.push(b[E], b[0][E]);
    }
    var _ = Ua(function(h, x, w) {
      var C = m && h.as || n, P = "", M = [], S = h;
      if (h.theme == null) {
        S = {};
        for (var K in h)
          S[K] = h[K];
        S.theme = ne.useContext(Gt);
      }
      typeof h.className == "string" ? P = oo(x.registered, M, h.className) : h.className != null && (P = h.className + " ");
      var F = rt(y.concat(M), x.registered, S);
      P += x.key + "-" + F.name, l !== void 0 && (P += " " + l);
      var pe = m && u === void 0 ? ji(C) : p, xe = {};
      for (var Ce in h)
        m && Ce === "as" || // $FlowFixMe
        pe(Ce) && (xe[Ce] = h[Ce]);
      return xe.className = P, xe.ref = w, /* @__PURE__ */ ne.createElement(ne.Fragment, null, /* @__PURE__ */ ne.createElement(Pv, {
        cache: x,
        serialized: F,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ ne.createElement(C, xe));
    });
    return _.displayName = i !== void 0 ? i : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", _.defaultProps = r.defaultProps, _.__emotion_real = _, _.__emotion_base = n, _.__emotion_styles = y, _.__emotion_forwardProp = u, Object.defineProperty(_, "toString", {
      value: function() {
        return l === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), _.withComponent = function(h, x) {
      return e(h, Nn({}, t, x, {
        shouldForwardProp: Ii(_, x, !0)
      })).apply(void 0, y);
    }, _;
  };
}, Fv = [
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
], Ma = Ov.bind();
Fv.forEach(function(e) {
  Ma[e] = Ma(e);
});
var Ni, Dv = (Ni = Ma.default) != null ? Ni : Ma, Bv = ({ baseStyle: e }) => (r) => {
  const { theme: t, css: a, __css: n, sx: i, ...l } = r, u = Rs(l, (y, v) => Md(v)), p = wv(e, r), m = Cv(
    {},
    n,
    p,
    _v(u),
    i
  ), b = Ud(m)(r.theme);
  return a ? [b, a] : b;
};
function On(e, r) {
  const { baseStyle: t, ...a } = r ?? {};
  a.shouldForwardProp || (a.shouldForwardProp = $v);
  const n = Bv({ baseStyle: t }), i = Dv(
    e,
    a
  )(n);
  return za.forwardRef(function(p, m) {
    const { colorMode: b, forced: y } = Gc();
    return za.createElement(i, {
      ref: m,
      "data-theme": y ? b : void 0,
      ...p
    });
  });
}
function jv() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(On, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(r, t, a) {
      return On(...a);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(r, t) {
      return e.has(t) || e.set(t, On(t)), e.get(t);
    }
  });
}
var Iv = jv();
function As(e) {
  return Hi(e);
}
var qr = Iv("div");
qr.displayName = "Box";
var zs = As(function(r, t) {
  const { size: a, centerContent: n = !0, ...i } = r, l = n ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ _r.jsx(
    qr,
    {
      ref: t,
      boxSize: a,
      __css: {
        ...l,
        flexShrink: 0,
        flexGrow: 0
      },
      ...i
    }
  );
});
zs.displayName = "Square";
var Mv = As(function(r, t) {
  const { size: a, ...n } = r;
  return /* @__PURE__ */ _r.jsx(zs, { size: a, ref: t, borderRadius: "9999px", ...n });
});
Mv.displayName = "Circle";
const Nv = {
  global: () => ({})
}, Lv = {
  config: {
    initialColorMode: "system",
    useSystemColorMode: !1
  }
}, Ra = {
  xs: "481px",
  sm: "577px",
  md: "768px",
  lg: "962px",
  xl: "1200px",
  "2xl": "1440px"
}, Wv = {
  ...Lv,
  styles: Nv,
  breakpoints: Ra
};
yv(Wv);
const Vv = /(^\{|\}$)/g, p0 = "0px", Hv = "1", b0 = "100%", Qn = "1fr", Fn = "1fr", Ht = "100%", Yt = "100%", h0 = "row", Yv = "flex-start", Uv = "flex-start", m0 = "1fr / 1fr", Ps = 0, v0 = "gray", Aa = 100, Gv = "grid_1", g0 = {
  MAX: 20,
  MIN: 0,
  DEFAULT: 10
}, Os = {
  dark: {
    main: "#282c34",
    gradient: "#2c303a"
  },
  light: {
    main: "#f1f1f1",
    gradient: "#ececec"
  }
}, Fs = {
  mobile: `${Ft(Ra.sm) - 1}px`,
  tablet: `${Ft(Ra.lg) - 1}px`,
  desktop: Ra.lg
}, y0 = {
  MAX: 1e3,
  MIN: 0,
  DEFAULT: Ps
}, qv = {
  direction: Dt.ROW,
  gridGap: Hv,
  repeatCount: Ps,
  className: "",
  margin: "0",
  w: Yt,
  h: Ht,
  alignItems: Uv,
  justifyContent: Yv,
  withOpacity: !1,
  styles: "{}"
}, Xv = {
  margin: "0",
  w: Yt,
  h: Ht,
  r: "0px",
  skeletonW: Aa
}, S0 = {
  [ce.FN]: "",
  [ce.AUTO]: "",
  [ce.PERCENT]: "100",
  [ce.PX]: "100",
  [ce.FR]: "1",
  [ce.REM]: "1",
  [ce.VH]: "100",
  [ce.VW]: "100",
  [ce.PC]: "1",
  [ce.CM]: "1",
  [ce.MM]: "100",
  [ce.IN]: "1",
  [ce.PT]: "1",
  [ce.CH]: "1",
  [ce.EM]: "1",
  [ce.V_MIN]: "100",
  [ce.V_MAX]: "100"
}, Kv = {
  [Bt.SLIDE]: {
    from: { left: "-100%" },
    to: { left: "100%" }
  },
  [Bt.FADE]: {
    from: { opacity: "0" },
    to: { opacity: "1" }
  }
}, Dn = (e, r, t) => r !== "desktop" && r && Object.hasOwn(e, "responsive") ? {
  ...Zn(
    e.responsive[r] ?? {},
    t
  ),
  ...Object.hasOwn(e, "children") && { children: e.children },
  ...Object.hasOwn(e, "skeletons") && {
    skeletons: e.skeletons
  }
} : Zn(e, t), Jv = (e) => {
  var r;
  return ((r = e.replace(/\[|\]/g, "")) == null ? void 0 : r.split(",")) || [];
}, Qv = (e) => !isNaN(parseFloat(String(e))) && isFinite(Number(e)), Li = (e) => (() => {
  let [t, a, n, i] = Jv(e);
  return t && !a && !n && !i ? (a = t, n = t, i = t) : (t || (t = n || "0"), a || (a = i || "0"), n || (n = t || "0"), i || (i = a || "0")), [t, a, n, i].reduce((l, u) => (l += Qv(u) ? u + "px " : u + " ", l), "");
})(), Zv = (e, r) => e.reduce((t, a, n) => {
  if (typeof a.w == "function") {
    const l = a.w();
    t += (Array.isArray(a) ? Qn : l) + " ", r(n, "w", l);
  } else
    t += Array.isArray(a) ? Qn : (a.w === Yt ? "1fr" : a.w) + " ";
  return t;
}, "1fr / "), e0 = (e, r, t) => e.reduce((a, n, i) => {
  if (typeof n.h == "function") {
    const u = n.h();
    a += (r === "center" ? Fn : u) + " ", t(i, "h", u);
  } else
    a += (r === "center" || !n.h || n.h === Ht ? Fn : n.h) + " ";
  return a;
}, "") + " / 1fr", Wi = (e, r, t, a) => e > 0 && a > 0 ? {
  isRepeated: !0,
  key: r + "_repeated_" + a,
  item: t
} : { key: r + "_" + (a + 1), item: t }, Zn = (e, r) => {
  function t(a) {
    return Object.keys(a).reduce(
      (n, i) => {
        const l = i;
        return l in e || (n[l] = a[l]), n;
      },
      { ...e }
    );
  }
  return t(
    r ? Xv : qv
  );
}, Na = (e, r) => r > 0 && e[0] ? [].constructor(r).fill(e[0]) : e, Vi = (e, r, t, a) => (r || t) > 0 && a ? 1 - 1 / (r || t) * e : 1, r0 = ({
  grid: e,
  hasChildren: r,
  skeletons: t,
  children: a,
  repeatCount: n,
  reservedProps: i,
  keyLevel: l
}) => e.direction === Dt.ROW ? Zv(
  (r ? a : Na(t, n)).map(({ w: u = Qn }) => ({ w: u })),
  (u, p, m) => {
    i[`${l}_${u + 1}`] || (i[`${l}_${u + 1}`] = {}), i[`${l}_${u + 1}`][p] = m;
  }
) : e0(
  r ? a : Na(t, n),
  e.alignItems,
  (u, p, m) => {
    i[`${l}_${u + 1}`] || (i[`${l}_${u + 1}`] = {}), i[`${l}_${u + 1}`][p] = m;
  }
), ma = (e) => e.indexOf("fr") > -1 ? "auto" : e, Ft = (e) => Number(e.split("px")[0]), t0 = (e) => {
  const r = e.replace(Vv, "");
  return zl(r);
}, a0 = (e) => {
  const r = {};
  return Object.keys(e).forEach((t) => {
    const a = t.replace(
      /-([a-z])/g,
      (n, i) => i.toUpperCase()
    );
    r[a] = e[t];
  }), r;
}, Ds = Yi({
  colorTheme: { ...Os },
  breakpoints: { ...Fs },
  skeletonAnimation: Bt.SLIDE
}), _0 = ({
  children: e,
  value: {
    isDark: r = !1,
    colorTheme: t = Os,
    breakpoints: a = Fs,
    skeletonAnimation: n = Bt.SLIDE
  }
}) => /* @__PURE__ */ _r.jsx(
  Ds.Provider,
  {
    value: {
      skeletonAnimation: n,
      isDark: r,
      colorTheme: t,
      breakpoints: a
    },
    children: e
  }
);
function n0(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  e && e.addEventListener && e.addEventListener.apply(e, r);
}
function o0(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  e && e.removeEventListener && e.removeEventListener.apply(e, r);
}
var Bn = typeof window < "u", i0 = function(e) {
  Ui(e, []);
}, s0 = function(e) {
  var r = Gi(e);
  r.current = e, i0(function() {
    return function() {
      return r.current();
    };
  });
}, l0 = function(e) {
  var r = Gi(0), t = pl(e), a = t[0], n = t[1], i = qi(function(l) {
    cancelAnimationFrame(r.current), r.current = requestAnimationFrame(function() {
      n(l);
    });
  }, []);
  return s0(function() {
    cancelAnimationFrame(r.current);
  }), [a, i];
}, c0 = function(e, r) {
  e === void 0 && (e = 1 / 0), r === void 0 && (r = 1 / 0);
  var t = l0({
    width: Bn ? window.innerWidth : e,
    height: Bn ? window.innerHeight : r
  }), a = t[0], n = t[1];
  return Ui(function() {
    if (Bn) {
      var i = function() {
        n({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      return n0(window, "resize", i), function() {
        o0(window, "resize", i);
      };
    }
  }, []), a;
};
const d0 = (e) => {
  const { width: r } = c0();
  return r <= Ft(e.mobile) ? "mobile" : r > Ft(e.mobile) && r <= Ft(e.tablet) ? "tablet" : "desktop";
}, u0 = () => {
  const e = eo(Ds);
  if (e === void 0)
    throw Error("You must run this hook inside ReactSkeletonProvider");
  return e;
}, x0 = bl(({ grid: e, styles: r }) => {
  const { colorTheme: t, isDark: a, skeletonAnimation: n, breakpoints: i } = u0(), l = d0(i), u = a ? t[jn.DARK] : t[jn.LIGHT], p = hl(
    () => Mc`
    ${Kv[n]}
    `,
    [n]
  ), m = (v, E, _, h, x) => v.map(
    (w, C) => /* @__PURE__ */ _r.jsx(
      qr,
      {
        "data-key": w.key,
        style: {
          width: x && _ === Dt.ROW ? Yt : ma(
            (typeof w.w == "function" ? w.w() : w.w).toString()
          ),
          height: x && _ === Dt.COLUMN ? Ht : ma(
            (typeof w.h != "function" ? w.h : w.h()).toString()
          ),
          borderRadius: w.r || "0px",
          margin: Li(w.margin || ""),
          backgroundColor: u.main,
          opacity: Vi(
            C,
            E,
            v.length,
            h
          )
        },
        position: "relative",
        overflow: "hidden",
        children: /* @__PURE__ */ _r.jsx(
          qr,
          {
            display: "block",
            left: 0,
            position: "absolute",
            h: "full",
            animation: `${p} infinite 1s linear ${p === "fade" ? "alternate" : ""}`,
            top: 0,
            style: {
              width: `${w.skeletonW || Aa}px`,
              backgroundImage: `linear-gradient(
							90deg,
							${u.main} 0px,
							${u.gradient} ${(Number(w.skeletonW) || Aa) / 2}px,
							${u.main} ${w.skeletonW || Aa}px
						)`
            }
          }
        )
      },
      w.key
    )
  ), b = (v) => {
    try {
      if (v.replace(/\s/g, "") === "{}")
        throw Error("Empty state");
      const E = t0(v);
      if (E)
        return Object.keys(E).forEach((_) => {
          [
            "margin",
            "width",
            "height",
            "gap",
            "align-items",
            "justify-items"
          ].includes(_) && delete E[_];
        }), E;
    } catch {
      return {};
    }
  }, y = qi(
    ({
      grid: v,
      dataKey: E,
      index: _,
      length: h,
      reservedPropsFromParent: x
    }) => {
      var Ue, be;
      const w = E, C = {
        parent: w,
        withOpacity: v.withOpacity
      }, P = [], M = [], S = (v.gridGap || 0) + "rem", K = Object.hasOwn(v, "children") && Array.isArray(v.children) && v.children.length > 0, F = Object.hasOwn(v, "skeletons") && Array.isArray(v.skeletons) && v.skeletons.length > 0, pe = v.repeatCount;
      pe > 0 && (C.repeatCount = pe), K && Na(v.children, pe).map(Wi.bind(null, pe, w)).forEach(({ key: le, item: ve }) => {
        P.push({
          ...Dn(ve, l),
          key: le
        });
      }), F && Na(v.skeletons, pe).map(Wi.bind(null, pe, w)).forEach(({ key: le, item: ve }) => {
        M.push({
          ...Dn(ve, l, !0),
          key: le
        });
      });
      const xe = r0({
        grid: v,
        hasChildren: K,
        children: P,
        skeletons: M,
        repeatCount: pe,
        reservedProps: C,
        keyLevel: w
      }), Ce = v.withOpacity, fr = b(v.styles) || {};
      return /* @__PURE__ */ _r.jsx(
        qr,
        {
          display: "grid",
          "data-key": w,
          style: {
            gap: S,
            margin: Li(v.margin || ""),
            grid: xe,
            height: x != null && x.parent ? Ht : ma(
              ((Ue = x == null ? void 0 : x[w]) == null ? void 0 : Ue.h) ?? (typeof v.h == "function" ? v.h() : v.h)
            ),
            width: x != null && x.parent ? Yt : ma(
              ((be = x == null ? void 0 : x[w]) == null ? void 0 : be.w) ?? (typeof v.w == "function" ? v.w() : v.w)
            ),
            alignItems: v.alignItems,
            justifyContent: v.justifyContent,
            opacity: Vi(
              _,
              x == null ? void 0 : x.repeatCount,
              h,
              x == null ? void 0 : x.withOpacity
            ),
            ...a0(fr)
          },
          className: v.className || "",
          children: K ? P.map(
            (le, ve) => y({
              grid: le,
              dataKey: le.key,
              index: ve,
              length: P.length,
              reservedPropsFromParent: C
            })
          ) : F ? m(
            M,
            pe,
            v.direction,
            Ce,
            C.parent
          ) : null
        },
        w
      );
    },
    [e, u, p, l]
  );
  return /* @__PURE__ */ _r.jsx(qr, { style: r ?? {}, children: y({
    grid: Dn(
      Zn(e),
      l
    ),
    dataKey: Gv,
    index: 0,
    length: 1
  }) });
});
export {
  Ol as ALIGN_ITEMS,
  Dl as COLOR_MODE,
  jn as COLOR_MODES,
  qv as CONTAINER_INITIAL_VALUES,
  Uv as DEFAULT_ALIGN_ITEMS_ALIGNMENT,
  Fs as DEFAULT_BREAKPOINTS,
  Os as DEFAULT_COLOR_THEMES,
  h0 as DEFAULT_DIRECTION_GRID_COLS,
  Hv as DEFAULT_GAP,
  Fn as DEFAULT_GRID_CONTAINER_HEIGHT,
  Qn as DEFAULT_GRID_CONTAINER_WIDTH,
  m0 as DEFAULT_GRID_STYLE,
  Ht as DEFAULT_HEIGHT,
  Yv as DEFAULT_JUSTIFY_ALIGNMENT,
  p0 as DEFAULT_RADIUS,
  Ps as DEFAULT_REPEAT_COUNT,
  Aa as DEFAULT_SKELETON_GRADIENT_WIDTH,
  b0 as DEFAULT_SKELETON_WIDTH,
  v0 as DEFAULT_VARIANT,
  Yt as DEFAULT_WIDTH,
  Dt as DIRECTION,
  Fl as JUSTIFY_CONTENT,
  Pl as MARGIN_SIDES,
  y0 as REPEAT_COUNT_RANGE,
  Gv as ROOT_KEY,
  _0 as ReactSkeletonProvider,
  ce as SIZE_UNITS,
  S0 as SIZE_UNITS_INITIAL_VALUES,
  Kv as SKELETON_ANIMATIONS,
  Bt as SKELETON_ANIMATION_VARIANTS,
  Xv as SKELETON_INITIAL_VALUES,
  Vv as STYLE_PARSING_REGEXP,
  x0 as Skeleton,
  g0 as TREE_ELEMENTS_SPACING,
  ma as applicableValue,
  Jv as convertToArray,
  a0 as cssToReactStyle,
  Ft as filterFromPx,
  r0 as generateCSSGridArea,
  Zv as generateGridArea,
  e0 as generateGridAreaAsColDirection,
  Li as generateMargin,
  Dn as getAdaptiveData,
  Na as itemsWithRepeat,
  Wi as mutateWithRepeated,
  t0 as parseStyleObject,
  Zn as putInitialValuesIfNotExists,
  Vi as setOpacity
};
