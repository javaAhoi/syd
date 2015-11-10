/*!
 * jQuery JavaScript Library v1.10.2
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03T13:48Z
 */
!
function(e, t) {
    function n(e) {
        var t = e.length,
        n = ut.type(e);
        return ut.isWindow(e) ? !1 : 1 === e.nodeType && t ? !0 : "array" === n || "function" !== n && (0 === t || "number" == typeof t && t > 0 && t - 1 in e)
    }
    function i(e) {
        var t = Et[e] = {};
        return ut.each(e.match(ht) || [],
        function(e, n) {
            t[n] = !0
        }),
        t
    }
    function r(e, n, i, r) {
        if (ut.acceptData(e)) {
            var o, s, a = ut.expando,
            l = e.nodeType,
            c = l ? ut.cache: e,
            u = l ? e[a] : e[a] && a;
            if (u && c[u] && (r || c[u].data) || i !== t || "string" != typeof n) return u || (u = l ? e[a] = tt.pop() || ut.guid++:a),
            c[u] || (c[u] = l ? {}: {
                toJSON: ut.noop
            }),
            ("object" == typeof n || "function" == typeof n) && (r ? c[u] = ut.extend(c[u], n) : c[u].data = ut.extend(c[u].data, n)),
            s = c[u],
            r || (s.data || (s.data = {}), s = s.data),
            i !== t && (s[ut.camelCase(n)] = i),
            "string" == typeof n ? (o = s[n], null == o && (o = s[ut.camelCase(n)])) : o = s,
            o
        }
    }
    function o(e, t, n) {
        if (ut.acceptData(e)) {
            var i, r, o = e.nodeType,
            s = o ? ut.cache: e,
            l = o ? e[ut.expando] : ut.expando;
            if (s[l]) {
                if (t && (i = n ? s[l] : s[l].data)) {
                    ut.isArray(t) ? t = t.concat(ut.map(t, ut.camelCase)) : t in i ? t = [t] : (t = ut.camelCase(t), t = t in i ? [t] : t.split(" ")),
                    r = t.length;
                    for (; r--;) delete i[t[r]];
                    if (n ? !a(i) : !ut.isEmptyObject(i)) return
                } (n || (delete s[l].data, a(s[l]))) && (o ? ut.cleanData([e], !0) : ut.support.deleteExpando || s != s.window ? delete s[l] : s[l] = null)
            }
        }
    }
    function s(e, n, i) {
        if (i === t && 1 === e.nodeType) {
            var r = "data-" + n.replace(_t, "-$1").toLowerCase();
            if (i = e.getAttribute(r), "string" == typeof i) {
                try {
                    i = "true" === i ? !0 : "false" === i ? !1 : "null" === i ? null: +i + "" === i ? +i: Nt.test(i) ? ut.parseJSON(i) : i
                } catch(o) {}
                ut.data(e, n, i)
            } else i = t
        }
        return i
    }
    function a(e) {
        var t;
        for (t in e) if (("data" !== t || !ut.isEmptyObject(e[t])) && "toJSON" !== t) return ! 1;
        return ! 0
    }
    function l() {
        return ! 0
    }
    function c() {
        return ! 1
    }
    function u() {
        try {
            return G.activeElement
        } catch(e) {}
    }
    function d(e, t) {
        do e = e[t];
        while (e && 1 !== e.nodeType);
        return e
    }
    function h(e, t, n) {
        if (ut.isFunction(t)) return ut.grep(e,
        function(e, i) {
            return !! t.call(e, i, e) !== n
        });
        if (t.nodeType) return ut.grep(e,
        function(e) {
            return e === t !== n
        });
        if ("string" == typeof t) {
            if ($t.test(t)) return ut.filter(t, e, n);
            t = ut.filter(t, e)
        }
        return ut.grep(e,
        function(e) {
            return ut.inArray(e, t) >= 0 !== n
        })
    }
    function f(e) {
        var t = Vt.split("|"),
        n = e.createDocumentFragment();
        if (n.createElement) for (; t.length;) n.createElement(t.pop());
        return n
    }
    function p(e, t) {
        return ut.nodeName(e, "table") && ut.nodeName(1 === t.nodeType ? t: t.firstChild, "tr") ? e.getElementsByTagName("tbody")[0] || e.appendChild(e.ownerDocument.createElement("tbody")) : e
    }
    function m(e) {
        return e.type = (null !== ut.find.attr(e, "type")) + "/" + e.type,
        e
    }
    function g(e) {
        var t = on.exec(e.type);
        return t ? e.type = t[1] : e.removeAttribute("type"),
        e
    }
    function v(e, t) {
        for (var n, i = 0; null != (n = e[i]); i++) ut._data(n, "globalEval", !t || ut._data(t[i], "globalEval"))
    }
    function y(e, t) {
        if (1 === t.nodeType && ut.hasData(e)) {
            var n, i, r, o = ut._data(e),
            s = ut._data(t, o),
            a = o.events;
            if (a) {
                delete s.handle,
                s.events = {};
                for (n in a) for (i = 0, r = a[n].length; r > i; i++) ut.event.add(t, n, a[n][i])
            }
            s.data && (s.data = ut.extend({},
            s.data))
        }
    }
    function b(e, t) {
        var n, i, r;
        if (1 === t.nodeType) {
            if (n = t.nodeName.toLowerCase(), !ut.support.noCloneEvent && t[ut.expando]) {
                r = ut._data(t);
                for (i in r.events) ut.removeEvent(t, i, r.handle);
                t.removeAttribute(ut.expando)
            }
            "script" === n && t.text !== e.text ? (m(t).text = e.text, g(t)) : "object" === n ? (t.parentNode && (t.outerHTML = e.outerHTML), ut.support.html5Clone && e.innerHTML && !ut.trim(t.innerHTML) && (t.innerHTML = e.innerHTML)) : "input" === n && tn.test(e.type) ? (t.defaultChecked = t.checked = e.checked, t.value !== e.value && (t.value = e.value)) : "option" === n ? t.defaultSelected = t.selected = e.defaultSelected: ("input" === n || "textarea" === n) && (t.defaultValue = e.defaultValue)
        }
    }
    function w(e, n) {
        var i, r, o = 0,
        s = typeof e.getElementsByTagName !== Y ? e.getElementsByTagName(n || "*") : typeof e.querySelectorAll !== Y ? e.querySelectorAll(n || "*") : t;
        if (!s) for (s = [], i = e.childNodes || e; null != (r = i[o]); o++) ! n || ut.nodeName(r, n) ? s.push(r) : ut.merge(s, w(r, n));
        return n === t || n && ut.nodeName(e, n) ? ut.merge([e], s) : s
    }
    function x(e) {
        tn.test(e.type) && (e.defaultChecked = e.checked)
    }
    function C(e, t) {
        if (t in e) return t;
        for (var n = t.charAt(0).toUpperCase() + t.slice(1), i = t, r = En.length; r--;) if (t = En[r] + n, t in e) return t;
        return i
    }
    function S(e, t) {
        return e = t || e,
        "none" === ut.css(e, "display") || !ut.contains(e.ownerDocument, e)
    }
    function T(e, t) {
        for (var n, i, r, o = [], s = 0, a = e.length; a > s; s++) i = e[s],
        i.style && (o[s] = ut._data(i, "olddisplay"), n = i.style.display, t ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && S(i) && (o[s] = ut._data(i, "olddisplay", k(i.nodeName)))) : o[s] || (r = S(i), (n && "none" !== n || !r) && ut._data(i, "olddisplay", r ? n: ut.css(i, "display"))));
        for (s = 0; a > s; s++) i = e[s],
        i.style && (t && "none" !== i.style.display && "" !== i.style.display || (i.style.display = t ? o[s] || "": "none"));
        return e
    }
    function E(e, t, n) {
        var i = yn.exec(t);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : t
    }
    function N(e, t, n, i, r) {
        for (var o = n === (i ? "border": "content") ? 4 : "width" === t ? 1 : 0, s = 0; 4 > o; o += 2)"margin" === n && (s += ut.css(e, n + Tn[o], !0, r)),
        i ? ("content" === n && (s -= ut.css(e, "padding" + Tn[o], !0, r)), "margin" !== n && (s -= ut.css(e, "border" + Tn[o] + "Width", !0, r))) : (s += ut.css(e, "padding" + Tn[o], !0, r), "padding" !== n && (s += ut.css(e, "border" + Tn[o] + "Width", !0, r)));
        return s
    }
    function _(e, t, n) {
        var i = !0,
        r = "width" === t ? e.offsetWidth: e.offsetHeight,
        o = dn(e),
        s = ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, o);
        if (0 >= r || null == r) {
            if (r = hn(e, t, o), (0 > r || null == r) && (r = e.style[t]), bn.test(r)) return r;
            i = s && (ut.support.boxSizingReliable || r === e.style[t]),
            r = parseFloat(r) || 0
        }
        return r + N(e, t, n || (s ? "border": "content"), i, o) + "px"
    }
    function k(e) {
        var t = G,
        n = xn[e];
        return n || (n = A(e, t), "none" !== n && n || (un = (un || ut("<iframe frameborder='0' width='0' height='0'/>").css("cssText", "display:block !important")).appendTo(t.documentElement), t = (un[0].contentWindow || un[0].contentDocument).document, t.write("<!doctype html><html><body>"), t.close(), n = A(e, t), un.detach()), xn[e] = n),
        n
    }
    function A(e, t) {
        var n = ut(t.createElement(e)).appendTo(t.body),
        i = ut.css(n[0], "display");
        return n.remove(),
        i
    }
    function P(e, t, n, i) {
        var r;
        if (ut.isArray(t)) ut.each(t,
        function(t, r) {
            n || _n.test(e) ? i(e, r) : P(e + "[" + ("object" == typeof r ? t: "") + "]", r, n, i)
        });
        else if (n || "object" !== ut.type(t)) i(e, t);
        else for (r in t) P(e + "[" + r + "]", t[r], n, i)
    }
    function D(e) {
        return function(t, n) {
            "string" != typeof t && (n = t, t = "*");
            var i, r = 0,
            o = t.toLowerCase().match(ht) || [];
            if (ut.isFunction(n)) for (; i = o[r++];)"+" === i[0] ? (i = i.slice(1) || "*", (e[i] = e[i] || []).unshift(n)) : (e[i] = e[i] || []).push(n)
        }
    }
    function L(e, t, n, i) {
        function r(a) {
            var l;
            return o[a] = !0,
            ut.each(e[a] || [],
            function(e, a) {
                var c = a(t, n, i);
                return "string" != typeof c || s || o[c] ? s ? !(l = c) : void 0 : (t.dataTypes.unshift(c), r(c), !1)
            }),
            l
        }
        var o = {},
        s = e === zn;
        return r(t.dataTypes[0]) || !o["*"] && r("*")
    }
    function R(e, n) {
        var i, r, o = ut.ajaxSettings.flatOptions || {};
        for (r in n) n[r] !== t && ((o[r] ? e: i || (i = {}))[r] = n[r]);
        return i && ut.extend(!0, e, i),
        e
    }
    function O(e, n, i) {
        for (var r, o, s, a, l = e.contents,
        c = e.dataTypes;
        "*" === c[0];) c.shift(),
        o === t && (o = e.mimeType || n.getResponseHeader("Content-Type"));
        if (o) for (a in l) if (l[a] && l[a].test(o)) {
            c.unshift(a);
            break
        }
        if (c[0] in i) s = c[0];
        else {
            for (a in i) {
                if (!c[0] || e.converters[a + " " + c[0]]) {
                    s = a;
                    break
                }
                r || (r = a)
            }
            s = s || r
        }
        return s ? (s !== c[0] && c.unshift(s), i[s]) : void 0
    }
    function M(e, t, n, i) {
        var r, o, s, a, l, c = {},
        u = e.dataTypes.slice();
        if (u[1]) for (s in e.converters) c[s.toLowerCase()] = e.converters[s];
        for (o = u.shift(); o;) if (e.responseFields[o] && (n[e.responseFields[o]] = t), !l && i && e.dataFilter && (t = e.dataFilter(t, e.dataType)), l = o, o = u.shift()) if ("*" === o) o = l;
        else if ("*" !== l && l !== o) {
            if (s = c[l + " " + o] || c["* " + o], !s) for (r in c) if (a = r.split(" "), a[1] === o && (s = c[l + " " + a[0]] || c["* " + a[0]])) {
                s === !0 ? s = c[r] : c[r] !== !0 && (o = a[0], u.unshift(a[1]));
                break
            }
            if (s !== !0) if (s && e["throws"]) t = s(t);
            else try {
                t = s(t)
            } catch(d) {
                return {
                    state: "parsererror",
                    error: s ? d: "No conversion from " + l + " to " + o
                }
            }
        }
        return {
            state: "success",
            data: t
        }
    }
    function I() {
        try {
            return new e.XMLHttpRequest
        } catch(t) {}
    }
    function H() {
        try {
            return new e.ActiveXObject("Microsoft.XMLHTTP")
        } catch(t) {}
    }
    function j() {
        return setTimeout(function() {
            Zn = t
        }),
        Zn = ut.now()
    }
    function B(e, t, n) {
        for (var i, r = (oi[t] || []).concat(oi["*"]), o = 0, s = r.length; s > o; o++) if (i = r[o].call(n, t, e)) return i
    }
    function F(e, t, n) {
        var i, r, o = 0,
        s = ri.length,
        a = ut.Deferred().always(function() {
            delete l.elem
        }),
        l = function() {
            if (r) return ! 1;
            for (var t = Zn || j(), n = Math.max(0, c.startTime + c.duration - t), i = n / c.duration || 0, o = 1 - i, s = 0, l = c.tweens.length; l > s; s++) c.tweens[s].run(o);
            return a.notifyWith(e, [c, o, n]),
            1 > o && l ? n: (a.resolveWith(e, [c]), !1)
        },
        c = a.promise({
            elem: e,
            props: ut.extend({},
            t),
            opts: ut.extend(!0, {
                specialEasing: {}
            },
            n),
            originalProperties: t,
            originalOptions: n,
            startTime: Zn || j(),
            duration: n.duration,
            tweens: [],
            createTween: function(t, n) {
                var i = ut.Tween(e, c.opts, t, n, c.opts.specialEasing[t] || c.opts.easing);
                return c.tweens.push(i),
                i
            },
            stop: function(t) {
                var n = 0,
                i = t ? c.tweens.length: 0;
                if (r) return this;
                for (r = !0; i > n; n++) c.tweens[n].run(1);
                return t ? a.resolveWith(e, [c, t]) : a.rejectWith(e, [c, t]),
                this
            }
        }),
        u = c.props;
        for (W(u, c.opts.specialEasing); s > o; o++) if (i = ri[o].call(c, e, u, c.opts)) return i;
        return ut.map(u, B, c),
        ut.isFunction(c.opts.start) && c.opts.start.call(e, c),
        ut.fx.timer(ut.extend(l, {
            elem: e,
            anim: c,
            queue: c.opts.queue
        })),
        c.progress(c.opts.progress).done(c.opts.done, c.opts.complete).fail(c.opts.fail).always(c.opts.always)
    }
    function W(e, t) {
        var n, i, r, o, s;
        for (n in e) if (i = ut.camelCase(n), r = t[i], o = e[n], ut.isArray(o) && (r = o[1], o = e[n] = o[0]), n !== i && (e[i] = o, delete e[n]), s = ut.cssHooks[i], s && "expand" in s) {
            o = s.expand(o),
            delete e[i];
            for (n in o) n in e || (e[n] = o[n], t[n] = r)
        } else t[i] = r
    }
    function $(e, t, n) {
        var i, r, o, s, a, l, c = this,
        u = {},
        d = e.style,
        h = e.nodeType && S(e),
        f = ut._data(e, "fxshow");
        n.queue || (a = ut._queueHooks(e, "fx"), null == a.unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function() {
            a.unqueued || l()
        }), a.unqueued++, c.always(function() {
            c.always(function() {
                a.unqueued--,
                ut.queue(e, "fx").length || a.empty.fire()
            })
        })),
        1 === e.nodeType && ("height" in t || "width" in t) && (n.overflow = [d.overflow, d.overflowX, d.overflowY], "inline" === ut.css(e, "display") && "none" === ut.css(e, "float") && (ut.support.inlineBlockNeedsLayout && "inline" !== k(e.nodeName) ? d.zoom = 1 : d.display = "inline-block")),
        n.overflow && (d.overflow = "hidden", ut.support.shrinkWrapBlocks || c.always(function() {
            d.overflow = n.overflow[0],
            d.overflowX = n.overflow[1],
            d.overflowY = n.overflow[2]
        }));
        for (i in t) if (r = t[i], ti.exec(r)) {
            if (delete t[i], o = o || "toggle" === r, r === (h ? "hide": "show")) continue;
            u[i] = f && f[i] || ut.style(e, i)
        }
        if (!ut.isEmptyObject(u)) {
            f ? "hidden" in f && (h = f.hidden) : f = ut._data(e, "fxshow", {}),
            o && (f.hidden = !h),
            h ? ut(e).show() : c.done(function() {
                ut(e).hide()
            }),
            c.done(function() {
                var t;
                ut._removeData(e, "fxshow");
                for (t in u) ut.style(e, t, u[t])
            });
            for (i in u) s = B(h ? f[i] : 0, i, c),
            i in f || (f[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
        }
    }
    function q(e, t, n, i, r) {
        return new q.prototype.init(e, t, n, i, r)
    }
    function z(e, t) {
        var n, i = {
            height: e
        },
        r = 0;
        for (t = t ? 1 : 0; 4 > r; r += 2 - t) n = Tn[r],
        i["margin" + n] = i["padding" + n] = e;
        return t && (i.opacity = i.width = e),
        i
    }
    function U(e) {
        return ut.isWindow(e) ? e: 9 === e.nodeType ? e.defaultView || e.parentWindow: !1
    }
    var V, X, Y = typeof t,
    Q = e.location,
    G = e.document,
    K = G.documentElement,
    J = e.jQuery,
    Z = e.$,
    et = {},
    tt = [],
    nt = "1.10.2",
    it = tt.concat,
    rt = tt.push,
    ot = tt.slice,
    st = tt.indexOf,
    at = et.toString,
    lt = et.hasOwnProperty,
    ct = nt.trim,
    ut = function(e, t) {
        return new ut.fn.init(e, t, X)
    },
    dt = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
    ht = /\S+/g,
    ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
    pt = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,
    mt = /^<(\w+)\s*\/?>(?:<\/\1>|)$/,
    gt = /^[\],:{}\s]*$/,
    vt = /(?:^|:|,)(?:\s*\[)+/g,
    yt = /\\(?:["\\\/bfnrt]|u[\da-fA-F]{4})/g,
    bt = /"[^"\\\r\n]*"|true|false|null|-?(?:\d+\.|)\d+(?:[eE][+-]?\d+|)/g,
    wt = /^-ms-/,
    xt = /-([\da-z])/gi,
    Ct = function(e, t) {
        return t.toUpperCase()
    },
    St = function(e) { (G.addEventListener || "load" === e.type || "complete" === G.readyState) && (Tt(), ut.ready())
    },
    Tt = function() {
        G.addEventListener ? (G.removeEventListener("DOMContentLoaded", St, !1), e.removeEventListener("load", St, !1)) : (G.detachEvent("onreadystatechange", St), e.detachEvent("onload", St))
    };
    ut.fn = ut.prototype = {
        jquery: nt,
        constructor: ut,
        init: function(e, n, i) {
            var r, o;
            if (!e) return this;
            if ("string" == typeof e) {
                if (r = "<" === e.charAt(0) && ">" === e.charAt(e.length - 1) && e.length >= 3 ? [null, e, null] : pt.exec(e), !r || !r[1] && n) return ! n || n.jquery ? (n || i).find(e) : this.constructor(n).find(e);
                if (r[1]) {
                    if (n = n instanceof ut ? n[0] : n, ut.merge(this, ut.parseHTML(r[1], n && n.nodeType ? n.ownerDocument || n: G, !0)), mt.test(r[1]) && ut.isPlainObject(n)) for (r in n) ut.isFunction(this[r]) ? this[r](n[r]) : this.attr(r, n[r]);
                    return this
                }
                if (o = G.getElementById(r[2]), o && o.parentNode) {
                    if (o.id !== r[2]) return i.find(e);
                    this.length = 1,
                    this[0] = o
                }
                return this.context = G,
                this.selector = e,
                this
            }
            return e.nodeType ? (this.context = this[0] = e, this.length = 1, this) : ut.isFunction(e) ? i.ready(e) : (e.selector !== t && (this.selector = e.selector, this.context = e.context), ut.makeArray(e, this))
        },
        selector: "",
        length: 0,
        toArray: function() {
            return ot.call(this)
        },
        get: function(e) {
            return null == e ? this.toArray() : 0 > e ? this[this.length + e] : this[e]
        },
        pushStack: function(e) {
            var t = ut.merge(this.constructor(), e);
            return t.prevObject = this,
            t.context = this.context,
            t
        },
        each: function(e, t) {
            return ut.each(this, e, t)
        },
        ready: function(e) {
            return ut.ready.promise().done(e),
            this
        },
        slice: function() {
            return this.pushStack(ot.apply(this, arguments))
        },
        first: function() {
            return this.eq(0)
        },
        last: function() {
            return this.eq( - 1)
        },
        eq: function(e) {
            var t = this.length,
            n = +e + (0 > e ? t: 0);
            return this.pushStack(n >= 0 && t > n ? [this[n]] : [])
        },
        map: function(e) {
            return this.pushStack(ut.map(this,
            function(t, n) {
                return e.call(t, n, t)
            }))
        },
        end: function() {
            return this.prevObject || this.constructor(null)
        },
        push: rt,
        sort: [].sort,
        splice: [].splice
    },
    ut.fn.init.prototype = ut.fn,
    ut.extend = ut.fn.extend = function() {
        var e, n, i, r, o, s, a = arguments[0] || {},
        l = 1,
        c = arguments.length,
        u = !1;
        for ("boolean" == typeof a && (u = a, a = arguments[1] || {},
        l = 2), "object" == typeof a || ut.isFunction(a) || (a = {}), c === l && (a = this, --l); c > l; l++) if (null != (o = arguments[l])) for (r in o) e = a[r],
        i = o[r],
        a !== i && (u && i && (ut.isPlainObject(i) || (n = ut.isArray(i))) ? (n ? (n = !1, s = e && ut.isArray(e) ? e: []) : s = e && ut.isPlainObject(e) ? e: {},
        a[r] = ut.extend(u, s, i)) : i !== t && (a[r] = i));
        return a
    },
    ut.extend({
        expando: "jQuery" + (nt + Math.random()).replace(/\D/g, ""),
        noConflict: function(t) {
            return e.$ === ut && (e.$ = Z),
            t && e.jQuery === ut && (e.jQuery = J),
            ut
        },
        isReady: !1,
        readyWait: 1,
        holdReady: function(e) {
            e ? ut.readyWait++:ut.ready(!0)
        },
        ready: function(e) {
            if (e === !0 ? !--ut.readyWait: !ut.isReady) {
                if (!G.body) return setTimeout(ut.ready);
                ut.isReady = !0,
                e !== !0 && --ut.readyWait > 0 || (V.resolveWith(G, [ut]), ut.fn.trigger && ut(G).trigger("ready").off("ready"))
            }
        },
        isFunction: function(e) {
            return "function" === ut.type(e)
        },
        isArray: Array.isArray ||
        function(e) {
            return "array" === ut.type(e)
        },
        isWindow: function(e) {
            return null != e && e == e.window
        },
        isNumeric: function(e) {
            return ! isNaN(parseFloat(e)) && isFinite(e)
        },
        type: function(e) {
            return null == e ? String(e) : "object" == typeof e || "function" == typeof e ? et[at.call(e)] || "object": typeof e
        },
        isPlainObject: function(e) {
            var n;
            if (!e || "object" !== ut.type(e) || e.nodeType || ut.isWindow(e)) return ! 1;
            try {
                if (e.constructor && !lt.call(e, "constructor") && !lt.call(e.constructor.prototype, "isPrototypeOf")) return ! 1
            } catch(i) {
                return ! 1
            }
            if (ut.support.ownLast) for (n in e) return lt.call(e, n);
            for (n in e);
            return n === t || lt.call(e, n)
        },
        isEmptyObject: function(e) {
            var t;
            for (t in e) return ! 1;
            return ! 0
        },
        error: function(e) {
            throw new Error(e)
        },
        parseHTML: function(e, t, n) {
            if (!e || "string" != typeof e) return null;
            "boolean" == typeof t && (n = t, t = !1),
            t = t || G;
            var i = mt.exec(e),
            r = !n && [];
            return i ? [t.createElement(i[1])] : (i = ut.buildFragment([e], t, r), r && ut(r).remove(), ut.merge([], i.childNodes))
        },
        parseJSON: function(t) {
            return e.JSON && e.JSON.parse ? e.JSON.parse(t) : null === t ? t: "string" == typeof t && (t = ut.trim(t), t && gt.test(t.replace(yt, "@").replace(bt, "]").replace(vt, ""))) ? new Function("return " + t)() : (ut.error("Invalid JSON: " + t), void 0)
        },
        parseXML: function(n) {
            var i, r;
            if (!n || "string" != typeof n) return null;
            try {
                e.DOMParser ? (r = new DOMParser, i = r.parseFromString(n, "text/xml")) : (i = new ActiveXObject("Microsoft.XMLDOM"), i.async = "false", i.loadXML(n))
            } catch(o) {
                i = t
            }
            return i && i.documentElement && !i.getElementsByTagName("parsererror").length || ut.error("Invalid XML: " + n),
            i
        },
        noop: function() {},
        globalEval: function(t) {
            t && ut.trim(t) && (e.execScript ||
            function(t) {
                e.eval.call(e, t)
            })(t)
        },
        camelCase: function(e) {
            return e.replace(wt, "ms-").replace(xt, Ct)
        },
        nodeName: function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        },
        each: function(e, t, i) {
            var r, o = 0,
            s = e.length,
            a = n(e);
            if (i) {
                if (a) for (; s > o && (r = t.apply(e[o], i), r !== !1); o++);
                else for (o in e) if (r = t.apply(e[o], i), r === !1) break
            } else if (a) for (; s > o && (r = t.call(e[o], o, e[o]), r !== !1); o++);
            else for (o in e) if (r = t.call(e[o], o, e[o]), r === !1) break;
            return e
        },
        trim: ct && !ct.call("﻿ ") ?
        function(e) {
            return null == e ? "": ct.call(e)
        }: function(e) {
            return null == e ? "": (e + "").replace(ft, "")
        },
        makeArray: function(e, t) {
            var i = t || [];
            return null != e && (n(Object(e)) ? ut.merge(i, "string" == typeof e ? [e] : e) : rt.call(i, e)),
            i
        },
        inArray: function(e, t, n) {
            var i;
            if (t) {
                if (st) return st.call(t, e, n);
                for (i = t.length, n = n ? 0 > n ? Math.max(0, i + n) : n: 0; i > n; n++) if (n in t && t[n] === e) return n
            }
            return - 1
        },
        merge: function(e, n) {
            var i = n.length,
            r = e.length,
            o = 0;
            if ("number" == typeof i) for (; i > o; o++) e[r++] = n[o];
            else for (; n[o] !== t;) e[r++] = n[o++];
            return e.length = r,
            e
        },
        grep: function(e, t, n) {
            var i, r = [],
            o = 0,
            s = e.length;
            for (n = !!n; s > o; o++) i = !!t(e[o], o),
            n !== i && r.push(e[o]);
            return r
        },
        map: function(e, t, i) {
            var r, o = 0,
            s = e.length,
            a = n(e),
            l = [];
            if (a) for (; s > o; o++) r = t(e[o], o, i),
            null != r && (l[l.length] = r);
            else for (o in e) r = t(e[o], o, i),
            null != r && (l[l.length] = r);
            return it.apply([], l)
        },
        guid: 1,
        proxy: function(e, n) {
            var i, r, o;
            return "string" == typeof n && (o = e[n], n = e, e = o),
            ut.isFunction(e) ? (i = ot.call(arguments, 2), r = function() {
                return e.apply(n || this, i.concat(ot.call(arguments)))
            },
            r.guid = e.guid = e.guid || ut.guid++, r) : t
        },
        access: function(e, n, i, r, o, s, a) {
            var l = 0,
            c = e.length,
            u = null == i;
            if ("object" === ut.type(i)) {
                o = !0;
                for (l in i) ut.access(e, n, l, i[l], !0, s, a)
            } else if (r !== t && (o = !0, ut.isFunction(r) || (a = !0), u && (a ? (n.call(e, r), n = null) : (u = n, n = function(e, t, n) {
                return u.call(ut(e), n)
            })), n)) for (; c > l; l++) n(e[l], i, a ? r: r.call(e[l], l, n(e[l], i)));
            return o ? e: u ? n.call(e) : c ? n(e[0], i) : s
        },
        now: function() {
            return (new Date).getTime()
        },
        swap: function(e, t, n, i) {
            var r, o, s = {};
            for (o in t) s[o] = e.style[o],
            e.style[o] = t[o];
            r = n.apply(e, i || []);
            for (o in t) e.style[o] = s[o];
            return r
        }
    }),
    ut.ready.promise = function(t) {
        if (!V) if (V = ut.Deferred(), "complete" === G.readyState) setTimeout(ut.ready);
        else if (G.addEventListener) G.addEventListener("DOMContentLoaded", St, !1),
        e.addEventListener("load", St, !1);
        else {
            G.attachEvent("onreadystatechange", St),
            e.attachEvent("onload", St);
            var n = !1;
            try {
                n = null == e.frameElement && G.documentElement
            } catch(i) {}
            n && n.doScroll && !
            function r() {
                if (!ut.isReady) {
                    try {
                        n.doScroll("left")
                    } catch(e) {
                        return setTimeout(r, 50)
                    }
                    Tt(),
                    ut.ready()
                }
            } ()
        }
        return V.promise(t)
    },
    ut.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),
    function(e, t) {
        et["[object " + t + "]"] = t.toLowerCase()
    }),
    X = ut(G),
    /*!
 * Sizzle CSS Selector Engine v1.10.2
 * http://sizzlejs.com/
 *
 * Copyright 2013 jQuery Foundation, Inc. and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2013-07-03
 */
    function(e, t) {
        function n(e, t, n, i) {
            var r, o, s, a, l, c, u, d, p, m;
            if ((t ? t.ownerDocument || t: F) !== L && D(t), t = t || L, n = n || [], !e || "string" != typeof e) return n;
            if (1 !== (a = t.nodeType) && 9 !== a) return [];
            if (O && !i) {
                if (r = bt.exec(e)) if (s = r[1]) {
                    if (9 === a) {
                        if (o = t.getElementById(s), !o || !o.parentNode) return n;
                        if (o.id === s) return n.push(o),
                        n
                    } else if (t.ownerDocument && (o = t.ownerDocument.getElementById(s)) && j(t, o) && o.id === s) return n.push(o),
                    n
                } else {
                    if (r[2]) return et.apply(n, t.getElementsByTagName(e)),
                    n;
                    if ((s = r[3]) && S.getElementsByClassName && t.getElementsByClassName) return et.apply(n, t.getElementsByClassName(s)),
                    n
                }
                if (S.qsa && (!M || !M.test(e))) {
                    if (d = u = B, p = t, m = 9 === a && e, 1 === a && "object" !== t.nodeName.toLowerCase()) {
                        for (c = h(e), (u = t.getAttribute("id")) ? d = u.replace(Ct, "\\$&") : t.setAttribute("id", d), d = "[id='" + d + "'] ", l = c.length; l--;) c[l] = d + f(c[l]);
                        p = ft.test(e) && t.parentNode || t,
                        m = c.join(",")
                    }
                    if (m) try {
                        return et.apply(n, p.querySelectorAll(m)),
                        n
                    } catch(g) {} finally {
                        u || t.removeAttribute("id")
                    }
                }
            }
            return x(e.replace(ct, "$1"), t, n, i)
        }
        function i() {
            function e(n, i) {
                return t.push(n += " ") > E.cacheLength && delete e[t.shift()],
                e[n] = i
            }
            var t = [];
            return e
        }
        function r(e) {
            return e[B] = !0,
            e
        }
        function o(e) {
            var t = L.createElement("div");
            try {
                return !! e(t)
            } catch(n) {
                return ! 1
            } finally {
                t.parentNode && t.parentNode.removeChild(t),
                t = null
            }
        }
        function s(e, t) {
            for (var n = e.split("|"), i = e.length; i--;) E.attrHandle[n[i]] = t
        }
        function a(e, t) {
            var n = t && e,
            i = n && 1 === e.nodeType && 1 === t.nodeType && (~t.sourceIndex || Q) - (~e.sourceIndex || Q);
            if (i) return i;
            if (n) for (; n = n.nextSibling;) if (n === t) return - 1;
            return e ? 1 : -1
        }
        function l(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return "input" === n && t.type === e
            }
        }
        function c(e) {
            return function(t) {
                var n = t.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && t.type === e
            }
        }
        function u(e) {
            return r(function(t) {
                return t = +t,
                r(function(n, i) {
                    for (var r, o = e([], n.length, t), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }
        function d() {}
        function h(e, t) {
            var i, r, o, s, a, l, c, u = z[e + " "];
            if (u) return t ? 0 : u.slice(0);
            for (a = e, l = [], c = E.preFilter; a;) { (!i || (r = dt.exec(a))) && (r && (a = a.slice(r[0].length) || a), l.push(o = [])),
                i = !1,
                (r = ht.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(ct, " ")
                }), a = a.slice(i.length));
                for (s in E.filter) ! (r = vt[s].exec(a)) || c[s] && !(r = c[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return t ? a.length: a ? n.error(e) : z(e, l).slice(0)
        }
        function f(e) {
            for (var t = 0,
            n = e.length,
            i = ""; n > t; t++) i += e[t].value;
            return i
        }
        function p(e, t, n) {
            var i = t.dir,
            r = n && "parentNode" === i,
            o = $++;
            return t.first ?
            function(t, n, o) {
                for (; t = t[i];) if (1 === t.nodeType || r) return e(t, n, o)
            }: function(t, n, s) {
                var a, l, c, u = W + " " + o;
                if (s) {
                    for (; t = t[i];) if ((1 === t.nodeType || r) && e(t, n, s)) return ! 0
                } else for (; t = t[i];) if (1 === t.nodeType || r) if (c = t[B] || (t[B] = {}), (l = c[i]) && l[0] === u) {
                    if ((a = l[1]) === !0 || a === T) return a === !0
                } else if (l = c[i] = [u], l[1] = e(t, n, s) || T, l[1] === !0) return ! 0
            }
        }
        function m(e) {
            return e.length > 1 ?
            function(t, n, i) {
                for (var r = e.length; r--;) if (!e[r](t, n, i)) return ! 1;
                return ! 0
            }: e[0]
        }
        function g(e, t, n, i, r) {
            for (var o, s = [], a = 0, l = e.length, c = null != t; l > a; a++)(o = e[a]) && (!n || n(o, i, r)) && (s.push(o), c && t.push(a));
            return s
        }
        function v(e, t, n, i, o, s) {
            return i && !i[B] && (i = v(i)),
            o && !o[B] && (o = v(o, s)),
            r(function(r, s, a, l) {
                var c, u, d, h = [],
                f = [],
                p = s.length,
                m = r || w(t || "*", a.nodeType ? [a] : a, []),
                v = !e || !r && t ? m: g(m, h, e, a, l),
                y = n ? o || (r ? e: p || i) ? [] : s: v;
                if (n && n(v, y, a, l), i) for (c = g(y, f), i(c, [], a, l), u = c.length; u--;)(d = c[u]) && (y[f[u]] = !(v[f[u]] = d));
                if (r) {
                    if (o || e) {
                        if (o) {
                            for (c = [], u = y.length; u--;)(d = y[u]) && c.push(v[u] = d);
                            o(null, y = [], c, l)
                        }
                        for (u = y.length; u--;)(d = y[u]) && (c = o ? nt.call(r, d) : h[u]) > -1 && (r[c] = !(s[c] = d))
                    }
                } else y = g(y === s ? y.splice(p, y.length) : y),
                o ? o(null, s, y, l) : et.apply(s, y)
            })
        }
        function y(e) {
            for (var t, n, i, r = e.length,
            o = E.relative[e[0].type], s = o || E.relative[" "], a = o ? 1 : 0, l = p(function(e) {
                return e === t
            },
            s, !0), c = p(function(e) {
                return nt.call(t, e) > -1
            },
            s, !0), u = [function(e, n, i) {
                return ! o && (i || n !== A) || ((t = n).nodeType ? l(e, n, i) : c(e, n, i))
            }]; r > a; a++) if (n = E.relative[e[a].type]) u = [p(m(u), n)];
            else {
                if (n = E.filter[e[a].type].apply(null, e[a].matches), n[B]) {
                    for (i = ++a; r > i && !E.relative[e[i].type]; i++);
                    return v(a > 1 && m(u), a > 1 && f(e.slice(0, a - 1).concat({
                        value: " " === e[a - 2].type ? "*": ""
                    })).replace(ct, "$1"), n, i > a && y(e.slice(a, i)), r > i && y(e = e.slice(i)), r > i && f(e))
                }
                u.push(n)
            }
            return m(u)
        }
        function b(e, t) {
            var i = 0,
            o = t.length > 0,
            s = e.length > 0,
            a = function(r, a, l, c, u) {
                var d, h, f, p = [],
                m = 0,
                v = "0",
                y = r && [],
                b = null != u,
                w = A,
                x = r || s && E.find.TAG("*", u && a.parentNode || a),
                C = W += null == w ? 1 : Math.random() || .1;
                for (b && (A = a !== L && a, T = i); null != (d = x[v]); v++) {
                    if (s && d) {
                        for (h = 0; f = e[h++];) if (f(d, a, l)) {
                            c.push(d);
                            break
                        }
                        b && (W = C, T = ++i)
                    }
                    o && ((d = !f && d) && m--, r && y.push(d))
                }
                if (m += v, o && v !== m) {
                    for (h = 0; f = t[h++];) f(y, p, a, l);
                    if (r) {
                        if (m > 0) for (; v--;) y[v] || p[v] || (p[v] = J.call(c));
                        p = g(p)
                    }
                    et.apply(c, p),
                    b && !r && p.length > 0 && m + t.length > 1 && n.uniqueSort(c)
                }
                return b && (W = C, A = w),
                y
            };
            return o ? r(a) : a
        }
        function w(e, t, i) {
            for (var r = 0,
            o = t.length; o > r; r++) n(e, t[r], i);
            return i
        }
        function x(e, t, n, i) {
            var r, o, s, a, l, c = h(e);
            if (!i && 1 === c.length) {
                if (o = c[0] = c[0].slice(0), o.length > 2 && "ID" === (s = o[0]).type && S.getById && 9 === t.nodeType && O && E.relative[o[1].type]) {
                    if (t = (E.find.ID(s.matches[0].replace(St, Tt), t) || [])[0], !t) return n;
                    e = e.slice(o.shift().value.length)
                }
                for (r = vt.needsContext.test(e) ? 0 : o.length; r--&&(s = o[r], !E.relative[a = s.type]);) if ((l = E.find[a]) && (i = l(s.matches[0].replace(St, Tt), ft.test(o[0].type) && t.parentNode || t))) {
                    if (o.splice(r, 1), e = i.length && f(o), !e) return et.apply(n, i),
                    n;
                    break
                }
            }
            return k(e, c)(i, t, !O, n, ft.test(e)),
            n
        }
        var C, S, T, E, N, _, k, A, P, D, L, R, O, M, I, H, j, B = "sizzle" + -new Date,
        F = e.document,
        W = 0,
        $ = 0,
        q = i(),
        z = i(),
        U = i(),
        V = !1,
        X = function(e, t) {
            return e === t ? (V = !0, 0) : 0
        },
        Y = typeof t,
        Q = 1 << 31,
        G = {}.hasOwnProperty,
        K = [],
        J = K.pop,
        Z = K.push,
        et = K.push,
        tt = K.slice,
        nt = K.indexOf ||
        function(e) {
            for (var t = 0,
            n = this.length; n > t; t++) if (this[t] === e) return t;
            return - 1
        },
        it = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
        rt = "[\\x20\\t\\r\\n\\f]",
        ot = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
        st = ot.replace("w", "w#"),
        at = "\\[" + rt + "*(" + ot + ")" + rt + "*(?:([*^$|!~]?=)" + rt + "*(?:(['\"])((?:\\\\.|[^\\\\])*?)\\3|(" + st + ")|)|)" + rt + "*\\]",
        lt = ":(" + ot + ")(?:\\(((['\"])((?:\\\\.|[^\\\\])*?)\\3|((?:\\\\.|[^\\\\()[\\]]|" + at.replace(3, 8) + ")*)|.*)\\)|)",
        ct = new RegExp("^" + rt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + rt + "+$", "g"),
        dt = new RegExp("^" + rt + "*," + rt + "*"),
        ht = new RegExp("^" + rt + "*([>+~]|" + rt + ")" + rt + "*"),
        ft = new RegExp(rt + "*[+~]"),
        pt = new RegExp("=" + rt + "*([^\\]'\"]*)" + rt + "*\\]", "g"),
        mt = new RegExp(lt),
        gt = new RegExp("^" + st + "$"),
        vt = {
            ID: new RegExp("^#(" + ot + ")"),
            CLASS: new RegExp("^\\.(" + ot + ")"),
            TAG: new RegExp("^(" + ot.replace("w", "w*") + ")"),
            ATTR: new RegExp("^" + at),
            PSEUDO: new RegExp("^" + lt),
            CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + rt + "*(even|odd|(([+-]|)(\\d*)n|)" + rt + "*(?:([+-]|)" + rt + "*(\\d+)|))" + rt + "*\\)|)", "i"),
            bool: new RegExp("^(?:" + it + ")$", "i"),
            needsContext: new RegExp("^" + rt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + rt + "*((?:-\\d)?\\d*)" + rt + "*\\)|)(?=[^-]|$)", "i")
        },
        yt = /^[^{]+\{\s*\[native \w/,
        bt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
        wt = /^(?:input|select|textarea|button)$/i,
        xt = /^h\d$/i,
        Ct = /'|\\/g,
        St = new RegExp("\\\\([\\da-f]{1,6}" + rt + "?|(" + rt + ")|.)", "ig"),
        Tt = function(e, t, n) {
            var i = "0x" + t - 65536;
            return i !== i || n ? t: 0 > i ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
        };
        try {
            et.apply(K = tt.call(F.childNodes), F.childNodes),
            K[F.childNodes.length].nodeType
        } catch(Et) {
            et = {
                apply: K.length ?
                function(e, t) {
                    Z.apply(e, tt.call(t))
                }: function(e, t) {
                    for (var n = e.length,
                    i = 0; e[n++] = t[i++];);
                    e.length = n - 1
                }
            }
        }
        _ = n.isXML = function(e) {
            var t = e && (e.ownerDocument || e).documentElement;
            return t ? "HTML" !== t.nodeName: !1
        },
        S = n.support = {},
        D = n.setDocument = function(e) {
            var t = e ? e.ownerDocument || e: F,
            n = t.defaultView;
            return t !== L && 9 === t.nodeType && t.documentElement ? (L = t, R = t.documentElement, O = !_(t), n && n.attachEvent && n !== n.top && n.attachEvent("onbeforeunload",
            function() {
                D()
            }), S.attributes = o(function(e) {
                return e.className = "i",
                !e.getAttribute("className")
            }), S.getElementsByTagName = o(function(e) {
                return e.appendChild(t.createComment("")),
                !e.getElementsByTagName("*").length
            }), S.getElementsByClassName = o(function(e) {
                return e.innerHTML = "<div class='a'></div><div class='a i'></div>",
                e.firstChild.className = "i",
                2 === e.getElementsByClassName("i").length
            }), S.getById = o(function(e) {
                return R.appendChild(e).id = B,
                !t.getElementsByName || !t.getElementsByName(B).length
            }), S.getById ? (E.find.ID = function(e, t) {
                if (typeof t.getElementById !== Y && O) {
                    var n = t.getElementById(e);
                    return n && n.parentNode ? [n] : []
                }
            },
            E.filter.ID = function(e) {
                var t = e.replace(St, Tt);
                return function(e) {
                    return e.getAttribute("id") === t
                }
            }) : (delete E.find.ID, E.filter.ID = function(e) {
                var t = e.replace(St, Tt);
                return function(e) {
                    var n = typeof e.getAttributeNode !== Y && e.getAttributeNode("id");
                    return n && n.value === t
                }
            }), E.find.TAG = S.getElementsByTagName ?
            function(e, t) {
                return typeof t.getElementsByTagName !== Y ? t.getElementsByTagName(e) : void 0
            }: function(e, t) {
                var n, i = [],
                r = 0,
                o = t.getElementsByTagName(e);
                if ("*" === e) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            },
            E.find.CLASS = S.getElementsByClassName &&
            function(e, t) {
                return typeof t.getElementsByClassName !== Y && O ? t.getElementsByClassName(e) : void 0
            },
            I = [], M = [], (S.qsa = yt.test(t.querySelectorAll)) && (o(function(e) {
                e.innerHTML = "<select><option selected=''></option></select>",
                e.querySelectorAll("[selected]").length || M.push("\\[" + rt + "*(?:value|" + it + ")"),
                e.querySelectorAll(":checked").length || M.push(":checked")
            }), o(function(e) {
                var n = t.createElement("input");
                n.setAttribute("type", "hidden"),
                e.appendChild(n).setAttribute("t", ""),
                e.querySelectorAll("[t^='']").length && M.push("[*^$]=" + rt + "*(?:''|\"\")"),
                e.querySelectorAll(":enabled").length || M.push(":enabled", ":disabled"),
                e.querySelectorAll("*,:x"),
                M.push(",.*:")
            })), (S.matchesSelector = yt.test(H = R.webkitMatchesSelector || R.mozMatchesSelector || R.oMatchesSelector || R.msMatchesSelector)) && o(function(e) {
                S.disconnectedMatch = H.call(e, "div"),
                H.call(e, "[s!='']:x"),
                I.push("!=", lt)
            }), M = M.length && new RegExp(M.join("|")), I = I.length && new RegExp(I.join("|")), j = yt.test(R.contains) || R.compareDocumentPosition ?
            function(e, t) {
                var n = 9 === e.nodeType ? e.documentElement: e,
                i = t && t.parentNode;
                return e === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(i)))
            }: function(e, t) {
                if (t) for (; t = t.parentNode;) if (t === e) return ! 0;
                return ! 1
            },
            X = R.compareDocumentPosition ?
            function(e, n) {
                if (e === n) return V = !0,
                0;
                var i = n.compareDocumentPosition && e.compareDocumentPosition && e.compareDocumentPosition(n);
                return i ? 1 & i || !S.sortDetached && n.compareDocumentPosition(e) === i ? e === t || j(F, e) ? -1 : n === t || j(F, n) ? 1 : P ? nt.call(P, e) - nt.call(P, n) : 0 : 4 & i ? -1 : 1 : e.compareDocumentPosition ? -1 : 1
            }: function(e, n) {
                var i, r = 0,
                o = e.parentNode,
                s = n.parentNode,
                l = [e],
                c = [n];
                if (e === n) return V = !0,
                0;
                if (!o || !s) return e === t ? -1 : n === t ? 1 : o ? -1 : s ? 1 : P ? nt.call(P, e) - nt.call(P, n) : 0;
                if (o === s) return a(e, n);
                for (i = e; i = i.parentNode;) l.unshift(i);
                for (i = n; i = i.parentNode;) c.unshift(i);
                for (; l[r] === c[r];) r++;
                return r ? a(l[r], c[r]) : l[r] === F ? -1 : c[r] === F ? 1 : 0
            },
            t) : L
        },
        n.matches = function(e, t) {
            return n(e, null, null, t)
        },
        n.matchesSelector = function(e, t) {
            if ((e.ownerDocument || e) !== L && D(e), t = t.replace(pt, "='$1']"), !(!S.matchesSelector || !O || I && I.test(t) || M && M.test(t))) try {
                var i = H.call(e, t);
                if (i || S.disconnectedMatch || e.document && 11 !== e.document.nodeType) return i
            } catch(r) {}
            return n(t, L, null, [e]).length > 0
        },
        n.contains = function(e, t) {
            return (e.ownerDocument || e) !== L && D(e),
            j(e, t)
        },
        n.attr = function(e, n) { (e.ownerDocument || e) !== L && D(e);
            var i = E.attrHandle[n.toLowerCase()],
            r = i && G.call(E.attrHandle, n.toLowerCase()) ? i(e, n, !O) : t;
            return r === t ? S.attributes || !O ? e.getAttribute(n) : (r = e.getAttributeNode(n)) && r.specified ? r.value: null: r
        },
        n.error = function(e) {
            throw new Error("Syntax error, unrecognized expression: " + e)
        },
        n.uniqueSort = function(e) {
            var t, n = [],
            i = 0,
            r = 0;
            if (V = !S.detectDuplicates, P = !S.sortStable && e.slice(0), e.sort(X), V) {
                for (; t = e[r++];) t === e[r] && (i = n.push(r));
                for (; i--;) e.splice(n[i], 1)
            }
            return e
        },
        N = n.getText = function(e) {
            var t, n = "",
            i = 0,
            r = e.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof e.textContent) return e.textContent;
                    for (e = e.firstChild; e; e = e.nextSibling) n += N(e)
                } else if (3 === r || 4 === r) return e.nodeValue
            } else for (; t = e[i]; i++) n += N(t);
            return n
        },
        E = n.selectors = {
            cacheLength: 50,
            createPseudo: r,
            match: vt,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function(e) {
                    return e[1] = e[1].replace(St, Tt),
                    e[3] = (e[4] || e[5] || "").replace(St, Tt),
                    "~=" === e[2] && (e[3] = " " + e[3] + " "),
                    e.slice(0, 4)
                },
                CHILD: function(e) {
                    return e[1] = e[1].toLowerCase(),
                    "nth" === e[1].slice(0, 3) ? (e[3] || n.error(e[0]), e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])), e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && n.error(e[0]),
                    e
                },
                PSEUDO: function(e) {
                    var n, i = !e[5] && e[2];
                    return vt.CHILD.test(e[0]) ? null: (e[3] && e[4] !== t ? e[2] = e[4] : i && mt.test(i) && (n = h(i, !0)) && (n = i.indexOf(")", i.length - n) - i.length) && (e[0] = e[0].slice(0, n), e[2] = i.slice(0, n)), e.slice(0, 3))
                }
            },
            filter: {
                TAG: function(e) {
                    var t = e.replace(St, Tt).toLowerCase();
                    return "*" === e ?
                    function() {
                        return ! 0
                    }: function(e) {
                        return e.nodeName && e.nodeName.toLowerCase() === t
                    }
                },
                CLASS: function(e) {
                    var t = q[e + " "];
                    return t || (t = new RegExp("(^|" + rt + ")" + e + "(" + rt + "|$)")) && q(e,
                    function(e) {
                        return t.test("string" == typeof e.className && e.className || typeof e.getAttribute !== Y && e.getAttribute("class") || "")
                    })
                },
                ATTR: function(e, t, i) {
                    return function(r) {
                        var o = n.attr(r, e);
                        return null == o ? "!=" === t: t ? (o += "", "=" === t ? o === i: "!=" === t ? o !== i: "^=" === t ? i && 0 === o.indexOf(i) : "*=" === t ? i && o.indexOf(i) > -1 : "$=" === t ? i && o.slice( - i.length) === i: "~=" === t ? (" " + o + " ").indexOf(i) > -1 : "|=" === t ? o === i || o.slice(0, i.length + 1) === i + "-": !1) : !0
                    }
                },
                CHILD: function(e, t, n, i, r) {
                    var o = "nth" !== e.slice(0, 3),
                    s = "last" !== e.slice( - 4),
                    a = "of-type" === t;
                    return 1 === i && 0 === r ?
                    function(e) {
                        return !! e.parentNode
                    }: function(t, n, l) {
                        var c, u, d, h, f, p, m = o !== s ? "nextSibling": "previousSibling",
                        g = t.parentNode,
                        v = a && t.nodeName.toLowerCase(),
                        y = !l && !a;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (d = t; d = d[m];) if (a ? d.nodeName.toLowerCase() === v: 1 === d.nodeType) return ! 1;
                                    p = m = "only" === e && !p && "nextSibling"
                                }
                                return ! 0
                            }
                            if (p = [s ? g.firstChild: g.lastChild], s && y) {
                                for (u = g[B] || (g[B] = {}), c = u[e] || [], f = c[0] === W && c[1], h = c[0] === W && c[2], d = f && g.childNodes[f]; d = ++f && d && d[m] || (h = f = 0) || p.pop();) if (1 === d.nodeType && ++h && d === t) {
                                    u[e] = [W, f, h];
                                    break
                                }
                            } else if (y && (c = (t[B] || (t[B] = {}))[e]) && c[0] === W) h = c[1];
                            else for (; (d = ++f && d && d[m] || (h = f = 0) || p.pop()) && ((a ? d.nodeName.toLowerCase() !== v: 1 !== d.nodeType) || !++h || (y && ((d[B] || (d[B] = {}))[e] = [W, h]), d !== t)););
                            return h -= r,
                            h === i || h % i === 0 && h / i >= 0
                        }
                    }
                },
                PSEUDO: function(e, t) {
                    var i, o = E.pseudos[e] || E.setFilters[e.toLowerCase()] || n.error("unsupported pseudo: " + e);
                    return o[B] ? o(t) : o.length > 1 ? (i = [e, e, "", t], E.setFilters.hasOwnProperty(e.toLowerCase()) ? r(function(e, n) {
                        for (var i, r = o(e, t), s = r.length; s--;) i = nt.call(e, r[s]),
                        e[i] = !(n[i] = r[s])
                    }) : function(e) {
                        return o(e, 0, i)
                    }) : o
                }
            },
            pseudos: {
                not: r(function(e) {
                    var t = [],
                    n = [],
                    i = k(e.replace(ct, "$1"));
                    return i[B] ? r(function(e, t, n, r) {
                        for (var o, s = i(e, null, r, []), a = e.length; a--;)(o = s[a]) && (e[a] = !(t[a] = o))
                    }) : function(e, r, o) {
                        return t[0] = e,
                        i(t, null, o, n),
                        !n.pop()
                    }
                }),
                has: r(function(e) {
                    return function(t) {
                        return n(e, t).length > 0
                    }
                }),
                contains: r(function(e) {
                    return function(t) {
                        return (t.textContent || t.innerText || N(t)).indexOf(e) > -1
                    }
                }),
                lang: r(function(e) {
                    return gt.test(e || "") || n.error("unsupported lang: " + e),
                    e = e.replace(St, Tt).toLowerCase(),
                    function(t) {
                        var n;
                        do
                        if (n = O ? t.lang: t.getAttribute("xml:lang") || t.getAttribute("lang")) return n = n.toLowerCase(),
                        n === e || 0 === n.indexOf(e + "-");
                        while ((t = t.parentNode) && 1 === t.nodeType);
                        return ! 1
                    }
                }),
                target: function(t) {
                    var n = e.location && e.location.hash;
                    return n && n.slice(1) === t.id
                },
                root: function(e) {
                    return e === R
                },
                focus: function(e) {
                    return e === L.activeElement && (!L.hasFocus || L.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                },
                enabled: function(e) {
                    return e.disabled === !1
                },
                disabled: function(e) {
                    return e.disabled === !0
                },
                checked: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && !!e.checked || "option" === t && !!e.selected
                },
                selected: function(e) {
                    return e.parentNode && e.parentNode.selectedIndex,
                    e.selected === !0
                },
                empty: function(e) {
                    for (e = e.firstChild; e; e = e.nextSibling) if (e.nodeName > "@" || 3 === e.nodeType || 4 === e.nodeType) return ! 1;
                    return ! 0
                },
                parent: function(e) {
                    return ! E.pseudos.empty(e)
                },
                header: function(e) {
                    return xt.test(e.nodeName)
                },
                input: function(e) {
                    return wt.test(e.nodeName)
                },
                button: function(e) {
                    var t = e.nodeName.toLowerCase();
                    return "input" === t && "button" === e.type || "button" === t
                },
                text: function(e) {
                    var t;
                    return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || t.toLowerCase() === e.type)
                },
                first: u(function() {
                    return [0]
                }),
                last: u(function(e, t) {
                    return [t - 1]
                }),
                eq: u(function(e, t, n) {
                    return [0 > n ? n + t: n]
                }),
                even: u(function(e, t) {
                    for (var n = 0; t > n; n += 2) e.push(n);
                    return e
                }),
                odd: u(function(e, t) {
                    for (var n = 1; t > n; n += 2) e.push(n);
                    return e
                }),
                lt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t: n; --i >= 0;) e.push(i);
                    return e
                }),
                gt: u(function(e, t, n) {
                    for (var i = 0 > n ? n + t: n; ++i < t;) e.push(i);
                    return e
                })
            }
        },
        E.pseudos.nth = E.pseudos.eq;
        for (C in {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) E.pseudos[C] = l(C);
        for (C in {
            submit: !0,
            reset: !0
        }) E.pseudos[C] = c(C);
        d.prototype = E.filters = E.pseudos,
        E.setFilters = new d,
        k = n.compile = function(e, t) {
            var n, i = [],
            r = [],
            o = U[e + " "];
            if (!o) {
                for (t || (t = h(e)), n = t.length; n--;) o = y(t[n]),
                o[B] ? i.push(o) : r.push(o);
                o = U(e, b(r, i))
            }
            return o
        },
        S.sortStable = B.split("").sort(X).join("") === B,
        S.detectDuplicates = V,
        D(),
        S.sortDetached = o(function(e) {
            return 1 & e.compareDocumentPosition(L.createElement("div"))
        }),
        o(function(e) {
            return e.innerHTML = "<a href='#'></a>",
            "#" === e.firstChild.getAttribute("href")
        }) || s("type|href|height|width",
        function(e, t, n) {
            return n ? void 0 : e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
        }),
        S.attributes && o(function(e) {
            return e.innerHTML = "<input/>",
            e.firstChild.setAttribute("value", ""),
            "" === e.firstChild.getAttribute("value")
        }) || s("value",
        function(e, t, n) {
            return n || "input" !== e.nodeName.toLowerCase() ? void 0 : e.defaultValue
        }),
        o(function(e) {
            return null == e.getAttribute("disabled")
        }) || s(it,
        function(e, t, n) {
            var i;
            return n ? void 0 : (i = e.getAttributeNode(t)) && i.specified ? i.value: e[t] === !0 ? t.toLowerCase() : null
        }),
        ut.find = n,
        ut.expr = n.selectors,
        ut.expr[":"] = ut.expr.pseudos,
        ut.unique = n.uniqueSort,
        ut.text = n.getText,
        ut.isXMLDoc = n.isXML,
        ut.contains = n.contains
    } (e);
    var Et = {};
    ut.Callbacks = function(e) {
        e = "string" == typeof e ? Et[e] || i(e) : ut.extend({},
        e);
        var n, r, o, s, a, l, c = [],
        u = !e.once && [],
        d = function(t) {
            for (r = e.memory && t, o = !0, a = l || 0, l = 0, s = c.length, n = !0; c && s > a; a++) if (c[a].apply(t[0], t[1]) === !1 && e.stopOnFalse) {
                r = !1;
                break
            }
            n = !1,
            c && (u ? u.length && d(u.shift()) : r ? c = [] : h.disable())
        },
        h = {
            add: function() {
                if (c) {
                    var t = c.length; !
                    function i(t) {
                        ut.each(t,
                        function(t, n) {
                            var r = ut.type(n);
                            "function" === r ? e.unique && h.has(n) || c.push(n) : n && n.length && "string" !== r && i(n)
                        })
                    } (arguments),
                    n ? s = c.length: r && (l = t, d(r))
                }
                return this
            },
            remove: function() {
                return c && ut.each(arguments,
                function(e, t) {
                    for (var i; (i = ut.inArray(t, c, i)) > -1;) c.splice(i, 1),
                    n && (s >= i && s--, a >= i && a--)
                }),
                this
            },
            has: function(e) {
                return e ? ut.inArray(e, c) > -1 : !(!c || !c.length)
            },
            empty: function() {
                return c = [],
                s = 0,
                this
            },
            disable: function() {
                return c = u = r = t,
                this
            },
            disabled: function() {
                return ! c
            },
            lock: function() {
                return u = t,
                r || h.disable(),
                this
            },
            locked: function() {
                return ! u
            },
            fireWith: function(e, t) {
                return ! c || o && !u || (t = t || [], t = [e, t.slice ? t.slice() : t], n ? u.push(t) : d(t)),
                this
            },
            fire: function() {
                return h.fireWith(this, arguments),
                this
            },
            fired: function() {
                return !! o
            }
        };
        return h
    },
    ut.extend({
        Deferred: function(e) {
            var t = [["resolve", "done", ut.Callbacks("once memory"), "resolved"], ["reject", "fail", ut.Callbacks("once memory"), "rejected"], ["notify", "progress", ut.Callbacks("memory")]],
            n = "pending",
            i = {
                state: function() {
                    return n
                },
                always: function() {
                    return r.done(arguments).fail(arguments),
                    this
                },
                then: function() {
                    var e = arguments;
                    return ut.Deferred(function(n) {
                        ut.each(t,
                        function(t, o) {
                            var s = o[0],
                            a = ut.isFunction(e[t]) && e[t];
                            r[o[1]](function() {
                                var e = a && a.apply(this, arguments);
                                e && ut.isFunction(e.promise) ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[s + "With"](this === i ? n.promise() : this, a ? [e] : arguments)
                            })
                        }),
                        e = null
                    }).promise()
                },
                promise: function(e) {
                    return null != e ? ut.extend(e, i) : i
                }
            },
            r = {};
            return i.pipe = i.then,
            ut.each(t,
            function(e, o) {
                var s = o[2],
                a = o[3];
                i[o[1]] = s.add,
                a && s.add(function() {
                    n = a
                },
                t[1 ^ e][2].disable, t[2][2].lock),
                r[o[0]] = function() {
                    return r[o[0] + "With"](this === r ? i: this, arguments),
                    this
                },
                r[o[0] + "With"] = s.fireWith
            }),
            i.promise(r),
            e && e.call(r, r),
            r
        },
        when: function(e) {
            var t, n, i, r = 0,
            o = ot.call(arguments),
            s = o.length,
            a = 1 !== s || e && ut.isFunction(e.promise) ? s: 0,
            l = 1 === a ? e: ut.Deferred(),
            c = function(e, n, i) {
                return function(r) {
                    n[e] = this,
                    i[e] = arguments.length > 1 ? ot.call(arguments) : r,
                    i === t ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                }
            };
            if (s > 1) for (t = new Array(s), n = new Array(s), i = new Array(s); s > r; r++) o[r] && ut.isFunction(o[r].promise) ? o[r].promise().done(c(r, i, o)).fail(l.reject).progress(c(r, n, t)) : --a;
            return a || l.resolveWith(i, o),
            l.promise()
        }
    }),
    ut.support = function(t) {
        var n, i, r, o, s, a, l, c, u, d = G.createElement("div");
        if (d.setAttribute("className", "t"), d.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", n = d.getElementsByTagName("*") || [], i = d.getElementsByTagName("a")[0], !i || !i.style || !n.length) return t;
        o = G.createElement("select"),
        a = o.appendChild(G.createElement("option")),
        r = d.getElementsByTagName("input")[0],
        i.style.cssText = "top:1px;float:left;opacity:.5",
        t.getSetAttribute = "t" !== d.className,
        t.leadingWhitespace = 3 === d.firstChild.nodeType,
        t.tbody = !d.getElementsByTagName("tbody").length,
        t.htmlSerialize = !!d.getElementsByTagName("link").length,
        t.style = /top/.test(i.getAttribute("style")),
        t.hrefNormalized = "/a" === i.getAttribute("href"),
        t.opacity = /^0.5/.test(i.style.opacity),
        t.cssFloat = !!i.style.cssFloat,
        t.checkOn = !!r.value,
        t.optSelected = a.selected,
        t.enctype = !!G.createElement("form").enctype,
        t.html5Clone = "<:nav></:nav>" !== G.createElement("nav").cloneNode(!0).outerHTML,
        t.inlineBlockNeedsLayout = !1,
        t.shrinkWrapBlocks = !1,
        t.pixelPosition = !1,
        t.deleteExpando = !0,
        t.noCloneEvent = !0,
        t.reliableMarginRight = !0,
        t.boxSizingReliable = !0,
        r.checked = !0,
        t.noCloneChecked = r.cloneNode(!0).checked,
        o.disabled = !0,
        t.optDisabled = !a.disabled;
        try {
            delete d.test
        } catch(h) {
            t.deleteExpando = !1
        }
        r = G.createElement("input"),
        r.setAttribute("value", ""),
        t.input = "" === r.getAttribute("value"),
        r.value = "t",
        r.setAttribute("type", "radio"),
        t.radioValue = "t" === r.value,
        r.setAttribute("checked", "t"),
        r.setAttribute("name", "t"),
        s = G.createDocumentFragment(),
        s.appendChild(r),
        t.appendChecked = r.checked,
        t.checkClone = s.cloneNode(!0).cloneNode(!0).lastChild.checked,
        d.attachEvent && (d.attachEvent("onclick",
        function() {
            t.noCloneEvent = !1
        }), d.cloneNode(!0).click());
        for (u in {
            submit: !0,
            change: !0,
            focusin: !0
        }) d.setAttribute(l = "on" + u, "t"),
        t[u + "Bubbles"] = l in e || d.attributes[l].expando === !1;
        d.style.backgroundClip = "content-box",
        d.cloneNode(!0).style.backgroundClip = "",
        t.clearCloneStyle = "content-box" === d.style.backgroundClip;
        for (u in ut(t)) break;
        return t.ownLast = "0" !== u,
        ut(function() {
            var n, i, r, o = "padding:0;margin:0;border:0;display:block;box-sizing:content-box;-moz-box-sizing:content-box;-webkit-box-sizing:content-box;",
            s = G.getElementsByTagName("body")[0];
            s && (n = G.createElement("div"), n.style.cssText = "border:0;width:0;height:0;position:absolute;top:0;left:-9999px;margin-top:1px", s.appendChild(n).appendChild(d), d.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", r = d.getElementsByTagName("td"), r[0].style.cssText = "padding:0;margin:0;border:0;display:none", c = 0 === r[0].offsetHeight, r[0].style.display = "", r[1].style.display = "none", t.reliableHiddenOffsets = c && 0 === r[0].offsetHeight, d.innerHTML = "", d.style.cssText = "box-sizing:border-box;-moz-box-sizing:border-box;-webkit-box-sizing:border-box;padding:1px;border:1px;display:block;width:4px;margin-top:1%;position:absolute;top:1%;", ut.swap(s, null != s.style.zoom ? {
                zoom: 1
            }: {},
            function() {
                t.boxSizing = 4 === d.offsetWidth
            }), e.getComputedStyle && (t.pixelPosition = "1%" !== (e.getComputedStyle(d, null) || {}).top, t.boxSizingReliable = "4px" === (e.getComputedStyle(d, null) || {
                width: "4px"
            }).width, i = d.appendChild(G.createElement("div")), i.style.cssText = d.style.cssText = o, i.style.marginRight = i.style.width = "0", d.style.width = "1px", t.reliableMarginRight = !parseFloat((e.getComputedStyle(i, null) || {}).marginRight)), typeof d.style.zoom !== Y && (d.innerHTML = "", d.style.cssText = o + "width:1px;padding:1px;display:inline;zoom:1", t.inlineBlockNeedsLayout = 3 === d.offsetWidth, d.style.display = "block", d.innerHTML = "<div></div>", d.firstChild.style.width = "5px", t.shrinkWrapBlocks = 3 !== d.offsetWidth, t.inlineBlockNeedsLayout && (s.style.zoom = 1)), s.removeChild(n), n = d = r = i = null)
        }),
        n = o = s = a = i = r = null,
        t
    } ({});
    var Nt = /(?:\{[\s\S]*\}|\[[\s\S]*\])$/,
    _t = /([A-Z])/g;
    ut.extend({
        cache: {},
        noData: {
            applet: !0,
            embed: !0,
            object: "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function(e) {
            return e = e.nodeType ? ut.cache[e[ut.expando]] : e[ut.expando],
            !!e && !a(e)
        },
        data: function(e, t, n) {
            return r(e, t, n)
        },
        removeData: function(e, t) {
            return o(e, t)
        },
        _data: function(e, t, n) {
            return r(e, t, n, !0)
        },
        _removeData: function(e, t) {
            return o(e, t, !0)
        },
        acceptData: function(e) {
            if (e.nodeType && 1 !== e.nodeType && 9 !== e.nodeType) return ! 1;
            var t = e.nodeName && ut.noData[e.nodeName.toLowerCase()];
            return ! t || t !== !0 && e.getAttribute("classid") === t
        }
    }),
    ut.fn.extend({
        data: function(e, n) {
            var i, r, o = null,
            a = 0,
            l = this[0];
            if (e === t) {
                if (this.length && (o = ut.data(l), 1 === l.nodeType && !ut._data(l, "parsedAttrs"))) {
                    for (i = l.attributes; a < i.length; a++) r = i[a].name,
                    0 === r.indexOf("data-") && (r = ut.camelCase(r.slice(5)), s(l, r, o[r]));
                    ut._data(l, "parsedAttrs", !0)
                }
                return o
            }
            return "object" == typeof e ? this.each(function() {
                ut.data(this, e)
            }) : arguments.length > 1 ? this.each(function() {
                ut.data(this, e, n)
            }) : l ? s(l, e, ut.data(l, e)) : null
        },
        removeData: function(e) {
            return this.each(function() {
                ut.removeData(this, e)
            })
        }
    }),
    ut.extend({
        queue: function(e, t, n) {
            var i;
            return e ? (t = (t || "fx") + "queue", i = ut._data(e, t), n && (!i || ut.isArray(n) ? i = ut._data(e, t, ut.makeArray(n)) : i.push(n)), i || []) : void 0
        },
        dequeue: function(e, t) {
            t = t || "fx";
            var n = ut.queue(e, t),
            i = n.length,
            r = n.shift(),
            o = ut._queueHooks(e, t),
            s = function() {
                ut.dequeue(e, t)
            };
            "inprogress" === r && (r = n.shift(), i--),
            r && ("fx" === t && n.unshift("inprogress"), delete o.stop, r.call(e, s, o)),
            !i && o && o.empty.fire()
        },
        _queueHooks: function(e, t) {
            var n = t + "queueHooks";
            return ut._data(e, n) || ut._data(e, n, {
                empty: ut.Callbacks("once memory").add(function() {
                    ut._removeData(e, t + "queue"),
                    ut._removeData(e, n)
                })
            })
        }
    }),
    ut.fn.extend({
        queue: function(e, n) {
            var i = 2;
            return "string" != typeof e && (n = e, e = "fx", i--),
            arguments.length < i ? ut.queue(this[0], e) : n === t ? this: this.each(function() {
                var t = ut.queue(this, e, n);
                ut._queueHooks(this, e),
                "fx" === e && "inprogress" !== t[0] && ut.dequeue(this, e)
            })
        },
        dequeue: function(e) {
            return this.each(function() {
                ut.dequeue(this, e)
            })
        },
        delay: function(e, t) {
            return e = ut.fx ? ut.fx.speeds[e] || e: e,
            t = t || "fx",
            this.queue(t,
            function(t, n) {
                var i = setTimeout(t, e);
                n.stop = function() {
                    clearTimeout(i)
                }
            })
        },
        clearQueue: function(e) {
            return this.queue(e || "fx", [])
        },
        promise: function(e, n) {
            var i, r = 1,
            o = ut.Deferred(),
            s = this,
            a = this.length,
            l = function() {--r || o.resolveWith(s, [s])
            };
            for ("string" != typeof e && (n = e, e = t), e = e || "fx"; a--;) i = ut._data(s[a], e + "queueHooks"),
            i && i.empty && (r++, i.empty.add(l));
            return l(),
            o.promise(n)
        }
    });
    var kt, At, Pt = /[\t\r\n\f]/g,
    Dt = /\r/g,
    Lt = /^(?:input|select|textarea|button|object)$/i,
    Rt = /^(?:a|area)$/i,
    Ot = /^(?:checked|selected)$/i,
    Mt = ut.support.getSetAttribute,
    It = ut.support.input;
    ut.fn.extend({
        attr: function(e, t) {
            return ut.access(this, ut.attr, e, t, arguments.length > 1)
        },
        removeAttr: function(e) {
            return this.each(function() {
                ut.removeAttr(this, e)
            })
        },
        prop: function(e, t) {
            return ut.access(this, ut.prop, e, t, arguments.length > 1)
        },
        removeProp: function(e) {
            return e = ut.propFix[e] || e,
            this.each(function() {
                try {
                    this[e] = t,
                    delete this[e]
                } catch(n) {}
            })
        },
        addClass: function(e) {
            var t, n, i, r, o, s = 0,
            a = this.length,
            l = "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).addClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(ht) || []; a > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pt, " ") : " ")) {
                for (o = 0; r = t[o++];) i.indexOf(" " + r + " ") < 0 && (i += r + " ");
                n.className = ut.trim(i)
            }
            return this
        },
        removeClass: function(e) {
            var t, n, i, r, o, s = 0,
            a = this.length,
            l = 0 === arguments.length || "string" == typeof e && e;
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).removeClass(e.call(this, t, this.className))
            });
            if (l) for (t = (e || "").match(ht) || []; a > s; s++) if (n = this[s], i = 1 === n.nodeType && (n.className ? (" " + n.className + " ").replace(Pt, " ") : "")) {
                for (o = 0; r = t[o++];) for (; i.indexOf(" " + r + " ") >= 0;) i = i.replace(" " + r + " ", " ");
                n.className = e ? ut.trim(i) : ""
            }
            return this
        },
        toggleClass: function(e, t) {
            var n = typeof e;
            return "boolean" == typeof t && "string" === n ? t ? this.addClass(e) : this.removeClass(e) : ut.isFunction(e) ? this.each(function(n) {
                ut(this).toggleClass(e.call(this, n, this.className, t), t)
            }) : this.each(function() {
                if ("string" === n) for (var t, i = 0,
                r = ut(this), o = e.match(ht) || []; t = o[i++];) r.hasClass(t) ? r.removeClass(t) : r.addClass(t);
                else(n === Y || "boolean" === n) && (this.className && ut._data(this, "__className__", this.className), this.className = this.className || e === !1 ? "": ut._data(this, "__className__") || "")
            })
        },
        hasClass: function(e) {
            for (var t = " " + e + " ",
            n = 0,
            i = this.length; i > n; n++) if (1 === this[n].nodeType && (" " + this[n].className + " ").replace(Pt, " ").indexOf(t) >= 0) return ! 0;
            return ! 1
        },
        val: function(e) {
            var n, i, r, o = this[0]; {
                if (arguments.length) return r = ut.isFunction(e),
                this.each(function(n) {
                    var o;
                    1 === this.nodeType && (o = r ? e.call(this, n, ut(this).val()) : e, null == o ? o = "": "number" == typeof o ? o += "": ut.isArray(o) && (o = ut.map(o,
                    function(e) {
                        return null == e ? "": e + ""
                    })), i = ut.valHooks[this.type] || ut.valHooks[this.nodeName.toLowerCase()], i && "set" in i && i.set(this, o, "value") !== t || (this.value = o))
                });
                if (o) return i = ut.valHooks[o.type] || ut.valHooks[o.nodeName.toLowerCase()],
                i && "get" in i && (n = i.get(o, "value")) !== t ? n: (n = o.value, "string" == typeof n ? n.replace(Dt, "") : null == n ? "": n)
            }
        }
    }),
    ut.extend({
        valHooks: {
            option: {
                get: function(e) {
                    var t = ut.find.attr(e, "value");
                    return null != t ? t: e.text
                }
            },
            select: {
                get: function(e) {
                    for (var t, n, i = e.options,
                    r = e.selectedIndex,
                    o = "select-one" === e.type || 0 > r,
                    s = o ? null: [], a = o ? r + 1 : i.length, l = 0 > r ? a: o ? r: 0; a > l; l++) if (n = i[l], !(!n.selected && l !== r || (ut.support.optDisabled ? n.disabled: null !== n.getAttribute("disabled")) || n.parentNode.disabled && ut.nodeName(n.parentNode, "optgroup"))) {
                        if (t = ut(n).val(), o) return t;
                        s.push(t)
                    }
                    return s
                },
                set: function(e, t) {
                    for (var n, i, r = e.options,
                    o = ut.makeArray(t), s = r.length; s--;) i = r[s],
                    (i.selected = ut.inArray(ut(i).val(), o) >= 0) && (n = !0);
                    return n || (e.selectedIndex = -1),
                    o
                }
            }
        },
        attr: function(e, n, i) {
            var r, o, s = e.nodeType;
            if (e && 3 !== s && 8 !== s && 2 !== s) return typeof e.getAttribute === Y ? ut.prop(e, n, i) : (1 === s && ut.isXMLDoc(e) || (n = n.toLowerCase(), r = ut.attrHooks[n] || (ut.expr.match.bool.test(n) ? At: kt)), i === t ? r && "get" in r && null !== (o = r.get(e, n)) ? o: (o = ut.find.attr(e, n), null == o ? t: o) : null !== i ? r && "set" in r && (o = r.set(e, i, n)) !== t ? o: (e.setAttribute(n, i + ""), i) : (ut.removeAttr(e, n), void 0))
        },
        removeAttr: function(e, t) {
            var n, i, r = 0,
            o = t && t.match(ht);
            if (o && 1 === e.nodeType) for (; n = o[r++];) i = ut.propFix[n] || n,
            ut.expr.match.bool.test(n) ? It && Mt || !Ot.test(n) ? e[i] = !1 : e[ut.camelCase("default-" + n)] = e[i] = !1 : ut.attr(e, n, ""),
            e.removeAttribute(Mt ? n: i)
        },
        attrHooks: {
            type: {
                set: function(e, t) {
                    if (!ut.support.radioValue && "radio" === t && ut.nodeName(e, "input")) {
                        var n = e.value;
                        return e.setAttribute("type", t),
                        n && (e.value = n),
                        t
                    }
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        },
        prop: function(e, n, i) {
            var r, o, s, a = e.nodeType;
            if (e && 3 !== a && 8 !== a && 2 !== a) return s = 1 !== a || !ut.isXMLDoc(e),
            s && (n = ut.propFix[n] || n, o = ut.propHooks[n]),
            i !== t ? o && "set" in o && (r = o.set(e, i, n)) !== t ? r: e[n] = i: o && "get" in o && null !== (r = o.get(e, n)) ? r: e[n]
        },
        propHooks: {
            tabIndex: {
                get: function(e) {
                    var t = ut.find.attr(e, "tabindex");
                    return t ? parseInt(t, 10) : Lt.test(e.nodeName) || Rt.test(e.nodeName) && e.href ? 0 : -1
                }
            }
        }
    }),
    At = {
        set: function(e, t, n) {
            return t === !1 ? ut.removeAttr(e, n) : It && Mt || !Ot.test(n) ? e.setAttribute(!Mt && ut.propFix[n] || n, n) : e[ut.camelCase("default-" + n)] = e[n] = !0,
            n
        }
    },
    ut.each(ut.expr.match.bool.source.match(/\w+/g),
    function(e, n) {
        var i = ut.expr.attrHandle[n] || ut.find.attr;
        ut.expr.attrHandle[n] = It && Mt || !Ot.test(n) ?
        function(e, n, r) {
            var o = ut.expr.attrHandle[n],
            s = r ? t: (ut.expr.attrHandle[n] = t) != i(e, n, r) ? n.toLowerCase() : null;
            return ut.expr.attrHandle[n] = o,
            s
        }: function(e, n, i) {
            return i ? t: e[ut.camelCase("default-" + n)] ? n.toLowerCase() : null
        }
    }),
    It && Mt || (ut.attrHooks.value = {
        set: function(e, t, n) {
            return ut.nodeName(e, "input") ? (e.defaultValue = t, void 0) : kt && kt.set(e, t, n)
        }
    }),
    Mt || (kt = {
        set: function(e, n, i) {
            var r = e.getAttributeNode(i);
            return r || e.setAttributeNode(r = e.ownerDocument.createAttribute(i)),
            r.value = n += "",
            "value" === i || n === e.getAttribute(i) ? n: t
        }
    },
    ut.expr.attrHandle.id = ut.expr.attrHandle.name = ut.expr.attrHandle.coords = function(e, n, i) {
        var r;
        return i ? t: (r = e.getAttributeNode(n)) && "" !== r.value ? r.value: null
    },
    ut.valHooks.button = {
        get: function(e, n) {
            var i = e.getAttributeNode(n);
            return i && i.specified ? i.value: t
        },
        set: kt.set
    },
    ut.attrHooks.contenteditable = {
        set: function(e, t, n) {
            kt.set(e, "" === t ? !1 : t, n)
        }
    },
    ut.each(["width", "height"],
    function(e, t) {
        ut.attrHooks[t] = {
            set: function(e, n) {
                return "" === n ? (e.setAttribute(t, "auto"), n) : void 0
            }
        }
    })),
    ut.support.hrefNormalized || ut.each(["href", "src"],
    function(e, t) {
        ut.propHooks[t] = {
            get: function(e) {
                return e.getAttribute(t, 4)
            }
        }
    }),
    ut.support.style || (ut.attrHooks.style = {
        get: function(e) {
            return e.style.cssText || t
        },
        set: function(e, t) {
            return e.style.cssText = t + ""
        }
    }),
    ut.support.optSelected || (ut.propHooks.selected = {
        get: function(e) {
            var t = e.parentNode;
            return t && (t.selectedIndex, t.parentNode && t.parentNode.selectedIndex),
            null
        }
    }),
    ut.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"],
    function() {
        ut.propFix[this.toLowerCase()] = this
    }),
    ut.support.enctype || (ut.propFix.enctype = "encoding"),
    ut.each(["radio", "checkbox"],
    function() {
        ut.valHooks[this] = {
            set: function(e, t) {
                return ut.isArray(t) ? e.checked = ut.inArray(ut(e).val(), t) >= 0 : void 0
            }
        },
        ut.support.checkOn || (ut.valHooks[this].get = function(e) {
            return null === e.getAttribute("value") ? "on": e.value
        })
    });
    var Ht = /^(?:input|select|textarea)$/i,
    jt = /^key/,
    Bt = /^(?:mouse|contextmenu)|click/,
    Ft = /^(?:focusinfocus|focusoutblur)$/,
    Wt = /^([^.]*)(?:\.(.+)|)$/;
    ut.event = {
        global: {},
        add: function(e, n, i, r, o) {
            var s, a, l, c, u, d, h, f, p, m, g, v = ut._data(e);
            if (v) {
                for (i.handler && (c = i, i = c.handler, o = c.selector), i.guid || (i.guid = ut.guid++), (a = v.events) || (a = v.events = {}), (d = v.handle) || (d = v.handle = function(e) {
                    return typeof ut === Y || e && ut.event.triggered === e.type ? t: ut.event.dispatch.apply(d.elem, arguments)
                },
                d.elem = e), n = (n || "").match(ht) || [""], l = n.length; l--;) s = Wt.exec(n[l]) || [],
                p = g = s[1],
                m = (s[2] || "").split(".").sort(),
                p && (u = ut.event.special[p] || {},
                p = (o ? u.delegateType: u.bindType) || p, u = ut.event.special[p] || {},
                h = ut.extend({
                    type: p,
                    origType: g,
                    data: r,
                    handler: i,
                    guid: i.guid,
                    selector: o,
                    needsContext: o && ut.expr.match.needsContext.test(o),
                    namespace: m.join(".")
                },
                c), (f = a[p]) || (f = a[p] = [], f.delegateCount = 0, u.setup && u.setup.call(e, r, m, d) !== !1 || (e.addEventListener ? e.addEventListener(p, d, !1) : e.attachEvent && e.attachEvent("on" + p, d))), u.add && (u.add.call(e, h), h.handler.guid || (h.handler.guid = i.guid)), o ? f.splice(f.delegateCount++, 0, h) : f.push(h), ut.event.global[p] = !0);
                e = null
            }
        },
        remove: function(e, t, n, i, r) {
            var o, s, a, l, c, u, d, h, f, p, m, g = ut.hasData(e) && ut._data(e);
            if (g && (u = g.events)) {
                for (t = (t || "").match(ht) || [""], c = t.length; c--;) if (a = Wt.exec(t[c]) || [], f = m = a[1], p = (a[2] || "").split(".").sort(), f) {
                    for (d = ut.event.special[f] || {},
                    f = (i ? d.delegateType: d.bindType) || f, h = u[f] || [], a = a[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = h.length; o--;) s = h[o],
                    !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (h.splice(o, 1), s.selector && h.delegateCount--, d.remove && d.remove.call(e, s));
                    l && !h.length && (d.teardown && d.teardown.call(e, p, g.handle) !== !1 || ut.removeEvent(e, f, g.handle), delete u[f])
                } else for (f in u) ut.event.remove(e, f + t[c], n, i, !0);
                ut.isEmptyObject(u) && (delete g.handle, ut._removeData(e, "events"))
            }
        },
        trigger: function(n, i, r, o) {
            var s, a, l, c, u, d, h, f = [r || G],
            p = lt.call(n, "type") ? n.type: n,
            m = lt.call(n, "namespace") ? n.namespace.split(".") : [];
            if (l = d = r = r || G, 3 !== r.nodeType && 8 !== r.nodeType && !Ft.test(p + ut.event.triggered) && (p.indexOf(".") >= 0 && (m = p.split("."), p = m.shift(), m.sort()), a = p.indexOf(":") < 0 && "on" + p, n = n[ut.expando] ? n: new ut.Event(p, "object" == typeof n && n), n.isTrigger = o ? 2 : 3, n.namespace = m.join("."), n.namespace_re = n.namespace ? new RegExp("(^|\\.)" + m.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, n.result = t, n.target || (n.target = r), i = null == i ? [n] : ut.makeArray(i, [n]), u = ut.event.special[p] || {},
            o || !u.trigger || u.trigger.apply(r, i) !== !1)) {
                if (!o && !u.noBubble && !ut.isWindow(r)) {
                    for (c = u.delegateType || p, Ft.test(c + p) || (l = l.parentNode); l; l = l.parentNode) f.push(l),
                    d = l;
                    d === (r.ownerDocument || G) && f.push(d.defaultView || d.parentWindow || e)
                }
                for (h = 0; (l = f[h++]) && !n.isPropagationStopped();) n.type = h > 1 ? c: u.bindType || p,
                s = (ut._data(l, "events") || {})[n.type] && ut._data(l, "handle"),
                s && s.apply(l, i),
                s = a && l[a],
                s && ut.acceptData(l) && s.apply && s.apply(l, i) === !1 && n.preventDefault();
                if (n.type = p, !o && !n.isDefaultPrevented() && (!u._default || u._default.apply(f.pop(), i) === !1) && ut.acceptData(r) && a && r[p] && !ut.isWindow(r)) {
                    d = r[a],
                    d && (r[a] = null),
                    ut.event.triggered = p;
                    try {
                        r[p]()
                    } catch(g) {}
                    ut.event.triggered = t,
                    d && (r[a] = d)
                }
                return n.result
            }
        },
        dispatch: function(e) {
            e = ut.event.fix(e);
            var n, i, r, o, s, a = [],
            l = ot.call(arguments),
            c = (ut._data(this, "events") || {})[e.type] || [],
            u = ut.event.special[e.type] || {};
            if (l[0] = e, e.delegateTarget = this, !u.preDispatch || u.preDispatch.call(this, e) !== !1) {
                for (a = ut.event.handlers.call(this, e, c), n = 0; (o = a[n++]) && !e.isPropagationStopped();) for (e.currentTarget = o.elem, s = 0; (r = o.handlers[s++]) && !e.isImmediatePropagationStopped();)(!e.namespace_re || e.namespace_re.test(r.namespace)) && (e.handleObj = r, e.data = r.data, i = ((ut.event.special[r.origType] || {}).handle || r.handler).apply(o.elem, l), i !== t && (e.result = i) === !1 && (e.preventDefault(), e.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, e),
                e.result
            }
        },
        handlers: function(e, n) {
            var i, r, o, s, a = [],
            l = n.delegateCount,
            c = e.target;
            if (l && c.nodeType && (!e.button || "click" !== e.type)) for (; c != this; c = c.parentNode || this) if (1 === c.nodeType && (c.disabled !== !0 || "click" !== e.type)) {
                for (o = [], s = 0; l > s; s++) r = n[s],
                i = r.selector + " ",
                o[i] === t && (o[i] = r.needsContext ? ut(i, this).index(c) >= 0 : ut.find(i, this, null, [c]).length),
                o[i] && o.push(r);
                o.length && a.push({
                    elem: c,
                    handlers: o
                })
            }
            return l < n.length && a.push({
                elem: this,
                handlers: n.slice(l)
            }),
            a
        },
        fix: function(e) {
            if (e[ut.expando]) return e;
            var t, n, i, r = e.type,
            o = e,
            s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Bt.test(r) ? this.mouseHooks: jt.test(r) ? this.keyHooks: {}), i = s.props ? this.props.concat(s.props) : this.props, e = new ut.Event(o), t = i.length; t--;) n = i[t],
            e[n] = o[n];
            return e.target || (e.target = o.srcElement || G),
            3 === e.target.nodeType && (e.target = e.target.parentNode),
            e.metaKey = !!e.metaKey,
            s.filter ? s.filter(e, o) : e
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function(e, t) {
                return null == e.which && (e.which = null != t.charCode ? t.charCode: t.keyCode),
                e
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function(e, n) {
                var i, r, o, s = n.button,
                a = n.fromElement;
                return null == e.pageX && null != n.clientX && (r = e.target.ownerDocument || G, o = r.documentElement, i = r.body, e.pageX = n.clientX + (o && o.scrollLeft || i && i.scrollLeft || 0) - (o && o.clientLeft || i && i.clientLeft || 0), e.pageY = n.clientY + (o && o.scrollTop || i && i.scrollTop || 0) - (o && o.clientTop || i && i.clientTop || 0)),
                !e.relatedTarget && a && (e.relatedTarget = a === e.target ? n.toElement: a),
                e.which || s === t || (e.which = 1 & s ? 1 : 2 & s ? 3 : 4 & s ? 2 : 0),
                e
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function() {
                    if (this !== u() && this.focus) try {
                        return this.focus(),
                        !1
                    } catch(e) {}
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function() {
                    return this === u() && this.blur ? (this.blur(), !1) : void 0
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function() {
                    return ut.nodeName(this, "input") && "checkbox" === this.type && this.click ? (this.click(), !1) : void 0
                },
                _default: function(e) {
                    return ut.nodeName(e.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function(e) {
                    e.result !== t && (e.originalEvent.returnValue = e.result)
                }
            }
        },
        simulate: function(e, t, n, i) {
            var r = ut.extend(new ut.Event, n, {
                type: e,
                isSimulated: !0,
                originalEvent: {}
            });
            i ? ut.event.trigger(r, null, t) : ut.event.dispatch.call(t, r),
            r.isDefaultPrevented() && n.preventDefault()
        }
    },
    ut.removeEvent = G.removeEventListener ?
    function(e, t, n) {
        e.removeEventListener && e.removeEventListener(t, n, !1)
    }: function(e, t, n) {
        var i = "on" + t;
        e.detachEvent && (typeof e[i] === Y && (e[i] = null), e.detachEvent(i, n))
    },
    ut.Event = function(e, t) {
        return this instanceof ut.Event ? (e && e.type ? (this.originalEvent = e, this.type = e.type, this.isDefaultPrevented = e.defaultPrevented || e.returnValue === !1 || e.getPreventDefault && e.getPreventDefault() ? l: c) : this.type = e, t && ut.extend(this, t), this.timeStamp = e && e.timeStamp || ut.now(), this[ut.expando] = !0, void 0) : new ut.Event(e, t)
    },
    ut.Event.prototype = {
        isDefaultPrevented: c,
        isPropagationStopped: c,
        isImmediatePropagationStopped: c,
        preventDefault: function() {
            var e = this.originalEvent;
            this.isDefaultPrevented = l,
            e && (e.preventDefault ? e.preventDefault() : e.returnValue = !1)
        },
        stopPropagation: function() {
            var e = this.originalEvent;
            this.isPropagationStopped = l,
            e && (e.stopPropagation && e.stopPropagation(), e.cancelBubble = !0)
        },
        stopImmediatePropagation: function() {
            this.isImmediatePropagationStopped = l,
            this.stopPropagation()
        }
    },
    ut.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout"
    },
    function(e, t) {
        ut.event.special[e] = {
            delegateType: t,
            bindType: t,
            handle: function(e) {
                var n, i = this,
                r = e.relatedTarget,
                o = e.handleObj;
                return (!r || r !== i && !ut.contains(i, r)) && (e.type = o.origType, n = o.handler.apply(this, arguments), e.type = t),
                n
            }
        }
    }),
    ut.support.submitBubbles || (ut.event.special.submit = {
        setup: function() {
            return ut.nodeName(this, "form") ? !1 : (ut.event.add(this, "click._submit keypress._submit",
            function(e) {
                var n = e.target,
                i = ut.nodeName(n, "input") || ut.nodeName(n, "button") ? n.form: t;
                i && !ut._data(i, "submitBubbles") && (ut.event.add(i, "submit._submit",
                function(e) {
                    e._submit_bubble = !0
                }), ut._data(i, "submitBubbles", !0))
            }), void 0)
        },
        postDispatch: function(e) {
            e._submit_bubble && (delete e._submit_bubble, this.parentNode && !e.isTrigger && ut.event.simulate("submit", this.parentNode, e, !0))
        },
        teardown: function() {
            return ut.nodeName(this, "form") ? !1 : (ut.event.remove(this, "._submit"), void 0)
        }
    }),
    ut.support.changeBubbles || (ut.event.special.change = {
        setup: function() {
            return Ht.test(this.nodeName) ? (("checkbox" === this.type || "radio" === this.type) && (ut.event.add(this, "propertychange._change",
            function(e) {
                "checked" === e.originalEvent.propertyName && (this._just_changed = !0)
            }), ut.event.add(this, "click._change",
            function(e) {
                this._just_changed && !e.isTrigger && (this._just_changed = !1),
                ut.event.simulate("change", this, e, !0)
            })), !1) : (ut.event.add(this, "beforeactivate._change",
            function(e) {
                var t = e.target;
                Ht.test(t.nodeName) && !ut._data(t, "changeBubbles") && (ut.event.add(t, "change._change",
                function(e) { ! this.parentNode || e.isSimulated || e.isTrigger || ut.event.simulate("change", this.parentNode, e, !0)
                }), ut._data(t, "changeBubbles", !0))
            }), void 0)
        },
        handle: function(e) {
            var t = e.target;
            return this !== t || e.isSimulated || e.isTrigger || "radio" !== t.type && "checkbox" !== t.type ? e.handleObj.handler.apply(this, arguments) : void 0
        },
        teardown: function() {
            return ut.event.remove(this, "._change"),
            !Ht.test(this.nodeName)
        }
    }),
    ut.support.focusinBubbles || ut.each({
        focus: "focusin",
        blur: "focusout"
    },
    function(e, t) {
        var n = 0,
        i = function(e) {
            ut.event.simulate(t, e.target, ut.event.fix(e), !0)
        };
        ut.event.special[t] = {
            setup: function() {
                0 === n++&&G.addEventListener(e, i, !0)
            },
            teardown: function() {
                0 === --n && G.removeEventListener(e, i, !0)
            }
        }
    }),
    ut.fn.extend({
        on: function(e, n, i, r, o) {
            var s, a;
            if ("object" == typeof e) {
                "string" != typeof n && (i = i || n, n = t);
                for (s in e) this.on(s, n, i, e[s], o);
                return this
            }
            if (null == i && null == r ? (r = n, i = n = t) : null == r && ("string" == typeof n ? (r = i, i = t) : (r = i, i = n, n = t)), r === !1) r = c;
            else if (!r) return this;
            return 1 === o && (a = r, r = function(e) {
                return ut().off(e),
                a.apply(this, arguments)
            },
            r.guid = a.guid || (a.guid = ut.guid++)),
            this.each(function() {
                ut.event.add(this, e, r, i, n)
            })
        },
        one: function(e, t, n, i) {
            return this.on(e, t, n, i, 1)
        },
        off: function(e, n, i) {
            var r, o;
            if (e && e.preventDefault && e.handleObj) return r = e.handleObj,
            ut(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace: r.origType, r.selector, r.handler),
            this;
            if ("object" == typeof e) {
                for (o in e) this.off(o, n, e[o]);
                return this
            }
            return (n === !1 || "function" == typeof n) && (i = n, n = t),
            i === !1 && (i = c),
            this.each(function() {
                ut.event.remove(this, e, i, n)
            })
        },
        trigger: function(e, t) {
            return this.each(function() {
                ut.event.trigger(e, t, this)
            })
        },
        triggerHandler: function(e, t) {
            var n = this[0];
            return n ? ut.event.trigger(e, t, n, !0) : void 0
        }
    });
    var $t = /^.[^:#\[\.,]*$/,
    qt = /^(?:parents|prev(?:Until|All))/,
    zt = ut.expr.match.needsContext,
    Ut = {
        children: !0,
        contents: !0,
        next: !0,
        prev: !0
    };
    ut.fn.extend({
        find: function(e) {
            var t, n = [],
            i = this,
            r = i.length;
            if ("string" != typeof e) return this.pushStack(ut(e).filter(function() {
                for (t = 0; r > t; t++) if (ut.contains(i[t], this)) return ! 0
            }));
            for (t = 0; r > t; t++) ut.find(e, i[t], n);
            return n = this.pushStack(r > 1 ? ut.unique(n) : n),
            n.selector = this.selector ? this.selector + " " + e: e,
            n
        },
        has: function(e) {
            var t, n = ut(e, this),
            i = n.length;
            return this.filter(function() {
                for (t = 0; i > t; t++) if (ut.contains(this, n[t])) return ! 0
            })
        },
        not: function(e) {
            return this.pushStack(h(this, e || [], !0))
        },
        filter: function(e) {
            return this.pushStack(h(this, e || [], !1))
        },
        is: function(e) {
            return !! h(this, "string" == typeof e && zt.test(e) ? ut(e) : e || [], !1).length
        },
        closest: function(e, t) {
            for (var n, i = 0,
            r = this.length,
            o = [], s = zt.test(e) || "string" != typeof e ? ut(e, t || this.context) : 0; r > i; i++) for (n = this[i]; n && n !== t; n = n.parentNode) if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ut.find.matchesSelector(n, e))) {
                n = o.push(n);
                break
            }
            return this.pushStack(o.length > 1 ? ut.unique(o) : o)
        },
        index: function(e) {
            return e ? "string" == typeof e ? ut.inArray(this[0], ut(e)) : ut.inArray(e.jquery ? e[0] : e, this) : this[0] && this[0].parentNode ? this.first().prevAll().length: -1
        },
        add: function(e, t) {
            var n = "string" == typeof e ? ut(e, t) : ut.makeArray(e && e.nodeType ? [e] : e),
            i = ut.merge(this.get(), n);
            return this.pushStack(ut.unique(i))
        },
        addBack: function(e) {
            return this.add(null == e ? this.prevObject: this.prevObject.filter(e))
        }
    }),
    ut.each({
        parent: function(e) {
            var t = e.parentNode;
            return t && 11 !== t.nodeType ? t: null
        },
        parents: function(e) {
            return ut.dir(e, "parentNode")
        },
        parentsUntil: function(e, t, n) {
            return ut.dir(e, "parentNode", n)
        },
        next: function(e) {
            return d(e, "nextSibling")
        },
        prev: function(e) {
            return d(e, "previousSibling")
        },
        nextAll: function(e) {
            return ut.dir(e, "nextSibling")
        },
        prevAll: function(e) {
            return ut.dir(e, "previousSibling")
        },
        nextUntil: function(e, t, n) {
            return ut.dir(e, "nextSibling", n)
        },
        prevUntil: function(e, t, n) {
            return ut.dir(e, "previousSibling", n)
        },
        siblings: function(e) {
            return ut.sibling((e.parentNode || {}).firstChild, e)
        },
        children: function(e) {
            return ut.sibling(e.firstChild)
        },
        contents: function(e) {
            return ut.nodeName(e, "iframe") ? e.contentDocument || e.contentWindow.document: ut.merge([], e.childNodes)
        }
    },
    function(e, t) {
        ut.fn[e] = function(n, i) {
            var r = ut.map(this, t, n);
            return "Until" !== e.slice( - 5) && (i = n),
            i && "string" == typeof i && (r = ut.filter(i, r)),
            this.length > 1 && (Ut[e] || (r = ut.unique(r)), qt.test(e) && (r = r.reverse())),
            this.pushStack(r)
        }
    }),
    ut.extend({
        filter: function(e, t, n) {
            var i = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === i.nodeType ? ut.find.matchesSelector(i, e) ? [i] : [] : ut.find.matches(e, ut.grep(t,
            function(e) {
                return 1 === e.nodeType
            }))
        },
        dir: function(e, n, i) {
            for (var r = [], o = e[n]; o && 9 !== o.nodeType && (i === t || 1 !== o.nodeType || !ut(o).is(i));) 1 === o.nodeType && r.push(o),
            o = o[n];
            return r
        },
        sibling: function(e, t) {
            for (var n = []; e; e = e.nextSibling) 1 === e.nodeType && e !== t && n.push(e);
            return n
        }
    });
    var Vt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|figcaption|figure|footer|header|hgroup|mark|meter|nav|output|progress|section|summary|time|video",
    Xt = / jQuery\d+="(?:null|\d+)"/g,
    Yt = new RegExp("<(?:" + Vt + ")[\\s/>]", "i"),
    Qt = /^\s+/,
    Gt = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,
    Kt = /<([\w:]+)/,
    Jt = /<tbody/i,
    Zt = /<|&#?\w+;/,
    en = /<(?:script|style|link)/i,
    tn = /^(?:checkbox|radio)$/i,
    nn = /checked\s*(?:[^=]|=\s*.checked.)/i,
    rn = /^$|\/(?:java|ecma)script/i,
    on = /^true\/(.*)/,
    sn = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
    an = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: ut.support.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    },
    ln = f(G),
    cn = ln.appendChild(G.createElement("div"));
    an.optgroup = an.option,
    an.tbody = an.tfoot = an.colgroup = an.caption = an.thead,
    an.th = an.td,
    ut.fn.extend({
        text: function(e) {
            return ut.access(this,
            function(e) {
                return e === t ? ut.text(this) : this.empty().append((this[0] && this[0].ownerDocument || G).createTextNode(e))
            },
            null, e, arguments.length)
        },
        append: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.appendChild(e)
                }
            })
        },
        prepend: function() {
            return this.domManip(arguments,
            function(e) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var t = p(this, e);
                    t.insertBefore(e, t.firstChild)
                }
            })
        },
        before: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this)
            })
        },
        after: function() {
            return this.domManip(arguments,
            function(e) {
                this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
            })
        },
        remove: function(e, t) {
            for (var n, i = e ? ut.filter(e, this) : this, r = 0; null != (n = i[r]); r++) t || 1 !== n.nodeType || ut.cleanData(w(n)),
            n.parentNode && (t && ut.contains(n.ownerDocument, n) && v(w(n, "script")), n.parentNode.removeChild(n));
            return this
        },
        empty: function() {
            for (var e, t = 0; null != (e = this[t]); t++) {
                for (1 === e.nodeType && ut.cleanData(w(e, !1)); e.firstChild;) e.removeChild(e.firstChild);
                e.options && ut.nodeName(e, "select") && (e.options.length = 0)
            }
            return this
        },
        clone: function(e, t) {
            return e = null == e ? !1 : e,
            t = null == t ? e: t,
            this.map(function() {
                return ut.clone(this, e, t)
            })
        },
        html: function(e) {
            return ut.access(this,
            function(e) {
                var n = this[0] || {},
                i = 0,
                r = this.length;
                if (e === t) return 1 === n.nodeType ? n.innerHTML.replace(Xt, "") : t;
                if (! ("string" != typeof e || en.test(e) || !ut.support.htmlSerialize && Yt.test(e) || !ut.support.leadingWhitespace && Qt.test(e) || an[(Kt.exec(e) || ["", ""])[1].toLowerCase()])) {
                    e = e.replace(Gt, "<$1></$2>");
                    try {
                        for (; r > i; i++) n = this[i] || {},
                        1 === n.nodeType && (ut.cleanData(w(n, !1)), n.innerHTML = e);
                        n = 0
                    } catch(o) {}
                }
                n && this.empty().append(e)
            },
            null, e, arguments.length)
        },
        replaceWith: function() {
            var e = ut.map(this,
            function(e) {
                return [e.nextSibling, e.parentNode]
            }),
            t = 0;
            return this.domManip(arguments,
            function(n) {
                var i = e[t++],
                r = e[t++];
                r && (i && i.parentNode !== r && (i = this.nextSibling), ut(this).remove(), r.insertBefore(n, i))
            },
            !0),
            t ? this: this.remove()
        },
        detach: function(e) {
            return this.remove(e, !0)
        },
        domManip: function(e, t, n) {
            e = it.apply([], e);
            var i, r, o, s, a, l, c = 0,
            u = this.length,
            d = this,
            h = u - 1,
            f = e[0],
            p = ut.isFunction(f);
            if (p || !(1 >= u || "string" != typeof f || ut.support.checkClone) && nn.test(f)) return this.each(function(i) {
                var r = d.eq(i);
                p && (e[0] = f.call(this, i, r.html())),
                r.domManip(e, t, n)
            });
            if (u && (l = ut.buildFragment(e, this[0].ownerDocument, !1, !n && this), i = l.firstChild, 1 === l.childNodes.length && (l = i), i)) {
                for (s = ut.map(w(l, "script"), m), o = s.length; u > c; c++) r = l,
                c !== h && (r = ut.clone(r, !0, !0), o && ut.merge(s, w(r, "script"))),
                t.call(this[c], r, c);
                if (o) for (a = s[s.length - 1].ownerDocument, ut.map(s, g), c = 0; o > c; c++) r = s[c],
                rn.test(r.type || "") && !ut._data(r, "globalEval") && ut.contains(a, r) && (r.src ? ut._evalUrl(r.src) : ut.globalEval((r.text || r.textContent || r.innerHTML || "").replace(sn, "")));
                l = i = null
            }
            return this
        }
    }),
    ut.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    },
    function(e, t) {
        ut.fn[e] = function(e) {
            for (var n, i = 0,
            r = [], o = ut(e), s = o.length - 1; s >= i; i++) n = i === s ? this: this.clone(!0),
            ut(o[i])[t](n),
            rt.apply(r, n.get());
            return this.pushStack(r)
        }
    }),
    ut.extend({
        clone: function(e, t, n) {
            var i, r, o, s, a, l = ut.contains(e.ownerDocument, e);
            if (ut.support.html5Clone || ut.isXMLDoc(e) || !Yt.test("<" + e.nodeName + ">") ? o = e.cloneNode(!0) : (cn.innerHTML = e.outerHTML, cn.removeChild(o = cn.firstChild)), !(ut.support.noCloneEvent && ut.support.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || ut.isXMLDoc(e))) for (i = w(o), a = w(e), s = 0; null != (r = a[s]); ++s) i[s] && b(r, i[s]);
            if (t) if (n) for (a = a || w(e), i = i || w(o), s = 0; null != (r = a[s]); s++) y(r, i[s]);
            else y(e, o);
            return i = w(o, "script"),
            i.length > 0 && v(i, !l && w(e, "script")),
            i = a = r = null,
            o
        },
        buildFragment: function(e, t, n, i) {
            for (var r, o, s, a, l, c, u, d = e.length,
            h = f(t), p = [], m = 0; d > m; m++) if (o = e[m], o || 0 === o) if ("object" === ut.type(o)) ut.merge(p, o.nodeType ? [o] : o);
            else if (Zt.test(o)) {
                for (a = a || h.appendChild(t.createElement("div")), l = (Kt.exec(o) || ["", ""])[1].toLowerCase(), u = an[l] || an._default, a.innerHTML = u[1] + o.replace(Gt, "<$1></$2>") + u[2], r = u[0]; r--;) a = a.lastChild;
                if (!ut.support.leadingWhitespace && Qt.test(o) && p.push(t.createTextNode(Qt.exec(o)[0])), !ut.support.tbody) for (o = "table" !== l || Jt.test(o) ? "<table>" !== u[1] || Jt.test(o) ? 0 : a: a.firstChild, r = o && o.childNodes.length; r--;) ut.nodeName(c = o.childNodes[r], "tbody") && !c.childNodes.length && o.removeChild(c);
                for (ut.merge(p, a.childNodes), a.textContent = ""; a.firstChild;) a.removeChild(a.firstChild);
                a = h.lastChild
            } else p.push(t.createTextNode(o));
            for (a && h.removeChild(a), ut.support.appendChecked || ut.grep(w(p, "input"), x), m = 0; o = p[m++];) if ((!i || -1 === ut.inArray(o, i)) && (s = ut.contains(o.ownerDocument, o), a = w(h.appendChild(o), "script"), s && v(a), n)) for (r = 0; o = a[r++];) rn.test(o.type || "") && n.push(o);
            return a = null,
            h
        },
        cleanData: function(e, t) {
            for (var n, i, r, o, s = 0,
            a = ut.expando,
            l = ut.cache,
            c = ut.support.deleteExpando,
            u = ut.event.special; null != (n = e[s]); s++) if ((t || ut.acceptData(n)) && (r = n[a], o = r && l[r])) {
                if (o.events) for (i in o.events) u[i] ? ut.event.remove(n, i) : ut.removeEvent(n, i, o.handle);
                l[r] && (delete l[r], c ? delete n[a] : typeof n.removeAttribute !== Y ? n.removeAttribute(a) : n[a] = null, tt.push(r))
            }
        },
        _evalUrl: function(e) {
            return ut.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
    }),
    ut.fn.extend({
        wrapAll: function(e) {
            if (ut.isFunction(e)) return this.each(function(t) {
                ut(this).wrapAll(e.call(this, t))
            });
            if (this[0]) {
                var t = ut(e, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    for (var e = this; e.firstChild && 1 === e.firstChild.nodeType;) e = e.firstChild;
                    return e
                }).append(this)
            }
            return this
        },
        wrapInner: function(e) {
            return ut.isFunction(e) ? this.each(function(t) {
                ut(this).wrapInner(e.call(this, t))
            }) : this.each(function() {
                var t = ut(this),
                n = t.contents();
                n.length ? n.wrapAll(e) : t.append(e)
            })
        },
        wrap: function(e) {
            var t = ut.isFunction(e);
            return this.each(function(n) {
                ut(this).wrapAll(t ? e.call(this, n) : e)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                ut.nodeName(this, "body") || ut(this).replaceWith(this.childNodes)
            }).end()
        }
    });
    var un, dn, hn, fn = /alpha\([^)]*\)/i,
    pn = /opacity\s*=\s*([^)]*)/,
    mn = /^(top|right|bottom|left)$/,
    gn = /^(none|table(?!-c[ea]).+)/,
    vn = /^margin/,
    yn = new RegExp("^(" + dt + ")(.*)$", "i"),
    bn = new RegExp("^(" + dt + ")(?!px)[a-z%]+$", "i"),
    wn = new RegExp("^([+-])=(" + dt + ")", "i"),
    xn = {
        BODY: "block"
    },
    Cn = {
        position: "absolute",
        visibility: "hidden",
        display: "block"
    },
    Sn = {
        letterSpacing: 0,
        fontWeight: 400
    },
    Tn = ["Top", "Right", "Bottom", "Left"],
    En = ["Webkit", "O", "Moz", "ms"];
    ut.fn.extend({
        css: function(e, n) {
            return ut.access(this,
            function(e, n, i) {
                var r, o, s = {},
                a = 0;
                if (ut.isArray(n)) {
                    for (o = dn(e), r = n.length; r > a; a++) s[n[a]] = ut.css(e, n[a], !1, o);
                    return s
                }
                return i !== t ? ut.style(e, n, i) : ut.css(e, n)
            },
            e, n, arguments.length > 1)
        },
        show: function() {
            return T(this, !0)
        },
        hide: function() {
            return T(this)
        },
        toggle: function(e) {
            return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                S(this) ? ut(this).show() : ut(this).hide()
            })
        }
    }),
    ut.extend({
        cssHooks: {
            opacity: {
                get: function(e, t) {
                    if (t) {
                        var n = hn(e, "opacity");
                        return "" === n ? "1": n
                    }
                }
            }
        },
        cssNumber: {
            columnCount: !0,
            fillOpacity: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": ut.support.cssFloat ? "cssFloat": "styleFloat"
        },
        style: function(e, n, i, r) {
            if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                var o, s, a, l = ut.camelCase(n),
                c = e.style;
                if (n = ut.cssProps[l] || (ut.cssProps[l] = C(c, l)), a = ut.cssHooks[n] || ut.cssHooks[l], i === t) return a && "get" in a && (o = a.get(e, !1, r)) !== t ? o: c[n];
                if (s = typeof i, "string" === s && (o = wn.exec(i)) && (i = (o[1] + 1) * o[2] + parseFloat(ut.css(e, n)), s = "number"), !(null == i || "number" === s && isNaN(i) || ("number" !== s || ut.cssNumber[l] || (i += "px"), ut.support.clearCloneStyle || "" !== i || 0 !== n.indexOf("background") || (c[n] = "inherit"), a && "set" in a && (i = a.set(e, i, r)) === t))) try {
                    c[n] = i
                } catch(u) {}
            }
        },
        css: function(e, n, i, r) {
            var o, s, a, l = ut.camelCase(n);
            return n = ut.cssProps[l] || (ut.cssProps[l] = C(e.style, l)),
            a = ut.cssHooks[n] || ut.cssHooks[l],
            a && "get" in a && (s = a.get(e, !0, i)),
            s === t && (s = hn(e, n, r)),
            "normal" === s && n in Sn && (s = Sn[n]),
            "" === i || i ? (o = parseFloat(s), i === !0 || ut.isNumeric(o) ? o || 0 : s) : s
        }
    }),
    e.getComputedStyle ? (dn = function(t) {
        return e.getComputedStyle(t, null)
    },
    hn = function(e, n, i) {
        var r, o, s, a = i || dn(e),
        l = a ? a.getPropertyValue(n) || a[n] : t,
        c = e.style;
        return a && ("" !== l || ut.contains(e.ownerDocument, e) || (l = ut.style(e, n)), bn.test(l) && vn.test(n) && (r = c.width, o = c.minWidth, s = c.maxWidth, c.minWidth = c.maxWidth = c.width = l, l = a.width, c.width = r, c.minWidth = o, c.maxWidth = s)),
        l
    }) : G.documentElement.currentStyle && (dn = function(e) {
        return e.currentStyle
    },
    hn = function(e, n, i) {
        var r, o, s, a = i || dn(e),
        l = a ? a[n] : t,
        c = e.style;
        return null == l && c && c[n] && (l = c[n]),
        bn.test(l) && !mn.test(n) && (r = c.left, o = e.runtimeStyle, s = o && o.left, s && (o.left = e.currentStyle.left), c.left = "fontSize" === n ? "1em": l, l = c.pixelLeft + "px", c.left = r, s && (o.left = s)),
        "" === l ? "auto": l
    }),
    ut.each(["height", "width"],
    function(e, t) {
        ut.cssHooks[t] = {
            get: function(e, n, i) {
                return n ? 0 === e.offsetWidth && gn.test(ut.css(e, "display")) ? ut.swap(e, Cn,
                function() {
                    return _(e, t, i)
                }) : _(e, t, i) : void 0
            },
            set: function(e, n, i) {
                var r = i && dn(e);
                return E(e, n, i ? N(e, t, i, ut.support.boxSizing && "border-box" === ut.css(e, "boxSizing", !1, r), r) : 0)
            }
        }
    }),
    ut.support.opacity || (ut.cssHooks.opacity = {
        get: function(e, t) {
            return pn.test((t && e.currentStyle ? e.currentStyle.filter: e.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "": t ? "1": ""
        },
        set: function(e, t) {
            var n = e.style,
            i = e.currentStyle,
            r = ut.isNumeric(t) ? "alpha(opacity=" + 100 * t + ")": "",
            o = i && i.filter || n.filter || "";
            n.zoom = 1,
            (t >= 1 || "" === t) && "" === ut.trim(o.replace(fn, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === t || i && !i.filter) || (n.filter = fn.test(o) ? o.replace(fn, r) : o + " " + r)
        }
    }),
    ut(function() {
        ut.support.reliableMarginRight || (ut.cssHooks.marginRight = {
            get: function(e, t) {
                return t ? ut.swap(e, {
                    display: "inline-block"
                },
                hn, [e, "marginRight"]) : void 0
            }
        }),
        !ut.support.pixelPosition && ut.fn.position && ut.each(["top", "left"],
        function(e, t) {
            ut.cssHooks[t] = {
                get: function(e, n) {
                    return n ? (n = hn(e, t), bn.test(n) ? ut(e).position()[t] + "px": n) : void 0
                }
            }
        })
    }),
    ut.expr && ut.expr.filters && (ut.expr.filters.hidden = function(e) {
        return e.offsetWidth <= 0 && e.offsetHeight <= 0 || !ut.support.reliableHiddenOffsets && "none" === (e.style && e.style.display || ut.css(e, "display"))
    },
    ut.expr.filters.visible = function(e) {
        return ! ut.expr.filters.hidden(e)
    }),
    ut.each({
        margin: "",
        padding: "",
        border: "Width"
    },
    function(e, t) {
        ut.cssHooks[e + t] = {
            expand: function(n) {
                for (var i = 0,
                r = {},
                o = "string" == typeof n ? n.split(" ") : [n]; 4 > i; i++) r[e + Tn[i] + t] = o[i] || o[i - 2] || o[0];
                return r
            }
        },
        vn.test(e) || (ut.cssHooks[e + t].set = E)
    });
    var Nn = /%20/g,
    _n = /\[\]$/,
    kn = /\r?\n/g,
    An = /^(?:submit|button|image|reset|file)$/i,
    Pn = /^(?:input|select|textarea|keygen)/i;
    ut.fn.extend({
        serialize: function() {
            return ut.param(this.serializeArray())
        },
        serializeArray: function() {
            return this.map(function() {
                var e = ut.prop(this, "elements");
                return e ? ut.makeArray(e) : this
            }).filter(function() {
                var e = this.type;
                return this.name && !ut(this).is(":disabled") && Pn.test(this.nodeName) && !An.test(e) && (this.checked || !tn.test(e))
            }).map(function(e, t) {
                var n = ut(this).val();
                return null == n ? null: ut.isArray(n) ? ut.map(n,
                function(e) {
                    return {
                        name: t.name,
                        value: e.replace(kn, "\r\n")
                    }
                }) : {
                    name: t.name,
                    value: n.replace(kn, "\r\n")
                }
            }).get()
        }
    }),
    ut.param = function(e, n) {
        var i, r = [],
        o = function(e, t) {
            t = ut.isFunction(t) ? t() : null == t ? "": t,
            r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(t)
        };
        if (n === t && (n = ut.ajaxSettings && ut.ajaxSettings.traditional), ut.isArray(e) || e.jquery && !ut.isPlainObject(e)) ut.each(e,
        function() {
            o(this.name, this.value)
        });
        else for (i in e) P(i, e[i], n, o);
        return r.join("&").replace(Nn, "+")
    },
    ut.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),
    function(e, t) {
        ut.fn[t] = function(e, n) {
            return arguments.length > 0 ? this.on(t, null, e, n) : this.trigger(t)
        }
    }),
    ut.fn.extend({
        hover: function(e, t) {
            return this.mouseenter(e).mouseleave(t || e)
        },
        bind: function(e, t, n) {
            return this.on(e, null, t, n)
        },
        unbind: function(e, t) {
            return this.off(e, null, t)
        },
        delegate: function(e, t, n, i) {
            return this.on(t, e, n, i)
        },
        undelegate: function(e, t, n) {
            return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
        }
    });
    var Dn, Ln, Rn = ut.now(),
    On = /\?/,
    Mn = /#.*$/,
    In = /([?&])_=[^&]*/,
    Hn = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
    jn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
    Bn = /^(?:GET|HEAD)$/,
    Fn = /^\/\//,
    Wn = /^([\w.+-]+:)(?:\/\/([^\/?#:]*)(?::(\d+)|)|)/,
    $n = ut.fn.load,
    qn = {},
    zn = {},
    Un = "*/".concat("*");
    try {
        Ln = Q.href
    } catch(Vn) {
        Ln = G.createElement("a"),
        Ln.href = "",
        Ln = Ln.href
    }
    Dn = Wn.exec(Ln.toLowerCase()) || [],
    ut.fn.load = function(e, n, i) {
        if ("string" != typeof e && $n) return $n.apply(this, arguments);
        var r, o, s, a = this,
        l = e.indexOf(" ");
        return l >= 0 && (r = e.slice(l, e.length), e = e.slice(0, l)),
        ut.isFunction(n) ? (i = n, n = t) : n && "object" == typeof n && (s = "POST"),
        a.length > 0 && ut.ajax({
            url: e,
            type: s,
            dataType: "html",
            data: n
        }).done(function(e) {
            o = arguments,
            a.html(r ? ut("<div>").append(ut.parseHTML(e)).find(r) : e)
        }).complete(i &&
        function(e, t) {
            a.each(i, o || [e.responseText, t, e])
        }),
        this
    },
    ut.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"],
    function(e, t) {
        ut.fn[t] = function(e) {
            return this.on(t, e)
        }
    }),
    ut.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: Ln,
            type: "GET",
            isLocal: jn.test(Dn[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": Un,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /xml/,
                html: /html/,
                json: /json/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ut.parseJSON,
                "text xml": ut.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function(e, t) {
            return t ? R(R(e, ut.ajaxSettings), t) : R(ut.ajaxSettings, e)
        },
        ajaxPrefilter: D(qn),
        ajaxTransport: D(zn),
        ajax: function(e, n) {
            function i(e, n, i, r) {
                var o, d, y, b, x, S = n;
                2 !== w && (w = 2, l && clearTimeout(l), u = t, a = r || "", C.readyState = e > 0 ? 4 : 0, o = e >= 200 && 300 > e || 304 === e, i && (b = O(h, C, i)), b = M(h, b, C, o), o ? (h.ifModified && (x = C.getResponseHeader("Last-Modified"), x && (ut.lastModified[s] = x), x = C.getResponseHeader("etag"), x && (ut.etag[s] = x)), 204 === e || "HEAD" === h.type ? S = "nocontent": 304 === e ? S = "notmodified": (S = b.state, d = b.data, y = b.error, o = !y)) : (y = S, (e || !S) && (S = "error", 0 > e && (e = 0))), C.status = e, C.statusText = (n || S) + "", o ? m.resolveWith(f, [d, S, C]) : m.rejectWith(f, [C, S, y]), C.statusCode(v), v = t, c && p.trigger(o ? "ajaxSuccess": "ajaxError", [C, h, o ? d: y]), g.fireWith(f, [C, S]), c && (p.trigger("ajaxComplete", [C, h]), --ut.active || ut.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = t),
            n = n || {};
            var r, o, s, a, l, c, u, d, h = ut.ajaxSetup({},
            n),
            f = h.context || h,
            p = h.context && (f.nodeType || f.jquery) ? ut(f) : ut.event,
            m = ut.Deferred(),
            g = ut.Callbacks("once memory"),
            v = h.statusCode || {},
            y = {},
            b = {},
            w = 0,
            x = "canceled",
            C = {
                readyState: 0,
                getResponseHeader: function(e) {
                    var t;
                    if (2 === w) {
                        if (!d) for (d = {}; t = Hn.exec(a);) d[t[1].toLowerCase()] = t[2];
                        t = d[e.toLowerCase()]
                    }
                    return null == t ? null: t
                },
                getAllResponseHeaders: function() {
                    return 2 === w ? a: null
                },
                setRequestHeader: function(e, t) {
                    var n = e.toLowerCase();
                    return w || (e = b[n] = b[n] || e, y[e] = t),
                    this
                },
                overrideMimeType: function(e) {
                    return w || (h.mimeType = e),
                    this
                },
                statusCode: function(e) {
                    var t;
                    if (e) if (2 > w) for (t in e) v[t] = [v[t], e[t]];
                    else C.always(e[C.status]);
                    return this
                },
                abort: function(e) {
                    var t = e || x;
                    return u && u.abort(t),
                    i(0, t),
                    this
                }
            };
            if (m.promise(C).complete = g.add, C.success = C.done, C.error = C.fail, h.url = ((e || h.url || Ln) + "").replace(Mn, "").replace(Fn, Dn[1] + "//"), h.type = n.method || n.type || h.method || h.type, h.dataTypes = ut.trim(h.dataType || "*").toLowerCase().match(ht) || [""], null == h.crossDomain && (r = Wn.exec(h.url.toLowerCase()), h.crossDomain = !(!r || r[1] === Dn[1] && r[2] === Dn[2] && (r[3] || ("http:" === r[1] ? "80": "443")) === (Dn[3] || ("http:" === Dn[1] ? "80": "443")))), h.data && h.processData && "string" != typeof h.data && (h.data = ut.param(h.data, h.traditional)), L(qn, h, n, C), 2 === w) return C;
            c = h.global,
            c && 0 === ut.active++&&ut.event.trigger("ajaxStart"),
            h.type = h.type.toUpperCase(),
            h.hasContent = !Bn.test(h.type),
            s = h.url,
            h.hasContent || (h.data && (s = h.url += (On.test(s) ? "&": "?") + h.data, delete h.data), h.cache === !1 && (h.url = In.test(s) ? s.replace(In, "$1_=" + Rn++) : s + (On.test(s) ? "&": "?") + "_=" + Rn++)),
            h.ifModified && (ut.lastModified[s] && C.setRequestHeader("If-Modified-Since", ut.lastModified[s]), ut.etag[s] && C.setRequestHeader("If-None-Match", ut.etag[s])),
            (h.data && h.hasContent && h.contentType !== !1 || n.contentType) && C.setRequestHeader("Content-Type", h.contentType),
            C.setRequestHeader("Accept", h.dataTypes[0] && h.accepts[h.dataTypes[0]] ? h.accepts[h.dataTypes[0]] + ("*" !== h.dataTypes[0] ? ", " + Un + "; q=0.01": "") : h.accepts["*"]);
            for (o in h.headers) C.setRequestHeader(o, h.headers[o]);
            if (h.beforeSend && (h.beforeSend.call(f, C, h) === !1 || 2 === w)) return C.abort();
            x = "abort";
            for (o in {
                success: 1,
                error: 1,
                complete: 1
            }) C[o](h[o]);
            if (u = L(zn, h, n, C)) {
                C.readyState = 1,
                c && p.trigger("ajaxSend", [C, h]),
                h.async && h.timeout > 0 && (l = setTimeout(function() {
                    C.abort("timeout")
                },
                h.timeout));
                try {
                    w = 1,
                    u.send(y, i)
                } catch(S) {
                    if (! (2 > w)) throw S;
                    i( - 1, S)
                }
            } else i( - 1, "No Transport");
            return C
        },
        getJSON: function(e, t, n) {
            return ut.get(e, t, n, "json")
        },
        getScript: function(e, n) {
            return ut.get(e, t, n, "script")
        }
    }),
    ut.each(["get", "post"],
    function(e, n) {
        ut[n] = function(e, i, r, o) {
            return ut.isFunction(i) && (o = o || r, r = i, i = t),
            ut.ajax({
                url: e,
                type: n,
                dataType: o,
                data: i,
                success: r
            })
        }
    }),
    ut.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /(?:java|ecma)script/
        },
        converters: {
            "text script": function(e) {
                return ut.globalEval(e),
                e
            }
        }
    }),
    ut.ajaxPrefilter("script",
    function(e) {
        e.cache === t && (e.cache = !1),
        e.crossDomain && (e.type = "GET", e.global = !1)
    }),
    ut.ajaxTransport("script",
    function(e) {
        if (e.crossDomain) {
            var n, i = G.head || ut("head")[0] || G.documentElement;
            return {
                send: function(t, r) {
                    n = G.createElement("script"),
                    n.async = !0,
                    e.scriptCharset && (n.charset = e.scriptCharset),
                    n.src = e.url,
                    n.onload = n.onreadystatechange = function(e, t) { (t || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, t || r(200, "success"))
                    },
                    i.insertBefore(n, i.firstChild)
                },
                abort: function() {
                    n && n.onload(t, !0)
                }
            }
        }
    });
    var Xn = [],
    Yn = /(=)\?(?=&|$)|\?\?/;
    ut.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function() {
            var e = Xn.pop() || ut.expando + "_" + Rn++;
            return this[e] = !0,
            e
        }
    }),
    ut.ajaxPrefilter("json jsonp",
    function(n, i, r) {
        var o, s, a, l = n.jsonp !== !1 && (Yn.test(n.url) ? "url": "string" == typeof n.data && !(n.contentType || "").indexOf("application/x-www-form-urlencoded") && Yn.test(n.data) && "data");
        return l || "jsonp" === n.dataTypes[0] ? (o = n.jsonpCallback = ut.isFunction(n.jsonpCallback) ? n.jsonpCallback() : n.jsonpCallback, l ? n[l] = n[l].replace(Yn, "$1" + o) : n.jsonp !== !1 && (n.url += (On.test(n.url) ? "&": "?") + n.jsonp + "=" + o), n.converters["script json"] = function() {
            return a || ut.error(o + " was not called"),
            a[0]
        },
        n.dataTypes[0] = "json", s = e[o], e[o] = function() {
            a = arguments
        },
        r.always(function() {
            e[o] = s,
            n[o] && (n.jsonpCallback = i.jsonpCallback, Xn.push(o)),
            a && ut.isFunction(s) && s(a[0]),
            a = s = t
        }), "script") : void 0
    });
    var Qn, Gn, Kn = 0,
    Jn = e.ActiveXObject &&
    function() {
        var e;
        for (e in Qn) Qn[e](t, !0)
    };
    ut.ajaxSettings.xhr = e.ActiveXObject ?
    function() {
        return ! this.isLocal && I() || H()
    }: I,
    Gn = ut.ajaxSettings.xhr(),
    ut.support.cors = !!Gn && "withCredentials" in Gn,
    Gn = ut.support.ajax = !!Gn,
    Gn && ut.ajaxTransport(function(n) {
        if (!n.crossDomain || ut.support.cors) {
            var i;
            return {
                send: function(r, o) {
                    var s, a, l = n.xhr();
                    if (n.username ? l.open(n.type, n.url, n.async, n.username, n.password) : l.open(n.type, n.url, n.async), n.xhrFields) for (a in n.xhrFields) l[a] = n.xhrFields[a];
                    n.mimeType && l.overrideMimeType && l.overrideMimeType(n.mimeType),
                    n.crossDomain || r["X-Requested-With"] || (r["X-Requested-With"] = "XMLHttpRequest");
                    try {
                        for (a in r) l.setRequestHeader(a, r[a])
                    } catch(c) {}
                    l.send(n.hasContent && n.data || null),
                    i = function(e, r) {
                        var a, c, u, d;
                        try {
                            if (i && (r || 4 === l.readyState)) if (i = t, s && (l.onreadystatechange = ut.noop, Jn && delete Qn[s]), r) 4 !== l.readyState && l.abort();
                            else {
                                d = {},
                                a = l.status,
                                c = l.getAllResponseHeaders(),
                                "string" == typeof l.responseText && (d.text = l.responseText);
                                try {
                                    u = l.statusText
                                } catch(h) {
                                    u = ""
                                }
                                a || !n.isLocal || n.crossDomain ? 1223 === a && (a = 204) : a = d.text ? 200 : 404
                            }
                        } catch(f) {
                            r || o( - 1, f)
                        }
                        d && o(a, u, d, c)
                    },
                    n.async ? 4 === l.readyState ? setTimeout(i) : (s = ++Kn, Jn && (Qn || (Qn = {},
                    ut(e).unload(Jn)), Qn[s] = i), l.onreadystatechange = i) : i()
                },
                abort: function() {
                    i && i(t, !0)
                }
            }
        }
    });
    var Zn, ei, ti = /^(?:toggle|show|hide)$/,
    ni = new RegExp("^(?:([+-])=|)(" + dt + ")([a-z%]*)$", "i"),
    ii = /queueHooks$/,
    ri = [$],
    oi = {
        "*": [function(e, t) {
            var n = this.createTween(e, t),
            i = n.cur(),
            r = ni.exec(t),
            o = r && r[3] || (ut.cssNumber[e] ? "": "px"),
            s = (ut.cssNumber[e] || "px" !== o && +i) && ni.exec(ut.css(n.elem, e)),
            a = 1,
            l = 20;
            if (s && s[3] !== o) {
                o = o || s[3],
                r = r || [],
                s = +i || 1;
                do a = a || ".5",
                s /= a,
                ut.style(n.elem, e, s + o);
                while (a !== (a = n.cur() / i) && 1 !== a && --l)
            }
            return r && (s = n.start = +s || +i || 0, n.unit = o, n.end = r[1] ? s + (r[1] + 1) * r[2] : +r[2]),
            n
        }]
    };
    ut.Animation = ut.extend(F, {
        tweener: function(e, t) {
            ut.isFunction(e) ? (t = e, e = ["*"]) : e = e.split(" ");
            for (var n, i = 0,
            r = e.length; r > i; i++) n = e[i],
            oi[n] = oi[n] || [],
            oi[n].unshift(t)
        },
        prefilter: function(e, t) {
            t ? ri.unshift(e) : ri.push(e)
        }
    }),
    ut.Tween = q,
    q.prototype = {
        constructor: q,
        init: function(e, t, n, i, r, o) {
            this.elem = e,
            this.prop = n,
            this.easing = r || "swing",
            this.options = t,
            this.start = this.now = this.cur(),
            this.end = i,
            this.unit = o || (ut.cssNumber[n] ? "": "px")
        },
        cur: function() {
            var e = q.propHooks[this.prop];
            return e && e.get ? e.get(this) : q.propHooks._default.get(this)
        },
        run: function(e) {
            var t, n = q.propHooks[this.prop];
            return this.pos = t = this.options.duration ? ut.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : e,
            this.now = (this.end - this.start) * t + this.start,
            this.options.step && this.options.step.call(this.elem, this.now, this),
            n && n.set ? n.set(this) : q.propHooks._default.set(this),
            this
        }
    },
    q.prototype.init.prototype = q.prototype,
    q.propHooks = {
        _default: {
            get: function(e) {
                var t;
                return null == e.elem[e.prop] || e.elem.style && null != e.elem.style[e.prop] ? (t = ut.css(e.elem, e.prop, ""), t && "auto" !== t ? t: 0) : e.elem[e.prop]
            },
            set: function(e) {
                ut.fx.step[e.prop] ? ut.fx.step[e.prop](e) : e.elem.style && (null != e.elem.style[ut.cssProps[e.prop]] || ut.cssHooks[e.prop]) ? ut.style(e.elem, e.prop, e.now + e.unit) : e.elem[e.prop] = e.now
            }
        }
    },
    q.propHooks.scrollTop = q.propHooks.scrollLeft = {
        set: function(e) {
            e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
        }
    },
    ut.each(["toggle", "show", "hide"],
    function(e, t) {
        var n = ut.fn[t];
        ut.fn[t] = function(e, i, r) {
            return null == e || "boolean" == typeof e ? n.apply(this, arguments) : this.animate(z(t, !0), e, i, r)
        }
    }),
    ut.fn.extend({
        fadeTo: function(e, t, n, i) {
            return this.filter(S).css("opacity", 0).show().end().animate({
                opacity: t
            },
            e, n, i)
        },
        animate: function(e, t, n, i) {
            var r = ut.isEmptyObject(e),
            o = ut.speed(t, n, i),
            s = function() {
                var t = F(this, ut.extend({},
                e), o); (r || ut._data(this, "finish")) && t.stop(!0)
            };
            return s.finish = s,
            r || o.queue === !1 ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function(e, n, i) {
            var r = function(e) {
                var t = e.stop;
                delete e.stop,
                t(i)
            };
            return "string" != typeof e && (i = n, n = e, e = t),
            n && e !== !1 && this.queue(e || "fx", []),
            this.each(function() {
                var t = !0,
                n = null != e && e + "queueHooks",
                o = ut.timers,
                s = ut._data(this);
                if (n) s[n] && s[n].stop && r(s[n]);
                else for (n in s) s[n] && s[n].stop && ii.test(n) && r(s[n]);
                for (n = o.length; n--;) o[n].elem !== this || null != e && o[n].queue !== e || (o[n].anim.stop(i), t = !1, o.splice(n, 1)); (t || !i) && ut.dequeue(this, e)
            })
        },
        finish: function(e) {
            return e !== !1 && (e = e || "fx"),
            this.each(function() {
                var t, n = ut._data(this),
                i = n[e + "queue"],
                r = n[e + "queueHooks"],
                o = ut.timers,
                s = i ? i.length: 0;
                for (n.finish = !0, ut.queue(this, e, []), r && r.stop && r.stop.call(this, !0), t = o.length; t--;) o[t].elem === this && o[t].queue === e && (o[t].anim.stop(!0), o.splice(t, 1));
                for (t = 0; s > t; t++) i[t] && i[t].finish && i[t].finish.call(this);
                delete n.finish
            })
        }
    }),
    ut.each({
        slideDown: z("show"),
        slideUp: z("hide"),
        slideToggle: z("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    },
    function(e, t) {
        ut.fn[e] = function(e, n, i) {
            return this.animate(t, e, n, i)
        }
    }),
    ut.speed = function(e, t, n) {
        var i = e && "object" == typeof e ? ut.extend({},
        e) : {
            complete: n || !n && t || ut.isFunction(e) && e,
            duration: e,
            easing: n && t || t && !ut.isFunction(t) && t
        };
        return i.duration = ut.fx.off ? 0 : "number" == typeof i.duration ? i.duration: i.duration in ut.fx.speeds ? ut.fx.speeds[i.duration] : ut.fx.speeds._default,
        (null == i.queue || i.queue === !0) && (i.queue = "fx"),
        i.old = i.complete,
        i.complete = function() {
            ut.isFunction(i.old) && i.old.call(this),
            i.queue && ut.dequeue(this, i.queue)
        },
        i
    },
    ut.easing = {
        linear: function(e) {
            return e
        },
        swing: function(e) {
            return.5 - Math.cos(e * Math.PI) / 2
        }
    },
    ut.timers = [],
    ut.fx = q.prototype.init,
    ut.fx.tick = function() {
        var e, n = ut.timers,
        i = 0;
        for (Zn = ut.now(); i < n.length; i++) e = n[i],
        e() || n[i] !== e || n.splice(i--, 1);
        n.length || ut.fx.stop(),
        Zn = t
    },
    ut.fx.timer = function(e) {
        e() && ut.timers.push(e) && ut.fx.start()
    },
    ut.fx.interval = 13,
    ut.fx.start = function() {
        ei || (ei = setInterval(ut.fx.tick, ut.fx.interval))
    },
    ut.fx.stop = function() {
        clearInterval(ei),
        ei = null
    },
    ut.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    },
    ut.fx.step = {},
    ut.expr && ut.expr.filters && (ut.expr.filters.animated = function(e) {
        return ut.grep(ut.timers,
        function(t) {
            return e === t.elem
        }).length
    }),
    ut.fn.offset = function(e) {
        if (arguments.length) return e === t ? this: this.each(function(t) {
            ut.offset.setOffset(this, e, t)
        });
        var n, i, r = {
            top: 0,
            left: 0
        },
        o = this[0],
        s = o && o.ownerDocument;
        if (s) return n = s.documentElement,
        ut.contains(n, o) ? (typeof o.getBoundingClientRect !== Y && (r = o.getBoundingClientRect()), i = U(s), {
            top: r.top + (i.pageYOffset || n.scrollTop) - (n.clientTop || 0),
            left: r.left + (i.pageXOffset || n.scrollLeft) - (n.clientLeft || 0)
        }) : r
    },
    ut.offset = {
        setOffset: function(e, t, n) {
            var i = ut.css(e, "position");
            "static" === i && (e.style.position = "relative");
            var r, o, s = ut(e),
            a = s.offset(),
            l = ut.css(e, "top"),
            c = ut.css(e, "left"),
            u = ("absolute" === i || "fixed" === i) && ut.inArray("auto", [l, c]) > -1,
            d = {},
            h = {};
            u ? (h = s.position(), r = h.top, o = h.left) : (r = parseFloat(l) || 0, o = parseFloat(c) || 0),
            ut.isFunction(t) && (t = t.call(e, n, a)),
            null != t.top && (d.top = t.top - a.top + r),
            null != t.left && (d.left = t.left - a.left + o),
            "using" in t ? t.using.call(e, d) : s.css(d)
        }
    },
    ut.fn.extend({
        position: function() {
            if (this[0]) {
                var e, t, n = {
                    top: 0,
                    left: 0
                },
                i = this[0];
                return "fixed" === ut.css(i, "position") ? t = i.getBoundingClientRect() : (e = this.offsetParent(), t = this.offset(), ut.nodeName(e[0], "html") || (n = e.offset()), n.top += ut.css(e[0], "borderTopWidth", !0), n.left += ut.css(e[0], "borderLeftWidth", !0)),
                {
                    top: t.top - n.top - ut.css(i, "marginTop", !0),
                    left: t.left - n.left - ut.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var e = this.offsetParent || K; e && !ut.nodeName(e, "html") && "static" === ut.css(e, "position");) e = e.offsetParent;
                return e || K
            })
        }
    }),
    ut.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    },
    function(e, n) {
        var i = /Y/.test(n);
        ut.fn[e] = function(r) {
            return ut.access(this,
            function(e, r, o) {
                var s = U(e);
                return o === t ? s ? n in s ? s[n] : s.document.documentElement[r] : e[r] : (s ? s.scrollTo(i ? ut(s).scrollLeft() : o, i ? o: ut(s).scrollTop()) : e[r] = o, void 0)
            },
            e, r, arguments.length, null)
        }
    }),
    ut.each({
        Height: "height",
        Width: "width"
    },
    function(e, n) {
        ut.each({
            padding: "inner" + e,
            content: n,
            "": "outer" + e
        },
        function(i, r) {
            ut.fn[r] = function(r, o) {
                var s = arguments.length && (i || "boolean" != typeof r),
                a = i || (r === !0 || o === !0 ? "margin": "border");
                return ut.access(this,
                function(n, i, r) {
                    var o;
                    return ut.isWindow(n) ? n.document.documentElement["client" + e] : 9 === n.nodeType ? (o = n.documentElement, Math.max(n.body["scroll" + e], o["scroll" + e], n.body["offset" + e], o["offset" + e], o["client" + e])) : r === t ? ut.css(n, i, a) : ut.style(n, i, r, a)
                },
                n, s ? r: t, s, null)
            }
        })
    }),
    ut.fn.size = function() {
        return this.length
    },
    ut.fn.andSelf = ut.fn.addBack,
    "object" == typeof module && module && "object" == typeof module.exports ? module.exports = ut: (e.jQuery = e.$ = ut, "function" == typeof define && define.amd && define("jquery", [],
    function() {
        return ut
    }))
} (window),
function(e, t) {
    e.rails !== t && e.error("jquery-ujs has already been loaded!");
    var n, i = e(document);
    e.rails = n = {
        linkClickSelector: "a[data-confirm], a[data-method], a[data-remote], a[data-disable-with]",
        buttonClickSelector: "button[data-remote]",
        inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
        formSubmitSelector: "form",
        formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type])",
        disableSelector: "input[data-disable-with], button[data-disable-with], textarea[data-disable-with]",
        enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled",
        requiredInputSelector: "input[name][required]:not([disabled]),textarea[name][required]:not([disabled])",
        fileInputSelector: "input[type=file]",
        linkDisableSelector: "a[data-disable-with]",
        CSRFProtection: function(t) {
            var n = e('meta[name="csrf-token"]').attr("content");
            n && t.setRequestHeader("X-CSRF-Token", n)
        },
        fire: function(t, n, i) {
            var r = e.Event(n);
            return t.trigger(r, i),
            r.result !== !1
        },
        confirm: function(e) {
            return confirm(e)
        },
        ajax: function(t) {
            return e.ajax(t)
        },
        href: function(e) {
            return e.attr("href")
        },
        handleRemote: function(i) {
            var r, o, s, a, l, c, u, d;
            if (n.fire(i, "ajax:before")) {
                if (a = i.data("cross-domain"), l = a === t ? null: a, c = i.data("with-credentials") || null, u = i.data("type") || e.ajaxSettings && e.ajaxSettings.dataType, i.is("form")) {
                    r = i.attr("method"),
                    o = i.attr("action"),
                    s = i.serializeArray();
                    var h = i.data("ujs:submit-button");
                    h && (s.push(h), i.data("ujs:submit-button", null))
                } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                d = {
                    type: r || "GET",
                    data: s,
                    dataType: u,
                    beforeSend: function(e, r) {
                        return r.dataType === t && e.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script),
                        n.fire(i, "ajax:beforeSend", [e, r])
                    },
                    success: function(e, t, n) {
                        i.trigger("ajax:success", [e, t, n])
                    },
                    complete: function(e, t) {
                        i.trigger("ajax:complete", [e, t])
                    },
                    error: function(e, t, n) {
                        i.trigger("ajax:error", [e, t, n])
                    },
                    crossDomain: l
                },
                c && (d.xhrFields = {
                    withCredentials: c
                }),
                o && (d.url = o);
                var f = n.ajax(d);
                return i.trigger("ajax:send", f),
                f
            }
            return ! 1
        },
        handleMethod: function(i) {
            var r = n.href(i),
            o = i.data("method"),
            s = i.attr("target"),
            a = e("meta[name=csrf-token]").attr("content"),
            l = e("meta[name=csrf-param]").attr("content"),
            c = e('<form method="post" action="' + r + '"></form>'),
            u = '<input name="_method" value="' + o + '" type="hidden" />';
            l !== t && a !== t && (u += '<input name="' + l + '" value="' + a + '" type="hidden" />'),
            s && c.attr("target", s),
            c.hide().append(u).appendTo("body"),
            c.submit()
        },
        disableFormElements: function(t) {
            t.find(n.disableSelector).each(function() {
                var t = e(this),
                n = t.is("button") ? "html": "val";
                t.data("ujs:enable-with", t[n]()),
                t[n](t.data("disable-with")),
                t.prop("disabled", !0)
            })
        },
        enableFormElements: function(t) {
            t.find(n.enableSelector).each(function() {
                var t = e(this),
                n = t.is("button") ? "html": "val";
                t.data("ujs:enable-with") && t[n](t.data("ujs:enable-with")),
                t.prop("disabled", !1)
            })
        },
        allowAction: function(e) {
            var t, i = e.data("confirm"),
            r = !1;
            return i ? (n.fire(e, "confirm") && (r = n.confirm(i), t = n.fire(e, "confirm:complete", [r])), r && t) : !0
        },
        blankInputs: function(t, n, i) {
            var r, o, s = e(),
            a = n || "input,textarea",
            l = t.find(a);
            return l.each(function() {
                if (r = e(this), o = r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : r.val(), !o == !i) {
                    if (r.is("input[type=radio]") && l.filter('input[type=radio]:checked[name="' + r.attr("name") + '"]').length) return ! 0;
                    s = s.add(r)
                }
            }),
            s.length ? s: !1
        },
        nonBlankInputs: function(e, t) {
            return n.blankInputs(e, t, !0)
        },
        stopEverything: function(t) {
            return e(t.target).trigger("ujs:everythingStopped"),
            t.stopImmediatePropagation(),
            !1
        },
        disableElement: function(e) {
            e.data("ujs:enable-with", e.html()),
            e.html(e.data("disable-with")),
            e.bind("click.railsDisable",
            function(e) {
                return n.stopEverything(e)
            })
        },
        enableElement: function(e) {
            e.data("ujs:enable-with") !== t && (e.html(e.data("ujs:enable-with")), e.removeData("ujs:enable-with")),
            e.unbind("click.railsDisable")
        }
    },
    n.fire(i, "rails:attachBindings") && (e.ajaxPrefilter(function(e, t, i) {
        e.crossDomain || n.CSRFProtection(i)
    }), i.delegate(n.linkDisableSelector, "ajax:complete",
    function() {
        n.enableElement(e(this))
    }), i.delegate(n.linkClickSelector, "click.rails",
    function(i) {
        var r = e(this),
        o = r.data("method"),
        s = r.data("params");
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (r.is(n.linkDisableSelector) && n.disableElement(r), r.data("remote") !== t) {
            if (! (!i.metaKey && !i.ctrlKey || o && "GET" !== o || s)) return ! 0;
            var a = n.handleRemote(r);
            return a === !1 ? n.enableElement(r) : a.error(function() {
                n.enableElement(r)
            }),
            !1
        }
        return r.data("method") ? (n.handleMethod(r), !1) : void 0
    }), i.delegate(n.buttonClickSelector, "click.rails",
    function(t) {
        var i = e(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.inputChangeSelector, "change.rails",
    function(t) {
        var i = e(this);
        return n.allowAction(i) ? (n.handleRemote(i), !1) : n.stopEverything(t)
    }), i.delegate(n.formSubmitSelector, "submit.rails",
    function(i) {
        var r = e(this),
        o = r.data("remote") !== t,
        s = n.blankInputs(r, n.requiredInputSelector),
        a = n.nonBlankInputs(r, n.fileInputSelector);
        if (!n.allowAction(r)) return n.stopEverything(i);
        if (s && r.attr("novalidate") == t && n.fire(r, "ajax:aborted:required", [s])) return n.stopEverything(i);
        if (o) {
            if (a) {
                setTimeout(function() {
                    n.disableFormElements(r)
                },
                13);
                var l = n.fire(r, "ajax:aborted:file", [a]);
                return l || setTimeout(function() {
                    n.enableFormElements(r)
                },
                13),
                l
            }
            return n.handleRemote(r),
            !1
        }
        setTimeout(function() {
            n.disableFormElements(r)
        },
        13)
    }), i.delegate(n.formInputClickSelector, "click.rails",
    function(t) {
        var i = e(this);
        if (!n.allowAction(i)) return n.stopEverything(t);
        var r = i.attr("name"),
        o = r ? {
            name: r,
            value: i.val()
        }: null;
        i.closest("form").data("ujs:submit-button", o)
    }), i.delegate(n.formSubmitSelector, "ajax:beforeSend.rails",
    function(t) {
        this == t.target && n.disableFormElements(e(this))
    }), i.delegate(n.formSubmitSelector, "ajax:complete.rails",
    function(t) {
        this == t.target && n.enableFormElements(e(this))
    }), e(function() {
        var t = e("meta[name=csrf-token]").attr("content"),
        n = e("meta[name=csrf-param]").attr("content");
        e('form input[name="' + n + '"]').val(t)
    }))
} (jQuery),
window.Modernizr = function(e, t, n) {
    function i(e) {
        b.cssText = e
    }
    function r(e, t) {
        return i(x.join(e + ";") + (t || ""))
    }
    function o(e, t) {
        return typeof e === t
    }
    function s(e, t) {
        return !! ~ ("" + e).indexOf(t)
    }
    function a(e, t) {
        for (var i in e) {
            var r = e[i];
            if (!s(r, "-") && b[r] !== n) return "pfx" == t ? r: !0
        }
        return ! 1
    }
    function l(e, t, i) {
        for (var r in e) {
            var s = t[e[r]];
            if (s !== n) return i === !1 ? e[r] : o(s, "function") ? s.bind(i || t) : s
        }
        return ! 1
    }
    function c(e, t, n) {
        var i = e.charAt(0).toUpperCase() + e.slice(1),
        r = (e + " " + S.join(i + " ") + i).split(" ");
        return o(t, "string") || o(t, "undefined") ? a(r, t) : (r = (e + " " + T.join(i + " ") + i).split(" "), l(r, t, n))
    }
    var u, d, h, f = "2.8.3",
    p = {},
    m = !0,
    g = t.documentElement,
    v = "modernizr",
    y = t.createElement(v),
    b = y.style,
    w = ":)",
    x = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
    C = "Webkit Moz O ms",
    S = C.split(" "),
    T = C.toLowerCase().split(" "),
    E = {
        svg: "http://www.w3.org/2000/svg"
    },
    N = {},
    _ = [],
    k = _.slice,
    A = function(e, n, i, r) {
        var o, s, a, l, c = t.createElement("div"),
        u = t.body,
        d = u || t.createElement("body");
        if (parseInt(i, 10)) for (; i--;) a = t.createElement("div"),
        a.id = r ? r[i] : v + (i + 1),
        c.appendChild(a);
        return o = ["&#173;", '<style id="s', v, '">', e, "</style>"].join(""),
        c.id = v,
        (u ? c: d).innerHTML += o,
        d.appendChild(c),
        u || (d.style.background = "", d.style.overflow = "hidden", l = g.style.overflow, g.style.overflow = "hidden", g.appendChild(d)),
        s = n(c, e),
        u ? c.parentNode.removeChild(c) : (d.parentNode.removeChild(d), g.style.overflow = l),
        !!s
    },
    P = {}.hasOwnProperty;
    h = o(P, "undefined") || o(P.call, "undefined") ?
    function(e, t) {
        return t in e && o(e.constructor.prototype[t], "undefined")
    }: function(e, t) {
        return P.call(e, t)
    },
    Function.prototype.bind || (Function.prototype.bind = function(e) {
        var t = this;
        if ("function" != typeof t) throw new TypeError;
        var n = k.call(arguments, 1),
        i = function() {
            if (this instanceof i) {
                var r = function() {};
                r.prototype = t.prototype;
                var o = new r,
                s = t.apply(o, n.concat(k.call(arguments)));
                return Object(s) === s ? s: o
            }
            return t.apply(e, n.concat(k.call(arguments)))
        };
        return i
    }),
    N.flexbox = function() {
        return c("flexWrap")
    },
    N.touch = function() {
        var n;
        return "ontouchstart" in e || e.DocumentTouch && t instanceof DocumentTouch ? n = !0 : A(["@media (", x.join("touch-enabled),("), v, ")", "{#modernizr{top:9px;position:absolute}}"].join(""),
        function(e) {
            n = 9 === e.offsetTop
        }),
        n
    },
    N.history = function() {
        return !! e.history && !!history.pushState
    },
    N.rgba = function() {
        return i("background-color:rgba(150,255,150,.5)"),
        s(b.backgroundColor, "rgba")
    },
    N.borderradius = function() {
        return c("borderRadius")
    },
    N.boxshadow = function() {
        return c("boxShadow")
    },
    N.textshadow = function() {
        return "" === t.createElement("div").style.textShadow
    },
    N.opacity = function() {
        return r("opacity:.55"),
        /^0.55$/.test(b.opacity)
    },
    N.cssanimations = function() {
        return c("animationName")
    },
    N.cssgradients = function() {
        var e = "background-image:",
        t = "gradient(linear,left top,right bottom,from(#9f9),to(white));",
        n = "linear-gradient(left top,#9f9, white);";
        return i((e + "-webkit- ".split(" ").join(t + e) + x.join(n + e)).slice(0, -e.length)),
        s(b.backgroundImage, "gradient")
    },
    N.csstransforms = function() {
        return !! c("transform")
    },
    N.csstransforms3d = function() {
        var e = !!c("perspective");
        return e && "webkitPerspective" in g.style && A("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",
        function(t) {
            e = 9 === t.offsetLeft && 3 === t.offsetHeight
        }),
        e
    },
    N.csstransitions = function() {
        return c("transition")
    },
    N.generatedcontent = function() {
        var e;
        return A(["#", v, "{font:0/0 a}#", v, ':after{content:"', w, '";visibility:hidden;font:3px/1 a}'].join(""),
        function(t) {
            e = t.offsetHeight >= 3
        }),
        e
    },
    N.video = function() {
        var e = t.createElement("video"),
        n = !1;
        try { (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), n.h264 = e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), n.webm = e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
        } catch(i) {}
        return n
    },
    N.audio = function() {
        var e = t.createElement("audio"),
        n = !1;
        try { (n = !!e.canPlayType) && (n = new Boolean(n), n.ogg = e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), n.mp3 = e.canPlayType("audio/mpeg;").replace(/^no$/, ""), n.wav = e.canPlayType('audio/wav; codecs="1"').replace(/^no$/, ""), n.m4a = (e.canPlayType("audio/x-m4a;") || e.canPlayType("audio/aac;")).replace(/^no$/, ""))
        } catch(i) {}
        return n
    },
    N.svg = function() {
        return !! t.createElementNS && !!t.createElementNS(E.svg, "svg").createSVGRect
    };
    for (var D in N) h(N, D) && (d = D.toLowerCase(), p[d] = N[D](), _.push((p[d] ? "": "no-") + d));
    return p.addTest = function(e, t) {
        if ("object" == typeof e) for (var i in e) h(e, i) && p.addTest(i, e[i]);
        else {
            if (e = e.toLowerCase(), p[e] !== n) return p;
            t = "function" == typeof t ? t() : t,
            "undefined" != typeof m && m && (g.className += " " + (t ? "": "no-") + e),
            p[e] = t
        }
        return p
    },
    i(""),
    y = u = null,
    function(e, t) {
        function n(e, t) {
            var n = e.createElement("p"),
            i = e.getElementsByTagName("head")[0] || e.documentElement;
            return n.innerHTML = "x<style>" + t + "</style>",
            i.insertBefore(n.lastChild, i.firstChild)
        }
        function i() {
            var e = y.elements;
            return "string" == typeof e ? e.split(" ") : e
        }
        function r(e) {
            var t = v[e[m]];
            return t || (t = {},
            g++, e[m] = g, v[g] = t),
            t
        }
        function o(e, n, i) {
            if (n || (n = t), u) return n.createElement(e);
            i || (i = r(n));
            var o;
            return o = i.cache[e] ? i.cache[e].cloneNode() : p.test(e) ? (i.cache[e] = i.createElem(e)).cloneNode() : i.createElem(e),
            !o.canHaveChildren || f.test(e) || o.tagUrn ? o: i.frag.appendChild(o)
        }
        function s(e, n) {
            if (e || (e = t), u) return e.createDocumentFragment();
            n = n || r(e);
            for (var o = n.frag.cloneNode(), s = 0, a = i(), l = a.length; l > s; s++) o.createElement(a[s]);
            return o
        }
        function a(e, t) {
            t.cache || (t.cache = {},
            t.createElem = e.createElement, t.createFrag = e.createDocumentFragment, t.frag = t.createFrag()),
            e.createElement = function(n) {
                return y.shivMethods ? o(n, e, t) : t.createElem(n)
            },
            e.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + i().join().replace(/[\w\-]+/g,
            function(e) {
                return t.createElem(e),
                t.frag.createElement(e),
                'c("' + e + '")'
            }) + ");return n}")(y, t.frag)
        }
        function l(e) {
            e || (e = t);
            var i = r(e);
            return y.shivCSS && !c && !i.hasCSS && (i.hasCSS = !!n(e, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),
            u || a(e, i),
            e
        }
        var c, u, d = "3.7.0",
        h = e.html5 || {},
        f = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
        p = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
        m = "_html5shiv",
        g = 0,
        v = {}; !
        function() {
            try {
                var e = t.createElement("a");
                e.innerHTML = "<xyz></xyz>",
                c = "hidden" in e,
                u = 1 == e.childNodes.length ||
                function() {
                    t.createElement("a");
                    var e = t.createDocumentFragment();
                    return "undefined" == typeof e.cloneNode || "undefined" == typeof e.createDocumentFragment || "undefined" == typeof e.createElement
                } ()
            } catch(n) {
                c = !0,
                u = !0
            }
        } ();
        var y = {
            elements: h.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
            version: d,
            shivCSS: h.shivCSS !== !1,
            supportsUnknownElements: u,
            shivMethods: h.shivMethods !== !1,
            type: "default",
            shivDocument: l,
            createElement: o,
            createDocumentFragment: s
        };
        e.html5 = y,
        l(t)
    } (this, t),
    p._version = f,
    p._prefixes = x,
    p._domPrefixes = T,
    p._cssomPrefixes = S,
    p.testProp = function(e) {
        return a([e])
    },
    p.testAllProps = c,
    p.testStyles = A,
    g.className = g.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + _.join(" ") : ""),
    p
} (this, this.document);
var Baymard = Baymard || {}; !
function(e) {
    {
        var t = Baymard.plugins = {};
        Baymard.dom = {},
        Baymard.state = {}
    } !
    function() {
        var e = t.twitter = {
            init: function() {
                "undefined" != typeof twttr ? e.initWidgets() : e.loadScript()
            },
            loadScript: function() { !
                function(e, t, n) {
                    var i, r = e.getElementsByTagName(t)[0];
                    e.getElementById(n) || (i = e.createElement(t), i.id = n, i.src = "", r.parentNode.insertBefore(i, r))
                } (document, "script", "twitter-wjs")
            },
            initWidgets: function() {
                twttr.ready(function(e) {
                    e.widgets.load()
                })
            }
        }
    } (),
    function() {
        var n = "reply-active",
        i = "X-CSRF-Token",
        r = t.comments = {
            init: function() {
                e.ajaxSetup().headers && e.ajaxSetup().headers[i] || r.configureCsrfToken(),
                r.initComments()
            },
            configureCsrfToken: function() {
                e.ajaxSetup({
                    headers: {
                        token_header_key: e('meta[name="csrf-token"]').attr("content")
                    }
                })
            },
            initComments: function() {
                e(function() {
                    $comments = e(".comments"),
                    $comments.find(".comment,#comment-new").each(function() {
                        $comment = e(this),
                        $comment.find(".new-comment:last").html(Baymard.tmp.comments[$comment.attr("id")])
                    }),
                    $comments.on("click.baymardComments", ".reply-link",
                    function(t) {
                        t.preventDefault();
                        var i = e(this).parents(".comment:first").find(".new-comment:last");
                        i.toggleClass(n),
                        i.hasClass(n) && i.find("textarea").focus()
                    }),
                    $comments.addClass("debatable")
                })
            }
        }
    } (),
    function() {
        var n, i = t.scrollTo = {
            y: function(t) {
                e(function() {
                    i.loadScroll(),
                    n.scrollTop(t)
                })
            },
            x: function(t) {
                e(function() {
                    i.loadScroll(),
                    n.scrollLeft(t)
                })
            },
            loadScroll: function() {
                n || (n = e(window))
            }
        }
    } (),
    function() {
        t.keys = function(e) {
            if (Object.keys) return Object.keys(e);
            var t, n = [];
            for (t in e) Object.prototype.hasOwnProperty.call(e, t) && n.push(t);
            return n
        }
    } (),
    function() {
        t.inlineSettings = {
            get: function(e, t) {
                for (var n, i = {},
                r = new RegExp("^data-" + t + "-"), o = 0, s = e[0].attributes, a = s.length; a > o; o++) n = s.item(o),
                n.nodeName.match(r) && (i[n.nodeName.split(r).pop()] = n.nodeValue);
                return i
            },
            set: function(n, i, r) {
                return e.extend(n, t.inlineSettings.get(i, r))
            }
        }
    } (),
    function() {
        t.getEvents = function(e, t) {
            var n = t.split("."),
            i = n[0],
            r = n[1],
            o = [],
            s = jQuery._data(e[0], "events")[i];
            if (r) for (var a = 0; a < s.length; a++) s[a].namespace === r && o.push(s[a]);
            else o = s;
            return o
        }
    } ()
} (jQuery);
/** vim: et:ts=4:sw=4:sts=4
 * @license RequireJS 2.1.14 Copyright (c) 2010-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/requirejs for details
 */
