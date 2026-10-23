function t1(A) {
  return A && A.__esModule && Object.prototype.hasOwnProperty.call(A, "default") ? A.default : A;
}
var Sm = { exports: {} }, j = {};
var kd;
function a1() {
  if (kd) return j;
  kd = 1;
  var A = /* @__PURE__ */ Symbol.for("react.transitional.element"), gl = /* @__PURE__ */ Symbol.for("react.portal"), ol = /* @__PURE__ */ Symbol.for("react.fragment"), E = /* @__PURE__ */ Symbol.for("react.strict_mode"), ot = /* @__PURE__ */ Symbol.for("react.profiler"), dt = /* @__PURE__ */ Symbol.for("react.consumer"), Dt = /* @__PURE__ */ Symbol.for("react.context"), rt = /* @__PURE__ */ Symbol.for("react.forward_ref"), Tl = /* @__PURE__ */ Symbol.for("react.suspense"), pl = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), S = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.view_transition"), Nl = Symbol.iterator;
  function Yl(o) {
    return o === null || typeof o != "object" ? null : (o = Nl && o[Nl] || o["@@iterator"], typeof o == "function" ? o : null);
  }
  var bl = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, fl = Object.assign, Bl = {};
  function Hl(o, _, C) {
    this.props = o, this.context = _, this.refs = Bl, this.updater = C || bl;
  }
  Hl.prototype.isReactComponent = {}, Hl.prototype.setState = function(o, _) {
    if (typeof o != "object" && typeof o != "function" && o != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, o, _, "setState");
  }, Hl.prototype.forceUpdate = function(o) {
    this.updater.enqueueForceUpdate(this, o, "forceUpdate");
  };
  function Jt() {
  }
  Jt.prototype = Hl.prototype;
  function vt(o, _, C) {
    this.props = o, this.context = _, this.refs = Bl, this.updater = C || bl;
  }
  var et = vt.prototype = new Jt();
  et.constructor = vt, fl(et, Hl.prototype), et.isPureReactComponent = !0;
  var $l = Array.isArray;
  function V() {
  }
  var F = { H: null, A: null, T: null, S: null }, Zl = Object.prototype.hasOwnProperty;
  function Al(o, _, C) {
    var p = C.ref;
    return {
      $$typeof: A,
      type: o,
      key: _,
      ref: p !== void 0 ? p : null,
      props: C
    };
  }
  function Il(o, _) {
    return Al(o.type, _, o.props);
  }
  function Dl(o) {
    return typeof o == "object" && o !== null && o.$$typeof === A;
  }
  function Xt(o) {
    var _ = { "=": "=0", ":": "=2" };
    return "$" + o.replace(/[=:]/g, function(C) {
      return _[C];
    });
  }
  var jt = /\/+/g;
  function El(o, _) {
    return typeof o == "object" && o !== null && o.key != null ? Xt("" + o.key) : _.toString(36);
  }
  function N(o) {
    switch (o.status) {
      case "fulfilled":
        return o.value;
      case "rejected":
        throw o.reason;
      default:
        switch (typeof o.status == "string" ? o.then(V, V) : (o.status = "pending", o.then(
          function(_) {
            o.status === "pending" && (o.status = "fulfilled", o.value = _);
          },
          function(_) {
            o.status === "pending" && (o.status = "rejected", o.reason = _);
          }
        )), o.status) {
          case "fulfilled":
            return o.value;
          case "rejected":
            throw o.reason;
        }
    }
    throw o;
  }
  function Y(o, _, C, p, k) {
    var P = typeof o;
    (P === "undefined" || P === "boolean") && (o = null);
    var tl = !1;
    if (o === null) tl = !0;
    else
      switch (P) {
        case "bigint":
        case "string":
        case "number":
          tl = !0;
          break;
        case "object":
          switch (o.$$typeof) {
            case A:
            case gl:
              tl = !0;
              break;
            case q:
              return tl = o._init, Y(
                tl(o._payload),
                _,
                C,
                p,
                k
              );
          }
      }
    if (tl)
      return k = k(o), tl = p === "" ? "." + El(o, 0) : p, $l(k) ? (C = "", tl != null && (C = tl.replace(jt, "$&/") + "/"), Y(k, _, C, "", function(ca) {
        return ca;
      })) : k != null && (Dl(k) && (k = Il(
        k,
        C + (k.key == null || o && o.key === k.key ? "" : ("" + k.key).replace(
          jt,
          "$&/"
        ) + "/") + tl
      )), _.push(k)), 1;
    tl = 0;
    var U = p === "" ? "." : p + ":";
    if ($l(o))
      for (var X = 0; X < o.length; X++)
        p = o[X], P = U + El(p, X), tl += Y(
          p,
          _,
          C,
          P,
          k
        );
    else if (X = Yl(o), typeof X == "function")
      for (o = X.call(o), X = 0; !(p = o.next()).done; )
        p = p.value, P = U + El(p, X++), tl += Y(
          p,
          _,
          C,
          P,
          k
        );
    else if (P === "object") {
      if (typeof o.then == "function")
        return Y(
          N(o),
          _,
          C,
          p,
          k
        );
      throw _ = String(o), Error(
        "Objects are not valid as a React child (found: " + (_ === "[object Object]" ? "object with keys {" + Object.keys(o).join(", ") + "}" : _) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return tl;
  }
  function G(o, _, C) {
    if (o == null) return o;
    var p = [], k = 0;
    return Y(o, p, "", "", function(P) {
      return _.call(C, P, k++);
    }), p;
  }
  function ul(o) {
    if (o._status === -1) {
      var _ = o._result, C = _();
      C.then(
        function(p) {
          (o._status === 0 || o._status === -1) && (o._status = 1, o._result = p, C.status === void 0 && (C.status = "fulfilled", C.value = p));
        },
        function(p) {
          (o._status === 0 || o._status === -1) && (o._status = 2, o._result = p, C.status === void 0 && (C.status = "rejected", C.reason = p));
        }
      ), o._status === -1 && (o._status = 0, o._result = C);
    }
    if (o._status === 1) return o._result.default;
    throw o._result;
  }
  var I = typeof reportError == "function" ? reportError : function(o) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var _ = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof o == "object" && o !== null && typeof o.message == "string" ? String(o.message) : String(o),
        error: o
      });
      if (!window.dispatchEvent(_)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", o);
      return;
    }
    console.error(o);
  };
  function O(o) {
    var _ = F.T, C = {};
    C.types = _ !== null ? _.types : null, F.T = C;
    try {
      var p = o(), k = F.S;
      k !== null && k(C, p), typeof p == "object" && p !== null && typeof p.then == "function" && p.then(V, I);
    } catch (P) {
      I(P);
    } finally {
      _ !== null && C.types !== null && (_.types = C.types), F.T = _;
    }
  }
  function L(o) {
    var _ = F.T;
    if (_ !== null) {
      var C = _.types;
      C === null ? _.types = [o] : C.indexOf(o) === -1 && C.push(o);
    } else O(L.bind(null, o));
  }
  var dl = {
    map: G,
    forEach: function(o, _, C) {
      G(
        o,
        function() {
          _.apply(this, arguments);
        },
        C
      );
    },
    count: function(o) {
      var _ = 0;
      return G(o, function() {
        _++;
      }), _;
    },
    toArray: function(o) {
      return G(o, function(_) {
        return _;
      }) || [];
    },
    only: function(o) {
      if (!Dl(o))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return o;
    }
  };
  return j.Activity = S, j.Children = dl, j.Component = Hl, j.Fragment = ol, j.Profiler = ot, j.PureComponent = vt, j.StrictMode = E, j.Suspense = Tl, j.ViewTransition = H, j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = F, j.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(o) {
      return F.H.useMemoCache(o);
    }
  }, j.addTransitionType = L, j.cache = function(o) {
    return function() {
      return o.apply(null, arguments);
    };
  }, j.cacheSignal = function() {
    return null;
  }, j.cloneElement = function(o, _, C) {
    if (o == null)
      throw Error(
        "The argument must be a React element, but you passed " + o + "."
      );
    var p = fl({}, o.props), k = o.key;
    if (_ != null)
      for (P in _.key !== void 0 && (k = "" + _.key), _)
        !Zl.call(_, P) || P === "key" || P === "__self" || P === "__source" || P === "ref" && _.ref === void 0 || (p[P] = _[P]);
    var P = arguments.length - 2;
    if (P === 1) p.children = C;
    else if (1 < P) {
      for (var tl = Array(P), U = 0; U < P; U++)
        tl[U] = arguments[U + 2];
      p.children = tl;
    }
    return Al(o.type, k, p);
  }, j.createContext = function(o) {
    return o = {
      $$typeof: Dt,
      _currentValue: o,
      _currentValue2: o,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, o.Provider = o, o.Consumer = {
      $$typeof: dt,
      _context: o
    }, o;
  }, j.createElement = function(o, _, C) {
    var p, k = {}, P = null;
    if (_ != null)
      for (p in _.key !== void 0 && (P = "" + _.key), _)
        Zl.call(_, p) && p !== "key" && p !== "__self" && p !== "__source" && (k[p] = _[p]);
    var tl = arguments.length - 2;
    if (tl === 1) k.children = C;
    else if (1 < tl) {
      for (var U = Array(tl), X = 0; X < tl; X++)
        U[X] = arguments[X + 2];
      k.children = U;
    }
    if (o && o.defaultProps)
      for (p in tl = o.defaultProps, tl)
        k[p] === void 0 && (k[p] = tl[p]);
    return Al(o, P, k);
  }, j.createRef = function() {
    return { current: null };
  }, j.forwardRef = function(o) {
    return { $$typeof: rt, render: o };
  }, j.isValidElement = Dl, j.lazy = function(o) {
    return {
      $$typeof: q,
      _payload: { _status: -1, _result: o },
      _init: ul
    };
  }, j.memo = function(o, _) {
    return {
      $$typeof: pl,
      type: o,
      compare: _ === void 0 ? null : _
    };
  }, j.startTransition = O, j.unstable_useCacheRefresh = function() {
    return F.H.useCacheRefresh();
  }, j.use = function(o) {
    return F.H.use(o);
  }, j.useActionState = function(o, _, C) {
    return F.H.useActionState(o, _, C);
  }, j.useCallback = function(o, _) {
    return F.H.useCallback(o, _);
  }, j.useContext = function(o) {
    return F.H.useContext(o);
  }, j.useDebugValue = function() {
  }, j.useDeferredValue = function(o, _) {
    return F.H.useDeferredValue(o, _);
  }, j.useEffect = function(o, _) {
    return F.H.useEffect(o, _);
  }, j.useEffectEvent = function(o) {
    return F.H.useEffectEvent(o);
  }, j.useId = function() {
    return F.H.useId();
  }, j.useImperativeHandle = function(o, _, C) {
    return F.H.useImperativeHandle(o, _, C);
  }, j.useInsertionEffect = function(o, _) {
    return F.H.useInsertionEffect(o, _);
  }, j.useLayoutEffect = function(o, _) {
    return F.H.useLayoutEffect(o, _);
  }, j.useMemo = function(o, _) {
    return F.H.useMemo(o, _);
  }, j.useOptimistic = function(o, _) {
    return F.H.useOptimistic(o, _);
  }, j.useReducer = function(o, _, C) {
    return F.H.useReducer(o, _, C);
  }, j.useRef = function(o) {
    return F.H.useRef(o);
  }, j.useState = function(o) {
    return F.H.useState(o);
  }, j.useSyncExternalStore = function(o, _, C) {
    return F.H.useSyncExternalStore(
      o,
      _,
      C
    );
  }, j.useTransition = function() {
    return F.H.useTransition();
  }, j.version = "19.3.0", j;
}
var Id;
function Om() {
  return Id || (Id = 1, Sm.exports = a1()), Sm.exports;
}
var At = Om();
const m = /* @__PURE__ */ t1(At);
var Tm = { exports: {} }, nn = {}, bm = { exports: {} }, _m = {};
var Pd;
function e1() {
  return Pd || (Pd = 1, (function(A) {
    function gl(N, Y) {
      var G = N.length;
      N.push(Y);
      l: for (; 0 < G; ) {
        var ul = G - 1 >>> 1, I = N[ul];
        if (0 < ot(I, Y))
          N[ul] = Y, N[G] = I, G = ul;
        else break l;
      }
    }
    function ol(N) {
      return N.length === 0 ? null : N[0];
    }
    function E(N) {
      if (N.length === 0) return null;
      var Y = N[0], G = N.pop();
      if (G !== Y) {
        N[0] = G;
        l: for (var ul = 0, I = N.length, O = I >>> 1; ul < O; ) {
          var L = 2 * (ul + 1) - 1, dl = N[L], o = L + 1, _ = N[o];
          if (0 > ot(dl, G))
            o < I && 0 > ot(_, dl) ? (N[ul] = _, N[o] = G, ul = o) : (N[ul] = dl, N[L] = G, ul = L);
          else if (o < I && 0 > ot(_, G))
            N[ul] = _, N[o] = G, ul = o;
          else break l;
        }
      }
      return Y;
    }
    function ot(N, Y) {
      var G = N.sortIndex - Y.sortIndex;
      return G !== 0 ? G : N.id - Y.id;
    }
    if (A.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var dt = performance;
      A.unstable_now = function() {
        return dt.now();
      };
    } else {
      var Dt = Date, rt = Dt.now();
      A.unstable_now = function() {
        return Dt.now() - rt;
      };
    }
    var Tl = [], pl = [], q = 1, S = null, H = 3, Nl = !1, Yl = !1, bl = !1, fl = !1, Bl = typeof setTimeout == "function" ? setTimeout : null, Hl = typeof clearTimeout == "function" ? clearTimeout : null, Jt = typeof setImmediate < "u" ? setImmediate : null;
    function vt(N) {
      for (var Y = ol(pl); Y !== null; ) {
        if (Y.callback === null) E(pl);
        else if (Y.startTime <= N)
          E(pl), Y.sortIndex = Y.expirationTime, gl(Tl, Y);
        else break;
        Y = ol(pl);
      }
    }
    function et(N) {
      if (bl = !1, vt(N), !Yl)
        if (ol(Tl) !== null)
          Yl = !0, $l || ($l = !0, Dl());
        else {
          var Y = ol(pl);
          Y !== null && El(et, Y.startTime - N);
        }
    }
    var $l = !1, V = -1, F = 5, Zl = -1;
    function Al() {
      return fl ? !0 : !(A.unstable_now() - Zl < F);
    }
    function Il() {
      if (fl = !1, $l) {
        var N = A.unstable_now();
        Zl = N;
        var Y = !0;
        try {
          l: {
            Yl = !1, bl && (bl = !1, Hl(V), V = -1), Nl = !0;
            var G = H;
            try {
              t: {
                for (vt(N), S = ol(Tl); S !== null && !(S.expirationTime > N && Al()); ) {
                  var ul = S.callback;
                  if (typeof ul == "function") {
                    S.callback = null, H = S.priorityLevel;
                    var I = ul(
                      S.expirationTime <= N
                    );
                    if (N = A.unstable_now(), typeof I == "function") {
                      S.callback = I, vt(N), Y = !0;
                      break t;
                    }
                    S === ol(Tl) && E(Tl), vt(N);
                  } else E(Tl);
                  S = ol(Tl);
                }
                if (S !== null) Y = !0;
                else {
                  var O = ol(pl);
                  O !== null && El(
                    et,
                    O.startTime - N
                  ), Y = !1;
                }
              }
              break l;
            } finally {
              S = null, H = G, Nl = !1;
            }
            Y = void 0;
          }
        } finally {
          Y ? Dl() : $l = !1;
        }
      }
    }
    var Dl;
    if (typeof Jt == "function")
      Dl = function() {
        Jt(Il);
      };
    else if (typeof MessageChannel < "u") {
      var Xt = new MessageChannel(), jt = Xt.port2;
      Xt.port1.onmessage = Il, Dl = function() {
        jt.postMessage(null);
      };
    } else
      Dl = function() {
        Bl(Il, 0);
      };
    function El(N, Y) {
      V = Bl(function() {
        N(A.unstable_now());
      }, Y);
    }
    A.unstable_IdlePriority = 5, A.unstable_ImmediatePriority = 1, A.unstable_LowPriority = 4, A.unstable_NormalPriority = 3, A.unstable_Profiling = null, A.unstable_UserBlockingPriority = 2, A.unstable_cancelCallback = function(N) {
      N.callback = null;
    }, A.unstable_forceFrameRate = function(N) {
      0 > N || 125 < N ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : F = 0 < N ? Math.floor(1e3 / N) : 5;
    }, A.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, A.unstable_next = function(N) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var Y = 3;
          break;
        default:
          Y = H;
      }
      var G = H;
      H = Y;
      try {
        return N();
      } finally {
        H = G;
      }
    }, A.unstable_requestPaint = function() {
      fl = !0;
    }, A.unstable_runWithPriority = function(N, Y) {
      switch (N) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          N = 3;
      }
      var G = H;
      H = N;
      try {
        return Y();
      } finally {
        H = G;
      }
    }, A.unstable_scheduleCallback = function(N, Y, G) {
      var ul = A.unstable_now();
      switch (typeof G == "object" && G !== null ? (G = G.delay, G = typeof G == "number" && 0 < G ? ul + G : ul) : G = ul, N) {
        case 1:
          var I = -1;
          break;
        case 2:
          I = 250;
          break;
        case 5:
          I = 1073741823;
          break;
        case 4:
          I = 1e4;
          break;
        default:
          I = 5e3;
      }
      return I = G + I, N = {
        id: q++,
        callback: Y,
        priorityLevel: N,
        startTime: G,
        expirationTime: I,
        sortIndex: -1
      }, G > ul ? (N.sortIndex = G, gl(pl, N), ol(Tl) === null && N === ol(pl) && (bl ? (Hl(V), V = -1) : bl = !0, El(et, G - ul))) : (N.sortIndex = I, gl(Tl, N), Yl || Nl || (Yl = !0, $l || ($l = !0, Dl()))), N;
    }, A.unstable_shouldYield = Al, A.unstable_wrapCallback = function(N) {
      var Y = H;
      return function() {
        var G = H;
        H = Y;
        try {
          return N.apply(this, arguments);
        } finally {
          H = G;
        }
      };
    };
  })(_m)), _m;
}
var lr;
function u1() {
  return lr || (lr = 1, bm.exports = e1()), bm.exports;
}
var zm = { exports: {} }, Fl = {};
var tr;
function n1() {
  if (tr) return Fl;
  tr = 1;
  var A = Om();
  function gl(q) {
    var S = "https://react.dev/errors/" + q;
    if (1 < arguments.length) {
      S += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        S += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + q + "; visit " + S + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ol() {
  }
  var E = {
    d: {
      f: ol,
      r: function() {
        throw Error(gl(522));
      },
      D: ol,
      C: ol,
      L: ol,
      m: ol,
      X: ol,
      S: ol,
      M: ol
    },
    p: 0,
    findDOMNode: null
  }, ot = /* @__PURE__ */ Symbol.for("react.portal"), dt = /* @__PURE__ */ Symbol.for("react.recoverable"), Dt = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function rt(q, S, H) {
    var Nl = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: ot,
      key: Nl == null ? null : Nl === Dt ? Dt : "" + Nl,
      children: q,
      containerInfo: S,
      implementation: H
    };
  }
  var Tl = A.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function pl(q, S) {
    if (q === "font") return "";
    if (typeof S == "string")
      return S === "use-credentials" ? S : "";
  }
  return Fl.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = E, Fl.browser = function(q) {
    return { $$typeof: dt, _reason: q };
  }, Fl.createPortal = function(q, S) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!S || S.nodeType !== 1 && S.nodeType !== 9 && S.nodeType !== 11)
      throw Error(gl(299));
    return rt(q, S, null, H);
  }, Fl.flushSync = function(q) {
    var S = Tl.T, H = E.p;
    try {
      if (Tl.T = null, E.p = 2, q) return q();
    } finally {
      Tl.T = S, E.p = H, E.d.f();
    }
  }, Fl.preconnect = function(q, S) {
    typeof q == "string" && (S ? (S = S.crossOrigin, S = typeof S == "string" ? S === "use-credentials" ? S : "" : void 0) : S = null, E.d.C(q, S));
  }, Fl.prefetchDNS = function(q) {
    typeof q == "string" && E.d.D(q);
  }, Fl.preinit = function(q, S) {
    if (typeof q == "string" && S && typeof S.as == "string") {
      var H = S.as, Nl = pl(H, S.crossOrigin), Yl = typeof S.integrity == "string" ? S.integrity : void 0, bl = typeof S.fetchPriority == "string" ? S.fetchPriority : void 0;
      H === "style" ? E.d.S(
        q,
        typeof S.precedence == "string" ? S.precedence : void 0,
        {
          crossOrigin: Nl,
          integrity: Yl,
          fetchPriority: bl
        }
      ) : H === "script" && E.d.X(q, {
        crossOrigin: Nl,
        integrity: Yl,
        fetchPriority: bl,
        nonce: typeof S.nonce == "string" ? S.nonce : void 0
      });
    }
  }, Fl.preinitModule = function(q, S) {
    if (typeof q == "string")
      if (typeof S == "object" && S !== null) {
        if (S.as == null || S.as === "script") {
          var H = pl(
            S.as,
            S.crossOrigin
          );
          E.d.M(q, {
            crossOrigin: H,
            integrity: typeof S.integrity == "string" ? S.integrity : void 0,
            nonce: typeof S.nonce == "string" ? S.nonce : void 0,
            fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0
          });
        }
      } else S == null && E.d.M(q);
  }, Fl.preload = function(q, S) {
    if (typeof q == "string" && typeof S == "object" && S !== null && typeof S.as == "string") {
      var H = S.as, Nl = pl(H, S.crossOrigin);
      E.d.L(q, H, {
        crossOrigin: Nl,
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
  }, Fl.preloadModule = function(q, S) {
    if (typeof q == "string")
      if (S) {
        var H = pl(S.as, S.crossOrigin);
        E.d.m(q, {
          as: typeof S.as == "string" && S.as !== "script" ? S.as : void 0,
          crossOrigin: H,
          integrity: typeof S.integrity == "string" ? S.integrity : void 0,
          nonce: typeof S.nonce == "string" ? S.nonce : void 0,
          fetchPriority: typeof S.fetchPriority == "string" ? S.fetchPriority : void 0
        });
      } else E.d.m(q);
  }, Fl.requestFormReset = function(q) {
    E.d.r(q);
  }, Fl.unstable_batchedUpdates = function(q, S) {
    return q(S);
  }, Fl.useFormState = function(q, S, H) {
    return Tl.H.useFormState(q, S, H);
  }, Fl.useFormStatus = function() {
    return Tl.H.useHostTransitionStatus();
  }, Fl.version = "19.3.0", Fl;
}
var ar;
function c1() {
  if (ar) return zm.exports;
  ar = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (gl) {
        console.error(gl);
      }
  }
  return A(), zm.exports = n1(), zm.exports;
}
var er;
function i1() {
  if (er) return nn;
  er = 1;
  var A = u1(), gl = Om(), ol = c1();
  function E(l) {
    var t = "https://react.dev/errors/" + l;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var a = 2; a < arguments.length; a++)
        t += "&args[]=" + encodeURIComponent(arguments[a]);
    }
    return "Minified React error #" + l + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function ot(l) {
    return !(!l || l.nodeType !== 1 && l.nodeType !== 9 && l.nodeType !== 11);
  }
  function dt(l) {
    for (var t = l, a = t; a && !a.alternate; )
      t = a, (t.flags & 4098) !== 0 && (l = t.return), a = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? l : null;
  }
  function Dt(l) {
    if (l.tag === 13) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function rt(l) {
    if (l.tag === 31) {
      var t = l.memoizedState;
      if (t === null && (l = l.alternate, l !== null && (t = l.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function Tl(l) {
    if (dt(l) !== l)
      throw Error(E(188));
  }
  function pl(l) {
    var t = l.alternate;
    if (!t) {
      if (t = dt(l), t === null) throw Error(E(188));
      return t !== l ? null : l;
    }
    for (var a = l, e = t; ; ) {
      var u = a.return;
      if (u === null) break;
      var n = u.alternate;
      if (n === null) {
        if (e = u.return, e !== null) {
          a = e;
          continue;
        }
        break;
      }
      if (u.child === n.child) {
        for (n = u.child; n; ) {
          if (n === a) return Tl(u), l;
          if (n === e) return Tl(u), t;
          n = n.sibling;
        }
        throw Error(E(188));
      }
      if (a.return !== e.return) a = u, e = n;
      else {
        for (var c = !1, i = u.child; i; ) {
          if (i === a) {
            c = !0, a = u, e = n;
            break;
          }
          if (i === e) {
            c = !0, e = u, a = n;
            break;
          }
          i = i.sibling;
        }
        if (!c) {
          for (i = n.child; i; ) {
            if (i === a) {
              c = !0, a = n, e = u;
              break;
            }
            if (i === e) {
              c = !0, e = n, a = u;
              break;
            }
            i = i.sibling;
          }
          if (!c) throw Error(E(189));
        }
      }
      if (a.alternate !== e) throw Error(E(190));
    }
    if (a.tag !== 3) throw Error(E(188));
    return a.stateNode.current === a ? l : t;
  }
  function q(l) {
    var t = l.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return l;
    for (l = l.child; l !== null; ) {
      if (t = q(l), t !== null) return t;
      l = l.sibling;
    }
    return null;
  }
  function S(l, t, a, e, u, n) {
    for (; l !== null; ) {
      if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && a(l, e, u, n) || (l.tag !== 22 || l.memoizedState === null) && (t || l.tag !== 5 && l.tag !== 27) && S(
        l.child,
        t,
        a,
        e,
        u,
        n
      ))
        return !0;
      l = l.sibling;
    }
    return !1;
  }
  function H(l) {
    for (l = l.return; l !== null; ) {
      if (l.tag === 3 || l.tag === 5 || l.tag === 27) return l;
      l = l.return;
    }
    return null;
  }
  function Nl(l) {
    var t = !1;
    for (l = l.return; l !== null && (l.tag === 4 && (t = !0), !(l.tag === 3 || l.tag === 5 || l.tag === 27)); )
      l = l.return;
    return t;
  }
  function Yl(l) {
    var t = [null, null], a = H(l);
    return a === null || bl(
      t,
      l,
      a.child,
      { foundSelf: !1 }
    ), t;
  }
  function bl(l, t, a, e) {
    for (; a !== null; ) {
      if (a === t) e.foundSelf = !0;
      else if (a.tag === 5 || a.tag === 27 || a.tag === 6) {
        if (e.foundSelf) return l[1] = a, !0;
        l[0] = a;
      } else if ((a.tag !== 22 || a.memoizedState === null) && bl(
        l,
        t,
        a.child,
        e
      ))
        return !0;
      a = a.sibling;
    }
    return !1;
  }
  function fl(l) {
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
  var Bl = null, Hl = null;
  function Jt(l, t, a) {
    return l === a ? !0 : l === t ? (Bl = l, !0) : !1;
  }
  function vt(l, t, a) {
    return l === a ? (Hl = l, !1) : l === t ? (Hl !== null && (Bl = l), !0) : !1;
  }
  function et(l) {
    if (l === null) return null;
    do
      l = l === null ? null : l.return;
    while (l && l.tag !== 5 && l.tag !== 27 && l.tag !== 3);
    return l || null;
  }
  function $l(l, t, a) {
    for (var e = 0, u = l; u; u = a(u)) e++;
    u = 0;
    for (var n = t; n; n = a(n)) u++;
    for (; 0 < e - u; ) l = a(l), e--;
    for (; 0 < u - e; ) t = a(t), u--;
    for (; e--; ) {
      if (l === t || t !== null && l === t.alternate)
        return l;
      l = a(l), t = a(t);
    }
    return null;
  }
  var V = Object.assign, F = /* @__PURE__ */ Symbol.for("react.element"), Zl = /* @__PURE__ */ Symbol.for("react.transitional.element"), Al = /* @__PURE__ */ Symbol.for("react.portal"), Il = /* @__PURE__ */ Symbol.for("react.fragment"), Dl = /* @__PURE__ */ Symbol.for("react.strict_mode"), Xt = /* @__PURE__ */ Symbol.for("react.profiler"), jt = /* @__PURE__ */ Symbol.for("react.consumer"), El = /* @__PURE__ */ Symbol.for("react.context"), N = /* @__PURE__ */ Symbol.for("react.forward_ref"), Y = /* @__PURE__ */ Symbol.for("react.suspense"), G = /* @__PURE__ */ Symbol.for("react.suspense_list"), ul = /* @__PURE__ */ Symbol.for("react.memo"), I = /* @__PURE__ */ Symbol.for("react.lazy"), O = /* @__PURE__ */ Symbol.for("react.activity"), L = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), dl = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), o = /* @__PURE__ */ Symbol.for("react.view_transition"), _ = /* @__PURE__ */ Symbol.for("react.recoverable"), C = Symbol.iterator;
  function p(l) {
    return l === null || typeof l != "object" ? null : (l = C && l[C] || l["@@iterator"], typeof l == "function" ? l : null);
  }
  var k = /* @__PURE__ */ Symbol.for("react.client.reference");
  function P(l) {
    if (l == null) return null;
    if (typeof l == "function")
      return l.$$typeof === k ? null : l.displayName || l.name || null;
    if (typeof l == "string") return l;
    switch (l) {
      case Il:
        return "Fragment";
      case Xt:
        return "Profiler";
      case Dl:
        return "StrictMode";
      case Y:
        return "Suspense";
      case G:
        return "SuspenseList";
      case O:
        return "Activity";
      case o:
        return "ViewTransition";
    }
    if (typeof l == "object")
      switch (l.$$typeof) {
        case Al:
          return "Portal";
        case El:
          return l.displayName || "Context";
        case jt:
          return (l._context.displayName || "Context") + ".Consumer";
        case N:
          var t = l.render;
          return l = l.displayName, l || (l = t.displayName || t.name || "", l = l !== "" ? "ForwardRef(" + l + ")" : "ForwardRef"), l;
        case ul:
          return t = l.displayName || null, t !== null ? t : P(l.type) || "Memo";
        case I:
          t = l._payload, l = l._init;
          try {
            return P(l(t));
          } catch {
          }
      }
    return null;
  }
  var tl = Array.isArray, U = gl.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, X = ol.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ca = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, Gc = [], Te = -1;
  function wt(l) {
    return { current: l };
  }
  function Vl(l) {
    0 > Te || (l.current = Gc[Te], Gc[Te] = null, Te--);
  }
  function rl(l, t) {
    Te++, Gc[Te] = l.current, l.current = t;
  }
  var Wt = wt(null), ou = wt(null), _a = wt(null), cn = wt(null);
  function fn(l, t) {
    switch (rl(_a, t), rl(ou, l), rl(Wt, null), t.nodeType) {
      case 9:
      case 11:
        l = (l = t.documentElement) && (l = l.namespaceURI) ? cd(l) : 0;
        break;
      default:
        if (l = t.tagName, t = t.namespaceURI)
          t = cd(t), l = id(t, l);
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
    Vl(Wt), rl(Wt, l);
  }
  function be() {
    Vl(Wt), Vl(ou), Vl(_a);
  }
  function Xc(l) {
    var t = l.memoizedState;
    t !== null && (fu._currentValue = t.memoizedState, rl(cn, l)), t = Wt.current;
    var a = id(t, l.type);
    t !== a && (rl(ou, l), rl(Wt, a));
  }
  function mn(l) {
    ou.current === l && (Vl(Wt), Vl(ou)), cn.current === l && (Vl(cn), fu._currentValue = ca);
  }
  var jc, Am;
  function za(l) {
    if (jc === void 0)
      try {
        throw Error();
      } catch (a) {
        var t = a.stack.trim().match(/\n( *(at )?)/);
        jc = t && t[1] || "", Am = -1 < a.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < a.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + jc + l + Am;
  }
  var Qc = !1;
  function Zc(l, t) {
    if (!l || Qc) return "";
    Qc = !0;
    var a = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var e = {
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
                  var d = z;
                }
                Reflect.construct(l, [], b);
              } else {
                try {
                  b.call();
                } catch (z) {
                  d = z;
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
                d = z;
              }
              (b = l()) && typeof b.catch == "function" && b.catch(function() {
              });
            }
          } catch (z) {
            if (z && d && typeof z.stack == "string")
              return [z.stack, d.stack];
          }
          return [null, null];
        }
      };
      e.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        e.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        e.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var n = e.DetermineComponentFrameRoot(), c = n[0], i = n[1];
      if (c && i) {
        var f = c.split(`
`), v = i.split(`
`);
        for (u = e = 0; e < f.length && !f[e].includes("DetermineComponentFrameRoot"); )
          e++;
        for (; u < v.length && !v[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (e === f.length || u === v.length)
          for (e = f.length - 1, u = v.length - 1; 1 <= e && 0 <= u && f[e] !== v[u]; )
            u--;
        for (; 1 <= e && 0 <= u; e--, u--)
          if (f[e] !== v[u]) {
            if (e !== 1 || u !== 1)
              do
                if (e--, u--, 0 > u || f[e] !== v[u]) {
                  var g = `
` + f[e].replace(" at new ", " at ");
                  return l.displayName && g.includes("<anonymous>") && (g = g.replace("<anonymous>", l.displayName)), g;
                }
              while (1 <= e && 0 <= u);
            break;
          }
      }
    } finally {
      Qc = !1, Error.prepareStackTrace = a;
    }
    return (a = l ? l.displayName || l.name : "") ? za(a) : "";
  }
  function nr(l, t) {
    switch (l.tag) {
      case 26:
      case 27:
      case 5:
        return za(l.type);
      case 16:
        return za("Lazy");
      case 13:
        return l.child !== t && t !== null ? za("Suspense Fallback") : za("Suspense");
      case 19:
        return za("SuspenseList");
      case 0:
      case 15:
        return Zc(l.type, !1);
      case 11:
        return Zc(l.type.render, !1);
      case 1:
        return Zc(l.type, !0);
      case 31:
        return za("Activity");
      case 30:
        return za("ViewTransition");
      default:
        return "";
    }
  }
  function Dm(l) {
    try {
      var t = "", a = null;
      do
        t += nr(l, a), a = l, l = l.return;
      while (l);
      return t;
    } catch (e) {
      return `
Error generating stack: ` + e.message + `
` + e.stack;
    }
  }
  var Vc = Object.prototype.hasOwnProperty, xc = A.unstable_scheduleCallback, Lc = A.unstable_cancelCallback, cr = A.unstable_shouldYield, ir = A.unstable_requestPaint, yt = A.unstable_now, fr = A.unstable_getCurrentPriorityLevel, Mm = A.unstable_ImmediatePriority, Cm = A.unstable_UserBlockingPriority, sn = A.unstable_NormalPriority, mr = A.unstable_LowPriority, Um = A.unstable_IdlePriority, sr = A.log, or = A.unstable_setDisableYieldValue, du = null, ht = null;
  function Na(l) {
    if (typeof sr == "function" && or(l), ht && typeof ht.setStrictMode == "function")
      try {
        ht.setStrictMode(du, l);
      } catch {
      }
  }
  var gt = Math.clz32 ? Math.clz32 : vr, dr = Math.log, rr = Math.LN2;
  function vr(l) {
    return l >>>= 0, l === 0 ? 32 : 31 - (dr(l) / rr | 0) | 0;
  }
  var on = 256, dn = 262144, rn = 4194304;
  function ka(l) {
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
  function vn(l, t, a) {
    var e = l.pendingLanes;
    if (e === 0) return 0;
    var u = 0, n = l.suspendedLanes, c = l.pingedLanes;
    l = l.warmLanes;
    var i = e & 134217727;
    return i !== 0 ? (e = i & ~n, e !== 0 ? u = ka(e) : (c &= i, c !== 0 ? u = ka(c) : a || (a = i & ~l, a !== 0 && (u = ka(a))))) : (i = e & ~n, i !== 0 ? u = ka(i) : c !== 0 ? u = ka(c) : a || (a = e & ~l, a !== 0 && (u = ka(a)))), u === 0 ? 0 : t !== 0 && t !== u && (t & n) === 0 && (n = u & -u, a = t & -t, n >= a || n === 32 && (a & 4194048) !== 0) ? t : u;
  }
  function ru(l, t) {
    return (l.pendingLanes & ~(l.suspendedLanes & ~l.pingedLanes) & t) === 0;
  }
  function Rm(l, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var a = l.entangledLanes;
    if (a !== 0)
      for (l = l.entanglements, a &= t; 0 < a; ) {
        var e = 31 - gt(a), u = 1 << e;
        t |= l[e], a &= ~u;
      }
    return t;
  }
  function yr(l, t) {
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
  function pm() {
    var l = rn;
    return rn <<= 1, (rn & 62914560) === 0 && (rn = 4194304), l;
  }
  function Kc(l) {
    for (var t = [], a = 0; 31 > a; a++) t.push(l);
    return t;
  }
  function vu(l, t) {
    l.pendingLanes |= t, t !== 268435456 && (l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0);
  }
  function hr(l, t, a, e, u, n) {
    var c = l.pendingLanes;
    l.pendingLanes = a, l.suspendedLanes = 0, l.pingedLanes = 0, l.warmLanes = 0, l.expiredLanes &= a, l.entangledLanes &= a, l.errorRecoveryDisabledLanes &= a, l.shellSuspendCounter = 0;
    var i = l.entanglements, f = l.expirationTimes, v = l.hiddenUpdates;
    for (a = c & ~a; 0 < a; ) {
      var g = 31 - gt(a), b = 1 << g;
      i[g] = 0, f[g] = -1;
      var d = v[g];
      if (d !== null)
        for (v[g] = null, g = 0; g < d.length; g++) {
          var h = d[g];
          h !== null && (h.lane &= -536870913);
        }
      a &= ~b;
    }
    e !== 0 && Hm(l, e, 0), n !== 0 && u === 0 && l.tag !== 0 && (l.suspendedLanes |= n & ~(c & ~t));
  }
  function Hm(l, t, a) {
    l.pendingLanes |= t, l.suspendedLanes &= ~t;
    var e = 31 - gt(t);
    l.entangledLanes |= t, l.entanglements[e] = l.entanglements[e] | 1073741824 | a & 261930;
  }
  function qm(l, t) {
    var a = l.entangledLanes |= t;
    for (l = l.entanglements; a; ) {
      var e = 31 - gt(a), u = 1 << e;
      u & t | l[e] & t && (l[e] |= t), a &= ~u;
    }
  }
  function Ym(l, t) {
    var a = t & -t;
    return a = (a & 42) !== 0 ? 1 : Jc(a), (a & (l.suspendedLanes | t)) !== 0 ? 0 : a;
  }
  function Jc(l) {
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
  function wc(l) {
    return l &= -l, 2 < l ? 8 < l ? (l & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Bm() {
    var l = X.p;
    return l !== 0 ? l : (l = window.event, l === void 0 ? 32 : Ld(l.type));
  }
  function Gm(l, t) {
    var a = X.p;
    try {
      return X.p = l, t();
    } finally {
      X.p = a;
    }
  }
  var ia = Math.random().toString(36).slice(2), xl = "__reactFiber$" + ia, ut = "__reactProps$" + ia, _e = "__reactContainer$" + ia, Xm = "__reactEvents$" + ia, gr = "__reactListeners$" + ia, Er = "__reactHandles$" + ia, jm = "__reactResources$" + ia, yu = "__reactMarker$" + ia, yn = "__reactLoad$" + ia;
  function hn(l) {
    delete l[xl], delete l[ut], delete l[gr], delete l[Er];
  }
  function Ia(l) {
    var t;
    if (t = l[xl]) return t;
    for (var a = l.parentNode; a; ) {
      if (t = a[_e] || a[xl]) {
        if (a = t.alternate, t.child !== null || a !== null && a.child !== null)
          for (l = Nd(l); l !== null; ) {
            if (a = l[xl]) return a;
            l = Nd(l);
          }
        return t;
      }
      l = a, a = l.parentNode;
    }
    return null;
  }
  function ze(l) {
    if (l = l[xl] || l[_e]) {
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
  function Ne(l) {
    var t = l[jm];
    return t || (t = l[jm] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Gl(l) {
    l[yu] = !0;
  }
  function Qm(l) {
    l[yn] = void 0;
  }
  var Zm = /* @__PURE__ */ new Set(), Vm = {};
  function Pa(l, t) {
    Oe(l, t), Oe(l + "Capture", t);
  }
  function Oe(l, t) {
    for (Vm[l] = t, l = 0; l < t.length; l++)
      Zm.add(t[l]);
  }
  var Sr = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), xm = {}, Lm = {};
  function Tr(l) {
    return Vc.call(Lm, l) ? !0 : Vc.call(xm, l) ? !1 : Sr.test(l) ? Lm[l] = !0 : (xm[l] = !0, !1);
  }
  var ll = !1;
  function Km() {
    var l = ll;
    return ll = !1, l;
  }
  function gn(l, t, a) {
    if (Tr(t))
      if (a === null) l.removeAttribute(t);
      else {
        switch (typeof a) {
          case "undefined":
          case "function":
          case "symbol":
            l.removeAttribute(t);
            return;
          case "boolean":
            var e = t.toLowerCase().slice(0, 5);
            if (e !== "data-" && e !== "aria-") {
              l.removeAttribute(t);
              return;
            }
        }
        l.setAttribute(t, a);
      }
  }
  function En(l, t, a) {
    if (a === null) l.removeAttribute(t);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(t);
          return;
      }
      l.setAttribute(t, a);
    }
  }
  function fa(l, t, a, e) {
    if (e === null) l.removeAttribute(a);
    else {
      switch (typeof e) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          l.removeAttribute(a);
          return;
      }
      l.setAttributeNS(t, a, e);
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
  function Jm(l) {
    var t = l.type;
    return (l = l.nodeName) && l.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function br(l, t, a) {
    var e = Object.getOwnPropertyDescriptor(
      l.constructor.prototype,
      t
    );
    if (!l.hasOwnProperty(t) && typeof e < "u" && typeof e.get == "function" && typeof e.set == "function") {
      var u = e.get, n = e.set;
      return Object.defineProperty(l, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(c) {
          a = "" + c, n.call(this, c);
        }
      }), Object.defineProperty(l, t, {
        enumerable: e.enumerable
      }), {
        getValue: function() {
          return a;
        },
        setValue: function(c) {
          a = "" + c;
        },
        stopTracking: function() {
          l._valueTracker = null, delete l[t];
        }
      };
    }
  }
  function Wc(l) {
    if (!l._valueTracker) {
      var t = Jm(l) ? "checked" : "value";
      l._valueTracker = br(
        l,
        t,
        "" + l[t]
      );
    }
  }
  function wm(l) {
    if (!l) return !1;
    var t = l._valueTracker;
    if (!t) return !0;
    var a = t.getValue(), e = "";
    return l && (e = Jm(l) ? l.checked ? "true" : "false" : l.value), l = e, l !== a ? (t.setValue(l), !0) : !1;
  }
  var _r = /[\n"\\]/g;
  function Mt(l) {
    return l.replace(
      _r,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Fc(l, t, a, e, u, n, c, i) {
    l.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? l.type = c : l.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && l.value === "" || l.value != t) && (l.value = "" + Et(t)) : l.value !== "" + Et(t) && (l.value = "" + Et(t)) : c !== "submit" && c !== "reset" || l.removeAttribute("value"), t != null ? c === "number" && l.value == t ? $c(l, Et(l.value)) : $c(l, Et(t)) : a != null ? $c(l, Et(a)) : e != null && l.removeAttribute("value"), u == null && n != null && (l.defaultChecked = !!n), u != null && (l.checked = u && typeof u != "function" && typeof u != "symbol"), i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" ? l.name = "" + Et(i) : l.removeAttribute("name");
  }
  function Wm(l, t, a, e, u, n, c, i) {
    if (n != null && typeof n != "function" && typeof n != "symbol" && typeof n != "boolean" && (l.type = n), t != null || a != null) {
      if (!(n !== "submit" && n !== "reset" || t != null)) {
        Wc(l);
        return;
      }
      a = a != null ? "" + Et(a) : "", t = t != null ? "" + Et(t) : a, i || t === l.value || (l.value = t), l.defaultValue = t;
    }
    e = e ?? u, e = typeof e != "function" && typeof e != "symbol" && !!e, l.checked = i ? l.checked : !!e, l.defaultChecked = !!e, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (l.name = c), Wc(l);
  }
  function $c(l, t) {
    l.defaultValue !== "" + t && (l.defaultValue = "" + t);
  }
  function Ae(l, t, a, e) {
    if (l = l.options, t) {
      t = {};
      for (var u = 0; u < a.length; u++)
        t["$" + a[u]] = !0;
      for (a = 0; a < l.length; a++)
        u = t.hasOwnProperty("$" + l[a].value), l[a].selected !== u && (l[a].selected = u), u && e && (l[a].defaultSelected = !0);
    } else {
      for (a = "" + Et(a), t = null, u = 0; u < l.length; u++) {
        if (l[u].value === a) {
          l[u].selected = !0, e && (l[u].defaultSelected = !0);
          return;
        }
        t !== null || l[u].disabled || (t = l[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fm(l, t, a) {
    if (t != null && (t = "" + Et(t), t !== l.value && (l.value = t), a == null)) {
      l.defaultValue !== t && (l.defaultValue = t);
      return;
    }
    l.defaultValue = a != null ? "" + Et(a) : "";
  }
  function $m(l, t, a, e) {
    if (t == null) {
      if (e != null) {
        if (a != null) throw Error(E(92));
        if (tl(e)) {
          if (1 < e.length) throw Error(E(93));
          e = e[0];
        }
        a = e;
      }
      a == null && (a = ""), t = a;
    }
    a = Et(t), l.defaultValue = a, e = l.textContent, e === a && e !== "" && e !== null && (l.value = e), Wc(l);
  }
  function De(l, t) {
    if (t) {
      var a = l.firstChild;
      if (a && a === l.lastChild && a.nodeType === 3) {
        a.nodeValue = t;
        return;
      }
    }
    l.textContent = t;
  }
  var zr = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function km(l, t, a) {
    var e = t.indexOf("--") === 0;
    a == null || typeof a == "boolean" || a === "" ? e ? l.setProperty(t, "") : t === "float" ? l.cssFloat = "" : l[t] = "" : e ? l.setProperty(t, a) : typeof a != "number" || a === 0 || zr.has(t) ? t === "float" ? l.cssFloat = a : l[t] = ("" + a).trim() : l[t] = a + "px";
  }
  function Im(l, t, a) {
    if (t != null && typeof t != "object")
      throw Error(E(62));
    if (l = l.style, a != null) {
      for (var e in a)
        !a.hasOwnProperty(e) || t != null && t.hasOwnProperty(e) || (e.indexOf("--") === 0 ? l.setProperty(e, "") : e === "float" ? l.cssFloat = "" : l[e] = "", ll = !0);
      for (var u in t)
        e = t[u], t.hasOwnProperty(u) && a[u] !== e && (km(l, u, e), ll = !0);
    } else
      for (var n in t)
        t.hasOwnProperty(n) && km(l, n, t[n]);
  }
  function kc(l) {
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
  var Nr = /* @__PURE__ */ new Map([
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
  ]), Or = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Sn(l) {
    return Or.test("" + l) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : l;
  }
  function Ft() {
  }
  var Ic = null;
  function Pc(l) {
    return l = l.target || l.srcElement || window, l.correspondingUseElement && (l = l.correspondingUseElement), l.nodeType === 3 ? l.parentNode : l;
  }
  var Me = null, Ce = null;
  function Pm(l) {
    var t = ze(l);
    if (t && (l = t.stateNode)) {
      var a = l[ut] || null;
      l: switch (l = t.stateNode, t.type) {
        case "input":
          if (Fc(
            l,
            a.value,
            a.defaultValue,
            a.defaultValue,
            a.checked,
            a.defaultChecked,
            a.type,
            a.name
          ), t = a.name, a.type === "radio" && t != null) {
            for (a = l; a.parentNode; ) a = a.parentNode;
            for (a = a.querySelectorAll(
              'input[name="' + Mt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < a.length; t++) {
              var e = a[t];
              if (e !== l && e.form === l.form) {
                var u = e[ut] || null;
                if (!u) throw Error(E(90));
                Fc(
                  e,
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
            for (t = 0; t < a.length; t++)
              e = a[t], e.form === l.form && wm(e);
          }
          break l;
        case "textarea":
          Fm(l, a.value, a.defaultValue);
          break l;
        case "select":
          t = a.value, t != null && Ae(l, !!a.multiple, t, !1);
      }
    }
  }
  var li = !1;
  function ls(l, t, a) {
    if (li) return l(t, a);
    li = !0;
    try {
      var e = l(t);
      return e;
    } finally {
      if (li = !1, (Me !== null || Ce !== null) && (Sc(), Me && (t = Me, l = Ce, Ce = Me = null, Pm(t), l)))
        for (t = 0; t < l.length; t++) Pm(l[t]);
    }
  }
  function gu(l, t) {
    var a = l.stateNode;
    if (a === null) return null;
    var e = a[ut] || null;
    if (e === null) return null;
    a = e[t];
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
        (e = !e.disabled) || (l = l.type, e = !(l === "button" || l === "input" || l === "select" || l === "textarea")), l = !e;
        break l;
      default:
        l = !1;
    }
    if (l) return null;
    if (a && typeof a != "function")
      throw Error(
        E(231, t, typeof a)
      );
    return a;
  }
  var ma = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ti = !1;
  if (ma)
    try {
      var Eu = {};
      Object.defineProperty(Eu, "passive", {
        get: function() {
          ti = !0;
        }
      }), window.addEventListener("test", Eu, Eu), window.removeEventListener("test", Eu, Eu);
    } catch {
      ti = !1;
    }
  var Oa = null, ai = null, Tn = null;
  function ts() {
    if (Tn) return Tn;
    var l, t = ai, a = t.length, e, u = "value" in Oa ? Oa.value : Oa.textContent, n = u.length;
    for (l = 0; l < a && t[l] === u[l]; l++) ;
    var c = a - l;
    for (e = 1; e <= c && t[a - e] === u[n - e]; e++) ;
    return Tn = u.slice(l, 1 < e ? 1 - e : void 0);
  }
  function bn(l) {
    var t = l.keyCode;
    return "charCode" in l ? (l = l.charCode, l === 0 && t === 13 && (l = 13)) : l = t, l === 10 && (l = 13), 32 <= l || l === 13 ? l : 0;
  }
  function _n() {
    return !0;
  }
  function as() {
    return !1;
  }
  function Pl(l) {
    function t(a, e, u, n, c) {
      this._reactName = a, this._targetInst = u, this.type = e, this.nativeEvent = n, this.target = c, this.currentTarget = null;
      for (var i in l)
        l.hasOwnProperty(i) && (a = l[i], this[i] = a ? a(n) : n[i]);
      return this.isDefaultPrevented = (n.defaultPrevented != null ? n.defaultPrevented : n.returnValue === !1) ? _n : as, this.isPropagationStopped = as, this;
    }
    return V(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var a = this.nativeEvent;
        a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = _n);
      },
      stopPropagation: function() {
        var a = this.nativeEvent;
        a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = _n);
      },
      persist: function() {
      },
      isPersistent: _n
    }), t;
  }
  var Aa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(l) {
      return l.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, zn = Pl(Aa), Su = V({}, Aa, { view: 0, detail: 0 }), Ar = Pl(Su), ei, ui, Tu, Nn = V({}, Su, {
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
    getModifierState: ci,
    button: 0,
    buttons: 0,
    relatedTarget: function(l) {
      return l.relatedTarget === void 0 ? l.fromElement === l.srcElement ? l.toElement : l.fromElement : l.relatedTarget;
    },
    movementX: function(l) {
      return "movementX" in l ? l.movementX : (l !== Tu && (Tu && l.type === "mousemove" ? (ei = l.screenX - Tu.screenX, ui = l.screenY - Tu.screenY) : ui = ei = 0, Tu = l), ei);
    },
    movementY: function(l) {
      return "movementY" in l ? l.movementY : ui;
    }
  }), es = Pl(Nn), Dr = V({}, Nn, { dataTransfer: 0 }), Mr = Pl(Dr), Cr = V({}, Su, { relatedTarget: 0 }), ni = Pl(Cr), Ur = V({}, Aa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Rr = Pl(Ur), pr = V({}, Aa, {
    clipboardData: function(l) {
      return "clipboardData" in l ? l.clipboardData : window.clipboardData;
    }
  }), Hr = Pl(pr), qr = V({}, Aa, { data: 0 }), us = Pl(qr), Yr = {
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
  }, Br = {
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
  }, Gr = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Xr(l) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(l) : (l = Gr[l]) ? !!t[l] : !1;
  }
  function ci() {
    return Xr;
  }
  var jr = V({}, Su, {
    key: function(l) {
      if (l.key) {
        var t = Yr[l.key] || l.key;
        if (t !== "Unidentified") return t;
      }
      return l.type === "keypress" ? (l = bn(l), l === 13 ? "Enter" : String.fromCharCode(l)) : l.type === "keydown" || l.type === "keyup" ? Br[l.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ci,
    charCode: function(l) {
      return l.type === "keypress" ? bn(l) : 0;
    },
    keyCode: function(l) {
      return l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    },
    which: function(l) {
      return l.type === "keypress" ? bn(l) : l.type === "keydown" || l.type === "keyup" ? l.keyCode : 0;
    }
  }), Qr = Pl(jr), Zr = V({}, Nn, {
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
  }), ns = Pl(Zr), Vr = V({}, Aa, { submitter: 0 }), xr = Pl(Vr), Lr = V({}, Su, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ci
  }), Kr = Pl(Lr), Jr = V({}, Aa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), wr = Pl(Jr), Wr = V({}, Nn, {
    deltaX: function(l) {
      return "deltaX" in l ? l.deltaX : "wheelDeltaX" in l ? -l.wheelDeltaX : 0;
    },
    deltaY: function(l) {
      return "deltaY" in l ? l.deltaY : "wheelDeltaY" in l ? -l.wheelDeltaY : "wheelDelta" in l ? -l.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fr = Pl(Wr), $r = V({}, Aa, {
    newState: 0,
    oldState: 0,
    source: 0
  }), kr = Pl($r), Ir = [9, 13, 27, 32], ii = ma && "CompositionEvent" in window, bu = null;
  ma && "documentMode" in document && (bu = document.documentMode);
  var Pr = ma && "TextEvent" in window && !bu, cs = ma && (!ii || bu && 8 < bu && 11 >= bu), is = " ", fs = !1;
  function ms(l, t) {
    switch (l) {
      case "keyup":
        return Ir.indexOf(t.keyCode) !== -1;
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
  function ss(l) {
    return l = l.detail, typeof l == "object" && "data" in l ? l.data : null;
  }
  var Ue = !1;
  function lv(l, t) {
    switch (l) {
      case "compositionend":
        return ss(t);
      case "keypress":
        return t.which !== 32 ? null : (fs = !0, is);
      case "textInput":
        return l = t.data, l === is && fs ? null : l;
      default:
        return null;
    }
  }
  function tv(l, t) {
    if (Ue)
      return l === "compositionend" || !ii && ms(l, t) ? (l = ts(), Tn = ai = Oa = null, Ue = !1, l) : null;
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
        return cs && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var av = {
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
  function os(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t === "input" ? !!av[l.type] : t === "textarea";
  }
  function ds(l, t, a, e) {
    Me ? Ce ? Ce.push(e) : Ce = [e] : Me = e, t = Oc(t, "onChange"), 0 < t.length && (a = new zn(
      "onChange",
      "change",
      null,
      a,
      e
    ), l.push({ event: a, listeners: t }));
  }
  var _u = null, zu = null;
  function ev(l) {
    ld(l, 0);
  }
  function On(l) {
    var t = hu(l);
    if (wm(t)) return l;
  }
  function rs(l, t) {
    if (l === "change") return t;
  }
  var vs = !1;
  if (ma) {
    var fi;
    if (ma) {
      var mi = "oninput" in document;
      if (!mi) {
        var ys = document.createElement("div");
        ys.setAttribute("oninput", "return;"), mi = typeof ys.oninput == "function";
      }
      fi = mi;
    } else fi = !1;
    vs = fi && (!document.documentMode || 9 < document.documentMode);
  }
  function hs() {
    _u && (_u.detachEvent("onpropertychange", gs), zu = _u = null);
  }
  function gs(l) {
    if (l.propertyName === "value" && On(zu)) {
      var t = [];
      ds(
        t,
        zu,
        l,
        Pc(l)
      ), ls(ev, t);
    }
  }
  function uv(l, t, a) {
    l === "focusin" ? (hs(), _u = t, zu = a, _u.attachEvent("onpropertychange", gs)) : l === "focusout" && hs();
  }
  function nv(l) {
    if (l === "selectionchange" || l === "keyup" || l === "keydown")
      return On(zu);
  }
  function cv(l, t) {
    if (l === "click") return On(t);
  }
  function iv(l, t) {
    if (l === "input" || l === "change")
      return On(t);
  }
  function fv(l, t) {
    return l === t && (l !== 0 || 1 / l === 1 / t) || l !== l && t !== t;
  }
  var St = typeof Object.is == "function" ? Object.is : fv;
  function Nu(l, t) {
    if (St(l, t)) return !0;
    if (typeof l != "object" || l === null || typeof t != "object" || t === null)
      return !1;
    var a = Object.keys(l), e = Object.keys(t);
    if (a.length !== e.length) return !1;
    for (e = 0; e < a.length; e++) {
      var u = a[e];
      if (!Vc.call(t, u) || !St(l[u], t[u]))
        return !1;
    }
    return !0;
  }
  function si(l) {
    if (l = l || (typeof document < "u" ? document : void 0), typeof l > "u") return null;
    try {
      return l.activeElement || l.body;
    } catch {
      return l.body;
    }
  }
  function Es(l) {
    for (; l && l.firstChild; ) l = l.firstChild;
    return l;
  }
  function Ss(l, t) {
    var a = Es(l);
    l = 0;
    for (var e; a; ) {
      if (a.nodeType === 3) {
        if (e = l + a.textContent.length, l <= t && e >= t)
          return { node: a, offset: t - l };
        l = e;
      }
      l: {
        for (; a; ) {
          if (a.nextSibling) {
            a = a.nextSibling;
            break l;
          }
          a = a.parentNode;
        }
        a = void 0;
      }
      a = Es(a);
    }
  }
  function Ts(l, t) {
    return l && t ? l === t ? !0 : l && l.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ts(l, t.parentNode) : "contains" in l ? l.contains(t) : l.compareDocumentPosition ? !!(l.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function bs(l) {
    l = l != null && l.ownerDocument != null && l.ownerDocument.defaultView != null ? l.ownerDocument.defaultView : window;
    for (var t = si(l.document); t instanceof l.HTMLIFrameElement; ) {
      try {
        var a = typeof t.contentWindow.location.href == "string";
      } catch {
        a = !1;
      }
      if (a) l = t.contentWindow;
      else break;
      t = si(l.document);
    }
    return t;
  }
  function oi(l) {
    var t = l && l.nodeName && l.nodeName.toLowerCase();
    return t && (t === "input" && (l.type === "text" || l.type === "search" || l.type === "tel" || l.type === "url" || l.type === "password") || t === "textarea" || l.contentEditable === "true");
  }
  var mv = ma && "documentMode" in document && 11 >= document.documentMode, Re = null, di = null, Ou = null, ri = !1;
  function _s(l, t, a) {
    var e = a.window === a ? a.document : a.nodeType === 9 ? a : a.ownerDocument;
    ri || Re == null || Re !== si(e) || (e = Re, "selectionStart" in e && oi(e) ? e = { start: e.selectionStart, end: e.selectionEnd } : (e = (e.ownerDocument && e.ownerDocument.defaultView || window).getSelection(), e = {
      anchorNode: e.anchorNode,
      anchorOffset: e.anchorOffset,
      focusNode: e.focusNode,
      focusOffset: e.focusOffset
    }), Ou && Nu(Ou, e) || (Ou = e, e = Oc(di, "onSelect"), 0 < e.length && (t = new zn(
      "onSelect",
      "select",
      null,
      t,
      a
    ), l.push({ event: t, listeners: e }), t.target = Re)));
  }
  function le(l, t) {
    var a = {};
    return a[l.toLowerCase()] = t.toLowerCase(), a["Webkit" + l] = "webkit" + t, a["Moz" + l] = "moz" + t, a;
  }
  var pe = {
    animationend: le("Animation", "AnimationEnd"),
    animationiteration: le("Animation", "AnimationIteration"),
    animationstart: le("Animation", "AnimationStart"),
    transitionrun: le("Transition", "TransitionRun"),
    transitionstart: le("Transition", "TransitionStart"),
    transitioncancel: le("Transition", "TransitionCancel"),
    transitionend: le("Transition", "TransitionEnd")
  }, vi = {}, zs = {};
  ma && (zs = document.createElement("div").style, "AnimationEvent" in window || (delete pe.animationend.animation, delete pe.animationiteration.animation, delete pe.animationstart.animation), "TransitionEvent" in window || delete pe.transitionend.transition);
  function te(l) {
    if (vi[l]) return vi[l];
    if (!pe[l]) return l;
    var t = pe[l], a;
    for (a in t)
      if (t.hasOwnProperty(a) && a in zs)
        return vi[l] = t[a];
    return l;
  }
  var Ns = te("animationend"), Os = te("animationiteration"), As = te("animationstart"), sv = te("transitionrun"), ov = te("transitionstart"), dv = te("transitioncancel"), Ds = te("transitionend"), Ms = /* @__PURE__ */ new Map(), yi = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  yi.push("scrollEnd");
  function Qt(l, t) {
    Ms.set(l, t), Pa(t, [l]);
  }
  var rv = 0;
  function sa(l, t) {
    if (l.name != null && l.name !== "auto") return l.name;
    if (t.autoName !== null) return t.autoName;
    l = Lt.identifierPrefix;
    var a = rv++;
    return l = "_" + l + "t_" + a.toString(32) + "_", t.autoName = l;
  }
  function Cs(l) {
    if (l == null || typeof l == "string")
      return l;
    var t = null, a = Ie;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = l[a[e]];
        if (u != null) {
          if (u === "none") return "none";
          t = t == null ? u : t + (" " + u);
        }
      }
    return t ?? l.default;
  }
  function oa(l, t) {
    return l = Cs(l), t = Cs(t), t == null ? l === "auto" ? null : l : t === "auto" ? null : t;
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
  }, Ct = [], He = 0, hi = 0;
  function Dn() {
    for (var l = He, t = hi = He = 0; t < l; ) {
      var a = Ct[t];
      Ct[t++] = null;
      var e = Ct[t];
      Ct[t++] = null;
      var u = Ct[t];
      Ct[t++] = null;
      var n = Ct[t];
      if (Ct[t++] = null, e !== null && u !== null) {
        var c = e.pending;
        c === null ? u.next = u : (u.next = c.next, c.next = u), e.pending = u;
      }
      n !== 0 && Us(a, u, n);
    }
  }
  function Mn(l, t, a, e) {
    Ct[He++] = l, Ct[He++] = t, Ct[He++] = a, Ct[He++] = e, hi |= e, l.lanes |= e, l = l.alternate, l !== null && (l.lanes |= e);
  }
  function gi(l, t, a, e) {
    return Mn(l, t, a, e), Cn(l);
  }
  function ae(l, t) {
    return Mn(l, null, null, t), Cn(l);
  }
  function Us(l, t, a) {
    l.lanes |= a;
    var e = l.alternate;
    e !== null && (e.lanes |= a);
    for (var u = !1, n = l.return; n !== null; )
      n.childLanes |= a, e = n.alternate, e !== null && (e.childLanes |= a), n.tag === 22 && (l = n.stateNode, l === null || l._visibility & 1 || (u = !0)), l = n, n = n.return;
    return l.tag === 3 ? (n = l.stateNode, u && t !== null && (u = 31 - gt(a), l = n.hiddenUpdates, e = l[u], e === null ? l[u] = [t] : e.push(t), t.lane = a | 536870912), n) : null;
  }
  function Cn(l) {
    if (50 < wu)
      throw wu = 0, Ec = null, Error(E(185));
    for (var t = l.return; t !== null; )
      l = t, t = l.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var qe = {};
  function vv(l, t, a, e) {
    this.tag = l, this.key = a, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = e, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nt(l, t, a, e) {
    return new vv(l, t, a, e);
  }
  function Ei(l) {
    return l = l.prototype, !(!l || !l.isReactComponent);
  }
  function da(l, t) {
    var a = l.alternate;
    return a === null ? (a = nt(
      l.tag,
      t,
      l.key,
      l.mode
    ), a.elementType = l.elementType, a.type = l.type, a.stateNode = l.stateNode, a.alternate = l, l.alternate = a) : (a.pendingProps = t, a.type = l.type, a.flags = 0, a.subtreeFlags = 0, a.deletions = null), a.flags = l.flags & 1206910976, a.childLanes = l.childLanes, a.lanes = l.lanes, a.child = l.child, a.memoizedProps = l.memoizedProps, a.memoizedState = l.memoizedState, a.updateQueue = l.updateQueue, t = l.dependencies, a.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, a.sibling = l.sibling, a.index = l.index, a.ref = l.ref, a.refCleanup = l.refCleanup, a;
  }
  function Rs(l, t) {
    l.flags &= 1206910978;
    var a = l.alternate;
    return a === null ? (l.childLanes = 0, l.lanes = t, l.child = null, l.subtreeFlags = 0, l.memoizedProps = null, l.memoizedState = null, l.updateQueue = null, l.dependencies = null, l.stateNode = null) : (l.childLanes = a.childLanes, l.lanes = a.lanes, l.child = a.child, l.subtreeFlags = 0, l.deletions = null, l.memoizedProps = a.memoizedProps, l.memoizedState = a.memoizedState, l.updateQueue = a.updateQueue, l.type = a.type, t = a.dependencies, l.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), l;
  }
  function Un(l, t, a, e, u, n) {
    var c = 0;
    if (e = l, typeof e == "function") Ei(e) && (c = 1);
    else if (typeof e == "string")
      c = Vy(
        l,
        a,
        Wt.current
      ) ? 26 : l === "html" || l === "head" || l === "body" ? 27 : 5;
    else
      l: switch (e) {
        case O:
          return l = nt(31, a, t, u), l.elementType = O, l.lanes = n, l;
        case Il:
          return ee(a.children, u, n, t);
        case Dl:
          c = 8, u |= 24;
          break;
        case Xt:
          return l = nt(12, a, t, u | 2), l.elementType = Xt, l.lanes = n, l;
        case Y:
          return l = nt(13, a, t, u), l.elementType = Y, l.lanes = n, l;
        case G:
          return l = nt(19, a, t, u), l.elementType = G, l.lanes = n, l;
        case L:
        case o:
          return l = u | 32, l = nt(30, a, t, l), l.elementType = o, l.lanes = n, l.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, l;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case El:
                c = 10;
                break l;
              case jt:
                c = 9;
                break l;
              case N:
                c = 11;
                break l;
              case ul:
                c = 14;
                break l;
              case I:
                c = 16, e = null;
                break l;
            }
          c = 29, a = Error(
            E(130, l === null ? "null" : typeof l, "")
          ), e = null;
      }
    return t = nt(c, a, t, u), t.elementType = l, t.type = e, t.lanes = n, t;
  }
  function ee(l, t, a, e) {
    return l = nt(7, l, e, t), l.lanes = a, l;
  }
  function Si(l, t, a) {
    return l = nt(6, l, null, t), l.lanes = a, l;
  }
  function ps(l) {
    var t = nt(18, null, null, 0);
    return t.stateNode = l, t;
  }
  function Ti(l, t, a) {
    return t = nt(
      4,
      l.children !== null ? l.children : [],
      l.key,
      t
    ), t.lanes = a, t.stateNode = {
      containerInfo: l.containerInfo,
      pendingChildren: null,
      implementation: l.implementation
    }, t;
  }
  var Hs = /* @__PURE__ */ new WeakMap();
  function Ut(l, t) {
    if (typeof l == "object" && l !== null) {
      var a = Hs.get(l);
      return a !== void 0 ? a : (t = {
        value: l,
        source: t,
        stack: Dm(t)
      }, Hs.set(l, t), t);
    }
    return {
      value: l,
      source: t,
      stack: Dm(t)
    };
  }
  var Ye = [], Be = 0, Rn = null, Au = 0, Rt = [], pt = 0, Da = null, $t = 1, kt = "";
  function ra(l, t) {
    Ye[Be++] = Au, Ye[Be++] = Rn, Rn = l, Au = t;
  }
  function qs(l, t, a) {
    Rt[pt++] = $t, Rt[pt++] = kt, Rt[pt++] = Da, Da = l;
    var e = $t;
    l = kt;
    var u = 32 - gt(e) - 1;
    e &= ~(1 << u), a += 1;
    var n = 32 - gt(t) + u;
    if (30 < n) {
      var c = u - u % 5;
      n = (e & (1 << c) - 1).toString(32), e >>= c, u -= c, $t = 1 << 32 - gt(t) + u | a << u | e, kt = n + l;
    } else
      $t = 1 << n | a << u | e, kt = l;
  }
  function pn(l) {
    l.return !== null && (ra(l, 1), qs(l, 1, 0));
  }
  function bi(l) {
    for (; l === Rn; )
      Rn = Ye[--Be], Ye[Be] = null, Au = Ye[--Be], Ye[Be] = null;
    for (; l === Da; )
      Da = Rt[--pt], Rt[pt] = null, kt = Rt[--pt], Rt[pt] = null, $t = Rt[--pt], Rt[pt] = null;
  }
  function Ys(l, t) {
    Rt[pt++] = $t, Rt[pt++] = kt, Rt[pt++] = Da, $t = t.id, kt = t.overflow, Da = l;
  }
  var Xl = null, vl = null, x = !1, Ma = null, Ht = !1, _i = Error(E(519));
  function Ca(l) {
    var t = Error(
      E(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw Du(Ut(t, l)), _i;
  }
  function Bs(l) {
    var t = l.stateNode, a = l.type, e = l.memoizedProps;
    switch (t[xl] = l, t[ut] = e, a) {
      case "dialog":
        J("cancel", t), J("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        J("load", t);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Fu.length; a++)
          J(Fu[a], t);
        break;
      case "source":
        J("error", t);
        break;
      case "img":
      case "image":
      case "link":
        J("error", t), J("load", t);
        break;
      case "details":
        J("toggle", t);
        break;
      case "input":
        J("invalid", t), Wm(
          t,
          e.value,
          e.defaultValue,
          e.checked,
          e.defaultChecked,
          e.type,
          e.name,
          !0
        );
        break;
      case "select":
        J("invalid", t);
        break;
      case "textarea":
        J("invalid", t), $m(t, e.value, e.defaultValue, e.children);
    }
    a = e.children, typeof a != "string" && typeof a != "number" && typeof a != "bigint" || t.textContent === "" + a || e.suppressHydrationWarning === !0 || ud(t.textContent, a) ? (e.popover != null && (J("beforetoggle", t), J("toggle", t)), e.onScroll != null && J("scroll", t), e.onScrollEnd != null && J("scrollend", t), e.onClick != null && (t.onclick = Ft), t = !0) : t = !1, t || Ca(l, !0);
  }
  function Hn(l) {
    for (Xl = l.return; Xl; )
      switch (Xl.tag) {
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
          Xl = Xl.return;
      }
  }
  function Ge(l) {
    if (l !== Xl) return !1;
    if (!x) return Hn(l), x = !0, !1;
    var t = l.tag, a;
    if ((a = t !== 3 && t !== 27) && ((a = t === 5) && (a = l.type, a = !(a !== "form" && a !== "button") || Pf(l.type, l.memoizedProps)), a = !a), a && vl && Ca(l), Hn(l), t === 13) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
      vl = zd(l);
    } else if (t === 31) {
      if (l = l.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(317));
      vl = zd(l);
    } else
      t === 27 ? (t = vl, Ka(l.type) ? (l = fm, fm = null, vl = l) : vl = t) : vl = Xl ? Yt(l.stateNode.nextSibling) : null;
    return !0;
  }
  function ue() {
    vl = Xl = null, x = !1;
  }
  function zi() {
    var l = Ma;
    return l !== null && (ft === null ? ft = l : ft.push.apply(
      ft,
      l
    ), Ma = null), l;
  }
  function Du(l) {
    Ma === null ? Ma = [l] : Ma.push(l);
  }
  var Ni = wt(null), ne = null, va = null;
  function Ua(l, t, a) {
    rl(Ni, t._currentValue), t._currentValue = a;
  }
  function ya(l) {
    l._currentValue = Ni.current, Vl(Ni);
  }
  function qn(l, t, a) {
    for (; l !== null; ) {
      var e = l.alternate;
      if ((l.childLanes & t) !== t ? (l.childLanes |= t, e !== null && (e.childLanes |= t)) : e !== null && (e.childLanes & t) !== t && (e.childLanes |= t), l === a) break;
      l = l.return;
    }
  }
  function Oi(l, t, a, e) {
    var u = l.child;
    for (u !== null && (u.return = l); u !== null; ) {
      var n = u.dependencies;
      if (n !== null) {
        var c = u.child;
        n = n.firstContext;
        l: for (; n !== null; ) {
          var i = n;
          n = u;
          for (var f = 0; f < t.length; f++)
            if (i.context === t[f]) {
              n.lanes |= a, i = n.alternate, i !== null && (i.lanes |= a), qn(
                n.return,
                a,
                l
              ), e || (c = null);
              break l;
            }
          n = i.next;
        }
      } else if (u.tag === 18) {
        if (c = u.return, c === null) throw Error(E(341));
        c.lanes |= a, n = c.alternate, n !== null && (n.lanes |= a), qn(c, a, l), c = null;
      } else
        u.tag === 13 && u.memoizedState !== null && u.memoizedState.dehydrated === null ? (u.lanes |= a, c = u.alternate, c !== null && (c.lanes |= a), qn(
          u.return,
          a,
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
  function ce(l, t, a, e) {
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
    return l !== null && Oi(
      t,
      l,
      a,
      e
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
  function ie(l) {
    ne = l, va = null, l = l.dependencies, l !== null && (l.firstContext = null);
  }
  function Ll(l) {
    return Gs(ne, l);
  }
  function Bn(l, t) {
    return ne === null && ie(l), Gs(l, t);
  }
  function Gs(l, t) {
    var a = t._currentValue;
    if (t = { context: t, memoizedValue: a, next: null }, va === null) {
      if (l === null) throw Error(E(308));
      va = t, l.dependencies = { lanes: 0, firstContext: t }, l.flags |= 524288;
    } else va = va.next = t;
    return a;
  }
  var yv = typeof AbortController < "u" ? AbortController : function() {
    var l = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(a, e) {
        l.push(e);
      }
    };
    this.abort = function() {
      t.aborted = !0, l.forEach(function(a) {
        return a();
      });
    };
  }, hv = A.unstable_scheduleCallback, gv = A.unstable_NormalPriority, Ml = {
    $$typeof: El,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ai() {
    return {
      controller: new yv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Mu(l) {
    l.refCount--, l.refCount === 0 && hv(gv, function() {
      l.controller.abort();
    });
  }
  function Xs(l, t) {
    if ((l.pendingLanes & 4194048) !== 0) {
      var a = l.transitionTypes;
      for (a === null && (a = l.transitionTypes = []), l = 0; l < t.length; l++) {
        var e = t[l];
        a.indexOf(e) === -1 && a.push(e);
      }
    }
  }
  var Cu = null;
  function Ev(l) {
    var t = l.transitionTypes;
    return l.transitionTypes = null, t;
  }
  var Uu = null, Di = 0, fe = 0, Xe = null;
  function Sv(l, t) {
    if (Uu === null) {
      var a = Uu = [];
      Di = 0, fe = Lf(), Xe = {
        status: "pending",
        value: void 0,
        then: function(e) {
          a.push(e);
        }
      };
    }
    return Di++, t.then(js, js), t;
  }
  function js() {
    if (--Di === 0 && (Cu = null, Uu !== null)) {
      Xe !== null && (Xe.status = "fulfilled");
      var l = Uu;
      Uu = null, fe = 0, Xe = null;
      for (var t = 0; t < l.length; t++) (0, l[t])();
    }
  }
  function Tv(l, t) {
    var a = [], e = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        a.push(u);
      }
    };
    return l.then(
      function() {
        e.status = "fulfilled", e.value = t;
        for (var u = 0; u < a.length; u++) (0, a[u])(t);
      },
      function(u) {
        for (e.status = "rejected", e.reason = u, u = 0; u < a.length; u++)
          (0, a[u])(void 0);
      }
    ), e;
  }
  var Qs = U.S;
  U.S = function(l, t) {
    if (H0 = yt(), typeof t == "object" && t !== null && typeof t.then == "function" && Sv(l, t), Cu !== null)
      for (var a = au; a !== null; )
        Xs(a, Cu), a = a.next;
    if (a = l.types, a !== null) {
      for (var e = au; e !== null; )
        Xs(e, a), e = e.next;
      if (fe !== 0) {
        e = Cu, e === null && (e = Cu = []);
        for (var u = 0; u < a.length; u++) {
          var n = a[u];
          e.indexOf(n) === -1 && e.push(n);
        }
      }
    }
    Qs !== null && Qs(l, t);
  };
  var me = wt(null);
  function Mi() {
    var l = me.current;
    return l !== null ? l : sl.pooledCache;
  }
  function Gn(l, t) {
    t === null ? rl(me, me.current) : rl(me, t.pool);
  }
  function Zs() {
    var l = Mi();
    return l === null ? null : { parent: Ml._currentValue, pool: l };
  }
  var je = Error(E(460)), Ci = Error(E(474)), Xn = Error(E(542)), jn = { then: function() {
  } };
  function Vs(l) {
    return l = l.status, l === "fulfilled" || l === "rejected";
  }
  function xs(l, t, a) {
    switch (a = l[a], a === void 0 ? l.push(t) : a !== t && (t.then(Ft, Ft), t = a), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw l = t.reason, Ks(l), l === void 0 && !("reason" in t) ? Error(E(600)) : l;
      default:
        if (typeof t.status == "string") t.then(Ft, Ft);
        else {
          if (l = sl, l !== null && 100 < l.shellSuspendCounter)
            throw Error(E(482));
          l = t, l.status = "pending", l.then(
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = e;
              }
            },
            function(e) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = e;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw l = t.reason, Ks(l), l;
        }
        throw oe = t, je;
    }
  }
  function se(l) {
    try {
      var t = l._init;
      return t(l._payload);
    } catch (a) {
      throw a !== null && typeof a == "object" && typeof a.then == "function" ? (oe = a, je) : a;
    }
  }
  var oe = null;
  function Ls() {
    if (oe === null) throw Error(E(459));
    var l = oe;
    return oe = null, l;
  }
  function Ks(l) {
    if (l === je || l === Xn)
      throw Error(E(483));
  }
  var Qe = null, Ru = 0;
  function Qn(l) {
    var t = Ru;
    return Ru += 1, Qe === null && (Qe = []), xs(Qe, l, t);
  }
  function Ra(l, t) {
    t = t.props.ref, l.ref = t !== void 0 ? t : null;
  }
  function Zn(l, t) {
    throw t.$$typeof === F ? Error(E(525)) : (l = Object.prototype.toString.call(t), Error(
      E(
        31,
        l === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : l
      )
    ));
  }
  function Js(l) {
    function t(r, s) {
      if (l) {
        var y = r.deletions;
        y === null ? (r.deletions = [s], r.flags |= 16) : y.push(s);
      }
    }
    function a(r, s) {
      if (!l) return null;
      for (; s !== null; )
        t(r, s), s = s.sibling;
      return null;
    }
    function e(r) {
      for (var s = /* @__PURE__ */ new Map(); r !== null; )
        r.key === null ? s.set(r.index, r) : s.set(r.key, r), r = r.sibling;
      return s;
    }
    function u(r, s) {
      return r = da(r, s), r.index = 0, r.sibling = null, r;
    }
    function n(r, s, y) {
      return r.index = y, l ? (y = r.alternate, y !== null ? (y = y.index, y < s ? (r.flags |= 2, s) : y) : (r.flags |= 134217730, s)) : (r.flags |= 1048576, s);
    }
    function c(r) {
      return l && r.alternate === null && (r.flags |= 134217730), r;
    }
    function i(r, s, y, T) {
      return s === null || s.tag !== 6 ? (s = Si(y, r.mode, T), s.return = r, s) : (s = u(s, y), s.return = r, s);
    }
    function f(r, s, y, T) {
      var D = y.type;
      return D === Il ? (r = g(
        r,
        s,
        y.props.children,
        T,
        y.key
      ), Ra(r, y), r) : s !== null && (s.elementType === D || typeof D == "object" && D !== null && D.$$typeof === I && se(D) === s.type) ? (s = u(s, y.props), Ra(s, y), s.return = r, s) : (s = Un(
        y.type,
        y.key,
        y.props,
        null,
        r.mode,
        T
      ), Ra(s, y), s.return = r, s);
    }
    function v(r, s, y, T) {
      return s === null || s.tag !== 4 || s.stateNode.containerInfo !== y.containerInfo || s.stateNode.implementation !== y.implementation ? (s = Ti(y, r.mode, T), s.return = r, s) : (s = u(s, y.children || []), s.return = r, s);
    }
    function g(r, s, y, T, D) {
      return s === null || s.tag !== 7 ? (s = ee(
        y,
        r.mode,
        T,
        D
      ), s.return = r, s) : (s = u(s, y), s.return = r, s);
    }
    function b(r, s, y) {
      if (typeof s == "string" && s !== "" || typeof s == "number" || typeof s == "bigint")
        return s = Si(
          "" + s,
          r.mode,
          y
        ), s.return = r, s;
      if (typeof s == "object" && s !== null) {
        switch (s.$$typeof) {
          case Zl:
            return y = Un(
              s.type,
              s.key,
              s.props,
              null,
              r.mode,
              y
            ), Ra(y, s), y.return = r, y;
          case Al:
            return s = Ti(
              s,
              r.mode,
              y
            ), s.return = r, s;
          case I:
            return s = se(s), b(r, s, y);
        }
        if (tl(s) || p(s))
          return s = ee(
            s,
            r.mode,
            y,
            null
          ), s.return = r, s;
        if (typeof s.then == "function")
          return b(r, Qn(s), y);
        if (s.$$typeof === El)
          return b(
            r,
            Bn(r, s),
            y
          );
        Zn(r, s);
      }
      return null;
    }
    function d(r, s, y, T) {
      var D = s !== null ? s.key : null;
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return D !== null ? null : i(r, s, "" + y, T);
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Zl:
            return y.key === D ? f(r, s, y, T) : null;
          case Al:
            return y.key === D ? v(r, s, y, T) : null;
          case I:
            return y = se(y), d(r, s, y, T);
        }
        if (tl(y) || p(y))
          return D !== null ? null : g(r, s, y, T, null);
        if (typeof y.then == "function")
          return d(
            r,
            s,
            Qn(y),
            T
          );
        if (y.$$typeof === El)
          return d(
            r,
            s,
            Bn(r, y),
            T
          );
        Zn(r, y);
      }
      return null;
    }
    function h(r, s, y, T, D) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return r = r.get(y) || null, i(s, r, "" + T, D);
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case Zl:
            return r = r.get(
              T.key === null ? y : T.key
            ) || null, f(s, r, T, D);
          case Al:
            return r = r.get(
              T.key === null ? y : T.key
            ) || null, v(s, r, T, D);
          case I:
            return T = se(T), h(
              r,
              s,
              y,
              T,
              D
            );
        }
        if (tl(T) || p(T))
          return r = r.get(y) || null, g(s, r, T, D, null);
        if (typeof T.then == "function")
          return h(
            r,
            s,
            y,
            Qn(T),
            D
          );
        if (T.$$typeof === El)
          return h(
            r,
            s,
            y,
            Bn(s, T),
            D
          );
        Zn(s, T);
      }
      return null;
    }
    function z(r, s, y, T) {
      for (var D = null, W = null, R = s, B = s = 0, Rl = null; R !== null && B < y.length; B++) {
        R.index > B ? (Rl = R, R = null) : Rl = R.sibling;
        var $ = d(
          r,
          R,
          y[B],
          T
        );
        if ($ === null) {
          R === null && (R = Rl);
          break;
        }
        l && R && $.alternate === null && t(r, R), s = n($, s, B), W === null ? D = $ : W.sibling = $, W = $, R = Rl;
      }
      if (B === y.length)
        return a(r, R), x && ra(r, B), D;
      if (R === null) {
        for (; B < y.length; B++)
          R = b(r, y[B], T), R !== null && (s = n(
            R,
            s,
            B
          ), W === null ? D = R : W.sibling = R, W = R);
        return x && ra(r, B), D;
      }
      for (R = e(R); B < y.length; B++)
        Rl = h(
          R,
          r,
          B,
          y[B],
          T
        ), Rl !== null && (l && ($ = Rl.alternate, $ !== null && R.delete($.key === null ? B : $.key)), s = n(
          Rl,
          s,
          B
        ), W === null ? D = Rl : W.sibling = Rl, W = Rl);
      return l && R.forEach(function($a) {
        return t(r, $a);
      }), x && ra(r, B), D;
    }
    function M(r, s, y, T) {
      if (y == null) throw Error(E(151));
      for (var D = null, W = null, R = s, B = s = 0, Rl = null, $ = y.next(); R !== null && !$.done; B++, $ = y.next()) {
        R.index > B ? (Rl = R, R = null) : Rl = R.sibling;
        var $a = d(r, R, $.value, T);
        if ($a === null) {
          R === null && (R = Rl);
          break;
        }
        l && R && $a.alternate === null && t(r, R), s = n($a, s, B), W === null ? D = $a : W.sibling = $a, W = $a, R = Rl;
      }
      if ($.done)
        return a(r, R), x && ra(r, B), D;
      if (R === null) {
        for (; !$.done; B++, $ = y.next())
          $ = b(r, $.value, T), $ !== null && (s = n($, s, B), W === null ? D = $ : W.sibling = $, W = $);
        return x && ra(r, B), D;
      }
      for (R = e(R); !$.done; B++, $ = y.next())
        $ = h(R, r, B, $.value, T), $ !== null && (l && (Rl = $.alternate, Rl !== null && R.delete(
          Rl.key === null ? B : Rl.key
        )), s = n($, s, B), W === null ? D = $ : W.sibling = $, W = $);
      return l && R.forEach(function(l1) {
        return t(r, l1);
      }), x && ra(r, B), D;
    }
    function Z(r, s, y, T) {
      if (typeof y == "object" && y !== null && y.type === Il && y.key === null && y.props.ref === void 0 && (y = y.props.children), typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case Zl:
            l: {
              for (var D = y.key; s !== null; ) {
                if (s.key === D) {
                  if (D = y.type, D === Il) {
                    if (s.tag === 7) {
                      a(
                        r,
                        s.sibling
                      ), T = u(
                        s,
                        y.props.children
                      ), Ra(T, y), T.return = r, r = T;
                      break l;
                    }
                  } else if (s.elementType === D || typeof D == "object" && D !== null && D.$$typeof === I && se(D) === s.type) {
                    a(
                      r,
                      s.sibling
                    ), T = u(s, y.props), Ra(T, y), T.return = r, r = T;
                    break l;
                  }
                  a(r, s);
                  break;
                } else t(r, s);
                s = s.sibling;
              }
              y.type === Il ? (T = ee(
                y.props.children,
                r.mode,
                T,
                y.key
              ), Ra(T, y), T.return = r, r = T) : (T = Un(
                y.type,
                y.key,
                y.props,
                null,
                r.mode,
                T
              ), Ra(T, y), T.return = r, r = T);
            }
            return c(r);
          case Al:
            l: {
              for (D = y.key; s !== null; ) {
                if (s.key === D)
                  if (s.tag === 4 && s.stateNode.containerInfo === y.containerInfo && s.stateNode.implementation === y.implementation) {
                    a(
                      r,
                      s.sibling
                    ), T = u(s, y.children || []), T.return = r, r = T;
                    break l;
                  } else {
                    a(r, s);
                    break;
                  }
                else t(r, s);
                s = s.sibling;
              }
              T = Ti(y, r.mode, T), T.return = r, r = T;
            }
            return c(r);
          case I:
            return y = se(y), Z(
              r,
              s,
              y,
              T
            );
        }
        if (tl(y))
          return z(
            r,
            s,
            y,
            T
          );
        if (p(y)) {
          if (D = p(y), typeof D != "function") throw Error(E(150));
          return y = D.call(y), M(
            r,
            s,
            y,
            T
          );
        }
        if (typeof y.then == "function")
          return Z(
            r,
            s,
            Qn(y),
            T
          );
        if (y.$$typeof === El)
          return Z(
            r,
            s,
            Bn(r, y),
            T
          );
        Zn(r, y);
      }
      return typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint" ? (y = "" + y, s !== null && s.tag === 6 ? (a(r, s.sibling), T = u(s, y), T.return = r, r = T) : (a(r, s), T = Si(y, r.mode, T), T.return = r, r = T), c(r)) : a(r, s);
    }
    return function(r, s, y, T) {
      try {
        Ru = 0;
        var D = Z(
          r,
          s,
          y,
          T
        );
        return Qe = null, D;
      } catch (R) {
        if (R === je || R === Xn) throw R;
        var W = nt(29, R, null, r.mode);
        return W.lanes = T, W.return = r, W;
      }
    };
  }
  var de = Js(!0), ws = Js(!1), pa = !1;
  function Ui(l) {
    l.updateQueue = {
      baseState: l.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Ri(l, t) {
    l = l.updateQueue, t.updateQueue === l && (t.updateQueue = {
      baseState: l.baseState,
      firstBaseUpdate: l.firstBaseUpdate,
      lastBaseUpdate: l.lastBaseUpdate,
      shared: l.shared,
      callbacks: null
    });
  }
  function Ha(l) {
    return { lane: l, tag: 0, payload: null, callback: null, next: null };
  }
  function qa(l, t, a) {
    var e = l.updateQueue;
    if (e === null) return null;
    if (e = e.shared, (al & 2) !== 0) {
      var u = e.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), e.pending = t, t = Cn(l), Us(l, null, a), t;
    }
    return Mn(l, e, t, a), Cn(l);
  }
  function pu(l, t, a) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (a & 4194048) !== 0)) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, qm(l, a);
    }
  }
  function pi(l, t) {
    var a = l.updateQueue, e = l.alternate;
    if (e !== null && (e = e.updateQueue, a === e)) {
      var u = null, n = null;
      if (a = a.firstBaseUpdate, a !== null) {
        do {
          var c = {
            lane: a.lane,
            tag: a.tag,
            payload: a.payload,
            callback: null,
            next: null
          };
          n === null ? u = n = c : n = n.next = c, a = a.next;
        } while (a !== null);
        n === null ? u = n = t : n = n.next = t;
      } else u = n = t;
      a = {
        baseState: e.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: n,
        shared: e.shared,
        callbacks: e.callbacks
      }, l.updateQueue = a;
      return;
    }
    l = a.lastBaseUpdate, l === null ? a.firstBaseUpdate = t : l.next = t, a.lastBaseUpdate = t;
  }
  var Hi = !1;
  function Hu() {
    if (Hi) {
      var l = Xe;
      if (l !== null) throw l;
    }
  }
  function qu(l, t, a, e) {
    Hi = !1;
    var u = l.updateQueue;
    pa = !1;
    var n = u.firstBaseUpdate, c = u.lastBaseUpdate, i = u.shared.pending;
    if (i !== null) {
      u.shared.pending = null;
      var f = i, v = f.next;
      f.next = null, c === null ? n = v : c.next = v, c = f;
      var g = l.alternate;
      g !== null && (g = g.updateQueue, i = g.lastBaseUpdate, i !== c && (i === null ? g.firstBaseUpdate = v : i.next = v, g.lastBaseUpdate = f));
    }
    if (n !== null) {
      var b = u.baseState;
      c = 0, g = v = f = null, i = n;
      do {
        var d = i.lane & -536870913, h = d !== i.lane;
        if (h ? (w & d) === d : (e & d) === d) {
          d !== 0 && d === fe && (Hi = !0), g !== null && (g = g.next = {
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: null,
            next: null
          });
          l: {
            var z = l, M = i;
            d = t;
            var Z = a;
            switch (M.tag) {
              case 1:
                if (z = M.payload, typeof z == "function") {
                  b = z.call(Z, b, d);
                  break l;
                }
                b = z;
                break l;
              case 3:
                z.flags = z.flags & -65537 | 128;
              case 0:
                if (z = M.payload, d = typeof z == "function" ? z.call(Z, b, d) : z, d == null) break l;
                b = V({}, b, d);
                break l;
              case 2:
                pa = !0;
            }
          }
          d = i.callback, d !== null && (l.flags |= 64, h && (l.flags |= 8192), h = u.callbacks, h === null ? u.callbacks = [d] : h.push(d));
        } else
          h = {
            lane: d,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          }, g === null ? (v = g = h, f = b) : g = g.next = h, c |= d;
        if (i = i.next, i === null) {
          if (i = u.shared.pending, i === null)
            break;
          h = i, i = h.next, h.next = null, u.lastBaseUpdate = h, u.shared.pending = null;
        }
      } while (!0);
      g === null && (f = b), u.baseState = f, u.firstBaseUpdate = v, u.lastBaseUpdate = g, n === null && (u.shared.lanes = 0), Za |= c, l.lanes = c, l.memoizedState = b;
    }
  }
  function Ws(l, t) {
    if (typeof l != "function")
      throw Error(E(191, l));
    l.call(t);
  }
  function Fs(l, t) {
    var a = l.callbacks;
    if (a !== null)
      for (l.callbacks = null, l = 0; l < a.length; l++)
        Ws(a[l], t);
  }
  var Ya = wt(null), Vn = wt(0);
  function $s(l, t) {
    l = Ta, rl(Vn, l), rl(Ya, t), Ta = l | t.baseLanes;
  }
  function qi() {
    rl(Vn, Ta), rl(Ya, Ya.current);
  }
  function Yi() {
    Ta = Vn.current, Vl(Ya), Vl(Vn);
  }
  var Kl = wt(null), kl = null;
  function Ba(l) {
    var t = l.alternate;
    rl(Jl, Jl.current & 1), rl(Kl, l), kl === null && (t === null || Ya.current !== null || t.memoizedState !== null) && (kl = l);
  }
  function Bi(l) {
    rl(Jl, Jl.current), rl(Kl, l), kl === null && (kl = l);
  }
  function ks(l) {
    l.tag === 22 ? (rl(Jl, Jl.current), rl(Kl, l), kl === null && (kl = l)) : Ga();
  }
  function Ga() {
    rl(Jl, Jl.current), rl(Kl, Kl.current);
  }
  function Tt(l) {
    Vl(Kl), kl === l && (kl = null), Vl(Jl);
  }
  var Jl = wt(0);
  function Yu(l, t) {
    rl(Kl, Kl.current), rl(Jl, t);
  }
  function Gi(l) {
    Vl(Jl), Vl(Kl), kl === l && (kl = null);
  }
  function xn(l) {
    for (var t = l; t !== null; ) {
      if (t.tag === 13) {
        var a = t.memoizedState;
        if (a !== null && (a = a.dehydrated, a === null || cm(a) || im(a)))
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
  var ha = 0, Q = null, ml = null, Cl = null, Ln = !1, Ze = !1, re = !1, Kn = 0, Bu = 0, Ve = null, bv = 0;
  function _l() {
    throw Error(E(321));
  }
  function Xi(l, t) {
    if (t === null) return !1;
    for (var a = 0; a < t.length && a < l.length; a++)
      if (!St(l[a], t[a])) return !1;
    return !0;
  }
  function ji(l, t, a, e, u, n) {
    return ha = n, Q = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, U.H = l === null || l.memoizedState === null ? Yo : Bo, re = !1, n = a(e, u), re = !1, Ze && (n = Ps(
      t,
      a,
      e,
      u
    )), Is(l), n;
  }
  function Is(l) {
    U.H = In;
    var t = ml !== null && ml.next !== null;
    if (ha = 0, Cl = ml = Q = null, Ln = !1, Bu = 0, Ve = null, t) throw Error(E(300));
    l === null || Ul || (l = l.dependencies, l !== null && Yn(l) && (Ul = !0));
  }
  function Ps(l, t, a, e) {
    Q = l;
    var u = 0;
    do {
      if (Ze && (Ve = null), Bu = 0, Ze = !1, 25 <= u) throw Error(E(301));
      if (u += 1, Cl = ml = null, l.updateQueue != null) {
        var n = l.updateQueue;
        n.lastEffect = null, n.events = null, n.stores = null, n.memoCache != null && (n.memoCache.index = 0);
      }
      U.H = Cv, n = t(a, e);
    } while (Ze);
    return n;
  }
  function _v() {
    var l = U.H, t = l.useState()[0];
    return t = typeof t.then == "function" ? Gu(t) : t, l = l.useState()[0], (ml !== null ? ml.memoizedState : null) !== l && (Q.flags |= 1024), t;
  }
  function Qi() {
    var l = Kn !== 0;
    return Kn = 0, l;
  }
  function Zi(l, t, a) {
    t.updateQueue = l.updateQueue, t.flags &= -2053, l.lanes &= ~a;
  }
  function Vi(l) {
    if (Ln) {
      for (l = l.memoizedState; l !== null; ) {
        var t = l.queue;
        t !== null && (t.pending = null), l = l.next;
      }
      Ln = !1;
    }
    ha = 0, Cl = ml = Q = null, Ze = !1, Bu = Kn = 0, Ve = null;
  }
  function lt() {
    var l = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Cl === null ? Q.memoizedState = Cl = l : Cl = Cl.next = l, Cl;
  }
  function Ol() {
    if (ml === null) {
      var l = Q.alternate;
      l = l !== null ? l.memoizedState : null;
    } else l = ml.next;
    var t = Cl === null ? Q.memoizedState : Cl.next;
    if (t !== null)
      Cl = t, ml = l;
    else {
      if (l === null)
        throw Q.alternate === null ? Error(E(467)) : Error(E(310));
      ml = l, l = {
        memoizedState: ml.memoizedState,
        baseState: ml.baseState,
        baseQueue: ml.baseQueue,
        queue: ml.queue,
        next: null
      }, Cl === null ? Q.memoizedState = Cl = l : Cl = Cl.next = l;
    }
    return Cl;
  }
  function Jn() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Gu(l) {
    var t = Bu;
    return Bu += 1, Ve === null && (Ve = []), l = xs(Ve, l, t), t = Q, (Cl === null ? t.memoizedState : Cl.next) === null && (t = t.alternate, U.H = t === null || t.memoizedState === null ? Yo : Bo), l;
  }
  function wn(l) {
    if (l !== null && typeof l == "object") {
      if (typeof l.then == "function") return Gu(l);
      if (l.$$typeof === _) return;
      if (l.$$typeof === El) return Ll(l);
    }
    throw Error(E(438, String(l)));
  }
  function xi(l) {
    var t = null, a = Q.updateQueue;
    if (a !== null && (t = a.memoCache), t == null) {
      var e = Q.alternate;
      e !== null && (e = e.updateQueue, e !== null && (e = e.memoCache, e != null && (t = {
        data: e.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), a === null && (a = Jn(), Q.updateQueue = a), a.memoCache = t, a = t.data[t.index], a === void 0)
      for (a = t.data[t.index] = Array(l), e = 0; e < l; e++)
        a[e] = dl;
    return t.index++, a;
  }
  function ga(l, t) {
    return typeof t == "function" ? t(l) : t;
  }
  function Wn(l) {
    var t = Ol();
    return Li(t, ml, l);
  }
  function Li(l, t, a) {
    var e = l.queue;
    if (e === null) throw Error(E(311));
    e.lastRenderedReducer = a;
    var u = l.baseQueue, n = e.pending;
    if (n !== null) {
      if (u !== null) {
        var c = u.next;
        u.next = n.next, n.next = c;
      }
      t.baseQueue = u = n, e.pending = null;
    }
    if (n = l.baseState, u === null) l.memoizedState = n;
    else {
      t = u.next;
      var i = c = null, f = null, v = t, g = !1;
      do {
        var b = v.lane & -536870913;
        if (b !== v.lane ? (w & b) === b : (ha & b) === b) {
          var d = v.revertLane;
          if (d === 0)
            f !== null && (f = f.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }), b === fe && (g = !0);
          else if ((ha & d) === d) {
            v = v.next, d === fe && (g = !0);
            continue;
          } else
            b = {
              lane: 0,
              revertLane: v.revertLane,
              gesture: null,
              action: v.action,
              hasEagerState: v.hasEagerState,
              eagerState: v.eagerState,
              next: null
            }, f === null ? (i = f = b, c = n) : f = f.next = b, Q.lanes |= d, Za |= d;
          b = v.action, re && a(n, b), n = v.hasEagerState ? v.eagerState : a(n, b);
        } else
          d = {
            lane: b,
            revertLane: v.revertLane,
            gesture: v.gesture,
            action: v.action,
            hasEagerState: v.hasEagerState,
            eagerState: v.eagerState,
            next: null
          }, f === null ? (i = f = d, c = n) : f = f.next = d, Q.lanes |= b, Za |= b;
        v = v.next;
      } while (v !== null && v !== t);
      if (f === null ? c = n : f.next = i, !St(n, l.memoizedState) && (Ul = !0, g && (a = Xe, a !== null)))
        throw a;
      l.memoizedState = n, l.baseState = c, l.baseQueue = f, e.lastRenderedState = n;
    }
    return u === null && (e.lanes = 0), [l.memoizedState, e.dispatch];
  }
  function Ki(l) {
    var t = Ol(), a = t.queue;
    if (a === null) throw Error(E(311));
    a.lastRenderedReducer = l;
    var e = a.dispatch, u = a.pending, n = t.memoizedState;
    if (u !== null) {
      a.pending = null;
      var c = u = u.next;
      do
        n = l(n, c.action), c = c.next;
      while (c !== u);
      St(n, t.memoizedState) || (Ul = !0), t.memoizedState = n, t.baseQueue === null && (t.baseState = n), a.lastRenderedState = n;
    }
    return [n, e];
  }
  function lo(l, t, a) {
    var e = Q, u = Ol(), n = x;
    if (n) {
      if (a === void 0) throw Error(E(407));
      a = a();
    } else a = t();
    var c = !St(
      (ml || u).memoizedState,
      a
    );
    if (c && (u.memoizedState = a, Ul = !0), u = u.queue, Wi(eo.bind(null, e, u, l), [
      l
    ]), l = u.getSnapshot !== t || c || Cl !== null && (Cl.memoizedState.tag & 1) !== 0, xe(
      l ? 9 : 8,
      { destroy: void 0 },
      ao.bind(null, e, u, a, t),
      null
    ), l) {
      if (e.flags |= 2048, sl === null) throw Error(E(349));
      n || (ha & 127) !== 0 || to(e, t, a);
    }
    return a;
  }
  function to(l, t, a) {
    l.flags |= 16384, l = { getSnapshot: t, value: a }, t = Q.updateQueue, t === null ? (t = Jn(), Q.updateQueue = t, t.stores = [l]) : (a = t.stores, a === null ? t.stores = [l] : a.push(l));
  }
  function ao(l, t, a, e) {
    t.value = a, t.getSnapshot = e, uo(t) && no(l);
  }
  function eo(l, t, a) {
    return a(function() {
      uo(t) && no(l);
    });
  }
  function uo(l) {
    var t = l.getSnapshot;
    l = l.value;
    try {
      var a = t();
      return !St(l, a);
    } catch {
      return !0;
    }
  }
  function no(l) {
    var t = ae(l, 2);
    t !== null && mt(t, l, 2);
  }
  function Ji(l) {
    var t = lt();
    if (typeof l == "function") {
      var a = l;
      if (l = a(), re) {
        Na(!0);
        try {
          a();
        } finally {
          Na(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = l, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ga,
      lastRenderedState: l
    }, t;
  }
  function co(l, t, a, e) {
    return l.baseState = a, Li(
      l,
      ml,
      typeof e == "function" ? e : ga
    );
  }
  function zv(l, t, a, e, u) {
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
      U.T !== null ? a(!0) : n.isTransition = !1, e(n), a = t.pending, a === null ? (n.next = t.pending = n, io(t, n)) : (n.next = a.next, t.pending = a.next = n);
    }
  }
  function io(l, t) {
    var a = t.action, e = t.payload, u = l.state;
    if (t.isTransition) {
      var n = U.T, c = {};
      c.types = n !== null ? n.types : null, U.T = c;
      try {
        var i = a(u, e), f = U.S;
        f !== null && f(c, i), fo(l, t, i);
      } catch (v) {
        wi(l, t, v);
      } finally {
        n !== null && c.types !== null && (n.types = c.types), U.T = n;
      }
    } else
      try {
        n = a(u, e), fo(l, t, n);
      } catch (v) {
        wi(l, t, v);
      }
  }
  function fo(l, t, a) {
    a !== null && typeof a == "object" && typeof a.then == "function" ? a.then(
      function(e) {
        mo(l, t, e);
      },
      function(e) {
        return wi(l, t, e);
      }
    ) : mo(l, t, a);
  }
  function mo(l, t, a) {
    t.status = "fulfilled", t.value = a, so(t), l.state = a, t = l.pending, t !== null && (a = t.next, a === t ? l.pending = null : (a = a.next, t.next = a, io(l, a)));
  }
  function wi(l, t, a) {
    var e = l.pending;
    if (l.pending = null, e !== null) {
      e = e.next;
      do
        t.status = "rejected", t.reason = a, so(t), t = t.next;
      while (t !== e);
    }
    l.action = null;
  }
  function so(l) {
    l = l.listeners;
    for (var t = 0; t < l.length; t++) (0, l[t])();
  }
  function oo(l, t) {
    return t;
  }
  function ro(l, t) {
    if (x) {
      var a = sl.formState;
      if (a !== null) {
        l: {
          var e = Q;
          if (x) {
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
                ), e = u.data === "F!";
                break l;
              }
            }
            Ca(e);
          }
          e = !1;
        }
        e && (t = a[0]);
      }
    }
    return a = lt(), a.memoizedState = a.baseState = t, e = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: oo,
      lastRenderedState: t
    }, a.queue = e, a = po.bind(
      null,
      Q,
      e
    ), e.dispatch = a, e = Ji(!1), n = Pi.bind(
      null,
      Q,
      !1,
      e.queue
    ), e = lt(), u = {
      state: t,
      dispatch: null,
      action: l,
      pending: null
    }, e.queue = u, a = zv.bind(
      null,
      Q,
      u,
      n,
      a
    ), u.dispatch = a, e.memoizedState = l, [t, a, !1];
  }
  function vo(l) {
    var t = Ol();
    return yo(t, ml, l);
  }
  function yo(l, t, a) {
    if (t = Li(
      l,
      t,
      oo
    )[0], l = Wn(ga)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var e = Gu(t);
      } catch (c) {
        throw c === je ? Xn : c;
      }
    else e = t;
    t = Ol();
    var u = t.queue, n = u.dispatch;
    return a !== t.memoizedState && (Q.flags |= 2048, xe(
      9,
      { destroy: void 0 },
      Nv.bind(null, u, a),
      null
    )), [e, n, l];
  }
  function Nv(l, t) {
    l.action = t;
  }
  function ho(l) {
    var t = Ol(), a = ml;
    if (a !== null)
      return yo(t, a, l);
    Ol(), t = t.memoizedState, a = Ol();
    var e = a.queue.dispatch;
    return a.memoizedState = l, [t, e, !1];
  }
  function xe(l, t, a, e) {
    return l = { tag: l, create: a, deps: e, inst: t, next: null }, t = Q.updateQueue, t === null && (t = Jn(), Q.updateQueue = t), a = t.lastEffect, a === null ? t.lastEffect = l.next = l : (e = a.next, a.next = l, l.next = e, t.lastEffect = l), l;
  }
  function go() {
    return Ol().memoizedState;
  }
  function Fn(l, t, a, e) {
    var u = lt();
    Q.flags |= l, u.memoizedState = xe(
      1 | t,
      { destroy: void 0 },
      a,
      e === void 0 ? null : e
    );
  }
  function $n(l, t, a, e) {
    var u = Ol();
    e = e === void 0 ? null : e;
    var n = u.memoizedState.inst;
    ml !== null && e !== null && Xi(e, ml.memoizedState.deps) ? u.memoizedState = xe(t, n, a, e) : (Q.flags |= l, u.memoizedState = xe(
      1 | t,
      n,
      a,
      e
    ));
  }
  function Eo(l, t) {
    Fn(8390656, 8, l, t);
  }
  function Wi(l, t) {
    $n(2048, 8, l, t);
  }
  function Ov(l) {
    Q.flags |= 4;
    var t = Q.updateQueue;
    if (t === null)
      t = Jn(), Q.updateQueue = t, t.events = [l];
    else {
      var a = t.events;
      a === null ? t.events = [l] : a.push(l);
    }
  }
  function So(l) {
    var t = Ol().memoizedState;
    return Ov({ ref: t, nextImpl: l }), function() {
      if ((al & 2) !== 0) throw Error(E(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function To(l, t) {
    return $n(4, 2, l, t);
  }
  function bo(l, t) {
    return $n(4, 4, l, t);
  }
  function _o(l, t) {
    if (typeof t == "function") {
      l = l();
      var a = t(l);
      return function() {
        typeof a == "function" ? a() : t(null);
      };
    }
    if (t != null)
      return l = l(), t.current = l, function() {
        t.current = null;
      };
  }
  function zo(l, t, a) {
    a = a != null ? a.concat([l]) : null, $n(4, 4, _o.bind(null, t, l), a);
  }
  function Fi() {
  }
  function No(l, t) {
    var a = Ol();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    return t !== null && Xi(t, e[1]) ? e[0] : (a.memoizedState = [l, t], l);
  }
  function Oo(l, t) {
    var a = Ol();
    t = t === void 0 ? null : t;
    var e = a.memoizedState;
    if (t !== null && Xi(t, e[1]))
      return e[0];
    if (e = l(), re) {
      Na(!0);
      try {
        l();
      } finally {
        Na(!1);
      }
    }
    return a.memoizedState = [e, t], e;
  }
  function $i(l, t, a) {
    return a === void 0 || (ha & 1073741824) !== 0 && (w & 261930) === 0 ? l.memoizedState = t : (l.memoizedState = a, l = Y0(), Q.lanes |= l, Za |= l, a);
  }
  function Ao(l, t, a, e) {
    return St(a, t) ? a : Ya.current !== null ? (l = $i(l, a, e), St(l, t) || (Ul = !0), l) : (ha & 106) === 0 || (ha & 1073741824) !== 0 && (w & 261930) === 0 ? (Ul = !0, l.memoizedState = a) : (l = Y0(), Q.lanes |= l, Za |= l, t);
  }
  function Do(l, t, a, e, u) {
    var n = X.p;
    X.p = n !== 0 && 8 > n ? n : 8;
    var c = U.T, i = {};
    i.types = c !== null ? c.types : null, U.T = i, Pi(l, !1, t, a);
    try {
      var f = u(), v = U.S;
      if (v !== null && v(i, f), f !== null && typeof f == "object" && typeof f.then == "function") {
        var g = Tv(
          f,
          e
        );
        Xu(
          l,
          t,
          g,
          Nt(l)
        );
      } else
        Xu(
          l,
          t,
          e,
          Nt(l)
        );
    } catch (b) {
      Xu(
        l,
        t,
        { then: function() {
        }, status: "rejected", reason: b },
        Nt()
      );
    } finally {
      X.p = n, c !== null && i.types !== null && (c.types = i.types), U.T = c;
    }
  }
  function Av() {
  }
  function ki(l, t, a, e) {
    if (l.tag !== 5) throw Error(E(476));
    var u = Mo(l).queue;
    Do(
      l,
      u,
      t,
      ca,
      a === null ? Av : function() {
        return Co(l), a(e);
      }
    );
  }
  function Mo(l) {
    var t = l.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: ca,
      baseState: ca,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ga,
        lastRenderedState: ca
      },
      next: null
    };
    var a = {};
    return t.next = {
      memoizedState: a,
      baseState: a,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: ga,
        lastRenderedState: a
      },
      next: null
    }, l.memoizedState = t, l = l.alternate, l !== null && (l.memoizedState = t), t;
  }
  function Co(l) {
    var t = Mo(l);
    t.next === null && (t = l.alternate.memoizedState), Xu(
      l,
      t.next.queue,
      {},
      Nt()
    );
  }
  function Ii() {
    return Ll(fu);
  }
  function Uo() {
    return Ol().memoizedState;
  }
  function Ro() {
    return Ol().memoizedState;
  }
  function Dv(l) {
    for (var t = l.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var a = Nt();
          l = Ha(a);
          var e = qa(t, l, a);
          e !== null && (mt(e, t, a), pu(e, t, a)), t = { cache: Ai() }, l.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Mv(l, t, a) {
    var e = Nt();
    a = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, kn(l) ? Ho(t, a) : (a = gi(l, t, a, e), a !== null && (mt(a, l, e), qo(a, t, e)));
  }
  function po(l, t, a) {
    var e = Nt();
    Xu(l, t, a, e);
  }
  function Xu(l, t, a, e) {
    var u = {
      lane: e,
      revertLane: 0,
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (kn(l)) Ho(t, u);
    else {
      var n = l.alternate;
      if (l.lanes === 0 && (n === null || n.lanes === 0) && (n = t.lastRenderedReducer, n !== null))
        try {
          var c = t.lastRenderedState, i = n(c, a);
          if (u.hasEagerState = !0, u.eagerState = i, St(i, c))
            return Mn(l, t, u, 0), sl === null && Dn(), !1;
        } catch {
        }
      if (a = gi(l, t, u, e), a !== null)
        return mt(a, l, e), qo(a, t, e), !0;
    }
    return !1;
  }
  function Pi(l, t, a, e) {
    if (e = {
      lane: 2,
      revertLane: Lf(),
      gesture: null,
      action: e,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, kn(l)) {
      if (t) throw Error(E(479));
    } else
      t = gi(
        l,
        a,
        e,
        2
      ), t !== null && mt(t, l, 2);
  }
  function kn(l) {
    var t = l.alternate;
    return l === Q || t !== null && t === Q;
  }
  function Ho(l, t) {
    Ze = Ln = !0;
    var a = l.pending;
    a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t;
  }
  function qo(l, t, a) {
    if ((a & 4194048) !== 0) {
      var e = t.lanes;
      e &= l.pendingLanes, a |= e, t.lanes = a, qm(l, a);
    }
  }
  var In = {
    readContext: Ll,
    use: wn,
    useCallback: _l,
    useContext: _l,
    useEffect: _l,
    useImperativeHandle: _l,
    useLayoutEffect: _l,
    useInsertionEffect: _l,
    useMemo: _l,
    useReducer: _l,
    useRef: _l,
    useState: _l,
    useDebugValue: _l,
    useDeferredValue: _l,
    useTransition: _l,
    useSyncExternalStore: _l,
    useId: _l,
    useHostTransitionStatus: _l,
    useFormState: _l,
    useActionState: _l,
    useOptimistic: _l,
    useMemoCache: _l,
    useCacheRefresh: _l,
    useEffectEvent: _l
  }, Yo = {
    readContext: Ll,
    use: wn,
    useCallback: function(l, t) {
      return lt().memoizedState = [
        l,
        t === void 0 ? null : t
      ], l;
    },
    useContext: Ll,
    useEffect: Eo,
    useImperativeHandle: function(l, t, a) {
      a = a != null ? a.concat([l]) : null, Fn(
        4194308,
        4,
        _o.bind(null, t, l),
        a
      );
    },
    useLayoutEffect: function(l, t) {
      return Fn(4194308, 4, l, t);
    },
    useInsertionEffect: function(l, t) {
      Fn(4, 2, l, t);
    },
    useMemo: function(l, t) {
      var a = lt();
      t = t === void 0 ? null : t;
      var e = l();
      if (re) {
        Na(!0);
        try {
          l();
        } finally {
          Na(!1);
        }
      }
      return a.memoizedState = [e, t], e;
    },
    useReducer: function(l, t, a) {
      var e = lt();
      if (a !== void 0) {
        var u = a(t);
        if (re) {
          Na(!0);
          try {
            a(t);
          } finally {
            Na(!1);
          }
        }
      } else u = t;
      return e.memoizedState = e.baseState = u, l = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: l,
        lastRenderedState: u
      }, e.queue = l, l = l.dispatch = Mv.bind(
        null,
        Q,
        l
      ), [e.memoizedState, l];
    },
    useRef: function(l) {
      var t = lt();
      return l = { current: l }, t.memoizedState = l;
    },
    useState: function(l) {
      l = Ji(l);
      var t = l.queue, a = po.bind(null, Q, t);
      return t.dispatch = a, [l.memoizedState, a];
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, t) {
      var a = lt();
      return $i(a, l, t);
    },
    useTransition: function() {
      var l = Ji(!1);
      return l = Do.bind(
        null,
        Q,
        l.queue,
        !0,
        !1
      ), lt().memoizedState = l, [!1, l];
    },
    useSyncExternalStore: function(l, t, a) {
      var e = Q, u = lt();
      if (x) {
        if (a === void 0)
          throw Error(E(407));
        a = a();
      } else {
        if (a = t(), sl === null)
          throw Error(E(349));
        (w & 127) !== 0 || to(e, t, a);
      }
      u.memoizedState = a;
      var n = { value: a, getSnapshot: t };
      return u.queue = n, Eo(eo.bind(null, e, n, l), [
        l
      ]), e.flags |= 2048, xe(
        9,
        { destroy: void 0 },
        ao.bind(
          null,
          e,
          n,
          a,
          t
        ),
        null
      ), a;
    },
    useId: function() {
      var l = lt(), t = sl.identifierPrefix;
      if (x) {
        var a = kt, e = $t;
        a = (e & ~(1 << 32 - gt(e) - 1)).toString(32) + a, t = "_" + t + "R_" + a, a = Kn++, 0 < a && (t += "H" + a.toString(32)), t += "_";
      } else
        a = bv++, t = "_" + t + "r_" + a.toString(32) + "_";
      return l.memoizedState = t;
    },
    useHostTransitionStatus: Ii,
    useFormState: ro,
    useActionState: ro,
    useOptimistic: function(l) {
      var t = lt();
      t.memoizedState = t.baseState = l;
      var a = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = a, t = Pi.bind(
        null,
        Q,
        !0,
        a
      ), a.dispatch = t, [l, t];
    },
    useMemoCache: xi,
    useCacheRefresh: function() {
      return lt().memoizedState = Dv.bind(
        null,
        Q
      );
    },
    useEffectEvent: function(l) {
      var t = lt(), a = { impl: l };
      return t.memoizedState = a, function() {
        if ((al & 2) !== 0)
          throw Error(E(440));
        return a.impl.apply(void 0, arguments);
      };
    }
  }, Bo = {
    readContext: Ll,
    use: wn,
    useCallback: No,
    useContext: Ll,
    useEffect: Wi,
    useImperativeHandle: zo,
    useInsertionEffect: To,
    useLayoutEffect: bo,
    useMemo: Oo,
    useReducer: Wn,
    useRef: go,
    useState: function() {
      return Wn(ga);
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, t) {
      var a = Ol();
      return Ao(
        a,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Wn(ga)[0], t = Ol().memoizedState;
      return [
        typeof l == "boolean" ? l : Gu(l),
        t
      ];
    },
    useSyncExternalStore: lo,
    useId: Uo,
    useHostTransitionStatus: Ii,
    useFormState: vo,
    useActionState: vo,
    useOptimistic: function(l, t) {
      var a = Ol();
      return co(a, ml, l, t);
    },
    useMemoCache: xi,
    useCacheRefresh: Ro,
    useEffectEvent: So
  }, Cv = {
    readContext: Ll,
    use: wn,
    useCallback: No,
    useContext: Ll,
    useEffect: Wi,
    useImperativeHandle: zo,
    useInsertionEffect: To,
    useLayoutEffect: bo,
    useMemo: Oo,
    useReducer: Ki,
    useRef: go,
    useState: function() {
      return Ki(ga);
    },
    useDebugValue: Fi,
    useDeferredValue: function(l, t) {
      var a = Ol();
      return ml === null ? $i(a, l, t) : Ao(
        a,
        ml.memoizedState,
        l,
        t
      );
    },
    useTransition: function() {
      var l = Ki(ga)[0], t = Ol().memoizedState;
      return [
        typeof l == "boolean" ? l : Gu(l),
        t
      ];
    },
    useSyncExternalStore: lo,
    useId: Uo,
    useHostTransitionStatus: Ii,
    useFormState: ho,
    useActionState: ho,
    useOptimistic: function(l, t) {
      var a = Ol();
      return ml !== null ? co(a, ml, l, t) : (a.baseState = l, [l, a.queue.dispatch]);
    },
    useMemoCache: xi,
    useCacheRefresh: Ro,
    useEffectEvent: So
  };
  function lf(l, t, a, e) {
    t = l.memoizedState, a = a(e, t), a = a == null ? t : V({}, t, a), l.memoizedState = a, l.lanes === 0 && (l.updateQueue.baseState = a);
  }
  var tf = {
    enqueueSetState: function(l, t, a) {
      l = l._reactInternals;
      var e = Nt(), u = Ha(e);
      u.payload = t, a != null && (u.callback = a), t = qa(l, u, e), t !== null && (mt(t, l, e), pu(t, l, e));
    },
    enqueueReplaceState: function(l, t, a) {
      l = l._reactInternals;
      var e = Nt(), u = Ha(e);
      u.tag = 1, u.payload = t, a != null && (u.callback = a), t = qa(l, u, e), t !== null && (mt(t, l, e), pu(t, l, e));
    },
    enqueueForceUpdate: function(l, t) {
      l = l._reactInternals;
      var a = Nt(), e = Ha(a);
      e.tag = 2, t != null && (e.callback = t), t = qa(l, e, a), t !== null && (mt(t, l, a), pu(t, l, a));
    }
  };
  function Go(l, t, a, e, u, n, c) {
    return l = l.stateNode, typeof l.shouldComponentUpdate == "function" ? l.shouldComponentUpdate(e, n, c) : t.prototype && t.prototype.isPureReactComponent ? !Nu(a, e) || !Nu(u, n) : !0;
  }
  function Xo(l, t, a, e) {
    l = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, e), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, e), t.state !== l && tf.enqueueReplaceState(t, t.state, null);
  }
  function ve(l, t) {
    var a = t;
    if ("ref" in t) {
      a = {};
      for (var e in t)
        e !== "ref" && (a[e] = t[e]);
    }
    if (l = l.defaultProps) {
      a === t && (a = V({}, a));
      for (var u in l)
        a[u] === void 0 && (a[u] = l[u]);
    }
    return a;
  }
  function jo(l) {
    An(l);
  }
  function Qo(l) {
    console.error(l);
  }
  function Zo(l) {
    An(l);
  }
  function Pn(l, t) {
    try {
      var a = l.onUncaughtError;
      a(t.value, { componentStack: t.stack });
    } catch (e) {
      setTimeout(function() {
        throw e;
      });
    }
  }
  function Vo(l, t, a) {
    try {
      var e = l.onCaughtError;
      e(a.value, {
        componentStack: a.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function af(l, t, a) {
    return a = Ha(a), a.tag = 3, a.payload = { element: null }, a.callback = function() {
      Pn(l, t);
    }, a;
  }
  function xo(l) {
    return l = Ha(l), l.tag = 3, l;
  }
  function Lo(l, t, a, e) {
    var u = a.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var n = e.value;
      l.payload = function() {
        return u(n);
      }, l.callback = function() {
        Vo(t, a, e);
      };
    }
    var c = a.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (l.callback = function() {
      Vo(t, a, e), typeof u != "function" && (Va === null ? Va = /* @__PURE__ */ new Set([this]) : Va.add(this));
      var i = e.stack;
      this.componentDidCatch(e.value, {
        componentStack: i !== null ? i : ""
      });
    });
  }
  function Uv(l, t, a, e, u) {
    if (a.flags |= 32768, e !== null && typeof e == "object" && typeof e.then == "function") {
      if (t = a.alternate, t !== null && ce(
        t,
        a,
        u,
        !0
      ), a = Kl.current, a !== null) {
        switch (a.tag) {
          case 31:
          case 13:
          case 19:
            return kl === null ? Tc() : a.alternate === null && zl === 0 && (zl = 3), a.flags &= -257, a.flags |= 65536, a.lanes = u, e === jn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? a.updateQueue = /* @__PURE__ */ new Set([e]) : t.add(e), Zf(l, e, u)), !1;
          case 22:
            return a.flags |= 65536, e === jn ? a.flags |= 16384 : (t = a.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([e])
            }, a.updateQueue = t) : (a = t.retryQueue, a === null ? t.retryQueue = /* @__PURE__ */ new Set([e]) : a.add(e)), Zf(l, e, u)), !1;
        }
        throw Error(E(435, a.tag));
      }
      return Zf(l, e, u), Tc(), !1;
    }
    if (x)
      return t = Kl.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, e !== _i && (l = Error(E(422), { cause: e }), Du(Ut(l, a)))) : (e !== _i && (t = Error(E(423), {
        cause: e
      }), Du(
        Ut(t, a)
      )), l = l.current.alternate, l.flags |= 65536, u &= -u, l.lanes |= u, e = Ut(e, a), u = af(
        l.stateNode,
        e,
        u
      ), pi(l, u), zl !== 4 && (zl = 2)), !1;
    var n = Error(E(520), { cause: e });
    if (n = Ut(n, a), Ju === null ? Ju = [n] : Ju.push(n), zl !== 4 && (zl = 2), t === null) return !0;
    e = Ut(e, a), a = t;
    do {
      switch (a.tag) {
        case 3:
          return a.flags |= 65536, l = u & -u, a.lanes |= l, l = af(a.stateNode, e, l), pi(a, l), !1;
        case 1:
          if (t = a.type, n = a.stateNode, (a.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || n !== null && typeof n.componentDidCatch == "function" && (Va === null || !Va.has(n))))
            return a.flags |= 65536, u &= -u, a.lanes |= u, u = xo(u), Lo(
              u,
              l,
              a,
              e
            ), pi(a, u), !1;
          break;
        case 22:
          if (a.memoizedState !== null)
            return a.flags |= 65536, !1;
      }
      a = a.return;
    } while (a !== null);
    return !1;
  }
  var ef = Error(E(461)), Ul = !1;
  function ql(l, t, a, e) {
    t.child = l === null ? ws(t, null, a, e) : de(
      t,
      l.child,
      a,
      e
    );
  }
  function Ko(l, t, a, e, u) {
    a = a.render;
    var n = t.ref;
    if ("ref" in e) {
      var c = {};
      for (var i in e)
        i !== "ref" && (c[i] = e[i]);
    } else c = e;
    return ie(t), e = ji(
      l,
      t,
      a,
      c,
      n,
      u
    ), i = Qi(), l !== null && !Ul ? (Zi(l, t, u), Ea(l, t, u)) : (x && i && pn(t), t.flags |= 1, ql(l, t, e, u), t.child);
  }
  function Jo(l, t, a, e, u) {
    if (l === null) {
      var n = a.type;
      return typeof n == "function" && !Ei(n) && n.defaultProps === void 0 && a.compare === null ? (t.tag = 15, t.type = n, wo(
        l,
        t,
        n,
        e,
        u
      )) : (l = Un(
        a.type,
        null,
        e,
        t,
        t.mode,
        u
      ), l.ref = t.ref, l.return = t, t.child = l);
    }
    if (n = l.child, !df(l, u)) {
      var c = n.memoizedProps;
      if (a = a.compare, a = a !== null ? a : Nu, a(c, e) && l.ref === t.ref)
        return Ea(l, t, u);
    }
    return t.flags |= 1, l = da(n, e), l.ref = t.ref, l.return = t, t.child = l;
  }
  function wo(l, t, a, e, u) {
    if (l !== null) {
      var n = l.memoizedProps;
      if (Nu(n, e) && l.ref === t.ref)
        if (Ul = !1, t.pendingProps = e = n, df(l, u))
          (l.flags & 131072) !== 0 && (Ul = !0);
        else
          return t.lanes = l.lanes, Ea(l, t, u);
    }
    return uf(
      l,
      t,
      a,
      e,
      u
    );
  }
  function Wo(l, t, a, e) {
    var u = e.children, n = l !== null ? l.memoizedState : null;
    if (l === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), e.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (n = n !== null ? n.baseLanes | a : a, l !== null) {
          for (e = t.child = l.child, u = 0; e !== null; )
            u = u | e.lanes | e.childLanes, e = e.sibling;
          e = u & ~n;
        } else e = 0, t.child = null;
        return Fo(
          l,
          t,
          n,
          a,
          e
        );
      }
      if ((a & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, l !== null && Gn(
          t,
          n !== null ? n.cachePool : null
        ), n !== null ? $s(t, n) : qi(), ks(t);
      else
        return e = t.lanes = 536870912, Fo(
          l,
          t,
          n !== null ? n.baseLanes | a : a,
          a,
          e
        );
    } else
      n !== null ? (Gn(t, n.cachePool), $s(t, n), Ga(), t.memoizedState = null) : (l !== null && Gn(t, null), qi(), Ga());
    return ql(l, t, u, a), t.child;
  }
  function ju(l, t) {
    return l !== null && l.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function Fo(l, t, a, e, u) {
    var n = Mi();
    return n = n === null ? null : { parent: Ml._currentValue, pool: n }, t.memoizedState = {
      baseLanes: a,
      cachePool: n
    }, l !== null && Gn(t, null), qi(), ks(t), l !== null && ce(l, t, e, !0), t.childLanes = u, null;
  }
  function lc(l, t) {
    return t = tc(
      { mode: t.mode, children: t.children },
      l.mode
    ), t.ref = l.ref, l.child = t, t.return = l, t;
  }
  function $o(l, t, a) {
    return de(t, l.child, null, a), l = lc(t, t.pendingProps), l.flags |= 2, Tt(t), t.memoizedState = null, l;
  }
  function Rv(l, t, a) {
    var e = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, l === null) {
      if (x) {
        if (e.mode === "hidden")
          return l = lc(t, e), t.lanes = 536870912, l.memoizedState = { baseLanes: 0, cachePool: null }, ju(null, l);
        if (Bi(t), (l = vl) ? (l = _d(
          l,
          Ht
        ), l = l !== null && l.data === "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Da !== null ? { id: $t, overflow: kt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ps(l), a.return = t, t.child = a, Xl = t, vl = null)) : l = null, l === null) throw Ca(t);
        return t.lanes = 536870912, null;
      }
      return lc(t, e);
    }
    var n = l.memoizedState;
    if (n !== null) {
      var c = n.dehydrated;
      if (Bi(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = $o(
            l,
            t,
            a
          );
        else if (t.memoizedState !== null)
          t.child = l.child, t.flags |= 128, t = null;
        else throw Error(E(558));
      else if (Ul || ce(l, t, a, !1), u = (a & l.childLanes) !== 0, Ul || u) {
        if (Ya.current === null) {
          if (e = sl, e !== null && (c = Ym(e, a), c !== 0 && c !== n.retryLane))
            throw n.retryLane = c, ae(l, c), mt(e, l, c), ef;
          Tc();
        }
        t = $o(
          l,
          t,
          a
        );
      } else
        l = n.treeContext, vl = Yt(c.nextSibling), Xl = t, x = !0, Ma = null, Ht = !1, l !== null && Ys(t, l), t = lc(t, e), t.flags |= 134221824;
      return t;
    }
    return l = da(l.child, {
      mode: e.mode,
      children: e.children
    }), l.ref = t.ref, t.child = l, l.return = t, l;
  }
  function Le(l, t) {
    var a = t.ref;
    if (a === null)
      l !== null && l.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof a != "function" && typeof a != "object")
        throw Error(E(284));
      (l === null || l.ref !== a) && (t.flags |= 4194816);
    }
  }
  function uf(l, t, a, e, u) {
    return ie(t), a = ji(
      l,
      t,
      a,
      e,
      void 0,
      u
    ), e = Qi(), l !== null && !Ul ? (Zi(l, t, u), Ea(l, t, u)) : (x && e && pn(t), t.flags |= 1, ql(l, t, a, u), t.child);
  }
  function ko(l, t, a, e, u, n) {
    return ie(t), t.updateQueue = null, a = Ps(
      t,
      e,
      a,
      u
    ), Is(l), e = Qi(), l !== null && !Ul ? (Zi(l, t, n), Ea(l, t, n)) : (x && e && pn(t), t.flags |= 1, ql(l, t, a, n), t.child);
  }
  function Io(l, t, a, e, u) {
    if (ie(t), t.stateNode === null) {
      var n = qe, c = a.contextType;
      typeof c == "object" && c !== null && (n = Ll(c)), n = new a(e, n), t.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = tf, t.stateNode = n, n._reactInternals = t, n = t.stateNode, n.props = e, n.state = t.memoizedState, n.refs = {}, Ui(t), c = a.contextType, n.context = typeof c == "object" && c !== null ? Ll(c) : qe, n.state = t.memoizedState, c = a.getDerivedStateFromProps, typeof c == "function" && (lf(
        t,
        a,
        c,
        e
      ), n.state = t.memoizedState), typeof a.getDerivedStateFromProps == "function" || typeof n.getSnapshotBeforeUpdate == "function" || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (c = n.state, typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount(), c !== n.state && tf.enqueueReplaceState(n, n.state, null), qu(t, e, n, u), Hu(), n.state = t.memoizedState), typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !0;
    } else if (l === null) {
      n = t.stateNode;
      var i = t.memoizedProps, f = ve(a, i);
      n.props = f;
      var v = n.context, g = a.contextType;
      c = qe, typeof g == "object" && g !== null && (c = Ll(g));
      var b = a.getDerivedStateFromProps;
      g = typeof b == "function" || typeof n.getSnapshotBeforeUpdate == "function", i = t.pendingProps !== i, g || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (i || v !== c) && Xo(
        t,
        n,
        e,
        c
      ), pa = !1;
      var d = t.memoizedState;
      n.state = d, qu(t, e, n, u), Hu(), v = t.memoizedState, i || d !== v || pa ? (typeof b == "function" && (lf(
        t,
        a,
        b,
        e
      ), v = t.memoizedState), (f = pa || Go(
        t,
        a,
        f,
        e,
        d,
        v,
        c
      )) ? (g || typeof n.UNSAFE_componentWillMount != "function" && typeof n.componentWillMount != "function" || (typeof n.componentWillMount == "function" && n.componentWillMount(), typeof n.UNSAFE_componentWillMount == "function" && n.UNSAFE_componentWillMount()), typeof n.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = e, t.memoizedState = v), n.props = e, n.state = v, n.context = c, e = f) : (typeof n.componentDidMount == "function" && (t.flags |= 4194308), e = !1);
    } else {
      n = t.stateNode, Ri(l, t), c = t.memoizedProps, g = ve(a, c), n.props = g, b = t.pendingProps, d = n.context, v = a.contextType, f = qe, typeof v == "object" && v !== null && (f = Ll(v)), i = a.getDerivedStateFromProps, (v = typeof i == "function" || typeof n.getSnapshotBeforeUpdate == "function") || typeof n.UNSAFE_componentWillReceiveProps != "function" && typeof n.componentWillReceiveProps != "function" || (c !== b || d !== f) && Xo(
        t,
        n,
        e,
        f
      ), pa = !1, d = t.memoizedState, n.state = d, qu(t, e, n, u), Hu();
      var h = t.memoizedState;
      c !== b || d !== h || pa || l !== null && l.dependencies !== null && Yn(l.dependencies) ? (typeof i == "function" && (lf(
        t,
        a,
        i,
        e
      ), h = t.memoizedState), (g = pa || Go(
        t,
        a,
        g,
        e,
        d,
        h,
        f
      ) || l !== null && l.dependencies !== null && Yn(l.dependencies)) ? (v || typeof n.UNSAFE_componentWillUpdate != "function" && typeof n.componentWillUpdate != "function" || (typeof n.componentWillUpdate == "function" && n.componentWillUpdate(e, h, f), typeof n.UNSAFE_componentWillUpdate == "function" && n.UNSAFE_componentWillUpdate(
        e,
        h,
        f
      )), typeof n.componentDidUpdate == "function" && (t.flags |= 4), typeof n.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && d === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && d === l.memoizedState || (t.flags |= 1024), t.memoizedProps = e, t.memoizedState = h), n.props = e, n.state = h, n.context = f, e = g) : (typeof n.componentDidUpdate != "function" || c === l.memoizedProps && d === l.memoizedState || (t.flags |= 4), typeof n.getSnapshotBeforeUpdate != "function" || c === l.memoizedProps && d === l.memoizedState || (t.flags |= 1024), e = !1);
    }
    return n = e, Le(l, t), e = (t.flags & 128) !== 0, n || e ? (n = t.stateNode, a = e && typeof a.getDerivedStateFromError != "function" ? null : n.render(), t.flags |= 1, l !== null && e ? (t.child = de(
      t,
      l.child,
      null,
      u
    ), t.child = de(
      t,
      null,
      a,
      u
    )) : ql(l, t, a, u), t.memoizedState = n.state, l = t.child) : l = Ea(
      l,
      t,
      u
    ), l;
  }
  function Po(l, t, a, e) {
    return ue(), t.flags |= 256, ql(l, t, a, e), t.child;
  }
  var nf = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function cf(l) {
    return { baseLanes: l, cachePool: Zs() };
  }
  function ff(l, t, a) {
    return l = l !== null ? l.childLanes & ~a : 0, t && (l |= zt), l;
  }
  function l0(l, t, a) {
    var e = t.pendingProps, u = !1, n = (t.flags & 128) !== 0, c;
    if ((c = n) || (c = l !== null && l.memoizedState === null ? !1 : (Jl.current & 2) !== 0), c && (u = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, l === null) {
      if (x) {
        if (u ? Ba(t) : Ga(), (l = vl) ? (l = _d(
          l,
          Ht
        ), l = l !== null && l.data !== "&" ? l : null, l !== null && (t.memoizedState = {
          dehydrated: l,
          treeContext: Da !== null ? { id: $t, overflow: kt } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, a = ps(l), a.return = t, t.child = a, Xl = t, vl = null)) : l = null, l === null) throw Ca(t);
        return im(l) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return n = e.children, e = e.fallback, u ? (Ga(), u = t.mode, n = tc(
        { mode: "hidden", children: n },
        u
      ), e = ee(
        e,
        u,
        a,
        null
      ), n.return = t, e.return = t, n.sibling = e, t.child = n, e = t.child, e.memoizedState = cf(a), e.childLanes = ff(
        l,
        c,
        a
      ), t.memoizedState = nf, ju(null, e)) : (Ba(t), mf(t, n));
    }
    var i = l.memoizedState;
    if (i !== null) {
      var f = i.dehydrated;
      if (f !== null)
        return pv(
          l,
          t,
          n,
          c,
          e,
          f,
          i,
          a
        );
    }
    return u ? (Ga(), u = e.fallback, n = t.mode, i = l.child, f = i.sibling, e = da(i, {
      mode: "hidden",
      children: e.children
    }), e.subtreeFlags = i.subtreeFlags & 1206910976, f !== null ? u = da(f, u) : (u = ee(
      u,
      n,
      a,
      null
    ), u.flags |= 2), u.return = t, e.return = t, e.sibling = u, t.child = e, ju(null, e), e = t.child, u = l.child.memoizedState, u === null ? u = cf(a) : (n = u.cachePool, n !== null ? (i = Ml._currentValue, n = n.parent !== i ? { parent: i, pool: i } : n) : n = Zs(), u = {
      baseLanes: u.baseLanes | a,
      cachePool: n
    }), e.memoizedState = u, e.childLanes = ff(
      l,
      c,
      a
    ), t.memoizedState = nf, ju(l.child, e)) : (Ba(t), a = l.child, l = a.sibling, a = da(a, {
      mode: "visible",
      children: e.children
    }), a.return = t, a.sibling = null, l !== null && (c = t.deletions, c === null ? (t.deletions = [l], t.flags |= 16) : c.push(l)), t.child = a, t.memoizedState = null, a);
  }
  function mf(l, t) {
    return t = tc(
      { mode: "visible", children: t },
      l.mode
    ), t.return = l, l.child = t;
  }
  function tc(l, t) {
    return l = nt(22, l, null, t), l.lanes = 0, l;
  }
  function ac(l, t, a) {
    return de(t, l.child, null, a), l = mf(
      t,
      t.pendingProps.children
    ), l.flags |= 2, t.memoizedState = null, l;
  }
  function pv(l, t, a, e, u, n, c, i) {
    if (a)
      return t.flags & 256 ? (Ba(t), t.flags &= -257, ac(
        l,
        t,
        i
      )) : t.memoizedState !== null ? (Ga(), t.child = l.child, t.flags |= 128, null) : (Ga(), n = u.fallback, c = t.mode, u = tc(
        { mode: "visible", children: u.children },
        c
      ), n = ee(
        n,
        c,
        i,
        null
      ), n.flags |= 2, u.return = t, n.return = t, u.sibling = n, t.child = u, de(t, l.child, null, i), u = t.child, u.memoizedState = cf(i), u.childLanes = ff(
        l,
        e,
        i
      ), t.memoizedState = nf, ju(null, u));
    if (Ba(t), im(n)) {
      if (e = n.nextSibling && n.nextSibling.dataset, e) var f = e.dgst;
      return e = f, e !== "" && (u = Error(E(419)), u.stack = "", u.digest = e, Du({ value: u, source: null, stack: null })), ac(
        l,
        t,
        i
      );
    }
    if (Ul || ce(l, t, i, !1), e = (i & l.childLanes) !== 0, Ul || e) {
      if (Ya.current !== null)
        return ac(
          l,
          t,
          i
        );
      if (e = sl, e !== null && (u = Ym(
        e,
        i
      ), u !== 0 && u !== c.retryLane))
        throw c.retryLane = u, ae(l, u), mt(e, l, u), ef;
      return cm(n) || Tc(), ac(
        l,
        t,
        i
      );
    }
    return cm(n) ? (t.flags |= 192, t.child = l.child, null) : (l = c.treeContext, vl = Yt(n.nextSibling), Xl = t, x = !0, Ma = null, Ht = !1, l !== null && Ys(t, l), t = mf(
      t,
      u.children
    ), t.flags |= 134221824, t);
  }
  function t0(l, t, a) {
    l.lanes |= t;
    var e = l.alternate;
    e !== null && (e.lanes |= t), qn(l.return, t, a);
  }
  function a0(l) {
    for (var t = null; l !== null; ) {
      var a = l.alternate;
      a !== null && xn(a) === null && (t = l), l = l.sibling;
    }
    return t;
  }
  function ec(l, t, a, e, u, n) {
    var c = l.memoizedState;
    c === null ? l.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: e,
      tail: a,
      tailMode: u,
      treeForkCount: n
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = e, c.tail = a, c.tailMode = u, c.treeForkCount = n);
  }
  function sf(l) {
    var t = l.child;
    for (l.child = null; t !== null; ) {
      var a = t.sibling;
      t.sibling = l.child, l.child = t, t = a;
    }
  }
  function of(l, t, a) {
    var e = t.pendingProps, u = e.revealOrder, n = e.tail;
    e = e.children;
    var c = Jl.current;
    if (t.flags & 128)
      return Yu(t, c), null;
    var i = (c & 2) !== 0;
    if (i ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Yu(t, c), u === "backwards" && l !== null ? (sf(l), ql(l, t, e, a), sf(l)) : ql(l, t, e, a), e = x ? Au : 0, !i && l !== null && (l.flags & 128) !== 0)
      l: for (l = t.child; l !== null; ) {
        if (l.tag === 13)
          l.memoizedState !== null && t0(l, a, t);
        else if (l.tag === 19)
          t0(l, a, t);
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
        a = a0(t.child), a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null, sf(t)), ec(
          t,
          !0,
          u,
          null,
          n,
          e
        );
        break;
      case "unstable_legacy-backwards":
        for (a = null, u = t.child, t.child = null; u !== null; ) {
          if (l = u.alternate, l !== null && xn(l) === null) {
            t.child = u;
            break;
          }
          l = u.sibling, u.sibling = a, a = u, u = l;
        }
        ec(
          t,
          !0,
          a,
          null,
          n,
          e
        );
        break;
      case "together":
        ec(
          t,
          !1,
          null,
          null,
          void 0,
          e
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        a = a0(t.child), a === null ? (u = t.child, t.child = null) : (u = a.sibling, a.sibling = null), ec(
          t,
          !1,
          u,
          a,
          n,
          e
        );
    }
    return t.child;
  }
  function e0(l, t, a) {
    var e = t.pendingProps;
    return Ua(t, t.type, e.value), ql(l, t, e.children, a), t.child;
  }
  function Ea(l, t, a) {
    if (l !== null && (t.dependencies = l.dependencies), Za |= t.lanes, (a & t.childLanes) === 0)
      if (l !== null) {
        if (ce(
          l,
          t,
          a,
          !1
        ), (a & t.childLanes) === 0)
          return null;
      } else return null;
    if (l !== null && t.child !== l.child)
      throw Error(E(153));
    if (t.child !== null) {
      for (l = t.child, a = da(l, l.pendingProps), t.child = a, a.return = t; l.sibling !== null; )
        l = l.sibling, a = a.sibling = da(l, l.pendingProps), a.return = t;
      a.sibling = null;
    }
    return t.child;
  }
  function df(l, t) {
    return (l.lanes & t) !== 0 ? !0 : (l = l.dependencies, !!(l !== null && Yn(l)));
  }
  function Hv(l, t, a) {
    switch (t.tag) {
      case 3:
        fn(t, t.stateNode.containerInfo), Ua(t, Ml, l.memoizedState.cache), ue();
        break;
      case 27:
      case 5:
        Xc(t);
        break;
      case 4:
        fn(t, t.stateNode.containerInfo);
        break;
      case 10:
        Ua(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Bi(t), null;
        break;
      case 13:
        var e = t.memoizedState;
        if (e !== null) {
          if (e.dehydrated !== null)
            return Ba(t), t.flags |= 128, null;
          e = ce(
            l,
            t,
            a,
            !1
          );
          var u = t.child.childLanes;
          return e || (a & u) !== 0 ? l0(l, t, a) : (Ba(t), l = Ea(
            l,
            t,
            a
          ), l !== null ? l.sibling : null);
        }
        Ba(t);
        break;
      case 19:
        if (t.flags & 128)
          return of(
            l,
            t,
            a
          );
        if (u = (l.flags & 128) !== 0, e = (a & t.childLanes) !== 0, e || (ce(
          l,
          t,
          a,
          !1
        ), e = (a & t.childLanes) !== 0), u) {
          if (e)
            return of(
              l,
              t,
              a
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), Yu(t, Jl.current), e) break;
        return null;
      case 22:
        return t.lanes = 0, Wo(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        Ua(t, Ml, l.memoizedState.cache);
    }
    return Ea(l, t, a);
  }
  function u0(l, t, a) {
    if (l !== null)
      if (l.memoizedProps !== t.pendingProps)
        Ul = !0;
      else {
        if (!df(l, a) && (t.flags & 128) === 0)
          return Ul = !1, Hv(
            l,
            t,
            a
          );
        Ul = (l.flags & 131072) !== 0;
      }
    else
      Ul = !1, x && (t.flags & 1048576) !== 0 && qs(t, Au, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        l: {
          var e = t.pendingProps;
          if (l = se(t.elementType), t.type = l, typeof l == "function")
            Ei(l) ? (e = ve(l, e), t.tag = 1, t = Io(
              null,
              t,
              l,
              e,
              a
            )) : (t.tag = 0, t = uf(
              null,
              t,
              l,
              e,
              a
            ));
          else {
            if (l != null) {
              var u = l.$$typeof;
              if (u === N) {
                t.tag = 11, t = Ko(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              } else if (u === ul) {
                t.tag = 14, t = Jo(
                  null,
                  t,
                  l,
                  e,
                  a
                );
                break l;
              } else if (u === El) {
                t.tag = 10, t.type = l, t = e0(
                  null,
                  t,
                  a
                );
                break l;
              }
            }
            throw t = P(l) || l, Error(E(306, t, ""));
          }
        }
        return t;
      case 0:
        return uf(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 1:
        return e = t.type, u = ve(
          e,
          t.pendingProps
        ), Io(
          l,
          t,
          e,
          u,
          a
        );
      case 3:
        l: {
          if (fn(
            t,
            t.stateNode.containerInfo
          ), l === null) throw Error(E(387));
          e = t.pendingProps;
          var n = t.memoizedState;
          u = n.element, Ri(l, t), qu(t, e, null, a);
          var c = t.memoizedState;
          if (e = c.cache, Ua(t, Ml, e), e !== n.cache && Oi(
            t,
            [Ml],
            a,
            !0
          ), Hu(), e = c.element, n.isDehydrated)
            if (n = {
              element: e,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = n, t.memoizedState = n, t.flags & 256) {
              t = Po(
                l,
                t,
                e,
                a
              );
              break l;
            } else if (e !== u) {
              u = Ut(
                Error(E(424)),
                t
              ), Du(u), t = Po(
                l,
                t,
                e,
                a
              );
              break l;
            } else
              for (l = t.stateNode.containerInfo, l.nodeType === 9 ? l = l.body : l = l.nodeName === "HTML" ? l.ownerDocument.body : l, vl = Yt(l.firstChild), Xl = t, x = !0, Ma = null, Ht = !0, a = ws(
                t,
                null,
                e,
                a
              ), t.child = a; a; )
                a.flags = a.flags & -3 | 134221824, a = a.sibling;
          else {
            if (ue(), e === u) {
              t = Ea(
                l,
                t,
                a
              );
              break l;
            }
            ql(l, t, e, a);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Le(l, t), l === null ? (a = Cd(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = a : x || (t.stateNode = fd(
          t.type,
          t.pendingProps,
          _a.current,
          t
        )) : t.memoizedState = Cd(
          t.type,
          l.memoizedProps,
          t.pendingProps,
          l.memoizedState
        ), null;
      case 27:
        return Xc(t), l === null && x && (e = t.stateNode = Od(
          t.type,
          t.pendingProps,
          _a.current
        ), Xl = t, Ht = !0, u = vl, Ka(t.type) ? (fm = u, vl = Yt(e.firstChild)) : vl = u), ql(
          l,
          t,
          t.pendingProps.children,
          a
        ), Le(l, t), l === null && (t.flags |= 4194304), t.child;
      case 5:
        return l === null && x && ((u = e = vl) && (e = Dy(
          e,
          t.type,
          t.pendingProps,
          Ht
        ), e !== null ? (t.stateNode = e, Xl = t, vl = Yt(e.firstChild), Ht = !1, u = !0) : u = !1), u || Ca(t)), Xc(t), u = t.type, n = t.pendingProps, c = l !== null ? l.memoizedProps : null, e = n.children, Pf(u, n) ? e = null : c !== null && Pf(u, c) && (t.flags |= 32), t.memoizedState !== null && (u = ji(
          l,
          t,
          _v,
          null,
          null,
          a
        ), fu._currentValue = u), Le(l, t), ql(l, t, e, a), t.child;
      case 6:
        return l === null && x && ((l = a = vl) && (a = My(
          a,
          t.pendingProps,
          Ht
        ), a !== null ? (t.stateNode = a, Xl = t, vl = null, l = !0) : l = !1), l || Ca(t)), null;
      case 13:
        return l0(l, t, a);
      case 4:
        return fn(
          t,
          t.stateNode.containerInfo
        ), e = t.pendingProps, l === null ? t.child = de(
          t,
          null,
          e,
          a
        ) : ql(l, t, e, a), t.child;
      case 11:
        return Ko(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 7:
        return e = t.pendingProps, Le(l, t), ql(l, t, e, a), t.child;
      case 8:
        return ql(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 12:
        return ql(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 10:
        return e0(l, t, a);
      case 9:
        return u = t.type._context, e = t.pendingProps.children, ie(t), u = Ll(u), e = e(u), t.flags |= 1, ql(l, t, e, a), t.child;
      case 14:
        return Jo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 15:
        return wo(
          l,
          t,
          t.type,
          t.pendingProps,
          a
        );
      case 19:
        return of(l, t, a);
      case 31:
        return Rv(l, t, a);
      case 22:
        return Wo(
          l,
          t,
          a,
          t.pendingProps
        );
      case 24:
        return ie(t), e = Ll(Ml), l === null ? (u = Mi(), u === null && (u = sl, n = Ai(), u.pooledCache = n, n.refCount++, n !== null && (u.pooledCacheLanes |= a), u = n), t.memoizedState = { parent: e, cache: u }, Ui(t), Ua(t, Ml, u)) : ((l.lanes & a) !== 0 && (Ri(l, t), qu(t, null, null, a), Hu()), u = l.memoizedState, n = t.memoizedState, u.parent !== e ? (u = { parent: e, cache: e }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), Ua(t, Ml, e)) : (e = n.cache, Ua(t, Ml, e), e !== u.cache && Oi(
          t,
          [Ml],
          a,
          !0
        ))), ql(
          l,
          t,
          t.pendingProps.children,
          a
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), e = t.pendingProps, e.name != null && e.name !== "auto" ? t.flags |= l === null ? 18882560 : 18874368 : x && pn(t), l !== null && l.memoizedProps.name !== e.name ? t.flags |= 4194816 : Le(l, t), ql(l, t, e.children, a), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(E(156, t.tag));
  }
  function Sa(l) {
    l.flags |= 4;
  }
  function rf(l, t, a, e, u) {
    var n;
    if ((n = (l.mode & 32) !== 0) && (n = a === null ? Hd(t, e) : Hd(t, e) && (e.src !== a.src || e.srcSet !== a.srcSet)), n) {
      if (l.flags |= 16777216, (u & 335544128) === u)
        if (l.stateNode.complete) l.flags |= 8192;
        else if (j0()) l.flags |= 8192;
        else
          throw oe = jn, Ci;
    } else l.flags &= -16777217;
  }
  function n0(l, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      l.flags &= -16777217;
    else if (l.flags |= 16777216, !qd(t))
      if (j0()) l.flags |= 8192;
      else
        throw oe = jn, Ci;
  }
  function uc(l, t) {
    t !== null && (l.flags |= 4), l.flags & 16384 && (t = l.tag !== 22 ? pm() : 536870912, l.lanes |= t, Fe |= t);
  }
  function Qu(l, t) {
    if (!x)
      switch (l.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var a = l.tail, e = null; a !== null; )
            a.alternate !== null && (e = a), a = a.sibling;
          e === null ? t || l.tail === null ? l.tail = null : l.tail.sibling = null : e.sibling = null;
          break;
        default:
          for (t = l.tail, a = null; t !== null; )
            t.alternate !== null && (a = t), t = t.sibling;
          a === null ? l.tail = null : a.sibling = null;
      }
  }
  function yl(l) {
    var t = l.alternate !== null && l.alternate.child === l.child, a = 0, e = 0;
    if (t)
      for (var u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags & 1206910976, e |= u.flags & 1206910976, u.return = l, u = u.sibling;
    else
      for (u = l.child; u !== null; )
        a |= u.lanes | u.childLanes, e |= u.subtreeFlags, e |= u.flags, u.return = l, u = u.sibling;
    return l.subtreeFlags |= e, l.childLanes = a, t;
  }
  function qv(l, t, a) {
    var e = t.pendingProps;
    switch (bi(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return yl(t), null;
      case 1:
        return yl(t), null;
      case 3:
        return a = t.stateNode, e = null, l !== null && (e = l.memoizedState.cache), t.memoizedState.cache !== e && (t.flags |= 2048), ya(Ml), be(), a.pendingContext && (a.context = a.pendingContext, a.pendingContext = null), (l === null || l.child === null) && (Ge(t) ? Sa(t) : l === null || l.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, zi())), yl(t), null;
      case 26:
        var u = t.type, n = t.memoizedState;
        return l === null ? (Sa(t), n !== null ? (yl(t), n0(t, n)) : (yl(t), rf(
          t,
          u,
          null,
          e,
          a
        ))) : n ? n !== l.memoizedState ? (Sa(t), yl(t), n0(t, n)) : (yl(t), t.flags &= -16777217) : (l = l.memoizedProps, l !== e && Sa(t), yl(t), rf(
          t,
          u,
          l,
          e,
          a
        )), null;
      case 27:
        if (mn(t), a = _a.current, u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Sa(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(E(166));
            return yl(t), t.subtreeFlags &= -33554433, null;
          }
          l = Wt.current, Ge(t) ? Bs(t) : (l = Od(u, e, a), t.stateNode = l, Sa(t));
        }
        return yl(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (mn(t), u = t.type, l !== null && t.stateNode != null)
          l.memoizedProps !== e && Sa(t);
        else {
          if (!e) {
            if (t.stateNode === null)
              throw Error(E(166));
            return yl(t), t.subtreeFlags &= -33554433, null;
          }
          if (n = Wt.current, Ge(t))
            Bs(t);
          else {
            var c = ku(
              _a.current
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
                    n = typeof e.is == "string" ? c.createElement("select", {
                      is: e.is
                    }) : c.createElement("select"), e.multiple ? n.multiple = !0 : e.size && (n.size = e.size);
                    break;
                  default:
                    n = typeof e.is == "string" ? c.createElement(u, { is: e.is }) : c.createElement(u);
                }
            }
            n[xl] = t, n[ut] = e;
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
            l: switch (Wl(n, u, e), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                e = !!e.autoFocus;
                break l;
              case "img":
                e = !0;
                break l;
              default:
                e = !1;
            }
            e && Sa(t);
          }
        }
        return yl(t), t.subtreeFlags &= -33554433, rf(
          t,
          t.type,
          l === null ? null : l.memoizedProps,
          t.pendingProps,
          a
        ), null;
      case 6:
        if (l && t.stateNode != null)
          l.memoizedProps !== e && Sa(t);
        else {
          if (typeof e != "string" && t.stateNode === null)
            throw Error(E(166));
          if (l = _a.current, Ge(t)) {
            if (l = t.stateNode, a = t.memoizedProps, e = null, u = Xl, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  e = u.memoizedProps;
              }
            l[xl] = t, l = !!(l.nodeValue === a || e !== null && e.suppressHydrationWarning === !0 || ud(l.nodeValue, a)), l || Ca(t, !0);
          } else
            l = ku(l).createTextNode(
              e
            ), l[xl] = t, t.stateNode = l;
        }
        return yl(t), null;
      case 31:
        if (a = t.memoizedState, l === null || l.memoizedState !== null) {
          if (e = Ge(t), a !== null) {
            if (l === null) {
              if (!e) throw Error(E(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(E(557));
              l[xl] = t;
            } else
              ue(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), l = !1;
          } else
            a = zi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = a), l = !0;
          if (!l)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(E(558));
        }
        return yl(t), null;
      case 13:
        if (e = t.memoizedState, l === null || l.memoizedState !== null && l.memoizedState.dehydrated !== null) {
          if (u = Ge(t), e !== null && e.dehydrated !== null) {
            if (l === null) {
              if (!u) throw Error(E(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(E(317));
              u[xl] = t;
            } else
              ue(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            yl(t), u = !1;
          } else
            u = zi(), l !== null && l.memoizedState !== null && (l.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return Tt(t), (t.flags & 128) !== 0 ? (t.lanes = a, t) : (a = e !== null, l = l !== null && l.memoizedState !== null, a && (e = t.child, u = null, e.alternate !== null && e.alternate.memoizedState !== null && e.alternate.memoizedState.cachePool !== null && (u = e.alternate.memoizedState.cachePool.pool), n = null, e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), n !== u && (e.flags |= 2048)), a !== l && a && (t.child.flags |= 8192), uc(t, t.updateQueue), yl(t), null);
      case 4:
        return be(), l === null && Wf(t.stateNode.containerInfo), t.flags |= 67108864, yl(t), null;
      case 10:
        return ya(t.type), yl(t), null;
      case 19:
        if (Gi(t), e = t.memoizedState, e === null) return yl(t), null;
        if (u = (t.flags & 128) !== 0, n = e.rendering, n === null)
          if (u) Qu(e, !1);
          else {
            if (zl !== 0 || l !== null && (l.flags & 128) !== 0)
              for (l = t.child; l !== null; ) {
                if (n = xn(l), n !== null) {
                  for (t.flags |= 128, Qu(e, !1), l = n.updateQueue, t.updateQueue = l, uc(t, l), t.subtreeFlags = 0, l = a, a = t.child; a !== null; )
                    Rs(a, l), a = a.sibling;
                  return Yu(
                    t,
                    Jl.current & 1 | 2
                  ), x && ra(t, e.treeForkCount), t.child;
                }
                l = l.sibling;
              }
            e.tail !== null && yt() > hc && (t.flags |= 128, u = !0, Qu(e, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (l = xn(n), l !== null) {
              if (t.flags |= 128, u = !0, l = l.updateQueue, t.updateQueue = l, uc(t, l), Qu(e, !0), e.tail === null && e.tailMode !== "collapsed" && e.tailMode !== "visible" && !n.alternate && !x)
                return yl(t), null;
            } else
              2 * yt() - e.renderingStartTime > hc && a !== 536870912 && (t.flags |= 128, u = !0, Qu(e, !1), t.lanes = 4194304);
          e.isBackwards ? (n.sibling = t.child, t.child = n) : (l = e.last, l !== null ? l.sibling = n : t.child = n, e.last = n);
        }
        if (e.tail !== null) {
          l = e.tail;
          l: {
            for (a = l; a !== null; ) {
              if (a.alternate !== null) {
                a = !1;
                break l;
              }
              a = a.sibling;
            }
            a = !0;
          }
          return e.rendering = l, e.tail = l.sibling, e.renderingStartTime = yt(), l.sibling = null, n = Jl.current, n = u ? n & 1 | 2 : n & 1, e.tailMode === "visible" || e.tailMode === "collapsed" || !a || x ? Yu(t, n) : (a = n, rl(Kl, t), rl(Jl, a), kl === null && (kl = t)), x && ra(t, e.treeForkCount), l;
        }
        return yl(t), null;
      case 22:
      case 23:
        return Tt(t), Yi(), e = t.memoizedState !== null, l !== null ? l.memoizedState !== null !== e && (t.flags |= 8192) : e && (t.flags |= 8192), e ? (a & 536870912) !== 0 && (t.flags & 128) === 0 && (yl(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : yl(t), a = t.updateQueue, a !== null && uc(t, a.retryQueue), a = null, l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== a && (t.flags |= 2048), l !== null && Vl(me), null;
      case 24:
        return a = null, l !== null && (a = l.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), ya(Ml), yl(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, yl(t), null;
    }
    throw Error(E(156, t.tag));
  }
  function Yv(l, t) {
    switch (bi(t), t.tag) {
      case 1:
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 3:
        return ya(Ml), be(), l = t.flags, (l & 65536) !== 0 && (l & 128) === 0 ? (t.flags = l & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return mn(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Tt(t), t.alternate === null)
            throw Error(E(340));
          ue();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 13:
        if (Tt(t), l = t.memoizedState, l !== null && l.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(E(340));
          ue();
        }
        return l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 19:
        return Gi(t), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null), t.flags |= 4, t) : null;
      case 4:
        return be(), null;
      case 10:
        return ya(t.type), null;
      case 22:
      case 23:
        return Tt(t), Yi(), l !== null && Vl(me), l = t.flags, l & 65536 ? (t.flags = l & -65537 | 128, t) : null;
      case 24:
        return ya(Ml), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function c0(l, t) {
    switch (bi(t), t.tag) {
      case 3:
        ya(Ml), be();
        break;
      case 26:
      case 27:
      case 5:
        mn(t);
        break;
      case 4:
        be();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        Gi(t);
        break;
      case 10:
        ya(t.type);
        break;
      case 22:
      case 23:
        Tt(t), Yi(), l !== null && Vl(me);
        break;
      case 24:
        ya(Ml);
    }
  }
  function Zu(l, t) {
    try {
      var a = t.updateQueue, e = a !== null ? a.lastEffect : null;
      if (e !== null) {
        var u = e.next;
        a = u;
        do {
          if ((a.tag & l) === l) {
            e = void 0;
            var n = a.create, c = a.inst;
            e = n(), c.destroy = e;
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (i) {
      cl(t, t.return, i);
    }
  }
  function Xa(l, t, a) {
    try {
      var e = t.updateQueue, u = e !== null ? e.lastEffect : null;
      if (u !== null) {
        var n = u.next;
        e = n;
        do {
          if ((e.tag & l) === l) {
            var c = e.inst, i = c.destroy;
            if (i !== void 0) {
              c.destroy = void 0, u = t;
              var f = a, v = i;
              try {
                v();
              } catch (g) {
                cl(
                  u,
                  f,
                  g
                );
              }
            }
          }
          e = e.next;
        } while (e !== n);
      }
    } catch (g) {
      cl(t, t.return, g);
    }
  }
  function i0(l) {
    var t = l.updateQueue;
    if (t !== null) {
      var a = l.stateNode;
      try {
        Fs(t, a);
      } catch (e) {
        cl(l, l.return, e);
      }
    }
  }
  function f0(l, t, a) {
    a.props = ve(
      l.type,
      l.memoizedProps
    ), a.state = l.memoizedState;
    try {
      a.componentWillUnmount();
    } catch (e) {
      cl(l, t, e);
    }
  }
  function It(l, t) {
    try {
      var a = l.ref;
      if (a !== null) {
        switch (l.tag) {
          case 26:
          case 27:
          case 5:
            var e = l.stateNode;
            break;
          case 30:
            var u = l.stateNode, n = sa(l.memoizedProps, u);
            (u.ref === null || u.ref.name !== n) && (u.ref = yd(n)), e = u.ref;
            break;
          case 7:
            if (l.stateNode === null) {
              var c = new Ot(l);
              S(
                l.child,
                !1,
                Oy,
                c,
                void 0,
                void 0
              ), l.stateNode = c;
            }
            e = l.stateNode;
            break;
          default:
            e = l.stateNode;
        }
        typeof a == "function" ? l.refCleanup = a(e) : a.current = e;
      }
    } catch (i) {
      cl(l, t, i);
    }
  }
  function wl(l, t) {
    var a = l.ref, e = l.refCleanup;
    if (a !== null)
      if (typeof e == "function")
        try {
          e();
        } catch (u) {
          cl(l, t, u);
        } finally {
          l.refCleanup = null, l = l.alternate, l != null && (l.refCleanup = null);
        }
      else if (typeof a == "function")
        try {
          a(null);
        } catch (u) {
          cl(l, t, u);
        }
      else a.current = null;
  }
  function nc(l, t) {
    if ((l.tag === 5 || l.tag === 27 || l.tag === 6) && l.alternate === null && t !== null)
      for (var a = 0; a < t.length; a++)
        bd(
          l.stateNode,
          t[a]
        );
  }
  function m0(l) {
    for (var t = l.return; t !== null && (yf(t) && bd(l.stateNode, t.stateNode), !vf(t)); )
      t = t.return;
  }
  function Vu(l) {
    for (var t = l.return; t !== null && (yf(t) && Ay(l.stateNode, t.stateNode), !vf(t)); )
      t = t.return;
  }
  function vf(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 27;
  }
  function yf(l) {
    return l && l.tag === 7 && l.stateNode !== null;
  }
  function hf(l) {
    var t = l.type, a = l.memoizedProps, e = l.stateNode;
    try {
      l: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          break l;
        case "img":
          a.src ? e.src = a.src : a.srcSet && (e.srcset = a.srcSet);
      }
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  function gf(l, t, a) {
    try {
      var e = l.stateNode;
      iy(e, l.type, a, t), e[ut] = t;
    } catch (u) {
      cl(l, l.return, u);
    }
  }
  function s0(l) {
    return l.tag === 5 || l.tag === 3 || l.tag === 26 || l.tag === 27 && Ka(l.type) || l.tag === 4;
  }
  function Ef(l) {
    l: for (; ; ) {
      for (; l.sibling === null; ) {
        if (l.return === null || s0(l.return)) return null;
        l = l.return;
      }
      for (l.sibling.return = l.return, l = l.sibling; l.tag !== 5 && l.tag !== 6 && l.tag !== 18; ) {
        if (l.tag === 27 && Ka(l.type) || l.flags & 2 || l.child === null || l.tag === 4) continue l;
        l.child.return = l, l = l.child;
      }
      if (!(l.flags & 2)) return l.stateNode;
    }
  }
  function Sf(l, t, a, e) {
    var u = l.tag;
    if (u === 5 || u === 6)
      u = l.stateNode, t ? (a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a).insertBefore(u, t) : (t = a.nodeType === 9 ? a.body : a.nodeName === "HTML" ? a.ownerDocument.body : a, t.appendChild(u), a = a._reactRootContainer, a != null || t.onclick !== null || (t.onclick = Ft)), nc(l, e), ll = !0;
    else if (u !== 4 && (u === 27 && (nc(l, e), e = null, Ka(l.type) && (a = l.stateNode, t = null)), l = l.child, l !== null))
      for (Sf(
        l,
        t,
        a,
        e
      ), l = l.sibling; l !== null; )
        Sf(
          l,
          t,
          a,
          e
        ), l = l.sibling;
  }
  function cc(l, t, a, e) {
    var u = l.tag;
    if (u === 5 || u === 6)
      u = l.stateNode, t ? a.insertBefore(u, t) : a.appendChild(u), nc(l, e), ll = !0;
    else if (u !== 4 && (u === 27 && (nc(l, e), e = null, Ka(l.type) && (a = l.stateNode)), l = l.child, l !== null))
      for (cc(
        l,
        t,
        a,
        e
      ), l = l.sibling; l !== null; )
        cc(
          l,
          t,
          a,
          e
        ), l = l.sibling;
  }
  function o0(l) {
    var t = l.stateNode, a = l.memoizedProps;
    try {
      for (var e = l.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Wl(t, e, a), t[xl] = l, t[ut] = a;
    } catch (n) {
      cl(l, l.return, n);
    }
  }
  var ic = !1, bt = null;
  function d0(l) {
    (l.tag === 30 || (l.subtreeFlags & 33554432) !== 0) && (ic = !0);
  }
  var Pt = null;
  function r0() {
    var l = Pt;
    return Pt = null, l;
  }
  var ct = 0;
  function Ke(l, t, a, e, u) {
    return ct = 0, v0(
      l.child,
      t,
      a,
      e,
      u
    );
  }
  function v0(l, t, a, e, u) {
    for (var n = !1; l !== null; ) {
      if (l.tag === 5) {
        var c = l.stateNode;
        if (e !== null) {
          var i = am(c);
          e.push(i), i.view && (n = !0);
        } else
          n || am(c).view && (n = !0);
        ic = !0, rd(
          c,
          ct === 0 ? t : t + "_" + ct,
          a
        ), ct++;
      } else (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && u || v0(
        l.child,
        t,
        a,
        e,
        u
      ) && (n = !0));
      l = l.sibling;
    }
    return n;
  }
  function la(l, t) {
    for (; l !== null; )
      l.tag === 5 ? vd(l.stateNode, l.memoizedProps) : (l.tag !== 22 || l.memoizedState === null) && (l.tag === 30 && t || la(
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
          var a = t.name;
          t = oa(t.default, t.share), t !== "none" && (Ke(
            l,
            a,
            t,
            null,
            !1
          ) || la(l.child, !1));
        }
        l = l.sibling;
      }
  }
  function Tf(l, t) {
    if (l.tag === 30) {
      var a = l.stateNode, e = l.memoizedProps, u = sa(e, a), n = oa(
        e.default,
        a.paired ? e.share : e.enter
      );
      n !== "none" ? Ke(l, u, n, null, !1) ? (fc(l), a.paired || t || Pe(l, e.onEnter)) : la(l.child, !1) : fc(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        Tf(l, t), l = l.sibling;
    else fc(l);
  }
  function bf(l) {
    if (bt !== null && bt.size !== 0) {
      var t = bt;
      if ((l.subtreeFlags & 18874368) !== 0)
        for (l = l.child; l !== null; ) {
          if (l.tag !== 22 || l.memoizedState === null) {
            if (l.tag === 30 && (l.flags & 18874368) !== 0) {
              var a = l.memoizedProps, e = a.name;
              if (e != null && e !== "auto") {
                var u = t.get(e);
                if (u !== void 0) {
                  var n = oa(
                    a.default,
                    a.share
                  );
                  if (n !== "none" && (Ke(
                    l,
                    e,
                    n,
                    null,
                    !1
                  ) ? (n = l.stateNode, u.paired = n, n.paired = u, Pe(l, a.onShare)) : la(l.child, !1)), t.delete(e), t.size === 0) break;
                }
              }
            }
            bf(l);
          }
          l = l.sibling;
        }
    }
  }
  function _f(l) {
    if (l.tag === 30) {
      var t = l.memoizedProps, a = sa(t, l.stateNode), e = bt !== null ? bt.get(a) : void 0, u = oa(
        t.default,
        e !== void 0 ? t.share : t.exit
      );
      u !== "none" && (Ke(l, a, u, null, !1) ? e !== void 0 ? (u = l.stateNode, e.paired = u, u.paired = e, bt.delete(a), Pe(l, t.onShare)) : Pe(l, t.onExit) : la(l.child, !1)), bt !== null && bf(l);
    } else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        _f(l), l = l.sibling;
    else
      bt !== null && bf(l);
  }
  function y0(l) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var t = l.memoizedProps, a = sa(t, l.stateNode);
        t = oa(t.default, t.update), l.flags &= -5, t !== "none" && Ke(
          l,
          a,
          t,
          l.memoizedState = [],
          !1
        );
      } else
        (l.subtreeFlags & 33554432) !== 0 && y0(l);
      l = l.sibling;
    }
  }
  function zf(l) {
    if ((l.subtreeFlags & 18874368) !== 0)
      for (l = l.child; l !== null; ) {
        if (l.tag !== 22 || l.memoizedState === null) {
          if (l.tag === 30 && (l.flags & 18874368) !== 0) {
            var t = l.stateNode;
            t.paired !== null && (t.paired = null, la(l.child, !1));
          }
          zf(l);
        }
        l = l.sibling;
      }
  }
  function mc(l) {
    if (l.tag === 30)
      l.stateNode.paired = null, la(l.child, !1), zf(l);
    else if ((l.subtreeFlags & 33554432) !== 0)
      for (l = l.child; l !== null; )
        mc(l), l = l.sibling;
    else zf(l);
  }
  function h0(l) {
    for (l = l.child; l !== null; )
      l.tag === 30 ? la(l.child, !1) : (l.subtreeFlags & 33554432) !== 0 && h0(l), l = l.sibling;
  }
  function Nf(l, t, a, e, u, n, c) {
    for (var i = !1; t !== null; ) {
      if (t.tag === 5) {
        var f = t.stateNode;
        if (n !== null && ct < n.length) {
          var v = n[ct], g = am(f);
          (v.view || g.view) && (i = !0);
          var b;
          if (b = (l.flags & 4) === 0)
            if (g.clip) b = !0;
            else {
              b = v.rect;
              var d = g.rect;
              b = b.y !== d.y || b.x !== d.x || b.height !== d.height || b.width !== d.width;
            }
          b && (l.flags |= 4), g.abs ? g = !v.abs : (v = v.rect, g = g.rect, g = v.height !== g.height || v.width !== g.width), g && (l.flags |= 32);
        } else l.flags |= 32;
        (l.flags & 4) !== 0 && rd(
          f,
          ct === 0 ? a : a + "_" + ct,
          u
        ), i && (l.flags & 4) !== 0 || (Pt === null && (Pt = []), Pt.push(
          f,
          ct === 0 ? e : e + "_" + ct,
          t.memoizedProps
        )), ct++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && c ? l.flags |= t.flags & 32 : Nf(
        l,
        t.child,
        a,
        e,
        u,
        n,
        c
      ) && (i = !0));
      t = t.sibling;
    }
    return i;
  }
  function g0(l, t) {
    for (l = l.child; l !== null; ) {
      if (l.tag === 30) {
        var a = l.memoizedProps, e = l.stateNode, u = sa(a, e), n = oa(a.default, a.update), c;
        c = l.memoizedState, l.memoizedState = null, e = l;
        var i = l.child;
        ct = 0, u = Nf(
          e,
          i,
          u,
          u,
          n,
          c,
          !1
        ), (l.flags & 4) !== 0 && u && Pe(l, a.onUpdate);
      } else
        (l.subtreeFlags & 33554432) !== 0 && g0(l);
      l = l.sibling;
    }
  }
  var jl = !1, el = !1, ta = !1, Of = !1, E0 = typeof WeakSet == "function" ? WeakSet : Set, Ql = null, aa = !1, xu = !1, sc = !1, Af = !1;
  function Bv(l, t, a) {
    if (l = l.containerInfo, kf = mu, l = bs(l), oi(l)) {
      if ("selectionStart" in l)
        var e = {
          start: l.selectionStart,
          end: l.selectionEnd
        };
      else
        l: {
          e = (e = l.ownerDocument) && e.defaultView || window;
          var u = e.getSelection && e.getSelection();
          if (u && u.rangeCount !== 0) {
            e = u.anchorNode;
            var n = u.anchorOffset, c = u.focusNode;
            u = u.focusOffset;
            try {
              e.nodeType, c.nodeType;
            } catch {
              e = null;
              break l;
            }
            var i = 0, f = -1, v = -1, g = 0, b = 0, d = l, h = null;
            t: for (; ; ) {
              for (var z; d !== e || n !== 0 && d.nodeType !== 3 || (f = i + n), d !== c || u !== 0 && d.nodeType !== 3 || (v = i + u), d.nodeType === 3 && (i += d.nodeValue.length), (z = d.firstChild) !== null; )
                h = d, d = z;
              for (; ; ) {
                if (d === l) break t;
                if (h === e && ++g === n && (f = i), h === c && ++b === u && (v = i), (z = d.nextSibling) !== null) break;
                d = h, h = d.parentNode;
              }
              d = z;
            }
            e = f === -1 || v === -1 ? null : { start: f, end: v };
          } else e = null;
        }
      e = e || { start: 0, end: 0 };
    } else e = null;
    for (If = { focusedElem: l, selectionRange: e }, mu = !1, a = (a & 335544064) === a, Ql = t, t = a ? 9270 : 1024; Ql !== null; ) {
      if (l = Ql, a && (e = l.deletions, e !== null))
        for (n = 0; n < e.length; n++)
          a && _f(e[n]);
      if (l.alternate === null && (l.flags & 2) !== 0)
        a && d0(l), oc(a);
      else {
        if (l.tag === 22) {
          if (e = l.alternate, l.memoizedState !== null) {
            e !== null && e.memoizedState === null && a && _f(e), oc(a);
            continue;
          } else if (e !== null && e.memoizedState !== null) {
            a && d0(l), oc(a);
            continue;
          }
        }
        e = l.child, (l.subtreeFlags & t) !== 0 && e !== null ? (e.return = l, Ql = e) : (a && y0(l), oc(a));
      }
    }
    bt = null;
  }
  function oc(l) {
    for (; Ql !== null; ) {
      var t = Ql, a = l, e = t.alternate, u = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((u & 1024) !== 0 && e !== null) {
            a = void 0, u = e.memoizedProps, e = e.memoizedState;
            var n = t.stateNode;
            try {
              var c = ve(
                t.type,
                u
              );
              a = n.getSnapshotBeforeUpdate(
                c,
                e
              ), n.__reactInternalSnapshotBeforeUpdate = a;
            } catch (i) {
              cl(t, t.return, i);
            }
          }
          break;
        case 3:
          if ((u & 1024) !== 0) {
            if (e = t.stateNode.containerInfo, a = e.nodeType, a === 9)
              nm(e);
            else if (a === 1)
              switch (e.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  nm(e);
                  break;
                default:
                  e.textContent = "";
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
          a && e !== null && (a = sa(
            e.memoizedProps,
            e.stateNode
          ), u = t.memoizedProps, u = oa(u.default, u.update), u !== "none" && Ke(
            e,
            a,
            u,
            e.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((u & 1024) !== 0) throw Error(E(163));
      }
      if (e = t.sibling, e !== null) {
        e.return = t.return, Ql = e;
        break;
      }
      Ql = t.return;
    }
  }
  function S0(l, t, a) {
    var e = a.flags;
    switch (a.tag) {
      case 0:
      case 11:
      case 15:
        ea(l, a), e & 4 && Zu(5, a);
        break;
      case 1:
        if (ea(l, a), e & 4)
          if (l = a.stateNode, t === null)
            try {
              l.componentDidMount();
            } catch (c) {
              cl(a, a.return, c);
            }
          else {
            var u = ve(
              a.type,
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
                a,
                a.return,
                c
              );
            }
          }
        e & 64 && i0(a), e & 512 && It(a, a.return);
        break;
      case 3:
        if (ea(l, a), e & 64 && (l = a.updateQueue, l !== null)) {
          if (t = null, a.child !== null)
            switch (a.child.tag) {
              case 27:
              case 5:
                t = a.child.stateNode;
                break;
              case 1:
                t = a.child.stateNode;
            }
          try {
            Fs(l, t);
          } catch (c) {
            cl(a, a.return, c);
          }
        }
        break;
      case 27:
        t === null && e & 4 && o0(a);
      case 26:
      case 5:
        ea(l, a), t === null && e & 4 && hf(a), e & 512 && It(a, a.return);
        break;
      case 12:
        ea(l, a);
        break;
      case 31:
        ea(l, a), e & 4 && z0(l, a);
        break;
      case 13:
        ea(l, a), e & 4 && N0(l, a), e & 64 && (l = a.memoizedState, l !== null && (l = l.dehydrated, l !== null && (a = Wv.bind(
          null,
          a
        ), Cy(l, a))));
        break;
      case 22:
        if (e = a.memoizedState !== null || jl, !e) {
          var n = t !== null && t.memoizedState !== null || el;
          t = jl, u = el, jl = e, (el = n) && !u ? (e = 2, (a.subtreeFlags & 8772) !== 0 && (e |= 1), xt(
            l,
            a,
            e
          )) : ea(l, a), jl = t, el = u;
        }
        break;
      case 30:
        ea(l, a), e & 512 && It(a, a.return);
        break;
      case 7:
        e & 512 && It(a, a.return);
      default:
        ea(l, a);
    }
  }
  function Df(l, t) {
    for (l = l.child; l !== null; )
      T0(l, t), l = l.sibling;
  }
  function T0(l, t) {
    switch (l.tag) {
      case 5:
      case 26:
        try {
          var a = l.stateNode;
          if (t) {
            var e = a.style;
            typeof e.setProperty == "function" ? e.setProperty("display", "none", "important") : e.display = "none";
          } else {
            var u = l.stateNode, n = l.memoizedProps.style, c = n != null && n.hasOwnProperty("display") ? n.display : null;
            u.style.display = c == null || typeof c == "boolean" ? "" : ("" + c).trim();
          }
        } catch (f) {
          cl(l, l.return, f);
        }
        Mf(l, t);
        break;
      case 6:
        try {
          l.stateNode.nodeValue = t ? "" : l.memoizedProps, ll = !0;
        } catch (f) {
          cl(l, l.return, f);
        }
        break;
      case 18:
        try {
          var i = l.stateNode;
          t ? dd(i, !0) : dd(l.stateNode, !1);
        } catch (f) {
          cl(l, l.return, f);
        }
        break;
      case 22:
      case 23:
        l.memoizedState === null && Df(l, t);
        break;
      default:
        Df(l, t);
    }
  }
  function Mf(l, t) {
    if (l.subtreeFlags & 67108864)
      for (l = l.child; l !== null; ) {
        l: {
          var a = l, e = t;
          switch (a.tag) {
            case 4:
              T0(a, e);
              break l;
            case 22:
              a.memoizedState === null && Mf(a, e);
              break l;
            default:
              Mf(a, e);
          }
        }
        l = l.sibling;
      }
  }
  function b0(l) {
    var t = l.alternate;
    t !== null && (l.alternate = null, b0(t)), l.child = null, l.deletions = null, l.sibling = null, l.tag === 5 && (t = l.stateNode, t !== null && hn(t)), l.stateNode = null, l.return = null, l.dependencies = null, l.memoizedProps = null, l.memoizedState = null, l.pendingProps = null, l.stateNode = null, l.updateQueue = null;
  }
  var hl = null, it = !1;
  function Zt(l, t, a) {
    for (a = a.child; a !== null; )
      _0(l, t, a), a = a.sibling;
  }
  function _0(l, t, a) {
    if (ht && typeof ht.onCommitFiberUnmount == "function")
      try {
        ht.onCommitFiberUnmount(du, a);
      } catch {
      }
    switch (a.tag) {
      case 26:
        el || wl(a, t), Zt(
          l,
          t,
          a
        ), a.memoizedState ? a.memoizedState.count-- : a.stateNode && !el && (a = a.stateNode, a.parentNode.removeChild(a));
        break;
      case 27:
        el || wl(a, t), Vu(a);
        var e = hl, u = it;
        Ka(a.type) && (hl = a.stateNode, it = !1), Zt(
          l,
          t,
          a
        ), Ad(
          a.stateNode,
          a.type,
          a.memoizedProps
        ), hl = e, it = u;
        break;
      case 5:
        el || wl(a, t), Vu(a);
      case 6:
        if (a.tag === 6 && Vu(a), e = hl, u = it, hl = null, Zt(
          l,
          t,
          a
        ), hl = e, it = u, hl !== null)
          if (it)
            try {
              (hl.nodeType === 9 ? hl.body : hl.nodeName === "HTML" ? hl.ownerDocument.body : hl).removeChild(a.stateNode), ll = !0;
            } catch (n) {
              cl(
                a,
                t,
                n
              );
            }
          else
            try {
              hl.removeChild(a.stateNode), ll = !0;
            } catch (n) {
              cl(
                a,
                t,
                n
              );
            }
        break;
      case 18:
        hl !== null && (it ? (l = hl, od(
          l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l,
          a.stateNode
        ), su(l)) : od(hl, a.stateNode));
        break;
      case 4:
        e = hl, u = it, hl = a.stateNode.containerInfo, it = !0, Zt(
          l,
          t,
          a
        ), hl = e, it = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        Xa(2, a, t), el || Xa(4, a, t), Zt(
          l,
          t,
          a
        );
        break;
      case 1:
        el || (wl(a, t), e = a.stateNode, typeof e.componentWillUnmount == "function" && f0(
          a,
          t,
          e
        )), Zt(
          l,
          t,
          a
        );
        break;
      case 21:
        Zt(
          l,
          t,
          a
        );
        break;
      case 22:
        el = (e = el) || a.memoizedState !== null, Zt(
          l,
          t,
          a
        ), el = e;
        break;
      case 30:
        wl(a, t), Zt(
          l,
          t,
          a
        );
        break;
      case 7:
        el || wl(a, t), Zt(
          l,
          t,
          a
        );
        break;
      default:
        Zt(
          l,
          t,
          a
        );
    }
  }
  function z0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null))) {
      l = l.dehydrated;
      try {
        su(l);
      } catch (a) {
        cl(t, t.return, a);
      }
    }
  }
  function N0(l, t) {
    if (t.memoizedState === null && (l = t.alternate, l !== null && (l = l.memoizedState, l !== null && (l = l.dehydrated, l !== null))))
      try {
        su(l);
      } catch (a) {
        cl(t, t.return, a);
      }
  }
  function Gv(l) {
    switch (l.tag) {
      case 31:
      case 13:
      case 19:
        var t = l.stateNode;
        return t === null && (t = l.stateNode = new E0()), t;
      case 22:
        return l = l.stateNode, t = l._retryCache, t === null && (t = l._retryCache = new E0()), t;
      default:
        throw Error(E(435, l.tag));
    }
  }
  function dc(l, t) {
    var a = Gv(l);
    t.forEach(function(e) {
      if (!a.has(e)) {
        a.add(e);
        var u = Fv.bind(null, l, e);
        e.then(u, u);
      }
    });
  }
  function tt(l, t, a) {
    var e = t.deletions;
    if (e !== null)
      for (var u = 0; u < e.length; u++) {
        var n = e[u], c = l, i = t, f = i;
        l: for (; f !== null; ) {
          switch (f.tag) {
            case 27:
              if (Ka(f.type)) {
                hl = f.stateNode, it = !1;
                break l;
              }
              break;
            case 5:
              hl = f.stateNode, it = !1;
              break l;
            case 3:
            case 4:
              hl = f.stateNode.containerInfo, it = !0;
              break l;
          }
          f = f.return;
        }
        if (hl === null) throw Error(E(160));
        _0(c, i, n), hl = null, it = !1, c = n.alternate, c !== null && (c.return = null), n.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        O0(t, l, a), t = t.sibling;
  }
  var Vt = null;
  function O0(l, t, a) {
    var e = l.alternate, u = l.flags;
    switch (l.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (u & 4 && (e = l.updateQueue, e = e !== null ? e.events : null, e !== null))
          for (var n = 0; n < e.length; n++) {
            var c = e[n];
            c.ref.impl = c.nextImpl;
          }
        tt(t, l, a), at(l), u & 4 && (Xa(3, l, l.return), Zu(3, l), Xa(5, l, l.return));
        break;
      case 1:
        tt(t, l, a), at(l), u & 512 && (el || e === null || wl(e, e.return)), u & 64 && jl && (l = l.updateQueue, l !== null && (t = l.callbacks, t !== null && (a = l.shared.hiddenCallbacks, l.shared.hiddenCallbacks = a === null ? t : a.concat(t))));
        break;
      case 26:
        if (n = Vt, tt(t, l, a), at(l), u & 512 && (el || e === null || wl(e, e.return)), u & 4)
          if (u = e !== null ? e.memoizedState : null, a = l.memoizedState, e === null)
            if (a === null)
              if (l.stateNode === null)
                if (jl)
                  l.stateNode = fd(
                    l.type,
                    l.memoizedProps,
                    t.containerInfo,
                    l
                  );
                else {
                  l: {
                    t = l.type, a = l.memoizedProps, u = n.ownerDocument || n;
                    t: switch (t) {
                      case "title":
                        e = u.getElementsByTagName("title")[0], (!e || e[yu] || e[xl] || e.namespaceURI === "http://www.w3.org/2000/svg" || e.hasAttribute("itemprop")) && (e = u.createElement(t), u.head.insertBefore(
                          e,
                          u.querySelector("head > title")
                        )), Wl(e, t, a), e[xl] = l, Gl(e), t = e;
                        break l;
                      case "link":
                        if (n = pd(
                          "link",
                          "href",
                          u
                        ).get(t + (a.href || ""))) {
                          for (c = 0; c < n.length; c++)
                            if (e = n[c], e.getAttribute("href") === (a.href == null || a.href === "" ? null : a.href) && e.getAttribute("rel") === (a.rel == null ? null : a.rel) && e.getAttribute("title") === (a.title == null ? null : a.title) && e.getAttribute("crossorigin") === (a.crossOrigin == null ? null : a.crossOrigin)) {
                              n.splice(c, 1);
                              break t;
                            }
                        }
                        e = u.createElement(t), Wl(e, t, a), u.head.appendChild(e);
                        break;
                      case "meta":
                        if (n = pd(
                          "meta",
                          "content",
                          u
                        ).get(t + (a.content || ""))) {
                          for (c = 0; c < n.length; c++)
                            if (e = n[c], e.getAttribute("content") === (a.content == null ? null : "" + a.content) && e.getAttribute("name") === (a.name == null ? null : a.name) && e.getAttribute("property") === (a.property == null ? null : a.property) && e.getAttribute("http-equiv") === (a.httpEquiv == null ? null : a.httpEquiv) && e.getAttribute("charset") === (a.charSet == null ? null : a.charSet)) {
                              n.splice(c, 1);
                              break t;
                            }
                        }
                        e = u.createElement(t), Wl(e, t, a), u.head.appendChild(e);
                        break;
                      default:
                        throw Error(E(468, t));
                    }
                    e[xl] = l, Gl(e), t = e;
                  }
                  l.stateNode = t;
                }
              else
                jl || dm(n, l.type, l.stateNode);
            else
              l.stateNode = Rd(
                n,
                a,
                l.memoizedProps
              );
          else
            u !== a ? (u === null ? (t = e.stateNode, t === null || el || t.parentNode.removeChild(t)) : u.count--, a === null ? jl || dm(n, l.type, l.stateNode) : Rd(n, a, l.memoizedProps)) : a === null && l.stateNode !== null && gf(
              l,
              l.memoizedProps,
              e.memoizedProps
            );
        break;
      case 27:
        tt(t, l, a), at(l), u & 512 && (el || e === null || wl(e, e.return)), e !== null && u & 4 && gf(
          l,
          l.memoizedProps,
          e.memoizedProps
        );
        break;
      case 5:
        if (n = ta, ta = !1, tt(t, l, a), ta = n, at(l), u & 512 && (el || e === null || wl(e, e.return)), l.flags & 32) {
          t = l.stateNode;
          try {
            De(t, ""), ll = !0;
          } catch (g) {
            cl(l, l.return, g);
          }
        }
        u & 4 && l.stateNode != null && (t = l.memoizedProps, gf(
          l,
          t,
          e !== null ? e.memoizedProps : t
        )), u & 1024 && (Of = !0);
        break;
      case 6:
        if (tt(t, l, a), at(l), u & 4) {
          if (l.stateNode === null)
            throw Error(E(162));
          t = l.memoizedProps, a = l.stateNode;
          try {
            a.nodeValue = t, ll = !0;
          } catch (g) {
            cl(l, l.return, g);
          }
        }
        break;
      case 3:
        if (ll = !1, Dc = null, n = Vt, Vt = Iu(t.containerInfo), tt(t, l, a), Vt = n, at(l), u & 4 && e !== null && e.memoizedState.isDehydrated)
          try {
            su(t.containerInfo);
          } catch (g) {
            cl(l, l.return, g);
          }
        Of && (Of = !1, A0(l)), ll = !1;
        break;
      case 4:
        u = ta, ta = jl, e = Km(), n = Vt, Vt = Iu(
          l.stateNode.containerInfo
        ), tt(t, l, a), at(l), Vt = n, ll && xu && (sc = !0), ll = e, ta = u;
        break;
      case 12:
        tt(t, l, a), at(l);
        break;
      case 31:
        tt(t, l, a), at(l), u & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, dc(l, t)));
        break;
      case 13:
        tt(t, l, a), at(l), l.child.flags & 8192 && l.memoizedState !== null != (e !== null && e.memoizedState !== null) && (yc = yt()), u & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, dc(l, t)));
        break;
      case 22:
        n = l.memoizedState !== null, c = e !== null && e.memoizedState !== null;
        var i = jl, f = el, v = ta;
        jl = i || n, ta = v || n, el = f || c, tt(t, l, a), el = f, ta = v, jl = i, at(l), u & 8192 && (t = l.stateNode, t._visibility = n ? t._visibility & -2 : t._visibility | 1, !n || e === null || c || jl || el || (t = c || el, a = jl, e = el, jl = n || jl, el = t, ja(l, 2), jl = a, el = e), !n && ta || Df(l, n)), u & 4 && (t = l.updateQueue, t !== null && (a = t.retryQueue, a !== null && (t.retryQueue = null, dc(l, a))));
        break;
      case 19:
        tt(t, l, a), at(l), u & 4 && (t = l.updateQueue, t !== null && (l.updateQueue = null, dc(l, t)));
        break;
      case 30:
        u & 512 && (el || e === null || wl(e, e.return)), u = Km(), n = xu, c = (a & 335544064) === a, i = l.memoizedProps, xu = c && oa(
          i.default,
          i.update
        ) !== "none", tt(t, l, a), at(l), c && e !== null && ll && (l.flags |= 4), xu = n, ll = u;
        break;
      case 21:
        break;
      case 7:
        u & 512 && (el || e === null || wl(e, e.return)), e && e.stateNode !== null && (e.stateNode._fragmentFiber = l);
      default:
        tt(t, l, a), at(l);
    }
  }
  function at(l) {
    var t = l.flags;
    if (t & 2) {
      try {
        for (var a, e = l.return; e !== null; ) {
          if (s0(e)) {
            a = e;
            break;
          }
          e = e.return;
        }
        e = null;
        for (var u = l.return; u !== null; ) {
          if (yf(u)) {
            var n = u.stateNode;
            e === null ? e = [n] : e.push(n);
          }
          if (vf(u)) break;
          u = u.return;
        }
        var c = e;
        if (a == null) throw Error(E(160));
        switch (a.tag) {
          case 27:
            var i = a.stateNode, f = Ef(l);
            cc(
              l,
              f,
              i,
              c
            );
            break;
          case 5:
            var v = a.stateNode;
            a.flags & 32 && (De(v, ""), a.flags &= -33);
            var g = Ef(l);
            cc(
              l,
              g,
              v,
              c
            );
            break;
          case 3:
          case 4:
            var b = a.stateNode.containerInfo, d = Ef(l);
            Sf(
              l,
              d,
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
  function A0(l) {
    if (l.subtreeFlags & 1024)
      for (l = l.child; l !== null; ) {
        var t = l;
        A0(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, mu = !0, t.reset(), mu = !1), l = l.sibling;
      }
  }
  function Je(l, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        D0(t, l), t = t.sibling;
    else g0(t);
  }
  function D0(l, t) {
    var a = l.alternate;
    if (a === null) Tf(l, !1);
    else
      switch (l.tag) {
        case 3:
          if (Af = aa = !1, r0(), Je(t, l), !aa && !sc) {
            if (l = Pt, l !== null)
              for (var e = 0; e < l.length; e += 3) {
                a = l[e];
                var u = l[e + 1];
                vd(a, l[e + 2]), a = a.ownerDocument.documentElement, a !== null && a.animate(
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
            )), Af = !0;
          }
          Pt = null;
          break;
        case 5:
          Je(t, l);
          break;
        case 4:
          e = aa, aa = !1, Je(t, l), aa && (sc = !0), aa = e;
          break;
        case 22:
          l.memoizedState === null && (a.memoizedState !== null ? Tf(l, !1) : Je(t, l));
          break;
        case 30:
          e = aa, u = r0(), aa = !1, Je(t, l), aa && (l.flags |= 4);
          var n = l.memoizedProps, c = l.stateNode;
          t = sa(n, c), c = sa(a.memoizedProps, c);
          var i = oa(n.default, n.update);
          i === "none" ? t = !1 : (n = a.memoizedState, a.memoizedState = null, a = l.child, ct = 0, t = Nf(
            l,
            a,
            t,
            c,
            i,
            n,
            !0
          ), ct !== (n === null ? 0 : n.length) && (l.flags |= 32)), (l.flags & 4) !== 0 && t ? (Pe(
            l,
            l.memoizedProps.onUpdate
          ), Pt = u) : u !== null && (u.push.apply(u, Pt), Pt = u), aa = (l.flags & 32) !== 0 ? !0 : e;
          break;
        default:
          Je(t, l);
      }
  }
  function ea(l, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        S0(l, t.alternate, t), t = t.sibling;
  }
  function ja(l, t) {
    for (l = l.child; l !== null; ) {
      var a = l, e = t;
      switch (a.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          Xa(4, a, a.return), ja(
            a,
            e
          );
          break;
        case 1:
          wl(a, a.return);
          var u = a.stateNode;
          typeof u.componentWillUnmount == "function" && f0(
            a,
            a.return,
            u
          ), ja(
            a,
            e
          );
          break;
        case 27:
          (e & 2) !== 0 && Ad(
            a.stateNode,
            a.type,
            a.memoizedProps
          );
        case 5:
          wl(a, a.return), a.tag !== 5 && a.tag !== 27 || Vu(a), ja(
            a,
            e
          );
          break;
        case 6:
          Vu(a);
          break;
        case 26:
          wl(a, a.return), u = a.stateNode, a.memoizedState !== null || u === null || el || u.parentNode.removeChild(u), ja(
            a,
            e
          );
          break;
        case 22:
          a.memoizedState === null && ja(
            a,
            e
          );
          break;
        case 30:
          wl(a, a.return), ja(
            a,
            e
          );
          break;
        case 7:
          wl(a, a.return);
        default:
          ja(
            a,
            e
          );
      }
      l = l.sibling;
    }
  }
  function xt(l, t, a) {
    for (a = (t.subtreeFlags & 8772) !== 0 ? a : a & -2, t = t.child; t !== null; ) {
      var e = t.alternate, u = l, n = t, c = n.flags, i = (a & 1) !== 0;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          xt(
            u,
            n,
            a
          ), Zu(4, n);
          break;
        case 1:
          if (xt(
            u,
            n,
            a
          ), e = n, u = e.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (g) {
              cl(e, e.return, g);
            }
          if (e = n, u = e.updateQueue, u !== null) {
            var f = e.stateNode;
            try {
              var v = u.shared.hiddenCallbacks;
              if (v !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < v.length; u++)
                  Ws(v[u], f);
            } catch (g) {
              cl(e, e.return, g);
            }
          }
          i && c & 64 && i0(n), It(n, n.return);
          break;
        case 27:
          (a & 2) !== 0 && o0(n);
        case 5:
          n.tag !== 5 && n.tag !== 27 || m0(n), xt(
            u,
            n,
            a
          ), i && e === null && c & 4 && hf(n), It(n, n.return);
          break;
        case 6:
          m0(n);
          break;
        case 26:
          f = n.stateNode, n.memoizedState !== null || f === null || jl || dm(
            Iu(f.ownerDocument),
            n.type,
            f
          ), xt(
            u,
            n,
            a
          ), i && e === null && c & 4 && hf(n), It(n, n.return);
          break;
        case 12:
          xt(
            u,
            n,
            a
          );
          break;
        case 31:
          xt(
            u,
            n,
            a
          ), i && c & 4 && z0(u, n);
          break;
        case 13:
          xt(
            u,
            n,
            a
          ), i && c & 4 && N0(u, n);
          break;
        case 22:
          n.memoizedState === null && xt(
            u,
            n,
            a
          ), It(n, n.return);
          break;
        case 30:
          xt(
            u,
            n,
            a
          ), It(n, n.return);
          break;
        case 7:
          It(n, n.return);
        default:
          xt(
            u,
            n,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Cf(l, t) {
    var a = null;
    l !== null && l.memoizedState !== null && l.memoizedState.cachePool !== null && (a = l.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== a && (l != null && l.refCount++, a != null && Mu(a));
  }
  function Uf(l, t) {
    l = null, t.alternate !== null && (l = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== l && (t.refCount++, l != null && Mu(l));
  }
  function qt(l, t, a, e) {
    var u = (a & 335544064) === a;
    if (t.subtreeFlags & (u ? 10262 : 10256))
      for (t = t.child; t !== null; )
        M0(
          l,
          t,
          a,
          e
        ), t = t.sibling;
    else u && h0(t);
  }
  function M0(l, t, a, e) {
    var u = (a & 335544064) === a;
    u && t.alternate === null && t.return !== null && t.return.alternate !== null && mc(t);
    var n = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        qt(
          l,
          t,
          a,
          e
        ), n & 2048 && Zu(9, t);
        break;
      case 1:
        qt(
          l,
          t,
          a,
          e
        );
        break;
      case 3:
        qt(
          l,
          t,
          a,
          e
        ), u && Af && (l = l.containerInfo, l = l.nodeType === 9 ? l.body : l.nodeName === "HTML" ? l.ownerDocument.body : l, l.style.viewTransitionName === "root" && (l.style.viewTransitionName = ""), l = l.ownerDocument.documentElement, l !== null && l.style.viewTransitionName === "none" && (l.style.viewTransitionName = "")), n & 2048 && (n = null, t.alternate !== null && (n = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== n && (t.refCount++, n != null && Mu(n)));
        break;
      case 12:
        if (n & 2048) {
          qt(
            l,
            t,
            a,
            e
          ), n = t.stateNode;
          try {
            var c = t.memoizedProps, i = c.id, f = c.onPostCommit;
            typeof f == "function" && f(
              i,
              t.alternate === null ? "mount" : "update",
              n.passiveEffectDuration,
              -0
            );
          } catch (v) {
            cl(t, t.return, v);
          }
        } else
          qt(
            l,
            t,
            a,
            e
          );
        break;
      case 31:
        qt(
          l,
          t,
          a,
          e
        );
        break;
      case 13:
        qt(
          l,
          t,
          a,
          e
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, i = t.alternate, t.memoizedState !== null ? (u && i !== null && i.memoizedState === null && mc(i), c._visibility & 2 ? qt(
          l,
          t,
          a,
          e
        ) : Lu(
          l,
          t
        )) : (u && i !== null && i.memoizedState !== null && mc(t), c._visibility & 2 ? qt(
          l,
          t,
          a,
          e
        ) : (c._visibility |= 2, we(
          l,
          t,
          a,
          e,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), n & 2048 && Cf(i, t);
        break;
      case 24:
        qt(
          l,
          t,
          a,
          e
        ), n & 2048 && Uf(t.alternate, t);
        break;
      case 30:
        u && (n = t.alternate, n !== null && (la(n.child, !0), la(t.child, !0))), qt(
          l,
          t,
          a,
          e
        );
        break;
      default:
        qt(
          l,
          t,
          a,
          e
        );
    }
  }
  function we(l, t, a, e, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var n = l, c = t, i = a, f = e, v = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          we(
            n,
            c,
            i,
            f,
            u
          ), Zu(8, c);
          break;
        case 23:
          break;
        case 22:
          var g = c.stateNode;
          c.memoizedState !== null ? g._visibility & 2 ? we(
            n,
            c,
            i,
            f,
            u
          ) : Lu(
            n,
            c
          ) : (g._visibility |= 2, we(
            n,
            c,
            i,
            f,
            u
          )), u && v & 2048 && Cf(
            c.alternate,
            c
          );
          break;
        case 24:
          we(
            n,
            c,
            i,
            f,
            u
          ), u && v & 2048 && Uf(c.alternate, c);
          break;
        default:
          we(
            n,
            c,
            i,
            f,
            u
          );
      }
      t = t.sibling;
    }
  }
  function Lu(l, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var a = l, e = t, u = e.flags;
        switch (e.tag) {
          case 22:
            Lu(a, e), u & 2048 && Cf(
              e.alternate,
              e
            );
            break;
          case 24:
            Lu(a, e), u & 2048 && Uf(e.alternate, e);
            break;
          default:
            Lu(a, e);
        }
        t = t.sibling;
      }
  }
  var ye = 8192;
  function he(l, t, a) {
    if (l.subtreeFlags & ye)
      for (l = l.child; l !== null; )
        C0(
          l,
          t,
          a
        ), l = l.sibling;
  }
  function C0(l, t, a) {
    switch (l.tag) {
      case 26:
        he(
          l,
          t,
          a
        ), l.flags & ye && (l.memoizedState !== null ? xy(
          a,
          Vt,
          l.memoizedState,
          l.memoizedProps
        ) : (l = l.stateNode, (t & 335544128) === t && Bd(a, l)));
        break;
      case 5:
        he(
          l,
          t,
          a
        ), l.flags & ye && (l = l.stateNode, (t & 335544128) === t && Bd(a, l));
        break;
      case 3:
      case 4:
        var e = Vt;
        Vt = Iu(l.stateNode.containerInfo), he(
          l,
          t,
          a
        ), Vt = e;
        break;
      case 22:
        l.memoizedState === null && (e = l.alternate, e !== null && e.memoizedState !== null ? (e = ye, ye = 16777216, he(
          l,
          t,
          a
        ), ye = e) : he(
          l,
          t,
          a
        ));
        break;
      case 30:
        if ((l.flags & ye) !== 0 && (e = l.memoizedProps.name, e != null && e !== "auto")) {
          var u = l.stateNode;
          u.paired = null, bt === null && (bt = /* @__PURE__ */ new Map()), bt.set(e, u);
        }
        he(
          l,
          t,
          a
        );
        break;
      default:
        he(
          l,
          t,
          a
        );
    }
  }
  function U0(l) {
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
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Ql = e, p0(
            e,
            l
          );
        }
      U0(l);
    }
    if (l.subtreeFlags & 10256)
      for (l = l.child; l !== null; )
        R0(l), l = l.sibling;
  }
  function R0(l) {
    switch (l.tag) {
      case 0:
      case 11:
      case 15:
        Ku(l), l.flags & 2048 && Xa(9, l, l.return);
        break;
      case 3:
        Ku(l);
        break;
      case 12:
        Ku(l);
        break;
      case 22:
        var t = l.stateNode;
        l.memoizedState !== null && t._visibility & 2 && (l.return === null || l.return.tag !== 13) ? (t._visibility &= -3, rc(l)) : Ku(l);
        break;
      default:
        Ku(l);
    }
  }
  function rc(l) {
    var t = l.deletions;
    if ((l.flags & 16) !== 0) {
      if (t !== null)
        for (var a = 0; a < t.length; a++) {
          var e = t[a];
          Ql = e, p0(
            e,
            l
          );
        }
      U0(l);
    }
    for (l = l.child; l !== null; ) {
      switch (t = l, t.tag) {
        case 0:
        case 11:
        case 15:
          Xa(8, t, t.return), rc(t);
          break;
        case 22:
          a = t.stateNode, a._visibility & 2 && (a._visibility &= -3, rc(t));
          break;
        default:
          rc(t);
      }
      l = l.sibling;
    }
  }
  function p0(l, t) {
    for (; Ql !== null; ) {
      var a = Ql;
      switch (a.tag) {
        case 0:
        case 11:
        case 15:
          Xa(8, a, t);
          break;
        case 23:
        case 22:
          if (a.memoizedState !== null && a.memoizedState.cachePool !== null) {
            var e = a.memoizedState.cachePool.pool;
            e != null && e.refCount++;
          }
          break;
        case 24:
          Mu(a.memoizedState.cache);
      }
      if (e = a.child, e !== null) e.return = a, Ql = e;
      else
        l: for (a = l; Ql !== null; ) {
          e = Ql;
          var u = e.sibling, n = e.return;
          if (b0(e), e === a) {
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
  var Xv = {
    getCacheForType: function(l) {
      var t = Ll(Ml), a = t.data.get(l);
      return a === void 0 && (a = l(), t.data.set(l, a)), a;
    },
    cacheSignal: function() {
      return Ll(Ml).controller.signal;
    }
  }, jv = typeof WeakMap == "function" ? WeakMap : Map, al = 0, sl = null, K = null, w = 0, nl = 0, _t = null, Qa = !1, We = !1, Rf = !1, Ta = 0, zl = 0, Za = 0, ge = 0, vc = 0, zt = 0, Fe = 0, Ju = null, ft = null, pf = !1, yc = 0, H0 = 0, hc = 1 / 0, gc = null, Va = null, Sl = 0, Lt = null, Ee = null, ua = 0, Hf = 0, qf = null, q0 = null, $e = null, ke = null, Ie = null, wu = 0, Ec = null;
  function Nt() {
    return (al & 2) !== 0 && w !== 0 ? w & -w : U.T !== null ? Lf() : Bm();
  }
  function Y0() {
    if (zt === 0)
      if ((w & 536870912) === 0 || x) {
        var l = dn;
        dn <<= 1, (dn & 3932160) === 0 && (dn = 262144), zt = l;
      } else zt = 536870912;
    return l = Kl.current, l !== null && (l.flags |= 32), zt;
  }
  function Pe(l, t) {
    if (t != null) {
      var a = l.stateNode, e = a.ref;
      e === null && (e = a.ref = yd(
        sa(l.memoizedProps, a)
      )), ke === null && (ke = []), ke.push(t.bind(null, e));
    }
  }
  function mt(l, t, a) {
    (l === sl && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null) && (lu(l, 0), xa(
      l,
      w,
      zt,
      !1
    )), vu(l, a), ((al & 2) === 0 || l !== sl) && (l === sl && ((al & 2) === 0 && (ge |= a), zl === 4 && xa(
      l,
      w,
      zt,
      !1
    )), na(l));
  }
  function B0(l, t, a) {
    if ((al & 6) !== 0) throw Error(E(327));
    var e = !a && (t & 127) === 0 && (t & l.expiredLanes) === 0 || ru(l, t), u = e ? Vv(l, t) : Bf(l, t, !0), n = e;
    do {
      if (u === 0) {
        We && !e && xa(l, t, 0, !1);
        break;
      } else {
        if (a = l.current.alternate, n && !Qv(a)) {
          u = Bf(l, t, !1), n = !1;
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
              var f = i.current.memoizedState.isDehydrated;
              if (f && (lu(i, c).flags |= 256), c = Bf(
                i,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (Rf && !f) {
                  i.errorRecoveryDisabledLanes |= n, ge |= n, u = 4;
                  break l;
                }
                n = ft, ft = u, n !== null && (ft === null ? ft = n : ft.push.apply(
                  ft,
                  n
                ));
              }
              u = c;
            }
            if (n = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          lu(l, 0), xa(l, t, 0, !0);
          break;
        }
        l: {
          switch (e = l, n = u, n) {
            case 0:
            case 1:
              throw Error(E(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              xa(
                e,
                t,
                zt,
                !Qa
              );
              break l;
            case 2:
              ft = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(E(329));
          }
          if ((t & 62914560) === t && (u = yc + 300 - yt(), 10 < u)) {
            if (xa(
              e,
              t,
              zt,
              !Qa
            ), vn(e, 0, !0) !== 0) break l;
            ua = t, e.timeoutHandle = tm(
              G0.bind(
                null,
                e,
                a,
                ft,
                gc,
                pf,
                t,
                zt,
                ge,
                Fe,
                Qa,
                n,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break l;
          }
          G0(
            e,
            a,
            ft,
            gc,
            pf,
            t,
            zt,
            ge,
            Fe,
            Qa,
            n,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    na(l);
  }
  function G0(l, t, a, e, u, n, c, i, f, v, g, b, d, h) {
    l.timeoutHandle = -1;
    var z = t.subtreeFlags, M = (n & 335544064) === n;
    if (b = null, (M || z & 8192 || (z & 16785408) === 16785408) && (b = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Ft
    }, bt = null, C0(
      t,
      n,
      b
    ), M && (z = b, M = l.containerInfo, M = (M.nodeType === 9 ? M : M.ownerDocument).__reactViewTransition, M != null && (z.count++, z.waitingForViewTransition = !0, z = tn.bind(z), M.finished.then(z, z))), z = (n & 62914560) === n ? yc - yt() : (n & 4194048) === n ? H0 - yt() : 0, z = Ly(
      b,
      z
    ), z !== null)) {
      ua = n, l.cancelPendingCommit = z(
        K0.bind(
          null,
          l,
          t,
          n,
          a,
          e,
          u,
          c,
          i,
          f,
          v,
          g,
          b,
          null,
          d,
          h
        )
      ), xa(l, n, c, !v);
      return;
    }
    K0(
      l,
      t,
      n,
      a,
      e,
      u,
      c,
      i,
      f,
      v,
      g,
      b
    );
  }
  function Qv(l) {
    for (var t = l; ; ) {
      var a = t.tag;
      if ((a === 0 || a === 11 || a === 15) && t.flags & 16384 && (a = t.updateQueue, a !== null && (a = a.stores, a !== null)))
        for (var e = 0; e < a.length; e++) {
          var u = a[e], n = u.getSnapshot;
          u = u.value;
          try {
            if (!St(n(), u)) return !1;
          } catch {
            return !1;
          }
        }
      if (a = t.child, t.subtreeFlags & 16384 && a !== null)
        a.return = t, t = a;
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
  function xa(l, t, a, e) {
    t = Rm(l, t), t &= ~vc, t &= ~ge, l.suspendedLanes |= t, l.pingedLanes &= ~t, e && (l.warmLanes |= t), e = l.expirationTimes;
    for (var u = t; 0 < u; ) {
      var n = 31 - gt(u), c = 1 << n;
      e[n] = -1, u &= ~c;
    }
    a !== 0 && Hm(l, a, t);
  }
  function Sc() {
    return (al & 6) === 0 ? (Wu(0), !1) : !0;
  }
  function Yf() {
    if (K !== null) {
      if (nl === 0)
        var l = K.return;
      else
        l = K, va = ne = null, Vi(l), Qe = null, Ru = 0, l = K;
      for (; l !== null; )
        c0(l.alternate, l), l = l.return;
      K = null;
    }
  }
  function lu(l, t) {
    var a = l.timeoutHandle;
    return a !== -1 && (l.timeoutHandle = -1, sy(a)), a = l.cancelPendingCommit, a !== null && (l.cancelPendingCommit = null, a()), ua = 0, Yf(), sl = l, K = a = da(l.current, null), w = t, nl = 0, _t = null, Qa = !1, We = ru(l, t), Rf = !1, Fe = zt = vc = ge = Za = zl = 0, ft = Ju = null, pf = !1, Ta = Rm(l, t), Dn(), a;
  }
  function X0(l, t) {
    Q = null, U.H = In, t === je || t === Xn ? (t = Ls(), nl = 3) : t === Ci ? (t = Ls(), nl = 4) : nl = t === ef ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, _t = t, K === null && (zl = 1, Pn(
      l,
      Ut(t, l.current)
    ));
  }
  function j0() {
    var l = Kl.current;
    return l === null ? !0 : (w & 4194048) === w ? kl === null : (w & 62914560) === w || (w & 536870912) !== 0 ? l === kl : !1;
  }
  function Q0() {
    var l = U.H;
    return U.H = In, l === null ? In : l;
  }
  function Z0() {
    var l = U.A;
    return U.A = Xv, l;
  }
  function Tc() {
    zl = 4, Qa || (w & 4194048) !== w && Kl.current !== null || (We = !0), (Za & 134217727) === 0 && (ge & 134217727) === 0 || sl === null || xa(
      sl,
      w,
      zt,
      !1
    );
  }
  function Bf(l, t, a) {
    var e = al;
    al |= 2;
    var u = Q0(), n = Z0();
    (sl !== l || w !== t) && (gc = null, lu(l, t)), t = !1;
    var c = zl;
    l: do
      try {
        if (nl !== 0 && K !== null) {
          var i = K, f = _t;
          switch (nl) {
            case 8:
              Yf(), c = 6;
              break l;
            case 3:
            case 2:
            case 9:
            case 6:
              Kl.current === null && (t = !0);
              var v = nl;
              if (nl = 0, _t = null, tu(l, i, f, v), a && We) {
                c = 0;
                break l;
              }
              break;
            default:
              v = nl, nl = 0, _t = null, tu(l, i, f, v);
          }
        }
        Zv(), c = zl;
        break;
      } catch (g) {
        X0(l, g);
      }
    while (!0);
    return t && l.shellSuspendCounter++, va = ne = null, al = e, U.H = u, U.A = n, K === null && (sl = null, w = 0, Dn()), c;
  }
  function Zv() {
    for (; K !== null; ) V0(K);
  }
  function Vv(l, t) {
    var a = al;
    al |= 2;
    var e = Q0(), u = Z0();
    sl !== l || w !== t ? (gc = null, hc = yt() + 500, lu(l, t)) : We = ru(
      l,
      t
    );
    l: do
      try {
        if (nl !== 0 && K !== null) {
          t = K;
          var n = _t;
          t: switch (nl) {
            case 1:
              nl = 0, _t = null, tu(l, t, n, 1);
              break;
            case 2:
            case 9:
              if (Vs(n)) {
                nl = 0, _t = null, x0(t);
                break;
              }
              t = function() {
                nl !== 2 && nl !== 9 || sl !== l || (nl = 7), na(l);
              }, n.then(t, t);
              break l;
            case 3:
              nl = 7;
              break l;
            case 4:
              nl = 5;
              break l;
            case 7:
              Vs(n) ? (nl = 0, _t = null, x0(t)) : (nl = 0, _t = null, tu(l, t, n, 7));
              break;
            case 5:
              var c = null;
              switch (K.tag) {
                case 26:
                  c = K.memoizedState;
                case 5:
                case 27:
                  var i = K;
                  if (c ? qd(c) : i.stateNode.complete) {
                    nl = 0, _t = null;
                    var f = i.sibling;
                    if (f !== null) K = f;
                    else {
                      var v = i.return;
                      v !== null ? (K = v, bc(v)) : K = null;
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
              Yf(), zl = 6;
              break l;
            default:
              throw Error(E(462));
          }
        }
        xv();
        break;
      } catch (g) {
        X0(l, g);
      }
    while (!0);
    return va = ne = null, U.H = e, U.A = u, al = a, K !== null ? 0 : (sl = null, w = 0, Dn(), zl);
  }
  function xv() {
    for (; K !== null && !cr(); )
      V0(K);
  }
  function V0(l) {
    var t = u0(l.alternate, l, Ta);
    l.memoizedProps = l.pendingProps, t === null ? bc(l) : K = t;
  }
  function x0(l) {
    var t = l, a = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ko(
          a,
          t,
          t.pendingProps,
          t.type,
          void 0,
          w
        );
        break;
      case 11:
        t = ko(
          a,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          w
        );
        break;
      case 5:
        Vi(t);
        var e = t;
        e === Xl && (x ? (Hn(e), e.tag === 5 && e.stateNode != null && (vl = e.stateNode)) : (Hn(e), x = !0));
      default:
        c0(a, t), t = K = Rs(t, Ta), t = u0(a, t, Ta);
    }
    l.memoizedProps = l.pendingProps, t === null ? bc(l) : K = t;
  }
  function tu(l, t, a, e) {
    va = ne = null, Vi(t), Qe = null, Ru = 0;
    var u = t.return;
    try {
      if (Uv(
        l,
        u,
        t,
        a,
        w
      )) {
        zl = 1, Pn(
          l,
          Ut(a, l.current)
        ), K = null;
        return;
      }
    } catch (n) {
      if (u !== null) throw K = u, n;
      zl = 1, Pn(
        l,
        Ut(a, l.current)
      ), K = null;
      return;
    }
    t.flags & 32768 ? (x || e === 1 ? l = !0 : We || (w & 536870912) !== 0 ? l = !1 : (Qa = l = !0, (e === 2 || e === 9 || e === 3 || e === 6) && (e = Kl.current, e !== null && e.tag === 13 && (e.flags |= 16384))), L0(t, l)) : bc(t);
  }
  function bc(l) {
    var t = l;
    do {
      if ((t.flags & 32768) !== 0) {
        L0(
          t,
          Qa
        );
        return;
      }
      l = t.return;
      var a = qv(
        t.alternate,
        t,
        Ta
      );
      if (a !== null) {
        K = a;
        return;
      }
      if (t = t.sibling, t !== null) {
        K = t;
        return;
      }
      K = t = l;
    } while (t !== null);
    zl === 0 && (zl = 5);
  }
  function L0(l, t) {
    do {
      var a = Yv(l.alternate, l);
      if (a !== null) {
        a.flags &= 32767, K = a;
        return;
      }
      if (a = l.return, a !== null && (a.flags |= 32768, a.subtreeFlags = 0, a.deletions = null), !t && (l = l.sibling, l !== null)) {
        K = l;
        return;
      }
      K = l = a;
    } while (l !== null);
    zl = 6, K = null;
  }
  function K0(l, t, a, e, u, n, c, i, f, v, g, b) {
    l.cancelPendingCommit = null;
    do
      _c();
    while (Sl !== 0);
    if ((al & 6) !== 0) throw Error(E(327));
    if (t !== null) {
      if (t === l.current) throw Error(E(177));
      l === sl && (K = sl = null, w = 0), Ee = t, Lt = l, ua = a, qf = u, q0 = e, Lv(
        l,
        t,
        a,
        c,
        i,
        f,
        b
      );
    }
  }
  function Lv(l, t, a, e, u, n, c) {
    var i = t.lanes | t.childLanes;
    if (Hf = i, i |= hi, hr(
      l,
      a,
      i,
      e,
      u,
      n
    ), ke = null, (a & 335544064) === a ? (Ie = Ev(l), e = 10262) : (Ie = null, e = 10256), (t.subtreeFlags & e) !== 0 || (t.flags & e) !== 0 ? (l.callbackNode = null, l.callbackPriority = 0, $v(sn, function() {
      return Qf(), null;
    })) : (l.callbackNode = null, l.callbackPriority = 0), ic = !1, e = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || e) {
      e = U.T, U.T = null, u = X.p, X.p = 2, n = al, al |= 4;
      try {
        Bv(l, t, a);
      } finally {
        al = n, X.p = u, U.T = e;
      }
    }
    Sl = 1, ic ? $e = hy(
      c,
      l.containerInfo,
      Ie,
      Gf,
      Xf,
      Jv,
      jf,
      Qf,
      Kv
    ) : (Gf(), Xf(), jf());
  }
  function Kv(l) {
    if (Sl !== 0) {
      var t = Lt.onRecoverableError;
      t(l, { componentStack: null });
    }
  }
  function Jv() {
    Sl === 3 && (Sl = 0, D0(Ee, Lt), Sl = 4);
  }
  function Gf() {
    if (Sl === 1) {
      Sl = 0;
      var l = Lt, t = Ee, a = ua, e = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || e) {
        e = U.T, U.T = null;
        var u = X.p;
        X.p = 2;
        var n = al;
        al |= 4;
        try {
          xu = sc = !1, O0(t, l, a), a = If;
          var c = bs(l.containerInfo), i = a.focusedElem, f = a.selectionRange;
          if (c !== i && i && i.ownerDocument && Ts(
            i.ownerDocument.documentElement,
            i
          )) {
            if (f !== null && oi(i)) {
              var v = f.start, g = f.end;
              if (g === void 0 && (g = v), "selectionStart" in i)
                i.selectionStart = v, i.selectionEnd = Math.min(
                  g,
                  i.value.length
                );
              else {
                var b = i.ownerDocument || document, d = b && b.defaultView || window;
                if (d.getSelection) {
                  var h = d.getSelection(), z = i.textContent.length, M = Math.min(f.start, z), Z = f.end === void 0 ? M : Math.min(f.end, z);
                  !h.extend && M > Z && (c = Z, Z = M, M = c);
                  var r = Ss(
                    i,
                    M
                  ), s = Ss(
                    i,
                    Z
                  );
                  if (r && s && (h.rangeCount !== 1 || h.anchorNode !== r.node || h.anchorOffset !== r.offset || h.focusNode !== s.node || h.focusOffset !== s.offset)) {
                    var y = b.createRange();
                    y.setStart(r.node, r.offset), h.removeAllRanges(), M > Z ? (h.addRange(y), h.extend(s.node, s.offset)) : (y.setEnd(s.node, s.offset), h.addRange(y));
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
          mu = !!kf, If = kf = null;
        } finally {
          al = n, X.p = u, U.T = e;
        }
      }
      l.current = t, Sl = 2;
    }
  }
  function Xf() {
    if (Sl === 2) {
      Sl = 0;
      var l = Lt, t = Ee, a = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || a) {
        a = U.T, U.T = null;
        var e = X.p;
        X.p = 2;
        var u = al;
        al |= 4;
        try {
          S0(l, t.alternate, t);
        } finally {
          al = u, X.p = e, U.T = a;
        }
      }
      Sl = 3;
    }
  }
  function jf() {
    if (Sl === 4 || Sl === 3) {
      Sl = 0;
      var l = $e;
      $e = null, ir();
      var t = Lt, a = Ee, e = ua, u = q0, n = (e & 335544064) === e ? 10262 : 10256;
      if ((a.subtreeFlags & n) !== 0 || (a.flags & n) !== 0 ? Sl = 5 : (Sl = 0, Ee = Lt = null, J0(t, t.pendingLanes)), n = t.pendingLanes, n === 0 && (Va = null), wc(e), a = a.stateNode, ht && typeof ht.onCommitFiberRoot == "function")
        try {
          ht.onCommitFiberRoot(
            du,
            a,
            void 0,
            (a.current.flags & 128) === 128
          );
        } catch {
        }
      if (u !== null) {
        a = U.T, n = X.p, X.p = 2, U.T = null;
        try {
          for (var c = t.onRecoverableError, i = 0; i < u.length; i++) {
            var f = u[i];
            c(f.value, {
              componentStack: f.stack
            });
          }
        } finally {
          U.T = a, X.p = n;
        }
      }
      if (u = ke, c = Ie, Ie = null, u !== null && (ke = null, c === null && (c = []), l !== null))
        for (f = 0; f < u.length; f++)
          a = (0, u[f])(
            c
          ), a !== void 0 && l.finished.finally(a);
      (ua & 3) !== 0 && _c(), na(t), n = t.pendingLanes, (e & 261930) !== 0 && (n & 42) !== 0 ? t === Ec ? wu++ : (wu = 0, Ec = t) : (wu = 0, Ec = null), Wu(0);
    }
  }
  function J0(l, t) {
    (l.pooledCacheLanes &= t) === 0 && (t = l.pooledCache, t != null && (l.pooledCache = null, Mu(t)));
  }
  function _c() {
    return $e !== null && ($e.skipTransition(), $e = null), Gf(), Xf(), jf(), Qf();
  }
  function Qf() {
    if (Sl !== 5) return !1;
    var l = Lt, t = Hf;
    Hf = 0;
    var a = wc(ua), e = U.T, u = X.p;
    try {
      X.p = 32 > a ? 32 : a, U.T = null, a = qf, qf = null;
      var n = Lt, c = ua;
      if (Sl = 0, Ee = Lt = null, ua = 0, (al & 6) !== 0) throw Error(E(331));
      var i = al;
      if (al |= 4, R0(n.current), M0(
        n,
        n.current,
        c,
        a
      ), al = i, Wu(0, !1), ht && typeof ht.onPostCommitFiberRoot == "function")
        try {
          ht.onPostCommitFiberRoot(du, n);
        } catch {
        }
      return !0;
    } finally {
      X.p = u, U.T = e, J0(l, t);
    }
  }
  function w0(l, t, a) {
    t = Ut(a, t), t = af(l.stateNode, t, 2), l = qa(l, t, 2), l !== null && (vu(l, 2), na(l));
  }
  function cl(l, t, a) {
    if (l.tag === 3)
      w0(l, l, a);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          w0(
            t,
            l,
            a
          );
          break;
        } else if (t.tag === 1) {
          var e = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof e.componentDidCatch == "function" && (Va === null || !Va.has(e))) {
            l = Ut(a, l), a = xo(2), e = qa(t, a, 2), e !== null && (Lo(
              a,
              e,
              t,
              l
            ), vu(e, 2), na(e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Zf(l, t, a) {
    var e = l.pingCache;
    if (e === null) {
      e = l.pingCache = new jv();
      var u = /* @__PURE__ */ new Set();
      e.set(t, u);
    } else
      u = e.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), e.set(t, u));
    u.has(a) || (Rf = !0, u.add(a), l = wv.bind(null, l, t, a), t.then(l, l));
  }
  function wv(l, t, a) {
    var e = l.pingCache;
    e !== null && e.delete(t), l.pingedLanes |= l.suspendedLanes & a, l.warmLanes &= ~a, sl === l && (w & a) === a && ((zl === 4 || zl === 3 && (w & 62914560) === w && 300 > yt() - yc) && (al & 2) === 0 ? lu(l, 0) : vc |= a, Fe === w && (Fe = 0)), na(l);
  }
  function W0(l, t) {
    t === 0 && (t = pm()), l = ae(l, t), l !== null && (vu(l, t), na(l));
  }
  function Wv(l) {
    var t = l.memoizedState, a = 0;
    t !== null && (a = t.retryLane), W0(l, a);
  }
  function Fv(l, t) {
    var a = 0;
    switch (l.tag) {
      case 31:
      case 13:
        var e = l.stateNode, u = l.memoizedState;
        u !== null && (a = u.retryLane);
        break;
      case 19:
        e = l.stateNode;
        break;
      case 22:
        e = l.stateNode._retryCache;
        break;
      default:
        throw Error(E(314));
    }
    e !== null && e.delete(t), W0(l, a);
  }
  function $v(l, t) {
    return xc(l, t);
  }
  var au = null, eu = null, Vf = !1, zc = !1, xf = !1, La = 0;
  function na(l) {
    l !== eu && l.next === null && (eu === null ? au = eu = l : eu = eu.next = l), zc = !0, Vf || (Vf = !0, Iv());
  }
  function Wu(l, t) {
    if (!xf && zc) {
      xf = !0;
      do
        for (var a = !1, e = au; e !== null; ) {
          if (l !== 0) {
            var u = e.pendingLanes;
            if (u === 0) var n = 0;
            else {
              var c = e.suspendedLanes, i = e.pingedLanes;
              n = (1 << 31 - gt(42 | l) + 1) - 1, n &= u & ~(c & ~i), n = n & 201326741 ? n & 201326741 | 1 : n ? n | 2 : 0;
            }
            n !== 0 && (a = !0, I0(e, n));
          } else
            n = w, n = vn(
              e,
              e === sl ? n : 0,
              e.cancelPendingCommit !== null || e.timeoutHandle !== -1
            ), (n & 3) === 0 || ru(e, n) || (a = !0, I0(e, n));
          e = e.next;
        }
      while (a);
      xf = !1;
    }
  }
  function kv() {
    F0();
  }
  function F0() {
    zc = Vf = !1;
    var l = 0;
    La !== 0 && my() && (l = La);
    for (var t = yt(), a = null, e = au; e !== null; ) {
      var u = e.next, n = $0(e, t);
      n === 0 ? (e.next = null, a === null ? au = u : a.next = u, u === null && (eu = a)) : (a = e, (l !== 0 || (n & 3) !== 0) && (zc = !0)), e = u;
    }
    Sl !== 0 && Sl !== 5 || Wu(l), La !== 0 && (La = 0);
  }
  function $0(l, t) {
    for (var a = l.suspendedLanes, e = l.pingedLanes, u = l.expirationTimes, n = l.pendingLanes & -62914561; 0 < n; ) {
      var c = 31 - gt(n), i = 1 << c, f = u[c];
      f === -1 ? ((i & a) === 0 || (i & e) !== 0) && (u[c] = yr(i, t)) : f <= t && (l.expiredLanes |= i), n &= ~i;
    }
    if (t = sl, a = w, a = vn(
      l,
      l === t ? a : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e = l.callbackNode, a === 0 || l === t && (nl === 2 || nl === 9) || l.cancelPendingCommit !== null)
      return e !== null && e !== null && Lc(e), l.callbackNode = null, l.callbackPriority = 0;
    if ((a & 3) === 0 || ru(l, a)) {
      if (t = a & -a, t === l.callbackPriority) return t;
      switch (e !== null && Lc(e), wc(a)) {
        case 2:
        case 8:
          a = Cm;
          break;
        case 32:
          a = sn;
          break;
        case 268435456:
          a = Um;
          break;
        default:
          a = sn;
      }
      return e = k0.bind(null, l), a = xc(a, e), l.callbackPriority = t, l.callbackNode = a, t;
    }
    return e !== null && e !== null && Lc(e), l.callbackPriority = 2, l.callbackNode = null, 2;
  }
  function k0(l, t) {
    if (Sl !== 0 && Sl !== 5)
      return l.callbackNode = null, l.callbackPriority = 0, null;
    var a = l.callbackNode;
    if (_c() && l.callbackNode !== a)
      return null;
    var e = w;
    return e = vn(
      l,
      l === sl ? e : 0,
      l.cancelPendingCommit !== null || l.timeoutHandle !== -1
    ), e === 0 ? null : (B0(l, e, t), $0(l, yt()), l.callbackNode != null && l.callbackNode === a ? k0.bind(null, l) : null);
  }
  function I0(l, t) {
    if (_c()) return null;
    B0(l, t, !0);
  }
  function Iv() {
    oy(function() {
      (al & 6) !== 0 ? xc(
        Mm,
        kv
      ) : F0();
    });
  }
  function Lf() {
    if (La === 0) {
      var l = fe;
      l === 0 && (l = on, on <<= 1, (on & 261888) === 0 && (on = 256)), La = l;
    }
    return La;
  }
  function P0(l) {
    return l == null || typeof l == "symbol" || typeof l == "boolean" ? null : typeof l == "function" ? l : Sn(l);
  }
  function Pv(l, t, a, e, u) {
    if (t === "submit" && a && a.stateNode === u) {
      var n = P0(
        (u[ut] || null).action
      ), c = e.submitter;
      c && (t = (t = c[ut] || null) ? P0(t.formAction) : c.getAttribute("formAction"), t !== null && (n = t, c = null));
      var i = new zn(
        "action",
        "action",
        null,
        e,
        u
      );
      l.push({
        event: i,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (e.defaultPrevented) {
                if (La !== 0) {
                  var f = new FormData(u, c);
                  ki(
                    a,
                    {
                      pending: !0,
                      data: f,
                      method: u.method,
                      action: n
                    },
                    null,
                    f
                  );
                }
              } else
                typeof n == "function" && (i.preventDefault(), f = new FormData(u, c), ki(
                  a,
                  {
                    pending: !0,
                    data: f,
                    method: u.method,
                    action: n
                  },
                  n,
                  f
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var Kf = 0; Kf < yi.length; Kf++) {
    var Jf = yi[Kf], ly = Jf.toLowerCase(), ty = Jf[0].toUpperCase() + Jf.slice(1);
    Qt(
      ly,
      "on" + ty
    );
  }
  Qt(Ns, "onAnimationEnd"), Qt(Os, "onAnimationIteration"), Qt(As, "onAnimationStart"), Qt("dblclick", "onDoubleClick"), Qt("focusin", "onFocus"), Qt("focusout", "onBlur"), Qt(sv, "onTransitionRun"), Qt(ov, "onTransitionStart"), Qt(dv, "onTransitionCancel"), Qt(Ds, "onTransitionEnd"), Oe("onMouseEnter", ["mouseout", "mouseover"]), Oe("onMouseLeave", ["mouseout", "mouseover"]), Oe("onPointerEnter", ["pointerout", "pointerover"]), Oe("onPointerLeave", ["pointerout", "pointerover"]), Pa(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Pa(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Pa("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Pa(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Pa(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Pa(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Fu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ay = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Fu)
  );
  function ld(l, t) {
    t = (t & 4) !== 0;
    for (var a = 0; a < l.length; a++) {
      var e = l[a], u = e.event;
      e = e.listeners;
      l: {
        var n = void 0;
        if (t)
          for (var c = e.length - 1; 0 <= c; c--) {
            var i = e[c], f = i.instance, v = i.currentTarget;
            if (i = i.listener, f !== n && u.isPropagationStopped())
              break l;
            n = i, u.currentTarget = v;
            try {
              n(u);
            } catch (g) {
              An(g);
            }
            u.currentTarget = null, n = f;
          }
        else
          for (c = 0; c < e.length; c++) {
            if (i = e[c], f = i.instance, v = i.currentTarget, i = i.listener, f !== n && u.isPropagationStopped())
              break l;
            n = i, u.currentTarget = v;
            try {
              n(u);
            } catch (g) {
              An(g);
            }
            u.currentTarget = null, n = f;
          }
      }
    }
  }
  function J(l, t) {
    var a = t[Xm];
    a === void 0 && (a = t[Xm] = /* @__PURE__ */ new Set());
    var e = l + "__bubble";
    a.has(e) || (td(t, l, 2, !1), a.add(e));
  }
  function wf(l, t, a) {
    var e = 0;
    t && (e |= 4), td(
      a,
      l,
      e,
      t
    );
  }
  var Nc = "_reactListening" + Math.random().toString(36).slice(2);
  function Wf(l) {
    if (!l[Nc]) {
      l[Nc] = !0, Zm.forEach(function(a) {
        a !== "selectionchange" && (ay.has(a) || wf(a, !1, l), wf(a, !0, l));
      });
      var t = l.nodeType === 9 ? l : l.ownerDocument;
      t === null || t[Nc] || (t[Nc] = !0, wf("selectionchange", !1, t));
    }
  }
  function td(l, t, a, e) {
    switch (Ld(t)) {
      case 2:
        var u = Wy;
        break;
      case 8:
        u = Fy;
        break;
      default:
        u = vm;
    }
    a = u.bind(
      null,
      t,
      a,
      l
    ), u = void 0, !ti || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), e ? u !== void 0 ? l.addEventListener(t, a, {
      capture: !0,
      passive: u
    }) : l.addEventListener(t, a, !0) : u !== void 0 ? l.addEventListener(t, a, {
      passive: u
    }) : l.addEventListener(t, a, !1);
  }
  function Ff(l, t, a, e, u) {
    var n = e;
    if ((t & 1) === 0 && (t & 2) === 0 && e !== null)
      l: for (; ; ) {
        if (e === null) return;
        var c = e.tag;
        if (c === 3 || c === 4) {
          var i = e.stateNode.containerInfo;
          if (i === u) break;
          if (c === 4)
            for (c = e.return; c !== null; ) {
              var f = c.tag;
              if ((f === 3 || f === 4) && c.stateNode.containerInfo === u)
                return;
              c = c.return;
            }
          for (; i !== null; ) {
            if (c = Ia(i), c === null) return;
            if (f = c.tag, f === 5 || f === 6 || f === 26 || f === 27) {
              e = n = c;
              continue l;
            }
            i = i.parentNode;
          }
        }
        e = e.return;
      }
    ls(function() {
      var v = n, g = Pc(a), b = [];
      l: {
        var d = Ms.get(l);
        if (d !== void 0) {
          var h = zn, z = l;
          switch (l) {
            case "keypress":
              if (bn(a) === 0) break l;
            case "keydown":
            case "keyup":
              h = Qr;
              break;
            case "focusin":
              z = "focus", h = ni;
              break;
            case "focusout":
              z = "blur", h = ni;
              break;
            case "beforeblur":
            case "afterblur":
              h = ni;
              break;
            case "click":
              if (a.button === 2) break l;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              h = es;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              h = Mr;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              h = Kr;
              break;
            case Ns:
            case Os:
            case As:
              h = Rr;
              break;
            case Ds:
              h = wr;
              break;
            case "scroll":
            case "scrollend":
              h = Ar;
              break;
            case "wheel":
              h = Fr;
              break;
            case "copy":
            case "cut":
            case "paste":
              h = Hr;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              h = ns;
              break;
            case "submit":
              h = xr;
              break;
            case "toggle":
            case "beforetoggle":
              h = kr;
          }
          var M = (t & 4) !== 0, Z = !M && (l === "scroll" || l === "scrollend"), r = M ? d !== null ? d + "Capture" : null : d;
          M = [];
          for (var s = v, y; s !== null; ) {
            var T = s;
            if (y = T.stateNode, T = T.tag, T !== 5 && T !== 26 && T !== 27 || y === null || r === null || (T = gu(s, r), T != null && M.push(
              $u(s, T, y)
            )), Z) break;
            s = s.return;
          }
          0 < M.length && (d = new h(
            d,
            z,
            null,
            a,
            g
          ), b.push({ event: d, listeners: M }));
        }
      }
      if ((t & 7) === 0) {
        l: {
          if (h = l === "mouseover" || l === "pointerover", d = l === "mouseout" || l === "pointerout", h && a !== Ic && (z = a.relatedTarget || a.fromElement) && (Ia(z) || z[_e]))
            break l;
          (d || h) && (z = g.window === g ? g : (h = g.ownerDocument) ? h.defaultView || h.parentWindow : window, d ? (h = a.relatedTarget || a.toElement, d = v, h = h ? Ia(h) : null, h !== null && (Z = dt(h), M = h.tag, h !== Z || M !== 5 && M !== 27 && M !== 6) && (h = null)) : (d = null, h = v), d !== h && (M = es, T = "onMouseLeave", r = "onMouseEnter", s = "mouse", (l === "pointerout" || l === "pointerover") && (M = ns, T = "onPointerLeave", r = "onPointerEnter", s = "pointer"), Z = d == null ? z : hu(d), y = h == null ? z : hu(h), z = new M(
            T,
            s + "leave",
            d,
            a,
            g
          ), z.target = Z, z.relatedTarget = y, T = null, Ia(g) === v && (M = new M(
            r,
            s + "enter",
            h,
            a,
            g
          ), M.target = y, M.relatedTarget = Z, T = M), Z = T, M = d && h ? $l(
            d,
            h,
            ey
          ) : null, d !== null && ad(
            b,
            z,
            d,
            M,
            !1
          ), h !== null && Z !== null && ad(
            b,
            Z,
            h,
            M,
            !0
          )));
        }
        l: {
          if (d = v ? hu(v) : window, h = d.nodeName && d.nodeName.toLowerCase(), h === "select" || h === "input" && d.type === "file")
            var D = rs;
          else if (os(d))
            if (vs)
              D = iv;
            else {
              D = nv;
              var W = uv;
            }
          else
            h = d.nodeName, !h || h.toLowerCase() !== "input" || d.type !== "checkbox" && d.type !== "radio" ? v && kc(v.elementType) && (D = rs) : D = cv;
          if (D && (D = D(l, v))) {
            ds(
              b,
              D,
              a,
              g
            );
            break l;
          }
          W && W(l, d, v);
        }
        switch (W = v ? hu(v) : window, l) {
          case "focusin":
            (os(W) || W.contentEditable === "true") && (Re = W, di = v, Ou = null);
            break;
          case "focusout":
            Ou = di = Re = null;
            break;
          case "mousedown":
            ri = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ri = !1, _s(b, a, g);
            break;
          case "selectionchange":
            if (mv) break;
          case "keydown":
          case "keyup":
            _s(b, a, g);
        }
        var R;
        if (ii)
          l: {
            switch (l) {
              case "compositionstart":
                var B = "onCompositionStart";
                break l;
              case "compositionend":
                B = "onCompositionEnd";
                break l;
              case "compositionupdate":
                B = "onCompositionUpdate";
                break l;
            }
            B = void 0;
          }
        else
          Ue ? ms(l, a) && (B = "onCompositionEnd") : l === "keydown" && a.keyCode === 229 && (B = "onCompositionStart");
        B && (cs && a.locale !== "ko" && (Ue || B !== "onCompositionStart" ? B === "onCompositionEnd" && Ue && (R = ts()) : (Oa = g, ai = "value" in Oa ? Oa.value : Oa.textContent, Ue = !0)), W = Oc(v, B), 0 < W.length && (B = new us(
          B,
          l,
          null,
          a,
          g
        ), b.push({ event: B, listeners: W }), R ? B.data = R : (R = ss(a), R !== null && (B.data = R)))), (R = Pr ? lv(l, a) : tv(l, a)) && (B = Oc(v, "onBeforeInput"), 0 < B.length && (W = new us(
          "onBeforeInput",
          "beforeinput",
          null,
          a,
          g
        ), b.push({
          event: W,
          listeners: B
        }), W.data = R)), Pv(
          b,
          l,
          v,
          a,
          g
        );
      }
      ld(b, t);
    });
  }
  function $u(l, t, a) {
    return {
      instance: l,
      listener: t,
      currentTarget: a
    };
  }
  function Oc(l, t) {
    for (var a = t + "Capture", e = []; l !== null; ) {
      var u = l, n = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || n === null || (u = gu(l, a), u != null && e.unshift(
        $u(l, u, n)
      ), u = gu(l, t), u != null && e.push(
        $u(l, u, n)
      )), l.tag === 3) return e;
      l = l.return;
    }
    return [];
  }
  function ey(l) {
    if (l === null) return null;
    do
      l = l.return;
    while (l && l.tag !== 5 && l.tag !== 27);
    return l || null;
  }
  function ad(l, t, a, e, u) {
    for (var n = t._reactName, c = []; a !== null && a !== e; ) {
      var i = a, f = i.alternate, v = i.stateNode;
      if (i = i.tag, f !== null && f === e) break;
      i !== 5 && i !== 26 && i !== 27 || v === null || (f = v, u ? (v = gu(a, n), v != null && c.unshift(
        $u(a, v, f)
      )) : u || (v = gu(a, n), v != null && c.push(
        $u(a, v, f)
      ))), a = a.return;
    }
    c.length !== 0 && l.push({ event: t, listeners: c });
  }
  var uy = /\r\n?/g, ny = /\u0000|\uFFFD/g;
  function ed(l) {
    return (typeof l == "string" ? l : "" + l).replace(uy, `
`).replace(ny, "");
  }
  function ud(l, t) {
    return t = ed(t), ed(l) === t;
  }
  function il(l, t, a, e, u, n) {
    switch (a) {
      case "children":
        if (typeof e == "string")
          t === "body" || t === "textarea" && e === "" || De(l, e);
        else if (typeof e == "number" || typeof e == "bigint")
          t !== "body" && De(l, "" + e);
        else return;
        break;
      case "className":
        En(l, "class", e);
        break;
      case "tabIndex":
        En(l, "tabindex", e);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        En(l, a, e);
        break;
      case "style":
        Im(l, e, n);
        return;
      case "data":
        if (t !== "object") {
          En(l, "data", e);
          break;
        }
      case "src":
      case "href":
        if (e === "" && (t !== "a" || a !== "href")) {
          l.removeAttribute(a);
          break;
        }
        if (e == null || typeof e == "function" || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Sn(e), l.setAttribute(a, e);
        break;
      case "action":
      case "formAction":
        if (typeof e == "function") {
          l.setAttribute(
            a,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof n == "function" && (a === "formAction" ? (t !== "input" && il(l, t, "name", u.name, u, null), il(
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
        if (e == null || typeof e == "symbol" || typeof e == "boolean") {
          l.removeAttribute(a);
          break;
        }
        e = Sn(e), l.setAttribute(a, e);
        break;
      case "onClick":
        e != null && (l.onclick = Ft);
        return;
      case "onScroll":
        e != null && J("scroll", l);
        return;
      case "onScrollEnd":
        e != null && J("scrollend", l);
        return;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(E(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(E(60));
            n?.__html !== a && (l.innerHTML = a);
          }
        }
        break;
      case "multiple":
        l.multiple = e && typeof e != "function" && typeof e != "symbol";
        break;
      case "muted":
        l.muted = e && typeof e != "function" && typeof e != "symbol";
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
        if (e == null || typeof e == "function" || typeof e == "boolean" || typeof e == "symbol") {
          l.removeAttribute("xlink:href");
          break;
        }
        a = Sn(e), l.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          a
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
        e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
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
        e && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, "") : l.removeAttribute(a);
        break;
      case "capture":
      case "download":
        e === !0 ? l.setAttribute(a, "") : e !== !1 && e != null && typeof e != "function" && typeof e != "symbol" ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        e != null && typeof e != "function" && typeof e != "symbol" && !isNaN(e) && 1 <= e ? l.setAttribute(a, e) : l.removeAttribute(a);
        break;
      case "rowSpan":
      case "start":
        e == null || typeof e == "function" || typeof e == "symbol" || isNaN(e) ? l.removeAttribute(a) : l.setAttribute(a, e);
        break;
      case "popover":
        J("beforetoggle", l), J("toggle", l), gn(l, "popover", e);
        break;
      case "xlinkActuate":
        fa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          e
        );
        break;
      case "xlinkArcrole":
        fa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          e
        );
        break;
      case "xlinkRole":
        fa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          e
        );
        break;
      case "xlinkShow":
        fa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          e
        );
        break;
      case "xlinkTitle":
        fa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          e
        );
        break;
      case "xlinkType":
        fa(
          l,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          e
        );
        break;
      case "xmlBase":
        fa(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          e
        );
        break;
      case "xmlLang":
        fa(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          e
        );
        break;
      case "xmlSpace":
        fa(
          l,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          e
        );
        break;
      case "is":
        gn(l, "is", e);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < a.length) || a[0] !== "o" && a[0] !== "O" || a[1] !== "n" && a[1] !== "N")
          a = Nr.get(a) || a, gn(l, a, e);
        else return;
    }
    ll = !0;
  }
  function $f(l, t, a, e, u, n) {
    switch (a) {
      case "style":
        Im(l, e, n);
        return;
      case "dangerouslySetInnerHTML":
        if (e != null) {
          if (typeof e != "object" || !("__html" in e))
            throw Error(E(61));
          if (a = e.__html, a != null) {
            if (u.children != null) throw Error(E(60));
            n?.__html !== a && (l.innerHTML = a);
          }
        }
        break;
      case "children":
        if (typeof e == "string") De(l, e);
        else if (typeof e == "number" || typeof e == "bigint")
          De(l, "" + e);
        else return;
        break;
      case "onScroll":
        e != null && J("scroll", l);
        return;
      case "onScrollEnd":
        e != null && J("scrollend", l);
        return;
      case "onClick":
        e != null && (l.onclick = Ft);
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
        if (!Vm.hasOwnProperty(a))
          l: {
            if (a[0] === "o" && a[1] === "n" && (u = a.endsWith("Capture"), n = a.slice(2, u ? a.length - 7 : void 0), t = l[ut] || null, t = t != null ? t[a] : null, typeof t == "function" && l.removeEventListener(n, t, u), typeof e == "function")) {
              typeof t != "function" && t !== null && (a in l ? l[a] = null : l.hasAttribute(a) && l.removeAttribute(a)), l.addEventListener(n, e, u);
              break l;
            }
            ll = !0, a in l ? l[a] = e : e === !0 ? l.setAttribute(a, "") : gn(l, a, e);
          }
        return;
    }
    ll = !0;
  }
  function Wl(l, t, a) {
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
        J("error", l), J("load", l);
        var e = !1, u = !1, n;
        for (n in a)
          if (a.hasOwnProperty(n)) {
            var c = a[n];
            if (c != null)
              switch (n) {
                case "src":
                  e = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(E(137, t));
                default:
                  il(l, t, n, c, a, null);
              }
          }
        u && il(l, t, "srcSet", a.srcSet, a, null), e && il(l, t, "src", a.src, a, null);
        return;
      case "input":
        J("invalid", l);
        var i = n = c = u = null, f = null, v = null;
        for (e in a)
          if (a.hasOwnProperty(e)) {
            var g = a[e];
            if (g != null)
              switch (e) {
                case "name":
                  u = g;
                  break;
                case "type":
                  c = g;
                  break;
                case "checked":
                  f = g;
                  break;
                case "defaultChecked":
                  v = g;
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
                  il(l, t, e, g, a, null);
              }
          }
        Wm(
          l,
          n,
          i,
          f,
          v,
          c,
          u,
          !1
        );
        return;
      case "select":
        J("invalid", l), e = c = n = null;
        for (u in a)
          if (a.hasOwnProperty(u) && (i = a[u], i != null))
            switch (u) {
              case "value":
                n = i;
                break;
              case "defaultValue":
                c = i;
                break;
              case "multiple":
                e = i;
              default:
                il(l, t, u, i, a, null);
            }
        t = n, a = c, l.multiple = !!e, t != null ? Ae(l, !!e, t, !1) : a != null && Ae(l, !!e, a, !0);
        return;
      case "textarea":
        J("invalid", l), n = u = e = null;
        for (c in a)
          if (a.hasOwnProperty(c) && (i = a[c], i != null))
            switch (c) {
              case "value":
                e = i;
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
                il(l, t, c, i, a, null);
            }
        $m(l, e, u, n);
        return;
      case "option":
        for (f in a)
          a.hasOwnProperty(f) && (e = a[f], e != null) && (f === "selected" ? l.selected = e && typeof e != "function" && typeof e != "symbol" : il(l, t, f, e, a, null));
        return;
      case "dialog":
        J("beforetoggle", l), J("toggle", l), J("cancel", l), J("close", l);
        break;
      case "iframe":
      case "object":
        J("load", l);
        break;
      case "video":
      case "audio":
        for (e = 0; e < Fu.length; e++)
          J(Fu[e], l);
        break;
      case "image":
        J("error", l), J("load", l);
        break;
      case "details":
        J("toggle", l);
        break;
      case "embed":
      case "source":
      case "link":
        J("error", l), J("load", l);
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
        for (v in a)
          if (a.hasOwnProperty(v) && (e = a[v], e != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(E(137, t));
              default:
                il(l, t, v, e, a, null);
            }
        return;
      default:
        if (kc(t)) {
          for (g in a)
            a.hasOwnProperty(g) && (e = a[g], e !== void 0 && $f(
              l,
              t,
              g,
              e,
              a,
              void 0
            ));
          return;
        }
    }
    for (i in a)
      a.hasOwnProperty(i) && (e = a[i], e != null && il(l, t, i, e, a, null));
  }
  var cy = {};
  function iy(l, t, a, e) {
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
        var u = null, n = null, c = null, i = null, f = null, v = null, g = null;
        for (h in a) {
          var b = a[h];
          if (a.hasOwnProperty(h) && b != null)
            switch (h) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                f = b;
              default:
                e.hasOwnProperty(h) || il(l, t, h, null, e, b);
            }
        }
        for (var d in e) {
          var h = e[d];
          if (b = a[d], e.hasOwnProperty(d) && (h != null || b != null))
            switch (d) {
              case "type":
                h !== b && (ll = !0), n = h;
                break;
              case "name":
                h !== b && (ll = !0), u = h;
                break;
              case "checked":
                h !== b && (ll = !0), v = h;
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
                  d,
                  h,
                  e,
                  b
                );
            }
        }
        Fc(
          l,
          c,
          i,
          f,
          v,
          g,
          n,
          u
        );
        return;
      case "select":
        h = c = i = d = null;
        for (n in a)
          if (f = a[n], a.hasOwnProperty(n) && f != null)
            switch (n) {
              case "value":
                break;
              case "multiple":
                h = f;
              default:
                e.hasOwnProperty(n) || il(
                  l,
                  t,
                  n,
                  null,
                  e,
                  f
                );
            }
        for (u in e)
          if (n = e[u], f = a[u], e.hasOwnProperty(u) && (n != null || f != null))
            switch (u) {
              case "value":
                n !== f && (ll = !0), d = n;
                break;
              case "defaultValue":
                n !== f && (ll = !0), i = n;
                break;
              case "multiple":
                n !== f && (ll = !0), c = n;
              default:
                n !== f && il(
                  l,
                  t,
                  u,
                  n,
                  e,
                  f
                );
            }
        t = i, a = c, e = h, d != null ? Ae(l, !!a, d, !1) : !!e != !!a && (t != null ? Ae(l, !!a, t, !0) : Ae(l, !!a, a ? [] : "", !1));
        return;
      case "textarea":
        h = d = null;
        for (i in a)
          if (u = a[i], a.hasOwnProperty(i) && u != null && !e.hasOwnProperty(i))
            switch (i) {
              case "value":
                break;
              case "children":
                break;
              default:
                il(l, t, i, null, e, u);
            }
        for (c in e)
          if (u = e[c], n = a[c], e.hasOwnProperty(c) && (u != null || n != null))
            switch (c) {
              case "value":
                u !== n && (ll = !0), d = u;
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
                u !== n && il(l, t, c, u, e, n);
            }
        Fm(l, d, h);
        return;
      case "option":
        for (var z in a)
          d = a[z], a.hasOwnProperty(z) && d != null && !e.hasOwnProperty(z) && (z === "selected" ? l.selected = !1 : il(
            l,
            t,
            z,
            null,
            e,
            d
          ));
        for (f in e)
          d = e[f], h = a[f], e.hasOwnProperty(f) && d !== h && (d != null || h != null) && (f === "selected" ? (d !== h && (ll = !0), l.selected = d && typeof d != "function" && typeof d != "symbol") : il(
            l,
            t,
            f,
            d,
            e,
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
        for (var M in a)
          d = a[M], a.hasOwnProperty(M) && d != null && !e.hasOwnProperty(M) && il(l, t, M, null, e, d);
        for (v in e)
          if (d = e[v], h = a[v], e.hasOwnProperty(v) && d !== h && (d != null || h != null))
            switch (v) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (d != null)
                  throw Error(E(137, t));
                break;
              default:
                il(
                  l,
                  t,
                  v,
                  d,
                  e,
                  h
                );
            }
        return;
      default:
        if (kc(t)) {
          for (var Z in a)
            d = a[Z], a.hasOwnProperty(Z) && d !== void 0 && !e.hasOwnProperty(Z) && $f(
              l,
              t,
              Z,
              void 0,
              e,
              d
            );
          for (g in e)
            d = e[g], h = a[g], !e.hasOwnProperty(g) || d === h || d === void 0 && h === void 0 || $f(
              l,
              t,
              g,
              d,
              e,
              h
            );
          return;
        }
    }
    for (var r in a)
      d = a[r], a.hasOwnProperty(r) && d != null && !e.hasOwnProperty(r) && il(l, t, r, null, e, d);
    for (b in e)
      d = e[b], h = a[b], !e.hasOwnProperty(b) || d === h || d == null && h == null || il(l, t, b, d, e, h);
  }
  function nd(l) {
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
  function fy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var l = 0, t = 0, a = performance.getEntriesByType("resource"), e = 0; e < a.length; e++) {
        var u = a[e], n = u.transferSize, c = u.initiatorType, i = u.duration;
        if (n && i && nd(c)) {
          for (c = 0, i = u.responseEnd, e += 1; e < a.length; e++) {
            var f = a[e], v = f.startTime;
            if (v > i) break;
            var g = f.transferSize, b = f.initiatorType;
            g && nd(b) && (f = f.responseEnd, c += g * (f < i ? 1 : (i - v) / (f - v)));
          }
          if (--e, t += 8 * (n + c) / (u.duration / 1e3), l++, 10 < l) break;
        }
      }
      if (0 < l) return t / l / 1e6;
    }
    return navigator.connection && (l = navigator.connection.downlink, typeof l == "number") ? l : 5;
  }
  var kf = null, If = null;
  function ku(l) {
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  function cd(l) {
    switch (l) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function id(l, t) {
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
  function fd(l, t, a, e) {
    return a = ku(
      a
    ).createElement(l), a[xl] = e, a[ut] = t, Wl(a, l, t), Gl(a), a;
  }
  function Pf(l, t) {
    return l === "textarea" || l === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var lm = null;
  function my() {
    var l = window.event;
    return l && l.type === "popstate" ? l === lm ? !1 : (lm = l, !0) : (lm = null, !1);
  }
  var tm = typeof setTimeout == "function" ? setTimeout : void 0, sy = typeof clearTimeout == "function" ? clearTimeout : void 0, md = typeof Promise == "function" ? Promise : void 0, sd = typeof requestAnimationFrame == "function" ? requestAnimationFrame : tm, oy = typeof queueMicrotask == "function" ? queueMicrotask : typeof md < "u" ? function(l) {
    return md.resolve(null).then(l).catch(dy);
  } : tm;
  function dy(l) {
    setTimeout(function() {
      throw l;
    });
  }
  function Ka(l) {
    return l === "head";
  }
  function od(l, t) {
    var a = t, e = 0;
    do {
      var u = a.nextSibling;
      if (l.removeChild(a), u && u.nodeType === 8)
        if (a = u.data, a === "/$" || a === "/&") {
          if (e === 0) {
            l.removeChild(u), su(t);
            return;
          }
          e--;
        } else if (a === "$" || a === "$?" || a === "$~" || a === "$!" || a === "&")
          e++;
        else if (a === "html")
          mm(
            l.ownerDocument.documentElement
          );
        else if (a === "head") {
          a = l.ownerDocument.head, mm(a);
          for (var n = a.firstChild; n; ) {
            var c = n.nextSibling, i = n.nodeName;
            n[yu] || i === "SCRIPT" || i === "STYLE" || i === "LINK" && n.rel.toLowerCase() === "stylesheet" || a.removeChild(n), n = c;
          }
        } else
          a === "body" && mm(l.ownerDocument.body);
      a = u;
    } while (a);
    su(t);
  }
  function dd(l, t) {
    var a = l;
    l = 0;
    do {
      var e = a.nextSibling;
      if (a.nodeType === 1 ? t ? (a._stashedDisplay = a.style.display, a.style.display = "none") : (a.style.display = a._stashedDisplay || "", a.getAttribute("style") === "" && a.removeAttribute("style")) : a.nodeType === 3 && (t ? (a._stashedText = a.nodeValue, a.nodeValue = "") : a.nodeValue = a._stashedText || ""), e && e.nodeType === 8)
        if (a = e.data, a === "/$") {
          if (l === 0) break;
          l--;
        } else
          a !== "$" && a !== "$?" && a !== "$~" && a !== "$!" || l++;
      a = e;
    } while (a);
  }
  function rd(l, t, a) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, l.style.viewTransitionName = t, a != null && (l.style.viewTransitionClass = a), a = getComputedStyle(l), a.display === "inline") {
      if (t = l.getClientRects(), t.length === 1) var e = 1;
      else
        for (var u = e = 0; u < t.length; u++) {
          var n = t[u];
          0 < n.width && 0 < n.height && e++;
        }
      e === 1 && (l = l.style, l.display = t.length === 1 ? "inline-block" : "block", l.marginTop = "-" + a.paddingTop, l.marginBottom = "-" + a.paddingBottom);
    }
  }
  function vd(l, t) {
    l = l.style, t = t.style;
    var a = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    l.viewTransitionName = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), a = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, l.viewTransitionClass = a == null || typeof a == "boolean" ? "" : ("" + a).trim(), l.display === "inline-block" && (t == null ? l.display = l.margin = "" : (a = t.display, l.display = a == null || typeof a == "boolean" ? "" : a, a = t.margin, a != null ? l.margin = a : (a = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], l.marginTop = a == null || typeof a == "boolean" ? "" : a, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], l.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function ry(l, t, a) {
    return a = a.ownerDocument.defaultView, {
      rect: l,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= l.bottom && 0 <= l.right && l.top <= a.innerHeight && l.left <= a.innerWidth
    };
  }
  function am(l) {
    var t = l.getBoundingClientRect(), a = getComputedStyle(l);
    return ry(t, a, l);
  }
  function vy(l) {
    return l.documentElement.clientHeight;
  }
  function yy(l) {
    this.addEventListener("load", l), this.addEventListener("error", l);
  }
  function hy(l, t, a, e, u, n, c, i, f) {
    var v = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var g = v.startViewTransition({
        update: function() {
          var d = v.defaultView, h = d.navigation && d.navigation.transition, z = v.fonts.status;
          e();
          var M = [];
          if (z === "loaded" && (vy(v), v.fonts.status === "loading" && M.push(v.fonts.ready)), z = M.length, l !== null)
            for (var Z = l.suspenseyImages, r = 0, s = 0; s < Z.length; s++) {
              var y = Z[s];
              if (!y.complete) {
                var T = y.getBoundingClientRect();
                if (0 < T.bottom && 0 < T.right && T.top < d.innerHeight && T.left < d.innerWidth) {
                  if (r += Yd(y), r > Mc) {
                    M.length = z;
                    break;
                  }
                  y = new Promise(
                    yy.bind(y)
                  ), M.push(y);
                }
              }
            }
          if (0 < M.length)
            return d = Promise.race([
              Promise.all(M),
              new Promise(function(D) {
                return setTimeout(D, 500);
              })
            ]).then(u, u), (h ? Promise.allSettled([h.finished, d]) : d).then(n, n);
          if (u(), h)
            return h.finished.then(
              n,
              n
            );
          n();
        },
        types: a
      });
      v.__reactViewTransition = g;
      var b = [];
      return g.ready.then(
        function() {
          for (var d = v.documentElement.getAnimations({
            subtree: !0
          }), h = 0; h < d.length; h++) {
            var z = d[h], M = z.effect, Z = M.pseudoElement;
            if (Z != null && Z.startsWith("::view-transition")) {
              b.push(z), z = M.getKeyframes();
              for (var r = Z = void 0, s = !0, y = 0; y < z.length; y++) {
                var T = z[y], D = T.width;
                if (Z === void 0) Z = D;
                else if (Z !== D) {
                  s = !1;
                  break;
                }
                if (D = T.height, r === void 0) r = D;
                else if (r !== D) {
                  s = !1;
                  break;
                }
                delete T.width, delete T.height, T.transform === "none" && delete T.transform;
              }
              s && Z !== void 0 && r !== void 0 && (M.setKeyframes(z), s = getComputedStyle(
                M.target,
                M.pseudoElement
              ), s.width !== Z || s.height !== r) && (s = z[0], s.width = Z, s.height = r, s = z[z.length - 1], s.width = Z, s.height = r, M.setKeyframes(z));
            }
          }
          c();
        },
        function(d) {
          v.__reactViewTransition === g && (v.__reactViewTransition = null);
          try {
            typeof d == "object" && d !== null && d.name === "InvalidStateError" && (d.message === "View transition was skipped because document visibility state is hidden." || d.message === "Skipping view transition because document visibility state has become hidden." || d.message === "Skipping view transition because viewport size changed." || d.message === "Transition was aborted because of invalid state") && (d = null), d !== null && f(d);
          } finally {
            e(), u(), c();
          }
        }
      ), g.finished.finally(function() {
        for (var d = 0; d < b.length; d++)
          b[d].cancel();
        v.__reactViewTransition === g && (v.__reactViewTransition = null), i();
      }), g;
    } catch {
      return e(), u(), c(), null;
    }
  }
  function Se(l, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + l + "(" + t + ")";
  }
  Se.prototype.animate = function(l, t) {
    return t = typeof t == "number" ? { duration: t } : V({}, t), t.pseudoElement = this._selector, this._scope.animate(l, t);
  }, Se.prototype.getAnimations = function() {
    for (var l = this._scope, t = this._selector, a = l.getAnimations({ subtree: !0 }), e = [], u = 0; u < a.length; u++) {
      var n = a[u].effect;
      n !== null && n.target === l && n.pseudoElement === t && e.push(a[u]);
    }
    return e;
  }, Se.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function yd(l) {
    return {
      name: l,
      group: new Se("group", l),
      imagePair: new Se("image-pair", l),
      old: new Se("old", l),
      new: new Se("new", l)
    };
  }
  function Ot(l) {
    this._fragmentFiber = l, this._observers = this._eventListeners = null;
  }
  Ot.prototype.addEventListener = function(l, t, a) {
    var e = null, u = null;
    if (!(a != null && typeof a != "boolean" && (e = a.signal || null, e !== null && e.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var n = this._eventListeners;
      if (gd(n, l, t, a) === -1) {
        var c = this, i = t;
        a != null && typeof a != "boolean" && a.once === !0 && (i = function(f) {
          c.removeEventListener(
            l,
            t,
            a
          ), typeof t == "function" ? t.call(this, f) : t.handleEvent(f);
        }), e !== null && (u = c.removeEventListener.bind(
          c,
          l,
          t,
          a
        ), e.addEventListener("abort", u, { once: !0 }), u = e.removeEventListener.bind(e, "abort", u)), e = uu(a), n.push({
          type: l,
          listener: t,
          optionsOrUseCapture: a,
          attachedListener: i,
          cleanup: u
        }), S(
          this._fragmentFiber.child,
          !1,
          gy,
          l,
          i,
          e
        );
      }
      this._eventListeners = n;
    }
  };
  function gy(l, t, a, e) {
    return fl(l).addEventListener(
      t,
      a,
      e
    ), !1;
  }
  Ot.prototype.removeEventListener = function(l, t, a) {
    var e = this._eventListeners;
    if (e !== null && (t = gd(
      e,
      l,
      t,
      a
    ), t !== -1)) {
      var u = e[t];
      a = u.attachedListener;
      var n = u.cleanup;
      u = uu(u.optionsOrUseCapture), S(
        this._fragmentFiber.child,
        !1,
        Ey,
        l,
        a,
        u
      ), e.splice(t, 1), n !== null && n();
    }
  };
  function Ey(l, t, a, e) {
    return fl(l).removeEventListener(
      t,
      a,
      e
    ), !1;
  }
  function uu(l) {
    return l != null && typeof l != "boolean" && (l.once === !0 || l.signal instanceof AbortSignal) ? { capture: l.capture, passive: l.passive } : l;
  }
  function hd(l) {
    return l == null ? "c=0" : typeof l == "boolean" ? "c=" + (l ? "1" : "0") : "c=" + (l.capture ? "1" : "0");
  }
  function gd(l, t, a, e) {
    if (l.length === 0) return -1;
    e = hd(e);
    for (var u = 0; u < l.length; u++) {
      var n = l[u];
      if (n.type === t && n.listener === a && hd(n.optionsOrUseCapture) === e)
        return u;
    }
    return -1;
  }
  Ot.prototype.dispatchEvent = function(l) {
    var t = H(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = fl(t);
    var a = this._eventListeners;
    if (a !== null && 0 < a.length || !l.bubbles) {
      var e = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (a)
        for (var u = 0; u < a.length; u++) {
          var n = a[u];
          e.addEventListener(
            n.type,
            n.attachedListener,
            uu(n.optionsOrUseCapture)
          );
        }
      if (t.appendChild(e), l = e.dispatchEvent(l), a)
        for (u = 0; u < a.length; u++)
          n = a[u], e.removeEventListener(
            n.type,
            n.attachedListener,
            uu(n.optionsOrUseCapture)
          );
      return t.removeChild(e), l;
    }
    return t.dispatchEvent(l);
  }, Ot.prototype.focus = function(l) {
    S(
      this._fragmentFiber.child,
      !0,
      Ed,
      l,
      void 0,
      void 0
    );
  };
  function Ed(l, t) {
    return l.tag === 6 ? !1 : (l = fl(l), Uy(l, t));
  }
  Ot.prototype.focusLast = function(l) {
    var t = [];
    S(
      this._fragmentFiber.child,
      !0,
      em,
      t,
      void 0,
      void 0
    );
    for (var a = t.length - 1; 0 <= a && !Ed(t[a], l); a--) ;
  };
  function em(l, t) {
    return t.push(l), !1;
  }
  Ot.prototype.blur = function() {
    var l = H(
      this._fragmentFiber
    );
    l !== null && (l = fl(l), l = ku(l).activeElement, l !== null && S(
      this._fragmentFiber.child,
      !1,
      Sy,
      l,
      void 0,
      void 0
    ));
  };
  function Sy(l, t) {
    return l.tag === 6 ? !1 : (l = fl(l), l === t || l.contains(t) ? (t.blur(), !0) : !1);
  }
  Ot.prototype.observeUsing = function(l) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(l), S(
      this._fragmentFiber.child,
      !1,
      Ty,
      l,
      void 0,
      void 0
    );
  };
  function Ty(l, t) {
    return l.tag === 6 || (l = fl(l), t.observe(l)), !1;
  }
  Ot.prototype.unobserveUsing = function(l) {
    var t = this._observers;
    if (t !== null && t.has(l)) {
      t.delete(l), S(
        this._fragmentFiber.child,
        !1,
        by,
        l,
        void 0,
        void 0
      );
      for (var a = t = 0; a < Kt.length; a++) {
        var e = Kt[a];
        e.fragmentInstance === this && e.observer === l ? l.unobserve(e.instance) : Kt[t++] = e;
      }
      Kt.length = t;
    }
  };
  function by(l, t) {
    return l.tag === 6 || (l = fl(l), t.unobserve(l)), !1;
  }
  var Kt = [], um = !1;
  function _y(l, t, a) {
    Kt.push({
      fragmentInstance: l,
      observer: t,
      instance: a
    }), um || (um = !0, Ry(function() {
      um = !1;
      var e = Kt;
      Kt = [];
      for (var u = 0; u < e.length; u++) {
        var n = e[u];
        n.observer.unobserve(n.instance);
      }
    }));
  }
  Ot.prototype.getClientRects = function() {
    var l = [];
    return S(
      this._fragmentFiber.child,
      !1,
      zy,
      l,
      void 0,
      void 0
    ), l;
  };
  function zy(l, t) {
    if (l.tag === 6) {
      l = l.stateNode;
      var a = l.ownerDocument.createRange();
      a.selectNodeContents(l), t.push.apply(t, a.getClientRects());
    } else
      l = fl(l), t.push.apply(t, l.getClientRects());
    return !1;
  }
  Ot.prototype.getRootNode = function(l) {
    var t = H(
      this._fragmentFiber
    );
    return t === null ? this : fl(t).getRootNode(l);
  }, Ot.prototype.compareDocumentPosition = function(l) {
    var t = H(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var a = [];
    S(
      this._fragmentFiber.child,
      !1,
      em,
      a,
      void 0,
      void 0
    );
    var e = fl(t);
    if (a.length === 0) {
      if (a = e, Nl(this._fragmentFiber)) {
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
        t != null && (a = t);
      }
      t = this._fragmentFiber;
      var u = e = a.compareDocumentPosition(l);
      return a === l ? u = Node.DOCUMENT_POSITION_CONTAINS : e & Node.DOCUMENT_POSITION_CONTAINED_BY && (a = Yl(t)[1], a === null ? u = Node.DOCUMENT_POSITION_PRECEDING : (l = fl(a).compareDocumentPosition(
        l
      ), u = l === 0 || l & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), u |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = fl(a[0]), u = fl(a[a.length - 1]);
    var n = Nl(this._fragmentFiber) ? t.parentElement : e;
    if (n == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    e = n.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, n = n.compareDocumentPosition(u) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = t.compareDocumentPosition(l), i = u.compareDocumentPosition(l), f = c & Node.DOCUMENT_POSITION_CONTAINED_BY || i & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return i = e && n && c & Node.DOCUMENT_POSITION_FOLLOWING && i & Node.DOCUMENT_POSITION_PRECEDING, t = e && t === l || n && u === l || f || i ? Node.DOCUMENT_POSITION_CONTAINED_BY : !e && t === l || !n && u === l ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Ny(
      t,
      this._fragmentFiber,
      a[0],
      a[a.length - 1],
      l
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Ny(l, t, a, e, u) {
    var n = Ia(u);
    if (l & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (a = !!n)
        l: {
          for (; n !== null; ) {
            if (n.tag === 7 && (n === t || n.alternate === t)) {
              a = !0;
              break l;
            }
            n = n.return;
          }
          a = !1;
        }
      return a;
    }
    if (l & Node.DOCUMENT_POSITION_CONTAINS) {
      if (n === null)
        return n = u.ownerDocument, u === n || u === n.documentElement || u === n.body;
      l: {
        for (n = t, t = H(t); n !== null; ) {
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
    return l & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!n) && !(t = n === a) && (t = $l(
      a,
      n,
      et
    ), t === null ? t = !1 : (S(
      t,
      !0,
      Jt,
      n,
      a
    ), n = Bl, Bl = null, t = n !== null)), t) : l & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!n) && !(t = n === e) && (t = $l(
      e,
      n,
      et
    ), t === null ? t = !1 : (S(
      t,
      !0,
      vt,
      n,
      e
    ), n = Bl, Hl = Bl = null, t = n !== null)), t) : !1;
  }
  function Sd(l, t) {
    var a = l.ownerDocument.createRange();
    a.selectNodeContents(l), l = a.getBoundingClientRect(), window.scrollTo(
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
      em,
      t,
      void 0,
      void 0
    );
    var a = l !== !1;
    if (t.length === 0) {
      var e = Yl(
        this._fragmentFiber
      );
      if (e = a ? e[1] || e[0] || H(this._fragmentFiber) : e[0] || e[1], e === null) return;
      if (e.tag === 6) {
        l = fl(e), Sd(l, a);
        return;
      }
      if (e = fl(e), e.nodeType !== 9) {
        if (e.nodeType === 11) {
          a = "host" in e ? e.host : null, a !== null && a.scrollIntoView(l);
          return;
        }
        e.scrollIntoView(l);
      }
    }
    for (e = a ? t.length - 1 : 0; e !== (a ? -1 : t.length); ) {
      var u = t[e];
      u.tag === 6 ? (u = fl(u), Sd(u, a)) : fl(u).scrollIntoView(l), e += a ? -1 : 1;
    }
  };
  function Oy(l, t) {
    return l = fl(l), Td(l, t), !1;
  }
  function Td(l, t) {
    l.reactFragments == null && (l.reactFragments = /* @__PURE__ */ new Set()), l.reactFragments.add(t);
  }
  function bd(l, t) {
    var a = t._eventListeners;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e];
        l.addEventListener(
          u.type,
          u.attachedListener,
          uu(u.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (a = t._observers, a !== null && a.forEach(function(n) {
      for (var c = 0, i = 0; i < Kt.length; i++) {
        var f = Kt[i];
        (f.fragmentInstance !== t || f.observer !== n || f.instance !== l) && (Kt[c++] = f);
      }
      Kt.length = c, n.observe(l);
    }), Td(l, t));
  }
  function Ay(l, t) {
    var a = t._eventListeners;
    if (a !== null)
      for (var e = 0; e < a.length; e++) {
        var u = a[e];
        l.removeEventListener(
          u.type,
          u.attachedListener,
          uu(u.optionsOrUseCapture)
        );
      }
    l.nodeType !== 3 && (a = t._observers, a !== null && a.forEach(function(n) {
      typeof n.rootMargin == "string" ? _y(
        t,
        n,
        l
      ) : n.unobserve(l);
    }), l.reactFragments != null && l.reactFragments.delete(t));
  }
  function nm(l) {
    var t = l.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var a = t;
      switch (t = t.nextSibling, a.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          nm(a), hn(a);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (a.rel.toLowerCase() === "stylesheet") continue;
      }
      l.removeChild(a);
    }
  }
  function Dy(l, t, a, e) {
    for (; l.nodeType === 1; ) {
      var u = a;
      if (l.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!e && (l.nodeName !== "INPUT" || l.type !== "hidden"))
          break;
      } else if (e) {
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
  function My(l, t, a) {
    if (t === "") return null;
    for (; l.nodeType !== 3; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !a || (l = Yt(l.nextSibling), l === null)) return null;
    return l;
  }
  function _d(l, t) {
    for (; l.nodeType !== 8; )
      if ((l.nodeType !== 1 || l.nodeName !== "INPUT" || l.type !== "hidden") && !t || (l = Yt(l.nextSibling), l === null)) return null;
    return l;
  }
  function cm(l) {
    return l.data === "$?" || l.data === "$~";
  }
  function im(l) {
    return l.data === "$!" || l.data === "$?" && l.ownerDocument.readyState !== "loading";
  }
  function Cy(l, t) {
    var a = l.ownerDocument;
    if (l.data === "$~") l._reactRetry = t;
    else if (l.data !== "$?" || a.readyState !== "loading")
      t();
    else {
      var e = function() {
        t(), a.removeEventListener("DOMContentLoaded", e);
      };
      a.addEventListener("DOMContentLoaded", e), l._reactRetry = e;
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
  var fm = null;
  function zd(l) {
    l = l.nextSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "/$" || a === "/&") {
          if (t === 0)
            return Yt(l.nextSibling);
          t--;
        } else
          a !== "$" && a !== "$!" && a !== "$?" && a !== "$~" && a !== "&" || t++;
      }
      l = l.nextSibling;
    }
    return null;
  }
  function Nd(l) {
    l = l.previousSibling;
    for (var t = 0; l; ) {
      if (l.nodeType === 8) {
        var a = l.data;
        if (a === "$" || a === "$!" || a === "$?" || a === "$~" || a === "&") {
          if (t === 0) return l;
          t--;
        } else a !== "/$" && a !== "/&" || t++;
      }
      l = l.previousSibling;
    }
    return null;
  }
  function Uy(l, t) {
    function a() {
      e = !0;
    }
    if (l.ownerDocument.activeElement === l) return !0;
    var e = !1;
    try {
      l.ownerDocument.addEventListener("focus", a, !0), (l.focus || HTMLElement.prototype.focus).call(l, t);
    } finally {
      l.ownerDocument.removeEventListener("focus", a, !0);
    }
    return e;
  }
  function Ry(l) {
    sd(function() {
      sd(function(t) {
        return l(t);
      });
    });
  }
  function Od(l, t, a) {
    switch (t = ku(a), l) {
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
  function Ad(l, t, a) {
    for (var e in a) {
      var u = a[e];
      a.hasOwnProperty(e) && u != null && il(l, t, e, null, cy, u);
    }
    a.dangerouslySetInnerHTML != null && (l.textContent = ""), l.onclick === Ft && (l.onclick = null), hn(l);
  }
  function mm(l) {
    for (var t = l.attributes; t.length; )
      l.removeAttributeNode(t[0]);
    hn(l);
  }
  var Bt = /* @__PURE__ */ new Map(), Dd = /* @__PURE__ */ new Set();
  function Iu(l) {
    if (typeof l.getRootNode == "function") {
      var t = l.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return l.nodeType === 9 ? l : l.ownerDocument;
  }
  var ba = X.d;
  X.d = {
    f: py,
    r: Hy,
    D: qy,
    C: Yy,
    L: By,
    m: Gy,
    X: jy,
    S: Xy,
    M: Qy
  };
  function py() {
    var l = ba.f(), t = Sc();
    return l || t;
  }
  function Hy(l) {
    var t = ze(l);
    t !== null && t.tag === 5 && t.type === "form" ? Co(t) : ba.r(l);
  }
  var nu = typeof document > "u" ? null : document;
  function Md(l, t, a) {
    var e = nu;
    if (e && typeof t == "string" && t) {
      var u = Mt(t);
      u = 'link[rel="' + l + '"][href="' + u + '"]', typeof a == "string" && (u += '[crossorigin="' + a + '"]'), Dd.has(u) || (Dd.add(u), l = { rel: l, crossOrigin: a, href: t }, e.querySelector(u) === null && (t = e.createElement("link"), Wl(t, "link", l), Gl(t), e.head.appendChild(t)));
    }
  }
  function qy(l) {
    ba.D(l), Md("dns-prefetch", l, null);
  }
  function Yy(l, t) {
    ba.C(l, t), Md("preconnect", l, t);
  }
  function By(l, t, a) {
    ba.L(l, t, a);
    var e = nu;
    if (e && l && t) {
      var u = 'link[rel="preload"][as="' + Mt(t) + '"]';
      t === "image" && a && a.imageSrcSet ? (u += '[imagesrcset="' + Mt(
        a.imageSrcSet
      ) + '"]', typeof a.imageSizes == "string" && (u += '[imagesizes="' + Mt(
        a.imageSizes
      ) + '"]')) : u += '[href="' + Mt(l) + '"]';
      var n = u;
      switch (t) {
        case "style":
          n = cu(l);
          break;
        case "script":
          n = iu(l);
      }
      if (!(Bt.has(n) || (l = V(
        {
          rel: "preload",
          href: t === "image" && a && a.imageSrcSet ? void 0 : l,
          as: t
        },
        a
      ), Bt.set(n, l), e.querySelector(u) !== null || t === "style" && e.querySelector(Pu(n)) || t === "script" && e.querySelector(ln(n))))) {
        var c = e.createElement("link");
        Wl(c, "link", l), t === "style" && (c[yn] = !0, c.onload = c.onerror = function() {
          Qm(c);
        }), Gl(c), e.head.appendChild(c);
      }
    }
  }
  function Gy(l, t) {
    ba.m(l, t);
    var a = nu;
    if (a && l) {
      var e = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Mt(e) + '"][href="' + Mt(l) + '"]', n = u;
      switch (e) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          n = iu(l);
      }
      if (!Bt.has(n) && (l = V({ rel: "modulepreload", href: l }, t), Bt.set(n, l), a.querySelector(u) === null)) {
        switch (e) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (a.querySelector(ln(n)))
              return;
        }
        e = a.createElement("link"), Wl(e, "link", l), Gl(e), a.head.appendChild(e);
      }
    }
  }
  function Xy(l, t, a) {
    ba.S(l, t, a);
    var e = nu;
    if (e && l) {
      var u = Ne(e).hoistableStyles, n = cu(l);
      t = t || "default";
      var c = u.get(n);
      if (!c) {
        var i = { loading: 0, preload: null };
        if (c = e.querySelector(
          Pu(n)
        ))
          i.loading = 5;
        else {
          l = V(
            { rel: "stylesheet", href: l, "data-precedence": t },
            a
          ), (a = Bt.get(n)) && sm(l, a);
          var f = c = e.createElement("link");
          Gl(f), Wl(f, "link", l), f._p = new Promise(function(v, g) {
            f.onload = v, f.onerror = g;
          }), f.addEventListener("load", function() {
            i.loading |= 1;
          }), f.addEventListener("error", function() {
            i.loading |= 2;
          }), i.loading |= 4, Ac(c, t, e);
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
  function jy(l, t) {
    ba.X(l, t);
    var a = nu;
    if (a && l) {
      var e = Ne(a).hoistableScripts, u = iu(l), n = e.get(u);
      n || (n = a.querySelector(ln(u)), n || (l = V({ src: l, async: !0 }, t), (t = Bt.get(u)) && om(l, t), n = a.createElement("script"), Gl(n), Wl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function Qy(l, t) {
    ba.M(l, t);
    var a = nu;
    if (a && l) {
      var e = Ne(a).hoistableScripts, u = iu(l), n = e.get(u);
      n || (n = a.querySelector(ln(u)), n || (l = V({ src: l, async: !0, type: "module" }, t), (t = Bt.get(u)) && om(l, t), n = a.createElement("script"), Gl(n), Wl(n, "link", l), a.head.appendChild(n)), n = {
        type: "script",
        instance: n,
        count: 1,
        state: null
      }, e.set(u, n));
    }
  }
  function Cd(l, t, a, e) {
    var u = (u = _a.current) ? Iu(u) : null;
    if (!u) throw Error(E(446));
    switch (l) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof a.precedence == "string" && typeof a.href == "string" ? (a = cu(a.href), t = Ne(
          u
        ).hoistableStyles, e = t.get(a), e || (e = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, e)), e) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (a.rel === "stylesheet" && typeof a.href == "string" && typeof a.precedence == "string") {
          l = cu(a.href);
          var n = Ne(
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
            href: a.href,
            crossOrigin: a.crossOrigin,
            integrity: a.integrity,
            media: a.media,
            hrefLang: a.hrefLang,
            referrerPolicy: a.referrerPolicy
          }, Bt.set(l, n)), Zy(
            u,
            l,
            n,
            c.state
          ))), t && e === null)
            throw Error(E(528, ""));
          return c;
        }
        if (t && e !== null)
          throw Error(E(529, ""));
        return null;
      case "script":
        return t = a.async, a = a.src, typeof a == "string" && t && typeof t != "function" && typeof t != "symbol" ? (a = iu(a), t = Ne(
          u
        ).hoistableScripts, e = t.get(a), e || (e = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(a, e)), e) : { type: "void", instance: null, count: 0, state: null };
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
  function Ud(l) {
    return V({}, l, {
      "data-precedence": l.precedence,
      precedence: null
    });
  }
  function Zy(l, t, a, e) {
    if (t = l.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[yn] !== !0) {
        e.loading = 1;
        return;
      }
    } else
      t = l.createElement("link"), t[yn] = !0, t.onload = t.onerror = Qm.bind(null, t), Wl(t, "link", a), Gl(t), l.head.appendChild(t);
    e.preload = t, t.addEventListener("load", function() {
      return e.loading |= 1;
    }), t.addEventListener("error", function() {
      return e.loading |= 2;
    });
  }
  function iu(l) {
    return '[src="' + Mt(l) + '"]';
  }
  function ln(l) {
    return "script[async]" + l;
  }
  function Rd(l, t, a) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var e = l.querySelector(
            'style[data-href~="' + Mt(a.href) + '"]'
          );
          if (e)
            return t.instance = e, Gl(e), e;
          var u = V({}, a, {
            "data-href": a.href,
            "data-precedence": a.precedence,
            href: null,
            precedence: null
          });
          return e = (l.ownerDocument || l).createElement(
            "style"
          ), Gl(e), Wl(e, "style", u), Ac(e, a.precedence, l), t.instance = e;
        case "stylesheet":
          u = cu(a.href);
          var n = l.querySelector(
            Pu(u)
          );
          if (n)
            return t.state.loading |= 4, t.instance = n, Gl(n), n;
          e = Ud(a), (u = Bt.get(u)) && sm(e, u), n = (l.ownerDocument || l).createElement("link"), Gl(n);
          var c = n;
          return c._p = new Promise(function(i, f) {
            c.onload = i, c.onerror = f;
          }), Wl(n, "link", e), t.state.loading |= 4, Ac(n, a.precedence, l), t.instance = n;
        case "script":
          return n = iu(a.src), (u = l.querySelector(
            ln(n)
          )) ? (t.instance = u, Gl(u), u) : (e = a, (u = Bt.get(n)) && (e = V({}, a), om(e, u)), l = l.ownerDocument || l, u = l.createElement("script"), Gl(u), Wl(u, "link", e), l.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(E(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (e = t.instance, t.state.loading |= 4, Ac(e, a.precedence, l));
    return t.instance;
  }
  function Ac(l, t, a) {
    for (var e = a.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = e.length ? e[e.length - 1] : null, n = u, c = 0; c < e.length; c++) {
      var i = e[c];
      if (i.dataset.precedence === t) n = i;
      else if (n !== u) break;
    }
    n ? n.parentNode.insertBefore(l, n.nextSibling) : (t = a.nodeType === 9 ? a.head : a, t.insertBefore(l, t.firstChild));
  }
  function sm(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.title == null && (l.title = t.title);
  }
  function om(l, t) {
    l.crossOrigin == null && (l.crossOrigin = t.crossOrigin), l.referrerPolicy == null && (l.referrerPolicy = t.referrerPolicy), l.integrity == null && (l.integrity = t.integrity);
  }
  var Dc = null;
  function pd(l, t, a) {
    if (Dc === null) {
      var e = /* @__PURE__ */ new Map(), u = Dc = /* @__PURE__ */ new Map();
      u.set(a, e);
    } else
      u = Dc, e = u.get(a), e || (e = /* @__PURE__ */ new Map(), u.set(a, e));
    if (e.has(l)) return e;
    for (e.set(l, null), a = a.getElementsByTagName(l), u = 0; u < a.length; u++) {
      var n = a[u];
      if (!(n[yu] || n[xl] || l === "link" && n.getAttribute("rel") === "stylesheet") && n.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = n.getAttribute(t) || "";
        c = l + c;
        var i = e.get(c);
        i ? i.push(n) : e.set(c, [n]);
      }
    }
    return e;
  }
  function dm(l, t, a) {
    l = l.ownerDocument || l, l.head.insertBefore(
      a,
      t === "title" ? l.querySelector("head > title") : null
    );
  }
  function Vy(l, t, a) {
    if (a === 1 || t.itemProp != null) return !1;
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
  function Hd(l, t) {
    return l === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function qd(l) {
    return !(l.type === "stylesheet" && (l.state.loading & 3) === 0);
  }
  function Yd(l) {
    return (l.width || 100) * (l.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Bd(l, t) {
    typeof t.decode == "function" && (l.imgCount++, t.complete || (l.imgBytes += Yd(t), l.suspenseyImages.push(t)), l = Ky.bind(l), t.decode().then(l, l));
  }
  function xy(l, t, a, e) {
    if (a.type === "stylesheet" && (typeof e.media != "string" || matchMedia(e.media).matches !== !1) && (a.state.loading & 4) === 0) {
      if (a.instance === null) {
        var u = cu(e.href), n = t.querySelector(
          Pu(u)
        );
        if (n) {
          t = n._p, t !== null && typeof t == "object" && typeof t.then == "function" && (l.count++, l = tn.bind(l), t.then(l, l)), a.state.loading |= 4, a.instance = n, Gl(n);
          return;
        }
        n = t.ownerDocument || t, e = Ud(e), (u = Bt.get(u)) && sm(e, u), n = n.createElement("link"), Gl(n);
        var c = n;
        c._p = new Promise(function(i, f) {
          c.onload = i, c.onerror = f;
        }), Wl(n, "link", e), a.instance = n;
      }
      l.stylesheets === null && (l.stylesheets = /* @__PURE__ */ new Map()), l.stylesheets.set(a, t), (t = a.state.preload) && (a.state.loading & 3) === 0 && (l.count++, a = tn.bind(l), t.addEventListener("load", a), t.addEventListener("error", a));
    }
  }
  var Mc = 0;
  function Ly(l, t) {
    return l.stylesheets && l.count === 0 && Uc(l, l.stylesheets), 0 < l.count || 0 < l.imgCount ? function(a) {
      var e = setTimeout(function() {
        if (l.stylesheets && Uc(l, l.stylesheets), l.unsuspend) {
          var n = l.unsuspend;
          l.unsuspend = null, n();
        }
      }, 6e4 + t);
      0 < l.imgBytes && Mc === 0 && (Mc = 62500 * fy());
      var u = setTimeout(
        function() {
          if (l.waitingForImages = !1, l.count === 0 && (l.stylesheets && Uc(l, l.stylesheets), l.unsuspend)) {
            var n = l.unsuspend;
            l.unsuspend = null, n();
          }
        },
        (l.imgBytes > Mc ? 50 : 800) + t
      );
      return l.unsuspend = a, function() {
        l.unsuspend = null, clearTimeout(e), clearTimeout(u);
      };
    } : null;
  }
  function Gd(l) {
    if (l.count === 0 && (l.imgCount === 0 || !l.waitingForImages)) {
      if (l.stylesheets) Uc(l, l.stylesheets);
      else if (l.unsuspend) {
        var t = l.unsuspend;
        l.unsuspend = null, t();
      }
    }
  }
  function tn() {
    this.count--, Gd(this);
  }
  function Ky() {
    this.imgCount--, Gd(this);
  }
  var Cc = null;
  function Uc(l, t) {
    l.stylesheets = null, l.unsuspend !== null && (l.count++, Cc = /* @__PURE__ */ new Map(), t.forEach(Jy, l), Cc = null, tn.call(l));
  }
  function Jy(l, t) {
    if (!(t.state.loading & 4)) {
      var a = Cc.get(l);
      if (a) var e = a.get(null);
      else {
        a = /* @__PURE__ */ new Map(), Cc.set(l, a);
        for (var u = l.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), n = 0; n < u.length; n++) {
          var c = u[n];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (a.set(c.dataset.precedence, c), e = c);
        }
        e && a.set(null, e);
      }
      u = t.instance, c = u.getAttribute("data-precedence"), n = a.get(c) || e, n === e && a.set(null, u), a.set(c, u), this.count++, e = tn.bind(this), u.addEventListener("load", e), u.addEventListener("error", e), n ? n.parentNode.insertBefore(u, n.nextSibling) : (l = l.nodeType === 9 ? l.head : l, l.insertBefore(u, l.firstChild)), t.state.loading |= 4;
    }
  }
  var fu = {
    $$typeof: El,
    Provider: null,
    Consumer: null,
    _currentValue: ca,
    _currentValue2: ca,
    _threadCount: 0
  };
  function wy(l, t, a, e, u, n, c, i, f) {
    this.tag = 1, this.containerInfo = l, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Kc(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Kc(0), this.hiddenUpdates = Kc(null), this.identifierPrefix = e, this.onUncaughtError = u, this.onCaughtError = n, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = f, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Xd(l, t, a, e, u, n, c, i, f, v, g, b) {
    return l = new wy(
      l,
      t,
      a,
      c,
      f,
      v,
      g,
      b,
      i
    ), t = 1, n === !0 && (t |= 24), n = nt(3, null, null, t), l.current = n, n.stateNode = l, t = Ai(), t.refCount++, l.pooledCache = t, t.refCount++, n.memoizedState = {
      element: e,
      isDehydrated: a,
      cache: t
    }, Ui(n), l;
  }
  function jd(l) {
    return l ? (l = qe, l) : qe;
  }
  function Qd(l, t, a, e, u, n) {
    u = jd(u), e.context === null ? e.context = u : e.pendingContext = u, e = Ha(t), e.payload = { element: a }, n = n === void 0 ? null : n, n !== null && (e.callback = n), a = qa(l, e, t), a !== null && (mt(a, l, t), pu(a, l, t));
  }
  function Zd(l, t) {
    if (l = l.memoizedState, l !== null && l.dehydrated !== null) {
      var a = l.retryLane;
      l.retryLane = a !== 0 && a < t ? a : t;
    }
  }
  function rm(l, t) {
    Zd(l, t), (l = l.alternate) && Zd(l, t);
  }
  function Vd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = ae(l, 67108864);
      t !== null && mt(t, l, 67108864), rm(l, 67108864);
    }
  }
  function xd(l) {
    if (l.tag === 13 || l.tag === 31) {
      var t = Nt();
      t = Jc(t);
      var a = ae(l, t);
      a !== null && mt(a, l, t), rm(l, t);
    }
  }
  var mu = !0;
  function Wy(l, t, a, e) {
    var u = U.T;
    U.T = null;
    var n = X.p;
    try {
      X.p = 2, vm(l, t, a, e);
    } finally {
      X.p = n, U.T = u;
    }
  }
  function Fy(l, t, a, e) {
    var u = U.T;
    U.T = null;
    var n = X.p;
    try {
      X.p = 8, vm(l, t, a, e);
    } finally {
      X.p = n, U.T = u;
    }
  }
  function vm(l, t, a, e) {
    if (mu) {
      var u = ym(e);
      if (u === null)
        Ff(
          l,
          t,
          e,
          Rc,
          a
        ), Kd(l, e);
      else if (ky(
        u,
        l,
        t,
        a,
        e
      ))
        e.stopPropagation();
      else if (Kd(l, e), t & 4 && -1 < $y.indexOf(l)) {
        for (; u !== null; ) {
          var n = ze(u);
          if (n !== null)
            switch (n.tag) {
              case 3:
                if (n = n.stateNode, n.current.memoizedState.isDehydrated) {
                  var c = ka(n.pendingLanes);
                  if (c !== 0) {
                    var i = n;
                    for (i.pendingLanes |= 2, i.entangledLanes |= 2; c; ) {
                      var f = 1 << 31 - gt(c);
                      i.entanglements[1] |= f, c &= ~f;
                    }
                    na(n), (al & 6) === 0 && (hc = yt() + 500, Wu(0));
                  }
                }
                break;
              case 31:
              case 13:
                i = ae(n, 2), i !== null && mt(i, n, 2), Sc(), rm(n, 2);
            }
          if (n = ym(e), n === null && Ff(
            l,
            t,
            e,
            Rc,
            a
          ), n === u) break;
          u = n;
        }
        u !== null && e.stopPropagation();
      } else
        Ff(
          l,
          t,
          e,
          null,
          a
        );
    }
  }
  function ym(l) {
    return l = Pc(l), hm(l);
  }
  var Rc = null;
  function hm(l) {
    if (Rc = null, l = Ia(l), l !== null) {
      var t = dt(l);
      if (t === null) l = null;
      else {
        var a = t.tag;
        if (a === 13) {
          if (l = Dt(t), l !== null) return l;
          l = null;
        } else if (a === 31) {
          if (l = rt(t), l !== null) return l;
          l = null;
        } else if (a === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          l = null;
        } else t !== l && (l = null);
      }
    }
    return Rc = l, null;
  }
  function Ld(l) {
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
        switch (fr()) {
          case Mm:
            return 2;
          case Cm:
            return 8;
          case sn:
          case mr:
            return 32;
          case Um:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var gm = !1, Ja = null, wa = null, Wa = null, an = /* @__PURE__ */ new Map(), en = /* @__PURE__ */ new Map(), Fa = [], $y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Kd(l, t) {
    switch (l) {
      case "focusin":
      case "focusout":
        Ja = null;
        break;
      case "dragenter":
      case "dragleave":
        wa = null;
        break;
      case "mouseover":
      case "mouseout":
        Wa = null;
        break;
      case "pointerover":
      case "pointerout":
        an.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        en.delete(t.pointerId);
    }
  }
  function un(l, t, a, e, u, n) {
    return l === null || l.nativeEvent !== n ? (l = {
      blockedOn: t,
      domEventName: a,
      eventSystemFlags: e,
      nativeEvent: n,
      targetContainers: [u]
    }, t !== null && (t = ze(t), t !== null && Vd(t)), l) : (l.eventSystemFlags |= e, t = l.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), l);
  }
  function ky(l, t, a, e, u) {
    switch (t) {
      case "focusin":
        return Ja = un(
          Ja,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "dragenter":
        return wa = un(
          wa,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "mouseover":
        return Wa = un(
          Wa,
          l,
          t,
          a,
          e,
          u
        ), !0;
      case "pointerover":
        var n = u.pointerId;
        return an.set(
          n,
          un(
            an.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
      case "gotpointercapture":
        return n = u.pointerId, en.set(
          n,
          un(
            en.get(n) || null,
            l,
            t,
            a,
            e,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Jd(l) {
    var t = Ia(l.target);
    if (t !== null) {
      var a = dt(t);
      if (a !== null) {
        if (t = a.tag, t === 13) {
          if (t = Dt(a), t !== null) {
            l.blockedOn = t, Gm(l.priority, function() {
              xd(a);
            });
            return;
          }
        } else if (t === 31) {
          if (t = rt(a), t !== null) {
            l.blockedOn = t, Gm(l.priority, function() {
              xd(a);
            });
            return;
          }
        } else if (t === 3 && a.stateNode.current.memoizedState.isDehydrated) {
          l.blockedOn = a.tag === 3 ? a.stateNode.containerInfo : null;
          return;
        }
      }
    }
    l.blockedOn = null;
  }
  function pc(l) {
    if (l.blockedOn !== null) return !1;
    for (var t = l.targetContainers; 0 < t.length; ) {
      var a = ym(l.nativeEvent);
      if (a === null) {
        a = l.nativeEvent;
        var e = new a.constructor(
          a.type,
          a
        );
        Ic = e, a.target.dispatchEvent(e), Ic = null;
      } else
        return t = ze(a), t !== null && Vd(t), l.blockedOn = a, !1;
      t.shift();
    }
    return !0;
  }
  function wd(l, t, a) {
    pc(l) && a.delete(t);
  }
  function Iy() {
    gm = !1, Ja !== null && pc(Ja) && (Ja = null), wa !== null && pc(wa) && (wa = null), Wa !== null && pc(Wa) && (Wa = null), an.forEach(wd), en.forEach(wd);
  }
  function Hc(l, t) {
    l.blockedOn === t && (l.blockedOn = null, gm || (gm = !0, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      Iy
    )));
  }
  var qc = null;
  function Wd(l) {
    qc !== l && (qc = l, A.unstable_scheduleCallback(
      A.unstable_NormalPriority,
      function() {
        qc === l && (qc = null);
        for (var t = 0; t < l.length; t += 3) {
          var a = l[t], e = l[t + 1], u = l[t + 2];
          if (typeof e != "function") {
            if (hm(e || a) === null)
              continue;
            break;
          }
          var n = ze(a);
          n !== null && (l.splice(t, 3), t -= 3, ki(
            n,
            {
              pending: !0,
              data: u,
              method: a.method,
              action: e
            },
            e,
            u
          ));
        }
      }
    ));
  }
  function su(l) {
    function t(f) {
      return Hc(f, l);
    }
    Ja !== null && Hc(Ja, l), wa !== null && Hc(wa, l), Wa !== null && Hc(Wa, l), an.forEach(t), en.forEach(t);
    for (var a = 0; a < Fa.length; a++) {
      var e = Fa[a];
      e.blockedOn === l && (e.blockedOn = null);
    }
    for (; 0 < Fa.length && (a = Fa[0], a.blockedOn === null); )
      Jd(a), a.blockedOn === null && Fa.shift();
    if (a = (l.ownerDocument || l).$$reactFormReplay, a != null)
      for (e = 0; e < a.length; e += 3) {
        var u = a[e], n = a[e + 1], c = u[ut] || null;
        if (typeof n == "function")
          c || Wd(a);
        else if (c) {
          var i = null;
          if (n && n.hasAttribute("formAction")) {
            if (u = n, c = n[ut] || null)
              i = c.formAction;
            else if (hm(u) !== null) continue;
          } else i = c.action;
          typeof i == "function" ? a[e + 1] = i : (a.splice(e, 3), e -= 3), Wd(a);
        }
      }
  }
  function Fd() {
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
      u !== null && (u(), u = null), e || setTimeout(a, 20);
    }
    function a() {
      if (!e && !navigation.transition) {
        var n = navigation.currentEntry;
        n && n.url != null && navigation.navigate(n.url, {
          state: n.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var e = !1, u = null;
      return navigation.addEventListener("navigate", l), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(a, 100), function() {
        e = !0, navigation.removeEventListener("navigate", l), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function Em(l) {
    this._internalRoot = l;
  }
  Yc.prototype.render = Em.prototype.render = function(l) {
    var t = this._internalRoot;
    if (t === null) throw Error(E(409));
    var a = t.current, e = Nt();
    Qd(a, e, l, t, null, null);
  }, Yc.prototype.unmount = Em.prototype.unmount = function() {
    var l = this._internalRoot;
    if (l !== null) {
      this._internalRoot = null;
      var t = l.containerInfo;
      Qd(l.current, 2, null, l, null, null), Sc(), t[_e] = null;
    }
  };
  function Yc(l) {
    this._internalRoot = l;
  }
  Yc.prototype.unstable_scheduleHydration = function(l) {
    if (l) {
      var t = Bm();
      l = { blockedOn: null, target: l, priority: t };
      for (var a = 0; a < Fa.length && t !== 0 && t < Fa[a].priority; a++) ;
      Fa.splice(a, 0, l), a === 0 && Jd(l);
    }
  };
  var $d = gl.version;
  if ($d !== "19.3.0")
    throw Error(
      E(
        527,
        $d,
        "19.3.0"
      )
    );
  X.findDOMNode = function(l) {
    var t = l._reactInternals;
    if (t === void 0)
      throw typeof l.render == "function" ? Error(E(188)) : (l = Object.keys(l).join(","), Error(E(268, l)));
    return l = pl(t), l = l !== null ? q(l) : null, l = l === null ? null : l.stateNode, l;
  };
  var Py = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: U,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Bc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Bc.isDisabled && Bc.supportsFiber)
      try {
        du = Bc.inject(
          Py
        ), ht = Bc;
      } catch {
      }
  }
  return nn.createRoot = function(l, t) {
    if (!ot(l)) throw Error(E(299));
    var a = !1, e = "", u = jo, n = Qo, c = Zo;
    return t != null && (t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (e = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (n = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Xd(
      l,
      1,
      !1,
      null,
      null,
      a,
      e,
      null,
      u,
      n,
      c,
      Fd
    ), l[_e] = t.current, Wf(l), new Em(t);
  }, nn.hydrateRoot = function(l, t, a) {
    if (!ot(l)) throw Error(E(299));
    var e = !1, u = "", n = jo, c = Qo, i = Zo, f = null;
    return a != null && (a.unstable_strictMode === !0 && (e = !0), a.identifierPrefix !== void 0 && (u = a.identifierPrefix), a.onUncaughtError !== void 0 && (n = a.onUncaughtError), a.onCaughtError !== void 0 && (c = a.onCaughtError), a.onRecoverableError !== void 0 && (i = a.onRecoverableError), a.formState !== void 0 && (f = a.formState)), t = Xd(
      l,
      1,
      !0,
      t,
      a ?? null,
      e,
      u,
      f,
      n,
      c,
      i,
      Fd
    ), t.context = jd(null), a = t.current, e = Nt(), e = Jc(e), u = Ha(e), u.callback = null, qa(a, u, e), a = e, t.current.lanes = a, vu(t, a), na(t), l[_e] = t.current, Wf(l), new Yc(t);
  }, nn.version = "19.3.0", nn;
}
var ur;
function f1() {
  if (ur) return Tm.exports;
  ur = 1;
  function A() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(A);
      } catch (gl) {
        console.error(gl);
      }
  }
  return A(), Tm.exports = i1(), Tm.exports;
}
var m1 = f1();
function Nm(A) {
  return A.split(/\s+/).filter(Boolean).slice(0, 2).map((gl) => gl[0]).join("").toUpperCase();
}
function s1({ name: A, count: gl, usersUrl: ol, createUrl: E, permissionUrl: ot, impersonateUrl: dt, logoutUrl: Dt, csrfToken: rt, canManageAdmins: Tl, canAddAdmins: pl }) {
  const [q, S] = At.useState([]), [H, Nl] = At.useState(!0), [Yl, bl] = At.useState(""), [fl, Bl] = At.useState(!1), [Hl, Jt] = At.useState(!1), [vt, et] = At.useState(""), [$l, V] = At.useState(""), [F, Zl] = At.useState(null), [Al, Il] = At.useState(null), [Dl, Xt] = At.useState({ can_manage_admins: !1, can_add_admins: !1 }), jt = Number(Gt?.dataset.currentUserId), El = At.useCallback(async (O) => {
    Nl(!0), bl("");
    try {
      const L = await fetch(ol, {
        headers: { Accept: "application/json" },
        credentials: "same-origin",
        signal: O
      });
      if (L.status === 401) {
        window.location.assign("/admin/login");
        return;
      }
      const dl = await L.json();
      if (!L.ok)
        throw new Error(dl.message || "We couldn't load admin accounts.");
      S(dl.data);
    } catch (L) {
      if (L instanceof Error && L.name === "AbortError") return;
      bl(L instanceof Error ? L.message : "We couldn't load admin accounts.");
    } finally {
      O.aborted || Nl(!1);
    }
  }, [ol]);
  At.useEffect(() => {
    const O = new AbortController();
    return El(O.signal), () => O.abort();
  }, [El]);
  function N(O) {
    if (F === O.id) {
      Zl(null);
      return;
    }
    bl(""), Zl(O.id), Xt({
      can_manage_admins: O.can_manage_admins,
      can_add_admins: O.can_add_admins
    });
  }
  function Y(O) {
    Xt((L) => ({ ...L, [O]: !L[O] }));
  }
  async function G(O) {
    const L = {};
    if (Dl.can_manage_admins !== O.can_manage_admins && (L.can_manage_admins = Dl.can_manage_admins), Dl.can_add_admins !== O.can_add_admins && (L.can_add_admins = Dl.can_add_admins), Object.keys(L).length === 0) {
      Zl(null);
      return;
    }
    Il(O.id), bl("");
    try {
      const dl = await fetch(ot.replace("__ADMIN_ID__", String(O.id)), {
        method: "PATCH",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": rt
        },
        credentials: "same-origin",
        body: JSON.stringify(L)
      }), o = await dl.json();
      if (!dl.ok) {
        const _ = o.errors ? Object.values(o.errors).flat().join(" ") : "";
        throw new Error(_ || o.message || "We couldn't update this admin's permissions.");
      }
      S((_) => _.map((C) => C.id === O.id ? o.data : C)), Zl(null);
    } catch (dl) {
      bl(dl instanceof Error ? dl.message : "We couldn't update this admin's permissions.");
    } finally {
      Il(null);
    }
  }
  async function ul(O) {
    Zl(null), bl("");
    try {
      const L = await fetch(dt.replace("__ADMIN_ID__", String(O.id)), {
        method: "POST",
        headers: {
          Accept: "application/json",
          "X-CSRF-TOKEN": rt
        },
        credentials: "same-origin"
      }), dl = await L.json().catch(() => ({}));
      if (!L.ok)
        throw new Error(dl.message || "We couldn't start impersonating this admin.");
      window.location.assign(dl.redirect || "/admin");
    } catch (L) {
      bl(L instanceof Error ? L.message : "We couldn't start impersonating this admin.");
    }
  }
  async function I(O) {
    O.preventDefault(), Jt(!0), et(""), V("");
    const L = O.currentTarget, dl = new FormData(L);
    try {
      const o = await fetch(E, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          "X-CSRF-TOKEN": rt
        },
        credentials: "same-origin",
        body: JSON.stringify({
          name: dl.get("name"),
          email: dl.get("email"),
          password: dl.get("password"),
          password_confirmation: dl.get("password_confirmation"),
          can_manage_admins: dl.get("can_manage_admins") === "on",
          can_add_admins: dl.get("can_add_admins") === "on"
        })
      }), _ = await o.json();
      if (!o.ok) {
        const C = _.errors ? Object.values(_.errors).flat().join(" ") : "";
        throw new Error(C || _.message || "We couldn't create this admin account.");
      }
      L.reset(), V(`${_.data.name} was added as an admin.`), await El(new AbortController().signal), window.setTimeout(() => Bl(!1), 900);
    } catch (o) {
      et(o instanceof Error ? o.message : "We couldn't create this admin account.");
    } finally {
      Jt(!1);
    }
  }
  return /* @__PURE__ */ m.createElement("main", { className: "admin-shell" }, /* @__PURE__ */ m.createElement("aside", { className: "admin-sidebar" }, /* @__PURE__ */ m.createElement("a", { className: "admin-sidebar__brand", href: "/admin", "aria-label": "Synvanta Admin home" }, /* @__PURE__ */ m.createElement("span", { className: "admin-sidebar__brand-icon" }, /* @__PURE__ */ m.createElement(o1, null)), /* @__PURE__ */ m.createElement("span", null, "synvanta", /* @__PURE__ */ m.createElement("span", { className: "admin-sidebar__brand-dot" }, "."), /* @__PURE__ */ m.createElement("small", null, "ADMIN CONSOLE"))), /* @__PURE__ */ m.createElement("div", { className: "admin-sidebar__workspace" }, /* @__PURE__ */ m.createElement("span", { className: "admin-sidebar__workspace-icon" }, "S"), /* @__PURE__ */ m.createElement("span", null, /* @__PURE__ */ m.createElement("strong", null, "Synvanta Systems"), /* @__PURE__ */ m.createElement("small", null, "Workspace")), /* @__PURE__ */ m.createElement("span", { className: "admin-sidebar__chevron" }, "⌄")), /* @__PURE__ */ m.createElement("p", { className: "admin-sidebar__label" }, "WORKSPACE"), /* @__PURE__ */ m.createElement("nav", { className: "admin-sidebar__nav", "aria-label": "Admin navigation" }, /* @__PURE__ */ m.createElement("a", { href: "/admin", className: "admin-nav-link" }, /* @__PURE__ */ m.createElement(st, { name: "grid" }), "Overview"), /* @__PURE__ */ m.createElement("a", { href: "/admin/demo-requests", className: "admin-nav-link" }, /* @__PURE__ */ m.createElement(st, { name: "inbox" }), "Demo requests"), Tl && /* @__PURE__ */ m.createElement("a", { href: "/admin/admins", className: "admin-nav-link admin-nav-link--active", "aria-current": "page" }, /* @__PURE__ */ m.createElement(st, { name: "users" }), "Admins", /* @__PURE__ */ m.createElement("span", { className: "admin-nav-link__count" }, gl)), /* @__PURE__ */ m.createElement("span", { className: "admin-nav-link admin-nav-link--muted", "aria-disabled": "true" }, /* @__PURE__ */ m.createElement(st, { name: "box" }), "Demo systems", /* @__PURE__ */ m.createElement("span", { className: "admin-nav-link__soon" }, "SOON"))), /* @__PURE__ */ m.createElement("div", { className: "admin-sidebar__bottom" }, /* @__PURE__ */ m.createElement("div", { className: "admin-sidebar__help" }, /* @__PURE__ */ m.createElement("span", { className: "admin-sidebar__help-icon" }, "✳"), /* @__PURE__ */ m.createElement("strong", null, "Need a hand?"), /* @__PURE__ */ m.createElement("p", null, "Get help with your admin workspace."), /* @__PURE__ */ m.createElement("a", { href: "mailto:support@synvata.com" }, "Contact support ", /* @__PURE__ */ m.createElement(st, { name: "arrow" }))), /* @__PURE__ */ m.createElement("div", { className: "admin-sidebar__profile" }, /* @__PURE__ */ m.createElement("span", { className: "admin-avatar admin-avatar--profile" }, Nm(A)), /* @__PURE__ */ m.createElement("span", { className: "admin-sidebar__profile-copy" }, /* @__PURE__ */ m.createElement("strong", null, A), /* @__PURE__ */ m.createElement("small", null, "Administrator")), /* @__PURE__ */ m.createElement(st, { name: "settings" })))), /* @__PURE__ */ m.createElement("section", { className: "admin-main" }, /* @__PURE__ */ m.createElement("header", { className: "admin-topbar" }, /* @__PURE__ */ m.createElement("div", { className: "admin-breadcrumb" }, /* @__PURE__ */ m.createElement("span", null, "Workspace"), /* @__PURE__ */ m.createElement("b", null, "/"), /* @__PURE__ */ m.createElement("strong", null, "Admins")), /* @__PURE__ */ m.createElement("div", { className: "admin-topbar__actions" }, /* @__PURE__ */ m.createElement("span", { className: "admin-topbar__secure" }, /* @__PURE__ */ m.createElement("i", null), " Secure workspace"), /* @__PURE__ */ m.createElement("span", { className: "admin-avatar" }, Nm(A)), /* @__PURE__ */ m.createElement("form", { method: "post", action: Dt }, /* @__PURE__ */ m.createElement("input", { type: "hidden", name: "_token", value: rt }), /* @__PURE__ */ m.createElement("button", { className: "admin-signout", type: "submit" }, "Sign out")))), /* @__PURE__ */ m.createElement("div", { className: "admin-content" }, /* @__PURE__ */ m.createElement("section", { className: "admin-page-heading admin-users-heading" }, /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement("p", { className: "admin-eyebrow" }, "WORKSPACE ACCESS"), /* @__PURE__ */ m.createElement("h1", null, "Admin users", /* @__PURE__ */ m.createElement("span", null, ".")), /* @__PURE__ */ m.createElement("p", null, "Manage who can access the Synvanta admin workspace.")), pl && /* @__PURE__ */ m.createElement("button", { className: "admin-users-add", type: "button", onClick: () => {
    et(""), V(""), Bl(!0);
  } }, /* @__PURE__ */ m.createElement("span", { "aria-hidden": "true" }, "+"), " Add admin")), /* @__PURE__ */ m.createElement("section", { className: "admin-users-summary" }, /* @__PURE__ */ m.createElement("span", { className: "admin-users-summary__icon" }, /* @__PURE__ */ m.createElement(st, { name: "users" })), /* @__PURE__ */ m.createElement("span", null, /* @__PURE__ */ m.createElement("strong", null, Number(gl).toLocaleString()), /* @__PURE__ */ m.createElement("small", null, "Admin accounts")), /* @__PURE__ */ m.createElement("span", { className: "admin-users-summary__note" }, /* @__PURE__ */ m.createElement("i", null), " Only admins with permission can manage this list.")), /* @__PURE__ */ m.createElement("section", { className: "admin-requests-card admin-users-card" }, /* @__PURE__ */ m.createElement("header", { className: "admin-requests-card__header" }, /* @__PURE__ */ m.createElement("div", null, /* @__PURE__ */ m.createElement("h2", null, "Workspace administrators ", /* @__PURE__ */ m.createElement("span", null, q.length)), /* @__PURE__ */ m.createElement("p", null, "People with access to demo requests and workspace administration."))), /* @__PURE__ */ m.createElement("div", { className: "admin-table-wrap" }, /* @__PURE__ */ m.createElement("table", { className: "admin-table admin-users-table" }, /* @__PURE__ */ m.createElement("thead", null, /* @__PURE__ */ m.createElement("tr", null, /* @__PURE__ */ m.createElement("th", { scope: "col" }, "ADMIN"), /* @__PURE__ */ m.createElement("th", { scope: "col" }, "ROLE"), /* @__PURE__ */ m.createElement("th", { scope: "col" }, "DATE ADDED"), /* @__PURE__ */ m.createElement("th", { scope: "col" }, "ACTIONS"))), /* @__PURE__ */ m.createElement("tbody", null, !H && !Yl && q.map((O, L) => /* @__PURE__ */ m.createElement("tr", { key: O.id }, /* @__PURE__ */ m.createElement("td", null, /* @__PURE__ */ m.createElement("div", { className: "admin-contact" }, /* @__PURE__ */ m.createElement("span", { className: `admin-avatar admin-avatar--${L % 5}` }, Nm(O.name)), /* @__PURE__ */ m.createElement("span", null, /* @__PURE__ */ m.createElement("strong", null, O.name), /* @__PURE__ */ m.createElement("a", { href: `mailto:${O.email}` }, O.email)))), /* @__PURE__ */ m.createElement("td", null, /* @__PURE__ */ m.createElement("span", { className: "admin-users-role" }, /* @__PURE__ */ m.createElement("i", null), " Administrator"), /* @__PURE__ */ m.createElement("span", { className: `admin-users-access ${O.can_manage_admins ? "admin-users-access--enabled" : ""}` }, O.can_manage_admins ? "Admin-page access" : "No admin-page access"), /* @__PURE__ */ m.createElement("span", { className: `admin-users-access ${O.can_add_admins ? "admin-users-access--enabled" : ""}` }, O.can_add_admins ? "Can add admins" : "Cannot add admins")), /* @__PURE__ */ m.createElement("td", null, /* @__PURE__ */ m.createElement("span", { className: "admin-date" }, /* @__PURE__ */ m.createElement(st, { name: "calendar" }), new Intl.DateTimeFormat(void 0, { month: "short", day: "numeric", year: "numeric" }).format(new Date(O.created_at)))), /* @__PURE__ */ m.createElement("td", { className: "admin-users-actions-cell" }, /* @__PURE__ */ m.createElement("div", { className: "admin-users-actions" }, O.id !== jt && /* @__PURE__ */ m.createElement(
    "button",
    {
      className: "admin-users-impersonate",
      type: "button",
      "aria-label": `Sign in as ${O.name}`,
      title: `Sign in as ${O.name}`,
      disabled: Al === O.id,
      onClick: () => ul(O)
    },
    /* @__PURE__ */ m.createElement(st, { name: "enter" })
  ), /* @__PURE__ */ m.createElement(
    "button",
    {
      className: "admin-users-menu-trigger",
      type: "button",
      "aria-label": `Permissions for ${O.name}`,
      "aria-haspopup": "true",
      "aria-expanded": F === O.id,
      disabled: Al === O.id,
      onClick: () => N(O)
    },
    /* @__PURE__ */ m.createElement(st, { name: "more" })
  )), F === O.id && /* @__PURE__ */ m.createElement("div", { className: "admin-users-menu admin-users-menu--permissions", "aria-label": `Permissions for ${O.name}` }, /* @__PURE__ */ m.createElement("p", { className: "admin-users-menu-title" }, "PERMISSIONS"), /* @__PURE__ */ m.createElement("label", { className: "admin-users-menu-permission" }, /* @__PURE__ */ m.createElement(
    "input",
    {
      type: "checkbox",
      checked: Dl.can_manage_admins,
      disabled: Al === O.id || O.id === jt,
      onChange: () => Y("can_manage_admins")
    }
  ), /* @__PURE__ */ m.createElement("span", null, /* @__PURE__ */ m.createElement("strong", null, "Admins page access"), /* @__PURE__ */ m.createElement("small", null, "View and manage this admin list."))), /* @__PURE__ */ m.createElement("label", { className: "admin-users-menu-permission" }, /* @__PURE__ */ m.createElement(
    "input",
    {
      type: "checkbox",
      checked: Dl.can_add_admins,
      disabled: Al === O.id,
      onChange: () => Y("can_add_admins")
    }
  ), /* @__PURE__ */ m.createElement("span", null, /* @__PURE__ */ m.createElement("strong", null, "Add admin"), /* @__PURE__ */ m.createElement("small", null, "Create new admin accounts."))), O.id === jt && O.can_manage_admins && /* @__PURE__ */ m.createElement("p", { className: "admin-users-menu-note" }, "You can’t remove your own admin-page access."), /* @__PURE__ */ m.createElement("div", { className: "admin-users-menu-actions" }, /* @__PURE__ */ m.createElement("button", { type: "button", disabled: Al === O.id, onClick: () => Zl(null) }, "Cancel"), /* @__PURE__ */ m.createElement("button", { type: "button", disabled: Al === O.id, onClick: () => G(O) }, Al === O.id ? "Saving…" : "Save")))))))), H && /* @__PURE__ */ m.createElement("div", { className: "admin-state" }, /* @__PURE__ */ m.createElement("span", { className: "admin-spinner" }), "Loading admin accounts…"), !H && Yl && /* @__PURE__ */ m.createElement("div", { className: "admin-state admin-state--error" }, /* @__PURE__ */ m.createElement("strong", null, "Couldn't load admin accounts."), /* @__PURE__ */ m.createElement("span", null, Yl), /* @__PURE__ */ m.createElement("button", { type: "button", onClick: () => El(new AbortController().signal) }, "Try again")), !H && !Yl && q.length === 0 && /* @__PURE__ */ m.createElement("div", { className: "admin-state" }, /* @__PURE__ */ m.createElement("span", { className: "admin-state__icon" }, "⌕"), /* @__PURE__ */ m.createElement("strong", null, "No admin accounts found.")))), /* @__PURE__ */ m.createElement("footer", { className: "admin-content-footer" }, /* @__PURE__ */ m.createElement("span", null, "© ", (/* @__PURE__ */ new Date()).getFullYear(), " Synvanta Systems"), /* @__PURE__ */ m.createElement("span", null, "INTELLIGENT SYSTEMS. CONNECTED BUSINESSES.")))), fl && /* @__PURE__ */ m.createElement("div", { className: "admin-detail-backdrop admin-users-backdrop", onMouseDown: (O) => {
    O.target === O.currentTarget && !Hl && Bl(!1);
  } }, /* @__PURE__ */ m.createElement("section", { className: "admin-users-form-panel", role: "dialog", "aria-modal": "true", "aria-labelledby": "admin-create-title" }, /* @__PURE__ */ m.createElement("header", null, /* @__PURE__ */ m.createElement("span", null, "WORKSPACE ACCESS"), /* @__PURE__ */ m.createElement("button", { type: "button", "aria-label": "Close add admin form", disabled: Hl, onClick: () => Bl(!1) }, /* @__PURE__ */ m.createElement(st, { name: "close" }))), /* @__PURE__ */ m.createElement("div", { className: "admin-users-form-title" }, /* @__PURE__ */ m.createElement("span", { className: "admin-users-summary__icon" }, /* @__PURE__ */ m.createElement(st, { name: "users" })), /* @__PURE__ */ m.createElement("h2", { id: "admin-create-title" }, "Add an admin"), /* @__PURE__ */ m.createElement("p", null, "Create a new account with access to the admin workspace.")), /* @__PURE__ */ m.createElement("form", { className: "admin-users-form", onSubmit: I }, /* @__PURE__ */ m.createElement("label", null, "Full name", /* @__PURE__ */ m.createElement("input", { name: "name", type: "text", autoComplete: "name", maxLength: "120", placeholder: "e.g. Jordan Smith", required: !0 })), /* @__PURE__ */ m.createElement("label", null, "Email address", /* @__PURE__ */ m.createElement("input", { name: "email", type: "email", autoComplete: "email", maxLength: "254", placeholder: "name@company.com", required: !0 })), /* @__PURE__ */ m.createElement("label", null, "Password", /* @__PURE__ */ m.createElement("input", { name: "password", type: "password", autoComplete: "new-password", minLength: "12", placeholder: "At least 12 characters", required: !0 })), /* @__PURE__ */ m.createElement("label", null, "Confirm password", /* @__PURE__ */ m.createElement("input", { name: "password_confirmation", type: "password", autoComplete: "new-password", minLength: "12", placeholder: "Enter the password again", required: !0 })), /* @__PURE__ */ m.createElement("label", { className: "admin-users-form-check" }, /* @__PURE__ */ m.createElement("input", { name: "can_manage_admins", type: "checkbox" }), /* @__PURE__ */ m.createElement("span", null, /* @__PURE__ */ m.createElement("strong", null, "Admins page access"), /* @__PURE__ */ m.createElement("small", null, "Allow this admin to open the admins page."))), /* @__PURE__ */ m.createElement("label", { className: "admin-users-form-check" }, /* @__PURE__ */ m.createElement("input", { name: "can_add_admins", type: "checkbox" }), /* @__PURE__ */ m.createElement("span", null, /* @__PURE__ */ m.createElement("strong", null, "Can add admins"), /* @__PURE__ */ m.createElement("small", null, "Allow this admin to create new admins."))), vt && /* @__PURE__ */ m.createElement("p", { className: "admin-users-form-message admin-users-form-message--error", role: "alert" }, vt), $l && /* @__PURE__ */ m.createElement("p", { className: "admin-users-form-message admin-users-form-message--success", role: "status" }, $l), /* @__PURE__ */ m.createElement("p", { className: "admin-users-form-hint" }, /* @__PURE__ */ m.createElement(st, { name: "settings" }), " Passwords are securely hashed and never displayed after creation."), /* @__PURE__ */ m.createElement("div", { className: "admin-users-form-actions" }, /* @__PURE__ */ m.createElement("button", { type: "button", disabled: Hl, onClick: () => Bl(!1) }, "Cancel"), /* @__PURE__ */ m.createElement("button", { type: "submit", disabled: Hl }, Hl ? "Creating…" : "Create admin", " ", /* @__PURE__ */ m.createElement(st, { name: "arrow" })))))));
}
function st({ name: A }) {
  const gl = {
    grid: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("rect", { x: "3", y: "3", width: "5", height: "5", rx: "1" }), /* @__PURE__ */ m.createElement("rect", { x: "12", y: "3", width: "5", height: "5", rx: "1" }), /* @__PURE__ */ m.createElement("rect", { x: "3", y: "12", width: "5", height: "5", rx: "1" }), /* @__PURE__ */ m.createElement("rect", { x: "12", y: "12", width: "5", height: "5", rx: "1" })),
    inbox: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("rect", { x: "2.5", y: "3.5", width: "15", height: "13", rx: "2" }), /* @__PURE__ */ m.createElement("path", { d: "M3 11.5h4l1.5 2h2.8l1.5-2h3.2" })),
    box: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("path", { d: "m10 2.5 7 3.8v7.4l-7 3.8-7-3.8V6.3l7-3.8Z" }), /* @__PURE__ */ m.createElement("path", { d: "m3.3 6.5 6.7 3.7 6.7-3.7M10 10.2v7" })),
    settings: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("circle", { cx: "10", cy: "10", r: "3" }), /* @__PURE__ */ m.createElement("path", { d: "m8.3 2.8.4-1h2.6l.4 1 1.2.7 1-.3 1.3 2.3-.7.8v1.4l.7.8-1.3 2.3-1-.3-1.2.7-.4 1H8.7l-.4-1-1.2-.7-1 .3-1.3-2.3.7-.8V6.3l-.7-.8 1.3-2.3 1 .3 1.2-.7Z" })),
    users: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("path", { d: "M13.5 17v-1.5a3 3 0 0 0-3-3h-5a3 3 0 0 0-3 3V17" }), /* @__PURE__ */ m.createElement("circle", { cx: "8", cy: "6.5", r: "3" }), /* @__PURE__ */ m.createElement("path", { d: "M14 3.7a3 3 0 0 1 0 5.7M15.5 12.5a3 3 0 0 1 2 2.8V17" })),
    more: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("circle", { cx: "4", cy: "10", r: "1" }), /* @__PURE__ */ m.createElement("circle", { cx: "10", cy: "10", r: "1" }), /* @__PURE__ */ m.createElement("circle", { cx: "16", cy: "10", r: "1" })),
    shield: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("path", { d: "M10 2.5 16 5v4.5c0 3.7-2.5 6.2-6 8-3.5-1.8-6-4.3-6-8V5l6-2.5Z" }), /* @__PURE__ */ m.createElement("path", { d: "m7.5 10 1.7 1.7 3.5-3.5" })),
    shieldOff: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("path", { d: "M4 5 10 2.5 16 5v4.5c0 3.7-2.5 6.2-6 8a13 13 0 0 1-3.5-2.4" }), /* @__PURE__ */ m.createElement("path", { d: "m3 3 14 14" })),
    arrow: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("path", { d: "M4 10h12M11 5l5 5-5 5" })),
    enter: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("path", { d: "M11 4h3a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-3" }), /* @__PURE__ */ m.createElement("path", { d: "M4 10h9M9 6l4 4-4 4" })),
    close: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("path", { d: "m5 5 10 10M15 5 5 15" })),
    calendar: /* @__PURE__ */ m.createElement(m.Fragment, null, /* @__PURE__ */ m.createElement("rect", { x: "3", y: "4", width: "14", height: "13", rx: "2" }), /* @__PURE__ */ m.createElement("path", { d: "M6 2v4M14 2v4M3 8h14" }))
  };
  return /* @__PURE__ */ m.createElement("svg", { className: "admin-icon", viewBox: "0 0 20 20", fill: "none", stroke: "currentColor", strokeWidth: "1.4", strokeLinecap: "round", strokeLinejoin: "round", "aria-hidden": "true" }, gl[A] ?? gl.grid);
}
function o1() {
  return /* @__PURE__ */ m.createElement("img", { src: "/admin-assets/brand/brand-mark.png", alt: "" });
}
const Gt = document.getElementById("admin-users-root");
Gt && m1.createRoot(Gt).render(
  /* @__PURE__ */ m.createElement(
    s1,
    {
      name: Gt.dataset.name || "Administrator",
      count: Gt.dataset.count || "0",
      usersUrl: Gt.dataset.usersUrl,
      createUrl: Gt.dataset.createUrl,
      logoutUrl: Gt.dataset.logoutUrl,
      permissionUrl: Gt.dataset.permissionUrl,
      impersonateUrl: Gt.dataset.impersonateUrl,
      canManageAdmins: Gt.dataset.canManageAdmins === "true",
      canAddAdmins: Gt.dataset.canAddAdmins === "true",
      csrfToken: document.querySelector('meta[name="csrf-token"]')?.content ?? ""
    }
  )
);
