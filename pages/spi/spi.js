! function(a) {
    "use strict";

    function b(a) {
        this.owner = a
    }

    function c(a, b) {
        if (Object.create) b.prototype = Object.create(a.prototype);
        else {
            var c = function() {};
            c.prototype = a.prototype, b.prototype = new c
        }
        return b.prototype.constructor = b, b
    }

    function d(a) {
        var b = this.internal = new e(this);
        b.loadConfig(a), b.init(),
            function c(a, b, d) {
                Object.keys(a).forEach(function(e) {
                    b[e] = a[e].bind(d), Object.keys(a[e]).length > 0 && c(a[e], b[e], d)
                })
            }(h, this, this)
    }

    function e(b) {
        var c = this;
        c.d3 = a.d3 ? a.d3 : "undefined" != typeof require ? require("d3") : void 0, c.api = b, c.config = c.getDefaultConfig(), c.data = {}, c.cache = {}, c.axes = {}
    }

    function f(a) {
        b.call(this, a)
    }

    function g(a, b) {
        function c(a, b) {
            a.attr("transform", function(a) {
                return "translate(" + Math.ceil(b(a) + u) + ", 0)"
            })
        }

        function d(a, b) {
            a.attr("transform", function(a) {
                return "translate(0," + Math.ceil(b(a)) + ")"
            })
        }

        function e(a) {
            var b = a[0],
                c = a[a.length - 1];
            return c > b ? [b, c] : [c, b]
        }

        function f(a) {
            var b, c, d = [];
            if (a.ticks) return a.ticks.apply(a, n);
            for (c = a.domain(), b = Math.ceil(c[0]); b < c[1]; b++) d.push(b);
            return d.length > 0 && d[0] > 0 && d.unshift(d[0] - (d[1] - d[0])), d
        }

        function g() {
            var a, c = p.copy();
            return b.isCategory && (a = p.domain(), c.domain([a[0], a[1] - 1])), c
        }

        function h(a) {
            var b = m ? m(a) : a;
            return "undefined" != typeof b ? b : ""
        }

        function i(a) {
            if (z) return z;
            var b = {
                h: 11.5,
                w: 5.5
            };
            return a.select("text").text(h).each(function(a) {
                var c = this.getBoundingClientRect(),
                    d = h(a),
                    e = c.height,
                    f = d ? c.width / d.length : void 0;
                e && f && (b.h = e, b.w = f)
            }).text(""), z = b, b
        }

        function j(c) {
            return b.withoutTransition ? c : a.transition(c)
        }

        function k(m) {
            m.each(function() {
                function m(a, c) {
                    function d(a, b) {
                        f = void 0;
                        for (var h = 1; h < b.length; h++)
                            if (" " === b.charAt(h) && (f = h), e = b.substr(0, h + 1), g = U.w * e.length, g > c) return d(a.concat(b.substr(0, f ? f : h)), b.slice(f ? f + 1 : h));
                        return a.concat(b)
                    }
                    var e, f, g, i = h(a),
                        j = [];
                    return "[object Array]" === Object.prototype.toString.call(i) ? i : ((!c || 0 >= c) && (c = X ? 95 : b.isCategory ? Math.ceil(F(G[1]) - F(G[0])) - 12 : 110), d(j, i + ""))
                }

                function n(a, b) {
                    var c = U.h;
                    return 0 === b && (c = "left" === q || "right" === q ? -((V[a.index] - 1) * (U.h / 2) - 3) : ".71em"), c
                }

                function v(a) {
                    var b = p(a) + (o ? 0 : u);
                    return L[0] < b && b < L[1] ? r : 0
                }

                function w(a) {
                    return a ? a > 0 ? "start" : "end" : "middle"
                }

                function x(a) {
                    return a ? "rotate(" + a + ")" : ""
                }

                function y(a) {
                    return a ? 8 * Math.sin(Math.PI * (a / 180)) : 0
                }

                function z(a) {
                    return a ? 11.5 - 2.5 * (a / 15) * (a > 0 ? 1 : -1) : W
                }
                var A, B, C, D = k.g = a.select(this),
                    E = this.__chart__ || p,
                    F = this.__chart__ = g(),
                    G = t ? t : f(F),
                    H = D.selectAll(".tick").data(G, F),
                    I = H.enter().insert("g", ".domain").attr("class", "tick").style("opacity", 1e-6),
                    J = H.exit().remove(),
                    K = j(H).style("opacity", 1),
                    L = p.rangeExtent ? p.rangeExtent() : e(p.range()),
                    M = D.selectAll(".domain").data([0]),
                    N = (M.enter().append("path").attr("class", "domain"), j(M));
                I.append("line"), I.append("text");
                var O = I.select("line"),
                    P = K.select("line"),
                    Q = I.select("text"),
                    R = K.select("text");
                b.isCategory ? (u = Math.ceil((F(1) - F(0)) / 2), B = o ? 0 : u, C = o ? u : 0) : u = B = 0;
                var S, T, U = i(D.select(".tick")),
                    V = [],
                    W = Math.max(r, 0) + s,
                    X = "left" === q || "right" === q;
                S = H.select("text"), T = S.selectAll("tspan").data(function(a, c) {
                    var d = b.tickMultiline ? m(a, b.tickWidth) : [].concat(h(a));
                    return V[c] = d.length, d.map(function(a) {
                        return {
                            index: c,
                            splitted: a
                        }
                    })
                }), T.enter().append("tspan"), T.exit().remove(), T.text(function(a) {
                    return a.splitted
                });
                var Y = b.tickTextRotate;
                switch (q) {
                    case "bottom":
                        A = c, O.attr("y2", r), Q.attr("y", W), P.attr("x1", B).attr("x2", B).attr("y2", v), R.attr("x", 0).attr("y", z(Y)).style("text-anchor", w(Y)).attr("transform", x(Y)), T.attr("x", 0).attr("dy", n).attr("dx", y(Y)), N.attr("d", "M" + L[0] + "," + l + "V0H" + L[1] + "V" + l);
                        break;
                    case "top":
                        A = c, O.attr("y2", -r), Q.attr("y", -W), P.attr("x2", 0).attr("y2", -r), R.attr("x", 0).attr("y", -W), S.style("text-anchor", "middle"), T.attr("x", 0).attr("dy", "0em"), N.attr("d", "M" + L[0] + "," + -l + "V0H" + L[1] + "V" + -l);
                        break;
                    case "left":
                        A = d, O.attr("x2", -r), Q.attr("x", -W), P.attr("x2", -r).attr("y1", C).attr("y2", C), R.attr("x", -W).attr("y", u), S.style("text-anchor", "end"), T.attr("x", -W).attr("dy", n), N.attr("d", "M" + -l + "," + L[0] + "H0V" + L[1] + "H" + -l);
                        break;
                    case "right":
                        A = d, O.attr("x2", r), Q.attr("x", W), P.attr("x2", r).attr("y2", 0), R.attr("x", W).attr("y", 0), S.style("text-anchor", "start"), T.attr("x", W).attr("dy", n), N.attr("d", "M" + l + "," + L[0] + "H0V" + L[1] + "H" + l)
                }
                if (F.rangeBand) {
                    var Z = F,
                        $ = Z.rangeBand() / 2;
                    E = F = function(a) {
                        return Z(a) + $
                    }
                } else E.rangeBand ? E = F : J.call(A, F);
                I.call(A, E), K.call(A, F)
            })
        }
        var l, m, n, o, p = a.scale.linear(),
            q = "bottom",
            r = 6,
            s = 3,
            t = null,
            u = 0,
            v = !0;
        return b = b || {}, l = b.withOuterTick ? 6 : 0, k.scale = function(a) {
            return arguments.length ? (p = a, k) : p
        }, k.orient = function(a) {
            return arguments.length ? (q = a in {
                top: 1,
                right: 1,
                bottom: 1,
                left: 1
            } ? a + "" : "bottom", k) : q
        }, k.tickFormat = function(a) {
            return arguments.length ? (m = a, k) : m
        }, k.tickCentered = function(a) {
            return arguments.length ? (o = a, k) : o
        }, k.tickOffset = function() {
            return u
        }, k.tickInterval = function() {
            var a, c;
            return b.isCategory ? a = 2 * u : (c = k.g.select("path.domain").node().getTotalLength() - 2 * l, a = c / k.g.selectAll("line").size()), 1 / 0 === a ? 0 : a
        }, k.ticks = function() {
            return arguments.length ? (n = arguments, k) : n
        }, k.tickCulling = function(a) {
            return arguments.length ? (v = a, k) : v
        }, k.tickValues = function(a) {
            if ("function" == typeof a) t = function() {
                return a(p.domain())
            };
            else {
                if (!arguments.length) return t;
                t = a
            }
            return k
        }, k
    }
    var h, i, j, k = {
        version: "0.4.10"
    };
    k.generate = function(a) {
        return new d(a)
    }, k.chart = {
        fn: d.prototype,
        internal: {
            fn: e.prototype,
            axis: {
                fn: f.prototype
            }
        }
    }, h = k.chart.fn, i = k.chart.internal.fn, j = k.chart.internal.axis.fn, i.init = function() {
        var a = this,
            b = a.config;
        if (a.initParams(), b.data_url) a.convertUrlToData(b.data_url, b.data_mimeType, b.data_keys, a.initWithData);
        else if (b.data_json) a.initWithData(a.convertJsonToData(b.data_json, b.data_keys));
        else if (b.data_rows) a.initWithData(a.convertRowsToData(b.data_rows));
        else {
            if (!b.data_columns) throw Error("url or json or rows or columns is required.");
            a.initWithData(a.convertColumnsToData(b.data_columns))
        }
    }, i.initParams = function() {
        var a = this,
            b = a.d3,
            c = a.config;
        a.clipId = "c3-" + +new Date + "-clip", a.clipIdForXAxis = a.clipId + "-xaxis", a.clipIdForYAxis = a.clipId + "-yaxis", a.clipIdForGrid = a.clipId + "-grid", a.clipIdForSubchart = a.clipId + "-subchart", a.clipPath = a.getClipPath(a.clipId), a.clipPathForXAxis = a.getClipPath(a.clipIdForXAxis), a.clipPathForYAxis = a.getClipPath(a.clipIdForYAxis), a.clipPathForGrid = a.getClipPath(a.clipIdForGrid), a.clipPathForSubchart = a.getClipPath(a.clipIdForSubchart), a.dragStart = null, a.dragging = !1, a.flowing = !1, a.cancelClick = !1, a.mouseover = !1, a.transiting = !1, a.color = a.generateColor(), a.levelColor = a.generateLevelColor(), a.dataTimeFormat = c.data_xLocaltime ? b.time.format : b.time.format.utc, a.axisTimeFormat = c.axis_x_localtime ? b.time.format : b.time.format.utc, a.defaultAxisTimeFormat = a.axisTimeFormat.multi([
            [".%L", function(a) {
                return a.getMilliseconds()
            }],
            [":%S", function(a) {
                return a.getSeconds()
            }],
            ["%I:%M", function(a) {
                return a.getMinutes()
            }],
            ["%I %p", function(a) {
                return a.getHours()
            }],
            ["%-m/%-d", function(a) {
                return a.getDay() && 1 !== a.getDate()
            }],
            ["%-m/%-d", function(a) {
                return 1 !== a.getDate()
            }],
            ["%-m/%-d", function(a) {
                return a.getMonth()
            }],
            ["%Y/%-m/%-d", function() {
                return !0
            }]
        ]), a.hiddenTargetIds = [], a.hiddenLegendIds = [], a.focusedTargetIds = [], a.defocusedTargetIds = [], a.xOrient = c.axis_rotated ? "left" : "bottom", a.yOrient = c.axis_rotated ? c.axis_y_inner ? "top" : "bottom" : c.axis_y_inner ? "right" : "left", a.y2Orient = c.axis_rotated ? c.axis_y2_inner ? "bottom" : "top" : c.axis_y2_inner ? "left" : "right", a.subXOrient = c.axis_rotated ? "left" : "bottom", a.isLegendRight = "right" === c.legend_position, a.isLegendInset = "inset" === c.legend_position, a.isLegendTop = "top-left" === c.legend_inset_anchor || "top-right" === c.legend_inset_anchor, a.isLegendLeft = "top-left" === c.legend_inset_anchor || "bottom-left" === c.legend_inset_anchor, a.legendStep = 0, a.legendItemWidth = 0, a.legendItemHeight = 0, a.currentMaxTickWidths = {
            x: 0,
            y: 0,
            y2: 0
        }, a.rotated_padding_left = 30, a.rotated_padding_right = c.axis_rotated && !c.axis_x_show ? 0 : 30, a.rotated_padding_top = 5, a.withoutFadeIn = {}, a.intervalForObserveInserted = void 0, a.axes.subx = b.selectAll([])
    }, i.initChartElements = function() {
        this.initBar && this.initBar(), this.initLine && this.initLine(), this.initArc && this.initArc(), this.initGauge && this.initGauge(), this.initText && this.initText()
    }, i.initWithData = function(b) {
        var c, d, e = this,
            g = e.d3,
            h = e.config,
            i = !0;
        e.axis = new f(e), e.initPie && e.initPie(), e.initBrush && e.initBrush(), e.initZoom && e.initZoom(), e.selectChart = h.bindto ? "function" == typeof h.bindto.node ? h.bindto : g.select(h.bindto) : g.selectAll([]), e.selectChart.empty() && (e.selectChart = g.select(document.createElement("div")).style("opacity", 0), e.observeInserted(e.selectChart), i = !1), e.selectChart.html("").classed("c3", !0), e.data.xs = {}, e.data.targets = e.convertDataToTargets(b), h.data_filter && (e.data.targets = e.data.targets.filter(h.data_filter)), h.data_hide && e.addHiddenTargetIds(h.data_hide === !0 ? e.mapToIds(e.data.targets) : h.data_hide), h.legend_hide && e.addHiddenLegendIds(h.legend_hide === !0 ? e.mapToIds(e.data.targets) : h.legend_hide), e.hasType("gauge") && (h.legend_show = !1), e.updateSizes(), e.updateScales(), e.x.domain(g.extent(e.getXDomain(e.data.targets))), e.y.domain(e.getYDomain(e.data.targets, "y")), e.y2.domain(e.getYDomain(e.data.targets, "y2")), e.subX.domain(e.x.domain()), e.subY.domain(e.y.domain()), e.subY2.domain(e.y2.domain()), e.orgXDomain = e.x.domain(), e.brush && e.brush.scale(e.subX), h.zoom_enabled && e.zoom.scale(e.x), e.svg = e.selectChart.append("svg").style("overflow", "hidden").on("mouseenter", function() {
            return h.onmouseover.call(e)
        }).on("mouseleave", function() {
            return h.onmouseout.call(e)
        }), c = e.svg.append("defs"), e.clipChart = e.appendClip(c, e.clipId), e.clipXAxis = e.appendClip(c, e.clipIdForXAxis), e.clipYAxis = e.appendClip(c, e.clipIdForYAxis), e.clipGrid = e.appendClip(c, e.clipIdForGrid), e.clipSubchart = e.appendClip(c, e.clipIdForSubchart), e.updateSvgSize(), d = e.main = e.svg.append("g").attr("transform", e.getTranslate("main")), e.initSubchart && e.initSubchart(), e.initTooltip && e.initTooltip(), e.initLegend && e.initLegend(), d.append("text").attr("class", l.text + " " + l.empty).attr("text-anchor", "middle").attr("dominant-baseline", "middle"), e.initRegion(), e.initGrid(), d.append("g").attr("clip-path", e.clipPath).attr("class", l.chart), h.grid_lines_front && e.initGridLines(), e.initEventRect(), e.initChartElements(), d.insert("rect", h.zoom_privileged ? null : "g." + l.regions).attr("class", l.zoomRect).attr("width", e.width).attr("height", e.height).style("opacity", 0).on("dblclick.zoom", null), h.axis_x_extent && e.brush.extent(e.getDefaultExtent()), e.axis.init(), e.updateTargets(e.data.targets), i && (e.updateDimension(), e.config.oninit.call(e), e.redraw({
            withTransition: !1,
            withTransform: !0,
            withUpdateXDomain: !0,
            withUpdateOrgXDomain: !0,
            withTransitionForAxis: !1
        })), null == a.onresize && (a.onresize = e.generateResize()), a.onresize.add && (a.onresize.add(function() {
            h.onresize.call(e)
        }), a.onresize.add(function() {
            e.api.flush()
        }), a.onresize.add(function() {
            h.onresized.call(e)
        })), e.api.element = e.selectChart.node()
    }, i.smoothLines = function(a, b) {
        var c = this;
        "grid" === b && a.each(function() {
            var a = c.d3.select(this),
                b = a.attr("x1"),
                d = a.attr("x2"),
                e = a.attr("y1"),
                f = a.attr("y2");
            a.attr({
                x1: Math.ceil(b),
                x2: Math.ceil(d),
                y1: Math.ceil(e),
                y2: Math.ceil(f)
            })
        })
    }, i.updateSizes = function() {
        var a = this,
            b = a.config,
            c = a.legend ? a.getLegendHeight() : 0,
            d = a.legend ? a.getLegendWidth() : 0,
            e = a.isLegendRight || a.isLegendInset ? 0 : c,
            f = a.hasArcType(),
            g = b.axis_rotated || f ? 0 : a.getHorizontalAxisHeight("x"),
            h = b.subchart_show && !f ? b.subchart_size_height + g : 0;
        a.currentWidth = a.getCurrentWidth(), a.currentHeight = a.getCurrentHeight(), a.margin = b.axis_rotated ? {
            top: a.getHorizontalAxisHeight("y2") + a.getCurrentPaddingTop(),
            right: f ? 0 : a.getCurrentPaddingRight(),
            bottom: a.getHorizontalAxisHeight("y") + e + a.getCurrentPaddingBottom(),
            left: h + (f ? 0 : a.getCurrentPaddingLeft())
        } : {
            top: 4 + a.getCurrentPaddingTop(),
            right: f ? 0 : a.getCurrentPaddingRight(),
            bottom: g + h + e + a.getCurrentPaddingBottom(),
            left: f ? 0 : a.getCurrentPaddingLeft()
        }, a.margin2 = b.axis_rotated ? {
            top: a.margin.top,
            right: NaN,
            bottom: 20 + e,
            left: a.rotated_padding_left
        } : {
            top: a.currentHeight - h - e,
            right: NaN,
            bottom: g + e,
            left: a.margin.left
        }, a.margin3 = {
            top: 0,
            right: NaN,
            bottom: 0,
            left: 0
        }, a.updateSizeForLegend && a.updateSizeForLegend(c, d), a.width = a.currentWidth - a.margin.left - a.margin.right, a.height = a.currentHeight - a.margin.top - a.margin.bottom, a.width < 0 && (a.width = 0), a.height < 0 && (a.height = 0), a.width2 = b.axis_rotated ? a.margin.left - a.rotated_padding_left - a.rotated_padding_right : a.width, a.height2 = b.axis_rotated ? a.height : a.currentHeight - a.margin2.top - a.margin2.bottom, a.width2 < 0 && (a.width2 = 0), a.height2 < 0 && (a.height2 = 0), a.arcWidth = a.width - (a.isLegendRight ? d + 10 : 0), a.arcHeight = a.height - (a.isLegendRight ? 0 : 10), a.hasType("gauge") && (a.arcHeight += a.height - a.getGaugeLabelHeight()), a.updateRadius && a.updateRadius(), a.isLegendRight && f && (a.margin3.left = a.arcWidth / 2 + 1.1 * a.radiusExpanded)
    }, i.updateTargets = function(a) {
        var b = this;
        b.updateTargetsForText(a), b.updateTargetsForBar(a), b.updateTargetsForLine(a), b.hasArcType() && b.updateTargetsForArc && b.updateTargetsForArc(a), b.updateTargetsForSubchart && b.updateTargetsForSubchart(a), b.showTargets()
    }, i.showTargets = function() {
        var a = this;
        a.svg.selectAll("." + l.target).filter(function(b) {
            return a.isTargetToShow(b.id)
        }).transition().duration(a.config.transition_duration).style("opacity", 1)
    }, i.redraw = function(a, b) {
        var c, d, e, f, g, h, i, j, k, m, n, o, p, q, r, s, t, u, v, x, y, z, A, B, C, D, E, F, G, H = this,
            I = H.main,
            J = H.d3,
            K = H.config,
            L = H.getShapeIndices(H.isAreaType),
            M = H.getShapeIndices(H.isBarType),
            N = H.getShapeIndices(H.isLineType),
            O = H.hasArcType(),
            P = H.filterTargetsToShow(H.data.targets),
            Q = H.xv.bind(H);
        if (a = a || {}, c = w(a, "withY", !0), d = w(a, "withSubchart", !0), e = w(a, "withTransition", !0), h = w(a, "withTransform", !1), i = w(a, "withUpdateXDomain", !1), j = w(a, "withUpdateOrgXDomain", !1), k = w(a, "withTrimXDomain", !0), p = w(a, "withUpdateXAxis", i), m = w(a, "withLegend", !1), n = w(a, "withEventRect", !0), o = w(a, "withDimension", !0), f = w(a, "withTransitionForExit", e), g = w(a, "withTransitionForAxis", e), v = e ? K.transition_duration : 0, x = f ? v : 0, y = g ? v : 0, b = b || H.axis.generateTransitions(y), m && K.legend_show ? H.updateLegend(H.mapToIds(H.data.targets), a, b) : o && H.updateDimension(!0), H.isCategorized() && 0 === P.length && H.x.domain([0, H.axes.x.selectAll(".tick").size()]), P.length ? (H.updateXDomain(P, i, j, k), K.axis_x_tick_values || (B = H.axis.updateXAxisTickValues(P))) : (H.xAxis.tickValues([]), H.subXAxis.tickValues([])), K.zoom_rescale && !a.flow && (E = H.x.orgDomain()), H.y.domain(H.getYDomain(P, "y", E)), H.y2.domain(H.getYDomain(P, "y2", E)), !K.axis_y_tick_values && K.axis_y_tick_count && H.yAxis.tickValues(H.axis.generateTickValues(H.y.domain(), K.axis_y_tick_count)), !K.axis_y2_tick_values && K.axis_y2_tick_count && H.y2Axis.tickValues(H.axis.generateTickValues(H.y2.domain(), K.axis_y2_tick_count)), H.axis.redraw(b, O), H.axis.updateLabels(e), (i || p) && P.length)
            if (K.axis_x_tick_culling && B) {
                for (C = 1; C < B.length; C++)
                    if (B.length / C < K.axis_x_tick_culling_max) {
                        D = C;
                        break
                    }
                H.svg.selectAll("." + l.axisX + " .tick text").each(function(a) {
                    var b = B.indexOf(a);
                    b >= 0 && J.select(this).style("display", b % D ? "none" : "block")
                })
            } else H.svg.selectAll("." + l.axisX + " .tick text").style("display", "block");
        q = H.generateDrawArea ? H.generateDrawArea(L, !1) : void 0, r = H.generateDrawBar ? H.generateDrawBar(M) : void 0, s = H.generateDrawLine ? H.generateDrawLine(N, !1) : void 0, t = H.generateXYForText(L, M, N, !0), u = H.generateXYForText(L, M, N, !1), c && (H.subY.domain(H.getYDomain(P, "y")), H.subY2.domain(H.getYDomain(P, "y2"))), H.tooltip.style("display", "none"), H.updateXgridFocus(), I.select("text." + l.text + "." + l.empty).attr("x", H.width / 2).attr("y", H.height / 2).text(K.data_empty_label_text).transition().style("opacity", P.length ? 0 : 1), H.updateGrid(v), H.updateRegion(v), H.updateBar(x), H.updateLine(x), H.updateArea(x), H.updateCircle(), H.hasDataLabel() && H.updateText(x), H.redrawArc && H.redrawArc(v, x, h), H.redrawSubchart && H.redrawSubchart(d, b, v, x, L, M, N), I.selectAll("." + l.selectedCircles).filter(H.isBarType.bind(H)).selectAll("circle").remove(), K.interaction_enabled && !a.flow && n && (H.redrawEventRect(), H.updateZoom && H.updateZoom()), H.updateCircleY(), F = (H.config.axis_rotated ? H.circleY : H.circleX).bind(H), G = (H.config.axis_rotated ? H.circleX : H.circleY).bind(H), a.flow && (A = H.generateFlow({
            targets: P,
            flow: a.flow,
            duration: a.flow.duration,
            drawBar: r,
            drawLine: s,
            drawArea: q,
            cx: F,
            cy: G,
            xv: Q,
            xForText: t,
            yForText: u
        })), (v || A) && H.isTabVisible() ? J.transition().duration(v).each(function() {
            var b = [];
            [H.redrawBar(r, !0), H.redrawLine(s, !0), H.redrawArea(q, !0), H.redrawCircle(F, G, !0), H.redrawText(t, u, a.flow, !0), H.redrawRegion(!0), H.redrawGrid(!0)].forEach(function(a) {
                a.forEach(function(a) {
                    b.push(a)
                })
            }), z = H.generateWait(), b.forEach(function(a) {
                z.add(a)
            })
        }).call(z, function() {
            A && A(), K.onrendered && K.onrendered.call(H)
        }) : (H.redrawBar(r), H.redrawLine(s), H.redrawArea(q), H.redrawCircle(F, G), H.redrawText(t, u, a.flow), H.redrawRegion(), H.redrawGrid(), K.onrendered && K.onrendered.call(H)), H.mapToIds(H.data.targets).forEach(function(a) {
            H.withoutFadeIn[a] = !0
        })
    }, i.updateAndRedraw = function(a) {
        var b, c = this,
            d = c.config;
        a = a || {}, a.withTransition = w(a, "withTransition", !0), a.withTransform = w(a, "withTransform", !1), a.withLegend = w(a, "withLegend", !1), a.withUpdateXDomain = !0, a.withUpdateOrgXDomain = !0, a.withTransitionForExit = !1, a.withTransitionForTransform = w(a, "withTransitionForTransform", a.withTransition), c.updateSizes(), a.withLegend && d.legend_show || (b = c.axis.generateTransitions(a.withTransitionForAxis ? d.transition_duration : 0), c.updateScales(), c.updateSvgSize(), c.transformAll(a.withTransitionForTransform, b)), c.redraw(a, b)
    }, i.redrawWithoutRescale = function() {
        this.redraw({
            withY: !1,
            withSubchart: !1,
            withEventRect: !1,
            withTransitionForAxis: !1
        })
    }, i.isTimeSeries = function() {
        return "timeseries" === this.config.axis_x_type
    }, i.isCategorized = function() {
        return this.config.axis_x_type.indexOf("categor") >= 0
    }, i.isCustomX = function() {
        var a = this,
            b = a.config;
        return !a.isTimeSeries() && (b.data_x || v(b.data_xs))
    }, i.isTimeSeriesY = function() {
        return "timeseries" === this.config.axis_y_type
    }, i.getTranslate = function(a) {
        var b, c, d = this,
            e = d.config;
        return "main" === a ? (b = s(d.margin.left), c = s(d.margin.top)) : "context" === a ? (b = s(d.margin2.left), c = s(d.margin2.top)) : "legend" === a ? (b = d.margin3.left, c = d.margin3.top) : "x" === a ? (b = 0, c = e.axis_rotated ? 0 : d.height) : "y" === a ? (b = 0, c = e.axis_rotated ? d.height : 0) : "y2" === a ? (b = e.axis_rotated ? 0 : d.width, c = e.axis_rotated ? 1 : 0) : "subx" === a ? (b = 0, c = e.axis_rotated ? 0 : d.height2) : "arc" === a && (b = d.arcWidth / 2, c = d.arcHeight / 2), "translate(" + b + "," + c + ")"
    }, i.initialOpacity = function(a) {
        return null !== a.value && this.withoutFadeIn[a.id] ? 1 : 0
    }, i.initialOpacityForCircle = function(a) {
        return null !== a.value && this.withoutFadeIn[a.id] ? this.opacityForCircle(a) : 0
    }, i.opacityForCircle = function(a) {
        var b = this.config.point_show ? 1 : 0;
        return m(a.value) ? this.isScatterType(a) ? .5 : b : 0
    }, i.opacityForText = function() {
        return this.hasDataLabel() ? 1 : 0
    }, i.xx = function(a) {
        return a ? this.x(a.x) : null
    }, i.xv = function(a) {
        var b = this,
            c = a.value;
        return b.isTimeSeries() ? c = b.parseDate(a.value) : b.isCategorized() && "string" == typeof a.value && (c = b.config.axis_x_categories.indexOf(a.value)), Math.ceil(b.x(c))
    }, i.yv = function(a) {
        var b = this,
            c = a.axis && "y2" === a.axis ? b.y2 : b.y;
        return Math.ceil(c(a.value))
    }, i.subxx = function(a) {
        return a ? this.subX(a.x) : null
    }, i.transformMain = function(a, b) {
        var c, d, e, f = this;
        b && b.axisX ? c = b.axisX : (c = f.main.select("." + l.axisX), a && (c = c.transition())), b && b.axisY ? d = b.axisY : (d = f.main.select("." + l.axisY), a && (d = d.transition())), b && b.axisY2 ? e = b.axisY2 : (e = f.main.select("." + l.axisY2), a && (e = e.transition())), (a ? f.main.transition() : f.main).attr("transform", f.getTranslate("main")), c.attr("transform", f.getTranslate("x")), d.attr("transform", f.getTranslate("y")), e.attr("transform", f.getTranslate("y2")), f.main.select("." + l.chartArcs).attr("transform", f.getTranslate("arc"))
    }, i.transformAll = function(a, b) {
        var c = this;
        c.transformMain(a, b), c.config.subchart_show && c.transformContext(a, b), c.legend && c.transformLegend(a)
    }, i.updateSvgSize = function() {
        var a = this,
            b = a.svg.select(".c3-brush .background");
        a.svg.attr("width", a.currentWidth).attr("height", a.currentHeight), a.svg.selectAll(["#" + a.clipId, "#" + a.clipIdForGrid]).select("rect").attr("width", a.width).attr("height", a.height), a.svg.select("#" + a.clipIdForXAxis).select("rect").attr("x", a.getXAxisClipX.bind(a)).attr("y", a.getXAxisClipY.bind(a)).attr("width", a.getXAxisClipWidth.bind(a)).attr("height", a.getXAxisClipHeight.bind(a)), a.svg.select("#" + a.clipIdForYAxis).select("rect").attr("x", a.getYAxisClipX.bind(a)).attr("y", a.getYAxisClipY.bind(a)).attr("width", a.getYAxisClipWidth.bind(a)).attr("height", a.getYAxisClipHeight.bind(a)), a.svg.select("#" + a.clipIdForSubchart).select("rect").attr("width", a.width).attr("height", b.size() ? b.attr("height") : 0), a.svg.select("." + l.zoomRect).attr("width", a.width).attr("height", a.height), a.selectChart.style("max-height", a.currentHeight + "px")
    }, i.updateDimension = function(a) {
        var b = this;
        a || (b.config.axis_rotated ? (b.axes.x.call(b.xAxis), b.axes.subx.call(b.subXAxis)) : (b.axes.y.call(b.yAxis), b.axes.y2.call(b.y2Axis))), b.updateSizes(), b.updateScales(), b.updateSvgSize(), b.transformAll(!1)
    }, i.observeInserted = function(b) {
        var c, d = this;
        return "undefined" == typeof MutationObserver ? void a.console.error("MutationObserver not defined.") : (c = new MutationObserver(function(e) {
            e.forEach(function(e) {
                "childList" === e.type && e.previousSibling && (c.disconnect(), d.intervalForObserveInserted = a.setInterval(function() {
                    b.node().parentNode && (a.clearInterval(d.intervalForObserveInserted), d.updateDimension(), d.config.oninit.call(d), d.redraw({
                        withTransform: !0,
                        withUpdateXDomain: !0,
                        withUpdateOrgXDomain: !0,
                        withTransition: !1,
                        withTransitionForTransform: !1,
                        withLegend: !0
                    }), b.transition().style("opacity", 1))
                }, 10))
            })
        }), void c.observe(b.node(), {
            attributes: !0,
            childList: !0,
            characterData: !0
        }))
    }, i.generateResize = function() {
        function a() {
            b.forEach(function(a) {
                a()
            })
        }
        var b = [];
        return a.add = function(a) {
            b.push(a)
        }, a
    }, i.endall = function(a, b) {
        var c = 0;
        a.each(function() {
            ++c
        }).each("end", function() {
            --c || b.apply(this, arguments)
        })
    }, i.generateWait = function() {
        var a = [],
            b = function(b, c) {
                var d = setInterval(function() {
                    var b = 0;
                    a.forEach(function(a) {
                        if (a.empty()) return void(b += 1);
                        try {
                            a.transition()
                        } catch (c) {
                            b += 1
                        }
                    }), b === a.length && (clearInterval(d), c && c())
                }, 10)
            };
        return b.add = function(b) {
            a.push(b)
        }, b
    }, i.parseDate = function(b) {
        var c, d = this;
        return b instanceof Date ? c = b : "string" == typeof b ? c = d.dataTimeFormat(d.config.data_xFormat).parse(b) : "number" != typeof b && isNaN(b) || (c = new Date(+b)), (!c || isNaN(+c)) && a.console.error("Failed to parse x '" + b + "' to Date object"), c
    }, i.isTabVisible = function() {
        var a;
        return "undefined" != typeof document.hidden ? a = "hidden" : "undefined" != typeof document.mozHidden ? a = "mozHidden" : "undefined" != typeof document.msHidden ? a = "msHidden" : "undefined" != typeof document.webkitHidden && (a = "webkitHidden"), !document[a]
    }, i.getDefaultConfig = function() {
        var a = {
            bindto: "#chart",
            size_width: void 0,
            size_height: void 0,
            padding_left: void 0,
            padding_right: void 0,
            padding_top: void 0,
            padding_bottom: void 0,
            zoom_enabled: !1,
            zoom_extent: void 0,
            zoom_privileged: !1,
            zoom_rescale: !1,
            zoom_onzoom: function() {},
            zoom_onzoomstart: function() {},
            zoom_onzoomend: function() {},
            interaction_enabled: !0,
            onmouseover: function() {},
            onmouseout: function() {},
            onresize: function() {},
            onresized: function() {},
            oninit: function() {},
            onrendered: function() {},
            transition_duration: 350,
            data_x: void 0,
            data_xs: {},
            data_xFormat: "%Y-%m-%d",
            data_xLocaltime: !0,
            data_xSort: !0,
            data_idConverter: function(a) {
                return a
            },
            data_names: {},
            data_classes: {},
            data_groups: [],
            data_axes: {},
            data_type: void 0,
            data_types: {},
            data_labels: {},
            data_order: "desc",
            data_regions: {},
            data_color: void 0,
            data_colors: {},
            data_hide: !1,
            data_filter: void 0,
            data_selection_enabled: !1,
            data_selection_grouped: !1,
            data_selection_isselectable: function() {
                return !0
            },
            data_selection_multiple: !0,
            data_selection_draggable: !1,
            data_onclick: function() {},
            data_onmouseover: function() {},
            data_onmouseout: function() {},
            data_onselected: function() {},
            data_onunselected: function() {},
            data_url: void 0,
            data_json: void 0,
            data_rows: void 0,
            data_columns: void 0,
            data_mimeType: void 0,
            data_keys: void 0,
            data_empty_label_text: "",
            subchart_show: !1,
            subchart_size_height: 60,
            subchart_onbrush: function() {},
            color_pattern: [],
            color_threshold: {},
            legend_show: !0,
            legend_hide: !1,
            legend_position: "bottom",
            legend_inset_anchor: "top-left",
            legend_inset_x: 10,
            legend_inset_y: 0,
            legend_inset_step: void 0,
            legend_item_onclick: void 0,
            legend_item_onmouseover: void 0,
            legend_item_onmouseout: void 0,
            legend_equally: !1,
            axis_rotated: !1,
            axis_x_show: !0,
            axis_x_type: "indexed",
            axis_x_localtime: !0,
            axis_x_categories: [],
            axis_x_tick_centered: !1,
            axis_x_tick_format: void 0,
            axis_x_tick_culling: {},
            axis_x_tick_culling_max: 10,
            axis_x_tick_count: void 0,
            axis_x_tick_fit: !0,
            axis_x_tick_values: null,
            axis_x_tick_rotate: 0,
            axis_x_tick_outer: !0,
            axis_x_tick_multiline: !0,
            axis_x_tick_width: null,
            axis_x_max: void 0,
            axis_x_min: void 0,
            axis_x_padding: {},
            axis_x_height: void 0,
            axis_x_extent: void 0,
            axis_x_label: {},
            axis_y_show: !0,
            axis_y_type: void 0,
            axis_y_max: void 0,
            axis_y_min: void 0,
            axis_y_inverted: !1,
            axis_y_center: void 0,
            axis_y_inner: void 0,
            axis_y_label: {},
            axis_y_tick_format: void 0,
            axis_y_tick_outer: !0,
            axis_y_tick_values: null,
            axis_y_tick_count: void 0,
            axis_y_tick_time_value: void 0,
            axis_y_tick_time_interval: void 0,
            axis_y_padding: {},
            axis_y_default: void 0,
            axis_y2_show: !1,
            axis_y2_max: void 0,
            axis_y2_min: void 0,
            axis_y2_inverted: !1,
            axis_y2_center: void 0,
            axis_y2_inner: void 0,
            axis_y2_label: {},
            axis_y2_tick_format: void 0,
            axis_y2_tick_outer: !0,
            axis_y2_tick_values: null,
            axis_y2_tick_count: void 0,
            axis_y2_padding: {},
            axis_y2_default: void 0,
            grid_x_show: !1,
            grid_x_type: "tick",
            grid_x_lines: [],
            grid_y_show: !1,
            grid_y_lines: [],
            grid_y_ticks: 10,
            grid_focus_show: !0,
            grid_lines_front: !0,
            point_show: !0,
            point_r: 2.5,
            point_focus_expand_enabled: !0,
            point_focus_expand_r: void 0,
            point_select_r: void 0,
            line_connectNull: !1,
            line_step_type: "step",
            bar_width: void 0,
            bar_width_ratio: .6,
            bar_width_max: void 0,
            bar_zerobased: !0,
            area_zerobased: !0,
            pie_label_show: !0,
            pie_label_format: void 0,
            pie_label_threshold: .05,
            pie_expand: !0,
            gauge_label_show: !0,
            gauge_label_format: void 0,
            gauge_expand: !0,
            gauge_min: 0,
            gauge_max: 100,
            gauge_units: void 0,
            gauge_width: void 0,
            donut_label_show: !0,
            donut_label_format: void 0,
            donut_label_threshold: .05,
            donut_width: void 0,
            donut_expand: !0,
            donut_title: "",
            regions: [],
            tooltip_show: !0,
            tooltip_grouped: !0,
            tooltip_format_title: void 0,
            tooltip_format_name: void 0,
            tooltip_format_value: void 0,
            tooltip_position: void 0,
            tooltip_contents: function(a, b, c, d) {
                return this.getTooltipContent ? this.getTooltipContent(a, b, c, d) : ""
            },
            tooltip_init_show: !1,
            tooltip_init_x: 0,
            tooltip_init_position: {
                top: "0px",
                left: "50px"
            }
        };
        return Object.keys(this.additionalConfig).forEach(function(b) {
            a[b] = this.additionalConfig[b]
        }, this), a
    }, i.additionalConfig = {}, i.loadConfig = function(a) {
        function b() {
            var a = d.shift();
            return a && c && "object" == typeof c && a in c ? (c = c[a], b()) : a ? void 0 : c
        }
        var c, d, e, f = this.config;
        Object.keys(f).forEach(function(g) {
            c = a, d = g.split("_"), e = b(), q(e) && (f[g] = e)
        })
    }, i.getScale = function(a, b, c) {
        return (c ? this.d3.time.scale() : this.d3.scale.linear()).range([a, b])
    }, i.getX = function(a, b, c, d) {
        var e, f = this,
            g = f.getScale(a, b, f.isTimeSeries()),
            h = c ? g.domain(c) : g;
        f.isCategorized() ? (d = d || function() {
            return 0
        }, g = function(a, b) {
            var c = h(a) + d(a);
            return b ? c : Math.ceil(c)
        }) : g = function(a, b) {
            var c = h(a);
            return b ? c : Math.ceil(c)
        };
        for (e in h) g[e] = h[e];
        return g.orgDomain = function() {
            return h.domain()
        }, f.isCategorized() && (g.domain = function(a) {
            return arguments.length ? (h.domain(a), g) : (a = this.orgDomain(), [a[0], a[1] + 1])
        }), g
    }, i.getY = function(a, b, c) {
        var d = this.getScale(a, b, this.isTimeSeriesY());
        return c && d.domain(c), d
    }, i.getYScale = function(a) {
        return "y2" === this.axis.getId(a) ? this.y2 : this.y
    }, i.getSubYScale = function(a) {
        return "y2" === this.axis.getId(a) ? this.subY2 : this.subY
    }, i.updateScales = function() {
        var a = this,
            b = a.config,
            c = !a.x;
        a.xMin = b.axis_rotated ? 1 : 0, a.xMax = b.axis_rotated ? a.height : a.width, a.yMin = b.axis_rotated ? 0 : a.height, a.yMax = b.axis_rotated ? a.width : 1, a.subXMin = a.xMin, a.subXMax = a.xMax, a.subYMin = b.axis_rotated ? 0 : a.height2, a.subYMax = b.axis_rotated ? a.width2 : 1, a.x = a.getX(a.xMin, a.xMax, c ? void 0 : a.x.orgDomain(), function() {
            return a.xAxis.tickOffset()
        }), a.y = a.getY(a.yMin, a.yMax, c ? b.axis_y_default : a.y.domain()), a.y2 = a.getY(a.yMin, a.yMax, c ? b.axis_y2_default : a.y2.domain()), a.subX = a.getX(a.xMin, a.xMax, a.orgXDomain, function(b) {
            return b % 1 ? 0 : a.subXAxis.tickOffset()
        }), a.subY = a.getY(a.subYMin, a.subYMax, c ? b.axis_y_default : a.subY.domain()), a.subY2 = a.getY(a.subYMin, a.subYMax, c ? b.axis_y2_default : a.subY2.domain()), a.xAxisTickFormat = a.axis.getXAxisTickFormat(), a.xAxisTickValues = a.axis.getXAxisTickValues(), a.yAxisTickValues = a.axis.getYAxisTickValues(), a.y2AxisTickValues = a.axis.getY2AxisTickValues(), a.xAxis = a.axis.getXAxis(a.x, a.xOrient, a.xAxisTickFormat, a.xAxisTickValues, b.axis_x_tick_outer), a.subXAxis = a.axis.getXAxis(a.subX, a.subXOrient, a.xAxisTickFormat, a.xAxisTickValues, b.axis_x_tick_outer), a.yAxis = a.axis.getYAxis(a.y, a.yOrient, b.axis_y_tick_format, a.yAxisTickValues, b.axis_y_tick_outer), a.y2Axis = a.axis.getYAxis(a.y2, a.y2Orient, b.axis_y2_tick_format, a.y2AxisTickValues, b.axis_y2_tick_outer), c || (a.brush && a.brush.scale(a.subX), b.zoom_enabled && a.zoom.scale(a.x)), a.updateArc && a.updateArc()
    }, i.getYDomainMin = function(a) {
        var b, c, d, e, f, g, h = this,
            i = h.config,
            j = h.mapToIds(a),
            k = h.getValuesAsIdKeyed(a);
        if (i.data_groups.length > 0)
            for (g = h.hasNegativeValueInTargets(a), b = 0; b < i.data_groups.length; b++)
                if (e = i.data_groups[b].filter(function(a) {
                        return j.indexOf(a) >= 0
                    }), 0 !== e.length)
                    for (d = e[0], g && k[d] && k[d].forEach(function(a, b) {
                            k[d][b] = 0 > a ? a : 0
                        }), c = 1; c < e.length; c++) f = e[c], k[f] && k[f].forEach(function(a, b) {
                        h.axis.getId(f) !== h.axis.getId(d) || !k[d] || g && +a > 0 || (k[d][b] += +a)
                    });
        return h.d3.min(Object.keys(k).map(function(a) {
            return h.d3.min(k[a])
        }))
    }, i.getYDomainMax = function(a) {
        var b, c, d, e, f, g, h = this,
            i = h.config,
            j = h.mapToIds(a),
            k = h.getValuesAsIdKeyed(a);
        if (i.data_groups.length > 0)
            for (g = h.hasPositiveValueInTargets(a), b = 0; b < i.data_groups.length; b++)
                if (e = i.data_groups[b].filter(function(a) {
                        return j.indexOf(a) >= 0
                    }), 0 !== e.length)
                    for (d = e[0], g && k[d] && k[d].forEach(function(a, b) {
                            k[d][b] = a > 0 ? a : 0
                        }), c = 1; c < e.length; c++) f = e[c], k[f] && k[f].forEach(function(a, b) {
                        h.axis.getId(f) !== h.axis.getId(d) || !k[d] || g && 0 > +a || (k[d][b] += +a)
                    });
        return h.d3.max(Object.keys(k).map(function(a) {
            return h.d3.max(k[a])
        }))
    }, i.getYDomain = function(a, b, c) {
        var d, e, f, g, h, i, j, k, l, n, o, p = this,
            q = p.config,
            r = a.filter(function(a) {
                return p.axis.getId(a.id) === b
            }),
            s = c ? p.filterByXDomain(r, c) : r,
            u = "y2" === b ? q.axis_y2_min : q.axis_y_min,
            w = "y2" === b ? q.axis_y2_max : q.axis_y_max,
            x = p.getYDomainMin(s),
            y = p.getYDomainMax(s),
            z = "y2" === b ? q.axis_y2_center : q.axis_y_center,
            A = p.hasType("bar", s) && q.bar_zerobased || p.hasType("area", s) && q.area_zerobased,
            B = "y2" === b ? q.axis_y2_inverted : q.axis_y_inverted,
            C = p.hasDataLabel() && q.axis_rotated,
            D = p.hasDataLabel() && !q.axis_rotated;
        return x = m(u) ? u : m(w) ? w > x ? x : w - 10 : x, y = m(w) ? w : m(u) ? y > u ? y : u + 10 : y, 0 === s.length ? "y2" === b ? p.y2.domain() : p.y.domain() : (isNaN(x) && (x = 0), isNaN(y) && (y = x), x === y && (0 > x ? y = 0 : x = 0), n = x >= 0 && y >= 0, o = 0 >= x && 0 >= y, (m(u) && n || m(w) && o) && (A = !1), A && (n && (x = 0), o && (y = 0)), e = Math.abs(y - x), f = g = h = .1 * e, "undefined" != typeof z && (i = Math.max(Math.abs(x), Math.abs(y)), y = z + i, x = z - i), C ? (j = p.getDataLabelLength(x, y, "width"), k = t(p.y.range()), l = [j[0] / k, j[1] / k], g += e * (l[1] / (1 - l[0] - l[1])), h += e * (l[0] / (1 - l[0] - l[1]))) : D && (j = p.getDataLabelLength(x, y, "height"), g += p.axis.convertPixelsToAxisPadding(j[1], e), h += p.axis.convertPixelsToAxisPadding(j[0], e)), "y" === b && v(q.axis_y_padding) && (g = p.axis.getPadding(q.axis_y_padding, "top", g, e), h = p.axis.getPadding(q.axis_y_padding, "bottom", h, e)), "y2" === b && v(q.axis_y2_padding) && (g = p.axis.getPadding(q.axis_y2_padding, "top", g, e), h = p.axis.getPadding(q.axis_y2_padding, "bottom", h, e)), A && (n && (h = x), o && (g = -y)), d = [x - h, y + g], B ? d.reverse() : d)
    }, i.getXDomainMin = function(a) {
        var b = this,
            c = b.config;
        return q(c.axis_x_min) ? b.isTimeSeries() ? this.parseDate(c.axis_x_min) : c.axis_x_min : b.d3.min(a, function(a) {
            return b.d3.min(a.values, function(a) {
                return a.x
            })
        })
    }, i.getXDomainMax = function(a) {
        var b = this,
            c = b.config;
        return q(c.axis_x_max) ? b.isTimeSeries() ? this.parseDate(c.axis_x_max) : c.axis_x_max : b.d3.max(a, function(a) {
            return b.d3.max(a.values, function(a) {
                return a.x
            })
        })
    }, i.getXDomainPadding = function(a) {
        var b, c, d, e, f = this,
            g = f.config,
            h = a[1] - a[0];
        return f.isCategorized() ? c = 0 : f.hasType("bar") ? (b = f.getMaxDataCount(), c = b > 1 ? h / (b - 1) / 2 : .5) : c = .01 * h, "object" == typeof g.axis_x_padding && v(g.axis_x_padding) ? (d = m(g.axis_x_padding.left) ? g.axis_x_padding.left : c, e = m(g.axis_x_padding.right) ? g.axis_x_padding.right : c) : d = e = "number" == typeof g.axis_x_padding ? g.axis_x_padding : c, {
            left: d,
            right: e
        }
    }, i.getXDomain = function(a) {
        var b = this,
            c = [b.getXDomainMin(a), b.getXDomainMax(a)],
            d = c[0],
            e = c[1],
            f = b.getXDomainPadding(c),
            g = 0,
            h = 0;
        return d - e !== 0 || b.isCategorized() || (b.isTimeSeries() ? (d = new Date(.5 * d.getTime()), e = new Date(1.5 * e.getTime())) : (d = 0 === d ? 1 : .5 * d, e = 0 === e ? -1 : 1.5 * e)), (d || 0 === d) && (g = b.isTimeSeries() ? new Date(d.getTime() - f.left) : d - f.left), (e || 0 === e) && (h = b.isTimeSeries() ? new Date(e.getTime() + f.right) : e + f.right), [g, h]
    }, i.updateXDomain = function(a, b, c, d, e) {
        var f = this,
            g = f.config;
        return c && (f.x.domain(e ? e : f.d3.extent(f.getXDomain(a))), f.orgXDomain = f.x.domain(), g.zoom_enabled && f.zoom.scale(f.x).updateScaleExtent(), f.subX.domain(f.x.domain()), f.brush && f.brush.scale(f.subX)), b && (f.x.domain(e ? e : !f.brush || f.brush.empty() ? f.orgXDomain : f.brush.extent()), g.zoom_enabled && f.zoom.scale(f.x).updateScaleExtent()), d && f.x.domain(f.trimXDomain(f.x.orgDomain())), f.x.domain()
    }, i.trimXDomain = function(a) {
        var b = this;
        return a[0] <= b.orgXDomain[0] && (a[1] = +a[1] + (b.orgXDomain[0] - a[0]), a[0] = b.orgXDomain[0]), b.orgXDomain[1] <= a[1] && (a[0] = +a[0] - (a[1] - b.orgXDomain[1]), a[1] = b.orgXDomain[1]), a
    }, i.isX = function(a) {
        var b = this,
            c = b.config;
        return c.data_x && a === c.data_x || v(c.data_xs) && x(c.data_xs, a)
    }, i.isNotX = function(a) {
        return !this.isX(a)
    }, i.getXKey = function(a) {
        var b = this,
            c = b.config;
        return c.data_x ? c.data_x : v(c.data_xs) ? c.data_xs[a] : null
    }, i.getXValuesOfXKey = function(a, b) {
        var c, d = this,
            e = b && v(b) ? d.mapToIds(b) : [];
        return e.forEach(function(b) {
            d.getXKey(b) === a && (c = d.data.xs[b])
        }), c
    }, i.getIndexByX = function(a) {
        var b = this,
            c = b.filterByX(b.data.targets, a);
        return c.length ? c[0].index : null
    }, i.getXValue = function(a, b) {
        var c = this;
        return a in c.data.xs && c.data.xs[a] && m(c.data.xs[a][b]) ? c.data.xs[a][b] : b
    }, i.getOtherTargetXs = function() {
        var a = this,
            b = Object.keys(a.data.xs);
        return b.length ? a.data.xs[b[0]] : null
    }, i.getOtherTargetX = function(a) {
        var b = this.getOtherTargetXs();
        return b && a < b.length ? b[a] : null
    }, i.addXs = function(a) {
        var b = this;
        Object.keys(a).forEach(function(c) {
            b.config.data_xs[c] = a[c]
        })
    }, i.hasMultipleX = function(a) {
        return this.d3.set(Object.keys(a).map(function(b) {
            return a[b]
        })).size() > 1
    }, i.isMultipleX = function() {
        return v(this.config.data_xs) || !this.config.data_xSort || this.hasType("scatter")
    }, i.addName = function(a) {
        var b, c = this;
        return a && (b = c.config.data_names[a.id], a.name = b ? b : a.id), a
    }, i.getValueOnIndex = function(a, b) {
        var c = a.filter(function(a) {
            return a.index === b
        });
        return c.length ? c[0] : null
    }, i.updateTargetX = function(a, b) {
        var c = this;
        a.forEach(function(a) {
            a.values.forEach(function(d, e) {
                d.x = c.generateTargetX(b[e], a.id, e)
            }), c.data.xs[a.id] = b
        })
    }, i.updateTargetXs = function(a, b) {
        var c = this;
        a.forEach(function(a) {
            b[a.id] && c.updateTargetX([a], b[a.id])
        })
    }, i.generateTargetX = function(a, b, c) {
        var d, e = this;
        return d = e.isTimeSeries() ? e.parseDate(a ? a : e.getXValue(b, c)) : e.isCustomX() && !e.isCategorized() ? m(a) ? +a : e.getXValue(b, c) : c
    }, i.cloneTarget = function(a) {
        return {
            id: a.id,
            id_org: a.id_org,
            values: a.values.map(function(a) {
                return {
                    x: a.x,
                    value: a.value,
                    id: a.id
                }
            })
        }
    }, i.updateXs = function() {
        var a = this;
        a.data.targets.length && (a.xs = [], a.data.targets[0].values.forEach(function(b) {
            a.xs[b.index] = b.x
        }))
    }, i.getPrevX = function(a) {
        var b = this.xs[a - 1];
        return "undefined" != typeof b ? b : null
    }, i.getNextX = function(a) {
        var b = this.xs[a + 1];
        return "undefined" != typeof b ? b : null
    }, i.getMaxDataCount = function() {
        var a = this;
        return a.d3.max(a.data.targets, function(a) {
            return a.values.length
        })
    }, i.getMaxDataCountTarget = function(a) {
        var b, c = a.length,
            d = 0;
        return c > 1 ? a.forEach(function(a) {
            a.values.length > d && (b = a, d = a.values.length)
        }) : b = c ? a[0] : null, b
    }, i.getEdgeX = function(a) {
        var b = this;
        return a.length ? [b.d3.min(a, function(a) {
            return a.values[0].x
        }), b.d3.max(a, function(a) {
            return a.values[a.values.length - 1].x
        })] : [0, 0]
    }, i.mapToIds = function(a) {
        return a.map(function(a) {
            return a.id
        })
    }, i.mapToTargetIds = function(a) {
        var b = this;
        return a ? o(a) ? [a] : a : b.mapToIds(b.data.targets)
    }, i.hasTarget = function(a, b) {
        var c, d = this.mapToIds(a);
        for (c = 0; c < d.length; c++)
            if (d[c] === b) return !0;
        return !1
    }, i.isTargetToShow = function(a) {
        return this.hiddenTargetIds.indexOf(a) < 0
    }, i.isLegendToShow = function(a) {
        return this.hiddenLegendIds.indexOf(a) < 0
    }, i.filterTargetsToShow = function(a) {
        var b = this;
        return a.filter(function(a) {
            return b.isTargetToShow(a.id)
        })
    }, i.mapTargetsToUniqueXs = function(a) {
        var b = this,
            c = b.d3.set(b.d3.merge(a.map(function(a) {
                return a.values.map(function(a) {
                    return +a.x
                })
            }))).values();
        return c.map(b.isTimeSeries() ? function(a) {
            return new Date(+a)
        } : function(a) {
            return +a
        })
    }, i.addHiddenTargetIds = function(a) {
        this.hiddenTargetIds = this.hiddenTargetIds.concat(a)
    }, i.removeHiddenTargetIds = function(a) {
        this.hiddenTargetIds = this.hiddenTargetIds.filter(function(b) {
            return a.indexOf(b) < 0
        })
    }, i.addHiddenLegendIds = function(a) {
        this.hiddenLegendIds = this.hiddenLegendIds.concat(a)
    }, i.removeHiddenLegendIds = function(a) {
        this.hiddenLegendIds = this.hiddenLegendIds.filter(function(b) {
            return a.indexOf(b) < 0
        })
    }, i.getValuesAsIdKeyed = function(a) {
        var b = {};
        return a.forEach(function(a) {
            b[a.id] = [], a.values.forEach(function(c) {
                b[a.id].push(c.value)
            })
        }), b
    }, i.checkValueInTargets = function(a, b) {
        var c, d, e, f = Object.keys(a);
        for (c = 0; c < f.length; c++)
            for (e = a[f[c]].values, d = 0; d < e.length; d++)
                if (b(e[d].value)) return !0;
        return !1
    }, i.hasNegativeValueInTargets = function(a) {
        return this.checkValueInTargets(a, function(a) {
            return 0 > a
        })
    }, i.hasPositiveValueInTargets = function(a) {
        return this.checkValueInTargets(a, function(a) {
            return a > 0
        })
    }, i.isOrderDesc = function() {
        var a = this.config;
        return "string" == typeof a.data_order && "desc" === a.data_order.toLowerCase()
    }, i.isOrderAsc = function() {
        var a = this.config;
        return "string" == typeof a.data_order && "asc" === a.data_order.toLowerCase()
    }, i.orderTargets = function(a) {
        var b = this,
            c = b.config,
            d = b.isOrderAsc(),
            e = b.isOrderDesc();
        return d || e ? a.sort(function(a, b) {
            var c = function(a, b) {
                    return a + Math.abs(b.value)
                },
                e = a.values.reduce(c, 0),
                f = b.values.reduce(c, 0);
            return d ? f - e : e - f
        }) : n(c.data_order) && a.sort(c.data_order), a
    }, i.filterByX = function(a, b) {
        return this.d3.merge(a.map(function(a) {
            return a.values
        })).filter(function(a) {
            return a.x - b === 0
        })
    }, i.filterRemoveNull = function(a) {
        return a.filter(function(a) {
            return m(a.value)
        })
    }, i.filterByXDomain = function(a, b) {
        return a.map(function(a) {
            return {
                id: a.id,
                id_org: a.id_org,
                values: a.values.filter(function(a) {
                    return b[0] <= a.x && a.x <= b[1]
                })
            }
        })
    }, i.hasDataLabel = function() {
        var a = this.config;
        return "boolean" == typeof a.data_labels && a.data_labels ? !0 : !("object" != typeof a.data_labels || !v(a.data_labels))
    }, i.getDataLabelLength = function(a, b, c) {
        var d = this,
            e = [0, 0],
            f = 1.3;
        return d.selectChart.select("svg").selectAll(".dummy").data([a, b]).enter().append("text").text(function(a) {
            return d.dataLabelFormat(a.id)(a)
        }).each(function(a, b) {
            e[b] = this.getBoundingClientRect()[c] * f
        }).remove(), e
    }, i.isNoneArc = function(a) {
        return this.hasTarget(this.data.targets, a.id)
    }, i.isArc = function(a) {
        return "data" in a && this.hasTarget(this.data.targets, a.data.id)
    }, i.findSameXOfValues = function(a, b) {
        var c, d = a[b].x,
            e = [];
        for (c = b - 1; c >= 0 && d === a[c].x; c--) e.push(a[c]);
        for (c = b; c < a.length && d === a[c].x; c++) e.push(a[c]);
        return e
    }, i.findClosestFromTargets = function(a, b) {
        var c, d = this;
        return c = a.map(function(a) {
            return d.findClosest(a.values, b)
        }), d.findClosest(c, b)
    }, i.findClosest = function(a, b) {
        var c, d = this,
            e = 100;
        return a.filter(function(a) {
            return a && d.isBarType(a.id)
        }).forEach(function(a) {
            var b = d.main.select("." + l.bars + d.getTargetSelectorSuffix(a.id) + " ." + l.bar + "-" + a.index).node();
            !c && d.isWithinBar(b) && (c = a)
        }), a.filter(function(a) {
            return a && !d.isBarType(a.id)
        }).forEach(function(a) {
            var f = d.dist(a, b);
            e > f && (e = f, c = a)
        }), c
    }, i.dist = function(a, b) {
        var c = this,
            d = c.config,
            e = d.axis_rotated ? 1 : 0,
            f = d.axis_rotated ? 0 : 1,
            g = c.circleY(a, a.index),
            h = c.x(a.x);
        return Math.pow(h - b[e], 2) + Math.pow(g - b[f], 2)
    }, i.convertValuesToStep = function(a) {
        var b, c = [].concat(a);
        if (!this.isCategorized()) return a;
        for (b = a.length + 1; b > 0; b--) c[b] = c[b - 1];
        return c[0] = {
            x: c[0].x - 1,
            value: c[0].value,
            id: c[0].id
        }, c[a.length + 1] = {
            x: c[a.length].x + 1,
            value: c[a.length].value,
            id: c[a.length].id
        }, c
    }, i.updateDataAttributes = function(a, b) {
        var c = this,
            d = c.config,
            e = d["data_" + a];
        return "undefined" == typeof b ? e : (Object.keys(b).forEach(function(a) {
            e[a] = b[a]
        }), c.redraw({
            withLegend: !0
        }), e)
    }, i.convertUrlToData = function(a, b, c, d) {
        var e = this,
            f = b ? b : "csv";
        e.d3.xhr(a, function(a, b) {
            var g;
            if (!b) throw new Error(a.responseURL + " " + a.status + " (" + a.statusText + ")");
            g = "json" === f ? e.convertJsonToData(JSON.parse(b.response), c) : "tsv" === f ? e.convertTsvToData(b.response) : e.convertCsvToData(b.response), d.call(e, g)
        })
    }, i.convertXsvToData = function(a, b) {
        var c, d = b.parseRows(a);
        return 1 === d.length ? (c = [{}], d[0].forEach(function(a) {
            c[0][a] = null
        })) : c = b.parse(a), c
    }, i.convertCsvToData = function(a) {
        return this.convertXsvToData(a, this.d3.csv)
    }, i.convertTsvToData = function(a) {
        return this.convertXsvToData(a, this.d3.tsv)
    }, i.convertJsonToData = function(a, b) {
        var c, d, e = this,
            f = [];
        return b ? (b.x ? (c = b.value.concat(b.x), e.config.data_x = b.x) : c = b.value, f.push(c), a.forEach(function(a) {
            var b = [];
            c.forEach(function(c) {
                var d = p(a[c]) ? null : a[c];
                b.push(d)
            }), f.push(b)
        }), d = e.convertRowsToData(f)) : (Object.keys(a).forEach(function(b) {
            f.push([b].concat(a[b]))
        }), d = e.convertColumnsToData(f)), d
    }, i.convertRowsToData = function(a) {
        var b, c, d = a[0],
            e = {},
            f = [];
        for (b = 1; b < a.length; b++) {
            for (e = {}, c = 0; c < a[b].length; c++) {
                if (p(a[b][c])) throw new Error("Source data is missing a component at (" + b + "," + c + ")!");
                e[d[c]] = a[b][c]
            }
            f.push(e)
        }
        return f
    }, i.convertColumnsToData = function(a) {
        var b, c, d, e = [];
        for (b = 0; b < a.length; b++)
            for (d = a[b][0], c = 1; c < a[b].length; c++) {
                if (p(e[c - 1]) && (e[c - 1] = {}), p(a[b][c])) throw new Error("Source data is missing a component at (" + b + "," + c + ")!");
                e[c - 1][d] = a[b][c]
            }
        return e
    }, i.convertDataToTargets = function(a, b) {
        var c, d = this,
            e = d.config,
            f = d.d3.keys(a[0]).filter(d.isNotX, d),
            g = d.d3.keys(a[0]).filter(d.isX, d);
        return f.forEach(function(c) {
            var f = d.getXKey(c);
            d.isCustomX() || d.isTimeSeries() ? g.indexOf(f) >= 0 ? d.data.xs[c] = (b && d.data.xs[c] ? d.data.xs[c] : []).concat(a.map(function(a) {
                return a[f]
            }).filter(m).map(function(a, b) {
                return d.generateTargetX(a, c, b)
            })) : e.data_x ? d.data.xs[c] = d.getOtherTargetXs() : v(e.data_xs) && (d.data.xs[c] = d.getXValuesOfXKey(f, d.data.targets)) : d.data.xs[c] = a.map(function(a, b) {
                return b
            })
        }), f.forEach(function(a) {
            if (!d.data.xs[a]) throw new Error('x is not defined for id = "' + a + '".')
        }), c = f.map(function(b, c) {
            var f = e.data_idConverter(b);
            return {
                id: f,
                id_org: b,
                values: a.map(function(a, g) {
                    var h = d.getXKey(b),
                        i = a[h],
                        j = d.generateTargetX(i, b, g);
                    return d.isCustomX() && d.isCategorized() && 0 === c && i && (0 === g && (e.axis_x_categories = []), e.axis_x_categories.push(i)), (p(a[b]) || d.data.xs[b].length <= g) && (j = void 0), {
                        x: j,
                        value: null === a[b] || isNaN(a[b]) ? null : +a[b],
                        id: f
                    }
                }).filter(function(a) {
                    return q(a.x)
                })
            }
        }), c.forEach(function(a) {
            var b;
            e.data_xSort && (a.values = a.values.sort(function(a, b) {
                var c = a.x || 0 === a.x ? a.x : 1 / 0,
                    d = b.x || 0 === b.x ? b.x : 1 / 0;
                return c - d
            })), b = 0, a.values.forEach(function(a) {
                a.index = b++
            }), d.data.xs[a.id].sort(function(a, b) {
                return a - b
            })
        }), e.data_type && d.setTargetType(d.mapToIds(c).filter(function(a) {
            return !(a in e.data_types)
        }), e.data_type), c.forEach(function(a) {
            d.addCache(a.id_org, a)
        }), c
    }, i.load = function(a, b) {
        var c = this;
        a && (b.filter && (a = a.filter(b.filter)), (b.type || b.types) && a.forEach(function(a) {
            var d = b.types && b.types[a.id] ? b.types[a.id] : b.type;
            c.setTargetType(a.id, d)
        }), c.data.targets.forEach(function(b) {
            for (var c = 0; c < a.length; c++)
                if (b.id === a[c].id) {
                    b.values = a[c].values, a.splice(c, 1);
                    break
                }
        }), c.data.targets = c.data.targets.concat(a)), c.updateTargets(c.data.targets), c.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0,
            withLegend: !0
        }), b.done && b.done()
    }, i.loadFromArgs = function(a) {
        var b = this;
        a.data ? b.load(b.convertDataToTargets(a.data), a) : a.url ? b.convertUrlToData(a.url, a.mimeType, a.keys, function(c) {
            b.load(b.convertDataToTargets(c), a)
        }) : a.json ? b.load(b.convertDataToTargets(b.convertJsonToData(a.json, a.keys)), a) : a.rows ? b.load(b.convertDataToTargets(b.convertRowsToData(a.rows)), a) : a.columns ? b.load(b.convertDataToTargets(b.convertColumnsToData(a.columns)), a) : b.load(null, a)
    }, i.unload = function(a, b) {
        var c = this;
        return b || (b = function() {}), a = a.filter(function(a) {
            return c.hasTarget(c.data.targets, a)
        }), a && 0 !== a.length ? (c.svg.selectAll(a.map(function(a) {
            return c.selectorTarget(a)
        })).transition().style("opacity", 0).remove().call(c.endall, b), void a.forEach(function(a) {
            c.withoutFadeIn[a] = !1, c.legend && c.legend.selectAll("." + l.legendItem + c.getTargetSelectorSuffix(a)).remove(), c.data.targets = c.data.targets.filter(function(b) {
                return b.id !== a
            })
        })) : void b()
    }, i.categoryName = function(a) {
        var b = this.config;
        return a < b.axis_x_categories.length ? b.axis_x_categories[a] : a
    }, i.initEventRect = function() {
        var a = this;
        a.main.select("." + l.chart).append("g").attr("class", l.eventRects).style("fill-opacity", 0)
    }, i.redrawEventRect = function() {
        var a, b, c = this,
            d = c.config,
            e = c.isMultipleX(),
            f = c.main.select("." + l.eventRects).style("cursor", d.zoom_enabled ? d.axis_rotated ? "ns-resize" : "ew-resize" : null).classed(l.eventRectsMultiple, e).classed(l.eventRectsSingle, !e);
        f.selectAll("." + l.eventRect).remove(), c.eventRect = f.selectAll("." + l.eventRect), e ? (a = c.eventRect.data([0]), c.generateEventRectsForMultipleXs(a.enter()), c.updateEventRect(a)) : (b = c.getMaxDataCountTarget(c.data.targets), f.datum(b ? b.values : []), c.eventRect = f.selectAll("." + l.eventRect), a = c.eventRect.data(function(a) {
            return a
        }), c.generateEventRectsForSingleX(a.enter()), c.updateEventRect(a), a.exit().remove())
    }, i.updateEventRect = function(a) {
        var b, c, d, e, f, g, h = this,
            i = h.config;
        a = a || h.eventRect.data(function(a) {
            return a
        }), h.isMultipleX() ? (b = 0, c = 0, d = h.width, e = h.height) : (!h.isCustomX() && !h.isTimeSeries() || h.isCategorized() ? (f = h.getEventRectWidth(), g = function(a) {
            return h.x(a.x) - f / 2
        }) : (h.updateXs(), f = function(a) {
            var b = h.getPrevX(a.index),
                c = h.getNextX(a.index);
            return null === b && null === c ? i.axis_rotated ? h.height : h.width : (null === b && (b = h.x.domain()[0]), null === c && (c = h.x.domain()[1]), Math.max(0, (h.x(c) - h.x(b)) / 2))
        }, g = function(a) {
            var b = h.getPrevX(a.index),
                c = h.getNextX(a.index),
                d = h.data.xs[a.id][a.index];
            return null === b && null === c ? 0 : (null === b && (b = h.x.domain()[0]), (h.x(d) + h.x(b)) / 2)
        }), b = i.axis_rotated ? 0 : g, c = i.axis_rotated ? g : 0, d = i.axis_rotated ? h.width : f, e = i.axis_rotated ? f : h.height), a.attr("class", h.classEvent.bind(h)).attr("x", b).attr("y", c).attr("width", d).attr("height", e)
    }, i.generateEventRectsForSingleX = function(a) {
        var b = this,
            c = b.d3,
            d = b.config;
        a.append("rect").attr("class", b.classEvent.bind(b)).style("cursor", d.data_selection_enabled && d.data_selection_grouped ? "pointer" : null).on("mouseover", function(a) {
            var c = a.index;
            b.dragging || b.flowing || b.hasArcType() || (d.point_focus_expand_enabled && b.expandCircles(c, null, !0), b.expandBars(c, null, !0), b.main.selectAll("." + l.shape + "-" + c).each(function(a) {
                d.data_onmouseover.call(b.api, a)
            }))
        }).on("mouseout", function(a) {
            var c = a.index;
            b.config && (b.hasArcType() || (b.hideXGridFocus(), b.hideTooltip(), b.unexpandCircles(), b.unexpandBars(), b.main.selectAll("." + l.shape + "-" + c).each(function(a) {
                d.data_onmouseout.call(b.api, a)
            })))
        }).on("mousemove", function(a) {
            var e, f = a.index,
                g = b.svg.select("." + l.eventRect + "-" + f);
            b.dragging || b.flowing || b.hasArcType() || (b.isStepType(a) && "step-after" === b.config.line_step_type && c.mouse(this)[0] < b.x(b.getXValue(a.id, f)) && (f -= 1), e = b.filterTargetsToShow(b.data.targets).map(function(a) {
                return b.addName(b.getValueOnIndex(a.values, f))
            }), d.tooltip_grouped && (b.showTooltip(e, this), b.showXGridFocus(e)), (!d.tooltip_grouped || d.data_selection_enabled && !d.data_selection_grouped) && b.main.selectAll("." + l.shape + "-" + f).each(function() {
                c.select(this).classed(l.EXPANDED, !0), d.data_selection_enabled && g.style("cursor", d.data_selection_grouped ? "pointer" : null), d.tooltip_grouped || (b.hideXGridFocus(), b.hideTooltip(), d.data_selection_grouped || (b.unexpandCircles(f), b.unexpandBars(f)))
            }).filter(function(a) {
                return b.isWithinShape(this, a)
            }).each(function(a) {
                d.data_selection_enabled && (d.data_selection_grouped || d.data_selection_isselectable(a)) && g.style("cursor", "pointer"), d.tooltip_grouped || (b.showTooltip([a], this), b.showXGridFocus([a]), d.point_focus_expand_enabled && b.expandCircles(f, a.id, !0), b.expandBars(f, a.id, !0))
            }))
        }).on("click", function(a) {
            var e = a.index;
            if (!b.hasArcType() && b.toggleShape) {
                if (b.cancelClick) return void(b.cancelClick = !1);
                b.isStepType(a) && "step-after" === d.line_step_type && c.mouse(this)[0] < b.x(b.getXValue(a.id, e)) && (e -= 1), b.main.selectAll("." + l.shape + "-" + e).each(function(a) {
                    (d.data_selection_grouped || b.isWithinShape(this, a)) && (b.toggleShape(this, a, e), b.config.data_onclick.call(b.api, a, this))
                })
            }
        }).call(d.data_selection_draggable && b.drag ? c.behavior.drag().origin(Object).on("drag", function() {
            b.drag(c.mouse(this))
        }).on("dragstart", function() {
            b.dragstart(c.mouse(this))
        }).on("dragend", function() {
            b.dragend()
        }) : function() {})
    }, i.generateEventRectsForMultipleXs = function(a) {
        function b() {
            c.svg.select("." + l.eventRect).style("cursor", null), c.hideXGridFocus(), c.hideTooltip(), c.unexpandCircles(), c.unexpandBars()
        }
        var c = this,
            d = c.d3,
            e = c.config;
        a.append("rect").attr("x", 0).attr("y", 0).attr("width", c.width).attr("height", c.height).attr("class", l.eventRect).on("mouseout", function() {
            c.config && (c.hasArcType() || b())
        }).on("mousemove", function() {
            var a, f, g, h, i = c.filterTargetsToShow(c.data.targets);
            if (!c.dragging && !c.hasArcType(i)) {
                if (a = d.mouse(this), f = c.findClosestFromTargets(i, a), !c.mouseover || f && f.id === c.mouseover.id || (e.data_onmouseout.call(c.api, c.mouseover), c.mouseover = void 0), !f) return void b();
                g = c.isScatterType(f) || !e.tooltip_grouped ? [f] : c.filterByX(i, f.x), h = g.map(function(a) {
                    return c.addName(a)
                }), c.showTooltip(h, this), e.point_focus_expand_enabled && c.expandCircles(f.index, f.id, !0), c.expandBars(f.index, f.id, !0), c.showXGridFocus(h), (c.isBarType(f.id) || c.dist(f, a) < 100) && (c.svg.select("." + l.eventRect).style("cursor", "pointer"), c.mouseover || (e.data_onmouseover.call(c.api, f), c.mouseover = f))
            }
        }).on("click", function() {
            var a, b, f = c.filterTargetsToShow(c.data.targets);
            c.hasArcType(f) || (a = d.mouse(this), b = c.findClosestFromTargets(f, a), b && (c.isBarType(b.id) || c.dist(b, a) < 100) && c.main.selectAll("." + l.shapes + c.getTargetSelectorSuffix(b.id)).selectAll("." + l.shape + "-" + b.index).each(function() {
                (e.data_selection_grouped || c.isWithinShape(this, b)) && (c.toggleShape(this, b, b.index), c.config.data_onclick.call(c.api, b, this))
            }))
        }).call(e.data_selection_draggable && c.drag ? d.behavior.drag().origin(Object).on("drag", function() {
            c.drag(d.mouse(this))
        }).on("dragstart", function() {
            c.dragstart(d.mouse(this))
        }).on("dragend", function() {
            c.dragend()
        }) : function() {})
    }, i.dispatchEvent = function(b, c, d) {
        var e = this,
            f = "." + l.eventRect + (e.isMultipleX() ? "" : "-" + c),
            g = e.main.select(f).node(),
            h = g.getBoundingClientRect(),
            i = h.left + (d ? d[0] : 0),
            j = h.top + (d ? d[1] : 0),
            k = document.createEvent("MouseEvents");
        k.initMouseEvent(b, !0, !0, a, 0, i, j, i, j, !1, !1, !1, !1, 0, null), g.dispatchEvent(k)
    }, i.getCurrentWidth = function() {
        var a = this,
            b = a.config;
        return b.size_width ? b.size_width : a.getParentWidth()
    }, i.getCurrentHeight = function() {
        var a = this,
            b = a.config,
            c = b.size_height ? b.size_height : a.getParentHeight();
        return c > 0 ? c : 320 / (a.hasType("gauge") ? 2 : 1)
    }, i.getCurrentPaddingTop = function() {
        var a = this.config;
        return m(a.padding_top) ? a.padding_top : 0
    }, i.getCurrentPaddingBottom = function() {
        var a = this.config;
        return m(a.padding_bottom) ? a.padding_bottom : 0
    }, i.getCurrentPaddingLeft = function(a) {
        var b = this,
            c = b.config;
        return m(c.padding_left) ? c.padding_left : c.axis_rotated ? c.axis_x_show ? Math.max(r(b.getAxisWidthByAxisId("x", a)), 40) : 1 : !c.axis_y_show || c.axis_y_inner ? b.axis.getYAxisLabelPosition().isOuter ? 30 : 1 : r(b.getAxisWidthByAxisId("y", a))
    }, i.getCurrentPaddingRight = function() {
        var a = this,
            b = a.config,
            c = 10,
            d = a.isLegendRight ? a.getLegendWidth() + 20 : 0;
        return m(b.padding_right) ? b.padding_right + 1 : b.axis_rotated ? c + d : !b.axis_y2_show || b.axis_y2_inner ? 2 + d + (a.axis.getY2AxisLabelPosition().isOuter ? 20 : 0) : r(a.getAxisWidthByAxisId("y2")) + d
    }, i.getParentRectValue = function(a) {
        for (var b, c = this.selectChart.node(); c && "BODY" !== c.tagName;) {
            try {
                b = c.getBoundingClientRect()[a]
            } catch (d) {
                "width" === a && (b = c.offsetWidth)
            }
            if (b) break;
            c = c.parentNode
        }
        return b
    }, i.getParentWidth = function() {
        return this.getParentRectValue("width")
    }, i.getParentHeight = function() {
        var a = this.selectChart.style("height");
        return a.indexOf("px") > 0 ? +a.replace("px", "") : 0
    }, i.getSvgLeft = function(a) {
        var b = this,
            c = b.config,
            d = c.axis_rotated || !c.axis_rotated && !c.axis_y_inner,
            e = c.axis_rotated ? l.axisX : l.axisY,
            f = b.main.select("." + e).node(),
            g = f && d ? f.getBoundingClientRect() : {
                right: 0
            },
            h = b.selectChart.node().getBoundingClientRect(),
            i = b.hasArcType(),
            j = g.right - h.left - (i ? 0 : b.getCurrentPaddingLeft(a));
        return j > 0 ? j : 0
    }, i.getAxisWidthByAxisId = function(a, b) {
        var c = this,
            d = c.axis.getLabelPositionById(a);
        return c.axis.getMaxTickWidth(a, b) + (d.isInner ? 20 : 40)
    }, i.getHorizontalAxisHeight = function(a) {
        var b = this,
            c = b.config,
            d = 30;
        return "x" !== a || c.axis_x_show ? "x" === a && c.axis_x_height ? c.axis_x_height : "y" !== a || c.axis_y_show ? "y2" !== a || c.axis_y2_show ? ("x" === a && !c.axis_rotated && c.axis_x_tick_rotate && (d = 30 + b.axis.getMaxTickWidth(a) * Math.cos(Math.PI * (90 - c.axis_x_tick_rotate) / 180)), d + (b.axis.getLabelPositionById(a).isInner ? 0 : 10) + ("y2" === a ? -10 : 0)) : b.rotated_padding_top : !c.legend_show || b.isLegendRight || b.isLegendInset ? 1 : 10 : 8
    }, i.getEventRectWidth = function() {
        return Math.max(0, this.xAxis.tickInterval())
    }, i.getShapeIndices = function(a) {
        var b, c, d = this,
            e = d.config,
            f = {},
            g = 0;
        return d.filterTargetsToShow(d.data.targets.filter(a, d)).forEach(function(a) {
            for (b = 0; b < e.data_groups.length; b++)
                if (!(e.data_groups[b].indexOf(a.id) < 0))
                    for (c = 0; c < e.data_groups[b].length; c++)
                        if (e.data_groups[b][c] in f) {
                            f[a.id] = f[e.data_groups[b][c]];
                            break
                        }
            p(f[a.id]) && (f[a.id] = g++)
        }), f.__max__ = g - 1, f
    }, i.getShapeX = function(a, b, c, d) {
        var e = this,
            f = d ? e.subX : e.x;
        return function(d) {
            var e = d.id in c ? c[d.id] : 0;
            return d.x || 0 === d.x ? f(d.x) - a * (b / 2 - e) : 0
        }
    }, i.getShapeY = function(a) {
        var b = this;
        return function(c) {
            var d = a ? b.getSubYScale(c.id) : b.getYScale(c.id);
            return d(c.value)
        }
    }, i.getShapeOffset = function(a, b, c) {
        var d = this,
            e = d.orderTargets(d.filterTargetsToShow(d.data.targets.filter(a, d))),
            f = e.map(function(a) {
                return a.id
            });
        return function(a, g) {
            var h = c ? d.getSubYScale(a.id) : d.getYScale(a.id),
                i = h(0),
                j = i;
            return e.forEach(function(c) {
                var e = d.isStepType(a) ? d.convertValuesToStep(c.values) : c.values;
                c.id !== a.id && b[c.id] === b[a.id] && f.indexOf(c.id) < f.indexOf(a.id) && e[g].value * a.value >= 0 && (j += h(e[g].value) - i)
            }), j
        }
    }, i.isWithinShape = function(a, b) {
        var c, d = this,
            e = d.d3.select(a);
        return d.isTargetToShow(b.id) ? "circle" === a.nodeName ? c = d.isStepType(b) ? d.isWithinStep(a, d.getYScale(b.id)(b.value)) : d.isWithinCircle(a, 1.5 * d.pointSelectR(b)) : "path" === a.nodeName && (c = e.classed(l.bar) ? d.isWithinBar(a) : !0) : c = !1, c
    }, i.getInterpolate = function(a) {
        var b = this;
        return b.isSplineType(a) ? "cardinal" : b.isStepType(a) ? b.config.line_step_type : "linear"
    }, i.initLine = function() {
        var a = this;
        a.main.select("." + l.chart).append("g").attr("class", l.chartLines)
    }, i.updateTargetsForLine = function(a) {
        var b, c, d = this,
            e = d.config,
            f = d.classChartLine.bind(d),
            g = d.classLines.bind(d),
            h = d.classAreas.bind(d),
            i = d.classCircles.bind(d),
            j = d.classFocus.bind(d);
        b = d.main.select("." + l.chartLines).selectAll("." + l.chartLine).data(a).attr("class", function(a) {
            return f(a) + j(a)
        }), c = b.enter().append("g").attr("class", f).style("opacity", 0).style("pointer-events", "none"), c.append("g").attr("class", g), c.append("g").attr("class", h), c.append("g").attr("class", function(a) {
            return d.generateClass(l.selectedCircles, a.id)
        }), c.append("g").attr("class", i).style("cursor", function(a) {
            return e.data_selection_isselectable(a) ? "pointer" : null
        }), a.forEach(function(a) {
            d.main.selectAll("." + l.selectedCircles + d.getTargetSelectorSuffix(a.id)).selectAll("." + l.selectedCircle).each(function(b) {
                b.value = a.values[b.index].value
            })
        })
    }, i.updateLine = function(a) {
        var b = this;
        b.mainLine = b.main.selectAll("." + l.lines).selectAll("." + l.line).data(b.lineData.bind(b)), b.mainLine.enter().append("path").attr("class", b.classLine.bind(b)).style("stroke", b.color), b.mainLine.style("opacity", b.initialOpacity.bind(b)).style("shape-rendering", function(a) {
            return b.isStepType(a) ? "crispEdges" : ""
        }).attr("transform", null), b.mainLine.exit().transition().duration(a).style("opacity", 0).remove()
    }, i.redrawLine = function(a, b) {
        return [(b ? this.mainLine.transition() : this.mainLine).attr("d", a).style("stroke", this.color).style("opacity", 1)]
    }, i.generateDrawLine = function(a, b) {
        var c = this,
            d = c.config,
            e = c.d3.svg.line(),
            f = c.generateGetLinePoints(a, b),
            g = b ? c.getSubYScale : c.getYScale,
            h = function(a) {
                return (b ? c.subxx : c.xx).call(c, a)
            },
            i = function(a, b) {
                return d.data_groups.length > 0 ? f(a, b)[0][1] : g.call(c, a.id)(a.value)
            };
        return e = d.axis_rotated ? e.x(i).y(h) : e.x(h).y(i), d.line_connectNull || (e = e.defined(function(a) {
                return null != a.value
            })),
            function(a) {
                var f, h = d.line_connectNull ? c.filterRemoveNull(a.values) : a.values,
                    i = b ? c.x : c.subX,
                    j = g.call(c, a.id),
                    k = 0,
                    l = 0;
                return c.isLineType(a) ? d.data_regions[a.id] ? f = c.lineWithRegions(h, i, j, d.data_regions[a.id]) : (c.isStepType(a) && (h = c.convertValuesToStep(h)), f = e.interpolate(c.getInterpolate(a))(h)) : (h[0] && (k = i(h[0].x), l = j(h[0].value)), f = d.axis_rotated ? "M " + l + " " + k : "M " + k + " " + l), f ? f : "M 0 0"
            }
    }, i.generateGetLinePoints = function(a, b) {
        var c = this,
            d = c.config,
            e = a.__max__ + 1,
            f = c.getShapeX(0, e, a, !!b),
            g = c.getShapeY(!!b),
            h = c.getShapeOffset(c.isLineType, a, !!b),
            i = b ? c.getSubYScale : c.getYScale;
        return function(a, b) {
            var e = i.call(c, a.id)(0),
                j = h(a, b) || e,
                k = f(a),
                l = g(a);
            return d.axis_rotated && (0 < a.value && e > l || a.value < 0 && l > e) && (l = e), [
                [k, l - (e - j)],
                [k, l - (e - j)],
                [k, l - (e - j)],
                [k, l - (e - j)]
            ]
        }
    }, i.lineWithRegions = function(a, b, c, d) {
        function e(a, b) {
            var c;
            for (c = 0; c < b.length; c++)
                if (b[c].start < a && a <= b[c].end) return !0;
            return !1
        }

        function f(a) {
            return "M" + a[0][0] + " " + a[0][1] + " " + a[1][0] + " " + a[1][1]
        }
        var g, h, i, j, k, l, m, n, o, r, s, t, u = this,
            v = u.config,
            w = -1,
            x = "M",
            y = u.isCategorized() ? .5 : 0,
            z = [];
        if (q(d))
            for (g = 0; g < d.length; g++) z[g] = {}, z[g].start = p(d[g].start) ? a[0].x : u.isTimeSeries() ? u.parseDate(d[g].start) : d[g].start, z[g].end = p(d[g].end) ? a[a.length - 1].x : u.isTimeSeries() ? u.parseDate(d[g].end) : d[g].end;
        for (s = v.axis_rotated ? function(a) {
                return c(a.value)
            } : function(a) {
                return b(a.x)
            }, t = v.axis_rotated ? function(a) {
                return b(a.x)
            } : function(a) {
                return c(a.value)
            }, i = u.isTimeSeries() ? function(a, d, e, g) {
                var h, i = a.x.getTime(),
                    j = d.x - a.x,
                    l = new Date(i + j * e),
                    m = new Date(i + j * (e + g));
                return h = v.axis_rotated ? [
                    [c(k(e)), b(l)],
                    [c(k(e + g)), b(m)]
                ] : [
                    [b(l), c(k(e))],
                    [b(m), c(k(e + g))]
                ], f(h)
            } : function(a, d, e, g) {
                var h;
                return h = v.axis_rotated ? [
                    [c(k(e), !0), b(j(e))],
                    [c(k(e + g), !0), b(j(e + g))]
                ] : [
                    [b(j(e), !0), c(k(e))],
                    [b(j(e + g), !0), c(k(e + g))]
                ], f(h)
            }, g = 0; g < a.length; g++) {
            if (p(z) || !e(a[g].x, z)) x += " " + s(a[g]) + " " + t(a[g]);
            else
                for (j = u.getScale(a[g - 1].x + y, a[g].x + y, u.isTimeSeries()), k = u.getScale(a[g - 1].value, a[g].value), l = b(a[g].x) - b(a[g - 1].x), m = c(a[g].value) - c(a[g - 1].value), n = Math.sqrt(Math.pow(l, 2) + Math.pow(m, 2)), o = 2 / n, r = 2 * o, h = o; 1 >= h; h += r) x += i(a[g - 1], a[g], h, o);
            w = a[g].x
        }
        return x
    }, i.updateArea = function(a) {
        var b = this,
            c = b.d3;
        b.mainArea = b.main.selectAll("." + l.areas).selectAll("." + l.area).data(b.lineData.bind(b)), b.mainArea.enter().append("path").attr("class", b.classArea.bind(b)).style("fill", b.color).style("opacity", function() {
            return b.orgAreaOpacity = +c.select(this).style("opacity"), 0
        }), b.mainArea.style("opacity", b.orgAreaOpacity), b.mainArea.exit().transition().duration(a).style("opacity", 0).remove()
    }, i.redrawArea = function(a, b) {
        return [(b ? this.mainArea.transition() : this.mainArea).attr("d", a).style("fill", this.color).style("opacity", this.orgAreaOpacity)]
    }, i.generateDrawArea = function(a, b) {
        var c = this,
            d = c.config,
            e = c.d3.svg.area(),
            f = c.generateGetAreaPoints(a, b),
            g = b ? c.getSubYScale : c.getYScale,
            h = function(a) {
                return (b ? c.subxx : c.xx).call(c, a)
            },
            i = function(a, b) {
                return d.data_groups.length > 0 ? f(a, b)[0][1] : g.call(c, a.id)(c.getAreaBaseValue(a.id))
            },
            j = function(a, b) {
                return d.data_groups.length > 0 ? f(a, b)[1][1] : g.call(c, a.id)(a.value)
            };
        return e = d.axis_rotated ? e.x0(i).x1(j).y(h) : e.x(h).y0(i).y1(j), d.line_connectNull || (e = e.defined(function(a) {
                return null !== a.value
            })),
            function(a) {
                var b, f = d.line_connectNull ? c.filterRemoveNull(a.values) : a.values,
                    g = 0,
                    h = 0;
                return c.isAreaType(a) ? (c.isStepType(a) && (f = c.convertValuesToStep(f)), b = e.interpolate(c.getInterpolate(a))(f)) : (f[0] && (g = c.x(f[0].x), h = c.getYScale(a.id)(f[0].value)), b = d.axis_rotated ? "M " + h + " " + g : "M " + g + " " + h), b ? b : "M 0 0"
            }
    }, i.getAreaBaseValue = function() {
        return 0
    }, i.generateGetAreaPoints = function(a, b) {
        var c = this,
            d = c.config,
            e = a.__max__ + 1,
            f = c.getShapeX(0, e, a, !!b),
            g = c.getShapeY(!!b),
            h = c.getShapeOffset(c.isAreaType, a, !!b),
            i = b ? c.getSubYScale : c.getYScale;
        return function(a, b) {
            var e = i.call(c, a.id)(0),
                j = h(a, b) || e,
                k = f(a),
                l = g(a);
            return d.axis_rotated && (0 < a.value && e > l || a.value < 0 && l > e) && (l = e), [
                [k, j],
                [k, l - (e - j)],
                [k, l - (e - j)],
                [k, j]
            ]
        }
    }, i.updateCircle = function() {
        var a = this;
        a.mainCircle = a.main.selectAll("." + l.circles).selectAll("." + l.circle).data(a.lineOrScatterData.bind(a)), a.mainCircle.enter().append("circle").attr("class", a.classCircle.bind(a)).attr("r", a.pointR.bind(a)).style("fill", a.color), a.mainCircle.style("opacity", a.initialOpacityForCircle.bind(a)), a.mainCircle.exit().remove()
    }, i.redrawCircle = function(a, b, c) {
        var d = this.main.selectAll("." + l.selectedCircle);
        return [(c ? this.mainCircle.transition() : this.mainCircle).style("opacity", this.opacityForCircle.bind(this)).style("fill", this.color).attr("cx", a).attr("cy", b), (c ? d.transition() : d).attr("cx", a).attr("cy", b)]
    }, i.circleX = function(a) {
        return a.x || 0 === a.x ? this.x(a.x) : null
    }, i.updateCircleY = function() {
        var a, b, c = this;
        c.config.data_groups.length > 0 ? (a = c.getShapeIndices(c.isLineType), b = c.generateGetLinePoints(a), c.circleY = function(a, c) {
            return b(a, c)[0][1]
        }) : c.circleY = function(a) {
            return c.getYScale(a.id)(a.value)
        }
    }, i.getCircles = function(a, b) {
        var c = this;
        return (b ? c.main.selectAll("." + l.circles + c.getTargetSelectorSuffix(b)) : c.main).selectAll("." + l.circle + (m(a) ? "-" + a : ""))
    }, i.expandCircles = function(a, b, c) {
        var d = this,
            e = d.pointExpandedR.bind(d);
        c && d.unexpandCircles(), d.getCircles(a, b).classed(l.EXPANDED, !0).attr("r", e)
    }, i.unexpandCircles = function(a) {
        var b = this,
            c = b.pointR.bind(b);
        b.getCircles(a).filter(function() {
            return b.d3.select(this).classed(l.EXPANDED)
        }).classed(l.EXPANDED, !1).attr("r", c)
    }, i.pointR = function(a) {
        var b = this,
            c = b.config;
        return b.isStepType(a) ? 0 : n(c.point_r) ? c.point_r(a) : c.point_r
    }, i.pointExpandedR = function(a) {
        var b = this,
            c = b.config;
        return c.point_focus_expand_enabled ? c.point_focus_expand_r ? c.point_focus_expand_r : 1.75 * b.pointR(a) : b.pointR(a)
    }, i.pointSelectR = function(a) {
        var b = this,
            c = b.config;
        return c.point_select_r ? c.point_select_r : 4 * b.pointR(a)
    }, i.isWithinCircle = function(a, b) {
        var c = this.d3,
            d = c.mouse(a),
            e = c.select(a),
            f = +e.attr("cx"),
            g = +e.attr("cy");
        return Math.sqrt(Math.pow(f - d[0], 2) + Math.pow(g - d[1], 2)) < b
    }, i.isWithinStep = function(a, b) {
        return Math.abs(b - this.d3.mouse(a)[1]) < 30
    }, i.initBar = function() {
        var a = this;
        a.main.select("." + l.chart).append("g").attr("class", l.chartBars)
    }, i.updateTargetsForBar = function(a) {
        var b, c, d = this,
            e = d.config,
            f = d.classChartBar.bind(d),
            g = d.classBars.bind(d),
            h = d.classFocus.bind(d);
        b = d.main.select("." + l.chartBars).selectAll("." + l.chartBar).data(a).attr("class", function(a) {
            return f(a) + h(a)
        }), c = b.enter().append("g").attr("class", f).style("opacity", 0).style("pointer-events", "none"), c.append("g").attr("class", g).style("cursor", function(a) {
            return e.data_selection_isselectable(a) ? "pointer" : null
        })
    }, i.updateBar = function(a) {
        var b = this,
            c = b.barData.bind(b),
            d = b.classBar.bind(b),
            e = b.initialOpacity.bind(b),
            f = function(a) {
                return b.color(a.id)
            };
        b.mainBar = b.main.selectAll("." + l.bars).selectAll("." + l.bar).data(c), b.mainBar.enter().append("path").attr("class", d).style("stroke", f).style("fill", f), b.mainBar.style("opacity", e), b.mainBar.exit().transition().duration(a).style("opacity", 0).remove()
    }, i.redrawBar = function(a, b) {
        return [(b ? this.mainBar.transition() : this.mainBar).attr("d", a).style("fill", this.color).style("opacity", 1)]
    }, i.getBarW = function(a, b) {
        var c = this,
            d = c.config,
            e = "number" == typeof d.bar_width ? d.bar_width : b ? a.tickInterval() * d.bar_width_ratio / b : 0;
        return d.bar_width_max && e > d.bar_width_max ? d.bar_width_max : e
    }, i.getBars = function(a, b) {
        var c = this;
        return (b ? c.main.selectAll("." + l.bars + c.getTargetSelectorSuffix(b)) : c.main).selectAll("." + l.bar + (m(a) ? "-" + a : ""))
    }, i.expandBars = function(a, b, c) {
        var d = this;
        c && d.unexpandBars(), d.getBars(a, b).classed(l.EXPANDED, !0)
    }, i.unexpandBars = function(a) {
        var b = this;
        b.getBars(a).classed(l.EXPANDED, !1)
    }, i.generateDrawBar = function(a, b) {
        var c = this,
            d = c.config,
            e = c.generateGetBarPoints(a, b);
        return function(a, b) {
            var c = e(a, b),
                f = d.axis_rotated ? 1 : 0,
                g = d.axis_rotated ? 0 : 1,
                h = "M " + c[0][f] + "," + c[0][g] + " L" + c[1][f] + "," + c[1][g] + " L" + c[2][f] + "," + c[2][g] + " L" + c[3][f] + "," + c[3][g] + " z";
            return h
        }
    }, i.generateGetBarPoints = function(a, b) {
        var c = this,
            d = b ? c.subXAxis : c.xAxis,
            e = a.__max__ + 1,
            f = c.getBarW(d, e),
            g = c.getShapeX(f, e, a, !!b),
            h = c.getShapeY(!!b),
            i = c.getShapeOffset(c.isBarType, a, !!b),
            j = b ? c.getSubYScale : c.getYScale;
        return function(a, b) {
            var d = j.call(c, a.id)(0),
                e = i(a, b) || d,
                k = g(a),
                l = h(a);
            return c.config.axis_rotated && (0 < a.value && d > l || a.value < 0 && l > d) && (l = d), [
                [k, e],
                [k, l - (d - e)],
                [k + f, l - (d - e)],
                [k + f, e]
            ]
        }
    }, i.isWithinBar = function(a) {
        var b = this.d3.mouse(a),
            c = a.getBoundingClientRect(),
            d = a.pathSegList.getItem(0),
            e = a.pathSegList.getItem(1),
            f = Math.min(d.x, e.x),
            g = Math.min(d.y, e.y),
            h = c.width,
            i = c.height,
            j = 2,
            k = f - j,
            l = f + h + j,
            m = g + i + j,
            n = g - j;
        return k < b[0] && b[0] < l && n < b[1] && b[1] < m
    }, i.initText = function() {
        var a = this;
        a.main.select("." + l.chart).append("g").attr("class", l.chartTexts), a.mainText = a.d3.selectAll([])
    }, i.updateTargetsForText = function(a) {
        var b, c, d = this,
            e = d.classChartText.bind(d),
            f = d.classTexts.bind(d),
            g = d.classFocus.bind(d);
        b = d.main.select("." + l.chartTexts).selectAll("." + l.chartText).data(a).attr("class", function(a) {
            return e(a) + g(a)
        }), c = b.enter().append("g").attr("class", e).style("opacity", 0).style("pointer-events", "none"), c.append("g").attr("class", f)
    }, i.updateText = function(a) {
        var b = this,
            c = b.config,
            d = b.barOrLineData.bind(b),
            e = b.classText.bind(b);
        b.mainText = b.main.selectAll("." + l.texts).selectAll("." + l.text).data(d), b.mainText.enter().append("text").attr("class", e).attr("text-anchor", function(a) {
            return c.axis_rotated ? a.value < 0 ? "end" : "start" : "middle"
        }).style("stroke", "none").style("fill", function(a) {
            return b.color(a)
        }).style("fill-opacity", 0), b.mainText.text(function(a, c, d) {
            return b.dataLabelFormat(a.id)(a.value, a.id, c, d)
        }), b.mainText.exit().transition().duration(a).style("fill-opacity", 0).remove()
    }, i.redrawText = function(a, b, c, d) {
        return [(d ? this.mainText.transition() : this.mainText).attr("x", a).attr("y", b).style("fill", this.color).style("fill-opacity", c ? 0 : this.opacityForText.bind(this))]
    }, i.getTextRect = function(a, b) {
        var c, d = this.d3.select("body").append("div").classed("c3", !0),
            e = d.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0);
        return e.selectAll(".dummy").data([a]).enter().append("text").classed(b ? b : "", !0).text(a).each(function() {
            c = this.getBoundingClientRect()
        }), d.remove(), c
    }, i.generateXYForText = function(a, b, c, d) {
        var e = this,
            f = e.generateGetAreaPoints(a, !1),
            g = e.generateGetBarPoints(b, !1),
            h = e.generateGetLinePoints(c, !1),
            i = d ? e.getXForText : e.getYForText;
        return function(a, b) {
            var c = e.isAreaType(a) ? f : e.isBarType(a) ? g : h;
            return i.call(e, c(a, b), a, this)
        }
    }, i.getXForText = function(a, b, c) {
        var d, e, f = this,
            g = c.getBoundingClientRect();
        return f.config.axis_rotated ? (e = f.isBarType(b) ? 4 : 6, d = a[2][1] + e * (b.value < 0 ? -1 : 1)) : d = f.hasType("bar") ? (a[2][0] + a[0][0]) / 2 : a[0][0], null === b.value && (d > f.width ? d = f.width - g.width : 0 > d && (d = 4)), d
    }, i.getYForText = function(a, b, c) {
        var d, e = this,
            f = c.getBoundingClientRect();
        return e.config.axis_rotated ? d = (a[0][0] + a[2][0] + .6 * f.height) / 2 : (d = a[2][1], b.value < 0 ? (d += f.height, e.isBarType(b) && e.isSafari() ? d -= 3 : !e.isBarType(b) && e.isChrome() && (d += 3)) : d += e.isBarType(b) ? -3 : -6), null !== b.value || e.config.axis_rotated || (d < f.height ? d = f.height : d > this.height && (d = this.height - 4)), d
    }, i.setTargetType = function(a, b) {
        var c = this,
            d = c.config;
        c.mapToTargetIds(a).forEach(function(a) {
            c.withoutFadeIn[a] = b === d.data_types[a], d.data_types[a] = b
        }), a || (d.data_type = b)
    }, i.hasType = function(a, b) {
        var c = this,
            d = c.config.data_types,
            e = !1;
        return b = b || c.data.targets, b && b.length ? b.forEach(function(b) {
            var c = d[b.id];
            (c && c.indexOf(a) >= 0 || !c && "line" === a) && (e = !0)
        }) : Object.keys(d).length ? Object.keys(d).forEach(function(b) {
            d[b] === a && (e = !0)
        }) : e = c.config.data_type === a, e
    }, i.hasArcType = function(a) {
        return this.hasType("pie", a) || this.hasType("donut", a) || this.hasType("gauge", a)
    }, i.isLineType = function(a) {
        var b = this.config,
            c = o(a) ? a : a.id;
        return !b.data_types[c] || ["line", "spline", "area", "area-spline", "step", "area-step"].indexOf(b.data_types[c]) >= 0
    }, i.isStepType = function(a) {
        var b = o(a) ? a : a.id;
        return ["step", "area-step"].indexOf(this.config.data_types[b]) >= 0
    }, i.isSplineType = function(a) {
        var b = o(a) ? a : a.id;
        return ["spline", "area-spline"].indexOf(this.config.data_types[b]) >= 0
    }, i.isAreaType = function(a) {
        var b = o(a) ? a : a.id;
        return ["area", "area-spline", "area-step"].indexOf(this.config.data_types[b]) >= 0
    }, i.isBarType = function(a) {
        var b = o(a) ? a : a.id;
        return "bar" === this.config.data_types[b]
    }, i.isScatterType = function(a) {
        var b = o(a) ? a : a.id;
        return "scatter" === this.config.data_types[b]
    }, i.isPieType = function(a) {
        var b = o(a) ? a : a.id;
        return "pie" === this.config.data_types[b]
    }, i.isGaugeType = function(a) {
        var b = o(a) ? a : a.id;
        return "gauge" === this.config.data_types[b]
    }, i.isDonutType = function(a) {
        var b = o(a) ? a : a.id;
        return "donut" === this.config.data_types[b]
    }, i.isArcType = function(a) {
        return this.isPieType(a) || this.isDonutType(a) || this.isGaugeType(a)
    }, i.lineData = function(a) {
        return this.isLineType(a) ? [a] : []
    }, i.arcData = function(a) {
        return this.isArcType(a.data) ? [a] : []
    }, i.barData = function(a) {
        return this.isBarType(a) ? a.values : []
    }, i.lineOrScatterData = function(a) {
        return this.isLineType(a) || this.isScatterType(a) ? a.values : []
    }, i.barOrLineData = function(a) {
        return this.isBarType(a) || this.isLineType(a) ? a.values : []
    }, i.initGrid = function() {
        var a = this,
            b = a.config,
            c = a.d3;
        a.grid = a.main.append("g").attr("clip-path", a.clipPathForGrid).attr("class", l.grid), b.grid_x_show && a.grid.append("g").attr("class", l.xgrids), b.grid_y_show && a.grid.append("g").attr("class", l.ygrids), b.grid_focus_show && a.grid.append("g").attr("class", l.xgridFocus).append("line").attr("class", l.xgridFocus), a.xgrid = c.selectAll([]), b.grid_lines_front || a.initGridLines()
    }, i.initGridLines = function() {
        var a = this,
            b = a.d3;
        a.gridLines = a.main.append("g").attr("clip-path", a.clipPathForGrid).attr("class", l.grid + " " + l.gridLines), a.gridLines.append("g").attr("class", l.xgridLines), a.gridLines.append("g").attr("class", l.ygridLines), a.xgridLines = b.selectAll([])
    }, i.updateXGrid = function(a) {
        var b = this,
            c = b.config,
            d = b.d3,
            e = b.generateGridData(c.grid_x_type, b.x),
            f = b.isCategorized() ? b.xAxis.tickOffset() : 0;
        b.xgridAttr = c.axis_rotated ? {
            x1: 0,
            x2: b.width,
            y1: function(a) {
                return b.x(a) - f
            },
            y2: function(a) {
                return b.x(a) - f
            }
        } : {
            x1: function(a) {
                return b.x(a) + f
            },
            x2: function(a) {
                return b.x(a) + f
            },
            y1: 0,
            y2: b.height
        }, b.xgrid = b.main.select("." + l.xgrids).selectAll("." + l.xgrid).data(e), b.xgrid.enter().append("line").attr("class", l.xgrid), a || b.xgrid.attr(b.xgridAttr).style("opacity", function() {
            return +d.select(this).attr(c.axis_rotated ? "y1" : "x1") === (c.axis_rotated ? b.height : 0) ? 0 : 1
        }), b.xgrid.exit().remove()
    }, i.updateYGrid = function() {
        var a = this,
            b = a.config,
            c = a.yAxis.tickValues() || a.y.ticks(b.grid_y_ticks);
        a.ygrid = a.main.select("." + l.ygrids).selectAll("." + l.ygrid).data(c), a.ygrid.enter().append("line").attr("class", l.ygrid), a.ygrid.attr("x1", b.axis_rotated ? a.y : 0).attr("x2", b.axis_rotated ? a.y : a.width).attr("y1", b.axis_rotated ? 0 : a.y).attr("y2", b.axis_rotated ? a.height : a.y), a.ygrid.exit().remove(), a.smoothLines(a.ygrid, "grid")
    }, i.gridTextAnchor = function(a) {
        return a.position ? a.position : "end"
    }, i.gridTextDx = function(a) {
        return "start" === a.position ? 4 : "middle" === a.position ? 0 : -4
    }, i.xGridTextX = function(a) {
        return "start" === a.position ? -this.height : "middle" === a.position ? -this.height / 2 : 0
    }, i.yGridTextX = function(a) {
        return "start" === a.position ? 0 : "middle" === a.position ? this.width / 2 : this.width
    }, i.updateGrid = function(a) {
        var b, c, d, e = this,
            f = e.main,
            g = e.config;
        e.grid.style("visibility", e.hasArcType() ? "hidden" : "visible"), f.select("line." + l.xgridFocus).style("visibility", "hidden"), g.grid_x_show && e.updateXGrid(), e.xgridLines = f.select("." + l.xgridLines).selectAll("." + l.xgridLine).data(g.grid_x_lines), b = e.xgridLines.enter().append("g").attr("class", function(a) {
            return l.xgridLine + (a["class"] ? " " + a["class"] : "")
        }), b.append("line").style("opacity", 0), b.append("text").attr("text-anchor", e.gridTextAnchor).attr("transform", g.axis_rotated ? "" : "rotate(-90)").attr("dx", e.gridTextDx).attr("dy", -5).style("opacity", 0), e.xgridLines.exit().transition().duration(a).style("opacity", 0).remove(), g.grid_y_show && e.updateYGrid(), e.ygridLines = f.select("." + l.ygridLines).selectAll("." + l.ygridLine).data(g.grid_y_lines), c = e.ygridLines.enter().append("g").attr("class", function(a) {
            return l.ygridLine + (a["class"] ? " " + a["class"] : "")
        }), c.append("line").style("opacity", 0), c.append("text").attr("text-anchor", e.gridTextAnchor).attr("transform", g.axis_rotated ? "rotate(-90)" : "").attr("dx", e.gridTextDx).attr("dy", -5).style("opacity", 0), d = e.yv.bind(e), e.ygridLines.select("line").transition().duration(a).attr("x1", g.axis_rotated ? d : 0).attr("x2", g.axis_rotated ? d : e.width).attr("y1", g.axis_rotated ? 0 : d).attr("y2", g.axis_rotated ? e.height : d).style("opacity", 1), e.ygridLines.select("text").transition().duration(a).attr("x", g.axis_rotated ? e.xGridTextX.bind(e) : e.yGridTextX.bind(e)).attr("y", d).text(function(a) {
            return a.text
        }).style("opacity", 1), e.ygridLines.exit().transition().duration(a).style("opacity", 0).remove()
    }, i.redrawGrid = function(a) {
        var b = this,
            c = b.config,
            d = b.xv.bind(b),
            e = b.xgridLines.select("line"),
            f = b.xgridLines.select("text");
        return [(a ? e.transition() : e).attr("x1", c.axis_rotated ? 0 : d).attr("x2", c.axis_rotated ? b.width : d).attr("y1", c.axis_rotated ? d : 0).attr("y2", c.axis_rotated ? d : b.height).style("opacity", 1), (a ? f.transition() : f).attr("x", c.axis_rotated ? b.yGridTextX.bind(b) : b.xGridTextX.bind(b)).attr("y", d).text(function(a) {
            return a.text
        }).style("opacity", 1)]
    }, i.showXGridFocus = function(a) {
        var b = this,
            c = b.config,
            d = a.filter(function(a) {
                return a && m(a.value)
            }),
            e = b.main.selectAll("line." + l.xgridFocus),
            f = b.xx.bind(b);
        c.tooltip_show && (b.hasType("scatter") || b.hasArcType() || (e.style("visibility", "visible").data([d[0]]).attr(c.axis_rotated ? "y1" : "x1", f).attr(c.axis_rotated ? "y2" : "x2", f), b.smoothLines(e, "grid")))
    }, i.hideXGridFocus = function() {
        this.main.select("line." + l.xgridFocus).style("visibility", "hidden")
    }, i.updateXgridFocus = function() {
        var a = this,
            b = a.config;
        a.main.select("line." + l.xgridFocus).attr("x1", b.axis_rotated ? 0 : -10).attr("x2", b.axis_rotated ? a.width : -10).attr("y1", b.axis_rotated ? -10 : 0).attr("y2", b.axis_rotated ? -10 : a.height)
    }, i.generateGridData = function(a, b) {
        var c, d, e, f, g = this,
            h = [],
            i = g.main.select("." + l.axisX).selectAll(".tick").size();
        if ("year" === a)
            for (c = g.getXDomain(), d = c[0].getFullYear(), e = c[1].getFullYear(), f = d; e >= f; f++) h.push(new Date(f + "-01-01 00:00:00"));
        else h = b.ticks(10), h.length > i && (h = h.filter(function(a) {
            return ("" + a).indexOf(".") < 0
        }));
        return h
    }, i.getGridFilterToRemove = function(a) {
        return a ? function(b) {
            var c = !1;
            return [].concat(a).forEach(function(a) {
                ("value" in a && b.value === a.value || "class" in a && b["class"] === a["class"]) && (c = !0)
            }), c
        } : function() {
            return !0
        }
    }, i.removeGridLines = function(a, b) {
        var c = this,
            d = c.config,
            e = c.getGridFilterToRemove(a),
            f = function(a) {
                return !e(a)
            },
            g = b ? l.xgridLines : l.ygridLines,
            h = b ? l.xgridLine : l.ygridLine;
        c.main.select("." + g).selectAll("." + h).filter(e).transition().duration(d.transition_duration).style("opacity", 0).remove(), b ? d.grid_x_lines = d.grid_x_lines.filter(f) : d.grid_y_lines = d.grid_y_lines.filter(f)
    }, i.initTooltip = function() {
        var a, b = this,
            c = b.config;
        if (b.tooltip = b.selectChart.style("position", "relative").append("div").attr("class", l.tooltipContainer).style("position", "absolute").style("pointer-events", "none").style("display", "none"), c.tooltip_init_show) {
            if (b.isTimeSeries() && o(c.tooltip_init_x)) {
                for (c.tooltip_init_x = b.parseDate(c.tooltip_init_x), a = 0; a < b.data.targets[0].values.length && b.data.targets[0].values[a].x - c.tooltip_init_x !== 0; a++);
                c.tooltip_init_x = a
            }
            b.tooltip.html(c.tooltip_contents.call(b, b.data.targets.map(function(a) {
                return b.addName(a.values[c.tooltip_init_x])
            }), b.axis.getXAxisTickFormat(), b.getYFormat(b.hasArcType()), b.color)), b.tooltip.style("top", c.tooltip_init_position.top).style("left", c.tooltip_init_position.left).style("display", "block")
        }
    }, i.getTooltipContent = function(a, b, c, d) {
        var e, f, g, h, i, j, k = this,
            m = k.config,
            n = m.tooltip_format_title || b,
            o = m.tooltip_format_name || function(a) {
                return a
            },
            p = m.tooltip_format_value || c;
        for (f = 0; f < a.length; f++) a[f] && (a[f].value || 0 === a[f].value) && (e || (g = n ? n(a[f].x) : a[f].x, e = "<table class='" + l.tooltip + "'>" + (g || 0 === g ? "<tr><th colspan='2'>" + g + "</th></tr>" : "")), h = p(a[f].value, a[f].ratio, a[f].id, a[f].index), void 0 !== h && (i = o(a[f].name, a[f].ratio, a[f].id, a[f].index), j = k.levelColor ? k.levelColor(a[f].value) : d(a[f].id), e += "<tr class='" + l.tooltipName + "-" + a[f].id + "'>", e += "<td class='name'><span style='background-color:" + j + "'></span>" + i + "</td>", e += "<td class='value'>" + h + "</td>", e += "</tr>"));
        return e + "</table>"
    }, i.tooltipPosition = function(a, b, c, d) {
        var e, f, g, h, i, j = this,
            k = j.config,
            l = j.d3,
            m = j.hasArcType(),
            n = l.mouse(d);
        return m ? (f = (j.width - (j.isLegendRight ? j.getLegendWidth() : 0)) / 2 + n[0], h = j.height / 2 + n[1] + 20) : (e = j.getSvgLeft(!0), k.axis_rotated ? (f = e + n[0] + 100, g = f + b, i = j.currentWidth - j.getCurrentPaddingRight(), h = j.x(a[0].x) + 20) : (f = e + j.getCurrentPaddingLeft(!0) + j.x(a[0].x) + 20, g = f + b, i = e + j.currentWidth - j.getCurrentPaddingRight(), h = n[1] + 15), g > i && (f -= g - i + 20), h + c > j.currentHeight && (h -= c + 30)), 0 > h && (h = 0), {
            top: h,
            left: f
        }
    }, i.showTooltip = function(a, b) {
        var c, d, e, f = this,
            g = f.config,
            h = f.hasArcType(),
            j = a.filter(function(a) {
                return a && m(a.value)
            }),
            k = g.tooltip_position || i.tooltipPosition;
        0 !== j.length && g.tooltip_show && (f.tooltip.html(g.tooltip_contents.call(f, a, f.axis.getXAxisTickFormat(), f.getYFormat(h), f.color)).style("display", "block"), c = f.tooltip.property("offsetWidth"), d = f.tooltip.property("offsetHeight"), e = k.call(this, j, c, d, b), f.tooltip.style("top", e.top + "px").style("left", e.left + "px"))
    }, i.hideTooltip = function() {
        this.tooltip.style("display", "none")
    }, i.initLegend = function() {
        var a = this;
        return a.legendItemTextBox = {}, a.legendHasRendered = !1, a.legend = a.svg.append("g").attr("transform", a.getTranslate("legend")), a.config.legend_show ? void a.updateLegendWithDefaults() : (a.legend.style("visibility", "hidden"), void(a.hiddenLegendIds = a.mapToIds(a.data.targets)))
    }, i.updateLegendWithDefaults = function() {
        var a = this;
        a.updateLegend(a.mapToIds(a.data.targets), {
            withTransform: !1,
            withTransitionForTransform: !1,
            withTransition: !1
        })
    }, i.updateSizeForLegend = function(a, b) {
        var c = this,
            d = c.config,
            e = {
                top: c.isLegendTop ? c.getCurrentPaddingTop() + d.legend_inset_y + 5.5 : c.currentHeight - a - c.getCurrentPaddingBottom() - d.legend_inset_y,
                left: c.isLegendLeft ? c.getCurrentPaddingLeft() + d.legend_inset_x + .5 : c.currentWidth - b - c.getCurrentPaddingRight() - d.legend_inset_x + .5
            };
        c.margin3 = {
            top: c.isLegendRight ? 0 : c.isLegendInset ? e.top : c.currentHeight - a,
            right: NaN,
            bottom: 0,
            left: c.isLegendRight ? c.currentWidth - b : c.isLegendInset ? e.left : 0
        }
    }, i.transformLegend = function(a) {
        var b = this;
        (a ? b.legend.transition() : b.legend).attr("transform", b.getTranslate("legend"))
    }, i.updateLegendStep = function(a) {
        this.legendStep = a
    }, i.updateLegendItemWidth = function(a) {
        this.legendItemWidth = a
    }, i.updateLegendItemHeight = function(a) {
        this.legendItemHeight = a
    }, i.getLegendWidth = function() {
        var a = this;
        return a.config.legend_show ? a.isLegendRight || a.isLegendInset ? a.legendItemWidth * (a.legendStep + 1) : a.currentWidth : 0
    }, i.getLegendHeight = function() {
        var a = this,
            b = 0;
        return a.config.legend_show && (b = a.isLegendRight ? a.currentHeight : Math.max(20, a.legendItemHeight) * (a.legendStep + 1)), b
    }, i.opacityForLegend = function(a) {
        return a.classed(l.legendItemHidden) ? null : 1
    }, i.opacityForUnfocusedLegend = function(a) {
        return a.classed(l.legendItemHidden) ? null : .3
    }, i.toggleFocusLegend = function(a, b) {
        var c = this;
        a = c.mapToTargetIds(a), c.legend.selectAll("." + l.legendItem).filter(function(b) {
            return a.indexOf(b) >= 0
        }).classed(l.legendItemFocused, b).transition().duration(100).style("opacity", function() {
            var a = b ? c.opacityForLegend : c.opacityForUnfocusedLegend;
            return a.call(c, c.d3.select(this))
        })
    }, i.revertLegend = function() {
        var a = this,
            b = a.d3;
        a.legend.selectAll("." + l.legendItem).classed(l.legendItemFocused, !1).transition().duration(100).style("opacity", function() {
            return a.opacityForLegend(b.select(this))
        })
    }, i.showLegend = function(a) {
        var b = this,
            c = b.config;
        c.legend_show || (c.legend_show = !0, b.legend.style("visibility", "visible"), b.legendHasRendered || b.updateLegendWithDefaults()), b.removeHiddenLegendIds(a), b.legend.selectAll(b.selectorLegends(a)).style("visibility", "visible").transition().style("opacity", function() {
            return b.opacityForLegend(b.d3.select(this))
        })
    }, i.hideLegend = function(a) {
        var b = this,
            c = b.config;
        c.legend_show && u(a) && (c.legend_show = !1, b.legend.style("visibility", "hidden")), b.addHiddenLegendIds(a), b.legend.selectAll(b.selectorLegends(a)).style("opacity", 0).style("visibility", "hidden")
    }, i.clearLegendItemTextBoxCache = function() {
        this.legendItemTextBox = {}
    }, i.updateLegend = function(a, b, c) {
        function d(a, b) {
            return u.legendItemTextBox[b] || (u.legendItemTextBox[b] = u.getTextRect(a.textContent, l.legendItem)), u.legendItemTextBox[b]
        }

        function e(b, c, e) {
            function f(a, b) {
                b || (g = (o - D - n) / 2, B > g && (g = (o - n) / 2, D = 0, J++)), I[a] = J, H[J] = u.isLegendInset ? 10 : g, E[a] = D, D += n
            }
            var g, h, i = 0 === e,
                j = e === a.length - 1,
                k = d(b, c),
                l = k.width + C + (!j || u.isLegendRight || u.isLegendInset ? y : 0),
                m = k.height + x,
                n = u.isLegendRight || u.isLegendInset ? m : l,
                o = u.isLegendRight || u.isLegendInset ? u.getLegendHeight() : u.getLegendWidth();
            return i && (D = 0, J = 0, z = 0, A = 0), v.legend_show && !u.isLegendToShow(c) ? void(F[c] = G[c] = I[c] = E[c] = 0) : (F[c] = l, G[c] = m, (!z || l >= z) && (z = l), (!A || m >= A) && (A = m), h = u.isLegendRight || u.isLegendInset ? A : z, void(v.legend_equally ? (Object.keys(F).forEach(function(a) {
                F[a] = z
            }), Object.keys(G).forEach(function(a) {
                G[a] = A
            }), g = (o - h * a.length) / 2, B > g ? (D = 0, J = 0, a.forEach(function(a) {
                f(a)
            })) : f(c, !0)) : f(c)))
        }
        var f, g, h, i, j, k, m, n, o, p, r, s, t, u = this,
            v = u.config,
            x = 4,
            y = 10,
            z = 0,
            A = 0,
            B = 10,
            C = 15,
            D = 0,
            E = {},
            F = {},
            G = {},
            H = [0],
            I = {},
            J = 0;
        b = b || {}, n = w(b, "withTransition", !0), o = w(b, "withTransitionForTransform", !0), u.isLegendInset && (J = v.legend_inset_step ? v.legend_inset_step : a.length, u.updateLegendStep(J)), u.isLegendRight ? (f = function(a) {
            return z * I[a]
        }, i = function(a) {
            return H[I[a]] + E[a]
        }) : u.isLegendInset ? (f = function(a) {
            return z * I[a] + 10
        }, i = function(a) {
            return H[I[a]] + E[a]
        }) : (f = function(a) {
            return H[I[a]] + E[a]
        }, i = function(a) {
            return A * I[a]
        }), g = function(a, b) {
            return f(a, b) + 14
        }, j = function(a, b) {
            return i(a, b) + 9
        }, h = function(a, b) {
            return f(a, b)
        }, k = function(a, b) {
            return i(a, b) - 5
        }, m = u.legend.selectAll("." + l.legendItem).data(a).enter().append("g").attr("class", function(a) {
            return u.generateClass(l.legendItem, a)
        }).style("visibility", function(a) {
            return u.isLegendToShow(a) ? "visible" : "hidden"
        }).style("cursor", "pointer").on("click", function(a) {
            v.legend_item_onclick ? v.legend_item_onclick.call(u, a) : u.d3.event.altKey ? (u.api.hide(), u.api.show(a)) : (u.api.toggle(a), u.isTargetToShow(a) ? u.api.focus(a) : u.api.revert())
        }).on("mouseover", function(a) {
            u.d3.select(this).classed(l.legendItemFocused, !0), !u.transiting && u.isTargetToShow(a) && u.api.focus(a), v.legend_item_onmouseover && v.legend_item_onmouseover.call(u, a)
        }).on("mouseout", function(a) {
            u.d3.select(this).classed(l.legendItemFocused, !1), u.api.revert(), v.legend_item_onmouseout && v.legend_item_onmouseout.call(u, a)
        }), m.append("text").text(function(a) {
            return q(v.data_names[a]) ? v.data_names[a] : a
        }).each(function(a, b) {
            e(this, a, b)
        }).style("pointer-events", "none").attr("x", u.isLegendRight || u.isLegendInset ? g : -200).attr("y", u.isLegendRight || u.isLegendInset ? -200 : j), m.append("rect").attr("class", l.legendItemEvent).style("fill-opacity", 0).attr("x", u.isLegendRight || u.isLegendInset ? h : -200).attr("y", u.isLegendRight || u.isLegendInset ? -200 : k), m.append("rect").attr("class", l.legendItemTile).style("pointer-events", "none").style("fill", u.color).attr("x", u.isLegendRight || u.isLegendInset ? g : -200).attr("y", u.isLegendRight || u.isLegendInset ? -200 : i).attr("width", 10).attr("height", 10), t = u.legend.select("." + l.legendBackground + " rect"), u.isLegendInset && z > 0 && 0 === t.size() && (t = u.legend.insert("g", "." + l.legendItem).attr("class", l.legendBackground).append("rect")), p = u.legend.selectAll("text").data(a).text(function(a) {
            return q(v.data_names[a]) ? v.data_names[a] : a
        }).each(function(a, b) {
            e(this, a, b)
        }), (n ? p.transition() : p).attr("x", g).attr("y", j), r = u.legend.selectAll("rect." + l.legendItemEvent).data(a), (n ? r.transition() : r).attr("width", function(a) {
            return F[a]
        }).attr("height", function(a) {
            return G[a]
        }).attr("x", h).attr("y", k), s = u.legend.selectAll("rect." + l.legendItemTile).data(a), (n ? s.transition() : s).style("fill", u.color).attr("x", f).attr("y", i), t && (n ? t.transition() : t).attr("height", u.getLegendHeight() - 12).attr("width", z * (J + 1) + 10), u.legend.selectAll("." + l.legendItem).classed(l.legendItemHidden, function(a) {
            return !u.isTargetToShow(a)
        }), u.updateLegendItemWidth(z), u.updateLegendItemHeight(A), u.updateLegendStep(J), u.updateSizes(), u.updateScales(), u.updateSvgSize(), u.transformAll(o, c), u.legendHasRendered = !0
    }, c(b, f), f.prototype.init = function() {
        var a = this.owner,
            b = a.config,
            c = a.main;
        a.axes.x = c.append("g").attr("class", l.axis + " " + l.axisX).attr("clip-path", a.clipPathForXAxis).attr("transform", a.getTranslate("x")).style("visibility", b.axis_x_show ? "visible" : "hidden"), a.axes.x.append("text").attr("class", l.axisXLabel).attr("transform", b.axis_rotated ? "rotate(-90)" : "").style("text-anchor", this.textAnchorForXAxisLabel.bind(this)), a.axes.y = c.append("g").attr("class", l.axis + " " + l.axisY).attr("clip-path", b.axis_y_inner ? "" : a.clipPathForYAxis).attr("transform", a.getTranslate("y")).style("visibility", b.axis_y_show ? "visible" : "hidden"), a.axes.y.append("text").attr("class", l.axisYLabel).attr("transform", b.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForYAxisLabel.bind(this)), a.axes.y2 = c.append("g").attr("class", l.axis + " " + l.axisY2).attr("transform", a.getTranslate("y2")).style("visibility", b.axis_y2_show ? "visible" : "hidden"), a.axes.y2.append("text").attr("class", l.axisY2Label).attr("transform", b.axis_rotated ? "" : "rotate(-90)").style("text-anchor", this.textAnchorForY2AxisLabel.bind(this))
    }, f.prototype.getXAxis = function(a, b, c, d, e, f, h) {
        var i = this.owner,
            j = i.config,
            k = {
                isCategory: i.isCategorized(),
                withOuterTick: e,
                tickMultiline: j.axis_x_tick_multiline,
                tickWidth: j.axis_x_tick_width,
                tickTextRotate: h ? 0 : j.axis_x_tick_rotate,
                withoutTransition: f
            },
            l = g(i.d3, k).scale(a).orient(b);
        return i.isTimeSeries() && d && (d = d.map(function(a) {
            return i.parseDate(a)
        })), l.tickFormat(c).tickValues(d), i.isCategorized() && (l.tickCentered(j.axis_x_tick_centered), u(j.axis_x_tick_culling) && (j.axis_x_tick_culling = !1)), l
    }, f.prototype.updateXAxisTickValues = function(a, b) {
        var c, d = this.owner,
            e = d.config;
        return (e.axis_x_tick_fit || e.axis_x_tick_count) && (c = this.generateTickValues(d.mapTargetsToUniqueXs(a), e.axis_x_tick_count, d.isTimeSeries())), b ? b.tickValues(c) : (d.xAxis.tickValues(c), d.subXAxis.tickValues(c)), c
    }, f.prototype.getYAxis = function(a, b, c, d, e, f) {
        var h = {
                withOuterTick: e,
                withoutTransition: f
            },
            i = this.owner,
            j = i.d3,
            k = i.config,
            l = g(j, h).scale(a).orient(b).tickFormat(c);
        return i.isTimeSeriesY() ? l.ticks(j.time[k.axis_y_tick_time_value], k.axis_y_tick_time_interval) : l.tickValues(d), l
    }, f.prototype.getId = function(a) {
        var b = this.owner.config;
        return a in b.data_axes ? b.data_axes[a] : "y"
    }, f.prototype.getXAxisTickFormat = function() {
        var a = this.owner,
            b = a.config,
            c = a.isTimeSeries() ? a.defaultAxisTimeFormat : a.isCategorized() ? a.categoryName : function(a) {
                return 0 > a ? a.toFixed(0) : a
            };
        return b.axis_x_tick_format && (n(b.axis_x_tick_format) ? c = b.axis_x_tick_format : a.isTimeSeries() && (c = function(c) {
            return c ? a.axisTimeFormat(b.axis_x_tick_format)(c) : ""
        })), n(c) ? function(b) {
            return c.call(a, b)
        } : c
    }, f.prototype.getTickValues = function(a, b) {
        return a ? a : b ? b.tickValues() : void 0
    }, f.prototype.getXAxisTickValues = function() {
        return this.getTickValues(this.owner.config.axis_x_tick_values, this.owner.xAxis)
    }, f.prototype.getYAxisTickValues = function() {
        return this.getTickValues(this.owner.config.axis_y_tick_values, this.owner.yAxis)
    }, f.prototype.getY2AxisTickValues = function() {
        return this.getTickValues(this.owner.config.axis_y2_tick_values, this.owner.y2Axis)
    }, f.prototype.getLabelOptionByAxisId = function(a) {
        var b, c = this.owner,
            d = c.config;
        return "y" === a ? b = d.axis_y_label : "y2" === a ? b = d.axis_y2_label : "x" === a && (b = d.axis_x_label), b
    }, f.prototype.getLabelText = function(a) {
        var b = this.getLabelOptionByAxisId(a);
        return o(b) ? b : b ? b.text : null
    }, f.prototype.setLabelText = function(a, b) {
        var c = this.owner,
            d = c.config,
            e = this.getLabelOptionByAxisId(a);
        o(e) ? "y" === a ? d.axis_y_label = b : "y2" === a ? d.axis_y2_label = b : "x" === a && (d.axis_x_label = b) : e && (e.text = b)
    }, f.prototype.getLabelPosition = function(a, b) {
        var c = this.getLabelOptionByAxisId(a),
            d = c && "object" == typeof c && c.position ? c.position : b;
        return {
            isInner: d.indexOf("inner") >= 0,
            isOuter: d.indexOf("outer") >= 0,
            isLeft: d.indexOf("left") >= 0,
            isCenter: d.indexOf("center") >= 0,
            isRight: d.indexOf("right") >= 0,
            isTop: d.indexOf("top") >= 0,
            isMiddle: d.indexOf("middle") >= 0,
            isBottom: d.indexOf("bottom") >= 0
        }
    }, f.prototype.getXAxisLabelPosition = function() {
        return this.getLabelPosition("x", this.owner.config.axis_rotated ? "inner-top" : "inner-right")
    }, f.prototype.getYAxisLabelPosition = function() {
        return this.getLabelPosition("y", this.owner.config.axis_rotated ? "inner-right" : "inner-top")
    }, f.prototype.getY2AxisLabelPosition = function() {
        return this.getLabelPosition("y2", this.owner.config.axis_rotated ? "inner-right" : "inner-top")
    }, f.prototype.getLabelPositionById = function(a) {
        return "y2" === a ? this.getY2AxisLabelPosition() : "y" === a ? this.getYAxisLabelPosition() : this.getXAxisLabelPosition()
    }, f.prototype.textForXAxisLabel = function() {
        return this.getLabelText("x")
    }, f.prototype.textForYAxisLabel = function() {
        return this.getLabelText("y")
    }, f.prototype.textForY2AxisLabel = function() {
        return this.getLabelText("y2")
    }, f.prototype.xForAxisLabel = function(a, b) {
        var c = this.owner;
        return a ? b.isLeft ? 0 : b.isCenter ? c.width / 2 : c.width : b.isBottom ? -c.height : b.isMiddle ? -c.height / 2 : 0
    }, f.prototype.dxForAxisLabel = function(a, b) {
        return a ? b.isLeft ? "0.5em" : b.isRight ? "-0.5em" : "0" : b.isTop ? "-0.5em" : b.isBottom ? "0.5em" : "0"
    }, f.prototype.textAnchorForAxisLabel = function(a, b) {
        return a ? b.isLeft ? "start" : b.isCenter ? "middle" : "end" : b.isBottom ? "start" : b.isMiddle ? "middle" : "end"
    }, f.prototype.xForXAxisLabel = function() {
        return this.xForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition())
    }, f.prototype.xForYAxisLabel = function() {
        return this.xForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition())
    }, f.prototype.xForY2AxisLabel = function() {
        return this.xForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition())
    }, f.prototype.dxForXAxisLabel = function() {
        return this.dxForAxisLabel(!this.owner.config.axis_rotated, this.getXAxisLabelPosition())
    }, f.prototype.dxForYAxisLabel = function() {
        return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getYAxisLabelPosition())
    }, f.prototype.dxForY2AxisLabel = function() {
        return this.dxForAxisLabel(this.owner.config.axis_rotated, this.getY2AxisLabelPosition())
    }, f.prototype.dyForXAxisLabel = function() {
        var a = this.owner,
            b = a.config,
            c = this.getXAxisLabelPosition();
        return b.axis_rotated ? c.isInner ? "1.2em" : -25 - this.getMaxTickWidth("x") : c.isInner ? "-0.5em" : b.axis_x_height ? b.axis_x_height - 10 : "3em"
    }, f.prototype.dyForYAxisLabel = function() {
        var a = this.owner,
            b = this.getYAxisLabelPosition();
        return a.config.axis_rotated ? b.isInner ? "-0.5em" : "3em" : b.isInner ? "1.2em" : -10 - (a.config.axis_y_inner ? 0 : this.getMaxTickWidth("y") + 10)
    }, f.prototype.dyForY2AxisLabel = function() {
        var a = this.owner,
            b = this.getY2AxisLabelPosition();
        return a.config.axis_rotated ? b.isInner ? "1.2em" : "-2.2em" : b.isInner ? "-0.5em" : 15 + (a.config.axis_y2_inner ? 0 : this.getMaxTickWidth("y2") + 15)
    }, f.prototype.textAnchorForXAxisLabel = function() {
        var a = this.owner;
        return this.textAnchorForAxisLabel(!a.config.axis_rotated, this.getXAxisLabelPosition())
    }, f.prototype.textAnchorForYAxisLabel = function() {
        var a = this.owner;
        return this.textAnchorForAxisLabel(a.config.axis_rotated, this.getYAxisLabelPosition())
    }, f.prototype.textAnchorForY2AxisLabel = function() {
        var a = this.owner;
        return this.textAnchorForAxisLabel(a.config.axis_rotated, this.getY2AxisLabelPosition())
    }, f.prototype.getMaxTickWidth = function(a, b) {
        var c, d, e, f, g, h = this.owner,
            i = h.config,
            j = 0;
        return b && h.currentMaxTickWidths[a] ? h.currentMaxTickWidths[a] : (h.svg && (c = h.filterTargetsToShow(h.data.targets), "y" === a ? (d = h.y.copy().domain(h.getYDomain(c, "y")), e = this.getYAxis(d, h.yOrient, i.axis_y_tick_format, h.yAxisTickValues, !1, !0)) : "y2" === a ? (d = h.y2.copy().domain(h.getYDomain(c, "y2")), e = this.getYAxis(d, h.y2Orient, i.axis_y2_tick_format, h.y2AxisTickValues, !1, !0)) : (d = h.x.copy().domain(h.getXDomain(c)), e = this.getXAxis(d, h.xOrient, h.xAxisTickFormat, h.xAxisTickValues, !1, !0, !0), this.updateXAxisTickValues(c, e)), f = h.d3.select("body").append("div").classed("c3", !0), g = f.append("svg").style("visibility", "hidden").style("position", "fixed").style("top", 0).style("left", 0), g.append("g").call(e).each(function() {
            h.d3.select(this).selectAll("text").each(function() {
                var a = this.getBoundingClientRect();
                j < a.width && (j = a.width)
            }), f.remove()
        })), h.currentMaxTickWidths[a] = 0 >= j ? h.currentMaxTickWidths[a] : j, h.currentMaxTickWidths[a])
    }, f.prototype.updateLabels = function(a) {
        var b = this.owner,
            c = b.main.select("." + l.axisX + " ." + l.axisXLabel),
            d = b.main.select("." + l.axisY + " ." + l.axisYLabel),
            e = b.main.select("." + l.axisY2 + " ." + l.axisY2Label);
        (a ? c.transition() : c).attr("x", this.xForXAxisLabel.bind(this)).attr("dx", this.dxForXAxisLabel.bind(this)).attr("dy", this.dyForXAxisLabel.bind(this)).text(this.textForXAxisLabel.bind(this)), (a ? d.transition() : d).attr("x", this.xForYAxisLabel.bind(this)).attr("dx", this.dxForYAxisLabel.bind(this)).attr("dy", this.dyForYAxisLabel.bind(this)).text(this.textForYAxisLabel.bind(this)), (a ? e.transition() : e).attr("x", this.xForY2AxisLabel.bind(this)).attr("dx", this.dxForY2AxisLabel.bind(this)).attr("dy", this.dyForY2AxisLabel.bind(this)).text(this.textForY2AxisLabel.bind(this))
    }, f.prototype.getPadding = function(a, b, c, d) {
        return m(a[b]) ? "ratio" === a.unit ? a[b] * d : this.convertPixelsToAxisPadding(a[b], d) : c
    }, f.prototype.convertPixelsToAxisPadding = function(a, b) {
        var c = this.owner,
            d = c.config.axis_rotated ? c.width : c.height;
        return b * (a / d)
    }, f.prototype.generateTickValues = function(a, b, c) {
        var d, e, f, g, h, i, j, k = a;
        if (b)
            if (d = n(b) ? b() : b, 1 === d) k = [a[0]];
            else if (2 === d) k = [a[0], a[a.length - 1]];
        else if (d > 2) {
            for (g = d - 2, e = a[0], f = a[a.length - 1], h = (f - e) / (g + 1), k = [e], i = 0; g > i; i++) j = +e + h * (i + 1), k.push(c ? new Date(j) : j);
            k.push(f)
        }
        return c || (k = k.sort(function(a, b) {
            return a - b
        })), k
    }, f.prototype.generateTransitions = function(a) {
        var b = this.owner,
            c = b.axes;
        return {
            axisX: a ? c.x.transition().duration(a) : c.x,
            axisY: a ? c.y.transition().duration(a) : c.y,
            axisY2: a ? c.y2.transition().duration(a) : c.y2,
            axisSubX: a ? c.subx.transition().duration(a) : c.subx
        }
    }, f.prototype.redraw = function(a, b) {
        var c = this.owner;
        c.axes.x.style("opacity", b ? 0 : 1), c.axes.y.style("opacity", b ? 0 : 1), c.axes.y2.style("opacity", b ? 0 : 1), c.axes.subx.style("opacity", b ? 0 : 1), a.axisX.call(c.xAxis), a.axisY.call(c.yAxis), a.axisY2.call(c.y2Axis), a.axisSubX.call(c.subXAxis)
    }, i.getClipPath = function(b) {
        var c = a.navigator.appVersion.toLowerCase().indexOf("msie 9.") >= 0;
        return "url(" + (c ? "" : document.URL.split("#")[0]) + "#" + b + ")"
    }, i.appendClip = function(a, b) {
        return a.append("clipPath").attr("id", b).append("rect")
    }, i.getAxisClipX = function(a) {
        var b = Math.max(30, this.margin.left);
        return a ? -(1 + b) : -(b - 1)
    }, i.getAxisClipY = function(a) {
        return a ? -20 : -this.margin.top
    }, i.getXAxisClipX = function() {
        var a = this;
        return a.getAxisClipX(!a.config.axis_rotated)
    }, i.getXAxisClipY = function() {
        var a = this;
        return a.getAxisClipY(!a.config.axis_rotated)
    }, i.getYAxisClipX = function() {
        var a = this;
        return a.config.axis_y_inner ? -1 : a.getAxisClipX(a.config.axis_rotated)
    }, i.getYAxisClipY = function() {
        var a = this;
        return a.getAxisClipY(a.config.axis_rotated)
    }, i.getAxisClipWidth = function(a) {
        var b = this,
            c = Math.max(30, b.margin.left),
            d = Math.max(30, b.margin.right);
        return a ? b.width + 2 + c + d : b.margin.left + 20
    }, i.getAxisClipHeight = function(a) {
        return (a ? this.margin.bottom : this.margin.top + this.height) + 20
    }, i.getXAxisClipWidth = function() {
        var a = this;
        return a.getAxisClipWidth(!a.config.axis_rotated)
    }, i.getXAxisClipHeight = function() {
        var a = this;
        return a.getAxisClipHeight(!a.config.axis_rotated)
    }, i.getYAxisClipWidth = function() {
        var a = this;
        return a.getAxisClipWidth(a.config.axis_rotated) + (a.config.axis_y_inner ? 20 : 0)
    }, i.getYAxisClipHeight = function() {
        var a = this;
        return a.getAxisClipHeight(a.config.axis_rotated)
    }, i.initPie = function() {
        var a = this,
            b = a.d3,
            c = a.config;
        a.pie = b.layout.pie().value(function(a) {
            return a.values.reduce(function(a, b) {
                return a + b.value
            }, 0)
        }), c.data_order || a.pie.sort(null)
    }, i.updateRadius = function() {
        var a = this,
            b = a.config,
            c = b.gauge_width || b.donut_width;
        a.radiusExpanded = Math.min(a.arcWidth, a.arcHeight) / 2, a.radius = .95 * a.radiusExpanded, a.innerRadiusRatio = c ? (a.radius - c) / a.radius : .6, a.innerRadius = a.hasType("donut") || a.hasType("gauge") ? a.radius * a.innerRadiusRatio : 0
    }, i.updateArc = function() {
        var a = this;
        a.svgArc = a.getSvgArc(), a.svgArcExpanded = a.getSvgArcExpanded(), a.svgArcExpandedSub = a.getSvgArcExpanded(.98)
    }, i.updateAngle = function(a) {
        var b, c, d = this,
            e = d.config,
            f = !1,
            g = 0,
            h = e.gauge_min,
            i = e.gauge_max;
        return d.pie(d.filterTargetsToShow(d.data.targets)).forEach(function(b) {
            f || b.data.id !== a.data.id || (f = !0, a = b, a.index = g), g++
        }), isNaN(a.startAngle) && (a.startAngle = 0), isNaN(a.endAngle) && (a.endAngle = a.startAngle), d.isGaugeType(a.data) && (b = Math.PI / (i - h), c = a.value < h ? 0 : a.value < i ? a.value - h : i - h, a.startAngle = -1 * (Math.PI / 2), a.endAngle = a.startAngle + b * c), f ? a : null
    }, i.getSvgArc = function() {
        var a = this,
            b = a.d3.svg.arc().outerRadius(a.radius).innerRadius(a.innerRadius),
            c = function(c, d) {
                var e;
                return d ? b(c) : (e = a.updateAngle(c), e ? b(e) : "M 0 0")
            };
        return c.centroid = b.centroid, c
    }, i.getSvgArcExpanded = function(a) {
        var b = this,
            c = b.d3.svg.arc().outerRadius(b.radiusExpanded * (a ? a : 1)).innerRadius(b.innerRadius);
        return function(a) {
            var d = b.updateAngle(a);
            return d ? c(d) : "M 0 0"
        }
    }, i.getArc = function(a, b, c) {
        return c || this.isArcType(a.data) ? this.svgArc(a, b) : "M 0 0"
    }, i.transformForArcLabel = function(a) {
        var b, c, d, e, f, g = this,
            h = g.updateAngle(a),
            i = "";
        return h && !g.hasType("gauge") && (b = this.svgArc.centroid(h), c = isNaN(b[0]) ? 0 : b[0], d = isNaN(b[1]) ? 0 : b[1], e = Math.sqrt(c * c + d * d), f = g.radius && e ? (36 / g.radius > .375 ? 1.175 - 36 / g.radius : .8) * g.radius / e : 0, i = "translate(" + c * f + "," + d * f + ")"), i
    }, i.getArcRatio = function(a) {
        var b = this,
            c = b.hasType("gauge") ? Math.PI : 2 * Math.PI;
        return a ? (a.endAngle - a.startAngle) / c : null
    }, i.convertToArcData = function(a) {
        return this.addName({
            id: a.data.id,
            value: a.value,
            ratio: this.getArcRatio(a),
            index: a.index
        })
    }, i.textForArcLabel = function(a) {
        var b, c, d, e, f, g = this;
        return g.shouldShowArcLabel() ? (b = g.updateAngle(a), c = b ? b.value : null, d = g.getArcRatio(b), e = a.data.id, g.hasType("gauge") || g.meetsArcLabelThreshold(d) ? (f = g.getArcLabelFormat(), f ? f(c, d, e) : g.defaultArcValueFormat(c, d)) : "") : ""
    }, i.expandArc = function(b) {
        var c, d = this;
        return d.transiting ? void(c = a.setInterval(function() {
            d.transiting || (a.clearInterval(c), d.legend.selectAll(".c3-legend-item-focused").size() > 0 && d.expandArc(b))
        }, 10)) : (b = d.mapToTargetIds(b), void d.svg.selectAll(d.selectorTargets(b, "." + l.chartArc)).each(function(a) {
            d.shouldExpand(a.data.id) && d.d3.select(this).selectAll("path").transition().duration(50).attr("d", d.svgArcExpanded).transition().duration(100).attr("d", d.svgArcExpandedSub).each(function(a) {
                d.isDonutType(a.data)
            })
        }))
    }, i.unexpandArc = function(a) {
        var b = this;
        b.transiting || (a = b.mapToTargetIds(a), b.svg.selectAll(b.selectorTargets(a, "." + l.chartArc)).selectAll("path").transition().duration(50).attr("d", b.svgArc), b.svg.selectAll("." + l.arc).style("opacity", 1))
    }, i.shouldExpand = function(a) {
        var b = this,
            c = b.config;
        return b.isDonutType(a) && c.donut_expand || b.isGaugeType(a) && c.gauge_expand || b.isPieType(a) && c.pie_expand
    }, i.shouldShowArcLabel = function() {
        var a = this,
            b = a.config,
            c = !0;
        return a.hasType("donut") ? c = b.donut_label_show : a.hasType("pie") && (c = b.pie_label_show), c
    }, i.meetsArcLabelThreshold = function(a) {
        var b = this,
            c = b.config,
            d = b.hasType("donut") ? c.donut_label_threshold : c.pie_label_threshold;
        return a >= d
    }, i.getArcLabelFormat = function() {
        var a = this,
            b = a.config,
            c = b.pie_label_format;
        return a.hasType("gauge") ? c = b.gauge_label_format : a.hasType("donut") && (c = b.donut_label_format), c
    }, i.getArcTitle = function() {
        var a = this;
        return a.hasType("donut") ? a.config.donut_title : ""
    }, i.updateTargetsForArc = function(a) {
        var b, c, d = this,
            e = d.main,
            f = d.classChartArc.bind(d),
            g = d.classArcs.bind(d),
            h = d.classFocus.bind(d);
        b = e.select("." + l.chartArcs).selectAll("." + l.chartArc).data(d.pie(a)).attr("class", function(a) {
            return f(a) + h(a.data)
        }), c = b.enter().append("g").attr("class", f), c.append("g").attr("class", g), c.append("text").attr("dy", d.hasType("gauge") ? "-.1em" : ".35em").style("opacity", 0).style("text-anchor", "middle").style("pointer-events", "none")
    }, i.initArc = function() {
        var a = this;
        a.arcs = a.main.select("." + l.chart).append("g").attr("class", l.chartArcs).attr("transform", a.getTranslate("arc")), a.arcs.append("text").attr("class", l.chartArcsTitle).style("text-anchor", "middle").text(a.getArcTitle())
    }, i.redrawArc = function(a, b, c) {
        var d, e = this,
            f = e.d3,
            g = e.config,
            h = e.main;
        d = h.selectAll("." + l.arcs).selectAll("." + l.arc).data(e.arcData.bind(e)), d.enter().append("path").attr("class", e.classArc.bind(e)).style("fill", function(a) {
            return e.color(a.data)
        }).style("cursor", function(a) {
            return g.interaction_enabled && g.data_selection_isselectable(a) ? "pointer" : null
        }).style("opacity", 0).each(function(a) {
            e.isGaugeType(a.data) && (a.startAngle = a.endAngle = -1 * (Math.PI / 2)), this._current = a
        }), d.attr("transform", function(a) {
            return !e.isGaugeType(a.data) && c ? "scale(0)" : ""
        }).style("opacity", function(a) {
            return a === this._current ? 0 : 1
        }).on("mouseover", g.interaction_enabled ? function(a) {
            var b, c;
            e.transiting || (b = e.updateAngle(a), c = e.convertToArcData(b), e.expandArc(b.data.id), e.api.focus(b.data.id), e.toggleFocusLegend(b.data.id, !0), e.config.data_onmouseover(c, this))
        } : null).on("mousemove", g.interaction_enabled ? function(a) {
            var b = e.updateAngle(a),
                c = e.convertToArcData(b),
                d = [c];
            e.showTooltip(d, this)
        } : null).on("mouseout", g.interaction_enabled ? function(a) {
            var b, c;
            e.transiting || (b = e.updateAngle(a), c = e.convertToArcData(b), e.unexpandArc(b.data.id), e.api.revert(), e.revertLegend(), e.hideTooltip(), e.config.data_onmouseout(c, this))
        } : null).on("click", g.interaction_enabled ? function(a, b) {
            var c = e.updateAngle(a),
                d = e.convertToArcData(c);
            e.toggleShape && e.toggleShape(this, d, b), e.config.data_onclick.call(e.api, d, this)
        } : null).each(function() {
            e.transiting = !0
        }).transition().duration(a).attrTween("d", function(a) {
            var b, c = e.updateAngle(a);
            return c ? (isNaN(this._current.startAngle) && (this._current.startAngle = 0), isNaN(this._current.endAngle) && (this._current.endAngle = this._current.startAngle), b = f.interpolate(this._current, c), this._current = b(0), function(c) {
                var d = b(c);
                return d.data = a.data, e.getArc(d, !0)
            }) : function() {
                return "M 0 0"
            }
        }).attr("transform", c ? "scale(1)" : "").style("fill", function(a) {
            return e.levelColor ? e.levelColor(a.data.values[0].value) : e.color(a.data.id)
        }).style("opacity", 1).call(e.endall, function() {
            e.transiting = !1
        }), d.exit().transition().duration(b).style("opacity", 0).remove(), h.selectAll("." + l.chartArc).select("text").style("opacity", 0).attr("class", function(a) {
            return e.isGaugeType(a.data) ? l.gaugeValue : ""
        }).text(e.textForArcLabel.bind(e)).attr("transform", e.transformForArcLabel.bind(e)).style("font-size", function(a) {
            return e.isGaugeType(a.data) ? Math.round(e.radius / 5) + "px" : ""
        }).transition().duration(a).style("opacity", function(a) {
            return e.isTargetToShow(a.data.id) && e.isArcType(a.data) ? 1 : 0
        }), h.select("." + l.chartArcsTitle).style("opacity", e.hasType("donut") || e.hasType("gauge") ? 1 : 0), e.hasType("gauge") && (e.arcs.select("." + l.chartArcsBackground).attr("d", function() {
            var a = {
                data: [{
                    value: g.gauge_max
                }],
                startAngle: -1 * (Math.PI / 2),
                endAngle: Math.PI / 2
            };
            return e.getArc(a, !0, !0)
        }), e.arcs.select("." + l.chartArcsGaugeUnit).attr("dy", ".75em").text(g.gauge_label_show ? g.gauge_units : ""), e.arcs.select("." + l.chartArcsGaugeMin).attr("dx", -1 * (e.innerRadius + (e.radius - e.innerRadius) / 2) + "px").attr("dy", "1.2em").text(g.gauge_label_show ? g.gauge_min : ""), e.arcs.select("." + l.chartArcsGaugeMax).attr("dx", e.innerRadius + (e.radius - e.innerRadius) / 2 + "px").attr("dy", "1.2em").text(g.gauge_label_show ? g.gauge_max : ""))
    }, i.initGauge = function() {
        var a = this.arcs;
        this.hasType("gauge") && (a.append("path").attr("class", l.chartArcsBackground), a.append("text").attr("class", l.chartArcsGaugeUnit).style("text-anchor", "middle").style("pointer-events", "none"), a.append("text").attr("class", l.chartArcsGaugeMin).style("text-anchor", "middle").style("pointer-events", "none"), a.append("text").attr("class", l.chartArcsGaugeMax).style("text-anchor", "middle").style("pointer-events", "none"))
    }, i.getGaugeLabelHeight = function() {
        return this.config.gauge_label_show ? 20 : 0
    }, i.initRegion = function() {
        var a = this;
        a.region = a.main.append("g").attr("clip-path", a.clipPath).attr("class", l.regions)
    }, i.updateRegion = function(a) {
        var b = this,
            c = b.config;
        b.region.style("visibility", b.hasArcType() ? "hidden" : "visible"), b.mainRegion = b.main.select("." + l.regions).selectAll("." + l.region).data(c.regions), b.mainRegion.enter().append("g").attr("class", b.classRegion.bind(b)).append("rect").style("fill-opacity", 0), b.mainRegion.exit().transition().duration(a).style("opacity", 0).remove()
    }, i.redrawRegion = function(a) {
        var b = this,
            c = b.mainRegion.selectAll("rect"),
            d = b.regionX.bind(b),
            e = b.regionY.bind(b),
            f = b.regionWidth.bind(b),
            g = b.regionHeight.bind(b);
        return [(a ? c.transition() : c).attr("x", d).attr("y", e).attr("width", f).attr("height", g).style("fill-opacity", function(a) {
            return m(a.opacity) ? a.opacity : .1
        })]
    }, i.regionX = function(a) {
        var b, c = this,
            d = c.config,
            e = "y" === a.axis ? c.y : c.y2;
        return b = "y" === a.axis || "y2" === a.axis ? d.axis_rotated && "start" in a ? e(a.start) : 0 : d.axis_rotated ? 0 : "start" in a ? c.x(c.isTimeSeries() ? c.parseDate(a.start) : a.start) : 0
    }, i.regionY = function(a) {
        var b, c = this,
            d = c.config,
            e = "y" === a.axis ? c.y : c.y2;
        return b = "y" === a.axis || "y2" === a.axis ? d.axis_rotated ? 0 : "end" in a ? e(a.end) : 0 : d.axis_rotated && "start" in a ? c.x(c.isTimeSeries() ? c.parseDate(a.start) : a.start) : 0
    }, i.regionWidth = function(a) {
        var b, c = this,
            d = c.config,
            e = c.regionX(a),
            f = "y" === a.axis ? c.y : c.y2;
        return b = "y" === a.axis || "y2" === a.axis ? d.axis_rotated && "end" in a ? f(a.end) : c.width : d.axis_rotated ? c.width : "end" in a ? c.x(c.isTimeSeries() ? c.parseDate(a.end) : a.end) : c.width, e > b ? 0 : b - e
    }, i.regionHeight = function(a) {
        var b, c = this,
            d = c.config,
            e = this.regionY(a),
            f = "y" === a.axis ? c.y : c.y2;
        return b = "y" === a.axis || "y2" === a.axis ? d.axis_rotated ? c.height : "start" in a ? f(a.start) : c.height : d.axis_rotated && "end" in a ? c.x(c.isTimeSeries() ? c.parseDate(a.end) : a.end) : c.height, e > b ? 0 : b - e
    }, i.isRegionOnX = function(a) {
        return !a.axis || "x" === a.axis
    }, i.drag = function(a) {
        var b, c, d, e, f, g, h, i, j = this,
            k = j.config,
            m = j.main,
            n = j.d3;
        j.hasArcType() || k.data_selection_enabled && (!k.zoom_enabled || j.zoom.altDomain) && k.data_selection_multiple && (b = j.dragStart[0], c = j.dragStart[1], d = a[0], e = a[1], f = Math.min(b, d), g = Math.max(b, d), h = k.data_selection_grouped ? j.margin.top : Math.min(c, e), i = k.data_selection_grouped ? j.height : Math.max(c, e), m.select("." + l.dragarea).attr("x", f).attr("y", h).attr("width", g - f).attr("height", i - h), m.selectAll("." + l.shapes).selectAll("." + l.shape).filter(function(a) {
            return k.data_selection_isselectable(a)
        }).each(function(a, b) {
            var c, d, e, k, m, o, p = n.select(this),
                q = p.classed(l.SELECTED),
                r = p.classed(l.INCLUDED),
                s = !1;
            if (p.classed(l.circle)) c = 1 * p.attr("cx"), d = 1 * p.attr("cy"), m = j.togglePoint, s = c > f && g > c && d > h && i > d;
            else {
                if (!p.classed(l.bar)) return;
                o = y(this), c = o.x, d = o.y, e = o.width, k = o.height, m = j.togglePath, s = !(c > g || f > c + e || d > i || h > d + k)
            }
            s ^ r && (p.classed(l.INCLUDED, !r), p.classed(l.SELECTED, !q), m.call(j, !q, p, a, b))
        }))
    }, i.dragstart = function(a) {
        var b = this,
            c = b.config;
        b.hasArcType() || c.data_selection_enabled && (b.dragStart = a, b.main.select("." + l.chart).append("rect").attr("class", l.dragarea).style("opacity", .1), b.dragging = !0)
    }, i.dragend = function() {
        var a = this,
            b = a.config;
        a.hasArcType() || b.data_selection_enabled && (a.main.select("." + l.dragarea).transition().duration(100).style("opacity", 0).remove(), a.main.selectAll("." + l.shape).classed(l.INCLUDED, !1), a.dragging = !1)
    }, i.selectPoint = function(a, b, c) {
        var d = this,
            e = d.config,
            f = (e.axis_rotated ? d.circleY : d.circleX).bind(d),
            g = (e.axis_rotated ? d.circleX : d.circleY).bind(d),
            h = d.pointSelectR.bind(d);
        e.data_onselected.call(d.api, b, a.node()), d.main.select("." + l.selectedCircles + d.getTargetSelectorSuffix(b.id)).selectAll("." + l.selectedCircle + "-" + c).data([b]).enter().append("circle").attr("class", function() {
            return d.generateClass(l.selectedCircle, c)
        }).attr("cx", f).attr("cy", g).attr("stroke", function() {
            return d.color(b)
        }).attr("r", function(a) {
            return 1.4 * d.pointSelectR(a)
        }).transition().duration(100).attr("r", h)
    }, i.unselectPoint = function(a, b, c) {
        var d = this;
        d.config.data_onunselected(b, a.node()), d.main.select("." + l.selectedCircles + d.getTargetSelectorSuffix(b.id)).selectAll("." + l.selectedCircle + "-" + c).transition().duration(100).attr("r", 0).remove()
    }, i.togglePoint = function(a, b, c, d) {
        a ? this.selectPoint(b, c, d) : this.unselectPoint(b, c, d)
    }, i.selectPath = function(a, b) {
        var c = this;
        c.config.data_onselected.call(c, b, a.node()), a.transition().duration(100).style("fill", function() {
            return c.d3.rgb(c.color(b)).brighter(.75)
        })
    }, i.unselectPath = function(a, b) {
        var c = this;
        c.config.data_onunselected.call(c, b, a.node()), a.transition().duration(100).style("fill", function() {
            return c.color(b)
        })
    }, i.togglePath = function(a, b, c, d) {
        a ? this.selectPath(b, c, d) : this.unselectPath(b, c, d)
    }, i.getToggle = function(a, b) {
        var c, d = this;
        return "circle" === a.nodeName ? c = d.isStepType(b) ? function() {} : d.togglePoint : "path" === a.nodeName && (c = d.togglePath), c
    }, i.toggleShape = function(a, b, c) {
        var d = this,
            e = d.d3,
            f = d.config,
            g = e.select(a),
            h = g.classed(l.SELECTED),
            i = d.getToggle(a, b).bind(d);
        f.data_selection_enabled && f.data_selection_isselectable(b) && (f.data_selection_multiple || d.main.selectAll("." + l.shapes + (f.data_selection_grouped ? d.getTargetSelectorSuffix(b.id) : "")).selectAll("." + l.shape).each(function(a, b) {
            var c = e.select(this);
            c.classed(l.SELECTED) && i(!1, c.classed(l.SELECTED, !1), a, b)
        }), g.classed(l.SELECTED, !h), i(!h, g, b, c))
    }, i.initBrush = function() {
        var a = this,
            b = a.d3;
        a.brush = b.svg.brush().on("brush", function() {
            a.redrawForBrush()
        }), a.brush.update = function() {
            return a.context && a.context.select("." + l.brush).call(this), this
        }, a.brush.scale = function(b) {
            return a.config.axis_rotated ? this.y(b) : this.x(b)
        }
    }, i.initSubchart = function() {
        var a = this,
            b = a.config,
            c = a.context = a.svg.append("g").attr("transform", a.getTranslate("context"));
        c.style("visibility", b.subchart_show ? "visible" : "hidden"), c.append("g").attr("clip-path", a.clipPathForSubchart).attr("class", l.chart), c.select("." + l.chart).append("g").attr("class", l.chartBars), c.select("." + l.chart).append("g").attr("class", l.chartLines), c.append("g").attr("clip-path", a.clipPath).attr("class", l.brush).call(a.brush), a.axes.subx = c.append("g").attr("class", l.axisX).attr("transform", a.getTranslate("subx")).attr("clip-path", b.axis_rotated ? "" : a.clipPathForXAxis)
    }, i.updateTargetsForSubchart = function(a) {
        var b, c, d, e, f = this,
            g = f.context,
            h = f.config,
            i = f.classChartBar.bind(f),
            j = f.classBars.bind(f),
            k = f.classChartLine.bind(f),
            m = f.classLines.bind(f),
            n = f.classAreas.bind(f);
        h.subchart_show && (e = g.select("." + l.chartBars).selectAll("." + l.chartBar).data(a).attr("class", i), d = e.enter().append("g").style("opacity", 0).attr("class", i), d.append("g").attr("class", j), c = g.select("." + l.chartLines).selectAll("." + l.chartLine).data(a).attr("class", k), b = c.enter().append("g").style("opacity", 0).attr("class", k), b.append("g").attr("class", m), b.append("g").attr("class", n), g.selectAll("." + l.brush + " rect").attr(h.axis_rotated ? "width" : "height", h.axis_rotated ? f.width2 : f.height2))
    }, i.updateBarForSubchart = function(a) {
        var b = this;
        b.contextBar = b.context.selectAll("." + l.bars).selectAll("." + l.bar).data(b.barData.bind(b)), b.contextBar.enter().append("path").attr("class", b.classBar.bind(b)).style("stroke", "none").style("fill", b.color), b.contextBar.style("opacity", b.initialOpacity.bind(b)), b.contextBar.exit().transition().duration(a).style("opacity", 0).remove()
    }, i.redrawBarForSubchart = function(a, b, c) {
        (b ? this.contextBar.transition().duration(c) : this.contextBar).attr("d", a).style("opacity", 1)
    }, i.updateLineForSubchart = function(a) {
        var b = this;
        b.contextLine = b.context.selectAll("." + l.lines).selectAll("." + l.line).data(b.lineData.bind(b)), b.contextLine.enter().append("path").attr("class", b.classLine.bind(b)).style("stroke", b.color), b.contextLine.style("opacity", b.initialOpacity.bind(b)), b.contextLine.exit().transition().duration(a).style("opacity", 0).remove()
    }, i.redrawLineForSubchart = function(a, b, c) {
        (b ? this.contextLine.transition().duration(c) : this.contextLine).attr("d", a).style("opacity", 1)
    }, i.updateAreaForSubchart = function(a) {
        var b = this,
            c = b.d3;
        b.contextArea = b.context.selectAll("." + l.areas).selectAll("." + l.area).data(b.lineData.bind(b)), b.contextArea.enter().append("path").attr("class", b.classArea.bind(b)).style("fill", b.color).style("opacity", function() {
            return b.orgAreaOpacity = +c.select(this).style("opacity"), 0
        }), b.contextArea.style("opacity", 0), b.contextArea.exit().transition().duration(a).style("opacity", 0).remove()
    }, i.redrawAreaForSubchart = function(a, b, c) {
        (b ? this.contextArea.transition().duration(c) : this.contextArea).attr("d", a).style("fill", this.color).style("opacity", this.orgAreaOpacity)
    }, i.redrawSubchart = function(a, b, c, d, e, f, g) {
        var h, i, j, k = this,
            l = k.d3,
            m = k.config;
        k.context.style("visibility", m.subchart_show ? "visible" : "hidden"), m.subchart_show && (l.event && "zoom" === l.event.type && k.brush.extent(k.x.orgDomain()).update(), a && (k.brush.empty() || k.brush.extent(k.x.orgDomain()).update(), h = k.generateDrawArea(e, !0), i = k.generateDrawBar(f, !0), j = k.generateDrawLine(g, !0), k.updateBarForSubchart(c), k.updateLineForSubchart(c), k.updateAreaForSubchart(c), k.redrawBarForSubchart(i, c, c), k.redrawLineForSubchart(j, c, c), k.redrawAreaForSubchart(h, c, c)))
    }, i.redrawForBrush = function() {
        var a = this,
            b = a.x;
        a.redraw({
            withTransition: !1,
            withY: a.config.zoom_rescale,
            withSubchart: !1,
            withUpdateXDomain: !0,
            withDimension: !1
        }), a.config.subchart_onbrush.call(a.api, b.orgDomain())
    }, i.transformContext = function(a, b) {
        var c, d = this;
        b && b.axisSubX ? c = b.axisSubX : (c = d.context.select("." + l.axisX), a && (c = c.transition())), d.context.attr("transform", d.getTranslate("context")), c.attr("transform", d.getTranslate("subx"))
    }, i.getDefaultExtent = function() {
        var a = this,
            b = a.config,
            c = n(b.axis_x_extent) ? b.axis_x_extent(a.getXDomain(a.data.targets)) : b.axis_x_extent;
        return a.isTimeSeries() && (c = [a.parseDate(c[0]), a.parseDate(c[1])]), c
    }, i.initZoom = function() {
        var a, b = this,
            c = b.d3,
            d = b.config;
        b.zoom = c.behavior.zoom().on("zoomstart", function() {
            a = c.event.sourceEvent, b.zoom.altDomain = c.event.sourceEvent.altKey ? b.x.orgDomain() : null, d.zoom_onzoomstart.call(b.api, c.event.sourceEvent)
        }).on("zoom", function() {
            b.redrawForZoom.call(b)
        }).on("zoomend", function() {
            var e = c.event.sourceEvent;
            e && a.clientX === e.clientX && a.clientY === e.clientY || (b.redrawEventRect(), b.updateZoom(), d.zoom_onzoomend.call(b.api, b.x.orgDomain()))
        }), b.zoom.scale = function(a) {
            return d.axis_rotated ? this.y(a) : this.x(a)
        }, b.zoom.orgScaleExtent = function() {
            var a = d.zoom_extent ? d.zoom_extent : [1, 10];
            return [a[0], Math.max(b.getMaxDataCount() / a[1], a[1])]
        }, b.zoom.updateScaleExtent = function() {
            var a = t(b.x.orgDomain()) / t(b.orgXDomain),
                c = this.orgScaleExtent();
            return this.scaleExtent([c[0] * a, c[1] * a]), this
        }
    }, i.updateZoom = function() {
        var a = this,
            b = a.config.zoom_enabled ? a.zoom : function() {};
        a.main.select("." + l.zoomRect).call(b).on("dblclick.zoom", null), a.main.selectAll("." + l.eventRect).call(b).on("dblclick.zoom", null)
    }, i.redrawForZoom = function() {
        var a = this,
            b = a.d3,
            c = a.config,
            d = a.zoom,
            e = a.x;
        if (c.zoom_enabled && 0 !== a.filterTargetsToShow(a.data.targets).length) {
            if ("mousemove" === b.event.sourceEvent.type && d.altDomain) return e.domain(d.altDomain), void d.scale(e).updateScaleExtent();
            a.isCategorized() && e.orgDomain()[0] === a.orgXDomain[0] && e.domain([a.orgXDomain[0] - 1e-10, e.orgDomain()[1]]), a.redraw({
                withTransition: !1,
                withY: c.zoom_rescale,
                withSubchart: !1,
                withEventRect: !1,
                withDimension: !1
            }), "mousemove" === b.event.sourceEvent.type && (a.cancelClick = !0), c.zoom_onzoom.call(a.api, e.orgDomain())
        }
    }, i.generateColor = function() {
        var a = this,
            b = a.config,
            c = a.d3,
            d = b.data_colors,
            e = v(b.color_pattern) ? b.color_pattern : c.scale.category10().range(),
            f = b.data_color,
            g = [];
        return function(a) {
            var b, c = a.id || a.data && a.data.id || a;
            return d[c] instanceof Function ? b = d[c](a) : d[c] ? b = d[c] : (g.indexOf(c) < 0 && g.push(c), b = e[g.indexOf(c) % e.length], d[c] = b), f instanceof Function ? f(b, a) : b
        }
    }, i.generateLevelColor = function() {
        var a = this,
            b = a.config,
            c = b.color_pattern,
            d = b.color_threshold,
            e = "value" === d.unit,
            f = d.values && d.values.length ? d.values : [],
            g = d.max || 100;
        return v(b.color_threshold) ? function(a) {
            var b, d, h = c[c.length - 1];
            for (b = 0; b < f.length; b++)
                if (d = e ? a : 100 * a / g, d < f[b]) {
                    h = c[b];
                    break
                }
            return h
        } : null
    }, i.getYFormat = function(a) {
        var b = this,
            c = a && !b.hasType("gauge") ? b.defaultArcValueFormat : b.yFormat,
            d = a && !b.hasType("gauge") ? b.defaultArcValueFormat : b.y2Format;
        return function(a, e, f) {
            var g = "y2" === b.axis.getId(f) ? d : c;
            return g.call(b, a, e)
        }
    }, i.yFormat = function(a) {
        var b = this,
            c = b.config,
            d = c.axis_y_tick_format ? c.axis_y_tick_format : b.defaultValueFormat;
        return d(a)
    }, i.y2Format = function(a) {
        var b = this,
            c = b.config,
            d = c.axis_y2_tick_format ? c.axis_y2_tick_format : b.defaultValueFormat;
        return d(a)
    }, i.defaultValueFormat = function(a) {
        return m(a) ? +a : ""
    }, i.defaultArcValueFormat = function(a, b) {
        return (100 * b).toFixed(1) + "%"
    }, i.dataLabelFormat = function(a) {
        var b, c = this,
            d = c.config.data_labels,
            e = function(a) {
                return m(a) ? +a : ""
            };
        return b = "function" == typeof d.format ? d.format : "object" == typeof d.format ? d.format[a] ? d.format[a] === !0 ? e : d.format[a] : function() {
            return ""
        } : e
    }, i.hasCaches = function(a) {
        for (var b = 0; b < a.length; b++)
            if (!(a[b] in this.cache)) return !1;
        return !0
    }, i.addCache = function(a, b) {
        this.cache[a] = this.cloneTarget(b)
    }, i.getCaches = function(a) {
        var b, c = [];
        for (b = 0; b < a.length; b++) a[b] in this.cache && c.push(this.cloneTarget(this.cache[a[b]]));
        return c
    };
    var l = i.CLASS = {
        target: "c3-target",
        chart: "c3-chart",
        chartLine: "c3-chart-line",
        chartLines: "c3-chart-lines",
        chartBar: "c3-chart-bar",
        chartBars: "c3-chart-bars",
        chartText: "c3-chart-text",
        chartTexts: "c3-chart-texts",
        chartArc: "c3-chart-arc",
        chartArcs: "c3-chart-arcs",
        chartArcsTitle: "c3-chart-arcs-title",
        chartArcsBackground: "c3-chart-arcs-background",
        chartArcsGaugeUnit: "c3-chart-arcs-gauge-unit",
        chartArcsGaugeMax: "c3-chart-arcs-gauge-max",
        chartArcsGaugeMin: "c3-chart-arcs-gauge-min",
        selectedCircle: "c3-selected-circle",
        selectedCircles: "c3-selected-circles",
        eventRect: "c3-event-rect",
        eventRects: "c3-event-rects",
        eventRectsSingle: "c3-event-rects-single",
        eventRectsMultiple: "c3-event-rects-multiple",
        zoomRect: "c3-zoom-rect",
        brush: "c3-brush",
        focused: "c3-focused",
        defocused: "c3-defocused",
        region: "c3-region",
        regions: "c3-regions",
        tooltipContainer: "c3-tooltip-container",
        tooltip: "c3-tooltip",
        tooltipName: "c3-tooltip-name",
        shape: "c3-shape",
        shapes: "c3-shapes",
        line: "c3-line",
        lines: "c3-lines",
        bar: "c3-bar",
        bars: "c3-bars",
        circle: "c3-circle",
        circles: "c3-circles",
        arc: "c3-arc",
        arcs: "c3-arcs",
        area: "c3-area",
        areas: "c3-areas",
        empty: "c3-empty",
        text: "c3-text",
        texts: "c3-texts",
        gaugeValue: "c3-gauge-value",
        grid: "c3-grid",
        gridLines: "c3-grid-lines",
        xgrid: "c3-xgrid",
        xgrids: "c3-xgrids",
        xgridLine: "c3-xgrid-line",
        xgridLines: "c3-xgrid-lines",
        xgridFocus: "c3-xgrid-focus",
        ygrid: "c3-ygrid",
        ygrids: "c3-ygrids",
        ygridLine: "c3-ygrid-line",
        ygridLines: "c3-ygrid-lines",
        axis: "c3-axis",
        axisX: "c3-axis-x",
        axisXLabel: "c3-axis-x-label",
        axisY: "c3-axis-y",
        axisYLabel: "c3-axis-y-label",
        axisY2: "c3-axis-y2",
        axisY2Label: "c3-axis-y2-label",
        legendBackground: "c3-legend-background",
        legendItem: "c3-legend-item",
        legendItemEvent: "c3-legend-item-event",
        legendItemTile: "c3-legend-item-tile",
        legendItemHidden: "c3-legend-item-hidden",
        legendItemFocused: "c3-legend-item-focused",
        dragarea: "c3-dragarea",
        EXPANDED: "_expanded_",
        SELECTED: "_selected_",
        INCLUDED: "_included_"
    };
    i.generateClass = function(a, b) {
        return " " + a + " " + a + this.getTargetSelectorSuffix(b)
    }, i.classText = function(a) {
        return this.generateClass(l.text, a.index)
    }, i.classTexts = function(a) {
        return this.generateClass(l.texts, a.id)
    }, i.classShape = function(a) {
        return this.generateClass(l.shape, a.index)
    }, i.classShapes = function(a) {
        return this.generateClass(l.shapes, a.id)
    }, i.classLine = function(a) {
        return this.classShape(a) + this.generateClass(l.line, a.id)
    }, i.classLines = function(a) {
        return this.classShapes(a) + this.generateClass(l.lines, a.id)
    }, i.classCircle = function(a) {
        return this.classShape(a) + this.generateClass(l.circle, a.index)
    }, i.classCircles = function(a) {
        return this.classShapes(a) + this.generateClass(l.circles, a.id)
    }, i.classBar = function(a) {
        return this.classShape(a) + this.generateClass(l.bar, a.index)
    }, i.classBars = function(a) {
        return this.classShapes(a) + this.generateClass(l.bars, a.id)
    }, i.classArc = function(a) {
        return this.classShape(a.data) + this.generateClass(l.arc, a.data.id)
    }, i.classArcs = function(a) {
        return this.classShapes(a.data) + this.generateClass(l.arcs, a.data.id)
    }, i.classArea = function(a) {
        return this.classShape(a) + this.generateClass(l.area, a.id)
    }, i.classAreas = function(a) {
        return this.classShapes(a) + this.generateClass(l.areas, a.id)
    }, i.classRegion = function(a, b) {
        return this.generateClass(l.region, b) + " " + ("class" in a ? a["class"] : "")
    }, i.classEvent = function(a) {
        return this.generateClass(l.eventRect, a.index)
    }, i.classTarget = function(a) {
        var b = this,
            c = b.config.data_classes[a],
            d = "";
        return c && (d = " " + l.target + "-" + c), b.generateClass(l.target, a) + d
    }, i.classFocus = function(a) {
        return this.classFocused(a) + this.classDefocused(a)
    }, i.classFocused = function(a) {
        return " " + (this.focusedTargetIds.indexOf(a.id) >= 0 ? l.focused : "")
    }, i.classDefocused = function(a) {
        return " " + (this.defocusedTargetIds.indexOf(a.id) >= 0 ? l.defocused : "")
    }, i.classChartText = function(a) {
        return l.chartText + this.classTarget(a.id)
    }, i.classChartLine = function(a) {
        return l.chartLine + this.classTarget(a.id)
    }, i.classChartBar = function(a) {
        return l.chartBar + this.classTarget(a.id)
    }, i.classChartArc = function(a) {
        return l.chartArc + this.classTarget(a.data.id)
    }, i.getTargetSelectorSuffix = function(a) {
        return a || 0 === a ? ("-" + a).replace(/[\s?!@#$%^&*()_=+,.<>'":;\[\]\/|~`{}\\]/g, "-") : ""
    }, i.selectorTarget = function(a, b) {
        return (b || "") + "." + l.target + this.getTargetSelectorSuffix(a)
    }, i.selectorTargets = function(a, b) {
        var c = this;
        return a = a || [], a.length ? a.map(function(a) {
            return c.selectorTarget(a, b)
        }) : null
    }, i.selectorLegend = function(a) {
        return "." + l.legendItem + this.getTargetSelectorSuffix(a)
    }, i.selectorLegends = function(a) {
        var b = this;
        return a && a.length ? a.map(function(a) {
            return b.selectorLegend(a)
        }) : null
    };
    var m = i.isValue = function(a) {
            return a || 0 === a
        },
        n = i.isFunction = function(a) {
            return "function" == typeof a
        },
        o = i.isString = function(a) {
            return "string" == typeof a
        },
        p = i.isUndefined = function(a) {
            return "undefined" == typeof a
        },
        q = i.isDefined = function(a) {
            return "undefined" != typeof a
        },
        r = i.ceil10 = function(a) {
            return 10 * Math.ceil(a / 10)
        },
        s = i.asHalfPixel = function(a) {
            return Math.ceil(a) + .5
        },
        t = i.diffDomain = function(a) {
            return a[1] - a[0]
        },
        u = i.isEmpty = function(a) {
            return !a || o(a) && 0 === a.length || "object" == typeof a && 0 === Object.keys(a).length
        },
        v = i.notEmpty = function(a) {
            return Object.keys(a).length > 0
        },
        w = i.getOption = function(a, b, c) {
            return q(a[b]) ? a[b] : c
        },
        x = i.hasValue = function(a, b) {
            var c = !1;
            return Object.keys(a).forEach(function(d) {
                a[d] === b && (c = !0)
            }), c
        },
        y = i.getPathBox = function(a) {
            var b = a.getBoundingClientRect(),
                c = [a.pathSegList.getItem(0), a.pathSegList.getItem(1)],
                d = c[0].x,
                e = Math.min(c[0].y, c[1].y);
            return {
                x: d,
                y: e,
                width: b.width,
                height: b.height
            }
        };
    h.focus = function(a) {
        var b, c = this.internal;
        a = c.mapToTargetIds(a), b = c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow, c))), this.revert(), this.defocus(), b.classed(l.focused, !0).classed(l.defocused, !1), c.hasArcType() && c.expandArc(a), c.toggleFocusLegend(a, !0), c.focusedTargetIds = a, c.defocusedTargetIds = c.defocusedTargetIds.filter(function(b) {
            return a.indexOf(b) < 0
        })
    }, h.defocus = function(a) {
        var b, c = this.internal;
        a = c.mapToTargetIds(a), b = c.svg.selectAll(c.selectorTargets(a.filter(c.isTargetToShow, c))), b.classed(l.focused, !1).classed(l.defocused, !0), c.hasArcType() && c.unexpandArc(a), c.toggleFocusLegend(a, !1), c.focusedTargetIds = c.focusedTargetIds.filter(function(b) {
            return a.indexOf(b) < 0
        }), c.defocusedTargetIds = a
    }, h.revert = function(a) {
        var b, c = this.internal;
        a = c.mapToTargetIds(a), b = c.svg.selectAll(c.selectorTargets(a)), b.classed(l.focused, !1).classed(l.defocused, !1), c.hasArcType() && c.unexpandArc(a), c.config.legend_show && (c.showLegend(a.filter(c.isLegendToShow.bind(c))), c.legend.selectAll(c.selectorLegends(a)).filter(function() {
            return c.d3.select(this).classed(l.legendItemFocused)
        }).classed(l.legendItemFocused, !1)), c.focusedTargetIds = [], c.defocusedTargetIds = []
    }, h.show = function(a, b) {
        var c, d = this.internal;
        a = d.mapToTargetIds(a), b = b || {}, d.removeHiddenTargetIds(a), c = d.svg.selectAll(d.selectorTargets(a)), c.transition().style("opacity", 1, "important").call(d.endall, function() {
            c.style("opacity", null).style("opacity", 1)
        }), b.withLegend && d.showLegend(a), d.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0,
            withLegend: !0
        })
    }, h.hide = function(a, b) {
        var c, d = this.internal;
        a = d.mapToTargetIds(a), b = b || {}, d.addHiddenTargetIds(a), c = d.svg.selectAll(d.selectorTargets(a)), c.transition().style("opacity", 0, "important").call(d.endall, function() {
            c.style("opacity", null).style("opacity", 0)
        }), b.withLegend && d.hideLegend(a), d.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0,
            withLegend: !0
        })
    }, h.toggle = function(a, b) {
        var c = this,
            d = this.internal;
        d.mapToTargetIds(a).forEach(function(a) {
            d.isTargetToShow(a) ? c.hide(a, b) : c.show(a, b)
        })
    }, h.zoom = function(a) {
        var b = this.internal;
        return a && (b.isTimeSeries() && (a = a.map(function(a) {
            return b.parseDate(a)
        })), b.brush.extent(a), b.redraw({
            withUpdateXDomain: !0,
            withY: b.config.zoom_rescale
        }), b.config.zoom_onzoom.call(this, b.x.orgDomain())), b.brush.extent()
    }, h.zoom.enable = function(a) {
        var b = this.internal;
        b.config.zoom_enabled = a, b.updateAndRedraw()
    }, h.unzoom = function() {
        var a = this.internal;
        a.brush.clear().update(), a.redraw({
            withUpdateXDomain: !0
        })
    }, h.load = function(a) {
        var b = this.internal,
            c = b.config;
        return a.xs && b.addXs(a.xs), "classes" in a && Object.keys(a.classes).forEach(function(b) {
            c.data_classes[b] = a.classes[b]
        }), "categories" in a && b.isCategorized() && (c.axis_x_categories = a.categories), "axes" in a && Object.keys(a.axes).forEach(function(b) {
            c.data_axes[b] = a.axes[b]
        }), "colors" in a && Object.keys(a.colors).forEach(function(b) {
            c.data_colors[b] = a.colors[b]
        }), "cacheIds" in a && b.hasCaches(a.cacheIds) ? void b.load(b.getCaches(a.cacheIds), a.done) : void("unload" in a ? b.unload(b.mapToTargetIds("boolean" == typeof a.unload && a.unload ? null : a.unload), function() {
            b.loadFromArgs(a)
        }) : b.loadFromArgs(a))
    }, h.unload = function(a) {
        var b = this.internal;
        a = a || {}, a instanceof Array ? a = {
            ids: a
        } : "string" == typeof a && (a = {
            ids: [a]
        }), b.unload(b.mapToTargetIds(a.ids), function() {
            b.redraw({
                withUpdateOrgXDomain: !0,
                withUpdateXDomain: !0,
                withLegend: !0
            }), a.done && a.done()
        })
    }, h.flow = function(a) {
        var b, c, d, e, f, g, h, i, j = this.internal,
            k = [],
            l = j.getMaxDataCount(),
            n = 0,
            o = 0;
        if (a.json) c = j.convertJsonToData(a.json, a.keys);
        else if (a.rows) c = j.convertRowsToData(a.rows);
        else {
            if (!a.columns) return;
            c = j.convertColumnsToData(a.columns)
        }
        b = j.convertDataToTargets(c, !0), j.data.targets.forEach(function(a) {
            var c, d, e = !1;
            for (c = 0; c < b.length; c++)
                if (a.id === b[c].id) {
                    for (e = !0, a.values[a.values.length - 1] && (o = a.values[a.values.length - 1].index + 1), n = b[c].values.length, d = 0; n > d; d++) b[c].values[d].index = o + d, j.isTimeSeries() || (b[c].values[d].x = o + d);
                    a.values = a.values.concat(b[c].values), b.splice(c, 1);
                    break
                }
            e || k.push(a.id)
        }), j.data.targets.forEach(function(a) {
            var b, c;
            for (b = 0; b < k.length; b++)
                if (a.id === k[b])
                    for (o = a.values[a.values.length - 1].index + 1, c = 0; n > c; c++) a.values.push({
                        id: a.id,
                        index: o + c,
                        x: j.isTimeSeries() ? j.getOtherTargetX(o + c) : o + c,
                        value: null
                    })
        }), j.data.targets.length && b.forEach(function(a) {
            var b, c = [];
            for (b = j.data.targets[0].values[0].index; o > b; b++) c.push({
                id: a.id,
                index: b,
                x: j.isTimeSeries() ? j.getOtherTargetX(b) : b,
                value: null
            });
            a.values.forEach(function(a) {
                a.index += o, j.isTimeSeries() || (a.x += o)
            }), a.values = c.concat(a.values)
        }), j.data.targets = j.data.targets.concat(b), d = j.getMaxDataCount(), f = j.data.targets[0], g = f.values[0], q(a.to) ? (n = 0, i = j.isTimeSeries() ? j.parseDate(a.to) : a.to, f.values.forEach(function(a) {
            a.x < i && n++
        })) : q(a.length) && (n = a.length), l ? 1 === l && j.isTimeSeries() && (h = (f.values[f.values.length - 1].x - g.x) / 2, e = [new Date(+g.x - h), new Date(+g.x + h)], j.updateXDomain(null, !0, !0, !1, e)) : (h = j.isTimeSeries() ? f.values.length > 1 ? f.values[f.values.length - 1].x - g.x : g.x - j.getXDomain(j.data.targets)[0] : 1, e = [g.x - h, g.x], j.updateXDomain(null, !0, !0, !1, e)), j.updateTargets(j.data.targets), j.redraw({
            flow: {
                index: g.index,
                length: n,
                duration: m(a.duration) ? a.duration : j.config.transition_duration,
                done: a.done,
                orgDataCount: l
            },
            withLegend: !0,
            withTransition: l > 1,
            withTrimXDomain: !1,
            withUpdateXAxis: !0
        })
    }, i.generateFlow = function(a) {
        var b = this,
            c = b.config,
            d = b.d3;
        return function() {
            var e, f, g, h = a.targets,
                i = a.flow,
                j = a.drawBar,
                k = a.drawLine,
                m = a.drawArea,
                n = a.cx,
                o = a.cy,
                p = a.xv,
                q = a.xForText,
                r = a.yForText,
                s = a.duration,
                u = 1,
                v = i.index,
                w = i.length,
                x = b.getValueOnIndex(b.data.targets[0].values, v),
                y = b.getValueOnIndex(b.data.targets[0].values, v + w),
                z = b.x.domain(),
                A = i.duration || s,
                B = i.done || function() {},
                C = b.generateWait(),
                D = b.xgrid || d.selectAll([]),
                E = b.xgridLines || d.selectAll([]),
                F = b.mainRegion || d.selectAll([]),
                G = b.mainText || d.selectAll([]),
                H = b.mainBar || d.selectAll([]),
                I = b.mainLine || d.selectAll([]),
                J = b.mainArea || d.selectAll([]),
                K = b.mainCircle || d.selectAll([]);
            b.flowing = !0, b.data.targets.forEach(function(a) {
                a.values.splice(0, w)
            }), g = b.updateXDomain(h, !0, !0), b.updateXGrid && b.updateXGrid(!0), i.orgDataCount ? e = 1 === i.orgDataCount || x.x === y.x ? b.x(z[0]) - b.x(g[0]) : b.isTimeSeries() ? b.x(z[0]) - b.x(g[0]) : b.x(x.x) - b.x(y.x) : 1 !== b.data.targets[0].values.length ? e = b.x(z[0]) - b.x(g[0]) : b.isTimeSeries() ? (x = b.getValueOnIndex(b.data.targets[0].values, 0),
                y = b.getValueOnIndex(b.data.targets[0].values, b.data.targets[0].values.length - 1), e = b.x(x.x) - b.x(y.x)) : e = t(g) / 2, u = t(z) / t(g), f = "translate(" + e + ",0) scale(" + u + ",1)", b.hideXGridFocus(), b.hideTooltip(), d.transition().ease("linear").duration(A).each(function() {
                C.add(b.axes.x.transition().call(b.xAxis)), C.add(H.transition().attr("transform", f)), C.add(I.transition().attr("transform", f)), C.add(J.transition().attr("transform", f)), C.add(K.transition().attr("transform", f)), C.add(G.transition().attr("transform", f)), C.add(F.filter(b.isRegionOnX).transition().attr("transform", f)), C.add(D.transition().attr("transform", f)), C.add(E.transition().attr("transform", f))
            }).call(C, function() {
                var a, d = [],
                    e = [],
                    f = [];
                if (w) {
                    for (a = 0; w > a; a++) d.push("." + l.shape + "-" + (v + a)), e.push("." + l.text + "-" + (v + a)), f.push("." + l.eventRect + "-" + (v + a));
                    b.svg.selectAll("." + l.shapes).selectAll(d).remove(), b.svg.selectAll("." + l.texts).selectAll(e).remove(), b.svg.selectAll("." + l.eventRects).selectAll(f).remove(), b.svg.select("." + l.xgrid).remove()
                }
                D.attr("transform", null).attr(b.xgridAttr), E.attr("transform", null), E.select("line").attr("x1", c.axis_rotated ? 0 : p).attr("x2", c.axis_rotated ? b.width : p), E.select("text").attr("x", c.axis_rotated ? b.width : 0).attr("y", p), H.attr("transform", null).attr("d", j), I.attr("transform", null).attr("d", k), J.attr("transform", null).attr("d", m), K.attr("transform", null).attr("cx", n).attr("cy", o), G.attr("transform", null).attr("x", q).attr("y", r).style("fill-opacity", b.opacityForText.bind(b)), F.attr("transform", null), F.select("rect").filter(b.isRegionOnX).attr("x", b.regionX.bind(b)).attr("width", b.regionWidth.bind(b)), c.interaction_enabled && b.redrawEventRect(), B(), b.flowing = !1
            })
        }
    }, h.selected = function(a) {
        var b = this.internal,
            c = b.d3;
        return c.merge(b.main.selectAll("." + l.shapes + b.getTargetSelectorSuffix(a)).selectAll("." + l.shape).filter(function() {
            return c.select(this).classed(l.SELECTED)
        }).map(function(a) {
            return a.map(function(a) {
                var b = a.__data__;
                return b.data ? b.data : b
            })
        }))
    }, h.select = function(a, b, c) {
        var d = this.internal,
            e = d.d3,
            f = d.config;
        f.data_selection_enabled && d.main.selectAll("." + l.shapes).selectAll("." + l.shape).each(function(g, h) {
            var i = e.select(this),
                j = g.data ? g.data.id : g.id,
                k = d.getToggle(this, g).bind(d),
                m = f.data_selection_grouped || !a || a.indexOf(j) >= 0,
                n = !b || b.indexOf(h) >= 0,
                o = i.classed(l.SELECTED);
            i.classed(l.line) || i.classed(l.area) || (m && n ? f.data_selection_isselectable(g) && !o && k(!0, i.classed(l.SELECTED, !0), g, h) : q(c) && c && o && k(!1, i.classed(l.SELECTED, !1), g, h))
        })
    }, h.unselect = function(a, b) {
        var c = this.internal,
            d = c.d3,
            e = c.config;
        e.data_selection_enabled && c.main.selectAll("." + l.shapes).selectAll("." + l.shape).each(function(f, g) {
            var h = d.select(this),
                i = f.data ? f.data.id : f.id,
                j = c.getToggle(this, f).bind(c),
                k = e.data_selection_grouped || !a || a.indexOf(i) >= 0,
                m = !b || b.indexOf(g) >= 0,
                n = h.classed(l.SELECTED);
            h.classed(l.line) || h.classed(l.area) || k && m && e.data_selection_isselectable(f) && n && j(!1, h.classed(l.SELECTED, !1), f, g)
        })
    }, h.transform = function(a, b) {
        var c = this.internal,
            d = ["pie", "donut"].indexOf(a) >= 0 ? {
                withTransform: !0
            } : null;
        c.transformTo(b, a, d)
    }, i.transformTo = function(a, b, c) {
        var d = this,
            e = !d.hasArcType(),
            f = c || {
                withTransitionForAxis: e
            };
        f.withTransitionForTransform = !1, d.transiting = !1, d.setTargetType(a, b), d.updateTargets(d.data.targets), d.updateAndRedraw(f)
    }, h.groups = function(a) {
        var b = this.internal,
            c = b.config;
        return p(a) ? c.data_groups : (c.data_groups = a, b.redraw(), c.data_groups)
    }, h.xgrids = function(a) {
        var b = this.internal,
            c = b.config;
        return a ? (c.grid_x_lines = a, b.redrawWithoutRescale(), c.grid_x_lines) : c.grid_x_lines
    }, h.xgrids.add = function(a) {
        var b = this.internal;
        return this.xgrids(b.config.grid_x_lines.concat(a ? a : []))
    }, h.xgrids.remove = function(a) {
        var b = this.internal;
        b.removeGridLines(a, !0)
    }, h.ygrids = function(a) {
        var b = this.internal,
            c = b.config;
        return a ? (c.grid_y_lines = a, b.redrawWithoutRescale(), c.grid_y_lines) : c.grid_y_lines
    }, h.ygrids.add = function(a) {
        var b = this.internal;
        return this.ygrids(b.config.grid_y_lines.concat(a ? a : []))
    }, h.ygrids.remove = function(a) {
        var b = this.internal;
        b.removeGridLines(a, !1)
    }, h.regions = function(a) {
        var b = this.internal,
            c = b.config;
        return a ? (c.regions = a, b.redrawWithoutRescale(), c.regions) : c.regions
    }, h.regions.add = function(a) {
        var b = this.internal,
            c = b.config;
        return a ? (c.regions = c.regions.concat(a), b.redrawWithoutRescale(), c.regions) : c.regions
    }, h.regions.remove = function(a) {
        var b, c, d, e = this.internal,
            f = e.config;
        return a = a || {}, b = e.getOption(a, "duration", f.transition_duration), c = e.getOption(a, "classes", [l.region]), d = e.main.select("." + l.regions).selectAll(c.map(function(a) {
            return "." + a
        })), (b ? d.transition().duration(b) : d).style("opacity", 0).remove(), f.regions = f.regions.filter(function(a) {
            var b = !1;
            return a["class"] ? (a["class"].split(" ").forEach(function(a) {
                c.indexOf(a) >= 0 && (b = !0)
            }), !b) : !0
        }), f.regions
    }, h.data = function(a) {
        var b = this.internal.data.targets;
        return "undefined" == typeof a ? b : b.filter(function(b) {
            return [].concat(a).indexOf(b.id) >= 0
        })
    }, h.data.shown = function(a) {
        return this.internal.filterTargetsToShow(this.data(a))
    }, h.data.values = function(a) {
        var b, c = null;
        return a && (b = this.data(a), c = b[0] ? b[0].values.map(function(a) {
            return a.value
        }) : null), c
    }, h.data.names = function(a) {
        return this.internal.clearLegendItemTextBoxCache(), this.internal.updateDataAttributes("names", a)
    }, h.data.colors = function(a) {
        return this.internal.updateDataAttributes("colors", a)
    }, h.data.axes = function(a) {
        return this.internal.updateDataAttributes("axes", a)
    }, h.category = function(a, b) {
        var c = this.internal,
            d = c.config;
        return arguments.length > 1 && (d.axis_x_categories[a] = b, c.redraw()), d.axis_x_categories[a]
    }, h.categories = function(a) {
        var b = this.internal,
            c = b.config;
        return arguments.length ? (c.axis_x_categories = a, b.redraw(), c.axis_x_categories) : c.axis_x_categories
    }, h.color = function(a) {
        var b = this.internal;
        return b.color(a)
    }, h.x = function(a) {
        var b = this.internal;
        return arguments.length && (b.updateTargetX(b.data.targets, a), b.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0
        })), b.data.xs
    }, h.xs = function(a) {
        var b = this.internal;
        return arguments.length && (b.updateTargetXs(b.data.targets, a), b.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0
        })), b.data.xs
    }, h.axis = function() {}, h.axis.labels = function(a) {
        var b = this.internal;
        arguments.length && (Object.keys(a).forEach(function(c) {
            b.axis.setLabelText(c, a[c])
        }), b.axis.updateLabels())
    }, h.axis.max = function(a) {
        var b = this.internal,
            c = b.config;
        return arguments.length ? ("object" == typeof a ? (m(a.x) && (c.axis_x_max = a.x), m(a.y) && (c.axis_y_max = a.y), m(a.y2) && (c.axis_y2_max = a.y2)) : c.axis_y_max = c.axis_y2_max = a, void b.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0
        })) : {
            x: c.axis_x_max,
            y: c.axis_y_max,
            y2: c.axis_y2_max
        }
    }, h.axis.min = function(a) {
        var b = this.internal,
            c = b.config;
        return arguments.length ? ("object" == typeof a ? (m(a.x) && (c.axis_x_min = a.x), m(a.y) && (c.axis_y_min = a.y), m(a.y2) && (c.axis_y2_min = a.y2)) : c.axis_y_min = c.axis_y2_min = a, void b.redraw({
            withUpdateOrgXDomain: !0,
            withUpdateXDomain: !0
        })) : {
            x: c.axis_x_min,
            y: c.axis_y_min,
            y2: c.axis_y2_min
        }
    }, h.axis.range = function(a) {
        return arguments.length ? (q(a.max) && this.axis.max(a.max), void(q(a.min) && this.axis.min(a.min))) : {
            max: this.axis.max(),
            min: this.axis.min()
        }
    }, h.legend = function() {}, h.legend.show = function(a) {
        var b = this.internal;
        b.showLegend(b.mapToTargetIds(a)), b.updateAndRedraw({
            withLegend: !0
        })
    }, h.legend.hide = function(a) {
        var b = this.internal;
        b.hideLegend(b.mapToTargetIds(a)), b.updateAndRedraw({
            withLegend: !0
        })
    }, h.resize = function(a) {
        var b = this.internal,
            c = b.config;
        c.size_width = a ? a.width : null, c.size_height = a ? a.height : null, this.flush()
    }, h.flush = function() {
        var a = this.internal;
        a.updateAndRedraw({
            withLegend: !0,
            withTransition: !1,
            withTransitionForTransform: !1
        })
    }, h.destroy = function() {
        var b = this.internal;
        return a.clearInterval(b.intervalForObserveInserted), a.onresize = null, b.selectChart.classed("c3", !1).html(""), Object.keys(b).forEach(function(a) {
            b[a] = null
        }), null
    }, h.tooltip = function() {}, h.tooltip.show = function(a) {
        var b, c, d = this.internal;
        a.mouse && (c = a.mouse), a.data ? d.isMultipleX() ? (c = [d.x(a.data.x), d.getYScale(a.data.id)(a.data.value)], b = null) : b = m(a.data.index) ? a.data.index : d.getIndexByX(a.data.x) : "undefined" != typeof a.x ? b = d.getIndexByX(a.x) : "undefined" != typeof a.index && (b = a.index), d.dispatchEvent("mouseover", b, c), d.dispatchEvent("mousemove", b, c)
    }, h.tooltip.hide = function() {
        this.internal.dispatchEvent("mouseout", 0)
    };
    var z;
    i.isSafari = function() {
        var b = a.navigator.userAgent;
        return b.indexOf("Safari") >= 0 && b.indexOf("Chrome") < 0
    }, i.isChrome = function() {
        var b = a.navigator.userAgent;
        return b.indexOf("Chrome") >= 0
    }, Function.prototype.bind || (Function.prototype.bind = function(a) {
        if ("function" != typeof this) throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
        var b = Array.prototype.slice.call(arguments, 1),
            c = this,
            d = function() {},
            e = function() {
                return c.apply(this instanceof d ? this : a, b.concat(Array.prototype.slice.call(arguments)))
            };
        return d.prototype = this.prototype, e.prototype = new d, e
    }), "function" == typeof define && define.amd ? define("c3", ["d3"], k) : "undefined" != typeof exports && "undefined" != typeof module ? module.exports = k : a.c3 = k
}(window);
var Base = function() {};
Base.extend = function(a, b) {
    "use strict";
    var c = Base.prototype.extend;
    Base._prototyping = !0;
    var d = new this;
    c.call(d, a), d.base = function() {}, delete Base._prototyping;
    var e = d.constructor,
        f = d.constructor = function() {
            if (!Base._prototyping)
                if (this._constructing || this.constructor == f) this._constructing = !0, e.apply(this, arguments), delete this._constructing;
                else if (null !== arguments[0]) return (arguments[0].extend || c).call(arguments[0], d)
        };
    return f.ancestor = this, f.extend = this.extend, f.forEach = this.forEach, f.implement = this.implement, f.prototype = d, f.toString = this.toString, f.valueOf = function(a) {
        return "object" == a ? f : e.valueOf()
    }, c.call(f, b), "function" == typeof f.init && f.init(), f
}, Base.prototype = {
    extend: function(a, b) {
        if (arguments.length > 1) {
            var c = this[a];
            if (c && "function" == typeof b && (!c.valueOf || c.valueOf() != b.valueOf()) && /\bbase\b/.test(b)) {
                var d = b.valueOf();
                b = function() {
                    var a = this.base || Base.prototype.base;
                    this.base = c;
                    var b = d.apply(this, arguments);
                    return this.base = a, b
                }, b.valueOf = function(a) {
                    return "object" == a ? b : d
                }, b.toString = Base.toString
            }
            this[a] = b
        } else if (a) {
            var e = Base.prototype.extend;
            Base._prototyping || "function" == typeof this || (e = this.extend || e);
            for (var f = {
                    toSource: null
                }, g = ["constructor", "toString", "valueOf"], h = Base._prototyping ? 0 : 1; i = g[h++];) a[i] != f[i] && e.call(this, i, a[i]);
            for (var i in a) f[i] || e.call(this, i, a[i])
        }
        return this
    }
}, Base = Base.extend({
    constructor: function() {
        this.extend(arguments[0])
    }
}, {
    ancestor: Object,
    version: "1.1",
    forEach: function(a, b, c) {
        for (var d in a) void 0 === this.prototype[d] && b.call(c, a[d], d, a)
    },
    implement: function() {
        for (var a = 0; a < arguments.length; a++) "function" == typeof arguments[a] ? arguments[a](this.prototype) : this.prototype.extend(arguments[a]);
        return this
    },
    toString: function() {
        return String(this.valueOf())
    }
});
var FlipClock;
! function(a) {
    "use strict";
    FlipClock = function(a, b, c) {
        return b instanceof Object && b instanceof Date == 0 && (c = b, b = 0), new FlipClock.Factory(a, b, c)
    }, FlipClock.Lang = {}, FlipClock.Base = Base.extend({
        buildDate: "2014-12-12",
        version: "0.7.7",
        constructor: function(b, c) {
            "object" != typeof b && (b = {}), "object" != typeof c && (c = {}), this.setOptions(a.extend(!0, {}, b, c))
        },
        callback: function(a) {
            if ("function" == typeof a) {
                for (var b = [], c = 1; c <= arguments.length; c++) arguments[c] && b.push(arguments[c]);
                a.apply(this, b)
            }
        },
        log: function(a) {
            window.console && console.log && void 0
        },
        getOption: function(a) {
            return this[a] ? this[a] : !1
        },
        getOptions: function() {
            return this
        },
        setOption: function(a, b) {
            this[a] = b
        },
        setOptions: function(a) {
            for (var b in a) "undefined" != typeof a[b] && this.setOption(b, a[b])
        }
    })
}(jQuery),
function(a) {
    "use strict";
    FlipClock.Face = FlipClock.Base.extend({
        autoStart: !0,
        dividers: [],
        factory: !1,
        lists: [],
        constructor: function(a, b) {
            this.dividers = [], this.lists = [], this.base(b), this.factory = a
        },
        build: function() {
            this.autoStart && this.start()
        },
        createDivider: function(b, c, d) {
            "boolean" != typeof c && c || (d = c, c = b);
            var e = ['<span class="' + this.factory.classes.dot + ' top"></span>', '<span class="' + this.factory.classes.dot + ' bottom"></span>'].join("");
            d && (e = ""), b = this.factory.localize(b);
            var f = ['<span class="' + this.factory.classes.divider + " " + (c ? c : "").toLowerCase() + '">', '<span class="' + this.factory.classes.label + '">' + (b ? b : "") + "</span>", e, "</span>"],
                g = a(f.join(""));
            return this.dividers.push(g), g
        },
        createList: function(a, b) {
            "object" == typeof a && (b = a, a = 0);
            var c = new FlipClock.List(this.factory, a, b);
            return this.lists.push(c), c
        },
        reset: function() {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0, {
                minimumDigits: this.factory.minimumDigits
            }), this.flip(this.factory.original, !1)
        },
        appendDigitToClock: function(a) {
            a.$el.append(!1)
        },
        addDigit: function(a) {
            var b = this.createList(a, {
                classes: {
                    active: this.factory.classes.active,
                    before: this.factory.classes.before,
                    flip: this.factory.classes.flip
                }
            });
            this.appendDigitToClock(b)
        },
        start: function() {},
        stop: function() {},
        autoIncrement: function() {
            this.factory.countdown ? this.decrement() : this.increment()
        },
        increment: function() {
            this.factory.time.addSecond()
        },
        decrement: function() {
            0 == this.factory.time.getTimeSeconds() ? this.factory.stop() : this.factory.time.subSecond()
        },
        flip: function(b, c) {
            var d = this;
            a.each(b, function(a, b) {
                var e = d.lists[a];
                e ? (c || b == e.digit || e.play(), e.select(b)) : d.addDigit(b)
            })
        }
    })
}(jQuery),
function(a) {
    "use strict";
    FlipClock.Factory = FlipClock.Base.extend({
        animationRate: 1e3,
        autoStart: !0,
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        },
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            divider: "flip-clock-divider",
            dot: "flip-clock-dot",
            label: "flip-clock-label",
            flip: "flip",
            play: "play",
            wrapper: "flip-clock-wrapper"
        },
        clockFace: "HourlyCounter",
        countdown: !1,
        defaultClockFace: "HourlyCounter",
        defaultLanguage: "english",
        $el: !1,
        face: !0,
        lang: !1,
        language: "english",
        minimumDigits: 0,
        original: !1,
        running: !1,
        time: !1,
        timer: !1,
        $wrapper: !1,
        constructor: function(b, c, d) {
            d || (d = {}), this.lists = [], this.running = !1, this.base(d), this.$el = a(b).addClass(this.classes.wrapper), this.$wrapper = this.$el, this.original = c instanceof Date ? c : c ? Math.round(c) : 0, this.time = new FlipClock.Time(this, this.original, {
                minimumDigits: this.minimumDigits,
                animationRate: this.animationRate
            }), this.timer = new FlipClock.Timer(this, d), this.loadLanguage(this.language), this.loadClockFace(this.clockFace, d), this.autoStart && this.start()
        },
        loadClockFace: function(a, b) {
            var c, d = "Face",
                e = !1;
            return a = a.ucfirst() + d, this.face.stop && (this.stop(), e = !0), this.$el.html(""), this.time.minimumDigits = this.minimumDigits, c = FlipClock[a] ? new FlipClock[a](this, b) : new FlipClock[this.defaultClockFace + d](this, b), c.build(), this.face = c, e && this.start(), this.face
        },
        loadLanguage: function(a) {
            var b;
            return b = FlipClock.Lang[a.ucfirst()] ? FlipClock.Lang[a.ucfirst()] : FlipClock.Lang[a] ? FlipClock.Lang[a] : FlipClock.Lang[this.defaultLanguage], this.lang = b
        },
        localize: function(a, b) {
            var c = this.lang;
            if (!a) return null;
            var d = a.toLowerCase();
            return "object" == typeof b && (c = b), c && c[d] ? c[d] : a
        },
        start: function(a) {
            var b = this;
            b.running || b.countdown && !(b.countdown && b.time.time > 0) ? b.log("Trying to start timer when countdown already at 0") : (b.face.start(b.time), b.timer.start(function() {
                b.flip(), "function" == typeof a && a()
            }))
        },
        stop: function(a) {
            this.face.stop(), this.timer.stop(a);
            for (var b in this.lists) this.lists.hasOwnProperty(b) && this.lists[b].stop()
        },
        reset: function(a) {
            this.timer.reset(a), this.face.reset()
        },
        setTime: function(a) {
            this.time.time = a, this.flip(!0)
        },
        getTime: function(a) {
            return this.time
        },
        setCountdown: function(a) {
            var b = this.running;
            this.countdown = !!a, b && (this.stop(), this.start())
        },
        flip: function(a) {
            this.face.flip(!1, a)
        }
    })
}(jQuery),
function(a) {
    "use strict";
    FlipClock.List = FlipClock.Base.extend({
        digit: 0,
        classes: {
            active: "flip-clock-active",
            before: "flip-clock-before",
            flip: "flip"
        },
        factory: !1,
        $el: !1,
        $obj: !1,
        items: [],
        lastDigit: 0,
        constructor: function(a, b, c) {
            this.factory = a, this.digit = b, this.lastDigit = b, this.$el = this.createList(), this.$obj = this.$el, b > 0 && this.select(b), this.factory.$el.append(this.$el)
        },
        select: function(a) {
            if ("undefined" == typeof a ? a = this.digit : this.digit = a, this.digit != this.lastDigit) {
                var b = this.$el.find("." + this.classes.before).removeClass(this.classes.before);
                this.$el.find("." + this.classes.active).removeClass(this.classes.active).addClass(this.classes.before), this.appendListItem(this.classes.active, this.digit), b.remove(), this.lastDigit = this.digit
            }
        },
        play: function() {
            this.$el.addClass(this.factory.classes.play)
        },
        stop: function() {
            var a = this;
            setTimeout(function() {
                a.$el.removeClass(a.factory.classes.play)
            }, this.factory.timer.interval)
        },
        createListItem: function(a, b) {
            return ['<li class="' + (a ? a : "") + '">', '<a href="#">', '<div class="up">', '<div class="shadow"></div>', '<div class="inn">' + (b ? b : "") + "</div>", "</div>", '<div class="down">', '<div class="shadow"></div>', '<div class="inn">' + (b ? b : "") + "</div>", "</div>", "</a>", "</li>"].join("")
        },
        appendListItem: function(a, b) {
            var c = this.createListItem(a, b);
            this.$el.append(c)
        },
        createList: function() {
            var b = this.getPrevDigit() ? this.getPrevDigit() : this.digit,
                c = a(['<ul class="' + this.classes.flip + " " + (this.factory.running ? this.factory.classes.play : "") + '">', this.createListItem(this.classes.before, b), this.createListItem(this.classes.active, this.digit), "</ul>"].join(""));
            return c
        },
        getNextDigit: function() {
            return 9 == this.digit ? 0 : this.digit + 1
        },
        getPrevDigit: function() {
            return 0 == this.digit ? 9 : this.digit - 1
        }
    })
}(jQuery),
function(a) {
    "use strict";
    String.prototype.ucfirst = function() {
        return this.substr(0, 1).toUpperCase() + this.substr(1)
    }, a.fn.FlipClock = function(b, c) {
        return new FlipClock(a(this), b, c)
    }, a.fn.flipClock = function(b, c) {
        return a.fn.FlipClock(b, c)
    }
}(jQuery),
function(a) {
    "use strict";
    FlipClock.Time = FlipClock.Base.extend({
        time: 0,
        factory: !1,
        minimumDigits: 0,
        constructor: function(a, b, c) {
            "object" != typeof c && (c = {}), c.minimumDigits || (c.minimumDigits = a.minimumDigits), this.base(c), this.factory = a, b && (this.time = b)
        },
        convertDigitsToArray: function(a) {
            var b = [];
            a = a.toString();
            for (var c = 0; c < a.length; c++) a[c].match(/^\d*$/g) && b.push(a[c]);
            return b
        },
        digit: function(a) {
            var b = this.toString(),
                c = b.length;
            return b[c - a] ? b[c - a] : !1
        },
        digitize: function(b) {
            var c = [];
            if (a.each(b, function(a, b) {
                    b = b.toString(), 1 == b.length && (b = "0" + b);
                    for (var d = 0; d < b.length; d++) c.push(b.charAt(d))
                }), c.length > this.minimumDigits && (this.minimumDigits = c.length), this.minimumDigits > c.length)
                for (var d = c.length; d < this.minimumDigits; d++) c.unshift("0");
            return c
        },
        getDateObject: function() {
            return this.time instanceof Date ? this.time : new Date((new Date).getTime() + 1e3 * this.getTimeSeconds())
        },
        getDayCounter: function(a) {
            var b = [this.getDays(), this.getHours(!0), this.getMinutes(!0)];
            return a && b.push(this.getSeconds(!0)), this.digitize(b)
        },
        getDays: function(a) {
            var b = this.getTimeSeconds() / 60 / 60 / 24;
            return a && (b %= 7), Math.floor(b)
        },
        getHourCounter: function() {
            var a = this.digitize([this.getHours(), this.getMinutes(!0), this.getSeconds(!0)]);
            return a
        },
        getHourly: function() {
            return this.getHourCounter()
        },
        getHours: function(a) {
            var b = this.getTimeSeconds() / 60 / 60;
            return a && (b %= 24), Math.floor(b)
        },
        getMilitaryTime: function(a, b) {
            "undefined" == typeof b && (b = !0), a || (a = this.getDateObject());
            var c = [a.getHours(), a.getMinutes()];
            return b === !0 && c.push(a.getSeconds()), this.digitize(c)
        },
        getMinutes: function(a) {
            var b = this.getTimeSeconds() / 60;
            return a && (b %= 60), Math.floor(b)
        },
        getMinuteCounter: function() {
            var a = this.digitize([this.getMinutes(), this.getSeconds(!0)]);
            return a
        },
        getTimeSeconds: function(a) {
            return a || (a = new Date), this.time instanceof Date ? this.factory.countdown ? Math.max(this.time.getTime() / 1e3 - a.getTime() / 1e3, 0) : a.getTime() / 1e3 - this.time.getTime() / 1e3 : this.time
        },
        getTime: function(a, b) {
            "undefined" == typeof b && (b = !0), void(a || (a = this.getDateObject()));
            var c = a.getHours(),
                d = [c > 12 ? c - 12 : 0 === c ? 12 : c, a.getMinutes()];
            return b === !0 && d.push(a.getSeconds()), this.digitize(d)
        },
        getSeconds: function(a) {
            var b = this.getTimeSeconds();
            return a && (60 == b ? b = 0 : b %= 60), Math.ceil(b)
        },
        getWeeks: function(a) {
            var b = this.getTimeSeconds() / 60 / 60 / 24 / 7;
            return a && (b %= 52), Math.floor(b)
        },
        removeLeadingZeros: function(b, c) {
            var d = 0,
                e = [];
            return a.each(c, function(a, f) {
                b > a ? d += parseInt(c[a], 10) : e.push(c[a])
            }), 0 === d ? e : c
        },
        addSeconds: function(a) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() + a) : this.time += a
        },
        addSecond: function() {
            this.addSeconds(1)
        },
        subSeconds: function(a) {
            this.time instanceof Date ? this.time.setSeconds(this.time.getSeconds() - a) : this.time -= a
        },
        subSecond: function() {
            this.subSeconds(1)
        },
        toString: function() {
            return this.getTimeSeconds().toString()
        }
    })
}(jQuery),
function(a) {
    "use strict";
    FlipClock.Timer = FlipClock.Base.extend({
        callbacks: {
            destroy: !1,
            create: !1,
            init: !1,
            interval: !1,
            start: !1,
            stop: !1,
            reset: !1
        },
        count: 0,
        factory: !1,
        interval: 1e3,
        animationRate: 1e3,
        constructor: function(a, b) {
            this.base(b), this.factory = a, this.callback(this.callbacks.init), this.callback(this.callbacks.create)
        },
        getElapsed: function() {
            return this.count * this.interval
        },
        getElapsedTime: function() {
            return new Date(this.time + this.getElapsed())
        },
        reset: function(a) {
            clearInterval(this.timer), this.count = 0, this._setInterval(a), this.callback(this.callbacks.reset)
        },
        start: function(a) {
            this.factory.running = !0, this._createTimer(a), this.callback(this.callbacks.start)
        },
        stop: function(a) {
            this.factory.running = !1, this._clearInterval(a), this.callback(this.callbacks.stop), this.callback(a)
        },
        _clearInterval: function() {
            clearInterval(this.timer)
        },
        _createTimer: function(a) {
            this._setInterval(a)
        },
        _destroyTimer: function(a) {
            this._clearInterval(), this.timer = !1, this.callback(a), this.callback(this.callbacks.destroy)
        },
        _interval: function(a) {
            this.callback(this.callbacks.interval), this.callback(a), this.count++
        },
        _setInterval: function(a) {
            var b = this;
            b._interval(a), b.timer = setInterval(function() {
                b._interval(a)
            }, this.interval)
        }
    })
}(jQuery),
function(a) {
    FlipClock.TwentyFourHourClockFace = FlipClock.Face.extend({
        constructor: function(a, b) {
            this.base(a, b)
        },
        build: function(b) {
            var c = this,
                d = this.factory.$el.find("ul");
            this.factory.time.time || (this.factory.original = new Date, this.factory.time = new FlipClock.Time(this.factory, this.factory.original));
            var b = b ? b : this.factory.time.getMilitaryTime(!1, this.showSeconds);
            b.length > d.length && a.each(b, function(a, b) {
                c.createList(b)
            }), this.createDivider(), this.createDivider(), a(this.dividers[0]).insertBefore(this.lists[this.lists.length - 2].$el), a(this.dividers[1]).insertBefore(this.lists[this.lists.length - 4].$el), this.base()
        },
        flip: function(a, b) {
            this.autoIncrement(), a = a ? a : this.factory.time.getMilitaryTime(!1, this.showSeconds), this.base(a, b)
        }
    })
}(jQuery),
function(a) {
    FlipClock.CounterFace = FlipClock.Face.extend({
        shouldAutoIncrement: !1,
        constructor: function(a, b) {
            "object" != typeof b && (b = {}), a.autoStart = !!b.autoStart, b.autoStart && (this.shouldAutoIncrement = !0), a.increment = function() {
                a.countdown = !1, a.setTime(a.getTime().getTimeSeconds() + 1)
            }, a.decrement = function() {
                a.countdown = !0;
                var b = a.getTime().getTimeSeconds();
                b > 0 && a.setTime(b - 1)
            }, a.setValue = function(b) {
                a.setTime(b)
            }, a.setCounter = function(b) {
                a.setTime(b)
            }, this.base(a, b)
        },
        build: function() {
            var b = this,
                c = this.factory.$el.find("ul"),
                d = this.factory.getTime().digitize([this.factory.getTime().time]);
            d.length > c.length && a.each(d, function(a, c) {
                var d = b.createList(c);
                d.select(c)
            }), a.each(this.lists, function(a, b) {
                b.play()
            }), this.base()
        },
        flip: function(a, b) {
            this.shouldAutoIncrement && this.autoIncrement(), a || (a = this.factory.getTime().digitize([this.factory.getTime().time])), this.base(a, b)
        },
        reset: function() {
            this.factory.time = new FlipClock.Time(this.factory, this.factory.original ? Math.round(this.factory.original) : 0), this.flip()
        }
    })
}(jQuery),
function(a) {
    FlipClock.DailyCounterFace = FlipClock.Face.extend({
        showSeconds: !0,
        constructor: function(a, b) {
            this.base(a, b)
        },
        build: function(b) {
            var c = this,
                d = this.factory.$el.find("ul"),
                e = 0;
            b = b ? b : this.factory.time.getDayCounter(this.showSeconds), b.length > d.length && a.each(b, function(a, b) {
                c.createList(b)
            }), this.showSeconds ? a(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el) : e = 2, a(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4 + e].$el), a(this.createDivider("Hours")).insertBefore(this.lists[this.lists.length - 6 + e].$el), a(this.createDivider("Days", !0)).insertBefore(this.lists[0].$el), this.base()
        },
        flip: function(a, b) {
            a || (a = this.factory.time.getDayCounter(this.showSeconds)), this.autoIncrement(), this.base(a, b)
        }
    })
}(jQuery),
function(a) {
    FlipClock.HourlyCounterFace = FlipClock.Face.extend({
        constructor: function(a, b) {
            this.base(a, b)
        },
        build: function(b, c) {
            var d = this,
                e = this.factory.$el.find("ul");
            c = c ? c : this.factory.time.getHourCounter(), c.length > e.length && a.each(c, function(a, b) {
                d.createList(b)
            }), a(this.createDivider("Seconds")).insertBefore(this.lists[this.lists.length - 2].$el), a(this.createDivider("Minutes")).insertBefore(this.lists[this.lists.length - 4].$el), b || a(this.createDivider("Hours", !0)).insertBefore(this.lists[0].$el), this.base()
        },
        flip: function(a, b) {
            a || (a = this.factory.time.getHourCounter()), this.autoIncrement(), this.base(a, b)
        },
        appendDigitToClock: function(a) {
            this.base(a), this.dividers[0].insertAfter(this.dividers[0].next())
        }
    })
}(jQuery),
function(a) {
    FlipClock.MinuteCounterFace = FlipClock.HourlyCounterFace.extend({
        clearExcessDigits: !1,
        constructor: function(a, b) {
            this.base(a, b)
        },
        build: function() {
            this.base(!0, this.factory.time.getMinuteCounter())
        },
        flip: function(a, b) {
            a || (a = this.factory.time.getMinuteCounter()), this.base(a, b)
        }
    })
}(jQuery),
function(a) {
    FlipClock.TwelveHourClockFace = FlipClock.TwentyFourHourClockFace.extend({
        meridium: !1,
        meridiumText: "AM",
        build: function() {
            var b = this.factory.time.getTime(!1, this.showSeconds);
            this.base(b), this.meridiumText = this.getMeridium(), this.meridium = a(['<ul class="flip-clock-meridium">', "<li>", '<a href="#">' + this.meridiumText + "</a>", "</li>", "</ul>"].join("")), this.meridium.insertAfter(this.lists[this.lists.length - 1].$el)
        },
        flip: function(a, b) {
            this.meridiumText != this.getMeridium() && (this.meridiumText = this.getMeridium(), this.meridium.find("a").html(this.meridiumText)), this.base(this.factory.time.getTime(!1, this.showSeconds), b)
        },
        getMeridium: function() {
            return (new Date).getHours() >= 12 ? "PM" : "AM"
        },
        isPM: function() {
            return "PM" == this.getMeridium()
        },
        isAM: function() {
            return "AM" == this.getMeridium()
        }
    })
}(jQuery),
function(a) {
    FlipClock.Lang.Arabic = {
        years: "سنوات",
        months: "شهور",
        days: "أيام",
        hours: "ساعات",
        minutes: "دقائق",
        seconds: "ثواني"
    }, FlipClock.Lang.ar = FlipClock.Lang.Arabic, FlipClock.Lang["ar-ar"] = FlipClock.Lang.Arabic, FlipClock.Lang.arabic = FlipClock.Lang.Arabic
}(jQuery),
function(a) {
    FlipClock.Lang.Danish = {
        years: "År",
        months: "Måneder",
        days: "Dage",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.da = FlipClock.Lang.Danish, FlipClock.Lang["da-dk"] = FlipClock.Lang.Danish, FlipClock.Lang.danish = FlipClock.Lang.Danish
}(jQuery),
function(a) {
    FlipClock.Lang.German = {
        years: "Jahre",
        months: "Monate",
        days: "Tage",
        hours: "Stunden",
        minutes: "Minuten",
        seconds: "Sekunden"
    }, FlipClock.Lang.de = FlipClock.Lang.German, FlipClock.Lang["de-de"] = FlipClock.Lang.German, FlipClock.Lang.german = FlipClock.Lang.German
}(jQuery),
function(a) {
    FlipClock.Lang.English = {
        years: "Years",
        months: "Months",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
    }, FlipClock.Lang.en = FlipClock.Lang.English, FlipClock.Lang["en-us"] = FlipClock.Lang.English, FlipClock.Lang.english = FlipClock.Lang.English
}(jQuery),
function(a) {
    FlipClock.Lang.Spanish = {
        years: "Años",
        months: "Meses",
        days: "Días",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.es = FlipClock.Lang.Spanish, FlipClock.Lang["es-es"] = FlipClock.Lang.Spanish, FlipClock.Lang.spanish = FlipClock.Lang.Spanish
}(jQuery),
function(a) {
    FlipClock.Lang.Finnish = {
        years: "Vuotta",
        months: "Kuukautta",
        days: "Päivää",
        hours: "Tuntia",
        minutes: "Minuuttia",
        seconds: "Sekuntia"
    }, FlipClock.Lang.fi = FlipClock.Lang.Finnish, FlipClock.Lang["fi-fi"] = FlipClock.Lang.Finnish, FlipClock.Lang.finnish = FlipClock.Lang.Finnish
}(jQuery),
function(a) {
    FlipClock.Lang.French = {
        years: "Ans",
        months: "Mois",
        days: "Jours",
        hours: "Heures",
        minutes: "Minutes",
        seconds: "Secondes"
    }, FlipClock.Lang.fr = FlipClock.Lang.French, FlipClock.Lang["fr-ca"] = FlipClock.Lang.French, FlipClock.Lang.french = FlipClock.Lang.French
}(jQuery),
function(a) {
    FlipClock.Lang.Italian = {
        years: "Anni",
        months: "Mesi",
        days: "Giorni",
        hours: "Ore",
        minutes: "Minuti",
        seconds: "Secondi"
    }, FlipClock.Lang.it = FlipClock.Lang.Italian, FlipClock.Lang["it-it"] = FlipClock.Lang.Italian, FlipClock.Lang.italian = FlipClock.Lang.Italian
}(jQuery),
function(a) {
    FlipClock.Lang.Latvian = {
        years: "Gadi",
        months: "Mēneši",
        days: "Dienas",
        hours: "Stundas",
        minutes: "Minūtes",
        seconds: "Sekundes"
    }, FlipClock.Lang.lv = FlipClock.Lang.Latvian, FlipClock.Lang["lv-lv"] = FlipClock.Lang.Latvian, FlipClock.Lang.latvian = FlipClock.Lang.Latvian
}(jQuery),
function(a) {
    FlipClock.Lang.Dutch = {
        years: "Jaren",
        months: "Maanden",
        days: "Dagen",
        hours: "Uren",
        minutes: "Minuten",
        seconds: "Seconden"
    }, FlipClock.Lang.nl = FlipClock.Lang.Dutch, FlipClock.Lang["nl-be"] = FlipClock.Lang.Dutch, FlipClock.Lang.dutch = FlipClock.Lang.Dutch
}(jQuery),
function(a) {
    FlipClock.Lang.Norwegian = {
        years: "År",
        months: "Måneder",
        days: "Dager",
        hours: "Timer",
        minutes: "Minutter",
        seconds: "Sekunder"
    }, FlipClock.Lang.no = FlipClock.Lang.Norwegian, FlipClock.Lang.nb = FlipClock.Lang.Norwegian, FlipClock.Lang["no-nb"] = FlipClock.Lang.Norwegian, FlipClock.Lang.norwegian = FlipClock.Lang.Norwegian
}(jQuery),
function(a) {
    FlipClock.Lang.Portuguese = {
        years: "Anos",
        months: "Meses",
        days: "Dias",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }, FlipClock.Lang.pt = FlipClock.Lang.Portuguese, FlipClock.Lang["pt-br"] = FlipClock.Lang.Portuguese, FlipClock.Lang.portuguese = FlipClock.Lang.Portuguese
}(jQuery),
function(a) {
    FlipClock.Lang.Russian = {
        years: "лет",
        months: "месяцев",
        days: "дней",
        hours: "часов",
        minutes: "минут",
        seconds: "секунд"
    }, FlipClock.Lang.ru = FlipClock.Lang.Russian, FlipClock.Lang["ru-ru"] = FlipClock.Lang.Russian, FlipClock.Lang.russian = FlipClock.Lang.Russian
}(jQuery),
function(a) {
    FlipClock.Lang.Swedish = {
        years: "År",
        months: "Månader",
        days: "Dagar",
        hours: "Timmar",
        minutes: "Minuter",
        seconds: "Sekunder"
    }, FlipClock.Lang.sv = FlipClock.Lang.Swedish, FlipClock.Lang["sv-se"] = FlipClock.Lang.Swedish, FlipClock.Lang.swedish = FlipClock.Lang.Swedish
}(jQuery),
function(a) {
    FlipClock.Lang.Chinese = {
        years: "年",
        months: "月",
        days: "日",
        hours: "时",
        minutes: "分",
        seconds: "秒"
    }, FlipClock.Lang.zh = FlipClock.Lang.Chinese, FlipClock.Lang["zh-cn"] = FlipClock.Lang.Chinese, FlipClock.Lang.chinese = FlipClock.Lang.Chinese
}(jQuery),
function(e) {
    "function" == typeof define && define.amd ? define(["jquery"], e) : e(jQuery)
}(function(e) {
    function t(t, s) {
        var n, a, o, r = t.nodeName.toLowerCase();
        return "area" === r ? (n = t.parentNode, a = n.name, t.href && a && "map" === n.nodeName.toLowerCase() ? (o = e("img[usemap='#" + a + "']")[0], !!o && i(o)) : !1) : (/^(input|select|textarea|button|object)$/.test(r) ? !t.disabled : "a" === r ? t.href || s : s) && i(t)
    }

    function i(t) {
        return e.expr.filters.visible(t) && !e(t).parents().addBack().filter(function() {
            return "hidden" === e.css(this, "visibility")
        }).length
    }
    e.ui = e.ui || {}, e.extend(e.ui, {
        version: "1.11.4",
        keyCode: {
            BACKSPACE: 8,
            COMMA: 188,
            DELETE: 46,
            DOWN: 40,
            END: 35,
            ENTER: 13,
            ESCAPE: 27,
            HOME: 36,
            LEFT: 37,
            PAGE_DOWN: 34,
            PAGE_UP: 33,
            PERIOD: 190,
            RIGHT: 39,
            SPACE: 32,
            TAB: 9,
            UP: 38
        }
    }), e.fn.extend({
        scrollParent: function(t) {
            var i = this.css("position"),
                s = "absolute" === i,
                n = t ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
                a = this.parents().filter(function() {
                    var t = e(this);
                    return s && "static" === t.css("position") ? !1 : n.test(t.css("overflow") + t.css("overflow-y") + t.css("overflow-x"))
                }).eq(0);
            return "fixed" !== i && a.length ? a : e(this[0].ownerDocument || document)
        },
        uniqueId: function() {
            var e = 0;
            return function() {
                return this.each(function() {
                    this.id || (this.id = "ui-id-" + ++e)
                })
            }
        }(),
        removeUniqueId: function() {
            return this.each(function() {
                /^ui-id-\d+$/.test(this.id) && e(this).removeAttr("id")
            })
        }
    }), e.extend(e.expr[":"], {
        data: e.expr.createPseudo ? e.expr.createPseudo(function(t) {
            return function(i) {
                return !!e.data(i, t)
            }
        }) : function(t, i, s) {
            return !!e.data(t, s[3])
        },
        focusable: function(i) {
            return t(i, !isNaN(e.attr(i, "tabindex")))
        },
        tabbable: function(i) {
            var s = e.attr(i, "tabindex"),
                n = isNaN(s);
            return (n || s >= 0) && t(i, !n)
        }
    }), e("<a>").outerWidth(1).jquery || e.each(["Width", "Height"], function(t, i) {
        function s(t, i, s, a) {
            return e.each(n, function() {
                i -= parseFloat(e.css(t, "padding" + this)) || 0, s && (i -= parseFloat(e.css(t, "border" + this + "Width")) || 0), a && (i -= parseFloat(e.css(t, "margin" + this)) || 0)
            }), i
        }
        var n = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"],
            a = i.toLowerCase(),
            o = {
                innerWidth: e.fn.innerWidth,
                innerHeight: e.fn.innerHeight,
                outerWidth: e.fn.outerWidth,
                outerHeight: e.fn.outerHeight
            };
        e.fn["inner" + i] = function(t) {
            return void 0 === t ? o["inner" + i].call(this) : this.each(function() {
                e(this).css(a, s(this, t) + "px")
            })
        }, e.fn["outer" + i] = function(t, n) {
            return "number" != typeof t ? o["outer" + i].call(this, t) : this.each(function() {
                e(this).css(a, s(this, t, !0, n) + "px")
            })
        }
    }), e.fn.addBack || (e.fn.addBack = function(e) {
        return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
    }), e("<a>").data("a-b", "a").removeData("a-b").data("a-b") && (e.fn.removeData = function(t) {
        return function(i) {
            return arguments.length ? t.call(this, e.camelCase(i)) : t.call(this)
        }
    }(e.fn.removeData)), e.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase()), e.fn.extend({
        focus: function(t) {
            return function(i, s) {
                return "number" == typeof i ? this.each(function() {
                    var t = this;
                    setTimeout(function() {
                        e(t).focus(), s && s.call(t)
                    }, i)
                }) : t.apply(this, arguments)
            }
        }(e.fn.focus),
        disableSelection: function() {
            var e = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown";
            return function() {
                return this.bind(e + ".ui-disableSelection", function(e) {
                    e.preventDefault()
                })
            }
        }(),
        enableSelection: function() {
            return this.unbind(".ui-disableSelection")
        },
        zIndex: function(t) {
            if (void 0 !== t) return this.css("zIndex", t);
            if (this.length)
                for (var i, s, n = e(this[0]); n.length && n[0] !== document;) {
                    if (i = n.css("position"), ("absolute" === i || "relative" === i || "fixed" === i) && (s = parseInt(n.css("zIndex"), 10), !isNaN(s) && 0 !== s)) return s;
                    n = n.parent()
                }
            return 0
        }
    }), e.ui.plugin = {
        add: function(t, i, s) {
            var n, a = e.ui[t].prototype;
            for (n in s) a.plugins[n] = a.plugins[n] || [], a.plugins[n].push([i, s[n]])
        },
        call: function(e, t, i, s) {
            var n, a = e.plugins[t];
            if (a && (s || e.element[0].parentNode && 11 !== e.element[0].parentNode.nodeType))
                for (n = 0; a.length > n; n++) e.options[a[n][0]] && a[n][1].apply(e.element, i)
        }
    };
    var s = 0,
        n = Array.prototype.slice;
    e.cleanData = function(t) {
        return function(i) {
            var s, n, a;
            for (a = 0; null != (n = i[a]); a++) try {
                s = e._data(n, "events"), s && s.remove && e(n).triggerHandler("remove")
            } catch (o) {}
            t(i)
        }
    }(e.cleanData), e.widget = function(t, i, s) {
        var n, a, o, r, h = {},
            l = t.split(".")[0];
        return t = t.split(".")[1], n = l + "-" + t, s || (s = i, i = e.Widget), e.expr[":"][n.toLowerCase()] = function(t) {
            return !!e.data(t, n)
        }, e[l] = e[l] || {}, a = e[l][t], o = e[l][t] = function(e, t) {
            return this._createWidget ? void(arguments.length && this._createWidget(e, t)) : new o(e, t)
        }, e.extend(o, a, {
            version: s.version,
            _proto: e.extend({}, s),
            _childConstructors: []
        }), r = new i, r.options = e.widget.extend({}, r.options), e.each(s, function(t, s) {
            return e.isFunction(s) ? void(h[t] = function() {
                var e = function() {
                        return i.prototype[t].apply(this, arguments)
                    },
                    n = function(e) {
                        return i.prototype[t].apply(this, e)
                    };
                return function() {
                    var t, i = this._super,
                        a = this._superApply;
                    return this._super = e, this._superApply = n, t = s.apply(this, arguments), this._super = i, this._superApply = a, t
                }
            }()) : void(h[t] = s)
        }), o.prototype = e.widget.extend(r, {
            widgetEventPrefix: a ? r.widgetEventPrefix || t : t
        }, h, {
            constructor: o,
            namespace: l,
            widgetName: t,
            widgetFullName: n
        }), a ? (e.each(a._childConstructors, function(t, i) {
            var s = i.prototype;
            e.widget(s.namespace + "." + s.widgetName, o, i._proto)
        }), delete a._childConstructors) : i._childConstructors.push(o), e.widget.bridge(t, o), o
    }, e.widget.extend = function(t) {
        for (var i, s, a = n.call(arguments, 1), o = 0, r = a.length; r > o; o++)
            for (i in a[o]) s = a[o][i], a[o].hasOwnProperty(i) && void 0 !== s && (t[i] = e.isPlainObject(s) ? e.isPlainObject(t[i]) ? e.widget.extend({}, t[i], s) : e.widget.extend({}, s) : s);
        return t
    }, e.widget.bridge = function(t, i) {
        var s = i.prototype.widgetFullName || t;
        e.fn[t] = function(a) {
            var o = "string" == typeof a,
                r = n.call(arguments, 1),
                h = this;
            return o ? this.each(function() {
                var i, n = e.data(this, s);
                return "instance" === a ? (h = n, !1) : n ? e.isFunction(n[a]) && "_" !== a.charAt(0) ? (i = n[a].apply(n, r), i !== n && void 0 !== i ? (h = i && i.jquery ? h.pushStack(i.get()) : i, !1) : void 0) : e.error("no such method '" + a + "' for " + t + " widget instance") : e.error("cannot call methods on " + t + " prior to initialization; attempted to call method '" + a + "'")
            }) : (r.length && (a = e.widget.extend.apply(null, [a].concat(r))), this.each(function() {
                var t = e.data(this, s);
                t ? (t.option(a || {}), t._init && t._init()) : e.data(this, s, new i(a, this))
            })), h
        }
    }, e.Widget = function() {}, e.Widget._childConstructors = [], e.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {
            disabled: !1,
            create: null
        },
        _createWidget: function(t, i) {
            i = e(i || this.defaultElement || this)[0], this.element = e(i), this.uuid = s++, this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = e(), this.hoverable = e(), this.focusable = e(), i !== this && (e.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function(e) {
                    e.target === i && this.destroy()
                }
            }), this.document = e(i.style ? i.ownerDocument : i.document || i), this.window = e(this.document[0].defaultView || this.document[0].parentWindow)), this.options = e.widget.extend({}, this.options, this._getCreateOptions(), t), this._create(), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: e.noop,
        _getCreateEventData: e.noop,
        _create: e.noop,
        _init: e.noop,
        destroy: function() {
            this._destroy(), this.element.unbind(this.eventNamespace).removeData(this.widgetFullName).removeData(e.camelCase(this.widgetFullName)), this.widget().unbind(this.eventNamespace).removeAttr("aria-disabled").removeClass(this.widgetFullName + "-disabled ui-state-disabled"), this.bindings.unbind(this.eventNamespace), this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus")
        },
        _destroy: e.noop,
        widget: function() {
            return this.element
        },
        option: function(t, i) {
            var s, n, a, o = t;
            if (0 === arguments.length) return e.widget.extend({}, this.options);
            if ("string" == typeof t)
                if (o = {}, s = t.split("."), t = s.shift(), s.length) {
                    for (n = o[t] = e.widget.extend({}, this.options[t]), a = 0; s.length - 1 > a; a++) n[s[a]] = n[s[a]] || {}, n = n[s[a]];
                    if (t = s.pop(), 1 === arguments.length) return void 0 === n[t] ? null : n[t];
                    n[t] = i
                } else {
                    if (1 === arguments.length) return void 0 === this.options[t] ? null : this.options[t];
                    o[t] = i
                }
            return this._setOptions(o), this
        },
        _setOptions: function(e) {
            var t;
            for (t in e) this._setOption(t, e[t]);
            return this
        },
        _setOption: function(e, t) {
            return this.options[e] = t, "disabled" === e && (this.widget().toggleClass(this.widgetFullName + "-disabled", !!t), t && (this.hoverable.removeClass("ui-state-hover"), this.focusable.removeClass("ui-state-focus"))), this
        },
        enable: function() {
            return this._setOptions({
                disabled: !1
            })
        },
        disable: function() {
            return this._setOptions({
                disabled: !0
            })
        },
        _on: function(t, i, s) {
            var n, a = this;
            "boolean" != typeof t && (s = i, i = t, t = !1), s ? (i = n = e(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, n = this.widget()), e.each(s, function(s, o) {
                function r() {
                    return t || a.options.disabled !== !0 && !e(this).hasClass("ui-state-disabled") ? ("string" == typeof o ? a[o] : o).apply(a, arguments) : void 0
                }
                "string" != typeof o && (r.guid = o.guid = o.guid || r.guid || e.guid++);
                var h = s.match(/^([\w:-]*)\s*(.*)$/),
                    l = h[1] + a.eventNamespace,
                    u = h[2];
                u ? n.delegate(u, l, r) : i.bind(l, r)
            })
        },
        _off: function(t, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, t.unbind(i).undelegate(i), this.bindings = e(this.bindings.not(t).get()), this.focusable = e(this.focusable.not(t).get()), this.hoverable = e(this.hoverable.not(t).get())
        },
        _delay: function(e, t) {
            function i() {
                return ("string" == typeof e ? s[e] : e).apply(s, arguments)
            }
            var s = this;
            return setTimeout(i, t || 0)
        },
        _hoverable: function(t) {
            this.hoverable = this.hoverable.add(t), this._on(t, {
                mouseenter: function(t) {
                    e(t.currentTarget).addClass("ui-state-hover")
                },
                mouseleave: function(t) {
                    e(t.currentTarget).removeClass("ui-state-hover")
                }
            })
        },
        _focusable: function(t) {
            this.focusable = this.focusable.add(t), this._on(t, {
                focusin: function(t) {
                    e(t.currentTarget).addClass("ui-state-focus")
                },
                focusout: function(t) {
                    e(t.currentTarget).removeClass("ui-state-focus")
                }
            })
        },
        _trigger: function(t, i, s) {
            var n, a, o = this.options[t];
            if (s = s || {}, i = e.Event(i), i.type = (t === this.widgetEventPrefix ? t : this.widgetEventPrefix + t).toLowerCase(), i.target = this.element[0], a = i.originalEvent)
                for (n in a) n in i || (i[n] = a[n]);
            return this.element.trigger(i, s), !(e.isFunction(o) && o.apply(this.element[0], [i].concat(s)) === !1 || i.isDefaultPrevented())
        }
    }, e.each({
        show: "fadeIn",
        hide: "fadeOut"
    }, function(t, i) {
        e.Widget.prototype["_" + t] = function(s, n, a) {
            "string" == typeof n && (n = {
                effect: n
            });
            var o, r = n ? n === !0 || "number" == typeof n ? i : n.effect || i : t;
            n = n || {}, "number" == typeof n && (n = {
                duration: n
            }), o = !e.isEmptyObject(n), n.complete = a, n.delay && s.delay(n.delay), o && e.effects && e.effects.effect[r] ? s[t](n) : r !== t && s[r] ? s[r](n.duration, n.easing, a) : s.queue(function(i) {
                e(this)[t](), a && a.call(s[0]), i()
            })
        }
    }), e.widget;
    var a = !1;
    e(document).mouseup(function() {
            a = !1
        }), e.widget("ui.mouse", {
            version: "1.11.4",
            options: {
                cancel: "input,textarea,button,select,option",
                distance: 1,
                delay: 0
            },
            _mouseInit: function() {
                var t = this;
                this.element.bind("mousedown." + this.widgetName, function(e) {
                    return t._mouseDown(e)
                }).bind("click." + this.widgetName, function(i) {
                    return !0 === e.data(i.target, t.widgetName + ".preventClickEvent") ? (e.removeData(i.target, t.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
                }), this.started = !1
            },
            _mouseDestroy: function() {
                this.element.unbind("." + this.widgetName), this._mouseMoveDelegate && this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate)
            },
            _mouseDown: function(t) {
                if (!a) {
                    this._mouseMoved = !1, this._mouseStarted && this._mouseUp(t), this._mouseDownEvent = t;
                    var i = this,
                        s = 1 === t.which,
                        n = "string" == typeof this.options.cancel && t.target.nodeName ? e(t.target).closest(this.options.cancel).length : !1;
                    return s && !n && this._mouseCapture(t) ? (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function() {
                        i.mouseDelayMet = !0
                    }, this.options.delay)), this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(t) !== !1, !this._mouseStarted) ? (t.preventDefault(), !0) : (!0 === e.data(t.target, this.widgetName + ".preventClickEvent") && e.removeData(t.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function(e) {
                        return i._mouseMove(e)
                    }, this._mouseUpDelegate = function(e) {
                        return i._mouseUp(e)
                    }, this.document.bind("mousemove." + this.widgetName, this._mouseMoveDelegate).bind("mouseup." + this.widgetName, this._mouseUpDelegate), t.preventDefault(), a = !0, !0)) : !0
                }
            },
            _mouseMove: function(t) {
                if (this._mouseMoved) {
                    if (e.ui.ie && (!document.documentMode || 9 > document.documentMode) && !t.button) return this._mouseUp(t);
                    if (!t.which) return this._mouseUp(t)
                }
                return (t.which || t.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(t), t.preventDefault()) : (this._mouseDistanceMet(t) && this._mouseDelayMet(t) && (this._mouseStarted = this._mouseStart(this._mouseDownEvent, t) !== !1, this._mouseStarted ? this._mouseDrag(t) : this._mouseUp(t)), !this._mouseStarted)
            },
            _mouseUp: function(t) {
                return this.document.unbind("mousemove." + this.widgetName, this._mouseMoveDelegate).unbind("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, t.target === this._mouseDownEvent.target && e.data(t.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(t)), a = !1, !1
            },
            _mouseDistanceMet: function(e) {
                return Math.max(Math.abs(this._mouseDownEvent.pageX - e.pageX), Math.abs(this._mouseDownEvent.pageY - e.pageY)) >= this.options.distance
            },
            _mouseDelayMet: function() {
                return this.mouseDelayMet
            },
            _mouseStart: function() {},
            _mouseDrag: function() {},
            _mouseStop: function() {},
            _mouseCapture: function() {
                return !0
            }
        }),
        function() {
            function t(e, t, i) {
                return [parseFloat(e[0]) * (p.test(e[0]) ? t / 100 : 1), parseFloat(e[1]) * (p.test(e[1]) ? i / 100 : 1)]
            }

            function i(t, i) {
                return parseInt(e.css(t, i), 10) || 0
            }

            function s(t) {
                var i = t[0];
                return 9 === i.nodeType ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: 0,
                        left: 0
                    }
                } : e.isWindow(i) ? {
                    width: t.width(),
                    height: t.height(),
                    offset: {
                        top: t.scrollTop(),
                        left: t.scrollLeft()
                    }
                } : i.preventDefault ? {
                    width: 0,
                    height: 0,
                    offset: {
                        top: i.pageY,
                        left: i.pageX
                    }
                } : {
                    width: t.outerWidth(),
                    height: t.outerHeight(),
                    offset: t.offset()
                }
            }
            e.ui = e.ui || {};
            var n, a, o = Math.max,
                r = Math.abs,
                h = Math.round,
                l = /left|center|right/,
                u = /top|center|bottom/,
                d = /[\+\-]\d+(\.[\d]+)?%?/,
                c = /^\w+/,
                p = /%$/,
                f = e.fn.position;
            e.position = {
                    scrollbarWidth: function() {
                        if (void 0 !== n) return n;
                        var t, i, s = e("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                            a = s.children()[0];
                        return e("body").append(s), t = a.offsetWidth, s.css("overflow", "scroll"), i = a.offsetWidth, t === i && (i = s[0].clientWidth), s.remove(), n = t - i
                    },
                    getScrollInfo: function(t) {
                        var i = t.isWindow || t.isDocument ? "" : t.element.css("overflow-x"),
                            s = t.isWindow || t.isDocument ? "" : t.element.css("overflow-y"),
                            n = "scroll" === i || "auto" === i && t.width < t.element[0].scrollWidth,
                            a = "scroll" === s || "auto" === s && t.height < t.element[0].scrollHeight;
                        return {
                            width: a ? e.position.scrollbarWidth() : 0,
                            height: n ? e.position.scrollbarWidth() : 0
                        }
                    },
                    getWithinInfo: function(t) {
                        var i = e(t || window),
                            s = e.isWindow(i[0]),
                            n = !!i[0] && 9 === i[0].nodeType;
                        return {
                            element: i,
                            isWindow: s,
                            isDocument: n,
                            offset: i.offset() || {
                                left: 0,
                                top: 0
                            },
                            scrollLeft: i.scrollLeft(),
                            scrollTop: i.scrollTop(),
                            width: s || n ? i.width() : i.outerWidth(),
                            height: s || n ? i.height() : i.outerHeight()
                        }
                    }
                }, e.fn.position = function(n) {
                    if (!n || !n.of) return f.apply(this, arguments);
                    n = e.extend({}, n);
                    var p, m, g, v, y, b, _ = e(n.of),
                        x = e.position.getWithinInfo(n.within),
                        w = e.position.getScrollInfo(x),
                        k = (n.collision || "flip").split(" "),
                        T = {};
                    return b = s(_), _[0].preventDefault && (n.at = "left top"), m = b.width, g = b.height, v = b.offset, y = e.extend({}, v), e.each(["my", "at"], function() {
                        var e, t, i = (n[this] || "").split(" ");
                        1 === i.length && (i = l.test(i[0]) ? i.concat(["center"]) : u.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = l.test(i[0]) ? i[0] : "center", i[1] = u.test(i[1]) ? i[1] : "center", e = d.exec(i[0]), t = d.exec(i[1]), T[this] = [e ? e[0] : 0, t ? t[0] : 0], n[this] = [c.exec(i[0])[0], c.exec(i[1])[0]]
                    }), 1 === k.length && (k[1] = k[0]), "right" === n.at[0] ? y.left += m : "center" === n.at[0] && (y.left += m / 2), "bottom" === n.at[1] ? y.top += g : "center" === n.at[1] && (y.top += g / 2), p = t(T.at, m, g), y.left += p[0], y.top += p[1], this.each(function() {
                        var s, l, u = e(this),
                            d = u.outerWidth(),
                            c = u.outerHeight(),
                            f = i(this, "marginLeft"),
                            b = i(this, "marginTop"),
                            D = d + f + i(this, "marginRight") + w.width,
                            S = c + b + i(this, "marginBottom") + w.height,
                            N = e.extend({}, y),
                            M = t(T.my, u.outerWidth(), u.outerHeight());
                        "right" === n.my[0] ? N.left -= d : "center" === n.my[0] && (N.left -= d / 2), "bottom" === n.my[1] ? N.top -= c : "center" === n.my[1] && (N.top -= c / 2), N.left += M[0], N.top += M[1], a || (N.left = h(N.left), N.top = h(N.top)), s = {
                            marginLeft: f,
                            marginTop: b
                        }, e.each(["left", "top"], function(t, i) {
                            e.ui.position[k[t]] && e.ui.position[k[t]][i](N, {
                                targetWidth: m,
                                targetHeight: g,
                                elemWidth: d,
                                elemHeight: c,
                                collisionPosition: s,
                                collisionWidth: D,
                                collisionHeight: S,
                                offset: [p[0] + M[0], p[1] + M[1]],
                                my: n.my,
                                at: n.at,
                                within: x,
                                elem: u
                            })
                        }), n.using && (l = function(e) {
                            var t = v.left - N.left,
                                i = t + m - d,
                                s = v.top - N.top,
                                a = s + g - c,
                                h = {
                                    target: {
                                        element: _,
                                        left: v.left,
                                        top: v.top,
                                        width: m,
                                        height: g
                                    },
                                    element: {
                                        element: u,
                                        left: N.left,
                                        top: N.top,
                                        width: d,
                                        height: c
                                    },
                                    horizontal: 0 > i ? "left" : t > 0 ? "right" : "center",
                                    vertical: 0 > a ? "top" : s > 0 ? "bottom" : "middle"
                                };
                            d > m && m > r(t + i) && (h.horizontal = "center"), c > g && g > r(s + a) && (h.vertical = "middle"), h.important = o(r(t), r(i)) > o(r(s), r(a)) ? "horizontal" : "vertical", n.using.call(this, e, h)
                        }), u.offset(e.extend(N, {
                            using: l
                        }))
                    })
                }, e.ui.position = {
                    fit: {
                        left: function(e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollLeft : s.offset.left,
                                a = s.width,
                                r = e.left - t.collisionPosition.marginLeft,
                                h = n - r,
                                l = r + t.collisionWidth - a - n;
                            t.collisionWidth > a ? h > 0 && 0 >= l ? (i = e.left + h + t.collisionWidth - a - n, e.left += h - i) : e.left = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionWidth : n : h > 0 ? e.left += h : l > 0 ? e.left -= l : e.left = o(e.left - r, e.left)
                        },
                        top: function(e, t) {
                            var i, s = t.within,
                                n = s.isWindow ? s.scrollTop : s.offset.top,
                                a = t.within.height,
                                r = e.top - t.collisionPosition.marginTop,
                                h = n - r,
                                l = r + t.collisionHeight - a - n;
                            t.collisionHeight > a ? h > 0 && 0 >= l ? (i = e.top + h + t.collisionHeight - a - n, e.top += h - i) : e.top = l > 0 && 0 >= h ? n : h > l ? n + a - t.collisionHeight : n : h > 0 ? e.top += h : l > 0 ? e.top -= l : e.top = o(e.top - r, e.top)
                        }
                    },
                    flip: {
                        left: function(e, t) {
                            var i, s, n = t.within,
                                a = n.offset.left + n.scrollLeft,
                                o = n.width,
                                h = n.isWindow ? n.scrollLeft : n.offset.left,
                                l = e.left - t.collisionPosition.marginLeft,
                                u = l - h,
                                d = l + t.collisionWidth - o - h,
                                c = "left" === t.my[0] ? -t.elemWidth : "right" === t.my[0] ? t.elemWidth : 0,
                                p = "left" === t.at[0] ? t.targetWidth : "right" === t.at[0] ? -t.targetWidth : 0,
                                f = -2 * t.offset[0];
                            0 > u ? (i = e.left + c + p + f + t.collisionWidth - o - a, (0 > i || r(u) > i) && (e.left += c + p + f)) : d > 0 && (s = e.left - t.collisionPosition.marginLeft + c + p + f - h, (s > 0 || d > r(s)) && (e.left += c + p + f))
                        },
                        top: function(e, t) {
                            var i, s, n = t.within,
                                a = n.offset.top + n.scrollTop,
                                o = n.height,
                                h = n.isWindow ? n.scrollTop : n.offset.top,
                                l = e.top - t.collisionPosition.marginTop,
                                u = l - h,
                                d = l + t.collisionHeight - o - h,
                                c = "top" === t.my[1],
                                p = c ? -t.elemHeight : "bottom" === t.my[1] ? t.elemHeight : 0,
                                f = "top" === t.at[1] ? t.targetHeight : "bottom" === t.at[1] ? -t.targetHeight : 0,
                                m = -2 * t.offset[1];
                            0 > u ? (s = e.top + p + f + m + t.collisionHeight - o - a, (0 > s || r(u) > s) && (e.top += p + f + m)) : d > 0 && (i = e.top - t.collisionPosition.marginTop + p + f + m - h, (i > 0 || d > r(i)) && (e.top += p + f + m))
                        }
                    },
                    flipfit: {
                        left: function() {
                            e.ui.position.flip.left.apply(this, arguments), e.ui.position.fit.left.apply(this, arguments)
                        },
                        top: function() {
                            e.ui.position.flip.top.apply(this, arguments), e.ui.position.fit.top.apply(this, arguments)
                        }
                    }
                },
                function() {
                    var t, i, s, n, o, r = document.getElementsByTagName("body")[0],
                        h = document.createElement("div");
                    t = document.createElement(r ? "div" : "body"), s = {
                        visibility: "hidden",
                        width: 0,
                        height: 0,
                        border: 0,
                        margin: 0,
                        background: "none"
                    }, r && e.extend(s, {
                        position: "absolute",
                        left: "-1000px",
                        top: "-1000px"
                    });
                    for (o in s) t.style[o] = s[o];
                    t.appendChild(h), i = r || document.documentElement, i.insertBefore(t, i.firstChild), h.style.cssText = "position: absolute; left: 10.7432222px;", n = e(h).offset().left, a = n > 10 && 11 > n, t.innerHTML = "", i.removeChild(t)
                }()
        }(), e.ui.position, e.widget("ui.draggable", e.ui.mouse, {
            version: "1.11.4",
            widgetEventPrefix: "drag",
            options: {
                addClasses: !0,
                appendTo: "parent",
                axis: !1,
                connectToSortable: !1,
                containment: !1,
                cursor: "auto",
                cursorAt: !1,
                grid: !1,
                handle: !1,
                helper: "original",
                iframeFix: !1,
                opacity: !1,
                refreshPositions: !1,
                revert: !1,
                revertDuration: 500,
                scope: "default",
                scroll: !0,
                scrollSensitivity: 20,
                scrollSpeed: 20,
                snap: !1,
                snapMode: "both",
                snapTolerance: 20,
                stack: !1,
                zIndex: !1,
                drag: null,
                start: null,
                stop: null
            },
            _create: function() {
                "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this.element.addClass("ui-draggable"), this.options.disabled && this.element.addClass("ui-draggable-disabled"), this._setHandleClassName(), this._mouseInit()
            },
            _setOption: function(e, t) {
                this._super(e, t), "handle" === e && (this._removeHandleClassName(), this._setHandleClassName())
            },
            _destroy: function() {
                return (this.helper || this.element).is(".ui-draggable-dragging") ? void(this.destroyOnClear = !0) : (this.element.removeClass("ui-draggable ui-draggable-dragging ui-draggable-disabled"), this._removeHandleClassName(), void this._mouseDestroy())
            },
            _mouseCapture: function(t) {
                var i = this.options;
                return this._blurActiveElement(t), this.helper || i.disabled || e(t.target).closest(".ui-resizable-handle").length > 0 ? !1 : (this.handle = this._getHandle(t), this.handle ? (this._blockFrames(i.iframeFix === !0 ? "iframe" : i.iframeFix), !0) : !1)
            },
            _blockFrames: function(t) {
                this.iframeBlocks = this.document.find(t).map(function() {
                    var t = e(this);
                    return e("<div>").css("position", "absolute").appendTo(t.parent()).outerWidth(t.outerWidth()).outerHeight(t.outerHeight()).offset(t.offset())[0]
                })
            },
            _unblockFrames: function() {
                this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
            },
            _blurActiveElement: function(t) {
                var i = this.document[0];
                if (this.handleElement.is(t.target)) try {
                    i.activeElement && "body" !== i.activeElement.nodeName.toLowerCase() && e(i.activeElement).blur()
                } catch (s) {}
            },
            _mouseStart: function(t) {
                var i = this.options;
                return this.helper = this._createHelper(t), this.helper.addClass("ui-draggable-dragging"), this._cacheHelperProportions(), e.ui.ddmanager && (e.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function() {
                    return "fixed" === e(this).css("position")
                }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(t), this.originalPosition = this.position = this._generatePosition(t, !1), this.originalPageX = t.pageX, this.originalPageY = t.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), this._trigger("start", t) === !1 ? (this._clear(), !1) : (this._cacheHelperProportions(), e.ui.ddmanager && !i.dropBehaviour && e.ui.ddmanager.prepareOffsets(this, t), this._normalizeRightBottom(), this._mouseDrag(t, !0), e.ui.ddmanager && e.ui.ddmanager.dragStart(this, t), !0)
            },
            _refreshOffsets: function(e) {
                this.offset = {
                    top: this.positionAbs.top - this.margins.top,
                    left: this.positionAbs.left - this.margins.left,
                    scroll: !1,
                    parent: this._getParentOffset(),
                    relative: this._getRelativeOffset()
                }, this.offset.click = {
                    left: e.pageX - this.offset.left,
                    top: e.pageY - this.offset.top
                }
            },
            _mouseDrag: function(t, i) {
                if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(t, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                    var s = this._uiHash();
                    if (this._trigger("drag", t, s) === !1) return this._mouseUp({}), !1;
                    this.position = s.position
                }
                return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", e.ui.ddmanager && e.ui.ddmanager.drag(this, t), !1
            },
            _mouseStop: function(t) {
                var i = this,
                    s = !1;
                return e.ui.ddmanager && !this.options.dropBehaviour && (s = e.ui.ddmanager.drop(this, t)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || this.options.revert === !0 || e.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? e(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function() {
                    i._trigger("stop", t) !== !1 && i._clear()
                }) : this._trigger("stop", t) !== !1 && this._clear(), !1
            },
            _mouseUp: function(t) {
                return this._unblockFrames(), e.ui.ddmanager && e.ui.ddmanager.dragStop(this, t), this.handleElement.is(t.target) && this.element.focus(), e.ui.mouse.prototype._mouseUp.call(this, t)
            },
            cancel: function() {
                return this.helper.is(".ui-draggable-dragging") ? this._mouseUp({}) : this._clear(), this
            },
            _getHandle: function(t) {
                return this.options.handle ? !!e(t.target).closest(this.element.find(this.options.handle)).length : !0
            },
            _setHandleClassName: function() {
                this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this.handleElement.addClass("ui-draggable-handle")
            },
            _removeHandleClassName: function() {
                this.handleElement.removeClass("ui-draggable-handle")
            },
            _createHelper: function(t) {
                var i = this.options,
                    s = e.isFunction(i.helper),
                    n = s ? e(i.helper.apply(this.element[0], [t])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
                return n.parents("body").length || n.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && n[0] === this.element[0] && this._setPositionRelative(), n[0] === this.element[0] || /(fixed|absolute)/.test(n.css("position")) || n.css("position", "absolute"), n
            },
            _setPositionRelative: function() {
                /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
            },
            _adjustOffsetFromHelper: function(t) {
                "string" == typeof t && (t = t.split(" ")), e.isArray(t) && (t = {
                    left: +t[0],
                    top: +t[1] || 0
                }), "left" in t && (this.offset.click.left = t.left + this.margins.left), "right" in t && (this.offset.click.left = this.helperProportions.width - t.right + this.margins.left), "top" in t && (this.offset.click.top = t.top + this.margins.top), "bottom" in t && (this.offset.click.top = this.helperProportions.height - t.bottom + this.margins.top)
            },
            _isRootNode: function(e) {
                return /(html|body)/i.test(e.tagName) || e === this.document[0]
            },
            _getParentOffset: function() {
                var t = this.offsetParent.offset(),
                    i = this.document[0];
                return "absolute" === this.cssPosition && this.scrollParent[0] !== i && e.contains(this.scrollParent[0], this.offsetParent[0]) && (t.left += this.scrollParent.scrollLeft(), t.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (t = {
                    top: 0,
                    left: 0
                }), {
                    top: t.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                    left: t.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
                }
            },
            _getRelativeOffset: function() {
                if ("relative" !== this.cssPosition) return {
                    top: 0,
                    left: 0
                };
                var e = this.element.position(),
                    t = this._isRootNode(this.scrollParent[0]);
                return {
                    top: e.top - (parseInt(this.helper.css("top"), 10) || 0) + (t ? 0 : this.scrollParent.scrollTop()),
                    left: e.left - (parseInt(this.helper.css("left"), 10) || 0) + (t ? 0 : this.scrollParent.scrollLeft())
                }
            },
            _cacheMargins: function() {
                this.margins = {
                    left: parseInt(this.element.css("marginLeft"), 10) || 0,
                    top: parseInt(this.element.css("marginTop"), 10) || 0,
                    right: parseInt(this.element.css("marginRight"), 10) || 0,
                    bottom: parseInt(this.element.css("marginBottom"), 10) || 0
                }
            },
            _cacheHelperProportions: function() {
                this.helperProportions = {
                    width: this.helper.outerWidth(),
                    height: this.helper.outerHeight()
                }
            },
            _setContainment: function() {
                var t, i, s, n = this.options,
                    a = this.document[0];
                return this.relativeContainer = null, n.containment ? "window" === n.containment ? void(this.containment = [e(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, e(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, e(window).scrollLeft() + e(window).width() - this.helperProportions.width - this.margins.left, e(window).scrollTop() + (e(window).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === n.containment ? void(this.containment = [0, 0, e(a).width() - this.helperProportions.width - this.margins.left, (e(a).height() || a.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : n.containment.constructor === Array ? void(this.containment = n.containment) : ("parent" === n.containment && (n.containment = this.helper[0].parentNode), i = e(n.containment), s = i[0], void(s && (t = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (t ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (t ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void(this.containment = null)
            },
            _convertPositionTo: function(e, t) {
                t || (t = this.position);
                var i = "absolute" === e ? 1 : -1,
                    s = this._isRootNode(this.scrollParent[0]);
                return {
                    top: t.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                    left: t.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
                }
            },
            _generatePosition: function(e, t) {
                var i, s, n, a, o = this.options,
                    r = this._isRootNode(this.scrollParent[0]),
                    h = e.pageX,
                    l = e.pageY;
                return r && this.offset.scroll || (this.offset.scroll = {
                    top: this.scrollParent.scrollTop(),
                    left: this.scrollParent.scrollLeft()
                }), t && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, e.pageX - this.offset.click.left < i[0] && (h = i[0] + this.offset.click.left), e.pageY - this.offset.click.top < i[1] && (l = i[1] + this.offset.click.top), e.pageX - this.offset.click.left > i[2] && (h = i[2] + this.offset.click.left), e.pageY - this.offset.click.top > i[3] && (l = i[3] + this.offset.click.top)), o.grid && (n = o.grid[1] ? this.originalPageY + Math.round((l - this.originalPageY) / o.grid[1]) * o.grid[1] : this.originalPageY, l = i ? n - this.offset.click.top >= i[1] || n - this.offset.click.top > i[3] ? n : n - this.offset.click.top >= i[1] ? n - o.grid[1] : n + o.grid[1] : n, a = o.grid[0] ? this.originalPageX + Math.round((h - this.originalPageX) / o.grid[0]) * o.grid[0] : this.originalPageX, h = i ? a - this.offset.click.left >= i[0] || a - this.offset.click.left > i[2] ? a : a - this.offset.click.left >= i[0] ? a - o.grid[0] : a + o.grid[0] : a), "y" === o.axis && (h = this.originalPageX), "x" === o.axis && (l = this.originalPageY)), {
                    top: l - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                    left: h - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
                }
            },
            _clear: function() {
                this.helper.removeClass("ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
            },
            _normalizeRightBottom: function() {
                "y" !== this.options.axis && "auto" !== this.helper.css("right") && (this.helper.width(this.helper.width()), this.helper.css("right", "auto")), "x" !== this.options.axis && "auto" !== this.helper.css("bottom") && (this.helper.height(this.helper.height()), this.helper.css("bottom", "auto"))
            },
            _trigger: function(t, i, s) {
                return s = s || this._uiHash(), e.ui.plugin.call(this, t, [i, s, this], !0), /^(drag|start|stop)/.test(t) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), e.Widget.prototype._trigger.call(this, t, i, s)
            },
            plugins: {},
            _uiHash: function() {
                return {
                    helper: this.helper,
                    position: this.position,
                    originalPosition: this.originalPosition,
                    offset: this.positionAbs
                }
            }
        }), e.ui.plugin.add("draggable", "connectToSortable", {
            start: function(t, i, s) {
                var n = e.extend({}, i, {
                    item: s.element
                });
                s.sortables = [], e(s.options.connectToSortable).each(function() {
                    var i = e(this).sortable("instance");
                    i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", t, n))
                })
            },
            stop: function(t, i, s) {
                var n = e.extend({}, i, {
                    item: s.element
                });
                s.cancelHelperRemoval = !1, e.each(s.sortables, function() {
                    var e = this;
                    e.isOver ? (e.isOver = 0, s.cancelHelperRemoval = !0, e.cancelHelperRemoval = !1, e._storedCSS = {
                        position: e.placeholder.css("position"),
                        top: e.placeholder.css("top"),
                        left: e.placeholder.css("left")
                    }, e._mouseStop(t), e.options.helper = e.options._helper) : (e.cancelHelperRemoval = !0, e._trigger("deactivate", t, n))
                })
            },
            drag: function(t, i, s) {
                e.each(s.sortables, function() {
                    var n = !1,
                        a = this;
                    a.positionAbs = s.positionAbs, a.helperProportions = s.helperProportions, a.offset.click = s.offset.click, a._intersectsWith(a.containerCache) && (n = !0, e.each(s.sortables, function() {
                        return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== a && this._intersectsWith(this.containerCache) && e.contains(a.element[0], this.element[0]) && (n = !1), n
                    })), n ? (a.isOver || (a.isOver = 1, s._parent = i.helper.parent(), a.currentItem = i.helper.appendTo(a.element).data("ui-sortable-item", !0), a.options._helper = a.options.helper, a.options.helper = function() {
                        return i.helper[0]
                    }, t.target = a.currentItem[0], a._mouseCapture(t, !0), a._mouseStart(t, !0, !0), a.offset.click.top = s.offset.click.top, a.offset.click.left = s.offset.click.left, a.offset.parent.left -= s.offset.parent.left - a.offset.parent.left, a.offset.parent.top -= s.offset.parent.top - a.offset.parent.top, s._trigger("toSortable", t), s.dropped = a.element, e.each(s.sortables, function() {
                        this.refreshPositions()
                    }), s.currentItem = s.element, a.fromOutside = s), a.currentItem && (a._mouseDrag(t), i.position = a.position)) : a.isOver && (a.isOver = 0, a.cancelHelperRemoval = !0, a.options._revert = a.options.revert, a.options.revert = !1, a._trigger("out", t, a._uiHash(a)), a._mouseStop(t, !0), a.options.revert = a.options._revert, a.options.helper = a.options._helper, a.placeholder && a.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(t), i.position = s._generatePosition(t, !0), s._trigger("fromSortable", t), s.dropped = !1, e.each(s.sortables, function() {
                        this.refreshPositions()
                    }))
                })
            }
        }), e.ui.plugin.add("draggable", "cursor", {
            start: function(t, i, s) {
                var n = e("body"),
                    a = s.options;
                n.css("cursor") && (a._cursor = n.css("cursor")), n.css("cursor", a.cursor)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._cursor && e("body").css("cursor", n._cursor)
            }
        }), e.ui.plugin.add("draggable", "opacity", {
            start: function(t, i, s) {
                var n = e(i.helper),
                    a = s.options;
                n.css("opacity") && (a._opacity = n.css("opacity")), n.css("opacity", a.opacity)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._opacity && e(i.helper).css("opacity", n._opacity)
            }
        }), e.ui.plugin.add("draggable", "scroll", {
            start: function(e, t, i) {
                i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset());
            },
            drag: function(t, i, s) {
                var n = s.options,
                    a = !1,
                    o = s.scrollParentNotHidden[0],
                    r = s.document[0];
                o !== r && "HTML" !== o.tagName ? (n.axis && "x" === n.axis || (s.overflowOffset.top + o.offsetHeight - t.pageY < n.scrollSensitivity ? o.scrollTop = a = o.scrollTop + n.scrollSpeed : t.pageY - s.overflowOffset.top < n.scrollSensitivity && (o.scrollTop = a = o.scrollTop - n.scrollSpeed)), n.axis && "y" === n.axis || (s.overflowOffset.left + o.offsetWidth - t.pageX < n.scrollSensitivity ? o.scrollLeft = a = o.scrollLeft + n.scrollSpeed : t.pageX - s.overflowOffset.left < n.scrollSensitivity && (o.scrollLeft = a = o.scrollLeft - n.scrollSpeed))) : (n.axis && "x" === n.axis || (t.pageY - e(r).scrollTop() < n.scrollSensitivity ? a = e(r).scrollTop(e(r).scrollTop() - n.scrollSpeed) : e(window).height() - (t.pageY - e(r).scrollTop()) < n.scrollSensitivity && (a = e(r).scrollTop(e(r).scrollTop() + n.scrollSpeed))), n.axis && "y" === n.axis || (t.pageX - e(r).scrollLeft() < n.scrollSensitivity ? a = e(r).scrollLeft(e(r).scrollLeft() - n.scrollSpeed) : e(window).width() - (t.pageX - e(r).scrollLeft()) < n.scrollSensitivity && (a = e(r).scrollLeft(e(r).scrollLeft() + n.scrollSpeed)))), a !== !1 && e.ui.ddmanager && !n.dropBehaviour && e.ui.ddmanager.prepareOffsets(s, t)
            }
        }), e.ui.plugin.add("draggable", "snap", {
            start: function(t, i, s) {
                var n = s.options;
                s.snapElements = [], e(n.snap.constructor !== String ? n.snap.items || ":data(ui-draggable)" : n.snap).each(function() {
                    var t = e(this),
                        i = t.offset();
                    this !== s.element[0] && s.snapElements.push({
                        item: this,
                        width: t.outerWidth(),
                        height: t.outerHeight(),
                        top: i.top,
                        left: i.left
                    })
                })
            },
            drag: function(t, i, s) {
                var n, a, o, r, h, l, u, d, c, p, f = s.options,
                    m = f.snapTolerance,
                    g = i.offset.left,
                    v = g + s.helperProportions.width,
                    y = i.offset.top,
                    b = y + s.helperProportions.height;
                for (c = s.snapElements.length - 1; c >= 0; c--) h = s.snapElements[c].left - s.margins.left, l = h + s.snapElements[c].width, u = s.snapElements[c].top - s.margins.top, d = u + s.snapElements[c].height, h - m > v || g > l + m || u - m > b || y > d + m || !e.contains(s.snapElements[c].item.ownerDocument, s.snapElements[c].item) ? (s.snapElements[c].snapping && s.options.snap.release && s.options.snap.release.call(s.element, t, e.extend(s._uiHash(), {
                    snapItem: s.snapElements[c].item
                })), s.snapElements[c].snapping = !1) : ("inner" !== f.snapMode && (n = m >= Math.abs(u - b), a = m >= Math.abs(d - y), o = m >= Math.abs(h - v), r = m >= Math.abs(l - g), n && (i.position.top = s._convertPositionTo("relative", {
                    top: u - s.helperProportions.height,
                    left: 0
                }).top), a && (i.position.top = s._convertPositionTo("relative", {
                    top: d,
                    left: 0
                }).top), o && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h - s.helperProportions.width
                }).left), r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l
                }).left)), p = n || a || o || r, "outer" !== f.snapMode && (n = m >= Math.abs(u - y), a = m >= Math.abs(d - b), o = m >= Math.abs(h - g), r = m >= Math.abs(l - v), n && (i.position.top = s._convertPositionTo("relative", {
                    top: u,
                    left: 0
                }).top), a && (i.position.top = s._convertPositionTo("relative", {
                    top: d - s.helperProportions.height,
                    left: 0
                }).top), o && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: h
                }).left), r && (i.position.left = s._convertPositionTo("relative", {
                    top: 0,
                    left: l - s.helperProportions.width
                }).left)), !s.snapElements[c].snapping && (n || a || o || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, t, e.extend(s._uiHash(), {
                    snapItem: s.snapElements[c].item
                })), s.snapElements[c].snapping = n || a || o || r || p)
            }
        }), e.ui.plugin.add("draggable", "stack", {
            start: function(t, i, s) {
                var n, a = s.options,
                    o = e.makeArray(e(a.stack)).sort(function(t, i) {
                        return (parseInt(e(t).css("zIndex"), 10) || 0) - (parseInt(e(i).css("zIndex"), 10) || 0)
                    });
                o.length && (n = parseInt(e(o[0]).css("zIndex"), 10) || 0, e(o).each(function(t) {
                    e(this).css("zIndex", n + t)
                }), this.css("zIndex", n + o.length))
            }
        }), e.ui.plugin.add("draggable", "zIndex", {
            start: function(t, i, s) {
                var n = e(i.helper),
                    a = s.options;
                n.css("zIndex") && (a._zIndex = n.css("zIndex")), n.css("zIndex", a.zIndex)
            },
            stop: function(t, i, s) {
                var n = s.options;
                n._zIndex && e(i.helper).css("zIndex", n._zIndex)
            }
        }), e.ui.draggable
}),
function($) {
    function Timer(action, time, autostart) {
        return this.constructor != Timer || this.init ? new Timer(action, time, autostart) : (this.set(action, time, autostart), this)
    }
    $.timer = Timer, Timer.prototype.set = function(action, time, autostart) {
        return this.init = !0, "object" == typeof action && (action.time && (time = action.time), action.autostart && (autostart = action.autostart), action = action.action), "function" == typeof action && (this.action = action), isNaN(time) || (this.intervalTime = time), autostart && this.isReadyToStart() && (this.isActive = !0, this.setTimer()), this
    }, Timer.prototype.isReadyToStart = function() {
        var notActive = !this.active,
            hasAction = "function" == typeof this.action,
            hasTime = !isNaN(this.intervalTime);
        return notActive && hasAction && hasTime
    }, Timer.prototype.once = function(time) {
        function fnTimeout() {
            timer.action()
        }
        var timer = this;
        return isNaN(time) ? (timer.action(), this) : (setTimeout(fnTimeout, time), this)
    }, Timer.prototype.play = function(reset) {
        return this.isReadyToStart() && (reset ? this.setTimer() : this.setTimer(this.remaining), this.isActive = !0), this
    }, Timer.prototype.pause = function() {
        return this.isActive && (this.isActive = !1, this.remaining -= new Date - this.last, this.clearTimer()), this
    }, Timer.prototype.stop = function() {
        return this.isActive = !1, this.remaining = this.intervalTime, this.clearTimer(), this
    }, Timer.prototype.toggle = function(reset) {
        return this.isActive ? this.pause() : reset ? this.play(!0) : this.play(), this
    }, Timer.prototype.reset = function() {
        return this.isActive = !1, this.play(!0), this
    }, Timer.prototype.clearTimer = function() {
        return clearTimeout(this.timeoutObject), this
    }, Timer.prototype.setTimer = function(time) {
        function fnTimeout() {
            timer.execute()
        }
        var timer = this;
        return isNaN(time) && (time = this.intervalTime), this.remaining = time, this.last = new Date, this.clearTimer(), this.timeoutObject = setTimeout(fnTimeout, time), this
    }, Timer.prototype.execute = function() {
        if (this.isActive) try {
            this.action()
        } finally {
            this.setTimer()
        }
        return this
    }
}(jQuery),
function(global, factory) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = factory() : "function" == typeof define && define.amd ? define(factory) : global.moment = factory()
}(this, function() {
    "use strict";

    function utils_hooks__hooks() {
        return hookCallback.apply(null, arguments)
    }

    function setHookCallback(callback) {
        hookCallback = callback
    }

    function isArray(input) {
        return "[object Array]" === Object.prototype.toString.call(input)
    }

    function isDate(input) {
        return input instanceof Date || "[object Date]" === Object.prototype.toString.call(input)
    }

    function map(arr, fn) {
        var i, res = [];
        for (i = 0; i < arr.length; ++i) res.push(fn(arr[i], i));
        return res
    }

    function hasOwnProp(a, b) {
        return Object.prototype.hasOwnProperty.call(a, b)
    }

    function extend(a, b) {
        for (var i in b) hasOwnProp(b, i) && (a[i] = b[i]);
        return hasOwnProp(b, "toString") && (a.toString = b.toString), hasOwnProp(b, "valueOf") && (a.valueOf = b.valueOf), a
    }

    function create_utc__createUTC(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, !0).utc()
    }

    function defaultParsingFlags() {
        return {
            empty: !1,
            unusedTokens: [],
            unusedInput: [],
            overflow: -2,
            charsLeftOver: 0,
            nullInput: !1,
            invalidMonth: null,
            invalidFormat: !1,
            userInvalidated: !1,
            iso: !1
        }
    }

    function getParsingFlags(m) {
        return null == m._pf && (m._pf = defaultParsingFlags()), m._pf
    }

    function valid__isValid(m) {
        if (null == m._isValid) {
            var flags = getParsingFlags(m);
            m._isValid = !(isNaN(m._d.getTime()) || !(flags.overflow < 0) || flags.empty || flags.invalidMonth || flags.invalidWeekday || flags.nullInput || flags.invalidFormat || flags.userInvalidated), m._strict && (m._isValid = m._isValid && 0 === flags.charsLeftOver && 0 === flags.unusedTokens.length && void 0 === flags.bigHour)
        }
        return m._isValid
    }

    function valid__createInvalid(flags) {
        var m = create_utc__createUTC(NaN);
        return null != flags ? extend(getParsingFlags(m), flags) : getParsingFlags(m).userInvalidated = !0, m
    }

    function copyConfig(to, from) {
        var i, prop, val;
        if ("undefined" != typeof from._isAMomentObject && (to._isAMomentObject = from._isAMomentObject), "undefined" != typeof from._i && (to._i = from._i), "undefined" != typeof from._f && (to._f = from._f), "undefined" != typeof from._l && (to._l = from._l), "undefined" != typeof from._strict && (to._strict = from._strict), "undefined" != typeof from._tzm && (to._tzm = from._tzm), "undefined" != typeof from._isUTC && (to._isUTC = from._isUTC), "undefined" != typeof from._offset && (to._offset = from._offset), "undefined" != typeof from._pf && (to._pf = getParsingFlags(from)), "undefined" != typeof from._locale && (to._locale = from._locale), momentProperties.length > 0)
            for (i in momentProperties) prop = momentProperties[i], val = from[prop], "undefined" != typeof val && (to[prop] = val);
        return to
    }

    function Moment(config) {
        copyConfig(this, config), this._d = new Date(null != config._d ? config._d.getTime() : NaN), updateInProgress === !1 && (updateInProgress = !0, utils_hooks__hooks.updateOffset(this), updateInProgress = !1)
    }

    function isMoment(obj) {
        return obj instanceof Moment || null != obj && null != obj._isAMomentObject
    }

    function absFloor(number) {
        return 0 > number ? Math.ceil(number) : Math.floor(number)
    }

    function toInt(argumentForCoercion) {
        var coercedNumber = +argumentForCoercion,
            value = 0;
        return 0 !== coercedNumber && isFinite(coercedNumber) && (value = absFloor(coercedNumber)), value
    }

    function compareArrays(array1, array2, dontConvert) {
        var i, len = Math.min(array1.length, array2.length),
            lengthDiff = Math.abs(array1.length - array2.length),
            diffs = 0;
        for (i = 0; len > i; i++)(dontConvert && array1[i] !== array2[i] || !dontConvert && toInt(array1[i]) !== toInt(array2[i])) && diffs++;
        return diffs + lengthDiff
    }

    function Locale() {}

    function normalizeLocale(key) {
        return key ? key.toLowerCase().replace("_", "-") : key
    }

    function chooseLocale(names) {
        for (var j, next, locale, split, i = 0; i < names.length;) {
            for (split = normalizeLocale(names[i]).split("-"), j = split.length, next = normalizeLocale(names[i + 1]), next = next ? next.split("-") : null; j > 0;) {
                if (locale = loadLocale(split.slice(0, j).join("-"))) return locale;
                if (next && next.length >= j && compareArrays(split, next, !0) >= j - 1) break;
                j--
            }
            i++
        }
        return null
    }

    function loadLocale(name) {
        var oldLocale = null;
        if (!locales[name] && "undefined" != typeof module && module && module.exports) try {
            oldLocale = globalLocale._abbr, require("./locale/" + name), locale_locales__getSetGlobalLocale(oldLocale)
        } catch (e) {}
        return locales[name]
    }

    function locale_locales__getSetGlobalLocale(key, values) {
        var data;
        return key && (data = "undefined" == typeof values ? locale_locales__getLocale(key) : defineLocale(key, values), data && (globalLocale = data)), globalLocale._abbr
    }

    function defineLocale(name, values) {
        return null !== values ? (values.abbr = name, locales[name] = locales[name] || new Locale, locales[name].set(values), locale_locales__getSetGlobalLocale(name), locales[name]) : (delete locales[name], null)
    }

    function locale_locales__getLocale(key) {
        var locale;
        if (key && key._locale && key._locale._abbr && (key = key._locale._abbr), !key) return globalLocale;
        if (!isArray(key)) {
            if (locale = loadLocale(key)) return locale;
            key = [key]
        }
        return chooseLocale(key)
    }

    function addUnitAlias(unit, shorthand) {
        var lowerCase = unit.toLowerCase();
        aliases[lowerCase] = aliases[lowerCase + "s"] = aliases[shorthand] = unit
    }

    function normalizeUnits(units) {
        return "string" == typeof units ? aliases[units] || aliases[units.toLowerCase()] : void 0
    }

    function normalizeObjectUnits(inputObject) {
        var normalizedProp, prop, normalizedInput = {};
        for (prop in inputObject) hasOwnProp(inputObject, prop) && (normalizedProp = normalizeUnits(prop), normalizedProp && (normalizedInput[normalizedProp] = inputObject[prop]));
        return normalizedInput
    }

    function makeGetSet(unit, keepTime) {
        return function(value) {
            return null != value ? (get_set__set(this, unit, value), utils_hooks__hooks.updateOffset(this, keepTime), this) : get_set__get(this, unit)
        }
    }

    function get_set__get(mom, unit) {
        return mom._d["get" + (mom._isUTC ? "UTC" : "") + unit]()
    }

    function get_set__set(mom, unit, value) {
        return mom._d["set" + (mom._isUTC ? "UTC" : "") + unit](value)
    }

    function getSet(units, value) {
        var unit;
        if ("object" == typeof units)
            for (unit in units) this.set(unit, units[unit]);
        else if (units = normalizeUnits(units), "function" == typeof this[units]) return this[units](value);
        return this
    }

    function zeroFill(number, targetLength, forceSign) {
        var absNumber = "" + Math.abs(number),
            zerosToFill = targetLength - absNumber.length,
            sign = number >= 0;
        return (sign ? forceSign ? "+" : "" : "-") + Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber
    }

    function addFormatToken(token, padded, ordinal, callback) {
        var func = callback;
        "string" == typeof callback && (func = function() {
            return this[callback]()
        }), token && (formatTokenFunctions[token] = func), padded && (formatTokenFunctions[padded[0]] = function() {
            return zeroFill(func.apply(this, arguments), padded[1], padded[2])
        }), ordinal && (formatTokenFunctions[ordinal] = function() {
            return this.localeData().ordinal(func.apply(this, arguments), token)
        })
    }

    function removeFormattingTokens(input) {
        return input.match(/\[[\s\S]/) ? input.replace(/^\[|\]$/g, "") : input.replace(/\\/g, "")
    }

    function makeFormatFunction(format) {
        var i, length, array = format.match(formattingTokens);
        for (i = 0, length = array.length; length > i; i++) formatTokenFunctions[array[i]] ? array[i] = formatTokenFunctions[array[i]] : array[i] = removeFormattingTokens(array[i]);
        return function(mom) {
            var output = "";
            for (i = 0; length > i; i++) output += array[i] instanceof Function ? array[i].call(mom, format) : array[i];
            return output
        }
    }

    function formatMoment(m, format) {
        return m.isValid() ? (format = expandFormat(format, m.localeData()), formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format), formatFunctions[format](m)) : m.localeData().invalidDate()
    }

    function expandFormat(format, locale) {
        function replaceLongDateFormatTokens(input) {
            return locale.longDateFormat(input) || input
        }
        var i = 5;
        for (localFormattingTokens.lastIndex = 0; i >= 0 && localFormattingTokens.test(format);) format = format.replace(localFormattingTokens, replaceLongDateFormatTokens), localFormattingTokens.lastIndex = 0, i -= 1;
        return format
    }

    function isFunction(sth) {
        return "function" == typeof sth && "[object Function]" === Object.prototype.toString.call(sth)
    }

    function addRegexToken(token, regex, strictRegex) {
        regexes[token] = isFunction(regex) ? regex : function(isStrict) {
            return isStrict && strictRegex ? strictRegex : regex
        }
    }

    function getParseRegexForToken(token, config) {
        return hasOwnProp(regexes, token) ? regexes[token](config._strict, config._locale) : new RegExp(unescapeFormat(token))
    }

    function unescapeFormat(s) {
        return s.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(matched, p1, p2, p3, p4) {
            return p1 || p2 || p3 || p4
        }).replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&")
    }

    function addParseToken(token, callback) {
        var i, func = callback;
        for ("string" == typeof token && (token = [token]), "number" == typeof callback && (func = function(input, array) {
                array[callback] = toInt(input)
            }), i = 0; i < token.length; i++) tokens[token[i]] = func
    }

    function addWeekParseToken(token, callback) {
        addParseToken(token, function(input, array, config, token) {
            config._w = config._w || {}, callback(input, config._w, config, token)
        })
    }

    function addTimeToArrayFromToken(token, input, config) {
        null != input && hasOwnProp(tokens, token) && tokens[token](input, config._a, config, token)
    }

    function daysInMonth(year, month) {
        return new Date(Date.UTC(year, month + 1, 0)).getUTCDate()
    }

    function localeMonths(m) {
        return this._months[m.month()]
    }

    function localeMonthsShort(m) {
        return this._monthsShort[m.month()]
    }

    function localeMonthsParse(monthName, format, strict) {
        var i, mom, regex;
        for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), i = 0; 12 > i; i++) {
            if (mom = create_utc__createUTC([2e3, i]), strict && !this._longMonthsParse[i] && (this._longMonthsParse[i] = new RegExp("^" + this.months(mom, "").replace(".", "") + "$", "i"), this._shortMonthsParse[i] = new RegExp("^" + this.monthsShort(mom, "").replace(".", "") + "$", "i")), strict || this._monthsParse[i] || (regex = "^" + this.months(mom, "") + "|^" + this.monthsShort(mom, ""), this._monthsParse[i] = new RegExp(regex.replace(".", ""), "i")), strict && "MMMM" === format && this._longMonthsParse[i].test(monthName)) return i;
            if (strict && "MMM" === format && this._shortMonthsParse[i].test(monthName)) return i;
            if (!strict && this._monthsParse[i].test(monthName)) return i
        }
    }

    function setMonth(mom, value) {
        var dayOfMonth;
        return "string" == typeof value && (value = mom.localeData().monthsParse(value), "number" != typeof value) ? mom : (dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value)), mom._d["set" + (mom._isUTC ? "UTC" : "") + "Month"](value, dayOfMonth), mom)
    }

    function getSetMonth(value) {
        return null != value ? (setMonth(this, value), utils_hooks__hooks.updateOffset(this, !0), this) : get_set__get(this, "Month")
    }

    function getDaysInMonth() {
        return daysInMonth(this.year(), this.month())
    }

    function checkOverflow(m) {
        var overflow, a = m._a;
        return a && -2 === getParsingFlags(m).overflow && (overflow = a[MONTH] < 0 || a[MONTH] > 11 ? MONTH : a[DATE] < 1 || a[DATE] > daysInMonth(a[YEAR], a[MONTH]) ? DATE : a[HOUR] < 0 || a[HOUR] > 24 || 24 === a[HOUR] && (0 !== a[MINUTE] || 0 !== a[SECOND] || 0 !== a[MILLISECOND]) ? HOUR : a[MINUTE] < 0 || a[MINUTE] > 59 ? MINUTE : a[SECOND] < 0 || a[SECOND] > 59 ? SECOND : a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND : -1, getParsingFlags(m)._overflowDayOfYear && (YEAR > overflow || overflow > DATE) && (overflow = DATE), getParsingFlags(m).overflow = overflow), m
    }

    function warn(msg) {
        utils_hooks__hooks.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn
    }

    function deprecate(msg, fn) {
        var firstTime = !0;
        return extend(function() {
            return firstTime && (warn(msg + "\n" + (new Error).stack), firstTime = !1), fn.apply(this, arguments)
        }, fn)
    }

    function deprecateSimple(name, msg) {
        deprecations[name] || (warn(msg), deprecations[name] = !0)
    }

    function configFromISO(config) {
        var i, l, string = config._i,
            match = from_string__isoRegex.exec(string);
        if (match) {
            for (getParsingFlags(config).iso = !0, i = 0, l = isoDates.length; l > i; i++)
                if (isoDates[i][1].exec(string)) {
                    config._f = isoDates[i][0];
                    break
                }
            for (i = 0, l = isoTimes.length; l > i; i++)
                if (isoTimes[i][1].exec(string)) {
                    config._f += (match[6] || " ") + isoTimes[i][0];
                    break
                }
            string.match(matchOffset) && (config._f += "Z"), configFromStringAndFormat(config)
        } else config._isValid = !1
    }

    function configFromString(config) {
        var matched = aspNetJsonRegex.exec(config._i);
        return null !== matched ? void(config._d = new Date(+matched[1])) : (configFromISO(config), void(config._isValid === !1 && (delete config._isValid, utils_hooks__hooks.createFromInputFallback(config))))
    }

    function createDate(y, m, d, h, M, s, ms) {
        var date = new Date(y, m, d, h, M, s, ms);
        return 1970 > y && date.setFullYear(y), date
    }

    function createUTCDate(y) {
        var date = new Date(Date.UTC.apply(null, arguments));
        return 1970 > y && date.setUTCFullYear(y), date
    }

    function daysInYear(year) {
        return isLeapYear(year) ? 366 : 365
    }

    function isLeapYear(year) {
        return year % 4 === 0 && year % 100 !== 0 || year % 400 === 0
    }

    function getIsLeapYear() {
        return isLeapYear(this.year())
    }

    function weekOfYear(mom, firstDayOfWeek, firstDayOfWeekOfYear) {
        var adjustedMoment, end = firstDayOfWeekOfYear - firstDayOfWeek,
            daysToDayOfWeek = firstDayOfWeekOfYear - mom.day();
        return daysToDayOfWeek > end && (daysToDayOfWeek -= 7), end - 7 > daysToDayOfWeek && (daysToDayOfWeek += 7), adjustedMoment = local__createLocal(mom).add(daysToDayOfWeek, "d"), {
            week: Math.ceil(adjustedMoment.dayOfYear() / 7),
            year: adjustedMoment.year()
        }
    }

    function localeWeek(mom) {
        return weekOfYear(mom, this._week.dow, this._week.doy).week
    }

    function localeFirstDayOfWeek() {
        return this._week.dow
    }

    function localeFirstDayOfYear() {
        return this._week.doy
    }

    function getSetWeek(input) {
        var week = this.localeData().week(this);
        return null == input ? week : this.add(7 * (input - week), "d")
    }

    function getSetISOWeek(input) {
        var week = weekOfYear(this, 1, 4).week;
        return null == input ? week : this.add(7 * (input - week), "d")
    }

    function dayOfYearFromWeeks(year, week, weekday, firstDayOfWeekOfYear, firstDayOfWeek) {
        var dayOfYear, week1Jan = 6 + firstDayOfWeek - firstDayOfWeekOfYear,
            janX = createUTCDate(year, 0, 1 + week1Jan),
            d = janX.getUTCDay();
        return firstDayOfWeek > d && (d += 7), weekday = null != weekday ? 1 * weekday : firstDayOfWeek, dayOfYear = 1 + week1Jan + 7 * (week - 1) - d + weekday, {
            year: dayOfYear > 0 ? year : year - 1,
            dayOfYear: dayOfYear > 0 ? dayOfYear : daysInYear(year - 1) + dayOfYear
        }
    }

    function getSetDayOfYear(input) {
        var dayOfYear = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1;
        return null == input ? dayOfYear : this.add(input - dayOfYear, "d")
    }

    function defaults(a, b, c) {
        return null != a ? a : null != b ? b : c
    }

    function currentDateArray(config) {
        var now = new Date;
        return config._useUTC ? [now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()] : [now.getFullYear(), now.getMonth(), now.getDate()]
    }

    function configFromArray(config) {
        var i, date, currentDate, yearToUse, input = [];
        if (!config._d) {
            for (currentDate = currentDateArray(config), config._w && null == config._a[DATE] && null == config._a[MONTH] && dayOfYearFromWeekInfo(config), config._dayOfYear && (yearToUse = defaults(config._a[YEAR], currentDate[YEAR]), config._dayOfYear > daysInYear(yearToUse) && (getParsingFlags(config)._overflowDayOfYear = !0), date = createUTCDate(yearToUse, 0, config._dayOfYear), config._a[MONTH] = date.getUTCMonth(), config._a[DATE] = date.getUTCDate()), i = 0; 3 > i && null == config._a[i]; ++i) config._a[i] = input[i] = currentDate[i];
            for (; 7 > i; i++) config._a[i] = input[i] = null == config._a[i] ? 2 === i ? 1 : 0 : config._a[i];
            24 === config._a[HOUR] && 0 === config._a[MINUTE] && 0 === config._a[SECOND] && 0 === config._a[MILLISECOND] && (config._nextDay = !0, config._a[HOUR] = 0), config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input), null != config._tzm && config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm), config._nextDay && (config._a[HOUR] = 24)
        }
    }

    function dayOfYearFromWeekInfo(config) {
        var w, weekYear, week, weekday, dow, doy, temp;
        w = config._w, null != w.GG || null != w.W || null != w.E ? (dow = 1, doy = 4, weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(local__createLocal(), 1, 4).year), week = defaults(w.W, 1), weekday = defaults(w.E, 1)) : (dow = config._locale._week.dow, doy = config._locale._week.doy, weekYear = defaults(w.gg, config._a[YEAR], weekOfYear(local__createLocal(), dow, doy).year), week = defaults(w.w, 1), null != w.d ? (weekday = w.d, dow > weekday && ++week) : weekday = null != w.e ? w.e + dow : dow), temp = dayOfYearFromWeeks(weekYear, week, weekday, doy, dow), config._a[YEAR] = temp.year, config._dayOfYear = temp.dayOfYear
    }

    function configFromStringAndFormat(config) {
        if (config._f === utils_hooks__hooks.ISO_8601) return void configFromISO(config);
        config._a = [], getParsingFlags(config).empty = !0;
        var i, parsedInput, tokens, token, skipped, string = "" + config._i,
            stringLength = string.length,
            totalParsedInputLength = 0;
        for (tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [], i = 0; i < tokens.length; i++) token = tokens[i], parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0], parsedInput && (skipped = string.substr(0, string.indexOf(parsedInput)), skipped.length > 0 && getParsingFlags(config).unusedInput.push(skipped), string = string.slice(string.indexOf(parsedInput) + parsedInput.length), totalParsedInputLength += parsedInput.length), formatTokenFunctions[token] ? (parsedInput ? getParsingFlags(config).empty = !1 : getParsingFlags(config).unusedTokens.push(token), addTimeToArrayFromToken(token, parsedInput, config)) : config._strict && !parsedInput && getParsingFlags(config).unusedTokens.push(token);
        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength, string.length > 0 && getParsingFlags(config).unusedInput.push(string), getParsingFlags(config).bigHour === !0 && config._a[HOUR] <= 12 && config._a[HOUR] > 0 && (getParsingFlags(config).bigHour = void 0), config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem), configFromArray(config), checkOverflow(config)
    }

    function meridiemFixWrap(locale, hour, meridiem) {
        var isPm;
        return null == meridiem ? hour : null != locale.meridiemHour ? locale.meridiemHour(hour, meridiem) : null != locale.isPM ? (isPm = locale.isPM(meridiem), isPm && 12 > hour && (hour += 12), isPm || 12 !== hour || (hour = 0), hour) : hour
    }

    function configFromStringAndArray(config) {
        var tempConfig, bestMoment, scoreToBeat, i, currentScore;
        if (0 === config._f.length) return getParsingFlags(config).invalidFormat = !0, void(config._d = new Date(NaN));
        for (i = 0; i < config._f.length; i++) currentScore = 0, tempConfig = copyConfig({}, config), null != config._useUTC && (tempConfig._useUTC = config._useUTC), tempConfig._f = config._f[i], configFromStringAndFormat(tempConfig), valid__isValid(tempConfig) && (currentScore += getParsingFlags(tempConfig).charsLeftOver, currentScore += 10 * getParsingFlags(tempConfig).unusedTokens.length, getParsingFlags(tempConfig).score = currentScore, (null == scoreToBeat || scoreToBeat > currentScore) && (scoreToBeat = currentScore, bestMoment = tempConfig));
        extend(config, bestMoment || tempConfig)
    }

    function configFromObject(config) {
        if (!config._d) {
            var i = normalizeObjectUnits(config._i);
            config._a = [i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], configFromArray(config)
        }
    }

    function createFromConfig(config) {
        var res = new Moment(checkOverflow(prepareConfig(config)));
        return res._nextDay && (res.add(1, "d"), res._nextDay = void 0), res
    }

    function prepareConfig(config) {
        var input = config._i,
            format = config._f;
        return config._locale = config._locale || locale_locales__getLocale(config._l), null === input || void 0 === format && "" === input ? valid__createInvalid({
            nullInput: !0
        }) : ("string" == typeof input && (config._i = input = config._locale.preparse(input)), isMoment(input) ? new Moment(checkOverflow(input)) : (isArray(format) ? configFromStringAndArray(config) : format ? configFromStringAndFormat(config) : isDate(input) ? config._d = input : configFromInput(config), config))
    }

    function configFromInput(config) {
        var input = config._i;
        void 0 === input ? config._d = new Date : isDate(input) ? config._d = new Date(+input) : "string" == typeof input ? configFromString(config) : isArray(input) ? (config._a = map(input.slice(0), function(obj) {
            return parseInt(obj, 10)
        }), configFromArray(config)) : "object" == typeof input ? configFromObject(config) : "number" == typeof input ? config._d = new Date(input) : utils_hooks__hooks.createFromInputFallback(config)
    }

    function createLocalOrUTC(input, format, locale, strict, isUTC) {
        var c = {};
        return "boolean" == typeof locale && (strict = locale, locale = void 0), c._isAMomentObject = !0, c._useUTC = c._isUTC = isUTC, c._l = locale, c._i = input, c._f = format, c._strict = strict, createFromConfig(c)
    }

    function local__createLocal(input, format, locale, strict) {
        return createLocalOrUTC(input, format, locale, strict, !1)
    }

    function pickBy(fn, moments) {
        var res, i;
        if (1 === moments.length && isArray(moments[0]) && (moments = moments[0]), !moments.length) return local__createLocal();
        for (res = moments[0], i = 1; i < moments.length; ++i) moments[i].isValid() && !moments[i][fn](res) || (res = moments[i]);
        return res
    }

    function min() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isBefore", args)
    }

    function max() {
        var args = [].slice.call(arguments, 0);
        return pickBy("isAfter", args)
    }

    function Duration(duration) {
        var normalizedInput = normalizeObjectUnits(duration),
            years = normalizedInput.year || 0,
            quarters = normalizedInput.quarter || 0,
            months = normalizedInput.month || 0,
            weeks = normalizedInput.week || 0,
            days = normalizedInput.day || 0,
            hours = normalizedInput.hour || 0,
            minutes = normalizedInput.minute || 0,
            seconds = normalizedInput.second || 0,
            milliseconds = normalizedInput.millisecond || 0;
        this._milliseconds = +milliseconds + 1e3 * seconds + 6e4 * minutes + 36e5 * hours, this._days = +days + 7 * weeks, this._months = +months + 3 * quarters + 12 * years, this._data = {}, this._locale = locale_locales__getLocale(), this._bubble()
    }

    function isDuration(obj) {
        return obj instanceof Duration
    }

    function offset(token, separator) {
        addFormatToken(token, 0, 0, function() {
            var offset = this.utcOffset(),
                sign = "+";
            return 0 > offset && (offset = -offset, sign = "-"), sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~offset % 60, 2)
        })
    }

    function offsetFromString(string) {
        var matches = (string || "").match(matchOffset) || [],
            chunk = matches[matches.length - 1] || [],
            parts = (chunk + "").match(chunkOffset) || ["-", 0, 0],
            minutes = +(60 * parts[1]) + toInt(parts[2]);
        return "+" === parts[0] ? minutes : -minutes
    }

    function cloneWithOffset(input, model) {
        var res, diff;
        return model._isUTC ? (res = model.clone(), diff = (isMoment(input) || isDate(input) ? +input : +local__createLocal(input)) - +res, res._d.setTime(+res._d + diff), utils_hooks__hooks.updateOffset(res, !1), res) : local__createLocal(input).local()
    }

    function getDateOffset(m) {
        return 15 * -Math.round(m._d.getTimezoneOffset() / 15)
    }

    function getSetOffset(input, keepLocalTime) {
        var localAdjust, offset = this._offset || 0;
        return null != input ? ("string" == typeof input && (input = offsetFromString(input)), Math.abs(input) < 16 && (input = 60 * input), !this._isUTC && keepLocalTime && (localAdjust = getDateOffset(this)), this._offset = input, this._isUTC = !0, null != localAdjust && this.add(localAdjust, "m"), offset !== input && (!keepLocalTime || this._changeInProgress ? add_subtract__addSubtract(this, create__createDuration(input - offset, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, utils_hooks__hooks.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? offset : getDateOffset(this)
    }

    function getSetZone(input, keepLocalTime) {
        return null != input ? ("string" != typeof input && (input = -input), this.utcOffset(input, keepLocalTime), this) : -this.utcOffset()
    }

    function setOffsetToUTC(keepLocalTime) {
        return this.utcOffset(0, keepLocalTime)
    }

    function setOffsetToLocal(keepLocalTime) {
        return this._isUTC && (this.utcOffset(0, keepLocalTime), this._isUTC = !1, keepLocalTime && this.subtract(getDateOffset(this), "m")), this
    }

    function setOffsetToParsedOffset() {
        return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(offsetFromString(this._i)), this
    }

    function hasAlignedHourOffset(input) {
        return input = input ? local__createLocal(input).utcOffset() : 0, (this.utcOffset() - input) % 60 === 0
    }

    function isDaylightSavingTime() {
        return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset()
    }

    function isDaylightSavingTimeShifted() {
        if ("undefined" != typeof this._isDSTShifted) return this._isDSTShifted;
        var c = {};
        if (copyConfig(c, this), c = prepareConfig(c), c._a) {
            var other = c._isUTC ? create_utc__createUTC(c._a) : local__createLocal(c._a);
            this._isDSTShifted = this.isValid() && compareArrays(c._a, other.toArray()) > 0
        } else this._isDSTShifted = !1;
        return this._isDSTShifted
    }

    function isLocal() {
        return !this._isUTC
    }

    function isUtcOffset() {
        return this._isUTC
    }

    function isUtc() {
        return this._isUTC && 0 === this._offset
    }

    function create__createDuration(input, key) {
        var sign, ret, diffRes, duration = input,
            match = null;
        return isDuration(input) ? duration = {
            ms: input._milliseconds,
            d: input._days,
            M: input._months
        } : "number" == typeof input ? (duration = {}, key ? duration[key] = input : duration.milliseconds = input) : (match = aspNetRegex.exec(input)) ? (sign = "-" === match[1] ? -1 : 1, duration = {
            y: 0,
            d: toInt(match[DATE]) * sign,
            h: toInt(match[HOUR]) * sign,
            m: toInt(match[MINUTE]) * sign,
            s: toInt(match[SECOND]) * sign,
            ms: toInt(match[MILLISECOND]) * sign
        }) : (match = create__isoRegex.exec(input)) ? (sign = "-" === match[1] ? -1 : 1, duration = {
            y: parseIso(match[2], sign),
            M: parseIso(match[3], sign),
            d: parseIso(match[4], sign),
            h: parseIso(match[5], sign),
            m: parseIso(match[6], sign),
            s: parseIso(match[7], sign),
            w: parseIso(match[8], sign)
        }) : null == duration ? duration = {} : "object" == typeof duration && ("from" in duration || "to" in duration) && (diffRes = momentsDifference(local__createLocal(duration.from), local__createLocal(duration.to)), duration = {}, duration.ms = diffRes.milliseconds, duration.M = diffRes.months), ret = new Duration(duration), isDuration(input) && hasOwnProp(input, "_locale") && (ret._locale = input._locale), ret
    }

    function parseIso(inp, sign) {
        var res = inp && parseFloat(inp.replace(",", "."));
        return (isNaN(res) ? 0 : res) * sign
    }

    function positiveMomentsDifference(base, other) {
        var res = {
            milliseconds: 0,
            months: 0
        };
        return res.months = other.month() - base.month() + 12 * (other.year() - base.year()), base.clone().add(res.months, "M").isAfter(other) && --res.months, res.milliseconds = +other - +base.clone().add(res.months, "M"), res
    }

    function momentsDifference(base, other) {
        var res;
        return other = cloneWithOffset(other, base), base.isBefore(other) ? res = positiveMomentsDifference(base, other) : (res = positiveMomentsDifference(other, base), res.milliseconds = -res.milliseconds, res.months = -res.months), res
    }

    function createAdder(direction, name) {
        return function(val, period) {
            var dur, tmp;
            return null === period || isNaN(+period) || (deprecateSimple(name, "moment()." + name + "(period, number) is deprecated. Please use moment()." + name + "(number, period)."), tmp = val, val = period, period = tmp), val = "string" == typeof val ? +val : val, dur = create__createDuration(val, period), add_subtract__addSubtract(this, dur, direction), this
        }
    }

    function add_subtract__addSubtract(mom, duration, isAdding, updateOffset) {
        var milliseconds = duration._milliseconds,
            days = duration._days,
            months = duration._months;
        updateOffset = null == updateOffset ? !0 : updateOffset, milliseconds && mom._d.setTime(+mom._d + milliseconds * isAdding), days && get_set__set(mom, "Date", get_set__get(mom, "Date") + days * isAdding), months && setMonth(mom, get_set__get(mom, "Month") + months * isAdding), updateOffset && utils_hooks__hooks.updateOffset(mom, days || months)
    }

    function moment_calendar__calendar(time, formats) {
        var now = time || local__createLocal(),
            sod = cloneWithOffset(now, this).startOf("day"),
            diff = this.diff(sod, "days", !0),
            format = -6 > diff ? "sameElse" : -1 > diff ? "lastWeek" : 0 > diff ? "lastDay" : 1 > diff ? "sameDay" : 2 > diff ? "nextDay" : 7 > diff ? "nextWeek" : "sameElse";
        return this.format(formats && formats[format] || this.localeData().calendar(format, this, local__createLocal(now)));
    }

    function clone() {
        return new Moment(this)
    }

    function isAfter(input, units) {
        var inputMs;
        return units = normalizeUnits("undefined" != typeof units ? units : "millisecond"), "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input), +this > +input) : (inputMs = isMoment(input) ? +input : +local__createLocal(input), inputMs < +this.clone().startOf(units))
    }

    function isBefore(input, units) {
        var inputMs;
        return units = normalizeUnits("undefined" != typeof units ? units : "millisecond"), "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input), +input > +this) : (inputMs = isMoment(input) ? +input : +local__createLocal(input), +this.clone().endOf(units) < inputMs)
    }

    function isBetween(from, to, units) {
        return this.isAfter(from, units) && this.isBefore(to, units)
    }

    function isSame(input, units) {
        var inputMs;
        return units = normalizeUnits(units || "millisecond"), "millisecond" === units ? (input = isMoment(input) ? input : local__createLocal(input), +this === +input) : (inputMs = +local__createLocal(input), +this.clone().startOf(units) <= inputMs && inputMs <= +this.clone().endOf(units))
    }

    function diff(input, units, asFloat) {
        var delta, output, that = cloneWithOffset(input, this),
            zoneDelta = 6e4 * (that.utcOffset() - this.utcOffset());
        return units = normalizeUnits(units), "year" === units || "month" === units || "quarter" === units ? (output = monthDiff(this, that), "quarter" === units ? output /= 3 : "year" === units && (output /= 12)) : (delta = this - that, output = "second" === units ? delta / 1e3 : "minute" === units ? delta / 6e4 : "hour" === units ? delta / 36e5 : "day" === units ? (delta - zoneDelta) / 864e5 : "week" === units ? (delta - zoneDelta) / 6048e5 : delta), asFloat ? output : absFloor(output)
    }

    function monthDiff(a, b) {
        var anchor2, adjust, wholeMonthDiff = 12 * (b.year() - a.year()) + (b.month() - a.month()),
            anchor = a.clone().add(wholeMonthDiff, "months");
        return 0 > b - anchor ? (anchor2 = a.clone().add(wholeMonthDiff - 1, "months"), adjust = (b - anchor) / (anchor - anchor2)) : (anchor2 = a.clone().add(wholeMonthDiff + 1, "months"), adjust = (b - anchor) / (anchor2 - anchor)), -(wholeMonthDiff + adjust)
    }

    function toString() {
        return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")
    }

    function moment_format__toISOString() {
        var m = this.clone().utc();
        return 0 < m.year() && m.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : formatMoment(m, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : formatMoment(m, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]")
    }

    function format(inputString) {
        var output = formatMoment(this, inputString || utils_hooks__hooks.defaultFormat);
        return this.localeData().postformat(output)
    }

    function from(time, withoutSuffix) {
        return this.isValid() ? create__createDuration({
            to: this,
            from: time
        }).locale(this.locale()).humanize(!withoutSuffix) : this.localeData().invalidDate()
    }

    function fromNow(withoutSuffix) {
        return this.from(local__createLocal(), withoutSuffix)
    }

    function to(time, withoutSuffix) {
        return this.isValid() ? create__createDuration({
            from: this,
            to: time
        }).locale(this.locale()).humanize(!withoutSuffix) : this.localeData().invalidDate()
    }

    function toNow(withoutSuffix) {
        return this.to(local__createLocal(), withoutSuffix)
    }

    function locale(key) {
        var newLocaleData;
        return void 0 === key ? this._locale._abbr : (newLocaleData = locale_locales__getLocale(key), null != newLocaleData && (this._locale = newLocaleData), this)
    }

    function localeData() {
        return this._locale
    }

    function startOf(units) {
        switch (units = normalizeUnits(units)) {
            case "year":
                this.month(0);
            case "quarter":
            case "month":
                this.date(1);
            case "week":
            case "isoWeek":
            case "day":
                this.hours(0);
            case "hour":
                this.minutes(0);
            case "minute":
                this.seconds(0);
            case "second":
                this.milliseconds(0)
        }
        return "week" === units && this.weekday(0), "isoWeek" === units && this.isoWeekday(1), "quarter" === units && this.month(3 * Math.floor(this.month() / 3)), this
    }

    function endOf(units) {
        return units = normalizeUnits(units), void 0 === units || "millisecond" === units ? this : this.startOf(units).add(1, "isoWeek" === units ? "week" : units).subtract(1, "ms")
    }

    function to_type__valueOf() {
        return +this._d - 6e4 * (this._offset || 0)
    }

    function unix() {
        return Math.floor(+this / 1e3)
    }

    function toDate() {
        return this._offset ? new Date(+this) : this._d
    }

    function toArray() {
        var m = this;
        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()]
    }

    function toObject() {
        var m = this;
        return {
            years: m.year(),
            months: m.month(),
            date: m.date(),
            hours: m.hours(),
            minutes: m.minutes(),
            seconds: m.seconds(),
            milliseconds: m.milliseconds()
        }
    }

    function moment_valid__isValid() {
        return valid__isValid(this)
    }

    function parsingFlags() {
        return extend({}, getParsingFlags(this))
    }

    function invalidAt() {
        return getParsingFlags(this).overflow
    }

    function addWeekYearFormatToken(token, getter) {
        addFormatToken(0, [token, token.length], 0, getter)
    }

    function weeksInYear(year, dow, doy) {
        return weekOfYear(local__createLocal([year, 11, 31 + dow - doy]), dow, doy).week
    }

    function getSetWeekYear(input) {
        var year = weekOfYear(this, this.localeData()._week.dow, this.localeData()._week.doy).year;
        return null == input ? year : this.add(input - year, "y")
    }

    function getSetISOWeekYear(input) {
        var year = weekOfYear(this, 1, 4).year;
        return null == input ? year : this.add(input - year, "y")
    }

    function getISOWeeksInYear() {
        return weeksInYear(this.year(), 1, 4)
    }

    function getWeeksInYear() {
        var weekInfo = this.localeData()._week;
        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy)
    }

    function getSetQuarter(input) {
        return null == input ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (input - 1) + this.month() % 3)
    }

    function parseWeekday(input, locale) {
        return "string" != typeof input ? input : isNaN(input) ? (input = locale.weekdaysParse(input), "number" == typeof input ? input : null) : parseInt(input, 10)
    }

    function localeWeekdays(m) {
        return this._weekdays[m.day()]
    }

    function localeWeekdaysShort(m) {
        return this._weekdaysShort[m.day()]
    }

    function localeWeekdaysMin(m) {
        return this._weekdaysMin[m.day()]
    }

    function localeWeekdaysParse(weekdayName) {
        var i, mom, regex;
        for (this._weekdaysParse = this._weekdaysParse || [], i = 0; 7 > i; i++)
            if (this._weekdaysParse[i] || (mom = local__createLocal([2e3, 1]).day(i), regex = "^" + this.weekdays(mom, "") + "|^" + this.weekdaysShort(mom, "") + "|^" + this.weekdaysMin(mom, ""), this._weekdaysParse[i] = new RegExp(regex.replace(".", ""), "i")), this._weekdaysParse[i].test(weekdayName)) return i
    }

    function getSetDayOfWeek(input) {
        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
        return null != input ? (input = parseWeekday(input, this.localeData()), this.add(input - day, "d")) : day
    }

    function getSetLocaleDayOfWeek(input) {
        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
        return null == input ? weekday : this.add(input - weekday, "d")
    }

    function getSetISODayOfWeek(input) {
        return null == input ? this.day() || 7 : this.day(this.day() % 7 ? input : input - 7)
    }

    function meridiem(token, lowercase) {
        addFormatToken(token, 0, 0, function() {
            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase)
        })
    }

    function matchMeridiem(isStrict, locale) {
        return locale._meridiemParse
    }

    function localeIsPM(input) {
        return "p" === (input + "").toLowerCase().charAt(0)
    }

    function localeMeridiem(hours, minutes, isLower) {
        return hours > 11 ? isLower ? "pm" : "PM" : isLower ? "am" : "AM"
    }

    function parseMs(input, array) {
        array[MILLISECOND] = toInt(1e3 * ("0." + input))
    }

    function getZoneAbbr() {
        return this._isUTC ? "UTC" : ""
    }

    function getZoneName() {
        return this._isUTC ? "Coordinated Universal Time" : ""
    }

    function moment__createUnix(input) {
        return local__createLocal(1e3 * input)
    }

    function moment__createInZone() {
        return local__createLocal.apply(null, arguments).parseZone()
    }

    function locale_calendar__calendar(key, mom, now) {
        var output = this._calendar[key];
        return "function" == typeof output ? output.call(mom, now) : output
    }

    function longDateFormat(key) {
        var format = this._longDateFormat[key],
            formatUpper = this._longDateFormat[key.toUpperCase()];
        return format || !formatUpper ? format : (this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function(val) {
            return val.slice(1)
        }), this._longDateFormat[key])
    }

    function invalidDate() {
        return this._invalidDate
    }

    function ordinal(number) {
        return this._ordinal.replace("%d", number)
    }

    function preParsePostFormat(string) {
        return string
    }

    function relative__relativeTime(number, withoutSuffix, string, isFuture) {
        var output = this._relativeTime[string];
        return "function" == typeof output ? output(number, withoutSuffix, string, isFuture) : output.replace(/%d/i, number)
    }

    function pastFuture(diff, output) {
        var format = this._relativeTime[diff > 0 ? "future" : "past"];
        return "function" == typeof format ? format(output) : format.replace(/%s/i, output)
    }

    function locale_set__set(config) {
        var prop, i;
        for (i in config) prop = config[i], "function" == typeof prop ? this[i] = prop : this["_" + i] = prop;
        this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source)
    }

    function lists__get(format, index, field, setter) {
        var locale = locale_locales__getLocale(),
            utc = create_utc__createUTC().set(setter, index);
        return locale[field](utc, format)
    }

    function list(format, index, field, count, setter) {
        if ("number" == typeof format && (index = format, format = void 0), format = format || "", null != index) return lists__get(format, index, field, setter);
        var i, out = [];
        for (i = 0; count > i; i++) out[i] = lists__get(format, i, field, setter);
        return out
    }

    function lists__listMonths(format, index) {
        return list(format, index, "months", 12, "month")
    }

    function lists__listMonthsShort(format, index) {
        return list(format, index, "monthsShort", 12, "month")
    }

    function lists__listWeekdays(format, index) {
        return list(format, index, "weekdays", 7, "day")
    }

    function lists__listWeekdaysShort(format, index) {
        return list(format, index, "weekdaysShort", 7, "day")
    }

    function lists__listWeekdaysMin(format, index) {
        return list(format, index, "weekdaysMin", 7, "day")
    }

    function duration_abs__abs() {
        var data = this._data;
        return this._milliseconds = mathAbs(this._milliseconds), this._days = mathAbs(this._days), this._months = mathAbs(this._months), data.milliseconds = mathAbs(data.milliseconds), data.seconds = mathAbs(data.seconds), data.minutes = mathAbs(data.minutes), data.hours = mathAbs(data.hours), data.months = mathAbs(data.months), data.years = mathAbs(data.years), this
    }

    function duration_add_subtract__addSubtract(duration, input, value, direction) {
        var other = create__createDuration(input, value);
        return duration._milliseconds += direction * other._milliseconds, duration._days += direction * other._days, duration._months += direction * other._months, duration._bubble()
    }

    function duration_add_subtract__add(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, 1)
    }

    function duration_add_subtract__subtract(input, value) {
        return duration_add_subtract__addSubtract(this, input, value, -1)
    }

    function absCeil(number) {
        return 0 > number ? Math.floor(number) : Math.ceil(number)
    }

    function bubble() {
        var seconds, minutes, hours, years, monthsFromDays, milliseconds = this._milliseconds,
            days = this._days,
            months = this._months,
            data = this._data;
        return milliseconds >= 0 && days >= 0 && months >= 0 || 0 >= milliseconds && 0 >= days && 0 >= months || (milliseconds += 864e5 * absCeil(monthsToDays(months) + days), days = 0, months = 0), data.milliseconds = milliseconds % 1e3, seconds = absFloor(milliseconds / 1e3), data.seconds = seconds % 60, minutes = absFloor(seconds / 60), data.minutes = minutes % 60, hours = absFloor(minutes / 60), data.hours = hours % 24, days += absFloor(hours / 24), monthsFromDays = absFloor(daysToMonths(days)), months += monthsFromDays, days -= absCeil(monthsToDays(monthsFromDays)), years = absFloor(months / 12), months %= 12, data.days = days, data.months = months, data.years = years, this
    }

    function daysToMonths(days) {
        return 4800 * days / 146097
    }

    function monthsToDays(months) {
        return 146097 * months / 4800
    }

    function as(units) {
        var days, months, milliseconds = this._milliseconds;
        if (units = normalizeUnits(units), "month" === units || "year" === units) return days = this._days + milliseconds / 864e5, months = this._months + daysToMonths(days), "month" === units ? months : months / 12;
        switch (days = this._days + Math.round(monthsToDays(this._months)), units) {
            case "week":
                return days / 7 + milliseconds / 6048e5;
            case "day":
                return days + milliseconds / 864e5;
            case "hour":
                return 24 * days + milliseconds / 36e5;
            case "minute":
                return 1440 * days + milliseconds / 6e4;
            case "second":
                return 86400 * days + milliseconds / 1e3;
            case "millisecond":
                return Math.floor(864e5 * days) + milliseconds;
            default:
                throw new Error("Unknown unit " + units)
        }
    }

    function duration_as__valueOf() {
        return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * toInt(this._months / 12)
    }

    function makeAs(alias) {
        return function() {
            return this.as(alias)
        }
    }

    function duration_get__get(units) {
        return units = normalizeUnits(units), this[units + "s"]()
    }

    function makeGetter(name) {
        return function() {
            return this._data[name]
        }
    }

    function weeks() {
        return absFloor(this.days() / 7)
    }

    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture)
    }

    function duration_humanize__relativeTime(posNegDuration, withoutSuffix, locale) {
        var duration = create__createDuration(posNegDuration).abs(),
            seconds = round(duration.as("s")),
            minutes = round(duration.as("m")),
            hours = round(duration.as("h")),
            days = round(duration.as("d")),
            months = round(duration.as("M")),
            years = round(duration.as("y")),
            a = seconds < thresholds.s && ["s", seconds] || 1 === minutes && ["m"] || minutes < thresholds.m && ["mm", minutes] || 1 === hours && ["h"] || hours < thresholds.h && ["hh", hours] || 1 === days && ["d"] || days < thresholds.d && ["dd", days] || 1 === months && ["M"] || months < thresholds.M && ["MM", months] || 1 === years && ["y"] || ["yy", years];
        return a[2] = withoutSuffix, a[3] = +posNegDuration > 0, a[4] = locale, substituteTimeAgo.apply(null, a)
    }

    function duration_humanize__getSetRelativeTimeThreshold(threshold, limit) {
        return void 0 === thresholds[threshold] ? !1 : void 0 === limit ? thresholds[threshold] : (thresholds[threshold] = limit, !0)
    }

    function humanize(withSuffix) {
        var locale = this.localeData(),
            output = duration_humanize__relativeTime(this, !withSuffix, locale);
        return withSuffix && (output = locale.pastFuture(+this, output)), locale.postformat(output)
    }

    function iso_string__toISOString() {
        var minutes, hours, years, seconds = iso_string__abs(this._milliseconds) / 1e3,
            days = iso_string__abs(this._days),
            months = iso_string__abs(this._months);
        minutes = absFloor(seconds / 60), hours = absFloor(minutes / 60), seconds %= 60, minutes %= 60, years = absFloor(months / 12), months %= 12;
        var Y = years,
            M = months,
            D = days,
            h = hours,
            m = minutes,
            s = seconds,
            total = this.asSeconds();
        return total ? (0 > total ? "-" : "") + "P" + (Y ? Y + "Y" : "") + (M ? M + "M" : "") + (D ? D + "D" : "") + (h || m || s ? "T" : "") + (h ? h + "H" : "") + (m ? m + "M" : "") + (s ? s + "S" : "") : "P0D"
    }
    var hookCallback, globalLocale, momentProperties = utils_hooks__hooks.momentProperties = [],
        updateInProgress = !1,
        locales = {},
        aliases = {},
        formattingTokens = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
        localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
        formatFunctions = {},
        formatTokenFunctions = {},
        match1 = /\d/,
        match2 = /\d\d/,
        match3 = /\d{3}/,
        match4 = /\d{4}/,
        match6 = /[+-]?\d{6}/,
        match1to2 = /\d\d?/,
        match1to3 = /\d{1,3}/,
        match1to4 = /\d{1,4}/,
        match1to6 = /[+-]?\d{1,6}/,
        matchUnsigned = /\d+/,
        matchSigned = /[+-]?\d+/,
        matchOffset = /Z|[+-]\d\d:?\d\d/gi,
        matchTimestamp = /[+-]?\d+(\.\d{1,3})?/,
        matchWord = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i,
        regexes = {},
        tokens = {},
        YEAR = 0,
        MONTH = 1,
        DATE = 2,
        HOUR = 3,
        MINUTE = 4,
        SECOND = 5,
        MILLISECOND = 6;
    addFormatToken("M", ["MM", 2], "Mo", function() {
        return this.month() + 1
    }), addFormatToken("MMM", 0, 0, function(format) {
        return this.localeData().monthsShort(this, format)
    }), addFormatToken("MMMM", 0, 0, function(format) {
        return this.localeData().months(this, format)
    }), addUnitAlias("month", "M"), addRegexToken("M", match1to2), addRegexToken("MM", match1to2, match2), addRegexToken("MMM", matchWord), addRegexToken("MMMM", matchWord), addParseToken(["M", "MM"], function(input, array) {
        array[MONTH] = toInt(input) - 1
    }), addParseToken(["MMM", "MMMM"], function(input, array, config, token) {
        var month = config._locale.monthsParse(input, token, config._strict);
        null != month ? array[MONTH] = month : getParsingFlags(config).invalidMonth = input
    });
    var defaultLocaleMonths = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        defaultLocaleMonthsShort = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),
        deprecations = {};
    utils_hooks__hooks.suppressDeprecationWarnings = !1;
    var from_string__isoRegex = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
        isoDates = [
            ["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/],
            ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/],
            ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/],
            ["GGGG-[W]WW", /\d{4}-W\d{2}/],
            ["YYYY-DDD", /\d{4}-\d{3}/]
        ],
        isoTimes = [
            ["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/],
            ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/],
            ["HH:mm", /(T| )\d\d:\d\d/],
            ["HH", /(T| )\d\d/]
        ],
        aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
    utils_hooks__hooks.createFromInputFallback = deprecate("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function(config) {
        config._d = new Date(config._i + (config._useUTC ? " UTC" : ""))
    }), addFormatToken(0, ["YY", 2], 0, function() {
        return this.year() % 100
    }), addFormatToken(0, ["YYYY", 4], 0, "year"), addFormatToken(0, ["YYYYY", 5], 0, "year"), addFormatToken(0, ["YYYYYY", 6, !0], 0, "year"), addUnitAlias("year", "y"), addRegexToken("Y", matchSigned), addRegexToken("YY", match1to2, match2), addRegexToken("YYYY", match1to4, match4), addRegexToken("YYYYY", match1to6, match6), addRegexToken("YYYYYY", match1to6, match6), addParseToken(["YYYYY", "YYYYYY"], YEAR), addParseToken("YYYY", function(input, array) {
        array[YEAR] = 2 === input.length ? utils_hooks__hooks.parseTwoDigitYear(input) : toInt(input)
    }), addParseToken("YY", function(input, array) {
        array[YEAR] = utils_hooks__hooks.parseTwoDigitYear(input)
    }), utils_hooks__hooks.parseTwoDigitYear = function(input) {
        return toInt(input) + (toInt(input) > 68 ? 1900 : 2e3)
    };
    var getSetYear = makeGetSet("FullYear", !1);
    addFormatToken("w", ["ww", 2], "wo", "week"), addFormatToken("W", ["WW", 2], "Wo", "isoWeek"), addUnitAlias("week", "w"), addUnitAlias("isoWeek", "W"), addRegexToken("w", match1to2), addRegexToken("ww", match1to2, match2), addRegexToken("W", match1to2), addRegexToken("WW", match1to2, match2), addWeekParseToken(["w", "ww", "W", "WW"], function(input, week, config, token) {
        week[token.substr(0, 1)] = toInt(input)
    });
    var defaultLocaleWeek = {
        dow: 0,
        doy: 6
    };
    addFormatToken("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), addUnitAlias("dayOfYear", "DDD"), addRegexToken("DDD", match1to3), addRegexToken("DDDD", match3), addParseToken(["DDD", "DDDD"], function(input, array, config) {
        config._dayOfYear = toInt(input)
    }), utils_hooks__hooks.ISO_8601 = function() {};
    var prototypeMin = deprecate("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function() {
            var other = local__createLocal.apply(null, arguments);
            return this > other ? this : other
        }),
        prototypeMax = deprecate("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function() {
            var other = local__createLocal.apply(null, arguments);
            return other > this ? this : other
        });
    offset("Z", ":"), offset("ZZ", ""), addRegexToken("Z", matchOffset), addRegexToken("ZZ", matchOffset), addParseToken(["Z", "ZZ"], function(input, array, config) {
        config._useUTC = !0, config._tzm = offsetFromString(input)
    });
    var chunkOffset = /([\+\-]|\d\d)/gi;
    utils_hooks__hooks.updateOffset = function() {};
    var aspNetRegex = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/,
        create__isoRegex = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/;
    create__createDuration.fn = Duration.prototype;
    var add_subtract__add = createAdder(1, "add"),
        add_subtract__subtract = createAdder(-1, "subtract");
    utils_hooks__hooks.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ";
    var lang = deprecate("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(key) {
        return void 0 === key ? this.localeData() : this.locale(key)
    });
    addFormatToken(0, ["gg", 2], 0, function() {
        return this.weekYear() % 100
    }), addFormatToken(0, ["GG", 2], 0, function() {
        return this.isoWeekYear() % 100
    }), addWeekYearFormatToken("gggg", "weekYear"), addWeekYearFormatToken("ggggg", "weekYear"), addWeekYearFormatToken("GGGG", "isoWeekYear"), addWeekYearFormatToken("GGGGG", "isoWeekYear"), addUnitAlias("weekYear", "gg"), addUnitAlias("isoWeekYear", "GG"), addRegexToken("G", matchSigned), addRegexToken("g", matchSigned), addRegexToken("GG", match1to2, match2), addRegexToken("gg", match1to2, match2), addRegexToken("GGGG", match1to4, match4), addRegexToken("gggg", match1to4, match4), addRegexToken("GGGGG", match1to6, match6), addRegexToken("ggggg", match1to6, match6), addWeekParseToken(["gggg", "ggggg", "GGGG", "GGGGG"], function(input, week, config, token) {
        week[token.substr(0, 2)] = toInt(input)
    }), addWeekParseToken(["gg", "GG"], function(input, week, config, token) {
        week[token] = utils_hooks__hooks.parseTwoDigitYear(input)
    }), addFormatToken("Q", 0, 0, "quarter"), addUnitAlias("quarter", "Q"), addRegexToken("Q", match1), addParseToken("Q", function(input, array) {
        array[MONTH] = 3 * (toInt(input) - 1)
    }), addFormatToken("D", ["DD", 2], "Do", "date"), addUnitAlias("date", "D"), addRegexToken("D", match1to2), addRegexToken("DD", match1to2, match2), addRegexToken("Do", function(isStrict, locale) {
        return isStrict ? locale._ordinalParse : locale._ordinalParseLenient
    }), addParseToken(["D", "DD"], DATE), addParseToken("Do", function(input, array) {
        array[DATE] = toInt(input.match(match1to2)[0], 10)
    });
    var getSetDayOfMonth = makeGetSet("Date", !0);
    addFormatToken("d", 0, "do", "day"), addFormatToken("dd", 0, 0, function(format) {
        return this.localeData().weekdaysMin(this, format)
    }), addFormatToken("ddd", 0, 0, function(format) {
        return this.localeData().weekdaysShort(this, format)
    }), addFormatToken("dddd", 0, 0, function(format) {
        return this.localeData().weekdays(this, format)
    }), addFormatToken("e", 0, 0, "weekday"), addFormatToken("E", 0, 0, "isoWeekday"), addUnitAlias("day", "d"), addUnitAlias("weekday", "e"), addUnitAlias("isoWeekday", "E"), addRegexToken("d", match1to2), addRegexToken("e", match1to2), addRegexToken("E", match1to2), addRegexToken("dd", matchWord), addRegexToken("ddd", matchWord), addRegexToken("dddd", matchWord), addWeekParseToken(["dd", "ddd", "dddd"], function(input, week, config) {
        var weekday = config._locale.weekdaysParse(input);
        null != weekday ? week.d = weekday : getParsingFlags(config).invalidWeekday = input
    }), addWeekParseToken(["d", "e", "E"], function(input, week, config, token) {
        week[token] = toInt(input)
    });
    var defaultLocaleWeekdays = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        defaultLocaleWeekdaysShort = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
        defaultLocaleWeekdaysMin = "Su_Mo_Tu_We_Th_Fr_Sa".split("_");
    addFormatToken("H", ["HH", 2], 0, "hour"), addFormatToken("h", ["hh", 2], 0, function() {
        return this.hours() % 12 || 12
    }), meridiem("a", !0), meridiem("A", !1), addUnitAlias("hour", "h"), addRegexToken("a", matchMeridiem), addRegexToken("A", matchMeridiem), addRegexToken("H", match1to2), addRegexToken("h", match1to2), addRegexToken("HH", match1to2, match2), addRegexToken("hh", match1to2, match2), addParseToken(["H", "HH"], HOUR), addParseToken(["a", "A"], function(input, array, config) {
        config._isPm = config._locale.isPM(input), config._meridiem = input
    }), addParseToken(["h", "hh"], function(input, array, config) {
        array[HOUR] = toInt(input), getParsingFlags(config).bigHour = !0
    });
    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i,
        getSetHour = makeGetSet("Hours", !0);
    addFormatToken("m", ["mm", 2], 0, "minute"), addUnitAlias("minute", "m"), addRegexToken("m", match1to2), addRegexToken("mm", match1to2, match2), addParseToken(["m", "mm"], MINUTE);
    var getSetMinute = makeGetSet("Minutes", !1);
    addFormatToken("s", ["ss", 2], 0, "second"), addUnitAlias("second", "s"), addRegexToken("s", match1to2), addRegexToken("ss", match1to2, match2), addParseToken(["s", "ss"], SECOND);
    var getSetSecond = makeGetSet("Seconds", !1);
    addFormatToken("S", 0, 0, function() {
        return ~~(this.millisecond() / 100)
    }), addFormatToken(0, ["SS", 2], 0, function() {
        return ~~(this.millisecond() / 10)
    }), addFormatToken(0, ["SSS", 3], 0, "millisecond"), addFormatToken(0, ["SSSS", 4], 0, function() {
        return 10 * this.millisecond()
    }), addFormatToken(0, ["SSSSS", 5], 0, function() {
        return 100 * this.millisecond()
    }), addFormatToken(0, ["SSSSSS", 6], 0, function() {
        return 1e3 * this.millisecond()
    }), addFormatToken(0, ["SSSSSSS", 7], 0, function() {
        return 1e4 * this.millisecond()
    }), addFormatToken(0, ["SSSSSSSS", 8], 0, function() {
        return 1e5 * this.millisecond()
    }), addFormatToken(0, ["SSSSSSSSS", 9], 0, function() {
        return 1e6 * this.millisecond()
    }), addUnitAlias("millisecond", "ms"), addRegexToken("S", match1to3, match1), addRegexToken("SS", match1to3, match2), addRegexToken("SSS", match1to3, match3);
    var token;
    for (token = "SSSS"; token.length <= 9; token += "S") addRegexToken(token, matchUnsigned);
    for (token = "S"; token.length <= 9; token += "S") addParseToken(token, parseMs);
    var getSetMillisecond = makeGetSet("Milliseconds", !1);
    addFormatToken("z", 0, 0, "zoneAbbr"), addFormatToken("zz", 0, 0, "zoneName");
    var momentPrototype__proto = Moment.prototype;
    momentPrototype__proto.add = add_subtract__add, momentPrototype__proto.calendar = moment_calendar__calendar, momentPrototype__proto.clone = clone, momentPrototype__proto.diff = diff, momentPrototype__proto.endOf = endOf, momentPrototype__proto.format = format, momentPrototype__proto.from = from, momentPrototype__proto.fromNow = fromNow, momentPrototype__proto.to = to, momentPrototype__proto.toNow = toNow, momentPrototype__proto.get = getSet, momentPrototype__proto.invalidAt = invalidAt, momentPrototype__proto.isAfter = isAfter, momentPrototype__proto.isBefore = isBefore, momentPrototype__proto.isBetween = isBetween, momentPrototype__proto.isSame = isSame, momentPrototype__proto.isValid = moment_valid__isValid, momentPrototype__proto.lang = lang, momentPrototype__proto.locale = locale, momentPrototype__proto.localeData = localeData, momentPrototype__proto.max = prototypeMax, momentPrototype__proto.min = prototypeMin, momentPrototype__proto.parsingFlags = parsingFlags, momentPrototype__proto.set = getSet, momentPrototype__proto.startOf = startOf, momentPrototype__proto.subtract = add_subtract__subtract, momentPrototype__proto.toArray = toArray, momentPrototype__proto.toObject = toObject, momentPrototype__proto.toDate = toDate, momentPrototype__proto.toISOString = moment_format__toISOString, momentPrototype__proto.toJSON = moment_format__toISOString, momentPrototype__proto.toString = toString, momentPrototype__proto.unix = unix, momentPrototype__proto.valueOf = to_type__valueOf, momentPrototype__proto.year = getSetYear, momentPrototype__proto.isLeapYear = getIsLeapYear, momentPrototype__proto.weekYear = getSetWeekYear, momentPrototype__proto.isoWeekYear = getSetISOWeekYear, momentPrototype__proto.quarter = momentPrototype__proto.quarters = getSetQuarter, momentPrototype__proto.month = getSetMonth, momentPrototype__proto.daysInMonth = getDaysInMonth, momentPrototype__proto.week = momentPrototype__proto.weeks = getSetWeek, momentPrototype__proto.isoWeek = momentPrototype__proto.isoWeeks = getSetISOWeek, momentPrototype__proto.weeksInYear = getWeeksInYear, momentPrototype__proto.isoWeeksInYear = getISOWeeksInYear, momentPrototype__proto.date = getSetDayOfMonth, momentPrototype__proto.day = momentPrototype__proto.days = getSetDayOfWeek, momentPrototype__proto.weekday = getSetLocaleDayOfWeek, momentPrototype__proto.isoWeekday = getSetISODayOfWeek, momentPrototype__proto.dayOfYear = getSetDayOfYear, momentPrototype__proto.hour = momentPrototype__proto.hours = getSetHour, momentPrototype__proto.minute = momentPrototype__proto.minutes = getSetMinute, momentPrototype__proto.second = momentPrototype__proto.seconds = getSetSecond, momentPrototype__proto.millisecond = momentPrototype__proto.milliseconds = getSetMillisecond, momentPrototype__proto.utcOffset = getSetOffset, momentPrototype__proto.utc = setOffsetToUTC, momentPrototype__proto.local = setOffsetToLocal, momentPrototype__proto.parseZone = setOffsetToParsedOffset, momentPrototype__proto.hasAlignedHourOffset = hasAlignedHourOffset, momentPrototype__proto.isDST = isDaylightSavingTime, momentPrototype__proto.isDSTShifted = isDaylightSavingTimeShifted, momentPrototype__proto.isLocal = isLocal, momentPrototype__proto.isUtcOffset = isUtcOffset, momentPrototype__proto.isUtc = isUtc, momentPrototype__proto.isUTC = isUtc, momentPrototype__proto.zoneAbbr = getZoneAbbr, momentPrototype__proto.zoneName = getZoneName, momentPrototype__proto.dates = deprecate("dates accessor is deprecated. Use date instead.", getSetDayOfMonth), momentPrototype__proto.months = deprecate("months accessor is deprecated. Use month instead", getSetMonth), momentPrototype__proto.years = deprecate("years accessor is deprecated. Use year instead", getSetYear), momentPrototype__proto.zone = deprecate("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", getSetZone);
    var momentPrototype = momentPrototype__proto,
        defaultCalendar = {
            sameDay: "[Today at] LT",
            nextDay: "[Tomorrow at] LT",
            nextWeek: "dddd [at] LT",
            lastDay: "[Yesterday at] LT",
            lastWeek: "[Last] dddd [at] LT",
            sameElse: "L"
        },
        defaultLongDateFormat = {
            LTS: "h:mm:ss A",
            LT: "h:mm A",
            L: "MM/DD/YYYY",
            LL: "MMMM D, YYYY",
            LLL: "MMMM D, YYYY h:mm A",
            LLLL: "dddd, MMMM D, YYYY h:mm A"
        },
        defaultInvalidDate = "Invalid date",
        defaultOrdinal = "%d",
        defaultOrdinalParse = /\d{1,2}/,
        defaultRelativeTime = {
            future: "in %s",
            past: "%s ago",
            s: "a few seconds",
            m: "a minute",
            mm: "%d minutes",
            h: "an hour",
            hh: "%d hours",
            d: "a day",
            dd: "%d days",
            M: "a month",
            MM: "%d months",
            y: "a year",
            yy: "%d years"
        },
        prototype__proto = Locale.prototype;
    prototype__proto._calendar = defaultCalendar, prototype__proto.calendar = locale_calendar__calendar, prototype__proto._longDateFormat = defaultLongDateFormat, prototype__proto.longDateFormat = longDateFormat, prototype__proto._invalidDate = defaultInvalidDate, prototype__proto.invalidDate = invalidDate, prototype__proto._ordinal = defaultOrdinal, prototype__proto.ordinal = ordinal, prototype__proto._ordinalParse = defaultOrdinalParse, prototype__proto.preparse = preParsePostFormat, prototype__proto.postformat = preParsePostFormat, prototype__proto._relativeTime = defaultRelativeTime, prototype__proto.relativeTime = relative__relativeTime, prototype__proto.pastFuture = pastFuture, prototype__proto.set = locale_set__set, prototype__proto.months = localeMonths, prototype__proto._months = defaultLocaleMonths, prototype__proto.monthsShort = localeMonthsShort, prototype__proto._monthsShort = defaultLocaleMonthsShort, prototype__proto.monthsParse = localeMonthsParse, prototype__proto.week = localeWeek, prototype__proto._week = defaultLocaleWeek, prototype__proto.firstDayOfYear = localeFirstDayOfYear, prototype__proto.firstDayOfWeek = localeFirstDayOfWeek, prototype__proto.weekdays = localeWeekdays, prototype__proto._weekdays = defaultLocaleWeekdays, prototype__proto.weekdaysMin = localeWeekdaysMin, prototype__proto._weekdaysMin = defaultLocaleWeekdaysMin, prototype__proto.weekdaysShort = localeWeekdaysShort, prototype__proto._weekdaysShort = defaultLocaleWeekdaysShort, prototype__proto.weekdaysParse = localeWeekdaysParse, prototype__proto.isPM = localeIsPM, prototype__proto._meridiemParse = defaultLocaleMeridiemParse, prototype__proto.meridiem = localeMeridiem, locale_locales__getSetGlobalLocale("en", {
        ordinalParse: /\d{1,2}(th|st|nd|rd)/,
        ordinal: function(number) {
            var b = number % 10,
                output = 1 === toInt(number % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
            return number + output
        }
    }), utils_hooks__hooks.lang = deprecate("moment.lang is deprecated. Use moment.locale instead.", locale_locales__getSetGlobalLocale), utils_hooks__hooks.langData = deprecate("moment.langData is deprecated. Use moment.localeData instead.", locale_locales__getLocale);
    var mathAbs = Math.abs,
        asMilliseconds = makeAs("ms"),
        asSeconds = makeAs("s"),
        asMinutes = makeAs("m"),
        asHours = makeAs("h"),
        asDays = makeAs("d"),
        asWeeks = makeAs("w"),
        asMonths = makeAs("M"),
        asYears = makeAs("y"),
        milliseconds = makeGetter("milliseconds"),
        seconds = makeGetter("seconds"),
        minutes = makeGetter("minutes"),
        hours = makeGetter("hours"),
        days = makeGetter("days"),
        months = makeGetter("months"),
        years = makeGetter("years"),
        round = Math.round,
        thresholds = {
            s: 45,
            m: 45,
            h: 22,
            d: 26,
            M: 11
        },
        iso_string__abs = Math.abs,
        duration_prototype__proto = Duration.prototype;
    duration_prototype__proto.abs = duration_abs__abs, duration_prototype__proto.add = duration_add_subtract__add, duration_prototype__proto.subtract = duration_add_subtract__subtract, duration_prototype__proto.as = as, duration_prototype__proto.asMilliseconds = asMilliseconds, duration_prototype__proto.asSeconds = asSeconds, duration_prototype__proto.asMinutes = asMinutes, duration_prototype__proto.asHours = asHours, duration_prototype__proto.asDays = asDays, duration_prototype__proto.asWeeks = asWeeks, duration_prototype__proto.asMonths = asMonths, duration_prototype__proto.asYears = asYears, duration_prototype__proto.valueOf = duration_as__valueOf, duration_prototype__proto._bubble = bubble, duration_prototype__proto.get = duration_get__get, duration_prototype__proto.milliseconds = milliseconds, duration_prototype__proto.seconds = seconds, duration_prototype__proto.minutes = minutes, duration_prototype__proto.hours = hours,
        duration_prototype__proto.days = days, duration_prototype__proto.weeks = weeks, duration_prototype__proto.months = months, duration_prototype__proto.years = years, duration_prototype__proto.humanize = humanize, duration_prototype__proto.toISOString = iso_string__toISOString, duration_prototype__proto.toString = iso_string__toISOString, duration_prototype__proto.toJSON = iso_string__toISOString, duration_prototype__proto.locale = locale, duration_prototype__proto.localeData = localeData, duration_prototype__proto.toIsoString = deprecate("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", iso_string__toISOString), duration_prototype__proto.lang = lang, addFormatToken("X", 0, 0, "unix"), addFormatToken("x", 0, 0, "valueOf"), addRegexToken("x", matchSigned), addRegexToken("X", matchTimestamp), addParseToken("X", function(input, array, config) {
            config._d = new Date(1e3 * parseFloat(input, 10))
        }), addParseToken("x", function(input, array, config) {
            config._d = new Date(toInt(input))
        }), utils_hooks__hooks.version = "2.10.6", setHookCallback(local__createLocal), utils_hooks__hooks.fn = momentPrototype, utils_hooks__hooks.min = min, utils_hooks__hooks.max = max, utils_hooks__hooks.utc = create_utc__createUTC, utils_hooks__hooks.unix = moment__createUnix, utils_hooks__hooks.months = lists__listMonths, utils_hooks__hooks.isDate = isDate, utils_hooks__hooks.locale = locale_locales__getSetGlobalLocale, utils_hooks__hooks.invalid = valid__createInvalid, utils_hooks__hooks.duration = create__createDuration, utils_hooks__hooks.isMoment = isMoment, utils_hooks__hooks.weekdays = lists__listWeekdays, utils_hooks__hooks.parseZone = moment__createInZone, utils_hooks__hooks.localeData = locale_locales__getLocale, utils_hooks__hooks.isDuration = isDuration, utils_hooks__hooks.monthsShort = lists__listMonthsShort, utils_hooks__hooks.weekdaysMin = lists__listWeekdaysMin, utils_hooks__hooks.defineLocale = defineLocale, utils_hooks__hooks.weekdaysShort = lists__listWeekdaysShort, utils_hooks__hooks.normalizeUnits = normalizeUnits, utils_hooks__hooks.relativeTimeThreshold = duration_humanize__getSetRelativeTimeThreshold;
    var _moment = utils_hooks__hooks;
    return _moment
}), ! function(a, b) {
    "function" == typeof define && define.amd ? define(["jquery"], function(c) {
        return b(a, c)
    }) : "object" == typeof exports ? b(a, require("jquery")) : b(a, a.jQuery || a.Zepto)
}(this, function(a, b) {
    "use strict";

    function c(a) {
        if (w && "none" === a.css("animation-name") && "none" === a.css("-webkit-animation-name") && "none" === a.css("-moz-animation-name") && "none" === a.css("-o-animation-name") && "none" === a.css("-ms-animation-name")) return 0;
        var b, c, d, e, f = a.css("animation-duration") || a.css("-webkit-animation-duration") || a.css("-moz-animation-duration") || a.css("-o-animation-duration") || a.css("-ms-animation-duration") || "0s",
            g = a.css("animation-delay") || a.css("-webkit-animation-delay") || a.css("-moz-animation-delay") || a.css("-o-animation-delay") || a.css("-ms-animation-delay") || "0s",
            h = a.css("animation-iteration-count") || a.css("-webkit-animation-iteration-count") || a.css("-moz-animation-iteration-count") || a.css("-o-animation-iteration-count") || a.css("-ms-animation-iteration-count") || "1";
        for (f = f.split(", "), g = g.split(", "), h = h.split(", "), e = 0, c = f.length, b = Number.NEGATIVE_INFINITY; c > e; e++) d = parseFloat(f[e]) * parseInt(h[e], 10) + parseFloat(g[e]), d > b && (b = d);
        return d
    }

    function d() {
        if (b(document.body).height() <= b(window).height()) return 0;
        var a, c, d = document.createElement("div"),
            e = document.createElement("div");
        return d.style.visibility = "hidden", d.style.width = "100px", document.body.appendChild(d), a = d.offsetWidth, d.style.overflow = "scroll", e.style.width = "100%", d.appendChild(e), c = e.offsetWidth, d.parentNode.removeChild(d), a - c
    }

    function e() {
        if (!x) {
            var a, c, e = b("html"),
                f = k("is-locked");
            e.hasClass(f) || (c = b(document.body), a = parseInt(c.css("padding-right"), 10) + d(), c.css("padding-right", a + "px"), e.addClass(f))
        }
    }

    function f() {
        if (!x) {
            var a, c, e = b("html"),
                f = k("is-locked");
            e.hasClass(f) && (c = b(document.body), a = parseInt(c.css("padding-right"), 10) - d(), c.css("padding-right", a + "px"), e.removeClass(f))
        }
    }

    function g(a, b, c, d) {
        var e = k("is", b),
            f = [k("is", u.CLOSING), k("is", u.OPENING), k("is", u.CLOSED), k("is", u.OPENED)].join(" ");
        a.$bg.removeClass(f).addClass(e), a.$overlay.removeClass(f).addClass(e), a.$wrapper.removeClass(f).addClass(e), a.$modal.removeClass(f).addClass(e), a.state = b, !c && a.$modal.trigger({
            type: b,
            reason: d
        }, [{
            reason: d
        }])
    }

    function h(a, d, e) {
        var f = 0,
            g = function(a) {
                a.target === this && f++
            },
            h = function(a) {
                a.target === this && 0 === --f && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) {
                    e[b].off(r + " " + s)
                }), d())
            };
        b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) {
            e[b].on(r, g).on(s, h)
        }), a(), 0 === c(e.$bg) && 0 === c(e.$overlay) && 0 === c(e.$wrapper) && 0 === c(e.$modal) && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(a, b) {
            e[b].off(r + " " + s)
        }), d())
    }

    function i(a) {
        a.state !== u.CLOSED && (b.each(["$bg", "$overlay", "$wrapper", "$modal"], function(b, c) {
            a[c].off(r + " " + s)
        }), a.$bg.removeClass(a.settings.modifier), a.$overlay.removeClass(a.settings.modifier).hide(), a.$wrapper.hide(), f(), g(a, u.CLOSED, !0))
    }

    function j(a) {
        var b, c, d, e, f = {};
        for (a = a.replace(/\s*:\s*/g, ":").replace(/\s*,\s*/g, ","), b = a.split(","), e = 0, c = b.length; c > e; e++) b[e] = b[e].split(":"), d = b[e][1], ("string" == typeof d || d instanceof String) && (d = "true" === d || ("false" === d ? !1 : d)), ("string" == typeof d || d instanceof String) && (d = isNaN(d) ? d : +d), f[b[e][0]] = d;
        return f
    }

    function k() {
        for (var a = q, b = 0; b < arguments.length; ++b) a += "-" + arguments[b];
        return a
    }

    function l() {
        var a, c, d = location.hash.replace("#", "");
        if (d) {
            try {
                c = b("[data-" + p + '-id="' + d + '"]')
            } catch (e) {}
            c && c.length && (a = b[p].lookup[c.data(p)], a && a.settings.hashTracking && a.open())
        } else n && n.state === u.OPENED && n.settings.hashTracking && n.close()
    }

    function m(a, c) {
        var d = b(document.body),
            e = this;
        e.settings = b.extend({}, t, c), e.index = b[p].lookup.push(e) - 1, e.state = u.CLOSED, e.$overlay = b("." + k("overlay")), e.$overlay.length || (e.$overlay = b("<div>").addClass(k("overlay") + " " + k("is", u.CLOSED)).hide(), d.append(e.$overlay)), e.$bg = b("." + k("bg")).addClass(k("is", u.CLOSED)), e.$modal = a.addClass(q + " " + k("is-initialized") + " " + e.settings.modifier + " " + k("is", u.CLOSED)).attr("tabindex", "-1"), e.$wrapper = b("<div>").addClass(k("wrapper") + " " + e.settings.modifier + " " + k("is", u.CLOSED)).hide().append(e.$modal), d.append(e.$wrapper), e.$wrapper.on("click." + q, "[data-" + p + '-action="close"]', function(a) {
            a.preventDefault(), e.close()
        }), e.$wrapper.on("click." + q, "[data-" + p + '-action="cancel"]', function(a) {
            a.preventDefault(), e.$modal.trigger(v.CANCELLATION), e.settings.closeOnCancel && e.close(v.CANCELLATION)
        }), e.$wrapper.on("click." + q, "[data-" + p + '-action="confirm"]', function(a) {
            a.preventDefault(), e.$modal.trigger(v.CONFIRMATION), e.settings.closeOnConfirm && e.close(v.CONFIRMATION)
        }), e.$wrapper.on("click." + q, function(a) {
            var c = b(a.target);
            c.hasClass(k("wrapper")) && e.settings.closeOnOutsideClick && e.close()
        })
    }
    var n, o, p = "remodal",
        q = a.REMODAL_GLOBALS && a.REMODAL_GLOBALS.NAMESPACE || p,
        r = b.map(["animationstart", "webkitAnimationStart", "MSAnimationStart", "oAnimationStart"], function(a) {
            return a + "." + q
        }).join(" "),
        s = b.map(["animationend", "webkitAnimationEnd", "MSAnimationEnd", "oAnimationEnd"], function(a) {
            return a + "." + q
        }).join(" "),
        t = b.extend({
            hashTracking: !0,
            closeOnConfirm: !0,
            closeOnCancel: !0,
            closeOnEscape: !0,
            closeOnOutsideClick: !0,
            modifier: ""
        }, a.REMODAL_GLOBALS && a.REMODAL_GLOBALS.DEFAULTS),
        u = {
            CLOSING: "closing",
            CLOSED: "closed",
            OPENING: "opening",
            OPENED: "opened"
        },
        v = {
            CONFIRMATION: "confirmation",
            CANCELLATION: "cancellation"
        },
        w = function() {
            var a = document.createElement("div").style;
            return void 0 !== a.animationName || void 0 !== a.WebkitAnimationName || void 0 !== a.MozAnimationName || void 0 !== a.msAnimationName || void 0 !== a.OAnimationName
        }(),
        x = /iPad|iPhone|iPod/.test(navigator.platform);
    m.prototype.open = function() {
        var a, c = this;
        c.state !== u.OPENING && c.state !== u.CLOSING && (a = c.$modal.attr("data-" + p + "-id"), a && c.settings.hashTracking && (o = b(window).scrollTop(), location.hash = a), n && n !== c && i(n), n = c, e(), c.$bg.addClass(c.settings.modifier), c.$overlay.addClass(c.settings.modifier).show(), c.$wrapper.show().scrollTop(0), c.$modal.focus(), h(function() {
            g(c, u.OPENING)
        }, function() {
            g(c, u.OPENED)
        }, c))
    }, m.prototype.close = function(a) {
        var c = this;
        c.state !== u.OPENING && c.state !== u.CLOSING && (c.settings.hashTracking && c.$modal.attr("data-" + p + "-id") === location.hash.substr(1) && (location.hash = "", b(window).scrollTop(o)), h(function() {
            g(c, u.CLOSING, !1, a)
        }, function() {
            c.$bg.removeClass(c.settings.modifier), c.$overlay.removeClass(c.settings.modifier).hide(), c.$wrapper.hide(), f(), g(c, u.CLOSED, !1, a)
        }, c))
    }, m.prototype.getState = function() {
        return this.state
    }, m.prototype.destroy = function() {
        var a, c = b[p].lookup;
        i(this), this.$wrapper.remove(), delete c[this.index], a = b.grep(c, function(a) {
            return !!a
        }).length, 0 === a && (this.$overlay.remove(), this.$bg.removeClass(k("is", u.CLOSING) + " " + k("is", u.OPENING) + " " + k("is", u.CLOSED) + " " + k("is", u.OPENED)))
    }, b[p] = {
        lookup: []
    }, b.fn[p] = function(a) {
        var c, d;
        return this.each(function(e, f) {
            d = b(f), null == d.data(p) ? (c = new m(d, a), d.data(p, c.index), c.settings.hashTracking && d.attr("data-" + p + "-id") === location.hash.substr(1) && c.open()) : c = b[p].lookup[d.data(p)]
        }), c
    }, b(document).ready(function() {
        b(document).on("click", "[data-" + p + "-target]", function(a) {
            a.preventDefault();
            var c = a.currentTarget,
                d = c.getAttribute("data-" + p + "-target"),
                e = b("[data-" + p + '-id="' + d + '"]');
            b[p].lookup[e.data(p)].open()
        }), b(document).find("." + q).each(function(a, c) {
            var d = b(c),
                e = d.data(p + "-options");
            e ? ("string" == typeof e || e instanceof String) && (e = j(e)) : e = {}, d[p](e)
        }), b(document).on("keydown." + q, function(a) {
            n && n.settings.closeOnEscape && n.state === u.OPENED && 27 === a.keyCode && n.close()
        }), b(window).on("hashchange." + q, l)
    })
}),
function(a) {
    "function" == typeof define && define.amd && define.amd.jQuery ? define(["jquery"], a) : a(jQuery)
}(function(f) {
    function w(F) {
        return !F || void 0 !== F.allowPageScroll || void 0 === F.swipe && void 0 === F.swipeStatus || (F.allowPageScroll = m), void 0 !== F.click && void 0 === F.tap && (F.tap = F.click), F || (F = {}), F = f.extend({}, f.fn.swipe.defaults, F), this.each(function() {
            var H = f(this),
                G = H.data(C);
            G || (G = new D(this, F), H.data(C, G))
        })
    }

    function D(a5, aw) {
        function aO(be) {
            if (!(aC() || f(be.target).closest(aw.excludedElements, aS).length > 0)) {
                var bd, bf = be.originalEvent ? be.originalEvent : be,
                    bg = bf.touches,
                    bc = bg ? bg[0] : bf;
                return aa = g, bg ? X = bg.length : be.preventDefault(), ah = 0, aQ = null, aK = null, ac = 0, a2 = 0, a0 = 0, H = 1, ar = 0, aR = ak(), N = ab(), S(), !bg || X === aw.fingers || aw.fingers === i || aY() ? (aj(0, bc), U = au(), 2 == X && (aj(1, bg[1]), a2 = a0 = av(aR[0].start, aR[1].start)), (aw.swipeStatus || aw.pinchStatus) && (bd = P(bf, aa))) : bd = !1, bd === !1 ? (aa = q, P(bf, aa), bd) : (aw.hold && (ag = setTimeout(f.proxy(function() {
                    aS.trigger("hold", [bf.target]), aw.hold && (bd = aw.hold.call(aS, bf, bf.target))
                }, this), aw.longTapThreshold)), ap(!0), null)
            }
        }

        function a4(bf) {
            var bi = bf.originalEvent ? bf.originalEvent : bf;
            if (aa !== h && aa !== q && !an()) {
                var be, bj = bi.touches,
                    bd = bj ? bj[0] : bi,
                    bg = aI(bd);
                if (a3 = au(), bj && (X = bj.length), aw.hold && clearTimeout(ag), aa = k, 2 == X && (0 == a2 ? (aj(1, bj[1]), a2 = a0 = av(aR[0].start, aR[1].start)) : (aI(bj[1]), a0 = av(aR[0].end, aR[1].end), aK = at(aR[0].end, aR[1].end)), H = a8(a2, a0), ar = Math.abs(a2 - a0)), X === aw.fingers || aw.fingers === i || !bj || aY()) {
                    if (aQ = aM(bg.start, bg.end), am(bf, aQ), ah = aT(bg.start, bg.end), ac = aN(), aJ(aQ, ah), (aw.swipeStatus || aw.pinchStatus) && (be = P(bi, aa)), !aw.triggerOnTouchEnd || aw.triggerOnTouchLeave) {
                        var bc = !0;
                        if (aw.triggerOnTouchLeave) {
                            var bh = aZ(this);
                            bc = F(bg.end, bh)
                        }!aw.triggerOnTouchEnd && bc ? aa = aD(k) : aw.triggerOnTouchLeave && !bc && (aa = aD(h)), aa != q && aa != h || P(bi, aa)
                    }
                } else aa = q, P(bi, aa);
                be === !1 && (aa = q, P(bi, aa))
            }
        }

        function M(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc,
                be = bd.touches;
            return be && be.length ? (G(), !0) : (an() && (X = ae), a3 = au(), ac = aN(), bb() || !ao() ? (aa = q, P(bd, aa)) : aw.triggerOnTouchEnd || 0 == aw.triggerOnTouchEnd && aa === k ? (bc.preventDefault(), aa = h, P(bd, aa)) : !aw.triggerOnTouchEnd && a7() ? (aa = h, aG(bd, aa, B)) : aa === k && (aa = q, P(bd, aa)), ap(!1), null)
        }

        function ba() {
            X = 0, a3 = 0, U = 0, a2 = 0, a0 = 0, H = 1, S(), ap(!1)
        }

        function L(bc) {
            var bd = bc.originalEvent ? bc.originalEvent : bc;
            aw.triggerOnTouchLeave && (aa = aD(h), P(bd, aa))
        }

        function aL() {
            aS.unbind(K, aO), aS.unbind(aE, ba), aS.unbind(az, a4), aS.unbind(V, M), T && aS.unbind(T, L), ap(!1)
        }

        function aD(bg) {
            var bf = bg,
                be = aB(),
                bd = ao(),
                bc = bb();
            return !be || bc ? bf = q : !bd || bg != k || aw.triggerOnTouchEnd && !aw.triggerOnTouchLeave ? !bd && bg == h && aw.triggerOnTouchLeave && (bf = q) : bf = h, bf
        }

        function P(be, bc) {
            var bd, bf = be.touches;
            return J() || W() || Q() || aY() ? ((J() || W()) && (bd = aG(be, bc, l)), (Q() || aY()) && bd !== !1 && (bd = aG(be, bc, t))) : aH() && bd !== !1 ? bd = aG(be, bc, j) : aq() && bd !== !1 ? bd = aG(be, bc, b) : ai() && bd !== !1 && (bd = aG(be, bc, B)), bc === q && ba(be), bc === h && (bf ? bf.length || ba(be) : ba(be)), bd
        }

        function aG(bf, bc, be) {
            var bd;
            if (be == l) {
                if (aS.trigger("swipeStatus", [bc, aQ || null, ah || 0, ac || 0, X, aR]), aw.swipeStatus && (bd = aw.swipeStatus.call(aS, bf, bc, aQ || null, ah || 0, ac || 0, X, aR), bd === !1)) return !1;
                if (bc == h && aW()) {
                    if (aS.trigger("swipe", [aQ, ah, ac, X, aR]), aw.swipe && (bd = aw.swipe.call(aS, bf, aQ, ah, ac, X, aR), bd === !1)) return !1;
                    switch (aQ) {
                        case p:
                            aS.trigger("swipeLeft", [aQ, ah, ac, X, aR]), aw.swipeLeft && (bd = aw.swipeLeft.call(aS, bf, aQ, ah, ac, X, aR));
                            break;
                        case o:
                            aS.trigger("swipeRight", [aQ, ah, ac, X, aR]), aw.swipeRight && (bd = aw.swipeRight.call(aS, bf, aQ, ah, ac, X, aR));
                            break;
                        case e:
                            aS.trigger("swipeUp", [aQ, ah, ac, X, aR]), aw.swipeUp && (bd = aw.swipeUp.call(aS, bf, aQ, ah, ac, X, aR));
                            break;
                        case x:
                            aS.trigger("swipeDown", [aQ, ah, ac, X, aR]), aw.swipeDown && (bd = aw.swipeDown.call(aS, bf, aQ, ah, ac, X, aR))
                    }
                }
            }
            if (be == t) {
                if (aS.trigger("pinchStatus", [bc, aK || null, ar || 0, ac || 0, X, H, aR]), aw.pinchStatus && (bd = aw.pinchStatus.call(aS, bf, bc, aK || null, ar || 0, ac || 0, X, H, aR), bd === !1)) return !1;
                if (bc == h && a9()) switch (aK) {
                    case c:
                        aS.trigger("pinchIn", [aK || null, ar || 0, ac || 0, X, H, aR]), aw.pinchIn && (bd = aw.pinchIn.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR));
                        break;
                    case A:
                        aS.trigger("pinchOut", [aK || null, ar || 0, ac || 0, X, H, aR]), aw.pinchOut && (bd = aw.pinchOut.call(aS, bf, aK || null, ar || 0, ac || 0, X, H, aR))
                }
            }
            return be == B ? bc !== q && bc !== h || (clearTimeout(aX), clearTimeout(ag), Z() && !I() ? (O = au(), aX = setTimeout(f.proxy(function() {
                O = null, aS.trigger("tap", [bf.target]), aw.tap && (bd = aw.tap.call(aS, bf, bf.target))
            }, this), aw.doubleTapThreshold)) : (O = null, aS.trigger("tap", [bf.target]), aw.tap && (bd = aw.tap.call(aS, bf, bf.target)))) : be == j ? bc !== q && bc !== h || (clearTimeout(aX), O = null, aS.trigger("doubletap", [bf.target]), aw.doubleTap && (bd = aw.doubleTap.call(aS, bf, bf.target))) : be == b && (bc !== q && bc !== h || (clearTimeout(aX), O = null, aS.trigger("longtap", [bf.target]), aw.longTap && (bd = aw.longTap.call(aS, bf, bf.target)))), bd
        }

        function ao() {
            var bc = !0;
            return null !== aw.threshold && (bc = ah >= aw.threshold), bc
        }

        function bb() {
            var bc = !1;
            return null !== aw.cancelThreshold && null !== aQ && (bc = aU(aQ) - ah >= aw.cancelThreshold), bc
        }

        function af() {
            return null !== aw.pinchThreshold ? ar >= aw.pinchThreshold : !0
        }

        function aB() {
            var bc;
            return bc = aw.maxTimeThreshold ? !(ac >= aw.maxTimeThreshold) : !0
        }

        function am(bc, bd) {
            if (aw.preventDefaultEvents !== !1)
                if (aw.allowPageScroll === m) bc.preventDefault();
                else {
                    var be = aw.allowPageScroll === s;
                    switch (bd) {
                        case p:
                            (aw.swipeLeft && be || !be && aw.allowPageScroll != E) && bc.preventDefault();
                            break;
                        case o:
                            (aw.swipeRight && be || !be && aw.allowPageScroll != E) && bc.preventDefault();
                            break;
                        case e:
                            (aw.swipeUp && be || !be && aw.allowPageScroll != u) && bc.preventDefault();
                            break;
                        case x:
                            (aw.swipeDown && be || !be && aw.allowPageScroll != u) && bc.preventDefault()
                    }
                }
        }

        function a9() {
            var bd = aP(),
                bc = Y(),
                be = af();
            return bd && bc && be
        }

        function aY() {
            return !!(aw.pinchStatus || aw.pinchIn || aw.pinchOut)
        }

        function Q() {
            return !(!a9() || !aY())
        }

        function aW() {
            var bf = aB(),
                bh = ao(),
                be = aP(),
                bc = Y(),
                bd = bb(),
                bg = !bd && bc && be && bh && bf;
            return bg
        }

        function W() {
            return !!(aw.swipe || aw.swipeStatus || aw.swipeLeft || aw.swipeRight || aw.swipeUp || aw.swipeDown)
        }

        function J() {
            return !(!aW() || !W())
        }

        function aP() {
            return X === aw.fingers || aw.fingers === i || !a
        }

        function Y() {
            return 0 !== aR[0].end.x
        }

        function a7() {
            return !!aw.tap
        }

        function Z() {
            return !!aw.doubleTap
        }

        function aV() {
            return !!aw.longTap
        }

        function R() {
            if (null == O) return !1;
            var bc = au();
            return Z() && bc - O <= aw.doubleTapThreshold
        }

        function I() {
            return R()
        }

        function ay() {
            return (1 === X || !a) && (isNaN(ah) || ah < aw.threshold)
        }

        function a1() {
            return ac > aw.longTapThreshold && r > ah
        }

        function ai() {
            return !(!ay() || !a7())
        }

        function aH() {
            return !(!R() || !Z())
        }

        function aq() {
            return !(!a1() || !aV())
        }

        function G() {
            a6 = au(), ae = event.touches.length + 1
        }

        function S() {
            a6 = 0, ae = 0
        }

        function an() {
            var bc = !1;
            if (a6) {
                var bd = au() - a6;
                bd <= aw.fingerReleaseThreshold && (bc = !0)
            }
            return bc
        }

        function aC() {
            return !(aS.data(C + "_intouch") !== !0)
        }

        function ap(bc) {
            bc === !0 ? (aS.bind(az, a4), aS.bind(V, M), T && aS.bind(T, L)) : (aS.unbind(az, a4, !1), aS.unbind(V, M, !1), T && aS.unbind(T, L, !1)), aS.data(C + "_intouch", bc === !0)
        }

        function aj(bd, bc) {
            var be = void 0 !== bc.identifier ? bc.identifier : 0;
            return aR[bd].identifier = be, aR[bd].start.x = aR[bd].end.x = bc.pageX || bc.clientX, aR[bd].start.y = aR[bd].end.y = bc.pageY || bc.clientY, aR[bd]
        }

        function aI(bc) {
            var be = void 0 !== bc.identifier ? bc.identifier : 0,
                bd = ad(be);
            return bd.end.x = bc.pageX || bc.clientX, bd.end.y = bc.pageY || bc.clientY, bd
        }

        function ad(bd) {
            for (var bc = 0; bc < aR.length; bc++)
                if (aR[bc].identifier == bd) return aR[bc]
        }

        function ak() {
            for (var bc = [], bd = 0; 5 >= bd; bd++) bc.push({
                start: {
                    x: 0,
                    y: 0
                },
                end: {
                    x: 0,
                    y: 0
                },
                identifier: 0
            });
            return bc
        }

        function aJ(bc, bd) {
            bd = Math.max(bd, aU(bc)), N[bc].distance = bd
        }

        function aU(bc) {
            return N[bc] ? N[bc].distance : void 0
        }

        function ab() {
            var bc = {};
            return bc[p] = ax(p), bc[o] = ax(o), bc[e] = ax(e), bc[x] = ax(x), bc
        }

        function ax(bc) {
            return {
                direction: bc,
                distance: 0
            }
        }

        function aN() {
            return a3 - U
        }

        function av(bf, be) {
            var bd = Math.abs(bf.x - be.x),
                bc = Math.abs(bf.y - be.y);
            return Math.round(Math.sqrt(bd * bd + bc * bc))
        }

        function a8(bc, bd) {
            var be = bd / bc * 1;
            return be.toFixed(2)
        }

        function at() {
            return 1 > H ? A : c
        }

        function aT(bd, bc) {
            return Math.round(Math.sqrt(Math.pow(bc.x - bd.x, 2) + Math.pow(bc.y - bd.y, 2)))
        }

        function aF(bf, bd) {
            var bc = bf.x - bd.x,
                bh = bd.y - bf.y,
                be = Math.atan2(bh, bc),
                bg = Math.round(180 * be / Math.PI);
            return 0 > bg && (bg = 360 - Math.abs(bg)), bg
        }

        function aM(bd, bc) {
            var be = aF(bd, bc);
            return 45 >= be && be >= 0 ? p : 360 >= be && be >= 315 ? p : be >= 135 && 225 >= be ? o : be > 45 && 135 > be ? x : e
        }

        function au() {
            var bc = new Date;
            return bc.getTime()
        }

        function aZ(bc) {
            bc = f(bc);
            var be = bc.offset(),
                bd = {
                    left: be.left,
                    right: be.left + bc.outerWidth(),
                    top: be.top,
                    bottom: be.top + bc.outerHeight()
                };
            return bd
        }

        function F(bc, bd) {
            return bc.x > bd.left && bc.x < bd.right && bc.y > bd.top && bc.y < bd.bottom
        }
        var aA = a || d || !aw.fallbackToMouseEvents,
            K = aA ? d ? v ? "MSPointerDown" : "pointerdown" : "touchstart" : "mousedown",
            az = aA ? d ? v ? "MSPointerMove" : "pointermove" : "touchmove" : "mousemove",
            V = aA ? d ? v ? "MSPointerUp" : "pointerup" : "touchend" : "mouseup",
            T = aA ? null : "mouseleave",
            aE = d ? v ? "MSPointerCancel" : "pointercancel" : "touchcancel",
            ah = 0,
            aQ = null,
            ac = 0,
            a2 = 0,
            a0 = 0,
            H = 1,
            ar = 0,
            aK = 0,
            N = null,
            aS = f(a5),
            aa = "start",
            X = 0,
            aR = null,
            U = 0,
            a3 = 0,
            a6 = 0,
            ae = 0,
            O = 0,
            aX = null,
            ag = null;
        try {
            aS.bind(K, aO), aS.bind(aE, ba)
        } catch (al) {
            f.error("events not supported " + K + "," + aE + " on jQuery.swipe")
        }
        this.enable = function() {
            return aS.bind(K, aO), aS.bind(aE, ba), aS
        }, this.disable = function() {
            return aL(), aS
        }, this.destroy = function() {
            aL(), aS.data(C, null), aS = null
        }, this.option = function(bd, bc) {
            if (void 0 !== aw[bd]) {
                if (void 0 === bc) return aw[bd];
                aw[bd] = bc
            } else f.error("Option " + bd + " does not exist on jQuery.swipe.options");
            return null
        }
    }
    var y = "1.6.9",
        p = "left",
        o = "right",
        e = "up",
        x = "down",
        c = "in",
        A = "out",
        m = "none",
        s = "auto",
        l = "swipe",
        t = "pinch",
        B = "tap",
        j = "doubletap",
        b = "longtap",
        E = "horizontal",
        u = "vertical",
        i = "all",
        r = 10,
        g = "start",
        k = "move",
        h = "end",
        q = "cancel",
        a = "ontouchstart" in window,
        v = window.navigator.msPointerEnabled && !window.navigator.pointerEnabled,
        d = window.navigator.pointerEnabled || window.navigator.msPointerEnabled,
        C = "TouchSwipe",
        n = {
            fingers: 1,
            threshold: 75,
            cancelThreshold: null,
            pinchThreshold: 20,
            maxTimeThreshold: null,
            fingerReleaseThreshold: 250,
            longTapThreshold: 500,
            doubleTapThreshold: 200,
            swipe: null,
            swipeLeft: null,
            swipeRight: null,
            swipeUp: null,
            swipeDown: null,
            swipeStatus: null,
            pinchIn: null,
            pinchOut: null,
            pinchStatus: null,
            click: null,
            tap: null,
            doubleTap: null,
            longTap: null,
            hold: null,
            triggerOnTouchEnd: !0,
            triggerOnTouchLeave: !1,
            allowPageScroll: "auto",
            fallbackToMouseEvents: !0,
            excludedElements: "label, button, input, select, textarea, a, .noSwipe",
            preventDefaultEvents: !0
        };
    f.fn.swipe = function(H) {
        var G = f(this),
            F = G.data(C);
        if (F && "string" == typeof H) {
            if (F[H]) return F[H].apply(this, Array.prototype.slice.call(arguments, 1));
            f.error("Method " + H + " does not exist on jQuery.swipe")
        } else if (!(F || "object" != typeof H && H)) return w.apply(this, arguments);
        return G
    }, f.fn.swipe.version = y, f.fn.swipe.defaults = n, f.fn.swipe.phases = {
        PHASE_START: g,
        PHASE_MOVE: k,
        PHASE_END: h,
        PHASE_CANCEL: q
    }, f.fn.swipe.directions = {
        LEFT: p,
        RIGHT: o,
        UP: e,
        DOWN: x,
        IN: c,
        OUT: A
    }, f.fn.swipe.pageScroll = {
        NONE: m,
        HORIZONTAL: E,
        VERTICAL: u,
        AUTO: s
    }, f.fn.swipe.fingers = {
        ONE: 1,
        TWO: 2,
        THREE: 3,
        ALL: i
    }
});
var RC = RC || {};
RC.utils = function(RC, $) {
    function shuffle(arr) {
        var i, j, temp;
        for (i = arr.length - 1; i > 0; i--) j = Math.floor(Math.random() * (i + 1)), temp = arr[i], arr[i] = arr[j], arr[j] = temp;
        return arr
    }

    function getURLParam(key) {
        return decodeURIComponent((new RegExp("[?|&]" + key + "=([^&;]+?)(&|#|;|$)").exec(location.search) || ["", ""])[1].replace(/\+/g, "%20")) || null
    }

    function getURLParams(str) {
        return (str || document.location.search).replace(/(^\?)/, "").split("&").map(function(n) {
            return n = n.split("="), this[n[0]] = n[1], this
        }.bind({}))[0]
    }

    function getURLHash() {
        return window.location.hash.split("#")[1]
    }

    function getURLParts() {
        return window.location.pathname.split(/\s*\/\s*/).filter(function(n) {
            return "" != n
        })
    }
    return {
        shuffle: shuffle,
        urlParam: getURLParam,
        urlParams: getURLParams,
        urlHash: getURLHash,
        urlParts: getURLParts
    }
}(RC, jQuery);
var RC = RC || {};
RC.lazyloader = function(RC, $) {
    function load(scope, callback) {
        var len = $(scope + " .lazyload").length;
        $(scope).find(".lazyload").each(function(index) {
            $(this).attr("src", $(this).attr("data-src")).on("load", function() {
                index + 1 === len && "function" == typeof callback && callback()
            })
        })
    }
    return {
        load: load
    }
}(RC, jQuery);
var SPI = SPI || {};
SPI.globals = SPI.globals || {}, SPI.search = SPI.search || {}, SPI.search.referred = SPI.search.referred || !1, SPI.search.autoEnabled = SPI.search.autoEnabled || !1, SPI.search.defaultImage = SPI.search.defaultImage || "", SPI.slider = function(SPI, $) {
    function init() {
        if (count > 1) {
            if ($slides.eq(count - 1).addClass("prev-slide"), $active.next().addClass("next-slide"), position($active), SPI.util.viewport().width <= 640) {
                var slideHeight = setSlideHeight($active);
                setTimeout(function() {
                    $sc.height(slideHeight)
                }, 50)
            }
            var timer = $.timer(function() {
                $controllerList.find(".active").find(".progress").find("span").css({
                    width: 0
                }), slideLeft()
            });
            timer.set({
                time: slideTimer,
                autostart: !0
            }), $controllerList.find(".active").find(".progress").find("span").animate({
                width: "100%"
            }, slideTimer, "linear"), $control.on("click", function() {
                $slides.removeClass("active-slide"), position($slides.eq($(this).index()), "direct"), SPI.util.viewport().width <= 640 && $sc.animate({
                    height: setSlideHeight($slides.eq($(this).index())) + "px"
                }, slideTransitionSpeed), timer.play(!0), $control.removeClass("active"), $(this).addClass("active"), $control.find(".progress > span").stop().css({
                    width: 0
                }), $(this).find(".progress span").animate({
                    width: "100%"
                }, slideTimer, "linear")
            }), SPI.check.mobileAndTabletcheck() ? $sc.find("ul").swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    slideLeft(), timer.play(!0)
                },
                swipeRight: function(event, direction, distance, duration, fingerCount) {
                    slideRight(), timer.play(!0)
                },
                excludedElements: ""
            }) : $slides.hover(function() {
                timer.pause(), timeRemaining = timer.remaining, $controllerList.find(".active").find(".progress").find("span").stop()
            }, function() {
                timer.play(), $controllerList.find(".active").find(".progress").find("span").animate({
                    width: "100%"
                }, timeRemaining, "linear")
            })
        }
    }

    function position(active, direction) {
        "undefined" == typeof direction ? ($slides.eq(count - 1).css({
            left: "-100%"
        }), active.next().css({
            left: "100%"
        })) : ("direct" == direction && $slides.removeClass("active-slide"), active.addClass("active-slide"), $slides.removeClass("prev-slide"), $slides.removeClass("next-slide"), "right" == direction && (active.prev().length ? active.prev().addClass("prev-slide").css({
            left: "-100%"
        }) : $slides.eq(count - 1).addClass("prev-slide").css({
            left: "-100%"
        }), active.next().length ? active.next().removeClass("active-slide").addClass("next-slide") : $slides.eq(0).removeClass("active-slide").addClass("next-slide")), "left" != direction && "direct" != direction || (active.prev().length ? active.prev().removeClass("active-slide").addClass("prev-slide") : $slides.eq(count - 1).removeClass("active-slide").addClass("prev-slide"), active.next().length ? active.next().addClass("next-slide").css({
            left: "100%"
        }) : $slides.eq(0).addClass("next-slide").css({
            left: "100%"
        }), "direct" == direction && ($slides.filter(".prev-slide").css({
            left: "-100%"
        }), active.css({
            left: 0
        }))))
    }

    function slideRight() {
        var active = $(".active-slide"),
            prev = $(".prev-slide"),
            color = prev.attr("data-bg-color");
        active.animate({
            left: "100%"
        }, slideTransitionSpeed), prev.animate({
            left: 0
        }, slideTransitionSpeed, "swing", function() {
            position(prev, "right")
        }), $slider.css({
            backgroundColor: color
        }), SPI.util.viewport().width <= 640 && $sc.animate({
            height: setSlideHeight(prev) + "px"
        }, slideTransitionSpeed), $control.find(".progress > span").css({
            width: 0
        }), $control.removeClass("active"), $control.eq(prev.index()).addClass("active"), $control.eq(prev.index()).find(".progress span").animate({
            width: "100%"
        }, slideTimer, "linear")
    }

    function slideLeft() {
        var active = $(".active-slide"),
            next = $(".next-slide"),
            color = next.attr("data-bg-color");
        active.animate({
            left: "-100%"
        }, slideTransitionSpeed), next.animate({
            left: 0
        }, slideTransitionSpeed, "swing", function() {
            position(next, "left")
        }), $slider.css({
            backgroundColor: color
        }), SPI.util.viewport().width <= 640 && $sc.animate({
            height: setSlideHeight(next) + "px"
        }, slideTransitionSpeed), $control.find(".progress > span").css({
            width: 0
        }), $control.removeClass("active"), $control.eq(next.index()).addClass("active"), $control.eq(next.index()).find(".progress span").animate({
            width: "100%"
        }, slideTimer, "linear")
    }

    function setSlideHeight(slide) {
        var slideImageHeight = slide.find("figure").height(),
            slideCopyHeight = slide.find("> div").height();
        return slideImageHeight + slideCopyHeight
    }
    var $slider = $(".slider"),
        $sc = $slider.find(".slides-container"),
        $slides = $sc.find("li"),
        $active = $slides.filter(".active-slide"),
        $controllerList = $(".slides-controller"),
        $control = $controllerList.find("li"),
        count = $slides.length,
        slideTransitionSpeed = 600,
        slideTimer = 7e3,
        timeRemaining = 0;
    return {
        init: init
    }
}(SPI, jQuery), SPI.askpat = function(SPI, $) {
    function init() {
        bindEvents()
    }

    function bindEvents() {
        $askpat.on("click", function() {
            var $el = $("this");
            $el.parent();
            return _speakpipe_open_widget(), !1
        })
    }
    var $askpat = $("#speakpipe__trigger");
    return {
        init: init
    }
}(SPI, jQuery), SPI.blog = function(SPI, $) {
    function init() {}

    function buildArticle(article, category, theme) {
        "undefined" == typeof category && (category = ""), "undefined" == typeof theme && (theme = "");
        var postName, date = moment(article.post_date).format("MMMM D, YYYY"),
            a = '<article class="' + category + " " + theme + ' loaded" style="display: none;">';
        postName = 0 === article.post_name.indexOf("podcast/") ? "podcasts" + article.post_name.slice(7) : 0 === article.post_name.indexOf("tutorial/") ? "tutorials" + article.post_name.slice(8) : article.post_name, a += '<figure><a href="/' + postName + '/" title="Permalink to ' + article.post_title + '"><img src="' + article.featured_image + '" alt="" /><span class="type">', a += "podcast" == article.post_type ? '<svg xmlns="http://www.w3.org/2000/svg" width="12" height="16" viewBox="0 0 12 16" style="fill: ' + article.post_color + ';"><path id="post-type-podcast" data-name="Post Type - Podcast" d="M880,2176l-12,8v-16Z" transform="translate(-868 -2168)"/></svg>' : "tv" == article.post_type ? '<svg xmlns="http://www.w3.org/2000/svg" width="18" height="12" viewBox="0 0 18 12" style="fill: ' + article.post_color + ';"><path id="post-type-tv" data-name="Post Type - TV" d="M1362,2182l-6-4v3a1,1,0,0,1-1,1h-10a1,1,0,0,1-1-1v-10a1,1,0,0,1,1-1h10a1,1,0,0,1,1,1v3l6-4v12Z" transform="translate(-1344 -2170)"/></svg>' : '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" style="fill: ' + article.post_color + ';"><path id="post-type-blog" data-name="Post Type - Blog" d="M385.5,2169h13a1.5,1.5,0,0,1,0,3h-13A1.5,1.5,0,0,1,385.5,2169Zm0,6h9a1.5,1.5,0,0,1,0,3h-9A1.5,1.5,0,0,1,385.5,2175Zm0,6h13a1.5,1.5,0,0,1,0,3h-13A1.5,1.5,0,0,1,385.5,2181Z" transform="translate(-384 -2169)" /></svg>', a += "</span></a></figure>", a += '<h1><a href="/' + postName + '" title="Permalink to ' + article.post_title + '">' + article.post_title + "</a></h1>";
        var postType = "";
        return postType = "post" == article.post_type ? "Blog" : "tv" == article.post_type ? "TV" : "podcast" == article.post_type ? "Podcast" : "income-reports" == article.post_type ? "Income Report" : "book-club" == article.post_type ? "Book Club" : "Blog", a += '<h2 class="diagonal-pattern__bottom">' + postType + ' &nbsp;&mdash;&nbsp; <time datetime="' + article.post_date + '" pubdate>' + date + "</time></h2>", a += "</article>"
    }

    function buildBookArticle(article, category, theme) {
        var bk = '<article class="archive-item loaded" style="display: none;">';
        return bk += '<h3 class="archive-item__title">' + article.post_title + "</h3>", bk += '<div class="book-archive__item">', bk += '<div class="book-archive__cover"><a href="' + article.book_btn_link + '"><img src="' + article.featured_image + '" alt="" /></a></div>', bk += '<div class="book-archive__meta"><h4 class="book-title">' + article.book_title + '</h4><h5 class="book-author">By ' + article.book_author + '</h5><hr class="diagonal" /><a class="btn" href="' + article.book_btn_link + '"><span>' + article.book_btn_text + "</span></a></div>", bk += '<div class="book-archive__description">' + article.book_desc + "</div>", bk += "</div></article>"
    }

    function progress(wst, height, offset) {
        var pw = (wst - (offset - 40)) / height * 100,
            $progress = $("#progress > div");
        pw > 100 ? ($progress.css({
            width: "100%"
        }), $progress.hasClass("complete") || $progress.addClass("complete")) : ($progress.css({
            width: pw + "%"
        }), $progress.hasClass("complete") && $progress.removeClass("complete"))
    }
    return {
        init: init,
        buildArticle: buildArticle,
        buildBookArticle: buildBookArticle,
        progress: progress
    }
}(SPI, jQuery), SPI.bookclub = function(SPI, $) {
    function bindEvents() {
        $btn.on("click", function(e) {
            e.preventDefault();
            var email = $email.val();
            if (validateEmail(email)) {
                $email.next().hasClass("error") && $book.removeClass("invalid has-error");
                var api_key = "ipOTSt9jw1NVy5beGo6nXg",
                    formID = "4814744",
                    formData = $book.serialize();
                $.ajax({
                    url: "https://api.convertkit.com/forms/" + formID + "/subscribe?k=" + api_key + "&" + formData,
                    method: "POST"
                }).done(function(data) {
                    void 0 !== window.ga && ga("send", "event", {
                        eventCategory: "Product",
                        eventAction: "Product exit",
                        eventLabel: "Book Club Signup"
                    }), "created" == data.status ? ($(".header-form").addClass("subscribed"), $book.removeClass("invalid has-error")) : $book.removeClass("invalid").addClass("has-error")
                })
            } else $book.removeClass("has-error").addClass("invalid")
        })
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
    }
    var $book = $("#book-club__signup"),
        $email = ($book.find('input[type="text"]'), $book.find('input[name="email"]')),
        $btn = $book.find("button.btn");
    return {
        init: function() {
            bindEvents()
        }
    }
}(SPI, jQuery), SPI.check = function(SPI, $) {
    function init() {
        mobileAndTabletcheck() ? $("body").addClass("touch") : $("body").addClass("no-touch")
    }

    function mobileAndTabletcheck() {
        return $(window).width() < 1024
    }
    return {
        init: init,
        mobileAndTabletcheck: mobileAndTabletcheck
    }
}(SPI, jQuery), SPI.contact = function(SPI, $) {
    function init() {
        $tweet.on("keyup", function() {
            var content = $(this).val();
            $tweetBtn.attr("href", baseurl + encodeURIComponent(content)), updateCount(count - content.length)
        }), $tweetBtn.on("click", function() {
            var url = $(this).attr("href");
            contactEvent("tweet"), SPI.social.pop(url)
        }), $(".contact .typeform-share").on("click", function() {
            contactEvent("email")
        })
    }

    function updateCount(count) {
        $counter.html(count)
    }

    function contactEvent(eventType) {
        void 0 !== window.ga && ("email" === eventType ? ga("send", "event", {
            eventCategory: "Interaction",
            eventAction: "Contact",
            eventLabel: "Email"
        }) : ga("send", "event", {
            eventCategory: "Interaction",
            eventAction: "Contact",
            eventLabel: "Tweet"
        }))
    }
    var $tweetme = $("#tweet-me"),
        $tweet = $('input[name="tweet"]'),
        $tweetBtn = $tweetme.find(".tweet"),
        $counter = $tweetme.find(".counter"),
        baseurl = "https://twitter.com/intent/tweet?text=@patflynn ",
        count = 130;
    return {
        init: init
    }
}(SPI, jQuery), SPI.contentSlider = function(SPI, $) {
    function init() {
        $list.css({
            width: containerWidth + "%"
        }), $item.css({
            width: slideWidth + "%"
        }), setTimeout(function() {
            size($initial)
        }, 1100), $navLink.on("click", function(e) {
            if (e.preventDefault(), !$(this).hasClass()) {
                $navLink.removeClass("active"), $(this).addClass("active");
                var next = $navItem.index($(this).parent());
                slide(next)
            }
        })
    }

    function size(item) {
        var newHeight = item.height();
        $cs.height(newHeight)
    }

    function slide(next) {
        var leftPercentage = next * slideWidth * -1,
            left = leftPercentage + "%";
        $list.css({
            webkitTransform: "translateX(" + left + ")",
            MozTransform: "translateX(" + left + ")",
            msTransform: "translateX(" + left + ")",
            OTransform: "translateX(" + left + ")",
            transform: "translateX(" + left + ")"
        }), size($item.eq(next))
    }
    var slideWidth, $cs = $(".content-slider-container"),
        $list = $cs.find("> ul"),
        $item = $list.find("> li"),
        $initial = $item.first(),
        $csNav = $(".content-slider-nav"),
        $navItem = $csNav.find("li:not(.exempt)"),
        $navLink = ($navItem.filter(".active"), $navItem.find("a")),
        navItemCount = $navLink.length,
        containerWidth = 100 * navItemCount;
    return slideWidth = 3 === navItemCount ? 33.3 : 100 / navItemCount, {
        init: init,
        size: size
    }
}(SPI, jQuery), SPI.content = function(SPI, $) {
    function init() {
        if (ww > 768) {
            var mainMinHeight = wh - $("footer.footer").outerHeight() - mt;
            $main.css({
                minHeight: mainMinHeight
            })
        }
    }
    var $window = $(window),
        wh = $window.height(),
        ww = $window.width(),
        $main = $("main"),
        mt = 168;
    return {
        init: init
    }
}(SPI, jQuery), SPI.error404 = function(SPI, $) {
    function init() {
        $(".error404").on("click", ".btn-random-post", function(e) {
            var $el = $(this),
                names = ["Marty", "Marty McFly", "Seamus McFly", "Marty Junior", "Marlene", "William Sean"],
                $name = names[Math.floor(Math.random() * names.length)],
                $buttonText = $el.find("span"),
                $url = $el.attr("href");
            e.preventDefault(), $el.addClass("clicked"), $buttonText.html("Just call me " + $name), $(".headline-section").addClass("travel");
            setTimeout(function() {
                $("body").addClass("travel"), window.location.href = $url
            }, 400)
        })
    }
    return {
        init: init
    }
}(SPI, jQuery), SPI.footer = function(SPI, $) {
    function bindEvents() {
        $(".footer-bar__dropdown").on("click", function() {
            $footerBar.addClass("show-more"), $("html, body").animate({
                scrollTop: $(".footer-bar").offset().top + "px"
            }, 340)
        }), $(window).on("resize", function() {
            calcHeight()
        }), $inputs.focusin(function() {
            $(this).closest(".input-container").addClass("focus")
        }), $inputs.focusout(function() {
            $(this).closest(".input-container").removeClass("focus")
        }), $btn.on("click", function(e) {
            e.preventDefault();
            var email = $required.val();
            if (validateEmail(email)) {
                $required.next().hasClass("error") && $required.next().hide();
                var api_key = "ipOTSt9jw1NVy5beGo6nXg",
                    formID = "4814658",
                    formData = $newsletter.serialize();
                $.ajax({
                    url: "https://api.convertkit.com/forms/" + formID + "/subscribe?k=" + api_key + "&" + formData,
                    method: "POST"
                }).done(function(data) {
                    void 0 !== window.ga && ga("send", "event", {
                        eventCategory: "Interaction",
                        eventAction: "Optin",
                        eventLabel: "Email"
                    }), "created" == data.status ? window.location.href = data.redirect_url : $btn.before('<p style="font-size: 1em;">Sorry, there was an unknown error. Please try again later!</p>')
                })
            } else $required.next(".error").show()
        }), $("#newsletter-modal").on("click", ".close", function(e) {
            e.preventDefault(), $("[data-remodal-id=newsletter-modal]").remodal().close()
        })
    }

    function calcHeight() {
        $footerBar.css("margin-bottom", $footerReveal.height() + "px")
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
    }
    var $footerBar = $(".footer-bar"),
        $footerReveal = $(".footer-reveal"),
        $newsletter = $("#newsletter-form"),
        $inputs = $newsletter.find('input[type="text"]'),
        $required = $newsletter.find('input[name="email"]'),
        $btn = $newsletter.find("button.btn");
    return {
        init: function() {
            RC.lazyloader.load("footer.footer", function() {
                calcHeight()
            }), bindEvents()
        }
    }
}(SPI, jQuery), SPI.header = function(SPI, $) {
    function init() {
        SPI.check.mobileAndTabletcheck() ? bindMobile() : bindDesktop()
    }

    function bindDesktop() {
        screenwidth > mbp && (navCheck(wst), $(window).scroll(function() {
            wst = $(this).scrollTop(), navCheck(wst), $("#social").length && screenwidth > 960 && SPI.social.sidebar(wst)
        })), $(".menu").on("click", function(e) {
            var $el = $(this),
                $droptgt = $el.attr("data-dropdown-target");
            e.preventDefault(), e.stopPropagation(), $overlay.addClass("active"), $header.hasClass("drop") && $el.hasClass("active") ? resetNavStatus() : $header.hasClass("drop") ? ($(".drop-menu").removeClass("active"), $(".menu a, .menu.active").removeClass("active"), $el.addClass("active"), $("#" + $droptgt).addClass("active")) : ($header.addClass("drop"), $el.addClass("active"), $("#" + $droptgt).addClass("active")), navCheck(wst)
        }), $(".drop-menu__nav--item a").hover(function() {
            var $el = $(this),
                $droplinks = $el.parents(".drop-menu__nav").find(".nav-item--link"),
                $link_descriptions = $el.parents(".drop-menu__wrapper").find(".description--item"),
                $link_tgt = $el.attr("data-link-item");
            $link_descriptions.removeClass("active"), $droplinks.removeClass("active"), $el.addClass("active"), $("#" + $link_tgt).addClass("active")
        }), $overlay.on("click", function() {
            resetNavStatus(), ($body.hasClass("search-drop") || $body.hasClass("search")) && ($body.removeClass("search-drop lock"), SPI.search.navbar.quickSearchClear())
        }), $(".nav__new--primary").on("keyup", function(e) {
            e.preventDefault(), 27 === e.originalEvent.keyCode && resetNavStatus()
        }), $(".scroll-link").on("click", function(e) {
            var $anchor = $(this).attr("href");
            e.preventDefault(), $("html, body").animate({
                scrollTop: $($anchor).offset().top
            }, 800), $("#book-club__signup").length && setTimeout(function() {
                $("#book_club_name").focus()
            }, 300)
        }), bindMobile()
    }

    function resetNavStatus() {
        $(".menu a, .menu.active").removeClass("active"), $(".drop-menu").removeClass("active"), $header.removeClass("drop"), $overlay.removeClass("active")
    }

    function bindMobile() {
        var mobileDiff;
        if ($(".nav__new--mobile .expand--toggle").on("click", function(e) {
                var $el = $(this),
                    $togglegroup = $el.parent(".mobile__nav--expand");
                e.preventDefault(), $togglegroup.toggleClass("active")
            }), $st.on("click", function(e) {
                e.preventDefault(), $body.addClass("search-drop"), $body.hasClass("search") ? $body.hasClass("search-results") && $body.hasClass("mobilenav") && ($body.removeClass("lock"), $cover.removeClass("active")) : ($body.addClass("lock"), $overlay.addClass("active")), SPI.check.mobileAndTabletcheck() || $searchform.find("input").focus(), $header.hasClass("drop") && (resetNavStatus(), setTimeout(function() {
                    navMenu($menuli, "off")
                }, 400)), $body.hasClass("mobilenav") && ($body.removeClass("mobilenav"), $hamburger.removeClass("active")), screenwidth > mbp && navCheck(wst), void 0 !== window.ga && ga("send", "event", {
                    eventCategory: "Interaction",
                    eventAction: "Search",
                    eventLabel: "Search opened"
                })
            }), $searchclose.on("click", function(e) {
                e.preventDefault(), $cover.removeClass("active"), SPI.search.navbar.quickSearchClear()
            }), $hamburger.on("click", function(e) {
                e.preventDefault(), $hamburger.hasClass("active") ? ($(this).removeClass("active"), $cover.removeClass("active"), $body.removeClass("lock mobilenav")) : ($(this).addClass("active"), $cover.addClass("active"), $body.addClass("lock mobilenav"), screenheight = $(window).height(), mobileDiff = screenheight - 64, $("#mobilenav nav").prepend($income))
            }), $(window).on("resize", function() {
                if ($body.hasClass("mobilenav") && (screenheight = $(window).height(), mobileDiff = screenheight - 64), $(window).width() <= mbp) {
                    if ($body.hasClass("mobilenav") && ($body.removeClass("mobilenav lock"), $cover.removeClass("active"), $hamburger.removeClass("active")), $header.hasClass("drop")) {
                        var $menu_nav_item = $nav.find(".menu a");
                        resetNavStatus(), $menu_nav_item.removeClass("active"), navMenu($(this), "off")
                    }
                } else $(".header-primary").append($income), navCheck(wst), $(window).scroll(function() {
                    wst = $(this).scrollTop(), navCheck(wst), $("#social").length && screenwidth > 960 && SPI.social.sidebar(wst)
                })
            }), "undefined" != typeof d3 && void 0 !== window.SPI_incomes) {
            var incomeData = window.SPI_incomes.incomeData;
            graph(incomeData)
        }
    }

    function navCheck(windowScrollTop) {
        if (48 >= windowScrollTop) {
            var diff = height - windowScrollTop;
            $header.css({
                height: diff + "px"
            }), $header.hasClass("drop") && $menu.css({
                top: diff + "px"
            }), $header.hasClass("sticky") && $header.removeClass("sticky"), $body.hasClass("search-drop") && $results.css({
                height: "calc(100% - " + diff + "px)"
            })
        } else if ("80px" != $header.css("height") ? $header.css({
                height: "80px"
            }) : $header.hasClass("drop") ? $menu.css({
                top: "80px"
            }) : $body.hasClass("search-drop"), $header.addClass("sticky"), $body.hasClass("single-post") || $body.hasClass("single-podcast") || $body.hasClass("single-askpat")) {
            $postHeader = $header.find("#header-post"), $primary = $header.find(".header-primary");
            var $blogArticle = $("article.main"),
                $blogMain = $blogArticle.find("main"),
                $articleHeader = $blogArticle.find("header"),
                headerHeight = $articleHeader.outerHeight(),
                contentHeight = ($blogArticle.height() - headerHeight - screenheight / 2, $blogMain.height() - screenheight / 2);
            windowScrollTop >= headerHeight - 40 ? ($header.hasClass("post") || ($header.addClass("post"), $primary.fadeOut(200, function() {
                $postHeader.fadeIn(200)
            })), resetNavStatus()) : ($header.removeClass("post"), $postHeader.fadeOut(200, function() {
                $primary.fadeIn(200)
            })), $body.hasClass("single-post") && SPI.blog.progress(windowScrollTop, contentHeight, headerHeight)
        } else if ($body.hasClass("speaking") || $body.hasClass("will-it-fly") || $body.hasClass("page-template-page-bookfeature") || $body.hasClass("page-template-page-smartway") || $body.hasClass("ask-pat") || $body.hasClass("post-type-archive-podcast") || $body.hasClass("post-type-archive-book-club")) {
            $postHeader = $header.find("#header-post"), $primary = $header.find(".header-primary");
            var $main = $("main"),
                $pageHeader = $main.find("> header"),
                pageHeaderHeight = $pageHeader.height();
            windowScrollTop >= pageHeaderHeight ? ($header.hasClass("post") || ($header.addClass("post"), $primary.fadeOut(200, function() {
                $postHeader.fadeIn(200)
            })), resetNavStatus()) : ($header.removeClass("post"), $postHeader.fadeOut(200, function() {
                $primary.fadeIn(200)
            }))
        } else $body.hasClass("live") && (SPI.livepage.livePageFeature.hasClass("is-live") || SPI.livepage.livePageFeature.hasClass("replay")) && (fixedVideoWidth = $("section.two-col-content").eq(0).find(".title").width(), windowScrollTop >= SPI.livepage.livePageFeatHeight / 2 ? SPI.livepage.livePageVideoWrapper.hasClass("fixed") || (SPI.livepage.livePageVideoWrapper.addClass("fixed"), SPI.livepage.livePageVideo.css({
            width: fixedVideoWidth + "px"
        })) : SPI.livepage.livePageVideoWrapper.hasClass("fixed") && (SPI.livepage.livePageVideoWrapper.removeClass("fixed"), SPI.livepage.livePageVideo.css({
            width: ""
        })))
    }

    function navMenu($elem, toggle) {
        "on" == toggle && ($header.addClass("drop"), $elem.addClass("active"), navCheck(wst)), "off" == toggle && ($header.removeClass("drop"), $elem.removeClass("active"), $menu.css("top", ""))
    }

    function getMinMax(v) {
        var incomeVal = window.SPI_incomes.incomeData.map(function(income) {
            return income.y
        });
        return "low" === v ? parseInt(Math.min.apply(null, incomeVal), 10) : "high" === v ? parseInt(Math.max.apply(null, incomeVal), 10) : void 0
    }

    function graph(nodes) {
        function animateLineGraph() {
            var interpolate = d3.scale.linear().domain([0, 1]).range([1, nodes.length + 1]);
            return function(t) {
                var flooredX = Math.floor(interpolate(t)),
                    interpolatedLine = nodes.slice(0, flooredX);
                if (flooredX > 0 && flooredX < nodes.length) {
                    var weight = interpolate(t) - flooredX,
                        weightedLineAverage = nodes[flooredX].y * weight + nodes[flooredX - 1].y * (1 - weight);
                    interpolatedLine.push({
                        x: interpolate(t) - 1,
                        y: weightedLineAverage
                    })
                }
                return lineFunction(interpolatedLine)
            }
        }
        var lineFunction, width = $("#earnings").width(),
            height = $("#earnings").height(),
            min_inc = getMinMax("low") / 1.15,
            max_inc = getMinMax("high") / .87,
            x_scale = d3.scale.linear().domain([0, nodes.length]).range([0, width]),
            y_scale = d3.scale.log().domain([min_inc, max_inc]).range([height, 0]);
        lineFunction = d3.svg.line().x(function(d) {
            return x_scale(d.x)
        }).y(function(d) {
            return y_scale(d.y)
        }), d3.select("#earnings").append("svg").attr("id", "earnings-graph").attr("width", "100%").attr("height", "100%").attr("viewBox", "0 0 " + width + " " + height).attr("preserveAspectRatio", "none"), d3.select("#earnings-graph").append("defs").append("filter").attr("id", "blur-filter").attr("x", "0").attr("y", "0").attr("height", height).attr("width", width), d3.select("#earnings-graph defs filter").append("feGaussianBlur").attr("in", "SourceGraphic").attr("stdDeviation", 2).attr("result", "blur"), d3.select("#earnings-graph defs").append("linearGradient").attr("id", "gradient").attr("x1", "0").attr("x2", "0").attr("y1", "1").attr("y2", "0").attr("height", "100%").attr("width", "100%").attr("spreadMethod", "pad"), d3.select("#earnings-graph defs linearGradient").append("stop").attr("offset", "0%").attr("stop-color", "#b51212").attr("stop-opacity", .25), d3.select("#earnings-graph defs linearGradient").append("stop").attr("offset", "5%").attr("stop-color", "#b51212").attr("stop-opacity", .5), d3.select("#earnings-graph defs linearGradient").append("stop").attr("offset", "15%").attr("stop-color", "#b51212").attr("stop-opacity", 1), d3.select("#earnings-graph defs linearGradient").append("stop").attr("offset", "50%").attr("stop-color", "#fbc731").attr("stop-opacity", 1), d3.select("#earnings-graph defs linearGradient").append("stop").attr("offset", "85%").attr("stop-color", "#68b736").attr("stop-opacity", 1), d3.select("#earnings-graph defs linearGradient").append("stop").attr("offset", "94%").attr("stop-color", "#68b736").attr("stop-opacity", .44), d3.select("#earnings-graph defs linearGradient").append("stop").attr("offset", "100%").attr("stop-color", "#68b736").attr("stop-opacity", .27), d3.select("#earnings-graph").append("path").attr("id", "glow").attr("fill", "none").attr("stroke", "url(#gradient)").attr("stroke-linecap", "round").attr("stroke-width", 3).attr("vector-effect", "non-scaling-stroke").style("filter", "url(#blur-filter)"), d3.select("#earnings-graph").append("path").attr("id", "color").attr("fill", "none").attr("stroke", "url(#gradient)").attr("stroke-linecap", "round").attr("stroke-width", 2).attr("vector-effect", "non-scaling-stroke"), d3.select("#earnings-graph > #glow").transition().duration(4300).attrTween("d", animateLineGraph), d3.select("#earnings-graph > #color").transition().duration(4300).attrTween("d", animateLineGraph)
    }
    var $primary, $postHeader, $body = $("body"),
        $header = $body.find("> header"),
        $nav = $header.find("nav"),
        $menuli = ($nav.find("li"), $nav.find("li.menu a")),
        $menu = $header.find(".drop-menu"),
        $income = $("#income-report"),
        $st = $("#search-trigger"),
        $hamburger = $("#hamburger a"),
        $searchform = $("form#search"),
        $searchclose = $searchform.find("button"),
        $searchcontainer = $("#search-container"),
        $results = $searchcontainer.find("#results"),
        $cover = $("#full-cover"),
        $overlay = $(".page-overlay"),
        height = 128,
        wst = $(window).scrollTop(),
        screenwidth = $(window).width(),
        screenheight = $(window).height(),
        mbp = 800;
    return {
        init: init
    }
}(SPI, jQuery), SPI.home = function(SPI, $) {
    function init() {
        getVisitCount(), bindEvents()
    }

    function getVisitCount() {
        var visitCookie = SPI.util.readCookie("visitor"),
            visitCount = 0;
        visitCount++, visitCookie && (visitCount = visitCookie, visitCount++), SPI.util.createCookie("visitor", visitCount, 180)
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
    }

    function submitForm(ele) {
        var $parentform = $(ele).parents(".header--form"),
            $emailfield = $parentform.find('input[name="email"]')[0],
            $email = $emailfield.value;
        if (validateEmail($email)) {
            var api_key = "ipOTSt9jw1NVy5beGo6nXg",
                formID = "140147",
                formData = $parentform.serialize();
            $.ajax({
                url: "https://api.convertkit.com/forms/" + formID + "/subscribe?k=" + api_key + "&" + formData,
                method: "POST"
            }).done(function(data) {
                void 0 !== window.ga && ga("send", "event", {
                    eventCategory: "Interaction",
                    eventAction: "Optin",
                    eventLabel: "Email"
                }), "created" == data.status ? window.location.href = data.redirect_url : $(ele).before('<p style="font-size: 1em;">Sorry, there was an unknown error. Please try again later!</p>')
            })
        } else $parentform.find(".error").show()
    }

    function bindEvents() {
        $(".header--form").on("click", ".btn--subscribe", function(e) {
            e.preventDefault(), submitForm($(this))
        })
    }
    $("main").attr("data-visitor");
    return {
        init: init
    }
}(SPI, jQuery), SPI.incomeChart = function(SPI, $) {
    function incomeChart(nodes) {
        var lineblur, linecolor, hoverblock, hoverline, incomeHeader, height = ($(".graph-header__chart").width(), $(".graph-header").height());
        lineblur = '<filter id="lineblur" x="0" y="0" height="100%" width="100%"><feGaussianBlur in="SourceGraphic" stdDeviation="10" result="blur"></feGaussianBlur></filter>', linecolor = '<linearGradient id="linecolor" x1="0" x2="0" y1="1" y2="0" spreadMethod="pad"><stop offset="0%" style="stop-color:#b51212;stop-opacity:1"></stop><stop offset="45%" style="stop-color:#fbc731;stop-opacity:1"></stop><stop offset="100%" style="stop-color:#68b736;stop-opacity:1"></stop></linearGradient>', hoverblock = '<linearGradient id="hoverblock" x1="0" x2="0" y1="1" y2="0" spreadMethod="pad"><stop offset="0%" style="stop-color:rgba(150,150,150,0.4);stop-opacity:0.33"></stop><stop offset="100%" style="stop-color:rgba(150,150,150,0.4);stop-opacity:0.02"></stop></linearGradient>', hoverline = '<linearGradient id="hoverline" x1="0" x2="0" y1="1" y2="0" spreadMethod="repeat"><stop offset="0%" style="stop-color:rgba(200,200,200,1);stop-opacity:0.65"></stop><stop offset="100%" style="stop-color:rgba(200,200,200,1);stop-opacity:0"></stop></linearGradient>', incomeHeader = c3.generate({
            bindto: ".graph-header__chart",
            height: height,
            data: {
                x: "date",
                xFormat: "%b %y",
                json: allIncomes,
                keys: {
                    x: "date",
                    value: ["amount"]
                },
                type: "line",
                padding: {
                    left: 0,
                    right: 0
                },
                color: function(color) {
                    return "url('#linecolor')"
                },
                empty: {
                    label: {
                        text: "Loading chart data..."
                    }
                }
            },
            axis: {
                y: {
                    show: !1
                },
                x: {
                    type: "category",
                    inner: !0,
                    padding: {
                        left: 0,
                        right: 0
                    },
                    tick: {
                        centered: !0,
                        fit: !1,
                        outer: !1
                    }
                }
            },
            legend: {
                show: !1
            },
            tooltip: {
                contents: function(d) {
                    var currVal = d[0].value,
                        formatVal = d3.format("$,")(currVal);
                    return '<div class="chart-tooltip">' + formatVal + "</div>"
                }
            },
            point: {
                focus: {
                    expand: {
                        r: 7.5
                    }
                }
            },
            oninit: function() {
                this.svg[0][0].getElementsByTagName("defs")[0].innerHTML += lineblur + linecolor + hoverblock + hoverline
            },
            onrendered: function() {
                getChartLinks(allIncomes), bindChartLinks()
            }
        })
    }

    function getChartLinks(data) {
        data.forEach(function(item) {
            chartLinks.push(item.link)
        })
    }

    function bindChartLinks() {
        $(".c3-event-rect").on("click", function(e) {
            var clicked_item = $(this).index();
            e.preventDefault(), window.open(chartLinks[clicked_item])
        })
    }
    var chartLinks = [];
    return {
        init: function() {
            "undefined" != typeof d3 && incomeChart(allIncomes)
        }
    }
}(SPI, jQuery), SPI.inlineform = function(SPI, $) {
    function init() {
        bindEvents()
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
    }

    function bindEvents() {
        $("body").on("click", "#form__signup__btn", function(e) {
            var email = $inlineFormEmail.val(),
                formID = $(this).attr("data-formID");
            if (e.preventDefault(), validateEmail(email)) {
                $errorField.hasClass("has-error") && ($errorField.removeClass("has-error"), $inlineFormEmail.removeClass("has-error"));
                var api_key = "ipOTSt9jw1NVy5beGo6nXg",
                    formData = $inlineForm.serialize();
                $.ajax({
                    url: "https://api.convertkit.com/forms/" + formID + "/subscribe?k=" + api_key + "&" + formData,
                    method: "POST"
                }).done(function(data) {
                    "created" == data.status ? ($(".feat-content").addClass("subscribed"), $inlineFormField.val(""), $inlineFormEmail.val(""), window.location.href = data.redirect_url, void 0 !== window.ga && ga("send", "event", {
                        eventCategory: "Product",
                        eventAction: "Product exit",
                        eventLabel: "the Smart Way"
                    })) : ($errorField.addClass("has-error"), $inlineFormEmail.addClass("has-error"))
                })
            } else $errorField.addClass("has-error"), $inlineFormEmail.addClass("has-error")
        })
    }
    var $inlineForm = ($("body"), $("#inline__signup")),
        $inlineFormField = $("#inline_firstNameField"),
        $inlineFormEmail = $("#inline_emailField"),
        $errorField = $inlineForm.find("#form__error__msg");
    return {
        init: init
    }
}(SPI, jQuery), SPI.journey = function(SPI, $) {
    function init() {
        $("body.resources").length ? isResources = !0 : $("body.home").length && (isHome = !0);
        var step;
        SPI.util.viewport().width >= 768 ? (cookie.length ? journey(cookie, !1) : $grab.one("click", function() {
            journey("lets-start-something-new"), $clear.removeClass("hide"), isResources && setTimeout(function() {
                SPI.contentSlider.size($journey.closest("li"))
            }, 400)
        }), $steps.on("click", function() {
            var newLeft = $(this).attr("data-left");
            $grab.css({
                left: "calc(" + newLeft + "% - 16px)"
            }), step = $(this).attr("data-step"), isHome ? filterHome(step, 6) : isResources ? filterResources(step) : getPostsByCategory(step)
        }), $clear.on("click", function(e) {
            e.preventDefault(), $journey.find("div").removeClass("fade"), setTimeout(function() {
                $journey.removeClass("active"), $grab.css("left", ""), $clear.addClass("hide"), $grab.one("click", function() {
                    journey("lets-start-something-new"), $clear.removeClass("hide"), isResources && setTimeout(function() {
                        SPI.contentSlider.size($journey.closest("li"))
                    }, 400)
                })
            }, 400), handleCookie(), isHome && filterHome("", 3), isResources ? filterResources() : getPostsByCategory()
        })) : $steps.on("click", function() {
            $steps.removeClass("active"), $(this).addClass("active"), step = $(this).hasClass("all") ? "" : $(this).attr("data-step"), isHome ? filterHome(step, 6) : isResources ? filterResources(step) : getPostsByCategory(step)
        })
    }

    function journey(category, reload) {
        "undefined" == typeof reload && (reload = !0), $grab.css({
            left: "calc(" + key[category] + "% - 16px)"
        }), $journey.addClass("active"), setTimeout(function() {
            $journey.find("div").addClass("fade")
        }, 100), setTimeout(function() {
            slideWidth = $slide.width(), gridX = .2 * slideWidth, drag(), $grab.css({
                transition: "left .3s ease-in-out"
            }), isHome ? filterHome(category, 6) : isResources ? filterResources(category) : reload && getPostsByCategory(category)
        }, 2e3)
    }

    function getOffset(left) {
        var offset = Math.round((left - 16) / slideWidth * 100) + 3;
        return offset >= 9 && 11 >= offset ? offset = 10 : offset >= 29 && 31 >= offset ? offset = 30 : offset >= 49 && 51 >= offset ? offset = 50 : offset >= 69 && 71 >= offset ? offset = 70 : offset >= 89 && 91 >= offset && (offset = 90), offset
    }

    function drag() {
        $grab.draggable({
            axis: "x",
            containment: "parent",
            grid: [gridX, 0],
            stop: function(event, ui) {
                percentageLeft = getOffset(ui.position.left), step = $steps.filter('[data-left="' + percentageLeft + '"]').attr("data-step"), isHome ? filterHome(step, 6) : isResources ? filterResources(step) : getPostsByCategory(step)
            }
        })
    }

    function getPostsByCategory(category) {
        var args;
        "undefined" == typeof category ? (category = "", args = JSON.stringify({
            posts_per_page: ppp,
            post_type: ["post", "podcast", "tv", "income-reports", "tutorial"]
        }), history.replaceState({}, 1, window.location.pathname.replace(/\d\//, "")), $("section.index").attr("data-page", 1)) : (handleCookie(category), $index.attr("data-filter", category), args = JSON.stringify({
            posts_per_page: ppp,
            category_name: category,
            post_type: ["post", "podcast", "tv", "income-reports", "tutorial"]
        }), history.replaceState({}, 1, window.location.pathname.replace(/\d\//, "")), $("section.index").attr("data-page", 1)), $.ajax({
            type: "GET",
            url: "/api/filtering/",
            data: {
                data: args
            },
            dataType: "json",
            cache: !1
        }).done(function(data) {
            var postCount = data.posts.length;
            if ("none" != data.posts) {
                $articles.fadeOut();
                for (var articles = "", i = 0; postCount > i; i++) articles += SPI.blog.buildArticle(data.posts[i], category);
                $loadmore.before(articles), $articles = $grid.find("article"), setTimeout(function() {
                    $articles.filter(".loaded").fadeIn(), $articles.not(".loaded").remove(), $articles.filter(".loaded").removeClass("loaded")
                }, 400)
            }
        })
    }

    function filterResources(category) {
        "undefined" == typeof category ? (category = "", $resources.fadeIn(), $(".content-slider-nav").find("li").eq(2).find("a").hasClass("active") && setTimeout(function() {
            SPI.contentSlider.size($journey.closest("li"))
        }, 800)) : (handleCookie(category), $resources.filter('[data-step="' + category + '"]').fadeIn(), $resources.not('[data-step="' + category + '"]').fadeOut(), $(".content-slider-nav").find("li").eq(2).find("a").hasClass("active") && setTimeout(function() {
            SPI.contentSlider.size($journey.closest("li"))
        }, 800))
    }

    function filterHome(category, ppp) {
        var args;
        "undefined" == typeof category ? (category = "", args = JSON.stringify({
            posts_per_page: ppp,
            post_type: ["post", "podcast", "tv", "income-reports", "tutorial"]
        })) : (handleCookie(category), args = JSON.stringify({
            posts_per_page: ppp,
            category_name: category,
            post_type: ["post", "podcast", "tv", "income-reports", "tutorial"]
        })), $.ajax({
            type: "GET",
            url: "/api/filtering/",
            data: {
                data: args
            },
            dataType: "json",
            cache: !1
        }).done(function(data) {
            data.posts.length;
            if ("none" != data.posts) {
                var $homePostsContainer = $("#home-recent-posts"),
                    $homeRecent = $homePostsContainer.find(".std-pad"),
                    $homeGrid = $homePostsContainer.find(".std-grid"),
                    $articles = $homeGrid.find("article"),
                    articles = "",
                    articles1 = "",
                    articles2 = "";
                if (category.length > 1) {
                    $homeRecent.hasClass("hidden") || $homeRecent.addClass("hidden"), $articles.fadeOut();
                    for (var i = 0; 6 > i; i++) 3 > i ? articles1 += SPI.blog.buildArticle(data.posts[i], category) : articles2 += SPI.blog.buildArticle(data.posts[i], category);
                    $homeGrid = $homePostsContainer.find(".std-grid"), $homeGrid.eq(0).html(articles1), $homeGrid.eq(1).html(articles2), $articles = $homeGrid.find("article"), setTimeout(function() {
                        $articles.filter(".loaded").fadeIn(), $articles.not(".loaded").remove(), $articles.filter(".loaded").removeClass("loaded")
                    }, 400)
                } else {
                    $homeRecent.removeClass("hidden"), $homeGrid = $homePostsContainer.find(".std-grid"), $homeGrid.eq(1).remove(), $homeGrid.eq(0).after('<div class="std-grid"></div>'), $articles.fadeOut();
                    for (var j = 0; 3 > j; j++) articles += SPI.blog.buildArticle(data.posts[j], category);
                    $homeGrid.html(articles), $articles = $homeGrid.find("article"), setTimeout(function() {
                        $articles.filter(".loaded").fadeIn(), $articles.not(".loaded").remove(), $articles.filter(".loaded").removeClass("loaded")
                    }, 400)
                }
            }
        })
    }

    function handleCookie(category) {
        cookie = "undefined" == typeof category ? "journey=;path=/;expires=Fri, 31 Dec 1970 23:59:59 GMT" : "journey=" + category + ";path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT", document.cookie = cookie
    }
    var $index = ($("body"), $(".index")),
        $grid = $index.find(".std-grid"),
        $articles = $grid.find("article"),
        $journey = $(".journey"),
        $steps = $journey.find("> div"),
        $slide = $journey.find(".slide"),
        $grab = $slide.find(".grab"),
        $clear = $("#clear-journey-filter"),
        $loadmore = $(".blog__load-more"),
        slideWidth = $slide.width(),
        gridX = .2 * slideWidth,
        ppp = 10,
        key = {
            "lets-start-something-new": 10,
            "lets-create-stuff-that-works": 30,
            "lets-launch-it": 50,
            "lets-focus-on-growth": 70,
            "lets-optimize-your-work": 90
        },
        cookie = $journey.attr("data-step"),
        isResources = !1,
        isHome = !1,
        $resources = $(".resource-category");
    return {
        init: init
    }
}(SPI, jQuery), SPI.livepage = function(SPI, $) {
    function runCountdownTimer() {
        SPI.util.viewport().width >= 690 && $("#countdown-clock").FlipClock(SPI.liveDate, {
            clockFace: "DailyCounter",
            countdown: !0
        })
    }

    function init() {
        if (SPI.util.viewport().width > 768 && ($livePageFeature.hasClass("is-live") || $livePageFeature.hasClass("replay")) ? $livePageVideo.css({
                maxWidth: lppWidth + "px"
            }) : $livePageFeature.hasClass("scheduled") && SPI.liveDate.length > 0 && runCountdownTimer(), SPI.liveDate > 0) {
            var resizeTimer = SPI.util.debounce(runCountdownTimer, 250);
            window.addEventListener("resize", resizeTimer)
        }
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
    }

    function bindEvents() {
        $("body").on("click", "#live__btn", function(e) {
            e.preventDefault();
            var email = $modalform_email.val();
            if (validateEmail(email)) {
                $modalform_email.next().hasClass("error") && $modalform.removeClass("invalid has-error");
                var api_key = "ipOTSt9jw1NVy5beGo6nXg",
                    formID = "68117",
                    formData = $modalform.serialize();
                $.ajax({
                    url: "https://api.convertkit.com/forms/" + formID + "/subscribe?k=" + api_key + "&" + formData,
                    method: "POST"
                }).done(function(data) {
                    void 0 !== window.ga && ga("send", "event", {
                        eventCategory: "Product",
                        eventAction: "Product exit",
                        eventLabel: "Live Webinar Reminder Signup"
                    }), "created" == data.status ? ($(".feat-content").addClass("subscribed"), $modalform.removeClass("invalid has-error"), $("#liveform-modal").remodal().close()) : $modalform.removeClass("invalid").addClass("has-error")
                })
            } else $modalform.removeClass("has-error").addClass("invalid")
        }), $("#liveform-modal").length && $modalform.on("click", ".close", function(e) {
            e.preventDefault(), $("#liveform-modal").remodal().close()
        })
    }
    var $modalform, $body = $("body"),
        $livePageFeature = $body.find("#featured-post"),
        livePageFeatHeight = $livePageFeature.height(),
        $livePageVideoWrapper = $livePageFeature.find(".feat-media"),
        $livePageVideo = $livePageVideoWrapper.find("> div"),
        lppWidth = $livePageVideoWrapper.find("> img").width();
    if ($("#liveform-modal").length) {
        $modalform = $("#live__signup");
        var $modalform_email = ($modalform.find('input[type="text"]'), $modalform.find('input[name="email"]'))
    }
    return {
        init: init,
        bindEvents: bindEvents(),
        livePageFeature: $livePageFeature,
        livePageFeatHeight: livePageFeatHeight,
        livePageVideoWrapper: $livePageVideoWrapper,
        livePageVideo: $livePageVideo
    }
}(SPI, jQuery), SPI.blog.loadMore = function(SPI, $) {
    function loadPosts(archiveType) {
        archiveType = "undefined" != typeof archiveType ? archiveType : !1;
        var _data = {
            order: "DESC",
            orderby: "date",
            posts_per_page: paginate_by,
            post_type: ["post", "podcast", "tv", "income-reports", "tutorial"],
            offset: Number($index.attr("data-page")) * paginate_by
        };
        "tag" == archiveType ? _data.tag = $index.attr("data-filter") : _data.category_name = $index.attr("data-filter"), $.ajax({
            type: "GET",
            url: "/api/filtering/",
            data: {
                data: JSON.stringify(_data)
            },
            dataType: "json",
            cache: !1
        }).done(function(data) {
            if ("none" !== data.posts) {
                var new_page = Number($index.attr("data-page")) + 1,
                    postCount = data.posts.length,
                    articles = "";
                $index.attr("data-page", new_page), "category" !== blogUrlParts[0] && "tag" !== blogUrlParts[0] || "page" == blogUrlParts[2] || (new_page = "page/" + new_page), history.replaceState({}, new_page, window.location.pathname.replace(/\/[0-9]*\//i, "/") + new_page + "/"), blogUrlParts = RC.utils.urlParts();
                for (var i = 0; postCount > i; i++) articles += SPI.blog.buildArticle(data.posts[i], "");
                $moreBtn.before(articles), $(".index .std-grid article").filter(".loaded").removeClass("loaded").fadeIn(), paginate_by > postCount && $moreBtn.addClass("hide")
            }
            blogLastPage > $index.attr("data-page") && refire ? loadPosts() : refire = !1
        }).fail(function(data) {})
    }

    function loadArchive() {
        var _data = {
            order: "DESC",
            orderby: "date",
            posts_per_page: paginate_by,
            category_name: $index.attr("data-filter"),
            post_type: $index.attr("data-post-type"),
            offset: Number($index.attr("data-page")) * paginate_by
        };
        $.ajax({
            type: "GET",
            url: "/api/filtering/",
            data: {
                data: JSON.stringify(_data)
            },
            dataType: "json",
            cache: !1
        }).done(function(data) {
            if ("none" !== data.posts) {
                var new_page = Number($index.attr("data-page")) + 1,
                    postCount = data.posts.length,
                    articles = "";
                $index.attr("data-page", new_page), "tv" === blogUrlParts[0] && "page" != blogUrlParts[1] && (new_page = "page/" + new_page), blogUrlParts = RC.utils.urlParts();
                for (var i = 0; postCount > i; i++) articles += SPI.blog.buildArticle(data.posts[i], "");
                $(".archive--load_more").before(articles), $(".index .std-grid article").filter(".loaded").removeClass("loaded").fadeIn(), paginate_by > postCount && $(".archive--load_more").addClass("hide")
            }
        }).fail(function(data) {})
    }

    function loadArchiveBook() {
        var _data = {
            order: "DESC",
            orderby: "date",
            posts_per_page: paginate_by,
            category_name: $index.attr("data-filter"),
            post_type: $index.attr("data-post-type"),
            offset: Number($index.attr("data-page")) * paginate_by
        };
        $.ajax({
            type: "GET",
            url: "/api/filtering/",
            data: {
                data: JSON.stringify(_data)
            },
            dataType: "json",
            cache: !1
        }).done(function(data) {
            if ("none" !== data.posts) {
                var new_page = Number($index.attr("data-page")) + 1,
                    postCount = data.posts.length,
                    articles = "";
                $index.attr("data-page", new_page), "book-club" == blogUrlParts[0] && "page" != blogUrlParts[1] && (new_page = "page/" + new_page), blogUrlParts = RC.utils.urlParts();
                for (var i = 0; postCount > i; i++) articles += SPI.blog.buildBookArticle(data.posts[i], "");
                $(".archive-nogrid--load_more").before(articles), $(".index article").filter(".loaded").removeClass("loaded").fadeIn(),
                    paginate_by > postCount && $(".archive-nogrid--load_more").addClass("hide")
            }
        }).fail(function(data) {})
    }

    function bindEvents() {
        "blog" == blogUrlParts[blogUrlPartsLast] || "tv" == blogUrlParts[0] || "book-club" == blogUrlParts[0] || "tutorials" == blogUrlParts[0] || "podcasts" == blogUrlParts[0] || "archive" == blogUrlParts[0] || "category" == blogUrlParts[0] && "page" !== blogUrlParts[2] || (blogLastPage = Number(blogUrlParts[blogUrlPartsLast]), refire = !0, loadPosts()), $(".blog__load-more").on("click", function() {
            loadPosts()
        }), $(".std-archive--load_more").on("click", function() {
            "tag" == $(this).attr("data-type") ? loadPosts("tag") : loadPosts()
        }), $(".archive--load_more").on("click", function() {
            loadArchive()
        }), $(".archive-nogrid--load_more").on("click", function() {
            loadArchiveBook()
        })
    }
    var paginate_by, $index, $moreBtn, blogUrlParts = RC.utils.urlParts(),
        blogUrlPartsLast = blogUrlParts.length - 1,
        blogLastPage = 1,
        refire = !1;
    return {
        init: function() {
            paginate_by = Number($("section.index").attr("data-paginate-by")), $index = $($("section.index").length ? "section.index" : "section.index"), $moreBtn = $($(".blog__load-more").length ? ".blog__load-more" : ".std-archive--load_more"), bindEvents()
        }
    }
}(SPI, jQuery), SPI.page = function(SPI, $) {
    function init() {
        footerTop = $footer.offset().top, ww > 768 && stdpHeight > sbHeight && wh >= sbfOffset && $window.on("scroll", function() {
            wst = $window.scrollTop(), sticky(wst)
        })
    }

    function sticky(scrollTop) {
        if (scrollTop > sbFixedPointStart)
            if ($sbFeatures.hasClass("fixed") || $sbFeatures.addClass("fixed"), scrollTop > sbFixedPointEnd) {
                $sbFeatures.hasClass("parked") || $sbFeatures.addClass("parked");
                var sB = scrollTop + wh,
                    parkedPos = sB - footerTop + footerPadd;
                $sbFeatures.css({
                    bottom: parkedPos + "px"
                })
            } else $sbFeatures.hasClass("parked") && ($sbFeatures.removeClass("parked"), $sbFeatures.css({
                bottom: "auto"
            }));
        else $sbFeatures.hasClass("fixed") && $sbFeatures.removeClass("fixed")
    }
    var $window = $(window),
        ww = $window.width(),
        wh = $window.height(),
        wst = 0,
        $stdpage = $(".stdpage"),
        stdpHeight = $stdpage.height(),
        $sidebar = $("aside#sidebar"),
        sbHeight = $sidebar.height(),
        $sbFeatures = $sidebar.find("#sidebar-features"),
        sbFixedPointStart = $sbFeatures.length ? $sbFeatures.offset().top - 88 : 0,
        sbfOffset = $sbFeatures.height() + 96,
        $footer = $("footer.footer"),
        footerTop = 0,
        footerPadd = 40,
        sbFixedPointEnd = footerTop - sbfOffset - footerPadd;
    return {
        init: init
    }
}(SPI, jQuery), SPI.podcasts = function(SPI, $) {
    function loadArchive() {
        var _data = {
            order: "DESC",
            orderby: "date",
            posts_per_page: paginate_by,
            post_type: $index.attr("data-post-type"),
            offset: Number($index.attr("data-page")) * paginate_by
        };
        $.ajax({
            type: "GET",
            url: "/api/filtering/",
            data: {
                data: JSON.stringify(_data)
            },
            dataType: "json",
            cache: !1
        }).done(function(data) {
            if ("none" !== data.posts) {
                var new_page = Number($index.attr("data-page")) + 1,
                    postCount = data.posts.length,
                    articles = "";
                $index.attr("data-page", new_page), blogUrlParts = RC.utils.urlParts();
                for (var i = 0; postCount > i; i++) articles += SPI.blog.buildArticle(data.posts[i], "bordered");
                $("section.border-grid .grid-group").append(articles), $(".bordered.loaded").removeClass("loaded").show(), window.setTimeout(function() {
                    $(".content-slider-container").height($("section.border-grid").height() + 50)
                }, 600), paginate_by > postCount && $moreBtn.addClass("hide")
            }
        }).fail(function(data) {})
    }

    function bindEvents() {
        $(".podcasts--load_more").on("click", function() {
            loadArchive()
        })
    }
    var paginate_by, $index, $moreBtn, blogUrlParts = RC.utils.urlParts();
    blogUrlParts.length - 1;
    return {
        init: function() {
            paginate_by = Number($("section.border-grid").attr("data-paginate-by")), $index = $("section.border-grid"), $moreBtn = $(".podcasts--load_more"), bindEvents()
        }
    }
}(SPI, jQuery), SPI.post = function(SPI, $) {
    function init() {
        var $allVideos = $('.content iframe[src*="youtube.com"], .content iframe[src*="youtu.be"]'),
            $fluidEl = $(".content");
        $allVideos.each(function() {
            $(this).data("aspectRatio", this.height / this.width).removeAttr("height").removeAttr("width")
        }), $(window).resize(function() {
            var newWidth = $fluidEl.width();
            $allVideos.each(function() {
                var $el = $(this);
                $el.width(newWidth).height(newWidth * $el.data("aspectRatio"))
            })
        }).resize()
    }
    return {
        init: init
    }
}(SPI, jQuery), SPI.search.navbar = function(SPI, $) {
    function init() {
        $("body").hasClass("search") || (autoSearch = autocomplete("#searchbar__auto", {
            hint: !1,
            debug: !0,
            appendTo: "#searchbar__results",
            minLength: quickSearchMinEntry,
            openOnFocus: !1
        }, [{
            source: SPI.util.debounce(autocomplete.sources.hits(algoliaIndex, {
                hitsPerPage: 10
            }), 400),
            templates: {
                header: '<h5 class="searchbar__drop--title" data-label="' + fullSearchText + '">Search results</h5>',
                suggestion: function(suggestion) {
                    var hiddenPost = !1,
                        postImg = suggestion.images.grid ? suggestion.images.grid.url : $imgPlaceholder,
                        postCategories = suggestion.taxonomies.length ? suggestion.taxonomies.category : [];
                    return (suggestion.hidden_post === !0 || "private" !== suggestion.publish_status && suggestion.show_private_post === !0 || suggestion.hidden_post === !1 && -1 !== hiddenPostTypes.indexOf(suggestion.post_type) || suggestion.hidden_post === !1 && -1 !== postCategories.indexOf(hiddenCategory)) && (hiddenPost = !0), hiddenPost !== !0 ? quickSearchTemplate(suggestion, postImg) : void 0
                },
                empty: '<div class="searchbar__drop--empty"><p>No matching items found</p></div>'
            }
        }]).on("autocomplete:opened", function(event) {}).on("autocomplete:shown", function(event) {
            $searchLoader.addClass("active"), quickSearchLoaded()
        }).on("autocomplete:updated", function(event) {
            $searchLoader.addClass("active"), quickSearchLoaded()
        }).on("autocomplete:closed", function(event) {
            $searchLoader.removeClass("active")
        })), bindEvents()
    }

    function quickSearchClear() {
        SPI.search.autoEnabled = !1, SPI.search.referral = !0, sessionStorage.removeItem("algSearchTerm"), void 0 !== autoSearch && autoSearch.autocomplete.close(), $("body").hasClass("search") || ($("#searchbar__auto").val("").blur(), $("form#search")[0].reset(), $(".page-overlay.active").removeClass("active")), $("body").removeClass("search-drop lock"), $("#search").removeClass("active entry")
    }

    function quickSearchShowDropdown(entry) {
        SPI.search.autoEnabled === !0 && $autoform.addClass("active entry")
    }

    function quickSearchHideDropdown(timer) {
        setTimeout(function() {
            $("#search").removeClass("entry")
        }, timer)
    }

    function quickSearchTrigger(keynum) {
        if ($("body").hasClass("search-drop")) {
            var currentTerm = $("#searchbar__auto").val();
            switch (keynum) {
                case 27:
                    quickSearchClear();
                    break;
                case 13:
                    SPI.search.referral = !0, $searchLoader.addClass("active"), sessionStorage.setItem("algSearchTerm", currentTerm)
            }
        }
    }

    function quickSearchLoaded() {
        setTimeout(function() {
            $searchLoader.removeClass("active")
        }, 400), $input.focus()
    }

    function quickSearchTemplate(obj, image) {
        var post_type = obj.post_type.replace("-", " "),
            permalink = "private" === obj.publish_status && obj.hidden_post === !1 ? obj.permalink_public : obj.permalink,
            highlight = obj._snippetResult.content.value.length > 0 ? obj._snippetResult.content.value : obj._snippetResult.post_title.value,
            postTitle = "",
            resultsTemplate = "";
        return postTitle = "book-club" === obj.post_type ? obj.book_title + " by " + obj.book_author : obj.post_title.indexOf("Archive") >= 0 ? obj.post_title.replace("Archive", "") : obj.post_title, resultsTemplate = '<a href="' + permalink + '" class="searchbar__group--item"><div class="searchbar__group--image"><img src="' + image + '" ></div><div class="searchbar__group--description"><p class="description--meta">' + post_type + '</p><h5 class="description--title">' + postTitle + '</h5><p class="description--snippet">' + highlight + "</p></div></a>"
    }

    function bindEvents() {
        $input.on("keyup", function(e) {
            var $entryKey = e.originalEvent.keyCode,
                $query_length = $input.val().length + 1;
            quickSearchTrigger($entryKey), $query_length > quickSearchMinEntry ? (SPI.search.autoEnabled = !0, quickSearchShowDropdown($entryKey)) : (SPI.search.autoEnabled = !1, $autoform.removeClass("active entry"))
        }), $(".searchbar__group--item").on("click", function() {
            quickSearchHideDropdown(600)
        }), $autoform.on("submit", function(e) {
            var searchTerm = $input.val();
            e.preventDefault(), quickSearchHideDropdown(600), window.location.origin || (window.location.origin = window.location.protocol + "//" + window.location.hostname + (window.location.port ? ":" + window.location.port : "")), window.location = window.location.origin + "?s=" + searchTerm
        })
    }
    var autoSearch, $autoform = $(".searchbar__nav"),
        $input = $autoform.find("#searchbar__auto"),
        $searchLoader = $(".searchbar__loading"),
        quickSearchMinEntry = 3,
        $imgPlaceholder = window.SPI.search.defaultImage,
        fullSearchText = "(Hit &lsquo;Enter&rsquo; key to see all results)",
        algoliaClient = algoliasearch(window.algolia.application_id, window.algolia.search_api_key),
        algoliaIndex = algoliaClient.initIndex("spi_searchable_posts"),
        hiddenPostTypes = window.SPI.search.hiddenPostTypes,
        hiddenCategory = "Outdated";
    return {
        init: init,
        quickSearchClear: quickSearchClear
    }
}(SPI, jQuery), SPI.search.takeover = function(SPI, $) {
    function init() {
        $body.hasClass("search") && ($body.addClass("search-drop"), $overlay.addClass("active"), $(".flux-capacitor").addClass("active"), $input.val(savedTerm), sessionStorage.removeItem("algSearchTerm")), bindEvents()
    }

    function hideSinglePage() {
        var $pageItem = $(".ais-pagination--item__page"),
            $paginationCount = $pageItem.length;
        1 >= $paginationCount ? $(".ais-pagination--item__page").addClass("hidden") : $(".ais-pagination--item__page").removeClass("hidden")
    }

    function closeMobileFilters() {
        $searchFilterGroups.removeClass("active"), $body.removeClass("lock"), $searchFilters.removeClass("active")
    }

    function toggleMobileFilters() {
        var $el = $(this),
            $filterTgt = ($el.parents(".instantsearch__filters--group"), $el.attr("data-filtergroup"));
        $searchFilterGroups.removeClass("active"), $body.hasClass("lock") ? closeMobileFilters() : ($body.addClass("lock"), $searchFilters.addClass("active"), $("#" + $filterTgt).addClass("active"))
    }

    function bindEvents() {
        $mobileFilterBtn.on("click", toggleMobileFilters), $(document).on("click", ".lock .filter--title", function() {
            closeMobileFilters()
        }), $(document).on("click", ".search.lock .ais-refinement-list--item, .search.lock .ais-menu--item", function() {
            closeMobileFilters()
        })
    }
    var $body = $("body"),
        $input = ($("#full-cover"), $("#searchbar__auto")),
        savedTerm = ($input.val(), sessionStorage.getItem("algSearchTerm") ? sessionStorage.getItem("algSearchTerm") : ""),
        $overlay = (window.location.search.replace("?s=", ""), $(".page-overlay")),
        $searchFilters = $("#instantsearch__filters"),
        $searchFilterGroups = $(".instantsearch__filters--group"),
        $mobileFilterBtn = $(".btn--mobiletoggle");
    return {
        init: init,
        hidePagination: hideSinglePage
    }
}(SPI, jQuery), SPI.smartway = function(SPI, $) {
    function init() {
        $modalform_field = $("#ck_firstNameField"), $modalform_email = $("#ck_emailField")
    }

    function validateEmail(email) {
        var re = /\S+@\S+\.\S+/;
        return re.test(email)
    }

    function bindEvents() {
        $("body").on("click", "#smartway__signup__btn", function(e) {
            var email = $modalform_email.val(),
                formID = $(this).attr("data-formID");
            if (e.preventDefault(), validateEmail(email)) {
                $modalform_email.next().hasClass("error") && $modalform_email.next().hide();
                var api_key = "ipOTSt9jw1NVy5beGo6nXg",
                    formData = $modalform.serialize();
                $.ajax({
                    url: "https://api.convertkit.com/forms/" + formID + "/subscribe?k=" + api_key + "&" + formData,
                    method: "POST"
                }).done(function(data) {
                    "created" == data.status ? ($(".feat-content").addClass("subscribed"), $modalform_field.val(""), $modalform_email.val(""), $("#smartway-modal").remodal().close(), window.location.href = data.redirect_url, void 0 !== window.ga && ga("send", "event", {
                        eventCategory: "Product",
                        eventAction: "Product exit",
                        eventLabel: "the Smart Way"
                    })) : $modalform_email.next().addClass("error")
                })
            } else $modalform_email.next(".error").show()
        }), $(".modal-close-btn").on("click", function(e) {
            e.preventDefault(), $(this).parents(".remodal").remodal().close()
        })
    }
    var $modalform_field, $modalform_email, $modalform = ($("body"), $("#smartway__signup"));
    return {
        init: init,
        bindEvents: bindEvents()
    }
}(SPI, jQuery), SPI.social = function(SPI, $) {
    function init() {
        $socialBtn.on("click", function(e) {
            e.preventDefault(), pop($(this).attr("href"))
        })
    }

    function sidebar(wst) {
        var $article = $("article.main"),
            headerHeight = $article.find("header").outerHeight(),
            footerPos = $article.find("footer").offset().top - 122,
            socialHeight = $social.height();
        wst >= headerHeight - 40 && footerPos - socialHeight > wst ? $social.addClass("show") : $social.removeClass("show")
    }

    function pop(url) {
        window.open(url, "mywin", "left=20,top=20,width=560,height=500,toolbar=1,resizable=0")
    }
    var $social = $("#social"),
        $socialBtn = $("#social .facebook, #social .twitter, #social .google");
    return {
        init: init,
        sidebar: sidebar,
        pop: pop
    }
}(SPI, jQuery), SPI.tracking = function(SPI, $) {
    function init() {
        $('a[target="_blank"], a[rel="outbound"], .btn[href*="http"], .btn-small[href*="http"], .link-trk').not('.modal-close-btn, .close, [class$="--load_more"]').on("click", function() {
            var $link_domain = $(this).attr("href"),
                $affiliate_bluehost = "bluehost",
                $affiliate_leadpages = "smartpassiveincome.com/leadpages",
                $affiliate_convertkit = "convertkit",
                $affiliate_ninetynine = "99designs",
                $affiliate_sidekick = "sidekick",
                $affiliate_sanebox = "sanebox",
                $affiliate_spp = "smartpodcastplayer",
                $affiliate_athgreen = "athleticgreens"; - 1 !== $link_domain.indexOf($affiliate_bluehost) ? sendTrackingEvent($affiliate_bluehost) : -1 !== $link_domain.indexOf($affiliate_leadpages) ? sendTrackingEvent($affiliate_leadpages) : -1 !== $link_domain.indexOf($affiliate_convertkit) ? sendTrackingEvent($affiliate_convertkit) : -1 !== $link_domain.indexOf($affiliate_ninetynine) ? sendTrackingEvent($affiliate_ninetynine) : -1 !== $link_domain.indexOf($affiliate_sidekick) ? sendTrackingEvent($affiliate_sidekick) : -1 !== $link_domain.indexOf($affiliate_sanebox) ? sendTrackingEvent($affiliate_sanebox) : -1 !== $link_domain.indexOf($affiliate_spp) ? sendTrackingEvent($affiliate_spp) : -1 !== $link_domain.indexOf($affiliate_athgreen) && sendTrackingEvent($affiliate_athgreen)
        }), $will_it_fly.length && ($("#wif-start-course").on("click", function() {
            void 0 !== window.ga && ga("send", "event", {
                eventCategory: "Product",
                eventAction: "Product exit",
                eventLabel: "Teachable courses"
            })
        }), $("#wif-get-audiobook").on("click", function() {
            void 0 !== window.ga && ga("send", "event", {
                eventCategory: "Product",
                eventAction: "Product exit",
                eventLabel: "Will it Fly - Audible"
            })
        }), $(".headline-btn, #speaking-header__cta .btn").on("click", function() {
            void 0 !== window.ga && ga("send", "event", {
                eventCategory: "Product",
                eventAction: "Product exit",
                eventLabel: "Will it Fly - Amazon"
            })
        })), $search_sidebar.length && $("#search-container .sidebar a").on("click", function() {
            void 0 !== window.ga && ga("send", "event", {
                eventCategory: "Interaction",
                eventAction: "Search",
                eventLabel: "Search quick link clicked"
            })
        }), $(".stdpage").length && $(".link-trk").not('.modal-close-btn, .close, [class$="--load_more"]').on("click", function() {
            if (void 0 !== window.ga) {
                var $link_domain = $(this).attr("href"),
                    $leadpages_affilate_marketing = "leadpages.co/affiliate-marketing-tsw"; - 1 !== $link_domain.indexOf($leadpages_affilate_marketing) && ga("send", "event", {
                    eventCategory: "Product",
                    eventAction: "Product exit",
                    eventLabel: "Affiliate Marketing the Smart Way"
                })
            }
        })
    }

    function sendTrackingEvent(itemlabel) {
        if (void 0 !== window.ga) {
            ga("send", "event", {
                eventCategory: "Affiliate",
                eventAction: "Exit",
                eventLabel: itemlabel
            })
        }
    }
    var $will_it_fly = $(".page-template-page-willitfly-php"),
        $search_sidebar = $("#search-container").find(".sidebar");
    return {
        init: init
    }
}(SPI, jQuery), SPI.util = function(SPI, $) {
    function init() {
        $('a:not([href*="' + window.location.host + '"]):not([href^="#"]):not([href^="/"]):not([href^="mailto:"]):not([href^="javascript"])').attr("target", "_blank").addClass("link-trk"), $trigger.on("click", function(e) {
            e.preventDefault();
            var bubbleName = $(this).attr("data-trigger"),
                $ourBubble = $bubble.filter('[data-name="' + bubbleName + '"]');
            $ourBubble.hasClass("open") ? ($ourBubble.removeClass("show"), setTimeout(function() {
                $ourBubble.removeClass("open")
            }, 200)) : ($ourBubble.addClass("open"), setTimeout(function() {
                $ourBubble.addClass("show")
            }, 10))
        }), $(".player-toggle").on("click", function() {
            var tgt = $(this).attr("data-toggle"),
                $par = $(this).parents(".media__content__player"),
                $tgtID = $("#" + tgt);
            $par.hasClass("active") ? $par.removeClass("active") : $par.addClass("active"), $tgtID.find(".spp-play").trigger("click")
        }), $play.on("click", function(e) {
            e.preventDefault(), $(this).toggleClass("paused")
        }), $miBtn.on("click", function(e) {
            e.preventDefault(), $sppPlayBtn = $spp.find(".spp-play"), $mi.fadeOut(200), $spp.fadeIn(200), $sppPlayBtn.trigger("click")
        }), $(document).on("closing", ".remodal-video", function() {
            var $iframe = $(this).find("iframe"),
                $iframe_url = $(this).find("iframe").attr("src");
            $iframe.attr("src", ""), $iframe.attr("src", $iframe_url)
        }), viewport().width > 690 ? $aTab.on("click", function() {
            $(this).hasClass("active") || ($aTab.removeClass("active"), $(this).addClass("active"), $aListCat.removeClass("active-tab"), $aListCat.eq($(this).index()).addClass("active-tab"))
        }) : $aliMobileTrigger.on("click", function(e) {
            e.preventDefault(), $(this).parent().hasClass("active-tab") ? $(this).parent().removeClass("active-tab") : ($aListCat.removeClass("active-tab"), $(this).parent().addClass("active-tab"))
        }), $aliTrigger.on("click", function() {
            $(this).parent().hasClass("active") ? $(this).parent().removeClass("active") : ($(this).closest(".active-tab").find("li").removeClass("active"), $(this).parent().addClass("active"))
        })
    }

    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this,
                args = arguments,
                later = function() {
                    timeout = null, immediate || func.apply(context, args)
                },
                callNow = immediate && !timeout;
            clearTimeout(timeout), timeout = setTimeout(later, wait), callNow && func.apply(context, args)
        }
    }

    function createCookie(name, value, days) {
        var date, expires;
        days ? (date = new Date, date.setTime(date.getTime() + 24 * days * 60 * 60 * 1e3), expires = ";expires=" + date.toGMTString()) : expires = "", document.cookie = name + "=" + value + expires + "; path=/"
    }

    function readCookie(name) {
        for (var nameEQ = name + "=", ca = document.cookie.split(";"), i = 0; i < ca.length; i++) {
            for (var c = ca[i];
                " " == c.charAt(0);) c = c.substring(1, c.length);
            if (0 === c.indexOf(nameEQ)) return c.substring(nameEQ.length, c.length)
        }
        return null
    }

    function eraseCookie(name) {
        createCookie(name, "", -1)
    }

    function viewport() {
        var w = $window.width(),
            h = $window.height();
        return {
            width: w,
            height: h
        }
    }
    var $sppPlayBtn, $window = $(window),
        $bubble = $(".bubble-menu"),
        $trigger = $(".bubble-trigger"),
        $play = $(".play-button"),
        $mi = $("#media-info"),
        $miBtn = $mi.find("> button"),
        $spp = $("#archive-info #spp"),
        $accordionTabs = $(".accordion-tabs"),
        $aTab = $accordionTabs.find("li"),
        $accordionList = $(".accordion-list"),
        $aListCat = $accordionList.find("> li"),
        $aliMobileTrigger = $aListCat.find("> a"),
        $aListItem = $aListCat.find("li"),
        $aliTrigger = $aListItem.find("h3");
    return {
        init: init,
        debounce: debounce,
        createCookie: createCookie,
        readCookie: readCookie,
        eraseCookie: eraseCookie,
        viewport: viewport
    }
}(SPI, jQuery), SPI.router = function(SPI, $) {
    function init() {
        $(".no-js").length > 0 && $("html").removeClass("no-js").addClass("js"), SPI.check.init(), SPI.header.init(), SPI.footer.init(), SPI.search.navbar.init(), SPI.util.init(), SPI.tracking.init(), $body.hasClass("home") && SPI.home.init(), $(".journey").length && SPI.journey.init(), ($body.hasClass("blog") || $body.hasClass("category") || $body.hasClass("archive") && !$body.hasClass("post-type-archive-income-reports")) && SPI.blog.loadMore.init(), $(".graph-header__chart").length && SPI.incomeChart.init(), $(".post-type-archive-podcast").length && SPI.podcasts.init(), $("aside#sidebar").length && SPI.page.init(), $body.hasClass("pagepage") && $("main").length && SPI.content.init(), $(".content-slider-container").length && SPI.contentSlider.init(), $(".slider").length && SPI.slider.init(), ($(".single").length || $(".pagepage").length) && SPI.post.init(), $("#social").length && SPI.social.init(), $body.hasClass("contact") && SPI.contact.init(), $body.hasClass("error404") && SPI.error404.init(), $body.hasClass("post-type-archive-book-club") && $("#book-club__signup").length && SPI.bookclub.init(), $body.hasClass("live") && SPI.livepage.init(), $body.hasClass("page-template-page-smartway") && "#smartway-modal".length && SPI.smartway.init(), $(".ask-question").length && SPI.askpat.init(), $(".form__inline").length && SPI.inlineform.init(), $body.hasClass("search") && SPI.search.takeover.init()
    }
    var $body = $("body");
    return {
        init: init
    }
}(SPI, jQuery), SPI.router.init();