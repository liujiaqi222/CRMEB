(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  ["pages/index/visualization/components/swiperBg"],
  {
    "054d": function (t, i, e) {
      "use strict";
      var n = e("6a3f"),
        a = e.n(n);
      a.a;
    },
    "0b9f": function (t, i, e) {
      "use strict";
      (function (t) {
        Object.defineProperty(i, "__esModule", { value: !0 }), (i.default = void 0);
        var n = e("6557"),
          a = t.getSystemInfoSync().statusBarHeight + "px",
          s = getApp(),
          r = {
            name: "swiperBg",
            props: { dataConfig: { type: Object, default: function () {} } },
            watch: {
              dataConfig: {
                immediate: !0,
                handler: function (i, e) {
                  var n = this;
                  i &&
                    ((this.imgUrls = i.imgList ? i.imgList.list : []),
                    (this.isShow = !i.isShow || i.isShow.val),
                    t.getImageInfo({
                      src: this.imgUrls.length ? this.imgUrls[0].img : "",
                      success: function (t) {
                        t && t.height > 0 ? n.$set(n, "imageH", (t.height / t.width) * 690) : n.$set(n, "imageH", 320);
                      },
                      fail: function (t) {
                        n.$set(n, "imageH", 320);
                      },
                    }));
                },
              },
              imageH: function (t, i) {},
            },
            data: function () {
              return {
                indicatorDots: !1,
                circular: !0,
                autoplay: !0,
                interval: 4e3,
                duration: 500,
                imgUrls: [],
                name: this.$options.name,
                isIframe: !1,
                mt: -55,
                isShow: !0,
                imageH: 320,
                swiperCur: 0,
              };
            },
            created: function () {
              var i = t.getSystemInfoSync(),
                e = i.platform;
              (this.statusBarHeight = i.statusBarHeight),
                (this.mt = "android" === e ? 2 * parseFloat(a) + 170 : 2 * parseFloat(a) + 168),
                (this.isIframe = s.globalData.isIframe);
            },
            mounted: function () {},
            methods: {
              goDetail: function (t) {
                var i = this;
                (0, n.goPage)().then(function (e) {
                  var n = t.info[1].value;
                  i.$util.JumpPath(n);
                });
              },
              setDomain: function (t) {
                return (t = t ? t.toString() : ""), t.indexOf("https://") > -1 ? t : t.replace("http://", "https://");
              },
              swiperChange: function (t) {
                var i = t.detail,
                  e = (i.current, i.source);
                ("autoplay" !== e && "touch" !== e) || (this.swiperCur = t.detail.current);
              },
            },
          };
        i.default = r;
      }).call(this, e("543d")["default"]);
    },
    "6a3f": function (t, i, e) {},
    be86: function (t, i, e) {
      "use strict";
      e.d(i, "b", function () {
        return n;
      }),
        e.d(i, "c", function () {
          return a;
        }),
        e.d(i, "a", function () {});
      var n = function () {
          var t = this,
            i = t.$createElement,
            e = (t._self._c, t.isIframe || (t.imgUrls.length && t.isShow)),
            n = t.isShow && t.imgUrls.length,
            a = n ? t.imgUrls.length : null,
            s = !t.isShow && t.isIframe && t.imgUrls.length && t.imageH,
            r = s ? t.imgUrls.length && t.imageH : null,
            o = t.isIframe && (!t.imgUrls.length || !t.imageH),
            u = o ? t.$t("暂无图片，请上传图片") : null;
          t.$mp.data = Object.assign({}, { $root: { g0: e, g1: n, g2: a, g3: s, g4: r, g5: o, m0: u } });
        },
        a = [];
    },
    d89f0: function (t, i, e) {
      "use strict";
      e.r(i);
      var n = e("0b9f"),
        a = e.n(n);
      for (var s in n)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return n[t];
            });
          })(s);
      i["default"] = a.a;
    },
    f92d: function (t, i, e) {
      "use strict";
      e.r(i);
      var n = e("be86"),
        a = e("d89f0");
      for (var s in a)
        ["default"].indexOf(s) < 0 &&
          (function (t) {
            e.d(i, t, function () {
              return a[t];
            });
          })(s);
      e("054d");
      var r = e("f0c5"),
        o = Object(r["a"])(a["default"], n["b"], n["c"], !1, null, null, null, !1, n["a"], void 0);
      i["default"] = o.exports;
    },
  },
]);
(global["webpackJsonp"] = global["webpackJsonp"] || []).push([
  "pages/index/visualization/components/swiperBg-create-component",
  {
    "pages/index/visualization/components/swiperBg-create-component": function (module, exports, __webpack_require__) {
      __webpack_require__("543d")["createComponent"](__webpack_require__("f92d"));
    },
  },
  [["pages/index/visualization/components/swiperBg-create-component"]],
]);
