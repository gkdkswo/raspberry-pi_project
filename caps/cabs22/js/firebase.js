!function (e, t) { "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).firebase = t() }(this, function () { "use strict"; var i = function (e, t) { return (i = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function (e, t) { e.__proto__ = t } || function (e, t) { for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n]) })(e, t) }; var n = function () { return (n = Object.assign || function (e) { for (var t, n = 1, r = arguments.length; n < r; n++)for (var o in t = arguments[n]) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]); return e }).apply(this, arguments) }; function d(e, t) { if (!(t instanceof Object)) return t; switch (t.constructor) { case Date: return new Date(t.getTime()); case Object: void 0 === e && (e = {}); break; case Array: e = []; break; default: return t }for (var n in t) t.hasOwnProperty(n) && (e[n] = d(e[n], t[n])); return e } function r(e, t, n) { e[t] = n } var p = function (r) { function o(e, t) { var n = r.call(this, t) || this; return n.code = e, n.name = "FirebaseError", Object.setPrototypeOf(n, o.prototype), Error.captureStackTrace && Error.captureStackTrace(n, a.prototype.create), n } return function (e, t) { function n() { this.constructor = e } i(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n) }(o, r), o }(Error), a = function () { function e(e, t, n) { this.service = e, this.serviceName = t, this.errors = n } return e.prototype.create = function (e, t) { void 0 === t && (t = {}); for (var r, n = this.service + "/" + e, o = this.errors[e], i = o ? (r = t, o.replace(f, function (e, t) { var n = r[t]; return null != n ? n.toString() : "<" + t + "?>" })) : "Error", a = this.serviceName + ": " + i + " (" + n + ").", s = new p(n, a), c = 0, u = Object.keys(t); c < u.length; c++) { var l = u[c]; "_" !== l.slice(-1) && (l in s && console.warn('Overwriting FirebaseError base field "' + l + '" can cause unexpected behavior.'), s[l] = t[l]) } return s }, e }(); var f = /\{\$([^}]+)}/g; function o(e, t) { var n = new c(e, t); return n.subscribe.bind(n) } var s, e, c = function () { function e(e, t) { var n = this; this.observers = [], this.unsubscribes = [], this.observerCount = 0, this.task = Promise.resolve(), this.finalized = !1, this.onNoObservers = t, this.task.then(function () { e(n) }).catch(function (e) { n.error(e) }) } return e.prototype.next = function (t) { this.forEachObserver(function (e) { e.next(t) }) }, e.prototype.error = function (t) { this.forEachObserver(function (e) { e.error(t) }), this.close(t) }, e.prototype.complete = function () { this.forEachObserver(function (e) { e.complete() }), this.close() }, e.prototype.subscribe = function (e, t, n) { var r, o = this; if (void 0 === e && void 0 === t && void 0 === n) throw new Error("Missing Observer."); void 0 === (r = function (e, t) { if ("object" != typeof e || null === e) return !1; for (var n = 0, r = t; n < r.length; n++) { var o = r[n]; if (o in e && "function" == typeof e[o]) return !0 } return !1 }(e, ["next", "error", "complete"]) ? e : { next: e, error: t, complete: n }).next && (r.next = u), void 0 === r.error && (r.error = u), void 0 === r.complete && (r.complete = u); var i = this.unsubscribeOne.bind(this, this.observers.length); return this.finalized && this.task.then(function () { try { o.finalError ? r.error(o.finalError) : r.complete() } catch (e) { } }), this.observers.push(r), i }, e.prototype.unsubscribeOne = function (e) { void 0 !== this.observers && void 0 !== this.observers[e] && (delete this.observers[e], this.observerCount -= 1, 0 === this.observerCount && void 0 !== this.onNoObservers && this.onNoObservers(this)) }, e.prototype.forEachObserver = function (e) { if (!this.finalized) for (var t = 0; t < this.observers.length; t++)this.sendOne(t, e) }, e.prototype.sendOne = function (e, t) { var n = this; this.task.then(function () { if (void 0 !== n.observers && void 0 !== n.observers[e]) try { t(n.observers[e]) } catch (e) { "undefined" != typeof console && console.error && console.error(e) } }) }, e.prototype.close = function (e) { var t = this; this.finalized || (this.finalized = !0, void 0 !== e && (this.finalError = e), this.task.then(function () { t.observers = void 0, t.onNoObservers = void 0 })) }, e }(); function u() { } (e = s || (s = {}))[e.DEBUG = 0] = "DEBUG", e[e.VERBOSE = 1] = "VERBOSE", e[e.INFO = 2] = "INFO", e[e.WARN = 3] = "WARN", e[e.ERROR = 4] = "ERROR", e[e.SILENT = 5] = "SILENT"; var t, l = s.INFO, h = function (e, t) { for (var n = [], r = 2; r < arguments.length; r++)n[r - 2] = arguments[r]; if (!(t < e.logLevel)) { var o = (new Date).toISOString(); switch (t) { case s.DEBUG: case s.VERBOSE: console.log.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n)); break; case s.INFO: console.info.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n)); break; case s.WARN: console.warn.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n)); break; case s.ERROR: console.error.apply(console, ["[" + o + "]  " + e.name + ":"].concat(n)); break; default: throw new Error("Attempted to log a message with an invalid logType (value: " + t + ")") } } }, v = function () { function e(e) { this.name = e, this._logLevel = l, this._logHandler = h } return Object.defineProperty(e.prototype, "logLevel", { get: function () { return this._logLevel }, set: function (e) { if (!(e in s)) throw new TypeError("Invalid value assigned to `logLevel`"); this._logLevel = e }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "logHandler", { get: function () { return this._logHandler }, set: function (e) { if ("function" != typeof e) throw new TypeError("Value assigned to `logHandler` must be a function"); this._logHandler = e }, enumerable: !0, configurable: !0 }), e.prototype.debug = function () { for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; this._logHandler.apply(this, [this, s.DEBUG].concat(e)) }, e.prototype.log = function () { for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; this._logHandler.apply(this, [this, s.VERBOSE].concat(e)) }, e.prototype.info = function () { for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; this._logHandler.apply(this, [this, s.INFO].concat(e)) }, e.prototype.warn = function () { for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; this._logHandler.apply(this, [this, s.WARN].concat(e)) }, e.prototype.error = function () { for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; this._logHandler.apply(this, [this, s.ERROR].concat(e)) }, e }(), b = ((t = {})["no-app"] = "No Firebase App '{$name}' has been created - call Firebase App.initializeApp()", t["bad-app-name"] = "Illegal App name: '{$name}", t["duplicate-app"] = "Firebase App named '{$name}' already exists", t["app-deleted"] = "Firebase App named '{$name}' already deleted", t["duplicate-service"] = "Firebase service named '{$name}' already registered", t["invalid-app-argument"] = "firebase.{$name}() takes either no argument or a Firebase App instance.", t), y = new a("app", "Firebase", b); function g(e, t) { throw y.create(e, t) } var m = "[DEFAULT]", E = [], _ = function () { function e(e, t, n) { this.firebase_ = n, this.isDeleted_ = !1, this.services_ = {}, this.name_ = t.name, this.automaticDataCollectionEnabled_ = t.automaticDataCollectionEnabled || !1, this.options_ = d(void 0, e), this.INTERNAL = { getUid: function () { return null }, getToken: function () { return Promise.resolve(null) }, addAuthTokenListener: function (e) { E.push(e), setTimeout(function () { return e(null) }, 0) }, removeAuthTokenListener: function (t) { E = E.filter(function (e) { return e !== t }) } } } return Object.defineProperty(e.prototype, "automaticDataCollectionEnabled", { get: function () { return this.checkDestroyed_(), this.automaticDataCollectionEnabled_ }, set: function (e) { this.checkDestroyed_(), this.automaticDataCollectionEnabled_ = e }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "name", { get: function () { return this.checkDestroyed_(), this.name_ }, enumerable: !0, configurable: !0 }), Object.defineProperty(e.prototype, "options", { get: function () { return this.checkDestroyed_(), this.options_ }, enumerable: !0, configurable: !0 }), e.prototype.delete = function () { var s = this; return new Promise(function (e) { s.checkDestroyed_(), e() }).then(function () { s.firebase_.INTERNAL.removeApp(s.name_); for (var e = [], t = 0, n = Object.keys(s.services_); t < n.length; t++)for (var r = n[t], o = 0, i = Object.keys(s.services_[r]); o < i.length; o++) { var a = i[o]; e.push(s.services_[r][a]) } return Promise.all(e.map(function (e) { return e.INTERNAL.delete() })) }).then(function () { s.isDeleted_ = !0, s.services_ = {} }) }, e.prototype._getService = function (e, t) { if (void 0 === t && (t = m), this.checkDestroyed_(), this.services_[e] || (this.services_[e] = {}), !this.services_[e][t]) { var n = t !== m ? t : void 0, r = this.firebase_.INTERNAL.factories[e](this, this.extendApp.bind(this), n); this.services_[e][t] = r } return this.services_[e][t] }, e.prototype.extendApp = function (e) { var t = this; d(this, e), e.INTERNAL && e.INTERNAL.addAuthTokenListener && (E.forEach(function (e) { t.INTERNAL.addAuthTokenListener(e) }), E = []) }, e.prototype.checkDestroyed_ = function () { this.isDeleted_ && g("app-deleted", { name: this.name_ }) }, e }(); function O(e, t) { return Object.prototype.hasOwnProperty.call(e, t) } _.prototype.name && _.prototype.options || _.prototype.delete || console.log("dc"); var N = new v("@firebase/app"); if ("undefined" != typeof window && "firebase" in self) { N.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  "); var A = self.firebase.SDK_VERSION; A && 0 <= A.indexOf("LITE") && N.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ") } var w = function e() { var t = function (a) { var s = {}, c = {}, u = {}, l = { __esModule: !0, initializeApp: function (e, t) { if (void 0 === t && (t = {}), "object" != typeof t || null === t) { var n = t; t = { name: n } } var r = t; void 0 === r.name && (r.name = m); var o = r.name; "string" == typeof o && o || g("bad-app-name", { name: String(o) }), O(s, o) && g("duplicate-app", { name: o }); var i = new a(e, r, l); return h(s[o] = i, "create"), i }, app: p, apps: null, SDK_VERSION: "6.0.2", INTERNAL: { registerService: function (n, e, t, r, o) { function i(e) { return void 0 === e && (e = p()), "function" != typeof e[n] && g("invalid-app-argument", { name: n }), e[n]() } return void 0 === o && (o = !1), c[n] && g("duplicate-service", { name: n }), c[n] = e, r && (u[n] = r, f().forEach(function (e) { r("create", e) })), void 0 !== t && d(i, t), l[n] = i, a.prototype[n] = function () { for (var e = [], t = 0; t < arguments.length; t++)e[t] = arguments[t]; return this._getService.bind(this, n).apply(this, o ? e : []) }, i }, removeApp: function (e) { h(s[e], "delete"), delete s[e] }, factories: c, useAsService: i } }; function p(e) { return O(s, e = e || m) || g("no-app", { name: e }), s[e] } function f() { return Object.keys(s).map(function (e) { return s[e] }) } function h(e, t) { for (var n = 0, r = Object.keys(c); n < r.length; n++) { var o = i(0, r[n]); if (null === o) return; u[o] && u[o](t, e) } } function i(e, t) { return "serverAuth" === t ? null : t } return r(l, "default", l), Object.defineProperty(l, "apps", { get: f }), r(p, "App", a), l }(_); return t.INTERNAL = n({}, t.INTERNAL, { createFirebaseNamespace: e, extendNamespace: function (e) { d(t, e) }, createSubscribe: o, ErrorFactory: a, deepExtend: d }), t }(), k = w.initializeApp; return w.initializeApp = function () { return function () { try { return "[object process]" === Object.prototype.toString.call(global.process) } catch (e) { return !1 } }() && N.warn('\n      Warning: This is a browser-targeted Firebase bundle but it appears it is being\n      run in a Node environment.  If running in a Node environment, make sure you\n      are using the bundle specified by the "main" field in package.json.\n      \n      If you are using Webpack, you can specify "main" as the first item in\n      "resolve.mainFields":\n      https://webpack.js.org/configuration/resolve/#resolvemainfields\n      \n      If using Rollup, use the rollup-plugin-node-resolve plugin and set "module"\n      to false and "main" to true:\n      https://github.com/rollup/rollup-plugin-node-resolve\n      '), k.apply(void 0, arguments) }, w });
//# sourceMappingURL=firebase-app.js.map