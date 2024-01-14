import "./index.css";
import Fe, { useState as H, useEffect as je } from "react";
var ae = { exports: {} }, Y = {};
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
function sr() {
  return ke || (ke = 1, process.env.NODE_ENV !== "production" && function() {
    var P = Fe, y = Symbol.for("react.element"), F = Symbol.for("react.portal"), _ = Symbol.for("react.fragment"), O = Symbol.for("react.strict_mode"), x = Symbol.for("react.profiler"), S = Symbol.for("react.provider"), b = Symbol.for("react.context"), s = Symbol.for("react.forward_ref"), R = Symbol.for("react.suspense"), f = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), w = Symbol.for("react.offscreen"), W = Symbol.iterator, L = "@@iterator";
    function G(e) {
      if (e === null || typeof e != "object")
        return null;
      var r = W && e[W] || e[L];
      return typeof r == "function" ? r : null;
    }
    var T = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
    function d(e) {
      {
        for (var r = arguments.length, t = new Array(r > 1 ? r - 1 : 0), n = 1; n < r; n++)
          t[n - 1] = arguments[n];
        j("error", e, t);
      }
    }
    function j(e, r, t) {
      {
        var n = T.ReactDebugCurrentFrame, i = n.getStackAddendum();
        i !== "" && (r += "%s", t = t.concat([i]));
        var l = t.map(function(a) {
          return String(a);
        });
        l.unshift("Warning: " + r), Function.prototype.apply.call(console[e], console, l);
      }
    }
    var N = !1, z = !1, K = !1, Ae = !1, Ie = !1, ie;
    ie = Symbol.for("react.module.reference");
    function Ye(e) {
      return !!(typeof e == "string" || typeof e == "function" || e === _ || e === x || Ie || e === O || e === R || e === f || Ae || e === w || N || z || K || typeof e == "object" && e !== null && (e.$$typeof === p || e.$$typeof === h || e.$$typeof === S || e.$$typeof === b || e.$$typeof === s || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      e.$$typeof === ie || e.getModuleId !== void 0));
    }
    function $e(e, r, t) {
      var n = e.displayName;
      if (n)
        return n;
      var i = r.displayName || r.name || "";
      return i !== "" ? t + "(" + i + ")" : t;
    }
    function le(e) {
      return e.displayName || "Context";
    }
    function g(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && d("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case _:
          return "Fragment";
        case F:
          return "Portal";
        case x:
          return "Profiler";
        case O:
          return "StrictMode";
        case R:
          return "Suspense";
        case f:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case b:
            var r = e;
            return le(r) + ".Consumer";
          case S:
            var t = e;
            return le(t._context) + ".Provider";
          case s:
            return $e(e, e.render, "ForwardRef");
          case h:
            var n = e.displayName || null;
            return n !== null ? n : g(e.type) || "Memo";
          case p: {
            var i = e, l = i._payload, a = i._init;
            try {
              return g(a(l));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    var C = Object.assign, A = 0, ue, se, ce, fe, de, ve, pe;
    function me() {
    }
    me.__reactDisabledLog = !0;
    function We() {
      {
        if (A === 0) {
          ue = console.log, se = console.info, ce = console.warn, fe = console.error, de = console.group, ve = console.groupCollapsed, pe = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: me,
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
        A++;
      }
    }
    function Le() {
      {
        if (A--, A === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: C({}, e, {
              value: ue
            }),
            info: C({}, e, {
              value: se
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
        A < 0 && d("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var X = T.ReactCurrentDispatcher, Z;
    function V(e, r, t) {
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
      var Ne = typeof WeakMap == "function" ? WeakMap : Map;
      U = new Ne();
    }
    function he(e, r) {
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
      l = X.current, X.current = null, We();
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
`), u = o.length - 1, c = v.length - 1; u >= 1 && c >= 0 && o[u] !== v[c]; )
            c--;
          for (; u >= 1 && c >= 0; u--, c--)
            if (o[u] !== v[c]) {
              if (u !== 1 || c !== 1)
                do
                  if (u--, c--, c < 0 || o[u] !== v[c]) {
                    var m = `
` + o[u].replace(" at new ", " at ");
                    return e.displayName && m.includes("<anonymous>") && (m = m.replace("<anonymous>", e.displayName)), typeof e == "function" && U.set(e, m), m;
                  }
                while (u >= 1 && c >= 0);
              break;
            }
        }
      } finally {
        Q = !1, X.current = l, Le(), Error.prepareStackTrace = i;
      }
      var D = e ? e.displayName || e.name : "", xe = D ? V(D) : "";
      return typeof e == "function" && U.set(e, xe), xe;
    }
    function Ve(e, r, t) {
      return he(e, !1);
    }
    function Ue(e) {
      var r = e.prototype;
      return !!(r && r.isReactComponent);
    }
    function M(e, r, t) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return he(e, Ue(e));
      if (typeof e == "string")
        return V(e);
      switch (e) {
        case R:
          return V("Suspense");
        case f:
          return V("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case s:
            return Ve(e.render);
          case h:
            return M(e.type, r, t);
          case p: {
            var n = e, i = n._payload, l = n._init;
            try {
              return M(l(i), r, t);
            } catch {
            }
          }
        }
      return "";
    }
    var B = Object.prototype.hasOwnProperty, be = {}, ge = T.ReactDebugCurrentFrame;
    function q(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        ge.setExtraStackFrame(t);
      } else
        ge.setExtraStackFrame(null);
    }
    function Me(e, r, t, n, i) {
      {
        var l = Function.call.bind(B);
        for (var a in e)
          if (l(e, a)) {
            var o = void 0;
            try {
              if (typeof e[a] != "function") {
                var v = Error((n || "React class") + ": " + t + " type `" + a + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[a] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              o = e[a](r, a, n, t, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (u) {
              o = u;
            }
            o && !(o instanceof Error) && (q(i), d("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", n || "React class", t, a, typeof o), q(null)), o instanceof Error && !(o.message in be) && (be[o.message] = !0, q(i), d("Failed %s type: %s", t, o.message), q(null));
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
    var I = T.ReactCurrentOwner, Je = {
      key: !0,
      ref: !0,
      __self: !0,
      __source: !0
    }, _e, Re, re;
    re = {};
    function Ge(e) {
      if (B.call(e, "ref")) {
        var r = Object.getOwnPropertyDescriptor(e, "ref").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.ref !== void 0;
    }
    function ze(e) {
      if (B.call(e, "key")) {
        var r = Object.getOwnPropertyDescriptor(e, "key").get;
        if (r && r.isReactWarning)
          return !1;
      }
      return e.key !== void 0;
    }
    function Ke(e, r) {
      if (typeof e.ref == "string" && I.current && r && I.current.stateNode !== r) {
        var t = g(I.current.type);
        re[t] || (d('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', g(I.current.type), e.ref), re[t] = !0);
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
          Re || (Re = !0, d("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", r));
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
        t !== void 0 && (ye(t), o = "" + t), ze(r) && (ye(r.key), o = "" + r.key), Ge(r) && (v = r.ref, Ke(r, i));
        for (l in r)
          B.call(r, l) && !Je.hasOwnProperty(l) && (a[l] = r[l]);
        if (e && e.defaultProps) {
          var u = e.defaultProps;
          for (l in u)
            a[l] === void 0 && (a[l] = u[l]);
        }
        if (o || v) {
          var c = typeof e == "function" ? e.displayName || e.name || "Unknown" : e;
          o && Xe(a, c), v && Ze(a, c);
        }
        return Qe(e, o, v, i, n, I.current, a);
      }
    }
    var te = T.ReactCurrentOwner, we = T.ReactDebugCurrentFrame;
    function k(e) {
      if (e) {
        var r = e._owner, t = M(e.type, e._source, r ? r.type : null);
        we.setExtraStackFrame(t);
      } else
        we.setExtraStackFrame(null);
    }
    var ne;
    ne = !1;
    function oe(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    function Te() {
      {
        if (te.current) {
          var e = g(te.current.type);
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
        e && e._owner && e._owner !== te.current && (n = " It was passed a child from " + g(e._owner.type) + "."), k(e), d('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', t, n), k(null);
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
          var i = G(e);
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
        else if (typeof r == "object" && (r.$$typeof === s || // Note: Memo only checks outer props here.
        // Inner props are checked in the reconciler.
        r.$$typeof === h))
          t = r.propTypes;
        else
          return;
        if (t) {
          var n = g(r);
          Me(t, e.props, "prop", n, e);
        } else if (r.PropTypes !== void 0 && !ne) {
          ne = !0;
          var i = g(r);
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
            k(e), d("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", n), k(null);
            break;
          }
        }
        e.ref !== null && (k(e), d("Invalid attribute `ref` supplied to `React.Fragment`."), k(null));
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
          var u;
          e === null ? u = "null" : ee(e) ? u = "array" : e !== void 0 && e.$$typeof === y ? (u = "<" + (g(e.type) || "Unknown") + " />", o = " Did you accidentally export a JSX literal instead of a component?") : u = typeof e, d("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", u, o);
        }
        var c = er(e, r, t, i, l);
        if (c == null)
          return c;
        if (a) {
          var m = r.children;
          if (m !== void 0)
            if (n)
              if (ee(m)) {
                for (var D = 0; D < m.length; D++)
                  Pe(m[D], e);
                Object.freeze && Object.freeze(m);
              } else
                d("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");
            else
              Pe(m, e);
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
    var lr = ir, ur = ar;
    Y.Fragment = _, Y.jsx = lr, Y.jsxs = ur;
  }()), Y;
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
  var P = Fe, y = Symbol.for("react.element"), F = Symbol.for("react.fragment"), _ = Object.prototype.hasOwnProperty, O = P.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, x = { key: !0, ref: !0, __self: !0, __source: !0 };
  function S(b, s, R) {
    var f, h = {}, p = null, w = null;
    R !== void 0 && (p = "" + R), s.key !== void 0 && (p = "" + s.key), s.ref !== void 0 && (w = s.ref);
    for (f in s)
      _.call(s, f) && !x.hasOwnProperty(f) && (h[f] = s[f]);
    if (b && b.defaultProps)
      for (f in s = b.defaultProps, s)
        h[f] === void 0 && (h[f] = s[f]);
    return { $$typeof: y, type: b, key: p, ref: w, props: h, _owner: O.current };
  }
  return $.Fragment = F, $.jsx = S, $.jsxs = S, $;
}
process.env.NODE_ENV === "production" ? ae.exports = cr() : ae.exports = sr();
var J = ae.exports;
const vr = ({
  bottomRef: P = null,
  topRef: y = null,
  upIconClassName: F = "fas fa-arrow-up",
  downIconClassName: _ = "fas fa-arrow-down",
  upTitleMessage: O = "Scroll to top",
  downTitleMessage: x = "Scroll to bottom",
  style: S = {},
  renderIcon: b = null
}) => {
  const [s, R] = H(0), [f, h] = H(0), [p, w] = H(null), [W, L] = H(!0), G = () => {
    P ? P.current.scrollIntoView({
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
    const j = () => {
      const N = window.scrollY || document.documentElement.scrollTop || document.body.scrollTop;
      R(N);
      const z = document.documentElement.scrollTop || document.body.scrollTop;
      s > f ? w("down") : s < f && w("up"), !z && !N && w(null), h(s);
      const K = window.innerHeight + window.scrollY >= document.documentElement.offsetHeight;
      L(!K);
    };
    return window.addEventListener("scroll", j), () => {
      window.removeEventListener("scroll", j);
    };
  }, [f, s]);
  const d = () => {
    const j = window.innerHeight + window.scrollY <= document.body.offsetHeight;
    L(!j);
  };
  return je(() => {
    window.addEventListener("scroll", d);
  }, []), /* @__PURE__ */ J.jsx(J.Fragment, { children: W && p && /* @__PURE__ */ J.jsx(
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
      onClick: p === "down" ? G : T,
      title: p === "down" ? x : O,
      children: b ? b(p) : /* @__PURE__ */ J.jsx(
        "i",
        {
          className: p === "down" ? _ : F
        }
      )
    }
  ) });
};
export {
  vr as default
};
