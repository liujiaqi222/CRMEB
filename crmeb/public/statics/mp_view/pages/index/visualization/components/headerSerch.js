(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/visualization/components/headerSerch"],
  {
    "277c": function (t, e, n) {
      "use strict";
      (function (t) {
        Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
        var i = n("6557"),
          o = getApp(),
          a = 2 * t.getSystemInfoSync().statusBarHeight + "rpx",
          s = 2 * t.getSystemInfoSync().statusBarHeight + 170 + "rpx",
          r = {
            name: "headerSerch",
            props: { dataConfig: { type: Object, default: function () {} } },
            data: function () {
              return {
                logoConfig: "",
                hotWords: [],
                sysHeight: a,
                headH: s,
                name: this.$options.name,
                isShow: !0,
                isIframe: o.globalData.isIframe,
                titleInfo: [],
              };
            },
            watch: {
              dataConfig: {
                immediate: !0,
                handler: function (e, n) {
                  e &&
                    ((this.logoConfig = e ? e.imgUrl.url : ""),
                    (this.hotWords = e.hotList.list || []),
                    (this.isShow = e.isShow.val),
                    (this.titleInfo = e.titleInfo && e.titleInfo.list.length ? e.titleInfo.list : []),
                    t.setStorageSync("hotList", this.hotWords || []));
                },
              },
            },
            mounted: function () {
              var e = this;
              this.$nextTick(function () {
                var n = t.createSelectorQuery().in(this).select(".mp-header");
                n.boundingClientRect(function (t) {
                  e.marTop = t.height;
                }).exec();
              });
            },
            methods: {
              goPage: function () {
                (0, i.goPage)().then(function (e) {
                  t.navigateTo({ url: "/pages/goods/goods_search/index" });
                });
              },
            },
          };
        e.default = r;
      }).call(this, n("543d")["default"]);
    },
    3460: function (t, e, n) {},
    b337: function (t, e, n) {
      "use strict";
      n.d(e, "b", function () {
        return i;
      }),
        n.d(e, "c", function () {
          return o;
        }),
        n.d(e, "a", function () {});
      var i = function () {
          var t = this.$createElement,
            e = (this._self._c, this.isShow ? this.titleInfo.length : null),
            n = this.isShow ? this.$t("搜索商品") : null;
          this.$mp.data = Object.assign({}, { $root: { g0: e, m0: n } });
        },
        o = [];
    },
    bee5: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("277c"),
        o = n.n(i);
      for (var a in i)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return i[t];
            });
          })(a);
      e["default"] = o.a;
    },
    eb9c: function (t, e, n) {
      "use strict";
      var i = n("3460"),
        o = n.n(i);
      o.a;
    },
    f872: function (t, e, n) {
      "use strict";
      n.r(e);
      var i = n("b337"),
        o = n("bee5");
      for (var a in o)
        ["default"].indexOf(a) < 0 &&
          (function (t) {
            n.d(e, t, function () {
              return o[t];
            });
          })(a);
      n("eb9c");
      var s = n("f0c5"),
        r = Object(s["a"])(o["default"], i["b"], i["c"], !1, null, null, null, !1, i["a"], void 0);
      e["default"] = r.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "pages/index/visualization/components/headerSerch-create-component",
  {
    "pages/index/visualization/components/headerSerch-create-component": function (
      module,
      exports,
      __webpack_require__
    ) {
      __webpack_require__("543d")["createComponent"](__webpack_require__("f872"));
    },
  },
  [["pages/index/visualization/components/headerSerch-create-component"]],
]);
