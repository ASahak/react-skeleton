var Zs = Object.defineProperty;
var el = (e, r, t) => r in e ? Zs(e, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : e[r] = t;
var cn = (e, r, t) => el(e, typeof r != "symbol" ? r + "" : r, t);
import * as pe from "react";
import wa, { forwardRef as Ai, useContext as qn, createContext as Oi, memo as rl, useCallback as tl } from "react";
var yt = /* @__PURE__ */ ((e) => (e.ROW = "row", e.COLUMN = "column", e))(yt || {}), An = /* @__PURE__ */ ((e) => (e.LIGHT = "light", e.DARK = "dark", e))(An || {}), it = /* @__PURE__ */ ((e) => (e.TOP = "top", e.RIGHT = "right", e.BOTTOM = "bottom", e.LEFT = "left", e))(it || {}), al = /* @__PURE__ */ ((e) => (e.NORMAL = "normal", e.FLEX_START = "flex-start", e.FLEX_END = "flex-end", e.CENTER = "center", e.BASELINE = "baseline", e.STRETCH = "stretch", e.START = "start", e.END = "end", e.SELF_START = "self-start", e.SELF_END = "self-end", e.FIRST_BASELINE = "first baseline", e.LAST_BASELINE = "last baseline", e.SAFE_CENTER = "safe center", e.UNSAFE_CENTER = "unsafe center", e.SAFE_RIGHT = "safe right", e.UNSAFE_RIGHT = "unsafe right", e.SAFE_END = "safe end", e.UNSAFE_END = "unsafe end", e.SAFE_SELF_END = "safe self-end", e.UNSAFE_SELF_END = "unsafe self-end", e.SAFE_FLEX_END = "safe flex-end", e.UNSAFE_FLEX_END = "unsafe flex-end", e))(al || {}), nl = /* @__PURE__ */ ((e) => (e.START = "start", e.END = "end", e.FLEX_START = "flex-start", e.FLEX_END = "flex-end", e.CENTER = "center", e.LEFT = "left", e.RIGHT = "right", e.SPACE_BETWEEN = "space-between", e.SPACE_AROUND = "space-around", e.SPACE_EVENLY = "space-evenly", e.STRETCH = "stretch", e))(nl || {}), J = /* @__PURE__ */ ((e) => (e.AUTO = "auto", e.PERCENT = "%", e.FN = "fn", e.PX = "px", e.FR = "fr", e.REM = "rem", e.VH = "vh", e.VW = "vw", e.PC = "pc", e.CM = "cm", e.MM = "mm", e.IN = "in", e.PT = "pt", e.CH = "ch", e.EM = "em", e.V_MIN = "vmin", e.V_MAX = "vmax", e))(J || {}), ol = /* @__PURE__ */ ((e) => (e.DARK = "dark", e.LIGHT = "light", e))(ol || {});
function il(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function sl(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var ll = /* @__PURE__ */ function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(sl(this));
    var n = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = a.charCodeAt(0) === 64 && a.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + a + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var d = il(n);
      try {
        d.insertRule(a, d.cssRules.length);
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
}(), ce = "-ms-", $a = "-moz-", j = "-webkit-", Xn = "comm", Kn = "rule", Jn = "decl", cl = "@import", Pi = "@keyframes", dl = "@layer", ul = Math.abs, Fa = String.fromCharCode, fl = Object.assign;
function pl(e, r) {
  return se(e, 0) ^ 45 ? (((r << 2 ^ se(e, 0)) << 2 ^ se(e, 1)) << 2 ^ se(e, 2)) << 2 ^ se(e, 3) : 0;
}
function Bi(e) {
  return e.trim();
}
function bl(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function M(e, r, t) {
  return e.replace(r, t);
}
function On(e, r) {
  return e.indexOf(r);
}
function se(e, r) {
  return e.charCodeAt(r) | 0;
}
function St(e, r, t) {
  return e.slice(r, t);
}
function Fe(e) {
  return e.length;
}
function Qn(e) {
  return e.length;
}
function ea(e, r) {
  return r.push(e), e;
}
function hl(e, r) {
  return e.map(r).join("");
}
var Da = 1, Mr = 1, Fi = 0, he = 0, te = 0, Lr = "";
function Ia(e, r, t, a, n, i, d) {
  return { value: e, root: r, parent: t, type: a, props: n, children: i, line: Da, column: Mr, length: d, return: "" };
}
function Zr(e, r) {
  return fl(Ia("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function gl() {
  return te;
}
function vl() {
  return te = he > 0 ? se(Lr, --he) : 0, Mr--, te === 10 && (Mr = 1, Da--), te;
}
function me() {
  return te = he < Fi ? se(Lr, he++) : 0, Mr++, te === 10 && (Mr = 1, Da++), te;
}
function De() {
  return se(Lr, he);
}
function ca() {
  return he;
}
function Rt(e, r) {
  return St(Lr, e, r);
}
function xt(e) {
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
function Di(e) {
  return Da = Mr = 1, Fi = Fe(Lr = e), he = 0, [];
}
function Ii(e) {
  return Lr = "", e;
}
function da(e) {
  return Bi(Rt(he - 1, Pn(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function ml(e) {
  for (; (te = De()) && te < 33; )
    me();
  return xt(e) > 2 || xt(te) > 3 ? "" : " ";
}
function yl(e, r) {
  for (; --r && me() && !(te < 48 || te > 102 || te > 57 && te < 65 || te > 70 && te < 97); )
    ;
  return Rt(e, ca() + (r < 6 && De() == 32 && me() == 32));
}
function Pn(e) {
  for (; me(); )
    switch (te) {
      case e:
        return he;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pn(te);
        break;
      case 40:
        e === 41 && Pn(e);
        break;
      case 92:
        me();
        break;
    }
  return he;
}
function Sl(e, r) {
  for (; me() && e + te !== 57; )
    if (e + te === 84 && De() === 47)
      break;
  return "/*" + Rt(r, he - 1) + "*" + Fa(e === 47 ? e : me());
}
function xl(e) {
  for (; !xt(De()); )
    me();
  return Rt(e, he);
}
function _l(e) {
  return Ii(ua("", null, null, null, [""], e = Di(e), 0, [0], e));
}
function ua(e, r, t, a, n, i, d, u, f) {
  for (var g = 0, h = 0, _ = d, m = 0, y = 0, x = 0, b = 1, w = 1, C = 1, $ = 0, H = "", Z = n, re = i, ae = a, B = H; w; )
    switch (x = $, $ = me()) {
      case 40:
        if (x != 108 && se(B, _ - 1) == 58) {
          On(B += M(da($), "&", "&\f"), "&\f") != -1 && (C = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        B += da($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        B += ml(x);
        break;
      case 92:
        B += yl(ca() - 1, 7);
        continue;
      case 47:
        switch (De()) {
          case 42:
          case 47:
            ea(kl(Sl(me(), ca()), r, t), f);
            break;
          default:
            B += "/";
        }
        break;
      case 123 * b:
        u[g++] = Fe(B) * C;
      case 125 * b:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            w = 0;
          case 59 + h:
            C == -1 && (B = M(B, /\f/g, "")), y > 0 && Fe(B) - _ && ea(y > 32 ? ko(B + ";", a, t, _ - 1) : ko(M(B, " ", "") + ";", a, t, _ - 2), f);
            break;
          case 59:
            B += ";";
          default:
            if (ea(ae = _o(B, r, t, g, h, n, u, H, Z = [], re = [], _), i), $ === 123)
              if (h === 0)
                ua(B, r, ae, ae, Z, i, _, u, re);
              else
                switch (m === 99 && se(B, 3) === 110 ? 100 : m) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    ua(e, ae, ae, a && ea(_o(e, ae, ae, 0, 0, n, u, H, n, Z = [], _), re), n, re, _, u, a ? Z : re);
                    break;
                  default:
                    ua(B, ae, ae, ae, [""], re, 0, u, re);
                }
        }
        g = h = y = 0, b = C = 1, H = B = "", _ = d;
        break;
      case 58:
        _ = 1 + Fe(B), y = x;
      default:
        if (b < 1) {
          if ($ == 123)
            --b;
          else if ($ == 125 && b++ == 0 && vl() == 125)
            continue;
        }
        switch (B += Fa($), $ * b) {
          case 38:
            C = h > 0 ? 1 : (B += "\f", -1);
            break;
          case 44:
            u[g++] = (Fe(B) - 1) * C, C = 1;
            break;
          case 64:
            De() === 45 && (B += da(me())), m = De(), h = _ = Fe(H = B += xl(ca())), $++;
            break;
          case 45:
            x === 45 && Fe(B) == 2 && (b = 0);
        }
    }
  return i;
}
function _o(e, r, t, a, n, i, d, u, f, g, h) {
  for (var _ = n - 1, m = n === 0 ? i : [""], y = Qn(m), x = 0, b = 0, w = 0; x < a; ++x)
    for (var C = 0, $ = St(e, _ + 1, _ = ul(b = d[x])), H = e; C < y; ++C)
      (H = Bi(b > 0 ? m[C] + " " + $ : M($, /&\f/g, m[C]))) && (f[w++] = H);
  return Ia(e, r, t, n === 0 ? Kn : u, f, g, h);
}
function kl(e, r, t) {
  return Ia(e, r, t, Xn, Fa(gl()), St(e, 2, -2), 0);
}
function ko(e, r, t, a) {
  return Ia(e, r, t, Jn, St(e, 0, a), St(e, a + 1, -1), a);
}
function Br(e, r) {
  for (var t = "", a = Qn(e), n = 0; n < a; n++)
    t += r(e[n], n, e, r) || "";
  return t;
}
function wl(e, r, t, a) {
  switch (e.type) {
    case dl:
      if (e.children.length) break;
    case cl:
    case Jn:
      return e.return = e.return || e.value;
    case Xn:
      return "";
    case Pi:
      return e.return = e.value + "{" + Br(e.children, a) + "}";
    case Kn:
      e.value = e.props.join(",");
  }
  return Fe(t = Br(e.children, a)) ? e.return = e.value + "{" + t + "}" : "";
}
function $l(e) {
  var r = Qn(e);
  return function(t, a, n, i) {
    for (var d = "", u = 0; u < r; u++)
      d += e[u](t, a, n, i) || "";
    return d;
  };
}
function El(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
function ji(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var Cl = function(r, t, a) {
  for (var n = 0, i = 0; n = i, i = De(), n === 38 && i === 12 && (t[a] = 1), !xt(i); )
    me();
  return Rt(r, he);
}, Tl = function(r, t) {
  var a = -1, n = 44;
  do
    switch (xt(n)) {
      case 0:
        n === 38 && De() === 12 && (t[a] = 1), r[a] += Cl(he - 1, t, a);
        break;
      case 2:
        r[a] += da(n);
        break;
      case 4:
        if (n === 44) {
          r[++a] = De() === 58 ? "&\f" : "", t[a] = r[a].length;
          break;
        }
      default:
        r[a] += Fa(n);
    }
  while (n = me());
  return r;
}, Rl = function(r, t) {
  return Ii(Tl(Di(r), t));
}, wo = /* @__PURE__ */ new WeakMap(), zl = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, a = r.parent, n = r.column === a.column && r.line === a.line; a.type !== "rule"; )
      if (a = a.parent, !a) return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !wo.get(a)) && !n) {
      wo.set(r, !0);
      for (var i = [], d = Rl(t, i), u = a.props, f = 0, g = 0; f < d.length; f++)
        for (var h = 0; h < u.length; h++, g++)
          r.props[g] = i[f] ? d[f].replace(/&\f/g, u[h]) : u[h] + " " + d[f];
    }
  }
}, Al = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, Ol = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", Pl = function(r) {
  return r.type === "comm" && r.children.indexOf(Ol) > -1;
}, Bl = function(r) {
  return function(t, a, n) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var d = !!t.parent, u = d ? t.parent.children : (
          // global rule at the root level
          n
        ), f = u.length - 1; f >= 0; f--) {
          var g = u[f];
          if (g.line < t.line)
            break;
          if (g.column < t.column) {
            if (Pl(g))
              return;
            break;
          }
        }
        i.forEach(function(h) {
          console.error('The pseudo class "' + h + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + h.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Mi = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, Fl = function(r, t) {
  for (var a = r - 1; a >= 0; a--)
    if (!Mi(t[a]))
      return !0;
  return !1;
}, $o = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, Dl = function(r, t, a) {
  Mi(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), $o(r)) : Fl(t, a) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), $o(r)));
};
function Ni(e, r) {
  switch (pl(e, r)) {
    case 5103:
      return j + "print-" + e + e;
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
      return j + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return j + e + $a + e + ce + e + e;
    case 6828:
    case 4268:
      return j + e + ce + e + e;
    case 6165:
      return j + e + ce + "flex-" + e + e;
    case 5187:
      return j + e + M(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + ce + "flex-$1$2") + e;
    case 5443:
      return j + e + ce + "flex-item-" + M(e, /flex-|-self/, "") + e;
    case 4675:
      return j + e + ce + "flex-line-pack" + M(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return j + e + ce + M(e, "shrink", "negative") + e;
    case 5292:
      return j + e + ce + M(e, "basis", "preferred-size") + e;
    case 6060:
      return j + "box-" + M(e, "-grow", "") + j + e + ce + M(e, "grow", "positive") + e;
    case 4554:
      return j + M(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return M(M(M(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return M(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return M(M(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + ce + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return M(e, /(.+)-inline(.+)/, j + "$1$2") + e;
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
      if (Fe(e) - 1 - r > 6) switch (se(e, r + 1)) {
        case 109:
          if (se(e, r + 4) !== 45) break;
        case 102:
          return M(e, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + $a + (se(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
        case 115:
          return ~On(e, "stretch") ? Ni(M(e, "stretch", "fill-available"), r) + e : e;
      }
      break;
    case 4949:
      if (se(e, r + 1) !== 115) break;
    case 6444:
      switch (se(e, Fe(e) - 3 - (~On(e, "!important") && 10))) {
        case 107:
          return M(e, ":", ":" + j) + e;
        case 101:
          return M(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + j + (se(e, 14) === 45 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + ce + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (se(e, r + 11)) {
        case 114:
          return j + e + ce + M(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + ce + M(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + ce + M(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return j + e + ce + e + e;
  }
  return e;
}
var Il = function(r, t, a, n) {
  if (r.length > -1 && !r.return) switch (r.type) {
    case Jn:
      r.return = Ni(r.value, r.length);
      break;
    case Pi:
      return Br([Zr(r, {
        value: M(r.value, "@", "@" + j)
      })], n);
    case Kn:
      if (r.length) return hl(r.props, function(i) {
        switch (bl(i, /(::plac\w+|:read-\w+)/)) {
          case ":read-only":
          case ":read-write":
            return Br([Zr(r, {
              props: [M(i, /:(read-\w+)/, ":" + $a + "$1")]
            })], n);
          case "::placeholder":
            return Br([Zr(r, {
              props: [M(i, /:(plac\w+)/, ":" + j + "input-$1")]
            }), Zr(r, {
              props: [M(i, /:(plac\w+)/, ":" + $a + "$1")]
            }), Zr(r, {
              props: [M(i, /:(plac\w+)/, ce + "input-$1")]
            })], n);
        }
        return "";
      });
  }
}, jl = [Il], Ml = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var a = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(a, function(b) {
      var w = b.getAttribute("data-emotion");
      w.indexOf(" ") !== -1 && (document.head.appendChild(b), b.setAttribute("data-s", ""));
    });
  }
  var n = r.stylisPlugins || jl;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, d, u = [];
  d = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(b) {
      for (var w = b.getAttribute("data-emotion").split(" "), C = 1; C < w.length; C++)
        i[w[C]] = !0;
      u.push(b);
    }
  );
  var f, g = [zl, Al];
  process.env.NODE_ENV !== "production" && g.push(Bl({
    get compat() {
      return x.compat;
    }
  }), Dl);
  {
    var h, _ = [wl, process.env.NODE_ENV !== "production" ? function(b) {
      b.root || (b.return ? h.insert(b.return) : b.value && b.type !== Xn && h.insert(b.value + "{}"));
    } : El(function(b) {
      h.insert(b);
    })], m = $l(g.concat(n, _)), y = function(w) {
      return Br(_l(w), m);
    };
    f = function(w, C, $, H) {
      h = $, process.env.NODE_ENV !== "production" && C.map !== void 0 && (h = {
        insert: function(re) {
          $.insert(re + C.map);
        }
      }), y(w ? w + "{" + C.styles + "}" : C.styles), H && (x.inserted[C.name] = !0);
    };
  }
  var x = {
    key: t,
    sheet: new ll({
      key: t,
      container: d,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: f
  };
  return x.sheet.hydrate(u), x;
};
function Bn() {
  return Bn = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var a in t)
        Object.prototype.hasOwnProperty.call(t, a) && (e[a] = t[a]);
    }
    return e;
  }, Bn.apply(this, arguments);
}
var Er = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Nl(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Wl = !0;
function Wi(e, r, t) {
  var a = "";
  return t.split(" ").forEach(function(n) {
    e[n] !== void 0 ? r.push(e[n] + ";") : a += n + " ";
  }), a;
}
var Zn = function(r, t, a) {
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
  Wl === !1) && r.registered[n] === void 0 && (r.registered[n] = t.styles);
}, Li = function(r, t, a) {
  Zn(r, t, a);
  var n = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + n : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function Ll(e) {
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
var Vl = {
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
}, Eo = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, Hl = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", Ul = /[A-Z]|^ms/g, Vi = /_EMO_([^_]+?)_([^]*?)_EMO_/g, eo = function(r) {
  return r.charCodeAt(1) === 45;
}, Co = function(r) {
  return r != null && typeof r != "boolean";
}, dn = /* @__PURE__ */ ji(function(e) {
  return eo(e) ? e : e.replace(Ul, "-$&").toLowerCase();
}), Ea = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Vi, function(a, n, i) {
          return Re = {
            name: n,
            styles: i,
            next: Re
          }, n;
        });
  }
  return Vl[r] !== 1 && !eo(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var Gl = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, Yl = ["normal", "none", "initial", "inherit", "unset"], ql = Ea, Xl = /^-ms-/, Kl = /-(.)/g, To = {};
  Ea = function(r, t) {
    if (r === "content" && (typeof t != "string" || Yl.indexOf(t) === -1 && !Gl.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var a = ql(r, t);
    return a !== "" && !eo(r) && r.indexOf("-") !== -1 && To[r] === void 0 && (To[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Xl, "ms-").replace(Kl, function(n, i) {
      return i.toUpperCase();
    }) + "?")), a;
  };
}
var Hi = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function _t(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Hi);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return Re = {
          name: t.name,
          styles: t.styles,
          next: Re
        }, t.name;
      if (t.styles !== void 0) {
        var a = t.next;
        if (a !== void 0)
          for (; a !== void 0; )
            Re = {
              name: a.name,
              styles: a.styles,
              next: Re
            }, a = a.next;
        var n = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (n += t.map), n;
      }
      return Jl(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = Re, d = t(e);
        return Re = i, _t(e, r, d);
      } else process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var u = [], f = t.replace(Vi, function(h, _, m) {
          var y = "animation" + u.length;
          return u.push("const " + y + " = keyframes`" + m.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + y + "}";
        });
        u.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(u, ["`" + f + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + f + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var g = r[t];
  return g !== void 0 ? g : t;
}
function Jl(e, r, t) {
  var a = "";
  if (Array.isArray(t))
    for (var n = 0; n < t.length; n++)
      a += _t(e, r, t[n]) + ";";
  else
    for (var i in t) {
      var d = t[i];
      if (typeof d != "object")
        r != null && r[d] !== void 0 ? a += i + "{" + r[d] + "}" : Co(d) && (a += dn(i) + ":" + Ea(i, d) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Hi);
        if (Array.isArray(d) && typeof d[0] == "string" && (r == null || r[d[0]] === void 0))
          for (var u = 0; u < d.length; u++)
            Co(d[u]) && (a += dn(i) + ":" + Ea(i, d[u]) + ";");
        else {
          var f = _t(e, r, d);
          switch (i) {
            case "animation":
            case "animationName": {
              a += dn(i) + ":" + f + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(Hl), a += i + "{" + f + "}";
          }
        }
      }
    }
  return a;
}
var Ro = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ui;
process.env.NODE_ENV !== "production" && (Ui = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var Re, Fn = function(r, t, a) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var n = !0, i = "";
  Re = void 0;
  var d = r[0];
  d == null || d.raw === void 0 ? (n = !1, i += _t(a, t, d)) : (process.env.NODE_ENV !== "production" && d[0] === void 0 && console.error(Eo), i += d[0]);
  for (var u = 1; u < r.length; u++)
    i += _t(a, t, r[u]), n && (process.env.NODE_ENV !== "production" && d[u] === void 0 && console.error(Eo), i += d[u]);
  var f;
  process.env.NODE_ENV !== "production" && (i = i.replace(Ui, function(m) {
    return f = m, "";
  })), Ro.lastIndex = 0;
  for (var g = "", h; (h = Ro.exec(i)) !== null; )
    g += "-" + // $FlowFixMe we know it's not null
    h[1];
  var _ = Ll(i) + g;
  return process.env.NODE_ENV !== "production" ? {
    name: _,
    styles: i,
    map: f,
    next: Re,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: _,
    styles: i,
    next: Re
  };
}, Ql = function(r) {
  return r();
}, Zl = pe.useInsertionEffect ? pe.useInsertionEffect : !1, Gi = Zl || Ql, ec = {}.hasOwnProperty, ro = /* @__PURE__ */ pe.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ Ml({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (ro.displayName = "EmotionCacheContext");
ro.Provider;
var Yi = function(r) {
  return /* @__PURE__ */ Ai(function(t, a) {
    var n = qn(ro);
    return r(t, n, a);
  });
}, to = /* @__PURE__ */ pe.createContext({});
process.env.NODE_ENV !== "production" && (to.displayName = "EmotionThemeContext");
var zo = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", Ao = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", rc = function(r) {
  var t = r.cache, a = r.serialized, n = r.isStringTag;
  return Zn(t, a, n), Gi(function() {
    return Li(t, a, n);
  }), null;
}, tc = /* @__PURE__ */ Yi(function(e, r, t) {
  var a = e.css;
  typeof a == "string" && r.registered[a] !== void 0 && (a = r.registered[a]);
  var n = e[zo], i = [a], d = "";
  typeof e.className == "string" ? d = Wi(r.registered, i, e.className) : e.className != null && (d = e.className + " ");
  var u = Fn(i, void 0, pe.useContext(to));
  if (process.env.NODE_ENV !== "production" && u.name.indexOf("-") === -1) {
    var f = e[Ao];
    f && (u = Fn([u, "label:" + f + ";"]));
  }
  d += r.key + "-" + u.name;
  var g = {};
  for (var h in e)
    ec.call(e, h) && h !== "css" && h !== zo && (process.env.NODE_ENV === "production" || h !== Ao) && (g[h] = e[h]);
  return g.ref = t, g.className = d, /* @__PURE__ */ pe.createElement(pe.Fragment, null, /* @__PURE__ */ pe.createElement(rc, {
    cache: r,
    serialized: u,
    isStringTag: typeof n == "string"
  }), /* @__PURE__ */ pe.createElement(n, g));
});
process.env.NODE_ENV !== "production" && (tc.displayName = "EmotionCssPropInternal");
var Dn = { exports: {} }, et = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Oo;
function ac() {
  if (Oo) return et;
  Oo = 1;
  var e = wa, r = Symbol.for("react.element"), t = Symbol.for("react.fragment"), a = Object.prototype.hasOwnProperty, n = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, i = { key: !0, ref: !0, __self: !0, __source: !0 };
  function d(u, f, g) {
    var h, _ = {}, m = null, y = null;
    g !== void 0 && (m = "" + g), f.key !== void 0 && (m = "" + f.key), f.ref !== void 0 && (y = f.ref);
    for (h in f) a.call(f, h) && !i.hasOwnProperty(h) && (_[h] = f[h]);
    if (u && u.defaultProps) for (h in f = u.defaultProps, f) _[h] === void 0 && (_[h] = f[h]);
    return { $$typeof: r, type: u, key: m, ref: y, props: _, _owner: n.current };
  }
  return et.Fragment = t, et.jsx = d, et.jsxs = d, et;
}
var rt = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Po;
function nc() {
  return Po || (Po = 1, process.env.NODE_ENV !== "production" && function() {
    var e = wa, r = Symbol.for("react.element"), t = Symbol.for("react.portal"), a = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), i = Symbol.for("react.profiler"), d = Symbol.for("react.provider"), u = Symbol.for("react.context"), f = Symbol.for("react.forward_ref"), g = Symbol.for("react.suspense"), h = Symbol.for("react.suspense_list"), _ = Symbol.for("react.memo"), m = Symbol.for("react.lazy"), y = Symbol.for("react.offscreen"), x = Symbol.iterator, b = "@@iterator";
    function w(s) {
      if (s === null || typeof s != "object")
        return null;
      var v = x && s[x] || s[b];
      return typeof v == "function" ? v : null;
    }
    var C = e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function $(s) {
      {
        for (var v = arguments.length, S = new Array(v > 1 ? v - 1 : 0), R = 1; R < v; R++)
          S[R - 1] = arguments[R];
        H("error", s, S);
      }
    }
    function H(s, v, S) {
      {
        var R = C.ReactDebugCurrentFrame, A = R.getStackAddendum();
        A !== "" && (v += "%s", S = S.concat([A]));
        var L = S.map(function(O) {
          return String(O);
        });
        L.unshift("Warning: " + v), Function.prototype.apply.call(console[s], console, L);
      }
    }
    var Z = !1, re = !1, ae = !1, B = !1, qe = !1, Se;
    Se = Symbol.for("react.module.reference");
    function de(s) {
      return !!(typeof s == "string" || typeof s == "function" || s === a || s === i || qe || s === n || s === g || s === h || B || s === y || Z || re || ae || typeof s == "object" && s !== null && (s.$$typeof === m || s.$$typeof === _ || s.$$typeof === d || s.$$typeof === u || s.$$typeof === f || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      s.$$typeof === Se || s.getModuleId !== void 0));
    }
    function je(s, v, S) {
      var R = s.displayName;
      if (R)
        return R;
      var A = v.displayName || v.name || "";
      return A !== "" ? S + "(" + A + ")" : S;
    }
    function At(s) {
      return s.displayName || "Context";
    }
    function $e(s) {
      if (s == null)
        return null;
      if (typeof s.tag == "number" && $("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof s == "function")
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
        case g:
          return "Suspense";
        case h:
          return "SuspenseList";
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case u:
            var v = s;
            return At(v) + ".Consumer";
          case d:
            var S = s;
            return At(S._context) + ".Provider";
          case f:
            return je(s, s.render, "ForwardRef");
          case _:
            var R = s.displayName || null;
            return R !== null ? R : $e(s.type) || "Memo";
          case m: {
            var A = s, L = A._payload, O = A._init;
            try {
              return $e(O(L));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var Me = Object.assign, nr = 0, Ot, Pt, Bt, Ft, Dt, It, jt;
    function V() {
    }
    V.__reactDisabledLog = !0;
    function Mt() {
      {
        if (nr === 0) {
          Ot = console.log, Pt = console.info, Bt = console.warn, Ft = console.error, Dt = console.group, It = console.groupCollapsed, jt = console.groupEnd;
          var s = {
            configurable: !0,
            enumerable: !0,
            value: V,
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
        nr++;
      }
    }
    function Wa() {
      {
        if (nr--, nr === 0) {
          var s = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Me({}, s, {
              value: Ot
            }),
            info: Me({}, s, {
              value: Pt
            }),
            warn: Me({}, s, {
              value: Bt
            }),
            error: Me({}, s, {
              value: Ft
            }),
            group: Me({}, s, {
              value: Dt
            }),
            groupCollapsed: Me({}, s, {
              value: It
            }),
            groupEnd: Me({}, s, {
              value: jt
            })
          });
        }
        nr < 0 && $("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Ne = C.ReactCurrentDispatcher, gr;
    function Ae(s, v, S) {
      {
        if (gr === void 0)
          try {
            throw Error();
          } catch (A) {
            var R = A.stack.trim().match(/\n( *(at )?)/);
            gr = R && R[1] || "";
          }
        return `
` + gr + s;
      }
    }
    var vr = !1, Xe;
    {
      var Nt = typeof WeakMap == "function" ? WeakMap : Map;
      Xe = new Nt();
    }
    function Vr(s, v) {
      if (!s || vr)
        return "";
      {
        var S = Xe.get(s);
        if (S !== void 0)
          return S;
      }
      var R;
      vr = !0;
      var A = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var L;
      L = Ne.current, Ne.current = null, Mt();
      try {
        if (v) {
          var O = function() {
            throw Error();
          };
          if (Object.defineProperty(O.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(O, []);
            } catch (ge) {
              R = ge;
            }
            Reflect.construct(s, [], O);
          } else {
            try {
              O.call();
            } catch (ge) {
              R = ge;
            }
            s.call(O.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (ge) {
            R = ge;
          }
          s();
        }
      } catch (ge) {
        if (ge && R && typeof ge.stack == "string") {
          for (var z = ge.stack.split(`
`), oe = R.stack.split(`
`), K = z.length - 1, Q = oe.length - 1; K >= 1 && Q >= 0 && z[K] !== oe[Q]; )
            Q--;
          for (; K >= 1 && Q >= 0; K--, Q--)
            if (z[K] !== oe[Q]) {
              if (K !== 1 || Q !== 1)
                do
                  if (K--, Q--, Q < 0 || z[K] !== oe[Q]) {
                    var le = `
` + z[K].replace(" at new ", " at ");
                    return s.displayName && le.includes("<anonymous>") && (le = le.replace("<anonymous>", s.displayName)), typeof s == "function" && Xe.set(s, le), le;
                  }
                while (K >= 1 && Q >= 0);
              break;
            }
        }
      } finally {
        vr = !1, Ne.current = L, Wa(), Error.prepareStackTrace = A;
      }
      var Qe = s ? s.displayName || s.name : "", ir = Qe ? Ae(Qe) : "";
      return typeof s == "function" && Xe.set(s, ir), ir;
    }
    function La(s, v, S) {
      return Vr(s, !1);
    }
    function Va(s) {
      var v = s.prototype;
      return !!(v && v.isReactComponent);
    }
    function mr(s, v, S) {
      if (s == null)
        return "";
      if (typeof s == "function")
        return Vr(s, Va(s));
      if (typeof s == "string")
        return Ae(s);
      switch (s) {
        case g:
          return Ae("Suspense");
        case h:
          return Ae("SuspenseList");
      }
      if (typeof s == "object")
        switch (s.$$typeof) {
          case f:
            return La(s.render);
          case _:
            return mr(s.type, v, S);
          case m: {
            var R = s, A = R._payload, L = R._init;
            try {
              return mr(L(A), v, S);
            } catch {
            }
          }
        }
      return "";
    }
    var yr = Object.prototype.hasOwnProperty, Wt = {}, Lt = C.ReactDebugCurrentFrame;
    function Sr(s) {
      if (s) {
        var v = s._owner, S = mr(s.type, s._source, v ? v.type : null);
        Lt.setExtraStackFrame(S);
      } else
        Lt.setExtraStackFrame(null);
    }
    function xr(s, v, S, R, A) {
      {
        var L = Function.call.bind(yr);
        for (var O in s)
          if (L(s, O)) {
            var z = void 0;
            try {
              if (typeof s[O] != "function") {
                var oe = Error((R || "React class") + ": " + S + " type `" + O + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof s[O] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw oe.name = "Invariant Violation", oe;
              }
              z = s[O](v, O, R, S, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (K) {
              z = K;
            }
            z && !(z instanceof Error) && (Sr(A), $("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", R || "React class", S, O, typeof z), Sr(null)), z instanceof Error && !(z.message in Wt) && (Wt[z.message] = !0, Sr(A), $("Failed %s type: %s", S, z.message), Sr(null));
          }
      }
    }
    var Hr = Array.isArray;
    function Ke(s) {
      return Hr(s);
    }
    function Oe(s) {
      {
        var v = typeof Symbol == "function" && Symbol.toStringTag, S = v && s[Symbol.toStringTag] || s.constructor.name || "Object";
        return S;
      }
    }
    function Vt(s) {
      try {
        return Ur(s), !1;
      } catch {
        return !0;
      }
    }
    function Ur(s) {
      return "" + s;
    }
    function Ht(s) {
      if (Vt(s))
        return $("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Oe(s)), Ur(s);
    }
    var or = C.ReactCurrentOwner, _r = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, Gr, Yr, kr;
    kr = {};
    function Ut(s) {
      if (yr.call(s, "ref")) {
        var v = Object.getOwnPropertyDescriptor(s, "ref").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.ref !== void 0;
    }
    function Ha(s) {
      if (yr.call(s, "key")) {
        var v = Object.getOwnPropertyDescriptor(s, "key").get;
        if (v && v.isReactWarning)
          return !1;
      }
      return s.key !== void 0;
    }
    function Ua(s, v) {
      if (typeof s.ref == "string" && or.current && v && or.current.stateNode !== v) {
        var S = $e(or.current.type);
        kr[S] || ($('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', $e(or.current.type), s.ref), kr[S] = !0);
      }
    }
    function We(s, v) {
      {
        var S = function() {
          Gr || (Gr = !0, $("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        S.isReactWarning = !0, Object.defineProperty(s, "key", {
          get: S,
          configurable: !0
        });
      }
    }
    function wr(s, v) {
      {
        var S = function() {
          Yr || (Yr = !0, $("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", v));
        };
        S.isReactWarning = !0, Object.defineProperty(s, "ref", {
          get: S,
          configurable: !0
        });
      }
    }
    var Ga = function(s, v, S, R, A, L, O) {
      var z = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: r,
        // Built-in properties that belong on the element
        type: s,
        key: v,
        ref: S,
        props: O,
        // Record the component responsible for creating this element.
        _owner: L
      };
      return z._store = {}, Object.defineProperty(z._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: !1
      }), Object.defineProperty(z, "_self", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: R
      }), Object.defineProperty(z, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: A
      }), Object.freeze && (Object.freeze(z.props), Object.freeze(z)), z;
    };
    function Gt(s, v, S, R, A) {
      {
        var L, O = {}, z = null, oe = null;
        S !== void 0 && (Ht(S), z = "" + S), Ha(v) && (Ht(v.key), z = "" + v.key), Ut(v) && (oe = v.ref, Ua(v, A));
        for (L in v)
          yr.call(v, L) && !_r.hasOwnProperty(L) && (O[L] = v[L]);
        if (s && s.defaultProps) {
          var K = s.defaultProps;
          for (L in K)
            O[L] === void 0 && (O[L] = K[L]);
        }
        if (z || oe) {
          var Q = typeof s == "function" ? s.displayName || s.name || "Unknown" : s;
          z && We(O, Q), oe && wr(O, Q);
        }
        return Ga(s, z, oe, A, R, or.current, O);
      }
    }
    var qr = C.ReactCurrentOwner, Xr = C.ReactDebugCurrentFrame;
    function xe(s) {
      if (s) {
        var v = s._owner, S = mr(s.type, s._source, v ? v.type : null);
        Xr.setExtraStackFrame(S);
      } else
        Xr.setExtraStackFrame(null);
    }
    var Kr;
    Kr = !1;
    function Ee(s) {
      return typeof s == "object" && s !== null && s.$$typeof === r;
    }
    function Yt() {
      {
        if (qr.current) {
          var s = $e(qr.current.type);
          if (s)
            return `

Check the render method of \`` + s + "`.";
        }
        return "";
      }
    }
    function Ya(s) {
      return "";
    }
    var qt = {};
    function qa(s) {
      {
        var v = Yt();
        if (!v) {
          var S = typeof s == "string" ? s : s.displayName || s.name;
          S && (v = `

Check the top-level render call using <` + S + ">.");
        }
        return v;
      }
    }
    function Xt(s, v) {
      {
        if (!s._store || s._store.validated || s.key != null)
          return;
        s._store.validated = !0;
        var S = qa(v);
        if (qt[S])
          return;
        qt[S] = !0;
        var R = "";
        s && s._owner && s._owner !== qr.current && (R = " It was passed a child from " + $e(s._owner.type) + "."), xe(s), $('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', S, R), xe(null);
      }
    }
    function _e(s, v) {
      {
        if (typeof s != "object")
          return;
        if (Ke(s))
          for (var S = 0; S < s.length; S++) {
            var R = s[S];
            Ee(R) && Xt(R, v);
          }
        else if (Ee(s))
          s._store && (s._store.validated = !0);
        else if (s) {
          var A = w(s);
          if (typeof A == "function" && A !== s.entries)
            for (var L = A.call(s), O; !(O = L.next()).done; )
              Ee(O.value) && Xt(O.value, v);
        }
      }
    }
    function Xa(s) {
      {
        var v = s.type;
        if (v == null || typeof v == "string")
          return;
        var S;
        if (typeof v == "function")
          S = v.propTypes;
        else if (typeof v == "object" && (v.$$typeof === f || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        v.$$typeof === _))
          S = v.propTypes;
        else
          return;
        if (S) {
          var R = $e(v);
          xr(S, s.props, "prop", R, s);
        } else if (v.PropTypes !== void 0 && !Kr) {
          Kr = !0;
          var A = $e(v);
          $("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", A || "Unknown");
        }
        typeof v.getDefaultProps == "function" && !v.getDefaultProps.isReactClassApproved && $("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function Ka(s) {
      {
        for (var v = Object.keys(s.props), S = 0; S < v.length; S++) {
          var R = v[S];
          if (R !== "children" && R !== "key") {
            xe(s), $("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", R), xe(null);
            break;
          }
        }
        s.ref !== null && (xe(s), $("Invalid attribute `ref` supplied to `React.Fragment`."), xe(null));
      }
    }
    function Kt(s, v, S, R, A, L) {
      {
        var O = de(s);
        if (!O) {
          var z = "";
          (s === void 0 || typeof s == "object" && s !== null && Object.keys(s).length === 0) && (z += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var oe = Ya();
          oe ? z += oe : z += Yt();
          var K;
          s === null ? K = "null" : Ke(s) ? K = "array" : s !== void 0 && s.$$typeof === r ? (K = "<" + ($e(s.type) || "Unknown") + " />", z = " Did you accidentally export a JSX literal instead of a component?") : K = typeof s, $("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", K, z);
        }
        var Q = Gt(s, v, S, A, L);
        if (Q == null)
          return Q;
        if (O) {
          var le = v.children;
          if (le !== void 0)
            if (R)
              if (Ke(le)) {
                for (var Qe = 0; Qe < le.length; Qe++)
                  _e(le[Qe], s);
                Object.freeze && Object.freeze(le);
              } else
                $("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              _e(le, s);
        }
        return s === a ? Ka(Q) : Xa(Q), Q;
      }
    }
    function Ja(s, v, S) {
      return Kt(s, v, S, !0);
    }
    function Qa(s, v, S) {
      return Kt(s, v, S, !1);
    }
    var Je = Qa, Za = Ja;
    rt.Fragment = a, rt.jsx = Je, rt.jsxs = Za;
  }()), rt;
}
process.env.NODE_ENV === "production" ? Dn.exports = ac() : Dn.exports = nc();
var dr = Dn.exports, qi = Oi({});
qi.displayName = "ColorModeContext";
function oc() {
  const e = qn(qi);
  if (e === void 0)
    throw new Error("useColorMode must be used within a ColorModeProvider");
  return e;
}
function ar(e) {
  const r = typeof e;
  return e != null && (r === "object" || r === "function") && !Array.isArray(e);
}
function st(e, ...r) {
  return ic(e) ? e(...r) : e;
}
var ic = (e) => typeof e == "function", Ca = { exports: {} };
Ca.exports;
(function(e, r) {
  var t = 200, a = "__lodash_hash_undefined__", n = 800, i = 16, d = 9007199254740991, u = "[object Arguments]", f = "[object Array]", g = "[object AsyncFunction]", h = "[object Boolean]", _ = "[object Date]", m = "[object Error]", y = "[object Function]", x = "[object GeneratorFunction]", b = "[object Map]", w = "[object Number]", C = "[object Null]", $ = "[object Object]", H = "[object Proxy]", Z = "[object RegExp]", re = "[object Set]", ae = "[object String]", B = "[object Undefined]", qe = "[object WeakMap]", Se = "[object ArrayBuffer]", de = "[object DataView]", je = "[object Float32Array]", At = "[object Float64Array]", $e = "[object Int8Array]", Me = "[object Int16Array]", nr = "[object Int32Array]", Ot = "[object Uint8Array]", Pt = "[object Uint8ClampedArray]", Bt = "[object Uint16Array]", Ft = "[object Uint32Array]", Dt = /[\\^$.*+?()[\]{}|]/g, It = /^\[object .+?Constructor\]$/, jt = /^(?:0|[1-9]\d*)$/, V = {};
  V[je] = V[At] = V[$e] = V[Me] = V[nr] = V[Ot] = V[Pt] = V[Bt] = V[Ft] = !0, V[u] = V[f] = V[Se] = V[h] = V[de] = V[_] = V[m] = V[y] = V[b] = V[w] = V[$] = V[Z] = V[re] = V[ae] = V[qe] = !1;
  var Mt = typeof Er == "object" && Er && Er.Object === Object && Er, Wa = typeof self == "object" && self && self.Object === Object && self, Ne = Mt || Wa || Function("return this")(), gr = r && !r.nodeType && r, Ae = gr && !0 && e && !e.nodeType && e, vr = Ae && Ae.exports === gr, Xe = vr && Mt.process, Nt = function() {
    try {
      var o = Ae && Ae.require && Ae.require("util").types;
      return o || Xe && Xe.binding && Xe.binding("util");
    } catch {
    }
  }(), Vr = Nt && Nt.isTypedArray;
  function La(o, c, p) {
    switch (p.length) {
      case 0:
        return o.call(c);
      case 1:
        return o.call(c, p[0]);
      case 2:
        return o.call(c, p[0], p[1]);
      case 3:
        return o.call(c, p[0], p[1], p[2]);
    }
    return o.apply(c, p);
  }
  function Va(o, c) {
    for (var p = -1, k = Array(o); ++p < o; )
      k[p] = c(p);
    return k;
  }
  function mr(o) {
    return function(c) {
      return o(c);
    };
  }
  function yr(o, c) {
    return o == null ? void 0 : o[c];
  }
  function Wt(o, c) {
    return function(p) {
      return o(c(p));
    };
  }
  var Lt = Array.prototype, Sr = Function.prototype, xr = Object.prototype, Hr = Ne["__core-js_shared__"], Ke = Sr.toString, Oe = xr.hasOwnProperty, Vt = function() {
    var o = /[^.]+$/.exec(Hr && Hr.keys && Hr.keys.IE_PROTO || "");
    return o ? "Symbol(src)_1." + o : "";
  }(), Ur = xr.toString, Ht = Ke.call(Object), or = RegExp(
    "^" + Ke.call(Oe).replace(Dt, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$"
  ), _r = vr ? Ne.Buffer : void 0, Gr = Ne.Symbol, Yr = Ne.Uint8Array;
  _r && _r.allocUnsafe;
  var kr = Wt(Object.getPrototypeOf, Object), Ut = Object.create, Ha = xr.propertyIsEnumerable, Ua = Lt.splice, We = Gr ? Gr.toStringTag : void 0, wr = function() {
    try {
      var o = en(Object, "defineProperty");
      return o({}, "", {}), o;
    } catch {
    }
  }(), Ga = _r ? _r.isBuffer : void 0, Gt = Math.max, qr = Date.now, Xr = en(Ne, "Map"), xe = en(Object, "create"), Kr = /* @__PURE__ */ function() {
    function o() {
    }
    return function(c) {
      if (!sr(c))
        return {};
      if (Ut)
        return Ut(c);
      o.prototype = c;
      var p = new o();
      return o.prototype = void 0, p;
    };
  }();
  function Ee(o) {
    var c = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++c < p; ) {
      var k = o[c];
      this.set(k[0], k[1]);
    }
  }
  function Yt() {
    this.__data__ = xe ? xe(null) : {}, this.size = 0;
  }
  function Ya(o) {
    var c = this.has(o) && delete this.__data__[o];
    return this.size -= c ? 1 : 0, c;
  }
  function qt(o) {
    var c = this.__data__;
    if (xe) {
      var p = c[o];
      return p === a ? void 0 : p;
    }
    return Oe.call(c, o) ? c[o] : void 0;
  }
  function qa(o) {
    var c = this.__data__;
    return xe ? c[o] !== void 0 : Oe.call(c, o);
  }
  function Xt(o, c) {
    var p = this.__data__;
    return this.size += this.has(o) ? 0 : 1, p[o] = xe && c === void 0 ? a : c, this;
  }
  Ee.prototype.clear = Yt, Ee.prototype.delete = Ya, Ee.prototype.get = qt, Ee.prototype.has = qa, Ee.prototype.set = Xt;
  function _e(o) {
    var c = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++c < p; ) {
      var k = o[c];
      this.set(k[0], k[1]);
    }
  }
  function Xa() {
    this.__data__ = [], this.size = 0;
  }
  function Ka(o) {
    var c = this.__data__, p = ir(c, o);
    if (p < 0)
      return !1;
    var k = c.length - 1;
    return p == k ? c.pop() : Ua.call(c, p, 1), --this.size, !0;
  }
  function Kt(o) {
    var c = this.__data__, p = ir(c, o);
    return p < 0 ? void 0 : c[p][1];
  }
  function Ja(o) {
    return ir(this.__data__, o) > -1;
  }
  function Qa(o, c) {
    var p = this.__data__, k = ir(p, o);
    return k < 0 ? (++this.size, p.push([o, c])) : p[k][1] = c, this;
  }
  _e.prototype.clear = Xa, _e.prototype.delete = Ka, _e.prototype.get = Kt, _e.prototype.has = Ja, _e.prototype.set = Qa;
  function Je(o) {
    var c = -1, p = o == null ? 0 : o.length;
    for (this.clear(); ++c < p; ) {
      var k = o[c];
      this.set(k[0], k[1]);
    }
  }
  function Za() {
    this.size = 0, this.__data__ = {
      hash: new Ee(),
      map: new (Xr || _e)(),
      string: new Ee()
    };
  }
  function s(o) {
    var c = Qt(this, o).delete(o);
    return this.size -= c ? 1 : 0, c;
  }
  function v(o) {
    return Qt(this, o).get(o);
  }
  function S(o) {
    return Qt(this, o).has(o);
  }
  function R(o, c) {
    var p = Qt(this, o), k = p.size;
    return p.set(o, c), this.size += p.size == k ? 0 : 1, this;
  }
  Je.prototype.clear = Za, Je.prototype.delete = s, Je.prototype.get = v, Je.prototype.has = S, Je.prototype.set = R;
  function A(o) {
    var c = this.__data__ = new _e(o);
    this.size = c.size;
  }
  function L() {
    this.__data__ = new _e(), this.size = 0;
  }
  function O(o) {
    var c = this.__data__, p = c.delete(o);
    return this.size = c.size, p;
  }
  function z(o) {
    return this.__data__.get(o);
  }
  function oe(o) {
    return this.__data__.has(o);
  }
  function K(o, c) {
    var p = this.__data__;
    if (p instanceof _e) {
      var k = p.__data__;
      if (!Xr || k.length < t - 1)
        return k.push([o, c]), this.size = ++p.size, this;
      p = this.__data__ = new Je(k);
    }
    return p.set(o, c), this.size = p.size, this;
  }
  A.prototype.clear = L, A.prototype.delete = O, A.prototype.get = z, A.prototype.has = oe, A.prototype.set = K;
  function Q(o, c) {
    var p = an(o), k = !p && tn(o), F = !p && !k && go(o), U = !p && !k && !F && mo(o), q = p || k || F || U, D = q ? Va(o.length, String) : [], X = D.length;
    for (var Ce in o)
      q && // Safari 9 has enumerable `arguments.length` in strict mode.
      (Ce == "length" || // Node.js 0.10 has enumerable non-index properties on buffers.
      F && (Ce == "offset" || Ce == "parent") || // PhantomJS 2 has enumerable non-index properties on typed arrays.
      U && (Ce == "buffer" || Ce == "byteLength" || Ce == "byteOffset") || // Skip index properties.
      bo(Ce, X)) || D.push(Ce);
    return D;
  }
  function le(o, c, p) {
    (p !== void 0 && !Zt(o[c], p) || p === void 0 && !(c in o)) && ge(o, c, p);
  }
  function Qe(o, c, p) {
    var k = o[c];
    (!(Oe.call(o, c) && Zt(k, p)) || p === void 0 && !(c in o)) && ge(o, c, p);
  }
  function ir(o, c) {
    for (var p = o.length; p--; )
      if (Zt(o[p][0], c))
        return p;
    return -1;
  }
  function ge(o, c, p) {
    c == "__proto__" && wr ? wr(o, c, {
      configurable: !0,
      enumerable: !0,
      value: p,
      writable: !0
    }) : o[c] = p;
  }
  var _s = Fs();
  function Jt(o) {
    return o == null ? o === void 0 ? B : C : We && We in Object(o) ? Ds(o) : Ls(o);
  }
  function fo(o) {
    return Jr(o) && Jt(o) == u;
  }
  function ks(o) {
    if (!sr(o) || Ns(o))
      return !1;
    var c = on(o) ? or : It;
    return c.test(Gs(o));
  }
  function ws(o) {
    return Jr(o) && vo(o.length) && !!V[Jt(o)];
  }
  function $s(o) {
    if (!sr(o))
      return Ws(o);
    var c = ho(o), p = [];
    for (var k in o)
      k == "constructor" && (c || !Oe.call(o, k)) || p.push(k);
    return p;
  }
  function po(o, c, p, k, F) {
    o !== c && _s(c, function(U, q) {
      if (F || (F = new A()), sr(U))
        Es(o, c, q, p, po, k, F);
      else {
        var D = k ? k(rn(o, q), U, q + "", o, c, F) : void 0;
        D === void 0 && (D = U), le(o, q, D);
      }
    }, yo);
  }
  function Es(o, c, p, k, F, U, q) {
    var D = rn(o, p), X = rn(c, p), Ce = q.get(X);
    if (Ce) {
      le(o, p, Ce);
      return;
    }
    var ve = U ? U(D, X, p + "", o, c, q) : void 0, Qr = ve === void 0;
    if (Qr) {
      var sn = an(X), ln = !sn && go(X), xo = !sn && !ln && mo(X);
      ve = X, sn || ln || xo ? an(D) ? ve = D : Ys(D) ? ve = Os(D) : ln ? (Qr = !1, ve = Rs(X)) : xo ? (Qr = !1, ve = As(X)) : ve = [] : qs(X) || tn(X) ? (ve = D, tn(D) ? ve = Xs(D) : (!sr(D) || on(D)) && (ve = Is(X))) : Qr = !1;
    }
    Qr && (q.set(X, ve), F(ve, X, k, U, q), q.delete(X)), le(o, p, ve);
  }
  function Cs(o, c) {
    return Hs(Vs(o, c, So), o + "");
  }
  var Ts = wr ? function(o, c) {
    return wr(o, "toString", {
      configurable: !0,
      enumerable: !1,
      value: Js(c),
      writable: !0
    });
  } : So;
  function Rs(o, c) {
    return o.slice();
  }
  function zs(o) {
    var c = new o.constructor(o.byteLength);
    return new Yr(c).set(new Yr(o)), c;
  }
  function As(o, c) {
    var p = zs(o.buffer);
    return new o.constructor(p, o.byteOffset, o.length);
  }
  function Os(o, c) {
    var p = -1, k = o.length;
    for (c || (c = Array(k)); ++p < k; )
      c[p] = o[p];
    return c;
  }
  function Ps(o, c, p, k) {
    var F = !p;
    p || (p = {});
    for (var U = -1, q = c.length; ++U < q; ) {
      var D = c[U], X = void 0;
      X === void 0 && (X = o[D]), F ? ge(p, D, X) : Qe(p, D, X);
    }
    return p;
  }
  function Bs(o) {
    return Cs(function(c, p) {
      var k = -1, F = p.length, U = F > 1 ? p[F - 1] : void 0, q = F > 2 ? p[2] : void 0;
      for (U = o.length > 3 && typeof U == "function" ? (F--, U) : void 0, q && js(p[0], p[1], q) && (U = F < 3 ? void 0 : U, F = 1), c = Object(c); ++k < F; ) {
        var D = p[k];
        D && o(c, D, k, U);
      }
      return c;
    });
  }
  function Fs(o) {
    return function(c, p, k) {
      for (var F = -1, U = Object(c), q = k(c), D = q.length; D--; ) {
        var X = q[++F];
        if (p(U[X], X, U) === !1)
          break;
      }
      return c;
    };
  }
  function Qt(o, c) {
    var p = o.__data__;
    return Ms(c) ? p[typeof c == "string" ? "string" : "hash"] : p.map;
  }
  function en(o, c) {
    var p = yr(o, c);
    return ks(p) ? p : void 0;
  }
  function Ds(o) {
    var c = Oe.call(o, We), p = o[We];
    try {
      o[We] = void 0;
      var k = !0;
    } catch {
    }
    var F = Ur.call(o);
    return k && (c ? o[We] = p : delete o[We]), F;
  }
  function Is(o) {
    return typeof o.constructor == "function" && !ho(o) ? Kr(kr(o)) : {};
  }
  function bo(o, c) {
    var p = typeof o;
    return c = c ?? d, !!c && (p == "number" || p != "symbol" && jt.test(o)) && o > -1 && o % 1 == 0 && o < c;
  }
  function js(o, c, p) {
    if (!sr(p))
      return !1;
    var k = typeof c;
    return (k == "number" ? nn(p) && bo(c, p.length) : k == "string" && c in p) ? Zt(p[c], o) : !1;
  }
  function Ms(o) {
    var c = typeof o;
    return c == "string" || c == "number" || c == "symbol" || c == "boolean" ? o !== "__proto__" : o === null;
  }
  function Ns(o) {
    return !!Vt && Vt in o;
  }
  function ho(o) {
    var c = o && o.constructor, p = typeof c == "function" && c.prototype || xr;
    return o === p;
  }
  function Ws(o) {
    var c = [];
    if (o != null)
      for (var p in Object(o))
        c.push(p);
    return c;
  }
  function Ls(o) {
    return Ur.call(o);
  }
  function Vs(o, c, p) {
    return c = Gt(c === void 0 ? o.length - 1 : c, 0), function() {
      for (var k = arguments, F = -1, U = Gt(k.length - c, 0), q = Array(U); ++F < U; )
        q[F] = k[c + F];
      F = -1;
      for (var D = Array(c + 1); ++F < c; )
        D[F] = k[F];
      return D[c] = p(q), La(o, this, D);
    };
  }
  function rn(o, c) {
    if (!(c === "constructor" && typeof o[c] == "function") && c != "__proto__")
      return o[c];
  }
  var Hs = Us(Ts);
  function Us(o) {
    var c = 0, p = 0;
    return function() {
      var k = qr(), F = i - (k - p);
      if (p = k, F > 0) {
        if (++c >= n)
          return arguments[0];
      } else
        c = 0;
      return o.apply(void 0, arguments);
    };
  }
  function Gs(o) {
    if (o != null) {
      try {
        return Ke.call(o);
      } catch {
      }
      try {
        return o + "";
      } catch {
      }
    }
    return "";
  }
  function Zt(o, c) {
    return o === c || o !== o && c !== c;
  }
  var tn = fo(/* @__PURE__ */ function() {
    return arguments;
  }()) ? fo : function(o) {
    return Jr(o) && Oe.call(o, "callee") && !Ha.call(o, "callee");
  }, an = Array.isArray;
  function nn(o) {
    return o != null && vo(o.length) && !on(o);
  }
  function Ys(o) {
    return Jr(o) && nn(o);
  }
  var go = Ga || Qs;
  function on(o) {
    if (!sr(o))
      return !1;
    var c = Jt(o);
    return c == y || c == x || c == g || c == H;
  }
  function vo(o) {
    return typeof o == "number" && o > -1 && o % 1 == 0 && o <= d;
  }
  function sr(o) {
    var c = typeof o;
    return o != null && (c == "object" || c == "function");
  }
  function Jr(o) {
    return o != null && typeof o == "object";
  }
  function qs(o) {
    if (!Jr(o) || Jt(o) != $)
      return !1;
    var c = kr(o);
    if (c === null)
      return !0;
    var p = Oe.call(c, "constructor") && c.constructor;
    return typeof p == "function" && p instanceof p && Ke.call(p) == Ht;
  }
  var mo = Vr ? mr(Vr) : ws;
  function Xs(o) {
    return Ps(o, yo(o));
  }
  function yo(o) {
    return nn(o) ? Q(o) : $s(o);
  }
  var Ks = Bs(function(o, c, p, k) {
    po(o, c, p, k);
  });
  function Js(o) {
    return function() {
      return o;
    };
  }
  function So(o) {
    return o;
  }
  function Qs() {
    return !1;
  }
  e.exports = Ks;
})(Ca, Ca.exports);
var sc = Ca.exports;
const ur = /* @__PURE__ */ Nl(sc);
var lc = (e) => /!(important)?$/.test(e), Bo = (e) => typeof e == "string" ? e.replace(/!(important)?$/, "").trim() : e, cc = (e, r) => (t) => {
  const a = String(r), n = lc(a), i = Bo(a), d = e ? `${e}.${i}` : i;
  let u = ar(t.__cssMap) && d in t.__cssMap ? t.__cssMap[d].varRef : r;
  return u = Bo(u), n ? `${u} !important` : u;
};
function ao(e) {
  const { scale: r, transform: t, compose: a } = e;
  return (i, d) => {
    var u;
    const f = cc(r, i)(d);
    let g = (u = t == null ? void 0 : t(f, d)) != null ? u : f;
    return a && (g = a(g, d)), g;
  };
}
var ra = (...e) => (r) => e.reduce((t, a) => a(t), r);
function ke(e, r) {
  return (t) => {
    const a = { property: t, scale: e };
    return a.transform = ao({
      scale: e,
      transform: r
    }), a;
  };
}
var dc = ({ rtl: e, ltr: r }) => (t) => t.direction === "rtl" ? e : r;
function uc(e) {
  const { property: r, scale: t, transform: a } = e;
  return {
    scale: t,
    property: dc(r),
    transform: t ? ao({
      scale: t,
      compose: a
    }) : a
  };
}
var Xi = [
  "rotate(var(--chakra-rotate, 0))",
  "scaleX(var(--chakra-scale-x, 1))",
  "scaleY(var(--chakra-scale-y, 1))",
  "skewX(var(--chakra-skew-x, 0))",
  "skewY(var(--chakra-skew-y, 0))"
];
function fc() {
  return [
    "translateX(var(--chakra-translate-x, 0))",
    "translateY(var(--chakra-translate-y, 0))",
    ...Xi
  ].join(" ");
}
function pc() {
  return [
    "translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",
    ...Xi
  ].join(" ");
}
var bc = {
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
}, hc = {
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
function gc(e) {
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
var vc = {
  "row-reverse": {
    space: "--chakra-space-x-reverse",
    divide: "--chakra-divide-x-reverse"
  },
  "column-reverse": {
    space: "--chakra-space-y-reverse",
    divide: "--chakra-divide-y-reverse"
  }
}, In = {
  "to-t": "to top",
  "to-tr": "to top right",
  "to-r": "to right",
  "to-br": "to bottom right",
  "to-b": "to bottom",
  "to-bl": "to bottom left",
  "to-l": "to left",
  "to-tl": "to top left"
}, mc = new Set(Object.values(In)), jn = /* @__PURE__ */ new Set([
  "none",
  "-moz-initial",
  "inherit",
  "initial",
  "revert",
  "unset"
]), yc = (e) => e.trim();
function Sc(e, r) {
  if (e == null || jn.has(e))
    return e;
  if (!(Mn(e) || jn.has(e)))
    return `url('${e}')`;
  const n = /(^[a-z-A-Z]+)\((.*)\)/g.exec(e), i = n == null ? void 0 : n[1], d = n == null ? void 0 : n[2];
  if (!i || !d)
    return e;
  const u = i.includes("-gradient") ? i : `${i}-gradient`, [f, ...g] = d.split(",").map(yc).filter(Boolean);
  if ((g == null ? void 0 : g.length) === 0)
    return e;
  const h = f in In ? In[f] : f;
  g.unshift(h);
  const _ = g.map((m) => {
    if (mc.has(m))
      return m;
    const y = m.indexOf(" "), [x, b] = y !== -1 ? [m.substr(0, y), m.substr(y + 1)] : [m], w = Mn(b) ? b : b && b.split(" "), C = `colors.${x}`, $ = C in r.__cssMap ? r.__cssMap[C].varRef : x;
    return w ? [
      $,
      ...Array.isArray(w) ? w : [w]
    ].join(" ") : $;
  });
  return `${u}(${_.join(", ")})`;
}
var Mn = (e) => typeof e == "string" && e.includes("(") && e.includes(")"), xc = (e, r) => Sc(e, r ?? {});
function _c(e) {
  return /^var\(--.+\)$/.test(e);
}
var kc = (e) => {
  const r = parseFloat(e.toString()), t = e.toString().replace(String(r), "");
  return { unitless: !t, value: r, unit: t };
}, Pe = (e) => (r) => `${e}(${r})`, P = {
  filter(e) {
    return e !== "auto" ? e : bc;
  },
  backdropFilter(e) {
    return e !== "auto" ? e : hc;
  },
  ring(e) {
    return gc(P.px(e));
  },
  bgClip(e) {
    return e === "text" ? { color: "transparent", backgroundClip: "text" } : { backgroundClip: e };
  },
  transform(e) {
    return e === "auto" ? fc() : e === "auto-gpu" ? pc() : e;
  },
  vh(e) {
    return e === "$100vh" ? "var(--chakra-vh)" : e;
  },
  px(e) {
    if (e == null)
      return e;
    const { unitless: r } = kc(e);
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
    if (_c(e) || e == null)
      return e;
    const r = typeof e == "string" && !e.endsWith("deg");
    return typeof e == "number" || r ? `${e}deg` : e;
  },
  gradient: xc,
  blur: Pe("blur"),
  opacity: Pe("opacity"),
  brightness: Pe("brightness"),
  contrast: Pe("contrast"),
  dropShadow: Pe("drop-shadow"),
  grayscale: Pe("grayscale"),
  hueRotate: (e) => Pe("hue-rotate")(P.degree(e)),
  invert: Pe("invert"),
  saturate: Pe("saturate"),
  sepia: Pe("sepia"),
  bgImage(e) {
    return e == null || Mn(e) || jn.has(e) ? e : `url(${e})`;
  },
  outline(e) {
    const r = String(e) === "0" || String(e) === "none";
    return e !== null && r ? { outline: "2px solid transparent", outlineOffset: "2px" } : { outline: e };
  },
  flexDirection(e) {
    var r;
    const { space: t, divide: a } = (r = vc[e]) != null ? r : {}, n = { flexDirection: e };
    return t && (n[t] = 1), a && (n[a] = 1), n;
  }
}, l = {
  borderWidths: ke("borderWidths"),
  borderStyles: ke("borderStyles"),
  colors: ke("colors"),
  borders: ke("borders"),
  gradients: ke("gradients", P.gradient),
  radii: ke("radii", P.px),
  space: ke("space", ra(P.vh, P.px)),
  spaceT: ke("space", ra(P.vh, P.px)),
  degreeT(e) {
    return { property: e, transform: P.degree };
  },
  prop(e, r, t) {
    return {
      property: e,
      scale: r,
      ...r && {
        transform: ao({ scale: r, transform: t })
      }
    };
  },
  propT(e, r) {
    return { property: e, transform: r };
  },
  sizes: ke("sizes", ra(P.vh, P.px)),
  sizesT: ke("sizes", ra(P.vh, P.fraction)),
  shadows: ke("shadows"),
  logical: uc,
  blur: ke("blur", P.blur)
}, fa = {
  background: l.colors("background"),
  backgroundColor: l.colors("backgroundColor"),
  backgroundImage: l.gradients("backgroundImage"),
  backgroundSize: !0,
  backgroundPosition: !0,
  backgroundRepeat: !0,
  backgroundAttachment: !0,
  backgroundClip: { transform: P.bgClip },
  bgSize: l.prop("backgroundSize"),
  bgPosition: l.prop("backgroundPosition"),
  bg: l.colors("background"),
  bgColor: l.colors("backgroundColor"),
  bgPos: l.prop("backgroundPosition"),
  bgRepeat: l.prop("backgroundRepeat"),
  bgAttachment: l.prop("backgroundAttachment"),
  bgGradient: l.gradients("backgroundImage"),
  bgClip: { transform: P.bgClip }
};
Object.assign(fa, {
  bgImage: fa.backgroundImage,
  bgImg: fa.backgroundImage
});
var I = {
  border: l.borders("border"),
  borderWidth: l.borderWidths("borderWidth"),
  borderStyle: l.borderStyles("borderStyle"),
  borderColor: l.colors("borderColor"),
  borderRadius: l.radii("borderRadius"),
  borderTop: l.borders("borderTop"),
  borderBlockStart: l.borders("borderBlockStart"),
  borderTopLeftRadius: l.radii("borderTopLeftRadius"),
  borderStartStartRadius: l.logical({
    scale: "radii",
    property: {
      ltr: "borderTopLeftRadius",
      rtl: "borderTopRightRadius"
    }
  }),
  borderEndStartRadius: l.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomLeftRadius",
      rtl: "borderBottomRightRadius"
    }
  }),
  borderTopRightRadius: l.radii("borderTopRightRadius"),
  borderStartEndRadius: l.logical({
    scale: "radii",
    property: {
      ltr: "borderTopRightRadius",
      rtl: "borderTopLeftRadius"
    }
  }),
  borderEndEndRadius: l.logical({
    scale: "radii",
    property: {
      ltr: "borderBottomRightRadius",
      rtl: "borderBottomLeftRadius"
    }
  }),
  borderRight: l.borders("borderRight"),
  borderInlineEnd: l.borders("borderInlineEnd"),
  borderBottom: l.borders("borderBottom"),
  borderBlockEnd: l.borders("borderBlockEnd"),
  borderBottomLeftRadius: l.radii("borderBottomLeftRadius"),
  borderBottomRightRadius: l.radii("borderBottomRightRadius"),
  borderLeft: l.borders("borderLeft"),
  borderInlineStart: {
    property: "borderInlineStart",
    scale: "borders"
  },
  borderInlineStartRadius: l.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopLeftRadius", "borderBottomLeftRadius"],
      rtl: ["borderTopRightRadius", "borderBottomRightRadius"]
    }
  }),
  borderInlineEndRadius: l.logical({
    scale: "radii",
    property: {
      ltr: ["borderTopRightRadius", "borderBottomRightRadius"],
      rtl: ["borderTopLeftRadius", "borderBottomLeftRadius"]
    }
  }),
  borderX: l.borders(["borderLeft", "borderRight"]),
  borderInline: l.borders("borderInline"),
  borderY: l.borders(["borderTop", "borderBottom"]),
  borderBlock: l.borders("borderBlock"),
  borderTopWidth: l.borderWidths("borderTopWidth"),
  borderBlockStartWidth: l.borderWidths("borderBlockStartWidth"),
  borderTopColor: l.colors("borderTopColor"),
  borderBlockStartColor: l.colors("borderBlockStartColor"),
  borderTopStyle: l.borderStyles("borderTopStyle"),
  borderBlockStartStyle: l.borderStyles("borderBlockStartStyle"),
  borderBottomWidth: l.borderWidths("borderBottomWidth"),
  borderBlockEndWidth: l.borderWidths("borderBlockEndWidth"),
  borderBottomColor: l.colors("borderBottomColor"),
  borderBlockEndColor: l.colors("borderBlockEndColor"),
  borderBottomStyle: l.borderStyles("borderBottomStyle"),
  borderBlockEndStyle: l.borderStyles("borderBlockEndStyle"),
  borderLeftWidth: l.borderWidths("borderLeftWidth"),
  borderInlineStartWidth: l.borderWidths("borderInlineStartWidth"),
  borderLeftColor: l.colors("borderLeftColor"),
  borderInlineStartColor: l.colors("borderInlineStartColor"),
  borderLeftStyle: l.borderStyles("borderLeftStyle"),
  borderInlineStartStyle: l.borderStyles("borderInlineStartStyle"),
  borderRightWidth: l.borderWidths("borderRightWidth"),
  borderInlineEndWidth: l.borderWidths("borderInlineEndWidth"),
  borderRightColor: l.colors("borderRightColor"),
  borderInlineEndColor: l.colors("borderInlineEndColor"),
  borderRightStyle: l.borderStyles("borderRightStyle"),
  borderInlineEndStyle: l.borderStyles("borderInlineEndStyle"),
  borderTopRadius: l.radii(["borderTopLeftRadius", "borderTopRightRadius"]),
  borderBottomRadius: l.radii([
    "borderBottomLeftRadius",
    "borderBottomRightRadius"
  ]),
  borderLeftRadius: l.radii(["borderTopLeftRadius", "borderBottomLeftRadius"]),
  borderRightRadius: l.radii([
    "borderTopRightRadius",
    "borderBottomRightRadius"
  ])
};
Object.assign(I, {
  rounded: I.borderRadius,
  roundedTop: I.borderTopRadius,
  roundedTopLeft: I.borderTopLeftRadius,
  roundedTopRight: I.borderTopRightRadius,
  roundedTopStart: I.borderStartStartRadius,
  roundedTopEnd: I.borderStartEndRadius,
  roundedBottom: I.borderBottomRadius,
  roundedBottomLeft: I.borderBottomLeftRadius,
  roundedBottomRight: I.borderBottomRightRadius,
  roundedBottomStart: I.borderEndStartRadius,
  roundedBottomEnd: I.borderEndEndRadius,
  roundedLeft: I.borderLeftRadius,
  roundedRight: I.borderRightRadius,
  roundedStart: I.borderInlineStartRadius,
  roundedEnd: I.borderInlineEndRadius,
  borderStart: I.borderInlineStart,
  borderEnd: I.borderInlineEnd,
  borderTopStartRadius: I.borderStartStartRadius,
  borderTopEndRadius: I.borderStartEndRadius,
  borderBottomStartRadius: I.borderEndStartRadius,
  borderBottomEndRadius: I.borderEndEndRadius,
  borderStartRadius: I.borderInlineStartRadius,
  borderEndRadius: I.borderInlineEndRadius,
  borderStartWidth: I.borderInlineStartWidth,
  borderEndWidth: I.borderInlineEndWidth,
  borderStartColor: I.borderInlineStartColor,
  borderEndColor: I.borderInlineEndColor,
  borderStartStyle: I.borderInlineStartStyle,
  borderEndStyle: I.borderInlineEndStyle
});
var wc = {
  color: l.colors("color"),
  textColor: l.colors("color"),
  fill: l.colors("fill"),
  stroke: l.colors("stroke")
}, Nn = {
  boxShadow: l.shadows("boxShadow"),
  mixBlendMode: !0,
  blendMode: l.prop("mixBlendMode"),
  backgroundBlendMode: !0,
  bgBlendMode: l.prop("backgroundBlendMode"),
  opacity: !0
};
Object.assign(Nn, {
  shadow: Nn.boxShadow
});
var $c = {
  filter: { transform: P.filter },
  blur: l.blur("--chakra-blur"),
  brightness: l.propT("--chakra-brightness", P.brightness),
  contrast: l.propT("--chakra-contrast", P.contrast),
  hueRotate: l.propT("--chakra-hue-rotate", P.hueRotate),
  invert: l.propT("--chakra-invert", P.invert),
  saturate: l.propT("--chakra-saturate", P.saturate),
  dropShadow: l.propT("--chakra-drop-shadow", P.dropShadow),
  backdropFilter: { transform: P.backdropFilter },
  backdropBlur: l.blur("--chakra-backdrop-blur"),
  backdropBrightness: l.propT(
    "--chakra-backdrop-brightness",
    P.brightness
  ),
  backdropContrast: l.propT("--chakra-backdrop-contrast", P.contrast),
  backdropHueRotate: l.propT(
    "--chakra-backdrop-hue-rotate",
    P.hueRotate
  ),
  backdropInvert: l.propT("--chakra-backdrop-invert", P.invert),
  backdropSaturate: l.propT("--chakra-backdrop-saturate", P.saturate)
}, Ta = {
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
  flexBasis: l.sizes("flexBasis"),
  justifySelf: !0,
  alignSelf: !0,
  order: !0,
  placeItems: !0,
  placeContent: !0,
  placeSelf: !0,
  gap: l.space("gap"),
  rowGap: l.space("rowGap"),
  columnGap: l.space("columnGap")
};
Object.assign(Ta, {
  flexDir: Ta.flexDirection
});
var Ki = {
  gridGap: l.space("gridGap"),
  gridColumnGap: l.space("gridColumnGap"),
  gridRowGap: l.space("gridRowGap"),
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
}, Ec = {
  appearance: !0,
  cursor: !0,
  resize: !0,
  userSelect: !0,
  pointerEvents: !0,
  outline: { transform: P.outline },
  outlineOffset: !0,
  outlineColor: l.colors("outlineColor")
}, we = {
  width: l.sizesT("width"),
  inlineSize: l.sizesT("inlineSize"),
  height: l.sizes("height"),
  blockSize: l.sizes("blockSize"),
  boxSize: l.sizes(["width", "height"]),
  minWidth: l.sizes("minWidth"),
  minInlineSize: l.sizes("minInlineSize"),
  minHeight: l.sizes("minHeight"),
  minBlockSize: l.sizes("minBlockSize"),
  maxWidth: l.sizes("maxWidth"),
  maxInlineSize: l.sizes("maxInlineSize"),
  maxHeight: l.sizes("maxHeight"),
  maxBlockSize: l.sizes("maxBlockSize"),
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
  float: l.propT("float", P.float),
  objectFit: !0,
  objectPosition: !0,
  visibility: !0,
  isolation: !0
};
Object.assign(we, {
  w: we.width,
  h: we.height,
  minW: we.minWidth,
  maxW: we.maxWidth,
  minH: we.minHeight,
  maxH: we.maxHeight,
  overscroll: we.overscrollBehavior,
  overscrollX: we.overscrollBehaviorX,
  overscrollY: we.overscrollBehaviorY
});
var Cc = {
  listStyleType: !0,
  listStylePosition: !0,
  listStylePos: l.prop("listStylePosition"),
  listStyleImage: !0,
  listStyleImg: l.prop("listStyleImage")
};
function Tc(e, r, t, a) {
  const n = typeof r == "string" ? r.split(".") : [r];
  for (a = 0; a < n.length && e; a += 1)
    e = e[n[a]];
  return e === void 0 ? t : e;
}
var Rc = (e) => {
  const r = /* @__PURE__ */ new WeakMap();
  return (a, n, i, d) => {
    if (typeof a > "u")
      return e(a, n, i);
    r.has(a) || r.set(a, /* @__PURE__ */ new Map());
    const u = r.get(a);
    if (u.has(n))
      return u.get(n);
    const f = e(a, n, i, d);
    return u.set(n, f), f;
  };
}, zc = Rc(Tc), Ac = {
  border: "0px",
  clip: "rect(0, 0, 0, 0)",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: "0px",
  overflow: "hidden",
  whiteSpace: "nowrap",
  position: "absolute"
}, Oc = {
  position: "static",
  width: "auto",
  height: "auto",
  clip: "auto",
  padding: "0",
  margin: "0",
  overflow: "visible",
  whiteSpace: "normal"
}, un = (e, r, t) => {
  const a = {}, n = zc(e, r, {});
  for (const i in n)
    i in t && t[i] != null || (a[i] = n[i]);
  return a;
}, Pc = {
  srOnly: {
    transform(e) {
      return e === !0 ? Ac : e === "focusable" ? Oc : {};
    }
  },
  layerStyle: {
    processResult: !0,
    transform: (e, r, t) => un(r, `layerStyles.${e}`, t)
  },
  textStyle: {
    processResult: !0,
    transform: (e, r, t) => un(r, `textStyles.${e}`, t)
  },
  apply: {
    processResult: !0,
    transform: (e, r, t) => un(r, e, t)
  }
}, pt = {
  position: !0,
  pos: l.prop("position"),
  zIndex: l.prop("zIndex", "zIndices"),
  inset: l.spaceT("inset"),
  insetX: l.spaceT(["left", "right"]),
  insetInline: l.spaceT("insetInline"),
  insetY: l.spaceT(["top", "bottom"]),
  insetBlock: l.spaceT("insetBlock"),
  top: l.spaceT("top"),
  insetBlockStart: l.spaceT("insetBlockStart"),
  bottom: l.spaceT("bottom"),
  insetBlockEnd: l.spaceT("insetBlockEnd"),
  left: l.spaceT("left"),
  insetInlineStart: l.logical({
    scale: "space",
    property: { ltr: "left", rtl: "right" }
  }),
  right: l.spaceT("right"),
  insetInlineEnd: l.logical({
    scale: "space",
    property: { ltr: "right", rtl: "left" }
  })
};
Object.assign(pt, {
  insetStart: pt.insetInlineStart,
  insetEnd: pt.insetInlineEnd
});
var Bc = {
  ring: { transform: P.ring },
  ringColor: l.colors("--chakra-ring-color"),
  ringOffset: l.prop("--chakra-ring-offset-width"),
  ringOffsetColor: l.colors("--chakra-ring-offset-color"),
  ringInset: l.prop("--chakra-ring-inset")
}, Y = {
  margin: l.spaceT("margin"),
  marginTop: l.spaceT("marginTop"),
  marginBlockStart: l.spaceT("marginBlockStart"),
  marginRight: l.spaceT("marginRight"),
  marginInlineEnd: l.spaceT("marginInlineEnd"),
  marginBottom: l.spaceT("marginBottom"),
  marginBlockEnd: l.spaceT("marginBlockEnd"),
  marginLeft: l.spaceT("marginLeft"),
  marginInlineStart: l.spaceT("marginInlineStart"),
  marginX: l.spaceT(["marginInlineStart", "marginInlineEnd"]),
  marginInline: l.spaceT("marginInline"),
  marginY: l.spaceT(["marginTop", "marginBottom"]),
  marginBlock: l.spaceT("marginBlock"),
  padding: l.space("padding"),
  paddingTop: l.space("paddingTop"),
  paddingBlockStart: l.space("paddingBlockStart"),
  paddingRight: l.space("paddingRight"),
  paddingBottom: l.space("paddingBottom"),
  paddingBlockEnd: l.space("paddingBlockEnd"),
  paddingLeft: l.space("paddingLeft"),
  paddingInlineStart: l.space("paddingInlineStart"),
  paddingInlineEnd: l.space("paddingInlineEnd"),
  paddingX: l.space(["paddingInlineStart", "paddingInlineEnd"]),
  paddingInline: l.space("paddingInline"),
  paddingY: l.space(["paddingTop", "paddingBottom"]),
  paddingBlock: l.space("paddingBlock")
};
Object.assign(Y, {
  m: Y.margin,
  mt: Y.marginTop,
  mr: Y.marginRight,
  me: Y.marginInlineEnd,
  marginEnd: Y.marginInlineEnd,
  mb: Y.marginBottom,
  ml: Y.marginLeft,
  ms: Y.marginInlineStart,
  marginStart: Y.marginInlineStart,
  mx: Y.marginX,
  my: Y.marginY,
  p: Y.padding,
  pt: Y.paddingTop,
  py: Y.paddingY,
  px: Y.paddingX,
  pb: Y.paddingBottom,
  pl: Y.paddingLeft,
  ps: Y.paddingInlineStart,
  paddingStart: Y.paddingInlineStart,
  pr: Y.paddingRight,
  pe: Y.paddingInlineEnd,
  paddingEnd: Y.paddingInlineEnd
});
var Fc = {
  textDecorationColor: l.colors("textDecorationColor"),
  textDecoration: !0,
  textDecor: { property: "textDecoration" },
  textDecorationLine: !0,
  textDecorationStyle: !0,
  textDecorationThickness: !0,
  textUnderlineOffset: !0,
  textShadow: l.shadows("textShadow")
}, Dc = {
  clipPath: !0,
  transform: l.propT("transform", P.transform),
  transformOrigin: !0,
  translateX: l.spaceT("--chakra-translate-x"),
  translateY: l.spaceT("--chakra-translate-y"),
  skewX: l.degreeT("--chakra-skew-x"),
  skewY: l.degreeT("--chakra-skew-y"),
  scaleX: l.prop("--chakra-scale-x"),
  scaleY: l.prop("--chakra-scale-y"),
  scale: l.prop(["--chakra-scale-x", "--chakra-scale-y"]),
  rotate: l.degreeT("--chakra-rotate")
}, Ic = {
  transition: !0,
  transitionDelay: !0,
  animation: !0,
  willChange: !0,
  transitionDuration: l.prop("transitionDuration", "transition.duration"),
  transitionProperty: l.prop("transitionProperty", "transition.property"),
  transitionTimingFunction: l.prop(
    "transitionTimingFunction",
    "transition.easing"
  )
}, jc = {
  fontFamily: l.prop("fontFamily", "fonts"),
  fontSize: l.prop("fontSize", "fontSizes", P.px),
  fontWeight: l.prop("fontWeight", "fontWeights"),
  lineHeight: l.prop("lineHeight", "lineHeights"),
  letterSpacing: l.prop("letterSpacing", "letterSpacings"),
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
}, Mc = {
  scrollBehavior: !0,
  scrollSnapAlign: !0,
  scrollSnapStop: !0,
  scrollSnapType: !0,
  // scroll margin
  scrollMargin: l.spaceT("scrollMargin"),
  scrollMarginTop: l.spaceT("scrollMarginTop"),
  scrollMarginBottom: l.spaceT("scrollMarginBottom"),
  scrollMarginLeft: l.spaceT("scrollMarginLeft"),
  scrollMarginRight: l.spaceT("scrollMarginRight"),
  scrollMarginX: l.spaceT(["scrollMarginLeft", "scrollMarginRight"]),
  scrollMarginY: l.spaceT(["scrollMarginTop", "scrollMarginBottom"]),
  // scroll padding
  scrollPadding: l.spaceT("scrollPadding"),
  scrollPaddingTop: l.spaceT("scrollPaddingTop"),
  scrollPaddingBottom: l.spaceT("scrollPaddingBottom"),
  scrollPaddingLeft: l.spaceT("scrollPaddingLeft"),
  scrollPaddingRight: l.spaceT("scrollPaddingRight"),
  scrollPaddingX: l.spaceT(["scrollPaddingLeft", "scrollPaddingRight"]),
  scrollPaddingY: l.spaceT(["scrollPaddingTop", "scrollPaddingBottom"])
};
function Ji(e) {
  return ar(e) && e.reference ? e.reference : String(e);
}
var ja = (e, ...r) => r.map(Ji).join(` ${e} `).replace(/calc/g, ""), Fo = (...e) => `calc(${ja("+", ...e)})`, Do = (...e) => `calc(${ja("-", ...e)})`, Wn = (...e) => `calc(${ja("*", ...e)})`, Io = (...e) => `calc(${ja("/", ...e)})`, jo = (e) => {
  const r = Ji(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Wn(r, -1);
}, tt = Object.assign(
  (e) => ({
    add: (...r) => tt(Fo(e, ...r)),
    subtract: (...r) => tt(Do(e, ...r)),
    multiply: (...r) => tt(Wn(e, ...r)),
    divide: (...r) => tt(Io(e, ...r)),
    negate: () => tt(jo(e)),
    toString: () => e.toString()
  }),
  {
    add: Fo,
    subtract: Do,
    multiply: Wn,
    divide: Io,
    negate: jo
  }
);
function Nc(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function Wc(e) {
  const r = Nc(e.toString());
  return Vc(Lc(r));
}
function Lc(e) {
  return e.includes("\\.") ? e : !Number.isInteger(parseFloat(e.toString())) ? e.replace(".", "\\.") : e;
}
function Vc(e) {
  return e.replace(/[!-,/:-@[-^`{-~]/g, "\\$&");
}
function Hc(e, r = "") {
  return [r, e].filter(Boolean).join("-");
}
function Uc(e, r) {
  return `var(${e}${r ? `, ${r}` : ""})`;
}
function Gc(e, r = "") {
  return Wc(`--${Hc(e, r)}`);
}
function T(e, r, t) {
  const a = Gc(e, t);
  return {
    variable: a,
    reference: Uc(a, r)
  };
}
function Yc(e, r) {
  const t = {};
  for (const a of r) {
    if (Array.isArray(a)) {
      const [n, i] = a;
      t[n] = T(`${e}-${n}`, i);
      continue;
    }
    t[a] = T(`${e}-${a}`);
  }
  return t;
}
var ie = {
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
}, Ze = (e) => Qi((r) => e(r, "&"), "[role=group]", "[data-group]", ".group"), Le = (e) => Qi((r) => e(r, "~ &"), "[data-peer]", ".peer"), Qi = (e, ...r) => r.map(e).join(", "), no = {
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
  _groupHover: Ze(ie.hover),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is hovered
   */
  _peerHover: Le(ie.hover),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is focused
   */
  _groupFocus: Ze(ie.focus),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is focused
   */
  _peerFocus: Le(ie.focus),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` has visible focus
   */
  _groupFocusVisible: Ze(ie.focusVisible),
  /**
   * Styles to apply when a sibling element with `.peer`or `data-peer` has visible focus
   */
  _peerFocusVisible: Le(ie.focusVisible),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is active
   */
  _groupActive: Ze(ie.active),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is active
   */
  _peerActive: Le(ie.active),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is disabled
   */
  _groupDisabled: Ze(ie.disabled),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is disabled
   */
  _peerDisabled: Le(ie.disabled),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` is invalid
   */
  _groupInvalid: Ze(ie.invalid),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` is invalid
   */
  _peerInvalid: Le(ie.invalid),
  /**
   * Styles to apply when a parent element with `.group`, `data-group` or `role=group` is checked
   */
  _groupChecked: Ze(ie.checked),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` is checked
   */
  _peerChecked: Le(ie.checked),
  /**
   *  Styles to apply when a parent element with `.group`, `data-group` or `role=group` has focus within
   */
  _groupFocusWithin: Ze(ie.focusWithin),
  /**
   *  Styles to apply when a sibling element with `.peer` or `data-peer` has focus within
   */
  _peerFocusWithin: Le(ie.focusWithin),
  /**
   * Styles to apply when a sibling element with `.peer` or `data-peer` has placeholder shown
   */
  _peerPlaceholderShown: Le(ie.placeholderShown),
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
}, qc = Object.keys(
  no
), oo = ur(
  {},
  fa,
  I,
  wc,
  Ta,
  we,
  $c,
  Bc,
  Ec,
  Ki,
  Pc,
  pt,
  Nn,
  Y,
  Mc,
  jc,
  Fc,
  Dc,
  Cc,
  Ic
);
Object.assign({}, Y, we, Ta, Ki, pt);
var Xc = [...Object.keys(oo), ...qc], Kc = { ...oo, ...no }, Jc = (e) => e in Kc, Qc = (e) => (r) => {
  if (!r.__breakpoints)
    return e;
  const { isResponsive: t, toArrayValue: a, media: n } = r.__breakpoints, i = {};
  for (const d in e) {
    let u = st(e[d], r);
    if (u == null)
      continue;
    if (u = ar(u) && t(u) ? a(u) : u, !Array.isArray(u)) {
      i[d] = u;
      continue;
    }
    const f = u.slice(0, n.length).length;
    for (let g = 0; g < f; g += 1) {
      const h = n == null ? void 0 : n[g];
      if (!h) {
        i[d] = u[g];
        continue;
      }
      i[h] = i[h] || {}, u[g] != null && (i[h][d] = u[g]);
    }
  }
  return i;
};
function Zc(e) {
  const r = [];
  let t = "", a = !1;
  for (let n = 0; n < e.length; n++) {
    const i = e[n];
    i === "(" ? (a = !0, t += i) : i === ")" ? (a = !1, t += i) : i === "," && !a ? (r.push(t), t = "") : t += i;
  }
  return t = t.trim(), t && r.push(t), r;
}
function ed(e) {
  return /^var\(--.+\)$/.test(e);
}
var rd = (e, r) => e.startsWith("--") && typeof r == "string" && !ed(r), td = (e, r) => {
  var t, a;
  if (r == null)
    return r;
  const n = (f) => {
    var g, h;
    return (h = (g = e.__cssMap) == null ? void 0 : g[f]) == null ? void 0 : h.varRef;
  }, i = (f) => {
    var g;
    return (g = n(f)) != null ? g : f;
  }, [d, u] = Zc(r);
  return r = (a = (t = n(d)) != null ? t : i(u)) != null ? a : i(r), r;
};
function ad(e) {
  const { configs: r = {}, pseudos: t = {}, theme: a } = e, n = (i, d = !1) => {
    var u, f, g;
    const h = st(i, a), _ = Qc(h)(a);
    let m = {};
    for (let y in _) {
      const x = _[y];
      let b = st(x, a);
      y in t && (y = t[y]), rd(y, b) && (b = td(a, b));
      let w = r[y];
      if (w === !0 && (w = { property: y }), ar(b)) {
        m[y] = (u = m[y]) != null ? u : {}, m[y] = ur(
          {},
          m[y],
          n(b, !0)
        );
        continue;
      }
      let C = (g = (f = w == null ? void 0 : w.transform) == null ? void 0 : f.call(w, b, a, h)) != null ? g : b;
      C = w != null && w.processResult ? n(C, !0) : C;
      const $ = st(w == null ? void 0 : w.property, a);
      if (!d && (w != null && w.static)) {
        const H = st(w.static, a);
        m = ur({}, m, H);
      }
      if ($ && Array.isArray($)) {
        for (const H of $)
          m[H] = C;
        continue;
      }
      if ($) {
        $ === "&" && ar(C) ? m = ur({}, m, C) : m[$] = C;
        continue;
      }
      if (ar(C)) {
        m = ur({}, m, C);
        continue;
      }
      m[y] = C;
    }
    return m;
  };
  return n;
}
var nd = (e) => (r) => ad({
  theme: r,
  pseudos: no,
  configs: oo
})(e);
function G(e) {
  return {
    definePartsStyle(r) {
      return r;
    },
    defineMultiStyleConfig(r) {
      return { parts: e, ...r };
    }
  };
}
var od = [
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
function id(e) {
  return ar(e) ? od.every(
    (r) => Object.prototype.hasOwnProperty.call(e, r)
  ) : !1;
}
var sd = {
  common: "background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",
  colors: "background-color, border-color, color, fill, stroke",
  dimensions: "width, height",
  position: "left, right, top, bottom",
  background: "background-color, background-image, background-position"
}, ld = {
  "ease-in": "cubic-bezier(0.4, 0, 1, 1)",
  "ease-out": "cubic-bezier(0, 0, 0.2, 1)",
  "ease-in-out": "cubic-bezier(0.4, 0, 0.2, 1)"
}, cd = {
  "ultra-fast": "50ms",
  faster: "100ms",
  fast: "150ms",
  normal: "200ms",
  slow: "300ms",
  slower: "400ms",
  "ultra-slow": "500ms"
}, dd = {
  property: sd,
  easing: ld,
  duration: cd
}, ud = dd, fd = {
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
}, pd = fd, bd = {
  none: 0,
  "1px": "1px solid",
  "2px": "2px solid",
  "4px": "4px solid",
  "8px": "8px solid"
}, hd = bd, gd = {
  base: "0em",
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em"
}, vd = gd, md = {
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
}, yd = md, Sd = {
  none: "0",
  sm: "0.125rem",
  base: "0.25rem",
  md: "0.375rem",
  lg: "0.5rem",
  xl: "0.75rem",
  "2xl": "1rem",
  "3xl": "1.5rem",
  full: "9999px"
}, xd = Sd, _d = {
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
}, kd = _d, wd = {
  none: 0,
  sm: "4px",
  base: "8px",
  md: "12px",
  lg: "16px",
  xl: "24px",
  "2xl": "40px",
  "3xl": "64px"
}, $d = wd, Ed = {
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
}, Zi = Ed, es = {
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
}, Cd = {
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
}, Td = {
  sm: "640px",
  md: "768px",
  lg: "1024px",
  xl: "1280px"
}, Rd = {
  ...es,
  ...Cd,
  container: Td
}, rs = Rd, zd = {
  breakpoints: vd,
  zIndices: pd,
  radii: xd,
  blur: $d,
  colors: yd,
  ...Zi,
  sizes: rs,
  shadows: kd,
  space: es,
  borders: hd,
  transition: ud
}, { defineMultiStyleConfig: Ad, definePartsStyle: lt } = G([
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
]), Ve = T("stepper-indicator-size"), Cr = T("stepper-icon-size"), Tr = T("stepper-title-font-size"), ct = T("stepper-description-font-size"), at = T("stepper-accent-color"), Od = lt(({ colorScheme: e }) => ({
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
    [at.variable]: `colors.${e}.500`,
    _dark: {
      [at.variable]: `colors.${e}.200`
    }
  },
  title: {
    fontSize: Tr.reference,
    fontWeight: "medium"
  },
  description: {
    fontSize: ct.reference,
    color: "chakra-subtle-text"
  },
  number: {
    fontSize: Tr.reference
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
    width: Cr.reference,
    height: Cr.reference
  },
  indicator: {
    flexShrink: 0,
    borderRadius: "full",
    width: Ve.reference,
    height: Ve.reference,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    "&[data-status=active]": {
      borderWidth: "2px",
      borderColor: at.reference
    },
    "&[data-status=complete]": {
      bg: at.reference,
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
      bg: at.reference
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
      maxHeight: `calc(100% - ${Ve.reference} - 8px)`,
      top: `calc(${Ve.reference} + 4px)`,
      insetStart: `calc(${Ve.reference} / 2 - 1px)`
    }
  }
})), Pd = Ad({
  baseStyle: Od,
  sizes: {
    xs: lt({
      stepper: {
        [Ve.variable]: "sizes.4",
        [Cr.variable]: "sizes.3",
        [Tr.variable]: "fontSizes.xs",
        [ct.variable]: "fontSizes.xs"
      }
    }),
    sm: lt({
      stepper: {
        [Ve.variable]: "sizes.6",
        [Cr.variable]: "sizes.4",
        [Tr.variable]: "fontSizes.sm",
        [ct.variable]: "fontSizes.xs"
      }
    }),
    md: lt({
      stepper: {
        [Ve.variable]: "sizes.8",
        [Cr.variable]: "sizes.5",
        [Tr.variable]: "fontSizes.md",
        [ct.variable]: "fontSizes.sm"
      }
    }),
    lg: lt({
      stepper: {
        [Ve.variable]: "sizes.10",
        [Cr.variable]: "sizes.6",
        [Tr.variable]: "fontSizes.lg",
        [ct.variable]: "fontSizes.md"
      }
    })
  },
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
});
function W(e, r = {}) {
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
  function n(...h) {
    a();
    for (const _ of h)
      r[_] = f(_);
    return W(e, r);
  }
  function i(...h) {
    for (const _ of h)
      _ in r || (r[_] = f(_));
    return W(e, r);
  }
  function d() {
    return Object.fromEntries(
      Object.entries(r).map(([_, m]) => [_, m.selector])
    );
  }
  function u() {
    return Object.fromEntries(
      Object.entries(r).map(([_, m]) => [_, m.className])
    );
  }
  function f(h) {
    const y = `chakra-${(["container", "root"].includes(h ?? "") ? [e] : [e, h]).filter(Boolean).join("__")}`;
    return {
      className: y,
      selector: `.${y}`,
      toString: () => h
    };
  }
  return {
    parts: n,
    toPart: f,
    extend: i,
    selectors: d,
    classnames: u,
    get keys() {
      return Object.keys(r);
    },
    __type: {}
  };
}
var Bd = W("accordion").parts("root", "container", "button", "panel").extend("icon"), Fd = W("alert").parts("title", "description", "container").extend("icon", "spinner"), Dd = W("avatar").parts("label", "badge", "container").extend("excessLabel", "group"), Id = W("breadcrumb").parts("link", "item", "container").extend("separator");
W("button").parts();
var jd = W("checkbox").parts("control", "icon", "container").extend("label");
W("progress").parts("track", "filledTrack").extend("label");
var Md = W("drawer").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Nd = W("editable").parts(
  "preview",
  "input",
  "textarea"
), Wd = W("form").parts(
  "container",
  "requiredIndicator",
  "helperText"
), Ld = W("formError").parts("text", "icon"), Vd = W("input").parts(
  "addon",
  "field",
  "element",
  "group"
), Hd = W("list").parts("container", "item", "icon"), Ud = W("menu").parts("button", "list", "item").extend("groupTitle", "icon", "command", "divider"), Gd = W("modal").parts("overlay", "dialogContainer", "dialog").extend("header", "closeButton", "body", "footer"), Yd = W("numberinput").parts(
  "root",
  "field",
  "stepperGroup",
  "stepper"
);
W("pininput").parts("field");
var qd = W("popover").parts("content", "header", "body", "footer").extend("popper", "arrow", "closeButton"), Xd = W("progress").parts(
  "label",
  "filledTrack",
  "track"
), Kd = W("radio").parts(
  "container",
  "control",
  "label"
), Jd = W("select").parts("field", "icon"), Qd = W("slider").parts(
  "container",
  "track",
  "thumb",
  "filledTrack",
  "mark"
), Zd = W("stat").parts(
  "container",
  "label",
  "helpText",
  "number",
  "icon"
), eu = W("switch").parts(
  "container",
  "track",
  "thumb",
  "label"
), ru = W("table").parts(
  "table",
  "thead",
  "tbody",
  "tr",
  "th",
  "td",
  "tfoot",
  "caption"
), tu = W("tabs").parts(
  "root",
  "tab",
  "tablist",
  "tabpanel",
  "tabpanels",
  "indicator"
), au = W("tag").parts(
  "container",
  "label",
  "closeButton"
), nu = W("card").parts(
  "container",
  "header",
  "body",
  "footer"
);
W("stepper").parts(
  "stepper",
  "step",
  "title",
  "description",
  "indicator",
  "separator",
  "icon",
  "number"
);
function fr(e, r, t) {
  return Math.min(Math.max(e, t), r);
}
class ou extends Error {
  constructor(r) {
    super(`Failed to parse color: "${r}"`);
  }
}
var dt = ou;
function io(e) {
  if (typeof e != "string") throw new dt(e);
  if (e.trim().toLowerCase() === "transparent") return [0, 0, 0, 0];
  let r = e.trim();
  r = pu.test(e) ? lu(e) : e;
  const t = cu.exec(r);
  if (t) {
    const d = Array.from(t).slice(1);
    return [...d.slice(0, 3).map((u) => parseInt(kt(u, 2), 16)), parseInt(kt(d[3] || "f", 2), 16) / 255];
  }
  const a = du.exec(r);
  if (a) {
    const d = Array.from(a).slice(1);
    return [...d.slice(0, 3).map((u) => parseInt(u, 16)), parseInt(d[3] || "ff", 16) / 255];
  }
  const n = uu.exec(r);
  if (n) {
    const d = Array.from(n).slice(1);
    return [...d.slice(0, 3).map((u) => parseInt(u, 10)), parseFloat(d[3] || "1")];
  }
  const i = fu.exec(r);
  if (i) {
    const [d, u, f, g] = Array.from(i).slice(1).map(parseFloat);
    if (fr(0, 100, u) !== u) throw new dt(e);
    if (fr(0, 100, f) !== f) throw new dt(e);
    return [...bu(d, u, f), Number.isNaN(g) ? 1 : g];
  }
  throw new dt(e);
}
function iu(e) {
  let r = 5381, t = e.length;
  for (; t; )
    r = r * 33 ^ e.charCodeAt(--t);
  return (r >>> 0) % 2341;
}
const Mo = (e) => parseInt(e.replace(/_/g, ""), 36), su = "1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e, r) => {
  const t = Mo(r.substring(0, 3)), a = Mo(r.substring(3)).toString(16);
  let n = "";
  for (let i = 0; i < 6 - a.length; i++)
    n += "0";
  return e[t] = `${n}${a}`, e;
}, {});
function lu(e) {
  const r = e.toLowerCase().trim(), t = su[iu(r)];
  if (!t) throw new dt(e);
  return `#${t}`;
}
const kt = (e, r) => Array.from(Array(r)).map(() => e).join(""), cu = new RegExp(`^#${kt("([a-f0-9])", 3)}([a-f0-9])?$`, "i"), du = new RegExp(`^#${kt("([a-f0-9]{2})", 3)}([a-f0-9]{2})?$`, "i"), uu = new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${kt(",\\s*(\\d+)\\s*", 2)}(?:,\\s*([\\d.]+))?\\s*\\)$`, "i"), fu = /^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i, pu = /^[a-z]+$/i, No = (e) => Math.round(e * 255), bu = (e, r, t) => {
  let a = t / 100;
  if (r === 0)
    return [a, a, a].map(No);
  const n = (e % 360 + 360) % 360 / 60, i = (1 - Math.abs(2 * a - 1)) * (r / 100), d = i * (1 - Math.abs(n % 2 - 1));
  let u = 0, f = 0, g = 0;
  n >= 0 && n < 1 ? (u = i, f = d) : n >= 1 && n < 2 ? (u = d, f = i) : n >= 2 && n < 3 ? (f = i, g = d) : n >= 3 && n < 4 ? (f = d, g = i) : n >= 4 && n < 5 ? (u = d, g = i) : n >= 5 && n < 6 && (u = i, g = d);
  const h = a - i / 2, _ = u + h, m = f + h, y = g + h;
  return [_, m, y].map(No);
};
function hu(e, r, t, a) {
  return `rgba(${fr(0, 255, e).toFixed()}, ${fr(0, 255, r).toFixed()}, ${fr(0, 255, t).toFixed()}, ${parseFloat(fr(0, 1, a).toFixed(3))})`;
}
function gu(e, r) {
  const [t, a, n, i] = io(e);
  return hu(t, a, n, i - r);
}
function vu(e) {
  const [r, t, a, n] = io(e);
  let i = (d) => {
    const u = fr(0, 255, d).toString(16);
    return u.length === 1 ? `0${u}` : u;
  };
  return `#${i(r)}${i(t)}${i(a)}${n < 1 ? i(Math.round(n * 255)) : ""}`;
}
function mu(e, r, t, a, n) {
  for (r = r.split ? r.split(".") : r, a = 0; a < r.length; a++)
    e = e ? e[r[a]] : n;
  return e === n ? t : e;
}
var yu = (e) => Object.keys(e).length === 0, ue = (e, r, t) => {
  const a = mu(e, `colors.${r}`, r);
  try {
    return vu(a), a;
  } catch {
    return t ?? "#000000";
  }
}, Su = (e) => {
  const [r, t, a] = io(e);
  return (r * 299 + t * 587 + a * 114) / 1e3;
}, xu = (e) => (r) => {
  const t = ue(r, e);
  return Su(t) < 128 ? "dark" : "light";
}, _u = (e) => (r) => xu(e)(r) === "dark", Nr = (e, r) => (t) => {
  const a = ue(t, e);
  return gu(a, 1 - r);
};
function Wo(e = "1rem", r = "rgba(255, 255, 255, 0.15)") {
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
var ku = () => `#${Math.floor(Math.random() * 16777215).toString(16).padEnd(6, "0")}`;
function wu(e) {
  const r = ku();
  return !e || yu(e) ? r : e.string && e.colors ? Eu(e.string, e.colors) : e.string && !e.colors ? $u(e.string) : e.colors && !e.string ? Cu(e.colors) : r;
}
function $u(e) {
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
function Eu(e, r) {
  let t = 0;
  if (e.length === 0)
    return r[0];
  for (let a = 0; a < e.length; a += 1)
    t = e.charCodeAt(a) + ((t << 5) - t), t = t & t;
  return t = (t % r.length + r.length) % r.length, r[t];
}
function Cu(e) {
  return e[Math.floor(Math.random() * e.length)];
}
function E(e, r) {
  return (t) => t.colorMode === "dark" ? r : e;
}
function so(e) {
  const { orientation: r, vertical: t, horizontal: a } = e;
  return r ? r === "vertical" ? t : a : {};
}
function ts(e) {
  return ar(e) && e.reference ? e.reference : String(e);
}
var Ma = (e, ...r) => r.map(ts).join(` ${e} `).replace(/calc/g, ""), Lo = (...e) => `calc(${Ma("+", ...e)})`, Vo = (...e) => `calc(${Ma("-", ...e)})`, Ln = (...e) => `calc(${Ma("*", ...e)})`, Ho = (...e) => `calc(${Ma("/", ...e)})`, Uo = (e) => {
  const r = ts(e);
  return r != null && !Number.isNaN(parseFloat(r)) ? String(r).startsWith("-") ? String(r).slice(1) : `-${r}` : Ln(r, -1);
}, He = Object.assign(
  (e) => ({
    add: (...r) => He(Lo(e, ...r)),
    subtract: (...r) => He(Vo(e, ...r)),
    multiply: (...r) => He(Ln(e, ...r)),
    divide: (...r) => He(Ho(e, ...r)),
    negate: () => He(Uo(e)),
    toString: () => e.toString()
  }),
  {
    add: Lo,
    subtract: Vo,
    multiply: Ln,
    divide: Ho,
    negate: Uo
  }
);
function Tu(e) {
  return !Number.isInteger(parseFloat(e.toString()));
}
function Ru(e, r = "-") {
  return e.replace(/\s+/g, r);
}
function as(e) {
  const r = Ru(e.toString());
  return r.includes("\\.") ? e : Tu(e) ? r.replace(".", "\\.") : e;
}
function zu(e, r = "") {
  return [r, as(e)].filter(Boolean).join("-");
}
function Au(e, r) {
  return `var(${as(e)}${r ? `, ${r}` : ""})`;
}
function Ou(e, r = "") {
  return `--${zu(e, r)}`;
}
function ne(e, r) {
  const t = Ou(e, void 0);
  return {
    variable: t,
    reference: Au(t, Pu(void 0))
  };
}
function Pu(e) {
  return typeof e == "string" ? e : e == null ? void 0 : e.reference;
}
var { defineMultiStyleConfig: Bu, definePartsStyle: pa } = G(eu.keys), bt = ne("switch-track-width"), pr = ne("switch-track-height"), fn = ne("switch-track-diff"), Fu = He.subtract(bt, pr), Vn = ne("switch-thumb-x"), nt = ne("switch-bg"), Du = (e) => {
  const { colorScheme: r } = e;
  return {
    borderRadius: "full",
    p: "0.5",
    width: [bt.reference],
    height: [pr.reference],
    transitionProperty: "common",
    transitionDuration: "fast",
    [nt.variable]: "colors.gray.300",
    _dark: {
      [nt.variable]: "colors.whiteAlpha.400"
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _disabled: {
      opacity: 0.4,
      cursor: "not-allowed"
    },
    _checked: {
      [nt.variable]: `colors.${r}.500`,
      _dark: {
        [nt.variable]: `colors.${r}.200`
      }
    },
    bg: nt.reference
  };
}, Iu = {
  bg: "white",
  transitionProperty: "transform",
  transitionDuration: "normal",
  borderRadius: "inherit",
  width: [pr.reference],
  height: [pr.reference],
  _checked: {
    transform: `translateX(${Vn.reference})`
  }
}, ju = pa((e) => ({
  container: {
    [fn.variable]: Fu,
    [Vn.variable]: fn.reference,
    _rtl: {
      [Vn.variable]: He(fn).negate().toString()
    }
  },
  track: Du(e),
  thumb: Iu
})), Mu = {
  sm: pa({
    container: {
      [bt.variable]: "1.375rem",
      [pr.variable]: "sizes.3"
    }
  }),
  md: pa({
    container: {
      [bt.variable]: "1.875rem",
      [pr.variable]: "sizes.4"
    }
  }),
  lg: pa({
    container: {
      [bt.variable]: "2.875rem",
      [pr.variable]: "sizes.6"
    }
  })
}, Nu = Bu({
  baseStyle: ju,
  sizes: Mu,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: Wu, definePartsStyle: Fr } = G(ru.keys), Lu = Fr({
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
}), Ra = {
  "&[data-is-numeric=true]": {
    textAlign: "end"
  }
}, Vu = Fr((e) => {
  const { colorScheme: r } = e;
  return {
    th: {
      color: E("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: E(`${r}.100`, `${r}.700`)(e),
      ...Ra
    },
    td: {
      borderBottom: "1px",
      borderColor: E(`${r}.100`, `${r}.700`)(e),
      ...Ra
    },
    caption: {
      color: E("gray.600", "gray.100")(e)
    },
    tfoot: {
      tr: {
        "&:last-of-type": {
          th: { borderBottomWidth: 0 }
        }
      }
    }
  };
}), Hu = Fr((e) => {
  const { colorScheme: r } = e;
  return {
    th: {
      color: E("gray.600", "gray.400")(e),
      borderBottom: "1px",
      borderColor: E(`${r}.100`, `${r}.700`)(e),
      ...Ra
    },
    td: {
      borderBottom: "1px",
      borderColor: E(`${r}.100`, `${r}.700`)(e),
      ...Ra
    },
    caption: {
      color: E("gray.600", "gray.100")(e)
    },
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "th, td": {
            borderBottomWidth: "1px",
            borderColor: E(`${r}.100`, `${r}.700`)(e)
          },
          td: {
            background: E(`${r}.100`, `${r}.700`)(e)
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
}), Uu = {
  simple: Vu,
  striped: Hu,
  unstyled: {}
}, Gu = {
  sm: Fr({
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
  md: Fr({
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
  lg: Fr({
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
}, Yu = Wu({
  baseStyle: Lu,
  variants: Uu,
  sizes: Gu,
  defaultProps: {
    variant: "simple",
    size: "md",
    colorScheme: "gray"
  }
}), be = T("tabs-color"), ze = T("tabs-bg"), ta = T("tabs-border-color"), { defineMultiStyleConfig: qu, definePartsStyle: Ie } = G(tu.keys), Xu = (e) => {
  const { orientation: r } = e;
  return {
    display: r === "vertical" ? "flex" : "block"
  };
}, Ku = (e) => {
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
}, Ju = (e) => {
  const { align: r = "start", orientation: t } = e;
  return {
    justifyContent: {
      end: "flex-end",
      center: "center",
      start: "flex-start"
    }[r],
    flexDirection: t === "vertical" ? "column" : "row"
  };
}, Qu = {
  p: 4
}, Zu = Ie((e) => ({
  root: Xu(e),
  tab: Ku(e),
  tablist: Ju(e),
  tabpanel: Qu
})), ef = {
  sm: Ie({
    tab: {
      py: 1,
      px: 4,
      fontSize: "sm"
    }
  }),
  md: Ie({
    tab: {
      fontSize: "md",
      py: 2,
      px: 4
    }
  }),
  lg: Ie({
    tab: {
      fontSize: "lg",
      py: 3,
      px: 4
    }
  })
}, rf = Ie((e) => {
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
        [be.variable]: `colors.${r}.600`,
        _dark: {
          [be.variable]: `colors.${r}.300`
        },
        borderColor: "currentColor"
      },
      _active: {
        [ze.variable]: "colors.gray.200",
        _dark: {
          [ze.variable]: "colors.whiteAlpha.300"
        }
      },
      _disabled: {
        _active: { bg: "none" }
      },
      color: be.reference,
      bg: ze.reference
    }
  };
}), tf = Ie((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      borderTopRadius: "md",
      border: "1px solid",
      borderColor: "transparent",
      mb: "-1px",
      [ta.variable]: "transparent",
      _selected: {
        [be.variable]: `colors.${r}.600`,
        [ta.variable]: "colors.white",
        _dark: {
          [be.variable]: `colors.${r}.300`,
          [ta.variable]: "colors.gray.800"
        },
        borderColor: "inherit",
        borderBottomColor: ta.reference
      },
      color: be.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), af = Ie((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      border: "1px solid",
      borderColor: "inherit",
      [ze.variable]: "colors.gray.50",
      _dark: {
        [ze.variable]: "colors.whiteAlpha.50"
      },
      mb: "-1px",
      _notLast: {
        marginEnd: "-1px"
      },
      _selected: {
        [ze.variable]: "colors.white",
        [be.variable]: `colors.${r}.600`,
        _dark: {
          [ze.variable]: "colors.gray.800",
          [be.variable]: `colors.${r}.300`
        },
        borderColor: "inherit",
        borderTopColor: "currentColor",
        borderBottomColor: "transparent"
      },
      color: be.reference,
      bg: ze.reference
    },
    tablist: {
      mb: "-1px",
      borderBottom: "1px solid",
      borderColor: "inherit"
    }
  };
}), nf = Ie((e) => {
  const { colorScheme: r, theme: t } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      color: "gray.600",
      _selected: {
        color: ue(t, `${r}.700`),
        bg: ue(t, `${r}.100`)
      }
    }
  };
}), of = Ie((e) => {
  const { colorScheme: r } = e;
  return {
    tab: {
      borderRadius: "full",
      fontWeight: "semibold",
      [be.variable]: "colors.gray.600",
      _dark: {
        [be.variable]: "inherit"
      },
      _selected: {
        [be.variable]: "colors.white",
        [ze.variable]: `colors.${r}.600`,
        _dark: {
          [be.variable]: "colors.gray.800",
          [ze.variable]: `colors.${r}.300`
        }
      },
      color: be.reference,
      bg: ze.reference
    }
  };
}), sf = Ie({}), lf = {
  line: rf,
  enclosed: tf,
  "enclosed-colored": af,
  "soft-rounded": nf,
  "solid-rounded": of,
  unstyled: sf
}, cf = qu({
  baseStyle: Zu,
  sizes: ef,
  variants: lf,
  defaultProps: {
    size: "md",
    variant: "line",
    colorScheme: "blue"
  }
}), ee = Yc("badge", ["bg", "color", "shadow"]), df = {
  px: 1,
  textTransform: "uppercase",
  fontSize: "xs",
  borderRadius: "sm",
  fontWeight: "bold",
  bg: ee.bg.reference,
  color: ee.color.reference,
  boxShadow: ee.shadow.reference
}, uf = (e) => {
  const { colorScheme: r, theme: t } = e, a = Nr(`${r}.500`, 0.6)(t);
  return {
    [ee.bg.variable]: `colors.${r}.500`,
    [ee.color.variable]: "colors.white",
    _dark: {
      [ee.bg.variable]: a,
      [ee.color.variable]: "colors.whiteAlpha.800"
    }
  };
}, ff = (e) => {
  const { colorScheme: r, theme: t } = e, a = Nr(`${r}.200`, 0.16)(t);
  return {
    [ee.bg.variable]: `colors.${r}.100`,
    [ee.color.variable]: `colors.${r}.800`,
    _dark: {
      [ee.bg.variable]: a,
      [ee.color.variable]: `colors.${r}.200`
    }
  };
}, pf = (e) => {
  const { colorScheme: r, theme: t } = e, a = Nr(`${r}.200`, 0.8)(t);
  return {
    [ee.color.variable]: `colors.${r}.500`,
    _dark: {
      [ee.color.variable]: a
    },
    [ee.shadow.variable]: `inset 0 0 0px 1px ${ee.color.reference}`
  };
}, bf = {
  solid: uf,
  subtle: ff,
  outline: pf
}, ht = {
  baseStyle: df,
  variants: bf,
  defaultProps: {
    variant: "subtle",
    colorScheme: "gray"
  }
}, { defineMultiStyleConfig: hf, definePartsStyle: br } = G(au.keys), Go = T("tag-bg"), Yo = T("tag-color"), pn = T("tag-shadow"), ba = T("tag-min-height"), ha = T("tag-min-width"), ga = T("tag-font-size"), va = T("tag-padding-inline"), gf = {
  fontWeight: "medium",
  lineHeight: 1.2,
  outline: 0,
  [Yo.variable]: ee.color.reference,
  [Go.variable]: ee.bg.reference,
  [pn.variable]: ee.shadow.reference,
  color: Yo.reference,
  bg: Go.reference,
  boxShadow: pn.reference,
  borderRadius: "md",
  minH: ba.reference,
  minW: ha.reference,
  fontSize: ga.reference,
  px: va.reference,
  _focusVisible: {
    [pn.variable]: "shadows.outline"
  }
}, vf = {
  lineHeight: 1.2,
  overflow: "visible"
}, mf = {
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
}, yf = br({
  container: gf,
  label: vf,
  closeButton: mf
}), Sf = {
  sm: br({
    container: {
      [ba.variable]: "sizes.5",
      [ha.variable]: "sizes.5",
      [ga.variable]: "fontSizes.xs",
      [va.variable]: "space.2"
    },
    closeButton: {
      marginEnd: "-2px",
      marginStart: "0.35rem"
    }
  }),
  md: br({
    container: {
      [ba.variable]: "sizes.6",
      [ha.variable]: "sizes.6",
      [ga.variable]: "fontSizes.sm",
      [va.variable]: "space.2"
    }
  }),
  lg: br({
    container: {
      [ba.variable]: "sizes.8",
      [ha.variable]: "sizes.8",
      [ga.variable]: "fontSizes.md",
      [va.variable]: "space.3"
    }
  })
}, xf = {
  subtle: br((e) => {
    var r;
    return {
      container: (r = ht.variants) == null ? void 0 : r.subtle(e)
    };
  }),
  solid: br((e) => {
    var r;
    return {
      container: (r = ht.variants) == null ? void 0 : r.solid(e)
    };
  }),
  outline: br((e) => {
    var r;
    return {
      container: (r = ht.variants) == null ? void 0 : r.outline(e)
    };
  })
}, _f = hf({
  variants: xf,
  baseStyle: yf,
  sizes: Sf,
  defaultProps: {
    size: "md",
    variant: "subtle",
    colorScheme: "gray"
  }
}), { definePartsStyle: Ue, defineMultiStyleConfig: kf } = G(Vd.keys), Rr = T("input-height"), zr = T("input-font-size"), Ar = T("input-padding"), Or = T("input-border-radius"), wf = Ue({
  addon: {
    height: Rr.reference,
    fontSize: zr.reference,
    px: Ar.reference,
    borderRadius: Or.reference
  },
  field: {
    width: "100%",
    height: Rr.reference,
    fontSize: zr.reference,
    px: Ar.reference,
    borderRadius: Or.reference,
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
}), er = {
  lg: {
    [zr.variable]: "fontSizes.lg",
    [Ar.variable]: "space.4",
    [Or.variable]: "radii.md",
    [Rr.variable]: "sizes.12"
  },
  md: {
    [zr.variable]: "fontSizes.md",
    [Ar.variable]: "space.4",
    [Or.variable]: "radii.md",
    [Rr.variable]: "sizes.10"
  },
  sm: {
    [zr.variable]: "fontSizes.sm",
    [Ar.variable]: "space.3",
    [Or.variable]: "radii.sm",
    [Rr.variable]: "sizes.8"
  },
  xs: {
    [zr.variable]: "fontSizes.xs",
    [Ar.variable]: "space.2",
    [Or.variable]: "radii.sm",
    [Rr.variable]: "sizes.6"
  }
}, $f = {
  lg: Ue({
    field: er.lg,
    group: er.lg
  }),
  md: Ue({
    field: er.md,
    group: er.md
  }),
  sm: Ue({
    field: er.sm,
    group: er.sm
  }),
  xs: Ue({
    field: er.xs,
    group: er.xs
  })
};
function lo(e) {
  const { focusBorderColor: r, errorBorderColor: t } = e;
  return {
    focusBorderColor: r || E("blue.500", "blue.300")(e),
    errorBorderColor: t || E("red.500", "red.300")(e)
  };
}
var Ef = Ue((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = lo(e);
  return {
    field: {
      border: "1px solid",
      borderColor: "inherit",
      bg: "inherit",
      _hover: {
        borderColor: E("gray.300", "whiteAlpha.400")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ue(r, a),
        boxShadow: `0 0 0 1px ${ue(r, a)}`
      },
      _focusVisible: {
        zIndex: 1,
        borderColor: ue(r, t),
        boxShadow: `0 0 0 1px ${ue(r, t)}`
      }
    },
    addon: {
      border: "1px solid",
      borderColor: E("inherit", "whiteAlpha.50")(e),
      bg: E("gray.100", "whiteAlpha.300")(e)
    }
  };
}), Cf = Ue((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = lo(e);
  return {
    field: {
      border: "2px solid",
      borderColor: "transparent",
      bg: E("gray.100", "whiteAlpha.50")(e),
      _hover: {
        bg: E("gray.200", "whiteAlpha.100")(e)
      },
      _readOnly: {
        boxShadow: "none !important",
        userSelect: "all"
      },
      _invalid: {
        borderColor: ue(r, a)
      },
      _focusVisible: {
        bg: "transparent",
        borderColor: ue(r, t)
      }
    },
    addon: {
      border: "2px solid",
      borderColor: "transparent",
      bg: E("gray.100", "whiteAlpha.50")(e)
    }
  };
}), Tf = Ue((e) => {
  const { theme: r } = e, { focusBorderColor: t, errorBorderColor: a } = lo(e);
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
        borderColor: ue(r, a),
        boxShadow: `0px 1px 0px 0px ${ue(r, a)}`
      },
      _focusVisible: {
        borderColor: ue(r, t),
        boxShadow: `0px 1px 0px 0px ${ue(r, t)}`
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
}), Rf = Ue({
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
}), zf = {
  outline: Ef,
  filled: Cf,
  flushed: Tf,
  unstyled: Rf
}, N = kf({
  baseStyle: wf,
  sizes: $f,
  variants: zf,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}), qo, Af = {
  ...(qo = N.baseStyle) == null ? void 0 : qo.field,
  paddingY: "2",
  minHeight: "20",
  lineHeight: "short",
  verticalAlign: "top"
}, Xo, Ko, Of = {
  outline: (e) => {
    var r, t;
    return (t = (r = N.variants) == null ? void 0 : r.outline(e).field) != null ? t : {};
  },
  flushed: (e) => {
    var r, t;
    return (t = (r = N.variants) == null ? void 0 : r.flushed(e).field) != null ? t : {};
  },
  filled: (e) => {
    var r, t;
    return (t = (r = N.variants) == null ? void 0 : r.filled(e).field) != null ? t : {};
  },
  unstyled: (Ko = (Xo = N.variants) == null ? void 0 : Xo.unstyled.field) != null ? Ko : {}
}, Jo, Qo, Zo, ei, ri, ti, ai, ni, Pf = {
  xs: (Qo = (Jo = N.sizes) == null ? void 0 : Jo.xs.field) != null ? Qo : {},
  sm: (ei = (Zo = N.sizes) == null ? void 0 : Zo.sm.field) != null ? ei : {},
  md: (ti = (ri = N.sizes) == null ? void 0 : ri.md.field) != null ? ti : {},
  lg: (ni = (ai = N.sizes) == null ? void 0 : ai.lg.field) != null ? ni : {}
}, Bf = {
  baseStyle: Af,
  sizes: Pf,
  variants: Of,
  defaultProps: {
    size: "md",
    variant: "outline"
  }
}, aa = ne("tooltip-bg"), bn = ne("tooltip-fg"), Ff = ne("popper-arrow-bg"), Df = {
  bg: aa.reference,
  color: bn.reference,
  [aa.variable]: "colors.gray.700",
  [bn.variable]: "colors.whiteAlpha.900",
  _dark: {
    [aa.variable]: "colors.gray.300",
    [bn.variable]: "colors.gray.900"
  },
  [Ff.variable]: aa.reference,
  px: "2",
  py: "0.5",
  borderRadius: "sm",
  fontWeight: "medium",
  fontSize: "sm",
  boxShadow: "md",
  maxW: "xs",
  zIndex: "tooltip"
}, If = {
  baseStyle: Df
}, { defineMultiStyleConfig: jf, definePartsStyle: ut } = G(Xd.keys), Mf = (e) => {
  const { colorScheme: r, theme: t, isIndeterminate: a, hasStripe: n } = e, i = E(
    Wo(),
    Wo("1rem", "rgba(0,0,0,0.1)")
  )(e), d = E(`${r}.500`, `${r}.200`)(e), u = `linear-gradient(
    to right,
    transparent 0%,
    ${ue(t, d)} 50%,
    transparent 100%
  )`;
  return {
    ...!a && n && i,
    ...a ? { bgImage: u } : { bgColor: d }
  };
}, Nf = {
  lineHeight: "1",
  fontSize: "0.25em",
  fontWeight: "bold",
  color: "white"
}, Wf = (e) => ({
  bg: E("gray.100", "whiteAlpha.300")(e)
}), Lf = (e) => ({
  transitionProperty: "common",
  transitionDuration: "slow",
  ...Mf(e)
}), Vf = ut((e) => ({
  label: Nf,
  filledTrack: Lf(e),
  track: Wf(e)
})), Hf = {
  xs: ut({
    track: { h: "1" }
  }),
  sm: ut({
    track: { h: "2" }
  }),
  md: ut({
    track: { h: "3" }
  }),
  lg: ut({
    track: { h: "4" }
  })
}, Uf = jf({
  sizes: Hf,
  baseStyle: Vf,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), Gf = (e) => typeof e == "function";
function fe(e, ...r) {
  return Gf(e) ? e(...r) : e;
}
var { definePartsStyle: ma, defineMultiStyleConfig: Yf } = G(jd.keys), gt = T("checkbox-size"), qf = (e) => {
  const { colorScheme: r } = e;
  return {
    w: gt.reference,
    h: gt.reference,
    transitionProperty: "box-shadow",
    transitionDuration: "normal",
    border: "2px solid",
    borderRadius: "sm",
    borderColor: "inherit",
    color: "white",
    _checked: {
      bg: E(`${r}.500`, `${r}.200`)(e),
      borderColor: E(`${r}.500`, `${r}.200`)(e),
      color: E("white", "gray.900")(e),
      _hover: {
        bg: E(`${r}.600`, `${r}.300`)(e),
        borderColor: E(`${r}.600`, `${r}.300`)(e)
      },
      _disabled: {
        borderColor: E("gray.200", "transparent")(e),
        bg: E("gray.200", "whiteAlpha.300")(e),
        color: E("gray.500", "whiteAlpha.500")(e)
      }
    },
    _indeterminate: {
      bg: E(`${r}.500`, `${r}.200`)(e),
      borderColor: E(`${r}.500`, `${r}.200`)(e),
      color: E("white", "gray.900")(e)
    },
    _disabled: {
      bg: E("gray.100", "whiteAlpha.100")(e),
      borderColor: E("gray.100", "transparent")(e)
    },
    _focusVisible: {
      boxShadow: "outline"
    },
    _invalid: {
      borderColor: E("red.500", "red.300")(e)
    }
  };
}, Xf = {
  _disabled: { cursor: "not-allowed" }
}, Kf = {
  userSelect: "none",
  _disabled: { opacity: 0.4 }
}, Jf = {
  transitionProperty: "transform",
  transitionDuration: "normal"
}, Qf = ma((e) => ({
  icon: Jf,
  container: Xf,
  control: fe(qf, e),
  label: Kf
})), Zf = {
  sm: ma({
    control: { [gt.variable]: "sizes.3" },
    label: { fontSize: "sm" },
    icon: { fontSize: "3xs" }
  }),
  md: ma({
    control: { [gt.variable]: "sizes.4" },
    label: { fontSize: "md" },
    icon: { fontSize: "2xs" }
  }),
  lg: ma({
    control: { [gt.variable]: "sizes.5" },
    label: { fontSize: "lg" },
    icon: { fontSize: "2xs" }
  })
}, za = Yf({
  baseStyle: Qf,
  sizes: Zf,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: ep, definePartsStyle: ya } = G(Kd.keys), rp = (e) => {
  var r;
  const t = (r = fe(za.baseStyle, e)) == null ? void 0 : r.control;
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
}, tp = ya((e) => {
  var r, t, a, n;
  return {
    label: (t = (r = za).baseStyle) == null ? void 0 : t.call(r, e).label,
    container: (n = (a = za).baseStyle) == null ? void 0 : n.call(a, e).container,
    control: rp(e)
  };
}), ap = {
  md: ya({
    control: { w: "4", h: "4" },
    label: { fontSize: "md" }
  }),
  lg: ya({
    control: { w: "5", h: "5" },
    label: { fontSize: "lg" }
  }),
  sm: ya({
    control: { width: "3", height: "3" },
    label: { fontSize: "sm" }
  })
}, np = ep({
  baseStyle: tp,
  sizes: ap,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), { defineMultiStyleConfig: op, definePartsStyle: ip } = G(Jd.keys), na = T("select-bg"), oi, sp = {
  ...(oi = N.baseStyle) == null ? void 0 : oi.field,
  appearance: "none",
  paddingBottom: "1px",
  lineHeight: "normal",
  bg: na.reference,
  [na.variable]: "colors.white",
  _dark: {
    [na.variable]: "colors.gray.700"
  },
  "> option, > optgroup": {
    bg: na.reference
  }
}, lp = {
  width: "6",
  height: "100%",
  insetEnd: "2",
  position: "relative",
  color: "currentColor",
  fontSize: "xl",
  _disabled: {
    opacity: 0.5
  }
}, cp = ip({
  field: sp,
  icon: lp
}), oa = {
  paddingInlineEnd: "8"
}, ii, si, li, ci, di, ui, fi, pi, dp = {
  lg: {
    ...(ii = N.sizes) == null ? void 0 : ii.lg,
    field: {
      ...(si = N.sizes) == null ? void 0 : si.lg.field,
      ...oa
    }
  },
  md: {
    ...(li = N.sizes) == null ? void 0 : li.md,
    field: {
      ...(ci = N.sizes) == null ? void 0 : ci.md.field,
      ...oa
    }
  },
  sm: {
    ...(di = N.sizes) == null ? void 0 : di.sm,
    field: {
      ...(ui = N.sizes) == null ? void 0 : ui.sm.field,
      ...oa
    }
  },
  xs: {
    ...(fi = N.sizes) == null ? void 0 : fi.xs,
    field: {
      ...(pi = N.sizes) == null ? void 0 : pi.xs.field,
      ...oa
    },
    icon: {
      insetEnd: "1"
    }
  }
}, up = op({
  baseStyle: cp,
  sizes: dp,
  variants: N.variants,
  defaultProps: N.defaultProps
}), hn = T("skeleton-start-color"), gn = T("skeleton-end-color"), fp = {
  [hn.variable]: "colors.gray.100",
  [gn.variable]: "colors.gray.400",
  _dark: {
    [hn.variable]: "colors.gray.800",
    [gn.variable]: "colors.gray.600"
  },
  background: hn.reference,
  borderColor: gn.reference,
  opacity: 0.7,
  borderRadius: "sm"
}, pp = {
  baseStyle: fp
}, vn = T("skip-link-bg"), bp = {
  borderRadius: "md",
  fontWeight: "semibold",
  _focusVisible: {
    boxShadow: "outline",
    padding: "4",
    position: "fixed",
    top: "6",
    insetStart: "6",
    [vn.variable]: "colors.white",
    _dark: {
      [vn.variable]: "colors.gray.700"
    },
    bg: vn.reference
  }
}, hp = {
  baseStyle: bp
}, { defineMultiStyleConfig: gp, definePartsStyle: Na } = G(Qd.keys), wt = T("slider-thumb-size"), $t = T("slider-track-size"), tr = T("slider-bg"), vp = (e) => {
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
    ...so({
      orientation: r,
      vertical: { h: "100%" },
      horizontal: { w: "100%" }
    })
  };
}, mp = (e) => ({
  ...so({
    orientation: e.orientation,
    horizontal: { h: $t.reference },
    vertical: { w: $t.reference }
  }),
  overflow: "hidden",
  borderRadius: "sm",
  [tr.variable]: "colors.gray.200",
  _dark: {
    [tr.variable]: "colors.whiteAlpha.200"
  },
  _disabled: {
    [tr.variable]: "colors.gray.300",
    _dark: {
      [tr.variable]: "colors.whiteAlpha.300"
    }
  },
  bg: tr.reference
}), yp = (e) => {
  const { orientation: r } = e;
  return {
    ...so({
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
    w: wt.reference,
    h: wt.reference,
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
}, Sp = (e) => {
  const { colorScheme: r } = e;
  return {
    width: "inherit",
    height: "inherit",
    [tr.variable]: `colors.${r}.500`,
    _dark: {
      [tr.variable]: `colors.${r}.200`
    },
    bg: tr.reference
  };
}, xp = Na((e) => ({
  container: vp(e),
  track: mp(e),
  thumb: yp(e),
  filledTrack: Sp(e)
})), _p = Na({
  container: {
    [wt.variable]: "sizes.4",
    [$t.variable]: "sizes.1"
  }
}), kp = Na({
  container: {
    [wt.variable]: "sizes.3.5",
    [$t.variable]: "sizes.1"
  }
}), wp = Na({
  container: {
    [wt.variable]: "sizes.2.5",
    [$t.variable]: "sizes.0.5"
  }
}), $p = {
  lg: _p,
  md: kp,
  sm: wp
}, Ep = gp({
  baseStyle: xp,
  sizes: $p,
  defaultProps: {
    size: "md",
    colorScheme: "blue"
  }
}), lr = ne("spinner-size"), Cp = {
  width: [lr.reference],
  height: [lr.reference]
}, Tp = {
  xs: {
    [lr.variable]: "sizes.3"
  },
  sm: {
    [lr.variable]: "sizes.4"
  },
  md: {
    [lr.variable]: "sizes.6"
  },
  lg: {
    [lr.variable]: "sizes.8"
  },
  xl: {
    [lr.variable]: "sizes.12"
  }
}, Rp = {
  baseStyle: Cp,
  sizes: Tp,
  defaultProps: {
    size: "md"
  }
}, { defineMultiStyleConfig: zp, definePartsStyle: ns } = G(Zd.keys), Ap = {
  fontWeight: "medium"
}, Op = {
  opacity: 0.8,
  marginBottom: "2"
}, Pp = {
  verticalAlign: "baseline",
  fontWeight: "semibold"
}, Bp = {
  marginEnd: 1,
  w: "3.5",
  h: "3.5",
  verticalAlign: "middle"
}, Fp = ns({
  container: {},
  label: Ap,
  helpText: Op,
  number: Pp,
  icon: Bp
}), Dp = {
  md: ns({
    label: { fontSize: "sm" },
    helpText: { fontSize: "sm" },
    number: { fontSize: "2xl" }
  })
}, Ip = zp({
  baseStyle: Fp,
  sizes: Dp,
  defaultProps: {
    size: "md"
  }
}), mn = T("kbd-bg"), jp = {
  [mn.variable]: "colors.gray.100",
  _dark: {
    [mn.variable]: "colors.whiteAlpha.100"
  },
  bg: mn.reference,
  borderRadius: "md",
  borderWidth: "1px",
  borderBottomWidth: "3px",
  fontSize: "0.8em",
  fontWeight: "bold",
  lineHeight: "normal",
  px: "0.4em",
  whiteSpace: "nowrap"
}, Mp = {
  baseStyle: jp
}, Np = {
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
}, Wp = {
  baseStyle: Np
}, { defineMultiStyleConfig: Lp, definePartsStyle: Vp } = G(Hd.keys), Hp = {
  marginEnd: "2",
  display: "inline",
  verticalAlign: "text-bottom"
}, Up = Vp({
  icon: Hp
}), Gp = Lp({
  baseStyle: Up
}), { defineMultiStyleConfig: Yp, definePartsStyle: qp } = G(Ud.keys), Be = T("menu-bg"), yn = T("menu-shadow"), Xp = {
  [Be.variable]: "#fff",
  [yn.variable]: "shadows.sm",
  _dark: {
    [Be.variable]: "colors.gray.700",
    [yn.variable]: "shadows.dark-lg"
  },
  color: "inherit",
  minW: "3xs",
  py: "2",
  zIndex: 1,
  borderRadius: "md",
  borderWidth: "1px",
  bg: Be.reference,
  boxShadow: yn.reference
}, Kp = {
  py: "1.5",
  px: "3",
  transitionProperty: "background",
  transitionDuration: "ultra-fast",
  transitionTimingFunction: "ease-in",
  _focus: {
    [Be.variable]: "colors.gray.100",
    _dark: {
      [Be.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [Be.variable]: "colors.gray.200",
    _dark: {
      [Be.variable]: "colors.whiteAlpha.200"
    }
  },
  _expanded: {
    [Be.variable]: "colors.gray.100",
    _dark: {
      [Be.variable]: "colors.whiteAlpha.100"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  },
  bg: Be.reference
}, Jp = {
  mx: 4,
  my: 2,
  fontWeight: "semibold",
  fontSize: "sm"
}, Qp = {
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0
}, Zp = {
  opacity: 0.6
}, eb = {
  border: 0,
  borderBottom: "1px solid",
  borderColor: "inherit",
  my: "2",
  opacity: 0.6
}, rb = {
  transitionProperty: "common",
  transitionDuration: "normal"
}, tb = qp({
  button: rb,
  list: Xp,
  item: Kp,
  groupTitle: Jp,
  icon: Qp,
  command: Zp,
  divider: eb
}), ab = Yp({
  baseStyle: tb
}), { defineMultiStyleConfig: nb, definePartsStyle: Hn } = G(Gd.keys), Sn = T("modal-bg"), xn = T("modal-shadow"), ob = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, ib = (e) => {
  const { isCentered: r, scrollBehavior: t } = e;
  return {
    display: "flex",
    zIndex: "modal",
    justifyContent: "center",
    alignItems: r ? "center" : "flex-start",
    overflow: t === "inside" ? "hidden" : "auto",
    overscrollBehaviorY: "none"
  };
}, sb = (e) => {
  const { isCentered: r, scrollBehavior: t } = e;
  return {
    borderRadius: "md",
    color: "inherit",
    my: r ? "auto" : "16",
    mx: r ? "auto" : void 0,
    zIndex: "modal",
    maxH: t === "inside" ? "calc(100% - 7.5rem)" : void 0,
    [Sn.variable]: "colors.white",
    [xn.variable]: "shadows.lg",
    _dark: {
      [Sn.variable]: "colors.gray.700",
      [xn.variable]: "shadows.dark-lg"
    },
    bg: Sn.reference,
    boxShadow: xn.reference
  };
}, lb = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, cb = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, db = (e) => {
  const { scrollBehavior: r } = e;
  return {
    px: "6",
    py: "2",
    flex: "1",
    overflow: r === "inside" ? "auto" : void 0
  };
}, ub = {
  px: "6",
  py: "4"
}, fb = Hn((e) => ({
  overlay: ob,
  dialogContainer: fe(ib, e),
  dialog: fe(sb, e),
  header: lb,
  closeButton: cb,
  body: fe(db, e),
  footer: ub
}));
function Te(e) {
  return Hn(e === "full" ? {
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
var pb = {
  xs: Te("xs"),
  sm: Te("sm"),
  md: Te("md"),
  lg: Te("lg"),
  xl: Te("xl"),
  "2xl": Te("2xl"),
  "3xl": Te("3xl"),
  "4xl": Te("4xl"),
  "5xl": Te("5xl"),
  "6xl": Te("6xl"),
  full: Te("full")
}, bb = nb({
  baseStyle: fb,
  sizes: pb,
  defaultProps: { size: "md" }
}), { defineMultiStyleConfig: hb, definePartsStyle: os } = G(Yd.keys), co = ne("number-input-stepper-width"), is = ne("number-input-input-padding"), gb = He(co).add("0.5rem").toString(), _n = ne("number-input-bg"), kn = ne("number-input-color"), wn = ne("number-input-border-color"), vb = {
  [co.variable]: "sizes.6",
  [is.variable]: gb
}, mb = (e) => {
  var r, t;
  return (t = (r = fe(N.baseStyle, e)) == null ? void 0 : r.field) != null ? t : {};
}, yb = {
  width: co.reference
}, Sb = {
  borderStart: "1px solid",
  borderStartColor: wn.reference,
  color: kn.reference,
  bg: _n.reference,
  [kn.variable]: "colors.chakra-body-text",
  [wn.variable]: "colors.chakra-border-color",
  _dark: {
    [kn.variable]: "colors.whiteAlpha.800",
    [wn.variable]: "colors.whiteAlpha.300"
  },
  _active: {
    [_n.variable]: "colors.gray.200",
    _dark: {
      [_n.variable]: "colors.whiteAlpha.300"
    }
  },
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed"
  }
}, xb = os((e) => {
  var r;
  return {
    root: vb,
    field: (r = fe(mb, e)) != null ? r : {},
    stepperGroup: yb,
    stepper: Sb
  };
});
function ia(e) {
  var r, t, a;
  const n = (r = N.sizes) == null ? void 0 : r[e], i = {
    lg: "md",
    md: "md",
    sm: "sm",
    xs: "sm"
  }, d = (a = (t = n.field) == null ? void 0 : t.fontSize) != null ? a : "md", u = Zi.fontSizes[d];
  return os({
    field: {
      ...n.field,
      paddingInlineEnd: is.reference,
      verticalAlign: "top"
    },
    stepper: {
      fontSize: He(u).multiply(0.75).toString(),
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
var _b = {
  xs: ia("xs"),
  sm: ia("sm"),
  md: ia("md"),
  lg: ia("lg")
}, kb = hb({
  baseStyle: xb,
  sizes: _b,
  variants: N.variants,
  defaultProps: N.defaultProps
}), bi, wb = {
  ...(bi = N.baseStyle) == null ? void 0 : bi.field,
  textAlign: "center"
}, $b = {
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
}, hi, gi, Eb = {
  outline: (e) => {
    var r, t, a;
    return (a = (t = fe((r = N.variants) == null ? void 0 : r.outline, e)) == null ? void 0 : t.field) != null ? a : {};
  },
  flushed: (e) => {
    var r, t, a;
    return (a = (t = fe((r = N.variants) == null ? void 0 : r.flushed, e)) == null ? void 0 : t.field) != null ? a : {};
  },
  filled: (e) => {
    var r, t, a;
    return (a = (t = fe((r = N.variants) == null ? void 0 : r.filled, e)) == null ? void 0 : t.field) != null ? a : {};
  },
  unstyled: (gi = (hi = N.variants) == null ? void 0 : hi.unstyled.field) != null ? gi : {}
}, Cb = {
  baseStyle: wb,
  sizes: $b,
  variants: Eb,
  defaultProps: N.defaultProps
}, { defineMultiStyleConfig: Tb, definePartsStyle: Rb } = G(qd.keys), sa = ne("popper-bg"), zb = ne("popper-arrow-bg"), vi = ne("popper-arrow-shadow-color"), Ab = { zIndex: 10 }, Ob = {
  [sa.variable]: "colors.white",
  bg: sa.reference,
  [zb.variable]: sa.reference,
  [vi.variable]: "colors.gray.200",
  _dark: {
    [sa.variable]: "colors.gray.700",
    [vi.variable]: "colors.whiteAlpha.300"
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
}, Pb = {
  px: 3,
  py: 2,
  borderBottomWidth: "1px"
}, Bb = {
  px: 3,
  py: 2
}, Fb = {
  px: 3,
  py: 2,
  borderTopWidth: "1px"
}, Db = {
  position: "absolute",
  borderRadius: "md",
  top: 1,
  insetEnd: 2,
  padding: 2
}, Ib = Rb({
  popper: Ab,
  content: Ob,
  header: Pb,
  body: Bb,
  footer: Fb,
  closeButton: Db
}), jb = Tb({
  baseStyle: Ib
}), { definePartsStyle: Un, defineMultiStyleConfig: Mb } = G(Md.keys), $n = T("drawer-bg"), En = T("drawer-box-shadow");
function $r(e) {
  return Un(e === "full" ? {
    dialog: { maxW: "100vw", h: "100vh" }
  } : {
    dialog: { maxW: e }
  });
}
var Nb = {
  bg: "blackAlpha.600",
  zIndex: "modal"
}, Wb = {
  display: "flex",
  zIndex: "modal",
  justifyContent: "center"
}, Lb = (e) => {
  const { isFullHeight: r } = e;
  return {
    ...r && { height: "100vh" },
    zIndex: "modal",
    maxH: "100vh",
    color: "inherit",
    [$n.variable]: "colors.white",
    [En.variable]: "shadows.lg",
    _dark: {
      [$n.variable]: "colors.gray.700",
      [En.variable]: "shadows.dark-lg"
    },
    bg: $n.reference,
    boxShadow: En.reference
  };
}, Vb = {
  px: "6",
  py: "4",
  fontSize: "xl",
  fontWeight: "semibold"
}, Hb = {
  position: "absolute",
  top: "2",
  insetEnd: "3"
}, Ub = {
  px: "6",
  py: "2",
  flex: "1",
  overflow: "auto"
}, Gb = {
  px: "6",
  py: "4"
}, Yb = Un((e) => ({
  overlay: Nb,
  dialogContainer: Wb,
  dialog: fe(Lb, e),
  header: Vb,
  closeButton: Hb,
  body: Ub,
  footer: Gb
})), qb = {
  xs: $r("xs"),
  sm: $r("md"),
  md: $r("lg"),
  lg: $r("2xl"),
  xl: $r("4xl"),
  full: $r("full")
}, Xb = Mb({
  baseStyle: Yb,
  sizes: qb,
  defaultProps: {
    size: "xs"
  }
}), { definePartsStyle: Kb, defineMultiStyleConfig: Jb } = G(Nd.keys), Qb = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal"
}, Zb = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, eh = {
  borderRadius: "md",
  py: "1",
  transitionProperty: "common",
  transitionDuration: "normal",
  width: "full",
  _focusVisible: { boxShadow: "outline" },
  _placeholder: { opacity: 0.6 }
}, rh = Kb({
  preview: Qb,
  input: Zb,
  textarea: eh
}), th = Jb({
  baseStyle: rh
}), { definePartsStyle: ah, defineMultiStyleConfig: nh } = G(Wd.keys), Dr = T("form-control-color"), oh = {
  marginStart: "1",
  [Dr.variable]: "colors.red.500",
  _dark: {
    [Dr.variable]: "colors.red.300"
  },
  color: Dr.reference
}, ih = {
  mt: "2",
  [Dr.variable]: "colors.gray.600",
  _dark: {
    [Dr.variable]: "colors.whiteAlpha.600"
  },
  color: Dr.reference,
  lineHeight: "normal",
  fontSize: "sm"
}, sh = ah({
  container: {
    width: "100%",
    position: "relative"
  },
  requiredIndicator: oh,
  helperText: ih
}), lh = nh({
  baseStyle: sh
}), { definePartsStyle: ch, defineMultiStyleConfig: dh } = G(Ld.keys), Ir = T("form-error-color"), uh = {
  [Ir.variable]: "colors.red.500",
  _dark: {
    [Ir.variable]: "colors.red.300"
  },
  color: Ir.reference,
  mt: "2",
  fontSize: "sm",
  lineHeight: "normal"
}, fh = {
  marginEnd: "0.5em",
  [Ir.variable]: "colors.red.500",
  _dark: {
    [Ir.variable]: "colors.red.300"
  },
  color: Ir.reference
}, ph = ch({
  text: uh,
  icon: fh
}), bh = dh({
  baseStyle: ph
}), hh = {
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
}, gh = {
  baseStyle: hh
}, vh = {
  fontFamily: "heading",
  fontWeight: "bold"
}, mh = {
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
}, yh = {
  baseStyle: vh,
  sizes: mh,
  defaultProps: {
    size: "xl"
  }
}, { defineMultiStyleConfig: Sh, definePartsStyle: xh } = G(Id.keys), Cn = T("breadcrumb-link-decor"), _h = {
  transitionProperty: "common",
  transitionDuration: "fast",
  transitionTimingFunction: "ease-out",
  outline: "none",
  color: "inherit",
  textDecoration: Cn.reference,
  [Cn.variable]: "none",
  "&:not([aria-current=page])": {
    cursor: "pointer",
    _hover: {
      [Cn.variable]: "underline"
    },
    _focusVisible: {
      boxShadow: "outline"
    }
  }
}, kh = xh({
  link: _h
}), wh = Sh({
  baseStyle: kh
}), $h = {
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
}, ss = (e) => {
  const { colorScheme: r, theme: t } = e;
  if (r === "gray")
    return {
      color: E("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: E("gray.100", "whiteAlpha.200")(e)
      },
      _active: { bg: E("gray.200", "whiteAlpha.300")(e) }
    };
  const a = Nr(`${r}.200`, 0.12)(t), n = Nr(`${r}.200`, 0.24)(t);
  return {
    color: E(`${r}.600`, `${r}.200`)(e),
    bg: "transparent",
    _hover: {
      bg: E(`${r}.50`, a)(e)
    },
    _active: {
      bg: E(`${r}.100`, n)(e)
    }
  };
}, Eh = (e) => {
  const { colorScheme: r } = e, t = E("gray.200", "whiteAlpha.300")(e);
  return {
    border: "1px solid",
    borderColor: r === "gray" ? t : "currentColor",
    ".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)": { marginEnd: "-1px" },
    ".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)": { marginBottom: "-1px" },
    ...fe(ss, e)
  };
}, Ch = {
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
}, Th = (e) => {
  var r;
  const { colorScheme: t } = e;
  if (t === "gray") {
    const f = E("gray.100", "whiteAlpha.200")(e);
    return {
      bg: f,
      color: E("gray.800", "whiteAlpha.900")(e),
      _hover: {
        bg: E("gray.200", "whiteAlpha.300")(e),
        _disabled: {
          bg: f
        }
      },
      _active: { bg: E("gray.300", "whiteAlpha.400")(e) }
    };
  }
  const {
    bg: a = `${t}.500`,
    color: n = "white",
    hoverBg: i = `${t}.600`,
    activeBg: d = `${t}.700`
  } = (r = Ch[t]) != null ? r : {}, u = E(a, `${t}.200`)(e);
  return {
    bg: u,
    color: E(n, "gray.800")(e),
    _hover: {
      bg: E(i, `${t}.300`)(e),
      _disabled: {
        bg: u
      }
    },
    _active: { bg: E(d, `${t}.400`)(e) }
  };
}, Rh = (e) => {
  const { colorScheme: r } = e;
  return {
    padding: 0,
    height: "auto",
    lineHeight: "normal",
    verticalAlign: "baseline",
    color: E(`${r}.500`, `${r}.200`)(e),
    _hover: {
      textDecoration: "underline",
      _disabled: {
        textDecoration: "none"
      }
    },
    _active: {
      color: E(`${r}.700`, `${r}.500`)(e)
    }
  };
}, zh = {
  bg: "none",
  color: "inherit",
  display: "inline",
  lineHeight: "inherit",
  m: "0",
  p: "0"
}, Ah = {
  ghost: ss,
  outline: Eh,
  solid: Th,
  link: Rh,
  unstyled: zh
}, Oh = {
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
}, Ph = {
  baseStyle: $h,
  variants: Ah,
  sizes: Oh,
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "gray"
  }
}, { definePartsStyle: hr, defineMultiStyleConfig: Bh } = G(nu.keys), Aa = T("card-bg"), Ge = T("card-padding"), ls = T("card-shadow"), Sa = T("card-radius"), cs = T("card-border-width", "0"), ds = T("card-border-color"), Fh = hr({
  container: {
    [Aa.variable]: "colors.chakra-body-bg",
    backgroundColor: Aa.reference,
    boxShadow: ls.reference,
    borderRadius: Sa.reference,
    color: "chakra-body-text",
    borderWidth: cs.reference,
    borderColor: ds.reference
  },
  body: {
    padding: Ge.reference,
    flex: "1 1 0%"
  },
  header: {
    padding: Ge.reference
  },
  footer: {
    padding: Ge.reference
  }
}), Dh = {
  sm: hr({
    container: {
      [Sa.variable]: "radii.base",
      [Ge.variable]: "space.3"
    }
  }),
  md: hr({
    container: {
      [Sa.variable]: "radii.md",
      [Ge.variable]: "space.5"
    }
  }),
  lg: hr({
    container: {
      [Sa.variable]: "radii.xl",
      [Ge.variable]: "space.7"
    }
  })
}, Ih = {
  elevated: hr({
    container: {
      [ls.variable]: "shadows.base",
      _dark: {
        [Aa.variable]: "colors.gray.700"
      }
    }
  }),
  outline: hr({
    container: {
      [cs.variable]: "1px",
      [ds.variable]: "colors.chakra-border-color"
    }
  }),
  filled: hr({
    container: {
      [Aa.variable]: "colors.chakra-subtle-bg"
    }
  }),
  unstyled: {
    body: {
      [Ge.variable]: 0
    },
    header: {
      [Ge.variable]: 0
    },
    footer: {
      [Ge.variable]: 0
    }
  }
}, jh = Bh({
  baseStyle: Fh,
  variants: Ih,
  sizes: Dh,
  defaultProps: {
    variant: "elevated",
    size: "md"
  }
}), vt = ne("close-button-size"), ot = ne("close-button-bg"), Mh = {
  w: [vt.reference],
  h: [vt.reference],
  borderRadius: "md",
  transitionProperty: "common",
  transitionDuration: "normal",
  _disabled: {
    opacity: 0.4,
    cursor: "not-allowed",
    boxShadow: "none"
  },
  _hover: {
    [ot.variable]: "colors.blackAlpha.100",
    _dark: {
      [ot.variable]: "colors.whiteAlpha.100"
    }
  },
  _active: {
    [ot.variable]: "colors.blackAlpha.200",
    _dark: {
      [ot.variable]: "colors.whiteAlpha.200"
    }
  },
  _focusVisible: {
    boxShadow: "outline"
  },
  bg: ot.reference
}, Nh = {
  lg: {
    [vt.variable]: "sizes.10",
    fontSize: "md"
  },
  md: {
    [vt.variable]: "sizes.8",
    fontSize: "xs"
  },
  sm: {
    [vt.variable]: "sizes.6",
    fontSize: "2xs"
  }
}, Wh = {
  baseStyle: Mh,
  sizes: Nh,
  defaultProps: {
    size: "md"
  }
}, { variants: Lh, defaultProps: Vh } = ht, Hh = {
  fontFamily: "mono",
  fontSize: "sm",
  px: "0.2em",
  borderRadius: "sm",
  bg: ee.bg.reference,
  color: ee.color.reference,
  boxShadow: ee.shadow.reference
}, Uh = {
  baseStyle: Hh,
  variants: Lh,
  defaultProps: Vh
}, Gh = {
  w: "100%",
  mx: "auto",
  maxW: "prose",
  px: "4"
}, Yh = {
  baseStyle: Gh
}, qh = {
  opacity: 0.6,
  borderColor: "inherit"
}, Xh = {
  borderStyle: "solid"
}, Kh = {
  borderStyle: "dashed"
}, Jh = {
  solid: Xh,
  dashed: Kh
}, Qh = {
  baseStyle: qh,
  variants: Jh,
  defaultProps: {
    variant: "solid"
  }
}, { definePartsStyle: Zh, defineMultiStyleConfig: e0 } = G(Bd.keys), r0 = {
  borderTopWidth: "1px",
  borderColor: "inherit",
  _last: {
    borderBottomWidth: "1px"
  }
}, t0 = {
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
}, a0 = {
  pt: "2",
  px: "4",
  pb: "5"
}, n0 = {
  fontSize: "1.25em"
}, o0 = Zh({
  container: r0,
  button: t0,
  panel: a0,
  icon: n0
}), i0 = e0({ baseStyle: o0 }), { definePartsStyle: zt, defineMultiStyleConfig: s0 } = G(Fd.keys), ye = T("alert-fg"), Ye = T("alert-bg"), l0 = zt({
  container: {
    bg: Ye.reference,
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
    color: ye.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "6"
  },
  spinner: {
    color: ye.reference,
    flexShrink: 0,
    marginEnd: "3",
    w: "5",
    h: "5"
  }
});
function uo(e) {
  const { theme: r, colorScheme: t } = e, a = Nr(`${t}.200`, 0.16)(r);
  return {
    light: `colors.${t}.100`,
    dark: a
  };
}
var c0 = zt((e) => {
  const { colorScheme: r } = e, t = uo(e);
  return {
    container: {
      [ye.variable]: `colors.${r}.600`,
      [Ye.variable]: t.light,
      _dark: {
        [ye.variable]: `colors.${r}.200`,
        [Ye.variable]: t.dark
      }
    }
  };
}), d0 = zt((e) => {
  const { colorScheme: r } = e, t = uo(e);
  return {
    container: {
      [ye.variable]: `colors.${r}.600`,
      [Ye.variable]: t.light,
      _dark: {
        [ye.variable]: `colors.${r}.200`,
        [Ye.variable]: t.dark
      },
      paddingStart: "3",
      borderStartWidth: "4px",
      borderStartColor: ye.reference
    }
  };
}), u0 = zt((e) => {
  const { colorScheme: r } = e, t = uo(e);
  return {
    container: {
      [ye.variable]: `colors.${r}.600`,
      [Ye.variable]: t.light,
      _dark: {
        [ye.variable]: `colors.${r}.200`,
        [Ye.variable]: t.dark
      },
      pt: "2",
      borderTopWidth: "4px",
      borderTopColor: ye.reference
    }
  };
}), f0 = zt((e) => {
  const { colorScheme: r } = e;
  return {
    container: {
      [ye.variable]: "colors.white",
      [Ye.variable]: `colors.${r}.600`,
      _dark: {
        [ye.variable]: "colors.gray.900",
        [Ye.variable]: `colors.${r}.200`
      },
      color: ye.reference
    }
  };
}), p0 = {
  subtle: c0,
  "left-accent": d0,
  "top-accent": u0,
  solid: f0
}, b0 = s0({
  baseStyle: l0,
  variants: p0,
  defaultProps: {
    variant: "subtle",
    colorScheme: "blue"
  }
}), { definePartsStyle: us, defineMultiStyleConfig: h0 } = G(Dd.keys), jr = T("avatar-border-color"), mt = T("avatar-bg"), Et = T("avatar-font-size"), Wr = T("avatar-size"), g0 = {
  borderRadius: "full",
  border: "0.2em solid",
  borderColor: jr.reference,
  [jr.variable]: "white",
  _dark: {
    [jr.variable]: "colors.gray.800"
  }
}, v0 = {
  bg: mt.reference,
  fontSize: Et.reference,
  width: Wr.reference,
  height: Wr.reference,
  lineHeight: "1",
  [mt.variable]: "colors.gray.200",
  _dark: {
    [mt.variable]: "colors.whiteAlpha.400"
  }
}, m0 = (e) => {
  const { name: r, theme: t } = e, a = r ? wu({ string: r }) : "colors.gray.400", n = _u(a)(t);
  let i = "white";
  return n || (i = "gray.800"), {
    bg: mt.reference,
    fontSize: Et.reference,
    color: i,
    borderColor: jr.reference,
    verticalAlign: "top",
    width: Wr.reference,
    height: Wr.reference,
    "&:not([data-loaded])": {
      [mt.variable]: a
    },
    [jr.variable]: "colors.white",
    _dark: {
      [jr.variable]: "colors.gray.800"
    }
  };
}, y0 = {
  fontSize: Et.reference,
  lineHeight: "1"
}, S0 = us((e) => ({
  badge: fe(g0, e),
  excessLabel: fe(v0, e),
  container: fe(m0, e),
  label: y0
}));
function rr(e) {
  const r = e !== "100%" ? rs[e] : void 0;
  return us({
    container: {
      [Wr.variable]: r ?? e,
      [Et.variable]: `calc(${r ?? e} / 2.5)`
    },
    excessLabel: {
      [Wr.variable]: r ?? e,
      [Et.variable]: `calc(${r ?? e} / 2.5)`
    }
  });
}
var x0 = {
  "2xs": rr(4),
  xs: rr(6),
  sm: rr(8),
  md: rr(12),
  lg: rr(16),
  xl: rr(24),
  "2xl": rr(32),
  full: rr("100%")
}, _0 = h0({
  baseStyle: S0,
  sizes: x0,
  defaultProps: {
    size: "md"
  }
}), k0 = {
  Accordion: i0,
  Alert: b0,
  Avatar: _0,
  Badge: ht,
  Breadcrumb: wh,
  Button: Ph,
  Checkbox: za,
  CloseButton: Wh,
  Code: Uh,
  Container: Yh,
  Divider: Qh,
  Drawer: Xb,
  Editable: th,
  Form: lh,
  FormError: bh,
  FormLabel: gh,
  Heading: yh,
  Input: N,
  Kbd: Mp,
  Link: Wp,
  List: Gp,
  Menu: ab,
  Modal: bb,
  NumberInput: kb,
  PinInput: Cb,
  Popover: jb,
  Progress: Uf,
  Radio: np,
  Select: up,
  Skeleton: pp,
  SkipLink: hp,
  Slider: Ep,
  Spinner: Rp,
  Stat: Ip,
  Switch: Nu,
  Table: Yu,
  Tabs: cf,
  Tag: _f,
  Textarea: Bf,
  Tooltip: If,
  Card: jh,
  Stepper: Pd
}, w0 = {
  colors: {
    "chakra-body-text": { _light: "gray.800", _dark: "whiteAlpha.900" },
    "chakra-body-bg": { _light: "white", _dark: "gray.800" },
    "chakra-border-color": { _light: "gray.200", _dark: "whiteAlpha.300" },
    "chakra-inverse-text": { _light: "white", _dark: "gray.800" },
    "chakra-subtle-bg": { _light: "gray.100", _dark: "gray.700" },
    "chakra-subtle-text": { _light: "gray.600", _dark: "gray.400" },
    "chakra-placeholder-color": { _light: "gray.500", _dark: "whiteAlpha.400" }
  }
}, $0 = {
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
}, E0 = "ltr", C0 = {
  useSystemColorMode: !1,
  initialColorMode: "light",
  cssVarPrefix: "chakra"
}, T0 = {
  semanticTokens: w0,
  direction: E0,
  ...zd,
  components: k0,
  styles: $0,
  config: C0
};
function ft(e) {
  return typeof e == "function";
}
function R0(...e) {
  return (r) => e.reduce((t, a) => a(t), r);
}
var z0 = (e) => function(...t) {
  let a = [...t], n = t[t.length - 1];
  return id(n) && // this ensures backward compatibility
  // previously only `extendTheme(override, activeTheme?)` was allowed
  a.length > 1 ? a = a.slice(0, a.length - 1) : n = e, R0(
    ...a.map(
      (i) => (d) => ft(i) ? i(d) : O0(d, i)
    )
  )(n);
}, A0 = z0(T0);
function O0(...e) {
  return ur({}, ...e, fs);
}
function fs(e, r, t, a) {
  if ((ft(e) || ft(r)) && Object.prototype.hasOwnProperty.call(a, t))
    return (...n) => {
      const i = ft(e) ? e(...n) : e, d = ft(r) ? r(...n) : r;
      return ur({}, i, d, fs);
    };
}
function ps(e, r) {
  const t = {};
  return Object.keys(e).forEach((a) => {
    const n = e[a];
    r(n, a, e) && (t[a] = n);
  }), t;
}
var P0 = (e) => ps(e, (r) => r != null);
function B0(e) {
  return typeof e == "function";
}
process.env.NODE_ENV;
process.env.NODE_ENV;
function F0(e, ...r) {
  return B0(e) ? e(...r) : e;
}
var D0 = /* @__PURE__ */ new Set([
  ...Xc,
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
]), I0 = /* @__PURE__ */ new Set([
  "htmlWidth",
  "htmlHeight",
  "htmlSize",
  "htmlTranslate"
]);
function j0(e) {
  return I0.has(e) || !D0.has(e);
}
function M0(e, ...r) {
  if (e == null)
    throw new TypeError("Cannot convert undefined or null to object");
  const t = { ...e };
  for (const a of r)
    if (a != null)
      for (const n in a)
        Object.prototype.hasOwnProperty.call(a, n) && (n in t && delete t[n], t[n] = a[n]);
  return t;
}
var N0 = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, W0 = /* @__PURE__ */ ji(
  function(e) {
    return N0.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
), L0 = W0, V0 = function(r) {
  return r !== "theme";
}, mi = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? L0 : V0;
}, yi = function(r, t, a) {
  var n;
  if (t) {
    var i = t.shouldForwardProp;
    n = r.__emotion_forwardProp && i ? function(d) {
      return r.__emotion_forwardProp(d) && i(d);
    } : i;
  }
  return typeof n != "function" && a && (n = r.__emotion_forwardProp), n;
}, Si = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, H0 = function(r) {
  var t = r.cache, a = r.serialized, n = r.isStringTag;
  return Zn(t, a, n), Gi(function() {
    return Li(t, a, n);
  }), null;
}, U0 = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var a = r.__emotion_real === r, n = a && r.__emotion_base || r, i, d;
  t !== void 0 && (i = t.label, d = t.target);
  var u = yi(r, t, a), f = u || mi(n), g = !f("as");
  return function() {
    var h = arguments, _ = a && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && _.push("label:" + i + ";"), h[0] == null || h[0].raw === void 0)
      _.push.apply(_, h);
    else {
      process.env.NODE_ENV !== "production" && h[0][0] === void 0 && console.error(Si), _.push(h[0][0]);
      for (var m = h.length, y = 1; y < m; y++)
        process.env.NODE_ENV !== "production" && h[0][y] === void 0 && console.error(Si), _.push(h[y], h[0][y]);
    }
    var x = Yi(function(b, w, C) {
      var $ = g && b.as || n, H = "", Z = [], re = b;
      if (b.theme == null) {
        re = {};
        for (var ae in b)
          re[ae] = b[ae];
        re.theme = pe.useContext(to);
      }
      typeof b.className == "string" ? H = Wi(w.registered, Z, b.className) : b.className != null && (H = b.className + " ");
      var B = Fn(_.concat(Z), w.registered, re);
      H += w.key + "-" + B.name, d !== void 0 && (H += " " + d);
      var qe = g && u === void 0 ? mi($) : f, Se = {};
      for (var de in b)
        g && de === "as" || // $FlowFixMe
        qe(de) && (Se[de] = b[de]);
      return Se.className = H, Se.ref = C, /* @__PURE__ */ pe.createElement(pe.Fragment, null, /* @__PURE__ */ pe.createElement(H0, {
        cache: w,
        serialized: B,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ pe.createElement($, Se));
    });
    return x.displayName = i !== void 0 ? i : "Styled(" + (typeof n == "string" ? n : n.displayName || n.name || "Component") + ")", x.defaultProps = r.defaultProps, x.__emotion_real = x, x.__emotion_base = n, x.__emotion_styles = _, x.__emotion_forwardProp = u, Object.defineProperty(x, "toString", {
      value: function() {
        return d === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + d;
      }
    }), x.withComponent = function(b, w) {
      return e(b, Bn({}, t, w, {
        shouldForwardProp: yi(x, w, !0)
      })).apply(void 0, _);
    }, x;
  };
}, G0 = [
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
], Oa = U0.bind();
G0.forEach(function(e) {
  Oa[e] = Oa(e);
});
var xi, Y0 = (xi = Oa.default) != null ? xi : Oa, q0 = ({ baseStyle: e }) => (r) => {
  const { theme: t, css: a, __css: n, sx: i, ...d } = r, u = ps(d, (_, m) => Jc(m)), f = F0(e, r), g = M0(
    {},
    n,
    f,
    P0(u),
    i
  ), h = nd(g)(r.theme);
  return a ? [h, a] : h;
};
function Tn(e, r) {
  const { baseStyle: t, ...a } = r ?? {};
  a.shouldForwardProp || (a.shouldForwardProp = j0);
  const n = q0({ baseStyle: t }), i = Y0(
    e,
    a
  )(n);
  return wa.forwardRef(function(f, g) {
    const { colorMode: h, forced: _ } = oc();
    return wa.createElement(i, {
      ref: g,
      "data-theme": _ ? h : void 0,
      ...f
    });
  });
}
function X0() {
  const e = /* @__PURE__ */ new Map();
  return new Proxy(Tn, {
    /**
     * @example
     * const Div = chakra("div")
     * const WithChakra = chakra(AnotherComponent)
     */
    apply(r, t, a) {
      return Tn(...a);
    },
    /**
     * @example
     * <chakra.div />
     */
    get(r, t) {
      return e.has(t) || e.set(t, Tn(t)), e.get(t);
    }
  });
}
var K0 = X0();
function bs(e) {
  return Ai(e);
}
var Pr = K0("div");
Pr.displayName = "Box";
var hs = bs(function(r, t) {
  const { size: a, centerContent: n = !0, ...i } = r, d = n ? { display: "flex", alignItems: "center", justifyContent: "center" } : {};
  return /* @__PURE__ */ dr.jsx(
    Pr,
    {
      ref: t,
      boxSize: a,
      __css: {
        ...d,
        flexShrink: 0,
        flexGrow: 0
      },
      ...i
    }
  );
});
hs.displayName = "Square";
var J0 = bs(function(r, t) {
  const { size: a, ...n } = r;
  return /* @__PURE__ */ dr.jsx(hs, { size: a, ref: t, borderRadius: "9999px", ...n });
});
J0.displayName = "Circle";
const Q0 = {
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
}, Z0 = {
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
class eg {
  constructor(r) {
    cn(this, "key");
    cn(this, "value");
    this.key = r.key, this.value = r.value;
  }
}
const rg = {
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
          new eg({
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
}, tg = {
  shadows: {
    md: "0 0.9rem 3.4rem -0.4rem rgba(0, 0, 0, 0.05)"
  },
  colors: Z0,
  config: {
    initialColorMode: rg.get("chakra-ui-color-mode") || "system",
    useSystemColorMode: !1
  }
}, xa = {
  xs: "481px",
  sm: "577px",
  md: "768px",
  lg: "962px",
  xl: "1200px",
  "2xl": "1440px"
}, ag = {
  ...tg,
  styles: Q0,
  breakpoints: xa
};
A0(ag);
const ng = /(^\{|\}$)/g, Fg = "0px", og = "1", Dg = "100%", Gn = "1fr", Rn = "1fr", Ct = "100%", Tt = "100%", Ig = "row", ig = "flex-start", sg = "flex-start", jg = "1fr / 1fr", gs = 0, Mg = "gray", _a = 100, Pa = "grid_1", Ng = {
  MAX: 20,
  MIN: 0,
  DEFAULT: 10
}, vs = {
  dark: {
    main: "#282c34",
    gradient: "#2c303a"
  },
  light: {
    main: "#f1f1f1",
    gradient: "#ececec"
  }
}, ms = {
  mobile: `${zi(xa.sm) - 1}px`,
  tablet: `${zi(xa.lg) - 1}px`,
  desktop: xa.lg
}, Wg = {
  MAX: 1e3,
  MIN: 0,
  DEFAULT: gs
}, ka = {
  direction: yt.ROW,
  gridGap: og,
  repeatCount: gs,
  className: "",
  margin: "0",
  w: Tt,
  h: Ct,
  alignItems: sg,
  justifyContent: ig,
  withOpacity: !1,
  styles: "{}"
}, lg = {
  margin: "0",
  w: Tt,
  h: Ct,
  r: "0px",
  skeletonW: _a
}, Lg = {
  [J.FN]: "",
  [J.AUTO]: "",
  [J.PERCENT]: "100",
  [J.PX]: "100",
  [J.FR]: "1",
  [J.REM]: "1",
  [J.VH]: "100",
  [J.VW]: "100",
  [J.PC]: "1",
  [J.CM]: "1",
  [J.MM]: "100",
  [J.IN]: "1",
  [J.PT]: "1",
  [J.CH]: "1",
  [J.EM]: "1",
  [J.V_MIN]: "100",
  [J.V_MAX]: "100"
};
var ys = {}, _i = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g, cg = /\n/g, dg = /^\s*/, ug = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/, fg = /^:\s*/, pg = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/, bg = /^[;\s]*/, hg = /^\s+|\s+$/g, gg = `
`, ki = "/", wi = "*", cr = "", vg = "comment", mg = "declaration", yg = function(e, r) {
  if (typeof e != "string")
    throw new TypeError("First argument must be a string");
  if (!e) return [];
  r = r || {};
  var t = 1, a = 1;
  function n(x) {
    var b = x.match(cg);
    b && (t += b.length);
    var w = x.lastIndexOf(gg);
    a = ~w ? x.length - w : a + x.length;
  }
  function i() {
    var x = { line: t, column: a };
    return function(b) {
      return b.position = new d(x), g(), b;
    };
  }
  function d(x) {
    this.start = x, this.end = { line: t, column: a }, this.source = r.source;
  }
  d.prototype.content = e;
  function u(x) {
    var b = new Error(
      r.source + ":" + t + ":" + a + ": " + x
    );
    if (b.reason = x, b.filename = r.source, b.line = t, b.column = a, b.source = e, !r.silent) throw b;
  }
  function f(x) {
    var b = x.exec(e);
    if (b) {
      var w = b[0];
      return n(w), e = e.slice(w.length), b;
    }
  }
  function g() {
    f(dg);
  }
  function h(x) {
    var b;
    for (x = x || []; b = _(); )
      b !== !1 && x.push(b);
    return x;
  }
  function _() {
    var x = i();
    if (!(ki != e.charAt(0) || wi != e.charAt(1))) {
      for (var b = 2; cr != e.charAt(b) && (wi != e.charAt(b) || ki != e.charAt(b + 1)); )
        ++b;
      if (b += 2, cr === e.charAt(b - 1))
        return u("End of comment missing");
      var w = e.slice(2, b - 2);
      return a += 2, n(w), e = e.slice(b), a += 2, x({
        type: vg,
        comment: w
      });
    }
  }
  function m() {
    var x = i(), b = f(ug);
    if (b) {
      if (_(), !f(fg)) return u("property missing ':'");
      var w = f(pg), C = x({
        type: mg,
        property: $i(b[0].replace(_i, cr)),
        value: w ? $i(w[0].replace(_i, cr)) : cr
      });
      return f(bg), C;
    }
  }
  function y() {
    var x = [];
    h(x);
    for (var b; b = m(); )
      b !== !1 && (x.push(b), h(x));
    return x;
  }
  return g(), y();
};
function $i(e) {
  return e ? e.replace(hg, cr) : cr;
}
var Sg = Er && Er.__importDefault || function(e) {
  return e && e.__esModule ? e : { default: e };
};
Object.defineProperty(ys, "__esModule", { value: !0 });
var xg = Sg(yg);
function _g(e, r) {
  var t = null;
  if (!e || typeof e != "string")
    return t;
  var a = (0, xg.default)(e), n = typeof r == "function";
  return a.forEach(function(i) {
    if (i.type === "declaration") {
      var d = i.property, u = i.value;
      n ? r(d, u, i) : u && (t = t || {}, t[d] = u);
    }
  }), t;
}
var Ei = ys.default = _g;
const kg = Ei.default || Ei, wg = (e) => ({
  mobile: { ...e },
  tablet: { ...e }
}), Vg = (e, r) => r !== "desktop" && r ? {
  ...e.responsive[r],
  ...Object.hasOwn(e, "children") && { children: e.children },
  ...Object.hasOwn(e, "skeletons") && {
    skeletons: e.skeletons
  }
} : e, Hg = () => Object.keys(ka).filter((e) => isNaN(Number(e))).reduce(
  (e, r) => (e[r] = ka[r], e),
  { responsive: wg(ka) }
), Ss = (e) => {
  var r;
  return ((r = e.replace(/\[|\]/g, "")) == null ? void 0 : r.split(",")) || [];
}, Ug = (e, r, t) => {
  let [a, n, i, d] = Ss(r);
  switch (e) {
    case it.TOP:
      a = t;
      break;
    case it.RIGHT:
      n = t;
      break;
    case it.BOTTOM:
      i = t;
      break;
    case it.LEFT:
      d = t;
      break;
  }
  return [a, n, i, d];
}, Gg = (e) => {
  try {
    if (typeof e == "function")
      return {
        value: "function...",
        unit: J.FN
      };
    if (e === J.AUTO)
      return {
        value: J.AUTO,
        unit: J.AUTO
      };
    const r = e.match(/^([\d.]+)([a-zA-Z%]+)$/);
    if (r)
      return {
        value: r[1],
        unit: r[2]
      };
    if (Object.values(J).includes(e))
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
}, $g = (e) => !isNaN(parseFloat(String(e))) && isFinite(Number(e)), Ci = (e) => (() => {
  let [t, a, n, i] = Ss(e);
  return t && !a && !n && !i ? (a = t, n = t, i = t) : (t || (t = n || "0"), a || (a = i || "0"), n || (n = t || "0"), i || (i = a || "0")), [t, a, n, i].reduce((d, u) => (d += $g(u) ? u + "px " : u + " ", d), "");
})(), Eg = (e, r) => e.reduce((t, a, n) => {
  if (typeof a.w == "function") {
    const d = a.w();
    t += (Array.isArray(a) ? Gn : d) + " ", r(n, "w", d);
  } else
    t += Array.isArray(a) ? Gn : (a.w === Tt ? "1fr" : a.w) + " ";
  return t;
}, "1fr / "), Cg = (e, r, t) => e.reduce((a, n, i) => {
  if (typeof n.h == "function") {
    const u = n.h();
    a += (r === "center" ? Rn : u) + " ", t(i, "h", u);
  } else
    a += (r === "center" || !n.h || n.h === Ct ? Rn : n.h) + " ";
  return a;
}, "") + " / 1fr", Ti = (e, r, t, a) => e > 0 && a > 0 ? {
  isRepeated: !0,
  key: r + "_repeated_" + a,
  item: t
} : { key: r, item: t }, zn = (e, r) => {
  function t(a) {
    return Object.keys(a).reduce(
      (n, i) => {
        const d = i;
        return d in e || (n[d] = a[d]), n;
      },
      { ...e }
    );
  }
  return t(
    r ? lg : ka
  );
}, Ba = (e, r) => r > 0 && e[0] ? [].constructor(r).fill(e[0]) : e, Ri = (e, r, t, a) => (r || t) > 0 && a ? 1 - 1 / (r || t) * e : 1, Tg = ({
  grid: e,
  hasChildren: r,
  skeletons: t,
  children: a,
  repeatCount: n,
  reservedProps: i,
  keyLevel: d
}) => e.direction === yt.ROW ? Eg(
  (r ? a : Ba(t, n)).map(({ w: u = Gn }) => ({ w: u })),
  (u, f, g) => {
    i[`${d}_${u + 1}`] || (i[`${d}_${u + 1}`] = {}), i[`${d}_${u + 1}`][f] = g;
  }
) : Cg(
  r ? a : Ba(t, n),
  e.alignItems,
  (u, f, g) => {
    i[`${d}_${u + 1}`] || (i[`${d}_${u + 1}`] = {}), i[`${d}_${u + 1}`][f] = g;
  }
), Yg = (e, r) => {
  if (!r.length) return 1;
  const t = r.join("").split(e).filter((n) => n !== "").map((n) => +n), a = Math.max(...t);
  for (let n = 1; n <= a; n++)
    if (!t.includes(n))
      return n;
  return a + 1;
}, Rg = (e, r) => !(e != null && e.includes("repeated")) && !(r != null && r.includes("repeated")), qg = ({
  keyLevel: e,
  highlightedNode: r,
  parent: t,
  isDark: a,
  hasChildren: n
}) => e === r && Rg(e, t) ? {
  boxShadow: "0px 0px 1px 1px var(--chakra-colors-brand-500)"
} : t === r ? {
  boxShadow: `0px 0px 1px 1px inset ${a ? "#323441" : "#e6e6e6"}`
} : n ? {} : {
  boxShadow: `0px 0px 0px 1px inset ${a ? "rgba(50,52,65,0.24)" : "rgba(230,230,230,0.27)"}`
}, Xg = (e, r, t) => {
  if (e) {
    const a = e.getAttribute("data-key") || "", n = a.split("_").filter(Yn);
    if (a === r) {
      if (a === Pa) return;
      t([...n].slice(0, n.length - 1).join("_"));
      return;
    }
    if (r.indexOf(a) > -1) {
      t(a);
      return;
    }
    const i = r.split("_").filter(Yn), d = (f) => f.length === i.length && [...f].slice(0, f.length - 1).join("_") === [...i].slice(0, i.length - 1).join("_"), u = (f) => [...f].slice(0, f.length - 1).join("_") === [...i].join("_");
    if (u(n) || d(n)) {
      t(a);
      return;
    }
    for (let f = n.length - 1; f > 1; f--) {
      const g = [...n].splice(0, f);
      if (d(g) || u(g)) {
        t(g.join("_"));
        return;
      }
      if (g.join("_") === r) {
        t(g.concat(n[f]).join("_"));
        return;
      }
    }
    t(Pa);
  }
}, Kg = (e) => {
  if (e === Pa) return e;
  const r = e.split("_").filter(Yn);
  return r.pop(), r.join("_");
}, Jg = (e) => {
  let r, t;
  document.createRange ? (r = document.createRange(), r.selectNodeContents(e), t = window.getSelection(), t && (t.removeAllRanges(), t.addRange(r), document.execCommand("copy"), t.removeAllRanges())) : (r = document.body.createTextRange(), r.moveToElementText(e), r.select(), document.execCommand("copy"));
}, la = (e) => e.indexOf("fr") > -1 ? "auto" : e, Qg = (e, r) => Object.hasOwn(r, e), Yn = (e) => e !== "skeleton", Zg = (e) => e.includes("skeleton"), ev = (e) => {
  let r = e, t = r.hasAttribute("data-key");
  for (; !t; ) {
    if (r === document.body)
      return null;
    r = e.parentElement, t = r.hasAttribute("data-key");
  }
  return r;
}, zi = (e) => Number(e.split("px")[0]), rv = (e) => e.length > 1 && /^0/.test(e) ? e.replace(/^0/, "") : e, zg = (e) => {
  const r = e.replace(ng, "");
  return kg(r);
}, Ag = (e) => {
  const r = {};
  return Object.keys(e).forEach((t) => {
    const a = t.replace(
      /-([a-z])/g,
      (n, i) => i.toUpperCase()
    );
    r[a] = e[t];
  }), r;
}, xs = Oi({
  colorTheme: { ...vs },
  breakpoints: { ...ms }
}), tv = ({
  children: e,
  isDark: r = !1,
  colorTheme: t = vs,
  breakpoints: a = ms
}) => /* @__PURE__ */ dr.jsx(
  xs.Provider,
  {
    value: {
      isDark: r,
      colorTheme: t,
      breakpoints: a
    },
    children: e
  }
), Og = () => {
  const e = qn(xs);
  if (e === void 0)
    throw Error("You must run this hook inside ReactSkeletonProvider");
  return e;
}, av = rl(({ grid: e, styles: r }) => {
  const { colorTheme: t, isDark: a } = Og(), n = a ? t[An.DARK] : t[An.LIGHT], i = (f, g, h, _, m) => f.map(
    (y, x) => /* @__PURE__ */ dr.jsx(
      Pr,
      {
        "data-key": y.key,
        style: {
          width: m && h === yt.ROW ? Tt : la(
            (typeof y.w == "function" ? y.w() : y.w).toString()
          ),
          height: m && h === yt.COLUMN ? Ct : la(
            (typeof y.h != "function" ? y.h : y.h()).toString()
          ),
          borderRadius: y.r || "0px",
          margin: Ci(y.margin || ""),
          backgroundColor: n.main,
          opacity: Ri(
            x,
            g,
            f.length,
            _
          )
        },
        position: "relative",
        overflow: "hidden",
        children: y.isRepeated ? null : /* @__PURE__ */ dr.jsx(
          Pr,
          {
            display: y.isRepeated ? "none" : "block",
            left: 0,
            position: "absolute",
            h: "full",
            top: 0,
            style: {
              width: `${y.skeletonW || _a}px`,
              backgroundImage: `linear-gradient(
                90deg,
                ${n.main} 0px,
                ${n.gradient} ${(Number(y.skeletonW) || _a) / 2}px,
                ${n.main} ${y.skeletonW || _a}px
              )`
            }
          }
        )
      },
      y.key
    )
  ), d = (f) => {
    try {
      if (f.replace(/\s/g, "") === "{}")
        throw Error("Empty state");
      const g = zg(f);
      if (g)
        return Object.keys(g).forEach((h) => {
          [
            "margin",
            "width",
            "height",
            "gap",
            "align-items",
            "justify-items"
          ].includes(h) && delete g[h];
        }), g;
    } catch {
      return {};
    }
  }, u = tl(
    ({
      grid: f,
      dataKey: g,
      index: h,
      length: _,
      reservedPropsFromParent: m
    }) => {
      var qe, Se;
      const y = g, x = {
        parent: y,
        withOpacity: f.withOpacity
      }, b = [], w = [], C = (f.gridGap || 0) + "rem", $ = Object.hasOwn(f, "children") && Array.isArray(f.children) && f.children.length > 0, H = Object.hasOwn(f, "skeletons") && Array.isArray(f.skeletons) && f.skeletons.length > 0, Z = f.repeatCount;
      Z > 0 && (x.repeatCount = Z), $ && Ba(f.children, Z).map(Ti.bind(null, Z, y)).forEach(({ key: de, item: je }) => {
        b.push({
          // ...getAdaptiveData(gridState[path] as IGrid, device),
          // ...gridState[path] as IGrid, // todo
          ...zn(je),
          key: de
        });
      }), H && Ba(f.skeletons, Z).map(Ti.bind(null, Z, y)).forEach(({ key: de, item: je }) => {
        w.push({
          // ...getAdaptiveData(skeletonsState[path] as ISkeleton, device), // todo
          ...zn(je, !0),
          key: de
        });
      });
      const re = Tg({
        grid: f,
        hasChildren: $,
        children: b,
        skeletons: w,
        repeatCount: Z,
        reservedProps: x,
        keyLevel: y
      }), ae = f.withOpacity, B = d(f.styles) || {};
      return console.log(b, w, f), /* @__PURE__ */ dr.jsx(
        Pr,
        {
          display: "grid",
          "data-key": y,
          style: {
            gap: C,
            margin: Ci(f.margin || ""),
            grid: re,
            height: m != null && m.parent ? Ct : la(
              ((qe = m == null ? void 0 : m[y]) == null ? void 0 : qe.h) ?? (typeof f.h == "function" ? f.h() : f.h)
            ),
            width: m != null && m.parent ? Tt : la(
              ((Se = m == null ? void 0 : m[y]) == null ? void 0 : Se.w) ?? (typeof f.w == "function" ? f.w() : f.w)
            ),
            alignItems: f.alignItems,
            justifyContent: f.justifyContent,
            opacity: Ri(
              h,
              m == null ? void 0 : m.repeatCount,
              _,
              m == null ? void 0 : m.withOpacity
            ),
            ...Ag(B)
          },
          className: f.className || "",
          children: $ ? b.map(
            (de, je) => u({
              grid: de,
              dataKey: de.key,
              index: je,
              length: b.length,
              reservedPropsFromParent: x
            })
          ) : H ? i(
            w,
            Z,
            f.direction,
            ae,
            x.parent
          ) : null
        },
        y
      );
    },
    [
      e,
      n
      // isDark, colorTheme, device
    ]
  );
  return /* @__PURE__ */ dr.jsx(Pr, { style: r ?? {}, children: u({
    grid: zn(e),
    dataKey: Pa,
    index: 0,
    length: 1
  }) });
});
export {
  al as ALIGN_ITEMS,
  ol as COLOR_MODE,
  An as COLOR_MODES,
  ka as CONTAINER_INITIAL_VALUES,
  sg as DEFAULT_ALIGN_ITEMS_ALIGNMENT,
  ms as DEFAULT_BREAKPOINTS,
  vs as DEFAULT_COLOR_THEMES,
  Ig as DEFAULT_DIRECTION_GRID_COLS,
  og as DEFAULT_GAP,
  Rn as DEFAULT_GRID_CONTAINER_HEIGHT,
  Gn as DEFAULT_GRID_CONTAINER_WIDTH,
  jg as DEFAULT_GRID_STYLE,
  Ct as DEFAULT_HEIGHT,
  ig as DEFAULT_JUSTIFY_ALIGNMENT,
  Fg as DEFAULT_RADIUS,
  gs as DEFAULT_REPEAT_COUNT,
  _a as DEFAULT_SKELETON_GRADIENT_WIDTH,
  Dg as DEFAULT_SKELETON_WIDTH,
  Mg as DEFAULT_VARIANT,
  Tt as DEFAULT_WIDTH,
  yt as DIRECTION,
  nl as JUSTIFY_CONTENT,
  it as MARGIN_SIDES,
  Wg as REPEAT_COUNT_RANGE,
  Pa as ROOT_KEY,
  tv as ReactSkeletonProvider,
  J as SIZE_UNITS,
  Lg as SIZE_UNITS_INITIAL_VALUES,
  lg as SKELETON_INITIAL_VALUES,
  ng as STYLE_PARSING_REGEXP,
  av as Skeleton,
  Ng as TREE_ELEMENTS_SPACING,
  la as applicableValue,
  rv as convertInitialZeroToValueItSelf,
  Ss as convertToArray,
  Jg as copyExecCommand,
  Ag as cssToReactStyle,
  zi as filterFromPx,
  Yn as filterFromSkeleton,
  Yg as findAbsentIndex,
  Xg as findTrap,
  qg as generateBorders,
  Tg as generateCSSGridArea,
  Hg as generateDefaultValues,
  Eg as generateGridArea,
  Cg as generateGridAreaAsColDirection,
  Ci as generateMargin,
  Vg as getAdaptiveData,
  ev as getDirectParentWithDataKeyAttr,
  Kg as getParent,
  Qg as isClickedOnSkeleton,
  Zg as isSkeletonHighlighted,
  Ba as itemsWithRepeat,
  Ti as mutateWithRepeated,
  Ug as overrideSides,
  zg as parseStyleObject,
  zn as putInitialValuesIfNotExists,
  wg as responsiveInstance,
  Ri as setOpacity,
  Gg as valueWithPrefix
};
