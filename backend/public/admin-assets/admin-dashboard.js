function a1(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var bm = { exports: {} }, Z = {};
var Pr;
function u1() {
  if (Pr) return Z;
  Pr = 1;
  var A = /* @__PURE__ */ Symbol.for("react.transitional.element"), yl = /* @__PURE__ */ Symbol.for("react.portal"), sl = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), st = /* @__PURE__ */ Symbol.for("react.profiler"), ut = /* @__PURE__ */ Symbol.for("react.consumer"), At = /* @__PURE__ */ Symbol.for("react.context"), Lt = /* @__PURE__ */ Symbol.for("react.forward_ref"), fl = /* @__PURE__ */ Symbol.for("react.suspense"), zl = /* @__PURE__ */ Symbol.for("react.memo"), U = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), Sl = Symbol.iterator;
  function hl(s) {
    return s === null || typeof s != "object" ? null : (s = Sl && s[Sl] || s["@@iterator"], typeof s == "function" ? s : null);
  }
  var Ul = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, ul = Object.assign, Rl = {};
  function J(s, _, p) {
    this.props = s, this.context = _, this.refs = Rl, this.updater = p || Ul;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(s, _) {
    if (typeof s != "object" && typeof s != "function" && s != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, s, _, "setState");
  }, J.prototype.forceUpdate = function(s) {
    this.updater.enqueueForceUpdate(this, s, "forceUpdate");
  };
  function Dt() {
  }
  Dt.prototype = J.prototype;
  function Xl(s, _, p) {
    this.props = s, this.context = _, this.refs = Rl, this.updater = p || Ul;
  }
  var rt = Xl.prototype = new Dt();
  rt.constructor = Xl, ul(rt, J.prototype), rt.isPureReactComponent = !0;
  var ql = Array.isArray;
  function L() {
  }
  var k = { H: null, A: null, T: null, S: null }, Fl = Object.prototype.hasOwnProperty;
  function kl(s, _, p) {
    var H = p.ref;
    return {
      $$typeof: A,
      type: s,
      key: _,
      ref: H !== void 0 ? H : null,
      props: p
    };
  }
  function Il(s, _) {
    return kl(s.type, _, s.props);
  }
  function $l(s) {
    return typeof s == "object" && s !== null && s.$$typeof === A;
  }
  function Gt(s) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + s.replace(/[=:]/g, function(p) {
      return _[p];
    });
  }
  var vt = /\/+/g;
  function _l(s, _) {
    return typeof s == "object" && s !== null && s.key != null ? Gt("" + s.key) : _.toString(36);
  }
  function O(s) {
    switch (s.status) {
      case "fulfilled":
        return s.value;
      case "rejected":
        throw s.reason;
      default:
        switch (typeof s.status == "string" ? s.then(L, L) : (s.status = "pending", s.then(
          function(_) {
            s.status === "pending" && (s.status = "fulfilled", s.value = _);
          },
          function(_) {
            s.status === "pending" && (s.status = "rejected", s.reason = _);
          }
        )), s.status) {
          case "fulfilled":
            return s.value;
          case "rejected":
            throw s.reason;
        }
    }
    throw s;
  }
  function G(s, _, p, H, N) {
    var R = typeof s;
    (R === "undefined" || R === "boolean") && (s = null);
    var Y = !1;
    if (s === null) Y = !0;
    else
      switch (R) {
        case "bigint":
        case "string":
        case "number":
          Y = !0;
          break;
        case "object":
          switch (s.$$typeof) {
            case A:
            case yl:
              Y = !0;
              break;
            case U:
              return Y = s._init, G(
                Y(s._payload),
                _,
                p,
                H,
                N
              );
          }
      }
    if (Y)
      return N = N(s), Y = H === "" ? "." + _l(s, 0) : H, ql(N) ? (p = "", Y != null && (p = Y.replace(vt, "$&/") + "/"), G(N, _, p, "", function(ne) {
        return ne;
      })) : N != null && ($l(N) && (N = Il(
        N,
        p + (N.key == null || s && s.key === N.key ? "" : ("" + N.key).replace(
          vt,
          "$&/"
        ) + "/") + Y
      )), _.push(N)), 1;
    Y = 0;
    var M = H === "" ? "." : H + ":";
    if (ql(s))
      for (var j = 0; j < s.length; j++)
        H = s[j], R = M + _l(H, j), Y += G(
          H,
          _,
          p,
          R,
          N
        );
    else if (j = hl(s), typeof j == "function")
      for (s = j.call(s), j = 0; !(H = s.next()).done; )
        H = H.value, R = M + _l(H, j++), Y += G(
          H,
          _,
          p,
          R,
          N
        );
    else if (R === "object") {
      if (typeof s.then == "function")
        return G(
          O(s),
          _,
          p,
          H,
          N
        );
      throw _ = String(s), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(s).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Y;
  }
  function Q(s, _, p) {
    if (s == null) return s;
    var H = [], N = 0;
    return G(s, H, "", "", function(R) {
      return _.call(p, R, N++);
    }), H;
  }
  function el(s) {
    if (s._status === -1) {
      var _ = s._result, p = _();
      p.then(
        function(H) {
          (s._status === 0 || s._status === -1) && (s._status = 1, s._result = H, p.status === void 0 && (p.status = "fulfilled", p.value = H));
        },
        function(H) {
          (s._status === 0 || s._status === -1) && (s._status = 2, s._result = H, p.status === void 0 && (p.status = "rejected", p.reason = H));
        }
      ), s._status === -1 && (s._status = 0, s._result = p);
    }
    if (s._status === 1) return s._result.default;
    throw s._result;
  }
  var P = typeof reportError == "function" ? reportError : function(s) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof s == "object" && s !== null && typeof s.message == "string" ? String(s.message) : String(s),
        error: s
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", s);
      return;
    }
    console.error(s);
  };
  function Pl(s) {
    var _ = k.T, p = {};
    p.types = _ !== null ? _.types : null, k.T = p;
    try {
      var H = s(), N = k.S;
      N !== null && N(p, H), typeof H == "object" && H !== null && typeof H.then == "function" && H.then(L, P);
    } catch (R) {
      P(R);
    } finally {
      _ !== null && p.types !== null && (_.types = p.types), k.T = _;
    }
  }
  function dt(s) {
    var _ = k.T;
    if (_ !== null) {
      var p = _.types;
      p === null ? _.types = [s] : p.indexOf(s) === -1 && p.push(s);
    } else Pl(dt.bind(null, s));
  }
  var ue = {
    map: Q,
    forEach: function(s, _, p) {
      Q(
        s,
        function() {
          _.apply(this, arguments);
        },
        p
      );
    },
    count: function(s) {
      var _ = 0;
      return Q(s, function() {
        _++;
      }), _;
    },
    toArray: function(s) {
      return Q(s, function(_) {
        return _;
      }) || [];
    },
    only: function(s) {
      if (!$l(s))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return s;
    }
  };
  return Z.Activity = S, Z.Children = ue, Z.Component = J, Z.Fragment = sl, Z.Profiler = st, Z.PureComponent = Xl, Z.StrictMode = E, Z.Suspense = fl, Z.ViewTransition = B, Z.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = k, Z.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(s) {
      return k.H.useMemoCache(s);
    }
  }, Z.addTransitionType = dt, Z.cache = function(s) {
    return function() {
      return s.apply(null, arguments);
    };
  }, Z.cacheSignal = function() {
    return null;
  }, Z.cloneElement = function(s, _, p) {
    if (s == null)
      throw Error(
        "The argument must be a React element, but you passed " + s + "."
      );
    var H = ul({}, s.props), N = s.key;
    if (_ != null)
      for (R in _.key !== void 0 && (N = "" + _.key), _)
        !Fl.call(_, R) || R === "key" || R === "__self" || R === "__source" || R === "ref" && _.ref === void 0 || (H[R] = _[R]);
    var R = arguments.length - 2;
    if (R === 1) H.children = p;
    else if (1 < R) {
      for (var Y = Array(R), M = 0; M < R; M++)
        Y[M] = arguments[M + 2];
      H.children = Y;
    }
    return kl(s.type, N, H);
  }, Z.createContext = function(s) {
    return s = {
      $$typeof: At,
      _currentValue: s,
      _currentValue2: s,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, s.Provider = s, s.Consumer = {
      $$typeof: ut,
      _context: s
    }, s;
  }, Z.createElement = function(s, _, p) {
    var H, N = {}, R = null;
    if (_ != null)
      for (H in _.key !== void 0 && (R = "" + _.key), _)
        Fl.call(_, H) && H !== "key" && H !== "__self" && H !== "__source" && (N[H] = _[H]);
    var Y = arguments.length - 2;
    if (Y === 1) N.children = p;
    else if (1 < Y) {
      for (var M = Array(Y), j = 0; j < Y; j++)
        M[j] = arguments[j + 2];
      N.children = M;
    }
    if (s && s.defaultProps)
      for (H in Y = s.defaultProps, Y)
        N[H] === void 0 && (N[H] = Y[H]);
    return kl(s, R, N);
  }, Z.createRef = function() {
    return { current: null };
  }, Z.forwardRef = function(s) {
    return { $$typeof: Lt, render: s };
  }, Z.isValidElement = $l, Z.lazy = function(s) {
    return {
      $$typeof: U,
      _payload: { _status: -1, _result: s },
      _init: el
    };
  }, Z.memo = function(s, _) {
    return {
      $$typeof: zl,
      type: s,
      compare: _ === void 0 ? null : _
    };
  }, Z.startTransition = Pl, Z.unstable_useCacheRefresh = function() {
    return k.H.useCacheRefresh();
  }, Z.use = function(s) {
    return k.H.use(s);
  }, Z.useActionState = function(s, _, p) {
    return k.H.useActionState(s, _, p);
  }, Z.useCallback = function(s, _) {
    return k.H.useCallback(s, _);
  }, Z.useContext = function(s) {
    return k.H.useContext(s);
  }, Z.useDebugValue = function() {
  }, Z.useDeferredValue = function(s, _) {
    return k.H.useDeferredValue(s, _);
  }, Z.useEffect = function(s, _) {
    return k.H.useEffect(s, _);
  }, Z.useEffectEvent = function(s) {
    return k.H.useEffectEvent(s);
  }, Z.useId = function() {
    return k.H.useId();
  }, Z.useImperativeHandle = function(s, _, p) {
    return k.H.useImperativeHandle(s, _, p);
  }, Z.useInsertionEffect = function(s, _) {
    return k.H.useInsertionEffect(s, _);
  }, Z.useLayoutEffect = function(s, _) {
    return k.H.useLayoutEffect(s, _);
  }, Z.useMemo = function(s, _) {
    return k.H.useMemo(s, _);
  }, Z.useOptimistic = function(s, _) {
    return k.H.useOptimistic(s, _);
  }, Z.useReducer = function(s, _, p) {
    return k.H.useReducer(s, _, p);
  }, Z.useRef = function(s) {
    return k.H.useRef(s);
  }, Z.useState = function(s) {
    return k.H.useState(s);
  }, Z.useSyncExternalStore = function(s, _, p) {
    return k.H.useSyncExternalStore(
      s,
      _,
      p
    );
  }, Z.useTransition = function() {
    return k.H.useTransition();
  }, Z.version = "19.3.0", Z;
}
var lv;
function Dm() {
  return lv || (lv = 1, bm.exports = u1()), bm.exports;
}
var Hl = Dm();
const f = /* @__PURE__ */ a1(Hl);
var _m = { exports: {} }, nn = {}, Nm = { exports: {} }, zm = {};
var tv;
function n1() {
  return tv || (tv = 1, (function(A) {
    function yl(O, G) {
      var Q = O.length;
      O.push(G);
      l: for (; 0 < Q; ) {
        var el = Q - 1 >>> 1, P = O[el];
        if (0 < st(P, G))
          O[el] = G, O[Q] = P, Q = el;
        else break l;
      }
    }
    function sl(O) {
      return O.length === 0 ? null : O[0];
    }
    function E(O) {
      if (O.length === 0) return null;
      var G = O[0], Q = O.pop();
      if (Q !== G) {
        O[0] = Q;
        l: for (var el = 0, P = O.length, Pl = P >>> 1; el < Pl; ) {
          var dt = 2 * (el + 1) - 1, ue = O[dt], s = dt + 1, _ = O[s];
          if (0 > st(ue, Q))
            s < P && 0 > st(_, ue) ? (O[el] = _, O[s] = Q, el = s) : (O[el] = ue, O[dt] = Q, el = dt);
          else if (s < P && 0 > st(_, Q))
            O[el] = _, O[s] = Q, el = s;
          else break l;
        }
      }
      return G;
    }
    function st(O, G) {
      var Q = O.sortIndex - G.sortIndex;
      return Q !== 0 ? Q : O.id - G.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var ut = performance;
      A.unstable_now = function() {
        return ut.now();
      };
    } else {
      var At = Date, Lt = At.now();
      A.unstable_now = function() {
        return At.now() - Lt;
      };
    }
    var fl = [], zl = [], U = 1, S = null, B = 3, Sl = !1, hl = !1, Ul = !1, ul = !1, Rl = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Dt = typeof setImmediate < "u" ? setImmediate : null;
    function Xl(O) {
      for (var G = sl(zl); G !== null; ) {
        if (G.callback === null) E(zl);
        else if (G.startTime <= O)
          E(zl), G.sortIndex = G.expirationTime, yl(fl, G);
        else break;
        G = sl(zl);
      }
    }
    function rt(O) {
      if (Ul = !1, Xl(O), !hl)
        if (sl(fl) !== null)
          hl = !0, ql || (ql = !0, $l());
        else {
          var G = sl(zl);
          G !== null && _l(rt, G.startTime - O);
        }
    }
    var ql = !1, L = -1, k = 5, Fl = -1;
    function kl() {
      return ul ? !0 : !(A.unstable_now() - Fl < k);
    }
    function Il() {
      if (ul = !1, ql) {
        var O = A.unstable_now();
        Fl = O;
        var G = !0;
        try {
          l: {
            hl = !1, Ul && (Ul = !1, J(L), L = -1), Sl = !0;
            var Q = B;
            try {
              t: {
                for (Xl(O), S = sl(fl); S !== null && !(S.expirationTime > O && kl()); ) {
                  var el = S.callback;
                  if (typeof el == "function") {
                    S.callback = null, B = S.priorityLevel;
                    var P = el(
                      S.expirationTime <= O
                    );
                    if (O = A.unstable_now(), typeof P == "function") {
                      S.callback = P, Xl(O), G = !0;
                      break t;
                    }
                    S === sl(fl) && E(fl), Xl(O);
                  } else E(fl);
                  S = sl(fl);
                }
                if (S !== null) G = !0;
                else {
                  var Pl = sl(zl);
                  Pl !== null && _l(
                    rt,
                    Pl.startTime - O
                  ), G = !1;
                }
              }
              break l;
            } finally {
              S = null, B = Q, Sl = !1;
            }
            G = void 0;
          }
        } finally {
          G ? $l() : ql = !1;
        }
      }
    }
    var $l;
    if (typeof Dt == "function")
      $l = function() {
        Dt(Il);
      };
    else if (typeof MessageChannel < "u") {
      var Gt = new MessageChannel(), vt = Gt.port2;
      Gt.port1.onmessage = Il, $l = function() {
        vt.postMessage(null);
      };
    } else
      $l = function() {
        Rl(Il, 0);
      };
    function _l(O, G) {
      L = Rl(function() {
        O(A.unstable_now());
      }, G);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(O) {
      O.callback = null;
    }, A.unstable_forceFrameRate = function(O) {
      0 > O || 125 < O ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : k = 0 < O ? Math.floor(1e3 / O) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, A.unstable_next = function(O) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var G = 3;
          break;
        default:
          G = B;
      }
      var Q = B;
      B = G;
      try {
        return O();
      } finally {
        B = Q;
      }
    }, A.unstable_requestPaint = function() {
      ul = !0;
    }, A.unstable_runWithPriority = function(O, G) {
      switch (O) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          O = 3;
      }
      var Q = B;
      B = O;
      try {
        return G();
      } finally {
        B = Q;
      }
    }, A.unstable_scheduleCallback = function(O, G, Q) {
      var el = A.unstable_now();
      switch (typeof Q == "object" && Q !== null ? (Q = Q.delay, Q = typeof Q == "number" && 0 < Q ? el + Q : el) : Q = el, O) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = Q + P, O = {
        id: U++,
        callback: G,
        priorityLevel: O,
        startTime: Q,
        expirationTime: P,
        sortIndex: -1
      }, Q > el ? (O.sortIndex = Q, yl(zl, O), sl(fl) === null && O === sl(zl) && (Ul ? (J(L), L = -1) : Ul = !0, _l(rt, Q - el))) : (O.sortIndex = P, yl(fl, O), hl || Sl || (hl = !0, ql || (ql = !0, $l()))), O;
    }, A.unstable_shouldYield = kl, A.unstable_wrapCallback = function(O) {
      var G = B;
      return function() {
        var Q = B;
        B = G;
        try {
          return O.apply(this, arguments);
        } finally {
          B = Q;
        }
      };
    };
  })(zm)), zm;
}
var ev;
function c1() {
  return ev || (ev = 1, Nm.exports = n1()), Nm.exports;
}
var Om = { exports: {} }, wl = {};
var av;
function i1() {
  if (av) return wl;
  av = 1;
  var A = Dm();
  function yl(U) {
    var S = "https://react.dev/errors/" + U;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        S += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + U + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function sl() {
  }
  var E = {
    d: {
      f: sl,
      r: function() {
        throw Error(yl(522));
      },
      D: sl,
      C: sl,
      L: sl,
      m: sl,
      X: sl,
      S: sl,
      M: sl
    },
    p: 0,
    findDOMNode: null
  }, st = /* @__PURE__ */ Symbol.for("react.portal"), ut = /* @__PURE__ */ Symbol.for("react.recoverable"), At = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function Lt(U, S, B) {
    var Sl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: st,
      key: Sl == null ? null : Sl === At ? At : "" + Sl,
      children: U,
      containerInfo: S,
      implementation: B
    };
  }
  var fl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function zl(U, S) {
    if (U === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return wl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, wl.browser = function(U) {
    return { $$typeof: ut, _reason: U };
  }, wl.createPortal = function(U, S) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(yl(299));
    return Lt(U, S, null, B);
  }, wl.flushSync = function(U) {
    var S = fl.T, B = E.p;
    try {
      if (fl.T = null, E.p = 2, U) return U();
    } finally {
      fl.T = S, E.p = B, E.d.f();
    }
  }, wl.preconnect = function(U, S) {
    typeof U == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, E.d.C(U, S));
  }, wl.prefetchDNS = function(U) {
    typeof U == "string" && E.d.D(U);
  }, wl.preinit = function(U, S) {
    if (typeof U == "string" && S && typeof S.as == "string") {
      var B = S.as, Sl = zl(B, S.crossOrigin), hl = typeof S.integrity == "string" ? S.integrity : void 0, Ul = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      B === "style" ? E.d.S(
        U,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: Sl,
          integrity: hl,
          fetchPriority: Ul
        }
      ) : B === "script" && E.d.X(U, {
        crossOrigin: Sl,
        integrity: hl,
        fetchPriority: Ul,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, wl.preinitModule = function(U, S) {
    if (typeof U == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var B = zl(
            S.as,
            S.crossOrigin
          );
          E.d.M(U, {
            crossOrigin: B,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0
          });
        }
      } else S == null && E.d.M(U);
  }, wl.preload = function(U, S) {
    if (typeof U == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var B = S.as, Sl = zl(B, S.crossOrigin);
      E.d.L(U, B, {
        crossOrigin: Sl,
        integrity: typeof S.integrity == "string" ? S.integrity : void 0,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0,
        type: typeof S.type == "string" ? S.type : void 0,
        fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0,
        referrerPolicy: typeof S.referrerPolicy == "string" ? S.referrerPolicy : void 0,
        imageSrcSet: typeof S.imageSrcSet == "string" ? S.imageSrcSet : void 0,
        imageSizes: typeof S.imageSizes == "string" ? S.imageSizes : void 0,
        media: typeof S.media == "string" ? S.media : void 0
      });
    }
  }, wl.preloadModule = function(U, S) {
    if (typeof U == "string")
      if (S) {
        var B = zl(S.as, S.crossOrigin);
        E.d.m(U, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: B,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0
        });
      } else E.d.m(U);
  }, wl.requestFormReset = function(U) {
    E.d.r(U);
  }, wl.unstable_batchedUpdates = function(U, S) {
    return U(S);
  }, wl.useFormState = function(U, S, B) {
    return fl.H.useFormState(U, S, B);
  }, wl.useFormStatus = function() {
    return fl.H.useHostTransitionStatus();
  }, wl.version = "19.3.0", wl;
}
var uv;
function f1() {
  if (uv) return Om.exports;
  uv = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (yl) {
        console.error(yl);
      }
  }
  return A(), Om.exports = i1(), Om.exports;
}
var nv;
function m1() {
  if (nv) return nn;
  nv = 1;
  var A = c1(), yl = Dm(), sl = f1();
  function E(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var e = 2; e < arguments.length; e++)
        t += "&args[]=" + encodeURIComponent(arguments[e]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function st(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function ut(l) {
    for (var t = l, e = t; e && !e.alternate; )
      t = e, (t.flags & 4098) !== 0 && (l = t.return), e = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function At(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Lt(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function fl(l) {
    if (ut(l) !== l)
      throw Error(E(188));
  }
  function zl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = ut(l), t === null) throw Error(E(188));
      return t !== l ? null : l;
    }
    for (var e = l, a = t; ; ) {
      var u = e.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (a = u.return, a !== null) {
          e = a;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === e) return fl(u), l;
          if (n === a) return fl(u), t;
          n = n.sibling;
        }
        throw Error(E(188));
      }
      if (e.return !== a.return) e = u, a = n;
      else {
        for (var c = !1, i = u.child; i; ) {
          if (i === e) {
            c = !0, e = u, a = n;
            break;
          }
          if (i === a) {
            c = !0, a = u, e = n;
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === e) {
              c = !0, e = n, a = u;
              break;
            }
            if (i === a) {
              c = !0, a = n, e = u;
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(E(189));
        }
      }
      if (e.alternate !== a) throw Error(E(190));
    }
    if (e.tag !== 3) throw Error(E(188));
    return e.stateNode.current === e ? l : t;
  }
  function U(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = U(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function S(l, t, e, a, u, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && e(l, a, u, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && S(
        l.child,
        t,
        e,
        a,
        u,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function B(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function Sl(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function hl(l) {
    var t = [null, null], e = B(l);
    return e === null || Ul(
      t,
      l,
      e.child,
      { foundSelf: !1 }
    ), t;
  }
  function Ul(l, t, e, a) {
    for (; e !== null; ) {
      if (e === t) a.foundSelf = !0;
      else if (e.tag === 5 || e.tag === 27 || e.tag === 6) {
        if (a.foundSelf) return l[1] = e, !0;
        l[0] = e;
      } else if ((e.tag !== 22 || e.memoizedState === null) && Ul(
        l,
        t,
        e.child,
        a
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function ul(l) {
    switch (l.tag) {
      case 5:
      case 27:
      case 6:
        return l.stateNode;
      case 3:
        return l.stateNode.containerInfo;
      default:
        throw Error(E(559));
    }
  }
  var Rl = null, J = null;
  function Dt(l, t, e) {
    return l === e ? !0 : l === t ? (Rl = l, !0) : !1;
  }
  function Xl(l, t, e) {
    return l === e ? (J = l, !1) : l === t ? (J !== null && (Rl = l), !0) : !1;
  }
  function rt(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function ql(l, t, e) {
    for (var a = 0, u = l; u; u = e(u)) a++;
    u = 0;
    for (var n = t; n; n = e(n)) u++;
    for (; 0 < a - u; ) l = e(l), a--;
    for (; 0 < u - a; ) t = e(t), u--;
    for (; a--; ) {
      if (l === t || t !== null && l === t.alternate)
        return l;
      l = e(l), t = e(t);
    }
    return null;
  }
  var L = Object.assign, k = /* @__PURE__ */ Symbol.for("react.element"), Fl = /* @__PURE__ */ Symbol.for("react.transitional.element"), kl = /* @__PURE__ */ Symbol.for("react.portal"), Il = /* @__PURE__ */ Symbol.for("react.fragment"), $l = /* @__PURE__ */ Symbol.for("react.strict_mode"), Gt = /* @__PURE__ */ Symbol.for("react.profiler"), vt = /* @__PURE__ */ Symbol.for("react.consumer"), _l = /* @__PURE__ */ Symbol.for("react.context"), O = /* @__PURE__ */ Symbol.for("react.forward_ref"), G = /* @__PURE__ */ Symbol.for("react.suspense"), Q = /* @__PURE__ */ Symbol.for("react.suspense_list"), el = /* @__PURE__ */ Symbol.for("react.memo"), P = /* @__PURE__ */ Symbol.for("react.lazy"), Pl = /* @__PURE__ */ Symbol.for("react.activity"), dt = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), ue = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), s = /* @__PURE__ */ Symbol.for("react.view_transition"), _ = /* @__PURE__ */ Symbol.for("react.recoverable"), p = Symbol.iterator;
  function H(l) {
    return l === null || typeof l != "object" ? null : (l = p && l[p] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var N = /* @__PURE__ */ Symbol.for("react.client.reference");
  function R(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === N ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Il:
        return "Fragment";
      case Gt:
        return "Profiler";
      case $l:
        return "StrictMode";
      case G:
        return "Suspense";
      case Q:
        return "SuspenseList";
      case Pl:
        return "Activity";
      case s:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case kl:
          return "Portal";
        case _l:
          return l.displayName || "Context";
        case vt:
          return (l._context.displayName || "Context") + ".Consumer";
        case O:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case el:
          return t = l.displayName || null, t !== null ? t : R(l.type) || "Memo";
        case P:
          t = l._payload, l = l._init;
          try {
            return R(l(t));
          } catch {
          }
      }
    return null;
  }
  var Y = Array.isArray, M = yl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, j = sl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Xc = [], Ta = -1;
  function Kt(l) {
    return { current: l };
  }
  function jl(l) {
    0 > Ta || (l.current = Xc[Ta], Xc[Ta] = null, Ta--);
  }
  function rl(l, t) {
    Ta++, Xc[Ta] = l.current, l.current = t;
  }
  var Jt = Kt(null), su = Kt(null), _e = Kt(null), cn = Kt(null);
  function fn(l, t) {
    switch (rl(_e, t), rl(su, l), rl(Jt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? fr(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = fr(t), l = mr(t, l);
        else
          switch (l) {
            case "svg":
              l = 1;
              break;
            case "math":
              l = 2;
              break;
            default:
              l = 0;
          }
    }
    jl(Jt), rl(Jt, l);
  }
  function ba() {
    jl(Jt), jl(su), jl(_e);
  }
  function jc(l) {
    var t = l.memoizedState;
    t !== null && (fu._currentValue = t.memoizedState, rl(cn, l)), t = Jt.current;
    var e = mr(t, l.type);
    t !== e && (rl(su, l), rl(Jt, e));
  }
  function mn(l) {
    su.current === l && (jl(Jt), jl(su)), cn.current === l && (jl(cn), fu._currentValue = ne);
  }
  var Zc, Mm;
  function Ne(l) {
    if (Zc === void 0)
      try {
        throw Error();
      } catch (e) {
        var t = e.stack.trim().match(/\n( *(at )?)/);
        Zc = t && t[1] || "", Mm = -1 < e.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < e.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Zc + l + Mm;
  }
  var Vc = !1;
  function xc(l, t) {
    if (!l || Vc) return "";
    Vc = !0;
    var e = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var b = function() {
                throw Error();
              };
              if (Object.defineProperty(b.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(b, []);
                } catch (z) {
                  var r = z;
                }
                Reflect.construct(l, [], b);
              } else {
                try {
                  b.call();
                } catch (z) {
                  r = z;
                }
                b = !1;
                try {
                  var h = Object.getOwnPropertyDescriptor(
                    l.prototype,
                    "props"
                  );
                  Object.defineProperty(l.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), b = !0, new l();
                } finally {
                  b && (h !== void 0 ? Object.defineProperty(l.prototype, "props", h) : delete l.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (z) {
                r = z;
              }
              (b = l()) && typeof b.catch == "function" && b.catch(function() {
              });
            }
          } catch (z) {
            if (z && r && typeof z.stack == "string")
              return [z.stack, r.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = a.DetermineComponentFrameRoot(), c = n[0], i = n[1];
      if (c && i) {
        var m = c.split(`
`), d = i.split(`
`);
        for (u = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; u < d.length && !d[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (a === m.length || u === d.length)
          for (a = m.length - 1, u = d.length - 1; 1 <= a && 0 <= u && m[a] !== d[u]; )
            u--;
        for (; 1 <= a && 0 <= u; a--, u--)
          if (m[a] !== d[u]) {
            if (a !== 1 || u !== 1)
              do
                if (a--, u--, 0 > u || m[a] !== d[u]) {
                  var g = `
` + m[a].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= a && 0 <= u);
            break;
          }
      }
    } finally {
      Vc = !1, Error.prepareStackTrace = e;
    }
    return (e = l ? l.displayName || l.name : "") ? Ne(e) : "";
  }
  function iv(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return Ne(l.type);
      case 16:
        return Ne("Lazy");
      case 13:
        return l.child !== t && t !== null ? Ne("Suspense Fallback") : Ne("Suspense");
      case 19:
        return Ne("SuspenseList");
      case 0:
      case 15:
        return xc(l.type, !1);
      case 11:
        return xc(l.type.render, !1);
      case 1:
        return xc(l.type, !0);
      case 31:
        return Ne("Activity");
      case 30:
        return Ne("ViewTransition");
      default:
        return "";
    }
  }
  function Cm(l) {
    try {
      var t = "", e = null;
      do
        t += iv(l, e), e = l, l = l.return;
      while (l);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var Lc = Object.prototype.hasOwnProperty, Kc = A.unstable_scheduleCallback, Jc = A.unstable_cancelCallback, fv = A.unstable_shouldYield, mv = A.unstable_requestPaint, yt = A.unstable_now, ov = A.unstable_getCurrentPriorityLevel, Um = A.unstable_ImmediatePriority, Rm = A.unstable_UserBlockingPriority, on = A.unstable_NormalPriority, sv = A.unstable_LowPriority, pm = A.unstable_IdlePriority, rv = A.log, vv = A.unstable_setDisableYieldValue, ru = null, ht = null;
  function ze(l) {
    if (typeof rv == "function" && vv(l), ht && typeof ht.setStrictMode == "function")
      try {
        ht.setStrictMode(ru, l);
      } catch {
      }
  }
  var gt = Math.clz32 ? Math.clz32 : hv, dv = Math.log, yv = Math.LN2;
  function hv(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (dv(l) / yv | 0) | 0;
  }
  var sn = 256, rn = 262144, vn = 4194304;
  function ke(l) {
    var t = l & 42;
    if (t !== 0) return t;
    switch (l & -l) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return l & -l;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return l & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return l & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return l;
    }
  }
  function dn(l, t, e) {
    var a = l.pendingLanes;
    if (a === 0) return 0;
    var u = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var i = a & 134217727;
    return i !== 0 ? (a = i & ~n, a !== 0 ? u = ke(a) : (c &= i, c !== 0 ? u = ke(c) : e || (e = i & ~l, e !== 0 && (u = ke(e))))) : (i = a & ~n, i !== 0 ? u = ke(i) : c !== 0 ? u = ke(c) : e || (e = a & ~l, e !== 0 && (u = ke(e)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, e = t & -t, n >= e || n === 32 && (e & 4194048) !== 0) ? t : u;
  }
  function vu(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Hm(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var e = l.entangledLanes;
    if (e !== 0)
      for (l = l.entanglements, e &= t; 0 < e; ) {
        var a = 31 - gt(e), u = 1 << a;
        t |= l[a], e &= ~u;
      }
    return t;
  }
  function gv(l, t) {
    switch (l) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function qm() {
    var l = vn;
    return vn <<= 1, (vn & 62914560) === 0 && (vn = 4194304), l;
  }
  function wc(l) {
    for (var t = [], e = 0; 31 > e; e++) t.push(l);
    return t;
  }
  function du(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function Ev(l, t, e, a, u, n) {
    var c = l.pendingLanes;
    l.pendingLanes = e, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= e, l.entangledLanes &= e, l.errorRecoveryDisabledLanes &= e, l.shellSuspendCounter = 0;
    var i = l.entanglements, m = l.expirationTimes, d = l.hiddenUpdates;
    for (e = c & ~e; 0 < e; ) {
      var g = 31 - gt(e), b = 1 << g;
      i[g] = 0, m[g] = -1;
      var r = d[g];
      if (r !== null)
        for (d[g] = null, g = 0; g < r.length; g++) {
          var h = r[g];
          h !== null && (h.lane &= -536870913);
        }
      e &= ~b;
    }
    a !== 0 && Ym(l, a, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function Ym(l, t, e) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var a = 31 - gt(t);
    l.entangledLanes |= t, l.entanglements[a] = l.entanglements[a] | 1073741824 | e & 261930;
  }
  function Bm(l, t) {
    var e = l.entangledLanes |= t;
    for (l = l.entanglements; e; ) {
      var a = 31 - gt(e), u = 1 << a;
      u & t | l[a] & t && (l[a] |= t), e &= ~u;
    }
  }
  function Gm(l, t) {
    var e = t & -t;
    return e = (e & 42) !== 0 ? 1 : Fc(e), (e & (l.suspendedLanes | t)) !== 0 ? 0 : e;
  }
  function Fc(l) {
    switch (l) {
      case 2:
        l = 1;
        break;
      case 8:
        l = 4;
        break;
      case 32:
        l = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        l = 128;
        break;
      case 268435456:
        l = 134217728;
        break;
      default:
        l = 0;
    }
    return l;
  }
  function $c(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Qm() {
    var l = j.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Jr(l.type));
  }
  function Xm(l, t) {
    var e = j.p;
    try {
      return j.p = l, t();
    } finally {
      j.p = e;
    }
  }
  var ce = Math.random().toString(36).slice(2), Zl = "__reactFiber$" + ce, nt = "__reactProps$" + ce, _a = "__reactContainer$" + ce, jm = "__reactEvents$" + ce, Sv = "__reactListeners$" + ce, Tv = "__reactHandles$" + ce, Zm = "__reactResources$" + ce, yu = "__reactMarker$" + ce, yn = "__reactLoad$" + ce;
  function hn(l) {
    delete l[Zl], delete l[nt], delete l[Sv], delete l[Tv];
  }
  function Ie(l) {
    var t;
    if (t = l[Zl]) return t;
    for (var e = l.parentNode; e; ) {
      if (t = e[_a] || e[Zl]) {
        if (e = t.alternate, t.child !== null || e !== null && e.child !== null)
          for (l = Ar(l); l !== null; ) {
            if (e = l[Zl]) return e;
            l = Ar(l);
          }
        return t;
      }
      l = e, e = l.parentNode;
    }
    return null;
  }
  function Na(l) {
    if (l = l[Zl] || l[_a]) {
      var t = l.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return l;
    }
    return null;
  }
  function hu(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l.stateNode;
    throw Error(E(33));
  }
  function za(l) {
    var t = l[Zm];
    return t || (t = l[Zm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Yl(l) {
    l[yu] = !0;
  }
  function Vm(l) {
    l[yn] = void 0;
  }
  var xm = /* @__PURE__ */ new Set(), Lm = {};
  function Pe(l, t) {
    Oa(l, t), Oa(l + "Capture", t);
  }
  function Oa(l, t) {
    for (Lm[l] = t, l = 0; l < t.length; l++)
      xm.add(t[l]);
  }
  var bv = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Km = {}, Jm = {};
  function _v(l) {
    return Lc.call(Jm, l) ? !0 : Lc.call(Km, l) ? !1 : bv.test(l) ? Jm[l] = !0 : (Km[l] = !0, !1);
  }
  var ll = !1;
  function wm() {
    var l = ll;
    return ll = !1, l;
  }
  function gn(l, t, e) {
    if (_v(t))
      if (e === null) l.removeAttribute(t);
      else {
        switch (typeof e) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, e);
      }
  }
  function En(l, t, e) {
    if (e === null) l.removeAttribute(t);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, e);
    }
  }
  function ie(l, t, e, a) {
    if (a === null) l.removeAttribute(e);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(e);
          return;
      }
      l.setAttributeNS(t, e, a);
    }
  }
  function Et(l) {
    switch (typeof l) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return l;
      case "object":
        return l;
      default:
        return "";
    }
  }
  function Fm(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Nv(l, t, e) {
    var a = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var u = a.get, n = a.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(c) {
          e = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(l, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return e;
        },
        setValue: function(c) {
          e = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Wc(l) {
    if (!l._valueTracker) {
      var t = Fm(l) ? "checked" : "value";
      l._valueTracker = Nv(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function $m(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var e = t.getValue(), a = "";
    return l && (a = Fm(l) ? l.checked ? "true" : "false" : l.value), l = a, l !== e ? (t.setValue(l), !0) : !1;
  }
  var zv = /[\n"\\]/g;
  function Mt(l) {
    return l.replace(
      zv,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kc(l, t, e, a, u, n, c, i) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Et(t)) : l.value !== "" + Et(t) && (l.value = "" + Et(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? c === "number" && l.value == t ? Ic(l, Et(l.value)) : Ic(l, Et(t)) : e != null ? Ic(l, Et(e)) : a != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + Et(i) : l.removeAttribute("name");
  }
  function Wm(l, t, e, a, u, n, c, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || e != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Wc(l);
        return;
      }
      e = e != null ? "" + Et(e) : "", t = t != null ? "" + Et(t) : e, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    a = a ?? u, a = typeof a != "function" && typeof a != "symbol" && !!a, l.checked = i ? l.checked : !!a, l.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), Wc(l);
  }
  function Ic(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function Aa(l, t, e, a) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < e.length; u++)
        t["$" + e[u]] = !0;
      for (e = 0; e < l.length; e++)
        u = t.hasOwnProperty("$" + l[e].value), l[e].selected !== u && (l[e].selected = u), u && a && (l[e].defaultSelected = !0);
    } else {
      for (e = "" + Et(e), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === e) {
          l[u].selected = !0, a && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function km(l, t, e) {
    if (t != null && (t = "" + Et(t), t !== l.value && (l.value = t), e == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = e != null ? "" + Et(e) : "";
  }
  function Im(l, t, e, a) {
    if (t == null) {
      if (a != null) {
        if (e != null) throw Error(E(92));
        if (Y(a)) {
          if (1 < a.length) throw Error(E(93));
          a = a[0];
        }
        e = a;
      }
      e == null && (e = ""), t = e;
    }
    e = Et(t), l.defaultValue = e, a = l.textContent, a === e && a !== "" && a !== null && (l.value = a), Wc(l);
  }
  function Da(l, t) {
    if (t) {
      var e = l.firstChild;
      if (e && e === l.lastChild && e.nodeType === 3) {
        e.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var Ov = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Pm(l, t, e) {
    var a = t.indexOf("--") === 0;
    e == null || typeof e == "boolean" || e === "" ? a ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : a ? l.setProperty(t, e) : typeof e != "number" || e === 0 || Ov.has(t) ? t === "float" ? l.cssFloat = e : l[t] = ("" + e).trim() : l[t] = e + "px";
  }
  function lo(l, t, e) {
    if (t != null && typeof t != "object")
      throw Error(E(62));
    if (l = l.style, e != null) {
      for (var a in e)
        !e.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? l.setProperty(a, "") : a === "float" ? l.cssFloat = "" : l[a] = "", ll = !0);
      for (var u in t)
        a = t[u], t.hasOwnProperty(u) && e[u] !== a && (Pm(l, u, a), ll = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && Pm(l, n, t[n]);
  }
  function Pc(l) {
    if (l.indexOf("-") === -1) return !1;
    switch (l) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Av = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Dv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sn(l) {
    return Dv.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function wt() {
  }
  var li = null;
  function ti(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Ma = null, Ca = null;
  function to(l) {
    var t = Na(l);
    if (t && (l = t.stateNode)) {
      var e = l[nt] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (kc(
            l,
            e.value,
            e.defaultValue,
            e.defaultValue,
            e.checked,
            e.defaultChecked,
            e.type,
            e.name
          ), t = e.name, e.type === "radio" && t != null) {
            for (e = l; e.parentNode; ) e = e.parentNode;
            for (e = e.querySelectorAll(
              'input[name="' + Mt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < e.length; t++) {
              var a = e[t];
              if (a !== l && a.form === l.form) {
                var u = a[nt] || null;
                if (!u) throw Error(E(90));
                kc(
                  a,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < e.length; t++)
              a = e[t], a.form === l.form && $m(a);
          }
          break l;
        case "textarea":
          km(l, e.value, e.defaultValue);
          break l;
        case "select":
          t = e.value, t != null && Aa(l, !!e.multiple, t, !1);
      }
    }
  }
  var ei = !1;
  function eo(l, t, e) {
    if (ei) return l(t, e);
    ei = !0;
    try {
      var a = l(t);
      return a;
    } finally {
      if (ei = !1, (Ma !== null || Ca !== null) && (Sc(), Ma && (t = Ma, l = Ca, Ca = Ma = null, to(t), l)))
        for (t = 0; t < l.length; t++) to(l[t]);
    }
  }
  function gu(l, t) {
    var e = l.stateNode;
    if (e === null) return null;
    var a = e[nt] || null;
    if (a === null) return null;
    e = a[t];
    l: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (a = !a.disabled) || (l = l.type, a = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !a;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (e && typeof e != "function")
      throw Error(
        E(231, t, typeof e)
      );
    return e;
  }
  var fe = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ai = !1;
  if (fe)
    try {
      var Eu = {};
      Object.defineProperty(Eu, "passive", {
        get: function() {
          ai = !0;
        }
      }), window.addEventListener("test", Eu, Eu), window.removeEventListener("test", Eu, Eu);
    } catch {
      ai = !1;
    }
  var Oe = null, ui = null, Tn = null;
  function ao() {
    if (Tn) return Tn;
    var l, t = ui, e = t.length, a, u = "value" in Oe ? Oe.value : Oe.textContent, n = u.length;
    for (l = 0; l < e && t[l] === u[l]; l++) ;
    var c = e - l;
    for (a = 1; a <= c && t[e - a] === u[n - a]; a++) ;
    return Tn = u.slice(l, 1 < a ? 1 - a : void 0);
  }
  function bn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function _n() {
    return !0;
  }
  function uo() {
    return !1;
  }
  function lt(l) {
    function t(e, a, u, n, c) {
      this._reactName = e, this._targetInst = u, this.type = a, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (e = l[i], this[i] = e ? e(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? _n : uo, this.isPropagationStopped = uo, this;
    }
    return L(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var e = this.nativeEvent;
        e && (e.preventDefault ? e.preventDefault() : typeof e.returnValue != "unknown" && (e.returnValue = !1), this.isDefaultPrevented = _n);
      },
      stopPropagation: function() {
        var e = this.nativeEvent;
        e && (e.stopPropagation ? e.stopPropagation() : typeof e.cancelBubble != "unknown" && (e.cancelBubble = !0), this.isPropagationStopped = _n);
      },
      persist: function() {
      },
      isPersistent: _n
    }), t;
  }
  var Ae = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Nn = lt(Ae), Su = L({}, Ae, { view: 0, detail: 0 }), Mv = lt(Su), ni, ci, Tu, zn = L({}, Su, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: fi,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Tu && (Tu && l.type === "mousemove" ? (ni = l.screenX - Tu.screenX, ci = l.screenY - Tu.screenY) : ci = ni = 0, Tu = l), ni);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ci;
    }
  }), no = lt(zn), Cv = L({}, zn, { dataTransfer: 0 }), Uv = lt(Cv), Rv = L({}, Su, { relatedTarget: 0 }), ii = lt(Rv), pv = L({}, Ae, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hv = lt(pv), qv = L({}, Ae, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Yv = lt(qv), Bv = L({}, Ae, { data: 0 }), co = lt(Bv), Gv = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Qv = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Xv = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function jv(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Xv[l]) ? !!t[l] : !1;
  }
  function fi() {
    return jv;
  }
  var Zv = L({}, Su, {
    key: function(l) {
      if (l.key) {
        var t = Gv[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = bn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Qv[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: fi,
    charCode: function(l) {
      return l.type === "keypress" ? bn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? bn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Vv = lt(Zv), xv = L({}, zn, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), io = lt(xv), Lv = L({}, Ae, { submitter: 0 }), Kv = lt(Lv), Jv = L({}, Su, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: fi
  }), wv = lt(Jv), Fv = L({}, Ae, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $v = lt(Fv), Wv = L({}, zn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), kv = lt(Wv), Iv = L({}, Ae, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Pv = lt(Iv), ld = [9, 13, 27, 32], mi = fe && "CompositionEvent" in window, bu = null;
  fe && "documentMode" in document && (bu = document.documentMode);
  var td = fe && "TextEvent" in window && !bu, fo = fe && (!mi || bu && 8 < bu && 11 >= bu), mo = " ", oo = !1;
  function so(l, t) {
    switch (l) {
      case "keyup":
        return ld.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function ro(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ua = !1;
  function ed(l, t) {
    switch (l) {
      case "compositionend":
        return ro(t);
      case "keypress":
        return t.which !== 32 ? null : (oo = !0, mo);
      case "textInput":
        return l = t.data, l === mo && oo ? null : l;
      default:
        return null;
    }
  }
  function ad(l, t) {
    if (Ua)
      return l === "compositionend" || !mi && so(l, t) ? (l = ao(), Tn = ui = Oe = null, Ua = !1, l) : null;
    switch (l) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return fo && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ud = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function vo(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!ud[l.type] : t === "textarea";
  }
  function yo(l, t, e, a) {
    Ma ? Ca ? Ca.push(a) : Ca = [a] : Ma = a, t = Oc(t, "onChange"), 0 < t.length && (e = new Nn(
      "onChange",
      "change",
      null,
      e,
      a
    ), l.push({ event: e, listeners: t }));
  }
  var _u = null, Nu = null;
  function nd(l) {
    er(l, 0);
  }
  function On(l) {
    var t = hu(l);
    if ($m(t)) return l;
  }
  function ho(l, t) {
    if (l === "change") return t;
  }
  var go = !1;
  if (fe) {
    var oi;
    if (fe) {
      var si = "oninput" in document;
      if (!si) {
        var Eo = document.createElement("div");
        Eo.setAttribute("oninput", "return;"), si = typeof Eo.oninput == "function";
      }
      oi = si;
    } else oi = !1;
    go = oi && (!document.documentMode || 9 < document.documentMode);
  }
  function So() {
    _u && (_u.detachEvent("onpropertychange", To), Nu = _u = null);
  }
  function To(l) {
    if (l.propertyName === "value" && On(Nu)) {
      var t = [];
      yo(
        t,
        Nu,
        l,
        ti(l)
      ), eo(nd, t);
    }
  }
  function cd(l, t, e) {
    l === "focusin" ? (So(), _u = t, Nu = e, _u.attachEvent("onpropertychange", To)) : l === "focusout" && So();
  }
  function id(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return On(Nu);
  }
  function fd(l, t) {
    if (l === "click") return On(t);
  }
  function md(l, t) {
    if (l === "input" || l === "change")
      return On(t);
  }
  function od(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var St = typeof Object.is == "function" ? Object.is : od;
  function zu(l, t) {
    if (St(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var e = Object.keys(l), a = Object.keys(t);
    if (e.length !== a.length) return !1;
    for (a = 0; a < e.length; a++) {
      var u = e[a];
      if (!Lc.call(t, u) || !St(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function ri(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function bo(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function _o(l, t) {
    var e = bo(l);
    l = 0;
    for (var a; e; ) {
      if (e.nodeType === 3) {
        if (a = l + e.textContent.length, l <= t && a >= t)
          return { node: e, offset: t - l };
        l = a;
      }
      l: {
        for (; e; ) {
          if (e.nextSibling) {
            e = e.nextSibling;
            break l;
          }
          e = e.parentNode;
        }
        e = void 0;
      }
      e = bo(e);
    }
  }
  function No(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? No(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function zo(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = ri(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var e = typeof t.contentWindow.location.href == "string";
      } catch {
        e = !1;
      }
      if (e) l = t.contentWindow;
      else break;
      t = ri(l.document);
    }
    return t;
  }
  function vi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var sd = fe && "documentMode" in document && 11 >= document.documentMode, Ra = null, di = null, Ou = null, yi = !1;
  function Oo(l, t, e) {
    var a = e.window === e ? e.document : e.nodeType === 9 ? e : e.ownerDocument;
    yi || Ra == null || Ra !== ri(a) || (a = Ra, "selectionStart" in a && vi(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), Ou && zu(Ou, a) || (Ou = a, a = Oc(di, "onSelect"), 0 < a.length && (t = new Nn(
      "onSelect",
      "select",
      null,
      t,
      e
    ), l.push({ event: t, listeners: a }), t.target = Ra)));
  }
  function la(l, t) {
    var e = {};
    return e[l.toLowerCase()] = t.toLowerCase(), e["Webkit" + l] = "webkit" + t, e["Moz" + l] = "moz" + t, e;
  }
  var pa = {
    animationend: la("Animation", "AnimationEnd"),
    animationiteration: la("Animation", "AnimationIteration"),
    animationstart: la("Animation", "AnimationStart"),
    transitionrun: la("Transition", "TransitionRun"),
    transitionstart: la("Transition", "TransitionStart"),
    transitioncancel: la("Transition", "TransitionCancel"),
    transitionend: la("Transition", "TransitionEnd")
  }, hi = {}, Ao = {};
  fe && (Ao = document.createElement("div").style, "AnimationEvent" in window || (delete pa.animationend.animation, delete pa.animationiteration.animation, delete pa.animationstart.animation), "TransitionEvent" in window || delete pa.transitionend.transition);
  function ta(l) {
    if (hi[l]) return hi[l];
    if (!pa[l]) return l;
    var t = pa[l], e;
    for (e in t)
      if (t.hasOwnProperty(e) && e in Ao)
        return hi[l] = t[e];
    return l;
  }
  var Do = ta("animationend"), Mo = ta("animationiteration"), Co = ta("animationstart"), rd = ta("transitionrun"), vd = ta("transitionstart"), dd = ta("transitioncancel"), Uo = ta("transitionend"), Ro = /* @__PURE__ */ new Map(), gi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  gi.push("scrollEnd");
  function Qt(l, t) {
    Ro.set(l, t), Pe(t, [l]);
  }
  var yd = 0;
  function me(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Vt.identifierPrefix;
    var e = yd++;
    return l = "_" + l + "t_" + e.toString(32) + "_", t.autoName = l;
  }
  function po(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, e = Ia;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = l[e[a]];
        if (u != null) {
          if (u === "none") return "none";
          t = t == null ? u : t + (" " + u);
        }
      }
    return t ?? l.default;
  }
  function oe(l, t) {
    return l = po(l), t = po(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
  }
  var An = typeof reportError == "function" ? reportError : function(l) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof l == "object" && l !== null && typeof l.message == "string" ? String(l.message) : String(l),
        error: l
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", l);
      return;
    }
    console.error(l);
  }, Ct = [], Ha = 0, Ei = 0;
  function Dn() {
    for (var l = Ha, t = Ei = Ha = 0; t < l; ) {
      var e = Ct[t];
      Ct[t++] = null;
      var a = Ct[t];
      Ct[t++] = null;
      var u = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      if (Ct[t++] = null, a !== null && u !== null) {
        var c = a.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), a.pending = u;
      }
      n !== 0 && Ho(e, u, n);
    }
  }
  function Mn(l, t, e, a) {
    Ct[Ha++] = l, Ct[Ha++] = t, Ct[Ha++] = e, Ct[Ha++] = a, Ei |= a, l.lanes |= a, l = l.alternate, l !== null && (l.lanes |= a);
  }
  function Si(l, t, e, a) {
    return Mn(l, t, e, a), Cn(l);
  }
  function ea(l, t) {
    return Mn(l, null, null, t), Cn(l);
  }
  function Ho(l, t, e) {
    l.lanes |= e;
    var a = l.alternate;
    a !== null && (a.lanes |= e);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= e, a = n.alternate, a !== null && (a.childLanes |= e), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - gt(e), l = n.hiddenUpdates, a = l[u], a === null ? l[u] = [t] : a.push(t), t.lane = e | 536870912), n) : null;
  }
  function Cn(l) {
    if (50 < wu)
      throw wu = 0, Ec = null, Error(E(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var qa = {};
  function hd(l, t, e, a) {
    this.tag = l, this.key = e, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ct(l, t, e, a) {
    return new hd(l, t, e, a);
  }
  function Ti(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function se(l, t) {
    var e = l.alternate;
    return e === null ? (e = ct(
      l.tag,
      t,
      l.key,
      l.mode
    ), e.elementType = l.elementType, e.type = l.type, e.stateNode = l.stateNode, e.alternate = l, l.alternate = e) : (e.pendingProps = t, e.type = l.type, e.flags = 0, e.subtreeFlags = 0, e.deletions = null), e.flags = l.flags & 1206910976, e.childLanes = l.childLanes, e.lanes = l.lanes, e.child = l.child, e.memoizedProps = l.memoizedProps, e.memoizedState = l.memoizedState, e.updateQueue = l.updateQueue, t = l.dependencies, e.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, e.sibling = l.sibling, e.index = l.index, e.ref = l.ref, e.refCleanup = l.refCleanup, e;
  }
  function qo(l, t) {
    l.flags &= 1206910978;
    var e = l.alternate;
    return e === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = e.childLanes, l.lanes = e.lanes, l.child = e.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = e.memoizedProps, l.memoizedState = e.memoizedState, l.updateQueue = e.updateQueue, l.type = e.type, t = e.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Un(l, t, e, a, u, n) {
    var c = 0;
    if (a = l, typeof a == "function") Ti(a) && (c = 1);
    else if (typeof a == "string")
      c = Ly(
        l,
        e,
        Jt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (a) {
        case Pl:
          return l = ct(31, e, t, u), l.elementType = Pl, l.lanes = n, l;
        case Il:
          return aa(e.children, u, n, t);
        case $l:
          c = 8, u |= 24;
          break;
        case Gt:
          return l = ct(12, e, t, u | 2), l.elementType = Gt, l.lanes = n, l;
        case G:
          return l = ct(13, e, t, u), l.elementType = G, l.lanes = n, l;
        case Q:
          return l = ct(19, e, t, u), l.elementType = Q, l.lanes = n, l;
        case dt:
        case s:
          return l = u | 32, l = ct(30, e, t, l), l.elementType = s, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case _l:
                c = 10;
                break l;
              case vt:
                c = 9;
                break l;
              case O:
                c = 11;
                break l;
              case el:
                c = 14;
                break l;
              case P:
                c = 16, a = null;
                break l;
            }
          c = 29, e = Error(
            E(130, l === null ? "null" : typeof l, "")
          ), a = null;
      }
    return t = ct(c, e, t, u), t.elementType = l, t.type = a, t.lanes = n, t;
  }
  function aa(l, t, e, a) {
    return l = ct(7, l, a, t), l.lanes = e, l;
  }
  function bi(l, t, e) {
    return l = ct(6, l, null, t), l.lanes = e, l;
  }
  function Yo(l) {
    var t = ct(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function _i(l, t, e) {
    return t = ct(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = e, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Bo = /* @__PURE__ */ new WeakMap();
  function Ut(l, t) {
    if (typeof l == "object" && l !== null) {
      var e = Bo.get(l);
      return e !== void 0 ? e : (t = {
        value: l,
        source: t,
        stack: Cm(t)
      }, Bo.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Cm(t)
    };
  }
  var Ya = [], Ba = 0, Rn = null, Au = 0, Rt = [], pt = 0, De = null, Ft = 1, $t = "";
  function re(l, t) {
    Ya[Ba++] = Au, Ya[Ba++] = Rn, Rn = l, Au = t;
  }
  function Go(l, t, e) {
    Rt[pt++] = Ft, Rt[pt++] = $t, Rt[pt++] = De, De = l;
    var a = Ft;
    l = $t;
    var u = 32 - gt(a) - 1;
    a &= ~(1 << u), e += 1;
    var n = 32 - gt(t) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (a & (1 << c) - 1).toString(32), a >>= c, u -= c, Ft = 1 << 32 - gt(t) + u | e << u | a, $t = n + l;
    } else
      Ft = 1 << n | e << u | a, $t = l;
  }
  function pn(l) {
    l.return !== null && (re(l, 1), Go(l, 1, 0));
  }
  function Ni(l) {
    for (; l === Rn; )
      Rn = Ya[--Ba], Ya[Ba] = null, Au = Ya[--Ba], Ya[Ba] = null;
    for (; l === De; )
      De = Rt[--pt], Rt[pt] = null, $t = Rt[--pt], Rt[pt] = null, Ft = Rt[--pt], Rt[pt] = null;
  }
  function Qo(l, t) {
    Rt[pt++] = Ft, Rt[pt++] = $t, Rt[pt++] = De, Ft = t.id, $t = t.overflow, De = l;
  }
  var Bl = null, vl = null, K = !1, Me = null, Ht = !1, zi = Error(E(519));
  function Ce(l) {
    var t = Error(
      E(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Du(Ut(t, l)), zi;
  }
  function Xo(l) {
    var t = l.stateNode, e = l.type, a = l.memoizedProps;
    switch (t[Zl] = l, t[nt] = a, e) {
      case "dialog":
        F("cancel", t), F("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        F("load", t);
        break;
      case "video":
      case "audio":
        for (e = 0; e < $u.length; e++)
          F($u[e], t);
        break;
      case "source":
        F("error", t);
        break;
      case "img":
      case "image":
      case "link":
        F("error", t), F("load", t);
        break;
      case "details":
        F("toggle", t);
        break;
      case "input":
        F("invalid", t), Wm(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        F("invalid", t);
        break;
      case "textarea":
        F("invalid", t), Im(t, a.value, a.defaultValue, a.children);
    }
    e = a.children, typeof e != "string" && typeof e != "number" && typeof e != "bigint" || t.textContent === "" + e || a.suppressHydrationWarning === !0 || cr(t.textContent, e) ? (a.popover != null && (F("beforetoggle", t), F("toggle", t)), a.onScroll != null && F("scroll", t), a.onScrollEnd != null && F("scrollend", t), a.onClick != null && (t.onclick = wt), t = !0) : t = !1, t || Ce(l, !0);
  }
  function Hn(l) {
    for (Bl = l.return; Bl; )
      switch (Bl.tag) {
        case 5:
        case 31:
        case 13:
          Ht = !1;
          return;
        case 27:
        case 3:
          Ht = !0;
          return;
        default:
          Bl = Bl.return;
      }
  }
  function Ga(l) {
    if (l !== Bl) return !1;
    if (!K) return Hn(l), K = !0, !1;
    var t = l.tag, e;
    if ((e = t !== 3 && t !== 27) && ((e = t === 5) && (e = l.type, e = !(e !== "form" && e !== "button") || tm(l.type, l.memoizedProps)), e = !e), e && vl && Ce(l), Hn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
      vl = Or(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
      vl = Or(l);
    } else
      t === 27 ? (t = vl, Ke(l.type) ? (l = om, om = null, vl = l) : vl = t) : vl = Bl ? Yt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ua() {
    vl = Bl = null, K = !1;
  }
  function Oi() {
    var l = Me;
    return l !== null && (mt === null ? mt = l : mt.push.apply(
      mt,
      l
    ), Me = null), l;
  }
  function Du(l) {
    Me === null ? Me = [l] : Me.push(l);
  }
  var Ai = Kt(null), na = null, ve = null;
  function Ue(l, t, e) {
    rl(Ai, t._currentValue), t._currentValue = e;
  }
  function de(l) {
    l._currentValue = Ai.current, jl(Ai);
  }
  function qn(l, t, e) {
    for (; l !== null; ) {
      var a = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), l === e) break;
      l = l.return;
    }
  }
  function Di(l, t, e, a) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var m = 0; m < t.length; m++)
            if (i.context === t[m]) {
              n.lanes |= e, i = n.alternate, i !== null && (i.lanes |= e), qn(
                n.return,
                e,
                l
              ), a || (c = null);
              break l;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(E(341));
        c.lanes |= e, n = c.alternate, n !== null && (n.lanes |= e), qn(c, e, l), c = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= e, c = u.alternate, c !== null && (c.lanes |= e), qn(
          u.return,
          e,
          l
        ), c = u.child, c = c !== null ? c.sibling : null) : c = u.child;
      if (c !== null) c.return = u;
      else
        for (c = u; c !== null; ) {
          if (c === l) {
            c = null;
            break;
          }
          if (u = c.sibling, u !== null) {
            u.return = c.return, c = u;
            break;
          }
          c = c.return;
        }
      u = c;
    }
  }
  function ca(l, t, e, a) {
    l = null;
    for (var u = t, n = !1; u !== null; ) {
      if (!n) {
        if ((u.flags & 524288) !== 0) n = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var c = u.alternate;
        if (c === null) throw Error(E(387));
        if (c = c.memoizedProps, c !== null) {
          var i = u.type;
          St(u.pendingProps.value, c.value) || (l !== null ? l.push(i) : l = [i]);
        }
      } else if (u === cn.current) {
        if (c = u.alternate, c === null) throw Error(E(387));
        c.memoizedState.memoizedState !== u.memoizedState.memoizedState && (l !== null ? l.push(fu) : l = [fu]);
      }
      u = u.return;
    }
    return l !== null && Di(
      t,
      l,
      e,
      a
    ), t.flags |= 262144, l !== null;
  }
  function Yn(l) {
    for (l = l.firstContext; l !== null; ) {
      if (!St(
        l.context._currentValue,
        l.memoizedValue
      ))
        return !0;
      l = l.next;
    }
    return !1;
  }
  function ia(l) {
    na = l, ve = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Vl(l) {
    return jo(na, l);
  }
  function Bn(l, t) {
    return na === null && ia(l), jo(l, t);
  }
  function jo(l, t) {
    var e = t._currentValue;
    if (t = { context: t, memoizedValue: e, next: null }, ve === null) {
      if (l === null) throw Error(E(308));
      ve = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else ve = ve.next = t;
    return e;
  }
  var gd = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(e, a) {
        l.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(e) {
        return e();
      });
    };
  }, Ed = A.unstable_scheduleCallback, Sd = A.unstable_NormalPriority, Ol = {
    $$typeof: _l,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Mi() {
    return {
      controller: new gd(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Mu(l) {
    l.refCount--, l.refCount === 0 && Ed(Sd, function() {
      l.controller.abort();
    });
  }
  function Zo(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var e = l.transitionTypes;
      for (e === null && (e = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var a = t[l];
        e.indexOf(a) === -1 && e.push(a);
      }
    }
  }
  var Cu = null;
  function Td(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Uu = null, Ci = 0, fa = 0, Qa = null;
  function bd(l, t) {
    if (Uu === null) {
      var e = Uu = [];
      Ci = 0, fa = Jf(), Qa = {
        status: "pending",
        value: void 0,
        then: function(a) {
          e.push(a);
        }
      };
    }
    return Ci++, t.then(Vo, Vo), t;
  }
  function Vo() {
    if (--Ci === 0 && (Cu = null, Uu !== null)) {
      Qa !== null && (Qa.status = "fulfilled");
      var l = Uu;
      Uu = null, fa = 0, Qa = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function _d(l, t) {
    var e = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        e.push(u);
      }
    };
    return l.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var u = 0; u < e.length; u++) (0, e[u])(t);
      },
      function(u) {
        for (a.status = "rejected", a.reason = u, u = 0; u < e.length; u++)
          (0, e[u])(void 0);
      }
    ), a;
  }
  var xo = M.S;
  M.S = function(l, t) {
    if (Y0 = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && bd(l, t), Cu !== null)
      for (var e = eu; e !== null; )
        Zo(e, Cu), e = e.next;
    if (e = l.types, e !== null) {
      for (var a = eu; a !== null; )
        Zo(a, e), a = a.next;
      if (fa !== 0) {
        a = Cu, a === null && (a = Cu = []);
        for (var u = 0; u < e.length; u++) {
          var n = e[u];
          a.indexOf(n) === -1 && a.push(n);
        }
      }
    }
    xo !== null && xo(l, t);
  };
  var ma = Kt(null);
  function Ui() {
    var l = ma.current;
    return l !== null ? l : ol.pooledCache;
  }
  function Gn(l, t) {
    t === null ? rl(ma, ma.current) : rl(ma, t.pool);
  }
  function Lo() {
    var l = Ui();
    return l === null ? null : { parent: Ol._currentValue, pool: l };
  }
  var Xa = Error(E(460)), Ri = Error(E(474)), Qn = Error(E(542)), Xn = { then: function() {
  } };
  function Ko(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function Jo(l, t, e) {
    switch (e = l[e], e === void 0 ? l.push(t) : e !== t && (t.then(wt, wt), t = e), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Fo(l), l === void 0 && !("reason" in t) ? Error(E(600)) : l;
      default:
        if (typeof t.status == "string") t.then(wt, wt);
        else {
          if (l = ol, l !== null && 100 < l.shellSuspendCounter)
            throw Error(E(482));
          l = t, l.status = "pending", l.then(
            function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Fo(l), l;
        }
        throw sa = t, Xa;
    }
  }
  function oa(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (e) {
      throw e !== null && typeof e == "object" && typeof e.then == "function" ? (sa = e, Xa) : e;
    }
  }
  var sa = null;
  function wo() {
    if (sa === null) throw Error(E(459));
    var l = sa;
    return sa = null, l;
  }
  function Fo(l) {
    if (l === Xa || l === Qn)
      throw Error(E(483));
  }
  var ja = null, Ru = 0;
  function jn(l) {
    var t = Ru;
    return Ru += 1, ja === null && (ja = []), Jo(ja, l, t);
  }
  function Re(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Zn(l, t) {
    throw t.$$typeof === k ? Error(E(525)) : (l = Object.prototype.toString.call(t), Error(
      E(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function $o(l) {
    function t(v, o) {
      if (l) {
        var y = v.deletions;
        y === null ? (v.deletions = [o], v.flags |= 16) : y.push(o);
      }
    }
    function e(v, o) {
      if (!l) return null;
      for (; o !== null; )
        t(v, o), o = o.sibling;
      return null;
    }
    function a(v) {
      for (var o = /* @__PURE__ */ new Map(); v !== null; )
        v.key === null ? o.set(v.index, v) : o.set(v.key, v), v = v.sibling;
      return o;
    }
    function u(v, o) {
      return v = se(v, o), v.index = 0, v.sibling = null, v;
    }
    function n(v, o, y) {
      return v.index = y, l ? (y = v.alternate, y !== null ? (y = y.index, y < o ? (v.flags |= 2, o) : y) : (v.flags |= 134217730, o)) : (v.flags |= 1048576, o);
    }
    function c(v) {
      return l && v.alternate === null && (v.flags |= 134217730), v;
    }
    function i(v, o, y, T) {
      return o === null || o.tag !== 6 ? (o = bi(y, v.mode, T), o.return = v, o) : (o = u(o, y), o.return = v, o);
    }
    function m(v, o, y, T) {
      var D = y.type;
      return D === Il ? (v = g(
        v,
        o,
        y.props.children,
        T,
        y.key
      ), Re(v, y), v) : o !== null && (o.elementType === D || typeof D == "object" && D !== null && D.$$typeof === P && oa(D) === o.type) ? (o = u(o, y.props), Re(o, y), o.return = v, o) : (o = Un(
        y.type,
        y.key,
        y.props,
        null,
        v.mode,
        T
      ), Re(o, y), o.return = v, o);
    }
    function d(v, o, y, T) {
      return o === null || o.tag !== 4 || o.stateNode.containerInfo !== y.containerInfo || o.stateNode.implementation !== y.implementation ? (o = _i(y, v.mode, T), o.return = v, o) : (o = u(o, y.children || []), o.return = v, o);
    }
    function g(v, o, y, T, D) {
      return o === null || o.tag !== 7 ? (o = aa(
        y,
        v.mode,
        T,
        D
      ), o.return = v, o) : (o = u(o, y), o.return = v, o);
    }
    function b(v, o, y) {
      if (typeof o == "string" && o !== "" || typeof o == "number" || typeof o == "bigint")
        return o = bi(
          "" + o,
          v.mode,
          y
        ), o.return = v, o;
      if (typeof o == "object" && o !== null) {
        switch (o.$$typeof) {
          case Fl:
            return y = Un(
              o.type,
              o.key,
              o.props,
              null,
              v.mode,
              y
            ), Re(y, o), y.return = v, y;
          case kl:
            return o = _i(
              o,
              v.mode,
              y
            ), o.return = v, o;
          case P:
            return o = oa(o), b(v, o, y);
        }
        if (Y(o) || H(o))
          return o = aa(
            o,
            v.mode,
            y,
            null
          ), o.return = v, o;
        if (typeof o.then == "function")
          return b(v, jn(o), y);
        if (o.$$typeof === _l)
          return b(
            v,
            Bn(v, o),
            y
          );
        Zn(v, o);
      }
      return null;
    }
    function r(v, o, y, T) {
      var D = o !== null ? o.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return D !== null ? null : i(v, o, "" + y, T);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Fl:
            return y.key === D ? m(v, o, y, T) : null;
          case kl:
            return y.key === D ? d(v, o, y, T) : null;
          case P:
            return y = oa(y), r(v, o, y, T);
        }
        if (Y(y) || H(y))
          return D !== null ? null : g(v, o, y, T, null);
        if (typeof y.then == "function")
          return r(
            v,
            o,
            jn(y),
            T
          );
        if (y.$$typeof === _l)
          return r(
            v,
            o,
            Bn(v, y),
            T
          );
        Zn(v, y);
      }
      return null;
    }
    function h(v, o, y, T, D) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return v = v.get(y) || null, i(o, v, "" + T, D);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Fl:
            return v = v.get(
              T.key === null ? y : T.key
            ) || null, m(o, v, T, D);
          case kl:
            return v = v.get(
              T.key === null ? y : T.key
            ) || null, d(o, v, T, D);
          case P:
            return T = oa(T), h(
              v,
              o,
              y,
              T,
              D
            );
        }
        if (Y(T) || H(T))
          return v = v.get(y) || null, g(o, v, T, D, null);
        if (typeof T.then == "function")
          return h(
            v,
            o,
            y,
            jn(T),
            D
          );
        if (T.$$typeof === _l)
          return h(
            v,
            o,
            y,
            Bn(o, T),
            D
          );
        Zn(o, T);
      }
      return null;
    }
    function z(v, o, y, T) {
      for (var D = null, W = null, q = o, X = o = 0, Ml = null; q !== null && X < y.length; X++) {
        q.index > X ? (Ml = q, q = null) : Ml = q.sibling;
        var I = r(
          v,
          q,
          y[X],
          T
        );
        if (I === null) {
          q === null && (q = Ml);
          break;
        }
        l && q && I.alternate === null && t(v, q), o = n(I, o, X), W === null ? D = I : W.sibling = I, W = I, q = Ml;
      }
      if (X === y.length)
        return e(v, q), K && re(v, X), D;
      if (q === null) {
        for (; X < y.length; X++)
          q = b(v, y[X], T), q !== null && (o = n(
            q,
            o,
            X
          ), W === null ? D = q : W.sibling = q, W = q);
        return K && re(v, X), D;
      }
      for (q = a(q); X < y.length; X++)
        Ml = h(
          q,
          v,
          X,
          y[X],
          T
        ), Ml !== null && (l && (I = Ml.alternate, I !== null && q.delete(I.key === null ? X : I.key)), o = n(
          Ml,
          o,
          X
        ), W === null ? D = Ml : W.sibling = Ml, W = Ml);
      return l && q.forEach(function(We) {
        return t(v, We);
      }), K && re(v, X), D;
    }
    function C(v, o, y, T) {
      if (y == null) throw Error(E(151));
      for (var D = null, W = null, q = o, X = o = 0, Ml = null, I = y.next(); q !== null && !I.done; X++, I = y.next()) {
        q.index > X ? (Ml = q, q = null) : Ml = q.sibling;
        var We = r(v, q, I.value, T);
        if (We === null) {
          q === null && (q = Ml);
          break;
        }
        l && q && We.alternate === null && t(v, q), o = n(We, o, X), W === null ? D = We : W.sibling = We, W = We, q = Ml;
      }
      if (I.done)
        return e(v, q), K && re(v, X), D;
      if (q === null) {
        for (; !I.done; X++, I = y.next())
          I = b(v, I.value, T), I !== null && (o = n(I, o, X), W === null ? D = I : W.sibling = I, W = I);
        return K && re(v, X), D;
      }
      for (q = a(q); !I.done; X++, I = y.next())
        I = h(q, v, X, I.value, T), I !== null && (l && (Ml = I.alternate, Ml !== null && q.delete(
          Ml.key === null ? X : Ml.key
        )), o = n(I, o, X), W === null ? D = I : W.sibling = I, W = I);
      return l && q.forEach(function(e1) {
        return t(v, e1);
      }), K && re(v, X), D;
    }
    function x(v, o, y, T) {
      if (typeof y == "object" && y !== null && y.type === Il && y.key === null && y.props.ref === void 0 && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Fl:
            l: {
              for (var D = y.key; o !== null; ) {
                if (o.key === D) {
                  if (D = y.type, D === Il) {
                    if (o.tag === 7) {
                      e(
                        v,
                        o.sibling
                      ), T = u(
                        o,
                        y.props.children
                      ), Re(T, y), T.return = v, v = T;
                      break l;
                    }
                  } else if (o.elementType === D || typeof D == "object" && D !== null && D.$$typeof === P && oa(D) === o.type) {
                    e(
                      v,
                      o.sibling
                    ), T = u(o, y.props), Re(T, y), T.return = v, v = T;
                    break l;
                  }
                  e(v, o);
                  break;
                } else t(v, o);
                o = o.sibling;
              }
              y.type === Il ? (T = aa(
                y.props.children,
                v.mode,
                T,
                y.key
              ), Re(T, y), T.return = v, v = T) : (T = Un(
                y.type,
                y.key,
                y.props,
                null,
                v.mode,
                T
              ), Re(T, y), T.return = v, v = T);
            }
            return c(v);
          case kl:
            l: {
              for (D = y.key; o !== null; ) {
                if (o.key === D)
                  if (o.tag === 4 && o.stateNode.containerInfo === y.containerInfo && o.stateNode.implementation === y.implementation) {
                    e(
                      v,
                      o.sibling
                    ), T = u(o, y.children || []), T.return = v, v = T;
                    break l;
                  } else {
                    e(v, o);
                    break;
                  }
                else t(v, o);
                o = o.sibling;
              }
              T = _i(y, v.mode, T), T.return = v, v = T;
            }
            return c(v);
          case P:
            return y = oa(y), x(
              v,
              o,
              y,
              T
            );
        }
        if (Y(y))
          return z(
            v,
            o,
            y,
            T
          );
        if (H(y)) {
          if (D = H(y), typeof D != "function") throw Error(E(150));
          return y = D.call(y), C(
            v,
            o,
            y,
            T
          );
        }
        if (typeof y.then == "function")
          return x(
            v,
            o,
            jn(y),
            T
          );
        if (y.$$typeof === _l)
          return x(
            v,
            o,
            Bn(v, y),
            T
          );
        Zn(v, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, o !== null && o.tag === 6 ? (e(v, o.sibling), T = u(o, y), T.return = v, v = T) : (e(v, o), T = bi(y, v.mode, T), T.return = v, v = T), c(v)) : e(v, o);
    }
    return function(v, o, y, T) {
      try {
        Ru = 0;
        var D = x(
          v,
          o,
          y,
          T
        );
        return ja = null, D;
      } catch (q) {
        if (q === Xa || q === Qn) throw q;
        var W = ct(29, q, null, v.mode);
        return W.lanes = T, W.return = v, W;
      }
    };
  }
  var ra = $o(!0), Wo = $o(!1), pe = !1;
  function pi(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Hi(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function He(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function qe(l, t, e) {
    var a = l.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (tl & 2) !== 0) {
      var u = a.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), a.pending = t, t = Cn(l), Ho(l, null, e), t;
    }
    return Mn(l, a, t, e), Cn(l);
  }
  function pu(l, t, e) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (e & 4194048) !== 0)) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Bm(l, e);
    }
  }
  function qi(l, t) {
    var e = l.updateQueue, a = l.alternate;
    if (a !== null && (a = a.updateQueue, e === a)) {
      var u = null, n = null;
      if (e = e.firstBaseUpdate, e !== null) {
        do {
          var c = {
            lane: e.lane,
            tag: e.tag,
            payload: e.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = c : n = n.next = c, e = e.next;
        } while (e !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      e = {
        baseState: a.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: a.shared,
        callbacks: a.callbacks
      }, l.updateQueue = e;
      return;
    }
    l = e.lastBaseUpdate, l === null ? e.firstBaseUpdate = t : l.next = t, e.lastBaseUpdate = t;
  }
  var Yi = !1;
  function Hu() {
    if (Yi) {
      var l = Qa;
      if (l !== null) throw l;
    }
  }
  function qu(l, t, e, a) {
    Yi = !1;
    var u = l.updateQueue;
    pe = !1;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var m = i, d = m.next;
      m.next = null, c === null ? n = d : c.next = d, c = m;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, i = g.lastBaseUpdate, i !== c && (i === null ? g.firstBaseUpdate = d : i.next = d, g.lastBaseUpdate = m));
    }
    if (n !== null) {
      var b = u.baseState;
      c = 0, g = d = m = null, i = n;
      do {
        var r = i.lane & -536870913, h = r !== i.lane;
        if (h ? ($ & r) === r : (a & r) === r) {
          r !== 0 && r === fa && (Yi = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var z = l, C = i;
            r = t;
            var x = e;
            switch (C.tag) {
              case 1:
                if (z = C.payload, typeof z == "function") {
                  b = z.call(x, b, r);
                  break l;
                }
                b = z;
                break l;
              case 3:
                z.flags = z.flags & -65537 | 128;
              case 0:
                if (z = C.payload, r = typeof z == "function" ? z.call(x, b, r) : z, r == null) break l;
                b = L({}, b, r);
                break l;
              case 2:
                pe = !0;
            }
          }
          r = i.callback, r !== null && (l.flags |= 64, h && (l.flags |= 8192), h = u.callbacks, h === null ? u.callbacks = [r] : h.push(r));
        } else
          h = {
            lane: r,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, g === null ? (d = g = h, m = b) : g = g.next = h, c |= r;
        if (i = i.next, i === null) {
          if (i = u.shared.pending, i === null)
            break;
          h = i, i = h.next, h.next = null, u.lastBaseUpdate = h, u.shared.pending = null;
        }
      } while (!0);
      g === null && (m = b), u.baseState = m, u.firstBaseUpdate = d, u.lastBaseUpdate = g, n === null && (u.shared.lanes = 0), Ze |= c, l.lanes = c, l.memoizedState = b;
    }
  }
  function ko(l, t) {
    if (typeof l != "function")
      throw Error(E(191, l));
    l.call(t);
  }
  function Io(l, t) {
    var e = l.callbacks;
    if (e !== null)
      for (l.callbacks = null, l = 0; l < e.length; l++)
        ko(e[l], t);
  }
  var Ye = Kt(null), Vn = Kt(0);
  function Po(l, t) {
    l = Se, rl(Vn, l), rl(Ye, t), Se = l | t.baseLanes;
  }
  function Bi() {
    rl(Vn, Se), rl(Ye, Ye.current);
  }
  function Gi() {
    Se = Vn.current, jl(Ye), jl(Vn);
  }
  var xl = Kt(null), Wl = null;
  function Be(l) {
    var t = l.alternate;
    rl(Ll, Ll.current & 1), rl(xl, l), Wl === null && (t === null || Ye.current !== null || t.memoizedState !== null) && (Wl = l);
  }
  function Qi(l) {
    rl(Ll, Ll.current), rl(xl, l), Wl === null && (Wl = l);
  }
  function ls(l) {
    l.tag === 22 ? (rl(Ll, Ll.current), rl(xl, l), Wl === null && (Wl = l)) : Ge();
  }
  function Ge() {
    rl(Ll, Ll.current), rl(xl, xl.current);
  }
  function Tt(l) {
    jl(xl), Wl === l && (Wl = null), jl(Ll);
  }
  var Ll = Kt(0);
  function Yu(l, t) {
    rl(xl, xl.current), rl(Ll, t);
  }
  function Xi(l) {
    jl(Ll), jl(xl), Wl === l && (Wl = null);
  }
  function xn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var e = t.memoizedState;
        if (e !== null && (e = e.dehydrated, e === null || fm(e) || mm(e)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === l) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === l) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ye = 0, V = null, ml = null, Al = null, Ln = !1, Za = !1, va = !1, Kn = 0, Bu = 0, Va = null, Nd = 0;
  function Tl() {
    throw Error(E(321));
  }
  function ji(l, t) {
    if (t === null) return !1;
    for (var e = 0; e < t.length && e < l.length; e++)
      if (!St(l[e], t[e])) return !1;
    return !0;
  }
  function Zi(l, t, e, a, u, n) {
    return ye = n, V = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, M.H = l === null || l.memoizedState === null ? Gs : Qs, va = !1, n = e(a, u), va = !1, Za && (n = es(
      t,
      e,
      a,
      u
    )), ts(l), n;
  }
  function ts(l) {
    M.H = In;
    var t = ml !== null && ml.next !== null;
    if (ye = 0, Al = ml = V = null, Ln = !1, Bu = 0, Va = null, t) throw Error(E(300));
    l === null || Dl || (l = l.dependencies, l !== null && Yn(l) && (Dl = !0));
  }
  function es(l, t, e, a) {
    V = l;
    var u = 0;
    do {
      if (Za && (Va = null), Bu = 0, Za = !1, 25 <= u) throw Error(E(301));
      if (u += 1, Al = ml = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      M.H = Rd, n = t(e, a);
    } while (Za);
    return n;
  }
  function zd() {
    var l = M.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Gu(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (V.flags |= 1024), t;
  }
  function Vi() {
    var l = Kn !== 0;
    return Kn = 0, l;
  }
  function xi(l, t, e) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~e;
  }
  function Li(l) {
    if (Ln) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ln = !1;
    }
    ye = 0, Al = ml = V = null, Za = !1, Bu = Kn = 0, Va = null;
  }
  function tt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Al === null ? V.memoizedState = Al = l : Al = Al.next = l, Al;
  }
  function Nl() {
    if (ml === null) {
      var l = V.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var t = Al === null ? V.memoizedState : Al.next;
    if (t !== null)
      Al = t, ml = l;
    else {
      if (l === null)
        throw V.alternate === null ? Error(E(467)) : Error(E(310));
      ml = l, l = {
        memoizedState: ml.memoizedState,
        baseState: ml.baseState,
        baseQueue: ml.baseQueue,
        queue: ml.queue,
        next: null
      }, Al === null ? V.memoizedState = Al = l : Al = Al.next = l;
    }
    return Al;
  }
  function Jn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gu(l) {
    var t = Bu;
    return Bu += 1, Va === null && (Va = []), l = Jo(Va, l, t), t = V, (Al === null ? t.memoizedState : Al.next) === null && (t = t.alternate, M.H = t === null || t.memoizedState === null ? Gs : Qs), l;
  }
  function wn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Gu(l);
      if (l.$$typeof === _) return;
      if (l.$$typeof === _l) return Vl(l);
    }
    throw Error(E(438, String(l)));
  }
  function Ki(l) {
    var t = null, e = V.updateQueue;
    if (e !== null && (t = e.memoCache), t == null) {
      var a = V.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), e === null && (e = Jn(), V.updateQueue = e), e.memoCache = t, e = t.data[t.index], e === void 0)
      for (e = t.data[t.index] = Array(l), a = 0; a < l; a++)
        e[a] = ue;
    return t.index++, e;
  }
  function he(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Fn(l) {
    var t = Nl();
    return Ji(t, ml, l);
  }
  function Ji(l, t, e) {
    var a = l.queue;
    if (a === null) throw Error(E(311));
    a.lastRenderedReducer = e;
    var u = l.baseQueue, n = a.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      t.baseQueue = u = n, a.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var i = c = null, m = null, d = t, g = !1;
      do {
        var b = d.lane & -536870913;
        if (b !== d.lane ? ($ & b) === b : (ye & b) === b) {
          var r = d.revertLane;
          if (r === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }), b === fa && (g = !0);
          else if ((ye & r) === r) {
            d = d.next, r === fa && (g = !0);
            continue;
          } else
            b = {
              lane: 0,
              revertLane: d.revertLane,
              gesture: null,
              action: d.action,
              hasEagerState: d.hasEagerState,
              eagerState: d.eagerState,
              next: null
            }, m === null ? (i = m = b, c = n) : m = m.next = b, V.lanes |= r, Ze |= r;
          b = d.action, va && e(n, b), n = d.hasEagerState ? d.eagerState : e(n, b);
        } else
          r = {
            lane: b,
            revertLane: d.revertLane,
            gesture: d.gesture,
            action: d.action,
            hasEagerState: d.hasEagerState,
            eagerState: d.eagerState,
            next: null
          }, m === null ? (i = m = r, c = n) : m = m.next = r, V.lanes |= b, Ze |= b;
        d = d.next;
      } while (d !== null && d !== t);
      if (m === null ? c = n : m.next = i, !St(n, l.memoizedState) && (Dl = !0, g && (e = Qa, e !== null)))
        throw e;
      l.memoizedState = n, l.baseState = c, l.baseQueue = m, a.lastRenderedState = n;
    }
    return u === null && (a.lanes = 0), [l.memoizedState, a.dispatch];
  }
  function wi(l) {
    var t = Nl(), e = t.queue;
    if (e === null) throw Error(E(311));
    e.lastRenderedReducer = l;
    var a = e.dispatch, u = e.pending, n = t.memoizedState;
    if (u !== null) {
      e.pending = null;
      var c = u = u.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== u);
      St(n, t.memoizedState) || (Dl = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), e.lastRenderedState = n;
    }
    return [n, a];
  }
  function as(l, t, e) {
    var a = V, u = Nl(), n = K;
    if (n) {
      if (e === void 0) throw Error(E(407));
      e = e();
    } else e = t();
    var c = !St(
      (ml || u).memoizedState,
      e
    );
    if (c && (u.memoizedState = e, Dl = !0), u = u.queue, Wi(cs.bind(null, a, u, l), [
      l
    ]), l = u.getSnapshot !== t || c || Al !== null && (Al.memoizedState.tag & 1) !== 0, xa(
      l ? 9 : 8,
      { destroy: void 0 },
      ns.bind(null, a, u, e, t),
      null
    ), l) {
      if (a.flags |= 2048, ol === null) throw Error(E(349));
      n || (ye & 127) !== 0 || us(a, t, e);
    }
    return e;
  }
  function us(l, t, e) {
    l.flags |= 16384, l = { getSnapshot: t, value: e }, t = V.updateQueue, t === null ? (t = Jn(), V.updateQueue = t, t.stores = [l]) : (e = t.stores, e === null ? t.stores = [l] : e.push(l));
  }
  function ns(l, t, e, a) {
    t.value = e, t.getSnapshot = a, is(t) && fs(l);
  }
  function cs(l, t, e) {
    return e(function() {
      is(t) && fs(l);
    });
  }
  function is(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var e = t();
      return !St(l, e);
    } catch {
      return !0;
    }
  }
  function fs(l) {
    var t = ea(l, 2);
    t !== null && ot(t, l, 2);
  }
  function Fi(l) {
    var t = tt();
    if (typeof l == "function") {
      var e = l;
      if (l = e(), va) {
        ze(!0);
        try {
          e();
        } finally {
          ze(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: he,
      lastRenderedState: l
    }, t;
  }
  function ms(l, t, e, a) {
    return l.baseState = e, Ji(
      l,
      ml,
      typeof a == "function" ? a : he
    );
  }
  function Od(l, t, e, a, u) {
    if (kn(l)) throw Error(E(485));
    if (l = t.action, l !== null) {
      var n = {
        payload: u,
        action: l,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          n.listeners.push(c);
        }
      };
      M.T !== null ? e(!0) : n.isTransition = !1, a(n), e = t.pending, e === null ? (n.next = t.pending = n, os(t, n)) : (n.next = e.next, t.pending = e.next = n);
    }
  }
  function os(l, t) {
    var e = t.action, a = t.payload, u = l.state;
    if (t.isTransition) {
      var n = M.T, c = {};
      c.types = n !== null ? n.types : null, M.T = c;
      try {
        var i = e(u, a), m = M.S;
        m !== null && m(c, i), ss(l, t, i);
      } catch (d) {
        $i(l, t, d);
      } finally {
        n !== null && c.types !== null && (n.types = c.types), M.T = n;
      }
    } else
      try {
        n = e(u, a), ss(l, t, n);
      } catch (d) {
        $i(l, t, d);
      }
  }
  function ss(l, t, e) {
    e !== null && typeof e == "object" && typeof e.then == "function" ? e.then(
      function(a) {
        rs(l, t, a);
      },
      function(a) {
        return $i(l, t, a);
      }
    ) : rs(l, t, e);
  }
  function rs(l, t, e) {
    t.status = "fulfilled", t.value = e, vs(t), l.state = e, t = l.pending, t !== null && (e = t.next, e === t ? l.pending = null : (e = e.next, t.next = e, os(l, e)));
  }
  function $i(l, t, e) {
    var a = l.pending;
    if (l.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = e, vs(t), t = t.next;
      while (t !== a);
    }
    l.action = null;
  }
  function vs(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function ds(l, t) {
    return t;
  }
  function ys(l, t) {
    if (K) {
      var e = ol.formState;
      if (e !== null) {
        l: {
          var a = V;
          if (K) {
            if (vl) {
              t: {
                for (var u = vl, n = Ht; u.nodeType !== 8; ) {
                  if (!n) {
                    u = null;
                    break t;
                  }
                  if (u = Yt(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                n = u.data, u = n === "F!" || n === "F" ? u : null;
              }
              if (u) {
                vl = Yt(
                  u.nextSibling
                ), a = u.data === "F!";
                break l;
              }
            }
            Ce(a);
          }
          a = !1;
        }
        a && (t = e[0]);
      }
    }
    return e = tt(), e.memoizedState = e.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ds,
      lastRenderedState: t
    }, e.queue = a, e = qs.bind(
      null,
      V,
      a
    ), a.dispatch = e, a = Fi(!1), n = tf.bind(
      null,
      V,
      !1,
      a.queue
    ), a = tt(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, a.queue = u, e = Od.bind(
      null,
      V,
      u,
      n,
      e
    ), u.dispatch = e, a.memoizedState = l, [t, e, !1];
  }
  function hs(l) {
    var t = Nl();
    return gs(t, ml, l);
  }
  function gs(l, t, e) {
    if (t = Ji(
      l,
      t,
      ds
    )[0], l = Fn(he)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Gu(t);
      } catch (c) {
        throw c === Xa ? Qn : c;
      }
    else a = t;
    t = Nl();
    var u = t.queue, n = u.dispatch;
    return e !== t.memoizedState && (V.flags |= 2048, xa(
      9,
      { destroy: void 0 },
      Ad.bind(null, u, e),
      null
    )), [a, n, l];
  }
  function Ad(l, t) {
    l.action = t;
  }
  function Es(l) {
    var t = Nl(), e = ml;
    if (e !== null)
      return gs(t, e, l);
    Nl(), t = t.memoizedState, e = Nl();
    var a = e.queue.dispatch;
    return e.memoizedState = l, [t, a, !1];
  }
  function xa(l, t, e, a) {
    return l = { tag: l, create: e, deps: a, inst: t, next: null }, t = V.updateQueue, t === null && (t = Jn(), V.updateQueue = t), e = t.lastEffect, e === null ? t.lastEffect = l.next = l : (a = e.next, e.next = l, l.next = a, t.lastEffect = l), l;
  }
  function Ss() {
    return Nl().memoizedState;
  }
  function $n(l, t, e, a) {
    var u = tt();
    V.flags |= l, u.memoizedState = xa(
      1 | t,
      { destroy: void 0 },
      e,
      a === void 0 ? null : a
    );
  }
  function Wn(l, t, e, a) {
    var u = Nl();
    a = a === void 0 ? null : a;
    var n = u.memoizedState.inst;
    ml !== null && a !== null && ji(a, ml.memoizedState.deps) ? u.memoizedState = xa(t, n, e, a) : (V.flags |= l, u.memoizedState = xa(
      1 | t,
      n,
      e,
      a
    ));
  }
  function Ts(l, t) {
    $n(8390656, 8, l, t);
  }
  function Wi(l, t) {
    Wn(2048, 8, l, t);
  }
  function Dd(l) {
    V.flags |= 4;
    var t = V.updateQueue;
    if (t === null)
      t = Jn(), V.updateQueue = t, t.events = [l];
    else {
      var e = t.events;
      e === null ? t.events = [l] : e.push(l);
    }
  }
  function bs(l) {
    var t = Nl().memoizedState;
    return Dd({ ref: t, nextImpl: l }), function() {
      if ((tl & 2) !== 0) throw Error(E(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function _s(l, t) {
    return Wn(4, 2, l, t);
  }
  function Ns(l, t) {
    return Wn(4, 4, l, t);
  }
  function zs(l, t) {
    if (typeof t == "function") {
      l = l();
      var e = t(l);
      return function() {
        typeof e == "function" ? e() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function Os(l, t, e) {
    e = e != null ? e.concat([l]) : null, Wn(4, 4, zs.bind(null, t, l), e);
  }
  function ki() {
  }
  function As(l, t) {
    var e = Nl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    return t !== null && ji(t, a[1]) ? a[0] : (e.memoizedState = [l, t], l);
  }
  function Ds(l, t) {
    var e = Nl();
    t = t === void 0 ? null : t;
    var a = e.memoizedState;
    if (t !== null && ji(t, a[1]))
      return a[0];
    if (a = l(), va) {
      ze(!0);
      try {
        l();
      } finally {
        ze(!1);
      }
    }
    return e.memoizedState = [a, t], a;
  }
  function Ii(l, t, e) {
    return e === void 0 || (ye & 1073741824) !== 0 && ($ & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = e, l = G0(), V.lanes |= l, Ze |= l, e);
  }
  function Ms(l, t, e, a) {
    return St(e, t) ? e : Ye.current !== null ? (l = Ii(l, e, a), St(l, t) || (Dl = !0), l) : (ye & 106) === 0 || (ye & 1073741824) !== 0 && ($ & 261930) === 0 ? (Dl = !0, l.memoizedState = e) : (l = G0(), V.lanes |= l, Ze |= l, t);
  }
  function Cs(l, t, e, a, u) {
    var n = j.p;
    j.p = n !== 0 && 8 > n ? n : 8;
    var c = M.T, i = {};
    i.types = c !== null ? c.types : null, M.T = i, tf(l, !1, t, e);
    try {
      var m = u(), d = M.S;
      if (d !== null && d(i, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var g = _d(
          m,
          a
        );
        Qu(
          l,
          t,
          g,
          zt(l)
        );
      } else
        Qu(
          l,
          t,
          a,
          zt(l)
        );
    } catch (b) {
      Qu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: b },
        zt()
      );
    } finally {
      j.p = n, c !== null && i.types !== null && (c.types = i.types), M.T = c;
    }
  }
  function Md() {
  }
  function Pi(l, t, e, a) {
    if (l.tag !== 5) throw Error(E(476));
    var u = Us(l).queue;
    Cs(
      l,
      u,
      t,
      ne,
      e === null ? Md : function() {
        return Rs(l), e(a);
      }
    );
  }
  function Us(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ne,
      baseState: ne,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: he,
        lastRenderedState: ne
      },
      next: null
    };
    var e = {};
    return t.next = {
      memoizedState: e,
      baseState: e,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: he,
        lastRenderedState: e
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Rs(l) {
    var t = Us(l);
    t.next === null && (t = l.alternate.memoizedState), Qu(
      l,
      t.next.queue,
      {},
      zt()
    );
  }
  function lf() {
    return Vl(fu);
  }
  function ps() {
    return Nl().memoizedState;
  }
  function Hs() {
    return Nl().memoizedState;
  }
  function Cd(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var e = zt();
          l = He(e);
          var a = qe(t, l, e);
          a !== null && (ot(a, t, e), pu(a, t, e)), t = { cache: Mi() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Ud(l, t, e) {
    var a = zt();
    e = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, kn(l) ? Ys(t, e) : (e = Si(l, t, e, a), e !== null && (ot(e, l, a), Bs(e, t, a)));
  }
  function qs(l, t, e) {
    var a = zt();
    Qu(l, t, e, a);
  }
  function Qu(l, t, e, a) {
    var u = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (kn(l)) Ys(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var c = t.lastRenderedState, i = n(c, e);
          if (u.hasEagerState = !0, u.eagerState = i, St(i, c))
            return Mn(l, t, u, 0), ol === null && Dn(), !1;
        } catch {
        }
      if (e = Si(l, t, u, a), e !== null)
        return ot(e, l, a), Bs(e, t, a), !0;
    }
    return !1;
  }
  function tf(l, t, e, a) {
    if (a = {
      lane: 2,
      revertLane: Jf(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, kn(l)) {
      if (t) throw Error(E(479));
    } else
      t = Si(
        l,
        e,
        a,
        2
      ), t !== null && ot(t, l, 2);
  }
  function kn(l) {
    var t = l.alternate;
    return l === V || t !== null && t === V;
  }
  function Ys(l, t) {
    Za = Ln = !0;
    var e = l.pending;
    e === null ? t.next = t : (t.next = e.next, e.next = t), l.pending = t;
  }
  function Bs(l, t, e) {
    if ((e & 4194048) !== 0) {
      var a = t.lanes;
      a &= l.pendingLanes, e |= a, t.lanes = e, Bm(l, e);
    }
  }
  var In = {
    readContext: Vl,
    use: wn,
    useCallback: Tl,
    useContext: Tl,
    useEffect: Tl,
    useImperativeHandle: Tl,
    useLayoutEffect: Tl,
    useInsertionEffect: Tl,
    useMemo: Tl,
    useReducer: Tl,
    useRef: Tl,
    useState: Tl,
    useDebugValue: Tl,
    useDeferredValue: Tl,
    useTransition: Tl,
    useSyncExternalStore: Tl,
    useId: Tl,
    useHostTransitionStatus: Tl,
    useFormState: Tl,
    useActionState: Tl,
    useOptimistic: Tl,
    useMemoCache: Tl,
    useCacheRefresh: Tl,
    useEffectEvent: Tl
  }, Gs = {
    readContext: Vl,
    use: wn,
    useCallback: function(l, t) {
      return tt().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Vl,
    useEffect: Ts,
    useImperativeHandle: function(l, t, e) {
      e = e != null ? e.concat([l]) : null, $n(
        4194308,
        4,
        zs.bind(null, t, l),
        e
      );
    },
    useLayoutEffect: function(l, t) {
      return $n(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      $n(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var e = tt();
      t = t === void 0 ? null : t;
      var a = l();
      if (va) {
        ze(!0);
        try {
          l();
        } finally {
          ze(!1);
        }
      }
      return e.memoizedState = [a, t], a;
    },
    useReducer: function(l, t, e) {
      var a = tt();
      if (e !== void 0) {
        var u = e(t);
        if (va) {
          ze(!0);
          try {
            e(t);
          } finally {
            ze(!1);
          }
        }
      } else u = t;
      return a.memoizedState = a.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, a.queue = l, l = l.dispatch = Ud.bind(
        null,
        V,
        l
      ), [a.memoizedState, l];
    },
    useRef: function(l) {
      var t = tt();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Fi(l);
      var t = l.queue, e = qs.bind(null, V, t);
      return t.dispatch = e, [l.memoizedState, e];
    },
    useDebugValue: ki,
    useDeferredValue: function(l, t) {
      var e = tt();
      return Ii(e, l, t);
    },
    useTransition: function() {
      var l = Fi(!1);
      return l = Cs.bind(
        null,
        V,
        l.queue,
        !0,
        !1
      ), tt().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, e) {
      var a = V, u = tt();
      if (K) {
        if (e === void 0)
          throw Error(E(407));
        e = e();
      } else {
        if (e = t(), ol === null)
          throw Error(E(349));
        ($ & 127) !== 0 || us(a, t, e);
      }
      u.memoizedState = e;
      var n = { value: e, getSnapshot: t };
      return u.queue = n, Ts(cs.bind(null, a, n, l), [
        l
      ]), a.flags |= 2048, xa(
        9,
        { destroy: void 0 },
        ns.bind(
          null,
          a,
          n,
          e,
          t
        ),
        null
      ), e;
    },
    useId: function() {
      var l = tt(), t = ol.identifierPrefix;
      if (K) {
        var e = $t, a = Ft;
        e = (a & ~(1 << 32 - gt(a) - 1)).toString(32) + e, t = "_" + t + "R_" + e, e = Kn++, 0 < e && (t += "H" + e.toString(32)), t += "_";
      } else
        e = Nd++, t = "_" + t + "r_" + e.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: lf,
    useFormState: ys,
    useActionState: ys,
    useOptimistic: function(l) {
      var t = tt();
      t.memoizedState = t.baseState = l;
      var e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = e, t = tf.bind(
        null,
        V,
        !0,
        e
      ), e.dispatch = t, [l, t];
    },
    useMemoCache: Ki,
    useCacheRefresh: function() {
      return tt().memoizedState = Cd.bind(
        null,
        V
      );
    },
    useEffectEvent: function(l) {
      var t = tt(), e = { impl: l };
      return t.memoizedState = e, function() {
        if ((tl & 2) !== 0)
          throw Error(E(440));
        return e.impl.apply(void 0, arguments);
      };
    }
  }, Qs = {
    readContext: Vl,
    use: wn,
    useCallback: As,
    useContext: Vl,
    useEffect: Wi,
    useImperativeHandle: Os,
    useInsertionEffect: _s,
    useLayoutEffect: Ns,
    useMemo: Ds,
    useReducer: Fn,
    useRef: Ss,
    useState: function() {
      return Fn(he);
    },
    useDebugValue: ki,
    useDeferredValue: function(l, t) {
      var e = Nl();
      return Ms(
        e,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Fn(he)[0], t = Nl().memoizedState;
      return [
        typeof l == "boolean" ? l : Gu(l),
        t
      ];
    },
    useSyncExternalStore: as,
    useId: ps,
    useHostTransitionStatus: lf,
    useFormState: hs,
    useActionState: hs,
    useOptimistic: function(l, t) {
      var e = Nl();
      return ms(e, ml, l, t);
    },
    useMemoCache: Ki,
    useCacheRefresh: Hs,
    useEffectEvent: bs
  }, Rd = {
    readContext: Vl,
    use: wn,
    useCallback: As,
    useContext: Vl,
    useEffect: Wi,
    useImperativeHandle: Os,
    useInsertionEffect: _s,
    useLayoutEffect: Ns,
    useMemo: Ds,
    useReducer: wi,
    useRef: Ss,
    useState: function() {
      return wi(he);
    },
    useDebugValue: ki,
    useDeferredValue: function(l, t) {
      var e = Nl();
      return ml === null ? Ii(e, l, t) : Ms(
        e,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = wi(he)[0], t = Nl().memoizedState;
      return [
        typeof l == "boolean" ? l : Gu(l),
        t
      ];
    },
    useSyncExternalStore: as,
    useId: ps,
    useHostTransitionStatus: lf,
    useFormState: Es,
    useActionState: Es,
    useOptimistic: function(l, t) {
      var e = Nl();
      return ml !== null ? ms(e, ml, l, t) : (e.baseState = l, [l, e.queue.dispatch]);
    },
    useMemoCache: Ki,
    useCacheRefresh: Hs,
    useEffectEvent: bs
  };
  function ef(l, t, e, a) {
    t = l.memoizedState, e = e(a, t), e = e == null ? t : L({}, t, e), l.memoizedState = e, l.lanes === 0 && (l.updateQueue.baseState = e);
  }
  var af = {
    enqueueSetState: function(l, t, e) {
      l = l._reactInternals;
      var a = zt(), u = He(a);
      u.payload = t, e != null && (u.callback = e), t = qe(l, u, a), t !== null && (ot(t, l, a), pu(t, l, a));
    },
    enqueueReplaceState: function(l, t, e) {
      l = l._reactInternals;
      var a = zt(), u = He(a);
      u.tag = 1, u.payload = t, e != null && (u.callback = e), t = qe(l, u, a), t !== null && (ot(t, l, a), pu(t, l, a));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var e = zt(), a = He(e);
      a.tag = 2, t != null && (a.callback = t), t = qe(l, a, e), t !== null && (ot(t, l, e), pu(t, l, e));
    }
  };
  function Xs(l, t, e, a, u, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(a, n, c) : t.prototype && t.prototype.isPureReactComponent ? !zu(e, a) || !zu(u, n) : !0;
  }
  function js(l, t, e, a) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(e, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(e, a), t.state !== l && af.enqueueReplaceState(t, t.state, null);
  }
  function da(l, t) {
    var e = t;
    if ("ref" in t) {
      e = {};
      for (var a in t)
        a !== "ref" && (e[a] = t[a]);
    }
    if (l = l.defaultProps) {
      e === t && (e = L({}, e));
      for (var u in l)
        e[u] === void 0 && (e[u] = l[u]);
    }
    return e;
  }
  function Zs(l) {
    An(l);
  }
  function Vs(l) {
    console.error(l);
  }
  function xs(l) {
    An(l);
  }
  function Pn(l, t) {
    try {
      var e = l.onUncaughtError;
      e(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Ls(l, t, e) {
    try {
      var a = l.onCaughtError;
      a(e.value, {
        componentStack: e.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function uf(l, t, e) {
    return e = He(e), e.tag = 3, e.payload = { element: null }, e.callback = function() {
      Pn(l, t);
    }, e;
  }
  function Ks(l) {
    return l = He(l), l.tag = 3, l;
  }
  function Js(l, t, e, a) {
    var u = e.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = a.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Ls(t, e, a);
      };
    }
    var c = e.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      Ls(t, e, a), typeof u != "function" && (Ve === null ? Ve = /* @__PURE__ */ new Set([this]) : Ve.add(this));
      var i = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function pd(l, t, e, a, u) {
    if (e.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = e.alternate, t !== null && ca(
        t,
        e,
        u,
        !0
      ), e = xl.current, e !== null) {
        switch (e.tag) {
          case 31:
          case 13:
          case 19:
            return Wl === null ? Tc() : e.alternate === null && bl === 0 && (bl = 3), e.flags &= -257, e.flags |= 65536, e.lanes = u, a === Xn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? e.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), xf(l, a, u)), !1;
          case 22:
            return e.flags |= 65536, a === Xn ? e.flags |= 16384 : (t = e.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, e.updateQueue = t) : (e = t.retryQueue, e === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : e.add(a)), xf(l, a, u)), !1;
        }
        throw Error(E(435, e.tag));
      }
      return xf(l, a, u), Tc(), !1;
    }
    if (K)
      return t = xl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, a !== zi && (l = Error(E(422), { cause: a }), Du(Ut(l, e)))) : (a !== zi && (t = Error(E(423), {
        cause: a
      }), Du(
        Ut(t, e)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, a = Ut(a, e), u = uf(
        l.stateNode,
        a,
        u
      ), qi(l, u), bl !== 4 && (bl = 2)), !1;
    var n = Error(E(520), { cause: a });
    if (n = Ut(n, e), Ju === null ? Ju = [n] : Ju.push(n), bl !== 4 && (bl = 2), t === null) return !0;
    a = Ut(a, e), e = t;
    do {
      switch (e.tag) {
        case 3:
          return e.flags |= 65536, l = u & -u, e.lanes |= l, l = uf(e.stateNode, a, l), qi(e, l), !1;
        case 1:
          if (t = e.type, n = e.stateNode, (e.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Ve === null || !Ve.has(n))))
            return e.flags |= 65536, u &= -u, e.lanes |= u, u = Ks(u), Js(
              u,
              l,
              e,
              a
            ), qi(e, u), !1;
          break;
        case 22:
          if (e.memoizedState !== null)
            return e.flags |= 65536, !1;
      }
      e = e.return;
    } while (e !== null);
    return !1;
  }
  var nf = Error(E(461)), Dl = !1;
  function pl(l, t, e, a) {
    t.child = l === null ? Wo(t, null, e, a) : ra(
      t,
      l.child,
      e,
      a
    );
  }
  function ws(l, t, e, a, u) {
    e = e.render;
    var n = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var i in a)
        i !== "ref" && (c[i] = a[i]);
    } else c = a;
    return ia(t), a = Zi(
      l,
      t,
      e,
      c,
      n,
      u
    ), i = Vi(), l !== null && !Dl ? (xi(l, t, u), ge(l, t, u)) : (K && i && pn(t), t.flags |= 1, pl(l, t, a, u), t.child);
  }
  function Fs(l, t, e, a, u) {
    if (l === null) {
      var n = e.type;
      return typeof n == "function" && !Ti(n) && n.defaultProps === void 0 && e.compare === null ? (t.tag = 15, t.type = n, $s(
        l,
        t,
        n,
        a,
        u
      )) : (l = Un(
        e.type,
        null,
        a,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !df(l, u)) {
      var c = n.memoizedProps;
      if (e = e.compare, e = e !== null ? e : zu, e(c, a) && l.ref === t.ref)
        return ge(l, t, u);
    }
    return t.flags |= 1, l = se(n, a), l.ref = t.ref, l.return = t, t.child = l;
  }
  function $s(l, t, e, a, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (zu(n, a) && l.ref === t.ref)
        if (Dl = !1, t.pendingProps = a = n, df(l, u))
          (l.flags & 131072) !== 0 && (Dl = !0);
        else
          return t.lanes = l.lanes, ge(l, t, u);
    }
    return cf(
      l,
      t,
      e,
      a,
      u
    );
  }
  function Ws(l, t, e, a) {
    var u = a.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | e : e, l !== null) {
          for (a = t.child = l.child, u = 0; a !== null; )
            u = u | a.lanes | a.childLanes, a = a.sibling;
          a = u & ~n;
        } else a = 0, t.child = null;
        return ks(
          l,
          t,
          n,
          e,
          a
        );
      }
      if ((e & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Gn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? Po(t, n) : Bi(), ls(t);
      else
        return a = t.lanes = 536870912, ks(
          l,
          t,
          n !== null ? n.baseLanes | e : e,
          e,
          a
        );
    } else
      n !== null ? (Gn(t, n.cachePool), Po(t, n), Ge(), t.memoizedState = null) : (l !== null && Gn(t, null), Bi(), Ge());
    return pl(l, t, u, e), t.child;
  }
  function Xu(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ks(l, t, e, a, u) {
    var n = Ui();
    return n = n === null ? null : { parent: Ol._currentValue, pool: n }, t.memoizedState = {
      baseLanes: e,
      cachePool: n
    }, l !== null && Gn(t, null), Bi(), ls(t), l !== null && ca(l, t, a, !0), t.childLanes = u, null;
  }
  function lc(l, t) {
    return t = tc(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function Is(l, t, e) {
    return ra(t, l.child, null, e), l = lc(t, t.pendingProps), l.flags |= 2, Tt(t), t.memoizedState = null, l;
  }
  function Hd(l, t, e) {
    var a = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (K) {
        if (a.mode === "hidden")
          return l = lc(t, a), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, Xu(null, l);
        if (Qi(t), (l = vl) ? (l = zr(
          l,
          Ht
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: De !== null ? { id: Ft, overflow: $t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Yo(l), e.return = t, t.child = e, Bl = t, vl = null)) : l = null, l === null) throw Ce(t);
        return t.lanes = 536870912, null;
      }
      return lc(t, a);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if (Qi(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = Is(
            l,
            t,
            e
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(E(558));
      else if (Dl || ca(l, t, e, !1), u = (e & l.childLanes) !== 0, Dl || u) {
        if (Ye.current === null) {
          if (a = ol, a !== null && (c = Gm(a, e), c !== 0 && c !== n.retryLane))
            throw n.retryLane = c, ea(l, c), ot(a, l, c), nf;
          Tc();
        }
        t = Is(
          l,
          t,
          e
        );
      } else
        l = n.treeContext, vl = Yt(c.nextSibling), Bl = t, K = !0, Me = null, Ht = !1, l !== null && Qo(t, l), t = lc(t, a), t.flags |= 134221824;
      return t;
    }
    return l = se(l.child, {
      mode: a.mode,
      children: a.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function La(l, t) {
    var e = t.ref;
    if (e === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof e != "function" && typeof e != "object")
        throw Error(E(284));
      (l === null || l.ref !== e) && (t.flags |= 4194816);
    }
  }
  function cf(l, t, e, a, u) {
    return ia(t), e = Zi(
      l,
      t,
      e,
      a,
      void 0,
      u
    ), a = Vi(), l !== null && !Dl ? (xi(l, t, u), ge(l, t, u)) : (K && a && pn(t), t.flags |= 1, pl(l, t, e, u), t.child);
  }
  function Ps(l, t, e, a, u, n) {
    return ia(t), t.updateQueue = null, e = es(
      t,
      a,
      e,
      u
    ), ts(l), a = Vi(), l !== null && !Dl ? (xi(l, t, n), ge(l, t, n)) : (K && a && pn(t), t.flags |= 1, pl(l, t, e, n), t.child);
  }
  function l0(l, t, e, a, u) {
    if (ia(t), t.stateNode === null) {
      var n = qa, c = e.contextType;
      typeof c == "object" && c !== null && (n = Vl(c)), n = new e(a, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = af, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = a, n.state = t.memoizedState, n.refs = {}, pi(t), c = e.contextType, n.context = typeof c == "object" && c !== null ? Vl(c) : qa, n.state = t.memoizedState, c = e.getDerivedStateFromProps, typeof c == "function" && (ef(
        t,
        e,
        c,
        a
      ), n.state = t.memoizedState), typeof e.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && af.enqueueReplaceState(n, n.state, null), qu(t, a, n, u), Hu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, m = da(e, i);
      n.props = m;
      var d = n.context, g = e.contextType;
      c = qa, typeof g == "object" && g !== null && (c = Vl(g));
      var b = e.getDerivedStateFromProps;
      g = typeof b == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || d !== c) && js(
        t,
        n,
        a,
        c
      ), pe = !1;
      var r = t.memoizedState;
      n.state = r, qu(t, a, n, u), Hu(), d = t.memoizedState, i || r !== d || pe ? (typeof b == "function" && (ef(
        t,
        e,
        b,
        a
      ), d = t.memoizedState), (m = pe || Xs(
        t,
        e,
        m,
        a,
        r,
        d,
        c
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = d), n.props = a, n.state = d, n.context = c, a = m) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      n = t.stateNode, Hi(l, t), c = t.memoizedProps, g = da(e, c), n.props = g, b = t.pendingProps, r = n.context, d = e.contextType, m = qa, typeof d == "object" && d !== null && (m = Vl(d)), i = e.getDerivedStateFromProps, (d = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== b || r !== m) && js(
        t,
        n,
        a,
        m
      ), pe = !1, r = t.memoizedState, n.state = r, qu(t, a, n, u), Hu();
      var h = t.memoizedState;
      c !== b || r !== h || pe || l !== null && l.dependencies !== null && Yn(l.dependencies) ? (typeof i == "function" && (ef(
        t,
        e,
        i,
        a
      ), h = t.memoizedState), (g = pe || Xs(
        t,
        e,
        g,
        a,
        r,
        h,
        m
      ) || l !== null && l.dependencies !== null && Yn(l.dependencies)) ? (d || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(a, h, m), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        a,
        h,
        m
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && r === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && r === l.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = h), n.props = a, n.state = h, n.context = m, a = g) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && r === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && r === l.memoizedState || (t.flags |= 1024), a = !1);
    }
    return n = a, La(l, t), a = (t.flags & 128) !== 0, n || a ? (n = t.stateNode, e = a && typeof e.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && a ? (t.child = ra(
      t,
      l.child,
      null,
      u
    ), t.child = ra(
      t,
      null,
      e,
      u
    )) : pl(l, t, e, u), t.memoizedState = n.state, l = t.child) : l = ge(
      l,
      t,
      u
    ), l;
  }
  function t0(l, t, e, a) {
    return ua(), t.flags |= 256, pl(l, t, e, a), t.child;
  }
  var ff = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function mf(l) {
    return { baseLanes: l, cachePool: Lo() };
  }
  function of(l, t, e) {
    return l = l !== null ? l.childLanes & ~e : 0, t && (l |= Nt), l;
  }
  function e0(l, t, e) {
    var a = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (Ll.current & 2) !== 0), c && (u = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (K) {
        if (u ? Be(t) : Ge(), (l = vl) ? (l = zr(
          l,
          Ht
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: De !== null ? { id: Ft, overflow: $t } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, e = Yo(l), e.return = t, t.child = e, Bl = t, vl = null)) : l = null, l === null) throw Ce(t);
        return mm(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = a.children, a = a.fallback, u ? (Ge(), u = t.mode, n = tc(
        { mode: "hidden", children: n },
        u
      ), a = aa(
        a,
        u,
        e,
        null
      ), n.return = t, a.return = t, n.sibling = a, t.child = n, a = t.child, a.memoizedState = mf(e), a.childLanes = of(
        l,
        c,
        e
      ), t.memoizedState = ff, Xu(null, a)) : (Be(t), sf(t, n));
    }
    var i = l.memoizedState;
    if (i !== null) {
      var m = i.dehydrated;
      if (m !== null)
        return qd(
          l,
          t,
          n,
          c,
          a,
          m,
          i,
          e
        );
    }
    return u ? (Ge(), u = a.fallback, n = t.mode, i = l.child, m = i.sibling, a = se(i, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = i.subtreeFlags & 1206910976, m !== null ? u = se(m, u) : (u = aa(
      u,
      n,
      e,
      null
    ), u.flags |= 2), u.return = t, a.return = t, a.sibling = u, t.child = a, Xu(null, a), a = t.child, u = l.child.memoizedState, u === null ? u = mf(e) : (n = u.cachePool, n !== null ? (i = Ol._currentValue, n = n.parent !== i ? { parent: i, pool: i } : n) : n = Lo(), u = {
      baseLanes: u.baseLanes | e,
      cachePool: n
    }), a.memoizedState = u, a.childLanes = of(
      l,
      c,
      e
    ), t.memoizedState = ff, Xu(l.child, a)) : (Be(t), e = l.child, l = e.sibling, e = se(e, {
      mode: "visible",
      children: a.children
    }), e.return = t, e.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = e, t.memoizedState = null, e);
  }
  function sf(l, t) {
    return t = tc(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function tc(l, t) {
    return l = ct(22, l, null, t), l.lanes = 0, l;
  }
  function ec(l, t, e) {
    return ra(t, l.child, null, e), l = sf(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function qd(l, t, e, a, u, n, c, i) {
    if (e)
      return t.flags & 256 ? (Be(t), t.flags &= -257, ec(
        l,
        t,
        i
      )) : t.memoizedState !== null ? (Ge(), t.child = l.child, t.flags |= 128, null) : (Ge(), n = u.fallback, c = t.mode, u = tc(
        { mode: "visible", children: u.children },
        c
      ), n = aa(
        n,
        c,
        i,
        null
      ), n.flags |= 2, u.return = t, n.return = t, u.sibling = n, t.child = u, ra(t, l.child, null, i), u = t.child, u.memoizedState = mf(i), u.childLanes = of(
        l,
        a,
        i
      ), t.memoizedState = ff, Xu(null, u));
    if (Be(t), mm(n)) {
      if (a = n.nextSibling && n.nextSibling.dataset, a) var m = a.dgst;
      return a = m, a !== "" && (u = Error(E(419)), u.stack = "", u.digest = a, Du({ value: u, source: null, stack: null })), ec(
        l,
        t,
        i
      );
    }
    if (Dl || ca(l, t, i, !1), a = (i & l.childLanes) !== 0, Dl || a) {
      if (Ye.current !== null)
        return ec(
          l,
          t,
          i
        );
      if (a = ol, a !== null && (u = Gm(
        a,
        i
      ), u !== 0 && u !== c.retryLane))
        throw c.retryLane = u, ea(l, u), ot(a, l, u), nf;
      return fm(n) || Tc(), ec(
        l,
        t,
        i
      );
    }
    return fm(n) ? (t.flags |= 192, t.child = l.child, null) : (l = c.treeContext, vl = Yt(n.nextSibling), Bl = t, K = !0, Me = null, Ht = !1, l !== null && Qo(t, l), t = sf(
      t,
      u.children
    ), t.flags |= 134221824, t);
  }
  function a0(l, t, e) {
    l.lanes |= t;
    var a = l.alternate;
    a !== null && (a.lanes |= t), qn(l.return, t, e);
  }
  function u0(l) {
    for (var t = null; l !== null; ) {
      var e = l.alternate;
      e !== null && xn(e) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function ac(l, t, e, a, u, n) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: e,
      tailMode: u,
      treeForkCount: n
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = e, c.tailMode = u, c.treeForkCount = n);
  }
  function rf(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var e = t.sibling;
      t.sibling = l.child, l.child = t, t = e;
    }
  }
  function vf(l, t, e) {
    var a = t.pendingProps, u = a.revealOrder, n = a.tail;
    a = a.children;
    var c = Ll.current;
    if (t.flags & 128)
      return Yu(t, c), null;
    var i = (c & 2) !== 0;
    if (i ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Yu(t, c), u === "backwards" && l !== null ? (rf(l), pl(l, t, a, e), rf(l)) : pl(l, t, a, e), a = K ? Au : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && a0(l, e, t);
        else if (l.tag === 19)
          a0(l, e, t);
        else if (l.child !== null) {
          l.child.return = l, l = l.child;
          continue;
        }
        if (l === t) break l;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            break l;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    switch (u) {
      case "backwards":
        e = u0(t.child), e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null, rf(t)), ac(
          t,
          !0,
          u,
          null,
          n,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (e = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && xn(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = e, e = u, u = l;
        }
        ac(
          t,
          !0,
          e,
          null,
          n,
          a
        );
        break;
      case "together":
        ac(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        e = u0(t.child), e === null ? (u = t.child, t.child = null) : (u = e.sibling, e.sibling = null), ac(
          t,
          !1,
          u,
          e,
          n,
          a
        );
    }
    return t.child;
  }
  function n0(l, t, e) {
    var a = t.pendingProps;
    return Ue(t, t.type, a.value), pl(l, t, a.children, e), t.child;
  }
  function ge(l, t, e) {
    if (l !== null && (t.dependencies = l.dependencies), Ze |= t.lanes, (e & t.childLanes) === 0)
      if (l !== null) {
        if (ca(
          l,
          t,
          e,
          !1
        ), (e & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(E(153));
    if (t.child !== null) {
      for (l = t.child, e = se(l, l.pendingProps), t.child = e, e.return = t; l.sibling !== null; )
        l = l.sibling, e = e.sibling = se(l, l.pendingProps), e.return = t;
      e.sibling = null;
    }
    return t.child;
  }
  function df(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Yn(l)));
  }
  function Yd(l, t, e) {
    switch (t.tag) {
      case 3:
        fn(t, t.stateNode.containerInfo), Ue(t, Ol, l.memoizedState.cache), ua();
        break;
      case 27:
      case 5:
        jc(t);
        break;
      case 4:
        fn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ue(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Qi(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return Be(t), t.flags |= 128, null;
          a = ca(
            l,
            t,
            e,
            !1
          );
          var u = t.child.childLanes;
          return a || (e & u) !== 0 ? e0(l, t, e) : (Be(t), l = ge(
            l,
            t,
            e
          ), l !== null ? l.sibling : null);
        }
        Be(t);
        break;
      case 19:
        if (t.flags & 128)
          return vf(
            l,
            t,
            e
          );
        if (u = (l.flags & 128) !== 0, a = (e & t.childLanes) !== 0, a || (ca(
          l,
          t,
          e,
          !1
        ), a = (e & t.childLanes) !== 0), u) {
          if (a)
            return vf(
              l,
              t,
              e
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Yu(t, Ll.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, Ws(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        Ue(t, Ol, l.memoizedState.cache);
    }
    return ge(l, t, e);
  }
  function c0(l, t, e) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Dl = !0;
      else {
        if (!df(l, e) && (t.flags & 128) === 0)
          return Dl = !1, Yd(
            l,
            t,
            e
          );
        Dl = (l.flags & 131072) !== 0;
      }
    else
      Dl = !1, K && (t.flags & 1048576) !== 0 && Go(t, Au, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var a = t.pendingProps;
          if (l = oa(t.elementType), t.type = l, typeof l == "function")
            Ti(l) ? (a = da(l, a), t.tag = 1, t = l0(
              null,
              t,
              l,
              a,
              e
            )) : (t.tag = 0, t = cf(
              null,
              t,
              l,
              a,
              e
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === O) {
                t.tag = 11, t = ws(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === el) {
                t.tag = 14, t = Fs(
                  null,
                  t,
                  l,
                  a,
                  e
                );
                break l;
              } else if (u === _l) {
                t.tag = 10, t.type = l, t = n0(
                  null,
                  t,
                  e
                );
                break l;
              }
            }
            throw t = R(l) || l, Error(E(306, t, ""));
          }
        }
        return t;
      case 0:
        return cf(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 1:
        return a = t.type, u = da(
          a,
          t.pendingProps
        ), l0(
          l,
          t,
          a,
          u,
          e
        );
      case 3:
        l: {
          if (fn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(E(387));
          a = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Hi(l, t), qu(t, a, null, e);
          var c = t.memoizedState;
          if (a = c.cache, Ue(t, Ol, a), a !== n.cache && Di(
            t,
            [Ol],
            e,
            !0
          ), Hu(), a = c.element, n.isDehydrated)
            if (n = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = t0(
                l,
                t,
                a,
                e
              );
              break l;
            } else if (a !== u) {
              u = Ut(
                Error(E(424)),
                t
              ), Du(u), t = t0(
                l,
                t,
                a,
                e
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, vl = Yt(l.firstChild), Bl = t, K = !0, Me = null, Ht = !0, e = Wo(
                t,
                null,
                a,
                e
              ), t.child = e; e; )
                e.flags = e.flags & -3 | 134221824, e = e.sibling;
          else {
            if (ua(), a === u) {
              t = ge(
                l,
                t,
                e
              );
              break l;
            }
            pl(l, t, a, e);
          }
          t = t.child;
        }
        return t;
      case 26:
        return La(l, t), l === null ? (e = Rr(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = e : K || (t.stateNode = or(
          t.type,
          t.pendingProps,
          _e.current,
          t
        )) : t.memoizedState = Rr(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return jc(t), l === null && K && (a = t.stateNode = Dr(
          t.type,
          t.pendingProps,
          _e.current
        ), Bl = t, Ht = !0, u = vl, Ke(t.type) ? (om = u, vl = Yt(a.firstChild)) : vl = u), pl(
          l,
          t,
          t.pendingProps.children,
          e
        ), La(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && K && ((u = a = vl) && (a = Cy(
          a,
          t.type,
          t.pendingProps,
          Ht
        ), a !== null ? (t.stateNode = a, Bl = t, vl = Yt(a.firstChild), Ht = !1, u = !0) : u = !1), u || Ce(t)), jc(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, a = n.children, tm(u, n) ? a = null : c !== null && tm(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = Zi(
          l,
          t,
          zd,
          null,
          null,
          e
        ), fu._currentValue = u), La(l, t), pl(l, t, a, e), t.child;
      case 6:
        return l === null && K && ((l = e = vl) && (e = Uy(
          e,
          t.pendingProps,
          Ht
        ), e !== null ? (t.stateNode = e, Bl = t, vl = null, l = !0) : l = !1), l || Ce(t)), null;
      case 13:
        return e0(l, t, e);
      case 4:
        return fn(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, l === null ? t.child = ra(
          t,
          null,
          a,
          e
        ) : pl(l, t, a, e), t.child;
      case 11:
        return ws(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 7:
        return a = t.pendingProps, La(l, t), pl(l, t, a, e), t.child;
      case 8:
        return pl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 12:
        return pl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 10:
        return n0(l, t, e);
      case 9:
        return u = t.type._context, a = t.pendingProps.children, ia(t), u = Vl(u), a = a(u), t.flags |= 1, pl(l, t, a, e), t.child;
      case 14:
        return Fs(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 15:
        return $s(
          l,
          t,
          t.type,
          t.pendingProps,
          e
        );
      case 19:
        return vf(l, t, e);
      case 31:
        return Hd(l, t, e);
      case 22:
        return Ws(
          l,
          t,
          e,
          t.pendingProps
        );
      case 24:
        return ia(t), a = Vl(Ol), l === null ? (u = Ui(), u === null && (u = ol, n = Mi(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= e), u = n), t.memoizedState = { parent: a, cache: u }, pi(t), Ue(t, Ol, u)) : ((l.lanes & e) !== 0 && (Hi(l, t), qu(t, null, null, e), Hu()), u = l.memoizedState, n = t.memoizedState, u.parent !== a ? (u = { parent: a, cache: a }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Ue(t, Ol, a)) : (a = n.cache, Ue(t, Ol, a), a !== u.cache && Di(
          t,
          [Ol],
          e,
          !0
        ))), pl(
          l,
          t,
          t.pendingProps.children,
          e
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : K && pn(t), l !== null && l.memoizedProps.name !== a.name ? t.flags |= 4194816 : La(l, t), pl(l, t, a.children, e), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(E(156, t.tag));
  }
  function Ee(l) {
    l.flags |= 4;
  }
  function yf(l, t, e, a, u) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = e === null ? Yr(t, a) : Yr(t, a) && (a.src !== e.src || a.srcSet !== e.srcSet)), n) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (Z0()) l.flags |= 8192;
        else
          throw sa = Xn, Ri;
    } else l.flags &= -16777217;
  }
  function i0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !Br(t))
      if (Z0()) l.flags |= 8192;
      else
        throw sa = Xn, Ri;
  }
  function uc(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? qm() : 536870912, l.lanes |= t, $a |= t);
  }
  function ju(l, t) {
    if (!K)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var e = l.tail, a = null; e !== null; )
            e.alternate !== null && (a = e), e = e.sibling;
          a === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (t = l.tail, e = null; t !== null; )
            t.alternate !== null && (e = t), t = t.sibling;
          e === null ? l.tail = null : e.sibling = null;
      }
  }
  function dl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, e = 0, a = 0;
    if (t)
      for (var u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags & 1206910976, a |= u.flags & 1206910976, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        e |= u.lanes | u.childLanes, a |= u.subtreeFlags, a |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= a, l.childLanes = e, t;
  }
  function Bd(l, t, e) {
    var a = t.pendingProps;
    switch (Ni(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return dl(t), null;
      case 1:
        return dl(t), null;
      case 3:
        return e = t.stateNode, a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), de(Ol), ba(), e.pendingContext && (e.context = e.pendingContext, e.pendingContext = null), (l === null || l.child === null) && (Ga(t) ? Ee(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Oi())), dl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Ee(t), n !== null ? (dl(t), i0(t, n)) : (dl(t), yf(
          t,
          u,
          null,
          a,
          e
        ))) : n ? n !== l.memoizedState ? (Ee(t), dl(t), i0(t, n)) : (dl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== a && Ee(t), dl(t), yf(
          t,
          u,
          l,
          a,
          e
        )), null;
      case 27:
        if (mn(t), e = _e.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Ee(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(E(166));
            return dl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Jt.current, Ga(t) ? Xo(t) : (l = Dr(u, a, e), t.stateNode = l, Ee(t));
        }
        return dl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (mn(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== a && Ee(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(E(166));
            return dl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Jt.current, Ga(t))
            Xo(t);
          else {
            var c = ku(
              _e.current
            );
            switch (n) {
              case 1:
                n = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                n = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    n = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    n = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    n = c.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(
                      n.firstChild
                    );
                    break;
                  case "select":
                    n = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? n.multiple = !0 : a.size && (n.size = a.size);
                    break;
                  default:
                    n = typeof a.is == "string" ? c.createElement(u, { is: a.is }) : c.createElement(u);
                }
            }
            n[Zl] = t, n[nt] = a;
            l: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                n.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break l;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break l;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = n;
            l: switch (Jl(n, u, a), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break l;
              case "img":
                a = !0;
                break l;
              default:
                a = !1;
            }
            a && Ee(t);
          }
        }
        return dl(t), t.subtreeFlags &= -33554433, yf(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          e
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== a && Ee(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(E(166));
          if (l = _e.current, Ga(t)) {
            if (l = t.stateNode, e = t.memoizedProps, a = null, u = Bl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  a = u.memoizedProps;
              }
            l[Zl] = t, l = !!(l.nodeValue === e || a !== null && a.suppressHydrationWarning === !0 || cr(l.nodeValue, e)), l || Ce(t, !0);
          } else
            l = ku(l).createTextNode(
              a
            ), l[Zl] = t, t.stateNode = l;
        }
        return dl(t), null;
      case 31:
        if (e = t.memoizedState, l === null || l.memoizedState !== null) {
          if (a = Ga(t), e !== null) {
            if (l === null) {
              if (!a) throw Error(E(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(557));
              l[Zl] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), l = !1;
          } else
            e = Oi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = e), l = !0;
          if (!l)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(E(558));
        }
        return dl(t), null;
      case 13:
        if (a = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = Ga(t), a !== null && a.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(E(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(E(317));
              u[Zl] = t;
            } else
              ua(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            dl(t), u = !1;
          } else
            u = Oi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return Tt(t), (t.flags & 128) !== 0 ? (t.lanes = e, t) : (e = a !== null, l = l !== null && l.memoizedState !== null, e && (a = t.child, u = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (u = a.alternate.memoizedState.cachePool.pool), n = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (n = a.memoizedState.cachePool.pool), n !== u && (a.flags |= 2048)), e !== l && e && (t.child.flags |= 8192), uc(t, t.updateQueue), dl(t), null);
      case 4:
        return ba(), l === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, dl(t), null;
      case 10:
        return de(t.type), dl(t), null;
      case 19:
        if (Xi(t), a = t.memoizedState, a === null) return dl(t), null;
        if (u = (t.flags & 128) !== 0, n = a.rendering, n === null)
          if (u) ju(a, !1);
          else {
            if (bl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = xn(l), n !== null) {
                  for (t.flags |= 128, ju(a, !1), l = n.updateQueue, t.updateQueue = l, uc(t, l), t.subtreeFlags = 0, l = e, e = t.child; e !== null; )
                    qo(e, l), e = e.sibling;
                  return Yu(
                    t,
                    Ll.current & 1 | 2
                  ), K && re(t, a.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            a.tail !== null && yt() > hc && (t.flags |= 128, u = !0, ju(a, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = xn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, uc(t, l), ju(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !n.alternate && !K)
                return dl(t), null;
            } else
              2 * yt() - a.renderingStartTime > hc && e !== 536870912 && (t.flags |= 128, u = !0, ju(a, !1), t.lanes = 4194304);
          a.isBackwards ? (n.sibling = t.child, t.child = n) : (l = a.last, l !== null ? l.sibling = n : t.child = n, a.last = n);
        }
        if (a.tail !== null) {
          l = a.tail;
          l: {
            for (e = l; e !== null; ) {
              if (e.alternate !== null) {
                e = !1;
                break l;
              }
              e = e.sibling;
            }
            e = !0;
          }
          return a.rendering = l, a.tail = l.sibling, a.renderingStartTime = yt(), l.sibling = null, n = Ll.current, n = u ? n & 1 | 2 : n & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !e || K ? Yu(t, n) : (e = n, rl(xl, t), rl(Ll, e), Wl === null && (Wl = t)), K && re(t, a.treeForkCount), l;
        }
        return dl(t), null;
      case 22:
      case 23:
        return Tt(t), Gi(), a = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (e & 536870912) !== 0 && (t.flags & 128) === 0 && (dl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : dl(t), e = t.updateQueue, e !== null && uc(t, e.retryQueue), e = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== e && (t.flags |= 2048), l !== null && jl(ma), null;
      case 24:
        return e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), de(Ol), dl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, dl(t), null;
    }
    throw Error(E(156, t.tag));
  }
  function Gd(l, t) {
    switch (Ni(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return de(Ol), ba(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return mn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Tt(t), t.alternate === null)
            throw Error(E(340));
          ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (Tt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(E(340));
          ua();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Xi(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ba(), null;
      case 10:
        return de(t.type), null;
      case 22:
      case 23:
        return Tt(t), Gi(), l !== null && jl(ma), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return de(Ol), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function f0(l, t) {
    switch (Ni(t), t.tag) {
      case 3:
        de(Ol), ba();
        break;
      case 26:
      case 27:
      case 5:
        mn(t);
        break;
      case 4:
        ba();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        Xi(t);
        break;
      case 10:
        de(t.type);
        break;
      case 22:
      case 23:
        Tt(t), Gi(), l !== null && jl(ma);
        break;
      case 24:
        de(Ol);
    }
  }
  function Zu(l, t) {
    try {
      var e = t.updateQueue, a = e !== null ? e.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        e = u;
        do {
          if ((e.tag & l) === l) {
            a = void 0;
            var n = e.create, c = e.inst;
            a = n(), c.destroy = a;
          }
          e = e.next;
        } while (e !== u);
      }
    } catch (i) {
      cl(t, t.return, i);
    }
  }
  function Qe(l, t, e) {
    try {
      var a = t.updateQueue, u = a !== null ? a.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        a = n;
        do {
          if ((a.tag & l) === l) {
            var c = a.inst, i = c.destroy;
            if (i !== void 0) {
              c.destroy = void 0, u = t;
              var m = e, d = i;
              try {
                d();
              } catch (g) {
                cl(
                  u,
                  m,
                  g
                );
              }
            }
          }
          a = a.next;
        } while (a !== n);
      }
    } catch (g) {
      cl(t, t.return, g);
    }
  }
  function m0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var e = l.stateNode;
      try {
        Io(t, e);
      } catch (a) {
        cl(l, l.return, a);
      }
    }
  }
  function o0(l, t, e) {
    e.props = da(
      l.type,
      l.memoizedProps
    ), e.state = l.memoizedState;
    try {
      e.componentWillUnmount();
    } catch (a) {
      cl(l, t, a);
    }
  }
  function Wt(l, t) {
    try {
      var e = l.ref;
      if (e !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var a = l.stateNode;
            break;
          case 30:
            var u = l.stateNode, n = me(l.memoizedProps, u);
            (u.ref === null || u.ref.name !== n) && (u.ref = gr(n)), a = u.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var c = new Ot(l);
              S(
                l.child,
                !1,
                Dy,
                c,
                void 0,
                void 0
              ), l.stateNode = c;
            }
            a = l.stateNode;
            break;
          default:
            a = l.stateNode;
        }
        typeof e == "function" ? l.refCleanup = e(a) : e.current = a;
      }
    } catch (i) {
      cl(l, t, i);
    }
  }
  function Kl(l, t) {
    var e = l.ref, a = l.refCleanup;
    if (e !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (u) {
          cl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof e == "function")
        try {
          e(null);
        } catch (u) {
          cl(l, t, u);
        }
      else e.current = null;
  }
  function nc(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var e = 0; e < t.length; e++)
        Nr(
          l.stateNode,
          t[e]
        );
  }
  function s0(l) {
    for (var t = l.return; t !== null && (gf(t) && Nr(l.stateNode, t.stateNode), !hf(t)); )
      t = t.return;
  }
  function Vu(l) {
    for (var t = l.return; t !== null && (gf(t) && My(l.stateNode, t.stateNode), !hf(t)); )
      t = t.return;
  }
  function hf(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function gf(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function Ef(l) {
    var t = l.type, e = l.memoizedProps, a = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          e.autoFocus && a.focus();
          break l;
        case "img":
          e.src ? a.src = e.src : e.srcSet && (a.srcset = e.srcSet);
      }
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  function Sf(l, t, e) {
    try {
      var a = l.stateNode;
      my(a, l.type, e, t), a[nt] = t;
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  function r0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ke(l.type) || l.tag === 4;
  }
  function Tf(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || r0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ke(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function bf(l, t, e, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      u = l.stateNode, t ? (e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e).insertBefore(u, t) : (t = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, t.appendChild(u), e = e._reactRootContainer, e != null || t.onclick !== null || (t.onclick = wt)), nc(l, a), ll = !0;
    else if (u !== 4 && (u === 27 && (nc(l, a), a = null, Ke(l.type) && (e = l.stateNode, t = null)), l = l.child, l !== null))
      for (bf(
        l,
        t,
        e,
        a
      ), l = l.sibling; l !== null; )
        bf(
          l,
          t,
          e,
          a
        ), l = l.sibling;
  }
  function cc(l, t, e, a) {
    var u = l.tag;
    if (u === 5 || u === 6)
      u = l.stateNode, t ? e.insertBefore(u, t) : e.appendChild(u), nc(l, a), ll = !0;
    else if (u !== 4 && (u === 27 && (nc(l, a), a = null, Ke(l.type) && (e = l.stateNode)), l = l.child, l !== null))
      for (cc(
        l,
        t,
        e,
        a
      ), l = l.sibling; l !== null; )
        cc(
          l,
          t,
          e,
          a
        ), l = l.sibling;
  }
  function v0(l) {
    var t = l.stateNode, e = l.memoizedProps;
    try {
      for (var a = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Jl(t, a, e), t[Zl] = l, t[nt] = e;
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var ic = !1, bt = null;
  function d0(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (ic = !0);
  }
  var kt = null;
  function y0() {
    var l = kt;
    return kt = null, l;
  }
  var it = 0;
  function Ka(l, t, e, a, u) {
    return it = 0, h0(
      l.child,
      t,
      e,
      a,
      u
    );
  }
  function h0(l, t, e, a, u) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var c = l.stateNode;
        if (a !== null) {
          var i = um(c);
          a.push(i), i.view && (n = !0);
        } else
          n || um(c).view && (n = !0);
        ic = !0, yr(
          c,
          it === 0 ? t : t + "_" + it,
          e
        ), it++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && u || h0(
        l.child,
        t,
        e,
        a,
        u
      ) && (n = !0));
      l = l.sibling;
    }
    return n;
  }
  function It(l, t) {
    for (; l !== null; )
      l.tag === 5 ? hr(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || It(
        l.child,
        t
      )), l = l.sibling;
  }
  function fc(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if ((l.tag !== 22 || l.memoizedState === null) && (fc(l), l.tag === 30 && (l.flags & 18874368) !== 0 && l.stateNode.paired)) {
          var t = l.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(E(544));
          var e = t.name;
          t = oe(t.default, t.share), t !== "none" && (Ka(
            l,
            e,
            t,
            null,
            !1
          ) || It(l.child, !1));
        }
        l = l.sibling;
      }
  }
  function _f(l, t) {
    if (l.tag === 30) {
      var e = l.stateNode, a = l.memoizedProps, u = me(a, e), n = oe(
        a.default,
        e.paired ? a.share : a.enter
      );
      n !== "none" ? Ka(l, u, n, null, !1) ? (fc(l), e.paired || t || Pa(l, a.onEnter)) : It(l.child, !1) : fc(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        _f(l, t), l = l.sibling;
    else fc(l);
  }
  function Nf(l) {
    if (bt !== null && bt.size !== 0) {
      var t = bt;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var e = l.memoizedProps, a = e.name;
              if (a != null && a !== "auto") {
                var u = t.get(a);
                if (u !== void 0) {
                  var n = oe(
                    e.default,
                    e.share
                  );
                  if (n !== "none" && (Ka(
                    l,
                    a,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, u.paired = n, n.paired = u, Pa(l, e.onShare)) : It(l.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            Nf(l);
          }
          l = l.sibling;
        }
    }
  }
  function zf(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, e = me(t, l.stateNode), a = bt !== null ? bt.get(e) : void 0, u = oe(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      u !== "none" && (Ka(l, e, u, null, !1) ? a !== void 0 ? (u = l.stateNode, a.paired = u, u.paired = a, bt.delete(e), Pa(l, t.onShare)) : Pa(l, t.onExit) : It(l.child, !1)), bt !== null && Nf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        zf(l), l = l.sibling;
    else
      bt !== null && Nf(l);
  }
  function g0(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, e = me(t, l.stateNode);
        t = oe(t.default, t.update), l.flags &= -5, t !== "none" && Ka(
          l,
          e,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && g0(l);
      l = l.sibling;
    }
  }
  function Of(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, It(l.child, !1));
          }
          Of(l);
        }
        l = l.sibling;
      }
  }
  function mc(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, It(l.child, !1), Of(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        mc(l), l = l.sibling;
    else Of(l);
  }
  function E0(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? It(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && E0(l), l = l.sibling;
  }
  function Af(l, t, e, a, u, n, c) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var m = t.stateNode;
        if (n !== null && it < n.length) {
          var d = n[it], g = um(m);
          (d.view || g.view) && (i = !0);
          var b;
          if (b = (l.flags & 4) === 0)
            if (g.clip) b = !0;
            else {
              b = d.rect;
              var r = g.rect;
              b = b.y !== r.y || b.x !== r.x || b.height !== r.height || b.width !== r.width;
            }
          b && (l.flags |= 4), g.abs ? g = !d.abs : (d = d.rect, g = g.rect, g = d.height !== g.height || d.width !== g.width), g && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && yr(
          m,
          it === 0 ? e : e + "_" + it,
          u
        ), i && (l.flags & 4) !== 0 || (kt === null && (kt = []), kt.push(
          m,
          it === 0 ? a : a + "_" + it,
          t.memoizedProps
        )), it++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && c ? l.flags |= t.flags & 32 : Af(
        l,
        t.child,
        e,
        a,
        u,
        n,
        c
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function S0(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var e = l.memoizedProps, a = l.stateNode, u = me(e, a), n = oe(e.default, e.update), c;
        c = l.memoizedState, l.memoizedState = null, a = l;
        var i = l.child;
        it = 0, u = Af(
          a,
          i,
          u,
          u,
          n,
          c,
          !1
        ), (l.flags & 4) !== 0 && u && Pa(l, e.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && S0(l);
      l = l.sibling;
    }
  }
  var Gl = !1, al = !1, Pt = !1, Df = !1, T0 = typeof WeakSet == "function" ? WeakSet : Set, Ql = null, le = !1, xu = !1, oc = !1, Mf = !1;
  function Qd(l, t, e) {
    if (l = l.containerInfo, Pf = mu, l = zo(l), vi(l)) {
      if ("selectionStart" in l)
        var a = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          a = (a = l.ownerDocument) && a.defaultView || window;
          var u = a.getSelection && a.getSelection();
          if (u && u.rangeCount !== 0) {
            a = u.anchorNode;
            var n = u.anchorOffset, c = u.focusNode;
            u = u.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break l;
            }
            var i = 0, m = -1, d = -1, g = 0, b = 0, r = l, h = null;
            t: for (; ; ) {
              for (var z; r !== a || n !== 0 && r.nodeType !== 3 || (m = i + n), r !== c || u !== 0 && r.nodeType !== 3 || (d = i + u), r.nodeType === 3 && (i += r.nodeValue.length), (z = r.firstChild) !== null; )
                h = r, r = z;
              for (; ; ) {
                if (r === l) break t;
                if (h === a && ++g === n && (m = i), h === c && ++b === u && (d = i), (z = r.nextSibling) !== null) break;
                r = h, h = r.parentNode;
              }
              r = z;
            }
            a = m === -1 || d === -1 ? null : { start: m, end: d };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (lm = { focusedElem: l, selectionRange: a }, mu = !1, e = (e & 335544064) === e, Ql = t, t = e ? 9270 : 1024; Ql !== null; ) {
      if (l = Ql, e && (a = l.deletions, a !== null))
        for (n = 0; n < a.length; n++)
          e && zf(a[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        e && d0(l), sc(e);
      else {
        if (l.tag === 22) {
          if (a = l.alternate, l.memoizedState !== null) {
            a !== null && a.memoizedState === null && e && zf(a), sc(e);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            e && d0(l), sc(e);
            continue;
          }
        }
        a = l.child, (l.subtreeFlags & t) !== 0 && a !== null ? (a.return = l, Ql = a) : (e && g0(l), sc(e));
      }
    }
    bt = null;
  }
  function sc(l) {
    for (; Ql !== null; ) {
      var t = Ql, e = l, a = t.alternate, u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && a !== null) {
            e = void 0, u = a.memoizedProps, a = a.memoizedState;
            var n = t.stateNode;
            try {
              var c = da(
                t.type,
                u
              );
              e = n.getSnapshotBeforeUpdate(
                c,
                a
              ), n.__reactInternalSnapshotBeforeUpdate = e;
            } catch (i) {
              cl(t, t.return, i);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, e = a.nodeType, e === 9)
              im(a);
            else if (e === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  im(a);
                  break;
                default:
                  a.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          e && a !== null && (e = me(
            a.memoizedProps,
            a.stateNode
          ), u = t.memoizedProps, u = oe(u.default, u.update), u !== "none" && Ka(
            a,
            e,
            u,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(E(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, Ql = a;
        break;
      }
      Ql = t.return;
    }
  }
  function b0(l, t, e) {
    var a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        te(l, e), a & 4 && Zu(5, e);
        break;
      case 1:
        if (te(l, e), a & 4)
          if (l = e.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (c) {
              cl(e, e.return, c);
            }
          else {
            var u = da(
              e.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              l.componentDidUpdate(
                u,
                t,
                l.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              cl(
                e,
                e.return,
                c
              );
            }
          }
        a & 64 && m0(e), a & 512 && Wt(e, e.return);
        break;
      case 3:
        if (te(l, e), a & 64 && (l = e.updateQueue, l !== null)) {
          if (t = null, e.child !== null)
            switch (e.child.tag) {
              case 27:
              case 5:
                t = e.child.stateNode;
                break;
              case 1:
                t = e.child.stateNode;
            }
          try {
            Io(l, t);
          } catch (c) {
            cl(e, e.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && v0(e);
      case 26:
      case 5:
        te(l, e), t === null && a & 4 && Ef(e), a & 512 && Wt(e, e.return);
        break;
      case 12:
        te(l, e);
        break;
      case 31:
        te(l, e), a & 4 && O0(l, e);
        break;
      case 13:
        te(l, e), a & 4 && A0(l, e), a & 64 && (l = e.memoizedState, l !== null && (l = l.dehydrated, l !== null && (e = Wd.bind(
          null,
          e
        ), Ry(l, e))));
        break;
      case 22:
        if (a = e.memoizedState !== null || Gl, !a) {
          var n = t !== null && t.memoizedState !== null || al;
          t = Gl, u = al, Gl = a, (al = n) && !u ? (a = 2, (e.subtreeFlags & 8772) !== 0 && (a |= 1), Zt(
            l,
            e,
            a
          )) : te(l, e), Gl = t, al = u;
        }
        break;
      case 30:
        te(l, e), a & 512 && Wt(e, e.return);
        break;
      case 7:
        a & 512 && Wt(e, e.return);
      default:
        te(l, e);
    }
  }
  function Cf(l, t) {
    for (l = l.child; l !== null; )
      _0(l, t), l = l.sibling;
  }
  function _0(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var e = l.stateNode;
          if (t) {
            var a = e.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var u = l.stateNode, n = l.memoizedProps.style, c = n != null && n.hasOwnProperty("display") ? n.display : null;
            u.style.display = c == null || typeof c == "boolean" ? "" : ("" + c).trim();
          }
        } catch (m) {
          cl(l, l.return, m);
        }
        Uf(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, ll = !0;
        } catch (m) {
          cl(l, l.return, m);
        }
        break;
      case 18:
        try {
          var i = l.stateNode;
          t ? dr(i, !0) : dr(l.stateNode, !1);
        } catch (m) {
          cl(l, l.return, m);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Cf(l, t);
        break;
      default:
        Cf(l, t);
    }
  }
  function Uf(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var e = l, a = t;
          switch (e.tag) {
            case 4:
              _0(e, a);
              break l;
            case 22:
              e.memoizedState === null && Uf(e, a);
              break l;
            default:
              Uf(e, a);
          }
        }
        l = l.sibling;
      }
  }
  function N0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, N0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && hn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var gl = null, ft = !1;
  function Xt(l, t, e) {
    for (e = e.child; e !== null; )
      z0(l, t, e), e = e.sibling;
  }
  function z0(l, t, e) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(ru, e);
      } catch {
      }
    switch (e.tag) {
      case 26:
        al || Kl(e, t), Xt(
          l,
          t,
          e
        ), e.memoizedState ? e.memoizedState.count-- : e.stateNode && !al && (e = e.stateNode, e.parentNode.removeChild(e));
        break;
      case 27:
        al || Kl(e, t), Vu(e);
        var a = gl, u = ft;
        Ke(e.type) && (gl = e.stateNode, ft = !1), Xt(
          l,
          t,
          e
        ), Mr(
          e.stateNode,
          e.type,
          e.memoizedProps
        ), gl = a, ft = u;
        break;
      case 5:
        al || Kl(e, t), Vu(e);
      case 6:
        if (e.tag === 6 && Vu(e), a = gl, u = ft, gl = null, Xt(
          l,
          t,
          e
        ), gl = a, ft = u, gl !== null)
          if (ft)
            try {
              (gl.nodeType === 9 ? gl.body : gl.nodeName === "HTML" ? gl.ownerDocument.body : gl).removeChild(e.stateNode), ll = !0;
            } catch (n) {
              cl(
                e,
                t,
                n
              );
            }
          else
            try {
              gl.removeChild(e.stateNode), ll = !0;
            } catch (n) {
              cl(
                e,
                t,
                n
              );
            }
        break;
      case 18:
        gl !== null && (ft ? (l = gl, vr(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          e.stateNode
        ), ou(l)) : vr(gl, e.stateNode));
        break;
      case 4:
        a = gl, u = ft, gl = e.stateNode.containerInfo, ft = !0, Xt(
          l,
          t,
          e
        ), gl = a, ft = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Qe(2, e, t), al || Qe(4, e, t), Xt(
          l,
          t,
          e
        );
        break;
      case 1:
        al || (Kl(e, t), a = e.stateNode, typeof a.componentWillUnmount == "function" && o0(
          e,
          t,
          a
        )), Xt(
          l,
          t,
          e
        );
        break;
      case 21:
        Xt(
          l,
          t,
          e
        );
        break;
      case 22:
        al = (a = al) || e.memoizedState !== null, Xt(
          l,
          t,
          e
        ), al = a;
        break;
      case 30:
        Kl(e, t), Xt(
          l,
          t,
          e
        );
        break;
      case 7:
        al || Kl(e, t), Xt(
          l,
          t,
          e
        );
        break;
      default:
        Xt(
          l,
          t,
          e
        );
    }
  }
  function O0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        ou(l);
      } catch (e) {
        cl(t, t.return, e);
      }
    }
  }
  function A0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        ou(l);
      } catch (e) {
        cl(t, t.return, e);
      }
  }
  function Xd(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new T0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new T0()), t;
      default:
        throw Error(E(435, l.tag));
    }
  }
  function rc(l, t) {
    var e = Xd(l);
    t.forEach(function(a) {
      if (!e.has(a)) {
        e.add(a);
        var u = kd.bind(null, l, a);
        a.then(u, u);
      }
    });
  }
  function et(l, t, e) {
    var a = t.deletions;
    if (a !== null)
      for (var u = 0; u < a.length; u++) {
        var n = a[u], c = l, i = t, m = i;
        l: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Ke(m.type)) {
                gl = m.stateNode, ft = !1;
                break l;
              }
              break;
            case 5:
              gl = m.stateNode, ft = !1;
              break l;
            case 3:
            case 4:
              gl = m.stateNode.containerInfo, ft = !0;
              break l;
          }
          m = m.return;
        }
        if (gl === null) throw Error(E(160));
        z0(c, i, n), gl = null, ft = !1, c = n.alternate, c !== null && (c.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        D0(t, l, e), t = t.sibling;
  }
  var jt = null;
  function D0(l, t, e) {
    var a = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (a = l.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var n = 0; n < a.length; n++) {
            var c = a[n];
            c.ref.impl = c.nextImpl;
          }
        et(t, l, e), at(l), u & 4 && (Qe(3, l, l.return), Zu(3, l), Qe(5, l, l.return));
        break;
      case 1:
        et(t, l, e), at(l), u & 512 && (al || a === null || Kl(a, a.return)), u & 64 && Gl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (e = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = e === null ? t : e.concat(t))));
        break;
      case 26:
        if (n = jt, et(t, l, e), at(l), u & 512 && (al || a === null || Kl(a, a.return)), u & 4)
          if (u = a !== null ? a.memoizedState : null, e = l.memoizedState, a === null)
            if (e === null)
              if (l.stateNode === null)
                if (Gl)
                  l.stateNode = or(
                    l.type,
                    l.memoizedProps,
                    t.containerInfo,
                    l
                  );
                else {
                  l: {
                    t = l.type, e = l.memoizedProps, u = n.ownerDocument || n;
                    t: switch (t) {
                      case "title":
                        a = u.getElementsByTagName("title")[0], (!a || a[yu] || a[Zl] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = u.createElement(t), u.head.insertBefore(
                          a,
                          u.querySelector("head > title")
                        )), Jl(a, t, e), a[Zl] = l, Yl(a), t = a;
                        break l;
                      case "link":
                        if (n = qr(
                          "link",
                          "href",
                          u
                        ).get(t + (e.href || ""))) {
                          for (c = 0; c < n.length; c++)
                            if (a = n[c], a.getAttribute("href") === (e.href == null || e.href === "" ? null : e.href) && a.getAttribute("rel") === (e.rel == null ? null : e.rel) && a.getAttribute("title") === (e.title == null ? null : e.title) && a.getAttribute("crossorigin") === (e.crossOrigin == null ? null : e.crossOrigin)) {
                              n.splice(c, 1);
                              break t;
                            }
                        }
                        a = u.createElement(t), Jl(a, t, e), u.head.appendChild(a);
                        break;
                      case "meta":
                        if (n = qr(
                          "meta",
                          "content",
                          u
                        ).get(t + (e.content || ""))) {
                          for (c = 0; c < n.length; c++)
                            if (a = n[c], a.getAttribute("content") === (e.content == null ? null : "" + e.content) && a.getAttribute("name") === (e.name == null ? null : e.name) && a.getAttribute("property") === (e.property == null ? null : e.property) && a.getAttribute("http-equiv") === (e.httpEquiv == null ? null : e.httpEquiv) && a.getAttribute("charset") === (e.charSet == null ? null : e.charSet)) {
                              n.splice(c, 1);
                              break t;
                            }
                        }
                        a = u.createElement(t), Jl(a, t, e), u.head.appendChild(a);
                        break;
                      default:
                        throw Error(E(468, t));
                    }
                    a[Zl] = l, Yl(a), t = a;
                  }
                  l.stateNode = t;
                }
              else
                Gl || dm(n, l.type, l.stateNode);
            else
              l.stateNode = Hr(
                n,
                e,
                l.memoizedProps
              );
          else
            u !== e ? (u === null ? (t = a.stateNode, t === null || al || t.parentNode.removeChild(t)) : u.count--, e === null ? Gl || dm(n, l.type, l.stateNode) : Hr(n, e, l.memoizedProps)) : e === null && l.stateNode !== null && Sf(
              l,
              l.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        et(t, l, e), at(l), u & 512 && (al || a === null || Kl(a, a.return)), a !== null && u & 4 && Sf(
          l,
          l.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (n = Pt, Pt = !1, et(t, l, e), Pt = n, at(l), u & 512 && (al || a === null || Kl(a, a.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            Da(t, ""), ll = !0;
          } catch (g) {
            cl(l, l.return, g);
          }
        }
        u & 4 && l.stateNode != null && (t = l.memoizedProps, Sf(
          l,
          t,
          a !== null ? a.memoizedProps : t
        )), u & 1024 && (Df = !0);
        break;
      case 6:
        if (et(t, l, e), at(l), u & 4) {
          if (l.stateNode === null)
            throw Error(E(162));
          t = l.memoizedProps, e = l.stateNode;
          try {
            e.nodeValue = t, ll = !0;
          } catch (g) {
            cl(l, l.return, g);
          }
        }
        break;
      case 3:
        if (ll = !1, Dc = null, n = jt, jt = Iu(t.containerInfo), et(t, l, e), jt = n, at(l), u & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            ou(t.containerInfo);
          } catch (g) {
            cl(l, l.return, g);
          }
        Df && (Df = !1, M0(l)), ll = !1;
        break;
      case 4:
        u = Pt, Pt = Gl, a = wm(), n = jt, jt = Iu(
          l.stateNode.containerInfo
        ), et(t, l, e), at(l), jt = n, ll && xu && (oc = !0), ll = a, Pt = u;
        break;
      case 12:
        et(t, l, e), at(l);
        break;
      case 31:
        et(t, l, e), at(l), u & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, rc(l, t)));
        break;
      case 13:
        et(t, l, e), at(l), l.child.flags & 8192 && l.memoizedState !== null != (a !== null && a.memoizedState !== null) && (yc = yt()), u & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, rc(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, c = a !== null && a.memoizedState !== null;
        var i = Gl, m = al, d = Pt;
        Gl = i || n, Pt = d || n, al = m || c, et(t, l, e), al = m, Pt = d, Gl = i, at(l), u & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || a === null || c || Gl || al || (t = c || al, e = Gl, a = al, Gl = n || Gl, al = t, Xe(l, 2), Gl = e, al = a), !n && Pt || Cf(l, n)), u & 4 && (t = l.updateQueue, t !== null && (e = t.retryQueue, e !== null && (t.retryQueue = null, rc(l, e))));
        break;
      case 19:
        et(t, l, e), at(l), u & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, rc(l, t)));
        break;
      case 30:
        u & 512 && (al || a === null || Kl(a, a.return)), u = wm(), n = xu, c = (e & 335544064) === e, i = l.memoizedProps, xu = c && oe(
          i.default,
          i.update
        ) !== "none", et(t, l, e), at(l), c && a !== null && ll && (l.flags |= 4), xu = n, ll = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (al || a === null || Kl(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = l);
      default:
        et(t, l, e), at(l);
    }
  }
  function at(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var e, a = l.return; a !== null; ) {
          if (r0(a)) {
            e = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var u = l.return; u !== null; ) {
          if (gf(u)) {
            var n = u.stateNode;
            a === null ? a = [n] : a.push(n);
          }
          if (hf(u)) break;
          u = u.return;
        }
        var c = a;
        if (e == null) throw Error(E(160));
        switch (e.tag) {
          case 27:
            var i = e.stateNode, m = Tf(l);
            cc(
              l,
              m,
              i,
              c
            );
            break;
          case 5:
            var d = e.stateNode;
            e.flags & 32 && (Da(d, ""), e.flags &= -33);
            var g = Tf(l);
            cc(
              l,
              g,
              d,
              c
            );
            break;
          case 3:
          case 4:
            var b = e.stateNode.containerInfo, r = Tf(l);
            bf(
              l,
              r,
              b,
              c
            );
            break;
          default:
            throw Error(E(161));
        }
      } catch (h) {
        cl(l, l.return, h);
      }
      l.flags &= -3;
    }
    t & 4096 && (l.flags &= -4097);
  }
  function M0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        M0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, mu = !0, t.reset(), mu = !1), l = l.sibling;
      }
  }
  function Ja(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        C0(t, l), t = t.sibling;
    else S0(t);
  }
  function C0(l, t) {
    var e = l.alternate;
    if (e === null) _f(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Mf = le = !1, y0(), Ja(t, l), !le && !oc) {
            if (l = kt, l !== null)
              for (var a = 0; a < l.length; a += 3) {
                e = l[a];
                var u = l[a + 1];
                hr(e, l[a + 2]), e = e.ownerDocument.documentElement, e !== null && e.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + u + ")"
                  }
                );
              }
            l = t.containerInfo, l = l.nodeType === 9 ? l.documentElement : l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "" && (l.style.viewTransitionName = "none", l.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), l.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Mf = !0;
          }
          kt = null;
          break;
        case 5:
          Ja(t, l);
          break;
        case 4:
          a = le, le = !1, Ja(t, l), le && (oc = !0), le = a;
          break;
        case 22:
          l.memoizedState === null && (e.memoizedState !== null ? _f(l, !1) : Ja(t, l));
          break;
        case 30:
          a = le, u = y0(), le = !1, Ja(t, l), le && (l.flags |= 4);
          var n = l.memoizedProps, c = l.stateNode;
          t = me(n, c), c = me(e.memoizedProps, c);
          var i = oe(n.default, n.update);
          i === "none" ? t = !1 : (n = e.memoizedState, e.memoizedState = null, e = l.child, it = 0, t = Af(
            l,
            e,
            t,
            c,
            i,
            n,
            !0
          ), it !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Pa(
            l,
            l.memoizedProps.onUpdate
          ), kt = u) : u !== null && (u.push.apply(u, kt), kt = u), le = (l.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ja(t, l);
      }
  }
  function te(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        b0(l, t.alternate, t), t = t.sibling;
  }
  function Xe(l, t) {
    for (l = l.child; l !== null; ) {
      var e = l, a = t;
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Qe(4, e, e.return), Xe(
            e,
            a
          );
          break;
        case 1:
          Kl(e, e.return);
          var u = e.stateNode;
          typeof u.componentWillUnmount == "function" && o0(
            e,
            e.return,
            u
          ), Xe(
            e,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Mr(
            e.stateNode,
            e.type,
            e.memoizedProps
          );
        case 5:
          Kl(e, e.return), e.tag !== 5 && e.tag !== 27 || Vu(e), Xe(
            e,
            a
          );
          break;
        case 6:
          Vu(e);
          break;
        case 26:
          Kl(e, e.return), u = e.stateNode, e.memoizedState !== null || u === null || al || u.parentNode.removeChild(u), Xe(
            e,
            a
          );
          break;
        case 22:
          e.memoizedState === null && Xe(
            e,
            a
          );
          break;
        case 30:
          Kl(e, e.return), Xe(
            e,
            a
          );
          break;
        case 7:
          Kl(e, e.return);
        default:
          Xe(
            e,
            a
          );
      }
      l = l.sibling;
    }
  }
  function Zt(l, t, e) {
    for (e = (t.subtreeFlags & 8772) !== 0 ? e : e & -2, t = t.child; t !== null; ) {
      var a = t.alternate, u = l, n = t, c = n.flags, i = (e & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          Zt(
            u,
            n,
            e
          ), Zu(4, n);
          break;
        case 1:
          if (Zt(
            u,
            n,
            e
          ), a = n, u = a.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (g) {
              cl(a, a.return, g);
            }
          if (a = n, u = a.updateQueue, u !== null) {
            var m = a.stateNode;
            try {
              var d = u.shared.hiddenCallbacks;
              if (d !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < d.length; u++)
                  ko(d[u], m);
            } catch (g) {
              cl(a, a.return, g);
            }
          }
          i && c & 64 && m0(n), Wt(n, n.return);
          break;
        case 27:
          (e & 2) !== 0 && v0(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || s0(n), Zt(
            u,
            n,
            e
          ), i && a === null && c & 4 && Ef(n), Wt(n, n.return);
          break;
        case 6:
          s0(n);
          break;
        case 26:
          m = n.stateNode, n.memoizedState !== null || m === null || Gl || dm(
            Iu(m.ownerDocument),
            n.type,
            m
          ), Zt(
            u,
            n,
            e
          ), i && a === null && c & 4 && Ef(n), Wt(n, n.return);
          break;
        case 12:
          Zt(
            u,
            n,
            e
          );
          break;
        case 31:
          Zt(
            u,
            n,
            e
          ), i && c & 4 && O0(u, n);
          break;
        case 13:
          Zt(
            u,
            n,
            e
          ), i && c & 4 && A0(u, n);
          break;
        case 22:
          n.memoizedState === null && Zt(
            u,
            n,
            e
          ), Wt(n, n.return);
          break;
        case 30:
          Zt(
            u,
            n,
            e
          ), Wt(n, n.return);
          break;
        case 7:
          Wt(n, n.return);
        default:
          Zt(
            u,
            n,
            e
          );
      }
      t = t.sibling;
    }
  }
  function Rf(l, t) {
    var e = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (e = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== e && (l != null && l.refCount++, e != null && Mu(e));
  }
  function pf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Mu(l));
  }
  function qt(l, t, e, a) {
    var u = (e & 335544064) === e;
    if (t.subtreeFlags & (u ? 10262 : 10256))
      for (t = t.child; t !== null; )
        U0(
          l,
          t,
          e,
          a
        ), t = t.sibling;
    else u && E0(t);
  }
  function U0(l, t, e, a) {
    var u = (e & 335544064) === e;
    u && t.alternate === null && t.return !== null && t.return.alternate !== null && mc(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qt(
          l,
          t,
          e,
          a
        ), n & 2048 && Zu(9, t);
        break;
      case 1:
        qt(
          l,
          t,
          e,
          a
        );
        break;
      case 3:
        qt(
          l,
          t,
          e,
          a
        ), u && Mf && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Mu(n)));
        break;
      case 12:
        if (n & 2048) {
          qt(
            l,
            t,
            e,
            a
          ), n = t.stateNode;
          try {
            var c = t.memoizedProps, i = c.id, m = c.onPostCommit;
            typeof m == "function" && m(
              i,
              t.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (d) {
            cl(t, t.return, d);
          }
        } else
          qt(
            l,
            t,
            e,
            a
          );
        break;
      case 31:
        qt(
          l,
          t,
          e,
          a
        );
        break;
      case 13:
        qt(
          l,
          t,
          e,
          a
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, i = t.alternate, t.memoizedState !== null ? (u && i !== null && i.memoizedState === null && mc(i), c._visibility & 2 ? qt(
          l,
          t,
          e,
          a
        ) : Lu(
          l,
          t
        )) : (u && i !== null && i.memoizedState !== null && mc(t), c._visibility & 2 ? qt(
          l,
          t,
          e,
          a
        ) : (c._visibility |= 2, wa(
          l,
          t,
          e,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && Rf(i, t);
        break;
      case 24:
        qt(
          l,
          t,
          e,
          a
        ), n & 2048 && pf(t.alternate, t);
        break;
      case 30:
        u && (n = t.alternate, n !== null && (It(n.child, !0), It(t.child, !0))), qt(
          l,
          t,
          e,
          a
        );
        break;
      default:
        qt(
          l,
          t,
          e,
          a
        );
    }
  }
  function wa(l, t, e, a, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, c = t, i = e, m = a, d = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          wa(
            n,
            c,
            i,
            m,
            u
          ), Zu(8, c);
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          c.memoizedState !== null ? g._visibility & 2 ? wa(
            n,
            c,
            i,
            m,
            u
          ) : Lu(
            n,
            c
          ) : (g._visibility |= 2, wa(
            n,
            c,
            i,
            m,
            u
          )), u && d & 2048 && Rf(
            c.alternate,
            c
          );
          break;
        case 24:
          wa(
            n,
            c,
            i,
            m,
            u
          ), u && d & 2048 && pf(c.alternate, c);
          break;
        default:
          wa(
            n,
            c,
            i,
            m,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Lu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var e = l, a = t, u = a.flags;
        switch (a.tag) {
          case 22:
            Lu(e, a), u & 2048 && Rf(
              a.alternate,
              a
            );
            break;
          case 24:
            Lu(e, a), u & 2048 && pf(a.alternate, a);
            break;
          default:
            Lu(e, a);
        }
        t = t.sibling;
      }
  }
  var ya = 8192;
  function ha(l, t, e) {
    if (l.subtreeFlags & ya)
      for (l = l.child; l !== null; )
        R0(
          l,
          t,
          e
        ), l = l.sibling;
  }
  function R0(l, t, e) {
    switch (l.tag) {
      case 26:
        ha(
          l,
          t,
          e
        ), l.flags & ya && (l.memoizedState !== null ? Ky(
          e,
          jt,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Qr(e, l)));
        break;
      case 5:
        ha(
          l,
          t,
          e
        ), l.flags & ya && (l = l.stateNode, (t & 335544128) === t && Qr(e, l));
        break;
      case 3:
      case 4:
        var a = jt;
        jt = Iu(l.stateNode.containerInfo), ha(
          l,
          t,
          e
        ), jt = a;
        break;
      case 22:
        l.memoizedState === null && (a = l.alternate, a !== null && a.memoizedState !== null ? (a = ya, ya = 16777216, ha(
          l,
          t,
          e
        ), ya = a) : ha(
          l,
          t,
          e
        ));
        break;
      case 30:
        if ((l.flags & ya) !== 0 && (a = l.memoizedProps.name, a != null && a !== "auto")) {
          var u = l.stateNode;
          u.paired = null, bt === null && (bt = /* @__PURE__ */ new Map()), bt.set(a, u);
        }
        ha(
          l,
          t,
          e
        );
        break;
      default:
        ha(
          l,
          t,
          e
        );
    }
  }
  function p0(l) {
    var t = l.alternate;
    if (t !== null && (l = t.child, l !== null)) {
      t.child = null;
      do
        t = l.sibling, l.sibling = null, l = t;
      while (l !== null);
    }
  }
  function Ku(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Ql = a, q0(
            a,
            l
          );
        }
      p0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        H0(l), l = l.sibling;
  }
  function H0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ku(l), l.flags & 2048 && Qe(9, l, l.return);
        break;
      case 3:
        Ku(l);
        break;
      case 12:
        Ku(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, vc(l)) : Ku(l);
        break;
      default:
        Ku(l);
    }
  }
  function vc(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var e = 0; e < t.length; e++) {
          var a = t[e];
          Ql = a, q0(
            a,
            l
          );
        }
      p0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Qe(8, t, t.return), vc(t);
          break;
        case 22:
          e = t.stateNode, e._visibility & 2 && (e._visibility &= -3, vc(t));
          break;
        default:
          vc(t);
      }
      l = l.sibling;
    }
  }
  function q0(l, t) {
    for (; Ql !== null; ) {
      var e = Ql;
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          Qe(8, e, t);
          break;
        case 23:
        case 22:
          if (e.memoizedState !== null && e.memoizedState.cachePool !== null) {
            var a = e.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          Mu(e.memoizedState.cache);
      }
      if (a = e.child, a !== null) a.return = e, Ql = a;
      else
        l: for (e = l; Ql !== null; ) {
          a = Ql;
          var u = a.sibling, n = a.return;
          if (N0(a), a === e) {
            Ql = null;
            break l;
          }
          if (u !== null) {
            u.return = n, Ql = u;
            break l;
          }
          Ql = n;
        }
    }
  }
  var jd = {
    getCacheForType: function(l) {
      var t = Vl(Ol), e = t.data.get(l);
      return e === void 0 && (e = l(), t.data.set(l, e)), e;
    },
    cacheSignal: function() {
      return Vl(Ol).controller.signal;
    }
  }, Zd = typeof WeakMap == "function" ? WeakMap : Map, tl = 0, ol = null, w = null, $ = 0, nl = 0, _t = null, je = !1, Fa = !1, Hf = !1, Se = 0, bl = 0, Ze = 0, ga = 0, dc = 0, Nt = 0, $a = 0, Ju = null, mt = null, qf = !1, yc = 0, Y0 = 0, hc = 1 / 0, gc = null, Ve = null, El = 0, Vt = null, Ea = null, ee = 0, Yf = 0, Bf = null, B0 = null, Wa = null, ka = null, Ia = null, wu = 0, Ec = null;
  function zt() {
    return (tl & 2) !== 0 && $ !== 0 ? $ & -$ : M.T !== null ? Jf() : Qm();
  }
  function G0() {
    if (Nt === 0)
      if (($ & 536870912) === 0 || K) {
        var l = rn;
        rn <<= 1, (rn & 3932160) === 0 && (rn = 262144), Nt = l;
      } else Nt = 536870912;
    return l = xl.current, l !== null && (l.flags |= 32), Nt;
  }
  function Pa(l, t) {
    if (t != null) {
      var e = l.stateNode, a = e.ref;
      a === null && (a = e.ref = gr(
        me(l.memoizedProps, e)
      )), ka === null && (ka = []), ka.push(t.bind(null, a));
    }
  }
  function ot(l, t, e) {
    (l === ol && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) && (lu(l, 0), xe(
      l,
      $,
      Nt,
      !1
    )), du(l, e), ((tl & 2) === 0 || l !== ol) && (l === ol && ((tl & 2) === 0 && (ga |= e), bl === 4 && xe(
      l,
      $,
      Nt,
      !1
    )), ae(l));
  }
  function Q0(l, t, e) {
    if ((tl & 6) !== 0) throw Error(E(327));
    var a = !e && (t & 127) === 0 && (t & l.expiredLanes) === 0 || vu(l, t), u = a ? Ld(l, t) : Qf(l, t, !0), n = a;
    do {
      if (u === 0) {
        Fa && !a && xe(l, t, 0, !1);
        break;
      } else {
        if (e = l.current.alternate, n && !Vd(e)) {
          u = Qf(l, t, !1), n = !1;
          continue;
        }
        if (u === 2) {
          if (n = t, l.errorRecoveryDisabledLanes & n)
            var c = 0;
          else
            c = l.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            l: {
              var i = l;
              u = Ju;
              var m = i.current.memoizedState.isDehydrated;
              if (m && (lu(i, c).flags |= 256), c = Qf(
                i,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (Hf && !m) {
                  i.errorRecoveryDisabledLanes |= n, ga |= n, u = 4;
                  break l;
                }
                n = mt, mt = u, n !== null && (mt === null ? mt = n : mt.push.apply(
                  mt,
                  n
                ));
              }
              u = c;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          lu(l, 0), xe(l, t, 0, !0);
          break;
        }
        l: {
          switch (a = l, n = u, n) {
            case 0:
            case 1:
              throw Error(E(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              xe(
                a,
                t,
                Nt,
                !je
              );
              break l;
            case 2:
              mt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(E(329));
          }
          if ((t & 62914560) === t && (u = yc + 300 - yt(), 10 < u)) {
            if (xe(
              a,
              t,
              Nt,
              !je
            ), dn(a, 0, !0) !== 0) break l;
            ee = t, a.timeoutHandle = am(
              X0.bind(
                null,
                a,
                e,
                mt,
                gc,
                qf,
                t,
                Nt,
                ga,
                $a,
                je,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          X0(
            a,
            e,
            mt,
            gc,
            qf,
            t,
            Nt,
            ga,
            $a,
            je,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ae(l);
  }
  function X0(l, t, e, a, u, n, c, i, m, d, g, b, r, h) {
    l.timeoutHandle = -1;
    var z = t.subtreeFlags, C = (n & 335544064) === n;
    if (b = null, (C || z & 8192 || (z & 16785408) === 16785408) && (b = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: wt
    }, bt = null, R0(
      t,
      n,
      b
    ), C && (z = b, C = l.containerInfo, C = (C.nodeType === 9 ? C : C.ownerDocument).__reactViewTransition, C != null && (z.count++, z.waitingForViewTransition = !0, z = tn.bind(z), C.finished.then(z, z))), z = (n & 62914560) === n ? yc - yt() : (n & 4194048) === n ? Y0 - yt() : 0, z = Jy(
      b,
      z
    ), z !== null)) {
      ee = n, l.cancelPendingCommit = z(
        w0.bind(
          null,
          l,
          t,
          n,
          e,
          a,
          u,
          c,
          i,
          m,
          d,
          g,
          b,
          null,
          r,
          h
        )
      ), xe(l, n, c, !d);
      return;
    }
    w0(
      l,
      t,
      n,
      e,
      a,
      u,
      c,
      i,
      m,
      d,
      g,
      b
    );
  }
  function Vd(l) {
    for (var t = l; ; ) {
      var e = t.tag;
      if ((e === 0 || e === 11 || e === 15) && t.flags & 16384 && (e = t.updateQueue, e !== null && (e = e.stores, e !== null)))
        for (var a = 0; a < e.length; a++) {
          var u = e[a], n = u.getSnapshot;
          u = u.value;
          try {
            if (!St(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (e = t.child, t.subtreeFlags & 16384 && e !== null)
        e.return = t, t = e;
      else {
        if (t === l) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === l) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function xe(l, t, e, a) {
    t = Hm(l, t), t &= ~dc, t &= ~ga, l.suspendedLanes |= t, l.pingedLanes &= ~t, a && (l.warmLanes |= t), a = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - gt(u), c = 1 << n;
      a[n] = -1, u &= ~c;
    }
    e !== 0 && Ym(l, e, t);
  }
  function Sc() {
    return (tl & 6) === 0 ? (Fu(0), !1) : !0;
  }
  function Gf() {
    if (w !== null) {
      if (nl === 0)
        var l = w.return;
      else
        l = w, ve = na = null, Li(l), ja = null, Ru = 0, l = w;
      for (; l !== null; )
        f0(l.alternate, l), l = l.return;
      w = null;
    }
  }
  function lu(l, t) {
    var e = l.timeoutHandle;
    return e !== -1 && (l.timeoutHandle = -1, ry(e)), e = l.cancelPendingCommit, e !== null && (l.cancelPendingCommit = null, e()), ee = 0, Gf(), ol = l, w = e = se(l.current, null), $ = t, nl = 0, _t = null, je = !1, Fa = vu(l, t), Hf = !1, $a = Nt = dc = ga = Ze = bl = 0, mt = Ju = null, qf = !1, Se = Hm(l, t), Dn(), e;
  }
  function j0(l, t) {
    V = null, M.H = In, t === Xa || t === Qn ? (t = wo(), nl = 3) : t === Ri ? (t = wo(), nl = 4) : nl = t === nf ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, _t = t, w === null && (bl = 1, Pn(
      l,
      Ut(t, l.current)
    ));
  }
  function Z0() {
    var l = xl.current;
    return l === null ? !0 : ($ & 4194048) === $ ? Wl === null : ($ & 62914560) === $ || ($ & 536870912) !== 0 ? l === Wl : !1;
  }
  function V0() {
    var l = M.H;
    return M.H = In, l === null ? In : l;
  }
  function x0() {
    var l = M.A;
    return M.A = jd, l;
  }
  function Tc() {
    bl = 4, je || ($ & 4194048) !== $ && xl.current !== null || (Fa = !0), (Ze & 134217727) === 0 && (ga & 134217727) === 0 || ol === null || xe(
      ol,
      $,
      Nt,
      !1
    );
  }
  function Qf(l, t, e) {
    var a = tl;
    tl |= 2;
    var u = V0(), n = x0();
    (ol !== l || $ !== t) && (gc = null, lu(l, t)), t = !1;
    var c = bl;
    l: do
      try {
        if (nl !== 0 && w !== null) {
          var i = w, m = _t;
          switch (nl) {
            case 8:
              Gf(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              xl.current === null && (t = !0);
              var d = nl;
              if (nl = 0, _t = null, tu(l, i, m, d), e && Fa) {
                c = 0;
                break l;
              }
              break;
            default:
              d = nl, nl = 0, _t = null, tu(l, i, m, d);
          }
        }
        xd(), c = bl;
        break;
      } catch (g) {
        j0(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, ve = na = null, tl = a, M.H = u, M.A = n, w === null && (ol = null, $ = 0, Dn()), c;
  }
  function xd() {
    for (; w !== null; ) L0(w);
  }
  function Ld(l, t) {
    var e = tl;
    tl |= 2;
    var a = V0(), u = x0();
    ol !== l || $ !== t ? (gc = null, hc = yt() + 500, lu(l, t)) : Fa = vu(
      l,
      t
    );
    l: do
      try {
        if (nl !== 0 && w !== null) {
          t = w;
          var n = _t;
          t: switch (nl) {
            case 1:
              nl = 0, _t = null, tu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Ko(n)) {
                nl = 0, _t = null, K0(t);
                break;
              }
              t = function() {
                nl !== 2 && nl !== 9 || ol !== l || (nl = 7), ae(l);
              }, n.then(t, t);
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              Ko(n) ? (nl = 0, _t = null, K0(t)) : (nl = 0, _t = null, tu(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (w.tag) {
                case 26:
                  c = w.memoizedState;
                case 5:
                case 27:
                  var i = w;
                  if (c ? Br(c) : i.stateNode.complete) {
                    nl = 0, _t = null;
                    var m = i.sibling;
                    if (m !== null) w = m;
                    else {
                      var d = i.return;
                      d !== null ? (w = d, bc(d)) : w = null;
                    }
                    break t;
                  }
              }
              nl = 0, _t = null, tu(l, t, n, 5);
              break;
            case 6:
              nl = 0, _t = null, tu(l, t, n, 6);
              break;
            case 8:
              Gf(), bl = 6;
              break l;
            default:
              throw Error(E(462));
          }
        }
        Kd();
        break;
      } catch (g) {
        j0(l, g);
      }
    while (!0);
    return ve = na = null, M.H = a, M.A = u, tl = e, w !== null ? 0 : (ol = null, $ = 0, Dn(), bl);
  }
  function Kd() {
    for (; w !== null && !fv(); )
      L0(w);
  }
  function L0(l) {
    var t = c0(l.alternate, l, Se);
    l.memoizedProps = l.pendingProps, t === null ? bc(l) : w = t;
  }
  function K0(l) {
    var t = l, e = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = Ps(
          e,
          t,
          t.pendingProps,
          t.type,
          void 0,
          $
        );
        break;
      case 11:
        t = Ps(
          e,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          $
        );
        break;
      case 5:
        Li(t);
        var a = t;
        a === Bl && (K ? (Hn(a), a.tag === 5 && a.stateNode != null && (vl = a.stateNode)) : (Hn(a), K = !0));
      default:
        f0(e, t), t = w = qo(t, Se), t = c0(e, t, Se);
    }
    l.memoizedProps = l.pendingProps, t === null ? bc(l) : w = t;
  }
  function tu(l, t, e, a) {
    ve = na = null, Li(t), ja = null, Ru = 0;
    var u = t.return;
    try {
      if (pd(
        l,
        u,
        t,
        e,
        $
      )) {
        bl = 1, Pn(
          l,
          Ut(e, l.current)
        ), w = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw w = u, n;
      bl = 1, Pn(
        l,
        Ut(e, l.current)
      ), w = null;
      return;
    }
    t.flags & 32768 ? (K || a === 1 ? l = !0 : Fa || ($ & 536870912) !== 0 ? l = !1 : (je = l = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = xl.current, a !== null && a.tag === 13 && (a.flags |= 16384))), J0(t, l)) : bc(t);
  }
  function bc(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        J0(
          t,
          je
        );
        return;
      }
      l = t.return;
      var e = Bd(
        t.alternate,
        t,
        Se
      );
      if (e !== null) {
        w = e;
        return;
      }
      if (t = t.sibling, t !== null) {
        w = t;
        return;
      }
      w = t = l;
    } while (t !== null);
    bl === 0 && (bl = 5);
  }
  function J0(l, t) {
    do {
      var e = Gd(l.alternate, l);
      if (e !== null) {
        e.flags &= 32767, w = e;
        return;
      }
      if (e = l.return, e !== null && (e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null), !t && (l = l.sibling, l !== null)) {
        w = l;
        return;
      }
      w = l = e;
    } while (l !== null);
    bl = 6, w = null;
  }
  function w0(l, t, e, a, u, n, c, i, m, d, g, b) {
    l.cancelPendingCommit = null;
    do
      _c();
    while (El !== 0);
    if ((tl & 6) !== 0) throw Error(E(327));
    if (t !== null) {
      if (t === l.current) throw Error(E(177));
      l === ol && (w = ol = null, $ = 0), Ea = t, Vt = l, ee = e, Bf = u, B0 = a, Jd(
        l,
        t,
        e,
        c,
        i,
        m,
        b
      );
    }
  }
  function Jd(l, t, e, a, u, n, c) {
    var i = t.lanes | t.childLanes;
    if (Yf = i, i |= Ei, Ev(
      l,
      e,
      i,
      a,
      u,
      n
    ), ka = null, (e & 335544064) === e ? (Ia = Td(l), a = 10262) : (Ia = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, Id(on, function() {
      return Vf(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), ic = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = M.T, M.T = null, u = j.p, j.p = 2, n = tl, tl |= 4;
      try {
        Qd(l, t, e);
      } finally {
        tl = n, j.p = u, M.T = a;
      }
    }
    El = 1, ic ? Wa = Ey(
      c,
      l.containerInfo,
      Ia,
      Xf,
      jf,
      Fd,
      Zf,
      Vf,
      wd
    ) : (Xf(), jf(), Zf());
  }
  function wd(l) {
    if (El !== 0) {
      var t = Vt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function Fd() {
    El === 3 && (El = 0, C0(Ea, Vt), El = 4);
  }
  function Xf() {
    if (El === 1) {
      El = 0;
      var l = Vt, t = Ea, e = ee, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = M.T, M.T = null;
        var u = j.p;
        j.p = 2;
        var n = tl;
        tl |= 4;
        try {
          xu = oc = !1, D0(t, l, e), e = lm;
          var c = zo(l.containerInfo), i = e.focusedElem, m = e.selectionRange;
          if (c !== i && i && i.ownerDocument && No(
            i.ownerDocument.documentElement,
            i
          )) {
            if (m !== null && vi(i)) {
              var d = m.start, g = m.end;
              if (g === void 0 && (g = d), "selectionStart" in i)
                i.selectionStart = d, i.selectionEnd = Math.min(
                  g,
                  i.value.length
                );
              else {
                var b = i.ownerDocument || document, r = b && b.defaultView || window;
                if (r.getSelection) {
                  var h = r.getSelection(), z = i.textContent.length, C = Math.min(m.start, z), x = m.end === void 0 ? C : Math.min(m.end, z);
                  !h.extend && C > x && (c = x, x = C, C = c);
                  var v = _o(
                    i,
                    C
                  ), o = _o(
                    i,
                    x
                  );
                  if (v && o && (h.rangeCount !== 1 || h.anchorNode !== v.node || h.anchorOffset !== v.offset || h.focusNode !== o.node || h.focusOffset !== o.offset)) {
                    var y = b.createRange();
                    y.setStart(v.node, v.offset), h.removeAllRanges(), C > x ? (h.addRange(y), h.extend(o.node, o.offset)) : (y.setEnd(o.node, o.offset), h.addRange(y));
                  }
                }
              }
            }
            for (b = [], h = i; h = h.parentNode; )
              h.nodeType === 1 && b.push({
                element: h,
                left: h.scrollLeft,
                top: h.scrollTop
              });
            for (typeof i.focus == "function" && i.focus(), i = 0; i < b.length; i++) {
              var T = b[i];
              T.element.scrollLeft = T.left, T.element.scrollTop = T.top;
            }
          }
          mu = !!Pf, lm = Pf = null;
        } finally {
          tl = n, j.p = u, M.T = a;
        }
      }
      l.current = t, El = 2;
    }
  }
  function jf() {
    if (El === 2) {
      El = 0;
      var l = Vt, t = Ea, e = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || e) {
        e = M.T, M.T = null;
        var a = j.p;
        j.p = 2;
        var u = tl;
        tl |= 4;
        try {
          b0(l, t.alternate, t);
        } finally {
          tl = u, j.p = a, M.T = e;
        }
      }
      El = 3;
    }
  }
  function Zf() {
    if (El === 4 || El === 3) {
      El = 0;
      var l = Wa;
      Wa = null, mv();
      var t = Vt, e = Ea, a = ee, u = B0, n = (a & 335544064) === a ? 10262 : 10256;
      if ((e.subtreeFlags & n) !== 0 || (e.flags & n) !== 0 ? El = 5 : (El = 0, Ea = Vt = null, F0(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (Ve = null), $c(a), e = e.stateNode, ht && typeof ht.onCommitFiberRoot == "function")
        try {
          ht.onCommitFiberRoot(
            ru,
            e,
            void 0,
            (e.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        e = M.T, n = j.p, j.p = 2, M.T = null;
        try {
          for (var c = t.onRecoverableError, i = 0; i < u.length; i++) {
            var m = u[i];
            c(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          M.T = e, j.p = n;
        }
      }
      if (u = ka, c = Ia, Ia = null, u !== null && (ka = null, c === null && (c = []), l !== null))
        for (m = 0; m < u.length; m++)
          e = (0, u[m])(
            c
          ), e !== void 0 && l.finished.finally(e);
      (ee & 3) !== 0 && _c(), ae(t), n = t.pendingLanes, (a & 261930) !== 0 && (n & 42) !== 0 ? t === Ec ? wu++ : (wu = 0, Ec = t) : (wu = 0, Ec = null), Fu(0);
    }
  }
  function F0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Mu(t)));
  }
  function _c() {
    return Wa !== null && (Wa.skipTransition(), Wa = null), Xf(), jf(), Zf(), Vf();
  }
  function Vf() {
    if (El !== 5) return !1;
    var l = Vt, t = Yf;
    Yf = 0;
    var e = $c(ee), a = M.T, u = j.p;
    try {
      j.p = 32 > e ? 32 : e, M.T = null, e = Bf, Bf = null;
      var n = Vt, c = ee;
      if (El = 0, Ea = Vt = null, ee = 0, (tl & 6) !== 0) throw Error(E(331));
      var i = tl;
      if (tl |= 4, H0(n.current), U0(
        n,
        n.current,
        c,
        e
      ), tl = i, Fu(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function")
        try {
          ht.onPostCommitFiberRoot(ru, n);
        } catch {
        }
      return !0;
    } finally {
      j.p = u, M.T = a, F0(l, t);
    }
  }
  function $0(l, t, e) {
    t = Ut(e, t), t = uf(l.stateNode, t, 2), l = qe(l, t, 2), l !== null && (du(l, 2), ae(l));
  }
  function cl(l, t, e) {
    if (l.tag === 3)
      $0(l, l, e);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          $0(
            t,
            l,
            e
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (Ve === null || !Ve.has(a))) {
            l = Ut(e, l), e = Ks(2), a = qe(t, e, 2), a !== null && (Js(
              e,
              a,
              t,
              l
            ), du(a, 2), ae(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function xf(l, t, e) {
    var a = l.pingCache;
    if (a === null) {
      a = l.pingCache = new Zd();
      var u = /* @__PURE__ */ new Set();
      a.set(t, u);
    } else
      u = a.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), a.set(t, u));
    u.has(e) || (Hf = !0, u.add(e), l = $d.bind(null, l, t, e), t.then(l, l));
  }
  function $d(l, t, e) {
    var a = l.pingCache;
    a !== null && a.delete(t), l.pingedLanes |= l.suspendedLanes & e, l.warmLanes &= ~e, ol === l && ($ & e) === e && ((bl === 4 || bl === 3 && ($ & 62914560) === $ && 300 > yt() - yc) && (tl & 2) === 0 ? lu(l, 0) : dc |= e, $a === $ && ($a = 0)), ae(l);
  }
  function W0(l, t) {
    t === 0 && (t = qm()), l = ea(l, t), l !== null && (du(l, t), ae(l));
  }
  function Wd(l) {
    var t = l.memoizedState, e = 0;
    t !== null && (e = t.retryLane), W0(l, e);
  }
  function kd(l, t) {
    var e = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var a = l.stateNode, u = l.memoizedState;
        u !== null && (e = u.retryLane);
        break;
      case 19:
        a = l.stateNode;
        break;
      case 22:
        a = l.stateNode._retryCache;
        break;
      default:
        throw Error(E(314));
    }
    a !== null && a.delete(t), W0(l, e);
  }
  function Id(l, t) {
    return Kc(l, t);
  }
  var eu = null, au = null, Lf = !1, Nc = !1, Kf = !1, Le = 0;
  function ae(l) {
    l !== au && l.next === null && (au === null ? eu = au = l : au = au.next = l), Nc = !0, Lf || (Lf = !0, ly());
  }
  function Fu(l, t) {
    if (!Kf && Nc) {
      Kf = !0;
      do
        for (var e = !1, a = eu; a !== null; ) {
          if (l !== 0) {
            var u = a.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = a.suspendedLanes, i = a.pingedLanes;
              n = (1 << 31 - gt(42 | l) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (e = !0, lr(a, n));
          } else
            n = $, n = dn(
              a,
              a === ol ? n : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (n & 3) === 0 || vu(a, n) || (e = !0, lr(a, n));
          a = a.next;
        }
      while (e);
      Kf = !1;
    }
  }
  function Pd() {
    k0();
  }
  function k0() {
    Nc = Lf = !1;
    var l = 0;
    Le !== 0 && sy() && (l = Le);
    for (var t = yt(), e = null, a = eu; a !== null; ) {
      var u = a.next, n = I0(a, t);
      n === 0 ? (a.next = null, e === null ? eu = u : e.next = u, u === null && (au = e)) : (e = a, (l !== 0 || (n & 3) !== 0) && (Nc = !0)), a = u;
    }
    El !== 0 && El !== 5 || Fu(l), Le !== 0 && (Le = 0);
  }
  function I0(l, t) {
    for (var e = l.suspendedLanes, a = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - gt(n), i = 1 << c, m = u[c];
      m === -1 ? ((i & e) === 0 || (i & a) !== 0) && (u[c] = gv(i, t)) : m <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = ol, e = $, e = dn(
      l,
      l === t ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a = l.callbackNode, e === 0 || l === t && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null)
      return a !== null && a !== null && Jc(a), l.callbackNode = null, l.callbackPriority = 0;
    if ((e & 3) === 0 || vu(l, e)) {
      if (t = e & -e, t === l.callbackPriority) return t;
      switch (a !== null && Jc(a), $c(e)) {
        case 2:
        case 8:
          e = Rm;
          break;
        case 32:
          e = on;
          break;
        case 268435456:
          e = pm;
          break;
        default:
          e = on;
      }
      return a = P0.bind(null, l), e = Kc(e, a), l.callbackPriority = t, l.callbackNode = e, t;
    }
    return a !== null && a !== null && Jc(a), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function P0(l, t) {
    if (El !== 0 && El !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var e = l.callbackNode;
    if (_c() && l.callbackNode !== e)
      return null;
    var a = $;
    return a = dn(
      l,
      l === ol ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), a === 0 ? null : (Q0(l, a, t), I0(l, yt()), l.callbackNode != null && l.callbackNode === e ? P0.bind(null, l) : null);
  }
  function lr(l, t) {
    if (_c()) return null;
    Q0(l, t, !0);
  }
  function ly() {
    vy(function() {
      (tl & 6) !== 0 ? Kc(
        Um,
        Pd
      ) : k0();
    });
  }
  function Jf() {
    if (Le === 0) {
      var l = fa;
      l === 0 && (l = sn, sn <<= 1, (sn & 261888) === 0 && (sn = 256)), Le = l;
    }
    return Le;
  }
  function tr(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Sn(l);
  }
  function ty(l, t, e, a, u) {
    if (t === "submit" && e && e.stateNode === u) {
      var n = tr(
        (u[nt] || null).action
      ), c = a.submitter;
      c && (t = (t = c[nt] || null) ? tr(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var i = new Nn(
        "action",
        "action",
        null,
        a,
        u
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (Le !== 0) {
                  var m = new FormData(u, c);
                  Pi(
                    e,
                    {
                      pending: !0,
                      data: m,
                      method: u.method,
                      action: n
                    },
                    null,
                    m
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), m = new FormData(u, c), Pi(
                  e,
                  {
                    pending: !0,
                    data: m,
                    method: u.method,
                    action: n
                  },
                  n,
                  m
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var wf = 0; wf < gi.length; wf++) {
    var Ff = gi[wf], ey = Ff.toLowerCase(), ay = Ff[0].toUpperCase() + Ff.slice(1);
    Qt(
      ey,
      "on" + ay
    );
  }
  Qt(Do, "onAnimationEnd"), Qt(Mo, "onAnimationIteration"), Qt(Co, "onAnimationStart"), Qt("dblclick", "onDoubleClick"), Qt("focusin", "onFocus"), Qt("focusout", "onBlur"), Qt(rd, "onTransitionRun"), Qt(vd, "onTransitionStart"), Qt(dd, "onTransitionCancel"), Qt(Uo, "onTransitionEnd"), Oa("onMouseEnter", ["mouseout", "mouseover"]), Oa("onMouseLeave", ["mouseout", "mouseover"]), Oa("onPointerEnter", ["pointerout", "pointerover"]), Oa("onPointerLeave", ["pointerout", "pointerover"]), Pe(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Pe(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Pe("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Pe(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Pe(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Pe(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var $u = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), uy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat($u)
  );
  function er(l, t) {
    t = (t & 4) !== 0;
    for (var e = 0; e < l.length; e++) {
      var a = l[e], u = a.event;
      a = a.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var i = a[c], m = i.instance, d = i.currentTarget;
            if (i = i.listener, m !== n && u.isPropagationStopped())
              break l;
            n = i, u.currentTarget = d;
            try {
              n(u);
            } catch (g) {
              An(g);
            }
            u.currentTarget = null, n = m;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (i = a[c], m = i.instance, d = i.currentTarget, i = i.listener, m !== n && u.isPropagationStopped())
              break l;
            n = i, u.currentTarget = d;
            try {
              n(u);
            } catch (g) {
              An(g);
            }
            u.currentTarget = null, n = m;
          }
      }
    }
  }
  function F(l, t) {
    var e = t[jm];
    e === void 0 && (e = t[jm] = /* @__PURE__ */ new Set());
    var a = l + "__bubble";
    e.has(a) || (ar(t, l, 2, !1), e.add(a));
  }
  function $f(l, t, e) {
    var a = 0;
    t && (a |= 4), ar(
      e,
      l,
      a,
      t
    );
  }
  var zc = "_reactListening" + Math.random().toString(36).slice(2);
  function Wf(l) {
    if (!l[zc]) {
      l[zc] = !0, xm.forEach(function(e) {
        e !== "selectionchange" && (uy.has(e) || $f(e, !1, l), $f(e, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[zc] || (t[zc] = !0, $f("selectionchange", !1, t));
    }
  }
  function ar(l, t, e, a) {
    switch (Jr(t)) {
      case 2:
        var u = Wy;
        break;
      case 8:
        u = ky;
        break;
      default:
        u = hm;
    }
    e = u.bind(
      null,
      t,
      e,
      l
    ), u = void 0, !ai || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), a ? u !== void 0 ? l.addEventListener(t, e, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, e, !0) : u !== void 0 ? l.addEventListener(t, e, {
      passive: u
    }) : l.addEventListener(t, e, !1);
  }
  function kf(l, t, e, a, u) {
    var n = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      l: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var i = a.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var m = c.tag;
              if ((m === 3 || m === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (c = Ie(i), c === null) return;
            if (m = c.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        a = a.return;
      }
    eo(function() {
      var d = n, g = ti(e), b = [];
      l: {
        var r = Ro.get(l);
        if (r !== void 0) {
          var h = Nn, z = l;
          switch (l) {
            case "keypress":
              if (bn(e) === 0) break l;
            case "keydown":
            case "keyup":
              h = Vv;
              break;
            case "focusin":
              z = "focus", h = ii;
              break;
            case "focusout":
              z = "blur", h = ii;
              break;
            case "beforeblur":
            case "afterblur":
              h = ii;
              break;
            case "click":
              if (e.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = no;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Uv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = wv;
              break;
            case Do:
            case Mo:
            case Co:
              h = Hv;
              break;
            case Uo:
              h = $v;
              break;
            case "scroll":
            case "scrollend":
              h = Mv;
              break;
            case "wheel":
              h = kv;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Yv;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = io;
              break;
            case "submit":
              h = Kv;
              break;
            case "toggle":
            case "beforetoggle":
              h = Pv;
          }
          var C = (t & 4) !== 0, x = !C && (l === "scroll" || l === "scrollend"), v = C ? r !== null ? r + "Capture" : null : r;
          C = [];
          for (var o = d, y; o !== null; ) {
            var T = o;
            if (y = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || y === null || v === null || (T = gu(o, v), T != null && C.push(
              Wu(o, T, y)
            )), x) break;
            o = o.return;
          }
          0 < C.length && (r = new h(
            r,
            z,
            null,
            e,
            g
          ), b.push({ event: r, listeners: C }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", r = l === "mouseout" || l === "pointerout", h && e !== li && (z = e.relatedTarget || e.fromElement) && (Ie(z) || z[_a]))
            break l;
          (r || h) && (z = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, r ? (h = e.relatedTarget || e.toElement, r = d, h = h ? Ie(h) : null, h !== null && (x = ut(h), C = h.tag, h !== x || C !== 5 && C !== 27 && C !== 6) && (h = null)) : (r = null, h = d), r !== h && (C = no, T = "onMouseLeave", v = "onMouseEnter", o = "mouse", (l === "pointerout" || l === "pointerover") && (C = io, T = "onPointerLeave", v = "onPointerEnter", o = "pointer"), x = r == null ? z : hu(r), y = h == null ? z : hu(h), z = new C(
            T,
            o + "leave",
            r,
            e,
            g
          ), z.target = x, z.relatedTarget = y, T = null, Ie(g) === d && (C = new C(
            v,
            o + "enter",
            h,
            e,
            g
          ), C.target = y, C.relatedTarget = x, T = C), x = T, C = r && h ? ql(
            r,
            h,
            ny
          ) : null, r !== null && ur(
            b,
            z,
            r,
            C,
            !1
          ), h !== null && x !== null && ur(
            b,
            x,
            h,
            C,
            !0
          )));
        }
        l: {
          if (r = d ? hu(d) : window, h = r.nodeName && r.nodeName.toLowerCase(), h === "select" || h === "input" && r.type === "file")
            var D = ho;
          else if (vo(r))
            if (go)
              D = md;
            else {
              D = id;
              var W = cd;
            }
          else
            h = r.nodeName, !h || h.toLowerCase() !== "input" || r.type !== "checkbox" && r.type !== "radio" ? d && Pc(d.elementType) && (D = ho) : D = fd;
          if (D && (D = D(l, d))) {
            yo(
              b,
              D,
              e,
              g
            );
            break l;
          }
          W && W(l, r, d);
        }
        switch (W = d ? hu(d) : window, l) {
          case "focusin":
            (vo(W) || W.contentEditable === "true") && (Ra = W, di = d, Ou = null);
            break;
          case "focusout":
            Ou = di = Ra = null;
            break;
          case "mousedown":
            yi = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            yi = !1, Oo(b, e, g);
            break;
          case "selectionchange":
            if (sd) break;
          case "keydown":
          case "keyup":
            Oo(b, e, g);
        }
        var q;
        if (mi)
          l: {
            switch (l) {
              case "compositionstart":
                var X = "onCompositionStart";
                break l;
              case "compositionend":
                X = "onCompositionEnd";
                break l;
              case "compositionupdate":
                X = "onCompositionUpdate";
                break l;
            }
            X = void 0;
          }
        else
          Ua ? so(l, e) && (X = "onCompositionEnd") : l === "keydown" && e.keyCode === 229 && (X = "onCompositionStart");
        X && (fo && e.locale !== "ko" && (Ua || X !== "onCompositionStart" ? X === "onCompositionEnd" && Ua && (q = ao()) : (Oe = g, ui = "value" in Oe ? Oe.value : Oe.textContent, Ua = !0)), W = Oc(d, X), 0 < W.length && (X = new co(
          X,
          l,
          null,
          e,
          g
        ), b.push({ event: X, listeners: W }), q ? X.data = q : (q = ro(e), q !== null && (X.data = q)))), (q = td ? ed(l, e) : ad(l, e)) && (X = Oc(d, "onBeforeInput"), 0 < X.length && (W = new co(
          "onBeforeInput",
          "beforeinput",
          null,
          e,
          g
        ), b.push({
          event: W,
          listeners: X
        }), W.data = q)), ty(
          b,
          l,
          d,
          e,
          g
        );
      }
      er(b, t);
    });
  }
  function Wu(l, t, e) {
    return {
      instance: l,
      listener: t,
      currentTarget: e
    };
  }
  function Oc(l, t) {
    for (var e = t + "Capture", a = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = gu(l, e), u != null && a.unshift(
        Wu(l, u, n)
      ), u = gu(l, t), u != null && a.push(
        Wu(l, u, n)
      )), l.tag === 3) return a;
      l = l.return;
    }
    return [];
  }
  function ny(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ur(l, t, e, a, u) {
    for (var n = t._reactName, c = []; e !== null && e !== a; ) {
      var i = e, m = i.alternate, d = i.stateNode;
      if (i = i.tag, m !== null && m === a) break;
      i !== 5 && i !== 26 && i !== 27 || d === null || (m = d, u ? (d = gu(e, n), d != null && c.unshift(
        Wu(e, d, m)
      )) : u || (d = gu(e, n), d != null && c.push(
        Wu(e, d, m)
      ))), e = e.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var cy = /\r\n?/g, iy = /\u0000|\uFFFD/g;
  function nr(l) {
    return (typeof l == "string" ? l : "" + l).replace(cy, `
`).replace(iy, "");
  }
  function cr(l, t) {
    return t = nr(t), nr(l) === t;
  }
  function il(l, t, e, a, u, n) {
    switch (e) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || Da(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && Da(l, "" + a);
        else return;
        break;
      case "className":
        En(l, "class", a);
        break;
      case "tabIndex":
        En(l, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        En(l, e, a);
        break;
      case "style":
        lo(l, a, n);
        return;
      case "data":
        if (t !== "object") {
          En(l, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || e !== "href")) {
          l.removeAttribute(e);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Sn(a), l.setAttribute(e, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          l.setAttribute(
            e,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (e === "formAction" ? (t !== "input" && il(l, t, "name", u.name, u, null), il(
            l,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), il(
            l,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), il(
            l,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (il(l, t, "encType", u.encType, u, null), il(l, t, "method", u.method, u, null), il(l, t, "target", u.target, u, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          l.removeAttribute(e);
          break;
        }
        a = Sn(a), l.setAttribute(e, a);
        break;
      case "onClick":
        a != null && (l.onclick = wt);
        return;
      case "onScroll":
        a != null && F("scroll", l);
        return;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(E(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(E(60));
            n?.__html !== e && (l.innerHTML = e);
          }
        }
        break;
      case "multiple":
        l.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        l.muted = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        e = Sn(a), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          e
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        a && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, "") : l.removeAttribute(e);
        break;
      case "capture":
      case "download":
        a === !0 ? l.setAttribute(e, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? l.setAttribute(e, a) : l.removeAttribute(e);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? l.removeAttribute(e) : l.setAttribute(e, a);
        break;
      case "popover":
        F("beforetoggle", l), F("toggle", l), gn(l, "popover", a);
        break;
      case "xlinkActuate":
        ie(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        ie(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        ie(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        ie(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        ie(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        ie(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        ie(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        ie(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        ie(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        gn(l, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < e.length) || e[0] !== "o" && e[0] !== "O" || e[1] !== "n" && e[1] !== "N")
          e = Av.get(e) || e, gn(l, e, a);
        else return;
    }
    ll = !0;
  }
  function If(l, t, e, a, u, n) {
    switch (e) {
      case "style":
        lo(l, a, n);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(E(61));
          if (e = a.__html, e != null) {
            if (u.children != null) throw Error(E(60));
            n?.__html !== e && (l.innerHTML = e);
          }
        }
        break;
      case "children":
        if (typeof a == "string") Da(l, a);
        else if (typeof a == "number" || typeof a == "bigint")
          Da(l, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && F("scroll", l);
        return;
      case "onScrollEnd":
        a != null && F("scrollend", l);
        return;
      case "onClick":
        a != null && (l.onclick = wt);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Lm.hasOwnProperty(e))
          l: {
            if (e[0] === "o" && e[1] === "n" && (u = e.endsWith("Capture"), n = e.slice(2, u ? e.length - 7 : void 0), t = l[nt] || null, t = t != null ? t[e] : null, typeof t == "function" && l.removeEventListener(n, t, u), typeof a == "function")) {
              typeof t != "function" && t !== null && (e in l ? l[e] = null : l.hasAttribute(e) && l.removeAttribute(e)), l.addEventListener(n, a, u);
              break l;
            }
            ll = !0, e in l ? l[e] = a : a === !0 ? l.setAttribute(e, "") : gn(l, e, a);
          }
        return;
    }
    ll = !0;
  }
  function Jl(l, t, e) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        F("error", l), F("load", l);
        var a = !1, u = !1, n;
        for (n in e)
          if (e.hasOwnProperty(n)) {
            var c = e[n];
            if (c != null)
              switch (n) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(137, t));
                default:
                  il(l, t, n, c, e, null);
              }
          }
        u && il(l, t, "srcSet", e.srcSet, e, null), a && il(l, t, "src", e.src, e, null);
        return;
      case "input":
        F("invalid", l);
        var i = n = c = u = null, m = null, d = null;
        for (a in e)
          if (e.hasOwnProperty(a)) {
            var g = e[a];
            if (g != null)
              switch (a) {
                case "name":
                  u = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  m = g;
                  break;
                case "defaultChecked":
                  d = g;
                  break;
                case "value":
                  n = g;
                  break;
                case "defaultValue":
                  i = g;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (g != null)
                    throw Error(E(137, t));
                  break;
                default:
                  il(l, t, a, g, e, null);
              }
          }
        Wm(
          l,
          n,
          i,
          m,
          d,
          c,
          u,
          !1
        );
        return;
      case "select":
        F("invalid", l), a = c = n = null;
        for (u in e)
          if (e.hasOwnProperty(u) && (i = e[u], i != null))
            switch (u) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                a = i;
              default:
                il(l, t, u, i, e, null);
            }
        t = n, e = c, l.multiple = !!a, t != null ? Aa(l, !!a, t, !1) : e != null && Aa(l, !!a, e, !0);
        return;
      case "textarea":
        F("invalid", l), n = u = a = null;
        for (c in e)
          if (e.hasOwnProperty(c) && (i = e[c], i != null))
            switch (c) {
              case "value":
                a = i;
                break;
              case "defaultValue":
                u = i;
                break;
              case "children":
                n = i;
                break;
              case "dangerouslySetInnerHTML":
                if (i != null) throw Error(E(91));
                break;
              default:
                il(l, t, c, i, e, null);
            }
        Im(l, a, u, n);
        return;
      case "option":
        for (m in e)
          e.hasOwnProperty(m) && (a = e[m], a != null) && (m === "selected" ? l.selected = a && typeof a != "function" && typeof a != "symbol" : il(l, t, m, a, e, null));
        return;
      case "dialog":
        F("beforetoggle", l), F("toggle", l), F("cancel", l), F("close", l);
        break;
      case "iframe":
      case "object":
        F("load", l);
        break;
      case "video":
      case "audio":
        for (a = 0; a < $u.length; a++)
          F($u[a], l);
        break;
      case "image":
        F("error", l), F("load", l);
        break;
      case "details":
        F("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        F("error", l), F("load", l);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (d in e)
          if (e.hasOwnProperty(d) && (a = e[d], a != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(E(137, t));
              default:
                il(l, t, d, a, e, null);
            }
        return;
      default:
        if (Pc(t)) {
          for (g in e)
            e.hasOwnProperty(g) && (a = e[g], a !== void 0 && If(
              l,
              t,
              g,
              a,
              e,
              void 0
            ));
          return;
        }
    }
    for (i in e)
      e.hasOwnProperty(i) && (a = e[i], a != null && il(l, t, i, a, e, null));
  }
  var fy = {};
  function my(l, t, e, a) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var u = null, n = null, c = null, i = null, m = null, d = null, g = null;
        for (h in e) {
          var b = e[h];
          if (e.hasOwnProperty(h) && b != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = b;
              default:
                a.hasOwnProperty(h) || il(l, t, h, null, a, b);
            }
        }
        for (var r in a) {
          var h = a[r];
          if (b = e[r], a.hasOwnProperty(r) && (h != null || b != null))
            switch (r) {
              case "type":
                h !== b && (ll = !0), n = h;
                break;
              case "name":
                h !== b && (ll = !0), u = h;
                break;
              case "checked":
                h !== b && (ll = !0), d = h;
                break;
              case "defaultChecked":
                h !== b && (ll = !0), g = h;
                break;
              case "value":
                h !== b && (ll = !0), c = h;
                break;
              case "defaultValue":
                h !== b && (ll = !0), i = h;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (h != null)
                  throw Error(E(137, t));
                break;
              default:
                h !== b && il(
                  l,
                  t,
                  r,
                  h,
                  a,
                  b
                );
            }
        }
        kc(
          l,
          c,
          i,
          m,
          d,
          g,
          n,
          u
        );
        return;
      case "select":
        h = c = i = r = null;
        for (n in e)
          if (m = e[n], e.hasOwnProperty(n) && m != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = m;
              default:
                a.hasOwnProperty(n) || il(
                  l,
                  t,
                  n,
                  null,
                  a,
                  m
                );
            }
        for (u in a)
          if (n = a[u], m = e[u], a.hasOwnProperty(u) && (n != null || m != null))
            switch (u) {
              case "value":
                n !== m && (ll = !0), r = n;
                break;
              case "defaultValue":
                n !== m && (ll = !0), i = n;
                break;
              case "multiple":
                n !== m && (ll = !0), c = n;
              default:
                n !== m && il(
                  l,
                  t,
                  u,
                  n,
                  a,
                  m
                );
            }
        t = i, e = c, a = h, r != null ? Aa(l, !!e, r, !1) : !!a != !!e && (t != null ? Aa(l, !!e, t, !0) : Aa(l, !!e, e ? [] : "", !1));
        return;
      case "textarea":
        h = r = null;
        for (i in e)
          if (u = e[i], e.hasOwnProperty(i) && u != null && !a.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, i, null, a, u);
            }
        for (c in a)
          if (u = a[c], n = e[c], a.hasOwnProperty(c) && (u != null || n != null))
            switch (c) {
              case "value":
                u !== n && (ll = !0), r = u;
                break;
              case "defaultValue":
                u !== n && (ll = !0), h = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(E(91));
                break;
              default:
                u !== n && il(l, t, c, u, a, n);
            }
        km(l, r, h);
        return;
      case "option":
        for (var z in e)
          r = e[z], e.hasOwnProperty(z) && r != null && !a.hasOwnProperty(z) && (z === "selected" ? l.selected = !1 : il(
            l,
            t,
            z,
            null,
            a,
            r
          ));
        for (m in a)
          r = a[m], h = e[m], a.hasOwnProperty(m) && r !== h && (r != null || h != null) && (m === "selected" ? (r !== h && (ll = !0), l.selected = r && typeof r != "function" && typeof r != "symbol") : il(
            l,
            t,
            m,
            r,
            a,
            h
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var C in e)
          r = e[C], e.hasOwnProperty(C) && r != null && !a.hasOwnProperty(C) && il(l, t, C, null, a, r);
        for (d in a)
          if (r = a[d], h = e[d], a.hasOwnProperty(d) && r !== h && (r != null || h != null))
            switch (d) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (r != null)
                  throw Error(E(137, t));
                break;
              default:
                il(
                  l,
                  t,
                  d,
                  r,
                  a,
                  h
                );
            }
        return;
      default:
        if (Pc(t)) {
          for (var x in e)
            r = e[x], e.hasOwnProperty(x) && r !== void 0 && !a.hasOwnProperty(x) && If(
              l,
              t,
              x,
              void 0,
              a,
              r
            );
          for (g in a)
            r = a[g], h = e[g], !a.hasOwnProperty(g) || r === h || r === void 0 && h === void 0 || If(
              l,
              t,
              g,
              r,
              a,
              h
            );
          return;
        }
    }
    for (var v in e)
      r = e[v], e.hasOwnProperty(v) && r != null && !a.hasOwnProperty(v) && il(l, t, v, null, a, r);
    for (b in a)
      r = a[b], h = e[b], !a.hasOwnProperty(b) || r === h || r == null && h == null || il(l, t, b, r, a, h);
  }
  function ir(l) {
    switch (l) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function oy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, e = performance.getEntriesByType("resource"), a = 0; a < e.length; a++) {
        var u = e[a], n = u.transferSize, c = u.initiatorType, i = u.duration;
        if (n && i && ir(c)) {
          for (c = 0, i = u.responseEnd, a += 1; a < e.length; a++) {
            var m = e[a], d = m.startTime;
            if (d > i) break;
            var g = m.transferSize, b = m.initiatorType;
            g && ir(b) && (m = m.responseEnd, c += g * (m < i ? 1 : (i - d) / (m - d)));
          }
          if (--a, t += 8 * (n + c) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var Pf = null, lm = null;
  function ku(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function fr(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function mr(l, t) {
    if (l === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return l === 1 && t === "foreignObject" ? 0 : l;
  }
  function or(l, t, e, a) {
    return e = ku(
      e
    ).createElement(l), e[Zl] = a, e[nt] = t, Jl(e, l, t), Yl(e), e;
  }
  function tm(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var em = null;
  function sy() {
    var l = window.event;
    return l && l.type === "popstate" ? l === em ? !1 : (em = l, !0) : (em = null, !1);
  }
  var am = typeof setTimeout == "function" ? setTimeout : void 0, ry = typeof clearTimeout == "function" ? clearTimeout : void 0, sr = typeof Promise == "function" ? Promise : void 0, rr = typeof requestAnimationFrame == "function" ? requestAnimationFrame : am, vy = typeof queueMicrotask == "function" ? queueMicrotask : typeof sr < "u" ? function(l) {
    return sr.resolve(null).then(l).catch(dy);
  } : am;
  function dy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ke(l) {
    return l === "head";
  }
  function vr(l, t) {
    var e = t, a = 0;
    do {
      var u = e.nextSibling;
      if (l.removeChild(e), u && u.nodeType === 8)
        if (e = u.data, e === "/$" || e === "/&") {
          if (a === 0) {
            l.removeChild(u), ou(t);
            return;
          }
          a--;
        } else if (e === "$" || e === "$?" || e === "$~" || e === "$!" || e === "&")
          a++;
        else if (e === "html")
          sm(
            l.ownerDocument.documentElement
          );
        else if (e === "head") {
          e = l.ownerDocument.head, sm(e);
          for (var n = e.firstChild; n; ) {
            var c = n.nextSibling, i = n.nodeName;
            n[yu] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || e.removeChild(n), n = c;
          }
        } else
          e === "body" && sm(l.ownerDocument.body);
      e = u;
    } while (e);
    ou(t);
  }
  function dr(l, t) {
    var e = l;
    l = 0;
    do {
      var a = e.nextSibling;
      if (e.nodeType === 1 ? t ? (e._stashedDisplay = e.style.display, e.style.display = "none") : (e.style.display = e._stashedDisplay || "", e.getAttribute("style") === "" && e.removeAttribute("style")) : e.nodeType === 3 && (t ? (e._stashedText = e.nodeValue, e.nodeValue = "") : e.nodeValue = e._stashedText || ""), a && a.nodeType === 8)
        if (e = a.data, e === "/$") {
          if (l === 0) break;
          l--;
        } else
          e !== "$" && e !== "$?" && e !== "$~" && e !== "$!" || l++;
      e = a;
    } while (e);
  }
  function yr(l, t, e) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, e != null && (l.style.viewTransitionClass = e), e = getComputedStyle(l), e.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var a = 1;
      else
        for (var u = a = 0; u < t.length; u++) {
          var n = t[u];
          0 < n.width && 0 < n.height && a++;
        }
      a === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + e.paddingTop, l.marginBottom = "-" + e.paddingBottom);
    }
  }
  function hr(l, t) {
    l = l.style, t = t.style;
    var e = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), e = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = e == null || typeof e == "boolean" ? "" : ("" + e).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (e = t.display, l.display = e == null || typeof e == "boolean" ? "" : e, e = t.margin, e != null ? l.margin = e : (e = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = e == null || typeof e == "boolean" ? "" : e, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function yy(l, t, e) {
    return e = e.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= e.innerHeight && l.left <= e.innerWidth
    };
  }
  function um(l) {
    var t = l.getBoundingClientRect(), e = getComputedStyle(l);
    return yy(t, e, l);
  }
  function hy(l) {
    return l.documentElement.clientHeight;
  }
  function gy(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function Ey(l, t, e, a, u, n, c, i, m) {
    var d = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var g = d.startViewTransition({
        update: function() {
          var r = d.defaultView, h = r.navigation && r.navigation.transition, z = d.fonts.status;
          a();
          var C = [];
          if (z === "loaded" && (hy(d), d.fonts.status === "loading" && C.push(d.fonts.ready)), z = C.length, l !== null)
            for (var x = l.suspenseyImages, v = 0, o = 0; o < x.length; o++) {
              var y = x[o];
              if (!y.complete) {
                var T = y.getBoundingClientRect();
                if (0 < T.bottom && 0 < T.right && T.top < r.innerHeight && T.left < r.innerWidth) {
                  if (v += Gr(y), v > Mc) {
                    C.length = z;
                    break;
                  }
                  y = new Promise(
                    gy.bind(y)
                  ), C.push(y);
                }
              }
            }
          if (0 < C.length)
            return r = Promise.race([
              Promise.all(C),
              new Promise(function(D) {
                return setTimeout(D, 500);
              })
            ]).then(u, u), (h ? Promise.allSettled([h.finished, r]) : r).then(n, n);
          if (u(), h)
            return h.finished.then(
              n,
              n
            );
          n();
        },
        types: e
      });
      d.__reactViewTransition = g;
      var b = [];
      return g.ready.then(
        function() {
          for (var r = d.documentElement.getAnimations({
            subtree: !0
          }), h = 0; h < r.length; h++) {
            var z = r[h], C = z.effect, x = C.pseudoElement;
            if (x != null && x.startsWith("::view-transition")) {
              b.push(z), z = C.getKeyframes();
              for (var v = x = void 0, o = !0, y = 0; y < z.length; y++) {
                var T = z[y], D = T.width;
                if (x === void 0) x = D;
                else if (x !== D) {
                  o = !1;
                  break;
                }
                if (D = T.height, v === void 0) v = D;
                else if (v !== D) {
                  o = !1;
                  break;
                }
                delete T.width, delete T.height, T.transform === "none" && delete T.transform;
              }
              o && x !== void 0 && v !== void 0 && (C.setKeyframes(z), o = getComputedStyle(
                C.target,
                C.pseudoElement
              ), o.width !== x || o.height !== v) && (o = z[0], o.width = x, o.height = v, o = z[z.length - 1], o.width = x, o.height = v, C.setKeyframes(z));
            }
          }
          c();
        },
        function(r) {
          d.__reactViewTransition === g && (d.__reactViewTransition = null);
          try {
            typeof r == "object" && r !== null && r.name === "InvalidStateError" && (r.message === "View transition was skipped because document visibility state is hidden." || r.message === "Skipping view transition because document visibility state has become hidden." || r.message === "Skipping view transition because viewport size changed." || r.message === "Transition was aborted because of invalid state") && (r = null), r !== null && m(r);
          } finally {
            a(), u(), c();
          }
        }
      ), g.finished.finally(function() {
        for (var r = 0; r < b.length; r++)
          b[r].cancel();
        d.__reactViewTransition === g && (d.__reactViewTransition = null), i();
      }), g;
    } catch {
      return a(), u(), c(), null;
    }
  }
  function Sa(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  Sa.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : L({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, Sa.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, e = l.getAnimations({ subtree: !0 }), a = [], u = 0; u < e.length; u++) {
      var n = e[u].effect;
      n !== null && n.target === l && n.pseudoElement === t && a.push(e[u]);
    }
    return a;
  }, Sa.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function gr(l) {
    return {
      name: l,
      group: new Sa("group", l),
      imagePair: new Sa("image-pair", l),
      old: new Sa("old", l),
      new: new Sa("new", l)
    };
  }
  function Ot(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  Ot.prototype.addEventListener = function(l, t, e) {
    var a = null, u = null;
    if (!(e != null && typeof e != "boolean" && (a = e.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (Sr(n, l, t, e) === -1) {
        var c = this, i = t;
        e != null && typeof e != "boolean" && e.once === !0 && (i = function(m) {
          c.removeEventListener(
            l,
            t,
            e
          ), typeof t == "function" ? t.call(this, m) : t.handleEvent(m);
        }), a !== null && (u = c.removeEventListener.bind(
          c,
          l,
          t,
          e
        ), a.addEventListener("abort", u, { once: !0 }), u = a.removeEventListener.bind(a, "abort", u)), a = uu(e), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: e,
          attachedListener: i,
          cleanup: u
        }), S(
          this._fragmentFiber.child,
          !1,
          Sy,
          l,
          i,
          a
        );
      }
      this._eventListeners = n;
    }
  };
  function Sy(l, t, e, a) {
    return ul(l).addEventListener(
      t,
      e,
      a
    ), !1;
  }
  Ot.prototype.removeEventListener = function(l, t, e) {
    var a = this._eventListeners;
    if (a !== null && (t = Sr(
      a,
      l,
      t,
      e
    ), t !== -1)) {
      var u = a[t];
      e = u.attachedListener;
      var n = u.cleanup;
      u = uu(u.optionsOrUseCapture), S(
        this._fragmentFiber.child,
        !1,
        Ty,
        l,
        e,
        u
      ), a.splice(t, 1), n !== null && n();
    }
  };
  function Ty(l, t, e, a) {
    return ul(l).removeEventListener(
      t,
      e,
      a
    ), !1;
  }
  function uu(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function Er(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function Sr(l, t, e, a) {
    if (l.length === 0) return -1;
    a = Er(a);
    for (var u = 0; u < l.length; u++) {
      var n = l[u];
      if (n.type === t && n.listener === e && Er(n.optionsOrUseCapture) === a)
        return u;
    }
    return -1;
  }
  Ot.prototype.dispatchEvent = function(l) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = ul(t);
    var e = this._eventListeners;
    if (e !== null && 0 < e.length || !l.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (e)
        for (var u = 0; u < e.length; u++) {
          var n = e[u];
          a.addEventListener(
            n.type,
            n.attachedListener,
            uu(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), l = a.dispatchEvent(l), e)
        for (u = 0; u < e.length; u++)
          n = e[u], a.removeEventListener(
            n.type,
            n.attachedListener,
            uu(n.optionsOrUseCapture)
          );
      return t.removeChild(a), l;
    }
    return t.dispatchEvent(l);
  }, Ot.prototype.focus = function(l) {
    S(
      this._fragmentFiber.child,
      !0,
      Tr,
      l,
      void 0,
      void 0
    );
  };
  function Tr(l, t) {
    return l.tag === 6 ? !1 : (l = ul(l), py(l, t));
  }
  Ot.prototype.focusLast = function(l) {
    var t = [];
    S(
      this._fragmentFiber.child,
      !0,
      nm,
      t,
      void 0,
      void 0
    );
    for (var e = t.length - 1; 0 <= e && !Tr(t[e], l); e--) ;
  };
  function nm(l, t) {
    return t.push(l), !1;
  }
  Ot.prototype.blur = function() {
    var l = B(
      this._fragmentFiber
    );
    l !== null && (l = ul(l), l = ku(l).activeElement, l !== null && S(
      this._fragmentFiber.child,
      !1,
      by,
      l,
      void 0,
      void 0
    ));
  };
  function by(l, t) {
    return l.tag === 6 ? !1 : (l = ul(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  Ot.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), S(
      this._fragmentFiber.child,
      !1,
      _y,
      l,
      void 0,
      void 0
    );
  };
  function _y(l, t) {
    return l.tag === 6 || (l = ul(l), t.observe(l)), !1;
  }
  Ot.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), S(
        this._fragmentFiber.child,
        !1,
        Ny,
        l,
        void 0,
        void 0
      );
      for (var e = t = 0; e < xt.length; e++) {
        var a = xt[e];
        a.fragmentInstance === this && a.observer === l ? l.unobserve(a.instance) : xt[t++] = a;
      }
      xt.length = t;
    }
  };
  function Ny(l, t) {
    return l.tag === 6 || (l = ul(l), t.unobserve(l)), !1;
  }
  var xt = [], cm = !1;
  function zy(l, t, e) {
    xt.push({
      fragmentInstance: l,
      observer: t,
      instance: e
    }), cm || (cm = !0, Hy(function() {
      cm = !1;
      var a = xt;
      xt = [];
      for (var u = 0; u < a.length; u++) {
        var n = a[u];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  Ot.prototype.getClientRects = function() {
    var l = [];
    return S(
      this._fragmentFiber.child,
      !1,
      Oy,
      l,
      void 0,
      void 0
    ), l;
  };
  function Oy(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var e = l.ownerDocument.createRange();
      e.selectNodeContents(l), t.push.apply(t, e.getClientRects());
    } else
      l = ul(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  Ot.prototype.getRootNode = function(l) {
    var t = B(
      this._fragmentFiber
    );
    return t === null ? this : ul(t).getRootNode(l);
  }, Ot.prototype.compareDocumentPosition = function(l) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var e = [];
    S(
      this._fragmentFiber.child,
      !1,
      nm,
      e,
      void 0,
      void 0
    );
    var a = ul(t);
    if (e.length === 0) {
      if (e = a, Sl(this._fragmentFiber)) {
        l: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break l;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (e = t);
      }
      t = this._fragmentFiber;
      var u = a = e.compareDocumentPosition(l);
      return e === l ? u = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (e = hl(t)[1], e === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (l = ul(e).compareDocumentPosition(
        l
      ), u = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = ul(e[0]), u = ul(e[e.length - 1]);
    var n = Sl(this._fragmentFiber) ? t.parentElement : a;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = t.compareDocumentPosition(l), i = u.compareDocumentPosition(l), m = c & Node.DOCUMENT_POSITION_CONTAINED_BY || i & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return i = a && n && c & Node.DOCUMENT_POSITION_FOLLOWING && i & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === l || n && u === l || m || i ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === l || !n && u === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Ay(
      t,
      this._fragmentFiber,
      e[0],
      e[e.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Ay(l, t, e, a, u) {
    var n = Ie(u);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (e = !!n)
        l: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === t || n.alternate === t)) {
              e = !0;
              break l;
            }
            n = n.return;
          }
          e = !1;
        }
      return e;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return n = u.ownerDocument, u === n || u === n.documentElement || u === n.body;
      l: {
        for (n = t, t = B(t); n !== null; ) {
          if (!(n.tag !== 5 && n.tag !== 3 && n.tag !== 27 || n !== t && n.alternate !== t)) {
            n = !0;
            break l;
          }
          n = n.return;
        }
        n = !1;
      }
      return n;
    }
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === e) && (t = ql(
      e,
      n,
      rt
    ), t === null ? t = !1 : (S(
      t,
      !0,
      Dt,
      n,
      e
    ), n = Rl, Rl = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === a) && (t = ql(
      a,
      n,
      rt
    ), t === null ? t = !1 : (S(
      t,
      !0,
      Xl,
      n,
      a
    ), n = Rl, J = Rl = null, t = n !== null)), t) : !1;
  }
  function br(l, t) {
    var e = l.ownerDocument.createRange();
    e.selectNodeContents(l), l = e.getBoundingClientRect(), window.scrollTo(
      window.scrollX + l.left,
      t ? window.scrollY + l.top : window.scrollY + l.bottom - window.innerHeight
    );
  }
  Ot.prototype.scrollIntoView = function(l) {
    if (typeof l == "object") throw Error(E(566));
    var t = [];
    S(
      this._fragmentFiber.child,
      !1,
      nm,
      t,
      void 0,
      void 0
    );
    var e = l !== !1;
    if (t.length === 0) {
      var a = hl(
        this._fragmentFiber
      );
      if (a = e ? a[1] || a[0] || B(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        l = ul(a), br(l, e);
        return;
      }
      if (a = ul(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          e = "host" in a ? a.host : null, e !== null && e.scrollIntoView(l);
          return;
        }
        a.scrollIntoView(l);
      }
    }
    for (a = e ? t.length - 1 : 0; a !== (e ? -1 : t.length); ) {
      var u = t[a];
      u.tag === 6 ? (u = ul(u), br(u, e)) : ul(u).scrollIntoView(l), a += e ? -1 : 1;
    }
  };
  function Dy(l, t) {
    return l = ul(l), _r(l, t), !1;
  }
  function _r(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function Nr(l, t) {
    var e = t._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a];
        l.addEventListener(
          u.type,
          u.attachedListener,
          uu(u.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (e = t._observers, e !== null && e.forEach(function(n) {
      for (var c = 0, i = 0; i < xt.length; i++) {
        var m = xt[i];
        (m.fragmentInstance !== t || m.observer !== n || m.instance !== l) && (xt[c++] = m);
      }
      xt.length = c, n.observe(l);
    }), _r(l, t));
  }
  function My(l, t) {
    var e = t._eventListeners;
    if (e !== null)
      for (var a = 0; a < e.length; a++) {
        var u = e[a];
        l.removeEventListener(
          u.type,
          u.attachedListener,
          uu(u.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (e = t._observers, e !== null && e.forEach(function(n) {
      typeof n.rootMargin == "string" ? zy(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function im(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var e = t;
      switch (t = t.nextSibling, e.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          im(e), hn(e);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (e.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(e);
    }
  }
  function Cy(l, t, e, a) {
    for (; l.nodeType === 1; ) {
      var u = e;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (a) {
        if (!l[yu])
          switch (t) {
            case "meta":
              if (!l.hasAttribute("itemprop")) break;
              return l;
            case "link":
              if (n = l.getAttribute("rel"), n === "stylesheet" && l.hasAttribute("data-precedence"))
                break;
              if (n !== u.rel || l.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || l.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return l;
            case "style":
              if (l.hasAttribute("data-precedence")) break;
              return l;
            case "script":
              if (n = l.getAttribute("src"), (n !== (u.src == null ? null : u.src) || l.getAttribute("type") !== (u.type == null ? null : u.type) || l.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && n && l.hasAttribute("async") && !l.hasAttribute("itemprop"))
                break;
              return l;
            default:
              return l;
          }
      } else if (t === "input" && l.type === "hidden") {
        var n = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && l.getAttribute("name") === n)
          return l;
      } else return l;
      if (l = Yt(l.nextSibling), l === null) break;
    }
    return null;
  }
  function Uy(l, t, e) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !e || (l = Yt(l.nextSibling), l === null)) return null;
    return l;
  }
  function zr(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Yt(l.nextSibling), l === null)) return null;
    return l;
  }
  function fm(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function mm(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Ry(l, t) {
    var e = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || e.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), e.removeEventListener("DOMContentLoaded", a);
      };
      e.addEventListener("DOMContentLoaded", a), l._reactRetry = a;
    }
  }
  function Yt(l) {
    for (; l != null; l = l.nextSibling) {
      var t = l.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = l.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return l;
  }
  var om = null;
  function Or(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "/$" || e === "/&") {
          if (t === 0)
            return Yt(l.nextSibling);
          t--;
        } else
          e !== "$" && e !== "$!" && e !== "$?" && e !== "$~" && e !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Ar(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var e = l.data;
        if (e === "$" || e === "$!" || e === "$?" || e === "$~" || e === "&") {
          if (t === 0) return l;
          t--;
        } else e !== "/$" && e !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function py(l, t) {
    function e() {
      a = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var a = !1;
    try {
      l.ownerDocument.addEventListener("focus", e, !0), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", e, !0);
    }
    return a;
  }
  function Hy(l) {
    rr(function() {
      rr(function(t) {
        return l(t);
      });
    });
  }
  function Dr(l, t, e) {
    switch (t = ku(e), l) {
      case "html":
        if (l = t.documentElement, !l) throw Error(E(452));
        return l;
      case "head":
        if (l = t.head, !l) throw Error(E(453));
        return l;
      case "body":
        if (l = t.body, !l) throw Error(E(454));
        return l;
      default:
        throw Error(E(451));
    }
  }
  function Mr(l, t, e) {
    for (var a in e) {
      var u = e[a];
      e.hasOwnProperty(a) && u != null && il(l, t, a, null, fy, u);
    }
    e.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === wt && (l.onclick = null), hn(l);
  }
  function sm(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    hn(l);
  }
  var Bt = /* @__PURE__ */ new Map(), Cr = /* @__PURE__ */ new Set();
  function Iu(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var Te = j.d;
  j.d = {
    f: qy,
    r: Yy,
    D: By,
    C: Gy,
    L: Qy,
    m: Xy,
    X: Zy,
    S: jy,
    M: Vy
  };
  function qy() {
    var l = Te.f(), t = Sc();
    return l || t;
  }
  function Yy(l) {
    var t = Na(l);
    t !== null && t.tag === 5 && t.type === "form" ? Rs(t) : Te.r(l);
  }
  var nu = typeof document > "u" ? null : document;
  function Ur(l, t, e) {
    var a = nu;
    if (a && typeof t == "string" && t) {
      var u = Mt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof e == "string" && (u += '[crossorigin="' + e + '"]'), Cr.has(u) || (Cr.add(u), l = { rel: l, crossOrigin: e, href: t }, a.querySelector(u) === null && (t = a.createElement("link"), Jl(t, "link", l), Yl(t), a.head.appendChild(t)));
    }
  }
  function By(l) {
    Te.D(l), Ur("dns-prefetch", l, null);
  }
  function Gy(l, t) {
    Te.C(l, t), Ur("preconnect", l, t);
  }
  function Qy(l, t, e) {
    Te.L(l, t, e);
    var a = nu;
    if (a && l && t) {
      var u = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === "image" && e && e.imageSrcSet ? (u += '[imagesrcset="' + Mt(
        e.imageSrcSet
      ) + '"]', typeof e.imageSizes == "string" && (u += '[imagesizes="' + Mt(
        e.imageSizes
      ) + '"]')) : u += '[href="' + Mt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = cu(l);
          break;
        case "script":
          n = iu(l);
      }
      if (!(Bt.has(n) || (l = L(
        {
          rel: "preload",
          href: t === "image" && e && e.imageSrcSet ? void 0 : l,
          as: t
        },
        e
      ), Bt.set(n, l), a.querySelector(u) !== null || t === "style" && a.querySelector(Pu(n)) || t === "script" && a.querySelector(ln(n))))) {
        var c = a.createElement("link");
        Jl(c, "link", l), t === "style" && (c[yn] = !0, c.onload = c.onerror = function() {
          Vm(c);
        }), Yl(c), a.head.appendChild(c);
      }
    }
  }
  function Xy(l, t) {
    Te.m(l, t);
    var e = nu;
    if (e && l) {
      var a = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Mt(a) + '"][href="' + Mt(l) + '"]', n = u;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = iu(l);
      }
      if (!Bt.has(n) && (l = L({ rel: "modulepreload", href: l }, t), Bt.set(n, l), e.querySelector(u) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (e.querySelector(ln(n)))
              return;
        }
        a = e.createElement("link"), Jl(a, "link", l), Yl(a), e.head.appendChild(a);
      }
    }
  }
  function jy(l, t, e) {
    Te.S(l, t, e);
    var a = nu;
    if (a && l) {
      var u = za(a).hoistableStyles, n = cu(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if (c = a.querySelector(
          Pu(n)
        ))
          i.loading = 5;
        else {
          l = L(
            { rel: "stylesheet", href: l, "data-precedence": t },
            e
          ), (e = Bt.get(n)) && rm(l, e);
          var m = c = a.createElement("link");
          Yl(m), Jl(m, "link", l), m._p = new Promise(function(d, g) {
            m.onload = d, m.onerror = g;
          }), m.addEventListener("load", function() {
            i.loading |= 1;
          }), m.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Ac(c, t, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: i
        }, u.set(n, c);
      }
    }
  }
  function Zy(l, t) {
    Te.X(l, t);
    var e = nu;
    if (e && l) {
      var a = za(e).hoistableScripts, u = iu(l), n = a.get(u);
      n || (n = e.querySelector(ln(u)), n || (l = L({ src: l, async: !0 }, t), (t = Bt.get(u)) && vm(l, t), n = e.createElement("script"), Yl(n), Jl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function Vy(l, t) {
    Te.M(l, t);
    var e = nu;
    if (e && l) {
      var a = za(e).hoistableScripts, u = iu(l), n = a.get(u);
      n || (n = e.querySelector(ln(u)), n || (l = L({ src: l, async: !0, type: "module" }, t), (t = Bt.get(u)) && vm(l, t), n = e.createElement("script"), Yl(n), Jl(n, "link", l), e.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, a.set(u, n));
    }
  }
  function Rr(l, t, e, a) {
    var u = (u = _e.current) ? Iu(u) : null;
    if (!u) throw Error(E(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof e.precedence == "string" && typeof e.href == "string" ? (e = cu(e.href), t = za(
          u
        ).hoistableStyles, a = t.get(e), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (e.rel === "stylesheet" && typeof e.href == "string" && typeof e.precedence == "string") {
          l = cu(e.href);
          var n = za(
            u
          ).hoistableStyles, c = n.get(l);
          if (c || (u = u.ownerDocument || u, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, n.set(l, c), (n = u.querySelector(
            Pu(l)
          )) ? n._p || (c.instance = n, c.state.loading = 5) : (n = Bt.get(l), n || (n = {
            rel: "preload",
            as: "style",
            href: e.href,
            crossOrigin: e.crossOrigin,
            integrity: e.integrity,
            media: e.media,
            hrefLang: e.hrefLang,
            referrerPolicy: e.referrerPolicy
          }, Bt.set(l, n)), xy(
            u,
            l,
            n,
            c.state
          ))), t && a === null)
            throw Error(E(528, ""));
          return c;
        }
        if (t && a !== null)
          throw Error(E(529, ""));
        return null;
      case "script":
        return t = e.async, e = e.src, typeof e == "string" && t && typeof t != "function" && typeof t != "symbol" ? (e = iu(e), t = za(
          u
        ).hoistableScripts, a = t.get(e), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(e, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(E(444, l));
    }
  }
  function cu(l) {
    return 'href="' + Mt(l) + '"';
  }
  function Pu(l) {
    return 'link[rel="stylesheet"][' + l + "]";
  }
  function pr(l) {
    return L({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function xy(l, t, e, a) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[yn] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[yn] = !0, t.onload = t.onerror = Vm.bind(null, t), Jl(t, "link", e), Yl(t), l.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function iu(l) {
    return '[src="' + Mt(l) + '"]';
  }
  function ln(l) {
    return "script[async]" + l;
  }
  function Hr(l, t, e) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = l.querySelector(
            'style[data-href~="' + Mt(e.href) + '"]'
          );
          if (a)
            return t.instance = a, Yl(a), a;
          var u = L({}, e, {
            "data-href": e.href,
            "data-precedence": e.precedence,
            href: null,
            precedence: null
          });
          return a = (l.ownerDocument || l).createElement(
            "style"
          ), Yl(a), Jl(a, "style", u), Ac(a, e.precedence, l), t.instance = a;
        case "stylesheet":
          u = cu(e.href);
          var n = l.querySelector(
            Pu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Yl(n), n;
          a = pr(e), (u = Bt.get(u)) && rm(a, u), n = (l.ownerDocument || l).createElement("link"), Yl(n);
          var c = n;
          return c._p = new Promise(function(i, m) {
            c.onload = i, c.onerror = m;
          }), Jl(n, "link", a), t.state.loading |= 4, Ac(n, e.precedence, l), t.instance = n;
        case "script":
          return n = iu(e.src), (u = l.querySelector(
            ln(n)
          )) ? (t.instance = u, Yl(u), u) : (a = e, (u = Bt.get(n)) && (a = L({}, e), vm(a, u)), l = l.ownerDocument || l, u = l.createElement("script"), Yl(u), Jl(u, "link", a), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(E(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Ac(a, e.precedence, l));
    return t.instance;
  }
  function Ac(l, t, e) {
    for (var a = e.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = a.length ? a[a.length - 1] : null, n = u, c = 0; c < a.length; c++) {
      var i = a[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = e.nodeType === 9 ? e.head : e, t.insertBefore(l, t.firstChild));
  }
  function rm(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function vm(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Dc = null;
  function qr(l, t, e) {
    if (Dc === null) {
      var a = /* @__PURE__ */ new Map(), u = Dc = /* @__PURE__ */ new Map();
      u.set(e, a);
    } else
      u = Dc, a = u.get(e), a || (a = /* @__PURE__ */ new Map(), u.set(e, a));
    if (a.has(l)) return a;
    for (a.set(l, null), e = e.getElementsByTagName(l), u = 0; u < e.length; u++) {
      var n = e[u];
      if (!(n[yu] || n[Zl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = a.get(c);
        i ? i.push(n) : a.set(c, [n]);
      }
    }
    return a;
  }
  function dm(l, t, e) {
    l = l.ownerDocument || l, l.head.insertBefore(
      e,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Ly(l, t, e) {
    if (e === 1 || t.itemProp != null) return !1;
    switch (l) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (l = t.disabled, typeof t.precedence == "string" && l == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Yr(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Br(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Gr(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Qr(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Gr(t), l.suspenseyImages.push(t)), l = wy.bind(l), t.decode().then(l, l));
  }
  function Ky(l, t, e, a) {
    if (e.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (e.state.loading & 4) === 0) {
      if (e.instance === null) {
        var u = cu(a.href), n = t.querySelector(
          Pu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = tn.bind(l), t.then(l, l)), e.state.loading |= 4, e.instance = n, Yl(n);
          return;
        }
        n = t.ownerDocument || t, a = pr(a), (u = Bt.get(u)) && rm(a, u), n = n.createElement("link"), Yl(n);
        var c = n;
        c._p = new Promise(function(i, m) {
          c.onload = i, c.onerror = m;
        }), Jl(n, "link", a), e.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(e, t), (t = e.state.preload) && (e.state.loading & 3) === 0 && (l.count++, e = tn.bind(l), t.addEventListener("load", e), t.addEventListener("error", e));
    }
  }
  var Mc = 0;
  function Jy(l, t) {
    return l.stylesheets && l.count === 0 && Uc(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(e) {
      var a = setTimeout(function() {
        if (l.stylesheets && Uc(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Mc === 0 && (Mc = 62500 * oy());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Uc(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Mc ? 50 : 800) + t
      );
      return l.unsuspend = e, function() {
        l.unsuspend = null, clearTimeout(a), clearTimeout(u);
      };
    } : null;
  }
  function Xr(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Uc(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function tn() {
    this.count--, Xr(this);
  }
  function wy() {
    this.imgCount--, Xr(this);
  }
  var Cc = null;
  function Uc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Cc = /* @__PURE__ */ new Map(), t.forEach(Fy, l), Cc = null, tn.call(l));
  }
  function Fy(l, t) {
    if (!(t.state.loading & 4)) {
      var e = Cc.get(l);
      if (e) var a = e.get(null);
      else {
        e = /* @__PURE__ */ new Map(), Cc.set(l, e);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (e.set(c.dataset.precedence, c), a = c);
        }
        a && e.set(null, a);
      }
      u = t.instance, c = u.getAttribute("data-precedence"), n = e.get(c) || a, n === a && e.set(null, u), e.set(c, u), this.count++, a = tn.bind(this), u.addEventListener("load", a), u.addEventListener("error", a), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var fu = {
    $$typeof: _l,
    Provider: null,
    Consumer: null,
    _currentValue: ne,
    _currentValue2: ne,
    _threadCount: 0
  };
  function $y(l, t, e, a, u, n, c, i, m) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wc(0), this.hiddenUpdates = wc(null), this.identifierPrefix = a, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function jr(l, t, e, a, u, n, c, i, m, d, g, b) {
    return l = new $y(
      l,
      t,
      e,
      c,
      m,
      d,
      g,
      b,
      i
    ), t = 1, n === !0 && (t |= 24), n = ct(3, null, null, t), l.current = n, n.stateNode = l, t = Mi(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: a,
      isDehydrated: e,
      cache: t
    }, pi(n), l;
  }
  function Zr(l) {
    return l ? (l = qa, l) : qa;
  }
  function Vr(l, t, e, a, u, n) {
    u = Zr(u), a.context === null ? a.context = u : a.pendingContext = u, a = He(t), a.payload = { element: e }, n = n === void 0 ? null : n, n !== null && (a.callback = n), e = qe(l, a, t), e !== null && (ot(e, l, t), pu(e, l, t));
  }
  function xr(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var e = l.retryLane;
      l.retryLane = e !== 0 && e < t ? e : t;
    }
  }
  function ym(l, t) {
    xr(l, t), (l = l.alternate) && xr(l, t);
  }
  function Lr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ea(l, 67108864);
      t !== null && ot(t, l, 67108864), ym(l, 67108864);
    }
  }
  function Kr(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = zt();
      t = Fc(t);
      var e = ea(l, t);
      e !== null && ot(e, l, t), ym(l, t);
    }
  }
  var mu = !0;
  function Wy(l, t, e, a) {
    var u = M.T;
    M.T = null;
    var n = j.p;
    try {
      j.p = 2, hm(l, t, e, a);
    } finally {
      j.p = n, M.T = u;
    }
  }
  function ky(l, t, e, a) {
    var u = M.T;
    M.T = null;
    var n = j.p;
    try {
      j.p = 8, hm(l, t, e, a);
    } finally {
      j.p = n, M.T = u;
    }
  }
  function hm(l, t, e, a) {
    if (mu) {
      var u = gm(a);
      if (u === null)
        kf(
          l,
          t,
          a,
          Rc,
          e
        ), wr(l, a);
      else if (Py(
        u,
        l,
        t,
        e,
        a
      ))
        a.stopPropagation();
      else if (wr(l, a), t & 4 && -1 < Iy.indexOf(l)) {
        for (; u !== null; ) {
          var n = Na(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = ke(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var m = 1 << 31 - gt(c);
                      i.entanglements[1] |= m, c &= ~m;
                    }
                    ae(n), (tl & 6) === 0 && (hc = yt() + 500, Fu(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = ea(n, 2), i !== null && ot(i, n, 2), Sc(), ym(n, 2);
            }
          if (n = gm(a), n === null && kf(
            l,
            t,
            a,
            Rc,
            e
          ), n === u) break;
          u = n;
        }
        u !== null && a.stopPropagation();
      } else
        kf(
          l,
          t,
          a,
          null,
          e
        );
    }
  }
  function gm(l) {
    return l = ti(l), Em(l);
  }
  var Rc = null;
  function Em(l) {
    if (Rc = null, l = Ie(l), l !== null) {
      var t = ut(l);
      if (t === null) l = null;
      else {
        var e = t.tag;
        if (e === 13) {
          if (l = At(t), l !== null) return l;
          l = null;
        } else if (e === 31) {
          if (l = Lt(t), l !== null) return l;
          l = null;
        } else if (e === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rc = l, null;
  }
  function Jr(l) {
    switch (l) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ov()) {
          case Um:
            return 2;
          case Rm:
            return 8;
          case on:
          case sv:
            return 32;
          case pm:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Sm = !1, Je = null, we = null, Fe = null, en = /* @__PURE__ */ new Map(), an = /* @__PURE__ */ new Map(), $e = [], Iy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function wr(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Je = null;
        break;
      case "dragenter":
      case "dragleave":
        we = null;
        break;
      case "mouseover":
      case "mouseout":
        Fe = null;
        break;
      case "pointerover":
      case "pointerout":
        en.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        an.delete(t.pointerId);
    }
  }
  function un(l, t, e, a, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: e,
      eventSystemFlags: a,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = Na(t), t !== null && Lr(t)), l) : (l.eventSystemFlags |= a, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function Py(l, t, e, a, u) {
    switch (t) {
      case "focusin":
        return Je = un(
          Je,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "dragenter":
        return we = un(
          we,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "mouseover":
        return Fe = un(
          Fe,
          l,
          t,
          e,
          a,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return en.set(
          n,
          un(
            en.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, an.set(
          n,
          un(
            an.get(n) || null,
            l,
            t,
            e,
            a,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Fr(l) {
    var t = Ie(l.target);
    if (t !== null) {
      var e = ut(t);
      if (e !== null) {
        if (t = e.tag, t === 13) {
          if (t = At(e), t !== null) {
            l.blockedOn = t, Xm(l.priority, function() {
              Kr(e);
            });
            return;
          }
        } else if (t === 31) {
          if (t = Lt(e), t !== null) {
            l.blockedOn = t, Xm(l.priority, function() {
              Kr(e);
            });
            return;
          }
        } else if (t === 3 && e.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = e.tag === 3 ? e.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function pc(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var e = gm(l.nativeEvent);
      if (e === null) {
        e = l.nativeEvent;
        var a = new e.constructor(
          e.type,
          e
        );
        li = a, e.target.dispatchEvent(a), li = null;
      } else
        return t = Na(e), t !== null && Lr(t), l.blockedOn = e, !1;
      t.shift();
    }
    return !0;
  }
  function $r(l, t, e) {
    pc(l) && e.delete(t);
  }
  function l1() {
    Sm = !1, Je !== null && pc(Je) && (Je = null), we !== null && pc(we) && (we = null), Fe !== null && pc(Fe) && (Fe = null), en.forEach($r), an.forEach($r);
  }
  function Hc(l, t) {
    l.blockedOn === t && (l.blockedOn = null, Sm || (Sm = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      l1
    )));
  }
  var qc = null;
  function Wr(l) {
    qc !== l && (qc = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        qc === l && (qc = null);
        for (var t = 0; t < l.length; t += 3) {
          var e = l[t], a = l[t + 1], u = l[t + 2];
          if (typeof a != "function") {
            if (Em(a || e) === null)
              continue;
            break;
          }
          var n = Na(e);
          n !== null && (l.splice(t, 3), t -= 3, Pi(
            n,
            {
              pending: !0,
              data: u,
              method: e.method,
              action: a
            },
            a,
            u
          ));
        }
      }
    ));
  }
  function ou(l) {
    function t(m) {
      return Hc(m, l);
    }
    Je !== null && Hc(Je, l), we !== null && Hc(we, l), Fe !== null && Hc(Fe, l), en.forEach(t), an.forEach(t);
    for (var e = 0; e < $e.length; e++) {
      var a = $e[e];
      a.blockedOn === l && (a.blockedOn = null);
    }
    for (; 0 < $e.length && (e = $e[0], e.blockedOn === null); )
      Fr(e), e.blockedOn === null && $e.shift();
    if (e = (l.ownerDocument || l).$$reactFormReplay, e != null)
      for (a = 0; a < e.length; a += 3) {
        var u = e[a], n = e[a + 1], c = u[nt] || null;
        if (typeof n == "function")
          c || Wr(e);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[nt] || null)
              i = c.formAction;
            else if (Em(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? e[a + 1] = i : (e.splice(a, 3), a -= 3), Wr(e);
        }
      }
  }
  function kr() {
    function l(n) {
      n.canIntercept && n.info === "react-transition" && n.intercept({
        handler: function() {
          return new Promise(function(c) {
            return u = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), a || setTimeout(e, 20);
    }
    function e() {
      if (!a && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(e, 100), function() {
        a = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function Tm(l) {
    this._internalRoot = l;
  }
  Yc.prototype.render = Tm.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    var e = t.current, a = zt();
    Vr(e, a, l, t, null, null);
  }, Yc.prototype.unmount = Tm.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Vr(l.current, 2, null, l, null, null), Sc(), t[_a] = null;
    }
  };
  function Yc(l) {
    this._internalRoot = l;
  }
  Yc.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Qm();
      l = { blockedOn: null, target: l, priority: t };
      for (var e = 0; e < $e.length && t !== 0 && t < $e[e].priority; e++) ;
      $e.splice(e, 0, l), e === 0 && Fr(l);
    }
  };
  var Ir = yl.version;
  if (Ir !== "19.3.0")
    throw Error(
      E(
        527,
        Ir,
        "19.3.0"
      )
    );
  j.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(E(188)) : (l = Object.keys(l).join(","), Error(E(268, l)));
    return l = zl(t), l = l !== null ? U(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var t1 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: M,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bc.isDisabled && Bc.supportsFiber)
      try {
        ru = Bc.inject(
          t1
        ), ht = Bc;
      } catch {
      }
  }
  return nn.createRoot = function(l, t) {
    if (!st(l)) throw Error(E(299));
    var e = !1, a = "", u = Zs, n = Vs, c = xs;
    return t != null && (t.unstable_strictMode === !0 && (e = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = jr(
      l,
      1,
      !1,
      null,
      null,
      e,
      a,
      null,
      u,
      n,
      c,
      kr
    ), l[_a] = t.current, Wf(l), new Tm(t);
  }, nn.hydrateRoot = function(l, t, e) {
    if (!st(l)) throw Error(E(299));
    var a = !1, u = "", n = Zs, c = Vs, i = xs, m = null;
    return e != null && (e.unstable_strictMode === !0 && (a = !0), e.identifierPrefix !== void 0 && (u = e.identifierPrefix), e.onUncaughtError !== void 0 && (n = e.onUncaughtError), e.onCaughtError !== void 0 && (c = e.onCaughtError), e.onRecoverableError !== void 0 && (i = e.onRecoverableError), e.formState !== void 0 && (m = e.formState)), t = jr(
      l,
      1,
      !0,
      t,
      e ?? null,
      a,
      u,
      m,
      n,
      c,
      i,
      kr
    ), t.context = Zr(null), e = t.current, a = zt(), a = Fc(a), u = He(a), u.callback = null, qe(e, u, a), e = a, t.current.lanes = e, du(t, e), ae(t), l[_a] = t.current, Wf(l), new Yc(t);
  }, nn.version = "19.3.0", nn;
}
var cv;
function o1() {
  if (cv) return _m.exports;
  cv = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (yl) {
        console.error(yl);
      }
  }
  return A(), _m.exports = m1(), _m.exports;
}
var s1 = o1();
const Gc = [
  ["Inventory", "📦"],
  ["HR", "👥"],
  ["Delivery", "🚚"],
  ["E-Commerce", "🛒"],
  ["Assistant", "🤖"],
  ["PMS", "🏢"],
  ["Garbage", "🚛"],
  ["Finance", "💰"]
];
function r1() {
  return /* @__PURE__ */ f.createElement("img", { src: "/admin-assets/brand/brand-mark.png", alt: "" });
}
function Cl({ name: A }) {
  const yl = {
    grid: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("rect", { x: "3", y: "3", width: "5", height: "5", rx: "1" }), /* @__PURE__ */ f.createElement("rect", { x: "12", y: "3", width: "5", height: "5", rx: "1" }), /* @__PURE__ */ f.createElement("rect", { x: "3", y: "12", width: "5", height: "5", rx: "1" }), /* @__PURE__ */ f.createElement("rect", { x: "12", y: "12", width: "5", height: "5", rx: "1" })),
    inbox: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("rect", { x: "2.5", y: "3.5", width: "15", height: "13", rx: "2" }), /* @__PURE__ */ f.createElement("path", { d: "M3 11.5h4l1.5 2h2.8l1.5-2h3.2" })),
    box: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("path", { d: "m10 2.5 7 3.8v7.4l-7 3.8-7-3.8V6.3l7-3.8Z" }), /* @__PURE__ */ f.createElement("path", { d: "m3.3 6.5 6.7 3.7 6.7-3.7M10 10.2v7" })),
    users: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("path", { d: "M13.5 17v-1.5a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3V17" }), /* @__PURE__ */ f.createElement("circle", { cx: "8", cy: "6.5", r: "3" }), /* @__PURE__ */ f.createElement("path", { d: "M14 3.7a3 3 0 0 1 0 5.7M15.5 12.5a3 3 0 0 1 2 2.8V17" })),
    settings: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("circle", { cx: "10", cy: "10", r: "3" }), /* @__PURE__ */ f.createElement("path", { d: "m8.3 2.8.4-1h2.6l.4 1 1.2.7 1-.3 1.3 2.3-.7.8v1.4l.7.8-1.3 2.3-1-.3-1.2.7-.4 1H8.7l-.4-1-1.2-.7-1 .3-1.3-2.3.7-.8V6.3l-.7-.8 1.3-2.3 1 .3 1.2-.7Z" })),
    search: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("circle", { cx: "8.5", cy: "8.5", r: "5.5" }), /* @__PURE__ */ f.createElement("path", { d: "m13 13 4 4" })),
    bell: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("path", { d: "M15 7a5 5 0 0 0-10 0c0 6-2 6-2 8h14c0-2-2-2-2-8ZM8 18h4" })),
    arrow: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("path", { d: "M4 10h12M11 5l5 5-5 5" })),
    close: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("path", { d: "m5 5 10 10M15 5 5 15" })),
    pin: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("path", { d: "M16 8c0 5-6 10-6 10S4 13 4 8a6 6 0 1 1 12 0Z" }), /* @__PURE__ */ f.createElement("circle", { cx: "10", cy: "8", r: "2" })),
    calendar: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("rect", { x: "3", y: "4", width: "14", height: "13", rx: "2" }), /* @__PURE__ */ f.createElement("path", { d: "M6 2v4M14 2v4M3 8h14" })),
    check: /* @__PURE__ */ f.createElement(f.Fragment, null, /* @__PURE__ */ f.createElement("path", { d: "m5 10.5 3.2 3.2L15 6.5" }))
  };
  return /* @__PURE__ */ f.createElement("svg", { className: "admin-icon", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, yl[A] ?? yl.grid);
}
function Am(A) {
  return new Intl.DateTimeFormat(void 0, {
    month: "short",
    day: "numeric",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
  }).format(new Date(A));
}
function Qc(A) {
  return A.split(/\s+/).filter(Boolean).slice(0, 2).map((yl) => yl[0]).join("").toUpperCase();
}
function v1({ name: A, total: yl, dataUrl: sl, contactUrl: E, logoutUrl: st, csrfToken: ut, canManageAdmins: At, homeUrl: Lt }) {
  const [fl, zl] = Hl.useState([]), [U, S] = Hl.useState({ current_page: 1, last_page: 1, total: Number(yl) }), [B, Sl] = Hl.useState(""), [hl, Ul] = Hl.useState({ search: "", system: "" }), [ul, Rl] = Hl.useState(1), [J, Dt] = Hl.useState(null), [Xl, rt] = Hl.useState(!0), [ql, L] = Hl.useState(""), [k, Fl] = Hl.useState(!1), [kl, Il] = Hl.useState(""), [$l, Gt] = Hl.useState(""), [vt, _l] = Hl.useState(!1), [O, G] = Hl.useState(""), [Q, el] = Hl.useState(""), [P, Pl] = Hl.useState(!1), dt = Hl.useCallback(async (N) => {
    rt(!0), L("");
    const R = new URL(sl, window.location.origin);
    R.searchParams.set("page", String(ul)), hl.search && R.searchParams.set("search", hl.search), hl.system && R.searchParams.set("system", hl.system);
    try {
      const Y = await fetch(R, {
        headers: { Accept: "application/json" },
        credentials: "same-origin",
        signal: N
      });
      if (Y.status === 401) {
        window.location.assign("/admin/login");
        return;
      }
      const M = await Y.json();
      if (!Y.ok)
        throw new Error(M.message || "We couldn't load demo requests.");
      zl(M.data), S(M.meta);
    } catch (Y) {
      if (Y instanceof Error && Y.name === "AbortError") return;
      L(Y instanceof Error ? Y.message : "We couldn't load demo requests.");
    } finally {
      N.aborted || rt(!1);
    }
  }, [sl, hl, ul]);
  Hl.useEffect(() => {
    const N = new AbortController();
    return dt(N.signal), () => N.abort();
  }, [dt]);
  const ue = Hl.useMemo(() => {
    const N = new Map(Gc.map(([R]) => [R, 0]));
    return fl.forEach((R) => R.systems.forEach((Y) => {
      N.set(Y, (N.get(Y) ?? 0) + 1);
    })), N;
  }, [fl]);
  function s(N) {
    N.preventDefault(), Rl(1), Ul((R) => ({ ...R, search: B.trim() }));
  }
  function _(N) {
    G(""), el(""), Il("Your Synvanta demo request"), Gt(
      `Hi ${N.name.split(/\s+/)[0]},

Thanks for your interest in Synvanta Systems. I'd love to walk you through ${N.systems.join(", ")} and show how it fits your team.

Could you share a time that works for a short call this week?

Warm regards,
${A}
Synvanta Systems`
    ), Fl(!0);
  }
  async function p(N) {
    if (N.preventDefault(), !!J) {
      _l(!0), G("");
      try {
        const R = await fetch(E.replace("__REQUEST_ID__", String(J.id)), {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            "X-CSRF-TOKEN": ut
          },
          credentials: "same-origin",
          body: JSON.stringify({ subject: kl, body: $l })
        }), Y = await R.json();
        if (!R.ok) {
          const M = Y.errors ? Object.values(Y.errors).flat().join(" ") : "";
          throw new Error(M || Y.message || "We couldn't send this email.");
        }
        zl((M) => M.map((j) => j.id === Y.data.id ? Y.data : j)), Dt(Y.data), el(`Email sent to ${Y.data.email}.`), window.setTimeout(() => Fl(!1), 900);
      } catch (R) {
        G(R instanceof Error ? R.message : "We couldn't send this email.");
      } finally {
        _l(!1);
      }
    }
  }
  async function H() {
    if (J)
      try {
        await navigator.clipboard.writeText(J.email), Pl(!0), window.setTimeout(() => Pl(!1), 1500);
      } catch {
        Pl(!1);
      }
  }
  return /* @__PURE__ */ f.createElement("main", { className: "admin-shell" }, /* @__PURE__ */ f.createElement("aside", { className: "admin-sidebar" }, /* @__PURE__ */ f.createElement("a", { className: "admin-sidebar__brand", href: Lt, "aria-label": "Synvanta Systems website" }, /* @__PURE__ */ f.createElement("span", { className: "admin-sidebar__brand-icon" }, /* @__PURE__ */ f.createElement(r1, null)), /* @__PURE__ */ f.createElement("span", null, "synvanta", /* @__PURE__ */ f.createElement("span", { className: "admin-sidebar__brand-dot" }, "."), /* @__PURE__ */ f.createElement("small", null, "ADMIN CONSOLE"))), /* @__PURE__ */ f.createElement("p", { className: "admin-sidebar__label" }, "WORKSPACE"), /* @__PURE__ */ f.createElement("nav", { className: "admin-sidebar__nav", "aria-label": "Admin navigation" }, /* @__PURE__ */ f.createElement("a", { href: "/admin", className: "admin-nav-link" }, /* @__PURE__ */ f.createElement(Cl, { name: "grid" }), "Overview"), /* @__PURE__ */ f.createElement("a", { href: "/admin/demo-requests", className: "admin-nav-link admin-nav-link--active", "aria-current": "page" }, /* @__PURE__ */ f.createElement(Cl, { name: "inbox" }), "Demo requests", /* @__PURE__ */ f.createElement("span", { className: "admin-nav-link__count" }, yl)), At && /* @__PURE__ */ f.createElement("a", { href: "/admin/admins", className: "admin-nav-link" }, /* @__PURE__ */ f.createElement(Cl, { name: "users" }), "Admins"), /* @__PURE__ */ f.createElement("span", { className: "admin-nav-link admin-nav-link--muted", "aria-disabled": "true" }, /* @__PURE__ */ f.createElement(Cl, { name: "box" }), "Demo systems", /* @__PURE__ */ f.createElement("span", { className: "admin-nav-link__soon" }, "SOON"))), /* @__PURE__ */ f.createElement("div", { className: "admin-sidebar__bottom" }, /* @__PURE__ */ f.createElement("div", { className: "admin-sidebar__help" }, /* @__PURE__ */ f.createElement("span", { className: "admin-sidebar__help-icon" }, "✳"), /* @__PURE__ */ f.createElement("strong", null, "Need a hand?"), /* @__PURE__ */ f.createElement("p", null, "Get help with your admin workspace."), /* @__PURE__ */ f.createElement("a", { href: "mailto:support@synvata.com" }, "Contact support ", /* @__PURE__ */ f.createElement(Cl, { name: "arrow" }))), /* @__PURE__ */ f.createElement("div", { className: "admin-sidebar__profile" }, /* @__PURE__ */ f.createElement("span", { className: "admin-avatar admin-avatar--profile" }, Qc(A)), /* @__PURE__ */ f.createElement("span", { className: "admin-sidebar__profile-copy" }, /* @__PURE__ */ f.createElement("strong", null, A), /* @__PURE__ */ f.createElement("small", null, "Administrator")), /* @__PURE__ */ f.createElement(Cl, { name: "settings" })))), /* @__PURE__ */ f.createElement("section", { className: "admin-main" }, /* @__PURE__ */ f.createElement("header", { className: "admin-topbar" }, /* @__PURE__ */ f.createElement("div", { className: "admin-breadcrumb" }, /* @__PURE__ */ f.createElement("span", null, "Workspace"), /* @__PURE__ */ f.createElement("b", null, "/"), /* @__PURE__ */ f.createElement("strong", null, "Demo requests")), /* @__PURE__ */ f.createElement("div", { className: "admin-topbar__actions" }, /* @__PURE__ */ f.createElement("span", { className: "admin-topbar__secure" }, /* @__PURE__ */ f.createElement("i", null), " Secure workspace"), /* @__PURE__ */ f.createElement("button", { className: "admin-notifications", type: "button", "aria-label": "Notifications" }, /* @__PURE__ */ f.createElement(Cl, { name: "bell" })), /* @__PURE__ */ f.createElement("span", { className: "admin-avatar" }, Qc(A)), /* @__PURE__ */ f.createElement("form", { method: "post", action: st }, /* @__PURE__ */ f.createElement("input", { type: "hidden", name: "_token", value: ut }), /* @__PURE__ */ f.createElement("button", { className: "admin-signout", type: "submit" }, "Sign out")))), /* @__PURE__ */ f.createElement("div", { className: "admin-content" }, /* @__PURE__ */ f.createElement("section", { className: "admin-page-heading" }, /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("p", { className: "admin-eyebrow" }, "YOUR BUSINESS, IN MOTION"), /* @__PURE__ */ f.createElement("h1", null, "Demo requests", /* @__PURE__ */ f.createElement("span", null, ".")), /* @__PURE__ */ f.createElement("p", null, "Review people interested in seeing what Synvanta can do for them.")), /* @__PURE__ */ f.createElement("div", { className: "admin-heading-meta" }, /* @__PURE__ */ f.createElement("i", null), " ALL SYSTEMS OPERATIONAL")), /* @__PURE__ */ f.createElement("section", { className: "admin-metrics", "aria-label": "Request overview" }, /* @__PURE__ */ f.createElement("article", { className: "admin-metric admin-metric--featured" }, /* @__PURE__ */ f.createElement("span", { className: "admin-metric__icon" }, /* @__PURE__ */ f.createElement(Cl, { name: "inbox" })), /* @__PURE__ */ f.createElement("span", { className: "admin-metric__label" }, "TOTAL REQUESTS"), /* @__PURE__ */ f.createElement("strong", null, Number(yl).toLocaleString()), /* @__PURE__ */ f.createElement("span", { className: "admin-metric__note" }, "All demo inquiries received"), /* @__PURE__ */ f.createElement("span", { className: "admin-metric__spark", "aria-hidden": "true" }, /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null), /* @__PURE__ */ f.createElement("i", null))), /* @__PURE__ */ f.createElement("article", { className: "admin-metric" }, /* @__PURE__ */ f.createElement("span", { className: "admin-metric__icon admin-metric__icon--violet" }, /* @__PURE__ */ f.createElement(Cl, { name: "grid" })), /* @__PURE__ */ f.createElement("span", { className: "admin-metric__label" }, "SYSTEMS REQUESTED"), /* @__PURE__ */ f.createElement("strong", null, fl.reduce((N, R) => N + R.systems.length, 0)), /* @__PURE__ */ f.createElement("span", { className: "admin-metric__note" }, "Across the current page")), /* @__PURE__ */ f.createElement("article", { className: "admin-metric" }, /* @__PURE__ */ f.createElement("span", { className: "admin-metric__icon admin-metric__icon--green" }, /* @__PURE__ */ f.createElement("i", null)), /* @__PURE__ */ f.createElement("span", { className: "admin-metric__label" }, "AVAILABLE SYSTEMS"), /* @__PURE__ */ f.createElement("strong", null, "08"), /* @__PURE__ */ f.createElement("span", { className: "admin-metric__note" }, "Ready for a guided demo"))), /* @__PURE__ */ f.createElement("section", { className: "admin-systems-strip", "aria-label": "Demo systems" }, /* @__PURE__ */ f.createElement("div", { className: "admin-systems-strip__heading" }, /* @__PURE__ */ f.createElement("span", null, "DEMO SYSTEMS"), /* @__PURE__ */ f.createElement("small", null, "Requests shown below")), /* @__PURE__ */ f.createElement("div", { className: "admin-systems-strip__list" }, Gc.map(([N, R]) => /* @__PURE__ */ f.createElement("button", { className: `admin-system-chip${hl.system === N ? " admin-system-chip--active" : ""}`, key: N, type: "button", onClick: () => {
    Ul((Y) => ({ ...Y, system: Y.system === N ? "" : N })), Rl(1);
  } }, /* @__PURE__ */ f.createElement("span", null, R), N, /* @__PURE__ */ f.createElement("b", null, ue.get(N) ?? 0))))), /* @__PURE__ */ f.createElement("section", { className: "admin-requests-card" }, /* @__PURE__ */ f.createElement("div", { className: "admin-requests-card__header" }, /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("h2", null, "Incoming requests ", /* @__PURE__ */ f.createElement("span", null, U.total ?? 0)), /* @__PURE__ */ f.createElement("p", null, "Keep track of the teams looking to meet with us.")), /* @__PURE__ */ f.createElement("div", { className: "admin-request-actions" }, /* @__PURE__ */ f.createElement("form", { className: "admin-search", role: "search", onSubmit: s }, /* @__PURE__ */ f.createElement(Cl, { name: "search" }), /* @__PURE__ */ f.createElement("input", { "aria-label": "Search requests", placeholder: "Search requests...", value: B, onChange: (N) => Sl(N.target.value) }), B && /* @__PURE__ */ f.createElement("button", { type: "button", "aria-label": "Clear search", onClick: () => {
    Sl(""), Ul((N) => ({ ...N, search: "" })), Rl(1);
  } }, /* @__PURE__ */ f.createElement(Cl, { name: "close" }))), (hl.search || hl.system) && /* @__PURE__ */ f.createElement("button", { className: "admin-clear-filters", type: "button", onClick: () => {
    Sl(""), Ul({ search: "", system: "" }), Rl(1);
  } }, "Clear filters"))), /* @__PURE__ */ f.createElement("div", { className: "admin-table-wrap" }, /* @__PURE__ */ f.createElement("table", { className: "admin-table" }, /* @__PURE__ */ f.createElement("thead", null, /* @__PURE__ */ f.createElement("tr", null, /* @__PURE__ */ f.createElement("th", { scope: "col" }, "CONTACT"), /* @__PURE__ */ f.createElement("th", { scope: "col" }, "SYSTEMS OF INTEREST"), /* @__PURE__ */ f.createElement("th", { scope: "col" }, "LOCATION"), /* @__PURE__ */ f.createElement("th", { scope: "col" }, "DATE RECEIVED"), /* @__PURE__ */ f.createElement("th", { scope: "col" }, /* @__PURE__ */ f.createElement("span", { className: "admin-sr-only" }, "Details")))), /* @__PURE__ */ f.createElement("tbody", null, !Xl && !ql && fl.map((N) => /* @__PURE__ */ f.createElement("tr", { key: N.id }, /* @__PURE__ */ f.createElement("td", null, /* @__PURE__ */ f.createElement("div", { className: "admin-contact" }, /* @__PURE__ */ f.createElement("span", { className: `admin-avatar admin-avatar--${N.id % 5}` }, Qc(N.name)), /* @__PURE__ */ f.createElement("span", null, /* @__PURE__ */ f.createElement("strong", null, N.name), /* @__PURE__ */ f.createElement("a", { href: `mailto:${N.email}` }, N.email), N.contacted_at && /* @__PURE__ */ f.createElement("em", { className: "admin-row-contacted" }, /* @__PURE__ */ f.createElement(Cl, { name: "check" }), "Contacted")))), /* @__PURE__ */ f.createElement("td", null, /* @__PURE__ */ f.createElement("div", { className: "admin-row-systems" }, N.systems.map((R) => /* @__PURE__ */ f.createElement("span", { className: "admin-row-system", key: R }, Gc.find(([Y]) => Y === R)?.[1], " ", R)))), /* @__PURE__ */ f.createElement("td", null, /* @__PURE__ */ f.createElement("span", { className: "admin-location" }, /* @__PURE__ */ f.createElement(Cl, { name: "pin" }), N.location)), /* @__PURE__ */ f.createElement("td", null, /* @__PURE__ */ f.createElement("span", { className: "admin-date" }, /* @__PURE__ */ f.createElement(Cl, { name: "calendar" }), Am(N.created_at))), /* @__PURE__ */ f.createElement("td", null, /* @__PURE__ */ f.createElement("button", { className: "admin-row-open", type: "button", "aria-label": `View ${N.name}'s request`, onClick: () => Dt(N) }, /* @__PURE__ */ f.createElement(Cl, { name: "arrow" }))))))), Xl && /* @__PURE__ */ f.createElement("div", { className: "admin-state" }, /* @__PURE__ */ f.createElement("span", { className: "admin-spinner" }), "Loading demo requests…"), !Xl && ql && /* @__PURE__ */ f.createElement("div", { className: "admin-state admin-state--error" }, /* @__PURE__ */ f.createElement("strong", null, "Couldn't load demo requests."), /* @__PURE__ */ f.createElement("span", null, ql), /* @__PURE__ */ f.createElement("button", { type: "button", onClick: () => dt(new AbortController().signal) }, "Try again")), !Xl && !ql && fl.length === 0 && /* @__PURE__ */ f.createElement("div", { className: "admin-state" }, /* @__PURE__ */ f.createElement("span", { className: "admin-state__icon" }, "⌕"), /* @__PURE__ */ f.createElement("strong", null, hl.search || hl.system ? "No requests match those filters." : "No demo requests yet."), /* @__PURE__ */ f.createElement("span", null, "New requests will appear here."))), /* @__PURE__ */ f.createElement("footer", { className: "admin-table-footer" }, /* @__PURE__ */ f.createElement("span", null, "Showing ", /* @__PURE__ */ f.createElement("strong", null, fl.length ? (U.current_page - 1) * U.per_page + 1 : 0, "–", (U.current_page - 1) * U.per_page + fl.length), " of ", /* @__PURE__ */ f.createElement("strong", null, U.total ?? 0), " requests"), /* @__PURE__ */ f.createElement("div", { className: "admin-pagination" }, /* @__PURE__ */ f.createElement("button", { type: "button", disabled: Xl || U.current_page <= 1, onClick: () => Rl((N) => Math.max(1, N - 1)) }, "← ", /* @__PURE__ */ f.createElement("span", null, "Previous")), /* @__PURE__ */ f.createElement("span", null, "Page ", U.current_page ?? 1, " of ", U.last_page ?? 1), /* @__PURE__ */ f.createElement("button", { type: "button", disabled: Xl || U.current_page >= U.last_page, onClick: () => Rl((N) => Math.min(U.last_page, N + 1)) }, /* @__PURE__ */ f.createElement("span", null, "Next"), " →")))), /* @__PURE__ */ f.createElement("footer", { className: "admin-content-footer" }, /* @__PURE__ */ f.createElement("span", null, "© ", (/* @__PURE__ */ new Date()).getFullYear(), " Synvanta Systems"), /* @__PURE__ */ f.createElement("span", null, "INTELLIGENT SYSTEMS. CONNECTED BUSINESSES.")))), J && !k && /* @__PURE__ */ f.createElement("div", { className: "admin-detail-backdrop", onMouseDown: (N) => {
    N.target === N.currentTarget && Dt(null);
  } }, /* @__PURE__ */ f.createElement("section", { className: "admin-detail-panel", role: "dialog", "aria-modal": "true", "aria-labelledby": "request-detail-title" }, /* @__PURE__ */ f.createElement("header", null, /* @__PURE__ */ f.createElement("span", null, "REQUEST DETAILS"), /* @__PURE__ */ f.createElement("button", { type: "button", "aria-label": "Close request details", onClick: () => Dt(null) }, /* @__PURE__ */ f.createElement(Cl, { name: "close" }))), /* @__PURE__ */ f.createElement("div", { className: "admin-detail-profile" }, /* @__PURE__ */ f.createElement("span", { className: "admin-avatar admin-avatar--profile" }, Qc(J.name)), /* @__PURE__ */ f.createElement("h2", { id: "request-detail-title" }, J.name), /* @__PURE__ */ f.createElement("p", null, "Demo request")), /* @__PURE__ */ f.createElement("div", { className: "admin-detail-fields" }, /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("span", null, "EMAIL ADDRESS"), /* @__PURE__ */ f.createElement("a", { href: `mailto:${J.email}` }, J.email)), /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("span", null, "PHONE NUMBER"), /* @__PURE__ */ f.createElement("a", { href: `tel:${J.phone}` }, J.phone)), /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("span", null, "LOCATION"), /* @__PURE__ */ f.createElement("strong", null, J.location)), /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("span", null, "DATE RECEIVED"), /* @__PURE__ */ f.createElement("strong", null, Am(J.created_at))), /* @__PURE__ */ f.createElement("div", null, /* @__PURE__ */ f.createElement("span", null, "SYSTEMS OF INTEREST"), /* @__PURE__ */ f.createElement("div", { className: "admin-detail-systems" }, J.systems.map((N) => /* @__PURE__ */ f.createElement("span", { key: N }, Gc.find(([R]) => R === N)?.[1], " ", N))))), J.contacted_at && /* @__PURE__ */ f.createElement("p", { className: "admin-detail-contacted" }, /* @__PURE__ */ f.createElement(Cl, { name: "check" }), " Contacted ", Am(J.contacted_at)), /* @__PURE__ */ f.createElement("div", { className: "admin-detail-contact" }, /* @__PURE__ */ f.createElement("button", { className: "admin-detail-email", type: "button", onClick: () => _(J) }, "Contact requester ", /* @__PURE__ */ f.createElement(Cl, { name: "arrow" })), /* @__PURE__ */ f.createElement("div", { className: "admin-detail-contact-alt" }, /* @__PURE__ */ f.createElement("button", { type: "button", onClick: H }, P ? "Copied" : "Copy email"), /* @__PURE__ */ f.createElement("a", { href: `tel:${J.phone}` }, "Call"), /* @__PURE__ */ f.createElement("a", { href: `mailto:${J.email}?subject=${encodeURIComponent("Your Synvanta demo request")}` }, "Open mail app"))))), k && J && /* @__PURE__ */ f.createElement("div", { className: "admin-detail-backdrop", onMouseDown: (N) => {
    N.target === N.currentTarget && !vt && Fl(!1);
  } }, /* @__PURE__ */ f.createElement("section", { className: "admin-detail-panel admin-compose-panel", role: "dialog", "aria-modal": "true", "aria-labelledby": "compose-title" }, /* @__PURE__ */ f.createElement("header", null, /* @__PURE__ */ f.createElement("span", null, "COMPOSE REPLY"), /* @__PURE__ */ f.createElement("button", { type: "button", "aria-label": "Close compose", disabled: vt, onClick: () => Fl(!1) }, /* @__PURE__ */ f.createElement(Cl, { name: "close" }))), /* @__PURE__ */ f.createElement("div", { className: "admin-compose-heading" }, /* @__PURE__ */ f.createElement("h2", { id: "compose-title" }, "Email ", J.name), /* @__PURE__ */ f.createElement("p", null, J.email)), /* @__PURE__ */ f.createElement("form", { className: "admin-compose-form", onSubmit: p }, /* @__PURE__ */ f.createElement("label", null, "To", /* @__PURE__ */ f.createElement("input", { type: "text", value: J.email, readOnly: !0 })), /* @__PURE__ */ f.createElement("label", null, "Subject", /* @__PURE__ */ f.createElement("input", { type: "text", value: kl, maxLength: "150", onChange: (N) => Il(N.target.value), required: !0 })), /* @__PURE__ */ f.createElement("label", null, "Message", /* @__PURE__ */ f.createElement("textarea", { value: $l, rows: "11", maxLength: "5000", onChange: (N) => Gt(N.target.value), required: !0 })), O && /* @__PURE__ */ f.createElement("p", { className: "admin-compose-message admin-compose-message--error", role: "alert" }, O), Q && /* @__PURE__ */ f.createElement("p", { className: "admin-compose-message admin-compose-message--success", role: "status" }, Q), /* @__PURE__ */ f.createElement("div", { className: "admin-compose-actions" }, /* @__PURE__ */ f.createElement("button", { type: "button", disabled: vt, onClick: () => Fl(!1) }, "Cancel"), /* @__PURE__ */ f.createElement("button", { type: "submit", disabled: vt }, vt ? "Sending…" : "Send email", " ", /* @__PURE__ */ f.createElement(Cl, { name: "arrow" })))))));
}
const be = document.getElementById("admin-dashboard-root");
be && s1.createRoot(be).render(
  /* @__PURE__ */ f.createElement(
    v1,
    {
      name: be.dataset.name || "Administrator",
      total: be.dataset.total || "0",
      canManageAdmins: be.dataset.canManageAdmins === "true",
      homeUrl: be.dataset.homeUrl || "/",
      dataUrl: be.dataset.dataUrl,
      contactUrl: be.dataset.contactUrl,
      logoutUrl: be.dataset.logoutUrl,
      csrfToken: document.querySelector('meta[name="csrf-token"]')?.content ?? ""
    }
  )
);
