'use strict'
;(() => {
    var $i = Object.create
    var Zn = Object.defineProperty
    var Ai = Object.getOwnPropertyDescriptor
    var Mi = Object.getOwnPropertyNames
    var Ci = Object.getPrototypeOf,
        Di = Object.prototype.hasOwnProperty
    var Ni = (C, _) => () => (_ || C((_ = { exports: {} }).exports, _), _.exports)
    var ji = (C, _, D, b) => {
        if ((_ && typeof _ == 'object') || typeof _ == 'function')
            for (let z of Mi(_))
                !Di.call(C, z) && z !== D && Zn(C, z, { get: () => _[z], enumerable: !(b = Ai(_, z)) || b.enumerable })
        return C
    }
    var Hi = (C, _, D) => (
        (D = C != null ? $i(Ci(C)) : {}),
        ji(_ || !C || !C.__esModule ? Zn(D, 'default', { value: C, enumerable: !0 }) : D, C)
    )
    var er = Ni(() => {
        'use strict'
        ;(function () {
            'use strict'
            function C(n, e) {
                var t = Object.keys(n)
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(n)
                    e &&
                        (r = r.filter(function (i) {
                            return Object.getOwnPropertyDescriptor(n, i).enumerable
                        })),
                        t.push.apply(t, r)
                }
                return t
            }
            function _(n) {
                for (var e = 1; e < arguments.length; e++) {
                    var t = arguments[e] != null ? arguments[e] : {}
                    e % 2
                        ? C(Object(t), !0).forEach(function (r) {
                              m(n, r, t[r])
                          })
                        : Object.getOwnPropertyDescriptors
                        ? Object.defineProperties(n, Object.getOwnPropertyDescriptors(t))
                        : C(Object(t)).forEach(function (r) {
                              Object.defineProperty(n, r, Object.getOwnPropertyDescriptor(t, r))
                          })
                }
                return n
            }
            function D(n) {
                return (
                    (D =
                        typeof Symbol == 'function' && typeof Symbol.iterator == 'symbol'
                            ? function (e) {
                                  return typeof e
                              }
                            : function (e) {
                                  return e &&
                                      typeof Symbol == 'function' &&
                                      e.constructor === Symbol &&
                                      e !== Symbol.prototype
                                      ? 'symbol'
                                      : typeof e
                              }),
                    D(n)
                )
            }
            function b(n, e) {
                if (!(n instanceof e)) throw new TypeError('Cannot call a class as a function')
            }
            function z(n, e) {
                for (var t = 0; t < e.length; t++) {
                    var r = e[t]
                    ;(r.enumerable = r.enumerable || !1),
                        (r.configurable = !0),
                        'value' in r && (r.writable = !0),
                        Object.defineProperty(n, r.key, r)
                }
            }
            function F(n, e, t) {
                return e && z(n.prototype, e), t && z(n, t), Object.defineProperty(n, 'prototype', { writable: !1 }), n
            }
            function m(n, e, t) {
                return (
                    e in n
                        ? Object.defineProperty(n, e, { value: t, enumerable: !0, configurable: !0, writable: !0 })
                        : (n[e] = t),
                    n
                )
            }
            function Qe(n, e) {
                if (typeof e != 'function' && e !== null)
                    throw new TypeError('Super expression must either be null or a function')
                ;(n.prototype = Object.create(e && e.prototype, {
                    constructor: { value: n, writable: !0, configurable: !0 },
                })),
                    Object.defineProperty(n, 'prototype', { writable: !1 }),
                    e && Le(n, e)
            }
            function te(n) {
                return (
                    (te = Object.setPrototypeOf
                        ? Object.getPrototypeOf.bind()
                        : function (e) {
                              return e.__proto__ || Object.getPrototypeOf(e)
                          }),
                    te(n)
                )
            }
            function Le(n, e) {
                return (
                    (Le = Object.setPrototypeOf
                        ? Object.setPrototypeOf.bind()
                        : function (t, r) {
                              return (t.__proto__ = r), t
                          }),
                    Le(n, e)
                )
            }
            function fe(n, e) {
                if (n == null) return {}
                var t,
                    r,
                    i = (function (s, u) {
                        if (s == null) return {}
                        var a,
                            c,
                            l = {},
                            d = Object.keys(s)
                        for (c = 0; c < d.length; c++) (a = d[c]), u.indexOf(a) >= 0 || (l[a] = s[a])
                        return l
                    })(n, e)
                if (Object.getOwnPropertySymbols) {
                    var o = Object.getOwnPropertySymbols(n)
                    for (r = 0; r < o.length; r++)
                        (t = o[r]),
                            e.indexOf(t) >= 0 || (Object.prototype.propertyIsEnumerable.call(n, t) && (i[t] = n[t]))
                }
                return i
            }
            function me(n, e) {
                if (e && (typeof e == 'object' || typeof e == 'function')) return e
                if (e !== void 0) throw new TypeError('Derived constructors may only return object or undefined')
                return (function (t) {
                    if (t === void 0)
                        throw new ReferenceError("this hasn't been initialised - super() hasn't been called")
                    return t
                })(n)
            }
            function ne(n) {
                var e = (function () {
                    if (typeof Reflect > 'u' || !Reflect.construct || Reflect.construct.sham) return !1
                    if (typeof Proxy == 'function') return !0
                    try {
                        return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})), !0
                    } catch {
                        return !1
                    }
                })()
                return function () {
                    var t,
                        r = te(n)
                    if (e) {
                        var i = te(this).constructor
                        t = Reflect.construct(r, arguments, i)
                    } else t = r.apply(this, arguments)
                    return me(this, t)
                }
            }
            function U(n, e) {
                return (
                    (function (t) {
                        if (Array.isArray(t)) return t
                    })(n) ||
                    (function (t, r) {
                        var i = t == null ? null : (typeof Symbol < 'u' && t[Symbol.iterator]) || t['@@iterator']
                        if (i != null) {
                            var o,
                                s,
                                u = [],
                                a = !0,
                                c = !1
                            try {
                                for (
                                    i = i.call(t);
                                    !(a = (o = i.next()).done) && (u.push(o.value), !r || u.length !== r);
                                    a = !0
                                );
                            } catch (l) {
                                ;(c = !0), (s = l)
                            } finally {
                                try {
                                    a || i.return == null || i.return()
                                } finally {
                                    if (c) throw s
                                }
                            }
                            return u
                        }
                    })(n, e) ||
                    ft(n, e) ||
                    (function () {
                        throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                    })()
                )
            }
            function Ye(n) {
                return (
                    (function (e) {
                        if (Array.isArray(e)) return pt(e)
                    })(n) ||
                    (function (e) {
                        if ((typeof Symbol < 'u' && e[Symbol.iterator] != null) || e['@@iterator'] != null)
                            return Array.from(e)
                    })(n) ||
                    ft(n) ||
                    (function () {
                        throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                    })()
                )
            }
            function ft(n, e) {
                if (n) {
                    if (typeof n == 'string') return pt(n, e)
                    var t = Object.prototype.toString.call(n).slice(8, -1)
                    return (
                        t === 'Object' && n.constructor && (t = n.constructor.name),
                        t === 'Map' || t === 'Set'
                            ? Array.from(n)
                            : t === 'Arguments' || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)
                            ? pt(n, e)
                            : void 0
                    )
                }
            }
            function pt(n, e) {
                ;(e == null || e > n.length) && (e = n.length)
                for (var t = 0, r = new Array(e); t < e; t++) r[t] = n[t]
                return r
            }
            function pe(n, e) {
                var t = (typeof Symbol < 'u' && n[Symbol.iterator]) || n['@@iterator']
                if (!t) {
                    if (Array.isArray(n) || (t = ft(n)) || (e && n && typeof n.length == 'number')) {
                        t && (n = t)
                        var r = 0,
                            i = function () {}
                        return {
                            s: i,
                            n: function () {
                                return r >= n.length ? { done: !0 } : { done: !1, value: n[r++] }
                            },
                            e: function (a) {
                                throw a
                            },
                            f: i,
                        }
                    }
                    throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)
                }
                var o,
                    s = !0,
                    u = !1
                return {
                    s: function () {
                        t = t.call(n)
                    },
                    n: function () {
                        var a = t.next()
                        return (s = a.done), a
                    },
                    e: function (a) {
                        ;(u = !0), (o = a)
                    },
                    f: function () {
                        try {
                            s || t.return == null || t.return()
                        } finally {
                            if (u) throw o
                        }
                    },
                }
            }
            var G = { DEBUG: !1, LIB_VERSION: '1.77.2' },
                Qt = Array.prototype,
                Yt = Object.prototype,
                ht = Yt.toString,
                nr = Yt.hasOwnProperty,
                v = typeof window < 'u' ? window : {},
                Fe = v.navigator || { userAgent: '' },
                T = v.document || {},
                re = Fe.userAgent,
                rr = ['localhost', '127.0.0.1'],
                Jt = Qt.forEach,
                Gt = Qt.indexOf,
                ir = Array.isArray,
                gt = {},
                E = {
                    log: function () {
                        if (G.DEBUG && !X(window.console) && window.console) {
                            for (
                                var n =
                                        ('__rrweb_original__' in window.console.log)
                                            ? window.console.log.__rrweb_original__
                                            : window.console.log,
                                    e = arguments.length,
                                    t = new Array(e),
                                    r = 0;
                                r < e;
                                r++
                            )
                                t[r] = arguments[r]
                            try {
                                n.apply(window.console, t)
                            } catch {
                                he(t, function (o) {
                                    n(o)
                                })
                            }
                        }
                    },
                    error: function () {
                        if (G.DEBUG && !X(window.console) && window.console) {
                            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t]
                            var r = ['PostHog error:'].concat(e),
                                i =
                                    '__rrweb_original__' in window.console.error
                                        ? window.console.error.__rrweb_original__
                                        : window.console.error
                            try {
                                i.apply(window.console, r)
                            } catch {
                                he(r, function (s) {
                                    i(s)
                                })
                            }
                        }
                    },
                    critical: function () {
                        if (!X(window.console) && window.console) {
                            for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t]
                            var r = ['PostHog error:'].concat(e),
                                i =
                                    '__rrweb_original__' in window.console.error
                                        ? window.console.error.__rrweb_original__
                                        : window.console.error
                            try {
                                i.apply(window.console, r)
                            } catch {
                                he(r, function (s) {
                                    i(s)
                                })
                            }
                        }
                    },
                },
                _t = function (n) {
                    return n.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '')
                }
            function he(n, e, t) {
                if (Array.isArray(n)) {
                    if (Jt && n.forEach === Jt) n.forEach(e, t)
                    else if ('length' in n && n.length === +n.length) {
                        for (var r = 0, i = n.length; r < i; r++) if (r in n && e.call(t, n[r], r) === gt) return
                    }
                }
            }
            function w(n, e, t) {
                if (n != null) {
                    if (Array.isArray(n)) return he(n, e, t)
                    for (var r in n) if (nr.call(n, r) && e.call(t, n[r], r) === gt) return
                }
            }
            var L = function (n) {
                    for (var e = arguments.length, t = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)
                        t[r - 1] = arguments[r]
                    return (
                        he(t, function (i) {
                            for (var o in i) i[o] !== void 0 && (n[o] = i[o])
                        }),
                        n
                    )
                },
                ie =
                    ir ||
                    function (n) {
                        return ht.call(n) === '[object Array]'
                    },
                Xt = function (n) {
                    try {
                        return /^\s*\bfunction\b/.test(n)
                    } catch {
                        return !1
                    }
                }
            function k(n, e) {
                return n.indexOf(e) !== -1
            }
            var vt = function (n) {
                    return n === Object(n) && !ie(n)
                },
                X = function (n) {
                    return n === void 0
                },
                Kt = function (n) {
                    return ht.call(n) == '[object String]'
                },
                or = function (n) {
                    return ht.call(n) == '[object Number]'
                },
                Zt = function () {
                    return (
                        (Date.now =
                            Date.now ||
                            function () {
                                return +new Date()
                            }),
                        Date.now()
                    )
                },
                en = function (n) {
                    return function () {
                        try {
                            for (var e = arguments.length, t = new Array(e), r = 0; r < e; r++) t[r] = arguments[r]
                            return n.apply(this, t)
                        } catch (i) {
                            E.critical('Implementation error. Please turn on debug and contact support@posthog.com.'),
                                E.critical(i)
                        }
                    }
                },
                mt = function (n) {
                    var e = {}
                    return (
                        w(n, function (t, r) {
                            Kt(t) && t.length > 0 && (e[r] = t)
                        }),
                        e
                    )
                },
                sr = ['$performance_raw']
            function ar(n, e) {
                return (
                    (t = n),
                    (r = function (o, s) {
                        return s && sr.indexOf(s) > -1 ? o : typeof o == 'string' && e !== null ? o.slice(0, e) : o
                    }),
                    (i = new Set()),
                    (function o(s, u) {
                        return s !== Object(s)
                            ? r
                                ? r(s, u)
                                : s
                            : i.has(s)
                            ? void 0
                            : (i.add(s),
                              ie(s)
                                  ? ((a = []),
                                    he(s, function (c) {
                                        a.push(o(c))
                                    }))
                                  : ((a = {}),
                                    w(s, function (c, l) {
                                        i.has(c) || (a[l] = o(c, l))
                                    })),
                              a)
                        var a
                    })(t)
                )
                var t, r, i
            }
            function yt(n) {
                var e,
                    t,
                    r,
                    i,
                    o,
                    s = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=',
                    u = 0,
                    a = 0,
                    c = '',
                    l = []
                if (!n) return n
                n = ur(n)
                do
                    (e = ((o = (n.charCodeAt(u++) << 16) | (n.charCodeAt(u++) << 8) | n.charCodeAt(u++)) >> 18) & 63),
                        (t = (o >> 12) & 63),
                        (r = (o >> 6) & 63),
                        (i = 63 & o),
                        (l[a++] = s.charAt(e) + s.charAt(t) + s.charAt(r) + s.charAt(i))
                while (u < n.length)
                switch (((c = l.join('')), n.length % 3)) {
                    case 1:
                        c = c.slice(0, -2) + '=='
                        break
                    case 2:
                        c = c.slice(0, -1) + '='
                }
                return c
            }
            var ur = function (n) {
                    var e,
                        t,
                        r,
                        i,
                        o = ''
                    for (
                        e = t = 0,
                            r = (n = (n + '')
                                .replace(
                                    /\r\n/g,
                                    `
`
                                )
                                .replace(
                                    /\r/g,
                                    `
`
                                )).length,
                            i = 0;
                        i < r;
                        i++
                    ) {
                        var s = n.charCodeAt(i),
                            u = null
                        s < 128
                            ? t++
                            : (u =
                                  s > 127 && s < 2048
                                      ? String.fromCharCode((s >> 6) | 192, (63 & s) | 128)
                                      : String.fromCharCode((s >> 12) | 224, ((s >> 6) & 63) | 128, (63 & s) | 128)),
                            u !== null && (t > e && (o += n.substring(e, t)), (o += u), (e = t = i + 1))
                    }
                    return t > e && (o += n.substring(e, n.length)), o
                },
                cr = function (n) {
                    return !!/(google web preview|baiduspider|yandexbot|bingbot|googlebot|yahoo! slurp|ahrefsbot|facebookexternalhit|facebookcatalog|applebot|semrushbot|duckduckbot|twitterbot|rogerbot|linkedinbot|mj12bot|sitebulb|bot.htm|bot.php|hubspot|crawler|prerender|gptbot)/i.test(
                        n
                    )
                },
                tn = function (n, e) {
                    var t = e.replace(/[[]/, '\\[').replace(/[\]]/, '\\]'),
                        r = new RegExp('[\\?&]' + t + '=([^&#]*)').exec(n)
                    if (r === null || (r && typeof r[1] != 'string' && r[1].length)) return ''
                    var i = r[1]
                    try {
                        i = decodeURIComponent(i)
                    } catch {
                        E.error('Skipping decoding for malformed query param: ' + i)
                    }
                    return i.replace(/\+/g, ' ')
                },
                nn = function (n, e) {
                    var t = n.match(new RegExp(e + '=([^&]*)'))
                    return t ? t[1] : null
                },
                Be = (function () {
                    function n(e) {
                        return e && ((e.preventDefault = n.preventDefault), (e.stopPropagation = n.stopPropagation)), e
                    }
                    return (
                        (n.preventDefault = function () {
                            this.returnValue = !1
                        }),
                        (n.stopPropagation = function () {
                            this.cancelBubble = !0
                        }),
                        function (e, t, r, i, o) {
                            if (e)
                                if (e.addEventListener && !i) e.addEventListener(t, r, !!o)
                                else {
                                    var s = 'on' + t,
                                        u = e[s]
                                    e[s] = (function (a, c, l) {
                                        return function (d) {
                                            if ((d = d || n(window.event))) {
                                                var h,
                                                    p = !0
                                                Xt(l) && (h = l(d))
                                                var g = c.call(a, d)
                                                return (h !== !1 && g !== !1) || (p = !1), p
                                            }
                                        }
                                    })(e, r, u)
                                }
                            else E.error('No valid element provided to register_event')
                        }
                    )
                })()
            function bt(n, e) {
                var t = function () {
                    var r = T.createElement('script')
                    ;(r.type = 'text/javascript'),
                        (r.src = n),
                        (r.onload = function (s) {
                            return e(void 0, s)
                        }),
                        (r.onerror = function (s) {
                            return e(s)
                        })
                    var i,
                        o = T.querySelectorAll('body > script')
                    o.length > 0
                        ? (i = o[0].parentNode) === null || i === void 0 || i.insertBefore(r, o[0])
                        : T.body.appendChild(r)
                }
                T.body ? t() : T.addEventListener('DOMContentLoaded', t)
            }
            var j = {
                campaignParams: function (n) {
                    var e = [
                            'utm_source',
                            'utm_medium',
                            'utm_campaign',
                            'utm_content',
                            'utm_term',
                            'gclid',
                            'fbclid',
                            'msclkid',
                        ].concat(n || []),
                        t = {}
                    return (
                        w(e, function (r) {
                            var i = tn(T.URL, r)
                            i.length && (t[r] = i)
                        }),
                        t
                    )
                },
                searchEngine: function () {
                    var n = T.referrer
                    return n
                        ? n.search('https?://(.*)google.([^/?]*)') === 0
                            ? 'google'
                            : n.search('https?://(.*)bing.com') === 0
                            ? 'bing'
                            : n.search('https?://(.*)yahoo.com') === 0
                            ? 'yahoo'
                            : n.search('https?://(.*)duckduckgo.com') === 0
                            ? 'duckduckgo'
                            : null
                        : null
                },
                searchInfo: function () {
                    var n = j.searchEngine(),
                        e = n != 'yahoo' ? 'q' : 'p',
                        t = {}
                    if (n !== null) {
                        t.$search_engine = n
                        var r = tn(T.referrer, e)
                        r.length && (t.ph_keyword = r)
                    }
                    return t
                },
                browser: function (n, e, t) {
                    return (
                        (e = e || ''),
                        t || k(n, ' OPR/')
                            ? k(n, 'Mini')
                                ? 'Opera Mini'
                                : 'Opera'
                            : /(BlackBerry|PlayBook|BB10)/i.test(n)
                            ? 'BlackBerry'
                            : k(n, 'IEMobile') || k(n, 'WPDesktop')
                            ? 'Internet Explorer Mobile'
                            : k(n, 'SamsungBrowser/')
                            ? 'Samsung Internet'
                            : k(n, 'Edge') || k(n, 'Edg/')
                            ? 'Microsoft Edge'
                            : k(n, 'FBIOS')
                            ? 'Facebook Mobile'
                            : k(n, 'Chrome')
                            ? 'Chrome'
                            : k(n, 'CriOS')
                            ? 'Chrome iOS'
                            : k(n, 'UCWEB') || k(n, 'UCBrowser')
                            ? 'UC Browser'
                            : k(n, 'FxiOS')
                            ? 'Firefox iOS'
                            : k(e, 'Apple')
                            ? k(n, 'Mobile')
                                ? 'Mobile Safari'
                                : 'Safari'
                            : k(n, 'Android')
                            ? 'Android Mobile'
                            : k(n, 'Konqueror')
                            ? 'Konqueror'
                            : k(n, 'Firefox')
                            ? 'Firefox'
                            : k(n, 'MSIE') || k(n, 'Trident/')
                            ? 'Internet Explorer'
                            : k(n, 'Gecko')
                            ? 'Mozilla'
                            : ''
                    )
                },
                browserVersion: function (n, e, t) {
                    var r = {
                        'Internet Explorer Mobile': /rv:(\d+(\.\d+)?)/,
                        'Microsoft Edge': /Edge?\/(\d+(\.\d+)?)/,
                        Chrome: /Chrome\/(\d+(\.\d+)?)/,
                        'Chrome iOS': /CriOS\/(\d+(\.\d+)?)/,
                        'UC Browser': /(UCBrowser|UCWEB)\/(\d+(\.\d+)?)/,
                        Safari: /Version\/(\d+(\.\d+)?)/,
                        'Mobile Safari': /Version\/(\d+(\.\d+)?)/,
                        Opera: /(Opera|OPR)\/(\d+(\.\d+)?)/,
                        Firefox: /Firefox\/(\d+(\.\d+)?)/,
                        'Firefox iOS': /FxiOS\/(\d+(\.\d+)?)/,
                        Konqueror: /Konqueror:(\d+(\.\d+)?)/,
                        BlackBerry: /BlackBerry (\d+(\.\d+)?)/,
                        'Android Mobile': /android\s(\d+(\.\d+)?)/,
                        'Samsung Internet': /SamsungBrowser\/(\d+(\.\d+)?)/,
                        'Internet Explorer': /(rv:|MSIE )(\d+(\.\d+)?)/,
                        Mozilla: /rv:(\d+(\.\d+)?)/,
                    }[j.browser(n, e, t)]
                    if (r === void 0) return null
                    var i = n.match(r)
                    return i ? parseFloat(i[i.length - 2]) : null
                },
                browserLanguage: function () {
                    return Fe.language || Fe.userLanguage
                },
                os: function (n) {
                    if (/Windows/i.test(n)) {
                        if (/Phone/.test(n) || /WPDesktop/.test(n)) return { os_name: 'Windows Phone', os_version: '' }
                        var e = /Windows NT ([0-9.]+)/i.exec(n)
                        return e && e[1]
                            ? { os_name: 'Windows', os_version: e[1] }
                            : { os_name: 'Windows', os_version: '' }
                    }
                    if (/(iPhone|iPad|iPod)/.test(n)) {
                        var t = /OS (\d+)_(\d+)_?(\d+)?/i.exec(n)
                        return t && t[1]
                            ? { os_name: 'iOS', os_version: [t[1], t[2], t[3] || '0'].join('.') }
                            : { os_name: 'iOS', os_version: '' }
                    }
                    if (/Android/.test(n)) {
                        var r = /Android (\d+)\.(\d+)\.?(\d+)?/i.exec(n)
                        return r && r[1]
                            ? { os_name: 'Android', os_version: [r[1], r[2], r[3] || '0'].join('.') }
                            : { os_name: 'Android', os_version: '' }
                    }
                    if (/(BlackBerry|PlayBook|BB10)/i.test(n)) return { os_name: 'BlackBerry', os_version: '' }
                    if (/Mac/i.test(n)) {
                        var i = /Mac OS X (\d+)[_.](\d+)[_.]?(\d+)?/i.exec(n)
                        return i && i[1]
                            ? { os_name: 'Mac OS X', os_version: [i[1], i[2], i[3] || '0'].join('.') }
                            : { os_name: 'Mac OS X', os_version: '' }
                    }
                    return /Linux/.test(n)
                        ? { os_name: 'Linux', os_version: '' }
                        : /CrOS/.test(n)
                        ? { os_name: 'Chrome OS', os_version: '' }
                        : { os_name: '', os_version: '' }
                },
                device: function (n) {
                    return /Windows Phone/i.test(n) || /WPDesktop/.test(n)
                        ? 'Windows Phone'
                        : /iPad/.test(n)
                        ? 'iPad'
                        : /iPod/.test(n)
                        ? 'iPod Touch'
                        : /iPhone/.test(n)
                        ? 'iPhone'
                        : /(BlackBerry|PlayBook|BB10)/i.test(n)
                        ? 'BlackBerry'
                        : /Android/.test(n) && !/Mobile/.test(n)
                        ? 'Android Tablet'
                        : /Android/.test(n)
                        ? 'Android'
                        : ''
                },
                deviceType: function (n) {
                    var e = this.device(n)
                    return e === 'iPad' || e === 'Android Tablet' ? 'Tablet' : e ? 'Mobile' : 'Desktop'
                },
                referrer: function () {
                    return T.referrer || '$direct'
                },
                referringDomain: function () {
                    if (!T.referrer) return '$direct'
                    var n = T.createElement('a')
                    return (n.href = T.referrer), n.host
                },
                properties: function () {
                    var n = j.os(re),
                        e = n.os_name,
                        t = n.os_version
                    return L(
                        mt({
                            $os: e,
                            $os_version: t,
                            $browser: j.browser(re, Fe.vendor, v.opera),
                            $device: j.device(re),
                            $device_type: j.deviceType(re),
                        }),
                        {
                            $current_url: v?.location.href,
                            $host: v?.location.host,
                            $pathname: v?.location.pathname,
                            $browser_version: j.browserVersion(re, Fe.vendor, v.opera),
                            $browser_language: j.browserLanguage(),
                            $screen_height: v?.screen.height,
                            $screen_width: v?.screen.width,
                            $viewport_height: v?.innerHeight,
                            $viewport_width: v?.innerWidth,
                            $lib: 'web',
                            $lib_version: G.LIB_VERSION,
                            $insert_id:
                                Math.random().toString(36).substring(2, 10) +
                                Math.random().toString(36).substring(2, 10),
                            $time: Zt() / 1e3,
                        }
                    )
                },
                people_properties: function () {
                    var n = j.os(re),
                        e = n.os_name,
                        t = n.os_version
                    return L(mt({ $os: e, $os_version: t, $browser: j.browser(re, Fe.vendor, v.opera) }), {
                        $browser_version: j.browserVersion(re, Fe.vendor, v.opera),
                    })
                },
            }
            function Je(n) {
                switch (D(n.className)) {
                    case 'string':
                        return n.className
                    case 'object':
                        return ('baseVal' in n.className ? n.className.baseVal : null) || n.getAttribute('class') || ''
                    default:
                        return ''
                }
            }
            function Ge(n) {
                var e = ''
                return (
                    Xe(n) &&
                        !an(n) &&
                        n.childNodes &&
                        n.childNodes.length &&
                        w(n.childNodes, function (t) {
                            on(t) &&
                                t.textContent &&
                                (e += _t(t.textContent)
                                    .split(/(\s+)/)
                                    .filter(Ae)
                                    .join('')
                                    .replace(/[\r\n]/g, ' ')
                                    .replace(/[ ]+/g, ' ')
                                    .substring(0, 255))
                        }),
                    _t(e)
                )
            }
            function rn(n) {
                return !!n && n.nodeType === 1
            }
            function Ee(n, e) {
                return !!n && !!n.tagName && n.tagName.toLowerCase() === e.toLowerCase()
            }
            function on(n) {
                return !!n && n.nodeType === 3
            }
            function sn(n) {
                return !!n && n.nodeType === 11
            }
            var wt = ['a', 'button', 'form', 'input', 'select', 'textarea', 'label']
            function Xe(n) {
                for (var e = n; e.parentNode && !Ee(e, 'body'); e = e.parentNode) {
                    var t = Je(e).split(' ')
                    if (k(t, 'ph-sensitive') || k(t, 'ph-no-capture')) return !1
                }
                if (k(Je(n).split(' '), 'ph-include')) return !0
                var r = n.type || ''
                if (typeof r == 'string')
                    switch (r.toLowerCase()) {
                        case 'hidden':
                        case 'password':
                            return !1
                    }
                var i = n.name || n.id || ''
                return !(
                    typeof i == 'string' &&
                    /^cc|cardnum|ccnum|creditcard|csc|cvc|cvv|exp|pass|pwd|routing|seccode|securitycode|securitynum|socialsec|socsec|ssn/i.test(
                        i.replace(/[^a-zA-Z0-9]/g, '')
                    )
                )
            }
            function an(n) {
                return !!(
                    (Ee(n, 'input') && !['button', 'checkbox', 'submit', 'reset'].includes(n.type)) ||
                    Ee(n, 'select') ||
                    Ee(n, 'textarea') ||
                    n.getAttribute('contenteditable') === 'true'
                )
            }
            function Ae(n) {
                return !(
                    n === null ||
                    X(n) ||
                    (typeof n == 'string' &&
                        ((n = _t(n)),
                        /^(?:(4[0-9]{12}(?:[0-9]{3})?)|(5[1-5][0-9]{14})|(6(?:011|5[0-9]{2})[0-9]{12})|(3[47][0-9]{13})|(3(?:0[0-5]|[68][0-9])[0-9]{11})|((?:2131|1800|35[0-9]{3})[0-9]{11}))$/.test(
                            (n || '').replace(/[- ]/g, '')
                        ) || /(^\d{3}-?\d{2}-?\d{4}$)/.test(n)))
                )
            }
            function un(n) {
                var e = Ge(n)
                return Ae((e = ''.concat(e, ' ').concat(cn(n)).trim())) ? e : ''
            }
            function cn(n) {
                var e = ''
                return (
                    n &&
                        n.childNodes &&
                        n.childNodes.length &&
                        w(n.childNodes, function (t) {
                            var r
                            if (t && ((r = t.tagName) === null || r === void 0 ? void 0 : r.toLowerCase()) === 'span')
                                try {
                                    var i = Ge(t)
                                    ;(e = ''.concat(e, ' ').concat(i).trim()),
                                        t.childNodes &&
                                            t.childNodes.length &&
                                            (e = ''.concat(e, ' ').concat(cn(t)).trim())
                                } catch (o) {
                                    console.error(o)
                                }
                        }),
                    e
                )
            }
            var lr = (function () {
                    function n(e) {
                        b(this, n), (this.clicks = []), (this.enabled = e)
                    }
                    return (
                        F(n, [
                            {
                                key: 'isRageClick',
                                value: function (e, t, r) {
                                    if (!this.enabled) return !1
                                    var i = this.clicks[this.clicks.length - 1]
                                    if (i && Math.abs(e - i.x) + Math.abs(t - i.y) < 30 && r - i.timestamp < 1e3) {
                                        if ((this.clicks.push({ x: e, y: t, timestamp: r }), this.clicks.length === 3))
                                            return !0
                                    } else this.clicks = [{ x: e, y: t, timestamp: r }]
                                    return !1
                                },
                            },
                        ]),
                        n
                    )
                })(),
                ln = '$people_distinct_id',
                Ke = '__alias',
                qe = '__timers',
                dn = '$autocapture_disabled_server_side',
                kt = '$session_recording_enabled_server_side',
                fn = '$console_log_recording_enabled_server_side',
                pn = '$session_recording_recorder_version_server_side',
                Ze = '$sesid',
                Me = '$enabled_feature_flags',
                St = '$early_access_features',
                Ce = '$stored_person_properties',
                ye = '$stored_group_properties',
                Pt = '$surveys',
                et = '$flag_call_reported',
                Ft = '$user_state',
                Et = '$posthog_quota_limited',
                dr = [ln, Ke, '__cmpns', qe, kt, Ze, Me, Ft, Et, St, ye, Ce, Pt, et]
            function xt(n, e) {
                return e.length > n ? e.slice(0, n) + '...' : e
            }
            var be = {
                _initializedTokens: [],
                _isDisabledServerSide: null,
                _isAutocaptureEnabled: !1,
                _setIsAutocaptureEnabled: function (n) {
                    var e,
                        t =
                            this._isDisabledServerSide === null
                                ? !((e = n.persistence) === null || e === void 0 || !e.props[dn])
                                : this._isDisabledServerSide,
                        r = !!n.get_config('autocapture')
                    this._isAutocaptureEnabled = r && !t
                },
                _previousElementSibling: function (n) {
                    if (n.previousElementSibling) return n.previousElementSibling
                    var e = n
                    do e = e.previousSibling
                    while (e && !rn(e))
                    return e
                },
                _getAugmentPropertiesFromElement: function (n) {
                    if (!Xe(n)) return {}
                    var e = {}
                    return (
                        w(n.attributes, function (t) {
                            if (t.name.indexOf('data-ph-capture-attribute') === 0) {
                                var r = t.name.replace('data-ph-capture-attribute-', ''),
                                    i = t.value
                                r && i && Ae(i) && (e[r] = i)
                            }
                        }),
                        e
                    )
                },
                _getPropertiesFromElement: function (n, e, t) {
                    var r = n.tagName.toLowerCase(),
                        i = { tag_name: r }
                    wt.indexOf(r) > -1 &&
                        !t &&
                        (r.toLowerCase() === 'a' || r.toLowerCase() === 'button'
                            ? (i.$el_text = xt(1024, un(n)))
                            : (i.$el_text = xt(1024, Ge(n))))
                    var o = Je(n)
                    o.length > 0 &&
                        (i.classes = o.split(' ').filter(function (c) {
                            return c !== ''
                        })),
                        w(n.attributes, function (c) {
                            var l
                            ;(an(n) && ['name', 'id', 'class'].indexOf(c.name) === -1) ||
                                (!e &&
                                    Ae(c.value) &&
                                    (typeof (l = c.name) != 'string' ||
                                        (l.substring(0, 10) !== '_ngcontent' && l.substring(0, 7) !== '_nghost')) &&
                                    (i['attr__' + c.name] = xt(1024, c.value)))
                        })
                    for (var s = 1, u = 1, a = n; (a = this._previousElementSibling(a)); )
                        s++, a.tagName === n.tagName && u++
                    return (i.nth_child = s), (i.nth_of_type = u), i
                },
                _getDefaultProperties: function (n) {
                    return { $event_type: n, $ce_version: 1 }
                },
                _extractCustomPropertyValue: function (n) {
                    var e = []
                    return (
                        w(document.querySelectorAll(n.css_selector), function (t) {
                            var r
                            ;['input', 'select'].indexOf(t.tagName.toLowerCase()) > -1
                                ? (r = t.value)
                                : t.textContent && (r = t.textContent),
                                Ae(r) && e.push(r)
                        }),
                        e.join(', ')
                    )
                },
                _getCustomProperties: function (n) {
                    var e = this,
                        t = {}
                    return (
                        w(this._customProperties, function (r) {
                            w(r.event_selectors, function (i) {
                                w(document.querySelectorAll(i), function (o) {
                                    k(n, o) && Xe(o) && (t[r.name] = e._extractCustomPropertyValue(r))
                                })
                            })
                        }),
                        t
                    )
                },
                _getEventTarget: function (n) {
                    return n.target === void 0
                        ? n.srcElement || null
                        : (e = n.target) !== null && e !== void 0 && e.shadowRoot
                        ? n.composedPath()[0] || null
                        : n.target || null
                    var e
                },
                _captureEvent: function (n, e) {
                    var t,
                        r = this,
                        i = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : '$autocapture',
                        o = this._getEventTarget(n)
                    if (
                        (on(o) && (o = o.parentNode || null),
                        i === '$autocapture' &&
                            n.type === 'click' &&
                            n instanceof MouseEvent &&
                            (t = this.rageclicks) !== null &&
                            t !== void 0 &&
                            t.isRageClick(n.clientX, n.clientY, new Date().getTime()) &&
                            this._captureEvent(n, e, '$rageclick'),
                        o &&
                            (function (p, g) {
                                var f = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : void 0
                                if (!p || Ee(p, 'html') || !rn(p)) return !1
                                if (f != null && f.url_allowlist) {
                                    var R = window.location.href,
                                        N = f.url_allowlist
                                    if (
                                        N &&
                                        !N.some(function (A) {
                                            return R.match(A)
                                        })
                                    )
                                        return !1
                                }
                                if (f != null && f.dom_event_allowlist) {
                                    var W = f.dom_event_allowlist
                                    if (
                                        W &&
                                        !W.some(function (A) {
                                            return g.type === A
                                        })
                                    )
                                        return !1
                                }
                                if (f != null && f.element_allowlist) {
                                    var K = f.element_allowlist
                                    if (
                                        K &&
                                        !K.some(function (A) {
                                            return p.tagName.toLowerCase() === A
                                        })
                                    )
                                        return !1
                                }
                                if (f != null && f.css_selector_allowlist) {
                                    var x = f.css_selector_allowlist
                                    if (
                                        x &&
                                        !x.some(function (A) {
                                            return p.matches(A)
                                        })
                                    )
                                        return !1
                                }
                                for (var S = !1, O = [p], I = !0, y = p; y.parentNode && !Ee(y, 'body'); )
                                    if (sn(y.parentNode)) O.push(y.parentNode.host), (y = y.parentNode.host)
                                    else {
                                        if (!(I = y.parentNode || !1)) break
                                        if (wt.indexOf(I.tagName.toLowerCase()) > -1) S = !0
                                        else {
                                            var Z = window.getComputedStyle(I)
                                            Z && Z.getPropertyValue('cursor') === 'pointer' && (S = !0)
                                        }
                                        O.push(I), (y = I)
                                    }
                                var Y = window.getComputedStyle(p)
                                if (Y && Y.getPropertyValue('cursor') === 'pointer' && g.type === 'click') return !0
                                var ue = p.tagName.toLowerCase()
                                switch (ue) {
                                    case 'html':
                                        return !1
                                    case 'form':
                                        return g.type === 'submit'
                                    case 'input':
                                    case 'select':
                                    case 'textarea':
                                        return g.type === 'change' || g.type === 'click'
                                    default:
                                        return S
                                            ? g.type === 'click'
                                            : g.type === 'click' &&
                                                  (wt.indexOf(ue) > -1 || p.getAttribute('contenteditable') === 'true')
                                }
                            })(o, n, this.config))
                    ) {
                        for (var s = [o], u = o; u.parentNode && !Ee(u, 'body'); )
                            sn(u.parentNode)
                                ? (s.push(u.parentNode.host), (u = u.parentNode.host))
                                : (s.push(u.parentNode), (u = u.parentNode))
                        var a,
                            c = [],
                            l = {},
                            d = !1
                        if (
                            (w(s, function (p) {
                                var g = Xe(p)
                                p.tagName.toLowerCase() === 'a' &&
                                    ((a = p.getAttribute('href')), (a = g && Ae(a) && a)),
                                    k(Je(p).split(' '), 'ph-no-capture') && (d = !0),
                                    c.push(
                                        r._getPropertiesFromElement(
                                            p,
                                            e.get_config('mask_all_element_attributes'),
                                            e.get_config('mask_all_text')
                                        )
                                    )
                                var f = r._getAugmentPropertiesFromElement(p)
                                L(l, f)
                            }),
                            e.get_config('mask_all_text') ||
                                (o.tagName.toLowerCase() === 'a' || o.tagName.toLowerCase() === 'button'
                                    ? (c[0].$el_text = un(o))
                                    : (c[0].$el_text = Ge(o))),
                            a && (c[0].attr__href = a),
                            d)
                        )
                            return !1
                        var h = L(this._getDefaultProperties(n.type), { $elements: c }, this._getCustomProperties(s), l)
                        return e.capture(i, h), !0
                    }
                },
                _navigate: function (n) {
                    window.location.href = n
                },
                _addDomEventHandlers: function (n) {
                    var e = this,
                        t = function (r) {
                            ;(r = r || window.event), e._captureEvent(r, n)
                        }
                    Be(document, 'submit', t, !1, !0),
                        Be(document, 'change', t, !1, !0),
                        Be(document, 'click', t, !1, !0)
                },
                _customProperties: [],
                rageclicks: null,
                config: void 0,
                init: function (n) {
                    var e
                    typeof n.__autocapture != 'boolean' && (this.config = n.__autocapture),
                        (e = this.config) !== null &&
                            e !== void 0 &&
                            e.url_allowlist &&
                            (this.config.url_allowlist = this.config.url_allowlist.map(function (t) {
                                return new RegExp(t)
                            })),
                        (this.rageclicks = new lr(n.get_config('rageclick')))
                },
                afterDecideResponse: function (n, e) {
                    var t = e.get_config('token')
                    this._initializedTokens.indexOf(t) > -1
                        ? E.log('autocapture already initialized for token "' + t + '"')
                        : (e.persistence && e.persistence.register(m({}, dn, !!n.autocapture_opt_out)),
                          (this._isDisabledServerSide = !!n.autocapture_opt_out),
                          this._setIsAutocaptureEnabled(e),
                          this._initializedTokens.push(t),
                          n && n.config && n.config.enable_collect_everything && this._isAutocaptureEnabled
                              ? (n.custom_properties && (this._customProperties = n.custom_properties),
                                this._addDomEventHandlers(e))
                              : (e.__autocapture = !1))
                },
                enabledForProject: function (n, e, t) {
                    if (!n) return !0
                    ;(e = X(e) ? 10 : e), (t = X(t) ? 10 : t)
                    for (var r = 0, i = 0; i < n.length; i++) r += n.charCodeAt(i)
                    return r % e < t
                },
                isBrowserSupported: function () {
                    return Xt(document.querySelectorAll)
                },
            }
            ;(function (n) {
                for (var e in n) typeof n[e] == 'function' && (n[e] = n[e].bind(n))
            })(be),
                (function (n) {
                    for (var e in n) typeof n[e] == 'function' && (n[e] = en(n[e]))
                })(be)
            var Ot = '$active_feature_flags',
                tt = '$override_feature_flags',
                hn = '$feature_flag_payloads',
                gn = function (n) {
                    var e,
                        t = {},
                        r = pe(
                            (function (u) {
                                for (var a = Object.keys(u), c = a.length, l = new Array(c); c--; )
                                    l[c] = [a[c], u[a[c]]]
                                return l
                            })(n || {})
                        )
                    try {
                        for (r.s(); !(e = r.n()).done; ) {
                            var i = U(e.value, 2),
                                o = i[0],
                                s = i[1]
                            s && (t[o] = s)
                        }
                    } catch (u) {
                        r.e(u)
                    } finally {
                        r.f()
                    }
                    return t
                },
                fr = (function () {
                    function n(e) {
                        b(this, n),
                            (this.instance = e),
                            (this._override_warning = !1),
                            (this.featureFlagEventHandlers = []),
                            (this.reloadFeatureFlagsQueued = !1),
                            (this.reloadFeatureFlagsInAction = !1)
                    }
                    return (
                        F(n, [
                            {
                                key: 'getFlags',
                                value: function () {
                                    return Object.keys(this.getFlagVariants())
                                },
                            },
                            {
                                key: 'getFlagVariants',
                                value: function () {
                                    var e = this.instance.get_property(Me),
                                        t = this.instance.get_property(tt)
                                    if (!t) return e || {}
                                    for (var r = L({}, e), i = Object.keys(t), o = 0; o < i.length; o++)
                                        t[i[o]] === !1 ? delete r[i[o]] : (r[i[o]] = t[i[o]])
                                    return (
                                        this._override_warning ||
                                            (console.warn('[PostHog] Overriding feature flags!', {
                                                enabledFlags: e,
                                                overriddenFlags: t,
                                                finalFlags: r,
                                            }),
                                            (this._override_warning = !0)),
                                        r
                                    )
                                },
                            },
                            {
                                key: 'getFlagPayloads',
                                value: function () {
                                    return this.instance.get_property(hn) || {}
                                },
                            },
                            {
                                key: 'reloadFeatureFlags',
                                value: function () {
                                    this.reloadFeatureFlagsQueued ||
                                        ((this.reloadFeatureFlagsQueued = !0), this._startReloadTimer())
                                },
                            },
                            {
                                key: 'setAnonymousDistinctId',
                                value: function (e) {
                                    this.$anon_distinct_id = e
                                },
                            },
                            {
                                key: 'setReloadingPaused',
                                value: function (e) {
                                    this.reloadFeatureFlagsInAction = e
                                },
                            },
                            {
                                key: 'resetRequestQueue',
                                value: function () {
                                    this.reloadFeatureFlagsQueued = !1
                                },
                            },
                            {
                                key: '_startReloadTimer',
                                value: function () {
                                    var e = this
                                    this.reloadFeatureFlagsQueued &&
                                        !this.reloadFeatureFlagsInAction &&
                                        setTimeout(function () {
                                            !e.reloadFeatureFlagsInAction &&
                                                e.reloadFeatureFlagsQueued &&
                                                ((e.reloadFeatureFlagsQueued = !1), e._reloadFeatureFlagsRequest())
                                        }, 5)
                                },
                            },
                            {
                                key: '_reloadFeatureFlagsRequest',
                                value: function () {
                                    var e = this
                                    this.setReloadingPaused(!0)
                                    var t = this.instance.get_config('token'),
                                        r = this.instance.get_property(Ce),
                                        i = this.instance.get_property(ye),
                                        o = yt(
                                            JSON.stringify({
                                                token: t,
                                                distinct_id: this.instance.get_distinct_id(),
                                                groups: this.instance.getGroups(),
                                                $anon_distinct_id: this.$anon_distinct_id,
                                                person_properties: r,
                                                group_properties: i,
                                                disable_flags:
                                                    this.instance.get_config('advanced_disable_feature_flags') ||
                                                    void 0,
                                            })
                                        )
                                    this.instance._send_request(
                                        this.instance.get_config('api_host') + '/decide/?v=3',
                                        { data: o },
                                        { method: 'POST' },
                                        this.instance._prepare_callback(function (s) {
                                            ;(e.$anon_distinct_id = void 0),
                                                e.receivedFeatureFlags(s),
                                                e.setReloadingPaused(!1),
                                                e._startReloadTimer()
                                        })
                                    )
                                },
                            },
                            {
                                key: 'getFeatureFlag',
                                value: function (e) {
                                    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                                    if (
                                        this.instance.decideEndpointWasHit ||
                                        (this.getFlags() && this.getFlags().length > 0)
                                    ) {
                                        var r = this.getFlagVariants()[e],
                                            i = ''.concat(r),
                                            o = this.instance.get_property(et) || {}
                                        return (
                                            (!t.send_event && 'send_event' in t) ||
                                                (e in o && o[e].includes(i)) ||
                                                (Array.isArray(o[e]) ? o[e].push(i) : (o[e] = [i]),
                                                this.instance.persistence.register(m({}, et, o)),
                                                this.instance.capture('$feature_flag_called', {
                                                    $feature_flag: e,
                                                    $feature_flag_response: r,
                                                })),
                                            r
                                        )
                                    }
                                    console.warn(
                                        'getFeatureFlag for key "' + e + `" failed. Feature flags didn't load in time.`
                                    )
                                },
                            },
                            {
                                key: 'getFeatureFlagPayload',
                                value: function (e) {
                                    return this.getFlagPayloads()[e]
                                },
                            },
                            {
                                key: 'isFeatureEnabled',
                                value: function (e) {
                                    var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                                    if (
                                        this.instance.decideEndpointWasHit ||
                                        (this.getFlags() && this.getFlags().length > 0)
                                    )
                                        return !!this.getFeatureFlag(e, t)
                                    console.warn(
                                        'isFeatureEnabled for key "' +
                                            e +
                                            `" failed. Feature flags didn't load in time.`
                                    )
                                },
                            },
                            {
                                key: 'addFeatureFlagsHandler',
                                value: function (e) {
                                    this.featureFlagEventHandlers.push(e)
                                },
                            },
                            {
                                key: 'removeFeatureFlagsHandler',
                                value: function (e) {
                                    this.featureFlagEventHandlers = this.featureFlagEventHandlers.filter(function (t) {
                                        return t !== e
                                    })
                                },
                            },
                            {
                                key: 'receivedFeatureFlags',
                                value: function (e) {
                                    this.instance.decideEndpointWasHit = !0
                                    var t = this.getFlagVariants(),
                                        r = this.getFlagPayloads()
                                    ;(function (i, o) {
                                        var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {},
                                            u = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {},
                                            a = i.featureFlags,
                                            c = i.featureFlagPayloads
                                        if (a)
                                            if (Array.isArray(a)) {
                                                var l,
                                                    d = {}
                                                if (a) for (var h = 0; h < a.length; h++) d[a[h]] = !0
                                                o && o.register((m((l = {}), Ot, a), m(l, Me, d), l))
                                            } else {
                                                var p,
                                                    g = a,
                                                    f = c
                                                i.errorsWhileComputingFlags &&
                                                    ((g = _(_({}, s), g)), (f = _(_({}, u), f))),
                                                    o &&
                                                        o.register(
                                                            (m((p = {}), Ot, Object.keys(gn(g))),
                                                            m(p, Me, g || {}),
                                                            m(p, hn, f || {}),
                                                            p)
                                                        )
                                            }
                                    })(e, this.instance.persistence, t, r),
                                        this._fireFeatureFlagsCallbacks()
                                },
                            },
                            {
                                key: 'override',
                                value: function (e) {
                                    if (((this._override_warning = !1), e === !1))
                                        this.instance.persistence.unregister(tt)
                                    else if (Array.isArray(e)) {
                                        for (var t = {}, r = 0; r < e.length; r++) t[e[r]] = !0
                                        this.instance.persistence.register(m({}, tt, t))
                                    } else this.instance.persistence.register(m({}, tt, e))
                                },
                            },
                            {
                                key: 'onFeatureFlags',
                                value: function (e) {
                                    var t = this
                                    if ((this.addFeatureFlagsHandler(e), this.instance.decideEndpointWasHit)) {
                                        var r = this._prepareFeatureFlagsForCallbacks(),
                                            i = r.flags,
                                            o = r.flagVariants
                                        e(i, o)
                                    }
                                    return function () {
                                        return t.removeFeatureFlagsHandler(e)
                                    }
                                },
                            },
                            {
                                key: 'updateEarlyAccessFeatureEnrollment',
                                value: function (e, t) {
                                    var r,
                                        i = m({}, '$feature_enrollment/'.concat(e), t)
                                    this.instance.capture('$feature_enrollment_update', {
                                        $feature_flag: e,
                                        $feature_enrollment: t,
                                        $set: i,
                                    }),
                                        this.setPersonPropertiesForFlags(i, !1)
                                    var o = _(_({}, this.getFlagVariants()), {}, m({}, e, t))
                                    this.instance.persistence.register(
                                        (m((r = {}), Ot, Object.keys(gn(o))), m(r, Me, o), r)
                                    ),
                                        this._fireFeatureFlagsCallbacks()
                                },
                            },
                            {
                                key: 'getEarlyAccessFeatures',
                                value: function (e) {
                                    var t = this,
                                        r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
                                        i = this.instance.get_property(St)
                                    if (i && !r) return e(i)
                                    this.instance._send_request(
                                        ''
                                            .concat(
                                                this.instance.get_config('api_host'),
                                                '/api/early_access_features/?token='
                                            )
                                            .concat(this.instance.get_config('token')),
                                        {},
                                        { method: 'GET' },
                                        function (o) {
                                            var s = o.earlyAccessFeatures
                                            return t.instance.persistence.register(m({}, St, s)), e(s)
                                        }
                                    )
                                },
                            },
                            {
                                key: '_prepareFeatureFlagsForCallbacks',
                                value: function () {
                                    var e = this.getFlags(),
                                        t = this.getFlagVariants()
                                    return {
                                        flags: e.filter(function (r) {
                                            return t[r]
                                        }),
                                        flagVariants: Object.keys(t)
                                            .filter(function (r) {
                                                return t[r]
                                            })
                                            .reduce(function (r, i) {
                                                return (r[i] = t[i]), r
                                            }, {}),
                                    }
                                },
                            },
                            {
                                key: '_fireFeatureFlagsCallbacks',
                                value: function () {
                                    var e = this._prepareFeatureFlagsForCallbacks(),
                                        t = e.flags,
                                        r = e.flagVariants
                                    this.featureFlagEventHandlers.forEach(function (i) {
                                        return i(t, r)
                                    })
                                },
                            },
                            {
                                key: 'setPersonPropertiesForFlags',
                                value: function (e) {
                                    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1],
                                        r = this.instance.get_property(Ce) || {}
                                    this.instance.register(m({}, Ce, _(_({}, r), e))),
                                        t && this.instance.reloadFeatureFlags()
                                },
                            },
                            {
                                key: 'resetPersonPropertiesForFlags',
                                value: function () {
                                    this.instance.unregister(Ce)
                                },
                            },
                            {
                                key: 'setGroupPropertiesForFlags',
                                value: function (e) {
                                    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1],
                                        r = this.instance.get_property(ye) || {}
                                    Object.keys(r).length !== 0 &&
                                        Object.keys(r).forEach(function (i) {
                                            ;(r[i] = _(_({}, r[i]), e[i])), delete e[i]
                                        }),
                                        this.instance.register(m({}, ye, _(_({}, r), e))),
                                        t && this.instance.reloadFeatureFlags()
                                },
                            },
                            {
                                key: 'resetGroupPropertiesForFlags',
                                value: function (e) {
                                    if (e) {
                                        var t = this.instance.get_property(ye) || {}
                                        this.instance.register(m({}, ye, _(_({}, t), {}, m({}, e, {}))))
                                    } else this.instance.unregister(ye)
                                },
                            },
                        ]),
                        n
                    )
                })(),
                pr = /[a-z0-9][a-z0-9-]+\.[a-z.]{2,6}$/i,
                ge = {
                    is_supported: function () {
                        return !0
                    },
                    error: function (n) {
                        E.error('cookieStore error: ' + n)
                    },
                    get: function (n) {
                        try {
                            for (
                                var e = n + '=',
                                    t = document.cookie.split(';').filter(function (o) {
                                        return o.length
                                    }),
                                    r = 0;
                                r < t.length;
                                r++
                            ) {
                                for (var i = t[r]; i.charAt(0) == ' '; ) i = i.substring(1, i.length)
                                if (i.indexOf(e) === 0) return decodeURIComponent(i.substring(e.length, i.length))
                            }
                        } catch {}
                        return null
                    },
                    parse: function (n) {
                        var e
                        try {
                            e = JSON.parse(ge.get(n)) || {}
                        } catch {}
                        return e
                    },
                    set: function (n, e, t, r, i) {
                        try {
                            var o = '',
                                s = '',
                                u = ''
                            if (r) {
                                var a = document.location.hostname.match(pr),
                                    c = a ? a[0] : ''
                                o = c ? '; domain=.' + c : ''
                            }
                            if (t) {
                                var l = new Date()
                                l.setTime(l.getTime() + 24 * t * 60 * 60 * 1e3), (s = '; expires=' + l.toUTCString())
                            }
                            i && (u = '; secure')
                            var d =
                                n + '=' + encodeURIComponent(JSON.stringify(e)) + s + '; SameSite=Lax; path=/' + o + u
                            return (document.cookie = d), d
                        } catch {
                            return
                        }
                    },
                    remove: function (n, e) {
                        try {
                            ge.set(n, '', -1, e)
                        } catch {
                            return
                        }
                    },
                },
                It = null,
                $ = {
                    is_supported: function () {
                        if (It !== null) return It
                        var n = !0
                        if (typeof window < 'u')
                            try {
                                var e = '__mplssupport__'
                                $.set(e, 'xyz'), $.get(e) !== '"xyz"' && (n = !1), $.remove(e)
                            } catch {
                                n = !1
                            }
                        else n = !1
                        return n || E.error('localStorage unsupported; falling back to cookie store'), (It = n), n
                    },
                    error: function (n) {
                        E.error('localStorage error: ' + n)
                    },
                    get: function (n) {
                        try {
                            return window.localStorage.getItem(n)
                        } catch (e) {
                            $.error(e)
                        }
                        return null
                    },
                    parse: function (n) {
                        try {
                            return JSON.parse($.get(n)) || {}
                        } catch {}
                        return null
                    },
                    set: function (n, e) {
                        try {
                            window.localStorage.setItem(n, JSON.stringify(e))
                        } catch (t) {
                            $.error(t)
                        }
                    },
                    remove: function (n) {
                        try {
                            window.localStorage.removeItem(n)
                        } catch (e) {
                            $.error(e)
                        }
                    },
                },
                hr = ['distinct_id', Ze],
                Rt = _(
                    _({}, $),
                    {},
                    {
                        parse: function (n) {
                            try {
                                var e = {}
                                try {
                                    e = ge.parse(n) || {}
                                } catch {}
                                var t = L(e, JSON.parse($.get(n) || '{}'))
                                return $.set(n, t), t
                            } catch {}
                            return null
                        },
                        set: function (n, e, t, r, i) {
                            try {
                                $.set(n, e)
                                var o = {}
                                hr.forEach(function (s) {
                                    e[s] && (o[s] = e[s])
                                }),
                                    Object.keys(o).length && ge.set(n, o, t, r, i)
                            } catch (s) {
                                $.error(s)
                            }
                        },
                        remove: function (n, e) {
                            try {
                                window.localStorage.removeItem(n), ge.remove(n, e)
                            } catch (t) {
                                $.error(t)
                            }
                        },
                    }
                ),
                nt = {},
                gr = {
                    is_supported: function () {
                        return !0
                    },
                    error: function (n) {
                        E.error('memoryStorage error: ' + n)
                    },
                    get: function (n) {
                        return nt[n] || null
                    },
                    parse: function (n) {
                        return nt[n] || null
                    },
                    set: function (n, e) {
                        nt[n] = e
                    },
                    remove: function (n) {
                        delete nt[n]
                    },
                },
                xe = null,
                H = {
                    is_supported: function () {
                        if (xe !== null) return xe
                        if (((xe = !0), typeof window < 'u'))
                            try {
                                var n = '__support__'
                                H.set(n, 'xyz'), H.get(n) !== '"xyz"' && (xe = !1), H.remove(n)
                            } catch {
                                xe = !1
                            }
                        else xe = !1
                        return xe
                    },
                    error: function (n) {
                        G.DEBUG && E.error('sessionStorage error: ', n)
                    },
                    get: function (n) {
                        try {
                            return window.sessionStorage.getItem(n)
                        } catch (e) {
                            H.error(e)
                        }
                        return null
                    },
                    parse: function (n) {
                        try {
                            return JSON.parse(H.get(n)) || null
                        } catch {}
                        return null
                    },
                    set: function (n, e) {
                        try {
                            window.sessionStorage.setItem(n, JSON.stringify(e))
                        } catch (t) {
                            H.error(t)
                        }
                    },
                    remove: function (n) {
                        try {
                            window.sessionStorage.removeItem(n)
                        } catch (e) {
                            H.error(e)
                        }
                    },
                },
                _r = ['cookie', 'localstorage', 'localstorage+cookie', 'sessionstorage', 'memory'],
                _n = (function () {
                    function n(e) {
                        b(this, n)
                        var t = ''
                        e.token && (t = e.token.replace(/\+/g, 'PL').replace(/\//g, 'SL').replace(/=/g, 'EQ')),
                            (this.props = {}),
                            (this.campaign_params_saved = !1),
                            (this.custom_campaign_params = e.custom_campaign_params || []),
                            e.persistence_name
                                ? (this.name = 'ph_' + e.persistence_name)
                                : (this.name = 'ph_' + t + '_posthog'),
                            _r.indexOf(e.persistence.toLowerCase()) === -1 &&
                                (E.critical('Unknown persistence type ' + e.persistence + '; falling back to cookie'),
                                (e.persistence = 'cookie'))
                        var r = e.persistence.toLowerCase()
                        r === 'localstorage' && $.is_supported()
                            ? (this.storage = $)
                            : r === 'localstorage+cookie' && Rt.is_supported()
                            ? (this.storage = Rt)
                            : r === 'sessionstorage' && H.is_supported()
                            ? (this.storage = H)
                            : (this.storage = r === 'memory' ? gr : ge),
                            (this.user_state = 'anonymous'),
                            this.load(),
                            this.update_config(e),
                            this.save()
                    }
                    return (
                        F(n, [
                            {
                                key: 'properties',
                                value: function () {
                                    var e = {}
                                    return (
                                        w(this.props, function (t, r) {
                                            if (r === Me && D(t) === 'object')
                                                for (var i = Object.keys(t), o = 0; o < i.length; o++)
                                                    e['$feature/'.concat(i[o])] = t[i[o]]
                                            else
                                                (u = r),
                                                    (a = !1),
                                                    ((s = dr) === null
                                                        ? a
                                                        : Gt && s.indexOf === Gt
                                                        ? s.indexOf(u) != -1
                                                        : (w(s, function (c) {
                                                              if (a || (a = c === u)) return gt
                                                          }),
                                                          a)) || (e[r] = t)
                                            var s, u, a
                                        }),
                                        e
                                    )
                                },
                            },
                            {
                                key: 'load',
                                value: function () {
                                    if (!this.disabled) {
                                        var e = this.storage.parse(this.name)
                                        e && (this.props = L({}, e))
                                    }
                                },
                            },
                            {
                                key: 'save',
                                value: function () {
                                    this.disabled ||
                                        this.storage.set(
                                            this.name,
                                            this.props,
                                            this.expire_days,
                                            this.cross_subdomain,
                                            this.secure
                                        )
                                },
                            },
                            {
                                key: 'remove',
                                value: function () {
                                    this.storage.remove(this.name, !1), this.storage.remove(this.name, !0)
                                },
                            },
                            {
                                key: 'clear',
                                value: function () {
                                    this.remove(), (this.props = {})
                                },
                            },
                            {
                                key: 'register_once',
                                value: function (e, t, r) {
                                    var i = this
                                    if (vt(e)) {
                                        t === void 0 && (t = 'None'),
                                            (this.expire_days = r === void 0 ? this.default_expiry : r)
                                        var o = !1
                                        if (
                                            (w(e, function (s, u) {
                                                ;(i.props.hasOwnProperty(u) && i.props[u] !== t) ||
                                                    ((i.props[u] = s), (o = !0))
                                            }),
                                            o)
                                        )
                                            return this.save(), !0
                                    }
                                    return !1
                                },
                            },
                            {
                                key: 'register',
                                value: function (e, t) {
                                    var r = this
                                    if (vt(e)) {
                                        this.expire_days = t === void 0 ? this.default_expiry : t
                                        var i = !1
                                        if (
                                            (w(e, function (o, s) {
                                                e.hasOwnProperty(s) && r.props[s] !== o && ((r.props[s] = o), (i = !0))
                                            }),
                                            i)
                                        )
                                            return this.save(), !0
                                    }
                                    return !1
                                },
                            },
                            {
                                key: 'unregister',
                                value: function (e) {
                                    e in this.props && (delete this.props[e], this.save())
                                },
                            },
                            {
                                key: 'update_campaign_params',
                                value: function () {
                                    this.campaign_params_saved ||
                                        (this.register(j.campaignParams(this.custom_campaign_params)),
                                        (this.campaign_params_saved = !0))
                                },
                            },
                            {
                                key: 'update_search_keyword',
                                value: function () {
                                    this.register(j.searchInfo())
                                },
                            },
                            {
                                key: 'update_referrer_info',
                                value: function () {
                                    this.register({
                                        $referrer: this.props.$referrer || j.referrer(),
                                        $referring_domain: this.props.$referring_domain || j.referringDomain(),
                                    })
                                },
                            },
                            {
                                key: 'get_referrer_info',
                                value: function () {
                                    return mt({
                                        $referrer: this.props.$referrer,
                                        $referring_domain: this.props.$referring_domain,
                                    })
                                },
                            },
                            {
                                key: 'safe_merge',
                                value: function (e) {
                                    return (
                                        w(this.props, function (t, r) {
                                            r in e || (e[r] = t)
                                        }),
                                        e
                                    )
                                },
                            },
                            {
                                key: 'update_config',
                                value: function (e) {
                                    ;(this.default_expiry = this.expire_days = e.cookie_expiration),
                                        this.set_disabled(e.disable_persistence),
                                        this.set_cross_subdomain(e.cross_subdomain_cookie),
                                        this.set_secure(e.secure_cookie)
                                },
                            },
                            {
                                key: 'set_disabled',
                                value: function (e) {
                                    ;(this.disabled = e), this.disabled ? this.remove() : this.save()
                                },
                            },
                            {
                                key: 'set_cross_subdomain',
                                value: function (e) {
                                    e !== this.cross_subdomain &&
                                        ((this.cross_subdomain = e), this.remove(), this.save())
                                },
                            },
                            {
                                key: 'get_cross_subdomain',
                                value: function () {
                                    return !!this.cross_subdomain
                                },
                            },
                            {
                                key: 'set_secure',
                                value: function (e) {
                                    e !== this.secure && ((this.secure = e), this.remove(), this.save())
                                },
                            },
                            {
                                key: 'set_event_timer',
                                value: function (e, t) {
                                    var r = this.props[qe] || {}
                                    ;(r[e] = t), (this.props[qe] = r), this.save()
                                },
                            },
                            {
                                key: 'remove_event_timer',
                                value: function (e) {
                                    var t = (this.props[qe] || {})[e]
                                    return X(t) || (delete this.props[qe][e], this.save()), t
                                },
                            },
                            {
                                key: 'get_user_state',
                                value: function () {
                                    return this.props[Ft] || 'anonymous'
                                },
                            },
                            {
                                key: 'set_user_state',
                                value: function (e) {
                                    ;(this.props[Ft] = e), this.save()
                                },
                            },
                            {
                                key: 'get_quota_limits',
                                value: function () {
                                    return this.props[Et] || {}
                                },
                            },
                            {
                                key: 'set_quota_limits',
                                value: function (e) {
                                    ;(this.props[Et] = e), this.save()
                                },
                            },
                        ]),
                        n
                    )
                })(),
                vr =
                    'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2IiBmaWxsPSJibGFjayIvPgo8cGF0aCBkPSJNOCAwSDE2TDAgMTZWOEw4IDBaIiBmaWxsPSIjMkQyRDJEIi8+CjxwYXRoIGQ9Ik0xNiA4VjE2SDhMMTYgOFoiIGZpbGw9IiMyRDJEMkQiLz4KPC9zdmc+Cg==',
                vn = 2,
                mr = 4,
                mn = 3,
                yr = 6,
                br = 0,
                wr = 5e6,
                kr = 'rrweb/console@1',
                oe,
                Sr = F(function n(e) {
                    var t,
                        r,
                        i = this,
                        o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}
                    b(this, n),
                        m(this, 'bucketSize', 100),
                        m(this, 'refillRate', 10),
                        m(this, 'mutationBuckets', {}),
                        m(this, 'loggedTracker', {}),
                        m(this, 'refillBuckets', function () {
                            Object.keys(i.mutationBuckets).forEach(function (s) {
                                ;(i.mutationBuckets[s] = i.mutationBuckets[s] + i.refillRate),
                                    i.mutationBuckets[s] >= i.bucketSize && delete i.mutationBuckets[s]
                            })
                        }),
                        m(this, 'getNodeOrRelevantParent', function (s) {
                            var u = i.rrweb.mirror.getNode(s)
                            if (u?.nodeName !== 'svg' && u instanceof Element) {
                                var a = u.closest('svg')
                                if (a) return [i.rrweb.mirror.getId(a), a]
                            }
                            return [s, u]
                        }),
                        m(this, 'numberOfChanges', function (s) {
                            var u, a, c, l, d, h, p, g
                            return (
                                ((u = (a = s.removes) === null || a === void 0 ? void 0 : a.length) !== null &&
                                u !== void 0
                                    ? u
                                    : 0) +
                                ((c = (l = s.attributes) === null || l === void 0 ? void 0 : l.length) !== null &&
                                c !== void 0
                                    ? c
                                    : 0) +
                                ((d = (h = s.texts) === null || h === void 0 ? void 0 : h.length) !== null &&
                                d !== void 0
                                    ? d
                                    : 0) +
                                ((p = (g = s.adds) === null || g === void 0 ? void 0 : g.length) !== null &&
                                p !== void 0
                                    ? p
                                    : 0)
                            )
                        }),
                        m(this, 'throttleMutations', function (s) {
                            if (s.type !== mn || s.data.source !== br) return s
                            var u = s.data,
                                a = i.numberOfChanges(u)
                            u.attributes &&
                                (u.attributes = u.attributes.filter(function (l) {
                                    var d,
                                        h,
                                        p,
                                        g = U(i.getNodeOrRelevantParent(l.id), 2),
                                        f = g[0],
                                        R = g[1]
                                    return i.mutationBuckets[f] === 0
                                        ? !1
                                        : ((i.mutationBuckets[f] =
                                              (d = i.mutationBuckets[f]) !== null && d !== void 0 ? d : i.bucketSize),
                                          (i.mutationBuckets[f] = Math.max(i.mutationBuckets[f] - 1, 0)),
                                          i.mutationBuckets[f] === 0 &&
                                              (i.loggedTracker[f] ||
                                                  ((i.loggedTracker[f] = !0),
                                                  (h = (p = i.options).onBlockedNode) === null ||
                                                      h === void 0 ||
                                                      h.call(p, f, R))),
                                          l)
                                }))
                            var c = i.numberOfChanges(u)
                            return c !== 0 || a === c ? s : void 0
                        }),
                        (this.rrweb = e),
                        (this.options = o),
                        (this.refillRate =
                            (t = this.options.refillRate) !== null && t !== void 0 ? t : this.refillRate),
                        (this.bucketSize =
                            (r = this.options.bucketSize) !== null && r !== void 0 ? r : this.bucketSize),
                        setInterval(function () {
                            i.refillBuckets()
                        }, 1e3)
                }),
                Pr = '/s/',
                yn = 'sessionRecording'
            ;(function (n) {
                ;(n[(n.Mutation = 0)] = 'Mutation'),
                    (n[(n.MouseMove = 1)] = 'MouseMove'),
                    (n[(n.MouseInteraction = 2)] = 'MouseInteraction'),
                    (n[(n.Scroll = 3)] = 'Scroll'),
                    (n[(n.ViewportResize = 4)] = 'ViewportResize'),
                    (n[(n.Input = 5)] = 'Input'),
                    (n[(n.TouchMove = 6)] = 'TouchMove'),
                    (n[(n.MediaInteraction = 7)] = 'MediaInteraction'),
                    (n[(n.StyleSheetRule = 8)] = 'StyleSheetRule'),
                    (n[(n.CanvasMutation = 9)] = 'CanvasMutation'),
                    (n[(n.Font = 10)] = 'Font'),
                    (n[(n.Log = 11)] = 'Log'),
                    (n[(n.Drag = 12)] = 'Drag'),
                    (n[(n.StyleDeclaration = 13)] = 'StyleDeclaration'),
                    (n[(n.Selection = 14)] = 'Selection'),
                    (n[(n.AdoptedStyleSheet = 15)] = 'AdoptedStyleSheet')
            })(oe || (oe = {}))
            var Fr = [
                    oe.MouseMove,
                    oe.MouseInteraction,
                    oe.Scroll,
                    oe.ViewportResize,
                    oe.Input,
                    oe.TouchMove,
                    oe.MediaInteraction,
                    oe.Drag,
                ],
                Er = (function () {
                    function n(e) {
                        var t = this
                        b(this, n),
                            m(this, 'lastActivityTimestamp', Date.now()),
                            m(this, 'isIdle', !1),
                            (this.instance = e),
                            (this.captureStarted = !1),
                            (this.snapshots = []),
                            (this.emit = !1),
                            (this.endpoint = Pr),
                            (this.stopRrweb = void 0),
                            (this.windowId = null),
                            (this.sessionId = null),
                            (this.receivedDecide = !1),
                            window.addEventListener('beforeunload', function () {
                                t._flushBuffer()
                            })
                    }
                    return (
                        F(n, [
                            {
                                key: 'startRecordingIfEnabled',
                                value: function () {
                                    this.isRecordingEnabled()
                                        ? this.startCaptureAndTrySendingQueuedSnapshots()
                                        : this.stopRecording()
                                },
                            },
                            {
                                key: 'started',
                                value: function () {
                                    return this.captureStarted
                                },
                            },
                            {
                                key: 'stopRecording',
                                value: function () {
                                    this.captureStarted &&
                                        this.stopRrweb &&
                                        (this.stopRrweb(), (this.stopRrweb = void 0), (this.captureStarted = !1))
                                },
                            },
                            {
                                key: 'isRecordingEnabled',
                                value: function () {
                                    var e = !!this.instance.get_property(kt),
                                        t = !this.instance.get_config('disable_session_recording')
                                    return e && t
                                },
                            },
                            {
                                key: 'isConsoleLogCaptureEnabled',
                                value: function () {
                                    var e = !!this.instance.get_property(fn),
                                        t = this.instance.get_config('enable_recording_console_log')
                                    return t ?? e
                                },
                            },
                            {
                                key: 'getRecordingVersion',
                                value: function () {
                                    var e,
                                        t = this.instance.get_property(pn)
                                    return (
                                        ((e = this.instance.get_config('session_recording')) === null || e === void 0
                                            ? void 0
                                            : e.recorderVersion) ||
                                        t ||
                                        'v1'
                                    )
                                },
                            },
                            {
                                key: 'afterDecideResponse',
                                value: function (e) {
                                    var t, r, i, o, s, u
                                    ;(this.receivedDecide = !0),
                                        this.instance.persistence &&
                                            this.instance.persistence.register(
                                                (m((s = {}), kt, !!e.sessionRecording),
                                                m(
                                                    s,
                                                    fn,
                                                    (i = e.sessionRecording) === null || i === void 0
                                                        ? void 0
                                                        : i.consoleLogRecordingEnabled
                                                ),
                                                m(
                                                    s,
                                                    pn,
                                                    (o = e.sessionRecording) === null || o === void 0
                                                        ? void 0
                                                        : o.recorderVersion
                                                ),
                                                s)
                                            ),
                                        (t = e.sessionRecording) !== null &&
                                            t !== void 0 &&
                                            t.endpoint &&
                                            (this.endpoint =
                                                (u = e.sessionRecording) === null || u === void 0
                                                    ? void 0
                                                    : u.endpoint),
                                        (r = e.sessionRecording) !== null &&
                                            r !== void 0 &&
                                            r.recorderVersion &&
                                            (this.recorderVersion = e.sessionRecording.recorderVersion),
                                        this.startRecordingIfEnabled()
                                },
                            },
                            {
                                key: 'log',
                                value: function (e) {
                                    var t,
                                        r = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 'log'
                                    ;(t = this.instance.sessionRecording) === null ||
                                        t === void 0 ||
                                        t.onRRwebEmit({
                                            type: 6,
                                            data: {
                                                plugin: 'rrweb/console@1',
                                                payload: { level: r, trace: [], payload: [JSON.stringify(e)] },
                                            },
                                            timestamp: Zt(),
                                        })
                                },
                            },
                            {
                                key: 'startCaptureAndTrySendingQueuedSnapshots',
                                value: function () {
                                    var e = this
                                    this.receivedDecide &&
                                        ((this.emit = !0),
                                        this.snapshots.forEach(function (t) {
                                            return e._captureSnapshotBuffered(t)
                                        })),
                                        this._startCapture()
                                },
                            },
                            {
                                key: '_startCapture',
                                value: function () {
                                    var e = this
                                    if (
                                        Object.assign !== void 0 &&
                                        !this.captureStarted &&
                                        !this.instance.get_config('disable_session_recording')
                                    ) {
                                        ;(this.captureStarted = !0),
                                            this.instance.sessionManager.checkAndGetSessionAndWindowId()
                                        var t = this.getRecordingVersion() === 'v2' ? 'recorder-v2.js' : 'recorder.js'
                                        this.instance.__loaded_recorder_version !== this.getRecordingVersion()
                                            ? bt(
                                                  this.instance.get_config('api_host') +
                                                      '/static/'.concat(t, '?v=').concat(G.LIB_VERSION),
                                                  function (r) {
                                                      if (r) return E.error('Could not load '.concat(t), r)
                                                      e._onScriptLoaded()
                                                  }
                                              )
                                            : this._onScriptLoaded()
                                    }
                                },
                            },
                            {
                                key: '_isInteractiveEvent',
                                value: function (e) {
                                    var t
                                    return (
                                        e.type === mn &&
                                        Fr.indexOf((t = e.data) === null || t === void 0 ? void 0 : t.source) !== -1
                                    )
                                },
                            },
                            {
                                key: '_updateWindowAndSessionIds',
                                value: function (e) {
                                    var t = this._isInteractiveEvent(e)
                                    if (
                                        (t ||
                                            this.isIdle ||
                                            (e.timestamp - this.lastActivityTimestamp > 3e5 && (this.isIdle = !0)),
                                        t &&
                                            ((this.lastActivityTimestamp = e.timestamp),
                                            this.isIdle && ((this.isIdle = !1), this._tryTakeFullSnapshot())),
                                        !this.isIdle)
                                    ) {
                                        var r = this.instance.sessionManager.checkAndGetSessionAndWindowId(
                                                !t,
                                                e.timestamp
                                            ),
                                            i = r.windowId,
                                            o = r.sessionId
                                        ;[vn, mr].indexOf(e.type) !== -1 ||
                                            (this.windowId === i && this.sessionId === o) ||
                                            this._tryTakeFullSnapshot(),
                                            (this.windowId = i),
                                            (this.sessionId = o)
                                    }
                                },
                            },
                            {
                                key: '_tryTakeFullSnapshot',
                                value: function () {
                                    if (!this.captureStarted) return !1
                                    try {
                                        var e
                                        return (
                                            (e = this.rrwebRecord) === null || e === void 0 || e.takeFullSnapshot(), !0
                                        )
                                    } catch (t) {
                                        return E.error('Error taking full snapshot.', t), !1
                                    }
                                },
                            },
                            {
                                key: '_onScriptLoaded',
                                value: function () {
                                    var e,
                                        t = this,
                                        r = {
                                            blockClass: 'ph-no-capture',
                                            blockSelector: void 0,
                                            ignoreClass: 'ph-ignore-input',
                                            maskTextClass: 'ph-mask',
                                            maskTextSelector: void 0,
                                            maskTextFn: void 0,
                                            maskAllInputs: !0,
                                            maskInputOptions: {},
                                            maskInputFn: void 0,
                                            slimDOMOptions: {},
                                            collectFonts: !1,
                                            inlineStylesheet: !0,
                                            recordCrossOriginIframes: !1,
                                        }
                                    this.rrwebRecord = window.rrweb ? window.rrweb.record : window.rrwebRecord
                                    for (
                                        var i = this.instance.get_config('session_recording'),
                                            o = 0,
                                            s = Object.entries(i || {});
                                        o < s.length;
                                        o++
                                    ) {
                                        var u = U(s[o], 2),
                                            a = u[0],
                                            c = u[1]
                                        a in r && (r[a] = c)
                                    }
                                    this.rrwebRecord
                                        ? ((this.mutationRateLimiter =
                                              (e = this.mutationRateLimiter) !== null && e !== void 0
                                                  ? e
                                                  : new Sr(this.rrwebRecord, {
                                                        onBlockedNode: function (l, d) {
                                                            var h = "Too many mutations on node '".concat(
                                                                l,
                                                                "'. Rate limiting. This could be due to SVG animations or something similar"
                                                            )
                                                            E.log(h, { node: d }),
                                                                t.log('[PostHog Recorder] ' + h, 'warn')
                                                        },
                                                    })),
                                          (this.stopRrweb = this.rrwebRecord(
                                              _(
                                                  {
                                                      emit: function (l) {
                                                          t.onRRwebEmit(l)
                                                      },
                                                      plugins:
                                                          window.rrwebConsoleRecord && this.isConsoleLogCaptureEnabled()
                                                              ? [window.rrwebConsoleRecord.getRecordConsolePlugin()]
                                                              : [],
                                                  },
                                                  r
                                              )
                                          )),
                                          this.instance._addCaptureHook(function (l) {
                                              try {
                                                  var d
                                                  l === '$pageview' &&
                                                      ((d = t.rrwebRecord) === null ||
                                                          d === void 0 ||
                                                          d.addCustomEvent('$pageview', { href: window.location.href }))
                                              } catch (h) {
                                                  E.error('Could not add $pageview to rrweb session', h)
                                              }
                                          }),
                                          (this.lastActivityTimestamp = Date.now()),
                                          (this.isIdle = !1))
                                        : E.error(
                                              'onScriptLoaded was called but rrwebRecord is not available. This indicates something has gone wrong.'
                                          )
                                },
                            },
                            {
                                key: 'onRRwebEmit',
                                value: function (e) {
                                    if (e && D(e) === 'object') {
                                        var t = this.mutationRateLimiter
                                            ? this.mutationRateLimiter.throttleMutations(e)
                                            : e
                                        if (t) {
                                            var r = (function (u) {
                                                    var a = JSON.stringify(u)
                                                    if (a.length > wr) {
                                                        var c,
                                                            l = pe(a.matchAll(/data:([\w/\-.]+);(\w+),([^)"]*)/gim))
                                                        try {
                                                            for (l.s(); !(c = l.n()).done; ) {
                                                                var d = c.value
                                                                a =
                                                                    d[1].toLocaleLowerCase().slice(0, 6) === 'image/'
                                                                        ? a.replace(d[0], vr)
                                                                        : a.replace(d[0], '')
                                                            }
                                                        } catch (h) {
                                                            l.e(h)
                                                        } finally {
                                                            l.f()
                                                        }
                                                    }
                                                    return { event: JSON.parse(a), size: a.length }
                                                })(
                                                    (function (u) {
                                                        var a = u
                                                        if (
                                                            a &&
                                                            D(a) === 'object' &&
                                                            a.type === yr &&
                                                            D(a.data) === 'object' &&
                                                            a.data.plugin === kr
                                                        ) {
                                                            a.data.payload.payload.length > 10 &&
                                                                ((a.data.payload.payload = a.data.payload.payload.slice(
                                                                    0,
                                                                    10
                                                                )),
                                                                a.data.payload.payload.push('...[truncated]'))
                                                            for (
                                                                var c = [], l = 0;
                                                                l < a.data.payload.payload.length;
                                                                l++
                                                            )
                                                                a.data.payload.payload[l] &&
                                                                a.data.payload.payload[l].length > 2e3
                                                                    ? c.push(
                                                                          a.data.payload.payload[l].slice(0, 2e3) +
                                                                              '...[truncated]'
                                                                      )
                                                                    : c.push(a.data.payload.payload[l])
                                                            return (a.data.payload.payload = c), u
                                                        }
                                                        return u
                                                    })(t)
                                                ),
                                                i = r.event,
                                                o = r.size
                                            if ((this._updateWindowAndSessionIds(i), !this.isIdle)) {
                                                var s = {
                                                    $snapshot_bytes: o,
                                                    $snapshot_data: i,
                                                    $session_id: this.sessionId,
                                                    $window_id: this.windowId,
                                                }
                                                this.emit ? this._captureSnapshotBuffered(s) : this.snapshots.push(s)
                                            }
                                        }
                                    }
                                },
                            },
                            {
                                key: '_flushBuffer',
                                value: function () {
                                    return (
                                        this.flushBufferTimer &&
                                            (clearTimeout(this.flushBufferTimer), (this.flushBufferTimer = void 0)),
                                        this.buffer &&
                                            this.buffer.data.length !== 0 &&
                                            this._captureSnapshot({
                                                $snapshot_bytes: this.buffer.size,
                                                $snapshot_data: this.buffer.data,
                                                $session_id: this.buffer.sessionId,
                                                $window_id: this.buffer.windowId,
                                            }),
                                        (this.buffer = void 0),
                                        { size: 0, data: [], sessionId: this.sessionId, windowId: this.windowId }
                                    )
                                },
                            },
                            {
                                key: '_captureSnapshotBuffered',
                                value: function (e) {
                                    var t,
                                        r = this,
                                        i =
                                            2 +
                                            (((t = this.buffer) === null || t === void 0 ? void 0 : t.data.length) || 0)
                                    ;(!this.buffer ||
                                        this.buffer.size + e.$snapshot_bytes + i > 943718.4 ||
                                        this.buffer.sessionId !== this.sessionId) &&
                                        (this.buffer = this._flushBuffer()),
                                        (this.buffer.size += e.$snapshot_bytes),
                                        this.buffer.data.push(e.$snapshot_data),
                                        this.flushBufferTimer ||
                                            (this.flushBufferTimer = setTimeout(function () {
                                                r._flushBuffer()
                                            }, 2e3))
                                },
                            },
                            {
                                key: '_captureSnapshot',
                                value: function (e) {
                                    this.instance.capture('$snapshot', e, {
                                        transport: 'XHR',
                                        method: 'POST',
                                        endpoint: this.endpoint,
                                        _noTruncate: !0,
                                        _batchKey: yn,
                                        _metrics: { rrweb_full_snapshot: e.$snapshot_data.type === vn },
                                    })
                                },
                            },
                        ]),
                        n
                    )
                })(),
                se = {
                    entryType: 0,
                    timeOrigin: 1,
                    name: 2,
                    startTime: 3,
                    redirectStart: 4,
                    redirectEnd: 5,
                    workerStart: 6,
                    fetchStart: 7,
                    domainLookupStart: 8,
                    domainLookupEnd: 9,
                    connectStart: 10,
                    secureConnectionStart: 11,
                    connectEnd: 12,
                    requestStart: 13,
                    responseStart: 14,
                    responseEnd: 15,
                    decodedBodySize: 16,
                    encodedBodySize: 17,
                    initiatorType: 18,
                    nextHopProtocol: 19,
                    renderBlockingStatus: 20,
                    responseStatus: 21,
                    transferSize: 22,
                    element: 23,
                    renderTime: 24,
                    loadTime: 25,
                    size: 26,
                    id: 27,
                    url: 28,
                    domComplete: 29,
                    domContentLoadedEvent: 30,
                    domInteractive: 31,
                    loadEventEnd: 32,
                    loadEventStart: 33,
                    redirectCount: 34,
                    navigationType: 35,
                    unloadEventEnd: 36,
                    unloadEventStart: 37,
                    duration: 39,
                    timestamp: 40,
                },
                xr = ['first-input', 'navigation', 'paint', 'resource'],
                Or = ['/s/', '/e/'],
                Ir = (function () {
                    function n(e) {
                        b(this, n), m(this, '_forceAllowLocalhost', !1), (this.instance = e)
                    }
                    return (
                        F(n, [
                            {
                                key: 'startObservingIfEnabled',
                                value: function () {
                                    this.isEnabled() ? this.startObserving() : this.stopObserving()
                                },
                            },
                            {
                                key: 'startObserving',
                                value: function () {
                                    var e,
                                        t,
                                        r = this
                                    if (!this.observer)
                                        if (
                                            ((e = window) === null ||
                                            e === void 0 ||
                                            (t = e.PerformanceObserver) === null ||
                                            t === void 0
                                                ? void 0
                                                : t.supportedEntryTypes) !== void 0
                                        )
                                            if (!rr.includes(location.hostname) || this._forceAllowLocalhost)
                                                try {
                                                    this.observer = new PerformanceObserver(function (o) {
                                                        o.getEntries().forEach(function (s) {
                                                            r._capturePerformanceEvent(s)
                                                        })
                                                    })
                                                    var i = PerformanceObserver.supportedEntryTypes.filter(function (
                                                        o
                                                    ) {
                                                        return xr.includes(o)
                                                    })
                                                    i.forEach(function (o) {
                                                        var s
                                                        ;(s = r.observer) === null ||
                                                            s === void 0 ||
                                                            s.observe({ type: o, buffered: !0 })
                                                    })
                                                } catch (o) {
                                                    console.error('PostHog failed to start performance observer', o),
                                                        this.stopObserving()
                                                }
                                            else
                                                E.log(
                                                    'PostHog Peformance observer not started because we are on localhost.'
                                                )
                                        else
                                            E.log(
                                                'PostHog Performance observer not started because PerformanceObserver is not supported by this browser.'
                                            )
                                },
                            },
                            {
                                key: 'stopObserving',
                                value: function () {
                                    this.observer && (this.observer.disconnect(), (this.observer = void 0))
                                },
                            },
                            {
                                key: 'isObserving',
                                value: function () {
                                    return !!this.observer
                                },
                            },
                            {
                                key: 'isEnabled',
                                value: function () {
                                    var e, t
                                    return (
                                        (e =
                                            (t = this.instance.get_config('capture_performance')) !== null &&
                                            t !== void 0
                                                ? t
                                                : this.remoteEnabled) !== null &&
                                        e !== void 0 &&
                                        e
                                    )
                                },
                            },
                            {
                                key: 'afterDecideResponse',
                                value: function (e) {
                                    ;(this.remoteEnabled = e.capturePerformance || !1),
                                        this.isEnabled() && this.startObserving()
                                },
                            },
                            {
                                key: '_capturePerformanceEvent',
                                value: function (e) {
                                    if (e.name.indexOf(this.instance.get_config('api_host')) === 0) {
                                        var t = e.name.replace(this.instance.get_config('api_host'), '')
                                        if (
                                            Or.find(function (p) {
                                                return t.indexOf(p) === 0
                                            })
                                        )
                                            return
                                    }
                                    var r = { url: e.name },
                                        i = this.instance.get_config('session_recording')
                                    if ((i.maskNetworkRequestFn && (r = i.maskNetworkRequestFn(r)), r)) {
                                        var o = e.toJSON()
                                        o.name = r.url
                                        var s = {},
                                            u = Math.floor(Date.now() - performance.now())
                                        for (var a in ((s[se.timeOrigin] = u),
                                        (s[se.timestamp] = Math.floor(u + e.startTime)),
                                        se))
                                            o[a] !== void 0 && (s[se[a]] = o[a])
                                        if ((this.capturePerformanceEvent(s), Rr(e))) {
                                            var c,
                                                l = pe(e.serverTiming || [])
                                            try {
                                                for (l.s(); !(c = l.n()).done; ) {
                                                    var d,
                                                        h = c.value
                                                    this.capturePerformanceEvent(
                                                        (m((d = {}), se.timeOrigin, u),
                                                        m(d, se.timestamp, Math.floor(u + e.startTime)),
                                                        m(d, se.name, h.name),
                                                        m(d, se.duration, h.duration),
                                                        m(d, se.entryType, 'serverTiming'),
                                                        d)
                                                    )
                                                }
                                            } catch (p) {
                                                l.e(p)
                                            } finally {
                                                l.f()
                                            }
                                        }
                                    }
                                },
                            },
                            {
                                key: 'capturePerformanceEvent',
                                value: function (e) {
                                    var t,
                                        r = e[se.timestamp]
                                    ;(t = this.instance.sessionRecording) === null ||
                                        t === void 0 ||
                                        t.onRRwebEmit({
                                            type: 6,
                                            data: { plugin: 'posthog/network@1', payload: e },
                                            timestamp: r,
                                        })
                                },
                            },
                        ]),
                        n
                    )
                })(),
                Rr = function (n) {
                    return n.entryType === 'navigation' || n.entryType === 'resource'
                },
                Tr = (function () {
                    function n(e) {
                        b(this, n),
                            (this.instance = e),
                            (this.instance.decideEndpointWasHit = this.instance._hasBootstrappedFeatureFlags())
                    }
                    return (
                        F(n, [
                            {
                                key: 'call',
                                value: function () {
                                    var e = this,
                                        t = yt(
                                            JSON.stringify({
                                                token: this.instance.get_config('token'),
                                                distinct_id: this.instance.get_distinct_id(),
                                                groups: this.instance.getGroups(),
                                                person_properties: this.instance.get_property(Ce),
                                                group_properties: this.instance.get_property(ye),
                                                disable_flags:
                                                    this.instance.get_config('advanced_disable_feature_flags') ||
                                                    this.instance.get_config(
                                                        'advanced_disable_feature_flags_on_first_load'
                                                    ) ||
                                                    void 0,
                                            })
                                        )
                                    this.instance._send_request(
                                        ''.concat(this.instance.get_config('api_host'), '/decide/?v=3'),
                                        { data: t, verbose: !0 },
                                        { method: 'POST' },
                                        function (r) {
                                            return e.parseDecideResponse(r)
                                        }
                                    )
                                },
                            },
                            {
                                key: 'parseDecideResponse',
                                value: function (e) {
                                    var t,
                                        r,
                                        i,
                                        o = this
                                    if (e?.status !== 0) {
                                        if (!document || !document.body)
                                            return (
                                                console.log(
                                                    'document not ready yet, trying again in 500 milliseconds...'
                                                ),
                                                void setTimeout(function () {
                                                    o.parseDecideResponse(e)
                                                }, 500)
                                            )
                                        if (
                                            (this.instance.toolbar.afterDecideResponse(e),
                                            (t = this.instance.sessionRecording) === null ||
                                                t === void 0 ||
                                                t.afterDecideResponse(e),
                                            be.afterDecideResponse(e, this.instance),
                                            (r = this.instance.webPerformance) === null ||
                                                r === void 0 ||
                                                r.afterDecideResponse(e),
                                            (i = this.instance.exceptionAutocapture) === null ||
                                                i === void 0 ||
                                                i.afterDecideResponse(e),
                                            this.instance.get_config('advanced_disable_feature_flags_on_first_load') ||
                                                this.instance.featureFlags.receivedFeatureFlags(e),
                                            (this.instance.compression = {}),
                                            e.supportedCompression && !this.instance.get_config('disable_compression'))
                                        ) {
                                            var s,
                                                u = {},
                                                a = pe(e.supportedCompression)
                                            try {
                                                for (a.s(); !(s = a.n()).done; ) u[s.value] = !0
                                            } catch (p) {
                                                a.e(p)
                                            } finally {
                                                a.f()
                                            }
                                            this.instance.compression = u
                                        }
                                        if (e.siteApps)
                                            if (this.instance.get_config('opt_in_site_apps')) {
                                                var c,
                                                    l = this.instance.get_config('api_host'),
                                                    d = pe(e.siteApps)
                                                try {
                                                    var h = function () {
                                                        var p = c.value,
                                                            g = p.id,
                                                            f = p.url,
                                                            R = [
                                                                l,
                                                                l[l.length - 1] === '/' && f[0] === '/'
                                                                    ? f.substring(1)
                                                                    : f,
                                                            ].join('')
                                                        ;(window['__$$ph_site_app_'.concat(g)] = o.instance),
                                                            bt(R, function (N) {
                                                                N &&
                                                                    console.error(
                                                                        'Error while initializing PostHog app with config id '.concat(
                                                                            g
                                                                        ),
                                                                        N
                                                                    )
                                                            })
                                                    }
                                                    for (d.s(); !(c = d.n()).done; ) h()
                                                } catch (p) {
                                                    d.e(p)
                                                } finally {
                                                    d.f()
                                                }
                                            } else
                                                e.siteApps.length > 0 &&
                                                    console.error(
                                                        'PostHog site apps are disabled. Enable the "opt_in_site_apps" config to proceed.'
                                                    )
                                    } else console.error('Failed to fetch feature flags from PostHog.')
                                },
                            },
                        ]),
                        n
                    )
                })(),
                $r = ['https://app.posthog.com', 'https://eu.posthog.com'],
                Ar = ['source'],
                Mr = (function () {
                    function n(e) {
                        b(this, n), (this.instance = e)
                    }
                    return (
                        F(n, [
                            {
                                key: 'afterDecideResponse',
                                value: function (e) {
                                    var t =
                                        e.toolbarParams ||
                                        e.editorParams ||
                                        (e.toolbarVersion ? { toolbarVersion: e.toolbarVersion } : {})
                                    e.isAuthenticated &&
                                        t.toolbarVersion &&
                                        t.toolbarVersion.indexOf('toolbar') === 0 &&
                                        this.loadToolbar(_({}, t))
                                },
                            },
                            {
                                key: 'maybeLoadToolbar',
                                value: function () {
                                    var e =
                                            arguments.length > 0 && arguments[0] !== void 0
                                                ? arguments[0]
                                                : window.location,
                                        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
                                        r =
                                            arguments.length > 2 && arguments[2] !== void 0
                                                ? arguments[2]
                                                : window.history
                                    try {
                                        if (!t) {
                                            try {
                                                window.localStorage.setItem('test', 'test'),
                                                    window.localStorage.removeItem('test')
                                            } catch {
                                                return !1
                                            }
                                            t = window.localStorage
                                        }
                                        var i,
                                            o = nn(e.hash, '__posthog') || nn(e.hash, 'state'),
                                            s = o ? JSON.parse(decodeURIComponent(o)) : null
                                        return (
                                            s && s.action === 'ph_authorize'
                                                ? (((i = s).source = 'url'),
                                                  i &&
                                                      Object.keys(i).length > 0 &&
                                                      (s.desiredHash
                                                          ? (e.hash = s.desiredHash)
                                                          : r
                                                          ? r.replaceState('', document.title, e.pathname + e.search)
                                                          : (e.hash = '')))
                                                : (((i = JSON.parse(
                                                      t.getItem('_postHogToolbarParams') || '{}'
                                                  )).source = 'localstorage'),
                                                  delete i.userIntent),
                                            !(!i.token || this.instance.get_config('token') !== i.token) &&
                                                (this.loadToolbar(i), !0)
                                        )
                                    } catch {
                                        return !1
                                    }
                                },
                            },
                            {
                                key: 'loadToolbar',
                                value: function (e) {
                                    var t = this
                                    if (window._postHogToolbarLoaded) return !1
                                    window._postHogToolbarLoaded = !0
                                    var r = this.instance.get_config('api_host'),
                                        i = 3e4 * Math.floor(Date.now() / 3e4),
                                        o = ''
                                            .concat(r)
                                            .concat(r.endsWith('/') ? '' : '/', 'static/toolbar.js?_ts=')
                                            .concat(i),
                                        s =
                                            !$r.includes(this.instance.get_config('api_host')) &&
                                            this.instance.get_config('advanced_disable_toolbar_metrics'),
                                        u = _(
                                            _({ token: this.instance.get_config('token') }, e),
                                            {},
                                            { apiURL: r },
                                            s ? { instrument: !1 } : {}
                                        )
                                    u.source
                                    var a = fe(u, Ar)
                                    return (
                                        window.localStorage.setItem('_postHogToolbarParams', JSON.stringify(a)),
                                        bt(o, function (c) {
                                            c
                                                ? E.error('Failed to load toolbar', c)
                                                : (window.ph_load_toolbar || window.ph_load_editor)(u, t.instance)
                                        }),
                                        Be(window, 'turbolinks:load', function () {
                                            ;(window._postHogToolbarLoaded = !1), t.loadToolbar(u)
                                        }),
                                        !0
                                    )
                                },
                            },
                            {
                                key: '_loadEditor',
                                value: function (e) {
                                    return this.loadToolbar(e)
                                },
                            },
                            {
                                key: 'maybeLoadEditor',
                                value: function () {
                                    var e =
                                            arguments.length > 0 && arguments[0] !== void 0
                                                ? arguments[0]
                                                : window.location,
                                        t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : void 0,
                                        r =
                                            arguments.length > 2 && arguments[2] !== void 0
                                                ? arguments[2]
                                                : window.history
                                    return this.maybeLoadToolbar(e, t, r)
                                },
                            },
                        ]),
                        n
                    )
                })(),
                Cr = '__ph_opt_in_out_'
            function Dr(n, e) {
                kn(!0, n, e)
            }
            function Nr(n, e) {
                kn(!1, n, e)
            }
            function jr(n, e) {
                return wn(n, e) === '1'
            }
            function bn(n, e) {
                return (
                    !!(function (t) {
                        if (t && t.respectDnt) {
                            var r = (t && t.window) || v,
                                i = r.navigator || {},
                                o = !1
                            return (
                                w([i.doNotTrack, i.msDoNotTrack, r.doNotTrack], function (s) {
                                    k([!0, 1, '1', 'yes'], s) && (o = !0)
                                }),
                                o
                            )
                        }
                        return !1
                    })(e) || wn(n, e) === '0'
                )
            }
            function Hr(n, e) {
                Tt((e = e || {})).remove($t(n, e), !!e.crossSubdomainCookie)
            }
            function Tt(n) {
                return (n = n || {}).persistenceType === 'localStorage'
                    ? $
                    : n.persistenceType === 'localStorage+cookie'
                    ? Rt
                    : ge
            }
            function $t(n, e) {
                return ((e = e || {}).persistencePrefix || Cr) + n
            }
            function wn(n, e) {
                return Tt(e).get($t(n, e))
            }
            function kn(n, e, t) {
                Kt(e) && e.length
                    ? (Tt((t = t || {})).set(
                          $t(e, t),
                          n ? 1 : 0,
                          or(t.cookieExpiration) ? t.cookieExpiration : null,
                          t.crossSubdomainCookie,
                          t.secureCookie
                      ),
                      t.capture &&
                          n &&
                          t.capture(t.captureEventName || '$opt_in', t.captureProperties || {}, { send_instantly: !0 }))
                    : console.error('gdpr.' + (n ? 'optIn' : 'optOut') + ' called with an invalid token')
            }
            var Sn = (function () {
                    function n() {
                        var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 3e3
                        b(this, n),
                            (this.isPolling = !0),
                            (this._event_queue = []),
                            (this._empty_queue_count = 0),
                            (this._poller = void 0),
                            (this._pollInterval = e)
                    }
                    return (
                        F(n, [
                            {
                                key: 'setPollInterval',
                                value: function (e) {
                                    ;(this._pollInterval = e), this.isPolling && this.poll()
                                },
                            },
                            { key: 'poll', value: function () {} },
                            { key: 'unload', value: function () {} },
                            {
                                key: 'getTime',
                                value: function () {
                                    return new Date().getTime()
                                },
                            },
                        ]),
                        n
                    )
                })(),
                Lr = (function (n) {
                    Qe(t, n)
                    var e = ne(t)
                    function t(r) {
                        var i,
                            o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 3e3
                        return b(this, t), ((i = e.call(this, o)).handlePollRequest = r), i
                    }
                    return (
                        F(t, [
                            {
                                key: 'enqueue',
                                value: function (r, i, o) {
                                    this._event_queue.push({ url: r, data: i, options: o }),
                                        this.isPolling || ((this.isPolling = !0), this.poll())
                                },
                            },
                            {
                                key: 'poll',
                                value: function () {
                                    var r = this
                                    clearTimeout(this._poller),
                                        (this._poller = setTimeout(function () {
                                            if (r._event_queue.length > 0) {
                                                var i = r.formatQueue(),
                                                    o = function (u) {
                                                        var a = i[u],
                                                            c = a.url,
                                                            l = a.data,
                                                            d = a.options
                                                        w(l, function (h, p) {
                                                            ;(l[p].offset = Math.abs(l[p].timestamp - r.getTime())),
                                                                delete l[p].timestamp
                                                        }),
                                                            r.handlePollRequest(c, l, d)
                                                    }
                                                for (var s in i) o(s)
                                                ;(r._event_queue.length = 0), (r._empty_queue_count = 0)
                                            } else r._empty_queue_count++
                                            r._empty_queue_count > 4 &&
                                                ((r.isPolling = !1), (r._empty_queue_count = 0)),
                                                r.isPolling && r.poll()
                                        }, this._pollInterval))
                                },
                            },
                            {
                                key: 'unload',
                                value: function () {
                                    var r = this
                                    clearTimeout(this._poller)
                                    var i = this._event_queue.length > 0 ? this.formatQueue() : {}
                                    this._event_queue.length = 0
                                    var o = Object.values(i)
                                    ;[]
                                        .concat(
                                            Ye(
                                                o.filter(function (s) {
                                                    return s.url.indexOf('/e') === 0
                                                })
                                            ),
                                            Ye(
                                                o.filter(function (s) {
                                                    return s.url.indexOf('/e') !== 0
                                                })
                                            )
                                        )
                                        .map(function (s) {
                                            var u = s.url,
                                                a = s.data,
                                                c = s.options
                                            r.handlePollRequest(u, a, _(_({}, c), {}, { transport: 'sendBeacon' }))
                                        })
                                },
                            },
                            {
                                key: 'formatQueue',
                                value: function () {
                                    var r = {}
                                    return (
                                        w(this._event_queue, function (i) {
                                            var o = i.url,
                                                s = i.data,
                                                u = i.options,
                                                a = (u ? u._batchKey : null) || o
                                            r[a] === void 0 && (r[a] = { data: [], url: o, options: u }),
                                                u &&
                                                    r[a].options &&
                                                    r[a].options._metrics &&
                                                    !r[a].options._metrics.rrweb_full_snapshot &&
                                                    (r[a].options._metrics.rrweb_full_snapshot =
                                                        u._metrics.rrweb_full_snapshot),
                                                r[a].data.push(s)
                                        }),
                                        r
                                    )
                                },
                            },
                        ]),
                        t
                    )
                })(Sn),
                Q = Uint8Array,
                B = Uint16Array,
                De = Uint32Array,
                At = new Q([
                    0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 0, 0, 0, 0,
                ]),
                Mt = new Q([
                    0, 0, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10, 10, 11, 11, 12, 12, 13, 13, 0,
                    0,
                ]),
                Pn = new Q([16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15]),
                Fn = function (n, e) {
                    for (var t = new B(31), r = 0; r < 31; ++r) t[r] = e += 1 << n[r - 1]
                    var i = new De(t[30])
                    for (r = 1; r < 30; ++r) for (var o = t[r]; o < t[r + 1]; ++o) i[o] = ((o - t[r]) << 5) | r
                    return [t, i]
                },
                En = Fn(At, 2),
                Br = En[0],
                Ct = En[1]
            ;(Br[28] = 258), (Ct[258] = 28)
            for (var xn = Fn(Mt, 0)[1], Dt = new B(32768), P = 0; P < 32768; ++P) {
                var Oe = ((43690 & P) >>> 1) | ((21845 & P) << 1)
                ;(Oe = ((61680 & (Oe = ((52428 & Oe) >>> 2) | ((13107 & Oe) << 2))) >>> 4) | ((3855 & Oe) << 4)),
                    (Dt[P] = (((65280 & Oe) >>> 8) | ((255 & Oe) << 8)) >>> 1)
            }
            var Ue = function (n, e, t) {
                    for (var r = n.length, i = 0, o = new B(e); i < r; ++i) ++o[n[i] - 1]
                    var s,
                        u = new B(e)
                    for (i = 0; i < e; ++i) u[i] = (u[i - 1] + o[i - 1]) << 1
                    if (t) {
                        s = new B(1 << e)
                        var a = 15 - e
                        for (i = 0; i < r; ++i)
                            if (n[i])
                                for (
                                    var c = (i << 4) | n[i],
                                        l = e - n[i],
                                        d = u[n[i] - 1]++ << l,
                                        h = d | ((1 << l) - 1);
                                    d <= h;
                                    ++d
                                )
                                    s[Dt[d] >>> a] = c
                    } else for (s = new B(r), i = 0; i < r; ++i) s[i] = Dt[u[n[i] - 1]++] >>> (15 - n[i])
                    return s
                },
                Ie = new Q(288)
            for (P = 0; P < 144; ++P) Ie[P] = 8
            for (P = 144; P < 256; ++P) Ie[P] = 9
            for (P = 256; P < 280; ++P) Ie[P] = 7
            for (P = 280; P < 288; ++P) Ie[P] = 8
            var rt = new Q(32)
            for (P = 0; P < 32; ++P) rt[P] = 5
            var Re,
                qr = Ue(Ie, 9, 0),
                Ur = Ue(rt, 5, 0),
                On = function (n) {
                    return ((n / 8) >> 0) + (7 & n && 1)
                },
                In = function (n, e, t) {
                    ;(e == null || e < 0) && (e = 0), (t == null || t > n.length) && (t = n.length)
                    var r = new (n instanceof B ? B : n instanceof De ? De : Q)(t - e)
                    return r.set(n.subarray(e, t)), r
                },
                _e = function (n, e, t) {
                    t <<= 7 & e
                    var r = (e / 8) >> 0
                    ;(n[r] |= t), (n[r + 1] |= t >>> 8)
                },
                Ve = function (n, e, t) {
                    t <<= 7 & e
                    var r = (e / 8) >> 0
                    ;(n[r] |= t), (n[r + 1] |= t >>> 8), (n[r + 2] |= t >>> 16)
                },
                Nt = function (n, e) {
                    for (var t = [], r = 0; r < n.length; ++r) n[r] && t.push({ s: r, f: n[r] })
                    var i = t.length,
                        o = t.slice()
                    if (!i) return [new Q(0), 0]
                    if (i == 1) {
                        var s = new Q(t[0].s + 1)
                        return (s[t[0].s] = 1), [s, 1]
                    }
                    t.sort(function (S, O) {
                        return S.f - O.f
                    }),
                        t.push({ s: -1, f: 25001 })
                    var u = t[0],
                        a = t[1],
                        c = 0,
                        l = 1,
                        d = 2
                    for (t[0] = { s: -1, f: u.f + a.f, l: u, r: a }; l != i - 1; )
                        (u = t[t[c].f < t[d].f ? c++ : d++]),
                            (a = t[c != l && t[c].f < t[d].f ? c++ : d++]),
                            (t[l++] = { s: -1, f: u.f + a.f, l: u, r: a })
                    var h = o[0].s
                    for (r = 1; r < i; ++r) o[r].s > h && (h = o[r].s)
                    var p = new B(h + 1),
                        g = Vr(t[l - 1], p, 0)
                    if (g > e) {
                        r = 0
                        var f = 0,
                            R = g - e,
                            N = 1 << R
                        for (
                            o.sort(function (S, O) {
                                return p[O.s] - p[S.s] || S.f - O.f
                            });
                            r < i;
                            ++r
                        ) {
                            var W = o[r].s
                            if (!(p[W] > e)) break
                            ;(f += N - (1 << (g - p[W]))), (p[W] = e)
                        }
                        for (f >>>= R; f > 0; ) {
                            var K = o[r].s
                            p[K] < e ? (f -= 1 << (e - p[K]++ - 1)) : ++r
                        }
                        for (; r >= 0 && f; --r) {
                            var x = o[r].s
                            p[x] == e && (--p[x], ++f)
                        }
                        g = e
                    }
                    return [new Q(p), g]
                },
                Vr = function n(e, t, r) {
                    return e.s == -1 ? Math.max(n(e.l, t, r + 1), n(e.r, t, r + 1)) : (t[e.s] = r)
                },
                Rn = function (n) {
                    for (var e = n.length; e && !n[--e]; );
                    for (
                        var t = new B(++e),
                            r = 0,
                            i = n[0],
                            o = 1,
                            s = function (a) {
                                t[r++] = a
                            },
                            u = 1;
                        u <= e;
                        ++u
                    )
                        if (n[u] == i && u != e) ++o
                        else {
                            if (!i && o > 2) {
                                for (; o > 138; o -= 138) s(32754)
                                o > 2 && (s(o > 10 ? ((o - 11) << 5) | 28690 : ((o - 3) << 5) | 12305), (o = 0))
                            } else if (o > 3) {
                                for (s(i), --o; o > 6; o -= 6) s(8304)
                                o > 2 && (s(((o - 3) << 5) | 8208), (o = 0))
                            }
                            for (; o--; ) s(i)
                            ;(o = 1), (i = n[u])
                        }
                    return [t.subarray(0, r), e]
                },
                We = function (n, e) {
                    for (var t = 0, r = 0; r < e.length; ++r) t += n[r] * e[r]
                    return t
                },
                it = function (n, e, t) {
                    var r = t.length,
                        i = On(e + 2)
                    ;(n[i] = 255 & r), (n[i + 1] = r >>> 8), (n[i + 2] = 255 ^ n[i]), (n[i + 3] = 255 ^ n[i + 1])
                    for (var o = 0; o < r; ++o) n[i + o + 4] = t[o]
                    return 8 * (i + 4 + r)
                },
                Tn = function (n, e, t, r, i, o, s, u, a, c, l) {
                    _e(e, l++, t), ++i[256]
                    for (
                        var d = Nt(i, 15),
                            h = d[0],
                            p = d[1],
                            g = Nt(o, 15),
                            f = g[0],
                            R = g[1],
                            N = Rn(h),
                            W = N[0],
                            K = N[1],
                            x = Rn(f),
                            S = x[0],
                            O = x[1],
                            I = new B(19),
                            y = 0;
                        y < W.length;
                        ++y
                    )
                        I[31 & W[y]]++
                    for (y = 0; y < S.length; ++y) I[31 & S[y]]++
                    for (var Z = Nt(I, 7), Y = Z[0], ue = Z[1], A = 19; A > 4 && !Y[Pn[A - 1]]; --A);
                    var ve,
                        ce,
                        le,
                        Ne,
                        we = (c + 5) << 3,
                        $e = We(i, Ie) + We(o, rt) + s,
                        de = We(i, h) + We(o, f) + s + 14 + 3 * A + We(I, Y) + (2 * I[16] + 3 * I[17] + 7 * I[18])
                    if (we <= $e && we <= de) return it(e, l, n.subarray(a, a + c))
                    if ((_e(e, l, 1 + (de < $e)), (l += 2), de < $e)) {
                        ;(ve = Ue(h, p, 0)), (ce = h), (le = Ue(f, R, 0)), (Ne = f)
                        var ke = Ue(Y, ue, 0)
                        for (_e(e, l, K - 257), _e(e, l + 5, O - 1), _e(e, l + 10, A - 4), l += 14, y = 0; y < A; ++y)
                            _e(e, l + 3 * y, Y[Pn[y]])
                        l += 3 * A
                        for (var je = [W, S], q = 0; q < 2; ++q) {
                            var ee = je[q]
                            for (y = 0; y < ee.length; ++y) {
                                var J = 31 & ee[y]
                                _e(e, l, ke[J]),
                                    (l += Y[J]),
                                    J > 15 && (_e(e, l, (ee[y] >>> 5) & 127), (l += ee[y] >>> 12))
                            }
                        }
                    } else (ve = qr), (ce = Ie), (le = Ur), (Ne = rt)
                    for (y = 0; y < u; ++y)
                        if (r[y] > 255) {
                            ;(J = (r[y] >>> 18) & 31),
                                Ve(e, l, ve[J + 257]),
                                (l += ce[J + 257]),
                                J > 7 && (_e(e, l, (r[y] >>> 23) & 31), (l += At[J]))
                            var He = 31 & r[y]
                            Ve(e, l, le[He]), (l += Ne[He]), He > 3 && (Ve(e, l, (r[y] >>> 5) & 8191), (l += Mt[He]))
                        } else Ve(e, l, ve[r[y]]), (l += ce[r[y]])
                    return Ve(e, l, ve[256]), l + ce[256]
                },
                Wr = new De([65540, 131080, 131088, 131104, 262176, 1048704, 1048832, 2114560, 2117632]),
                zr = new Q(0),
                Qr = (function () {
                    for (var n = new De(256), e = 0; e < 256; ++e) {
                        for (var t = e, r = 9; --r; ) t = (1 & t && 3988292384) ^ (t >>> 1)
                        n[e] = t
                    }
                    return n
                })(),
                Yr = function () {
                    var n = 4294967295
                    return {
                        p: function (e) {
                            for (var t = n, r = 0; r < e.length; ++r) t = Qr[(255 & t) ^ e[r]] ^ (t >>> 8)
                            n = t
                        },
                        d: function () {
                            return 4294967295 ^ n
                        },
                    }
                },
                Jr = function (n, e, t, r, i) {
                    return (function (o, s, u, a, c, l) {
                        var d = o.length,
                            h = new Q(a + d + 5 * (1 + Math.floor(d / 7e3)) + c),
                            p = h.subarray(a, h.length - c),
                            g = 0
                        if (!s || d < 8)
                            for (var f = 0; f <= d; f += 65535) {
                                var R = f + 65535
                                R < d
                                    ? (g = it(p, g, o.subarray(f, R)))
                                    : ((p[f] = l), (g = it(p, g, o.subarray(f, d))))
                            }
                        else {
                            for (
                                var N = Wr[s - 1],
                                    W = N >>> 13,
                                    K = 8191 & N,
                                    x = (1 << u) - 1,
                                    S = new B(32768),
                                    O = new B(x + 1),
                                    I = Math.ceil(u / 3),
                                    y = 2 * I,
                                    Z = function (zt) {
                                        return (o[zt] ^ (o[zt + 1] << I) ^ (o[zt + 2] << y)) & x
                                    },
                                    Y = new De(25e3),
                                    ue = new B(288),
                                    A = new B(32),
                                    ve = 0,
                                    ce = 0,
                                    le = ((f = 0), 0),
                                    Ne = 0,
                                    we = 0;
                                f < d;
                                ++f
                            ) {
                                var $e = Z(f),
                                    de = 32767 & f,
                                    ke = O[$e]
                                if (((S[de] = ke), (O[$e] = de), Ne <= f)) {
                                    var je = d - f
                                    if ((ve > 7e3 || le > 24576) && je > 423) {
                                        ;(g = Tn(o, p, 0, Y, ue, A, ce, le, we, f - we, g)),
                                            (le = ve = ce = 0),
                                            (we = f)
                                        for (var q = 0; q < 286; ++q) ue[q] = 0
                                        for (q = 0; q < 30; ++q) A[q] = 0
                                    }
                                    var ee = 2,
                                        J = 0,
                                        He = K,
                                        Se = (de - ke) & 32767
                                    if (je > 2 && $e == Z(f - Se))
                                        for (
                                            var Oi = Math.min(W, je) - 1,
                                                Ii = Math.min(32767, f),
                                                Ri = Math.min(258, je);
                                            Se <= Ii && --He && de != ke;

                                        ) {
                                            if (o[f + ee] == o[f + ee - Se]) {
                                                for (var Pe = 0; Pe < Ri && o[f + Pe] == o[f + Pe - Se]; ++Pe);
                                                if (Pe > ee) {
                                                    if (((ee = Pe), (J = Se), Pe > Oi)) break
                                                    var Ti = Math.min(Se, Pe - 2),
                                                        Jn = 0
                                                    for (q = 0; q < Ti; ++q) {
                                                        var Wt = (f - Se + q + 32768) & 32767,
                                                            Gn = (Wt - S[Wt] + 32768) & 32767
                                                        Gn > Jn && ((Jn = Gn), (ke = Wt))
                                                    }
                                                }
                                            }
                                            Se += ((de = ke) - (ke = S[de]) + 32768) & 32767
                                        }
                                    if (J) {
                                        Y[le++] = 268435456 | (Ct[ee] << 18) | xn[J]
                                        var Xn = 31 & Ct[ee],
                                            Kn = 31 & xn[J]
                                        ;(ce += At[Xn] + Mt[Kn]), ++ue[257 + Xn], ++A[Kn], (Ne = f + ee), ++ve
                                    } else (Y[le++] = o[f]), ++ue[o[f]]
                                }
                            }
                            ;(g = Tn(o, p, l, Y, ue, A, ce, le, we, f - we, g)), l || (g = it(p, g, zr))
                        }
                        return In(h, 0, a + On(g) + c)
                    })(
                        n,
                        e.level == null ? 6 : e.level,
                        e.mem == null ? Math.ceil(1.5 * Math.max(8, Math.min(13, Math.log(n.length)))) : 12 + e.mem,
                        t,
                        r,
                        !i
                    )
                },
                jt = function (n, e, t) {
                    for (; t; ++e) (n[e] = t), (t >>>= 8)
                },
                Gr = function (n, e) {
                    var t = e.filename
                    if (
                        ((n[0] = 31),
                        (n[1] = 139),
                        (n[2] = 8),
                        (n[8] = e.level < 2 ? 4 : e.level == 9 ? 2 : 0),
                        (n[9] = 3),
                        e.mtime != 0 && jt(n, 4, Math.floor(new Date(e.mtime || Date.now()) / 1e3)),
                        t)
                    ) {
                        n[3] = 8
                        for (var r = 0; r <= t.length; ++r) n[r + 10] = t.charCodeAt(r)
                    }
                },
                Xr = function (n) {
                    return 10 + ((n.filename && n.filename.length + 1) || 0)
                }
            function Kr(n, e) {
                e === void 0 && (e = {})
                var t = Yr(),
                    r = n.length
                t.p(n)
                var i = Jr(n, e, Xr(e), 8),
                    o = i.length
                return Gr(i, e), jt(i, o - 8, t.d()), jt(i, o - 4, r), i
            }
            function Zr(n, e) {
                var t = n.length
                if (!e && typeof TextEncoder < 'u') return new TextEncoder().encode(n)
                for (
                    var r = new Q(n.length + (n.length >>> 1)),
                        i = 0,
                        o = function (c) {
                            r[i++] = c
                        },
                        s = 0;
                    s < t;
                    ++s
                ) {
                    if (i + 5 > r.length) {
                        var u = new Q(i + 8 + ((t - s) << 1))
                        u.set(r), (r = u)
                    }
                    var a = n.charCodeAt(s)
                    a < 128 || e
                        ? o(a)
                        : a < 2048
                        ? (o(192 | (a >>> 6)), o(128 | (63 & a)))
                        : a > 55295 && a < 57344
                        ? (o(240 | ((a = (65536 + (1047552 & a)) | (1023 & n.charCodeAt(++s))) >>> 18)),
                          o(128 | ((a >>> 12) & 63)),
                          o(128 | ((a >>> 6) & 63)),
                          o(128 | (63 & a)))
                        : (o(224 | (a >>> 12)), o(128 | ((a >>> 6) & 63)), o(128 | (63 & a)))
                }
                return In(r, 0, i)
            }
            ;(function (n) {
                ;(n.GZipJS = 'gzip-js'), (n.Base64 = 'base64')
            })(Re || (Re = {}))
            var ei = function (n, e, t) {
                    var r = e || {}
                    ;(r.ip = t.ip ? 1 : 0), (r._ = new Date().getTime().toString()), (r.ver = G.LIB_VERSION)
                    var i = n.split('?')
                    if (i.length > 1) {
                        var o,
                            s = pe(i[1].split('&'))
                        try {
                            for (s.s(); !(o = s.n()).done; ) {
                                var u = o.value.split('=')[0]
                                r[u] && delete r[u]
                            }
                        } catch (c) {
                            s.e(c)
                        } finally {
                            s.f()
                        }
                    }
                    var a = n.indexOf('?') > -1 ? '&' : '?'
                    return (
                        n +
                        a +
                        (function (c) {
                            var l,
                                d,
                                h = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : '&',
                                p = []
                            return (
                                w(c, function (g, f) {
                                    ;(l = encodeURIComponent(g.toString())),
                                        (d = encodeURIComponent(f)),
                                        (p[p.length] = d + '=' + l)
                                }),
                                p.join(h)
                            )
                        })(r)
                    )
                },
                Ht = function n(e, t) {
                    if (t.blob && e.buffer) return new Blob([e.buffer], { type: 'text/plain' })
                    if (t.sendBeacon || t.blob) {
                        var r = n(e, { method: 'POST' })
                        return new Blob([r], { type: 'application/x-www-form-urlencoded' })
                    }
                    if (t.method !== 'POST') return null
                    var i, o
                    return (
                        (i =
                            Array.isArray(e) || ((o = e), Object.prototype.toString.call(o) === '[object Uint8Array]')
                                ? 'data=' + encodeURIComponent(e)
                                : 'data=' + encodeURIComponent(e.data)),
                        'compression' in e && e.compression && (i += '&compression=' + e.compression),
                        i
                    )
                },
                $n = function (n) {
                    var e = n.url,
                        t = n.data,
                        r = n.headers,
                        i = n.options,
                        o = n.callback,
                        s = n.retriesPerformedSoFar,
                        u = n.retryQueue,
                        a = n.onXHRError,
                        c = n.timeout,
                        l = c === void 0 ? 1e4 : c,
                        d = n.onRateLimited,
                        h = new XMLHttpRequest()
                    h.open(i.method || 'GET', e, !0)
                    var p = Ht(t, i)
                    w(r, function (g, f) {
                        h.setRequestHeader(f, g)
                    }),
                        i.method !== 'POST' ||
                            i.blob ||
                            h.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'),
                        (h.timeout = l),
                        (h.withCredentials = !0),
                        (h.onreadystatechange = function () {
                            if (h.readyState === 4)
                                if (h.status === 200) {
                                    if (o) {
                                        var g
                                        try {
                                            g = JSON.parse(h.responseText)
                                        } catch (f) {
                                            return void E.error(f)
                                        }
                                        o(g)
                                    }
                                } else
                                    typeof a == 'function' && a(h),
                                        [401, 403, 404, 500].indexOf(h.status) < 0 &&
                                            u.enqueue({
                                                url: e,
                                                data: t,
                                                options: i,
                                                headers: r,
                                                retriesPerformedSoFar: (s || 0) + 1,
                                                callback: o,
                                            }),
                                        h.status === 429 && d?.(h),
                                        o && o({ status: 0 })
                        }),
                        h.send(p)
                },
                ti = 18e5,
                ni = (function (n) {
                    Qe(t, n)
                    var e = ne(t)
                    function t(r, i) {
                        var o
                        return (
                            b(this, t),
                            ((o = e.call(this)).isPolling = !1),
                            (o.queue = []),
                            (o.areWeOnline = !0),
                            (o.onXHRError = r),
                            (o.rateLimiter = i),
                            typeof window < 'u' &&
                                'onLine' in window.navigator &&
                                ((o.areWeOnline = window.navigator.onLine),
                                window.addEventListener('online', function () {
                                    o._handleWeAreNowOnline()
                                }),
                                window.addEventListener('offline', function () {
                                    o.areWeOnline = !1
                                })),
                            o
                        )
                    }
                    return (
                        F(t, [
                            {
                                key: 'enqueue',
                                value: function (r) {
                                    var i = r.retriesPerformedSoFar || 0
                                    if (!(i >= 10)) {
                                        var o = (function (u) {
                                                var a = 3e3 * Math.pow(2, u),
                                                    c = a / 2,
                                                    l = Math.min(ti, a),
                                                    d = (Math.random() - 0.5) * (l - c)
                                                return Math.ceil(l + d)
                                            })(i),
                                            s = new Date(Date.now() + o)
                                        this.queue.push({ retryAt: s, requestData: r }),
                                            console.warn('Enqueued failed request for retry in '.concat(o)),
                                            this.isPolling || ((this.isPolling = !0), this.poll())
                                    }
                                },
                            },
                            {
                                key: 'poll',
                                value: function () {
                                    var r = this
                                    this._poller && clearTimeout(this._poller),
                                        (this._poller = setTimeout(function () {
                                            r.areWeOnline && r.queue.length > 0 && r.flush(), r.poll()
                                        }, this._pollInterval))
                                },
                            },
                            {
                                key: 'flush',
                                value: function () {
                                    var r = new Date(Date.now()),
                                        i = this.queue.filter(function (a) {
                                            return a.retryAt < r
                                        })
                                    if (i.length > 0) {
                                        this.queue = this.queue.filter(function (a) {
                                            return a.retryAt >= r
                                        })
                                        var o,
                                            s = pe(i)
                                        try {
                                            for (s.s(); !(o = s.n()).done; ) {
                                                var u = o.value.requestData
                                                this._executeXhrRequest(u)
                                            }
                                        } catch (a) {
                                            s.e(a)
                                        } finally {
                                            s.f()
                                        }
                                    }
                                },
                            },
                            {
                                key: 'unload',
                                value: function () {
                                    this._poller && (clearTimeout(this._poller), (this._poller = void 0))
                                    var r,
                                        i = pe(this.queue)
                                    try {
                                        for (i.s(); !(r = i.n()).done; ) {
                                            var o = r.value.requestData,
                                                s = o.url,
                                                u = o.data,
                                                a = o.options
                                            if (this.rateLimiter.isRateLimited(a._batchKey))
                                                G.DEBUG &&
                                                    console.warn(
                                                        '[PostHog RetryQueue] is quota limited. Dropping request.'
                                                    )
                                            else
                                                try {
                                                    window.navigator.sendBeacon(
                                                        s,
                                                        Ht(u, _(_({}, a), {}, { sendBeacon: !0 }))
                                                    )
                                                } catch (c) {
                                                    G.DEBUG && console.error(c)
                                                }
                                        }
                                    } catch (c) {
                                        i.e(c)
                                    } finally {
                                        i.f()
                                    }
                                    this.queue = []
                                },
                            },
                            {
                                key: '_executeXhrRequest',
                                value: function (r) {
                                    var i = r.url,
                                        o = r.data,
                                        s = r.options,
                                        u = r.headers,
                                        a = r.callback,
                                        c = r.retriesPerformedSoFar
                                    this.rateLimiter.isRateLimited(s._batchKey)
                                        ? G.DEBUG &&
                                          console.warn('[PostHog RetryQueue] in quota limited mode. Dropping request.')
                                        : $n({
                                              url: i,
                                              data: o || {},
                                              options: s || {},
                                              headers: u || {},
                                              retriesPerformedSoFar: c || 0,
                                              callback: a,
                                              retryQueue: this,
                                              onXHRError: this.onXHRError,
                                              onRateLimited: this.rateLimiter.on429Response,
                                          })
                                },
                            },
                            {
                                key: '_handleWeAreNowOnline',
                                value: function () {
                                    ;(this.areWeOnline = !0), this.flush()
                                },
                            },
                        ]),
                        t
                    )
                })(Sn)
            Math.trunc ||
                (Math.trunc = function (n) {
                    return n < 0 ? Math.ceil(n) : Math.floor(n)
                }),
                Number.isInteger ||
                    (Number.isInteger = function (n) {
                        return typeof n == 'number' && isFinite(n) && Math.floor(n) === n
                    })
            var An = '0123456789abcdef',
                ri = (function () {
                    function n(e) {
                        if ((b(this, n), (this.bytes = e), e.length !== 16)) throw new TypeError('not 128-bit length')
                    }
                    return (
                        F(
                            n,
                            [
                                {
                                    key: 'toString',
                                    value: function () {
                                        for (var e = '', t = 0; t < this.bytes.length; t++)
                                            (e = e + An.charAt(this.bytes[t] >>> 4) + An.charAt(15 & this.bytes[t])),
                                                (t !== 3 && t !== 5 && t !== 7 && t !== 9) || (e += '-')
                                        if (e.length !== 36) throw new Error('Invalid UUIDv7 was generated')
                                        return e
                                    },
                                },
                                {
                                    key: 'clone',
                                    value: function () {
                                        return new n(this.bytes.slice(0))
                                    },
                                },
                                {
                                    key: 'equals',
                                    value: function (e) {
                                        return this.compareTo(e) === 0
                                    },
                                },
                                {
                                    key: 'compareTo',
                                    value: function (e) {
                                        for (var t = 0; t < 16; t++) {
                                            var r = this.bytes[t] - e.bytes[t]
                                            if (r !== 0) return Math.sign(r)
                                        }
                                        return 0
                                    },
                                },
                            ],
                            [
                                {
                                    key: 'fromFieldsV7',
                                    value: function (e, t, r, i) {
                                        if (
                                            !Number.isInteger(e) ||
                                            !Number.isInteger(t) ||
                                            !Number.isInteger(r) ||
                                            !Number.isInteger(i) ||
                                            e < 0 ||
                                            t < 0 ||
                                            r < 0 ||
                                            i < 0 ||
                                            e > 0xffffffffffff ||
                                            t > 4095 ||
                                            r > 1073741823 ||
                                            i > 4294967295
                                        )
                                            throw new RangeError('invalid field value')
                                        var o = new Uint8Array(16)
                                        return (
                                            (o[0] = e / Math.pow(2, 40)),
                                            (o[1] = e / Math.pow(2, 32)),
                                            (o[2] = e / Math.pow(2, 24)),
                                            (o[3] = e / Math.pow(2, 16)),
                                            (o[4] = e / Math.pow(2, 8)),
                                            (o[5] = e),
                                            (o[6] = 112 | (t >>> 8)),
                                            (o[7] = t),
                                            (o[8] = 128 | (r >>> 24)),
                                            (o[9] = r >>> 16),
                                            (o[10] = r >>> 8),
                                            (o[11] = r),
                                            (o[12] = i >>> 24),
                                            (o[13] = i >>> 16),
                                            (o[14] = i >>> 8),
                                            (o[15] = i),
                                            new n(o)
                                        )
                                    },
                                },
                            ]
                        ),
                        n
                    )
                })(),
                ii = (function () {
                    function n() {
                        b(this, n), m(this, 'timestamp', 0), m(this, 'counter', 0), m(this, 'random', new oi())
                    }
                    return (
                        F(n, [
                            {
                                key: 'generate',
                                value: function () {
                                    var e = this.generateOrAbort()
                                    if (e !== void 0) return e
                                    this.timestamp = 0
                                    var t = this.generateOrAbort()
                                    if (t === void 0) throw new Error('Could not generate UUID after timestamp reset')
                                    return t
                                },
                            },
                            {
                                key: 'generateOrAbort',
                                value: function () {
                                    var e = Date.now()
                                    if (e > this.timestamp) (this.timestamp = e), this.resetCounter()
                                    else {
                                        if (!(e + 1e4 > this.timestamp)) return
                                        this.counter++,
                                            this.counter > 4398046511103 && (this.timestamp++, this.resetCounter())
                                    }
                                    return ri.fromFieldsV7(
                                        this.timestamp,
                                        Math.trunc(this.counter / Math.pow(2, 30)),
                                        this.counter & (Math.pow(2, 30) - 1),
                                        this.random.nextUint32()
                                    )
                                },
                            },
                            {
                                key: 'resetCounter',
                                value: function () {
                                    this.counter = 1024 * this.random.nextUint32() + (1023 & this.random.nextUint32())
                                },
                            },
                        ]),
                        n
                    )
                })(),
                Mn = function (n) {
                    if (typeof UUIDV7_DENY_WEAK_RNG < 'u' && UUIDV7_DENY_WEAK_RNG)
                        throw new Error('no cryptographically strong RNG available')
                    for (var e = 0; e < n.length; e++)
                        n[e] = 65536 * Math.trunc(65536 * Math.random()) + Math.trunc(65536 * Math.random())
                    return n
                }
            typeof crypto < 'u' &&
                crypto.getRandomValues &&
                (Mn = function (n) {
                    return crypto.getRandomValues(n)
                })
            var Cn,
                oi = (function () {
                    function n() {
                        b(this, n), m(this, 'buffer', new Uint32Array(8)), m(this, 'cursor', 1 / 0)
                    }
                    return (
                        F(n, [
                            {
                                key: 'nextUint32',
                                value: function () {
                                    return (
                                        this.cursor >= this.buffer.length && (Mn(this.buffer), (this.cursor = 0)),
                                        this.buffer[this.cursor++]
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })(),
                Te = function () {
                    return si().toString()
                },
                si = function () {
                    return (Cn || (Cn = new ii())).generate()
                },
                ot = 1800,
                Dn = 60,
                ai = 864e5,
                ui = (function () {
                    function n(e, t) {
                        b(this, n),
                            m(this, '_sessionIdChangedHandlers', []),
                            (this.config = e),
                            (this.persistence = t),
                            (this._windowId = void 0),
                            (this._sessionId = void 0),
                            (this._sessionStartTimestamp = null),
                            (this._sessionActivityTimestamp = null)
                        var r = e.persistence_name || e.token,
                            i = e.session_idle_timeout_seconds || ot
                        if (
                            (typeof i != 'number'
                                ? (console.warn(
                                      '[PostHog] session_idle_timeout_seconds must be a number. Defaulting to 30 minutes.'
                                  ),
                                  (i = ot))
                                : i > ot
                                ? console.warn(
                                      '[PostHog] session_idle_timeout_seconds cannot be  greater than 30 minutes. Using 30 minutes instead.'
                                  )
                                : i < Dn &&
                                  console.warn(
                                      '[PostHog] session_idle_timeout_seconds cannot be less than 60 seconds. Using 60 seconds instead.'
                                  ),
                            (this._sessionTimeoutMs = 1e3 * Math.min(Math.max(i, Dn), ot)),
                            (this._window_id_storage_key = 'ph_' + r + '_window_id'),
                            (this._primary_window_exists_storage_key = 'ph_' + r + '_primary_window_exists'),
                            this._canUseSessionStorage())
                        ) {
                            var o = H.parse(this._window_id_storage_key),
                                s = H.parse(this._primary_window_exists_storage_key)
                            o && !s ? (this._windowId = o) : H.remove(this._window_id_storage_key),
                                H.set(this._primary_window_exists_storage_key, !0)
                        }
                        this._listenToReloadWindow()
                    }
                    return (
                        F(n, [
                            {
                                key: 'onSessionId',
                                value: function (e) {
                                    var t = this
                                    return (
                                        this._sessionIdChangedHandlers === void 0 &&
                                            (this._sessionIdChangedHandlers = []),
                                        this._sessionIdChangedHandlers.push(e),
                                        this._sessionId && e(this._sessionId, this._windowId),
                                        function () {
                                            t._sessionIdChangedHandlers = t._sessionIdChangedHandlers.filter(function (
                                                r
                                            ) {
                                                return r !== e
                                            })
                                        }
                                    )
                                },
                            },
                            {
                                key: '_canUseSessionStorage',
                                value: function () {
                                    return (
                                        this.config.persistence !== 'memory' &&
                                        !this.persistence.disabled &&
                                        H.is_supported()
                                    )
                                },
                            },
                            {
                                key: '_setWindowId',
                                value: function (e) {
                                    e !== this._windowId &&
                                        ((this._windowId = e),
                                        this._canUseSessionStorage() && H.set(this._window_id_storage_key, e))
                                },
                            },
                            {
                                key: '_getWindowId',
                                value: function () {
                                    return this._windowId
                                        ? this._windowId
                                        : this._canUseSessionStorage()
                                        ? H.parse(this._window_id_storage_key)
                                        : null
                                },
                            },
                            {
                                key: '_setSessionId',
                                value: function (e, t, r) {
                                    ;(e === this._sessionId &&
                                        t === this._sessionActivityTimestamp &&
                                        r === this._sessionStartTimestamp) ||
                                        ((this._sessionStartTimestamp = r),
                                        (this._sessionActivityTimestamp = t),
                                        (this._sessionId = e),
                                        this.persistence.register(m({}, Ze, [t, e, r])))
                                },
                            },
                            {
                                key: '_getSessionId',
                                value: function () {
                                    if (
                                        this._sessionId &&
                                        this._sessionActivityTimestamp &&
                                        this._sessionStartTimestamp
                                    )
                                        return [
                                            this._sessionActivityTimestamp,
                                            this._sessionId,
                                            this._sessionStartTimestamp,
                                        ]
                                    var e = this.persistence.props[Ze]
                                    return Array.isArray(e) && e.length === 2 && e.push(e[0]), e || [0, null, 0]
                                },
                            },
                            {
                                key: 'resetSessionId',
                                value: function () {
                                    this._setSessionId(null, null, null)
                                },
                            },
                            {
                                key: '_listenToReloadWindow',
                                value: function () {
                                    var e = this
                                    window.addEventListener('beforeunload', function () {
                                        e._canUseSessionStorage() && H.remove(e._primary_window_exists_storage_key)
                                    })
                                },
                            },
                            {
                                key: 'checkAndGetSessionAndWindowId',
                                value: function () {
                                    var e = arguments.length > 0 && arguments[0] !== void 0 && arguments[0],
                                        t =
                                            (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : null) ||
                                            new Date().getTime(),
                                        r = U(this._getSessionId(), 3),
                                        i = r[0],
                                        o = r[1],
                                        s = r[2],
                                        u = this._getWindowId(),
                                        a = s && s > 0 && Math.abs(t - s) > ai,
                                        c = !1
                                    !o || (!e && Math.abs(t - i) > this._sessionTimeoutMs) || a
                                        ? ((o = Te()), (u = Te()), (s = t), (c = !0))
                                        : u || ((u = Te()), (c = !0))
                                    var l = i === 0 || !e || a ? t : i,
                                        d = s === 0 ? new Date().getTime() : s
                                    return (
                                        this._setWindowId(u),
                                        this._setSessionId(o, l, d),
                                        c &&
                                            this._sessionIdChangedHandlers.forEach(function (h) {
                                                return h(o, u)
                                            }),
                                        { sessionId: o, windowId: u, sessionStartTimestamp: d }
                                    )
                                },
                            },
                        ]),
                        n
                    )
                })(),
                ci = F(function n(e, t, r, i) {
                    b(this, n),
                        (this.name = 'posthog-js'),
                        (this.setupOnce = function (o) {
                            o(function (s) {
                                var u, a, c, l, d
                                if (s.level !== 'error' || !e.__loaded) return s
                                s.tags || (s.tags = {})
                                var h = e.config.ui_host || e.config.api_host
                                ;(s.tags['PostHog Person URL'] = h + '/person/' + e.get_distinct_id()),
                                    e.sessionRecordingStarted() &&
                                        (s.tags['PostHog Recording URL'] = e.get_session_replay_url({
                                            withTimestamp: !0,
                                        }))
                                var p = ((u = s.exception) === null || u === void 0 ? void 0 : u.values) || [],
                                    g = {
                                        $exception_message: (a = p[0]) === null || a === void 0 ? void 0 : a.value,
                                        $exception_type: (c = p[0]) === null || c === void 0 ? void 0 : c.type,
                                        $exception_personURL: h + '/person/' + e.get_distinct_id(),
                                        $sentry_event_id: s.event_id,
                                        $sentry_exception: s.exception,
                                        $sentry_exception_message:
                                            (l = p[0]) === null || l === void 0 ? void 0 : l.value,
                                        $sentry_exception_type: (d = p[0]) === null || d === void 0 ? void 0 : d.type,
                                        $sentry_tags: s.tags,
                                    }
                                return (
                                    t &&
                                        r &&
                                        (g.$sentry_url =
                                            (i || 'https://sentry.io/organizations/') +
                                            t +
                                            '/issues/?project=' +
                                            r +
                                            '&query=' +
                                            s.event_id),
                                    e.capture('$exception', g),
                                    s
                                )
                            })
                        })
                }),
                li = function (n) {
                    ;(Promise && Promise.resolve) ||
                        console.warn(
                            'This browser does not have Promise support, and can not use the segment integration'
                        )
                    var e = function (t, r) {
                        t.event.userId || t.event.anonymousId === n.get_distinct_id() || n.reset(),
                            t.event.userId &&
                                t.event.userId !== n.get_distinct_id() &&
                                (n.register({ distinct_id: t.event.userId }), n.reloadFeatureFlags())
                        var i = n._calculate_event_properties(r, t.event.properties)
                        return (t.event.properties = Object.assign({}, i, t.event.properties)), t
                    }
                    return {
                        name: 'PostHog JS',
                        type: 'enrichment',
                        version: '1.0.0',
                        isLoaded: function () {
                            return !0
                        },
                        load: function () {
                            return Promise.resolve()
                        },
                        track: function (t) {
                            return e(t, t.event.event)
                        },
                        page: function (t) {
                            return e(t, '$pageview')
                        },
                        identify: function (t) {
                            return e(t, '$identify')
                        },
                        screen: function (t) {
                            return e(t, '$screen')
                        },
                    }
                },
                di = (function () {
                    function n() {
                        var e = this
                        b(this, n),
                            m(this, '_hasSeenPageView', !1),
                            m(this, '_updateScrollData', function () {
                                var t, r, i, o
                                e._pageViewData || (e._pageViewData = e._createPageViewData())
                                var s = e._pageViewData,
                                    u = e._scrollY(),
                                    a = e._scrollHeight(),
                                    c = e._contentY(),
                                    l = e._contentHeight()
                                ;(s.lastScrollY = u),
                                    (s.maxScrollY = Math.max(u, (t = s.maxScrollY) !== null && t !== void 0 ? t : 0)),
                                    (s.maxScrollHeight = Math.max(
                                        a,
                                        (r = s.maxScrollHeight) !== null && r !== void 0 ? r : 0
                                    )),
                                    (s.lastContentY = c),
                                    (s.maxContentY = Math.max(c, (i = s.maxContentY) !== null && i !== void 0 ? i : 0)),
                                    (s.maxContentHeight = Math.max(
                                        l,
                                        (o = s.maxContentHeight) !== null && o !== void 0 ? o : 0
                                    ))
                            })
                    }
                    return (
                        F(n, [
                            {
                                key: '_createPageViewData',
                                value: function () {
                                    return { pathname: v.location.pathname }
                                },
                            },
                            {
                                key: 'doPageView',
                                value: function () {
                                    var e, t
                                    return (
                                        this._hasSeenPageView
                                            ? ((t = this._pageViewData),
                                              (this._pageViewData = this._createPageViewData()))
                                            : ((this._hasSeenPageView = !0),
                                              (t = void 0),
                                              this._pageViewData || (this._pageViewData = this._createPageViewData())),
                                        setTimeout(this._updateScrollData, 0),
                                        _(
                                            {
                                                $prev_pageview_pathname:
                                                    (e = t) === null || e === void 0 ? void 0 : e.pathname,
                                            },
                                            this._calculatePrevPageScrollProperties(t)
                                        )
                                    )
                                },
                            },
                            {
                                key: 'doPageLeave',
                                value: function () {
                                    var e = this._pageViewData
                                    return _(
                                        { $prev_pageview_pathname: e?.pathname },
                                        this._calculatePrevPageScrollProperties(e)
                                    )
                                },
                            },
                            {
                                key: '_calculatePrevPageScrollProperties',
                                value: function (e) {
                                    if (
                                        !e ||
                                        e.maxScrollHeight == null ||
                                        e.lastScrollY == null ||
                                        e.maxScrollY == null ||
                                        e.maxContentHeight == null ||
                                        e.lastContentY == null ||
                                        e.maxContentY == null
                                    )
                                        return {}
                                    var t = e.maxScrollHeight,
                                        r = e.lastScrollY,
                                        i = e.maxScrollY,
                                        o = e.maxContentHeight,
                                        s = e.lastContentY,
                                        u = e.maxContentY
                                    return (
                                        (t = Math.ceil(t)),
                                        (r = Math.ceil(r)),
                                        (i = Math.ceil(i)),
                                        (o = Math.ceil(o)),
                                        (s = Math.ceil(s)),
                                        (u = Math.ceil(u)),
                                        {
                                            $prev_pageview_last_scroll: r,
                                            $prev_pageview_last_scroll_percentage: t <= 1 ? 1 : st(r / t, 0, 1),
                                            $prev_pageview_max_scroll: i,
                                            $prev_pageview_max_scroll_percentage: t <= 1 ? 1 : st(i / t, 0, 1),
                                            $prev_pageview_last_content: s,
                                            $prev_pageview_last_content_percentage: o <= 1 ? 1 : st(s / o, 0, 1),
                                            $prev_pageview_max_content: u,
                                            $prev_pageview_max_content_percentage: o <= 1 ? 1 : st(u / o, 0, 1),
                                        }
                                    )
                                },
                            },
                            {
                                key: 'startMeasuringScrollPosition',
                                value: function () {
                                    v.addEventListener('scroll', this._updateScrollData),
                                        v.addEventListener('scrollend', this._updateScrollData),
                                        v.addEventListener('resize', this._updateScrollData)
                                },
                            },
                            {
                                key: 'stopMeasuringScrollPosition',
                                value: function () {
                                    v.removeEventListener('scroll', this._updateScrollData),
                                        v.removeEventListener('scrollend', this._updateScrollData),
                                        v.removeEventListener('resize', this._updateScrollData)
                                },
                            },
                            {
                                key: '_scrollHeight',
                                value: function () {
                                    return Math.max(
                                        0,
                                        v.document.documentElement.scrollHeight -
                                            v.document.documentElement.clientHeight
                                    )
                                },
                            },
                            {
                                key: '_scrollY',
                                value: function () {
                                    return v.scrollY || v.pageYOffset || v.document.documentElement.scrollTop || 0
                                },
                            },
                            {
                                key: '_contentHeight',
                                value: function () {
                                    return v.document.documentElement.scrollHeight || 0
                                },
                            },
                            {
                                key: '_contentY',
                                value: function () {
                                    var e = v.document.documentElement.clientHeight || 0
                                    return this._scrollY() + e
                                },
                            },
                        ]),
                        n
                    )
                })()
            function st(n, e, t) {
                return Math.max(e, Math.min(n, t))
            }
            function Nn(n) {
                return typeof Event < 'u' && jn(n, Event)
            }
            function jn(n, e) {
                try {
                    return n instanceof e
                } catch {
                    return !1
                }
            }
            function Hn(n) {
                return n === null || (D(n) !== 'object' && typeof n != 'function')
            }
            function at(n, e) {
                return Object.prototype.toString.call(n) === '[object '.concat(e, ']')
            }
            function Lt(n) {
                return at(n, 'DOMError')
            }
            var Ln = /\(error: (.*)\)/,
                Bn = 50,
                ut = '?'
            function Bt(n, e, t, r) {
                var i = { filename: n, function: e, in_app: !0 }
                return t !== void 0 && (i.lineno = t), r !== void 0 && (i.colno = r), i
            }
            var fi =
                    /^\s*at (?:(.+?\)(?: \[.+\])?|.*?) ?\((?:address at )?)?(?:async )?((?:<anonymous>|[-a-z]+:|.*bundle|\/)?.*?)(?::(\d+))?(?::(\d+))?\)?\s*$/i,
                pi = /\((\S*)(?::(\d+))(?::(\d+))\)/,
                hi =
                    /^\s*(.*?)(?:\((.*?)\))?(?:^|@)?((?:[-a-z]+)?:\/.*?|\[native code\]|[^@]*(?:bundle|\d+\.js)|\/[\w\-. /=]+)(?::(\d+))?(?::(\d+))?\s*$/i,
                gi = /(\S+) line (\d+)(?: > eval line \d+)* > eval/i,
                _i = /^\s*at (?:((?:\[object object\])?.+) )?\(?((?:[-a-z]+):.*?):(\d+)(?::(\d+))?\)?\s*$/i,
                vi = function () {
                    for (var n = arguments.length, e = new Array(n), t = 0; t < n; t++) e[t] = arguments[t]
                    var r = e
                        .sort(function (i, o) {
                            return i[0] - o[0]
                        })
                        .map(function (i) {
                            return i[1]
                        })
                    return function (i) {
                        for (
                            var o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
                                s = [],
                                u = i.split(`
`),
                                a = o;
                            a < u.length;
                            a++
                        ) {
                            var c = u[a]
                            if (!(c.length > 1024)) {
                                var l = Ln.test(c) ? c.replace(Ln, '$1') : c
                                if (!l.match(/\S*Error: /)) {
                                    var d,
                                        h = pe(r)
                                    try {
                                        for (h.s(); !(d = h.n()).done; ) {
                                            var p = (0, d.value)(l)
                                            if (p) {
                                                s.push(p)
                                                break
                                            }
                                        }
                                    } catch (g) {
                                        h.e(g)
                                    } finally {
                                        h.f()
                                    }
                                    if (s.length >= Bn) break
                                }
                            }
                        }
                        return (function (g) {
                            if (!g.length) return []
                            var f = g.slice(0, Bn)
                            return (
                                f.reverse(),
                                f.map(function (R) {
                                    return _(
                                        _({}, R),
                                        {},
                                        {
                                            filename: R.filename || f[f.length - 1].filename,
                                            function: R.function || '?',
                                        }
                                    )
                                })
                            )
                        })(s)
                    }
                }.apply(void 0, [
                    [
                        30,
                        function (n) {
                            var e = fi.exec(n)
                            if (e) {
                                if (e[2] && e[2].indexOf('eval') === 0) {
                                    var t = pi.exec(e[2])
                                    t && ((e[2] = t[1]), (e[3] = t[2]), (e[4] = t[3]))
                                }
                                var r = U(qn(e[1] || ut, e[2]), 2),
                                    i = r[0]
                                return Bt(r[1], i, e[3] ? +e[3] : void 0, e[4] ? +e[4] : void 0)
                            }
                        },
                    ],
                    [
                        50,
                        function (n) {
                            var e = hi.exec(n)
                            if (e) {
                                if (e[3] && e[3].indexOf(' > eval') > -1) {
                                    var t = gi.exec(e[3])
                                    t && ((e[1] = e[1] || 'eval'), (e[3] = t[1]), (e[4] = t[2]), (e[5] = ''))
                                }
                                var r = e[3],
                                    i = e[1] || ut,
                                    o = U(qn(i, r), 2)
                                return (i = o[0]), Bt((r = o[1]), i, e[4] ? +e[4] : void 0, e[5] ? +e[5] : void 0)
                            }
                        },
                    ],
                    [
                        40,
                        function (n) {
                            var e = _i.exec(n)
                            return e ? Bt(e[2], e[1] || ut, +e[3], e[4] ? +e[4] : void 0) : void 0
                        },
                    ],
                ]),
                qn = function (n, e) {
                    var t = n.indexOf('safari-extension') !== -1,
                        r = n.indexOf('safari-web-extension') !== -1
                    return t || r
                        ? [
                              n.indexOf('@') !== -1 ? n.split('@')[0] : ut,
                              t ? 'safari-extension:'.concat(e) : 'safari-web-extension:'.concat(e),
                          ]
                        : [n, e]
                },
                mi =
                    /^(?:[Uu]ncaught (?:exception: )?)?(?:((?:Eval|Internal|Range|Reference|Syntax|Type|URI|)Error): )?(.*)$/i,
                yi = /Minified React error #\d+;/i
            function bi(n) {
                var e = n.stacktrace || n.stack || '',
                    t = (function (r) {
                        if (r) {
                            if (typeof r.framesToPop == 'number') return r.framesToPop
                            if (yi.test(r.message)) return 1
                        }
                        return 0
                    })(n)
                try {
                    return vi(e, t)
                } catch {}
                return []
            }
            function qt(n) {
                var e = bi(n)
                return {
                    $exception_type: n.name,
                    $exception_message: n.message,
                    $exception_stack_trace_raw: JSON.stringify(e),
                }
            }
            function wi(n) {
                var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 40,
                    t = Object.keys(n)
                if ((t.sort(), !t.length)) return '[object has no keys]'
                for (var r = t.length; r > 0; r--) {
                    var i = t.slice(0, r).join(', ')
                    if (!(i.length > e)) return r === t.length || i.length <= e ? i : ''.concat(i.slice(0, e), '...')
                }
                return ''
            }
            function Un(n) {
                var e = U(n, 5),
                    t = e[0],
                    r = e[1],
                    i = e[2],
                    o = e[3],
                    s = e[4],
                    u = {}
                if (s === void 0 && typeof t == 'string') {
                    var a = 'Error',
                        c = t,
                        l = t.match(mi)
                    l && ((a = l[1]), (c = l[2])), (u = { $exception_type: a, $exception_message: c })
                }
                var d = s || t
                if (
                    Lt(d) ||
                    (function (f) {
                        return at(f, 'DOMException')
                    })(d)
                ) {
                    var h = d
                    if (
                        (function (f) {
                            return 'stack' in f
                        })(d)
                    )
                        u = qt(d)
                    else {
                        var p = h.name || (Lt(h) ? 'DOMError' : 'DOMException'),
                            g = h.message ? ''.concat(p, ': ').concat(h.message) : p
                        ;(u = (function (f) {
                            return { $exception_type: 'Error', $exception_message: f }
                        })(g)),
                            (u.$exception_type = Lt(h) ? 'DOMError' : 'DOMException'),
                            (u.$exception_message = u.$exception_message || g)
                    }
                    'code' in h && (u.$exception_DOMException_code = ''.concat(h.code))
                } else
                    (function (f) {
                        return at(f, 'ErrorEvent')
                    })(d) && d.error
                        ? (u = qt(d.error))
                        : (function (f) {
                              switch (Object.prototype.toString.call(f)) {
                                  case '[object Error]':
                                  case '[object Exception]':
                                  case '[object DOMException]':
                                      return !0
                                  default:
                                      return jn(f, Error)
                              }
                          })(d)
                        ? (u = qt(d))
                        : (function (f) {
                              return at(f, 'Object')
                          })(d) || Nn(d)
                        ? ((u = (function (f) {
                              return {
                                  $exception_type: Nn(f) ? f.constructor.name : 'Error',
                                  $exception_message: 'Non-Error '.concat('exception', ' captured with keys: ', wi(f)),
                              }
                          })(d)),
                          (u.$exception_is_synthetic = !0))
                        : ((u.$exception_type = u.$exception_type || 'Error'),
                          (u.$exception_message = u.$exception_message || d),
                          (u.$exception_is_synthetic = !0))
                return _(
                    _(
                        _(
                            _({}, u),
                            {},
                            {
                                $exception_type: u.$exception_type || 'UnknownErrorType',
                                $exception_message: u.$exception_message || '',
                            },
                            r ? { $exception_source: r } : {}
                        ),
                        i ? { $exception_lineno: i } : {}
                    ),
                    o ? { $exception_colno: o } : {}
                )
            }
            var Vn,
                Wn,
                ki = (function () {
                    function n(e) {
                        b(this, n),
                            m(this, 'originalOnErrorHandler', void 0),
                            m(this, 'originalOnUnhandledRejectionHandler', void 0),
                            m(this, 'errorsToIgnore', []),
                            (this.instance = e)
                    }
                    return (
                        F(n, [
                            {
                                key: 'debugLog',
                                value: function () {
                                    if (this.instance.get_config('debug')) {
                                        for (var e, t = arguments.length, r = new Array(t), i = 0; i < t; i++)
                                            r[i] = arguments[i]
                                        ;(e = console).log.apply(
                                            e,
                                            ['PostHog.js [PostHog.ExceptionObserver]'].concat(r)
                                        )
                                    }
                                },
                            },
                            {
                                key: 'startCapturing',
                                value: function () {
                                    var e
                                    if (
                                        this.isEnabled() &&
                                        ((e = v.onerror) === null || e === void 0 || !e.__POSTHOG_INSTRUMENTED__)
                                    )
                                        try {
                                            ;(this.originalOnErrorHandler = v.onerror),
                                                (v.onerror = function () {
                                                    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
                                                        r[i] = arguments[i]
                                                    return (
                                                        this.captureException(r),
                                                        !!this.originalOnErrorHandler &&
                                                            this.originalOnErrorHandler.apply(this, r)
                                                    )
                                                }.bind(this)),
                                                (v.onerror.__POSTHOG_INSTRUMENTED__ = !0),
                                                (this.originalOnUnhandledRejectionHandler = v.onunhandledrejection),
                                                (v.onunhandledrejection = function () {
                                                    for (var t = arguments.length, r = new Array(t), i = 0; i < t; i++)
                                                        r[i] = arguments[i]
                                                    var o = (function (s) {
                                                        var u = U(s, 1)[0],
                                                            a = u
                                                        try {
                                                            'reason' in u
                                                                ? (a = u.reason)
                                                                : 'detail' in u &&
                                                                  'reason' in u.detail &&
                                                                  (a = u.detail.reason)
                                                        } catch {}
                                                        var c = {}
                                                        return (
                                                            ((c = Hn(a)
                                                                ? {
                                                                      $exception_message:
                                                                          'Non-Error promise rejection captured with value: '.concat(
                                                                              String(a)
                                                                          ),
                                                                  }
                                                                : Un([a])).$exception_handled = !1),
                                                            _(
                                                                _({}, c),
                                                                {},
                                                                {
                                                                    $exception_type: (c.$exception_type =
                                                                        'UnhandledRejection'),
                                                                    $exception_message: (c.$exception_message =
                                                                        c.$exception_message || u.reason || String(a)),
                                                                }
                                                            )
                                                        )
                                                    })(r)
                                                    return (
                                                        this.sendExceptionEvent(o),
                                                        !this.originalOnUnhandledRejectionHandler ||
                                                            this.originalOnUnhandledRejectionHandler.apply(v, r)
                                                    )
                                                }.bind(this)),
                                                (v.onunhandledrejection.__POSTHOG_INSTRUMENTED__ = !0)
                                        } catch (t) {
                                            console.error('PostHog failed to start exception autocapture', t),
                                                this.stopCapturing()
                                        }
                                },
                            },
                            {
                                key: 'stopCapturing',
                                value: function () {
                                    var e, t
                                    this.originalOnErrorHandler !== void 0 &&
                                        ((v.onerror = this.originalOnErrorHandler),
                                        (this.originalOnErrorHandler = null)),
                                        (e = v.onerror) === null || e === void 0 || delete e.__POSTHOG_INSTRUMENTED__,
                                        this.originalOnUnhandledRejectionHandler !== void 0 &&
                                            ((v.onunhandledrejection = this.originalOnUnhandledRejectionHandler),
                                            (this.originalOnUnhandledRejectionHandler = null)),
                                        (t = v.onunhandledrejection) === null ||
                                            t === void 0 ||
                                            delete t.__POSTHOG_INSTRUMENTED__
                                },
                            },
                            {
                                key: 'isCapturing',
                                value: function () {
                                    var e
                                    return !((e = v.onerror) === null || e === void 0 || !e.__POSTHOG_INSTRUMENTED__)
                                },
                            },
                            {
                                key: 'isEnabled',
                                value: function () {
                                    var e
                                    return (e = this.remoteEnabled) !== null && e !== void 0 && e
                                },
                            },
                            {
                                key: 'afterDecideResponse',
                                value: function (e) {
                                    var t = e.autocaptureExceptions
                                    if (
                                        ((this.remoteEnabled = !!t || !1),
                                        !Hn(t) && 'errors_to_ignore' in t && Array.isArray(t.errors_to_ignore))
                                    ) {
                                        var r = t.errors_to_ignore
                                        this.errorsToIgnore = r.map(function (i) {
                                            return new RegExp(i)
                                        })
                                    }
                                    this.isEnabled()
                                        ? (this.startCapturing(),
                                          this.debugLog(
                                              'Remote config for exception autocapture is enabled, starting',
                                              t
                                          ))
                                        : this.debugLog(
                                              'Remote config for exception autocapture is disabled, not starting',
                                              t
                                          )
                                },
                            },
                            {
                                key: 'captureException',
                                value: function (e, t) {
                                    var r = Un(e)
                                    if (
                                        this.errorsToIgnore.some(function (s) {
                                            return s.test(r.$exception_message || '')
                                        })
                                    )
                                        this.debugLog('Ignoring exception based on remote config', r)
                                    else {
                                        var i = _(_({}, t), r),
                                            o =
                                                this.instance.get_config('ui_host') ||
                                                this.instance.get_config('api_host')
                                        ;(r.$exception_personURL = o + '/person/' + this.instance.get_distinct_id()),
                                            this.sendExceptionEvent(i)
                                    }
                                },
                            },
                            {
                                key: 'sendExceptionEvent',
                                value: function (e) {
                                    this.instance.capture('$exception', e, {
                                        transport: 'XHR',
                                        method: 'POST',
                                        endpoint: '/e/',
                                        _noTruncate: !0,
                                        _batchKey: 'exceptionEvent',
                                    })
                                },
                            },
                        ]),
                        n
                    )
                })()
            ;(function (n) {
                ;(n.Popover = 'Popover'), (n.Button = 'Button'), (n.Email = 'Email'), (n.FullScreen = 'Fullscreen')
            })(Vn || (Vn = {})),
                (function (n) {
                    ;(n.Open = 'open'),
                        (n.MultipleChoiceSingle = 'multiple_single'),
                        (n.MultipleChoiceMulti = 'multiple_multi'),
                        (n.NPS = 'nps'),
                        (n.Rating = 'rating'),
                        (n.Link = 'link')
                })(Wn || (Wn = {}))
            var ze,
                Ut,
                M,
                Si = (function () {
                    function n(e) {
                        b(this, n), (this.instance = e)
                    }
                    return (
                        F(n, [
                            {
                                key: 'getSurveys',
                                value: function (e) {
                                    var t = this,
                                        r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1],
                                        i = this.instance.get_property(Pt)
                                    if (i && !r) return e(i)
                                    this.instance._send_request(
                                        ''
                                            .concat(this.instance.get_config('api_host'), '/api/surveys/?token=')
                                            .concat(this.instance.get_config('token')),
                                        {},
                                        { method: 'GET' },
                                        function (o) {
                                            var s = o.surveys
                                            return t.instance.persistence.register(m({}, Pt, s)), e(s)
                                        }
                                    )
                                },
                            },
                            {
                                key: 'getActiveMatchingSurveys',
                                value: function (e) {
                                    var t = this,
                                        r = arguments.length > 1 && arguments[1] !== void 0 && arguments[1]
                                    this.getSurveys(function (i) {
                                        var o = i
                                            .filter(function (s) {
                                                return !(!s.start_date || s.end_date)
                                            })
                                            .filter(function (s) {
                                                var u, a
                                                if (!s.conditions) return !0
                                                var c =
                                                        (u = s.conditions) === null ||
                                                        u === void 0 ||
                                                        !u.url ||
                                                        window.location.href.indexOf(s.conditions.url) > -1,
                                                    l =
                                                        (a = s.conditions) === null ||
                                                        a === void 0 ||
                                                        !a.selector ||
                                                        document.querySelector(s.conditions.selector)
                                                return c && l
                                            })
                                            .filter(function (s) {
                                                if (!s.linked_flag_key && !s.targeting_flag_key) return !0
                                                var u =
                                                        !s.linked_flag_key ||
                                                        t.instance.featureFlags.isFeatureEnabled(s.linked_flag_key),
                                                    a =
                                                        !s.targeting_flag_key ||
                                                        t.instance.featureFlags.isFeatureEnabled(s.targeting_flag_key)
                                                return u && a
                                            })
                                        return e(o)
                                    }, r)
                                },
                            },
                        ]),
                        n
                    )
                })(),
                Pi = { 'X-PostHog-Retry-After-Recordings': yn, 'X-PostHog-Retry-After-Events': 'events' },
                Fi = (function () {
                    function n() {
                        b(this, n), m(this, 'limits', {})
                    }
                    return (
                        F(n, [
                            {
                                key: 'isRateLimited',
                                value: function (e) {
                                    var t = this.limits[e || 'events'] || !1
                                    return t !== !1 && new Date().getTime() < t
                                },
                            },
                            {
                                key: 'on429Response',
                                value: function (e) {
                                    var t = this
                                    e.status === 429 &&
                                        Object.entries(Pi).forEach(function (r) {
                                            var i = U(r, 2),
                                                o = i[0],
                                                s = i[1],
                                                u = e.getResponseHeader(o)
                                            if (u) {
                                                var a = parseInt(u, 10)
                                                if ((isNaN(a) && (a = 60), a)) {
                                                    var c = 1e3 * a
                                                    t.limits[s] = new Date().getTime() + c
                                                }
                                            }
                                        })
                                },
                            },
                        ]),
                        n
                    )
                })()
            ;(function (n) {
                ;(n[(n.INIT_MODULE = 0)] = 'INIT_MODULE'), (n[(n.INIT_SNIPPET = 1)] = 'INIT_SNIPPET')
            })(ze || (ze = {}))
            var Vt = function () {},
                ct = {},
                V = 'posthog',
                lt = v.XMLHttpRequest && 'withCredentials' in new XMLHttpRequest(),
                zn = !lt && re.indexOf('MSIE') === -1 && re.indexOf('Mozilla') === -1,
                Qn = function () {
                    var n, e, t
                    return {
                        api_host: 'https://app.posthog.com',
                        api_method: 'POST',
                        api_transport: 'XHR',
                        ui_host: null,
                        token: '',
                        autocapture: !0,
                        rageclick: !0,
                        cross_subdomain_cookie:
                            (T == null ||
                            (n = T.location) === null ||
                            n === void 0 ||
                            (e = n.hostname) === null ||
                            e === void 0
                                ? void 0
                                : e.indexOf('herokuapp.com')) === -1,
                        persistence: 'cookie',
                        persistence_name: '',
                        cookie_name: '',
                        loaded: Vt,
                        store_google: !0,
                        custom_campaign_params: [],
                        save_referrer: !0,
                        test: !1,
                        verbose: !1,
                        capture_pageview: !0,
                        capture_pageleave: !0,
                        debug: !1,
                        cookie_expiration: 365,
                        upgrade: !1,
                        disable_session_recording: !1,
                        disable_persistence: !1,
                        disable_cookie: !1,
                        enable_recording_console_log: void 0,
                        secure_cookie:
                            (v == null || (t = v.location) === null || t === void 0 ? void 0 : t.protocol) === 'https:',
                        ip: !0,
                        opt_out_capturing_by_default: !1,
                        opt_out_persistence_by_default: !1,
                        opt_out_capturing_persistence_type: 'localStorage',
                        opt_out_capturing_cookie_prefix: null,
                        opt_in_site_apps: !1,
                        property_blacklist: [],
                        respect_dnt: !1,
                        sanitize_properties: null,
                        xhr_headers: {},
                        inapp_protocol: '//',
                        inapp_link_new_window: !1,
                        request_batching: !0,
                        properties_string_max_length: 65535,
                        session_recording: {},
                        mask_all_element_attributes: !1,
                        mask_all_text: !1,
                        advanced_disable_decide: !1,
                        advanced_disable_feature_flags: !1,
                        advanced_disable_feature_flags_on_first_load: !1,
                        advanced_disable_toolbar_metrics: !1,
                        on_xhr_error: function (r) {
                            var i = 'Bad HTTP status: ' + r.status + ' ' + r.statusText
                            console.error(i)
                        },
                        get_device_id: function (r) {
                            return r
                        },
                        _onCapture: Vt,
                        capture_performance: void 0,
                        name: 'posthog',
                        callback_fn: 'posthog._jsc',
                        bootstrap: {},
                        disable_compression: !1,
                        session_idle_timeout_seconds: 1800,
                    }
                },
                dt = function (n, e, t, r) {
                    var i,
                        o = t !== V && M ? (t ? M[t] : void 0) : M,
                        s = { initComplete: !1, syncCode: !1 },
                        u = function (a) {
                            return function (c) {
                                s[a] || ((s[a] = !0), s.initComplete && s.syncCode && r?.(c))
                            }
                        }
                    if (o && Ut === ze.INIT_MODULE) i = o
                    else {
                        if (o && !ie(o)) return void console.error('You have already initialized ' + t)
                        i = new Yn()
                    }
                    return (
                        i._init(n, e, t, u('initComplete')),
                        i.toolbar.maybeLoadToolbar(),
                        (i.sessionRecording = new Er(i)),
                        i.sessionRecording.startRecordingIfEnabled(),
                        (i.webPerformance = new Ir(i)),
                        i.webPerformance.startObservingIfEnabled(),
                        i.get_config('__preview_measure_pageview_stats') &&
                            i.pageViewManager.startMeasuringScrollPosition(),
                        (i.exceptionAutocapture = new ki(i)),
                        (i.__autocapture = i.get_config('autocapture')),
                        be._setIsAutocaptureEnabled(i),
                        be._isAutocaptureEnabled &&
                            ((i.__autocapture = i.get_config('autocapture')),
                            be.enabledForProject(i.get_config('token'), 100, 100)
                                ? be.isBrowserSupported()
                                    ? be.init(i)
                                    : ((i.__autocapture = !1),
                                      E.log(
                                          'Disabling Automatic Event Collection because this browser is not supported'
                                      ))
                                : ((i.__autocapture = !1),
                                  E.log('Not in active bucket: disabling Automatic Event Collection.'))),
                        (G.DEBUG = G.DEBUG || i.get_config('debug')),
                        o !== void 0 && ie(o) && (i._execute_array.call(i.people, o.people), i._execute_array(o)),
                        u('syncCode')(i),
                        i
                    )
                },
                Yn = (function () {
                    function n() {
                        var e = this
                        b(this, n),
                            (this.config = Qn()),
                            (this.compression = {}),
                            (this.decideEndpointWasHit = !1),
                            (this.SentryIntegration = ci),
                            (this.segmentIntegration = function () {
                                return li(e)
                            }),
                            (this.__captureHooks = []),
                            (this.__request_queue = []),
                            (this.__loaded = !1),
                            (this.__loaded_recorder_version = void 0),
                            (this.__autocapture = void 0),
                            (this._jsc = function () {}),
                            (this.featureFlags = new fr(this)),
                            (this.toolbar = new Mr(this)),
                            (this.pageViewManager = new di()),
                            (this.surveys = new Si(this)),
                            (this.rateLimiter = new Fi()),
                            (this._requestQueue = void 0),
                            (this._retryQueue = void 0),
                            (this.persistence = void 0),
                            (this.sessionPersistence = void 0),
                            (this.sessionManager = void 0),
                            (this.people = {
                                set: function (t, r, i) {
                                    var o = typeof t == 'string' ? m({}, t, r) : t
                                    e.setPersonProperties(o), i?.({})
                                },
                                set_once: function (t, r, i) {
                                    var o = typeof t == 'string' ? m({}, t, r) : t
                                    e.setPersonProperties(void 0, o), i?.({})
                                },
                            })
                    }
                    return (
                        F(n, [
                            {
                                key: 'init',
                                value: function (e, t, r) {
                                    if (X(r)) console.error('You must name your new library: init(token, config, name)')
                                    else {
                                        if (r !== V) {
                                            var i = dt(e, t, r, function (o) {
                                                ;(M[r] = o), o._loaded()
                                            })
                                            return (M[r] = i), i
                                        }
                                        console.error(
                                            'You must initialize the main posthog object right after you include the PostHog js snippet'
                                        )
                                    }
                                },
                            },
                            {
                                key: '_init',
                                value: function (e) {
                                    var t,
                                        r,
                                        i = this,
                                        o = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {},
                                        s = arguments.length > 2 ? arguments[2] : void 0,
                                        u = arguments.length > 3 ? arguments[3] : void 0
                                    ;(this.__loaded = !0), (this.config = {}), (this._triggered_notifs = [])
                                    var a,
                                        c = { segmentRegister: !1, syncCode: !1 },
                                        l = function (x) {
                                            return function () {
                                                c[x] || ((c[x] = !0), c.segmentRegister && c.syncCode && u?.(i))
                                            }
                                        }
                                    if (
                                        (this.set_config(
                                            L({}, Qn(), o, {
                                                name: s,
                                                token: e,
                                                callback_fn: (s === V ? s : V + '.' + s) + '._jsc',
                                            })
                                        ),
                                        (this._jsc = function () {}),
                                        ((v != null && (t = v.rrweb) !== null && t !== void 0 && t.record) ||
                                            (v != null && v.rrwebRecord)) &&
                                            (this.__loaded_recorder_version =
                                                v == null || (a = v.rrweb) === null || a === void 0
                                                    ? void 0
                                                    : a.version),
                                        (this.persistence = new _n(this.config)),
                                        (this._requestQueue = new Lr(this._handle_queued_event.bind(this))),
                                        (this._retryQueue = new ni(this.get_config('on_xhr_error'), this.rateLimiter)),
                                        (this.__captureHooks = []),
                                        (this.__request_queue = []),
                                        (this.sessionManager = new ui(this.config, this.persistence)),
                                        (this.sessionPersistence =
                                            this.config.persistence === 'sessionStorage'
                                                ? this.persistence
                                                : new _n(_(_({}, this.config), {}, { persistence: 'sessionStorage' }))),
                                        this._gdpr_init(),
                                        o.segment
                                            ? ((this.config.get_device_id = function () {
                                                  return o.segment.user().anonymousId()
                                              }),
                                              o.segment.user().id() &&
                                                  (this.register({ distinct_id: o.segment.user().id() }),
                                                  this.persistence.set_user_state('identified')),
                                              o.segment.register(this.segmentIntegration()).then(l('segmentRegister')))
                                            : l('segmentRegister')(),
                                        ((r = o.bootstrap) === null || r === void 0 ? void 0 : r.distinctID) !== void 0)
                                    ) {
                                        var d,
                                            h,
                                            p = this.get_config('get_device_id')(Te()),
                                            g =
                                                (d = o.bootstrap) !== null && d !== void 0 && d.isIdentifiedID
                                                    ? p
                                                    : o.bootstrap.distinctID
                                        this.persistence.set_user_state(
                                            (h = o.bootstrap) !== null && h !== void 0 && h.isIdentifiedID
                                                ? 'identified'
                                                : 'anonymous'
                                        ),
                                            this.register({ distinct_id: o.bootstrap.distinctID, $device_id: g })
                                    }
                                    if (this._hasBootstrappedFeatureFlags()) {
                                        var f,
                                            R,
                                            N = Object.keys(
                                                ((f = o.bootstrap) === null || f === void 0
                                                    ? void 0
                                                    : f.featureFlags) || {}
                                            )
                                                .filter(function (x) {
                                                    var S, O
                                                    return !(
                                                        (S = o.bootstrap) === null ||
                                                        S === void 0 ||
                                                        (O = S.featureFlags) === null ||
                                                        O === void 0 ||
                                                        !O[x]
                                                    )
                                                })
                                                .reduce(function (x, S) {
                                                    var O, I
                                                    return (
                                                        (x[S] =
                                                            ((O = o.bootstrap) === null ||
                                                            O === void 0 ||
                                                            (I = O.featureFlags) === null ||
                                                            I === void 0
                                                                ? void 0
                                                                : I[S]) || !1),
                                                        x
                                                    )
                                                }, {}),
                                            W = Object.keys(
                                                ((R = o.bootstrap) === null || R === void 0
                                                    ? void 0
                                                    : R.featureFlagPayloads) || {}
                                            )
                                                .filter(function (x) {
                                                    return N[x]
                                                })
                                                .reduce(function (x, S) {
                                                    var O, I, y, Z
                                                    return (
                                                        (O = o.bootstrap) !== null &&
                                                            O !== void 0 &&
                                                            (I = O.featureFlagPayloads) !== null &&
                                                            I !== void 0 &&
                                                            I[S] &&
                                                            (x[S] =
                                                                (y = o.bootstrap) === null ||
                                                                y === void 0 ||
                                                                (Z = y.featureFlagPayloads) === null ||
                                                                Z === void 0
                                                                    ? void 0
                                                                    : Z[S]),
                                                        x
                                                    )
                                                }, {})
                                        this.featureFlags.receivedFeatureFlags({
                                            featureFlags: N,
                                            featureFlagPayloads: W,
                                        })
                                    }
                                    if (!this.get_distinct_id()) {
                                        var K = this.get_config('get_device_id')(Te())
                                        this.register_once({ distinct_id: K, $device_id: K }, ''),
                                            this.persistence.set_user_state('anonymous')
                                    }
                                    v.addEventListener &&
                                        v.addEventListener(
                                            'onpagehide' in self ? 'pagehide' : 'unload',
                                            this._handle_unload.bind(this)
                                        ),
                                        l('syncCode')()
                                },
                            },
                            {
                                key: '_loaded',
                                value: function () {
                                    this.featureFlags.setReloadingPaused(!0)
                                    try {
                                        this.get_config('loaded')(this)
                                    } catch (e) {
                                        console.error('`loaded` function failed', e)
                                    }
                                    this._start_queue_if_opted_in(),
                                        this.get_config('capture_pageview') &&
                                            this.capture('$pageview', { title: T.title }, { send_instantly: !0 }),
                                        this.get_config('advanced_disable_decide') || new Tr(this).call(),
                                        this.featureFlags.resetRequestQueue(),
                                        this.featureFlags.setReloadingPaused(!1)
                                },
                            },
                            {
                                key: '_start_queue_if_opted_in',
                                value: function () {
                                    this.has_opted_out_capturing() ||
                                        (this.get_config('request_batching') && this._requestQueue.poll())
                                },
                            },
                            {
                                key: '_dom_loaded',
                                value: function () {
                                    var e = this
                                    this.has_opted_out_capturing() ||
                                        he(this.__request_queue, function (t) {
                                            e._send_request.apply(e, Ye(t))
                                        }),
                                        (this.__request_queue = []),
                                        this._start_queue_if_opted_in()
                                },
                            },
                            {
                                key: '_prepare_callback',
                                value: function (e, t) {
                                    if (X(e)) return null
                                    if (lt)
                                        return function (s) {
                                            e(s, t)
                                        }
                                    var r = this._jsc,
                                        i = '' + Math.floor(1e8 * Math.random()),
                                        o = this.get_config('callback_fn') + '[' + i + ']'
                                    return (
                                        (r[i] = function (s) {
                                            delete r[i], e(s, t)
                                        }),
                                        o
                                    )
                                },
                            },
                            {
                                key: '_handle_unload',
                                value: function () {
                                    this.get_config('request_batching')
                                        ? (this.get_config('capture_pageview') &&
                                              this.get_config('capture_pageleave') &&
                                              this.capture('$pageleave'),
                                          this._requestQueue.unload(),
                                          this._retryQueue.unload())
                                        : this.get_config('capture_pageview') &&
                                          this.get_config('capture_pageleave') &&
                                          this.capture('$pageleave', null, { transport: 'sendBeacon' })
                                },
                            },
                            {
                                key: '_handle_queued_event',
                                value: function (e, t, r) {
                                    var i = JSON.stringify(t)
                                    this.__compress_and_send_json_request(e, i, r || ct, Vt)
                                },
                            },
                            {
                                key: '__compress_and_send_json_request',
                                value: function (e, t, r, i) {
                                    var o = (function (c, l, d) {
                                            return c === Re.GZipJS
                                                ? [
                                                      Kr(Zr(l), { mtime: 0 }),
                                                      _(
                                                          _({}, d),
                                                          {},
                                                          { blob: !0, urlQueryArgs: { compression: Re.GZipJS } }
                                                      ),
                                                  ]
                                                : [{ data: yt(l) }, d]
                                        })(this.compression[Re.GZipJS] ? Re.GZipJS : Re.Base64, t, r),
                                        s = U(o, 2),
                                        u = s[0],
                                        a = s[1]
                                    this._send_request(e, u, a, i)
                                },
                            },
                            {
                                key: '_send_request',
                                value: function (e, t, r, i) {
                                    if (this.rateLimiter.isRateLimited(r._batchKey))
                                        this.get_config('debug') &&
                                            console.warn('[PostHog SendRequest] is quota limited. Dropping request.')
                                    else if (zn) this.__request_queue.push([e, t, r, i])
                                    else {
                                        var o = {
                                            method: this.get_config('api_method'),
                                            transport: this.get_config('api_transport'),
                                            verbose: this.get_config('verbose'),
                                        }
                                        ;(r = L(o, r || {})), lt || (r.method = 'GET')
                                        var s = 'sendBeacon' in v.navigator && r.transport === 'sendBeacon'
                                        if (((e = ei(e, r.urlQueryArgs || {}, { ip: this.get_config('ip') })), s))
                                            try {
                                                v.navigator.sendBeacon(e, Ht(t, _(_({}, r), {}, { sendBeacon: !0 })))
                                            } catch {}
                                        else if (lt)
                                            try {
                                                $n({
                                                    url: e,
                                                    data: t,
                                                    headers: this.get_config('xhr_headers'),
                                                    options: r,
                                                    callback: i,
                                                    retriesPerformedSoFar: 0,
                                                    retryQueue: this._retryQueue,
                                                    onXHRError: this.get_config('on_xhr_error'),
                                                    onRateLimited: this.rateLimiter.on429Response,
                                                })
                                            } catch (l) {
                                                console.error(l)
                                            }
                                        else {
                                            var u,
                                                a = T.createElement('script')
                                            ;(a.type = 'text/javascript'), (a.async = !0), (a.defer = !0), (a.src = e)
                                            var c = T.getElementsByTagName('script')[0]
                                            ;(u = c.parentNode) === null || u === void 0 || u.insertBefore(a, c)
                                        }
                                    }
                                },
                            },
                            {
                                key: '_execute_array',
                                value: function (e) {
                                    var t,
                                        r = this,
                                        i = [],
                                        o = [],
                                        s = []
                                    he(e, function (a) {
                                        a &&
                                            ((t = a[0]),
                                            ie(t)
                                                ? s.push(a)
                                                : typeof a == 'function'
                                                ? a.call(r)
                                                : ie(a) && t === 'alias'
                                                ? i.push(a)
                                                : ie(a) && t.indexOf('capture') !== -1 && typeof r[t] == 'function'
                                                ? s.push(a)
                                                : o.push(a))
                                    })
                                    var u = function (a, c) {
                                        he(
                                            a,
                                            function (l) {
                                                if (ie(l[0])) {
                                                    var d = c
                                                    w(l, function (h) {
                                                        d = d[h[0]].apply(d, h.slice(1))
                                                    })
                                                } else this[l[0]].apply(this, l.slice(1))
                                            },
                                            c
                                        )
                                    }
                                    u(i, this), u(o, this), u(s, this)
                                },
                            },
                            {
                                key: '_hasBootstrappedFeatureFlags',
                                value: function () {
                                    var e, t
                                    return (
                                        (((e = this.config.bootstrap) === null || e === void 0
                                            ? void 0
                                            : e.featureFlags) &&
                                            Object.keys(
                                                (t = this.config.bootstrap) === null || t === void 0
                                                    ? void 0
                                                    : t.featureFlags
                                            ).length > 0) ||
                                        !1
                                    )
                                },
                            },
                            {
                                key: 'push',
                                value: function (e) {
                                    this._execute_array([e])
                                },
                            },
                            {
                                key: 'captureException',
                                value: function (e, t) {
                                    var r
                                    ;(r = this.exceptionAutocapture) === null ||
                                        r === void 0 ||
                                        r.captureException([e.name, void 0, void 0, void 0, e], t)
                                },
                            },
                            {
                                key: 'capture',
                                value: function (e, t) {
                                    var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : ct
                                    if (
                                        this.__loaded &&
                                        !(function (c, l) {
                                            var d = !1
                                            try {
                                                var h = c.get_config('token'),
                                                    p = c.get_config('respect_dnt'),
                                                    g = c.get_config('opt_out_capturing_persistence_type'),
                                                    f = c.get_config('opt_out_capturing_cookie_prefix') || void 0,
                                                    R = c.get_config('window')
                                                h &&
                                                    (d = bn(h, {
                                                        respectDnt: p,
                                                        persistenceType: g,
                                                        persistencePrefix: f,
                                                        window: R,
                                                    }))
                                            } catch (N) {
                                                l ||
                                                    console.error(
                                                        'Unexpected error when checking capturing opt-out status: ' + N
                                                    )
                                            }
                                            return d
                                        })(this, !1)
                                    ) {
                                        var i = (r = r || ct).transport
                                        if ((i && (r.transport = i), X(e) || typeof e != 'string'))
                                            console.error('No event name provided to posthog.capture')
                                        else if (!cr(re)) {
                                            this.sessionPersistence.update_search_keyword(),
                                                this.get_config('store_google') &&
                                                    this.sessionPersistence.update_campaign_params(),
                                                this.get_config('save_referrer') &&
                                                    this.sessionPersistence.update_referrer_info()
                                            var o = {
                                                uuid: Te(),
                                                event: e,
                                                properties: this._calculate_event_properties(e, t || {}),
                                            }
                                            e === '$identify' && ((o.$set = r.$set), (o.$set_once = r.$set_once)),
                                                ((o = ar(
                                                    o,
                                                    r._noTruncate
                                                        ? null
                                                        : this.get_config('properties_string_max_length')
                                                )).timestamp = r.timestamp || new Date()),
                                                this.get_config('debug') && E.log('PostHog.js send', o)
                                            var s = JSON.stringify(o),
                                                u = this.get_config('api_host') + (r.endpoint || '/e/'),
                                                a = r !== ct
                                            return (
                                                !this.get_config('request_batching') ||
                                                (a && !r._batchKey) ||
                                                r.send_instantly
                                                    ? this.__compress_and_send_json_request(u, s, r)
                                                    : this._requestQueue.enqueue(u, o, r),
                                                this._invokeCaptureHooks(e, o),
                                                o
                                            )
                                        }
                                    }
                                },
                            },
                            {
                                key: '_addCaptureHook',
                                value: function (e) {
                                    this.__captureHooks.push(e)
                                },
                            },
                            {
                                key: '_invokeCaptureHooks',
                                value: function (e, t) {
                                    this.config._onCapture(e, t),
                                        w(this.__captureHooks, function (r) {
                                            return r(e)
                                        })
                                },
                            },
                            {
                                key: '_calculate_event_properties',
                                value: function (e, t) {
                                    var r = this.persistence.remove_event_timer(e),
                                        i = _({}, t)
                                    if (((i.token = this.get_config('token')), e === '$snapshot')) {
                                        var o = _(
                                            _({}, this.persistence.properties()),
                                            this.sessionPersistence.properties()
                                        )
                                        return (i.distinct_id = o.distinct_id), i
                                    }
                                    var s = j.properties()
                                    if (this.sessionManager) {
                                        var u = this.sessionManager.checkAndGetSessionAndWindowId(),
                                            a = u.sessionId,
                                            c = u.windowId
                                        ;(i.$session_id = a), (i.$window_id = c)
                                    }
                                    if (this.get_config('__preview_measure_pageview_stats')) {
                                        var l = {}
                                        e === '$pageview'
                                            ? (l = this.pageViewManager.doPageView())
                                            : e === '$pageleave' && (l = this.pageViewManager.doPageLeave()),
                                            (i = L(i, l))
                                    }
                                    if ((e === '$pageview' && (i.title = T.title), e === '$performance_event')) {
                                        var d = this.persistence.properties()
                                        return (i.distinct_id = d.distinct_id), (i.$current_url = s.$current_url), i
                                    }
                                    if (r !== void 0) {
                                        var h = new Date().getTime() - r
                                        i.$duration = parseFloat((h / 1e3).toFixed(3))
                                    }
                                    i = L(
                                        {},
                                        j.properties(),
                                        this.persistence.properties(),
                                        this.sessionPersistence.properties(),
                                        i
                                    )
                                    var p = this.get_config('property_blacklist')
                                    ie(p)
                                        ? w(p, function (f) {
                                              delete i[f]
                                          })
                                        : console.error('Invalid value for property_blacklist config: ' + p)
                                    var g = this.get_config('sanitize_properties')
                                    return g && (i = g(i, e)), i
                                },
                            },
                            {
                                key: 'register',
                                value: function (e, t) {
                                    this.persistence.register(e, t)
                                },
                            },
                            {
                                key: 'register_once',
                                value: function (e, t, r) {
                                    this.persistence.register_once(e, t, r)
                                },
                            },
                            {
                                key: 'register_for_session',
                                value: function (e) {
                                    this.sessionPersistence.register(e)
                                },
                            },
                            {
                                key: 'unregister',
                                value: function (e) {
                                    this.persistence.unregister(e)
                                },
                            },
                            {
                                key: 'unregister_for_session',
                                value: function (e) {
                                    this.sessionPersistence.unregister(e)
                                },
                            },
                            {
                                key: '_register_single',
                                value: function (e, t) {
                                    this.register(m({}, e, t))
                                },
                            },
                            {
                                key: 'getFeatureFlag',
                                value: function (e, t) {
                                    return this.featureFlags.getFeatureFlag(e, t)
                                },
                            },
                            {
                                key: 'getFeatureFlagPayload',
                                value: function (e) {
                                    var t = this.featureFlags.getFeatureFlagPayload(e)
                                    try {
                                        return JSON.parse(t)
                                    } catch {
                                        return t
                                    }
                                },
                            },
                            {
                                key: 'isFeatureEnabled',
                                value: function (e, t) {
                                    return this.featureFlags.isFeatureEnabled(e, t)
                                },
                            },
                            {
                                key: 'reloadFeatureFlags',
                                value: function () {
                                    this.featureFlags.reloadFeatureFlags()
                                },
                            },
                            {
                                key: 'updateEarlyAccessFeatureEnrollment',
                                value: function (e, t) {
                                    this.featureFlags.updateEarlyAccessFeatureEnrollment(e, t)
                                },
                            },
                            {
                                key: 'getEarlyAccessFeatures',
                                value: function (e) {
                                    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1]
                                    return this.featureFlags.getEarlyAccessFeatures(e, t)
                                },
                            },
                            {
                                key: 'onFeatureFlags',
                                value: function (e) {
                                    return this.featureFlags.onFeatureFlags(e)
                                },
                            },
                            {
                                key: 'onSessionId',
                                value: function (e) {
                                    return this.sessionManager.onSessionId(e)
                                },
                            },
                            {
                                key: 'getSurveys',
                                value: function (e) {
                                    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1]
                                    this.surveys.getSurveys(e, t)
                                },
                            },
                            {
                                key: 'getActiveMatchingSurveys',
                                value: function (e) {
                                    var t = arguments.length > 1 && arguments[1] !== void 0 && arguments[1]
                                    this.surveys.getActiveMatchingSurveys(e, t)
                                },
                            },
                            {
                                key: 'identify',
                                value: function (e, t, r) {
                                    if (e) {
                                        var i = this.get_distinct_id()
                                        if ((this.register({ $user_id: e }), !this.get_property('$device_id'))) {
                                            var o = i
                                            this.register_once({ $had_persisted_distinct_id: !0, $device_id: o }, '')
                                        }
                                        e !== i &&
                                            e !== this.get_property(Ke) &&
                                            (this.unregister(Ke), this.register({ distinct_id: e }))
                                        var s = this.persistence.get_user_state() === 'anonymous'
                                        e !== i && s
                                            ? (this.persistence.set_user_state('identified'),
                                              this.setPersonPropertiesForFlags(t || {}, !1),
                                              this.capture(
                                                  '$identify',
                                                  { distinct_id: e, $anon_distinct_id: i },
                                                  { $set: t || {}, $set_once: r || {} }
                                              ),
                                              this.featureFlags.setAnonymousDistinctId(i))
                                            : (t || r) && this.setPersonProperties(t, r),
                                            e !== i && (this.reloadFeatureFlags(), this.unregister(et))
                                    } else console.error('Unique user id has not been set in posthog.identify')
                                },
                            },
                            {
                                key: 'setPersonProperties',
                                value: function (e, t) {
                                    ;(e || t) &&
                                        (this.setPersonPropertiesForFlags(e || {}),
                                        this.capture('$set', { $set: e || {}, $set_once: t || {} }))
                                },
                            },
                            {
                                key: 'group',
                                value: function (e, t, r) {
                                    if (e && t) {
                                        var i = this.getGroups()
                                        i[e] !== t && this.resetGroupPropertiesForFlags(e),
                                            this.register({ $groups: _(_({}, i), {}, m({}, e, t)) }),
                                            r &&
                                                (this.capture('$groupidentify', {
                                                    $group_type: e,
                                                    $group_key: t,
                                                    $group_set: r,
                                                }),
                                                this.setGroupPropertiesForFlags(m({}, e, r))),
                                            i[e] === t || r || this.reloadFeatureFlags()
                                    } else console.error('posthog.group requires a group type and group key')
                                },
                            },
                            {
                                key: 'resetGroups',
                                value: function () {
                                    this.register({ $groups: {} }),
                                        this.resetGroupPropertiesForFlags(),
                                        this.reloadFeatureFlags()
                                },
                            },
                            {
                                key: 'setPersonPropertiesForFlags',
                                value: function (e) {
                                    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1]
                                    this.featureFlags.setPersonPropertiesForFlags(e, t)
                                },
                            },
                            {
                                key: 'resetPersonPropertiesForFlags',
                                value: function () {
                                    this.featureFlags.resetPersonPropertiesForFlags()
                                },
                            },
                            {
                                key: 'setGroupPropertiesForFlags',
                                value: function (e) {
                                    var t = !(arguments.length > 1 && arguments[1] !== void 0) || arguments[1]
                                    this.featureFlags.setGroupPropertiesForFlags(e, t)
                                },
                            },
                            {
                                key: 'resetGroupPropertiesForFlags',
                                value: function (e) {
                                    this.featureFlags.resetGroupPropertiesForFlags(e)
                                },
                            },
                            {
                                key: 'reset',
                                value: function (e) {
                                    var t = this.get_property('$device_id')
                                    this.persistence.clear(),
                                        this.sessionPersistence.clear(),
                                        this.persistence.set_user_state('anonymous'),
                                        this.sessionManager.resetSessionId()
                                    var r = this.get_config('get_device_id')(Te())
                                    this.register_once({ distinct_id: r, $device_id: e ? r : t }, '')
                                },
                            },
                            {
                                key: 'get_distinct_id',
                                value: function () {
                                    return this.get_property('distinct_id')
                                },
                            },
                            {
                                key: 'getGroups',
                                value: function () {
                                    return this.get_property('$groups') || {}
                                },
                            },
                            {
                                key: 'get_session_id',
                                value: function () {
                                    return this.sessionManager.checkAndGetSessionAndWindowId(!0).sessionId
                                },
                            },
                            {
                                key: 'get_session_replay_url',
                                value: function (e) {
                                    var t = this.config.ui_host || this.config.api_host,
                                        r = this.sessionManager.checkAndGetSessionAndWindowId(!0),
                                        i = r.sessionId,
                                        o = r.sessionStartTimestamp,
                                        s = t + '/replay/' + i
                                    if (e != null && e.withTimestamp && o) {
                                        var u,
                                            a = (u = e.timestampLookBack) !== null && u !== void 0 ? u : 10
                                        if (!o) return s
                                        var c = Math.max(Math.floor((new Date().getTime() - o) / 1e3) - a, 0)
                                        s += '?t='.concat(c)
                                    }
                                    return s
                                },
                            },
                            {
                                key: 'alias',
                                value: function (e, t) {
                                    return e === this.get_property(ln)
                                        ? (E.critical(
                                              'Attempting to create alias for existing People user - aborting.'
                                          ),
                                          -2)
                                        : (X(t) && (t = this.get_distinct_id()),
                                          e !== t
                                              ? (this._register_single(Ke, e),
                                                this.capture('$create_alias', { alias: e, distinct_id: t }))
                                              : (console.error(
                                                    'alias matches current distinct_id - skipping api call.'
                                                ),
                                                this.identify(e),
                                                -1))
                                },
                            },
                            {
                                key: 'set_config',
                                value: function (e) {
                                    var t = _({}, this.config)
                                    vt(e) &&
                                        (L(this.config, e),
                                        this.get_config('persistence_name') ||
                                            (this.config.persistence_name = this.config.cookie_name),
                                        this.get_config('disable_persistence') ||
                                            (this.config.disable_persistence = this.config.disable_cookie),
                                        this.persistence && this.persistence.update_config(this.config),
                                        this.sessionPersistence && this.sessionPersistence.update_config(this.config),
                                        $.is_supported() && $.get('ph_debug') === 'true' && (this.config.debug = !0),
                                        this.get_config('debug') && (G.DEBUG = !0),
                                        this.sessionRecording &&
                                            e.disable_session_recording !== void 0 &&
                                            t.disable_session_recording !== e.disable_session_recording &&
                                            (e.disable_session_recording
                                                ? this.sessionRecording.stopRecording()
                                                : this.sessionRecording.startRecordingIfEnabled()))
                                },
                            },
                            {
                                key: 'startSessionRecording',
                                value: function () {
                                    this.set_config({ disable_session_recording: !1 })
                                },
                            },
                            {
                                key: 'stopSessionRecording',
                                value: function () {
                                    this.set_config({ disable_session_recording: !0 })
                                },
                            },
                            {
                                key: 'sessionRecordingStarted',
                                value: function () {
                                    var e
                                    return !((e = this.sessionRecording) === null || e === void 0 || !e.started())
                                },
                            },
                            {
                                key: 'loadToolbar',
                                value: function (e) {
                                    return this.toolbar.loadToolbar(e)
                                },
                            },
                            {
                                key: 'get_config',
                                value: function (e) {
                                    var t
                                    return (t = this.config) === null || t === void 0 ? void 0 : t[e]
                                },
                            },
                            {
                                key: 'get_property',
                                value: function (e) {
                                    return this.persistence.props[e]
                                },
                            },
                            {
                                key: 'getSessionProperty',
                                value: function (e) {
                                    return this.sessionPersistence.props[e]
                                },
                            },
                            {
                                key: 'toString',
                                value: function () {
                                    var e,
                                        t = (e = this.get_config('name')) !== null && e !== void 0 ? e : V
                                    return t !== V && (t = V + '.' + t), t
                                },
                            },
                            {
                                key: '_gdpr_init',
                                value: function () {
                                    this.get_config('opt_out_capturing_persistence_type') === 'localStorage' &&
                                        $.is_supported() &&
                                        (!this.has_opted_in_capturing() &&
                                            this.has_opted_in_capturing({ persistence_type: 'cookie' }) &&
                                            this.opt_in_capturing({ enable_persistence: !1 }),
                                        !this.has_opted_out_capturing() &&
                                            this.has_opted_out_capturing({ persistence_type: 'cookie' }) &&
                                            this.opt_out_capturing({ clear_persistence: !1 }),
                                        this.clear_opt_in_out_capturing({
                                            persistence_type: 'cookie',
                                            enable_persistence: !1,
                                        })),
                                        this.has_opted_out_capturing()
                                            ? this._gdpr_update_persistence({ clear_persistence: !0 })
                                            : this.has_opted_in_capturing() ||
                                              (!this.get_config('opt_out_capturing_by_default') &&
                                                  !ge.get('ph_optout')) ||
                                              (ge.remove('ph_optout'),
                                              this.opt_out_capturing({
                                                  clear_persistence: this.get_config('opt_out_persistence_by_default'),
                                              }))
                                },
                            },
                            {
                                key: '_gdpr_update_persistence',
                                value: function (e) {
                                    var t
                                    if (e && e.clear_persistence) t = !0
                                    else {
                                        if (!e || !e.enable_persistence) return
                                        t = !1
                                    }
                                    this.get_config('disable_persistence') ||
                                        this.persistence.disabled === t ||
                                        this.persistence.set_disabled(t),
                                        this.get_config('disable_persistence') ||
                                            this.sessionPersistence.disabled === t ||
                                            this.sessionPersistence.set_disabled(t)
                                },
                            },
                            {
                                key: '_gdpr_call_func',
                                value: function (e, t) {
                                    return (
                                        (t = L(
                                            {
                                                capture: this.capture.bind(this),
                                                persistence_type: this.get_config('opt_out_capturing_persistence_type'),
                                                cookie_prefix: this.get_config('opt_out_capturing_cookie_prefix'),
                                                cookie_expiration: this.get_config('cookie_expiration'),
                                                cross_subdomain_cookie: this.get_config('cross_subdomain_cookie'),
                                                secure_cookie: this.get_config('secure_cookie'),
                                            },
                                            t || {}
                                        )),
                                        $.is_supported() ||
                                            t.persistence_type !== 'localStorage' ||
                                            (t.persistence_type = 'cookie'),
                                        e(this.get_config('token'), {
                                            capture: t.capture,
                                            captureEventName: t.capture_event_name,
                                            captureProperties: t.capture_properties,
                                            persistenceType: t.persistence_type,
                                            persistencePrefix: t.cookie_prefix,
                                            cookieExpiration: t.cookie_expiration,
                                            crossSubdomainCookie: t.cross_subdomain_cookie,
                                            secureCookie: t.secure_cookie,
                                        })
                                    )
                                },
                            },
                            {
                                key: 'opt_in_capturing',
                                value: function (e) {
                                    ;(e = L({ enable_persistence: !0 }, e || {})),
                                        this._gdpr_call_func(Dr, e),
                                        this._gdpr_update_persistence(e)
                                },
                            },
                            {
                                key: 'opt_out_capturing',
                                value: function (e) {
                                    var t = L({ clear_persistence: !0 }, e || {})
                                    this._gdpr_call_func(Nr, t), this._gdpr_update_persistence(t)
                                },
                            },
                            {
                                key: 'has_opted_in_capturing',
                                value: function (e) {
                                    return this._gdpr_call_func(jr, e)
                                },
                            },
                            {
                                key: 'has_opted_out_capturing',
                                value: function (e) {
                                    return this._gdpr_call_func(bn, e)
                                },
                            },
                            {
                                key: 'clear_opt_in_out_capturing',
                                value: function (e) {
                                    var t = L({ enable_persistence: !0 }, e ?? {})
                                    this._gdpr_call_func(Hr, t), this._gdpr_update_persistence(t)
                                },
                            },
                            {
                                key: 'debug',
                                value: function (e) {
                                    e === !1
                                        ? (v.console.log("You've disabled debug mode."),
                                          localStorage && localStorage.removeItem('ph_debug'),
                                          this.set_config({ debug: !1 }))
                                        : (v.console.log(
                                              "You're now in debug mode. All calls to PostHog will be logged in your console.\nYou can disable this with `posthog.debug(false)`."
                                          ),
                                          localStorage && localStorage.setItem('ph_debug', 'true'),
                                          this.set_config({ debug: !0 }))
                                },
                            },
                        ]),
                        n
                    )
                })()
            ;(function (n, e) {
                for (var t = 0; t < e.length; t++) n.prototype[e[t]] = en(n.prototype[e[t]])
            })(Yn, ['identify'])
            var ae = {},
                Ei = function () {
                    M.init = function (n, e, t) {
                        if (t)
                            return (
                                M[t] ||
                                    (M[t] = ae[t] =
                                        dt(n || '', e || {}, t, function (i) {
                                            ;(M[t] = ae[t] = i), i._loaded()
                                        })),
                                M[t]
                            )
                        var r = M
                        return (
                            ae[V]
                                ? (r = ae[V])
                                : n &&
                                  ((r = dt(n, e || {}, V, function (i) {
                                      ;(ae[V] = i), i._loaded()
                                  })),
                                  (ae[V] = r)),
                            (M = r),
                            Ut === ze.INIT_SNIPPET && (v[V] = M),
                            w(ae, function (i, o) {
                                o !== V && (M[o] = i)
                            }),
                            r
                        )
                    }
                },
                xi = function () {
                    function n() {
                        n.done ||
                            ((n.done = !0),
                            (zn = !1),
                            w(ae, function (e) {
                                e._dom_loaded()
                            }))
                    }
                    T.addEventListener &&
                        (T.readyState === 'complete' ? n() : T.addEventListener('DOMContentLoaded', n, !1)),
                        Be(v, 'load', n, !0)
                }
            ;(Ut = ze.INIT_SNIPPET),
                X(v.posthog) && (v.posthog = []),
                (M = v.posthog).__loaded || (M.config && M.persistence)
                    ? console.error('PostHog library has already been downloaded at least once.')
                    : (w(M._i, function (n) {
                          n && ie(n) && (ae[n[2]] = dt.apply(void 0, Ye(n)))
                      }),
                      Ei(),
                      M.init(),
                      w(ae, function (n) {
                          n._loaded()
                      }),
                      xi())
        })()
    })
    var tr = Hi(er())
    ;(function (C, _) {
        var D, b, z, F
        _.__SV ||
            ((window.posthog = _),
            (_._i = []),
            (_.init = function (m, Qe, te) {
                function Le(me, ne) {
                    var U = ne.split('.')
                    U.length == 2 && ((me = me[U[0]]), (ne = U[1])),
                        (me[ne] = function () {
                            me.push([ne].concat(Array.prototype.slice.call(arguments, 0)))
                        })
                }
                ;((z = C.createElement('script')).type = 'text/javascript'),
                    (z.async = !0),
                    (z.src = tr.default),
                    (F = C.getElementsByTagName('script')[0]).parentNode.insertBefore(z, F)
                var fe = _
                for (
                    te !== void 0 ? (fe = _[te] = []) : (te = 'posthog'),
                        fe.people = fe.people || [],
                        fe.toString = function (me) {
                            var ne = 'posthog'
                            return te !== 'posthog' && (ne += '.' + te), me || (ne += ' (stub)'), ne
                        },
                        fe.people.toString = function () {
                            return fe.toString(1) + '.people (stub)'
                        },
                        D =
                            'capture identify alias people.set people.set_once set_config register register_once unregister opt_out_capturing has_opted_out_capturing opt_in_capturing reset isFeatureEnabled onFeatureFlags getFeatureFlag getFeatureFlagPayload reloadFeatureFlags group updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures getActiveMatchingSurveys getSurveys'.split(
                                ' '
                            ),
                        b = 0;
                    b < D.length;
                    b++
                )
                    Le(fe, D[b])
                _._i.push([m, Qe, te])
            }),
            (_.__SV = 1))
    })(document, window.posthog || [])
    posthog.init('phc_Q72CwBKCQY7SQnoPzrLkDl0mb6UB6lIOrL8nmeJxwZk', { api_host: 'https://app.posthog.com' })
})()
