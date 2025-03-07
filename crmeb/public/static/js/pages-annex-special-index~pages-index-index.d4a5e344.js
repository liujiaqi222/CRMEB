(window["webpackJsonp"] = window["webpackJsonp"] || []).push([
  ["pages-annex-special-index~pages-index-index"],
  {
    "01ac": function (t, e, i) {
      "use strict";
      i("7a82");
      var a = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("a9e3"),
        i("d3b7"),
        i("159b"),
        i("acd8");
      var n = a(i("80f6")),
        o = i("84d8"),
        r = {
          name: "seckill",
          components: { countDown: n.default },
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              datatime: "",
              spikeList: [],
              countDownColor: this.dataConfig.countDownColor.color[0].item,
              themeColor: this.dataConfig.themeColor.color[0].item,
              numberConfig: this.dataConfig.numberConfig.val,
              lrConfig: this.dataConfig.lrConfig.val,
              mbConfig: this.dataConfig.mbConfig.val,
              imgUrl: this.dataConfig.imgConfig.url,
              priceShow: this.dataConfig.priceShow.val,
              discountShow: this.dataConfig.discountShow.val,
              titleShow: this.dataConfig.titleShow.val,
              seckillShow: this.dataConfig.seckillShow.val,
              conStyle: this.dataConfig.conStyle.type,
              prConfig: this.dataConfig.prConfig.val,
              bgColor: this.dataConfig.bgColor.color[0].item,
            };
          },
          created: function () {},
          mounted: function () {
            this.getSeckillIndexTime();
          },
          methods: {
            getSeckillIndexTime: function () {
              var t = this,
                e = this.$config.LIMIT,
                i = { page: 1, limit: this.numberConfig >= e ? e : this.numberConfig, type: "index" };
              (0, o.getSeckillIndexTime)().then(function (e) {
                if (-1 !== e.data.seckillTimeIndex) {
                  t.datatime = e.data.seckillTime[e.data.seckillTimeIndex].stop;
                  var a = e.data.seckillTime[e.data.seckillTimeIndex].id;
                  (0, o.getSeckillList)(a, i).then(function (e) {
                    var i = e.data;
                    i.forEach(function (e) {
                      var i = 0;
                      e.price > 0 && e.ot_price > 0 && (i = (parseFloat(e.price) / parseFloat(e.ot_price)).toFixed(2)),
                        (e.discountNum = t.$util.$h.Mul(i, 10));
                    }),
                      (t.spikeList = i);
                  });
                }
              });
            },
          },
        };
      e.default = r;
    },
    "024a": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7495"),
        n = i("3108");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("9f3a");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "0b79575a", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "03a8": function (t, e, i) {
      "use strict";
      var a = i("507c"),
        n = i.n(a);
      n.a;
    },
    "0433": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.spike[data-v-26a94d8b]{padding:%?20?%}.spike-box[data-v-26a94d8b]{padding:%?23?% %?20?% %?18?% %?20?%;background-color:#fff;overflow:hidden;box-shadow:0 0 16px 3px rgba(0,0,0,.04)}.spike-box .hd[data-v-26a94d8b]{display:flex;align-items:center;justify-content:space-between}.spike-box .hd .left[data-v-26a94d8b]{display:flex;align-items:center;width:%?500?%}.spike-box .hd .left .name[data-v-26a94d8b]{font-size:%?32?%;font-weight:600}.spike-box .hd .left .icon[data-v-26a94d8b]{width:%?36?%;height:%?36?%;margin-right:%?12?%}.spike-box .hd .left .title[data-v-26a94d8b]{width:%?134?%;height:%?33?%}.spike-box .hd .more[data-v-26a94d8b]{font-size:%?26?%;color:#999}.spike-box .hd .more .iconfont[data-v-26a94d8b]{margin-left:%?6?%;font-size:%?25?%}.spike-box .spike-wrapper[data-v-26a94d8b]{width:100%;margin-top:%?27?%}.spike-box .spike-wrapper .spike-item[data-v-26a94d8b]{display:inline-block;width:%?222?%;background-color:#fff;border-radius:%?16?%;padding-bottom:%?8?%}.spike-box .spike-wrapper .spike-item .img-box[data-v-26a94d8b]{position:relative;height:%?222?%}.spike-box .spike-wrapper .spike-item .img-box uni-image[data-v-26a94d8b]{width:100%;height:%?222?%;border-radius:%?16?%}.spike-box .spike-wrapper .spike-item .img-box .msg[data-v-26a94d8b]{position:absolute;left:%?10?%;bottom:%?16?%;width:%?86?%;height:%?30?%;background:#fff;border:1px solid #ff6d60;border-radius:%?6?%;font-size:%?20?%;color:#e93323}.spike-box .spike-wrapper .spike-item .info[data-v-26a94d8b]{margin-top:%?10?%;padding:0 %?10?%}.spike-box .spike-wrapper .spike-item .info .name[data-v-26a94d8b]{font-size:%?26?%}.spike-box .spike-wrapper .spike-item .info .price-box[data-v-26a94d8b]{display:flex;align-items:center;justify-content:start;margin-top:%?4?%}.spike-box .spike-wrapper .spike-item .info .price-box .tips[data-v-26a94d8b]{display:flex;align-items:center;justify-content:center;width:%?28?%;height:%?28?%;background-color:#e93323;color:#fff;font-size:%?20?%;border-radius:2px}.spike-box .spike-wrapper .spike-item .info .price-box .price[data-v-26a94d8b]{display:flex;margin-left:%?10?%;color:#e93323;font-size:%?28?%;font-weight:700}.spike-box .spike-wrapper .spike-item .info .price-box .price uni-text[data-v-26a94d8b]{font-size:%?18?%}',
          "",
        ]),
        (t.exports = e);
    },
    "0455": function (t, e, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("a9e3"),
        i("d401"),
        i("d3b7"),
        i("25f0"),
        i("c975"),
        i("ac1f"),
        i("5319");
      var a = {
        name: "swiperBg",
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {
            circular: !0,
            autoplay: !0,
            interval: 3e3,
            duration: 500,
            imgUrls: [],
            bgColor: this.dataConfig.bgColor.color,
            marginTop: this.dataConfig.mbConfig.val,
            paddinglr: 2 * this.dataConfig.lrConfig.val,
            docConfig: this.dataConfig.docConfig.type,
            imgConfig: this.dataConfig.imgConfig.type,
            imageH: 280,
            isColor: this.dataConfig.isShow.val,
            txtStyle: this.dataConfig.txtStyle.type,
            dotColor: this.dataConfig.dotColor.color[0].item,
            current: 1,
            active: 0,
          };
        },
        watch: {
          imageH: function (t, e) {
            this.imageH = t;
          },
        },
        created: function () {
          this.imgUrls = this.dataConfig.swiperConfig.list;
        },
        mounted: function () {
          var t = this;
          if (this.imgUrls.length) {
            var e = this;
            this.$nextTick(function (i) {
              uni.getImageInfo({
                src: e.imgUrls[0].img,
                success: function (i) {
                  if (i && i.height > 0) {
                    var a = i.height * ((750 - 2 * t.paddinglr) / i.width);
                    e.$set(e, "imageH", a);
                  } else e.$set(e, "imageH", 375);
                },
                fail: function (t) {
                  e.$set(e, "imageH", 375);
                },
              });
            });
          }
        },
        methods: {
          bannerfun: function (t) {
            (this.active = t.detail.current), (this.current = t.detail.current + 1);
          },
          setDomain: function (t) {
            return (t = t ? t.toString() : ""), t.indexOf("https://") > -1 ? t : t.replace("http://", "https://");
          },
          goDetail: function (t) {
            var e = t.info[1].value;
            this.$util.JumpPath(e);
          },
        },
      };
      e.default = a;
    },
    "04a6": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
            [
              t.itemNew.length
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "news acea-row row-middle",
                      class: { pageOn: 1 === t.bgStyle },
                      style:
                        "margin:0 " +
                        2 * t.prConfig +
                        "rpx;margin-top:" +
                        2 * t.mbConfig +
                        "rpx;color:" +
                        t.txtColor +
                        ";background-color:" +
                        t.bgColor +
                        ";",
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "pictrue skeleton-rect" },
                        [i("v-uni-image", { attrs: { src: t.logoConfig } })],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "swiperTxt skeleton-rect" },
                        [
                          i(
                            "v-uni-swiper",
                            {
                              attrs: {
                                "indicator-dots": t.indicatorDots,
                                autoplay: t.autoplay,
                                interval: "2500",
                                duration: t.duration,
                                vertical: "true",
                                circular: "true",
                              },
                            },
                            [
                              t._l(t.itemNew, function (e, a) {
                                return [
                                  i(
                                    "v-uni-swiper-item",
                                    { key: a + "_0", attrs: { catchtouchmove: "catchTouchMove" } },
                                    [
                                      i(
                                        "v-uni-view",
                                        {
                                          staticClass: "acea-row row-between-wrapper",
                                          on: {
                                            click: function (i) {
                                              (arguments[0] = i = t.$handleEvent(i)), t.jump(e.chiild[1].val);
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "v-uni-view",
                                            { staticClass: "text acea-row row-between-wrapper" },
                                            [
                                              i(
                                                "v-uni-view",
                                                {
                                                  staticClass: "newsTitle line1",
                                                  style:
                                                    "text-align:" +
                                                    (1 == t.txtStyle ? "center" : 2 == t.txtStyle ? "right" : "left") +
                                                    ";color:" +
                                                    t.txtColor +
                                                    ";",
                                                },
                                                [t._v(t._s(e.chiild[0].val))]
                                              ),
                                            ],
                                            1
                                          ),
                                          i("v-uni-view", { staticClass: "iconfont icon-xiangyou" }),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ];
                              }),
                            ],
                            2
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "06b7": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("f620"),
        n = i("d6b0");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("e510");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "76550ce9", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "0771": function (t, e, i) {
      var a = i("d169");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("0a0d30d7", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0b28": function (t, e, i) {
      var a = i("afd9");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("29c22120", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0b87": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("ebf7"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "0ccd": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7a71"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "0cd9": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = i("2a39"),
        n = {
          name: "goodList",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              tempArr: [],
              mbConfig: this.dataConfig.mbConfig.val,
              numConfig: this.dataConfig.numConfig.val,
              themeColor: this.dataConfig.themeColor.color[0].item,
              itemStyle: this.dataConfig.itemStyle.type,
              sortType: this.dataConfig.goodsSort.type,
              type: this.dataConfig.tabConfig.tabVal || 0,
              selectId: this.dataConfig.selectConfig.activeValue,
              productIds: this.dataConfig.goodsList.ids || [],
              opriceShow: this.dataConfig.opriceShow.val,
              priceShow: this.dataConfig.priceShow.val,
              titleShow: this.dataConfig.titleShow.val,
              couponShow: this.dataConfig.couponShow.val,
              prConfig: this.dataConfig.prConfig.val,
              bgStyle: this.dataConfig.bgStyle.type,
              conStyle: this.dataConfig.conStyle.type,
              fontColor: this.dataConfig.fontColor.color[0].item,
              labelColor: this.dataConfig.labelColor.color[0].item,
            };
          },
          created: function () {},
          mounted: function () {
            this.productslist();
          },
          methods: {
            productslist: function () {
              var t = this,
                e = (this.$config.LIMIT, {});
              (e =
                1 == this.type
                  ? { ids: this.productIds.join(",") }
                  : {
                      priceOrder: 2 == this.sortType ? "desc" : "",
                      salesOrder: 1 == this.sortType ? "desc" : "",
                      selectId: this.selectId || 0,
                      limit: this.numConfig,
                    }),
                (0, a.getProductslist)(e).then(function (e) {
                  t.tempArr = e.data;
                });
            },
            goDetail: function (t) {
              this.$emit("detail", t);
            },
          },
        };
      e.default = n;
    },
    "0d15": function (t, e, i) {
      "use strict";
      var a = i("1529"),
        n = i.n(a);
      n.a;
    },
    "0dc1": function (t, e, i) {
      var a = i("eff4");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("eaf82386", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "0fba": function (t, e, i) {
      "use strict";
      var a = i("1e8a"),
        n = i.n(a);
      n.a;
    },
    "1293b": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
            [
              !1 === t.subscribe
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "follow acea-row row-between-wrapper",
                      style: "background:" + t.bgColor + ";margin-top:" + t.mbConfig + "rpx;",
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "picTxt acea-row row-middle" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "pictrue" },
                            [i("v-uni-image", { attrs: { src: t.imgConfig } })],
                            1
                          ),
                          i("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(t.titleConfig))]),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "notes acea-row row-center-wrapper",
                          style: "color:" + t.themeColor + ";border-color:" + t.themeColor + ";",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.followTap.apply(void 0, arguments);
                            },
                          },
                        },
                        [t._v(t._s(t.$t("关注")))]
                      ),
                    ],
                    1
                  )
                : t._e(),
              t.followCode
                ? i(
                    "v-uni-view",
                    { staticClass: "followCode" },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "pictrue" },
                        [
                          i("v-uni-view", { staticClass: "code-bg" }, [
                            i("img", { staticClass: "imgs", attrs: { src: t.followUrl } }),
                          ]),
                        ],
                        1
                      ),
                      i("v-uni-view", {
                        staticClass: "mask",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)), t.closeFollowCode.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "12c6": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = {
        name: "promotionList",
        props: {
          dataConfig: { type: Object, default: function () {} },
          tempArr: { type: Array, default: [] },
          iSshowH: { type: Boolean, default: !1 },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {
            ProductNavindex: 0,
            explosiveMoney: this.dataConfig.tabConfig.list,
            numConfig: this.dataConfig.numConfig.val,
            mbConfig: this.dataConfig.mbConfig.val,
            themeColor: this.dataConfig.themeColor.color[0].item,
            titleShow: this.dataConfig.titleShow.val,
            opriceShow: this.dataConfig.opriceShow.val,
            priceShow: this.dataConfig.priceShow.val,
            couponShow: this.dataConfig.couponShow.val,
            titleConfig: this.dataConfig.titleConfig.type,
            fontColor: this.dataConfig.fontColor.color[0].item,
            labelColor: this.dataConfig.labelColor.color[0].item,
          };
        },
        created: function () {},
        methods: {
          ProductNavTab: function (t, e) {
            (this.ProductNavindex = e), this.$emit("changeTab", t);
          },
          goDetail: function (t) {
            this.$emit("detail", t);
          },
        },
      };
      e.default = a;
    },
    "12d9": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("79da"),
        n = i("c292");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("4eb33");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "d6ee2bb6", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "13a3": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("27c8"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "14fa": function (t, e, i) {
      var a = i("ef73");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("38d58978", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    1529: function (t, e, i) {
      var a = i("874b");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("640a6b71", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "168e": function (t, e, i) {
      var a = i("9cc4");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("27fe485e", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    1723: function (t, e, i) {
      var a = i("f386");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("2cc8f89d", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "174b": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = i("5743"),
        n = i("26cb"),
        o = i("86eb"),
        r = {
          name: "coupon",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          computed: (0, n.mapGetters)(["isLogin"]),
          components: {},
          watch: {
            isLogin: {
              handler: function (t, e) {
                t && this.getCoupon();
              },
              deep: !0,
            },
          },
          data: function () {
            return {
              isAuto: !1,
              isShowAuth: !1,
              couponList: [],
              bgColor: this.dataConfig.bgColor.color[0].item,
              themeColor: this.dataConfig.themeColor.color[0].item,
              mbConfig: this.dataConfig.mbConfig.val,
              bgStyle: this.dataConfig.bgStyle.type,
              prConfig: this.dataConfig.prConfig.val,
            };
          },
          created: function () {},
          mounted: function () {
            this.getCoupon();
          },
          methods: {
            getCoupon: function () {
              var t = this,
                e = t.$config.LIMIT;
              (0, a.getCoupons)({ page: 1, limit: e, type: -1 })
                .then(function (e) {
                  t.$set(t, "couponList", e.data.list);
                })
                .catch(function (e) {
                  return t.$util.Tips({ title: e });
                });
            },
            receiveCoupon: function (t) {
              var e = this;
              e.isLogin
                ? (0, a.setCouponReceive)(t.id)
                    .then(function () {
                      (t.is_use = !0), e.$set(e, "couponList", e.couponList), e.$util.Tips({ title: e.$t("领取成功") });
                    })
                    .catch(function (t) {
                      e.$util.Tips({ title: t });
                    })
                : (0, o.toLogin)();
            },
          },
        };
      e.default = r;
    },
    "181c": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.coupon[data-v-db3337aa]{background-color:#fff;padding:%?20?%}.coupon .item[data-v-db3337aa]{display:flex;width:%?304?%;height:%?122?%;background-color:#ddd;border-radius:%?8?%;color:#fff;position:relative;display:inline-block;flex-shrink:0}.coupon .item .roll[data-v-db3337aa]{position:absolute;width:%?20?%;height:%?20?%;border-radius:50%;background:#fff}.coupon .item .roll.up-roll[data-v-db3337aa]{right:%?52?%;top:%?-10?%}.coupon .item .roll.down-roll[data-v-db3337aa]{right:%?52?%;bottom:%?-10?%}.coupon .item .itemCon[data-v-db3337aa]{height:100%;width:100%}.coupon .item .itemCon .text[data-v-db3337aa]{width:%?240?%}.coupon .item .itemCon .text .money[data-v-db3337aa]{font-size:%?48?%;text-align:center}.coupon .item .itemCon .text .money uni-text[data-v-db3337aa]{font-size:%?24?%}.coupon .item .itemCon .text .info[data-v-db3337aa]{font-size:%?24?%;text-align:center}.coupon .item .itemCon .bnt[data-v-db3337aa]{position:relative;height:100%;font-size:%?20?%;display:block;-webkit-writing-mode:vertical-lr;writing-mode:vertical-lr;line-height:1.2;width:%?64?%;border-left:1px dashed #fff}.coupon .item .itemCon .bnt uni-text[data-v-db3337aa]{position:absolute;left:56%;top:50%;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%)}.coupon .wrapper[data-v-db3337aa]{display:flex}.coupon .more-box[data-v-db3337aa]{display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fff;border-radius:%?16?%;padding:0 10px;height:%?122?%}.coupon .more-box uni-image[data-v-db3337aa]{width:%?20?%;height:%?20?%;margin-top:%?10?%;margin:%?10?% 0 0 %?5?%}.coupon .more-box .txt[data-v-db3337aa]{display:block;-webkit-writing-mode:vertical-lr;writing-mode:vertical-lr;font-size:%?20?%;line-height:1.2}',
          "",
        ]),
        (t.exports = e);
    },
    "19b3": function (t, e, i) {
      var a = i("e08a");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("357b0428", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "1a51": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ".Loads[data-v-71b32b65]{height:%?80?%;font-size:%?25?%;color:#000}.Loads .iconfont[data-v-71b32b65]{font-size:%?30?%;margin-right:%?10?%;height:%?32?%;line-height:%?32?%}\n/*加载动画*/@-webkit-keyframes load-data-v-71b32b65{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}@keyframes load-data-v-71b32b65{from{-webkit-transform:rotate(0deg);transform:rotate(0deg)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.loadingpic[data-v-71b32b65]{-webkit-animation:load-data-v-71b32b65 3s linear 1s infinite;animation:load-data-v-71b32b65 3s linear 1s infinite}.loading[data-v-71b32b65]{-webkit-animation:load-data-v-71b32b65 linear 1s infinite;animation:load-data-v-71b32b65 linear 1s infinite}",
          "",
        ]),
        (t.exports = e);
    },
    "1afb": function (t, e, i) {
      "use strict";
      var a = i("e05e"),
        n = i.n(a);
      n.a;
    },
    "1bba": function (t, e, i) {
      "use strict";
      var a = i("a7a1"),
        n = i.n(a);
      n.a;
    },
    "1c6a": function (t, e, i) {
      var a = {
        "./activeParty.vue": "6c66",
        "./articleList.vue": "af5c",
        "./bargain.vue": "d722",
        "./blankPage.vue": "304b",
        "./combination.vue": "279f",
        "./coupon.vue": "b567",
        "./customerService.vue": "5229",
        "./follow.vue": "6a6d",
        "./goodList.vue": "ab66",
        "./guide.vue": "6e93",
        "./headerSerch.vue": "06b7",
        "./hotspot.vue": "52e1",
        "./liveBroadcast.vue": "99d3",
        "./menus.vue": "7e46",
        "./news.vue": "947e",
        "./pictureCube.vue": "2b59",
        "./promotionList.vue": "024a",
        "./richText.vue": "12d9",
        "./seckill.vue": "2908",
        "./swiperBg.vue": "bc65",
        "./swipers.vue": "b51c",
        "./tabNav.vue": "2515",
        "./titles.vue": "5781",
      };
      function n(t) {
        var e = o(t);
        return i(e);
      }
      function o(t) {
        if (!i.o(a, t)) {
          var e = new Error("Cannot find module '" + t + "'");
          throw ((e.code = "MODULE_NOT_FOUND"), e);
        }
        return a[t];
      }
      (n.keys = function () {
        return Object.keys(a);
      }),
        (n.resolve = o),
        (t.exports = n),
        (n.id = "1c6a");
    },
    "1cb9": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.richText[data-v-d6ee2bb6]{padding:%?20?%;background-color:#fff;margin:0 %?20?%;border-radius:%?24?%}[data-v-d6ee2bb6] uni-video{width:100%!important}[data-v-d6ee2bb6] uni-video{width:100%!important}',
          "",
        ]),
        (t.exports = e);
    },
    "1cbd": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
            [
              t.explosiveMoney.length
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "explosion",
                      style: "margin-top:" + 2 * t.mbConfig + "rpx;background-color:" + t.boxColor + ";",
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "hd skeleton-rect" },
                        [
                          i("v-uni-view", { staticClass: "title", style: "color:" + t.themeColor + ";" }, [
                            t._v(t._s(t.$t(t.titleConfig))),
                          ]),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "txt",
                              style:
                                "background: linear-gradient(90deg, " +
                                t.bgColor[0].item +
                                " 0%, " +
                                t.bgColor[1].item +
                                " 100%);",
                            },
                            [t._v(t._s(t.$t(t.desConfig)))]
                          ),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "bd" },
                        t._l(t.explosiveMoney, function (e, a) {
                          return i(
                            "v-uni-view",
                            {
                              key: a,
                              staticClass: "item skeleton-rect",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                },
                              },
                            },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "con-box" },
                                [
                                  i("v-uni-view", { staticClass: "title line1" }, [t._v(t._s(t.$t(e.info[0].value)))]),
                                  i("v-uni-view", { staticClass: "con line2" }, [t._v(t._s(t.$t(e.info[1].value)))]),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "go" },
                                    [
                                      t._v("GO！"),
                                      i("v-uni-image", { attrs: { src: "/static/images/right-icon.png", mode: "" } }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                              i("v-uni-image", { attrs: { src: e.img, mode: "aspectFill" } }),
                            ],
                            1
                          );
                        }),
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "1cf1": function (t, e, i) {
      "use strict";
      var a = i("14fa"),
        n = i.n(a);
      n.a;
    },
    "1e8a": function (t, e, i) {
      var a = i("bead");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("7a775c27", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "235f": function (t, e, i) {
      var a = i("181c");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("cce3946c", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    2515: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("6669"),
        n = i("a708");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("3810");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "4607b153", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "279f": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("28ea"),
        n = i("d035");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("edfd");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "29598e05", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "27c8": function (t, e, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("a9e3"),
        i("d401"),
        i("d3b7"),
        i("25f0"),
        i("c975"),
        i("ac1f"),
        i("5319");
      var a = {
        name: "pictureCube",
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {
            picList: this.dataConfig.picStyle.picList,
            style: this.dataConfig.tabConfig.tabVal,
            bgStyle: this.dataConfig.bgStyle.type,
            prConfig: this.dataConfig.prConfig.val,
            slider: this.dataConfig.mbConfig.val,
            bgColor: this.dataConfig.bgColor.color[0].item,
            widthC: "",
            imageH: "",
          };
        },
        mounted: function () {
          var t = this;
          if (this.picList.length) {
            var e = this;
            this.$nextTick(function (i) {
              1 == t.style ? (t.widthC = 375) : 2 == t.style ? (t.widthC = 250) : 4 == t.style && (t.widthC = 188),
                uni.getImageInfo({
                  src: e.setDomain(e.picList[0].image),
                  success: function (t) {
                    if (t && t.height > 0) {
                      var i = t.height * ((e.widthC - 2 * e.prConfig) / t.width);
                      e.$set(e, "imageH", i);
                    } else e.$set(e, "imageH", 2 * (e.widthC - 2 * e.prConfig));
                  },
                  fail: function (t) {
                    e.$set(e, "imageH", 2 * (e.widthC - 2 * e.prConfig));
                  },
                });
            });
          }
        },
        created: function () {},
        methods: {
          setDomain: function (t) {
            return (t = t ? t.toString() : ""), t.indexOf("https://") > -1 ? t : t.replace("http://", "https://");
          },
          goDetail: function (t) {
            var e = t.link;
            this.$util.JumpPath(e);
          },
        },
      };
      e.default = a;
    },
    "28ea": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
            [
              t.combinationList.length > 0
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "group-wrapper",
                      class: t.conStyle ? "borderRadius20" : "",
                      style:
                        "background:" +
                        t.bgColor +
                        ";margin:0 " +
                        2 * t.prConfig +
                        "rpx;margin-top:" +
                        2 * t.mbConfig +
                        "rpx;",
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "hd" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "left" },
                            [
                              t.imgUrl
                                ? i("v-uni-image", { staticClass: "icon", attrs: { src: t.imgUrl, mode: "" } })
                                : i("v-uni-image", {
                                    staticClass: "icon",
                                    attrs: { src: "/static/images/group02.gif" },
                                  }),
                              i("v-uni-view", { staticClass: "name" }, [t._v(t._s(t.$t("拼团活动")))]),
                              i(
                                "v-uni-view",
                                { staticClass: "person" },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "avatar-box" },
                                    [
                                      t._l(t.pinkInfo.avatars, function (t, e) {
                                        return [i("v-uni-image", { key: e + "_0", attrs: { src: t, mode: "" } })];
                                      }),
                                    ],
                                    2
                                  ),
                                  t.pinkInfo.pink_count > 0
                                    ? i("v-uni-view", { staticClass: "num" }, [
                                        t._v(t._s(t.pinkInfo.pink_count) + " " + t._s(t.$t("人拼团成功."))),
                                      ])
                                    : t._e(),
                                ],
                                1
                              ),
                            ],
                            1
                          ),
                          i(
                            "v-uni-navigator",
                            {
                              staticClass: "more",
                              attrs: { url: "/pages/activity/goods_combination/index", "hover-class": "none" },
                            },
                            [t._v(t._s(t.$t("更多"))), i("v-uni-text", { staticClass: "iconfont icon-jiantou" })],
                            1
                          ),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "group-scroll" },
                        [
                          i(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", display: "flex" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.combinationList, function (e, a) {
                              return i(
                                "v-uni-navigator",
                                {
                                  key: a,
                                  staticClass: "group-item",
                                  style: "margin-right:" + 2 * t.lrConfig + "rpx;",
                                  attrs: {
                                    url: "/pages/activity/goods_combination_details/index?id=" + e.id,
                                    "hover-class": "none",
                                  },
                                },
                                [
                                  i("v-uni-image", { attrs: { src: e.image, mode: "aspectFill" } }),
                                  t.joinShow
                                    ? i("v-uni-view", { staticClass: "people" }, [
                                        t._v(t._s(e.people) + t._s(t.$t("人团"))),
                                      ])
                                    : t._e(),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "info" },
                                    [
                                      t.titleShow
                                        ? i("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(e.title))])
                                        : t._e(),
                                      i(
                                        "v-uni-view",
                                        { staticClass: "price-box" },
                                        [
                                          t.pinkShow
                                            ? i(
                                                "v-uni-text",
                                                {
                                                  staticClass: "tips",
                                                  style:
                                                    "background-color:" + t.txtColor + ";color:" + t.themeColor + ";",
                                                },
                                                [t._v(t._s(t.$t("拼团价")))]
                                              )
                                            : t._e(),
                                          t.priceShow
                                            ? i(
                                                "v-uni-text",
                                                { staticClass: "price", style: "color:" + t.themeColor + ";" },
                                                [i("v-uni-text", [t._v(t._s(t.$t("￥")))]), t._v(t._s(e.price))],
                                                1
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                  t.bntShow
                                    ? i(
                                        "v-uni-view",
                                        { staticClass: "bom-btn", style: "background-color:" + t.themeColor + ";" },
                                        [t._v(t._s(t.$t("参与拼团")))]
                                      )
                                    : t._e(),
                                ],
                                1
                              );
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    2908: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("38cb"),
        n = i("9198");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("5982");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "26a94d8b", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    2986: function (t, e, i) {
      "use strict";
      var a = i("235f"),
        n = i.n(a);
      n.a;
    },
    "2a39": function (t, e, i) {
      "use strict";
      i("7a82");
      var a = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.collectAdd = function (t, e) {
          return n.default.post("collect/add", { id: t, product: void 0 === e ? "product" : e });
        }),
        (e.collectAll = function (t, e) {
          return n.default.post("collect/all", { id: t, category: void 0 === e ? "product" : e });
        }),
        (e.collectDel = function (t, e) {
          return n.default.post("collect/del", { id: t, category: void 0 === e ? "product" : e });
        }),
        (e.create = function (t) {
          return n.default.post("agent/apply/".concat(t.id), t);
        }),
        (e.deleteVisitList = function (t) {
          return n.default.delete("user/visit", t);
        }),
        (e.getAgentAgreement = function (t) {
          return n.default.get("agent/get_agent_agreement", {}, { noAuth: !0 });
        }),
        (e.getAttr = function (t, e) {
          return n.default.get("v2/get_attr/" + t + "/" + e);
        }),
        (e.getCategoryList = function () {
          return n.default.get("category", {}, { noAuth: !0 });
        }),
        (e.getCodeApi = function () {
          return n.default.get("verify_code", {}, { noAuth: !0 });
        }),
        (e.getCollectUserList = function (t) {
          return n.default.get("collect/user", t);
        }),
        (e.getGoodsDetails = function () {
          return n.default.get("agent/apply/info", {}, { noAuth: !0 });
        }),
        (e.getGroomList = function (t, e) {
          return n.default.get("groom/list/" + t, e, { noAuth: !0 });
        }),
        (e.getHomeProducts = function (t) {
          return n.default.get("home/products", t, { noAuth: !0 });
        }),
        (e.getPresellProductDetail = function (t) {
          return n.default.get("advance/detail/" + t);
        }),
        (e.getProductCode = function (t) {
          return n.default.get("product/code/" + t, {}, { noAuth: !0 });
        }),
        (e.getProductDetail = function (t) {
          return n.default.get("product/detail/" + t, {}, { noAuth: !0 });
        }),
        (e.getProductHot = function (t, e) {
          return n.default.get(
            "product/hot",
            { page: void 0 === t ? 1 : t, limit: void 0 === e ? 4 : e },
            { noAuth: !0 }
          );
        }),
        (e.getProductslist = function (t) {
          return n.default.get("products", t, { noAuth: !0 });
        }),
        (e.getReplyConfig = function (t) {
          return n.default.get("reply/config/" + t);
        }),
        (e.getReplyList = function (t, e) {
          return n.default.get("reply/list/" + t, e);
        }),
        (e.getSearchKeyword = function () {
          return n.default.get("search/keyword", {}, { noAuth: !0 });
        }),
        (e.getVisitList = function (t) {
          return n.default.get("user/visit_list", t);
        }),
        (e.postCartAdd = function (t) {
          return n.default.post("cart/add", t);
        }),
        (e.postCartNum = function (t) {
          return n.default.post("v2/set_cart_num", t);
        }),
        (e.registerVerify = function (t) {
          return n.default.post("register/verify", t, { noAuth: !0 });
        }),
        (e.storeDiscountsList = function (t) {
          return n.default.get("store_discounts/list/" + t, {}, { noAuth: !0 });
        }),
        (e.storeListApi = function (t) {
          return n.default.get("store_list", t);
        });
      var n = a(i("fb81"));
    },
    "2b59": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("911e"),
        n = i("13a3");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("b6f1");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "c83e7b2a", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "2f22": function (t, e) {
      t.exports =
        "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAfQAAAIcCAMAAAA396zKAAAAXVBMVEUAAAD///////////////////////////////////////////8zMzOZmZmtra16enrY2NjJycnOzs729vZISEjDw8OVlZXs7Ozi4uJaWlpra2vQ0NChoaG4uLiIiIhqEcL6AAAAC3RSTlMAV+H4jAbarAOmB/J7M9IAAAvfSURBVHja7NhLahtBGEbRbr1s86OAPA3Z/zYDImRqpIGR654zqQVcquivt7vz/nE4Dks7Xj728/bffhkSLvu/5O+nIeP0fo+uecrp/rYPKfu2nQ9DyuHsovfs29sQ87Z53XMOm38yOcdtyBE9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YNEDxI9SPQg0YOeiP7rer3eZubT+RLnn/mCm76e6zxG9AWIHvQt0X8Pr+Q2j3kq+nX42UQPEj3oiei34ZV8zmN8vS/AZAsSPchOD7LTGdERnRk7fQF2epDJFiR6kJ0eZKczoiM6M3b6Auz0IJMtSPQgOz3ITmdER3Rm7PQF2OlBJluQ6EF2epCdzoiO6MzY6Quw04NMtiDRg+z0IDudER3RmbHTF2CnB5lsQaIH2elBdjojOqIzY6cvwE4PMtmCRA+y04PsdEZ0RGfGTl+AnR5ksgWJHmSnB9npjOiIzl/265gAAACGQZiA+vc7HyOxwMXm0x/w6UGWLUj0IJ8e5NOZ6IjO5tMf8OlBli1I9CCfHuTTmeiIzubTH/DpQZYtSPQgnx7k05noiM7m0x/w6UGWLUj0IJ8e5NOZ6IjO5tMf8OlBli1I9CCfHuTTmeiIzubTH/DpQZYtSPQgnx7k05noiM7m0x/w6UGWLUj0IJ8e5NOZ6IjO5tMf8OlBli1I9CCfHuTTmeiIzubTH/DpQZYtSPQgnx7k05noiM7m0x/w6UGWLUj0IJ8e5NOZ6IjO5tMf8OlBli1I9CCfHuTTmeiIzubTH/DpQZYtSPQgnx7k05noiM7m0x/w6UGWLUj0IJ8e5NOZ6IjO5tMf8OlBli1I9CCfHuTTmeiIzubTH/DpQZYtSPQgnx7k05noiM7m0x/w6UHHfh0TAADAMAgTUP9+52MkFriwbEGiB/n0IJ/OREd0Np/+gE8PsmxBogf59CCfzkRHdDaf/oBPD7JsQaIH+fQgn85ER3Q2n/6ATw+ybEGiB/n0IJ/OREd0Np/+gE8PsmxBogf59CCfzkRHdDaf/oBPD7JsQaIH+fQgn85ER3Q2n/6ATw+ybEGiB/n0IJ/OREd0Np/+gE8PsmxBogf59CCfzkRHdDaf/oBPD7JsQaIH+fQgn85ER3Q2n/6ATw+ybEGiB/n0IJ/OREd0Np/+gE8PsmxBogf59CCfzkRHdDaf/oBPD7JsQaIH+fQgn85ER3Q2n/6ATw+ybEGiB/n0IJ/OREd0Np/+gE8PsmxBogf59CCfzkRHdDaf/oBPD7JsQaIH+fQgn85ER3Q2n/6ATw+ybEGiBx37dUwAAADDIExA/fudj5FY4MKnB/l0Jjqis/n0B3x6kGULEj3Ipwf5dCY6orP59Ad8epBlCxI9yKcH+XQmOqKz+fQHfHqQZQsSPcinB/l0Jjqis/n0B3x6kGULEj3Ipwf5dCY6orP59Ad8epBlCxI9yKcH+XQmOqKz+fQHfHqQZQsSPcinB/l0Jjqis/n0B3x6kGULEj3Ipwf5dCY6orP59AeO/Tq2QSAIgiAYwOiQwCf/NImBt17fVc4G0M6OnR5ksgWJHmSnB9npTHREZ7PTH8BODzLZgkQPstOD7HQmOqKz2ekPYKcHmWxBogfZ6UF2OhMd0bkY/bXtc855u7e43/3H954kepDoQaIHiR4kepDoP/boQAAAAABAkL/1IJdCQ9KHpA9JH5I+JH1I+pD0IelD0oekD0kfkj4kfUj6kPTYqaMVC0EoCsMPsBZbKTWT6v0fc6CyNuYwc3GgA/rdhOw8ST+nBvXoDerRG9SjN6hHb1CP3qAevUE9eoN69Aa9Gd3LBGUc1ch4ZIOZ8VGT4DJsq57gFoNBzYCT4BeLifhqb0Y3tLiNKd3VhXIPHC0ULxcLQDKP/4mkR7Yx4BLcgPpj9e45n35A1UK6CQ/elPCOL4oeE11EpqMjMEAxvAgAZgZ5VWWQyR1lIqM+gn6sqC2VwywMqPF0G9OIkrCEd3xP9MFxjshydLsTOns4twXZmSP6sQz/j450LRYaKIGq5EROKKj/f1RjxZMDUqW6MFllbT76uFG/pis6C3mbvonH0h75bEXYX3fESX3gJ9JC8/ocG1eUVs44JQoe/P7T47N6+eGwrUdfHSm4qeii/B29Th4j4bZfw2Pi6aI3h9mZU0Q206tbRxT8+amIrqjeox9yPT+TyeJieRKQUD4RXXaLOS7kD/t2m+MmDEVheAHn6NrC38iw/2W2tYlzC2TUqaqClDw/2pSOByZvTANO1/bAYggZwj2LzUKPobAe9tSb9+oJT5/oXa83FdIvGI7RrSQ0I/psmvIX0XlK0Dg0VrpCI11C5zwFQyAzFLeSFU2r7jMUYRElvnP05L047I3Te/uygGZEH06jJ/sE4DDTR9IozZjpgQGaUYW7yoKn3fu1XKi+we5a4PPuvevRkY/JR3RjAEcmNCLbsMU28Ty68GnbYF7uXVvJCOUQ3ZITlExWdcj0FoozpEnPwbKHa9wh+pkevZtYXgyTV9GL6b6M7o97r7r6MbrzXPFLCg6NjLltZ3JOzmZsgiRU0gvu5/7RIyu019EPY7+MzpO9B1X9GN3Q99iRZWzq1RNJ6Qehj9IW8obVr4nOlwRNC5eq+clzNgPwD6NnHAT6jO4QPXLbsfMM6Ny8bTRzxjE6XPUOsHzJ4L+7c/RQxHAP0Hfk/j76y0umMJrvo0c+UgsLHpLvm10f/dxTebxC8ImujCk7ccaOkKQEdd1UWuo+bPhu9GCGmTQKtGSbmdE2Ca1uRNMm+pD11bo8H5MJO8IVt3CH6PsnKC0zSRMA9d798Xuf6RuL70UXvgJNzk4/TtDpid63D5XjD6Q7/rwBt3CL6JERT5W/VDSPYBOLHjZ8L3qyQ4tpBzzMwSGYxrOYRrVSE32asGdY0VkeC5MJt3CL6Jk+YQicQ58yalErsu6HpQTgNHq0nYq+F0i1WW8v6vgER8IZv0wnq+YcqQNZ8DtLL6JZXOIm0WG4YnBpzNax9J3IvBtmvQHwtzdnDKPzPJursn+s6YW5lQZay+q36rH314Q7gkvcJXoiA5QRfSpkTOMJVsPGafb85swGwGn0QCYs9Bnabg39NPrKFV0/AK1yDdvhFEYWBy2IaIUTLnGX6Fh21YWCLngyCpkPwyZ6hxF9UdEFyln07FkBmP36p15rPY+uT+oLvYPiPKf2SurHZli//unf/PSuroIbHc6JJyknwworWnQnIuXPo4/VbjezZChOH8Uxeuu6YCiMUFaW/qvDzIjsGfCaf+/o2/PPBYMO51aSPuyGTdGTTC06PPnMZcVCOUZf2Jr3vfoFT/pq7DS6ocGTJZP+tv0mXAkQMqnbe6dIh0vcILoLKy16WpPQ6eihkOtMzvY5rBcvhrFHDyIy4dw+up1H820lLKPZLZefRY/j5G6tVFPIFQ+BrP27IJCyfbnFC5Ye17g2+sxFDMe5u5JjaX3dtuXq2Sbj4sna/nJi42NGIlOL/rWqogfD4zK3seOxA5IcPkQRAGyvEInGFD5ZNE59pjKMh5FccE74lh+B3urNNaObfH+2FqmeAjfVQtL31mkl/QSgkiyxz+s45y+jT/JT9axoXPUkTYKWDcl5AuB8273lgUHDYTZRgnXjdO8KWdHpBdpIxrNjEkMuuMal0TPp10UXcNEnbDfXM1BIzovDZupN8rrkMQD4MvrCxvcBvUHGnjXk1HeQAGRzUNHUVUTU52rVv+qhTNhMrBiWtm8tsIu4yKXRscXTWmG7fSptWUOC4qLDkTEZryRpEjYuOJyxPZOb8F1ix5EPCYrDjlvkpyXjKp//wPiWPtHf0Cf6G/pEf0Of6G/oRzv2csMwEAMxdLQfrxH1329iBEgRIV8LhA4aowMZHcjoQEYHMjqQ0YGMDmR0IKMDGR3I6EBGBzI6kNGBjA5kdKDMFszM1YIZOS2Yk2rBVPZooYxXPHWaysdqgaw8bquDrDtf5d8GcVV+dp3hSvPn5ji183gDFF6UIIVndoYAAAAASUVORK5CYII=";
    },
    3009: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !t.isSortType && t.$permission("bargain"),
                  expression: "!isSortType && $permission('bargain')",
                },
              ],
              style: { padding: "0 " + 2 * t.prConfig + "rpx" },
            },
            [
              t.bargList.length > 0
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "barg",
                      class: 0 === t.bgStyle ? "" : "borderRadius15",
                      style:
                        "background: linear-gradient(180deg, " +
                        t.bgColor[0].item +
                        " 0%, " +
                        t.bgColor[1].item +
                        " 100%);margin-top:" +
                        2 * t.mbCongfig +
                        "rpx;",
                    },
                    [
                      i("v-uni-view", { staticClass: "title", style: "color:" + t.titleColor + ";" }, [
                        t._v(t._s(t.$t("砍价专区·BARGAINING"))),
                      ]),
                      i(
                        "v-uni-view",
                        { staticClass: "barg-swiper" },
                        [
                          i(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", display: "flex" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "true" },
                            },
                            [
                              i(
                                "v-uni-view",
                                { staticClass: "wrapper" },
                                [
                                  t._l(t.bargList, function (e, a) {
                                    return [
                                      i(
                                        "v-uni-view",
                                        {
                                          key: a + "_0",
                                          staticClass: "list-box",
                                          style: "margin-right:" + 2 * t.productGap + "rpx;",
                                          on: {
                                            click: function (i) {
                                              (arguments[0] = i = t.$handleEvent(i)), t.bargDetail(e);
                                            },
                                          },
                                        },
                                        [
                                          i("v-uni-image", {
                                            staticClass: "slide-image",
                                            attrs: { src: e.image, mode: "aspectFill" },
                                          }),
                                          t.priceShow || t.bntShow
                                            ? i(
                                                "v-uni-view",
                                                { staticClass: "info-txt" },
                                                [
                                                  t.priceShow
                                                    ? i(
                                                        "v-uni-view",
                                                        { staticClass: "price", style: "color:" + t.themeColor + ";" },
                                                        [
                                                          i("v-uni-text", [t._v(t._s(t.$t("￥")))]),
                                                          t._v(t._s(e.price)),
                                                        ],
                                                        1
                                                      )
                                                    : t._e(),
                                                  t.bntShow
                                                    ? i(
                                                        "v-uni-view",
                                                        {
                                                          staticClass: "txt",
                                                          style: "background-color:" + t.themeColor + ";",
                                                        },
                                                        [t._v(t._s(t.$t("立即砍价")))]
                                                      )
                                                    : t._e(),
                                                ],
                                                1
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ];
                                  }),
                                  i(
                                    "v-uni-navigator",
                                    {
                                      staticClass: "more-box",
                                      attrs: { url: "/pages/activity/goods_bargain/index", "hover-class": "none" },
                                    },
                                    [
                                      i("v-uni-view", { staticClass: "txt" }, [t._v(t._s(t.$t("查看更多")))]),
                                      i("v-uni-image", { attrs: { src: "/static/images/mores.png" } }),
                                    ],
                                    1
                                  ),
                                ],
                                2
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "304b": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("b725"),
        n = i("a105");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("92e0");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "4aea5106", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "305a": function (t, e, i) {
      var a = i("d4013");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("230b860b", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    3108: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("12c6"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "323e": function (t, e, i) {
      "use strict";
      i("7a82");
      var a = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var n = a(i("47fd")),
        o = {
          name: "richText",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          components: { "jyf-parser": n.default },
          data: function () {
            return {
              tagStyle: { img: "width:100%;display:block;", table: "width:100%", video: "width:100%" },
              bgColor: this.dataConfig.bgColor.color[0].item,
              lrConfig: this.dataConfig.lrConfig.val,
              description: this.dataConfig.richText.val,
              udConfig: this.dataConfig.udConfig.val,
            };
          },
          created: function () {},
          methods: {},
        };
      e.default = o;
    },
    3320: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = {
        name: "guide",
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {
            heightConfig: this.dataConfig.heightConfig.val,
            lineColor: this.dataConfig.lineColor.color[0].item,
            lineStyle: this.dataConfig.lineStyle.list[this.dataConfig.lineStyle.type].style,
            lrEdge: this.dataConfig.lrEdge.val,
            mbConfig: this.dataConfig.mbConfig.val,
          };
        },
        created: function () {},
        methods: {},
      };
      e.default = a;
    },
    "334d": function (t, e, i) {
      var a = i("45c8");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("cfd4c8e8", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    3398: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var a = {
        name: "Loading",
        props: { loaded: { type: Boolean, default: !1 }, loading: { type: Boolean, default: !1 } },
      };
      e.default = a;
    },
    "379e": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
            [
              t.heightConfig
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "lines",
                      style: "padding:0 " + 2 * t.lrEdge + "rpx;margin-top:" + 2 * t.mbConfig + "rpx;",
                    },
                    [
                      i("v-uni-view", {
                        staticClass: "item",
                        style:
                          "border-bottom-width:" +
                          2 * t.heightConfig +
                          "rpx;border-bottom-color:" +
                          t.lineColor +
                          ";border-bottom-style:" +
                          t.lineStyle +
                          ";",
                      }),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    3810: function (t, e, i) {
      "use strict";
      var a = i("168e"),
        n = i.n(a);
      n.a;
    },
    "38cb": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.spikeList.length > 0 && t.$permission("seckill")
            ? i(
                "v-uni-view",
                { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "spike-box",
                      class: t.conStyle ? "borderRadius20" : "",
                      style: {
                        background: t.bgColor,
                        margin: "0 " + 2 * t.prConfig + "rpx",
                        marginTop: 2 * t.mbConfig + "rpx",
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "hd" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "left" },
                            [
                              t.imgUrl
                                ? i("v-uni-image", { staticClass: "icon", attrs: { src: t.imgUrl } })
                                : i("v-uni-image", {
                                    staticClass: "icon",
                                    attrs: { src: "/static/images/spike-icon-002.gif" },
                                  }),
                              i("v-uni-view", { staticClass: "name" }, [t._v(t._s(t.$t("限时秒杀")))]),
                              i("countDown", {
                                attrs: {
                                  "is-day": !1,
                                  "tip-text": " ",
                                  "day-text": " ",
                                  "hour-text": " : ",
                                  "minute-text": " : ",
                                  "second-text": " ",
                                  datatime: t.datatime,
                                  bgColor: t.countDownColor,
                                  colors: t.themeColor,
                                },
                              }),
                            ],
                            1
                          ),
                          i(
                            "v-uni-navigator",
                            { staticClass: "more", attrs: { url: "/pages/activity/goods_seckill/index" } },
                            [
                              t._v(t._s(t.$t("更多"))),
                              i("v-uni-text", {
                                staticClass: "iconfont icon-jiantou",
                                attrs: { "hover-class": "none" },
                              }),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "spike-wrapper" },
                        [
                          i(
                            "v-uni-scroll-view",
                            {
                              staticStyle: { "white-space": "nowrap", display: "flex" },
                              attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                            },
                            t._l(t.spikeList, function (e, a) {
                              return i(
                                "v-uni-navigator",
                                {
                                  key: a,
                                  staticClass: "spike-item",
                                  style: "margin-right:" + 2 * t.lrConfig + "rpx;",
                                  attrs: {
                                    url:
                                      "/pages/activity/goods_seckill_details/index?id=" +
                                      e.id +
                                      "&time=" +
                                      t.datatime +
                                      "&status=1",
                                    "hover-class": "none",
                                  },
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "img-box" },
                                    [
                                      i("v-uni-image", { attrs: { src: e.image, mode: "aspectFill" } }),
                                      t.discountShow
                                        ? i(
                                            "v-uni-view",
                                            {
                                              staticClass: "msg flex-aj-center",
                                              style: "color:" + t.themeColor + ";border-color:" + t.themeColor + ";",
                                            },
                                            [t._v(t._s(e.discountNum) + t._s(t.$t("折")))]
                                          )
                                        : t._e(),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "info" },
                                    [
                                      t.titleShow
                                        ? i("v-uni-view", { staticClass: "name line1" }, [t._v(t._s(e.title))])
                                        : t._e(),
                                      i(
                                        "v-uni-view",
                                        { staticClass: "price-box" },
                                        [
                                          t.seckillShow
                                            ? i(
                                                "v-uni-text",
                                                {
                                                  staticClass: "tips",
                                                  style: "background-color:" + t.themeColor + ";",
                                                },
                                                [t._v(t._s(t.$t("抢")))]
                                              )
                                            : t._e(),
                                          t.priceShow
                                            ? i(
                                                "v-uni-text",
                                                { staticClass: "price", style: "color:" + t.themeColor + ";" },
                                                [i("v-uni-text", [t._v(t._s(t.$t("￥")))]), t._v(t._s(e.price))],
                                                1
                                              )
                                            : t._e(),
                                        ],
                                        1
                                      ),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              );
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  ),
                ],
                1
              )
            : t._e();
        },
        n = [];
    },
    "3aed": function (t, e, i) {
      "use strict";
      var a = i("334d"),
        n = i.n(a);
      n.a;
    },
    "3b05": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { style: t.colorStyle },
            [
              i(
                "v-uni-view",
                { staticClass: "coupon-window", class: 1 == t.window ? "on" : "" },
                [
                  i("v-uni-image", {
                    staticClass: "co-bag",
                    attrs: { src: t.imgHost + "/statics/images/co-bag.png", mode: "" },
                  }),
                  i(
                    "v-uni-view",
                    { staticClass: "couponWinList" },
                    t._l(t.couponList, function (e, a) {
                      return i(
                        "v-uni-view",
                        { key: a, staticClass: "item acea-row row-between-wrapper" },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "money font-color" },
                            [
                              t._v(t._s(t.$t("￥"))),
                              i("v-uni-text", { staticClass: "num" }, [t._v(t._s(e.coupon_price))]),
                            ],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "text" },
                            [
                              i("v-uni-view", { staticClass: "name" }, [
                                t._v(
                                  t._s(t.$t("购物满")) + t._s(e.use_min_price) + t._s(t.$t("减")) + t._s(e.coupon_price)
                                ),
                              ]),
                              e.coupon_time
                                ? i("v-uni-view", [
                                    t._v(t._s(t.$t("领取后")) + t._s(e.coupon_time) + t._s(t.$t("天内可用"))),
                                  ])
                                : i("v-uni-view", [
                                    t._v(
                                      t._s(e.start_time ? e.start_time + "-" : "") +
                                        t._s(0 === e.end_time ? t.$t("不限时") : e.end_time)
                                    ),
                                  ]),
                            ],
                            1
                          ),
                        ],
                        1
                      );
                    }),
                    1
                  ),
                  i(
                    "v-uni-view",
                    { staticClass: "lid" },
                    [
                      t.window
                        ? i(
                            "v-uni-navigator",
                            {
                              staticClass: "bnt",
                              attrs: { "hover-class": "none", url: "/pages/users/user_get_coupon/index" },
                            },
                            [t._v(t._s(t.$t("立即领取")))]
                          )
                        : t._e(),
                      i("v-uni-view", {
                        staticClass: "iconfont icon-guanbi3",
                        on: {
                          click: function (e) {
                            (arguments[0] = e = t.$handleEvent(e)), t.close.apply(void 0, arguments);
                          },
                        },
                      }),
                    ],
                    1
                  ),
                ],
                1
              ),
              i("v-uni-view", { staticClass: "mask", attrs: { catchtouchmove: "true", hidden: 0 == t.window } }),
            ],
            1
          );
        },
        n = [];
    },
    "3ee0": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = i("5743"),
        n = {
          name: "articleList",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              articleList: [],
              numConfig: this.dataConfig.numConfig.val,
              selectConfig: this.dataConfig.selectConfig.activeValue,
              listStyle: this.dataConfig.listStyle.type,
              bgColor: this.dataConfig.bgColor.color[0].item,
              itemConfig: this.dataConfig.itemConfig.val,
              mbConfig: this.dataConfig.mbConfig.val,
              bgStyle: this.dataConfig.bgStyle.type,
              prConfig: this.dataConfig.prConfig.val,
              conStyle: this.dataConfig.conStyle.type,
            };
          },
          created: function () {},
          mounted: function () {
            this.getCidArticle();
          },
          methods: {
            getCidArticle: function () {
              var t = this,
                e = this.$config.LIMIT;
              (0, a.getArticleList)(t.selectConfig || 0, {
                page: 1,
                limit: this.numConfig >= e ? e : this.numConfig,
              }).then(function (e) {
                t.articleList = e.data;
              });
            },
          },
        };
      e.default = n;
    },
    "3f12": function (t, e, i) {
      "use strict";
      var a = i("0b28"),
        n = i.n(a);
      n.a;
    },
    4084: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: !t.isSortType && t.menus.length,
                  expression: "!isSortType && menus.length",
                },
              ],
              class: t.bgStyle ? "borderRadius15" : "",
              style: {
                background: t.bgColor,
                margin: "0 " + 2 * t.prConfig + "rpx",
                marginTop: 2 * t.mbConfig + "rpx",
              },
            },
            [
              t.isMany
                ? i(
                    "v-uni-view",
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "swiper" },
                        [
                          i(
                            "v-uni-swiper",
                            {
                              style: "height:" + t.navHigh + "px;",
                              attrs: { interval: t.interval, duration: t.duration },
                              on: {
                                change: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.bannerfun.apply(void 0, arguments);
                                },
                              },
                            },
                            t._l(t.menuList, function (e, a) {
                              return i(
                                "v-uni-swiper-item",
                                { key: a },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "nav acea-row", attrs: { id: "nav" + a } },
                                    t._l(e.list, function (e, a) {
                                      return i(
                                        "v-uni-view",
                                        {
                                          key: a,
                                          staticClass: "item",
                                          class: 1 === t.number ? "four" : 2 === t.number ? "five" : "",
                                          style: "color:" + t.titleColor,
                                          on: {
                                            click: function (i) {
                                              (arguments[0] = i = t.$handleEvent(i)), t.menusTap(e.info[1].value);
                                            },
                                          },
                                        },
                                        [
                                          i(
                                            "v-uni-view",
                                            { staticClass: "pictrue skeleton-radius", class: t.menuStyle ? "" : "on" },
                                            [i("v-uni-image", { attrs: { src: e.img, mode: "aspectFill" } })],
                                            1
                                          ),
                                          i("v-uni-view", { staticClass: "menu-txt" }, [
                                            t._v(t._s(t.$t(e.info[0].value))),
                                          ]),
                                        ],
                                        1
                                      );
                                    }),
                                    1
                                  ),
                                ],
                                1
                              );
                            }),
                            1
                          ),
                        ],
                        1
                      ),
                      t.docConfig < 2
                        ? i(
                            "v-uni-view",
                            { staticClass: "dot acea-row row-center-wrapper" },
                            t._l(t.menuList, function (e, a) {
                              return i("v-uni-view", {
                                staticClass: "dot-item",
                                class: { "line_dot-item": 0 === t.docConfig, "": 1 === t.docConfig },
                                style: t.active == a ? "background:" + t.dotColor : "",
                              });
                            }),
                            1
                          )
                        : t._e(),
                    ],
                    1
                  )
                : i(
                    "v-uni-view",
                    { staticClass: "nav oneNav" },
                    [
                      i(
                        "v-uni-scroll-view",
                        {
                          staticStyle: { "white-space": "nowrap", display: "flex" },
                          attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                        },
                        [
                          t._l(t.menus, function (e, a) {
                            return [
                              i(
                                "v-uni-view",
                                {
                                  key: a + "_0",
                                  staticClass: "item",
                                  style: "color:" + t.titleColor,
                                  on: {
                                    click: function (i) {
                                      (arguments[0] = i = t.$handleEvent(i)), t.menusTap(e.info[1].value);
                                    },
                                  },
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "pictrue skeleton-radius", class: t.menuStyle ? "" : "on" },
                                    [i("v-uni-image", { attrs: { src: e.img, mode: "aspectFill" } })],
                                    1
                                  ),
                                  i("v-uni-view", { staticClass: "menu-txt" }, [t._v(t._s(t.$t(e.info[0].value)))]),
                                ],
                                1
                              ),
                            ];
                          }),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
            ],
            1
          );
        },
        n = [];
    },
    "42f5": function (t, e, i) {
      var a = i("fe63");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("38c51c06", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    4463: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      i("5743");
      var a = i("4e39"),
        n = {
          name: "follow",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              followCode: !1,
              followUrl: this.dataConfig.codeConfig ? this.dataConfig.codeConfig.url : "",
              bgColor: this.dataConfig.bgColor.color[0].item,
              imgConfig: this.dataConfig.imgConfig.url,
              mbConfig: this.dataConfig.mbConfig.val,
              themeColor: this.dataConfig.themeColor.color[0].item,
              titleConfig: this.dataConfig.titleConfig.value,
              subscribe: !1,
            };
          },
          created: function () {},
          mounted: function () {
            var t = this;
            (0, a.getSubscribe)()
              .then(function (e) {
                t.subscribe = e.data.subscribe || !1;
              })
              .catch(function () {});
          },
          methods: {
            followTap: function () {
              this.followCode = !0;
            },
            closeFollowCode: function () {
              this.followCode = !1;
            },
          },
        };
      e.default = n;
    },
    "45c8": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.articleList[data-v-a99652b4]{background-color:#fff;padding:%?20?% 0}.articleList .item[data-v-a99652b4]{padding:%?20?%;background-color:#fff;margin:0 %?20?%}.articleList .item[data-v-a99652b4]:last-child{margin-bottom:0!important}.articleList .item .text[data-v-a99652b4]{width:60%}.articleList .item .text .name[data-v-a99652b4]{font-size:%?30?%;line-height:%?41?%;color:#282828;height:%?82?%}.articleList .item .text .time[data-v-a99652b4]{font-size:%?24?%;color:#999;margin-top:%?40?%}.articleList .item .pictrue[data-v-a99652b4]{width:37%;height:%?156?%;border-radius:%?6?%}.articleList .item .pictrue uni-image[data-v-a99652b4]{width:100%;height:100%;border-radius:%?6?%}',
          "",
        ]),
        (t.exports = e);
    },
    "46d8": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("f7e9"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "472c": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = {
        name: "countDown",
        props: {
          justifyLeft: { type: String, default: "" },
          tipText: { type: String, default: "倒计时" },
          dayText: { type: String, default: "天" },
          hourText: { type: String, default: "时" },
          minuteText: { type: String, default: "分" },
          secondText: { type: String, default: "秒" },
          datatime: { type: Number, default: 0 },
          isDay: { type: Boolean, default: !0 },
          bgColor: { type: String, default: "" },
          colors: { type: String, default: "" },
        },
        data: function () {
          return { day: "00", hour: "00", minute: "00", second: "00" };
        },
        created: function () {
          this.show_time();
        },
        mounted: function () {},
        methods: {
          show_time: function () {
            var t = this;
            function e() {
              var e = t.datatime - Date.parse(new Date()) / 1e3,
                i = 0,
                a = 0,
                n = 0,
                o = 0;
              e > 0
                ? ((i = !0 === t.isDay ? Math.floor(e / 86400) : 0),
                  (a = Math.floor(e / 3600) - 24 * i),
                  (n = Math.floor(e / 60) - 24 * i * 60 - 60 * a),
                  (o = Math.floor(e) - 24 * i * 60 * 60 - 60 * a * 60 - 60 * n),
                  a <= 9 && (a = "0" + a),
                  n <= 9 && (n = "0" + n),
                  o <= 9 && (o = "0" + o),
                  (t.day = i),
                  (t.hour = a),
                  (t.minute = n),
                  (t.second = o))
                : ((t.day = "00"), (t.hour = "00"), (t.minute = "00"), (t.second = "00"));
            }
            e(), setInterval(e, 1e3);
          },
        },
      };
      e.default = a;
    },
    "47fd": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("8713"),
        n = i("5f12");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("be15");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "ad63bb64", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "4eb3": function (t, e, i) {
      var a = i("24fb"),
        n = i("1de5"),
        o = i("2f22");
      e = a(!1);
      var r = n(o);
      e.push([
        t.i,
        '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.follow[data-v-5b9190f4]{padding:0 %?20?%;height:%?140?%;background:rgba(0,0,0,.02)}.follow .picTxt .pictrue[data-v-5b9190f4]{width:%?92?%;height:%?92?%;border-radius:50%}.follow .picTxt .pictrue uni-image[data-v-5b9190f4]{width:100%;height:100%;border-radius:50%}.follow .picTxt .name[data-v-5b9190f4]{font-size:%?32?%;color:#000;margin-left:%?32?%;width:%?400?%}.follow .notes[data-v-5b9190f4]{font-size:%?28?%;color:#02a0e8;width:%?120?%;height:%?52?%;border:%?2?% solid #02a0e8;opacity:1;border-radius:%?6?%}.followCode .pictrue[data-v-5b9190f4]{width:%?500?%;height:%?530?%;border-radius:12px;left:50%;top:50%;margin-left:%?-250?%;margin-top:%?-360?%;position:fixed;z-index:10000}.followCode .pictrue .code-bg[data-v-5b9190f4]{display:flex;justify-content:center;width:100%;height:100%;background-image:url(' +
          r +
          ");background-size:100% 100%}.followCode .pictrue .imgs[data-v-5b9190f4]{width:%?310?%;height:%?310?%;margin-top:%?92?%}.followCode .mask[data-v-5b9190f4]{z-index:9999}",
        "",
      ]),
        (t.exports = e);
    },
    "4eb33": function (t, e, i) {
      "use strict";
      var a = i("d9c0"),
        n = i.n(a);
      n.a;
    },
    "4ec1": function (t, e, i) {
      var a = i("0433");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("09084270", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "507c": function (t, e, i) {
      var a = i("7bf2");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("211e7e87", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "51b3": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("4463"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    5229: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("568c"),
        n = i("6454");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("03a8");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "1bd5d2ba", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "52e1": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("974d"),
        n = i("5bcf2");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("6a0c");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "67e45f71", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "54f8": function (t, e, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = function (t, e) {
          var i = ("undefined" !== typeof Symbol && t[Symbol.iterator]) || t["@@iterator"];
          if (!i) {
            if (Array.isArray(t) || (i = (0, a.default)(t)) || (e && t && "number" === typeof t.length)) {
              i && (t = i);
              var n = 0,
                o = function () {};
              return {
                s: o,
                n: function () {
                  return n >= t.length ? { done: !0 } : { done: !1, value: t[n++] };
                },
                e: function (t) {
                  throw t;
                },
                f: o,
              };
            }
            throw new TypeError(
              "Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."
            );
          }
          var r,
            s = !0,
            c = !1;
          return {
            s: function () {
              i = i.call(t);
            },
            n: function () {
              var t = i.next();
              return (s = t.done), t;
            },
            e: function (t) {
              (c = !0), (r = t);
            },
            f: function () {
              try {
                s || null == i["return"] || i["return"]();
              } finally {
                if (c) throw r;
              }
            },
          };
        }),
        i("a4d3"),
        i("e01a"),
        i("d3b7"),
        i("d28b"),
        i("3ca3"),
        i("ddb0"),
        i("d9e2"),
        i("d401");
      var a = (function (t) {
        return t && t.__esModule ? t : { default: t };
      })(i("dde1"));
    },
    5589: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.header[data-v-76550ce9]{width:100%;height:%?100?%;background:linear-gradient(90deg,#f62c2c 50%,#f96e29)}.header .serch-wrapper[data-v-76550ce9]{padding:%?20?% %?20?% 0 0}.header .serch-wrapper .logo[data-v-76550ce9]{height:%?60?%;margin-right:%?20?%;width:%?154?%;text-align:center}.header .serch-wrapper .logo uni-image[data-v-76550ce9]{width:100%;height:100%}.header .serch-wrapper .input[data-v-76550ce9]{flex:1;height:%?58?%;padding:0 0 0 %?30?%;background:#f7f7f7;border:1px solid #f1f1f1;color:#bbb;font-size:%?28?%}.header .serch-wrapper .input .iconfont[data-v-76550ce9]{margin-right:%?20?%}.header .serch-wrapper .input.on[data-v-76550ce9]{width:100%}.header .serch-wrapper .input.fillet[data-v-76550ce9]{border-radius:%?29?%}.header .serch-wrapper .input.row-center[data-v-76550ce9]{padding:0}',
          "",
        ]),
        (t.exports = e);
    },
    "568c": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }],
              staticStyle: { "touch-action": "none" },
            },
            [
              i(
                "v-uni-view",
                {
                  staticClass: "customerService",
                  style: "top:" + t.topConfig,
                  on: {
                    touchmove: function (e) {
                      e.stopPropagation(),
                        e.preventDefault(),
                        (arguments[0] = e = t.$handleEvent(e)),
                        t.setTouchMove.apply(void 0, arguments);
                    },
                  },
                },
                [
                  i(
                    "v-uni-view",
                    {
                      staticClass: "pictrue",
                      on: {
                        click: function (e) {
                          (arguments[0] = e = t.$handleEvent(e)), t.goCustomer.apply(void 0, arguments);
                        },
                      },
                    },
                    [i("v-uni-image", { attrs: { src: t.logoConfig } })],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    "56d1": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = {
        name: "news",
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {
            indicatorDots: !1,
            autoplay: !0,
            duration: 500,
            itemNew: this.dataConfig.listConfig.list,
            logoConfig: this.dataConfig.logoConfig.url,
            mbConfig: this.dataConfig.mbConfig.val,
            txtStyle: this.dataConfig.txtStyle.type,
            txtColor: this.dataConfig.txtColor.color[0].item,
            bgColor: this.dataConfig.bgColor.color[0].item,
            bgStyle: this.dataConfig.bgStyle.type,
            prConfig: this.dataConfig.prConfig.val,
          };
        },
        created: function () {},
        mounted: function () {},
        methods: {
          jump: function (t) {
            this.$util.JumpPath(t);
          },
        },
      };
      e.default = a;
    },
    5781: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("58ef"),
        n = i("d1a7");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("e63b");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "10b193c3", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "58ef": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
            [
              t.titleConfig
                ? i(
                    "v-uni-view",
                    { style: "margin:0 " + 2 * t.prConfig + "rpx;" },
                    [
                      i(
                        "v-uni-view",
                        {
                          staticClass: "title",
                          class: [
                            0 == t.textPosition ? "left" : 2 == t.textPosition ? "right" : "",
                            1 == t.textStyle ? "italics" : 2 == t.textStyle ? "blod" : "",
                            0 === t.bgStyle ? "" : "borderRadius15",
                          ],
                          style:
                            "font-size:" +
                            t.fontSize +
                            "rpx;margin-top:" +
                            2 * t.mbConfig +
                            "rpx;background-color:" +
                            t.titleColor +
                            ";color:" +
                            t.themeColor +
                            ";",
                          on: {
                            click: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.goLink.apply(void 0, arguments);
                            },
                          },
                        },
                        [i("div", [t._v(t._s(t.titleConfig))])]
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    5982: function (t, e, i) {
      "use strict";
      var a = i("4ec1"),
        n = i.n(a);
      n.a;
    },
    "5bcf2": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7153"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "5bf8": function (t, e, i) {
      var a = i("e9ec");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("1681aead", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "5cad": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7883"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "5f12": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("de0d"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "5f5e": function (t, e, i) {
      var a = i("df7d");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("3da908b0", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "63a1": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = uni.getSystemInfoSync().statusBarHeight + "px",
        n = {
          name: "headerSerch",
          props: { dataConfig: { type: Object, default: function () {} }, special: { type: Number, default: 0 } },
          data: function () {
            return {
              statusBarHeight: a,
              marTop: 0,
              bgColor: this.dataConfig.bgColor.color,
              boxStyle: this.dataConfig.boxStyle.type,
              logoConfig: this.dataConfig.logoConfig.url,
              mbConfig: this.dataConfig.mbConfig.val,
              txtStyle: this.dataConfig.txtStyle.type,
              hotWords: this.dataConfig.hotWords.list,
              prConfig: this.dataConfig.prConfig.val,
            };
          },
          mounted: function () {
            uni.setStorageSync("hotList", this.hotWords), this.$store.commit("hotWords/setHotWord", this.hotWords);
          },
          methods: {},
        };
      e.default = n;
    },
    6454: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("c5f1"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "64ec": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("3b05"),
        n = i("0ccd");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("bae1");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "9f68e33a", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    6633: function (t, e, i) {
      "use strict";
      var a = i("305a"),
        n = i.n(a);
      n.a;
    },
    6669: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            [
              i(
                "v-uni-view",
                {
                  staticClass: "navTabBox",
                  class: { isFixed: t.isFixed },
                  style:
                    "background: linear-gradient(90deg, " +
                    t.bgColor[0].item +
                    " 50%, " +
                    t.bgColor[1].item +
                    " 100%);margin-top:" +
                    2 * t.mbConfig +
                    "rpx;color:" +
                    t.txtColor +
                    ";top:" +
                    t.isTop,
                },
                [
                  i(
                    "v-uni-view",
                    { staticClass: "longTab" },
                    [
                      i(
                        "v-uni-scroll-view",
                        {
                          staticStyle: { "white-space": "nowrap", display: "flex" },
                          attrs: {
                            "scroll-x": "true",
                            "scroll-with-animation": !0,
                            "scroll-left": t.tabLeft,
                            "show-scrollbar": "true",
                          },
                        },
                        [
                          t._l(t.tabTitle, function (e, a) {
                            return i(
                              "v-uni-view",
                              {
                                key: a,
                                staticClass: "longItem",
                                class: a === t.tabClick ? "click" : "",
                                style: "width:" + t.isWidth + "px",
                                attrs: {
                                  url: "/pages/goods/goods_list/index?cid=" + e.id + "&title=" + e.cate_name,
                                  "data-index": a,
                                  id: "id" + a,
                                },
                                on: {
                                  click: function (i) {
                                    (arguments[0] = i = t.$handleEvent(i)), t.longClick(e, a);
                                  },
                                },
                              },
                              [t._v(t._s(t.$t(e.cate_name)))]
                            );
                          }),
                          i(
                            "v-uni-view",
                            {
                              staticClass: "underlineBox",
                              style: "transform:translateX(" + t.isLeft + "px);width:" + t.isWidth + "px",
                            },
                            [i("v-uni-view", { staticClass: "underline" })],
                            1
                          ),
                        ],
                        2
                      ),
                    ],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    6933: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("6ea1"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "6a0c": function (t, e, i) {
      "use strict";
      var a = i("b43b"),
        n = i.n(a);
      n.a;
    },
    "6a6d": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("1293b"),
        n = i("51b3");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("ee80");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "5b9190f4", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "6bac": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = { easyLoadimage: i("cad3").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "recommend", style: t.colorStyle },
            [
              i(
                "v-uni-view",
                { staticClass: "title acea-row row-center-wrapper" },
                [
                  i("v-uni-text", { staticClass: "iconfont icon-zhuangshixian" }),
                  i("v-uni-text", { staticClass: "name" }, [t._v(t._s(t.$t("热门推荐")))]),
                  i("v-uni-text", { staticClass: "iconfont icon-zhuangshixian lefticon" }),
                ],
                1
              ),
              i(
                "v-uni-view",
                { staticClass: "recommendList acea-row row-between-wrapper" },
                t._l(t.hostProduct, function (e, a) {
                  return i(
                    "v-uni-view",
                    {
                      key: a,
                      staticClass: "item",
                      attrs: { "hover-class": "none" },
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "pictrue" },
                        [
                          i("easy-loadimage", { attrs: { mode: "widthFix", "image-src": e.image } }),
                          e.activity && "1" === e.activity.type && t.$permission("seckill")
                            ? i("span", { staticClass: "pictrue_log_big pictrue_log_class" }, [
                                t._v(t._s(t.$t("秒杀"))),
                              ])
                            : t._e(),
                          e.activity && "2" === e.activity.type && t.$permission("bargain")
                            ? i("span", { staticClass: "pictrue_log_big pictrue_log_class" }, [
                                t._v(t._s(t.$t("砍价"))),
                              ])
                            : t._e(),
                          e.activity && "3" === e.activity.type && t.$permission("combination")
                            ? i("span", { staticClass: "pictrue_log_big pictrue_log_class" }, [
                                t._v(t._s(t.$t("拼团"))),
                              ])
                            : t._e(),
                        ],
                        1
                      ),
                      i("v-uni-view", { staticClass: "name line2" }, [t._v(t._s(e.store_name))]),
                      i(
                        "v-uni-view",
                        { staticClass: "money font-color" },
                        [t._v(t._s(t.$t("￥"))), i("v-uni-text", { staticClass: "num" }, [t._v(t._s(e.price))])],
                        1
                      ),
                    ],
                    1
                  );
                }),
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    "6c66": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("1cbd"),
        n = i("6933");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("7a54");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "77e26a3f", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "6cae": function (t, e, i) {
      var a = i("4eb3");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("0143435c", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "6e83": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("3398"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "6e93": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("379e"),
        n = i("ec11");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("1afb");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "24ef7e60", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "6ea1": function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = {
        name: "activeParty",
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {
            titleConfig: this.dataConfig.titleConfig.value,
            desConfig: this.dataConfig.desConfig.value,
            explosiveMoney: this.dataConfig.menuConfig.list,
            themeColor: this.dataConfig.themeColor.color[0].item,
            bgColor: this.dataConfig.bgColor.color,
            mbConfig: this.dataConfig.mbConfig.val,
            boxColor: this.dataConfig.boxColor.color[0].item,
          };
        },
        created: function () {},
        methods: {
          goDetail: function (t) {
            var e = t.info[2].value;
            this.$util.JumpPath(e);
          },
        },
      };
      e.default = a;
    },
    7118: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = {
        name: "titles",
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {
            fontSize: 2 * this.dataConfig.fontSize.val,
            linkConfig: this.dataConfig.linkConfig.value,
            mbConfig: this.dataConfig.mbConfig.val,
            textPosition: this.dataConfig.textPosition.type,
            textStyle: this.dataConfig.textStyle.type,
            titleColor: this.dataConfig.titleColor.color[0].item,
            titleConfig: this.dataConfig.titleConfig.value,
            themeColor: this.dataConfig.themeColor.color[0].item,
            prConfig: this.dataConfig.prConfig.val,
            bgStyle: this.dataConfig.bgStyle.type,
          };
        },
        created: function () {},
        methods: {
          goLink: function () {
            this.$util.JumpPath(this.linkConfig);
          },
        },
      };
      e.default = a;
    },
    7153: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = {
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {};
        },
        computed: {
          imageRadius: function () {},
          hotspotWrapStyle: function () {
            return { "margin-top": "".concat(this.dataConfig.mbConfig.val, "rpx") };
          },
        },
        methods: {
          goPage: function (t) {
            this.$util.JumpPath(t);
          },
        },
      };
      e.default = a;
    },
    7428: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.dot[data-v-7db5b738]{width:100%;padding-bottom:%?20?%}.dot .instruct[data-v-7db5b738]{width:%?50?%;height:%?36?%;line-height:%?36?%;background-color:rgba(0,0,0,.8);color:#fff;border-radius:%?16?%;font-size:%?24?%;text-align:center}.dot .dot-item[data-v-7db5b738]{width:%?10?%;height:%?10?%;background:rgba(0,0,0,.4);border-radius:50%;margin:0 4px}.dot .dot-item.line_dot-item[data-v-7db5b738]{width:%?20?%;height:%?5?%;border-radius:%?3?%}.nav.oneNav[data-v-7db5b738]{padding-bottom:%?25?%}.nav .item[data-v-7db5b738]{margin-top:%?30?%;width:%?160?%;text-align:center;font-size:%?24?%;display:inline-block}.nav .item .pictrue[data-v-7db5b738]{width:%?90?%;height:%?90?%;margin:0 auto}.nav .item .pictrue uni-image[data-v-7db5b738]{width:100%;height:100%;border-radius:50%}.nav .item .pictrue.on uni-image[data-v-7db5b738]{border-radius:0}.nav .item .menu-txt[data-v-7db5b738]{margin-top:%?15?%}.swiper[data-v-7db5b738]{z-index:20;position:relative;overflow:hidden;padding-bottom:%?30?%}.swiper .nav .item[data-v-7db5b738]{width:33.3333%}.swiper .nav .item.four[data-v-7db5b738]{width:25%}.swiper .nav .item.five[data-v-7db5b738]{width:20%}.swiper uni-swiper[data-v-7db5b738],\n.swiper .swiper-item[data-v-7db5b738]{width:100%;display:block}',
          "",
        ]),
        (t.exports = e);
    },
    7429: function (t, e, i) {
      var a = i("db40");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("5d16f60e", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    7495: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = { easyLoadimage: i("cad3").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }],
              staticClass: "index-product-wrapper",
              class: t.iSshowH ? "on" : "",
              style: "margin-top:" + 2 * t.mbConfig + "rpx;",
            },
            [
              i(
                "v-uni-view",
                {
                  staticClass: "nav-bd",
                  style: {
                    justifyContent:
                      0 === t.titleConfig ? "flex-start" : 1 === t.titleConfig ? "space-around" : "flex-end",
                  },
                },
                t._l(t.explosiveMoney, function (e, a) {
                  return i(
                    "v-uni-view",
                    {
                      staticClass: "item",
                      attrs: { index: a },
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)), t.ProductNavTab(e.link.activeVal, a);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "txt", style: { color: a == t.ProductNavindex ? t.themeColor : "" } },
                        [t._v(t._s(t.$t(e.chiild[0].val)))]
                      ),
                      i(
                        "v-uni-view",
                        {
                          staticClass: "label",
                          style: {
                            background: a == t.ProductNavindex ? t.themeColor : "",
                            color: a == t.ProductNavindex ? "#fff" : "",
                          },
                        },
                        [t._v(t._s(t.$t(e.chiild[1].val)))]
                      ),
                    ],
                    1
                  );
                }),
                1
              ),
              i(
                "v-uni-view",
                { staticClass: "list-box animated", class: t.tempArr.length > 0 ? "fadeIn on" : "" },
                t._l(t.tempArr, function (e, a) {
                  return i(
                    "v-uni-view",
                    {
                      key: a,
                      staticClass: "item",
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                        },
                      },
                    },
                    [
                      i(
                        "v-uni-view",
                        { staticClass: "pictrue" },
                        [
                          e.activity && "1" === e.activity.type && t.$permission("seckill")
                            ? i(
                                "span",
                                {
                                  staticClass: "pictrue_log pictrue_log_class",
                                  style: "background-color:" + t.labelColor,
                                },
                                [t._v(t._s(t.$t("秒杀")))]
                              )
                            : t._e(),
                          e.activity && "2" === e.activity.type && t.$permission("bargain")
                            ? i(
                                "span",
                                {
                                  staticClass: "pictrue_log pictrue_log_class",
                                  style: "background-color:" + t.labelColor,
                                },
                                [t._v(t._s(t.$t("砍价")))]
                              )
                            : t._e(),
                          e.activity && "3" === e.activity.type && t.$permission("combination")
                            ? i(
                                "span",
                                {
                                  staticClass: "pictrue_log pictrue_log_class",
                                  style: "background-color:" + t.labelColor,
                                },
                                [t._v(t._s(t.$t("拼团")))]
                              )
                            : t._e(),
                          i("easy-loadimage", { attrs: { mode: "widthFix", "image-src": e.image } }),
                        ],
                        1
                      ),
                      i(
                        "v-uni-view",
                        { staticClass: "text-info" },
                        [
                          t.titleShow
                            ? i("v-uni-view", { staticClass: "title line2" }, [t._v(t._s(e.store_name))])
                            : t._e(),
                          t.opriceShow
                            ? i("v-uni-view", { staticClass: "old-price" }, [t._v(t._s(t.$t("￥")) + t._s(e.ot_price))])
                            : t._e(),
                          i(
                            "v-uni-view",
                            { staticClass: "price", style: { color: t.fontColor } },
                            [
                              t.priceShow
                                ? i("v-uni-view", [i("v-uni-text", [t._v(t._s(t.$t("￥")))]), t._v(t._s(e.price))], 1)
                                : t._e(),
                              e.checkCoupon && t.couponShow
                                ? i(
                                    "v-uni-view",
                                    {
                                      staticClass: "txt",
                                      class: t.priceShow ? "" : "on",
                                      style: "border:1px solid " + t.labelColor + ";color:" + t.labelColor,
                                    },
                                    [t._v(t._s(t.$t("券")))]
                                  )
                                : t._e(),
                            ],
                            1
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  );
                }),
                1
              ),
            ],
            1
          );
        },
        o = [];
    },
    7873: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }],
              style: { padding: "0 " + 2 * t.prConfig + "rpx" },
            },
            [
              t.articleList.length
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "articleList",
                      class: { borderRadius15: 1 === t.bgStyle },
                      style: "background-color:" + t.bgColor + ";margin-top:" + 2 * t.mbConfig + "rpx;",
                    },
                    [
                      t.listStyle
                        ? i(
                            "v-uni-view",
                            t._l(t.articleList, function (e, a) {
                              return i(
                                "v-uni-navigator",
                                {
                                  key: a,
                                  staticClass: "item acea-row row-between-wrapper",
                                  class: t.conStyle ? "borderRadius15" : "",
                                  style: "margin-bottom:" + 2 * t.itemConfig + "rpx;",
                                  attrs: {
                                    url: "/pages/extension/news_details/index?id=" + e.id,
                                    "hover-class": "none",
                                  },
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "pictrue" },
                                    [i("v-uni-image", { attrs: { src: e.image_input[0], mode: "aspectFill" } })],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "text" },
                                    [
                                      i("v-uni-view", { staticClass: "name line2" }, [t._v(t._s(e.title))]),
                                      i("v-uni-view", { staticClass: "time" }, [t._v(t._s(e.add_time))]),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              );
                            }),
                            1
                          )
                        : i(
                            "v-uni-view",
                            t._l(t.articleList, function (e, a) {
                              return i(
                                "v-uni-navigator",
                                {
                                  key: a,
                                  staticClass: "item acea-row row-between-wrapper",
                                  class: t.conStyle ? "borderRadius15" : "",
                                  style: "margin-bottom:" + 2 * t.itemConfig + "rpx;",
                                  attrs: {
                                    url: "/pages/extension/news_details/index?id=" + e.id,
                                    "hover-class": "none",
                                  },
                                },
                                [
                                  i(
                                    "v-uni-view",
                                    { staticClass: "text" },
                                    [
                                      i("v-uni-view", { staticClass: "name line2" }, [t._v(t._s(e.title))]),
                                      i("v-uni-view", { staticClass: "time" }, [t._v(t._s(e.add_time))]),
                                    ],
                                    1
                                  ),
                                  i(
                                    "v-uni-view",
                                    { staticClass: "pictrue" },
                                    [i("v-uni-image", { attrs: { src: e.image_input[0], mode: "aspectFill" } })],
                                    1
                                  ),
                                ],
                                1
                              );
                            }),
                            1
                          ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    7883: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = i("84d8"),
        n = {
          name: "bargain",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              bargList: [],
              numConfig: this.dataConfig.numConfig.val,
              themeColor: this.dataConfig.themeColor.color[0].item,
              titleColor: this.dataConfig.titleColor.color[0].item,
              bgColor: this.dataConfig.bgColor.color,
              mbCongfig: this.dataConfig.mbCongfig.val,
              productGap: this.dataConfig.productGap.val,
              priceShow: this.dataConfig.priceShow.val,
              bntShow: this.dataConfig.bntShow.val,
              bgStyle: this.dataConfig.bgStyle.type,
              prConfig: this.dataConfig.prConfig.val,
            };
          },
          created: function () {},
          mounted: function () {
            this.getBargainList();
          },
          methods: {
            getBargainList: function () {
              var t = this,
                e = this.$config.LIMIT;
              (0, a.getBargainList)({ page: 1, limit: this.numConfig >= e ? e : this.numConfig }).then(function (e) {
                t.bargList = e.data;
              });
            },
            bargDetail: function (t) {
              this.$emit("changeBarg", t);
            },
          },
        };
      e.default = n;
    },
    7992: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("6bac"),
        n = i("0b87");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("0fba");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "7c3986ba", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "79b0": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.hotspot[data-v-67e45f71]{position:relative;width:100%}.hotspot .image[data-v-67e45f71]{display:block;width:100%}.hotspot .area[data-v-67e45f71]{position:absolute}',
          "",
        ]),
        (t.exports = e);
    },
    "79da": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return n;
      }),
        i.d(e, "c", function () {
          return o;
        }),
        i.d(e, "a", function () {
          return a;
        });
      var a = { jyfParser: i("47fd").default },
        n = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
            [
              t.description
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "richText",
                      style: "background-color:" + t.bgColor + ";margin:" + t.udConfig + "rpx " + t.lrConfig + "rpx;",
                    },
                    [i("jyf-parser", { ref: "article", attrs: { html: t.description, "tag-style": t.tagStyle } })],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        o = [];
    },
    "7a54": function (t, e, i) {
      "use strict";
      var a = i("0dc1"),
        n = i.n(a);
      n.a;
    },
    "7a71": function (t, e, i) {
      "use strict";
      i("7a82");
      var a = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var n = a(i("19b6")),
        o = i("00a0"),
        r = {
          props: {
            window: { type: Boolean | String | Number, default: !1 },
            couponList: {
              type: Array,
              default: function () {
                return [];
              },
            },
            couponImage: { type: String, default: "" },
          },
          mixins: [n.default],
          data: function () {
            return { imgHost: o.HTTP_REQUEST_URL };
          },
          methods: {
            close: function () {
              this.$emit("onColse");
            },
          },
        };
      e.default = r;
    },
    "7bf2": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.customerService[data-v-1bd5d2ba],\n.customerService-sty[data-v-1bd5d2ba]{position:fixed;right:%?20?%;z-index:40}.customerService .pictrue[data-v-1bd5d2ba],\n.customerService-sty .pictrue[data-v-1bd5d2ba]{width:%?86?%;height:%?86?%;border-radius:50%}.customerService .pictrue uni-image[data-v-1bd5d2ba],\n.customerService-sty .pictrue uni-image[data-v-1bd5d2ba]{width:100%;height:100%}.customerService-sty[data-v-1bd5d2ba]{background-color:transparent!important}',
          "",
        ]),
        (t.exports = e);
    },
    "7e46": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("4084"),
        n = i("c604");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("1bba");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "7db5b738", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "80f6": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("f1fa"),
        n = i("e044");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("e6e8");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "13279574", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "84d8": function (t, e, i) {
      "use strict";
      i("7a82");
      var a = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.getBargainDetail = function (t, e) {
          return n.default.get("bargain/detail/".concat(t, "?bargainUid=").concat(e));
        }),
        (e.getBargainList = function (t) {
          return n.default.get("bargain/list", t, { noAuth: !0 });
        }),
        (e.getBargainPoster = function (t) {
          return n.default.post("bargain/poster", t);
        }),
        (e.getBargainPosterData = function (t) {
          return n.default.get("bargain/poster_info/" + t);
        }),
        (e.getBargainUserCancel = function (t) {
          return n.default.post("bargain/user/cancel", t);
        }),
        (e.getBargainUserList = function (t) {
          return n.default.get("bargain/user/list", t);
        }),
        (e.getCombinationBannerList = function (t) {
          return n.default.get("combination/banner_list", t, { noAuth: !0 });
        }),
        (e.getCombinationDetail = function (t) {
          return n.default.get("combination/detail/" + t);
        }),
        (e.getCombinationList = function (t) {
          return n.default.get("combination/list", t, { noAuth: !0 });
        }),
        (e.getCombinationPink = function (t) {
          return n.default.get("combination/pink/" + t);
        }),
        (e.getCombinationPoster = function (t) {
          return n.default.post("combination/poster", t);
        }),
        (e.getCombinationPosterData = function (t) {
          return n.default.get("combination/poster_info/" + t);
        }),
        (e.getIntegralOrderList = function (t) {
          return n.default.get("store_integral/order/list", t);
        }),
        (e.getIntegralProductDetail = function (t) {
          return n.default.get("store_integral/detail/" + t, {}, { noAuth: !0 });
        }),
        (e.getLogisticsDetails = function (t) {
          return n.default.get("store_integral/order/express/".concat(t));
        }),
        (e.getPink = function (t) {
          return n.default.get("pink", t, { noAuth: !0 });
        }),
        (e.getPresellList = function (t) {
          return n.default.get("advance/list", t);
        }),
        (e.getSeckillDetail = function (t, e) {
          return n.default.get("seckill/detail/" + t, e);
        }),
        (e.getSeckillIndexTime = function () {
          return n.default.get("seckill/index", {}, { noAuth: !0 });
        }),
        (e.getSeckillList = function (t, e) {
          return n.default.get("seckill/list/" + t, e, { noAuth: !0 });
        }),
        (e.getStoreIntegralList = function (t) {
          return n.default.get("store_integral/list", t);
        }),
        (e.integralOrderConfirm = function (t) {
          return n.default.post("store_integral/order/confirm", t);
        }),
        (e.integralOrderCreate = function (t) {
          return n.default.post("store_integral/order/create", t);
        }),
        (e.integralOrderDetails = function (t) {
          return n.default.get("store_integral/order/detail/".concat(t));
        }),
        (e.orderDel = function (t) {
          return n.default.post("store_integral/order/del", t);
        }),
        (e.orderTake = function (t) {
          return n.default.post("store_integral/order/take", t);
        }),
        (e.postBargainHelp = function (t) {
          return n.default.post("bargain/help", t);
        }),
        (e.postBargainHelpCount = function (t) {
          return n.default.post("bargain/help/count", t);
        }),
        (e.postBargainHelpList = function (t) {
          return n.default.post("bargain/help/list", t);
        }),
        (e.postBargainHelpPrice = function (t) {
          return n.default.post("bargain/help/price", t);
        }),
        (e.postBargainShare = function (t) {
          return n.default.post("bargain/share", { bargainId: t });
        }),
        (e.postBargainStart = function (t) {
          return n.default.post("bargain/start", { bargainId: t });
        }),
        (e.postBargainStartUser = function (t) {
          return n.default.post("bargain/start/user", t);
        }),
        (e.postCombinationRemove = function (t) {
          return n.default.post("combination/remove", t);
        }),
        (e.scombinationCode = function (t) {
          return n.default.get("combination/code/" + t);
        }),
        (e.seckillCode = function (t, e) {
          return n.default.get("seckill/code/" + t, e);
        }),
        i("99af");
      var n = a(i("fb81"));
    },
    8713: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            [
              t.nodes.length ? t._e() : t._t("default"),
              i(
                "v-uni-view",
                {
                  style: t.showAm + (t.selectable ? ";user-select:text;-webkit-user-select:text" : ""),
                  attrs: { id: "top", animation: t.scaleAm },
                  on: {
                    touchstart: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)), t._touchstart.apply(void 0, arguments);
                    },
                    touchmove: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)), t._touchmove.apply(void 0, arguments);
                    },
                    click: function (e) {
                      (arguments[0] = e = t.$handleEvent(e)), t._tap.apply(void 0, arguments);
                    },
                  },
                },
                [i("div", { attrs: { id: "rtf" + t.uid } })]
              ),
            ],
            2
          );
        },
        n = [];
    },
    "874b": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.advert[data-v-ba7c7812]{box-sizing:border-box}.advert uni-image[data-v-ba7c7812]{width:100%;box-sizing:border-box;display:block}.swipers[data-v-ba7c7812]{position:relative;width:100%;margin:0 auto;border-radius:%?10?%\n  /* 设置圆角 */}.swipers.fillet[data-v-ba7c7812]{border-radius:%?10?%}.swipers.fillet uni-image[data-v-ba7c7812]{border-radius:%?10?%}.swipers uni-swiper[data-v-ba7c7812],\n.swipers .swiper-item[data-v-ba7c7812],\n.swipers uni-image[data-v-ba7c7812]{width:100%}.swipers uni-image[data-v-ba7c7812]{-webkit-transform:scale(.93);transform:scale(.93);transition:all .6s ease}.swipers uni-swiper-item.active uni-image[data-v-ba7c7812]{-webkit-transform:scale(1);transform:scale(1)}.swipers.circular[data-v-ba7c7812] .uni-swiper-dot{width:%?10?%!important;height:%?10?%!important;background:rgba(0,0,0,.4)!important}.swipers.circular[data-v-ba7c7812] .uni-swiper-dot-active{background:#fff!important}.swipers.square[data-v-ba7c7812] .uni-swiper-dot{width:%?20?%!important;height:%?5?%!important;border-radius:%?3?%;background:rgba(0,0,0,.4)!important}.swipers.square[data-v-ba7c7812] .uni-swiper-dot-active{background:#fff!important}',
          "",
        ]),
        (t.exports = e);
    },
    "8a64": function (t, e, i) {
      var a = i("bd96");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("5669653a", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    "8d0f": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("a070"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "911e": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return t.picList.length
            ? i(
                "v-uni-view",
                {
                  directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }],
                  staticClass: "pictureCube skeleton-rect",
                  class: { pageOn: 1 === t.bgStyle },
                  style: {
                    margin: "0 " + 2 * t.prConfig + "rpx",
                    marginTop: 2 * t.slider + "rpx",
                    background: t.bgColor,
                  },
                },
                [
                  t._l(t.picList, function (e, a) {
                    return 0 == t.style
                      ? i(
                          "v-uni-view",
                          {
                            key: a,
                            staticClass: "advertItem01",
                            on: {
                              click: function (i) {
                                (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                              },
                            },
                          },
                          [i("v-uni-image", { attrs: { src: e.image, mode: "widthFix" } })],
                          1
                        )
                      : t._e();
                  }),
                  1 == t.style
                    ? i(
                        "v-uni-view",
                        { staticClass: "advertItem02 acea-row" },
                        t._l(t.picList, function (e, a) {
                          return i(
                            "v-uni-view",
                            {
                              key: a,
                              staticClass: "item",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                },
                              },
                            },
                            [
                              i("v-uni-image", {
                                style: "height:" + t.imageH + "rpx;",
                                attrs: { src: e.image, mode: "widthFix" },
                              }),
                            ],
                            1
                          );
                        }),
                        1
                      )
                    : t._e(),
                  2 == t.style
                    ? i(
                        "v-uni-view",
                        { staticClass: "advertItem02 advertItem03 acea-row" },
                        t._l(t.picList, function (e, a) {
                          return i(
                            "v-uni-view",
                            {
                              key: a,
                              staticClass: "item",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                },
                              },
                            },
                            [
                              i("v-uni-image", {
                                style: "height:" + t.imageH + "rpx;",
                                attrs: { src: e.image, mode: "widthFix" },
                              }),
                            ],
                            1
                          );
                        }),
                        1
                      )
                    : t._e(),
                  3 == t.style
                    ? i(
                        "v-uni-view",
                        { staticClass: "advertItem04 acea-row" },
                        [
                          i(
                            "v-uni-view",
                            {
                              staticClass: "item",
                              on: {
                                click: function (e) {
                                  (arguments[0] = e = t.$handleEvent(e)), t.goDetail(t.picList[0]);
                                },
                              },
                            },
                            [i("v-uni-image", { attrs: { src: t.picList[0].image } })],
                            1
                          ),
                          i(
                            "v-uni-view",
                            { staticClass: "item" },
                            [
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "pic",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goDetail(t.picList[1]);
                                    },
                                  },
                                },
                                [i("v-uni-image", { attrs: { src: t.picList[1].image } })],
                                1
                              ),
                              i(
                                "v-uni-view",
                                {
                                  staticClass: "pic",
                                  on: {
                                    click: function (e) {
                                      (arguments[0] = e = t.$handleEvent(e)), t.goDetail(t.picList[2]);
                                    },
                                  },
                                },
                                [i("v-uni-image", { attrs: { src: t.picList[2].image } })],
                                1
                              ),
                            ],
                            1
                          ),
                        ],
                        1
                      )
                    : t._e(),
                  4 == t.style
                    ? i(
                        "v-uni-view",
                        { staticClass: "advertItem02 advertItem05 acea-row" },
                        t._l(t.picList, function (e, a) {
                          return i(
                            "v-uni-view",
                            {
                              key: a,
                              staticClass: "item",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                },
                              },
                            },
                            [
                              i("v-uni-image", {
                                style: "height:" + t.imageH + "rpx;",
                                attrs: { src: e.image, mode: "aspectFill" },
                              }),
                            ],
                            1
                          );
                        }),
                        1
                      )
                    : t._e(),
                  5 == t.style
                    ? i(
                        "v-uni-view",
                        { staticClass: "advertItem02 advertItem06 acea-row" },
                        t._l(t.picList, function (e, a) {
                          return i(
                            "v-uni-view",
                            {
                              key: a,
                              staticClass: "item",
                              on: {
                                click: function (i) {
                                  (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                },
                              },
                            },
                            [i("v-uni-image", { attrs: { src: e.image, mode: "aspectFill" } })],
                            1
                          );
                        }),
                        1
                      )
                    : t._e(),
                ],
                2
              )
            : t._e();
        },
        n = [];
    },
    9198: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("01ac"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    "92e0": function (t, e, i) {
      "use strict";
      var a = i("8a64"),
        n = i.n(a);
      n.a;
    },
    9344: function (t, e, i) {
      "use strict";
      (function (t) {
        i("7a82"),
          Object.defineProperty(e, "__esModule", { value: !0 }),
          (e.default = void 0),
          i("a9e3"),
          i("ac1f"),
          i("fb6a"),
          i("14d9");
        var a = {
          name: "menus",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              interval: 3e3,
              duration: 500,
              menus: this.dataConfig.menuConfig.list || [],
              titleColor: this.dataConfig.titleColor.color[0].item,
              mbConfig: this.dataConfig.mbConfig.val,
              rowsNum: this.dataConfig.rowsNum.type,
              number: this.dataConfig.number.type,
              isMany: this.dataConfig.tabConfig.tabVal,
              menuStyle: this.dataConfig.menuStyle.type,
              docConfig: this.dataConfig.pointerStyle.type,
              dotColor: this.dataConfig.pointerColor.color[0].item,
              bgColor: this.dataConfig.bgColor.color[0].item,
              bgStyle: this.dataConfig.bgStyle.type,
              prConfig: this.dataConfig.prConfig.val,
              navHigh: 0,
              menuList: [],
              active: 0,
            };
          },
          created: function () {},
          mounted: function () {
            var t = this;
            0 === this.rowsNum
              ? 0 === this.number
                ? this.pageNum(6)
                : 1 === this.number
                ? this.pageNum(8)
                : this.pageNum(10)
              : 1 === this.rowsNum
              ? 0 === this.number
                ? this.pageNum(9)
                : 1 === this.number
                ? this.pageNum(12)
                : this.pageNum(15)
              : 0 === this.number
              ? this.pageNum(12)
              : 1 === this.number
              ? this.pageNum(16)
              : this.pageNum(20),
              this.$nextTick(function () {
                if (t.menuList.length && t.isMany) {
                  var e = t;
                  setTimeout(function () {
                    e.menuHeight();
                  }, 100);
                }
              });
          },
          methods: {
            bannerfun: function (t) {
              this.active = t.detail.current;
            },
            menuHeight: function () {
              var t = this,
                e = uni.createSelectorQuery().in(this);
              e.select("#nav0")
                .boundingClientRect(function (e) {
                  e.height, (t.navHigh = e.height);
                })
                .exec();
            },
            pageNum: function (t) {
              for (var e = Math.ceil(this.menus.length / t), i = new Array(), a = 0; a < e; a++) {
                var n = this.menus.slice(a * t, a * t + t);
                n.length && i.push({ list: n });
              }
              this.$set(this, "menuList", i);
            },
            menusTap: function (t) {
              this.$util.JumpPath(t);
            },
          },
        };
        e.default = a;
      }).call(this, i("5a52")["default"]);
    },
    "947e": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("04a6"),
        n = i("e9e3");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("1cf1");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "7686693c", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "974d": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "w-full", style: [t.hotspotWrapStyle] },
            [
              i(
                "v-uni-view",
                { staticClass: "hotspot" },
                [
                  i("v-uni-image", {
                    staticClass: "image",
                    style: [t.imageRadius],
                    attrs: { src: t.dataConfig.picStyle.url, mode: "widthFix" },
                  }),
                  t._l(t.dataConfig.picStyle.list, function (e, a) {
                    return i("v-uni-view", {
                      key: e.number,
                      staticClass: "area",
                      style: {
                        top: e.starY / 2 + "px",
                        left: e.starX / 2 + "px",
                        width: e.areaWidth / 2 + "px",
                        height: e.areaHeight / 2 + "px",
                      },
                      on: {
                        click: function (i) {
                          (arguments[0] = i = t.$handleEvent(i)), t.goPage(e.link);
                        },
                      },
                    });
                  }),
                ],
                2
              ),
            ],
            1
          );
        },
        n = [];
    },
    "97f7": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.lines[data-v-24ef7e60]{padding:0 %?20?%;margin-top:%?20?%}.lines .item[data-v-24ef7e60]{width:100%;box-sizing:border-box;border-bottom-color:red;border-bottom-width:1px;border-bottom-style:dotted}',
          "",
        ]),
        (t.exports = e);
    },
    "98ba": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.title[data-v-10b193c3]{font-size:%?40?%;color:#282828;text-align:center;width:100%;padding:%?20?%;box-sizing:border-box}.title.left[data-v-10b193c3]{text-align:left}.title.right[data-v-10b193c3]{text-align:right}.title.blod[data-v-10b193c3]{font-weight:700}.title.italics[data-v-10b193c3]{font-style:italic}',
          "",
        ]),
        (t.exports = e);
    },
    "99d3": function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("e678"),
        n = i("8d0f");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("3f12");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "80701f5a", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    "9b07": function (t, e) {
      function i(t) {
        for (var e = {}, i = t.split(","), a = i.length; a--; ) e[i[a]] = !0;
        return e;
      }
      t.exports = {
        filter: null,
        highlight: null,
        onText: null,
        blankChar: i(" , ,\t,\r,\n,\f"),
        blockTags: i("address,article,aside,body,caption,center,cite,footer,header,html,nav,section,pre"),
        ignoreTags: i(
          "area,base,basefont,canvas,command,frame,input,isindex,keygen,link,map,meta,param,script,source,style,svg,textarea,title,track,use,wbr,embed,iframe"
        ),
        richOnlyTags: i("a,colgroup,fieldset,legend,picture,table"),
        selfClosingTags: i(
          "area,base,basefont,br,col,circle,ellipse,embed,frame,hr,img,input,isindex,keygen,line,link,meta,param,path,polygon,rect,source,track,use,wbr"
        ),
        trustAttrs: i(
          "align,alt,app-id,author,autoplay,border,cellpadding,cellspacing,class,color,colspan,controls,data-src,dir,face,height,href,id,ignore,loop,media,muted,name,path,poster,rowspan,size,span,src,start,style,type,unit-id,width,xmlns"
        ),
        boolAttrs: i("autoplay,controls,ignore,loop,muted"),
        trustTags: i(
          "a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"
        ),
        userAgentStyles: {
          address: "font-style:italic",
          big: "display:inline;font-size:1.2em",
          blockquote: "background-color:#f6f6f6;border-left:3px solid #dbdbdb;color:#6c6c6c;padding:5px 0 5px 10px",
          caption: "display:table-caption;text-align:center",
          center: "text-align:center",
          cite: "font-style:italic",
          dd: "margin-left:40px",
          img: "max-width:100%",
          mark: "background-color:yellow",
          picture: "max-width:100%",
          pre: "font-family:monospace;white-space:pre;overflow:scroll",
          s: "text-decoration:line-through",
          small: "display:inline;font-size:0.8em",
          u: "text-decoration:underline",
        },
      };
    },
    "9cc4": function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.navTabBox[data-v-4607b153]{width:100%;background:linear-gradient(90deg,#f62c2c 50%,#f96e29);color:#fff;padding-bottom:%?20?%}.navTabBox.isFixed[data-v-4607b153]{z-index:45;position:fixed;left:0;width:100%;padding-top:%?20?%;top:0}.navTabBox .longTab[data-v-4607b153]{width:100%}.navTabBox .longTab .longItem[data-v-4607b153]{height:%?50?%;display:inline-block;line-height:%?50?%;text-align:center;font-size:%?30?%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.navTabBox .longTab .longItem.click[data-v-4607b153]{font-weight:700}.navTabBox .longTab .underlineBox[data-v-4607b153]{height:3px;width:20%;display:flex;align-content:center;justify-content:center;transition:.5s}.navTabBox .longTab .underlineBox .underline[data-v-4607b153]{width:%?33?%;height:%?4?%;background-color:#fff}.child-box[data-v-4607b153]{width:100%;position:relative;background-color:#fff;box-shadow:0 2px 5px 1px rgba(0,0,0,.02)}.child-box .wrapper[data-v-4607b153]{display:flex;align-items:center;padding:%?20?% 0;background:#fff}.child-box .child-item[data-v-4607b153]{flex-shrink:0;width:%?140?%;display:flex;flex-direction:column;align-items:center;justify-content:center;margin-left:%?10?%}.child-box .child-item uni-image[data-v-4607b153]{width:%?90?%;height:%?90?%;border-radius:50%}.child-box .child-item .txt[data-v-4607b153]{font-size:%?24?%;color:#282828;text-align:center;margin-top:%?10?%}.child-box .child-item.on uni-image[data-v-4607b153]{border:1px solid rgba(233,51,35,.6)}.child-box .child-item.on .txt[data-v-4607b153]{color:#e93323}',
          "",
        ]),
        (t.exports = e);
    },
    "9d8b": function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            [
              t.loading && !t.loaded
                ? i(
                    "v-uni-view",
                    { staticClass: "Loads acea-row row-center-wrapper", staticStyle: { "margin-top": ".2rem" } },
                    [
                      t.loading
                        ? i(
                            "v-uni-view",
                            [
                              i("v-uni-view", {
                                staticClass: "iconfont icon-jiazai loading acea-row row-center-wrapper",
                              }),
                              t._v(t._s(t.$t("正在加载中"))),
                            ],
                            1
                          )
                        : i("v-uni-view", [t._v(t._s(t.$t("上拉加载更多")))]),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    "9f3a": function (t, e, i) {
      "use strict";
      var a = i("19b3"),
        n = i.n(a);
      n.a;
    },
    a070: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3"), i("e9c4");
      var a = i("5743"),
        n = {
          name: "liveBroadcast",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              listStyle: this.dataConfig.listStyle.type,
              mbConfig: this.dataConfig.mbConfig.val,
              liveList: [],
              custom_params: "",
              limit: this.dataConfig.limit.val,
            };
          },
          created: function () {},
          mounted: function () {
            (this.custom_params = encodeURIComponent(JSON.stringify({ spid: this.$store.state.app.uid }))),
              this.getLiveList();
          },
          methods: {
            getLiveList: function () {
              var t = this;
              this.$config.LIMIT;
              (0, a.getLiveList)(1, void 0 == this.limit ? 10 : this.limit)
                .then(function (e) {
                  t.liveList = e.data;
                })
                .catch(function (t) {});
            },
          },
        };
      e.default = n;
    },
    a105: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("c288"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    a2cb: function (t, e, i) {
      var a = i("a72f");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("3779f649", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    a708: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("eaf6"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    a72f: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.group-wrapper[data-v-29598e05]{padding:%?20?% %?20?% %?26?% %?20?%;background:#fff}.group-wrapper .hd[data-v-29598e05]{display:flex;align-items:center;justify-content:space-between}.group-wrapper .hd .left[data-v-29598e05]{display:flex;align-items:center}.group-wrapper .hd .left .name[data-v-29598e05]{font-size:%?32?%;font-weight:600}.group-wrapper .hd .left .icon[data-v-29598e05]{width:%?36?%;height:%?36?%;margin-right:%?12?%}.group-wrapper .hd .left .title[data-v-29598e05]{width:%?134?%;height:%?33?%}.group-wrapper .hd .left .person[data-v-29598e05]{display:flex;align-items:center;margin-left:%?40?%}.group-wrapper .hd .left .person .avatar-box[data-v-29598e05]{display:flex;align-items:center}.group-wrapper .hd .left .person .avatar-box uni-image[data-v-29598e05]{width:%?30?%;height:%?30?%;border-radius:50%;margin-right:%?-10?%}.group-wrapper .hd .left .person .num[data-v-29598e05]{margin-left:%?18?%;font-size:%?26?%;color:#999}.group-wrapper .hd .more[data-v-29598e05]{font-size:%?26?%;color:#999}.group-wrapper .hd .more .iconfont[data-v-29598e05]{margin-left:%?6?%;font-size:%?25?%}.group-wrapper .group-scroll[data-v-29598e05]{width:100%;margin-top:%?25?%}.group-wrapper .group-scroll .group-item[data-v-29598e05]{display:inline-block;width:%?220?%;box-shadow:0 2px 6px 2px rgba(0,0,0,.03);border-radius:%?16?%;position:relative;background-color:#fff}.group-wrapper .group-scroll .group-item .people[data-v-29598e05]{position:absolute;width:%?140?%;height:%?32?%;background:rgba(0,0,0,.1);box-shadow:%?2?% %?2?% %?8?% 0 rgba(0,0,0,.06);border-radius:%?16?%;top:%?12?%;left:%?12?%;font-size:%?20?%;color:#fff;text-align:center;line-height:%?32?%}.group-wrapper .group-scroll .group-item uni-image[data-v-29598e05]{width:100%;height:%?220?%;border-radius:%?16?% %?16?% 0 0}.group-wrapper .group-scroll .group-item .info[data-v-29598e05]{padding:%?2?% %?12?% %?10?% %?12?%}.group-wrapper .group-scroll .group-item .info .name[data-v-29598e05]{font-size:%?24?%}.group-wrapper .group-scroll .group-item .info .price-box[data-v-29598e05]{display:flex;align-items:center;margin-top:%?6?%}.group-wrapper .group-scroll .group-item .info .price-box .tips[data-v-29598e05]{display:flex;align-items:center;justify-content:center;width:%?76?%;height:%?30?%;margin-right:%?6?%;border-radius:2px;font-size:%?18?%}.group-wrapper .group-scroll .group-item .info .price-box .price[data-v-29598e05]{font-size:%?28?%;font-weight:700}.group-wrapper .group-scroll .group-item .info .price-box .price uni-text[data-v-29598e05]{font-size:%?18?%}.group-wrapper .group-scroll .group-item .bom-btn[data-v-29598e05]{display:flex;align-items:center;justify-content:center;width:100%;height:%?48?%;border-radius:0 0 %?16?% %?16?%;color:#fff;font-size:%?24?%}',
          "",
        ]),
        (t.exports = e);
    },
    a77d: function (t, e, i) {
      var a = i("98ba");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("bc7b9d80", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    a7a1: function (t, e, i) {
      var a = i("7428");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("17272294", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    ab66: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("f30f"),
        n = i("d5d7");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("c3bd");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "389352ac", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    af5c: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7873"),
        n = i("fc2d");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("3aed");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "a99652b4", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    afd9: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.live-wrapper[data-v-80701f5a]{position:relative;width:100%;overflow:hidden;border-radius:%?16?%}.live-wrapper uni-image[data-v-80701f5a]{width:100%;height:%?400?%}.live-wrapper .live-top[data-v-80701f5a]{z-index:20;position:absolute;left:0;top:0;display:flex;align-items:center;justify-content:center;color:#fff;width:%?180?%;height:%?54?%;border-radius:%?0?% 0 %?18?% 0}.live-wrapper .live-top uni-image[data-v-80701f5a]{width:%?30?%;height:%?30?%;margin-right:%?10?%;display:block}.live-wrapper .live-title[data-v-80701f5a]{position:absolute;left:0;bottom:%?6?%;width:100%;height:%?70?%;line-height:%?70?%;text-align:center;font-size:%?30?%;color:#fff;background:rgba(0,0,0,.35)}.live-wrapper.mores[data-v-80701f5a]{width:100%}.live-wrapper.mores .item[data-v-80701f5a]{position:relative;width:%?320?%;display:inline-block;border-radius:%?16?%;overflow:hidden;margin-right:%?20?%}.live-wrapper.mores .item uni-image[data-v-80701f5a]{width:%?320?%;height:%?180?%;border-radius:%?16?%}.live-wrapper.mores .item .live-title[data-v-80701f5a]{height:%?40?%;line-height:%?40?%;text-align:center;font-size:%?22?%}.live-wrapper.mores .item .live-top[data-v-80701f5a]{width:%?120?%;height:%?36?%;font-size:%?22?%}.live-wrapper.mores .item .live-top uni-image[data-v-80701f5a]{width:%?20?%;height:%?20?%}.live-wrapper-a[data-v-80701f5a]{padding:%?0?% %?20?% 0}.live-wrapper-a .live-item-a[data-v-80701f5a]{display:flex;background:#fff;margin-bottom:%?20?%;border-radius:%?16?%;overflow:hidden}.live-wrapper-a .live-item-a[data-v-80701f5a]:last-child{margin-bottom:0}.live-wrapper-a .live-item-a .img-box[data-v-80701f5a]{position:relative;width:%?340?%;height:%?270?%}.live-wrapper-a .live-item-a .img-box uni-image[data-v-80701f5a]{width:100%;height:100%}.live-wrapper-a .live-item-a .info[data-v-80701f5a]{flex:1;display:flex;flex-direction:column;justify-content:space-between;padding:%?15?% %?20?%}.live-wrapper-a .live-item-a .info .title[data-v-80701f5a]{font-size:%?30?%;color:#333}.live-wrapper-a .live-item-a .info .people[data-v-80701f5a]{display:flex;align-items:center;color:#999;font-size:%?24?%;margin-top:%?10?%}.live-wrapper-a .live-item-a .info .people uni-image[data-v-80701f5a]{width:%?32?%;height:%?32?%;border-radius:50%;margin-right:%?10?%}.live-wrapper-a .live-item-a .info .goods-wrapper[data-v-80701f5a]{display:flex}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item[data-v-80701f5a]{position:relative;width:%?96?%;height:%?96?%;margin-right:%?20?%;overflow:hidden;border-radius:%?16?%}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item[data-v-80701f5a]:last-child{margin-right:0}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item uni-image[data-v-80701f5a]{width:100%;height:100%;border-radius:%?16?%}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item .bg[data-v-80701f5a]{position:absolute;left:0;top:0;width:100%;height:100%;border-radius:%?16?%;background:rgba(0,0,0,.3)}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item uni-text[data-v-80701f5a]{position:absolute;left:0;bottom:0;width:100%;height:%?60?%;line-height:%?70?%;color:#fff;background:linear-gradient(180deg,transparent,rgba(0,0,0,.75))}.live-wrapper-a .live-item-a .info .goods-wrapper .goods-item .num[data-v-80701f5a]{display:flex;align-items:center;justify-content:center;position:absolute;left:0;top:0;width:100%;height:100%;background:rgba(0,0,0,.3);color:#fff;font-size:%?28?%}.live-wrapper-a .live-item-a .info .empty-goods[data-v-80701f5a]{width:%?96?%;height:%?96?%;border-radius:%?6?%;background-color:#b2b2b2;color:#fff;font-size:%?20?%;text-align:center;line-height:%?96?%}.live-wrapper-a.live-wrapper-c .live-item-a[data-v-80701f5a]{display:flex;flex-direction:column}.live-wrapper-a.live-wrapper-c .live-item-a .img-box[data-v-80701f5a]{width:100%;border-radius:8px 8px 0 0}.live-wrapper-a.live-wrapper-c .live-item-a .info[data-v-80701f5a]{display:flex;justify-content:space-between;align-items:center;flex-direction:row}.live-wrapper-a.live-wrapper-c .live-item-a .info .left[data-v-80701f5a]{width:69%}.live-wrapper-a.live-wrapper-c .live-item-a .info .goods-wrapper[data-v-80701f5a]{flex:1}.live-wrapper-b[data-v-80701f5a]{padding:%?0?% %?20?% 0;display:flex;justify-content:space-between;flex-wrap:wrap}.live-wrapper-b .live-item-b[data-v-80701f5a]{width:%?345?%;background-color:#fff;border-radius:%?16?%;overflow:hidden;margin-bottom:%?20?%;overflow:hidden}.live-wrapper-b .live-item-b .img-box[data-v-80701f5a]{position:relative}.live-wrapper-b .live-item-b .img-box uni-image[data-v-80701f5a]{width:100%;height:%?274?%}.live-wrapper-b .live-item-b .info[data-v-80701f5a]{display:flex;flex-direction:column;padding:%?20?%}.live-wrapper-b .live-item-b .info .title[data-v-80701f5a]{font-size:%?30?%;color:#333}.live-wrapper-b .live-item-b .info .people[data-v-80701f5a]{display:flex;margin-top:%?10?%;color:#999}.live-wrapper-b .live-item-b .info .people uni-image[data-v-80701f5a]{width:%?36?%;height:%?36?%;border-radius:50%;margin-right:%?10?%}.label[data-v-80701f5a]{display:flex;align-items:center;justify-content:center;position:absolute;left:%?20?%;top:%?20?%;border-radius:%?22?% 0 %?22?% %?22?%;font-size:%?24?%;color:#fff}.label uni-image[data-v-80701f5a]{margin-right:%?10?%}.label uni-text[data-v-80701f5a]{font-size:%?22?%}.bgred[data-v-80701f5a]{width:%?132?%;height:%?38?%;background:linear-gradient(270deg,#f5742f,#ff1717)}.bggary[data-v-80701f5a]{width:%?108?%;height:%?38?%;background:linear-gradient(270deg,#999,#666)}.bgblue[data-v-80701f5a]{width:%?220?%;height:%?38?%;background:rgba(0,0,0,.36);overflow:hidden}.bgblue .txt[data-v-80701f5a]{position:relative;left:%?-5?%;display:flex;align-items:center;justify-content:center;width:38px;height:100%;text-align:center;background:linear-gradient(270deg,#2fa1f5,#0076ff)}.title-box[data-v-80701f5a]{display:flex;justify-content:space-between;align-items:center;padding:%?20?%;font-size:%?32?%}.title-box .more[data-v-80701f5a]{display:flex;align-items:center;justify-content:center;font-size:%?26?%;color:#666}.title-box .more .iconfont[data-v-80701f5a]{font-size:%?26?%;margin-top:%?8?%}',
          "",
        ]),
        (t.exports = e);
    },
    b43b: function (t, e, i) {
      var a = i("79b0");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("fb4e366a", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    b51c: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("c551"),
        n = i("46d8");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("0d15");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "ba7c7812", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    b567: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("c027"),
        n = i("c78d");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("2986");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "db3337aa", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    b6f1: function (t, e, i) {
      "use strict";
      var a = i("5bf8"),
        n = i.n(a);
      n.a;
    },
    b725: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !this.isSortType, expression: "!isSortType" }] },
            [
              this.heightConfig > 0
                ? e(
                    "v-uni-view",
                    { staticClass: "blankPage", style: "height:" + 2 * this.heightConfig + "rpx;" },
                    [e("v-uni-view", { staticClass: "bankCon", style: "background-color:" + this.bgColor + ";" })],
                    1
                  )
                : this._e(),
            ],
            1
          );
        },
        n = [];
    },
    bae1: function (t, e, i) {
      "use strict";
      var a = i("1723"),
        n = i.n(a);
      n.a;
    },
    bc65: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("c760"),
        n = i("d6e1");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("c6fe");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "b218a7ac", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    bd96: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.blankPage .bankCon[data-v-4aea5106]{width:100%;height:100%;background-color:#00f}',
          "",
        ]),
        (t.exports = e);
    },
    be15: function (t, e, i) {
      "use strict";
      var a = i("7429"),
        n = i.n(a);
      n.a;
    },
    bead: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.recommend[data-v-7c3986ba]{background-color:#fff}.recommend .title[data-v-7c3986ba]{height:%?135?%;font-size:%?28?%;color:#282828}.recommend .title .name[data-v-7c3986ba]{margin:0 %?28?%}.recommend .title .iconfont[data-v-7c3986ba]{font-size:%?170?%;color:#454545}.recommend .title .iconfont.lefticon[data-v-7c3986ba]{-webkit-transform:rotate(180deg);transform:rotate(180deg)}.recommend .recommendList[data-v-7c3986ba]{padding:0 %?30?%}.recommend .recommendList .item[data-v-7c3986ba]{width:%?335?%;margin-bottom:%?30?%;border-radius:%?20?% %?20?% 0 0;box-shadow:%?0?% %?3?% %?10?% %?2?% rgba(0,0,0,.03);padding-bottom:%?10?%}.recommend .recommendList .item .pictrue[data-v-7c3986ba]{position:relative;width:100%;height:%?335?%}.recommend .recommendList .item .pictrue[data-v-7c3986ba] ,\n.recommend .recommendList .item .pictrue[data-v-7c3986ba] uni-image,\n.recommend .recommendList .item .pictrue[data-v-7c3986ba] .easy-loadimage,\n.recommend .recommendList .item .pictrue[data-v-7c3986ba] uni-image{width:100%;height:%?335?%;border-radius:%?20?%}.recommend .recommendList .item .name[data-v-7c3986ba]{font-size:%?28?%;color:#282828;margin-top:%?20?%;padding:0 %?10?%;line-height:%?34?%;height:%?68?%}.recommend .recommendList .item .money[data-v-7c3986ba]{font-size:%?20?%;margin-top:%?8?%;padding:0 %?10?% %?0?% %?10?%}.recommend .vip-money[data-v-7c3986ba]{font-size:%?24?%;color:#282828;font-weight:700;display:flex;align-items:center;padding:%?0?% 0 0 %?10?%}.recommend .vip-money uni-image[data-v-7c3986ba]{width:%?46?%;height:%?21?%;margin-left:%?4?%}.recommend .recommendList .item .money .num[data-v-7c3986ba]{font-size:%?28?%}',
          "",
        ]),
        (t.exports = e);
    },
    c027: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }],
              style: { padding: "0 " + 2 * t.prConfig + "rpx" },
            },
            [
              t.couponList.length
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "coupon",
                      class: 0 === t.bgStyle ? "" : "borderRadius15",
                      style: "background-color:" + t.bgColor + ";margin-top:" + 2 * t.mbConfig + "rpx;",
                    },
                    [
                      i(
                        "v-uni-scroll-view",
                        {
                          staticStyle: { "white-space": "nowrap", "vertical-align": "middle" },
                          attrs: { "scroll-x": "true", "show-scrollbar": "false" },
                        },
                        [
                          i(
                            "v-uni-view",
                            { staticClass: "wrapper" },
                            [
                              t._l(t.couponList, function (e, a) {
                                return i(
                                  "v-uni-view",
                                  {
                                    key: a,
                                    staticClass: "item",
                                    staticStyle: { "margin-right": "20rpx" },
                                    style: e.is_use ? "" : "background-color:" + t.themeColor + ";",
                                    attrs: { "hover-class": "none" },
                                  },
                                  [
                                    i(
                                      "v-uni-view",
                                      { staticClass: "itemCon acea-row row-between-wrapper" },
                                      [
                                        i(
                                          "v-uni-view",
                                          { staticClass: "text" },
                                          [
                                            i(
                                              "v-uni-view",
                                              { staticClass: "money" },
                                              [i("v-uni-text", [t._v(t._s(t.$t("¥")))]), t._v(t._s(e.coupon_price))],
                                              1
                                            ),
                                            i("v-uni-view", { staticClass: "info" }, [
                                              t._v(t._s(t.$t("满")) + t._s(e.use_min_price) + t._s(t.$t("元可用"))),
                                            ]),
                                          ],
                                          1
                                        ),
                                        1 == e.is_use
                                          ? i(
                                              "v-uni-view",
                                              { staticClass: "bnt" },
                                              [i("v-uni-text", [t._v(t._s(t.$t("已领取")))])],
                                              1
                                            )
                                          : e.is_use
                                          ? 2 == e.is_use
                                            ? i(
                                                "v-uni-view",
                                                { staticClass: "bnt" },
                                                [i("v-uni-text", [t._v(t._s(t.$t("已过期")))])],
                                                1
                                              )
                                            : t._e()
                                          : i(
                                              "v-uni-view",
                                              {
                                                staticClass: "bnt",
                                                on: {
                                                  click: function (i) {
                                                    (arguments[0] = i = t.$handleEvent(i)), t.receiveCoupon(e);
                                                  },
                                                },
                                              },
                                              [i("v-uni-text", [t._v(t._s(t.$t("立即领取")))])],
                                              1
                                            ),
                                      ],
                                      1
                                    ),
                                    i("v-uni-view", { staticClass: "roll up-roll", style: { background: t.bgColor } }),
                                    i("v-uni-view", {
                                      staticClass: "roll down-roll",
                                      style: { background: t.bgColor },
                                    }),
                                  ],
                                  1
                                );
                              }),
                              i(
                                "v-uni-navigator",
                                {
                                  staticClass: "more-box",
                                  attrs: { url: "/pages/users/user_get_coupon/index", "hover-class": "none" },
                                },
                                [
                                  i("v-uni-view", { staticClass: "txt" }, [t._v(t._s(t.$t("更多")))]),
                                  i("v-uni-image", { attrs: { src: "/static/images/mores.png" } }),
                                ],
                                1
                              ),
                            ],
                            2
                          ),
                        ],
                        1
                      ),
                    ],
                    1
                  )
                : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    c288: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = {
        name: "blankPage",
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return { bgColor: this.dataConfig.bgColor.color[0].item, heightConfig: this.dataConfig.heightConfig.val };
        },
        created: function () {},
        methods: {},
      };
      e.default = a;
    },
    c292: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("323e"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    c3bd: function (t, e, i) {
      "use strict";
      var a = i("42f5"),
        n = i.n(a);
      n.a;
    },
    c551: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }] },
            [
              t.imgUrls.length && t.tabConfig
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "swipers",
                      class: [t.docConfig ? "square" : "circular", t.imgConfig ? "" : "fillet"],
                      style: "padding:0 " + t.lrConfig + "rpx;margin-top:" + t.mbConfig + "rpx;",
                    },
                    [
                      i(
                        "v-uni-swiper",
                        {
                          style: "height:" + (t.imageH + 10) + "rpx;",
                          attrs: {
                            "indicator-dots": "true",
                            autoplay: !0,
                            circular: t.circular,
                            interval: t.interval,
                            duration: t.duration,
                            "indicator-color": "#E4E4E4",
                            "indicator-active-color": "#E93323",
                            "previous-margin": t.itemEdge + "rpx",
                            "next-margin": t.itemEdge + "rpx",
                            current: t.swiperCur,
                          },
                          on: {
                            change: function (e) {
                              (arguments[0] = e = t.$handleEvent(e)), t.swiperChange.apply(void 0, arguments);
                            },
                          },
                        },
                        [
                          t._l(t.imgUrls, function (e, a) {
                            return [
                              i(
                                "v-uni-swiper-item",
                                { key: a + "_0", class: { active: a == t.swiperCur } },
                                [
                                  i(
                                    "v-uni-navigator",
                                    {
                                      staticClass: "slide-navigator acea-row row-between-wrapper",
                                      attrs: { url: e.info[1].title, "hover-class": "none" },
                                    },
                                    [
                                      i("v-uni-image", {
                                        staticClass: "slide-image",
                                        attrs: { src: e.img, mode: "widthFix" },
                                      }),
                                    ],
                                    1
                                  ),
                                ],
                                1
                              ),
                            ];
                          }),
                        ],
                        2
                      ),
                    ],
                    1
                  )
                : t._e(),
              t.tabConfig
                ? t._e()
                : i(
                    "v-uni-view",
                    { style: "margin-top:" + t.mbConfig + "rpx;" },
                    t._l(t.imgUrls, function (e, a) {
                      return i(
                        "v-uni-navigator",
                        {
                          key: a,
                          staticClass: "advert",
                          class: t.imgConfig ? "" : "fillet",
                          style: "padding:0 " + t.lrConfig + "rpx;",
                          attrs: { url: e.info[1].title, "hover-class": "none" },
                        },
                        [i("v-uni-image", { attrs: { src: e.img } })],
                        1
                      );
                    }),
                    1
                  ),
            ],
            1
          );
        },
        n = [];
    },
    c5f1: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = i("f9f0"),
        n = {
          name: "customerService",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              routineContact: this.dataConfig.routine_contact_type,
              logoConfig: this.dataConfig.logoConfig.url,
              topConfig: this.dataConfig.topConfig.val ? this.dataConfig.topConfig.val + "%" : "30%",
            };
          },
          created: function () {},
          methods: {
            setTouchMove: function (t) {
              t.touches[0].clientY < 545 && t.touches[0].clientY > 66 && (this.topConfig = t.touches[0].clientY + "px");
            },
            goCustomer: function () {
              (0, a.getCustomer)("/pages/extension/customer_list/chat?productId=".concat(this.ids));
            },
          },
        };
      e.default = n;
    },
    c604: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("9344"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    c6fe: function (t, e, i) {
      "use strict";
      var a = i("0771"),
        n = i.n(a);
      n.a;
    },
    c760: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }],
              staticClass: "swiperBg skeleton-rect",
              style: "margin-top:" + 2 * t.marginTop + "rpx;",
            },
            [
              t.imgUrls.length
                ? [
                    t.isColor
                      ? i("v-uni-view", {
                          staticClass: "colorBg",
                          style:
                            "background: linear-gradient(90deg, " +
                            t.bgColor[0].item +
                            " 50%, " +
                            t.bgColor[1].item +
                            " 100%);",
                        })
                      : t._e(),
                    i(
                      "v-uni-view",
                      {
                        staticClass: "swiper",
                        class: [t.imgConfig ? "" : "fillet"],
                        style: "padding: 0 " + t.paddinglr + "rpx;",
                      },
                      [
                        i(
                          "v-uni-swiper",
                          {
                            style: "height:" + t.imageH + "rpx;",
                            attrs: {
                              autoplay: !0,
                              circular: t.circular,
                              interval: t.interval,
                              duration: t.duration,
                              "indicator-color": "rgba(255,255,255,0.6)",
                              "indicator-active-color": "#fff",
                            },
                            on: {
                              change: function (e) {
                                (arguments[0] = e = t.$handleEvent(e)), t.bannerfun.apply(void 0, arguments);
                              },
                            },
                          },
                          [
                            t._l(t.imgUrls, function (e, a) {
                              return [
                                i(
                                  "v-uni-swiper-item",
                                  [
                                    i(
                                      "v-uni-view",
                                      {
                                        staticClass: "slide-navigator acea-row row-between-wrapper",
                                        on: {
                                          click: function (i) {
                                            (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                          },
                                        },
                                      },
                                      [
                                        i("v-uni-image", {
                                          staticClass: "slide-image aa",
                                          style: "height:" + t.imageH + "rpx;",
                                          attrs: { src: e.img, mode: "aspectFill" },
                                        }),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                ),
                              ];
                            }),
                          ],
                          2
                        ),
                        0 == t.docConfig
                          ? i(
                              "v-uni-view",
                              {
                                staticClass: "dot acea-row",
                                style: {
                                  paddingLeft: t.paddinglr + 20 + "rpx",
                                  paddingRight: t.paddinglr + 20 + "rpx",
                                  justifyContent:
                                    1 == t.txtStyle ? "center" : 2 == t.txtStyle ? "flex-end" : "flex-start",
                                },
                              },
                              t._l(t.imgUrls, function (e, a) {
                                return i("v-uni-view", {
                                  staticClass: "dot-item",
                                  style: t.active == a ? "background:" + t.dotColor : "",
                                });
                              }),
                              1
                            )
                          : t._e(),
                        1 == t.docConfig
                          ? i(
                              "v-uni-view",
                              {
                                staticClass: "dot acea-row",
                                style: {
                                  paddingLeft: t.paddinglr + 20 + "rpx",
                                  paddingRight: t.paddinglr + 20 + "rpx",
                                  justifyContent:
                                    1 == t.txtStyle ? "center" : 2 == t.txtStyle ? "flex-end" : "flex-start",
                                },
                              },
                              t._l(t.imgUrls, function (e, a) {
                                return i("v-uni-view", {
                                  staticClass: "dot-item line_dot-item",
                                  style: t.active == a ? "background:" + t.dotColor : "",
                                });
                              }),
                              1
                            )
                          : t._e(),
                        2 == t.docConfig
                          ? i(
                              "v-uni-view",
                              {
                                staticClass: "dot acea-row",
                                style: {
                                  paddingLeft: t.paddinglr + 20 + "rpx",
                                  paddingRight: t.paddinglr + 20 + "rpx",
                                  justifyContent:
                                    1 == t.txtStyle ? "center" : 2 == t.txtStyle ? "flex-end" : "flex-start",
                                },
                              },
                              [
                                i("v-uni-view", { staticClass: "instruct" }, [
                                  t._v(t._s(t.current) + "/" + t._s(t.imgUrls.length)),
                                ]),
                              ],
                              1
                            )
                          : t._e(),
                      ],
                      1
                    ),
                  ]
                : t._e(),
            ],
            2
          );
        },
        n = [];
    },
    c78d: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("174b"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    c986: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("9d8b"),
        n = i("6e83");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("f30b");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "71b32b65", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    c9fc: function (t, e, i) {
      var a = i("5589");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("7556c832", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    d035: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("f085"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    d169: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.swiperBg[data-v-b218a7ac]{position:relative}.swiperBg .colorBg[data-v-b218a7ac]{position:absolute;left:0;top:0;height:%?130?%;width:100%}.swiperBg .swiper[data-v-b218a7ac]{z-index:20;position:relative;overflow:hidden\n  /* 设置圆角 */}.swiperBg .swiper .dot[data-v-b218a7ac]{position:absolute;left:0;bottom:%?20?%;width:100%}.swiperBg .swiper .dot .instruct[data-v-b218a7ac]{width:%?50?%;height:%?36?%;line-height:%?36?%;background-color:#bfc1c4;color:#fff;border-radius:%?16?%;font-size:%?24?%;text-align:center}.swiperBg .swiper .dot .dot-item[data-v-b218a7ac]{width:%?10?%;height:%?10?%;background:rgba(0,0,0,.4);border-radius:50%;margin:0 4px}.swiperBg .swiper .dot .dot-item.line_dot-item[data-v-b218a7ac]{width:%?20?%;height:%?5?%;border-radius:%?3?%}.swiperBg .swiper.fillet[data-v-b218a7ac]{border-radius:%?10?%}.swiperBg .swiper.fillet uni-image[data-v-b218a7ac]{border-radius:%?10?%}.swiperBg .swiper uni-swiper[data-v-b218a7ac],\n.swiperBg .swiper .swiper-item[data-v-b218a7ac],\n.swiperBg .swiper uni-image[data-v-b218a7ac]{width:100%;display:block}.swiperBg .swiper.circular[data-v-b218a7ac] .uni-swiper-dot{width:%?10?%!important;height:%?10?%!important;background:rgba(0,0,0,.4)!important}.swiperBg .swiper.circular[data-v-b218a7ac] .uni-swiper-dot-active{background:#fff!important}.swiperBg .swiper.square[data-v-b218a7ac] .uni-swiper-dot{width:%?20?%!important;height:%?5?%!important;border-radius:%?3?%;background:rgba(0,0,0,.4)!important}.swiperBg .swiper.square[data-v-b218a7ac] .uni-swiper-dot-active{background:#fff!important}.item-img uni-image[data-v-b218a7ac]{display:block;width:100%}',
          "",
        ]),
        (t.exports = e);
    },
    d1a7: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("7118"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    d4013: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.barg[data-v-0d832a69]{padding-bottom:%?32?%;padding-left:%?20?%;background:linear-gradient(180deg,#fddbb2,#fdefc6);background-size:100% 100%;box-sizing:border-box}.barg .title[data-v-0d832a69]{display:flex;align-items:center;justify-content:center;padding-top:%?42?%;font-size:%?38?%;color:#ff6000;font-weight:700}.barg .title uni-image[data-v-0d832a69]{width:%?463?%;height:%?39?%}.barg .barg-swiper[data-v-0d832a69]{margin-top:%?43?%;padding-right:%?20?%}.barg .barg-swiper .wrapper[data-v-0d832a69]{display:flex}.barg .barg-swiper .list-box[data-v-0d832a69]{flex-shrink:0;width:%?210?%;background-color:#fff;border-radius:%?16?%;overflow:hidden;margin-right:%?20?%}.barg .barg-swiper .list-box uni-image[data-v-0d832a69]{width:100%;height:%?210?%}.barg .barg-swiper .list-box .info-txt[data-v-0d832a69]{width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;padding-top:%?4?%;padding-bottom:%?18?%}.barg .barg-swiper .list-box .info-txt .price[data-v-0d832a69]{font-weight:700;color:#e93323;font-size:%?28?%}.barg .barg-swiper .list-box .info-txt .price uni-text[data-v-0d832a69]{font-size:%?18?%}.barg .barg-swiper .list-box .info-txt .txt[data-v-0d832a69]{display:flex;align-items:center;justify-content:center;width:%?136?%;height:%?33?%;margin-top:%?10?%;border-radius:17px;font-size:%?18?%;color:#fff}.barg .barg-swiper .more-box[data-v-0d832a69]{flex-shrink:0;display:flex;flex-direction:column;align-items:center;justify-content:center;width:%?80?%;background-color:#fff;border-radius:%?16?%}.barg .barg-swiper .more-box uni-image[data-v-0d832a69]{width:%?24?%;height:%?24?%;margin-top:%?10?%}.barg .barg-swiper .more-box .txt[data-v-0d832a69]{display:block;-webkit-writing-mode:vertical-lr;writing-mode:vertical-lr;font-size:%?26?%;line-height:1.2}',
          "",
        ]),
        (t.exports = e);
    },
    d5d7: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("0cd9"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    d6b0: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("63a1"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    d6e1: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("0455"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    d722: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("3009"),
        n = i("5cad");
      for (var o in n)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return n[t];
            });
          })(o);
      i("6633");
      var r = i("f0c5"),
        s = Object(r["a"])(n["default"], a["b"], a["c"], !1, null, "0d832a69", null, !1, a["a"], void 0);
      e["default"] = s.exports;
    },
    d9c0: function (t, e, i) {
      var a = i("1cb9");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("74cae8fe", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    db40: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          "@-webkit-keyframes show-data-v-ad63bb64{0%{opacity:0}100%{opacity:1}}@keyframes show-data-v-ad63bb64{0%{opacity:0}100%{opacity:1}}\n\n\n\n",
          "",
        ]),
        (t.exports = e);
    },
    de0d: function (module, exports, __webpack_require__) {
      "use strict";
      __webpack_require__("7a82");
      var _interopRequireDefault = __webpack_require__("ee27").default;
      Object.defineProperty(exports, "__esModule", { value: !0 }), (exports.default = void 0);
      var _createForOfIteratorHelper2 = _interopRequireDefault(__webpack_require__("54f8"));
      __webpack_require__("c975"),
        __webpack_require__("caad6"),
        __webpack_require__("2532"),
        __webpack_require__("ac1f"),
        __webpack_require__("466d"),
        __webpack_require__("5319"),
        __webpack_require__("acd8"),
        __webpack_require__("99af"),
        __webpack_require__("14d9");
      var rpx = uni.getSystemInfoSync().screenWidth / 750,
        cfg = __webpack_require__("9b07"),
        _default = {
          name: "parser",
          data: function () {
            return { uid: this._uid, scaleAm: "", showAm: "", imgs: [], nodes: [] };
          },
          props: {
            html: null,
            autopause: { type: Boolean, default: !0 },
            autosetTitle: { type: Boolean, default: !0 },
            domain: String,
            gestureZoom: Boolean,
            lazyLoad: Boolean,
            selectable: Boolean,
            tagStyle: Object,
            showWithAnimation: Boolean,
            useAnchor: Boolean,
          },
          watch: {
            html: function (t) {
              this.setContent(t);
            },
          },
          mounted: function () {
            (this.imgList = []),
              (this.imgList.each = function (t) {
                for (var e = 0, i = this.length; e < i; e++) this.setItem(e, t(this[e], e, this));
              }),
              (this.imgList.setItem = function (t, e) {
                if (void 0 != t && e) {
                  if (0 == e.indexOf("http") && this.includes(e)) {
                    for (var i, a = "", n = 0; (i = e[n]); n++) {
                      if ("/" == i && "/" != e[n - 1] && "/" != e[n + 1]) break;
                      a += Math.random() > 0.5 ? i.toUpperCase() : i;
                    }
                    return (a += e.substr(n)), (this[t] = a);
                  }
                  if (((this[t] = e), e.includes("data:image"))) {
                    var o = e.match(/data:image\/(\S+?);(\S+?),(.+)/);
                    if (!o) return;
                  }
                }
              }),
              this.html && this.setContent(this.html);
          },
          beforeDestroy: function () {
            this._observer && this._observer.disconnect(),
              this.imgList.each(function (t) {}),
              clearInterval(this._timer);
          },
          methods: {
            _Dom2Str: function (t) {
              var e,
                i = "",
                a = (0, _createForOfIteratorHelper2.default)(t);
              try {
                for (a.s(); !(e = a.n()).done; ) {
                  var n = e.value;
                  if ("text" == n.type) i += n.text;
                  else {
                    for (var o in ((i += "<" + n.name), n.attrs || {})) i += " " + o + '="' + n.attrs[o] + '"';
                    n.children && n.children.length
                      ? (i += ">" + this._Dom2Str(n.children) + "</" + n.name + ">")
                      : (i += ">");
                  }
                }
              } catch (r) {
                a.e(r);
              } finally {
                a.f();
              }
              return i;
            },
            _handleHtml: function (t, e) {
              if (
                ("string" != typeof t && (t = this._Dom2Str(t.nodes || t)),
                t.includes("rpx") &&
                  (t = t.replace(/[0-9.]+\s*rpx/g, function (t) {
                    return parseFloat(t) * rpx + "px";
                  })),
                !e)
              ) {
                var i = "<style scoped>@keyframes show{0%{opacity:0}100%{opacity:1}}";
                for (var a in cfg.userAgentStyles) i += "".concat(a, "{").concat(cfg.userAgentStyles[a], "}");
                for (a in this.tagStyle) i += "".concat(a, "{").concat(this.tagStyle[a], "}");
                (i += "</style>"), (t = i + t);
              }
              return t;
            },
            setContent: function (t, e) {
              var i = this;
              if (t) {
                var a = document.createElement("div");
                e
                  ? this.rtf
                    ? this.rtf.appendChild(a)
                    : (this.rtf = a)
                  : (this.rtf && this.rtf.parentNode.removeChild(this.rtf), (this.rtf = a)),
                  (a.innerHTML = this._handleHtml(t, e));
                for (var n, o = this.rtf.getElementsByTagName("style"), r = 0; (n = o[r++]); )
                  (n.innerHTML = n.innerHTML.replace(/body/g, "#rtf" + this._uid)), n.setAttribute("scoped", "true");
                !this._observer &&
                  this.lazyLoad &&
                  IntersectionObserver &&
                  (this._observer = new IntersectionObserver(
                    function (t) {
                      for (var e, a = 0; (e = t[a++]); )
                        e.isIntersecting &&
                          ((e.target.src = e.target.getAttribute("data-src")),
                          e.target.removeAttribute("data-src"),
                          i._observer.unobserve(e.target));
                    },
                    { rootMargin: "900px 0px 900px 0px" }
                  ));
                var s = this,
                  c = this.rtf.getElementsByTagName("title");
                c.length && this.autosetTitle && uni.setNavigationBarTitle({ title: c[0].innerText }),
                  (this.imgList.length = 0);
                for (var l, d = this.rtf.getElementsByTagName("img"), u = 0, f = 0; (l = d[u]); u++) {
                  l.style.maxWidth = "100%";
                  var p = l.getAttribute("src");
                  this.domain &&
                    p &&
                    ("/" == p[0]
                      ? "/" == p[1]
                        ? (l.src = (this.domain.includes("://") ? this.domain.split("://")[0] : "") + ":" + p)
                        : (l.src = this.domain + p)
                      : p.includes("://") || (l.src = this.domain + "/" + p)),
                    l.hasAttribute("ignore") ||
                      "A" == l.parentElement.nodeName ||
                      ((l.i = f++),
                      s.imgList.push(l.src || l.getAttribute("data-src")),
                      (l.onclick = function () {
                        var t = !0;
                        (this.ignore = function () {
                          return (t = !1);
                        }),
                          s.$emit("imgtap", this),
                          t && uni.previewImage({ current: this.i, urls: s.imgList });
                      })),
                    (l.onerror = function () {
                      s.$emit("error", { source: "img", target: this });
                    }),
                    s.lazyLoad &&
                      this._observer &&
                      l.src &&
                      0 != l.i &&
                      (l.setAttribute("data-src", l.src), l.removeAttribute("src"), this._observer.observe(l));
                }
                var g,
                  v = this.rtf.getElementsByTagName("a"),
                  h = (0, _createForOfIteratorHelper2.default)(v);
                try {
                  for (h.s(); !(g = h.n()).done; ) {
                    var m = g.value;
                    m.onclick = function () {
                      var t = !0,
                        e = this.getAttribute("href");
                      if (
                        (s.$emit("linkpress", {
                          href: e,
                          ignore: function () {
                            return (t = !1);
                          },
                        }),
                        t && e)
                      )
                        if ("#" == e[0]) s.useAnchor && s.navigateTo({ id: e.substr(1) });
                        else {
                          if (0 == e.indexOf("http") || 0 == e.indexOf("//")) return !0;
                          uni.navigateTo({ url: e });
                        }
                      return !1;
                    };
                  }
                } catch (T) {
                  h.e(T);
                } finally {
                  h.f();
                }
                var b = this.rtf.getElementsByTagName("video");
                s.videoContexts = b;
                for (var w, C = 0; (w = b[C++]); )
                  (w.style.maxWidth = "100%"),
                    (w.style.height = "auto"),
                    (w.onerror = function () {
                      s.$emit("error", { source: "video", target: this });
                    }),
                    (w.onplay = function () {
                      if (s.autopause) for (var t, e = 0; (t = s.videoContexts[e++]); ) t != this && t.pause();
                    });
                var x,
                  y,
                  _ = this.rtf.getElementsByTagName("audios"),
                  k = (0, _createForOfIteratorHelper2.default)(_);
                try {
                  for (k.s(); !(x = k.n()).done; ) {
                    var S = x.value;
                    S.onerror = function () {
                      s.$emit("error", { source: "audio", target: this });
                    };
                  }
                } catch (T) {
                  k.e(T);
                } finally {
                  k.f();
                }
                (this.document = this.rtf),
                  e || document.getElementById("rtf" + this._uid).appendChild(this.rtf),
                  this.$nextTick(function () {
                    (i.nodes = [1]), i.$emit("load");
                  }),
                  setTimeout(function () {
                    return (i.showAm = "");
                  }, 500),
                  clearInterval(this._timer),
                  (this._timer = setInterval(function () {
                    var t = [i.rtf.getBoundingClientRect()];
                    (i.width = t[0].width),
                      t[0].height == y && (i.$emit("ready", t[0]), clearInterval(i._timer)),
                      (y = t[0].height);
                  }, 350)),
                  this.showWithAnimation && !e && (this.showAm = "animation:show .5s");
              } else this.rtf && !e && this.rtf.parentNode.removeChild(this.rtf);
            },
            getText: function () {
              (arguments.length > 0 && void 0 !== arguments[0]) || this.nodes;
              return this.rtf.innerText;
            },
            navigateTo: function (t) {
              if (!this.useAnchor) return t.fail && t.fail({ errMsg: "Anchor is disabled" });
              if (!t.id)
                return window.scrollTo(0, this.rtf.offsetTop), t.success && t.success({ errMsg: "pageScrollTo:ok" });
              var e = document.getElementById(t.id);
              if (!e) return t.fail && t.fail({ errMsg: "Label not found" });
              (t.scrollTop = this.rtf.offsetTop + e.offsetTop), uni.pageScrollTo(t);
            },
            getVideoContext: function (t) {
              if (!t) return this.videoContexts;
              for (var e = this.videoContexts.length; e--; )
                if (this.videoContexts[e].id == t) return this.videoContexts[e];
            },
            preLoad: function preLoad(html, num) {
              html.constructor == Array && (html = this._Dom2Str(html));
              var script =
                "var contain=document.createElement('div');contain.innerHTML='" +
                html.replace(/'/g, "\\'") +
                "';for(var imgs=contain.querySelectorAll('img'),i=imgs.length-1;i>=" +
                num +
                ";i--)imgs[i].removeAttribute('src');";
              eval(script);
            },
            _tap: function (t) {
              if (this.gestureZoom && t.timeStamp - this._lastT < 300) {
                var e = t.touches[0].pageY - t.currentTarget.offsetTop;
                if (this._zoom)
                  this._scaleAm.translateX(0).scale(1).step(),
                    uni.pageScrollTo({ scrollTop: (e + this._initY) / 2 - t.touches[0].clientY, duration: 400 });
                else {
                  var i = t.touches[0].pageX - t.currentTarget.offsetLeft;
                  (this._initY = e),
                    (this._scaleAm = uni.createAnimation({
                      transformOrigin: "".concat(i, "px ").concat(this._initY, "px 0"),
                      timingFunction: "ease-in-out",
                    })),
                    this._scaleAm.scale(2).step(),
                    (this._tMax = i / 2),
                    (this._tMin = (i - this.width) / 2),
                    (this._tX = 0);
                }
                (this._zoom = !this._zoom), (this.scaleAm = this._scaleAm.export());
              }
              this._lastT = t.timeStamp;
            },
            _touchstart: function (t) {
              1 == t.touches.length && (this._initX = this._lastX = t.touches[0].pageX);
            },
            _touchmove: function (t) {
              var e = t.touches[0].pageX - this._lastX;
              if (this._zoom && 1 == t.touches.length && Math.abs(e) > 20) {
                if (
                  ((this._lastX = t.touches[0].pageX),
                  (this._tX <= this._tMin && e < 0) || (this._tX >= this._tMax && e > 0))
                )
                  return;
                (this._tX += e * Math.abs(this._lastX - this._initX) * 0.05),
                  this._tX < this._tMin && (this._tX = this._tMin),
                  this._tX > this._tMax && (this._tX = this._tMax),
                  this._scaleAm.translateX(this._tX).step(),
                  (this.scaleAm = this._scaleAm.export());
              }
            },
          },
        };
      exports.default = _default;
    },
    df7d: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          ".time[data-v-13279574]{display:flex;justify-content:center}.red[data-v-13279574]{color:var(--view-theme);margin:0 %?4?%}",
          "",
        ]),
        (t.exports = e);
    },
    e044: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("472c"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    e05e: function (t, e, i) {
      var a = i("97f7");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("36ebfd55", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
    e08a: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.index-product-wrapper[data-v-0b79575a]{margin:%?30?% %?20?% 0 %?20?%}.index-product-wrapper.on[data-v-0b79575a]{min-height:%?1500?%}.index-product-wrapper .nav-bd[data-v-0b79575a]{display:flex;align-items:center;margin-top:%?30?%}.index-product-wrapper .nav-bd .item[data-v-0b79575a]{display:flex;flex-direction:column;align-items:center;justify-content:center;width:25%}.index-product-wrapper .nav-bd .item.on[data-v-0b79575a]{border-radius:0}.index-product-wrapper .nav-bd .item .txt[data-v-0b79575a]{font-size:%?32?%;color:#282828}.index-product-wrapper .nav-bd .item .label[data-v-0b79575a]{display:flex;align-items:center;justify-content:center;width:%?124?%;height:%?32?%;margin-top:%?5?%;font-size:%?24?%;color:#999;border-radius:%?16?%}.index-product-wrapper .list-box[data-v-0b79575a]{display:flex;flex-wrap:wrap;justify-content:space-between;margin-top:%?30?%}.index-product-wrapper .list-box .item[data-v-0b79575a]{width:%?345?%;margin-bottom:%?20?%;background-color:#fff;border-radius:%?20?%;overflow:hidden;position:relative}.index-product-wrapper .list-box .item[data-v-0b79575a] .easy-loadimage uni-image{width:100%;height:%?346?%;border-radius:%?20?% %?20?% 0 0}.index-product-wrapper .list-box .item .pictrue_log[data-v-0b79575a]{width:%?92?%;height:%?44?%;font-size:%?26?%;line-height:%?44?%}.index-product-wrapper .list-box .item uni-image[data-v-0b79575a]{width:100%;height:%?346?%;display:block;border-radius:%?20?% %?20?% 0 0}.index-product-wrapper .list-box .item .text-info[data-v-0b79575a]{padding:%?10?% %?20?% %?15?%}.index-product-wrapper .list-box .item .text-info .title[data-v-0b79575a]{color:#222;line-height:%?34?%;height:%?68?%}.index-product-wrapper .list-box .item .text-info .old-price[data-v-0b79575a]{margin-top:%?4?%;font-size:%?22?%;color:#aaa;text-decoration:line-through}.index-product-wrapper .list-box .item .text-info .old-price uni-text[data-v-0b79575a]{margin-right:2px;font-size:%?20?%}.index-product-wrapper .list-box .item .text-info .price[data-v-0b79575a]{display:flex;align-items:flex-end;font-size:%?36?%;font-weight:550}.index-product-wrapper .list-box .item .text-info .price uni-text[data-v-0b79575a]{padding-bottom:%?4?%;font-size:%?26?%;font-weight:400}.index-product-wrapper .list-box .item .text-info .price .txt[data-v-0b79575a]{display:flex;align-items:center;justify-content:center;width:%?28?%;height:%?28?%;margin-left:%?15?%;margin-bottom:%?10?%;border-radius:%?4?%;font-size:%?20?%;font-weight:400}.index-product-wrapper .list-box .item .text-info .price .txt.on[data-v-0b79575a]{margin-left:0}.index-product-wrapper .list-box.on[data-v-0b79575a]{display:flex}',
          "",
        ]),
        (t.exports = e);
    },
    e510: function (t, e, i) {
      "use strict";
      var a = i("c9fc"),
        n = i.n(a);
      n.a;
    },
    e63b: function (t, e, i) {
      "use strict";
      var a = i("a77d"),
        n = i.n(a);
      n.a;
    },
    e678: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this.$createElement,
            e = this._self._c || t;
          return e("div");
        },
        n = [];
    },
    e6e8: function (t, e, i) {
      "use strict";
      var a = i("5f5e"),
        n = i.n(a);
      n.a;
    },
    e9e3: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("56d1"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    e9ec: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.pageOn[data-v-c83e7b2a]{border-radius:%?24?%!important}.pageOn .advertItem01 uni-image[data-v-c83e7b2a]{border-radius:%?20?%}.pageOn .advertItem02 .item:nth-child(1) uni-image[data-v-c83e7b2a]{border-radius:%?20?% 0 0 %?20?%}.pageOn .advertItem02 .item:nth-child(2) uni-image[data-v-c83e7b2a]{border-radius:0 %?20?% %?20?% 0}.pageOn .advertItem03 .item:nth-child(1) uni-image[data-v-c83e7b2a]{border-radius:%?20?% 0 0 %?20?%}.pageOn .advertItem03 .item:nth-child(2) uni-image[data-v-c83e7b2a]{border-radius:0}.pageOn .advertItem03 .item:nth-child(3) uni-image[data-v-c83e7b2a]{border-radius:0 %?20?% %?20?% 0}.pageOn .advertItem04 .item:nth-child(1) uni-image[data-v-c83e7b2a]{border-radius:%?20?% 0 0 %?20?%}.pageOn .advertItem04 .item:nth-child(2) .pic:nth-child(1) uni-image[data-v-c83e7b2a]{border-radius:0 %?20?% 0 0}.pageOn .advertItem04 .item:nth-child(2) .pic:nth-child(2) uni-image[data-v-c83e7b2a]{border-radius:0 0 %?20?% 0}.pageOn .advertItem05 .item:nth-child(1) uni-image[data-v-c83e7b2a]{border-radius:%?20?% 0 0 %?20?%}.pageOn .advertItem05 .item:nth-child(2) uni-image[data-v-c83e7b2a]{border-radius:0}.pageOn .advertItem05 .item:nth-child(4) uni-image[data-v-c83e7b2a]{border-radius:0 %?20?% %?20?% 0}.pageOn .advertItem06 .item:nth-child(1) uni-image[data-v-c83e7b2a]{border-radius:%?20?% 0 0 0}.pageOn .advertItem06 .item:nth-child(2) uni-image[data-v-c83e7b2a]{border-radius:0 %?20?% 0 0}.pageOn .advertItem06 .item:nth-child(3) uni-image[data-v-c83e7b2a]{border-radius:0 0 0 %?20?%}.pageOn .advertItem06 .item:nth-child(4) uni-image[data-v-c83e7b2a]{border-radius:0 0 %?20?% 0}.pictureCube[data-v-c83e7b2a]{background-color:#fff}.pictureCube .advertItem01[data-v-c83e7b2a]{width:100%;height:auto}.pictureCube .advertItem01 uni-image[data-v-c83e7b2a]{width:100%;height:100%;display:block}.pictureCube .advertItem02[data-v-c83e7b2a]{width:100%}.pictureCube .advertItem02 .item[data-v-c83e7b2a]{width:50%;height:auto}.pictureCube .advertItem02 .item uni-image[data-v-c83e7b2a]{width:100%;height:100%;display:block}.pictureCube .advertItem03 .item[data-v-c83e7b2a]{width:33.3333%}.pictureCube .advertItem04[data-v-c83e7b2a]{width:100%}.pictureCube .advertItem04 .item[data-v-c83e7b2a]{width:50%;height:%?376?%}.pictureCube .advertItem04 .item .pic[data-v-c83e7b2a]{width:100%;height:%?188?%}.pictureCube .advertItem04 .item uni-image[data-v-c83e7b2a]{width:100%;height:100%;display:block}.pictureCube .advertItem05 .item[data-v-c83e7b2a]{width:25%}.pictureCube .advertItem06 .item[data-v-c83e7b2a]{width:50%;height:%?188?%}',
          "",
        ]),
        (t.exports = e);
    },
    eaf6: function (t, e, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("a9e3"),
        i("3c65"),
        i("ac1f");
      var a = i("2a39"),
        n = {
          name: "tabNav",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isFixed: { type: Boolean | String | Number, default: !1 },
          },
          data: function () {
            return {
              tabTitle: [],
              tabLeft: 0,
              isWidth: 0,
              tabClick: 0,
              isLeft: 0,
              bgColor: this.dataConfig.bgColor.color,
              mbConfig: this.dataConfig.mbConfig.val,
              txtColor: this.dataConfig.txtColor.color[0].item,
              fixedTop: 0,
              isTop: 0,
              navHeight: 0,
            };
          },
          created: function () {
            var t = this;
            t.getAllCategory(),
              uni.getSystemInfoSync({
                success: function (e) {
                  t.isWidth = e.windowWidth / 5;
                },
              });
          },
          methods: {
            longClick: function (t, e) {
              this.tabTitle.length > 5 && (this.tabLeft = (e - 2) * this.isWidth),
                (this.tabClick = e),
                (this.isLeft = e * this.isWidth),
                this.$emit("bindSortId", t.id);
            },
            getAllCategory: function () {
              var t = this,
                e = this;
              (0, a.getCategoryList)().then(function (i) {
                i.data.unshift({ id: -99, cate_name: "首页" }),
                  (e.tabTitle = i.data),
                  setTimeout(function (i) {
                    var a = uni.createSelectorQuery().in(t);
                    a.select(".navTabBox")
                      .boundingClientRect(function (t) {
                        (e.domOffsetTop = t.top), (e.navHeight = t.height), e.$emit("bindHeight", t);
                      })
                      .exec();
                  }, 200),
                  (t.isTop = 0);
              });
            },
          },
        };
      e.default = n;
    },
    ebf7: function (t, e, i) {
      "use strict";
      i("7a82");
      var a = i("ee27").default;
      Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0);
      var n = i("26cb"),
        o = i("6557"),
        r = a(i("19b6")),
        s = {
          computed: (0, n.mapGetters)(["uid"]),
          props: {
            hostProduct: {
              type: Array,
              default: function () {
                return [];
              },
            },
          },
          mixins: [r.default],
          data: function () {
            return {};
          },
          methods: {
            goDetail: function (t) {
              (0, o.goShopDetail)(t, this.uid).then(function (e) {
                uni.navigateTo({ url: "/pages/goods_details/index?id=".concat(t.id) });
              });
            },
          },
        };
      e.default = s;
    },
    ec11: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("3320"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    edfd: function (t, e, i) {
      "use strict";
      var a = i("a2cb"),
        n = i.n(a);
      n.a;
    },
    ee80: function (t, e, i) {
      "use strict";
      var a = i("6cae"),
        n = i.n(a);
      n.a;
    },
    ef73: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.pageOn[data-v-7686693c]{border-radius:%?12?%!important}.news[data-v-7686693c]{display:flex;align-items:center;flex-wrap:nowrap;height:%?77?%;border-top:%?1?% solid #f4f4f4;padding:0 %?20?%;box-shadow:0 %?10?% %?30?% #f5f5f5}.news .pictrue[data-v-7686693c]{width:%?130?%;height:%?36?%;border-right:%?1?% solid #ddd;padding-right:%?23?%;box-sizing:initial}.news .pictrue uni-image[data-v-7686693c]{width:100%;height:100%}.news .swiperTxt[data-v-7686693c]{width:%?523?%;height:100%;line-height:%?77?%;overflow:hidden;margin-left:%?22?%}.news .swiperTxt .text[data-v-7686693c]{width:89%}.news .swiperTxt .text .label[data-v-7686693c]{font-size:%?20?%;color:#ff4c48;width:%?64?%;height:%?30?%;border-radius:%?40?%;text-align:center;line-height:%?28?%;border:%?2?% solid #ff4947}.news .swiperTxt .text .newsTitle[data-v-7686693c]{width:100%;font-size:%?24?%;color:#666}.news .swiperTxt .iconfont[data-v-7686693c]{font-size:%?28?%;color:#888}.news .swiperTxt uni-swiper[data-v-7686693c]{height:100%}',
          "",
        ]),
        (t.exports = e);
    },
    eff4: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.explosion[data-v-77e26a3f]{width:%?710?%;margin-top:%?20?%;margin:%?20?% auto 0 auto;padding:%?30?% %?20?%;padding:%?30?% %?20?% %?6?% %?20?%;background-color:#ffe5e3;background-size:100% 100%;border-radius:13px;box-sizing:border-box}.explosion .hd[data-v-77e26a3f]{display:flex;align-items:center}.explosion .hd .title[data-v-77e26a3f]{font-size:%?32?%;font-weight:700;margin-right:%?12?%}.explosion .hd uni-image[data-v-77e26a3f]{width:%?147?%;height:%?35?%;margin-right:%?20?%}.explosion .hd .txt[data-v-77e26a3f]{padding:0 %?10?%;height:%?36?%;line-height:%?36?%;border-radius:%?26?% 0 %?26?% 0;color:#fff;text-align:center;font-size:%?22?%;box-shadow:3px 1px 1px 1px var(--view-minorColorT)}.explosion .bd[data-v-77e26a3f]{display:flex;flex-wrap:wrap;margin-top:%?28?%}.explosion .bd .item[data-v-77e26a3f]{display:flex;align-items:center;justify-content:space-between;position:relative;width:%?325?%;height:%?180?%;margin-bottom:%?20?%;margin-right:%?20?%;background-color:#fff;border-radius:%?16?%;padding:0 %?20?%;box-sizing:border-box}.explosion .bd .item uni-image[data-v-77e26a3f]{width:%?140?%;height:%?140?%}.explosion .bd .item .con-box[data-v-77e26a3f]{display:flex;flex-direction:column;justify-content:center;width:%?130?%;height:100%}.explosion .bd .item .con-box .title[data-v-77e26a3f]{color:#282828;font-size:%?28?%}.explosion .bd .item .con-box .con[data-v-77e26a3f]{color:#999;font-size:%?20?%;margin-top:%?2?%}.explosion .bd .item .con-box .go[data-v-77e26a3f]{display:flex;align-items:center;justify-content:center;margin-top:%?10?%;width:%?112?%;height:%?36?%;border-radius:%?18?%;color:#fff;font-size:%?26?%;font-weight:700;font-style:italic}.explosion .bd .item .con-box .go uni-image[data-v-77e26a3f]{width:%?26?%;height:%?26?%}.explosion .bd .item:first-child .go[data-v-77e26a3f]{background:linear-gradient(90deg,#4bc4ff,#207eff)}.explosion .bd .item:nth-child(2) .go[data-v-77e26a3f]{background:linear-gradient(90deg,#ff9043,#ff531d)}.explosion .bd .item:nth-child(3) .go[data-v-77e26a3f]{background:linear-gradient(90deg,#96e187,#48ce2c)}.explosion .bd .item:nth-child(4) .go[data-v-77e26a3f]{background:linear-gradient(90deg,#ffc560,#ff9c00)}.explosion .bd .item[data-v-77e26a3f]:nth-child(2n){margin-right:0}',
          "",
        ]),
        (t.exports = e);
    },
    f085: function (t, e, i) {
      "use strict";
      i("7a82"), Object.defineProperty(e, "__esModule", { value: !0 }), (e.default = void 0), i("a9e3");
      var a = i("5743"),
        n = i("84d8"),
        o = {
          name: "combination",
          props: {
            dataConfig: { type: Object, default: function () {} },
            isSortType: { type: String | Number, default: 0 },
          },
          data: function () {
            return {
              pinkInfo: "",
              combinationList: [],
              numConfig: this.dataConfig.numConfig.val,
              txtColor: this.dataConfig.txtColor.color[0].item,
              themeColor: this.dataConfig.themeColor.color[0].item,
              mbConfig: this.dataConfig.mbConfig.val,
              lrConfig: this.dataConfig.lrConfig.val,
              imgUrl: this.dataConfig.imgConfig.url,
              priceShow: this.dataConfig.priceShow.val,
              bntShow: this.dataConfig.bntShow.val,
              titleShow: this.dataConfig.titleShow.val,
              pinkShow: this.dataConfig.pinkShow.val,
              joinShow: this.dataConfig.joinShow.val,
              prConfig: this.dataConfig.prConfig.val,
              bgColor: this.dataConfig.bgColor.color[0].item,
              conStyle: this.dataConfig.conStyle.type,
            };
          },
          created: function () {},
          mounted: function () {
            this.pink(), this.getCombinationList();
          },
          methods: {
            getCombinationList: function () {
              var t = this,
                e = t.$config.LIMIT,
                i = { page: 1, limit: t.numConfig >= e ? e : t.numConfig };
              (0, n.getCombinationList)(i)
                .then(function (e) {
                  t.combinationList = e.data;
                })
                .catch(function (e) {
                  return t.$util.Tips({ title: e });
                });
            },
            pink: function () {
              var t = this;
              (0, a.pink)().then(function (e) {
                t.pinkInfo = e.data;
              });
            },
          },
        };
      e.default = o;
    },
    f1fa: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            { staticClass: "time", style: t.justifyLeft },
            [
              t.tipText ? i("v-uni-text", { staticClass: "red" }, [t._v(t._s(t.tipText))]) : t._e(),
              !0 === t.isDay
                ? i(
                    "v-uni-text",
                    { staticClass: "styleAll", style: "background-color:" + t.bgColor + ";color:" + t.colors + ";" },
                    [t._v(t._s(t.day))]
                  )
                : t._e(),
              t.dayText ? i("v-uni-text", { staticClass: "timeTxt red" }, [t._v(t._s(t.dayText))]) : t._e(),
              i(
                "v-uni-text",
                { staticClass: "styleAll", style: "background-color:" + t.bgColor + ";color:" + t.colors + ";" },
                [t._v(t._s(t.hour))]
              ),
              t.hourText ? i("v-uni-text", { staticClass: "timeTxt red" }, [t._v(t._s(t.hourText))]) : t._e(),
              i(
                "v-uni-text",
                { staticClass: "styleAll", style: "background-color:" + t.bgColor + ";color:" + t.colors + ";" },
                [t._v(t._s(t.minute))]
              ),
              t.minuteText ? i("v-uni-text", { staticClass: "timeTxt red" }, [t._v(t._s(t.minuteText))]) : t._e(),
              i(
                "v-uni-text",
                { staticClass: "styleAll", style: "background-color:" + t.bgColor + ";color:" + t.colors + ";" },
                [t._v(t._s(t.second))]
              ),
              t.secondText ? i("v-uni-text", { staticClass: "timeTxt red" }, [t._v(t._s(t.secondText))]) : t._e(),
            ],
            1
          );
        },
        n = [];
    },
    f30b: function (t, e, i) {
      "use strict";
      var a = i("ff4d"),
        n = i.n(a);
      n.a;
    },
    f30f: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              directives: [{ name: "show", rawName: "v-show", value: !t.isSortType, expression: "!isSortType" }],
              style: { padding: "0 " + t.prConfig + "px" },
            },
            [
              t.tempArr.length
                ? i(
                    "v-uni-view",
                    {
                      staticClass: "index-product-wrapper",
                      class: 0 === t.bgStyle ? "" : "borderRadius15",
                      style: { marginTop: 2 * t.mbConfig + "rpx", background: t.themeColor },
                    },
                    [
                      0 == t.itemStyle
                        ? [
                            i(
                              "v-uni-view",
                              { staticClass: "list-box listA", class: t.tempArr.length > 0 ? "fadeIn on" : "" },
                              t._l(t.tempArr, function (e, a) {
                                return i(
                                  "v-uni-view",
                                  {
                                    key: a,
                                    staticClass: "item",
                                    class: t.conStyle ? "borderRadius15" : "",
                                    on: {
                                      click: function (i) {
                                        (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "v-uni-view",
                                      { staticClass: "pictrue" },
                                      [
                                        e.activity && "1" === e.activity.type && t.$permission("seckill")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("秒杀")))]
                                            )
                                          : t._e(),
                                        e.activity && "2" === e.activity.type && t.$permission("bargain")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("砍价")))]
                                            )
                                          : t._e(),
                                        e.activity && "3" === e.activity.type && t.$permission("combination")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("拼团")))]
                                            )
                                          : t._e(),
                                        i("v-uni-image", { attrs: { src: e.image, mode: "" } }),
                                      ],
                                      1
                                    ),
                                    i(
                                      "v-uni-view",
                                      {
                                        staticClass: "text-info",
                                        staticStyle: {
                                          display: "flex",
                                          "flex-direction": "column",
                                          "justify-content": "space-between",
                                        },
                                      },
                                      [
                                        i(
                                          "v-uni-view",
                                          [
                                            t.titleShow
                                              ? i("v-uni-view", { staticClass: "title line2" }, [
                                                  t._v(t._s(e.store_name)),
                                                ])
                                              : t._e(),
                                            t.opriceShow
                                              ? i("v-uni-view", { staticClass: "old-price" }, [
                                                  t._v(t._s(t.$t("￥")) + t._s(e.ot_price)),
                                                ])
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                        i(
                                          "v-uni-view",
                                          { staticClass: "price", style: "color:" + t.fontColor },
                                          [
                                            t.priceShow
                                              ? i(
                                                  "v-uni-view",
                                                  [i("v-uni-text", [t._v(t._s(t.$t("￥")))]), t._v(t._s(e.price))],
                                                  1
                                                )
                                              : t._e(),
                                            e.checkCoupon && t.couponShow
                                              ? i(
                                                  "v-uni-view",
                                                  {
                                                    staticClass: "txt",
                                                    class: t.priceShow ? "" : "on",
                                                    style:
                                                      "border:1px solid " + t.labelColor + ";color:" + t.labelColor,
                                                  },
                                                  [t._v(t._s(t.$t("券")))]
                                                )
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                );
                              }),
                              1
                            ),
                          ]
                        : t._e(),
                      1 == t.itemStyle
                        ? [
                            i(
                              "v-uni-view",
                              { staticClass: "list-box listC", class: t.tempArr.length > 0 ? "fadeIn on" : "" },
                              t._l(t.tempArr, function (e, a) {
                                return i(
                                  "v-uni-view",
                                  {
                                    key: a,
                                    staticClass: "item",
                                    class: t.conStyle ? "borderRadius15" : "",
                                    on: {
                                      click: function (i) {
                                        (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "v-uni-view",
                                      { staticClass: "pictrue" },
                                      [
                                        e.activity && "1" === e.activity.type && t.$permission("seckill")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("秒杀")))]
                                            )
                                          : t._e(),
                                        e.activity && "2" === e.activity.type && t.$permission("bargain")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("砍价")))]
                                            )
                                          : t._e(),
                                        e.activity && "3" === e.activity.type && t.$permission("combination")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("拼团")))]
                                            )
                                          : t._e(),
                                        i("v-uni-image", { attrs: { src: e.image, mode: "aspectFit" } }),
                                      ],
                                      1
                                    ),
                                    i(
                                      "v-uni-view",
                                      { staticClass: "text-info" },
                                      [
                                        t.titleShow
                                          ? i("v-uni-view", { staticClass: "title line2" }, [t._v(t._s(e.store_name))])
                                          : t._e(),
                                        t.opriceShow
                                          ? i("v-uni-view", { staticClass: "old-price" }, [
                                              t._v(t._s(t.$t("￥")) + t._s(e.ot_price)),
                                            ])
                                          : t._e(),
                                        i(
                                          "v-uni-view",
                                          { staticClass: "price", style: "color:" + t.fontColor },
                                          [
                                            t.priceShow
                                              ? i("v-uni-view", [
                                                  t._v(t._s(t.$t("￥")) + "\n\t\t\t\t\t\t\t\t" + t._s(e.price)),
                                                ])
                                              : t._e(),
                                            e.checkCoupon && t.couponShow
                                              ? i(
                                                  "v-uni-view",
                                                  {
                                                    staticClass: "txt",
                                                    class: t.priceShow ? "" : "on",
                                                    style:
                                                      "border:1px solid " + t.labelColor + ";color:" + t.labelColor,
                                                  },
                                                  [t._v(t._s(t.$t("券")))]
                                                )
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                );
                              }),
                              1
                            ),
                          ]
                        : t._e(),
                      2 == t.itemStyle
                        ? [
                            i(
                              "v-uni-view",
                              { staticClass: "list-box listB", class: t.tempArr.length > 0 ? "fadeIn on" : "" },
                              t._l(t.tempArr, function (e, a) {
                                return i(
                                  "v-uni-view",
                                  {
                                    key: a,
                                    staticClass: "item",
                                    class: t.conStyle ? "borderRadius15" : "",
                                    on: {
                                      click: function (i) {
                                        (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                                      },
                                    },
                                  },
                                  [
                                    i(
                                      "v-uni-view",
                                      { staticClass: "pictrue" },
                                      [
                                        e.activity && "1" === e.activity.type && t.$permission("seckill")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("秒杀")))]
                                            )
                                          : t._e(),
                                        e.activity && "2" === e.activity.type && t.$permission("bargain")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("砍价")))]
                                            )
                                          : t._e(),
                                        e.activity && "3" === e.activity.type && t.$permission("combination")
                                          ? i(
                                              "span",
                                              {
                                                staticClass: "pictrue_log pictrue_log_class",
                                                style: "background-color:" + t.labelColor,
                                              },
                                              [t._v(t._s(t.$t("拼团")))]
                                            )
                                          : t._e(),
                                        i("v-uni-image", { attrs: { src: e.image, mode: "aspectFit" } }),
                                      ],
                                      1
                                    ),
                                    i(
                                      "v-uni-view",
                                      {
                                        staticClass: "text-info",
                                        staticStyle: {
                                          display: "flex",
                                          "flex-direction": "column",
                                          "justify-content": "space-between",
                                        },
                                      },
                                      [
                                        i(
                                          "v-uni-view",
                                          [
                                            t.titleShow
                                              ? i("v-uni-view", { staticClass: "title line2" }, [
                                                  t._v(t._s(e.store_name)),
                                                ])
                                              : t._e(),
                                            t.opriceShow
                                              ? i("v-uni-view", { staticClass: "old-price" }, [
                                                  t._v(t._s(t.$t("￥")) + t._s(e.ot_price)),
                                                ])
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                        i(
                                          "v-uni-view",
                                          { staticClass: "price", style: "color:" + t.fontColor },
                                          [
                                            t.priceShow
                                              ? i(
                                                  "v-uni-view",
                                                  [i("v-uni-text", [t._v(t._s(t.$t("￥")))]), t._v(t._s(e.price))],
                                                  1
                                                )
                                              : t._e(),
                                            e.checkCoupon && t.couponShow
                                              ? i(
                                                  "v-uni-view",
                                                  {
                                                    staticClass: "txt",
                                                    class: t.priceShow ? "" : "on",
                                                    style:
                                                      "border:1px solid " + t.labelColor + ";color:" + t.labelColor,
                                                  },
                                                  [t._v(t._s(t.$t("券")))]
                                                )
                                              : t._e(),
                                          ],
                                          1
                                        ),
                                      ],
                                      1
                                    ),
                                  ],
                                  1
                                );
                              }),
                              1
                            ),
                          ]
                        : t._e(),
                    ],
                    2
                  )
                : t._e(),
              3 == t.itemStyle && t.tempArr.length
                ? [
                    i(
                      "v-uni-view",
                      {
                        staticClass: "listBig",
                        class: 0 === t.bgStyle ? "" : "borderRadius15",
                        style: { background: t.themeColor },
                      },
                      t._l(t.tempArr, function (e, a) {
                        return i(
                          "v-uni-view",
                          {
                            key: a,
                            staticClass: "itemBig",
                            class: t.conStyle ? "borderRadius15" : "",
                            on: {
                              click: function (i) {
                                (arguments[0] = i = t.$handleEvent(i)), t.goDetail(e);
                              },
                            },
                          },
                          [
                            i(
                              "v-uni-view",
                              { staticClass: "img-box" },
                              [
                                e.activity && "1" === e.activity.type && t.$permission("seckill")
                                  ? i(
                                      "span",
                                      {
                                        staticClass: "pictrue_log_big pictrue_log_class",
                                        style: "background-color:" + t.labelColor,
                                      },
                                      [t._v(t._s(t.$t("秒杀")))]
                                    )
                                  : t._e(),
                                e.activity && "2" === e.activity.type && t.$permission("bargain")
                                  ? i(
                                      "span",
                                      {
                                        staticClass: "pictrue_log_big pictrue_log_class",
                                        style: "background-color:" + t.labelColor,
                                      },
                                      [t._v(t._s(t.$t("砍价")))]
                                    )
                                  : t._e(),
                                e.activity && "3" === e.activity.type && t.$permission("combination")
                                  ? i(
                                      "span",
                                      {
                                        staticClass: "pictrue_log_big pictrue_log_class",
                                        style: "background-color:" + t.labelColor,
                                      },
                                      [t._v(t._s(t.$t("拼团")))]
                                    )
                                  : t._e(),
                                e.recommend_image
                                  ? i("v-uni-image", { attrs: { src: e.recommend_image, mode: "" } })
                                  : i("v-uni-image", { attrs: { src: e.image, mode: "" } }),
                              ],
                              1
                            ),
                            i("v-uni-view", { staticClass: "name line2" }, [
                              e.checkCoupon && t.couponShow
                                ? i(
                                    "span",
                                    {
                                      staticClass: "coupon",
                                      style: "border:1px solid " + t.labelColor + ";color:" + t.labelColor,
                                    },
                                    [t._v(t._s(t.$t("券")))]
                                  )
                                : t._e(),
                              t.titleShow ? i("span", [t._v(t._s(e.store_name))]) : t._e(),
                            ]),
                            i("v-uni-view", { staticClass: "price", style: "color:" + t.fontColor }, [
                              t.priceShow
                                ? i("span", [
                                    t._v(t._s(t.$t("￥"))),
                                    i("span", { staticClass: "num" }, [t._v(t._s(e.price))]),
                                  ])
                                : t._e(),
                              t.opriceShow
                                ? i("span", { staticClass: "old-price" }, [t._v(t._s(t.$t("￥")) + t._s(e.ot_price))])
                                : t._e(),
                            ]),
                          ],
                          1
                        );
                      }),
                      1
                    ),
                  ]
                : t._e(),
            ],
            2
          );
        },
        n = [];
    },
    f386: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.mask[data-v-9f68e33a]{z-index:9999}.coupon-window[data-v-9f68e33a]{width:%?572?%;height:%?760?%;position:fixed;top:20%;z-index:10000;left:50%;margin-left:%?-286?%;-webkit-transform:translate3d(0,-200%,0);transform:translate3d(0,-200%,0);transition:all .3s cubic-bezier(.25,.5,.5,.9);border-radius:%?30?% %?30?% 0 0;overflow-x:hidden}.co-bag[data-v-9f68e33a]{width:100%;height:%?250?%;z-index:33333;top:%?-40?%;position:absolute}.coupon-window[data-v-9f68e33a]:after{width:%?900?%;height:%?650?%;position:absolute;top:0;left:50%;z-index:11111;margin-left:%?-450?%;content:"";border-radius:50% 50% 0 0;background:var(--view-theme)}.coupon-window.on[data-v-9f68e33a]{-webkit-transform:translateZ(0);transform:translateZ(0)}.coupon-window .couponWinList[data-v-9f68e33a]{width:%?480?%;margin:%?157?% 0 0 %?50?%;height:%?340?%;overflow-y:scroll}.coupon-window .couponWinList .item[data-v-9f68e33a]{width:100%;height:%?120?%;background-color:#fff;position:relative;margin-bottom:%?17?%;position:relative;z-index:99999}.coupon-window .couponWinList .item .left[data-v-9f68e33a]{border-right:1px dashed #ccc}.coupon-window .couponWinList .label[data-v-9f68e33a]{width:%?28?%;height:%?64?%;display:block;position:absolute;top:0;right:%?12?%}.coupon-window .couponWinList .item[data-v-9f68e33a]::after{content:"";position:absolute;width:%?18?%;height:%?18?%;border-radius:50%;background-color:var(--view-theme);left:25.5%;bottom:0;margin-bottom:%?-9?%}.coupon-window .couponWinList .item[data-v-9f68e33a]::before{content:"";position:absolute;width:%?18?%;height:%?18?%;border-radius:50%;background-color:var(--view-theme);left:25.5%;top:0;margin-top:%?-9?%}.coupon-window .couponWinList .item .money[data-v-9f68e33a]{width:%?130?%;text-align:center;font-size:%?26?%;font-weight:700}.coupon-window .couponWinList .item .min_money[data-v-9f68e33a]{color:#ccc;font-size:%?18?%;text-align:center}.coupon-window .couponWinList .item .money .num[data-v-9f68e33a]{font-size:%?40?%}.coupon-window .couponWinList .item .text[data-v-9f68e33a]{width:%?349?%;font-size:%?22?%;color:#ccc;padding:0 %?29?%;box-sizing:border-box}.coupon-window .couponWinList .item .text .image[data-v-9f68e33a]{width:%?32?%;height:%?32?%;display:inline-block;vertical-align:bottom;margin-right:%?10?%}.coupon-window .couponWinList .item .text .name[data-v-9f68e33a]{font-size:%?26?%;color:var(--view-priceColor);font-weight:700;margin-bottom:%?9?%;width:%?250?%}.coupon-window .lid[data-v-9f68e33a]{background:hsla(0,0%,100%,.2);width:%?582?%;height:%?224?%;position:fixed;z-index:22222;left:50%;top:0;margin:%?424?% 0 0 %?-296?%}.coupon-window .lid[data-v-9f68e33a]:after{width:%?920?%;height:%?280?%;position:absolute;top:-100%;left:50%;z-index:22222;margin-left:%?-460?%;content:"";border-radius:0 0 50% 50%;background:var(--view-theme)}.coupon-window .lid .bnt[data-v-9f68e33a]{font-size:%?29?%;width:%?440?%;height:%?80?%;border-radius:%?40?%;background:linear-gradient(90deg,#ffca52,#fe960f);text-align:center;line-height:%?80?%;font-weight:700;margin:%?98?% auto 0 auto;color:#fff}.coupon-window .lid .iconfont[data-v-9f68e33a]{color:#fff;font-size:%?60?%;text-align:center;margin-top:%?87?%}',
          "",
        ]),
        (t.exports = e);
    },
    f620: function (t, e, i) {
      "use strict";
      i.d(e, "b", function () {
        return a;
      }),
        i.d(e, "c", function () {
          return n;
        }),
        i.d(e, "a", function () {});
      var a = function () {
          var t = this,
            e = t.$createElement,
            i = t._self._c || e;
          return i(
            "v-uni-view",
            {
              staticClass: "header",
              style:
                "background: linear-gradient(90deg, " +
                t.bgColor[0].item +
                " 50%, " +
                t.bgColor[1].item +
                " 100%);margin-top:" +
                2 * t.mbConfig +
                "rpx;",
            },
            [
              i(
                "v-uni-view",
                { staticClass: "serch-wrapper acea-row row-middle", style: "padding-left:" + 2 * t.prConfig + "rpx;" },
                [
                  t.logoConfig
                    ? i(
                        "v-uni-view",
                        { staticClass: "logo skeleton-rect" },
                        [i("v-uni-image", { attrs: { src: t.logoConfig, mode: "heightFix" } })],
                        1
                      )
                    : t._e(),
                  i(
                    "v-uni-navigator",
                    {
                      staticClass: "input acea-row row-middle skeleton-rect",
                      class: [t.boxStyle ? "" : "fillet", t.logoConfig ? "" : "on", t.txtStyle ? "row-center" : ""],
                      attrs: { url: "/pages/goods/goods_search/index", "hover-class": "none" },
                    },
                    [i("v-uni-text", { staticClass: "iconfont icon-sousuo" }), t._v(t._s(t.$t("搜索商品")))],
                    1
                  ),
                ],
                1
              ),
            ],
            1
          );
        },
        n = [];
    },
    f7e9: function (t, e, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("a9e3"),
        i("d401"),
        i("d3b7"),
        i("25f0"),
        i("c975"),
        i("ac1f"),
        i("5319");
      var a = {
        name: "swiper",
        props: {
          dataConfig: { type: Object, default: function () {} },
          isSortType: { type: String | Number, default: 0 },
        },
        data: function () {
          return {
            indicatorDots: !1,
            circular: !0,
            autoplay: !0,
            interval: 2500,
            duration: 500,
            swiperCur: 0,
            imgUrls: [],
            docConfig: this.dataConfig.docConfig.type,
            imgConfig: this.dataConfig.imgConfig.type,
            itemEdge: this.dataConfig.itemEdge.val,
            lrConfig: this.dataConfig.lrConfig.val,
            mbConfig: this.dataConfig.mbConfig.val,
            tabConfig: this.dataConfig.tabConfig.tabVal,
            imageH: 0,
          };
        },
        watch: {
          imageH: function (t, e) {
            this.imageH = t;
          },
        },
        created: function () {
          this.imgUrls = this.dataConfig.swiperConfig.list;
        },
        mounted: function () {
          var t = this;
          uni.getImageInfo({
            src: t.setDomain(t.imgUrls[0].img),
            success: function (e) {
              t.$set(t, "imageH", e.height);
            },
          });
        },
        methods: {
          swiperChange: function (t) {
            this.swiperCur = t.detail.current;
          },
          setDomain: function (t) {
            return (t = t ? t.toString() : ""), t.indexOf("https://") > -1 ? t : t.replace("http://", "https://");
          },
        },
      };
      e.default = a;
    },
    fa8a: function (t, e, i) {
      "use strict";
      i("7a82"),
        Object.defineProperty(e, "__esModule", { value: !0 }),
        (e.default = void 0),
        i("d3b7"),
        i("159b"),
        i("ddb0");
      var a = i("df7c"),
        n = i("1c6a"),
        o = {};
      n.keys().forEach(function (t) {
        var e = a.basename(t, ".vue");
        o[e] = n(t).default || n(t);
      });
      var r = o;
      e.default = r;
    },
    fc2d: function (t, e, i) {
      "use strict";
      i.r(e);
      var a = i("3ee0"),
        n = i.n(a);
      for (var o in a)
        ["default"].indexOf(o) < 0 &&
          (function (t) {
            i.d(e, t, function () {
              return a[t];
            });
          })(o);
      e["default"] = n.a;
    },
    fe63: function (t, e, i) {
      var a = i("24fb");
      (e = a(!1)),
        e.push([
          t.i,
          '@charset "UTF-8";\n/**\n * 这里是uni-app内置的常用样式变量\n *\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\n *\n */\n/**\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\n *\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* crmeb颜色变量 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.listBig[data-v-389352ac]{padding:1px %?20?% %?20?% %?20?%}.listBig .borderRadius15 uni-image[data-v-389352ac]{border-radius:%?20?% %?20?% 0 0}.listBig .itemBig[data-v-389352ac]{width:100%;margin-top:%?20?%;background-color:#fff;padding-bottom:%?15?%}.listBig .itemBig .img-box[data-v-389352ac]{width:100%;height:%?284?%;position:relative}.listBig .itemBig .img-box .pictrue_log_big[data-v-389352ac]{border-radius:%?20?% 0 %?20?% 0}.listBig .itemBig .img-box uni-image[data-v-389352ac]{width:100%;height:100%}.listBig .itemBig .name[data-v-389352ac]{font-size:%?28?%;font-weight:700;margin-top:%?16?%;padding:0 8px}.listBig .itemBig .name .coupon[data-v-389352ac]{display:inline-block;text-align:center;width:%?32?%;border-radius:%?4?%;font-size:%?20?%;font-weight:400;margin-right:%?10?%}.listBig .itemBig .price[data-v-389352ac]{font-weight:700;font-size:12px;margin-top:%?10?%;padding:0 8px}.listBig .itemBig .price .num[data-v-389352ac]{font-size:%?32?%;margin-right:%?10?%}.listBig .itemBig .price .old-price[data-v-389352ac]{color:#aaa;font-weight:400;text-decoration:line-through}.index-product-wrapper .list-box[data-v-389352ac]{display:flex;flex-wrap:wrap;justify-content:space-between;padding:%?20?% %?20?% 0}.index-product-wrapper .list-box .item[data-v-389352ac]{width:%?345?%;margin-bottom:%?20?%;background-color:#fff;overflow:hidden;position:relative}.index-product-wrapper .list-box .item.on[data-v-389352ac]{border-radius:0}.index-product-wrapper .list-box .item .pictrue[data-v-389352ac]{width:%?347?%;height:%?347?%}.index-product-wrapper .list-box .item .pictrue_log[data-v-389352ac]{width:%?92?%;height:%?44?%;font-size:%?26?%;line-height:%?44?%;border-radius:0 0 %?20?% 0!important}.index-product-wrapper .list-box .item uni-image[data-v-389352ac]{width:100%;height:100%;display:block}.index-product-wrapper .list-box .item .text-info[data-v-389352ac]{padding:%?10?% %?20?% %?15?%}.index-product-wrapper .list-box .item .text-info .title[data-v-389352ac]{color:#222;line-height:%?34?%;height:%?68?%}.index-product-wrapper .list-box .item .text-info .old-price[data-v-389352ac]{margin-top:%?4?%;font-size:%?20?%;color:#aaa;text-decoration:line-through}.index-product-wrapper .list-box .item .text-info .old-price uni-text[data-v-389352ac]{margin-right:2px;font-size:%?20?%}.index-product-wrapper .list-box .item .text-info .price[data-v-389352ac]{display:flex;align-items:flex-end;font-size:%?36?%;font-weight:550}.index-product-wrapper .list-box .item .text-info .price uni-text[data-v-389352ac]{padding-bottom:%?4?%;font-size:%?26?%;font-weight:400}.index-product-wrapper .list-box .item .text-info .price .txt[data-v-389352ac]{display:flex;align-items:center;justify-content:center;width:%?28?%;height:%?28?%;margin-left:%?15?%;margin-bottom:%?10?%;border-radius:%?4?%;font-size:%?20?%;font-weight:400}.index-product-wrapper .list-box .item .text-info .price .txt.on[data-v-389352ac]{margin-left:0}.index-product-wrapper .list-box.on[data-v-389352ac]{display:flex}.index-product-wrapper .list-box.listA .item[data-v-389352ac]{display:flex;width:100%}.index-product-wrapper .list-box.listA .item .pictrue[data-v-389352ac]{width:%?220?%!important;height:%?220?%!important}.index-product-wrapper .list-box.listA .item .text-info[data-v-389352ac]{flex:1}.index-product-wrapper .list-box.listC .item[data-v-389352ac]{width:48.5%}.index-product-wrapper .list-box.listC .pictrue[data-v-389352ac]{width:100%;height:%?345?%}.index-product-wrapper .list-box.listB[data-v-389352ac]{justify-content:inherit}.index-product-wrapper .list-box.listB .item[data-v-389352ac]{width:31.6%;margin-right:%?16?%}.index-product-wrapper .list-box.listB .item .pictrue[data-v-389352ac]{width:100%;height:%?220?%}.index-product-wrapper .list-box.listB .item[data-v-389352ac]:nth-child(3n){margin-right:0}',
          "",
        ]),
        (t.exports = e);
    },
    ff4d: function (t, e, i) {
      var a = i("1a51");
      a.__esModule && (a = a.default),
        "string" === typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
      var n = i("4f06").default;
      n("f97efd26", a, !0, { sourceMap: !1, shadowMode: !1 });
    },
  },
]);
