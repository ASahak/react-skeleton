var yl = Object.defineProperty;
var Sl = (e, r, t) => r in e ? yl(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var vn = (e, r, t) => Sl(e, typeof r != "symbol" ? r + "" : r, t);
import * as oe from "react";
import Pa, { forwardRef as Xi, useContext as oo, createContext as Ki, useEffect as Ji, useRef as Qi, useState as xl, useCallback as Zi, memo as _l, useMemo as wl } from "react";
var jt = /* @__PURE__ */ ((e) => (e.ROW = "row", e.COLUMN = "column", e))(jt || {}), Ln = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(Ln || {}), _t = /* @__PURE__ */ ((e) => (e.TOP = "top", e.RIGHT = "right", e.BOTTOM = "bottom", e.LEFT = "left", e))(_t || {}), kl = /* @__PURE__ */ ((e) => (e.NORMAL = "normal", e.FLEX_START = "flex-start", e.FLEX_END = "flex-end", e.CENTER = "center", e.BASELINE = "baseline", e.STRETCH = "stretch", e.START = "start", e.END = "end", e.SELF_START = "self-start", e.SELF_END = "self-end", e.FIRST_BASELINE = "first baseline", e.LAST_BASELINE = "last baseline", e.SAFE_CENTER = "safe center", e.UNSAFE_CENTER = "unsafe center", e.SAFE_RIGHT = "safe right", e.UNSAFE_RIGHT = "unsafe right", e.SAFE_END = "safe end", e.UNSAFE_END = "unsafe end", e.SAFE_SELF_END = "safe self-end", e.UNSAFE_SELF_END = "unsafe self-end", e.SAFE_FLEX_END = "safe flex-end", e.UNSAFE_FLEX_END = "unsafe flex-end", e))(kl || {}), El = /* @__PURE__ */ ((e) => (e.START = "start", e.END = "end", e.FLEX_START = "flex-start", e.FLEX_END = "flex-end", e.CENTER = "center", e.LEFT = "left", e.RIGHT = "right", e.SPACE_BETWEEN = "space-between", e.SPACE_AROUND = "space-around", e.SPACE_EVENLY = "space-evenly", e.STRETCH = "stretch", e))(El || {}), ae = /* @__PURE__ */ ((e) => (e.AUTO = "auto", e.PERCENT = "%", e.FN = "fn", e.PX = "px", e.FR = "fr", e.REM = "rem", e.VH = "vh", e.VW = "vw", e.PC = "pc", e.CM = "cm", e.MM = "mm", e.IN = "in", e.PT = "pt", e.CH = "ch", e.EM = "em", e.V_MIN = "vmin", e.V_MAX = "vmax", e))(ae || {}), $l = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e))($l || {}), Bt = /* @__PURE__ */ ((e) => (e.SLIDE = "slide", e.FADE = "fade", e))(Bt || {});
function Cl(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Tl(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var Rl = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Tl(this));
    var n = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var l = Cl(n);
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
}(), me = "-ms-", Fa = "-moz-", W = "-webkit-", io = "comm", so = "rule", lo = "decl", Al = "@import", es = "@keyframes", zl = "@layer", Ol = Math.abs, Ha = String.fromCharCode, Pl = Object.assign;
function Fl(e, r) {
  return fe(e, 0) ^ 45 ? (((r << 2 ^ fe(e, 0)) << 2 ^ fe(e, 1)) << 2 ^ fe(e, 2)) << 2 ^ fe(e, 3) : 0;
}
function rs(e) {
  return e.trim();
}
function Dl(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function V(e, r, t) {
  return e.replace(r, t);
}
function Wn(e, r) {
  return e.indexOf(r);
}
function fe(e, r) {
  return e.charCodeAt(r) | 0;
}
function It(e, r, t) {
  return e.slice(r, t);
}
function Ve(e) {
  return e.length;
}
function co(e) {
  return e.length;
}
function ca(e, r) {
  return r.push(e), e;
}
function jl(e, r) {
  return e.map(r).join("");
}
var Ya = 1, et = 1, ts = 0, xe = 0, se = 0, nt = "";
function Ua(e, r, t, a, n, i, l) {
  return { value: e, root: r, parent: t, type: a, props: n, children: i, line: Ya, column: et, length: l, return: "" };
}
function ht(e, r) {
  return Pl(Ua("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Bl() {
  return se;
}
function Il() {
  return se = xe > 0 ? fe(nt, --xe) : 0, et--, se === 10 && (et = 1, Ya--), se;
}
function Ee() {
  return se = xe < ts ? fe(nt, xe++) : 0, et++, se === 10 && (et = 1, Ya++), se;
}
function He() {
  return fe(nt, xe);
}
function va() {
  return xe;
}
function Gt(e, r) {
  return It(nt, e, r);
}
function Mt(e) {
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
function as(e) {
  return Ya = et = 1, ts = Ve(nt = e), xe = 0, [];
}
function ns(e) {
  return nt = "", e;
}
function ya(e) {
  return rs(Gt(xe - 1, Vn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Ml(e) {
  for (; (se = He()) && se < 33; )
    Ee();
  return Mt(e) > 2 || Mt(se) > 3 ? "" : " ";
}
function Nl(e, r) {
  for (; --r && Ee() && !(se < 48 || se > 102 || se > 57 && se < 65 || se > 70 && se < 97); )
    ;
  return Gt(e, va() + (r < 6 && He() == 32 && Ee() == 32));
}
function Vn(e) {
  for (; Ee(); )
    switch (se) {
      case e:
        return xe;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Vn(se);
        break;
      case 40:
        e === 41 && Vn(e);
        break;
      case 92:
        Ee();
        break;
    }
  return xe;
}
function Ll(e, r) {
  for (; Ee() && e + se !== 57; )
    if (e + se === 84 && He() === 47)
      break;
  return "/*" + Gt(r, xe - 1) + "*" + Ha(e === 47 ? e : Ee());
}
function Wl(e) {
  for (; !Mt(He()); )
    Ee();
  return Gt(e, xe);
}
function Vl(e) {
  return ns(Sa("", null, null, null, [""], e = as(e), 0, [0], e));
}
function Sa(e, r, t, a, n, i, l, u, p) {
  for (var h = 0, b = 0, y = l, g = 0, E = 0, x = 0, m = 1, _ = 1, w = 1, C = 0, O = "", M = n, S = i, K = a, F = O; _; )
    switch (x = C, C = Ee()) {
      case 40:
        if (x != 108 && fe(F, y - 1) == 58) {
          Wn(F += V(ya(C), "&", "&\f"), "&\f") != -1 && (w = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        F += ya(C);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        F += Ml(x);
        break;
      case 92:
        F += Nl(va() - 1, 7);
        continue;
      case 47:
        switch (He()) {
          case 42:
          case 47:
            ca(Hl(Ll(Ee(), va()), r, t), p);
            break;
          default:
            F += "/";
        }
        break;
      case 123 * m:
        u[h++] = Ve(F) * w;
      case 125 * m:
      case 59:
      case 0:
        switch (C) {
          case 0:
          case 125:
            _ = 0;
          case 59 + b:
            w == -1 && (F = V(F, /\f/g, "")), E > 0 && Ve(F) - y && ca(E > 32 ? Fo(F + ";", a, t, y - 1) : Fo(V(F, " ", "") + ";", a, t, y - 2), p);
            break;
          case 59:
            F += ";";
          default:
            if (ca(K = Po(F, r, t, h, b, n, u, O, M = [], S = [], y), i), C === 123)
              if (b === 0)
                Sa(F, r, K, K, M, i, y, u, S);
              else
                switch (g === 99 && fe(F, 3) === 110 ? 100 : g) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    Sa(e, K, K, a && ca(Po(e, K, K, 0, 0, n, u, O, n, M = [], y), S), n, S, y, u, a ? M : S);
                    break;
                  default:
                    Sa(F, K, K, K, [""], S, 0, u, S);
                }
        }
        h = b = E = 0, m = w = 1, O = F = "", y = l;
        break;
      case 58:
        y = 1 + Ve(F), E = x;
      default:
        if (m < 1) {
          if (C == 123)
            --m;
          else if (C == 125 && m++ == 0 && Il() == 125)
            continue;
        }
        switch (F += Ha(C), C * m) {
          case 38:
            w = b > 0 ? 1 : (F += "\f", -1);
            break;
          case 44:
            u[h++] = (Ve(F) - 1) * w, w = 1;
            break;
          case 64:
            He() === 45 && (F += ya(Ee())), g = He(), b = y = Ve(O = F += Wl(va())), C++;
            break;
          case 45:
            x === 45 && Ve(F) == 2 && (m = 0);
        }
    }
  return i;
}
function Po(e, r, t, a, n, i, l, u, p, h, b) {
  for (var y = n - 1, g = n === 0 ? i : [""], E = co(g), x = 0, m = 0, _ = 0; x < a; ++x)
    for (var w = 0, C = It(e, y + 1, y = Ol(m = l[x])), O = e; w < E; ++w)
      (O = rs(m > 0 ? g[w] + " " + C : V(C, /&\f/g, g[w]))) && (p[_++] = O);
  return Ua(e, r, t, n === 0 ? so : u, p, h, b);
}
function Hl(e, r, t) {
  return Ua(e, r, t, io, Ha(Bl()), It(e, 2, -2), 0);
}
function Fo(e, r, t, a) {
  return Ua(e, r, t, lo, It(e, 0, a), It(e, a + 1, -1), a);
}
function Xr(e, r) {
  for (var t = "", a = co(e), n = 0; n < a; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function Yl(e, r, t, a) {
  switch (e.type) {
    case zl:
      if (e.children.length) break;
    case Al:
    case lo:
      return e.return = e.return || e.value;
    case io:
      return "";
    case es:
      return e.return = e.value + "{" + Xr(e.children, a) + "}";
    case so:
      e.value = e.props.join(",");
  }
  return Ve(t = Xr(e.children, a)) ? e.return = e.value + "{" + t + "}" : "";
}
function Ul(e) {
  var r = co(e);
  return function(t, a, n, i) {
    for (var l = "", u = 0; u < r; u++)
      l += e[u](t, a, n, i) || "";
    return l;
  };
}
function Gl(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function os(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var ql = function(r, t, a) {
  for (var n = 0, i = 0; n = i, i = He(), n === 38 && i === 12 && (t[a] = 1), !Mt(i); )
    Ee();
  return Gt(r, xe);
}, Xl = function(r, t) {
  var a = -1, n = 44;
  do
    switch (Mt(n)) {
      case 0:
        n === 38 && He() === 12 && (t[a] = 1), r[a] += ql(xe - 1, t, a);
        break;
      case 2:
        r[a] += ya(n);
        break;
      case 4:
        if (n === 44) {
          r[++a] = He() === 58 ? "&\f" : "", t[a] = r[a].length;
          break;
        }
      default:
        r[a] += Ha(n);
    }
  while (n = Ee());
  return r;
}, Kl = function(r, t) {
  return ns(Xl(as(r), t));
}, Do = /* @__PURE__ */ new WeakMap(), Jl = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, a = r.parent, n = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !Do.get(a)) && !n) {
      Do.set(r, !0);
      for (var i = [], l = Kl(t, i), u = a.props, p = 0, h = 0; p < l.length; p++)
        for (var b = 0; b < u.length; b++, h++)
          r.props[h] = i[p] ? l[p].replace(/&\f/g, u[b]) : u[b] + " " + l[p];
    }
  }
}, Ql = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Zl = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", ec = function(r) {
  return r.type === "comm" && r.children.indexOf(Zl) > -1;
}, rc = function(r) {
  return function(t, a, n) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var l = !!t.parent, u = l ? t.parent.children : (
          // global rule at the root level
          n
        ), p = u.length - 1; p >= 0; p--) {
          var h = u[p];
          if (h.line < t.line)
            break;
          if (h.column < t.column) {
            if (ec(h))
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
}, is = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, tc = function(r, t) {
  for (var a = r - 1; a >= 0; a--)
    if (!is(t[a]))
      return !0;
  return !1;
}, jo = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, ac = function(r, t, a) {
  is(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), jo(r)) : tc(t, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), jo(r)));
};
function ss(e, r) {
  switch (Fl(e, r)) {
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
      return W + e + Fa + e + me + e + e;
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
          return V(e, /(.+:)(.+)-([^]+)/, "$1" + W + "$2-$3$1" + Fa + (fe(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~Wn(e, "stretch") ? ss(V(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (fe(e, r + 1) !== 115) break;
    case 6444:
      switch (fe(e, Ve(e) - 3 - (~Wn(e, "!important") && 10))) {
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
var nc = function(r, t, a, n) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case lo:
      r.return = ss(r.value, r.length);
      break;
    case es:
      return Xr([ht(r, {
        value: V(r.value, "@", "@" + W)
      })], n);
    case so:
      if (r.length) return jl(r.props, function(i) {
        switch (Dl(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Xr([ht(r, {
              props: [V(i, /:(read-\w+)/, ":" + Fa + "$1")]
            })], n);
          case "::placeholder":
            return Xr([ht(r, {
              props: [V(i, /:(plac\w+)/, ":" + W + "input-$1")]
            }), ht(r, {
              props: [V(i, /:(plac\w+)/, ":" + Fa + "$1")]
            }), ht(r, {
              props: [V(i, /:(plac\w+)/, me + "input-$1")]
            })], n);
        }
        return "";
      });
  }
}, oc = [nc], ic = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(m) {
      var _ = m.getAttribute("data-emotion");
      _.indexOf(" ") !== -1 && (document.head.appendChild(m), m.setAttribute("data-s", ""));
    });
  }
  var n = r.stylisPlugins || oc;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, l, u = [];
  l = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(m) {
      for (var _ = m.getAttribute("data-emotion").split(" "), w = 1; w < _.length; w++)
        i[_[w]] = !0;
      u.push(m);
    }
  );
  var p, h = [Jl, Ql];
  process.env.NODE_ENV !== "production" && h.push(rc({
    get compat() {
      return x.compat;
    }
  }), ac);
  {
    var b, y = [Yl, process.env.NODE_ENV !== "production" ? function(m) {
      m.root || (m.return ? b.insert(m.return) : m.value && m.type !== io && b.insert(m.value + "{}"));
    } : Gl(function(m) {
      b.insert(m);
    })], g = Ul(h.concat(n, y)), E = function(_) {
      return Xr(Vl(_), g);
    };
    p = function(_, w, C, O) {
      b = C, process.env.NODE_ENV !== "production" && w.map !== void 0 && (b = {
        insert: function(S) {
          C.insert(S + w.map);
        }
      }), E(_ ? _ + "{" + w.styles + "}" : w.styles), O && (x.inserted[w.name] = !0);
    };
  }
  var x = {
    key: t,
    sheet: new Rl({
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
  return x.sheet.hydrate(u), x;
};
function Hn() {
  return Hn = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Hn.apply(this, arguments);
}
var Lr = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function sc(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Yn = { exports: {} }, G = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Bo;
function lc() {
  if (Bo) return G;
  Bo = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
  function O(S) {
    if (typeof S == "object" && S !== null) {
      var K = S.$$typeof;
      switch (K) {
        case r:
          switch (S = S.type, S) {
            case p:
            case h:
            case a:
            case i:
            case n:
            case y:
              return S;
            default:
              switch (S = S && S.$$typeof, S) {
                case u:
                case b:
                case x:
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
    return O(S) === h;
  }
  return G.AsyncMode = p, G.ConcurrentMode = h, G.ContextConsumer = u, G.ContextProvider = l, G.Element = r, G.ForwardRef = b, G.Fragment = a, G.Lazy = x, G.Memo = E, G.Portal = t, G.Profiler = i, G.StrictMode = n, G.Suspense = y, G.isAsyncMode = function(S) {
    return M(S) || O(S) === p;
  }, G.isConcurrentMode = M, G.isContextConsumer = function(S) {
    return O(S) === u;
  }, G.isContextProvider = function(S) {
    return O(S) === l;
  }, G.isElement = function(S) {
    return typeof S == "object" && S !== null && S.$$typeof === r;
  }, G.isForwardRef = function(S) {
    return O(S) === b;
  }, G.isFragment = function(S) {
    return O(S) === a;
  }, G.isLazy = function(S) {
    return O(S) === x;
  }, G.isMemo = function(S) {
    return O(S) === E;
  }, G.isPortal = function(S) {
    return O(S) === t;
  }, G.isProfiler = function(S) {
    return O(S) === i;
  }, G.isStrictMode = function(S) {
    return O(S) === n;
  }, G.isSuspense = function(S) {
    return O(S) === y;
  }, G.isValidElementType = function(S) {
    return typeof S == "string" || typeof S == "function" || S === a || S === h || S === i || S === n || S === y || S === g || typeof S == "object" && S !== null && (S.$$typeof === x || S.$$typeof === E || S.$$typeof === l || S.$$typeof === u || S.$$typeof === b || S.$$typeof === _ || S.$$typeof === w || S.$$typeof === C || S.$$typeof === m);
  }, G.typeOf = O, G;
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
function cc() {
  return Io || (Io = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, a = e ? Symbol.for("react.fragment") : 60107, n = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, l = e ? Symbol.for("react.provider") : 60109, u = e ? Symbol.for("react.context") : 60110, p = e ? Symbol.for("react.async_mode") : 60111, h = e ? Symbol.for("react.concurrent_mode") : 60111, b = e ? Symbol.for("react.forward_ref") : 60112, y = e ? Symbol.for("react.suspense") : 60113, g = e ? Symbol.for("react.suspense_list") : 60120, E = e ? Symbol.for("react.memo") : 60115, x = e ? Symbol.for("react.lazy") : 60116, m = e ? Symbol.for("react.block") : 60121, _ = e ? Symbol.for("react.fundamental") : 60117, w = e ? Symbol.for("react.responder") : 60118, C = e ? Symbol.for("react.scope") : 60119;
    function O(T) {
      return typeof T == "string" || typeof T == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      T === a || T === h || T === i || T === n || T === y || T === g || typeof T == "object" && T !== null && (T.$$typeof === x || T.$$typeof === E || T.$$typeof === l || T.$$typeof === u || T.$$typeof === b || T.$$typeof === _ || T.$$typeof === w || T.$$typeof === C || T.$$typeof === m);
    }
    function M(T) {
      if (typeof T == "object" && T !== null) {
        var hr = T.$$typeof;
        switch (hr) {
          case r:
            var ar = T.type;
            switch (ar) {
              case p:
              case h:
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
                  case x:
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
    var S = p, K = h, F = u, pe = l, _e = r, Ce = b, fr = a, Ue = x, be = E, ce = t, ge = i, Cr = n, Tr = y, pr = !1;
    function Rr(T) {
      return pr || (pr = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), br(T) || M(T) === p;
    }
    function br(T) {
      return M(T) === h;
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
    function Or(T) {
      return M(T) === b;
    }
    function ot(T) {
      return M(T) === a;
    }
    function Pe(T) {
      return M(T) === x;
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
    function Pr(T) {
      return M(T) === y;
    }
    q.AsyncMode = S, q.ConcurrentMode = K, q.ContextConsumer = F, q.ContextProvider = pe, q.Element = _e, q.ForwardRef = Ce, q.Fragment = fr, q.Lazy = Ue, q.Memo = be, q.Portal = ce, q.Profiler = ge, q.StrictMode = Cr, q.Suspense = Tr, q.isAsyncMode = Rr, q.isConcurrentMode = br, q.isContextConsumer = Ar, q.isContextProvider = zr, q.isElement = U, q.isForwardRef = Or, q.isFragment = ot, q.isLazy = Pe, q.isMemo = rr, q.isPortal = Te, q.isProfiler = tr, q.isStrictMode = Me, q.isSuspense = Pr, q.isValidElementType = O, q.typeOf = M;
  }()), q;
}
process.env.NODE_ENV === "production" ? Yn.exports = lc() : Yn.exports = cc();
var dc = Yn.exports, ls = dc, uc = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, fc = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, cs = {};
cs[ls.ForwardRef] = uc;
cs[ls.Memo] = fc;
var pc = !0;
function uo(e, r, t) {
  var a = "";
  return t.split(" ").forEach(function(n) {
    e[n] !== void 0 ? r.push(e[n] + ";") : a += n + " ";
  }), a;
}
var Ga = function(r, t, a) {
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
  pc === !1) && r.registered[n] === void 0 && (r.registered[n] = t.styles);
}, qa = function(r, t, a) {
  Ga(r, t, a);
  var n = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + n : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function bc(e) {
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
var hc = {
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
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, mc = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", gc = /[A-Z]|^ms/g, ds = /_EMO_([^_]+?)_([^]*?)_EMO_/g, fo = function(r) {
  return r.charCodeAt(1) === 45;
}, No = function(r) {
  return r != null && typeof r != "boolean";
}, yn = /* @__PURE__ */ os(function(e) {
  return fo(e) ? e : e.replace(gc, "-$&").toLowerCase();
}), Da = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(ds, function(a, n, i) {
          return Be = {
            name: n,
            styles: i,
            next: Be
          }, n;
        });
  }
  return hc[r] !== 1 && !fo(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var vc = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, yc = ["normal", "none", "initial", "inherit", "unset"], Sc = Da, xc = /^-ms-/, _c = /-(.)/g, Lo = {};
  Da = function(r, t) {
    if (r === "content" && (typeof t != "string" || yc.indexOf(t) === -1 && !vc.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var a = Sc(r, t);
    return a !== "" && !fo(r) && r.indexOf("-") !== -1 && Lo[r] === void 0 && (Lo[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(xc, "ms-").replace(_c, function(n, i) {
      return i.toUpperCase();
    }) + "?")), a;
  };
}
var us = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function Nt(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(us);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Be = {
          name: t.name,
          styles: t.styles,
          next: Be
        }, t.name;
      if (t.styles !== void 0) {
        var a = t.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Be = {
              name: a.name,
              styles: a.styles,
              next: Be
            }, a = a.next;
        var n = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (n += t.map), n;
      }
      return wc(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = Be, l = t(e);
        return Be = i, Nt(e, r, l);
      } else process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var u = [], p = t.replace(ds, function(b, y, g) {
          var E = "animation" + u.length;
          return u.push("const " + E + " = keyframes`" + g.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + E + "}";
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
  var h = r[t];
  return h !== void 0 ? h : t;
}
function wc(e, r, t) {
  var a = "";
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      a += Nt(e, r, t[n]) + ";";
  else
    for (var i in t) {
      var l = t[i];
      if (typeof l != "object")
        r != null && r[l] !== void 0 ? a += i + "{" + r[l] + "}" : No(l) && (a += yn(i) + ":" + Da(i, l) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(us);
        if (Array.isArray(l) && typeof l[0] == "string" && (r == null || r[l[0]] === void 0))
          for (var u = 0; u < l.length; u++)
            No(l[u]) && (a += yn(i) + ":" + Da(i, l[u]) + ";");
        else {
          var p = Nt(e, r, l);
          switch (i) {
            case "animation":
            case "animationName": {
              a += yn(i) + ":" + p + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(mc), a += i + "{" + p + "}";
          }
        }
      }
    }
  return a;
}
var Wo = /label:\s*([^\s;\n{]+)\s*(;|$)/g, fs;
process.env.NODE_ENV !== "production" && (fs = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Be, rt = function(r, t, a) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var n = !0, i = "";
  Be = void 0;
  var l = r[0];
  l == null || l.raw === void 0 ? (n = !1, i += Nt(a, t, l)) : (process.env.NODE_ENV !== "production" && l[0] === void 0 && console.error(Mo), i += l[0]);
  for (var u = 1; u < r.length; u++)
    i += Nt(a, t, r[u]), n && (process.env.NODE_ENV !== "production" && l[u] === void 0 && console.error(Mo), i += l[u]);
  var p;
  process.env.NODE_ENV !== "production" && (i = i.replace(fs, function(g) {
    return p = g, "";
  })), Wo.lastIndex = 0;
  for (var h = "", b; (b = Wo.exec(i)) !== null; )
    h += "-" + // $FlowFixMe we know it's not null
    b[1];
  var y = bc(i) + h;
  return process.env.NODE_ENV !== "production" ? {
    name: y,
    styles: i,
    map: p,
    next: Be,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: y,
    styles: i,
    next: Be
  };
}, kc = function(r) {
  return r();
}, ps = oe.useInsertionEffect ? oe.useInsertionEffect : !1, po = ps || kc, Vo = ps || oe.useLayoutEffect, Ec = {}.hasOwnProperty, bo = /* @__PURE__ */ oe.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ ic({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (bo.displayName = "EmotionCacheContext");
bo.Provider;
var Xa = function(r) {
  return /* @__PURE__ */ Xi(function(t, a) {
    var n = oo(bo);
    return r(t, n, a);
  });
}, qt = /* @__PURE__ */ oe.createContext({});
process.env.NODE_ENV !== "production" && (qt.displayName = "EmotionThemeContext");
var Ho = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Yo = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", $c = function(r) {
  var t = r.cache, a = r.serialized, n = r.isStringTag;
  return Ga(t, a, n), po(function() {
    return qa(t, a, n);
  }), null;
}, Cc = /* @__PURE__ */ Xa(function(e, r, t) {
  var a = e.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var n = e[Ho], i = [a], l = "";
  typeof e.className == "string" ? l = uo(r.registered, i, e.className) : e.className != null && (l = e.className + " ");
  var u = rt(i, void 0, oe.useContext(qt));
  if (process.env.NODE_ENV !== "production" && u.name.indexOf("-") === -1) {
    var p = e[Yo];
    p && (u = rt([u, "label:" + p + ";"]));
  }
  l += r.key + "-" + u.name;
  var h = {};
  for (var b in e)
    Ec.call(e, b) && b !== "css" && b !== Ho && (process.env.NODE_ENV === "production" || b !== Yo) && (h[b] = e[b]);
  return h.ref = t, h.className = l, /* @__PURE__ */ oe.createElement(oe.Fragment, null, /* @__PURE__ */ oe.createElement($c, {
    cache: r,
    serialized: u,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ oe.createElement(n, h));
});
process.env.NODE_ENV !== "production" && (Cc.displayName = "EmotionCssPropInternal");
var Tc = {
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
}, Uo = !1, Rc = /* @__PURE__ */ Xa(function(e, r) {
  process.env.NODE_ENV !== "production" && !Uo && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (e.className || e.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Uo = !0);
  var t = e.styles, a = rt([t], void 0, oe.useContext(qt)), n = oe.useRef();
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
    if (a.next !== void 0 && qa(r, a.next, !0), l.tags.length) {
      var p = l.tags[l.tags.length - 1].nextElementSibling;
      l.before = p, l.flush();
    }
    r.insert("", a, l, !1);
  }, [r, a.name]), null;
});
process.env.NODE_ENV !== "production" && (Rc.displayName = "EmotionGlobal");
function Ac() {
  for (var e = arguments.length, r = new Array(e), t = 0; t < e; t++)
    r[t] = arguments[t];
  return rt(r);
}
var zc = function() {
  var r = Ac.apply(void 0, arguments), t = "animation-" + r.name;
  return {
    name: t,
    styles: "@keyframes " + t + "{" + r.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Oc = function e(r) {
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
function Pc(e, r, t) {
  var a = [], n = uo(e, a, t);
  return a.length < 2 ? t : n + r(a);
}
var Fc = function(r) {
  var t = r.cache, a = r.serializedArr;
  return po(function() {
    for (var n = 0; n < a.length; n++)
      qa(t, a[n], !1);
  }), null;
}, Dc = /* @__PURE__ */ Xa(function(e, r) {
  var t = !1, a = [], n = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var h = arguments.length, b = new Array(h), y = 0; y < h; y++)
      b[y] = arguments[y];
    var g = rt(b, r.registered);
    return a.push(g), Ga(r, g, !1), r.key + "-" + g.name;
  }, i = function() {
    if (t && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var h = arguments.length, b = new Array(h), y = 0; y < h; y++)
      b[y] = arguments[y];
    return Pc(r.registered, n, Oc(b));
  }, l = {
    css: n,
    cx: i,
    theme: oe.useContext(qt)
  }, u = e.children(l);
  return t = !0, /* @__PURE__ */ oe.createElement(oe.Fragment, null, /* @__PURE__ */ oe.createElement(Fc, {
    cache: r,
    serializedArr: a
  }), u);
});
process.env.NODE_ENV !== "production" && (Dc.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var Go = !0, jc = typeof jest < "u" || typeof vi < "u";
  if (Go && !jc) {
    var qo = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : Go ? window : global
    ), Xo = "__EMOTION_REACT_" + Tc.version.split(".")[0] + "__";
    qo[Xo] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), qo[Xo] = !0;
  }
}
var Un = { exports: {} }, mt = {};
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
function Bc() {
  if (Ko) return mt;
  Ko = 1;
  var e = Pa, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function l(u, p, h) {
    var b, y = {}, g = null, E = null;
    h !== void 0 && (g = "" + h), p.key !== void 0 && (g = "" + p.key), p.ref !== void 0 && (E = p.ref);
    for (b in p) a.call(p, b) && !i.hasOwnProperty(b) && (y[b] = p[b]);
    if (u && u.defaultProps) for (b in p = u.defaultProps, p) y[b] === void 0 && (y[b] = p[b]);
    return { $$typeof: r, type: u, key: g, ref: E, props: y, _owner: n.current };
  }
  return mt.Fragment = t, mt.jsx = l, mt.jsxs = l, mt;
}
var gt = {};
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
function Ic() {
  return Jo || (Jo = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Pa, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), l = Symbol.for("react.provider"), u = Symbol.for("react.context"), p = Symbol.for("react.forward_ref"), h = Symbol.for("react.suspense"), b = Symbol.for("react.suspense_list"), y = Symbol.for("react.memo"), g = Symbol.for("react.lazy"), E = Symbol.for("react.offscreen"), x = Symbol.iterator, m = "@@iterator";
    function _(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = x && s[x] || s[m];
      return typeof v == "function" ? v : null;
    }
    var w = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function C(s) {
      {
        for (var v = arguments.length, k = new Array(v > 1 ? v - 1 : 0), z = 1; z < v; z++)
          k[z - 1] = arguments[z];
        O("error", s, k);
      }
    }
    function O(s, v, k) {
      {
        var z = w.ReactDebugCurrentFrame, D = z.getStackAddendum();
        D !== "" && (v += "%s", k = k.concat([D]));
        var X = k.map(function(j) {
          return String(j);
        });
        X.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, X);
      }
    }
    var M = !1, S = !1, K = !1, F = !1, pe = !1, _e;
    _e = Symbol.for("react.module.reference");
    function Ce(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === a || s === i || pe || s === n || s === h || s === b || F || s === E || M || S || K || typeof s == "object" && s !== null && (s.$$typeof === g || s.$$typeof === y || s.$$typeof === l || s.$$typeof === u || s.$$typeof === p || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === _e || s.getModuleId !== void 0));
    }
    function fr(s, v, k) {
      var z = s.displayName;
      if (z)
        return z;
      var D = v.displayName || v.name || "";
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
        case h:
          return "Suspense";
        case b:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var v = s;
            return Ue(v) + ".Consumer";
          case l:
            var k = s;
            return Ue(k._context) + ".Provider";
          case p:
            return fr(s, s.render, "ForwardRef");
          case y:
            var z = s.displayName || null;
            return z !== null ? z : be(s.type) || "Memo";
          case g: {
            var D = s, X = D._payload, j = D._init;
            try {
              return be(j(X));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var ce = Object.assign, ge = 0, Cr, Tr, pr, Rr, br, Ar, zr;
    function U() {
    }
    U.__reactDisabledLog = !0;
    function Or() {
      {
        if (ge === 0) {
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
        ge++;
      }
    }
    function ot() {
      {
        if (ge--, ge === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: ce({}, s, {
              value: Cr
            }),
            info: ce({}, s, {
              value: Tr
            }),
            warn: ce({}, s, {
              value: pr
            }),
            error: ce({}, s, {
              value: Rr
            }),
            group: ce({}, s, {
              value: br
            }),
            groupCollapsed: ce({}, s, {
              value: Ar
            }),
            groupEnd: ce({}, s, {
              value: zr
            })
          });
        }
        ge < 0 && C("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Pe = w.ReactCurrentDispatcher, rr;
    function Te(s, v, k) {
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
      var Pr = typeof WeakMap == "function" ? WeakMap : Map;
      Me = new Pr();
    }
    function T(s, v) {
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
      X = Pe.current, Pe.current = null, Or();
      try {
        if (v) {
          var j = function() {
            throw Error();
          };
          if (Object.defineProperty(j.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(j, []);
            } catch (we) {
              z = we;
            }
            Reflect.construct(s, [], j);
          } else {
            try {
              j.call();
            } catch (we) {
              z = we;
            }
            s.call(j.prototype);
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
          for (var P = we.stack.split(`
`), de = z.stack.split(`
`), te = P.length - 1, ne = de.length - 1; te >= 1 && ne >= 0 && P[te] !== de[ne]; )
            ne--;
          for (; te >= 1 && ne >= 0; te--, ne--)
            if (P[te] !== de[ne]) {
              if (te !== 1 || ne !== 1)
                do
                  if (te--, ne--, ne < 0 || P[te] !== de[ne]) {
                    var he = `
` + P[te].replace(" at new ", " at ");
                    return s.displayName && he.includes("<anonymous>") && (he = he.replace("<anonymous>", s.displayName)), typeof s == "function" && Me.set(s, he), he;
                  }
                while (te >= 1 && ne >= 0);
              break;
            }
        }
      } finally {
        tr = !1, Pe.current = X, ot(), Error.prepareStackTrace = D;
      }
      var ir = s ? s.displayName || s.name : "", gr = ir ? Te(ir) : "";
      return typeof s == "function" && Me.set(s, gr), gr;
    }
    function hr(s, v, k) {
      return T(s, !1);
    }
    function ar(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function Ge(s, v, k) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return T(s, ar(s));
      if (typeof s == "string")
        return Te(s);
      switch (s) {
        case h:
          return Te("Suspense");
        case b:
          return Te("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case p:
            return hr(s.render);
          case y:
            return Ge(s.type, v, k);
          case g: {
            var z = s, D = z._payload, X = z._init;
            try {
              return Ge(X(D), v, k);
            } catch {
            }
          }
        }
      return "";
    }
    var Fr = Object.prototype.hasOwnProperty, Kt = {}, Jt = w.ReactDebugCurrentFrame;
    function Dr(s) {
      if (s) {
        var v = s._owner, k = Ge(s.type, s._source, v ? v.type : null);
        Jt.setExtraStackFrame(k);
      } else
        Jt.setExtraStackFrame(null);
    }
    function jr(s, v, k, z, D) {
      {
        var X = Function.call.bind(Fr);
        for (var j in s)
          if (X(s, j)) {
            var P = void 0;
            try {
              if (typeof s[j] != "function") {
                var de = Error((z || "React class") + ": " + k + " type `" + j + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[j] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw de.name = "Invariant Violation", de;
              }
              P = s[j](v, j, z, k, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (te) {
              P = te;
            }
            P && !(P instanceof Error) && (Dr(D), C("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", z || "React class", k, j, typeof P), Dr(null)), P instanceof Error && !(P.message in Kt) && (Kt[P.message] = !0, Dr(D), C("Failed %s type: %s", k, P.message), Dr(null));
          }
      }
    }
    var it = Array.isArray;
    function nr(s) {
      return it(s);
    }
    function Ne(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, k = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return k;
      }
    }
    function Qt(s) {
      try {
        return st(s), !1;
      } catch {
        return !0;
      }
    }
    function st(s) {
      return "" + s;
    }
    function Zt(s) {
      if (Qt(s))
        return C("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Ne(s)), st(s);
    }
    var mr = w.ReactCurrentOwner, Br = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, lt, ct, Ir;
    Ir = {};
    function ea(s) {
      if (Fr.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Za(s) {
      if (Fr.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function en(s, v) {
      if (typeof s.ref == "string" && mr.current && v && mr.current.stateNode !== v) {
        var k = be(mr.current.type);
        Ir[k] || (C('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', be(mr.current.type), s.ref), Ir[k] = !0);
      }
    }
    function qe(s, v) {
      {
        var k = function() {
          lt || (lt = !0, C("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        k.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: k,
          configurable: !0
        });
      }
    }
    function Mr(s, v) {
      {
        var k = function() {
          ct || (ct = !0, C("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        k.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: k,
          configurable: !0
        });
      }
    }
    var rn = function(s, v, k, z, D, X, j) {
      var P = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: v,
        ref: k,
        props: j,
        // Record the component responsible for creating this element.
        _owner: X
      };
      return P._store = {}, Object.defineProperty(P._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(P, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: z
      }), Object.defineProperty(P, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: D
      }), Object.freeze && (Object.freeze(P.props), Object.freeze(P)), P;
    };
    function ra(s, v, k, z, D) {
      {
        var X, j = {}, P = null, de = null;
        k !== void 0 && (Zt(k), P = "" + k), Za(v) && (Zt(v.key), P = "" + v.key), ea(v) && (de = v.ref, en(v, D));
        for (X in v)
          Fr.call(v, X) && !Br.hasOwnProperty(X) && (j[X] = v[X]);
        if (s && s.defaultProps) {
          var te = s.defaultProps;
          for (X in te)
            j[X] === void 0 && (j[X] = te[X]);
        }
        if (P || de) {
          var ne = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          P && qe(j, ne), de && Mr(j, ne);
        }
        return rn(s, P, de, D, z, mr.current, j);
      }
    }
    var dt = w.ReactCurrentOwner, ut = w.ReactDebugCurrentFrame;
    function Re(s) {
      if (s) {
        var v = s._owner, k = Ge(s.type, s._source, v ? v.type : null);
        ut.setExtraStackFrame(k);
      } else
        ut.setExtraStackFrame(null);
    }
    var ft;
    ft = !1;
    function Fe(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function ta() {
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
    function tn(s) {
      return "";
    }
    var aa = {};
    function an(s) {
      {
        var v = ta();
        if (!v) {
          var k = typeof s == "string" ? s : s.displayName || s.name;
          k && (v = `

Check the top-level render call using <` + k + ">.");
        }
        return v;
      }
    }
    function na(s, v) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var k = an(v);
        if (aa[k])
          return;
        aa[k] = !0;
        var z = "";
        s && s._owner && s._owner !== dt.current && (z = " It was passed a child from " + be(s._owner.type) + "."), Re(s), C('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', k, z), Re(null);
      }
    }
    function Ae(s, v) {
      {
        if (typeof s != "object")
          return;
        if (nr(s))
          for (var k = 0; k < s.length; k++) {
            var z = s[k];
            Fe(z) && na(z, v);
          }
        else if (Fe(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var D = _(s);
          if (typeof D == "function" && D !== s.entries)
            for (var X = D.call(s), j; !(j = X.next()).done; )
              Fe(j.value) && na(j.value, v);
        }
      }
    }
    function nn(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var k;
        if (typeof v == "function")
          k = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === p || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === y))
          k = v.propTypes;
        else
          return;
        if (k) {
          var z = be(v);
          jr(k, s.props, "prop", z, s);
        } else if (v.PropTypes !== void 0 && !ft) {
          ft = !0;
          var D = be(v);
          C("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", D || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && C("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function on(s) {
      {
        for (var v = Object.keys(s.props), k = 0; k < v.length; k++) {
          var z = v[k];
          if (z !== "children" && z !== "key") {
            Re(s), C("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", z), Re(null);
            break;
          }
        }
        s.ref !== null && (Re(s), C("Invalid attribute `ref` supplied to `React.Fragment`."), Re(null));
      }
    }
    function oa(s, v, k, z, D, X) {
      {
        var j = Ce(s);
        if (!j) {
          var P = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (P += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var de = tn();
          de ? P += de : P += ta();
          var te;
          s === null ? te = "null" : nr(s) ? te = "array" : s !== void 0 && s.$$typeof === r ? (te = "<" + (be(s.type) || "Unknown") + " />", P = " Did you accidentally export a JSX literal instead of a component?") : te = typeof s, C("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", te, P);
        }
        var ne = ra(s, v, k, D, X);
        if (ne == null)
          return ne;
        if (j) {
          var he = v.children;
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
        return s === a ? on(ne) : nn(ne), ne;
      }
    }
    function sn(s, v, k) {
      return oa(s, v, k, !0);
    }
    function ln(s, v, k) {
      return oa(s, v, k, !1);
    }
    var or = ln, cn = sn;
    gt.Fragment = a, gt.jsx = or, gt.jsxs = cn;
  }()), gt;
}
process.env.NODE_ENV === "production" ? Un.exports = Bc() : Un.exports = Ic();
var xr = Un.exports, bs = Ki({});
bs.displayName = "ColorModeContext";
function Mc() {
  const e = oo(bs);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function ur(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function wt(e, ...r) {
  return Nc(e) ? e(...r) : e;
}
var Nc = (e) => typeof e == "function", ja = { exports: {} };
ja.exports;
(function(e, r) {
  var t = 200, a = "__lodash_hash_undefined__", n = 800, i = 16, l = 9007199254740991, u = "[object Arguments]", p = "[object Array]", h = "[object AsyncFunction]", b = "[object Boolean]", y = "[object Date]", g = "[object Error]", E = "[object Function]", x = "[object GeneratorFunction]", m = "[object Map]", _ = "[object Number]", w = "[object Null]", C = "[object Object]", O = "[object Proxy]", M = "[object RegExp]", S = "[object Set]", K = "[object String]", F = "[object Undefined]", pe = "[object WeakMap]", _e = "[object ArrayBuffer]", Ce = "[object DataView]", fr = "[object Float32Array]", Ue = "[object Float64Array]", be = "[object Int8Array]", ce = "[object Int16Array]", ge = "[object Int32Array]", Cr = "[object Uint8Array]", Tr = "[object Uint8ClampedArray]", pr = "[object Uint16Array]", Rr = "[object Uint32Array]", br = /[\\^$.*+?()[\]{}|]/g, Ar = /^\[object .+?Constructor\]$/, zr = /^(?:0|[1-9]\d*)$/, U = {};
  U[fr] = U[Ue] = U[be] = U[ce] = U[ge] = U[Cr] = U[Tr] = U[pr] = U[Rr] = !0, U[u] = U[p] = U[_e] = U[b] = U[Ce] = U[y] = U[g] = U[E] = U[m] = U[_] = U[C] = U[M] = U[S] = U[K] = U[pe] = !1;
  var Or = typeof Lr == "object" && Lr && Lr.Object === Object && Lr, ot = typeof self == "object" && self && self.Object === Object && self, Pe = Or || ot || Function("return this")(), rr = r && !r.nodeType && r, Te = rr && !0 && e && !e.nodeType && e, tr = Te && Te.exports === rr, Me = tr && Or.process, Pr = function() {
    try {
      var o = Te && Te.require && Te.require("util").types;
      return o || Me && Me.binding && Me.binding("util");
    } catch {
    }
  }(), T = Pr && Pr.isTypedArray;
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
  function Kt(o, d) {
    return function(f) {
      return o(d(f));
    };
  }
  var Jt = Array.prototype, Dr = Function.prototype, jr = Object.prototype, it = Pe["__core-js_shared__"], nr = Dr.toString, Ne = jr.hasOwnProperty, Qt = function() {
    var o = /[^.]+$/.exec(it && it.keys && it.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), st = jr.toString, Zt = nr.call(Object), mr = RegExp(
    "^" + nr.call(Ne).replace(br, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), Br = tr ? Pe.Buffer : void 0, lt = Pe.Symbol, ct = Pe.Uint8Array;
  Br && Br.allocUnsafe;
  var Ir = Kt(Object.getPrototypeOf, Object), ea = Object.create, Za = jr.propertyIsEnumerable, en = Jt.splice, qe = lt ? lt.toStringTag : void 0, Mr = function() {
    try {
      var o = dn(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), rn = Br ? Br.isBuffer : void 0, ra = Math.max, dt = Date.now, ut = dn(Pe, "Map"), Re = dn(Object, "create"), ft = /* @__PURE__ */ function() {
    function o() {
    }
    return function(d) {
      if (!vr(d))
        return {};
      if (ea)
        return ea(d);
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
  function ta() {
    this.__data__ = Re ? Re(null) : {}, this.size = 0;
  }
  function tn(o) {
    var d = this.has(o) && delete this.__data__[o];
    return this.size -= d ? 1 : 0, d;
  }
  function aa(o) {
    var d = this.__data__;
    if (Re) {
      var f = d[o];
      return f === a ? void 0 : f;
    }
    return Ne.call(d, o) ? d[o] : void 0;
  }
  function an(o) {
    var d = this.__data__;
    return Re ? d[o] !== void 0 : Ne.call(d, o);
  }
  function na(o, d) {
    var f = this.__data__;
    return this.size += this.has(o) ? 0 : 1, f[o] = Re && d === void 0 ? a : d, this;
  }
  Fe.prototype.clear = ta, Fe.prototype.delete = tn, Fe.prototype.get = aa, Fe.prototype.has = an, Fe.prototype.set = na;
  function Ae(o) {
    var d = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++d < f; ) {
      var $ = o[d];
      this.set($[0], $[1]);
    }
  }
  function nn() {
    this.__data__ = [], this.size = 0;
  }
  function on(o) {
    var d = this.__data__, f = gr(d, o);
    if (f < 0)
      return !1;
    var $ = d.length - 1;
    return f == $ ? d.pop() : en.call(d, f, 1), --this.size, !0;
  }
  function oa(o) {
    var d = this.__data__, f = gr(d, o);
    return f < 0 ? void 0 : d[f][1];
  }
  function sn(o) {
    return gr(this.__data__, o) > -1;
  }
  function ln(o, d) {
    var f = this.__data__, $ = gr(f, o);
    return $ < 0 ? (++this.size, f.push([o, d])) : f[$][1] = d, this;
  }
  Ae.prototype.clear = nn, Ae.prototype.delete = on, Ae.prototype.get = oa, Ae.prototype.has = sn, Ae.prototype.set = ln;
  function or(o) {
    var d = -1, f = o == null ? 0 : o.length;
    for (this.clear(); ++d < f; ) {
      var $ = o[d];
      this.set($[0], $[1]);
    }
  }
  function cn() {
    this.size = 0, this.__data__ = {
      hash: new Fe(),
      map: new (ut || Ae)(),
      string: new Fe()
    };
  }
  function s(o) {
    var d = sa(this, o).delete(o);
    return this.size -= d ? 1 : 0, d;
  }
  function v(o) {
    return sa(this, o).get(o);
  }
  function k(o) {
    return sa(this, o).has(o);
  }
  function z(o, d) {
    var f = sa(this, o), $ = f.size;
    return f.set(o, d), this.size += f.size == $ ? 0 : 1, this;
  }
  or.prototype.clear = cn, or.prototype.delete = s, or.prototype.get = v, or.prototype.has = k, or.prototype.set = z;
  function D(o) {
    var d = this.__data__ = new Ae(o);
    this.size = d.size;
  }
  function X() {
    this.__data__ = new Ae(), this.size = 0;
  }
  function j(o) {
    var d = this.__data__, f = d.delete(o);
    return this.size = d.size, f;
  }
  function P(o) {
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
  D.prototype.clear = X, D.prototype.delete = j, D.prototype.get = P, D.prototype.has = de, D.prototype.set = te;
  function ne(o, d) {
    var f = pn(o), $ = !f && fn(o), I = !f && !$ && Co(o), J = !f && !$ && !I && Ro(o), ee = f || $ || I || J, N = ee ? ar(o.length, String) : [], re = N.length;
    for (var De in o)
      ee && // Safari 9 has enumerable `arguments.length` in strict mode.
      (De == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      I && (De == "offset" || De == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      J && (De == "buffer" || De == "byteLength" || De == "byteOffset") || // Skip index properties.
      Eo(De, re)) || N.push(De);
    return N;
  }
  function he(o, d, f) {
    (f !== void 0 && !la(o[d], f) || f === void 0 && !(d in o)) && we(o, d, f);
  }
  function ir(o, d, f) {
    var $ = o[d];
    (!(Ne.call(o, d) && la($, f)) || f === void 0 && !(d in o)) && we(o, d, f);
  }
  function gr(o, d) {
    for (var f = o.length; f--; )
      if (la(o[f][0], d))
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
  var Ws = rl();
  function ia(o) {
    return o == null ? o === void 0 ? F : w : qe && qe in Object(o) ? tl(o) : ll(o);
  }
  function wo(o) {
    return pt(o) && ia(o) == u;
  }
  function Vs(o) {
    if (!vr(o) || il(o))
      return !1;
    var d = hn(o) ? mr : Ar;
    return d.test(fl(o));
  }
  function Hs(o) {
    return pt(o) && To(o.length) && !!U[ia(o)];
  }
  function Ys(o) {
    if (!vr(o))
      return sl(o);
    var d = $o(o), f = [];
    for (var $ in o)
      $ == "constructor" && (d || !Ne.call(o, $)) || f.push($);
    return f;
  }
  function ko(o, d, f, $, I) {
    o !== d && Ws(d, function(J, ee) {
      if (I || (I = new D()), vr(J))
        Us(o, d, ee, f, ko, $, I);
      else {
        var N = $ ? $(un(o, ee), J, ee + "", o, d, I) : void 0;
        N === void 0 && (N = J), he(o, ee, N);
      }
    }, Ao);
  }
  function Us(o, d, f, $, I, J, ee) {
    var N = un(o, f), re = un(d, f), De = ee.get(re);
    if (De) {
      he(o, f, De);
      return;
    }
    var ke = J ? J(N, re, f + "", o, d, ee) : void 0, bt = ke === void 0;
    if (bt) {
      var mn = pn(re), gn = !mn && Co(re), Oo = !mn && !gn && Ro(re);
      ke = re, mn || gn || Oo ? pn(N) ? ke = N : pl(N) ? ke = Qs(N) : gn ? (bt = !1, ke = Xs(re)) : Oo ? (bt = !1, ke = Js(re)) : ke = [] : bl(re) || fn(re) ? (ke = N, fn(N) ? ke = hl(N) : (!vr(N) || hn(N)) && (ke = al(re))) : bt = !1;
    }
    bt && (ee.set(re, ke), I(ke, re, $, J, ee), ee.delete(re)), he(o, f, ke);
  }
  function Gs(o, d) {
    return dl(cl(o, d, zo), o + "");
  }
  var qs = Mr ? function(o, d) {
    return Mr(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: gl(d),
      writable: !0
    });
  } : zo;
  function Xs(o, d) {
    return o.slice();
  }
  function Ks(o) {
    var d = new o.constructor(o.byteLength);
    return new ct(d).set(new ct(o)), d;
  }
  function Js(o, d) {
    var f = Ks(o.buffer);
    return new o.constructor(f, o.byteOffset, o.length);
  }
  function Qs(o, d) {
    var f = -1, $ = o.length;
    for (d || (d = Array($)); ++f < $; )
      d[f] = o[f];
    return d;
  }
  function Zs(o, d, f, $) {
    var I = !f;
    f || (f = {});
    for (var J = -1, ee = d.length; ++J < ee; ) {
      var N = d[J], re = void 0;
      re === void 0 && (re = o[N]), I ? we(f, N, re) : ir(f, N, re);
    }
    return f;
  }
  function el(o) {
    return Gs(function(d, f) {
      var $ = -1, I = f.length, J = I > 1 ? f[I - 1] : void 0, ee = I > 2 ? f[2] : void 0;
      for (J = o.length > 3 && typeof J == "function" ? (I--, J) : void 0, ee && nl(f[0], f[1], ee) && (J = I < 3 ? void 0 : J, I = 1), d = Object(d); ++$ < I; ) {
        var N = f[$];
        N && o(d, N, $, J);
      }
      return d;
    });
  }
  function rl(o) {
    return function(d, f, $) {
      for (var I = -1, J = Object(d), ee = $(d), N = ee.length; N--; ) {
        var re = ee[++I];
        if (f(J[re], re, J) === !1)
          break;
      }
      return d;
    };
  }
  function sa(o, d) {
    var f = o.__data__;
    return ol(d) ? f[typeof d == "string" ? "string" : "hash"] : f.map;
  }
  function dn(o, d) {
    var f = Fr(o, d);
    return Vs(f) ? f : void 0;
  }
  function tl(o) {
    var d = Ne.call(o, qe), f = o[qe];
    try {
      o[qe] = void 0;
      var $ = !0;
    } catch {
    }
    var I = st.call(o);
    return $ && (d ? o[qe] = f : delete o[qe]), I;
  }
  function al(o) {
    return typeof o.constructor == "function" && !$o(o) ? ft(Ir(o)) : {};
  }
  function Eo(o, d) {
    var f = typeof o;
    return d = d ?? l, !!d && (f == "number" || f != "symbol" && zr.test(o)) && o > -1 && o % 1 == 0 && o < d;
  }
  function nl(o, d, f) {
    if (!vr(f))
      return !1;
    var $ = typeof d;
    return ($ == "number" ? bn(f) && Eo(d, f.length) : $ == "string" && d in f) ? la(f[d], o) : !1;
  }
  function ol(o) {
    var d = typeof o;
    return d == "string" || d == "number" || d == "symbol" || d == "boolean" ? o !== "__proto__" : o === null;
  }
  function il(o) {
    return !!Qt && Qt in o;
  }
  function $o(o) {
    var d = o && o.constructor, f = typeof d == "function" && d.prototype || jr;
    return o === f;
  }
  function sl(o) {
    var d = [];
    if (o != null)
      for (var f in Object(o))
        d.push(f);
    return d;
  }
  function ll(o) {
    return st.call(o);
  }
  function cl(o, d, f) {
    return d = ra(d === void 0 ? o.length - 1 : d, 0), function() {
      for (var $ = arguments, I = -1, J = ra($.length - d, 0), ee = Array(J); ++I < J; )
        ee[I] = $[d + I];
      I = -1;
      for (var N = Array(d + 1); ++I < d; )
        N[I] = $[I];
      return N[d] = f(ee), hr(o, this, N);
    };
  }
  function un(o, d) {
    if (!(d === "constructor" && typeof o[d] == "function") && d != "__proto__")
      return o[d];
  }
  var dl = ul(qs);
  function ul(o) {
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
  function fl(o) {
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
  function la(o, d) {
    return o === d || o !== o && d !== d;
  }
  var fn = wo(/* @__PURE__ */ function() {
    return arguments;
  }()) ? wo : function(o) {
    return pt(o) && Ne.call(o, "callee") && !Za.call(o, "callee");
  }, pn = Array.isArray;
  function bn(o) {
    return o != null && To(o.length) && !hn(o);
  }
  function pl(o) {
    return pt(o) && bn(o);
  }
  var Co = rn || vl;
  function hn(o) {
    if (!vr(o))
      return !1;
    var d = ia(o);
    return d == E || d == x || d == h || d == O;
  }
  function To(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= l;
  }
  function vr(o) {
    var d = typeof o;
    return o != null && (d == "object" || d == "function");
  }
  function pt(o) {
    return o != null && typeof o == "object";
  }
  function bl(o) {
    if (!pt(o) || ia(o) != C)
      return !1;
    var d = Ir(o);
    if (d === null)
      return !0;
    var f = Ne.call(d, "constructor") && d.constructor;
    return typeof f == "function" && f instanceof f && nr.call(f) == Zt;
  }
  var Ro = T ? Ge(T) : Hs;
  function hl(o) {
    return Zs(o, Ao(o));
  }
  function Ao(o) {
    return bn(o) ? ne(o) : Ys(o);
  }
  var ml = el(function(o, d, f, $) {
    ko(o, d, f, $);
  });
  function gl(o) {
    return function() {
      return o;
    };
  }
  function zo(o) {
    return o;
  }
  function vl() {
    return !1;
  }
  e.exports = ml;
})(ja, ja.exports);
var Lc = ja.exports;
const _r = /* @__PURE__ */ sc(Lc);
var Wc = (e) => /!(important)?$/.test(e), Qo = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, Vc = (e, r) => (t) => {
  const a = String(r), n = Wc(a), i = Qo(a), l = e ? `${e}.${i}` : i;
  let u = ur(t.__cssMap) && l in t.__cssMap ? t.__cssMap[l].varRef : r;
  return u = Qo(u), n ? `${u} !important` : u;
};
function ho(e) {
  const { scale: r, transform: t, compose: a } = e;
  return (i, l) => {
    var u;
    const p = Vc(r, i)(l);
    let h = (u = t == null ? void 0 : t(p, l)) != null ? u : p;
    return a && (h = a(h, l)), h;
  };
}
var da = (...e) => (r) => e.reduce((t, a) => a(t), r);
function ze(e, r) {
  return (t) => {
    const a = { property: t, scale: e };
    return a.transform = ho({
      scale: e,
      transform: r
    }), a;
  };
}
var Hc = ({ rtl: e, ltr: r }) => (t) => t.direction === "rtl" ? e : r;
function Yc(e) {
  const { property: r, scale: t, transform: a } = e;
  return {
    scale: t,
    property: Hc(r),
    transform: t ? ho({
      scale: t,
      compose: a
    }) : a
  };
}
var hs = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function Uc() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...hs
  ].join(" ");
}
function Gc() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...hs
  ].join(" ");
}
var qc = {
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
}, Xc = {
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
function Kc(e) {
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
var Jc = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, Gn = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, Qc = new Set(Object.values(Gn)), qn = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), Zc = (e) => e.trim();
function ed(e, r) {
  if (e == null || qn.has(e))
    return e;
  if (!(Xn(e) || qn.has(e)))
    return `url('${e}')`;
  const n = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = n == null ? void 0 : n[1], l = n == null ? void 0 : n[2];
  if (!i || !l)
    return e;
  const u = i.includes("-gradient") ? i : `${i}-gradient`, [p, ...h] = l.split(",").map(Zc).filter(Boolean);
  if ((h == null ? void 0 : h.length) === 0)
    return e;
  const b = p in Gn ? Gn[p] : p;
  h.unshift(b);
  const y = h.map((g) => {
    if (Qc.has(g))
      return g;
    const E = g.indexOf(" "), [x, m] = E !== -1 ? [g.substr(0, E), g.substr(E + 1)] : [g], _ = Xn(m) ? m : m && m.split(" "), w = `colors.${x}`, C = w in r.__cssMap ? r.__cssMap[w].varRef : x;
    return _ ? [
      C,
      ...Array.isArray(_) ? _ : [_]
    ].join(" ") : C;
  });
  return `${u}(${y.join(", ")})`;
}
var Xn = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), rd = (e, r) => ed(e, r ?? {});
function td(e) {
  return /^var\(--.+\)$/.test(e);
}
var ad = (e) => {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}, Le = (e) => (r) => `${e}(${r})`, B = {
  filter(e) {
    return e !== "auto" ? e : qc;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : Xc;
  },
  ring(e) {
    return Kc(B.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? Uc() : e === "auto-gpu" ? Gc() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = ad(e);
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
    if (td(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: rd,
  blur: Le("blur"),
  opacity: Le("opacity"),
  brightness: Le("brightness"),
  contrast: Le("contrast"),
  dropShadow: Le("drop-shadow"),
  grayscale: Le("grayscale"),
  hueRotate: (e) => Le("hue-rotate")(B.degree(e)),
  invert: Le("invert"),
  saturate: Le("saturate"),
  sepia: Le("sepia"),
  bgImage(e) {
    return e == null || Xn(e) || qn.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: t, divide: a } = (r = Jc[e]) != null ? r : {}, n = { flexDirection: e };
    return t && (n[t] = 1), a && (n[a] = 1), n;
  }
}, c = {
  borderWidths: ze("borderWidths"),
  borderStyles: ze("borderStyles"),
  colors: ze("colors"),
  borders: ze("borders"),
  gradients: ze("gradients", B.gradient),
  radii: ze("radii", B.px),
  space: ze("space", da(B.vh, B.px)),
  spaceT: ze("space", da(B.vh, B.px)),
  degreeT(e) {
    return { property: e, transform: B.degree };
  },
  prop(e, r, t) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: ho({ scale: r, transform: t })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: ze("sizes", da(B.vh, B.px)),
  sizesT: ze("sizes", da(B.vh, B.fraction)),
  shadows: ze("shadows"),
  logical: Yc,
  blur: ze("blur", B.blur)
}, xa = {
  background: c.colors("background"),
  backgroundColor: c.colors("backgroundColor"),
  backgroundImage: c.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: B.bgClip },
  bgSize: c.prop("backgroundSize"),
  bgPosition: c.prop("backgroundPosition"),
  bg: c.colors("background"),
  bgColor: c.colors("backgroundColor"),
  bgPos: c.prop("backgroundPosition"),
  bgRepeat: c.prop("backgroundRepeat"),
  bgAttachment: c.prop("backgroundAttachment"),
  bgGradient: c.gradients("backgroundImage"),
  bgClip: { transform: B.bgClip }
};
Object.assign(xa, {
  bgImage: xa.backgroundImage,
  bgImg: xa.backgroundImage
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
var nd = {
  color: c.colors("color"),
  textColor: c.colors("color"),
  fill: c.colors("fill"),
  stroke: c.colors("stroke")
}, Kn = {
  boxShadow: c.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: c.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: c.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Kn, {
  shadow: Kn.boxShadow
});
var od = {
  filter: { transform: B.filter },
  blur: c.blur("--chakra-blur"),
  brightness: c.propT("--chakra-brightness", B.brightness),
  contrast: c.propT("--chakra-contrast", B.contrast),
  hueRotate: c.propT("--chakra-hue-rotate", B.hueRotate),
  invert: c.propT("--chakra-invert", B.invert),
  saturate: c.propT("--chakra-saturate", B.saturate),
  dropShadow: c.propT("--chakra-drop-shadow", B.dropShadow),
  backdropFilter: { transform: B.backdropFilter },
  backdropBlur: c.blur("--chakra-backdrop-blur"),
  backdropBrightness: c.propT(
    "--chakra-backdrop-brightness",
    B.brightness
  ),
  backdropContrast: c.propT("--chakra-backdrop-contrast", B.contrast),
  backdropHueRotate: c.propT(
    "--chakra-backdrop-hue-rotate",
    B.hueRotate
  ),
  backdropInvert: c.propT("--chakra-backdrop-invert", B.invert),
  backdropSaturate: c.propT("--chakra-backdrop-saturate", B.saturate)
}, Ba = {
  alignItems: !0,
  alignContent: !0,
  justifyItems: !0,
  justifyContent: !0,
  flexWrap: !0,
  flexDirection: { transform: B.flexDirection },
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
Object.assign(Ba, {
  flexDir: Ba.flexDirection
});
var ms = {
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
}, id = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: B.outline },
  outlineOffset: !0,
  outlineColor: c.colors("outlineColor")
}, Oe = {
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
  float: c.propT("float", B.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(Oe, {
  w: Oe.width,
  h: Oe.height,
  minW: Oe.minWidth,
  maxW: Oe.maxWidth,
  minH: Oe.minHeight,
  maxH: Oe.maxHeight,
  overscroll: Oe.overscrollBehavior,
  overscrollX: Oe.overscrollBehaviorX,
  overscrollY: Oe.overscrollBehaviorY
});
var sd = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: c.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: c.prop("listStyleImage")
};
function ld(e, r, t, a) {
  const n = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < n.length && e; a += 1)
    e = e[n[a]];
  return e === void 0 ? t : e;
}
var cd = (e) => {
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
}, dd = cd(ld), ud = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, fd = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, Sn = (e, r, t) => {
  const a = {}, n = dd(e, r, {});
  for (const i in n)
    i in t && t[i] != null || (a[i] = n[i]);
  return a;
}, pd = {
  srOnly: {
    transform(e) {
      return e === !0 ? ud : e === "focusable" ? fd : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, t) => Sn(r, `layerStyles.${e}`, t)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, t) => Sn(r, `textStyles.${e}`, t)
  },
  apply: {
    processResult: !0,
    transform: (e, r, t) => Sn(r, e, t)
  }
}, Rt = {
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
Object.assign(Rt, {
  insetStart: Rt.insetInlineStart,
  insetEnd: Rt.insetInlineEnd
});
var bd = {
  ring: { transform: B.ring },
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
var hd = {
  textDecorationColor: c.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: c.shadows("textShadow")
}, md = {
  clipPath: !0,
  transform: c.propT("transform", B.transform),
  transformOrigin: !0,
  translateX: c.spaceT("--chakra-translate-x"),
  translateY: c.spaceT("--chakra-translate-y"),
  skewX: c.degreeT("--chakra-skew-x"),
  skewY: c.degreeT("--chakra-skew-y"),
  scaleX: c.prop("--chakra-scale-x"),
  scaleY: c.prop("--chakra-scale-y"),
  scale: c.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: c.degreeT("--chakra-rotate")
}, gd = {
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
}, vd = {
  fontFamily: c.prop("fontFamily", "fonts"),
  fontSize: c.prop("fontSize", "fontSizes", B.px),
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
}, yd = {
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
function gs(e) {
  return ur(e) && e.reference ? e.reference : String(e);
}
var Ka = (e, ...r) => r.map(gs).join(` ${e} `).replace(/calc/g, ""), Zo = (...e) => `calc(${Ka("+", ...e)})`, ei = (...e) => `calc(${Ka("-", ...e)})`, Jn = (...e) => `calc(${Ka("*", ...e)})`, ri = (...e) => `calc(${Ka("/", ...e)})`, ti = (e) => {
  const r = gs(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Jn(r, -1);
}, vt = Object.assign(
  (e) => ({
    add: (...r) => vt(Zo(e, ...r)),
    subtract: (...r) => vt(ei(e, ...r)),
    multiply: (...r) => vt(Jn(e, ...r)),
    divide: (...r) => vt(ri(e, ...r)),
    negate: () => vt(ti(e)),
    toString: () => e.toString()
  }),
  {
    add: Zo,
    subtract: ei,
    multiply: Jn,
    divide: ri,
    negate: ti
  }
);
function Sd(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function xd(e) {
  const r = Sd(e.toString());
  return wd(_d(r));
}
function _d(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function wd(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function kd(e, r = "") {
  return [r, e].filter(Boolean).join("-");
}
function Ed(e, r) {
  return `var(${e}${r ? `, ${r}` : ""})`;
}
function $d(e, r = "") {
  return xd(`--${kd(e, r)}`);
}
function A(e, r, t) {
  const a = $d(e, t);
  return {
    variable: a,
    reference: Ed(a, r)
  };
}
function Cd(e, r) {
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
}, sr = (e) => vs((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), Xe = (e) => vs((r) => e(r, "~ &"), "[data-peer]", ".peer"), vs = (e, ...r) => r.map(e).join(", "), mo = {
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
}, Td = Object.keys(
  mo
), go = _r(
  {},
  xa,
  L,
  nd,
  Ba,
  Oe,
  od,
  bd,
  id,
  ms,
  pd,
  Rt,
  Kn,
  Z,
  yd,
  vd,
  hd,
  md,
  sd,
  gd
);
Object.assign({}, Z, Oe, Ba, ms, Rt);
var Rd = [...Object.keys(go), ...Td], Ad = { ...go, ...mo }, zd = (e) => e in Ad, Od = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: a, media: n } = r.__breakpoints, i = {};
  for (const l in e) {
    let u = wt(e[l], r);
    if (u == null)
      continue;
    if (u = ur(u) && t(u) ? a(u) : u, !Array.isArray(u)) {
      i[l] = u;
      continue;
    }
    const p = u.slice(0, n.length).length;
    for (let h = 0; h < p; h += 1) {
      const b = n == null ? void 0 : n[h];
      if (!b) {
        i[l] = u[h];
        continue;
      }
      i[b] = i[b] || {}, u[h] != null && (i[b][l] = u[h]);
    }
  }
  return i;
};
function Pd(e) {
  const r = [];
  let t = "", a = !1;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    i === "(" ? (a = !0, t += i) : i === ")" ? (a = !1, t += i) : i === "," && !a ? (r.push(t), t = "") : t += i;
  }
  return t = t.trim(), t && r.push(t), r;
}
function Fd(e) {
  return /^var\(--.+\)$/.test(e);
}
var Dd = (e, r) => e.startsWith("--") && typeof r == "string" && !Fd(r), jd = (e, r) => {
  var t, a;
  if (r == null)
    return r;
  const n = (p) => {
    var h, b;
    return (b = (h = e.__cssMap) == null ? void 0 : h[p]) == null ? void 0 : b.varRef;
  }, i = (p) => {
    var h;
    return (h = n(p)) != null ? h : p;
  }, [l, u] = Pd(r);
  return r = (a = (t = n(l)) != null ? t : i(u)) != null ? a : i(r), r;
};
function Bd(e) {
  const { configs: r = {}, pseudos: t = {}, theme: a } = e, n = (i, l = !1) => {
    var u, p, h;
    const b = wt(i, a), y = Od(b)(a);
    let g = {};
    for (let E in y) {
      const x = y[E];
      let m = wt(x, a);
      E in t && (E = t[E]), Dd(E, m) && (m = jd(a, m));
      let _ = r[E];
      if (_ === !0 && (_ = { property: E }), ur(m)) {
        g[E] = (u = g[E]) != null ? u : {}, g[E] = _r(
          {},
          g[E],
          n(m, !0)
        );
        continue;
      }
      let w = (h = (p = _ == null ? void 0 : _.transform) == null ? void 0 : p.call(_, m, a, b)) != null ? h : m;
      w = _ != null && _.processResult ? n(w, !0) : w;
      const C = wt(_ == null ? void 0 : _.property, a);
      if (!l && (_ != null && _.static)) {
        const O = wt(_.static, a);
        g = _r({}, g, O);
      }
      if (C && Array.isArray(C)) {
        for (const O of C)
          g[O] = w;
        continue;
      }
      if (C) {
        C === "&" && ur(w) ? g = _r({}, g, w) : g[C] = w;
        continue;
      }
      if (ur(w)) {
        g = _r({}, g, w);
        continue;
      }
      g[E] = w;
    }
    return g;
  };
  return n;
}
var Id = (e) => (r) => Bd({
  theme: r,
  pseudos: mo,
  configs: go
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
var Md = [
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
function Nd(e) {
  return ur(e) ? Md.every(
    (r) => Object.prototype.hasOwnProperty.call(e, r)
  ) : !1;
}
var Ld = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, Wd = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, Vd = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, Hd = {
  property: Ld,
  easing: Wd,
  duration: Vd
}, Yd = Hd, Ud = {
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
}, Gd = Ud, qd = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, Xd = qd, Kd = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, Jd = Kd, Qd = {
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
}, Zd = Qd, eu = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, ru = eu, tu = {
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
}, au = tu, nu = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, ou = nu, iu = {
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
}, ys = iu, Ss = {
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
}, su = {
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
}, lu = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, cu = {
  ...Ss,
  ...su,
  container: lu
}, xs = cu, du = {
  breakpoints: Jd,
  zIndices: Gd,
  radii: ru,
  blur: ou,
  colors: Zd,
  ...ys,
  sizes: xs,
  shadows: au,
  space: Ss,
  borders: Xd,
  transition: Yd
}, { defineMultiStyleConfig: uu, definePartsStyle: kt } = Q([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Ke = A("stepper-indicator-size"), Wr = A("stepper-icon-size"), Vr = A("stepper-title-font-size"), Et = A("stepper-description-font-size"), yt = A("stepper-accent-color"), fu = kt(({ colorScheme: e }) => ({
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
    fontSize: Et.reference,
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
})), pu = uu({
  baseStyle: fu,
  sizes: {
    xs: kt({
      stepper: {
        [Ke.variable]: "sizes.4",
        [Wr.variable]: "sizes.3",
        [Vr.variable]: "fontSizes.xs",
        [Et.variable]: "fontSizes.xs"
      }
    }),
    sm: kt({
      stepper: {
        [Ke.variable]: "sizes.6",
        [Wr.variable]: "sizes.4",
        [Vr.variable]: "fontSizes.sm",
        [Et.variable]: "fontSizes.xs"
      }
    }),
    md: kt({
      stepper: {
        [Ke.variable]: "sizes.8",
        [Wr.variable]: "sizes.5",
        [Vr.variable]: "fontSizes.md",
        [Et.variable]: "fontSizes.sm"
      }
    }),
    lg: kt({
      stepper: {
        [Ke.variable]: "sizes.10",
        [Wr.variable]: "sizes.6",
        [Vr.variable]: "fontSizes.lg",
        [Et.variable]: "fontSizes.md"
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
      Object.entries(r).map(([y, g]) => [y, g.selector])
    );
  }
  function u() {
    return Object.fromEntries(
      Object.entries(r).map(([y, g]) => [y, g.className])
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
var bu = Y("accordion").parts("root", "container", "button", "panel").extend("icon"), hu = Y("alert").parts("title", "description", "container").extend("icon", "spinner"), mu = Y("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), gu = Y("breadcrumb").parts("link", "item", "container").extend("separator");
Y("button").parts();
var vu = Y("checkbox").parts("control", "icon", "container").extend("label");
Y("progress").parts("track", "filledTrack").extend("label");
var yu = Y("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Su = Y("editable").parts(
  "preview",
  "input",
  "textarea"
), xu = Y("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), _u = Y("formError").parts("text", "icon"), wu = Y("input").parts(
  "addon",
  "field",
  "element",
  "group"
), ku = Y("list").parts("container", "item", "icon"), Eu = Y("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), $u = Y("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Cu = Y("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
Y("pininput").parts("field");
var Tu = Y("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), Ru = Y("progress").parts(
  "label",
  "filledTrack",
  "track"
), Au = Y("radio").parts(
  "container",
  "control",
  "label"
), zu = Y("select").parts("field", "icon"), Ou = Y("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), Pu = Y("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), Fu = Y("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), Du = Y("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), ju = Y("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), Bu = Y("tag").parts(
  "container",
  "label",
  "closeButton"
), Iu = Y("card").parts(
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
class Mu extends Error {
  constructor(r) {
    super(`Failed to parse color: "${r}"`);
  }
}
var $t = Mu;
function vo(e) {
  if (typeof e != "string") throw new $t(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let r = e.trim();
  r = Gu.test(e) ? Wu(e) : e;
  const t = Vu.exec(r);
  if (t) {
    const l = Array.from(t).slice(1);
    return [...l.slice(0, 3).map((u) => parseInt(Lt(u, 2), 16)), parseInt(Lt(l[3] || "f", 2), 16) / 255];
  }
  const a = Hu.exec(r);
  if (a) {
    const l = Array.from(a).slice(1);
    return [...l.slice(0, 3).map((u) => parseInt(u, 16)), parseInt(l[3] || "ff", 16) / 255];
  }
  const n = Yu.exec(r);
  if (n) {
    const l = Array.from(n).slice(1);
    return [...l.slice(0, 3).map((u) => parseInt(u, 10)), parseFloat(l[3] || "1")];
  }
  const i = Uu.exec(r);
  if (i) {
    const [l, u, p, h] = Array.from(i).slice(1).map(parseFloat);
    if (wr(0, 100, u) !== u) throw new $t(e);
    if (wr(0, 100, p) !== p) throw new $t(e);
    return [...qu(l, u, p), Number.isNaN(h) ? 1 : h];
  }
  throw new $t(e);
}
function Nu(e) {
  let r = 5381, t = e.length;
  for (; t; )
    r = r * 33 ^ e.charCodeAt(--t);
  return (r >>> 0) % 2341;
}
const ai = (e) => parseInt(e.replace(/_/g, ""), 36), Lu = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, r) => {
  const t = ai(r.substring(0, 3)), a = ai(r.substring(3)).toString(16);
  let n = "";
  for (let i = 0; i < 6 - a.length; i++)
    n += "0";
  return e[t] = `${n}${a}`, e;
}, {});
function Wu(e) {
  const r = e.toLowerCase().trim(), t = Lu[Nu(r)];
  if (!t) throw new $t(e);
  return `#${t}`;
}
const Lt = (e, r) => Array.from(Array(r)).map(() => e).join(""), Vu = new RegExp(`^#${Lt("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), Hu = new RegExp(`^#${Lt("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), Yu = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${Lt(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), Uu = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, Gu = /^[a-z]+$/i, ni = (e) => Math.round(e * 255), qu = (e, r, t) => {
  let a = t / 100;
  if (r === 0)
    return [a, a, a].map(ni);
  const n = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * a - 1)) * (r / 100), l = i * (1 - Math.abs(n % 2 - 1));
  let u = 0, p = 0, h = 0;
  n >= 0 && n < 1 ? (u = i, p = l) : n >= 1 && n < 2 ? (u = l, p = i) : n >= 2 && n < 3 ? (p = i, h = l) : n >= 3 && n < 4 ? (p = l, h = i) : n >= 4 && n < 5 ? (u = l, h = i) : n >= 5 && n < 6 && (u = i, h = l);
  const b = a - i / 2, y = u + b, g = p + b, E = h + b;
  return [y, g, E].map(ni);
};
function Xu(e, r, t, a) {
  return `rgba(${wr(0, 255, e).toFixed()}, ${wr(0, 255, r).toFixed()}, ${wr(0, 255, t).toFixed()}, ${parseFloat(wr(0, 1, a).toFixed(3))})`;
}
function Ku(e, r) {
  const [t, a, n, i] = vo(e);
  return Xu(t, a, n, i - r);
}
function Ju(e) {
  const [r, t, a, n] = vo(e);
  let i = (l) => {
    const u = wr(0, 255, l).toString(16);
    return u.length === 1 ? `0${u}` : u;
  };
  return `#${i(r)}${i(t)}${i(a)}${n < 1 ? i(Math.round(n * 255)) : ""}`;
}
function Qu(e, r, t, a, n) {
  for (r = r.split ? r.split(".") : r, a = 0; a < r.length; a++)
    e = e ? e[r[a]] : n;
  return e === n ? t : e;
}
var Zu = (e) => Object.keys(e).length === 0, ve = (e, r, t) => {
  const a = Qu(e, `colors.${r}`, r);
  try {
    return Ju(a), a;
  } catch {
    return t ?? "#000000";
  }
}, ef = (e) => {
  const [r, t, a] = vo(e);
  return (r * 299 + t * 587 + a * 114) / 1e3;
}, rf = (e) => (r) => {
  const t = ve(r, e);
  return ef(t) < 128 ? "dark" : "light";
}, tf = (e) => (r) => rf(e)(r) === "dark", tt = (e, r) => (t) => {
  const a = ve(t, e);
  return Ku(a, 1 - r);
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
var af = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function nf(e) {
  const r = af();
  return !e || Zu(e) ? r : e.string && e.colors ? sf(e.string, e.colors) : e.string && !e.colors ? of(e.string) : e.colors && !e.string ? lf(e.colors) : r;
}
function of(e) {
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
function sf(e, r) {
  let t = 0;
  if (e.length === 0)
    return r[0];
  for (let a = 0; a < e.length; a += 1)
    t = e.charCodeAt(a) + ((t << 5) - t), t = t & t;
  return t = (t % r.length + r.length) % r.length, r[t];
}
function lf(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function R(e, r) {
  return (t) => t.colorMode === "dark" ? r : e;
}
function yo(e) {
  const { orientation: r, vertical: t, horizontal: a } = e;
  return r ? r === "vertical" ? t : a : {};
}
function _s(e) {
  return ur(e) && e.reference ? e.reference : String(e);
}
var Ja = (e, ...r) => r.map(_s).join(` ${e} `).replace(/calc/g, ""), ii = (...e) => `calc(${Ja("+", ...e)})`, si = (...e) => `calc(${Ja("-", ...e)})`, Qn = (...e) => `calc(${Ja("*", ...e)})`, li = (...e) => `calc(${Ja("/", ...e)})`, ci = (e) => {
  const r = _s(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Qn(r, -1);
}, Je = Object.assign(
  (e) => ({
    add: (...r) => Je(ii(e, ...r)),
    subtract: (...r) => Je(si(e, ...r)),
    multiply: (...r) => Je(Qn(e, ...r)),
    divide: (...r) => Je(li(e, ...r)),
    negate: () => Je(ci(e)),
    toString: () => e.toString()
  }),
  {
    add: ii,
    subtract: si,
    multiply: Qn,
    divide: li,
    negate: ci
  }
);
function cf(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function df(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function ws(e) {
  const r = df(e.toString());
  return r.includes("\\.") ? e : cf(e) ? r.replace(".", "\\.") : e;
}
function uf(e, r = "") {
  return [r, ws(e)].filter(Boolean).join("-");
}
function ff(e, r) {
  return `var(${ws(e)}${r ? `, ${r}` : ""})`;
}
function pf(e, r = "") {
  return `--${uf(e, r)}`;
}
function le(e, r) {
  const t = pf(e, void 0);
  return {
    variable: t,
    reference: ff(t, bf(void 0))
  };
}
function bf(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: hf, definePartsStyle: _a } = Q(Fu.keys), At = le("switch-track-width"), kr = le("switch-track-height"), xn = le("switch-track-diff"), mf = Je.subtract(At, kr), Zn = le("switch-thumb-x"), St = le("switch-bg"), gf = (e) => {
  const { colorScheme: r } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [At.reference],
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
}, vf = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [kr.reference],
  height: [kr.reference],
  _checked: {
    transform: `translateX(${Zn.reference})`
  }
}, yf = _a((e) => ({
  container: {
    [xn.variable]: mf,
    [Zn.variable]: xn.reference,
    _rtl: {
      [Zn.variable]: Je(xn).negate().toString()
    }
  },
  track: gf(e),
  thumb: vf
})), Sf = {
  sm: _a({
    container: {
      [At.variable]: "1.375rem",
      [kr.variable]: "sizes.3"
    }
  }),
  md: _a({
    container: {
      [At.variable]: "1.875rem",
      [kr.variable]: "sizes.4"
    }
  }),
  lg: _a({
    container: {
      [At.variable]: "2.875rem",
      [kr.variable]: "sizes.6"
    }
  })
}, xf = hf({
  baseStyle: yf,
  sizes: Sf,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: _f, definePartsStyle: Kr } = Q(Du.keys), wf = Kr({
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
}), Ia = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, kf = Kr((e) => {
  const { colorScheme: r } = e;
  return {
    th: {
      color: R("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: R(`${r}.100`, `${r}.700`)(e),
      ...Ia
    },
    td: {
      borderBottom: "1px",
      borderColor: R(`${r}.100`, `${r}.700`)(e),
      ...Ia
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
}), Ef = Kr((e) => {
  const { colorScheme: r } = e;
  return {
    th: {
      color: R("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: R(`${r}.100`, `${r}.700`)(e),
      ...Ia
    },
    td: {
      borderBottom: "1px",
      borderColor: R(`${r}.100`, `${r}.700`)(e),
      ...Ia
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
}), $f = {
  simple: kf,
  striped: Ef,
  unstyled: {}
}, Cf = {
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
}, Tf = _f({
  baseStyle: wf,
  variants: $f,
  sizes: Cf,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), Se = A("tabs-color"), Ie = A("tabs-bg"), ua = A("tabs-border-color"), { defineMultiStyleConfig: Rf, definePartsStyle: Ye } = Q(ju.keys), Af = (e) => {
  const { orientation: r } = e;
  return {
    display: r === "vertical" ? "flex" : "block"
  };
}, zf = (e) => {
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
}, Of = (e) => {
  const { align: r = "start", orientation: t } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[r],
    flexDirection: t === "vertical" ? "column" : "row"
  };
}, Pf = {
  p: 4
}, Ff = Ye((e) => ({
  root: Af(e),
  tab: zf(e),
  tablist: Of(e),
  tabpanel: Pf
})), Df = {
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
}, jf = Ye((e) => {
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
}), Bf = Ye((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [ua.variable]: "transparent",
      _selected: {
        [Se.variable]: `colors.${r}.600`,
        [ua.variable]: "colors.white",
        _dark: {
          [Se.variable]: `colors.${r}.300`,
          [ua.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: ua.reference
      },
      color: Se.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), If = Ye((e) => {
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
}), Mf = Ye((e) => {
  const { colorScheme: r, theme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: ve(t, `${r}.700`),
        bg: ve(t, `${r}.100`)
      }
    }
  };
}), Nf = Ye((e) => {
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
}), Lf = Ye({}), Wf = {
  line: jf,
  enclosed: Bf,
  "enclosed-colored": If,
  "soft-rounded": Mf,
  "solid-rounded": Nf,
  unstyled: Lf
}, Vf = Rf({
  baseStyle: Ff,
  sizes: Df,
  variants: Wf,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), ie = Cd("badge", ["bg", "color", "shadow"]), Hf = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: ie.bg.reference,
  color: ie.color.reference,
  boxShadow: ie.shadow.reference
}, Yf = (e) => {
  const { colorScheme: r, theme: t } = e, a = tt(`${r}.500`, 0.6)(t);
  return {
    [ie.bg.variable]: `colors.${r}.500`,
    [ie.color.variable]: "colors.white",
    _dark: {
      [ie.bg.variable]: a,
      [ie.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, Uf = (e) => {
  const { colorScheme: r, theme: t } = e, a = tt(`${r}.200`, 0.16)(t);
  return {
    [ie.bg.variable]: `colors.${r}.100`,
    [ie.color.variable]: `colors.${r}.800`,
    _dark: {
      [ie.bg.variable]: a,
      [ie.color.variable]: `colors.${r}.200`
    }
  };
}, Gf = (e) => {
  const { colorScheme: r, theme: t } = e, a = tt(`${r}.200`, 0.8)(t);
  return {
    [ie.color.variable]: `colors.${r}.500`,
    _dark: {
      [ie.color.variable]: a
    },
    [ie.shadow.variable]: `inset 0 0 0px 1px ${ie.color.reference}`
  };
}, qf = {
  solid: Yf,
  subtle: Uf,
  outline: Gf
}, zt = {
  baseStyle: Hf,
  variants: qf,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: Xf, definePartsStyle: Er } = Q(Bu.keys), di = A("tag-bg"), ui = A("tag-color"), _n = A("tag-shadow"), wa = A("tag-min-height"), ka = A("tag-min-width"), Ea = A("tag-font-size"), $a = A("tag-padding-inline"), Kf = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [ui.variable]: ie.color.reference,
  [di.variable]: ie.bg.reference,
  [_n.variable]: ie.shadow.reference,
  color: ui.reference,
  bg: di.reference,
  boxShadow: _n.reference,
  borderRadius: "md",
  minH: wa.reference,
  minW: ka.reference,
  fontSize: Ea.reference,
  px: $a.reference,
  _focusVisible: {
    [_n.variable]: "shadows.outline"
  }
}, Jf = {
  lineHeight: 1.2,
  overflow: "visible"
}, Qf = {
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
}, Zf = Er({
  container: Kf,
  label: Jf,
  closeButton: Qf
}), ep = {
  sm: Er({
    container: {
      [wa.variable]: "sizes.5",
      [ka.variable]: "sizes.5",
      [Ea.variable]: "fontSizes.xs",
      [$a.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: Er({
    container: {
      [wa.variable]: "sizes.6",
      [ka.variable]: "sizes.6",
      [Ea.variable]: "fontSizes.sm",
      [$a.variable]: "space.2"
    }
  }),
  lg: Er({
    container: {
      [wa.variable]: "sizes.8",
      [ka.variable]: "sizes.8",
      [Ea.variable]: "fontSizes.md",
      [$a.variable]: "space.3"
    }
  })
}, rp = {
  subtle: Er((e) => {
    var r;
    return {
      container: (r = zt.variants) == null ? void 0 : r.subtle(e)
    };
  }),
  solid: Er((e) => {
    var r;
    return {
      container: (r = zt.variants) == null ? void 0 : r.solid(e)
    };
  }),
  outline: Er((e) => {
    var r;
    return {
      container: (r = zt.variants) == null ? void 0 : r.outline(e)
    };
  })
}, tp = Xf({
  variants: rp,
  baseStyle: Zf,
  sizes: ep,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Qe, defineMultiStyleConfig: ap } = Q(wu.keys), Hr = A("input-height"), Yr = A("input-font-size"), Ur = A("input-padding"), Gr = A("input-border-radius"), np = Qe({
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
}, op = {
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
function So(e) {
  const { focusBorderColor: r, errorBorderColor: t } = e;
  return {
    focusBorderColor: r || R("blue.500", "blue.300")(e),
    errorBorderColor: t || R("red.500", "red.300")(e)
  };
}
var ip = Qe((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = So(e);
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
        borderColor: ve(r, a),
        boxShadow: `0 0 0 1px ${ve(r, a)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: ve(r, t),
        boxShadow: `0 0 0 1px ${ve(r, t)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: R("inherit", "whiteAlpha.50")(e),
      bg: R("gray.100", "whiteAlpha.300")(e)
    }
  };
}), sp = Qe((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = So(e);
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
        borderColor: ve(r, a)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: ve(r, t)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: R("gray.100", "whiteAlpha.50")(e)
    }
  };
}), lp = Qe((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = So(e);
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
        borderColor: ve(r, a),
        boxShadow: `0px 1px 0px 0px ${ve(r, a)}`
      },
      _focusVisible: {
        borderColor: ve(r, t),
        boxShadow: `0px 1px 0px 0px ${ve(r, t)}`
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
}), cp = Qe({
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
}), dp = {
  outline: ip,
  filled: sp,
  flushed: lp,
  unstyled: cp
}, H = ap({
  baseStyle: np,
  sizes: op,
  variants: dp,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), fi, up = {
  ...(fi = H.baseStyle) == null ? void 0 : fi.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, pi, bi, fp = {
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
}, hi, mi, gi, yi, Si, xi, _i, wi, pp = {
  xs: (mi = (hi = H.sizes) == null ? void 0 : hi.xs.field) != null ? mi : {},
  sm: (yi = (gi = H.sizes) == null ? void 0 : gi.sm.field) != null ? yi : {},
  md: (xi = (Si = H.sizes) == null ? void 0 : Si.md.field) != null ? xi : {},
  lg: (wi = (_i = H.sizes) == null ? void 0 : _i.lg.field) != null ? wi : {}
}, bp = {
  baseStyle: up,
  sizes: pp,
  variants: fp,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, fa = le("tooltip-bg"), wn = le("tooltip-fg"), hp = le("popper-arrow-bg"), mp = {
  bg: fa.reference,
  color: wn.reference,
  [fa.variable]: "colors.gray.700",
  [wn.variable]: "colors.whiteAlpha.900",
  _dark: {
    [fa.variable]: "colors.gray.300",
    [wn.variable]: "colors.gray.900"
  },
  [hp.variable]: fa.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, gp = {
  baseStyle: mp
}, { defineMultiStyleConfig: vp, definePartsStyle: Ct } = Q(Ru.keys), yp = (e) => {
  const { colorScheme: r, theme: t, isIndeterminate: a, hasStripe: n } = e, i = R(
    oi(),
    oi("1rem", "rgba(0,0,0,0.1)")
  )(e), l = R(`${r}.500`, `${r}.200`)(e), u = `linear-gradient(
    to right,
    transparent 0%,
    ${ve(t, l)} 50%,
    transparent 100%
  )`;
  return {
    ...!a && n && i,
    ...a ? { bgImage: u } : { bgColor: l }
  };
}, Sp = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, xp = (e) => ({
  bg: R("gray.100", "whiteAlpha.300")(e)
}), _p = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...yp(e)
}), wp = Ct((e) => ({
  label: Sp,
  filledTrack: _p(e),
  track: xp(e)
})), kp = {
  xs: Ct({
    track: { h: "1" }
  }),
  sm: Ct({
    track: { h: "2" }
  }),
  md: Ct({
    track: { h: "3" }
  }),
  lg: Ct({
    track: { h: "4" }
  })
}, Ep = vp({
  sizes: kp,
  baseStyle: wp,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), $p = (e) => typeof e == "function";
function ye(e, ...r) {
  return $p(e) ? e(...r) : e;
}
var { definePartsStyle: Ca, defineMultiStyleConfig: Cp } = Q(vu.keys), Ot = A("checkbox-size"), Tp = (e) => {
  const { colorScheme: r } = e;
  return {
    w: Ot.reference,
    h: Ot.reference,
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
}, Rp = {
  _disabled: { cursor: "not-allowed" }
}, Ap = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, zp = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Op = Ca((e) => ({
  icon: zp,
  container: Rp,
  control: ye(Tp, e),
  label: Ap
})), Pp = {
  sm: Ca({
    control: { [Ot.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: Ca({
    control: { [Ot.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: Ca({
    control: { [Ot.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, Ma = Cp({
  baseStyle: Op,
  sizes: Pp,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Fp, definePartsStyle: Ta } = Q(Au.keys), Dp = (e) => {
  var r;
  const t = (r = ye(Ma.baseStyle, e)) == null ? void 0 : r.control;
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
}, jp = Ta((e) => {
  var r, t, a, n;
  return {
    label: (t = (r = Ma).baseStyle) == null ? void 0 : t.call(r, e).label,
    container: (n = (a = Ma).baseStyle) == null ? void 0 : n.call(a, e).container,
    control: Dp(e)
  };
}), Bp = {
  md: Ta({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: Ta({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: Ta({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, Ip = Fp({
  baseStyle: jp,
  sizes: Bp,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Mp, definePartsStyle: Np } = Q(zu.keys), pa = A("select-bg"), ki, Lp = {
  ...(ki = H.baseStyle) == null ? void 0 : ki.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: pa.reference,
  [pa.variable]: "colors.white",
  _dark: {
    [pa.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: pa.reference
  }
}, Wp = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, Vp = Np({
  field: Lp,
  icon: Wp
}), ba = {
  paddingInlineEnd: "8"
}, Ei, $i, Ci, Ti, Ri, Ai, zi, Oi, Hp = {
  lg: {
    ...(Ei = H.sizes) == null ? void 0 : Ei.lg,
    field: {
      ...($i = H.sizes) == null ? void 0 : $i.lg.field,
      ...ba
    }
  },
  md: {
    ...(Ci = H.sizes) == null ? void 0 : Ci.md,
    field: {
      ...(Ti = H.sizes) == null ? void 0 : Ti.md.field,
      ...ba
    }
  },
  sm: {
    ...(Ri = H.sizes) == null ? void 0 : Ri.sm,
    field: {
      ...(Ai = H.sizes) == null ? void 0 : Ai.sm.field,
      ...ba
    }
  },
  xs: {
    ...(zi = H.sizes) == null ? void 0 : zi.xs,
    field: {
      ...(Oi = H.sizes) == null ? void 0 : Oi.xs.field,
      ...ba
    },
    icon: {
      insetEnd: "1"
    }
  }
}, Yp = Mp({
  baseStyle: Vp,
  sizes: Hp,
  variants: H.variants,
  defaultProps: H.defaultProps
}), kn = A("skeleton-start-color"), En = A("skeleton-end-color"), Up = {
  [kn.variable]: "colors.gray.100",
  [En.variable]: "colors.gray.400",
  _dark: {
    [kn.variable]: "colors.gray.800",
    [En.variable]: "colors.gray.600"
  },
  background: kn.reference,
  borderColor: En.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, Gp = {
  baseStyle: Up
}, $n = A("skip-link-bg"), qp = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [$n.variable]: "colors.white",
    _dark: {
      [$n.variable]: "colors.gray.700"
    },
    bg: $n.reference
  }
}, Xp = {
  baseStyle: qp
}, { defineMultiStyleConfig: Kp, definePartsStyle: Qa } = Q(Ou.keys), Wt = A("slider-thumb-size"), Vt = A("slider-track-size"), dr = A("slider-bg"), Jp = (e) => {
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
    ...yo({
      orientation: r,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, Qp = (e) => ({
  ...yo({
    orientation: e.orientation,
    horizontal: { h: Vt.reference },
    vertical: { w: Vt.reference }
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
}), Zp = (e) => {
  const { orientation: r } = e;
  return {
    ...yo({
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
    w: Wt.reference,
    h: Wt.reference,
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
}, eb = (e) => {
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
}, rb = Qa((e) => ({
  container: Jp(e),
  track: Qp(e),
  thumb: Zp(e),
  filledTrack: eb(e)
})), tb = Qa({
  container: {
    [Wt.variable]: "sizes.4",
    [Vt.variable]: "sizes.1"
  }
}), ab = Qa({
  container: {
    [Wt.variable]: "sizes.3.5",
    [Vt.variable]: "sizes.1"
  }
}), nb = Qa({
  container: {
    [Wt.variable]: "sizes.2.5",
    [Vt.variable]: "sizes.0.5"
  }
}), ob = {
  lg: tb,
  md: ab,
  sm: nb
}, ib = Kp({
  baseStyle: rb,
  sizes: ob,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), yr = le("spinner-size"), sb = {
  width: [yr.reference],
  height: [yr.reference]
}, lb = {
  xs: {
    [yr.variable]: "sizes.3"
  },
  sm: {
    [yr.variable]: "sizes.4"
  },
  md: {
    [yr.variable]: "sizes.6"
  },
  lg: {
    [yr.variable]: "sizes.8"
  },
  xl: {
    [yr.variable]: "sizes.12"
  }
}, cb = {
  baseStyle: sb,
  sizes: lb,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: db, definePartsStyle: ks } = Q(Pu.keys), ub = {
  fontWeight: "medium"
}, fb = {
  opacity: 0.8,
  marginBottom: "2"
}, pb = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, bb = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, hb = ks({
  container: {},
  label: ub,
  helpText: fb,
  number: pb,
  icon: bb
}), mb = {
  md: ks({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, gb = db({
  baseStyle: hb,
  sizes: mb,
  defaultProps: {
    size: "md"
  }
}), Cn = A("kbd-bg"), vb = {
  [Cn.variable]: "colors.gray.100",
  _dark: {
    [Cn.variable]: "colors.whiteAlpha.100"
  },
  bg: Cn.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, yb = {
  baseStyle: vb
}, Sb = {
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
}, xb = {
  baseStyle: Sb
}, { defineMultiStyleConfig: _b, definePartsStyle: wb } = Q(ku.keys), kb = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, Eb = wb({
  icon: kb
}), $b = _b({
  baseStyle: Eb
}), { defineMultiStyleConfig: Cb, definePartsStyle: Tb } = Q(Eu.keys), We = A("menu-bg"), Tn = A("menu-shadow"), Rb = {
  [We.variable]: "#fff",
  [Tn.variable]: "shadows.sm",
  _dark: {
    [We.variable]: "colors.gray.700",
    [Tn.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: We.reference,
  boxShadow: Tn.reference
}, Ab = {
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
}, zb = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, Ob = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, Pb = {
  opacity: 0.6
}, Fb = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, Db = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, jb = Tb({
  button: Db,
  list: Rb,
  item: Ab,
  groupTitle: zb,
  icon: Ob,
  command: Pb,
  divider: Fb
}), Bb = Cb({
  baseStyle: jb
}), { defineMultiStyleConfig: Ib, definePartsStyle: eo } = Q($u.keys), Rn = A("modal-bg"), An = A("modal-shadow"), Mb = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Nb = (e) => {
  const { isCentered: r, scrollBehavior: t } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: r ? "center" : "flex-start",
    overflow: t === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, Lb = (e) => {
  const { isCentered: r, scrollBehavior: t } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: r ? "auto" : "16",
    mx: r ? "auto" : void 0,
    zIndex: "modal",
    maxH: t === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Rn.variable]: "colors.white",
    [An.variable]: "shadows.lg",
    _dark: {
      [Rn.variable]: "colors.gray.700",
      [An.variable]: "shadows.dark-lg"
    },
    bg: Rn.reference,
    boxShadow: An.reference
  };
}, Wb = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Vb = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Hb = (e) => {
  const { scrollBehavior: r } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: r === "inside" ? "auto" : void 0
  };
}, Yb = {
  px: "6",
  py: "4"
}, Ub = eo((e) => ({
  overlay: Mb,
  dialogContainer: ye(Nb, e),
  dialog: ye(Lb, e),
  header: Wb,
  closeButton: Vb,
  body: ye(Hb, e),
  footer: Yb
}));
function je(e) {
  return eo(e === "full" ? {
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
var Gb = {
  xs: je("xs"),
  sm: je("sm"),
  md: je("md"),
  lg: je("lg"),
  xl: je("xl"),
  "2xl": je("2xl"),
  "3xl": je("3xl"),
  "4xl": je("4xl"),
  "5xl": je("5xl"),
  "6xl": je("6xl"),
  full: je("full")
}, qb = Ib({
  baseStyle: Ub,
  sizes: Gb,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: Xb, definePartsStyle: Es } = Q(Cu.keys), xo = le("number-input-stepper-width"), $s = le("number-input-input-padding"), Kb = Je(xo).add("0.5rem").toString(), zn = le("number-input-bg"), On = le("number-input-color"), Pn = le("number-input-border-color"), Jb = {
  [xo.variable]: "sizes.6",
  [$s.variable]: Kb
}, Qb = (e) => {
  var r, t;
  return (t = (r = ye(H.baseStyle, e)) == null ? void 0 : r.field) != null ? t : {};
}, Zb = {
  width: xo.reference
}, eh = {
  borderStart: "1px solid",
  borderStartColor: Pn.reference,
  color: On.reference,
  bg: zn.reference,
  [On.variable]: "colors.chakra-body-text",
  [Pn.variable]: "colors.chakra-border-color",
  _dark: {
    [On.variable]: "colors.whiteAlpha.800",
    [Pn.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [zn.variable]: "colors.gray.200",
    _dark: {
      [zn.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, rh = Es((e) => {
  var r;
  return {
    root: Jb,
    field: (r = ye(Qb, e)) != null ? r : {},
    stepperGroup: Zb,
    stepper: eh
  };
});
function ha(e) {
  var r, t, a;
  const n = (r = H.sizes) == null ? void 0 : r[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, l = (a = (t = n.field) == null ? void 0 : t.fontSize) != null ? a : "md", u = ys.fontSizes[l];
  return Es({
    field: {
      ...n.field,
      paddingInlineEnd: $s.reference,
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
var th = {
  xs: ha("xs"),
  sm: ha("sm"),
  md: ha("md"),
  lg: ha("lg")
}, ah = Xb({
  baseStyle: rh,
  sizes: th,
  variants: H.variants,
  defaultProps: H.defaultProps
}), Pi, nh = {
  ...(Pi = H.baseStyle) == null ? void 0 : Pi.field,
  textAlign: "center"
}, oh = {
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
}, Fi, Di, ih = {
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
}, sh = {
  baseStyle: nh,
  sizes: oh,
  variants: ih,
  defaultProps: H.defaultProps
}, { defineMultiStyleConfig: lh, definePartsStyle: ch } = Q(Tu.keys), ma = le("popper-bg"), dh = le("popper-arrow-bg"), ji = le("popper-arrow-shadow-color"), uh = { zIndex: 10 }, fh = {
  [ma.variable]: "colors.white",
  bg: ma.reference,
  [dh.variable]: ma.reference,
  [ji.variable]: "colors.gray.200",
  _dark: {
    [ma.variable]: "colors.gray.700",
    [ji.variable]: "colors.whiteAlpha.300"
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
}, ph = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, bh = {
  px: 3,
  py: 2
}, hh = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, mh = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, gh = ch({
  popper: uh,
  content: fh,
  header: ph,
  body: bh,
  footer: hh,
  closeButton: mh
}), vh = lh({
  baseStyle: gh
}), { definePartsStyle: ro, defineMultiStyleConfig: yh } = Q(yu.keys), Fn = A("drawer-bg"), Dn = A("drawer-box-shadow");
function Nr(e) {
  return ro(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var Sh = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, xh = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, _h = (e) => {
  const { isFullHeight: r } = e;
  return {
    ...r && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [Fn.variable]: "colors.white",
    [Dn.variable]: "shadows.lg",
    _dark: {
      [Fn.variable]: "colors.gray.700",
      [Dn.variable]: "shadows.dark-lg"
    },
    bg: Fn.reference,
    boxShadow: Dn.reference
  };
}, wh = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, kh = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Eh = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, $h = {
  px: "6",
  py: "4"
}, Ch = ro((e) => ({
  overlay: Sh,
  dialogContainer: xh,
  dialog: ye(_h, e),
  header: wh,
  closeButton: kh,
  body: Eh,
  footer: $h
})), Th = {
  xs: Nr("xs"),
  sm: Nr("md"),
  md: Nr("lg"),
  lg: Nr("2xl"),
  xl: Nr("4xl"),
  full: Nr("full")
}, Rh = yh({
  baseStyle: Ch,
  sizes: Th,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: Ah, defineMultiStyleConfig: zh } = Q(Su.keys), Oh = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, Ph = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Fh = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, Dh = Ah({
  preview: Oh,
  input: Ph,
  textarea: Fh
}), jh = zh({
  baseStyle: Dh
}), { definePartsStyle: Bh, defineMultiStyleConfig: Ih } = Q(xu.keys), Jr = A("form-control-color"), Mh = {
  marginStart: "1",
  [Jr.variable]: "colors.red.500",
  _dark: {
    [Jr.variable]: "colors.red.300"
  },
  color: Jr.reference
}, Nh = {
  mt: "2",
  [Jr.variable]: "colors.gray.600",
  _dark: {
    [Jr.variable]: "colors.whiteAlpha.600"
  },
  color: Jr.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, Lh = Bh({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: Mh,
  helperText: Nh
}), Wh = Ih({
  baseStyle: Lh
}), { definePartsStyle: Vh, defineMultiStyleConfig: Hh } = Q(_u.keys), Qr = A("form-error-color"), Yh = {
  [Qr.variable]: "colors.red.500",
  _dark: {
    [Qr.variable]: "colors.red.300"
  },
  color: Qr.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, Uh = {
  marginEnd: "0.5em",
  [Qr.variable]: "colors.red.500",
  _dark: {
    [Qr.variable]: "colors.red.300"
  },
  color: Qr.reference
}, Gh = Vh({
  text: Yh,
  icon: Uh
}), qh = Hh({
  baseStyle: Gh
}), Xh = {
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
}, Kh = {
  baseStyle: Xh
}, Jh = {
  fontFamily: "heading",
  fontWeight: "bold"
}, Qh = {
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
}, Zh = {
  baseStyle: Jh,
  sizes: Qh,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: em, definePartsStyle: rm } = Q(gu.keys), jn = A("breadcrumb-link-decor"), tm = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: jn.reference,
  [jn.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [jn.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, am = rm({
  link: tm
}), nm = em({
  baseStyle: am
}), om = {
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
}, Cs = (e) => {
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
}, im = (e) => {
  const { colorScheme: r } = e, t = R("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: r === "gray" ? t : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...ye(Cs, e)
  };
}, sm = {
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
}, lm = (e) => {
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
  } = (r = sm[t]) != null ? r : {}, u = R(a, `${t}.200`)(e);
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
}, cm = (e) => {
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
}, dm = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, um = {
  ghost: Cs,
  outline: im,
  solid: lm,
  link: cm,
  unstyled: dm
}, fm = {
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
}, pm = {
  baseStyle: om,
  variants: um,
  sizes: fm,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: $r, defineMultiStyleConfig: bm } = Q(Iu.keys), Na = A("card-bg"), Ze = A("card-padding"), Ts = A("card-shadow"), Ra = A("card-radius"), Rs = A("card-border-width", "0"), As = A("card-border-color"), hm = $r({
  container: {
    [Na.variable]: "colors.chakra-body-bg",
    backgroundColor: Na.reference,
    boxShadow: Ts.reference,
    borderRadius: Ra.reference,
    color: "chakra-body-text",
    borderWidth: Rs.reference,
    borderColor: As.reference
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
}), mm = {
  sm: $r({
    container: {
      [Ra.variable]: "radii.base",
      [Ze.variable]: "space.3"
    }
  }),
  md: $r({
    container: {
      [Ra.variable]: "radii.md",
      [Ze.variable]: "space.5"
    }
  }),
  lg: $r({
    container: {
      [Ra.variable]: "radii.xl",
      [Ze.variable]: "space.7"
    }
  })
}, gm = {
  elevated: $r({
    container: {
      [Ts.variable]: "shadows.base",
      _dark: {
        [Na.variable]: "colors.gray.700"
      }
    }
  }),
  outline: $r({
    container: {
      [Rs.variable]: "1px",
      [As.variable]: "colors.chakra-border-color"
    }
  }),
  filled: $r({
    container: {
      [Na.variable]: "colors.chakra-subtle-bg"
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
}, vm = bm({
  baseStyle: hm,
  variants: gm,
  sizes: mm,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), Pt = le("close-button-size"), xt = le("close-button-bg"), ym = {
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
    [xt.variable]: "colors.blackAlpha.100",
    _dark: {
      [xt.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [xt.variable]: "colors.blackAlpha.200",
    _dark: {
      [xt.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: xt.reference
}, Sm = {
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
}, xm = {
  baseStyle: ym,
  sizes: Sm,
  defaultProps: {
    size: "md"
  }
}, { variants: _m, defaultProps: wm } = zt, km = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: ie.bg.reference,
  color: ie.color.reference,
  boxShadow: ie.shadow.reference
}, Em = {
  baseStyle: km,
  variants: _m,
  defaultProps: wm
}, $m = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, Cm = {
  baseStyle: $m
}, Tm = {
  opacity: 0.6,
  borderColor: "inherit"
}, Rm = {
  borderStyle: "solid"
}, Am = {
  borderStyle: "dashed"
}, zm = {
  solid: Rm,
  dashed: Am
}, Om = {
  baseStyle: Tm,
  variants: zm,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: Pm, defineMultiStyleConfig: Fm } = Q(bu.keys), Dm = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, jm = {
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
}, Bm = {
  pt: "2",
  px: "4",
  pb: "5"
}, Im = {
  fontSize: "1.25em"
}, Mm = Pm({
  container: Dm,
  button: jm,
  panel: Bm,
  icon: Im
}), Nm = Fm({ baseStyle: Mm }), { definePartsStyle: Xt, defineMultiStyleConfig: Lm } = Q(hu.keys), $e = A("alert-fg"), er = A("alert-bg"), Wm = Xt({
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
function _o(e) {
  const { theme: r, colorScheme: t } = e, a = tt(`${t}.200`, 0.16)(r);
  return {
    light: `colors.${t}.100`,
    dark: a
  };
}
var Vm = Xt((e) => {
  const { colorScheme: r } = e, t = _o(e);
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
}), Hm = Xt((e) => {
  const { colorScheme: r } = e, t = _o(e);
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
}), Ym = Xt((e) => {
  const { colorScheme: r } = e, t = _o(e);
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
}), Um = Xt((e) => {
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
}), Gm = {
  subtle: Vm,
  "left-accent": Hm,
  "top-accent": Ym,
  solid: Um
}, qm = Lm({
  baseStyle: Wm,
  variants: Gm,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: zs, defineMultiStyleConfig: Xm } = Q(mu.keys), Zr = A("avatar-border-color"), Ft = A("avatar-bg"), Ht = A("avatar-font-size"), at = A("avatar-size"), Km = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: Zr.reference,
  [Zr.variable]: "white",
  _dark: {
    [Zr.variable]: "colors.gray.800"
  }
}, Jm = {
  bg: Ft.reference,
  fontSize: Ht.reference,
  width: at.reference,
  height: at.reference,
  lineHeight: "1",
  [Ft.variable]: "colors.gray.200",
  _dark: {
    [Ft.variable]: "colors.whiteAlpha.400"
  }
}, Qm = (e) => {
  const { name: r, theme: t } = e, a = r ? nf({ string: r }) : "colors.gray.400", n = tf(a)(t);
  let i = "white";
  return n || (i = "gray.800"), {
    bg: Ft.reference,
    fontSize: Ht.reference,
    color: i,
    borderColor: Zr.reference,
    verticalAlign: "top",
    width: at.reference,
    height: at.reference,
    "&:not([data-loaded])": {
      [Ft.variable]: a
    },
    [Zr.variable]: "colors.white",
    _dark: {
      [Zr.variable]: "colors.gray.800"
    }
  };
}, Zm = {
  fontSize: Ht.reference,
  lineHeight: "1"
}, e0 = zs((e) => ({
  badge: ye(Km, e),
  excessLabel: ye(Jm, e),
  container: ye(Qm, e),
  label: Zm
}));
function cr(e) {
  const r = e !== "100%" ? xs[e] : void 0;
  return zs({
    container: {
      [at.variable]: r ?? e,
      [Ht.variable]: `calc(${r ?? e} / 2.5)`
    },
    excessLabel: {
      [at.variable]: r ?? e,
      [Ht.variable]: `calc(${r ?? e} / 2.5)`
    }
  });
}
var r0 = {
  "2xs": cr(4),
  xs: cr(6),
  sm: cr(8),
  md: cr(12),
  lg: cr(16),
  xl: cr(24),
  "2xl": cr(32),
  full: cr("100%")
}, t0 = Xm({
  baseStyle: e0,
  sizes: r0,
  defaultProps: {
    size: "md"
  }
}), a0 = {
  Accordion: Nm,
  Alert: qm,
  Avatar: t0,
  Badge: zt,
  Breadcrumb: nm,
  Button: pm,
  Checkbox: Ma,
  CloseButton: xm,
  Code: Em,
  Container: Cm,
  Divider: Om,
  Drawer: Rh,
  Editable: jh,
  Form: Wh,
  FormError: qh,
  FormLabel: Kh,
  Heading: Zh,
  Input: H,
  Kbd: yb,
  Link: xb,
  List: $b,
  Menu: Bb,
  Modal: qb,
  NumberInput: ah,
  PinInput: sh,
  Popover: vh,
  Progress: Ep,
  Radio: Ip,
  Select: Yp,
  Skeleton: Gp,
  SkipLink: Xp,
  Slider: ib,
  Spinner: cb,
  Stat: gb,
  Switch: xf,
  Table: Tf,
  Tabs: Vf,
  Tag: tp,
  Textarea: bp,
  Tooltip: gp,
  Card: vm,
  Stepper: pu
}, n0 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, o0 = {
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
}, i0 = "ltr", s0 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, l0 = {
  semanticTokens: n0,
  direction: i0,
  ...du,
  components: a0,
  styles: o0,
  config: s0
};
function Tt(e) {
  return typeof e == "function";
}
function c0(...e) {
  return (r) => e.reduce((t, a) => a(t), r);
}
var d0 = (e) => function(...t) {
  let a = [...t], n = t[t.length - 1];
  return Nd(n) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  a.length > 1 ? a = a.slice(0, a.length - 1) : n = e, c0(
    ...a.map(
      (i) => (l) => Tt(i) ? i(l) : f0(l, i)
    )
  )(n);
}, u0 = d0(l0);
function f0(...e) {
  return _r({}, ...e, Os);
}
function Os(e, r, t, a) {
  if ((Tt(e) || Tt(r)) && Object.prototype.hasOwnProperty.call(a, t))
    return (...n) => {
      const i = Tt(e) ? e(...n) : e, l = Tt(r) ? r(...n) : r;
      return _r({}, i, l, Os);
    };
}
function Ps(e, r) {
  const t = {};
  return Object.keys(e).forEach((a) => {
    const n = e[a];
    r(n, a, e) && (t[a] = n);
  }), t;
}
var p0 = (e) => Ps(e, (r) => r != null);
function b0(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function h0(e, ...r) {
  return b0(e) ? e(...r) : e;
}
var m0 = /* @__PURE__ */ new Set([
  ...Rd,
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
]), g0 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function v0(e) {
  return g0.has(e) || !m0.has(e);
}
function y0(e, ...r) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const t = { ...e };
  for (const a of r)
    if (a != null)
      for (const n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (n in t && delete t[n], t[n] = a[n]);
  return t;
}
var S0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, x0 = /* @__PURE__ */ os(
  function(e) {
    return S0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), _0 = x0, w0 = function(r) {
  return r !== "theme";
}, Bi = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? _0 : w0;
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
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, k0 = function(r) {
  var t = r.cache, a = r.serialized, n = r.isStringTag;
  return Ga(t, a, n), po(function() {
    return qa(t, a, n);
  }), null;
}, E0 = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var a = r.__emotion_real === r, n = a && r.__emotion_base || r, i, l;
  t !== void 0 && (i = t.label, l = t.target);
  var u = Ii(r, t, a), p = u || Bi(n), h = !p("as");
  return function() {
    var b = arguments, y = a && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && y.push("label:" + i + ";"), b[0] == null || b[0].raw === void 0)
      y.push.apply(y, b);
    else {
      process.env.NODE_ENV !== "production" && b[0][0] === void 0 && console.error(Mi), y.push(b[0][0]);
      for (var g = b.length, E = 1; E < g; E++)
        process.env.NODE_ENV !== "production" && b[0][E] === void 0 && console.error(Mi), y.push(b[E], b[0][E]);
    }
    var x = Xa(function(m, _, w) {
      var C = h && m.as || n, O = "", M = [], S = m;
      if (m.theme == null) {
        S = {};
        for (var K in m)
          S[K] = m[K];
        S.theme = oe.useContext(qt);
      }
      typeof m.className == "string" ? O = uo(_.registered, M, m.className) : m.className != null && (O = m.className + " ");
      var F = rt(y.concat(M), _.registered, S);
      O += _.key + "-" + F.name, l !== void 0 && (O += " " + l);
      var pe = h && u === void 0 ? Bi(C) : p, _e = {};
      for (var Ce in m)
        h && Ce === "as" || // $FlowFixMe
        pe(Ce) && (_e[Ce] = m[Ce]);
      return _e.className = O, _e.ref = w, /* @__PURE__ */ oe.createElement(oe.Fragment, null, /* @__PURE__ */ oe.createElement(k0, {
        cache: _,
        serialized: F,
        isStringTag: typeof C == "string"
      }), /* @__PURE__ */ oe.createElement(C, _e));
    });
    return x.displayName = i !== void 0 ? i : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", x.defaultProps = r.defaultProps, x.__emotion_real = x, x.__emotion_base = n, x.__emotion_styles = y, x.__emotion_forwardProp = u, Object.defineProperty(x, "toString", {
      value: function() {
        return l === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + l;
      }
    }), x.withComponent = function(m, _) {
      return e(m, Hn({}, t, _, {
        shouldForwardProp: Ii(x, _, !0)
      })).apply(void 0, y);
    }, x;
  };
}, $0 = [
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
], La = E0.bind();
$0.forEach(function(e) {
  La[e] = La(e);
});
var Ni, C0 = (Ni = La.default) != null ? Ni : La, T0 = ({ baseStyle: e }) => (r) => {
  const { theme: t, css: a, __css: n, sx: i, ...l } = r, u = Ps(l, (y, g) => zd(g)), p = h0(e, r), h = y0(
    {},
    n,
    p,
    p0(u),
    i
  ), b = Id(h)(r.theme);
  return a ? [b, a] : b;
};
function Bn(e, r) {
  const { baseStyle: t, ...a } = r ?? {};
  a.shouldForwardProp || (a.shouldForwardProp = v0);
  const n = T0({ baseStyle: t }), i = C0(
    e,
    a
  )(n);
  return Pa.forwardRef(function(p, h) {
    const { colorMode: b, forced: y } = Mc();
    return Pa.createElement(i, {
      ref: h,
      "data-theme": y ? b : void 0,
      ...p
    });
  });
}
function R0() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Bn, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(r, t, a) {
      return Bn(...a);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(r, t) {
      return e.has(t) || e.set(t, Bn(t)), e.get(t);
    }
  });
}
var A0 = R0();
function Fs(e) {
  return Xi(e);
}
var qr = A0("div");
qr.displayName = "Box";
var Ds = Fs(function(r, t) {
  const { size: a, centerContent: n = !0, ...i } = r, l = n ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ xr.jsx(
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
Ds.displayName = "Square";
var z0 = Fs(function(r, t) {
  const { size: a, ...n } = r;
  return /* @__PURE__ */ xr.jsx(Ds, { size: a, ref: t, borderRadius: "9999px", ...n });
});
z0.displayName = "Circle";
const O0 = {
  global: (e) => ({
    html: {
      fontSize: "10px",
      [`@media only screen and (max-width: ${e.theme.breakpoints.lg})`]: {
        fontSize: "8px"
      }
    },
    "body, *": {
      fontFamily: "Poppins,sans-serif;",
      margin: "0",
      boxSizing: "border-box",
      padding: "0",
      fontSize: "100%"
    },
    "html, body, #root": {
      width: "100%",
      height: "100%;"
    }
  })
}, P0 = {
  darcula: {
    800: "#15171e",
    700: "#1C1E28",
    650: "#202329",
    600: "#23242d",
    580: "#26292f",
    550: "#282c34",
    510: "#252930",
    500: "#2c2e3a",
    400: "#323441",
    300: "#282935"
  },
  brand: {
    600: "#3f97f0",
    500: "#52a8ff",
    400: "#64abf3",
    300: "#80b8f1",
    200: "#a4cdf7",
    100: "#bad7f5"
  },
  gray: {
    800: "#23253f",
    600: "#23253fb3",
    400: "#3F4057",
    350: "#6C757D",
    300: "#3f4057b3",
    250: "#656678",
    200: "#a9a9a9",
    180: "#ADB5BD",
    150: "#d7d5d5",
    100: "#E6E6E6",
    80: "#fbfbfd",
    50: "#f2f4f5"
  }
};
class F0 {
  constructor(r) {
    vn(this, "key");
    vn(this, "value");
    this.key = r.key, this.value = r.value;
  }
}
const D0 = {
  localStorageSupported: typeof window < "u" && typeof window.localStorage < "u" && window.localStorage !== null,
  // add value to storage
  set(e, r) {
    this.localStorageSupported && localStorage.setItem(e, JSON.stringify(r));
  },
  // get all values from storage (all items)
  getAllItems() {
    const e = new Array();
    for (let r = 0; r < localStorage.length; r++) {
      const t = localStorage.key(r);
      if (t !== null) {
        const a = localStorage.getItem(t);
        e.push(
          new F0({
            key: t,
            value: a
          })
        );
      }
    }
    return e;
  },
  // get only all values from localStorage
  getAllValues() {
    const e = new Array();
    for (let r = 0; r < localStorage.length; r++) {
      const t = localStorage.key(r);
      if (t !== null) {
        const a = localStorage.getItem(t);
        e.push(a);
      }
    }
    return e;
  },
  // get one item by key from storage
  get(e) {
    return this.localStorageSupported ? localStorage.getItem(e) : null;
  },
  // remove value from storage
  remove(e) {
    this.localStorageSupported && localStorage.removeItem(e);
  },
  // clear storage (remove all items from it)
  clear() {
    this.localStorageSupported && localStorage.clear();
  }
}, j0 = {
  shadows: {
    md: "0 0.9rem 3.4rem -0.4rem rgba(0, 0, 0, 0.05)"
  },
  colors: P0,
  config: {
    initialColorMode: D0.get("chakra-ui-color-mode") || "system",
    useSystemColorMode: !1
  }
}, Aa = {
  xs: "481px",
  sm: "577px",
  md: "768px",
  lg: "962px",
  xl: "1200px",
  "2xl": "1440px"
}, B0 = {
  ...j0,
  styles: O0,
  breakpoints: Aa
};
u0(B0);
const I0 = /(^\{|\}$)/g, wg = "0px", M0 = "1", kg = "100%", to = "1fr", In = "1fr", Yt = "100%", Ut = "100%", Eg = "row", N0 = "flex-start", L0 = "flex-start", $g = "1fr / 1fr", js = 0, Cg = "gray", za = 100, Wa = "grid_1", Tg = {
  MAX: 20,
  MIN: 0,
  DEFAULT: 10
}, Bs = {
  dark: {
    main: "#282c34",
    gradient: "#2c303a"
  },
  light: {
    main: "#f1f1f1",
    gradient: "#ececec"
  }
}, Is = {
  mobile: `${Dt(Aa.sm) - 1}px`,
  tablet: `${Dt(Aa.lg) - 1}px`,
  desktop: Aa.lg
}, Rg = {
  MAX: 1e3,
  MIN: 0,
  DEFAULT: js
}, Oa = {
  direction: jt.ROW,
  gridGap: M0,
  repeatCount: js,
  className: "",
  margin: "0",
  w: Ut,
  h: Yt,
  alignItems: L0,
  justifyContent: N0,
  withOpacity: !1,
  styles: "{}"
}, W0 = {
  margin: "0",
  w: Ut,
  h: Yt,
  r: "0px",
  skeletonW: za
}, Ag = {
  [ae.FN]: "",
  [ae.AUTO]: "",
  [ae.PERCENT]: "100",
  [ae.PX]: "100",
  [ae.FR]: "1",
  [ae.REM]: "1",
  [ae.VH]: "100",
  [ae.VW]: "100",
  [ae.PC]: "1",
  [ae.CM]: "1",
  [ae.MM]: "100",
  [ae.IN]: "1",
  [ae.PT]: "1",
  [ae.CH]: "1",
  [ae.EM]: "1",
  [ae.V_MIN]: "100",
  [ae.V_MAX]: "100"
}, V0 = {
  [Bt.SLIDE]: {
    from: { left: "-100%" },
    to: { left: "100%" }
  },
  [Bt.FADE]: {
    from: { opacity: "0" },
    to: { opacity: "1" }
  }
};
var Ms = {}, Li = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, H0 = /\n/g, Y0 = /^\s*/, U0 = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, G0 = /^:\s*/, q0 = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, X0 = /^[;\s]*/, K0 = /^\s+|\s+$/g, J0 = `
`, Wi = "/", Vi = "*", Sr = "", Q0 = "comment", Z0 = "declaration", eg = function(e, r) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  r = r || {};
  var t = 1, a = 1;
  function n(x) {
    var m = x.match(H0);
    m && (t += m.length);
    var _ = x.lastIndexOf(J0);
    a = ~_ ? x.length - _ : a + x.length;
  }
  function i() {
    var x = { line: t, column: a };
    return function(m) {
      return m.position = new l(x), h(), m;
    };
  }
  function l(x) {
    this.start = x, this.end = { line: t, column: a }, this.source = r.source;
  }
  l.prototype.content = e;
  function u(x) {
    var m = new Error(
      r.source + ":" + t + ":" + a + ": " + x
    );
    if (m.reason = x, m.filename = r.source, m.line = t, m.column = a, m.source = e, !r.silent) throw m;
  }
  function p(x) {
    var m = x.exec(e);
    if (m) {
      var _ = m[0];
      return n(_), e = e.slice(_.length), m;
    }
  }
  function h() {
    p(Y0);
  }
  function b(x) {
    var m;
    for (x = x || []; m = y(); )
      m !== !1 && x.push(m);
    return x;
  }
  function y() {
    var x = i();
    if (!(Wi != e.charAt(0) || Vi != e.charAt(1))) {
      for (var m = 2; Sr != e.charAt(m) && (Vi != e.charAt(m) || Wi != e.charAt(m + 1)); )
        ++m;
      if (m += 2, Sr === e.charAt(m - 1))
        return u("End of comment missing");
      var _ = e.slice(2, m - 2);
      return a += 2, n(_), e = e.slice(m), a += 2, x({
        type: Q0,
        comment: _
      });
    }
  }
  function g() {
    var x = i(), m = p(U0);
    if (m) {
      if (y(), !p(G0)) return u("property missing ':'");
      var _ = p(q0), w = x({
        type: Z0,
        property: Hi(m[0].replace(Li, Sr)),
        value: _ ? Hi(_[0].replace(Li, Sr)) : Sr
      });
      return p(X0), w;
    }
  }
  function E() {
    var x = [];
    b(x);
    for (var m; m = g(); )
      m !== !1 && (x.push(m), b(x));
    return x;
  }
  return h(), E();
};
function Hi(e) {
  return e ? e.replace(K0, Sr) : Sr;
}
var rg = Lr && Lr.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(Ms, "__esModule", { value: !0 });
var tg = rg(eg);
function ag(e, r) {
  var t = null;
  if (!e || typeof e != "string")
    return t;
  var a = (0, tg.default)(e), n = typeof r == "function";
  return a.forEach(function(i) {
    if (i.type === "declaration") {
      var l = i.property, u = i.value;
      n ? r(l, u, i) : u && (t = t || {}, t[l] = u);
    }
  }), t;
}
var Yi = Ms.default = ag;
const ng = Yi.default || Yi, og = (e) => ({
  mobile: { ...e },
  tablet: { ...e }
}), Mn = (e, r, t) => r !== "desktop" && r && Object.hasOwn(e, "responsive") ? {
  ...ao(
    e.responsive[r] ?? {},
    t
  ),
  ...Object.hasOwn(e, "children") && { children: e.children },
  ...Object.hasOwn(e, "skeletons") && {
    skeletons: e.skeletons
  }
} : ao(e, t), zg = () => Object.keys(Oa).filter((e) => isNaN(Number(e))).reduce(
  (e, r) => (e[r] = Oa[r], e),
  { responsive: og(Oa) }
), Ns = (e) => {
  var r;
  return ((r = e.replace(/\[|\]/g, "")) == null ? void 0 : r.split(",")) || [];
}, Og = (e, r, t) => {
  let [a, n, i, l] = Ns(r);
  switch (e) {
    case _t.TOP:
      a = t;
      break;
    case _t.RIGHT:
      n = t;
      break;
    case _t.BOTTOM:
      i = t;
      break;
    case _t.LEFT:
      l = t;
      break;
  }
  return [a, n, i, l];
}, Pg = (e) => {
  try {
    if (typeof e == "function")
      return {
        value: "function...",
        unit: ae.FN
      };
    if (e === ae.AUTO)
      return {
        value: ae.AUTO,
        unit: ae.AUTO
      };
    const r = e.match(/^([\d.]+)([a-zA-Z%]+)$/);
    if (r)
      return {
        value: r[1],
        unit: r[2]
      };
    if (Object.values(ae).includes(e))
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
}, ig = (e) => !isNaN(parseFloat(String(e))) && isFinite(Number(e)), Ui = (e) => (() => {
  let [t, a, n, i] = Ns(e);
  return t && !a && !n && !i ? (a = t, n = t, i = t) : (t || (t = n || "0"), a || (a = i || "0"), n || (n = t || "0"), i || (i = a || "0")), [t, a, n, i].reduce((l, u) => (l += ig(u) ? u + "px " : u + " ", l), "");
})(), sg = (e, r) => e.reduce((t, a, n) => {
  if (typeof a.w == "function") {
    const l = a.w();
    t += (Array.isArray(a) ? to : l) + " ", r(n, "w", l);
  } else
    t += Array.isArray(a) ? to : (a.w === Ut ? "1fr" : a.w) + " ";
  return t;
}, "1fr / "), lg = (e, r, t) => e.reduce((a, n, i) => {
  if (typeof n.h == "function") {
    const u = n.h();
    a += (r === "center" ? In : u) + " ", t(i, "h", u);
  } else
    a += (r === "center" || !n.h || n.h === Yt ? In : n.h) + " ";
  return a;
}, "") + " / 1fr", Gi = (e, r, t, a) => e > 0 && a > 0 ? {
  isRepeated: !0,
  key: r + "_repeated_" + a,
  item: t
} : { key: r + "_" + (a + 1), item: t }, ao = (e, r) => {
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
    r ? W0 : Oa
  );
}, Va = (e, r) => r > 0 && e[0] ? [].constructor(r).fill(e[0]) : e, qi = (e, r, t, a) => (r || t) > 0 && a ? 1 - 1 / (r || t) * e : 1, cg = ({
  grid: e,
  hasChildren: r,
  skeletons: t,
  children: a,
  repeatCount: n,
  reservedProps: i,
  keyLevel: l
}) => e.direction === jt.ROW ? sg(
  (r ? a : Va(t, n)).map(({ w: u = to }) => ({ w: u })),
  (u, p, h) => {
    i[`${l}_${u + 1}`] || (i[`${l}_${u + 1}`] = {}), i[`${l}_${u + 1}`][p] = h;
  }
) : lg(
  r ? a : Va(t, n),
  e.alignItems,
  (u, p, h) => {
    i[`${l}_${u + 1}`] || (i[`${l}_${u + 1}`] = {}), i[`${l}_${u + 1}`][p] = h;
  }
), Fg = (e, r) => {
  if (!r.length) return 1;
  const t = r.join("").split(e).filter((n) => n !== "").map((n) => +n), a = Math.max(...t);
  for (let n = 1; n <= a; n++)
    if (!t.includes(n))
      return n;
  return a + 1;
}, dg = (e, r) => !(e != null && e.includes("repeated")) && !(r != null && r.includes("repeated")), Dg = ({
  keyLevel: e,
  highlightedNode: r,
  parent: t,
  isDark: a,
  hasChildren: n
}) => e === r && dg(e, t) ? {
  boxShadow: "0px 0px 1px 1px var(--chakra-colors-brand-500)"
} : t === r ? {
  boxShadow: `0px 0px 1px 1px inset ${a ? "#323441" : "#e6e6e6"}`
} : n ? {} : {
  boxShadow: `0px 0px 0px 1px inset ${a ? "rgba(50,52,65,0.24)" : "rgba(230,230,230,0.27)"}`
}, jg = (e, r, t) => {
  if (e) {
    const a = e.getAttribute("data-key") || "", n = a.split("_").filter(no);
    if (a === r) {
      if (a === Wa) return;
      t([...n].slice(0, n.length - 1).join("_"));
      return;
    }
    if (r.indexOf(a) > -1) {
      t(a);
      return;
    }
    const i = r.split("_").filter(no), l = (p) => p.length === i.length && [...p].slice(0, p.length - 1).join("_") === [...i].slice(0, i.length - 1).join("_"), u = (p) => [...p].slice(0, p.length - 1).join("_") === [...i].join("_");
    if (u(n) || l(n)) {
      t(a);
      return;
    }
    for (let p = n.length - 1; p > 1; p--) {
      const h = [...n].splice(0, p);
      if (l(h) || u(h)) {
        t(h.join("_"));
        return;
      }
      if (h.join("_") === r) {
        t(h.concat(n[p]).join("_"));
        return;
      }
    }
    t(Wa);
  }
}, Bg = (e) => {
  if (e === Wa) return e;
  const r = e.split("_").filter(no);
  return r.pop(), r.join("_");
}, Ig = (e) => {
  let r, t;
  document.createRange ? (r = document.createRange(), r.selectNodeContents(e), t = window.getSelection(), t && (t.removeAllRanges(), t.addRange(r), document.execCommand("copy"), t.removeAllRanges())) : (r = document.body.createTextRange(), r.moveToElementText(e), r.select(), document.execCommand("copy"));
}, ga = (e) => e.indexOf("fr") > -1 ? "auto" : e, Mg = (e, r) => Object.hasOwn(r, e), no = (e) => e !== "skeleton", Ng = (e) => e.includes("skeleton"), Lg = (e) => {
  let r = e, t = r.hasAttribute("data-key");
  for (; !t; ) {
    if (r === document.body)
      return null;
    r = e.parentElement, t = r.hasAttribute("data-key");
  }
  return r;
}, Dt = (e) => Number(e.split("px")[0]), Wg = (e) => e.length > 1 && /^0/.test(e) ? e.replace(/^0/, "") : e, ug = (e) => {
  const r = e.replace(I0, "");
  return ng(r);
}, fg = (e) => {
  const r = {};
  return Object.keys(e).forEach((t) => {
    const a = t.replace(
      /-([a-z])/g,
      (n, i) => i.toUpperCase()
    );
    r[a] = e[t];
  }), r;
}, Ls = Ki({
  colorTheme: { ...Bs },
  breakpoints: { ...Is },
  skeletonAnimation: Bt.SLIDE
}), Vg = ({
  children: e,
  value: {
    isDark: r = !1,
    colorTheme: t = Bs,
    breakpoints: a = Is,
    skeletonAnimation: n = Bt.SLIDE
  }
}) => /* @__PURE__ */ xr.jsx(
  Ls.Provider,
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
function pg(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  e && e.addEventListener && e.addEventListener.apply(e, r);
}
function bg(e) {
  for (var r = [], t = 1; t < arguments.length; t++)
    r[t - 1] = arguments[t];
  e && e.removeEventListener && e.removeEventListener.apply(e, r);
}
var Nn = typeof window < "u", hg = function(e) {
  Ji(e, []);
}, mg = function(e) {
  var r = Qi(e);
  r.current = e, hg(function() {
    return function() {
      return r.current();
    };
  });
}, gg = function(e) {
  var r = Qi(0), t = xl(e), a = t[0], n = t[1], i = Zi(function(l) {
    cancelAnimationFrame(r.current), r.current = requestAnimationFrame(function() {
      n(l);
    });
  }, []);
  return mg(function() {
    cancelAnimationFrame(r.current);
  }), [a, i];
}, vg = function(e, r) {
  e === void 0 && (e = 1 / 0), r === void 0 && (r = 1 / 0);
  var t = gg({
    width: Nn ? window.innerWidth : e,
    height: Nn ? window.innerHeight : r
  }), a = t[0], n = t[1];
  return Ji(function() {
    if (Nn) {
      var i = function() {
        n({
          width: window.innerWidth,
          height: window.innerHeight
        });
      };
      return pg(window, "resize", i), function() {
        bg(window, "resize", i);
      };
    }
  }, []), a;
};
const yg = (e) => {
  const { width: r } = vg();
  return r <= Dt(e.mobile) ? "mobile" : r > Dt(e.mobile) && r <= Dt(e.tablet) ? "tablet" : "desktop";
}, Sg = () => {
  const e = oo(Ls);
  if (e === void 0)
    throw Error("You must run this hook inside ReactSkeletonProvider");
  return e;
}, Hg = _l(({ grid: e, styles: r }) => {
  const { colorTheme: t, isDark: a, skeletonAnimation: n, breakpoints: i } = Sg(), l = yg(i), u = a ? t[Ln.DARK] : t[Ln.LIGHT], p = wl(
    () => zc`
    ${V0[n]}
    `,
    [n]
  ), h = (g, E, x, m, _) => g.map(
    (w, C) => /* @__PURE__ */ xr.jsx(
      qr,
      {
        "data-key": w.key,
        style: {
          width: _ && x === jt.ROW ? Ut : ga(
            (typeof w.w == "function" ? w.w() : w.w).toString()
          ),
          height: _ && x === jt.COLUMN ? Yt : ga(
            (typeof w.h != "function" ? w.h : w.h()).toString()
          ),
          borderRadius: w.r || "0px",
          margin: Ui(w.margin || ""),
          backgroundColor: u.main,
          opacity: qi(
            C,
            E,
            g.length,
            m
          )
        },
        position: "relative",
        overflow: "hidden",
        children: /* @__PURE__ */ xr.jsx(
          qr,
          {
            display: "block",
            left: 0,
            position: "absolute",
            h: "full",
            animation: `${p} infinite 1s linear ${p === "fade" ? "alternate" : ""}`,
            top: 0,
            style: {
              width: `${w.skeletonW || za}px`,
              backgroundImage: `linear-gradient(
							90deg,
							${u.main} 0px,
							${u.gradient} ${(Number(w.skeletonW) || za) / 2}px,
							${u.main} ${w.skeletonW || za}px
						)`
            }
          }
        )
      },
      w.key
    )
  ), b = (g) => {
    try {
      if (g.replace(/\s/g, "") === "{}")
        throw Error("Empty state");
      const E = ug(g);
      if (E)
        return Object.keys(E).forEach((x) => {
          [
            "margin",
            "width",
            "height",
            "gap",
            "align-items",
            "justify-items"
          ].includes(x) && delete E[x];
        }), E;
    } catch {
      return {};
    }
  }, y = Zi(
    ({
      grid: g,
      dataKey: E,
      index: x,
      length: m,
      reservedPropsFromParent: _
    }) => {
      var Ue, be;
      const w = E, C = {
        parent: w,
        withOpacity: g.withOpacity
      }, O = [], M = [], S = (g.gridGap || 0) + "rem", K = Object.hasOwn(g, "children") && Array.isArray(g.children) && g.children.length > 0, F = Object.hasOwn(g, "skeletons") && Array.isArray(g.skeletons) && g.skeletons.length > 0, pe = g.repeatCount;
      pe > 0 && (C.repeatCount = pe), K && Va(g.children, pe).map(Gi.bind(null, pe, w)).forEach(({ key: ce, item: ge }) => {
        O.push({
          ...Mn(ge, l),
          key: ce
        });
      }), F && Va(g.skeletons, pe).map(Gi.bind(null, pe, w)).forEach(({ key: ce, item: ge }) => {
        M.push({
          ...Mn(ge, l, !0),
          key: ce
        });
      });
      const _e = cg({
        grid: g,
        hasChildren: K,
        children: O,
        skeletons: M,
        repeatCount: pe,
        reservedProps: C,
        keyLevel: w
      }), Ce = g.withOpacity, fr = b(g.styles) || {};
      return /* @__PURE__ */ xr.jsx(
        qr,
        {
          display: "grid",
          "data-key": w,
          style: {
            gap: S,
            margin: Ui(g.margin || ""),
            grid: _e,
            height: _ != null && _.parent ? Yt : ga(
              ((Ue = _ == null ? void 0 : _[w]) == null ? void 0 : Ue.h) ?? (typeof g.h == "function" ? g.h() : g.h)
            ),
            width: _ != null && _.parent ? Ut : ga(
              ((be = _ == null ? void 0 : _[w]) == null ? void 0 : be.w) ?? (typeof g.w == "function" ? g.w() : g.w)
            ),
            alignItems: g.alignItems,
            justifyContent: g.justifyContent,
            opacity: qi(
              x,
              _ == null ? void 0 : _.repeatCount,
              m,
              _ == null ? void 0 : _.withOpacity
            ),
            ...fg(fr)
          },
          className: g.className || "",
          children: K ? O.map(
            (ce, ge) => y({
              grid: ce,
              dataKey: ce.key,
              index: ge,
              length: O.length,
              reservedPropsFromParent: C
            })
          ) : F ? h(
            M,
            pe,
            g.direction,
            Ce,
            C.parent
          ) : null
        },
        w
      );
    },
    [e, u, p, l]
  );
  return /* @__PURE__ */ xr.jsx(qr, { style: r ?? {}, children: y({
    grid: Mn(
      ao(e),
      l
    ),
    dataKey: Wa,
    index: 0,
    length: 1
  }) });
});
export {
  kl as ALIGN_ITEMS,
  $l as COLOR_MODE,
  Ln as COLOR_MODES,
  Oa as CONTAINER_INITIAL_VALUES,
  L0 as DEFAULT_ALIGN_ITEMS_ALIGNMENT,
  Is as DEFAULT_BREAKPOINTS,
  Bs as DEFAULT_COLOR_THEMES,
  Eg as DEFAULT_DIRECTION_GRID_COLS,
  M0 as DEFAULT_GAP,
  In as DEFAULT_GRID_CONTAINER_HEIGHT,
  to as DEFAULT_GRID_CONTAINER_WIDTH,
  $g as DEFAULT_GRID_STYLE,
  Yt as DEFAULT_HEIGHT,
  N0 as DEFAULT_JUSTIFY_ALIGNMENT,
  wg as DEFAULT_RADIUS,
  js as DEFAULT_REPEAT_COUNT,
  za as DEFAULT_SKELETON_GRADIENT_WIDTH,
  kg as DEFAULT_SKELETON_WIDTH,
  Cg as DEFAULT_VARIANT,
  Ut as DEFAULT_WIDTH,
  jt as DIRECTION,
  El as JUSTIFY_CONTENT,
  _t as MARGIN_SIDES,
  Rg as REPEAT_COUNT_RANGE,
  Wa as ROOT_KEY,
  Vg as ReactSkeletonProvider,
  ae as SIZE_UNITS,
  Ag as SIZE_UNITS_INITIAL_VALUES,
  V0 as SKELETON_ANIMATIONS,
  Bt as SKELETON_ANIMATION_VARIANTS,
  W0 as SKELETON_INITIAL_VALUES,
  I0 as STYLE_PARSING_REGEXP,
  Hg as Skeleton,
  Tg as TREE_ELEMENTS_SPACING,
  ga as applicableValue,
  Wg as convertInitialZeroToValueItSelf,
  Ns as convertToArray,
  Ig as copyExecCommand,
  fg as cssToReactStyle,
  Dt as filterFromPx,
  no as filterFromSkeleton,
  Fg as findAbsentIndex,
  jg as findTrap,
  Dg as generateBorders,
  cg as generateCSSGridArea,
  zg as generateDefaultValues,
  sg as generateGridArea,
  lg as generateGridAreaAsColDirection,
  Ui as generateMargin,
  Mn as getAdaptiveData,
  Lg as getDirectParentWithDataKeyAttr,
  Bg as getParent,
  Mg as isClickedOnSkeleton,
  Ng as isSkeletonHighlighted,
  Va as itemsWithRepeat,
  Gi as mutateWithRepeated,
  Og as overrideSides,
  ug as parseStyleObject,
  ao as putInitialValuesIfNotExists,
  og as responsiveInstance,
  qi as setOpacity,
  Pg as valueWithPrefix
};
