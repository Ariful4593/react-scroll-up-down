import "./index.css";
import Fe, { useState as z, useEffect as je } from "react";
var ae = { exports: {} }, L = {};
/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ke;
function ur() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var O = Fe, y = Symbol.for("react.element"), A = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), x = Symbol.for("react.strict_mode"), j = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), g = Symbol.for("react.context"), u = Symbol.for("react.forward_ref"), w = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), m = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), R = Symbol.for("react.offscreen"), W = Symbol.iterator, V = "@@iterator";
    function J(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[V];
      return typeof r == "function" ? r : null;
    }
    var T = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        k("error", e, t);
      }
    }
    function k(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(a) {
          return String(a);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var M = !1, G = !1, K = !1, Ae = !1, Ie = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === j || Ie || e === x || e === w || e === f || Ae || e === R || M || G || K || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === m || e.$$typeof === S || e.$$typeof === g || e.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function Le(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function b(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case A:
          return "Portal";
        case j:
          return "Profiler";
        case x:
          return "StrictMode";
        case w:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case g:
            var r = e;
            return le(r) + ".Consumer";
          case S:
            var t = e;
            return le(t._context) + ".Provider";
          case u:
            return Le(e, e.render, "ForwardRef");
          case m:
            var n = e.displayName || null;
            return n !== null ? n : b(e.type) || "Memo";
          case p: {
            var i = e, l = i._payload, a = i._init;
            try {
              return b(a(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, I = 0, se, ue, ce, fe, de, ve, pe;
    function he() {
    }
    he.__reactDisabledLog = !0;
    function $e() {
      {
        if (I === 0) {
          se = console.log, ue = console.info, ce = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: he,
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
        I++;
      }
    }
    function We() {
      {
        if (I--, I === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: se
            }),
            info: C({}, e, {
              value: ue
            }),
            warn: C({}, e, {
              value: ce
            }),
            error: C({}, e, {
              value: fe
            }),
            group: C({}, e, {
              value: de
            }),
            groupCollapsed: C({}, e, {
              value: ve
            }),
            groupEnd: C({}, e, {
              value: pe
            })
          });
        }
        I < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = T.ReactCurrentDispatcher, Z;
    function N(e, r, t) {
      {
        if (Z === void 0)
          try {
            throw Error();
          } catch (i) {
            var n = i.stack.trim().match(/\n( *(at )?)/);
            Z = n && n[1] || "";
          }
        return `
` + Z + e;
      }
    }
    var Q = !1, U;
    {
      var Ve = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ve();
    }
    function me(e, r) {
      if (!e || Q)
        return "";
      {
        var t = U.get(e);
        if (t !== void 0)
          return t;
      }
      var n;
      Q = !0;
      var i = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var l;
      l = X.current, X.current = null, $e();
      try {
        if (r) {
          var a = function() {
            throw Error();
          };
          if (Object.defineProperty(a.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(a, []);
            } catch (E) {
              n = E;
            }
            Reflect.construct(e, [], a);
          } else {
            try {
              a.call();
            } catch (E) {
              n = E;
            }
            e.call(a.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (E) {
            n = E;
          }
          e();
        }
      } catch (E) {
        if (E && n && typeof E.stack == "string") {
          for (var o = E.stack.split(`
`), v = n.stack.split(`
`), s = o.length - 1, c = v.length - 1; s >= 1 && c >= 0 && o[s] !== v[c]; )
            c--;
          for (; s >= 1 && c >= 0; s--, c--)
            if (o[s] !== v[c]) {
              if (s !== 1 || c !== 1)
                do
                  if (s--, c--, c < 0 || o[s] !== v[c]) {
                    var h = `
` + o[s].replace(" at new ", " at ");
                    return e.displayName && h.includes("<anonymous>") && (h = h.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, h), h;
                  }
                while (s >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = l, We(), Error.prepareStackTrace = i;
      }
      var F = e ? e.displayName || e.name : "", xe = F ? N(F) : "";
      return typeof e == "function" && U.set(e, xe), xe;
    }
    function Me(e, r, t) {
      return me(e, !1);
    }
    function Ne(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function B(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return me(e, Ne(e));
      if (typeof e == "string")
        return N(e);
      switch (e) {
        case w:
          return N("Suspense");
        case f:
          return N("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case u:
            return Me(e.render);
          case m:
            return B(e.type, r, t);
          case p: {
            var n = e, i = n._payload, l = n._init;
            try {
              return B(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var q = Object.prototype.hasOwnProperty, ge = {}, be = T.ReactDebugCurrentFrame;
    function H(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        be.setExtraStackFrame(t);
      } else
        be.setExtraStackFrame(null);
    }
    function Ue(e, r, t, n, i) {
      {
        var l = Function.call.bind(q);
        for (var a in e)
          if (l(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (s) {
              o = s;
            }
            o && !(o instanceof Error) && (H(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), H(null)), o instanceof Error && !(o.message in ge) && (ge[o.message] = !0, H(i), d("Failed %s type: %s", t, o.message), H(null));
          }
      }
    }
    var Be = Array.isArray;
    function ee(e) {
      return Be(e);
    }
    function qe(e) {
      {
        var r = typeof Symbol == "function" && Symbol.toStringTag, t = r && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return t;
      }
    }
    function He(e) {
      try {
        return Ee(e), !1;
      } catch {
        return !0;
      }
    }
    function Ee(e) {
      return "" + e;
    }
    function ye(e) {
      if (He(e))
        return d("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", qe(e)), Ee(e);
    }
    var Y = T.ReactCurrentOwner, ze = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, we, re;
    re = {};
    function Je(e) {
      if (q.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function Ge(e) {
      if (q.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && Y.current && r && Y.current.stateNode !== r) {
        var t = b(Y.current.type);
        re[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', b(Y.current.type), e.ref), re[t] = !0);
      }
    }
    function Xe(e, r) {
      {
        var t = function() {
          _e || (_e = !0, d("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "key", {
          get: t,
          configurable: !0
        });
      }
    }
    function Ze(e, r) {
      {
        var t = function() {
          we || (we = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
        };
        t.isReactWarning = !0, Object.defineProperty(e, "ref", {
          get: t,
          configurable: !0
        });
      }
    }
    var Qe = function(e, r, t, n, i, l, a) {
      var o = {
        // This tag allows us to uniquely identify this as a React Element
        $$typeof: y,
        // Built-in properties that belong on the element
        type: e,
        key: r,
        ref: t,
        props: a,
        // Record the component responsible for creating this element.
        _owner: l
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
        value: n
      }), Object.defineProperty(o, "_source", {
        configurable: !1,
        enumerable: !1,
        writable: !1,
        value: i
      }), Object.freeze && (Object.freeze(o.props), Object.freeze(o)), o;
    };
    function er(e, r, t, n, i) {
      {
        var l, a = {}, o = null, v = null;
        t !== void 0 && (ye(t), o = "" + t), Ge(r) && (ye(r.key), o = "" + r.key), Je(r) && (v = r.ref, Ke(r, i));
        for (l in r)
          q.call(r, l) && !ze.hasOwnProperty(l) && (a[l] = r[l]);
        if (e && e.defaultProps) {
          var s = e.defaultProps;
          for (l in s)
            a[l] === void 0 && (a[l] = s[l]);
        }
        if (o || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Xe(a, c), v && Ze(a, c);
        }
        return Qe(e, o, v, i, n, Y.current, a);
      }
    }
    var te = T.ReactCurrentOwner, Re = T.ReactDebugCurrentFrame;
    function D(e) {
      if (e) {
        var r = e._owner, t = B(e.type, e._source, r ? r.type : null);
        Re.setExtraStackFrame(t);
      } else
        Re.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Te() {
      {
        if (te.current) {
          var e = b(te.current.type);
          if (e)
            return `

Check the render method of \`` + e + "`.";
        }
        return "";
      }
    }
    function rr(e) {
      {
        if (e !== void 0) {
          var r = e.fileName.replace(/^.*[\\\/]/, ""), t = e.lineNumber;
          return `

Check your code at ` + r + ":" + t + ".";
        }
        return "";
      }
    }
    var Se = {};
    function tr(e) {
      {
        var r = Te();
        if (!r) {
          var t = typeof e == "string" ? e : e.displayName || e.name;
          t && (r = `

Check the top-level render call using <` + t + ">.");
        }
        return r;
      }
    }
    function Ce(e, r) {
      {
        if (!e._store || e._store.validated || e.key != null)
          return;
        e._store.validated = !0;
        var t = tr(r);
        if (Se[t])
          return;
        Se[t] = !0;
        var n = "";
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + b(e._owner.type) + "."), D(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), D(null);
      }
    }
    function Pe(e, r) {
      {
        if (typeof e != "object")
          return;
        if (ee(e))
          for (var t = 0; t < e.length; t++) {
            var n = e[t];
            oe(n) && Ce(n, r);
          }
        else if (oe(e))
          e._store && (e._store.validated = !0);
        else if (e) {
          var i = J(e);
          if (typeof i == "function" && i !== e.entries)
            for (var l = i.call(e), a; !(a = l.next()).done; )
              oe(a.value) && Ce(a.value, r);
        }
      }
    }
    function nr(e) {
      {
        var r = e.type;
        if (r == null || typeof r == "string")
          return;
        var t;
        if (typeof r == "function")
          t = r.propTypes;
        else if (typeof r == "object" && (r.$$typeof === u || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === m))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = b(r);
          Ue(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var i = b(r);
          d("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", i || "Unknown");
        }
        typeof r.getDefaultProps == "function" && !r.getDefaultProps.isReactClassApproved && d("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
      }
    }
    function or(e) {
      {
        for (var r = Object.keys(e.props), t = 0; t < r.length; t++) {
          var n = r[t];
          if (n !== "children" && n !== "key") {
            D(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), D(null);
            break;
          }
        }
        e.ref !== null && (D(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), D(null));
      }
    }
    function Oe(e, r, t, n, i, l) {
      {
        var a = Ye(e);
        if (!a) {
          var o = "";
          (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (o += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var v = rr(i);
          v ? o += v : o += Te();
          var s;
          e === null ? s = "null" : ee(e) ? s = "array" : e !== void 0 && e.$$typeof === y ? (s = "<" + (b(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : s = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", s, o);
        }
        var c = er(e, r, t, i, l);
        if (c == null)
          return c;
        if (a) {
          var h = r.children;
          if (h !== void 0)
            if (n)
              if (ee(h)) {
                for (var F = 0; F < h.length; F++)
                  Pe(h[F], e);
                Object.freeze && Object.freeze(h);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(h, e);
        }
        return e === _ ? or(c) : nr(c), c;
      }
    }
    function ar(e, r, t) {
      return Oe(e, r, t, !0);
    }
    function ir(e, r, t) {
      return Oe(e, r, t, !1);
    }
    var lr = ir, sr = ar;
    L.Fragment = _, L.jsx = lr, L.jsxs = sr;
  }()), L;
}
var $ = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var De;
function cr() {
  if (De)
    return $;
  De = 1;
  var O = Fe, y = Symbol.for("react.element"), A = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, x = O.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, j = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(g, u, w) {
    var f, m = {}, p = null, R = null;
    w !== void 0 && (p = "" + w), u.key !== void 0 && (p = "" + u.key), u.ref !== void 0 && (R = u.ref);
    for (f in u)
      _.call(u, f) && !j.hasOwnProperty(f) && (m[f] = u[f]);
    if (g && g.defaultProps)
      for (f in u = g.defaultProps, u)
        m[f] === void 0 && (m[f] = u[f]);
    return { $$typeof: y, type: g, key: p, ref: R, props: m, _owner: x.current };
  }
  return $.Fragment = A, $.jsx = S, $.jsxs = S, $;
}
process.env.NODE_ENV === "production" ? ae.exports = cr() : ae.exports = ur();
var P = ae.exports;
const vr = ({
  bottomRef: O = null,
  topRef: y = null,
  upIconColor: A = "white",
  downIconColor: _ = "white",
  upTitleMessage: x = "Scroll to top",
  downTitleMessage: j = "Scroll to bottom",
  style: S = {},
  renderIcon: g = null
}) => {
  const [u, w] = z(0), [f, m] = z(0), [p, R] = z(null), [W, V] = z(!0), J = () => {
    O ? O.current.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest"
    }) : window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth"
    });
  }, T = () => {
    y ? y.current.scrollIntoView({
      behavior: "smooth",
      block: "start",
      inline: "nearest"
    }) : window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };
  je(() => {
    const k = () => {
      const M = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      w(M);
      const G = document.documentElement.scrollTop || document.body.scrollTop;
      u > f ? R("down") : u < f && R("up"), !G && !M && R(null), m(u);
      const K = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight;
      V(!K);
    };
    return window.addEventListener("scroll", k), () => {
      window.removeEventListener("scroll", k);
    };
  }, [f, u]);
  const d = () => {
    const k = window.innerHeight + window.scrollY <= document.body.offsetHeight;
    V(!k);
  };
  return je(() => {
    window.addEventListener("scroll", d);
  }, []), /* @__PURE__ */ P.jsx(P.Fragment, { children: W && p && /* @__PURE__ */ P.jsx(
    "a",
    {
      to: "#",
      id: "scroll_button",
      style: {
        display: "block",
        cursor: "pointer",
        backgroundColor: "#663399",
        ...S
      },
      onClick: p === "down" ? J : T,
      title: p === "down" ? j : x,
      children: g ? g(p) : p === "down" ? /* @__PURE__ */ P.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          height: "16",
          width: "12",
          viewBox: "0 0 384 512",
          fill: A,
          children: /* @__PURE__ */ P.jsx("path", { d: "M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z" })
        }
      ) : /* @__PURE__ */ P.jsx(
        "svg",
        {
          xmlns: "http://www.w3.org/2000/svg",
          height: "16",
          width: "12",
          viewBox: "0 0 384 512",
          fill: _,
          children: /* @__PURE__ */ P.jsx("path", { d: "M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-160-160z" })
        }
      )
    }
  ) });
};
export {
  vr as default
};