var requirejs, require, define; !
function(global) {
    function isFunction(e) {
        return "[object Function]" === ostring.call(e)
    }
    function isArray(e) {
        return "[object Array]" === ostring.call(e)
    }
    function each(e, t) {
        if (e) {
            var n;
            for (n = 0; n < e.length && (!e[n] || !t(e[n], n, e)); n += 1);
        }
    }
    function eachReverse(e, t) {
        if (e) {
            var n;
            for (n = e.length - 1; n > -1 && (!e[n] || !t(e[n], n, e)); n -= 1);
        }
    }
    function hasProp(e, t) {
        return hasOwn.call(e, t)
    }
    function getOwn(e, t) {
        return hasProp(e, t) && e[t]
    }
    function eachProp(e, t) {
        var n;
        for (n in e) if (hasProp(e, n) && t(e[n], n)) break
    }
    function mixin(e, t, n, i) {
        return t && eachProp(t,
        function(t, r) { (n || !hasProp(e, r)) && (!i || "object" != typeof t || !t || isArray(t) || isFunction(t) || t instanceof RegExp ? e[r] = t: (e[r] || (e[r] = {}), mixin(e[r], t, n, i)))
        }),
        e
    }
    function bind(e, t) {
        return function() {
            return t.apply(e, arguments)
        }
    }
    function scripts() {
        return document.getElementsByTagName("script")
    }
    function defaultOnError(e) {
        throw e
    }
    function getGlobal(e) {
        if (!e) return e;
        var t = global;
        return each(e.split("."),
        function(e) {
            t = t[e]
        }),
        t
    }
    function makeError(e, t, n, i) {
//        var r = new Error(t + "\nhttp://requirejs.org/docs/errors.html#" + e);
//        return r.requireType = e, 
//        r.requireModules = i,
//        n && (r.originalError = n),
//        r
    }
    function newContext(e) {
        function t(e) {
            var t, n;
            for (t = 0; t < e.length; t++) if (n = e[t], "." === n) e.splice(t, 1),
            t -= 1;
            else if (".." === n) {
                if (0 === t || 1 == t && ".." === e[2] || ".." === e[t - 1]) continue;
                t > 0 && (e.splice(t - 1, 2), t -= 2)
            }
        }
        function n(e, n, i) {
            var r, o, s, a, l, c, u, d, h, f, p, m, g = n && n.split("/"),
            v = S.map,
            y = v && v["*"];
            if (e && (e = e.split("/"), u = e.length - 1, S.nodeIdCompat && jsSuffixRegExp.test(e[u]) && (e[u] = e[u].replace(jsSuffixRegExp, "")), "." === e[0].charAt(0) && g && (m = g.slice(0, g.length - 1), e = m.concat(e)), t(e), e = e.join("/")), i && v && (g || y)) {
                s = e.split("/");
                e: for (a = s.length; a > 0; a -= 1) {
                    if (c = s.slice(0, a).join("/"), g) for (l = g.length; l > 0; l -= 1) if (o = getOwn(v, g.slice(0, l).join("/")), o && (o = getOwn(o, c))) {
                        d = o,
                        h = a;
                        break e
                    } ! f && y && getOwn(y, c) && (f = getOwn(y, c), p = a)
                } ! d && f && (d = f, h = p),
                d && (s.splice(0, h, d), e = s.join("/"))
            }
            return r = getOwn(S.pkgs, e),
            r ? r: e
        }
        function i(e) {
            isBrowser && each(scripts(),
            function(t) {
                return t.getAttribute("data-requiremodule") === e && t.getAttribute("data-requirecontext") === w.contextName ? (t.parentNode.removeChild(t), !0) : void 0
            })
        }
        function r(e) {
            var t = getOwn(S.paths, e);
            return t && isArray(t) && t.length > 1 ? (t.shift(), w.require.undef(e), w.makeRequire(null, {
                skipMap: !0
            })([e]), !0) : void 0
        }
        function o(e) {
            var t, n = e ? e.indexOf("!") : -1;
            return n > -1 && (t = e.substring(0, n), e = e.substring(n + 1, e.length)),
            [t, e]
        }
        function s(e, t, i, r) {
            var s, a, l, c, u = null,
            d = t ? t.name: null,
            h = e,
            f = !0,
            p = "";
            return e || (f = !1, e = "_@r" + (D += 1)),
            c = o(e),
            u = c[0],
            e = c[1],
            u && (u = n(u, d, r), a = getOwn(k, u)),
            e && (u ? p = a && a.normalize ? a.normalize(e,
            function(e) {
                return n(e, d, r)
            }) : -1 === e.indexOf("!") ? n(e, d, r) : e: (p = n(e, d, r), c = o(p), u = c[0], p = c[1], i = !0, s = w.nameToUrl(p))),
            l = !u || a || i ? "": "_unnormalized" + (L += 1),
            {
                prefix: u,
                name: p,
                parentMap: t,
                unnormalized: !!l,
                url: s,
                originalName: h,
                isDefine: f,
                id: (u ? u + "!" + p: p) + l
            }
        }
        function a(e) {
            var t = e.id,
            n = getOwn(T, t);
            return n || (n = T[t] = new w.Module(e)),
            n
        }
        function l(e, t, n) {
            var i = e.id,
            r = getOwn(T, i); ! hasProp(k, i) || r && !r.defineEmitComplete ? (r = a(e), r.error && "error" === t ? n(r.error) : r.on(t, n)) : "defined" === t && n(k[i])
        }
        function c(e, t) {
//            var n = e.requireModules,
//            i = !1;
//            t ? t(e) : (each(n,
//            function(t) {
//                var n = getOwn(T, t);
//                n && (n.error = e, n.events.error && (i = !0, n.emit("error", e)))
//            }), i || req.onError(e))
        }
        function u() {
            globalDefQueue.length && (apsp.apply(_, [_.length, 0].concat(globalDefQueue)), globalDefQueue = [])
        }
        function d(e) {
            delete T[e],
            delete E[e]
        }
        function h(e, t, n) {
            var i = e.map.id;
            e.error ? e.emit("error", e.error) : (t[i] = !0, each(e.depMaps,
            function(i, r) {
                var o = i.id,
                s = getOwn(T, o); ! s || e.depMatched[r] || n[o] || (getOwn(t, o) ? (e.defineDep(r, k[o]), e.check()) : h(s, t, n))
            }), n[i] = !0)
        }
        function f() {
            var e, t, n = 1e3 * S.waitSeconds,
            o = n && w.startTime + n < (new Date).getTime(),
            s = [],
            a = [],
            l = !1,
            u = !0;
            if (!y) {
                if (y = !0, eachProp(E,
                function(e) {
                    var n = e.map,
                    c = n.id;
                    if (e.enabled && (n.isDefine || a.push(e), !e.error)) if (!e.inited && o) r(c) ? (t = !0, l = !0) : (s.push(c), i(c));
                    else if (!e.inited && e.fetched && n.isDefine && (l = !0, !n.prefix)) return u = !1
                }), o && s.length) return e = makeError("timeout", "Load timeout for modules: " + s, null, s),
                e.contextName = w.contextName,
                c(e);
                u && each(a,
                function(e) {
                    h(e, {},
                    {})
                }),
                o && !t || !l || !isBrowser && !isWebWorker || C || (C = setTimeout(function() {
                    C = 0,
                    f()
                },
                50)),
                y = !1
            }
        }
        function p(e) {
            hasProp(k, e[0]) || a(s(e[0], null, !0)).init(e[1], e[2])
        }
        function m(e, t, n, i) {
            e.detachEvent && !isOpera ? i && e.detachEvent(i, t) : e.removeEventListener(n, t, !1)
        }
        function g(e) {
            var t = e.currentTarget || e.srcElement;
            return m(t, w.onScriptLoad, "load", "onreadystatechange"),
            m(t, w.onScriptError, "error"),
            {
                node: t,
                id: t && t.getAttribute("data-requiremodule")
            }
        }
        function v() {
            var e;
            for (u(); _.length;) {
                if (e = _.shift(), null === e[0]) return c(makeError("mismatch", "Mismatched anonymous define() module: " + e[e.length - 1]));
                p(e)
            }
        }
        var y, b, w, x, C, S = {
            waitSeconds: 7,
            baseUrl: "./",
            paths: {},
            bundles: {},
            pkgs: {},
            shim: {},
            config: {}
        },
        T = {},
        E = {},
        N = {},
        _ = [],
        k = {},
        A = {},
        P = {},
        D = 1,
        L = 1;
        return x = {
            require: function(e) {
                return e.require ? e.require: e.require = w.makeRequire(e.map)
            },
            exports: function(e) {
                return e.usingExports = !0,
                e.map.isDefine ? e.exports ? k[e.map.id] = e.exports: e.exports = k[e.map.id] = {}: void 0
            },
            module: function(e) {
                return e.module ? e.module: e.module = {
                    id: e.map.id,
                    uri: e.map.url,
                    config: function() {
                        return getOwn(S.config, e.map.id) || {}
                    },
                    exports: e.exports || (e.exports = {})
                }
            }
        },
        b = function(e) {
            this.events = getOwn(N, e.id) || {},
            this.map = e,
            this.shim = getOwn(S.shim, e.id),
            this.depExports = [],
            this.depMaps = [],
            this.depMatched = [],
            this.pluginMaps = {},
            this.depCount = 0
        },
        b.prototype = {
            init: function(e, t, n, i) {
                i = i || {},
                this.inited || (this.factory = t, n ? this.on("error", n) : this.events.error && (n = bind(this,
                function(e) {
                    this.emit("error", e)
                })), this.depMaps = e && e.slice(0), this.errback = n, this.inited = !0, this.ignore = i.ignore, i.enabled || this.enabled ? this.enable() : this.check())
            },
            defineDep: function(e, t) {
                this.depMatched[e] || (this.depMatched[e] = !0, this.depCount -= 1, this.depExports[e] = t)
            },
            fetch: function() {
                if (!this.fetched) {
                    this.fetched = !0,
                    w.startTime = (new Date).getTime();
                    var e = this.map;
                    return this.shim ? (w.makeRequire(this.map, {
                        enableBuildCallback: !0
                    })(this.shim.deps || [], bind(this,
                    function() {
                        return e.prefix ? this.callPlugin() : this.load()
                    })), void 0) : e.prefix ? this.callPlugin() : this.load()
                }
            },
            load: function() {
                var e = this.map.url;
                A[e] || (A[e] = !0, w.load(this.map.id, e))
            },
            check: function() {
                if (this.enabled && !this.enabling) {
                    var e, t, n = this.map.id,
                    i = this.depExports,
                    r = this.exports,
                    o = this.factory;
                    if (this.inited) {
                        if (this.error) this.emit("error", this.error);
                        else if (!this.defining) {
                            if (this.defining = !0, this.depCount < 1 && !this.defined) {
                                if (isFunction(o)) {
                                    if (this.events.error && this.map.isDefine || req.onError !== defaultOnError) try {
                                        r = w.execCb(n, o, i, r)
                                    } catch(s) {
                                        e = s
                                    } else r = w.execCb(n, o, i, r);
                                    if (this.map.isDefine && void 0 === r && (t = this.module, t ? r = t.exports: this.usingExports && (r = this.exports)), e) return e.requireMap = this.map,
                                    e.requireModules = this.map.isDefine ? [this.map.id] : null,
                                    e.requireType = this.map.isDefine ? "define": "require",
                                    c(this.error = e)
                                } else r = o;
                                this.exports = r,
                                this.map.isDefine && !this.ignore && (k[n] = r, req.onResourceLoad && req.onResourceLoad(w, this.map, this.depMaps)),
                                d(n),
                                this.defined = !0
                            }
                            this.defining = !1,
                            this.defined && !this.defineEmitted && (this.defineEmitted = !0, this.emit("defined", this.exports), this.defineEmitComplete = !0)
                        }
                    } else this.fetch()
                }
            },
            callPlugin: function() {
                var e = this.map,
                t = e.id,
                i = s(e.prefix);
                this.depMaps.push(i),
                l(i, "defined", bind(this,
                function(i) {
                    var r, o, u, h = getOwn(P, this.map.id),
                    f = this.map.name,
                    p = this.map.parentMap ? this.map.parentMap.name: null,
                    m = w.makeRequire(e.parentMap, {
                        enableBuildCallback: !0
                    });
                    return this.map.unnormalized ? (i.normalize && (f = i.normalize(f,
                    function(e) {
                        return n(e, p, !0)
                    }) || ""), o = s(e.prefix + "!" + f, this.map.parentMap), l(o, "defined", bind(this,
                    function(e) {
                        this.init([],
                        function() {
                            return e
                        },
                        null, {
                            enabled: !0,
                            ignore: !0
                        })
                    })), u = getOwn(T, o.id), u && (this.depMaps.push(o), this.events.error && u.on("error", bind(this,
                    function(e) {
                        this.emit("error", e)
                    })), u.enable()), void 0) : h ? (this.map.url = w.nameToUrl(h), this.load(), void 0) : (r = bind(this,
                    function(e) {
                        this.init([],
                        function() {
                            return e
                        },
                        null, {
                            enabled: !0
                        })
                    }), r.error = bind(this,
                    function(e) {
                        this.inited = !0,
                        this.error = e,
                        e.requireModules = [t],
                        eachProp(T,
                        function(e) {
                            0 === e.map.id.indexOf(t + "_unnormalized") && d(e.map.id)
                        }),
                        c(e)
                    }), r.fromText = bind(this,
                    function(n, i) {
                        var o = e.name,
                        l = s(o),
                        u = useInteractive;
                        i && (n = i),
                        u && (useInteractive = !1),
                        a(l),
                        hasProp(S.config, t) && (S.config[o] = S.config[t]);
                        try {
                            req.exec(n)
                        } catch(d) {
                            return c(makeError("fromtexteval", "fromText eval for " + t + " failed: " + d, d, [t]))
                        }
                        u && (useInteractive = !0),
                        this.depMaps.push(l),
                        w.completeLoad(o),
                        m([o], r)
                    }), i.load(e.name, m, r, S), void 0)
                })),
                w.enable(i, this),
                this.pluginMaps[i.id] = i
            },
            enable: function() {
                E[this.map.id] = this,
                this.enabled = !0,
                this.enabling = !0,
                each(this.depMaps, bind(this,
                function(e, t) {
                    var n, i, r;
                    if ("string" == typeof e) {
                        if (e = s(e, this.map.isDefine ? this.map: this.map.parentMap, !1, !this.skipMap), this.depMaps[t] = e, r = getOwn(x, e.id)) return this.depExports[t] = r(this),
                        void 0;
                        this.depCount += 1,
                        l(e, "defined", bind(this,
                        function(e) {
                            this.defineDep(t, e),
                            this.check()
                        })),
                        this.errback && l(e, "error", bind(this, this.errback))
                    }
                    n = e.id,
                    i = T[n],
                    hasProp(x, n) || !i || i.enabled || w.enable(e, this)
                })),
                eachProp(this.pluginMaps, bind(this,
                function(e) {
                    var t = getOwn(T, e.id);
                    t && !t.enabled && w.enable(e, this)
                })),
                this.enabling = !1,
                this.check()
            },
            on: function(e, t) {
                var n = this.events[e];
                n || (n = this.events[e] = []),
                n.push(t)
            },
            emit: function(e, t) {
                each(this.events[e],
                function(e) {
                    e(t)
                }),
                "error" === e && delete this.events[e]
            }
        },
        w = {
            config: S,
            contextName: e,
            registry: T,
            defined: k,
            urlFetched: A,
            defQueue: _,
            Module: b,
            makeModuleMap: s,
            nextTick: req.nextTick,
            onError: c,
            configure: function(e) {
                e.baseUrl && "/" !== e.baseUrl.charAt(e.baseUrl.length - 1) && (e.baseUrl += "/");
                var t = S.shim,
                n = {
                    paths: !0,
                    bundles: !0,
                    config: !0,
                    map: !0
                };
                eachProp(e,
                function(e, t) {
                    n[t] ? (S[t] || (S[t] = {}), mixin(S[t], e, !0, !0)) : S[t] = e
                }),
                e.bundles && eachProp(e.bundles,
                function(e, t) {
                    each(e,
                    function(e) {
                        e !== t && (P[e] = t)
                    })
                }),
                e.shim && (eachProp(e.shim,
                function(e, n) {
                    isArray(e) && (e = {
                        deps: e
                    }),
                    !e.exports && !e.init || e.exportsFn || (e.exportsFn = w.makeShimExports(e)),
                    t[n] = e
                }), S.shim = t),
                e.packages && each(e.packages,
                function(e) {
                    var t, n;
                    e = "string" == typeof e ? {
                        name: e
                    }: e,
                    n = e.name,
                    t = e.location,
                    t && (S.paths[n] = e.location),
                    S.pkgs[n] = e.name + "/" + (e.main || "main").replace(currDirRegExp, "").replace(jsSuffixRegExp, "")
                }),
                eachProp(T,
                function(e, t) {
                    e.inited || e.map.unnormalized || (e.map = s(t))
                }),
                (e.deps || e.callback) && w.require(e.deps || [], e.callback)
            },
            makeShimExports: function(e) {
                function t() {
                    var t;
                    return e.init && (t = e.init.apply(global, arguments)),
                    t || e.exports && getGlobal(e.exports)
                }
                return t
            },
            makeRequire: function(t, r) {
                function o(n, i, l) {
                    var u, d, h;
                    return r.enableBuildCallback && i && isFunction(i) && (i.__requireJsBuild = !0),
                    "string" == typeof n ? isFunction(i) ? c(makeError("requireargs", "Invalid require call"), l) : t && hasProp(x, n) ? x[n](T[t.id]) : req.get ? req.get(w, n, t, o) : (d = s(n, t, !1, !0), u = d.id, hasProp(k, u) ? k[u] : c(makeError("notloaded", 'Module name "' + u + '" has not been loaded yet for context: ' + e + (t ? "": ". Use require([])")))) : (v(), w.nextTick(function() {
                        v(),
                        h = a(s(null, t)),
                        h.skipMap = r.skipMap,
                        h.init(n, i, l, {
                            enabled: !0
                        }),
                        f()
                    }), o)
                }
                return r = r || {},
                mixin(o, {
                    isBrowser: isBrowser,
                    toUrl: function(e) {
                        var i, r = e.lastIndexOf("."),
                        o = e.split("/")[0],
                        s = "." === o || ".." === o;
                        return - 1 !== r && (!s || r > 1) && (i = e.substring(r, e.length), e = e.substring(0, r)),
                        w.nameToUrl(n(e, t && t.id, !0), i, !0)
                    },
                    defined: function(e) {
                        return hasProp(k, s(e, t, !1, !0).id)
                    },
                    specified: function(e) {
                        return e = s(e, t, !1, !0).id,
                        hasProp(k, e) || hasProp(T, e)
                    }
                }),
                t || (o.undef = function(e) {
                    u();
                    var n = s(e, t, !0),
                    r = getOwn(T, e);
                    i(e),
                    delete k[e],
                    delete A[n.url],
                    delete N[e],
                    eachReverse(_,
                    function(t, n) {
                        t[0] === e && _.splice(n, 1)
                    }),
                    r && (r.events.defined && (N[e] = r.events), d(e))
                }),
                o
            },
            enable: function(e) {
                var t = getOwn(T, e.id);
                t && a(e).enable()
            },
            completeLoad: function(e) {
                var t, n, i, o = getOwn(S.shim, e) || {},
                s = o.exports;
                for (u(); _.length;) {
                    if (n = _.shift(), null === n[0]) {
                        if (n[0] = e, t) break;
                        t = !0
                    } else n[0] === e && (t = !0);
                    p(n)
                }
                if (i = getOwn(T, e), !t && !hasProp(k, e) && i && !i.inited) {
                    if (! (!S.enforceDefine || s && getGlobal(s))) return r(e) ? void 0 : c(makeError("nodefine", "No define call for " + e, null, [e]));
                    p([e, o.deps || [], o.exportsFn])
                }
                f()
            },
            nameToUrl: function(e, t, n) {
                var i, r, o, s, a, l, c, u = getOwn(S.pkgs, e);
                if (u && (e = u), c = getOwn(P, e)) return w.nameToUrl(c, t, n);
                if (req.jsExtRegExp.test(e)) a = e + (t || "");
                else {
                    for (i = S.paths, r = e.split("/"), o = r.length; o > 0; o -= 1) if (s = r.slice(0, o).join("/"), l = getOwn(i, s)) {
                        isArray(l) && (l = l[0]),
                        r.splice(0, o, l);
                        break
                    }
                    a = r.join("/"),
                    a += t || (/^data\:|\?/.test(a) || n ? "": ".js"),
                    a = ("/" === a.charAt(0) || a.match(/^[\w\+\.\-]+:/) ? "": S.baseUrl) + a
                }
                return S.urlArgs ? a + (( - 1 === a.indexOf("?") ? "?": "&") + S.urlArgs) : a
            },
            load: function(e, t) {
                req.load(w, e, t)
            },
            execCb: function(e, t, n, i) {
                return t.apply(i, n)
            },
            onScriptLoad: function(e) {
                if ("load" === e.type || readyRegExp.test((e.currentTarget || e.srcElement).readyState)) {
                    interactiveScript = null;
                    var t = g(e);
                    w.completeLoad(t.id)
                }
            },
            onScriptError: function(e) {
                var t = g(e);
                return r(t.id) ? void 0 : c(makeError("scripterror", "Script error for: " + t.id, e, [t.id]))
            }
        },
        w.require = w.makeRequire(),
        w
    }
    function getInteractiveScript() {
        return interactiveScript && "interactive" === interactiveScript.readyState ? interactiveScript: (eachReverse(scripts(),
        function(e) {
            return "interactive" === e.readyState ? interactiveScript = e: void 0
        }), interactiveScript)
    }
    var req, s, head, baseElement, dataMain, src, interactiveScript, currentlyAddingScript, mainScript, subPath, version = "2.1.14",
    commentRegExp = /(\/\*([\s\S]*?)\*\/|([^:]|^)\/\/(.*)$)/gm,
    cjsRequireRegExp = /[^.]\s*require\s*\(\s*["']([^'"\s]+)["']\s*\)/g,
    jsSuffixRegExp = /\.js$/,
    currDirRegExp = /^\.\//,
    op = Object.prototype,
    ostring = op.toString,
    hasOwn = op.hasOwnProperty,
    ap = Array.prototype,
    apsp = ap.splice,
    isBrowser = !("undefined" == typeof window || "undefined" == typeof navigator || !window.document),
    isWebWorker = !isBrowser && "undefined" != typeof importScripts,
    readyRegExp = isBrowser && "PLAYSTATION 3" === navigator.platform ? /^complete$/: /^(complete|loaded)$/,
    defContextName = "_",
    isOpera = "undefined" != typeof opera && "[object Opera]" === opera.toString(),
    contexts = {},
    cfg = {},
    globalDefQueue = [],
    useInteractive = !1;
    if ("undefined" == typeof define) {
        if ("undefined" != typeof requirejs) {
            if (isFunction(requirejs)) return;
            cfg = requirejs,
            requirejs = void 0
        }
        "undefined" == typeof require || isFunction(require) || (cfg = require, require = void 0),
        req = requirejs = function(e, t, n, i) {
            var r, o, s = defContextName;
            return isArray(e) || "string" == typeof e || (o = e, isArray(t) ? (e = t, t = n, n = i) : e = []),
            o && o.context && (s = o.context),
            r = getOwn(contexts, s),
            r || (r = contexts[s] = req.s.newContext(s)),
            o && r.configure(o),
            r.require(e, t, n)
        },
        req.config = function(e) {
            return req(e)
        },
        req.nextTick = "undefined" != typeof setTimeout ?
        function(e) {
            setTimeout(e, 4)
        }: function(e) {
            e()
        },
        require || (require = req),
        req.version = version,
        req.jsExtRegExp = /^\/|:|\?|\.js$/,
        req.isBrowser = isBrowser,
        s = req.s = {
            contexts: contexts,
            newContext: newContext
        },
        req({}),
        each(["toUrl", "undef", "defined", "specified"],
        function(e) {
            req[e] = function() {
                var t = contexts[defContextName];
                return t.require[e].apply(t, arguments)
            }
        }),
        isBrowser && (head = s.head = document.getElementsByTagName("head")[0], baseElement = document.getElementsByTagName("base")[0], baseElement && (head = s.head = baseElement.parentNode)),
        req.onError = defaultOnError,
        req.createNode = function(e) {
            var t = e.xhtml ? document.createElementNS("http://www.w3.org/1999/xhtml", "html:script") : document.createElement("script");
            return t.type = e.scriptType || "text/javascript",
            t.charset = "utf-8",
            t.async = !0,
            t
        },
        req.load = function(e, t, n) {
            var i, r = e && e.config || {};
            if (isBrowser) return i = req.createNode(r, t, n),
            i.setAttribute("data-requirecontext", e.contextName),
            i.setAttribute("data-requiremodule", t),
            !i.attachEvent || i.attachEvent.toString && i.attachEvent.toString().indexOf("[native code") < 0 || isOpera ? (i.addEventListener("load", e.onScriptLoad, !1), i.addEventListener("error", e.onScriptError, !1)) : (useInteractive = !0, i.attachEvent("onreadystatechange", e.onScriptLoad)),
            i.src = n,
            currentlyAddingScript = i,
            baseElement ? head.insertBefore(i, baseElement) : head.appendChild(i),
            currentlyAddingScript = null,
            i;
            if (isWebWorker) try {
                importScripts(n),
                e.completeLoad(t)
            } catch(o) {
                e.onError(makeError("importscripts", "importScripts failed for " + t + " at " + n, o, [t]))
            }
        },
        isBrowser && !cfg.skipDataMain && eachReverse(scripts(),
        function(e) {
            return head || (head = e.parentNode),
            dataMain = e.getAttribute("data-main"),
            dataMain ? (mainScript = dataMain, cfg.baseUrl || (src = mainScript.split("/"), mainScript = src.pop(), subPath = src.length ? src.join("/") + "/": "./", cfg.baseUrl = subPath), mainScript = mainScript.replace(jsSuffixRegExp, ""), req.jsExtRegExp.test(mainScript) && (mainScript = dataMain), cfg.deps = cfg.deps ? cfg.deps.concat(mainScript) : [mainScript], !0) : void 0
        }),
        define = function(e, t, n) {
            var i, r;
            "string" != typeof e && (n = t, t = e, e = null),
            isArray(t) || (n = t, t = null),
            !t && isFunction(n) && (t = [], n.length && (n.toString().replace(commentRegExp, "").replace(cjsRequireRegExp,
            function(e, n) {
                t.push(n)
            }), t = (1 === n.length ? ["require"] : ["require", "exports", "module"]).concat(t))),
            useInteractive && (i = currentlyAddingScript || getInteractiveScript(), i && (e || (e = i.getAttribute("data-requiremodule")), r = contexts[i.getAttribute("data-requirecontext")])),
            (r ? r.defQueue: globalDefQueue).push([e, t, n])
        },
        define.amd = {
            jQuery: !0
        },
        req.exec = function(text) {
            return eval(text)
        },
        req(cfg)
    }
} (this),
/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.core.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e, t) {
    function n(t, n) {
        var r = t.nodeName.toLowerCase();
        if ("area" === r) {
            var o, s = t.parentNode,
            a = s.name;
            return t.href && a && "map" === s.nodeName.toLowerCase() ? (o = e("img[usemap=#" + a + "]")[0], !!o && i(o)) : !1
        }
        return (/input|select|textarea|button|object/.test(r) ? !t.disabled: "a" == r ? t.href || n: n) && i(t)
    }
    function i(t) {
        return ! e(t).parents().andSelf().filter(function() {
            return "hidden" === e.curCSS(this, "visibility") || e.expr.filters.hidden(this)
        }).length
    }
    e.ui = e.ui || {},
    e.ui.version || (e.extend(e.ui, {
        version: "1.8.23",
        keyCode: {
            ALT: 18,
            BACKSPACE: 8,
            CAPS_LOCK: 20,
            COMMA: 188,
            COMMAND: 91,
            COMMAND_LEFT: 91,
            COMMAND_RIGHT: 93,
            CONTROL: 17,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            INSERT: 45,
            LEFT: 37,
            MENU: 93,
            NUMPAD_ADD: 107,
            NUMPAD_DECIMAL: 110,
            NUMPAD_DIVIDE: 111,
            NUMPAD_ENTER: 108,
            NUMPAD_MULTIPLY: 106,
            NUMPAD_SUBTRACT: 109,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SHIFT: 16,
            SPACE: 32,
            TAB: 9,
            UP: 38,
            WINDOWS: 91
        }
    }), e.fn.extend({
        propAttr: e.fn.prop || e.fn.attr,
        _focus: e.fn.focus,
        focus: function(t, n) {
            return "number" == typeof t ? this.each(function() {
                var i = this;
                setTimeout(function() {
                    e(i).focus(),
                    n && n.call(i)
                },
                t)
            }) : this._focus.apply(this, arguments)
        },
        scrollParent: function() {
            var t;
            return t = e.browser.msie && /(static|relative)/.test(this.css("position")) || /absolute/.test(this.css("position")) ? this.parents().filter(function() {
                return /(relative|absolute|fixed)/.test(e.curCSS(this, "position", 1)) && /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0) : this.parents().filter(function() {
                return /(auto|scroll)/.test(e.curCSS(this, "overflow", 1) + e.curCSS(this, "overflow-y", 1) + e.curCSS(this, "overflow-x", 1))
            }).eq(0),
            /fixed/.test(this.css("position")) || !t.length ? e(document) : t
        },
        zIndex: function(n) {
            if (n !== t) return this.css("zIndex", n);
            if (this.length) for (var i, r, o = e(this[0]); o.length && o[0] !== document;) {
                if (i = o.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (r = parseInt(o.css("zIndex"), 10), !isNaN(r) && 0 !== r)) return r;
                o = o.parent()
            }
            return 0
        },
        disableSelection: function() {
            return this.bind((e.support.selectstart ? "selectstart": "mousedown") + ".ui-disableSelection",
            function(e) {
                e.preventDefault()
            })
        },
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"],
    function(n, i) {
        function r(t, n, i, r) {
            return e.each(o,
            function() {
                n -= parseFloat(e.curCSS(t, "padding" + this, !0)) || 0,
                i && (n -= parseFloat(e.curCSS(t, "border" + this + "Width", !0)) || 0),
                r && (n -= parseFloat(e.curCSS(t, "margin" + this, !0)) || 0)
            }),
            n
        }
        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
        s = i.toLowerCase(),
        a = {
            innerWidth: e.fn.innerWidth,
            innerHeight: e.fn.innerHeight,
            outerWidth: e.fn.outerWidth,
            outerHeight: e.fn.outerHeight
        };
        e.fn["inner" + i] = function(n) {
            return n === t ? a["inner" + i].call(this) : this.each(function() {
                e(this).css(s, r(this, n) + "px")
            })
        },
        e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? a["outer" + i].call(this, t) : this.each(function() {
                e(this).css(s, r(this, t, !0, n) + "px")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(n) {
                return !! e.data(n, t)
            }
        }) : function(t, n, i) {
            return !! e.data(t, i[3])
        },
        focusable: function(t) {
            return n(t, !isNaN(e.attr(t, "tabindex")))
        },
        tabbable: function(t) {
            var i = e.attr(t, "tabindex"),
            r = isNaN(i);
            return (r || i >= 0) && n(t, !r)
        }
    }), e(function() {
        var t = document.body,
        n = t.appendChild(n = document.createElement("div"));
        n.offsetHeight,
        e.extend(n.style, {
            minHeight: "100px",
            height: "auto",
            padding: 0,
            borderWidth: 0
        }),
        e.support.minHeight = 100 === n.offsetHeight,
        e.support.selectstart = "onselectstart" in n,
        t.removeChild(n).style.display = "none"
    }), e.curCSS || (e.curCSS = e.css), e.extend(e.ui, {
        plugin: {
            add: function(t, n, i) {
                var r = e.ui[t].prototype;
                for (var o in i) r.plugins[o] = r.plugins[o] || [],
                r.plugins[o].push([n, i[o]])
            },
            call: function(e, t, n) {
                var i = e.plugins[t];
                if (i && e.element[0].parentNode) for (var r = 0; r < i.length; r++) e.options[i[r][0]] && i[r][1].apply(e.element, n)
            }
        },
        contains: function(e, t) {
            return document.compareDocumentPosition ? 16 & e.compareDocumentPosition(t) : e !== t && e.contains(t)
        },
        hasScroll: function(t, n) {
            if ("hidden" === e(t).css("overflow")) return ! 1;
            var i = n && "left" === n ? "scrollLeft": "scrollTop",
            r = !1;
            return t[i] > 0 ? !0 : (t[i] = 1, r = t[i] > 0, t[i] = 0, r)
        },
        isOverAxis: function(e, t, n) {
            return e > t && t + n > e
        },
        isOver: function(t, n, i, r, o, s) {
            return e.ui.isOverAxis(t, i, o) && e.ui.isOverAxis(n, r, s)
        }
    }))
} (jQuery),
/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.widget.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e, t) {
    if (e.cleanData) {
        var n = e.cleanData;
        e.cleanData = function(t) {
            for (var i, r = 0; null != (i = t[r]); r++) try {
                e(i).triggerHandler("remove")
            } catch(o) {}
            n(t)
        }
    } else {
        var i = e.fn.remove;
        e.fn.remove = function(t, n) {
            return this.each(function() {
                return n || (!t || e.filter(t, [this]).length) && e("*", this).add([this]).each(function() {
                    try {
                        e(this).triggerHandler("remove")
                    } catch(t) {}
                }),
                i.call(e(this), t, n)
            })
        }
    }
    e.widget = function(t, n, i) {
        var r, o = t.split(".")[0];
        t = t.split(".")[1],
        r = o + "-" + t,
        i || (i = n, n = e.Widget),
        e.expr[":"][r] = function(n) {
            return !! e.data(n, t)
        },
        e[o] = e[o] || {},
        e[o][t] = function(e, t) {
            arguments.length && this._createWidget(e, t)
        };
        var s = new n;
        s.options = e.extend(!0, {},
        s.options),
        e[o][t].prototype = e.extend(!0, s, {
            namespace: o,
            widgetName: t,
            widgetEventPrefix: e[o][t].prototype.widgetEventPrefix || t,
            widgetBaseClass: r
        },
        i),
        e.widget.bridge(t, e[o][t])
    },
    e.widget.bridge = function(n, i) {
        e.fn[n] = function(r) {
            var o = "string" == typeof r,
            s = Array.prototype.slice.call(arguments, 1),
            a = this;
            return r = !o && s.length ? e.extend.apply(null, [!0, r].concat(s)) : r,
            o && "_" === r.charAt(0) ? a: (o ? this.each(function() {
                var i = e.data(this, n),
                o = i && e.isFunction(i[r]) ? i[r].apply(i, s) : i;
                return o !== i && o !== t ? (a = o, !1) : void 0
            }) : this.each(function() {
                var t = e.data(this, n);
                t ? t.option(r || {})._init() : e.data(this, n, new i(r, this))
            }), a)
        }
    },
    e.Widget = function(e, t) {
        arguments.length && this._createWidget(e, t)
    },
    e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        options: {
            disabled: !1
        },
        _createWidget: function(t, n) {
            e.data(n, this.widgetName, this),
            this.element = e(n),
            this.options = e.extend(!0, {},
            this.options, this._getCreateOptions(), t);
            var i = this;
            this.element.bind("remove." + this.widgetName,
            function() {
                i.destroy()
            }),
            this._create(),
            this._trigger("create"),
            this._init()
        },
        _getCreateOptions: function() {
            return e.metadata && e.metadata.get(this.element[0])[this.widgetName]
        },
        _create: function() {},
        _init: function() {},
        destroy: function() {
            this.element.unbind("." + this.widgetName).removeData(this.widgetName),
            this.widget().unbind("." + this.widgetName).removeAttr("aria-disabled").removeClass(this.widgetBaseClass + "-disabled ui-state-disabled")
        },
        widget: function() {
            return this.element
        },
        option: function(n, i) {
            var r = n;
            if (0 === arguments.length) return e.extend({},
            this.options);
            if ("string" == typeof n) {
                if (i === t) return this.options[n];
                r = {},
                r[n] = i
            }
            return this._setOptions(r),
            this
        },
        _setOptions: function(t) {
            var n = this;
            return e.each(t,
            function(e, t) {
                n._setOption(e, t)
            }),
            this
        },
        _setOption: function(e, t) {
            return this.options[e] = t,
            "disabled" === e && this.widget()[t ? "addClass": "removeClass"](this.widgetBaseClass + "-disabled ui-state-disabled").attr("aria-disabled", t),
            this
        },
        enable: function() {
            return this._setOption("disabled", !1)
        },
        disable: function() {
            return this._setOption("disabled", !0)
        },
        _trigger: function(t, n, i) {
            var r, o, s = this.options[t];
            if (i = i || {},
            n = e.Event(n), n.type = (t === this.widgetEventPrefix ? t: this.widgetEventPrefix + t).toLowerCase(), n.target = this.element[0], o = n.originalEvent, o) for (r in o) r in n || (n[r] = o[r]);
            return this.element.trigger(n, i),
            !(e.isFunction(s) && s.call(this.element[0], n, i) === !1 || n.isDefaultPrevented())
        }
    }
} (jQuery),
/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.position.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e) {
    e.ui = e.ui || {};
    var t = /left|center|right/,
    n = /top|center|bottom/,
    i = "center",
    r = {},
    o = e.fn.position,
    s = e.fn.offset;
    e.fn.position = function(s) {
        if (!s || !s.of) return o.apply(this, arguments);
        s = e.extend({},
        s);
        var a, l, c, u = e(s.of),
        d = u[0],
        h = (s.collision || "flip").split(" "),
        f = s.offset ? s.offset.split(" ") : [0, 0];
        return 9 === d.nodeType ? (a = u.width(), l = u.height(), c = {
            top: 0,
            left: 0
        }) : d.setTimeout ? (a = u.width(), l = u.height(), c = {
            top: u.scrollTop(),
            left: u.scrollLeft()
        }) : d.preventDefault ? (s.at = "left top", a = l = 0, c = {
            top: s.of.pageY,
            left: s.of.pageX
        }) : (a = u.outerWidth(), l = u.outerHeight(), c = u.offset()),
        e.each(["my", "at"],
        function() {
            var e = (s[this] || "").split(" ");
            1 === e.length && (e = t.test(e[0]) ? e.concat([i]) : n.test(e[0]) ? [i].concat(e) : [i, i]),
            e[0] = t.test(e[0]) ? e[0] : i,
            e[1] = n.test(e[1]) ? e[1] : i,
            s[this] = e
        }),
        1 === h.length && (h[1] = h[0]),
        f[0] = parseInt(f[0], 10) || 0,
        1 === f.length && (f[1] = f[0]),
        f[1] = parseInt(f[1], 10) || 0,
        "right" === s.at[0] ? c.left += a: s.at[0] === i && (c.left += a / 2),
        "bottom" === s.at[1] ? c.top += l: s.at[1] === i && (c.top += l / 2),
        c.left += f[0],
        c.top += f[1],
        this.each(function() {
            var t, n = e(this),
            o = n.outerWidth(),
            u = n.outerHeight(),
            d = parseInt(e.curCSS(this, "marginLeft", !0)) || 0,
            p = parseInt(e.curCSS(this, "marginTop", !0)) || 0,
            m = o + d + (parseInt(e.curCSS(this, "marginRight", !0)) || 0),
            g = u + p + (parseInt(e.curCSS(this, "marginBottom", !0)) || 0),
            v = e.extend({},
            c);
            "right" === s.my[0] ? v.left -= o: s.my[0] === i && (v.left -= o / 2),
            "bottom" === s.my[1] ? v.top -= u: s.my[1] === i && (v.top -= u / 2),
            r.fractions || (v.left = Math.round(v.left), v.top = Math.round(v.top)),
            t = {
                left: v.left - d,
                top: v.top - p
            },
            e.each(["left", "top"],
            function(n, i) {
                e.ui.position[h[n]] && e.ui.position[h[n]][i](v, {
                    targetWidth: a,
                    targetHeight: l,
                    elemWidth: o,
                    elemHeight: u,
                    collisionPosition: t,
                    collisionWidth: m,
                    collisionHeight: g,
                    offset: f,
                    my: s.my,
                    at: s.at
                })
            }),
            e.fn.bgiframe && n.bgiframe(),
            n.offset(e.extend(v, {
                using: s.using
            }))
        })
    },
    e.ui.position = {
        fit: {
            left: function(t, n) {
                var i = e(window),
                r = n.collisionPosition.left + n.collisionWidth - i.width() - i.scrollLeft();
                t.left = r > 0 ? t.left - r: Math.max(t.left - n.collisionPosition.left, t.left)
            },
            top: function(t, n) {
                var i = e(window),
                r = n.collisionPosition.top + n.collisionHeight - i.height() - i.scrollTop();
                t.top = r > 0 ? t.top - r: Math.max(t.top - n.collisionPosition.top, t.top)
            }
        },
        flip: {
            left: function(t, n) {
                if (n.at[0] !== i) {
                    var r = e(window),
                    o = n.collisionPosition.left + n.collisionWidth - r.width() - r.scrollLeft(),
                    s = "left" === n.my[0] ? -n.elemWidth: "right" === n.my[0] ? n.elemWidth: 0,
                    a = "left" === n.at[0] ? n.targetWidth: -n.targetWidth,
                    l = -2 * n.offset[0];
                    t.left += n.collisionPosition.left < 0 ? s + a + l: o > 0 ? s + a + l: 0
                }
            },
            top: function(t, n) {
                if (n.at[1] !== i) {
                    var r = e(window),
                    o = n.collisionPosition.top + n.collisionHeight - r.height() - r.scrollTop(),
                    s = "top" === n.my[1] ? -n.elemHeight: "bottom" === n.my[1] ? n.elemHeight: 0,
                    a = "top" === n.at[1] ? n.targetHeight: -n.targetHeight,
                    l = -2 * n.offset[1];
                    t.top += n.collisionPosition.top < 0 ? s + a + l: o > 0 ? s + a + l: 0
                }
            }
        }
    },
    e.offset.setOffset || (e.offset.setOffset = function(t, n) { / static / .test(e.curCSS(t, "position")) && (t.style.position = "relative");
        var i = e(t),
        r = i.offset(),
        o = parseInt(e.curCSS(t, "top", !0), 10) || 0,
        s = parseInt(e.curCSS(t, "left", !0), 10) || 0,
        a = {
            top: n.top - r.top + o,
            left: n.left - r.left + s
        };
        "using" in n ? n.using.call(t, a) : i.css(a)
    },
    e.fn.offset = function(t) {
        var n = this[0];
        return n && n.ownerDocument ? t ? e.isFunction(t) ? this.each(function(n) {
            e(this).offset(t.call(this, n, e(this).offset()))
        }) : this.each(function() {
            e.offset.setOffset(this, t)
        }) : s.call(this) : null
    }),
    e.curCSS || (e.curCSS = e.css),
    function() {
        var t, n, i, o, s, a = document.getElementsByTagName("body")[0],
        l = document.createElement("div");
        t = document.createElement(a ? "div": "body"),
        i = {
            visibility: "hidden",
            width: 0,
            height: 0,
            border: 0,
            margin: 0,
            background: "none"
        },
        a && e.extend(i, {
            position: "absolute",
            left: "-1000px",
            top: "-1000px"
        });
        for (var c in i) t.style[c] = i[c];
        t.appendChild(l),
        n = a || document.documentElement,
        n.insertBefore(t, n.firstChild),
        l.style.cssText = "position: absolute; left: 10.7432222px; top: 10.432325px; height: 30px; width: 201px;",
        o = e(l).offset(function(e, t) {
            return t
        }).offset(),
        t.innerHTML = "",
        n.removeChild(t),
        s = o.top + o.left + (a ? 2e3: 0),
        r.fractions = s > 21 && 22 > s
    } ()
} (jQuery),
/*! jQuery UI - v1.8.23 - 2012-08-15
* https://github.com/jquery/jquery-ui
* Includes: jquery.ui.autocomplete.js
* Copyright (c) 2012 AUTHORS.txt; Licensed MIT, GPL */
function(e) {
    var t = 0;
    e.widget("ui.autocomplete", {
        options: {
            appendTo: "body",
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {
                my: "left top",
                at: "left bottom",
                collision: "none"
            },
            source: null
        },
        pending: 0,
        _create: function() {
            var t, n = this,
            i = this.element[0].ownerDocument;
            this.isMultiLine = this.element.is("textarea"),
            this.element.addClass("ui-autocomplete-input").attr("autocomplete", "off").attr({
                role: "textbox",
                "aria-autocomplete": "list",
                "aria-haspopup": "true"
            }).bind("keydown.autocomplete",
            function(i) {
                if (!n.options.disabled && !n.element.propAttr("readOnly")) {
                    t = !1;
                    var r = e.ui.keyCode;
                    switch (i.keyCode) {
                    case r.PAGE_UP:
                        n._move("previousPage", i);
                        break;
                    case r.PAGE_DOWN:
                        n._move("nextPage", i);
                        break;
                    case r.UP:
                        n._keyEvent("previous", i);
                        break;
                    case r.DOWN:
                        n._keyEvent("next", i);
                        break;
                    case r.ENTER:
                    case r.NUMPAD_ENTER:
                        n.menu.active && (t = !0, i.preventDefault());
                    case r.TAB:
                        if (!n.menu.active) return;
                        n.menu.select(i);
                        break;
                    case r.ESCAPE:
                        n.element.val(n.term),
                        n.close(i);
                        break;
                    default:
                        clearTimeout(n.searching),
                        n.searching = setTimeout(function() {
                            n.term != n.element.val() && (n.selectedItem = null, n.search(null, i))
                        },
                        n.options.delay)
                    }
                }
            }).bind("keypress.autocomplete",
            function(e) {
                t && (t = !1, e.preventDefault())
            }).bind("focus.autocomplete",
            function() {
                n.options.disabled || (n.selectedItem = null, n.previous = n.element.val())
            }).bind("blur.autocomplete",
            function(e) {
                n.options.disabled || (clearTimeout(n.searching), n.closing = setTimeout(function() {
                    n.close(e),
                    n._change(e)
                },
                150))
            }),
            this._initSource(),
            this.menu = e("<ul></ul>").addClass("ui-autocomplete").appendTo(e(this.options.appendTo || "body", i)[0]).mousedown(function(t) {
                var i = n.menu.element[0];
                e(t.target).closest(".ui-menu-item").length || setTimeout(function() {
                    e(document).one("mousedown",
                    function(t) {
                        t.target !== n.element[0] && t.target !== i && !e.ui.contains(i, t.target) && n.close()
                    })
                },
                1),
                setTimeout(function() {
                    clearTimeout(n.closing)
                },
                13)
            }).menu({
                focus: function(e, t) {
                    var i = t.item.data("item.autocomplete"); ! 1 !== n._trigger("focus", e, {
                        item: i
                    }) && /^key/.test(e.originalEvent.type) && n.element.val(i.value)
                },
                selected: function(e, t) {
                    var r = t.item.data("item.autocomplete"),
                    o = n.previous;
                    n.element[0] !== i.activeElement && (n.element.focus(), n.previous = o, setTimeout(function() {
                        n.previous = o,
                        n.selectedItem = r
                    },
                    1)),
                    !1 !== n._trigger("select", e, {
                        item: r
                    }) && n.element.val(r.value),
                    n.term = n.element.val(),
                    n.close(e),
                    n.selectedItem = r
                },
                blur: function() {
                    n.menu.element.is(":visible") && n.element.val() !== n.term && n.element.val(n.term)
                }
            }).zIndex(this.element.zIndex() + 1).css({
                top: 0,
                left: 0
            }).hide().data("menu"),
            e.fn.bgiframe && this.menu.element.bgiframe(),
            n.beforeunloadHandler = function() {
                n.element.removeAttr("autocomplete")
            },
            e(window).bind("beforeunload", n.beforeunloadHandler)
        },
        destroy: function() {
            this.element.removeClass("ui-autocomplete-input").removeAttr("autocomplete").removeAttr("role").removeAttr("aria-autocomplete").removeAttr("aria-haspopup"),
            this.menu.element.remove(),
            e(window).unbind("beforeunload", this.beforeunloadHandler),
            e.Widget.prototype.destroy.call(this)
        },
        _setOption: function(t, n) {
            e.Widget.prototype._setOption.apply(this, arguments),
            "source" === t && this._initSource(),
            "appendTo" === t && this.menu.element.appendTo(e(n || "body", this.element[0].ownerDocument)[0]),
            "disabled" === t && n && this.xhr && this.xhr.abort()
        },
        _initSource: function() {
            var t, n, i = this;
            e.isArray(this.options.source) ? (t = this.options.source, this.source = function(n, i) {
                i(e.ui.autocomplete.filter(t, n.term))
            }) : "string" == typeof this.options.source ? (n = this.options.source, this.source = function(t, r) {
                i.xhr && i.xhr.abort(),
                i.xhr = e.ajax({
                    url: n,
                    data: t,
                    dataType: "json",
                    success: function(e) {
                        r(e)
                    },
                    error: function() {
                        r([])
                    }
                })
            }) : this.source = this.options.source
        },
        search: function(e, t) {
            return e = null != e ? e: this.element.val(),
            this.term = this.element.val(),
            e.length < this.options.minLength ? this.close(t) : (clearTimeout(this.closing), this._trigger("search", t) !== !1 ? this._search(e) : void 0)
        },
        _search: function(e) {
            this.pending++,
            this.element.addClass("ui-autocomplete-loading"),
            this.source({
                term: e
            },
            this._response())
        },
        _response: function() {
            var e = this,
            n = ++t;
            return function(i) {
                n === t && e.__response(i),
                e.pending--,
                e.pending || e.element.removeClass("ui-autocomplete-loading")
            }
        },
        __response: function(e) { ! this.options.disabled && e && e.length ? (e = this._normalize(e), this._suggest(e), this._trigger("open")) : this.close()
        },
        close: function(e) {
            clearTimeout(this.closing),
            this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.deactivate(), this._trigger("close", e))
        },
        _change: function(e) {
            this.previous !== this.element.val() && this._trigger("change", e, {
                item: this.selectedItem
            })
        },
        _normalize: function(t) {
            return t.length && t[0].label && t[0].value ? t: e.map(t,
            function(t) {
                return "string" == typeof t ? {
                    label: t,
                    value: t
                }: e.extend({
                    label: t.label || t.value,
                    value: t.value || t.label
                },
                t)
            })
        },
        _suggest: function(t) {
            var n = this.menu.element.empty().zIndex(this.element.zIndex() + 1);
            this._renderMenu(n, t),
            this.menu.deactivate(),
            this.menu.refresh(),
            n.show(),
            this._resizeMenu(),
            n.position(e.extend({
                of: this.element
            },
            this.options.position)),
            this.options.autoFocus && this.menu.next(new e.Event("mouseover"))
        },
        _resizeMenu: function() {
            var e = this.menu.element;
            e.outerWidth(Math.max(e.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function(t, n) {
            var i = this;
            e.each(n,
            function(e, n) {
                i._renderItem(t, n)
            })
        },
        _renderItem: function(t, n) {
            return e("<li></li>").data("item.autocomplete", n).append(e("<a></a>").text(n.label)).appendTo(t)
        },
        _move: function(e, t) {
            return this.menu.element.is(":visible") ? this.menu.first() && /^previous/.test(e) || this.menu.last() && /^next/.test(e) ? (this.element.val(this.term), this.menu.deactivate(), void 0) : (this.menu[e](t), void 0) : (this.search(null, t), void 0)
        },
        widget: function() {
            return this.menu.element
        },
        _keyEvent: function(e, t) { (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(e, t), t.preventDefault())
        }
    }),
    e.extend(e.ui.autocomplete, {
        escapeRegex: function(e) {
            return e.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&")
        },
        filter: function(t, n) {
            var i = new RegExp(e.ui.autocomplete.escapeRegex(n), "i");
            return e.grep(t,
            function(e) {
                return i.test(e.label || e.value || e)
            })
        }
    })
} (jQuery),
function(e) {
    e.widget("ui.menu", {
        _create: function() {
            var t = this;
            this.element.addClass("ui-menu ui-widget ui-widget-content ui-corner-all").attr({
                role: "listbox",
                "aria-activedescendant": "ui-active-menuitem"
            }).click(function(n) {
                e(n.target).closest(".ui-menu-item a").length && (n.preventDefault(), t.select(n))
            }),
            this.refresh()
        },
        refresh: function() {
            var t = this,
            n = this.element.children("li:not(.ui-menu-item):has(a)").addClass("ui-menu-item").attr("role", "menuitem");
            n.children("a").addClass("ui-corner-all").attr("tabindex", -1).mouseenter(function(n) {
                t.activate(n, e(this).parent())
            }).mouseleave(function() {
                t.deactivate()
            })
        },
        activate: function(e, t) {
            if (this.deactivate(), this.hasScroll()) {
                var n = t.offset().top - this.element.offset().top,
                i = this.element.scrollTop(),
                r = this.element.height();
                0 > n ? this.element.scrollTop(i + n) : n >= r && this.element.scrollTop(i + n - r + t.height())
            }
            this.active = t.eq(0).children("a").addClass("ui-state-hover").attr("id", "ui-active-menuitem").end(),
            this._trigger("focus", e, {
                item: t
            })
        },
        deactivate: function() {
            this.active && (this.active.children("a").removeClass("ui-state-hover").removeAttr("id"), this._trigger("blur"), this.active = null)
        },
        next: function(e) {
            this.move("next", ".ui-menu-item:first", e)
        },
        previous: function(e) {
            this.move("prev", ".ui-menu-item:last", e)
        },
        first: function() {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        last: function() {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        move: function(e, t, n) {
            if (!this.active) return this.activate(n, this.element.children(t)),
            void 0;
            var i = this.active[e + "All"](".ui-menu-item").eq(0);
            i.length ? this.activate(n, i) : this.activate(n, this.element.children(t))
        },
        nextPage: function(t) {
            if (this.hasScroll()) {
                if (!this.active || this.last()) return this.activate(t, this.element.children(".ui-menu-item:first")),
                void 0;
                var n = this.active.offset().top,
                i = this.element.height(),
                r = this.element.children(".ui-menu-item").filter(function() {
                    var t = e(this).offset().top - n - i + e(this).height();
                    return 10 > t && t > -10
                });
                r.length || (r = this.element.children(".ui-menu-item:last")),
                this.activate(t, r)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.last() ? ":first": ":last"))
        },
        previousPage: function(t) {
            if (this.hasScroll()) {
                if (!this.active || this.first()) return this.activate(t, this.element.children(".ui-menu-item:last")),
                void 0;
                var n = this.active.offset().top,
                i = this.element.height(),
                r = this.element.children(".ui-menu-item").filter(function() {
                    var t = e(this).offset().top - n + i - e(this).height();
                    return 10 > t && t > -10
                });
                r.length || (r = this.element.children(".ui-menu-item:first")),
                this.activate(t, r)
            } else this.activate(t, this.element.children(".ui-menu-item").filter(!this.active || this.first() ? ":last": ":first"))
        },
        hasScroll: function() {
            return this.element.height() < this.element[e.fn.prop ? "prop": "attr"]("scrollHeight")
        },
        select: function(e) {
            this._trigger("selected", e, {
                item: this.active
            })
        }
    })
} (jQuery),
/*
Version: 1.0.3

Documentation: http://baymard.com/labs/country-selector#documentation

Copyright (C) 2011 by Jamie Appleseed, Baymard Institute (baymard.com)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/
function(e) {
    var t = {
        sort: !1,
        "sort-attr": "data-priority",
        "sort-desc": !1,
        "alternative-spellings": !0,
        "alternative-spellings-attr": "data-alternative-spellings",
        "remove-valueless-options": !0,
        "copy-attributes-to-text-field": !0,
        "autocomplete-plugin": "jquery_ui",
        "relevancy-sorting": !0,
        "relevancy-sorting-partial-match-value": 1,
        "relevancy-sorting-strict-match-value": 5,
        "relevancy-sorting-booster-attr": "data-relevancy-booster",
        handle_invalid_input: function(e) {
            e.$text_field.val("")
        },
        handle_select_field: function(e) {
            return e.hide()
        },
        insert_text_field: function(n) {
            var i = e("<input></input>");
            if (t["copy-attributes-to-text-field"]) {
                for (var r = {},
                o = n[0].attributes, s = 0; s < o.length; s++) {
                    {
                        var a = o[s].nodeName;
                        o[s].nodeValue
                    }
                    "name" !== a && "id" !== a && (r[a] = o[s].nodeValue)
                }
                return i.attr(r).val(n.find("option:selected:first").text()).insertAfter(n)
            }
        },
        extract_options: function(n) {
            var i = [],
            r = n.find("option"),
            o = r.length,
            s = o;
            return r.each(function() {
                var n = e(this),
                r = {
                    "real-value": n.attr("value"),
                    label: n.text()
                };
                if (t["remove-valueless-options"] && "" === r["real-value"]) o--;
                else {
                    r.matches = r.label;
                    var a = n.attr(t["alternative-spellings-attr"]);
                    if (a && (r.matches += " " + a), t.sort) {
                        var l = parseInt(n.attr(t["sort-attr"]), 10);
                        r.weight = l ? l: s
                    }
                    if (t["relevancy-sorting"]) {
                        r["relevancy-score"] = 0,
                        r["relevancy-score-booster"] = 1;
                        var c = parseFloat(n.attr(t["relevancy-sorting-booster-attr"]), 10);
                        c && (r["relevancy-score-booster"] = c)
                    }
                    i.push(r)
                }
            }),
            t.sort && (t["sort-desc"] ? i.sort(function(e, t) {
                return t.weight - e.weight
            }) : i.sort(function(e, t) {
                return e.weight - t.weight
            })),
            i
        }
    },
    n = {
        init: function(n) {
            return t = e.extend(t, n),
            this.each(function() {
                var n = e(this),
                r = t.extract_options(n),
                o = t.insert_text_field(n);
                t.handle_select_field(n);
                var s = {
                    $select_field: n,
                    $text_field: o,
                    options: r,
                    settings: t
                };
                "string" == typeof t["autocomplete-plugin"] ? i[t["autocomplete-plugin"]](s) : t["autocomplete-plugin"](s)
            })
        }
    },
    i = {
        jquery_ui: function(t) {
            var n = function(n) {
                for (var i = n.split(" "), r = [], o = 0; o < i.length; o++) if (i[o].length > 0) {
                    var s = {};
                    s.partial = new RegExp(e.ui.autocomplete.escapeRegex(i[o]), "i"),
                    t.settings["relevancy-sorting"] && (s.strict = new RegExp("^" + e.ui.autocomplete.escapeRegex(i[o]), "i")),
                    r.push(s)
                }
                return e.grep(t.options,
                function(e) {
                    var i = 0;
                    if (t.settings["relevancy-sorting"]) var o = !1,
                    s = e.matches.split(" ");
                    for (var a = 0; a < r.length; a++) if (r[a].partial.test(e.matches) && i++, t.settings["relevancy-sorting"]) for (var l = 0; l < s.length; l++) if (r[a].strict.test(s[l])) {
                        o = !0;
                        break
                    }
                    if (t.settings["relevancy-sorting"]) {
                        var c = 0;
                        c += i * t.settings["relevancy-sorting-partial-match-value"],
                        o && (c += t.settings["relevancy-sorting-strict-match-value"]),
                        c *= e["relevancy-score-booster"],
                        e["relevancy-score"] = c
                    }
                    return ! n || r.length === i
                })
            },
            i = function(e) {
                if (e) t.$select_field.val(e["real-value"]);
                else {
                    for (var n = t.$text_field.val().toLowerCase(), i = {
                        "real-value": !1
                    },
                    r = 0; r < t.options.length; r++) if (n === t.options[r].label.toLowerCase()) {
                        i = t.options[r];
                        break
                    }
                    t.$select_field.val(i["real-value"] || ""),
                    i["real-value"] && t.$text_field.val(i.label),
                    "function" == typeof t.settings.handle_invalid_input && "" === t.$select_field.val() && t.settings.handle_invalid_input(t)
                }
                t.$select_field.trigger("change")
            };
            t.$text_field.autocomplete({
                minLength: 1,
                delay: 0,
                autoFocus: !0,
                source: function(e, i) {
                    var r = n(e.term);
                    t.settings["relevancy-sorting"] && (r = r.sort(function(e, t) {
                        return t["relevancy-score"] - e["relevancy-score"]
                    })),
                    i(r)
                },
                select: function(e, t) {
                    i(t.item)
                },
                change: function(e, t) {
                    i(t.item)
                }
            }),
            t.$text_field.parents("form:first").submit(function() {
                i()
            }),
            i()
        }
    };
    e.fn.selectToAutocomplete = function(t) {
        return n[t] ? n[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.fn.selectToAutocomplete"), void 0) : n.init.apply(this, arguments)
    }
} (jQuery),
function(e) {
    var t = {
        "loading-class": "active-pager-loading",
        "slow-loading-class": "active-pager-still-loading",
        "slow-loading-delay": 500,
        "reload-delay": 4e3,
        "reload-key": 19, 
        "module-key-attr": "data-active-pager-module-key",
        "module-value-attr": "data-active-pager-module-value"
    },
    n = e.extend({},
    t),
    i = {},
    r = {
        trackMousemove: function(e) {
            e && "number" == typeof e.pageY && (Baymard.state["mouse-x"] = e.pageX, Baymard.state["mouse-y"] = e.pageY)
        }
    },
    o = {
        init: function(r) {
            if (Modernizr.history && !i.plugin) {
                var o = e("html");
                if (!o.hasClass("no-active-pager")) return i = {
                    plugin: e.activePager,
                    settings: n,
                    defaults: t,
                    "current-request": {},
                    $html: o,
                    $window: e(window),
                    $gaex: e("#gaex"),
                    "image-queue": [],
                    "image-queue-load-parellel": 3
                },
                e.extend(n, r),
                i.$html.on("click.activePager", "a",
                function(t) {
                    if (this.origin === window.location.origin && t.metaKey !== !0 && t.ctrlKey !== !0) {
                        var n = e(this);
                        n.hasClass("no-active-pager") !== !0 && (this.pathname === window.location.pathname && this.hash ? ($scroll_target = e(this.hash), $scroll_target.length && (t.preventDefault(), i.plugin("scrollToElement", $scroll_target))) : "#" !== n.attr("href") && (t.preventDefault(), i.plugin("pushState", n, t)))
                    }
                    window.GaTracker && this.attributes["data-gat-ap"] && GaTracker.track({
                        "skip-pageload": !0,
                        args: GaTracker.parseArgs(this, "data-gat-ap")
                    })
                }),
                setTimeout(function() {
                    window.onpopstate = function(e) {
                        if (e.state && e.state.activePager && e.state.activePager.url) {
                            var t = e.state.activePager;
                            "none" === t.layout && delete t.layout,
                            t["back-button"] = !0,
                            i.plugin("load", t)
                        } else i.plugin("load", {
                            url: window.location.pathname,
                            "back-button": !0
                        })
                    }
                },
                500),
                i
            }
        },
        scrollToElement: function(e) {
            e.length && Baymard.plugins.scrollTo.y(e.offset().top - Math.ceil(i.$window.height() / 5, 10))
        },
        pushState: function(e, t) {
            for (var n = {
                url: e.attr("href")
            },
            r = ["layout", "recipient"], o = 0; o < r.length; o++) e.data("active-pager-" + r[o]) && (n[r[o]] = e.data("active-pager-" + r[o]));
            window.history.pushState({
                activePager: n
            },
            void 0, n.url),
            i.plugin("load", n, t)
        },
        nextInImageQueue: function() {
            if (i["image-queue"] && i["image-queue"].length) {
                var t = e(i["image-queue"].shift());
                t.on({
                    "load.activePager": function() {
                        i.plugin("nextInImageQueue")
                    },
                    "error.activePager": function() {
                        i.plugin("nextInImageQueue")
                    }
                }).attr("src", t.attr("data-lazy-load-src"))
            }
        },
        load: function(t, n) {
            n ? r.trackMousemove(n) : (Baymard.state["mouse-x"] = void 0, Baymard.state["mouse-y"] = void 0);
            var o = function(e) { (void 0 === e || "activePager.oldRequest" !== e.statusText) && (window.location.href = t.url)
            };
            void 0 !== i["current-request"].xhr && i["current-request"].xhr.abort("activePager.oldRequest"),
            clearTimeout(i["current-request"]["timeout-slow-loading"]),
            clearTimeout(i["current-request"]["timeout-reload"]),
            i.$html.addClass(i.settings["loading-class"]),
            i["image-queue"] = [],
            t.modules = {};
            var s = e("[" + i.settings["module-key-attr"] + "]");
            s.length && s.each(function() {
                t.modules[e(this).attr(i.settings["module-key-attr"])] = e(this).attr(i.settings["module-value-attr"])
            }),
            i["current-request"].xhr = e.ajax({
                url: t.url,
                async: !0,
                data: {
                    "active-pager": t
                },
                dataType: "json",
                error: o,
                success: function(n) {
                    function r() {
                        if (t["back-button"] || Baymard.plugins.scrollTo.y(0), s) if (s.reload_key !== i.settings["reload-key"]) window.location.reload();
                        else {
                            var n = e(s.recipient);
                            if (n.length) {
                                if (s.modules) for (var r = 0; r < s.modules.length; r++) {
                                    var a = e("[" + i.settings["module-key-attr"] + '="' + s.modules[r].key + '"]');
                                    a.length && (a.attr(i.settings["module-value-attr"], s.modules[r].value), s.modules[r].replace_html ? a.replaceWith(s.modules[r].content) : a.html(s.modules[r].content))
                                }
                                var l = e("<div></div>").html(s.html).children();
                                if (i["image-queue"] = l.find("img").get(), i["image-queue"].length) for (var r = 0; r < i["image-queue-load-parellel"]; r++) i.plugin("nextInImageQueue");
                                e(s.recipient).empty().html(l),
                                s.title && (document.title = s.title),
                                s.html_data_attrs && e.each(s.html_data_attrs,
                                function(e, t) {
                                    i.$html.attr("data-" + e, t)
                                });
                                var c = function(t, n) {
                                    var i = e(t).removeClass("selected-current selected-parent");
                                    i.data("system-key") == n[n.length - 1] ? i.addClass("selected-current") : -1 !== e.inArray(i.data("system-key"), n) && i.addClass("selected-parent")
                                };
                                e("body > .header .main a").each(function() {
                                    c(this, s.breadcrumb)
                                }),
                                e("body > .footer a").each(function() {
                                    s.footer_breadcrumb ? c(this, s.footer_breadcrumb) : c(this, s.breadcrumb)
                                }),
                                window.location.hash && i.plugin("scrollToElement", e(window.location.hash))
                            } else o()
                        } else o();
                        i.$window.trigger("activePager.loaded").off("mousemove.activeTooltip.temporary")
                    }
                    var s = n.active_pager;
                    i.$html.removeClass(i.settings["loading-class"] + " " + i.settings["slow-loading-class"]),
                    clearTimeout(i["current-request"]["timeout-slow-loading"]),
                    clearTimeout(i["current-request"]["timeout-reload"]),
                    s && s.gaex ? e.ajax({
                        url: "//www.google-analytics.com/cx/api.js?experiment=" + s.gaex.id,
                        dataType: "script",
                        cache: !0
                    }).success(function() {
                        r(),
                        i.$gaex.html(s.gaex.html),
                        ga("send", "pageview", window.location.pathname + window.location.search)
                    }).fail(r) : (i.$gaex.html(""), r(), ga("send", "pageview", window.location.pathname + window.location.search))
                }
            }),
            t["back-button"] && i.$html.addClass(i.settings["slow-loading-class"]),
            i["current-request"]["timeout-slow-loading"] = setTimeout(function() {
                i.$html.addClass(i.settings["slow-loading-class"])
            },
            i.settings["slow-loading-delay"]),
            i["current-request"]["timeout-reload"] = setTimeout(function() {
                window.location.href = t.url
            },
            i.settings["reload-delay"]),
            i.$window.trigger("activePager.load").on("mousemove.activeTooltip.temporary",
            function(e) {
                r.trackMousemove(e)
            })
        }
    };
    e.activePager = function(t) {
        return o[t] ? o[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.activePager"), void 0) : o.init.apply(this, arguments)
    }
} (jQuery),
function(e) {
    var t = {
        "link-selector": ".spring-box-link:first",
        "active-class": "spring-box-active",
        "initialized-class": "spring-box-initialized",
        "keep-open": !1,
        "hover-activation": !1
    },
    n = {
        data: function(t) {
            return e(t).data("springBox")
        },
        bind: function(e, t) {
            e.$document.one("click.springBox", {
                timeStamp: t.timeStamp,
                payload: e
            },
            function(e) {
                e.timeStamp === e.data.timeStamp ? n.bind(e.data.payload, e) : e.data.payload.$wrapper.springBox("close")
            })
        }
    },
    i = {
        init: function(i) {
            return this.each(function() {
                var r = e(this),
                o = e.extend({},
                t, i);
                if (Baymard.plugins.inlineSettings.set(o, r, "spring-box"), void 0 === r.data("springBox")) {
                    var s = r.find(o["link-selector"]),
                    a = r.data("springBox", {
                        settings: o,
                        $wrapper: r,
                        $link: s,
                        $document: e(document)
                    }).data("springBox");
                    a.settings["hover-activation"] && a.$wrapper.on({
                        mouseenter: function() {
                            a.$wrapper.springBox("open")
                        },
                        mouseleave: function() {
                            a.$wrapper.springBox("close")
                        }
                    }),
                    a.$link.on("click.springBox",
                    function(e) {
                        e.metaKey !== !0 && e.ctrlKey !== !0 && (e.preventDefault(), a.$wrapper.springBox("toggle", e))
                    }),
                    a.$wrapper.on("click.springBox",
                    function(e) {
                        if (!a.settings["keep-open"] && !a.settings["hover-activation"]) {
                            var t = Baymard.plugins.getEvents(a.$document, "click.springBox");
                            if (t && t.length) {
                                var i = t[0];
                                i.data.payload.$wrapper === a.$wrapper && (a.$document.off("click.springBox"), n.bind(a, e))
                            }
                        }
                    }),
                    a.$wrapper.addClass(a.settings["initialized-class"])
                }
            })
        },
        toggle: function(e) {
            return this.each(function() {
                var t = n.data(this);
                t.$wrapper.hasClass(t.settings["active-class"]) ? t.$wrapper.springBox("close", e) : t.$wrapper.springBox("open", e)
            })
        },
        open: function(e) {
            return this.each(function() {
                var t = n.data(this);
                t.$wrapper.addClass(t.settings["active-class"]),
                t.settings["keep-open"] || t.settings["hover-activation"] || n.bind(t, e)
            })
        },
        close: function() {
            return this.each(function() {
                var e = n.data(this);
                e && e.$wrapper.removeClass(e.settings["active-class"])
            })
        },
        destroy: function() {
            return this.each(function() {
                var e = n.data(this);
                e && (e.$link && e.$link.length && e.$link.off("click.springBox"), e.$wrapper.removeClass(e.settings["active-class"]).removeClass(e.settings["initialized-class"]).removeData("springBox"))
            })
        }
    };
    e.fn.springBox = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.springBox"), void 0) : i.init.apply(this, arguments)
    }
} (jQuery),
function(e) {
    e.lazyCarousel = function(t, n) {
        var i, r, o = e.extend({
            "carousel-selector": ".carousel",
            "next-selector": ".next",
            "prev-selector": ".prev",
            "content-selector": ".content",
            "content-slider-selector": ".slider",
            "image-path": null,
            "starts-at": 0,
            item_attrs: {
                "class": "item"
            }
        },
        n),
        s = function() {
            g()
        },
        a = t,
        l = [],
        c = o["starts-at"],
        u = a.length,
        d = u - 1,
        h = e(o["carousel-selector"]),
        f = h.find(o["next-selector"]),
        p = h.find(o["prev-selector"]),
        t = h.find(o["content-selector"]),
        m = h.find(o["content-slider-selector"]);
        o["item-width"] || (o["item-width"] = t.width());
        var g = function() {
            t.click(function() {
                return w(),
                !1
            }),
            f.click(function() {
                return w(),
                !1
            }),
            p.click(function() {
                return x(),
                !1
            }),
            e.each(a,
            function(t, n) {
                l.push({
                    wrapper: e("<div></div>").attr(o.item_attrs).css("left", t * o["item-width"]),
                    content: n,
                    loaded: !1
                }),
                m.append(l[t].wrapper)
            }),
            b()
        },
        v = function() {
            y(c),
            y(i),
            y(r)
        },
        y = function(t) {
            slide = l[t],
            slide.loaded || (slide.item = slide.wrapper.append(e("<img />").attr({
                src: S(slide),
                alt: ""
            })), slide.loaded = !0)
        },
        b = function() {
            c > d ? c = 0 : 0 > c && (c = d),
            m.animate({
                left: c * o["item-width"] * -1
            }),
            C(),
            v(),
            o.perform_slide_hook && o.perform_slide_hook(l[c], o)
        },
        w = function() {
            c += 1,
            b()
        },
        x = function() {
            c -= 1,
            b()
        },
        C = function() {
            i = c + 1 > d ? 0 : c + 1,
            r = 0 > c - 1 ? d: c - 1
        },
        S = function(e) {
            return reponse = e.content.image,
            img_path = o["image-path"],
            img_path && (reponse = img_path + reponse),
            reponse
        };
        s()
    }
} (jQuery),
function(e) {
    var t = {
        "slides-selector": ".active-slider-slide",
        $slides: !1,
        "slides-multi-array": !1,
        "tabs-selector": ".active-slider-tab",
        "class-initialized": "active-slider-initialized",
        "class-active": "active-slider-active",
        "class-future": "active-slider-future",
        "class-next": "active-slider-next",
        "class-past": "active-slider-past",
        "class-previous": "active-slider-previous",
        "start-page-index": 0,
        "total-slides": !1
    },
    n = {
        data: function(t) {
            return e(t).data("activeSlider")
        },
        sanitizeCurrentPageRef: function(e) {
            var t = n.data(e);
            "number" == typeof t["current-page"] ? t["current-page"] < 0 ? t["current-page"] = 0 : t.$tabs.length && t["current-page"] > t.$tabs.length - 1 && (t["current-page"] = t.$tabs.length - 1) : t["current-page"] = 0
        }
    },
    i = {
        init: function(n) {
            return this.each(function() {
                var i = e.extend({},
                t, n),
                r = e(this),
                o = r.find(i["slides-selector"]);
                i.$slides && (o = i.$slides),
                i["slides-multi-array"] || (o = [o]);
                var s = r.find(i["tabs-selector"]),
                a = 0;
                if (i["total-slides"]) a = i["total-slides"];
                else for (var l = 0,
                c = 0; c < o.length; c++) l = o[c].length,
                l > a && (a = l);
                a > 0 && (a -= 1);
                var u = r.data("activeSlider", {
                    settings: i,
                    $wrapper: r,
                    $slides: o,
                    $tabs: s,
                    "current-page": i["start-page-index"],
                    "total-slides": a
                }).data("activeSlider");
                if (u.$tabs.bind("click.activeSlider",
                function(e) {
                    e.preventDefault(),
                    r.activeSlider("slide", u.$tabs.index(this))
                }), window.location.hash && "" !== window.location.hash) for (var d = 0,
                c = 0; c < u.$slides.length; c++) d = u.$slides[c].index(u.$slides[c].filter(window.location.hash)),
                d >= 0 && (u["current-page"] = d);
                r.activeSlider("slide"),
                u.$wrapper.addClass(u.settings["class-initialized"])
            })
        },
        slide: function(e) {
            return this.each(function() {
                var t = n.data(this); (e || 0 === e) && (t["current-page"] = e),
                n.sanitizeCurrentPageRef(this);
                var i = t["current-page"],
                r = t["current-page"] + 1;
                if (t.$slides.length) for (var o = 0; o < t.$slides.length; o++) t.$slides[o].removeClass(t.settings["class-active"] + " " + t.settings["class-future"] + " " + t.settings["class-past"] + " " + t.settings["class-next"]),
                t.$slides[o].slice(0, i).addClass(t.settings["class-past"]),
                i > 0 && t.$slides[o].slice(i - 1, i).addClass(t.settings["class-next"]),
                t.$slides[o].slice(i, r).addClass(t.settings["class-active"]),
                r < t.$slides[o].length && t.$slides[o].slice(r, r + 1).addClass(t.settings["class-next"]),
                t.$slides[o].slice(r).addClass(t.settings["class-future"]);
                t.$tabs.length && (t.$tabs.removeClass(t.settings["class-active"] + " " + t.settings["class-future"] + " " + t.settings["class-past"]), t.$tabs.slice(0, i).addClass(t.settings["class-past"]), t.$tabs.slice(i, r).addClass(t.settings["class-active"]), t.$tabs.slice(r).addClass(t.settings["class-future"])),
                t.$wrapper.trigger("slide.activeSlider", t)
            })
        },
        next: function() {
            return this.each(function() {
                var e = n.data(this);
                e["current-page"] += 1,
                e["current-page"] >= e["total-slides"] && (e["current-page"] = e["total-slides"]),
                e.$wrapper.activeSlider("slide")
            })
        },
        previous: function() {
            return this.each(function() {
                var e = n.data(this);
                e["current-page"] -= 1,
                e["current-page"] <= 0 && (e["current-page"] = 0),
                e.$wrapper.activeSlider("slide")
            })
        }
    };
    e.fn.activeSlider = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.activeSlider"), void 0) : i.init.apply(this, arguments)
    }
} (jQuery),
function(e) {
    var t = {
        "active-class": "sticky-header-on",
        "init-class": "sticky-header-initialized",
        "set-height-from": !1
    },
    n = {
        data: function(t) {
            return e(t).data("stickyHeader")
        }
    },
    i = {
        init: function(n) {
            return this.each(function() {
                var i = e.extend({},
                t, n),
                r = e(this);
                if (void 0 === r.data("stickyHeader")) {
                    var o = r.data("stickyHeader", {
                        settings: i,
                        $obj: r,
                        $heightObj: !1,
                        height: !1,
                        $window: e(window)
                    }).data("stickyHeader");
                    o.settings["set-height-from"] && (o.$heightObj = o.$obj.find(o.settings["set-height-from"]), o.$window.on("resize.stickyHeader",
                    function() {
                        o.$obj.stickyHeader("refreshHeight")
                    })),
                    o.$obj.stickyHeader("refresh"),
                    o.$window.on("scroll.stickyHeader",
                    function() {
                        o.$obj.stickyHeader("refreshStickiness")
                    }),
                    o.$obj.on("remove",
                    function() {
                        o.$window.off(".stickyHeader")
                    }),
                    o.$obj.addClass(o.settings["init-class"])
                }
            })
        },
        refresh: function() {
            return this.each(function() {
                var e = n.data(this);
                e.$obj.stickyHeader("refreshOffset"),
                e.settings["set-height-from"] && e.$obj.stickyHeader("refreshHeight"),
                e.$obj.stickyHeader("refreshStickiness")
            })
        },
        refreshOffset: function() {
            return this.each(function() {
                var e = n.data(this);
                e.$obj.removeClass(e.settings["active-class"]),
                e.offset = e.$obj.offset().top,
                e.$obj.addClass(e.settings["active-class"])
            })
        },
        refreshHeight: function() {
            return this.each(function() {
                var e = n.data(this),
                t = e.$heightObj.outerHeight();
                e.height !== t && (e.$obj.css("height", t), e.height = t)
            })
        },
        refreshStickiness: function() {
            return this.each(function() {
                var e = n.data(this);
                e.$window.scrollTop() > e.offset ? e.$obj.addClass(e.settings["active-class"]) : e.$obj.removeClass(e.settings["active-class"])
            })
        }
    };
    e.fn.stickyHeader = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.stickyHeader"), void 0) : i.init.apply(this, arguments)
    }
} (jQuery),
function(e) {
    var t = {
        "active-class": "active-overlay-active",
        "initialized-class": "active-overlay-initialized",
        "$state-recipient": e("html"),
        "recipient-selector": ".content",
        "close-selector": "a.close:first",
        "close-on-any-click": !0
    },
    n = {
        data: function(t) {
            return e(t).data("activeOverlay")
        },
        isOpen: function(e) {
            return e["$state-recipient"].hasClass(e.settings["active-class"])
        },
        isClosed: function(e) {
            return ! n.isOpen(e)
        }
    },
    i = {
        init: function(i) {
            return this.each(function() {
                var r = e.extend({},
                t, i),
                o = e(this);
                if (void 0 === o.data("activeOverlay")) {
                    var s = o.data("activeOverlay", {
                        settings: r,
                        $that: o,
                        $recipient: o.find(r["recipient-selector"]),
                        $close: o.find(r["close-selector"]),
                        "$state-recipient": r["$state-recipient"],
                        $scroll: e(window),
                        $document: e(document),
                        "body-offset-y": 0,
                        "body-offset-x": 0
                    }).data("activeOverlay");
                    s["$state-recipient"].addClass(s.settings["initialized-class"]),
                    s.$close.bind("click.activeOverlay",
                    function(e) {
                        e.preventDefault(),
                        e.stopPropagation(),
                        s.$that.activeOverlay("close")
                    }),
                    s.$document.bind("keydown.activeOverlay",
                    function(e) {
                        n.isOpen(s) && 27 === e.keyCode && s.$that.activeOverlay("close")
                    })
                }
            })
        },
        open: function(t) {
            return this.each(function() {
                var i = n.data(this);
                n.isClosed(i) && (i["body-offset-y"] = i.$scroll.scrollTop(), i["body-offset-x"] = i.$scroll.scrollLeft(), i["$state-recipient"].addClass(i.settings["active-class"]), i.$recipient.html(t).find("a").bind("click.activeOverlay",
                function() {
                    i.$that.activeOverlay("close")
                })),
                i.settings["close-on-any-click"] && e(i.$that).one("click.activeOverlay",
                function(e) {
                    e.stopPropagation(),
                    i.$that.activeOverlay("close")
                })
            })
        },
        close: function() {
            return this.each(function() {
                var e = n.data(this);
                n.isOpen(e) && (e.$that.scrollTop(0), e["$state-recipient"].removeClass(e.settings["active-class"]), e.$recipient.empty(), Baymard.plugins.scrollTo.y(e["body-offset-y"]), Baymard.plugins.scrollTo.x(e["body-offset-x"]))
            })
        }
    };
    e.fn.activeOverlay = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.fn.activeOverlay"), void 0) : i.init.apply(this, arguments)
    }
} (jQuery),
function(e) {
    var t = {
        "option-selector": ".radio-click-option",
        "fallback-selector": ".radio-click-fallback",
        "radio-button-selector": ":radio:first",
        "active-class": "radio-click-active",
        "initialized-class": "radio-click-initialized",
        "slow-response-class": "radio-click-slow-response",
        "slow-response-delay": 1500,
        "loading-class": "radio-click-loading",
        "auto-submit": !1
    },
    n = {
        data: function(t) {
            return e(t).data("radioClick")
        }
    },
    i = {
        init: function(n) {
            return this.each(function() {
                var i = e.extend({},
                t, n),
                r = e(this);
                if (void 0 === r.data("radioClick")) {
                    var o = r.find(i["option-selector"]),
                    s = o.filter(i["fallback-selector"]),
                    a = r.data("radioClick", {
                        settings: i,
                        $that: r,
                        $options: o,
                        "$radio-buttons": o.find(i["radio-button-selector"]),
                        "$fallback-option": s,
                        "current-request": {}
                    }).data("radioClick");
                    a.$options.bind("click.radioClick",
                    function(e) {
                        e.preventDefault(),
                        a.$that.radioClick("refresh", e)
                    }),
                    a["$radio-buttons"].filter(":checked").parents(a.settings["option-selector"]).addClass(a.settings["active-class"]),
                    a.$that.addClass(a.settings["initialized-class"])
                }
            })
        },
        refresh: function(t) {
            return this.each(function() {
                var i = n.data(this),
                r = e(t.delegateTarget);
                i.$options.not(r).removeClass(i.settings["active-class"]),
                r.toggleClass(i.settings["active-class"]);
                var o = i.$options.filter("." + i.settings["active-class"]);
                if (o.length || (o = i["$fallback-option"].addClass(i.settings["active-class"])), i["$radio-buttons"].attr("checked", !1), o.find(i.settings["radio-button-selector"]).attr("checked", !0), i.$that.trigger("change.radioClick", i), i.settings["auto-submit"]) {
                    var s = i.$that.parents("form:first"),
                    a = "POST",
                    l = s.find("input[name=_method]");
                    l.length && (a = l.val().toUpperCase()),
                    void 0 !== i["current-request"].xhr && i["current-request"].xhr.abort("radioClick.oldRequest"),
                    clearTimeout(i["current-request"]["timeout-slow-response"]),
                    i.$that.addClass(i.settings["loading-class"]),
                    i["current-request"].xhr = e.ajax({
                        url: s.attr("action"),
                        data: e("<form></form>").html(i.$that.html()).serialize(),
                        dataType: "json",
                        type: a,
                        success: function() {},
                        error: function(e) {
                            "radioClick.oldRequest" !== e.statusText && alert("An error occurred and the rating could not be saved. Please try again or reload the page.")
                        },
                        complete: function() {
                            clearTimeout(i["current-request"]["timeout-slow-response"]),
                            i.$that.removeClass(i.settings["slow-response-class"]),
                            i.$that.removeClass(i.settings["loading-class"])
                        }
                    }),
                    i["current-request"]["timeout-slow-response"] = setTimeout(function() {
                        i.$that.addClass(i.settings["slow-response-class"])
                    },
                    i.settings["slow-response-delay"])
                }
            })
        }
    };
    e.fn.radioClick = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.fn.radioClick"), void 0) : i.init.apply(this, arguments)
    }
} (jQuery),
function(e) {
    var t = {
        "content-attr": "title",
        "content-attr-rename": !1,
        "targets-selector": ".active-tooltip",
        "template-selector": ".active-tooltip-template",
        "content-recipient-selector": ".active-tooltip-content-recipient",
        "active-class": "active-tooltip-active",
        "spacing-px": 10,
        "right-aligned-class": "active-tooltip-right-aligned",
        "left-aligned-class": "active-tooltip-left-aligned"
    },
    n = {},
    i = {
        init: function(i) {
            var r = e.extend({},
            t, i);
            if (n && !n.$document && (n.$document = e(document), n.$window = e(window), n["content-attr"] = r["content-attr"], !n.$document.data("activeTooltip"))) {
                var o = e(r["template-selector"]),
                s = n.$document.data("activeTooltip", {
                    settings: r,
                    $template: o,
                    "$content-recipient": o.find(r["content-recipient-selector"]),
                    $recipient: !1
                }).data("activeTooltip");
                n.$document.on({
                    "mouseenter.activeTooltip": function() {
                        s.$recipient = e(this),
                        e.activeTooltip("mouseenter")
                    },
                    "mouseleave.activeTooltip": function() {
                        e.activeTooltip("mouseleave")
                    }
                },
                s.settings["targets-selector"]),
                s.settings["content-attr-rename"] && (n["content-attr"] = s.settings["content-attr-rename"], e.activeTooltip("rename_content_attr"))
            }
        },
        refresh_position: function() {
            var t = e.activeTooltip("data");
            t.$template.removeClass(t.settings["left-aligned-class"] + " " + t.settings["right-aligned-class"]);
            var i = t.$recipient.offset().left - n.$document.scrollLeft() - Math.round(t.$template.outerWidth() / 2, 10) + Math.round(t.$recipient.outerWidth() / 2, 10);
            0 > i ? (i = t.$recipient.offset().left - n.$document.scrollLeft(), t.$template.addClass(t.settings["left-aligned-class"])) : i + t.$template.outerWidth() > n.$document.outerWidth() && (i = t.$recipient.offset().left - n.$document.scrollLeft() + t.$recipient.outerWidth() - t.$template.outerWidth(), t.$template.addClass(t.settings["right-aligned-class"])),
            t.$template.css({
                top: t.$recipient.offset().top + t.$recipient.outerHeight() - n.$document.scrollTop() + t.settings["spacing-px"],
                left: i
            })
        },
        rename_content_attr: function(t) {
            var n = e.activeTooltip("data");
            t || (t = e(n.settings["targets-selector"])),
            t.each(function() {
                $that = e(this),
                $that.attr(n.settings["content-attr-rename"], $that.attr(n.settings["content-attr"])).removeAttr(n.settings["content-attr"])
            })
        },
        refresh_mouse: function() {
            var t = e.activeTooltip("data");
            t.$template && t.$template.length && (t.$template.removeClass(t.settings["active-class"]), t.$template.css({
                top: 0,
                left: 0
            }))
        },
        mouseleave: function() {
            e.activeTooltip("refresh_mouse"),
            n.$window.off("scroll.activeTooltip resize.activeTooltip")
        },
        mouseenter: function() {
            var t = e.activeTooltip("data");
            n.text = t.$recipient.attr(n["content-attr"]),
            t["$content-recipient"].text(n.text),
            e.activeTooltip("refresh_position"),
            t.$template.addClass(t.settings["active-class"]),
            n.$window.on("scroll.activeTooltip resize.activeTooltip",
            function() {
                e.activeTooltip("refresh_position")
            })
        },
        data: function() {
            return n.$document.data("activeTooltip")
        }
    };
    e.activeTooltip = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.activeTooltip"), void 0) : i.init.apply(this, arguments)
    }
} (jQuery),
function(e) {
    var t = {
        "initialized-class": "custom-select-initialized",
        "focus-class": "custom-select-focus",
        "hover-class": "custom-select-hover",
        "custom-html": '<div class="custom-select-option"></div>',
        "select-selector": "select:first"
    },
    n = {
        data: function(t) {
            return e(t).data("customSelect")
        }
    },
    i = {
        init: function(n) {
            return this.each(function() {
                var i = e.extend({},
                t, n),
                r = e(this);
                if (void 0 === r.data("customSelect")) {
                    var o = r.data("customSelect", {
                        settings: i,
                        $that: r,
                        "$custom-select": e(i["custom-html"]),
                        $select: r.find(i["select-selector"])
                    }).data("customSelect");
                    o.$select.after(o["$custom-select"]).bind({
                        "change.customSelect": function() {
                            o.$that.customSelect("refreshSelected")
                        },
                        mouseover: function() {
                            o.$that.addClass(o.settings["hover-class"])
                        },
                        mouseleave: function() {
                            o.$that.removeClass(o.settings["hover-class"])
                        },
                        focus: function() {
                            o.$that.addClass(o.settings["focus-class"]),
                            o.$select.bind("keypress.customSelect",
                            function() {
                                o.$select.trigger("change.customSelect")
                            })
                        },
                        blur: function() {
                            o.$that.removeClass(o.settings["focus-class"]),
                            o.$select.unbind("keypress.customSelect")
                        }
                    }),
                    o.$that.customSelect("refreshSelected").addClass(o.settings["initialized-class"])
                }
            })
        },
        refreshSelected: function() {
            return this.each(function() {
                var e = n.data(this);
                e["$custom-select"].text(e.$that.find(":selected").text())
            })
        }
    };
    e.fn.customSelect = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.fn.customSelect"), void 0) : i.init.apply(this, arguments)
    }
} (jQuery),
/*!
 * Chart.js
 * http://chartjs.org/
 *
 * Copyright 2013 Nick Downie
 * Released under the MIT license
 * https://github.com/nnnick/Chart.js/blob/master/LICENSE.md
 */
window.Chart = function(e) {
    function t(e, t, n) {
        var i = t.steps * t.stepValue,
        r = e - t.graphMin,
        o = c(r / i, 1, 0);
        return n * t.steps * o
    }
    function n(e, t, n, i) {
        function r() {
            var r = e.animation ? c(a(l), null, 0) : 1;
            v(i),
            e.scaleOverlay ? (n(r), t()) : (t(), n(r))
        }
        function o() {
            l += s,
            r(),
            1 >= l ? T(o) : "function" == typeof e.onAnimationComplete && e.onAnimationComplete()
        }
        var s = e.animation ? 1 / c(e.animationSteps, Number.MAX_VALUE, 1) : 1,
        a = p[e.animationEasing],
        l = e.animation ? 0 : 1;
        "function" != typeof t && (t = function() {}),
        T(o)
    }
    function i(e, t, n, i, o, s) {
        function a(e) {
            return Math.floor(Math.log(e) / Math.LN10)
        }
        var l, c, u, d, h, f, p;
        for (f = i - o, p = a(f), l = Math.floor(o / (1 * Math.pow(10, p))) * Math.pow(10, p), c = Math.ceil(i / (1 * Math.pow(10, p))) * Math.pow(10, p), u = c - l, d = Math.pow(10, p), h = Math.round(u / d); n > h || h > t;) n > h ? (d /= 2, h = Math.round(u / d)) : (d *= 2, h = Math.round(u / d));
        var m = [];
        return r(s, m, h, l, d),
        {
            steps: h,
            stepValue: d,
            graphMin: l,
            labels: m
        }
    }
    function r(e, t, n, i, r) {
        if (e) for (var o = 1; n + 1 > o; o++) t.push(h(e, {
            value: (i + r * o).toFixed(u(r))
        }))
    }
    function o(e) {
        return Math.max.apply(Math, e)
    }
    function s(e) {
        return Math.min.apply(Math, e)
    }
    function a(e, t) {
        return e ? e: t
    }
    function l(e) {
        return ! isNaN(parseFloat(e)) && isFinite(e)
    }
    function c(e, t, n) {
        return l(t) && e > t ? t: l(n) && n > e ? n: e
    }
    function u(e) {
        return e % 1 != 0 ? e.toString().split(".")[1].length: 0
    }
    function d(e, t) {
        var n = {};
        for (var i in e) n[i] = e[i];
        for (var i in t) n[i] = t[i];
        return n
    }
    function h(e, t) {
        var n = /\W/.test(e) ? new Function("obj", "var p=[],print=function(){p.push.apply(p,arguments);};with(obj){p.push('" + e.replace(/[\r\t\n]/g, " ").split("<%").join("	").replace(/((^|%>)[^\t]*)'/g, "$1\r").replace(/\t=(.*?)%>/g, "',$1,'").split("	").join("');").split("%>").join("p.push('").split("\r").join("\\'") + "');}return p.join('');") : E[e] = E[e] || h(document.getElementById(e).innerHTML);
        return t ? n(t) : n
    }
    var f = this,
    p = {
        linear: function(e) {
            return e
        },
        easeInQuad: function(e) {
            return e * e
        },
        easeOutQuad: function(e) {
            return - 1 * e * (e - 2)
        },
        easeInOutQuad: function(e) {
            return (e /= .5) < 1 ? .5 * e * e: -0.5 * (--e * (e - 2) - 1)
        },
        easeInCubic: function(e) {
            return e * e * e
        },
        easeOutCubic: function(e) {
            return 1 * ((e = e / 1 - 1) * e * e + 1)
        },
        easeInOutCubic: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e: .5 * ((e -= 2) * e * e + 2)
        },
        easeInQuart: function(e) {
            return e * e * e * e
        },
        easeOutQuart: function(e) {
            return - 1 * ((e = e / 1 - 1) * e * e * e - 1)
        },
        easeInOutQuart: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e * e: -0.5 * ((e -= 2) * e * e * e - 2)
        },
        easeInQuint: function(e) {
            return 1 * (e /= 1) * e * e * e * e
        },
        easeOutQuint: function(e) {
            return 1 * ((e = e / 1 - 1) * e * e * e * e + 1)
        },
        easeInOutQuint: function(e) {
            return (e /= .5) < 1 ? .5 * e * e * e * e * e: .5 * ((e -= 2) * e * e * e * e + 2)
        },
        easeInSine: function(e) {
            return - 1 * Math.cos(e / 1 * (Math.PI / 2)) + 1
        },
        easeOutSine: function(e) {
            return 1 * Math.sin(e / 1 * (Math.PI / 2))
        },
        easeInOutSine: function(e) {
            return - 0.5 * (Math.cos(Math.PI * e / 1) - 1)
        },
        easeInExpo: function(e) {
            return 0 == e ? 1 : 1 * Math.pow(2, 10 * (e / 1 - 1))
        },
        easeOutExpo: function(e) {
            return 1 == e ? 1 : 1 * ( - Math.pow(2, -10 * e / 1) + 1)
        },
        easeInOutExpo: function(e) {
            return 0 == e ? 0 : 1 == e ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * ( - Math.pow(2, -10 * --e) + 2)
        },
        easeInCirc: function(e) {
            return e >= 1 ? e: -1 * (Math.sqrt(1 - (e /= 1) * e) - 1)
        },
        easeOutCirc: function(e) {
            return 1 * Math.sqrt(1 - (e = e / 1 - 1) * e)
        },
        easeInOutCirc: function(e) {
            return (e /= .5) < 1 ? -0.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
        },
        easeInElastic: function(e) {
            var t = 1.70158,
            n = 0,
            i = 1;
            if (0 == e) return 0;
            if (1 == (e /= 1)) return 1;
            if (n || (n = .3), i < Math.abs(1)) {
                i = 1;
                var t = n / 4
            } else var t = n / (2 * Math.PI) * Math.asin(1 / i);
            return - (i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n))
        },
        easeOutElastic: function(e) {
            var t = 1.70158,
            n = 0,
            i = 1;
            if (0 == e) return 0;
            if (1 == (e /= 1)) return 1;
            if (n || (n = .3), i < Math.abs(1)) {
                i = 1;
                var t = n / 4
            } else var t = n / (2 * Math.PI) * Math.asin(1 / i);
            return i * Math.pow(2, -10 * e) * Math.sin(2 * (1 * e - t) * Math.PI / n) + 1
        },
        easeInOutElastic: function(e) {
            var t = 1.70158,
            n = 0,
            i = 1;
            if (0 == e) return 0;
            if (2 == (e /= .5)) return 1;
            if (n || (n = .3 * 1.5), i < Math.abs(1)) {
                i = 1;
                var t = n / 4
            } else var t = n / (2 * Math.PI) * Math.asin(1 / i);
            return 1 > e ? -.5 * i * Math.pow(2, 10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n) : i * Math.pow(2, -10 * (e -= 1)) * Math.sin(2 * (1 * e - t) * Math.PI / n) * .5 + 1
        },
        easeInBack: function(e) {
            var t = 1.70158;
            return 1 * (e /= 1) * e * ((t + 1) * e - t)
        },
        easeOutBack: function(e) {
            var t = 1.70158;
            return 1 * ((e = e / 1 - 1) * e * ((t + 1) * e + t) + 1)
        },
        easeInOutBack: function(e) {
            var t = 1.70158;
            return (e /= .5) < 1 ? .5 * e * e * (((t *= 1.525) + 1) * e - t) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
        },
        easeInBounce: function(e) {
            return 1 - p.easeOutBounce(1 - e)
        },
        easeOutBounce: function(e) {
            return (e /= 1) < 1 / 2.75 ? 7.5625 * e * e: 2 / 2.75 > e ? 1 * (7.5625 * (e -= 1.5 / 2.75) * e + .75) : 2.5 / 2.75 > e ? 1 * (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 1 * (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
        },
        easeInOutBounce: function(e) {
            return.5 > e ? .5 * p.easeInBounce(2 * e) : .5 * p.easeOutBounce(2 * e - 1) + .5
        }
    },
    m = e.canvas.width,
    g = e.canvas.height;
    window.devicePixelRatio && (e.canvas.style.width = m + "px", e.canvas.style.height = g + "px", e.canvas.height = g * window.devicePixelRatio, e.canvas.width = m * window.devicePixelRatio, e.scale(window.devicePixelRatio, window.devicePixelRatio)),
    this.PolarArea = function(t, n) {
        f.PolarArea.defaults = {
            scaleOverlay: !0,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null,
            pointShowLabels: !1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 11,
            pointLabelFontColor: "#000",
            pointLabelShowShadow: !0,
            pointLabelShadowColor: "rgba(255,255,255,0.25)",
            pointLabelShadowOffsetX: 1,
            pointLabelShadowOffsetY: 1,
            pointLabelShadowBlur: 0
        };
        var i = n ? d(f.PolarArea.defaults, n) : f.PolarArea.defaults;
        return new y(t, i, e)
    },
    this.Radar = function(t, n) {
        f.Radar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleShowLine: !0,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !1,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowLabelBackdrop: !0,
            scaleBackdropColor: "rgba(255,255,255,0.75)",
            scaleBackdropPaddingY: 2,
            scaleBackdropPaddingX: 2,
            angleShowLineOut: !0,
            angleLineColor: "rgba(0,0,0,.1)",
            angleLineWidth: 1,
            pointLabelFontFamily: "'Arial'",
            pointLabelFontStyle: "normal",
            pointLabelFontSize: 12,
            pointLabelFontColor: "#666",
            pointDot: !0,
            pointDotRadius: 3,
            pointDotStrokeWidth: 1,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = n ? d(f.Radar.defaults, n) : f.Radar.defaults;
        return new b(t, i, e)
    },
    this.Pie = function(t, n) {
        f.Pie.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var i = n ? d(f.Pie.defaults, n) : f.Pie.defaults;
        return new w(t, i, e)
    },
    this.Doughnut = function(t, n) {
        f.Doughnut.defaults = {
            segmentShowStroke: !0,
            segmentStrokeColor: "#fff",
            segmentStrokeWidth: 2,
            percentageInnerCutout: 50,
            animation: !0,
            animationSteps: 100,
            animationEasing: "easeOutBounce",
            animateRotate: !0,
            animateScale: !1,
            onAnimationComplete: null
        };
        var i = n ? d(f.Doughnut.defaults, n) : f.Doughnut.defaults;
        return new x(t, i, e)
    },
    this.Line = function(t, n) {
        f.Line.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            bezierCurve: !0,
            pointDot: !0,
            pointDotRadius: 4,
            pointDotStrokeWidth: 2,
            datasetStroke: !0,
            datasetStrokeWidth: 2,
            datasetFill: !0,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = n ? d(f.Line.defaults, n) : f.Line.defaults;
        return new C(t, i, e)
    },
    this.Bar = function(t, n) {
        f.Bar.defaults = {
            scaleOverlay: !1,
            scaleOverride: !1,
            scaleSteps: null,
            scaleStepWidth: null,
            scaleStartValue: null,
            scaleLineColor: "rgba(0,0,0,.1)",
            scaleLineWidth: 1,
            scaleShowLabels: !0,
            scaleLabel: "<%=value%>",
            scaleFontFamily: "'Arial'",
            scaleFontSize: 12,
            scaleFontStyle: "normal",
            scaleFontColor: "#666",
            scaleShowGridLines: !0,
            scaleGridLineColor: "rgba(0,0,0,.05)",
            scaleGridLineWidth: 1,
            barShowStroke: !0,
            barStrokeWidth: 2,
            barValueSpacing: 5,
            barDatasetSpacing: 1,
            animation: !0,
            animationSteps: 60,
            animationEasing: "easeOutQuart",
            onAnimationComplete: null
        };
        var i = n ? d(f.Bar.defaults, n) : f.Bar.defaults;
        return new S(t, i, e)
    };
    var v = function(e) {
        e.clearRect(0, 0, m, g)
    },
    y = function(e, l, c) {
        function u() {
            p = s([m, g]) / 2,
            p -= o([.5 * l.scaleFontSize, .5 * l.scaleLineWidth]),
            b = 2 * l.scaleFontSize,
            l.scaleShowLabelBackdrop && (b += 2 * l.scaleBackdropPaddingY, p -= 1.5 * l.scaleBackdropPaddingY),
            w = p,
            b = a(b, 5)
        }
        function d() {
            for (var e = 0; e < y.steps; e++) if (l.scaleShowLine && (c.beginPath(), c.arc(m / 2, g / 2, v * (e + 1), 0, 2 * Math.PI, !0), c.strokeStyle = l.scaleLineColor, c.lineWidth = l.scaleLineWidth, c.stroke()), l.scaleShowLabels) {
                c.textAlign = "center",
                c.font = l.scaleFontStyle + " " + l.scaleFontSize + "px " + l.scaleFontFamily;
                var t = y.labels[e];
                if (l.scaleShowLabelBackdrop) {
                    var n = c.measureText(t).width;
                    c.fillStyle = l.scaleBackdropColor,
                    c.beginPath(),
                    c.rect(Math.round(m / 2 - n / 2 - l.scaleBackdropPaddingX), Math.round(g / 2 - v * (e + 1) - .5 * l.scaleFontSize - l.scaleBackdropPaddingY), Math.round(n + 2 * l.scaleBackdropPaddingX), Math.round(l.scaleFontSize + 2 * l.scaleBackdropPaddingY)),
                    c.fill()
                }
                c.textBaseline = "middle",
                c.fillStyle = l.scaleFontColor,
                c.fillText(t, m / 2, g / 2 - v * (e + 1))
            }
        }
        function h(n) {
            var i = -Math.PI / 2,
            r = 2 * Math.PI / e.length,
            o = 1,
            s = 1;
            l.animation && (l.animateScale && (o = n), l.animateRotate && (s = n));
            for (var a = 0; a < e.length; a++) {
                if (c.beginPath(), c.arc(m / 2, g / 2, o * t(e[a].value, y, v), i, i + s * r, !1), c.lineTo(m / 2, g / 2), c.closePath(), c.fillStyle = e[a].color, c.fill(), l.segmentShowStroke && (c.strokeStyle = l.segmentStrokeColor, c.lineWidth = l.segmentStrokeWidth, c.stroke()), l.pointShowLabels) {
                    c.textAlign = "center",
                    c.font = l.pointLabelFontStyle + " " + l.pointLabelFontSize + "px " + l.pointLabelFontFamily;
                    var u = e[a].label;
                    c.textBaseline = "middle",
                    c.fillStyle = l.pointLabelFontColor,
                    l.pointLabelShowShadow && (c.shadowColor = l.pointLabelShadowColor, c.shadowOffsetX = l.pointLabelShadowOffsetX, c.shadowOffsetY = l.pointLabelShadowOffsetY, c.shadowBlur = l.pointLabelShadowBlur);
                    var d = 2 * Math.PI / e.length,
                    h = Math.sin(d * (a + .5)) * (p - l.pointLabelFontSize),
                    f = Math.cos(d * (a + .5)) * (p - l.pointLabelFontSize);
                    c.fillText(u, h + m / 2, -f + g / 2)
                }
                i += s * r
            }
        }
        function f() {
            for (var t = Number.MIN_VALUE,
            n = Number.MAX_VALUE,
            i = 0; i < e.length; i++) e[i].value > t && (t = e[i].value),
            e[i].value < n && (n = e[i].value);
            var r = Math.floor(w / (.66 * b)),
            o = Math.floor(w / b * .5);
            return {
                maxValue: t,
                minValue: n,
                maxSteps: r,
                minSteps: o
            }
        }
        var p, v, y, b, w, x, C;
        u(),
        x = f(),
        C = l.scaleShowLabels ? l.scaleLabel: null,
        l.scaleOverride ? (y = {
            steps: l.scaleSteps,
            stepValue: l.scaleStepWidth,
            graphMin: l.scaleStartValue,
            labels: []
        },
        r(C, y.labels, y.steps, l.scaleStartValue, l.scaleStepWidth)) : y = i(w, x.maxSteps, x.minSteps, x.maxValue, x.minValue, C),
        v = p / y.steps,
        n(l, d, h, c)
    },
    b = function(e, l, u) {
        function d(n) {
            var i = 2 * Math.PI / e.datasets[0].data.length;
            u.save(),
            u.translate(m / 2, g / 2);
            for (var r = 0; r < e.datasets.length; r++) {
                u.beginPath(),
                u.moveTo(0, -1 * n * t(e.datasets[r].data[0], b, y));
                for (var o = 1; o < e.datasets[r].data.length; o++) u.rotate(i),
                u.lineTo(0, -1 * n * t(e.datasets[r].data[o], b, y));
                if (u.closePath(), u.fillStyle = e.datasets[r].fillColor, u.strokeStyle = e.datasets[r].strokeColor, u.lineWidth = l.datasetStrokeWidth, u.fill(), u.stroke(), l.pointDot) {
                    u.fillStyle = e.datasets[r].pointColor,
                    u.strokeStyle = e.datasets[r].pointStrokeColor,
                    u.lineWidth = l.pointDotStrokeWidth;
                    for (var s = 0; s < e.datasets[r].data.length; s++) u.rotate(i),
                    u.beginPath(),
                    u.arc(0, -1 * n * t(e.datasets[r].data[s], b, y), l.pointDotRadius, 2 * Math.PI, !1),
                    u.fill(),
                    u.stroke()
                }
                u.rotate(i)
            }
            u.restore()
        }
        function h() {
            var t = 2 * Math.PI / e.datasets[0].data.length;
            if (u.save(), u.translate(m / 2, g / 2), l.angleShowLineOut) {
                u.strokeStyle = l.angleLineColor,
                u.lineWidth = l.angleLineWidth;
                for (var n = 0; n < e.datasets[0].data.length; n++) u.rotate(t),
                u.beginPath(),
                u.moveTo(0, 0),
                u.lineTo(0, -v),
                u.stroke()
            }
            for (var i = 0; i < b.steps; i++) {
                if (u.beginPath(), l.scaleShowLine) {
                    u.strokeStyle = l.scaleLineColor,
                    u.lineWidth = l.scaleLineWidth,
                    u.moveTo(0, -y * (i + 1));
                    for (var r = 0; r < e.datasets[0].data.length; r++) u.rotate(t),
                    u.lineTo(0, -y * (i + 1));
                    u.closePath(),
                    u.stroke()
                }
                if (l.scaleShowLabels) {
                    if (u.textAlign = "center", u.font = l.scaleFontStyle + " " + l.scaleFontSize + "px " + l.scaleFontFamily, u.textBaseline = "middle", l.scaleShowLabelBackdrop) {
                        var o = u.measureText(b.labels[i]).width;
                        u.fillStyle = l.scaleBackdropColor,
                        u.beginPath(),
                        u.rect(Math.round( - o / 2 - l.scaleBackdropPaddingX), Math.round( - y * (i + 1) - .5 * l.scaleFontSize - l.scaleBackdropPaddingY), Math.round(o + 2 * l.scaleBackdropPaddingX), Math.round(l.scaleFontSize + 2 * l.scaleBackdropPaddingY)),
                        u.fill()
                    }
                    u.fillStyle = l.scaleFontColor,
                    u.fillText(b.labels[i], 0, -y * (i + 1))
                }
            }
            for (var s = 0; s < e.labels.length; s++) {
                u.font = l.pointLabelFontStyle + " " + l.pointLabelFontSize + "px " + l.pointLabelFontFamily,
                u.fillStyle = l.pointLabelFontColor;
                var a = Math.sin(t * s) * (v + l.pointLabelFontSize),
                c = Math.cos(t * s) * (v + l.pointLabelFontSize);
                u.textAlign = t * s == Math.PI || t * s == 0 ? "center": t * s > Math.PI ? "right": "left",
                u.textBaseline = "middle",
                u.fillText(e.labels[s], a, -c)
            }
            u.restore()
        }
        function f() {
            v = s([m, g]) / 2,
            w = 2 * l.scaleFontSize;
            for (var t = 0,
            n = 0; n < e.labels.length; n++) {
                u.font = l.pointLabelFontStyle + " " + l.pointLabelFontSize + "px " + l.pointLabelFontFamily;
                var i = u.measureText(e.labels[n]).width;
                i > t && (t = i)
            }
            v -= o([t, l.pointLabelFontSize / 2 * 1.5]),
            v -= l.pointLabelFontSize,
            v = c(v, null, 0),
            x = v,
            w = a(w, 5)
        }
        function p() {
            for (var t = Number.MIN_VALUE,
            n = Number.MAX_VALUE,
            i = 0; i < e.datasets.length; i++) for (var r = 0; r < e.datasets[i].data.length; r++) e.datasets[i].data[r] > t && (t = e.datasets[i].data[r]),
            e.datasets[i].data[r] < n && (n = e.datasets[i].data[r]);
            var o = Math.floor(x / (.66 * w)),
            s = Math.floor(x / w * .5);
            return {
                maxValue: t,
                minValue: n,
                maxSteps: o,
                minSteps: s
            }
        }
        var v, y, b, w, x, C, S;
        e.labels || (e.labels = []),
        f();
        var C = p();
        S = l.scaleShowLabels ? l.scaleLabel: null,
        l.scaleOverride ? (b = {
            steps: l.scaleSteps,
            stepValue: l.scaleStepWidth,
            graphMin: l.scaleStartValue,
            labels: []
        },
        r(S, b.labels, b.steps, l.scaleStartValue, l.scaleStepWidth)) : b = i(x, C.maxSteps, C.minSteps, C.maxValue, C.minValue, S),
        y = v / b.steps,
        n(l, h, d, u)
    },
    w = function(e, t, i) {
        function r(n) {
            var r = -Math.PI / 2,
            s = 1,
            l = 1;
            t.animation && (t.animateScale && (s = n), t.animateRotate && (l = n));
            for (var c = 0; c < e.length; c++) {
                var u = l * (e[c].value / o) * 2 * Math.PI;
                i.beginPath(),
                i.arc(m / 2, g / 2, s * a, r, r + u),
                i.lineTo(m / 2, g / 2),
                i.closePath(),
                i.fillStyle = e[c].color,
                i.fill(),
                t.segmentShowStroke && (i.lineWidth = t.segmentStrokeWidth, i.strokeStyle = t.segmentStrokeColor, i.stroke()),
                r += u
            }
        }
        for (var o = 0,
        a = s([g / 2, m / 2]) - 5, l = 0; l < e.length; l++) o += e[l].value;
        n(t, null, r, i)
    },
    x = function(e, t, i) {
        function r(n) {
            var r = -Math.PI / 2,
            s = 1,
            c = 1;
            t.animation && (t.animateScale && (s = n), t.animateRotate && (c = n));
            for (var u = 0; u < e.length; u++) {
                var d = c * (e[u].value / o) * 2 * Math.PI;
                i.beginPath(),
                i.arc(m / 2, g / 2, s * a, r, r + d, !1),
                i.arc(m / 2, g / 2, s * l, r + d, r, !0),
                i.closePath(),
                i.fillStyle = e[u].color,
                i.fill(),
                t.segmentShowStroke && (i.lineWidth = t.segmentStrokeWidth, i.strokeStyle = t.segmentStrokeColor, i.stroke()),
                r += d
            }
        }
        for (var o = 0,
        a = s([g / 2, m / 2]) - 5, l = a * (t.percentageInnerCutout / 100), c = 0; c < e.length; c++) o += e[c].value;
        n(t, null, r, i)
    },
    C = function(e, o, s) {
        function a(n) {
            function i(i, r) {
                return E - n * t(e.datasets[i].data[r], p, f)
            }
            function r(e) {
                return T + x * e
            }
            for (var a = 0; a < e.datasets.length; a++) {
                s.strokeStyle = e.datasets[a].strokeColor,
                s.lineWidth = o.datasetStrokeWidth,
                s.beginPath(),
                s.moveTo(T, E - n * t(e.datasets[a].data[0], p, f));
                for (var l = 1; l < e.datasets[a].data.length; l++) o.bezierCurve ? s.bezierCurveTo(r(l - .5), i(a, l - 1), r(l - .5), i(a, l), r(l), i(a, l)) : s.lineTo(r(l), i(a, l));
                if (s.stroke(), o.datasetFill ? (s.lineTo(T + x * (e.datasets[a].data.length - 1), E), s.lineTo(T, E), s.closePath(), s.fillStyle = e.datasets[a].fillColor, s.fill()) : s.closePath(), o.pointDot) {
                    s.fillStyle = e.datasets[a].pointColor,
                    s.strokeStyle = e.datasets[a].pointStrokeColor,
                    s.lineWidth = o.pointDotStrokeWidth;
                    for (var c = 0; c < e.datasets[a].data.length; c++) s.beginPath(),
                    s.arc(T + x * c, E - n * t(e.datasets[a].data[c], p, f), o.pointDotRadius, 0, 2 * Math.PI, !0),
                    s.fill(),
                    s.stroke()
                }
            }
        }
        function l() {
            s.lineWidth = o.scaleLineWidth,
            s.strokeStyle = o.scaleLineColor,
            s.beginPath(),
            s.moveTo(m - C / 2 + 5, E),
            s.lineTo(m - C / 2 - S - 5, E),
            s.stroke(),
            N > 0 ? (s.save(), s.textAlign = "right") : s.textAlign = "center",
            s.fillStyle = o.scaleFontColor;
            for (var t = 0; t < e.labels.length; t++) s.save(),
            N > 0 ? (s.translate(T + t * x, E + o.scaleFontSize), s.rotate( - (N * (Math.PI / 180))), s.fillText(e.labels[t], 0, 0), s.restore()) : s.fillText(e.labels[t], T + t * x, E + o.scaleFontSize + 3),
            s.beginPath(),
            s.moveTo(T + t * x, E + 3),
            o.scaleShowGridLines && t > 0 ? (s.lineWidth = o.scaleGridLineWidth, s.strokeStyle = o.scaleGridLineColor, s.lineTo(T + t * x, 5)) : s.lineTo(T + t * x, E + 3),
            s.stroke();
            s.lineWidth = o.scaleLineWidth,
            s.strokeStyle = o.scaleLineColor,
            s.beginPath(),
            s.moveTo(T, E + 5),
            s.lineTo(T, 5),
            s.stroke(),
            s.textAlign = "right",
            s.textBaseline = "middle";
            for (var n = 0; n < p.steps; n++) s.beginPath(),
            s.moveTo(T - 3, E - (n + 1) * f),
            o.scaleShowGridLines ? (s.lineWidth = o.scaleGridLineWidth, s.strokeStyle = o.scaleGridLineColor, s.lineTo(T + S + 5, E - (n + 1) * f)) : s.lineTo(T - .5, E - (n + 1) * f),
            s.stroke(),
            o.scaleShowLabels && s.fillText(p.labels[n], T - 8, E - (n + 1) * f)
        }
        function c() {
            var t = 1;
            if (o.scaleShowLabels) {
                s.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily;
                for (var n = 0; n < p.labels.length; n++) {
                    var i = s.measureText(p.labels[n]).width;
                    t = i > t ? i: t
                }
                t += 10
            }
            S = m - t - C,
            x = Math.floor(S / (e.labels.length - 1)),
            T = m - C / 2 - S,
            E = y + o.scaleFontSize / 2
        }
        function u() {
            h = g,
            s.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily,
            C = 1;
            for (var t = 0; t < e.labels.length; t++) {
                var n = s.measureText(e.labels[t]).width;
                C = n > C ? n: C
            }
            m / e.labels.length < C ? (N = 45, m / e.labels.length < Math.cos(N) * C ? (N = 90, h -= C) : h -= Math.sin(N) * C) : h -= o.scaleFontSize,
            h -= 5,
            v = o.scaleFontSize,
            h -= v,
            y = h
        }
        function d() {
            for (var t = Number.MIN_VALUE,
            n = Number.MAX_VALUE,
            i = 0; i < e.datasets.length; i++) for (var r = 0; r < e.datasets[i].data.length; r++) e.datasets[i].data[r] > t && (t = e.datasets[i].data[r]),
            e.datasets[i].data[r] < n && (n = e.datasets[i].data[r]);
            var o = Math.floor(y / (.66 * v)),
            s = Math.floor(y / v * .5);
            return {
                maxValue: t,
                minValue: n,
                maxSteps: o,
                minSteps: s
            }
        }
        var h, f, p, v, y, b, w, x, C, S, T, E, N = 0;
        u(),
        b = d(),
        w = o.scaleShowLabels ? o.scaleLabel: "",
        o.scaleOverride ? (p = {
            steps: o.scaleSteps,
            stepValue: o.scaleStepWidth,
            graphMin: o.scaleStartValue,
            labels: []
        },
        r(w, p.labels, p.steps, o.scaleStartValue, o.scaleStepWidth)) : p = i(y, b.maxSteps, b.minSteps, b.maxValue, b.minValue, w),
        f = Math.floor(y / p.steps),
        c(),
        n(o, l, a, s)
    },
    S = function(e, o, s) {
        function a(n) {
            s.lineWidth = o.barStrokeWidth;
            for (var i = 0; i < e.datasets.length; i++) {
                s.fillStyle = e.datasets[i].fillColor,
                s.strokeStyle = e.datasets[i].strokeColor;
                for (var r = 0; r < e.datasets[i].data.length; r++) {
                    var a = T + o.barValueSpacing + x * r + N * i + o.barDatasetSpacing * i + o.barStrokeWidth * i;
                    s.beginPath(),
                    s.moveTo(a, E),
                    s.lineTo(a, E - n * t(e.datasets[i].data[r], p, f) + o.barStrokeWidth / 2),
                    s.lineTo(a + N, E - n * t(e.datasets[i].data[r], p, f) + o.barStrokeWidth / 2),
                    s.lineTo(a + N, E),
                    o.barShowStroke && s.stroke(),
                    s.closePath(),
                    s.fill()
                }
            }
        }
        function l() {
            s.lineWidth = o.scaleLineWidth,
            s.strokeStyle = o.scaleLineColor,
            s.beginPath(),
            s.moveTo(m - C / 2 + 5, E),
            s.lineTo(m - C / 2 - S - 5, E),
            s.stroke(),
            _ > 0 ? (s.save(), s.textAlign = "right") : s.textAlign = "center",
            s.fillStyle = o.scaleFontColor;
            for (var t = 0; t < e.labels.length; t++) s.save(),
            _ > 0 ? (s.translate(T + t * x, E + o.scaleFontSize), s.rotate( - (_ * (Math.PI / 180))), s.fillText(e.labels[t], 0, 0), s.restore()) : s.fillText(e.labels[t], T + t * x + x / 2, E + o.scaleFontSize + 3),
            s.beginPath(),
            s.moveTo(T + (t + 1) * x, E + 3),
            s.lineWidth = o.scaleGridLineWidth,
            s.strokeStyle = o.scaleGridLineColor,
            s.lineTo(T + (t + 1) * x, 5),
            s.stroke();
            s.lineWidth = o.scaleLineWidth,
            s.strokeStyle = o.scaleLineColor,
            s.beginPath(),
            s.moveTo(T, E + 5),
            s.lineTo(T, 5),
            s.stroke(),
            s.textAlign = "right",
            s.textBaseline = "middle";
            for (var n = 0; n < p.steps; n++) s.beginPath(),
            s.moveTo(T - 3, E - (n + 1) * f),
            o.scaleShowGridLines ? (s.lineWidth = o.scaleGridLineWidth, s.strokeStyle = o.scaleGridLineColor, s.lineTo(T + S + 5, E - (n + 1) * f)) : s.lineTo(T - .5, E - (n + 1) * f),
            s.stroke(),
            o.scaleShowLabels && s.fillText(p.labels[n], T - 8, E - (n + 1) * f)
        }
        function c() {
            var t = 1;
            if (o.scaleShowLabels) {
                s.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily;
                for (var n = 0; n < p.labels.length; n++) {
                    var i = s.measureText(p.labels[n]).width;
                    t = i > t ? i: t
                }
                t += 10
            }
            S = m - t - C,
            x = Math.floor(S / e.labels.length),
            N = (x - 2 * o.scaleGridLineWidth - 2 * o.barValueSpacing - (o.barDatasetSpacing * e.datasets.length - 1) - (o.barStrokeWidth / 2 * e.datasets.length - 1)) / e.datasets.length,
            T = m - C / 2 - S,
            E = y + o.scaleFontSize / 2
        }
        function u() {
            h = g,
            s.font = o.scaleFontStyle + " " + o.scaleFontSize + "px " + o.scaleFontFamily,
            C = 1;
            for (var t = 0; t < e.labels.length; t++) {
                var n = s.measureText(e.labels[t]).width;
                C = n > C ? n: C
            }
            m / e.labels.length < C ? (_ = 45, m / e.labels.length < Math.cos(_) * C ? (_ = 90, h -= C) : h -= Math.sin(_) * C) : h -= o.scaleFontSize,
            h -= 5,
            v = o.scaleFontSize,
            h -= v,
            y = h
        }
        function d() {
            for (var t = Number.MIN_VALUE,
            n = Number.MAX_VALUE,
            i = 0; i < e.datasets.length; i++) for (var r = 0; r < e.datasets[i].data.length; r++) e.datasets[i].data[r] > t && (t = e.datasets[i].data[r]),
            e.datasets[i].data[r] < n && (n = e.datasets[i].data[r]);
            var o = Math.floor(y / (.66 * v)),
            s = Math.floor(y / v * .5);
            return {
                maxValue: t,
                minValue: n,
                maxSteps: o,
                minSteps: s
            }
        }
        var h, f, p, v, y, b, w, x, C, S, T, E, N, _ = 0;
        u(),
        b = d(),
        w = o.scaleShowLabels ? o.scaleLabel: "",
        o.scaleOverride ? (p = {
            steps: o.scaleSteps,
            stepValue: o.scaleStepWidth,
            graphMin: o.scaleStartValue,
            labels: []
        },
        r(w, p.labels, p.steps, o.scaleStartValue, o.scaleStepWidth)) : p = i(y, b.maxSteps, b.minSteps, b.maxValue, b.minValue, w),
        f = Math.floor(y / p.steps),
        c(),
        n(o, l, a, s)
    },
    T = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
        function(e) {
            window.setTimeout(e, 1e3 / 60)
        }
    } (),
    E = {}
},
function(e) {
    var t = {
        "toggle-selector": ".js-active-truncater-toggle",
        "scope-selector": ".js-active-truncater-scope:first",
        "active-class": "js-active-truncater-active",
        "initialized-class": "js-active-truncater-initialized"
    },
    n = {
        data: function(t) {
            return e(t).data("activeTruncater")
        }
    },
    i = {
        init: function(n) {
            return this.each(function() {
                var i = e(this),
                r = e.extend({},
                t, n);
                if (void 0 === i.data("activeTruncater")) {
                    var o = i.data("activeTruncater", {
                        settings: r,
                        $that: i
                    }).data("activeTruncater");
                    o.$that.on("click.activeTruncater", o.settings["toggle-selector"],
                    function(t) {
                        t.preventDefault(),
                        e(this).parents(o.settings["scope-selector"]).toggleClass(o.settings["active-class"])
                    }).on("focus.activeTruncater", "a",
                    function() {
                        e(this).parents(o.settings["scope-selector"]).addClass(o.settings["active-class"])
                    }).addClass(o.settings["initialized-class"]),
                    e(window).bind("activePager.loaded",
                    function() {
                        o.$that.activeTruncater("activateIfInHash")
                    }),
                    o.$that.activeTruncater("activateIfInHash")
                }
            })
        },
        activateIfInHash: function() {
            return this.each(function() {
                var e = n.data(this);
                if (window.location.hash) {
                    var t = e.$that.find(window.location.hash);
                    t.length && t.parents(e.settings["scope-selector"]).addClass(e.settings["active-class"])
                }
            })
        },
        destroy: function() {
            return this.each(function() {
                var e = n.data(this);
                e && e.$that.off(".activeTruncater").removeClass(e.settings["initialized-class"]).removeData("activeTruncater")
            })
        }
    };
    e.fn.activeTruncater = function(t) {
        return i[t] ? i[t].apply(this, Array.prototype.slice.call(arguments, 1)) : "object" != typeof t && t ? (e.error("Method " + t + " does not exist on jQuery.activeTruncater"), void 0) : i.init.apply(this, arguments)
    }
} (jQuery),
function(e, t) {
    var n = {
        name: "GaTracker",
        "selector-attr": "data-gat",
        timeout: 500,
        initialized: !1
    },
    i = {
        trackLink: function(t, i) {
            var r = t ? t: e.event,
            s = r.target || r.srcElement,
            a = {}; (i.href || s.href) && (a.href = i.href || s.href, 0 !== r.button || r.ctrlKey || r.metaKey ? a["skip-pageload"] = !0 : r.preventDefault ? r.preventDefault() : r.returnValue = !1),
            a.args = o.parseArgs(i, n["selector-attr"]),
            o.track(a)
        },
        pathMatcher: function(n) {
            return function(i) {
                var r = function(e) {
                    return "object" == typeof e && !!e.attributes && n.criteria(e)
                },
                o = i ? i: e.event,
                s = o.target || o.srcElement;
                if (r(s)) n.handler(o, s);
                else {
                    var a = [];
                    if (o.path) a = event.path;
                    else for (var l = s; l !== t;) a.push(l),
                    l = l.parentNode;
                    for (var c = 0; c < a.length; c++) r(a[c]) && n.handler(o, a[c])
                }
            }
        },
        createEventListener: function() {
            var e = arguments,
            n = t;
            "object" == typeof e[0] && (n = e[0], e = e.slice(1)),
            t.addEventListener ? n.addEventListener(e[0], e[1]) : t.attachEvent && n.attachEvent("on" + e[0], e[1])
        }
    },
    r = {
        initialize: function() {
            n.initialized || (n.initialized = !0, i.createEventListener("click", i.pathMatcher({
                criteria: function(e) {
                    return !! e.attributes[n["selector-attr"]]
                },
                handler: i.trackLink
            })))
        },
        track: function(t) {
            function i() {
                o.callback ? o.callback.apply(this, o["callback-arguments"]) : o.href && !o["skip-pageload"] && (document.location.href = o.href),
                clearTimeout(l)
            }
            var r = [],
            o = "object" != typeof t || t.length ? {}: t;
            o.args && o.args.length && ("object" == typeof o.args[0] && o.args[0].length ? r = o.args: r.push(o.args));
            var s = Array.prototype.slice.call(arguments, o !== t ? 0 : 1);
            if (s && s.length) if ("object" == typeof s[0] && s[0].length) for (var a = 0; a < s.length; a++) r.push(s[a]);
            else r.push(s);
            var l = setTimeout(i, n.timeout);
            if (e.ga && ga.hasOwnProperty("loaded") && ga.loaded === !0 && r.length) for (var a = 0; a < r.length; a++) {
                var c = r[a];
                a === r.length - 1 && ("object" == typeof c[c.length - 1] ? c[c.length - 1].hasOwnProperty("hitCallback") || (c[c.length - 1].hitCallback = i) : c.push({
                    hitCallback: i
                })),
                ga.apply(this, c)
            } else i()
        },
        parseArgs: function(e, t) {
            var n = null,
            i = e.attributes[t].value;
            if (i && "object" == typeof JSON && "function" == typeof JSON.parse) try {
                n = JSON.parse(i)
            } catch(r) {
                i.match(/(^\"[^\"]+?\"\s*\,\s*\"|^\"[^\"]+\"$)/) && (n = i.replace(/^\s*\"|\"\s*$/g, "").split(/\"\s*\,\s*\"/))
            }
            return n
        }
    };
    if (!e[n.name]) {
        var o = n.self = e[n.name] = r;
        "loading" !== document.readyState ? setTimeout(o.initialize, 1) : (i.createEventListener("DOMContentLoaded", o.initialize), i.createEventListener("load", o.initialize))
    }
} (window, document),
function(e) {
    e(function() {
        var t = e(window);
        e.activePager(),
        e.activeTooltip({
            "content-attr-rename": "data-active-tooltip"
        }),
        e(document.documentElement).activeTruncater(),
        t.bind("activePager.loaded",
        function(t) {
            if (e.activeTooltip("rename_content_attr"), e.activeTooltip("mouseleave"), "number" == typeof Baymard.state["mouse-y"] && "number" == typeof Baymard.state["mouse-x"]) {
                var n = e.activeTooltip("data");
                e(n.settings["targets-selector"]).each(function() {
                    var t = e(this);
                    Baymard.state["mouse-y"] > t.offset().top && Baymard.state["mouse-y"] < t.offset().top + t.outerHeight() && Baymard.state["mouse-x"] > t.offset().left && Baymard.state["mouse-x"] < t.offset().left + t.outerWidth() && (n.$recipient = e(this), e.activeTooltip("mouseenter"))
                })
            }
            e("body > .header").springBox("close", t).find(".account > .spring-box, .research-topics > .spring-box, .products > .spring-box").springBox("close", t);
            var i = e("body > .header .research-topics > .spring-box");
            if (i.length) {
                var r = i.find(".spring-box-content .selected-current");
                r.length && r.filter(":first").attr("href") !== i.find(".spring-box-link:first").attr("href") ? i.children(".spring-box-link").addClass("selected-parent") : i.children(".spring-box-link").removeClass("selected-parent")
            }
            var o = e("body > .header .products > .spring-box");
            o.length && (o.find(".spring-box-content .selected-current").length ? o.children(".spring-box-link").addClass("selected-parent") : o.children(".spring-box-link").removeClass("selected-parent"))
        }),
        setTimeout(Baymard.plugins.twitter.loadScript, 200),
        Baymard.dom["$active-overlay"] = e("body > .active-overlay").activeOverlay()
    })
} (jQuery);